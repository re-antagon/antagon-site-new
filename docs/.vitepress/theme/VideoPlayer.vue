<template>
  <div
    ref="playerContainer"
    class="antagon-player-wrapper"
    :style="{ maxWidth: maxWidthStyle }"
    @mousemove="onMouseMove"
    @mouseleave="onMouseLeave"
  >
    <video
      ref="videoEl"
      class="antagon-video"
      :src="src"
      :poster="poster"
      :autoplay="autoplay"
      :muted="isMuted"
      playsinline
      :loop="isLoop"
      @timeupdate="onTimeUpdate"
      @loadedmetadata="onLoadedMetadata"
      @ended="onEnded"
      @play="isPlaying = true"
      @pause="isPlaying = false"
      @click="togglePlay"
    ></video>

    <!-- Center Play/Pause Indicator (Overlay when paused or clicked) -->
    <button
      v-if="!isPlaying"
      class="antagon-play-center"
      aria-label="Воспроизвести"
      @click="togglePlay"
    >
      <svg viewBox="0 0 24 24" class="icon-play-center">
        <polygon points="5 3 19 12 5 21 5 3"></polygon>
      </svg>
    </button>

    <!-- Controls Overlay Bar -->
    <div
      class="antagon-controls-overlay"
      :class="{ 'is-hidden': !controlsVisible && isPlaying }"
      @click.stop
    >
      <!-- Buttons Row -->
      <div class="antagon-controls-row">
        <!-- Left: Play/Pause, Volume, Time -->
        <div class="antagon-controls-left">
          <button
            class="antagon-btn"
            :aria-label="isPlaying ? 'Пауза' : 'Воспроизвести'"
            :title="isPlaying ? 'Пауза' : 'Воспроизвести'"
            @click="togglePlay"
          >
            <svg v-if="isPlaying" viewBox="0 0 24 24" class="icon">
              <rect x="6" y="4" width="4" height="16"></rect>
              <rect x="14" y="4" width="4" height="16"></rect>
            </svg>
            <svg v-else viewBox="0 0 24 24" class="icon">
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
          </button>

          <button
            class="antagon-btn"
            :aria-label="isMuted ? 'Включить звук' : 'Выключить звук'"
            :title="isMuted ? 'Включить звук' : 'Выключить звук'"
            @click="toggleMute"
          >
            <svg v-if="isMuted" viewBox="0 0 24 24" class="icon">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
              <line x1="23" y1="9" x2="17" y2="15"></line>
              <line x1="17" y1="9" x2="23" y2="15"></line>
            </svg>
            <svg v-else viewBox="0 0 24 24" class="icon">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
            </svg>
          </button>

          <div class="antagon-time">
            {{ formatTime(currentTime) }} / {{ formatTime(duration) }}
          </div>
        </div>

        <!-- Right: Speed, Loop, Fullscreen -->
        <div class="antagon-controls-right">
          <!-- Playback Speed Button -->
          <button
            class="antagon-btn antagon-btn-speed"
            title="Скорость видео"
            @click="cycleSpeed"
          >
            {{ currentSpeed }}x
          </button>

          <!-- Auto Repeat (Loop) Button (Active by default) -->
          <button
            class="antagon-btn antagon-btn-loop"
            :class="{ 'is-active': isLoop }"
            :title="isLoop ? 'Автоповтор (включен)' : 'Автоповтор (выключен)'"
            @click="toggleLoop"
          >
            <svg viewBox="0 0 24 24" class="icon">
              <polyline points="17 1 21 5 17 9"></polyline>
              <path d="M3 11V9a4 4 0 0 1 4-4h14"></path>
              <polyline points="7 23 3 19 7 15"></polyline>
              <path d="M21 13v2a4 4 0 0 1-4 4H3"></path>
            </svg>
          </button>

          <!-- Fullscreen Button -->
          <button
            class="antagon-btn"
            :title="isFullscreen ? 'Обычный режим' : 'Во весь экран'"
            @click="toggleFullscreen"
          >
            <svg v-if="isFullscreen" viewBox="0 0 24 24" class="icon">
              <polyline points="4 14 10 14 10 20"></polyline>
              <polyline points="20 10 14 10 14 4"></polyline>
              <line x1="14" y1="10" x2="21" y2="3"></line>
              <line x1="3" y1="21" x2="10" y2="14"></line>
            </svg>
            <svg v-else viewBox="0 0 24 24" class="icon">
              <polyline points="15 3 21 3 21 9"></polyline>
              <polyline points="9 21 3 21 3 15"></polyline>
              <line x1="21" y1="3" x2="14" y2="10"></line>
              <line x1="3" y1="21" x2="10" y2="14"></line>
            </svg>
          </button>
        </div>
      </div>

      <!-- Timeline Bar spans across the entire video width at the very bottom -->
      <div
        ref="timelineRef"
        class="antagon-timeline-container"
        @click="onTimelineClick"
        @mousedown="onTimelineDragStart"
      >
        <div class="antagon-timeline-track">
          <div class="antagon-timeline-progress" :style="{ width: progressPercent + '%' }"></div>
          <div class="antagon-timeline-thumb" :style="{ left: progressPercent + '%' }"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'

const props = withDefaults(
  defineProps<{
    src: string
    poster?: string
    width?: string | number
    autoplay?: boolean
    loop?: boolean
    muted?: boolean
  }>(),
  {
    poster: '',
    width: '640',
    autoplay: true,
    loop: true,
    muted: true
  }
)

const playerContainer = ref<HTMLElement | null>(null)
const videoEl = ref<HTMLVideoElement | null>(null)
const timelineRef = ref<HTMLElement | null>(null)

