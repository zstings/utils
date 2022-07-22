import { PhoneEncrypt } from '../types'
import { isPhone } from './common'


export const phoneEncrypt: PhoneEncrypt = (value) => {
  /**
   * 手机号脱敏
   * @param 支持字符串或者数字
   * @typeParam 类型参数
   * @return(s) 返回字符串
   */
  if (!isPhone(value)) throw '手机号格式不正确' 
  if (typeof value === 'number') value = value.toString()
  return value.replace(value.substring(3, 7), '****')
}