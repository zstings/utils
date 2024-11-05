/**
 * 指定深度或者广度的对象
 * @param deep 深度
 * @param breadth 广度
 * @return 对象
 * @category 对象Object
 * @example
 * ```ts
 * createData(1) // => {data: {}}
 * ```
 * @example
 * ```ts
 * createData(2, 2)
 * // =>
 * {
 *   data: {
 *      0: 0,
 *      1: 1,
 *      data: {
 *          0: 0,
 *          1: 1
 *      }
 *   }
 * }
 * ```
 */
export default function createData(deep = 1, breadth = 0) {
  const data: { data?: any; [key: number]: any } = {}
  let temp = data
  for (let i = 0; i < deep; i++) {
    temp = temp['data'] = {}
    for (let j = 0; j < breadth; j++) {
      temp[j] = j
    }
  }
  return data
}








