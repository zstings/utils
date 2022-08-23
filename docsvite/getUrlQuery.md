## getUrlQuery :tada: :100: 
获取url上的参数
#### 参数 
- url? `Location | URL`  
#### td.ts
::: info
`getUrlQuery(url?: Location | URL): Record<string, any>`
:::
#### 返回 
- `Record` 
::: tip
由参数组成的对象
:::
#### 实例 
支持search和hash中取值，如果search和hash中有相同的参数，则默认使用search。

不传值时，默认从window.location中取值


```ts
getUrlQuery() => {id：'a',b:'33'}
// => window.location: https://a.b.com/?id=a&b=33
```
从第二个参数的url上取值


```ts
getUrlQuery('https://a.b.com/?id=b') // => {id: 'b'}
```
