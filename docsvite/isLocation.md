## isLocation :tada: :100: 
判断是否为Location
#### 参数 
- value `any` 任意值
 
#### td.ts
::: info
`isLocation(value: any): boolean`
:::
#### 返回 
- `boolean` 
::: tip
true | false
:::
#### 实例 
验证通过


```ts
isLocation(window.location) => true
```
验证失败


```ts
isLocation(123) => false
```
