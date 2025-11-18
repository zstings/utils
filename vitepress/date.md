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

## days
获取时间对象
#### 类型说明
::: info
`function days(time?: number | string | Date | (string | number)[]): Date;`
:::
#### 参数
- `time` 时间戳|格式化后的时间字符|时间对象|可转化的时间数组
#### 返回值
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
  // 处理 null undefined ''
  if (time === null || time === undefined || (typeof time === 'string' && time.trim() === '')) time = new Date()
  else if (isArray(time)) time = new Date(...(time as []))
  else time = new Date(time as number | string | Date)
  if (time.toString() === 'Invalid Date') throw 'Invalid Date'
  return time
}
```
```Js [JS版本]
import isArray from '@/verify/isArray';
export default function days(time = new Date()) {
  if (time === null || time === void 0 || typeof time === 'string' && time.trim() === '') time = /* @__PURE__ */ new Date();
  else if (isArray(time)) time = new Date(...time);
  else time = new Date(time);
  if (time.toString() === 'Invalid Date') throw 'Invalid Date';
  return time;
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
- `value` 时间对象或者时间戳
- `format` 返回格式 默认 YYYY-MM-DD hh:mm:ss
#### 返回值
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
  return format.replace('YYYY', YYYY).replace('YY', YY).replace('MM', MM).replace('M', M).replace('DD', DD).replace('D', D).replace('hh', hh).replace('h', h).replace('mm', mm).replace('m', m).replace('ss', ss).replace('s', s);
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
- `day` 间隔天数，默认1，表示今天
- `option` 选项
- `option.start` 起始时间， 默认今天
- `option.format` 时间格式， 默认YYYY-MM-DD
- `option.timeStamp` 是否时间戳，默认false， 为true时，忽略 format
#### 返回值
::: tip 
数组
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
  const startTime = days(start).getTime()
  const endTime = startTime - (day - 1) * 8.64e7
  if (timestamp) return [timeStamp(endTime, format), timeStamp(startTime, format)]
  return [formats(endTime, format), formats(startTime, format)]
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
  if (!isNumber(day)) throw 'day 必须是数字';
  if (!isObject(option)) throw 'option 必须是对象';
  const { start = /* @__PURE__ */ new Date(), format = 'YYYY-MM-DD', timestamp = false } = option;
  if (!isString(format)) throw 'option.format 必须是字符串';
  if (!isBoolean(timestamp)) throw 'option.timestamp 必须是布尔值';
  const startTime = days(start).getTime();
  const endTime = startTime - (day - 1) * 864e5;
  if (timestamp) return [timeStamp(endTime, format), timeStamp(startTime, format)];
  return [formats(endTime, format), formats(startTime, format)];
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
- `year` 年份, 默认当前年
- `month` 月份, 默认当前月
#### 返回值
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
  year = year ? year : new Date().getFullYear()
  month = month ? month : new Date().getMonth() + 1
  const days = new Date(year, month, 0)
  if (isNaN(days.getTime())) throw 'Invalid Date'
  return days.getDate()
}
```
```Js [JS版本]
export default function getMonthDays(year, month) {
  year = year ? year : (/* @__PURE__ */ new Date()).getFullYear();
  month = month ? month : (/* @__PURE__ */ new Date()).getMonth() + 1;
  const days = new Date(year, month, 0);
  if (isNaN(days.getTime())) throw 'Invalid Date';
  return days.getDate();
}
```
:::

## getMonthsUntilDate
获取从当前时间到指定年月之前的所有年月
#### 类型说明
::: info
`function getMonthsUntilDate(targetDateStr: string): string[];`
:::
#### 参数
- `targetDateStr` 年月组成的字符串 '2025-01' or '2025-1'
#### 返回值
::: tip 
年月字符串的数组
:::
#### 异常
::: danger 
Invalid Date 参数targetDateStr无法转为Date时触发
:::
#### 示例
获取当前到2025-01的年月数组，假设当前时间为2025-03
```ts
getMonthsUntilDate('2025-01') // ['2025-03', '2025-02', '2025-01']
```
获取当前到2025-05的年月数组，假设当前时间为2025-03
```ts
getMonthsUntilDate('2025-05') // ['2025-03', '2025-04', '2025-05']
```
无实际传参时
```ts
getMonthsUntilDate('') // ['2025-03']
getMonthsUntilDate() // ['2025-03']
```
#### 源码
::: code-group
```Ts [TS版本]
import days from '@/date/days'
export default function getMonthsUntilDate(targetDateStr: string) {
  if (targetDateStr == undefined || (typeof targetDateStr == 'string' && targetDateStr == '')) {
    targetDateStr = days().toISOString().slice(0, 7)
  }
  // 格式验证
  if (!/^\d{4}-\d{1,2}$/.test(targetDateStr)) throw 'Invalid Date, eg: YYYY-MM'
  // 拆解年月验证
  const targetDateArr = targetDateStr.split('-')
  targetDateArr[1] = targetDateArr[1].padStart(2, '0')
  if (Number(targetDateArr[0]) < 1970) throw '年份不能小于1970'
  if (Number(targetDateArr[1]) < 1 || Number(targetDateArr[1]) > 12) throw '月份不能小于1或大于12'
  // 创建目标日期的 Date 对象，用于后续比较和判断
  const targetDate = days(targetDateStr)
  // 创建当前日期的 Date 对象
  const currentDate = days()
  const result = []
  let currentYear = currentDate.getFullYear()
  let currentMonth = currentDate.getMonth() + 1
  // 进入循环，不断生成年月并添加到结果数组，直到到达目标年月
  while (true) {
    const currentMonthStr = currentMonth.toString().padStart(2, '0')
    result.push(`${currentYear}-${currentMonthStr}`)
    // 指定年月超过当前年月时，跳出循环
    const isExceed = currentDate.getTime() < targetDate.getTime()
    // 检查是否已经到达目标年月，如果是则跳出循环
    if (currentYear === targetDate.getFullYear() && currentMonth === targetDate.getMonth() + 1) {
      break
    }
    if (isExceed) {
      currentMonth++
      // 如果当前月份大于 12，说明进入下一年的 1 月
      if (currentMonth > 12) {
        currentMonth = 1
        // 年份减 1
        currentYear++
      }
    } else {
      // 当前月份减 1
      currentMonth--
      // 如果当前月份小于 1，说明进入上一年的 12 月
      if (currentMonth < 1) {
        currentMonth = 12
        // 年份减 1
        currentYear--
      }
    }
  }
  return result
}
```
```Js [JS版本]
import days from '@/date/days';
export default function getMonthsUntilDate(targetDateStr) {
  if (targetDateStr == void 0 || typeof targetDateStr == 'string' && targetDateStr == '') {
    targetDateStr = days().toISOString().slice(0, 7);
  }
  if (!/^\d{4}-\d{1,2}$/.test(targetDateStr)) throw 'Invalid Date, eg: YYYY-MM';
  const targetDateArr = targetDateStr.split('-');
  targetDateArr[1] = targetDateArr[1].padStart(2, '0');
  if (Number(targetDateArr[0]) < 1970) throw '年份不能小于1970';
  if (Number(targetDateArr[1]) < 1 || Number(targetDateArr[1]) > 12) throw '月份不能小于1或大于12';
  const targetDate = days(targetDateStr);
  const currentDate = days();
  const result = [];
  let currentYear = currentDate.getFullYear();
  let currentMonth = currentDate.getMonth() + 1;
  while (true) {
    const currentMonthStr = currentMonth.toString().padStart(2, '0');
    result.push(`${currentYear}-${currentMonthStr}`);
    const isExceed = currentDate.getTime() < targetDate.getTime();
    if (currentYear === targetDate.getFullYear() && currentMonth === targetDate.getMonth() + 1) {
      break;
    }
    if (isExceed) {
      currentMonth++;
      if (currentMonth > 12) {
        currentMonth = 1;
        currentYear++;
      }
    } else {
      currentMonth--;
      if (currentMonth < 1) {
        currentMonth = 12;
        currentYear--;
      }
    }
  }
  return result;
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
- `endTime` 目标时间戳或者格式化的时间字符
- `startTime` 开始时间戳或者格式化的时间字符, 默认当前时间戳，非必填
#### 返回值
::: tip 
年|月|天|小时|分钟|秒
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
  endTime = days(endTime).getTime()
  startTime = days(startTime).getTime()
  const date = startTime - endTime
  if (date < 0) throw 'startTime 必须大于 endTime'
  if (date >= 31536000000) return Math.floor(date / 31536000000) + '年前'
  else if (date >= 2592000000) return Math.floor(date / 2592000000) + '月前'
  else if (date >= 86400000) return Math.floor(date / 86400000) + '天前'
  else if (date >= 3600000) return Math.floor(date / 3600000) + '小时前'
  else if (date >= 60000) return Math.floor(date / 60000) + '分钟前'
  else if (date >= 1000) return Math.floor(date / 1000) + '秒前'
  else return '刚刚'
}
```
```Js [JS版本]
import days from '@/date/days';
export default function howLongAgo(endTime = new Date(), startTime = /* @__PURE__ */ new Date()) {
  endTime = days(endTime).getTime();
  startTime = days(startTime).getTime();
  const date = startTime - endTime;
  if (date < 0) throw 'startTime 必须大于 endTime';
  if (date >= 31536e6) return Math.floor(date / 31536e6) + '年前';
  else if (date >= 2592e6) return Math.floor(date / 2592e6) + '月前';
  else if (date >= 864e5) return Math.floor(date / 864e5) + '天前';
  else if (date >= 36e5) return Math.floor(date / 36e5) + '小时前';
  else if (date >= 6e4) return Math.floor(date / 6e4) + '分钟前';
  else if (date >= 1e3) return Math.floor(date / 1e3) + '秒前';
  else return '刚刚';
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
- `time` 时间戳|格式化后的时间字符|时间对象
- `unit` 返回格式,支持毫秒或者秒,默认毫秒
#### 返回值
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
  return unit == 's' ? ts / 1e3 | 0 : ts;
}
```
:::
