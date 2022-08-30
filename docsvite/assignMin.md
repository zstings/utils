## assignMin :tada: :100: 
最小合并对象
#### 参数 
- **target** `Record<string, any>` 目标对象，被合并的对象
 
- **Rest ...sources** `Record<string, any>[]` 源对象，可以多个
 
#### td.ts
::: info
`assignMin(target: Record<string, any>, ...sources: Record<string, any>[]): Record<string, any>`
:::
#### 返回 
- `Record` 
::: tip
目标对象
:::
#### 实例 
最小合并对象，只会合并源对象原有的属性，其他忽略


```ts
assignMin({a: 1, c: 1}, {a: 2, b: 3}, {c: 3}) // => {a: 2, c: 3}
```
