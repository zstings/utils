## launchFullscreen :tada: :100: 
指定dom节点全屏
#### 参数 
- **el** `HTMLElement = document.body` 指定的dom节点，不指定默认指向document.body
 
#### td.ts
::: info
`launchFullscreen(el?: HTMLElement): void`
:::
#### 异常 
::: danger
浏览器不支持全屏操作
:::
#### 实例 
```ts
launchFullscreen()
```
```ts
upperFirst(document.querySelector('a'))
```
