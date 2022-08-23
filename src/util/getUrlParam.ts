import { GetUrlParam, GetUrlQuery } from '@types'
import { isLocation, isString } from '@/verify'

/**
 * 获取url上的参数
 * @param name 参数名，必填
 * @param url url地址，为空时是window.location， 非必填
 * @returns 符合的值或者null
 * @category 工具Util
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

/**
 * 获取url上的参数
 * @returns 由参数组成的对象
 * @category 工具Util
 * @example
 * 支持search和hash中取值，如果search和hash中有相同的参数，则默认使用search。
 * 不传值时，默认从window.location中取值
 * ```ts
 * getUrlQuery() => {id：'a',b:'33'}
 * // => window.location: https://a.b.com/?id=a&b=33
 * ```
 * @example
 * 从第二个参数的url上取值
 * ```ts
 * getUrlQuery('https://a.b.com/?id=b') // => {id: 'b'}
 * ```
 */
export const getUrlQuery: GetUrlQuery = (url = window.location) => {
  if (isString(url)) url = new URL(url as unknown as string)
  const urlSearch = url.search.split('?')[1]
  const searchArr = urlSearch.split('&')
  const searcObj: Record<string, any> = {}
  searchArr.forEach(item => {
    const resultItem = item.split('=')
    searcObj[resultItem[0]] = resultItem[1]
  })
  return searcObj
}
