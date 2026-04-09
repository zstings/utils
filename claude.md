# @zstings/utils 项目指南

> 一个轻量级、零依赖的 TypeScript 工具函数库

## 项目概述

`@zstings/utils` 是一个现代化的 JavaScript/TypeScript 工具函数库，提供 100+ 个常用工具函数，涵盖数组、对象、字符串、日期、URL、颜色、设备检测等多个领域。

### 核心特性

- **零依赖** - 无第三方运行时依赖，体积小巧
- **TypeScript 原生** - 完整的类型定义和类型推导
- **Tree-shakable** - 支持 ES Module，按需引入
- **100% 测试覆盖** - 所有函数经过完整测试
- **双格式输出** - 同时支持 ESM 和 UMD

### 技术栈

| 类别 | 技术 |
|------|------|
| 语言 | TypeScript 5.9 |
| 构建 | Vite 7.2 |
| 测试 | Vitest 4.0 + happy-dom |
| 文档 | VitePress 1.6 |
| 代码质量 | ESLint 9 + Prettier 3 |
| 包管理 | pnpm |

## 项目结构

```
utils/
├── src/                    # 源代码
│   ├── index.ts            # 主入口，导出所有函数
│   ├── array/              # 数组工具
│   ├── color/              # 颜色处理
│   ├── common/             # 通用工具
│   ├── date/               # 日期处理
│   ├── device/             # 设备检测
│   ├── dom/                # DOM 操作
│   ├── function/           # 函数工具（防抖/节流）
│   ├── number/             # 数字处理
│   ├── object/             # 对象工具
│   ├── string/             # 字符串处理
│   ├── url/                # URL 处理
│   ├── util/               # 杂项工具
│   └── verify/             # 类型验证
├── test/                   # 测试文件
├── vitepress/              # 文档站点
├── dist/                   # 构建产物
│   ├── utils.es.js         # ES Module
│   ├── utils.umd.js        # UMD 格式
│   └── types/              # 类型声明
└── coverage/               # 测试覆盖率报告
```

## 开发指南

### 环境准备

```bash
# 安装依赖（推荐使用 pnpm）
pnpm install

# 或使用 npm
npm install
```

### 常用命令

```bash
# 开发模式 - 启动开发服务器
pnpm dev

# 运行测试
pnpm test

# 测试覆盖率
pnpm coverage

# 代码检查
pnpm lint

# 构建项目
pnpm build

# 文档开发
pnpm docs:dev

# 文档构建
pnpm docs:build
```

### 构建流程

完整的 `pnpm build` 流程：

1. `vite build` - 构建 ES 和 UMD 两种格式
2. `tsc` - 生成类型声明文件
3. `tsc-alias` - 处理路径别名
4. `node run.js` - 自动生成 API 文档
5. `vitepress build` - 构建文档站点
6. `node deploy.js` - 部署到 GitHub Pages

## 添加新函数

### 步骤 1：创建函数文件

在对应模块目录下创建文件，例如 `src/string/reverse.ts`：

```typescript
/**
 * 反转字符串
 * @param str - 要反转的字符串
 * @returns 反转后的字符串
 * @category String
 * @example
 * ```ts
 * reverse('hello') // => 'olleh'
 * ```
 */
export default function reverse(str: string): string {
  return str.split('').reverse().join('')
}
```

### 步骤 2：导出函数

在 `src/index.ts` 中添加导出：

```typescript
export { default as reverse } from './string/reverse'
```

### 步骤 3：编写测试

在 `test/string.test.ts` 中添加测试：

```typescript
describe('reverse', () => {
  it('should reverse a string', () => {
    expect(reverse('hello')).toBe('olleh')
    expect(reverse('')).toBe('')
    expect(reverse('a')).toBe('a')
  })
})
```

### 步骤 4：验证

```bash
# 运行测试
pnpm test

# 检查覆盖率
pnpm coverage
```

## 代码规范

### JSDoc 注释规范

每个函数必须包含完整的 JSDoc 注释：

```typescript
/**
 * 函数简短描述
 * @param paramName - 参数说明
 * @param [optionalParam] - 可选参数说明
 * @returns 返回值说明
 * @throws {ErrorType} 异常说明（如有）
 * @category CategoryName
 * @example
 * ```ts
 * functionName('arg') // => 'result'
 * ```
 */
```

### 目录分类

