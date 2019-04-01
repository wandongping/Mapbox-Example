define([], function () {
  var r = {
    tsMinute: 6e4
  };
  r.tsHour = 60 * r.tsMinute;
  r.qs = function (e, t) {
    return (t || document).querySelector(e)
  };
  r.bound = function (e, t, n) {
    return Math.max(Math.min(e, n), t)
  };
  r.pad = function(e, t) {
    for (var n = String(e); n.length < (t || 2); )
        n = "0" + n;
    return n
  };
  return r
});