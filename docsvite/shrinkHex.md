## shrinkHex :tada: :100: 
将6(8)位16进制色值转为3(4)位
#### 参数 
- **hex** `string` 字符串
 
#### td.ts
::: info
`shrinkHex(hex): string`
:::
#### 返回 
- `string` 
::: tip
3位hex
:::
#### 异常 
::: danger
无法识别正确的hex hex参数不是正确的hex时触发
:::
#### 实例 
```ts
shrinkHex('#0033ff') // => '#03f'
```
// 无法转化的原样输出


```ts
shrinkHex('#0037ff') // => '#0037ff'
```
