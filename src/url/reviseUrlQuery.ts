import isNullOrUndefined from "@/verify/isNullOrUndefined";
import isObject from "@/verify/isObject";
import getUrlQuery from "@/url/getUrlQuery";
import isURL from "@/url/isURL";
import qsStringify from "@/url/qsStringify";

/**
 * 修改url上的参数
 * @param option.search 对象 用于修改search部分的数据， 非必填
 * @param option.hash 对象 用于修改hash部分的数据， 非必填
 * @param url url地址，默认window.location.href， 非必填
 * @throws 参数错误， 应该传入一个对象 option不是对象时触发
 * @throws search 参数错误， 应该传入一个对象 option不是对象时触发
 * @throws hash 参数错误， 应该传入一个对象 option不是对象时触发
 * @throws url 参数错误，不是有效的
 * @return 修改后的url地址
 * @category URL
 * @example
 * 修改search中的值
 * ```ts
 * reviseUrlQuery({search: {a: '2', b: '3'}}, 'http://a.b.com/?a=1&b=2#/index/?c=3&b=4')
 * // => 'http://a.b.com/?a=2&b=3#/index/?c=3&b=4'
 * ```
 * @example
 * 修改hash中的值
 * ```ts
 * reviseUrlQuery({hash: {c: '2', b: '3'}}, 'http://a.b.com/?a=1&b=2#/index/?c=3&b=4')
 * // => 'http://a.b.com/?a=1&b=2#/index/?c=2&b=3'
 * ```
 * @example
 * 修改search、hash中的值
 * ```ts
 * reviseUrlQuery({search: {a: '5', b: '6'}, hash: {c: '7', b: '8'}}, 'http://a.b.com/?a=1&b=2#/index/?c=3&b=4')
 * // => 'http://a.b.com/?a=5&b=6#/index/?c=7&b=8'
 * ```
 */
export default function reviseUrlQuery(
  option: { search?: Record<string, any>; hash?: Record<string, any> },
  url: string = window.location.href
): string {
  // 检查参数类型
  if (isNullOrUndefined(option) || !isObject(option)) throw `参数错误， 应该传入一个对象`
  // 检查参数属性存在但不是对象
  if (option.search && !isObject(option.search)) throw `search 参数错误， 应该传入一个对象`
  if (option.hash && !isObject(option.hash)) throw `hash 参数错误， 应该传入一个对象`
  // 检查url值是否有效
  if (!isURL(url)) throw 'url 参数错误，不是有效的'
  // 修改参数的实现逻辑
  const { origin, pathname } = new URL(url)
  let { search, hash } = new URL(url)
  if (option.search) {
    const arr = getUrlQuery({ url, type: 'search' })
    const searchStr = qsStringify(Object.assign({}, arr, option.search))
    search = searchStr ? '?' + searchStr : ''
  }
  if (option.hash) {
    const arr = getUrlQuery({ url, type: 'hash' })
    const hashStr = qsStringify(Object.assign({}, arr, option.hash))
    hash = hashStr ? hash.split('?')[0] + '?' + hashStr : hash.split('?')[0]
  }
  return origin + pathname + search + hash
}