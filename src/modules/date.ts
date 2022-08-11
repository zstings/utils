import { GetTimeStamp, GetFormatDateTime } from '@types'
import { getDataType } from '@/common'
import { padInt } from '@/modules/number'

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
 * getTimeStamp('', 's') // 1659334598129
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
  var days = new Date(_year, _month, 0)
  if (isNaN(days.getTime())) throw 'Invalid Date'
  return days.getDate()
}