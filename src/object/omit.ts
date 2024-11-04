import deepClone from "@/util/deepClone"
import isObject from "@/verify/isObject";

/**
 * 删除指定对象的指定属性
 * @param target 指定对象
 * @param keys 由需要删除的属性组成的数组，不传时为[]
 * @return 新的对象
 * @category 对象Object
 * @example
 * ```ts
 * omit({a: 1, b: 2, c: 3}, ['a', 'c']) // => {b: 2}
 * ```
 */
// 函数重载声明
export default function omit<T extends Record<string, any>>(target: T): T;
export default function omit<T extends Record<string, any>, U extends (keyof T)[]>(target: T, keys: U): Omit<T, U[number]>;
export default function omit<T extends Record<string, any>, U extends (keyof T)[]>(target: T, keys?: U) {
  if (!isObject(target)) throw 'target参数必须是对象'
  target = deepClone(target)
  ;(keys || []).forEach(key => delete target[key])
  return target
}