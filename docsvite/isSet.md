## isSet :tada: :100: 
判断是否为Set
#### 参数 
- value `any` 任意值
 
#### td.ts
::: info
`isSet(value: any): boolean`
:::
#### 返回 
- `boolean` 
::: tip
true | false
:::
#### 实例 
验证通过


```ts
isSet(new Set()) => true
```
验证失败


```ts
isSet(123) => false
```
