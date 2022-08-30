## isNumber :tada: :100: 
判断是否为数字
#### 参数 
- **value** `any` 任意值
 
#### td.ts
::: info
`isNumber(value: any): boolean`
:::
#### 返回 
- `boolean` 
::: tip
true | false
:::
#### 实例 
验证通过


```ts
isNumber(123) => true
```
验证失败


```ts
isNumber('123') => false
```
