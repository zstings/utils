export declare type IsPhone = (str: string | number) => boolean;
export declare type PhoneEncrypt = (alue: string | number) => string;
export declare type GetDataType = (value: any) => string;
export declare type IsArray = (value: any) => boolean;
export declare type GetUrlParam = (name: string, url: string | Location) => string | null;
export declare type DownloadFile = (name: string, blob: Blob) => void;
