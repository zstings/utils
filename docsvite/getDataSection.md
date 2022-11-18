## getDataSection :tada: :100: 
获取时间区间
#### 参数 
- **day** `number = 1` 间隔天数，默认1，表示今天
 
- **option** `{     format?: string;     start?: string | number | Date | (string | number)[];     timeStamp?: boolean; } = ...` 选项
 
	- **format?** `string` 时间格式， 默认YYYY-MM-DD
 
	- **start?** `string | number | Date | (string | number)[]` 起始时间， 默认今天
 
	- **timeStamp?** `boolean` 是否时间戳，默认false， 为true时，忽略 format
 
#### td.ts
::: info
`getDataSection(day?: number, option?: {     format?: string;     start?: string | number | Date | (string | number)[];     timeStamp?: boolean; }): (number | string)[]`
:::
#### 返回 
::: tip
数组 [起始时间, 结束时间]
:::
#### 异常 
::: danger
day 必须是数字
:::
::: danger
option 必须是对象
:::
::: danger
option.start 必须可以被转化为Date
:::
::: danger
option.format 必须是字符串
:::
::: danger
option.timeStamp 必须是布尔值
:::
#### 实例 
```ts
getDataSection() // => ['2022-08-23', '2022-08-23']
```
近7天时间区间


```ts
getDataSection(7) // => ['2022-08-17', '2022-08-23']
```
近30天时间区间


```ts
getDataSection(30) // => ['2022-07-28', '2022-08-26']
```
指定起始时间


```ts
getDataSection(7, {start: '2022-08-17'}) // => ['2022-08-11', '2022-08-17']
// => '3分钟前'
```
