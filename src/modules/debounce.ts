import { Debounce } from '@types'
import { isNumber, isBoolean } from '@/common'

/**
 * 防抖
 * @param func 函数
 * @param awit 延迟时间 默认 500毫秒
 * @param option 可选的对象
 * @param option.leading 前置边缘执行，默认 false
 * @param option.trailing 后置边缘执行，默认 true
 * @throws awit不是number awit存在但不是数字时触发
 * @throws leading不是boolean leading存在但不是boolean时触发
 * @throws trailing不是boolean trailing存在但不是boolean时触发
 * @example
 * ```ts
 * debounce(function () { ... })
 * ```
 * @example
 * 自定义时间
 * ```ts
 * debounce(function () { ... }, 300)
 * ```
 * @example
 * 前置边缘执行,函数触发时立即执行一次
 * ```ts
 * debounce(function () { ... }, 500, {leading: true})
 * ```
 * @example
 * 后置边缘执行,函数延迟时间达到后执行
 * ```ts
 * debounce(function () { ... }, 500, {trailing: true})
 * ```
 * @example
 * 在vue2中使用
 * ```ts
 * getlist: debounce(function () { //... })
 * ```
 */
export const debounce: Debounce = function (func, awit = 500, option = { leading: false, trailing: true }) {
  const { leading = false, trailing = true } = option
  let _leading = leading
  let timeout = 0
  if (awit && !isNumber(awit)) throw 'awit不是number'
  if (!isBoolean(leading)) throw 'leading不是boolean'
  if (!isBoolean(trailing)) throw 'trailing不是boolean'
  return function (this: unknown, ...args: any[]) {
    clearTimeout(timeout)
    if (_leading) {
      func.apply(this, args)
      _leading = false
    }
    timeout = setTimeout(() => {
      _leading = leading
      trailing && func.apply(this, args)
    }, awit)
  }
}

// const a = debounce(function (a) {
//   return a
// }, 100)

// a(1)
