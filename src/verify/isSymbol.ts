import typeOf from '@/common/typeOf'

/**
 * 判断是否为Symbol
 * @param value 任意值
 * @return true | false
 * @category 对象Object
 * @example
 * 验证通过
 * ```ts
 * isSymbol(Symbol(1)) => true
 * ```
 * @example
 * 验证失败
 * ```ts
 * isSymbol(Symbol) => false
 * ```
 */
export default function isSymbol(value: any): boolean {
  return typeOf(value) === 'Symbol'
}