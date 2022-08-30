## scrollTo :tada: :100: 
滚动至···
#### 参数 
- **option?** `{ direction?: "top" | "left"; dom?: HTMLElement; num?: number; rate?: number }` 可选的对象
 
	- **direction?** `"top" | "left"` 滚动的方向，默认 'top', 支持 'top' | 'left'
 
	- **dom?** `HTMLElement` 滚动的目标元素，默认 document.scrollingElement
 
	- **num?** `number` 滚动的目标值，默认 0
 
	- **rate?** `number` 滚动的步长，默认 4
 
- **callback?** `() => void` 滚动结束的回调函数
 
#### td.ts
::: info
`scrollTo(option?: { direction?: "top" | "left"; dom?: HTMLElement; num?: number; rate?: number }, callback?: (() => void)): void`
:::
#### 实例 
回到顶部


```ts
scrollTo()
```
回到顶部后触发回调


```ts
scrollTo({}, () => console.log('到了'))
```
回到距离顶部的100像素的位置


```ts
scrollTo({num: 100})
```
滚动到元素box的最左端


```ts
scrollTo({dom: document.querySelector('.box')})
```
滚动到元素box距离左端100像素位置


```ts
scrollTo({num: 100, dom: document.querySelector('.box')})
```
