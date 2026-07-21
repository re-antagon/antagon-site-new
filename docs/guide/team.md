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
`
document.head.appendChild(style)

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
