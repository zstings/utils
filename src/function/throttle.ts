import isBoolean from "@/verify/isBoolean"
import isNumber from "@/verify/isNumber"

/**
 * 节流
 * @param func 函数
 * @param wait 延迟时间 默认 500毫秒
 * @param immediate 是否立即执行
 * @throws wait不是number wait存在但不是数字时触发
 * @throws immediate不是boolean immediate存在但不是boolean时触发
 * @category 函数Function
 * @example
 * ```ts
 * throttle(function () { ... })
 * ```
 * @example
 * 自定义时间
 * ```ts
 * throttle(function () { ... }, 300)
 * ```
 * @example
 * 函数触发时立即执行一次
 * ```ts
 * throttle(function () { ... }, 500, immediate: true)
 * ```
 * @example
 * 在vue2中使用
 * ```ts
 * getlist: throttle(function () { ... })
 * ```
 */
export default function throttle(func: (...params: any[]) => any, wait = 500, immediate = false) {
  let timeout = 0
  let _immediate = immediate
  if (wait && !isNumber(wait)) throw 'wait不是number'
  if (!isBoolean(immediate)) throw 'immediate不是boolean'
  return function (this: unknown, ...args: any[]) {
    if (_immediate) {
      func.apply(this, args)
      _immediate = false
    }
    if (!timeout) {
      timeout = setTimeout(() => {
        func.apply(this, args)
        timeout = 0
      }, wait)
    }
  }
}
