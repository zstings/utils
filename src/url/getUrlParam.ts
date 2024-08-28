import isURL from "@/url/isURL"

/**
 * 获取url上的参数
 * @param name 参数名，必填
 * @param url url地址，为空时是window.location.href， 非必填
 * @throws url 参数错误，不是有效的
 * @return 符合的值或者null
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
export default function getUrlParam(name: string, url: string = window.location.href): string | null {
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