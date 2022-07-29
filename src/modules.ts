import  * as TPS from '../types'
import { isPhone, isLocation } from './common'


/**
 * 对手机号进行加密处理
 * @param value 手机号：支持字符串或者数字
 * @return 字符串 返回经过加密后的字符串
 * @throws 异常 手机号格式不正确
 * @example
 * ```ts
 * phoneEncrypt(13300001111) => '133****1111'
 * phoneEncrypt('13300001111') => '133****1111'
 * phoneEncrypt('1330000') => throw '手机号格式不正确'
 * ```
 */
export const phoneEncrypt: TPS.PhoneEncrypt = (value) => {
  if (!isPhone(value)) throw '手机号格式不正确' 
  if (typeof value === 'number') value = value.toString()
  return value.replace(value.substring(3, 7), '****')
}



/**
 * 获取url上的参数
 * @param name 参数名，必填
 * @param url url地址，为空时是window.location， 非必填
 * @example
 * 支持search和hash中取值，如果search和hash中有相同的参数，则默认使用search。
 * ```ts
 * getUrlParam('id') => 'a' // window.location: https://a.b.com/?id=a
 * getUrlParam('id', 'https://a.b.com/?id=b') => 'b'
 * getUrlParam('id', 'http://a.b.com/?id=a#/index/?id=b') => 'a'
 * ```
 */
export const getUrlParam: TPS.GetUrlParam = (name, url = window.location) => {
  const urlPar = isLocation(url) ? window.location : new URL(url as string)
  // 构造一个含有目标参数的正则表达式对象
  const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
  // 匹配目标参数
  const r = urlPar.search.substring(1).match(reg);
  const h = urlPar.hash.split('?')[1]?.match(reg);
  // 返回参数
  if (r != null) return decodeURIComponent(r[2])
  if (h != null) return decodeURIComponent(h[2])
  return null
}



/**
 * 文件下载
 * @param name 文件名
 * @param blob 文件blob数据
 */
export const downloadFile: TPS.DownloadFile = (name, blob) => {
  const a = document.createElement('a')
  const url = window.URL.createObjectURL(blob)
  // 默认隐藏
  a.style.display = 'none'
  a.href = url
  a.download = name
  // 添加到 body 标签中
  document.body.appendChild(a)
  a.click()
  window.URL.revokeObjectURL(url)
  // 下载完成移除 a 标签
  a.remove()
}



/**
 * 获取uuid
 * @example
 * 符合 RFC4122 版本 4 的 UUID。
 * ```ts
 * getUUID() // '7ac8d9bc-0a0d-4f31-8134-896a485feed1'
 * ```
 */
export const getUUID: TPS.GetUUID = () => {
  const ysValue = String(1e7) + -1e3 + -4e3 + -8e3 + -1e11
  return ysValue.replace(/[018]/g, c =>
    (
      Number(c) ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (Number(c) / 4)))
    ).toString(16),
  )
}



/**
 * gbk 转 utf-8
 * @param value ArrayBuffer
 */
export const gbkToUtf8: TPS.GbkToUtf8 = (value: ArrayBuffer) => {
  try {
    return JSON.parse(new TextDecoder('utf-8').decode(value))
  } catch(err) {
    return new TextDecoder('utf-8').decode(value)
  }
}



/**
 * 数字补0
 * @param value 数字或者字符串的数字
 * @param len 补充的长度， 默认2
 * @return 返回字符串
 * @example
 * ```ts
 * padInt(1) => '01'
 * padInt(12) => '12'
 * padInt(12, 3) => '012'
 * ```
 */
 export const padInt:TPS.PadInt = (value, len = 2) => {
  if (isNaN(Number(value))) throw '不是一个合法的数字'
  return Number(value).toString().padStart(len, '0')
}