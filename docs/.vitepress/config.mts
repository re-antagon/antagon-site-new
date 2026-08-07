import { defineConfig } from 'vitepress';

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
    // Open Graph / Facebook
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:url', content: 'https://wiki.antagon.su/' }],
    ['meta', { property: 'og:title', content: 'Re:Antagon - Minecraft Server Wiki' }],
    ['meta', { property: 'og:description', content: 'Антагон - это ванильный майнкрафт сервер для 1.21 версий майнкрафта. На сервере добавлены кастомные предметы, мобы.' }],
    ['meta', { property: 'og:image', content: 'https://wiki.antagon.su/logo.png' }],
    // Twitter
    ['meta', { property: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { property: 'twitter:url', content: 'https://wiki.antagon.su/' }],
    ['meta', { property: 'twitter:title', content: 'Re:Antagon - Minecraft Server Wiki' }],
    ['meta', { property: 'twitter:description', content: 'Антагон - это ванильный майнкрафт сервер для 1.21 версий майнкрафта. На сервере добавлены кастомные предметы, мобы.' }],
    ['meta', { property: 'twitter:image', content: 'https://wiki.antagon.su/logo.png' }],
    // Additional SEO
    ['meta', { name: 'robots', content: 'index, follow' }],
    ['meta', { name: 'author', content: 'Re:Antagon Team' }],
    ['meta', { name: 'keywords', content: 'minecraft, server, antagon, re:antagon, antagon:re, antagon reborn, антагон, антагон реборн, реантагон, антагон вики, вики, wiki, предметы, боги, фишки, гайд, 1.21' }],
    // Yandex Meta
    ['meta', { name: 'yandex-verification', content: '4364860f960a5a06' }],
    // JSON-LD structured data
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
    // Google Analytics
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

    // Yandex.Metrika script
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
    // Yandex.Metrika Noscript fallback
    [
      'noscript',
      {},
      '<div><img src="https://mc.yandex.ru/watch/103960154" style="position:absolute; left:-9999px;" alt="" /></div>'
    ],

    // Fonts
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
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.png',

    nav: [
      { text: 'Главная', link: '/' },
      { text: 'Для новичков', link: '/guide/start' },
      { text: 'Кастомный контент', link: '/gods/' },
      { text: 'Улучшения игры', link: '/guide/mechanics/' },
      { text: 'Правила', link: '/rules' },
      { text: 'Промоматериалы', link: '/promo/' }
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
      '/guide/': [
        {
          text: 'Для новичков',
          collapsed: false,
          items: [
            { text: 'Быстрый старт', link: '/guide/start' },
            { text: 'Наша команда', link: '/guide/team' },
            { text: 'Правила сервера', link: '/rules' },
            {
              text: 'Часто задаваемые вопросы',
              collapsed: true,
              items: [
                { text: 'Общие вопросы', link: '/guide/faq/' },
                { text: 'Фишки сервера', link: '/guide/faq/features' },
                { text: 'Кастомные крафты', link: '/guide/faq/custom_crafts' },
                { text: 'О названии и синонимы', link: '/guide/faq/terminology' }
              ]
            }
          ]
        },
        {
          text: 'Кастомный контент',
          collapsed: false,
          items: [
            {
              text: 'Хабы Богов',
              collapsed: false,
              items: [
                { text: 'Обзор Богов', link: '/gods/' },
                { text: 'Система Праны', link: '/gods/prana' },
                { text: 'Постижение (Infinitum)', link: '/gods/1_infinitum' },
                { text: 'Естество (Mater)', link: '/gods/2_mater' },
                { text: 'Расширение (Fungus)', link: '/gods/3_fungus' },
                { text: 'Окончание (Finis)', link: '/gods/4_finis' },
                { text: 'Война (Bellum)', link: '/gods/5_bellum' },
                { text: 'Космос (Cosm)', link: '/gods/6_cosm' },
                { text: 'Искажение (Distorta)', link: '/gods/7_distorta' },
                { text: 'Хаос (Ignos)', link: '/gods/8_ignos' },
                { text: 'Блокираторы Богов (Атеизм)', link: '/guide/mechanics/atheism' }
              ]
            },
            {
              text: 'Дополнительно',
              collapsed: false,
              items: [
                { text: 'Обзор кастомных предметов', link: '/guide/items/' },
                { text: 'Уникальные артефакты', link: '/guide/items/unique_items' },
                { text: 'Общие кастомные предметы', link: '/guide/items/0%20General/index' }
              ]
            }
          ]
        },
        {
          text: 'Улучшения игры',
          collapsed: false,
          items: [
            { text: 'Обзор предметов', link: '/guide/items/' },
            { text: 'Уникальные артефакты', link: '/guide/items/unique_items' },
            { text: 'Постижение', link: '/guide/items/1%20Infinitum/index' },
            { text: 'Естество', link: '/guide/items/2%20Mater/index' },
            { text: 'Расширение', link: '/guide/items/3%20Fungus/index' },
            { text: 'Окончание', link: '/guide/items/4%20Finis/index' },
            { text: 'Война', link: '/guide/items/5%20Bellum/index' },
            { text: 'Космос', link: '/guide/items/6%20Cosm/index' },
            { text: 'Искажение', link: '/guide/items/7%20Distorta/index' }
          ]
        }
      ],
      '/gods/': [
        {
          text: 'Для новичков',
          collapsed: false,
          items: [
            { text: 'Быстрый старт', link: '/guide/start' },
            { text: 'Наша команда', link: '/guide/team' },
            { text: 'Правила сервера', link: '/rules' },
            {
              text: 'Часто задаваемые вопросы',
              collapsed: true,
              items: [
                { text: 'Общие вопросы', link: '/guide/faq/' },
                { text: 'Фишки сервера', link: '/guide/faq/features' },
                { text: 'Кастомные крафты', link: '/guide/faq/custom_crafts' },
                { text: 'О названии и синонимы', link: '/guide/faq/terminology' }
              ]
            }
          ]
        },
        {
          text: 'Кастомный контент',
          collapsed: false,
          items: [
            {
              text: 'Хабы Богов',
              collapsed: false,
              items: [
                { text: 'Обзор Богов', link: '/gods/' },
                { text: 'Система Праны', link: '/gods/prana' },
                { text: 'Постижение (Infinitum)', link: '/gods/1_infinitum' },
                { text: 'Естество (Mater)', link: '/gods/2_mater' },
                { text: 'Расширение (Fungus)', link: '/gods/3_fungus' },
                { text: 'Окончание (Finis)', link: '/gods/4_finis' },
                { text: 'Война (Bellum)', link: '/gods/5_bellum' },
                { text: 'Космос (Cosm)', link: '/gods/6_cosm' },
                { text: 'Искажение (Distorta)', link: '/gods/7_distorta' },
                { text: 'Хаос (Ignos)', link: '/gods/8_ignos' },
                { text: 'Блокираторы Богов (Атеизм)', link: '/guide/mechanics/atheism' }
              ]
            },
            {
              text: 'Дополнительно',
              collapsed: false,
              items: [
                { text: 'Обзор кастомных предметов', link: '/guide/items/' },
                { text: 'Уникальные артефакты', link: '/guide/items/unique_items' },
                { text: 'Общие кастомные предметы', link: '/guide/items/0%20General/index' }
              ]
            }
          ]
        },
        {
          text: 'Улучшения игры',
          collapsed: false,
          items: [
            { text: 'Обзор механик', link: '/guide/mechanics/' },
            {
              text: 'Ванилла и Рецепты',
              collapsed: true,
              items: [
                { text: 'Изменения ванильных рецептов', link: '/guide/items/van/index' },
                { text: 'Декоративные предметы', link: '/guide/items/deco/index' }
              ]
            },
            {
              text: 'Измерения и Места',
              collapsed: true,
              items: [
                { text: 'Измерение Чистилище', link: '/guide/mechanics/purgatory' },
                { text: 'Места и локации', link: '/guide/places/' }
              ]
            },
            {
              text: 'Физика и Окружающий мир',
              collapsed: true,
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
              collapsed: true,
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
      ],
      '/promo/': [
        {
          items: [
            { text: 'Промо материалы', link: '/promo/' },
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
