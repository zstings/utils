function u(t) {
  return Object.prototype.toString.call(t).slice(8, -1);
}
const Z = "0.9.2";
function g(t) {
  return u(t) === "Array";
}
function q(t) {
  return /^1[3-9][\d]{9}$/.test(t.toString());
}
function _(t) {
  return u(t) === "Location";
}
function a(t) {
  return t !== null && u(t) === "Object";
}
function z(t) {
  return u(t) === "Date";
}
function b(t) {
  return u(t) === "Function";
}
function v(t) {
  return u(t) === "Map";
}
function tt(t) {
  return u(t) === "Promise" && b(t.then) && b(t.catch);
}
function et(t) {
  return u(t) === "Set";
}
function d(t) {
  return u(t) === "String";
}
function nt(t) {
  return u(t) === "Symbol";
}
function m(t) {
  return u(t) === "Number";
}
function y(t) {
  return u(t) === "Boolean";
}
function E(t) {
  if (!a(t)) throw "传入参数不是Object";
  return !Object.keys(t).length;
}
function rt(t = "") {
  return new RegExp("\\p{sc=Han}", "gu").test(t);
}
function it(t) {
  return u(t).includes("Element");
}
function $(t) {
  return !g(t) || t.length == 0 ? !1 : t.every((e) => a(e));
}
function O(t) {
  return ["Null", "Undefined"].includes(u(t));
}
function S(t = "", e = "") {
  if (arguments.length == 1 && (e = t), t === e) return !0;
  if (t === null || e === null || t.constructor !== e.constructor) return !1;
  if (Array.isArray(t)) {
    if (!Array.isArray(e) || t.length !== e.length) return !1;
    for (let n = 0; n < t.length; n++)
      if (!S(t[n], e[n])) return !1;
    return !0;
  }
  if (typeof t == "object") {
    const n = Object.keys(t), r = Object.keys(e);
    if (n.length !== r.length) return !1;
    for (let o of n)
      if (!r.includes(o) || !S(t[o], e[o])) return !1;
    return !0;
  }
  return !1;
}
function H(t) {
  return ["String", "Number", "Boolean", "Null", "Undefined", "Symbol", "BigInt"].includes(u(t));
}
function B(t) {
  try {
    return JSON.parse(t), !0;
  } catch {
    return !1;
  }
}
function T() {
  return /Android|iPhone|iPad/i.test(navigator.userAgent) ? "Mobile" : "Desktop";
}
function x() {
  return T() === "Mobile";
}
function J() {
  return x() && /Android/i.test(navigator.userAgent);
}
function ot() {
  return T() === "Desktop";
}
function st() {
  return x() && !J();
}
function ct() {
  return /QQ\//i.test(navigator.userAgent);
}
function ut() {
  return /MicroMessenger\//i.test(navigator.userAgent);
}
function at() {
  return /miniProgram/i.test(navigator.userAgent);
}
function ft() {
  return /Windows/i.test(navigator.userAgent);
}
function l(t, e = 2) {
  if (isNaN(Number(t))) throw "不是一个合法的数字";
  return Number(t).toString().padStart(e, "0");
}
function Q(t) {
  if (isNaN(Number(t))) throw `${t}无法转换为数字`;
  return Number(t);
}
function F(t, e = 2, n = !0, r) {
  if (r == null && (r = "number"), !y(n)) throw "isRound不是boolean";
  if (r !== "number" && r !== "string") throw "type 不是 number 或 string";
  t = Q(t).toString();
  const i = n ? Number(t).toFixed(e) : ((s) => {
    const c = s.split("."), f = c[0], w = (c[1] || "").slice(0, e).padEnd(e, "0");
    return `${f}.${w}`;
  })(t);
  return r === "string" ? i : Number(i);
}
function V(t) {
  return Number.isInteger(t);
}
function h(t = /* @__PURE__ */ new Date()) {
  if (t == null || typeof t == "string" && t.trim() === "" ? t = /* @__PURE__ */ new Date() : g(t) ? t = new Date(...t) : t = new Date(t), t.toString() === "Invalid Date") throw "Invalid Date";
  return t;
}
function N(t = /* @__PURE__ */ new Date(), e = "ms") {
  const n = h(t).getTime();
  return e == "s" ? n / 1e3 | 0 : n;
}
function A(t = /* @__PURE__ */ new Date(), e = "YYYY-MM-DD hh:mm:ss") {
  const n = h(t), r = l(n.getFullYear()), o = r.toString().substring(2), i = l(n.getMonth() + 1), s = l(n.getMonth() + 1, 1), c = l(n.getDate()), f = l(n.getDate(), 1), w = l(n.getHours()), k = l(n.getHours(), 1), I = l(n.getMinutes()), L = l(n.getMinutes(), 1), P = l(n.getSeconds()), C = l(n.getSeconds(), 1);
  return e.replace("YYYY", r).replace("YY", o).replace("MM", i).replace("M", s).replace("DD", c).replace("D", f).replace("hh", w).replace("h", k).replace("mm", I).replace("m", L).replace("ss", P).replace("s", C);
}
function lt(t, e) {
  t = t || (/* @__PURE__ */ new Date()).getFullYear(), e = e || (/* @__PURE__ */ new Date()).getMonth() + 1;
  const n = new Date(t, e, 0);
  if (isNaN(n.getTime())) throw "Invalid Date";
  return n.getDate();
}
function ht(t = /* @__PURE__ */ new Date(), e = /* @__PURE__ */ new Date()) {
  t = h(t).getTime(), e = h(e).getTime();
  const n = e - t;
  if (n < 0) throw "startTime 必须大于 endTime";
  return n >= 31536e6 ? Math.floor(n / 31536e6) + "年前" : n >= 2592e6 ? Math.floor(n / 2592e6) + "月前" : n >= 864e5 ? Math.floor(n / 864e5) + "天前" : n >= 36e5 ? Math.floor(n / 36e5) + "小时前" : n >= 6e4 ? Math.floor(n / 6e4) + "分钟前" : n >= 1e3 ? Math.floor(n / 1e3) + "秒前" : "刚刚";
}
function mt(t = 1, e = { start: /* @__PURE__ */ new Date(), format: "YYYY-MM-DD", timestamp: !1 }) {
  if (!m(t)) throw "day 必须是数字";
  if (!a(e)) throw "option 必须是对象";
  const { start: n = /* @__PURE__ */ new Date(), format: r = "YYYY-MM-DD", timestamp: o = !1 } = e;
  if (!d(r)) throw "option.format 必须是字符串";
  if (!y(o)) throw "option.timestamp 必须是布尔值";
  const i = h(n).getTime(), s = i - (t - 1) * 864e5;
  return o ? [N(s, r), N(i, r)] : [A(s, r), A(i, r)];
}
function dt(t) {
  if ((t == null || typeof t == "string" && t == "") && (t = h().toISOString().slice(0, 7)), !/^\d{4}-\d{1,2}$/.test(t)) throw "Invalid Date, eg: YYYY-MM";
  const e = t.split("-");
  if (e[1] = e[1].padStart(2, "0"), Number(e[0]) < 1970) throw "年份不能小于1970";
  if (Number(e[1]) < 1 || Number(e[1]) > 12) throw "月份不能小于1或大于12";
  const n = h(t), r = h(), o = [];
  let i = r.getFullYear(), s = r.getMonth() + 1;
  for (; ; ) {
    const c = s.toString().padStart(2, "0");
    o.push(`${i}-${c}`);
    const f = r.getTime() < n.getTime();
    if (i === n.getFullYear() && s === n.getMonth() + 1)
      break;
    f ? (s++, s > 12 && (s = 1, i++)) : (s--, s < 1 && (s = 12, i--));
  }
  return o;
}
function gt(t, e = 500, n = { leading: !1, trailing: !0 }) {
  const { leading: r = !1, trailing: o = !0 } = n;
  let i = 0, s = r;
  if (!b(t)) throw "func不是function";
  if (e && !m(e)) throw "awit不是number";
  if (!y(r)) throw "leading不是boolean";
  if (!y(o)) throw "trailing不是boolean";
  return function(...c) {
    if (clearTimeout(i), s && r) {
      s && t.apply(this, c), s = !1, i = setTimeout(() => {
        s = !0;
      }, e);
      return;
    }
    i = setTimeout(() => {
      s = !0, o && t.apply(this, c);
    }, e);
  };
}
function wt(t, e = 500, n = !1) {
  let r = 0;
  if (!b(t)) throw "func不是function";
  if (e && !m(e)) throw "wait不是number";
  if (!y(n)) throw "immediate不是boolean";
  return function(...o) {
    n && (t.apply(this, o), n = !1), r || (r = setTimeout(() => {
      t.apply(this, o), r = 0;
    }, e));
  };
}
function pt(t) {
  if (!b(t)) throw "func不是function";
  let e = !1;
  return function(...n) {
    e || (e = !0, t.apply(this, n));
  };
}
function bt(t) {
  return t.toString().replace(/(\w)/, (e) => e.toLocaleUpperCase());
}
function yt(t) {
  return new Blob([t.toString()]).size;
}
function St(t) {
  const e = /&(lt|gt|le|ge|nbsp|amp|quot|times|Alpha|Beta|Gamma|Delta|Epsilon|Zeta|Eta|Theta|Iota|Kappa|Lambda|MU|NU|Xi|Omicron|Pi|Rho|Sigma|Tau|Upsilon|Phi|Chi|Psi|Omega|alpha|beta|gamma|delta|epsilon|zeta|eta|theta|iota|kappa|lambda|mu|nu|xi|omicron|pi|rho|sigmaf|sigma|tau|upsilon|phi|chi|psi|omega|thetasym|upsih|piv|circ|tilde|ndash|permil|lsquo|rsquo|ldquo|rdquo|prime);/gi;
  return t.toString().replace(/<[^>]+>/g, "").replace(e, "").trim();
}
function W(t, e = 0, n = 1 / 0, r = "*") {
  if (!m(e)) throw "start 必须是数字";
  if (!m(n)) throw "length 必须是数字";
  if (!d(r)) throw "mask 必须是字符串";
  t = t.toString();
  const o = t.slice(e, n + e);
  return t.replace(o, "".padEnd(o.length, r));
}
function Mt(t, e = 1) {
  if (!g(t)) throw "array参数需要Array";
  if (!m(e) || !V(e) || e <= 0) throw "请检查size参数，必须符合大于0的整数";
  const n = [], r = Math.ceil(t.length / e);
  for (let o = 0; o < r; o++)
    n.push(t.slice(o * e, o * e + e));
  return n;
}
function Dt(t) {
  if (!g(t)) throw "array参数需要Array";
  return t.filter((e) => !!e);
}
function Ot(t) {
  if (!g(t)) throw "array传入参数需要Array";
  return Object.fromEntries(new Map(t));
}
function jt(t, e) {
  if (!g(t)) throw "array传入参数需要Array";
  if (e != null && e.key && !d(e.key)) throw "key传入参数需要String";
  return e != null && e.key && e.deep != !0 && (e.deep = !0), e || (e = { deep: !0 }), e && e.deep ? t.reduce((n, r) => {
    if (e.key && r[e.key] == null) throw "key指定的属性不存在";
    return (e.key ? n.some((i) => S(i[e.key], r[e.key])) : n.some((i) => S(i, r))) || n.push(r), n;
  }, []) : [...new Set(t)];
}
function Nt(t = 1, e = 0) {
  const n = {};
  let r = n;
  for (let o = 0; o < t; o++) {
    r = r.data = {};
    for (let i = 0; i < e; i++)
      r[i] = i;
  }
  return n;
}
function M(t) {
  if (typeof t == "object") {
    const e = Array.isArray(t) ? [] : {};
    for (const n in t)
      e[n] = M(t[n]);
    return e;
  } else
    return t;
}
function At(t, e) {
  if (!a(t)) throw "target参数必须是object";
  return t = M(t), (e || []).forEach((n) => delete t[n]), t;
}
function Ut(t, ...e) {
  if (!a(t)) throw "target参数必须是object";
  return E(t) ? {} : Object.assign(t, ...e);
}
function Yt(t, ...e) {
  if (!a(t)) throw "target参数必须是object";
  if (E(t)) return {};
  const n = Object.assign({}, t, ...e);
  return Object.keys(t).forEach((r) => t[r] = n[r]), t;
}
function Rt(t, e) {
  if (!$(t)) throw "object 必须是数组对象";
  const n = {};
  return e.forEach((r) => {
    n[r] = t.reduce((o, i) => o + (isNaN(i[r]) ? 0 : Number(i[r])), 0);
  }), n;
}
function Et(t, e = []) {
  if (!a(t)) throw new Error("target参数必须是object");
  if (!g(e)) throw new Error("keys参数必须是array");
  return e.length == 0 ? {} : (t = M(t), Object.keys(t).forEach((n) => {
    e.includes(n) || delete t[n];
  }), t);
}
function G(t, e = 0) {
  if (!a(t)) throw new Error("target参数必须是object");
  return e != 1 && (t = M(t)), Object.keys(t).forEach((n) => {
    u(t[n]) == "String" && (t[n] = ""), u(t[n]) == "Number" && (t[n] = 0), u(t[n]) == "Boolean" && (t[n] = !1), u(t[n]) == "Array" && (t[n] = []), u(t[n]) == "Object" && G(t[n], 1);
  }), t;
}
function Tt(t, e) {
  if (!a(t)) throw new Error("target参数必须是object");
  return Object.prototype.hasOwnProperty.call(t, e);
}
function D(t) {
  if (!d(t)) throw "参数必须是string";
  try {
    return new URL(t), !0;
  } catch {
    return !1;
  }
}
function xt(t, e = window.location.href) {
  var s;
  if (!D(e)) throw "url 参数错误，不是有效的";
  const n = new URL(e), r = new RegExp("(^|&)" + t + "=([^&]*)(&|$)"), o = n.search.substring(1).match(r), i = (s = n.hash.split("?")[1]) == null ? void 0 : s.match(r);
  return o != null ? decodeURIComponent(o[2]) : i != null ? decodeURIComponent(i[2]) : null;
}
function U(t = "", e = !0) {
  const n = JSON.parse(JSON.stringify(Object.fromEntries(new URLSearchParams(t))));
  return e && Object.keys(n).forEach((r) => {
    B(n[r]) && (n[r].startsWith("{") || n[r].startsWith("[")) && (n[r] = JSON.parse(n[r]));
  }), n;
}
function Y(t = {
  url: window.location.href,
  type: "all"
}) {
  if (O(t) || !a(t)) throw "参数错误， 应该传入一个对象";
  if (t.url || (t.url = window.location.href), t.type || (t.type = "all"), !D(t.url)) throw "url 参数错误，不是有效的";
  if (!d(t.type) || !["search", "hash", "all"].includes(t.type))
    throw "type 参数错误， 应该传入一个字符串 'search' | 'hash' | 'all'";
  const { url: e, type: n } = t, r = new URL(e), o = r.search.substring(1), i = r.hash.indexOf("?") >= 0 ? r.hash.slice(r.hash.indexOf("?") + 1) : "", s = n == "hash" ? {} : U(o), c = n == "search" ? {} : U(i);
  return Object.assign({}, s, c, s);
}
function R(t = {}, e = !1) {
  const n = Object.keys(t), r = [];
  for (let o = 0; o < n.length; o++) {
    const i = n[o], s = t[i];
    if (O(s)) continue;
    const c = H(s) ? encodeURIComponent(s) : encodeURIComponent(JSON.stringify(s));
    r.push(i + "=" + c);
  }
  return e ? decodeURIComponent(r.join("&")) : r.join("&");
}
function Ft(t, e = "pushState") {
  if (!D(t)) throw "url 参数错误，不是有效的";
  if (!d(e) || !["pushState", "replaceState"].includes(e))
    throw "type 参数错误， 应该传入一个字符串 'pushState' | 'replaceState'";
  if (history.state && history.state.current) {
    const n = new URL(t).pathname;
    history.state.current = n;
  }
  window.history[e](history.state, "", t);
}
function kt(t, e = window.location.href) {
  if (O(t) || !a(t)) throw "参数错误， 应该传入一个对象";
  if (t.search && !a(t.search)) throw "search 参数错误， 应该传入一个对象";
  if (t.hash && !a(t.hash)) throw "hash 参数错误， 应该传入一个对象";
  if (!D(e)) throw "url 参数错误，不是有效的";
  const { origin: n, pathname: r } = new URL(e);
  let { search: o, hash: i } = new URL(e);
  if (t.search) {
    const s = Y({ url: e, type: "search" }), c = R(Object.assign({}, s, t.search));
    o = c ? "?" + c : "";
  }
  if (t.hash) {
    const s = Y({ url: e, type: "hash" }), c = R(Object.assign({}, s, t.hash));
    i = c ? i.split("?")[0] + "?" + c : i.split("?")[0];
  }
  return n + r + o + i;
}
function It(t, e) {
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
function Pt() {
  return (String(1e7) + -1e3 + -4e3 + -8e3 + -1e11).replace(
    /[018]/g,
    (e) => (Number(e) ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> Number(e) / 4).toString(16)
  );
}
function Ct(t = {}, e) {
  let n = 0;
  const { rate: r = 4, num: o = 0, direction: i = "top", dom: s = document.scrollingElement } = t, c = { top: "scrollTop", left: "scrollLeft" };
  let f = s[c[i]];
  const w = function() {
    if (f = f + (o - f) / r, Math.abs(f - o) <= 1) {
      s[c[i]] = o, cancelAnimationFrame(n), e && e();
      return;
    }
    s[c[i]] = f, n = requestAnimationFrame(w);
  };
  w();
}
function qt(t) {
  if (!q(t)) throw "手机号格式不正确";
  return t = t.toString(), W(t, 3, 4);
}
function p(t = 1, e = 0) {
  if (!m(t)) throw "min 必须整数";
  if (!m(e)) throw "max 必须整数";
  if (t == e) return t;
  const n = Math.max(t, e), r = Math.min(t, e);
  return n - r == 1 ? Math.random() > 0.5 ? n : r : Math.round(Math.random() * (n - r) + r);
}
function $t(t) {
  return new Promise((n, r) => {
    navigator.clipboard ? navigator.clipboard.writeText(t).then(() => n()).catch(() => {
      e(t, n, r);
    }) : e(t, n, r);
  });
  function e(n, r, o) {
    const i = document.createElement("textarea");
    document.body.appendChild(i), i.setAttribute("readonly", "readonly"), i.innerHTML = n, i.select(), i.setSelectionRange(0, i.innerHTML.length);
    const s = document.execCommand("copy");
    i.remove(), s ? r() : o("execCommand error");
  }
}
function Ht(t, e) {
  var s;
  const n = window.atob(t.replace(/data:([\s\S]+);base64,/, "")), r = e || ((s = t.match(/data:([\s\S]+);base64,/)) == null ? void 0 : s[1]) || "text/plain";
  let o = n.length;
  const i = new Uint8Array(o);
  for (; o--; ) i[o] = n.charCodeAt(o);
  return new Blob([i], { type: r });
}
function Bt() {
  const t = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
  let e = "#";
  for (let n = 0; n < 6; n++)
    e += t[p(0, 15)];
  return e;
}
function Jt() {
  return `${p(0, 255)}, ${p(0, 255)}, ${p(0, 255)}, ${F(p(0, 100) / 100)}`;
}
function j(t) {
  return d(t) ? /#(([0-9a-f]{3})|([0-9a-f]{4})|([0-9a-f]{6})|([0-9a-f]{8}))$/gi.test(t) : !1;
}
function K(t) {
  if (!j(t)) throw "无法识别正确的hex";
  return t.length >= 6 ? t : `#${t.substring(1).split("").map((e) => e += e).join("")}`;
}
function Qt(t) {
  if (!j(t)) throw "无法识别正确的hex";
  return t.substring(1).length < 6 && (t = K(t).substring(1)), t = t.match(/[0-9a-f]{2}/gi).map((e, n) => n === 3 ? F(parseInt(e, 16) / 255) : parseInt(e, 16)).join(","), t;
}
function X(t) {
  return d(t) ? t.split(",").every((e, n) => n == 3 ? Number(e) * 255 >= 0 && Number(e) * 255 <= 255 : Number(e) >= 0 && Number(e) <= 255) : !1;
}
function Vt(t) {
  if (!X(t)) throw "无法识别正确的rgba";
  let e = t.split(",");
  return e = e.map((n, r) => r == 3 ? Math.round(Number(n) * 255).toString(16).padStart(2, "0") : Number(n).toString(16).padStart(2, "0")), "#" + e.join("");
}
function Wt(t) {
  if (!j(t)) throw "无法识别正确的hex";
  return t.substring(1).length < 6 ? t : "#" + t.substring(1).match(/[0-9a-f]{2}/gi).map((n) => n[0]).join("");
}
function Gt(t = document.body) {
  const e = t.requestFullscreen || t.mozRequestFullscreen || t.msRequestFullscreen || t.webkitRequestFullscreen;
  if (!e) throw "浏览器不支持全屏操作";
  e();
}
function Kt() {
  const t = document.exitFullscreen || document.msExitFullscreen || document.mozCancelFullScreen || document.webkitExitFullscreen;
  if (!t) throw "浏览器不支持全屏操作";
  t();
}
export {
  Rt as arrObjSum,
  Ut as assign,
  Yt as assignMin,
  Ht as base64ToBlob,
  yt as byteSize,
  Mt as chunk,
  Dt as compact,
  $t as copy,
  Nt as createData,
  h as days,
  gt as debounce,
  M as deepClone,
  T as detectDeviceType,
  It as downloadFile,
  Kt as exitFullscreen,
  K as extendHex,
  A as formats,
  Ot as fromPairs,
  Lt as gbkToUtf8,
  mt as getDataSection,
  lt as getMonthDays,
  dt as getMonthsUntilDate,
  Pt as getUUID,
  xt as getUrlParam,
  Y as getUrlQuery,
  Tt as hasOwn,
  Qt as hexToRgb,
  ht as howLongAgo,
  J as isAndroid,
  $ as isArrObj,
  g as isArray,
  H as isBasicType,
  y as isBoolean,
  z as isDate,
  ot as isDesktop,
  it as isDom,
  E as isEmptyObject,
  S as isEqual,
  b as isFunction,
  j as isHex,
  st as isIOS,
  rt as isIncludeChinese,
  V as isInt,
  B as isJsonString,
  _ as isLocation,
  v as isMap,
  x as isMobile,
  O as isNullOrUndefined,
  m as isNumber,
  a as isObject,
  q as isPhone,
  tt as isPromise,
  ct as isQQ,
  X as isRgba,
  et as isSet,
  d as isString,
  nt as isSymbol,
  D as isURL,
  ut as isWeixin,
  at as isWeixinMini,
  ft as isWin,
  Gt as launchFullscreen,
  W as mask,
  At as omit,
  pt as once,
  l as padInt,
  qt as phoneEncrypt,
  Et as pick,
  U as qsParse,
  R as qsStringify,
  p as random,
  Bt as randomHex,
  Jt as randomRgba,
  St as removeHTML,
  G as resetObjectValues,
  kt as reviseUrlQuery,
  Vt as rgbToHex,
  Ct as scrollTo,
  Ft as setUrlQuery,
  Wt as shrinkHex,
  wt as throttle,
  N as timeStamp,
  F as toFixed,
  Q as toNumber,
  u as typeOf,
  jt as unique,
  bt as upperFirst,
  Z as version
};
