import { PadInt } from '@types'

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
