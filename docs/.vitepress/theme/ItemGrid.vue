<template>
  <div class="item-grid">
    <slot />
    <ItemCard
      v-for="item in items"
      :key="item.href"
      :href="item.href"
      :img="item.img"
      :title="item.title || item.name"
      :type="item.type"
    />
  </div>
</template>

<script setup lang="ts">
import ItemCard from './ItemCard.vue'

interface Item {
  href: string
  img: string
  title?: string
  name?: string
  type?: string
}

defineProps<{
  items?: Item[]
}>()
</script>
