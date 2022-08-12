// import { version } from '../package.json'
// export { version };

// export { default as returnstr } from "./returnStr";
export {
  getDataType,
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
  isDom
} from './common'

export { detectDeviceType, isAndroid, isDesktop, isIOS, isMobile } from './device'

export {
  phoneEncrypt,
  getUrlParam,
  downloadFile,
  getUUID,
  gbkToUtf8,
  padInt,
  scrollTo,
  getFormatDateTime,
  getTimeStamp,
  debounce,
  upperFirst,
  chunk,
  compact,
  fromPairs,
  unique,
  throttle,
  getRandom,
  toNumber,
  toFixed,
  getMonthNum,
  deepClone
} from './modules'

// export {
//   phoneEncry
// } from './modules'
