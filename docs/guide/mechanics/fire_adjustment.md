---
description: "Пожары и добыча древесного угля на сервере Re:Antagon. Узнайте, как сгорание деревянных блоков приносит пользу, и как работает защита от лесных пожаров."
---

# Пожары и добыча древесного угля

Пожары на сервере - явление опасное, но благодаря настройкам горения даже пепелище может приносить пользу. Сервер изменяет поведение огня в двух ключевых аспектах: **выпадение ресурсов из сгоревшей древесины** и **защита от неконтролируемых пожаров**.

---

## Древесный уголь из пепла

Когда огонь уничтожает деревянные блоки, те не исчезают бесследно. Вместо этого с определенной вероятностью на месте пепелища остаются ресурсы - **древесный уголь** или **палки**.

### Таблица выпадения

| Тип блока | Шанс выпадения | Что выпадает |
|:----------|:--------------:|:-------------|
| <InventorySlot item="oak_wood;spruce_wood;birch_wood;jungle_wood;acacia_wood;dark_oak_wood;mangrove_wood;cherry_wood;pale_oak_wood;crimson_hyphae;warped_hyphae;oak_log;spruce_log;birch_log;jungle_log;acacia_log;dark_oak_log;mangrove_log;cherry_log;pale_oak_log;crimson_stem;warped_stem;stripped_oak_log;stripped_spruce_log;stripped_birch_log;stripped_jungle_log;stripped_acacia_log;stripped_dark_oak_log;stripped_mangrove_log;stripped_cherry_log;stripped_pale_oak_log;stripped_crimson_stem;stripped_warped_stem" /> Бревна и обтесанная древесина | 50% | 1–3 ![Древесный уголь](/assets/items/charcoal.png) древесного угля |
| <InventorySlot item="oak_planks;spruce_planks;birch_planks;jungle_planks;acacia_planks;dark_oak_planks;mangrove_planks;cherry_planks;pale_oak_planks;crimson_planks;warped_planks;oak_button;spruce_button;birch_button;jungle_button;acacia_button;dark_oak_button;mangrove_button;cherry_button;pale_oak_button;crimson_button;warped_button" /> Доски и кнопки | 20% | 1 ![Древесный уголь](/assets/items/charcoal.png) древесный уголь |
| <InventorySlot item="oak_door;spruce_door;birch_door;jungle_door;acacia_door;dark_oak_door;mangrove_door;cherry_door;pale_oak_door;crimson_door;warped_door;oak_fence;spruce_fence;birch_fence;jungle_fence;acacia_fence;dark_oak_fence;mangrove_fence;cherry_fence;pale_oak_fence;crimson_fence;warped_fence;oak_fence_gate;spruce_fence_gate;birch_fence_gate;jungle_fence_gate;acacia_fence_gate;dark_oak_fence_gate;mangrove_fence_gate;cherry_fence_gate;pale_oak_fence_gate;crimson_fence_gate;warped_fence_gate;oak_stairs;spruce_stairs;birch_stairs;jungle_stairs;acacia_stairs;dark_oak_stairs;mangrove_stairs;cherry_stairs;pale_oak_stairs;crimson_stairs;warped_stairs;oak_slab;spruce_slab;birch_slab;jungle_slab;acacia_slab;dark_oak_slab;mangrove_slab;cherry_slab;pale_oak_slab;crimson_slab;warped_slab;oak_trapdoor;spruce_trapdoor;birch_trapdoor;jungle_trapdoor;acacia_trapdoor;dark_oak_trapdoor;mangrove_trapdoor;cherry_trapdoor;pale_oak_trapdoor;crimson_trapdoor;warped_trapdoor" /> Двери, заборы, ворота, ступени, плиты, люки | 20–40% | 1–2 ![Древесный уголь](/assets/items/charcoal.png) древесного угля |
| <InventorySlot item="oak_leaves;spruce_leaves;birch_leaves;jungle_leaves;acacia_leaves;dark_oak_leaves;mangrove_leaves;cherry_leaves;pale_oak_leaves;azalea_leaves;flowering_azalea_leaves" /> Листва деревьев | 10% | 1–3 ![Палка](/assets/items/stick.png) палки |

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