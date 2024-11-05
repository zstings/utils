/**
 * 获取设备类型
 * @return 'Mobile' | 'Desktop'
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
export default function detectDeviceType() {
  return /Android|iPhone|iPad/i.test(navigator.userAgent) ? 'Mobile' : 'Desktop'
}