## isRgba :tada: :100: 
判断是否是16进制hex色值
#### 参数 
- **rgba** `string` 字符串
 
#### td.ts
::: info
`isRgba(rgba: string): boolean`
:::
#### 返回 
- `boolean` 
::: tip
true | false
:::
#### 实例 
```ts
isRgba('170,187,255') // => true
```
// 支持透明度


```ts
isRgba('170,187,255,0.91') // => true
```
// 支持透明度


```ts
isRgba('170,187,266,0.91') // => false
```
// 支持透明度


```ts
isRgba('170,187,256,2') // => false
```
