/**
 * 深度复制
 * @param origin 对象或者数组
 * @return 深度复制后的对象或者数组
 * @category 工具Util
 * @example
 * ```ts
 * deepClone([1,23, [1]]) // => [1,23, [1]]
 * ```
 * @example
 * ```ts
 * deepClone({a: [1], b: () => {}}) // => {a: [1], b: () => {}}
 * ```
 */
export default function deepClone<T extends Array<T> | any>(source: T): T {
  if (typeof source == 'object') {
    const cloneTarget: T = (Array.isArray(source) ? [] : {}) as T
    for (const key in source) {
      cloneTarget[key] = deepClone(source[key])
    }
    return cloneTarget
  } else {
    return source
  }
}