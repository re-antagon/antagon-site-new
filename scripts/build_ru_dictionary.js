const fs = require('fs');
const path = require('path');

const itemsDir = path.join(__dirname, '../docs/assets/items');
const files = fs.readdirSync(itemsDir).filter(f => f.endsWith('.png')).map(f => f.replace('.png', ''));

const dict = {
  // Common blocks & items
  air: 'Воздух',
  apple: 'Яблоко',
  arrow: 'Стрела',
  baked_potato: 'Печёный картофель',
  bamboo: 'Бамбук',
  barrel: 'Бочка',
  barrier: 'Барьер',
  basalt: 'Базальт',
  beacon: 'Маяк',
  bedrock: 'Бедрок',
  bee_nest: 'Пчелиное гнездо',
  beef: 'Сырая говядина',
  beehive: 'Улей',
  beetroot: 'Свёкла',
  beetroot_seeds: 'Семена свёклы',
  beetroot_soup: 'Свекольный суп',
  bell: 'Колокол',
  blaze_powder: 'Огненный порошок',
  blaze_rod: 'Стержень ифрита',
  bleeding: 'Кровотечение',
  blindness: 'Слепота',
  bone: 'Кость',
  bone_block: 'Костяной блок',
  bone_meal: 'Костная мука',
  book: 'Книга',
  bookshelf: 'Книжная полка',
  bow: 'Лук',
  bowl: 'Миска',
  bread: 'Хлеб',
  breeze_rod: 'Стержень вихря',
  brewing_stand: 'Варочная стойка',
  brick: 'Кирпич',
  bricks: 'Кирпичи',
  brush: 'Кисть',
  bucket: 'Ведро',
  bundle: 'Мешок',
  cactus: 'Кактус',
  cake: 'Торт',
  calcite: 'Кальцит',
  campfire: 'Костёр',
  candle: 'Свеча',
  carrot: 'Морковь',
  carrot_on_a_stick: 'Удочка с морковью',
  cartography_table: 'Стол картографа',
  carved_pumpkin: 'Вырезанная тыква',
  cauldron: 'Котел',
  chain: 'Цепь',
  charcoal: 'Древесный уголь',
  chest: 'Сундук',
  chest_minecart: 'Вагонетка с сундуком',
  chicken: 'Сырая курятина',
  chiseled_bookshelf: 'Резная книжная полка',
  chorus_flower: 'Цветок хоруса',
  chorus_fruit: 'Плод хоруса',
  chorus_plant: 'Растение хоруса',
  clay: 'Глина',
  clay_ball: 'Комок глины',
  clock: 'Часы',
  coal: 'Уголь',
  coal_block: 'Угольный блок',
  coal_ore: 'Угольная руда',
  cobblestone: 'Булыжник',
  cobweb: 'Паутина',
  cocoa_beans: 'Какао-бобы',
  cod: 'Сырая треска',
  cod_bucket: 'Ведро с треской',
  command_block: 'Командный блок',
  comparator: 'Редстоуновый компаратор',
  compass: 'Компас',
  composter: 'Компостер',
  conduit: 'Морской источник',
  cooked_beef: 'Жареная говядина',
  cooked_chicken: 'Жареная курятина',
  cooked_cod: 'Жареная треска',
  cooked_mutton: 'Жареная баранина',
  cooked_porkchop: 'Жареная свинина',
  cooked_rabbit: 'Жареная крольчатина',
  cooked_salmon: 'Жареный лосось',
  cookie: 'Печенье',
  copper_block: 'Медный блок',
  copper_bulb: 'Медная лампа',
  copper_door: 'Медная дверь',
  copper_grate: 'Медная решётка',
  copper_ingot: 'Медный слиток',
  copper_ore: 'Медная руда',
  copper_trapdoor: 'Медный люк',
  cornflower: 'Василёк',
  crafting_table: 'Верстак',
  creeper_head: 'Голова крипера',
  crossbow: 'Арбалет',
  crying_obsidian: 'Плачущий обсидиан',
  dandelion: 'Одуванчик',
  daylight_detector: 'Детектор дневного света',
  dead_bush: 'Мёртвый куст',
  debug_stick: 'Отладочная палочка',
  decorated_pot: 'Украшенный глиняный кувшин',
  deepslate: 'Глубинный сланец',
  detector_rail: 'Рельсы с датчиком',
  diamond: 'Алмаз',
  diamond_axe: 'Алмазный топор',
  diamond_block: 'Алмазный блок',
  diamond_boots: 'Алмазные ботинки',
  diamond_chestplate: 'Алмазный нагрудник',
  diamond_helmet: 'Алмазный шлем',
  diamond_hoe: 'Алмазная мотыга',
  diamond_horse_armor: 'Алмазная конская броня',
  diamond_leggings: 'Алмазные поножи',
  diamond_ore: 'Алмазная руда',
  diamond_pickaxe: 'Алмазная кирка',
  diamond_shovel: 'Алмазная лопата',
  diamond_sword: 'Алмазный меч',
  diorite: 'Диорит',
  dirt: 'Земля',
  coarse_dirt: 'Каменистая земля',
  rooted_dirt: 'Укоренённая земля',
  dirt_path: 'Тропинка',
  dispenser: 'Раздатчик',
  dragon_breath: 'Драконье дыхание',
  dragon_egg: 'Яйцо дракона',
  dragon_head: 'Голова дракона',
  dried_kelp: 'Сушёная ламинария',
  dried_kelp_block: 'Блок сушёной ламинарии',
  dripstone_block: 'Капельниковый блок',
  dropper: 'Выбрасыватель',
  echo_shard: 'Осколок эха',
  egg: 'Яйцо',
  elytra: 'Элитры',
  emerald: 'Изумруд',
  emerald_block: 'Изумрудный блок',
  emerald_ore: 'Изумрудная руда',
  enchanted_book: 'Чародейская книга',
  enchanted_golden_apple: 'Зачарованное золотое яблоко',
  enchanting_table: 'Чародейский стол',
  end_crystal: 'Кристалл Края',
  end_portal_frame: 'Рамка портала в Край',
  end_rod: 'Стержень Края',
  end_stone: 'Эндер-няк',
  ender_chest: 'Эндер-сундук',
  ender_eye: 'Око Края',
  ender_pearl: 'Жемчуг Края',
  experience_bottle: 'Пузырёк опыта',
  farmland: 'Пашня',
  feather: 'Перо',
  fermented_spider_eye: 'Маринованный паучий глаз',
  fern: 'Папоротник',
  fire_charge: 'Огненный шар',
  firework_rocket: 'Фейерверк',
  firework_star: 'Пиротехническая звезда',
  fishing_rod: 'Удочка',
  fletching_table: 'Стол лучника',
  flint: 'Кремень',
  flint_and_steel: 'Огниво',
  flower_pot: 'Цветочный горшок',
  furnace: 'Печь',
  furnace_minecart: 'Вагонетка с печью',
  ghast_tear: 'Слеза гаста',
  gilded_blackstone: 'Позолоченный чернокамень',
  glass: 'Стекло',
  glass_bottle: 'Пузырёк',
  glass_pane: 'Стеклянная панель',
  glistering_melon_slice: 'Сверкающий ломтик арбуза',
  glow_berries: 'Светящиеся ягоды',
  glow_ink_sac: 'Светящийся чернильный мешок',
  glow_item_frame: 'Светящаяся рамка',
  glowing: 'Свечение',
  glowstone: 'Светокамень',
  glowstone_dust: 'Светопыль',
  goat_horn: 'Козий рог',
  gold_block: 'Золотой блок',
  gold_ingot: 'Золотой слиток',
  gold_nugget: 'Золотой самородок',
  gold_ore: 'Золотая руда',
  golden_apple: 'Золотое яблоко',
  golden_axe: 'Золотой топор',
  golden_boots: 'Золотые ботинки',
  golden_carrot: 'Золотая морковь',
  golden_chestplate: 'Золотой нагрудник',
  golden_helmet: 'Золотой шлем',
  golden_hoe: 'Золотая мотыга',
  golden_horse_armor: 'Золотая конская броня',
  golden_leggings: 'Золотые поножи',
  golden_pickaxe: 'Золотая кирка',
  golden_shovel: 'Золотая лопата',
  golden_sword: 'Золотой меч',
  granite: 'Гранит',
  grass: 'Трава',
  grass_block: 'Блок травы',
  gravel: 'Гравий',
  grindstone: 'Точило',
  gunpowder: 'Порох',
  hanging_roots: 'Свисающие корни',
  hay_block: 'Сноп сена',
  heart_of_the_sea: 'Сердце моря',
  heavy_core: 'Тяжёлое ядро',
  honey_block: 'Блок мёда',
  honey_bottle: 'Бутылочка мёда',
  honeycomb: 'Пчелиные соты',
  honeycomb_block: 'Блок пчелиных сот',
  hopper: 'Воронка',
  hopper_minecart: 'Вагонетка с воронкой',
  ice: 'Лёд',
  ink_sac: 'Чернильный мешок',
  iron_axe: 'Железный топор',
  iron_bars: 'Железная решётка',
  iron_block: 'Железный блок',
  iron_boots: 'Железные ботинки',
  iron_chestplate: 'Железный нагрудник',
  iron_door: 'Железная дверь',
  iron_helmet: 'Железный шлем',
  iron_hoe: 'Железная мотыга',
  iron_horse_armor: 'Железная конская броня',
  iron_ingot: 'Железный слиток',
  iron_leggings: 'Железные поножи',
  iron_nugget: 'Железный самородок',
  iron_ore: 'Железная руда',
  iron_pickaxe: 'Железная кирка',
  iron_shovel: 'Железная лопата',
  iron_sword: 'Железный меч',
  iron_trapdoor: 'Железный люк',
  item_frame: 'Рамка',
  jack_o_lantern: 'Светильник Джека',
  jukebox: 'Проигрыватель',
  kelp: 'Ламинария',
  ladder: 'Лестница',
  lantern: 'Фонарь',
  lapis_block: 'Лазуритовый блок',
  lapis_lazuli: 'Лазурит',
  lapis_ore: 'Лазуритовая руда',
  lead: 'Повод',
  leather: 'Кожа',
  leather_boots: 'Кожаные ботинки',
  leather_chestplate: 'Кожаная куртка',
  leather_helmet: 'Кожаный шлем',
  leather_horse_armor: 'Кожаная конская броня',
  leather_leggings: 'Кожаные штаны',
  lectern: 'Кафедра',
  lever: 'Рычаг',
  light: 'Свет',
  lightning_rod: 'Громоотвод',
  lily_pad: 'Кувшинка',
  lodestone: 'Магнетит',
  loom: 'Ткацкий станок',
  mace: 'Булава',
  magma_block: 'Блок магмы',
  magma_cream: 'Сгусток магмы',
  mangrove_roots: 'Корни мангрового дерева',
  map: 'Карта',
  melon: 'Арбуз',
  melon_seeds: 'Семена арбуза',
  melon_slice: 'Ломтик арбуза',
  milk_bucket: 'Ведро молока',
  minecart: 'Вагонетка',
  moss_block: 'Блок мха',
  moss_carpet: 'Ковёр из мха',
  mossy_cobblestone: 'Замшелый булыжник',
  mud: 'Грязь',
  mud_bricks: 'Глиняные кирпичи',
  mushroom_stem: 'Ножка гриба',
  mushroom_stew: 'Тушёные грибы',
  mutton: 'Сырая баранина',
  mycelium: 'Мицелий',
  name_tag: 'Бирка',
  nautilus_shell: 'Раковина наутилуса',
  nether_brick: 'Незерский кирпич',
  nether_bricks: 'Незерские кирпичи',
  nether_gold_ore: 'Незерская золотая руда',
  nether_quartz_ore: 'Кварцевая руда',
  nether_star: 'Звезда Нижнего мира',
  nether_wart: 'Адский нарост',
  nether_wart_block: 'Блок адского нароста',
  netherite_axe: 'Незеритовый топор',
  netherite_block: 'Незеритовый блок',
  netherite_boots: 'Незеритовые ботинки',
  netherite_chestplate: 'Незеритовый нагрудник',
  netherite_helmet: 'Незеритовый шлем',
  netherite_hoe: 'Незеритовая мотыга',
  netherite_ingot: 'Незеритовый слиток',
  netherite_leggings: 'Незеритовые поножи',
  netherite_pickaxe: 'Незеритовая кирка',
  netherite_scrap: 'Незеритовый обломок',
  netherite_shovel: 'Незеритовая лопата',
  netherite_sword: 'Незеритовый меч',
  netherrack: 'Незерракт',
  note_block: 'Нотный блок',
  observer: 'Наблюдатель',
  obsidian: 'Обсидиан',
  packed_ice: 'Плотный лёд',
  packed_mud: 'Утрамбованная грязь',
  painting: 'Картина',
  paper: 'Бумага',
  phantom_membrane: 'Мембрана фантома',
  piglin_head: 'Голова пиглина',
  pink_petals: 'Розовые лепестки',
  piston: 'Поршень',
  player_head: 'Голова игрока',
  podzol: 'Подзол',
  pointed_dripstone: 'Капельник',
  poisonous_potato: 'Ядовитый картофель',
  polished_andesite: 'Полированный андезит',
  polished_basalt: 'Полированный базальт',
  polished_blackstone: 'Полированный чернокамень',
  polished_deepslate: 'Полированный сланец',
  polished_diorite: 'Полированный диорит',
  polished_granite: 'Полированный гранит',
  popped_chorus_fruit: 'Прожаренный плод хоруса',
  porkchop: 'Сырая свинина',
  potato: 'Картофель',
  potion: 'Зелье',
  powder_snow_bucket: 'Ведро рыхлого снега',
  powered_rail: 'Активирующие рельсы',
  prismarine: 'Призмарин',
  prismarine_crystals: 'Кристалл призмарина',
  prismarine_shard: 'Осколок призмарина',
  pufferfish: 'Иглобрюх',
  pufferfish_bucket: 'Ведро с иглобрюхом',
  pumpkin: 'Тыква',
  pumpkin_pie: 'Тыквенный пирог',
  pumpkin_seeds: 'Тыквенные семечки',
  purple_shulker_box: 'Фиолетовый шалкеровый ящик',
  purpur_block: 'Пурпурный блок',
  purpur_pillar: 'Пурпурный пилон',
  quartz: 'Кварц Нижнего мира',
  quartz_block: 'Кварцевый блок',
  quartz_bricks: 'Кварцевые кирпичи',
  quartz_pillar: 'Кварцевая колонна',
  rabbit: 'Сырая крольчатина',
  rabbit_foot: 'Кроличья лапка',
  rabbit_hide: 'Кроличья шкура',
  rabbit_stew: 'Кроличий тушёнка',
  rail: 'Рельсы',
  raw_copper: 'Необработанная медь',
  raw_copper_block: 'Блок необработанной меди',
  raw_gold: 'Необработанное золото',
  raw_gold_block: 'Блок необработанного золота',
  raw_iron: 'Необработанное железо',
  raw_iron_block: 'Блок необработанного железа',
  recovery_compass: 'Компас возврата',
  red_mushroom: 'Красный гриб',
  red_mushroom_block: 'Блок красного гриба',
  red_sand: 'Красный песок',
  red_sandstone: 'Красный песчаник',
  redstone: 'Редстоуновая пыль',
  redstone_block: 'Редстоуновый блок',
  redstone_lamp: 'Редстоуновый фонарь',
  redstone_ore: 'Редстоуновая руда',
  redstone_torch: 'Редстоуновый факел',
  repeater: 'Редстоуновый повторитель',
  respawn_anchor: 'Якорь возрождения',
  rotten_flesh: 'Гнилая плоть',
  saddle: 'Седло',
  salmon: 'Сырой лосось',
  salmon_bucket: 'Ведро с лососем',
  sand: 'Песок',
  sandstone: 'Песчаник',
  scaffolding: 'Подмостки',
  sculk: 'Скалк',
  sculk_catalyst: 'Скалковый катализатор',
  sculk_sensor: 'Скалковый сенсор',
  sculk_shrieker: 'Скалковый крикун',
  sculk_vein: 'Скалковая жила',
  scute: 'Щиток',
  sea_lantern: 'Морской фонарь',
  sea_pickle: 'Морской огурец',
  seagrass: 'Морская трава',
  shears: 'Ножницы',
  shield: 'Щит',
  shulker_box: 'Шалкеровый ящик',
  shulker_shell: 'Панцирь шалкера',
  slime_ball: 'Сгусток слизи',
  slime_block: 'Блок слизи',
  smithing_table: 'Кузнечный стол',
  smoker: 'Коптильня',
  smooth_basalt: 'Гладкий базальт',
  smooth_quartz: 'Гладкий кварцевый блок',
  smooth_red_sandstone: 'Гладкий красный песчаник',
  smooth_sandstone: 'Гладкий песчаник',
  smooth_stone: 'Гладкий камень',
  snow: 'Снег',
  snow_block: 'Блок снега',
  snowball: 'Снежок',
  soul_campfire: 'Костёр душ',
  soul_lantern: 'Фонарь душ',
  soul_sand: 'Песок душ',
  soul_soil: 'Почва душ',
  soul_torch: 'Факел душ',
  spawn_egg: 'Яйцо призыва',
  spectral_arrow: 'Спектральная стрела',
  spider_eye: 'Паучий глаз',
  sponge: 'Губка',
  spore_blossom: 'Спороцвет',
  spyglass: 'Подзорная труба',
  stick: 'Палка',
  sticky_piston: 'Липкий поршень',
  stone: 'Камень',
  stone_axe: 'Каменный топор',
  stone_brick_slab: 'Плита из каменного кирпича',
  stone_bricks: 'Каменные кирпичи',
  stone_button: 'Каменная кнопка',
  stone_hoe: 'Каменная мотыга',
  stone_pickaxe: 'Каменная кирка',
  stone_pressure_plate: 'Каменная нажимная плита',
  stone_shovel: 'Каменная лопата',
  stone_sword: 'Каменный меч',
  stonecutter: 'Камнерез',
  string: 'Нить',
  stripped_oak_log: 'Обтёсанное дубовое бревно',
  stripped_oak_wood: 'Обтёсанная дубовая древесина',
  structure_block: 'Блок структуры',
  sugar: 'Сахар',
  sugar_cane: 'Сахарный тростник',
  sunflower: 'Подсолнух',
  suspicious_stew: 'Подозрительное рагу',
  sweet_berries: 'Сладкие ягоды',
  target: 'Мишень',
  tnt: 'Динамит',
  tnt_minecart: 'Вагонетка с динамитом',
  torch: 'Факел',
  totem_of_undying: 'Тотем бессмертия',
  trident: 'Трезубец',
  tripwire_hook: 'Натяжной датчик',
  tropical_fish: 'Тропическая рыба',
  tropical_fish_bucket: 'Ведро с тропической рыбой',
  tuff: 'Туф',
  turtle_helmet: 'Черепаший панцирь',
  twisting_vines: 'Вьющиеся лианы',
  vault: 'Хранилище',
  verdant_froglight: 'Зеленоватый квакарь',
  vine: 'Лианы',
  warped_door: 'Искажённая дверь',
  warped_fungus: 'Искажённый гриб',
  warped_fungus_on_a_stick: 'Искажённый гриб на удочке',
  warped_hyphae: 'Искажённые гифы',
  warped_nylium: 'Искажённый нилий',
  warped_planks: 'Искажённые доски',
  warped_roots: 'Искажённые корни',
  warped_slab: 'Искажённая плита',
  warped_stairs: 'Искажённые ступеньки',
  warped_stem: 'Искажённый стебель',
  warped_trapdoor: 'Искажённый люк',
  water_bucket: 'Ведро воды',
  waxed_copper_block: 'Вощёный медный блок',
  waxed_cut_copper: 'Вощёный резный медный блок',
  weathered_copper: 'Состаренная медь',
  web: 'Паутина',
  weeping_vines: 'Плачущие лианы',
  wet_sponge: 'Мокрая губка',
  wheat: 'Пшеница',
  wheat_seeds: 'Семена пшеницы',
  white_banner: 'Белый флаг',
  white_bed: 'Белая кровать',
  white_candle: 'Белая свеча',
  white_carpet: 'Белый ковёр',
  white_concrete: 'Белый бетон',
  white_dye: 'Белый краситель',
  white_stained_glass: 'Белое стекло',
  white_wool: 'Белая шерсть',
  wind_charge: 'Заряд ветра',
  wither_rose: 'Роза Иссушителя',
  wither_skeleton_skull: 'Череп скелета-иссушителя',
  wooden_axe: 'Деревянный топор',
  wooden_hoe: 'Деревянная мотыга',
  wooden_pickaxe: 'Деревянная кирка',
  wooden_shovel: 'Деревянная лопата',
  wooden_sword: 'Деревянный меч',
  written_book: 'Завершённая книга',
  yellow_banner: 'Жёлтый флаг',
  yellow_bed: 'Жёлтая кровать',
  yellow_candle: 'Жёлтая свеча',
  yellow_carpet: 'Жёлтый ковёр',
  yellow_concrete: 'Жёлтый бетон',
  yellow_dye: 'Жёлтый краситель',
  yellow_stained_glass: 'Жёлтое стекло',
  yellow_wool: 'Жёлтая шерсть'
};

