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
export default function isInt(value: any): boolean {
  return Number.isInteger(value)
}
