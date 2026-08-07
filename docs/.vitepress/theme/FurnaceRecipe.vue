<template>
  <div>
    <span class="mcui mcui-Furnace pixel-image">
      <span class="mcui-input">
        <InventorySlot :item="input" :count="inputCount" />
        <span class="mcui-fuel" :class="{ 'mcui-inactive': !input && !fuel }"><br></span>
        <InventorySlot :item="fuel" :count="fuelCount" />
      </span>
      <span
        class="mcui-arrow"
        :class="{
          'mcui-inactive': (!input && !fuel) || !output,
          'mcui-animated': isAnimated
        }"
        :style="arrowStyle"
        :title="arrowTitle"
      ><br></span>
      <span class="mcui-output">
        <InventorySlot :item="output" :count="outputCount" class="invslot-large" />
      </span>
      <span v-if="experience" class="animated mcui-experience" title="XP reward">
        <span class="mcui-experience-orb"></span>
        <span class="mcui-experience-text">&nbsp;{{ experience }}</span>
      </span>
    </span>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import InventorySlot from './minecraft_inventory/InventorySlot.vue'

interface Props {
  input?: string
  inputCount?: number
  fuel?: string
  fuelCount?: number
  output: string
  outputCount?: number
  experience?: number | string
  cookingTime?: string | number | boolean
  cooking_time?: string | number | boolean
  cookTime?: string | number | boolean
  cook_time?: string | number | boolean
  smeltingTime?: string | number | boolean
  smelting_time?: string | number | boolean
  time?: string | number | boolean
}

const props = withDefaults(defineProps<Props>(), {
  input: '',
  inputCount: 1,
  fuel: 'coal',
  fuelCount: 1,
  outputCount: 1,
  experience: 0
})

function parseCookingTime(val: string | number | boolean | undefined | null): { isAnimated: boolean; seconds: number; text?: string } {
  if (val === undefined || val === null || val === false || val === '') {
    return { isAnimated: true, seconds: 10, text: '10 сек.' }
  }

  if (val === true) {
    return { isAnimated: true, seconds: 10, text: '10 сек.' }
  }

  if (typeof val === 'number') {
    if (val <= 0) return { isAnimated: false, seconds: 10 }
    const sec = val >= 20 ? val / 20 : val
    return { isAnimated: true, seconds: sec, text: `${sec} сек.` }
  }

  const str = String(val).trim()
  if (!str) return { isAnimated: true, seconds: 10, text: '10 сек.' }

  const lower = str.toLowerCase()
  const secMatch = lower.match(/^([\d.]+)\s*(s|sec|seconds|сек|секунд|сек\.)?$/)
  if (secMatch) {
    const num = parseFloat(secMatch[1])
    if (!isNaN(num) && num > 0) {
      const unit = secMatch[2]
      let sec = num
      if (!unit && num >= 20) {
        sec = num / 20
      }
      return { isAnimated: true, seconds: sec, text: str }
    }
  }

  const tickMatch = lower.match(/^([\d.]+)\s*(t|ticks|тик|тиков)?$/)
  if (tickMatch) {
    const num = parseFloat(tickMatch[1])
    if (!isNaN(num) && num > 0) {
      const sec = num / 20
      return { isAnimated: true, seconds: sec, text: str }
    }
  }

  return { isAnimated: true, seconds: 10, text: str }
}

const rawTime = computed(() => {
  return props.cookingTime ?? 
         props.cooking_time ?? 
         props.cookTime ?? 
         props.cook_time ?? 
         props.smeltingTime ?? 
         props.smelting_time ?? 
         props.time
})

const timeInfo = computed(() => parseCookingTime(rawTime.value))

const isAnimated = computed(() => timeInfo.value.isAnimated)

const arrowStyle = computed(() => {
  if (!isAnimated.value) return {}
  return {
    '--cooking-time': `${timeInfo.value.seconds}s`
  }
})

const arrowTitle = computed(() => {
  if (!isAnimated.value) return undefined
  return `Время плавки: ${timeInfo.value.text}`
})
</script>
