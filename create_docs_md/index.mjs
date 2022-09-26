import url from 'url'
import path from 'path'
import { createRequire } from 'module'
import fs from 'fs'

// 脚本所在目录
const _dirname = getdirname()
// 命令执行目录
const _pathname = path.resolve()

import * as cheerio from 'cheerio'

// let tdParametersArr = []

function createFile(path) {
  const buffer = fs.readFileSync(path)
  return String(buffer)
}

const data = loadJSON(_dirname + '/data.json')

function loadJSON(filepath) {
  const reg = /\S+.json$/g
  if (reg.test(filepath)) {
    const require = createRequire(import.meta.url)
    return require(filepath)
  } else {
    throw new Error('loadJSON 的参数必须是一个json文件')
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
    '@example': '实例'
  }
  return tags[tag]
}

// function parameters(params, gk) {
//   // 在json中获取
//   params.forEach(item => {
//     let type = null
//     if (item.type.type == 'reflection') {
//       type = item.type.declaration.signatures ? `() => ${item.type.declaration.signatures[0].type.name}` : '映射'
//     }
//     if (item.type.type == 'union') type = item.type.types.map(res => (res.name || res.value) + '').join(' | ')
//     if (['intrinsic', 'reference'].includes(item.type.type)) type = item.type.name
//     let ms = item?.comment?.summary?.[0]?.text
//     const name = item.flags.isOptional ? `${item.name}?` : item.name
//     str += `${gk || ''}- ${name} \`${type}\` ${ms} \n`

//     if (item.type.type == 'reflection' && item.type.declaration.children) {
//       parameters(item.type.declaration.children, '\t')
//     }
//   })
// }

function parameters($) {
  const dom = $('.tsd-parameter-list').eq(0)
  const li = dom.children('li')
  function fil(doms, gk = '') {
    $(doms).each((i, item) => {
      let title = $(item)
        .children('h5')
        .text()
        .replace(/Optional (\w+):/, '$1?:')
        .replace('Optional ', '')
      title = title.replace(':', '#').split('#')
      title = title.map(ite => {
        ite = ite.trim()
        if (ite.startsWith('(') && ite.endsWith(')')) ite = ite.slice(1, -1)
        return ite
      })
      const comment = $(item).children('.tsd-comment.tsd-typography')?.text() || ''
      str += `${gk || ''}- **${title[0]}** \`${title[1]}\` ${comment} \n`
      const children = $(item).find('.tsd-parameter')
      if (children.length > 0) fil(children, '\t')
    })
  }
  fil(li)
}

function returnsTypes(types) {
  if (!types) return undefined
  let type = null
  if (types.type == 'reflection') type = '映射'
  if (types.type == 'union') type = types.types.map(res => (res.name || res.value) + '').join(' | ')
  if (['intrinsic', 'reference'].includes(types.type)) type = types.name
  return type
}

// function tdParameters(td) {
//   try {
//     td = td.match(/\(([\s\S]+)\)/)[1]
//     td = td.split(',').filter(item => !item.trim().startsWith('option'))
//     td = td.map(item => item.trim().replace(':', '#').split('#'))
//     td = td.map(item => {
//       item[1] = item[1].trim()
//       if (item[1].startsWith('(') && item[1].endsWith(')')) {
//         item[1] = item[1].slice(1, -1)
//       }
//       return item
//     })
//     tdParametersArr = td
//   } catch (err) {
//     tdParametersArr = []
//   }
// }

let str = ''
// let menu = []
data.children.forEach(item => {
  str = ''
  const signatures = item.signatures?.[0] || []
  const dom = createFile(_pathname + `/doc/functions/${signatures?.name}.html`)
  const $ = cheerio.load(dom)
  const td = $(`#${signatures?.name}`).text()
  // 标题
  if (signatures?.name) str += `## ${signatures?.name} :tada: :100: \n`
  // 描述
  if (signatures?.comment?.summary?.[0]?.text) str += signatures?.comment?.summary?.[0]?.text + '\n'
  // 参数
  if (signatures?.parameters) {
    str += '#### 参数 \n'
    parameters($)
  }
  // td.ts
  if (td) str += `#### td.ts\n::: info\n\`${td}\`\n:::\n`
  // 返回
  if (signatures?.comment?.blockTags) {
    const arr = signatures?.comment?.blockTags
    // 重复项合并
    const narr = arr.reduce((x, y) => {
      const idx = x.findIndex(item => item.tag == y.tag)
      if (idx >= 0) x[idx].content.push(...y.content)
      if (idx == -1) x.push(y)
      return x
    }, [])
    narr.forEach(ite => {
      str += `#### ${returnTags(ite.tag)} \n`
      if (ite.tag == '@returns' && returnsTypes(signatures?.type)) str += `- \`${returnsTypes(signatures?.type)}\` \n`
      const ts = ite.tag == '@returns' ? 'tip' : ite.tag == '@throws' ? 'danger' : 'warning'
      if (ite.content[0].text && ite.tag != '@example') {
        ite.content.forEach(item => {
          str += `::: ${ts}\n${item.text}\n:::\n`
        })
      }
      if (ite.content[0].text && ite.tag == '@example') {
        ite.content.forEach(item => {
          const text = item.kind == 'text' ? item.text.replace(/\n/g, '\n\n') : item.text
          str += `${text}\n`
        })
      }
    })
  }
  // menu.push({
  //   text: `${signatures?.name}\n${signatures?.comment?.summary?.[0]?.text}`,
  //   link: `/${signatures?.name}`
  // })
  // 写入
  fs.writeFileSync(`./docsvite/${signatures?.name}.md`, str)
})

function createMenu() {
  let categories = data.groups[0].categories
  categories = categoriesSort(categories)
  return categories.map(item => {
    item.text = item.title
    delete item.title
    item.items = item.children.map(ite => {
      const datas = data.children.filter(itx => itx.id == ite)[0]

      return {
        text: `${datas.name}\n${datas.signatures?.[0].comment?.summary?.[0]?.text}`,
        link: `/${datas.name}`
      }
    })
    delete item.children
    return item
  })
}
function categoriesSort(categories) {
  const sort = [
    '字符串String',
    '数字Number',
    '数组Array',
    '对象Object',
    '函数Function',
    '时间Date',
    '设备Device',
    'URL',
    '工具Util'
  ]
  const sortArr = []
  sort.forEach(item => {
    sortArr.push(categories.find(el => el.title == item))
  })
  return sortArr
}

fs.writeFileSync(`./docsvite/.vitepress/menu.js`, 'export default \n' + JSON.stringify(createMenu()))
