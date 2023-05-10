## removeHTML :tada: :100: 
移除字符串中的html标签
#### 参数 
- **str** `any` 传入参数, 如果参数不是字符串，会先调用toString方法
 
#### td.ts
::: info
`removeHTML(str): string`
:::
#### 返回 
- `string` 
::: tip
字符串
:::
#### 实例 
```ts
removeHTML('<p>这是<em>一个</em>段落。</p>') // => 这是一个段落。
```
// 转义符也会被去除


```ts
removeHTML('<p>这是<em>一个</em>段落。&nbsp;</p>') // => 这是一个段落。
```
参数不是字符串，会先调用toString方法


```ts
removeHTML(true) // 'true'
```
