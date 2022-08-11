## isPromise :tada: :100: 
判断是否为Promise
#### 参数 
- value `any` 任意值
 
#### td.ts
::: info
`isPromise(value: any): boolean`
:::
#### 返回 
- `boolean` 
::: tip
true | false
:::
#### 实例 
验证通过


```ts
isPromise(new Promise(() => {})) => true
isPromise(Promise.all([])) => true
```
验证失败


```ts
isPromise(Promise) => false
```
```ts
isPromise(Promise) => false
```
