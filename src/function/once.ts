/**
 * 只调用一次的函数
 * @param func 函数
 * @category 函数Function
 * @example
 * ```ts
 * once(function () { ... })
 * ```
 * @example
 * 在vue2中使用
 * ```ts
 * getlist: once(function () { ... })
 * ```
 */
export default function once(func: (...params: any[]) => any) {
  let called = false
  return function (this: unknown, ...args: any[]) {
    if (!called) {
      called = true
      func.apply(this, args)
    }
  }
}