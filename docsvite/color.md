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
`function hexToRgb(hex?: string): string;`
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
export default function hexToRgb(hex?: string): string {
  if (!isHex(hex)) throw '无法识别正确的hex'
  let _hex = hex!.substring(1)
  if (_hex.length < 6) _hex = extendHex(hex!).substring(1)
  _hex = (_hex.match(/[0-9a-f]{2}/gi)!).map((s, i) => (i === 3 ? toFixed(parseInt(s, 16) / 255) : parseInt(s, 16))).join(',')
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
    _hex = (_hex.match(/[0-9a-f]{2}/gi)).map((s, i) => (i === 3 ? toFixed(parseInt(s, 16) / 255) : parseInt(s, 16))).join(',');
    return _hex;
}

```
:::
## isHex 
判断是否是16进制hex色值

#### 类型说明
::: info
`function isHex(hex?: string): boolean;`
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
export default function isHex(hex?: string): boolean {
  if (!isString(hex)) return false
  return /#(([0-9a-f]{3})|([0-9a-f]{4})|([0-9a-f]{6})|([0-9a-f]{8}))$/gi.test(hex!)
}
```

```Js [JS版本]
import isString from "@/verify/isString";
export default function isHex(hex) {
    if (!isString(hex))
        return false;
    return /#(([0-9a-f]{3})|([0-9a-f]{4})|([0-9a-f]{6})|([0-9a-f]{8}))$/gi.test(hex);
}

```
:::
## isRgba 
判断是否是16进制hex色值

#### 类型说明
::: info
`function isRgba(rgba?: string): boolean;`
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
export default function isRgba(rgba?: string): boolean {
  if (!isString(rgba)) return false
  return rgba!.split(',').every((s, i) => {
    if (i == 3) return Number(s) * 255 >= 0 && Number(s) * 255 <= 255
    return Number(s) >= 0 && Number(s) <= 255
  })
}

```

```Js [JS版本]
import isString from "@/verify/isString";
export default function isRgba(rgba) {
    if (!isString(rgba))
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
`function shrinkHex(hex?: string): string;`
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
export default function shrinkHex(hex?: string): string {
  if (!isHex(hex)) throw '无法识别正确的hex'
  if (hex!.length < 6) return hex!
  const _hex = hex!.substring(1).match(/[0-9a-f]{2}/gi)!
  return '#' + _hex.map(item => item[0]).join('')
}
```

```Js [JS版本]
import isHex from "@/color/isHex";
export default function shrinkHex(hex) {
    if (!isHex(hex))
        throw '无法识别正确的hex';
    if (hex.length < 6)
        return hex;
    const _hex = hex.substring(1).match(/[0-9a-f]{2}/gi);
    return '#' + _hex.map(item => item[0]).join('');
}

```
:::
