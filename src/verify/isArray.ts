import typeOf from '@/common/typeOf'

/**
 * 判断是否为数组
 * @param value 任意值
 * @return true | false
 * @category 数组Array
 * @example
 * 验证通过
 * ```ts
 * isArray([]) => true
 * ```
 * @example
 * 验证失败
 * ```ts
 * isArray({}) => false
 * ```
 */
export default function isArray(value: any): boolean {
  return typeOf(value) === 'Array'
}