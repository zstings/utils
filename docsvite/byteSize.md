## byteSize :tada: :100: 
获取字符串的字节长度
#### 参数 
- **str** `any` 传入参数, 如果参数不是字符串，会先调用toString方法
 
#### td.ts
::: info
`byteSize(str): number`
:::
#### 返回 
- `number` 
::: tip
字符串
:::
#### 实例 
```ts
byteSize('fred') // 4
```
```ts
byteSize('你好!') // 7
```
生僻汉字


```ts
byteSize('𠮷') // 4
```
参数不是字符串，会先调用toString方法


```ts
byteSize(true) // '4'
```
