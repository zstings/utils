import isBoolean from '@/verify/isBoolean'
import toNumber from '@/number/toNumber'

/**
 * 数字保留小数位
 * @param value 数字
 * @param num 保留的小数位
 * @param isRound 是否需要四舍五入
 * @return 返回数字
 * @throws 无法转换为数字
 * @throws isRound不是boolean
 * @category 数字Number
 * @example
 * ```ts
 * toFixed(1) // 1
 * ```
 * @example
 * ```ts
 * toFixed(1.21) // 1.21
 * ```
 * @example
 * 默认会四舍五入
 * ```ts
 * toFixed(1.238, 2) // 1.24
 * ```
 * @example
 * 不进行四舍五入
 * ```ts
 * toFixed(1.238, 2, false) // 1.23
 * ```
 */
export default function toFixed(value: number, num = 2, isRound = true): number {
  const _val = toNumber(value)
  if (!isBoolean(isRound)) throw 'isRound不是boolean'
  if (isRound) return parseFloat(_val.toFixed(num))
  return parseFloat(_val.toFixed(num + 1).slice(0, -1))
}