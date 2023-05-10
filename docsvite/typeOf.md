## typeOf :tada: :100: 
获取数据类型
#### 参数 
- **value** `any` 任意值
 
#### td.ts
::: info
`typeOf(value): string`
:::
#### 返回 
- `string` 
::: tip
返回value的类型
:::
#### 实例 
数字


```ts
typeOf(12) => 'Number'
```
字符串


```ts
typeOf('12') => 'String'
```
布尔


```ts
typeOf(true) => 'Boolean'
```
函数


```ts
typeOf(functuin(){}) => 'Function'
```
对象


```ts
typeOf({}) => 'Object'
```
数组


```ts
typeOf([]) => 'Array'
```
