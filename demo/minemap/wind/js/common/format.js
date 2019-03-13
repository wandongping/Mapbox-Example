define(["utils"], function (r) {
  var t = {},
    n = function (e, t) {
      return "" + (e % 12 || 12) + (t = null != t ? ":" + r.pad(t) : "") + (12 <= e ? " PM" : " AM")
    },
    i = function (e, t) {
      return e + ":" + (null != t ? r.pad(t) : "00")
    };
  t.getHoursFunction = function () {
      return i
    },
    t.hourUTC = function (e) {
      return r.pad(new Date(e).getUTCHours()) + ":00Z"
    },
    t.hourMinuteUTC = function (e) {
      var t = new Date(e);
      return r.pad(t.getUTCHours()) + ":" + r.pad(t.getUTCMinutes()) + "Z"
    },
    t.thousands = function (e) {
      return e ? e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : ""
    };
  var s = ["N", "NE", "E", "SE", "S", "SW", "W", "NW", "N"],
    o = function (e) {
      var t = Math.floor((+e + 22.5) / 45);
      return a["DIRECTION_" + s[t]] || "-"
    },
    l = function (e) {
      return e + "°"
    };
  t.getDirFunction = function () {
      return e.get("numDirection") ? l : o
    },
    t.obsoleteClass = function (e, t) {
      void 0 === t && (t = 30);
      var n = (Date.now() / 1e3 - e) / 60;
      return n < .3 * t ? "fresh" : n < t ? "normal" : "obsolete"
    },
    t.howOld = function (e) {
      var t = !1,
        n = -1;
      if ("diffMin" in e)
        n = +e.diffMin;
      else if ("ts" in e)
        n = Math.floor((Date.now() - +e.ts) / 6e4);
      else if ("min" in e)
        n = Math.floor(Date.now() / 6e4 - +e.min);
      else {
        if (!("ux" in e))
          return "";
        n = Math.floor((Date.now() / 1e3 - +e.ux) / 60)
      }
      if (n < 0) {
        if (e.translate)
          return "";
        n = Math.abs(n),
          t = !0
      }
      if (e && e.translate) {
        if (0 === n)
          return a.NOW;
        if (n < 60)
          return r.template(a.METAR_MIN_AGO, {
            DURATION: n
          });
        if (n < 240) {
          var i = Math.floor(n / 60),
            s = n - 60 * i;
          return r.template(a.METARS_H_M_AGO, {
            DURATION: i,
            DURATIONM: s
          })
        }
        return n < 1440 ? r.template(a.METAR_HOURS_AGO, {
          DURATION: Math.floor(n / 60)
        }) : r.template(a.METARS_DAYS_AGO, {
          DURATION: Math.floor(n / 1440)
        })
      }
      return (e.useAgo && t ? "in " : "") + (n < 60 ? Math.floor(n) + "m" : Math.floor(n / 60) + "h " + Math.floor(n % 60) + "m") + (e.useAgo && !t ? " ago" : "")
    };
  var c = function (e) {
    return [Math.abs(0 | e), "°", 0 | (e < 0 ? e = -e : e) % 1 * 60, "'", 0 | 60 * e % 1 * 60, '"'].join("")
  };
  return t.DD2DMS = function (e, t) {
      return [e < 0 ? "S" : "N", c(e), ", ", t < 0 ? "W" : "E", c(t)].join("")
    },
    t.utcOffsetStr = function (e) {
      return (e < 0 ? "-" : "+") + r.pad(Math.abs(Math.round(e))) + ":00"
    },
    t.seoString = function (e) {
      return e.replace(/[/,.]/g, " ").replace(/\s+/g, "-")
    },
    t.seoLang = function (e) {
      return "en" === e ? "" : e + "/"
    },
    t
});