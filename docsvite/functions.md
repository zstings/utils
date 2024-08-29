## 数组Array
## chunk 
按长度拆分数组

#### 类型说明
::: info
`function chunk(array: any[], size?: number): any[];`
:::
#### 参数
- array 数组
- size 长度 默认1
#### 返回
- `any[]`
::: tip
新的数组
:::
#### 异常
::: danger
array参数需要Array array参数错误时触发
:::
::: danger
size参数需要Number size参数错误时触发
:::
#### 示例 
```ts
chunk([{a:1}, {a: 2}, {a: 3}, {a: 4}], 2)
// => [[{"a":1},{"a":2}],[{"a":3},{"a":4}]]
```
```ts
chunk([{a:1}, {a: 2}, {a: 3}, {a: 4}], 3)
// => [[{"a":1},{"a":2},{"a":3}],[{"a":4}]]
```
#### 源码
::: code-group
```Ts [TS版本]
import isArray from "@/verify/isArray"
import isNumber from "@/verify/isNumber"
export default function chunk(array: any[], size = 1): any[] {
  if (!isArray(array)) throw `array参数需要Array`
  if (!isNumber(size)) throw `size参数需要Number`
  const arr = []
  const count = Math.ceil(array.length / size)
  for (let i = 0; i < count; i++) {
    arr.push(array.slice(i * size, i * size + size))
  }
  return arr
}

```

```Js [JS版本]
import isArray from "@/verify/isArray";
import isNumber from "@/verify/isNumber";
export default function chunk(array, size = 1) {
    if (!isArray(array))
        throw `array参数需要Array`;
    if (!isNumber(size))
        throw `size参数需要Number`;
    const arr = [];
    const count = Math.ceil(array.length / size);
    for (let i = 0; i < count; i++) {
        arr.push(array.slice(i * size, i * size + size));
    }
    return arr;
}

```
:::
## compact 
移除所有 falsey 值的数组

#### 类型说明
::: info
`function compact(array: any[]): any[];`
:::
#### 参数
- array 数组
#### 返回
- `any[]`
::: tip
新的数组
:::
#### 异常
::: danger
array参数需要Array array参数错误时触发
:::
#### 示例 
falsey => 0 | false | null | undefined | NaN
```ts
compact([1, 0, false, 2, NaN, 3, null]) => [1, 2, 3]
```
#### 源码
::: code-group
```Ts [TS版本]
import isArray from "@/verify/isArray"
export default function compact(array: any[]): any[] {
  if (!isArray(array)) throw `array参数需要Array`
  return array.filter(item => !!item)
}

```

```Js [JS版本]
import isArray from "@/verify/isArray";
export default function compact(array) {
    if (!isArray(array))
        throw `array参数需要Array`;
    return array.filter(item => !!item);
}

```
:::
## fromPairs 
二维数组转化为对象

#### 类型说明
::: info
`function fromPairs(array: any[]): Record<string, unknown>;`
:::
#### 参数
- array 数组
#### 返回
- `Record<string, unknown>`
::: tip
新的数组
:::
#### 异常
::: danger
array参数需要Array array参数错误时触发
:::
::: danger
size参数需要Number size参数错误时触发
:::
#### 示例 
```ts
fromPairs([['a', 1], ['b', 2]]) => {a: 1, b: 2}
```
多余的成员会被舍弃
```ts
fromPairs([['a', 1], ['b', 2, 3]) => {a: 1, b: 2}
```
#### 源码
::: code-group
```Ts [TS版本]
import isArray from "@/verify/isArray"
export default function fromPairs(array: any[]): Record<string, unknown> {
  if (!isArray(array)) throw `array传入参数需要Array`
  return Object.fromEntries(new Map(array))
}

```

```Js [JS版本]
import isArray from "@/verify/isArray";
export default function fromPairs(array) {
    if (!isArray(array))
        throw `array传入参数需要Array`;
    return Object.fromEntries(new Map(array));
}

```
:::
## unique 
数组去重

#### 类型说明
::: info
`function unique(array: any[], key?: string): any[];`
:::
#### 参数
- array 数组
- key 指定数组对象需要对比的key
#### 返回
- `any[]`
::: tip
新的数组
:::
#### 异常
::: danger
array参数需要Array array参数错误时触发
:::
::: danger
key参数需要String key存在且不是字符串时触发
:::
#### 示例 
```ts
unique([1, 2, 1]) => [1, 2]
```
数组对象去重
```ts
unique([{id: 1, name: '1'}, {id: 2, name: '2'}, {id: 1, name: '1'}], 'id')
// => [{id: 1, name: '1'}, {id: 2, name: '2'}]
```
#### 源码
::: code-group
```Ts [TS版本]
import isArray from "@/verify/isArray"
import isString from "@/verify/isString"
export default function unique(array: any[], key?: string): any[] {
  if (!isArray(array)) throw `array传入参数需要Array`
  if (key && !isString(key)) throw `key传入参数需要String`
  if (key) {
    return array.reduce((x, y) => {
      const isTr = x.some((el: any) => el[key] == y[key])
      if (!isTr) x.push(y)
      return x
    }, [])
  }
  return [...new Set(array)]
}

```

```Js [JS版本]
import isArray from "@/verify/isArray";
import isString from "@/verify/isString";
export default function unique(array, key) {
    if (!isArray(array))
        throw `array传入参数需要Array`;
    if (key && !isString(key))
        throw `key传入参数需要String`;
    if (key) {
        return array.reduce((x, y) => {
            const isTr = x.some((el) => el[key] == y[key]);
            if (!isTr)
                x.push(y);
            return x;
        }, []);
    }
    return [...new Set(array)];
}

```
:::
## isArray 
判断是否为数组

#### 类型说明
::: info
`function isArray(value: any): boolean;`
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
isArray([]) => true
```
验证失败
```ts
isArray({}) => false
```
#### 源码
::: code-group
```Ts [TS版本]
import typeOf from '@/common/typeOf'
export default function isArray(value: any): boolean {
  return typeOf(value) === 'Array'
}
```

```Js [JS版本]
import typeOf from '@/common/typeOf';
export default function isArray(value) {
    return typeOf(value) === 'Array';
}

```
:::
## isArrObj 
是否是数组对象

#### 类型说明
::: info
`function isArrObj(object: any): any;`
:::
#### 返回
- `any`
::: tip
true | false
:::
#### 示例 
```ts
isArrObj([{}]) // => true
```
```ts
isArrObj([]) // => false
```
#### 源码
::: code-group
```Ts [TS版本]
import isArray from '@/verify/isArray'
import isObject from '@/verify/isObject'
export default function isArrObj(object: any) {
  if (!isArray(object)) return false
  return object.every((item: any) => {
    return isObject(item)
  })
}
```

```Js [JS版本]
import isArray from '@/verify/isArray';
import isObject from '@/verify/isObject';
export default function isArrObj(object) {
    if (!isArray(object))
        return false;
    return object.every((item) => {
        return isObject(item);
    });
}

```
:::
## 颜色Color
## extendHex 
将3(4)位16进制色值转为6(8)位

#### 类型说明
::: info
`function extendHex(hex: string): string;`
:::
#### 参数
- hex 字符串
#### 返回
- `string`
::: tip
6位hex
:::
#### 异常
::: danger
无法识别正确的hex hex参数不是正确的hex时触发
:::
#### 示例 
```ts
extendHex('#03f') // => '#0033ff'
```
```ts
extendHex('#03ff') // => '#0033ffff'
```
#### 源码
::: code-group
```Ts [TS版本]
import isHex from "@/color/isHex"
export default function extendHex(hex: string): string {
  if (!isHex(hex)) throw '无法识别正确的hex'
  if (hex.length > 6) return hex
  return `#${hex
    .substring(1)
    .split('')
    .map(item => (item += item))
    .join('')}`
}
```

```Js [JS版本]
import isHex from "@/color/isHex";
export default function extendHex(hex) {
    if (!isHex(hex))
        throw '无法识别正确的hex';
    if (hex.length > 6)
        return hex;
    return `#${hex
        .substring(1)
        .split('')
        .map(item => (item += item))
        .join('')}`;
}

```
:::
## hexToRgb 
将16进制hex色值转为rgb(a)色值

#### 类型说明
::: info
`function hexToRgb(hex: string): string;`
:::
#### 参数
- hex 字符串
#### 返回
- `string`
::: tip
字符串
:::
#### 异常
::: danger
无法识别正确的hex hex参数不是正确的hex时触发
:::
#### 示例 
```ts
hexToRgb('#aabbcc') // => '170,187,204'
```
支持透明度
```ts
hexToRgb('#aabbcc8d') // => '170,187,204,0.55'
```
#### 源码
::: code-group
```Ts [TS版本]
import toFixed from "@/number/toFixed"
import extendHex from "@/color/extendHex"
import isHex from "@/color/isHex"
export default function hexToRgb(hex: string): string {
  if (!isHex(hex)) throw '无法识别正确的hex'
  let _hex = hex.substring(1)
  if (_hex.length < 6) _hex = extendHex(hex).substring(1)
  _hex = (_hex.match(/[0-9a-f]{2}/gi) || [])
    .map((s, i) => (i === 3 ? toFixed(parseInt(s, 16) / 255) : parseInt(s, 16)))
    .join(',')
  return _hex
}
```

```Js [JS版本]
import toFixed from "@/number/toFixed";
import extendHex from "@/color/extendHex";
import isHex from "@/color/isHex";
export default function hexToRgb(hex) {
    if (!isHex(hex))
        throw '无法识别正确的hex';
    let _hex = hex.substring(1);
    if (_hex.length < 6)
        _hex = extendHex(hex).substring(1);
    _hex = (_hex.match(/[0-9a-f]{2}/gi) || [])
        .map((s, i) => (i === 3 ? toFixed(parseInt(s, 16) / 255) : parseInt(s, 16)))
        .join(',');
    return _hex;
}

