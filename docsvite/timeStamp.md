## timeStamp :tada: :100: 
获取时间戳
#### 参数 
- **time** `string | number | Date | (string | number)[] = ...` 时间戳|格式化后的时间字符|时间对象
 
- **unit** `string = 'ms'` 返回格式,支持毫秒或者秒,默认毫秒
 
#### td.ts
::: info
`timeStamp(time?, unit?): number`
:::
#### 返回 
- `number` 
::: tip
时间戳
:::
#### 异常 
::: danger
Invalid Date 参数time无法转为Date时触发
:::
#### 实例 
获取当前的时间戳


```ts
timeStamp() // 1659334598129
```
获取当前的时间戳，单位秒(s)


```ts
timeStamp('', 's') // 1660700890
```
获取 2022-10-12 的时间戳


```ts
timeStamp('2022-10-12') // 1665504000000
```
获取 2022-10-12 的时间戳, 以秒返回


```ts
timeStamp('2022-10-12', 's') // 1665504000
```
