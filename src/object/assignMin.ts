import isEmptyObject from "@/verify/isEmptyObject"
import isObject from "@/verify/isObject"

// 将元组类型转成对象类型的工具类型
type MergeTuple<T extends any[]> = T extends [infer F, ...infer R] ? Omit<F, keyof MergeTuple<R>> & MergeTuple<R> : {};
type Merge<T, U> = Omit<T, keyof U> & U;

/**
 * 最小合并对象
 * @param target 目标对象，被合并的对象
 * @param sources 源对象，可以多个
 * @return 目标对象
 * @throws target参数必须是对象  target参数不是对象时触发
 * @category 对象Object
 * @example
 * 最小合并对象，只会合并源对象原有的属性，其他忽略
 * ```ts
 * assignMin({a: 1, c: 1}, {a: 2, b: 3}, {c: 3}) // => {a: 2, c: 3}
 * ```
 */
export default function assignMin<T extends Record<string, any>, U extends Record<string, any>[]>(target: T, ...sources: U) {
  if (!isObject(target)) throw 'target参数必须是对象'
  if (isEmptyObject(target)) return {} as keyof T extends never ? {} : Omit<Merge<T, MergeTuple<U>>, Exclude<keyof Merge<T, MergeTuple<U>>, keyof T>>
  const merge = Object.assign({}, target, ...sources)
  // 使用索引签名并确保类型安全
  Object.keys(target).forEach(key => target[key as keyof T] = merge[key as keyof T]);
  return target as unknown as keyof T extends never ? {} : Omit<Merge<T, MergeTuple<U>>, Exclude<keyof Merge<T, MergeTuple<U>>, keyof T>>
}