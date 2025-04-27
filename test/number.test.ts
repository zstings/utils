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
  })
})

describe('toNumber', () => {
  it('测试 toNumber 函数参数错误', () => {
    expect(() => toNumber('notANumber')).toThrow('notANumber无法转换为数字')
  })

  it('测试 toNumber 函数功能', () => {
    expect(toNumber(5)).toBe(5)
    expect(toNumber('5')).toBe(5)
  })
})
