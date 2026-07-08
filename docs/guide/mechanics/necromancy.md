---
description: "Некромантия Бога Искажения на сервере Re:Antagon. Узнайте о посохах, рунах, нежити, зиккуратах и механике праны."
---

# Некромантия

**Некромантия** - ключевая механика Бога Искажения, позволяющая поднимать нежить, управлять армиями мертвецов и черпать силу из умерших существ. Система работает через **посохи некромантии** и **руны**, используя **прану** умерших для призыва и поддержания нежити.

> Некромантия работает при помощи посохов некромантии, а также при помощи предметов - рун. Когда кто-то в радиусе n блоков от держащего посох игрока, либо Лича умирает, посох получает часть праны умершего, которая впитается в него. Не обязательно убивать самому - смерть может произойти по любым причинам.

---

## Сбор праны

### Механика сбора

Когда существо умирает в радиусе действия посоха некромантии, посох получает часть его праны:

| Тип существа | Прана |
|:-------------|:------|
| Обычный моб | 1 |
| Житель | 2 |
| NPC | 3 |
| Игрок | 5 |

::: warning Важно
Умерший игрок при возрождении будет иметь **неполное количество праны** (будет недоставать 5 единиц), что вызовет у него временное недомогание, пока прана не восстановится.
:::

### Радиус сбора

Радиус сбора праны зависит от типа посоха:

| Посох | Радиус |
|:------|:------:|
| Обычный | 15 блоков |
| Адепт некромантии | 20 блоков |
| Лич | 30 блоков |
| АрхиЛич | 40 блоков |

---

## Руны нежити

**Руны** - предметы, необходимые для призыва конкретной нежити. Посох ищет руну во второй/основной руке, либо если ее там нет - ищет в инвентаре самую слабую руну и пытается активировать ее.

### Формат названия

Руны имеют название в формате: **<номер>. Руна <название_моба>**

### Крафт рун

#### 1. Руна зомби

<div class="mcui mcui-Crafting_Table">
  <div class="mcui-input">
    <div class="mcui-row">
      <span class="invslot"><span class="invslot-item"><a href="/items/cobblestone" class="image"><img src="/assets/items/cobblestone.png" width="64" height="64"></a></span></span>
      <span class="invslot"><span class="invslot-item"><a href="/items/rotten_flesh" class="image"><img src="/assets/items/rotten_flesh.png" width="64" height="64"></a></span></span>
      <span class="invslot"></span>
    </div>
    <div class="mcui-row">
      <span class="invslot"></span>
      <span class="invslot"></span>
      <span class="invslot"></span>
    </div>
    <div class="mcui-row">
      <span class="invslot"></span>
      <span class="invslot"></span>
      <span class="invslot"></span>
    </div>
  </div>
  <span class="mcui-arrow"></span>
  <span class="mcui-output">
    <span class="invslot"><span class="invslot-item"><a href="/items/nether_brick" class="image"><img src="/assets/items/nether_brick.png" width="64" height="64"></a></span></span>
  </span>
  <div class="mcui-icons"><span class="mcui-shapeless"></span></div>
</div>

---

#### 2. Руна скелета

<div class="mcui mcui-Crafting_Table">
  <div class="mcui-input">
    <div class="mcui-row">
      <span class="invslot"><span class="invslot-item"><a href="/items/cobblestone" class="image"><img src="/assets/items/cobblestone.png" width="64" height="64"></a></span></span>
      <span class="invslot"><span class="invslot-item"><a href="/items/bone" class="image"><img src="/assets/items/bone.png" width="64" height="64"></a></span></span>
      <span class="invslot"></span>
    </div>
    <div class="mcui-row">
      <span class="invslot"></span>
      <span class="invslot"></span>
      <span class="invslot"></span>
    </div>
    <div class="mcui-row">
      <span class="invslot"></span>
      <span class="invslot"></span>
      <span class="invslot"></span>
    </div>
  </div>
  <span class="mcui-arrow"></span>
  <span class="mcui-output">
    <span class="invslot"><span class="invslot-item"><a href="/items/nether_brick" class="image"><img src="/assets/items/nether_brick.png" width="64" height="64"></a></span></span>
  </span>
  <div class="mcui-icons"><span class="mcui-shapeless"></span></div>
