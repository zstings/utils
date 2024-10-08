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
