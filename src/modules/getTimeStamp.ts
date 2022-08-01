import { GetTimeStamp } from '@types'
import { getDataType } from '@/common'

/**
 * 获取时间戳
 * @param value 时间对象或者格式化后的时间
 * @returns 时间戳
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
export const getTimeStamp: GetTimeStamp = value => {
  if (!(getDataType(value) == 'Date' || getDataType(value) == 'String'))
    throw 'value参数错误，需要Date | String, 但收到' + getDataType(value)
  const date = value ? new Date(value) : new Date()
  const timeStamp = date.getTime()
  if (isNaN(timeStamp)) throw 'Invalid Date'
  return timeStamp
}
