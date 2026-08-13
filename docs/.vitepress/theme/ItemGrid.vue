<template>
  <div class="item-grid">
    <slot />
    <ItemCard
      v-for="(item, idx) in items"
      :key="typeof item === 'string' ? item : (item.href || item.item || item.name || idx)"
      v-bind="typeof item === 'string' ? { item } : item"
    />
  </div>
</template>

<script setup lang="ts">
import ItemCard from './ItemCard.vue'

interface ItemObj {
  item?: string
  href?: string
  img?: string
  title?: string
  name?: string
  type?: string
}

defineProps<{
  items?: (string | ItemObj)[]
}>()
</script>
