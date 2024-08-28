/**
 * 获取uuid
 * @return uuid
 * @category 工具Util
 * @example
 * 符合 RFC4122 版本 4 的 UUID。
 * ```ts
 * getUUID() // '7ac8d9bc-0a0d-4f31-8134-896a485feed1'
 * ```
 */
export default function getUUID(): string {
  const ysValue = String(1e7) + -1e3 + -4e3 + -8e3 + -1e11
  return ysValue.replace(/[018]/g, c =>
    (Number(c) ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (Number(c) / 4)))).toString(16)
  )
}