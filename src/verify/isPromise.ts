import typeOf from '@/common/typeOf'
import isFunction from '@/verify/isFunction'

/**
 * 判断是否为Promise
 * @param value 任意值
 * @return true | false
 * @category 工具Util
 * @example
 * 验证通过
 * ```ts
 * isPromise(new Promise(() => {})) => true
 * isPromise(Promise.all([])) => true
 * ```
 * @example
 * 验证失败
 * ```ts
 * isPromise(Promise) => false
 * ```
 * @example
 * ```ts
 * isPromise(Promise) => false
 * ```
 */
export default function isPromise(value: any): boolean {
  return typeOf(value) === 'Promise' && isFunction(value.then) && isFunction(value.catch)
}