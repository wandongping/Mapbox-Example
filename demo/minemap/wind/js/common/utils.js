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
  return r
});