## isArray :tada: :100: 
判断是否为数组
#### 参数 
- **value** `any` 任意值
 
#### td.ts
::: info
`isArray(value: any): boolean`
:::
#### 返回 
- `boolean` 
::: tip
true | false
:::
#### 实例 
验证通过


```ts
isArray([]) => true
```
验证失败


```ts
isArray({}) => false
```
