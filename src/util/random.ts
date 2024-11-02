import isNumber from "@/verify/isNumber"

/**
 * 均衡获取指定范围的随机整数
 * 返回一个startNum 和 endNum之间的随机整数。如果你没有参数，那么将返回随机返回0和1。
 * 如果你只传递一个参数，那么将返回0和这个参数之间的整数。
 * 如果两个参数相差值是1，随机返回传入的两个值。
 * @param startNum 整数
 * @param endNum 整数
 * @return 随机整数
 * @category 工具Util
 * @example
 * 随机返回0或者1
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
export default function random(startNum = 1, endNum = 0): number {
  if (!isNumber(startNum)) throw `min 必须整数`
  if (!isNumber(endNum)) throw `max 必须整数`
  if (startNum == endNum) return startNum
  const max = Math.max(startNum, endNum)
  const min = Math.min(startNum, endNum)
  if (max - min == 1) return Math.random() > 0.5 ? max : min
  return Math.round(Math.random() * (max - min) + min)
}