const colorAdjM = { black: 'Чёрный', blue: 'Синий', brown: 'Коричневый', cyan: 'Бирюзовый', gray: 'Серый', green: 'Зелёный', light_blue: 'Голубой', light_gray: 'Светло-серый', lime: 'Лаймовый', magenta: 'Пурпурный', orange: 'Оранжевый', pink: 'Розовый', purple: 'Фиолетовый', red: 'Красный', white: 'Белый', yellow: 'Жёлтый' };
const colorAdjF = { black: 'Чёрная', blue: 'Синяя', brown: 'Коричневая', cyan: 'Бирюзовая', gray: 'Серая', green: 'Зелёная', light_blue: 'Голубая', light_gray: 'Светло-серая', lime: 'Лаймовая', magenta: 'Пурпурная', orange: 'Оранжевая', pink: 'Розовая', purple: 'Фиолетовая', red: 'Красная', white: 'Белая', yellow: 'Жёлтая' };
const colorAdjN = { black: 'Чёрное', blue: 'Синее', brown: 'Коричневое', cyan: 'Бирюзовое', gray: 'Серое', green: 'Зелёное', light_blue: 'Голубое', light_gray: 'Светло-серое', lime: 'Лаймовое', magenta: 'Пурпурное', orange: 'Оранжевое', pink: 'Розовое', purple: 'Фиолетовое', red: 'Красное', white: 'Белое', yellow: 'Жёлтое' };
const colorAdjPl = { black: 'Чёрные', blue: 'Синие', brown: 'Коричневые', cyan: 'Бирюзовые', gray: 'Серые', green: 'Зелёные', light_blue: 'Голубые', light_gray: 'Светло-серые', lime: 'Лаймовые', magenta: 'Пурпурные', orange: 'Оранжевые', pink: 'Розовые', purple: 'Фиолетовые', red: 'Красные', white: 'Белые', yellow: 'Жёлтые' };

