// import { version } from '../package.json'
// export { version };
// export { default as returnstr } from "./returnStr";

// 公共
export { getDataType } from './common'
// 验证相关
export {
  isArray,
  isPhone,
  isLocation,
  isObject,
  isDate,
  isFunction,
  isMap,
  isPromise,
  isSet,
  isString,
  isSymbol,
  isNumber,
  isBoolean,
  isEmptyObject,
  isIncludeChinese,
  isDom,
  isArrObj,
  isNullOrUndefined
} from '@/verify'

// 设备相关
export { detectDeviceType, isAndroid, isDesktop, isIOS, isMobile, isQQ, isWeixin, isWeixinMini, isWin } from '@/device'

// 数字相关
export { padInt, toNumber, toFixed } from '@/number'

// 时间相关
export { days, getTimeStamp, getFormatDateTime, getMonthNum, howLongAgo, getDataSection } from '@/date'

// 函数相关
export { debounce, throttle } from '@/function'

// 字符串相关
export { upperFirst, byteSize, removeHTML } from '@/string'

// 数组相关
export { chunk, compact, fromPairs, unique } from '@/array'

// 对象相关
export { createData, omit, assign, assignMin, arrObjSum } from '@/object'

// url相关
export { getUrlParam, getUrlQuery, qsParse, qsStringify } from '@/url'

// 工具相关
export { downloadFile, gbkToUtf8, getUUID, scrollTo, phoneEncrypt, getRandom, deepClone } from '@/util'
