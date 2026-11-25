<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import { computed, watchEffect } from 'vue'
import { useData, useRoute } from 'vitepress'
import GrainyBackdrop from './GrainyBackdrop.vue'
import { DEFAULT_SCENE, sceneForPath } from './scenes'

const { frontmatter } = useData()
const route = useRoute()

const isHome = computed(() => frontmatter.value.layout === 'home')
const scene = computed(() => (isHome.value ? DEFAULT_SCENE : sceneForPath(route.path)))

// Expose the active scene on <html> so global CSS can pick a matching accent.
watchEffect(() => {
  if (typeof document === 'undefined') return
  document.documentElement.dataset.scene = String(scene.value)
})
</script>

<template>
  <DefaultTheme.Layout>
    <template #layout-top>
      <GrainyBackdrop :scene="scene" />
    </template>
  </DefaultTheme.Layout>
</template>
