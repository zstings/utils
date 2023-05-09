import { version as ver } from '../package.json'
/**
 * 获取数据类型
 * @param value 任意值
 * @return 返回value的类型
 * @category 工具Util
 * @example
 * 数字
 * ```ts
 * typeOf(12) => 'Number'
 * ```
 * @example
 * 字符串
 * ```ts
 * typeOf('12') => 'String'
 * ```
 * @example
 * 布尔
 * ```ts
 * typeOf(true) => 'Boolean'
 * ```
 * @example
 * 函数
 * ```ts
 * typeOf(functuin(){}) => 'Function'
 * ```
 * @example
 * 对象
 * ```ts
 * typeOf({}) => 'Object'
 * ```
 * @example
 * 数组
 * ```ts
 * typeOf([]) => 'Array'
 * ```
 */
export function typeOf(value: any): string {
  return Object.prototype.toString.call(value).slice(8, -1)
}

/**
 * 获取版本号
 * @return 版本号
 * @category 工具Util
 */
export function version(): string {
  return ver
}
