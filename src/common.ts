import  * as TPS from '../types'

/**
 * 获取数据类型
 * @param value 任意值
 * @return 返回value的类型
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



/**
 * 判断是否为手机号
 * @param value 任意值
 * @return true | false
 * @example
 * 验证通过
 * ```ts
 * isPhone(13302101452) => true
 * ```
 * @example
 * 验证失败
 * ```ts
 * isPhone(1330210152) => false
 * ```
 */
export const isPhone: TPS.IsPhone = function (value) {
  return /^1[3-9][\d]{9}$/.test(value.toString())
}



/**
 * 判断是否为数组
 * @param value 任意值
 * @return true | false
 * @example
 * 验证通过
 * ```ts
 * isArray([]) => true
 * ```
 * @example
 * 验证失败
 * ```ts
 * isArray({}) => false
 * ```
 */
export const isArray: TPS.ToIsTypes = value => getDataType(value) === 'Array'



/**
 * 判断是否为对象
 * @param value 任意值
 * @return true | false
 * @example
 * 验证通过
 * ```ts
 * isObject({}) => true
 * ```
 * @example
 * 验证失败
 * ```ts
 * isObject([]) => false
 * ```
 */
export const isObject: TPS.ToIsTypes = value => value !== null && getDataType(value) === 'Object'



/**
 * 判断是否为Location
 * @param value 任意值
 * @return true | false
 * @example
 * 验证通过
 * ```ts
 * isLocation(window.location) => true
 * ```
 * @example
 * 验证失败
 * ```ts
 * isLocation(123) => false
 * ```
 */
export const isLocation: TPS.ToIsTypes = value => getDataType(value) === 'Location'



/**
 * 判断是否为Map
 * @param value 任意值
 * @return true | false
 * @example
 * 验证通过
 * ```ts
 * isMap(new Map()) => true
 * ```
 * @example
 * 验证失败
 * ```ts
 * isMap(123) => false
 * ```
 */
export const isMap:TPS.ToIsTypes = value => getDataType(value) === 'Map'



/**
 * 判断是否为Set
 * @param value 任意值
 * @return true | false
 * @example
 * 验证通过
 * ```ts
 * isSet(new Set()) => true
 * ```
 * @example
 * 验证失败
 * ```ts
 * isSet(123) => false
 * ```
 */
export const isSet:TPS.ToIsTypes = value => getDataType(value) === 'Set'



/**
 * 判断是否为Date
 * @param value 任意值
 * @return true | false
 * @example
 * 验证通过
 * ```ts
 * isDate(new Date()) => true
 * ```
 * @example
 * 验证失败
 * ```ts
 * isDate(123) => false
 * ```
 */
export const isDate:TPS.ToIsTypes = value => getDataType(value) === 'Date'



/**
 * 判断是否为Function
 * @param value 任意值
 * @return true | false
 * @example
 * 验证通过
 * ```ts
 * isFunction(function(){}) => true
 * ```
 * @example
 * 验证失败
 * ```ts
 * isFunction(123) => false
 * ```
 */
export const isFunction:TPS.ToIsTypes = value => getDataType(value) === 'Function'



/**
 * 判断是否为字符串
 * @param value 任意值
 * @return true | false
 * @example
 * 验证通过
 * ```ts
 * isString('abc') => true
 * ```
 * @example
 * 验证失败
 * ```ts
 * isString(123) => false
 * ```
 */
export const isString:TPS.ToIsTypes = value => getDataType(value) === 'String'



/**
 * 判断是否为Symbol
 * @param value 任意值
 * @return true | false
 * @example
 * 验证通过
 * ```ts
 * isSymbol(Symbol(1)) => true
 * ```
 * @example
 * 验证失败
 * ```ts
 * isSymbol(Symbol) => false
 * ```
 */
export const isSymbol:TPS.ToIsTypes = value => getDataType(value) === 'Symbol'



/**
 * 判断是否为数字
 * @param value 任意值
 * @return true | false
 * @example
 * 验证通过
 * ```ts
 * isNumber(123) => true
 * ```
 * @example
 * 验证失败
 * ```ts
 * isNumber('123') => false
 * ```
 */
export const isNumber:TPS.ToIsTypes = value => getDataType(value) === 'Number'



/**
 * 判断是否为Promise
 * @param value 任意值
 * @return true | false
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
export const isPromise:TPS.ToIsTypes = value => {
  return getDataType(value) === 'Promise' && isFunction(value.then) && isFunction(value.catch)
}