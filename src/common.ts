import  * as TPS from '../types'

/**
 * 获取数据类型
 * @param str 参数
 * @return 返回str的类型
 * @example
 * ```ts
 * getDataType(12) => 'Number'
 * getDataType('12') => 'String'
 * getDataType(true) => 'Boolean'
 * getDataType(functuin(){}) => 'Function'
 * getDataType({}) => 'Object'
 * getDataType([]) => 'Array'
 * ```
 */
export const getDataType: TPS.GetDataType = function (str) {
  return Object.prototype.toString.call(str).slice(8, -1)
}



/**
 * 判断是否为手机号
 * @param str 参数
 * @return 返回布尔值
 * @example
 * ```ts
 * isPhone(13302101452) => true
 * isPhone(1330210152) => false
 * ```
 */
export const isPhone: TPS.IsPhone = function (str) {
  return /^1[3-9][\d]{9}$/.test(str.toString())
}



/**
 * 判断是否为数组
 * @param str 参数
 * @return 返回布尔值
 * @example
 * ```ts
 * isArray([]) => true
 * isArray({}) => false
 * ```
 */
export const isArray: TPS.ToIsTypes = str => getDataType(str) === 'Array'



/**
 * 判断是否为对象
 * @param str 参数
 * @return 返回布尔值
 * @example
 * ```ts
 * isObject({}) => true
 * isObject([]) => false
 * ```
 */
export const isObject: TPS.ToIsTypes = str => str !== null && getDataType(str) === 'Object'



/**
 * 判断是否为Location
 * @param str 参数
 * @return 返回布尔值
 * @example
 * ```ts
 * isLocation(window.location) => true
 * isLocation(123) => false
 * ```
 */
export const isLocation: TPS.ToIsTypes = str => getDataType(str) === 'Location'



/**
 * 判断是否为Map
 * @param str 参数
 * @return 返回布尔值
 * @example
 * ```ts
 * isMap(new Map()) => true
 * isMap(123) => false
 * ```
 */
export const isMap:TPS.ToIsTypes = str => getDataType(str) === 'Map'



/**
 * 判断是否为Set
 * @param str 参数
 * @return 返回布尔值
 * @example
 * ```ts
 * isSet(new Set()) => true
 * isSet(123) => false
 * ```
 */
export const isSet:TPS.ToIsTypes = str => getDataType(str) === 'Set'



/**
 * 判断是否为Date
 * @param str 参数
 * @return 返回布尔值
 * @example
 * ```ts
 * isDate(new Date()) => true
 * isDate(123) => false
 * ```
 */
export const isDate:TPS.ToIsTypes = str => getDataType(str) === 'Date'



/**
 * 判断是否为Function
 * @param str 参数
 * @return 返回布尔值
 * @example
 * ```ts
 * isFunction(function(){}) => true
 * isFunction(123) => false
 * ```
 */
export const isFunction:TPS.ToIsTypes = str => getDataType(str) === 'Function'



/**
 * 判断是否为字符串
 * @param str 参数
 * @return 返回布尔值
 * @example
 * ```ts
 * isString('abc') => true
 * isString(123) => false
 * ```
 */
export const isString:TPS.ToIsTypes = str => getDataType(str) === 'String'



/**
 * 判断是否为Symbol
 * @param str 参数
 * @return 返回布尔值
 * @example
 * ```ts
 * isSymbol(Symbol(1)) => true
 * isSymbol(Symbol) => false
 * ```
 */
export const isSymbol:TPS.ToIsTypes = str => getDataType(str) === 'Symbol'



/**
 * 判断是否为数字
 * @param str 参数
 * @return 返回布尔值
 * @example
 * ```ts
 * isNumber(123) => true
 * isNumber('123') => false
 * ```
 */
export const isNumber:TPS.ToIsTypes = str => getDataType(str) === 'Number'



/**
 * 判断是否为Promise
 * @param str 参数
 * @return 返回布尔值
 * @example
 * ```ts
 * isPromise(new Promise(() => {})) => true
 * isPromise(Promise.all([])) => true
 * isPromise(Promise) => false
 * ```
 */
export const isPromise:TPS.ToIsTypes = str => {
  return getDataType(str) === 'Promise' && isFunction(str.then) && isFunction(str.catch)
}