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
 * @example
 * ```ts
 * toNumber(111) // 111
 * ```
 */
export default function toNumber<T>(value: T): number {
  if (isNaN(Number(value))) throw `${value}无法转换为数字`
  return Number(value)
}
