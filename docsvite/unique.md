## unique :tada: :100: 
数组去重
#### 参数 
- **array** `any[]` 数组
 
- **key?** `string` 指定数组对象需要对比的key
 
#### td.ts
::: info
`unique(array, key?): any[]`
:::
#### 返回 
::: tip
新的数组
:::
#### 异常 
::: danger
array参数需要Array array参数错误时触发
:::
::: danger
key参数需要String key存在且不是字符串时触发
:::
#### 实例 
```ts
unique([1, 2, 1]) => [1, 2]
```
数组对象去重


```ts
unique([{id: 1, name: '1'}, {id: 2, name: '2'}, {id: 1, name: '1'}], 'id')
// => [{id: 1, name: '1'}, {id: 2, name: '2'}]
```
