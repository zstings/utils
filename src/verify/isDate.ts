import typeOf from '@/common/typeOf'

/**
 * 判断是否为Date
 * @param value 任意值
 * @return true | false
 * @category 时间Date
 * @example
 * 验证通过
 * ```ts
 * isDate(new Date()) => true
 * ```
 * @example
 * 验证失败
 * ```ts
 * isDate(123) => false
 * ```
 */
export default function isDate(value: any): boolean {
  return typeOf(value) === 'Date'
}