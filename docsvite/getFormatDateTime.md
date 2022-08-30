## getFormatDateTime :tada: :100: 
获取指定格式的时间
#### 参数 
- **time** `string | number | Date | (string | number)[] = ...`  
- **format** `string = 'YYYY-MM-DD hh:mm:ss'` 返回格式 默认 YYYY-MM-DD hh:mm:ss
 
#### td.ts
::: info
`getFormatDateTime(time?: string | number | Date | (string | number)[], format?: string): string`
:::
#### 返回 
- `string` 
::: tip
指定格式的时间
:::
#### 实例 
获取当前的日期


```ts
getFormatDateTime() // '2022-07-30 12:41:26'
```
获取当前时间的年月


```ts
getFormatDateTime(Date.now(), 'YYYY-MM') // '2022-07'
```
获取具体日期的时间格式


```ts
const date = new Date('2022/10/10 10:00:00')
getFormatDateTime(date, 'YYYY-MM-DD') // '2022-10-10'
```
