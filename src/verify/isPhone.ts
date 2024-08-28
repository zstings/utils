/**
 * 判断是否为手机号
 * @param value 任意值
 * @return true | false
 * @category 工具Util
 * @example
 * 验证通过
 * ```ts
 * isPhone(13302101452) => true
 * ```
 * @example
 * 验证失败
 * ```ts
 * isPhone(1330210152) => false
 * ```
 */
export default function isPhone(value: string | number): boolean {
  return /^1[3-9][\d]{9}$/.test(value.toString())
}