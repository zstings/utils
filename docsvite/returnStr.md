## returnStr :tada: :100: 
返回字符串
#### 参数 
- str `string`  
#### td.ts
::: info
returnStr(str: string): string
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
getlist: debounce(function () { //... })
```
