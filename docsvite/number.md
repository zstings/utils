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
  if (isNaN(Number(value))) throw '不是一个合法的数字';
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
  value = toNumber(value)
  if (!isBoolean(isRound)) throw 'isRound不是boolean'
  if (isRound) return parseFloat(value.toFixed(num))
  return parseFloat(value.toFixed(num + 1).slice(0, -1))
}
```

```Js [JS版本]
import isBoolean from '@/verify/isBoolean';
import toNumber from '@/number/toNumber';
export default function toFixed(value, num = 2, isRound = true) {
  value = toNumber(value);
  if (!isBoolean(isRound)) throw 'isRound不是boolean';
  if (isRound) return parseFloat(value.toFixed(num));
  return parseFloat(value.toFixed(num + 1).slice(0, -1));
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
  if (isNaN(Number(value))) throw `${value}无法转换为数字`;
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
