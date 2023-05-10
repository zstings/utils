## downloadFile :tada: :100: 
文件下载
#### 参数 
- **name** `string` 文件名
 
- **blob** `Blob` 文件blob数据
 
#### td.ts
::: info
`downloadFile(name, blob): void`
:::
#### 实例 
```ts
const res = await fetch('https://a.b.com/').then(res => res.blob())
downloadFile('a.jpg', res)
```
