import  * as TPS from '../types'

export const getDataType: TPS.GetDataType = function (str) {
  return Object.prototype.toString.call(str).slice(8, -1)
}


export const isPhone: TPS.IsPhone = function (str) {
  return /^1[3-9][\d]{9}$/.test(str.toString())
}


export const isArray: TPS.IsArray = function (str) {
  return getDataType(str) === 'Array'
}


export const isObject: TPS.IsObject = function (str) {
  return str !== null && getDataType(str) === 'Object'
}

export const isLocation: TPS.IsLocation = (str) => getDataType(str) === 'Location'