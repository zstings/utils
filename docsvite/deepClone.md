## deepClone :tada: :100: 
深度复制
#### 参数 
- origin `ObjectData | ArrayData` 对象或者数组
 
- hash `WeakMap<object, any> = ...`  
#### td.ts
::: info
`deepClone(origin: ObjectData | ArrayData, hash?: WeakMap<object, any>): any`
:::
#### 返回 
- `any` 
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
