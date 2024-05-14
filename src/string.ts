import { isNumber, isString } from '@/verify'

/**
 * 首字母大写
 * @param str 传入参数, 如果参数不是字符串，会先调用toString方法
 * @return 字符串
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
export function byteSize(str: any): number {
  const _str = isString(str) ? str : str.toString()
  return new Blob([_str]).size
}

/**
 * 移除字符串中的html标签
 * @param str 传入参数, 如果参数不是字符串，会先调用toString方法
 * @return 字符串
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
  const escapeReg =
    /&(lt|gt|le|ge|nbsp|amp|quot|times|Alpha|Beta|Gamma|Delta|Epsilon|Zeta|Eta|Theta|Iota|Kappa|Lambda|MU|NU|Xi|Omicron|Pi|Rho|Sigma|Tau|Upsilon|Phi|Chi|Psi|Omega|alpha|beta|gamma|delta|epsilon|zeta|eta|theta|iota|kappa|lambda|mu|nu|xi|omicron|pi|rho|sigmaf|sigma|tau|upsilon|phi|chi|psi|omega|thetasym|upsih|piv|circ|tilde|ndash|permil|lsquo|rsquo|ldquo|rdquo|prime);/gi
  return _str
    .replace(/<[^>]+>/g, '')
    .replace(escapeReg, '')
    .trim()
}

/**
 * 字符串替换
 * 使用指定的掩码字符替换start~length之间的所有字符
 * @param str 传入参数, 如果参数不是字符串，会先调用toString方法
 * @param start 开始下标
 * @param length 长度
 * @param mask 掩码字符 默认*
 * @return 字符串
 * @throws start 必须是数字  start不是数字时触发
 * @throws length 必须是数字 length存在且不是数字时触发
 * @throws mask 必须是字符串 mask不是字符串时触发
 * @category 字符串String
 * @example
 * ```ts
 * mask('123456') // => '******'
 * ```
 * @example
 * 设置开始位置
 * ```ts
 * mask('123456', 2) // => '12****'
 * ```
 * @example
 * 设置长度
 * ```ts
 * mask('123456', 2, 3) // => '12***6'
 * ```
 * @example
 * 修改掩码字符
 * ```ts
 * mask('123456', 2, 3, '.') // => '12...6'
 * ```
 */
export function mask(str: string, start = 0, length?: number, mask = '*'): string {
  const _str = isString(str) ? str : str.toString()
  if (!isNumber(start)) throw 'start 必须是数字'
  if ((length || length == 0) && !isNumber(length)) throw 'length 必须是数字'
  if (!isString(mask)) throw 'mask 必须是字符串'
  const val = length || length == 0 ? _str.slice(start, length + start) : _str.slice(start)
  return _str.replace(val, mask.padEnd(val.length, mask))
}
