import isBasicType from "@/verify/isBasicType"
import isNullOrUndefined from "@/verify/isNullOrUndefined"

/**
 * 参数序列化-对象转字符
 * @return 由参数组成的对象
 * @category URL
 * @example
 * ```ts
 * qsStringify({a: 1, b: 2})
 * // => 'a=1&b=2'
 * ```
 * @example
 * 如果传入内容是undefined或者null，这个参数会被丢弃
 * 如果你想空参数，可以使用 `''`
 * ```ts
 * qsStringify({a: 1, b: undefined, c: null})
 * // => 'a=1&b=2&c=%7B%22a%22%3A1%7D'
 * ```
 * @example
 * ```ts
 * qsStringify({a: 1, b: 2, c: {a: 1}})
 * // => 'a=1&b=2&c=%7B%22a%22%3A1%7D'
 * ```
 * @example
 * 解码后输出
 * ```ts
 * qsStringify({a: 1, b: 2, c: {a: 1}}, true)
 * // => 'a=1&b=2&c={"a":1}'
 * ```
 */
export default function qsStringify(query: Record<string, any> = {}, decode = false): string {
  // 缓存Object.keys(query)的结果，避免重复调用
  const keys = Object.keys(query)
  // 使用数组和join方法代替URLSearchParams对象，减少内存占用和转换开销
  const queryArr = []
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i]
    const value = query[key]
    if (isNullOrUndefined(value)) continue
    // 使用三元运算符代替if语句，简化代码逻辑
    const encodedValue = isBasicType(value) ? encodeURIComponent(value) : encodeURIComponent(JSON.stringify(value))
    queryArr.push(key + '=' + encodedValue)
  }
  // 根据decode参数决定是否解码
  return decode ? decodeURIComponent(queryArr.join('&')) : queryArr.join('&')
}