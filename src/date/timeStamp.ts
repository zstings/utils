import days from '@/date/days'
/**
 * 获取时间戳
 * @param time 时间戳|格式化后的时间字符|时间对象
 * @param unit 返回格式,支持毫秒或者秒,默认毫秒
 * @return 时间戳
 * @throws Invalid Date 参数time无法转为Date时触发
 * @category 时间Date
 * @example
 * 获取当前的时间戳
 * ```ts
 * timeStamp() // 1659334598129
 * ```
 * @example
 * 获取当前的时间戳，单位秒(s)
 * ```ts
 * timeStamp('', 's') // 1660700890
 * ```
 * @example
 * 获取 2022-10-12 的时间戳
 * ```ts
 * timeStamp('2022-10-12') // 1665504000000
 * ```
 * @example
 * 获取 2022-10-12 的时间戳, 以秒返回
 * ```ts
 * timeStamp('2022-10-12', 's') // 1665504000
 * ```
 */
export default function timeStamp(time: number | string | Date | (string | number)[] = new Date(), unit = 'ms'): number {
  const ts = days(time).getTime()
  return unit == 's' ? (ts / 1000) | 0 : ts
}