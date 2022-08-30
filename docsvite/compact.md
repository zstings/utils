## compact :tada: :100: 
移除所有 falsey 值的数组
#### 参数 
- **array** `any[]` 数组
 
#### td.ts
::: info
`compact(array: any[]): any[]`
:::
#### 返回 
::: tip
新的数组
:::
#### 异常 
::: danger
array参数需要Array array参数错误时触发
:::
#### 实例 
falsey => 0 | false | null | undefined | NaN


```ts
compact([1, 0, false, 2, NaN, 3, null]) => [1, 2, 3]
```
