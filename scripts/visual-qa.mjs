import { spawn, spawnSync } from 'node:child_process';
import { mkdir } from 'node:fs/promises';
import net from 'node:net';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright-core';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const PORT = 5199;
const DEFAULT_BASE = `http://127.0.0.1:${PORT}`;

const SHOTS = [
  { name: '01-home-dark', path: '/', theme: 'dark', width: 1440, height: 900, scroll: 0 },
  { name: '02-home-light', path: '/', theme: 'light', width: 1440, height: 900, scroll: 0 },
  { name: '03-god-dark', path: '/gods/1_infinitum', theme: 'dark', width: 1440, height: 1100, scroll: 0 },
  { name: '04-god-dark-scrolled', path: '/gods/1_infinitum', theme: 'dark', width: 1440, height: 1100, scroll: 700 },
  { name: '05-items-dark', path: '/gods/items/5_bellum/', theme: 'dark', width: 1440, height: 1000, scroll: 0 },
  { name: '06-mechanics-dark', path: '/guide/mechanics/', theme: 'dark', width: 1440, height: 1000, scroll: 0 },
  { name: '07-mechanics-light', path: '/guide/mechanics/', theme: 'light', width: 1440, height: 1000, scroll: 0 },
  { name: '08-rules-light', path: '/rules', theme: 'light', width: 1440, height: 1000, scroll: 0 },
  { name: '09-home-mobile-dark', path: '/', theme: 'dark', width: 390, height: 844, scroll: 0 },
  { name: '10-god-mobile-light', path: '/gods/1_infinitum', theme: 'light', width: 390, height: 844, scroll: 0 },
];

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function parseArgs(argv) {
  let base;
  let out = path.join(root, '.qa');
  let only;

  const valueAt = (index, flag) => {
    const value = argv[index];
    if (value === undefined || value.startsWith('--')) throw new Error(`Missing value for ${flag}`);
    return value;
  };

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === '--base') base = valueAt(++i, '--base');
    else if (arg.startsWith('--base=')) base = arg.slice('--base='.length);
    else if (arg === '--out') out = valueAt(++i, '--out');
    else if (arg.startsWith('--out=')) out = arg.slice('--out='.length);
    else if (arg === '--only') only = valueAt(++i, '--only');
    else if (arg.startsWith('--only=')) only = arg.slice('--only='.length);
    else throw new Error(`Unknown argument: ${arg}`);
  }

  return {
    base: (base || DEFAULT_BASE).replace(/\/+$/, ''),
    baseProvided: Boolean(base),
    out: path.resolve(root, out),
    only,
  };
}

function startDevServer() {
  const child = spawn(
    'npx',
    ['vitepress', 'dev', 'docs', '--port', String(PORT), '--host', '127.0.0.1'],
    {
      cwd: root,
      stdio: ['ignore', 'pipe', 'pipe'],
      shell: process.platform === 'win32',
      windowsHide: true,
    },
  );

  let log = '';
  let spawnError = null;
  const record = (chunk) => {
    log = `${log}${chunk.toString()}`.slice(-8000);
  };

  child.stdout?.on('data', record);
  child.stderr?.on('data', record);
  child.on('error', (error) => {
    spawnError = error;
    record(`\n[spawn error] ${error.message}\n`);
  });

  return { child, getLog: () => log, getSpawnError: () => spawnError };
}

async function waitForServer(base, timeoutMs = 180_000, getSpawnError) {
  const deadline = Date.now() + timeoutMs;
  let lastStatus = 'no response';

  while (Date.now() < deadline) {
    if (getSpawnError?.()) throw getSpawnError();
    try {
      const response = await fetch(`${base}/`, { signal: AbortSignal.timeout(3000) });
      lastStatus = `HTTP ${response.status}`;
      await response.arrayBuffer();
      if (response.status === 200) return;
    } catch (error) {
      lastStatus = error.message;
    }
    await delay(500);
  }

  throw new Error(`Server at ${base} did not return HTTP 200 within ${timeoutMs / 1000} s (last: ${lastStatus})`);
}

async function stopDevServer(child) {
  if (!child?.pid) return;
  if (process.platform === 'win32') {
    const result = spawnSync('taskkill', ['/pid', String(child.pid), '/T', '/F'], {
      stdio: 'ignore',
      windowsHide: true,
    });
    if (result.error || result.status !== 0) child.kill();
  } else {
    child.kill('SIGTERM');
  }
  await delay(300);
}

