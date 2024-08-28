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