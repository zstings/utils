import isJsonString from '@/verify/isJsonString'

/**
 * 参数序列化-字符转对象
 * @return 由参数组成的对象
 * @category URL
 * @example
 * ```ts
 * qsParse('a=1&b=2')
 * // => 'a=1&b=2'
 * ```
 * @example
 * ```ts
 * qsParse('a=1&b=2&c={'a':1}')
 * // => { a:1, b:2, c: { a :1 } }
 * ```
 * @example
 * ```ts
 * qsParse('a=1&b=2&c={'a':1}', false)
 * // => { a:1, b:2, c: '{ a: 1 }' }
 * ```
 */
export default function qsParse(query = '', decode = true): { [k: string]: any } {
  const queryObj = JSON.parse(JSON.stringify(Object.fromEntries(new URLSearchParams(query) as any)))
  if (decode) {
    Object.keys(queryObj).forEach(key => {
      if (isJsonString(queryObj[key]) && (queryObj[key].startsWith('{') || queryObj[key].startsWith('[')))
        queryObj[key] = JSON.parse(queryObj[key])
    })
  }
  return queryObj
}