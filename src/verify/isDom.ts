import typeOf from '@/common/typeOf'

/**
 * 是否是dom
 * @param tarage dom
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
export default function isDom(tarage: Element): boolean {
  return typeOf(tarage).includes('Element')
}