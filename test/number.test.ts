import { expect, it, describe } from 'vitest'
import { padInt, toFixed, toNumber } from '@/index'

describe('padInt', () => {
  it('测试 padInt 函数参数错误', () => {
    expect(() => padInt('notANumber')).toThrow('不是一个合法的数字')
  })

  it('测试 padInt 函数功能', () => {
    expect(padInt(5)).toBe('05')
    expect(padInt(123, 4)).toBe('0123')
  })
})

describe('toFixed', () => {
  it('测试 toFixed 函数参数类型错误', () => {
    expect(() => toFixed(5, 2, 'notABoolean' as any)).toThrow('isRound不是boolean')
  })

  it('测试 toFixed 函数功能', () => {
    expect(toFixed(5.1234, 2)).toBe(5.12)
    expect(toFixed(5.1264, 2, false)).toBe(5.12)
    expect(toFixed(5.1264, 2, false, 'string')).toBe('5.12')
    expect(toFixed(5.1264, 5, false, 'string')).toBe('5.12640')
    expect(toFixed(5.1264, 2, false, 'number')).toBe(5.12)
    expect(toFixed(5.1264, 5, false, 'number')).toBe(5.1264)
    expect(toFixed(1.9999, 2, false)).toBe(1.99)
    expect(toFixed(1.9999, 2)).toBe(2)
    expect(toFixed(12.3456, 2)).toBe(12.35)
    expect(toFixed(12.3456, 2, false)).toBe(12.34)
    expect(toFixed('12.3456', 2, false)).toBe(12.34)
    expect(toFixed(0, 2, false)).toBe(0)
    expect(toFixed('0', 2, false)).toBe(0)
  })
  // 默认参数测试
  it('默认参数测试', () => {
    expect(toFixed(5.6789)).toBe(5.68) // 默认 num=2, isRound=true, returnType=number
    expect(toFixed(5.6789, undefined, undefined, 'string')).toBe('5.68')
  })

  // 整数、负数、零测试
  it('整数、负数、零测试', () => {
    expect(toFixed(100, 3, false)).toBe(100.0)
    expect(toFixed(-12.3456, 2)).toBe(-12.35)
    expect(toFixed(0, 2, false)).toBe(0.0)
  })

  // 边界值测试
  it('边界值测试', () => {
    expect(toFixed(1.2, 5, false)).toBe(1.2)
    expect(toFixed(9.999, 2)).toBe(10)
    expect(toFixed(0.9999, 3, false)).toBe(0.999)
  })

  // 异常情况测试
  it('异常情况测试', () => {
    // 非数字 value
    expect(() => toFixed('abc' as any, 2)).toThrow('abc无法转换为数字')
    // 非 boolean isRound
    expect(() => toFixed(1.23, 2, 'notBool' as any)).toThrow('isRound不是boolean')
    // 非 number/string returnType
    expect(() => toFixed(1.23, 2, true, 'other' as any)).toThrow('type 不是 number 或 string')
  })

  // 大数测试
  it('大数测试', () => {
    const bigNum = 123456789.987654
    expect(toFixed(bigNum, 3)).toBe(123456789.988)
    expect(toFixed(bigNum, 3, false)).toBe(123456789.987)
    expect(toFixed(bigNum, 10, false, 'string')).toBe('123456789.9876540000')
  })
})

describe('toNumber', () => {
  it('测试 toNumber 函数参数错误', () => {
    expect(() => toNumber('notANumber')).toThrow('notANumber无法转换为数字')
  })

  it('测试 toNumber 函数功能', () => {
    expect(toNumber(5)).toBe(5)
    expect(toNumber('5')).toBe(5)
    expect(toNumber('123.45')).toBe(123.45)
    expect(toNumber('123.00')).toBe(123)
  })
})