```
:::
## isHex 
判断是否是16进制hex色值

#### 类型说明
::: info
`function isHex(hex: string): boolean;`
:::
#### 参数
- hex 字符串
#### 返回
- `boolean`
::: tip
true | false
:::
#### 示例 
```ts
isHex('#aabbcc') // => true
```
支持3位
```ts
isHex('#abc') // => true
```
支持透明度
```ts
isHex('#aabbcc8d') // => true
```
支持透明度
```ts
isHex('#df') // => false
```
支持透明度
```ts
isHex('#adg') // => false
```
#### 源码
::: code-group
```Ts [TS版本]
import isString from "@/verify/isString"
export default function isHex(hex: string): boolean {
  if (hex && !isString(hex)) return false
  return /#(([0-9a-f]{3})|([0-9a-f]{4})|([0-9a-f]{6})|([0-9a-f]{8}))$/gi.test(hex)
}
```

```Js [JS版本]
import isString from "@/verify/isString";
export default function isHex(hex) {
    if (hex && !isString(hex))
        return false;
    return /#(([0-9a-f]{3})|([0-9a-f]{4})|([0-9a-f]{6})|([0-9a-f]{8}))$/gi.test(hex);
}

```
:::
## isRgba 
判断是否是16进制hex色值

#### 类型说明
::: info
`function isRgba(rgba: string): boolean;`
:::
#### 参数
- rgba 字符串
#### 返回
- `boolean`
::: tip
true | false
:::
#### 示例 
```ts
isRgba('170,187,255') // => true
```
支持透明度
```ts
isRgba('170,187,255,0.91') // => true
```
支持透明度
```ts
isRgba('170,187,266,0.91') // => false
```
支持透明度
```ts
isRgba('170,187,256,2') // => false
```
#### 源码
::: code-group
```Ts [TS版本]
import isString from "@/verify/isString"
export default function isRgba(rgba: string): boolean {
  if (rgba && !isString(rgba)) return false
  return rgba.split(',').every((s, i) => {
    if (i == 3) return Number(s) * 255 >= 0 && Number(s) * 255 <= 255
    return Number(s) >= 0 && Number(s) <= 255
  })
}

```

```Js [JS版本]
import isString from "@/verify/isString";
export default function isRgba(rgba) {
    if (rgba && !isString(rgba))
        return false;
    return rgba.split(',').every((s, i) => {
        if (i == 3)
            return Number(s) * 255 >= 0 && Number(s) * 255 <= 255;
        return Number(s) >= 0 && Number(s) <= 255;
    });
}

```
:::
## randomHex 
随机生成16进制色值

#### 类型说明
::: info
`function randomHex(): string;`
:::
#### 返回
- `string`
::: tip
字符串
:::
#### 示例 
```ts
randomHex() // => '#cf65dd'
```
#### 源码
::: code-group
```Ts [TS版本]
import random from "@/util/random"
export default function randomHex(): string {
  const hexs = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']
  let hex = '#'
  for (let i = 0; i < 6; i++) {
    hex += hexs[random(0, 15)]
  }
  return hex
}
```

```Js [JS版本]
import random from "@/util/random";
export default function randomHex() {
    const hexs = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
    let hex = '#';
    for (let i = 0; i < 6; i++) {
        hex += hexs[random(0, 15)];
    }
    return hex;
}

```
:::
## randomRgba 
随机生成RGBA色值

#### 类型说明
::: info
`function randomRgba(): string;`
:::
#### 返回
- `string`
::: tip
字符串
:::
#### 示例 
```ts
randomRgba() // => '#cf65dd'
```
#### 源码
::: code-group
```Ts [TS版本]
import toFixed from "@/number/toFixed";
import random from "@/util/random";
export default function randomRgba(): string {
  return `${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)}, ${toFixed(random(0, 100) / 100)}`
}
```

```Js [JS版本]
import toFixed from "@/number/toFixed";
import random from "@/util/random";
export default function randomRgba() {
    return `${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)}, ${toFixed(random(0, 100) / 100)}`;
}

```
:::
## rgbToHex 
将rgb(a)色值转为16进制hex色值

#### 类型说明
::: info
`function rgbToHex(rgba: string): string;`
:::
#### 参数
- rgba 字符串
#### 返回
- `string`
::: tip
字符串
:::
#### 异常
::: danger
无法识别正确的rgba rgba参数不是正确的hex时触发
:::
#### 示例 
```ts
rgbToHex('170,187,255') // => '#aabbff'
```
// 支持透明度
```ts
rgbToHex('170,187,255,0.91') // => '#aabbffe8'
```
#### 源码
::: code-group
```Ts [TS版本]
import isRgba from "@/color/isRgba"
export default function rgbToHex(rgba: string): string {
  if (!isRgba(rgba)) throw '无法识别正确的rgba'
  return (
    '#' +
    rgba
      .split(',')
      .map((s, i) => {
        if (i == 3)
          return Math.round(Number(s) * 255)
            .toString(16)
            .padStart(2, '0')
        return Number(s).toString(16).padStart(2, '0')
      })
      .join('')
  )
}

```

```Js [JS版本]
import isRgba from "@/color/isRgba";
export default function rgbToHex(rgba) {
    if (!isRgba(rgba))
        throw '无法识别正确的rgba';
    return ('#' +
        rgba
            .split(',')
            .map((s, i) => {
            if (i == 3)
                return Math.round(Number(s) * 255)
                    .toString(16)
                    .padStart(2, '0');
            return Number(s).toString(16).padStart(2, '0');
        })
            .join(''));
}

```
:::
## shrinkHex 
将6(8)位16进制色值转为3(4)位

#### 类型说明
::: info
`function shrinkHex(hex: string): string;`
:::
#### 参数
- hex 字符串
#### 返回
- `string`
::: tip
3位hex
:::
#### 异常
::: danger
无法识别正确的hex hex参数不是正确的hex时触发
:::
#### 示例 
```ts
shrinkHex('#0033ff') // => '#03f'
```
// 无法转化的原样输出
```ts
shrinkHex('#0037ff') // => '#0037ff'
```
#### 源码
::: code-group
```Ts [TS版本]
import isHex from "@/color/isHex"
export default function shrinkHex(hex: string): string {
  if (!isHex(hex)) throw '无法识别正确的hex'
  if (hex.length < 6) return hex
  const _hex = hex.substring(1).match(/[0-9a-f]{2}/gi) || []
  const isTrue = _hex.every(item => item[0] == item[1])
  return isTrue ? '#' + _hex.map(item => item[0]).join('') : hex
}
```

```Js [JS版本]
import isHex from "@/color/isHex";
export default function shrinkHex(hex) {
    if (!isHex(hex))
        throw '无法识别正确的hex';
    if (hex.length < 6)
        return hex;
    const _hex = hex.substring(1).match(/[0-9a-f]{2}/gi) || [];
    const isTrue = _hex.every(item => item[0] == item[1]);
    return isTrue ? '#' + _hex.map(item => item[0]).join('') : hex;
}

```
:::
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
phoneEncrypt(13300001111) => '1331111'
```
```ts
phoneEncrypt('13300001111') => '1331111'
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
  return ['String', 'Number', 'Boolean', 'Null', 'Undefined'].includes(typeOf(value))
}

```

```Js [JS版本]
import typeOf from '@/common/typeOf';
export default function isBasicType(value) {
    return ['String', 'Number', 'Boolean', 'Null', 'Undefined'].includes(typeOf(value));
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
## isIncludeChinese 
检查字符串是否包含中文

#### 类型说明
::: info
`function isIncludeChinese(value: string): boolean;`
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

export default function isIncludeChinese(value: string): boolean {
  return /\p{sc=Han}/gu.test(value)
}
```

```Js [JS版本]
export default function isIncludeChinese(value) {
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
## 时间Date
## days 
获取时间对象

#### 类型说明
::: info
`function days(time?: number | string | Date | (string | number)[]): Date;`
:::
#### 参数
- time 时间戳|格式化后的时间字符|时间对象|可转化的时间数组
#### 返回
- `Date`
::: tip
时间对象
:::
#### 异常
::: danger
Invalid Date 传入值无法转为Date时触发
:::
#### 示例 
获取当前的时间对象
```ts
days()
// => Mon Aug 29 2022 17:56:41 GMT+0800 (中国标准时间)
```
支持时间戳
```ts
days(1318781876406)
// => Mon Oct 17 2011 00:17:56 GMT+0800 (中国标准时间)
```
支持格式化的时间字符
```ts
days('2018-04-04T16:00:00.000Z')
// => Thu Apr 05 2018 00:00:00 GMT+0800 (中国标准时间)
days('2022-12-12')
// => Mon Dec 12 2022 08:00:00 GMT+0800 (中国标准时间)
days('2022-12-12 23:45')
// => Mon Dec 12 2022 23:45:00 GMT+0800 (中国标准时间)
```
支持Date对象
```ts
days(Date.now())
// => days:1 Mon Aug 29 2022 18:02:32 GMT+0800 (中国标准时间)
```
可转化的时间数组, 成员依次为年、月、日、时、分、秒, 可以是数组或者字符串
```ts
days([2018, 10, 7, 20, 15, 19])
// => Fri Sep 30 2022 10:10:10 GMT+0800 (中国标准时间)
days([2018, 10, 7, 20, '15', '19'])
// 可以是字符串
// => Fri Sep 30 2022 10:10:10 GMT+0800 (中国标准时间)
days([2018, 10, 7])
// 可以减少成员
// => Fri Sep 30 2022 00:00:00 GMT+0800 (中国标准时间)
```
对于非0的falsey值，等同于 new Date()
```ts
days(null) == days()
days(undefined) == days()
days(false) == days()
days('') == days()
```
传入参数无法转换为时间对象会报错
```ts
days('aaa') // throw 'Invalid Date'
```
#### 源码
::: code-group
```Ts [TS版本]
import isArray from '@/verify/isArray'
export default function days(time: number | string | Date | (string | number)[] = new Date()): Date {
  const _time =
    time || time === 0
      ? isArray(time)
        ? new Date(...(time as []))
        : new Date(time as number | string | Date)
      : new Date()
  if (_time.toString() === 'Invalid Date') throw 'Invalid Date'
  return _time
}
```

```Js [JS版本]
import isArray from '@/verify/isArray';
export default function days(time = new Date()) {
    const _time = time || time === 0
        ? isArray(time)
            ? new Date(...time)
            : new Date(time)
        : new Date();
    if (_time.toString() === 'Invalid Date')
        throw 'Invalid Date';
    return _time;
}

