import { expect, it, describe } from 'vitest';
import { byteSize, mask, removeHTML, upperFirst } from '@/index';

/**
 * @vitest-environment happy-dom
 */

describe('byteSize', () => {
  it('测试 byteSize 函数功能', () => {
    expect(byteSize('test string')).toBe(11);
    expect(byteSize('123')).toBe(3);
    expect(byteSize('你好')).toBe(6);
    expect(byteSize('𠮷')).toBe(4);
  });
});

describe('mask', () => {
  it('测试 mask 函数参数错误', () => {
    expect(() => mask('string', 'notANumber' as any)).toThrow('start 必须是数字');
    expect(() => mask('string', 0, 'notANumber' as any)).toThrow('length 必须是数字');
    expect(() => mask('string', 0, 0, 123 as any)).toThrow('mask 必须是字符串');
  });

  it('测试 mask 函数功能', () => {
    const maskedStr = mask('test string', 2, 4, '#');
    expect(maskedStr).toEqual('te####tring');
  });
});

describe('removeHTML', () => {
  it('测试 removeHTML 函数功能', () => {
    const cleanedStr = removeHTML('<p>test string</p>');
    expect(cleanedStr).toEqual('test string');
  });
});

describe('upperFirst', () => {
  it('测试 upperFirst 函数功能', () => {
    const upperCasedStr = upperFirst('test');
    expect(upperCasedStr).toEqual('Test');
  });
});