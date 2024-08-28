import isNullOrUndefined from "@/verify/isNullOrUndefined";
import isObject from "@/verify/isObject";
import isURL from "@/url/isURL";
import isString from "@/verify/isString";
import qsParse from "@/url/qsParse";

/**
 * 获取url上的参数
 * @param option 可选的对象
 * @param option.url url地址，默认window.location.href， 非必填
 * @param option.type 类型，默认all， 非必填, 可选值：all, query, hash
 * @throws 参数错误， 应该传入一个对象 option不是对象时触发
 * @throws url参数错误，不是有效的  url不是有效链接时触发
 * @throws type 参数错误， 应该传入一个字符串 'search' | 'hash' | 'all'
 * @return 由参数组成的对象
 * @category URL
 * @example
 * 支持search和hash中取值，如果search和hash中有相同的参数，则默认使用search。
 * 不传值时，默认从window.location.href中取值
 * ```ts
 * getUrlQuery() => {a：'1',b:'2'}
 * // => window.location.href: https://a.b.com/?a=1&b=2
 * ```
 * @example
 * 从参数的url上取值
 * ```ts
 * getUrlQuery({url: 'http://a.b.com/?a=1&b=2#/index/?c=3&b=4'}) // => {a: '1', b: '2', c: '3'}
 * ```
 * @example
 * 从参数的url上取值,只在search中取值
 * ```ts
 * getUrlQuery({url: 'http://a.b.com/?a=1&b=2#/index/?c=3&b=4', type: 'search'}) // => {id: '1', b: '2'}
 * ```
 * @example
 * 从参数的url上取值,只在hash中取值
 * ```ts
 * getUrlQuery({url: 'http://a.b.com/?a=1&b=2#/index/?c=3&b=4', type: 'hash'}) // => {c: '3', b: '4'}
 * ```
 */
export default function getUrlQuery(
  option: { url?: string; type?: 'search' | 'hash' | 'all' } = {
    url: window.location.href,
    type: 'all'
  }
): Record<string, any> {
  // 检查参数类型
  if (isNullOrUndefined(option) || !isObject(option)) throw `参数错误， 应该传入一个对象`
  // 检查参数属性是否存在，不存在设置默认值
  if (!option.url) option.url = window.location.href
  if (!option.type) option.type = 'all'
  // 检查参数属性值类型
  if (!isURL(option.url)) throw `url 参数错误，不是有效的`
  if (!isString(option.type) || !['search', 'hash', 'all'].includes(option.type))
    throw `type 参数错误， 应该传入一个字符串 'search' | 'hash' | 'all'`
  // 获取参数对象
  const { url, type } = option
  const urlStr: URL = new URL(url)
  const urlSearch = urlStr.search.substring(1)
  const urlHash = urlStr.hash.indexOf('?') >= 0 ? urlStr.hash.slice(urlStr.hash.indexOf('?') + 1) : ''
  const searchArr = type == 'hash' ? {} : qsParse(urlSearch)
  const hashArr = type == 'search' ? {} : qsParse(urlHash)
  return Object.assign({}, searchArr, hashArr, searchArr)
}