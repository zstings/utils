import toFixed from '@/number/toFixed'
import extendHex from '@/color/extendHex'
import isHex from '@/color/isHex'

/**
 * 将16进制hex色值转为rgb(a)色值
 * @param hex 字符串
 * @return 字符串
 * @throws 无法识别正确的hex hex参数不是正确的hex时触发
 * @category 颜色Color
 * @example
 * ```ts
 * hexToRgb('#aabbcc') // => '170,187,204'
 * ```
 * @example
 * 支持透明度
 * ```ts
 * hexToRgb('#aabbcc8d') // => '170,187,204,0.55'
 * ```
 */
export default function hexToRgb(hex?: string): string {
  if (!isHex(hex)) throw '无法识别正确的hex'
  if (hex!.substring(1).length < 6) hex = extendHex(hex!).substring(1)
  hex = (hex!.match(/[0-9a-f]{2}/gi)!).map((s, i) => (i === 3 ? toFixed(parseInt(s, 16) / 255) : parseInt(s, 16))).join(',')
  return hex
}