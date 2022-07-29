import url from "url"
import path from "path"
import { createRequire } from "module"
import fs from 'fs'

const data = loadJSON(getdirname() + '/data.json')

// if (!fs.existsSync(getdirname() + '/doc_vs')) {
//   fs.mkdirSync(getdirname() + '/md')
// }



function loadJSON(filepath) {
  const reg = /\S+.json$/g
  if (reg.test(filepath)) {
    const require = createRequire(import.meta.url)
    return require(filepath)
  } else {
    throw new Error("loadJSON 的参数必须是一个json文件")
  }
}

function getdirname() {
  return path.dirname(url.fileURLToPath(import.meta.url))
}

function returnTags(tag) {
  const tags = {
    '@returns': '返回',
    '@throws': '异常',
    '@author': '作者',
    '@version': '版本',
    '@example': '实例',
  }
  return tags[tag]
}


let a = ''
let menu = []
data.children.forEach(item => {
  a = ''
  const signatures = item.signatures?.[0] || []
  // 标题
  if (signatures?.name) a += `## ${signatures?.name} :tada: :100: \n`
  // 描述
  if (signatures?.comment?.summary?.[0]?.text) a += signatures?.comment?.summary?.[0]?.text + '\n'
  // 参数
  if (signatures?.parameters) {
    a += '#### 参数 \n'
    const ts = signatures?.parameters.reduce((x, y) => {
      const type = y.type.name ? `\`${y.type.name}\`` : `\`${y.type.types.map(res => res.name).join(' | ')}\``
      const name = y.flags.isOptional ? `${y.name}?` : y.name
      x += '> - ' + name + ' ' + type + '\n'
      return x
    }, '')
    a += ts
  }
  // 返回
  if (signatures?.comment?.blockTags) {
    const arr = signatures?.comment?.blockTags
    const narr = arr.reduce((x, y) => {
      const idx = x.findIndex(item => item.tag == y.tag)
      if (idx >= 0) x[idx].content.push(...y.content)
      if (idx == -1) x.push(y)
      return x
    }, [])
    narr.forEach(ite => {
      a += `#### ${returnTags(ite.tag)} \n`
      const ts = ite.tag == '@returns' ? 'tip' : ite.tag == '@throws' ? 'danger' : 'warning'
      // if (ite.content[0].text && ite.tag != '@example') a += `::: ${ts}\n${ite.content[0].text}\n:::\n`
      if (ite.content[0].text && ite.tag != '@example') {
        ite.content.forEach(item => {
          a += `::: ${ts}\n${item.text}\n:::\n`
        })
      }
      if (ite.content[0].text && ite.tag == '@example') {
        ite.content.forEach(item => {
          a += `${item.text}\n`
        })
      }
    })
  }
  menu.push({
    text: `${signatures?.name}\n${signatures?.comment?.summary?.[0]?.text}`, link: `/${signatures?.name}`
  })
  // 写入
  fs.writeFileSync(`./doc_vs/docs/${signatures?.name}.md`, a)
})

console.log('export default \n' + JSON.stringify(menu))

fs.writeFileSync(`./doc_vs/docs/.vitepress/menu.js`, 'export default \n' + JSON.stringify(menu))
