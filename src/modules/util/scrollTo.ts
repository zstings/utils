import { ScrollTo } from '@types'

/**
 * 滚动至···
 * @param option 可选的对象
 * @param option.rate 滚动的步长，默认 4
 * @param option.num 滚动的目标值，默认 0
 * @param option.direction 滚动的方向，默认 'top', 支持 'top' | 'left'
 * @param option.dom 滚动的目标元素，默认 document.scrollingElement
 * @param callback 滚动结束的回调函数
 * @category 工具Util
 * @example
 * 回到顶部
 * ```ts
 * scrollTo()
 * ```
 * @example
 * 回到顶部后触发回调
 * ```ts
 * scrollTo({}, () => console.log('到了'))
 * ```
 * @example
 * 回到距离顶部的100像素的位置
 * ```ts
 * scrollTo({num: 100})
 * ```
 * @example
 * 滚动到元素box的最左端
 * ```ts
 * scrollTo({dom: document.querySelector('.box')})
 * ```
 * @example
 * 滚动到元素box距离左端100像素位置
 * ```ts
 * scrollTo({num: 100, dom: document.querySelector('.box')})
 * ```
 */
export const scrollTo: ScrollTo = (option = {}, callback?) => {
  let animat = 0
  const { rate = 4, num = 0, direction = 'top', dom = document.scrollingElement } = option
  const directions = { top: 'scrollTop', left: 'scrollLeft' }
  let scrollVal = (dom as Element)[directions[direction] as 'scrollTop']
  const animatRunFun = function () {
    scrollVal = scrollVal + (num - scrollVal) / rate
    // 临界判断，终止动画
    if (Math.abs(scrollVal - num) <= 1) {
      ;(dom as Element)[directions[direction] as 'scrollTop'] = num
      cancelAnimationFrame(animat)
      callback && callback()
      return
    }
    ;(dom as Element)[directions[direction] as 'scrollTop'] = scrollVal
    animat = requestAnimationFrame(animatRunFun)
  }
  animatRunFun()
}
