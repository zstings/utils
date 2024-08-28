import typeOf from '@/common/typeOf'

/**
 * 判断是否为Set
 * @param value 任意值
 * @return true | false
 * @category 对象Object
 * @example
 * 验证通过
 * ```ts
 * isSet(new Set()) => true
 * ```
 * @example
 * 验证失败
 * ```ts
 * isSet(123) => false
 * ```
 */
export default function isSet(value: any): boolean {
  return typeOf(value) === 'Set'
}