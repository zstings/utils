import { padInt } from '@/number'
import { getDataType } from '@/common'
import { GetTimeStamp, GetFormatDateTime } from '@types'
import { isNumber, isString, isNullOrUndefined, isObject, isDate } from '@/verify'

/**
 * 获取时间戳
 * @param value 时间对象或者格式化后的时间
 * @param unit 返回格式,支持毫秒或者秒,默认毫秒
 * @returns 时间戳
 * @throws Invalid Date 传入值无法转为Date时触发
 * @throws 参数错误 传入值不是字符串或者Date时触发
 * @category 时间Date
 * @example
 * 获取当前的时间戳
 * ```ts
 * getTimeStamp() // 1659334598129
 * ```
 * @example
 * 获取当前的时间戳，单位秒(s)
 * ```ts
 * getTimeStamp('', 's') // 1660700890
 * ```
 * @example
 * 获取 2022-10-12 的时间戳
 * ```ts
 * getTimeStamp('2022-10-12') // 1665504000000
 * ```
 * @example
 * 获取 2022-10-12 的时间戳, 以秒返回
 * ```ts
 * getTimeStamp('2022-10-12', 's') // 1665504000
 * ```
 */
export const getTimeStamp: GetTimeStamp = (value = new Date(), unit = 'ms') => {
  if (!(getDataType(value) == 'Date' || getDataType(value) == 'String'))
    throw 'value参数错误，需要Date | String, 但收到' + getDataType(value)
  let date = value as Date
  if (getDataType(value) == 'String') {
    value = (value as string).trim()
    date = value.length == 0 ? new Date() : new Date(value)
  }
  const timeStamp = date.getTime()
  if (isNaN(timeStamp)) throw 'Invalid Date'
  return unit == 's' ? Math.trunc(timeStamp / 1000) : timeStamp
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
 * getFormatDateTime() // '2022-07-30 12:41:26'
 * ```
 * @example
 * 获取当前时间的年月
 * ```ts
 * getFormatDateTime(Date.now(), 'YYYY-MM') // '2022-07'
 * ```
 * @example
 * 获取具体日期的时间格式
 * ```ts
 * const date = new Date('2022/10/10 10:00:00')
 * getFormatDateTime(date, 'YYYY-MM-DD') // '2022-10-10'
 * ```
 */
export const getFormatDateTime: GetFormatDateTime = (value = Date.now(), format = 'YYYY-MM-DD hh:mm:ss') => {
  if (!(getDataType(value) == 'Date' || getDataType(value) == 'Number'))
    throw 'value参数错误，需要Date | number, 但收到' + getDataType(value)
  const date = getDataType(value) == 'Number' ? new Date(value) : (value as Date)
  const year = padInt(date.getFullYear())
  const month = padInt(date.getMonth() + 1)
  const day = padInt(date.getDate())
  const hour = padInt(date.getHours())
  const minute = padInt(date.getMinutes())
  const second = padInt(date.getSeconds())
  return format
    .replace('YYYY', year)
    .replace('MM', month)
    .replace('DD', day)
    .replace('hh', hour)
    .replace('mm', minute)
    .replace('ss', second)
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
 * getMonthNum() // => 31
 * ```
 * @example
 * 获取指定月份的天数
 * ```ts
 * getMonthNum(2022, 1) // => 31
 * ```
 */
export function getMonthNum(year?: number, month?: number): number {
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
export function howLongAgo(endTime: number | string, startTime?: number | string) {
  if (!(isNumber(endTime) || isString(endTime))) throw `endTime 只接受 number | string`
  if (isString(endTime) && isNaN(new Date(endTime).getTime())) throw `endTime 无法转换为时间`
  if (!isNullOrUndefined(startTime)) {
    if (!(isNumber(startTime) || isString(startTime))) throw `startTime 只接受 number | string`
    if (isString(startTime) && isNaN(new Date(startTime as string).getTime())) throw `startTime 无法转换为时间`
  }
  const _endTime = isString(endTime) ? new Date(endTime).getTime() : (endTime as number)
  const _startTime = isNullOrUndefined(startTime)
    ? Date.now()
    : isString(startTime)
    ? new Date(startTime as string).getTime()
    : (startTime as number)
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
 * @param day 间隔天数，默认0，表示今天
 * @param option 选项
 * @param option.start 起始时间，支持Date|Number|String， 默认今天
 * @returns 数组 [起始时间, 结束时间]
 * @throws day 必须是数字
 * @throws option 必须是对象
 * @throws option.start 必须是Date|Number|String
 * @category 时间Date
 * @example
 * ```ts
 * getDataSection() // => ['2022-08-22', '2022-08-23']
 * ```
 * @example
 * 近7天时间区间
 * ```ts
 * getDataSection(7) // => ['2022-08-16', '2022-08-23']
 * ```
 * @example
 * 近30天时间区间
 * ```ts
 * getDataSection(30) // => ['2022-07-24', '2022-08-23']
 * ```
 * @example
 * 指定起始时间
 * ```ts
 * getDataSection(1, '2022-08-17') // => ['2022-08-16', '2022-08-17']
 * // => '3分钟前'
 * ```
 */
export function getDataSection(day = 0, option = { start: Date.now() }) {
  if (!isNumber(day)) throw 'day 必须是数字'
  if (!isObject(option)) throw 'option 必须是对象'
  const { start = Date.now() } = option
  if (!(isDate(start) || isNumber(start) || isString(start))) throw 'option.start 必须是Date|Number|String'
  const _startTime = isNumber(start) || isString(start) ? new Date(start).getTime() : start
  const _endTime = _startTime - day * 8.64e7
  return [getFormatDateTime(_endTime, 'YYYY-MM-DD'), getFormatDateTime(_startTime, 'YYYY-MM-DD')]
}
