import typeOf from '@/common/typeOf'

/**
 * 判断是否为Map
 * @param value 任意值
 * @return true | false
 * @category 对象Object
 * @example
 * 验证通过
 * ```ts
 * isMap(new Map()) => true
 * ```
 * @example
 * 验证失败
 * ```ts
 * isMap(123) => false
 * ```
 */
export default function isMap(value: any): boolean {
  return typeOf(value) === 'Map'
}