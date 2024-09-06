import { expect, it, describe } from 'vitest'
import { isArray, isArrObj, isBasicType, isBoolean, isDate, isDom, isEmptyObject, isEqual, isFunction, isIncludeChinese, typeOf } from '@/index'

describe('isArray', () => {
  it('测试数组的情况', () => {
    expect(isArray([])).toBe(true);
    expect(isArray([1, 2])).toBe(true);
    expect(isArray(new Array())).toBe(true);
  });

  it('测试非数组的情况', () => {
    expect(isArray("not an array")).toBe(false);
    expect(isArray(123)).toBe(false);
    expect(isArray({})).toBe(false);
    expect(isArray(null)).toBe(false);
    expect(isArray(undefined)).toBe(false);
    expect(isArray(function() {})).toBe(false);
  });

  it('测试特殊对象的情况', () => {
    // 测试 arguments 对象
    expect(isArray((function() { return arguments; })())).toBe(false);

    // 测试类数组对象
    const arrayLike = { length: 2, 0: 'a', 1: 'b' };
    expect(isArray(arrayLike)).toBe(false);

    // 测试其他边缘情况
    expect(isArray(new Int8Array([1, 2]))).toBe(false); // 类型为 "Int8Array"
    expect(isArray(new Uint8Array([1, 2]))).toBe(false); // 类型为 "Uint8Array"
    expect(isArray(new Float64Array([1.0, 2.0]))).toBe(false); // 类型为 "Float64Array"
  });
});

describe('isEqual', () => {
  it('测试一个参数或者0个参数的情况', () => {
    expect(isEqual(1)).toBe(true);
    expect(isEqual('hello')).toBe(true);
    expect(isEqual(true)).toBe(true);
    expect(isEqual(null)).toBe(true);
    expect(isEqual(undefined)).toBe(true);
    expect(isEqual([])).toBe(true);
    expect(isEqual({})).toBe(true);
    expect(isEqual()).toBe(true);
  });

  it('测试相同的基本类型值', () => {
    expect(isEqual(1, 1)).toBe(true);
    expect(isEqual('hello', 'hello')).toBe(true);
    expect(isEqual(true, true)).toBe(true);
    expect(isEqual(null, null)).toBe(true);
    expect(isEqual(undefined, undefined)).toBe(true);
  });

  it('测试不同的基本类型值', () => {
    expect(isEqual(1, 2)).toBe(false);
    expect(isEqual('hello', 'world')).toBe(false);
    expect(isEqual(true, false)).toBe(false);
    expect(isEqual(null, undefined)).toBe(false);
    expect(isEqual(undefined, null)).toBe(false);
  });

  it('测试相同的数组', () => {
    expect(isEqual([1, 2, 3], [1, 2, 3])).toBe(true);
    expect(isEqual([], [])).toBe(true);
    expect(isEqual([1, 2, 3], [1, 2, 3])).toBe(true);
    expect(isEqual([1, 2, 3], [1, 2, 3])).toBe(true);
  });

  it('测试不同的数组', () => {
    expect(isEqual([1, 2, 3], [1, 2, 4])).toBe(false);
    expect(isEqual([1, 2, 3], [1, 2])).toBe(false);
    expect(isEqual([1, 2, 3], [1, 2, 3, 4])).toBe(false);
  });

  it('测试相同的对象', () => {
    expect(isEqual({ a: 1, b: 2 }, { a: 1, b: 2 })).toBe(true);
    expect(isEqual({}, {})).toBe(true);
    expect(isEqual({ a: 1, b: 2 }, { a: 1, b: 2 })).toBe(true);
    expect(isEqual({ a: { b: 1 } }, { a: { b: 1 } })).toBe(true);
  });

  it('测试不同的对象', () => {
    expect(isEqual({ a: 1, b: 2 }, { a: 1, b: 3 })).toBe(false);
    expect(isEqual({ a: 1, b: 2 }, { a: 1 })).toBe(false);
    expect(isEqual({ a: 1, b: 2 }, { a: 1, b: 2, c: 3 })).toBe(false);
    expect(isEqual({ a: { b: 1 } }, { a: { b: 2 } })).toBe(false);
  });

  it('测试嵌套结构', () => {
    expect(isEqual({ a: { b: 1, c: [1, 2, 3] } }, { a: { b: 1, c: [1, 2, 3] } })).toBe(true);
    expect(isEqual({ a: { b: 1, c: [1, 2, 3] } }, { a: { b: 1, c: [1, 2, 4] } })).toBe(false);
  });

  it('测试不同类型值的情况', () => {
    expect(isEqual([1, 2], { a: 1, b: 2 })).toBe(false);
    expect(isEqual({ a: 1 }, [1])).toBe(false);
    expect(isEqual({ a: 1 }, 1)).toBe(false);
    expect(isEqual([1], 1)).toBe(false);
  });
});

