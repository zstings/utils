import { expect, it, describe } from 'vitest';
import { extendHex, hexToRgb, isHex, isRgba, randomHex, randomRgba, rgbToHex, shrinkHex } from '@/index';

describe('extendHex', () => {
  it('测试合法的短十六进制颜色值', () => {
    expect(extendHex('#abc')).toEqual('#aabbcc');
  });

  it('测试合法的长十六进制颜色值', () => {
    expect(extendHex('#aabbcc')).toEqual('#aabbcc');
  });

  it('测试合法的长十六进制颜色值', () => {
    expect(extendHex('#aabbcc11')).toEqual('#aabbcc11');
  });

  it('测试不合法的输入', () => {
    expect(() => extendHex('notHex')).toThrow('无法识别正确的hex');
  });

  it('测试不合法的输入', () => {
    expect(() => extendHex('#uyi')).toThrow('无法识别正确的hex');
  });
});

describe('hexToRgb', () => {
  it('测试合法的短十六进制颜色值转换', () => {
    expect(hexToRgb('#abc')).toEqual('170,187,204');
  });

  it('测试合法的长十六进制颜色值转换', () => {
    expect(hexToRgb('#aabbcc')).toEqual('170,187,204');
  });

  it('测试合法的长十六进制颜色值转换支持透明度', () => {
    expect(hexToRgb('#aabbcc11')).toEqual('170,187,204,0.07');
  });

  it('测试不合法的输入', () => {
    expect(() => hexToRgb('notHex')).toThrow('无法识别正确的hex');
  });

  it('测试不合法的输入', () => {
    expect(() => hexToRgb('#fjk')).toThrow('无法识别正确的hex');
  });
});

describe('isHex', () => {
  it('测试合法的短十六进制颜色值', () => {
    expect(isHex('#abc')).toBe(true);
  });

  it('测试合法的长十六进制颜色值', () => {
    expect(isHex('#aabbcc')).toBe(true);
  });

  it('测试合法的带 alpha 的长十六进制颜色值', () => {
    expect(isHex('#aabbcc11')).toBe(true);
  });

  it('测试不合法的输入', () => {
    expect(isHex('notHex')).toBe(false);
  });
});

describe('isRgba', () => {
  it('测试合法的 rgba 颜色值', () => {
    expect(isRgba('255, 255, 255, 1')).toBe(true);
    expect(isRgba('0, 0, 0, 0')).toBe(true);
  });

  it('测试不合法的输入', () => {
    expect(isRgba('notRgba')).toBe(false);
    expect(isRgba('256, 0, 0, 0')).toBe(false);
    expect(isRgba('-1, 0, 0, 0')).toBe(false);
    expect(isRgba('0, 0, 0, -1')).toBe(false);
    expect(isRgba('0, 0, 0, 2')).toBe(false);
  });
});

describe('randomHex', () => {
  it('测试随机生成的十六进制颜色值格式', () => {
    const hex = randomHex();
    expect(isHex(hex)).toBe(true);
  });
});

describe('randomRgba', () => {
  it('测试随机生成的 rgba 颜色值格式', () => {
    const rgba = randomRgba();
    expect(isRgba(rgba)).toBe(true);
  });
});

describe('rgbToHex', () => {
  it('测试将合法 rgba 转换为十六进制颜色值', () => {
    expect(rgbToHex('255, 255, 255, 1')).toEqual('#ffffffff');
    expect(rgbToHex('0, 0, 0, 0')).toEqual('#00000000');
  });

  it('测试不合法的输入', () => {
    expect(() => rgbToHex('notRgba')).toThrow('无法识别正确的rgba');
  });
});

describe('shrinkHex', () => {
  it('测试缩短合法的十六进制颜色值', () => {
    expect(shrinkHex('#aabbcc')).toEqual('#abc');
    expect(shrinkHex('#aaaaaa')).toEqual('#aaa');
    expect(shrinkHex('#aabb11')).toEqual('#ab1');
    expect(shrinkHex('#aabb1111')).toEqual('#ab11');
  });

  it('测试不合法的输入', () => {
    expect(() => shrinkHex('notHex')).toThrow('无法识别正确的hex');
  });
});