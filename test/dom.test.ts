import { expect, it, describe } from 'vitest';
import { exitFullscreen, launchFullscreen } from '@/index';

/**
 * @vitest-environment happy-dom
 */

describe('exitFullscreen', () => {
  it('测试退出全屏', () => {
    // 模拟不支持全屏操作的情况，应该抛出错误
    const originalExitFullscreen = document.exitFullscreen;
    document.exitFullscreen = null as any;
    expect(() => exitFullscreen()).toThrow('浏览器不支持全屏操作');

    // 模拟支持全屏操作的情况
    document.exitFullscreen = () => Promise.resolve();
    expect(() => exitFullscreen()).not.toThrow();
    document.exitFullscreen = originalExitFullscreen;
  });
});

describe('launchFullscreen', () => {
  it('测试进入全屏', () => {
    // 模拟不支持全屏操作的情况，应该抛出错误
    const originalRequestFullscreen = document.body.requestFullscreen;
    document.body.requestFullscreen = null as any;
    expect(() => launchFullscreen()).toThrow('浏览器不支持全屏操作');

    // 模拟支持全屏操作的情况
    document.body.requestFullscreen = () => Promise.resolve();
    expect(() => launchFullscreen()).not.toThrow();
    document.body.requestFullscreen = originalRequestFullscreen;
  });
});