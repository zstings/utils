## howLongAgo :tada: :100: 
获取距离指定时间之前
#### 参数 
- **endTime** `string | number | Date | (string | number)[] = ...` 目标时间戳或者格式化的时间字符
 
- **startTime** `string | number | Date | (string | number)[] = ...` 开始时间戳或者格式化的时间字符, 默认当前时间戳，非必填
 
#### td.ts
::: info
`howLongAgo(endTime?, startTime?): string`
:::
#### 返回 
- `string` 
::: tip
年|月|天|小时|分钟|秒 之前
:::
#### 异常 
::: danger
无法转换为时间 传入值无法转为Date时触发
:::
::: danger
只接受 number | string 传入值不是 number | string时触发
:::
#### 实例 
```ts
howLongAgo(1660644035390) // => '4分钟前'
```
```ts
howLongAgo(1660644418571) // => '5秒前'
```
支持格式化的时间字符


```ts
howLongAgo('2022-08-17 09: 12: 00') // => '10分钟前'
```
指定起始时间


```ts
howLongAgo('2022-08-17 09: 12: 00', '2022-08-17 09: 15: 00')
// => '3分钟前'
```
