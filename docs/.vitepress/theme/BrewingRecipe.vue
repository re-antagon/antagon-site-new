<template>
  <div class="brewing-recipe-container">
    <span class="mcui mcui-Brewing_Stand pixel-image">
      <span class="mcui-input" :class="{ 'mcui-inactive': inactive }">
        <InventorySlot :item="fuel" :count="fuelCount" />
        <span class="mcui-blaze"><br></span>
        <span class="mcui-bubbling"><br></span>
        <InventorySlot :item="ingredient" :count="ingredientCount" />
        <span class="mcui-arrow"><br></span>
        <span class="mcui-paths"><br></span>
        <span class="mcui-output">
          <InventorySlot :item="outputSlot1" class="mcui-output1" />
          <InventorySlot :item="outputSlot2" class="mcui-output2" />
          <InventorySlot :item="outputSlot3" class="mcui-output3" />
        </span>
      </span>
    </span>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import InventorySlot from './minecraft_inventory/InventorySlot.vue'

interface Props {
  ingredient?: string
  ingredientCount?: number
  fuel?: string
  fuelCount?: number
  base1?: string
  base2?: string
  base3?: string
  output1?: string
  output2?: string
  output3?: string
  inactive?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  ingredient: '',
  ingredientCount: 1,
  fuel: 'blaze_powder',
  fuelCount: 1,
  base1: '',
  base2: '',
  base3: '',
  output1: '',
  output2: '',
  output3: '',
  inactive: false
})

const hasBase = computed(() => !!(props.base1 || props.base2 || props.base3))

const slot1 = computed(() => {
  if (props.output1) return props.output1
  if (props.base1) return props.base1
  return ''
})

const slot2 = computed(() => {
  if (props.output2) return props.output2
  if (props.base2) return props.base2
  if (props.output1) return props.output1
  if (props.base1) return props.base1
  return ''
})

const slot3 = computed(() => {
  if (props.output3) return props.output3
  if (props.base3) return props.base3
  if (props.output1) return props.output1
  if (props.base1) return props.base1
  return ''
})

const outputSlot1 = computed(() => props.output1 || '')
const outputSlot2 = computed(() => props.output2 || (props.output1 ? props.output1 : ''))
const outputSlot3 = computed(() => props.output3 || (props.output1 ? props.output1 : ''))
</script>

<style scoped>
.brewing-recipe-container {
  margin: 12px 0;
  display: block;
}
</style>
