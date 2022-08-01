module.exports = {
  root: true,
  // 启用的环境
  env: {
    // 浏览器
    browser: true,
    // node
    node: true,
    // es
    es2021: true
  },
  // 指定解析器
  parser: '@typescript-eslint/parser',
  // 解析器选项
  parserOptions: {
    parser: '@typescript-eslint/parser',
    // es版本 2021 即 es12
    ecmaVersion: 2021,
    // 设置为 "script" (默认) 或 "module"（如果你的代码是 ECMAScript 模块)。
    sourceType: 'module'
  },
  // 继承配置，外部扩展包继承配置文件的所有属性(包括rules, plugins, and language option在内)，然后通过merge合并/覆盖所有原本的配置。
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
  // plugin插件：为eslint新增一些检查规则
  plugins: ['@typescript-eslint'],
  // 内置规则集合
  rules: {
    // 允许使用any
    '@typescript-eslint/no-explicit-any': 'off',
    // 允许使用非空断言
    '@typescript-eslint/no-non-null-assertion': 'off'
  }
}
