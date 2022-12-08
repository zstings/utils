## reviseUrlQuery :tada: :100: 
修改url上的参数
#### 参数 
- **option** `{     hash?: Record<string, any>;     search?: Record<string, any>; }`  
	- **hash?** `Record<string, any>` 对象 用于修改hash部分的数据， 非必填
 
	- **search?** `Record<string, any>` 对象 用于修改search部分的数据， 非必填
 
- **url** `string = window.location.href` url地址，默认window.location.href， 非必填
 
#### td.ts
::: info
`reviseUrlQuery(option: {     hash?: Record<string, any>;     search?: Record<string, any>; }, url?: string): string`
:::
#### 异常 
::: danger
参数错误， 应该传入一个对象 option不是对象时触发
:::
::: danger
search 参数错误， 应该传入一个对象 option不是对象时触发
:::
::: danger
hash 参数错误， 应该传入一个对象 option不是对象时触发
:::
::: danger
url 参数错误，不是有效的
:::
#### 返回 
- `string` 
::: tip
修改后的url地址
:::
#### 实例 
修改search中的值


```ts
reviseUrlQuery({search: {a: '2', b: '3'}}, 'http://a.b.com/?a=1&b=2#/index/?c=3&b=4')
// => 'http://a.b.com/?a=2&b=3#/index/?c=3&b=4'
```
修改hash中的值


```ts
reviseUrlQuery({hash: {c: '2', b: '3'}}, 'http://a.b.com/?a=1&b=2#/index/?c=3&b=4')
// => 'http://a.b.com/?a=1&b=2#/index/?c=2&b=3'
```
修改search、hash中的值


```ts
reviseUrlQuery({search: {a: '5', b: '6'}, hash: {c: '7', b: '8'}}, 'http://a.b.com/?a=1&b=2#/index/?c=3&b=4')
// => 'http://a.b.com/?a=5&b=6#/index/?c=7&b=8'
```
