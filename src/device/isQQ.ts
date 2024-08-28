/**
 * 是否是QQ环境
 * @return true | false
 * @category 设备Device
 * @example
 * QQ中端访问
 * ```ts
 * isQQ() // => true
 * ```
 * @example
 * 非QQ访问
 * ```ts
 * isQQ() // => false
 * ```
 */
export default function isQQ() {
  return /QQ\//i.test(navigator.userAgent)
}