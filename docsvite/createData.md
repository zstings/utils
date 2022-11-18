## createData :tada: :100: 
指定深度或者广度的对象
#### 参数 
- **deep** `number = 1` 深度
 
- **breadth** `number = 0` 广度
 
#### td.ts
::: info
`createData(deep?: number, breadth?: number): {     data?: any;     [key: number]: any; }`
:::
#### 返回 
- `映射` 
::: tip
对象
:::
#### 实例 
```ts
createData(1) // => {data: {}}
```
```ts
createData(2, 2)
// =>
{
  "data": {
     "0": 0,
     "1": 1,
     "data": {
         "0": 0,
         "1": 1
     }
  }
}
```
