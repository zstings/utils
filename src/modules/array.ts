import { isArray, isNumber, isString } from '@/common'

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
export function compact(array: any[]): any[] {
  if (!isArray(array)) throw `array参数需要Array`
  return array.filter(item => !!item)
}

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

/**
 * 数组去重
 * @param array 数组
 * @param key 指定数组对象需要对比的key
 * @return 新的数组
 * @throws array参数需要Array array参数错误时触发
 * @throws key参数需要String key存在且不是字符串时触发
 * @category 数组Array
 * @example
 * ```ts
 * unique([1, 2, 1]) => [1, 2]
 * ```
 * @example
 * 数组对象去重
 * ```ts
 * unique([{id: 1, name: '1'}, {id: 2, name: '2'}, {id: 1, name: '1'}], 'id')
 * // => [{id: 1, name: '1'}, {id: 2, name: '2'}]
 * ```
 */
export function unique(array: any[], key?: string): any[] {
  if (!isArray(array)) throw `array传入参数需要Array`
  if (key && !isString(key)) throw `key传入参数需要String`
  if (key) {
    return array.reduce((x, y) => {
      const isTr = x.some((el: any) => el[key] == y[key])
      if (!isTr) x.push(y)
      return x
    }, [])
  }
  return [...new Set(array)]
}
