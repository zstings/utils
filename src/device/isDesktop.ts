import detectDeviceType from '@/device/detectDeviceType'

/**
 * 是否是桌面端
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
export default function isDesktop() {
  return detectDeviceType() === 'Desktop'
}