
/**
 * 获取指定月的天数
 * @param year 年份, 默认当前年
 * @param month 月份, 默认当前月
 * @return 天数
 * @throws Invalid Date 传入值无法转为Date时触发
 * @category 时间Date
 * @example
 * 获取当前月份的天数
 * ```ts
 * getMonthDays() // => 31
 * ```
 * @example
 * 获取指定月份的天数
 * ```ts
 * getMonthDays(2022, 1) // => 31
 * ```
 */
export default function getMonthDays(year?: number, month?: number): number {
  const _year = year ? year : new Date().getFullYear()
  const _month = month ? month : new Date().getMonth() + 1
  const days = new Date(_year, _month, 0)
  if (isNaN(days.getTime())) throw 'Invalid Date'
  return days.getDate()
}