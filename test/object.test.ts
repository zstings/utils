import { expect, it, describe } from 'vitest'
import { assign, assignMin, omit } from '@/index'

describe('assign', () => {
  it('测试基本的合并功能', () => {
    expect(assign({ a: 1, b: 2 }, { b: 3, c: 4 }, { d: 5 })).toEqual({ a: 1, b: 3, c: 4, d: 5 });
    expect(assign({ a: 1, b: 2 }, { b: 3, c: 4 }, { d: 5, b: '2'})).toEqual({ a: 1, b: '2', c: 4, d: 5 });
    expect(assign({ a: 1, b: 2 })).toEqual({ a: 1, b: 2 });
  });

  it('测试被合并对象为空的情况', () => {
    expect(assign({}, { a: 1 })).toEqual({});
  });

  it('测试被合并对象不是对象的情况', () => {
    expect(() => assign(1 as any, { a: 1 })).toThrow('target参数必须是对象');
  });

  it('测试当源对象中有与目标相同的键时值被覆盖的情况', () => {
    expect(assign({ a: 1 }, { a: 2, b: 3 }, { b: 4, c: 5 })).toEqual({ a: 2, b: 4, c: 5 });
  });
});

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

describe('omit', () => {
  it('测试基本的删除功能', () => {
    expect(omit({ a: 1, b: 2 }, ['a'])).toEqual({ b: 2 });
    expect(omit({ a: 1, b: 2 }, ['a', 'b'])).toEqual({});
  });

  it('测试目标对象为空的情况', () => {
    expect(omit({})).toEqual({});
  });

  it('测试目标对象不是对象的情况', () => {
    expect(() => omit(1 as any)).toThrow('target参数必须是对象');
  });
});