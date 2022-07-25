// const version: string = require("../package.json").version

// import { version } from '../package.json'
// export { version };


// export { default as returnstr } from "./returnStr";
export { 
  isArray, 
  isPhone, 
  getDataType,
  isLocation,
  isObject
} from "./common";


export { 
  phoneEncrypt,
  getUrlParam,
  downloadFile
} from "./modules";