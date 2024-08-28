/**
 * 是否是微信小程序环境
 * @return true | false
 * @category 设备Device
 * @example
 * 微信小程序中端访问
 * ```ts
 * isWeixinMini() // => true
 * ```
 * @example
 * 非微信小程序访问
 * ```ts
 * isWeixinMini() // => false
 * ```
 */
export default function isWeixinMini() {
  return /miniProgram/i.test(navigator.userAgent)
}