<template>
  <div>
    <span class="mcui mcui-Crafting_Table pixel-image">
      <span class="mcui-input">
        <span class="mcui-row">
          <InventorySlot :item="getCurrent(input1)" />
          <InventorySlot :item="getCurrent(input2)" />
          <InventorySlot :item="getCurrent(input3)" />
        </span>
        <span class="mcui-row">
          <InventorySlot :item="getCurrent(input4)" />
          <InventorySlot :item="getCurrent(input5)" />
          <InventorySlot :item="getCurrent(input6)" />
        </span>
        <span class="mcui-row">
          <InventorySlot :item="getCurrent(input7)" />
          <InventorySlot :item="getCurrent(input8)" />
          <InventorySlot :item="getCurrent(input9)" />
        </span>
      </span>
      <span class="mcui-arrow">
        <br>
      </span>
      <span class="mcui-output">
        <InventorySlot :item="getCurrent(output)" :count="output_count" class="invslot-large" />
      </span>
      <span v-if="shapeless || fixed" class="mcui-icons">
        <span 
          v-if="shapeless" 
          class="mcui-shapeless" 
          title="This recipe is shapeless; the inputs may be placed in any arrangement in the crafting grid."
        >
          <br>
        </span>
        <span 
          v-if="fixed" 
          class="mcui-fixed" 
          title="This recipe has a fixed arrangement; the inputs must be placed in specific positions."
        >
          <br>
        </span>
      </span>
    </span>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import InventorySlot from './minecraft_inventory/InventorySlot.vue'

const props = defineProps({
  input1: String,
  input2: String,
  input3: String,
  input4: String,
  input5: String,
  input6: String,
  input7: String,
  input8: String,
  input9: String,
  output: {
    type: String,
    required: true
  },
  output_count: {
    type: Number,
    default: 1
  },
  shapeless: {
    type: Boolean,
    default: false
  },
  fixed: {
    type: Boolean,
    default: false
  }
})

// Global frame index — all animated slots cycle in sync
const frameIndex = ref(0)
let timer = null

onMounted(() => {
  timer = setInterval(() => {
    frameIndex.value++
  }, 2000)
})

onUnmounted(() => {
  if (timer) clearInterval(timer)
})

/**
 * Parse a slot value into an array of frames.
 * "dirt;coarse_dirt;mud" → ["dirt", "coarse_dirt", "mud"]
 * "coal"                  → ["coal"]
 */
const parseFrames = (value) => {
  if (!value) return []
  return value.split(';').map(s => s.trim()).filter(Boolean)
}

/**
 * Return the currently active frame for a given slot value.
 * Non-animated slots (no semicolons) always return the single item.
 */
const getCurrent = (value) => {
  if (!value) return ''
  const frames = parseFrames(value)
  if (frames.length <= 1) return frames[0] ?? ''
  return frames[frameIndex.value % frames.length]
}
</script>