/**
 * 数字补0
 * @param value 数字或者字符串的数字
 * @param len 补充的长度， 默认2
 * @return 返回字符串
 * @category 数字Number
 * @example
 * ```ts
 * padInt(1) => '01'
 * ```
 * @example
 * ```ts
 * padInt(12) => '12'
 * ```
 * @example
 * ```ts
 * padInt(12, 3) => '012'
 * ```
 */
export default function padInt(value: string | number, len = 2): string {
  if (isNaN(Number(value))) throw '不是一个合法的数字'
  return Number(value).toString().padStart(len, '0')
}