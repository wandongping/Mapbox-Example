define(["class"], function (e) {
  var u = [];
  return e.extend({
    _init: function () {
      this.latestId = 1,
        this._eventedCache = {},
        this.trigger = this.emit,
        this.fire = this.emit
    },
    emit: function (t, e, n, i, s) {
      var a, r, o, l, c;
      if (o = this.ident,
        l = t,
        c = e,
        u.push({
          ts: Date.now(),
          txt: o + ": " + l + ("string" == typeof c ? " " + c : "")
        }),
        5 < u.length && u.shift(),
        a = this._eventedCache[t])
        for (var d = a.length; d--;) {
          r = a[d];
          try {
            r.callback.call(r.context, e, n, i, s),
              r.once && this.off(r.id)
          } catch (e) {
            console.log("Evented", "Failed to call " + t, e)
          }
        }
    },
    on: function (e, t, n, i) {
      return e in this._eventedCache || (this._eventedCache[e] = []),
        this._eventedCache[e].push({
          id: ++this.latestId,
          callback: t,
          context: n || this,
          once: i
        }),
        this.latestId
    },
    once: function (e, t, n) {
      return this.on(e, t, n, !0)
    },
    off: function (e, t, n) {
      var i, s;
      if ("number" == typeof e) {
        for (var a in this._eventedCache)
          if (i = this._eventedCache[a]) {
            for (s = i.length; s--;)
              i[s].id === e && i.splice(s, 1);
            0 === i.length && delete this._eventedCache[a]
          }
      } else if (i = this._eventedCache[e]) {
        if (i = this._eventedCache[e])
          for (s = i.length; s--;)
            i[s].callback !== t || n && n !== i[s].context || i.splice(s, 1);
        0 === i.length && delete this._eventedCache[e]
      }
    }
  })
});