const isPlaying = ref(false)
const isMuted = ref(props.muted)
const isLoop = ref(props.loop)
const currentTime = ref(0)
const duration = ref(0)
const controlsVisible = ref(true)
const isFullscreen = ref(false)

const speeds = [0.5, 0.75, 1, 1.25, 1.5, 2]
const speedIndex = ref(2) // 1x by default
const currentSpeed = computed(() => speeds[speedIndex.value])

const maxWidthStyle = computed(() => {
  if (!props.width) return '640px'
  if (typeof props.width === 'number') return `${props.width}px`
  return props.width.includes('px') || props.width.includes('%') ? props.width : `${props.width}px`
})

const progressPercent = computed(() => {
  if (!duration.value) return 0
  return Math.min(100, Math.max(0, (currentTime.value / duration.value) * 100))
})

let hideTimeout: number | undefined

function resetHideTimer() {
  controlsVisible.value = true
  if (typeof window === 'undefined') return
  if (hideTimeout) window.clearTimeout(hideTimeout)
  if (isPlaying.value) {
    hideTimeout = window.setTimeout(() => {
      controlsVisible.value = false
    }, 2500)
  }
}

function onMouseMove() {
  resetHideTimer()
}

function onMouseLeave() {
  if (isPlaying.value) {
    controlsVisible.value = false
  }
}

function togglePlay() {
  if (!videoEl.value) return
  if (videoEl.value.paused) {
    videoEl.value.play().catch(() => {})
    isPlaying.value = true
    resetHideTimer()
  } else {
    videoEl.value.pause()
    isPlaying.value = false
    controlsVisible.value = true
  }
}

function toggleMute() {
  if (!videoEl.value) return
  isMuted.value = !isMuted.value
  videoEl.value.muted = isMuted.value
  resetHideTimer()
}

function toggleLoop() {
  isLoop.value = !isLoop.value
  if (videoEl.value) {
    videoEl.value.loop = isLoop.value
  }
  resetHideTimer()
}

function cycleSpeed() {
  speedIndex.value = (speedIndex.value + 1) % speeds.length
  if (videoEl.value) {
    videoEl.value.playbackRate = currentSpeed.value
  }
  resetHideTimer()
}

function toggleFullscreen() {
  if (typeof document === 'undefined' || !playerContainer.value) return
  if (!document.fullscreenElement) {
    playerContainer.value.requestFullscreen?.().catch(() => {})
  } else {
    document.exitFullscreen?.().catch(() => {})
  }
  resetHideTimer()
}

function onLoadedMetadata() {
  if (!videoEl.value) return
  duration.value = videoEl.value.duration || 0
  videoEl.value.playbackRate = currentSpeed.value
  videoEl.value.loop = isLoop.value
  videoEl.value.muted = isMuted.value
  if (props.autoplay) {
    videoEl.value.play().then(() => {
      isPlaying.value = true
      resetHideTimer()
    }).catch(() => {
      // Autoplay with muted might still need user gesture in strict browsers
    })
  }
}

function onTimeUpdate() {
  if (!videoEl.value) return
  currentTime.value = videoEl.value.currentTime || 0
}

function onEnded() {
  if (!isLoop.value) {
    isPlaying.value = false
    controlsVisible.value = true
  }
}

function formatTime(seconds: number): string {
  if (isNaN(seconds) || seconds < 0) return '0:00'
  const mins = Math.floor(seconds / 60)
  const secs = Math.floor(seconds % 60)
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`
}

function seekFromEvent(e: MouseEvent) {
  if (!timelineRef.value || !videoEl.value || !duration.value) return
  const rect = timelineRef.value.getBoundingClientRect()
  const offsetX = Math.max(0, Math.min(e.clientX - rect.left, rect.width))
  const percent = offsetX / rect.width
  const targetTime = percent * duration.value
  videoEl.value.currentTime = targetTime
  currentTime.value = targetTime
}

function onTimelineClick(e: MouseEvent) {
  seekFromEvent(e)
  resetHideTimer()
}

let isDragging = false

function onTimelineDragStart(e: MouseEvent) {
  isDragging = true
  seekFromEvent(e)
  if (typeof window === 'undefined') return
  window.addEventListener('mousemove', onTimelineDragMove)
  window.addEventListener('mouseup', onTimelineDragEnd)
}

function onTimelineDragMove(e: MouseEvent) {
  if (!isDragging) return
  seekFromEvent(e)
}

function onTimelineDragEnd(e: MouseEvent) {
  if (!isDragging) return
  isDragging = false
  seekFromEvent(e)
  if (typeof window === 'undefined') return
  window.removeEventListener('mousemove', onTimelineDragMove)
  window.removeEventListener('mouseup', onTimelineDragEnd)
}

function onFullscreenChange() {
  if (typeof document === 'undefined') return
  isFullscreen.value = !!document.fullscreenElement
}

onMounted(() => {
  if (typeof document !== 'undefined') {
    document.addEventListener('fullscreenchange', onFullscreenChange)
  }
  if (videoEl.value) {
    videoEl.value.loop = isLoop.value
    videoEl.value.muted = isMuted.value
    if (props.autoplay) {
      videoEl.value.play().then(() => {
        isPlaying.value = true
        resetHideTimer()
      }).catch(() => {})
    }
  }
})

onUnmounted(() => {
  if (typeof document !== 'undefined') {
    document.removeEventListener('fullscreenchange', onFullscreenChange)
  }
  if (typeof window !== 'undefined') {
    window.removeEventListener('mousemove', onTimelineDragMove)
    window.removeEventListener('mouseup', onTimelineDragEnd)
    if (hideTimeout) window.clearTimeout(hideTimeout)
  }
})
</script>
