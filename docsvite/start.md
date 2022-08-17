## 前言
本节将帮助您从头开始在项目中安装使用 tings-utils。如果还没有可使用的项目，请自行使用vuecli、vite2等工具创建，如果您准备就绪了，请从步骤 1 开始。
::: warning 警告
警告: tings-utils目前处于早期试用状态， 尽管它已经适合开箱即用，但仍然不推荐在正式项目中使用。
:::

## 第1步：安装
终端进入到您的项目根目录

使用 npm 安装
```shell
> npm install tings-utils
```

使用 yarn 安装
```shell
> yarn add tings-utils
```

使用 pnpm 安装 （推荐）
```shell
> pnpm add tings-utils
```

## 第2步：导入
按需导入
```ts
import { getDataType } from 'tings-utils'
getDataType([]) // => Array
```
全量导入
```ts
import * as tingsUtils from 'tings-utils'
tingsUtils.getDataType([]) // => Array
```
## 使用CDN
cdn导入
```html
<!-- 指定版本 -->
<!-- <script src="https://cdn.jsdelivr.net/npm/tings-utils@0.0.25/dist/tings-utils.umd.min.js"></script> -->
<!-- 默认最新版 -->
<script src="https://cdn.jsdelivr.net/npm/tings-utils/dist/tings-utils.umd.min.js"></script>
<script>
  tingsUtils.getDataType([]) // Array
</script>
```
cdn 使用模块导入
```html
<script type="module">
  import {getDataType} from 'https://cdn.jsdelivr.net/npm/tings-utils/dist/tings-utils.es.min.js'
  getDataType([]) // Array
</script>
```
cdn 使用模块导入-importmap模式
```html
<script type="importmap">
  {
    "imports": {
      "tings-utils": "https://cdn.jsdelivr.net/npm/tings-utils/dist/tings-utils.es.min.js"
    }
  }
</script>
<script type="module">
  import {getDataType} from 'tings-utils'
  console.log(getDataType([])) // Array
</script>
```