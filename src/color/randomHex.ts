import { random } from '@/util'

/**
 * 随机生成16进制色值
 * @return 字符串
 * @category 颜色Color
 * @example
 * ```ts
 * randomHex() // => '#cf65dd'
 * ```
 */
export function randomHex(): string {
  const hexs = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']
  let hex = '#'
  for (let i = 0; i < 6; i++) {
    hex += hexs[random(0, 15)]
  }
  return hex
}