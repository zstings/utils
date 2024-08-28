import typeOf from '@/common/typeOf'

/**
 * 判断是否为Function
 * @param value 任意值
 * @return true | false
 * @category 函数Function
 * @example
 * 验证通过
 * ```ts
 * isFunction(function(){}) => true
 * ```
 * @example
 * 验证失败
 * ```ts
 * isFunction(123) => false
 * ```
 */
export default function isFunction(value: any): boolean {
  return typeOf(value) === 'Function'
}