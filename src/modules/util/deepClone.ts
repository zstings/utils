import { isArray, isObject } from '@/common'
import { ObjectData, ArrayData } from '@types'
/**
 * 深度复制
 * @param origin 对象或者数组
 * @returns 深度复制后的对象或者数组
 * @category 工具Util
 * @example
 * ```ts
 * deepCopy([1,23, [1]]) // => [1,23, [1]]
 * ```
 * @example
 * ```ts
 * deepCopy({a: [1], b: () => {}}) // => {a: [1], b: () => {}}
 * ```
 */
// export function deepCopy(origin: ObjectData | ArrayData) {
//   if (!(isArray(origin) || isObject(origin))) return origin
//   const nArr: ObjectData = isObject(origin) ? {} : []
//   for (const k in <ObjectData>origin) {
//     if (typeof (<ObjectData>origin)[k] === 'object' && (<ObjectData>origin)[k] !== null) {
//       nArr[k] = deepCopy((<ObjectData>origin)[k])
//     } else {
//       nArr[k] = (<ObjectData>origin)[k]
//     }
//   }
//   return nArr
// }

export function deepCopy<T extends Array<T> | any>(sourceData: T): T {
  if (Array.isArray(sourceData)) {
    return sourceData.map(item => deepCopy(item)) as T
  }
  const obj: T = {} as T
  for (const key in sourceData) {
    if (typeof sourceData[key] === 'object' && sourceData[key] !== null) {
      obj[key] = deepCopy(sourceData[key])
    } else {
      obj[key] = sourceData[key]
    }
  }
  return obj
}

export function deepClone(origin: ObjectData | ArrayData, hash = new WeakMap()) {
  if (!(isArray(origin) || isObject(origin))) return origin
  if (hash.has(origin)) return hash.get(origin)
  const target = isObject(origin) ? ({} as ObjectData) : ([] as ArrayData)
  hash.set(origin, target)
  for (const key in origin) {
    if (Object.prototype.hasOwnProperty.call(origin, key)) {
      if (isObject((<ObjectData>origin)[key])) {
        // 新增代码，传入哈希表
        target[key] = deepClone((<ObjectData>origin)[key], hash)
      } else {
        target[key] = (<ObjectData>origin)[key]
      }
    }
  }
  return target
}

// const a = deepClone({})
// const b = deepCopy({ a: 1 })
// console.log(b)
