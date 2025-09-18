import isBoolean from '@/verify/isBoolean'
import toNumber from './toNumber'
/**
 * 数字保留小数位
 * @param value 数字
 * @param num 保留的小数位
 * @param isRound 是否需要四舍五入
 * @param returnType 返回类型 数字 或 字符串
 * @return 返回数字 或 字符串
 * @throws 无法转换为数字
 * @throws value 无法转换为数字
 * @throws isRound不是boolean
 * @throws type 不是 number 或 string
 * @category 数字Number
 * @example
 * ```ts
 * toFixed(1) // 1
 * ```
 * @example
 * ```ts
 * toFixed(1.21) // 1.21
 * ```
 * @example
 * 默认会四舍五入
 * ```ts
 * toFixed(1.238, 2) // 1.24
 * ```
 * @example
 * 不进行四舍五入
 * ```ts
 * toFixed(1.238, 2, false) // 1.23
 * ```
 */
export default function toFixed<T extends 'number' | 'string' = 'number'>(
  value: number | string,
  num = 2,
  isRound = true,
  returnType?: T
): T extends 'string' ? string : number {
  if (returnType == undefined) returnType = 'number' as T
  if (!isBoolean(isRound)) throw 'isRound不是boolean'
  if (returnType !== 'number' && returnType !== 'string') throw 'type 不是 number 或 string'
  value = toNumber(value).toString()
  const formatNumber = (value: string) => {
    const parts = value.split('.')
    const integerPart = parts[0]
    const decimalPart = (parts[1] || '').slice(0, num).padEnd(num, '0')
    return `${integerPart}.${decimalPart}`
  }
  const nValue = isRound ? Number(value).toFixed(num) : formatNumber(value)
  return (returnType === 'string' ? nValue : Number(nValue)) as T extends 'string' ? string : number
}
