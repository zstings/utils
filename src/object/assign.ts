import isEmptyObject from '@/verify/isEmptyObject'
import isObject from '@/verify/isObject'

// 将元组类型转成对象类型的工具类型
type MergeTuple<T extends any[]> = T extends [infer F, ...infer R] ? Omit<F, keyof MergeTuple<R>> & MergeTuple<R> : {};
type Merge<T, U> = Omit<T, keyof U> & U;

/**
 * 合并对象
 * @param target 目标对象，被合并的对象
 * @param sources 源对象，可以多个
 * @return 目标对象
 * @throws target参数必须是object  target参数不是对象时触发
 * @category 对象Object
 * @example
 * 对象合并效果与Object.assign一致
 * ```ts
 * assign({a: 1, c: 3}, {c: 5}) // => {a: 1, c: 5}
 * ```
 */
export default function assign<T extends Record<string, any>, U extends Record<string, any>[]>(target: T, ...sources: U) {
  if (!isObject(target)) throw 'target参数必须是object'
  if (isEmptyObject(target)) return {} as keyof T extends never ? {} : Merge<T, MergeTuple<U>>
  return Object.assign(target, ...sources) as keyof T extends never ? {} : Merge<T, MergeTuple<U>>
}