import isArrObj from "@/verify/isArrObj"

/**
 * 数组对象key值求和
 * @param object 目标对象
 * @param keys 需要求和的key数组
 * @return 求和后的对象
 * @category 对象Object
 * @example
 * ```ts
 * arrObjSum([{id: 1, age: 10, sx: 1}, {id: 2, age: 20, sx: 2}], ['id', 'age'])
 * // => {id: 3, age: 30}
 * ```
 * @example
 * 求和项不是数字时会以0处理
 * ```ts
 * arrObjSum([{id: 'a', age: 10, sx: 1}, {id: 2, age: 'b', sx: 2}], ['id', 'age'])
 * // => {id: 2, age: 10}
 * ```
 */
export default function arrObjSum<T extends Record<string, any>, K extends keyof T>(
  object: T[],
  keys: K[]
): Record<string, any> {
  if (!isArrObj(object)) throw 'object 必须是数组对象'
  const _object = {} as Record<K, number>
  keys.forEach(item => {
    _object[item] = object.reduce((start: number, end) => {
      const value = start + (isNaN(end[item]) ? 0 : Number(end[item]))
      return value
    }, 0)
  })
  return _object
}