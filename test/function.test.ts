import { expect, it, describe, beforeEach, afterEach, vi } from 'vitest';
import { debounce, once, throttle } from '@/index';

describe('debounce', () => {
  beforeEach(() => {
    vi.useFakeTimers(); // 启用虚拟定时器
  });

  afterEach(() => {
    vi.clearAllTimers(); // 清除所有定时器
    vi.useRealTimers(); // 恢复真实定时器
  });

  it('测试 debounce 函数参数类型错误', () => {
    expect(() => debounce('notAFunction' as any, 500)).toThrow('func不是function');
    expect(() => debounce(() => {}, 'notANumber' as any)).toThrow('awit不是number');
    expect(() => debounce(() => {}, 500, { leading: 'notABoolean' as any })).toThrow('leading不是boolean');
    expect(() => debounce(() => {}, 500, { trailing: 'notABoolean' as any })).toThrow('trailing不是boolean');
  });

  it('测试 debounce 函数功能 - 默认配置 (trailing: true)', () => {
    let count = 0;
    const increment = () => {
      count++;
    };
    const debouncedIncrement = debounce(increment, 500);
    
    debouncedIncrement();
    debouncedIncrement();
    debouncedIncrement();

    expect(count).toBe(0); // 还没有调用

    // 快进时间
    vi.advanceTimersByTime(500);
    expect(count).toBe(1); // 现在调用了一次
  });

  it('测试 debounce 函数功能 - leading: true, trailing: false', () => {
    let count = 0;
    const increment = () => {
      count++;
    };
    const debouncedIncrement = debounce(increment, 200, { leading: true, trailing: false });

    debouncedIncrement();
    debouncedIncrement();
    debouncedIncrement();

    expect(count).toBe(1); // 立即调用

    // 快进时间
    vi.advanceTimersByTime(300);
    expect(count).toBe(1); // 没有后续调用
  });

  it('测试 debounce 函数功能 - leading: false, trailing: true', () => {
    let count = 0;
    const increment = () => {
      count++;
    };
    const debouncedIncrement = debounce(increment, 200, { leading: false, trailing: true });

    debouncedIncrement();
    debouncedIncrement();
    debouncedIncrement();

    expect(count).toBe(0); // 还没有调用

    // 快进时间
    vi.advanceTimersByTime(300);
    expect(count).toBe(1); // 现在调用了一次
  });

  it('测试 debounce 函数功能 - leading: true, trailing: true', () => {
    let count = 0;
    const increment = () => {
      count++;
    };
    const debouncedIncrement = debounce(increment, 200, { leading: true, trailing: true });

    debouncedIncrement();
    debouncedIncrement();
    debouncedIncrement();

    expect(count).toBe(1); // 立即调用

    // 快进时间
    vi.advanceTimersByTime(300);
    expect(count).toBe(2); // 现在调用了一次
  });

  it('测试 debounce 函数功能 - leading: false, trailing: false', () => {
    let count = 0;
    const increment = () => {
      count++;
    };
    const debouncedIncrement = debounce(increment, 200, { leading: false, trailing: false });

    debouncedIncrement();
    debouncedIncrement();
    debouncedIncrement();

    expect(count).toBe(0); // 还没有调用

    // 快进时间
    vi.advanceTimersByTime(300);
    expect(count).toBe(0); // 仍然没有调用
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

  beforeEach(() => {
    vi.useFakeTimers(); // 启用虚拟定时器
  });

  afterEach(() => {
    vi.clearAllTimers(); // 清除所有定时器
    vi.useRealTimers(); // 恢复真实定时器
  });

  it('测试 throttle 函数参数类型错误', () => {
    expect(() => throttle('notAFunction' as any, 500)).toThrow('func不是function');
    expect(() => throttle(() => {}, 'notANumber' as any)).toThrow('wait不是number');
    expect(() => throttle(() => {}, 500, 'notABoolean' as any)).toThrow('immediate不是boolean');
  });

  it('测试 throttle 函数功能 - 默认配置 (immediate: false)', () => {
    let count = 0;
    const increment = () => {
      count++;
    };
    const throttledIncrement = throttle(increment, 500);

    throttledIncrement(); // 第一次调用
    throttledIncrement(); // 第二次调用，应该被忽略

    expect(count).toBe(0); // 还没有调用

    // 快进时间
    vi.advanceTimersByTime(500);
    throttledIncrement(); // 现在调用应该被执行

    expect(count).toBe(1); // 调用了一次
  });

  it('测试 throttle 函数功能 - immediate: true', () => {
    let count = 0;
    const increment = () => {
      count++;
    };
    const throttledIncrement = throttle(increment, 500, true);

    throttledIncrement(); // 第一次调用，应该立即执行
    throttledIncrement(); // 第二次调用，应该被忽略

    expect(count).toBe(1); // 立即调用了一次

    // 快进时间
    vi.advanceTimersByTime(500);
    throttledIncrement(); // 现在调用应该被执行

    expect(count).toBe(2); // 调用了两次
  });

  it('测试 throttle 函数功能 - 连续调用', () => {
    let count = 0;
    const increment = () => {
      count++;
    };
    const throttledIncrement = throttle(increment, 300);

    throttledIncrement(); // 第一次调用
    throttledIncrement(); // 第二次调用，应该被忽略
    throttledIncrement(); // 第三次调用，应该被忽略

    expect(count).toBe(0); // 还没有调用

    // 快进时间
    vi.advanceTimersByTime(300);
    throttledIncrement(); // 现在调用应该被执行

    expect(count).toBe(1); // 调用了一次

    // 快进时间再次
    vi.advanceTimersByTime(300);
    throttledIncrement(); // 现在调用应该被执行

    expect(count).toBe(2); // 调用了两次
  });

  it('测试 throttle 函数功能 - 不再立即执行', () => {
    let count = 0;
    const increment = () => {
      count++;
    };
    const throttledIncrement = throttle(increment, 300, true);

    throttledIncrement(); // 第一次调用，立即执行
    throttledIncrement(); // 第二次调用，应该被忽略

    expect(count).toBe(1); // 立即调用了一次

    // 快进时间
    vi.advanceTimersByTime(300);
    throttledIncrement(); // 现在调用应该被执行

    expect(count).toBe(2); // 调用了两次

    // 再次调用
    throttledIncrement(); // 立即执行
    expect(count).toBe(2); // 立即调用了一次, 上次调用后在立即执行了，并没有延迟，调用被忽略

    // 快进时间
    vi.advanceTimersByTime(300);
    throttledIncrement(); // 现在调用应该被执行
    expect(count).toBe(3); // 立即调用了一次
  });
  
});
