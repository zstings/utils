## debounce :tada: :100: 
防抖
#### 参数 
- **func** `(...params: any[]) => any` 函数
 
- **awit?** `number` 延迟时间 默认 500毫秒
 
- **option?** `{ leading?: boolean; trailing?: boolean }` 可选的对象
 
	- **leading?** `boolean` 前置边缘执行，默认 false
 
	- **trailing?** `boolean` 后置边缘执行，默认 true
 
#### td.ts
::: info
`debounce(func: ((...params: any[]) => any), awit?: number, option?: { leading?: boolean; trailing?: boolean }): any`
:::
#### 异常 
::: danger
awit不是number awit存在但不是数字时触发
:::
::: danger
leading不是boolean leading存在但不是boolean时触发
:::
::: danger
trailing不是boolean trailing存在但不是boolean时触发
:::
#### 实例 
```ts
debounce(function () { ... })
```
自定义时间


```ts
debounce(function () { ... }, 300)
```
前置边缘执行,函数触发时立即执行一次


```ts
debounce(function () { ... }, 500, {leading: true})
```
后置边缘执行,函数延迟时间达到后执行


```ts
debounce(function () { ... }, 500, {trailing: true})
```
在vue2中使用


```ts
getlist: debounce(function () { ... })
```
