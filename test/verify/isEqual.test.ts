import { expect, it, describe } from 'vitest'
import isEqual from "@/verify/isEqual"

describe('isEqual', () => {
  it('测试一个参数或者0个参数的情况', () => {
    expect(isEqual(1)).toBe(true);
    expect(isEqual('hello')).toBe(true);
    expect(isEqual(true)).toBe(true);
    expect(isEqual(null)).toBe(true);
    expect(isEqual(undefined)).toBe(true);
    expect(isEqual([])).toBe(true);
    expect(isEqual({})).toBe(true);
    expect(isEqual()).toBe(true);
  });

  it('测试相同的基本类型值', () => {
    expect(isEqual(1, 1)).toBe(true);
    expect(isEqual('hello', 'hello')).toBe(true);
    expect(isEqual(true, true)).toBe(true);
    expect(isEqual(null, null)).toBe(true);
    expect(isEqual(undefined, undefined)).toBe(true);
  });

  it('测试不同的基本类型值', () => {
    expect(isEqual(1, 2)).toBe(false);
    expect(isEqual('hello', 'world')).toBe(false);
    expect(isEqual(true, false)).toBe(false);
    expect(isEqual(null, undefined)).toBe(false);
    expect(isEqual(undefined, null)).toBe(false);
  });

  it('测试相同的数组', () => {
    expect(isEqual([1, 2, 3], [1, 2, 3])).toBe(true);
    expect(isEqual([], [])).toBe(true);
    expect(isEqual([1, 2, 3], [1, 2, 3])).toBe(true);
    expect(isEqual([1, 2, 3], [1, 2, 3])).toBe(true);
  });

  it('测试不同的数组', () => {
    expect(isEqual([1, 2, 3], [1, 2, 4])).toBe(false);
    expect(isEqual([1, 2, 3], [1, 2])).toBe(false);
    expect(isEqual([1, 2, 3], [1, 2, 3, 4])).toBe(false);
  });

  it('测试相同的对象', () => {
    expect(isEqual({ a: 1, b: 2 }, { a: 1, b: 2 })).toBe(true);
    expect(isEqual({}, {})).toBe(true);
    expect(isEqual({ a: 1, b: 2 }, { a: 1, b: 2 })).toBe(true);
    expect(isEqual({ a: { b: 1 } }, { a: { b: 1 } })).toBe(true);
  });

  it('测试不同的对象', () => {
    expect(isEqual({ a: 1, b: 2 }, { a: 1, b: 3 })).toBe(false);
    expect(isEqual({ a: 1, b: 2 }, { a: 1 })).toBe(false);
    expect(isEqual({ a: 1, b: 2 }, { a: 1, b: 2, c: 3 })).toBe(false);
    expect(isEqual({ a: { b: 1 } }, { a: { b: 2 } })).toBe(false);
  });

  it('测试嵌套结构', () => {
    expect(isEqual({ a: { b: 1, c: [1, 2, 3] } }, { a: { b: 1, c: [1, 2, 3] } })).toBe(true);
    expect(isEqual({ a: { b: 1, c: [1, 2, 3] } }, { a: { b: 1, c: [1, 2, 4] } })).toBe(false);
  });

  it('测试不同类型值的情况', () => {
    expect(isEqual([1, 2], { a: 1, b: 2 })).toBe(false);
    expect(isEqual({ a: 1 }, [1])).toBe(false);
    expect(isEqual({ a: 1 }, 1)).toBe(false);
    expect(isEqual([1], 1)).toBe(false);
  });
});