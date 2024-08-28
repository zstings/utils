import typeOf from '@/common/typeOf'

/**
 * 判断是否为字符串
 * @param value 任意值
 * @return true | false
 * @category 字符串String
 * @example
 * 验证通过
 * ```ts
 * isString('abc') => true
 * ```
 * @example
 * 验证失败
 * ```ts
 * isString(123) => false
 * ```
 */
export default function isString(value: any): boolean {
  return typeOf(value) === 'String'
}