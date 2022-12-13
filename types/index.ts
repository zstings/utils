export type ObjectData = { [key: string]: any }

export type ArrayData = any[]

export type DeepCopy = (origin: ObjectData | ArrayData) => ObjectData | ArrayData

export type PhoneEncry = (value: string | number, value2: string, value3?: string) => string

export type PadInt = (value: string | number, len?: number) => string

export declare type Times = number | string | Date | (string | number)[]

export type Debounce = (
  func: (...params: any[]) => any,
  awit?: number,
  option?: { leading?: boolean; trailing?: boolean }
) => any

export type UpperFirst = (str: any) => string

export type Omit = (object: Record<string, any>, paths: string[]) => Record<string, any>

export type Assign = (target: Record<string, any>, ...sources: Record<string, any>[]) => Record<string, any>

// export type GetUrlQuery = (url?: Location | URL) => Record<string, any>
