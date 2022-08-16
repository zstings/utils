## howLongAgo :tada: :100: 
获取距离指定时间之前
#### 参数 
- endTime `string | number` 目标时间戳
 
- startTime? `string | number` 开始时间戳, 默认当前
 
#### td.ts
::: info
`howLongAgo(endTime: string | number, startTime?: string | number): string`
:::
#### 返回 
- `string` 
::: tip
年|月|天|小时|分钟|秒 之前
:::
#### 实例 
```ts
howLongAgo(1660644035390) // => '4分钟前'
```
获取指定月份的天数


```ts
howLongAgo(1660644418571) // => '5秒前'
```
