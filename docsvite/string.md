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

export default function byteSize(str: any): number {
  return new Blob([str.toString()]).size
}
```

```Js [JS版本]
export default function byteSize(str) {
  return new Blob([str.toString()]).size;
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
- mask 掩码字符 默认*
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
mask('123456') // => '******'
```
设置开始位置
```ts
mask('123456', 2) // => '12****'
```
设置长度
```ts
mask('123456', 2, 3) // => '12***6'
```
修改掩码字符
```ts
mask('123456', 2, 3, '.') // => '12...6'
```
#### 源码
::: code-group
```Ts [TS版本]
import isNumber from '@/verify/isNumber'
import isString from '@/verify/isString'
export default function mask(str: string, start = 0, length = Infinity, mask = '*'): string {
  if (!isNumber(start)) throw 'start 必须是数字'
  if (!isNumber(length)) throw 'length 必须是数字'
  if (!isString(mask)) throw 'mask 必须是字符串'
  str = str.toString()
  const val = str.slice(start, length + start)
  return str.replace(val, ''.padEnd(val.length, mask))
}

```

```Js [JS版本]
import isNumber from '@/verify/isNumber';
import isString from '@/verify/isString';
export default function mask(str, start = 0, length = Infinity, mask2 = '*') {
  if (!isNumber(start)) throw 'start 必须是数字';
  if (!isNumber(length)) throw 'length 必须是数字';
  if (!isString(mask2)) throw 'mask 必须是字符串';
  str = str.toString();
  const val = str.slice(start, length + start);
  return str.replace(val, ''.padEnd(val.length, mask2));
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

export default function removeHTML(str: any): string {
  const escapeReg =
    /&(lt|gt|le|ge|nbsp|amp|quot|times|Alpha|Beta|Gamma|Delta|Epsilon|Zeta|Eta|Theta|Iota|Kappa|Lambda|MU|NU|Xi|Omicron|Pi|Rho|Sigma|Tau|Upsilon|Phi|Chi|Psi|Omega|alpha|beta|gamma|delta|epsilon|zeta|eta|theta|iota|kappa|lambda|mu|nu|xi|omicron|pi|rho|sigmaf|sigma|tau|upsilon|phi|chi|psi|omega|thetasym|upsih|piv|circ|tilde|ndash|permil|lsquo|rsquo|ldquo|rdquo|prime);/gi
  return str.toString()
    .replace(/<[^>]+>/g, '')
    .replace(escapeReg, '')
    .trim()
}
```

```Js [JS版本]
export default function removeHTML(str) {
  const escapeReg = /&(lt|gt|le|ge|nbsp|amp|quot|times|Alpha|Beta|Gamma|Delta|Epsilon|Zeta|Eta|Theta|Iota|Kappa|Lambda|MU|NU|Xi|Omicron|Pi|Rho|Sigma|Tau|Upsilon|Phi|Chi|Psi|Omega|alpha|beta|gamma|delta|epsilon|zeta|eta|theta|iota|kappa|lambda|mu|nu|xi|omicron|pi|rho|sigmaf|sigma|tau|upsilon|phi|chi|psi|omega|thetasym|upsih|piv|circ|tilde|ndash|permil|lsquo|rsquo|ldquo|rdquo|prime);/gi;
  return str.toString().replace(/<[^>]+>/g, '').replace(escapeReg, '').trim();
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
  return (str as string).toString().replace(/(\w)/, $1 => $1.toLocaleUpperCase())
}
```

```Js [JS版本]
export default function upperFirst(str) {
  return str.toString().replace(/(\w)/, ($1) => $1.toLocaleUpperCase());
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
