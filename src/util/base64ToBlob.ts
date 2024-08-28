/**
 * base64转blob
 * @param base64 base64
 * @param type 文件类型
 * @return Blob
 * @category 工具Util
 * @example
 * ```ts
 * base64ToBlob()
 * ```
 */
export default function base64ToBlob(base64: string, type?: string): Blob {
  // 'image/png'
  const base64Str = window.atob(base64.replace(/data:([\s\S]+);base64,/, ''))
  const base64Type = type || base64.match(/data:([\s\S]+);base64,/)?.[1] || 'text/plain'
  let n = base64Str.length
  const u8arr = new Uint8Array(n)
  while (n--) u8arr[n] = base64Str.charCodeAt(n)
  return new Blob([u8arr], { type: base64Type })
}