## setUrlQuery :tada: :100: 
设置浏览器地址栏url
#### 参数 
- **url** `string` url地址，默认window.location， 非必填
 
- **type** `"pushState" | "replaceState" = 'pushState'` 类型，默认pushState， 非必填, 可选值：pushState, replaceState
 
#### td.ts
::: info
`setUrlQuery(url: string, type?: "pushState" | "replaceState"): void`
:::
#### 实例 
修改了浏览器页面的地址栏的url显示，默认会添加新的历史记录


```ts
setUrlQuery('https://a.b.com/?a=1&b=2')
```
修改了浏览器页面的地址栏的url显示，当前的页面的历史记录替换掉，不会添加新的历史记录


```ts
setUrlQuery('https://a.b.com/?a=1&b=2', type: 'replaceState')
```
