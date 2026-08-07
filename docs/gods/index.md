---
pageClass: pg-gods-index
title: "Система богов (Gods System) | Re:Antagon"
description: "Как работают боги на сервере Антагон (Re:Antagon / Antagon Reborn). Узнайте о 8 Старших Богах, благословениях, проклятиях, алтарях и магии."
keywords: "antagon как работают боги, боги антагон, система богов, infinitum, mater, fungus, finis, bellum, cosm, distorta, ignos, антагон реборн боги"
---

<style>
.pg-gods-index img {
  display: inline-block !important;
  vertical-align: middle !important;
  width: 32px !important;
  height: auto !important;
  margin: 0 0px 0 0 !important;
}
.pg-gods-index .mcui-Crafting_Table img {
  width: 28px !important;
  height: 28px !important;
}

</style>

# Система богов (Gods System)

На сервере **Re:Antagon** (также известном как *Антагон Реборн*) присутствует уникальная система **8 Старших Богов**, каждое из которых представляет определенную концепцию и оказывает влияние на игроков через благословения и проклятия.

## Старшие Боги

| Русское имя | Иконка |
|:-----------|:------|
| [Постижение](/gods/1_infinitum) | ![Постижение](/assets/items/enchanted_book.png) |
| [Естество](/gods/2_mater) | ![Естество](/assets/items/golden_apple.png) |
| [Расширение](/gods/3_fungus) | ![Расширение](/assets/items/brown_mushroom.png) |
| [Окончание](/gods/4_finis) | ![Окончание](/assets/items/chain.png) |
| [Война](/gods/5_bellum) | ![Война](/assets/items/iron_sword.png) |
| [Космос](/gods/6_cosm) | ![Космос](/assets/items/nether_star.png) |
| [Искажение](/gods/7_distorta) | ![Искажение](/assets/items/bone.png) |
| [Хаос](/gods/8_ignos) | ![Хаос](/assets/items/sponge.png) |

::: info Важная информация
Введение системы Богов означает, что у игроков со старта **40 максимального здоровья** вместо 20, а также имеется [прана](/gods/prana.md).
:::

---

## Основные механики

### Репутация

Каждый Бог имеет **6 уровней благосклонности** и **6 уровней проклятий**. По умолчанию у каждого игрока репутация равна **0**, то есть игрок не получает ни благословений, ни проклятий от Бога.

#### Уровни репутации

| Тип | Уровень | Требуемая репутация |
|:----|:--------|:-------------------|
| Проклятие | 6 (Макс.) | -500 |
| Проклятие | 5 | -350 |
| Проклятие | 4 | -250 |
| Проклятие | 3 | -150 |
| Проклятие | 2 | -100 |
| Проклятие | 1 | -50 |
| Благословение | 1 | 50 |
| Благословение | 2 | 150 |
| Благословение | 3 | 300 |
| Благословение | 4 | 600 |
| Благословение | 5 | 1000 |
| Благословение | 6 (Макс.) | 1500 |

::: tip Примечание
Пока игрок поднимает репутацию в пределах 0-5 уровня в положительную сторону, ничего не происходит, кроме повышения репутации. Как только игрок переходит на 6 уровень репутации, она начинает постепенно снижаться до 5 уровня (1 единица раз в 5 минут, либо если избыточной репутации набрано очень много, то быстрее).
:::

::: warning Важно
Благословлений нельзя иметь больше, чем от от 1-го Бога сразу, а проклятья можно одновременно получить сразу от всех Богов.
:::

### Взаимодействие с алтарями

1. **Выбор Бога-покровителя**: Найдя алтарь, игрок может выбрать Бога своим покровителем (взаимодействие пустой рукой дважды)
2. **Повышение репутации**: Поднимать репутацию с Богом (взаимодействие непустой рукой, либо удар непустой рукой)
3. **Ограничение**: Невозможно выбрать покровителем иного Бога, пока не сброшен текущий (если он уже есть)

### Подношения

Богам можно давать через алтари множество ванильных предметов (**230+ разновидностей** на данный момент) для поднятия репутации. Каждый предмет имеет разную стоимость у разных Богов (в том числе отрицательные).

::: info Как работают подношения?
При попытке отдать предмет алтарю, если Бог этого алтаря ценит такое подношение, то вам напишут сколько надо принести предмета для минимального подношения. Также будет выведена информация о том, кому еще из Богов этот предмет может быть интересен.
:::

#### Счетчик подношений

- У игрока изначально **40 единиц** счета подношений с каждым из Богов
- Каждое подношение тратит **1 единицу** счетчика
- Счетчик восстанавливается **1 единицу раз в 1 минуту**
- Дополнительно прописана возможность совершать **крупные подношения** (×10 количество предметов за раз при трате ×5 очков подношений) — для этого надо **ударить по алтарю**, а не ПКМ

### Особенности тела

Начиная с **3 уровня благословений**, игрок выбирает себе одну из 2 особенностей тела, которые влияют на его геймплей (у некоторых Богов 3, либо 1 — в последнем случае выбор отсутствует).

- Особенности **не отключить**, пока игрок поклоняется Богу
- Можно **сменить** при помощи специального предмета
- Все особенности имеют **сильные и слабые стороны**, в том числе уязвимости

