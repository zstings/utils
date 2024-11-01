import days from '@/date/days'

/**
 * 获取距离指定时间之前
 * @param endTime 目标时间戳或者格式化的时间字符
 * @param startTime 开始时间戳或者格式化的时间字符, 默认当前时间戳，非必填
 * @return 年|月|天|小时|分钟|秒 之前
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
export default function howLongAgo(
  endTime: number | string | Date | (string | number)[] = new Date(),
  startTime: number | string | Date | (string | number)[] = new Date()
) {
  const _endTime = days(endTime).getTime()
  const _startTime = days(startTime).getTime()
  const date = _startTime - _endTime
  if (date < 0) throw 'startTime 必须大于 endTime'
  if (date >= 31536000000) return Math.floor(date / 31536000000) + '年前'
  else if (date >= 2592000000) return Math.floor(date / 2592000000) + '月前'
  else if (date >= 86400000) return Math.floor(date / 86400000) + '天前'
  else if (date >= 3600000) return Math.floor(date / 3600000) + '小时前'
  else if (date >= 60000) return Math.floor(date / 60000) + '分钟前'
  else if (date >= 1000) return Math.floor(date / 1000) + '秒前'
  else return '刚刚'
}