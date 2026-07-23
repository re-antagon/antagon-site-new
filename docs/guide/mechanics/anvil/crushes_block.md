---
description: "Изменение и разрушение блоков при падении наковальни на сервере Re:Antagon. Узнайте, какие блоки меняются или ломаются под упавшей наковальней."
---

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
| <InventorySlot item="white_stained_glass;orange_stained_glass;magenta_stained_glass;light_blue_stained_glass;yellow_stained_glass;lime_stained_glass;pink_stained_glass;gray_stained_glass;light_gray_stained_glass;cyan_stained_glass;purple_stained_glass;blue_stained_glass;brown_stained_glass;green_stained_glass;red_stained_glass;black_stained_glass" /> Все цвета стекла | Разрушается |
| <InventorySlot item="white_stained_glass_pane;orange_stained_glass_pane;magenta_stained_glass_pane;light_blue_stained_glass_pane;yellow_stained_glass_pane;lime_stained_glass_pane;pink_stained_glass_pane;gray_stained_glass_pane;light_gray_stained_glass_pane;cyan_stained_glass_pane;purple_stained_glass_pane;blue_stained_glass_pane;brown_stained_glass_pane;green_stained_glass_pane;red_stained_glass_pane;black_stained_glass_pane" /> Все цвета стеклянной панели | Разрушается |

---

## Бетон в порошок

Блоки бетона превращаются в **бетонный порошок** того же цвета:

| Блок до падения | Блок после падения |
|:----------------|:-------------------|
| <InventorySlot item="white_concrete;orange_concrete;magenta_concrete;light_blue_concrete;yellow_concrete;lime_concrete;pink_concrete;gray_concrete;light_gray_concrete;cyan_concrete;purple_concrete;blue_concrete;brown_concrete;green_concrete;red_concrete;black_concrete" /> Бетон | <InventorySlot item="white_concrete_powder;orange_concrete_powder;magenta_concrete_powder;light_blue_concrete_powder;yellow_concrete_powder;lime_concrete_powder;pink_concrete_powder;gray_concrete_powder;light_gray_concrete_powder;cyan_concrete_powder;purple_concrete_powder;blue_concrete_powder;brown_concrete_powder;green_concrete_powder;red_concrete_powder;black_concrete_powder" /> Бетонный порошок |

---

## Связанные страницы

- [Физика наковальни](/guide/mechanics/anvil/piston_physics) - как наковальня ведет себя при взаимодействии с поршнем и слизью
- [Обзор механик](/guide/mechanics/) - все уникальные механики сервера