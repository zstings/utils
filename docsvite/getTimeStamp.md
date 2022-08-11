## getTimeStamp :tada: :100: 
获取时间戳
#### 参数 
- value? `string | Date` 时间对象或者格式化后的时间
 
- unit? `"ms" | "s"` 返回格式,支持毫秒或者秒,默认毫秒
 
#### td.ts
::: info
`getTimeStamp(value?: string | Date, unit?: "ms" | "s"): number`
:::
#### 返回 
- `number` 
::: tip
时间戳
:::
#### 异常 
::: danger
Invalid Date 传入值无法转为Date时触发
:::
::: danger
参数错误 传入值不是字符串或者Date时触发
:::
#### 实例 
获取当前的时间戳


```ts
getTimeStamp() // 1659334598129
```
获取当前的时间戳，单位秒(s)


```ts
getTimeStamp('', 's') // 1659334598129
```
获取 2022-10-12 的时间戳


```ts
getTimeStamp('2022-10-12') // 1665504000000
```
获取 2022-10-12 的时间戳, 以秒返回


```ts
getTimeStamp('2022-10-12', 's') // 1665504000
```
