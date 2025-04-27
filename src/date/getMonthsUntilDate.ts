import days from '@/date/days'
/**
 * 获取从当前时间到指定年月之前的所有年月
 * @param targetDateStr 年月组成的字符串 '2025-01' or '2025-1'
 * @return 年月字符串的数组
 * @throws Invalid Date 参数targetDateStr无法转为Date时触发
 * @category 时间Date
 * @example
 * 获取当前到2025-01的年月数组，假设当前时间为2025-03
 * ```ts
 * getMonthsUntilDate('2025-01') // ['2025-03', '2025-02', '2025-01']
 * ```
 * @example
 * 获取当前到2025-05的年月数组，假设当前时间为2025-03
 * ```ts
 * getMonthsUntilDate('2025-05') // ['2025-03', '2025-04', '2025-05']
 * ```
 * @example
 * 无实际传参时
 * ```ts
 * getMonthsUntilDate('') // ['2025-03']
 * getMonthsUntilDate() // ['2025-03']
 * ```
 */
export default function getMonthsUntilDate(targetDateStr: string) {
  if (targetDateStr == undefined || (typeof targetDateStr == 'string' && targetDateStr == '')) {
    targetDateStr = days().toISOString().slice(0, 7)
  }
  // 格式验证
  if (!/^\d{4}-\d{1,2}$/.test(targetDateStr)) throw 'Invalid Date, eg: YYYY-MM'
  // 拆解年月验证
  const targetDateArr = targetDateStr.split('-')
  targetDateArr[1] = targetDateArr[1].padStart(2, '0')
  if (Number(targetDateArr[0]) < 1970) throw '年份不能小于1970'
  if (Number(targetDateArr[1]) < 1 || Number(targetDateArr[1]) > 12) throw '月份不能小于1或大于12'
  // 创建目标日期的 Date 对象，用于后续比较和判断
  const targetDate = days(targetDateStr)
  // 创建当前日期的 Date 对象
  const currentDate = days()
  const result = []
  let currentYear = currentDate.getFullYear()
  let currentMonth = currentDate.getMonth() + 1
  // 进入循环，不断生成年月并添加到结果数组，直到到达目标年月
  while (true) {
    const currentMonthStr = currentMonth.toString().padStart(2, '0')
    result.push(`${currentYear}-${currentMonthStr}`)
    // 指定年月超过当前年月时，跳出循环
    const isExceed = currentDate.getTime() < targetDate.getTime()
    // 检查是否已经到达目标年月，如果是则跳出循环
    if (currentYear === targetDate.getFullYear() && currentMonth === targetDate.getMonth() + 1) {
      break
    }
    if (isExceed) {
      currentMonth++
      // 如果当前月份大于 12，说明进入下一年的 1 月
      if (currentMonth > 12) {
        currentMonth = 1
        // 年份减 1
        currentYear++
      }
    } else {
      // 当前月份减 1
      currentMonth--
      // 如果当前月份小于 1，说明进入上一年的 12 月
      if (currentMonth < 1) {
        currentMonth = 12
        // 年份减 1
        currentYear--
      }
    }
  }
  return result
}
