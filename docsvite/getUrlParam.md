## getUrlParam :tada: :100: 
获取url上的参数
#### 参数 
- **name** `string` 参数名，必填
 
- **url** `string = window.location.href` url地址，为空时是window.location.href， 非必填
 
#### td.ts
::: info
`getUrlParam(name: string, url?: string): string | null`
:::
#### 异常 
::: danger
url 参数错误，不是有效的
:::
#### 返回 
- `string | null` 
::: tip
符合的值或者null
:::
#### 实例 
支持search和hash中取值，如果search和hash中有相同的参数，则默认使用search。

不传值时，默认从window.location.href中取值


```ts
getUrlParam('id') => 'a' // window.location.href: https://a.b.com/?id=a
```
从第二个参数的url上取值


```ts
getUrlParam('id', 'https://a.b.com/?id=b') => 'b'
```
在第二个参数的url上优先从search中提取值。


```ts
getUrlParam('id', 'http://a.b.com/?id=a#/index/?id=b') => 'a'
```
