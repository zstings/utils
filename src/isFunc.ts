import { IsPhone, IsArray } from '../types'
import { getDataType } from './common'

export const isPhone: IsPhone = function (str) {
  return /^1[3-9][\d]{9}$/.test(str.toString())
}

export const isArray: IsArray = function (str) {
  return getDataType(str) === 'Array'
}