### Специальные предметы

#### Отречение от Бога

Существует предмет, который при использовании **снимает с игрока выбранного Бога-покровителя**:

- **Крафт**: Незеритовый слиток в центре + 8 ведер молока на верстаке
- **Эффект**: Сбрасывает 100% всей положительной накопленной у Бога репутации и снижает ее на 200
- **Последствие**: Ушедший игрок получает проклятие **-3 уровня** (либо ниже, если уже был на отрицательной репутации)

<div class="mcui mcui-Crafting_Table">
  <div class="mcui-input">
    <div class="mcui-row">
      <span class="invslot"><span class="invslot-item"><a href="/items/milk_bucket" class="image"><img src="/assets/items/milk_bucket.png" width="64" height="64"></a></span></span>
      <span class="invslot"><span class="invslot-item"><a href="/items/milk_bucket" class="image"><img src="/assets/items/milk_bucket.png" width="64" height="64"></a></span></span>
      <span class="invslot"><span class="invslot-item"><a href="/items/milk_bucket" class="image"><img src="/assets/items/milk_bucket.png" width="64" height="64"></a></span></span>
    </div>
    <div class="mcui-row">
      <span class="invslot"><span class="invslot-item"><a href="/items/milk_bucket" class="image"><img src="/assets/items/milk_bucket.png" width="64" height="64"></a></span></span>
      <span class="invslot"><span class="invslot-item"><a href="/items/netherite_ingot" class="image"><img src="/assets/items/netherite_ingot.png" width="64" height="64"></a></span></span>
      <span class="invslot"><span class="invslot-item"><a href="/items/milk_bucket" class="image"><img src="/assets/items/milk_bucket.png" width="64" height="64"></a></span></span>
    </div>
    <div class="mcui-row">
      <span class="invslot"><span class="invslot-item"><a href="/items/milk_bucket" class="image"><img src="/assets/items/milk_bucket.png" width="64" height="64"></a></span></span>
      <span class="invslot"><span class="invslot-item"><a href="/items/milk_bucket" class="image"><img src="/assets/items/milk_bucket.png" width="64" height="64"></a></span></span>
      <span class="invslot"><span class="invslot-item"><a href="/items/milk_bucket" class="image"><img src="/assets/items/milk_bucket.png" width="64" height="64"></a></span></span>
    </div>
  </div>
  <span class="mcui-arrow"></span>
  <span class="mcui-output">
    <span class="invslot"><span class="invslot-item"><a href="/items/echo_shard" class="image"><img src="/assets/items/echo_shard.png" width="64" height="64"></a></span></span>
  </span>
  <div class="mcui-icons"><span class="mcui-shaped"></span></div>
</div>

#### Перевыбор тела

Существует предмет, который при использовании **вызывает меню выбора тела вновь** (если у текущего Бога >1 тела):

- **Крафт**: 4 алмаза + 4 изумруда + 1 золотое яблоко (в любом порядке) на верстаке

<div class="mcui mcui-Crafting_Table">
  <div class="mcui-input">
    <div class="mcui-row">
      <span class="invslot"><span class="invslot-item"><a href="/items/diamond" class="image"><img src="/assets/items/diamond.png" width="64" height="64"></a></span></span>
      <span class="invslot"><span class="invslot-item"><a href="/items/diamond" class="image"><img src="/assets/items/diamond.png" width="64" height="64"></a></span></span>
      <span class="invslot"><span class="invslot-item"><a href="/items/diamond" class="image"><img src="/assets/items/diamond.png" width="64" height="64"></a></span></span>
    </div>
    <div class="mcui-row">
      <span class="invslot"><span class="invslot-item"><a href="/items/diamond" class="image"><img src="/assets/items/diamond.png" width="64" height="64"></a></span></span>
      <span class="invslot"><span class="invslot-item"><a href="/items/emerald" class="image"><img src="/assets/items/emerald.png" width="64" height="64"></a></span></span>
      <span class="invslot"><span class="invslot-item"><a href="/items/emerald" class="image"><img src="/assets/items/emerald.png" width="64" height="64"></a></span></span>
    </div>
    <div class="mcui-row">
      <span class="invslot"><span class="invslot-item"><a href="/items/emerald" class="image"><img src="/assets/items/emerald.png" width="64" height="64"></a></span></span>
      <span class="invslot"><span class="invslot-item"><a href="/items/emerald" class="image"><img src="/assets/items/emerald.png" width="64" height="64"></a></span></span>
      <span class="invslot"><span class="invslot-item"><a href="/items/golden_apple" class="image"><img src="/assets/items/golden_apple.png" width="64" height="64"></a></span></span>
    </div>
  </div>
  <span class="mcui-arrow"></span>
  <span class="mcui-output">
    <span class="invslot"><span class="invslot-item"><a href="/items/echo_shard" class="image"><img src="/assets/items/echo_shard.png" width="64" height="64"></a></span></span>
  </span>
  <div class="mcui-icons"><span class="mcui-shapeless"></span></div>
</div>

### Ослабление эффектов

Эффекты Богов на других игроков можно тем или иным способом **ослабить**.