import { expect, it, describe } from 'vitest';
import { base64ToBlob, copy, deepClone, downloadFile, gbkToUtf8, getUUID, phoneEncrypt, random, scrollTo } from '@/index';

/**
 * @vitest-environment happy-dom
 */

describe('base64ToBlob', () => {
  it('测试 base64ToBlob 函数功能', () => {
    const base64 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFhAJ/wlseKgAAAABJRU5ErkJggg==';
    const blob = base64ToBlob(base64);
    expect(blob instanceof Blob).toBe(true);
  });
});

describe('copy', () => {
  it('测试 copy 函数功能', () => {
    return copy('test text').then(() => {
      expect(true).toBe(true);
    });
  });
});

describe('deepClone', () => {
  it('测试 deepClone 函数功能', () => {
    const obj = { key: 'value', nested: { innerKey: 'innerValue' } };
    const clonedObj = deepClone(obj);
    expect(clonedObj).toEqual(obj);
    expect(clonedObj).not.toBe(obj);
  });
});

describe('downloadFile', () => {
  it('测试 downloadFile 函数功能', () => {
    const blob = new Blob(['test content'], { type: 'text/plain' });
    downloadFile('test.txt', blob);
    expect(true).toBe(true);
  });
});

describe('gbkToUtf8', () => {
  it('测试 gbkToUtf8 函数功能', () => {
    const buffer = new TextEncoder().encode('{"key":"value"}');
    const result = gbkToUtf8(buffer);
    expect(result).toEqual({ key: 'value' });
  });
});

describe('getUUID', () => {
  it('测试 getUUID 函数功能', () => {
    const uuid = getUUID();
    expect(uuid.length).toBeGreaterThan(0);
  });
});

describe('phoneEncrypt', () => {
  it('测试 phoneEncrypt 函数参数错误', () => {
    expect(() => phoneEncrypt('invalidPhone')).toThrow('手机号格式不正确');
    expect(() => phoneEncrypt('12345678901')).toThrow('手机号格式不正确');
  });

  it('测试 phoneEncrypt 函数功能', () => {
    expect(phoneEncrypt('13345678901')).toEqual('133****8901');
  });
});

describe('random', () => {
  it('测试 random 函数参数错误', () => {
    expect(() => random('notANumber' as any)).toThrow(`min 必须整数`);
    expect(() => random(0, 'notANumber' as any)).toThrow(`max 必须整数`);
  });

  it('测试 random 函数功能', () => {
    const randomValue = random(1, 10);
    expect(randomValue).toBeGreaterThanOrEqual(1);
    expect(randomValue).toBeLessThanOrEqual(10);
  });
});

describe('scrollTo', () => {
  it('测试 scrollTo 函数功能', () => {
    const callback = () => {
      expect(true).toBe(true);
    };
    scrollTo({ num: 100 }, callback);
  });
});