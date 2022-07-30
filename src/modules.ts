import  * as TPS from '../types'
import { isPhone, isLocation, getDataType } from './common'


/**
 * 对手机号进行加密处理
 * @param value 手机号：支持字符串或者数字
 * @return 字符串 返回经过加密后的字符串
 * @throws 异常 手机号格式不正确
 * @example
 * ```ts
 * phoneEncrypt(13300001111) => '133****1111'
 * phoneEncrypt('13300001111') => '133****1111'
 * phoneEncrypt('1330000') => throw '手机号格式不正确'
 * ```
 */
export const phoneEncrypt: TPS.PhoneEncrypt = (value) => {
  if (!isPhone(value)) throw '手机号格式不正确' 
  if (typeof value === 'number') value = value.toString()
  return value.replace(value.substring(3, 7), '****')
}



/**
 * 获取url上的参数
 * @param name 参数名，必填
 * @param url url地址，为空时是window.location， 非必填
 * @example
 * 支持search和hash中取值，如果search和hash中有相同的参数，则默认使用search。
 * ```ts
 * getUrlParam('id') => 'a' // window.location: https://a.b.com/?id=a
 * getUrlParam('id', 'https://a.b.com/?id=b') => 'b'
 * getUrlParam('id', 'http://a.b.com/?id=a#/index/?id=b') => 'a'
 * ```
 */
export const getUrlParam: TPS.GetUrlParam = (name, url = window.location) => {
  const urlPar = isLocation(url) ? window.location : new URL(url as string)
  // 构造一个含有目标参数的正则表达式对象
  const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
  // 匹配目标参数
  const r = urlPar.search.substring(1).match(reg);
  const h = urlPar.hash.split('?')[1]?.match(reg);
  // 返回参数
  if (r != null) return decodeURIComponent(r[2])
  if (h != null) return decodeURIComponent(h[2])
  return null
}



/**
 * 文件下载
 * @param name 文件名
 * @param blob 文件blob数据
 */
export const downloadFile: TPS.DownloadFile = (name, blob) => {
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
 * 获取uuid
 * @example
 * 符合 RFC4122 版本 4 的 UUID。
 * ```ts
 * getUUID() // '7ac8d9bc-0a0d-4f31-8134-896a485feed1'
 * ```
 */
export const getUUID: TPS.GetUUID = () => {
  const ysValue = String(1e7) + -1e3 + -4e3 + -8e3 + -1e11
  return ysValue.replace(/[018]/g, c =>
    (
      Number(c) ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (Number(c) / 4)))
    ).toString(16),
  )
}



/**
 * gbk 转 utf-8
 * @param value ArrayBuffer
 */
export const gbkToUtf8: TPS.GbkToUtf8 = (value: ArrayBuffer) => {
  try {
    return JSON.parse(new TextDecoder('utf-8').decode(value))
  } catch(err) {
    return new TextDecoder('utf-8').decode(value)
  }
}



/**
 * 数字补0
 * @param value 数字或者字符串的数字
 * @param len 补充的长度， 默认2
 * @return 返回字符串
 * @example
 * ```ts
 * padInt(1) => '01'
 * padInt(12) => '12'
 * padInt(12, 3) => '012'
 * ```
 */
export const padInt:TPS.PadInt = (value, len = 2) => {
  if (isNaN(Number(value))) throw '不是一个合法的数字'
  return Number(value).toString().padStart(len, '0')
}




/**
 * 滚动至···
 * @param option 可选的对象
 * @param option.rate 滚动的步长，默认 4
 * @param option.num 滚动的目标值，默认 0
 * @param option.direction 滚动的反向，默认 'top', 支持 'top' | 'left'
 * @param option.dom 滚动的目标元素，默认 document.scrollingElement
 * @param callback 滚动结束的回调函数
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
export const scrollTo: TPS.ScrollTo = (option = {}, callback?) => {
  let animat: number = 0
  const {rate = 4, num = 0, direction = 'top', dom = document.scrollingElement} = option
  const directions = {top: 'scrollTop', left: 'scrollLeft'}
  let scrollVal = (dom as Element)[directions[direction] as 'scrollTop']
  const animatRunFun = function() {
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
 * 获取指定格式的时间
 * @param value 时间对象或者时间戳
 * @param format 返回格式 默认 YYYY-MM-DD hh:mm:ss
 * @returns 指定格式的时间
 * @example
 * 获取当前的日期
 * ```ts
 * getFormatDateTime() // '2022-07-30 12:41:26'
 * ```
 * @example
 * 获取当前时间的年月
 * ```ts
 * getFormatDateTime(Date.now(), 'YYYY-MM') // '2022-07'
 * ```
 * @example
 * 获取具体日期的时间格式
 * ```ts
 * const date = new Date('2022/10/10 10:00:00')
 * getFormatDateTime(date, 'YYYY-MM-DD') // '2022-10-10'
 * ```
 */
 export const getFormatDateTime: TPS.GetFormatDateTime = (value = Date.now(), format = 'YYYY-MM-DD hh:mm:ss') => {
  if (!(getDataType(value) == 'Date' || getDataType(value) == 'Number')) throw 'value参数错误，需要Date | number, 但收到' + getDataType(value)
  const date = getDataType(value) == 'Number' ? new Date(value) : value as Date
	const year= padInt(date.getFullYear())
	const month = padInt(date.getMonth() + 1)
	const day = padInt(date.getDate())
	const hour = padInt(date.getHours())
	const minute = padInt(date.getMinutes())
	const second = padInt(date.getSeconds())
  return format.replace('YYYY', year).replace('MM', month).replace('DD', day).replace('hh', hour).replace('mm', minute).replace('ss', second)
}