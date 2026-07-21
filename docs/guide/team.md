---
layout: page
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
  VPTeamPageSection
} from 'vitepress/theme'
import { onMounted } from 'vue'

const coreMembers = [
  {
    avatar: 'https://cdn.discordapp.com/avatars/590069040215490579/782808560f96b637734bebe373f9389a.webp?size=1024',
    name: 'DmitriySM',
    title: 'Создатель сервера',
    links: [
      { icon: 'discord', link: 'https://discord.com/users/590069040215490579' }
    ]
  }
]

const moderators = [
  {
    avatar: 'https://cdn.discordapp.com/avatars/790152454398410762/7bb1927281eda5c3b487f3e38eea4380.webp?size=1024',
    name: 'Mr_Marki',
    title: 'Модератор, Билдер',
    links: [
      { icon: 'discord', link: 'https://discord.com/users/790152454398410762' }
    ]
  },
  {
    avatar: 'https://cdn.discordapp.com/avatars/390564839950647297/151afcbd23a7cb50cdefeb2bdd2995ea.webp?size=1024',
    name: 'fenyanik',
    title: 'Хостер, Чат-менеджер',
    links: [
      { icon: 'discord', link: 'https://discord.com/users/390564839950647297' }
    ]
  },
  {
    avatar: 'https://cdn.discordapp.com/avatars/1221055867634319444/4043c7bd49b9afa1c6b5208292156c4f.webp?size=1024',
    name: 'samikoppersi',
    title: 'Ивент-мейкер, Чат-менеджер',
    links: [
      { icon: 'discord', link: 'https://discord.com/users/1221055867634319444' }
    ]
  }
]

const builders = [
  {
    avatar: 'https://cdn.discordapp.com/avatars/953699199248130088/f0757f132f6939f5d8e15cec0f5def6e.webp?size=1024',
    name: 'horoshay_agama',
    title: 'Билдер',
    links: [
      { icon: 'discord', link: 'https://discord.com/users/953699199248130088' }
    ]
  },
  {
    avatar: 'https://cdn.discordapp.com/avatars/778132305297539092/dee6553c1990089330fe6ad355c4b6fd.webp?size=1024',
    name: 'gaus3099',
    title: 'Билдер',
    links: [
      { icon: 'discord', link: 'https://discord.com/users/778132305297539092' }
    ]
  },
  {
    avatar: 'https://cdn.discordapp.com/avatars/741388029154820208/5c386c315337799ee68c66659f33a475.webp?size=1024',
    name: 'qwillwood',
    title: 'Билдер',
    links: [
      { icon: 'discord', link: 'https://discord.com/users/741388029154820208' }
    ]
  }
]

const artifactor = [
  {
    avatar: 'https://cdn.discordapp.com/avatars/590069040215490579/782808560f96b637734bebe373f9389a.webp?size=1024',
    name: 'DmitriySM',
    title: 'Главный артефактор',
    links: [
      { icon: 'discord', link: 'https://discord.com/users/590069040215490579' }
    ]
  },
  {
    avatar: 'https://cdn.discordapp.com/avatars/993544184659181661/0adb4bca1ed5a4dfd419682ddc0e023b.webp?size=1024',
    name: 'Tarteen228',
    title: 'Артефактор',
    links: [
      { icon: 'discord', link: 'https://discord.com/users/993544184659181661' }
    ]
  }
]

const other = [
  {
    avatar: 'https://cdn.discordapp.com/avatars/348091015103643648/f1e2af49478a5d9f5d83499b7a9df46c.webp?size=1024',
    name: 'BloodySupport',
    title: 'Это я(Разносторонняя личность)',
    links: [
      { icon: 'discord', link: 'https://discord.com/users/348091015103643648' }
    ]
  },
  {
    avatar: 'https://cdn.discordapp.com/avatars/782549536701677568/6136f3ae2c2a56d6d1ae8fedfb5d72e2.webp?size=1024',
    name: 'utophii',
    title: 'Технический администратор',
    links: [
      { icon: 'discord', link: 'https://discord.com/users/782549536701677568' }
    ]
  },
  {
    avatar: 'https://cdn.discordapp.com/avatars/810918366045798451/2e0fd5a14b0407cf6eed3039dc562953.webp?size=1024',
    name: 'MessageScheduler',
    title: 'Легенда..',
    links: [
      { icon: 'discord', link: 'https://discord.com/users/810918366045798451' }
    ]
  }
]

