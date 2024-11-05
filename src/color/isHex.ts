import isString from '@/verify/isString'

/**
 * 判断是否是16进制hex色值
 * @param hex 字符串
 * @return true | false
 * @category 颜色Color
 * @example
 * ```ts
 * isHex('#aabbcc') // => true
 * ```
 * @example
 * 支持3位
 * ```ts
 * isHex('#abc') // => true
 * ```
 * @example
 * 支持透明度
 * ```ts
 * isHex('#aabbcc8d') // => true
 * ```
 * @example
 * 支持透明度
 * ```ts
 * isHex('#df') // => false
 * ```
 * @example
 * 支持透明度
 * ```ts
 * isHex('#adg') // => false
 * ```
 */
export default function isHex(hex?: string): boolean {
  if (!isString(hex)) return false
  return /#(([0-9a-f]{3})|([0-9a-f]{4})|([0-9a-f]{6})|([0-9a-f]{8}))$/gi.test(hex!)
}