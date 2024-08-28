import mask from "@/string/mask"
import isPhone from "@/verify/isPhone"

/**
 * 对手机号进行加密处理
 * @param value 手机号：支持字符串或者数字
 * @return 字符串 返回经过加密后的字符串
 * @throws 异常 手机号格式不正确
 * @category 工具Util
 * @example
 * ```ts
 * phoneEncrypt(13300001111) => '133****1111'
 * ```
 * @example
 * ```ts
 * phoneEncrypt('13300001111') => '133****1111'
 * ```
 * @example
 * ```ts
 * phoneEncrypt('1330000') => throw '手机号格式不正确'
 * ```
 */
export default function phoneEncrypt(value: string | number): string {
  if (!isPhone(value)) throw '手机号格式不正确'
  if (typeof value === 'number') value = value.toString()
  return mask(value, 3, 4)
}