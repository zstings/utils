## 工具Util
## typeOf 
获取数据类型

#### 类型说明
::: info
`function typeOf(value: any): string;`
:::
#### 参数
- value 任意值
#### 返回
- `string`
::: tip
返回value的类型
:::
#### 示例 
数字
```ts
typeOf(12) => 'Number'
```
字符串
```ts
typeOf('12') => 'String'
```
布尔
```ts
typeOf(true) => 'Boolean'
```
函数
```ts
typeOf(functuin(){}) => 'Function'
```
对象
```ts
typeOf({}) => 'Object'
```
数组
```ts
typeOf([]) => 'Array'
```
#### 源码
::: code-group
```Ts [TS版本]

export default function typeOf(value: any): string {
  return Object.prototype.toString.call(value).slice(8, -1)
}
```

```Js [JS版本]
export default function typeOf(value) {
    return Object.prototype.toString.call(value).slice(8, -1);
}

```
:::
## version 
获取版本号

#### 类型说明
::: info
`function version(): string;`
:::
#### 返回
- `string`
::: tip
版本号
:::
#### 源码
::: code-group
```Ts [TS版本]
import { version as ver } from '../../package.json'
export default function version(): string {
  return ver
}
```

```Js [JS版本]
import { version as ver } from '../../package.json';
export default function version() {
    return ver;
}

```
:::
## base64ToBlob 
base64转blob

#### 类型说明
::: info
`function base64ToBlob(base64: string, type?: string): Blob;`
:::
#### 参数
- base64 base64
- type 文件类型
#### 返回
- `Blob`
::: tip
Blob
:::
#### 示例 
```ts
base64ToBlob()
```
#### 源码
::: code-group
```Ts [TS版本]

export default function base64ToBlob(base64: string, type?: string): Blob {
  // 'image/png'
  const base64Str = window.atob(base64.replace(/data:([\s\S]+);base64,/, ''))
  const base64Type = type || base64.match(/data:([\s\S]+);base64,/)?.[1] || 'text/plain'
  let n = base64Str.length
  const u8arr = new Uint8Array(n)
  while (n--) u8arr[n] = base64Str.charCodeAt(n)
  return new Blob([u8arr], { type: base64Type })
}
```

```Js [JS版本]
export default function base64ToBlob(base64, type) {
    // 'image/png'
    const base64Str = window.atob(base64.replace(/data:([\s\S]+);base64,/, ''));
    const base64Type = type || base64.match(/data:([\s\S]+);base64,/)?.[1] || 'text/plain';
    let n = base64Str.length;
    const u8arr = new Uint8Array(n);
    while (n--)
        u8arr[n] = base64Str.charCodeAt(n);
    return new Blob([u8arr], { type: base64Type });
}

```
:::
## copy 
复制文本内容

优先使用navigator.clipboard.writeText, 浏览器不支持使用时降级document.execCommand。

#### 类型说明
::: info
`function copy(value: string): Promise<void>;`
:::
#### 参数
- value 需要复制的字符串
#### 返回
- `Promise<void>`
::: tip
Promise
:::
#### 示例 
```ts
await copy('hello')
```
#### 源码
::: code-group
```Ts [TS版本]

export default function copy(value: string) {
  return new Promise<void>((resolve, reject) => {
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(value)
        .then(() => resolve())
        .catch(() => {
          execCommandCopy(value, resolve, reject)
        })
    } else {
      execCommandCopy(value, resolve, reject)
    }
  })
  function execCommandCopy(
    code: string,
    resolve: (value: void | PromiseLike<void>) => void,
    reject: (reason?: any) => void
  ) {
    const textarea = document.createElement('textarea')
    document.body.appendChild(textarea)
    textarea.setAttribute('readonly', 'readonly')
    textarea.innerHTML = code
    textarea.select()
    textarea.setSelectionRange(0, textarea.innerHTML.length)
    const isc = document.execCommand('copy')
    textarea.remove()
    isc ? resolve() : reject('execCommand error')
  }
}
```

```Js [JS版本]
export default function copy(value) {
    return new Promise((resolve, reject) => {
        if (navigator.clipboard) {
            navigator.clipboard
                .writeText(value)
                .then(() => resolve())
                .catch(() => {
                execCommandCopy(value, resolve, reject);
            });
        }
        else {
            execCommandCopy(value, resolve, reject);
        }
    });
    function execCommandCopy(code, resolve, reject) {
        const textarea = document.createElement('textarea');
        document.body.appendChild(textarea);
        textarea.setAttribute('readonly', 'readonly');
        textarea.innerHTML = code;
        textarea.select();
        textarea.setSelectionRange(0, textarea.innerHTML.length);
        const isc = document.execCommand('copy');
        textarea.remove();
        isc ? resolve() : reject('execCommand error');
    }
}

```
:::
## deepClone 
深度复制