const woodAdjM = { acacia: 'Акациевый', birch: 'Берёзовый', cherry: 'Вишнёвый', dark_oak: 'Тёмно-дубовый', jungle: 'Тропический', mangrove: 'Мангровый', oak: 'Дубовый', pale_oak: 'Бледно-дубовый', spruce: 'Еловый', bamboo: 'Бамбуковый', crimson: 'Багровый', warped: 'Искажённый' };
const woodAdjF = { acacia: 'Акациевая', birch: 'Берёзовая', cherry: 'Вишнёвая', dark_oak: 'Тёмно-дубовая', jungle: 'Тропическая', mangrove: 'Мангровая', oak: 'Дубовая', pale_oak: 'Бледно-дубовая', spruce: 'Еловая', bamboo: 'Бамбуковая', crimson: 'Багровая', warped: 'Искажённая' };
const woodAdjN = { acacia: 'Акациевое', birch: 'Берёзовое', cherry: 'Вишнёвое', dark_oak: 'Тёмно-дубовое', jungle: 'Тропическое', mangrove: 'Мангровое', oak: 'Дубовое', pale_oak: 'Бледно-дубовое', spruce: 'Еловое', bamboo: 'Бамбуковое', crimson: 'Багровое', warped: 'Искажённое' };
const woodAdjPl = { acacia: 'Акациевые', birch: 'Берёзовые', cherry: 'Вишнёвые', dark_oak: 'Тёмно-дубовые', jungle: 'Тропические', mangrove: 'Мангровые', oak: 'Дубовые', pale_oak: 'Бледно-дубовые', spruce: 'Еловые', bamboo: 'Бамбуковые', crimson: 'Багровые', warped: 'Искажённые' };

