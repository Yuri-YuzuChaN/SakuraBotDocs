import { DefaultTheme, defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/",
  lang: "zh-Hans",
  title: "Sakura / 百合咲ミカ",
  description: "Sakura / 百合咲ミカ Bot VitePress Site",
  head: [
    [
      'link', { rel: 'icon', href: '/logo.png' }
    ],
    [
      'style', {}, `
        .vp-doc a {
          text-decoration: none;
        }
      `
    ]
  ],
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    logo: '/logo.png',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Yuri-YuzuChaN/SakuraBotDocs' }
    ],
    search: {
      provider: 'local'
    },
    footer: {
      message: '基于 VitePress 生成 | MIT 许可发布',
      copyright: '版权所有 © 2024 Yuri-YuzuChaN'
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    outline: {
      label: '页面导航'
    },
    lastUpdated: {
      text: '最后更新',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },
    nav: nav(),
    sidebar: sidebar()
  }
})


function nav(): DefaultTheme.NavItem[] {
  return [
    { text: '主页', link: '/' },
    { text: '使用', link: '/start/' },
    { 
      text: '插件列表', 
      items: [
        {
          text: '百合咲Mika', 
          items: [
            { text: 'maimai', link: '/plugins/mika/' }
          ] 
        },
        { 
          text: '基础插件', link: '/plugins/basic/'
        },
        { 
          text: '音游插件',
          items: rhythmGame()
        },
        {
          text: '公主连结', link: '/plugins/pcr/' 
        },
        {
          text: '其它插件', link: '/plugins/other/bandoristation'
        }
      ]
    },
    { 
      text: '音游插件',
      items: [
        {
          text: '百合咲Mika BOT',
          items: [
            { text: 'maimai', link: '/plugins/mika/' }
          ]
        },
        {
          text: 'Sakura BOT',
          items: rhythmGame()
        }
      ]
    },
    { 
      text: 'API', 
      items: [
        { text: 'osu!', link: '/api/osu!' },
        { text: 'maimaiDX', link: '/api/maimaiDX' }
      ]
    },
    { text: '更新说明', link: '/update'}
  ]
}


function sidebar(): DefaultTheme.Sidebar {
  return {
    '/start': [
      {
        text: '开始',
        items: [
          { text: '邀请使用前', link: '/start/'},
          { text: 'SakuraBot', link: '/start/sakura' },
          { text: '百合咲MikaBot', link: '/start/mika' }
        ]
      }
    ],
    '/plugins': [
      {
        text: '百合咲Mika',
        collapsed: true,
        items: [
          { text: 'maimai', link: '/plugins/mika/' }
        ]
      },
      {
        text: '基础插件',
        base: '/plugins/basic',
        collapsed: true,
        items: basicPlugins()
      },
      {
        text: '音游插件',
        collapsed: true,
        items: rhythmGame()
      },
      {
        text: '公主连结插件(PCR)',
        base: '/plugins/pcr',
        collapsed: true,
        items: pcrPlugins()
      },
      {
        text: '其它插件',
        base: '/plugins/other',
        collapsed: true,
        items: [
          { text: 'Bandori车站', link: '/bandoristation' },
          { text: 'CDD', link: '/cdd' },
          { text: '原神日历', link: '/genshin' },
          { text: 'Minecraft', link: '/minecraft' },
          { text: '贵族决斗', link: '/pcr_duel' },
          { text: 'RSS订阅服务', link: '/rss' },
          { text: '涩图', link: '/setu' },
          { text: '涩图评分', link: '/setuscore' }
        ]
      }
    ]
  }
}


function basicPlugins(): DefaultTheme.SidebarItem[] {
  return [
    { text: '使用说明', link: '/' },
    { text: 'BOT帮助', link: '/help' },
    { text: '入群欢迎', link: '/welcome' },
    { text: '群成员退群提醒', link: '/quit' },
    { text: '复读机', link: '/repeater' },
    { text: '消息检测器', link: '/chat' },
    { text: '消息生成器', link: '/msg-chat' },
    { text: '精致睡眠', link: '/sleep' },
    { text: '以图搜番', link: '/search-anime' },
    { text: '以图搜图', link: '/search-pic' },
    { text: '群空调', link: '/air' },
    { text: '接头霸王', link: '/kyaru' },
    { text: '龙头霸王', link: '/long' },
    { text: '骂我', link: '/mawo' },
    { text: '口臭', link: '/mute' },
    { text: 'Rua', link: '/rua' },
    { text: 'antiqks', link: '/antiqks' },
    { text: '模拟语音', link: '/speaker' },
    { text: '今日运势', link: '/fortune' },
  ]
}


function pcrPlugins(): DefaultTheme.SidebarItem[] {
  return [
    { text: '使用说明', link: '/' },
    { text: '戳一戳集卡游戏', link: '/collect-card' },
    { text: '海豹杀手', link: '/killed' },
    { text: '国服买药提醒', link: '/alert' },
    { text: '活动日历', link: '/calendar' },
    { text: '猜语音游戏', link: '/voice-game' },
    { text: '猜角色游戏', link: '/character-game' },
    { text: '猜头像游戏', link: '/icon-game' },
    { text: '切噜语', link: '/qielu' },
    { text: '抽卡', link: '/gacha' },
    { text: '签到', link: '/sign-in' },
    { text: '角色查询', link: '/search-character' },
  ]
}


function rhythmGame(): DefaultTheme.NavItemWithLink[] {
  return [
    { text: 'maimaiDX', link: '/plugins/rhythmgame/maimaiDX' },
    { text: 'osu!', link: '/plugins/rhythmgame/osu!' },
    { text: 'Arcaea', link: '/plugins/rhythmgame/Arcaea' },
    { text: 'chunithm', link: '/plugins/rhythmgame/chunithm' }
  ]
}