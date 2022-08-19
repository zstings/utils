## assign :tada: :100: 
合并对象
#### 参数 
- target `Record<string, any>` 目标对象，被合并的对象
 
- Rest ...sources `Record<string, any>[]` 源对象，可以多个
 
#### td.ts
::: info
`assign(target: Record<string, any>, ...sources: Record<string, any>[]): Record<string, any>`
:::
#### 返回 
- `Record` 
::: tip
目标对象
:::
#### 实例 
对象合并效果与Object.assign一致


```ts
assign({a: 1, c: 3}, {c: 5}) // => {a: 1, c: 5}
```
