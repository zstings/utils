import { expect, it, describe } from 'vitest'
import { assignMin } from '@/index'

describe('assignMin', () => {
  it('测试基本的合并功能', () => {
    expect(assignMin({ a: 1, b: 2 }, { b: 3, c: 4 }, { d: 5 })).toEqual({ a: 1, b: 3 });
    expect(assignMin({ a: 1, b: 2 }, { b: 3, c: 4 }, { d: 5, b: '2'})).toEqual({ a: 1, b: '2' });
    expect(assignMin({ a: 1, b: 2 })).toEqual({ a: 1, b: 2 });
  });

  it('测试被合并对象为空的情况', () => {
    expect(assignMin({}, { a: 1 })).toEqual({});
  });

  it('测试被合并对象不是对象的情况', () => {
    expect(() => assignMin(1 as any, { a: 1 })).toThrow('target参数必须是对象');
  });

  it('测试当源对象中有与目标相同的键时值被覆盖的情况', () => {
    expect(assignMin({ a: 1 }, { a: 2, b: 3 }, { b: 4, c: 5 })).toEqual({ a: 2 });
  });
});
