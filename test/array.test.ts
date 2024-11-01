import { expect, it, describe } from 'vitest'
import {chunk, compact, fromPairs, unique} from "@/index"

describe('chunk', () => {
  it('测试空数组的情况', () => {
    expect(chunk([], 1)).toEqual([]);
  });

  it('测试单元素数组的情况', () => {
    expect(chunk([1], 1)).toEqual([[1]]);
  });

  it('测试每个子数组大小为 1 的情况', () => {
    expect(chunk([1, 2, 3, 4, 5], 1)).toEqual([[1], [2], [3], [4], [5]]);
  });

  it('测试每个子数组大小为 2 的情况', () => {
    expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
  });

  it('测试每个子数组大小为 3 的情况', () => {
    expect(chunk([1, 2, 3, 4, 5], 3)).toEqual([[1, 2, 3], [4, 5]]);
  });

  it('测试非整数大小的情况', () => {
    expect(() => chunk([1, 2, 3, 4, 5], 2.5)).toThrow('请检查size参数，必须符合大于0的整数');
  });

  it('测试传入非数组的情况', () => {
    expect(() => chunk(null as any, 2)).toThrow('array参数需要Array');
  });

  it('测试传入非数字大小的情况', () => {
    expect(() => chunk([1, 2, 3], '2' as any)).toThrow('请检查size参数，必须符合大于0的整数');
  });

  it('测试传入数字小于0的情况', () => {
    expect(() => chunk([1, 2, 3], -1)).toThrow('请检查size参数，必须符合大于0的整数');
  });
});

describe('compact', () => {
  it('测试空数组的情况', () => {
    expect(compact([])).toEqual([]);
  });

  it('测试包含各种假值（falsy）的数组', () => {
    expect(compact([0, 1, false, 2, '', 3, null, 4, undefined, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  it('测试只包含假值的数组', () => {
    expect(compact([0, false, '', null, undefined])).toEqual([]);
  });

  it('测试只包含真值（truthy）的数组', () => {
    expect(compact([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  it('测试混合包含真值和假值的数组', () => {
    expect(compact([0, 1, false, 2, '', 3, null, 4, undefined, 5, true])).toEqual([1, 2, 3, 4, 5, true]);
  });

  it('测试传入非数组的情况-null', () => {
    expect(() => compact(null as any)).toThrow('array参数需要Array');
  });

  it('测试传入非数组的情况-{}', () => {
    expect(() => compact({} as any)).toThrow('array参数需要Array');
  });

  it('测试传入非数组的情况-数字', () => {
    expect(() => compact(22 as any)).toThrow('array参数需要Array');
  });
});

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

describe('unique', () => {
  it('测试空数组的情况', () => {
    expect(unique([])).toEqual([]);
  });

  it('测试包含重复简单值的数组', () => {
    expect(unique([1, 2, 2, 3, 3, 3])).toEqual([1, 2, 3]);
  });

  it('测试包含重复对象的数组', () => {
    expect(unique([{ id: 1 }, { id: 2 }, { id: 1 }], {key: 'id'})).toEqual([{ id: 1 }, { id: 2 }]);
  });

  it('测试包含重复对象的数组-非深度', () => {
    expect(unique([1, 2, 1, { id: 1 }, { id: 2 }, { id: 1 }], {deep: false})).toEqual([ 1, 2, { id: 1 }, { id: 2 }, { id: 1 } ]);
  });

  it('测试包含重复字符串的数组', () => {
    expect(unique(['apple', 'banana', 'apple', 'orange'])).toEqual(['apple', 'banana', 'orange']);
  });

  it('测试包含重复键的对象数组', () => {
    expect(unique([{ name: 'Alice' }, { name: 'Bob' }, { name: 'Alice' }], {key: 'name'})).toEqual([{ name: 'Alice' }, { name: 'Bob' }]);
  });

  it('测试包含嵌套对象的数组', () => {
    expect(unique([{ user: { id: 1 } }, { user: { id: 2 } }, { user: { id: 1 } }], {key: 'user'})).toEqual([{ user: { id: 1 } }, { user: { id: 2 } }]);
  });

  it('测试包含混合类型的数组', () => {
    expect(unique([1, '1', 2, '2'])).toEqual([1, '1', 2, '2']);
  });

  it('测试传入非数组的情况', () => {
    expect(() => unique(null as any)).toThrow('array传入参数需要Array');
  });

  it('测试传入字符串 key 不存在的情况', () => {
    expect(() => unique([{ id: 1 }, { id: 2 }], {key: 'a'})).toThrow('key指定的属性不存在');
  });

  it('测试传入非字符串 key 的情况', () => {
    expect(() => unique([{ id: 1 }, { id: 2 }], {key: 1 as any})).toThrow('key传入参数需要String');
  });
});