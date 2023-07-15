import { defaultTheme } from '@vuepress/theme-default'
import { searchPlugin } from '@vuepress/plugin-search'
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'
import { viteBundler } from 'vuepress'

export default{
    base: '/',
    host: '0.0.0.0',
    port: '5555',
    head: [
        [
            'link', { rel: 'icon', href: '/images/logo.png' }
        ]
    ],
    locales: {
        '/': {
            lang: 'zh-CN',
            title: 'Sakura Bot',
            description: '一个多功能的QQBot',
        }
    },
    theme: defaultTheme({
        colorMode: 'auto',
        logo: '/images/logo.png',
        contributors: false,
        lastUpdated: true,
        lastUpdatedText: '上次更新',
        navbar: [
            {
                text: '使用',
                link: '/start/'
            },
            {
                text: '插件列表',
                children: [
                    {
                        text: '基础插件',
                        link: '/plugins/default.md'
                    },
                    {
                        text: '音游插件',
                        children: [
                            '/plugins/rhythmgame/Arcaea.md',
                            '/plugins/rhythmgame/osu!.md',
                            '/plugins/rhythmgame/maimaiDX.md',
                            '/plugins/rhythmgame/chunithm.md'
                        ]
                    },
                    {
                        text: '其它插件',
                        children: [
                            '/plugins/other/pcr.md',
                            '/plugins/other/pcr_duel.md',
                            '/plugins/other/genshen.md',
                            '/plugins/other/setu.md',
                            '/plugins/other/cdd.md',
                            '/plugins/other/bandoristation.md',
                            '/plugins/other/rss.md',
                            '/plugins/other/minecraft.md',
                            '/plugins/other/setuscore.md'
                        ]
                    }
                ]
            },
            {
                text: '推荐插件',
                children: [
                    '/plugins/rhythmgame/Arcaea/',
                    '/plugins/rhythmgame/osu!/',
                    '/plugins/rhythmgame/maimaiDX/',
                    '/plugins/rhythmgame/chunithm/'
                ]
            },
            {
                text: 'API',
                children: [
                    {
                        text: 'API',
                        children: [
                            '/API/osu!.md',
                            '/API/Arcaea.md'
                        ]
                    }
                ]
            },
            {
                text: '更新说明',
                link: '/update.md'
            },
            {
                text: 'Github',
                link: 'https://github.com/Yuri-YuzuChaN/SakuraBotDocs/'
            }
        ],
        sidebar: {
            '/start/': [
                {
                    text: '开始',
                    link: '/start/'
                }
            ],
            '/plugins/': [
                {
                    text: '基础插件',
                    children: ['/plugins/default.md']
                },
                {
                    text: '音游插件',
                    // collapsible: true,
                    children: [
                        '/plugins/rhythmgame/Arcaea.md',
                        '/plugins/rhythmgame/osu!.md',
                        '/plugins/rhythmgame/maimaiDX.md',
                        '/plugins/rhythmgame/chunithm.md'
                    ]
                },
                {
                    text: '其他插件',
                    // collapsible: true,
                    children: [
                        '/plugins/other/pcr.md',
                        '/plugins/other/pcr_duel.md',
                        '/plugins/other/genshen.md',
                        '/plugins/other/setu.md',
                        '/plugins/other/cdd.md',
                        '/plugins/other/bandoristation.md',
                        '/plugins/other/rss.md',
                        '/plugins/other/minecraft.md',
                        '/plugins/other/setuscore.md'
                    ]
                }
            ],
            '/API/': [
                {
                    text: 'API',
                    children: [
                        '/API/osu!.md',
                        '/API/Arcaea.md'
                    ]
                }
            ]
        }
    }),
    plugins: [
        searchPlugin({
            locales: {
                '/': {
                    placeholder: '搜索'
                }
            },
            maxSuggestions: 10
        }),
        backToTopPlugin()
    ],
    bundler: viteBundler({
        vuePluginOptions: {
            template: {
                compilerOptions: {
                  isCustomElement: (tag) => tag === 'center',
                },
            }
        }
    })
}
