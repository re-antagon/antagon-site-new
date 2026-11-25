<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  scene?: number
}

const props = withDefaults(defineProps<Props>(), { scene: 7 })

const safeScene = computed(() => {
  const value = Math.round(Number(props.scene))
  return Number.isFinite(value) && value >= 1 && value <= 10 ? value : 7
})
</script>

<template>
  <div class="grainy-backdrop" :data-scene="safeScene" aria-hidden="true">
    <div class="gb-base" />
    <div class="gb-orb gb-orb--1" />
    <div class="gb-orb gb-orb--2" />
    <div class="gb-orb gb-orb--3" />
    <div class="gb-orb gb-orb--4" />
    <div class="gb-grain" />
    <div class="gb-grain gb-grain--shimmer" />
    <div class="gb-vignette" />
  </div>
</template>

<style scoped>
/* ==========================================================================
   Noise-gradient backdrop: fixed, full viewport, purely decorative.
   Colour comes from --gb-* custom properties selected by [data-scene].
   ========================================================================== */

.grainy-backdrop {
  position: fixed;
  inset: 0;
  z-index: 0;
  overflow: hidden;
  pointer-events: none;
  background-color: #0b090e;
  --gb-orb1-pos: translate(-10%, -12%);
  --gb-orb2-pos: translate(12%, 10%);
  --gb-orb3-pos: translate(-14%, 16%);
  --gb-vignette: radial-gradient(
    ellipse 88% 88% at 50% 50%,
    transparent 50%,
    rgba(96, 70, 44, 0.14) 100%
  );
}

html.dark .grainy-backdrop {
  --gb-vignette: radial-gradient(
    ellipse 88% 88% at 50% 50%,
    transparent 48%,
    rgba(4, 3, 7, 0.72) 100%
  );
}

.gb-base,
.gb-vignette,
.gb-grain {
  position: absolute;
  inset: 0;
}

.gb-base {
  background: var(--gb-base);
  transition: background 1.2s ease-out;
}

.gb-orb {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  will-change: transform;
  transition: transform 1.2s ease-out, background 1.2s ease-out;
}

.gb-orb--1 {
  left: -12%;
  top: -18%;
  width: 68vw;
  height: 68vw;
  max-width: 820px;
  max-height: 820px;
  filter: blur(90px);
  background: radial-gradient(circle at center, var(--gb-orb1) 0%, transparent 68%);
  transform: var(--gb-orb1-pos);
  animation: gb-drift-a 34s ease-in-out infinite;
}

.gb-orb--2 {
  right: -10%;
  top: 8%;
  width: 62vw;
  height: 62vw;
  max-width: 760px;
  max-height: 760px;
  filter: blur(100px);
  background: radial-gradient(circle at center, var(--gb-orb2) 0%, transparent 68%);
  transform: var(--gb-orb2-pos);
  animation: gb-drift-b 42s ease-in-out infinite;
}

.gb-orb--3 {
  bottom: -22%;
  left: 16%;
  width: 58vw;
  height: 58vw;
  max-width: 720px;
  max-height: 720px;
  filter: blur(105px);
  background: radial-gradient(circle at center, var(--gb-orb3) 0%, transparent 68%);
  transform: var(--gb-orb3-pos);
  animation: gb-drift-a 39s ease-in-out infinite;
  animation-delay: -12s;
}

.gb-orb--4 {
  left: 34%;
  top: 30%;
  width: 44vw;
  height: 44vw;
  max-width: 560px;
  max-height: 560px;
  filter: blur(110px);
  background: radial-gradient(circle at center, var(--gb-orb4) 0%, transparent 70%);
  animation: gb-drift-b 56s ease-in-out infinite;
  animation-delay: -20s;
}

/* Film grain: static base layer */
.gb-grain {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.85'/%3E%3C/svg%3E");
  background-repeat: repeat;
  background-size: 180px 180px;
  opacity: 0.075;
  mix-blend-mode: overlay;
}

/* Second, coarser grain layer that "boils" in discrete steps */
.gb-grain--shimmer {
  background-size: 260px 260px;
  opacity: 0.045;
  mix-blend-mode: screen;
  animation: gb-grain-boil 2.1s steps(1, end) infinite;
}

.gb-vignette {
  background: var(--gb-vignette);
}

html:not(.dark) .grainy-backdrop .gb-grain {
  opacity: 0.05;
  mix-blend-mode: multiply;
}

html:not(.dark) .grainy-backdrop .gb-grain--shimmer {
  opacity: 0.028;
  mix-blend-mode: overlay;
}

@keyframes gb-drift-a {
  0%,
  100% {
    translate: 0 0;
    scale: 1;
  }
  50% {
    translate: 2.5% -2%;
    scale: 1.05;
  }
}

@keyframes gb-drift-b {
  0%,
  100% {
    translate: 0 0;
    scale: 1;
  }
  50% {
    translate: -3% 2.5%;
    scale: 1.06;
  }
}

