/**
 * 判断任意两个值是否相等
 * @param value1 任意值
 * @param value2 任意值
 * @return true | false
 * @category 工具Util
 * @example
 * 没有参数时，直接返回true
 * ```ts
 * isEqual() => true
 * ```
 * @example
 * 只要一个参数时，第二个参数默等于第一个参数
 * ```ts
 * isEqual(1) => true
 * ```
 * ```ts
 * isEqual(false) => true
 * ```
 * ```ts
 * isEqual([]) => true
 * ```
 * @example
 * 基本数据类型
 * ```ts
 * isEqual(1, 1) => true
 * ```
 * ```ts
 * isEqual(1, 2) => false
 * ```
 * ```ts
 * isEqual(true, 'a') => false
 * ```
 * @example
 * 引用数据类型
 * ```ts
 * isEqual([], []) => true
 * ```
 * ```ts
 * isEqual({}, {}) => true
 * ```
 * ```ts
 * isEqual([], {}) => false
 * ```
 * ```ts
 * isEqual([1, 2], [1, 2]) => true
 * ```
 * ```ts
 * isEqual({a: 1}, {a: 1}) => true
 * ```
 */
export default function isEqual(value1:any = '', value2:any = '') {
  if (arguments.length == 1) value2 = value1;
  if (value1 === value2) return true; // 基本类型相等
  if (value1 === null || value2 === null) return false; // 有一个为 null 则不相等
  if (value1.constructor !== value2.constructor) return false; // 类型不同则不相等
  if (Array.isArray(value1)) {
    if (!Array.isArray(value2) || value1.length !== value2.length) return false; // 数组长度不同则不相等
    for (let i = 0; i < value1.length; i++) {
      if (!isEqual(value1[i], value2[i])) return false; // 数组元素不相等则不相等
    }
    return true;
  }
  if (typeof value1 === 'object') {
    const keysA = Object.keys(value1);
    const keysB = Object.keys(value2);
    if (keysA.length !== keysB.length) return false; // 对象键数量不同则不相等
    for (let key of keysA) {
      if (!keysB.includes(key) || !isEqual(value1[key], value2[key])) return false; // 对象键或值不相等则不相等
    }
    return true;
  }
  return false; // 其他情况不相等
}