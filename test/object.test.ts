import { expect, it, describe } from 'vitest'
import { arrObjSum, assignMin, createData, assign, omit, pick, resetObjectValues, hasOwn } from '@/index'

describe('arrObjSum', () => {
  it('测试 arrObjSum 函数参数错误', () => {
    expect(() => arrObjSum('notAnArray' as any, ['key'])).toThrow('object 必须是数组对象')
    const objects = [
      { key1: 'a', key2: 2 },
      { key1: 3, key2: 'b' }
    ]
    const result = arrObjSum(objects, ['key1', 'key2'])
    expect(result).toEqual({ key1: 3, key2: 2 })
  })

  it('测试 arrObjSum 函数功能', () => {
    const objects = [
      { key1: 1, key2: 2 },
      { key1: 3, key2: 4 }
    ]
    const result = arrObjSum(objects, ['key1', 'key2'])
    expect(result).toEqual({ key1: 4, key2: 6 })
  })
})

describe('assignMin', () => {
  it('测试基本的合并功能', () => {
    expect(assignMin({ a: 1, b: 2 }, { b: 3, c: 4 }, { d: 5 })).toEqual({ a: 1, b: 3 })
    expect(assignMin({ a: 1, b: 2 }, { b: 3, c: 4 }, { d: 5, b: '2' })).toEqual({ a: 1, b: '2' })
    expect(assignMin({ a: 1, b: 2 })).toEqual({ a: 1, b: 2 })
  })

  it('测试被合并对象为空的情况', () => {
    expect(assignMin({}, { a: 1 })).toEqual({})
  })

  it('测试被合并对象不是对象的情况', () => {
    expect(() => assignMin(1 as any, { a: 1 })).toThrow('target参数必须是object')
  })

  it('测试当源对象中有与目标相同的键时值被覆盖的情况', () => {
    expect(assignMin({ a: 1 }, { a: 2, b: 3 }, { b: 4, c: 5 })).toEqual({ a: 2 })
  })
})

describe('createData', () => {
  it('测试 createData 函数功能', () => {
    const data = createData(2, 3)
    expect(data.data.data).toEqual({ 0: 0, 1: 1, 2: 2 })
  })
})

describe('assign', () => {
  it('测试基本的合并功能', () => {
    expect(assign({ a: 1, b: 2 }, { b: 3, c: 4 }, { d: 5 })).toEqual({ a: 1, b: 3, c: 4, d: 5 })
    expect(assign({ a: 1, b: 2 }, { b: 3, c: 4 }, { d: 5, b: '2' })).toEqual({ a: 1, b: '2', c: 4, d: 5 })
    expect(assign({ a: 1, b: 2 })).toEqual({ a: 1, b: 2 })
  })

  it('测试被合并对象为空的情况', () => {
    expect(assign({}, { a: 1 })).toEqual({})
  })

  it('测试被合并对象不是对象的情况', () => {
    expect(() => assign(1 as any, { a: 1 })).toThrow('target参数必须是object')
  })

  it('测试当源对象中有与目标相同的键时值被覆盖的情况', () => {
    expect(assign({ a: 1 }, { a: 2, b: 3 }, { b: 4, c: 5 })).toEqual({ a: 2, b: 4, c: 5 })
  })
})

describe('omit', () => {
  it('测试基本的删除功能', () => {
    expect(omit({ a: 1, b: 2 }, ['a'])).toEqual({ b: 2 })
    expect(omit({ a: 1, b: 2 }, ['a', 'b'])).toEqual({})
  })

  it('测试目标对象为空的情况', () => {
    expect(omit({})).toEqual({})
  })

  it('测试目标对象不是对象的情况', () => {
    expect(() => omit(1 as any)).toThrow('target参数必须是object')
  })
})

describe('pick', () => {
  it('测试基本的提取功能', () => {
    expect(pick({ a: 1, b: 2 }, ['a'])).toEqual({ a: 1 })
    expect(pick({ a: 1, b: 2 }, [])).toEqual({})
    expect(pick({ a: 1, b: 2 })).toEqual({})
  })

  it('测试目标对象为空的情况', () => {
    expect(pick({})).toEqual({})
  })

  it('测试目标对象不是对象的情况', () => {
    expect(() => pick(1 as any)).toThrow('target参数必须是object')
  })

  it('测试提取属性不是数组的情况', () => {
    expect(() => pick({ a: 1 }, 1 as any)).toThrow('keys参数必须是array')
  })
})

describe('resetObjectValues', () => {
  it('测试基本的重置功能', () => {
    expect(resetObjectValues({ a: 1, b: '2', c: true, d: [1, 2, 3], e: { a: 1, b: '2', c: [6, 7] } })).toEqual({
      a: 0,
      b: '',
      c: false,
      d: [],
      e: { a: 0, b: '', c: [] }
    })
  })

  it('测试目标对象为空的情况', () => {
    expect(resetObjectValues({})).toEqual({})
  })

  it('测试目标对象不是对象的情况', () => {
    expect(() => resetObjectValues(1 as any)).toThrow('target参数必须是object')
  })
})

describe('hasOwn', () => {
  it('测试属性存在的情况', () => {
    expect(hasOwn({ a: 0, b: 1 }, 'a')).toBe(true)
    expect(hasOwn({ a: 0, b: 1 }, 'b')).toBe(true)
  })

  it('测试属性不存在的情况', () => {
    expect(hasOwn({ a: 0, b: 1 }, 'c')).toBe(false)
  })

  it('测试目标对象不是对象的情况', () => {
    expect(() => hasOwn(1 as any, '11')).toThrow('target参数必须是object')
  })
})
