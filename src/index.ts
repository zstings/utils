import { version } from '../package.json'
export { version };


// export { default as returnstr } from "./returnStr";
export { 
  isArray, 
  isPhone, 
  getDataType,
  isLocation,
  isObject,
  isDate,
  isFunction,
  isMap,
  isPromise,
  isSet,
  isString,
  isSymbol,
  isNumber
} from "./common";


export { 
  phoneEncrypt,
  getUrlParam,
  downloadFile
} from "./modules";