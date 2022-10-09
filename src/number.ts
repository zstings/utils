import { PadInt } from '@types'
import { isBoolean } from '@/verify'

/**
 * 数字补0
 * @param value 数字或者字符串的数字
 * @param len 补充的长度， 默认2
 * @return 返回字符串
 * @category 数字Number
 * @example
 * ```ts
 * padInt(1) => '01'
 * ```
 * @example
 * ```ts
 * padInt(12) => '12'
 * ```
 * @example
 * ```ts
 * padInt(12, 3) => '012'
 * ```
 */
export const padInt: PadInt = (value, len = 2) => {
  if (isNaN(Number(value))) throw '不是一个合法的数字'
  return Number(value).toString().padStart(len, '0')
}

/**
 * 转换为数字
 * @param value 任意值
 * @return 返回数字
 * @throws 无法转换为数字
 * @category 数字Number
 * @example
 * ```ts
 * toNumber('1') // 1
 * ```
 * @example
 * ```ts
 * toNumber('1.2') // 1.2
 * ```
 * @example
 * ```ts
 * toNumber('a123') // error => a123无法转换为数字
 * ```
 */
export function toNumber<T>(value: T): number {
  const num = Number(value)
  if (isNaN(num)) throw `${value}无法转换为数字`
  return num
}

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
export function toFixed(value: number, num = 2, isRound = true): number {
  const _val = toNumber(value)
  if (!isBoolean(isRound)) throw 'isRound不是boolean'
  if (isRound) return parseFloat(_val.toFixed(num))
  return parseFloat(_val.toFixed(num + 1).slice(0, -1))
}

/**
 * 是否为整数
 * @param value 检查的值
 * @return true | false
 * @category 数字Number
 * @example
 * ```ts
 * isInt(1) // => true
 * ```
 * @example
 * ```ts
 * isInt(1.21) // => false
 * ```
 */
export function isInt(value: any): boolean {
  return Number.isInteger(value)
}
