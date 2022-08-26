## getDataSection :tada: :100: 
获取时间区间
#### 参数 
- day `number = 1` 间隔天数，默认1，表示今天
 
- option `{ start: number } = ...` 选项
 
	- start `number` 起始时间，支持Date|Number|String， 默认今天
 
#### td.ts
::: info
`getDataSection(day?: number, option?: { start: number }): string[]`
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
option.start 必须是Date|Number|String
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
