import { GetUrlParam } from '@types'
import { isJsonString, isLocation, isString } from '@/verify'

/**
 * 获取url上的参数
 * @param name 参数名，必填
 * @param url url地址，为空时是window.location， 非必填
 * @returns 符合的值或者null
 * @category URL
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
 * @category URL
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
export const getUrlQuery = (url: Location | URL = window.location) => {
  if (isString(url)) url = new URL(url as unknown as string)
  const urlSearch = url.search.substring(1)
  const urlHash = url.hash.indexOf('?') >= 0 ? url.hash.slice(url.hash.indexOf('?') + 1) : ''
  const searchArr = qsParse(urlSearch)
  const hashArr = qsParse(urlHash)
  return Object.assign(searchArr, hashArr)
  // const searchArr = urlSearch.split('&')
  // const searcObj: Record<string, any> = {}
  // searchArr.forEach(item => {
  //   const resultItem = item.split('=')
  //   searcObj[resultItem[0]] = resultItem[1]
  // })
}

/**
 * 参数序列化-对象转字符
 * @returns 由参数组成的对象
 * @category URL
 * @example
 * 支持search和hash中取值，如果search和hash中有相同的参数，则默认使用search。
 * 不传值时，默认从window.location中取值
 * ```ts
 * qsStringify({a: 1, b: 2})
 * // => 'a=1&b=2'
 * ```
 * @example
 * ```ts
 * qsStringify({a: 1, b: 2, c: {a: 1}})
 * // => 'a=1&b=2&c=%7B%22a%22%3A1%7D'
 * ```
 * @example
 * 解码后输出
 * ```ts
 * qsStringify({a: 1, b: 2, c: {a: 1}}, true)
 * // => 'a=1&b=2&c={"a":1}'
 * ```
 */
export function qsStringify(query: Record<string, any> = {}, decode = false): string {
  const queryObj = new URLSearchParams()
  Object.keys(query).forEach(item => queryObj.set(item, JSON.stringify(query[item])))
  return decode ? decodeURIComponent(queryObj.toString()) : queryObj.toString()
}

/**
 * 参数序列化-字符转对象
 * @returns 由参数组成的对象
 * @category URL
 * @example
 * 支持search和hash中取值，如果search和hash中有相同的参数，则默认使用search。
 * 不传值时，默认从window.location中取值
 * ```ts
 * qsParse('a=1&b=2')
 * // => 'a=1&b=2'
 * ```
 * @example
 * ```ts
 * qsParse('a=1&b=2&c={"a":1}')
 * // => { a:1, b:2, c: { a :1 } }
 * ```
 * @example
 * ```ts
 * qsParse('a=1&b=2&c={"a":1}', false)
 * // => { a:1, b:2, c: '{ a: 1 }' }
 * ```
 */
export function qsParse(query = '', decode = true) {
  const par = new URLSearchParams(query)
  const queryObj = Object.fromEntries(par as any)
  if (decode) {
    Object.keys(queryObj).forEach(key => {
      if (isJsonString(queryObj[key])) queryObj[key] = JSON.parse(queryObj[key])
    })
  }
  return queryObj
}
