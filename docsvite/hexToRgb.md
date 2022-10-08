## hexToRgb :tada: :100: 
将16进制hex色值转为rgb(a)色值
#### 参数 
- **hex** `string` 字符串
 
#### td.ts
::: info
`hexToRgb(hex: string): string`
:::
#### 返回 
- `string` 
::: tip
字符串
:::
#### 异常 
::: danger
无法识别正确的hex hex参数不是正确的hex时触发
:::
#### 实例 
```ts
hexToRgb('#aabbcc') // => '170,187,204'
```
// 支持透明度


```ts
hexToRgb('#aabbcc8d') // => '170,187,204,0.55'
```
