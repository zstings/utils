import deepClone from "@/util/deepClone"

/**
 * 删除指定对象的指定属性
 * @param object 指定对象
 * @param keys 指定属性
 * @return 新的对象
 * @category 对象Object
 * @example
 * ```ts
 * omit({a: 1, b: 2, c: 3}, ['a', 'c']) // => {b: 2}
 * ```
 */
export default function omit(object: Record<string, any>, keys: string[] = []): Record<string, any> {
  const _object = deepClone(object)
  Object.keys(_object).forEach(item => {
    if (keys.includes(item)) delete _object[item]
  })
  return _object
}