async function isPortListening(port) {
  return new Promise((resolve) => {
    const socket = net.createConnection({ host: '127.0.0.1', port });
    const finish = (listening) => {
      socket.destroy();
      resolve(listening);
    };
    socket.once('connect', () => finish(true));
    socket.once('error', () => finish(false));
    socket.setTimeout(1000, () => finish(false));
  });
}

async function launchBrowser() {
  const failures = [];
  for (const channel of ['msedge', 'chrome']) {
    try {
      const browser = await chromium.launch({ channel, headless: true });
      return { browser, channel };
    } catch (error) {
      failures.push(`${channel}: ${String(error.message).split('\n')[0]}`);
    }
  }
  throw new Error(
    `Neither msedge nor chrome could be launched (${failures.join('; ')}). Install a browser with: npx playwright install chromium`,
  );
}

async function captureShots({ browser, base, outDir, only, errors }) {
  const selected = SHOTS.filter((shot) => !only || shot.name.includes(only));
  const written = [];

  for (const shot of selected) {
    const context = await browser.newContext({
      viewport: { width: shot.width, height: shot.height },
      deviceScaleFactor: 1,
    });
    const page = await context.newPage();
    const shotErrors = [];

    page.on('pageerror', (error) => shotErrors.push(`pageerror: ${error.message}`));
    page.on('console', (message) => {
      if (message.type() === 'error') shotErrors.push(`console error: ${message.text()}`);
    });
    page.on('response', (response) => {
      if (response.status() >= 400) shotErrors.push(`HTTP ${response.status()} ${response.url()}`);
    });

    try {
      await page.addInitScript((appearance) => {
        localStorage.setItem('vitepress-theme-appearance', appearance);
      }, shot.theme);

      await page.goto(new URL(shot.path, `${base}/`).toString(), {
        waitUntil: 'networkidle',
        timeout: 60_000,
      });
      await delay(700);
      await page.evaluate(() => document.fonts.ready);

      if (shot.scroll) {
        await page.evaluate((y) => window.scrollTo(0, y), shot.scroll);
        await delay(500);
      }

      const file = path.join(outDir, `${shot.name}.png`);
      await page.screenshot({ path: file, type: 'png' });
      written.push(file);
      console.log(
        `saved ${path.relative(root, file)} [${shot.theme}, ${shot.width}x${shot.height}${shot.scroll ? `, scroll ${shot.scroll}` : ''}]`,
      );
    } finally {
      for (const error of shotErrors) errors.add(`${shot.name}: ${error}`);
      await context.close();
    }
  }

  return written;
}

function printSummary({ written, errors, channel, base, outDir, portState }) {
  console.log('\n=== visual-qa summary ===');
  console.log(`browser channel: ${channel || 'none'}`);
  console.log(`base: ${base}`);
  console.log(`screenshots: ${written.length}`);
  for (const file of written) console.log(`- ${file}`);
  if (portState) console.log(`port ${PORT} after cleanup: ${portState}`);
  if (errors.size === 0) {
    console.log('no page errors');
  } else {
    console.log(`page errors (${errors.size} unique):`);
    for (const error of errors) console.log(`- ${error}`);
  }
}

let activeServer = null;
let activeBrowser = null;

for (const signal of ['SIGINT', 'SIGTERM']) {
  process.once(signal, async () => {
    if (activeBrowser) await activeBrowser.close().catch(() => {});
    if (activeServer) await stopDevServer(activeServer.child);
    process.exit(signal === 'SIGINT' ? 130 : 143);
  });
}

async function main() {
  const options = parseArgs(process.argv.slice(2));
  await mkdir(options.out, { recursive: true });

  const errors = new Set();
  let browser = null;
  let channel = null;
  let written = [];
  let portState = null;

  try {
    if (!options.baseProvided) {
      activeServer = startDevServer();
      console.log(`started dev server on ${options.base}`);
    } else {
      console.log(`using existing server at ${options.base}`);
    }

    await waitForServer(options.base, 180_000, activeServer?.getSpawnError);

    const launched = await launchBrowser();
    browser = launched.browser;
    activeBrowser = browser;
    channel = launched.channel;

    written = await captureShots({
      browser,
      base: options.base,
      outDir: options.out,
      only: options.only,
      errors,
    });
  } catch (error) {
    console.error(`visual-qa failed: ${error.stack || error.message}`);
    if (activeServer) console.error(`\n[dev server log tail]\n${activeServer.getLog()}`);
    process.exitCode = 1;
  } finally {
    if (browser) await browser.close().catch(() => {});
    if (activeServer) await stopDevServer(activeServer.child);
    if (!options.baseProvided) portState = (await isPortListening(PORT)) ? 'busy' : 'free';
    printSummary({ written, errors, channel, base: options.base, outDir: options.out, portState });
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
