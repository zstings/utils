import isNumber from "@/verify/isNumber"

/**
 * 均衡获取指定范围的随机整数
 * 返回一个min 和 max之间的随机整数。如果你没有参数，那么将返回0和1之间的整数。如果你只传递一个参数，那么将返回0和这个参数之间的整数。
 * @param min 范围最小整数
 * @param max 范围最大整数
 * @return 随机整数
 * @category 工具Util
 * @example
 * 均衡获取0或者1的数
 * ```ts
 * random()
 * ```
 * @example
 * 均衡获取0或者5的数
 * ```ts
 * random(5)
 * ```
 * @example
 * 均衡获取1或者10的数
 * ```ts
 * random(1, 10)
 * ```
 */
export default function random(min = 0, max?: number): number {
  if (!isNumber(min)) throw `min 必须整数`
  if (max && !isNumber(max)) throw `max 必须整数`
  if (min == null) {
    min = 0
    max = max || 1
  } else if (max == null) {
    max = min
    min = 0
  }
  return Math.round(Math.random() * (max - min) + min)
}