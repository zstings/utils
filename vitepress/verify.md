## isArray
判断是否为数组
#### 类型说明
::: info
`function isArray(value: any): boolean;`
:::
#### 参数
- `value` 任意值
#### 返回值
::: tip 
true
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

## isArray
判断是否为数组
#### 类型说明
::: info
`function isArray(value: any): boolean;`
:::
#### 参数
- `value` 任意值
#### 返回值
::: tip 
true
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
#### 返回值
::: tip 
true
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
  if (object.length == 0) return false
  return object.every((item: any) => {
    return isObject(item)
  })
}
```
```Js [JS版本]
import isArray from '@/verify/isArray';
import isObject from '@/verify/isObject';
export default function isArrObj(object) {
  if (!isArray(object)) return false;
  if (object.length == 0) return false;
  return object.every((item) => {
    return isObject(item);
  });
}
```
:::

## isBasicType
是否是基本类型
#### 类型说明
::: info
`function isBasicType(value: any): boolean;`
:::
#### 返回值
::: tip 
true
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
- `value` 任意值
#### 返回值
::: tip 
true
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

## isDate
判断是否为Date
#### 类型说明
::: info
`function isDate(value: any): boolean;`
:::
#### 参数
- `value` 任意值
#### 返回值
::: tip 
true
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

## isEmptyObject
判断对象是否是空对象
#### 类型说明
::: info
`function isEmptyObject(object: Record<string, unknown>): boolean;`
:::
#### 参数
- `object` 对象
#### 返回值
::: tip 
true
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
  if (!isObject(object)) throw '传入参数不是Object';
  return !Object.keys(object).length;
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
- `value1` 任意值
- `value2` 任意值
#### 返回值
::: tip 
true
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
  if (arguments.length == 1) value2 = value1;
  if (value1 === value2) return true;
  if (value1 === null || value2 === null) return false;
  if (value1.constructor !== value2.constructor) return false;
  if (Array.isArray(value1)) {
    if (!Array.isArray(value2) || value1.length !== value2.length) return false;
    for (let i = 0; i < value1.length; i++) {
      if (!isEqual(value1[i], value2[i])) return false;
    }
    return true;
  }
  if (typeof value1 === 'object') {
    const keysA = Object.keys(value1);
    const keysB = Object.keys(value2);
    if (keysA.length !== keysB.length) return false;
    for (let key of keysA) {
      if (!keysB.includes(key) || !isEqual(value1[key], value2[key])) return false;
    }
    return true;
  }
  return false;
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
- `value` 任意值
#### 返回值
::: tip 
true
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

## isIncludeChinese
检查字符串是否包含中文
#### 类型说明
::: info
`function isIncludeChinese(value?: string): boolean;`
:::
#### 参数
- `value` 字符串
#### 返回值
::: tip 
true
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

## isInt
是否为整数
#### 类型说明
::: info
`function isInt(value: any): boolean;`
:::
#### 参数
- `value` 检查的值
#### 返回值
::: tip 
true
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

## isJsonString
是否是json字符串
#### 类型说明
::: info
`function isJsonString(str: string): boolean;`
:::
#### 返回值
::: tip 
true
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
  } catch (err) {
    return false;
  }
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
- `value` 任意值
#### 返回值
::: tip 
true
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

## isMap
判断是否为Map
#### 类型说明
::: info
`function isMap(value: any): boolean;`
:::
#### 参数
- `value` 任意值
#### 返回值
::: tip 
true
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

## isNullOrUndefined
是否是null|undefined
#### 类型说明
::: info
`function isNullOrUndefined(value: any): boolean;`
:::
#### 参数
- `value` 任意值
#### 返回值
::: tip 
true
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

## isNumber
判断是否为数字
#### 类型说明
::: info
`function isNumber(value: any): boolean;`
:::
#### 参数
- `value` 任意值
#### 返回值
::: tip 
true
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

## isObject
判断是否为对象
#### 类型说明
::: info
`function isObject(value: any): boolean;`
:::
#### 参数
- `value` 任意值
#### 返回值
::: tip 
true
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

## isPhone
判断是否为手机号
#### 类型说明
::: info
`function isPhone(value: string | number): boolean;`
:::
#### 参数
- `value` 任意值
#### 返回值
::: tip 
true
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
- `value` 任意值
#### 返回值
::: tip 
true
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

## isSet
判断是否为Set
#### 类型说明
::: info
`function isSet(value: any): boolean;`
:::
#### 参数
- `value` 任意值
#### 返回值
::: tip 
true
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

## isString
判断是否为字符串
#### 类型说明
::: info
`function isString(value: any): boolean;`
:::
#### 参数
- `value` 任意值
#### 返回值
::: tip 
true
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

## isSymbol
判断是否为Symbol
#### 类型说明
::: info
`function isSymbol(value: any): boolean;`
:::
#### 参数
- `value` 任意值
#### 返回值
::: tip 
true
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
