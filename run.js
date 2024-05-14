// const fs = require('fs')
// const path = require('path')
// import url from 'url'
import fs from 'fs'
import path from 'path'

const srcDir = './dist/types/src'

let content = ''

// 递归函数，获取目录下所有.ts文件的内容
function readTSFiles(dir) {
  // 读取目录
  const files = fs.readdirSync(dir)

  // 遍历目录中的文件和子目录
  files.forEach(file => {
    const filePath = path.join(dir, file)
    const stats = fs.statSync(filePath)

    // 如果是目录，递归调用该函数
    if (stats.isDirectory()) {
      readTSFiles(filePath)
    } else {
      // 如果是.ts文件，读取内容并输出
      if (path.extname(filePath) == '.ts' && !filePath.includes('index.d.ts')) {
        content += fs.readFileSync(filePath, 'utf8')
      }
    }
  })
}

// 调用函数开始读取
readTSFiles(srcDir)

const arr = content.match(/\/\*\*[\s\S]+?\/\*\*/g).map(it => {
  const items = it.replace(/\/\*\*|\*\/|\*/g, '').split('export declare function ')
  items[0] = items[0].split('\n')
  return items
})

let str = ''
let strObj = {}
let menu = []
arr.forEach(aitx => {
  const strArr = ['', '', '', '', '', '']
  const [f1, f2, f3] = aitx[1].match(/(\w+)[\s\S]*\([\s\S]*\): ([\s\S]+)?;/)

  aitx[0].forEach(itx => {
    itx = itx.trim()
    if (itx) {
      if (itx.includes('@param')) {
        if (!strArr[2].includes('#### 参数')) strArr[2] = '#### 参数\n'
        strArr[2] += itx.replace('@param', '-') + '\n'
      } else if (itx.includes('@return')) {
        if (!strArr[3].includes('#### 返回')) strArr[3] = '#### 返回\n'
        strArr[3] += `- \`${f3}\`\n::: tip\n${itx.replace('@return ', '')}\n:::\n`
      } else if (itx.includes('@throws')) {
        if (!strArr[4].includes('#### 异常')) strArr[4] = '#### 异常\n'
        strArr[4] += `::: danger\n${itx.replace('@throws ', '')}\n:::\n`
      } else if (itx.includes('@category')) {
        strArr[0] += itx.replace('@category ', '')
      } else if (itx.includes('@example')) {
        if (!strArr[5].includes('#### 示例')) strArr[5] = itx.replace('@example', '#### 示例 \n')
      } else if (strArr[5].includes('#### 示例')) {
        strArr[5] += itx + '\n'
      } else {
        if (!strArr[1].includes(f2)) strArr[1] = `## ${f2} :tada: :100:\n`
        strArr[1] += `${itx}\n`
      }
    }
  })
  menu.push({
    name: strArr[0],
    link: '/functions#' + f2.toLocaleLowerCase(),
    text: f2 + '\n' + strArr[1].replace(`## ${f2} :tada: :100:\n`, '').replace('\n', '')
  })
  strArr[1] += `#### 类型说明\n::: info\n\`${f1}\`\n:::\n`
  strObj[strArr[0]] = (strObj[strArr[0]] || '') + strArr.slice(1).join('')
})

Object.keys(strObj).forEach(item => {
  str += '## ' + item + '\n' + strObj[item]
})
writeFile('./docsvite/functions.md', str)
writeFile('./docsvite/.vitepress/menu.js', createdMenu(menu))
// console.log(str, menu)

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
    '颜色Color',
    '浏览器Dom',
    '工具Util'
  ]
  const sortArr = []
  sort.forEach(item => {
    sortArr.push(categories.find(el => el.title == item))
  })
  return sortArr
}

function createdMenu(menu) {
  return (
    'export default \n' +
    JSON.stringify(
      menu.reduce((x, y) => {
        const { name, ...args } = y
        const idx = x.findIndex(z => z.text == name)
        if (idx == -1) {
          x.push({
            text: name,
            items: [args]
          })
        } else {
          x[idx].items.push(args)
        }
        return x
      }, [])
    )
  )
}

// 将文本内容写入文件
function writeFile(path, cont) {
  fs.writeFile(path, cont, err => {
    if (err) {
      console.error('写入文件时出错：', err)
      return
    }
    console.log('内容已成功写入到文件！')
  })
}

console.log('写入在线运行时的类型文件')
let modulesStr = content
  .replaceAll('export declare function ', '')
  .replace(/import[\s\S]+?\n/g, '')
  .replaceAll('@example', '@example\n* eg:')
fs.writeFileSync(`./docsvite/public/index.d.ts`, modulesStr)
