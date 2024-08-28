import em from './menu.js'
import { version } from '../../package.json'
const sidebar = [
  {
    text: '开始',
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
  title: '@zstings/utils v' + version,
  description: 'javascript & typescript utils.',
  base: '/utils/',
  outDir: '../docs',
  head: [['link', { rel: 'stylesheet', href: '/utils/styles/index.css' }]],
  themeConfig: {
    socialLinks: [{ icon: 'github', link: 'https://github.com/zstings/utils/' }],
    // algolia: {
    // },
    logo: '/logo.svg',
    nav: [
      { text: 'home', link: '/' },
      { text: 'playground', link: '/playground', target: '_blank', rel: 'noreferrer' }
    ],
    sidebar,
    docFooter: {
      prev: '上一页',
      next: '下一页'
    }
  }
}
