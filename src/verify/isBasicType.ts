import typeOf from '@/common/typeOf'

/**
 * 是否是基本类型
 * @return true | false
 * @category 工具Util
 * @example
 * ```ts
 * isBasicType('12') // => true
 * ```
 * @example
 * ```ts
 * isBasicType([]) // => false
 * ```
 */
export default function isBasicType(value: any): boolean {
  return ['String', 'Number', 'Boolean', 'Null', 'Undefined'].includes(typeOf(value))
}
