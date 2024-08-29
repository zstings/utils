import { expect, it, describe } from 'vitest'
import compact from "@/array/compact"

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