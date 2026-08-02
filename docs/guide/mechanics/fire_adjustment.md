---
pageClass: pg-guide-mechanics-fire-adjustment
description: "Пожары и добыча древесного угля на сервере Re:Antagon. Узнайте, как сгорание деревянных блоков приносит пользу, и как работает защита от лесных пожаров."
---

<style>
.pg-guide-mechanics-fire-adjustment img {
  display: inline-block !important;
  vertical-align: middle !important;
  width: 32px !important;
  height: auto !important;
  margin: 0 4px 0 0 !important;
}
.pg-guide-mechanics-fire-adjustment img[alt*="древесный уголь"],
.pg-guide-mechanics-fire-adjustment img[alt*="палки"] {
  width: 128px !important;
  height: 128px !important;
  image-rendering: pixelated;
}
.pg-guide-mechanics-fire-adjustment .mcui-Crafting_Table img {
  width: 28px !important;
  height: 28px !important;
}
.pg-guide-mechanics-fire-adjustment .wood-cycle {
  display: inline-block !important;
  vertical-align: middle !important;
  width: 32px !important;
  height: 32px !important;
  margin: 0 0 0 0 !important;
  background-image: url("/assets/items/oak_wood.png");
  background-size: 32px 32px !important;
  background-repeat: no-repeat !important;
  animation: wood-cycle 34s infinite steps(1);
}
@keyframes wood-cycle {
  0%        { background-image: url("/assets/items/oak_wood.png"); }
  2.85714%  { background-image: url("/assets/items/spruce_wood.png"); }
  5.71429%  { background-image: url("/assets/items/birch_wood.png"); }
  8.57143%  { background-image: url("/assets/items/jungle_wood.png"); }
  11.42857% { background-image: url("/assets/items/acacia_wood.png"); }
  14.28571% { background-image: url("/assets/items/dark_oak_wood.png"); }
  17.14286% { background-image: url("/assets/items/mangrove_wood.png"); }
  20%       { background-image: url("/assets/items/cherry_wood.png"); }
  22.85714% { background-image: url("/assets/items/pale_oak_wood.png"); }
  25.71429% { background-image: url("/assets/items/crimson_hyphae.png"); }
  28.57143% { background-image: url("/assets/items/warped_hyphae.png"); }
  31.42857% { background-image: url("/assets/items/oak_log.png"); }
  34.28571% { background-image: url("/assets/items/spruce_log.png"); }
  37.14286% { background-image: url("/assets/items/birch_log.png"); }
  40%       { background-image: url("/assets/items/jungle_log.png"); }
  42.85714% { background-image: url("/assets/items/acacia_log.png"); }
  45.71429% { background-image: url("/assets/items/dark_oak_log.png"); }
  48.57143% { background-image: url("/assets/items/mangrove_log.png"); }
  51.42857% { background-image: url("/assets/items/cherry_log.png"); }
  57.14286% { background-image: url("/assets/items/pale_oak_log.png"); }
  60%       { background-image: url("/assets/items/crimson_stem.png"); }
  62.85714% { background-image: url("/assets/items/warped_stem.png"); }
  65.71429% { background-image: url("/assets/items/stripped_oak_log.png"); }
  68.57143% { background-image: url("/assets/items/stripped_spruce_log.png"); }
  71.42857% { background-image: url("/assets/items/stripped_birch_log.png"); }
  74.28571% { background-image: url("/assets/items/stripped_jungle_log.png"); }
  77.14286% { background-image: url("/assets/items/stripped_acacia_log.png"); }
  80%       { background-image: url("/assets/items/stripped_dark_oak_log.png"); }
  82.85714% { background-image: url("/assets/items/stripped_mangrove_log.png"); }
  85.71429% { background-image: url("/assets/items/stripped_cherry_log.png"); }
  88.57143% { background-image: url("/assets/items/stripped_pale_oak_log.png"); }
  91.42857% { background-image: url("/assets/items/stripped_crimson_stem.png"); }
  94.28571% { background-image: url("/assets/items/stripped_warped_stem.png"); }
  97.14286% { background-image: url("/assets/items/oak_wood.png"); }
  100%      { background-image: url("/assets/items/oak_wood.png"); }
}
.pg-guide-mechanics-fire-adjustment .planks-cycle {
  display: inline-block !important;
  vertical-align: middle !important;
  width: 32px !important;
  height: 32px !important;
  margin: 0 0 0 0 !important;
  background-image: url("/assets/items/oak_planks.png");
  background-size: 32px 32px !important;
  background-repeat: no-repeat !important;
  animation: planks-cycle 23s infinite steps(1);
}
@keyframes planks-cycle {
  0%        { background-image: url("/assets/items/oak_planks.png"); }
  4.54545%  { background-image: url("/assets/items/spruce_planks.png"); }
  9.09091%  { background-image: url("/assets/items/birch_planks.png"); }
  13.63636% { background-image: url("/assets/items/jungle_planks.png"); }
  18.18182% { background-image: url("/assets/items/acacia_planks.png"); }
  22.72727% { background-image: url("/assets/items/dark_oak_planks.png"); }
  27.27273% { background-image: url("/assets/items/mangrove_planks.png"); }
  31.81818% { background-image: url("/assets/items/cherry_planks.png"); }
  36.36364% { background-image: url("/assets/items/pale_oak_planks.png"); }
  40.90909% { background-image: url("/assets/items/crimson_planks.png"); }
  45.45455% { background-image: url("/assets/items/warped_planks.png"); }
  50%       { background-image: url("/assets/items/oak_button.png"); }
  54.54545% { background-image: url("/assets/items/spruce_button.png"); }
  59.09091% { background-image: url("/assets/items/birch_button.png"); }
  63.63636% { background-image: url("/assets/items/jungle_button.png"); }
  68.18182% { background-image: url("/assets/items/acacia_button.png"); }
  72.72727% { background-image: url("/assets/items/dark_oak_button.png"); }
  77.27273% { background-image: url("/assets/items/mangrove_button.png"); }
  81.81818% { background-image: url("/assets/items/cherry_button.png"); }
  86.36364% { background-image: url("/assets/items/pale_oak_button.png"); }
  90.90909% { background-image: url("/assets/items/crimson_button.png"); }
  95.45455% { background-image: url("/assets/items/warped_button.png"); }
  100%      { background-image: url("/assets/items/oak_planks.png"); }
}
.pg-guide-mechanics-fire-adjustment .other-cycle {
  display: inline-block !important;
  vertical-align: middle !important;
  width: 32px !important;
  height: 32px !important;
  margin: 0 0 0 0 !important;
  background-image: url("/assets/items/oak_door.png");
  background-size: 32px 32px !important;
  background-repeat: no-repeat !important;
  animation: other-cycle 67s infinite steps(1);
}
@keyframes other-cycle {
  0%        { background-image: url("/assets/items/oak_door.png"); }
  1.51515%  { background-image: url("/assets/items/spruce_door.png"); }
  3.03030%  { background-image: url("/assets/items/birch_door.png"); }
  4.54545%  { background-image: url("/assets/items/jungle_door.png"); }
  6.06061%  { background-image: url("/assets/items/acacia_door.png"); }
  7.57576%  { background-image: url("/assets/items/dark_oak_door.png"); }
  9.09091%  { background-image: url("/assets/items/mangrove_door.png"); }
  10.60606% { background-image: url("/assets/items/cherry_door.png"); }
  12.12121% { background-image: url("/assets/items/pale_oak_door.png"); }
  13.63636% { background-image: url("/assets/items/crimson_door.png"); }
  15.15152% { background-image: url("/assets/items/warped_door.png"); }
  16.66667% { background-image: url("/assets/items/oak_fence.png"); }
  18.18182% { background-image: url("/assets/items/spruce_fence.png"); }
  19.69697% { background-image: url("/assets/items/birch_fence.png"); }
  21.21212% { background-image: url("/assets/items/jungle_fence.png"); }
  22.72727% { background-image: url("/assets/items/acacia_fence.png"); }
  24.24242% { background-image: url("/assets/items/dark_oak_fence.png"); }
  25.75758% { background-image: url("/assets/items/mangrove_fence.png"); }
  27.27273% { background-image: url("/assets/items/cherry_fence.png"); }
  28.78788% { background-image: url("/assets/items/pale_oak_fence.png"); }
  30.30303% { background-image: url("/assets/items/crimson_fence.png"); }
  31.81818% { background-image: url("/assets/items/warped_fence.png"); }
  33.33333% { background-image: url("/assets/items/oak_fence_gate.png"); }
  34.84848% { background-image: url("/assets/items/spruce_fence_gate.png"); }
  36.36364% { background-image: url("/assets/items/birch_fence_gate.png"); }
  37.87879% { background-image: url("/assets/items/jungle_fence_gate.png"); }
  39.39394% { background-image: url("/assets/items/acacia_fence_gate.png"); }
  40.90909% { background-image: url("/assets/items/dark_oak_fence_gate.png"); }
  42.42424% { background-image: url("/assets/items/mangrove_fence_gate.png"); }
  43.93939% { background-image: url("/assets/items/cherry_fence_gate.png"); }
  45.45455% { background-image: url("/assets/items/pale_oak_fence_gate.png"); }
  46.96970% { background-image: url("/assets/items/crimson_fence_gate.png"); }
  48.48485% { background-image: url("/assets/items/warped_fence_gate.png"); }
  50%       { background-image: url("/assets/items/oak_stairs.png"); }
  51.51515% { background-image: url("/assets/items/spruce_stairs.png"); }
  53.03030% { background-image: url("/assets/items/birch_stairs.png"); }
  54.54545% { background-image: url("/assets/items/jungle_stairs.png"); }
  56.06061% { background-image: url("/assets/items/acacia_stairs.png"); }
  57.57576% { background-image: url("/assets/items/dark_oak_stairs.png"); }
  59.09091% { background-image: url("/assets/items/mangrove_stairs.png"); }
  60.60606% { background-image: url("/assets/items/cherry_stairs.png"); }
  62.12121% { background-image: url("/assets/items/pale_oak_stairs.png"); }
  63.63636% { background-image: url("/assets/items/crimson_stairs.png"); }
  65.15152% { background-image: url("/assets/items/warped_stairs.png"); }
  66.66667% { background-image: url("/assets/items/oak_slab.png"); }
  68.18182% { background-image: url("/assets/items/spruce_slab.png"); }
  69.69697% { background-image: url("/assets/items/birch_slab.png"); }
  71.21212% { background-image: url("/assets/items/jungle_slab.png"); }
  72.72727% { background-image: url("/assets/items/acacia_slab.png"); }
  74.24242% { background-image: url("/assets/items/dark_oak_slab.png"); }
  75.75758% { background-image: url("/assets/items/mangrove_slab.png"); }
  77.27273% { background-image: url("/assets/items/cherry_slab.png"); }
  78.78788% { background-image: url("/assets/items/pale_oak_slab.png"); }
  80.30303% { background-image: url("/assets/items/crimson_slab.png"); }
  81.81818% { background-image: url("/assets/items/warped_slab.png"); }
  83.33333% { background-image: url("/assets/items/oak_trapdoor.png"); }
  84.84848% { background-image: url("/assets/items/spruce_trapdoor.png"); }
  86.36364% { background-image: url("/assets/items/birch_trapdoor.png"); }
  87.87879% { background-image: url("/assets/items/jungle_trapdoor.png"); }
  89.39394% { background-image: url("/assets/items/acacia_trapdoor.png"); }
  90.90909% { background-image: url("/assets/items/dark_oak_trapdoor.png"); }
  92.42424% { background-image: url("/assets/items/mangrove_trapdoor.png"); }
  93.93939% { background-image: url("/assets/items/cherry_trapdoor.png"); }
  95.45455% { background-image: url("/assets/items/pale_oak_trapdoor.png"); }
  96.96970% { background-image: url("/assets/items/crimson_trapdoor.png"); }
  98.48485% { background-image: url("/assets/items/warped_trapdoor.png"); }
  100%      { background-image: url("/assets/items/oak_door.png"); }
}
.pg-guide-mechanics-fire-adjustment .leaves-cycle {
  display: inline-block !important;
  vertical-align: middle !important;
  width: 32px !important;
  height: 32px !important;
  margin: 0 0 0 0 !important;
  background-image: url("/assets/items/oak_leaves.png");
  background-size: 32px 32px !important;
  background-repeat: no-repeat !important;
  animation: leaves-cycle 12s infinite steps(1);
}
@keyframes leaves-cycle {
  0%        { background-image: url("/assets/items/oak_leaves.png"); }
  9.09091%  { background-image: url("/assets/items/spruce_leaves.png"); }
  18.18182% { background-image: url("/assets/items/birch_leaves.png"); }
  27.27273% { background-image: url("/assets/items/jungle_leaves.png"); }
  36.36364% { background-image: url("/assets/items/acacia_leaves.png"); }
  45.45455% { background-image: url("/assets/items/dark_oak_leaves.png"); }
  54.54545% { background-image: url("/assets/items/mangrove_leaves.png"); }
  63.63636% { background-image: url("/assets/items/cherry_leaves.png"); }
  72.72727% { background-image: url("/assets/items/pale_oak_leaves.png"); }
  81.81818% { background-image: url("/assets/items/azalea_leaves.png"); }
  90.90909% { background-image: url("/assets/items/flowering_azalea_leaves.png"); }
  100%      { background-image: url("/assets/items/oak_leaves.png"); }
}

