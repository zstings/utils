import { padInt } from '@/number'
import { isNumber, isString, isObject, isBoolean, isArray } from '@/verify'

/**
 * 获取时间对象
 * @param time 时间戳|格式化后的时间字符|时间对象|可转化的时间数组
 * @returns 时间对象
 * @throws Invalid Date 传入值无法转为Date时触发
 * @category 时间Date
 * @example
 * 获取当前的时间对象
 * ```ts
 * days()
 * // => Mon Aug 29 2022 17:56:41 GMT+0800 (中国标准时间)
 * ```
 * @example
 * 支持时间戳
 * ```ts
 * days(1318781876406)
 * // => Mon Oct 17 2011 00:17:56 GMT+0800 (中国标准时间)
 * ```
 * @example
 * 支持格式化的时间字符
 * ```ts
 * days('2018-04-04T16:00:00.000Z')
 * // => Thu Apr 05 2018 00:00:00 GMT+0800 (中国标准时间)
 *
 * days('2022-12-12')
 * // => Mon Dec 12 2022 08:00:00 GMT+0800 (中国标准时间)
 *
 * days('2022-12-12 23:45')
 * // => Mon Dec 12 2022 23:45:00 GMT+0800 (中国标准时间)
 * ```
 * @example
 * 支持Date对象
 * ```ts
 * days(Date.now())
 * // => days:1 Mon Aug 29 2022 18:02:32 GMT+0800 (中国标准时间)
 * ```
 * @example
 * 可转化的时间数组, 成员依次为年、月、日、时、分、秒, 可以是数组或者字符串
 * ```ts
 * days([2018, 10, 7, 20, 15, 19])
 * // => Fri Sep 30 2022 10:10:10 GMT+0800 (中国标准时间)
 * days([2018, 10, 7, 20, '15', '19'])
 * // 可以是字符串
 * // => Fri Sep 30 2022 10:10:10 GMT+0800 (中国标准时间)
 * days([2018, 10, 7])
 * // 可以减少成员
 * // => Fri Sep 30 2022 00:00:00 GMT+0800 (中国标准时间)
 * ```
 * @example
 * 对于非0的falsey值，等同于 new Date()
 * ```ts
 * days(null) == days()
 * days(undefined) == days()
 * days(false) == days()
 * days('') == days()
 * ```
 * @example
 * 传入参数无法转换为时间对象会报错
 * ```ts
 * days('aaa') // throw 'Invalid Date'
 * ```
 */
export function days(time: number | string | Date | (string | number)[] = new Date()): Date {
  const _time =
    time || time === 0
      ? isArray(time)
        ? new Date(...(time as []))
        : new Date(time as number | string | Date)
      : new Date()
  if (_time.toString() === 'Invalid Date') throw 'Invalid Date'
  return _time
}

/**
 * 获取时间戳
 * @param time 时间戳|格式化后的时间字符|时间对象
 * @param unit 返回格式,支持毫秒或者秒,默认毫秒
 * @returns 时间戳
 * @throws Invalid Date 参数time无法转为Date时触发
 * @category 时间Date
 * @example
 * 获取当前的时间戳
 * ```ts
 * timeStamp() // 1659334598129
 * ```
 * @example
 * 获取当前的时间戳，单位秒(s)
 * ```ts
 * timeStamp('', 's') // 1660700890
 * ```
 * @example
 * 获取 2022-10-12 的时间戳
 * ```ts
 * timeStamp('2022-10-12') // 1665504000000
 * ```
 * @example
 * 获取 2022-10-12 的时间戳, 以秒返回
 * ```ts
 * timeStamp('2022-10-12', 's') // 1665504000
 * ```
 */
export function timeStamp(time: number | string | Date | (string | number)[] = new Date(), unit = 'ms'): number {
  const ts = days(time).getTime()
  return unit == 's' ? (ts / 1000) | 0 : ts
}

