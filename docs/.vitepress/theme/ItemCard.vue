<template>
  <a class="item-card" :href="resolvedHref">
    <img :src="resolvedImg" :alt="resolvedTitle">
    <span class="meta">
      <span class="name">{{ resolvedTitle }}</span>
      <span v-if="resolvedType" class="type">{{ resolvedType }}</span>
    </span>
  </a>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { getItemTitle, getItemWikiUrl, getItemSrc, getItemType } from './minecraft_inventory/itemUtils'

const props = defineProps<{
  item?: string
  href?: string
  img?: string
  title?: string
  name?: string
  type?: string
}>()

const resolvedHref = computed(() => props.href || (props.item ? getItemWikiUrl(props.item) : '#'))
const resolvedImg = computed(() => props.img || (props.item ? getItemSrc(props.item) : ''))
const resolvedTitle = computed(() => props.title || props.name || (props.item ? getItemTitle(props.item) : ''))
const resolvedType = computed(() => props.type || (props.item ? getItemType(props.item) : ''))
</script>
