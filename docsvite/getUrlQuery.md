## getUrlQuery :tada: :100: 
获取url上的参数
#### 参数 
- **option** `{     type?: "search" | "hash" | "all";     url?: string; } = ...` 可选的对象
 
	- **type?** `"search" | "hash" | "all"` 类型，默认all， 非必填, 可选值：all, query, hash
 
	- **url?** `string` url地址，默认window.location.href， 非必填
 
#### td.ts
::: info
`getUrlQuery(option?: {     type?: "search" | "hash" | "all";     url?: string; }): {     [k: string]: any; }`
:::
#### 异常 
::: danger
参数错误， 应该传入一个对象 option不是对象时触发
:::
::: danger
url参数错误，不是有效的  url不是有效链接时触发
:::
::: danger
type 参数错误， 应该传入一个字符串 'search' | 'hash' | 'all'
:::
#### 返回 
- `映射` 
::: tip
由参数组成的对象
:::
#### 实例 
支持search和hash中取值，如果search和hash中有相同的参数，则默认使用search。

不传值时，默认从window.location.href中取值


```ts
getUrlQuery() => {a：'1',b:'2'}
// => window.location.href: https://a.b.com/?a=1&b=2
```
从参数的url上取值


```ts
getUrlQuery({url: 'http://a.b.com/?a=1&b=2#/index/?c=3&b=4'}) // => {a: '1', b: '2', c: '3'}
```
从参数的url上取值,只在search中取值


```ts
getUrlQuery({url: 'http://a.b.com/?a=1&b=2#/index/?c=3&b=4', type: 'search'}) // => {id: '1', b: '2'}
```
从参数的url上取值,只在hash中取值


```ts
getUrlQuery({url: 'http://a.b.com/?a=1&b=2#/index/?c=3&b=4', type: 'hash'}) // => {c: '3', b: '4'}
```
