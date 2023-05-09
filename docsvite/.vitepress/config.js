import em from './menu.js'
const sidebar = [
  {
    text: "开始",
    items: [
      {
        text: '快速开始',
        link: '/start'
      }
    ]
  }
]
sidebar.push(...em)
export default {
  title: '@zstings/utils v0.6.0',
  description: 'javascript & typescript utils.',
  base: '/utils/',
  outDir: '../docs',
  head: [
    ['link', { rel: 'stylesheet', href: '/utils/styles/index.css' }]
  ],
  markdown: {
    theme: 'material-palenight',
    lineNumbers: true
  },
  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/zstings/utils/' }
    ],
    algolia: {
    },
    // logo: '/logo.svg',
    nav: [
      { text: "home", link: "/" }
    ],
    sidebar,
    docFooter: {
      prev: '上一页',
      next: '下一页'
    }
  }
}