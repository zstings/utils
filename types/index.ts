export type IsPhone = (str: string | number) => boolean

export type PhoneEncrypt = (value: string | number) => string

export type PhoneEncry = (value: string | number, value2: string, value3?: string) => string

export type GetDataType = (value: any) => string

export type GetUrlParam = (name: string, url?: string | Location) => string | null

export type DownloadFile = (name: string, blob: Blob) => void

export type ToIsTypes = (value: any) => boolean

export type GetUUID = () => string

export type GbkToUtf8 = (value: ArrayBuffer) => object | string

export type PadInt = (value: string | number, len?: number) => string

export type ScrollTo = (
  option?: { rate?: number; num?: number; direction?: 'top' | 'left'; dom?: HTMLElement },
  callback?: () => void
) => void

export type GetFormatDateTime = (value?: Date | number, format?: string) => string

export type GetTimeStamp = (value?: Date | string, unit?: 'ms' | 's') => number

export type Debounce = (
  func: (...params: any[]) => any,
  awit?: number,
  option?: { leading?: boolean; trailing?: boolean }
) => any
