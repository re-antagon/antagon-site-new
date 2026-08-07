<template>
  <a class="item-card" :href="href">
    <img :src="img" :alt="title || name">
    <span class="meta">
      <span class="name">{{ title || name }}</span>
      <span v-if="type" class="type">{{ type }}</span>
    </span>
  </a>
</template>

<script setup lang="ts">
defineProps<{
  href: string
  img: string
  title?: string
  name?: string
  type?: string
}>()
</script>
