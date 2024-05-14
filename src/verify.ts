import { typeOf } from '@/common'

/**
 * 判断是否为手机号
 * @param value 任意值
 * @return true | false
 * @category 工具Util
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
export function isPhone(value: string | number): boolean {
  return /^1[3-9][\d]{9}$/.test(value.toString())
}

/**
 * 判断是否为数组
 * @param value 任意值
 * @return true | false
 * @category 数组Array
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
export function isArray(value: any): boolean {
  return typeOf(value) === 'Array'
}

/**
 * 判断是否为对象
 * @param value 任意值
 * @return true | false
 * @category 对象Object
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
export function isObject(value: any): boolean {
  return value !== null && typeOf(value) === 'Object'
}

/**
 * 判断是否为Location
 * @param value 任意值
 * @return true | false
 * @category URL
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
export function isLocation(value: any): boolean {
  return typeOf(value) === 'Location'
}

/**
 * 判断是否为Map
 * @param value 任意值
 * @return true | false
 * @category 对象Object
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
export function isMap(value: any): boolean {
  return typeOf(value) === 'Map'
}

/**
 * 判断是否为Set
 * @param value 任意值
 * @return true | false
 * @category 对象Object
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
export function isSet(value: any): boolean {
  return typeOf(value) === 'Set'
}

/**
 * 判断是否为Date
 * @param value 任意值
 * @return true | false
 * @category 时间Date
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
export function isDate(value: any): boolean {
  return typeOf(value) === 'Date'
}

/**
 * 判断是否为Function
 * @param value 任意值
 * @return true | false
 * @category 函数Function
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
export function isFunction(value: any): boolean {
  return typeOf(value) === 'Function'
}

/**
 * 判断是否为字符串
 * @param value 任意值
 * @return true | false
 * @category 字符串String
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
export function isString(value: any): boolean {
  return typeOf(value) === 'String'
}

/**
 * 判断是否为Symbol
 * @param value 任意值
 * @return true | false
 * @category 对象Object
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
export function isSymbol(value: any): boolean {
  return typeOf(value) === 'Symbol'
}

/**
 * 判断是否为数字
 * @param value 任意值
 * @return true | false
 * @category 数字Number
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
export function isNumber(value: any): boolean {
  return typeOf(value) === 'Number'
}

/**
 * 判断是否为Boolean
 * @param value 任意值
 * @return true | false
 * @category 工具Util
 * @example
 * 验证通过
 * ```ts
 * isBoolean(true) => true
 * isBoolean(false) => true
 * ```
 * @example
 * 验证失败
 * ```ts
 * isBoolean(123) => false
 * ```
 */
export function isBoolean(value: any): boolean {
  return typeOf(value) === 'Boolean'
}

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
export function isPromise(value: any): boolean {
  return typeOf(value) === 'Promise' && isFunction(value.then) && isFunction(value.catch)
}

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
export function isEmptyObject(object: Record<string, unknown>): boolean {
  if (!isObject(object)) throw '传入参数不是Object'
  return !Object.keys(object).length
}

/**
 * 检查字符串是否包含中文
 * @param value 字符串
 * @return true | false
 * @category 工具Util
 * @example
 * ```ts
 * isIncludeChinese() // => false
 * ```
 * @example
 * ```ts
 * isIncludeChinese('你好') // => true
 * ```
 */
export function isIncludeChinese(value: string): boolean {
  return /\p{sc=Han}/gu.test(value)
}

/**
 * 是否是dom
 * @param tarage dom
 * @return true | false
 * @category 浏览器Dom
 * @example
 * ```ts
 * isDom() // => false
 * ```
 * @example
 * ```ts
 * isDom(document.querySelector('head')) // => true
 * ```
 */
export function isDom(tarage: Element): boolean {
  return typeOf(tarage).includes('Element')
}

/**
 * 是否是null|undefined
 * @param value 任意值
 * @return true | false
 * @category 工具Util
 * @example
 * ```ts
 * isNullOrUndefined(null) // => true
 * isNullOrUndefined(undefined) // => true
 * ```
 * @example
 * ```ts
 * isNullOrUndefined(2) // => false
 * ```
 */
export function isNullOrUndefined(value: any): boolean {
  return ['Null', 'Undefined'].includes(typeOf(value))
}

/**
 * 是否是数组对象
 * @return true | false
 * @category 数组Array
 * @example
 * ```ts
 * isArrObj([{}]) // => true
 * ```
 * @example
 * ```ts
 * isArrObj([]) // => false
 * ```
 */
export function isArrObj(object: any) {
  if (!isArray(object)) return false
  return object.every((item: any) => {
    return isObject(item)
  })
}

/**
 * 是否是json字符串
 * @return true | false
 * @category 工具Util
 * @example
 * ```ts
 * isJsonString('{"a":1}') // => true
 * ```
 * @example
 * ```ts
 * isJsonString(1) // => false
 * ```
 */
export function isJsonString(str: string) {
  try {
    JSON.parse(str)
    return true
  } catch (err) {
    return false
  }
}

/**
 * 是否是基本类型
 * @return true | false
 * @category 工具Util
 * @example
 * ```ts
 * isBasicType('12') // => true
 * ```
 * @example
 * ```ts
 * isBasicType([]) // => false
 * ```
 */
export function isBasicType(value: any): boolean {
  return ['String', 'Number', 'Boolean', 'Null', 'Undefined'].includes(typeOf(value))
}
