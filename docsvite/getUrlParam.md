## getUrlParam :tada: :100: 
获取url上的参数
#### 参数 
- name `string` 参数名，必填
 
- url? `string | Location` url地址，为空时是window.location， 非必填
 
#### td.ts
::: info
`getUrlParam(name: string, url?: string | Location): null | string`
:::
#### 返回 
- `null | string` 
::: tip
符合的值或者null
:::
#### 实例 
支持search和hash中取值，如果search和hash中有相同的参数，则默认使用search。

不传值时，默认从window.location中取值


```ts
getUrlParam('id') => 'a' // window.location: https://a.b.com/?id=a
```
从第二个参数的url上取值


```ts
getUrlParam('id', 'https://a.b.com/?id=b') => 'b'
```
在第二个参数的url上优先从search中提取值。


```ts
getUrlParam('id', 'http://a.b.com/?id=a#/index/?id=b') => 'a'
```
