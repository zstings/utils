import { isArray, isNumber } from '@/common'

/**
 * 移除所有 falsey 值的数组
 * @param array 数组
 * @throws 传入参数需要Array array参数错误时触发
 * @category 数组Array
 * @example
 * falsey => 0 | false | null | undefined | NaN
 * ```ts
 * compact([1, 0, false, 2, NaN, 3, null]) => [1, 2, 3]
 * ```
 */
export function compact(array: any[]): any[] {
  if (!isArray(array)) throw `array参数需要Array`
  return array.filter(item => !!item)
}

/**
 * 按长度拆分数组
 * @param array 数组
 * @param size 长度 默认1
 * @throws 传入参数需要Array array参数错误时触发
 * @throws size传入参数需要Number size参数错误时触发
 * @category 数组Array
 * @example
 * ```ts
 * chunk([{a:1}, {a: 2}, {a: 3}, {a: 4}], 2) => [[{"a":1},{"a":2}],[{"a":3},{"a":4}]]
 * ```
 * @example
 * ```ts
 * chunk([{a:1}, {a: 2}, {a: 3}, {a: 4}], 3) => [[{"a":1},{"a":2},{"a":3}],[{"a":4}]]
 * ```
 */
export function chunk(array: any[], size = 1): any[] {
  if (!isArray(array)) throw `array传入参数需要Array`
  if (!isNumber(size)) throw `size传入参数需要Number`
  const arr = []
  const count = Math.ceil(array.length / size)
  for (let i = 0; i < count; i++) {
    arr.push(array.slice(i * size, i * size + size))
  }
  return arr
}