/**
 * 获取指定格式的时间
 * @param value 时间对象或者时间戳
 * @param format 返回格式 默认 YYYY-MM-DD hh:mm:ss
 * @returns 指定格式的时间
 * @category 时间Date
 * @example
 * 获取当前的日期
 * ```ts
 * formats() // '2022-07-30 12:41:26'
 * ```
 * @example
 * 获取当前时间的年月
 * ```ts
 * formats(Date.now(), 'YYYY-MM') // '2022-07'
 * formats(Date.now(), 'YYYY年MM月') // '2022年07月'
 * ```
 * @example
 * 获取具体日期的时间格式
 * ```ts
 * const date = new Date('2022/10/10 10:00:00')
 * formats(date, 'YYYY-MM-DD') // '2022-10-10'
 * ```
 */
export function formats(
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

/**
 * 获取指定月的天数
 * @param year 年份, 默认当前年
 * @param month 月份, 默认当前月
 * @returns 天数
 * @throws Invalid Date 传入值无法转为Date时触发
 * @category 时间Date
 * @example
 * 获取当前月份的天数
 * ```ts
 * getMonthDays() // => 31
 * ```
 * @example
 * 获取指定月份的天数
 * ```ts
 * getMonthDays(2022, 1) // => 31
 * ```
 */
export function getMonthDays(year?: number, month?: number): number {
  const _year = year ? year : new Date().getFullYear()
  const _month = month ? month : new Date().getMonth() + 1
  const days = new Date(_year, _month, 0)
  if (isNaN(days.getTime())) throw 'Invalid Date'
  return days.getDate()
}

/**
 * 获取距离指定时间之前
 * @param endTime 目标时间戳或者格式化的时间字符
 * @param startTime 开始时间戳或者格式化的时间字符, 默认当前时间戳，非必填
 * @returns 年|月|天|小时|分钟|秒 之前
 * @throws 无法转换为时间 传入值无法转为Date时触发
 * @throws 只接受 number | string 传入值不是 number | string时触发
 * @category 时间Date
 * @example
 * ```ts
 * howLongAgo(1660644035390) // => '4分钟前'
 * ```
 * @example
 * ```ts
 * howLongAgo(1660644418571) // => '5秒前'
 * ```
 * @example
 * 支持格式化的时间字符
 * ```ts
 * howLongAgo('2022-08-17 09: 12: 00') // => '10分钟前'
 * ```
 * @example
 * 指定起始时间
 * ```ts
 * howLongAgo('2022-08-17 09: 12: 00', '2022-08-17 09: 15: 00')
 * // => '3分钟前'
 * ```
 */
export function howLongAgo(
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

/**
 * 获取时间区间
 * @param day 间隔天数，默认1，表示今天
 * @param option 选项
 * @param option.start 起始时间， 默认今天
 * @param option.format 时间格式， 默认YYYY-MM-DD
 * @param option.timeStamp 是否时间戳，默认false， 为true时，忽略 format
 * @returns 数组 [起始时间, 结束时间]
 * @throws day 必须是数字
 * @throws option 必须是对象
 * @throws option.start 必须可以被转化为Date
 * @throws option.format 必须是字符串
 * @throws option.timeStamp 必须是布尔值
 * @category 时间Date
 * @example
 * ```ts
 * getDataSection() // => ['2022-08-23', '2022-08-23']
 * ```
 * @example
 * 近7天时间区间
 * ```ts
 * getDataSection(7) // => ['2022-08-17', '2022-08-23']
 * ```
 * @example
 * 近30天时间区间
 * ```ts
 * getDataSection(30) // => ['2022-07-28', '2022-08-26']
 * ```
 * @example
 * 指定起始时间
 * ```ts
 * getDataSection(7, {start: '2022-08-17'}) // => ['2022-08-11', '2022-08-17']
 * ```
 */
export function getDataSection(
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
// 'YYYY-MM-DD hh:mm:ss' | 'YYYY-MM-DD hh:mm' | 'YYYY-MM-DD hh' | 'YYYY-MM-DD' | 'YYYY-MM'
