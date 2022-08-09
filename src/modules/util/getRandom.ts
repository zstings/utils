/**
 * 均衡获取指定范围的随机整数
 * @param min 范围最小整数
 * @param max 范围最大整数
 * @return 随机整数
 * @category 工具Util
 * @example
 * 均衡获取0或者1的数
 * ```ts
 * getRandom()
 * ```
 * @example
 * 均衡获取1或者10的数
 * ```ts
 * getRandom(1, 10)
 * ```
 */
export function getRandom(min = 0, max = 1): number {
  return Math.round(Math.random() * (max - min) + min)
}
