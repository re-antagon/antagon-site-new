---
pageClass: pg-guide-mechanics-atheism
description: "Послесловие для атеистов на сервере Re:Antagon. Узнайте о системе блокираторов Богов: статичных и динамическом, их характеристиках, крафте и ограничениях."
---

<style>
.pg-guide-mechanics-atheism img {
  display: inline-block !important;
  vertical-align: middle !important;
  width: 32px !important;
  height: auto !important;
  margin: 0 4px 0 0 !important;
}
.pg-guide-mechanics-atheism .mcui-Crafting_Table img {
  width: 28px !important;
  height: 28px !important;
}

</style>

# Послесловие для атеистов

Некоторые игроки не хотят пользоваться бафами от Богов, но при этом испытывают затруднения: Боги дают последователям преимущество, без которого играть «не так круто». Специально для таких игроков придумана **система блокираторов** - устройств, ослабляющих эффекты Богов у игроков вокруг.

::: info Важно
Блокираторы **не могут снижать эффект ниже 0**, а значит - **не вызывают проклятия**. Они лишь сводят бонусы в ноль или ослабляют плюсы.
:::

---

## Статичные блокираторы

Предмет **устанавливается в мире** и пассивно снижает способности последователей Богов в радиусе вокруг себя на определенную величину. Блокираторы действуют на **абсолютно всех вокруг**.

- **Включение/выключение**: по блокиратору можно кликнуть **ПКМ**, чтобы включить или отключить его.
- **Установка и поломка**: и установка, и разрушение блокиратора занимают **10 секунд**.

Существует **4 варианта** статичных блокираторов:

| Вариант | Радиус | Снижение | Прочность | Реген |
|:--------|:------:|:--------:|:---------:|:-----:|
| Базовый | 20 блоков | 1 | 100 | 1 HP / 4с |
| Усиленный | 30 блоков | 2 | 200 | 1 HP / 10с |
| Продвинутый | 50 блоков | 3 | 300 | 1 HP / 7с |
| Максимальный | 80 блоков | 4 | 500 | 1 HP / 4с |

### Крафт

Все блокираторы крафтятся **в любой форме** (без учета расположения ингредиентов):

- **Базовый**: 1 ![Кристалл Энда](/assets/items/end_crystal.png) кристалл Энда + 3 ![Громоотвод](/assets/items/lightning_rod.png) громоотвода
<div class="mcui mcui-Crafting_Table">
  <div class="mcui-input">
    <div class="mcui-row">
      <span class="invslot"><span class="invslot-item"><a href="/items/end_crystal" class="image"><img src="/assets/items/end_crystal.png" width="64" height="64"></a></span></span>
      <span class="invslot"><span class="invslot-item"><a href="/items/lightning_rod" class="image"><img src="/assets/items/lightning_rod.png" width="64" height="64"></a></span></span>
      <span class="invslot"><span class="invslot-item"><a href="/items/lightning_rod" class="image"><img src="/assets/items/lightning_rod.png" width="64" height="64"></a></span></span>
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
    <span class="invslot"><span class="invslot-item"><a href="/items/lodestone" class="image"><img src="/assets/items/lodestone.png" width="64" height="64"></a></span></span>
  </span>
  <div class="mcui-icons"><span class="mcui-shapeless"></span></div>
</div>

