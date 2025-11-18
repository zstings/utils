## detectDeviceType
获取设备类型
#### 类型说明
::: info
`function detectDeviceType(): "Mobile" | "Desktop";`
:::
#### 返回值
::: tip 
'Mobile'
:::
#### 示例
移动端访问
```ts
detectDeviceType() // => 'Mobile'
```
桌面端访问
```ts
detectDeviceType() // => 'Desktop'
```
#### 源码
::: code-group
```Ts [TS版本]
export default function detectDeviceType() {
  return /Android|iPhone|iPad/i.test(navigator.userAgent) ? 'Mobile' : 'Desktop'
}
```
```Js [JS版本]
export default function detectDeviceType() {
  return /Android|iPhone|iPad/i.test(navigator.userAgent) ? 'Mobile' : 'Desktop';
}
```
:::

## isAndroid
是否是安卓系统
#### 类型说明
::: info
`function isAndroid(): boolean;`
:::
#### 返回值
::: tip 
true
:::
#### 示例
安卓手机访问
```ts
isAndroid() // => true
```
桌面或者ios访问
```ts
isAndroid() // => false
```
#### 源码
::: code-group
```Ts [TS版本]
import isMobile from '@/device/isMobile'
export default function isAndroid() {
  return isMobile() && /Android/i.test(navigator.userAgent)
}
```
```Js [JS版本]
import isMobile from '@/device/isMobile';
export default function isAndroid() {
  return isMobile() && /Android/i.test(navigator.userAgent);
}
```
:::

## isDesktop
是否是桌面端
#### 类型说明
::: info
`function isDesktop(): boolean;`
:::
#### 返回值
::: tip 
true
:::
#### 示例
桌面端访问
```ts
isDesktop() // => true
```
移动端访问
```ts
isDesktop() // => false
```
#### 源码
::: code-group
```Ts [TS版本]
import detectDeviceType from '@/device/detectDeviceType'
export default function isDesktop() {
  return detectDeviceType() === 'Desktop'
}
```
```Js [JS版本]
import detectDeviceType from '@/device/detectDeviceType';
export default function isDesktop() {
  return detectDeviceType() === 'Desktop';
}
```
:::

## isIOS
是否是ios系统
#### 类型说明
::: info
`function isIOS(): boolean;`
:::
#### 返回值
::: tip 
true
:::
#### 示例
ios访问
```ts
isIOS() // => true
```
桌面或者安卓访问
```ts
isIOS() // => false
```
#### 源码
::: code-group
```Ts [TS版本]
import isMobile from '@/device/isMobile'
import isAndroid from '@/device/isAndroid'
export default function isIOS() {
  return isMobile() && !isAndroid()
}
```
```Js [JS版本]
import isMobile from '@/device/isMobile';
import isAndroid from '@/device/isAndroid';
export default function isIOS() {
  return isMobile() && !isAndroid();
}
```
:::

## isMobile
是否是移动端
#### 类型说明
::: info
`function isMobile(): boolean;`
:::
#### 返回值
::: tip 
true
:::
#### 示例
移动端访问
```ts
isMobile() // => true
```
桌面端访问
```ts
isMobile() // => false
```
#### 源码
::: code-group
```Ts [TS版本]
import detectDeviceType from '@/device/detectDeviceType'
export default function isMobile() {
  return detectDeviceType() === 'Mobile'
}
```
```Js [JS版本]
import detectDeviceType from '@/device/detectDeviceType';
export default function isMobile() {
  return detectDeviceType() === 'Mobile';
}
```
:::

## isQQ
是否是QQ环境
#### 类型说明
::: info
`function isQQ(): boolean;`
:::
#### 返回值
::: tip 
true
:::
#### 示例
QQ中端访问
```ts
isQQ() // => true
```
非QQ访问
```ts
isQQ() // => false
```
#### 源码
::: code-group
```Ts [TS版本]
export default function isQQ() {
  return /QQ\//i.test(navigator.userAgent)
}
```
```Js [JS版本]
export default function isQQ() {
  return /QQ\//i.test(navigator.userAgent);
}
```
:::

## isWeixin
是否是微信环境
#### 类型说明
::: info
`function isWeixin(): boolean;`
:::
#### 返回值
::: tip 
true
:::
#### 示例
微信中端访问
```ts
isWeixin() // => true
```
非微信访问
```ts
isWeixin() // => false
```
#### 源码
::: code-group
```Ts [TS版本]
export default function isWeixin() {
  return /MicroMessenger\//i.test(navigator.userAgent)
}
```
```Js [JS版本]
export default function isWeixin() {
  return /MicroMessenger\//i.test(navigator.userAgent);
}
```
:::

## isWeixinMini
是否是微信小程序环境
#### 类型说明
::: info
`function isWeixinMini(): boolean;`
:::
#### 返回值
::: tip 
true
:::
#### 示例
微信小程序中端访问
```ts
isWeixinMini() // => true
```
非微信小程序访问
```ts
isWeixinMini() // => false
```
#### 源码
::: code-group
```Ts [TS版本]
export default function isWeixinMini() {
  return /miniProgram/i.test(navigator.userAgent)
}
```
```Js [JS版本]
export default function isWeixinMini() {
  return /miniProgram/i.test(navigator.userAgent);
}
```
:::

## isWin
是否是windows环境
#### 类型说明
::: info
`function isWin(): boolean;`
:::
#### 返回值
::: tip 
true
:::
#### 示例
windows环境中端访问
```ts
isWin() // => true
```
非windows环境访问
```ts
isWin() // => false
```
#### 源码
::: code-group
```Ts [TS版本]
export default function isWin() {
  return /Windows/i.test(navigator.userAgent)
}
```
```Js [JS版本]
export default function isWin() {
  return /Windows/i.test(navigator.userAgent);
}
```
:::
