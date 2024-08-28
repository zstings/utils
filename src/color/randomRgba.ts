import toFixed from "@/number/toFixed";
import random from "@/util/random";

/**
 * 随机生成RGBA色值
 * @return 字符串
 * @category 颜色Color
 * @example
 * ```ts
 * randomRgba() // => '#cf65dd'
 * ```
 */
export default function randomRgba(): string {
  return `${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)}, ${toFixed(random(0, 100) / 100)}`
}