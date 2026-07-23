import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import BrewingRecipe from './BrewingRecipe.vue'
import CraftingRecipe from './CraftingRecipe.vue'
import FurnaceRecipe from './FurnaceRecipe.vue'
import SmeltingRecipe from './SmeltingRecipe.vue'
import StonecuttingRecipe from './StonecuttingRecipe.vue'
import InventorySlot from './minecraft_inventory/InventorySlot.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    if (typeof window !== 'undefined') {
      document.addEventListener('selectionchange', applySelectionColorsStyle)
      initMineTip()
    }
    app.component('CraftingRecipe', CraftingRecipe)
    app.component('FurnaceRecipe', FurnaceRecipe)
    app.component('BrewingRecipe', BrewingRecipe)
    app.component('StonecuttingRecipe', StonecuttingRecipe)
    app.component('SmeltingRecipe', SmeltingRecipe)
    app.component('InventorySlot', InventorySlot)
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
