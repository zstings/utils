import isString from '@/verify/isString'

/**
 * 是否是url
 * @param url 需要验证的内容，类型：string
 * @return Boolean
 * @throws 参数必须是string 参数不是string时触发
 * @category URL
 * @example
 * ```ts
 * isURL('https://a.b.c')
 * // => true
 * ```
 * @example
 * ```ts
 * isURL('123')
 * // => false
 * ```
 */
export default function isURL(url: string): boolean {
  if (!isString(url)) throw '参数必须是string'
  // if (URL.canParse) return URL.canParse(url)
  try {
    new URL(url)
    return true
  } catch (err) {
    return false
  }
}