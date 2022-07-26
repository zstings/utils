import  * as TPS from '../types'

/**
 * 获取数据类型
 * @param value 任意值
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
export const getDataType: TPS.GetDataType = function (value) {
  return Object.prototype.toString.call(value).slice(8, -1)
}



/**
 * 判断是否为手机号
 * @param value 任意值
 * @return 返回布尔值
 * @example
 * ```ts
 * isPhone(13302101452) => true
 * isPhone(1330210152) => false
 * ```
 */
export const isPhone: TPS.IsPhone = function (value) {
  return /^1[3-9][\d]{9}$/.test(value.toString())
}



/**
 * 判断是否为数组
 * @param value 任意值
 * @return 返回布尔值
 * @example
 * ```ts
 * isArray([]) => true
 * isArray({}) => false
 * ```
 */
export const isArray: TPS.ToIsTypes = value => getDataType(value) === 'Array'



/**
 * 判断是否为对象
 * @param value 任意值
 * @return 返回布尔值
 * @example
 * ```ts
 * isObject({}) => true
 * isObject([]) => false
 * ```
 */
export const isObject: TPS.ToIsTypes = value => value !== null && getDataType(value) === 'Object'



/**
 * 判断是否为Location
 * @param value 任意值
 * @return 返回布尔值
 * @example
 * ```ts
 * isLocation(window.location) => true
 * isLocation(123) => false
 * ```
 */
export const isLocation: TPS.ToIsTypes = value => getDataType(value) === 'Location'



/**
 * 判断是否为Map
 * @param value 任意值
 * @return 返回布尔值
 * @example
 * ```ts
 * isMap(new Map()) => true
 * isMap(123) => false
 * ```
 */
export const isMap:TPS.ToIsTypes = value => getDataType(value) === 'Map'



/**
 * 判断是否为Set
 * @param value 任意值
 * @return 返回布尔值
 * @example
 * ```ts
 * isSet(new Set()) => true
 * isSet(123) => false
 * ```
 */
export const isSet:TPS.ToIsTypes = value => getDataType(value) === 'Set'



/**
 * 判断是否为Date
 * @param value 任意值
 * @return 返回布尔值
 * @example
 * ```ts
 * isDate(new Date()) => true
 * isDate(123) => false
 * ```
 */
export const isDate:TPS.ToIsTypes = value => getDataType(value) === 'Date'



/**
 * 判断是否为Function
 * @param value 任意值
 * @return 返回布尔值
 * @example
 * ```ts
 * isFunction(function(){}) => true
 * isFunction(123) => false
 * ```
 */
export const isFunction:TPS.ToIsTypes = value => getDataType(value) === 'Function'



/**
 * 判断是否为字符串
 * @param value 任意值
 * @return 返回布尔值
 * @example
 * ```ts
 * isString('abc') => true
 * isString(123) => false
 * ```
 */
export const isString:TPS.ToIsTypes = value => getDataType(value) === 'String'



/**
 * 判断是否为Symbol
 * @param value 任意值
 * @return 返回布尔值
 * @example
 * ```ts
 * isSymbol(Symbol(1)) => true
 * isSymbol(Symbol) => false
 * ```
 */
export const isSymbol:TPS.ToIsTypes = value => getDataType(value) === 'Symbol'



/**
 * 判断是否为数字
 * @param value 任意值
 * @return 返回布尔值
 * @example
 * ```ts
 * isNumber(123) => true
 * isNumber('123') => false
 * ```
 */
export const isNumber:TPS.ToIsTypes = value => getDataType(value) === 'Number'



/**
 * 判断是否为Promise
 * @param value 任意值
 * @return 返回布尔值
 * @example
 * ```ts
 * isPromise(new Promise(() => {})) => true
 * isPromise(Promise.all([])) => true
 * isPromise(Promise) => false
 * ```
 */
export const isPromise:TPS.ToIsTypes = value => {
  return getDataType(value) === 'Promise' && isFunction(value.then) && isFunction(value.catch)
}