import isRgba from "@/color/isRgba"

/**
 * 将rgb(a)色值转为16进制hex色值
 * @param rgba 字符串
 * @return 字符串
 * @throws 无法识别正确的rgba rgba参数不是正确的hex时触发
 * @category 颜色Color
 * @example
 * ```ts
 * rgbToHex('170,187,255') // => '#aabbff'
 * ```
 * @example
 * // 支持透明度
 * ```ts
 * rgbToHex('170,187,255,0.91') // => '#aabbffe8'
 * ```
 */
export default function rgbToHex(rgba: string): string {
  if (!isRgba(rgba)) throw '无法识别正确的rgba'
  return (
    '#' +
    rgba
      .split(',')
      .map((s, i) => {
        if (i == 3)
          return Math.round(Number(s) * 255)
            .toString(16)
            .padStart(2, '0')
        return Number(s).toString(16).padStart(2, '0')
      })
      .join('')
  )
}
