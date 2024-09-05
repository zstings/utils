import { expect, it, describe } from 'vitest'
import isBoolean from "@/verify/isBoolean"

describe('isArray', () => {
  it('测试isBoolean', () => {
    expect(isBoolean(true)).toBe(true);
    expect(isBoolean(false)).toBe(true);
    expect(isBoolean(1)).toBe(false);
    expect(isBoolean('a')).toBe(false);
    expect(isBoolean([])).toBe(false);
    expect(isBoolean({})).toBe(false);
    expect(isBoolean(0)).toBe(false);
  });
});