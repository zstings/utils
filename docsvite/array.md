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
请检查size参数，必须符合大于0的整数 size参数错误时触发
:::
#### 示例 
```ts
chunk([{a:1}, {a: 2}, {a: 3}, {a: 4}], 2)
// => [[{a:1},{a:2}],[{a:3},{a:4}]]
```
```ts
chunk([{a:1}, {a: 2}, {a: 3}, {a: 4}], 3)
// => [[{a:1},{a:2},{a:3}],[{a:4}]]
```
#### 源码
::: code-group
```Ts [TS版本]
import isArray from '@/verify/isArray'
import isInt from '@/verify/isInt'
import isNumber from '@/verify/isNumber'
export default function chunk(array: any[], size = 1): any[] {
  if (!isArray(array)) throw `array参数需要Array`
  if (!isNumber(size) || !isInt(size) || size <= 0) throw `请检查size参数，必须符合大于0的整数`
  const arr = []
  const count = Math.ceil(array.length / size)
  for (let i = 0; i < count; i++) {
    arr.push(array.slice(i * size, i * size + size))
  }
  return arr
}

```

```Js [JS版本]
import isArray from '@/verify/isArray';
import isInt from '@/verify/isInt';
import isNumber from '@/verify/isNumber';
export default function chunk(array, size = 1) {
  if (!isArray(array)) throw `array参数需要Array`;
  if (!isNumber(size) || !isInt(size) || size <= 0) throw `请检查size参数，必须符合大于0的整数`;
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
import isArray from '@/verify/isArray'
export default function compact(array: any[]): any[] {
  if (!isArray(array)) throw `array参数需要Array`
  return array.filter(item => !!item)
}

```

```Js [JS版本]
import isArray from '@/verify/isArray';
export default function compact(array) {
  if (!isArray(array)) throw `array参数需要Array`;
  return array.filter((item) => !!item);
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
import isArray from '@/verify/isArray'
export default function fromPairs(array: any[]): Record<string, unknown> {
  if (!isArray(array)) throw `array传入参数需要Array`
  return Object.fromEntries(new Map(array))
}

```

```Js [JS版本]
import isArray from '@/verify/isArray';
export default function fromPairs(array) {
  if (!isArray(array)) throw `array传入参数需要Array`;
  return Object.fromEntries(new Map(array));
}

```
:::
## unique 
数组去重

#### 类型说明
::: info
`function unique(array: any[], option?: {
    key?: string;
    deep?: boolean;
}): any[];`
:::
#### 参数
- array 数组
- option
- option.key 数组对象去重时指定的键
- option.deep 是否启用引用类型的去重 默认true， 如果指定了key, deep 强制为 true
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
::: danger
key指定的属性不存在 key在数组对象的对象中找不到次属性时触发
:::
#### 示例 
```ts
unique([1, 2, 1]) => [1, 2]
```
数组对象去重-指定key
```ts
unique([{id: 1, name: '1'}, {id: 2, name: '2'}, {id: 1, name: '1'}], {key: 'id'})
// => [{id: 1, name: '1'}, {id: 2, name: '2'}]
```
不指定key，默认启用引用类型的去重
```ts
unique([{id: 1, name: '1'}, {id: 1, name: '2'}, {id: 1, name: '1'}])
// => [{id: 1, name: '1'}, {id: 1, name: '2'}]
```
不指定key，关闭引用类型的去重
```ts
unique([1, 2, 1, {id: 1, name: '1'}, {id: 1, name: '2'}, {id: 1, name: '1'}], {deep: false})
// => [1, 2, {id: 1, name: '1'}, {id: 1, name: '2'}, {id: 1, name: '1'}]
```
#### 源码
::: code-group
```Ts [TS版本]
import isArray from '@/verify/isArray'
import isString from '@/verify/isString'
import isEqual from '@/verify/isEqual'
export default function unique(array: any[], option?: {key?: string, deep?: boolean}): any[] {
  if (!isArray(array)) throw `array传入参数需要Array`
  if (option?.key && !isString(option.key)) throw `key传入参数需要String`
  if (option?.key && option.deep != true) option.deep = true
  if (!option) option = {deep: true}
  if (option && option.deep) {
    return array.reduce((x, y) => {
      if (option.key && y[option.key!] == undefined) throw `key指定的属性不存在`
      const isTr = option.key ? x.some((el: any) => isEqual(el[option.key!], y[option.key!])) : x.some((el: any) => isEqual(el, y))
      if (!isTr) x.push(y)
      return x
    }, [])
  }
  return [...new Set(array)]
}

```

```Js [JS版本]
import isArray from '@/verify/isArray';
import isString from '@/verify/isString';
import isEqual from '@/verify/isEqual';
export default function unique(array, option) {
  if (!isArray(array)) throw `array传入参数需要Array`;
  if (option?.key && !isString(option.key)) throw `key传入参数需要String`;
  if (option?.key && option.deep != true) option.deep = true;
  if (!option) option = { deep: true };
  if (option && option.deep) {
    return array.reduce((x, y) => {
      if (option.key && y[option.key] == void 0) throw `key指定的属性不存在`;
      const isTr = option.key ? x.some((el) => isEqual(el[option.key], y[option.key])) : x.some((el) => isEqual(el, y));
      if (!isTr) x.push(y);
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
