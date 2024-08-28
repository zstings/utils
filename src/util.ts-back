
/*
export function deepClonet<T extends Array<T> | any>(source: T): T {
  if (!(isArray(source) || isObject(source))) return source
  const root: Record<string, never> = {}
  // 栈
  const loopList: { parent: Record<string, any>; key: any; data: T }[] = [
    {
      parent: root,
      key: undefined,
      data: source
    }
  ]
  while (loopList.length) {
    // 深度优先
    const node = loopList.pop() as { parent: Record<string, any>; key: any; data: T }
    const parent = node.parent
    const key = node.key
    const data = node.data

    // 初始化赋值目标，key 为 undefined 则拷贝到父元素，否则拷贝到子元素
    let res = parent
    if (typeof key !== 'undefined') {
      res = parent[key] = {} as Record<string, any>
    }

    for (const k in data) {
      if (Object.prototype.hasOwnProperty.call(data, k)) {
        if (typeof data[k] === 'object') {
          // 下一次循环
          loopList.push({
            parent: res,
            key: k,
            data: data[k] as unknown as T
          })
        } else {
          res[k] = data[k]
        }
      }
    }
  }
  return root as any
}

export function deepClonex<T>(x: T): T {
  if (!(isArray(x) || isObject(x))) return x
  const root: Record<string, never> = {}

  // 栈
  const loopList: { parent: Record<string, any>; key: any; data: T }[] = [
    {
      parent: root,
      key: undefined,
      data: x
    }
  ]

  while (loopList.length) {
    // 深度优先
    const node = loopList[0]
    const parent = node.parent
    const key = node.key
    const data = node.data

    // 初始化赋值目标，key 为 undefined 则拷贝到父元素，否则拷贝到子元素
    let res = parent
    if (typeof key !== 'undefined') {
      res = parent[key] = {} as Record<string, any>
    }

    for (const k in data) {
      if (Object.prototype.hasOwnProperty.call(data, k)) {
        if (typeof data[k] === 'object') {
          // 下一次循环
          loopList.push({
            parent: res,
            key: k,
            data: data[k] as unknown as T
          })
        } else {
          res[k] = data[k]
        }
      }
    }
  }

  return root as any
}*/




