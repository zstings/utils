import { isArray, isString } from '@/verify'

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