#### 类型说明
::: info
`function deepClone<T extends Array<T> | any>(source: T): T;`
:::
#### 参数
- origin 对象或者数组
#### 返回
- `T`
::: tip
深度复制后的对象或者数组
:::
#### 示例 
```ts
deepClone([1,23, [1]]) // => [1,23, [1]]
```
```ts
deepClone({a: [1], b: () => {}}) // => {a: [1], b: () => {}}
```
#### 源码
::: code-group
```Ts [TS版本]

export default function deepClone<T extends Array<T> | any>(source: T): T {
  if (typeof source == 'object') {
    const cloneTarget: T = (Array.isArray(source) ? [] : {}) as T
    for (const key in source) {
      cloneTarget[key] = deepClone(source[key])
    }
    return cloneTarget
  } else {
    return source
  }
}
```

```Js [JS版本]
export default function deepClone(source) {
    if (typeof source == 'object') {
        const cloneTarget = (Array.isArray(source) ? [] : {});
        for (const key in source) {
            cloneTarget[key] = deepClone(source[key]);
        }
        return cloneTarget;
    }
    else {
        return source;
    }
}

```
:::
## downloadFile 
文件下载

#### 类型说明
::: info
`function downloadFile(name: string, blob: Blob): void;`
:::
#### 参数
- name 文件名
- blob 文件blob数据
#### 示例 
```ts
const res = await fetch('https://a.b.com/').then(res => res.blob())
downloadFile('a.jpg', res)
```
#### 源码
::: code-group
```Ts [TS版本]

export default function downloadFile(name: string, blob: Blob): void {
  const a = document.createElement('a')
  const url = window.URL.createObjectURL(blob)
  // 默认隐藏
  a.style.display = 'none'
  a.href = url
  a.download = name
  // 添加到 body 标签中
  document.body.appendChild(a)
  a.click()
  window.URL.revokeObjectURL(url)
  // 下载完成移除 a 标签
  a.remove()
}
```

```Js [JS版本]
export default function downloadFile(name, blob) {
    const a = document.createElement('a');
    const url = window.URL.createObjectURL(blob);
    // 默认隐藏
    a.style.display = 'none';
    a.href = url;
    a.download = name;
    // 添加到 body 标签中
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    // 下载完成移除 a 标签
    a.remove();
}

```
:::
## gbkToUtf8 
gbk 转 utf-8

#### 类型说明
::: info
`function gbkToUtf8(value: ArrayBuffer): object | string;`
:::
#### 参数
- value ArrayBuffer
#### 返回
- `object | string`
::: tip
可以被JSON.parse转化时返回js对象，否则返回字符串
:::
#### 示例 
```ts
const res = await fetch('https://a.b.com/').then(res => res.arrayBuffer())
gbkToUtf8(res)
```
#### 源码
::: code-group
```Ts [TS版本]

export default function gbkToUtf8(value: ArrayBuffer): object | string {
  try {
    return JSON.parse(new TextDecoder('utf-8').decode(value))
  } catch (err) {
    return new TextDecoder('utf-8').decode(value)
  }
}
```

```Js [JS版本]
export default function gbkToUtf8(value) {
    try {
        return JSON.parse(new TextDecoder('utf-8').decode(value));
    }
    catch (err) {
        return new TextDecoder('utf-8').decode(value);
    }
}

```
:::
## getUUID 
获取uuid

#### 类型说明
::: info
`function getUUID(): string;`
:::
#### 返回
- `string`
::: tip
uuid
:::
#### 示例 
符合 RFC4122 版本 4 的 UUID。
```ts
getUUID() // '7ac8d9bc-0a0d-4f31-8134-896a485feed1'
```
#### 源码
::: code-group
```Ts [TS版本]

export default function getUUID(): string {
  const ysValue = String(1e7) + -1e3 + -4e3 + -8e3 + -1e11
  return ysValue.replace(/[018]/g, c =>
    (Number(c) ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (Number(c) / 4)))).toString(16)
  )
}
```

```Js [JS版本]
export default function getUUID() {
    const ysValue = String(1e7) + -1e3 + -4e3 + -8e3 + -1e11;
    return ysValue.replace(/[018]/g, c => (Number(c) ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (Number(c) / 4)))).toString(16));
}

```
:::
## phoneEncrypt 
对手机号进行加密处理

