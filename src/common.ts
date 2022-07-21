import { GetDataType } from '../types'

export const getDataType: GetDataType = function (str) {
  return Object.prototype.toString.call(str).slice(8, -1)
}