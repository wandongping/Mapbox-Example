define("timeAnimation", ["utils", "products", "broadcast"], function (t, i, s) {
  var a, r, o = !1,
    l = null,
    c = null,
    d = 2,
    u = !1,
    h = 50;
  n.on("animation", function (e) {
    e !== o && (e ? function () {
      // if (!(c = i[n.get("product")]).animation)
      //   return g();
      o = !0,
        r = a = n.get("path"),
        d = 2,
        n.on("visibility", f),
        n.on("product", g),
        n.on("overlay", p),
        s.on("redrawFinished", m),
        s.on("paramsChanged", v),
        s.on("pluginOpened", g),
        y(),
        s.emit("animationStarted")
    }() : (o = !1,
      clearTimeout(l),
      n.off("visibility", f),
      n.off("product", g),
      n.off("overlay", p),
      s.off("redrawFinished", m),
      s.off("paramsChanged", v),
      s.off("pluginOpened", g)))
  });
  var f = function (e) {
      e || g()
    },
    m = function (e) {
      return a = e.path
    },
    p = function (e) {
      return /Accu$/.test(e) && g()
    },
    g = function () {
      return n.set("animation", !1)
    },
    v = function (e) {
      u = r !== a,
        r = e.path
    };

  function y() {
    d = t.bound(d + (u ? -.25 : .1), .8, 3);
    var e = n.get("timestamp") + h * c.animationSpeed * d;
    e < c.calendar.end ? (n.set("timestamp", e),
      l = setTimeout(y, h)) : g()
  }
});