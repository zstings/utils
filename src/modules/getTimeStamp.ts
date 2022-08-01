import { GetTimeStamp } from '@types'
import { getDataType } from '@/common'

/**
 * 获取时间戳
 * @param value 时间对象或者格式化后的时间
 * @param unit 返回格式,支持毫秒或者秒,默认毫秒
 * @returns 时间戳
 * @throws Invalid Date 传入值无法转为Date时触发
 * @throws 参数错误 传入值不是字符串或者Date时触发
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
