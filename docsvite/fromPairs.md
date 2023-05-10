## fromPairs :tada: :100: 
二维数组转化为对象
#### 参数 
- **array** `any[]` 数组
 
#### td.ts
::: info
`fromPairs(array): Record<string, unknown>`
:::
#### 返回 
- `Record` 
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
fromPairs([['a', 1], ['b', 2]]) => {a: 1, b: 2}
```
多余的成员会被舍弃


```ts
fromPairs([['a', 1], ['b', 2, 3]) => {a: 1, b: 2}
```
