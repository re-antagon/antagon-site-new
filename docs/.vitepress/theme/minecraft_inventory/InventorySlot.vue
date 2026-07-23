<template>
  <span class="invslot">
    <a 
      v-if="currentItem" 
      class="invslot-item invslot-item-image" 
      :data-minetip-title="getItemTitle(currentItem)"
      :href="getItemWikiUrl(currentItem)"
      :target="getItemWikiUrl(currentItem).startsWith('/') ? undefined : '_blank'"
      :rel="getItemWikiUrl(currentItem).startsWith('/') ? undefined : 'noopener noreferrer'"
    >
      <span typeof="mw:File">
        <img 
          :alt="getItemAlt(currentItem)" 
          :src="getItemSrc(currentItem)" 
          decoding="async" 
          loading="lazy" 
          width="32" 
          height="32" 
          class="mw-file-element" 
          data-file-width="16" 
          data-file-height="16"
        >
      </span>
      <span v-if="count && count > 1" class="invslot-stacksize">{{ count }}</span>
    </a>
  </span>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { getItemTitle, getItemAlt, getItemSrc, getItemWikiUrl } from './itemUtils'

interface Props {
  item?: string
  count?: number
}

const props = withDefaults(defineProps<Props>(), {
  item: '',
  count: 1
})

const frameIndex = ref(0)
let timer: ReturnType<typeof setInterval> | null = null

onMounted(() => {
  if (props.item && props.item.includes(';')) {
    timer = setInterval(() => {
      frameIndex.value++
    }, 2000)
  }
})

onUnmounted(() => {
  if (timer) clearInterval(timer)
})

const currentItem = computed(() => {
  if (!props.item) return ''
  const frames = props.item.split(';').map(s => s.trim()).filter(Boolean)
  if (frames.length <= 1) return frames[0] ?? ''
  return frames[frameIndex.value % frames.length]
})
</script>
