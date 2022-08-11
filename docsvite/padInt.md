## padInt :tada: :100: 
数字补0
#### 参数 
- value `string | number` 数字或者字符串的数字
 
- len? `number` 补充的长度， 默认2
 
#### td.ts
::: info
`padInt(value: string | number, len?: number): string`
:::
#### 返回 
- `string` 
::: tip
返回字符串
:::
#### 实例 
```ts
padInt(1) => '01'
```
```ts
padInt(12) => '12'
```
```ts
padInt(12, 3) => '012'
```
