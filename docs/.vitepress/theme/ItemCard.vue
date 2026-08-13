<template>
  <a class="item-card" :href="resolvedHref">
    <div class="item-card-icon" :class="{ 'is-3d': is3D, 'is-2d': !is3D, enchanted: isEnchanted }">
      <img :src="resolvedImg" :alt="resolvedTitle" :class="{ 'is-3d': is3D, 'is-2d': !is3D }">
    </div>
    <span class="meta">
      <span class="name">{{ resolvedTitle }}</span>
      <span v-if="resolvedType" class="type">{{ resolvedType }}</span>
    </span>
  </a>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import {
  getItemTitle,
  getItemWikiUrl,
  getItemSrc,
  normalizeItemSrc,
  getItemType,
  isItemEnchanted,
  isModelPath,
  isModelItem
} from './minecraft_inventory/itemUtils'

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
const resolvedImg = computed(() => {
  const candidate = props.img || (props.item ? getItemSrc(props.item) : '')
  return normalizeItemSrc(candidate)
})
const resolvedTitle = computed(() => props.title || props.name || (props.item ? getItemTitle(props.item) : ''))
const resolvedType = computed(() => props.type || (props.item ? getItemType(props.item) : ''))
const is3D = computed(() => {
  if (resolvedImg.value) return isModelPath(resolvedImg.value)
  if (props.item) return isModelItem(props.item)
  return false
})
const isEnchanted = computed(() => {
  if (props.enchanted) return true
  const refItem = props.item || props.title || props.name || ''
  return isItemEnchanted(refItem)
})
</script>
