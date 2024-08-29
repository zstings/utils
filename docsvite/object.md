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
