import isString from "@/verify/isString"

/**
 * 判断是否是16进制hex色值
 * @param rgba 字符串
 * @return true | false
 * @category 颜色Color
 * @example
 * ```ts
 * isRgba('170,187,255') // => true
 * ```
 * @example
 * 支持透明度
 * ```ts
 * isRgba('170,187,255,0.91') // => true
 * ```
 * @example
 * 支持透明度
 * ```ts
 * isRgba('170,187,266,0.91') // => false
 * ```
 * @example
 * 支持透明度
 * ```ts
 * isRgba('170,187,256,2') // => false
 * ```
 */
export default function isRgba(rgba?: string): boolean {
  if (!isString(rgba)) return false
  return rgba!.split(',').every((s, i) => {
    if (i == 3) return Number(s) * 255 >= 0 && Number(s) * 255 <= 255
    return Number(s) >= 0 && Number(s) <= 255
  })
}
