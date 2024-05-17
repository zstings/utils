import { isNumber, isPhone } from '@/verify'
import { mask } from '@/string'

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
export function scrollTo(
  option: { rate?: number; num?: number; direction?: 'top' | 'left'; dom?: HTMLElement } = {},
  callback?: () => void
): void {
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

/**
 * 均衡获取指定范围的随机整数
 * 返回一个min 和 max之间的随机整数。如果你没有参数，那么将返回0和1之间的整数。如果你只传递一个参数，那么将返回0和这个参数之间的整数。
 * @param min 范围最小整数
 * @param max 范围最大整数
 * @return 随机整数
 * @category 工具Util
 * @example
 * 均衡获取0或者1的数
 * ```ts
 * random()
 * ```
 * @example
 * 均衡获取0或者5的数
 * ```ts
 * random(5)
 * ```
 * @example
 * 均衡获取1或者10的数
 * ```ts
 * random(1, 10)
 * ```
 */
export function random(min = 0, max?: number): number {
  if (!isNumber(min)) throw `min 必须整数`
  if (max && !isNumber(max)) throw `max 必须整数`
  if (min == null) {
    min = 0
    max = max || 1
  } else if (max == null) {
    max = min
    min = 0
  }
  return Math.round(Math.random() * (max - min) + min)
}

/**
 * 获取uuid
 * @return uuid
 * @category 工具Util
 * @example
 * 符合 RFC4122 版本 4 的 UUID。
 * ```ts
 * getUUID() // '7ac8d9bc-0a0d-4f31-8134-896a485feed1'
 * ```
 */
export function getUUID(): string {
  const ysValue = String(1e7) + -1e3 + -4e3 + -8e3 + -1e11
  return ysValue.replace(/[018]/g, c =>
    (Number(c) ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (Number(c) / 4)))).toString(16)
  )
}

/**
 * gbk 转 utf-8
 * @param value ArrayBuffer
 * @return 可以被JSON.parse转化时返回js对象，否则返回字符串
 * @category 工具Util
 * @example
 * ```ts
 * const res = await fetch('https://a.b.com/').then(res => res.arrayBuffer())
 * gbkToUtf8(res)
 * ```
 */
export function gbkToUtf8(value: ArrayBuffer): object | string {
  try {
    return JSON.parse(new TextDecoder('utf-8').decode(value))
  } catch (err) {
    return new TextDecoder('utf-8').decode(value)
  }
}

/**
 * 对手机号进行加密处理
 * @param value 手机号：支持字符串或者数字
 * @return 字符串 返回经过加密后的字符串
 * @throws 异常 手机号格式不正确
 * @category 工具Util
 * @example
 * ```ts
 * phoneEncrypt(13300001111) => '133****1111'
 * ```
 * @example
 * ```ts
 * phoneEncrypt('13300001111') => '133****1111'
 * ```
 * @example
 * ```ts
 * phoneEncrypt('1330000') => throw '手机号格式不正确'
 * ```
 */
export function phoneEncrypt(value: string | number): string {
  if (!isPhone(value)) throw '手机号格式不正确'
  if (typeof value === 'number') value = value.toString()
  return mask(value, 3, 4)
}

/**
 * 文件下载
 * @param name 文件名
 * @param blob 文件blob数据
 * @category 工具Util
 * @example
 * ```ts
 * const res = await fetch('https://a.b.com/').then(res => res.blob())
 * downloadFile('a.jpg', res)
 * ```
 */
export function downloadFile(name: string, blob: Blob): void {
  const a = document.createElement('a')
  const url = window.URL.createObjectURL(blob)
  // 默认隐藏
  a.style.display = 'none'
  a.href = url
  a.download = name
  // 添加到 body 标签中
  document.body.appendChild(a)
  a.click()
  window.URL.revokeObjectURL(url)
  // 下载完成移除 a 标签
  a.remove()
}

/**
 * 深度复制
 * @param origin 对象或者数组
 * @return 深度复制后的对象或者数组
 * @category 工具Util
 * @example
 * ```ts
 * deepClone([1,23, [1]]) // => [1,23, [1]]
 * ```
 * @example
 * ```ts
 * deepClone({a: [1], b: () => {}}) // => {a: [1], b: () => {}}
 * ```
 */
