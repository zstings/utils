import { expect, it, describe } from 'vitest'
import isArray from "@/verify/isArray"

describe('isArray', () => {
  it('测试数组的情况', () => {
    expect(isArray([])).toBe(true);
    expect(isArray([1, 2])).toBe(true);
    expect(isArray(new Array())).toBe(true);
  });

  it('测试非数组的情况', () => {
    expect(isArray("not an array")).toBe(false);
    expect(isArray(123)).toBe(false);
    expect(isArray({})).toBe(false);
    expect(isArray(null)).toBe(false);
    expect(isArray(undefined)).toBe(false);
    expect(isArray(function() {})).toBe(false);
  });

  it('测试特殊对象的情况', () => {
    // 测试 arguments 对象
    expect(isArray((function() { return arguments; })())).toBe(false);

    // 测试类数组对象
    const arrayLike = { length: 2, 0: 'a', 1: 'b' };
    expect(isArray(arrayLike)).toBe(false);

    // 测试其他边缘情况
    expect(isArray(new Int8Array([1, 2]))).toBe(false); // 类型为 "Int8Array"
    expect(isArray(new Uint8Array([1, 2]))).toBe(false); // 类型为 "Uint8Array"
    expect(isArray(new Float64Array([1.0, 2.0]))).toBe(false); // 类型为 "Float64Array"
  });
});