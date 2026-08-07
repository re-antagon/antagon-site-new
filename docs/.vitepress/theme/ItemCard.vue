<template>
  <a class="item-card" :href="resolvedHref">
    <div class="item-card-icon" :class="{ enchanted: isEnchanted }">
      <img :src="resolvedImg" :alt="resolvedTitle">
    </div>
    <span class="meta">
      <span class="name">{{ resolvedTitle }}</span>
      <span v-if="resolvedType" class="type">{{ resolvedType }}</span>
    </span>
  </a>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { getItemTitle, getItemWikiUrl, getItemSrc, getItemType, isItemEnchanted } from './minecraft_inventory/itemUtils'

const props = defineProps<{
  item?: string
  href?: string
  img?: string
  title?: string
  name?: string
  type?: string
  enchanted?: boolean
}>()

const resolvedHref = computed(() => props.href || (props.item ? getItemWikiUrl(props.item) : '#'))
const resolvedImg = computed(() => props.img || (props.item ? getItemSrc(props.item) : ''))
const resolvedTitle = computed(() => props.title || props.name || (props.item ? getItemTitle(props.item) : ''))
const resolvedType = computed(() => props.type || (props.item ? getItemType(props.item) : ''))
const isEnchanted = computed(() => {
  if (props.enchanted) return true
  const refItem = props.item || props.title || props.name || ''
  return isItemEnchanted(refItem)
})
</script>
