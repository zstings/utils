## isSymbol :tada: :100: 
判断是否为Symbol
#### 参数 
- value `any` 任意值
 
#### td.ts
::: info
`isSymbol(value: any): boolean`
:::
#### 返回 
- `boolean` 
::: tip
true | false
:::
#### 实例 
验证通过


```ts
isSymbol(Symbol(1)) => true
```
验证失败


```ts
isSymbol(Symbol) => false
```
