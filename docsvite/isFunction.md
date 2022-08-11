## isFunction :tada: :100: 
判断是否为Function
#### 参数 
- value `any` 任意值
 
#### td.ts
::: info
`isFunction(value: any): boolean`
:::
#### 返回 
- `boolean` 
::: tip
true | false
:::
#### 实例 
验证通过


```ts
isFunction(function(){}) => true
```
验证失败


```ts
isFunction(123) => false
```
