const i = function(t) {
  return /^1[3-9][\d]{9}$/.test(t.toString());
}, d = function(t) {
  return u(t) === "Array";
}, u = function(t) {
  return Object.prototype.toString.call(t).slice(8, -1);
}, a = (t) => {
  if (!i(t))
    throw "\u624B\u673A\u53F7\u683C\u5F0F\u4E0D\u6B63\u786E";
  return typeof t == "number" && (t = t.toString()), t.replace(t.substring(3, 7), "****");
}, l = (t, o) => {
  var s;
  const n = o ? new URL(o) : window.location, e = new RegExp("(^|&)" + t + "=([^&]*)(&|$)"), r = n.search.substring(1).match(e), c = (s = n.hash.split("?")[1]) == null ? void 0 : s.match(e);
  return r != null ? decodeURIComponent(r[2]) : c != null ? decodeURIComponent(c[2]) : null;
}, p = (t, o) => {
  const n = document.createElement("a"), e = window.URL.createObjectURL(o);
  n.style.display = "none", n.href = e, n.download = t, document.body.appendChild(n), n.click(), window.URL.revokeObjectURL(e), n.remove();
};
export {
  p as downloadFile,
  u as getDataType,
  l as getUrlParam,
  d as isArray,
  i as isPhone,
  a as phoneEncrypt
};
