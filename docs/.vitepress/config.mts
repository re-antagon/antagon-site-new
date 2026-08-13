import { defineConfig } from 'vitepress';
import fs from 'fs';
import path from 'path';

interface SidebarOptions {
  mechanicsSection?: 'none' | 'gods' | 'physics' | 'transport' | 'utilities';
  god?: '1_infinitum' | '2_mater' | '3_fungus' | '4_finis' | '5_bellum' | '6_cosm' | '7_distorta' | '8_ignos';
  godItems?: boolean;
}

function getGodItemsSidebar(godFolder: string) {
  const dirPath = path.resolve(__dirname, '../gods/items/' + godFolder);
  if (!fs.existsSync(dirPath)) return [];
  const files = fs.readdirSync(dirPath).filter(f => f.endsWith('.md') && f !== 'index.md');
  return files.map(file => {
    const name = file.replace(/\.md$/, '');
    return {
      text: name,
      link: '/gods/items/' + godFolder + '/' + name.replace(/ /g, '%20')
    };
  });
}

function getWikiSidebar(options: SidebarOptions = {}) {
  const { mechanicsSection = 'none', god, godItems = false } = options;

  return [
    {
      text: 'Для новичков',
      items: [
        { text: 'Быстрый старт', link: '/guide/start' },
        { text: 'Часто задаваемые вопросы', link: '/guide/faq/' },
        { text: 'Кастомные крафты', link: '/guide/faq/custom_crafts' },
        { text: 'Локации и Мир', link: '/guide/places/' }
      ]
    },
    {
      text: 'Кастомный контент (Боги & Измерения)',
      items: [
        { text: 'Обзор Богов', link: '/gods/' },
        { text: 'Система Праны', link: '/gods/prana' },
        { text: 'Измерение Чистилище', link: '/gods/purgatory' },
        {
          text: '1. Постижение (Infinitum)',
          link: '/gods/1_infinitum',
          collapsed: god !== '1_infinitum',
          items: [
            { text: 'Благословения & Проклятия', link: '/gods/1_infinitum#проклятия' },
            { text: 'Особенности тела', link: '/gods/1_infinitum#особенности-тела' },
            { text: 'Заклинания Постижения', link: '/guide/mechanics/infinitum-spells' },
            { text: 'Автоматоны', link: '/guide/mechanics/automatons' },
            {
              text: 'Предметы',
              link: '/gods/items/1_infinitum/',
              collapsed: god !== '1_infinitum' || !godItems,
              items: getGodItemsSidebar('1_infinitum')
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
              link: '/gods/items/2_mater/',
              collapsed: god !== '2_mater' || !godItems,
              items: getGodItemsSidebar('2_mater')
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
            { text: 'Второй желудок', link: '/guide/mechanics/second_stomach' },
            {
              text: 'Предметы',
              link: '/gods/items/3_fungus/',
              collapsed: god !== '3_fungus' || !godItems,
              items: getGodItemsSidebar('3_fungus')
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
              link: '/gods/items/4_finis/',
              collapsed: god !== '4_finis' || !godItems,
              items: getGodItemsSidebar('4_finis')
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
              link: '/gods/items/5_bellum/',
              collapsed: god !== '5_bellum' || !godItems,
              items: getGodItemsSidebar('5_bellum')
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
            { text: 'Звёздная броня', link: '/guide/mechanics/star_armor' },
            {
              text: 'Предметы',
              link: '/gods/items/6_cosm/',
              collapsed: god !== '6_cosm' || !godItems,
              items: getGodItemsSidebar('6_cosm')
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
            { text: 'Заклинания Искажения', link: '/guide/mechanics/distortion-spells' },
            { text: 'Некромантия', link: '/guide/mechanics/necromancy' },
            { text: 'Изгнание нежити', link: '/guide/mechanics/turn_undead' },
            { text: 'Проклятые мечи', link: '/guide/mechanics/cursed_golden_swords' },
            {
              text: 'Предметы',
              link: '/gods/items/7_distorta/',
              collapsed: god !== '7_distorta' || !godItems,
              items: getGodItemsSidebar('7_distorta')
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
              link: '/gods/items/8_ignos/',
              collapsed: god !== '8_ignos' || !godItems,
              items: getGodItemsSidebar('8_ignos')
            }
          ]
        },
        { text: 'Блокираторы Богов (Атеизм)', link: '/gods/atheism' },
        { text: 'Обзор кастомных предметов', link: '/gods/items/' },
        { text: 'Уникальные артефакты', link: '/gods/items/unique_items' }
      ]
    },
    {
      text: 'Улучшения игры (Механики)',
      items: [
        {
          text: 'Обзор всех механик',
          link: '/guide/mechanics/',
          items: [
            {
              text: 'Механики Богов и Пантеона',
              link: '/guide/mechanics/#механики-богов-и-пантеона',
              collapsed: mechanicsSection !== 'gods',
              items: [
                { text: 'Обзор Богов', link: '/gods/' },
                { text: 'Система Праны', link: '/gods/prana' },
                { text: 'Блокираторы Богов (Атеизм)', link: '/gods/atheism' },
                { text: 'Заклинания Постижения', link: '/guide/mechanics/infinitum-spells' },
                { text: 'Автоматоны Постижения', link: '/guide/mechanics/automatons' },
                { text: 'Второй желудок (Fungus)', link: '/guide/mechanics/second_stomach' },
                { text: 'Звёздная броня (Cosm)', link: '/guide/mechanics/star_armor' },
                { text: 'Заклинания Искажения', link: '/guide/mechanics/distortion-spells' },
                { text: 'Некромантия (Distorta)', link: '/guide/mechanics/necromancy' },
                { text: 'Изгнание нежити (Distorta)', link: '/guide/mechanics/turn_undead' },
                { text: 'Проклятые мечи (Distorta)', link: '/guide/mechanics/cursed_golden_swords' }
              ]
            },
            {
              text: 'Физика и окружающий мир',
              link: '/guide/mechanics/#физика-и-окружающии-мир',
              collapsed: mechanicsSection !== 'physics',
              items: [
                { text: 'Разрушение блоков наковальней', link: '/guide/mechanics/anvil_crushes_block' },
                { text: 'Физика поршней и наковальни', link: '/guide/mechanics/anvil_piston_physics' },
                { text: 'Ускоренное окисление меди', link: '/guide/mechanics/copper_oxidation' },
                { text: 'Пожары и древесный уголь', link: '/guide/mechanics/fire_adjustment' },
                { text: 'Особенности паутины', link: '/guide/mechanics/web' }
              ]
            },
            {
              text: 'Транспорт и Измерения',
              link: '/guide/mechanics/#транспорт-и-измерения',
              collapsed: mechanicsSection !== 'transport',
              items: [
                { text: 'Скоростные вагонетки', link: '/guide/mechanics/minecarts_acceleration' },
                { text: 'Измерение Чистилище', link: '/gods/purgatory' },
                { text: 'Локации и Мир', link: '/guide/places/' }
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
                { text: 'Невидимые рамки', link: '/guide/mechanics/invisible_frames' },
                { text: 'Головы игроков при PVP', link: '/guide/mechanics/player_heads' },
                { text: 'Ношение баннеров', link: '/guide/mechanics/banner_hats' },
                { text: 'Камнерез и песок', link: '/guide/mechanics/stonecutter' },
                { text: 'Перевозка жителей', link: '/guide/mechanics/villager_transport' },
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
  ignoreDeadLinks: true,
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
      '/guide/mechanics/anvil_crushes_block': getWikiSidebar({ mechanicsSection: 'physics' }),
      '/guide/mechanics/anvil_piston_physics': getWikiSidebar({ mechanicsSection: 'physics' }),
      '/guide/mechanics/copper_oxidation': getWikiSidebar({ mechanicsSection: 'physics' }),
      '/guide/mechanics/fire_adjustment': getWikiSidebar({ mechanicsSection: 'physics' }),
      '/guide/mechanics/web': getWikiSidebar({ mechanicsSection: 'physics' }),

      // Mechanics Transport routes
      '/guide/mechanics/minecarts_acceleration': getWikiSidebar({ mechanicsSection: 'transport' }),

      // Mechanics Utility routes
      '/guide/mechanics/indicators': getWikiSidebar({ mechanicsSection: 'utilities' }),
      '/guide/mechanics/multishot_crossbow': getWikiSidebar({ mechanicsSection: 'utilities' }),
      '/guide/mechanics/custom_discs': getWikiSidebar({ mechanicsSection: 'utilities' }),
      '/guide/mechanics/image_frame': getWikiSidebar({ mechanicsSection: 'utilities' }),
      '/guide/mechanics/invisible_frames': getWikiSidebar({ mechanicsSection: 'utilities' }),
      '/guide/mechanics/player_heads': getWikiSidebar({ mechanicsSection: 'utilities' }),
      '/guide/mechanics/banner_hats': getWikiSidebar({ mechanicsSection: 'utilities' }),
      '/guide/mechanics/stonecutter': getWikiSidebar({ mechanicsSection: 'utilities' }),
      '/guide/mechanics/villager_transport': getWikiSidebar({ mechanicsSection: 'utilities' }),
      '/guide/mechanics/unique_effects': getWikiSidebar({ mechanicsSection: 'utilities' }),

      // God-specific mechanics routes
      '/guide/mechanics/infinitum-spells': getWikiSidebar({ mechanicsSection: 'gods', god: '1_infinitum' }),
      '/guide/mechanics/automatons': getWikiSidebar({ mechanicsSection: 'gods', god: '1_infinitum' }),
      '/guide/mechanics/second_stomach': getWikiSidebar({ mechanicsSection: 'gods', god: '3_fungus' }),
      '/guide/mechanics/star_armor': getWikiSidebar({ mechanicsSection: 'gods', god: '6_cosm' }),
      '/guide/mechanics/distortion-spells': getWikiSidebar({ mechanicsSection: 'gods', god: '7_distorta' }),
      '/guide/mechanics/necromancy': getWikiSidebar({ mechanicsSection: 'gods', god: '7_distorta' }),
      '/guide/mechanics/turn_undead': getWikiSidebar({ mechanicsSection: 'gods', god: '7_distorta' }),
      '/guide/mechanics/cursed_golden_swords': getWikiSidebar({ mechanicsSection: 'gods', god: '7_distorta' }),

      // Gods individual routes
      '/gods/1_infinitum': getWikiSidebar({ god: '1_infinitum' }),
      '/gods/items/1_infinitum/': getWikiSidebar({ god: '1_infinitum', godItems: true }),

      '/gods/2_mater': getWikiSidebar({ god: '2_mater' }),
      '/gods/items/2_mater/': getWikiSidebar({ god: '2_mater', godItems: true }),

      '/gods/3_fungus': getWikiSidebar({ god: '3_fungus' }),
      '/gods/items/3_fungus/': getWikiSidebar({ god: '3_fungus', godItems: true }),

      '/gods/4_finis': getWikiSidebar({ god: '4_finis' }),
      '/gods/items/4_finis/': getWikiSidebar({ god: '4_finis', godItems: true }),

      '/gods/5_bellum': getWikiSidebar({ god: '5_bellum' }),
      '/gods/items/5_bellum/': getWikiSidebar({ god: '5_bellum', godItems: true }),

      '/gods/6_cosm': getWikiSidebar({ god: '6_cosm' }),
      '/gods/items/6_cosm/': getWikiSidebar({ god: '6_cosm', godItems: true }),

      '/gods/7_distorta': getWikiSidebar({ god: '7_distorta' }),
      '/gods/items/7_distorta/': getWikiSidebar({ god: '7_distorta', godItems: true }),

      '/gods/8_ignos': getWikiSidebar({ god: '8_ignos' }),
      '/gods/items/8_ignos/': getWikiSidebar({ god: '8_ignos', godItems: true }),

      // Default sidebar for main guides, gods overview, and mechanics overview
      '/promo/team': [
        {
          items: [
            { text: 'Промо', link: '/promo/' },
            { text: 'Наша команда', link: '/promo/team' },
            { text: 'Реферральная система', link: '/promo/referral' },
            { text: 'О названии и синонимы', link: '/promo/terminology' }
          ]
        }
      ],
      '/guide/mechanics/': getWikiSidebar(),
      '/guide/places/': getWikiSidebar({ mechanicsSection: 'transport' }),
      '/guide/faq/custom_crafts': getWikiSidebar(),
      '/guide/faq/': getWikiSidebar(),
      '/guide/start': getWikiSidebar(),
      '/guide/': getWikiSidebar(),
      '/gods/prana': getWikiSidebar({ mechanicsSection: 'gods' }),
      '/gods/purgatory': getWikiSidebar({ mechanicsSection: 'transport' }),
      '/gods/atheism': getWikiSidebar({ mechanicsSection: 'gods' }),
      '/gods/items/unique_items': getWikiSidebar(),
      '/gods/items/': getWikiSidebar(),
      '/gods/': getWikiSidebar({ mechanicsSection: 'gods' }),
      '/promo/': [
        {
          items: [
            { text: 'Промо', link: '/promo/' },
            { text: 'Наша команда', link: '/promo/team' },
            { text: 'Реферральная система', link: '/promo/referral' },
            { text: 'О названии и синонимы', link: '/promo/terminology' }
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
