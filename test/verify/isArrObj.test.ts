import { expect, it, describe } from 'vitest'
import isArrObj from "@/verify/isArrObj"

describe('isArray', () => {
  it('测试isArrObj', () => {
    expect(isArrObj([])).toBe(false);
    expect(isArrObj([{}])).toBe(true);
    expect(isArrObj([1])).toBe(false);
  });
});