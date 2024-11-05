// 公共
import typeOf from '@/common/typeOf'
import version from '@/common/version'
export { typeOf, version }
// 验证相关
import isArray from '@/verify/isArray'
import isPhone from '@/verify/isPhone'
import isLocation from '@/verify/isLocation'
import isObject from '@/verify/isObject'
import isDate from '@/verify/isDate'
import isFunction from '@/verify/isFunction'
import isMap from '@/verify/isMap'
import isPromise from '@/verify/isPromise'
import isSet from '@/verify/isSet'
import isString from '@/verify/isString'
import isSymbol from '@/verify/isSymbol'
import isNumber from '@/verify/isNumber'
import isBoolean from '@/verify/isBoolean'
import isEmptyObject from '@/verify/isEmptyObject'
import isIncludeChinese from '@/verify/isIncludeChinese'
import isDom from '@/verify/isDom'
import isArrObj from '@/verify/isArrObj'
import isNullOrUndefined from '@/verify/isNullOrUndefined'
import isEqual from '@/verify/isEqual'
import isBasicType from '@/verify/isBasicType'
import isJsonString from '@/verify/isJsonString'
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
  isNullOrUndefined,
  isEqual,
  isBasicType,
  isJsonString
}

// 设备相关
import detectDeviceType from '@/device/detectDeviceType'
import isAndroid from '@/device/isAndroid'
import isDesktop from '@/device/isDesktop'
import isIOS from '@/device/isIOS'
import isMobile from '@/device/isMobile'
import isQQ from '@/device/isQQ'
import isWeixin from '@/device/isWeixin'
import isWeixinMini from '@/device/isWeixinMini'
import isWin from '@/device/isWin'
export { detectDeviceType, isAndroid, isDesktop, isIOS, isMobile, isQQ, isWeixin, isWeixinMini, isWin }

// 数字相关
import padInt from '@/number/padInt'
import toNumber from '@/number/toNumber'
import toFixed from '@/number/toFixed'
import isInt from '@/verify/isInt'
export { padInt, toNumber, toFixed, isInt }

// 时间相关
import days from '@/date/days'
import timeStamp from '@/date/timeStamp'
import formats from '@/date/formats'
import getMonthDays from '@/date/getMonthDays'
import howLongAgo from '@/date/howLongAgo'
import getDataSection from '@/date/getDataSection'
export { days, timeStamp, formats, getMonthDays, howLongAgo, getDataSection }

// 函数相关
import debounce from '@/function/debounce'
import throttle from '@/function/throttle'
import once from '@/function/once'
export { debounce, throttle, once }

// 字符串相关
import upperFirst from '@/string/upperFirst'
import byteSize from '@/string/byteSize'
import removeHTML from '@/string/removeHTML'
import mask from '@/string/mask'
export { upperFirst, byteSize, removeHTML, mask }

// 数组相关
import chunk from '@/array/chunk'
import compact from '@/array/compact'
import fromPairs from '@/array/fromPairs'
import unique from '@/array/unique'
export { chunk, compact, fromPairs, unique }

// 对象相关
import createData from '@/object/createData'
import omit from '@/object/omit'
import assign from '@/object/assign'
import assignMin from '@/object/assignMin'
import arrObjSum from '@/object/arrObjSum'
import pick from '@/object/pick'
import resetObjectValues from '@/object/resetObjectValues'
import hasOwn from '@/object/hasOwn'
export { createData, omit, assign, assignMin, arrObjSum, pick, resetObjectValues, hasOwn }

// url相关
import getUrlParam from '@/url/getUrlParam'
import getUrlQuery from '@/url/getUrlQuery'
import qsParse from '@/url/qsParse'
import qsStringify from '@/url/qsStringify'
import isURL from '@/url/isURL'
import setUrlQuery from '@/url/setUrlQuery'
import reviseUrlQuery from '@/url/reviseUrlQuery'
export { getUrlParam, getUrlQuery, qsParse, qsStringify, isURL, setUrlQuery, reviseUrlQuery }

// 工具相关
import downloadFile from '@/util/downloadFile'
import gbkToUtf8 from '@/util/gbkToUtf8'
import getUUID from '@/util/getUUID'
import scrollTo from '@/util/scrollTo'
import phoneEncrypt from '@/util/phoneEncrypt'
import random from '@/util/random'
import deepClone from '@/util/deepClone'
import copy from '@/util/copy'
import base64ToBlob from '@/util/base64ToBlob'
export { downloadFile, gbkToUtf8, getUUID, scrollTo, phoneEncrypt, random, deepClone, copy, base64ToBlob }

// 颜色相关
import randomHex from '@/color/randomHex'
import randomRgba from '@/color/randomRgba'
import hexToRgb from '@/color/hexToRgb'
import rgbToHex from '@/color/rgbToHex'
import extendHex from '@/color/extendHex'
import shrinkHex from '@/color/shrinkHex'
import isHex from '@/color/isHex'
import isRgba from '@/color/isRgba'
export { randomHex, randomRgba, hexToRgb, rgbToHex, extendHex, shrinkHex, isHex, isRgba }

// dom相关
import launchFullscreen from '@/dom/launchFullscreen'
import exitFullscreen from '@/dom/exitFullscreen'
export { launchFullscreen, exitFullscreen }