- **Усиленный**: 2 базовых блокиратора + 3 ![Громоотвод](/assets/items/lightning_rod.png) громоотвода + 3 ![Изумруд](/assets/items/emerald.png) изумруда
<div class="mcui mcui-Crafting_Table">
  <div class="mcui-input">
    <div class="mcui-row">
      <span class="invslot"><span class="invslot-item"><a href="/items/nether_brick" class="image"><img src="/assets/items/nether_brick.png" width="64" height="64"></a></span></span>
      <span class="invslot"><span class="invslot-item"><a href="/items/nether_brick" class="image"><img src="/assets/items/nether_brick.png" width="64" height="64"></a></span></span>
      <span class="invslot"><span class="invslot-item"><a href="/items/lightning_rod" class="image"><img src="/assets/items/lightning_rod.png" width="64" height="64"></a></span></span>
    </div>
    <div class="mcui-row">
      <span class="invslot"><span class="invslot-item"><a href="/items/lightning_rod" class="image"><img src="/assets/items/lightning_rod.png" width="64" height="64"></a></span></span>
      <span class="invslot"><span class="invslot-item"><a href="/items/lightning_rod" class="image"><img src="/assets/items/lightning_rod.png" width="64" height="64"></a></span></span>
      <span class="invslot"><span class="invslot-item"><a href="/items/emerald" class="image"><img src="/assets/items/emerald.png" width="64" height="64"></a></span></span>
    </div>
    <div class="mcui-row">
      <span class="invslot"><span class="invslot-item"><a href="/items/emerald" class="image"><img src="/assets/items/emerald.png" width="64" height="64"></a></span></span>
      <span class="invslot"><span class="invslot-item"><a href="/items/emerald" class="image"><img src="/assets/items/emerald.png" width="64" height="64"></a></span></span>
      <span class="invslot"></span>
    </div>
  </div>
  <span class="mcui-arrow"></span>
  <span class="mcui-output">
    <span class="invslot"><span class="invslot-item"><a href="/items/lodestone" class="image"><img src="/assets/items/lodestone.png" width="64" height="64"></a></span></span>
  </span>
  <div class="mcui-icons"><span class="mcui-shapeless"></span></div>
</div>

- **Продвинутый**: 2 усиленных блокиратора + 3 ![Громоотвод](/assets/items/lightning_rod.png) громоотвода + 2 ![Алмаз](/assets/items/diamond.png) алмаза
<div class="mcui mcui-Crafting_Table">
  <div class="mcui-input">
    <div class="mcui-row">
      <span class="invslot"><span class="invslot-item"><a href="/items/nether_brick" class="image"><img src="/assets/items/nether_brick.png" width="64" height="64"></a></span></span>
      <span class="invslot"><span class="invslot-item"><a href="/items/nether_brick" class="image"><img src="/assets/items/nether_brick.png" width="64" height="64"></a></span></span>
      <span class="invslot"><span class="invslot-item"><a href="/items/lightning_rod" class="image"><img src="/assets/items/lightning_rod.png" width="64" height="64"></a></span></span>
    </div>
    <div class="mcui-row">
      <span class="invslot"><span class="invslot-item"><a href="/items/lightning_rod" class="image"><img src="/assets/items/lightning_rod.png" width="64" height="64"></a></span></span>
      <span class="invslot"><span class="invslot-item"><a href="/items/lightning_rod" class="image"><img src="/assets/items/lightning_rod.png" width="64" height="64"></a></span></span>
      <span class="invslot"><span class="invslot-item"><a href="/items/diamond" class="image"><img src="/assets/items/diamond.png" width="64" height="64"></a></span></span>
    </div>
    <div class="mcui-row">
      <span class="invslot"><span class="invslot-item"><a href="/items/diamond" class="image"><img src="/assets/items/diamond.png" width="64" height="64"></a></span></span>
      <span class="invslot"></span>
      <span class="invslot"></span>
    </div>
  </div>
  <span class="mcui-arrow"></span>
  <span class="mcui-output">
    <span class="invslot"><span class="invslot-item"><a href="/items/lodestone" class="image"><img src="/assets/items/lodestone.png" width="64" height="64"></a></span></span>
  </span>
  <div class="mcui-icons"><span class="mcui-shapeless"></span></div>
</div>