</div>

---

#### 3. Руна взрывного черепа

<div class="mcui mcui-Crafting_Table">
  <div class="mcui-input">
    <div class="mcui-row">
      <span class="invslot"><span class="invslot-item"><a href="/items/cobblestone" class="image"><img src="/assets/items/cobblestone.png" width="64" height="64"></a></span></span>
      <span class="invslot"><span class="invslot-item"><a href="/items/bone" class="image"><img src="/assets/items/bone.png" width="64" height="64"></a></span></span>
      <span class="invslot"><span class="invslot-item"><a href="/items/fire_charge" class="image"><img src="/assets/items/fire_charge.png" width="64" height="64"></a></span></span>
    </div>
    <div class="mcui-row">
      <span class="invslot"></span>
      <span class="invslot"></span>
      <span class="invslot"></span>
    </div>
    <div class="mcui-row">
      <span class="invslot"></span>
      <span class="invslot"></span>
      <span class="invslot"></span>
    </div>
  </div>
  <span class="mcui-arrow"></span>
  <span class="mcui-output">
    <span class="invslot"><span class="invslot-item"><a href="/items/nether_brick" class="image"><img src="/assets/items/nether_brick.png" width="64" height="64"></a></span></span>
  </span>
  <div class="mcui-icons"><span class="mcui-shapeless"></span></div>
</div>

---

#### 4. Руна знаменосец

<div class="mcui mcui-Crafting_Table">
  <div class="mcui-input">
    <div class="mcui-row">
      <span class="invslot"><span class="invslot-item"><a href="/items/cobblestone" class="image"><img src="/assets/items/cobblestone.png" width="64" height="64"></a></span></span>
      <span class="invslot"><span class="invslot-item"><a href="/items/breeze_rod" class="image"><img src="/assets/items/breeze_rod.png" width="64" height="64"></a></span></span>
      <span class="invslot"></span>
    </div>
    <div class="mcui-row">
      <span class="invslot"></span>
      <span class="invslot"></span>
      <span class="invslot"></span>
    </div>
    <div class="mcui-row">
      <span class="invslot"></span>
      <span class="invslot"></span>
      <span class="invslot"></span>
    </div>
  </div>
  <span class="mcui-arrow"></span>
  <span class="mcui-output">
    <span class="invslot"><span class="invslot-item"><a href="/items/nether_brick" class="image"><img src="/assets/items/nether_brick.png" width="64" height="64"></a></span></span>
  </span>
  <div class="mcui-icons"><span class="mcui-shapeless"></span></div>
</div>

---

#### 5. Руна бегун

<div class="mcui mcui-Crafting_Table">
  <div class="mcui-input">
    <div class="mcui-row">
      <span class="invslot"><span class="invslot-item"><a href="/items/cobblestone" class="image"><img src="/assets/items/cobblestone.png" width="64" height="64"></a></span></span>
      <span class="invslot"><span class="invslot-item"><a href="/items/rotten_flesh" class="image"><img src="/assets/items/rotten_flesh.png" width="64" height="64"></a></span></span>
      <span class="invslot"><span class="invslot-item"><a href="/items/sugar" class="image"><img src="/assets/items/sugar.png" width="64" height="64"></a></span></span>
    </div>
    <div class="mcui-row">
      <span class="invslot"></span>
      <span class="invslot"></span>
      <span class="invslot"></span>
    </div>
    <div class="mcui-row">
      <span class="invslot"></span>
      <span class="invslot"></span>
      <span class="invslot"></span>
    </div>
  </div>
  <span class="mcui-arrow"></span>
  <span class="mcui-output">
    <span class="invslot"><span class="invslot-item"><a href="/items/nether_brick" class="image"><img src="/assets/items/nether_brick.png" width="64" height="64"></a></span></span>
  </span>
  <div class="mcui-icons"><span class="mcui-shapeless"></span></div>
