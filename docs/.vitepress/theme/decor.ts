import type { Router } from 'vitepress'

/**
 * Decorative runtime effects for the redesign: scroll reveal, reading progress
 * and a pointer spotlight on cards. Pure presentation — no content is created
 * or modified. Every entry point is safe on the server and on rerenders.
 */

const REVEAL_READY_CLASS = 'ag-reveal-ready'
const REVEALED_CLASS = 'ag-revealed'
const SPOT_CLASS = 'ag-spot'
const SPOT_SELECTOR = [
  '.vp-doc .item-card',
  '.vp-doc .faction-card',
  '.vp-doc .mechanic-card',
  '.vp-doc .feature-card',
  '.VPHome .VPFeature.link'
].join(', ')

function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/* -------------------------------------------------------------------------- */
/* Reading progress                                                           */
/* -------------------------------------------------------------------------- */

let progressBar: HTMLDivElement | null = null

function initScrollProgress(): void {
  if (progressBar) return

  progressBar = document.createElement('div')
  progressBar.id = 'ag-scroll-progress'
  progressBar.setAttribute('aria-hidden', 'true')
  document.body.appendChild(progressBar)

  const bar = progressBar
  let frame = 0

  const update = () => {
    frame = 0
    const scrollable = document.documentElement.scrollHeight - window.innerHeight
    const ratio = scrollable > 0 ? Math.min(1, Math.max(0, window.scrollY / scrollable)) : 0
    bar.style.setProperty('--ag-progress', ratio.toFixed(4))
  }

  const schedule = () => {
    if (frame) return
    frame = requestAnimationFrame(update)
  }

  window.addEventListener('scroll', schedule, { passive: true })
  window.addEventListener('resize', schedule, { passive: true })
  update()
}

/* -------------------------------------------------------------------------- */
/* Scroll reveal                                                              */
/* -------------------------------------------------------------------------- */

let revealObserver: IntersectionObserver | null = null
let revealSafetyTimer: number | null = null

function revealEverything(): void {
  document.querySelectorAll('.vp-doc > *').forEach((element) => {
    element.classList.add(REVEALED_CLASS)
  })
}

function attachReveal(): void {
  const article = document.querySelector('.vp-doc')
  if (!article) return

  const blocks = Array.from(article.children) as HTMLElement[]
  if (blocks.length === 0) return

  document.documentElement.classList.add(REVEAL_READY_CLASS)

  revealObserver?.disconnect()
  revealObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        entry.target.classList.add(REVEALED_CLASS)
        revealObserver?.unobserve(entry.target)
      }
    },
    { rootMargin: '0px 0px -6% 0px', threshold: 0.01 }
  )

  if (revealSafetyTimer) window.clearTimeout(revealSafetyTimer)
  revealSafetyTimer = window.setTimeout(revealEverything, 3000)

  for (const block of blocks) {
    if (block.classList.contains(REVEALED_CLASS)) continue
    revealObserver.observe(block)
  }
}

function scheduleReveal(attempt = 0): void {
  window.setTimeout(
    () => {
      if (!document.querySelector('.vp-doc')) {
        if (attempt < 20) scheduleReveal(attempt + 1)
        return
      }
      document.documentElement.classList.remove(REVEAL_READY_CLASS)
      requestAnimationFrame(() => requestAnimationFrame(attachReveal))
    },
    attempt === 0 ? 60 : 100
  )
}

/* -------------------------------------------------------------------------- */
/* Pointer spotlight                                                          */
/* -------------------------------------------------------------------------- */

function initSpotlight(): void {
  let hovered: HTMLElement | null = null
  let frame = 0
  let pointer: { x: number; y: number } | null = null

  const paint = () => {
    frame = 0
    if (!hovered || !pointer) return
    const rect = hovered.getBoundingClientRect()
    hovered.style.setProperty('--ag-mx', `${Math.round(pointer.x - rect.left)}px`)
    hovered.style.setProperty('--ag-my', `${Math.round(pointer.y - rect.top)}px`)
    pointer = null
  }

  document.addEventListener(
    'pointermove',
    (event) => {
      const target = (event.target as HTMLElement | null)?.closest?.(SPOT_SELECTOR) as HTMLElement | null
      if (!target) {
        hovered = null
        return
      }
      if (!target.classList.contains(SPOT_CLASS)) target.classList.add(SPOT_CLASS)
      hovered = target
      pointer = { x: event.clientX, y: event.clientY }
      if (!frame) frame = requestAnimationFrame(paint)
    },
    { passive: true }
  )
}

/* -------------------------------------------------------------------------- */
/* Entry point                                                                */
/* -------------------------------------------------------------------------- */

export function initDecor(router?: Router): void {
  if (typeof window === 'undefined') return

  initScrollProgress()

  if (prefersReducedMotion()) return

  initSpotlight()

  if (router) {
    const originalAfterRouteChange = router.onAfterRouteChange
    router.onAfterRouteChange = async (to: string) => {
      await originalAfterRouteChange?.(to)
      scheduleReveal()
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => scheduleReveal())
  } else {
    scheduleReveal()
  }
}
