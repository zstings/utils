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