- **Максимальный**: 2 продвинутых блокиратора + 3 ![Громоотвод](/assets/items/lightning_rod.png) громоотвода + 1 ![Незеритовый слиток](/assets/items/netherite_ingot.png) незеритовый слиток
<div class="mcui mcui-Crafting_Table">
  <div class="mcui-input">
    <div class="mcui-row">
      <span class="invslot"><span class="invslot-item"><a href="/items/nether_brick" class="image"><img src="/assets/items/nether_brick.png" width="64" height="64"></a></span></span>
      <span class="invslot"><span class="invslot-item"><a href="/items/nether_brick" class="image"><img src="/assets/items/nether_brick.png" width="64" height="64"></a></span></span>
      <span class="invslot"><span class="invslot-item"><a href="/items/lightning_rod" class="image"><img src="/assets/items/lightning_rod.png" width="64" height="64"></a></span></span>
    </div>
    <div class="mcui-row">
      <span class="invslot"><span class="invslot-item"><a href="/items/lightning_rod" class="image"><img src="/assets/items/lightning_rod.png" width="64" height="64"></a></span></span>
      <span class="invslot"><span class="invslot-item"><a href="/items/lightning_rod" class="image"><img src="/assets/items/lightning_rod.png" width="64" height="64"></a></span></span>
      <span class="invslot"><span class="invslot-item"><a href="/items/netherite_ingot" class="image"><img src="/assets/items/netherite_ingot.png" width="64" height="64"></a></span></span>
    </div>
    <div class="mcui-row">
      <span class="invslot"></span>
      <span class="invslot"></span>
      <span class="invslot"></span>
    </div>
  </div>
  <span class="mcui-arrow"></span>
  <span class="mcui-output">
    <span class="invslot"><span class="invslot-item"><a href="/items/lodestone" class="image"><img src="/assets/items/lodestone.png" width="64" height="64"></a></span></span>
  </span>
  <div class="mcui-icons"><span class="mcui-shapeless"></span></div>
</div>


::: tip Примечание
Каждый следующий уровень блокиратора крафтится из **двух блокираторов предыдущего уровня** плюс громоотводы и ценный ресурс. Таким образом блокираторы «прокачиваются» через крафт, а не скармливание.
:::

---

## Динамический блокиратор

Предмет **носится в инвентаре**. Пока он лежит в инвентаре:

- **Полностью блокирует (до 0)** все способности держащего его игрока
- **Пассивно снижает** эффект благословений на **2** у всех игроков в радиусе **8 блоков** от держателя

**Крафт**: 1 максимальный статичный блокиратор сверху по середине + 2 ![палки](/assets/items/stick.png) палки под ним
<div class="mcui mcui-Crafting_Table">
  <div class="mcui-input">
    <div class="mcui-row">
      <span class="invslot"></span>
      <span class="invslot"><span class="invslot-item"><a href="/items/nether_brick" class="image"><img src="/assets/items/nether_brick.png" width="64" height="64"></a></span></span>
      <span class="invslot"></span>
    </div>
    <div class="mcui-row">
      <span class="invslot"></span>
      <span class="invslot"><span class="invslot-item"><a href="/items/stick" class="image"><img src="/assets/items/stick.png" width="64" height="64"></a></span></span>
      <span class="invslot"></span>
    </div>
    <div class="mcui-row">
      <span class="invslot"></span>
      <span class="invslot"><span class="invslot-item"><a href="/items/stick" class="image"><img src="/assets/items/stick.png" width="64" height="64"></a></span></span>
      <span class="invslot"></span>
    </div>
  </div>
  <span class="mcui-arrow"></span>
  <span class="mcui-output">
    <span class="invslot"><span class="invslot-item"><a href="/items/iron_shovel" class="image"><img src="/assets/items/iron_shovel.png" width="64" height="64"></a></span></span>
  </span>
  <div class="mcui-icons"><span class="mcui-shaped"></span></div>
</div>

---

## Ограничения установки

- **Нельзя установить блокиратор**, если в радиусе **60 блоков** от вас уже стоит другой блокиратор.

::: warning Важно
Перед установкой убедитесь, что поблизости (в радиусе 60 блоков) нет чужих блокираторов - иначе установка будет заблокирована.
:::

---

## Ограничения блокираторов

Блокираторы имеют ряд важных ограничений:

- **Не снижают ниже 0** - не вызывают проклятия, только сводят плюсы в ноль или ослабляют их
- **Не выключают эффекты тел** - влияют только на бонусы от пассивных эффектов покровителей, но не на эффекты имеющихся у игроков **особенностей тела**
- **Не действуют на прану** - не влияют на эффекты от недостатка или избытка праны (это особенности самих организмов игроков, а не привнесенное Богами извне)

::: warning Важно
Если вы рассчитываете нейтрализовать блокиратором эффекты своего тела или последствия нехватки праны - это не сработает. Блокираторы затрагивают только благословения покровителей.
:::

---

## Связанные страницы

- [Система богов](/gods/index) - благословения, проклятия и особенности тел
- [Прана](/gods/prana) - ключевая механика (на которую блокираторы не влияют)
- [Обзор механик](/guide/mechanics/) - все уникальные механики сервера