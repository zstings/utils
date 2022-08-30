## isDom :tada: :100: 
是否是dom
#### 参数 
- **tarage** `Element` dom
 
#### td.ts
::: info
`isDom(tarage: Element): boolean`
:::
#### 返回 
- `boolean` 
::: tip
true | false
:::
#### 实例 
```ts
isDom() // => false
```
```ts
isDom(document.querySelector('head')) // => true
```
