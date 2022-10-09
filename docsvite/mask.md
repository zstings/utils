## mask :tada: :100: 
字符串替换
使用指定的掩码字符替换start~length之间的所有字符
#### 参数 
- **str** `string` 传入参数, 如果参数不是字符串，会先调用toString方法
 
- **start** `number = 0` 开始下标
 
- **length?** `number` 长度
 
- **mask** `string = '*'` 掩码字符 默认*
 
#### td.ts
::: info
`mask(str: string, start?: number, length?: number, mask?: string): string`
:::
#### 返回 
- `string` 
::: tip
字符串
:::
#### 异常 
::: danger
start 必须是数字  start不是数字时触发
:::
::: danger
length 必须是数字 length存在且不是数字时触发
:::
::: danger
mask 必须是字符串 mask不是字符串时触发
:::
#### 实例 
```ts
mask('123456') // => '******'
```
设置开始位置


```ts
mask('123456', 2) // => '12****'
```
设置长度


```ts
mask('123456', 2, 3) // => '12***6'
```
修改掩码字符


```ts
mask('123456', 2, 3, '.') // => '12...6'
```
