import { expect, it, describe, vi, beforeEach, afterEach } from 'vitest';
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
  it('测试 base64ToBlob 函数功能', () => {
    const base64 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFhAJ/wlseKgAAAABJRU5ErkJggg==';
    const blob = base64ToBlob(base64, 'image/jpg');
    expect(blob instanceof Blob).toBe(true);
  });
  it('测试 base64ToBlob 函数功能', () => {
    const base64 = 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFhAJ/wlseKgAAAABJRU5ErkJggg==';
    const blob = base64ToBlob(base64);
    expect(blob instanceof Blob).toBe(true);
  });
});

describe('copy', () => {
  const originalClipboard = navigator.clipboard;

  beforeEach(() => {
    // 模拟 clipboard API
    const mockClipboard = {
      writeText: vi.fn(),
    };
    Object.defineProperty(navigator, 'clipboard', {
      value: mockClipboard,
      writable: true,
    });

    // 模拟 document.execCommand
    (document as any).execCommand = vi.fn();
  });

  afterEach(() => {
    // 恢复原始 clipboard
    Object.defineProperty(navigator, 'clipboard', {
      value: originalClipboard,
      writable: true,
    });
    delete (document as any).execCommand; // 在每个测试后删除模拟
  });

  it('应该成功使用 Clipboard API 复制文本', async () => {
    (navigator.clipboard.writeText as any).mockResolvedValueOnce();
    await expect(copy('test text')).resolves.toBeUndefined();
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith('test text');
  });

  it('当 Clipboard API 失败时，应该回退到 execCommand', async () => {
    (navigator.clipboard.writeText as any).mockRejectedValueOnce(new Error('Clipboard API 失败'));
    
    (document as any).execCommand.mockReturnValue(true);
    
    await expect(copy('test text')).resolves.toBeUndefined();
    expect((document as any).execCommand).toHaveBeenCalledWith('copy');
  });

  it('当 execCommand 失败时，应该拒绝', async () => {
    (navigator.clipboard.writeText as any).mockRejectedValueOnce(new Error('Clipboard API 失败'));
    
    (document as any).execCommand.mockReturnValue(false);
    
    await expect(copy('test text')).rejects.toEqual('execCommand error');
  });

  it('当 navigator.clipboard 不可用时，应该正常处理', async () => {
    Object.defineProperty(navigator, 'clipboard', {
      value: undefined,
      writable: true,
    });

    (document as any).execCommand.mockReturnValue(true);
    
    await expect(copy('test text')).resolves.toBeUndefined();
    expect((document as any).execCommand).toHaveBeenCalledWith('copy');
  });
});

describe('deepClone', () => {
  it('测试 deepClone 函数功能', () => {
    const obj = { key: 'value', nested: { innerKey: 'innerValue' }, key1: ['value1'] };
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
  it('应能解析有效的 JSON 字符串', () => {
    const json = '{"key":"value"}';
    const buffer = new TextEncoder().encode(json).buffer;
    const result = gbkToUtf8(buffer);
    expect(result).toEqual({ key: 'value' });
  });

  it('应能解码非 JSON 字符串', () => {
    const nonJson = 'This is a test string.';
    const buffer = new TextEncoder().encode(nonJson).buffer;
    const result = gbkToUtf8(buffer);
    expect(result).toBe(nonJson);
  });

  it('应处理空的 ArrayBuffer', () => {
    const buffer = new ArrayBuffer(0);
    const result = gbkToUtf8(buffer);
    expect(result).toBe('');
  });

  it('应优雅处理无效的 JSON', () => {
    const invalidJson = '{"key":value}'; // Missing quotes around value
    const buffer = new TextEncoder().encode(invalidJson).buffer;
    const result = gbkToUtf8(buffer);
    expect(result).toBe(invalidJson);
  });

  it('应能处理意外的 ArrayBuffer 输入', () => {
    const buffer = new TextEncoder().encode('{"key":"value"}').buffer;
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
  it('应返回 startNum 当 startNum 和 endNum 相等时', () => {
    const result = random(5, 5);
    expect(result).toBe(5);
  });

  it('应返回 min 或 max 当 startNum 和 endNum 相差 1 时', () => {
    const result1 = random(1, 2);
    const result2 = random(2, 1);
    expect(result1).toBeGreaterThanOrEqual(1);
    expect(result1).toBeLessThanOrEqual(2);
    expect(result2).toBeGreaterThanOrEqual(1);
    expect(result2).toBeLessThanOrEqual(2);
    // expect([result1, result2]).toContain(1);
    // expect([result1, result2]).toContain(2);
  });

  it('应在指定范围内返回随机数', () => {
    const result = random(1, 10);
    expect(result).toBeGreaterThanOrEqual(1);
    expect(result).toBeLessThanOrEqual(10);
  });

  it('应抛出错误当 startNum 不是数字时', () => {
    expect(() => random('a' as any, 10)).toThrow('min 必须整数');
  });

  it('应抛出错误当 endNum 不是数字时', () => {
    expect(() => random(1, 'b' as any)).toThrow('max 必须整数');
  });

  it('应处理负数范围并返回随机数', () => {
    const result = random(-5, -1);
    expect(result).toBeGreaterThanOrEqual(-5);
    expect(result).toBeLessThanOrEqual(-1);
  });

  it('应处理零为范围边界并返回随机数', () => {
    const result = random(0, 5);
    expect(result).toBeGreaterThanOrEqual(0);
    expect(result).toBeLessThanOrEqual(5);
  });

  it('应处理反向范围并返回随机数', () => {
    const result = random(10, 5);
    expect(result).toBeGreaterThanOrEqual(5);
    expect(result).toBeLessThanOrEqual(10);
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