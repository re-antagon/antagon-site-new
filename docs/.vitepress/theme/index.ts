import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import BrewingRecipe from './BrewingRecipe.vue'
import CraftingRecipe from './CraftingRecipe.vue'
import FurnaceRecipe from './FurnaceRecipe.vue'
import SmeltingRecipe from './SmeltingRecipe.vue'
import StonecuttingRecipe from './StonecuttingRecipe.vue'
import ItemCard from './ItemCard.vue'
import ItemGrid from './ItemGrid.vue'
import ItemFrontmatter from './ItemFrontmatter.vue'
import InventorySlot from './minecraft_inventory/InventorySlot.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app, router }) {
    if (typeof window !== 'undefined') {
      document.addEventListener('selectionchange', applySelectionColorsStyle)
      initMineTip()
      initSidebarAutoExpand(router)
    }
    app.component('CraftingRecipe', CraftingRecipe)
    app.component('FurnaceRecipe', FurnaceRecipe)
    app.component('BrewingRecipe', BrewingRecipe)
    app.component('StonecuttingRecipe', StonecuttingRecipe)
    app.component('SmeltingRecipe', SmeltingRecipe)
    app.component('InventorySlot', InventorySlot)
    app.component('ItemCard', ItemCard)
    app.component('ItemGrid', ItemGrid)
    app.component('ItemFrontmatter', ItemFrontmatter)
  }
} satisfies Theme

function initMineTip() {
  if (typeof window === 'undefined') return

  let tooltipEl = document.getElementById('minetip-tooltip')
  if (!tooltipEl) {
    tooltipEl = document.createElement('div')
    tooltipEl.id = 'minetip-tooltip'
    tooltipEl.innerHTML = '<span class="minetip-title"></span>'
    document.body.appendChild(tooltipEl)
  }

  const titleEl = tooltipEl.querySelector('.minetip-title') as HTMLElement
  let currentTarget: HTMLElement | null = null

  const updateTitle = () => {
    if (!currentTarget || !titleEl) return
    const title = currentTarget.getAttribute('data-minetip-title') || ''
    if (titleEl.textContent !== title) {
      titleEl.textContent = title
    }
  }

  const observer = new MutationObserver(() => {
    updateTitle()
  })

  document.addEventListener('mousemove', (e) => {
    if (!tooltipEl) return
    const target = (e.target as HTMLElement)?.closest?.('[data-minetip-title]') as HTMLElement | null

    if (target) {
      if (currentTarget !== target) {
        observer.disconnect()
        currentTarget = target
        observer.observe(target, { attributes: true, attributeFilter: ['data-minetip-title'] })
      }

      updateTitle()
      tooltipEl.style.display = 'block'

      let left = e.clientX + 12
      let top = e.clientY - 28

      const rect = tooltipEl.getBoundingClientRect()
      if (left + rect.width > window.innerWidth - 10) {
        left = e.clientX - rect.width - 10
      }
      if (top < 10) {
        top = e.clientY + 20
      }

      tooltipEl.style.left = `${left}px`
      tooltipEl.style.top = `${top}px`
    } else {
      if (currentTarget) {
        observer.disconnect()
        currentTarget = null
      }
      tooltipEl.style.display = 'none'
    }
  })
}


function applySelectionColorsStyle() {
  const selection = window.getSelection()
  if (!selection || selection.toString().trim() === '') {
    return
  }
  let styleElement = document.getElementById('selection-style')
  if (!styleElement) {
    styleElement = document.createElement('style')
    styleElement.id = 'selection-style'
    document.head.appendChild(styleElement)
  }
  
  styleElement.textContent = `
::selection {
  color: var(--vp-c-neutral-inverse) !important;
  background-color: var(--vp-c-neutral) !important;
}
::-moz-selection {
  color: var(--vp-c-neutral-inverse) !important;
  background-color: var(--vp-c-neutral) !important;
}`
}

function initSidebarAutoExpand(router?: any) {
  if (typeof window === 'undefined') return

  const collapseSiblings = (sidebarItem: HTMLElement) => {
    const parentContainer = sidebarItem.parentElement
    if (parentContainer && parentContainer.classList.contains('items')) {
      const siblings = Array.from(parentContainer.children).filter(
        (child) => child !== sidebarItem && child.classList.contains('collapsible') && !child.classList.contains('collapsed')
      ) as HTMLElement[]

      for (const sibling of siblings) {
        const caret = sibling.querySelector('.item > .caret') as HTMLElement | null
        if (caret) {
          caret.click()
        }
      }
    }
  }

  const handleItemClick = (sidebarItem: HTMLElement) => {
    collapseSiblings(sidebarItem)
    if (sidebarItem.classList.contains('collapsed')) {
      const caret = sidebarItem.querySelector('.item > .caret') as HTMLElement | null
      if (caret) {
        caret.click()
      }
    }
  }

  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement

    // If clicked on caret button directly
    const caret = target?.closest?.('.VPSidebarItem.collapsible .item > .caret') as HTMLElement | null
    if (caret) {
      const sidebarItem = caret.closest('.VPSidebarItem.collapsible') as HTMLElement | null
      if (sidebarItem && sidebarItem.classList.contains('collapsed')) {
        collapseSiblings(sidebarItem)
      }
      return
    }

    // If clicked on link text of a collapsible item
    const link = target?.closest?.('.VPSidebarItem.collapsible .item > .link') as HTMLElement | null
    if (link) {
      const sidebarItem = link.closest('.VPSidebarItem.collapsible') as HTMLElement | null
      if (sidebarItem) {
        handleItemClick(sidebarItem)
      }
    }
  })

  const expandByHash = () => {
    const rawHash = window.location.hash
    if (!rawHash) return
    const decodedHash = decodeURIComponent(rawHash).toLowerCase()

    const sidebarItems = Array.from(document.querySelectorAll('.VPSidebarItem.collapsible')) as HTMLElement[]
    for (const item of sidebarItems) {
      const link = item.querySelector('.item > .link') as HTMLAnchorElement | null
      if (link) {
        const href = (link.getAttribute('href') || '').toLowerCase()
        const decodedHref = decodeURIComponent(href)
        if (decodedHref.includes(decodedHash) || href.includes(rawHash.toLowerCase())) {
          handleItemClick(item)
          break
        }
      }
    }
  }

  if (router) {
    const origAfterRoute = router.onAfterRouteChange
    router.onAfterRouteChange = async (to: string) => {
      await origAfterRoute?.(to)
      setTimeout(() => expandByHash(), 50)
      setTimeout(() => expandByHash(), 200)
    }
  }

  window.addEventListener('hashchange', () => {
    setTimeout(() => expandByHash(), 50)
  })

  // Observe DOM for sidebar rendering on route change
  let observer: MutationObserver | null = null
  const attachObserver = () => {
    if (observer) {
      observer.disconnect()
    }
    const target = document.querySelector('.VPSidebar') || document.body
    observer = new MutationObserver(() => {
      expandByHash()
    })
    observer.observe(target, { childList: true, subtree: true })
    expandByHash()
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', attachObserver)
  } else {
    attachObserver()
  }
}