#### 类型说明
::: info
`function phoneEncrypt(value: string | number): string;`
:::
#### 参数
- value 手机号：支持字符串或者数字
#### 返回
- `string`
::: tip
字符串 返回经过加密后的字符串
:::
#### 异常
::: danger
异常 手机号格式不正确
:::
#### 示例 
```ts
phoneEncrypt(13300001111) => '133****1111'
```
```ts
phoneEncrypt('13300001111') => '133****1111'
```
```ts
phoneEncrypt('1330000') => throw '手机号格式不正确'
```
#### 源码
::: code-group
```Ts [TS版本]
import mask from "@/string/mask"
import isPhone from "@/verify/isPhone"
export default function phoneEncrypt(value: string | number): string {
  if (!isPhone(value)) throw '手机号格式不正确'
  if (typeof value === 'number') value = value.toString()
  return mask(value, 3, 4)
}
```

```Js [JS版本]
import mask from "@/string/mask";
import isPhone from "@/verify/isPhone";
export default function phoneEncrypt(value) {
    if (!isPhone(value))
        throw '手机号格式不正确';
    if (typeof value === 'number')
        value = value.toString();
    return mask(value, 3, 4);
}

```
:::
## random 
均衡获取指定范围的随机整数

返回一个min 和 max之间的随机整数。如果你没有参数，那么将返回0和1之间的整数。如果你只传递一个参数，那么将返回0和这个参数之间的整数。

#### 类型说明
::: info
`function random(min?: number, max?: number): number;`
:::
#### 参数
- min 范围最小整数
- max 范围最大整数
#### 返回
- `number`
::: tip
随机整数
:::
#### 示例 
均衡获取0或者1的数
```ts
random()
```
均衡获取0或者5的数
```ts
random(5)
```
均衡获取1或者10的数
```ts
random(1, 10)
```
#### 源码
::: code-group
```Ts [TS版本]
import isNumber from "@/verify/isNumber"
export default function random(min = 0, max?: number): number {
  if (!isNumber(min)) throw `min 必须整数`
  if (max && !isNumber(max)) throw `max 必须整数`
  if (min == null) {
    min = 0
    max = max || 1
  } else if (max == null) {
    max = min
    min = 0
  }
  return Math.round(Math.random() * (max - min) + min)
}
```

```Js [JS版本]
import isNumber from "@/verify/isNumber";
export default function random(min = 0, max) {
    if (!isNumber(min))
        throw `min 必须整数`;
    if (max && !isNumber(max))
        throw `max 必须整数`;
    if (min == null) {
        min = 0;
        max = max || 1;
    }
    else if (max == null) {
        max = min;
        min = 0;
    }
    return Math.round(Math.random() * (max - min) + min);
}

```
:::
## scrollTo 
滚动至···

#### 类型说明
::: info
`function scrollTo(option?: {
    rate?: number;
    num?: number;
    direction?: 'top' | 'left';
    dom?: HTMLElement;
}, callback?: () => void): void;`
:::
#### 参数
- option 可选的对象
- option.rate 滚动的步长，默认 4
- option.num 滚动的目标值，默认 0
- option.direction 滚动的方向，默认 'top', 支持 'top' | 'left'
- option.dom 滚动的目标元素，默认 document.scrollingElement
- callback 滚动结束的回调函数
#### 示例 
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
#### 源码
::: code-group
```Ts [TS版本]

export default function scrollTo(
  option: { rate?: number; num?: number; direction?: 'top' | 'left'; dom?: HTMLElement } = {},
  callback?: () => void
): void {
  let animat = 0
  const { rate = 4, num = 0, direction = 'top', dom = document.scrollingElement } = option
  const directions = { top: 'scrollTop', left: 'scrollLeft' }
  let scrollVal = (dom as Element)[directions[direction] as 'scrollTop']
  const animatRunFun = function () {
    scrollVal = scrollVal + (num - scrollVal) / rate
    // 临界判断，终止动画
    if (Math.abs(scrollVal - num) <= 1) {
      ;(dom as Element)[directions[direction] as 'scrollTop'] = num
      cancelAnimationFrame(animat)
      callback && callback()
      return
    }
    ;(dom as Element)[directions[direction] as 'scrollTop'] = scrollVal
    animat = requestAnimationFrame(animatRunFun)
  }
  animatRunFun()
}
```

