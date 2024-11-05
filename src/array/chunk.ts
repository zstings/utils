import isArray from '@/verify/isArray'
import isInt from '@/verify/isInt'
import isNumber from '@/verify/isNumber'

/**
 * 按长度拆分数组
 * @param array 数组
 * @param size 长度 默认1
 * @return 新的数组
 * @throws array参数需要Array array参数错误时触发
 * @throws 请检查size参数，必须符合大于0的整数 size参数错误时触发
 * @category 数组Array
 * @example
 * ```ts
 * chunk([{a:1}, {a: 2}, {a: 3}, {a: 4}], 2)
 * // => [[{a:1},{a:2}],[{a:3},{a:4}]]
 * ```
 * @example
 * ```ts
 * chunk([{a:1}, {a: 2}, {a: 3}, {a: 4}], 3)
 * // => [[{a:1},{a:2},{a:3}],[{a:4}]]
 * ```
 */
export default function chunk(array: any[], size = 1): any[] {
  if (!isArray(array)) throw `array参数需要Array`
  if (!isNumber(size) || !isInt(size) || size <= 0) throw `请检查size参数，必须符合大于0的整数`
  const arr = []
  const count = Math.ceil(array.length / size)
  for (let i = 0; i < count; i++) {
    arr.push(array.slice(i * size, i * size + size))
  }
  return arr
}
