import { isJsonString, isNullOrUndefined, isObject, isString, isBasicType } from '@/verify'

/**
 * 是否是url
 * @param url 需要验证的内容，类型：string
 * @returns Boolean
 * @throws 参数必须是string 参数不是string时触发
 * @category URL
 * @example
 * ```ts
 * isURL('https://a.b.c')
 * // => true
 * ```
 * @example
 * ```ts
 * isURL('123')
 * // => false
 * ```
 */
export function isURL(url: string): boolean {
  if (!isString(url)) throw '参数必须是string'
  try {
    const _url = new URL(url)
    return !!_url.href
  } catch (err) {
    return false
  }
}

/**
 * 获取url上的参数
 * @param name 参数名，必填
 * @param url url地址，为空时是window.location.href， 非必填
 * @throws url 参数错误，不是有效的
 * @returns 符合的值或者null
 * @category URL
 * @example
 * 支持search和hash中取值，如果search和hash中有相同的参数，则默认使用search。
 * 不传值时，默认从window.location.href中取值
 * ```ts
 * getUrlParam('id') => 'a' // window.location.href: https://a.b.com/?id=a
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
export function getUrlParam(name: string, url: string = window.location.href): string | null {
  // 检查url值是否有效
  if (!isURL(url)) throw 'url 参数错误，不是有效的'
  const urlPar = new URL(url)
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
 * @param option 可选的对象
 * @param option.url url地址，默认window.location.href， 非必填
 * @param option.type 类型，默认all， 非必填, 可选值：all, query, hash
 * @throws 参数错误， 应该传入一个对象 option不是对象时触发
 * @throws url参数错误，不是有效的  url不是有效链接时触发
 * @throws type 参数错误， 应该传入一个字符串 'search' | 'hash' | 'all'
 * @returns 由参数组成的对象
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
export function getUrlQuery(
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
  // 缓存Object.keys(query)的结果，避免重复调用
  const keys = Object.keys(query)
  // 使用数组和join方法代替URLSearchParams对象，减少内存占用和转换开销
  const queryArr = []
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i]
    const value = query[key]
    // 使用三元运算符代替if语句，简化代码逻辑
    const encodedValue = isBasicType(value)
      ? value == null
        ? ''
        : encodeURIComponent(value)
      : encodeURIComponent(JSON.stringify(value))
    queryArr.push(key + '=' + encodedValue)
  }
  // 根据decode参数决定是否解码
  return decode ? decodeURIComponent(queryArr.join('&')) : queryArr.join('&')
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
export function qsParse(query = '', decode = true): { [k: string]: any } {
  const queryObj = JSON.parse(JSON.stringify(Object.fromEntries(new URLSearchParams(query) as any)))
  if (decode) {
    Object.keys(queryObj).forEach(key => {
      if (isJsonString(queryObj[key]) && (queryObj[key].startsWith('{') || queryObj[key].startsWith('[')))
        queryObj[key] = JSON.parse(queryObj[key])
    })
  }
  return queryObj
}

/**
 * 修改url上的参数
 * @param option.search 对象 用于修改search部分的数据， 非必填
 * @param option.hash 对象 用于修改hash部分的数据， 非必填
 * @param url url地址，默认window.location.href， 非必填
 * @throws 参数错误， 应该传入一个对象 option不是对象时触发
 * @throws search 参数错误， 应该传入一个对象 option不是对象时触发
 * @throws hash 参数错误， 应该传入一个对象 option不是对象时触发
 * @throws url 参数错误，不是有效的
 * @returns 修改后的url地址
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
export function reviseUrlQuery(
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
    hash = hashStr ? (hash.split('?')[0] || '#') + '?' + hashStr : ''
  }
  return origin + pathname + search + hash
}

/**
 * 设置浏览器地址栏url
 * @param option 可选的对象
 * @param url url地址，默认window.location， 非必填
 * @param type 类型，默认pushState， 非必填, 可选值：pushState, replaceState
 * @throws url 参数错误，不是有效的
 * @throws type 参数错误， 应该传入一个字符串 'pushState' | 'replaceState'
 * @category URL
 * @example
 * 修改了浏览器页面的地址栏的url显示，默认会添加新的历史记录
 * ```ts
 * setUrlQuery('https://a.b.com/?a=1&b=2')
 * ```
 * @example
 * 修改了浏览器页面的地址栏的url显示，当前的页面的历史记录替换掉，不会添加新的历史记录
 * ```ts
 * setUrlQuery('https://a.b.com/?a=1&b=2', 'replaceState')
 * ```
 */
export function setUrlQuery(url: string, type: 'pushState' | 'replaceState' = 'pushState'): void {
  // 检查url值是否有效
  if (!isURL(url)) throw 'url 参数错误，不是有效的'
  if (!isString(type) || !['pushState', 'replaceState'].includes(type))
    throw `type 参数错误， 应该传入一个字符串 'pushState' | 'replaceState'`
  window.history[type]('', '', url)
}
