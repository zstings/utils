## isString :tada: :100: 
判断是否为字符串
#### 参数 
- **value** `any` 任意值
 
#### td.ts
::: info
`isString(value): boolean`
:::
#### 返回 
- `boolean` 
::: tip
true | false
:::
#### 实例 
验证通过


```ts
isString('abc') => true
```
验证失败


```ts
isString(123) => false
```
