## isObject :tada: :100: 
判断是否为对象
#### 参数 
- **value** `any` 任意值
 
#### td.ts
::: info
`isObject(value: any): boolean`
:::
#### 返回 
- `boolean` 
::: tip
true | false
:::
#### 实例 
验证通过


```ts
isObject({}) => true
```
验证失败


```ts
isObject([]) => false
```
