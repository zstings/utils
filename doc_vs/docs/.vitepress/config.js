module.exports = {
  title: 'tings-utils',
  base: './',
  head: [
    ['link', { rel: 'stylesheet', href: './styles/index.css' }]
  ],
  markdown: {
    theme: 'material-palenight',
    lineNumbers: true
  },
  themeConfig: {
    // logo: '/logo.svg',
    nav: [
      { text: "home", link: "/" },
      { text: "github", link: "https://github.com/qinzhongting/tings-utils/" },
    ],
    sidebar: [
      {
        text: '函数列表',
        items: [
          { text: 'isArray\n判断是否为数组', link: '/isArray' },
          { text: 'isDate\n判断是否为时间', link: '/isDate' },
          { text: 'downloadFile\n下载文件', link: '/downloadFile' },
        ]
      }
    ],
    docFooter: {
      prev: '上一页',
      next: '下一页'
    }
  }
}