onMounted(() => {
  const style = document.createElement('style')
  style.textContent = `
.VPTeamPage[data-v-5f7da39d] {
    margin: 0px 0;
}
.VPTeamPageTitle[data-v-baf690b4] {
    padding: 48px 64px 48px;
}
.VPTeamMembers .avatar {
    overflow: hidden;
}
.VPTeamMembers .avatar img {
    width: 100% !important;
    height: 100% !important;
    object-fit: cover !important;
    object-position: center !important;
}

.VPTeamMembersItem.birthday-utophii {
  position: relative;
  background: linear-gradient(135deg, rgba(255, 215, 0, 0.12), rgba(255, 107, 107, 0.12), rgba(77, 150, 255, 0.12));
  border: 2px solid #FFD700 !important;
  border-radius: 16px !important;
  box-shadow: 0 0 20px rgba(255, 215, 0, 0.3), 0 4px 12px rgba(0,0,0,0.1);
  transform: translateY(-2px);
  transition: all 0.3s ease;
  overflow: visible !important;
}

.VPTeamMembersItem.birthday-utophii:hover {
  transform: translateY(-4px) scale(1.02);
  box-shadow: 0 0 30px rgba(255, 215, 0, 0.5), 0 8px 20px rgba(0,0,0,0.15);
}

.VPTeamMembersItem.birthday-utophii .avatar {
  position: relative;
  overflow: visible !important;
  border: 3px solid #FFD700;
  box-shadow: 0 0 15px rgba(255, 215, 0, 0.4);
}

.VPTeamMembersItem.birthday-utophii .profile {
  overflow: visible;
}

@keyframes birthday-gradient {
  0% { background-position: 0% 50%; }
  100% { background-position: 200% 50%; }
}

@keyframes birthday-pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

.birthday-message {
  display: block;
  margin-top: 6px;
  font-size: 13px;
  font-weight: 600;
  background: linear-gradient(90deg, #ff6b6b, #f59e0b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Конфетти на карточке */
.birthday-confetti {
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
  border-radius: 16px;
  z-index: 1;
}

.confetti-piece {
  position: absolute;
  width: 8px;
  height: 8px;
  top: -10px;
  animation: confetti-fall linear infinite;
}

@keyframes confetti-fall {
  0% { transform: translateY(-10px) rotate(0deg) translateX(0); opacity: 1; }
  100% { transform: translateY(250px) rotate(720deg) translateX(20px); opacity: 0; }
}

/* Тортик в титуле */
.birthday-title {
  position: relative;
}
`
  document.head.appendChild(style)

  const BIRTHDAY_MONTH = 6 // Июль (0 = Январь)
  const BIRTHDAY_DAY = 22
  const alwaysShow = false // <- поставь false чтобы показывать только в день рождения

  const today = new Date()
  const isBirthdayToday = today.getMonth() === BIRTHDAY_MONTH && today.getDate() === BIRTHDAY_DAY
  const shouldShow = alwaysShow || isBirthdayToday

  if (!shouldShow) return

  const applyBirthday = () => {
    let found = false
    document.querySelectorAll('.VPTeamMembersItem').forEach((item) => {
      const nameEl = item.querySelector('.name')
      if (!nameEl) return
      const name = nameEl.textContent.trim()
      if (name === 'utophii') {
        found = true
        if (item.classList.contains('birthday-utophii')) return

        item.classList.add('birthday-utophii')

        // Меняем тайтл
        const titleEl = item.querySelector('.title')
        if (titleEl && !titleEl.dataset.birthday) {
          titleEl.dataset.birthday = 'true'
          titleEl.innerHTML = '🎂 Технический администратор'
          // Сообщение под титулом
          const msg = document.createElement('span')
          msg.className = 'birthday-message'
          msg.textContent = 'Сегодня День Рождения! Поздравляем!'
          titleEl.appendChild(document.createElement('br'))
          titleEl.appendChild(msg)
        }

        // Конфетти
        if (!item.querySelector('.birthday-confetti')) {
          const confettiContainer = document.createElement('div')
          confettiContainer.className = 'birthday-confetti'
          const colors = ['#FF6B6B', '#FFD93D', '#6BCB77', '#4D96FF', '#9F7AEA', '#FF8E8E']
          for (let i = 0; i < 12; i++) {
            const piece = document.createElement('div')
            piece.className = 'confetti-piece'
            piece.style.left = Math.random() * 100 + '%'
            piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
            piece.style.animationDelay = (Math.random() * 3) + 's'
            piece.style.animationDuration = (2 + Math.random() * 3) + 's'
            piece.style.transform = 'rotate(' + (Math.random() * 360) + 'deg)'
            if (Math.random() > 0.5) piece.style.borderRadius = '50%'
            confettiContainer.appendChild(piece)
          }
          item.appendChild(confettiContainer)
        }
      }
    })
    return found
  }

  // Пробуем несколько раз, т.к. VitePress рендерит асинхронно
  let attempts = 0
  const interval = setInterval(() => {
    const found = applyBirthday()
    attempts++
    if (found || attempts > 20) clearInterval(interval)
  }, 300)

  // Наблюдатель на изменения DOM
  const observer = new MutationObserver(() => applyBirthday())
  observer.observe(document.body, { childList: true, subtree: true })
  setTimeout(() => observer.disconnect(), 15000)
})
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>Наша Команда</template>
    <template #lead>
      Познакомьтесь с командой, которая делает Re:Antagon особенным!
    </template>
  </VPTeamPageTitle>

  <VPTeamPageSection>
    <template #title>Основная команда</template>
    <template #lead>Основатели и руководители проекта.</template>
    <template #members>
      <VPTeamMembers size="medium" :members="coreMembers" />
    </template>
  </VPTeamPageSection>

  <VPTeamPageSection>
    <template #title>Модераторы</template>
    <template #lead>Наши модераторы помогают поддерживать порядок и делают сервер безопасным и приятным местом для всех.</template>
    <template #members>
      <VPTeamMembers size="small" :members="moderators" />
    </template>
  </VPTeamPageSection>

  <VPTeamPageSection>
    <template #title>Билдеры</template>
    <template #lead>С помощью билдеров появляются замечательный мир, подземелья и биомы.</template>
    <template #members>
      <VPTeamMembers size="small" :members="builders" />
    </template>
  </VPTeamPageSection>

  <VPTeamPageSection>
    <template #title>Артефакторы</template>
    <template #lead>Благодаря артефакторам появляются подземелья, мобы и предметы на сервере.</template>
    <template #members>
      <VPTeamMembers size="small" :members="artifactor" />
    </template>
  </VPTeamPageSection>

  <VPTeamPageSection>
    <template #title>Отдельное спасибо ❤️</template>
    <template #lead>В этом списке находятся участники разных должностей.</template>
    <template #members>
      <VPTeamMembers size="small" :members="other" />
    </template>
  </VPTeamPageSection>

  <VPTeamPageSection>
  </VPTeamPageSection>
</VPTeamPage>