@keyframes gb-grain-boil {
  0% {
    background-position: 0 0;
  }
  14% {
    background-position: -37px 23px;
  }
  28% {
    background-position: 61px -41px;
  }
  42% {
    background-position: -83px 67px;
  }
  56% {
    background-position: 29px -97px;
  }
  70% {
    background-position: -53px 11px;
  }
  84% {
    background-position: 97px 43px;
  }
  100% {
    background-position: 0 0;
  }
}

/* ---------- Scene palettes: light theme ---------- */

.grainy-backdrop[data-scene='1'] {
  --gb-base: radial-gradient(ellipse 95% 85% at 50% 42%, #fbf7ff 0%, #ece2f7 100%);
  --gb-orb1: rgba(148, 108, 244, 0.26);
  --gb-orb2: rgba(255, 190, 120, 0.22);
  --gb-orb3: rgba(92, 188, 238, 0.18);
  --gb-orb4: rgba(212, 194, 255, 0.44);
}

.grainy-backdrop[data-scene='2'] {
  --gb-base: radial-gradient(ellipse 95% 85% at 50% 42%, #f7fbf2 0%, #e6efd9 100%);
  --gb-orb1: rgba(104, 200, 128, 0.24);
  --gb-orb2: rgba(186, 222, 110, 0.22);
  --gb-orb3: rgba(255, 204, 120, 0.2);
  --gb-orb4: rgba(196, 232, 180, 0.42);
}

.grainy-backdrop[data-scene='3'] {
  --gb-base: radial-gradient(ellipse 95% 85% at 50% 42%, #f5fbf9 0%, #e2eee8 100%);
  --gb-orb1: rgba(86, 198, 188, 0.24);
  --gb-orb2: rgba(172, 208, 102, 0.2);
  --gb-orb3: rgba(198, 140, 196, 0.16);
  --gb-orb4: rgba(186, 230, 220, 0.42);
}

.grainy-backdrop[data-scene='4'] {
  --gb-base: radial-gradient(ellipse 95% 85% at 50% 42%, #f5f8fc 0%, #e5ebf2 100%);
  --gb-orb1: rgba(108, 152, 224, 0.22);
  --gb-orb2: rgba(176, 192, 214, 0.2);
  --gb-orb3: rgba(126, 120, 196, 0.16);
  --gb-orb4: rgba(198, 212, 232, 0.42);
}

.grainy-backdrop[data-scene='5'] {
  --gb-base: radial-gradient(ellipse 95% 85% at 50% 42%, #fdf6f4 0%, #f5e3df 100%);
  --gb-orb1: rgba(240, 110, 110, 0.24);
  --gb-orb2: rgba(255, 166, 96, 0.22);
  --gb-orb3: rgba(180, 74, 140, 0.14);
  --gb-orb4: rgba(250, 196, 190, 0.42);
}

.grainy-backdrop[data-scene='6'] {
  --gb-base: radial-gradient(ellipse 95% 85% at 50% 42%, #f4f8ff 0%, #e3ebf8 100%);
  --gb-orb1: rgba(96, 140, 236, 0.24);
  --gb-orb2: rgba(84, 214, 226, 0.2);
  --gb-orb3: rgba(158, 112, 248, 0.2);
  --gb-orb4: rgba(190, 214, 255, 0.42);
}

.grainy-backdrop[data-scene='7'] {
  --gb-base: radial-gradient(ellipse 95% 85% at 50% 45%, #fdf6ec 0%, #f0e2d2 100%);
  --gb-orb1: rgba(255, 178, 94, 0.4);
  --gb-orb2: rgba(238, 154, 116, 0.3);
  --gb-orb3: rgba(192, 150, 214, 0.24);
  --gb-orb4: rgba(255, 238, 204, 0.58);
}

.grainy-backdrop[data-scene='8'] {
  --gb-base: radial-gradient(ellipse 95% 85% at 50% 42%, #fdf5fb 0%, #f2e3ee 100%);
  --gb-orb1: rgba(232, 110, 214, 0.22);
  --gb-orb2: rgba(152, 104, 246, 0.2);
  --gb-orb3: rgba(255, 152, 124, 0.18);
  --gb-orb4: rgba(246, 190, 240, 0.42);
}

.grainy-backdrop[data-scene='9'] {
  --gb-base: radial-gradient(ellipse 95% 85% at 50% 42%, #fff8f1 0%, #f8e5ce 100%);
  --gb-orb1: rgba(255, 148, 58, 0.3);
  --gb-orb2: rgba(255, 92, 68, 0.2);
  --gb-orb3: rgba(255, 208, 96, 0.2);
  --gb-orb4: rgba(255, 214, 164, 0.46);
}

.grainy-backdrop[data-scene='10'] {
  --gb-base: radial-gradient(ellipse 95% 85% at 50% 42%, #f6fbfb 0%, #e6efee 100%);
  --gb-orb1: rgba(128, 200, 198, 0.22);
  --gb-orb2: rgba(176, 180, 214, 0.18);
  --gb-orb3: rgba(96, 168, 190, 0.18);
  --gb-orb4: rgba(196, 224, 222, 0.42);
}

/* ---------- Scene palettes: dark theme ---------- */

html.dark .grainy-backdrop[data-scene='1'] {
  --gb-base: radial-gradient(ellipse 95% 85% at 50% 42%, #191329 0%, #08060c 100%);
  --gb-orb1: rgba(150, 110, 255, 0.42);
  --gb-orb2: rgba(255, 186, 104, 0.22);
  --gb-orb3: rgba(84, 196, 255, 0.18);
  --gb-orb4: rgba(196, 168, 255, 0.16);
}

html.dark .grainy-backdrop[data-scene='2'] {
  --gb-base: radial-gradient(ellipse 95% 85% at 50% 42%, #101d15 0%, #07090b 100%);
  --gb-orb1: rgba(92, 220, 140, 0.34);
  --gb-orb2: rgba(190, 235, 120, 0.2);
  --gb-orb3: rgba(255, 200, 110, 0.18);
  --gb-orb4: rgba(120, 220, 180, 0.14);
}

html.dark .grainy-backdrop[data-scene='3'] {
  --gb-base: radial-gradient(ellipse 95% 85% at 50% 42%, #0d1a19 0%, #06090b 100%);
  --gb-orb1: rgba(80, 212, 200, 0.32);
  --gb-orb2: rgba(170, 212, 100, 0.2);
  --gb-orb3: rgba(200, 130, 200, 0.16);
  --gb-orb4: rgba(140, 240, 220, 0.14);
}

html.dark .grainy-backdrop[data-scene='4'] {
  --gb-base: radial-gradient(ellipse 95% 85% at 50% 42%, #0c1119 0%, #06070b 100%);
  --gb-orb1: rgba(108, 158, 232, 0.32);
  --gb-orb2: rgba(186, 200, 222, 0.16);
  --gb-orb3: rgba(122, 112, 192, 0.2);
  --gb-orb4: rgba(150, 200, 255, 0.12);
}

html.dark .grainy-backdrop[data-scene='5'] {
  --gb-base: radial-gradient(ellipse 95% 85% at 50% 42%, #1c1015 0%, #08060a 100%);
  --gb-orb1: rgba(255, 96, 96, 0.34);
  --gb-orb2: rgba(255, 160, 90, 0.24);
  --gb-orb3: rgba(180, 70, 140, 0.18);
  --gb-orb4: rgba(255, 120, 120, 0.14);
}

html.dark .grainy-backdrop[data-scene='6'] {
  --gb-base: radial-gradient(ellipse 95% 85% at 50% 42%, #0a1224 0%, #05060e 100%);
  --gb-orb1: rgba(80, 140, 255, 0.38);
  --gb-orb2: rgba(80, 230, 240, 0.22);
  --gb-orb3: rgba(160, 110, 255, 0.24);
  --gb-orb4: rgba(190, 230, 255, 0.14);
}

html.dark .grainy-backdrop[data-scene='7'] {
  --gb-base: radial-gradient(ellipse 95% 85% at 50% 45%, #241620 0%, #0b090e 100%);
  --gb-orb1: rgba(255, 194, 116, 0.44);
  --gb-orb2: rgba(240, 132, 104, 0.34);
  --gb-orb3: rgba(164, 112, 186, 0.26);
  --gb-orb4: rgba(255, 235, 200, 0.22);
}

html.dark .grainy-backdrop[data-scene='8'] {
  --gb-base: radial-gradient(ellipse 95% 85% at 50% 42%, #1a0f1e 0%, #08060c 100%);
  --gb-orb1: rgba(255, 90, 220, 0.32);
  --gb-orb2: rgba(150, 100, 255, 0.28);
  --gb-orb3: rgba(255, 150, 120, 0.18);
  --gb-orb4: rgba(255, 180, 240, 0.14);
}

html.dark .grainy-backdrop[data-scene='9'] {
  --gb-base: radial-gradient(ellipse 95% 85% at 50% 42%, #1e1008 0%, #09060a 100%);
  --gb-orb1: rgba(255, 140, 50, 0.42);
  --gb-orb2: rgba(255, 80, 60, 0.26);
  --gb-orb3: rgba(255, 210, 90, 0.2);
  --gb-orb4: rgba(255, 220, 160, 0.16);
}

html.dark .grainy-backdrop[data-scene='10'] {
  --gb-base: radial-gradient(ellipse 95% 85% at 50% 42%, #0d1618 0%, #06080a 100%);
  --gb-orb1: rgba(170, 240, 235, 0.28);
  --gb-orb2: rgba(190, 190, 238, 0.18);
  --gb-orb3: rgba(120, 180, 200, 0.2);
  --gb-orb4: rgba(180, 240, 240, 0.12);
}

/* ---------- Motion / performance guards ---------- */

@media (prefers-reduced-motion: reduce) {
  .gb-orb,
  .gb-grain--shimmer {
    animation: none !important;
  }
}

@media (max-width: 640px) {
  .gb-orb {
    filter: blur(46px);
    animation: none;
  }

  .gb-grain--shimmer {
    animation: none;
  }
}
</style>
