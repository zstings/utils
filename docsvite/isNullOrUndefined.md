## isNullOrUndefined :tada: :100: 
是否是null|undefined
#### 参数 
- value `any` 任意值
 
#### td.ts
::: info
`isNullOrUndefined(value: any): boolean`
:::
#### 返回 
- `boolean` 
::: tip
true | false
:::
#### 实例 
```ts
isNullOrUndefined(null) // => true
isNullOrUndefined(undefined) // => true
```
```ts
isNullOrUndefined(2) // => false
```