```
:::
## formats 
获取指定格式的时间

#### 类型说明
::: info
`function formats(time?: number | string | Date | (string | number)[], format?: string): string;`
:::
#### 参数
- value 时间对象或者时间戳
- format 返回格式 默认 YYYY-MM-DD hh:mm:ss
#### 返回
- `string`
::: tip
指定格式的时间
:::
#### 示例 
获取当前的日期
```ts
formats() // '2022-07-30 12:41:26'
```
获取当前时间的年月
```ts
formats(Date.now(), 'YYYY-MM') // '2022-07'
formats(Date.now(), 'YYYY年MM月') // '2022年07月'
```
获取具体日期的时间格式
```ts
const date = new Date('2022/10/10 10:00:00')
formats(date, 'YYYY-MM-DD') // '2022-10-10'
```
#### 源码
::: code-group
```Ts [TS版本]
import days from '@/date/days'
import padInt from '@/number/padInt'
export default function formats(
  time: number | string | Date | (string | number)[] = new Date(),
  format = 'YYYY-MM-DD hh:mm:ss'
): string {
  const date = days(time)
  const YYYY = padInt(date.getFullYear())
  const YY = YYYY.toString().substring(2)
  const MM = padInt(date.getMonth() + 1)
  const M = padInt(date.getMonth() + 1, 1)
  const DD = padInt(date.getDate())
  const D = padInt(date.getDate(), 1)
  const hh = padInt(date.getHours())
  const h = padInt(date.getHours(), 1)
  const mm = padInt(date.getMinutes())
  const m = padInt(date.getMinutes(), 1)
  const ss = padInt(date.getSeconds())
  const s = padInt(date.getSeconds(), 1)
  return format
    .replace('YYYY', YYYY)
    .replace('YY', YY)
    .replace('MM', MM)
    .replace('M', M)
    .replace('DD', DD)
    .replace('D', D)
    .replace('hh', hh)
    .replace('h', h)
    .replace('mm', mm)
    .replace('m', m)
    .replace('ss', ss)
    .replace('s', s)
}
```

```Js [JS版本]
import days from '@/date/days';
import padInt from '@/number/padInt';
export default function formats(time = new Date(), format = 'YYYY-MM-DD hh:mm:ss') {
    const date = days(time);
    const YYYY = padInt(date.getFullYear());
    const YY = YYYY.toString().substring(2);
    const MM = padInt(date.getMonth() + 1);
    const M = padInt(date.getMonth() + 1, 1);
    const DD = padInt(date.getDate());
    const D = padInt(date.getDate(), 1);
    const hh = padInt(date.getHours());
    const h = padInt(date.getHours(), 1);
    const mm = padInt(date.getMinutes());
    const m = padInt(date.getMinutes(), 1);
    const ss = padInt(date.getSeconds());
    const s = padInt(date.getSeconds(), 1);
    return format
        .replace('YYYY', YYYY)
        .replace('YY', YY)
        .replace('MM', MM)
        .replace('M', M)
        .replace('DD', DD)
        .replace('D', D)
        .replace('hh', hh)
        .replace('h', h)
        .replace('mm', mm)
        .replace('m', m)
        .replace('ss', ss)
        .replace('s', s);
}

```
:::
## getDataSection 
获取时间区间

#### 类型说明
::: info
`function getDataSection(day?: number, option?: {
    start?: number | string | Date | (string | number)[];
    format?: string;
    timestamp?: boolean;
}): (number | string)[];`
:::
#### 参数
- day 间隔天数，默认1，表示今天
- option 选项
- option.start 起始时间， 默认今天
- option.format 时间格式， 默认YYYY-MM-DD
- option.timeStamp 是否时间戳，默认false， 为true时，忽略 format
#### 返回
- `(number | string)[]`
::: tip
数组 [起始时间, 结束时间]
:::
#### 异常
::: danger
day 必须是数字
:::
::: danger
option 必须是对象
:::
::: danger
option.start 必须可以被转化为Date
:::
::: danger
option.format 必须是字符串
:::
::: danger
option.timeStamp 必须是布尔值
:::
#### 示例 
```ts
getDataSection() // => ['2022-08-23', '2022-08-23']
```
近7天时间区间
```ts
getDataSection(7) // => ['2022-08-17', '2022-08-23']
```
近30天时间区间
```ts
getDataSection(30) // => ['2022-07-28', '2022-08-26']
```
指定起始时间
```ts
getDataSection(7, {start: '2022-08-17'}) // => ['2022-08-11', '2022-08-17']
```
#### 源码
::: code-group
```Ts [TS版本]
import days from '@/date/days'
import isBoolean from '@/verify/isBoolean'
import isNumber from '@/verify/isNumber'
import isObject from '@/verify/isObject'
import isString from '@/verify/isString'
import formats from '@/date/formats'
import timeStamp from '@/date/timeStamp'
export default function getDataSection(
  day = 1,
  option: {
    start?: number | string | Date | (string | number)[]
    format?: string
    timestamp?: boolean
  } = { start: new Date(), format: 'YYYY-MM-DD', timestamp: false }
): (number | string)[] {
  if (!isNumber(day)) throw 'day 必须是数字'
  if (!isObject(option)) throw 'option 必须是对象'
  const { start = new Date(), format = 'YYYY-MM-DD', timestamp = false } = option
  if (!isString(format)) throw 'option.format 必须是字符串'
  if (!isBoolean(timestamp)) throw 'option.timestamp 必须是布尔值'
  const _startTime = days(start).getTime()
  const _endTime = _startTime - ((day || 1) - 1) * 8.64e7
  if (timestamp) return [timeStamp(_endTime, format), timeStamp(_startTime, format)]
  return [formats(_endTime, format), formats(_startTime, format)]
}
```

```Js [JS版本]
import days from '@/date/days';
import isBoolean from '@/verify/isBoolean';
import isNumber from '@/verify/isNumber';
import isObject from '@/verify/isObject';
import isString from '@/verify/isString';
import formats from '@/date/formats';
import timeStamp from '@/date/timeStamp';
export default function getDataSection(day = 1, option = { start: new Date(), format: 'YYYY-MM-DD', timestamp: false }) {
    if (!isNumber(day))
        throw 'day 必须是数字';
    if (!isObject(option))
        throw 'option 必须是对象';
    const { start = new Date(), format = 'YYYY-MM-DD', timestamp = false } = option;
    if (!isString(format))
        throw 'option.format 必须是字符串';
    if (!isBoolean(timestamp))
        throw 'option.timestamp 必须是布尔值';
    const _startTime = days(start).getTime();
    const _endTime = _startTime - ((day || 1) - 1) * 8.64e7;
    if (timestamp)
        return [timeStamp(_endTime, format), timeStamp(_startTime, format)];
    return [formats(_endTime, format), formats(_startTime, format)];
}

```
:::
## getMonthDays 
获取指定月的天数

#### 类型说明
::: info
`function getMonthDays(year?: number, month?: number): number;`
:::
#### 参数
- year 年份, 默认当前年
- month 月份, 默认当前月
#### 返回
- `number`
::: tip
天数
:::
#### 异常
::: danger
Invalid Date 传入值无法转为Date时触发
:::
#### 示例 
获取当前月份的天数
```ts
getMonthDays() // => 31
```
获取指定月份的天数
```ts
getMonthDays(2022, 1) // => 31
```
#### 源码
::: code-group
```Ts [TS版本]

export default function getMonthDays(year?: number, month?: number): number {
  const _year = year ? year : new Date().getFullYear()
  const _month = month ? month : new Date().getMonth() + 1
  const days = new Date(_year, _month, 0)
  if (isNaN(days.getTime())) throw 'Invalid Date'
  return days.getDate()
}
```

```Js [JS版本]
export default function getMonthDays(year, month) {
    const _year = year ? year : new Date().getFullYear();
    const _month = month ? month : new Date().getMonth() + 1;
    const days = new Date(_year, _month, 0);
    if (isNaN(days.getTime()))
        throw 'Invalid Date';
    return days.getDate();
}

