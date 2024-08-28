import { isArray, isNumber } from '@/verify'

/**
 * 按长度拆分数组
 * @param array 数组
 * @param size 长度 默认1
 * @return 新的数组
 * @throws array参数需要Array array参数错误时触发
 * @throws size参数需要Number size参数错误时触发
 * @category 数组Array
 * @example
 * ```ts
 * chunk([{a:1}, {a: 2}, {a: 3}, {a: 4}], 2)
 * // => [[{"a":1},{"a":2}],[{"a":3},{"a":4}]]
 * ```
 * @example
 * ```ts
 * chunk([{a:1}, {a: 2}, {a: 3}, {a: 4}], 3)
 * // => [[{"a":1},{"a":2},{"a":3}],[{"a":4}]]
 * ```
 */
export function chunk(array: any[], size = 1): any[] {
  if (!isArray(array)) throw `array参数需要Array`
  if (!isNumber(size)) throw `size参数需要Number`
  const arr = []
  const count = Math.ceil(array.length / size)
  for (let i = 0; i < count; i++) {
    arr.push(array.slice(i * size, i * size + size))
  }
  return arr
}
