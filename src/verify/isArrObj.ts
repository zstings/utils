import isArray from '@/verify/isArray'
import isObject from '@/verify/isObject'

/**
 * 是否是数组对象
 * @return true | false
 * @category 数组Array
 * @example
 * ```ts
 * isArrObj([{}]) // => true
 * ```
 * @example
 * ```ts
 * isArrObj([]) // => false
 * ```
 */
export default function isArrObj(object: any) {
  if (!isArray(object)) return false
  return object.every((item: any) => {
    return isObject(item)
  })
}