```
:::
## howLongAgo 
获取距离指定时间之前

#### 类型说明
::: info
`function howLongAgo(endTime?: number | string | Date | (string | number)[], startTime?: number | string | Date | (string | number)[]): string;`
:::
#### 参数
- endTime 目标时间戳或者格式化的时间字符
- startTime 开始时间戳或者格式化的时间字符, 默认当前时间戳，非必填
#### 返回
- `string`
::: tip
年|月|天|小时|分钟|秒 之前
:::
#### 异常
::: danger
无法转换为时间 传入值无法转为Date时触发
:::
::: danger
只接受 number | string 传入值不是 number | string时触发
:::
#### 示例 
```ts
howLongAgo(1660644035390) // => '4分钟前'
```
```ts
howLongAgo(1660644418571) // => '5秒前'
```
支持格式化的时间字符
```ts
howLongAgo('2022-08-17 09: 12: 00') // => '10分钟前'
```
指定起始时间
```ts
howLongAgo('2022-08-17 09: 12: 00', '2022-08-17 09: 15: 00')
// => '3分钟前'
```
#### 源码
::: code-group
```Ts [TS版本]
import days from '@/date/days'
export default function howLongAgo(
  endTime: number | string | Date | (string | number)[] = new Date(),
  startTime: number | string | Date | (string | number)[] = new Date()
) {
  const _endTime = days(endTime).getTime()
  const _startTime = days(startTime).getTime()
  const date = _startTime - _endTime
  if (date <= 0) throw 'startTime 必须大于 endTime'
  const dater = [
    {
      num: 31536000000,
      lab: '年'
    },
    {
      num: 2592000000,
      lab: '月'
    },
    {
      num: 86400000,
      lab: '天'
    },
    {
      num: 3600000,
      lab: '小时'
    },
    {
      num: 60000,
      lab: '分钟'
    },
    {
      num: 1000,
      lab: '秒'
    }
  ]
  for (let i = 0; i < dater.length; i++) {
    const dates = Math.floor(date / dater[i].num)
    if (dates >= 1) {
      return `${dates}${dater[i].lab}前`
    }
  }
  return ''
}
```

```Js [JS版本]
import days from '@/date/days';
export default function howLongAgo(endTime = new Date(), startTime = new Date()) {
    const _endTime = days(endTime).getTime();
    const _startTime = days(startTime).getTime();
    const date = _startTime - _endTime;
    if (date <= 0)
        throw 'startTime 必须大于 endTime';
    const dater = [
        {
            num: 31536000000,
            lab: '年'
        },
        {
            num: 2592000000,
            lab: '月'
        },
        {
            num: 86400000,
            lab: '天'
        },
        {
            num: 3600000,
            lab: '小时'
        },
        {
            num: 60000,
            lab: '分钟'
        },
        {
            num: 1000,
            lab: '秒'
        }
    ];
    for (let i = 0; i < dater.length; i++) {
        const dates = Math.floor(date / dater[i].num);
        if (dates >= 1) {
            return `${dates}${dater[i].lab}前`;
        }
    }
    return '';
}

```
:::
## timeStamp 
获取时间戳

#### 类型说明
::: info
`function timeStamp(time?: number | string | Date | (string | number)[], unit?: string): number;`
:::
#### 参数
- time 时间戳|格式化后的时间字符|时间对象
- unit 返回格式,支持毫秒或者秒,默认毫秒
#### 返回
- `number`
::: tip
时间戳
:::
#### 异常
::: danger
Invalid Date 参数time无法转为Date时触发
:::
#### 示例 
获取当前的时间戳
```ts
timeStamp() // 1659334598129
```
获取当前的时间戳，单位秒(s)
```ts
timeStamp('', 's') // 1660700890
```
获取 2022-10-12 的时间戳
```ts
timeStamp('2022-10-12') // 1665504000000
```
获取 2022-10-12 的时间戳, 以秒返回
```ts
timeStamp('2022-10-12', 's') // 1665504000
```
#### 源码
::: code-group
```Ts [TS版本]
import days from '@/date/days'
export default function timeStamp(time: number | string | Date | (string | number)[] = new Date(), unit = 'ms'): number {
  const ts = days(time).getTime()
  return unit == 's' ? (ts / 1000) | 0 : ts
}
```

```Js [JS版本]
import days from '@/date/days';
export default function timeStamp(time = new Date(), unit = 'ms') {
    const ts = days(time).getTime();
    return unit == 's' ? (ts / 1000) | 0 : ts;
}

```
:::
## isDate 
判断是否为Date

#### 类型说明
::: info
`function isDate(value: any): boolean;`
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
isDate(new Date()) => true
```
验证失败
```ts
isDate(123) => false
```
#### 源码
::: code-group
```Ts [TS版本]
import typeOf from '@/common/typeOf'
export default function isDate(value: any): boolean {
  return typeOf(value) === 'Date'
}
```

```Js [JS版本]
import typeOf from '@/common/typeOf';
export default function isDate(value) {
    return typeOf(value) === 'Date';
}

```
:::
## 设备Device
## detectDeviceType 
获取设备类型

#### 类型说明
::: info
`function detectDeviceType(): "Mobile" | "Desktop";`
:::
#### 返回
- `"Mobile" | "Desktop"`
::: tip
"Mobile" | "Desktop"
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
#### 返回
- `boolean`
::: tip
true | false
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
#### 返回
- `boolean`
::: tip
true | false
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
#### 返回
- `boolean`
::: tip
true | false
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
#### 返回
- `boolean`
::: tip
true | false
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
#### 返回
- `boolean`
::: tip
true | false
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
#### 返回
- `boolean`
::: tip
true | false
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
#### 返回
- `boolean`
::: tip
true | false
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
#### 返回
- `boolean`
::: tip
true | false
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
## 浏览器Dom
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
    const exitFullscreen = document.exitFullscreen ||
        document.msExitFullscreen ||
        document.mozCancelFullScreen ||
        document.webkitExitFullscreen;
    if (!exitFullscreen)
        throw '浏览器不支持全屏操作';
    exitFullscreen();
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
- el 指定的dom节点，不指定默认指向document.body
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
    const requestFullscreen = el.requestFullscreen ||
        el.mozRequestFullscreen ||
        el.msRequestFullscreen ||
        el.webkitRequestFullscreen;
    if (!requestFullscreen)
        throw '浏览器不支持全屏操作';
    requestFullscreen();
}

```
:::
## isDom 
是否是dom

#### 类型说明
::: info
`function isDom(tarage: Element): boolean;`
:::
#### 参数
- tarage dom
#### 返回
- `boolean`
::: tip
true | false
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
export default function isDom(tarage: Element): boolean {
  return typeOf(tarage).includes('Element')
}
```

```Js [JS版本]
import typeOf from '@/common/typeOf';
export default function isDom(tarage) {
    return typeOf(tarage).includes('Element');
}

```
:::
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
import isBoolean from "@/verify/isBoolean"
import isNumber from "@/verify/isNumber"
export default function debounce(
  func: (...params: any[]) => any,
  awit = 500,
  option: { leading?: boolean; trailing?: boolean } = { leading: false, trailing: true }
): any {
  const { leading = false, trailing = true } = option
  let _leading = leading
  let timeout = 0
  if (awit && !isNumber(awit)) throw 'awit不是number'
  if (!isBoolean(leading)) throw 'leading不是boolean'
  if (!isBoolean(trailing)) throw 'trailing不是boolean'
  return function (this: unknown, ...args: any[]) {
    clearTimeout(timeout)
    if (_leading) {
      func.apply(this, args)
      _leading = false
    }
    timeout = setTimeout(() => {
      _leading = leading
      trailing && func.apply(this, args)
    }, awit)
  }
}

