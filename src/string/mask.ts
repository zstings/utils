import isNumber from '@/verify/isNumber'
import isString from '@/verify/isString'


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
export default function mask(str: string, start = 0, length = Infinity, mask = '*'): string {
  if (!isNumber(start)) throw 'start 必须是数字'
  if (!isNumber(length)) throw 'length 必须是数字'
  if (!isString(mask)) throw 'mask 必须是字符串'
  str = str.toString()
  const val = str.slice(start, length + start)
  return str.replace(val, ''.padEnd(val.length, mask))
}
