import fs from 'fs'
import path from 'path'
import typescript from 'typescript'

const srcDir = './dist/types/src'

let tsPaths = []

let allDts = ''

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
        const sourcePath = filePath.replace('.d.ts', '.ts').replace('dist\\types\\', '')
        const [dtsContent, dtsFnContent] = fs.readFileSync(filePath, 'utf8').replace(/\/\*\*|\*\/|\*/g, '').split('export default ')
        const sourceContent = fs.readFileSync(sourcePath, 'utf8')
        const sourceContentTs = sourceContent.replace(/\/\*\*[\s\S]+\*\//, '')
        const sourceContentJs = typescript.transpileModule(sourceContentTs, {
          compilerOptions: {
            module: typescript.ModuleKind.ESNext,
            target: typescript.ScriptTarget.ESNext,
          },
        }).outputText;
        tsPaths.push({
          dtsContent: dtsContent.split('\n'),
          dtsFnContent,
          sourceContentTs,
          sourceContentJs
        })
        allDts += fs.readFileSync(filePath, 'utf8') + '\n'
        // if (filePath.includes('chunk.d.ts')) {
        // }
      }
    }
  })
}

// 调用函数开始读取-写入ts数据到tsPaths
readTSFiles(srcDir)

let str = ''
let strObj = {}
let menu = []
tsPaths.forEach(aitx => {
  const strArr = ['', '', '', '', '', '']
  const [f1, f2, f3] = aitx.dtsFnContent.match(/function (\w+)[\s\S]*\([\s\S]*\): ([\s\S]+)?;/)

  aitx.dtsContent.forEach(itx => {
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
        if (!strArr[1]) strArr[1] = [`## ${f2} \n`]
        strArr[1].push(`${itx}\n\n`)
      }
    }
  })
  // console.log(f2, strArr[0], '---')
  menu.push({
    name: strArr[0],
    link: '/' + strArr[0].replace(/\p{sc=Han}/gu, '').toLocaleLowerCase() + '#' + f2.toLocaleLowerCase(),
    text: f2 + '\n' + strArr[1][1].replace(`\n\n`, '')
  })
  strArr[1] = strArr[1].join('') + `#### 类型说明\n::: info\n\`${f1}\`\n:::\n`
  strArr.push(`#### 源码\n::: code-group\n\`\`\`Ts [TS版本]\n${aitx.sourceContentTs.replace(/(\n\s*\n)+/g, '\n')}\n\`\`\`\n\n\`\`\`Js [JS版本]\n${aitx.sourceContentJs}\n\`\`\`\n:::\n`)
  // console.log(aitx.sourceContentTs.replace(/(\n\s*\n)+/g, '\n'))
  // console.log(strArr)
  strObj[strArr[0]] = (strObj[strArr[0]] || '') + strArr.slice(1).join('')
})

Object.keys(strObj).forEach(item => {
  writeFile('./docsvite/'+ item.replace(/\p{sc=Han}/gu, '').toLocaleLowerCase() +'.md', '## ' + item + '\n' + strObj[item], '')
})
console.log('文档正文内容写入完成')
writeFile('./docsvite/.vitepress/menu.js', createdMenu(menu), '菜单内容写入完成')

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
function writeFile(path, cont, msg = '内容已成功写入到文件！') {
  fs.writeFileSync(path, cont)
  msg && console.log(msg)
}
// console.log(allDts)
console.log('写入在线运行时的类型文件')
let modulesStr = ('declare const utils = {\n' + allDts + '\n}').replaceAll('export default function ', '').replaceAll('@example', '@example\n* eg:')
fs.writeFileSync(`./docsvite/public/index.d.ts`, modulesStr)
