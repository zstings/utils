import isEmptyObject from "@/verify/isEmptyObject"

/**
 * 合并对象
 * @param target 目标对象，被合并的对象
 * @param sources 源对象，可以多个
 * @return 目标对象
 * @category 对象Object
 * @example
 * 对象合并效果与Object.assign一致
 * ```ts
 * assign({a: 1, c: 3}, {c: 5}) // => {a: 1, c: 5}
 * ```
 */
export default function assign(target: Record<string, any>, ...sources: Record<string, any>[]): Record<string, any> {
  if (isEmptyObject(target)) return {}
  return Object.assign(target, ...sources)
}