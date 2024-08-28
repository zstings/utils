import isMobile from '@/device/isMobile'
import isAndroid from '@/device/isAndroid'

/**
 * 是否是ios系统
 * @return true | false
 * @category 设备Device
 * @example
 * ios访问
 * ```ts
 * isIOS() // => true
 * ```
 * @example
 * 桌面或者安卓访问
 * ```ts
 * isIOS() // => false
 * ```
 */
export default function isIOS() {
  return isMobile() && !isAndroid()
}