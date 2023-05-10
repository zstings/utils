## qsStringify :tada: :100: 
参数序列化-对象转字符
#### 参数 
- **query** `Record<string, any> = {}`  
- **decode** `boolean = false`  
#### td.ts
::: info
`qsStringify(query?, decode?): string`
:::
#### 返回 
- `string` 
::: tip
由参数组成的对象
:::
#### 实例 
支持search和hash中取值，如果search和hash中有相同的参数，则默认使用search。

不传值时，默认从window.location中取值


```ts
qsStringify({a: 1, b: 2})
// => 'a=1&b=2'
```
```ts
qsStringify({a: 1, b: 2, c: {a: 1}})
// => 'a=1&b=2&c=%7B%22a%22%3A1%7D'
```
解码后输出


```ts
qsStringify({a: 1, b: 2, c: {a: 1}}, true)
// => 'a=1&b=2&c={"a":1}'
```