export function deepClone<T extends Array<T> | any>(source: T): T {
  if (typeof source == 'object') {
    const cloneTarget: T = (Array.isArray(source) ? [] : {}) as T
    for (const key in source) {
      cloneTarget[key] = deepClone(source[key])
    }
    return cloneTarget
  } else {
    return source
  }
}

/*
export function deepClonet<T extends Array<T> | any>(source: T): T {
  if (!(isArray(source) || isObject(source))) return source
  const root: Record<string, never> = {}
  // 栈
  const loopList: { parent: Record<string, any>; key: any; data: T }[] = [
    {
      parent: root,
      key: undefined,
      data: source
    }
  ]
  while (loopList.length) {
    // 深度优先
    const node = loopList.pop() as { parent: Record<string, any>; key: any; data: T }
    const parent = node.parent
    const key = node.key
    const data = node.data

    // 初始化赋值目标，key 为 undefined 则拷贝到父元素，否则拷贝到子元素
    let res = parent
    if (typeof key !== 'undefined') {
      res = parent[key] = {} as Record<string, any>
    }

    for (const k in data) {
      if (Object.prototype.hasOwnProperty.call(data, k)) {
        if (typeof data[k] === 'object') {
          // 下一次循环
          loopList.push({
            parent: res,
            key: k,
            data: data[k] as unknown as T
          })
        } else {
          res[k] = data[k]
        }
      }
    }
  }
  return root as any
}

export function deepClonex<T>(x: T): T {
  if (!(isArray(x) || isObject(x))) return x
  const root: Record<string, never> = {}

  // 栈
  const loopList: { parent: Record<string, any>; key: any; data: T }[] = [
    {
      parent: root,
      key: undefined,
      data: x
    }
  ]

  while (loopList.length) {
    // 深度优先
    const node = loopList[0]
    const parent = node.parent
    const key = node.key
    const data = node.data

    // 初始化赋值目标，key 为 undefined 则拷贝到父元素，否则拷贝到子元素
    let res = parent
    if (typeof key !== 'undefined') {
      res = parent[key] = {} as Record<string, any>
    }

    for (const k in data) {
      if (Object.prototype.hasOwnProperty.call(data, k)) {
        if (typeof data[k] === 'object') {
          // 下一次循环
          loopList.push({
            parent: res,
            key: k,
            data: data[k] as unknown as T
          })
        } else {
          res[k] = data[k]
        }
      }
    }
  }

  return root as any
}*/

/**
 * 复制文本内容
 * 优先使用navigator.clipboard.writeText, 浏览器不支持使用时降级document.execCommand。
 * @param value 需要复制的字符串
 * @return Promise
 * @category 工具Util
 * @example
 * ```ts
 * await copy('hello')
 * ```
 */
export function copy(value: string) {
  return new Promise<void>((resolve, reject) => {
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(value)
        .then(() => resolve())
        .catch(() => {
          execCommandCopy(value, resolve, reject)
        })
    } else {
      execCommandCopy(value, resolve, reject)
    }
  })
  function execCommandCopy(
    code: string,
    resolve: (value: void | PromiseLike<void>) => void,
    reject: (reason?: any) => void
  ) {
    const textarea = document.createElement('textarea')
    document.body.appendChild(textarea)
    textarea.setAttribute('readonly', 'readonly')
    textarea.innerHTML = code
    textarea.select()
    textarea.setSelectionRange(0, textarea.innerHTML.length)
    const isc = document.execCommand('copy')
    textarea.remove()
    isc ? resolve() : reject('execCommand error')
  }
}

/**
 * base64转blob
 * @param base64 base64
 * @param type 文件类型
 * @return Blob
 * @category 工具Util
 * @example
 * ```ts
 * base64ToBlob()
 * ```
 */
export function base64ToBlob(base64: string, type?: string): Blob {
  // 'image/png'
  const base64Str = window.atob(base64.replace(/data:([\s\S]+);base64,/, ''))
  const base64Type = type || base64.match(/data:([\s\S]+);base64,/)?.[1] || 'text/plain'
  let n = base64Str.length
  const u8arr = new Uint8Array(n)
  while (n--) u8arr[n] = base64Str.charCodeAt(n)
  return new Blob([u8arr], { type: base64Type })
}
