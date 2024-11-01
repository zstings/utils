import { expect, it, describe } from 'vitest'
import {typeOf, version} from "@/index"
import { version as ver } from '../package.json'


describe('typeOf', () => {
  it('测试各种数据的类型获取情况', () => {
    expect(typeOf([])).toBe('Array');
    expect(typeOf("string")).toBe('String');
    expect(typeOf(123)).toBe('Number');
    expect(typeOf({})).toBe('Object');
    expect(typeOf(null)).toBe('Null');
    expect(typeOf(undefined)).toBe('Undefined');
    expect(typeOf(function() {})).toBe('Function');
    expect(typeOf(new Date())).toBe('Date');
    expect(typeOf(new RegExp(''))).toBe('RegExp');
    expect(typeOf(new Error())).toBe('Error');
    expect(typeOf(new Int8Array([1, 2]))).toBe('Int8Array');
    expect(typeOf(new Uint8Array([1, 2]))).toBe('Uint8Array');
    expect(typeOf(new Float64Array([1.0, 2.0]))).toBe('Float64Array');
  });
});

describe('version', () => {
  it('版本读取', () => {
    expect(version()).toBe(ver);
  });
});