files.forEach(id => {
  if (dict[id]) return;

  // Wood pattern
  for (const wood of Object.keys(woodAdjM)) {
    if (id === `${wood}_planks`) { dict[id] = `${woodAdjPl[wood]} доски`; return; }
    if (id === `${wood}_door`) { dict[id] = `${woodAdjF[wood]} дверь`; return; }
    if (id === `${wood}_trapdoor`) { dict[id] = `${woodAdjM[wood]} люк`; return; }
    if (id === `${wood}_button`) { dict[id] = `${woodAdjF[wood]} кнопка`; return; }
    if (id === `${wood}_pressure_plate`) { dict[id] = `${woodAdjF[wood]} нажимная плита`; return; }
    if (id === `${wood}_fence`) { dict[id] = `${woodAdjM[wood]} забор`; return; }
    if (id === `${wood}_fence_gate`) { dict[id] = `${woodAdjF[wood]} калитка`; return; }
    if (id === `${wood}_slab`) { dict[id] = `${woodAdjF[wood]} плита`; return; }
    if (id === `${wood}_stairs`) { dict[id] = `${woodAdjPl[wood]} ступеньки`; return; }
    if (id === `${wood}_sign`) { dict[id] = `${woodAdjF[wood]} табличка`; return; }
    if (id === `${wood}_hanging_sign`) { dict[id] = `${woodAdjF[wood]} подвесная табличка`; return; }
    if (id === `${wood}_boat`) { dict[id] = `${woodAdjF[wood]} лодка`; return; }
    if (id === `${wood}_chest_boat`) { dict[id] = `${woodAdjF[wood]} лодка с сундуком`; return; }
    if (id === `${wood}_log`) { dict[id] = `${woodAdjN[wood]} бревно`; return; }
    if (id === `${wood}_wood`) { dict[id] = `${woodAdjF[wood]} древесина`; return; }
    if (id === `${wood}_sapling`) { dict[id] = `Саженец (${woodAdjM[wood].toLowerCase()})`; return; }
    if (id === `${wood}_leaves`) { dict[id] = `Листья (${woodAdjM[wood].toLowerCase()})`; return; }
  }

  // Color pattern
  for (const color of Object.keys(colorAdjM)) {
    if (id === `${color}_banner`) { dict[id] = `${colorAdjM[color]} флаг`; return; }
    if (id === `${color}_bed`) { dict[id] = `${colorAdjF[color]} кровать`; return; }
    if (id === `${color}_candle`) { dict[id] = `${colorAdjF[color]} свеча`; return; }
    if (id === `${color}_carpet`) { dict[id] = `${colorAdjM[color]} ковёр`; return; }
    if (id === `${color}_concrete`) { dict[id] = `${colorAdjM[color]} бетон`; return; }
    if (id === `${color}_concrete_powder`) { dict[id] = `${colorAdjM[color]} сухой бетон`; return; }
    if (id === `${color}_dye`) { dict[id] = `${colorAdjM[color]} краситель`; return; }
    if (id === `${color}_glazed_terracotta`) { dict[id] = `${colorAdjF[color]} глазурованная керамика`; return; }
    if (id === `${color}_shulker_box`) { dict[id] = `${colorAdjM[color]} шалкеровый ящик`; return; }
    if (id === `${color}_stained_glass`) { dict[id] = `${colorAdjN[color]} стекло`; return; }
    if (id === `${color}_stained_glass_pane`) { dict[id] = `${colorAdjF[color]} стеклянная панель`; return; }
    if (id === `${color}_terracotta`) { dict[id] = `${colorAdjF[color]} керамика`; return; }
    if (id === `${color}_wool`) { dict[id] = `${colorAdjF[color]} шерсть`; return; }
    if (id === `${color}_bundle`) { dict[id] = `${colorAdjM[color]} мешок`; return; }
  }

  // Spawn eggs
  if (id.endsWith('_spawn_egg')) {
    const mob = id.replace('_spawn_egg', '').replace(/_/g, ' ');
    dict[id] = `Яйцо призыва (${mob})`;
    return;
  }

  // Music discs
  if (id.startsWith('music_disc_')) {
    const disc = id.replace('music_disc_', '');
    dict[id] = `Музыкальная пластинка (${disc})`;
    return;
  }

  // Smithing templates
  if (id.endsWith('_smithing_template')) {
    const template = id.replace('_smithing_template', '').replace(/_/g, ' ');
    dict[id] = `Кузнечный шаблон (${template})`;
    return;
  }

  // Pottery sherds
  if (id.endsWith('_pottery_sherd')) {
    const sherd = id.replace('_pottery_sherd', '').replace(/_/g, ' ');
    dict[id] = `Глиняный черепок (${sherd})`;
    return;
  }

  // Banner patterns
  if (id.endsWith('_banner_pattern')) {
    const pattern = id.replace('_banner_pattern', '').replace(/_/g, ' ');
    dict[id] = `Узор флага (${pattern})`;
    return;
  }

  // Fallback translation rules for remaining items
  let name = id.replace(/_/g, ' ');
  name = name.charAt(0).toUpperCase() + name.slice(1);
  dict[id] = name;
});

