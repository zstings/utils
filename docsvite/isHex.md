## isHex :tada: :100: 
判断是否是16进制hex色值
#### 参数 
- **hex** `string` 字符串
 
#### td.ts
::: info
`isHex(hex): boolean`
:::
#### 返回 
- `boolean` 
::: tip
true | false
:::
#### 实例 
```ts
isHex('#aabbcc') // => true
```
// 支持3位


```ts
isHex('#abc') // => true
```
// 支持透明度


```ts
isHex('#aabbcc8d') // => true
```
// 支持透明度


```ts
isHex('#df') // => false
```
// 支持透明度


```ts
isHex('#adg') // => false
```
