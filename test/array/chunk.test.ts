import { expect, it, describe } from 'vitest'
import chunk from "@/array/chunk"

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