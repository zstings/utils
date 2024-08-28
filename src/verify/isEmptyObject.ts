import isObject from '@/verify/isObject'

/**
 * 判断对象是否是空对象
 * @param object 对象
 * @return true | false
 * @throws 传入参数不是Object 传入参数不是Object时触发
 * @category 对象Object
 * @example
 * 验证通过
 * ```ts
 * isEmptyObject({}) => true
 * ```
 * @example
 * 验证失败
 * ```ts
 * isEmptyObject({a: 1}) => false
 * ```
 */
export default function isEmptyObject(object: Record<string, unknown>): boolean {
  if (!isObject(object)) throw '传入参数不是Object'
  return !Object.keys(object).length
}