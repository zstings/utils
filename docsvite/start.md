## 前言

本节将帮助您从头开始在项目中安装使用 @zstings/utils。

👉 在演练场中尝试一下： <a href="/utils/playground.html" target="_blank" rel="noreferrer">playground</a>

<!-- <pathname:///playground.html> -->
<!-- ::: warning 警告
@zstings/utils目前处于早期试用状态， 尽管它已经适合开箱即用，但仍然不推荐在正式项目中使用。
::: -->

## 第1步：安装

终端进入到您的项目根目录

::: code-group

```sh [npm]
$ npm install @zstings/utils
```

```sh [pnpm]
$ pnpm add @zstings/utils
```

```sh [yarn]
$ yarn add @zstings/utils
```

```sh [bun]
$ bun add @zstings/utils
```
:::

## 第2步：导入

按需导入

```ts
import { getDataType } from '@zstings/utils'
getDataType([]) // => Array
```

全量导入

```ts
import * as utils from '@zstings/utils'
utils.getDataType([]) // => Array
```

## 使用CDN

cdn导入

```html
<!-- 指定版本 -->
<!-- <script src="https://cdn.jsdelivr.net/npm/@zstings/utils@0.4.0/dist/utils.umd.min.js"></script> -->
<!-- 默认最新版 -->
<script src="https://cdn.jsdelivr.net/npm/@zstings/utils/dist/utils.umd.min.js"></script>
<script>
  utils.getDataType([]) // Array
</script>
```

cdn 使用模块导入

```html
<script type="module">
  import { getDataType } from 'https://cdn.jsdelivr.net/npm/@zstings/utils/dist/utils.es.min.js'
  getDataType([]) // Array
</script>
```

cdn 使用模块导入-importmap模式

```html
<script type="importmap">
  {
    "imports": {
      "@zstings/utils": "https://cdn.jsdelivr.net/npm/@zstings/utils/dist/"
    }
  }
</script>
<script type="module">
  import { getDataType } from '@zstings/utils'
  console.log(getDataType([])) // Array
</script>
```

## 在deno中使用

使用deno提供的cdn

```ts
import { byteSize } from 'https://esm.sh/@zstings/utils'
console.log(byteSize('hello')) // 5
```

deno也可以使用npm模式

```ts
// import {byteSize} from "npm:@zstings/utils@0.3.1"; 指定版本
import { byteSize } from 'npm:@zstings/utils'
console.log(byteSize('hello')) // 5
```
