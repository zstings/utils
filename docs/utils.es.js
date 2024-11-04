function c(e) {
  return Object.prototype.toString.call(e).slice(8, -1);
}
const q = "0.8.0";
function Z() {
  return q;
}
function d(e) {
  return c(e) === "Array";
}
function P(e) {
  return /^1[3-9][\d]{9}$/.test(e.toString());
}
function z(e) {
  return c(e) === "Location";
}
function u(e) {
  return e !== null && c(e) === "Object";
}
function v(e) {
  return c(e) === "Date";
}
function p(e) {
  return c(e) === "Function";
}
function ee(e) {
  return c(e) === "Map";
}
function te(e) {
  return c(e) === "Promise" && p(e.then) && p(e.catch);
}
function ne(e) {
  return c(e) === "Set";
}
function h(e) {
  return c(e) === "String";
}
function re(e) {
  return c(e) === "Symbol";
}
function l(e) {
  return c(e) === "Number";
}
function g(e) {
  return c(e) === "Boolean";
}
function R(e) {
  if (!u(e)) throw "传入参数不是Object";
  return !Object.keys(e).length;
}
function ie(e = "") {
  return new RegExp("\\p{sc=Han}", "gu").test(e);
}
function oe(e) {
  return c(e).includes("Element");
}
function H(e) {
  return !d(e) || e.length == 0 ? !1 : e.every((t) => u(t));
}
function O(e) {
  return ["Null", "Undefined"].includes(c(e));
}
function S(e = "", t = "") {
  if (arguments.length == 1 && (t = e), e === t) return !0;
  if (e === null || t === null || e.constructor !== t.constructor) return !1;
  if (Array.isArray(e)) {
    if (!Array.isArray(t) || e.length !== t.length) return !1;
    for (let n = 0; n < e.length; n++)
      if (!S(e[n], t[n])) return !1;
    return !0;
  }
  if (typeof e == "object") {
    const n = Object.keys(e), r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (let i of n)
      if (!r.includes(i) || !S(e[i], t[i])) return !1;
    return !0;
  }
  return !1;
}
function B(e) {
  return ["String", "Number", "Boolean", "Null", "Undefined", "Symbol", "BigInt"].includes(c(e));
}
function $(e) {
  try {
    return JSON.parse(e), !0;
  } catch {
    return !1;
  }
}
function F() {
  return /Android|iPhone|iPad/i.test(navigator.userAgent) ? "Mobile" : "Desktop";
}
function Y() {
  return F() === "Mobile";
}
function J() {
  return Y() && /Android/i.test(navigator.userAgent);
}
function se() {
  return F() === "Desktop";
}
function ce() {
  return Y() && !J();
}
function ae() {
  return /QQ\//i.test(navigator.userAgent);
}
function ue() {
  return /MicroMessenger\//i.test(navigator.userAgent);
}
function fe() {
  return /miniProgram/i.test(navigator.userAgent);
}
function le() {
  return /Windows/i.test(navigator.userAgent);
}
function f(e, t = 2) {
  if (isNaN(Number(e))) throw "不是一个合法的数字";
  return Number(e).toString().padStart(t, "0");
}
function Q(e) {
  if (isNaN(Number(e))) throw `${e}无法转换为数字`;
  return Number(e);
}
function E(e, t = 2, n = !0) {
  const r = Q(e);
  if (!g(n)) throw "isRound不是boolean";
  return parseFloat(n ? r.toFixed(t) : r.toFixed(t + 1).slice(0, -1));
}
function V(e) {
  return Number.isInteger(e);
}
function b(e = /* @__PURE__ */ new Date()) {
  const t = e || e === 0 ? d(e) ? new Date(...e) : new Date(e) : /* @__PURE__ */ new Date();
  if (t.toString() === "Invalid Date") throw "Invalid Date";
  return t;
}
function A(e = /* @__PURE__ */ new Date(), t = "ms") {
  const n = b(e).getTime();
  return t == "s" ? n / 1e3 | 0 : n;
}
function T(e = /* @__PURE__ */ new Date(), t = "YYYY-MM-DD hh:mm:ss") {
  const n = b(e), r = f(n.getFullYear()), i = r.toString().substring(2), o = f(n.getMonth() + 1), s = f(n.getMonth() + 1, 1), a = f(n.getDate()), m = f(n.getDate(), 1), y = f(n.getHours()), L = f(n.getHours(), 1), k = f(n.getMinutes()), I = f(n.getMinutes(), 1), C = f(n.getSeconds()), _ = f(n.getSeconds(), 1);
  return t.replace("YYYY", r).replace("YY", i).replace("MM", o).replace("M", s).replace("DD", a).replace("D", m).replace("hh", y).replace("h", L).replace("mm", k).replace("m", I).replace("ss", C).replace("s", _);
}
function he(e, t) {
  const n = e || (/* @__PURE__ */ new Date()).getFullYear(), r = t || (/* @__PURE__ */ new Date()).getMonth() + 1, i = new Date(n, r, 0);
  if (isNaN(i.getTime())) throw "Invalid Date";
  return i.getDate();
}
function me(e = /* @__PURE__ */ new Date(), t = /* @__PURE__ */ new Date()) {
  const n = b(e).getTime(), i = b(t).getTime() - n;
  if (i < 0) throw "startTime 必须大于 endTime";
  return i >= 31536e6 ? Math.floor(i / 31536e6) + "年前" : i >= 2592e6 ? Math.floor(i / 2592e6) + "月前" : i >= 864e5 ? Math.floor(i / 864e5) + "天前" : i >= 36e5 ? Math.floor(i / 36e5) + "小时前" : i >= 6e4 ? Math.floor(i / 6e4) + "分钟前" : i >= 1e3 ? Math.floor(i / 1e3) + "秒前" : "刚刚";
}
function de(e = 1, t = { start: /* @__PURE__ */ new Date(), format: "YYYY-MM-DD", timestamp: !1 }) {
  if (!l(e)) throw "day 必须是数字";
  if (!u(t)) throw "option 必须是对象";
  const { start: n = /* @__PURE__ */ new Date(), format: r = "YYYY-MM-DD", timestamp: i = !1 } = t;
  if (!h(r)) throw "option.format 必须是字符串";
  if (!g(i)) throw "option.timestamp 必须是布尔值";
  const o = b(n).getTime(), s = o - (e - 1) * 864e5;
  return i ? [A(s, r), A(o, r)] : [T(s, r), T(o, r)];
}
function we(e, t = 500, n = { leading: !1, trailing: !0 }) {
  const { leading: r = !1, trailing: i = !0 } = n;
  let o = r, s = 0;
  if (!p(e)) throw "func不是function";
  if (t && !l(t)) throw "awit不是number";
  if (!g(r)) throw "leading不是boolean";
  if (!g(i)) throw "trailing不是boolean";
  return function(...a) {
    clearTimeout(s), o && (e.apply(this, a), o = !1), s = setTimeout(() => {
      o = r, i && e.apply(this, a);
    }, t);
  };
}
function pe(e, t = 500, n = !1) {
  let r = 0, i = n;
  if (!p(e)) throw "func不是function";
  if (t && !l(t)) throw "wait不是number";
  if (!g(n)) throw "immediate不是boolean";
  return function(...o) {
    i && (e.apply(this, o), i = !1), r || (r = setTimeout(() => {
      e.apply(this, o), r = 0;
    }, t));
  };
}
function ge(e) {
  if (!p(e)) throw "func不是function";
  let t = !1;
  return function(...n) {
    t || (t = !0, e.apply(this, n));
  };
}
function be(e) {
  return e.toString().replace(/(\w)/, (n) => n.toLocaleUpperCase());
}
function ye(e) {
  return new Blob([e.toString()]).size;
}
function Se(e) {
  const t = /&(lt|gt|le|ge|nbsp|amp|quot|times|Alpha|Beta|Gamma|Delta|Epsilon|Zeta|Eta|Theta|Iota|Kappa|Lambda|MU|NU|Xi|Omicron|Pi|Rho|Sigma|Tau|Upsilon|Phi|Chi|Psi|Omega|alpha|beta|gamma|delta|epsilon|zeta|eta|theta|iota|kappa|lambda|mu|nu|xi|omicron|pi|rho|sigmaf|sigma|tau|upsilon|phi|chi|psi|omega|thetasym|upsih|piv|circ|tilde|ndash|permil|lsquo|rsquo|ldquo|rdquo|prime);/gi;
  return e.toString().replace(/<[^>]+>/g, "").replace(t, "").trim();
}
function W(e, t = 0, n = 1 / 0, r = "*") {
  if (!l(t)) throw "start 必须是数字";
  if (!l(n)) throw "length 必须是数字";
  if (!h(r)) throw "mask 必须是字符串";
  e = e.toString();
  const i = e.slice(t, n + t);
  return e.replace(i, "".padEnd(i.length, r));
}
function Me(e, t = 1) {
  if (!d(e)) throw "array参数需要Array";
  if (!l(t) || !V(t) || t <= 0) throw "请检查size参数，必须符合大于0的整数";
  const n = [], r = Math.ceil(e.length / t);
  for (let i = 0; i < r; i++)
    n.push(e.slice(i * t, i * t + t));
  return n;
}
function De(e) {
  if (!d(e)) throw "array参数需要Array";
  return e.filter((t) => !!t);
}
function Oe(e) {
  if (!d(e)) throw "array传入参数需要Array";
  return Object.fromEntries(new Map(e));
}
function je(e, t) {
  if (!d(e)) throw "array传入参数需要Array";
  if (t != null && t.key && !h(t.key)) throw "key传入参数需要String";
  return t != null && t.key && t.deep != !0 && (t.deep = !0), t || (t = { deep: !0 }), t && t.deep ? e.reduce((n, r) => {
    if (t.key && r[t.key] == null) throw "key指定的属性不存在";
    return (t.key ? n.some((o) => S(o[t.key], r[t.key])) : n.some((o) => S(o, r))) || n.push(r), n;
  }, []) : [...new Set(e)];
}
function Ae(e = 1, t = 0) {
  const n = {};
  let r = n;
  for (let i = 0; i < e; i++) {
    r = r.data = {};
    for (let o = 0; o < t; o++)
      r[o] = o;
  }
  return n;
}
function M(e) {
  if (typeof e == "object") {
    const t = Array.isArray(e) ? [] : {};
    for (const n in e)
      t[n] = M(e[n]);
    return t;
  } else
    return e;
}
function Te(e, t) {
  if (!u(e)) throw "target参数必须是对象";
  return e = M(e), (t || []).forEach((n) => delete e[n]), e;
}
function Ue(e, ...t) {
  if (!u(e)) throw "target参数必须是对象";
  return R(e) ? {} : Object.assign(e, ...t);
}
function xe(e, ...t) {
  if (!u(e)) throw "target参数必须是对象";
  if (R(e)) return {};
  const n = Object.assign({}, e, ...t);
  return Object.keys(e).forEach((r) => e[r] = n[r]), e;
}
function Ne(e, t) {
  if (!H(e)) throw "object 必须是数组对象";
  const n = {};
  return t.forEach((r) => {
    n[r] = e.reduce((i, o) => i + (isNaN(o[r]) ? 0 : Number(o[r])), 0);
  }), n;
}
function Re(e, t = []) {
  if (!u(e)) throw new Error("target参数必须是object");
  if (!d(t)) throw new Error("keys参数必须是array");
  return t.length == 0 ? {} : (e = M(e), Object.keys(e).forEach((n) => {
    t.includes(n) || delete e[n];
  }), e);
}
function G(e, t = 0) {
  if (!u(e)) throw new Error("target参数必须是object");
  return t != 1 && (e = M(e)), Object.keys(e).forEach((n) => {
    c(e[n]) == "String" && (e[n] = ""), c(e[n]) == "Number" && (e[n] = 0), c(e[n]) == "Boolean" && (e[n] = !1), c(e[n]) == "Array" && (e[n] = []), c(e[n]) == "Object" && G(e[n], 1);
  }), e;
}
function D(e) {
  if (!h(e)) throw "参数必须是string";
  try {
    return new URL(e), !0;
  } catch {
    return !1;
  }
}
function Fe(e, t = window.location.href) {
  var s;
  if (!D(t)) throw "url 参数错误，不是有效的";
  const n = new URL(t), r = new RegExp("(^|&)" + e + "=([^&]*)(&|$)"), i = n.search.substring(1).match(r), o = (s = n.hash.split("?")[1]) == null ? void 0 : s.match(r);
  return i != null ? decodeURIComponent(i[2]) : o != null ? decodeURIComponent(o[2]) : null;
}
function U(e = "", t = !0) {
  const n = JSON.parse(JSON.stringify(Object.fromEntries(new URLSearchParams(e))));
  return t && Object.keys(n).forEach((r) => {
    $(n[r]) && (n[r].startsWith("{") || n[r].startsWith("[")) && (n[r] = JSON.parse(n[r]));
  }), n;
}
function x(e = {
  url: window.location.href,
  type: "all"
}) {
  if (O(e) || !u(e)) throw "参数错误， 应该传入一个对象";
  if (e.url || (e.url = window.location.href), e.type || (e.type = "all"), !D(e.url)) throw "url 参数错误，不是有效的";
  if (!h(e.type) || !["search", "hash", "all"].includes(e.type))
    throw "type 参数错误， 应该传入一个字符串 'search' | 'hash' | 'all'";
  const { url: t, type: n } = e, r = new URL(t), i = r.search.substring(1), o = r.hash.indexOf("?") >= 0 ? r.hash.slice(r.hash.indexOf("?") + 1) : "", s = n == "hash" ? {} : U(i), a = n == "search" ? {} : U(o);
  return Object.assign({}, s, a, s);
}
function N(e = {}, t = !1) {
  const n = Object.keys(e), r = [];
  for (let i = 0; i < n.length; i++) {
    const o = n[i], s = e[o];
    if (O(s)) continue;
    const a = B(s) ? encodeURIComponent(s) : encodeURIComponent(JSON.stringify(s));
    r.push(o + "=" + a);
  }
  return t ? decodeURIComponent(r.join("&")) : r.join("&");
}
function Ye(e, t = "pushState") {
  if (!D(e)) throw "url 参数错误，不是有效的";
  if (!h(t) || !["pushState", "replaceState"].includes(t))
    throw "type 参数错误， 应该传入一个字符串 'pushState' | 'replaceState'";
  if (history.state && history.state.current) {
    const n = new URL(e).pathname;
    history.state.current = n;
  }
  window.history[t](history.state, "", e);
}
function Ee(e, t = window.location.href) {
  if (O(e) || !u(e)) throw "参数错误， 应该传入一个对象";
  if (e.search && !u(e.search)) throw "search 参数错误， 应该传入一个对象";
  if (e.hash && !u(e.hash)) throw "hash 参数错误， 应该传入一个对象";
  if (!D(t)) throw "url 参数错误，不是有效的";
  const { origin: n, pathname: r } = new URL(t);
  let { search: i, hash: o } = new URL(t);
  if (e.search) {
    const s = x({ url: t, type: "search" }), a = N(Object.assign({}, s, e.search));
    i = a ? "?" + a : "";
  }
  if (e.hash) {
    const s = x({ url: t, type: "hash" }), a = N(Object.assign({}, s, e.hash));
    o = a ? o.split("?")[0] + "?" + a : o.split("?")[0];
  }
  return n + r + i + o;
}
function Le(e, t) {
  const n = document.createElement("a"), r = window.URL.createObjectURL(t);
  n.style.display = "none", n.href = r, n.download = e, document.body.appendChild(n), n.click(), window.URL.revokeObjectURL(r), n.remove();
}
function ke(e) {
  try {
    return JSON.parse(new TextDecoder("utf-8").decode(e));
  } catch {
    return new TextDecoder("utf-8").decode(e);
  }
}
function Ie() {
  return (String(1e7) + -1e3 + -4e3 + -8e3 + -1e11).replace(
    /[018]/g,
    (t) => (Number(t) ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> Number(t) / 4).toString(16)
  );
}
function Ce(e = {}, t) {
  let n = 0;
  const { rate: r = 4, num: i = 0, direction: o = "top", dom: s = document.scrollingElement } = e, a = { top: "scrollTop", left: "scrollLeft" };
  let m = s[a[o]];
  const y = function() {
    if (m = m + (i - m) / r, Math.abs(m - i) <= 1) {
      s[a[o]] = i, cancelAnimationFrame(n), t && t();
      return;
    }
    s[a[o]] = m, n = requestAnimationFrame(y);
  };
  y();
}
function _e(e) {
  if (!P(e)) throw "手机号格式不正确";
  return e = e.toString(), W(e, 3, 4);
}
function w(e = 1, t = 0) {
  if (!l(e)) throw "min 必须整数";
  if (!l(t)) throw "max 必须整数";
  if (e == t) return e;
  const n = Math.max(e, t), r = Math.min(e, t);
  return n - r == 1 ? Math.random() > 0.5 ? n : r : Math.round(Math.random() * (n - r) + r);
}
function qe(e) {
  return new Promise((n, r) => {
    navigator.clipboard ? navigator.clipboard.writeText(e).then(() => n()).catch(() => {
      t(e, n, r);
    }) : t(e, n, r);
  });
  function t(n, r, i) {
    const o = document.createElement("textarea");
    document.body.appendChild(o), o.setAttribute("readonly", "readonly"), o.innerHTML = n, o.select(), o.setSelectionRange(0, o.innerHTML.length);
    const s = document.execCommand("copy");
    o.remove(), s ? r() : i("execCommand error");
  }
}
function Pe(e, t) {
  var s;
  const n = window.atob(e.replace(/data:([\s\S]+);base64,/, "")), r = t || ((s = e.match(/data:([\s\S]+);base64,/)) == null ? void 0 : s[1]) || "text/plain";
  let i = n.length;
  const o = new Uint8Array(i);
  for (; i--; ) o[i] = n.charCodeAt(i);
  return new Blob([o], { type: r });
}
function He() {
  const e = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
  let t = "#";
  for (let n = 0; n < 6; n++)
    t += e[w(0, 15)];
  return t;
}
function Be() {
  return `${w(0, 255)}, ${w(0, 255)}, ${w(0, 255)}, ${E(w(0, 100) / 100)}`;
}
function j(e) {
  return h(e) ? /#(([0-9a-f]{3})|([0-9a-f]{4})|([0-9a-f]{6})|([0-9a-f]{8}))$/gi.test(e) : !1;
}
function K(e) {
  if (!j(e)) throw "无法识别正确的hex";
  return e.length > 6 ? e : `#${e.substring(1).split("").map((t) => t += t).join("")}`;
}
function $e(e) {
  if (!j(e)) throw "无法识别正确的hex";
  let t = e.substring(1);
  return t.length < 6 && (t = K(e).substring(1)), t = t.match(/[0-9a-f]{2}/gi).map((n, r) => r === 3 ? E(parseInt(n, 16) / 255) : parseInt(n, 16)).join(","), t;
}
function X(e) {
  return h(e) ? e.split(",").every((t, n) => n == 3 ? Number(t) * 255 >= 0 && Number(t) * 255 <= 255 : Number(t) >= 0 && Number(t) <= 255) : !1;
}
function Je(e) {
  if (!X(e)) throw "无法识别正确的rgba";
  return "#" + e.split(",").map((t, n) => n == 3 ? Math.round(Number(t) * 255).toString(16).padStart(2, "0") : Number(t).toString(16).padStart(2, "0")).join("");
}
function Qe(e) {
  if (!j(e)) throw "无法识别正确的hex";
  return e.length < 6 ? e : "#" + e.substring(1).match(/[0-9a-f]{2}/gi).map((n) => n[0]).join("");
}
function Ve(e = document.body) {
  const t = e.requestFullscreen || e.mozRequestFullscreen || e.msRequestFullscreen || e.webkitRequestFullscreen;
  if (!t) throw "浏览器不支持全屏操作";
  t();
}
function We() {
  const e = document.exitFullscreen || document.msExitFullscreen || document.mozCancelFullScreen || document.webkitExitFullscreen;
  if (!e) throw "浏览器不支持全屏操作";
  e();
}
export {
  Ne as arrObjSum,
  Ue as assign,
  xe as assignMin,
  Pe as base64ToBlob,
  ye as byteSize,
  Me as chunk,
  De as compact,
  qe as copy,
  Ae as createData,
  b as days,
  we as debounce,
  M as deepClone,
  F as detectDeviceType,
  Le as downloadFile,
  We as exitFullscreen,
  K as extendHex,
  T as formats,
  Oe as fromPairs,
  ke as gbkToUtf8,
  de as getDataSection,
  he as getMonthDays,
  Ie as getUUID,
  Fe as getUrlParam,
  x as getUrlQuery,
  $e as hexToRgb,
  me as howLongAgo,
  J as isAndroid,
  H as isArrObj,
  d as isArray,
  B as isBasicType,
  g as isBoolean,
  v as isDate,
  se as isDesktop,
  oe as isDom,
  R as isEmptyObject,
  S as isEqual,
  p as isFunction,
  j as isHex,
  ce as isIOS,
  ie as isIncludeChinese,
  V as isInt,
  $ as isJsonString,
  z as isLocation,
  ee as isMap,
  Y as isMobile,
  O as isNullOrUndefined,
  l as isNumber,
  u as isObject,
  P as isPhone,
  te as isPromise,
  ae as isQQ,
  X as isRgba,
  ne as isSet,
  h as isString,
  re as isSymbol,
  D as isURL,
  ue as isWeixin,
  fe as isWeixinMini,
  le as isWin,
  Ve as launchFullscreen,
  W as mask,
  Te as omit,
  ge as once,
  f as padInt,
  _e as phoneEncrypt,
  Re as pick,
  U as qsParse,
  N as qsStringify,
  w as random,
  He as randomHex,
  Be as randomRgba,
  Se as removeHTML,
  G as resetObjectValues,
  Ee as reviseUrlQuery,
  Je as rgbToHex,
  Ce as scrollTo,
  Ye as setUrlQuery,
  Qe as shrinkHex,
  pe as throttle,
  A as timeStamp,
  E as toFixed,
  Q as toNumber,
  c as typeOf,
  je as unique,
  be as upperFirst,
  Z as version
};