```Js [JS版本]
export default function scrollTo(option = {}, callback) {
    let animat = 0;
    const { rate = 4, num = 0, direction = 'top', dom = document.scrollingElement } = option;
    const directions = { top: 'scrollTop', left: 'scrollLeft' };
    let scrollVal = dom[directions[direction]];
    const animatRunFun = function () {
        scrollVal = scrollVal + (num - scrollVal) / rate;
        // 临界判断，终止动画
        if (Math.abs(scrollVal - num) <= 1) {
            ;
            dom[directions[direction]] = num;
            cancelAnimationFrame(animat);
            callback && callback();
            return;
        }
        ;
        dom[directions[direction]] = scrollVal;
        animat = requestAnimationFrame(animatRunFun);
    };
    animatRunFun();
}

```
:::
## isBasicType 
是否是基本类型

#### 类型说明
::: info
`function isBasicType(value: any): boolean;`
:::
#### 返回
- `boolean`
::: tip
true | false
:::
#### 示例 
```ts
isBasicType('12') // => true
```
```ts
isBasicType([]) // => false
```
#### 源码
::: code-group
```Ts [TS版本]
import typeOf from '@/common/typeOf'
export default function isBasicType(value: any): boolean {
  return ['String', 'Number', 'Boolean', 'Null', 'Undefined', 'Symbol', 'BigInt'].includes(typeOf(value))
}

```

```Js [JS版本]
import typeOf from '@/common/typeOf';
export default function isBasicType(value) {
    return ['String', 'Number', 'Boolean', 'Null', 'Undefined', 'Symbol', 'BigInt'].includes(typeOf(value));
}

```
:::
## isBoolean 
判断是否为Boolean

#### 类型说明
::: info
`function isBoolean(value: any): boolean;`
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
isBoolean(true) => true
isBoolean(false) => true
```
验证失败
```ts
isBoolean(123) => false
```
#### 源码
::: code-group
```Ts [TS版本]
import typeOf from '@/common/typeOf'
export default function isBoolean(value: any): boolean {
  return typeOf(value) === 'Boolean'
}
```

```Js [JS版本]
import typeOf from '@/common/typeOf';
export default function isBoolean(value) {
    return typeOf(value) === 'Boolean';
}

```
:::
## isEqual 
判断任意两个值是否相等

#### 类型说明
::: info
`function isEqual(value1?: any, value2?: any): boolean;`
:::
#### 参数
- value1 任意值
- value2 任意值
#### 返回
- `boolean`
::: tip
true | false
:::
#### 示例 
没有参数时，直接返回true
```ts
isEqual() => true
```
只要一个参数时，第二个参数默等于第一个参数
```ts
isEqual(1) => true
```
```ts
isEqual(false) => true
```
```ts
isEqual([]) => true
```
基本数据类型
```ts
isEqual(1, 1) => true
```
```ts
isEqual(1, 2) => false
```
```ts
isEqual(true, 'a') => false
```
引用数据类型
```ts
isEqual([], []) => true
```
```ts
isEqual({}, {}) => true
```
```ts
isEqual([], {}) => false
```
```ts
isEqual([1, 2], [1, 2]) => true
```
```ts
isEqual({a: 1}, {a: 1}) => true
```
#### 源码
::: code-group
```Ts [TS版本]

export default function isEqual(value1:any = '', value2:any = '') {
  if (arguments.length == 1) value2 = value1;
  if (value1 === value2) return true; // 基本类型相等
  if (value1 === null || value2 === null) return false; // 有一个为 null 则不相等
  if (value1.constructor !== value2.constructor) return false; // 类型不同则不相等
  if (Array.isArray(value1)) {
    if (!Array.isArray(value2) || value1.length !== value2.length) return false; // 数组长度不同则不相等
    for (let i = 0; i < value1.length; i++) {
      if (!isEqual(value1[i], value2[i])) return false; // 数组元素不相等则不相等
    }
    return true;
  }
  if (typeof value1 === 'object') {
    const keysA = Object.keys(value1);
    const keysB = Object.keys(value2);
    if (keysA.length !== keysB.length) return false; // 对象键数量不同则不相等
    for (let key of keysA) {
      if (!keysB.includes(key) || !isEqual(value1[key], value2[key])) return false; // 对象键或值不相等则不相等
    }
    return true;
  }
  return false; // 其他情况不相等
}
```

```Js [JS版本]
export default function isEqual(value1 = '', value2 = '') {
    if (arguments.length == 1)
        value2 = value1;
    if (value1 === value2)
        return true; // 基本类型相等
    if (value1 === null || value2 === null)
        return false; // 有一个为 null 则不相等
    if (value1.constructor !== value2.constructor)
        return false; // 类型不同则不相等
    if (Array.isArray(value1)) {
        if (!Array.isArray(value2) || value1.length !== value2.length)
            return false; // 数组长度不同则不相等
        for (let i = 0; i < value1.length; i++) {
            if (!isEqual(value1[i], value2[i]))
                return false; // 数组元素不相等则不相等
        }
        return true;
    }
    if (typeof value1 === 'object') {
        const keysA = Object.keys(value1);
        const keysB = Object.keys(value2);
        if (keysA.length !== keysB.length)
            return false; // 对象键数量不同则不相等
        for (let key of keysA) {
            if (!keysB.includes(key) || !isEqual(value1[key], value2[key]))
                return false; // 对象键或值不相等则不相等
        }
        return true;
    }
    return false; // 其他情况不相等
}

