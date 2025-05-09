function u(e) {
  return Object.prototype.toString.call(e).slice(8, -1);
}
const Z = "0.9.0";
function p(e) {
  return u(e) === "Array";
}
function P(e) {
  return /^1[3-9][\d]{9}$/.test(e.toString());
}
function _(e) {
  return u(e) === "Location";
}
function a(e) {
  return e !== null && u(e) === "Object";
}
function z(e) {
  return u(e) === "Date";
}
function g(e) {
  return u(e) === "Function";
}
function v(e) {
  return u(e) === "Map";
}
function ee(e) {
  return u(e) === "Promise" && g(e.then) && g(e.catch);
}
function te(e) {
  return u(e) === "Set";
}
function m(e) {
  return u(e) === "String";
}
function ne(e) {
  return u(e) === "Symbol";
}
function d(e) {
  return u(e) === "Number";
}
function b(e) {
  return u(e) === "Boolean";
}
function R(e) {
  if (!a(e)) throw "传入参数不是Object";
  return !Object.keys(e).length;
}
function re(e = "") {
  return new RegExp("\\p{sc=Han}", "gu").test(e);
}
function ie(e) {
  return u(e).includes("Element");
}
function H(e) {
  return !p(e) || e.length == 0 ? !1 : e.every((t) => a(t));
}
function O(e) {
  return ["Null", "Undefined"].includes(u(e));
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
function $(e) {
  return ["String", "Number", "Boolean", "Null", "Undefined", "Symbol", "BigInt"].includes(u(e));
}
function B(e) {
  try {
    return JSON.parse(e), !0;
  } catch {
    return !1;
  }
}
function F() {
  return /Android|iPhone|iPad/i.test(navigator.userAgent) ? "Mobile" : "Desktop";
}
function x() {
  return F() === "Mobile";
}
function J() {
  return x() && /Android/i.test(navigator.userAgent);
}
function oe() {
  return F() === "Desktop";
}
function se() {
  return x() && !J();
}
function ce() {
  return /QQ\//i.test(navigator.userAgent);
}
function ue() {
  return /MicroMessenger\//i.test(navigator.userAgent);
}
function ae() {
  return /miniProgram/i.test(navigator.userAgent);
}
function fe() {
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
  if (e = Q(e), !b(n)) throw "isRound不是boolean";
  return parseFloat(n ? e.toFixed(t) : e.toFixed(t + 1).slice(0, -1));
}
function V(e) {
  return Number.isInteger(e);
}
function h(e = /* @__PURE__ */ new Date()) {
  if (e == null || typeof e == "string" && e.trim() === "" ? e = /* @__PURE__ */ new Date() : p(e) ? e = new Date(...e) : e = new Date(e), e.toString() === "Invalid Date") throw "Invalid Date";
  return e;
}
function A(e = /* @__PURE__ */ new Date(), t = "ms") {
  const n = h(e).getTime();
  return t == "s" ? n / 1e3 | 0 : n;
}
function U(e = /* @__PURE__ */ new Date(), t = "YYYY-MM-DD hh:mm:ss") {
  const n = h(e), r = f(n.getFullYear()), i = r.toString().substring(2), o = f(n.getMonth() + 1), s = f(n.getMonth() + 1, 1), c = f(n.getDate()), l = f(n.getDate(), 1), y = f(n.getHours()), k = f(n.getHours(), 1), I = f(n.getMinutes()), L = f(n.getMinutes(), 1), C = f(n.getSeconds()), q = f(n.getSeconds(), 1);
  return t.replace("YYYY", r).replace("YY", i).replace("MM", o).replace("M", s).replace("DD", c).replace("D", l).replace("hh", y).replace("h", k).replace("mm", I).replace("m", L).replace("ss", C).replace("s", q);
}
function le(e, t) {
  e = e || (/* @__PURE__ */ new Date()).getFullYear(), t = t || (/* @__PURE__ */ new Date()).getMonth() + 1;
  const n = new Date(e, t, 0);
  if (isNaN(n.getTime())) throw "Invalid Date";
  return n.getDate();
}
function he(e = /* @__PURE__ */ new Date(), t = /* @__PURE__ */ new Date()) {
  e = h(e).getTime(), t = h(t).getTime();
  const n = t - e;
  if (n < 0) throw "startTime 必须大于 endTime";
  return n >= 31536e6 ? Math.floor(n / 31536e6) + "年前" : n >= 2592e6 ? Math.floor(n / 2592e6) + "月前" : n >= 864e5 ? Math.floor(n / 864e5) + "天前" : n >= 36e5 ? Math.floor(n / 36e5) + "小时前" : n >= 6e4 ? Math.floor(n / 6e4) + "分钟前" : n >= 1e3 ? Math.floor(n / 1e3) + "秒前" : "刚刚";
}
function de(e = 1, t = { start: /* @__PURE__ */ new Date(), format: "YYYY-MM-DD", timestamp: !1 }) {
  if (!d(e)) throw "day 必须是数字";
  if (!a(t)) throw "option 必须是对象";
  const { start: n = /* @__PURE__ */ new Date(), format: r = "YYYY-MM-DD", timestamp: i = !1 } = t;
  if (!m(r)) throw "option.format 必须是字符串";
  if (!b(i)) throw "option.timestamp 必须是布尔值";
  const o = h(n).getTime(), s = o - (e - 1) * 864e5;
  return i ? [A(s, r), A(o, r)] : [U(s, r), U(o, r)];
}
function me(e) {
  if ((e == null || typeof e == "string" && e == "") && (e = h().toISOString().slice(0, 7)), !/^\d{4}-\d{1,2}$/.test(e)) throw "Invalid Date, eg: YYYY-MM";
  const t = e.split("-");
  if (t[1] = t[1].padStart(2, "0"), Number(t[0]) < 1970) throw "年份不能小于1970";
  if (Number(t[1]) < 1 || Number(t[1]) > 12) throw "月份不能小于1或大于12";
  const n = h(e), r = h(), i = [];
  let o = r.getFullYear(), s = r.getMonth() + 1;
  for (; ; ) {
    const c = s.toString().padStart(2, "0");
    i.push(`${o}-${c}`);
    const l = r.getTime() < n.getTime();
    if (o === n.getFullYear() && s === n.getMonth() + 1)
      break;
    l ? (s++, s > 12 && (s = 1, o++)) : (s--, s < 1 && (s = 12, o--));
  }
  return i;
}
function pe(e, t = 500, n = { leading: !1, trailing: !0 }) {
  const { leading: r = !1, trailing: i = !0 } = n;
  let o = 0, s = r;
  if (!g(e)) throw "func不是function";
  if (t && !d(t)) throw "awit不是number";
  if (!b(r)) throw "leading不是boolean";
  if (!b(i)) throw "trailing不是boolean";
  return function(...c) {
    if (clearTimeout(o), s && r) {
      s && e.apply(this, c), s = !1, o = setTimeout(() => {
        s = !0;
      }, t);
      return;
    }
    o = setTimeout(() => {
      s = !0, i && e.apply(this, c);
    }, t);
  };
}
function we(e, t = 500, n = !1) {
  let r = 0;
  if (!g(e)) throw "func不是function";
  if (t && !d(t)) throw "wait不是number";
  if (!b(n)) throw "immediate不是boolean";
  return function(...i) {
    n && (e.apply(this, i), n = !1), r || (r = setTimeout(() => {
      e.apply(this, i), r = 0;
    }, t));
  };
}
function ge(e) {
  if (!g(e)) throw "func不是function";
  let t = !1;
  return function(...n) {
    t || (t = !0, e.apply(this, n));
  };
}
function be(e) {
  return e.toString().replace(/(\w)/, (t) => t.toLocaleUpperCase());
}
function ye(e) {
  return new Blob([e.toString()]).size;
}
function Se(e) {
  const t = /&(lt|gt|le|ge|nbsp|amp|quot|times|Alpha|Beta|Gamma|Delta|Epsilon|Zeta|Eta|Theta|Iota|Kappa|Lambda|MU|NU|Xi|Omicron|Pi|Rho|Sigma|Tau|Upsilon|Phi|Chi|Psi|Omega|alpha|beta|gamma|delta|epsilon|zeta|eta|theta|iota|kappa|lambda|mu|nu|xi|omicron|pi|rho|sigmaf|sigma|tau|upsilon|phi|chi|psi|omega|thetasym|upsih|piv|circ|tilde|ndash|permil|lsquo|rsquo|ldquo|rdquo|prime);/gi;
  return e.toString().replace(/<[^>]+>/g, "").replace(t, "").trim();
}
function W(e, t = 0, n = 1 / 0, r = "*") {
  if (!d(t)) throw "start 必须是数字";
  if (!d(n)) throw "length 必须是数字";
  if (!m(r)) throw "mask 必须是字符串";
  e = e.toString();
  const i = e.slice(t, n + t);
  return e.replace(i, "".padEnd(i.length, r));
}
function Me(e, t = 1) {
  if (!p(e)) throw "array参数需要Array";
  if (!d(t) || !V(t) || t <= 0) throw "请检查size参数，必须符合大于0的整数";
  const n = [], r = Math.ceil(e.length / t);
  for (let i = 0; i < r; i++)
    n.push(e.slice(i * t, i * t + t));
  return n;
}
function De(e) {
  if (!p(e)) throw "array参数需要Array";
  return e.filter((t) => !!t);
}
function Oe(e) {
  if (!p(e)) throw "array传入参数需要Array";
  return Object.fromEntries(new Map(e));
}
function je(e, t) {
  if (!p(e)) throw "array传入参数需要Array";
  if (t != null && t.key && !m(t.key)) throw "key传入参数需要String";
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
function Ue(e, t) {
  if (!a(e)) throw "target参数必须是object";
  return e = M(e), (t || []).forEach((n) => delete e[n]), e;
}
function Ne(e, ...t) {
  if (!a(e)) throw "target参数必须是object";
  return R(e) ? {} : Object.assign(e, ...t);
}
function Ye(e, ...t) {
  if (!a(e)) throw "target参数必须是object";
  if (R(e)) return {};
  const n = Object.assign({}, e, ...t);
  return Object.keys(e).forEach((r) => e[r] = n[r]), e;
}
function Te(e, t) {
  if (!H(e)) throw "object 必须是数组对象";
  const n = {};
  return t.forEach((r) => {
    n[r] = e.reduce((i, o) => i + (isNaN(o[r]) ? 0 : Number(o[r])), 0);
  }), n;
}
function Re(e, t = []) {
  if (!a(e)) throw new Error("target参数必须是object");
  if (!p(t)) throw new Error("keys参数必须是array");
  return t.length == 0 ? {} : (e = M(e), Object.keys(e).forEach((n) => {
    t.includes(n) || delete e[n];
  }), e);
}
function G(e, t = 0) {
  if (!a(e)) throw new Error("target参数必须是object");
  return t != 1 && (e = M(e)), Object.keys(e).forEach((n) => {
    u(e[n]) == "String" && (e[n] = ""), u(e[n]) == "Number" && (e[n] = 0), u(e[n]) == "Boolean" && (e[n] = !1), u(e[n]) == "Array" && (e[n] = []), u(e[n]) == "Object" && G(e[n], 1);
  }), e;
}
function Fe(e, t) {
  if (!a(e)) throw new Error("target参数必须是object");
  return Object.prototype.hasOwnProperty.call(e, t);
}
function D(e) {
  if (!m(e)) throw "参数必须是string";
  try {
    return new URL(e), !0;
  } catch {
    return !1;
  }
}
function xe(e, t = window.location.href) {
  var s;
  if (!D(t)) throw "url 参数错误，不是有效的";
  const n = new URL(t), r = new RegExp("(^|&)" + e + "=([^&]*)(&|$)"), i = n.search.substring(1).match(r), o = (s = n.hash.split("?")[1]) == null ? void 0 : s.match(r);
  return i != null ? decodeURIComponent(i[2]) : o != null ? decodeURIComponent(o[2]) : null;
}
function N(e = "", t = !0) {
  const n = JSON.parse(JSON.stringify(Object.fromEntries(new URLSearchParams(e))));
  return t && Object.keys(n).forEach((r) => {
    B(n[r]) && (n[r].startsWith("{") || n[r].startsWith("[")) && (n[r] = JSON.parse(n[r]));
  }), n;
}
function Y(e = {
  url: window.location.href,
  type: "all"
}) {
  if (O(e) || !a(e)) throw "参数错误， 应该传入一个对象";
  if (e.url || (e.url = window.location.href), e.type || (e.type = "all"), !D(e.url)) throw "url 参数错误，不是有效的";
  if (!m(e.type) || !["search", "hash", "all"].includes(e.type))
    throw "type 参数错误， 应该传入一个字符串 'search' | 'hash' | 'all'";
  const { url: t, type: n } = e, r = new URL(t), i = r.search.substring(1), o = r.hash.indexOf("?") >= 0 ? r.hash.slice(r.hash.indexOf("?") + 1) : "", s = n == "hash" ? {} : N(i), c = n == "search" ? {} : N(o);
  return Object.assign({}, s, c, s);
}
function T(e = {}, t = !1) {
  const n = Object.keys(e), r = [];
  for (let i = 0; i < n.length; i++) {
    const o = n[i], s = e[o];
    if (O(s)) continue;
    const c = $(s) ? encodeURIComponent(s) : encodeURIComponent(JSON.stringify(s));
    r.push(o + "=" + c);
  }
  return t ? decodeURIComponent(r.join("&")) : r.join("&");
}
function Ee(e, t = "pushState") {
  if (!D(e)) throw "url 参数错误，不是有效的";
  if (!m(t) || !["pushState", "replaceState"].includes(t))
    throw "type 参数错误， 应该传入一个字符串 'pushState' | 'replaceState'";
  if (history.state && history.state.current) {
    const n = new URL(e).pathname;
    history.state.current = n;
  }
  window.history[t](history.state, "", e);
}
function ke(e, t = window.location.href) {
  if (O(e) || !a(e)) throw "参数错误， 应该传入一个对象";
  if (e.search && !a(e.search)) throw "search 参数错误， 应该传入一个对象";
  if (e.hash && !a(e.hash)) throw "hash 参数错误， 应该传入一个对象";
  if (!D(t)) throw "url 参数错误，不是有效的";
  const { origin: n, pathname: r } = new URL(t);
  let { search: i, hash: o } = new URL(t);
  if (e.search) {
    const s = Y({ url: t, type: "search" }), c = T(Object.assign({}, s, e.search));
    i = c ? "?" + c : "";
  }
  if (e.hash) {
    const s = Y({ url: t, type: "hash" }), c = T(Object.assign({}, s, e.hash));
    o = c ? o.split("?")[0] + "?" + c : o.split("?")[0];
  }
  return n + r + i + o;
}
function Ie(e, t) {
  const n = document.createElement("a"), r = window.URL.createObjectURL(t);
  n.style.display = "none", n.href = r, n.download = e, document.body.appendChild(n), n.click(), window.URL.revokeObjectURL(r), n.remove();
}
function Le(e) {
  try {
    return JSON.parse(new TextDecoder("utf-8").decode(e));
  } catch {
    return new TextDecoder("utf-8").decode(e);
  }
}
function Ce() {
  return (String(1e7) + -1e3 + -4e3 + -8e3 + -1e11).replace(
    /[018]/g,
    (t) => (Number(t) ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> Number(t) / 4).toString(16)
  );
}
function qe(e = {}, t) {
  let n = 0;
  const { rate: r = 4, num: i = 0, direction: o = "top", dom: s = document.scrollingElement } = e, c = { top: "scrollTop", left: "scrollLeft" };
  let l = s[c[o]];
  const y = function() {
    if (l = l + (i - l) / r, Math.abs(l - i) <= 1) {
      s[c[o]] = i, cancelAnimationFrame(n), t && t();
      return;
    }
    s[c[o]] = l, n = requestAnimationFrame(y);
  };
  y();
}
function Pe(e) {
  if (!P(e)) throw "手机号格式不正确";
  return e = e.toString(), W(e, 3, 4);
}
function w(e = 1, t = 0) {
  if (!d(e)) throw "min 必须整数";
  if (!d(t)) throw "max 必须整数";
  if (e == t) return e;
  const n = Math.max(e, t), r = Math.min(e, t);
  return n - r == 1 ? Math.random() > 0.5 ? n : r : Math.round(Math.random() * (n - r) + r);
}
function He(e) {
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
function $e(e, t) {
  var s;
  const n = window.atob(e.replace(/data:([\s\S]+);base64,/, "")), r = t || ((s = e.match(/data:([\s\S]+);base64,/)) == null ? void 0 : s[1]) || "text/plain";
  let i = n.length;
  const o = new Uint8Array(i);
  for (; i--; ) o[i] = n.charCodeAt(i);
  return new Blob([o], { type: r });
}
function Be() {
  const e = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
  let t = "#";
  for (let n = 0; n < 6; n++)
    t += e[w(0, 15)];
  return t;
}
function Je() {
  return `${w(0, 255)}, ${w(0, 255)}, ${w(0, 255)}, ${E(w(0, 100) / 100)}`;
}
function j(e) {
  return m(e) ? /#(([0-9a-f]{3})|([0-9a-f]{4})|([0-9a-f]{6})|([0-9a-f]{8}))$/gi.test(e) : !1;
}
function K(e) {
  if (!j(e)) throw "无法识别正确的hex";
  return e.length >= 6 ? e : `#${e.substring(1).split("").map((t) => t += t).join("")}`;
}
function Qe(e) {
  if (!j(e)) throw "无法识别正确的hex";
  return e.substring(1).length < 6 && (e = K(e).substring(1)), e = e.match(/[0-9a-f]{2}/gi).map((t, n) => n === 3 ? E(parseInt(t, 16) / 255) : parseInt(t, 16)).join(","), e;
}
function X(e) {
  return m(e) ? e.split(",").every((t, n) => n == 3 ? Number(t) * 255 >= 0 && Number(t) * 255 <= 255 : Number(t) >= 0 && Number(t) <= 255) : !1;
}
function Ve(e) {
  if (!X(e)) throw "无法识别正确的rgba";
  let t = e.split(",");
  return t = t.map((n, r) => r == 3 ? Math.round(Number(n) * 255).toString(16).padStart(2, "0") : Number(n).toString(16).padStart(2, "0")), "#" + t.join("");
}
function We(e) {
  if (!j(e)) throw "无法识别正确的hex";
  return e.substring(1).length < 6 ? e : "#" + e.substring(1).match(/[0-9a-f]{2}/gi).map((n) => n[0]).join("");
}
function Ge(e = document.body) {
  const t = e.requestFullscreen || e.mozRequestFullscreen || e.msRequestFullscreen || e.webkitRequestFullscreen;
  if (!t) throw "浏览器不支持全屏操作";
  t();
}
function Ke() {
  const e = document.exitFullscreen || document.msExitFullscreen || document.mozCancelFullScreen || document.webkitExitFullscreen;
  if (!e) throw "浏览器不支持全屏操作";
  e();
}
export {
  Te as arrObjSum,
  Ne as assign,
  Ye as assignMin,
  $e as base64ToBlob,
  ye as byteSize,
  Me as chunk,
  De as compact,
  He as copy,
  Ae as createData,
  h as days,
  pe as debounce,
  M as deepClone,
  F as detectDeviceType,
  Ie as downloadFile,
  Ke as exitFullscreen,
  K as extendHex,
  U as formats,
  Oe as fromPairs,
  Le as gbkToUtf8,
  de as getDataSection,
  le as getMonthDays,
  me as getMonthsUntilDate,
  Ce as getUUID,
  xe as getUrlParam,
  Y as getUrlQuery,
  Fe as hasOwn,
  Qe as hexToRgb,
  he as howLongAgo,
  J as isAndroid,
  H as isArrObj,
  p as isArray,
  $ as isBasicType,
  b as isBoolean,
  z as isDate,
  oe as isDesktop,
  ie as isDom,
  R as isEmptyObject,
  S as isEqual,
  g as isFunction,
  j as isHex,
  se as isIOS,
  re as isIncludeChinese,
  V as isInt,
  B as isJsonString,
  _ as isLocation,
  v as isMap,
  x as isMobile,
  O as isNullOrUndefined,
  d as isNumber,
  a as isObject,
  P as isPhone,
  ee as isPromise,
  ce as isQQ,
  X as isRgba,
  te as isSet,
  m as isString,
  ne as isSymbol,
  D as isURL,
  ue as isWeixin,
  ae as isWeixinMini,
  fe as isWin,
  Ge as launchFullscreen,
  W as mask,
  Ue as omit,
  ge as once,
  f as padInt,
  Pe as phoneEncrypt,
  Re as pick,
  N as qsParse,
  T as qsStringify,
  w as random,
  Be as randomHex,
  Je as randomRgba,
  Se as removeHTML,
  G as resetObjectValues,
  ke as reviseUrlQuery,
  Ve as rgbToHex,
  qe as scrollTo,
  Ee as setUrlQuery,
  We as shrinkHex,
  we as throttle,
  A as timeStamp,
  E as toFixed,
  Q as toNumber,
  u as typeOf,
  je as unique,
  be as upperFirst,
  Z as version
};