</div>

---

#### 6. Руна призрака (×8)

<div class="mcui mcui-Crafting_Table">
  <div class="mcui-input">
    <div class="mcui-row">
      <span class="invslot"><span class="invslot-item"><a href="/items/cobblestone" class="image"><img src="/assets/items/cobblestone.png" width="64" height="64"></a></span></span>
      <span class="invslot"><span class="invslot-item"><a href="/items/cobblestone" class="image"><img src="/assets/items/cobblestone.png" width="64" height="64"></a></span></span>
      <span class="invslot"><span class="invslot-item"><a href="/items/cobblestone" class="image"><img src="/assets/items/cobblestone.png" width="64" height="64"></a></span></span>
    </div>
    <div class="mcui-row">
      <span class="invslot"><span class="invslot-item"><a href="/items/cobblestone" class="image"><img src="/assets/items/cobblestone.png" width="64" height="64"></a></span></span>
      <span class="invslot"><span class="invslot-item"><a href="/items/cobblestone" class="image"><img src="/assets/items/cobblestone.png" width="64" height="64"></a></span></span>
      <span class="invslot"><span class="invslot-item"><a href="/items/cobblestone" class="image"><img src="/assets/items/cobblestone.png" width="64" height="64"></a></span></span>
    </div>
    <div class="mcui-row">
      <span class="invslot"><span class="invslot-item"><a href="/items/cobblestone" class="image"><img src="/assets/items/cobblestone.png" width="64" height="64"></a></span></span>
      <span class="invslot"><span class="invslot-item"><a href="/items/cobblestone" class="image"><img src="/assets/items/cobblestone.png" width="64" height="64"></a></span></span>
      <span class="invslot"><span class="invslot-item"><a href="/items/phantom_membrane" class="image"><img src="/assets/items/phantom_membrane.png" width="64" height="64"></a></span></span>
    </div>
  </div>
  <span class="mcui-arrow"></span>
  <span class="mcui-output">
    <span class="invslot">
      <span class="invslot-item"><a href="/items/nether_brick" class="image"><img src="/assets/items/nether_brick.png" width="64" height="64"></a></span>
      <span class="invslot-stacksize">8</span>
    </span>
  </span>
  <div class="mcui-icons"><span class="mcui-shapeless"></span></div>
</div>

::: tip Примечание
Руна призрака (№6) крафтится сразу в количестве 8 штук за один раз.
:::

---

#### 7. Руна арбалиста

<div class="mcui mcui-Crafting_Table">
  <div class="mcui-input">
    <div class="mcui-row">
      <span class="invslot"><span class="invslot-item"><a href="/items/cobblestone" class="image"><img src="/assets/items/cobblestone.png" width="64" height="64"></a></span></span>
      <span class="invslot"><span class="invslot-item"><a href="/items/bone" class="image"><img src="/assets/items/bone.png" width="64" height="64"></a></span></span>
      <span class="invslot"><span class="invslot-item"><a href="/items/tripwire_hook" class="image"><img src="/assets/items/tripwire_hook.png" width="64" height="64"></a></span></span>
    </div>
    <div class="mcui-row">
      <span class="invslot"></span>
      <span class="invslot"></span>
      <span class="invslot"></span>
    </div>
    <div class="mcui-row">
      <span class="invslot"></span>
      <span class="invslot"></span>
      <span class="invslot"></span>
    </div>
  </div>
  <span class="mcui-arrow"></span>
  <span class="mcui-output">
    <span class="invslot"><span class="invslot-item"><a href="/items/nether_brick" class="image"><img src="/assets/items/nether_brick.png" width="64" height="64"></a></span></span>
  </span>
  <div class="mcui-icons"><span class="mcui-shapeless"></span></div>
</div>

---

#### 8. Руна зомбосс

