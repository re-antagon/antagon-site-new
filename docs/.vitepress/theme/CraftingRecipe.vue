<template>
  <div>
    <span class="mcui mcui-Crafting_Table pixel-image">
      <span class="mcui-input">
        <span class="mcui-row">
          <span class="invslot">
            <a v-if="input1" class="invslot-item invslot-item-image" :data-minetip-title="getItemTitle(getCurrent(input1))" :href="getItemWikiUrl(getCurrent(input1))" target="_blank" rel="noopener noreferrer">
              <span typeof="mw:File">
                <img 
                  :alt="getItemAlt(getCurrent(input1))" 
                  :src="getItemSrc(getCurrent(input1))" 
                  decoding="async" 
                  loading="lazy" 
                  width="32" 
                  height="32" 
                  class="mw-file-element" 
                  data-file-width="16" 
                  data-file-height="16"
                >
              </span>
            </a>
          </span>
          <span class="invslot">
            <a v-if="input2" class="invslot-item invslot-item-image" :data-minetip-title="getItemTitle(getCurrent(input2))" :href="getItemWikiUrl(getCurrent(input2))" target="_blank" rel="noopener noreferrer">
              <span typeof="mw:File">
                <img 
                  :alt="getItemAlt(getCurrent(input2))" 
                  :src="getItemSrc(getCurrent(input2))" 
                  decoding="async" 
                  loading="lazy" 
                  width="32" 
                  height="32" 
                  class="mw-file-element" 
                  data-file-width="16" 
                  data-file-height="16"
                >
              </span>
            </a>
          </span>
          <span class="invslot">
            <a v-if="input3" class="invslot-item invslot-item-image" :data-minetip-title="getItemTitle(getCurrent(input3))" :href="getItemWikiUrl(getCurrent(input3))" target="_blank" rel="noopener noreferrer">
              <span typeof="mw:File">
                <img 
                  :alt="getItemAlt(getCurrent(input3))" 
                  :src="getItemSrc(getCurrent(input3))" 
                  decoding="async" 
                  loading="lazy" 
                  width="32" 
                  height="32" 
                  class="mw-file-element" 
                  data-file-width="16" 
                  data-file-height="16"
                >
              </span>
            </a>
          </span>
        </span>
        <span class="mcui-row">
          <span class="invslot">
            <a v-if="input4" class="invslot-item invslot-item-image" :data-minetip-title="getItemTitle(getCurrent(input4))" :href="getItemWikiUrl(getCurrent(input4))" target="_blank" rel="noopener noreferrer">
              <span typeof="mw:File">
                <img 
                  :alt="getItemAlt(getCurrent(input4))" 
                  :src="getItemSrc(getCurrent(input4))" 
                  decoding="async" 
                  loading="lazy" 
                  width="32" 
                  height="32" 
                  class="mw-file-element" 
                  data-file-width="16" 
                  data-file-height="16"
                >
              </span>
            </a>
          </span>
          <span class="invslot">
            <a v-if="input5" class="invslot-item invslot-item-image" :data-minetip-title="getItemTitle(getCurrent(input5))" :href="getItemWikiUrl(getCurrent(input5))" target="_blank" rel="noopener noreferrer">
              <span typeof="mw:File">
                <img 
                  :alt="getItemAlt(getCurrent(input5))" 
                  :src="getItemSrc(getCurrent(input5))" 
                  decoding="async" 
                  loading="lazy" 
                  width="32" 
                  height="32" 
                  class="mw-file-element" 
                  data-file-width="16" 
                  data-file-height="16"
                >
              </span>
            </a>
          </span>
          <span class="invslot">
            <a v-if="input6" class="invslot-item invslot-item-image" :data-minetip-title="getItemTitle(getCurrent(input6))" :href="getItemWikiUrl(getCurrent(input6))" target="_blank" rel="noopener noreferrer">
              <span typeof="mw:File">
                <img 
                  :alt="getItemAlt(getCurrent(input6))" 
                  :src="getItemSrc(getCurrent(input6))" 
                  decoding="async" 
                  loading="lazy" 
                  width="32" 
                  height="32" 
                  class="mw-file-element" 
                  data-file-width="16" 
                  data-file-height="16"
                >
              </span>
            </a>
          </span>
        </span>
        <span class="mcui-row">
          <span class="invslot">
            <a v-if="input7" class="invslot-item invslot-item-image" :data-minetip-title="getItemTitle(getCurrent(input7))" :href="getItemWikiUrl(getCurrent(input7))" target="_blank" rel="noopener noreferrer">
              <span typeof="mw:File">
                <img 
                  :alt="getItemAlt(getCurrent(input7))" 
                  :src="getItemSrc(getCurrent(input7))" 
                  decoding="async" 
                  loading="lazy" 
                  width="32" 
                  height="32" 
                  class="mw-file-element" 
                  data-file-width="16" 
                  data-file-height="16"
                >
              </span>
            </a>
          </span>
          <span class="invslot">
            <a v-if="input8" class="invslot-item invslot-item-image" :data-minetip-title="getItemTitle(getCurrent(input8))" :href="getItemWikiUrl(getCurrent(input8))" target="_blank" rel="noopener noreferrer">
              <span typeof="mw:File">
                <img 
                  :alt="getItemAlt(getCurrent(input8))" 
                  :src="getItemSrc(getCurrent(input8))" 
                  decoding="async" 
                  loading="lazy" 
                  width="32" 
                  height="32" 
                  class="mw-file-element" 
                  data-file-width="16" 
                  data-file-height="16"
                >
              </span>
            </a>
          </span>
          <span class="invslot">
            <a v-if="input9" class="invslot-item invslot-item-image" :data-minetip-title="getItemTitle(getCurrent(input9))" :href="getItemWikiUrl(getCurrent(input9))" target="_blank" rel="noopener noreferrer">
              <span typeof="mw:File">
                <img 
                  :alt="getItemAlt(getCurrent(input9))" 
                  :src="getItemSrc(getCurrent(input9))" 
                  decoding="async" 
                  loading="lazy" 
                  width="32" 
                  height="32" 
                  class="mw-file-element" 
                  data-file-width="16" 
                  data-file-height="16"
                >
              </span>
            </a>
          </span>
        </span>
      </span>
      <span class="mcui-arrow">
        <br>
      </span>
      <span class="mcui-output">
        <span class="invslot invslot-large">
          <a v-if="output" class="invslot-item invslot-item-image" :data-minetip-title="getItemTitle(getCurrent(output))" :href="getItemWikiUrl(getCurrent(output))" target="_blank" rel="noopener noreferrer">
            <span typeof="mw:File">
              <img 
                :alt="getItemAlt(getCurrent(output))" 
                :src="getItemSrc(getCurrent(output))" 
                decoding="async" 
                loading="lazy" 
                width="32" 
                height="32" 
                class="mw-file-element" 
                data-file-width="16" 
                data-file-height="16"
              >
            </span>
            <span v-if="output_count && output_count > 1" class="invslot-stacksize">{{ output_count }}</span>
          </a>
        </span>
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
import { getItemTitle, getItemAlt, getItemSrc, getItemWikiUrl } from './minecraft_inventory/itemUtils'

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