## 数组Array
## compact :tada: :100:
移除所有 falsey 值的数组
#### 类型说明
::: info
`compact(array: any[]): any[];`
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
## fromPairs :tada: :100:
二维数组转化为对象
#### 类型说明
::: info
`fromPairs(array: any[]): Record<string, unknown>;`
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
## isArray :tada: :100:
判断是否为数组
#### 类型说明
::: info
`isArray(value: any): boolean;`
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
## isArrObj :tada: :100:
是否是数组对象
#### 类型说明
::: info
`isArrObj(object: any): any;`
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
## 颜色Color
## randomHex :tada: :100:
随机生成16进制色值
#### 类型说明
::: info
`randomHex(): string;`
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
## extendHex :tada: :100:
将3(4)位16进制色值转为6(8)位
#### 类型说明
::: info
`extendHex(hex: string): string;`
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
## hexToRgb :tada: :100:
将16进制hex色值转为rgb(a)色值
#### 类型说明
::: info
`hexToRgb(hex: string): string;`
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
// 支持透明度
```ts
hexToRgb('#aabbcc8d') // => '170,187,204,0.55'
```
## isHex :tada: :100:
判断是否是16进制hex色值
#### 类型说明
::: info
`isHex(hex: string): boolean;`
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
// 支持3位
```ts
isHex('#abc') // => true
```
// 支持透明度
```ts
isHex('#aabbcc8d') // => true
```
// 支持透明度
```ts
isHex('#df') // => false
```
// 支持透明度
```ts
isHex('#adg') // => false
```
## 工具Util
## typeOf :tada: :100:
获取数据类型
#### 类型说明
::: info
`typeOf(value: any): string;`
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
## scrollTo :tada: :100:
滚动至···
#### 类型说明
::: info
`scrollTo(option?: {
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
## getUUID :tada: :100:
获取uuid
#### 类型说明
::: info
`getUUID(): string;`
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
## phoneEncrypt :tada: :100:
对手机号进行加密处理
#### 类型说明
::: info
`phoneEncrypt(value: string | number): string;`
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
## deepClone :tada: :100:
深度复制
#### 类型说明
::: info
`deepClone<T extends Array<T> | any>(source: T): T;`
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
## base64ToBlob :tada: :100:
base64转blob
#### 类型说明
::: info
`base64ToBlob(base64: string, type?: string): Blob;`
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
## isBoolean :tada: :100:
判断是否为Boolean
#### 类型说明
::: info
`isBoolean(value: any): boolean;`
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
## 时间Date
## days :tada: :100:
获取时间对象
#### 类型说明
::: info
`days(time?: number | string | Date | (string | number)[]): Date;`
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
## formats :tada: :100:
获取指定格式的时间
#### 类型说明
::: info
`formats(time?: number | string | Date | (string | number)[], format?: string): string;`
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
## howLongAgo :tada: :100:
获取距离指定时间之前
#### 类型说明
::: info
`howLongAgo(endTime?: number | string | Date | (string | number)[], startTime?: number | string | Date | (string | number)[]): string;`
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
## 设备Device
## detectDeviceType :tada: :100:
获取设备类型
#### 类型说明
::: info
`detectDeviceType(): "Mobile" | "Desktop";`
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
## isAndroid :tada: :100:
是否是安卓系统
#### 类型说明
::: info
`isAndroid(): boolean;`
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
## isDesktop :tada: :100:
是否是桌面端
#### 类型说明
::: info
`isDesktop(): boolean;`
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
## isQQ :tada: :100:
是否是QQ环境
#### 类型说明
::: info
`isQQ(): boolean;`
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
## isWin :tada: :100:
是否是windows环境
#### 类型说明
::: info
`isWin(): boolean;`
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
## 浏览器Dom
## exitFullscreen :tada: :100:
退出全屏
#### 类型说明
::: info
`exitFullscreen(): void;`
:::
#### 异常
::: danger
浏览器不支持全屏操作
:::
#### 示例 
```ts
exitFullscreen()
```
## isDom :tada: :100:
是否是dom
#### 类型说明
::: info
`isDom(tarage: Element): boolean;`
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
## 函数Function
## throttle :tada: :100:
节流
#### 类型说明
::: info
`throttle(func: (...params: any[]) => any, wait?: number, immediate?: boolean): (this: unknown, ...args: any[]) => void;`
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
## isFunction :tada: :100:
判断是否为Function
#### 类型说明
::: info
`isFunction(value: any): boolean;`
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
## 数字Number
## padInt :tada: :100:
数字补0
#### 类型说明
::: info
`padInt(value: string | number, len?: number): string;`
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
## toFixed :tada: :100:
数字保留小数位
#### 类型说明
::: info
`toFixed(value: number, num?: number, isRound?: boolean): number;`
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
## 对象Object
## createData :tada: :100:
指定深度或者广度的对象
#### 类型说明
::: info
`createData(deep?: number, breadth?: number): {
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
## assign :tada: :100:
合并对象
#### 类型说明
::: info
`assign(target: Record<string, any>, ...sources: Record<string, any>[]): Record<string, any>;`
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
## arrObjSum :tada: :100:
数组对象key值求和
#### 类型说明
::: info
`arrObjSum<T extends Record<string, any>, K extends keyof T>(object: T[], keys: K[]): Record<string, any>;`
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
## isSet :tada: :100:
判断是否为Set
#### 类型说明
::: info
`isSet(value: any): boolean;`
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
## isSymbol :tada: :100:
判断是否为Symbol
#### 类型说明
::: info
`isSymbol(value: any): boolean;`
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
## isEmptyObject :tada: :100:
判断对象是否是空对象
#### 类型说明
::: info
`isEmptyObject(object: Record<string, unknown>): boolean;`
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
## 字符串String
## byteSize :tada: :100:
获取字符串的字节长度
#### 类型说明
::: info
`byteSize(str: any): number;`
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
## mask :tada: :100:
字符串替换
使用指定的掩码字符替换start~length之间的所有字符
#### 类型说明
::: info
`mask(str: string, start?: number, length?: number, mask?: string): string;`
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
## URL
## getUrlParam :tada: :100:
获取url上的参数
#### 类型说明
::: info
`getUrlParam(name: string, url?: string): string | null;`
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
## qsStringify :tada: :100:
参数序列化-对象转字符
#### 类型说明
::: info
`qsStringify(query?: Record<string, any>, decode?: boolean): string;`
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
## reviseUrlQuery :tada: :100:
修改url上的参数
#### 类型说明
::: info
`reviseUrlQuery(option: {
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
## isLocation :tada: :100:
判断是否为Location
#### 类型说明
::: info
`isLocation(value: any): boolean;`
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
