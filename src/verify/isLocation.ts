import typeOf from '@/common/typeOf'

/**
 * 判断是否为Location
 * @param value 任意值
 * @return true | false
 * @category URL
 * @example
 * 验证通过
 * ```ts
 * isLocation(window.location) => true
 * ```
 * @example
 * 验证失败
 * ```ts
 * isLocation(123) => false
 * ```
 */
export default function isLocation(value: any): boolean {
  return typeOf(value) === 'Location'
}