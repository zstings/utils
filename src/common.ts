import  * as TPS from '../types'

export const getDataType: TPS.GetDataType = function (str) {
  return Object.prototype.toString.call(str).slice(8, -1)
}

export const isPhone: TPS.IsPhone = function (str) {
  return /^1[3-9][\d]{9}$/.test(str.toString())
}

export const isArray: TPS.ToIsTypes = str => getDataType(str) === 'Array'

export const isObject: TPS.ToIsTypes = str => str !== null && getDataType(str) === 'Object'

export const isLocation: TPS.ToIsTypes = str => getDataType(str) === 'Location'

export const isMap:TPS.ToIsTypes = str => getDataType(str) === 'Map'

export const isSet:TPS.ToIsTypes = str => getDataType(str) === 'Set'

export const isDate:TPS.ToIsTypes = str => getDataType(str) === 'Date'

export const isFunction:TPS.ToIsTypes = str => getDataType(str) === 'Function'

export const isString:TPS.ToIsTypes = str => getDataType(str) === 'String'

export const isSymbol:TPS.ToIsTypes = str => getDataType(str) === 'Symbol'

export const isPromise:TPS.ToIsTypes = str => {
  return isObject(str) && isFunction(str.then) && isFunction(str.catch)
}