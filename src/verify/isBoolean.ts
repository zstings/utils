import typeOf from '@/common/typeOf'

/**
 * 判断是否为Boolean
 * @param value 任意值
 * @return true | false
 * @category 工具Util
 * @example
 * 验证通过
 * ```ts
 * isBoolean(true) => true
 * isBoolean(false) => true
 * ```
 * @example
 * 验证失败
 * ```ts
 * isBoolean(123) => false
 * ```
 */
export default function isBoolean(value: any): boolean {
  return typeOf(value) === 'Boolean'
}