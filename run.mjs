import url from 'url'
import path from 'path'
import shell from 'shelljs'

const m1 = getdirname() + '/doc_vs/docs/.vitepress/dist'
const m2 = getdirname() + '/docs'
shell.rm('-rf', m2)
shell.cp('-R', m1, m2)

function getdirname() {
  return path.dirname(url.fileURLToPath(import.meta.url))
}
