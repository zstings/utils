## arrObjSum :tada: :100: 
数组对象key值求和
#### 参数 
- **object** `T[]` 目标对象
 
- **keys** `K[]` 需要求和的key数组
 
#### td.ts
::: info
`arrObjSum<T, K>(object: T[], keys: K[]): Record<K, number>`
:::
#### 返回 
- `Record` 
::: tip
求和后的对象
:::
#### 实例 
```ts
arrObjSum([{id: 1, age: 10, sx: 1}, {id: 2, age: 20, sx: 2}], ['id', 'age'])
// => {id: 3, age: 30}
```