<div class="mcui mcui-Crafting_Table">
  <div class="mcui-input">
    <div class="mcui-row">
      <span class="invslot"><span class="invslot-item"><a href="/items/cobblestone" class="image"><img src="/assets/items/cobblestone.png" width="64" height="64"></a></span></span>
      <span class="invslot"><span class="invslot-item"><a href="/items/rotten_flesh" class="image"><img src="/assets/items/rotten_flesh.png" width="64" height="64"></a></span></span>
      <span class="invslot"><span class="invslot-item"><a href="/items/rotten_flesh" class="image"><img src="/assets/items/rotten_flesh.png" width="64" height="64"></a></span></span>
    </div>
    <div class="mcui-row">
      <span class="invslot"><span class="invslot-item"><a href="/items/blaze_powder" class="image"><img src="/assets/items/blaze_powder.png" width="64" height="64"></a></span></span>
      <span class="invslot"></span>
      <span class="invslot"></span>
    </div>
    <div class="mcui-row">
      <span class="invslot"></span>
      <span class="invslot"></span>
      <span class="invslot"></span>
    </div>
  </div>
  <span class="mcui-arrow"></span>
  <span class="mcui-output">
    <span class="invslot"><span class="invslot-item"><a href="/items/nether_brick" class="image"><img src="/assets/items/nether_brick.png" width="64" height="64"></a></span></span>
  </span>
  <div class="mcui-icons"><span class="mcui-shapeless"></span></div>
</div>

---

#### 9. Руна некромага

<div class="mcui mcui-Crafting_Table">
  <div class="mcui-input">
    <div class="mcui-row">
      <span class="invslot"><span class="invslot-item"><a href="/items/cobblestone" class="image"><img src="/assets/items/cobblestone.png" width="64" height="64"></a></span></span>
      <span class="invslot"><span class="invslot-item"><a href="/items/bone" class="image"><img src="/assets/items/bone.png" width="64" height="64"></a></span></span>
      <span class="invslot"><span class="invslot-item"><a href="/items/bone" class="image"><img src="/assets/items/bone.png" width="64" height="64"></a></span></span>
    </div>
    <div class="mcui-row">
      <span class="invslot"><span class="invslot-item"><a href="/items/ghast_tear" class="image"><img src="/assets/items/ghast_tear.png" width="64" height="64"></a></span></span>
      <span class="invslot"></span>
      <span class="invslot"></span>
    </div>
    <div class="mcui-row">
      <span class="invslot"></span>
      <span class="invslot"></span>
      <span class="invslot"></span>
    </div>
  </div>
  <span class="mcui-arrow"></span>
  <span class="mcui-output">
    <span class="invslot"><span class="invslot-item"><a href="/items/nether_brick" class="image"><img src="/assets/items/nether_brick.png" width="64" height="64"></a></span></span>
  </span>
  <div class="mcui-icons"><span class="mcui-shapeless"></span></div>
</div>

---

#### 10. Руна рыцаря смерти

<div class="mcui mcui-Crafting_Table">
  <div class="mcui-input">
    <div class="mcui-row">
      <span class="invslot"><span class="invslot-item"><a href="/items/cobblestone" class="image"><img src="/assets/items/cobblestone.png" width="64" height="64"></a></span></span>
      <span class="invslot"><span class="invslot-item"><a href="/items/bone" class="image"><img src="/assets/items/bone.png" width="64" height="64"></a></span></span>
      <span class="invslot"><span class="invslot-item"><a href="/items/diamond" class="image"><img src="/assets/items/diamond.png" width="64" height="64"></a></span></span>
    </div>
    <div class="mcui-row">
      <span class="invslot"><span class="invslot-item"><a href="/items/iron_ingot" class="image"><img src="/assets/items/iron_ingot.png" width="64" height="64"></a></span></span>
      <span class="invslot"><span class="invslot-item"><a href="/items/iron_ingot" class="image"><img src="/assets/items/iron_ingot.png" width="64" height="64"></a></span></span>
      <span class="invslot"></span>
    </div>
    <div class="mcui-row">
      <span class="invslot"></span>
      <span class="invslot"></span>
      <span class="invslot"></span>
    </div>
  </div>
  <span class="mcui-arrow"></span>
  <span class="mcui-output">
    <span class="invslot"><span class="invslot-item"><a href="/items/nether_brick" class="image"><img src="/assets/items/nether_brick.png" width="64" height="64"></a></span></span>
  </span>
  <div class="mcui-icons"><span class="mcui-shapeless"></span></div>
