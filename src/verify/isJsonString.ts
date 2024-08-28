/**
 * 是否是json字符串
 * @return true | false
 * @category 工具Util
 * @example
 * ```ts
 * isJsonString('{"a":1}') // => true
 * ```
 * @example
 * ```ts
 * isJsonString(1) // => false
 * ```
 */
export default function isJsonString(str: string) {
  try {
    JSON.parse(str)
    return true
  } catch (err) {
    return false
  }
}