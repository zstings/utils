## toNumber :tada: :100: 
转换为数字
#### 参数 
- **value** `T` 任意值
 
#### td.ts
::: info
`toNumber<T>(value: T): number`
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
#### 实例 
```ts
toNumber('1') // 1
```
```ts
toNumber('1.2') // 1.2
```
```ts
toNumber('a123') // error => a123无法转换为数字
```