</div>

---

## Посохи некромантии

Посохи некромантии - основные инструменты для призыва нежити и управления армией.

### Типы посохов

| Посох | Макс. прана | Уровни нежити | Радиус сбора |
|:------|:----------:|:--------------|:------------:|
| Обычный | 20 | 1-3 | 15 блоков |
| Адепт некромантии | 40 | 1-5 | 20 блоков |
| Лич | 80 | 1-7 | 30 блоков |
| АрхиЛич | 120 | 1-12 | 40 блоков |

### Стрельба лучами

Посохи некромантии способны стрелять лучами:
- **КД**: 1 секунда
- **Урон**: 1 неблокируемого урона
- **Эффект**: Устанавливает цель для атаки всей подконтрольной нежити (личам или игрокам)

---

## Механика праны нежити

### Трата праны

Вся нежить требует праны для существования, тратя ее из своего запаса с определенной скоростью. Запас пополняется:
- От владельца через артефактные посохи в его руках
- От зиккуратов, если нежить находится рядом с ними

Если у нежити кончается прана, она начинает быстро получать урон и умирает.

### Стоимость призыва

Призыв требует праны из посоха в количестве, равном **мощности призываемой нежити** (сколько затрачено на призыв, такого размера резерв праны у нежити).

---

## Зиккурат

**Зиккурат** - постройка, генерирующая прану и подпитывающая нежить в радиусе.

### Характеристики

| Параметр | Значение |
|:---------|:---------|
| **Генерация праны** | 1 ед./20с |
| **Радиус подпитки** | 25 блоков |
| **HP** | 50 |
| **Максимальный заряд** | 50 |

### Механики

**Привязка нежити:**
- Выстрелите посохом некромантии в зиккурат
- Вся ваша нежить привяжется к нему
- Нежить перестает следовать за игроком и стоит в области подпитки

**Отвязывание:**
- Выстрелите в привязанную к зиккурату нежить
- Нежить снова следует за хозяином

::: warning Важно
Зиккурат не может быть поражен стрелами.
:::

### Ограничение

Если к зиккурату привязано **слишком много нежити**, они могут выпить его досуха. Тогда зиккурат, не успев восстановить себе энергию, умрет. **Вся нежить около него тоже умрет.**

---

## Типы нежити

### Общие принципы

1. Вся нежить **не имеет регенерации**, если не указано обратное
2. Все типы нежити тратят прану на существование
3. Нежить может подбирать экипировку (некоторые типы)

### Таблица нежити

| Тип | Прана | Трата праны | Особенности |
|:----|:-----:|:------------|:------------|
| **Зомби** | 2 | 1 ед./15 мин | Обычные, иногда подбирают экипировку |
| **Скелет** | 2 | 1 ед./15 мин | Обычные, иногда подбирают экипировку |
| **Взрывной череп** | 2 | 1 ед./20 сек | 1 HP, фокусируются на точку где цель, быстро летят по прямой, умирают при ударе об блоки. При смерти взрываются (5 урона, не ломают блоки). Владелец и его нежить тоже получают урон. Задержка перед вылетом 1-60 тиков |
| **Знаменосец** | 6 | 1 ед./5 мин | Скелет с баннером, пассивно усиливает всю нежить: скорость I на 5с раз в 15с, восстанавливает 1 HP каждые 10с (включая игрока-владельца). Радиус баффов 20 блоков. Обычно не атакуют, убегают от игроков |
| **Бегун** | 6 | 1 ед./5 мин | Зомби ×0.75 размера, 20 HP, скорость в 2 раза выше обычных зомби, совершают дамажащие рывки сквозь цели, иногда подбирают экипировку |
| **Призрак** | 8 | 1 ед./5 мин | 30 HP, летает сквозь блоки, атаки накладывают слабость, получает 50% урона от не-магических атак. Не следует за призывателем, летает относительно недалеко от места появления |
| **Арбаллист** | 8 | 1 ед./3 мин | Скелет ×1.25 размера, 60 HP, стреляет 2-4 стрелами за раз очередями |
| **Зомбосс** | 8 | 1 ед./3 мин | Зомби ×1.5 размера, высокая атака с отдачей, бронированность и HP, малая регенерация, низкая скорость, 50% сопротивление отдаче. Наносит урон по области перед собой, а не только по конкретной цели |
| **Некромаг** | 12 | 1 ед./2 мин | При создании запоминает один аспект и вкладывает его в дистанционные атаки (поджог, отравление, ослабление, иссушение), накладываемые по площади радиусом 2.5 от точки попадания. Эффекты сильные, но кратковременные |
| **Рыцарь смерти** | 20 | 1 ед./1 мин | Воин в полном доспехе, когда цель дальше 8 блоков берет в руки лук, иначе бежит в ближний бой с мечом. Высокая скорость, защита и сопротивление отдаче, 100 HP, малая регенерация. Выбирает аспект как некромаг. Может при смерти дропнуть предмет в руках или элемент брони |

