// import HtmlWorker from 'monaco-editor/esm/vs/language/html/html.worker?worker'
// import CssWorker from 'monaco-editor/esm/vs/language/css/css.worker?worker'
// import JsonWorker from 'monaco-editor/esm/vs/language/json/json.worker?worker'
// import TsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker'
// import EditorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker'
// import * as monaco from 'monaco-editor'
// import * as u from '../src/index'
// console.log(`utils函数集合：`)
// console.log(u, monaco)
// // const te = document.querySelector('textarea')

// self.MonacoEnvironment = {
//   getWorker(_, label) {
//     if (['typescript', 'javascript'].includes(label)) {
//       return new TsWorker()
//     }
//     if (['json'].includes(label)) {
//       return new JsonWorker()
//     }
//     if (['css', 'scss'].includes(label)) {
//       return new CssWorker()
//     }
//     if (['html'].includes(label)) {
//       return new HtmlWorker()
//     }
//     return new EditorWorker()
//   }
// }
// const value = `function hello() {\n  alert('Hello world!');\n}\nhello();\n//import * as u from 'http://127.0.0.1:5173/src/index.ts'`
// const myEditor = monaco.editor.create(document.getElementById('container'), {
//   value,
//   language: 'typescript',
//   automaticLayout: true,
//   moduleResolution: 'nodenext'
// })

// monaco.languages.typescript.javascriptDefaults.addExtraLib('declare http://127.0.0.1:5173/src/index.ts', 'u.js')
// // monaco.editor.createModel('import * as u from "http://127.0.0.1:5173/src/index.ts"', 'typescript', new monaco.Uri().with('http://127.0.0.1:5173/src/index.ts'))
// // console.log(monaco.editor.getModels())
// // myEditor.setModel(monaco.editor.getModels()[1])
// document.querySelector('button').onclick = () => {
//   // console.log(te.value, eval('utils.copy(1)'))
//   eval(myEditor.getValue())
//   // console.log(myEditor.getValue())
// }
export {}
