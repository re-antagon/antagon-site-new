<template>
  <div class="mechanic-card" @click="handleCardClick">
    <a :href="resolvedHref" class="mechanic-card-media" :aria-label="resolvedTitle" @click.stop>
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
      <a :href="resolvedHref" class="mechanic-card-title" @click.stop="handleTitleClick">
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
import { useRouter } from 'vitepress'

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

const router = useRouter()
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

function navigateToHref(e?: MouseEvent) {
  if (!resolvedHref.value || resolvedHref.value === '#') return
  if (e && (e.ctrlKey || e.metaKey || e.button === 1)) {
    window.open(resolvedHref.value, '_blank')
    return
  }
  if (router && typeof router.go === 'function') {
    router.go(resolvedHref.value)
  } else {
    window.location.href = resolvedHref.value
  }
}

function handleTitleClick(e: MouseEvent) {
  if (e.ctrlKey || e.metaKey || e.button === 1) return
  e.preventDefault()
  navigateToHref(e)
}

function handleCardClick(e: MouseEvent) {
  const target = e.target as HTMLElement | null
  const link = target?.closest('a')
  // If the user clicked on a specific link inside description, let that link work normally
  if (link && !link.classList.contains('mechanic-card-media') && !link.classList.contains('mechanic-card-title')) {
    return
  }
  // Otherwise navigate to the card's target
  navigateToHref(e)
}

const parsedDescription = computed(() => {
  if (!resolvedDesc.value) return ''
  return resolvedDesc.value
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
    .replace(/`([^`]+)`/g, '<code>$1</code>')
})
</script>
