import isBoolean from '@/verify/isBoolean'
import isNumber from '@/verify/isNumber'
import isFunction from '@/verify/isFunction'

/**
 * 防抖
 * @param func 函数
 * @param awit 延迟时间 默认 500毫秒
 * @param option 可选的对象
 * @param option.leading 指定在超时前调用, 函数触发时立即执行一次。默认 false
 * @param option.trailing 指定在超时后调用, 函数延迟时间达到后执行。默认 true
 * @throws awit不是number awit存在但不是数字时触发
 * @throws leading不是boolean leading存在但不是boolean时触发
 * @throws trailing不是boolean trailing存在但不是boolean时触发
 * @category 函数Function
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
 * 指定在超时前调用, 函数触发时立即执行一次。
 * 函数运行时机：立即执行，验证延迟时间，如果延迟时间内没有在触发函数，下次触发不变。如果在延迟时间内再次触发了函数，函数会在延迟时间后在运行一次。
 * ```ts
 * debounce(function () { ... }, 500, {leading: true})
 * ```
 * @example
 * 指定在超时后调用, 函数延迟时间达到后执行。
 * ```ts
 * debounce(function () { ... }, 500, {trailing: true})
 * ```
 * @example
 * 在vue2中使用
 * ```ts
 * getlist: debounce(function () { ... })
 * ```
 */
export default function debounce(
  func: (...params: any[]) => any,
  awit = 500,
  option: { leading?: boolean; trailing?: boolean } = { leading: false, trailing: true }
): any {
  const { leading = false, trailing = true } = option
  let timeout = 0
  let _leading = leading
  if (!isFunction(func)) throw 'func不是function'
  if (awit && !isNumber(awit)) throw 'awit不是number'
  if (!isBoolean(leading)) throw 'leading不是boolean'
  if (!isBoolean(trailing)) throw 'trailing不是boolean'
  return function (this: unknown, ...args: any[]) {
    clearTimeout(timeout)
    if (_leading && leading) {
      _leading && func.apply(this, args)
      _leading = false
      timeout = setTimeout(() => {
        _leading = true
      }, awit)
      return
    }
    timeout = setTimeout(() => {
      _leading = true
      if (trailing) func.apply(this, args)
    }, awit)
  }
}
