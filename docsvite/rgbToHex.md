## rgbToHex :tada: :100: 
将rgb(a)色值转为16进制hex色值
#### 参数 
- **rgba** `string` 字符串
 
#### td.ts
::: info
`rgbToHex(rgba): string`
:::
#### 返回 
- `string` 
::: tip
字符串
:::
#### 异常 
::: danger
无法识别正确的rgba rgba参数不是正确的hex时触发
:::
#### 实例 
```ts
rgbToHex('170,187,255') // => '#aabbff'
```
// 支持透明度


```ts
rgbToHex('170,187,255,0.91') // => '#aabbffe8'
```
