import { PhoneR1 } from '../types'
export const phoneR1: PhoneR1 = (value) => {
  if (typeof value === 'number') value = value.toString()
  return value.replace(value.substring(3, 7), '****')
}