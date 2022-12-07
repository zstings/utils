// import { isNumber, isString } from '@/verify'

/**
 * 指定dom节点全屏
 * @param el 指定的dom节点，不指定默认指向document.body
 * @throws 浏览器不支持全屏操作
 * @category 浏览器Dom
 * @example
 * ```ts
 * launchFullscreen()
 * ```
 * @example
 * ```ts
 * upperFirst(document.querySelector('a'))
 * ```
 */
export function launchFullscreen(el: HTMLElement = document.body): void {
  const requestFullscreen =
    el.requestFullscreen ||
    (el as any).mozRequestFullscreen ||
    (el as any).msRequestFullscreen ||
    (el as any).webkitRequestFullscreen
  if (!requestFullscreen) throw '浏览器不支持全屏操作'
  requestFullscreen()
}

/**
 * 退出全屏
 * @throws 浏览器不支持全屏操作
 * @category 浏览器Dom
 * @example
 * ```ts
 * exitFullscreen()
 * ```
 */
export function exitFullscreen(): void {
  const exitFullscreen =
    document.exitFullscreen ||
    (document as any).msExitFullscreen ||
    (document as any).mozCancelFullScreen ||
    (document as any).webkitExitFullscreen
  if (!exitFullscreen) throw '浏览器不支持全屏操作'
  exitFullscreen()
}
