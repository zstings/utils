import { isString } from '@/verify'

/**
 * 首字母大写
 * @param str 传入参数, 如果参数不是字符串，会先调用toString方法
 * @returns 字符串
 * @category 字符串String
 * @example
 * ```ts
 * upperFirst('fred') // 'Fred'
 * ```
 * @example
 * 自定义时间
 * ```ts
 * upperFirst('FRED') // 'FRED'
 * ```
 * @example
 * 参数不是字符串，会先调用toString方法
 * ```ts
 * upperFirst(true) // 'True'
 * ```
 */
export function upperFirst(str: any): string {
  const _str = (str as string).toString()
  return _str.replace(/(\w)/, $1 => $1.toLocaleUpperCase())
}

/**
 * 获取字符串的字节长度
 * @param str 传入参数, 如果参数不是字符串，会先调用toString方法
 * @returns 字符串
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
export function byteSize(str: any): number {
  const _str = isString(str) ? str : str.toString()
  return new Blob([_str]).size
}

/**
 * 移除字符串中的html标签
 * @param str 传入参数, 如果参数不是字符串，会先调用toString方法
 * @returns 字符串
 * @category 字符串String
 * @example
 * ```ts
 * removeHTML('<p>这是<em>一个</em>段落。</p>') // => 这是一个段落。
 * ```
 * @example
 * // 转义符也会被去除
 * ```ts
 * removeHTML('<p>这是<em>一个</em>段落。&nbsp;</p>') // => 这是一个段落。
 * ```
 * @example
 * 参数不是字符串，会先调用toString方法
 * ```ts
 * removeHTML(true) // 'true'
 * ```
 */
export function removeHTML(str: any): string {
  const _str = isString(str) ? str : str.toString()
  return _str.replace(/<[^>]+>/g, '').replace(/&[\s\S]+?;/g, '')
}
