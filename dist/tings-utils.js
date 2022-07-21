const n = function(t) {
  return Object.prototype.toString.call(t).slice(8, -1);
}, r = function(t) {
  return /^1[3-9][\d]{9}$/.test(t.toString());
}, o = function(t) {
  return n(t) === "Array";
}, e = (t) => (typeof t == "number" && (t = t.toString()), t.replace(t.substring(3, 7), "****"));
export {
  n as getDataType,
  o as isArray,
  r as isPhone,
  e as phoneR1
};
