## isPhone :tada: :100: 
判断是否为手机号
#### 参数 
- **value** `string | number` 任意值
 
#### td.ts
::: info
`isPhone(value: string | number): boolean`
:::
#### 返回 
- `boolean` 
::: tip
true | false
:::
#### 实例 
验证通过


```ts
isPhone(13302101452) => true
```
验证失败


```ts
isPhone(1330210152) => false
```
