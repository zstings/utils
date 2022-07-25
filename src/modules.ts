import  * as TPS from '../types'
import { isPhone, isLocation } from './common'


/**
 * 对手机号进行加密处理
 * @param value 手机号：支持字符串或者数字
 * @return 返回加密后的字符串
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