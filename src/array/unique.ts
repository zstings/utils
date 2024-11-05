import isArray from '@/verify/isArray'
import isString from '@/verify/isString'
import isEqual from '@/verify/isEqual'

/**
 * 数组去重
 * @param array 数组
 * @param option
 * @param option.key 数组对象去重时指定的键
 * @param option.deep 是否启用引用类型的去重 默认true， 如果指定了key, deep 强制为 true
 * @return 新的数组
 * @throws array参数需要Array array参数错误时触发
 * @throws key参数需要String key存在且不是字符串时触发
 * @throws key指定的属性不存在 key在数组对象的对象中找不到次属性时触发
 * @category 数组Array
 * @example
 * ```ts
 * unique([1, 2, 1]) => [1, 2]
 * ```
 * @example
 * 数组对象去重-指定key
 * ```ts
 * unique([{id: 1, name: '1'}, {id: 2, name: '2'}, {id: 1, name: '1'}], {key: 'id'})
 * // => [{id: 1, name: '1'}, {id: 2, name: '2'}]
 * ```
 * 不指定key，默认启用引用类型的去重
 * ```ts
 * unique([{id: 1, name: '1'}, {id: 1, name: '2'}, {id: 1, name: '1'}])
 * // => [{id: 1, name: '1'}, {id: 1, name: '2'}]
 * ```
 * 不指定key，关闭引用类型的去重
 * ```ts
 * unique([1, 2, 1, {id: 1, name: '1'}, {id: 1, name: '2'}, {id: 1, name: '1'}], {deep: false})
 * // => [1, 2, {id: 1, name: '1'}, {id: 1, name: '2'}, {id: 1, name: '1'}]
 * ```
 */
export default function unique(array: any[], option?: {key?: string, deep?: boolean}): any[] {
  if (!isArray(array)) throw `array传入参数需要Array`
  if (option?.key && !isString(option.key)) throw `key传入参数需要String`
  if (option?.key && option.deep != true) option.deep = true
  if (!option) option = {deep: true}
  if (option && option.deep) {
    return array.reduce((x, y) => {
      if (option.key && y[option.key!] == undefined) throw `key指定的属性不存在`
      const isTr = option.key ? x.some((el: any) => isEqual(el[option.key!], y[option.key!])) : x.some((el: any) => isEqual(el, y))
      if (!isTr) x.push(y)
      return x
    }, [])
  }
  return [...new Set(array)]
}
