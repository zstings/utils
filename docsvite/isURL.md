## isURL :tada: :100: 
是否是url
#### 参数 
- **url** `string` 需要验证的内容，类型：string
 
#### td.ts
::: info
`isURL(url): boolean`
:::
#### 返回 
- `boolean` 
::: tip
Boolean
:::
#### 异常 
::: danger
参数必须是string 参数不是string时触发
:::
#### 实例 
```ts
isURL('https://a.b.c')
// => true
```
```ts
isURL('123')
// => false
```
