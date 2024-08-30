import { expect, it, describe } from 'vitest'
import fromPairs from "@/array/fromPairs"

describe('fromPairs', () => {
  it('测试空数组的情况', () => {
    expect(fromPairs([])).toEqual({});
  });

  it('测试包含键值对的数组', () => {
    expect(fromPairs([['a', 1], ['b', 2]])).toEqual({ a: 1, b: 2 });
  });

  it('测试包含不同类型的键值对', () => {
    expect(fromPairs([['key1', 'value1'], ['key2', 2], ['key3', true]])).toEqual({ key1: 'value1', key2: 2, key3: true });
  });

  it('测试包含重复键的情况', () => {
    expect(fromPairs([['a', 1], ['a', 2], ['b', 3]])).toEqual({ a: 2, b: 3 });
  });

  it('测试包含嵌套数组的情况', () => {
    expect(fromPairs([['a', [1, 2]], ['b', { c: 3 }]])).toEqual({ a: [1, 2], b: { c: 3 } });
  });

  it('测试传入非数组的情况', () => {
    expect(() => fromPairs(null as any)).toThrow('array传入参数需要Array');
  });
});