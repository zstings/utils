import { PhoneEncrypt, GetUrlParam, DownloadFile } from '../types'
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


export const getUrlParam: GetUrlParam = (name, url) => {
  const urlPar = url ? new URL(url as string) : window.location;
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


export const downloadFile: DownloadFile = (name, blob) => {
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