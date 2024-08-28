import isEmptyObject from "@/verify/isEmptyObject"

/**
 * 最小合并对象
 * @param target 目标对象，被合并的对象
 * @param sources 源对象，可以多个
 * @return 目标对象
 * @category 对象Object
 * @example
 * 最小合并对象，只会合并源对象原有的属性，其他忽略
 * ```ts
 * assignMin({a: 1, c: 1}, {a: 2, b: 3}, {c: 3}) // => {a: 2, c: 3}
 * ```
 */
export default function assignMin(target: Record<string, any>, ...sources: Record<string, any>[]): Record<string, any> {
  if (isEmptyObject(target)) return {}
  const _object = Object.assign({}, target, ...sources)
  Object.keys(target).forEach(item => {
    target[item] = _object[item]
  })
  return target
}