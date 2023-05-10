## isEmptyObject :tada: :100: 
判断对象是否是空对象
#### 参数 
- **object** `Record<string, unknown>` 对象
 
#### td.ts
::: info
`isEmptyObject(object): boolean`
:::
#### 返回 
- `boolean` 
::: tip
true | false
:::
#### 异常 
::: danger
传入参数不是Object 传入参数不是Object时触发
:::
#### 实例 
验证通过


```ts
isEmptyObject({}) => true
```
验证失败


```ts
isEmptyObject({a: 1}) => false
```
