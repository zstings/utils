## getDataType :tada: :100: 
获取数据类型
#### 参数 
- value `any` 任意值
 
#### td.ts
::: info
`getDataType(value: any): string`
:::
#### 返回 
- `string` 
::: tip
返回value的类型
:::
#### 实例 
数字


```ts
getDataType(12) => 'Number'
```
字符串


```ts
getDataType('12') => 'String'
```
布尔


```ts
getDataType(true) => 'Boolean'
```
函数


```ts
getDataType(functuin(){}) => 'Function'
```
对象


```ts
getDataType({}) => 'Object'
```
数组


```ts
getDataType([]) => 'Array'
```
