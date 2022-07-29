import em from './menu'
module.exports = {
  title: 'tings-utils',
  description: 'JS & TS utils.',
  base: '/tings-utils/',
  outDir: '../../docs',
  head: [
    ['link', { rel: 'stylesheet', href: '/tings-utils/styles/index.css' }]
  ],
  markdown: {
    theme: 'material-palenight',
    lineNumbers: true
  },
  themeConfig: {
    algolia: {
    },
    // logo: '/logo.svg',
    nav: [
      { text: "home", link: "/" },
      { text: "github", link: "https://github.com/qinzhongting/tings-utils/" },
    ],
    sidebar: [
      {
        text: '函数列表',
        items: em
      }
    ],
    docFooter: {
      prev: '上一页',
      next: '下一页'
    }
  }
}