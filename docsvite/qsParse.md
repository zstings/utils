## qsParse :tada: :100: 
参数序列化-字符转对象
#### 参数 
- **query** `string = ''`  
- **decode** `boolean = true`  
#### td.ts
::: info
`qsParse(query?, decode?): {     [k: string]: any; }`
:::
#### 返回 
- `映射` 
::: tip
由参数组成的对象
:::
#### 实例 
支持search和hash中取值，如果search和hash中有相同的参数，则默认使用search。

不传值时，默认从window.location中取值


```ts
qsParse('a=1&b=2')
// => 'a=1&b=2'
```
```ts
qsParse('a=1&b=2&c={"a":1}')
// => { a:1, b:2, c: { a :1 } }
```
```ts
qsParse('a=1&b=2&c={"a":1}', false)
// => { a:1, b:2, c: '{ a: 1 }' }
```
