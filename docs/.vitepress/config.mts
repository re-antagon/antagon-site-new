import { defineConfig } from 'vitepress';

interface SidebarOptions {
  mechanicsSection?: 'none' | 'physics' | 'utilities';
  god?: '1_infinitum' | '2_mater' | '3_fungus' | '4_finis' | '5_bellum' | '6_cosm' | '7_distorta' | '8_ignos';
  godItems?: boolean;
}

function getWikiSidebar(options: SidebarOptions = {}) {
  const { mechanicsSection = 'none', god, godItems = false } = options;

  return [
    {
      text: 'Для новичков',
      items: [
        { text: 'Быстрый старт', link: '/guide/start' },
        { text: 'Часто задаваемые вопросы', link: '/guide/faq/' }
      ]
    },
    {
      text: 'Кастомный контент (Боги & Измерения)',
      items: [
        { text: 'Обзор Богов', link: '/gods/' },
        { text: 'Система Праны', link: '/gods/prana' },
        { text: 'Измерение Чистилище', link: '/guide/mechanics/purgatory' },
        {
          text: '1. Постижение (Infinitum)',
          link: '/gods/1_infinitum',
          collapsed: god !== '1_infinitum',
          items: [
            { text: 'Благословения & Проклятия', link: '/gods/1_infinitum#проклятия' },
            { text: 'Особенности тела', link: '/gods/1_infinitum#особенности-тела' },
            {
              text: 'Предметы',
              link: '/guide/items/1%20Infinitum/',
              collapsed: god !== '1_infinitum' || !godItems,
              items: [
                { text: 'MiH', link: '/guide/items/1%20Infinitum/MiH' },
                { text: 'Гаечный ключ', link: '/guide/items/1%20Infinitum/Гаечный%20ключ' },
                { text: 'Дефектный кристалл памяти', link: '/guide/items/1%20Infinitum/Дефектный%20кристалл%20памяти' },
                { text: 'Динамо-машина', link: '/guide/items/1%20Infinitum/Динамо-машина' },
                { text: 'Заготовка механизма', link: '/guide/items/1%20Infinitum/Заготовка%20механизма' },
                { text: 'Заряженный кристалл памяти', link: '/guide/items/1%20Infinitum/Заряженный%20кристалл%20памяти' },
                { text: 'Заряженный уголь', link: '/guide/items/1%20Infinitum/Заряженный%20уголь' },
                { text: 'Зелье свечения', link: '/guide/items/1%20Infinitum/Зелье%20свечения' },
                { text: 'Ингибитор', link: '/guide/items/1%20Infinitum/Ингибитор' },
                { text: 'Кристалл памяти', link: '/guide/items/1%20Infinitum/Кристалл%20памяти' },
                { text: 'Лазуритовый резонатор', link: '/guide/items/1%20Infinitum/Лазуритовый%20резонатор' },
                { text: 'Медная шестерня', link: '/guide/items/1%20Infinitum/Медная%20шестерня' },
                { text: 'Механическое сердце', link: '/guide/items/1%20Infinitum/Механическое%20сердце' },
                { text: 'Мина', link: '/guide/items/1%20Infinitum/Мина' },
                { text: 'Необычное зелье', link: '/guide/items/1%20Infinitum/Необычное%20зелье' },
                { text: 'Парамагнетический молот', link: '/guide/items/1%20Infinitum/Парамагнетический%20молот' },
                { text: 'Паровой кристалл', link: '/guide/items/1%20Infinitum/Паровой%20кристалл' },
                { text: 'Пергамент', link: '/guide/items/1%20Infinitum/Пергамент' },
                { text: 'Платиновая шестерня', link: '/guide/items/1%20Infinitum/Платиновая%20шестерня' },
                { text: 'Платиновый лист', link: '/guide/items/1%20Infinitum/Платиновый%20лист' },
                { text: 'Пружина', link: '/guide/items/1%20Infinitum/Пружина' },
                { text: 'Свиток антигравитации', link: '/guide/items/1%20Infinitum/Свиток%20антигравитации' },
                { text: 'Сигнальная ракета', link: '/guide/items/1%20Infinitum/Сигнальная%20ракета' },
                { text: 'Силовой молот', link: '/guide/items/1%20Infinitum/Силовой%20молот' },
                { text: 'Сломанный жезл', link: '/guide/items/1%20Infinitum/Сломанный%20жезл' },
                { text: 'Страница вечности', link: '/guide/items/1%20Infinitum/Страница%20вечности' },
                { text: 'Труба механизма', link: '/guide/items/1%20Infinitum/Труба%20механизма' },
                { text: 'Туннелепроходец', link: '/guide/items/1%20Infinitum/Туннелепроходец' },
                { text: 'Часовой кристалл', link: '/guide/items/1%20Infinitum/Часовой%20кристалл' },
                { text: 'Шелестящий капкан', link: '/guide/items/1%20Infinitum/Шелестящий%20капкан' }
              ]
            }
          ]
        },
        {
          text: '2. Естество (Mater)',
          link: '/gods/2_mater',
          collapsed: god !== '2_mater',
          items: [
            { text: 'Благословения & Проклятия', link: '/gods/2_mater#проклятия' },
            { text: 'Особенности тела', link: '/gods/2_mater#особенности-тела' },
            {
              text: 'Предметы',
              link: '/guide/items/2%20Mater/',
              collapsed: god !== '2_mater' || !godItems,
              items: [
                { text: 'Берёзовый сироп', link: '/guide/items/2%20Mater/Берёзовый%20сироп' },
                { text: 'Бинты', link: '/guide/items/2%20Mater/Бинты' },
                { text: 'Венец Цветения', link: '/guide/items/2%20Mater/Венец%20Цветения' },
                { text: 'Вечноживой цветок', link: '/guide/items/2%20Mater/Вечноживой%20цветок' },
                { text: 'Вечнозелёный лист', link: '/guide/items/2%20Mater/Вечнозелёный%20лист' },
                { text: 'Древень', link: '/guide/items/2%20Mater/Древень' },
                { text: 'Древесная броня', link: '/guide/items/2%20Mater/Древесная%20броня' },
                { text: 'Древесное волокно', link: '/guide/items/2%20Mater/Древесное%20волокно' },
                { text: 'Живой цветок', link: '/guide/items/2%20Mater/Живой%20цветок' },
                { text: 'Заблудший корень', link: '/guide/items/2%20Mater/Заблудший%20корень' },
                { text: 'Клубок корней', link: '/guide/items/2%20Mater/Клубок%20корней' },
                { text: 'Кора древня', link: '/guide/items/2%20Mater/Кора%20древня' },
                { text: 'Краник', link: '/guide/items/2%20Mater/Краник' },
                { text: 'Крапива', link: '/guide/items/2%20Mater/Крапива' },
                { text: 'Кусочек скрытого мха', link: '/guide/items/2%20Mater/Кусочек%20скрытого%20мха' },
                { text: 'Медовая мазь', link: '/guide/items/2%20Mater/Медовая%20мазь' },
                { text: 'Опасное удобрение', link: '/guide/items/2%20Mater/Опасное%20удобрение' },
                { text: 'Перчатка Лекаря', link: '/guide/items/2%20Mater/Перчатка%20Лекаря' },
                { text: 'Плащ Листьев', link: '/guide/items/2%20Mater/Плащ%20Листьев' },
                { text: 'Полотно', link: '/guide/items/2%20Mater/Полотно' },
                { text: 'Посох природы', link: '/guide/items/2%20Mater/Посох%20природы' },
                { text: 'Сапоги Лесника', link: '/guide/items/2%20Mater/Сапоги%20Лесника' },
                { text: 'Семена огнецвета', link: '/guide/items/2%20Mater/Семена%20огнецвета' },
                { text: 'Сильное удобрение', link: '/guide/items/2%20Mater/Сильное%20удобрение' },
                { text: 'Снежок с золотым яблоком', link: '/guide/items/2%20Mater/Снежок%20с%20золотым%20яблоком' },
                { text: 'Снежок с ледышкой', link: '/guide/items/2%20Mater/Снежок%20с%20ледышкой' },
                { text: 'Снежок с паучьим глазом', link: '/guide/items/2%20Mater/Снежок%20с%20паучьим%20глазом' },
                { text: 'Сок древня', link: '/guide/items/2%20Mater/Сок%20древня' },
                { text: 'Солёный снежок', link: '/guide/items/2%20Mater/Солёный%20снежок' },
                { text: 'Соль', link: '/guide/items/2%20Mater/Соль' },
                { text: 'Сосулька', link: '/guide/items/2%20Mater/Сосулька' },
                { text: 'Сумка с чернилами', link: '/guide/items/2%20Mater/Сумка%20с%20чернилами' },
                { text: 'Сушёные ягоды', link: '/guide/items/2%20Mater/Сушёные%20ягоды' },
                { text: 'Талисман морской звезды', link: '/guide/items/2%20Mater/Талисман%20морской%20звезды' },
                { text: 'Травяной щит', link: '/guide/items/2%20Mater/Травяной%20щит' },
                { text: 'Чёрный веер', link: '/guide/items/2%20Mater/Чёрный%20веер' },
                { text: 'Чёрный лёд', link: '/guide/items/2%20Mater/Чёрный%20лёд' },
                { text: 'Чаша Здравия', link: '/guide/items/2%20Mater/Чаша%20Здравия' },
                { text: 'Штаны Садовника', link: '/guide/items/2%20Mater/Штаны%20Садовника' },
                { text: 'Эфирное масло', link: '/guide/items/2%20Mater/Эфирное%20масло' }
              ]
            }
          ]
        },
        {
          text: '3. Расширение (Fungus)',
          link: '/gods/3_fungus',
          collapsed: god !== '3_fungus',
          items: [
            { text: 'Благословения & Проклятия', link: '/gods/3_fungus#проклятия' },
            { text: 'Особенности тела', link: '/gods/3_fungus#особенности-тела' },
            {
              text: 'Предметы',
              link: '/guide/items/3%20Fungus/',
              collapsed: god !== '3_fungus' || !godItems,
              items: [
                { text: 'Глаз Грибницы', link: '/guide/items/3%20Fungus/Глаз%20Грибницы' },
                { text: 'Жёсткая грибная боевая броня', link: '/guide/items/3%20Fungus/Жёсткая%20грибная%20боевая%20броня' },
                { text: 'Жёсткая грибная небоевая броня', link: '/guide/items/3%20Fungus/Жёсткая%20грибная%20небоевая%20броня' },
                { text: 'Импульсный меч', link: '/guide/items/3%20Fungus/Импульсный%20меч' },
                { text: 'Камень Развития', link: '/guide/items/3%20Fungus/Камень%20Развития' },
                { text: 'Камень Роста', link: '/guide/items/3%20Fungus/Камень%20Роста' },
                { text: 'Кастрюля', link: '/guide/items/3%20Fungus/Кастрюля' },
                { text: 'Кастрюля грибного супа', link: '/guide/items/3%20Fungus/Кастрюля%20грибного%20супа' },
                { text: 'Меч Превосходства', link: '/guide/items/3%20Fungus/Меч%20Превосходства' },
                { text: 'Мицелиальная сеть', link: '/guide/items/3%20Fungus/Мицелиальная%20сеть' },
                { text: 'Мягкая грибная броня', link: '/guide/items/3%20Fungus/Мягкая%20грибная%20броня' },
                { text: 'Очищенная грибница', link: '/guide/items/3%20Fungus/Очищенная%20грибница' },
                { text: 'Светящийся гриб', link: '/guide/items/3%20Fungus/Светящийся%20гриб' },
                { text: 'Спора', link: '/guide/items/3%20Fungus/Спора' },
                { text: 'Споромёт', link: '/guide/items/3%20Fungus/Споромёт' },
                { text: 'Средняя грибная броня', link: '/guide/items/3%20Fungus/Средняя%20грибная%20броня' },
                { text: 'Токсичный гриб', link: '/guide/items/3%20Fungus/Токсичный%20гриб' }
              ]
            }
          ]
        },
        {
          text: '4. Окончание (Finis)',
          link: '/gods/4_finis',
          collapsed: god !== '4_finis',
          items: [
            { text: 'Благословения & Проклятия', link: '/gods/4_finis#проклятия' },
            { text: 'Особенности тела', link: '/gods/4_finis#особенности-тела' },
            {
              text: 'Предметы',
              link: '/guide/items/4%20Finis/',
              collapsed: god !== '4_finis' || !godItems,
              items: [
                { text: 'Барьер цепей', link: '/guide/items/4%20Finis/Барьер%20цепей' },
                { text: 'Бесплотный меч', link: '/guide/items/4%20Finis/Бесплотный%20меч' },
                { text: 'Броня отвода глаз', link: '/guide/items/4%20Finis/Броня%20отвода%20глаз' },
                { text: 'Ветер', link: '/guide/items/4%20Finis/Ветер' },
                { text: 'Вечный ветер', link: '/guide/items/4%20Finis/Вечный%20ветер' },
                { text: 'Всевидящий глаз', link: '/guide/items/4%20Finis/Всевидящий%20глаз' },
                { text: 'Зелье захвата', link: '/guide/items/4%20Finis/Зелье%20захвата' },
                { text: 'Зеро', link: '/guide/items/4%20Finis/Зеро' },
                { text: 'Исчезающая метка', link: '/guide/items/4%20Finis/Исчезающая%20метка' },
                { text: 'Клок тени', link: '/guide/items/4%20Finis/Клок%20тени' },
                { text: 'Кольцо теней', link: '/guide/items/4%20Finis/Кольцо%20теней' },
                { text: 'Конь в кубе', link: '/guide/items/4%20Finis/Конь%20в%20кубе' },
                { text: 'Кусочек серебра', link: '/guide/items/4%20Finis/Кусочек%20серебра' },
                { text: 'Лунный клинок рывка', link: '/guide/items/4%20Finis/Лунный%20клинок%20рывка' },
                { text: 'Операнда', link: '/guide/items/4%20Finis/Операнда' },
                { text: 'Осыпающийся осколок', link: '/guide/items/4%20Finis/Осыпающийся%20осколок' },
                { text: 'Пепел магии', link: '/guide/items/4%20Finis/Пепел%20магии' },
                { text: 'Плащ Ускользания', link: '/guide/items/4%20Finis/Плащ%20Ускользания' },
                { text: 'Плащ одиночества', link: '/guide/items/4%20Finis/Плащ%20одиночества' },
                { text: 'Почтовая руна', link: '/guide/items/4%20Finis/Почтовая%20руна' },
                { text: 'Прах банши', link: '/guide/items/4%20Finis/Прах%20банши' },
                { text: 'Равенство', link: '/guide/items/4%20Finis/Равенство' },
                { text: 'Серебряный обруч', link: '/guide/items/4%20Finis/Серебряный%20обруч' },
                { text: 'Серебряный слиток', link: '/guide/items/4%20Finis/Серебряный%20слиток' },
                { text: 'Слепой побег', link: '/guide/items/4%20Finis/Слепой%20побег' },
                { text: 'Сфера криостазиса', link: '/guide/items/4%20Finis/Сфера%20криостазиса' },
                { text: 'Тёмно-синие шаровары', link: '/guide/items/4%20Finis/Тёмно-синие%20шаровары' },
                { text: 'Теневой шлем', link: '/guide/items/4%20Finis/Теневой%20шлем' },
                { text: 'Точка возврата', link: '/guide/items/4%20Finis/Точка%20возврата' },
                { text: 'Туман ожидания', link: '/guide/items/4%20Finis/Туман%20ожидания' },
                { text: 'Тупой клинок', link: '/guide/items/4%20Finis/Тупой%20клинок' },
                { text: 'Удочка обречённых душ', link: '/guide/items/4%20Finis/Удочка%20обречённых%20душ' },
                { text: 'Фрукт одиночества', link: '/guide/items/4%20Finis/Фрукт%20одиночества' },
                { text: 'Чёрная кольчуга', link: '/guide/items/4%20Finis/Чёрная%20кольчуга' },
                { text: 'Широкополая шляпа', link: '/guide/items/4%20Finis/Широкополая%20шляпа' }
              ]
            }
          ]
        },
        {
          text: '5. Война (Bellum)',
          link: '/gods/5_bellum',
          collapsed: god !== '5_bellum',
          items: [
            { text: 'Благословения & Проклятия', link: '/gods/5_bellum#проклятия' },
            { text: 'Особенности тела', link: '/gods/5_bellum#особенности-тела' },
            {
              text: 'Предметы',
              link: '/guide/items/5%20Bellum/',
              collapsed: god !== '5_bellum' || !godItems,
              items: [
                { text: 'Боевой горн', link: '/guide/items/5%20Bellum/Боевой%20горн' },
                { text: 'Броня Сталевара', link: '/guide/items/5%20Bellum/Броня%20Сталевара' },
                { text: 'Верёвка', link: '/guide/items/5%20Bellum/Верёвка' },
                { text: 'Кристалл Битвы', link: '/guide/items/5%20Bellum/Кристалл%20Битвы' },
                { text: 'Кусочек оружейной стали', link: '/guide/items/5%20Bellum/Кусочек%20оружейной%20стали' },
                { text: 'Лёгкая броня', link: '/guide/items/5%20Bellum/Лёгкая%20броня' },
                { text: 'Лук Сталевара', link: '/guide/items/5%20Bellum/Лук%20Сталевара' },
                { text: 'Медальон Испепеления', link: '/guide/items/5%20Bellum/Медальон%20Испепеления' },
                { text: 'Меч Сталевара', link: '/guide/items/5%20Bellum/Меч%20Сталевара' },
                { text: 'Оружейная сталь', link: '/guide/items/5%20Bellum/Оружейная%20сталь' },
                { text: 'Осколок битвы', link: '/guide/items/5%20Bellum/Осколок%20битвы' },
                { text: 'Плащ Берсерка', link: '/guide/items/5%20Bellum/Плащ%20Берсерка' },
                { text: 'Плащ Полководца', link: '/guide/items/5%20Bellum/Плащ%20Полководца' },
                { text: 'Поясной запас', link: '/guide/items/5%20Bellum/Поясной%20запас' },
                { text: 'Прочная кожа', link: '/guide/items/5%20Bellum/Прочная%20кожа' },
                { text: 'Сапоги Удара', link: '/guide/items/5%20Bellum/Сапоги%20Удара' },
                { text: 'Стальная стрела', link: '/guide/items/5%20Bellum/Стальная%20стрела' },
                { text: 'Щит Сталевара', link: '/guide/items/5%20Bellum/Щит%20Сталевара' }
              ]
            }
          ]
        },
        {
          text: '6. Космос (Cosm)',
          link: '/gods/6_cosm',
          collapsed: god !== '6_cosm',
          items: [
            { text: 'Благословения & Проклятия', link: '/gods/6_cosm#проклятия' },
            { text: 'Особенности тела', link: '/gods/6_cosm#особенности-тела' },
            {
              text: 'Предметы',
              link: '/guide/items/6%20Cosm/',
              collapsed: god !== '6_cosm' || !godItems,
              items: [
                { text: 'Броня Иглобрюха', link: '/guide/items/6%20Cosm/Броня%20Иглобрюха' },
                { text: 'Водная призма', link: '/guide/items/6%20Cosm/Водная%20призма' },
                { text: 'Гроза в бутылке', link: '/guide/items/6%20Cosm/Гроза%20в%20бутылке' },
                { text: 'Звёздная пыль', link: '/guide/items/6%20Cosm/Звёздная%20пыль' },
                { text: 'Звёздный компас', link: '/guide/items/6%20Cosm/Звёздный%20компас' },
                { text: 'Звёздный лук', link: '/guide/items/6%20Cosm/Звёздный%20лук' },
                { text: 'Коралловое удобрение', link: '/guide/items/6%20Cosm/Коралловое%20удобрение' },
                { text: 'Корни водного кустарника', link: '/guide/items/6%20Cosm/Корни%20водного%20кустарника' },
                { text: 'Кусочек солария', link: '/guide/items/6%20Cosm/Кусочек%20солария' },
                { text: 'Лунный амулет', link: '/guide/items/6%20Cosm/Лунный%20амулет' },
                { text: 'Медный жезл', link: '/guide/items/6%20Cosm/Медный%20жезл' },
                { text: 'Небесный камень', link: '/guide/items/6%20Cosm/Небесный%20камень' },
                { text: 'Осушитель', link: '/guide/items/6%20Cosm/Осушитель' },
                { text: 'Пёстрый веер', link: '/guide/items/6%20Cosm/Пёстрый%20веер' },
                { text: 'Снежок с булыжником', link: '/guide/items/6%20Cosm/Снежок%20с%20булыжником' },
                { text: 'Соларий', link: '/guide/items/6%20Cosm/Соларий' },
                { text: 'Сфера небесного света', link: '/guide/items/6%20Cosm/Сфера%20небесного%20света' },
                { text: 'Упавшая звезда', link: '/guide/items/6%20Cosm/Упавшая%20звезда' }
              ]
            }
          ]
        },
        {
          text: '7. Искажение (Distorta)',
          link: '/gods/7_distorta',
          collapsed: god !== '7_distorta',
          items: [
            { text: 'Благословения & Проклятия', link: '/gods/7_distorta#проклятия' },
            { text: 'Особенности тела', link: '/gods/7_distorta#особенности-тела' },
            {
              text: 'Предметы',
              link: '/guide/items/7%20Distorta/',
              collapsed: god !== '7_distorta' || !godItems,
              items: [
                { text: 'Договор Замены', link: '/guide/items/7%20Distorta/Договор%20Замены' },
                { text: 'Договор Ремонта', link: '/guide/items/7%20Distorta/Договор%20Ремонта' },
                { text: 'Душа', link: '/guide/items/7%20Distorta/Душа' },
                { text: 'Клинок Безмолвия', link: '/guide/items/7%20Distorta/Клинок%20Безмолвия' },
                { text: 'Кольцо Кровавого долга', link: '/guide/items/7%20Distorta/Кольцо%20Кровавого%20долга' },
                { text: 'Красная броня', link: '/guide/items/7%20Distorta/Красная%20броня' },
                { text: 'Кровопускатель', link: '/guide/items/7%20Distorta/Кровопускатель' },
                { text: 'Лужа крови', link: '/guide/items/7%20Distorta/Лужа%20крови' },
                { text: 'Незавершённый договор', link: '/guide/items/7%20Distorta/Незавершённый%20договор' },
                { text: 'Плащ Могильщика', link: '/guide/items/7%20Distorta/Плащ%20Могильщика' },
                { text: 'Плащ Мученика', link: '/guide/items/7%20Distorta/Плащ%20Мученика' },
                { text: 'Полая кость', link: '/guide/items/7%20Distorta/Полая%20кость' },
                { text: 'Проклятая кость', link: '/guide/items/7%20Distorta/Проклятая%20кость' },
                { text: 'Проклятый слиток', link: '/guide/items/7%20Distorta/Проклятый%20слиток' },
                { text: 'Рубин', link: '/guide/items/7%20Distorta/Рубин' },
                { text: 'Свеча Восполнения', link: '/guide/items/7%20Distorta/Свеча%20Восполнения' },
                { text: 'Свеча Добычи', link: '/guide/items/7%20Distorta/Свеча%20Добычи' },
                { text: 'Свеча Проклятия', link: '/guide/items/7%20Distorta/Свеча%20Проклятия' },
                { text: 'Свеча Пронзания', link: '/guide/items/7%20Distorta/Свеча%20Пронзания' },
                { text: 'Свеча Скачка', link: '/guide/items/7%20Distorta/Свеча%20Скачка' },
                { text: 'Сгусток крови', link: '/guide/items/7%20Distorta/Сгусток%20крови' },
                { text: 'Сердце Жертвы', link: '/guide/items/7%20Distorta/Сердце%20Жертвы' },
                { text: 'Скипетр призраков', link: '/guide/items/7%20Distorta/Скипетр%20призраков' },
                { text: 'Стеклянный тотем', link: '/guide/items/7%20Distorta/Стеклянный%20тотем' },
                { text: 'Тотем Кровавого долга', link: '/guide/items/7%20Distorta/Тотем%20Кровавого%20долга' },
                { text: 'Чаша крови', link: '/guide/items/7%20Distorta/Чаша%20крови' },
                { text: 'Щит-кусака', link: '/guide/items/7%20Distorta/Щит-кусака' }
              ]
            }
          ]
        },
        {
          text: '8. Хаос (Ignos)',
          link: '/gods/8_ignos',
          collapsed: god !== '8_ignos',
          items: [
            { text: 'Благословения & Проклятия', link: '/gods/8_ignos#проклятия' },
            { text: 'Особенности тела', link: '/gods/8_ignos#особенности-тела' },
            {
              text: 'Предметы',
              link: '/guide/items/8%20Ignos/',
              collapsed: god !== '8_ignos' || !godItems,
              items: [
                { text: 'Глитч-блок', link: '/guide/items/8%20Ignos/Глитч-блок' },
                { text: 'Глитч', link: '/guide/items/8%20Ignos/Глитч' },
                { text: 'Кисть реальности', link: '/guide/items/8%20Ignos/Кисть%20реальности' },
                { text: 'Кубик', link: '/guide/items/8%20Ignos/Кубик' },
                { text: 'Меч разлома', link: '/guide/items/8%20Ignos/Меч%20разлома' },
                { text: 'Мультитул', link: '/guide/items/8%20Ignos/Мультитул' },
                { text: 'Неколлинеарный меч', link: '/guide/items/8%20Ignos/Неколлинеарный%20меч' },
                { text: 'Осколок итераций', link: '/guide/items/8%20Ignos/Осколок%20итераций' },
                { text: 'Плавающий покров', link: '/guide/items/8%20Ignos/Плавающий%20покров' },
                { text: 'Фрагмент реальности', link: '/guide/items/8%20Ignos/Фрагмент%20реальности' },
                { text: 'Честная монетка', link: '/guide/items/8%20Ignos/Честная%20монетка' }
              ]
            }
          ]
        },
        { text: 'Блокираторы Богов (Атеизм)', link: '/guide/mechanics/atheism' },
        { text: 'Обзор кастомных предметов', link: '/guide/items/' },
        { text: 'Уникальные артефакты', link: '/guide/items/unique_items' }
      ]
    },
    {
      text: 'Улучшения игры (Механики)',
      items: [
        {
          text: 'Обзор всех механик',
          link: '/guide/mechanics/',
          collapsed: mechanicsSection === 'none',
          items: [
            {
              text: 'Физика и окружающий мир',
              link: '/guide/mechanics/#физика-и-окружающий-мир',
              collapsed: mechanicsSection !== 'physics',
              items: [
                { text: 'Разрушение блоков наковальней', link: '/guide/mechanics/anvil/crushes_block' },
                { text: 'Физика поршней и наковальни', link: '/guide/mechanics/anvil/piston_physics' },
                { text: 'Ускоренное окисление меди', link: '/guide/mechanics/copper_oxidation' },
                { text: 'Скоростные вагонетки', link: '/guide/mechanics/minecarts_acceleration' },
                { text: 'Пожары и древесный уголь', link: '/guide/mechanics/fire_adjustment' },
                { text: 'Особенности паутины', link: '/guide/mechanics/web' }
              ]
            },
            {
              text: 'Утилиты, Боевка & QoL',
              link: '/guide/mechanics/#утилиты-боевка-qol',
              collapsed: mechanicsSection !== 'utilities',
              items: [
                { text: 'Зелья-индикаторы', link: '/guide/mechanics/indicators' },
                { text: 'Арбалет "Тройной выстрел"', link: '/guide/mechanics/multishot_crossbow' },
                { text: 'Кастомные пластинки (/cd)', link: '/guide/mechanics/custom_discs' },
                { text: 'Картинки в рамках (/imageframe)', link: '/guide/mechanics/image_frame' },
                { text: 'Уникальные эффекты', link: '/guide/mechanics/unique_effects' }
              ]
            }
          ]
        }
      ]
    }
  ];
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'ru-RU',
  title: "Re:Antagon",
  titleTemplate: ':title | Re:Antagon',
  description: "Антагон - это ванильный майнкрафт сервер для 1.21 версий майнкрафта. На сервере добавлены кастомные предметы, мобы.",
  head: [
    ['link', { rel: 'stylesheet', href: '/crafting.css' }],
    ['link', { rel: 'icon', type: "image/x-icon", href: '/favicon.ico' }],
    ['link', { rel: 'shortcut icon', type: "image/x-icon", href: '/favicon.ico' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:url', content: 'https://wiki.antagon.su/' }],
    ['meta', { property: 'og:title', content: 'Re:Antagon - Minecraft Server Wiki' }],
    ['meta', { property: 'og:description', content: 'Антагон - это ванильный майнкрафт сервер для 1.21 версий майнкрафта. На сервере добавлены кастомные предметы, мобы.' }],
    ['meta', { property: 'og:image', content: 'https://wiki.antagon.su/logo.png' }],
    ['meta', { property: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { property: 'twitter:url', content: 'https://wiki.antagon.su/' }],
    ['meta', { property: 'twitter:title', content: 'Re:Antagon - Minecraft Server Wiki' }],
    ['meta', { property: 'twitter:description', content: 'Антагон - это ванильный майнкрафт сервер для 1.21 версий майнкрафта. На сервере добавлены кастомные предметы, мобы.' }],
    ['meta', { property: 'twitter:image', content: 'https://wiki.antagon.su/logo.png' }],
    ['meta', { name: 'robots', content: 'index, follow' }],
    ['meta', { name: 'author', content: 'Re:Antagon Team' }],
    ['meta', { name: 'keywords', content: 'minecraft, server, antagon, re:antagon, antagon:re, antagon reborn, антагон, антагон реборн, реантагон, антагон вики, вики, wiki, предметы, боги, фишки, гайд, 1.21' }],
    ['meta', { name: 'yandex-verification', content: '4364860f960a5a06' }],
    ['script', { type: 'application/ld+json' }, `{
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Re:Antagon",
      "alternateName": ["Antagon Reborn", "Антагон Реборн", "РеАнтагон", "antagon:re", "re:antagon", "Antagon Wiki", "Антагон Вики", "Antagon Server"],
      "description": "Антагон - это ванильный майнкрафт сервер для 1.21 версий майнкрафта. На сервере добавлены кастомные предметы, мобы.",
      "url": "https://wiki.antagon.su/",
      "publisher": {
        "@type": "Organization",
        "name": "Re:Antagon Team",
        "logo": {
          "@type": "ImageObject",
          "url": "https://wiki.antagon.su/logo.png"
        }
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://wiki.antagon.su/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    }`],
    [
      'script',
      { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-P7LSNPZV1S' }
    ],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-P7LSNPZV1S');`
    ],
    [
      'script',
      {
        type: 'text/javascript',
        async: true,
      },
      `
      (function(m,e,t,r,i,k,a){
        m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();
        for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
        k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
      })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=103960154', 'ym');
      
      ym(103960154, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", accurateTrackBounce:true, trackLinks:true});
      `
    ],
    [
      'noscript',
      {},
      '<div><img src="https://mc.yandex.ru/watch/103960154" style="position:absolute; left:-9999px;" alt="" /></div>'
    ],
  ],
  cleanUrls: true,
  lastUpdated: true,
  transformHead: ({ pageData }) => {
    const rawPath = pageData.relativePath.replace(/\.md$/, '').replace(/(^|\/)index$/, '');
    const canonicalUrl = `https://wiki.antagon.su/${rawPath ? rawPath : ''}`;
    return [
      ['link', { rel: 'canonical', href: canonicalUrl }],
      ['meta', { property: 'og:url', content: canonicalUrl }]
    ];
  },

  themeConfig: {
    logo: '/logo.png',

    nav: [
      { text: 'Главная', link: '/' },
      { text: 'Вики', link: '/gods/' },
      { text: 'Правила', link: '/rules' },
      { text: 'Промо', link: '/promo/' },
      { text: 'Карта мира', link: 'https://map.antagon.ru' }
    ],
    
    footer: {
      message: 'Antagon вики распространяется в формате "как есть" и не обязана содержать актуальную информацию.',
      copyright: 'Copyright © 2021-2026 Re:Antagon'
    },

    docFooter: {
      prev: 'Предыдущая',
      next: 'Далее'
    },

    lightModeSwitchTitle: 'Переключить на светлую тему',
    darkModeSwitchTitle: 'Переключить на тёмную тему',
    outlineTitle: 'На этой странице',
    returnToTopLabel: 'Вернуться к началу',
    langMenuLabel: 'Выбрать язык',
    skipToContentLabel: 'Перейти к содержимому',
    editLink: {
      pattern: 'https://github.com/purplegale/antagon-site-new/edit/main/docs/:path',
      text: 'Редактирование страницы на GitHub'
    },
    externalLinkIcon: true,

    sidebar: {
      // Mechanics Physics routes
      '/guide/mechanics/anvil/': getWikiSidebar({ mechanicsSection: 'physics' }),
      '/guide/mechanics/copper_oxidation': getWikiSidebar({ mechanicsSection: 'physics' }),
      '/guide/mechanics/minecarts_acceleration': getWikiSidebar({ mechanicsSection: 'physics' }),
      '/guide/mechanics/fire_adjustment': getWikiSidebar({ mechanicsSection: 'physics' }),
      '/guide/mechanics/web': getWikiSidebar({ mechanicsSection: 'physics' }),

      // Mechanics Utility routes
      '/guide/mechanics/indicators': getWikiSidebar({ mechanicsSection: 'utilities' }),
      '/guide/mechanics/multishot_crossbow': getWikiSidebar({ mechanicsSection: 'utilities' }),
      '/guide/mechanics/custom_discs': getWikiSidebar({ mechanicsSection: 'utilities' }),
      '/guide/mechanics/image_frame': getWikiSidebar({ mechanicsSection: 'utilities' }),
      '/guide/mechanics/unique_effects': getWikiSidebar({ mechanicsSection: 'utilities' }),

      // Gods individual routes
      '/gods/1_infinitum': getWikiSidebar({ god: '1_infinitum' }),
      '/guide/items/1%20Infinitum/': getWikiSidebar({ god: '1_infinitum', godItems: true }),
      '/guide/items/1 Infinitum/': getWikiSidebar({ god: '1_infinitum', godItems: true }),

      '/gods/2_mater': getWikiSidebar({ god: '2_mater' }),
      '/guide/items/2%20Mater/': getWikiSidebar({ god: '2_mater', godItems: true }),
      '/guide/items/2 Mater/': getWikiSidebar({ god: '2_mater', godItems: true }),

      '/gods/3_fungus': getWikiSidebar({ god: '3_fungus' }),
      '/guide/items/3%20Fungus/': getWikiSidebar({ god: '3_fungus', godItems: true }),
      '/guide/items/3 Fungus/': getWikiSidebar({ god: '3_fungus', godItems: true }),

      '/gods/4_finis': getWikiSidebar({ god: '4_finis' }),
      '/guide/items/4%20Finis/': getWikiSidebar({ god: '4_finis', godItems: true }),
      '/guide/items/4 Finis/': getWikiSidebar({ god: '4_finis', godItems: true }),

      '/gods/5_bellum': getWikiSidebar({ god: '5_bellum' }),
      '/guide/items/5%20Bellum/': getWikiSidebar({ god: '5_bellum', godItems: true }),
      '/guide/items/5 Bellum/': getWikiSidebar({ god: '5_bellum', godItems: true }),

      '/gods/6_cosm': getWikiSidebar({ god: '6_cosm' }),
      '/guide/items/6%20Cosm/': getWikiSidebar({ god: '6_cosm', godItems: true }),
      '/guide/items/6 Cosm/': getWikiSidebar({ god: '6_cosm', godItems: true }),

      '/gods/7_distorta': getWikiSidebar({ god: '7_distorta' }),
      '/guide/items/7%20Distorta/': getWikiSidebar({ god: '7_distorta', godItems: true }),
      '/guide/items/7 Distorta/': getWikiSidebar({ god: '7_distorta', godItems: true }),

      '/gods/8_ignos': getWikiSidebar({ god: '8_ignos' }),
      '/guide/items/8%20Ignos/': getWikiSidebar({ god: '8_ignos', godItems: true }),
      '/guide/items/8 Ignos/': getWikiSidebar({ god: '8_ignos', godItems: true }),

      // Default sidebar for main guides, gods overview, and mechanics overview
      '/guide/team': [
        {
          items: [
            { text: 'Промо', link: '/promo/' },
            { text: 'Наша команда', link: '/guide/team' },
            { text: 'Реферральная система', link: '/promo/referral' }
          ]
        }
      ],
      '/guide/mechanics/': getWikiSidebar({ mechanicsSection: 'none' }),
      '/guide/': getWikiSidebar({ mechanicsSection: 'none' }),
      '/gods/': getWikiSidebar({ mechanicsSection: 'none' }),
      '/promo/': [
        {
          items: [
            { text: 'Промо', link: '/promo/' },
            { text: 'Наша команда', link: '/guide/team' },
            { text: 'Реферральная система', link: '/promo/referral' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'discord', link: 'https://discord.antagon.su/' }
    ],

    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: 'Поиск',
                buttonAriaLabel: 'Поиск'
              },
              modal: {
                displayDetails: 'Показать подробности',
                resetButtonTitle: 'Сбросить поиск',
                backButtonTitle: 'Закрыть поиск',
                noResultsText: 'Нет результатов',
                footer: {
                  selectText: 'Выбрать',
                  selectKeyAriaLabel: 'Ввод',
                  navigateText: 'Навигация',
                  navigateUpKeyAriaLabel: 'Стрелка вверх',
                  navigateDownKeyAriaLabel: 'Стрелка вниз',
                  closeText: 'Закрыть',
                  closeKeyAriaLabel: 'Escape'
                }
              }
            }
          }
        }
      }
    },

    lastUpdated: {
      text: 'Дата последнего обновления',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'short'
      }
    }
  },

  markdown: {
    container: {
      tipLabel: 'Совет',
      warningLabel: 'Внимание',
      dangerLabel: 'Осторожно',
      infoLabel: 'Информация',
      detailsLabel: 'Подробнее'
    },
    image: {
      lazyLoading: true
    }
  }
})
