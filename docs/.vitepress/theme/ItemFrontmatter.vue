<template>
  <div v-if="resolvedImg || resolvedTitle || resolvedDescription" class="item-frontmatter">
    <div v-if="resolvedImg" class="item-frontmatter-icon-wrap" :class="{ 'is-3d': is3D, 'is-2d': !is3D, enchanted: isEnchanted }">
      <img
        :src="resolvedImg"
        :alt="resolvedTitle"
        class="item-frontmatter-img"
        :class="{ 'is-3d': is3D, 'is-2d': !is3D }"
      />
    </div>
    <div class="item-frontmatter-content">
      <div v-if="resolvedType" class="item-frontmatter-badge">
        {{ resolvedType }}
      </div>
      <h1 v-if="resolvedTitle && showTitle" class="item-frontmatter-title">
        {{ resolvedTitle }}
      </h1>
      <p v-if="resolvedDescription" class="item-frontmatter-desc">
        {{ resolvedDescription }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'
import {
  getItemType,
  getItemSrc,
  normalizeItemSrc,
  isModelPath,
  isModelItem,
  isItemEnchanted
} from './minecraft_inventory/itemUtils'

const props = withDefaults(defineProps<{
  item?: string
  title?: string
  type?: string
  img?: string
  description?: string
  showTitle?: boolean
  enchanted?: boolean
}>(), {
  showTitle: false,
  enchanted: false
})

const { frontmatter } = useData()

const rawTitle = computed(() => props.title || props.item || frontmatter.value.title || '')
const resolvedTitle = computed(() => {
  if (rawTitle.value) return rawTitle.value
  return ''
})

const resolvedType = computed(() => {
  if (props.type) return props.type
  if (frontmatter.value.type) return frontmatter.value.type
  if (rawTitle.value) return getItemType(rawTitle.value)
  return ''
})

const resolvedDescription = computed(() => {
  if (props.description) return props.description
  if (frontmatter.value.description) return frontmatter.value.description
  return ''
})

const resolvedImg = computed(() => {
  const candidate = props.img || frontmatter.value.img || (rawTitle.value ? getItemSrc(rawTitle.value) : '')
  return normalizeItemSrc(candidate)
})

const is3D = computed(() => {
  if (resolvedImg.value) return isModelPath(resolvedImg.value)
  if (rawTitle.value) return isModelItem(rawTitle.value)
  return false
})

const isEnchanted = computed(() => {
  if (props.enchanted) return true
  if (rawTitle.value) return isItemEnchanted(rawTitle.value)
  return false
})
</script>

<style scoped>
.item-frontmatter {
  display: flex;
  align-items: center;
  gap: 20px;
  margin: 16px 0 28px 0;
  padding: 16px 20px;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
}

.item-frontmatter-icon-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 96px;
  height: 96px;
  min-width: 96px;
  background: var(--vp-c-bg-alt);
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  padding: 8px;
  position: relative;
  overflow: hidden;
}

.item-frontmatter-img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.item-frontmatter-img.is-2d {
  image-rendering: pixelated;
  image-rendering: crisp-edges;
  transform: scale(1.15);
}

.item-frontmatter-img.is-3d {
  image-rendering: auto;
  filter: drop-shadow(0 4px 10px rgba(0, 0, 0, 0.25));
}

.item-frontmatter-content {
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex: 1;
}

.item-frontmatter-badge {
  display: inline-flex;
  align-items: center;
  align-self: flex-start;
  padding: 2px 10px;
  font-size: 12px;
  font-weight: 600;
  border-radius: 6px;
  color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
  border: 1px solid var(--vp-c-brand-soft);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.item-frontmatter-title {
  margin: 0;
  padding: 0;
  font-size: 22px;
  font-weight: 700;
  line-height: 1.3;
  color: var(--vp-c-text-1);
}

.item-frontmatter-desc {
  margin: 0;
  font-size: 14px;
  line-height: 1.5;
  color: var(--vp-c-text-2);
}

@media (max-width: 640px) {
  .item-frontmatter {
    flex-direction: column;
    align-items: flex-start;
    padding: 14px;
    gap: 14px;
  }
  .item-frontmatter-icon-wrap {
    width: 80px;
    height: 80px;
    min-width: 80px;
  }
}
</style>
