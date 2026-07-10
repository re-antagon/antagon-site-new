---
description: "Изменение и разрушение блоков при падении наковальни на сервере Re:Antagon. Узнайте, какие блоки меняются или ломаются под упавшей наковальней."
---

<style>
img {
  display: inline-block !important;
  vertical-align: middle !important;
  width: 24px !important;
  height: auto !important;
  margin: 0 0 0 0 !important;
}

.glass-cycle {
  display: inline-block !important;
  vertical-align: middle !important;
  width: 24px !important;
  height: 24px !important;
  margin: 0 0 0 0 !important;
  background-image: url("/assets/items/white_stained_glass.png");
  background-size: 24px 24px !important;
  background-repeat: no-repeat !important;
  animation: glass-cycle 16s infinite steps(1);
}

@keyframes glass-cycle {
  0%     { background-image: url("/assets/items/white_stained_glass.png"); }
  6.25%  { background-image: url("/assets/items/orange_stained_glass.png"); }
  12.5%  { background-image: url("/assets/items/magenta_stained_glass.png"); }
  18.75% { background-image: url("/assets/items/light_blue_stained_glass.png"); }
  25%    { background-image: url("/assets/items/yellow_stained_glass.png"); }
  31.25% { background-image: url("/assets/items/lime_stained_glass.png"); }
  37.5%  { background-image: url("/assets/items/pink_stained_glass.png"); }
  43.75% { background-image: url("/assets/items/gray_stained_glass.png"); }
  50%    { background-image: url("/assets/items/light_gray_stained_glass.png"); }
  56.25% { background-image: url("/assets/items/cyan_stained_glass.png"); }
  62.5%  { background-image: url("/assets/items/purple_stained_glass.png"); }
  68.75% { background-image: url("/assets/items/blue_stained_glass.png"); }
  75%    { background-image: url("/assets/items/brown_stained_glass.png"); }
  81.25% { background-image: url("/assets/items/green_stained_glass.png"); }
  87.5%  { background-image: url("/assets/items/red_stained_glass.png"); }
  93.75% { background-image: url("/assets/items/black_stained_glass.png"); }
  100%   { background-image: url("/assets/items/white_stained_glass.png"); }
}

.glass-pane-cycle {
  display: inline-block !important;
  vertical-align: middle !important;
  width: 24px !important;
  height: 24px !important;
  margin: 0 0 0 0 !important;
  background-image: url("/assets/items/white_stained_glass_pane.png");
  background-size: 24px 24px !important;
  background-repeat: no-repeat !important;
  animation: glass-pane-cycle 16s infinite steps(1);
}

@keyframes glass-pane-cycle {
  0%     { background-image: url("/assets/items/white_stained_glass_pane.png"); }
  6.25%  { background-image: url("/assets/items/orange_stained_glass_pane.png"); }
  12.5%  { background-image: url("/assets/items/magenta_stained_glass_pane.png"); }
  18.75% { background-image: url("/assets/items/light_blue__stainedglass_pane.png"); }
  25%    { background-image: url("/assets/items/yellow_stained_glass_pane.png"); }
  31.25% { background-image: url("/assets/items/lime_stained_glass_pane.png"); }
  37.5%  { background-image: url("/assets/items/pink_stained_glass_pane.png"); }
  43.75% { background-image: url("/assets/items/gray_stained_glass_pane.png"); }
  50%    { background-image: url("/assets/items/light_gray_stained_glass_pane.png"); }
  56.25% { background-image: url("/assets/items/cyan_stained_glass_pane.png"); }
  62.5%  { background-image: url("/assets/items/purple_stained_glass_pane.png"); }
  68.75% { background-image: url("/assets/items/blue_stained_glass_pane.png"); }
  75%    { background-image: url("/assets/items/brown_stained_glass_pane.png"); }
  81.25% { background-image: url("/assets/items/green_stained_glass_pane.png"); }
  87.5%  { background-image: url("/assets/items/red_stained_glass_pane.png"); }
  93.75% { background-image: url("/assets/items/black_stained_glass_pane.png"); }
  100%   { background-image: url("/assets/items/white_stained_glass_pane.png"); }
}

