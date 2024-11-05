import isObject from "@/verify/isObject";

/**
 * 检查指定对象是否存在指定属性
 * @param target 指定对象
 * @param key 要检查的属性
 * @return true | false
 * @category 对象Object
 * @example
 * ```ts
 * hasOwn({a: 1, b: 0}, 'b') // => true
 * hasOwn({a: 1, b: 0}, 'c') // => false
 * ```
 */
export default function hasOwn(target: Record<string, any>, key:string) {
  if (!isObject(target)) throw new Error('target参数必须是object');
  return Object.prototype.hasOwnProperty.call(target, key)
}