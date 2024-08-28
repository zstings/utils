import detectDeviceType from '@/device/detectDeviceType'

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
export default function isMobile() {
  return detectDeviceType() === 'Mobile'
}