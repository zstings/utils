## upperFirst :tada: :100: 
首字母大写
#### 参数 
- str `any` 传入参数, 如果参数不是字符串，会先调用toString方法
 
#### td.ts
::: info
`upperFirst(str: any): string`
:::
#### 返回 
- `string` 
::: tip
字符串
:::
#### 实例 
```ts
upperFirst('fred') // 'Fred'
```
自定义时间


```ts
upperFirst('FRED') // 'FRED'
```
参数不是字符串，会先调用toString方法


```ts
upperFirst(true) // 'True'
```
