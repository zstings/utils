import typeOf from '@/common/typeOf'

/**
 * 是否是null|undefined
 * @param value 任意值
 * @return true | false
 * @category 工具Util
 * @example
 * ```ts
 * isNullOrUndefined(null) // => true
 * isNullOrUndefined(undefined) // => true
 * ```
 * @example
 * ```ts
 * isNullOrUndefined(2) // => false
 * ```
 */
export default function isNullOrUndefined(value: any): boolean {
  return ['Null', 'Undefined'].includes(typeOf(value))
}