## 函数Function
## debounce 
防抖

#### 类型说明
::: info
`function debounce(func: (...params: any[]) => any, awit?: number, option?: {
    leading?: boolean;
    trailing?: boolean;
}): any;`
:::
#### 参数
- func 函数
- awit 延迟时间 默认 500毫秒
- option 可选的对象
- option.leading 前置边缘执行，默认 false
- option.trailing 后置边缘执行，默认 true
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
#### 示例 
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
#### 源码
::: code-group
```Ts [TS版本]
import isBoolean from '@/verify/isBoolean'
import isNumber from '@/verify/isNumber'
import isFunction from '@/verify/isFunction'
export default function debounce(
  func: (...params: any[]) => any,
  awit = 500,
  option: { leading?: boolean; trailing?: boolean } = { leading: false, trailing: true }
): any {
  let { leading = false, trailing = true } = option
  let timeout = 0
  if (!isFunction(func)) throw 'func不是function'
  if (awit && !isNumber(awit)) throw 'awit不是number'
  if (!isBoolean(leading)) throw 'leading不是boolean'
  if (!isBoolean(trailing)) throw 'trailing不是boolean'
  return function (this: unknown, ...args: any[]) {
    clearTimeout(timeout)
    if (leading) {
      func.apply(this, args)
      leading = false
    }
    timeout = setTimeout(() => {
      leading = leading
      trailing && func.apply(this, args)
    }, awit)
  }
}

```

```Js [JS版本]
import isBoolean from '@/verify/isBoolean';
import isNumber from '@/verify/isNumber';
import isFunction from '@/verify/isFunction';
export default function debounce(func, awit = 500, option = { leading: false, trailing: true }) {
  let { leading = false, trailing = true } = option;
  let timeout = 0;
  if (!isFunction(func)) throw 'func不是function';
  if (awit && !isNumber(awit)) throw 'awit不是number';
  if (!isBoolean(leading)) throw 'leading不是boolean';
  if (!isBoolean(trailing)) throw 'trailing不是boolean';
  return function(...args) {
    clearTimeout(timeout);
    if (leading) {
      func.apply(this, args);
      leading = false;
    }
    timeout = setTimeout(() => {
      leading = leading;
      trailing && func.apply(this, args);
    }, awit);
  };
}

```
:::
## once 
只调用一次的函数

#### 类型说明
::: info
`function once(func: (...params: any[]) => any): (this: unknown, ...args: any[]) => void;`
:::
#### 参数
- func 函数
#### 示例 
```ts
once(function () { ... })
```
在vue2中使用
```ts
getlist: once(function () { ... })
```
#### 源码
::: code-group
```Ts [TS版本]
import isFunction from '@/verify/isFunction'
export default function once(func: (...params: any[]) => any) {
  if (!isFunction(func)) throw 'func不是function'
  let called = false
  return function (this: unknown, ...args: any[]) {
    if (!called) {
      called = true
      func.apply(this, args)
    }
  }
}
```

```Js [JS版本]
import isFunction from '@/verify/isFunction';
export default function once(func) {
  if (!isFunction(func)) throw 'func不是function';
  let called = false;
  return function(...args) {
    if (!called) {
      called = true;
      func.apply(this, args);
    }
  };
}

```
:::
## throttle 
节流

#### 类型说明
::: info
`function throttle(func: (...params: any[]) => any, wait?: number, immediate?: boolean): (this: unknown, ...args: any[]) => void;`
:::
#### 参数
- func 函数
- wait 延迟时间 默认 500毫秒
- immediate 是否立即执行
#### 异常
::: danger
wait不是number wait存在但不是数字时触发
:::
::: danger
immediate不是boolean immediate存在但不是boolean时触发
:::
#### 示例 
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
#### 源码
::: code-group
```Ts [TS版本]
import isBoolean from '@/verify/isBoolean'
import isNumber from '@/verify/isNumber'
import isFunction from '@/verify/isFunction'
export default function throttle(func: (...params: any[]) => any, wait = 500, immediate = false) {
  let timeout = 0
  if (!isFunction(func)) throw 'func不是function'
  if (wait && !isNumber(wait)) throw 'wait不是number'
  if (!isBoolean(immediate)) throw 'immediate不是boolean'
  return function (this: unknown, ...args: any[]) {
    if (immediate) {
      func.apply(this, args)
      immediate = false
    }
    if (!timeout) {
      timeout = setTimeout(() => {
        func.apply(this, args)
        timeout = 0
      }, wait)
    }
  }
}

```

```Js [JS版本]
import isBoolean from '@/verify/isBoolean';
import isNumber from '@/verify/isNumber';
import isFunction from '@/verify/isFunction';
export default function throttle(func, wait = 500, immediate = false) {
  let timeout = 0;
  if (!isFunction(func)) throw 'func不是function';
  if (wait && !isNumber(wait)) throw 'wait不是number';
  if (!isBoolean(immediate)) throw 'immediate不是boolean';
  return function(...args) {
    if (immediate) {
      func.apply(this, args);
      immediate = false;
    }
    if (!timeout) {
      timeout = setTimeout(() => {
        func.apply(this, args);
        timeout = 0;
      }, wait);
    }
  };
}

```
:::
## isFunction 
判断是否为Function

#### 类型说明
::: info
`function isFunction(value: any): boolean;`
:::
#### 参数
- value 任意值
#### 返回
- `boolean`
::: tip
true | false
:::
#### 示例 
验证通过
```ts
isFunction(function(){}) => true
```
验证失败
```ts
isFunction(123) => false
```
#### 源码
::: code-group
```Ts [TS版本]
import typeOf from '@/common/typeOf'
export default function isFunction(value: any): boolean {
  return typeOf(value) === 'Function'
}
```

```Js [JS版本]
import typeOf from '@/common/typeOf';
export default function isFunction(value) {
  return typeOf(value) === 'Function';
}

```
:::
