import isHex from '@/color/isHex'

/**
 * 将6(8)位16进制色值转为3(4)位
 * @param hex 字符串
 * @return 3位hex
 * @throws 无法识别正确的hex hex参数不是正确的hex时触发
 * @category 颜色Color
 * @example
 * ```ts
 * shrinkHex('#0033ff') // => '#03f'
 * ```
 * @example
 * // 无法转化的原样输出
 * ```ts
 * shrinkHex('#0037ff') // => '#0037ff'
 * ```
 */
export default function shrinkHex(hex?: string): string {
  if (!isHex(hex)) throw '无法识别正确的hex'
  if (hex!.substring(1)!.length < 6) return hex!
  const hexs = hex!.substring(1).match(/[0-9a-f]{2}/gi)!
  return '#' + hexs.map(item => item[0]).join('')
}