## isDom
是否是dom
#### 类型说明
::: info
`function isDom(value: any): boolean;`
:::
#### 参数
- `value` dom
#### 返回值
::: tip 
true
:::
#### 示例
```ts
isDom() // => false
```
```ts
isDom(document.querySelector('head')) // => true
```
#### 源码
::: code-group
```Ts [TS版本]
import typeOf from '@/common/typeOf'
export default function isDom(value: any): boolean {
  return typeOf(value).includes('Element')
}
```
```Js [JS版本]
import typeOf from '@/common/typeOf';
export default function isDom(value) {
  return typeOf(value).includes('Element');
}
```
:::

## exitFullscreen
退出全屏
#### 类型说明
::: info
`function exitFullscreen(): void;`
:::
#### 异常
::: danger 
浏览器不支持全屏操作 
:::
#### 示例
```ts
exitFullscreen()
```
#### 源码
::: code-group
```Ts [TS版本]
export default function exitFullscreen(): void {
  const exitFullscreen =
    document.exitFullscreen ||
    (document as any).msExitFullscreen ||
    (document as any).mozCancelFullScreen ||
    (document as any).webkitExitFullscreen
  if (!exitFullscreen) throw '浏览器不支持全屏操作'
  exitFullscreen()
}
```
```Js [JS版本]
export default function exitFullscreen() {
  const exitFullscreen2 = document.exitFullscreen || document.msExitFullscreen || document.mozCancelFullScreen || document.webkitExitFullscreen;
  if (!exitFullscreen2) throw '浏览器不支持全屏操作';
  exitFullscreen2();
}
```
:::

## launchFullscreen
指定dom节点全屏
#### 类型说明
::: info
`function launchFullscreen(el?: HTMLElement): void;`
:::
#### 参数
- `el` 指定的dom节点，不指定默认指向document.body
#### 异常
::: danger 
浏览器不支持全屏操作 
:::
#### 示例
```ts
launchFullscreen()
```
```ts
upperFirst(document.querySelector('a'))
```
#### 源码
::: code-group
```Ts [TS版本]
export default function launchFullscreen(el: HTMLElement = document.body): void {
  const requestFullscreen =
    el.requestFullscreen ||
    (el as any).mozRequestFullscreen ||
    (el as any).msRequestFullscreen ||
    (el as any).webkitRequestFullscreen
  if (!requestFullscreen) throw '浏览器不支持全屏操作'
  requestFullscreen()
}
```
```Js [JS版本]
export default function launchFullscreen(el = document.body) {
  const requestFullscreen = el.requestFullscreen || el.mozRequestFullscreen || el.msRequestFullscreen || el.webkitRequestFullscreen;
  if (!requestFullscreen) throw '浏览器不支持全屏操作';
  requestFullscreen();
}
```
:::
