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

// ==========================================
// КОМАНДА ПРОЕКТА
// ==========================================
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
    avatar: 'https://cdn.discordapp.com/avatars/741388029154820208/2783a22c61bdb57778bc9bbb192fab7e.webp?size=1024',
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

const BIRTHDAYS = {
  'utophii': { month: 6, day: 22 },
  'DmitriySM': { month: 1, day: 15 },
  'Mr_Marki': { month: 12, day: 6 },
  'fenyanik': { month: 8, day: 29 },
  'samikoppersi': { month: 3, day: 10 },
  'horoshay_agama': { month: 12, day: 10 },
  'gaus3099': { month: 11, day: 6 },
  'qwillwood': { month: 10, day: 23 },
  'Tarteen228': { month: 6, day: 23 },
  'BloodySupport': { month: 1, day: 13 },
  'MessageScheduler': { month: 2, day: 15 }
}

const BIRTHDAY_SETTINGS = {
  alwaysShow: false,        // true = показать у всех для теста (как будто у всех сегодня ДР)
  enableConfetti: true,     // конфетти
  previewParam: true,       // поддержка ?birthday=utophii или ?birthday=all для теста
}

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

.VPTeamMembersItem.birthday-today {
  position: relative;
  background: linear-gradient(135deg, rgba(255, 215, 0, 0.14), rgba(255, 107, 107, 0.14), rgba(77, 150, 255, 0.14));
  border: 2px solid #FFD700 !important;
  border-radius: 16px !important;
  box-shadow: 0 0 22px rgba(255, 215, 0, 0.35), 0 6px 16px rgba(0,0,0,0.12);
  transform: translateY(-3px);
  transition: all 0.35s ease;
  overflow: visible !important;
  order: -1;
}
.VPTeamMembersItem.birthday-today:hover {
  transform: translateY(-5px) scale(1.02);
  box-shadow: 0 0 32px rgba(255, 215, 0, 0.55), 0 10px 24px rgba(0,0,0,0.18);
}
.VPTeamMembersItem.birthday-today .avatar {
  position: relative;
  overflow: visible !important;
  border: 3px solid #FFD700;
  box-shadow: 0 0 18px rgba(255, 215, 0, 0.5);
}
.VPTeamMembersItem.birthday-today .profile { overflow: visible; }

.VPTeamMembersItem.birthday-soon {
  position: relative;
  border: 1.5px dashed #FFB347 !important;
  border-radius: 14px !important;
  background: linear-gradient(135deg, rgba(255, 179, 71, 0.08), rgba(255, 215, 0, 0.06));
  overflow: visible !important;
}
.VPTeamMembersItem.birthday-soon .avatar {
  overflow: visible !important;
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
  font-size: 12.5px;
  font-weight: 700;
  background: linear-gradient(90deg, #ff6b6b, #f59e0b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.3;
}

/* Конфетти */
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
  100% { transform: translateY(260px) rotate(720deg) translateX(25px); opacity: 0; }
}
`
  document.head.appendChild(style)

  const urlParams = new URLSearchParams(window.location.search)
  const previewName = urlParams.get('birthday') // ?birthday=utophii или ?birthday=all
  const today = new Date()
  today.setHours(0,0,0,0)

  function daysUntilBirthday(month, day) {
    const thisYear = new Date(today.getFullYear(), month - 1, day)
    thisYear.setHours(0, 0, 0, 0)
    let diff = Math.ceil((thisYear - today) / (1000 * 60 * 60 * 24))
    if (diff < 0) {
      const nextYear = new Date(today.getFullYear() + 1, month - 1, day)
      nextYear.setHours(0, 0, 0, 0)
      diff = Math.ceil((nextYear - today) / (1000 * 60 * 60 * 24))
    }
    return diff
  }

  function isToday(month, day) {
    return (month - 1) === today.getMonth() && day === today.getDate()
  }

  function shouldCelebrate(name, cfg) {
    if (BIRTHDAY_SETTINGS.alwaysShow) return { today: true, days: 0 }
    if (BIRTHDAY_SETTINGS.previewParam && previewName) {
      if (previewName === 'all' || previewName.toLowerCase() === name.toLowerCase()) {
        return { today: true, days: 0 }
      }
    }
    if (!cfg) return null
    const days = daysUntilBirthday(cfg.month, cfg.day)
    if (days === 0) return { today: true, days: 0 }
    if (BIRTHDAY_SETTINGS.showCountdown && days <= BIRTHDAY_SETTINGS.countdownDays && days > 0) {
      return { today: false, days }
    }
    return null
  }

  const celebrations = []

  const applyBirthdays = () => {
    let foundAny = false
    const todays = []
    const soons = []

    document.querySelectorAll('.VPTeamMembersItem').forEach((item) => {
      const nameEl = item.querySelector('.name')
      if (!nameEl) return
      const name = nameEl.textContent.trim()
      const cfg = BIRTHDAYS[name]
      const result = shouldCelebrate(name, cfg)
      if (!result) return

      foundAny = true

      if (result.today) {
        // Уже применено?
        if (item.classList.contains('birthday-today')) {
          if (!todays.includes(name)) todays.push(name)
          return
        }
        item.classList.add('birthday-today')
        todays.push(name)

        const titleEl = item.querySelector('.title')
        if (titleEl && !titleEl.dataset.birthdayToday) {
          titleEl.dataset.birthdayToday = 'true'
          const originalTitle = titleEl.textContent.trim()
          if (!item.dataset.originalTitle) item.dataset.originalTitle = originalTitle
          titleEl.innerHTML = `🎂 ${originalTitle}`
          const msg = document.createElement('span')
          msg.className = 'birthday-message'
          msg.textContent = 'Сегодня День Рождения! Поздравляем!'
          titleEl.appendChild(document.createElement('br'))
          titleEl.appendChild(msg)
        }

        if (BIRTHDAY_SETTINGS.enableConfetti && !item.querySelector('.birthday-confetti')) {
          const confettiContainer = document.createElement('div')
          confettiContainer.className = 'birthday-confetti'
          const colors = ['#FF6B6B', '#FFD93D', '#6BCB77', '#4D96FF', '#9F7AEA', '#FF8E8E']
          for (let i = 0; i < 14; i++) {
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
    return foundAny
  }

  let attempts = 0
  const interval = setInterval(() => {
    applyBirthdays()
    attempts++
    if (attempts > 25) clearInterval(interval)
  }, 300)

  const observer = new MutationObserver(() => applyBirthdays())
  observer.observe(document.body, { childList: true, subtree: true })
  setTimeout(() => observer.disconnect(), 20000)
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
