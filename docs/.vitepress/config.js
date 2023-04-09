import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "中国象棋",
  description: "一个象棋学习网站",
  outDir: '../dist',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '基本杀法', link: '/kill/0001' },
      { text: '开局', link: '/opening/0001' }
    ],

    sidebar: [
      {
        text: '基本杀法',
        items: [
          { text: '铁门栓', link: '/kill/0001' },
          { text: '双车错', link: '/kill/0002' },
          { text: '白脸将', link: '/kill/0003' },
          { text: '夹车炮', link: '/kill/0004' },
        ]
      },
      {
        text: '开局',
        items: [
          { text: '布局的四大体系', link: '/opening/0001' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
