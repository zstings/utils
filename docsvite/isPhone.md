## isPhone :tada: :100: 
判断是否为手机号
#### 参数 
- str `string | number`  
#### td.ts
::: info
`isPhone(str: string | number): boolean`
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
