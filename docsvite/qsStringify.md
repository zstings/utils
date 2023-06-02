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
```ts
qsStringify({a: 1, b: 2})
// => 'a=1&b=2'
```
如果传入内容是undefined或者null，这个参数会被丢弃

如果你想空参数，可以使用 
`''`



```ts
qsStringify({a: 1, b: undefined, c: null})
// => 'a=1&b=2&c=%7B%22a%22%3A1%7D'
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
