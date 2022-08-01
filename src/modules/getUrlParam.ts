import { GetUrlParam } from '@types'
import { isLocation } from '@/common'

/**
 * 获取url上的参数
 * @param name 参数名，必填
 * @param url url地址，为空时是window.location， 非必填
 * @returns 符合的值或者null
 * @example
 * 支持search和hash中取值，如果search和hash中有相同的参数，则默认使用search。
 * 不传值时，默认从window.location中取值
 * ```ts
 * getUrlParam('id') => 'a' // window.location: https://a.b.com/?id=a
 * ```
 * @example
 * 从第二个参数的url上取值
 * ```ts
 * getUrlParam('id', 'https://a.b.com/?id=b') => 'b'
 * ```
 * @example
 * 在第二个参数的url上优先从search中提取值。
 * ```ts
 * getUrlParam('id', 'http://a.b.com/?id=a#/index/?id=b') => 'a'
 * ```
 */
export const getUrlParam: GetUrlParam = (name, url = window.location) => {
  const urlPar = isLocation(url) ? window.location : new URL(url as string)
  // 构造一个含有目标参数的正则表达式对象
  const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
  // 匹配目标参数
  const r = urlPar.search.substring(1).match(reg)
  const h = urlPar.hash.split('?')[1]?.match(reg)
  // 返回参数
  if (r != null) return decodeURIComponent(r[2])
  if (h != null) return decodeURIComponent(h[2])
  return null
}
