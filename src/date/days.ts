import isArray from '@/verify/isArray'

/**
 * 获取时间对象
 * @param time 时间戳|格式化后的时间字符|时间对象|可转化的时间数组
 * @return 时间对象
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
 * days('2022-12-12')
 * // => Mon Dec 12 2022 08:00:00 GMT+0800 (中国标准时间)
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
export default function days(time: number | string | Date | (string | number)[] = new Date()): Date {
  // 处理 null undefined ''
  if (time === null || time === undefined || (typeof time === 'string' && time.trim() === '')) time = new Date()
  else if (isArray(time)) time = new Date(...(time as []))
  else time = new Date(time as number | string | Date)
  if (time.toString() === 'Invalid Date') throw 'Invalid Date'
  return time
}