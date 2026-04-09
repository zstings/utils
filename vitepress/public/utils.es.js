//#region src/common/typeOf.ts
function e(e) {
	return Object.prototype.toString.call(e).slice(8, -1);
}
//#endregion
//#region package.json
var t = "0.9.2";
//#endregion
//#region src/verify/isArray.ts
function n(t) {
	return e(t) === "Array";
}
//#endregion
//#region src/verify/isPhone.ts
function r(e) {
	return /^1[3-9][\d]{9}$/.test(e.toString());
}
//#endregion
//#region src/verify/isLocation.ts
function i(t) {
	return e(t) === "Location";
}
//#endregion
//#region src/verify/isObject.ts
function a(t) {
	return t !== null && e(t) === "Object";
}
//#endregion
//#region src/verify/isDate.ts
function o(t) {
	return e(t) === "Date";
}
//#endregion
//#region src/verify/isFunction.ts
function s(t) {
	return e(t) === "Function";
}
//#endregion
//#region src/verify/isMap.ts
function c(t) {
	return e(t) === "Map";
}
//#endregion
//#region src/verify/isPromise.ts
function l(t) {
	return e(t) === "Promise" && s(t.then) && s(t.catch);
}
//#endregion
//#region src/verify/isSet.ts
function u(t) {
	return e(t) === "Set";
}
//#endregion
//#region src/verify/isString.ts
function d(t) {
	return e(t) === "String";
}
//#endregion
//#region src/verify/isSymbol.ts
function f(t) {
	return e(t) === "Symbol";
}
//#endregion
//#region src/verify/isNumber.ts
function p(t) {
	return e(t) === "Number";
}
//#endregion
//#region src/verify/isBoolean.ts
function m(t) {
	return e(t) === "Boolean";
}
//#endregion
//#region src/verify/isEmptyObject.ts
function h(e) {
	if (!a(e)) throw "传入参数不是Object";
	return !Object.keys(e).length;
}
//#endregion
//#region src/verify/isIncludeChinese.ts
function ee(e = "") {
	return /\p{sc=Han}/gu.test(e);
}
//#endregion
//#region src/verify/isDom.ts
function te(t) {
	return e(t).includes("Element");
}
//#endregion
//#region src/verify/isArrObj.ts
function g(e) {
	return !n(e) || e.length == 0 ? !1 : e.every((e) => a(e));
}
//#endregion
//#region src/verify/isNullOrUndefined.ts
function _(t) {
	return ["Null", "Undefined"].includes(e(t));
}
//#endregion
//#region src/verify/isEqual.ts
function v(e = "", t = "") {
	if (arguments.length == 1 && (t = e), e === t) return !0;
	if (e === null || t === null || e.constructor !== t.constructor) return !1;
	if (Array.isArray(e)) {
		if (!Array.isArray(t) || e.length !== t.length) return !1;
		for (let n = 0; n < e.length; n++) if (!v(e[n], t[n])) return !1;
		return !0;
	}
	if (typeof e == "object") {
		let n = Object.keys(e), r = Object.keys(t);
		if (n.length !== r.length) return !1;
		for (let i of n) if (!r.includes(i) || !v(e[i], t[i])) return !1;
		return !0;
	}
	return !1;
}
//#endregion
//#region src/verify/isBasicType.ts
function y(t) {
	return [
		"String",
		"Number",
		"Boolean",
		"Null",
		"Undefined",
		"Symbol",
		"BigInt"
	].includes(e(t));
}
//#endregion
//#region src/verify/isJsonString.ts
function b(e) {
	try {
		return JSON.parse(e), !0;
	} catch {
		return !1;
	}
}
//#endregion
//#region src/device/detectDeviceType.ts
function x() {
	return /Android|iPhone|iPad/i.test(navigator.userAgent) ? "Mobile" : "Desktop";
}
//#endregion
//#region src/device/isMobile.ts
function S() {
	return x() === "Mobile";
}
//#endregion
//#region src/device/isAndroid.ts
function C() {
	return S() && /Android/i.test(navigator.userAgent);
}
//#endregion
//#region src/device/isDesktop.ts
function ne() {
	return x() === "Desktop";
}
//#endregion
//#region src/device/isIOS.ts
function re() {
	return S() && !C();
}
//#endregion
//#region src/device/isQQ.ts
function ie() {
	return /QQ\//i.test(navigator.userAgent);
}
//#endregion
//#region src/device/isWeixin.ts
function ae() {
	return /MicroMessenger\//i.test(navigator.userAgent);
}
//#endregion
//#region src/device/isWeixinMini.ts
function oe() {
	return /miniProgram/i.test(navigator.userAgent);
}
//#endregion
//#region src/device/isWin.ts
function w() {
	return /Windows/i.test(navigator.userAgent);
}
//#endregion
//#region src/number/padInt.ts
function T(e, t = 2) {
	if (isNaN(Number(e))) throw "不是一个合法的数字";
	return Number(e).toString().padStart(t, "0");
}
//#endregion
//#region src/number/toNumber.ts
function E(e) {
	if (isNaN(Number(e))) throw `${e}无法转换为数字`;
	return Number(e);
}
//#endregion
//#region src/number/toFixed.ts
function D(e, t = 2, n = !0, r) {
	if (r ??= "number", !m(n)) throw "isRound不是boolean";
	if (r !== "number" && r !== "string") throw "type 不是 number 或 string";
	e = E(e).toString();
	let i = n ? Number(e).toFixed(t) : ((e) => {
		let n = e.split(".");
		return `${n[0]}.${(n[1] || "").slice(0, t).padEnd(t, "0")}`;
	})(e);
	return r === "string" ? i : Number(i);
}
//#endregion
//#region src/verify/isInt.ts
function O(e) {
	return Number.isInteger(e);
}
//#endregion
//#region src/date/days.ts
function k(e = /* @__PURE__ */ new Date()) {
	if (e = e == null || typeof e == "string" && e.trim() === "" ? /* @__PURE__ */ new Date() : n(e) ? new Date(...e) : new Date(e), e.toString() === "Invalid Date") throw "Invalid Date";
	return e;
}
//#endregion
//#region src/date/timeStamp.ts
function A(e = /* @__PURE__ */ new Date(), t = "ms") {
	let n = k(e).getTime();
	return t == "s" ? n / 1e3 | 0 : n;
}
//#endregion
//#region src/date/formats.ts
function j(e = /* @__PURE__ */ new Date(), t = "YYYY-MM-DD hh:mm:ss") {
	let n = k(e), r = T(n.getFullYear()), i = r.toString().substring(2), a = T(n.getMonth() + 1), o = T(n.getMonth() + 1, 1), s = T(n.getDate()), c = T(n.getDate(), 1), l = T(n.getHours()), u = T(n.getHours(), 1), d = T(n.getMinutes()), f = T(n.getMinutes(), 1), p = T(n.getSeconds()), m = T(n.getSeconds(), 1);
	return t.replace("YYYY", r).replace("YY", i).replace("MM", a).replace("M", o).replace("DD", s).replace("D", c).replace("hh", l).replace("h", u).replace("mm", d).replace("m", f).replace("ss", p).replace("s", m);
}
//#endregion
//#region src/date/getMonthDays.ts
function se(e, t) {
	e ||= (/* @__PURE__ */ new Date()).getFullYear(), t ||= (/* @__PURE__ */ new Date()).getMonth() + 1;
	let n = new Date(e, t, 0);
	if (isNaN(n.getTime())) throw "Invalid Date";
	return n.getDate();
}
//#endregion
//#region src/date/howLongAgo.ts
function ce(e = /* @__PURE__ */ new Date(), t = /* @__PURE__ */ new Date()) {
	e = k(e).getTime(), t = k(t).getTime();
	let n = t - e;
	if (n < 0) throw "startTime 必须大于 endTime";
	return n >= 31536e6 ? Math.floor(n / 31536e6) + "年前" : n >= 2592e6 ? Math.floor(n / 2592e6) + "月前" : n >= 864e5 ? Math.floor(n / 864e5) + "天前" : n >= 36e5 ? Math.floor(n / 36e5) + "小时前" : n >= 6e4 ? Math.floor(n / 6e4) + "分钟前" : n >= 1e3 ? Math.floor(n / 1e3) + "秒前" : "刚刚";
}
//#endregion
//#region src/date/getDataSection.ts
function le(e = 1, t = {
	start: /* @__PURE__ */ new Date(),
	format: "YYYY-MM-DD",
	timestamp: !1
}) {
	if (!p(e)) throw "day 必须是数字";
	if (!a(t)) throw "option 必须是对象";
	let { start: n = /* @__PURE__ */ new Date(), format: r = "YYYY-MM-DD", timestamp: i = !1 } = t;
	if (!d(r)) throw "option.format 必须是字符串";
	if (!m(i)) throw "option.timestamp 必须是布尔值";
	let o = k(n).getTime(), s = o - (e - 1) * 864e5;
	return i ? [A(s, r), A(o, r)] : [j(s, r), j(o, r)];
}
//#endregion
//#region src/date/getMonthsUntilDate.ts
function ue(e) {
	if ((e === "" || e == null) && (e = k().toISOString().slice(0, 7)), !/^\d{4}-\d{1,2}$/.test(e)) throw "Invalid Date, eg: YYYY-MM";
	let t = e.split("-");
	if (t[1] = t[1].padStart(2, "0"), Number(t[0]) < 1970) throw "年份不能小于1970";
	if (Number(t[1]) < 1 || Number(t[1]) > 12) throw "月份不能小于1或大于12";
	let n = k(e), r = k(), i = [], a = r.getFullYear(), o = r.getMonth() + 1;
	for (;;) {
		let e = o.toString().padStart(2, "0");
		i.push(`${a}-${e}`);
		let t = r.getTime() < n.getTime();
		if (a === n.getFullYear() && o === n.getMonth() + 1) break;
		t ? (o++, o > 12 && (o = 1, a++)) : (o--, o < 1 && (o = 12, a--));
	}
	return i;
}
//#endregion
//#region src/function/debounce.ts
function de(e, t = 500, n = {
	leading: !1,
	trailing: !0
}) {
	let { leading: r = !1, trailing: i = !0 } = n, a = 0, o = r;
	if (!s(e)) throw "func不是function";
	if (t && !p(t)) throw "awit不是number";
	if (!m(r)) throw "leading不是boolean";
	if (!m(i)) throw "trailing不是boolean";
	return function(...n) {
		if (clearTimeout(a), o && r) {
			o && e.apply(this, n), o = !1, a = setTimeout(() => {
				o = !0;
			}, t);
			return;
		}
		a = setTimeout(() => {
			o = !0, i && e.apply(this, n);
		}, t);
	};
}
//#endregion
//#region src/function/throttle.ts
function M(e, t = 500, n = !1) {
	let r = 0;
	if (!s(e)) throw "func不是function";
	if (t && !p(t)) throw "wait不是number";
	if (!m(n)) throw "immediate不是boolean";
	return function(...i) {
		n &&= (e.apply(this, i), !1), r ||= setTimeout(() => {
			e.apply(this, i), r = 0;
		}, t);
	};
}
//#endregion
//#region src/function/once.ts
function N(e) {
	if (!s(e)) throw "func不是function";
	let t = !1;
	return function(...n) {
		t || (t = !0, e.apply(this, n));
	};
}
//#endregion
//#region src/string/upperFirst.ts
function P(e) {
	return e.toString().replace(/(\w)/, (e) => e.toLocaleUpperCase());
}
//#endregion
//#region src/string/byteSize.ts
function F(e) {
	return new Blob([e.toString()]).size;
}
//#endregion
//#region src/string/removeHTML.ts
function I(e) {
	return e.toString().replace(/<[^>]+>/g, "").replace(/&(lt|gt|le|ge|nbsp|amp|quot|times|Alpha|Beta|Gamma|Delta|Epsilon|Zeta|Eta|Theta|Iota|Kappa|Lambda|MU|NU|Xi|Omicron|Pi|Rho|Sigma|Tau|Upsilon|Phi|Chi|Psi|Omega|alpha|beta|gamma|delta|epsilon|zeta|eta|theta|iota|kappa|lambda|mu|nu|xi|omicron|pi|rho|sigmaf|sigma|tau|upsilon|phi|chi|psi|omega|thetasym|upsih|piv|circ|tilde|ndash|permil|lsquo|rsquo|ldquo|rdquo|prime);/gi, "").trim();
}
//#endregion
//#region src/string/mask.ts
function L(e, t = 0, n = Infinity, r = "*") {
	if (!p(t)) throw "start 必须是数字";
	if (!p(n)) throw "length 必须是数字";
	if (!d(r)) throw "mask 必须是字符串";
	e = e.toString();
	let i = e.slice(t, n + t);
	return e.replace(i, "".padEnd(i.length, r));
}
//#endregion
//#region src/array/chunk.ts
function R(e, t = 1) {
	if (!n(e)) throw "array参数需要Array";
	if (!p(t) || !O(t) || t <= 0) throw "请检查size参数，必须符合大于0的整数";
	let r = [], i = Math.ceil(e.length / t);
	for (let n = 0; n < i; n++) r.push(e.slice(n * t, n * t + t));
	return r;
}
//#endregion
//#region src/array/compact.ts
function z(e) {
	if (!n(e)) throw "array参数需要Array";
	return e.filter((e) => !!e);
}
//#endregion
//#region src/array/fromPairs.ts
function B(e) {
	if (!n(e)) throw "array传入参数需要Array";
	return Object.fromEntries(new Map(e));
}
//#endregion
//#region src/array/unique.ts
function V(e, t) {
	if (!n(e)) throw "array传入参数需要Array";
	if (t?.key && !d(t.key)) throw "key传入参数需要String";
	return t?.key && t.deep != 1 && (t.deep = !0), t ||= { deep: !0 }, t && t.deep ? e.reduce((e, n) => {
		if (t.key && n[t.key] == null) throw "key指定的属性不存在";
		return (t.key ? e.some((e) => v(e[t.key], n[t.key])) : e.some((e) => v(e, n))) || e.push(n), e;
	}, []) : [...new Set(e)];
}
//#endregion
//#region src/object/createData.ts
function H(e = 1, t = 0) {
	let n = {}, r = n;
	for (let n = 0; n < e; n++) {
		r = r.data = {};
		for (let e = 0; e < t; e++) r[e] = e;
	}
	return n;
}
//#endregion
//#region src/util/deepClone.ts
function U(e) {
	if (typeof e == "object") {
		let t = Array.isArray(e) ? [] : {};
		for (let n in e) t[n] = U(e[n]);
		return t;
	} else return e;
}
//#endregion
//#region src/object/omit.ts
function fe(e, t) {
	if (!a(e)) throw "target参数必须是object";
	return e = U(e), (t || []).forEach((t) => delete e[t]), e;
}
//#endregion
//#region src/object/assign.ts
function pe(e, ...t) {
	if (!a(e)) throw "target参数必须是object";
	return h(e) ? {} : Object.assign(e, ...t);
}
//#endregion
//#region src/object/assignMin.ts
function me(e, ...t) {
	if (!a(e)) throw "target参数必须是object";
	if (h(e)) return {};
	let n = Object.assign({}, e, ...t);
	return Object.keys(e).forEach((t) => e[t] = n[t]), e;
}
//#endregion
//#region src/object/arrObjSum.ts
function he(e, t) {
	if (!g(e)) throw "object 必须是数组对象";
	let n = {};
	return t.forEach((t) => {
		n[t] = e.reduce((e, n) => e + (isNaN(n[t]) ? 0 : Number(n[t])), 0);
	}), n;
}
//#endregion
//#region src/object/pick.ts
function ge(e, t = []) {
	if (!a(e)) throw Error("target参数必须是object");
	if (!n(t)) throw Error("keys参数必须是array");
	return t.length == 0 ? {} : (e = U(e), Object.keys(e).forEach((n) => {
		t.includes(n) || delete e[n];
	}), e);
}
//#endregion
//#region src/object/resetObjectValues.ts
function W(t, n = 0) {
	if (!a(t)) throw Error("target参数必须是object");
	return n != 1 && (t = U(t)), Object.keys(t).forEach((n) => {
		e(t[n]) == "String" && (t[n] = ""), e(t[n]) == "Number" && (t[n] = 0), e(t[n]) == "Boolean" && (t[n] = !1), e(t[n]) == "Array" && (t[n] = []), e(t[n]) == "Object" && W(t[n], 1);
	}), t;
}
//#endregion
//#region src/object/hasOwn.ts
function _e(e, t) {
	if (!a(e)) throw Error("target参数必须是object");
	return Object.prototype.hasOwnProperty.call(e, t);
}
//#endregion
//#region src/url/isURL.ts
function G(e) {
	if (!d(e)) throw "参数必须是string";
	try {
		return new URL(e), !0;
	} catch {
		return !1;
	}
}
//#endregion
//#region src/url/getUrlParam.ts
function ve(e, t = window.location.href) {
	if (!G(t)) throw "url 参数错误，不是有效的";
	let n = new URL(t), r = RegExp("(^|&)" + e + "=([^&]*)(&|$)"), i = n.search.substring(1).match(r), a = n.hash.split("?")[1]?.match(r);
	return i == null ? a == null ? null : decodeURIComponent(a[2]) : decodeURIComponent(i[2]);
}
//#endregion
//#region src/url/qsParse.ts
function K(e = "", t = !0) {
	let n = JSON.parse(JSON.stringify(Object.fromEntries(new URLSearchParams(e))));
	return t && Object.keys(n).forEach((e) => {
		b(n[e]) && (n[e].startsWith("{") || n[e].startsWith("[")) && (n[e] = JSON.parse(n[e]));
	}), n;
}
//#endregion
//#region src/url/getUrlQuery.ts
function q(e = {
	url: window.location.href,
	type: "all"
}) {
	if (_(e) || !a(e)) throw "参数错误， 应该传入一个对象";
	if (e.url ||= window.location.href, e.type ||= "all", !G(e.url)) throw "url 参数错误，不是有效的";
	if (!d(e.type) || ![
		"search",
		"hash",
		"all"
	].includes(e.type)) throw "type 参数错误， 应该传入一个字符串 'search' | 'hash' | 'all'";
	let { url: t, type: n } = e, r = new URL(t), i = r.search.substring(1), o = r.hash.indexOf("?") >= 0 ? r.hash.slice(r.hash.indexOf("?") + 1) : "", s = n == "hash" ? {} : K(i), c = n == "search" ? {} : K(o);
	return Object.assign({}, s, c, s);
}
//#endregion
//#region src/url/qsStringify.ts
function J(e = {}, t = !1) {
	let n = Object.keys(e), r = [];
	for (let t = 0; t < n.length; t++) {
		let i = n[t], a = e[i];
		if (_(a)) continue;
		let o = y(a) ? encodeURIComponent(a) : encodeURIComponent(JSON.stringify(a));
		r.push(i + "=" + o);
	}
	return t ? decodeURIComponent(r.join("&")) : r.join("&");
}
//#endregion
//#region src/url/setUrlQuery.ts
function ye(e, t = "pushState") {
	if (!G(e)) throw "url 参数错误，不是有效的";
	if (!d(t) || !["pushState", "replaceState"].includes(t)) throw "type 参数错误， 应该传入一个字符串 'pushState' | 'replaceState'";
	if (history.state && history.state.current) {
		let t = new URL(e).pathname;
		history.state.current = t;
	}
	window.history[t](history.state, "", e);
}
//#endregion
//#region src/url/reviseUrlQuery.ts
function be(e, t = window.location.href) {
	if (_(e) || !a(e)) throw "参数错误， 应该传入一个对象";
	if (e.search && !a(e.search)) throw "search 参数错误， 应该传入一个对象";
	if (e.hash && !a(e.hash)) throw "hash 参数错误， 应该传入一个对象";
	if (!G(t)) throw "url 参数错误，不是有效的";
	let { origin: n, pathname: r } = new URL(t), { search: i, hash: o } = new URL(t);
	if (e.search) {
		let n = q({
			url: t,
			type: "search"
		}), r = J(Object.assign({}, n, e.search));
		i = r ? "?" + r : "";
	}
	if (e.hash) {
		let n = q({
			url: t,
			type: "hash"
		}), r = J(Object.assign({}, n, e.hash));
		o = r ? o.split("?")[0] + "?" + r : o.split("?")[0];
	}
	return n + r + i + o;
}
//#endregion
//#region src/util/downloadFile.ts
function xe(e, t) {
	let n = document.createElement("a"), r = window.URL.createObjectURL(t);
	n.style.display = "none", n.href = r, n.download = e, document.body.appendChild(n), n.click(), window.URL.revokeObjectURL(r), n.remove();
}
//#endregion
//#region src/util/gbkToUtf8.ts
function Se(e) {
	try {
		return JSON.parse(new TextDecoder("utf-8").decode(e));
	} catch {
		return new TextDecoder("utf-8").decode(e);
	}
}
//#endregion
//#region src/util/getUUID.ts
function Ce() {
	return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, (e) => (Number(e) ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> Number(e) / 4).toString(16));
}
//#endregion
//#region src/util/scrollTo.ts
function we(e = {}, t) {
	let n = 0, { rate: r = 4, num: i = 0, direction: a = "top", dom: o = document.scrollingElement } = e, s = {
		top: "scrollTop",
		left: "scrollLeft"
	}, c = o[s[a]], l = function() {
		if (c += (i - c) / r, Math.abs(c - i) <= 1) {
			o[s[a]] = i, cancelAnimationFrame(n), t && t();
			return;
		}
		o[s[a]] = c, n = requestAnimationFrame(l);
	};
	l();
}
//#endregion
//#region src/util/phoneEncrypt.ts
function Te(e) {
	if (!r(e)) throw "手机号格式不正确";
	return e = e.toString(), L(e, 3, 4);
}
//#endregion
//#region src/util/random.ts
function Y(e = 1, t = 0) {
	if (!p(e)) throw "min 必须整数";
	if (!p(t)) throw "max 必须整数";
	if (e == t) return e;
	let n = Math.max(e, t), r = Math.min(e, t);
	return n - r == 1 ? Math.random() > .5 ? n : r : Math.round(Math.random() * (n - r) + r);
}
//#endregion
//#region src/util/copy.ts
function Ee(e) {
	return new Promise((n, r) => {
		navigator.clipboard ? navigator.clipboard.writeText(e).then(() => n()).catch(() => {
			t(e, n, r);
		}) : t(e, n, r);
	});
	function t(e, t, n) {
		let r = document.createElement("textarea");
		document.body.appendChild(r), r.setAttribute("readonly", "readonly"), r.innerHTML = e, r.select(), r.setSelectionRange(0, r.innerHTML.length);
		let i = document.execCommand("copy");
		r.remove(), i ? t() : n("execCommand error");
	}
}
//#endregion
//#region src/util/base64ToBlob.ts
function De(e, t) {
	let n = window.atob(e.replace(/data:([\s\S]+);base64,/, "")), r = t || e.match(/data:([\s\S]+);base64,/)?.[1] || "text/plain", i = n.length, a = new Uint8Array(i);
	for (; i--;) a[i] = n.charCodeAt(i);
	return new Blob([a], { type: r });
}
//#endregion
//#region src/color/randomHex.ts
function Oe() {
	let e = [
		"0",
		"1",
		"2",
		"3",
		"4",
		"5",
		"6",
		"7",
		"8",
		"9",
		"a",
		"b",
		"c",
		"d",
		"e",
		"f"
	], t = "#";
	for (let n = 0; n < 6; n++) t += e[Y(0, 15)];
	return t;
}
//#endregion
//#region src/color/randomRgba.ts
function ke() {
	return `${Y(0, 255)}, ${Y(0, 255)}, ${Y(0, 255)}, ${D(Y(0, 100) / 100)}`;
}
//#endregion
//#region src/color/isHex.ts
function X(e) {
	return d(e) ? /#(([0-9a-f]{3})|([0-9a-f]{4})|([0-9a-f]{6})|([0-9a-f]{8}))$/gi.test(e) : !1;
}
//#endregion
//#region src/color/extendHex.ts
function Z(e) {
	if (!X(e)) throw "无法识别正确的hex";
	return e.length >= 6 ? e : `#${e.substring(1).split("").map((e) => e += e).join("")}`;
}
//#endregion
//#region src/color/hexToRgb.ts
function Ae(e) {
	if (!X(e)) throw "无法识别正确的hex";
	return e.substring(1).length < 6 && (e = Z(e).substring(1)), e = e.match(/[0-9a-f]{2}/gi).map((e, t) => t === 3 ? D(parseInt(e, 16) / 255) : parseInt(e, 16)).join(","), e;
}
//#endregion
//#region src/color/isRgba.ts
function Q(e) {
	return d(e) ? e.split(",").every((e, t) => t == 3 ? Number(e) * 255 >= 0 && Number(e) * 255 <= 255 : Number(e) >= 0 && Number(e) <= 255) : !1;
}
//#endregion
//#region src/color/rgbToHex.ts
function $(e) {
	if (!Q(e)) throw "无法识别正确的rgba";
	let t = e.split(",");
	return t = t.map((e, t) => t == 3 ? Math.round(Number(e) * 255).toString(16).padStart(2, "0") : Number(e).toString(16).padStart(2, "0")), "#" + t.join("");
}
//#endregion
//#region src/color/shrinkHex.ts
function je(e) {
	if (!X(e)) throw "无法识别正确的hex";
	return e.substring(1).length < 6 ? e : "#" + e.substring(1).match(/[0-9a-f]{2}/gi).map((e) => e[0]).join("");
}
//#endregion
//#region src/dom/launchFullscreen.ts
function Me(e = document.body) {
	let t = e.requestFullscreen || e.mozRequestFullscreen || e.msRequestFullscreen || e.webkitRequestFullscreen;
	if (!t) throw "浏览器不支持全屏操作";
	t();
}
//#endregion
//#region src/dom/exitFullscreen.ts
function Ne() {
	let e = document.exitFullscreen || document.msExitFullscreen || document.mozCancelFullScreen || document.webkitExitFullscreen;
	if (!e) throw "浏览器不支持全屏操作";
	e();
}
//#endregion
export { he as arrObjSum, pe as assign, me as assignMin, De as base64ToBlob, F as byteSize, R as chunk, z as compact, Ee as copy, H as createData, k as days, de as debounce, U as deepClone, x as detectDeviceType, xe as downloadFile, Ne as exitFullscreen, Z as extendHex, j as formats, B as fromPairs, Se as gbkToUtf8, le as getDataSection, se as getMonthDays, ue as getMonthsUntilDate, Ce as getUUID, ve as getUrlParam, q as getUrlQuery, _e as hasOwn, Ae as hexToRgb, ce as howLongAgo, C as isAndroid, g as isArrObj, n as isArray, y as isBasicType, m as isBoolean, o as isDate, ne as isDesktop, te as isDom, h as isEmptyObject, v as isEqual, s as isFunction, X as isHex, re as isIOS, ee as isIncludeChinese, O as isInt, b as isJsonString, i as isLocation, c as isMap, S as isMobile, _ as isNullOrUndefined, p as isNumber, a as isObject, r as isPhone, l as isPromise, ie as isQQ, Q as isRgba, u as isSet, d as isString, f as isSymbol, G as isURL, ae as isWeixin, oe as isWeixinMini, w as isWin, Me as launchFullscreen, L as mask, fe as omit, N as once, T as padInt, Te as phoneEncrypt, ge as pick, K as qsParse, J as qsStringify, Y as random, Oe as randomHex, ke as randomRgba, I as removeHTML, W as resetObjectValues, be as reviseUrlQuery, $ as rgbToHex, we as scrollTo, ye as setUrlQuery, je as shrinkHex, M as throttle, A as timeStamp, D as toFixed, E as toNumber, e as typeOf, V as unique, P as upperFirst, t as version };
