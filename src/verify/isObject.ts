import typeOf from '@/common/typeOf'

/**
 * 判断是否为对象
 * @param value 任意值
 * @return true | false
 * @category 对象Object
 * @example
 * 验证通过
 * ```ts
 * isObject({}) => true
 * ```
 * @example
 * 验证失败
 * ```ts
 * isObject([]) => false
 * ```
 */
export default function isObject(value: any): boolean {
  return value !== null && typeOf(value) === 'Object'
}