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
求和项不是数字时会以0处理
```ts
arrObjSum([{id: 'a', age: 10, sx: 1}, {id: 2, age: 'b', sx: 2}], ['id', 'age'])
// => {id: 2, age: 10}
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
      const value = start + (isNaN(end[item]) ? 0 : Number(end[item]))
      return value
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
            const value = start + (isNaN(end[item]) ? 0 : Number(end[item]));
            return value;
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
`function assign<T extends Record<string, any>, U extends Record<string, any>[]>(target: T, ...sources: U): keyof T extends never ? {} : Merge<T, MergeTuple<U>>;
export {};`
:::
#### 参数
- target 目标对象，被合并的对象
- sources 源对象，可以多个
#### 返回
- `keyof T extends never ? {} : Merge<T, MergeTuple<U>>;
export {}`
::: tip
目标对象
:::
#### 异常
::: danger
target参数必须是对象  target参数不是对象时触发
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
import isObject from "@/verify/isObject"
// 将元组类型转成对象类型的工具类型
type MergeTuple<T extends any[]> = T extends [infer F, ...infer R] ? Omit<F, keyof MergeTuple<R>> & MergeTuple<R> : {};
type Merge<T, U> = Omit<T, keyof U> & U;
export default function assign<T extends Record<string, any>, U extends Record<string, any>[]>(target: T, ...sources: U) {
  if (!isObject(target)) throw 'target参数必须是对象'
  if (isEmptyObject(target)) return {} as keyof T extends never ? {} : Merge<T, MergeTuple<U>>
  return Object.assign(target, ...sources) as keyof T extends never ? {} : Merge<T, MergeTuple<U>>
}
```

```Js [JS版本]
import isEmptyObject from "@/verify/isEmptyObject";
import isObject from "@/verify/isObject";
export default function assign(target, ...sources) {
    if (!isObject(target))
        throw 'target参数必须是对象';
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
`function assignMin<T extends Record<string, any>, U extends Record<string, any>[]>(target: T, ...sources: U): keyof T extends never ? {} : Omit<Merge<T, MergeTuple<U>>, Exclude<keyof MergeTuple<U>, keyof T> | Exclude<Exclude<keyof T, keyof MergeTuple<U>>, keyof T>>;
export {};`
:::
#### 参数
- target 目标对象，被合并的对象
- sources 源对象，可以多个
#### 返回
- `keyof T extends never ? {} : Omit<Merge<T, MergeTuple<U>>, Exclude<keyof MergeTuple<U>, keyof T> | Exclude<Exclude<keyof T, keyof MergeTuple<U>>, keyof T>>;
export {}`
::: tip
目标对象
:::
#### 异常
::: danger
target参数必须是对象  target参数不是对象时触发
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
import isObject from "@/verify/isObject"
// 将元组类型转成对象类型的工具类型
type MergeTuple<T extends any[]> = T extends [infer F, ...infer R] ? Omit<F, keyof MergeTuple<R>> & MergeTuple<R> : {};
type Merge<T, U> = Omit<T, keyof U> & U;
export default function assignMin<T extends Record<string, any>, U extends Record<string, any>[]>(target: T, ...sources: U) {
  if (!isObject(target)) throw 'target参数必须是对象'
  if (isEmptyObject(target)) return {} as keyof T extends never ? {} : Omit<Merge<T, MergeTuple<U>>, Exclude<keyof Merge<T, MergeTuple<U>>, keyof T>>
  const merge = Object.assign({}, target, ...sources)
  // 使用索引签名并确保类型安全
  Object.keys(target).forEach(key => target[key as keyof T] = merge[key as keyof T]);
  return target as unknown as keyof T extends never ? {} : Omit<Merge<T, MergeTuple<U>>, Exclude<keyof Merge<T, MergeTuple<U>>, keyof T>>
}
```

```Js [JS版本]
import isEmptyObject from "@/verify/isEmptyObject";
import isObject from "@/verify/isObject";
export default function assignMin(target, ...sources) {
    if (!isObject(target))
        throw 'target参数必须是对象';
    if (isEmptyObject(target))
        return {};
    const merge = Object.assign({}, target, ...sources);
    // 使用索引签名并确保类型安全
    Object.keys(target).forEach(key => target[key] = merge[key]);
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
`function omit<T extends Record<string, any>>(target: T): T;
export default function omit<T extends Record<string, any>, U extends (keyof T)[]>(target: T, keys: U): Omit<T, U[number]>;`
:::
#### 参数
- target 指定对象
- keys 由需要删除的属性组成的数组，不传时为[]
#### 返回
- `Omit<T, U[number]>`
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
import isObject from "@/verify/isObject";
// 函数重载声明
export default function omit<T extends Record<string, any>>(target: T): T;
export default function omit<T extends Record<string, any>, U extends (keyof T)[]>(target: T, keys: U): Omit<T, U[number]>;
export default function omit<T extends Record<string, any>, U extends (keyof T)[]>(target: T, keys?: U) {
  if (!isObject(target)) throw 'target参数必须是对象'
  target = deepClone(target)
  ;(keys || []).forEach(key => delete target[key])
  return target
}
```

