/**
 * 复制文本内容
 * 优先使用navigator.clipboard.writeText, 浏览器不支持使用时降级document.execCommand。
 * @param value 需要复制的字符串
 * @return Promise
 * @category 工具Util
 * @example
 * ```ts
 * await copy('hello')
 * ```
 */
export default function copy(value: string) {
  return new Promise<void>((resolve, reject) => {
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(value)
        .then(() => resolve())
        .catch(() => {
          execCommandCopy(value, resolve, reject)
        })
    } else {
      execCommandCopy(value, resolve, reject)
    }
  })
  function execCommandCopy(
    code: string,
    resolve: (value: void | PromiseLike<void>) => void,
    reject: (reason?: any) => void
  ) {
    const textarea = document.createElement('textarea')
    document.body.appendChild(textarea)
    textarea.setAttribute('readonly', 'readonly')
    textarea.innerHTML = code
    textarea.select()
    textarea.setSelectionRange(0, textarea.innerHTML.length)
    const isc = document.execCommand('copy')
    textarea.remove()
    isc ? resolve() : reject('execCommand error')
  }
}