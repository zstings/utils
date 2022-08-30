## isBoolean :tada: :100: 
判断是否为Boolean
#### 参数 
- **value** `any` 任意值
 
#### td.ts
::: info
`isBoolean(value: any): boolean`
:::
#### 返回 
- `boolean` 
::: tip
true | false
:::
#### 实例 
验证通过


```ts
isBoolean(true) => true
isBoolean(false) => true
```
验证失败


```ts
isBoolean(123) => false
```
