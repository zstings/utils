import isArray from "@/verify/isArray"

/**
 * 移除所有 falsey 值的数组
 * @param array 数组
 * @return 新的数组
 * @throws array参数需要Array array参数错误时触发
 * @category 数组Array
 * @example
 * falsey => 0 | false | null | undefined | NaN
 * ```ts
 * compact([1, 0, false, 2, NaN, 3, null]) => [1, 2, 3]
 * ```
 */
export default function compact(array: any[]): any[] {
  if (!isArray(array)) throw `array参数需要Array`
  return array.filter(item => !!item)
}