.concrete-powder-cycle {
  display: inline-block !important;
  vertical-align: middle !important;
  width: 24px !important;
  height: 24px !important;
  margin: 0 0 0 0 !important;
  background-image: url("/assets/items/white_concrete_powder.png");
  background-size: 24px 24px !important;
  background-repeat: no-repeat !important;
  animation: concrete-powder-cycle 16s infinite steps(1);
}

@keyframes concrete-powder-cycle {
  0%     { background-image: url("/assets/items/white_concrete_powder.png"); }
  6.25%  { background-image: url("/assets/items/orange_concrete_powder.png"); }
  12.5%  { background-image: url("/assets/items/magenta_concrete_powder.png"); }
  18.75% { background-image: url("/assets/items/light_blue_concrete_powder.png"); }
  25%    { background-image: url("/assets/items/yellow_concrete_powder.png"); }
  31.25% { background-image: url("/assets/items/lime_concrete_powder.png"); }
  37.5%  { background-image: url("/assets/items/pink_concrete_powder.png"); }
  43.75% { background-image: url("/assets/items/gray_concrete_powder.png"); }
  50%    { background-image: url("/assets/items/light_gray_concrete_powder.png"); }
  56.25% { background-image: url("/assets/items/cyan_concrete_powder.png"); }
  62.5%  { background-image: url("/assets/items/purple_concrete_powder.png"); }
  68.75% { background-image: url("/assets/items/blue_concrete_powder.png"); }
  75%    { background-image: url("/assets/items/brown_concrete_powder.png"); }
  81.25% { background-image: url("/assets/items/green_concrete_powder.png"); }
  87.5%  { background-image: url("/assets/items/red_concrete_powder.png"); }
  93.75% { background-image: url("/assets/items/black_concrete_powder.png"); }
  100%   { background-image: url("/assets/items/white_concrete_powder.png"); }
}

.concrete-cycle {
  display: inline-block !important;
  vertical-align: middle !important;
  width: 24px !important;
  height: 24px !important;
  margin: 0 0 0 0 !important;
  background-image: url("/assets/items/white_concrete.png");
  background-size: 24px 24px !important;
  background-repeat: no-repeat !important;
  animation: concrete-cycle 16s infinite steps(1);
}

@keyframes concrete-cycle {
  0%     { background-image: url("/assets/items/white_concrete.png"); }
  6.25%  { background-image: url("/assets/items/orange_concrete.png"); }
  12.5%  { background-image: url("/assets/items/magenta_concrete.png"); }
  18.75% { background-image: url("/assets/items/light_blue_concrete.png"); }
  25%    { background-image: url("/assets/items/yellow_concrete.png"); }
  31.25% { background-image: url("/assets/items/lime_concrete.png"); }
  37.5%  { background-image: url("/assets/items/pink_concrete.png"); }
  43.75% { background-image: url("/assets/items/gray_concrete.png"); }
  50%    { background-image: url("/assets/items/light_gray_concrete.png"); }
  56.25% { background-image: url("/assets/items/cyan_concrete.png"); }
  62.5%  { background-image: url("/assets/items/purple_concrete.png"); }
  68.75% { background-image: url("/assets/items/blue_concrete.png"); }
  75%    { background-image: url("/assets/items/brown_concrete.png"); }
  81.25% { background-image: url("/assets/items/green_concrete.png"); }
  87.5%  { background-image: url("/assets/items/red_concrete.png"); }
  93.75% { background-image: url("/assets/items/black_concrete.png"); }
  100%   { background-image: url("/assets/items/white_concrete.png"); }
}
</style>

# Изменение блоков при падении наковальни

На сервере Re:Antagon **наковальня, упавшая с высоты на определенный блок, изменяет его**. В зависимости от типа блока он либо превращается в другой, либо полностью разрушается (исчезает).

---

## Демонстрация

