## isMap :tada: :100: 
判断是否为Map
#### 参数 
- value `any` 任意值
 
#### td.ts
::: info
`isMap(value: any): boolean`
:::
#### 返回 
- `boolean` 
::: tip
true | false
:::
#### 实例 
验证通过


```ts
isMap(new Map()) => true
```
验证失败


```ts
isMap(123) => false
```
