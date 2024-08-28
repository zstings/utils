/**
 * 是否是微信环境
 * @return true | false
 * @category 设备Device
 * @example
 * 微信中端访问
 * ```ts
 * isWeixin() // => true
 * ```
 * @example
 * 非微信访问
 * ```ts
 * isWeixin() // => false
 * ```
 */
export default function isWeixin() {
  return /MicroMessenger\//i.test(navigator.userAgent)
}