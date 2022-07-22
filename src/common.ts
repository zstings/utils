import { GetDataType, IsPhone, IsArray } from '../types'



export const isPhone: IsPhone = function (str) {
  return /^1[3-9][\d]{9}$/.test(str.toString())
}



export const isArray: IsArray = function (str) {
  return getDataType(str) === 'Array'
}



export const getDataType: GetDataType = function (str) {
  return Object.prototype.toString.call(str).slice(8, -1)
}