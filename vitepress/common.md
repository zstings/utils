## typeOf
获取数据类型
#### 类型说明
::: info
`function typeOf(value: any): string;`
:::
#### 参数
- `value` 任意值
#### 返回值
::: tip 
返回value的类型
:::
#### 示例
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
#### 源码
::: code-group
```Ts [TS版本]
export default function typeOf(value: any): string {
  return Object.prototype.toString.call(value).slice(8, -1)
}
```
```Js [JS版本]
export default function typeOf(value) {
  return Object.prototype.toString.call(value).slice(8, -1);
}
```
:::

## typeOf
获取数据类型
#### 类型说明
::: info
`function typeOf(value: any): string;`
:::
#### 参数
- `value` 任意值
#### 返回值
::: tip 
返回value的类型
:::
#### 示例
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
#### 源码
::: code-group
```Ts [TS版本]
export default function typeOf(value: any): string {
  return Object.prototype.toString.call(value).slice(8, -1)
}
```
```Js [JS版本]
export default function typeOf(value) {
  return Object.prototype.toString.call(value).slice(8, -1);
}
```
:::
