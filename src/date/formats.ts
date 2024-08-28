import days from '@/date/days'
import padInt from '@/number/padInt'

/**
 * 获取指定格式的时间
 * @param value 时间对象或者时间戳
 * @param format 返回格式 默认 YYYY-MM-DD hh:mm:ss
 * @return 指定格式的时间
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
export default function formats(
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