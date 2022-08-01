import {GetFormatDateTime} from '@types'
import { getDataType } from '@/common'
import { padInt } from '@/modules/padInt'


/**
 * 获取指定格式的时间
 * @param value 时间对象或者时间戳
 * @param format 返回格式 默认 YYYY-MM-DD hh:mm:ss
 * @returns 指定格式的时间
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
  if (!(getDataType(value) == 'Date' || getDataType(value) == 'Number')) throw 'value参数错误，需要Date | number, 但收到' + getDataType(value)
  const date = getDataType(value) == 'Number' ? new Date(value) : value as Date
	const year= padInt(date.getFullYear())
	const month = padInt(date.getMonth() + 1)
	const day = padInt(date.getDate())
	const hour = padInt(date.getHours())
	const minute = padInt(date.getMinutes())
	const second = padInt(date.getSeconds())
  return format.replace('YYYY', year).replace('MM', month).replace('DD', day).replace('hh', hour).replace('mm', minute).replace('ss', second)
}