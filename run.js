import { parse } from 'comment-parser'
import { readFileSync, writeFileSync, globSync } from 'node:fs'
import { basename, dirname } from 'node:path'

// console.log(globSync('./src/**/*.ts', { exclude: ['./src/**/index.ts'] }).length)

const files = globSync('./src/**/*.ts', { exclude: ['./src/**/index.ts'] })

const menus = []
const funcs = new Map()

files.forEach(item => {
  const { str, fileName, description, category } = createMdCont(item)
  const ml = category.replace(/\p{sc=Han}/gu, '').toLocaleLowerCase()
  menus.push({ link: `/${ml}#${fileName}`, text: `${fileName}\n${description}`, category })
  if (!funcs.has(ml)) {
    funcs.set(ml, str)
  } else {
    funcs.set(ml, funcs.get(ml) + '\n' + str)
  }
})
// console.log(funcs)
funcs.forEach((item, key) => {
  writeFileSync(`./vitepress/${key}.md`, item)
})
createMenu()

function createMdCont(path) {
  const ml = basename(dirname(path))
  const fileName = basename(path, '.ts')
  let category = ''

  const sourceTs = readFileSync(`./src/${ml}/${fileName}.ts`, 'utf8')
  const sourceDTS = readFileSync(`./dist/types/src/${ml}/${fileName}.d.ts`, 'utf8')

  const tsSourceContent = sourceTs
    .replace(/\/\*\*[\s\S]+\*\//, '')
    .replace(/(\n\s*\n)+/g, '\n')
    .trim()

  const jsSourceContent = readFileSync(`./temp_code/${fileName}.ts`, 'utf-8').trim()

  const parsed = parse(sourceDTS)

  let str = `## ${fileName}\n`
  str += parsed[0].description + '\n'
  str += `#### 类型说明\n::: info\n\`${sourceDTS.match(/function (\w+)[\s\S]*\([\s\S]*\): ([\s\S]+)?;/)[0]}\`\n:::\n`
  parsed[0].tags.forEach(item => {
    if (item.tag == 'param') {
      if (!str.includes('#### 参数')) str += `#### 参数\n`
      str += `- \`${item.name}\` ${item.description}\n`
    }
    if (item.tag == 'return') {
      if (!str.includes('#### 返回值')) str += `#### 返回值\n`
      str += `::: tip \n${item.name}\n:::\n`
    }
    if (item.tag == 'throws') {
      if (!str.includes('#### 异常')) str += `#### 异常\n`
      str += `::: danger \n${item.name} ${item.description}\n:::\n`
    }
    if (item.tag == 'example') {
      if (!str.includes('#### 示例')) str += `#### 示例\n`
      item.source.forEach(itemx => {
        if (itemx.tokens.description) str += `${itemx.tokens.description}\n`
      })
    }
    if (item.tag == 'category') {
      category = item.name
    }
  })
  str += `#### 源码\n::: code-group\n\`\`\`Ts [TS版本]\n${tsSourceContent.replace(/(\n\s*\n)+/g, '\n')}\n\`\`\`\n\`\`\`Js [JS版本]\n${jsSourceContent}\n\`\`\`\n:::\n`

  // console.log(str)

  return { str, fileName, description: parsed[0].description.split(' ')[0], category }
}
function createMenu() {
  const str = menus.reduce((pre, cur) => {
    let index = pre.findIndex(item => item.text == cur.category)
    if (index == -1) {
      pre.push({ text: cur.category, items: [Object.assign(cur, { category: undefined })] })
    } else {
      pre[index].items.push(Object.assign(cur, { category: undefined }))
    }
    return pre
  }, [])
  writeFileSync('./vitepress/.vitepress/menu.js', 'export default ' + JSON.stringify(str, null, 2))
}
