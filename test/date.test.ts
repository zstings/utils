import { expect, it, describe } from 'vitest';
import { days, formats, getDataSection, getMonthDays, howLongAgo, timeStamp } from '@/index';

describe('days', () => {
  it('测试默认参数', () => {
    const date = days();
    expect(date instanceof Date).toBe(true);
  });

  it('测试传入数字参数', () => {
    const date = days(1609459200000);
    expect(date instanceof Date).toBe(true);
  });

  it('测试传入字符串参数', () => {
    const date = days('2021-01-01');
    expect(date instanceof Date).toBe(true);
  });

  it('测试传入 Date 对象参数', () => {
    const now = new Date();
    const date = days(now);
    expect(date instanceof Date).toBe(true);
    expect(date.getTime()).toEqual(now.getTime());
  });

  it('测试传入数组参数', () => {
    const date = days([2021, 1, 1]);
    expect(date instanceof Date).toBe(true);
    expect(date.getFullYear()).toBe(2021);
    expect(date.getMonth()).toBe(1);
    expect(date.getDate()).toBe(1);
  });

  it('测试无效日期参数', () => {
    expect(() => days('invalidDate')).toThrow('Invalid Date');
  });
});

describe('formats', () => {
  it('测试默认格式', () => {
    const date = new Date();
    const formattedDate = formats(date);
    expect(formattedDate).toMatch(/\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}/);
  });

  it('测试自定义格式', () => {
    const date = new Date();
    const formattedDate = formats(date, 'YYYY/MM/DD');
    expect(formattedDate).toMatch(/\d{4}\/\d{2}\/\d{2}/);
  });
});

describe('getDataSection', () => {
  it('测试默认参数', () => {
    const dataSection = getDataSection();
    expect(dataSection.length).toBe(2);
    expect(dataSection[0]).toMatch(/\d{4}-\d{2}-\d{2}/);
    expect(dataSection[1]).toMatch(/\d{4}-\d{2}-\d{2}/);
  });

  it('测试传入 day 参数', () => {
    const dataSection = getDataSection(5);
    expect(dataSection.length).toBe(2);
    expect(dataSection[0]).toMatch(/\d{4}-\d{2}-\d{2}/);
    expect(dataSection[1]).toMatch(/\d{4}-\d{2}-\d{2}/);
  });

  it('测试传入 option 参数', () => {
    const dataSection = getDataSection(3, {
      start: '2021-01-01',
      format: 'YYYY/MM/DD',
      timestamp: true
    });
    expect(dataSection.length).toBe(2);
    expect(dataSection[0]).toBeTypeOf('number');
    expect(dataSection[1]).toBeTypeOf('number');
  });

  it('测试错误参数类型', () => {
    expect(() => getDataSection('notNumber' as any)).toThrow('day 必须是数字');
    expect(() => getDataSection(1, 'notObject'  as any)).toThrow('option 必须是对象');
    expect(() => getDataSection(1, { format: 123 }  as any)).toThrow('option.format 必须是字符串');
    expect(() => getDataSection(1, { timestamp: 'notBoolean' }  as any)).toThrow('option.timestamp 必须是布尔值');
  });
});

describe('getMonthDays', () => {
  it('测试默认参数', () => {
    const daysInMonth = getMonthDays();
    expect(daysInMonth).toBeGreaterThan(0);
  });

  it('测试传入年份和月份参数', () => {
    const daysInMonth = getMonthDays(2024, 11);
    expect(daysInMonth).toBe(30);
  });

  it('测试无效日期', () => {
    expect(() => getMonthDays('invalidYear' as any, 'invalidMonth' as any)).toThrow('Invalid Date');
  });
});

describe('howLongAgo', () => {
  it('测试默认参数', () => {
    expect(() => howLongAgo()).toThrow('startTime 必须大于 endTime');
  });

  it('测试传入不同时间参数', () => {
    expect(howLongAgo('2024-10-01', '2024-11-01')).toMatch('1月前');
    expect(howLongAgo('2024-10-01', '2024-10-04')).toMatch('3天前');
  });

  it('测试 startTime 小于等于 endTime', () => {
    expect(() => howLongAgo('2024-11-01', '2024-10-01')).toThrow('startTime 必须大于 endTime');
  });
});

describe('timeStamp', () => {
  it('测试默认参数', () => {
    const timestamp = timeStamp();
    expect(timestamp).toBeGreaterThan(0);
  });

  it('测试传入不同参数和单位', () => {
    expect(timeStamp('', 'ms')).toBe(Date.now());
    expect(timeStamp('', 's')).toBe(Date.now() / 1000 | 0);
    // expect(timestampS).toBeGreaterThan(0);
  });

  it('测试指定具体日期下传入不同参数和单位', () => {
    expect(timeStamp('2022-10-12')).toBe(1665532800000);
    expect(timeStamp('2022-10-12', 'ms')).toBe(1665532800000);
    expect(timeStamp('2022-10-12', 's')).toBe(1665532800);
  });
});