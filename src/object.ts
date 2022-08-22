import { deepClone } from '@/util'
import { Omit, Assign, ArrObjSum } from '@types'
import { isArrObj, isEmptyObject } from '@/verify'

/**
 * 指定深度或者广度的对象
 * @param deep 深度
 * @param breadth 广度
 * @returns 对象
 * @category 对象Object
 * @example
 * ```ts
 * createData(1) // => {data: {}}
 * ```
 * @example
 * ```ts
 * createData(2, 2)
 * // =>
 * {
 *   "data": {
 *      "0": 0,
 *      "1": 1,
 *      "data": {
 *          "0": 0,
 *          "1": 1
 *      }
 *   }
 *}
 * ```
 */
export function createData(deep = 1, breadth = 0) {
  const data: { data?: any; [key: number]: any } = {}
  let temp = data
  for (let i = 0; i < deep; i++) {
    temp = temp['data'] = {}
    for (let j = 0; j < breadth; j++) {
      temp[j] = j
    }
  }
  return data
}

/**
 * 删除指定对象的指定属性
 * @param object 指定对象
 * @param keys 指定属性
 * @returns 新的对象
 * @category 对象Object
 * @example
 * ```ts
 * omit({a: 1, b: 2, c: 3}, ['a', 'c']) // => {b: 2}
 * ```
 */
export const omit: Omit = (object, keys = []) => {
  const _object = deepClone(object)
  Object.keys(_object).forEach(item => {
    if (keys.includes(item)) delete _object[item]
  })
  return _object
}
omit({ a: 1 }, ['b'])

/**
 * 合并对象
 * @param target 目标对象，被合并的对象
 * @param sources 源对象，可以多个
 * @returns 目标对象
 * @category 对象Object
 * @example
 * 对象合并效果与Object.assign一致
 * ```ts
 * assign({a: 1, c: 3}, {c: 5}) // => {a: 1, c: 5}
 * ```
 */
export const assign: Assign = (target, ...sources) => {
  if (isEmptyObject(target)) return {}
  return Object.assign(target, ...sources)
}

/**
 * 最小合并对象
 * @param target 目标对象，被合并的对象
 * @param sources 源对象，可以多个
 * @returns 目标对象
 * @category 对象Object
 * @example
 * 最小合并对象，只会合并源对象原有的属性，其他忽略
 * ```ts
 * assignMin({a: 1, c: 1}, {a: 2, b: 3}, {c: 3}) // => {a: 2, c: 3}
 * ```
 */
export const assignMin: Assign = (target, ...sources) => {
  if (isEmptyObject(target)) return {}
  const _object = Object.assign({}, ...sources)
  Object.keys(target).forEach(item => {
    target[item] = _object[item]
  })
  return target
}

/**
 * 数组对象key值求和
 * @param object 目标对象
 * @param keys 需要求和的key数组
 * @returns 求和后的对象
 * @category 对象Object
 * @example
 * ```ts
 * arrObjSum([{id: 1, age: 10, sx: 1}, {id: 2, age: 20, sx: 2}], ['id', 'age'])
 * // => {id: 3, age: 30}
 * ```
 */
export const arrObjSum: ArrObjSum = (object, keys) => {
  if (!isArrObj(object)) throw 'object 必须是数组对象'
  const _keys = keys.map((item: any) => {
    return {
      [item]: object.reduce((start: any, end: any) => {
        const value = start + Number(end[item])
        return isNaN(value) ? 0 : value
      }, 0)
    }
  })
  return _keys
}
