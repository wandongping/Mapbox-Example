define([], function () {
  return {
    extend: function () {
      var e, t, n, i, s = arguments,
        a = Object.create(this);
      for (t = 0, n = arguments.length; t < n; t++)
        for (e in i = s[t]) a[e] = i[e];
      return a
    },
    instance: function () {
      var e = this.extend.apply(this, arguments);
      return "function" == typeof e._init && e._init.call(e), e
    }
  }
});