import { expect, it, describe } from 'vitest';
import { debounce, once, throttle } from '@/index';

describe('debounce', () => {
  it('测试 debounce 函数参数类型错误', () => {
    expect(() => debounce('notAFunction' as any, 500)).toThrow('func不是function');
    expect(() => debounce(() => {}, 'notANumber'  as any)).toThrow('awit不是number');
    expect(() => debounce(() => {}, 500, { leading: 'notABoolean' as any })).toThrow('leading不是boolean');
    expect(() => debounce(() => {}, 500, { trailing: 'notABoolean' as any })).toThrow('trailing不是boolean');
  });

  it('测试 debounce 函数功能', () => {
    let count = 0;
    const increment = () => {
      count++;
    };
    const debouncedIncrement = debounce(increment, 200);
    debouncedIncrement();
    debouncedIncrement();
    debouncedIncrement();
    setTimeout(() => {
      expect(count).toBe(1);
    }, 300);
  });
});

describe('once', () => {
  it('测试 once 函数参数类型错误', () => {
    expect(() => once('notAFunction' as any)).toThrow('func不是function');
  });
  it('测试 once 函数功能', () => {
    let count = 0;
    const increment = () => {
      count++;
    };
    const onceIncrement = once(increment);
    onceIncrement();
    onceIncrement();
    onceIncrement();
    expect(count).toBe(1);
  });
});

describe('throttle', () => {
  it('测试 throttle 函数参数类型错误', () => {
    expect(() => throttle('notAFunction' as any, 500)).toThrow('func不是function');
    expect(() => throttle(() => {}, 'notANumber' as any)).toThrow('wait不是number');
    expect(() => throttle(() => {}, 500, 'notABoolean' as any)).toThrow('immediate不是boolean');
  });

  it('测试 throttle 函数功能', () => {
    let count = 0;
    const increment = () => {
      count++;
    };
    const throttledIncrement = throttle(increment, 200);
    throttledIncrement();
    throttledIncrement();
    throttledIncrement();
    setTimeout(() => {
      expect(count).toBeGreaterThanOrEqual(1);
    }, 300);
  });
});