import { GbkToUtf8 } from '@types'


/**
 * gbk 转 utf-8
 * @param value ArrayBuffer
 * @return 可以被JSON.parse转化时返回js对象，否则返回字符串
 */
 export const gbkToUtf8: GbkToUtf8 = (value: ArrayBuffer) => {
  try {
    return JSON.parse(new TextDecoder('utf-8').decode(value))
  } catch(err) {
    return new TextDecoder('utf-8').decode(value)
  }
}