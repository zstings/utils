import { expect, it, describe } from 'vitest'
import unique from "@/array/unique"

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
