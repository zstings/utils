## toFixed :tada: :100: 
数字保留小数位
#### 参数 
- value `number` 数字
 
- num `number = 2` 保留的小数位
 
- isRound `boolean = true` 是否需要四舍五入
 
#### td.ts
::: info
`toFixed(value: number, num?: number, isRound?: boolean): number`
:::
#### 返回 
- `number` 
::: tip
返回数字
:::
#### 异常 
::: danger
无法转换为数字
:::
::: danger
isRound不是boolean
:::
#### 实例 
```ts
toFixed(1) // 1
```
```ts
toFixed(1.21) // 1.21
```
默认会四舍五入


```ts
toFixed(1.238, 2) // 1.24
```
不进行四舍五入


```ts
toFixed(1.238, 2, false) // 1.23
```
