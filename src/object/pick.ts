import deepClone from '@/util/deepClone'
import isObject from '@/verify/isObject';
import isArray from '@/verify/isArray';

/**
 * 提取指定对象的指定属性
 * @param target 指定对象
 * @param keys 由需要提取的属性组成的数组，不传时为[]
 * @return 新的对象
 * @category 对象Object
 * @example
 * ```ts
 * omit({a: 1, b: 2, c: 3}) // => {}
 * omit({a: 1, b: 2, c: 3}, []) // => {}
 * ```
 * @example
 * ```
 * omit({a: 1, b: 2, c: 3}, ['a', 'c']) // => {a: 1, c: 3}
 * ```
 */
// 函数重载声明
export default function pick<T extends Record<string, any>>(target: T, keys?: []): {};
export default function pick<T extends Record<string, any>, K extends keyof T>(target: T, keys: K[]): Pick<T, K>;
export default function pick<T extends Record<string, any>, K extends keyof T>(target: T, keys: K[] = []): K extends keyof T ? Pick<T, K> : {} {
  if (!isObject(target)) throw new Error('target参数必须是object');
  if (!isArray(keys)) throw new Error('keys参数必须是array');
  if (keys.length == 0) return {} as K extends keyof T ? Pick<T, K> : {}
  target = deepClone(target);
  Object.keys(target).forEach(key => {
    if (!keys.includes(key as K)) {
      delete target[key]
    } 
  })
  return target as K extends keyof T ? Pick<T, K> : {};
}
