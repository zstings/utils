import typeOf from '@/common/typeOf'

/**
 * 是否是dom
 * @param value dom
 * @return true | false
 * @category 浏览器Dom
 * @example
 * ```ts
 * isDom() // => false
 * ```
 * @example
 * ```ts
 * isDom(document.querySelector('head')) // => true
 * ```
 */
export default function isDom(value: any): boolean {
  return typeOf(value).includes('Element')
}