</style>

# Пожары и добыча древесного угля

Пожары на сервере - явление опасное, но благодаря настройкам горения даже пепелище может приносить пользу. Сервер изменяет поведение огня в двух ключевых аспектах: **выпадение ресурсов из сгоревшей древесины** и **защита от неконтролируемых пожаров**.

---

## Древесный уголь из пепла

Когда огонь уничтожает деревянные блоки, те не исчезают бесследно. Вместо этого с определенной вероятностью на месте пепелища остаются ресурсы - **древесный уголь** или **палки**.

### Таблица выпадения

| Тип блока | Шанс выпадения | Что выпадает |
|:----------|:--------------:|:-------------|
| <span class="wood-cycle"></span> Бревна и обтесанная древесина | 50% | 1–3 ![Древесный уголь](/assets/items/charcoal.png) древесного угля |
| <span class="planks-cycle"></span> Доски и кнопки | 20% | 1 ![Древесный уголь](/assets/items/charcoal.png) древесный уголь |
| <span class="other-cycle"></span> Двери, заборы, ворота, ступени, плиты, люки | 20–40% | 1–2 ![Древесный уголь](/assets/items/charcoal.png) древесного угля |
| <span class="leaves-cycle"></span> Листва деревьев | 10% | 1–3 ![Палка](/assets/items/stick.png) палки |

::: tip Совет
Механика позволяет не только компенсировать потери от случайных пожаров, но и **целенаправленно выжигать** ненужные деревянные конструкции ради добычи угля.
:::

---

## Защита от лесных пожаров

Чтобы случайная искра от лавы или удар молнии не выжгли целый лес или деревянную постройку за секунды, на сервере работает **ограничитель распространения огня**.

### Как это работает

- **Скорость распространения** огня снижена - пламя не перекидывается на соседние блоки лавинообразно
- Если в определенной области одновременно горит **слишком много блоков**, огонь начинает затухать быстрее
- Это дает игрокам достаточно времени, чтобы **потушить начавшийся пожар** до того, как он уничтожит все вокруг

::: info Примечание
Ограничитель не отключает огонь полностью - он лишь предотвращает **бесконтрольное расширение** пожара. Поджечь постройку или лес по-прежнему можно, но масштаб катастрофы будет под контролем.
:::

---

## Связанные страницы

- [Обзор механик](/guide/mechanics/) - все уникальные механики сервера