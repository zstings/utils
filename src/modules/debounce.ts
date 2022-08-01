import { Debounce } from '@types'
import { isNumber, isBoolean } from '@/common'

/**
 * 防抖
 * @param func 函数
 * @param option 可选的对象
 * @param option.awit 时间 默认 500毫秒
 * @param option.immediate 是否立即执行，默认 false
 * @throws awit不是number awit存在但不是数字时触发
 * @throws immediate不是boolean immediate存在但不是boolean时触发
 * @example
 * ```ts
 * debounce(function () { ... })
 * ```
 * @example
 * 自定义时间
 * ```ts
 * debounce(function () { ... }, {awit: 300})
 * ```
 * @example
 * 立即执行
 * ```ts
 * debounce(function () { ... }, {immediate: true})
 * ```
 * @example
 * 在vue2中使用
 * ```ts
 * getlist: debounce(function () { //... })
 * ```
 */
export const debounce: Debounce = function (func, option = { awit: 500, immediate: false }) {
  let timeout = 0
  const { awit = 500, immediate = false } = option
  if (awit && !isNumber(awit)) throw 'awit不是number'
  if (immediate && !isBoolean(immediate)) throw 'immediate不是boolean'
  return function (this: unknown, ...args: any) {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      func.apply(this, args)
    }, awit)
  }
}
