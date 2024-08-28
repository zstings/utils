import typeOf from '@/common/typeOf'

/**
 * 判断是否为数字
 * @param value 任意值
 * @return true | false
 * @category 数字Number
 * @example
 * 验证通过
 * ```ts
 * isNumber(123) => true
 * ```
 * @example
 * 验证失败
 * ```ts
 * isNumber('123') => false
 * ```
 */
export default function isNumber(value: any): boolean {
  return typeOf(value) === 'Number'
}