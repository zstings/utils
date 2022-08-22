import { isArray } from './verify'

/**
 * 获取设备类型
 * @return "Mobile" | "Desktop"
 * @category 设备Device
 * @example
 * 移动端访问
 * ```ts
 * detectDeviceType() // => 'Mobile'
 * ```
 * @example
 * 桌面端访问
 * ```ts
 * detectDeviceType() // => 'Desktop'
 * ```
 */
export function detectDeviceType() {
  return /Android|iPhone|iPad/i.test(navigator.userAgent) ? 'Mobile' : 'Desktop'
}

/**
 * 是否是移动端
 * @return true | false
 * @category 设备Device
 * @example
 * 移动端访问
 * ```ts
 * isMobile() // => true
 * ```
 * @example
 * 桌面端访问
 * ```ts
 * isMobile() // => false
 * ```
 */
export function isMobile() {
  return detectDeviceType() === 'Mobile'
}

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
export function isAndroid() {
  return isMobile() && /Android/i.test(navigator.userAgent)
}

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
export function isIOS() {
  return isMobile() && !isAndroid()
}

/**
 * 是否是桌面端访问
 * @return true | false
 * @category 设备Device
 * @example
 * 桌面端访问
 * ```ts
 * isDesktop() // => true
 * ```
 * @example
 * 移动端访问
 * ```ts
 * isDesktop() // => false
 * ```
 */
export function isDesktop() {
  return detectDeviceType() === 'Desktop'
}
