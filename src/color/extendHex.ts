import { isHex } from '@/color/isHex'

/**
 * 将3(4)位16进制色值转为6(8)位
 * @param hex 字符串
 * @return 6位hex
 * @throws 无法识别正确的hex hex参数不是正确的hex时触发
 * @category 颜色Color
 * @example
 * ```ts
 * extendHex('#03f') // => '#0033ff'
 * ```
 * @example
 * ```ts
 * extendHex('#03ff') // => '#0033ffff'
 * ```
 */
export function extendHex(hex: string): string {
  if (!isHex(hex)) throw '无法识别正确的hex'
  if (hex.length > 6) return hex
  return `#${hex
    .substring(1)
    .split('')
    .map(item => (item += item))
    .join('')}`
}