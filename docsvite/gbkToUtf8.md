## gbkToUtf8 :tada: :100: 
gbk 转 utf-8
#### 参数 
- value `ArrayBuffer` ArrayBuffer
 
#### td.ts
::: info
`gbkToUtf8(value: ArrayBuffer): string | object`
:::
#### 返回 
- `string | object` 
::: tip
可以被JSON.parse转化时返回js对象，否则返回字符串
:::
#### 实例 
```ts
const res = await fetch('https://a.b.com/').then(res => res.arrayBuffer())
gbkToUtf8(res)
```
