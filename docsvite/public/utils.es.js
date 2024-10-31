function a(t) {
  return Object.prototype.toString.call(t).slice(8, -1);
}
const q = "0.7.3";
function X() {
  return q;
}
function d(t) {
  return a(t) === "Array";
}
function P(t) {
  return /^1[3-9][\d]{9}$/.test(t.toString());
}
function Z(t) {
  return a(t) === "Location";
}
function m(t) {
  return t !== null && a(t) === "Object";
}
function z(t) {
  return a(t) === "Date";
}
function O(t) {
  return a(t) === "Function";
}
function v(t) {
  return a(t) === "Map";
}
function tt(t) {
  return a(t) === "Promise" && O(t.then) && O(t.catch);
}
function et(t) {
  return a(t) === "Set";
}
function f(t) {
  return a(t) === "String";
}
function nt(t) {
  return a(t) === "Symbol";
}
function l(t) {
  return a(t) === "Number";
}
function p(t) {
  return a(t) === "Boolean";
}
function k(t) {
  if (!m(t)) throw "传入参数不是Object";
  return !Object.keys(t).length;
}
function rt(t = "") {
  return new RegExp("\\p{sc=Han}", "gu").test(t);
}
function it(t) {
  return a(t).includes("Element");
}
function H(t) {
  return !d(t) || t.length == 0 ? !1 : t.every((e) => m(e));
}
function D(t) {
  return ["Null", "Undefined"].includes(a(t));
}
function y(t = "", e = "") {
  if (arguments.length == 1 && (e = t), t === e) return !0;
  if (t === null || e === null || t.constructor !== e.constructor) return !1;
  if (Array.isArray(t)) {
    if (!Array.isArray(e) || t.length !== e.length) return !1;
    for (let n = 0; n < t.length; n++)
      if (!y(t[n], e[n])) return !1;
    return !0;
  }
  if (typeof t == "object") {
    const n = Object.keys(t), r = Object.keys(e);
    if (n.length !== r.length) return !1;
    for (let i of n)
      if (!r.includes(i) || !y(t[i], e[i])) return !1;
    return !0;
  }
  return !1;
}
function $(t) {
  return ["String", "Number", "Boolean", "Null", "Undefined", "Symbol", "BigInt"].includes(a(t));
}
function R() {
  return /Android|iPhone|iPad/i.test(navigator.userAgent) ? "Mobile" : "Desktop";
}
function F() {
  return R() === "Mobile";
}
function B() {
  return F() && /Android/i.test(navigator.userAgent);
}
function ot() {
  return R() === "Desktop";
}
function st() {
  return F() && !B();
}
function ct() {
  return /QQ\//i.test(navigator.userAgent);
}
function at() {
  return /MicroMessenger\//i.test(navigator.userAgent);
}
function ut() {
  return /miniProgram/i.test(navigator.userAgent);
}
function ft() {
  return /Windows/i.test(navigator.userAgent);
}
function u(t, e = 2) {
  if (isNaN(Number(t))) throw "不是一个合法的数字";
  return Number(t).toString().padStart(e, "0");
}
function J(t) {
  if (isNaN(Number(t))) throw `${t}无法转换为数字`;
  return Number(t);
}
function Y(t, e = 2, n = !0) {
  const r = J(t);
  if (!p(n)) throw "isRound不是boolean";
  return parseFloat(n ? r.toFixed(e) : r.toFixed(e + 1).slice(0, -1));
}
function Q(t) {
  return Number.isInteger(t);
}
function w(t = /* @__PURE__ */ new Date()) {
  const e = t || t === 0 ? d(t) ? new Date(...t) : new Date(t) : /* @__PURE__ */ new Date();
  if (e.toString() === "Invalid Date") throw "Invalid Date";
  return e;
}
function T(t = /* @__PURE__ */ new Date(), e = "ms") {
  const n = w(t).getTime();
  return e == "s" ? n / 1e3 | 0 : n;
}
function N(t = /* @__PURE__ */ new Date(), e = "YYYY-MM-DD hh:mm:ss") {
  const n = w(t), r = u(n.getFullYear()), i = r.toString().substring(2), o = u(n.getMonth() + 1), s = u(n.getMonth() + 1, 1), c = u(n.getDate()), h = u(n.getDate(), 1), b = u(n.getHours()), _ = u(n.getHours(), 1), x = u(n.getMinutes()), E = u(n.getMinutes(), 1), I = u(n.getSeconds()), C = u(n.getSeconds(), 1);
  return e.replace("YYYY", r).replace("YY", i).replace("MM", o).replace("M", s).replace("DD", c).replace("D", h).replace("hh", b).replace("h", _).replace("mm", x).replace("m", E).replace("ss", I).replace("s", C);
}
function lt(t, e) {
  const n = t || (/* @__PURE__ */ new Date()).getFullYear(), r = e || (/* @__PURE__ */ new Date()).getMonth() + 1, i = new Date(n, r, 0);
  if (isNaN(i.getTime())) throw "Invalid Date";
  return i.getDate();
}
function ht(t = /* @__PURE__ */ new Date(), e = /* @__PURE__ */ new Date()) {
  const n = w(t).getTime(), i = w(e).getTime() - n;
  if (i <= 0) throw "startTime 必须大于 endTime";
  const o = [
    {
      num: 31536e6,
      lab: "年"
    },
    {
      num: 2592e6,
      lab: "月"
    },
    {
      num: 864e5,
      lab: "天"
    },
    {
      num: 36e5,
      lab: "小时"
    },
    {
      num: 6e4,
      lab: "分钟"
    },
    {
      num: 1e3,
      lab: "秒"
    }
  ];
  for (let s = 0; s < o.length; s++) {
    const c = Math.floor(i / o[s].num);
    if (c >= 1)
      return `${c}${o[s].lab}前`;
  }
  return "";
}
function mt(t = 1, e = { start: /* @__PURE__ */ new Date(), format: "YYYY-MM-DD", timestamp: !1 }) {
  if (!l(t)) throw "day 必须是数字";
  if (!m(e)) throw "option 必须是对象";
  const { start: n = /* @__PURE__ */ new Date(), format: r = "YYYY-MM-DD", timestamp: i = !1 } = e;
  if (!f(r)) throw "option.format 必须是字符串";
  if (!p(i)) throw "option.timestamp 必须是布尔值";
  const o = w(n).getTime(), s = o - ((t || 1) - 1) * 864e5;
  return i ? [T(s, r), T(o, r)] : [N(s, r), N(o, r)];
}
function dt(t, e = 500, n = { leading: !1, trailing: !0 }) {
  const { leading: r = !1, trailing: i = !0 } = n;
  let o = r, s = 0;
  if (e && !l(e)) throw "awit不是number";
  if (!p(r)) throw "leading不是boolean";
  if (!p(i)) throw "trailing不是boolean";
  return function(...c) {
    clearTimeout(s), o && (t.apply(this, c), o = !1), s = setTimeout(() => {
      o = r, i && t.apply(this, c);
    }, e);
  };
}
function gt(t, e = 500, n = !1) {
  let r = 0, i = n;
  if (e && !l(e)) throw "wait不是number";
  if (!p(n)) throw "immediate不是boolean";
  return function(...o) {
    i && (t.apply(this, o), i = !1), r || (r = setTimeout(() => {
      t.apply(this, o), r = 0;
    }, e));
  };
}
function pt(t) {
  let e = !1;
  return function(...n) {
    e || (e = !0, t.apply(this, n));
  };
}
function wt(t) {
  return t.toString().replace(/(\w)/, (n) => n.toLocaleUpperCase());
}
function bt(t) {
  const e = f(t) ? t : t.toString();
  return new Blob([e]).size;
}
function yt(t) {
  const e = f(t) ? t : t.toString(), n = /&(lt|gt|le|ge|nbsp|amp|quot|times|Alpha|Beta|Gamma|Delta|Epsilon|Zeta|Eta|Theta|Iota|Kappa|Lambda|MU|NU|Xi|Omicron|Pi|Rho|Sigma|Tau|Upsilon|Phi|Chi|Psi|Omega|alpha|beta|gamma|delta|epsilon|zeta|eta|theta|iota|kappa|lambda|mu|nu|xi|omicron|pi|rho|sigmaf|sigma|tau|upsilon|phi|chi|psi|omega|thetasym|upsih|piv|circ|tilde|ndash|permil|lsquo|rsquo|ldquo|rdquo|prime);/gi;
  return e.replace(/<[^>]+>/g, "").replace(n, "").trim();
}
function W(t, e = 0, n, r = "*") {
  const i = f(t) ? t : t.toString();
  if (!l(e)) throw "start 必须是数字";
  if ((n || n == 0) && !l(n)) throw "length 必须是数字";
  if (!f(r)) throw "mask 必须是字符串";
  const o = n || n == 0 ? i.slice(e, n + e) : i.slice(e);
  return i.replace(o, r.padEnd(o.length, r));
}
function St(t, e = 1) {
  if (!d(t)) throw "array参数需要Array";
  if (!l(e) || !Q(e) || e <= 0) throw "请检查size参数，必须符合大于0的整数";
  const n = [], r = Math.ceil(t.length / e);
  for (let i = 0; i < r; i++)
    n.push(t.slice(i * e, i * e + e));
  return n;
}
function Dt(t) {
  if (!d(t)) throw "array参数需要Array";
  return t.filter((e) => !!e);
}
function Mt(t) {
  if (!d(t)) throw "array传入参数需要Array";
  return Object.fromEntries(new Map(t));
}
function Ot(t, e) {
  if (!d(t)) throw "array传入参数需要Array";
  if (e != null && e.key && !f(e.key)) throw "key传入参数需要String";
  return e != null && e.key && e.deep != !0 && (e.deep = !0), e || (e = { deep: !0 }), e && e.deep ? t.reduce((n, r) => {
    if (e.key && r[e.key] == null) throw "key指定的属性不存在";
    return (e.key ? n.some((o) => y(o[e.key], r[e.key])) : n.some((o) => y(o, r))) || n.push(r), n;
  }, []) : [...new Set(t)];
}
function Tt(t = 1, e = 0) {
  const n = {};
  let r = n;
  for (let i = 0; i < t; i++) {
    r = r.data = {};
    for (let o = 0; o < e; o++)
      r[o] = o;
  }
  return n;
}
function L(t) {
  if (typeof t == "object") {
    const e = Array.isArray(t) ? [] : {};
    for (const n in t)
      e[n] = L(t[n]);
    return e;
  } else
    return t;
}
function Nt(t, e = []) {
  const n = L(t);
  return Object.keys(n).forEach((r) => {
    e.includes(r) && delete n[r];
  }), n;
}
function At(t, ...e) {
  return k(t) ? {} : Object.assign(t, ...e);
}
function Ut(t, ...e) {
  if (k(t)) return {};
  const n = Object.assign({}, t, ...e);
  return Object.keys(t).forEach((r) => {
    t[r] = n[r];
  }), t;
}
function jt(t, e) {
  if (!H(t)) throw "object 必须是数组对象";
  const n = {};
  return e.forEach((r) => {
    n[r] = t.reduce((i, o) => {
      const s = i + Number(o[r]);
      return isNaN(s) ? 0 : s;
    }, 0);
  }), n;
}
function S(t) {
  if (!f(t)) throw "参数必须是string";
  try {
    return new URL(t), !0;
  } catch {
    return !1;
  }
}
function kt(t, e = window.location.href) {
  var s;
  if (!S(e)) throw "url 参数错误，不是有效的";
  const n = new URL(e), r = new RegExp("(^|&)" + t + "=([^&]*)(&|$)"), i = n.search.substring(1).match(r), o = (s = n.hash.split("?")[1]) == null ? void 0 : s.match(r);
  return i != null ? decodeURIComponent(i[2]) : o != null ? decodeURIComponent(o[2]) : null;
}
function V(t) {
  try {
    return JSON.parse(t), !0;
  } catch {
    return !1;
  }
}
function A(t = "", e = !0) {
  const n = JSON.parse(JSON.stringify(Object.fromEntries(new URLSearchParams(t))));
  return e && Object.keys(n).forEach((r) => {
    V(n[r]) && (n[r].startsWith("{") || n[r].startsWith("[")) && (n[r] = JSON.parse(n[r]));
  }), n;
}
function U(t = {
  url: window.location.href,
  type: "all"
}) {
  if (D(t) || !m(t)) throw "参数错误， 应该传入一个对象";
  if (t.url || (t.url = window.location.href), t.type || (t.type = "all"), !S(t.url)) throw "url 参数错误，不是有效的";
  if (!f(t.type) || !["search", "hash", "all"].includes(t.type))
    throw "type 参数错误， 应该传入一个字符串 'search' | 'hash' | 'all'";
  const { url: e, type: n } = t, r = new URL(e), i = r.search.substring(1), o = r.hash.indexOf("?") >= 0 ? r.hash.slice(r.hash.indexOf("?") + 1) : "", s = n == "hash" ? {} : A(i), c = n == "search" ? {} : A(o);
  return Object.assign({}, s, c, s);
}
function j(t = {}, e = !1) {
  const n = Object.keys(t), r = [];
  for (let i = 0; i < n.length; i++) {
    const o = n[i], s = t[o];
    if (D(s)) continue;
    const c = $(s) ? encodeURIComponent(s) : encodeURIComponent(JSON.stringify(s));
    r.push(o + "=" + c);
  }
  return e ? decodeURIComponent(r.join("&")) : r.join("&");
}
function Rt(t, e = "pushState") {
  if (!S(t)) throw "url 参数错误，不是有效的";
  if (!f(e) || !["pushState", "replaceState"].includes(e))
    throw "type 参数错误， 应该传入一个字符串 'pushState' | 'replaceState'";
  if (history.state && history.state.current) {
    const n = new URL(t).pathname;
    history.state.current = n;
  }
  window.history[e](history.state, "", t);
}
function Ft(t, e = window.location.href) {
  if (D(t) || !m(t)) throw "参数错误， 应该传入一个对象";
  if (t.search && !m(t.search)) throw "search 参数错误， 应该传入一个对象";
  if (t.hash && !m(t.hash)) throw "hash 参数错误， 应该传入一个对象";
  if (!S(e)) throw "url 参数错误，不是有效的";
  const { origin: n, pathname: r } = new URL(e);
  let { search: i, hash: o } = new URL(e);
  if (t.search) {
    const s = U({ url: e, type: "search" }), c = j(Object.assign({}, s, t.search));
    i = c ? "?" + c : "";
  }
  if (t.hash) {
    const s = U({ url: e, type: "hash" }), c = j(Object.assign({}, s, t.hash));
    o = c ? (o.split("?")[0] || "#") + "?" + c : "";
  }
  return n + r + i + o;
}
function Yt(t, e) {
  const n = document.createElement("a"), r = window.URL.createObjectURL(e);
  n.style.display = "none", n.href = r, n.download = t, document.body.appendChild(n), n.click(), window.URL.revokeObjectURL(r), n.remove();
}
function Lt(t) {
  try {
    return JSON.parse(new TextDecoder("utf-8").decode(t));
  } catch {
    return new TextDecoder("utf-8").decode(t);
  }
}
function _t() {
  return (String(1e7) + -1e3 + -4e3 + -8e3 + -1e11).replace(
    /[018]/g,
    (e) => (Number(e) ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> Number(e) / 4).toString(16)
  );
}
function xt(t = {}, e) {
  let n = 0;
  const { rate: r = 4, num: i = 0, direction: o = "top", dom: s = document.scrollingElement } = t, c = { top: "scrollTop", left: "scrollLeft" };
  let h = s[c[o]];
  const b = function() {
    if (h = h + (i - h) / r, Math.abs(h - i) <= 1) {
      s[c[o]] = i, cancelAnimationFrame(n), e && e();
      return;
    }
    s[c[o]] = h, n = requestAnimationFrame(b);
  };
  b();
}
function Et(t) {
  if (!P(t)) throw "手机号格式不正确";
  return typeof t == "number" && (t = t.toString()), W(t, 3, 4);
}
function g(t = 0, e) {
  if (!l(t)) throw "min 必须整数";
  if (e && !l(e)) throw "max 必须整数";
  return t == null ? (t = 0, e = e || 1) : e == null && (e = t, t = 0), Math.round(Math.random() * (e - t) + t);
}
function It(t) {
  return new Promise((n, r) => {
    navigator.clipboard ? navigator.clipboard.writeText(t).then(() => n()).catch(() => {
      e(t, n, r);
    }) : e(t, n, r);
  });
  function e(n, r, i) {
    const o = document.createElement("textarea");
    document.body.appendChild(o), o.setAttribute("readonly", "readonly"), o.innerHTML = n, o.select(), o.setSelectionRange(0, o.innerHTML.length);
    const s = document.execCommand("copy");
    o.remove(), s ? r() : i("execCommand error");
  }
}
function Ct(t, e) {
  var s;
  const n = window.atob(t.replace(/data:([\s\S]+);base64,/, "")), r = e || ((s = t.match(/data:([\s\S]+);base64,/)) == null ? void 0 : s[1]) || "text/plain";
  let i = n.length;
  const o = new Uint8Array(i);
  for (; i--; ) o[i] = n.charCodeAt(i);
  return new Blob([o], { type: r });
}
function qt() {
  const t = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
  let e = "#";
  for (let n = 0; n < 6; n++)
    e += t[g(0, 15)];
  return e;
}
function Pt() {
  return `${g(0, 255)}, ${g(0, 255)}, ${g(0, 255)}, ${Y(g(0, 100) / 100)}`;
}
function M(t) {
  return t && !f(t) ? !1 : /#(([0-9a-f]{3})|([0-9a-f]{4})|([0-9a-f]{6})|([0-9a-f]{8}))$/gi.test(t);
}
function G(t) {
  if (!M(t)) throw "无法识别正确的hex";
  return t.length > 6 ? t : `#${t.substring(1).split("").map((e) => e += e).join("")}`;
}
function Ht(t) {
  if (!M(t)) throw "无法识别正确的hex";
  let e = t.substring(1);
  return e.length < 6 && (e = G(t).substring(1)), e = (e.match(/[0-9a-f]{2}/gi) || []).map((n, r) => r === 3 ? Y(parseInt(n, 16) / 255) : parseInt(n, 16)).join(","), e;
}
function K(t) {
  return t && !f(t) ? !1 : t.split(",").every((e, n) => n == 3 ? Number(e) * 255 >= 0 && Number(e) * 255 <= 255 : Number(e) >= 0 && Number(e) <= 255);
}
function $t(t) {
  if (!K(t)) throw "无法识别正确的rgba";
  return "#" + t.split(",").map((e, n) => n == 3 ? Math.round(Number(e) * 255).toString(16).padStart(2, "0") : Number(e).toString(16).padStart(2, "0")).join("");
}
function Bt(t) {
  if (!M(t)) throw "无法识别正确的hex";
  if (t.length < 6) return t;
  const e = t.substring(1).match(/[0-9a-f]{2}/gi) || [];
  return e.every((r) => r[0] == r[1]) ? "#" + e.map((r) => r[0]).join("") : t;
}
function Jt(t = document.body) {
  const e = t.requestFullscreen || t.mozRequestFullscreen || t.msRequestFullscreen || t.webkitRequestFullscreen;
  if (!e) throw "浏览器不支持全屏操作";
  e();
}
function Qt() {
  const t = document.exitFullscreen || document.msExitFullscreen || document.mozCancelFullScreen || document.webkitExitFullscreen;
  if (!t) throw "浏览器不支持全屏操作";
  t();
}
export {
  jt as arrObjSum,
  At as assign,
  Ut as assignMin,
  Ct as base64ToBlob,
  bt as byteSize,
  St as chunk,
  Dt as compact,
  It as copy,
  Tt as createData,
  w as days,
  dt as debounce,
  L as deepClone,
  R as detectDeviceType,
  Yt as downloadFile,
  Qt as exitFullscreen,
  G as extendHex,
  N as formats,
  Mt as fromPairs,
  Lt as gbkToUtf8,
  mt as getDataSection,
  lt as getMonthDays,
  _t as getUUID,
  kt as getUrlParam,
  U as getUrlQuery,
  Ht as hexToRgb,
  ht as howLongAgo,
  B as isAndroid,
  H as isArrObj,
  d as isArray,
  $ as isBasicType,
  p as isBoolean,
  z as isDate,
  ot as isDesktop,
  it as isDom,
  k as isEmptyObject,
  y as isEqual,
  O as isFunction,
  M as isHex,
  st as isIOS,
  rt as isIncludeChinese,
  Q as isInt,
  Z as isLocation,
  v as isMap,
  F as isMobile,
  D as isNullOrUndefined,
  l as isNumber,
  m as isObject,
  P as isPhone,
  tt as isPromise,
  ct as isQQ,
  K as isRgba,
  et as isSet,
  f as isString,
  nt as isSymbol,
  S as isURL,
  at as isWeixin,
  ut as isWeixinMini,
  ft as isWin,
  Jt as launchFullscreen,
  W as mask,
  Nt as omit,
  pt as once,
  u as padInt,
  Et as phoneEncrypt,
  A as qsParse,
  j as qsStringify,
  g as random,
  qt as randomHex,
  Pt as randomRgba,
  yt as removeHTML,
  Ft as reviseUrlQuery,
  $t as rgbToHex,
  xt as scrollTo,
  Rt as setUrlQuery,
  Bt as shrinkHex,
  gt as throttle,
  T as timeStamp,
  Y as toFixed,
  J as toNumber,
  a as typeOf,
  Ot as unique,
  wt as upperFirst,
  X as version
};
