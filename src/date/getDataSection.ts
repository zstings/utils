import days from '@/date/days'
import isBoolean from '@/verify/isBoolean'
import isNumber from '@/verify/isNumber'
import isObject from '@/verify/isObject'
import isString from '@/verify/isString'
import formats from '@/date/formats'
import timeStamp from '@/date/timeStamp'

/**
 * 获取时间区间
 * @param day 间隔天数，默认1，表示今天
 * @param option 选项
 * @param option.start 起始时间， 默认今天
 * @param option.format 时间格式， 默认YYYY-MM-DD
 * @param option.timeStamp 是否时间戳，默认false， 为true时，忽略 format
 * @return 数组 [起始时间, 结束时间]
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