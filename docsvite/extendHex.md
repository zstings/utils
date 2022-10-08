## extendHex :tada: :100: 
将3(4)位16进制色值转为6(8)位
#### 参数 
- **hex** `string` 字符串
 
#### td.ts
::: info
`extendHex(hex: string): string`
:::
#### 返回 
- `string` 
::: tip
6位hex
:::
#### 异常 
::: danger
无法识别正确的hex hex参数不是正确的hex时触发
:::
#### 实例 
```ts
extendHex('#03f') // => '#0033ff'
```
```ts
extendHex('#03ff') // => '#0033ffff'
```
