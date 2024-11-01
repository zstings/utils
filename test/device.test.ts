import { expect, it, describe } from 'vitest';
import { detectDeviceType, isAndroid, isDesktop, isIOS, isMobile, isQQ, isWeixin, isWeixinMini, isWin } from '@/index';

describe('detectDeviceType', () => {
  it('测试移动端设备', () => {
    const mobileUserAgent = 'Mozilla/5.0 (iPhone; CPU iPhone OS 12_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/12.0 Mobile/15A372 Safari/604.1';
    global.navigator = { userAgent: mobileUserAgent };
    expect(detectDeviceType()).toEqual('Mobile');
  });

  it('测试桌面端设备', () => {
    const desktopUserAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36';
    global.navigator = { userAgent: desktopUserAgent };
    expect(detectDeviceType()).toEqual('Desktop');
  });
});

describe('isAndroid', () => {
  it('测试 Android 设备', () => {
    const androidUserAgent = 'Mozilla/5.0 (Linux; Android 11; SM-G988U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Mobile Safari/537.36';
    global.navigator = { userAgent: androidUserAgent };
    expect(isAndroid()).toBe(true);
    expect(isMobile()).toBe(true);
    expect(isIOS()).toBe(false);
    expect(isDesktop()).toBe(false);
  });

  it('测试非 Android 设备', () => {
    const nonAndroidUserAgent = 'Mozilla/5.0 (iPhone; CPU iPhone OS 12_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/12.0 Mobile/15A372 Safari/604.1';
    global.navigator = { userAgent: nonAndroidUserAgent };
    expect(isAndroid()).toBe(false);
    expect(isMobile()).toBe(true);
    expect(isIOS()).toBe(true);
    expect(isDesktop()).toBe(false);
  });
});

describe('isDesktop', () => {
  it('测试桌面端设备', () => {
    const desktopUserAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36';
    global.navigator = { userAgent: desktopUserAgent };
    expect(isDesktop()).toBe(true);
    expect(isMobile()).toBe(false);
  });

  it('测试移动端设备', () => {
    const mobileUserAgent = 'Mozilla/5.0 (iPhone; CPU iPhone OS 12_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/12.0 Mobile/15A372 Safari/604.1';
    global.navigator = { userAgent: mobileUserAgent };
    expect(isDesktop()).toBe(false);
    expect(isMobile()).toBe(true);
  });
});

describe('isIOS', () => {
  it('测试 iOS 设备', () => {
    const iosUserAgent = 'Mozilla/5.0 (iPhone; CPU iPhone OS 12_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/12.0 Mobile/15A372 Safari/604.1';
    global.navigator = { userAgent: iosUserAgent };
    expect(isIOS()).toBe(true);
    expect(isMobile()).toBe(true);
    expect(isAndroid()).toBe(false);
    expect(isDesktop()).toBe(false);
  });

  it('测试非 iOS 设备', () => {
    const nonIosUserAgent = 'Mozilla/5.0 (Linux; Android 11; SM-G988U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Mobile Safari/537.36';
    global.navigator = { userAgent: nonIosUserAgent };
    expect(isIOS()).toBe(false);
    expect(isMobile()).toBe(true);
    expect(isAndroid()).toBe(true);
    expect(isDesktop()).toBe(false);
  });
});

describe('isMobile', () => {
  it('测试移动端设备', () => {
    const mobileUserAgent = 'Mozilla/5.0 (iPhone; CPU iPhone OS 12_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/12.0 Mobile/15A372 Safari/604.1';
    global.navigator = { userAgent: mobileUserAgent };
    expect(isMobile()).toBe(true);
    expect(isDesktop()).toBe(false);
  });

  it('测试桌面端设备', () => {
    const desktopUserAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36';
    global.navigator = { userAgent: desktopUserAgent };
    expect(isMobile()).toBe(false);
    expect(isDesktop()).toBe(true);
  });
});

describe('isQQ', () => {
  it('测试 QQ 浏览器', () => {
    const qqUserAgent = 'Mozilla/5.0 (Linux; Android 11; SM-G988U) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.71 Mobile Safari/537.36 QQ/11.0.0';
    global.navigator = { userAgent: qqUserAgent };
    expect(isQQ()).toBe(true);
  });

  it('测试非 QQ 浏览器', () => {
    const nonQqUserAgent = 'Mozilla/5.0 (iPhone; CPU iPhone OS 12_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/12.0 Mobile/15A372 Safari/604.1';
    global.navigator = { userAgent: nonQqUserAgent };
    expect(isQQ()).toBe(false);
  });
});

describe('isWeixin', () => {
  it('测试微信浏览器', () => {
    const weixinUserAgent = 'Mozilla/5.0 (Linux; Android 11; SM-G988U) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.71 Mobile Safari/537.36 MicroMessenger/8.0.33';
    global.navigator = { userAgent: weixinUserAgent };
    expect(isWeixin()).toBe(true);
  });

  it('测试非微信浏览器', () => {
    const nonWeixinUserAgent = 'Mozilla/5.0 (iPhone; CPU iPhone OS 12_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/12.0 Mobile/15A372 Safari/604.1';
    global.navigator = { userAgent: nonWeixinUserAgent };
    expect(isWeixin()).toBe(false);
  });
});

describe('isWeixinMini', () => {
  it('测试微信小程序', () => {
    const weixinMiniUserAgent = 'Mozilla/5.0 (Linux; Android 11; SM-G988U) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.71 Mobile Safari/537.36 miniProgram';
    global.navigator = { userAgent: weixinMiniUserAgent };
    expect(isWeixinMini()).toBe(true);
  });

  it('测试非微信小程序', () => {
    const nonWeixinMiniUserAgent = 'Mozilla/5.0 (iPhone; CPU iPhone OS 12_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/12.0 Mobile/15A372 Safari/604.1';
    global.navigator = { userAgent: nonWeixinMiniUserAgent };
    expect(isWeixinMini()).toBe(false);
  });
});

describe('isWin', () => {
  it('测试 Windows 设备', () => {
    const winUserAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36';
    global.navigator = { userAgent: winUserAgent };
    expect(isWin()).toBe(true);
  });

  it('测试非 Windows 设备', () => {
    const nonWinUserAgent = 'Mozilla/5.0 (Linux; Android 11; SM-G988U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Mobile Safari/537.36';
    global.navigator = { userAgent: nonWinUserAgent };
    expect(isWin()).toBe(false);
  });
});