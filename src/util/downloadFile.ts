/**
 * 文件下载
 * @param name 文件名
 * @param blob 文件blob数据
 * @category 工具Util
 * @example
 * ```ts
 * const res = await fetch('https://a.b.com/').then(res => res.blob())
 * downloadFile('a.jpg', res)
 * ```
 */
export default function downloadFile(name: string, blob: Blob): void {
  const a = document.createElement('a')
  const url = window.URL.createObjectURL(blob)
  // 默认隐藏
  a.style.display = 'none'
  a.href = url
  a.download = name
  // 添加到 body 标签中
  document.body.appendChild(a)
  a.click()
  window.URL.revokeObjectURL(url)
  // 下载完成移除 a 标签
  a.remove()
}