---

## Лич и АрхиЛич

### Лич

**Лич** - могущественная нежить, создаваемая игроком при воскрешении нежитью (с 3 уровня благословений Искажения).

**Характеристики:**
- **HP**: 80
- **Прана**: 80 (со старта)
- **Броня**: Алмазная броня
- **Максимальный размер армии**: 7 существ

**При появлении:**
- Тратит энергию, равную своему полному запасу (80 праны), на призыв подконтрольной нежити **1-7 уровней**
- Призывает рядом с собой **зиккурат**, к которому привязан
  - Зиккурат подпитывает Лича и его войско
  - Лич защищает зиккурат

**Механики:**
- Приспешники стараются держаться рядом с Личем
- Может стрелять лучами из посоха, которые устанавливают цели для атаки всей нежити
- Каждый выстрел сопровождается **случайным эффектом** из 4 аспектов (поджог, отравление, ослабление, иссушение)
- Может впитывать энергию убитых существ в радиусе **30 блоков**

**Эволюция:**
При достижении **1.5× резерва энергии** (120 из 80), Лич превращается в **АрхиЛича**, тратя полный новый резерв (120 единиц) на призывы.

---

### АрхиЛич

**АрхиЛич** - эволюционировавшая форма Лича, значительно более мощная.

**Характеристики:**
- **HP**: 120
- **Прана**: 120 (зарядов)
- **Броня**: Незеритовая броня
- **Максимальный размер армии**: 15 существ
- **Уровни нежити**: 1-10
- **Радиус поглощения**: 40 блоков

**При появлении:**
- Создает **2 зиккурата** (если эволюционировал из Лича - только 1, поскольку первый уже был)

::: tip Совет
АрхиЛич - вершина некромантической мощи. Управляйте его армией из 15 существ и используйте 2 зиккурата для стабильного подвода праны.
:::

---

## Принципы работы нежити

### Общие правила

1. **Вся нежить не имеет регенерации**, если не указано обратное
2. Вся нежить **тратит прану** на существование
3. При **отсутствии праны** нежить получает урон и умирает
4. Нежить **подбирает экипировку** (некоторые типы)

### Управление армией

- **Привязка к зиккурату**: Нежить стоит на месте и получает прану от зиккурата
- **Следование за игроком**: Нежить следует за хозяином и получает прану от посоха
- **Переключение**: Выстрел в зиккурат привязывает, выстрел в нежить отвязывает

---

## Связанные страницы

- [Бог Искажения](/gods/7_distorta.md) - общая информация о боге
- [Прана](/gods/prana.md) - общая информация о пране
- [Заклинания Искажения](/guide/mechanics/distortion-spells.md) - руническая некромантия и другие заклинания
- [Обращение в нежить](/guide/mechanics/turn_undead.md) - механика превращения игрока в нежить
- [Паутина](/guide/mechanics/web.md) - зиккураты и управление нежитью
- [Система богов](/gods/index.md) - общая информация о системе богов
