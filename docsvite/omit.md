## omit :tada: :100: 
删除指定对象的指定属性
#### 参数 
- **object** `Record<string, any>` 指定对象
 
- **keys** `string[] = []` 指定属性
 
#### td.ts
::: info
`omit(object: Record<string, any>, keys?: string[]): Record<string, any>`
:::
#### 返回 
- `Record` 
::: tip
新的对象
:::
#### 实例 
```ts
omit({a: 1, b: 2, c: 3}, ['a', 'c']) // => {b: 2}
```
