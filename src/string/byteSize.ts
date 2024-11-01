/**
 * 获取字符串的字节长度
 * @param str 传入参数, 如果参数不是字符串，会先调用toString方法
 * @return 字符串
 * @category 字符串String
 * @example
 * ```ts
 * byteSize('fred') // 4
 * ```
 * @example
 * ```ts
 * byteSize('你好!') // 7
 * ```
 * @example
 * 生僻汉字
 * ```ts
 * byteSize('𠮷') // 4
 * ```
 * @example
 * 参数不是字符串，会先调用toString方法
 * ```ts
 * byteSize(true) // '4'
 * ```
 */
export default function byteSize(str: any): number {
  return new Blob([str.toString()]).size
}