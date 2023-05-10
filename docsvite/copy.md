## copy :tada: :100: 
复制文本内容
::: info
优先使用navigator.clipboard.writeText, 浏览器不支持使用时降级document.execCommand。
:::
#### 参数 
- **value** `string` 需要复制的字符串
 
#### td.ts
::: info
`copy(value): Promise<void>`
:::
#### 返回 
- `Promise` 
::: tip
Promise
:::
#### 实例 
```ts
await copy('hello')
```
