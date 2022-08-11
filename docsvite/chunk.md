## chunk :tada: :100: 
按长度拆分数组
#### 参数 
- array `any[]` 数组
 
- size `number = 1` 长度 默认1
 
#### td.ts
::: info
`chunk(array: any[], size?: number): any[]`
:::
#### 返回 
::: tip
新的数组
:::
#### 异常 
::: danger
array参数需要Array array参数错误时触发
:::
::: danger
size参数需要Number size参数错误时触发
:::
#### 实例 
```ts
chunk([{a:1}, {a: 2}, {a: 3}, {a: 4}], 2)
// => [[{"a":1},{"a":2}],[{"a":3},{"a":4}]]
```
```ts
chunk([{a:1}, {a: 2}, {a: 3}, {a: 4}], 3)
// => [[{"a":1},{"a":2},{"a":3}],[{"a":4}]]
```
