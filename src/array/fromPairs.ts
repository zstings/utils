import { isArray } from '@/verify'

/**
 * 二维数组转化为对象
 * @param array 数组
 * @return 新的数组
 * @throws array参数需要Array array参数错误时触发
 * @throws size参数需要Number size参数错误时触发
 * @category 数组Array
 * @example
 * ```ts
 * fromPairs([['a', 1], ['b', 2]]) => {a: 1, b: 2}
 * ```
 * @example
 * 多余的成员会被舍弃
 * ```ts
 * fromPairs([['a', 1], ['b', 2, 3]) => {a: 1, b: 2}
 * ```
 */
export function fromPairs(array: any[]): Record<string, unknown> {
  if (!isArray(array)) throw `array传入参数需要Array`
  return Object.fromEntries(new Map(array))
}