```

```Js [JS版本]
import isBoolean from "@/verify/isBoolean";
import isNumber from "@/verify/isNumber";
export default function debounce(func, awit = 500, option = { leading: false, trailing: true }) {
    const { leading = false, trailing = true } = option;
    let _leading = leading;
    let timeout = 0;
    if (awit && !isNumber(awit))
        throw 'awit不是number';
    if (!isBoolean(leading))
        throw 'leading不是boolean';
    if (!isBoolean(trailing))
        throw 'trailing不是boolean';
    return function (...args) {
        clearTimeout(timeout);
        if (_leading) {
            func.apply(this, args);
            _leading = false;
        }
        timeout = setTimeout(() => {
            _leading = leading;
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

export default function once(func: (...params: any[]) => any) {
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
export default function once(func) {
    let called = false;
    return function (...args) {
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
import isBoolean from "@/verify/isBoolean"
import isNumber from "@/verify/isNumber"
export default function throttle(func: (...params: any[]) => any, wait = 500, immediate = false) {
  let timeout = 0
  let _immediate = immediate
  if (wait && !isNumber(wait)) throw 'wait不是number'
  if (!isBoolean(immediate)) throw 'immediate不是boolean'
  return function (this: unknown, ...args: any[]) {
    if (_immediate) {
      func.apply(this, args)
      _immediate = false
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
import isBoolean from "@/verify/isBoolean";
import isNumber from "@/verify/isNumber";
export default function throttle(func, wait = 500, immediate = false) {
    let timeout = 0;
    let _immediate = immediate;
    if (wait && !isNumber(wait))
        throw 'wait不是number';
    if (!isBoolean(immediate))
        throw 'immediate不是boolean';
    return function (...args) {
        if (_immediate) {
            func.apply(this, args);
            _immediate = false;
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
## 数字Number
## padInt 
数字补0

#### 类型说明
::: info
`function padInt(value: string | number, len?: number): string;`
:::
#### 参数
- value 数字或者字符串的数字
- len 补充的长度， 默认2
#### 返回
- `string`
::: tip
返回字符串
:::
#### 示例 
```ts
padInt(1) => '01'
```
```ts
padInt(12) => '12'
```
```ts
padInt(12, 3) => '012'
```
#### 源码
::: code-group
```Ts [TS版本]

export default function padInt(value: string | number, len = 2): string {
  if (isNaN(Number(value))) throw '不是一个合法的数字'
  return Number(value).toString().padStart(len, '0')
}
```

```Js [JS版本]
export default function padInt(value, len = 2) {
    if (isNaN(Number(value)))
        throw '不是一个合法的数字';
    return Number(value).toString().padStart(len, '0');
}

```
:::
## toFixed 
数字保留小数位

#### 类型说明
::: info
`function toFixed(value: number, num?: number, isRound?: boolean): number;`
:::
#### 参数
- value 数字
- num 保留的小数位
- isRound 是否需要四舍五入
#### 返回
- `number`
::: tip
返回数字
:::
#### 异常
::: danger
无法转换为数字
:::
::: danger
isRound不是boolean
:::
#### 示例 
```ts
toFixed(1) // 1
```
```ts
toFixed(1.21) // 1.21
```
默认会四舍五入
```ts
toFixed(1.238, 2) // 1.24
```
不进行四舍五入
```ts
toFixed(1.238, 2, false) // 1.23
```
#### 源码
::: code-group
```Ts [TS版本]
import isBoolean from '@/verify/isBoolean'
import toNumber from '@/number/toNumber'
export default function toFixed(value: number, num = 2, isRound = true): number {
  const _val = toNumber(value)
  if (!isBoolean(isRound)) throw 'isRound不是boolean'
  if (isRound) return parseFloat(_val.toFixed(num))
  return parseFloat(_val.toFixed(num + 1).slice(0, -1))
}
```

```Js [JS版本]
import isBoolean from '@/verify/isBoolean';
import toNumber from '@/number/toNumber';
export default function toFixed(value, num = 2, isRound = true) {
    const _val = toNumber(value);
    if (!isBoolean(isRound))
        throw 'isRound不是boolean';
    if (isRound)
        return parseFloat(_val.toFixed(num));
    return parseFloat(_val.toFixed(num + 1).slice(0, -1));
}

```
:::
## toNumber 
转换为数字

#### 类型说明
::: info
`function toNumber<T>(value: T): number;`
:::
#### 参数
- value 任意值
#### 返回
- `number`
::: tip
返回数字
:::
#### 异常
::: danger
无法转换为数字
:::
#### 示例 
```ts
toNumber('1') // 1
```
```ts
toNumber('1.2') // 1.2
```
```ts
toNumber('a123') // error => a123无法转换为数字
```
#### 源码
::: code-group
```Ts [TS版本]

export default function toNumber<T>(value: T): number {
  if (isNaN(Number(value))) throw `${value}无法转换为数字`
  return Number(value)
}
```

```Js [JS版本]
export default function toNumber(value) {
    if (isNaN(Number(value)))
        throw `${value}无法转换为数字`;
    return Number(value);
}

```
:::
## isInt 
是否为整数

#### 类型说明
::: info
`function isInt(value: any): boolean;`
:::
#### 参数
- value 检查的值
#### 返回
- `boolean`
::: tip
true | false
:::
#### 示例 
```ts
isInt(1) // => true
```
```ts
isInt(1.21) // => false
```
#### 源码
::: code-group
```Ts [TS版本]

export default function isInt(value: any): boolean {
  return Number.isInteger(value)
}

```

```Js [JS版本]
export default function isInt(value) {
    return Number.isInteger(value);
}

```
:::
## isNumber 
判断是否为数字

#### 类型说明
::: info
`function isNumber(value: any): boolean;`
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
isNumber(123) => true
```
验证失败
```ts
isNumber('123') => false
```
#### 源码
::: code-group
```Ts [TS版本]
import typeOf from '@/common/typeOf'
export default function isNumber(value: any): boolean {
  return typeOf(value) === 'Number'
}
```

```Js [JS版本]
import typeOf from '@/common/typeOf';
export default function isNumber(value) {
    return typeOf(value) === 'Number';
}

```
:::
## 对象Object
## arrObjSum 
数组对象key值求和

#### 类型说明
::: info
`function arrObjSum<T extends Record<string, any>, K extends keyof T>(object: T[], keys: K[]): Record<string, any>;`
:::
#### 参数
- object 目标对象
- keys 需要求和的key数组
#### 返回
- `Record<string, any>`
::: tip
求和后的对象
:::
#### 示例 
```ts
arrObjSum([{id: 1, age: 10, sx: 1}, {id: 2, age: 20, sx: 2}], ['id', 'age'])
// => {id: 3, age: 30}
```
#### 源码
::: code-group
```Ts [TS版本]
import isArrObj from "@/verify/isArrObj"
export default function arrObjSum<T extends Record<string, any>, K extends keyof T>(
  object: T[],
  keys: K[]
): Record<string, any> {
  if (!isArrObj(object)) throw 'object 必须是数组对象'
  const _object = {} as Record<K, number>
  keys.forEach(item => {
    _object[item] = object.reduce((start: number, end) => {
      const value = start + Number(end[item])
      return isNaN(value) ? 0 : value
    }, 0)
  })
  return _object
}
```

```Js [JS版本]
import isArrObj from "@/verify/isArrObj";
export default function arrObjSum(object, keys) {
    if (!isArrObj(object))
        throw 'object 必须是数组对象';
    const _object = {};
    keys.forEach(item => {
        _object[item] = object.reduce((start, end) => {
            const value = start + Number(end[item]);
            return isNaN(value) ? 0 : value;
        }, 0);
    });
    return _object;
}

```
:::
## assign 
合并对象

#### 类型说明
::: info
`function assign(target: Record<string, any>, ...sources: Record<string, any>[]): Record<string, any>;`
:::
#### 参数
- target 目标对象，被合并的对象
- sources 源对象，可以多个
#### 返回
- `Record<string, any>`
::: tip
目标对象
:::
#### 示例 
对象合并效果与Object.assign一致
```ts
assign({a: 1, c: 3}, {c: 5}) // => {a: 1, c: 5}
```
#### 源码
::: code-group
```Ts [TS版本]
import isEmptyObject from "@/verify/isEmptyObject"
export default function assign(target: Record<string, any>, ...sources: Record<string, any>[]): Record<string, any> {
  if (isEmptyObject(target)) return {}
  return Object.assign(target, ...sources)
}
```

```Js [JS版本]
import isEmptyObject from "@/verify/isEmptyObject";
export default function assign(target, ...sources) {
    if (isEmptyObject(target))
        return {};
    return Object.assign(target, ...sources);
}

```
:::
## assignMin 
最小合并对象

#### 类型说明
::: info
`function assignMin(target: Record<string, any>, ...sources: Record<string, any>[]): Record<string, any>;`
:::
#### 参数
- target 目标对象，被合并的对象
- sources 源对象，可以多个
#### 返回
- `Record<string, any>`
::: tip
目标对象
:::
#### 示例 
最小合并对象，只会合并源对象原有的属性，其他忽略
```ts
assignMin({a: 1, c: 1}, {a: 2, b: 3}, {c: 3}) // => {a: 2, c: 3}
```
#### 源码
::: code-group
```Ts [TS版本]
import isEmptyObject from "@/verify/isEmptyObject"
export default function assignMin(target: Record<string, any>, ...sources: Record<string, any>[]): Record<string, any> {
  if (isEmptyObject(target)) return {}
  const _object = Object.assign({}, target, ...sources)
  Object.keys(target).forEach(item => {
    target[item] = _object[item]
  })
  return target
}
```

```Js [JS版本]
import isEmptyObject from "@/verify/isEmptyObject";
export default function assignMin(target, ...sources) {
    if (isEmptyObject(target))
        return {};
    const _object = Object.assign({}, target, ...sources);
    Object.keys(target).forEach(item => {
        target[item] = _object[item];
    });
    return target;
}

```
:::
## createData 
指定深度或者广度的对象

#### 类型说明
::: info
`function createData(deep?: number, breadth?: number): {
    [key: number]: any;
    data?: any;
};`
:::
#### 参数
- deep 深度
- breadth 广度
#### 返回
- `{
    [key: number]: any;
    data?: any;
}`
::: tip
对象
:::
#### 示例 
```ts
createData(1) // => {data: {}}
```
```ts
createData(2, 2)
// =>
{
"data": {
"0": 0,
"1": 1,
"data": {
"0": 0,
"1": 1
}
}
}
```
#### 源码
::: code-group
```Ts [TS版本]

export default function createData(deep = 1, breadth = 0) {
  const data: { data?: any; [key: number]: any } = {}
  let temp = data
  for (let i = 0; i < deep; i++) {
    temp = temp['data'] = {}
    for (let j = 0; j < breadth; j++) {
      temp[j] = j
    }
  }
  return data
}

```

```Js [JS版本]
export default function createData(deep = 1, breadth = 0) {
    const data = {};
    let temp = data;
    for (let i = 0; i < deep; i++) {
        temp = temp['data'] = {};
        for (let j = 0; j < breadth; j++) {
            temp[j] = j;
        }
    }
    return data;
}

```
:::
## omit 
删除指定对象的指定属性

#### 类型说明
::: info
`function omit(object: Record<string, any>, keys?: string[]): Record<string, any>;`
:::
#### 参数
- object 指定对象
- keys 指定属性
#### 返回
- `Record<string, any>`
::: tip
新的对象
:::
#### 示例 
```ts
omit({a: 1, b: 2, c: 3}, ['a', 'c']) // => {b: 2}
```
#### 源码
::: code-group
```Ts [TS版本]
import deepClone from "@/util/deepClone"
export default function omit(object: Record<string, any>, keys: string[] = []): Record<string, any> {
  const _object = deepClone(object)
  Object.keys(_object).forEach(item => {
    if (keys.includes(item)) delete _object[item]
  })
  return _object
}
```

```Js [JS版本]
import deepClone from "@/util/deepClone";
export default function omit(object, keys = []) {
    const _object = deepClone(object);
    Object.keys(_object).forEach(item => {
        if (keys.includes(item))
            delete _object[item];
    });
    return _object;
}

```
:::
## isEmptyObject 
判断对象是否是空对象

#### 类型说明
::: info
`function isEmptyObject(object: Record<string, unknown>): boolean;`
:::
#### 参数
- object 对象
#### 返回
- `boolean`
::: tip
true | false
:::
#### 异常
::: danger
传入参数不是Object 传入参数不是Object时触发
:::
#### 示例 
验证通过
```ts
isEmptyObject({}) => true
```
验证失败
```ts
isEmptyObject({a: 1}) => false
```
#### 源码
::: code-group
```Ts [TS版本]
import isObject from '@/verify/isObject'
export default function isEmptyObject(object: Record<string, unknown>): boolean {
  if (!isObject(object)) throw '传入参数不是Object'
  return !Object.keys(object).length
}
```

```Js [JS版本]
import isObject from '@/verify/isObject';
export default function isEmptyObject(object) {
    if (!isObject(object))
        throw '传入参数不是Object';
    return !Object.keys(object).length;
}

```
:::
## isMap 
判断是否为Map

#### 类型说明
::: info
`function isMap(value: any): boolean;`
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
isMap(new Map()) => true
```
验证失败
```ts
isMap(123) => false
```
#### 源码
::: code-group
```Ts [TS版本]
import typeOf from '@/common/typeOf'
export default function isMap(value: any): boolean {
  return typeOf(value) === 'Map'
}
```

```Js [JS版本]
import typeOf from '@/common/typeOf';
export default function isMap(value) {
    return typeOf(value) === 'Map';
}

```
:::
## isObject 
判断是否为对象

#### 类型说明
::: info
`function isObject(value: any): boolean;`
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
isObject({}) => true
```
验证失败
```ts
isObject([]) => false
```
#### 源码
::: code-group
```Ts [TS版本]
import typeOf from '@/common/typeOf'
export default function isObject(value: any): boolean {
  return value !== null && typeOf(value) === 'Object'
}
```

```Js [JS版本]
import typeOf from '@/common/typeOf';
export default function isObject(value) {
    return value !== null && typeOf(value) === 'Object';
}

```
:::
## isSet 
判断是否为Set

#### 类型说明
::: info
`function isSet(value: any): boolean;`
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
isSet(new Set()) => true
```
验证失败
```ts
isSet(123) => false
```
#### 源码
::: code-group
```Ts [TS版本]
import typeOf from '@/common/typeOf'
export default function isSet(value: any): boolean {
  return typeOf(value) === 'Set'
}
```

```Js [JS版本]
import typeOf from '@/common/typeOf';
export default function isSet(value) {
    return typeOf(value) === 'Set';
}

```
:::
## isSymbol 
判断是否为Symbol

#### 类型说明
::: info
`function isSymbol(value: any): boolean;`
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
isSymbol(Symbol(1)) => true
```
验证失败
```ts
isSymbol(Symbol) => false
```
#### 源码
::: code-group
```Ts [TS版本]
import typeOf from '@/common/typeOf'
export default function isSymbol(value: any): boolean {
  return typeOf(value) === 'Symbol'
}
```

```Js [JS版本]
import typeOf from '@/common/typeOf';
export default function isSymbol(value) {
    return typeOf(value) === 'Symbol';
}

```
:::
## 字符串String
## byteSize 
获取字符串的字节长度

#### 类型说明
::: info
`function byteSize(str: any): number;`
:::
#### 参数
- str 传入参数, 如果参数不是字符串，会先调用toString方法
#### 返回
- `number`
::: tip
字符串
:::
#### 示例 
```ts
byteSize('fred') // 4
```
```ts
byteSize('你好!') // 7
```
生僻汉字
```ts
byteSize('𠮷') // 4
```
参数不是字符串，会先调用toString方法
```ts
byteSize(true) // '4'
```
#### 源码
::: code-group
```Ts [TS版本]
import isString from "@/verify/isString"
export default function byteSize(str: any): number {
  const _str = isString(str) ? str : str.toString()
  return new Blob([_str]).size
}
```

```Js [JS版本]
import isString from "@/verify/isString";
export default function byteSize(str) {
    const _str = isString(str) ? str : str.toString();
    return new Blob([_str]).size;
}

```
:::
## mask 
字符串替换

使用指定的掩码字符替换start~length之间的所有字符

#### 类型说明
::: info
`function mask(str: string, start?: number, length?: number, mask?: string): string;`
:::
#### 参数
- str 传入参数, 如果参数不是字符串，会先调用toString方法
- start 开始下标
- length 长度
- mask 掩码字符 默认
#### 返回
- `string`
::: tip
字符串
:::
#### 异常
::: danger
start 必须是数字  start不是数字时触发
:::
::: danger
length 必须是数字 length存在且不是数字时触发
:::
::: danger
mask 必须是字符串 mask不是字符串时触发
:::
#### 示例 
```ts
mask('123456') // => ''
```
设置开始位置
```ts
mask('123456', 2) // => '12'
```
设置长度
```ts
mask('123456', 2, 3) // => '126'
```
修改掩码字符
```ts
mask('123456', 2, 3, '.') // => '12...6'
```
#### 源码
::: code-group
```Ts [TS版本]
import isNumber from "@/verify/isNumber"
import isString from "@/verify/isString"
export default function mask(str: string, start = 0, length?: number, mask = '*'): string {
  const _str = isString(str) ? str : str.toString()
  if (!isNumber(start)) throw 'start 必须是数字'
  if ((length || length == 0) && !isNumber(length)) throw 'length 必须是数字'
  if (!isString(mask)) throw 'mask 必须是字符串'
  const val = length || length == 0 ? _str.slice(start, length + start) : _str.slice(start)
  return _str.replace(val, mask.padEnd(val.length, mask))
}

```

```Js [JS版本]
import isNumber from "@/verify/isNumber";
import isString from "@/verify/isString";
export default function mask(str, start = 0, length, mask = '*') {
    const _str = isString(str) ? str : str.toString();
    if (!isNumber(start))
        throw 'start 必须是数字';
    if ((length || length == 0) && !isNumber(length))
        throw 'length 必须是数字';
    if (!isString(mask))
        throw 'mask 必须是字符串';
    const val = length || length == 0 ? _str.slice(start, length + start) : _str.slice(start);
    return _str.replace(val, mask.padEnd(val.length, mask));
}

```
:::
## removeHTML 
移除字符串中的html标签

#### 类型说明
::: info
`function removeHTML(str: any): string;`
:::
#### 参数
- str 传入参数, 如果参数不是字符串，会先调用toString方法
#### 返回
- `string`
::: tip
字符串
:::
#### 示例 
```ts
removeHTML('<p>这是<em>一个</em>段落。</p>') // => 这是一个段落。
```
转义符也会被去除
```ts
removeHTML('<p>这是<em>一个</em>段落。&nbsp;</p>') // => 这是一个段落。
```
参数不是字符串，会先调用toString方法
```ts
removeHTML(true) // 'true'
```
#### 源码
::: code-group
```Ts [TS版本]
import isString from "@/verify/isString"
export default function removeHTML(str: any): string {
  const _str = isString(str) ? str : str.toString()
  const escapeReg =
    /&(lt|gt|le|ge|nbsp|amp|quot|times|Alpha|Beta|Gamma|Delta|Epsilon|Zeta|Eta|Theta|Iota|Kappa|Lambda|MU|NU|Xi|Omicron|Pi|Rho|Sigma|Tau|Upsilon|Phi|Chi|Psi|Omega|alpha|beta|gamma|delta|epsilon|zeta|eta|theta|iota|kappa|lambda|mu|nu|xi|omicron|pi|rho|sigmaf|sigma|tau|upsilon|phi|chi|psi|omega|thetasym|upsih|piv|circ|tilde|ndash|permil|lsquo|rsquo|ldquo|rdquo|prime);/gi
  return _str
    .replace(/<[^>]+>/g, '')
    .replace(escapeReg, '')
    .trim()
}
```

```Js [JS版本]
import isString from "@/verify/isString";
export default function removeHTML(str) {
    const _str = isString(str) ? str : str.toString();
    const escapeReg = /&(lt|gt|le|ge|nbsp|amp|quot|times|Alpha|Beta|Gamma|Delta|Epsilon|Zeta|Eta|Theta|Iota|Kappa|Lambda|MU|NU|Xi|Omicron|Pi|Rho|Sigma|Tau|Upsilon|Phi|Chi|Psi|Omega|alpha|beta|gamma|delta|epsilon|zeta|eta|theta|iota|kappa|lambda|mu|nu|xi|omicron|pi|rho|sigmaf|sigma|tau|upsilon|phi|chi|psi|omega|thetasym|upsih|piv|circ|tilde|ndash|permil|lsquo|rsquo|ldquo|rdquo|prime);/gi;
    return _str
        .replace(/<[^>]+>/g, '')
        .replace(escapeReg, '')
        .trim();
}

```
:::
## upperFirst 
首字母大写

#### 类型说明
::: info
`function upperFirst(str: any): string;`
:::
#### 参数
- str 传入参数, 如果参数不是字符串，会先调用toString方法
#### 返回
- `string`
::: tip
字符串
:::
#### 示例 
```ts
upperFirst('fred') // 'Fred'
```
自定义时间
```ts
upperFirst('FRED') // 'FRED'
```
参数不是字符串，会先调用toString方法
```ts
upperFirst(true) // 'True'
```
#### 源码
::: code-group
```Ts [TS版本]

export default function upperFirst(str: any): string {
  const _str = (str as string).toString()
  return _str.replace(/(\w)/, $1 => $1.toLocaleUpperCase())
}
```

```Js [JS版本]
export default function upperFirst(str) {
    const _str = str.toString();
    return _str.replace(/(\w)/, $1 => $1.toLocaleUpperCase());
}

```
:::
## isString 
判断是否为字符串

#### 类型说明
::: info
`function isString(value: any): boolean;`
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
isString('abc') => true
```
验证失败
```ts
isString(123) => false
```
#### 源码
::: code-group
```Ts [TS版本]
import typeOf from '@/common/typeOf'
export default function isString(value: any): boolean {
  return typeOf(value) === 'String'
}
```

```Js [JS版本]
import typeOf from '@/common/typeOf';
export default function isString(value) {
    return typeOf(value) === 'String';
}

```
:::
## URL
## getUrlParam 
获取url上的参数

#### 类型说明
::: info
`function getUrlParam(name: string, url?: string): string | null;`
:::
#### 参数
- name 参数名，必填
- url url地址，为空时是window.location.href， 非必填
#### 返回
- `string | null`
::: tip
符合的值或者null
:::
#### 异常
::: danger
url 参数错误，不是有效的
:::
#### 示例 
支持search和hash中取值，如果search和hash中有相同的参数，则默认使用search。
不传值时，默认从window.location.href中取值
```ts
getUrlParam('id') => 'a' // window.location.href: https://a.b.com/?id=a
```
从第二个参数的url上取值
```ts
getUrlParam('id', 'https://a.b.com/?id=b') => 'b'
```
在第二个参数的url上优先从search中提取值。
```ts
getUrlParam('id', 'http://a.b.com/?id=a#/index/?id=b') => 'a'
```
#### 源码
::: code-group
```Ts [TS版本]
import isURL from "@/url/isURL"
export default function getUrlParam(name: string, url: string = window.location.href): string | null {
  // 检查url值是否有效
  if (!isURL(url)) throw 'url 参数错误，不是有效的'
  const urlPar = new URL(url)
  // 构造一个含有目标参数的正则表达式对象
  const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
  // 匹配目标参数
  const r = urlPar.search.substring(1).match(reg)
  const h = urlPar.hash.split('?')[1]?.match(reg)
  // 返回参数
  if (r != null) return decodeURIComponent(r[2])
  if (h != null) return decodeURIComponent(h[2])
  return null
}
```

```Js [JS版本]
import isURL from "@/url/isURL";
export default function getUrlParam(name, url = window.location.href) {
    // 检查url值是否有效
    if (!isURL(url))
        throw 'url 参数错误，不是有效的';
    const urlPar = new URL(url);
    // 构造一个含有目标参数的正则表达式对象
    const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
    // 匹配目标参数
    const r = urlPar.search.substring(1).match(reg);
    const h = urlPar.hash.split('?')[1]?.match(reg);
    // 返回参数
    if (r != null)
        return decodeURIComponent(r[2]);
    if (h != null)
        return decodeURIComponent(h[2]);
    return null;
}

```
:::
## getUrlQuery 
获取url上的参数

#### 类型说明
::: info
`function getUrlQuery(option?: {
    url?: string;
    type?: 'search' | 'hash' | 'all';
}): Record<string, any>;`
:::
#### 参数
- option 可选的对象
- option.url url地址，默认window.location.href， 非必填
- option.type 类型，默认all， 非必填, 可选值：all, query, hash
#### 返回
- `Record<string, any>`
::: tip
由参数组成的对象
:::
#### 异常
::: danger
参数错误， 应该传入一个对象 option不是对象时触发
:::
::: danger
url参数错误，不是有效的  url不是有效链接时触发
:::
::: danger
type 参数错误， 应该传入一个字符串 'search' | 'hash' | 'all'
:::
#### 示例 
支持search和hash中取值，如果search和hash中有相同的参数，则默认使用search。
不传值时，默认从window.location.href中取值
```ts
getUrlQuery() => {a：'1',b:'2'}
// => window.location.href: https://a.b.com/?a=1&b=2
```
从参数的url上取值
```ts
getUrlQuery({url: 'http://a.b.com/?a=1&b=2#/index/?c=3&b=4'}) // => {a: '1', b: '2', c: '3'}
```
从参数的url上取值,只在search中取值
```ts
getUrlQuery({url: 'http://a.b.com/?a=1&b=2#/index/?c=3&b=4', type: 'search'}) // => {id: '1', b: '2'}
```
从参数的url上取值,只在hash中取值
```ts
getUrlQuery({url: 'http://a.b.com/?a=1&b=2#/index/?c=3&b=4', type: 'hash'}) // => {c: '3', b: '4'}
```
#### 源码
::: code-group
```Ts [TS版本]
import isNullOrUndefined from "@/verify/isNullOrUndefined";
import isObject from "@/verify/isObject";
import isURL from "@/url/isURL";
import isString from "@/verify/isString";
import qsParse from "@/url/qsParse";
export default function getUrlQuery(
  option: { url?: string; type?: 'search' | 'hash' | 'all' } = {
    url: window.location.href,
    type: 'all'
  }
): Record<string, any> {
  // 检查参数类型
  if (isNullOrUndefined(option) || !isObject(option)) throw `参数错误， 应该传入一个对象`
  // 检查参数属性是否存在，不存在设置默认值
  if (!option.url) option.url = window.location.href
  if (!option.type) option.type = 'all'
  // 检查参数属性值类型
  if (!isURL(option.url)) throw `url 参数错误，不是有效的`
  if (!isString(option.type) || !['search', 'hash', 'all'].includes(option.type))
    throw `type 参数错误， 应该传入一个字符串 'search' | 'hash' | 'all'`
  // 获取参数对象
  const { url, type } = option
  const urlStr: URL = new URL(url)
  const urlSearch = urlStr.search.substring(1)
  const urlHash = urlStr.hash.indexOf('?') >= 0 ? urlStr.hash.slice(urlStr.hash.indexOf('?') + 1) : ''
  const searchArr = type == 'hash' ? {} : qsParse(urlSearch)
  const hashArr = type == 'search' ? {} : qsParse(urlHash)
  return Object.assign({}, searchArr, hashArr, searchArr)
}
```

```Js [JS版本]
import isNullOrUndefined from "@/verify/isNullOrUndefined";
import isObject from "@/verify/isObject";
import isURL from "@/url/isURL";
import isString from "@/verify/isString";
import qsParse from "@/url/qsParse";
export default function getUrlQuery(option = {
    url: window.location.href,
    type: 'all'
}) {
    // 检查参数类型
    if (isNullOrUndefined(option) || !isObject(option))
        throw `参数错误， 应该传入一个对象`;
    // 检查参数属性是否存在，不存在设置默认值
    if (!option.url)
        option.url = window.location.href;
    if (!option.type)
        option.type = 'all';
    // 检查参数属性值类型
    if (!isURL(option.url))
        throw `url 参数错误，不是有效的`;
    if (!isString(option.type) || !['search', 'hash', 'all'].includes(option.type))
        throw `type 参数错误， 应该传入一个字符串 'search' | 'hash' | 'all'`;
    // 获取参数对象
    const { url, type } = option;
    const urlStr = new URL(url);
    const urlSearch = urlStr.search.substring(1);
    const urlHash = urlStr.hash.indexOf('?') >= 0 ? urlStr.hash.slice(urlStr.hash.indexOf('?') + 1) : '';
    const searchArr = type == 'hash' ? {} : qsParse(urlSearch);
    const hashArr = type == 'search' ? {} : qsParse(urlHash);
    return Object.assign({}, searchArr, hashArr, searchArr);
}

```
:::
## isURL 
是否是url

#### 类型说明
::: info
`function isURL(url: string): boolean;`
:::
#### 参数
- url 需要验证的内容，类型：string
#### 返回
- `boolean`
::: tip
Boolean
:::
#### 异常
::: danger
参数必须是string 参数不是string时触发
:::
#### 示例 
```ts
isURL('https://a.b.c')
// => true
```
```ts
isURL('123')
// => false
```
#### 源码
::: code-group
```Ts [TS版本]
import isString from "@/verify/isString"
export default function isURL(url: string): boolean {
  if (!isString(url)) throw '参数必须是string'
  // if (URL.canParse) return URL.canParse(url)
  try {
    new URL(url)
    return true
  } catch (err) {
    return false
  }
}
```

```Js [JS版本]
import isString from "@/verify/isString";
export default function isURL(url) {
    if (!isString(url))
        throw '参数必须是string';
    // if (URL.canParse) return URL.canParse(url)
    try {
        new URL(url);
        return true;
    }
    catch (err) {
        return false;
    }
}

```
:::
## qsParse 
参数序列化-字符转对象

#### 类型说明
::: info
`function qsParse(query?: string, decode?: boolean): {
    [k: string]: any;
};`
:::
#### 返回
- `{
    [k: string]: any;
}`
::: tip
由参数组成的对象
:::
#### 示例 
支持search和hash中取值，如果search和hash中有相同的参数，则默认使用search。
不传值时，默认从window.location中取值
```ts
qsParse('a=1&b=2')
// => 'a=1&b=2'
```
```ts
qsParse('a=1&b=2&c={"a":1}')
// => { a:1, b:2, c: { a :1 } }
```
```ts
qsParse('a=1&b=2&c={"a":1}', false)
// => { a:1, b:2, c: '{ a: 1 }' }
```
#### 源码
::: code-group
```Ts [TS版本]
import isJsonString from "@/verify/isJsonString"
export default function qsParse(query = '', decode = true): { [k: string]: any } {
  const queryObj = JSON.parse(JSON.stringify(Object.fromEntries(new URLSearchParams(query) as any)))
  if (decode) {
    Object.keys(queryObj).forEach(key => {
      if (isJsonString(queryObj[key]) && (queryObj[key].startsWith('{') || queryObj[key].startsWith('[')))
        queryObj[key] = JSON.parse(queryObj[key])
    })
  }
  return queryObj
}
```

```Js [JS版本]
import isJsonString from "@/verify/isJsonString";
export default function qsParse(query = '', decode = true) {
    const queryObj = JSON.parse(JSON.stringify(Object.fromEntries(new URLSearchParams(query))));
    if (decode) {
        Object.keys(queryObj).forEach(key => {
            if (isJsonString(queryObj[key]) && (queryObj[key].startsWith('{') || queryObj[key].startsWith('[')))
                queryObj[key] = JSON.parse(queryObj[key]);
        });
    }
    return queryObj;
}

```
:::
## qsStringify 
参数序列化-对象转字符

#### 类型说明
::: info
`function qsStringify(query?: Record<string, any>, decode?: boolean): string;`
:::
#### 返回
- `string`
::: tip
由参数组成的对象
:::
#### 示例 
```ts
qsStringify({a: 1, b: 2})
// => 'a=1&b=2'
```
如果传入内容是undefined或者null，这个参数会被丢弃
如果你想空参数，可以使用 `''`
```ts
qsStringify({a: 1, b: undefined, c: null})
// => 'a=1&b=2&c=%7B%22a%22%3A1%7D'
```
```ts
qsStringify({a: 1, b: 2, c: {a: 1}})
// => 'a=1&b=2&c=%7B%22a%22%3A1%7D'
```
解码后输出
```ts
qsStringify({a: 1, b: 2, c: {a: 1}}, true)
// => 'a=1&b=2&c={"a":1}'
```
#### 源码
::: code-group
```Ts [TS版本]
import isBasicType from "@/verify/isBasicType"
import isNullOrUndefined from "@/verify/isNullOrUndefined"
export default function qsStringify(query: Record<string, any> = {}, decode = false): string {
  // 缓存Object.keys(query)的结果，避免重复调用
  const keys = Object.keys(query)
  // 使用数组和join方法代替URLSearchParams对象，减少内存占用和转换开销
  const queryArr = []
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i]
    const value = query[key]
    if (isNullOrUndefined(value)) continue
    // 使用三元运算符代替if语句，简化代码逻辑
    const encodedValue = isBasicType(value) ? encodeURIComponent(value) : encodeURIComponent(JSON.stringify(value))
    queryArr.push(key + '=' + encodedValue)
  }
  // 根据decode参数决定是否解码
  return decode ? decodeURIComponent(queryArr.join('&')) : queryArr.join('&')
}
```

```Js [JS版本]
import isBasicType from "@/verify/isBasicType";
import isNullOrUndefined from "@/verify/isNullOrUndefined";
export default function qsStringify(query = {}, decode = false) {
    // 缓存Object.keys(query)的结果，避免重复调用
    const keys = Object.keys(query);
    // 使用数组和join方法代替URLSearchParams对象，减少内存占用和转换开销
    const queryArr = [];
    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        const value = query[key];
        if (isNullOrUndefined(value))
            continue;
        // 使用三元运算符代替if语句，简化代码逻辑
        const encodedValue = isBasicType(value) ? encodeURIComponent(value) : encodeURIComponent(JSON.stringify(value));
        queryArr.push(key + '=' + encodedValue);
    }
    // 根据decode参数决定是否解码
    return decode ? decodeURIComponent(queryArr.join('&')) : queryArr.join('&');
}

```
:::
## reviseUrlQuery 
修改url上的参数

#### 类型说明
::: info
`function reviseUrlQuery(option: {
    search?: Record<string, any>;
    hash?: Record<string, any>;
}, url?: string): string;`
:::
#### 参数
- option.search 对象 用于修改search部分的数据， 非必填
- option.hash 对象 用于修改hash部分的数据， 非必填
- url url地址，默认window.location.href， 非必填
#### 返回
- `string`
::: tip
修改后的url地址
:::
#### 异常
::: danger
参数错误， 应该传入一个对象 option不是对象时触发
:::
::: danger
search 参数错误， 应该传入一个对象 option不是对象时触发
:::
::: danger
hash 参数错误， 应该传入一个对象 option不是对象时触发
:::
::: danger
url 参数错误，不是有效的
:::
#### 示例 
修改search中的值
```ts
reviseUrlQuery({search: {a: '2', b: '3'}}, 'http://a.b.com/?a=1&b=2#/index/?c=3&b=4')
// => 'http://a.b.com/?a=2&b=3#/index/?c=3&b=4'
```
修改hash中的值
```ts
reviseUrlQuery({hash: {c: '2', b: '3'}}, 'http://a.b.com/?a=1&b=2#/index/?c=3&b=4')
// => 'http://a.b.com/?a=1&b=2#/index/?c=2&b=3'
```
修改search、hash中的值
```ts
reviseUrlQuery({search: {a: '5', b: '6'}, hash: {c: '7', b: '8'}}, 'http://a.b.com/?a=1&b=2#/index/?c=3&b=4')
// => 'http://a.b.com/?a=5&b=6#/index/?c=7&b=8'
```
#### 源码
::: code-group
```Ts [TS版本]
import isNullOrUndefined from "@/verify/isNullOrUndefined";
import isObject from "@/verify/isObject";
import getUrlQuery from "@/url/getUrlQuery";
import isURL from "@/url/isURL";
import qsStringify from "@/url/qsStringify";
export default function reviseUrlQuery(
  option: { search?: Record<string, any>; hash?: Record<string, any> },
  url: string = window.location.href
): string {
  // 检查参数类型
  if (isNullOrUndefined(option) || !isObject(option)) throw `参数错误， 应该传入一个对象`
  // 检查参数属性存在但不是对象
  if (option.search && !isObject(option.search)) throw `search 参数错误， 应该传入一个对象`
  if (option.hash && !isObject(option.hash)) throw `hash 参数错误， 应该传入一个对象`
  // 检查url值是否有效
  if (!isURL(url)) throw 'url 参数错误，不是有效的'
  // 修改参数的实现逻辑
  const { origin, pathname } = new URL(url)
  let { search, hash } = new URL(url)
  if (option.search) {
    const arr = getUrlQuery({ url, type: 'search' })
    const searchStr = qsStringify(Object.assign({}, arr, option.search))
    search = searchStr ? '?' + searchStr : ''
  }
  if (option.hash) {
    const arr = getUrlQuery({ url, type: 'hash' })
    const hashStr = qsStringify(Object.assign({}, arr, option.hash))
    hash = hashStr ? (hash.split('?')[0] || '#') + '?' + hashStr : ''
  }
  return origin + pathname + search + hash
}
```

```Js [JS版本]
import isNullOrUndefined from "@/verify/isNullOrUndefined";
import isObject from "@/verify/isObject";
import getUrlQuery from "@/url/getUrlQuery";
import isURL from "@/url/isURL";
import qsStringify from "@/url/qsStringify";
export default function reviseUrlQuery(option, url = window.location.href) {
    // 检查参数类型
    if (isNullOrUndefined(option) || !isObject(option))
        throw `参数错误， 应该传入一个对象`;
    // 检查参数属性存在但不是对象
    if (option.search && !isObject(option.search))
        throw `search 参数错误， 应该传入一个对象`;
    if (option.hash && !isObject(option.hash))
        throw `hash 参数错误， 应该传入一个对象`;
    // 检查url值是否有效
    if (!isURL(url))
        throw 'url 参数错误，不是有效的';
    // 修改参数的实现逻辑
    const { origin, pathname } = new URL(url);
    let { search, hash } = new URL(url);
    if (option.search) {
        const arr = getUrlQuery({ url, type: 'search' });
        const searchStr = qsStringify(Object.assign({}, arr, option.search));
        search = searchStr ? '?' + searchStr : '';
    }
    if (option.hash) {
        const arr = getUrlQuery({ url, type: 'hash' });
        const hashStr = qsStringify(Object.assign({}, arr, option.hash));
        hash = hashStr ? (hash.split('?')[0] || '#') + '?' + hashStr : '';
    }
    return origin + pathname + search + hash;
}

```
:::
## setUrlQuery 
设置浏览器地址栏url

#### 类型说明
::: info
`function setUrlQuery(url: string, type?: 'pushState' | 'replaceState'): void;`
:::
#### 参数
- option 可选的对象
- url url地址，默认window.location， 非必填
- type 类型，默认pushState， 非必填, 可选值：pushState, replaceState
#### 异常
::: danger
url 参数错误，不是有效的
:::
::: danger
type 参数错误， 应该传入一个字符串 'pushState' | 'replaceState'
:::
#### 示例 
修改了浏览器页面的地址栏的url显示，默认会添加新的历史记录
```ts
setUrlQuery('https://a.b.com/?a=1&b=2')
```
修改了浏览器页面的地址栏的url显示，当前的页面的历史记录替换掉，不会添加新的历史记录
```ts
setUrlQuery('https://a.b.com/?a=1&b=2', 'replaceState')
```
#### 源码
::: code-group
```Ts [TS版本]
import isString from "@/verify/isString"
import isURL from "@/url/isURL"
export default function setUrlQuery(url: string, type: 'pushState' | 'replaceState' = 'pushState'): void {
  // 检查url值是否有效
  if (!isURL(url)) throw 'url 参数错误，不是有效的'
  if (!isString(type) || !['pushState', 'replaceState'].includes(type))
    throw `type 参数错误， 应该传入一个字符串 'pushState' | 'replaceState'`
  if (history.state && history.state.current) {
    const pathname = new URL(url).pathname
    history.state.current = pathname
  }
  window.history[type](history.state, '', url)
}

```

```Js [JS版本]
import isString from "@/verify/isString";
import isURL from "@/url/isURL";
export default function setUrlQuery(url, type = 'pushState') {
    // 检查url值是否有效
    if (!isURL(url))
        throw 'url 参数错误，不是有效的';
    if (!isString(type) || !['pushState', 'replaceState'].includes(type))
        throw `type 参数错误， 应该传入一个字符串 'pushState' | 'replaceState'`;
    if (history.state && history.state.current) {
        const pathname = new URL(url).pathname;
        history.state.current = pathname;
    }
    window.history[type](history.state, '', url);
}

```
:::
## isLocation 
判断是否为Location

#### 类型说明
::: info
`function isLocation(value: any): boolean;`
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
isLocation(window.location) => true
```
验证失败
```ts
isLocation(123) => false
```
#### 源码
::: code-group
```Ts [TS版本]
import typeOf from '@/common/typeOf'
export default function isLocation(value: any): boolean {
  return typeOf(value) === 'Location'
}
```

```Js [JS版本]
import typeOf from '@/common/typeOf';
export default function isLocation(value) {
    return typeOf(value) === 'Location';
}

```
:::