| 目录 | 用途 | 示例函数 |
|------|------|----------|
| `array/` | 数组操作 | chunk, unique, compact |
| `object/` | 对象操作 | pick, omit, assign |
| `string/` | 字符串处理 | upperFirst, mask |
| `number/` | 数字处理 | toFixed, padInt |
| `date/` | 日期时间 | formats, howLongAgo |
| `url/` | URL 处理 | getUrlParam, qsParse |
| `verify/` | 类型验证 | isArray, isObject |
| `device/` | 设备检测 | isMobile, isWeixin |
| `function/` | 函数工具 | debounce, throttle |
| `color/` | 颜色处理 | hexToRgb, randomHex |
| `dom/` | DOM 操作 | launchFullscreen |
| `util/` | 杂项工具 | deepClone, getUUID |
| `common/` | 通用工具 | typeOf |

### TypeScript 规范

- 启用严格模式 (`strict: true`)
- 使用 ES Module 导出
- 每个函数一个文件，使用默认导出
- 路径别名：`@/*` 指向 `src/*`

### 测试规范

- 测试文件放在 `test/` 目录
- 文件命名：`{module}.test.ts`
- 使用 `describe` + `it` 结构
- 目标覆盖率：100%

## 函数模块详解

### 数组模块 (array/)

```typescript
chunk(array, size)        // 数组拆分
compact(array)            // 移除假值
unique(array)             // 数组去重
fromPairs(pairs)          // 键值对转对象
```

### 对象模块 (object/)

```typescript
pick(obj, keys)           // 选取属性
omit(obj, keys)           // 省略属性
assign(target, ...sources) // 对象合并
hasOwn(obj, key)          // 自有属性判断
```

### 字符串模块 (string/)

```typescript
upperFirst(str)           // 首字母大写
byteSize(str)             // 字节大小
mask(str, start, end)     // 字符串遮罩
removeHTML(str)           // 移除 HTML 标签
```

### 日期模块 (date/)

```typescript
formats(date, format)     // 日期格式化
howLongAgo(date)          // 相对时间
getMonthDays(year, month) // 月份天数
timeStamp(date)           // 时间戳转换
```

### URL 模块 (url/)

```typescript
getUrlParam(url, key)     // 获取 URL 参数
qsParse(str)              // 查询字符串解析
qsStringify(obj)          // 查询字符串序列化
isURL(str)                // URL 有效性判断
```

### 验证模块 (verify/)

```typescript
isArray(val)              // 判断数组
isObject(val)             // 判断对象
isString(val)             // 判断字符串
isNumber(val)             // 判断数字
isPhone(val)              // 判断手机号
isEmptyObject(val)        // 判断空对象
```

### 设备模块 (device/)

```typescript
isMobile()                // 判断移动设备
isWeixin()                // 判断微信环境
isAndroid()               // 判断 Android
isIOS()                   // 判断 iOS
```

### 函数工具模块 (function/)

```typescript
debounce(fn, delay)       // 防抖
throttle(fn, interval)    // 节流
once(fn)                  // 单次执行
```

## 使用方式

### NPM 安装

```bash
npm install @zstings/utils
# 或
pnpm add @zstings/utils
```

### ES Module

```typescript
import { debounce, throttle, isMobile } from '@zstings/utils'

debounce(fn, 300)
throttle(fn, 100)
if (isMobile()) { /* ... */ }
```

### UMD / Script 标签

```html
<script src="https://unpkg.com/@zstings/utils/dist/utils.umd.js"></script>
<script>
  const { debounce, throttle } = utils
</script>
```

### CDN

```typescript
// jsDelivr
import { debounce } from 'https://cdn.jsdelivr.net/npm/@zstings/utils/dist/utils.es.js'

// esm.sh (Deno)
import { debounce } from 'https://esm.sh/@zstings/utils'
```

## 文档与资源

- **在线文档**: https://zstings.github.io/utils/
- **Playground**: https://zstings.github.io/utils/playground.html
- **GitHub**: https://github.com/zstings/utils
- **NPM**: https://www.npmjs.com/package/@zstings/utils

## 发布流程

1. 更新版本号 (`package.json`)
2. 运行完整构建 (`pnpm build`)
3. 运行测试确保通过 (`pnpm test`)
4. 发布到 NPM (`npm publish --access public`)

## 常见问题

### Q: 如何只引入需要的函数？

A: 项目支持 Tree-shaking，只需正常导入即可：

```typescript
import { debounce } from '@zstings/utils'
```

### Q: 如何在 Deno 中使用？

A: 使用 esm.sh CDN：

```typescript
import { debounce } from 'https://esm.sh/@zstings/utils'
```

### Q: 测试覆盖率不达标怎么办？

A: 运行 `pnpm coverage` 查看详细报告，为未覆盖的分支添加测试用例。

### Q: 如何调试文档？

A: 运行 `pnpm docs:dev` 启动文档开发服务器，支持热更新。

## 贡献指南

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/new-function`)
3. 添加函数和测试
4. 确保测试通过且覆盖率 100%
5. 提交 PR

## 许可证

MIT License - 详见 [LICENSE](./LICENSE) 文件
