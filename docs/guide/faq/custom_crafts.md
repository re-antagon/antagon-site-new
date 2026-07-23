---
description: "Кастомные рецепты крафта ванильных предметов на сервере Re:Antagon."
---

# Кастомные крафты ванильных предметов

На сервере добавлены дополнительные рецепты крафта для некоторых стандартных предметов, чтобы упростить их получение и сделать геймплей более удобным.

## Чёрный краситель

Чёрный краситель можно скрафтить из обычного или древесного угля.

<CraftingRecipe 
  input1="coal;charcoal" 
  output="black_dye" 
  output_count="1" 
  shapeless="true"
/>

## Мицелий

Для создания 2 блоков мицелия требуется 2 любых земляных блока, 1 красный гриб и 1 коричневый гриб.

<CraftingRecipe 
  input1="dirt;grass_block;podzol;coarse_dirt;mycelium;rooted_dirt;moss_block;mud;muddy_mangrove_roots" 
  input2="dirt;grass_block;podzol;coarse_dirt;mycelium;rooted_dirt;moss_block;mud;muddy_mangrove_roots"
  input3="red_mushroom" 
  input4="brown_mushroom" 
  output="mycelium" 
  output_count="2" 
  shapeless="true"
/>