console.log('Total files mapped:', files.length, 'Total keys in dict:', Object.keys(dict).length);

const tsContent = `// Auto-generated Russian Minecraft Item Names Dictionary
export const ruItemNames: Record<string, string> = ${JSON.stringify(dict, null, 2)};

export const getItemTitle = (itemName: string): string => {
  if (!itemName) return ''
  const cleanName = itemName.trim().toLowerCase()
  if (ruItemNames[cleanName]) {
    return ruItemNames[cleanName]
  }
  return itemName.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
}

export const getItemWikiUrl = (itemName: string): string => {
  if (!itemName) return ''
  const title = getItemTitle(itemName)
  return \`https://ru.minecraft.wiki/w/\${encodeURIComponent(title.replace(/ /g, '_'))}\`
}

export const getItemAlt = (itemName: string): string => {
  if (!itemName) return ''
  const title = getItemTitle(itemName)
  return \`Иконка \${title}.png: Спрайт для инвентаря, как показано в игре.\`
}

export const getItemSrc = (itemName: string): string => {
  if (!itemName) return ''
  return \`/assets/items/\${itemName}.png\`
}
`;

fs.writeFileSync(path.join(__dirname, '../docs/.vitepress/theme/minecraft_inventory/itemUtils.ts'), tsContent);
console.log('Successfully generated itemUtils.ts!');