```Js [JS版本]
import deepClone from "@/util/deepClone";
import isObject from "@/verify/isObject";
export default function omit(target, keys) {
    if (!isObject(target))
        throw 'target参数必须是对象';
    target = deepClone(target);
    (keys || []).forEach(key => delete target[key]);
    return target;
}

```
:::
## pick 
提取指定对象的指定属性

#### 类型说明
::: info
`function pick<T extends Record<string, any>>(target: T, keys?: []): {};
export default function pick<T extends Record<string, any>, K extends keyof T>(target: T, keys: K[]): Pick<T, K>;`
:::
#### 参数
- target 指定对象
- keys 由需要提取的属性组成的数组，不传时为[]
#### 返回
- `Pick<T, K>`
::: tip
新的对象
:::
#### 示例 
```ts
omit({a: 1, b: 2, c: 3}) // => {}
omit({a: 1, b: 2, c: 3}, []) // => {}
```
```
omit({a: 1, b: 2, c: 3}, ['a', 'c']) // => {a: 1, c: 3}
```
#### 源码
::: code-group
```Ts [TS版本]
import deepClone from "@/util/deepClone"
import isObject from "@/verify/isObject";
import isArray from "@/verify/isArray";
// 函数重载声明
export default function pick<T extends Record<string, any>>(target: T, keys?: []): {};
export default function pick<T extends Record<string, any>, K extends keyof T>(target: T, keys: K[]): Pick<T, K>;
export default function pick<T extends Record<string, any>, K extends keyof T>(target: T, keys: K[] = []): K extends keyof T ? Pick<T, K> : {} {
  if (!isObject(target)) throw new Error('target参数必须是object');
  if (!isArray(keys)) throw new Error('keys参数必须是array');
  if (keys.length == 0) return {} as K extends keyof T ? Pick<T, K> : {}
  target = deepClone(target);
  Object.keys(target).forEach(key => {
    if (!keys.includes(key as K)) {
      delete target[key]
    } 
  })
  return target as K extends keyof T ? Pick<T, K> : {};
}

```

```Js [JS版本]
import deepClone from "@/util/deepClone";
import isObject from "@/verify/isObject";
import isArray from "@/verify/isArray";
export default function pick(target, keys = []) {
    if (!isObject(target))
        throw new Error('target参数必须是object');
    if (!isArray(keys))
        throw new Error('keys参数必须是array');
    if (keys.length == 0)
        return {};
    target = deepClone(target);
    Object.keys(target).forEach(key => {
        if (!keys.includes(key)) {
            delete target[key];
        }
    });
    return target;
}

```
:::
## resetObjectValues 
重置指定对象的值

对对象中值为字符串的重置为: ''

对对象中值为布尔值的重置为: false

对对象中值为数字的重置为: 0

对对象中值为数组的重置为: []

对对象中值为对象的就递归，直到结束

#### 类型说明
::: info
`function resetObjectValues<T extends Record<string, any>>(target: T, n?: number): T;`
:::
#### 参数
- target 指定对象
#### 返回
- `T`
::: tip
新的对象
:::
#### 示例 
```ts
omit({a: 1, b: '2', c: true, d: [1, 2, 3], e: {a: 1, b: '2', c: [6, 7]}})
// => {a: 0, b: '', c: false, d: [], e: {a: 0, b: '', c: []}}
```
#### 源码
::: code-group
```Ts [TS版本]
import deepClone from "@/util/deepClone"
import typeOf from "@/common/typeOf";
import isObject from "@/verify/isObject";
export default function resetObjectValues<T extends Record<string, any>>(target: T, n = 0) {
  if (!isObject(target)) throw new Error('target参数必须是object');
  if (n != 1) target = deepClone(target);
  Object.keys(target).forEach(key => {
    if (typeOf(target[key]) == 'String') (target as Record<string, any>)[key] = ''
    if (typeOf(target[key]) == 'Number') (target as Record<string, any>)[key] = 0
    if (typeOf(target[key]) == 'Boolean') (target as Record<string, any>)[key] = false
    if (typeOf(target[key]) == 'Array') (target as Record<string, any>)[key] = []
    if (typeOf(target[key]) == 'Object') resetObjectValues(target[key], 1)
  })
  return target
}
```

```Js [JS版本]
import deepClone from "@/util/deepClone";
import typeOf from "@/common/typeOf";
import isObject from "@/verify/isObject";
export default function resetObjectValues(target, n = 0) {
    if (!isObject(target))
        throw new Error('target参数必须是object');
    if (n != 1)
        target = deepClone(target);
    Object.keys(target).forEach(key => {
        if (typeOf(target[key]) == 'String')
            target[key] = '';
        if (typeOf(target[key]) == 'Number')
            target[key] = 0;
        if (typeOf(target[key]) == 'Boolean')
            target[key] = false;
        if (typeOf(target[key]) == 'Array')
            target[key] = [];
        if (typeOf(target[key]) == 'Object')
            resetObjectValues(target[key], 1);
    });
    return target;
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
