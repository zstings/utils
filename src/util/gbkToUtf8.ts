/**
 * gbk 转 utf-8
 * @param value ArrayBuffer
 * @return 可以被JSON.parse转化时返回js对象，否则返回字符串
 * @category 工具Util
 * @example
 * ```ts
 * const res = await fetch('https://a.b.com/').then(res => res.arrayBuffer())
 * gbkToUtf8(res)
 * ```
 */
export default function gbkToUtf8(value: ArrayBuffer): object | string {
  try {
    return JSON.parse(new TextDecoder('utf-8').decode(value))
  } catch (err) {
    return new TextDecoder('utf-8').decode(value)
  }
}