```
:::
## isIncludeChinese 
检查字符串是否包含中文

#### 类型说明
::: info
`function isIncludeChinese(value?: string): boolean;`
:::
#### 参数
- value 字符串
#### 返回
- `boolean`
::: tip
true | false
:::
#### 示例 
```ts
isIncludeChinese() // => false
```
```ts
isIncludeChinese('你好') // => true
```
#### 源码
::: code-group
```Ts [TS版本]

export default function isIncludeChinese(value: string = ''): boolean {
  return /\p{sc=Han}/gu.test(value)
}
```

```Js [JS版本]
export default function isIncludeChinese(value = '') {
    return /\p{sc=Han}/gu.test(value);
}

```
:::
## isJsonString 
是否是json字符串

#### 类型说明
::: info
`function isJsonString(str: string): boolean;`
:::
#### 返回
- `boolean`
::: tip
true | false
:::
#### 示例 
```ts
isJsonString('{"a":1}') // => true
```
```ts
isJsonString(1) // => false
```
#### 源码
::: code-group
```Ts [TS版本]

export default function isJsonString(str: string) {
  try {
    JSON.parse(str)
    return true
  } catch (err) {
    return false
  }
}
```

```Js [JS版本]
export default function isJsonString(str) {
    try {
        JSON.parse(str);
        return true;
    }
    catch (err) {
        return false;
    }
}

```
:::
## isNullOrUndefined 
是否是null|undefined

#### 类型说明
::: info
`function isNullOrUndefined(value: any): boolean;`
:::
#### 参数
- value 任意值
#### 返回
- `boolean`
::: tip
true | false
:::
#### 示例 
```ts
isNullOrUndefined(null) // => true
isNullOrUndefined(undefined) // => true
```
```ts
isNullOrUndefined(2) // => false
```
#### 源码
::: code-group
```Ts [TS版本]
import typeOf from '@/common/typeOf'
export default function isNullOrUndefined(value: any): boolean {
  return ['Null', 'Undefined'].includes(typeOf(value))
}
```

```Js [JS版本]
import typeOf from '@/common/typeOf';
export default function isNullOrUndefined(value) {
    return ['Null', 'Undefined'].includes(typeOf(value));
}

```
:::
## isPhone 
判断是否为手机号

#### 类型说明
::: info
`function isPhone(value: string | number): boolean;`
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
isPhone(13302101452) => true
```
验证失败
```ts
isPhone(1330210152) => false
```
#### 源码
::: code-group
```Ts [TS版本]

export default function isPhone(value: string | number): boolean {
  return /^1[3-9][\d]{9}$/.test(value.toString())
}
```

```Js [JS版本]
export default function isPhone(value) {
    return /^1[3-9][\d]{9}$/.test(value.toString());
}

```
:::
## isPromise 
判断是否为Promise

#### 类型说明
::: info
`function isPromise(value: any): boolean;`
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
isPromise(new Promise(() => {})) => true
isPromise(Promise.all([])) => true
```
验证失败
```ts
isPromise(Promise) => false
```
```ts
isPromise(Promise) => false
```
#### 源码
::: code-group
```Ts [TS版本]
import typeOf from '@/common/typeOf'
import isFunction from '@/verify/isFunction'
export default function isPromise(value: any): boolean {
  return typeOf(value) === 'Promise' && isFunction(value.then) && isFunction(value.catch)
}
```

```Js [JS版本]
import typeOf from '@/common/typeOf';
import isFunction from '@/verify/isFunction';
export default function isPromise(value) {
    return typeOf(value) === 'Promise' && isFunction(value.then) && isFunction(value.catch);
}

```
:::
