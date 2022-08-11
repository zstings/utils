## throttle :tada: :100: 
节流
#### 参数 
- func `(...params: any[]) => any` 函数
 
- wait `number = 500` 延迟时间 默认 500毫秒
 
- immediate `boolean = false` 是否立即执行
 
#### td.ts
::: info
`throttle(func: ((...params: any[]) => any), wait?: number, immediate?: boolean): ((this: unknown, ...args: any[]) => void)`
:::
#### 异常 
::: danger
wait不是number wait存在但不是数字时触发
:::
::: danger
immediate不是boolean immediate存在但不是boolean时触发
:::
#### 实例 
```ts
throttle(function () { ... })
```
自定义时间


```ts
throttle(function () { ... }, 300)
```
函数触发时立即执行一次


```ts
throttle(function () { ... }, 500, immediate: true)
```
在vue2中使用


```ts
getlist: throttle(function () { ... })
```
