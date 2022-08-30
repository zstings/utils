## getMonthNum :tada: :100: 
获取指定月的天数
#### 参数 
- **year?** `number` 年份, 默认当前年
 
- **month?** `number` 月份, 默认当前月
 
#### td.ts
::: info
`getMonthNum(year?: number, month?: number): number`
:::
#### 返回 
- `number` 
::: tip
天数
:::
#### 异常 
::: danger
Invalid Date 传入值无法转为Date时触发
:::
#### 实例 
获取当前月份的天数


```ts
getMonthNum() // => 31
```
获取指定月份的天数


```ts
getMonthNum(2022, 1) // => 31
```
