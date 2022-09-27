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
export function isDesktop() {
  return detectDeviceType() === 'Desktop'
}

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
export function isWeixin() {
  return /MicroMessenger\//i.test(navigator.userAgent)
}

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
export function isQQ() {
  return /QQ\//i.test(navigator.userAgent)
}

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
export function isWeixinMini() {
  return /miniProgram/i.test(navigator.userAgent)
}

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
export function isWin() {
  return /Windows/i.test(navigator.userAgent)
}
