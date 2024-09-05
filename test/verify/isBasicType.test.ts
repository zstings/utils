import { expect, it, describe } from 'vitest'
import isBasicType from "@/verify/isBasicType"

describe('isArray', () => {
  it('测试基本类型的情况', () => {
    expect(isBasicType(1)).toBe(true);
    expect(isBasicType('a')).toBe(true);
    expect(isBasicType(true)).toBe(true);
    expect(isBasicType(false)).toBe(true);
    expect(isBasicType(false)).toBe(true);
    expect(isBasicType(new String())).toBe(true);
    expect(isBasicType(undefined)).toBe(true);
    expect(isBasicType(null)).toBe(true);
    expect(isBasicType(Symbol())).toBe(true);
    expect(isBasicType(12n)).toBe(true);
  });
  it('测试引用类型的情况', () => {
    expect(isBasicType([])).toBe(false);
    expect(isBasicType({})).toBe(false);
    expect(isBasicType(function(){})).toBe(false);
  });
});