Наглядное видео с процессом изменения и разрушения блоков под упавшей наковальней:

<video controls width="640" src="/assets/videos/crushes_block.mp4"></video>

---

## Превращение камня и грунта

Цепочка постепенного «раздробления» природных блоков:

| Блок до падения | Блок после падения |
|:----------------|:-------------------|
| ![Камень](/assets/items/stone.png) Камень | ![Булыжник](/assets/items/cobblestone.png) Булыжник |
| ![Булыжник](/assets/items/cobblestone.png) Булыжник | ![Гравий](/assets/items/gravel.png) Гравий |
| ![Гравий](/assets/items/gravel.png) Гравий | ![Песок](/assets/items/sand.png) Песок |
| ![Песок](/assets/items/sand.png) Песок | ![Песчаник](/assets/items/sandstone.png) Песчаник |

---

## Металлические блоки

Блоки металлов превращаются в блоки **необработанной руды**:

| Блок до падения | Блок после падения |
|:----------------|:-------------------|
| ![Железный блок](/assets/items/iron_block.png) Железный блок | ![Блок необработанного железаПесок](/assets/items/raw_iron_block.png) Блок необработанного железа |
| ![Золотой блок](/assets/items/gold_block.png) Золотой блок | ![Блок необработанного золота](/assets/items/raw_gold_block.png) Блок необработанного золота |
| ![Медный блок](/assets/items/copper_block.png) Медный блок | ![Блок необработанной меди](/assets/items/raw_copper_block.png) Блок необработанной меди |
| ![Потемневшая медь](/assets/items/exposed_copper.png) Потемневшая медь | ![Блок необработанной меди](/assets/items/raw_copper_block.png) Блок необработанной меди |
| ![Состаренная медь](/assets/items/weathered_copper.png) Состаренная медь | ![Блок необработанной меди](/assets/items/raw_copper_block.png) Блок необработанной меди |
| ![Окисленная медь](/assets/items/oxidized_copper.png) Окисленная медь | ![Блок необработанной меди](/assets/items/raw_copper_block.png) Блок необработанной меди |
| ![Вощеный медный блок](/assets/items/waxed_copper_block.png) Вощеный медный блок | ![Блок необработанной меди](/assets/items/raw_copper_block.png) Блок необработанной меди |
| ![Вощеная потемневшая медь](/assets/items/waxed_exposed_copper.png) Вощеная потемневшая медь | ![Блок необработанной меди](/assets/items/raw_copper_block.png) Блок необработанной меди |
| ![Вощеная состаренная медь](/assets/items/waxed_weathered_copper.png) Вощеная состаренная медь | ![Блок необработанной меди](/assets/items/raw_copper_block.png) Блок необработанной меди |
| ![Вощеная окисленная медь](/assets/items/waxed_oxidized_copper.png) Вощеная окисленная медь | ![Блок необработанной меди](/assets/items/raw_copper_block.png) Блок необработанной меди |

::: tip Примечание
Любая разновидность меди (чистая, окисленная, погодная, глубоко окисленная, вощеная) под наковальней превращается в **блок необработанной меди** независимо от стадии окисления или вощения.
:::

---

## Разрушение стекла

Все виды стекла **разрушаются**:

| Блок до падения | Результат |
|:----------------|:---------:|
| ![Стекло](/assets/items/glass.png) Стекло | Разрушается |
| ![Стеклянная панель](/assets/items/glass_pane.png) Стеклянная панель | Разрушается |
| <span class="glass-cycle"></span> Все цвета стекла | Разрушается |
| <span class="glass-pane-cycle"></span> Все цвета стеклянной панели | Разрушается |

---

## Бетон в порошок

Блоки бетона превращаются в **бетонный порошок** того же цвета:

| Блок до падения | Блок после падения |
|:----------------|:-------------------|
| <span class="concrete-cycle"></span> Бетон | <span class="concrete-powder-cycle"></span> Бетонный порошок |

---

## Связанные страницы

- [Обзор механик](/guide/mechanics/) - все уникальные механики сервера