describe('isBasicType', () => {
  it('测试基本类型的情况', () => {
    expect(isBasicType(1)).toBe(true);
    expect(isBasicType('a')).toBe(true);
    expect(isBasicType(true)).toBe(true);
    expect(isBasicType(false)).toBe(true);
    expect(isBasicType(false)).toBe(true);
    expect(isBasicType(new String())).toBe(true);
    expect(isBasicType(undefined)).toBe(true);
    expect(isBasicType(null)).toBe(true);
    expect(isBasicType(Symbol())).toBe(true);
    expect(isBasicType(12n)).toBe(true);
  });
  it('测试引用类型的情况', () => {
    expect(isBasicType([])).toBe(false);
    expect(isBasicType({})).toBe(false);
    expect(isBasicType(function(){})).toBe(false);
  });
});

describe('isBoolean', () => {
  it('测试isBoolean', () => {
    expect(isBoolean(true)).toBe(true);
    expect(isBoolean(false)).toBe(true);
    expect(isBoolean(1)).toBe(false);
    expect(isBoolean('a')).toBe(false);
    expect(isBoolean([])).toBe(false);
    expect(isBoolean({})).toBe(false);
    expect(isBoolean(0)).toBe(false);
  });
});

describe('isArrObj', () => {
  it('测试isArrObj', () => {
    expect(isArrObj([])).toBe(false);
    expect(isArrObj([{}])).toBe(true);
    expect(isArrObj([1])).toBe(false);
  });
});

describe('isDate', () => {
  it('测试isDate', () => {
    expect(isDate(new Date())).toBe(true);
    expect(isDate([{}])).toBe(false);
    expect(isDate([1])).toBe(false);
  });
});

describe('isEmptyObject', () => {
  it('测试isEmptyObject', () => {
    expect(isEmptyObject({})).toBe(true);
    expect(isEmptyObject({a: 1})).toBe(false);
    expect(() => isEmptyObject(1 as any)).toThrow('传入参数不是Object');
  });
});

describe('isFunction', () => {
  it('测试isFunction', () => {
    expect(isFunction(function(){})).toBe(true);
    expect(isFunction(() => {})).toBe(true);
    expect(isFunction(1)).toBe(false);
    expect(isFunction('a')).toBe(false);
  });
});

describe('isIncludeChinese', () => {
  it('测试字符有中文的情况', () => {
    expect(isIncludeChinese('你好')).toBe(true);
    expect(isIncludeChinese('abc你好')).toBe(true);
  });
  it('测试字符没有中文的情况', () => {
    expect(isIncludeChinese('abc')).toBe(false);
    expect(isIncludeChinese('123')).toBe(false);
  });
  it('测试非字符的情况', () => {
    expect(isIncludeChinese(function(){} as any)).toBe(false);
    expect(isIncludeChinese(123 as any)).toBe(false);
    expect(isIncludeChinese()).toBe(false);
    expect(isIncludeChinese('a')).toBe(false);
  });
});

/**
 * @vitest-environment happy-dom
 */
describe('isDom-执行环境：happy-dom', () => {
  it('测试isDom', () => {
    expect(isDom(document.createElement('div'))).toBe(true);
    expect(isDom(document.querySelector('body'))).toBe(true);
    expect(isDom(document.querySelector('body')!.parentNode)).toBe(true);
    expect(isDom(document.querySelector('body')!.parentElement)).toBe(true);
    expect(isDom(1)).toBe(false);
    expect(isDom('a')).toBe(false);
    expect(typeOf(document.querySelector('body'))).toBe('HTMLBodyElement');
  });
});