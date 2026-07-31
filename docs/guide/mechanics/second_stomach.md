---
pageClass: pg-guide-mechanics-second-stomach
description: "Второй желудок Бога Расширения на сервере Re:Antagon. Узнайте о механике поглощения блоков, накапливаемых эффектах, приоритетах переваривания и доступных блоках."
---

<style>
.pg-guide-mechanics-second-stomach img {
  display: inline-block !important;
  vertical-align: middle !important;
  width: 24px !important;
  height: auto !important;
  margin: 0 0 0 0 !important;
}
.pg-guide-mechanics-second-stomach .concrete-powder-cycle {
  display: inline-block !important;
  vertical-align: middle !important;
  width: 24px !important;
  height: 24px !important;
  margin: 0 0 0 0 !important;
  background-image: url("/assets/items/white_concrete_powder.png");
  background-size: 24px 24px !important;
  background-repeat: no-repeat !important;
  animation: concrete-cycle 16s infinite steps(1);
}
@keyframes concrete-cycle {
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

</style>

# Второй желудок

Данная механика применяется последователями **Расширения** (см. [Бог Расширения](/gods/3_fungus.md)). Игрок обретает дополнительный желудок, куда может поглощать некоторые блоки или иными способами заполнять его.

---

## Как это работает

- **Шифт + ПКМ** по некоторым блокам съедает их
- КД съедания блока - **0.1 секунды**
- Блоки дают разные **накапливаемые эффекты** в зависимости от съедения (чем больше съедено, тем дольше баф и тем он сильнее)

::: info Важная особенность
Особенность этих бафов - их **постоянство**. Каждые **5 секунд** переваривается лишь **1 единица** съеденного из всех набранных бафов, а остальные обновляются согласно количеству набранного для того бафа, пока не кончится приоритетный на переваривание баф. Лишь после этого начнет перевариваться следующий.
:::

### Пример переваривания

Условно съедено на **120 секунд Силы** и **80 секунд Скорости**:
- Пока не кончится эффект Силы, Скорость опускаться не будет
- Через 70 секунд останется **50 секунд Силы** и **80 секунд Скорости**
- Через еще 70 секунд останется **60 секунд Скорости**

---

## Приоритет переваривания эффектов

Эффекты (в том числе особые), которые можно получить, поедая блоки, перевариваются в следующем порядке приоритетности (от первого к последнему):

| № | Эффект |
|:--|:-------|
| 1 | ![Слепота](/assets/items/blindness.png) Слепота |
| 2 | ![Иссушение](/assets/items/wither_effect.png) Иссушение |
| 3 | ![Заражение](/assets/items/infested.png) Заражение |
| 4 | ![Медлительность](/assets/items/slowness.png) Медлительность |
| 5 | ![Голод](/assets/items/hunger.png) Голод |
| 6 | ![Слабость](/assets/items/weakness.png) Слабость |
| 7 | ![Отравление](/assets/items/poison.png) Отравление |
| 8 | ![Утомление](/assets/items/mining_fatigue.png) Утомление |
| 9 | ![Уязвимость](/assets/items/vulnerability.png) Уязвимость (см. - [Особые эффекты](/guide/mechanics/unique_effects)) |
| 10 | ![Замедленное падение](/assets/items/slow_falling.png) Замедленное падение |
| 11 | ![Грация дельфина](/assets/items/dolphins_grace.png) Грация дельфина |
| 12 | ![Сила](/assets/items/strength.png) Сила |
| 13 | ![Огнестойкость](/assets/items/fire_resistance.png) Огнестойкость |
| 14 | ![Морская сила](/assets/items/conduit_power.png) Морская сила |
| 15 | ![Регенерация](/assets/items/regeneration.png) Регенерация |
| 16 | ![Свечение](/assets/items/glowing.png) Свечение |
| 17 | ![Спешка](/assets/items/haste.png) Спешка |
| 18 | ![Невидимость](/assets/items/invisibility.png) Невидимость |
| 19 | ![Прыгучесть](/assets/items/jump_boost.png) Прыгучесть |
| 20 | ![Ночное зрение](/assets/items/night_vision.png) Ночное зрение |
| 21 | ![Сопротивление](/assets/items/resistance.png) Сопротивление |
| 22 | ![Скорость](/assets/items/speed.png) Скорость |
| 23 | ![Подводное дыхание](/assets/items/water_breathing.png) Подводное дыхание |
| 24 | ![Стойкость](/assets/items/persistance.png) Стойкость (см. - [Особые эффекты](/guide/mechanics/unique_effects)) |

::: warning Важно
Эффекты с низким приоритетом (например, Скорость, Сопротивление) не будут убывать, пока не переварятся все эффекты с более высоким приоритетом (например, Сила, Слепота).
:::

---

## Доступные к поеданию блоки

Список доступных к поеданию блоков содержит почти все цельные **мягкие блоки** (разные блоки дают разные наборы бафов):

- ![Трава](/assets/items/grass_block.png) Блок травы
- ![Подзол](/assets/items/podzol.png) Подзол
- ![Мицелий](/assets/items/mycelium.png) Мицелий
- ![Тропинка](/assets/items/dirt_path.png) Тропинка
- ![Земля](/assets/items/dirt.png) Земля
- ![Корнистая земля](/assets/items/rooted_dirt.png) Корнистая земля
- ![Каменистая земля](/assets/items/coarse_dirt.png) Каменистая земля
- ![Пашня](/assets/items/farmland.png) Пашня
- ![Грязь](/assets/items/mud.png) Грязь
- ![Глина](/assets/items/clay.png) Глина
- ![Гравий](/assets/items/gravel.png) Гравий
- ![Подозрительный гравий](/assets/items/suspicious_gravel.png) Подозрительный гравий
- ![Лед](/assets/items/ice.png) Лед
- ![Блок снега](/assets/items/snow_block.png) Блок снега
- ![Мох](/assets/items/moss_block.png) Мох
- ![Блок бледного мха](/assets/items/pale_moss_block.png) Блок бледного мха
- ![Незеррак](/assets/items/netherrack.png) Незеррак
- ![Багровый нилий](/assets/items/crimson_nylium.png) Багровый нилий
- ![Искаженный нилий](/assets/items/warped_nylium.png) Искаженный нилий
- ![Песок душ](/assets/items/soul_sand.png) Песок душ
- ![Почва душ](/assets/items/soul_soil.png) Почва душ
- ![Блок красного гриба](/assets/items/red_mushroom_block.png) Блок красного гриба
- ![Блок коричневого гриба](/assets/items/brown_mushroom_block.png) Блок коричневого гриба
- ![Ножка гриба](/assets/items/mushroom_stem.png) Ножка гриба
- ![Блок незерского нароста](/assets/items/nether_wart_block.png) Блок незерского нароста
- ![Блок искаженного нароста](/assets/items/warped_wart_block.png) Блок искаженного нароста
- ![Грибосвет](/assets/items/shroomlight.png) Грибосвет
- <span class="concrete-powder-cycle"></span> Все цвета сухого бетона

---

## Снижение набранных эффектов

Для снижения всех набранных эффектов сразу можно есть:
- ![Песок](/assets/items/sand.png) Песок
- ![Подозрительный песок](/assets/items/suspicious_sand.png) Подозрительный песок
- ![Красный песок](/assets/items/red_sand.png) Красный песок

::: warning Важно
Снижается только **внутренний счетчик** для обновления бафа, уже выданный эффект не трогается. Потому рекомендуется **запивать молоком** для полного снятия эффектов.
:::

---

## Прожорливое тело

Если у игрока выбрано **Прожорливое тело**, список блоков, доступных к съедению, расширяется почти всеми природными каменными блоками, также дающими свои эффекты.

### Дополнительные каменные блоки

Становятся съедаемы:
- ![Камень](/assets/items/stone.png) Камень
- ![Сланец](/assets/items/deepslate.png) Сланец
- ![Булыжник](/assets/items/cobblestone.png) Булыжник
- ![Колотый сланец](/assets/items/cobbled_deepslate.png) Колотый дипслейт
- ![Гранит](/assets/items/granite.png) Гранит
- ![Диорит](/assets/items/diorite.png) Диорит
- ![Андезит](/assets/items/andesite.png) Андезит
- ![Кальцит](/assets/items/calcite.png) Кальцит
- ![Туфф](/assets/items/tuff.png) Туфф
- ![Блок капельника](/assets/items/dripstone_block.png) Блок капельника
- ![Магма](/assets/items/magma_block.png) Магма-блок
- ![Чернит](/assets/items/blackstone.png) Чернит
- ![Базальт](/assets/items/basalt.png) Базальт
- ![Гладкий базальт](/assets/items/smooth_basalt.png) Гладкий базальт
- ![Эндерняк](/assets/items/end_stone.png) Эндерняк

### Очищающие блоки

Также становятся доступны к поеданию следующие блоки, **очищающие съеденное**:
- ![Блок аметиста](/assets/items/amethyst_block.png) Блок аметиста
- ![Песчаник](/assets/items/sandstone.png) Песчаник
- ![Красный песчаник](/assets/items/red_sandstone.png) Красный песчаник

::: tip Совет
Прожорливое тело позволяет не только есть камни для получения эффектов, но и использовать аметист, песчаник и красный песчаник для очистки накопленного в желудке.
:::

---

## Ограничения

::: warning Важно
Данная механика **не работает в Чистилище и данжах**.
:::

---

## Связанные страницы

- [Бог Расширения](/gods/3_fungus.md) - общая информация о боге
- [Система богов](/gods/index.md) - общая информация о системе богов
- [Особые эффекты](/guide/mechanics/unique_effects) - детальное описание уникальных эффектов (Уязвимость, Стойкость)