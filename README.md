# tings-utils
js、ts 工具函数库
文档地址 [tings-utils 文档](https://qinzhongting.github.io/tings-utils/)

## 前言
本节将帮助您从头开始在项目中安装使用 tings-utils。如果还没有可使用的项目，请自行使用vuecli、vite2等工具创建，如果您准备就绪了，请从步骤 1 开始。

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
