#!/usr/bin/env node
/**
 * Updates discord avatar urls in docs/promo/team.md.
 *
 * For each discord.com/users/<id> link, the script queries the discord api for
 * the current avatar hash (the bot must be a member of the DISCORD_GUILD_ID server)
 * and overwrites the avatar field: only if the hash has actually changed.
 * Animated avatars are saved as .gif files, regular ones as .webp files.
 *
 * .env:
 *   DISCORD_BOT_TOKEN  - discord bot toket (required)
 *   DISCORD_GUILD_ID   - id of discord server (required)
 *   TEAM_MD_PATH       -  path to team.md (default is docs/promo/team.md)
 */

import { readFile, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'

try {
  const raw = await readFile(resolve(process.cwd(), '.env'), 'utf8')
  for (const line of raw.split(/\r?\n/)) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)?\s*$/)
    if (!m) continue
    if (process.env[m[1]]) continue // .env more important
    let val = (m[2] ?? '').trim()
    if (
      (val.startsWith('"') && val.endsWith('"')) ||
      (val.startsWith("'") && val.endsWith("'"))
    ) {
      val = val.slice(1, -1)
    }
    process.env[m[1]] = val
  }
} catch {}

const TOKEN = process.env.DISCORD_BOT_TOKEN
const GUILD_ID = process.env.DISCORD_GUILD_ID
const TEAM_MD = process.env.TEAM_MD_PATH || 'docs/promo/team.md'

if (!TOKEN || !GUILD_ID) {
  console.error('Не заданы DISCORD_BOT_TOKEN и/или DISCORD_GUILD_ID')
  console.error('Создай .env или добавь секреты в CI')
  process.exit(1)
}

const DISCORD_API = 'https://discord.com/api/v10'
const REQUEST_DELAY_MS = 300

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms))
}

function avatarUrl(userId, hash) {
  if (!hash) {
    const idx = Number((BigInt(userId) >> 22n) % 6n)
    return `https://cdn.discordapp.com/embed/avatars/${idx}.png`
  }
  const ext = hash.startsWith('a_') ? 'gif' : 'webp'
  return `https://cdn.discordapp.com/avatars/${userId}/${hash}.${ext}?size=1024`
}

async function fetchMember(userId, attempt = 0) {
  const res = await fetch(
    `${DISCORD_API}/guilds/${GUILD_ID}/members/${userId}`,
    { headers: { Authorization: `Bot ${TOKEN}` } }
  )

  if (res.status === 429 && attempt < 5) {
    let retryAfter = 1
    try {
      const body = await res.json()
      if (typeof body.retry_after === 'number') retryAfter = body.retry_after
    } catch {}
    await sleep(retryAfter * 1000 + 50)
    return fetchMember(userId, attempt + 1)
  }

  if (!res.ok) {
    const text = await res.text()
    throw new Error(`Discord API ${res.status} для ${userId}: ${text}`)
  }
  return res.json()
}

const source = await readFile(TEAM_MD, 'utf8')

const ids = [
  ...new Set(
    [...source.matchAll(/discord\.com\/users\/(\d+)/g)].map((m) => m[1])
  )
]

console.log(`Найдено участников: ${ids.length}`)

let updated = source
let changedCount = 0
const errors = []

for (const id of ids) {
  let member
  try {
    member = await fetchMember(id)
  } catch (e) {
    errors.push(e.message)
    await sleep(REQUEST_DELAY_MS)
    continue
  }

  await sleep(REQUEST_DELAY_MS)

  const hash = member.user?.avatar ?? null
  const newUrl = avatarUrl(id, hash)
  const label = member.user?.username ?? member.nick ?? id

  const blockRe = new RegExp(
    `(avatar:\\s*')[^']*('(?:(?!avatar:)[\\s\\S])*?discord\\.com/users/${id}(?!\\d))`,
    'g'
  )
  const matches = [...updated.matchAll(blockRe)]
  if (matches.length === 0) {
    errors.push(`Не найдена пара avatar/link для ${id} (${label})`)
    continue
  }

  if (matches.every((m) => m[0].includes(newUrl))) {
    console.log(`= ${label} — без изменений`)
    continue
  }

  updated = updated.replace(blockRe, (_m, p1, p2) => `${p1}${newUrl}${p2}`)
  changedCount += matches.length
  console.log(`✓ ${label} → ${newUrl}`)
}

if (updated !== source) {
  await writeFile(TEAM_MD, updated, 'utf8')
}

console.log(`\nОбновлено блоков с аватарками: ${changedCount}`)
if (errors.length) {
  console.error(`\nПредупреждения (${errors.length}):`)
  for (const e of errors) console.error(' - ' + e)
  process.exitCode = 0 // dont shut down CI: some people could simply leave the server
}