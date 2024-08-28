/**
 * 退出全屏
 * @throws 浏览器不支持全屏操作
 * @category 浏览器Dom
 * @example
 * ```ts
 * exitFullscreen()
 * ```
 */
export default function exitFullscreen(): void {
  const exitFullscreen =
    document.exitFullscreen ||
    (document as any).msExitFullscreen ||
    (document as any).mozCancelFullScreen ||
    (document as any).webkitExitFullscreen
  if (!exitFullscreen) throw '浏览器不支持全屏操作'
  exitFullscreen()
}
