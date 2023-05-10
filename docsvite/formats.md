## formats :tada: :100: 
获取指定格式的时间
#### 参数 
- **time** `string | number | Date | (string | number)[] = ...`  
- **format** `string = 'YYYY-MM-DD hh:mm:ss'` 返回格式 默认 YYYY-MM-DD hh:mm:ss
 
#### td.ts
::: info
`formats(time?, format?): string`
:::
#### 返回 
- `string` 
::: tip
指定格式的时间
:::
#### 实例 
获取当前的日期


```ts
formats() // '2022-07-30 12:41:26'
```
获取当前时间的年月


```ts
formats(Date.now(), 'YYYY-MM') // '2022-07'
formats(Date.now(), 'YYYY年MM月') // '2022年07月'
```
获取具体日期的时间格式


```ts
const date = new Date('2022/10/10 10:00:00')
formats(date, 'YYYY-MM-DD') // '2022-10-10'
```
