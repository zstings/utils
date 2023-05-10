## once :tada: :100: 
只调用一次的函数
#### 参数 
- **func** `(...params) => any` 函数
 
#### td.ts
::: info
`once(func): ((this, ...args) => void)`
:::
#### 实例 
```ts
once(function () { ... })
```
在vue2中使用


```ts
getlist: once(function () { ... })
```
