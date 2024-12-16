import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Hyze的随笔",
  description: "想到什么写什么",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '科研随笔', link: '/keyansuibi' },
      { text: '万事屋', link:'/wanshiwu'}
    ],

    sidebar: [
      {
        text: '导航',
        items: [
          { text: '科研随笔', link: '/keyansuibi' },
          { text: '万事屋', link:'/wanshiwu'}
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/PureRabi' }
    ]
  }
})
