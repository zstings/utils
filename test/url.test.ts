import { expect, it, describe } from 'vitest';
import { getUrlParam, getUrlQuery, isURL, qsParse, qsStringify, reviseUrlQuery, setUrlQuery } from '@/index';

/**
 * @vitest-environment happy-dom
 */

describe('getUrlParam', () => {
  it('测试 getUrlParam 函数参数错误', () => {
    expect(getUrlParam('param')).toBe(null);
    expect(() => getUrlParam('param', 'invalidUrl')).toThrow('url 参数错误，不是有效的');
  });

  it('测试 getUrlParam 函数功能', () => {
    const url = 'https://example.com?param=value';
    const paramValue = getUrlParam('param', url);
    expect(paramValue).toEqual('value');
  });
});

describe('getUrlQuery', () => {
  it('测试 getUrlQuery 函数参数错误', () => {
    expect(() => getUrlQuery('notAnObject' as any)).toThrow('参数错误， 应该传入一个对象');
    expect(() => getUrlQuery({ url: 'invalidUrl' as any})).toThrow(`url 参数错误，不是有效的`);
    expect(() => getUrlQuery({ type: 'invalidType' as any})).toThrow(`type 参数错误， 应该传入一个字符串 'search' | 'hash' | 'all'`);
  });

  it('测试 getUrlQuery 函数功能', () => {
    const url = 'https://example.com?param1=value1&param2=value2#?hashParam1=hashValue1&hashParam2=hashValue2';
    const query = getUrlQuery({ url, type: 'all' });
    expect(query).toEqual({ param1: 'value1', param2: 'value2', hashParam1: 'hashValue1', hashParam2: 'hashValue2' });
  });
});

describe('isURL', () => {
  it('测试 isURL 函数参数错误', () => {
    expect(() => isURL(123 as any)).toThrow('参数必须是string');
  });

  it('测试 isURL 函数功能', () => {
    expect(isURL('https://example.com')).toBe(true);
    expect(isURL('invalidUrl')).toBe(false);
  });
});

describe('qsParse', () => {
  it('测试 qsParse 函数功能', () => {
    const query = 'param1=value1&param2=value2';
    const parsedQuery = qsParse(query);
    expect(parsedQuery).toEqual({ param1: 'value1', param2: 'value2' });
  });
});

describe('qsStringify', () => {
  it('测试 qsStringify 函数功能', () => {
    const queryObject = { param1: 'value1', param2: 'value2' };
    const stringifiedQuery = qsStringify(queryObject);
    expect(stringifiedQuery).toEqual('param1=value1&param2=value2');
  });
});

describe('reviseUrlQuery', () => {
  it('测试 reviseUrlQuery 函数参数错误', () => {
    expect(() => reviseUrlQuery('notAnObject')).toThrow('参数错误， 应该传入一个对象');
    expect(() => reviseUrlQuery({ search: 'notAnObject' as any})).toThrow(`search 参数错误， 应该传入一个对象`);
    expect(() => reviseUrlQuery({ hash: 'notAnObject' as any})).toThrow(`hash 参数错误， 应该传入一个对象`);
    expect(() => reviseUrlQuery({}, 'invalidUrl')).toThrow('url 参数错误，不是有效的');
  });

  it('测试 reviseUrlQuery 函数功能', () => {
    const url = 'https://example.com?param1=value1&param2=value2#?hashParam1=hashValue1&hashParam2=hashValue2';
    const revisedUrl = reviseUrlQuery({ search: { param1: 'newValue1' }, hash: { hashParam2: 'newHashValue2' } }, url);
    expect(revisedUrl).toBe('https://example.com/?param1=newValue1&param2=value2#?hashParam1=hashValue1&hashParam2=newHashValue2');
  });
});

describe('setUrlQuery', () => {
  it('测试 setUrlQuery 函数参数错误', () => {
    expect(() => setUrlQuery('invalidUrl')).toThrow('url 参数错误，不是有效的');
    expect(() => setUrlQuery('https://example.com', 'invalidType' as any)).toThrow(`type 参数错误， 应该传入一个字符串 'pushState' | 'replaceState'`);
  });

  it('测试 setUrlQuery 函数功能', () => {
    const url = 'http://localhost:3000?param1=value1';
    setUrlQuery(url);
    expect(window.location.href).toBe('http://localhost:3000/?param1=value1');
  });
});