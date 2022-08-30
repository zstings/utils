## isDate :tada: :100: 
判断是否为Date
#### 参数 
- **value** `any` 任意值
 
#### td.ts
::: info
`isDate(value: any): boolean`
:::
#### 返回 
- `boolean` 
::: tip
true | false
:::
#### 实例 
验证通过


```ts
isDate(new Date()) => true
```
验证失败


```ts
isDate(123) => false
```
