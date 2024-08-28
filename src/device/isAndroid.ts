import isMobile from '@/device/isMobile'

/**
 * 是否是安卓系统
 * @return true | false
 * @category 设备Device
 * @example
 * 安卓手机访问
 * ```ts
 * isAndroid() // => true
 * ```
 * @example
 * 桌面或者ios访问
 * ```ts
 * isAndroid() // => false
 * ```
 */
export default function isAndroid() {
  return isMobile() && /Android/i.test(navigator.userAgent)
}