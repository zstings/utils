export type IsPhone = (str: string | number) => boolean

export type PhoneEncrypt = (value: string | number) => string

export type GetDataType = (value: any) => string


export type GetUrlParam = (name: string, url?: string | Location) => string | null

export type DownloadFile = (name: string, blob: Blob) => void

export type ToIsTypes = (value: any) => boolean
