import deepClone from '@/util/deepClone'
import typeOf from '@/common/typeOf';
import isObject from '@/verify/isObject';

/**
 * 重置指定对象的值
 * 对对象中值为字符串的重置为: ''
 * 对对象中值为布尔值的重置为: false
 * 对对象中值为数字的重置为: 0
 * 对对象中值为数组的重置为: []
 * 对对象中值为对象的就递归，直到结束
 * @param target 指定对象
 * @return 新的对象
 * @category 对象Object
 * @example
 * ```ts
 * omit({a: 1, b: '2', c: true, d: [1, 2, 3], e: {a: 1, b: '2', c: [6, 7]}})
 * // => {a: 0, b: '', c: false, d: [], e: {a: 0, b: '', c: []}}
 * ```
 */
export default function resetObjectValues<T extends Record<string, any>>(target: T, n = 0) {
  if (!isObject(target)) throw new Error('target参数必须是object');
  if (n != 1) target = deepClone(target);
  Object.keys(target).forEach(key => {
    if (typeOf(target[key]) == 'String') (target as Record<string, any>)[key] = ''
    if (typeOf(target[key]) == 'Number') (target as Record<string, any>)[key] = 0
    if (typeOf(target[key]) == 'Boolean') (target as Record<string, any>)[key] = false
    if (typeOf(target[key]) == 'Array') (target as Record<string, any>)[key] = []
    if (typeOf(target[key]) == 'Object') resetObjectValues(target[key], 1)
  })
  return target
}