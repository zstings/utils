import * as TPS from '../types'

/**
 * 获取数据类型
 * @param value 任意值
 * @return 返回value的类型
 * @category 工具Util
 * @example
 * 数字
 * ```ts
 * getDataType(12) => 'Number'
 * ```
 * @example
 * 字符串
 * ```ts
 * getDataType('12') => 'String'
 * ```
 * @example
 * 布尔
 * ```ts
 * getDataType(true) => 'Boolean'
 * ```
 * @example
 * 函数
 * ```ts
 * getDataType(functuin(){}) => 'Function'
 * ```
 * @example
 * 对象
 * ```ts
 * getDataType({}) => 'Object'
 * ```
 * @example
 * 数组
 * ```ts
 * getDataType([]) => 'Array'
 * ```
 */
export const getDataType: TPS.GetDataType = function (value) {
  return Object.prototype.toString.call(value).slice(8, -1)
}

