import url from 'url'
import path from 'path'
import { createRequire } from 'module'
import fs from 'fs'
import * as cheerio from 'cheerio'

function getdirname() {
  return path.dirname(url.fileURLToPath(import.meta.url))
}

// 脚本所在目录
const _dirname = getdirname()
// 命令执行目录
const _pathname = path.resolve()

function createFile(path) {
  const buffer = fs.readFileSync(path)
  return String(buffer)
}
let str = ''
function arr() {
  let debounce = createFile(_pathname + '/doc/functions/debounce.html')
  const $ = cheerio.load(debounce)
  console.log($('#debounce').text())
  // str += `## debounce :tada: :100:\n`
}
arr()

// console.log(_pathname + '/doc/functions/debounce.html')
