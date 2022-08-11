## phoneEncrypt :tada: :100: 
对手机号进行加密处理
#### 参数 
- value `string | number` 手机号：支持字符串或者数字
 
#### td.ts
::: info
`phoneEncrypt(value: string | number): string`
:::
#### 返回 
- `string` 
::: tip
字符串 返回经过加密后的字符串
:::
#### 异常 
::: danger
异常 手机号格式不正确
:::
#### 实例 
```ts
phoneEncrypt(13300001111) => '133****1111'
```
```ts
phoneEncrypt('13300001111') => '133****1111'
```
```ts
phoneEncrypt('1330000') => throw '手机号格式不正确'
```
