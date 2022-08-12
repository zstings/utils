## deepCopy :tada: :100: 
深度复制
#### 参数 
- origin `ObjectData | ArrayData` 对象或者数组
 
#### td.ts
::: info
`deepCopy(origin: ObjectData | ArrayData): ObjectData`
:::
#### 返回 
- `ObjectData` 
::: tip
深度复制后的对象或者数组
:::
#### 实例 
```ts
deepCopy([1,23, [1]]) // => [1,23, [1]]
```
```ts
deepCopy({a: [1], b: () => {}}) // => {a: [1], b: () => {}}
```
