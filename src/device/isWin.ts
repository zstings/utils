/**
 * 是否是windows环境
 * @return true | false
 * @category 设备Device
 * @example
 * windows环境中端访问
 * ```ts
 * isWin() // => true
 * ```
 * @example
 * 非windows环境访问
 * ```ts
 * isWin() // => false
 * ```
 */
export default function isWin() {
  return /Windows/i.test(navigator.userAgent)
}
