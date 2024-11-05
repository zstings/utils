import isString from '@/verify/isString'
import isURL from '@/url/isURL'

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
export default function setUrlQuery(url: string, type: 'pushState' | 'replaceState' = 'pushState'): void {
  // 检查url值是否有效
  if (!isURL(url)) throw 'url 参数错误，不是有效的'
  if (!isString(type) || !['pushState', 'replaceState'].includes(type))
    throw `type 参数错误， 应该传入一个字符串 'pushState' | 'replaceState'`
  if (history.state && history.state.current) {
    const pathname = new URL(url).pathname
    history.state.current = pathname
  }
  window.history[type](history.state, '', url)
}
