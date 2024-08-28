/**
 * 检查字符串是否包含中文
 * @param value 字符串
 * @return true | false
 * @category 工具Util
 * @example
 * ```ts
 * isIncludeChinese() // => false
 * ```
 * @example
 * ```ts
 * isIncludeChinese('你好') // => true
 * ```
 */
export default function isIncludeChinese(value: string): boolean {
  return /\p{sc=Han}/gu.test(value)
}