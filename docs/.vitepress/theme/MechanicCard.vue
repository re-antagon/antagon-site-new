<template>
  <div class="mechanic-card">
    <a :href="resolvedHref" class="mechanic-card-media" :aria-label="resolvedTitle">
      <div class="mechanic-card-image-box" :class="{ 'is-fallback': isFallback }">
        <img
          :src="currentImg"
          :alt="resolvedTitle"
          class="mechanic-card-image"
          :class="{ 'is-fallback': isFallback }"
          loading="lazy"
          @error="onImgError"
        />
      </div>
    </a>
    <div class="mechanic-card-content">
      <a :href="resolvedHref" class="mechanic-card-title">
        {{ resolvedTitle }}
      </a>
      <div class="mechanic-card-desc">
        <slot><span v-html="parsedDescription"></span></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'

const props = defineProps<{
  title?: string
  name?: string
  href?: string
  link?: string
  description?: string
  desc?: string
  img?: string
  image?: string
  src?: string
}>()

const fallbackSrc = '/assets/mechanics/no-image.svg'

const resolvedTitle = computed(() => props.title || props.name || '')
const resolvedHref = computed(() => props.href || props.link || '#')
const resolvedDesc = computed(() => props.description || props.desc || '')

const initialImg = computed(() => props.img || props.image || props.src || '')
const currentImg = ref(initialImg.value || fallbackSrc)
const isFallback = ref(!initialImg.value)

watch(initialImg, (newVal) => {
  if (newVal) {
    currentImg.value = newVal
    isFallback.value = false
  } else {
    currentImg.value = fallbackSrc
    isFallback.value = true
  }
})

function onImgError() {
  if (!isFallback.value) {
    currentImg.value = fallbackSrc
    isFallback.value = true
  }
}

const parsedDescription = computed(() => {
  if (!resolvedDesc.value) return ''
  return resolvedDesc.value
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
    .replace(/`([^`]+)`/g, '<code>$1</code>')
})
</script>
