import { expect, it, describe } from 'vitest'
import version from "@/common/version"
import { version as ver } from '../../package.json'


describe('typeOf', () => {
  it('版本读取', () => {
    expect(version()).toBe(ver);
  });
});