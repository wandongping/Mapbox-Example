/*!
	Copyright(c) 2014 - 2017 Citationtech SE, Windyty SE, Ivo Lukacovic
	Copyright(c) 2014 - 2018 Windyty SE
	All rights reserved
*/
!function() {
  var y, w = Date.now(), b = {};
  window.windySentErrors = [],
  window.onerror = i.bind(null, "error");
  try {
      new Float32Array(100)
  } catch (e) {
      return i("startup", "Type Array not supported", null, null, null, e, "errorLogger"),
      document.addEventListener("DOMContentLoaded", function() {
          document.getElementById("not-supported").style.display = "block"
      })
  }
  function i(e, t, n, i, s, a, r) {
      var o, l, c = W.rootScope, d = Date.now();
      try {
          "error" === e && "object" == typeof t ? (t = (l = t).message,
          n = n || l.filename,
          i = i || l.lineno,
          s = s || l.colno,
          o = l.error && l.error.stack) : a && "object" == typeof a && (n = n || a.fileName || a.sourceURL,
          t = (t && "string" == typeof t ? t : "") + ": " + a.message,
          o = a.stack,
          i = i || a.lineNumber || a.line,
          s = s || a.columNumber || a.column);
          var u = {
              runningMs: d - w,
              type: e,
              module: r,
              msg: t,
              line: i,
              col: s,
              url: window.location.href,
              script: n && n.replace(/.*\//, ""),
              ver: W.version,
              target: W.target,
              stack: o
          }
            , h = T(u.msg, 20) || "universal-key"
            , f = 0;
          if ((f = h in b ? b[h]++ : b[h] = 0) % 10 || 100 < f)
              return;
          if (0 < f && (u.msg = "(" + f + "x) " + u.msg,
          u.repeated = f),
          i && u.script && (u.scriptLine = T(u.script, 10) + "-" + i),
          W.latestBcasts && W.latestBcasts.length) {
              u.latestBcast = "";
              for (var m = 0; m < W.latestBcasts.length; m++)
                  u.latestBcast += W.latestBcasts[m].txt + " (" + (d - W.latestBcasts[m].ts) + "ms. ago)\n"
          }
          if (c) {
              u.uid = c.user && c.user.username;
              var p = W.store && W.store.get("country") || "xx";
              y || (y = p + "-" + (u.uid ? u.uid : c.sessionCounter)),
              u.sessionName = y,
              u.sessionCounter = c.sessionCounter,
              u.lang = W.store && W.store.get("usedLang"),
              u.retina = c.isRetina,
              u.size = window.screen.width + "x" + window.screen.height,
              u.glParticles = c.glParticlesOn,
              u.platform = c.platform
          }
          "index" === W.target && (window.top !== window.self && (u.target = "unlegalIframe"),
          /Android.* wv\)/.test(window.navigator.userAgent) && (u.target = "unlegalWebView"),
          window.cordova && (u.target = "unlegalCordova")),
          u.errorID = T(u.msg, 60);
          var g = new XMLHttpRequest
            , v = JSON.stringify(u);
          g.open("post", "https://node.windy.com/sedlina/err", !0),
          g.setRequestHeader("Content-type", "application/json; charset=utf-8"),
          g.onreadystatechange = function() {
              4 === g.readyState && (delete u.uid,
              window.windySentErrors.push(u))
          }
          ,
          g.send(v)
      } catch (e) {}
  }
  function T(e, t) {
      return e ? e.toString().substr(0, t).toLowerCase().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "") : ""
  }
  window.wError = function(e, t, n) {
      console.error(e, t, n),
      i("user", t, null, null, null, n, e)
  }
}(),
/*!
Adrian Cooney <cooney.adrian@gmail.com> License: MIT */
function(e) {
  var s = {};
  function a(n) {
      var i = [];
      n.dependencies.forEach(function(e) {
          var t = s[e];
          if (!t)
              throw new Error("DI error: Module " + e + " not defined. Required by: " + n.name);
          t.wasLoaded ? i.push(t.loaded) : i.push(a(t))
      });
      try {
          n.loaded = n.callback.apply(null, i),
          n.wasLoaded = !0
      } catch (e) {
          window.wError("tinyrequire", "DI error: Can not resolve " + n.name + " module", e)
      }
      return n.name && (n.name in e ? window.wError("tinyrequire", "DI error: Object W." + n.name + " already exists") : e[n.name] = n.loaded),
      n.loaded
  }
  var r = {};
  e.require = function(e) {
      if ("string" == typeof e) {
          var t = s[e];
          return t.wasLoaded ? t.loaded : a(t)
      }
      Array.isArray(e) && a({
          dependencies: e,
          callback: function() {}
      })
  }
  ,
  e.define = function(e, t, n) {
      if (s[e])
          throw new Error("DI conflict: Module " + e + " already defined.");
      s[e] = {
          name: e,
          dependencies: t,
          callback: n,
          loaded: null,
          wasLoaded: !1
      }
  }
  ,
  e.tag = function(e, t, n, i, s) {
      r[e] = {
          html: t,
          css: n,
          callback: s
      }
  }
  ,
  e.tags = r,
  e.loadOrphanedModules = function() {
      for (var e in s)
          s[e].wasLoaded || a(s[e])
  }
}(window.W),
/*! */
L.CanvasLayer = L.Class.extend({
  initialize: function(e) {
      L.Util.setOptions(this, e || {}),
      this.targetPane = "tilePane",
      this._showCanvasOn = !0,
      this.onInit()
  },
  addTo: function(e) {
      return this.failed = !1,
      e.addLayer(this),
      this
  },
  onAdd: function(e) {
      var t = (this._map = e).getSize()
        , n = e.options.zoomAnimation && L.Browser.any3d;
      if (this._canvas = L.DomUtil.create("canvas", "leaflet-canvas"),
      this.onResizeCanvas(t.x, t.y),
      L.DomUtil.addClass(this._canvas, "leaflet-layer leaflet-zoom-" + (n ? "animated" : "hide")),
      e.getPanes()[this.targetPane].appendChild(this._canvas),
      !this.onCreateCanvas(this._canvas))
          return this.failed = !0,
          void this.onCanvasFailed();
      e.on("resize", this._resize, this),
      e.on("zoomanim", this._animateZoom, this),
      this.options.disableAutoReset || e.on("moveend", this._moveEnd, this),
      this._reset(),
      this._redraw()
  },
  onRemove: function(e) {
      this.onRemoveCanvas(this._canvas),
      e.getPanes()[this.targetPane].removeChild(this._canvas),
      e.off("resize", this._resize, this),
      e.off("zoomanim", this._animateZoom, this),
      this.options.disableAutoReset || e.off("moveend", this._moveEnd, this),
      this._canvas = null
  },
  getCanvas: function() {
      return this._canvas
  },
  showCanvas: function(e) {
      this._showCanvasOn !== e && (this._showCanvasOn = e,
      this._canvas.style.display = this._showCanvasOn ? "block" : "none")
  },
  onResizeCanvas: function(e, t) {
      this._canvas.width = e,
      this._canvas.height = t
  },
  _resize: function(e) {
      this.onResizeCanvas(e.newSize.x, e.newSize.y)
  },
  _reset: function() {
      var e = this._map.containerPointToLayerPoint([0, 0]);
      L.DomUtil.setPosition(this._canvas, e),
      this.onReset()
  },
  reset: function() {
      this._reset()
  },
  onReset: function() {},
  _redraw: function() {
      this._frame = null
  },
  redraw: function() {
      return this._frame || (this._frame = L.Util.requestAnimFrame(this._redraw, this)),
      this
  },
  _moveEnd: function() {
      this._reset(),
      this.onMoveEnd()
  },
  _animateZoom: function(e) {
      var t = this._map.getZoomScale(e.zoom)
        , n = this._map._getCenterOffset(e.center)._multiplyBy(-t).subtract(this._map._getMapPanePos());
      this._canvas.style[L.DomUtil.TRANSFORM] = L.DomUtil.getTranslateString(n) + " scale(" + t + ")"
  },
  onInit: function() {},
  onCreateCanvas: function() {
      return !0
  },
  onCanvasFailed: function() {},
  onRemoveCanvas: function() {},
  onMoveEnd: function() {}
}),
L.PoisOverlay = L.Class.extend({
  initialize: function(e) {
      this.className = e
  },
  getPane: function() {
      return this._map.getPanes().markerPane
  },
  onAdd: function(e) {
      this._map = e,
      this.displayed = !0,
      this._markers = {},
      this._container || (this._container = L.DomUtil.create("div", "leaflet-layer windy-pois pois-" + this.className)),
      this.getPane().appendChild(this._container),
      this._map.on("viewreset", this._reset, this),
      this._map.on("zoomanim", this._animateZoom, this)
  },
  getHtml: function(e, t, n) {
      var i = n.html;
      void 0 === i && (i = "");
      var s = n.style;
      void 0 === s && (s = "");
      var a = n.attrs;
      void 0 === a && (a = []);
      var r = this._map.latLngToLayerPoint(t);
      return '<div data-id="' + e + '"\n                    data-lat="' + t.lat + '" data-lon="' + t.lng + '"\n                    style="transform: translate(' + r.x + "px, " + r.y + "px); " + s + '"\n                    ' + (a ? a.join(" ") : "") + ">" + i + "</div>"
  },
  addPois: function(e, t) {
      this._container && this._container.insertAdjacentHTML("beforeend", e),
      this._markers = t
  },
  removePois: function() {
      this._container && (this._container.innerHTML = "")
  },
  onRemove: function(e) {
      this.getPane().removeChild(this._container),
      this.displayed = !1,
      this._map.off("viewreset", this._reset, this),
      this._map.off("zoomanim", this._animateZoom, this)
  },
  replaceMarker: function(e, t) {
      var n = this._container.querySelector('[data-id="' + e + '"]');
      n && (n.outerHTML = t)
  },
  getAllMarkers: function() {
      return this._container.querySelectorAll("[data-id]")
  },
  _reset: function() {
      this.forAllMarkers(this.getPosReset.bind(this))
  },
  _animateZoom: function(e) {
      this.forAllMarkers(this.getPosZoom.bind(this), e)
  },
  forAllMarkers: function(e, t) {
      for (var n, i, s, a = this.getAllMarkers(), r = a.length, o = 0; o < r; o++)
          n = a[o],
          (s = this._markers[n.dataset.id]) && (i = e(s, t),
          this.setPoistion(n, i))
  },
  getPosZoom: function(e, t) {
      return this._map._latLngToNewLayerPoint(e, t.zoom, t.center).round()
  },
  getPosReset: function(e) {
      return this._map.latLngToLayerPoint(e)
  },
  setPoistion: function(e, t) {
      e.style.transform = "translate(" + t.x + "px, " + t.y + "px)"
  }
}),
L.Map.addInitHook(function() {
  var t, n = this, i = function() {
      clearTimeout(t),
      t = null
  };
  this.on("click", function(e) {
      i(),
      e.type = "singleclick",
      t = setTimeout(function() {
          return n.fire("singleclick", e)
      }, 500)
  }),
  this.on("dblclick", function() {
      return setTimeout(i, 0)
  })
}),
/*! */
W.define("Class", [], function() {
  return {
      extend: function() {
          var e, t, n, i, s = arguments, a = Object.create(this);
          for (t = 0,
          n = arguments.length; t < n; t++)
              for (e in i = s[t])
                  a[e] = i[e];
          return a
      },
      instance: function() {
          var e = this.extend.apply(this, arguments);
          return "function" == typeof e._init && e._init.call(e),
          e
      }
  }
}),
/*! */
W.define("Evented", ["Class"], function(e) {
  /*!
Copyright(c) 2011 Daniel Lamb <daniellmb.com> MIT Licensed */
  var u = [];
  return W.latestBcasts = u,
  e.extend({
      _init: function() {
          this.latestId = 1,
          this._eventedCache = {},
          this.trigger = this.emit,
          this.fire = this.emit
      },
      emit: function(t, e, n, i, s) {
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
              for (var d = a.length; d--; ) {
                  r = a[d];
                  try {
                      r.callback.call(r.context, e, n, i, s),
                      r.once && this.off(r.id)
                  } catch (e) {
                      window.wError("Evented", "Failed to call " + t, e)
                  }
              }
      },
      on: function(e, t, n, i) {
          return e in this._eventedCache || (this._eventedCache[e] = []),
          this._eventedCache[e].push({
              id: ++this.latestId,
              callback: t,
              context: n || this,
              once: i
          }),
          this.latestId
      },
      once: function(e, t, n) {
          return this.on(e, t, n, !0)
      },
      off: function(e, t, n) {
          var i, s;
          if ("number" == typeof e) {
              for (var a in this._eventedCache)
                  if (i = this._eventedCache[a]) {
                      for (s = i.length; s--; )
                          i[s].id === e && i.splice(s, 1);
                      0 === i.length && delete this._eventedCache[a]
                  }
          } else if (i = this._eventedCache[e]) {
              if (i = this._eventedCache[e])
                  for (s = i.length; s--; )
                      i[s].callback !== t || n && n !== i[s].context || i.splice(s, 1);
              0 === i.length && delete this._eventedCache[e]
          }
      }
  })
}),
/*! */
W.define("http", ["lruCache", "rootScope", "utils", "broadcast"], function(e, c, d, u) {
  var h = new e(50)
    , f = ""
    , m = 0
    , i = null
    , t = function() {
      var e = document.head.querySelector('meta[name="token"]')
        , n = []
        , t = {
          token: e && e.content,
          token2: c.userToken || "pending",
          uid: i,
          sc: c.sessionCounter
      };
      d.each(t, function(e, t) {
          return e && n.push(t + "=" + e)
      }),
      f = n.join("&")
  };
  t(),
  u.on("tokenRecieved", t),
  u.on("identityCreated", function(e) {
      i = e,
      t()
  });
  var p = function(e) {
      return {
          headers: e.headers,
          status: e.status,
          data: e.data && e.isJSON ? JSON.parse(e.data) : e.data
      }
  }
    , g = "application/json binary/" + (W.assets || "").replace(/\./g, "")
    , n = function(e, t, r) {
      r = r || {};
      var o, n, i, l = t, s = /^\/?users\//.test(t) || r.withCredentials;
      if (void 0 === r.cache && "get" === e && (r.cache = !0),
      r.cache && (n = h.get(t)))
          return Promise.resolve(n) == n ? n : Promise.resolve(p(n));
      o = new XMLHttpRequest,
      /^http/.test(t) || /^v\/\d+/.test(t) || (t = d.joinPath(c.nodeServer, t),
      /node\.windy/.test(t) && (t = d.addQs(t, f + "&poc=" + ++m))),
      t = encodeURI(t),
      o.open(e, t, !0),
      r.binary && (o.responseType = "arraybuffer"),
      s && (o.withCredentials = !0),
      o.setRequestHeader("Accept", g),
      i = new Promise(function(t, n) {
          var i, s = {}, a = {};
          o.onreadystatechange = function() {
              if (4 === o.readyState)
                  if (r.parseHeaders && o.getAllResponseHeaders().split(/\n/).forEach(function(e) {
                      (i = e.match(/(.*:?): (.*)/)) && (s[i[1].toLowerCase()] = i[2])
                  }),
                  200 <= o.status && o.status < 300 || 304 === o.status) {
                      a = {
                          status: o.status,
                          headers: s
                      },
                      r.binary ? a.data = o.response : (a.isJSON = /json/.test(o.getResponseHeader("Content-Type")),
                      a.data = o.responseText),
                      r.cache && h.put(l, a);
                      var e = p(a);
                      t(e)
                  } else
                      0 === o.status && u.emit("noConnection", "http"),
                      r.cache && h.remove(l),
                      n(o.status)
          }
      }
      );
      var a = null;
      "post" !== e && "put" !== e || (o.setRequestHeader("Content-type", "application/json; charset=utf-8"),
      a = JSON.stringify(r.data));
      try {
          o.send(a)
      } catch (e) {
          return u.emit("noConnection", "http"),
          Promise.reject(e)
      }
      return r.cache && h.put(l, i),
      i
  };
  return {
      get: n.bind(null, "get"),
      delete: n.bind(null, "delete"),
      post: n.bind(null, "post"),
      put: n.bind(null, "put"),
      resetCache: function() {
          return h.removeAll()
      }
  }
}),
/*! */
W.define("storage", ["rootScope", "http", "utils"], function(r, o, e) {
  var t, n = {
      isAvbl: !0,
      put: function(e, t) {
          return window.localStorage.setItem(e, JSON.stringify(t))
      },
      hasKey: function(e) {
          return e in window.localStorage
      },
      get: function(e) {
          return JSON.parse(window.localStorage.getItem(e))
      },
      remove: function(e) {
          return window.localStorage.removeItem(e)
      },
      getFile: function(i, s) {
          var a = this;
          void 0 === s && (s = {});
          var e = this.get(i);
          return e && (s.aboluteURL || e.version === r.version) && (!s.test || e.data && e.data[s.test]) ? Promise.resolve(e.data) : new Promise(function(t, n) {
              o.get(s.aboluteURL ? i : r.assets + "/" + i).then(function(e) {
                  e.version = s.aboluteURL ? "notAplicable" : r.version,
                  !s.test || s.test in e.data ? (a.put(i, e),
                  t(e.data)) : n("File did not passed the test")
              }).catch(function(e) {
                  window.wError("storage", "Failed to load lang file as .json", e),
                  n(e)
              })
          }
          )
      }
  };
  try {
      if (window.localStorage.setItem("test", "bar"),
      "bar" !== window.localStorage.getItem("test"))
          throw new Error("Comparsion failed");
      window.localStorage.removeItem("test"),
      t = n
  } catch (e) {
      var i = {}
        , s = {
          isAvbl: !1,
          put: function(e, t) {
              return i[e] = t
          },
          hasKey: function(e) {
              return e in i
          },
          get: function(e) {
              return e in i ? i[e] : null
          },
          remove: function(e) {
              return delete i[e]
          }
      };
      s.getFile = n.getFile.bind(s),
      t = s
  }
  return t
}),
/*! */
W.define("$", [], function() {
  return function(e, t) {
      return (t || document).querySelector(e)
  }
}),
/*! */
W.define("lruCache", [], function() {
  /*! MIT. (c) 2010 Rasmus Andersson <http://hunch.se/> */
  function e(e) {
      this.size = 0,
      this.limit = e,
      this._keymap = {}
  }
  return e.prototype.put = function(e, t) {
      var n = {
          key: e,
          value: t
      };
      if (this._keymap[e] = n,
      this.tail ? (this.tail.newer = n).older = this.tail : this.head = n,
      this.tail = n,
      this.size === this.limit)
          return this.shift();
      this.size++
  }
  ,
  e.prototype.shift = function() {
      var e = this.head;
      return e && (this.head.newer ? (this.head = this.head.newer,
      this.head.older = void 0) : this.head = void 0,
      e.newer = e.older = void 0,
      delete this._keymap[e.key]),
      e
  }
  ,
  e.prototype.get = function(e, t) {
      var n = this._keymap[e];
      if (void 0 !== n)
          return n === this.tail || (n.newer && (n === this.head && (this.head = n.newer),
          n.newer.older = n.older),
          n.older && (n.older.newer = n.newer),
          n.newer = void 0,
          n.older = this.tail,
          this.tail && (this.tail.newer = n),
          this.tail = n),
          t ? n : n.value
  }
  ,
  e.prototype.remove = function(e) {
      var t = this._keymap[e];
      if (t)
          return delete this._keymap[t.key],
          t.newer && t.older ? (t.older.newer = t.newer,
          t.newer.older = t.older) : t.newer ? (t.newer.older = void 0,
          this.head = t.newer) : t.older ? (t.older.newer = void 0,
          this.tail = t.older) : this.head = this.tail = void 0,
          this.size--,
          t.value
  }
  ,
  e.prototype.removeAll = function() {
      this.head = this.tail = void 0,
      this.size = 0,
      this._keymap = {}
  }
  ,
  e
}),
/*! */
W.define("log", ["ga", "utils", "broadcast", "storage", "store", "rootScope", "seoParser", "router"], function(t, e, n, i, s, a, r, o) {
  var l = {}
    , c = i.get("log2018") || {}
    , d = e.debounce(function() {
      return i.put("log2018", c)
  }, 5e3)
    , u = function(e) {
      e in l || (l[e] = 1,
      t.pageview(e),
      h(e))
  }
    , h = function(e) {
      var t = e.split("/")
        , n = t[0]
        , i = t[1]
        , s = t[2];
      if (n = n.substring(0, 2),
      /ov|pl|mo|an|pa|de|po|is|ve|le/.test(n) && ("pl" !== n || !/rhpane|picker|patch|detail|pois|user|radar|lhpane|noui/.test(i))) {
          var a = n + "/" + i + (s ? "/" + s : "");
          a in c ? c[a]++ : c[a] = 1,
          d()
      }
  };
  return u("version/" + a.version),
  "/" !== r.startupUrl && u("startup" + r.startupUrl),
  o.url404 && u("404" + r.startupUrl),
  n.on("log", u),
  n.on("paramsChanged", function(e, t) {
      if (t) {
          var n = e[t];
          n && ("path" === t && (n = Math.round((s.get("timestamp") - Date.now()) / 864e5) + "d"),
          u(t + "/" + n),
          "ecmwf" !== e.product && u("model/" + e.product),
          "surface" !== e.level && u("level/" + e.level))
      }
  }),
  n.on("pluginOpened", function(e) {
      return u("plugin/" + e)
  }),
  s.on("pois", function(e) {
      return u("pois/" + e)
  }),
  n.on("animationStarted", u.bind(null, "animation")),
  {
      has: function(e) {
          return c[e]
      },
      clientLog: c
  }
}),
/*! */
W.define("ga", ["rootScope", "store"], function(i, e) {
  var t = window.screen
    , s = "ul=" + i.prefLang + "&sr=" + t.width + "x" + t.height + "&cid=" + e.getDeviceID() + "&an=Windy&av=" + i.version
    , a = 1;
  /utm_/.test(window.location.search) && (s += "&" + function(e) {
      for (var t, n = /utm_(source|medium|term|campaign|content)=([^&]+)/g, i = {
          source: "cs",
          medium: "cm",
          term: "ck",
          campaign: "cn",
          content: "cc"
      }, s = []; t = n.exec(e); )
          s.push(i[t[1]] + "=" + t[2]);
      return s.join("&")
  }(window.location.search)),
  /Android.* wv\)/.test(window.navigator.userAgent) && (a = 14);
  var r = !0;
  return {
      pageview: function(e) {
          var t = "dp=" + e + "&dl=" + encodeURIComponent(document.location) + "&" + s;
          if (i.user && (t += "&uid=" + i.user.userslug),
          r) {
              var n = document.referrer;
              /www.windy.com/.test(n) || (t += "&dr=" + encodeURIComponent(n)),
              r = !1
          }
          setTimeout(function() {
              var e = new XMLHttpRequest;
              e.open("HEAD", "https://node.windy.com/sedlina/ga/" + a + "?" + t, !0),
              e.send(null)
          }, 100)
      }
  }
}),
/*! */
W.define("utils", ["rootScope"], function(t) {
  var r = {
      tsMinute: 6e4
  };
  r.tsHour = 60 * r.tsMinute;
  var n = "bcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789a"
    , i = n.split("");
  return r.num2char = function(e) {
      for (var t = ""; t = n.charAt(e % 60) + t,
      e = Math.floor(e / 60); )
          ;
      return t
  }
  ,
  r.char2num = function(e) {
      for (var t = 0, n = 0; n < e.length; n++)
          t = 60 * t + i.indexOf(e.charAt(n));
      return t
  }
  ,
  r.latLon2str = function(e) {
      var t = Math.floor(100 * (e.lat + 90))
        , n = Math.floor(100 * (e.lon + 180));
      return r.num2char(t) + "a" + r.num2char(n)
  }
  ,
  r.str2latLon = function(e) {
      var t = e.split("a");
      return {
          lat: r.char2num(t[0]) / 100 - 90,
          lon: r.char2num(t[1]) / 100 - 180
      }
  }
  ,
  r.toggleClass = function(e, t, n) {
      return e.classList[t ? "add" : "remove"](n)
  }
  ,
  r.emptyFun = function() {}
  ,
  r.emptyGIF = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",
  r.contains = function(e, t) {
      return e && -1 < e.indexOf(t)
  }
  ,
  r.isValidLatLonObj = function(e) {
      return e && "object" == typeof e && "lat"in e && "lon"in e && !isNaN(+e.lat) && !isNaN(+e.lon)
  }
  ,
  r.normalizeLatLon = function(e) {
      return parseFloat(e).toFixed(3)
  }
  ,
  r.replaceClass = function(e, t, n) {
      void 0 === n && (n = document.body);
      var i = n.className;
      e.test(i) ? n.className = i.replace(e, t) : n.classList.add(t)
  }
  ,
  r.each = function(e, t) {
      for (var n in e)
          t(e[n], n)
  }
  ,
  r.clone = function(e, t) {
      var n;
      if (null === e || "object" != typeof e)
          n = e;
      else if (e instanceof Date)
          (n = new Date).setTime(e.getTime());
      else if (e instanceof Array) {
          n = [];
          for (var i = 0, s = e.length; i < s; i++)
              n[i] = r.clone(e[i])
      } else if (e instanceof Object)
          for (var a in n = {},
          e)
              !e.hasOwnProperty(a) || t && !r.contains(t, a) || (n[a] = r.clone(e[a]));
      else
          console.warn("Unable to copy obj! Its type isn't supported.");
      return n
  }
  ,
  r.isArray = function(e) {
      return Array.isArray(e) || e instanceof Array
  }
  ,
  r.include = function(e, t) {
      for (var n in t)
          e[n] = t[n];
      return e
  }
  ,
  r.compare = function(t, n, e) {
      return e || (e = Object.keys(t)),
      !e.filter(function(e) {
          return t[e] !== n[e]
      }).length
  }
  ,
  r.deg2rad = function(e) {
      return e * Math.PI / 180
  }
  ,
  r.debounce = function(i, s, a) {
      var r;
      return function() {
          var e = this
            , t = arguments
            , n = a && !r;
          clearTimeout(r),
          r = setTimeout(function() {
              r = null,
              a || i.apply(e, t)
          }, s),
          n && i.apply(e, t)
      }
  }
  ,
  r.throttle = function(e, t) {
      var n, i, s = this, a = function() {
          n = !1,
          i && (r.apply(s, i),
          i = !1)
      }, r = function() {
          n ? i = arguments : (e.apply(s, arguments),
          setTimeout(a, t),
          n = !0)
      };
      return r
  }
  ,
  r.pad = function(e, t) {
      for (var n = String(e); n.length < (t || 2); )
          n = "0" + n;
      return n
  }
  ,
  r.template = function(e, n) {
      return e ? e.replace(/\{\{?\s*(.+?)\s*\}?\}/g, function(e, t) {
          return void 0 === n[t] ? "" : n[t]
      }) : ""
  }
  ,
  r.wind2obj = function(e) {
      return {
          wind: Math.sqrt(e[0] * e[0] + e[1] * e[1]),
          dir: 10 * Math.floor(18 + 18 * Math.atan2(e[0], e[1]) / Math.PI)
      }
  }
  ,
  r.wave2obj = function(e) {
      return {
          period: Math.sqrt(e[0] * e[0] + e[1] * e[1]),
          dir: 10 * Math.floor(18 + 18 * Math.atan2(e[0], e[1]) / Math.PI),
          size: e[2]
      }
  }
  ,
  r.hasDirection = function(e) {
      return "number" == typeof +e.dir && e.dir <= 360 && null != e.dir && 0 < e.wind
  }
  ,
  r.windDir2html = function(e) {
      return r.hasDirection(e) ? '<div class="iconfont" style="transform: rotate(' + e.dir + "deg); -webkit-transform:rotate(" + e.dir + 'deg);">"</div>' : ""
  }
  ,
  r.isNear = function(e, t) {
      return Math.abs(+e.lat - +t.lat) < .01 && Math.abs(+e.lon - +t.lon < .01)
  }
  ,
  r.bound = function(e, t, n) {
      return Math.max(Math.min(e, n), t)
  }
  ,
  r.smoothstep = function(e, t, n) {
      var i = r.bound((n - e) / (t - e), 0, 1);
      return i * i * i * (i * (6 * i - 15) + 10)
  }
  ,
  r.lonDegToXUnit = function(e) {
      return .5 + .00277777777777777 * e
  }
  ,
  r.latDegToYUnit = function(e) {
      return r.lat01ToYUnit(.5 - .00555555555555555 * e)
  }
  ,
  r.lat01ToYUnit = function(e) {
      return (Math.PI - Math.log(Math.tan(.5 * (1 - e) * Math.PI))) / (2 * Math.PI)
  }
  ,
  r.unitXToLonDeg = function(e) {
      return 360 * (e - .5)
  }
  ,
  r.unitYToLatDeg = function(e) {
      return Math.atan(Math.exp(Math.PI - e * (2 * Math.PI))) / (.5 * Math.PI) * 180 - 90
  }
  ,
  window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame,
  window.cancelAnimationFrame = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame,
  window.requestAnimationFrame && window.cancelAnimationFrame || (window.requestAnimationFrame = function(e) {
      return window.setTimeout(e, 40)
  }
  ,
  window.cancelAnimationFrame = window.clearTimeout),
  Math.log2 || (Math.log2 = function(e) {
      return Math.log(e) * Math.LOG2E
  }
  ),
  r.nowDeltaTS = 0,
  r.getAdjustedNow = function(e) {
      var t, n = Date.now() - r.nowDeltaTS;
      return e && ((t = n - e) < 0 && (r.nowDeltaTS += t),
      1e4 < t && (r.nowDeltaTS += t)),
      n
  }
  ,
  r.isValidLang = function(e) {
      return r.contains(t.supportedLanguages, e)
  }
  ,
  r.joinPath = function(e, t) {
      return e + ("/" === t.charAt(0) ? "" : "/") + t
  }
  ,
  r.addQs = function(e, t) {
      return e + (/\?/.test(e) ? "&" : "?") + t
  }
  ,
  r.loadScript = function(i) {
      return new Promise(function(e, t) {
          var n = document.createElement("script");
          n.type = "text/javascript",
          n.async = !0,
          n.onload = e,
          n.onerror = t,
          document.head.appendChild(n),
          n.src = i
      }
      )
  }
  ,
  r
}),
/*! */
W.define("format", ["trans", "store", "utils"], function(a, e, r) {
  var t = {}
    , n = function(e, t) {
      return "" + (e % 12 || 12) + (t = null != t ? ":" + r.pad(t) : "") + (12 <= e ? " PM" : " AM")
  }
    , i = function(e, t) {
      return e + ":" + (null != t ? r.pad(t) : "00")
  };
  t.getHoursFunction = function() {
      return e.is12hFormat() ? n : i
  }
  ,
  t.hourUTC = function(e) {
      return r.pad(new Date(e).getUTCHours()) + ":00Z"
  }
  ,
  t.hourMinuteUTC = function(e) {
      var t = new Date(e);
      return r.pad(t.getUTCHours()) + ":" + r.pad(t.getUTCMinutes()) + "Z"
  }
  ,
  t.thousands = function(e) {
      return e ? e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : ""
  }
  ;
  var s = ["N", "NE", "E", "SE", "S", "SW", "W", "NW", "N"]
    , o = function(e) {
      var t = Math.floor((+e + 22.5) / 45);
      return a["DIRECTION_" + s[t]] || "-"
  }
    , l = function(e) {
      return e + "°"
  };
  t.getDirFunction = function() {
      return e.get("numDirection") ? l : o
  }
  ,
  t.obsoleteClass = function(e, t) {
      void 0 === t && (t = 30);
      var n = (Date.now() / 1e3 - e) / 60;
      return n < .3 * t ? "fresh" : n < t ? "normal" : "obsolete"
  }
  ,
  t.howOld = function(e) {
      var t = !1
        , n = -1;
      if ("diffMin"in e)
          n = +e.diffMin;
      else if ("ts"in e)
          n = Math.floor((Date.now() - +e.ts) / 6e4);
      else if ("min"in e)
          n = Math.floor(Date.now() / 6e4 - +e.min);
      else {
          if (!("ux"in e))
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
              var i = Math.floor(n / 60)
                , s = n - 60 * i;
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
  }
  ;
  var c = function(e) {
      return [Math.abs(0 | e), "°", 0 | (e < 0 ? e = -e : e) % 1 * 60, "'", 0 | 60 * e % 1 * 60, '"'].join("")
  };
  return t.DD2DMS = function(e, t) {
      return [e < 0 ? "S" : "N", c(e), ", ", t < 0 ? "W" : "E", c(t)].join("")
  }
  ,
  t.utcOffsetStr = function(e) {
      return (e < 0 ? "-" : "+") + r.pad(Math.abs(Math.round(e))) + ":00"
  }
  ,
  t.seoString = function(e) {
      return e.replace(/[/,.]/g, " ").replace(/\s+/g, "-")
  }
  ,
  t.seoLang = function(e) {
      return "en" === e ? "" : e + "/"
  }
  ,
  t
}),
/*! */
W.define("langEn", [], function() {
  return {
      MON: "Monday",
      TUE: "Tuesday",
      WED: "Wednesday",
      THU: "Thursday",
      FRI: "Friday",
      SAT: "Saturday",
      SUN: "Sunday",
      MON2: "Mon",
      TUE2: "Tue",
      WED2: "Wed",
      THU2: "Thu",
      FRI2: "Fri",
      SAT2: "Sat",
      SUN2: "Sun",
      SMON01: "Jan",
      SMON02: "Feb",
      SMON03: "Mar",
      SMON04: "Apr",
      SMON05: "May",
      SMON06: "Jun",
      SMON07: "Jul",
      SMON08: "Aug",
      SMON09: "Sep",
      SMON10: "Oct",
      SMON11: "Nov",
      SMON12: "Dec",
      TODAY: "Today",
      TOMORROW: "Tomorrow",
      LATER: "Later",
      ALL: "All",
      HOURS_SHORT: "hrs",
      FOLLOW: "Follow us",
      EMBED: "Embed widget on page",
      MENU: "Menu",
      MENU_SETTINGS: "Settings",
      MENU_HELP: "Help",
      MENU_ABOUT: "About us",
      MENU_LOCATION: "Find my location",
      MENU_FULLSCREEN: "Fullscreen mode",
      MENU_DISTANCE: "Distance & planning",
      MENU_HISTORICAL: "Show historical data",
      MENU_MOBILE: "Download App",
      MENU_FAVS: "Favorites",
      MENU_FEEDBACK: "Feedback",
      SHOW_PICKER: "Show weather picker",
      TOOLBOX_INFO: "info",
      TOOLBOX_ANIMATION: "animation",
      TOOLBOX_START: "Hide/show animated particles",
      MENU_F_MODEL: "Data",
      MENU_U_INTERVAL: "Update interval",
      MENU_D_UPDATED: "Updated",
      MENU_D_REFTIME: "Reference time",
      MENU_D_NEXT_UPDATE: "Next update expected at:",
      ABOUT_OVERLAY: "About",
      ABOUT_DATA: "About these data",
      OVERLAY: "Layer",
      MODEL: "Forecast model",
      WIND: "Wind",
      GUST: "Wind gusts",
      GUSTACCU: "Wind accumulation",
      WIND_DIR: "Wind dir.",
      TEMP: "Temperature",
      PRESS: "Pressure",
      CLOUDS: "Clouds, rain",
      CLOUDS2: "Clouds",
      CLOUD_ALT: "Cloud base",
      RADAR: "Weather radar",
      RADAR_BLITZ: "Radar, lightning",
      TOTAL_CLOUDS: "Total clouds",
      LOW_CLOUDS: "Low clouds",
      MEDIUM_CLOUDS: "Medium clouds",
      HIGH_CLOUDS: "High clouds",
      CAPE: "CAPE Index",
      RAIN: "Rain, snow",
      RAIN_THUNDER: "Rain, thunder",
      RAIN3H: "Precip. past 3h",
      JUST_RAIN: "Rain",
      CONVECTIVE_RAIN: "Convective r.",
      RAINRATE: "Max. rain rate",
      LIGHT_THUNDER: "Light thunder",
      THUNDER: "Thunderstorms",
      HEAVY_THUNDER: "Heavy thunder",
      SNOW: "Snow",
      OZONE: "Ozone layer",
      SHOW_GUST: "force of wind gusts",
      RH: "Humidity",
      WAVES: "Waves",
      WAVES2: "Waves, sea",
      SWELL: "Swell",
      SWELL1: "Swell 1",
      SWELL2: "Swell 2",
      SWELL3: "Swell 3",
      WWAVES: "Wind waves",
      ALL_WAVES: "All waves",
      SWELLPER: "Swell period",
      RACCU: "Rain accumulation",
      SACCU: "Snow accumulation",
      ACCU: "Accumulations",
      RAINACCU: "RAIN ACCUMULATION",
      SNOWACCU: "SNOW ACCUMULATION",
      SNOWCOVER: "Actual Snow Cover",
      SST: "Surface sea temperature",
      SST2: "Sea temperature",
      CURRENT: "Currents",
      VISIBILITY: "Visibility",
      ACTUAL_TEMP: "Actual temperature",
      SSTAVG: "Average sea temperature",
      AVAIL_FOR: "Available for:",
      DEW_POINT: "Dew point",
      SLP: "Pressure (sea l.)",
      QFE: "Station pressure",
      SNOWDEPTH: "Snow depth",
      NEWSNOW: "New snow",
      SNOWDENSITY: "Snow density",
      GH: "Geopot. height",
      FLIGHT_RULES: "Flight rules",
      CTOP: "Cloud tops",
      FREEZING: "Freezing altitude",
      COSC: "CO concentration",
      SO2SM: "SO2 mass",
      DUSTSM: "Dust mass",
      WX_WARNINGS: "Weather warnings",
      PTYPE: "Precip. type",
      FOG: "Fog",
      FLOOD: "Flood",
      FIRE: "Fire",
      FZ_RAIN: "Freezing rain",
      MX_ICE: "Mixed ice",
      WET_SN: "Wet snow",
      RA_SN: "Rain with snow",
      PELLETS: "Ice pellets",
      HAIL: "Hail",
      MORE_LAYERS: "More layers...",
      NONE: "None",
      ACC_LAST_DAYS: "Last {{num}} days",
      ACC_LAST_HOURS: "Last {{num}} hours",
      ACC_NEXT_DAYS: "Next {{num}} days",
      ACC_NEXT_HOURS: "Next {{num}} hours",
      ALTITUDE: "Altitude",
      SFC: "Surface",
      CLICK_ON_LEGEND: "Click to change units",
      ALTERNATIVE_UNIT_CHANGE: "Any Layer unit can be changed by clicking on color legend",
      COPY_TO_C: "Copy to clipboard",
      SEARCH: "Search location...",
      JUST_SEARCH: "Search",
      NEXT: "Next results...",
      LOW_PREDICT: "Low predictability of forecast",
      DAYS_AGO: "{{daysago}} days ago:",
      SHOW_ACTUAL: "Show actual forecast",
      SHARE: "Share",
      SHARE_FCST: "Share forecast",
      SHARE_LINK: "Share link",
      SHARE_PIC: "Share picture",
      JUST_EMBED: "Embed",
      POSITION: "Position",
      WIDTH: "Width",
      HEIGHT: "Height",
      DEFAULT_UNITS: "Default units",
      NOW: "Now",
      FORECAST_FOR: "Forecast for",
      ZOOM_LEVEL: "Zoom level",
      EXPERT_MODE: "Expert mode",
      EXPERT_MODE_DESC: " Do not fold overlays in quick menu",
      DETAILED: "Detailed forecast for this location",
      PERIOD: "Period",
      DRAG_ME: "Drag me if you want",
      D_FCST: "Forecast for this location",
      D_WEBCAMS: "Webcams in vicinity",
      D_STATIONS: "Nearest weather stations",
      D_NO_WEBCAMS: "There are no webcams around this location (or we don't know about them)",
      D_DAYLIGHT: "image during daylight",
      D_DISTANCE: "distance",
      D_MILES: "miles",
      D_MORE_THAN_HOUR: "more than hour ago",
      D_MIN_AGO: "{{duration}} minutes ago",
      D_SUNRISE: "Sunrise",
      D_SUNSET: "sunset",
      D_DUSK: "dusk",
      D_SUN_NEVER_SET: "Sun never set",
      D_POLAR_NIGHT: "Polar night",
      D_LT2: "local time",
      D_FAVORITES: "Add to Favorites",
      D_FAVORITES2: "Remove from Favorites",
      D_WAVE_FCST2: "Waves and sea",
      D_MISSING_CAM: "Add new webcam",
      D_HOURS: "Hours",
      D_TEMP2: "Temp.",
      D_PRECI: "Precit.",
      D_ABOUT_LOC: "About this location",
      D_ABOUT_LOC2: "About location",
      D_TIMEZONE: "Timezone",
      D_WEBCAMS_24: "Show last 24 hours",
      D_FORECAST_FOR: "{{duration}} days forecast",
      D_SWIPE_FOR_CAMS: "Swipe up for nearest webcams",
      E_MESSAGE: "Awesome weather forecast at",
      METAR_VAR: "Variable",
      METAR_MIN_AGO: "{DURATION}m ago",
      METAR_HOURS_AGO: "{DURATION}h ago",
      METARS_H_M_AGO: "{DURATION}h {DURATIONM}m ago",
      METARS_DAYS_AGO: "{DURATION} days ago",
      DEVELOPED: "Developed with",
      FAVS_DELETE: "delete",
      SHOW_ON_MAP: "Display on map",
      POI_STATIONS: "Weather stations",
      POI_AD: "Airports",
      POI_CAMS: "Webcams",
      POI_PG: "Paragliding spots",
      POI_KITE: "Kite/WS spots",
      POI_SURF: "Surfing spots",
      POI_EMPTY: "Empty map",
      POI_WIND: "Reported wind",
      POI_TEMP: "Reported temp.",
      POI_FAVS: "My favourites",
      POI_FCST: "Forecasted weather",
      POI_TIDE: "Tide forecast",
      P_ANDROID_APP: "Windy for Android, free on Google Play",
      ND_MODEL: "Forecast model",
      ND_COMPARE: "Compare forecasts",
      ND_DISPLAY: "Display",
      ND_DISPLAY_BASIC: "Basic",
      S_ADVANCED_SETTINGS: "Advanced settings",
      S_COLORS: "Customize color scale",
      S_SAVE: "Save",
      S_SAVE2: "Login/Register to save all your settings to the cloud",
      S_SAVE_AUTO: "Your settings are saved to the cloud",
      S_SPEED: "Speed",
      S_ADD_OVERLAYS: "Show / add more layers",
      S_OVR_QUICK: "Add to quick menu",
      U_LOGIN: "Login",
      U_LOGOUT: "Logout",
      U_PROFILE: "My profile",
      U_PASSWD: "Change password",
      U_CHANGE_PIC: "Change my picture",
      OVR_RECOMENDED: "Recommended for:",
      OVR_ALL: "All",
      OVR_FLYING: "Flying",
      OVR_WATER: "Water",
      OVR_SKI: "Ski",
      MSG_OFFLINE: "WOW it appears that you are offline :-(",
      MSG_ONLINE_APP: "Online again, click here to reload app :-)",
      MSG_LOGIN_SUCCESFULL: "You have successfully logged in!",
      FORGOT_PASSWORD: "Forgot Password?",
      USERNAME_EMAIL: "Username / Email",
      DONT_HAVE_ACCOUNT: "Don't have an account?",
      REGISTER_HERE: "register here",
      PASSWD: "Password",
      LOGIN: "Login",
      LOGIN_FAILED: "Login Unsuccessful",
      ALERTS_PROMO: "Never miss a BIG day.",
      ALERTS_LINK: "Set-up Windy Alert for this spot.",
      ALERTS_LINK_SHORT: "Alert for this spot",
      MY_ALERTS: "My Alerts",
      DIRECTION_N: "N",
      DIRECTION_NE: "NE",
      DIRECTION_E: "E",
      DIRECTION_SE: "SE",
      DIRECTION_S: "S",
      DIRECTION_SW: "SW",
      DIRECTION_W: "W",
      DIRECTION_NW: "NW",
      DIRECTIONS: "Directions",
      DIRECTIONS_ANY: "Any direction",
      ACTIVATE: "Activate",
      DEACTIVATE: "Deactivate",
      REGISTER: "Register",
      JUST_LOGIN: "Login",
      MY_ACCOUNT: "My account",
      EDIT_ALERT: "Edit alert",
      FAVS_RENAME: "Rename",
      ADD_ALERT: "Create alert",
      HOME: "Home",
      MAP: "Map",
      MORE: "More",
      LESS: "Less",
      COMPARE: "Compare",
      PRESS_ISOLINES: "Pressure isolines",
      PART_ANIMATION: "Particles animation",
      R_TIME_RANGE: "Time range",
      MY_LOCATION: "My location",
      D_ISOLINES: "Display isolines",
      DONATE: "Donate",
      NEW: "New!",
      WHAT_IS_NEW: "What is new:",
      PRIVACY: "Privacy protection",
      SOUNDING: "Sounding",
      SOUND_ON: "Sound",
      BLITZ_ON: "Show lightnings",
      WFORECAST: "weather forecast",
      TITLE: "Wind map & weather forecast",
      HURR_TRACKER: "Hurricane tracker",
      TOC: "Terms and conditions",
      SEND: "Send"
  }
}),
/*! */
W.define("supportedLanguages", [], function() {
  return ["en", "zh-TW", "zh", "ja", "fr", "ko", "it", "ru", "nl", "cs", "tr", "pl", "sv", "fi", "ro", "el", "hu", "hr", "ca", "da", "ar", "fa", "hi", "ta", "sk", "uk", "bg", "he", "is", "lt", "et", "vi", "sl", "sr", "id", "th", "sq", "pt", "nb", "es", "de"]
}),
/*! */
W.define("Calendar", ["format", "utils", "trans", "Class"], function(e, r, a, t) {
  return t.extend({
      weekdays: ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"],
      calendarHours: 240,
      numOfHours: 240,
      localeHours: e.getHoursFunction(),
      _init: function() {
          this.midnight = this.getMidnight(),
          this.startOfTimeline = this.startOfTimeline || this.midnight,
          this.start = this.startOfTimeline.getTime(),
          this.days = [],
          this.endOfcalendar = this.add(this.startOfTimeline, this.calendarHours),
          this.endOfCal = this.endOfcalendar.getTime(),
          this.maxTimestamp = this.endOfcalendar.getTime(),
          this.type = this.endOfcalendar < this.midnight ? "historical" : this.startOfTimeline < this.midnight ? "mixed" : "forecast",
          this.timestamps = [],
          this.paths = [],
          this.interTimestamps = [],
          this.minifestFile && this.createTimestampsFromMinifest(this.minifestFile) ? this.minifestValid = !0 : (this.createTimestamps(),
          this.minifestValid = !1),
          this.end = Math.min(this.timestamps[this.timestamps.length - 1], this.endOfCal);
          for (var e, t, n, i, s, a = this.add(this.startOfTimeline, 12), r = 0; r < this.calendarHours / 24; r++)
              i = this.add(this.startOfTimeline, r, "days").getTime(),
              s = this.add(this.startOfTimeline, 24),
              s = this.add(s, r, "days").getTime(),
              t = (e = this.add(a, r, "days")).getTime(),
              n = this.weekdays[e.getDay()],
              this.days[r] = {
                  display: n + "2",
                  displayLong: n,
                  day: e.getDate(),
                  middayTs: t,
                  start: i,
                  end: s,
                  month: e.getMonth() + 1,
                  year: e.getFullYear()
              };
          for (r = 1; r < this.paths.length; r++)
              this.interTimestamps.push(this.timestamps[r - 1] + Math.floor((this.timestamps[r] - this.timestamps[r - 1]) / 2));
          return this
      },
      add: function(e, t, n) {
          var i = new Date(e.getTime());
          return i.setTime(e.getTime() + ("days" === n ? 24 : 1) * t * r.tsHour),
          i
      },
      boundTs: function(e) {
          return r.bound(e, this.start, this.end)
      },
      getMidnight: function() {
          var e = new Date;
          return e.setHours(0),
          e.setMinutes(0),
          e.setSeconds(0),
          e.setMilliseconds(0),
          e
      },
      createTimestamps: function() {
          var e, t, n = this.startOfTimeline.getUTCHours() % 3;
          for (n && (this.startOfTimeline = this.add(this.startOfTimeline, 3 - n, "hours")),
          t = 0; t < this.numOfHours; t += 3)
              e = this.add(this.startOfTimeline, t, "hours"),
              this.paths.push(this.date2path(e)),
              this.timestamps.push(e.getTime())
      },
      prepareTimesFromMinifest: function(e) {
          return e && "object" == typeof e && e.ref && e.dst ? (this.refTime = e.ref.replace(/(\d+)-(\d+)-(\d+)T(\d+):.*/, "$1$2$3$4"),
          this.refTimeTxt = e.ref,
          this.updateTxt = e.update,
          this.refTimeTs = new Date(e.ref).getTime(),
          this.updateTs = new Date(e.update).getTime(),
          !0) : (window.wError("Calendar", "Invalid format of minifest 2.0"),
          !1)
      },
      createTimestampsFromMinifest: function(e) {
          var n = this;
          if (!this.prepareTimesFromMinifest(e))
              return !1;
          var i, s = r.tsHour, t = Math.min(12, this.numOfHours / 24), a = this.add(this.startOfTimeline, t, "days").getTime();
          return e.dst.forEach(function(e) {
              for (var t = e[1]; t <= e[2]; t += e[0])
                  (i = n.refTimeTs + t * s) <= a && (n.timestamps.push(i),
                  n.paths.push(n.date2path(new Date(i))))
          }),
          !0
      },
      date2path: function(e) {
          return e.toISOString().replace(/(\d\d\d\d)-(\d\d)-(\d\d)T(\d\d):.*/, "$1/$2/$3/$4")
      },
      ts2path: function(e) {
          var t, n = this.interTimestamps;
          for (t = 0; t < n.length; t++)
              if (e < n[t])
                  return this.paths[t];
          return this.paths[n.length - 1]
      },
      path2date: function(e) {
          var t = e.split("/");
          return new Date(Date.UTC(t[0], t[1] - 1, t[2], t[3], 0, 0))
      },
      ts2string: function(e) {
          var t = new Date(e)
            , n = t.getDay()
            , i = t.getDate()
            , s = this.localeHours(t.getHours());
          return a[this.weekdays[n]] + " " + i + " - " + s
      }
  })
}),
/*! */
W.define("Metric", ["store", "broadcast", "Class"], function(t, n, e) {
  return e.extend({
      separator: "",
      defaults: [null, null],
      _init: function() {
          this.key = "metric_" + this.ident,
          t.insert(this.key, {
              def: this.getDefault(),
              save: !0,
              sync: !0,
              allowed: Object.keys(this.conv)
          }),
          this.metric = t.get(this.key),
          t.on(this.key, this.onMetricChanged, this),
          t.once("isImperial", this.setDefault, this)
      },
      onMetricChanged: function(e) {
          this.metric = e,
          n.emit("metricChanged", this.ident, e)
      },
      getDefault: function() {
          return t.get("isImperial") && 1 < this.defaults.length ? this.defaults[1] : this.defaults[0]
      },
      setDefault: function() {
          t.setDefault(this.key, this.getDefault())
      },
      convertValue: function(e, t) {
          return void 0 === e ? "" : this.convertNumber(e) + (t || this.separator) + (this.conv[this.metric].label || this.metric)
      },
      convertNumber: function(e) {
          var t = this.conv[this.metric]
            , n = t.conversion(e);
          return t.precision ? parseFloat(n.toFixed(t.precision)) : Math.round(n)
      },
      listMetrics: function() {
          return Object.keys(this.conv)
      },
      howManyMetrics: function() {
          return this.listMetrics().length
      },
      setMetric: function(e) {
          t.set(this.key, e)
      },
      cycleMetric: function() {
          var e = this.description.indexOf(this.metric) + 1;
          e === this.description.length && (e = 0),
          this.setMetric(this.description[e])
      },
      renderLegend: function(e, t, n) {
          var i = n.description
            , s = n.lines;
          e.getColor();
          var a = s.length
            , r = i.indexOf(this.metric)
            , o = 100 / (s.length + 1)
            , l = []
            , c = e.color(s[0][0]);
          l.push(c, c, c);
          for (var d = '<span style="width:' + o + '%">' + this.metric + "</span>", u = 0; u < a; u++) {
              var h = s[u][0]
                , f = s[Math.min(u + 1, a - 1)][0]
                , m = e.color(h)
                , p = e.color(.5 * (h + f));
              l.push(m, p),
              d += '<span style="width: ' + o + '%">' + s[u][1 + r] + "</span>"
          }
          t.dataset.overlay = this.ident,
          t.classList[1 < this.howManyMetrics() ? "remove" : "add"]("one-metric"),
          t.style.background = "linear-gradient(to right, " + l.join(",") + ")",
          t.innerHTML = d
      }
  })
}),
/*! */
W.define("Color", ["utils", "store", "Class"], function(c, n, e) {
  return e.extend({
      prepare: !1,
      save: !0,
      sync: !0,
      opaque: !0,
      _init: function() {
          this.key = "color2_" + this.ident,
          n.insert(this.key, {
              def: this.default,
              save: this.save,
              sync: this.sync,
              allowed: this.checkValidity
          }),
          n.on(this.key, this.colorChanged, this),
          this.prepare && this.getColor()
      },
      checkValidity: function(e) {
          if (!c.isArray(e))
              return !1;
          for (var t = 0; t < e.length; t++)
              if (!c.isArray(e[t]))
                  return !1;
          return !0
      },
      colorChanged: function(e) {
          e && this.colors && this.forceGetColor()
      },
      changeColor: function(e, t) {
          n.set(this.key, e, t)
      },
      toDefault: function() {
          n.remove(this.key)
      },
      setMinMax: function() {
          this.min = this.gradient[0][0],
          this.max = this.gradient[this.gradient.length - 1][0]
      },
      forceGetColor: function() {
          return this.colors = null,
          this.getColor()
      },
      color: function(e) {
          var t = this.RGBA(e);
          return "rgb(" + t[0] + "," + t[1] + "," + t[2] + ")"
      },
      colorDark: function(e, t) {
          var n = this.RGBA(e);
          return "rgb(" + Math.max(0, n[0] - t) + "," + Math.max(0, n[1] - t) + "," + Math.max(0, n[2] - t) + ")"
      },
      RGBA: function(e) {
          var t = this.value2index(e);
          return [this.colors[t], this.colors[++t], this.colors[++t], this.colors[++t]]
      },
      getMulArray: function(e, t) {
          for (var n = [], i = e.length, s = 0; s < i; s++)
              n.push(e[s] * t);
          return n
      },
      lerpArray: function(e, t, n) {
          for (var i = 1 - n, s = e.length, a = [], r = 0; r < s; r++)
              a.push(e[r] * i + t[r] * n);
          return a
      },
      rgba2yuva: function(e) {
          var t = e[0]
            , n = e[1]
            , i = e[2]
            , s = .299 * t + .587 * n + .114 * i;
          return [s, .565 * (i - s), .713 * (t - s), e[3]]
      },
      yuva2rgba: function(e) {
          var t = e[0]
            , n = e[1]
            , i = e[2];
          return [t + 1.403 * i, t - .344 * n - .714 * i, t + 1.77 * n, e[3]]
      },
      gradYuva: function(e, t, n, i) {
          var s = this.lerpArray(e, t, n);
          if (i) {
              var a = this.vec2size(e[1], e[2])
                , r = this.vec2size(t[1], t[2]);
              if (.05 < a && .05 < r) {
                  var o = this.vec2size(s[1], s[2]);
                  if (.01 < o) {
                      var l = (a * (1 - n) + r * n) / o;
                      s[1] *= l,
                      s[2] *= l
                  }
              }
          }
          return s
      },
      vec2size: function(e, t) {
          return Math.sqrt(e * e + t * t)
      },
      getGradientColorYUVA: function(e, t, n) {
          for (var i = this.rgba2yuva(this.getMulArray(e, 1 / 255)), s = this.rgba2yuva(this.getMulArray(t, 1 / 255)), a = this.gradYuva(i, s, n, !0), r = this.yuva2rgba(a), o = 0; o < r.length; o++)
              r[o] = Math.max(0, Math.min(256 * r[o], 255));
          return r
      },
      makePremultiplied: function(e) {
          for (var t = e[3] / 255, n = 0; n < 3; n++)
              e[n] = Math.max(0, Math.min(t * e[n], 255));
          return e
      },
      createGradientArray: function(e, t, n) {
          void 0 === e && (e = !0),
          void 0 === t && (t = !1),
          void 0 === n && (n = 1);
          for (var i = new Uint8Array(this.steps + 1 << 2), s = (this.max - this.min) / this.steps, a = 0, r = this.gradient, o = 1, l = r[0], c = r[o++], d = 0; d < this.steps; d++) {
              var u = (this.min + s * d) * n;
              u > c[0] && o < r.length && (l = c,
              c = r[o++]);
              var h = (u - l[0]) / (c[0] - l[0])
                , f = this.getGradientColorYUVA(l[1], c[1], h);
              t && this.makePremultiplied(f),
              i[a++] = f[0],
              i[a++] = f[1],
              i[a++] = f[2],
              i[a++] = e ? 255 : f[3]
          }
          return this.neutralGrayIndex = a,
          i[a++] = i[a++] = i[a++] = 128,
          i[a++] = 255,
          i
      },
      createSteppedArray: function(e, t, n) {
          n || (n = t);
          for (var i, s = e.length, a = new Uint8Array(s), r = s >> 2, o = t >> 1, l = n, c = 0, d = 0; d < r; ) {
              for (i = 0; i < 4; i++)
                  a[4 * d + i] = e[c + i];
              --l <= 0 && (l = t,
              c = 4 * (d + o)),
              d++
          }
          return a
      },
      combinedArray: function(e, t, n, i) {
          void 0 === n && (n = .5),
          void 0 === i && (i = .5);
          for (var s, a, r = e.length, o = new Uint8Array(r), l = 0; l < r; ) {
              for (a = n * ((a = (.299 * e[l] + .587 * e[l + 1] + .114 * e[l + 2]) / (.299 * t[l] + .587 * t[l + 1] + .114 * t[l + 2])) - 1),
              a += 1,
              s = 0; s < 3; s++)
                  o[l + s] = c.bound(Math.round(a * t[l + s] * (1 - i) + i * e[l + s]), 0, 255);
              o[l + 3] = e[l + 3],
              l += 4
          }
          return o
      },
      getColor: function() {
          var t = this;
          return this.colors || (this.gradient = n.get(this.key),
          this.setMinMax(),
          this.colors = this.createGradientArray(this.opaque),
          this.startingValue = this.min,
          this.maxIndex = this.steps - 1 << 2,
          this.step = (this.max - this.startingValue) / this.steps,
          this.value2index = function(e) {
              return isNaN(e) ? t.neutralGrayIndex : Math.max(0, Math.min(t.maxIndex, (e - t.startingValue) / t.step << 2))
          }
          ),
          this
      }
  })
}),
/*! */
W.define("Product", ["utils", "rootScope", "http", "Class", "Calendar"], function(e, n, i, t, s) {
  return t.extend({
      ident: null,
      initPromise: null,
      maxTileZoom: 10,
      animationSpeed: 3600,
      fileSuffix: "jpg",
      JPGtransparency: !1,
      PNGtransparency: !1,
      dataQuality: "normal",
      betterDataQuality: [],
      animation: !0,
      modelName: void 0,
      modelResolution: void 0,
      provider: void 0,
      interval: void 0,
      forecastSize: 240,
      directory: void 0,
      labelsTemp: !0,
      pathGenerator: "{server}/{directory}/{path}/257w<z>/<y>/<x>/{filename}-{level}.{fileSuffix}",
      _init: function() {
          this.productExpires = 0,
          this.minifest = {}
      },
      refTime: function() {
          return this.calendar ? this.calendar.refTime : ""
      },
      getUpdateTimes: function() {
          return this.calendar ? {
              refTime: this.calendar.refTimeTxt,
              minUpdate: this.calendar.updateTs
          } : {}
      },
      setExpireTime: function() {
          this.productExpires = Date.now() + 5 * e.tsMinute
      },
      loadMinifest: function(e) {
          var t = (new Date).toISOString().replace(/.*T(\d+):(\d+).*/, "$1$2");
          return i.get((this.server || n.server) + "/" + this.directory + "/minifest2.json?" + t, {
              cache: !e
          })
      },
      open: function() {
          var n = this;
          return this.loadingPromise ? this.loadingPromise : Date.now() < this.productExpires ? Promise.resolve(this.calendar) : (this.loadingPromise = new Promise(function(e) {
              n.loadMinifest().then(function(e) {
                  var t = e.data;
                  n.minifest.ref !== t.ref && (n.minifest = t,
                  n.calendar = s.instance({
                      numOfHours: n.forecastSize,
                      minifestFile: n.minifest
                  }))
              }).catch(function(e) {
                  n.createBackupMinifest(),
                  window.wError("Product", "Minifest load/parsing failed", e)
              }).then(function() {
                  n.setExpireTime(),
                  n.loadingPromise = null,
                  e(n.calendar)
              })
          }
          ),
          this.loadingPromise)
      },
      createBackupMinifest: function() {
          this.minifest = {
              note: "!!!This is automatically generated fallback minifest!!!",
              ref: (new Date).toISOString().replace(/T.*$/, "T00:34:56Z"),
              update: (new Date).toISOString(),
              dst: [[3, 3, 144], [6, 150, 240]]
          },
          this.calendar = s.instance({
              numOfHours: this.forecastSize,
              minifestFile: this.minifest
          })
      },
      isInBounds: function(e) {
          return !this.bounds || e.west > this.bounds.west && e.east < this.bounds.east && e.north < this.bounds.north && e.south > this.bounds.south
      },
      pointIsInBounds: function(e) {
          return !this.bounds || +e.lon > this.bounds.west && +e.lon < this.bounds.east && +e.lat < this.bounds.north && +e.lat > this.bounds.south
      }
  })
}),
/*! */
W.define("StaticProduct", ["Product"], function(e) {
  return e.extend({
      dailyCache: (new Date).toISOString().replace(/^\d+-(\d+)-(\d+)T.*$/, "$1$2"),
      _init: function() {},
      refTime: function() {
          return this.dailyCache
      },
      open: function() {
          return Promise.resolve()
      }
  })
}),
/*! */
W.define("Layer", ["Class", "products", "utils", "rootScope"], function(e, a, r, o) {
  return e.extend({
      c: null,
      m: null,
      ident: "",
      renderer: "tileLayer",
      filename: null,
      sea: !1,
      dataQuality: null,
      fileSuffix: null,
      JPGtransparency: !1,
      renderParams: {
          renderFrom: "R"
      },
      getColor: function() {
          return this.c.getColor()
      },
      getParams: function(e, t) {
          var n = r.clone(e)
            , i = a[this.product || t]
            , s = this.levels || i.levels;
          return n = r.include(n, {
              layer: this.ident,
              server: this.server || i.server || o.server,
              JPGtransparency: this.JPGtransparency || i.JPGtransparency,
              PNGtransparency: this.PNGtransparency || i.PNGtransparency,
              maxTileZoom: this.maxTileZoom || i.maxTileZoom,
              transformR: this.transformR || null,
              transformG: this.transformG || null,
              transformB: this.transformB || null,
              directory: i.directory,
              filename: this.filename || e.overlay || this.ident,
              fileSuffix: this.fileSuffix || i.fileSuffix,
              dataQuality: this.dataQuality || i.dataQuality,
              upgradeDataQuality: r.contains(this.betterDataQuality || i.betterDataQuality, this.ident)
          }),
          W.overlays[n.overlay].hasMoreLevels ? r.contains(s, n.level) || (n.level = s[0]) : n.level = "surface",
          "100m" === n.level && "wind" !== n.overlay && (n.level = "surface"),
          this.renderParams && (n = r.include(n, this.renderParams)),
          n.refTime = i.refTime(),
          n.fullPath = r.addQs(r.template(this.pathGenerator || i.pathGenerator, n), "reftime=" + n.refTime),
          n
      }
  })
}),
/*! */
W.define("Overlay", ["layers", "trans", "Class"], function(n, e, t) {
  return t.extend({
      ident: "",
      trans: null,
      hasMoreLevels: !1,
      _init: function() {
          var e = n[this.ident]
            , t = e && e.m;
          t && (this.convertValue = t.convertValue.bind(t),
          this.convertNumber = t.convertNumber.bind(t),
          this.setMetric = t.setMetric.bind(t),
          this.cycleMetric = t.cycleMetric.bind(t),
          this.listMetrics = t.listMetrics.bind(t),
          this.c = e.c,
          this.m = t,
          this.l = e.l)
      },
      paintLegend: function(e) {
          this.m && this.m.description ? this.m.renderLegend(this.c, e, this.l || this.m) : e.innerHTML = ""
      },
      getColor: function() {
          return this.c && this.c.getColor()
      },
      getName: function() {
          return e[this.trans] || this.ident
      }
  })
}),
/*! */
W.define("overlays", ["Overlay", "layers", "colors"], function(e, t, n) {
  Object.defineProperty(e, "metric", {
      get: function() {
          return this.m ? this.m.metric : ""
      }
  });
  var i = {};
  return i.wind = e.instance({
      ident: "wind",
      hasMoreLevels: !0,
      trans: "WIND",
      icon: "|",
      layers: ["windParticles", "wind"]
  }),
  i.temp = e.instance({
      ident: "temp",
      trans: "TEMP",
      icon: "",
      layers: ["windParticles", "temp"],
      hasMoreLevels: !0
  }),
  i.dewpoint = e.instance({
      parentMenu: "temp",
      ident: "dewpoint",
      trans: "DEW_POINT",
      icon: "",
      layers: ["windParticles", "dewpoint"],
      hasMoreLevels: !0
  }),
  i.gust = e.instance({
      parentMenu: "wind",
      ident: "gust",
      trans: "GUST",
      icon: "",
      layers: ["windParticles", "gust"]
  }),
  i.gustAccu = e.instance({
      parentMenu: "wind",
      ident: "gustAccu",
      trans: "GUSTACCU",
      icon: "",
      layers: ["windParticles", "gustAccu"]
  }),
  i.rh = e.instance({
      parentMenu: "temp",
      ident: "rh",
      icon: "/",
      trans: "RH",
      layers: ["windParticles", "rh"],
      hasMoreLevels: !0
  }),
  i.pressure = e.instance({
      ident: "pressure",
      trans: "PRESS",
      icon: "",
      layers: ["windParticles", "pressure"]
  }),
  i.rain = e.instance({
      ident: "rain",
      trans: "RAIN_THUNDER",
      icon: "",
      layers: ["windParticles", "rain"]
  }),
  i.clouds = e.instance({
      ident: "clouds",
      trans: "CLOUDS2",
      icon: "7",
      layers: ["windParticles", "clouds"],
      paintLegend: function(e) {
          this.m.renderLegend(t.rain.c, e, this.m)
      }
  }),
  i.lclouds = e.instance({
      parentMenu: "clouds",
      ident: "lclouds",
      trans: "LOW_CLOUDS",
      icon: "",
      layers: ["windParticles", "lclouds"]
  }),
  i.mclouds = e.instance({
      parentMenu: "clouds",
      ident: "mclouds",
      trans: "MEDIUM_CLOUDS",
      icon: "",
      layers: ["windParticles", "mclouds"]
  }),
  i.hclouds = e.instance({
      parentMenu: "clouds",
      ident: "hclouds",
      trans: "HIGH_CLOUDS",
      layers: ["windParticles", "hclouds"],
      icon: ""
  }),
  i.cape = e.instance({
      parentMenu: "clouds",
      ident: "cape",
      trans: "CAPE",
      layers: ["windParticles", "cape"],
      icon: "~"
  }),
  i.cbase = e.instance({
      parentMenu: "clouds",
      ident: "cbase",
      trans: "CLOUD_ALT",
      icon: ":",
      layers: ["windParticles", "cbase"]
  }),
  i.ozone = e.instance({
      parentMenu: "cosc",
      ident: "ozone",
      trans: "OZONE",
      icon: "O",
      layers: ["ozone"]
  }),
  i.snowAccu = e.instance({
      parentMenu: "rain",
      ident: "snowAccu",
      trans: "NEWSNOW",
      icon: "",
      layers: ["snowAccu"]
  }),
  i.rainAccu = e.instance({
      parentMenu: "rain",
      ident: "rainAccu",
      trans: "RACCU",
      icon: "9",
      layers: ["rainAccu"]
  }),
  i.waves = e.instance({
      ident: "waves",
      trans: "WAVES",
      icon: "",
      layers: ["waveParticles", "waves"]
  }),
  i.wwaves = e.instance({
      parentMenu: "waves",
      ident: "wwaves",
      trans: "WWAVES",
      icon: "|",
      layers: ["waveParticles", "wwaves"]
  }),
  i.swell1 = e.instance({
      parentMenu: "waves",
      ident: "swell1",
      trans: "SWELL",
      icon: "{",
      layers: ["waveParticles", "swell1"]
  }),
  i.swell2 = e.instance({
      parentMenu: "waves",
      ident: "swell2",
      trans: "SWELL2",
      icon: "",
      layers: ["waveParticles", "swell2"]
  }),
  i.swell3 = e.instance({
      parentMenu: "waves",
      ident: "swell3",
      trans: "SWELL3",
      icon: "",
      layers: ["waveParticles", "swell3"]
  }),
  i.swell = i.swell1,
  i.currents = e.instance({
      parentMenu: "waves",
      ident: "currents",
      trans: "CURRENT",
      icon: "q",
      layers: ["currentParticles", "currents"]
  }),
  i.sst = e.instance({
      parentMenu: "waves",
      ident: "sst",
      trans: "SST2",
      icon: "",
      layers: ["currentParticles", "sst"]
  }),
  i.visibility = e.instance({
      parentMenu: "clouds",
      ident: "visibility",
      trans: "VISIBILITY",
      icon: "c",
      layers: ["windParticles", "visibility"]
  }),
  i.snowcover = e.instance({
      parentMenu: "rain",
      ident: "snowcover",
      trans: "SNOWDEPTH",
      icon: "N",
      layers: ["windParticles", "snowcover"]
  }),
  i.cloudtop = e.instance({
      parentMenu: "clouds",
      ident: "cloudtop",
      trans: "CTOP",
      icon: "Q",
      layers: ["windParticles", "cloudtop"]
  }),
  i.deg0 = e.instance({
      parentMenu: "temp",
      ident: "deg0",
      trans: "FREEZING",
      icon: "",
      layers: ["windParticles", "deg0"]
  }),
  i.cosc = e.instance({
      ident: "cosc",
      trans: "COSC",
      icon: "",
      layers: ["ecmwfWindParticles", "cosc"]
  }),
  i.so2sm = e.instance({
      ident: "so2sm",
      parentMenu: "cosc",
      trans: "SO2SM",
      icon: "",
      layers: ["ecmwfWindParticles", "so2sm"]
  }),
  i.dustsm = e.instance({
      ident: "dustsm",
      parentMenu: "cosc",
      trans: "DUSTSM",
      icon: "",
      layers: ["ecmwfWindParticles", "dustsm"]
  }),
  i.ptype = e.instance({
      parentMenu: "rain",
      ident: "ptype",
      trans: "PTYPE",
      icon: "",
      layers: ["ecmwfWindParticles", "ptype"],
      paintLegend: function(e) {
          this.m.renderLegend(n.ptype.getColor(), e)
      }
  }),
  i.gh = e.instance({
      ident: "gh",
      layers: ["gh"]
  }),
  i.radar = e.instance({
      ident: "radar",
      textNote: "US, EU, JA, TW, KO...",
      trans: "RADAR_BLITZ",
      icon: "",
      hasMoreLevels: !1,
      layers: ["radar"]
  }),
  i.capAlerts = e.instance({
      ident: "capAlerts",
      trans: "WX_WARNINGS",
      icon: "",
      layers: ["capAlerts"]
  }),
  i.fog = e.instance({
      parentMenu: "clouds",
      ident: "fog",
      trans: "FOG",
      icon: "d",
      layers: ["fog"]
  }),
  i.thunder = e.instance({
      parentMenu: "rain",
      ident: "thunder",
      trans: "THUNDER",
      icon: "",
      layers: ["windParticles", "thunder"]
  }),
  i
}),
/*! */
W.define("metrics", ["Metric", "trans"], function(e, t) {
  var n = function(e) {
      return e
  };
  return {
      temp: e.instance({
          ident: "temp",
          separator: "",
          defaults: ["°C", "°F"],
          conv: {
              "°C": {
                  conversion: function(e) {
                      return e - 273.15
                  },
                  precision: 0
              },
              "°F": {
                  conversion: function(e) {
                      return 9 * e / 5 - 459.67
                  },
                  precision: 0
              }
          },
          description: ["°C", "°F"],
          lines: [[252, -20, -5], [262, -10, 15], [272, 0, 30], [282, 10, 50], [292, 20, 70], [302, 30, 85], [313, 40, 100]]
      }),
      wind: e.instance({
          ident: "wind",
          defaults: ["kt"],
          conv: {
              kt: {
                  conversion: function(e) {
                      return 1.943844 * e
                  },
                  precision: 0
              },
              bft: {
                  conversion: function(e) {
                      return e < .3 ? 0 : e < 1.5 ? 1 : e < 3.3 ? 2 : e < 5.5 ? 3 : e < 8 ? 4 : e < 10.8 ? 5 : e < 13.9 ? 6 : e < 17.2 ? 7 : e < 20.7 ? 8 : e < 24.5 ? 9 : e < 28.4 ? 10 : e < 32.6 ? 11 : 12
                  },
                  precision: 0
              },
              "m/s": {
                  conversion: n,
                  precision: 0
              },
              "km/h": {
                  conversion: function(e) {
                      return 3.6 * e
                  },
                  precision: 0
              },
              mph: {
                  conversion: function(e) {
                      return 2.236936 * e
                  },
                  precision: 0
              }
          },
          description: ["kt", "bft", "m/s", "mph", "km/h"],
          lines: [[0, 0, 0, 0, 0, 0], [3, 5, 2, 3, 6, 10], [5, 10, 3, 5, 10, 20], [10, 20, 5, 10, 20, 35], [15, 30, 7, 15, 35, 55], [20, 40, 8, 20, 45, 70], [30, 60, 11, 30, 70, 100]]
      }),
      rh: e.instance({
          ident: "rh",
          defaults: ["%"],
          conv: {
              "%": {
                  conversion: n,
                  precision: 0
              }
          },
          description: ["%"],
          lines: [[30, 30], [50, 50], [80, 80], [90, 90], [100, 100]]
      }),
      clouds: e.instance({
          ident: "clouds",
          defaults: ["rules"],
          conv: {
              rules: {
                  conversion: n,
                  precision: 0
              },
              "%": {
                  conversion: n,
                  precision: 0
              }
          },
          description: ["rules", "%"],
          lines: [[25, "FEW", 25], [50, "SCT", 50], [70, "BKN", 70], [100, "OVC", 100]]
      }),
      pressure: e.instance({
          ident: "pressure",
          defaults: ["hPa", "inHg", "mmHg"],
          conv: {
              hPa: {
                  conversion: function(e) {
                      return e / 100
                  },
                  precision: 0
              },
              mmHg: {
                  conversion: function(e) {
                      return e / 133.322387415
                  },
                  precision: 0
              },
              inHg: {
                  conversion: function(e) {
                      return e / 3386.389
                  },
                  precision: 2
              }
          },
          description: ["hPa", "inHg", "mmHg"],
          lines: [[99e3, 990, 29.2, 742], [1e5, 1e3, 29.6, 750], [101e3, 1010, 29.8, 757], [102e3, 1020, 30.1, 765], [103e3, 1030, 30.4, 772]]
      }),
      rain: e.instance({
          ident: "rain",
          defaults: ["mm", "in"],
          conv: {
              in: {
                  conversion: function(e) {
                      return .039 * e
                  },
                  precision: 2
              },
              mm: {
                  conversion: n,
                  precision: 1
              }
          },
          description: ["mm", "in"],
          lines: [[1.5, 1.5, ".06"], [2, 2, ".08"], [3, 3, ".11"], [7, 7, ".24"], [10, 10, ".39"], [20, 20, ".78"], [30, 30, 1.2]]
      }),
      cape: e.instance({
          ident: "cape",
          defaults: ["J/kg"],
          conv: {
              "J/kg": {
                  conversion: n,
                  precision: 0
              }
          },
          description: ["J/kg"],
          lines: [[0, 0], [500, 500], [1500, 1500], [2500, 2500], [5e3, 5e3]]
      }),
      ozone: e.instance({
          ident: "ozone",
          defaults: ["DU"],
          conv: {
              DU: {
                  conversion: function(e) {
                      return 46728 * e
                  },
                  precision: 0
              }
          },
          description: ["DU"],
          lines: [[.0045, 210], [.0051, 240], [.006, 280], [.007, 330], [.008, 370]]
      }),
      altitude: e.instance({
          ident: "altitude",
          defaults: ["m", "ft"],
          conv: {
              m: {
                  conversion: function(e) {
                      return 100 * Math.round(e / 100)
                  },
                  precision: 0
              },
              ft: {
                  conversion: function(e) {
                      return 100 * Math.round(.0328 * e)
                  },
                  precision: 0
              }
          },
          description: ["m", "ft"],
          lines: [[0, 0, 0], [1e3, 1e3, 3e3], [1500, 1500, 5e3], [5e3, "5k", "FL150"], [9e3, "9k", "FL300"]]
      }),
      snow: e.instance({
          ident: "snow",
          defaults: ["cm", "in"],
          conv: {
              in: {
                  conversion: function(e) {
                      return .39 * e
                  },
                  precision: 1
              },
              cm: {
                  conversion: n,
                  precision: 1
              }
          },
          description: ["cm", "in"],
          lines: [[2, 2, ".8"], [5, 5, 2], [10, 10, 4], [50, 50, 20], [100, "1m", "3ft"], [300, "3m", "9ft"]]
      }),
      waves: e.instance({
          ident: "waves",
          defaults: ["m", "ft"],
          conv: {
              m: {
                  conversion: n,
                  precision: 1
              },
              ft: {
                  conversion: function(e) {
                      return 3.28 * e
                  },
                  precision: 0
              }
          },
          description: ["m", "ft"],
          lines: [[.5, .5, 1.6], [1, 1, 3.3], [1.5, 1.5, 5], [2, 2, 6.6], [6, 6, 20], [9, 9, 30]]
      }),
      currents: e.instance({
          ident: "currents",
          separator: " ",
          defaults: ["kt"],
          conv: {
              kt: {
                  conversion: function(e) {
                      return 1.943844 * e
                  },
                  precision: 1
              },
              "m/s": {
                  conversion: n,
                  precision: 2
              },
              "km/h": {
                  conversion: function(e) {
                      return 3.6 * e
                  },
                  precision: 1
              },
              mph: {
                  conversion: function(e) {
                      return 2.236936 * e
                  },
                  precision: 1
              }
          },
          description: ["kt", "m/s", "mph", "km/h"],
          lines: [[0, 0, 0, 0, 0], [.2, .4, .2, .4, .7], [.4, .8, .4, .9, 1.4], [.8, 1.6, .8, 1.8, 2.9], [1, 2, 1, 2.2, 3.6], [1.6, 3.2, 1.6, 3.6, 5.8]]
      }),
      visibility: e.instance({
          ident: "visibility",
          defaults: ["km", "sm"],
          conv: {
              rules: {
                  conversion: function(e) {
                      return e / 1e3
                  },
                  label: "km",
                  precision: 1
              },
              km: {
                  conversion: function(e) {
                      return e / 1e3
                  },
                  precision: 1
              },
              sm: {
                  conversion: function(e) {
                      return .00328 * e
                  },
                  precision: 1
              }
          },
          description: ["rules", "km", "sm"],
          lines: [[0, "LIFR", ".8", ".5"], [3e3, "IFR", 2.7, 1.5], [7e3, "MVFR", 6, 4], [16e3, "VFR", 16, 10]]
      }),
      so2: e.instance({
          ident: "so2",
          defaults: ["µg/m³"],
          conv: {
              "µg/m³": {
                  conversion: n,
                  precision: 2
              }
          },
          description: ["µg/m³", "µg/m³"],
          lines: [[0, 0], [1, 1], [5, 5], [10, 10], [80, 80]]
      }),
      dust: e.instance({
          ident: "dust",
          defaults: ["µg/m³"],
          conv: {
              "µg/m³": {
                  conversion: n,
                  precision: 1
              }
          },
          description: ["µg/m³", "µg/m³"],
          lines: [[0, 0], [50, 50], [100, 100], [500, 500], [800, 800]]
      }),
      cosc: e.instance({
          ident: "cosc",
          defaults: ["ppbv"],
          conv: {
              ppbv: {
                  conversion: n,
                  precision: 0
              }
          },
          description: ["ppbv", "ppbv"],
          lines: [[0, 0], [50, 50], [100, 100], [500, 500], [1200, 1200]]
      }),
      radar: e.instance({
          ident: "radar",
          defaults: ["dBZ"],
          conv: {
              dBZ: {
                  conversion: n,
                  precision: 0
              }
          },
          description: ["dBZ", "dBZ"],
          lines: [[0, 0], [30, 30], [40, 40], [50, 50], [60, 60], [70, 70]]
      }),
      ptype: e.instance({
          ident: "ptype",
          defaults: ["ptype"],
          conv: {
              ptype: {
                  conversion: n,
                  precision: 0,
                  label: ""
              }
          },
          ptype2text: {
              0: "RAIN",
              1: "JUST_RAIN",
              2: "THUNDER",
              3: "FZ_RAIN",
              4: "MX_ICE",
              5: "SNOW",
              6: "WET_SN",
              7: "RA_SN",
              8: "PELLETS",
              9: "LIGHT_THUNDER",
              10: "THUNDER",
              11: "HEAVY_THUNDER"
          },
          convertNumber: function(e) {
              return t[this.ptype2text[e]]
          },
          renderLegend: function(t, e) {
              var n = this;
              t.getColor();
              var i = [1, 3, 4, 5, 6, 7, 8].map(function(e) {
                  return '<span style="background: ' + t.colorDark(e, 50) + ';">' + n.convertNumber(e) + "</span>"
              }).join("");
              e.style.background = null,
              e.dataset.overlay = "ptype",
              e.innerHTML = i
          }
      }),
      gh: e.instance({
          ident: "gh",
          defaults: ["m"],
          conv: {
              m: {
                  conversion: n,
                  precision: 0
              }
          }
      }),
      fog: e.instance({
          ident: "fog",
          defaults: ["type"],
          conv: {
              type: {
                  conversion: n,
                  precision: 0
              }
          },
          description: ["type"],
          lines: [[1, "Fog"], [2, "Fog & rime"]]
      }),
      lightDensity: e.instance({
          ident: "lightDensity",
          defaults: ["l/km²"],
          conv: {
              "l/km²": {
                  conversion: n,
                  precision: 2
              }
          },
          description: ["l/km²", "l/km²"],
          lines: [[0, 0], [.025, ".025"], [.1, ".1"], [1, 1], [10, 10], [20, 20]]
      })
  }
}),
/*! */
W.define("layers", ["colors", "metrics", "Layer", "legends"], function(e, t, n, i) {
  var s = {}
    , a = function(e) {
      return Math.max(0, Math.pow(2, e) - .001)
  };
  return s.capAlerts = n.instance({
      ident: "capAlerts",
      renderer: "capAlerts"
  }),
  s.pressureIsolines = n.instance({
      ident: "pressureIsolines",
      renderer: "isolines",
      levels: ["surface"]
  }),
  s.ghIsolines = n.instance({
      ident: "ghIsolines",
      renderer: "isolines",
      levels: ["950h", "925h", "900h", "850h", "800h", "700h", "600h", "500h", "400h", "300h", "250h", "200h", "150h"]
  }),
  s.tempIsolines = n.instance({
      ident: "tempIsolines",
      renderer: "isolines",
      levels: ["950h", "925h", "900h", "850h", "800h", "700h", "600h", "500h", "400h", "300h", "250h", "200h", "150h"]
  }),
  s.deg0Isolines = n.instance({
      ident: "deg0Isolines",
      renderer: "isolines",
      levels: ["surface"]
  }),
  s.windParticles = n.instance({
      ident: "windParticles",
      renderer: "particles",
      filename: "wind",
      fileSuffix: "jpg",
      renderParams: {
          particlesIdent: "wind"
      }
  }),
  s.ecmwfWindParticles = n.instance({
      ident: "ecmwfWindParticles",
      renderer: "particles",
      product: "ecmwf",
      levels: ["surface"],
      filename: "wind",
      fileSuffix: "jpg",
      renderParams: {
          particlesIdent: "wind"
      }
  }),
  s.waveParticles = n.instance({
      ident: "waveParticles",
      renderer: "particles",
      PNGtransparency: !0,
      renderParams: {
          particlesIdent: "waves"
      }
  }),
  s.currentParticles = n.instance({
      ident: "currentParticles",
      renderer: "particles",
      PNGtransparency: !0,
      product: "sea",
      filename: "sstcombined",
      renderParams: {
          particlesIdent: "currents"
      }
  }),
  s.wind = n.instance({
      ident: "wind",
      renderParams: {
          renderFrom: "RG"
      },
      c: e.wind,
      m: t.wind
  }),
  s.temp = n.instance({
      ident: "temp",
      c: e.temp,
      m: t.temp
  }),
  s.dewpoint = n.instance({
      ident: "dewpoint",
      c: e.temp,
      m: t.temp
  }),
  s.gust = n.instance({
      ident: "gust",
      c: e.wind,
      m: t.wind
  }),
  s.gustAccu = n.instance({
      ident: "gustAccu",
      pathGenerator: "{server}/{directory}/next10d/257w<z>/<y>/<x>/gust-surface.jpg?acc=maxip",
      c: e.wind,
      m: t.wind
  }),
  s.rh = n.instance({
      ident: "rh",
      c: e.rh,
      m: t.rh
  }),
  s.pressure = n.instance({
      ident: "pressure",
      fileSuffix: "png",
      c: e.pressure,
      m: t.pressure
  }),
  s.rain = n.instance({
      ident: "rain",
      renderer: "tileLayerPatternator",
      filename: "rainlogptype2",
      fileSuffix: "png",
      c: e.rain,
      m: t.rain,
      renderParams: {
          pattern: "rainPattern",
          interpolateNearestG: !0
      },
      transformR: a,
      transformG: function(e) {
          return Math.round(4 * e) / 4
      }
  }),
  s.ptype = n.instance({
      ident: "ptype",
      renderer: "tileLayerPatternator",
      filename: "rainlogptype",
      fileSuffix: "png",
      c: e.justGray,
      m: t.ptype,
      renderParams: {
          pattern: "ptypePattern",
          interpolateNearestG: !0
      },
      transformR: a,
      transformG: Math.round
  }),
  s.thunder = n.instance({
      ident: "thunder",
      filename: "lightdens",
      transformR: a,
      c: e.lightDensity,
      m: t.lightDensity
  }),
  s.clouds = n.instance({
      ident: "clouds",
      filename: "cloudsrain",
      renderParams: {
          renderFrom: "RG",
          isMultiColor: !0
      },
      c: e.clouds,
      m: t.rain,
      transformG: function(e) {
          return e < 10 ? e : 10 * (e - 10) + 10
      },
      getColor2: function() {
          return e.rainClouds.getColor()
      },
      getAmountByColor: function(e, t) {
          return t < .3 ? 0 : t < 3 ? 1 : t < 6 ? 2 : 3
      }
  }),
  s.lclouds = n.instance({
      ident: "lclouds",
      c: e.lclouds,
      m: t.clouds
  }),
  s.mclouds = n.instance({
      ident: "mclouds",
      c: e.mclouds,
      m: t.clouds
  }),
  s.hclouds = n.instance({
      ident: "hclouds",
      c: e.hclouds,
      m: t.clouds
  }),
  s.cape = n.instance({
      ident: "cape",
      c: e.cape,
      m: t.cape
  }),
  s.cbase = n.instance({
      ident: "cbase",
      fileSuffix: "png",
      PNGtransparency: !0,
      c: e.cbase,
      m: t.altitude,
      l: i.cbase
  }),
  s.fog = n.instance({
      ident: "fog",
      filename: "fogtype",
      fileSuffix: "png",
      c: e.fog,
      m: t.fog
  }),
  s.snowAccu = n.instance({
      ident: "snowAccu",
      c: e.snow,
      m: t.snow,
      transformR: a,
      pathGenerator: "{server}/{directory}/{acTime}/257w<z>/<y>/<x>/snowaccumulationlog-surface.png",
      renderParams: {
          interpolate: "interpolateOverlay"
      }
  }),
  s.rainAccu = n.instance({
      ident: "rainAccu",
      transformR: a,
      pathGenerator: "{server}/{directory}/{acTime}/257w<z>/<y>/<x>/rainaccumulationlog-surface.png",
      renderParams: {
          interpolate: "interpolateOverlay"
      },
      c: e.rainAccu,
      m: t.rain,
      l: i.rainAccu
  }),
  s.waves = n.instance({
      ident: "waves",
      PNGtransparency: !0,
      renderParams: {
          interpolate: "interpolateWaves",
          renderFrom: "B",
          sea: !0
      },
      c: e.waves,
      m: t.waves
  }),
  s.wwaves = s.waves.instance({
      ident: "wwaves"
  }),
  s.swell1 = s.waves.instance({
      ident: "swell1"
  }),
  s.swell2 = s.waves.instance({
      ident: "swell2"
  }),
  s.swell3 = s.waves.instance({
      ident: "swell3"
  }),
  s.swell = s.swell1,
  s.currents = n.instance({
      ident: "currents",
      filename: "sstcombined",
      PNGtransparency: !0,
      renderParams: {
          renderFrom: "RG",
          sea: !0
      },
      c: e.currents,
      m: t.currents
  }),
  s.sst = n.instance({
      ident: "sst",
      PNGtransparency: !0,
      pathGenerator: "{server}/{directory}/latest/257w<z>/<y>/<x>/sst-surface.png",
      renderParams: {
          sea: !0
      },
      c: e.temp,
      m: t.temp,
      l: i.sst
  }),
  s.visibility = n.instance({
      ident: "visibility",
      c: e.visibility,
      m: t.visibility
  }),
  s.snowcover = n.instance({
      ident: "snowcover",
      filename: "snowcoverlog",
      transformR: a,
      c: e.snow,
      m: t.snow
  }),
  s.cloudtop = n.instance({
      ident: "cloudtop",
      hasParticles: !0,
      levels: ["surface"],
      c: e.levels,
      m: t.altitude,
      l: i.ctops
  }),
  s.deg0 = n.instance({
      ident: "deg0",
      levels: ["surface"],
      c: e.deg0,
      m: t.altitude
  }),
  s.cosc = n.instance({
      ident: "cosc",
      filename: "chem_cosc",
      c: e.cosc,
      m: t.cosc,
      transformR: function(e) {
          return Math.pow(2, e) - 1
      }
  }),
  s.so2sm = n.instance({
      ident: "so2sm",
      filename: "chem_so2sm",
      c: e.so2,
      m: t.so2,
      fileSuffix: "png",
      transformR: function(e) {
          return Math.pow(2, e) - .001
      }
  }),
  s.ozone = n.instance({
      ident: "ozone",
      renderParams: {
          interpolate: "interpolateOverlay"
      },
      c: e.ozone,
      m: t.ozone
  }),
  s.dustsm = n.instance({
      ident: "dustsm",
      filename: "chem_dustsm",
      hasParticles: !1,
      c: e.dust,
      m: t.dust,
      transformR: function(e) {
          return Math.pow(2, e) - .1
      }
  }),
  s.radar = n.instance({
      ident: "radar",
      renderer: "radar",
      c: e.radar,
      m: t.radar
  }),
  s.gh = n.instance({
      ident: "gh",
      m: t.gh
  }),
  s
}),
/*! */
W.define("models", ["store", "broadcast", "$", "utils", "rootScope", "products", "layers", "overlays"], function(s, e, t, a, r, o, n, i) {
  var l = t('meta[name="model"]');
  l && l.content && a.contains(r.globalProducts, l.content) && "ecmwf" !== l.content && s.set("product", l.content);
  var c = {}
    , d = {}
    , u = Object.keys(o);
  Object.keys(n).forEach(function(e) {
      c[e] = [];
      for (var t = 0; t < u.length; t++)
          a.contains(o[u[t]].overlays, e) && c[e].push(u[t])
  }),
  Object.keys(i).forEach(function(e) {
      d[e] = [];
      for (var t = 0; t < u.length; t++)
          a.contains(o[u[t]].overlays, e) && d[e].push(u[t])
  }),
  e.once("paramsChanged", function() {
      h(),
      e.on("mapChanged", h)
  });
  var h = function() {
      var e = f(r.map).concat(r.globalProducts);
      s.set("visibleProducts", e) && (a.contains(e, s.get("product")) || s.set("product", s.get("prefferedProduct")))
  }
    , f = function(e, t) {
      var n, i, s = [];
      for (i = 0; i < r.localProducts.length; i++)
          n = r.localProducts[i],
          o[n].pointIsInBounds(e) && s.push(n);
      return t && !a.contains(s, "nems") && s.push("nems"),
      s
  };
  return {
      betterProducts: f,
      getProduct: function(e, t) {
          var n = c[e]
            , i = s.get("prefferedProduct");
          return a.contains(n, t) ? t : a.contains(n, i) ? i : a.contains(n, "ecmwfWaves") && "ecmwf" === i ? "ecmwfWaves" : a.contains(n, "gfsWaves") && "gfs" === i ? "gfsWaves" : n[0]
      },
      layer2product: c,
      overlay2product: d
  }
}),
/*! */
W.define("products", ["Product", "StaticProduct", "Calendar", "$", "radar"], function(n, e, i, s, t) {
  var a = {}
    , r = "© 2016 ECMWF: This service is based on data and products of the European Centre for Medium-range Weather Forecasts";
  a.ecmwf = n.instance({
      ident: "ecmwf",
      directory: "ecmwf-hres",
      modelName: "ECMWF",
      modelResolution: 9,
      provider: "ECMWF",
      interval: 720,
      copy: r,
      dataQuality: "normal",
      betterDataQuality: ["rain", "clouds", "lclouds", "mclouds", "hclouds", "cbase", "snowAccu", "rainAccu", "snowcover", "ptype", "sst"],
      levels: ["surface", "100m", "950h", "925h", "900h", "850h", "800h", "700h", "600h", "500h", "400h", "300h", "250h", "200h", "150h"],
      overlays: ["snowcover", "gh", "wind", "temp", "pressure", "clouds", "lclouds", "mclouds", "hclouds", "rh", "gust", "cbase", "cape", "dewpoint", "rain", "visibility", "deg0", "cloudtop", "thunder", "snowAccu", "rainAccu", "ozone", "ptype", "sst", "gustAccu"],
      acTimes: ["next12h", "next24h", "next3d", "next5d", "next10d"],
      isolines: ["pressure", "gh", "temp", "deg0"],
      _init: function() {
          n._init.call(this);
          try {
              var e = s('meta[name="minifest-' + this.directory + '"]')
                , t = e && e.content;
              if (!t)
                  throw "noMinifestStr";
              if (this.minifest = JSON.parse(t),
              this.calendar = i.instance({
                  numOfHours: this.forecastSize,
                  minifestFile: this.minifest
              }),
              !this.calendar.minifestValid)
                  throw "minifestNotValid";
              this.setExpireTime()
          } catch (e) {
              window.wError("products", "Cant create ecmwf calendar from meta tag", e),
              this.createBackupMinifest()
          }
      }
  }),
  a.gfs = n.instance({
      ident: "gfs",
      provider: "NOAA",
      interval: 360,
      modelName: "GFS",
      modelResolution: 22,
      directory: "gfs",
      maxTileZoom: 3,
      dataQuality: "low",
      betterDataQuality: ["rain", "clouds", "lclouds", "mclouds", "hclouds"],
      levels: ["surface", "100m", "975h", "950h", "925h", "900h", "850h", "800h", "700h", "600h", "500h", "400h", "300h", "250h", "200h", "150h"],
      overlays: ["gh", "wind", "temp", "pressure", "clouds", "rh", "gust", "dewpoint", "rain", "lclouds", "mclouds", "hclouds", "snowAccu", "rainAccu", "ptype", "gustAccu"],
      acTimes: ["next12h", "next24h", "next3d", "next5d", "next10d"],
      isolines: ["pressure", "gh", "temp"]
  }),
  a.iconEu = n.instance({
      ident: "iconEu",
      provider: "DWD",
      interval: 360,
      modelName: "ICON",
      modelResolution: 7,
      JPGtransparency: !0,
      animation: !0,
      dataQuality: "high",
      betterDataQuality: ["rain", "clouds", "lclouds", "mclouds", "hclouds"],
      directory: "icon-eu",
      forecastSize: 144,
      bounds: {
          west: -23,
          east: 44,
          north: 70,
          south: 30
      },
      levels: ["surface", "950h", "925h", "900h", "850h", "800h", "700h", "600h", "500h", "400h", "300h", "250h", "200h", "150h"],
      overlays: ["snowcover", "gh", "wind", "temp", "pressure", "clouds", "lclouds", "mclouds", "hclouds", "rh", "gust", "cape", "dewpoint", "rain", "deg0", "snowAccu", "rainAccu", "ptype", "gustAccu"],
      acTimes: ["next12h", "next24h", "next2d", "next3d", "next5d"],
      isolines: ["pressure", "gh", "temp"]
  }),
  a.arome = n.instance({
      ident: "arome",
      provider: "MF",
      interval: 360,
      modelName: "AROME",
      modelResolution: 2,
      JPGtransparency: !0,
      animation: !0,
      dataQuality: "radar",
      betterDataQuality: [],
      directory: "arome",
      labelsTemp: !1,
      forecastSize: 72,
      bounds: {
          west: -10,
          east: 15,
          north: 55,
          south: 38
      },
      levels: ["surface"],
      overlays: ["wind", "temp", "clouds", "lclouds", "mclouds", "hclouds", "rh", "gust", "cape", "dewpoint", "rain", "ptype"],
      acTimes: [],
      isolines: []
  }),
  a.iconGlobal = n.instance({
      ident: "iconGlobal",
      provider: "DWD",
      interval: 360,
      modelName: "ICON",
      modelResolution: 13,
      labelsTemp: !1,
      dataQuality: "normal",
      directory: "icon-global",
      forecastSize: 144,
      overlays: ["fog"],
      levels: ["surface"]
  }),
  a.nems = n.instance({
      ident: "nems",
      modelName: "NEMS",
      modelResolution: 4,
      provider: "Meteoblue.com",
      interval: 720,
      JPGtransparency: !0,
      animation: !0,
      dataQuality: "high",
      betterDataQuality: ["rain", "clouds"],
      directory: "mbeurope",
      labelsTemp: !1,
      forecastSize: 72,
      bounds: {
          west: -19,
          east: 33,
          north: 57,
          south: 33
      },
      levels: ["surface", "975h", "950h", "925h", "900h", "850h"],
      overlays: ["wind", "temp", "clouds", "rh", "gust", "dewpoint", "rain", "ptype"],
      open: function() {
          var e = n.open.call(this)
            , t = s("#mb-info img");
          return t && (t.src = "img/logo-mb.svg"),
          this.open = n.open.bind(this),
          e
      }
  });
  var o = n.extend({
      provider: "NOAA",
      interval: 360,
      modelName: "NAM",
      dataQuality: "high",
      betterDataQuality: ["rain", "clouds", "lclouds", "hclouds", "mclouds"],
      JPGtransparency: !0,
      forecastSize: 72,
      animationSpeed: 2e3,
      levels: ["surface", "975h", "950h", "925h", "900h", "850h", "800h", "700h", "600h", "500h", "400h", "300h", "250h", "200h", "150h"],
      overlays: ["wind", "temp", "clouds", "rh", "gust", "pressure", "dewpoint", "rain", "lclouds", "hclouds", "mclouds", "snowAccu", "rainAccu", "ptype", "gustAccu"],
      acTimes: ["next12h", "next24h", "next2d", "next3d"],
      isolines: ["pressure", "temp"]
  });
  return a.namConus = o.instance({
      ident: "namConus",
      modelResolution: 5,
      directory: "nam-conus",
      bounds: {
          west: -137,
          east: -55,
          north: 53,
          south: 20
      }
  }),
  a.namHawaii = o.instance({
      ident: "namHawaii",
      modelResolution: 3,
      directory: "nam-hawaii",
      bounds: {
          west: -167,
          east: -147,
          north: 30,
          south: 14
      }
  }),
  a.namAlaska = o.instance({
      ident: "namAlaska",
      modelResolution: 6,
      directory: "nam-alaska",
      bounds: {
          west: -179,
          east: -129,
          north: 80,
          south: 53
      }
  }),
  a.ecmwfWaves = n.instance({
      ident: "ecmwfWaves",
      modelName: "ECMWF WAM",
      modelResolution: 13,
      provider: "ECMWF",
      interval: 720,
      copy: r,
      labelsTemp: !1,
      directory: "ecmwf-wam",
      fileSuffix: "png",
      dataQuality: "normal",
      overlays: ["waves", "swell1", "swell2", "swell3", "wwaves"],
      levels: ["surface"]
  }),
  a.gfsWaves = n.instance({
      ident: "gfsWaves",
      modelName: "Wavewatch 3",
      modelResolution: 22,
      provider: "NOAA",
      interval: 360,
      labelsTemp: !1,
      directory: "wwatch",
      fileSuffix: "png",
      maxTileZoom: 2,
      dataQuality: "low",
      overlays: ["waves", "swell1", "swell2", "wwaves"],
      levels: ["surface"]
  }),
  a.sea = e.instance({
      ident: "sea",
      animation: !1,
      modelName: "NESDIS",
      modelResolution: 22,
      provider: "NOAA",
      labelsTemp: !1,
      interval: 2880,
      dataQuality: "low",
      overlays: ["currents"],
      levels: ["surface"],
      pathGenerator: "{server}/sst/latest/257w<z>/<y>/<x>/{filename}.png"
  }),
  a.geos5 = n.instance({
      ident: "geos5",
      modelName: "NASA GEOS-5",
      modelResolution: 22,
      labelsTemp: !1,
      provider: "NASA",
      interval: 3240,
      directory: "nasa-chem",
      dataQuality: "normal",
      overlays: ["cosc", "dustsm", "so2sm"],
      levels: ["surface"]
  }),
  a.radar = t,
  a.capAlerts = e.instance({
      ident: "capAlerts",
      productReady: !0,
      labelsTemp: !1,
      modelName: "CAP Alerts",
      interval: 0,
      provider: "National weather institutes",
      overlays: ["capAlerts"]
  }),
  a
}),
/*! */
W.define("legends", [], function() {
  return {
      cbase: {
          description: ["m", "ft"],
          lines: [[0, 0, 0], [200, 300, 1e3], [500, 500, 1500], [1500, "1.5k", 5e3]]
      },
      sst: {
          description: ["°C", "°F"],
          lines: [[272, 0, 30], [282, 10, 50], [292, 20, 70], [302, 30, 85], [313, 40, 100]]
      },
      ctops: {
          description: ["m", "ft"],
          lines: [[0, 0, 0], [5e3, "5k", "FL150"], [9e3, "9k", "FL300"], [12e3, "12k", "FL400"], [15e3, "15k", "FL500"]]
      },
      rainAccu: {
          description: ["mm", "in"],
          lines: [[5, 5, ".2"], [10, 10, ".4"], [20, 20, ".8"], [40, 40, 1.5], [1e3, "1m", "3ft"]]
      }
  }
}),
/*! */
W.define("detail", ["Evented"], function(e) {
  return e.instance({
      ident: "detail"
  })
}),
/*! */
W.define("broadcast", ["Evented"], function(e) {
  return e.instance({
      ident: "bcast"
  })
}),
/*! */
W.define("detectDevice", [], function() {
  var e, t, n, i, s = window.navigator.userAgent, a = /android/i.test(s) ? "android" : /(iPhone|iPod|iPad)/i.test(s) ? "ios" : /windows phone/i.test(s) ? "wphone" : "desktop", r = (e = window.screen.width,
  t = window.screen.height,
  n = Math.max(e, t),
  i = Math.min(e, t),
  n <= 600 || n <= 960 && i <= 600 ? "mobile" : n <= 1024 || 1024 === i && "ios" === a ? "tablet" : "desktop");
  return window.addEventListener("load", function() {
      document.body.classList.add("platform-" + a),
      document.documentElement.id = "device-" + r
  }),
  {
      platform: a,
      device: r
  }
}),
/*! */
W.define("rootScope", ["supportedLanguages", "detectDevice"], function(e, t) {
  var n = t.platform
    , i = t.device
    , s = window.navigator
    , a = {
      version: W.version,
      target: W.target,
      platform: n,
      supportedLanguages: e,
      glParticlesOn: !1,
      server: "https://ims.windy.com",
      nodeServer: "https://node.windy.com",
      tileServer: "https://tiles.windy.com",
      community: "https://community.windy.com",
      assets: "v/" + W.assets,
      levels: ["surface", "100m", "975h", "950h", "925h", "900h", "850h", "800h", "700h", "600h", "500h", "400h", "300h", "250h", "200h", "150h"],
      pointForecast: "/forecast/v2.3",
      iconsDir: "img/icons4",
      overlays: ["radar", "wind", "gust", "gustAccu", "rain", "rainAccu", "snowAccu", "snowcover", "ptype", "thunder", "temp", "dewpoint", "rh", "deg0", "clouds", "hclouds", "mclouds", "lclouds", "fog", "cloudtop", "cbase", "visibility", "cape", "waves", "swell1", "swell2", "swell3", "wwaves", "sst", "currents", "cosc", "dustsm", "so2sm", "ozone", "pressure", "capAlerts"],
      acTimes: ["next12h", "next24h", "next2d", "next3d", "next5d", "next10d"],
      isolines: ["off", "pressure", "gh", "temp", "deg0"],
      localProducts: ["nems", "namConus", "namHawaii", "namAlaska", "iconEu", "arome"],
      globalProducts: ["gfs", "ecmwf", "sea", "geos5", "radar", "ecmwfWaves", "gfsWaves", "iconGlobal", "capAlerts"],
      seaProducts: ["sea", "ecmwfWaves", "gfsWaves"],
      isCrawler: /googlebot/i.test(s.userAgent),
      isMobile: "mobile" === i,
      isTablet: "tablet" === i,
      isTouch: window.L && L.Browser.touch,
      isRetina: window.devicePixelRatio && 1 < window.devicePixelRatio,
      prefLang: s.languages ? s.languages[0] : s.language || s.browserLanguage || s.systemLanguage || s.userLanguage || "en",
      map: {},
      hereMapsID: "app_id=Ps0PWVjNew3jM9lpFHFG&app_code=eEg9396D7_C6NCcM1DUK2A",
      levelsData: {
          "150h": ["150hPa", "13,5km FL450"],
          "200h": ["200hPa", "11.7km FL390"],
          "250h": ["250hPa", "10km FL340"],
          "300h": ["300hPa", "9000m FL300"],
          "400h": ["400hPa", "7000m FL240"],
          "500h": ["500hPa", "5500m FL180"],
          "600h": ["600hPa", "4200m FL140"],
          "700h": ["700hPa", "3000m FL100"],
          "800h": ["800hPa", "2000m 6400ft"],
          "850h": ["850hPa", "1500m 5000ft"],
          "900h": ["900hPa", "900m 3000ft"],
          "925h": ["925hPa", "750m 2500ft"],
          "950h": ["950hPa", "600m 2000ft"],
          "975h": ["975hPa", "300m 1000ft"],
          "100m": ["100m", "330ft"],
          surface: ["", ""]
      },
      pois: {
          favs: ["POI_FAVS", "k"],
          cities: ["POI_FCST", "&"],
          wind: ["POI_WIND", "&#xe008;"],
          temp: ["POI_TEMP", "&#xe005;"],
          metars: ["POI_AD", "Q"],
          cams: ["POI_CAMS", "l"],
          pgspots: ["POI_PG", "&#xe009;"],
          kitespots: ["POI_KITE", "&#xe002;"],
          surfspots: ["POI_SURF", "{"],
          tide: ["POI_TIDE", "q"],
          empty: ["POI_EMPTY", "t"]
      }
  };
  return a.products = a.globalProducts.concat(a.localProducts),
  a
}),
/*! */
W.define("trans", ["utils", "storage", "broadcast", "rootScope", "store", "seoParser", "langEn"], function(l, c, n, e, d, t, i) {
  var u = {
      main: {
          loaded: !0,
          filename: "lang/{lang}.json",
          test: "MON"
      },
      widgets: {
          filename: "lang/widgets/{lang}.json",
          test: "EMBED_SELECT_VIEW"
      },
      alerts: {
          filename: "lang/alerts/{lang}.json",
          test: "ALERT_DELETE"
      },
      settings: {
          filename: "lang/settings/{lang}.json",
          test: "S_LANG"
      },
      register: {
          filename: "lang/register/{lang}.json",
          test: "ALREADY_REGISTERED"
      },
      donate: {
          filename: "lang/donate/{lang}.json",
          test: "DON_ONETIME"
      }
  }
    , h = i
    , s = "en"
    , a = d.get("lang")
    , r = t.lang || e.prefLang;
  function o(a) {
      return /\|/.test(a) ? a.replace(/(\w+)\|(\w+):(\w+)/, function(e, t, n, i) {
          var s = h[t];
          return s && i ? s.replace(/\{\{[^}]+\}\}/g, i) : a
      }) : h[a] || a
  }
  "auto" !== a && l.isValidLang(a) && (r = a),
  h.loadLangFile = function(a, r, o) {
      return new Promise(function(t, e) {
          if (r = r || d.get("usedLang"),
          !o && "en" === r)
              return u[a].loaded = !0,
              void t();
          var n = u[a]
            , i = n.filename
            , s = n.test;
          i = l.template(i, {
              lang: r
          }),
          c.getFile(i, {
              aboluteURL: !1,
              test: s
          }).then(function(e) {
              l.include(h, e),
              u[a].loaded = !0,
              t(e)
          }).catch(e)
      }
      )
  }
  ,
  h.mergeAndLoad = function(t, e) {
      l.include(h, e),
      h.loadLangFile(t).then(function(e) {
          e && n.emit("langFileLoaded", t)
      })
  }
  ;
  var f = ["title", "placeholder", "t", "afterbegin", "beforeend", "tooltipsrc"];
  function m(t, n) {
      var e = Object.keys(u).filter(function(e) {
          return u[e].loaded
      }).map(function(e) {
          return h.loadLangFile(e, t, n)
      });
      Promise.all(e).then(function() {
          h.translateDocument(document.body),
          d.set("usedLang", t),
          document.documentElement.lang = t
      })
  }
  h.translateDocument = function(r) {
      f.forEach(function(e) {
          for (var t, n, i = r.querySelectorAll("[data-" + e + "]"), s = 0, a = i.length; s < a; s++)
              switch (n = o((t = i[s]).dataset[e]),
              e) {
              case "t":
                  /</.test(n) ? t.innerHTML = n : t.textContent = n;
                  break;
              case "title":
              case "placeholder":
                  void 0 !== t[e] && (t[e] = n);
                  break;
              case "tooltipsrc":
                  t.dataset.tooltip = n;
                  break;
              case "afterbegin":
                  3 == t.firstChild.nodeType && t.removeChild(t.firstChild),
                  t.insertAdjacentHTML(e, n);
                  break;
              case "beforeend":
                  3 == t.lastChild.nodeType && t.removeChild(t.lastChild),
                  t.insertAdjacentHTML(e, n)
              }
      })
  }
  ,
  r && (l.isValidLang(r) ? s = r : (r = r.replace(/-\S+$/, "")) !== (s = l.isValidLang(r) ? r : "en") && (e.missingLang = r));
  var p = function() {
      h.translateDocument(document.body),
      m(s),
      d.on("lang", function(e) {
          "auto" !== e && e !== d.get("usedLang") && m(e, !0)
      })
  };
  return "loading" !== document.readyState ? p() : document.addEventListener("DOMContentLoaded", p),
  h
}),
/*! */
W.define("store", ["dataSpecifications", "utils", "storage", "rootScope", "Evented", "broadcast"], function(r, n, a, o, e, t) {
  var l = {}
    , c = e.instance({
      ident: "store"
  })
    , d = function(e, t, n) {
      return t.compare ? !t.compare(n, f(e)) : e in l ? l[e] !== n : m(e) !== n
  }
    , u = function(t, e) {
      return "function" == typeof t.allowed ? t.allowed(e) : n.isArray(t.def) ? n.isArray(e) && e.every(function(e) {
          return n.contains(t.allowed, e)
      }) : n.contains(t.allowed, e)
  }
    , i = function(e, t) {
      r[e].def = t,
      delete l[e]
  }
    , s = function(t, n, i) {
      void 0 === i && (i = {});
      var s = r[t];
      if (s) {
          if (!i.doNotCheckValidity && !u(s, n))
              return s.asyncSet ? Promise.reject() : void 0;
          if (s.syncSet && (i.forceChange || d(t, s, n))) {
              var e = s.syncSet(n);
              if (i.forceChange || d(t, s, e))
                  return h(t, s, i, e),
                  !0
          } else {
              if (s.asyncSet) {
                  if (i.forceChange || d(t, s, n)) {
                      var a = s.asyncSet(n);
                      return a.then(function(e) {
                          (i.forceChange || d(t, s, e)) && h(t, s, i, e)
                      }).catch(function(e) {
                          return window.wError("store", "Unable to change store value " + t + ", " + n, e)
                      }),
                      a
                  }
                  return Promise.resolve(n)
              }
              if (i.forceChange || d(t, s, n))
                  return h(t, s, i, n),
                  !0
          }
      } else
          window.wError("store", "Trying to set dataSpec. ident:", t)
  }
    , h = function(e, t, n, i) {
      if (null === i ? delete l[e] : l[e] = i,
      t.save && !n.doNotStore && a.isAvbl) {
          var s = n.update || Date.now();
          a.put("settings_" + e, i),
          t.sync && (a.put("settings_" + e + "_ts", s),
          a.put("lastSyncableUpdatedItem", s)),
          o.user && t.sync && !n.doNotSaveToCloud && c.emit("_cloudSync")
      }
      c.emit(e, null === i ? t.def : i, n.UIident)
  }
    , f = function(e) {
      if (e in l)
          return l[e];
      var t, n = r[e];
      return n ? (n.save && a.isAvbl ? null === (t = a.get("settings_" + e)) ? t = n.def : u(n, t) || (window.wError("store", "Attempt to get invalid value from localStorage", e),
      t = n.def) : t = n.def,
      l[e] = t) : (window.wError("Trying to get invalid dataSpec. ident:", e),
      null)
  }
    , m = function(e) {
      return r[e].def
  };
  c.once("country", function(e) {
      i("hourFormat", /us|uk|ph|ca|au|nz|in|eg|sa|co|pk|my/.test(e) ? "12h" : "24h"),
      s("isImperial", /us|my|lr/.test(e))
  });
  var p, g = a.get("UUID");
  g || (g = (p = function() {
      return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
  }
  )() + p() + "-" + p() + "-" + p() + "-" + p() + "-" + p() + p() + p(),
  a.put("UUID", g));
  return f("firstUserSession") || s("firstUserSession", Date.now()),
  o.sessionCounter = f("sessionCounter201803") + 1,
  s("sessionCounter201803", o.sessionCounter),
  t.emit("identityCreated", g),
  n.include(c, {
      get: f,
      set: s,
      remove: function(e, t) {
          void 0 === t && (t = {
              doNotCheckValidity: !0
          }),
          s(e, null, t)
      },
      insert: function(e, t) {
          return r[e] = t
      },
      defineProperty: function(e, t, n) {
          return r[e][t] = n
      },
      setDefault: i,
      is12hFormat: function() {
          return "12h" === f("hourFormat")
      },
      getDeviceID: function() {
          return g
      },
      getAll: function() {
          Object.keys(r).map(function(e) {
              return console.log(e + ":", f(e))
          })
      },
      getDefault: m,
      getAllowed: function(e) {
          var t = r[e].allowed;
          return t && n.isArray(t) ? t : "Allowed values are checked by function"
      }
  })
}),
/*! */
W.define("dataSpecifications", ["rootScope", "utils"], function(e, t) {
  var n = [!0, !1]
    , i = function(e) {
      return "number" == typeof +e && !isNaN(+e)
  }
    , s = function(e) {
      return void 0 !== e && "object" == typeof e
  }
    , a = function(e) {
      return t.isValidLatLonObj(e) || null == e
  }
    , r = function(e) {
      return e.slice().sort().toString()
  }
    , o = function(e, t) {
      return r(e) === r(t)
  };
  return {
      overlay: {
          def: "wind",
          allowed: e.overlays,
          save: !1,
          sync: !1
      },
      level: {
          def: "surface",
          allowed: e.levels
      },
      acTime: {
          def: "next3d",
          allowed: e.acTimes
      },
      timestamp: {
          def: Date.now(),
          allowed: i
      },
      path: {
          def: "",
          allowed: function(e) {
              return void 0 !== e && "string" == typeof e
          }
      },
      isolines: {
          def: "off",
          allowed: e.isolines,
          save: !0
      },
      product: {
          def: "ecmwf",
          allowed: e.products
      },
      availProducts: {
          def: ["ecmwf"],
          allowed: t.isArray,
          compare: o
      },
      visibleProducts: {
          def: ["ecmwf"],
          allowed: t.isArray,
          compare: o
      },
      availAcTimes: {
          def: ["next12h"],
          allowed: t.isArray
      },
      prefferedProduct: {
          def: "ecmwf",
          allowed: ["ecmwf", "gfs"]
      },
      animation: {
          def: !1,
          allowed: n
      },
      calendar: {
          def: null,
          allowed: s
      },
      availLevels: {
          def: e.levels,
          allowed: e.levels
      },
      particlesAnim: {
          def: "on",
          allowed: ["on", "off", "intensive"],
          save: !0
      },
      lastModified: {
          def: 0,
          allowed: i
      },
      graticule: {
          def: !1,
          allowed: n,
          save: !0,
          sync: !1
      },
      latlon: {
          def: !1,
          allowed: n,
          save: !0,
          sync: !1
      },
      lang: {
          def: "auto",
          allowed: function(e) {
              return "auto" === e || t.isValidLang(e)
          },
          save: !0,
          sync: !0
      },
      englishLabels: {
          def: !1,
          allowed: n,
          save: !0,
          sync: !0
      },
      numDirection: {
          def: !1,
          allowed: n,
          save: !0,
          sync: !0
      },
      favOverlays: {
          def: ["radar", "wind", "gust", "rain", "rainAccu", "snowAccu", "thunder", "temp", "rh", "clouds", "lclouds", "cbase", "visibility", "waves", "swell1", "swell2", "sst"],
          allowed: t.isArray,
          save: !0,
          sync: !0
      },
      hourFormat: {
          def: "24h",
          allowed: ["12h", "24h"],
          save: !0,
          sync: !0
      },
      country: {
          def: "xx",
          save: !0,
          allowed: function(e) {
              return /[a-z][a-z0-9]/.test(e)
          }
      },
      isImperial: {
          def: !1,
          allowed: n
      },
      map: {
          def: "sznmap",
          allowed: ["sznmap", "sat"],
          save: !0,
          sync: !0
      },
      showWeather: {
          def: !0,
          allowed: n,
          save: !0,
          sync: !1
      },
      disableWebGL: {
          def: !1,
          allowed: n,
          save: !0,
          sync: !1
      },
      usedLang: {
          def: "en",
          allowed: e.supportedLanguages
      },
      expertMode: {
          def: !1,
          allowed: n,
          save: !0,
          sync: !0
      },
      lhpaneSwitch: {
          def: "tools",
          save: !0,
          allowed: ["tools", "favs", "settings"]
      },
      particles: {
          def: {
              multiplier: 1,
              velocity: 1,
              width: 1,
              blending: 1,
              opacity: 1
          },
          save: !0,
          allowed: function(e) {
              var t;
              if (!e || "object" != typeof e)
                  return !1;
              for (var n in this.def)
                  if ("number" != typeof (t = e[n]) || 2 < t || t < 0)
                      return !1;
              return !0
          }
      },
      startUp: {
          def: "ip",
          allowed: ["ip", "gps", "location"],
          save: !0
      },
      homeLocation: {
          def: null,
          allowed: a,
          save: !0,
          sync: !0
      },
      ipLocation: {
          def: null,
          allowed: a,
          save: !0
      },
      gpsLocation: {
          def: null,
          allowed: a,
          save: !0
      },
      startupReverseName: {
          def: null,
          allowed: s,
          save: !0
      },
      notams: {
          def: null,
          allowed: s,
          save: !0,
          sync: !0
      },
      email: {
          def: "",
          allowed: function(e) {
              return /\S+@\S+/.test(e)
          },
          save: !0,
          sync: !0
      },
      metarsRAW: {
          def: !1,
          allowed: n,
          save: !0,
          sync: !0
      },
      sessionCounter201803: {
          def: 0,
          allowed: i,
          save: !0
      },
      firstUserSession: {
          def: 0,
          allowed: i,
          save: !0
      },
      seenRadarInfo: {
          def: !1,
          save: !0,
          allowed: n
      },
      wasDragged: {
          def: !1,
          allowed: n,
          save: !0,
          sync: !0
      },
      detailLocation: {
          def: null,
          allowed: a
      },
      detailDisplay: {
          def: "table",
          allowed: ["table", "meteogram", "airgram", "waves", "wind"]
      },
      detailProduct: {
          def: "ecmwf",
          allowed: ["ecmwf", "nems", "gfs", "iconEu", "ecmwfWaves", "gfsWaves", "namConus", "namAlaska", "namHawaii", "arome"]
      },
      detailAvailProducts: {
          def: ["ecmwf"],
          allowed: t.isArray,
          compare: o
      },
      webcamsDaylight: {
          def: !1,
          allowed: n
      },
      capColorizeType: {
          def: "severity",
          allowed: ["severity", "type"]
      },
      capDisplay: {
          def: "all",
          allowed: ["all", "today", "tomm", "later"]
      },
      radarRange: {
          def: "-1",
          allowed: ["-12", "-6", "-1"]
      },
      radarTimestamp: {
          def: Date.now(),
          allowed: i
      },
      radarSpeed: {
          def: "medium",
          allowed: ["slow", "medium", "fast"]
      },
      radarCalendar: {
          def: {},
          allowed: s
      },
      radarAnimation: {
          def: !1,
          allowed: n,
          save: !0
      },
      blitzOn: {
          def: !0,
          allowed: n
      },
      blitzSoundOn: {
          def: !0,
          allowed: n,
          save: !0
      },
      hpShown: {
          def: !1,
          allowed: n
      },
      pois: {
          def: "favs",
          allowed: Object.keys(e.pois),
          save: !0,
          sync: !1
      },
      favPois: {
          def: ["favs", "wind", "temp", "cities", "metars", "cams", "pgspots"],
          allowed: function(e) {
              return t.isArray(e) && e.length < 8
          },
          save: !0,
          sync: !0
      },
      visibility: {
          def: !0,
          allowed: n
      },
      displayLocation: {
          def: !0,
          allowed: n,
          save: !0
      },
      vibrate: {
          def: !0,
          allowed: n,
          save: !0
      },
      donations: {
          def: [],
          allowed: t.isArray,
          compare: o,
          save: !0,
          sync: !0
      },
      zuluMode: {
          def: !1,
          allowed: n,
          save: !0
      },
      plugins: {
          def: [],
          allowed: t.isArray,
          compare: o,
          save: !0,
          sync: !0
      }
  }
}),
/*! */
W.define("colors", ["Color"], function(e) {
  return {
      temp: e.instance({
          ident: "temp",
          steps: 2048,
          prepare: !0,
          default: [[203, [115, 70, 105, 255]], [218, [202, 172, 195, 255]], [233, [162, 70, 145, 255]], [248, [143, 89, 169, 255]], [258, [157, 219, 217, 255]], [265, [106, 191, 181, 255]], [269, [100, 166, 189, 255]], [273.15, [93, 133, 198, 255]], [274, [68, 125, 99, 255]], [283, [128, 147, 24, 255]], [294, [243, 183, 4, 255]], [303, [232, 83, 25, 255]], [320, [71, 14, 0, 255]]]
      }),
      wind: e.instance({
          ident: "wind",
          steps: 2048,
          prepare: !0,
          default: [[0, [98, 113, 183, 255]], [1, [57, 97, 159, 255]], [3, [74, 148, 169, 255]], [5, [77, 141, 123, 255]], [7, [83, 165, 83, 255]], [9, [53, 159, 53, 255]], [11, [167, 157, 81, 255]], [13, [159, 127, 58, 255]], [15, [161, 108, 92, 255]], [17, [129, 58, 78, 255]], [19, [175, 80, 136, 255]], [21, [117, 74, 147, 255]], [24, [109, 97, 163, 255]], [27, [68, 105, 141, 255]], [29, [92, 144, 152, 255]], [36, [125, 68, 165, 255]], [46, [231, 215, 215, 256]], [51, [219, 212, 135, 256]], [77, [205, 202, 112, 256]], [104, [128, 128, 128, 255]]]
      }),
      windDetail: e.instance({
          ident: "windDetail",
          steps: 256,
          default: [[0, [243, 243, 243, 255]], [3, [243, 243, 243, 255]], [4, [0, 200, 254, 255]], [6, [0, 230, 0, 255]], [10, [254, 174, 0, 255]], [19, [254, 0, 150, 255]], [100, [151, 50, 222, 255]]]
      }),
      rh: e.instance({
          ident: "rh",
          steps: 1024,
          default: [[0, [173, 85, 56, 255]], [30, [173, 110, 56, 255]], [40, [173, 146, 56, 255]], [50, [105, 173, 56, 255]], [60, [56, 173, 121, 255]], [70, [56, 174, 173, 255]], [75, [56, 160, 173, 255]], [80, [56, 157, 173, 255]], [83, [56, 148, 173, 255]], [87, [56, 135, 173, 255]], [90, [56, 132, 173, 255]], [93, [56, 123, 173, 255]], [97, [56, 98, 157, 255]], [100, [56, 70, 114, 255]]]
      }),
      pressure: e.instance({
          ident: "pressure",
          steps: 1024,
          default: [[99e3, [142, 179, 184, 255]], [99500, [104, 180, 179, 255]], [1e5, [69, 167, 166, 255]], [100300, [57, 131, 147, 255]], [100600, [57, 118, 147, 255]], [100900, [57, 91, 147, 255]], [101500, [58, 117, 53, 255]], [101900, [159, 161, 65, 255]], [102200, [173, 136, 57, 255]], [102500, [170, 84, 67, 255]], [103e3, [94, 60, 81, 255]]]
      }),
      altitude: e.instance({
          ident: "altitude",
          steps: 1024,
          default: [[0, [105, 83, 83, 255]], [500, [162, 82, 140, 255]], [750, [99, 174, 174, 255]], [1000.15, [73, 106, 160, 255]], [1500, [75, 131, 70, 255]], [2e3, [191, 193, 93, 255]], [3e3, [184, 149, 73, 255]], [5e3, [182, 99, 83, 255]], [1e4, [171, 81, 102, 255]], [15e3, [108, 77, 97, 255]]]
      }),
      deg0: e.instance({
          ident: "deg0",
          steps: 1024,
          default: [[0, [188, 197, 195, 255]], [500, [155, 195, 189, 255]], [750, [93, 173, 156, 255]], [1000.15, [80, 141, 129, 255]], [1500, [55, 122, 109, 255]], [2e3, [39, 93, 82, 255]], [3e3, [33, 68, 73, 255]], [5e3, [32, 55, 71, 255]], [1e4, [28, 33, 64, 255]], [15e3, [6, 6, 6, 255]]]
      }),
      levels: e.instance({
          ident: "levels",
          steps: 2048,
          default: [[0, [111, 111, 111, 255]], [1e3, [111, 111, 111, 255]], [4e3, [80, 121, 154, 255]], [8e3, [78, 179, 102, 255]], [1e4, [189, 189, 68, 255]], [12e3, [177, 80, 80, 255]], [15e3, [178, 80, 178, 255]], [2e4, [184, 184, 184, 255]]]
      }),
      rain: e.instance({
          ident: "rain",
          steps: 1024,
          default: [[0, [111, 111, 111, 255]], [.6, [60, 116, 160, 255]], [6, [59, 161, 161, 255]], [8, [59, 161, 61, 255]], [10, [130, 161, 59, 255]], [15, [161, 161, 59, 255]], [20, [161, 59, 59, 255]], [31, [161, 59, 161, 255]], [50, [168, 168, 168, 255]]]
      }),
      ptype: e.instance({
          ident: "ptype",
          steps: 128,
          default: [[0, [111, 111, 111, 255]], [1, [0, 208, 239, 255]], [2, [0, 0, 255, 255]], [3, [197, 27, 195, 255]], [4, [129, 63, 63, 255]], [5, [227, 227, 227, 255]], [6, [129, 195, 129, 255]], [7, [202, 211, 57, 255]], [8, [183, 119, 8, 255]], [9, [227, 73, 19, 255]], [10, [195, 63, 63, 255]]]
      }),
      rainClouds: e.instance({
          ident: "rainClouds",
          steps: 128,
          default: [[0, [67, 87, 166, 255]], [.8, [70, 102, 163, 255]], [2, [62, 171, 171, 255]], [6, [62, 171, 171, 255]], [8, [62, 142, 62, 255]], [10, [129, 156, 62, 255]], [15, [171, 171, 62, 255]], [20, [169, 62, 62, 255]], [31, [171, 62, 171, 255]], [50, [177, 177, 177, 255]]]
      }),
      clouds: e.instance({
          ident: "clouds",
          steps: 800,
          default: [[0, [146, 130, 70, 255]], [10, [132, 119, 70, 255]], [30, [116, 116, 116, 255]], [80, [173, 183, 182, 255]], [95, [190, 193, 193, 255]], [100, [213, 213, 205, 255]]]
      }),
      lclouds: e.instance({
          ident: "lclouds",
          steps: 800,
          default: [[0, [156, 142, 87, 255]], [10, [143, 131, 87, 255]], [30, [129, 129, 129, 255]], [60, [137, 159, 182, 255]], [100, [187, 187, 187, 255]]]
      }),
      hclouds: e.instance({
          ident: "hclouds",
          steps: 800,
          default: [[0, [156, 142, 87, 255]], [10, [143, 131, 87, 255]], [30, [125, 157, 157, 255]], [50, [141, 169, 169, 255]], [100, [187, 187, 187, 255]]]
      }),
      mclouds: e.instance({
          ident: "mclouds",
          steps: 800,
          default: [[0, [156, 142, 87, 255]], [10, [143, 131, 87, 255]], [30, [157, 192, 157, 255]], [50, [145, 171, 145, 255]], [100, [187, 187, 187, 255]]]
      }),
      cape: e.instance({
          ident: "cape",
          steps: 1024,
          default: [[0, [110, 110, 110, 255]], [350, [110, 110, 110, 255]], [400, [93, 95, 127, 255]], [500, [37, 98, 145, 255]], [800, [37, 165, 37, 255]], [1500, [163, 161, 55, 255]], [2e3, [155, 112, 63, 255]], [2500, [162, 55, 55, 255]], [5001, [151, 68, 151, 255]]]
      }),
      lightDensity: e.instance({
          ident: "lightDensity",
          steps: 2048,
          default: [[0, [136, 136, 136, 255]], [.015, [136, 136, 136, 255]], [.025, [136, 200, 0, 255]], [.1, [218, 218, 0, 255]], [1, [241, 95, 0, 255]], [2, [248, 78, 120, 255]], [4, [135, 0, 0, 255]], [15, [221, 101, 255, 255]]]
      }),
      cbase: e.instance({
          ident: "cbase",
          steps: 512,
          default: [[0, [166, 93, 165, 255]], [129, [162, 97, 160, 255]], [149, [167, 91, 91, 255]], [279, [167, 91, 91, 255]], [299, [98, 122, 160, 255]], [879, [98, 122, 160, 255]], [914, [90, 169, 90, 255]], [1499, [91, 167, 99, 255]], [7999, [119, 141, 120, 255]]]
      }),
      snow: e.instance({
          ident: "snow",
          steps: 2048,
          default: [[0, [97, 97, 97, 255]], [2, [69, 82, 152, 255]], [10, [65, 165, 167, 255]], [20, [65, 141, 65, 255]], [50, [168, 168, 65, 255]], [80, [170, 126, 63, 255]], [120, [167, 65, 65, 255]], [500, [168, 65, 168, 255]]]
      }),
      rainAccu: e.instance({
          ident: "rainAccu",
          steps: 4096,
          default: [[0, [89, 89, 89, 255]], [1, [90, 88, 101, 255]], [5, [97, 88, 132, 255]], [10, [52, 117, 142, 255]], [30, [11, 140, 129, 255]], [40, [92, 153, 100, 255]], [80, [159, 157, 84, 255]], [120, [211, 154, 120, 255]], [500, [250, 157, 190, 255]], [8e3, [220, 220, 220, 255]]]
      }),
      waves: e.instance({
          ident: "waves",
          steps: 1024,
          default: [[0, [159, 185, 191, 255]], [.5, [48, 157, 185, 255]], [1, [48, 98, 141, 255]], [1.5, [56, 104, 191, 255]], [2, [57, 60, 142, 255]], [2.5, [187, 90, 191, 255]], [3, [154, 48, 151, 255]], [4, [133, 48, 48, 255]], [5, [191, 51, 95, 255]], [7, [191, 103, 87, 255]], [10, [191, 191, 191, 255]], [12, [154, 127, 155, 255]]]
      }),
      currents: e.instance({
          ident: "currents",
          steps: 256,
          default: [[0, [64, 77, 143, 255]], [.02, [50, 86, 142, 255]], [.06, [50, 123, 142, 255]], [.1, [64, 120, 103, 255]], [.15, [50, 133, 50, 255]], [.2, [50, 141, 50, 255]], [.3, [142, 132, 50, 255]], [.4, [142, 113, 50, 255]], [.5, [130, 77, 61, 255]], [.6, [115, 50, 68, 255]], [.7, [142, 50, 104, 255]], [.8, [105, 68, 131, 255]], [.85, [81, 70, 131, 255]], [.9, [65, 98, 131, 255]], [1, [73, 122, 131, 255]], [1.5, [143, 143, 143, 255]], [4, [143, 143, 143, 255]]]
      }),
      visibility: e.instance({
          ident: "visibility",
          steps: 1024,
          default: [[0, [163, 89, 163, 255]], [1600, [161, 89, 163, 255]], [2200, [167, 86, 86, 255]], [5e3, [167, 86, 86, 255]], [6e3, [89, 97, 163, 255]], [8e3, [89, 101, 163, 255]], [9e3, [60, 188, 73, 255]], [15e3, [83, 167, 75, 255]], [20004, [121, 121, 121, 255]]]
      }),
      ozone: e.instance({
          ident: "ozone",
          steps: 512,
          default: [[.0048, [106, 0, 39, 255]], [.0049, [121, 8, 87, 255]], [.005, [123, 45, 122, 255]], [.0051, [112, 77, 146, 255]], [.0053, [89, 105, 159, 255]], [.006, [49, 149, 161, 255]], [.007, [107, 177, 150, 255]], [.008, [174, 191, 149, 255]]]
      }),
      so2: e.instance({
          ident: "so2",
          steps: 1e4,
          default: [[0, [171, 171, 171, 255]], [.05, [170, 174, 143, 255]], [.1, [164, 163, 120, 255]], [.5, [158, 139, 74, 255]], [2, [151, 112, 24, 255]], [10, [140, 81, 0, 255]], [20, [132, 64, 0, 255]], [50, [121, 45, 0, 255]], [80, [102, 11, 0, 255]]]
      }),
      cosc: e.instance({
          ident: "cosc",
          steps: 1e4,
          default: [[0, [124, 124, 124, 255]], [70, [124, 124, 108, 255]], [110, [164, 157, 72, 255]], [200, [136, 113, 47, 255]], [450, [39, 31, 31, 255]], [2200, [255, 22, 22, 255]]]
      }),
      dust: e.instance({
          ident: "dust",
          steps: 1e4,
          default: [[0, [171, 171, 171, 255]], [10, [148, 137, 118, 255]], [80, [124, 104, 59, 255]], [800, [100, 73, 0, 255]], [1200, [74, 44, 0, 255]]]
      }),
      radar: e.instance({
          ident: "radar",
          steps: 255,
          opaque: !1,
          save: !1,
          sync: !1,
          default: [[0, [40, 16, 158, 0]], [3, [40, 16, 158, 20]], [8, [40, 16, 158, 100]], [14, [0, 101, 154, 180]], [20, [0, 144, 147, 220]], [26, [0, 179, 125, 240]], [32, [117, 208, 89, 255]], [36, [220, 220, 30, 255]], [40, [244, 202, 8, 255]], [44, [245, 168, 24, 255]], [48, [236, 130, 63, 255]], [52, [205, 75, 75, 255]], [56, [182, 45, 100, 255]], [60, [156, 16, 109, 255]], [64, [125, 0, 108, 255]], [68, [92, 0, 100, 255]], [100, [0, 0, 0, 255]], [101, [0, 0, 0, 0]], [255, [0, 0, 0, 0]]]
      }),
      blitz: e.instance({
          ident: "blitz",
          steps: 288,
          opaque: !1,
          save: !1,
          sync: !1,
          default: [[0, [12, 0, 0, 240]], [.05, [48, 0, 0, 240]], [.1, [100, 20, 0, 240]], [.5, [130, 70, 0, 220]], [1, [140, 130, 20, 200]]]
      }),
      fog: e.instance({
          ident: "fog",
          steps: 512,
          default: [[0, [110, 110, 110, 255]], [1, [200, 200, 200, 255]], [2, [200, 200, 255, 255]]]
      }),
      justGray: e.instance({
          ident: "justGray",
          steps: 4,
          default: [[-2e4, [111, 111, 111, 255]], [2e4, [111, 111, 111, 255]]]
      })
  }
}),
/*! */
W.define("radar", ["StaticProduct", "Evented"], function(e, t) {
  return e.instance(t, {
      ident: "radar",
      animation: !1,
      modelName: "",
      interval: 3,
      directory: "radar2/composite",
      server: "https://rdr.windy.com",
      blitzFrameInterval: 3e5,
      blitzStableDeltaTime: 12e3,
      blitzRecentsDuration: 6e4,
      blitzFlashMaxDelay: 12e3,
      blitzWriteRecentsToFrameMaxDelay: 1e4,
      blitzCompletedDeltaTime: 24e3,
      dataQuality: "radar",
      labelsTemp: !1,
      overlays: ["radar"],
      levels: ["surface"],
      open: function() {
          return this.loadMinifest(),
          Promise.resolve()
      }
  })
}),
/*! */
W.define("geolocation", ["$", "utils", "http", "store", "broadcast", "router"], function(e, a, t, r, o, n) {
  var l = function(e) {
      return void 0 === e && (e = {
          enableHighAccuracy: !1,
          timeout: 7e3
      }),
      navigator.geolocation ? new Promise(function(n) {
          navigator.geolocation.getCurrentPosition(function(e) {
              var t = {
                  lat: e.coords.latitude,
                  lon: e.coords.longitude,
                  source: "gps",
                  ts: Date.now()
              };
              r.set("gpsLocation", t),
              o.emit("newLocation", t),
              n(t)
          }, function(e) {
              n(d())
          }, e)
      }
      ) : Promise.resolve(d())
  }
    , c = function(e, t) {
      return parseFloat(e).toFixed(2) + ", " + parseFloat(t).toFixed(2)
  }
    , i = function(e, t, n, i, s) {
      n && (n = n.toLowerCase(),
      r.set("country", n));
      var a = {
          ts: Date.now(),
          source: s,
          lat: parseFloat(e),
          lon: parseFloat(t),
          name: i || c(e, t)
      };
      r.set("ipLocation", a),
      o.emit("newLocation", a)
  }
    , d = function() {
      var e = r.get("ipLocation")
        , t = r.get("gpsLocation");
      return e && t ? e.ts > t.ts ? e : t : t || (e || {
          lat: 0,
          lon: -1 * (new Date).getTimezoneOffset() / 4,
          cc: "us",
          source: "fallback",
          zoom: 3,
          name: ""
      })
  };
  try {
      var s, u = e('meta[name="geoip"]');
      if (u && u.content && (s = u.content.split(","))) {
          var h = s[1]
            , f = s[2]
            , m = s[3]
            , p = s[4];
          i(h, f, m, p, "meta")
      } else
          t.get("/node/geoip").then(function(e) {
              var t = e.data;
              i(t.ll[0], t.ll[1], t.country, t.city, "api")
          }).catch(window.wError.bind(null, "geolocation", "Unable to load||parse /node/geoip"))
  } catch (e) {
      window.wError("geolocation", "Module initialization failed", e)
  }
  return {
      getFallbackName: c,
      getGPSlocation: l,
      getMyLatestPos: d,
      getHomeLocation: function(e) {
          var t = r.get("startUp")
            , n = Date.now();
          if ("location" === t)
              e(r.get("homeLocation"));
          else if ("ip" === t) {
              var i = d();
              "fallback" === i.source || n - i.ts > 12 * a.tsHour ? o.once("newLocation", e) : e(i)
          } else {
              var s = r.get("gpsLocation");
              s && "gps" === s.source && n - s.ts < a.tsHour ? e(s) : l().then(e)
          }
      }
  }
}),
/*! */
W.define("params", ["store", "models", "overlays", "utils", "broadcast", "products", "router", "renderCtrl"], function(s, i, n, a, r, o, e, t) {
  var l = a.debounce(d, 100);
  function c() {
      ["acTime", "level", "isolines", "path", "overlay", "product"].forEach(function(e) {
          s.on(e, l.bind(null, e))
      })
  }
  function d(e) {
      var t = {
          acTime: s.get("acTime"),
          level: s.get("level"),
          isolines: s.get("isolines"),
          path: s.get("path"),
          overlay: s.get("overlay"),
          product: s.get("product")
      };
      r.emit("paramsChanged", t, e)
  }
  var u = o.ecmwf.calendar;
  s.setDefault("calendar", u),
  s.setDefault("path", u.ts2path(Date.now())),
  s.defineProperty("timestamp", "syncSet", function(e) {
      e = parseInt(e);
      var t = s.get("calendar");
      return t && (e = t.boundTs(e),
      s.set("path", t.ts2path(e))),
      e
  }),
  s.defineProperty("product", "asyncSet", function(i) {
      return new Promise(function(t, e) {
          var n = o[i];
          n.open().then(function(e) {
              a.replaceClass(/product-\S+/, "product-" + i),
              e && (s.set("calendar", e),
              s.set("timestamp", a.bound(s.get("timestamp"), e.start, e.end), {
                  forceChange: !0
              })),
              n.levels && (s.set("availLevels", n.levels),
              a.contains(n.levels, s.get("level")) || s.set("level", "surface")),
              n.acTimes && (s.set("availAcTimes", n.acTimes),
              a.contains(n.acTimes, s.get("acTime")) || s.set("acTime", n.acTimes[0])),
              /^gfs/.test(i) ? s.set("prefferedProduct", "gfs") : /^ecmwf/.test(i) && s.set("prefferedProduct", "ecmwf"),
              t(i)
          }).catch(e)
      }
      )
  });
  var h, f = function(e) {
      var t = n[e];
      a.replaceClass(/overlay-\S+/, "overlay-" + e),
      a.toggleClass(document.body, t && t.hasMoreLevels, "has-more-levels"),
      s.set("availProducts", i.overlay2product[e])
  };
  s.defineProperty("overlay", "asyncSet", function(t) {
      var n = i.getProduct(t, s.get("product"));
      return n === s.get("product") ? (f(t),
      Promise.resolve(t)) : new Promise(function(e) {
          s.set("product", n).then(function() {
              f(t),
              e(t)
          })
      }
      )
  }),
  h = {
      forceChange: !0
  },
  s.set("product", s.get("product"), h).then(function() {
      s.set("overlay", s.get("overlay"), h).then(function() {
          d(),
          c()
      })
  }).catch(function(e) {
      window.wError("params", "failed to launch params change", e),
      s.set("product", "ecmwf", h),
      s.set("overlay", "wind", h),
      setTimeout(function() {
          d(),
          c()
      }, 500)
  })
}),
/*! */
W.define("reverseName", ["http", "store", "map", "geolocation"], function(o, i, l, e) {
  var c = e.getFallbackName;
  return {
      get: function(e, t) {
          var s = e.lat
            , a = e.lon
            , r = i.get("usedLang")
            , n = t || l.getZoom();
          return new Promise(function(i) {
              o.get("/reverse/v3/" + s + "/" + a + "/" + n + "?lang=" + r).then(function(e) {
                  var t = e.data
                    , n = t.suburb || t.city || t.district || t.county || t.state && t.state + ", " + t.country || t.country;
                  i({
                      lat: s,
                      lon: a,
                      lang: r,
                      region: t.county || t.district || t.state || "",
                      country: t.country || "",
                      name: n || c(s, a),
                      nameValid: !!n
                  })
              }).catch(function(e) {
                  i({
                      lat: s,
                      lon: a,
                      lang: r,
                      name: c(s, a)
                  })
              })
          }
          )
      }
  }
}),
/*! */
W.define("router", ["store", "utils", "broadcast", "rootScope", "storage", "plugins", "seoParser"], function(a, r, e, o, n, t, i) {
  var l, c, s, d, u = !1;
  function h() {
      var e = r.tsHour
        , t = n.get("cordovaLastTimestamp") || 0;
      return Date.now() - +t < e
  }
  s = i.purl;
  var f = (d = decodeURIComponent(window.location.search.substring(1)) || "") ? d.replace(/&.*$/, "") : "";
  f && 10 < f.length && function(e) {
      for (var t, n = e.split(","), i = 0; i < n.length; i++) {
          var s;
          t = n[i],
          /^-?\d+\.\d+$/.test(t) && /^-?\d+\.\d+$/.test(n[i + 1]) && /^\d+$/.test(n[i + 2]) && (l = {
              lat: parseFloat(t),
              lon: parseFloat(n[i + 1]),
              zoom: parseInt(n[i + 2])
          },
          i += 2),
          r.contains(o.products, t) && a.set("product", t),
          r.contains(o.levels, t) && a.set("level", t),
          r.contains(o.overlays, t) && a.set("overlay", t),
          r.contains(o.acTimes, t) && a.set("acTime", t),
          (s = /^(\d\d\d\d)-(\d\d)-(\d\d)-(\d\d)$/.exec(t)) && a.set("timestamp", Date.UTC(+s[1], +s[2] - 1, +s[3], +s[4], 0, 0, 0)),
          (s = /^(a:?[a-zA-Z0-9]{5})/.exec(t)) && (o.customAnimation = s[1]),
          (s = /^m:([a-zA-Z0-9]{5,})/.exec(t)) && (c = r.str2latLon(s[1])),
          (s = /^i:([a-z0-9]{3,})/.exec(t)) && a.set("isolines", s[1]),
          (s = /^p:([a-z]+)/.exec(t)) && a.set("particlesAnim", s[1])
      }
  }(f);
  var m, p, g = (p = /^\/(-?\d+\.\d+)\/(-?\d+\.\d+)(?:\/(meteogram|airgram|waves|wind))?(?:\/(\w+)-([^/]+))?/.exec(m = s)) ? {
      plugin: "detail",
      params: {
          lat: +p[1],
          lon: +p[2],
          source: "url",
          display: p[3]
      }
  } : (p = /^\/([^/]+)\/(-?\d+\.\d+)\/(-?\d+\.\d+)$/.exec(m)) && p[1]in t ? {
      plugin: p[1],
      params: {
          lat: +p[2],
          lon: +p[3],
          source: "url"
      }
  } : (p = /^\/([^/]+)\/([^/]+)$/.exec(m)) && p[1]in t ? {
      plugin: p[1],
      params: p[2]
  } : (p = /^\/([^/]+)$/.exec(m)) && p[1]in t ? {
      plugin: p[1]
  } : (p = /^\/(\w\w\w\w)$/.exec(m)) ? {
      plugin: "airport",
      params: {
          icao: p[1].toUpperCase(),
          source: "url"
      }
  } : void (m && 3 < m.length && (u = !0));
  return s = g ? (e.once("paramsChanged", e.emit.bind(e, "rqstOpen", g.plugin, g.params)),
  o.startupDetail = g.params || g.plugin,
  i.startupUrl) : "",
  g && g.plugin || !c || !l || (c.noEmit = !0,
  e.once("redrawFinished", e.emit.bind(e, "rqstOpen", "picker", c))),
  {
      url: s,
      newerThan: h,
      url404: u,
      sharedCoords: l
  }
}),
/*! */
W.define("seoParser", ["utils", "store"], function(e, t) {
  var n, i, s, a = decodeURIComponent(window.location.pathname), r = null, o = a;
  return (n = /^\/(zh-TW|[a-z]{2})(\/.*)?$/.exec(a)) && e.isValidLang(n[1]) && (r = n[1],
  a = n[2]),
  (i = /^\/-(?:[^0-9/][^/]+)(?:-(\w+))(?:[^/]*)$/.exec(a)) ? (s = i[1],
  a = "/",
  t.set("overlay", s)) : (i = /^\/-(?:[^0-9/][^/]+)?(\/.+)$/.exec(a)) && (a = i[1]),
  {
      lang: r,
      purl: a,
      startupUrl: o,
      overlay: s
  }
}),
/*! */
W.define("cloudSync", ["dataSpecifications", "storage", "store", "http", "utils", "broadcast", "rootScope", "colors", "metrics", "user"], function(o, l, c, n, e, d, i, t, s, a) {
  var r = e.debounce(function() {
      var e = m();
      if (e && 0 < Object.keys(e).length) {
          var t = Date.now();
          l.put("storedSettings", t),
          n.post("/users/settings", {
              data: {
                  version: 3,
                  user: i.user.userslug,
                  data: e,
                  storeTs: t
              }
          })
      }
  }, 3e3);
  d.on("userLoggedIn", function() {
      var i = l.get("storedSettings") || 0
        , s = l.get("lastSyncableUpdatedItem") || 0;
      n.get("/users/settings?storeTs=" + i, {
          cache: !1
      }).then(function(e) {
          var t = e.status
            , n = e.data;
          i < s && r(),
          304 !== t && n && n.data && 1 < n.version && (!function(e) {
              var t = !1;
              for (var n in o)
                  if (f(n) && u(n)in e) {
                      var i = h(n)
                        , s = e[i]
                        , a = l.get(i);
                      if (!a || a < s) {
                          var r = e[u(n)];
                          null === r ? c.remove(n, {
                              doNotCheckValidity: !0,
                              doNotSaveToCloud: !0
                          }) : c.set(n, r, {
                              update: s,
                              doNotSaveToCloud: !0
                          }),
                          /color_/.test(n) && (t = !0)
                      }
                  }
              t && d.emit("redrawLayers")
          }(n.data),
          n.storeTs > i && l.put("storedSettings", n.storeTs))
      }).catch(window.wError.bind(null, "settings", "Cant load/merge settings from cloud"))
  }),
  c.on("_cloudSync", r);
  var u = function(e) {
      return "settings_" + e
  }
    , h = function(e) {
      return u(e) + "_ts"
  }
    , f = function(e) {
      return e in o && "object" == typeof o[e] && o[e] && o[e].sync
  }
    , m = function() {
      var e = {};
      for (var t in o)
          f(t) && l.hasKey(u(t)) && (e[u(t)] = l.get(u(t)),
          e[h(t)] = l.get(h(t)));
      return e
  }
}),
/*! */
W.define("settingsCtrl", ["broadcast", "rootScope", "storage", "utils", "plugins"], function(e, t, n, i, s) {
  var a = n.get("settingsLastSaved") || 0;
  n.isAvbl && ("index" !== t.target || 1 < t.sessionCounter) && Date.now() - a > 24 * i.tsHour && (e.once("redrawFinished", function() {
      var e = Date.now();
      n.put("settingsLastSaved", e),
      t.renderedTime = e,
      s["store-settings"].load().then(function() {
          return W.require("store-settings")
      })
  }),
  e.once("dependenciesResolved", function() {
      return t.loadedTime = Date.now()
  }))
}),
/*! */
W.define("connection", ["broadcast", "Window"], function(e, t) {
  var n = !0
    , i = !1
    , s = null;
  function a(e) {
      e ? (n = !0,
      s && s.close(),
      setTimeout(function() {
          s = t.instance({
              ident: "message",
              className: "bg-ok",
              html: '<span data-t="MSG_ONLINE_APP"></span>',
              timeout: 1e4,
              onopen: function() {
                  this.node.onclick = function() {
                      return window.location.reload()
                  }
              }
          }).open()
      }, 500)) : setTimeout(r.bind(null, a), 2e3)
  }
  function r(t) {
      var e = new XMLHttpRequest;
      e.open("HEAD", "https://node.windy.com/node/geoip?source=testConnection", !0),
      e.onreadystatechange = function() {
          4 === e.readyState && t(200 <= e.status && e.status < 400)
      }
      ;
      try {
          e.send(null)
      } catch (e) {
          t(!1)
      }
  }
  e.on("noConnection", function() {
      if (!n || i)
          return;
      i = !0,
      r(function(e) {
          i = !1,
          e || (n = !1,
          s = t.instance({
              ident: "message",
              className: "bg-error",
              html: '<span data-t="MSG_OFFLINE"></span>'
          }).open(),
          r(a))
      })
  })
}),
/*! */
W.define("Plugin", ["Class", "rootScope", "utils"], function(e, t, r) {
  return e.extend({
      ident: "",
      dependencies: [],
      _init: function() {
          this.isLoaded = !1,
          this.loading = !1,
          this.depsLoaded = !1,
          this.coreLoaded = !1,
          this.open = this.load
      },
      getAssetsLocation: function() {
          return this.location ? "http" === this.location.substr(0, 4) ? this.location : r.joinPath("https://www.windy.com/js", this.location) : t.assets + "/plugins/" + this.ident + ".js"
      },
      load: function() {
          var n, i, s = this, a = [];
          return this.isLoaded ? Promise.resolve(!0) : (this.loading || (this.loading = !0,
          this.promise = new Promise(function(e, t) {
              for (i = 0; i < s.dependencies.length; i++)
                  (n = W.plugins[s.dependencies[i]]) && !n.isLoaded && a.push(n.load());
              Promise.all(a).then(function() {
                  if (s.depsLoaded = !0,
                  s.coreLoaded)
                      return s.isLoaded = !0,
                      void e();
                  r.loadScript(s.getAssetsLocation()).then(function() {
                      s.coreLoaded = !0,
                      s.isLoaded = !0,
                      s.loading = !1,
                      "function" == typeof s.onloaded ? s.onloaded.call(s, e) : e()
                  }).catch(function() {
                      window.wError("plugin", "Failed to load plugin: " + s.ident),
                      s.loading = !1,
                      t(s)
                  })
              }).catch(function(e) {
                  window.wError("plugin", "Plugin error: " + s.ident, e),
                  t()
              })
          }
          )),
          this.promise)
      },
      open: function() {},
      close: function() {},
      toggle: function() {}
  })
}),
/*! */
W.define("TagPlugin", ["Plugin", "Window", "trans"], function(e, t, n) {
  return e.extend(t, {
      iAm: "plugin",
      exclusive: null,
      hasURL: !0,
      _init: function() {
          t._init.call(this),
          this.isLoaded = !1,
          this.loading = !1,
          this.isMounted = !1,
          this.cssInserted = !1,
          this.bodyClass = "on" + this.ident
      },
      _unmount: function() {
          this.node.style.display = "none"
      },
      open: function(e) {
          var t = this;
          return this.closingTimer && clearTimeout(this.closingTimer),
          this.isLoaded ? (this.isMounted || this._mount(),
          this._open(e),
          Promise.resolve()) : (this.loading || this.load(e).then(function() {
              t.isMounted || t._mount(),
              t._open(e)
          }),
          this.promise)
      },
      _mount: function() {
          var e = W.tags[this.ident];
          e ? (e.css && !this.cssInserted && (this.cssInserted = !0,
          document.head.insertAdjacentHTML("beforeend", "<style>" + e.css + "</style>")),
          this.createNode(e.html),
          n.translateDocument(this.node),
          this.attachRefs(),
          e.callback && "function" == typeof e.callback && e.callback.call(this),
          this.isMounted = !0) : window.wError("plugin", "Error, tag: " + this.ident + " was not registered")
      }
  })
}),
/*! */
W.define("TagAutoOpen", ["TagPlugin"], function(e) {
  return e.extend({
      hasURL: !1,
      load: function() {
          return e.load.call(this).then(this.open.bind(this)),
          this.promise
      }
  })
}),
/*! */
W.define("RiotPlugin", ["TagPlugin", "broadcast"], function(e, i) {
  return e.extend({
      dependencies: ["riot"],
      _init: function() {
          e._init.call(this),
          this.riotTag = null
      },
      onclose: function() {
          this.riotTag && "function" == typeof this.riotTag.onclose && this.riotTag.onclose(),
          this.hasURL && W.location.reset()
      },
      _mount: function() {
          this.createNode('<span data-is="' + this.ident + '"></span>'),
          this.isMounted = !0
      },
      _open: function(e) {
          var t = this
            , n = this.isOpen;
          if (!this.isOpen) {
              if (this.riotTag || (this.riotTag = riot.mount(this.ident)[0]),
              this.addHooks(),
              !this.riotTag)
                  return void window.wError("plugin", "Unable to _open riot tag: ", this.ident);
              document.body.classList.add("on" + this.ident),
              this.node.style.display = "block",
              setTimeout(function() {
                  t.node.classList.add("open"),
                  i.emit("pluginOpened", t.ident)
              }, 0),
              this.isOpen = !0
          }
          this.riotTag.onopen && this.riotTag.onopen(e, n),
          this.riotTag.onurl && (this.onurl = this.riotTag.onurl),
          this.hasURL && this.url(e)
      }
  })
}),
/*! */
W.define("plugins", ["rootScope", "Plugin", "TagPlugin", "TagAutoOpen", "RiotPlugin"], function(e, t, n, i, s) {
  return {
      riot: t.instance({
          ident: "riot",
          location: "riot.v0312.js"
      }),
      geodesic: t.instance({
          ident: "geodesic",
          location: "geodesic.js"
      }),
      d3: t.instance({
          ident: "d3",
          location: "d3.v0507.custom01.js"
      }),
      colorpicker: t.instance({
          ident: "colorpicker",
          location: "colorpicker.js"
      }),
      graticule: t.instance({
          ident: "graticule",
          location: "graticule.js"
      }),
      nouislider: i.instance({
          ident: "nouislider",
          location: "nouislider.v0805.js"
      }),
      "map-paint": i.instance({
          ident: "map-paint",
          location: "mapPaint.js"
      }),
      airgram: t.instance({
          ident: "airgram",
          dependencies: ["detail-render"]
      }),
      "favs-extended": t.instance({
          ident: "favs-extended"
      }),
      "gl-particles": t.instance({
          ident: "gl-particles"
      }),
      particles: t.instance({
          ident: "particles"
      }),
      "store-settings": t.instance({
          ident: "store-settings"
      }),
      "detail-render": t.instance({
          ident: "detail-render"
      }),
      "product-descriptions": t.instance({
          ident: "product-descriptions"
      }),
      patternator: t.instance({
          ident: "patternator"
      }),
      "cap-utils": t.instance({
          ident: "cap-utils"
      }),
      seo: t.instance({
          ident: "seo"
      }),
      nearest: t.instance({
          ident: "nearest"
      }),
      "plugin-data-loader": t.instance({
          ident: "plugin-data-loader"
      }),
      isolines: n.instance({
          ident: "isolines",
          hasURL: !1
      }),
      dev: n.instance({
          ident: "dev",
          exclusive: "neverClose",
          className: "window",
          dependencies: ["plugin-data-loader"],
          keyboard: !0
      }),
      patch: n.instance({
          ident: "patch",
          location: "https://www.windy.com/patch/latest/patch.js?refTime=" + (new Date).toISOString().replace(/^(.*):.*$/, "$1"),
          hasURL: !1
      }),
      radar: n.instance({
          ident: "radar",
          title: "RADAR",
          hasURL: !1,
          exclusive: "neverClose",
          className: "shy left-border right-border notap",
          noCloseOnBackButton: !0
      }),
      "cap-alerts": n.instance({
          ident: "cap-alerts",
          title: "WX_WARNINGS",
          exclusive: "neverClose",
          hasURL: !1,
          dependencies: ["cap-utils"],
          className: "shy left-border right-border bottom-border"
      }),
      "share-mobile": n.instance({
          ident: "share-mobile",
          hasURL: !1
      }),
      lookr: n.instance({
          ident: "lookr",
          hasURL: !1,
          className: "plugin-mobile-fullscreen"
      }),
      overlays: n.instance({
          title: "S_ADD_OVERLAYS",
          ident: "overlays",
          className: "plugin-rhpane plugin-mobile-rhpane",
          exclusive: "rhpane"
      }),
      "hp-weather": n.instance({
          ident: "hp-weather",
          hasURL: !1,
          replaceMountingPoint: !0,
          className: "weather-box clickable-size",
          attachPoint: '[data-plugin="weather"]'
      }),
      detail: n.instance({
          ident: "detail",
          keyboard: !0,
          dependencies: e.isMobile || e.isTablet ? ["detail-render", "nearest"] : ["rhpane", "detail-render", "nearest"],
          className: "detail plugin-mobile-bottom-red bottom-border",
          htmlID: "detail",
          replaceMountingPoint: !0,
          hasURL: !1,
          exclusive: "all",
          attachPoint: e.isMobile || e.isTablet ? '[data-plugin="detail-rhpane"]' : '[data-plugin="detail"]',
          onloaded: function(e) {
              this._mount(),
              e()
          }
      }),
      "detail-webcams": n.instance({
          ident: "detail-webcams",
          hasURL: !1
      }),
      station: n.instance({
          ident: "station",
          exclusive: "all",
          dependencies: ["nearest"],
          className: "detail plugin-mobile-bottom-red bottom-border bg-white",
          hasURL: !0
      }),
      rhpane: n.instance({
          ident: "rhpane",
          className: "right-border top-border flex-container",
          htmlID: "detail-rhpane-wrapper",
          hasURL: !1,
          displayBlock: !1,
          exclusive: "neverClose",
          replaceMountingPoint: !0,
          attachPoint: '[data-plugin="detail-rhpane"]',
          onloaded: function(e) {
              this._mount(),
              e()
          }
      }),
      user: n.instance({
          ident: "user",
          htmlID: "user",
          hasURL: !1,
          exclusive: "neverClose",
          dependencies: ["favs-extended"],
          attachPoint: '[data-plugin="user"]'
      }),
      "fav-alert-menu": n.instance({
          ident: "fav-alert-menu",
          className: "drop-down-window size-l",
          hasURL: !1,
          closeOnClick: !0,
          attachPoint: '[data-plugin="fav-alert-menu"]'
      }),
      contextmenu: n.instance({
          ident: "contextmenu",
          className: "drop-down-window",
          closeOnClick: !0,
          hasURL: !1
      }),
      pois: n.instance({
          ident: "pois",
          hasURL: !1
      }),
      menu: n.instance({
          ident: "menu",
          className: "plugin-rhpane plugin-mobile-rhpane",
          exclusive: "rhpane-mobile",
          title: "MENU"
      }),
      picker: n.instance({
          ident: "picker",
          hasURL: !1,
          className: "picker"
      }),
      waves: n.instance({
          ident: "waves",
          hasURL: !1
      }),
      wind: n.instance({
          ident: "wind",
          hasURL: !1
      }),
      "user-menu": n.instance({
          ident: "user-menu",
          className: "drop-down-window right menu-items",
          closeOnClick: !0,
          attachPoint: e.isMobile || e.isTablet ? '[data-plugin="user-menu-mobile"]' : "#user",
          hasURL: !1
      }),
      webcam: n.instance({
          ident: "webcam",
          hasURL: !1,
          className: "plugin-mobile-bottom-red bottom-border",
          keyboard: !1
      }),
      sounding: n.instance({
          ident: "sounding",
          className: e.isMobile ? "drop-down-window down" : "drop-down-window",
          dependencies: ["d3"],
          attachPoint: e.isMobile ? "#plugins" : "#map-container .leaflet-popup-pane",
          title: "SOUNDING",
          hasURL: !1
      }),
      map: n.instance({
          title: "SHOW_ON_MAP",
          ident: "map",
          hasURL: !0,
          className: "plugin-rhpane plugin-mobile-rhpane",
          exclusive: "rhpane"
      }),
      articles: n.instance({
          ident: "articles",
          className: "plugin-lhpane plugin-mobile-fullscreen",
          dependencies: ["annotation"],
          exclusive: "lhpane",
          hasURL: !0
      }),
      annotation: n.instance({
          ident: "annotation",
          hasURL: !0
      }),
      screenshot: n.instance({
          ident: "screenshot",
          dependencies: ["annotation"],
          hasURL: !0
      }),
      commons: t.instance({
          ident: "commons",
          dependencies: ["riot"]
      }),
      settings: t.instance({
          ident: "settings",
          openedBy: "lhpane",
          dependencies: ["riot"]
      }),
      favs: t.instance({
          ident: "favs",
          openedBy: "lhpane",
          dependencies: ["riot", "favs-extended"]
      }),
      colors: t.instance({
          ident: "colors",
          openedBy: "lhpane",
          dependencies: ["riot", "colorpicker"]
      }),
      alerts: t.instance({
          ident: "alerts",
          openedBy: "lhpane",
          dependencies: ["riot", "commons", "nouislider", "favs-extended"]
      }),
      tools: t.instance({
          ident: "tools",
          openedBy: "lhpane",
          dependencies: ["riot", "commons"]
      }),
      privacy: t.instance({
          ident: "privacy",
          openedBy: "lhpane",
          dependencies: ["riot"]
      }),
      hurricanes: t.instance({
          ident: "hurricanes",
          openedBy: "lhpane",
          dependencies: ["riot"]
      }),
      debug: t.instance({
          ident: "debug",
          openedBy: "lhpane",
          dependencies: ["riot"]
      }),
      plugins: t.instance({
          ident: "plugins",
          openedBy: "lhpane",
          dependencies: ["riot", "plugin-data-loader"]
      }),
      donate: s.instance({
          ident: "donate",
          className: "plugin-lhpane",
          exclusive: "all",
          keyboard: !0,
          title: "DONATE"
      }),
      info: s.instance({
          ident: "info",
          dependencies: e.isMobile || e.isTablet ? ["riot", "product-descriptions"] : ["riot", "rhpane", "product-descriptions"],
          className: "drop-down-window down",
          closeOnClick: !0,
          hasURL: !1,
          exclusive: "middle-mobile",
          attachPoint: e.isMobile || e.isTablet ? "#plugins" : "#info-icon"
      }),
      lhpane: s.instance({
          ident: "lhpane",
          className: "plugin-lhpane plugin-mobile-fullscreen",
          exclusive: "lhpane",
          dependencies: ["riot", "commons"],
          keyboard: !0,
          hasURL: !1
      }),
      "cap-alert": s.instance({
          ident: "cap-alert",
          dependencies: ["riot", "cap-utils", "commons", "detail-render"],
          className: "plugin-lhpane plugin-mobile-fullscreen",
          exclusive: "lhpane",
          hasURL: !1,
          title: "WX_WARNINGS"
      }),
      distance: s.instance({
          ident: "distance",
          title: "MENU_DISTANCE",
          exclusive: "lhpane",
          keyboard: !1,
          className: "plugin-mobile-bottom-red bottom-border",
          dependencies: ["riot", "geodesic"]
      }),
      annotate: s.instance({
          ident: "annotate",
          exclusive: "all",
          keyboard: !0,
          dependencies: ["map-paint", "riot"]
      }),
      airport: s.instance({
          ident: "airport",
          className: "plugin-lhpane plugin-mobile-fullscreen",
          exclusive: "lhpane",
          hasURL: !1,
          dependencies: ["riot", "commons", "detail-render"]
      }),
      tides: s.instance({
          ident: "tides",
          className: "plugin-rhpane plugin-mobile-fullscreen",
          exclusive: "rhpane",
          dependencies: ["riot", "pois"]
      }),
      share: s.instance({
          ident: "share",
          title: "SHARE",
          hasURL: !1,
          keyboard: !0
      }),
      widgets: s.instance({
          ident: "widgets",
          exclusive: "all",
          title: "EMBED",
          keyboard: !0,
          className: "plugin-rhpane plugin-mobile-fullscreen"
      }),
      multimodel: s.instance({
          ident: "multimodel",
          dependencies: ["riot", "detail-render"],
          className: "plugin-mobile-fullscreen"
      }),
      login: s.instance({
          ident: "login",
          className: "plugin-rhpane plugin-mobile-fullscreen",
          exclusive: "all",
          keyboard: !0
      }),
      register: s.instance({
          ident: "register",
          className: "plugin-rhpane plugin-mobile-fullscreen",
          exclusive: "all",
          keyboard: !0
      }),
      "article-publisher": s.instance({
          location: "https://unpkg.com/windy-plugin-article-publisher",
          ident: "article-publisher",
          dependencies: ["riot", "colorpicker"],
          className: "plugin-rhpane",
          hasURL: !1,
          keyboard: !0
      })
  }
}),
/*! */
W.define("pluginsCtrl", ["rootScope", "plugins", "broadcast", "utils"], function(s, a, e, r) {
  function o(n, i) {
      r.each(a, function(e, t) {
          e.exclusive && e.exclusive === i && e.isOpen && t !== n && e.close()
      })
  }
  function i(n, e) {
      var t = a[n] && a[n].openedBy;
      t && (e = {
          pane: n,
          origParams: e
      },
      n = t);
      var i = a[n];
      i && (i.exclusive && ("all" === i.exclusive ? r.each(a, function(e, t) {
          e.isOpen && t !== n && l(t)
      }) : "rhpane" !== i.exclusive && "lhpane" !== i.exclusive || (a.detail.close(),
      a.station.close(),
      s.isMobile ? (o(n, "rhpane"),
      o(n, "lhpane")) : o(n, i.exclusive))),
      i.open(e))
  }
  function l(e, t) {
      var n = a[e];
      n && "neverClose" !== n.exclusive && n.close(t)
  }
  e.on("rqstOpen", i),
  e.on("rqstClose", l),
  e.on("toggle", function(e, t) {
      var n = a[e];
      if (!n)
          return;
      n.isOpen ? l(e) : i(e, t)
  }),
  e.on("closeAll", function() {
      r.each(a, function(e, t) {
          e.isOpen && l(t)
      })
  })
}),
/*! */
W.define("Bar", ["$", "utils", "Drag", "GhostBox", "Resizable"], function(e, n, t, i, s) {
  return s.extend(t, i, {
      offset: 0,
      borderOffset: 0,
      jumpingGhost: !0,
      bcastLimit: 100,
      jumpingWidth: 140,
      _init: function() {
          this.left = 0,
          this.calendarHours = 0,
          this.timestamp = Date.now(),
          this.resizableEl = this.progressBar,
          this.el = this.timecode = e(".main-timecode", this.progressBar),
          this.text = e(".box", this.timecode),
          this.progressLine = e(".progress-line", this.progressBar),
          this.b = e(".progress-line i", this.progressBar),
          this.played = e(".progress-line .played", this.progressBar),
          this.ghost = e(".ghost-timecode", this.progressBar),
          this.ghostTxt = e(".box", this.ghost),
          t._init.call(this),
          s._init.call(this),
          i._init.call(this),
          this.progressLine.addEventListener("mouseup", this.click.bind(this)),
          this.ondragend = this.bcast.bind(this),
          this.throttledBcast = n.throttle.call(this, this.bcast, this.bcastLimit)
      },
      ondrag: function(e) {
          this.update(e + 20 - this.offset),
          this.throttledBcast()
      },
      update: function(e) {
          return this.left = n.bound(e, 0, this.maxWidth),
          this.timecode.style.left = this.left + this.offset + "px",
          this.text.textContent = this.createText(this.text),
          this.played && (this.played.style.width = this.left + "px"),
          this.left
      },
      createText: function() {},
      createGhostText: function() {},
      bcast: function() {
          this.timestamp = this.pos2ts(this.left),
          this.onbcast()
      },
      onbcast: function() {},
      pos2ts: function(e) {
          return this.calendar.start + e / this.pxRatio
      },
      addAnimation: function() {
          this.progressBar.classList.add("anim-allowed")
      },
      removeAnimation: function() {
          var e = this;
          window.setTimeout(function() {
              e.progressBar.classList.remove("anim-allowed")
          }, 300)
      },
      click: function(e) {
          if (!this.dragging) {
              this.addAnimation();
              var t = n.bound(e.pageX - this.offset - this.borderOffset, 0, this.maxWidth);
              this.timestamp = this.pos2ts(t),
              this.update(t),
              this.bcast(),
              this.removeAnimation()
          }
      },
      set: function(e) {
          this.addAnimation(),
          this.timestamp = e,
          this.update(this.ts2pos(e)),
          this.removeAnimation()
      },
      ts2pos: function(e) {
          return (e - this.calendar.start) * this.pxRatio
      },
      onresize: function() {
          if (this.calendar) {
              if (this.progressWidth = this.progressBar.offsetWidth - this.offset,
              this.pxRatio = this.progressWidth / (this.calendar.endOfCal - this.calendar.start),
              this.maxWidth = this.ts2pos(this.calendar.end),
              this.progressLine.style.width = n.bound(this.maxWidth, 0, this.progressWidth) + "px",
              this.borderOffset = this.elLeft,
              this.b) {
                  var e = this.ts2pos(Date.now());
                  this.b.style.left = e + "px"
              }
              this.set(this.timestamp)
          }
      },
      updateGhost: function(e) {
          var t = n.bound(e.clientX - this.offset - this.borderOffset, 0, this.maxWidth);
          this.ghost.style.left = t + this.offset + "px",
          this.jumpingGhost && (this.ghost.style["margin-top"] = this.left - t < 40 && t - this.left < this.jumpingWidth ? "-25px" : "0px"),
          this.ghostTxt.textContent = this.createGhostText(t)
      }
  })
}),
/*! */
W.define("BindedCheckbox", ["store", "Class"], function(t, e) {
  return e.extend({
      onValue: !0,
      offValue: !1,
      _init: function() {
          this.set(t.get(this.bindStore)),
          this.el.onclick = this.toggle.bind(this),
          t.on(this.bindStore, this.set, this)
      },
      unmount: function() {
          t.off(this.bindStore, this.set, this)
      },
      toggle: function() {
          var e = t.get(this.bindStore);
          t.set(this.bindStore, e === this.onValue ? this.offValue : this.onValue)
      },
      set: function(e) {
          this.el.classList[e === this.onValue ? "remove" : "add"]("off")
      }
  })
}),
/*! */
W.define("BindedSwitch", ["$", "store", "Switch"], function(i, n, e) {
  return e.extend({
      _init: function() {
          this.initValue = n.get(this.bindStore),
          n.on(this.bindStore, this.set, this),
          "function" == typeof this.render && n.on("usedLang", this.render, this),
          e._init.call(this)
      },
      unmount: function() {
          n.off(this.bindStore, this.set, this),
          "function" == typeof this.render && n.off("usedLang", this.render, this)
      },
      set: function(e) {
          var t = i(".selected", this.el)
            , n = this.getEl(e);
          t && t.classList.remove("selected"),
          n && n.classList.add("selected")
      },
      click: function(e, t) {
          "set" === e ? n.set(this.bindStore, t) : "function" == typeof this[e] && this[e](t)
      }
  })
}),
/*! */
W.define("Drag", ["Class"], function(e) {
  return e.extend({
      supportTouch: !0,
      preventDefault: !0,
      _init: function() {
          this.el.addEventListener("mousedown", this.startDrag.bind(this)),
          this.supportTouch && this.el.addEventListener("touchstart", this.startDrag.bind(this)),
          this.dragging = !1,
          this.bindedDrag = this._drag.bind(this),
          this.bindedEndDrag = this.endDrag.bind(this)
      },
      getXY: function(e) {
          return e.touches ? [e.touches[0].pageX, e.touches[0].pageY] : [e.pageX, e.pageY]
      },
      startDrag: function(e) {
          this.preventDefault && e.preventDefault(),
          this.startXY = this.getXY(e),
          this.offsetX = -this.el.offsetLeft,
          this.offsetY = -this.el.offsetTop,
          this.dragging = !0,
          this.ondragstart && this.ondragstart.call(this, this.startXY),
          window.addEventListener("mousemove", this.bindedDrag),
          window.addEventListener("mouseup", this.bindedEndDrag),
          this.supportTouch && (window.addEventListener("touchmove", this.bindedDrag),
          window.addEventListener("touchend", this.bindedEndDrag),
          window.addEventListener("touchcancel", this.bindedEndDrag))
      },
      _drag: function(e) {
          var t = this.getXY(e);
          this.ondrag(t[0] - this.startXY[0] - this.offsetX, t[1] - this.startXY[1] - this.offsetY, e)
      },
      endDrag: function(e) {
          window.removeEventListener("mousemove", this.bindedDrag),
          window.removeEventListener("touchmove", this.bindedDrag),
          window.removeEventListener("mouseup", this.bindedEndDrag),
          window.removeEventListener("touchend", this.bindedEndDrag),
          window.removeEventListener("touchcancel", this.bindedEndDrag),
          this.ondragend && this.ondragend(e),
          this.dragging = !1
      }
  })
}),
/*! */
W.define("DraggableDiv", ["Class", "utils"], function(e, f) {
  return e.extend({
      _init: function() {
          this.scrollEl.addEventListener("mousedown", this.startDrag.bind(this))
      },
      getX: function(e) {
          return e.touches ? e.touches[0].pageX : e.pageX
      },
      startDrag: function(e) {
          var s = this;
          e.preventDefault();
          var n = this.getX(e)
            , a = 0
            , r = Date.now()
            , i = 0
            , o = 0
            , l = this.scrollEl.scrollLeft
            , t = function() {
              var e = Date.now()
                , t = e - r
                , n = s.scrollEl.scrollLeft
                , i = 1e3 * (n - l) / (1 + t);
              r = e,
              l = n,
              a = f.bound(.8 * i + .2 * a, -500, 500)
          }
            , c = setInterval(t, 100);
          t(),
          window.cancelAnimationFrame(this.inertiaAnim);
          var d = function() {
              clearInterval(c),
              window.removeEventListener("mousemove", h),
              window.removeEventListener("mouseup", d),
              10 < Math.abs(a) && (i = .6 * a,
              o = s.scrollEl.scrollLeft + i,
              r = Date.now(),
              s.inertiaAnim = window.requestAnimationFrame(u)),
              e.preventDefault(),
              e.stopPropagation()
          }
            , u = function() {
              var e = Date.now() - r
                , t = -i * Math.exp(-e / 325);
              .5 < Math.abs(t) && e < 3e3 && (s.scrollEl.scrollLeft = o + t,
              s.inertiaAnim = window.requestAnimationFrame(u))
          }
            , h = function(e) {
              var t = s.getX(e);
              s.scrollEl.scrollLeft += n - t,
              n = t,
              e.preventDefault(),
              e.stopPropagation()
          };
          window.addEventListener("mousemove", h),
          window.addEventListener("mouseup", d)
      }
  })
}),
/*! */
W.define("ClickHandler", ["Class", "broadcast"], function(e, n) {
  return e.extend({
      _init: function() {
          this.el.addEventListener("click", this.onevent.bind(this))
      },
      onevent: function(e) {
          var t, n = e.target;
          for (this.stopPropagation && (e.preventDefault(),
          e.stopPropagation()); n && n !== this.el; ) {
              if (n && n.dataset && (t = n.dataset.do)) {
                  var i = t.split(",");
                  return void (this.defaultClickHandlers(e, i) || this.click.apply(this, i))
              }
              n = n.parentNode
          }
      },
      defaultClickHandlers: function(e, t) {
          switch (t[0]) {
          case "rqstOpen":
          case "rqstClose":
          case "toggle":
              return n.emit.apply(n, t),
              e.stopPropagation(),
              !0;
          case "url":
              return window.location.href = t[1],
              e.stopPropagation(),
              !0;
          case "share":
              return n.emit("rqstOpen", "share"),
              !0;
          case "login":
              return W.user.login(),
              !0
          }
          return !1
      }
  })
}),
/*! */
W.define("GhostBox", ["Class"], function(e) {
  return e.extend({
      _init: function() {
          this.progressLine.addEventListener("mouseenter", this.onGhostMouseEnter.bind(this)),
          this.progressLine.addEventListener("mouseleave", this.onGhostMouseLeave.bind(this)),
          this.progressLine.addEventListener("mousemove", this.onGhostMouseMove.bind(this))
      },
      onGhostMouseEnter: function() {
          this.dragging || (this.ghost.style.opacity = 1)
      },
      onGhostMouseLeave: function() {
          this.ghost.style.opacity = 0
      },
      onGhostMouseMove: function(e) {
          this.ghost.style.opacity = 0
      }
  })
}),
/*! */
W.define("OverlaysMenu", ["overlays", "store", "trans", "rootScope", "utils", "BindedSwitch", "format"], function(u, s, a, h, f, r, m) {
  return r.extend({
      bindStore: "overlay",
      _init: function() {
          r._init.call(this),
          s.on("favOverlays", this.render, this),
          s.on("expertMode", this.render, this)
      },
      render: function() {
          this._render(),
          this.resize(),
          this.set(s.get("overlay"))
      },
      resize: function() {},
      set: function(e) {
          r.set.call(this, e);
          for (var t = u[e], n = t && t.parentMenu || e, i = this.el.querySelectorAll("[data-parent]"), s = 0; s < i.length; s++) {
              var a = i[s];
              f.toggleClass(a, a.dataset.parent === n, "menu-unfold")
          }
      },
      _render: function() {
          var r = s.get("favOverlays")
            , o = s.get("expertMode")
            , e = s.get("usedLang")
            , l = {}
            , c = m.seoLang(e)
            , d = 1
            , t = 0
            , n = h.overlays.map(function(e) {
              var t = u[e]
                , n = f.contains(r, e);
              if (!(t && t.trans && t.icon && n))
                  return "";
              var i = t.parentMenu
                , s = i && f.contains(r, i);
              i ? i in l ? l[i]++ : l[i] = 1 : d++;
              var a = t.getName();
              return '<a data-do="set,' + t.ident + '" data-parent="' + (i || "isParent") + '"\n\t\t\t\t\t\t' + (h.isCrawler ? 'href="' + c + "-" + m.seoString(a) + "-" + t.ident + '"' : "") + "\n\t\t\t\t\t\t" + (!o && i && s ? 'class="sub-menu"' : "") + '>\n\t\t\t\t\t\t<div class="iconfont noselect notap">' + t.icon + '</div>\n\t\t\t\t\t\t<div class="menu-text noselect notap">' + a + "</div>\n\t\t\t\t\t</a>"
          }).join("");
          for (var i in n += '<a data-do="toggle,overlays" id="ovr-menu"\n\t\t\t\t\t' + (h.isCrawler ? 'href="' + c + "-" + m.seoString(a.S_ADD_OVERLAYS) + '/overlays"' : "") + '\n\t\t\t\t\tclass="sub-menu menu-unfold">\n\t\t\t\t\t\t<div class="iconfont noselect notap">&lt;</div>\n\t\t\t\t\t\t<div class="menu-text noselect notap">' + a.MORE_LAYERS + "</div>\n\t\t\t\t\t</a>",
          l)
              t = Math.max(t, l[i]);
          this.iconNum = o ? 1 + r.length : d + t,
          this.el.innerHTML = n
      }
  })
}),
/*! */
W.define("ProductSwitch", ["BindedSwitch", "products", "store", "rootScope", "utils"], function(e, o, t, l, c) {
  return e.extend({
      bindStore: "product",
      showResolution: !0,
      menu: ["arome", "nems", "iconEu", "namConus", "namHawaii", "namAlaska", "ecmwf", "ecmwfWaves", "gfs", "gfsWaves"],
      _init: function() {
          e._init.call(this),
          t.on("availProducts", this.redraw, this),
          t.on("visibleProducts", this.redraw, this),
          this.redraw()
      },
      redraw: function() {
          var i = this
            , s = t.get("availProducts")
            , a = t.get("visibleProducts")
            , e = t.get("product")
            , r = c.contains(l.seaProducts, e);
          this.el.innerHTML = this.menu.map(function(e) {
              var t = c.contains(l.seaProducts, e)
                , n = o[e];
              return c.contains(a, e) && r === t ? '<div data-do="set,' + e + '"' + (c.contains(s, e) ? "" : 'class="disabled"') + ">" + n.modelName + (i.showResolution ? "<small>" + n.modelResolution + "km</small>" : "") + "</div>" : ""
          }).join(""),
          this.set(e)
      }
  })
}),
/*! */
W.define("Resizable", ["utils", "broadcast", "Class"], function(t, e, n) {
  return n.extend({
      resizableEl: null,
      _init: function() {
          window.addEventListener("resize", t.debounce(this.resize.bind(this), 300)),
          e.on("pluginOpened", this.uiChanged, this),
          e.on("pluginClosed", this.uiChanged, this),
          e.on("detailRendered", this.resize, this),
          e.on("uiChanged", this.uiChanged, this),
          this.rects = {
              left: -1
          },
          this.resize()
      },
      uiChanged: function() {
          setTimeout(this.resize.bind(this), 200),
          setTimeout(this.resize.bind(this), 500),
          setTimeout(this.resize.bind(this), 1500)
      },
      resize: function() {
          var e = this.resizableEl.getBoundingClientRect();
          t.compare(e, this.rects, ["left", "right", "top", "bottom"]) || (this.height = Math.max(1, e.height),
          this.width = Math.max(1, e.width),
          this.rects = e,
          this.elTop = e.top,
          this.elBottom = e.bottom,
          this.elLeft = e.left,
          this.elRight = e.right,
          this.onresize(this.rects))
      },
      onresize: function() {}
  })
}),
/*! */
W.define("Scrollable", ["Class", "utils"], function(e, o) {
  return e.extend({
      _init: function() {
          this.scrollTicking = !1,
          this.scrollEndTimer = 0,
          this.scrollEl.addEventListener("scroll", this.scrollFired.bind(this))
      },
      scrollFired: function(e) {
          this.scrollTicking || (window.requestAnimationFrame(this.onscroll.bind(this, e)),
          clearTimeout(this.scrollEndTimer),
          this.scrollEndTimer = setTimeout(this.onscrollend.bind(this), 100),
          this.scrollTicking = !0)
      },
      scrollTo: function(e) {
          var t = this
            , n = this.scrollEl.scrollLeft
            , i = Date.now()
            , s = e - n
            , a = i + Math.max(500, 1.2 * Math.abs(s))
            , r = function() {
              var e = Date.now();
              t.scrollEl.scrollLeft = o.smoothstep(i, a, e) * s + n,
              e < a && window.requestAnimationFrame(r)
          };
          r()
      },
      onscroll: function() {},
      onscrollend: function() {}
  })
}),
/*! */
W.define("Swipe", ["Class"], function(e) {
  return e.extend({
      _swipeTresholdX: 50,
      _swipeTresholdY: 50,
      _init: function() {
          this.xDown = null,
          this.yDown = null,
          this.el.addEventListener("touchstart", this.touchStart.bind(this)),
          this.el.addEventListener("touchmove", this.touchMove.bind(this)),
          this.el.addEventListener("touchend", this.touchEnd.bind(this))
      },
      touchStart: function(e) {
          this.xFinal = this.xDown = e.touches[0].clientX,
          this.yFinal = this.yDown = e.touches[0].clientY
      },
      touchMove: function(e) {
          this.xFinal = e.touches[0].clientX,
          this.yFinal = e.touches[0].clientY
      },
      touchEnd: function(e) {
          var t = this.xDown - this.xFinal
            , n = this.yDown - this.yFinal;
          Math.abs(t) > Math.abs(n) && Math.abs(t) > this._swipeTresholdX && Math.abs(n / t) < .2 ? this.onswipe(0 < t ? "left" : "right", t, e) : Math.abs(n) > this._swipeTresholdY && Math.abs(t / n) < .2 && this.onswipe(0 < n ? "up" : "down", n, e)
      },
      onswipe: function(e, t, n) {}
  })
}),
/*! */
W.define("Switch", ["$", "ClickHandler"], function(a, t) {
  return t.extend({
      el: null,
      initValue: null,
      stopPropagation: !0,
      _init: function() {
          var e;
          this.el && this.initValue && (e = this.getEl(this.initValue)) && e.classList.add("selected"),
          this.selected = this.initValue,
          t._init.call(this)
      },
      getEl: function(e) {
          return a('*[data-do="set,' + e + '"]', this.el)
      },
      set: function(e, t) {
          this.click("set", e, t)
      },
      click: function(e, t, n) {
          if ("set" === e) {
              var i = a(".selected", this.el)
                , s = this.getEl(t);
              i && i.classList.remove("selected"),
              s && s.classList.add("selected"),
              n || t !== this.selected && this.onset(t),
              this.selected = t
          } else
              "function" == typeof this[e] && this[e](t)
      },
      onset: function() {}
  })
}),
/*! */
W.define("Webcams", ["store", "map", "trans", "http", "format", "ClickHandler", "broadcast"], function(e, t, l, s, c, n, i) {
  return n.extend({
      maxAmount: 5,
      imgRatio: 400 / 224,
      data: [],
      useHover: !0,
      addListeners: function() {
          return this.hasListener || (e.on("webcamsDaylight", this.render, this),
          this.hasListener = !0),
          this
      },
      removeListeners: function() {
          this.hasListener && (e.off("webcamsDaylight", this.render, this),
          this.hasListener = !1),
          this.removeMarker()
      },
      load: function(e) {
          var i = this;
          return this.removeMarker(),
          new Promise(function(n) {
              s.get("/node/webcams2/" + e.lat + "/" + e.lon).then(function(e) {
                  var t = e.data;
                  i.daylight = !1,
                  0 < t.length ? (i.data = t.slice(0, i.maxAmount),
                  i.render()) : (i.data = [],
                  i.el && (i.el.innerHTML = "")),
                  n(i.data)
              })
          }
          )
      },
      index2location: function(e) {
          return [this.data[e].location.latitude, this.data[e].location.longitude]
      },
      addMarker: function(e) {
          this.marker ? this.marker.setLatLng(this.index2location(e)) : this.marker = L.marker(this.index2location(e), {
              icon: t.myMarkers.webcamIcon,
              zIndexOffset: 1e3
          }).addTo(t)
      },
      removeMarker: function() {
          this.marker && (t.removeLayer(this.marker),
          this.marker = null)
      },
      render: function() {
          var t = this;
          if (this.data && this.data.length) {
              var o = e.get("webcamsDaylight");
              this.el.innerHTML = this.data.map(function(e, t) {
                  var n = e.distance
                    , i = e.image
                    , s = e.title
                    , a = o ? l.D_DAYLIGHT : c.howOld({
                      ux: +i.update,
                      translate: !0
                  })
                    , r = 0 < n ? ", " + l.D_DISTANCE + " " + n.toFixed(1) + " km, " + ((.62 * n).toFixed(1) + l.D_MILES) : "";
                  return '<div class="webcam" data-do="webcam,' + t + '" data-webcam="' + t + '"\n\t\t\tstyle="background-image: url( img/ajax-loader.gif );">\n\t\t\t<div class="iconfont" data-do="lookr,' + t + '" data-tooltip="' + l.D_WEBCAMS_24 + '">&#xe041;</div>\n\t\t\t<div class="wbcm-name noselect">' + s + '</div>\n\t\t\t<small class="noselect fresh-title ' + c.obsoleteClass(+i.update) + '">' + a + r + "</small>\n\t\t\t</div>"
              }).join(""),
              this.useHover && this.el.querySelectorAll("div[data-webcam]").forEach(function(e) {
                  e.onmouseover = t.addMarker.bind(t, +e.dataset.webcam),
                  e.onmouseout = t.removeMarker.bind(t)
              })
          }
      },
      forEach: function(e) {
          for (var t = this.el.querySelectorAll(".webcam"), n = 0; n < t.length; n++)
              e(t[n], n)
      },
      setWH: function(t, n) {
          this.forEach(function(e) {
              e.style.width = t + "px",
              e.style.height = n + "px"
          })
      },
      loadImages: function() {
          var i = this
            , s = e.get("webcamsDaylight");
          this.forEach(function(e, t) {
              var n = i.data[t].image[s ? "daylight" : "current"].preview;
              e.style["background-image"] = "url(" + n + "), url( img/ajax-loader.gif )",
              e.classList.add("loaded")
          })
      },
      click: function(e, t) {
          "lookr" === e && i.emit("rqstOpen", "lookr", this.data[t])
      }
  })
}),
/*! */
W.define("BindedBar", ["store", "Bar", "format"], function(e, t, n) {
  return t.extend({
      displayHour: n.getHoursFunction(),
      zuluMode: e.get("zuluMode"),
      _init: function() {
          t._init.call(this),
          e.on("usedLang", this.render, this),
          e.on("hourFormat", this.render, this),
          e.on("zuluMode", this.render, this),
          e.on(this.bindTimestamp, this.ontstamp, this),
          e.on(this.bindCalendar, this.setCal, this),
          this.ondragstart = this.stopAnim,
          this.setCal(e.get(this.bindCalendar)),
          this.set(e.get(this.bindTimestamp))
      },
      render: function() {
          this.zuluMode = e.get("zuluMode"),
          delete this.text.dataset.zulu,
          this.displayHour = n.getHoursFunction(),
          this.text.textContent = this.createText(this.text)
      },
      ontstamp: function(e, t) {
          this.UIident !== t && this.set(e)
      },
      onbcast: function() {
          e.set(this.bindTimestamp, this.timestamp, {
              UIident: this.UIident
          })
      },
      stopAnim: function() {
          this.bindAnimation && e.set(this.bindAnimation, !1)
      },
      click: function(e) {
          this.stopAnim(),
          t.click.call(this, e)
      },
      setCal: function(e) {
          e && (this.numberOfHours = e.calendarHours,
          this.calendar = e,
          this.onresize())
      },
      createText: function() {},
      createGhostText: function() {}
  })
}),
/*! */
W.define("Window", ["$", "trans", "Class", "broadcast"], function(n, e, t, i) {
  return t.extend({
      iAm: "window",
      domEl: null,
      attachPoint: "#plugins",
      keyboard: !1,
      hasURL: !1,
      closeOnClick: !1,
      replaceMountingPoint: !1,
      displayBlock: !0,
      timeout: null,
      _init: function() {
          this.isOpen = !1,
          this.closingTimer = null,
          this.timeoutTimer = null,
          this.bindedClose = this.close.bind(this),
          this.bodyClass = "on" + this.iAm + "-" + this.ident
      },
      removeHooks: function() {
          this.closeOnClick && (document.removeEventListener("mousedown", this.bindedClose, !0),
          document.removeEventListener("touchstart", this.bindedClose, !0)),
          this.keyboard && this.node.removeEventListener("keydown", this.keyCatcher)
      },
      addHooks: function() {
          this.closeOnClick && (document.addEventListener("mousedown", this.bindedClose, !0),
          document.addEventListener("touchstart", this.bindedClose, !0)),
          this.keyboard && this.node.addEventListener("keydown", this.keyCatcher)
      },
      close: function(e) {
          var t = this;
          this.isOpen && (this.isOpen = !1,
          document.body.classList.remove(this.bodyClass),
          this.node.classList.remove("open"),
          this.closingTimer = setTimeout(function() {
              t._unmount(),
              i.emit("pluginClosed", t.ident)
          }, 500),
          "function" == typeof this.onclose && this.onclose(e),
          this.removeHooks(),
          this.hasURL && W.location.reset(),
          !this.closeOnClick && e && e.stopPropagation && e.stopPropagation())
      },
      keyCatcher: function(e) {
          e.stopPropagation()
      },
      createNode: function(e) {
          this.node = this.el = this.element = document.createElement("div"),
          this.node.id = this.htmlID || this.iAm + "-" + this.ident,
          this.className && (this.node.className = this.className),
          this.node.innerHTML = '<div class="closing-x"></div>' + e;
          var t = this.domEl || n(this.attachPoint);
          this.replaceMountingPoint ? t.parentElement.replaceChild(this.node, t) : t.appendChild(this.node),
          n(".closing-x", this.node).onclick = this.bindedClose
      },
      open: function(e) {
          return this.closingTimer && clearTimeout(this.closingTimer),
          this.timeoutTimer && clearTimeout(this.timeoutTimer),
          this.isOpen || (this._mount(),
          this._open(e)),
          this
      },
      attachRefs: function() {
          this.refs = {};
          for (var e = this.node.querySelectorAll("[data-ref]"), t = 0, n = e.length; t < n; t++) {
              var i = e[t];
              this.refs[i.dataset.ref] = i
          }
      },
      _mount: function() {
          this.createNode(this.html),
          e.translateDocument(this.node),
          this.attachRefs()
      },
      _unmount: function() {
          this.node.parentNode.removeChild(this.node)
      },
      _open: function(e) {
          var t = this;
          this.isOpen || (document.body.classList.add(this.bodyClass),
          this.displayBlock && (this.node.style.display = "block"),
          this.addHooks(),
          setTimeout(function() {
              t.node.classList.add("open"),
              i.emit("pluginOpened", t.ident)
          }, 50),
          this.isOpen = !0,
          this.timeout && (this.timeoutTimer = setTimeout(this.close.bind(this), this.timeout))),
          this.onopen(e),
          this.hasURL && this.url(e)
      },
      url: function(e) {
          var t = W.location
            , n = this.onurl(e);
          t.url(n.url),
          n.title && t.title(n.title)
      },
      onurl: function() {
          return {
              url: this.ident,
              title: e[this.title] || this.title || null
          }
      },
      onopen: function() {},
      onclose: function() {}
  })
}),
/*! */
W.define("DropDown", ["Switch", "$"], function(n, e) {
  return n.extend({
      _init: function() {
          n._init.call(this),
          this.opened = !1,
          this.switch = e("ul", this.el),
          this.el.addEventListener("click", this.toggle.bind(this)),
          this.bindedClose = this.close.bind(this),
          this.fill()
      },
      fill: function() {
          var e = this.getEl(this.selected);
          e && (this.el.dataset.content = e.textContent)
      },
      set: function(e, t) {
          n.set.call(this, e, t),
          this.fill()
      },
      toggle: function() {
          this.opened ? (this.fill(),
          this.close()) : this.open()
      },
      open: function() {
          this.switch.classList.add("show"),
          this.el.classList.add("opened"),
          this.opened = !0
      },
      close: function() {
          this.switch.classList.remove("show"),
          this.el.classList.remove("opened"),
          this.opened = !1
      }
  })
}),
/*! */
W.define("BindedDropDown", ["BindedSwitch", "DropDown", "store"], function(t, e, n) {
  return e.extend(t, {
      _init: function() {
          this.initValue = n.get(this.bindStore),
          n.on(this.bindStore, this.set, this),
          "function" == typeof this.render && n.on("usedLang", this.render, this),
          e._init.call(this)
      },
      set: function(e) {
          t.set.call(this, e),
          this.selected = e,
          this.fill()
      }
  })
}),
/*! */
W.define("location", ["trans", "store", "$", "utils", "broadcast", "rootScope", "storage", "router", "picker", "overlays", "format", "plugins"], function(e, a, t, r, n, o, i, s, l, c, d, u) {
  var h, f = d.seoString, m = d.seoLang, p = s.url, g = Date.now(), v = "Windy: " + e.TITLE, y = t('meta[name="description"]') || {}, w = y && y.content, b = !1, T = t('link[rel="canonical"]'), L = null, S = null;
  "/" === p && (p = "");
  var A = function(e) {
      return e + (h ? "?" + h : "")
  }
    , E = function(e) {
      return T.href = r.joinPath("https://www.windy.com", e)
  }
    , C = r.emptyFun;
  o.isCrawler ? u.seo.load().then(function() {
      S = W.require("seo"),
      C = S.showURL
  }) : window.history && window.history.replaceState && (C = r.debounce(function() {
      try {
          var e = _();
          window.history.replaceState({
              url: p,
              search: h
          }, "", A(e)),
          E(e)
      } catch (e) {}
  }, 200));
  var _ = function() {
      if ("" !== p)
          return /overlays|settings|privacy|tools|widgets|favs|hurricanes/.test(p) && L ? r.joinPath(M(), p) : p;
      var e = a.get("overlay");
      return "wind" !== e && L ? M() + "-" + e : ""
  }
    , M = function() {
      return m(a.get("usedLang")) + "-" + f(L)
  }
    , P = r.debounce(function() {
      if (!x)
          return;
      var e, t = o.map, n = [r.normalizeLatLon(t.lat), r.normalizeLatLon(t.lon), t.zoom], i = a.get("timestamp");
      "accumulations" === x.product && "next24h" !== x.acTime ? n.unshift(x.acTime) : x.path && 65e6 < Math.abs(g - i) && n.unshift(x.path.replace(/\//g, "-"));
      "wind" !== x.overlay && n.unshift(x.overlay);
      "surface" !== x.level && n.unshift(x.level);
      !/^ecmwf/.test(x.product) && (s = x.overlay,
      W.models && 1 < W.models.layer2product[s].length) && n.unshift(x.product);
      var s;
      "off" !== (e = a.get("isolines")) && n.push("i:" + e);
      o.picker && n.push("m:" + r.latLon2str(o.picker));
      o.customAnimation && n.push(o.customAnimation);
      "on" !== (e = a.get("particlesAnim")) && n.push("p:" + e);
      h = n.join(","),
      C()
  }, 300)
    , x = null;
  function D() {
      if (!b) {
          var e = a.get("overlay")
            , t = c[e].getName();
          document.title = "wind" === e ? (L = null,
          v) : "Windy: " + (L = t)
      }
  }
  return n.on("paramsChanged", function(e) {
      x = e,
      P()
  }),
  n.on("mapChanged", P),
  n.on("detailRendered", P),
  l.on("pickerOpened", P),
  l.on("pickerMoved", P),
  l.on("pickerClosed", P),
  a.on("particlesAnim", P),
  a.on("overlay", D),
  a.on("usedLang", D),
  {
      description: function(e) {
          return y.content = e
      },
      setCanonical: E,
      getFrag: A,
      titleWithLang: M,
      getPath: function() {
          return p
      },
      getTitle: function() {
          return L
      },
      getSearch: function() {
          return h
      },
      getURL: function() {
          return "https://www.windy.com/" + A()
      },
      deleteSearch: function() {
          return h = null
      },
      url: function(e) {
          p = e,
          C()
      },
      title: function(e) {
          L = e,
          document.title = "Windy: " + e,
          b = !0
      },
      reset: function() {
          b = !1,
          y && (y.content = w),
          p = "",
          D(),
          C()
      }
  }
}),
/*! */
W.define("components", ["radar", "products", "trans", "store", "query", "$", "utils", "rootScope", "broadcast", "overlays", "Class", "ClickHandler", "BindedSwitch", "BindedBar", "BindedCheckbox", "format"], function(e, a, s, r, t, n, i, o, l, c, d, u, h, f, m, p) {
  h.instance({
      el: n("#accumulations .ui-switch"),
      bindStore: "acTime",
      _init: function() {
          h._init.call(this),
          r.on("availAcTimes", this.render, this)
      },
      render: function() {
          var e = r.get("availAcTimes");
          this.el.innerHTML = e.map(function(e) {
              var t = /next(\d+)(h|d)/.exec(e);
              return '<div data-do="set,' + e + '">' + i.template("h" === t[2] ? s.ACC_NEXT_HOURS : s.ACC_NEXT_DAYS, {
                  num: t[1]
              }) + "</div>"
          }).join(""),
          this.set(r.get("acTime"))
      }
  }),
  m.instance({
      el: o.isMobile ? n("#playpause-mobile") : n("#playpause"),
      bindStore: "animation"
  }),
  o.isMobile || f.instance({
      progressBar: n("#progress-bar"),
      offset: 45,
      borderOffset: 10,
      UIident: "main",
      bindTimestamp: "timestamp",
      bindCalendar: "calendar",
      bindAnimation: "animation",
      createText: function(e) {
          var t = Math.floor(this.numberOfHours * this.left / (24 * this.progressWidth))
            , n = this.calendar.days[t]
            , i = n ? "" + s[this.zuluMode ? n.display : n.displayLong] + (n.day && " " + n.day) + " - " : "";
          return i + this.displayHour(Math.round(this.numberOfHours * this.left / this.progressWidth) % 24)
      },
      createGhostText: function(e) {
          var t = parseInt(e / this.progressWidth * this.numberOfHours) % 24;
          return this.displayHour(t)
      }
  }),
  o.isMobile || o.isTablet ? (d.instance({
      el: n("#legend-mobile"),
      _init: function() {
          r.on("overlay", this.render, this),
          l.on("metricChanged", this.render, this),
          this.render()
      },
      render: function() {
          var e = r.get("overlay");
          c[e].paintLegend(this.el)
      }
  }),
  d.instance({
      el: n("#mobile-menu .mm-menu"),
      _init: function() {
          var t = this;
          this.debouncedRedraw = i.debounce(this.render.bind(this), 50),
          r.on("usedLang", this.render, this),
          r.on("level", this.debouncedRedraw),
          r.on("overlay", this.debouncedRedraw),
          r.on("product", this.debouncedRedraw),
          r.on("hpShown", function(e) {
              return !e && t.bigger()
          }),
          e.on("providerChanged", this.render, this),
          this.render()
      },
      bigger: function() {
          var e = this;
          clearTimeout(this.timer),
          this.el.classList.remove("smaller"),
          this.timer = setTimeout(function() {
              return e.el.classList.add("smaller")
          }, 8e3)
      },
      render: function() {
          var e = c[r.get("overlay")]
            , t = a[r.get("product")]
            , n = r.get("level")
            , i = [];
          e.hasMoreLevels && "surface" !== n && i.push(o.levelsData[n][0].replace(/Pa/, "")),
          !/ecmwf/.test(t.ident) && t.modelName && t.modelName.length && i.push(t.modelName);
          var s = '<span class="uiyellow"\n\t\t\t\t' + (i.length ? 'data-notes="' + i.join(" ") + '"' : "") + "\n\t\t\t\t>" + e.getName() + "</span>";
          s != this.lastString && (this.el.innerHTML = s,
          this.el.dataset.icon = e.icon,
          this.lastString = s,
          this.bigger())
      }
  })) : l.once("dependenciesResolved", l.emit.bind(l, "rqstOpen", "rhpane")),
  u.instance({
      el: document.body,
      click: function(e) {
          switch (e) {
          case "openapp":
              window.location.href = "ios" === o.platform ? "https://itunes.apple.com/us/app/windytv-windyty/id1161387262?mt=8" : "https://play.google.com/store/apps/details?id=com.windyty.android&utm_source=menu&utm_medium=windy&utm_campaign=openAppLink&utm_content=openAppLink";
              break;
          case "title":
              l.emit("back2home");
              break;
          case "search":
              l.emit("closeAll"),
              t.set(""),
              l.emit("focusRqstd");
              break;
          default:
              l.emit(e)
          }
      }
  })
}),
/*! */
W.define("keyboard", ["utils", "products", "broadcast", "store", "rootScope"], function(u, e, h, f, m) {
  document.body.addEventListener("keydown", function(e) {
      var t = e.keyCode
        , n = !1;
      if (37 !== t && 39 !== t || !p())
          if (38 === t || 40 === t) {
              for (var i = f.get("favOverlays"), s = f.get("overlay"), a = m.overlays.indexOf(s), r = m.overlays.length; 0 <= a && a < r; )
                  if (a += 38 === t ? -1 : 1,
                  u.contains(i, m.overlays[a]))
                      return void f.set("overlay", m.overlays[a]);
              n = !0
          } else if (33 !== t && 34 !== t || !g())
              9 === t || 70 === t ? (h.emit("closeAll"),
              h.emit("focusRqstd"),
              n = !0) : 187 === t ? (h.emit("zoomIn"),
              n = !0) : 189 === t && (h.emit("zoomOut"),
              n = !0);
          else {
              var o = f.get("availLevels")
                , l = o.indexOf(f.get("level"));
              -1 < l && (l = u.bound(l + (33 === t ? 1 : -1), 0, o.length),
              f.set("level", o[l])),
              n = !0
          }
      else {
          var c = f.get("calendar")
            , d = c.paths.indexOf(f.get("path"));
          -1 < d && (d = u.bound(d + (39 === t ? 1 : -1), 0, c.paths.length),
          f.set("timestamp", c.timestamps[d])),
          n = !0
      }
      n && e.preventDefault()
  });
  var p = function() {
      return e[f.get("product")].calendar
  }
    , g = function() {
      return /wind|rh|temp/.test(f.get("overlay"))
  }
}),
/*! */
W.define("calendarUI", ["$", "utils", "rootScope", "trans", "store", "format", "Scrollable"], function(d, u, e, h, f, m, t) {
  e.isMobile && t.instance({
      scrollEl: d("#days"),
      box: d("#mobile_box"),
      nowBar: d("#now-bar"),
      hoursHtml: "",
      scrolling: !1,
      noAnimation: !1,
      scrollTimer: null,
      ticking: !1,
      tsPx: 3 * u.tsHour / 20,
      UIident: "botomCal",
      _init: function() {
          t._init.call(this),
          f.on("timestamp", this.set, this),
          f.on("hourFormat", this.render, this),
          f.on("calendar", this.render, this),
          f.on("usedLang", this.render, this),
          f.on("zuluMode", this.render, this),
          window.addEventListener("resize", setTimeout.bind(null, this.render.bind(this), 500)),
          setInterval(this.render.bind(this), u.tsHour),
          this.render(),
          this.set(f.get("timestamp"))
      },
      render: function() {
          var t = this;
          if (this.calendar = f.get("calendar"),
          this.zuluMode = f.get("zuluMode"),
          this.localeHours = m.getHoursFunction(),
          this.timestamp = 0,
          this.calendar) {
              for (var e = this.calendar.days.filter(function(e) {
                  return e.start < t.calendar.end
              }), n = "<b></b>", i = f.is12hFormat(), s = "", a = 1; a < 24; a += 3) {
                  var r = i ? (a + 11) % 12 + 1 : a;
                  s += "<li>" + u.pad(r) + "</li>"
              }
              for (var o = 0; o < e.length; o++) {
                  var l = e[o];
                  n += "<div>&nbsp;&nbsp;" + h[l.displayLong] + "&nbsp;" + l.day + "<ul>" + s + "</ul></div>"
              }
              this.scrollEl.innerHTML = n;
              var c = f.get("timestamp");
              delete this.box.dataset.zulu,
              this.set(c),
              this.renderBox(),
              d("b", this.scrollEl).style.left = window.innerWidth / 2 + (Date.now() - this.calendar.start) / this.tsPx + "px"
          }
      },
      slideUp: function() {
          this.scrolling || this.noAnimation || (this.scrolling = !0,
          document.body.classList.add("mobile-scroll")),
          this.noAnimation && (this.scrolling = !0,
          this.noAnimation = !1)
      },
      onscroll: function(e) {
          this.slideUp(),
          this.timestamp = this.tsPx * e.target.scrollLeft + this.calendar.start,
          this.renderBox(),
          this.scrollTicking = !1
      },
      renderBox: function() {
          this.zuluMode && (this.box.dataset.zulu = m.hourUTC(this.timestamp)),
          this.box.textContent = this.localeHours(new Date(this.timestamp).getHours())
      },
      onscrollend: function() {
          this.scrolling = !1,
          this.scrollTimer = null;
          var e = u.bound(this.timestamp, this.calendar.start, this.calendar.end);
          f.set("timestamp", e, {
              UIident: this.UIident
          }),
          document.body.classList.remove("mobile-scroll")
      },
      set: function(e, t) {
          if (this.calendar && t !== this.UIident) {
              var n = ((this.timestamp = e) - this.calendar.start) / this.tsPx;
              this.noAnimation = !0,
              this.scrollEl.scrollLeft = n
          }
      }
  })
}),
/*! */
W.define("calendarUIdesktop", ["store", "$", "trans", "rootScope", "ClickHandler", "Resizable"], function(c, e, t, n, i, s) {
  if (!n.isMobile) {
      var a = e("#calendar");
      i.instance(s, {
          el: a,
          resizableEl: a,
          stopPropagation: !0,
          _init: function() {
              i._init.call(this),
              s._init.call(this),
              c.on("calendar", this.render, this),
              c.on("usedLang", this.render, this),
              this.onresize = this.render.bind(this),
              this.click = c.set.bind(c, "timestamp"),
              this.render()
          },
          render: function() {
              var e = c.get("calendar");
              if (e) {
                  var t, n = "", i = e.end, s = e.days.length, a = this.width / s, r = 100 / s;
                  if (100 < a)
                      t = this.createDayStringLong;
                  else if (60 < a)
                      t = this.createDayString;
                  else {
                      if (!(40 < a))
                          return void (this.el.innerHTML = "");
                      t = this.createDayStringShort
                  }
                  for (var o = 0; o < s; o++) {
                      var l = e.days[o];
                      n += '<div data-do="' + Math.min(l.middayTs, i) + '"\n\t\t\t\t\tclass="uiyellow' + (l.middayTs < i ? " clickable" : " disabled") + '"\n\t\t\t\t\tstyle="width: ' + r + '%;">' + t(l) + "</div>"
                  }
                  this.el.innerHTML = n
              }
          },
          createDayStringLong: function(e) {
              return t[e.displayLong] + (e.day ? " " + e.day : "")
          },
          createDayString: function(e) {
              return t[e.display] + (e.day ? " " + e.day : "")
          },
          createDayStringShort: function(e) {
              return "" + t[e.display]
          }
      })
  }
}),
/*! */
W.define("promo", ["utils", "$", "rootScope", "broadcast", "storage", "plugins", "geolocation", "log"], function(e, n, i, t, s, a, r, o) {
  var l = s.get("promos2") || {}
    , c = e.debounce(function() {
      s.put("promos2", l)
  }, 500)
    , d = function(e) {
      return l[e] || 0
  }
    , u = function(e, t, n) {
      l[e + "_ts"] = n || Date.now(),
      l[e] = t,
      c()
  };
  return t.once("dependenciesResolved", function() {
      var e = a.patch;
      e.load().then(e.open.bind(e))
  }),
  t.once("dependenciesResolved", function() {
      if (setInterval(function() {
          document.body.classList.add("animate-logo"),
          setTimeout(function() {
              return document.body.classList.remove("animate-logo")
          }, 2e3)
      }, 3e4),
      i.isMobile && "index" === i.target && ("ios" === i.platform || "android" === i.platform)) {
          var e = ["#d49500", "#d40000", "#d4009b", "#8400d4", "#2200d4", "#0d869a", "#177900", "#ad7100"]
            , t = 0;
          setInterval(function() {
              ++t >= e.length && (t = 0),
              n("#open-in-app").style["background-color"] = e[t]
          }, 12e3)
      }
  }),
  {
      getCounter: s.isAvbl ? d : function() {
          return 1e3
      }
      ,
      getCounter2: s.isAvbl ? function(e) {
          var t = (l[e + "_checked"] || 0) + 1;
          return l[e + "_checked"] = t,
          c(),
          {
              displayed: d(e),
              ts: l[e + "_ts"] || 0,
              checked: t
          }
      }
      : function() {
          return {
              displayed: 1e3,
              ts: Date.now(),
              checked: 1e3
          }
      }
      ,
      hitCounter: function(e) {
          u(e, d(e) + 1),
          t.emit("log", "promo/" + e)
      },
      neverSee: function(e) {
          return u(e, 1e3)
      },
      getAll: function() {
          return l
      }
  }
}),
/*! */
W.define("loadersUI", ["broadcast", "utils"], function(e, t) {
  var n = t.debounce
    , i = !1;
  var s = n(function() {
      i = !0,
      document.body.classList.remove("loading-overlay"),
      document.body.classList.remove("loading-path"),
      document.body.classList.remove("loading-level")
  }, 300);
  e.on("paramsChanged", function(e, t) {
      /^(overlay|path|level)$/.test(t) && (s(),
      i = !1,
      setTimeout(function(e) {
          i || document.body.classList.add("loading-" + e)
      }
      .bind(null, t), 200))
  }),
  e.on("redrawFinished", s),
  e.on("loadingFailed", s),
  e.on("noConnection", s)
}),
/*! */
W.define("user", ["rootScope", "broadcast", "http", "storage"], function(n, i, e, t) {
  function s(e) {
      var t = e.data;
      t && "object" == typeof t && (t.token && (n.userToken = t.token,
      i.emit("tokenRecieved", t.token)),
      t.auth && t.username ? (n.user = t,
      n.user.avatar = a(t.avatar),
      i.emit("rqstOpen", "user", t)) : r())
  }
  function a(e) {
      return e ? /^http/.test(e) ? e : "" + n.community + e + "?w=84" : "https://www.windy.com/img/avatar.jpg"
  }
  function r() {
      delete n.user,
      i.emit("rqstClose", "user")
  }
  function o(e) {
      var t = document.location.href;
      return document.createElement("a").href = t,
      n.community + "/" + (e || "login") + "?return=" + encodeURI(t) + "&utm_medium=windy&utm_source=login"
  }
  return e.get("https://node.windy.com/users/info", {
      cache: !1,
      withCredentials: !0
  }).then(s).catch(r),
  {
      getAvatar: a,
      checkAuth: s,
      login: function(e) {
          window.location.href = o(e)
      },
      loginURL: o
  }
}),
/*! */
W.define("timeAnimation", ["utils", "store", "products", "broadcast"], function(t, n, i, s) {
  var a, r, o = !1, l = null, c = null, d = 2, u = !1, h = 50;
  n.on("animation", function(e) {
      e !== o && (e ? function() {
          if (!(c = i[n.get("product")]).animation)
              return g();
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
  var f = function(e) {
      e || g()
  }
    , m = function(e) {
      return a = e.path
  }
    , p = function(e) {
      return /Accu$/.test(e) && g()
  }
    , g = function() {
      return n.set("animation", !1)
  }
    , v = function(e) {
      u = r !== a,
      r = e.path
  };
  function y() {
      d = t.bound(d + (u ? -.25 : .1), .8, 3);
      var e = n.get("timestamp") + h * c.animationSpeed * d;
      e < c.calendar.end ? (n.set("timestamp", e),
      l = setTimeout(y, h)) : g()
  }
}),
/*! */
W.define("hp", ["map", "utils", "store", "query", "rootScope", "geolocation", "http", "broadcast"], function(t, i, s, n, a, r, o, l) {
  var c = !1
    , d = !1
    , e = s.get("showWeather")
    , u = t.getContainer();
  function h() {
      document.body.addEventListener("mousedown", f, !1),
      document.body.addEventListener("touchstart", f, !1),
      document.body.addEventListener("keydown", f, !1),
      u.addEventListener("click", f, !0),
      u.addEventListener("touchstart", f, !0),
      d = !0
  }
  function f(e) {
      if (e && e.target) {
          if ("mm-home" === e.target.id || "logo" === e.target.id)
              return;
          if ("search-my-loc" === e.target.id)
              return n.showLoader(),
              void r.getGPSlocation().then(m).catch(n.hideLoader.bind(n))
      }
      document.body.removeEventListener("mousedown", f, !1),
      document.body.removeEventListener("touchstart", f, !1),
      document.body.removeEventListener("keydown", f, !1),
      u.removeEventListener("click", f, !0),
      u.removeEventListener("touchstart", f, !0),
      c = !(d = !1),
      l.emit("rqstClose", "hp-weather", e)
  }
  function m(e) {
      if (!c) {
          d || h();
          var t = i.normalizeLatLon(e.lat) + "/" + i.normalizeLatLon(e.lon)
            , n = {
              wx: o.get(a.pointForecast + "/ecmwf/" + t + "?setup=summary&includeNow=true&source=hp", {
                  cache: !1
              }),
              capAlerts: o.get("/capalerts/" + t + "?lang=" + s.get("usedLang"), {
                  cache: !1
              })
          };
          l.emit("rqstOpen", "hp-weather", {
              coords: e,
              promises: n
          })
      }
  }
  return a.isResumed || !e || a.startupDetail ? document.body.classList.remove("onweather") : (a.isMobile || n.showLoader(),
  setTimeout(function() {
      return n.hideLoader()
  }, 3e3),
  h(),
  r.getHomeLocation(m)),
  l.on("back2home", function() {
      l.emit("closeAll"),
      s.set("timestamp", Date.now()),
      c = !1,
      r.getHomeLocation(function(e) {
          m(e),
          e.zoom = 5,
          t.center(e)
      })
  }),
  l.emit("log", "weather/" + (e ? s.get("startUp") : "userDisabled")),
  {
      cancelShow: function() {
          return c
      },
      show: m,
      hide: f
  }
}),
/*! */
W.define("visibility", ["store"], function(e) {
  "hidden"in document && document.addEventListener("visibilitychange", function() {
      e.set("visibility", !document.hidden)
  })
}),
/*! */
W.define("Renderer", ["plugins", "Class"], function(i, e) {
  return e.extend({
      _init: function() {
          this.isMounted = !1,
          this.isLoaded = !(this.dependency && this.dependency.length)
      },
      open: function(t) {
          var n = this;
          return this.isMounted ? Promise.resolve() : this.isLoaded ? (this.onopen(t),
          this.isMounted = !0,
          Promise.resolve()) : (this.loadingPromise || (this.loadingPromise = new Promise(function(e) {
              i[n.dependency].open(t).then(function() {
                  n.isLoaded = !0,
                  n.onopen(t),
                  n.isMounted = !0,
                  e()
              }).catch(window.wError.bind(null, "renderers", "Failed to load/open " + n.dependency)).then(function() {
                  n.loadingPromise = null
              })
          }
          )),
          this.loadingPromise)
      },
      onopen: function() {},
      close: function(e) {
          this.onclose(e),
          this.isMounted = !1
      },
      onclose: function() {},
      paramsChanged: function() {},
      redraw: function() {}
  })
}),
/*! */
W.define("DataTiler", ["utils", "map", "dataLoader", "render", "Class", "rootScope"], function(g, v, e, y, t, w) {
  return t.extend({
      _tag: "DataTiler",
      loader: e,
      syncCounter: 0,
      getTiles: function(t) {
          var n = this;
          this.syncCounter++;
          var e, i, s, a = v.getPixelBounds(), r = v.getZoom(), o = [], l = a.min.x >> 8, c = a.max.x >> 8, d = a.min.y >> 8, u = a.max.y >> 8;
          for (i = d; i <= u; i++)
              for (e = l; e <= c; e++)
                  s = {
                      x: e,
                      y: i,
                      z: r
                  },
                  v.baseLayer._adjustTilePoint.call(v.baseLayer, s),
                  o.push(s);
          var h, f = g.include(g.clone(w.map), {
              pixelOriginX: a.min.x,
              pixelOriginY: a.min.y,
              dZoom: y.getDataZoom(t, r),
              origTiles: {
                  minX: l,
                  minY: d,
                  maxX: c,
                  maxY: u
              }
          }), m = {}, p = [];
          o.forEach(function(e) {
              h = y.whichTile(e, t),
              (h = n.processTile(h, t)) && !m[h.url] && (m[h.url] = 1,
              p.push(n.loader.loadTile(h)))
          }),
          Promise.all(p).then(this.postProcess.bind(this, this.syncCounter, f, t))
      },
      processTile: function(e) {
          return e
      },
      postProcess: function(e, t, n, i) {
          if (e === this.syncCounter) {
              var s = this.sortTiles(t, n, i);
              this.trans = 0 | y.getTrans(t.zoom, t.dZoom),
              this.shift = 0 | Math.log2(this.trans),
              this.lShift = 0 | Math.log2(this.trans * this.trans);
              var a = t.pixelOriginX / this.trans % 256
                , r = t.pixelOriginY / this.trans % 256;
              a < 0 && (a = 256 + a),
              this.offsetX = a * this.trans | 0,
              this.offsetY = r * this.trans | 0,
              this.offset = 2056,
              this.width = t.width,
              this.height = t.height,
              this.w = y.getWTable(this.trans),
              this.tilesReady.call(this, s, t, n)
          }
      },
      sortTiles: function(e, s, t) {
          function n(e, t, n) {
              var i = {
                  x: e,
                  y: t,
                  z: n.z
              };
              return v.baseLayer._adjustTilePoint.call(v.baseLayer, i),
              y.whichTile(i, s)
          }
          for (var i, a, r, o, l = [], c = e.origTiles.minY; c <= e.origTiles.maxY; c++)
              if (!(i = n(e.origTiles.minX, c, e)) || i.y !== r) {
                  a = null;
                  for (var d = [], u = e.origTiles.minX; u <= e.origTiles.maxX; u++)
                      (i = n(u, c, e)) && i.x !== a && (o = t.filter(function(e) {
                          return e.x === i.x && e.y === i.y
                      })[0],
                      d.push(o),
                      a = i.x,
                      r = i.y);
                  0 < d.length && l.push(d)
              }
          return l
      }
  })
}),
/*! */
W.define("Particles", ["Class", "store"], function(e, n) {
  return e.extend({
      configurable: !1,
      config: n.get("particles"),
      animation: "dot",
      stylesBlue: ["rgba(200,0,150,1)", "rgba(200,0,150,1)", "rgba(200,0,150,1)", "rgba(200,0,150,1)"],
      lineWidth: [.6, .6, .6, 1, 1.2, 1.6, 1.8, 2, 2.2, 2.4, 2.4, 2.4, 2.4, 2.6, 2.8, 3, 3, 3, 3, 3, 3, 3, 3, 3],
      zoom2speed: [.5, .5, .5, .6, .7, .8, .9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      level2reduce: {
          surface: 1,
          "100m": 1,
          "975h": 1,
          "950h": 1,
          "925h": .98,
          "900h": .9,
          "850h": .8,
          "800h": .77,
          "750h": .75,
          "700h": .7,
          "600h": .65,
          "500h": .6,
          "400h": .55,
          "300h": .5,
          "250h": .45,
          "200h": .45,
          "150h": .35
      },
      colors: [[200, 215, 235, 255], [215, 235, 255, 255], [235, 255, 255, 255], [255, 255, 255, 255]],
      getIntensityFun: function() {
          return function(e) {
              return Math.min(3, Math.floor(e / 40))
          }
      },
      _init: function() {
          var t = this;
          n.on("particles", function(e) {
              return t.config = e
          })
      },
      getVelocityFun: function(e) {
          var t = this.zoom2speed[e.zoom]
            , n = this.configurable ? this.config.velocity : 1
            , i = t * n * this.level2reduce[e.level] * this.velocity.max
            , s = t * n * this.velocity.damper;
          return function(e) {
              return i * (1 - 1 / (s * i * e - 1))
          }
      },
      getAmountMultiplier: function() {
          return this.configurable ? this.config.multiplier : 1
      },
      getAmount: function(e) {
          var t = e.speed2pixel < 1 ? 1 + 1.5 * (1 - e.speed2pixel) : 1
            , n = this.getAmountMultiplier()
            , i = 1 / (this.multiplier.constant * Math.pow(n * this.multiplier.pow, e.zoom - this.multiplier.zoom));
          return 0 | Math.min(15e3, Math.round(t * e.width * e.height * i))
      },
      getLineWidth: function(e) {
          return (this.configurable ? this.config.width : 1) * this.lineWidth[e.zoom]
      },
      getStyles: function(e) {
          var t = this.configurable ? this.config.opacity : 1;
          if (12 <= e.zoom)
              return this.stylesBlue;
          if (t <= 1)
              return this.colors[0].map(function(e) {
                  return "rgba(" + e + "," + e + "," + e + "," + t.toFixed(1) + ")"
              });
          var n = Math.min(3, Math.round(1.5 * t));
          return this.colors[n].map(function(e) {
              return "rgba(" + e + "," + e + "," + e + ",1)"
          })
      },
      getMaxAge: function() {
          return 100
      },
      getBlendingAlpha: function(e) {
          var t = .9 * (this.configurable && 1 != this.config.blending ? this.config.blending : 1) * (e.speed2pixel < .8 ? 1 + (.8 - e.speed2pixel) / 7 : 1);
          return Math.min(.98, 2 * Math.round(100 * t / 2) / 100).toFixed(2)
      }
  })
}),
/*! */
W.define("TileLayerCanvas", ["render", "utils", "dataLoader", "renderTile"], function(i, t, s, e) {
  return L.TileLayer.Canvas.extend({
      latestParams: {},
      options: {
          async: !0,
          maxZoom: 11
      },
      syncCounter: 0,
      inMotion: !1,
      hasSea: !1,
      redHandler: 0,
      onAdd: function(e) {
          L.TileLayer.Canvas.prototype.onAdd.call(this, e),
          e.on("movestart", this.onMoveStart, this),
          e.on("moveend", this.onMoveEnd, this)
      },
      onRemove: function(e) {
          e.off("movestart", this.onMoveStart, this),
          e.off("moveend", this.onMoveEnd, this),
          L.TileLayer.Canvas.prototype.onRemove.call(this, e),
          this.hasSea = !1,
          document.body.classList.remove("sea"),
          i.emit("toggleSeaMask", this.hasSea)
      },
      onMoveStart: function() {
          this.inMotion = !0
      },
      onMoveEnd: function() {
          this.inMotion = !1,
          this._tilesToLoad || this.redrawFinished()
      },
      _prepareBgBuffer: function() {
          var e = this._tileContainer
            , t = this._bgBuffer;
          t.style.visibility = "",
          t.style.opacity = .3,
          t.style[L.DomUtil.TRANSFORM] = "",
          e.style.opacity = 1,
          this._tileContainer = t,
          t = this._bgBuffer = e,
          clearTimeout(this._clearBgBufferTimer)
      },
      _tileLoaded: function() {
          this._tilesToLoad--,
          L.DomUtil.addClass(this._tileContainer, "leaflet-zoom-animated"),
          this._tilesToLoad || (this._tileContainer.style.opacity = 1,
          this._bgBuffer.style.opacity = .3,
          clearTimeout(this._clearBgBufferTimer),
          this._clearBgBufferTimer = setTimeout(this._clearBgBuffer.bind(this), 500),
          this.inMotion || this.redrawFinished())
      },
      redrawLayer: function() {
          var e, t, n = this._map.getPixelBounds(), i = L.bounds(n.min.divideBy(256)._floor(), n.max.divideBy(256)._floor());
          this._removeOtherTiles(i);
          var s = this.sortTilesFromCenterOut(i);
          this._tilesToLoad = s.length;
          for (var a = [], r = 0; r < s.length; r++)
              (e = (t = s[r]).x + ":" + t.y)in this._tiles && (this._redrawTile(this._tiles[e]),
              a.push(e))
      },
      paramsChanged: function(e) {
          e.fullPath === this.latestParams.fullPath && e.layer === this.latestParams.layer || (this.latestParams = t.clone(e),
          this.syncCounter++,
          this.redrawLayer())
      },
      sortTilesFromCenterOut: function(e) {
          var t, n, i = [], s = e.getCenter();
          for (t = e.min.y; t <= e.max.y; t++)
              for (n = e.min.x; n <= e.max.x; n++)
                  i.push(new L.Point(n,t));
          return i.sort(function(e, t) {
              return e.distanceTo(s) - t.distanceTo(s)
          }),
          i
      },
      redrawFinished: function() {
          this.latestParams.sea !== this.hasSea && (t.toggleClass(document.body, this.latestParams.sea, "sea"),
          this.hasSea = this.latestParams.sea,
          i.emit("toggleSeaMask", this.hasSea)),
          i.emit("rendered", "tileLayer")
      },
      drawTile: function(e, t) {
          this._adjustTilePoint(t);
          var n = i.whichTile(t, this.latestParams);
          s.loadTile(n).then(this.renderTile.bind(this, 2, e, this.syncCounter, n))
      },
      init: function(e) {
          this.latestParams = t.clone(e)
      },
      renderTile: e
  })
}),
/*! */
W.define("dataLoader", ["store", "lruCache", "rootScope", "utils", "broadcast"], function(u, e, t, n, i) {
  var s = new e(50)
    , h = 0
    , a = t.isMobile ? 3 : 6;
  var f = document.createElement("canvas")
    , m = f.getContext("2d");
  function r(e, t) {
      return this.url = e,
      this.status = "undefined",
      this.data = null,
      this.x = t.x,
      this.y = t.y,
      this.z = t.z,
      this.transformR = t.transformR,
      this.transformG = t.transformG,
      this.transformB = t.transformB,
      this
  }
  return r.prototype.load = function() {
      var d = this;
      return this.status = "loading",
      this.promise = new Promise(function(l, e) {
          var c = new Image;
          c.crossOrigin = "Anonymous",
          c.onload = function() {
              f.width = c.width,
              f.height = c.height,
              m.drawImage(c, 0, 0, c.width, c.height);
              var e = m.getImageData(0, 0, c.width, c.height);
              d.data = e.data,
              d.status = "loaded";
              var t = function(e, t) {
                  var n, i, s, a, r = new ArrayBuffer(28), o = new Uint8Array(r), l = new Float32Array(r), c = 4 * t * 4 + 8;
                  for (a = 0; a < 28; a++)
                      n = e[c],
                      i = e[c + 1],
                      s = e[c + 2],
                      n = Math.round(n / 64),
                      i = Math.round(i / 16),
                      s = Math.round(s / 64),
                      o[a] = (n << 6) + (i << 2) + s,
                      c += 16;
                  return l
              }(d.data, 257)
                , n = t[0]
                , i = (t[1] - t[0]) / 255
                , s = t[2]
                , a = (t[3] - t[2]) / 255
                , r = t[4]
                , o = (t[5] - t[4]) / 255;
              u.set("lastModified", parseInt(t[6])),
              d.decodeR = d.transformR ? function(e) {
                  return d.transformR(e * i + n)
              }
              : function(e) {
                  return e * i + n
              }
              ,
              d.decodeG = d.transformG ? function(e) {
                  return d.transformG(e * a + s)
              }
              : function(e) {
                  return e * a + s
              }
              ,
              d.decodeB = d.transformB ? function(e) {
                  return d.transformB(e * o + r)
              }
              : function(e) {
                  return e * o + r
              }
              ,
              h = 0,
              l(d)
          }
          ,
          c.onerror = function() {
              d.status = "failed",
              i.emit("loadingFailed", d.url),
              ++h > a && (i.emit("noConnection"),
              h = 0),
              e("Failed to load tile")
          }
          ,
          c.src = d.url,
          (c.complete || void 0 === c.complete) && (c.src = n.emptyGIF,
          c.src = d.url)
      }
      ),
      this.promise
  }
  ,
  {
      loadTile: function(e) {
          var t = e.url
            , n = s.get(t);
          if (!n)
              return n = new r(t,e),
              s.put(t, n),
              n.load();
          switch (n.status) {
          case "loaded":
              return Promise.resolve(n);
          case "loading":
              return n.promise;
          case "failed":
              return s.remove(t),
              Promise.reject("Failed to load tile")
          }
      }
  }
}),
/*! */
W.define("render", ["Evented"], function(e) {
  var h = e.instance({
      ident: "render"
  });
  h.zoom2zoom = {
      radar: [0, 0, 1, 2, 3, 4, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
      ultra: [0, 0, 0, 2, 3, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
      high: [0, 0, 0, 2, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
      normal: [0, 0, 0, 2, 2, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
      low: [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3]
  },
  h.getTrans = function(e, t) {
      return h.tileW(e) / h.tileW(t)
  }
  ,
  h.tileW = function(e) {
      return Math.pow(2, e)
  }
  ;
  var i = Object.keys(h.zoom2zoom);
  h.getDataZoom = function(e, t) {
      var n = e.upgradeDataQuality ? i[Math.max(i.indexOf(e.dataQuality) - 1, 0)] : e.dataQuality;
      return Math.min(e.maxTileZoom, h.zoom2zoom[n][t])
  }
  ,
  h.whichTile = function(e, t) {
      var n = e.z
        , i = h.getDataZoom(t, n)
        , s = h.tileW(i)
        , a = h.getTrans(n, i)
        , r = Math.floor(e.x / a)
        , o = Math.floor(e.y / a)
        , l = e.x % a
        , c = e.y % a
        , d = n - i
        , u = t.fullPath.replace("<z>", i).replace("<y>", o).replace("<x>", r);
      return r < 0 || o < 0 || s <= r || s <= o ? null : {
          url: u,
          x: r,
          y: o,
          z: i,
          intX: l,
          intY: c,
          intZ: d,
          trans: a,
          transformR: t.transformR || null,
          transformG: t.transformG || null,
          transformB: t.transformB || null
      }
  }
  ,
  h.testJPGtransparency = function(e, t) {
      return 192 & e[t + 2] || 192 & e[t + 6] || 192 & e[t + 1030] || 192 & e[t + 1034]
  }
  ,
  h.testPNGtransparency = function(e, t) {
      return !(e[t + 3] && e[t + 7] && e[t + 1028 + 3] && e[t + 1028 + 7])
  }
  ,
  h.wTables = {},
  h.getWTable = function(e) {
      if (e in h.wTables)
          return h.wTables[e];
      var t, n, i, s = 0;
      if (!(e <= 32))
          return null;
      for (t = new Uint16Array(4 * e * e),
      i = 0; i < e; i++)
          for (n = 0; n < e; n++)
              t[s++] = (e - i) * (e - n),
              t[s++] = (e - i) * n,
              t[s++] = i * (e - n),
              t[s++] = n * i;
      return h.wTables[e] = t
  }
  ,
  h.createCombinedFillFun = function(s, e, t, m) {
      var p = e.colors
        , g = t.colors
        , v = e.value2index.bind(e)
        , y = t.value2index.bind(t)
        , w = h.createFillFun(s, 2, e)
        , b = h.createFillFun(s, 2, t)
        , T = function(e, t, n, i) {
          s[e] = t,
          s[e + 1] = n,
          s[e + 2] = i
      };
      return function(e, t, n, i) {
          var s = m(n, i);
          if (0 < s && s < 4)
              var a = (t << 8) + e << 2
                , r = v(n)
                , o = y(i)
                , l = p[r++]
                , c = p[r++]
                , d = p[r++]
                , u = g[o++]
                , h = g[o++]
                , f = g[o++];
          switch (s) {
          case 0:
              w(e, t, n);
              break;
          case 1:
              T(a, u, h, f),
              T(a + 4, l, c, d),
              T(a + 1024, l, c, d),
              T(a + 1028, l, c, d);
              break;
          case 2:
              T(a, u, h, f),
              T(a + 4, u, h, f),
              T(a + 1024, l, c, d),
              T(a + 1028, l, c, d);
              break;
          case 3:
              T(a, u, h, f),
              T(a + 4, u, h, f),
              T(a + 1024, u, h, f),
              T(a + 1028, l, c, d);
              break;
          case 4:
              b(e, t, i)
          }
      }
  }
  ,
  h.createFillFun = function(l, e, t) {
      var c = t.colors
        , d = t.value2index.bind(t);
      switch (e) {
      case 1:
          return function(e, t, n) {
              var i = (t << 8) + e << 2
                , s = d(n);
              l[i++] = c[s++],
              l[i++] = c[s++],
              l[i] = c[s]
          }
          ;
      case 2:
          return function(e, t, n) {
              var i = (t << 8) + e << 2
                , s = d(n)
                , a = c[s++]
                , r = c[s++]
                , o = c[s];
              l[i] = l[i + 4] = a,
              l[i + 1] = l[i + 5] = r,
              l[i + 2] = l[i + 6] = o,
              l[i += 1024] = l[i + 4] = a,
              l[i + 1] = l[i + 5] = r,
              l[i + 2] = l[i + 6] = o
          }
      }
  }
  ;
  var t = document.createElement("canvas")
    , n = t.getContext("2d");
  return t.width = t.height = 256,
  n.fillStyle = "black",
  n.fillRect(0, 0, 256, 256),
  h.imgData = n.getImageData(0, 0, 256, 256),
  h.interpolateNearest = function(e, t, n, i, s, a, r, o, l, c) {
      null !== e && (r = e[t],
      o = e[t + 1],
      l = e[t + 2],
      c = e[t + 3]);
      var d = Math.max(r, o, l, c);
      return d === r ? n : d === o ? i : d === l ? s : d === c ? a : void 0
  }
  ,
  h
}),
/*! */
W.define("renderers", ["Renderer", "testWebGl", "map", "plugins", "tileLayer", "utils", "tileInterpolator"], function(e, t, n, i, s, a, r) {
  var o = e.extend({
      onopen: function(e) {
          n.hasLayer(s) ? s.paramsChanged.call(s, e) : (s.init(e),
          s.addTo(n),
          s.getContainer().classList.add("overlay-layer"))
      },
      interpolator: r,
      paramsChanged: s.paramsChanged.bind(s),
      redraw: s.redrawLayer.bind(s),
      onclose: function(e) {
          a.contains(e, "tileLayer") || a.contains(e, "tileLayerPatternator") || n.removeLayer.call(n, s)
      }
  })
    , l = {};
  l.tileLayer = o.instance(),
  l.tileLayerPatternator = o.instance({
      dependency: "patternator",
      onopen: function(e) {
          W.require("rainPattern"),
          W.require("ptypePattern"),
          this.onopen = o.onopen.bind(this),
          o.onopen.call(this, e)
      }
  }),
  l.radar = e.instance({
      dependency: "radar",
      onopen: function() {
          this.onopen = i.radar.onopen,
          this.onclose = i.radar.onclose,
          this.redraw = i.radar.onredraw,
          this.interpolator = W.require("radarInterpolator")
      }
  }),
  l.capAlerts = e.instance({
      dependency: "cap-alerts",
      onopen: function() {
          var t = i["cap-alerts"];
          this.onopen = function(e) {
              t.onopen(e),
              t.isOpen = !0
          }
          ,
          this.onclose = function() {
              t.onclose(),
              t.isOpen = !1
          }
      }
  }),
  l.isolines = e.instance({
      dependency: "isolines",
      onopen: function(e) {
          var t = W.require("isolines");
          this.onopen = t.onopen,
          this.onclose = t.onclose,
          this.paramsChanged = t.paramsChanged,
          t.onopen(e)
      }
  });
  var c = e.instance({
      dependency: "particles",
      onopen: function(e) {
          var t = W.require("particlesOld");
          this.paramsChanged = t.paramsChanged,
          this.onclose = t.close,
          this.redraw = t.redraw,
          t.open(e)
      }
  })
    , d = e.instance({
      dependency: "gl-particles",
      onopen: function(e) {
          var t = W.require("gl-particles");
          this.paramsChanged = t.paramsChanged,
          this.onclose = t.close,
          t.open(e) || (l.particles = c,
          this.close(),
          c.open(e))
      }
  });
  return l.particles = t.useGLparticles() ? d : c,
  l
}),
/*! */
W.define("renderCtrl", ["renderers", "layers", "overlays", "broadcast", "utils", "render"], function(a, r, o, e, t, n) {
  var l = Object.keys(a)
    , c = {}
    , d = 0
    , u = 0;
  e.on("paramsChanged", function(n) {
      c = n,
      h();
      var e = o[n.overlay].layers.slice()
        , i = [];
      "off" !== n.isolines && e.unshift(n.isolines + "Isolines");
      var t = e.map(function(e) {
          var t = r[e];
          return i.push(t.renderer),
          {
              renderer: t.renderer,
              params: t.getParams.call(t, n, n.product)
          }
      });
      l.forEach(function(e) {
          var t = a[e];
          i.indexOf(e) < 0 && t.isMounted && t.close.call(t, i)
      });
      var s = [];
      t.forEach(function(e) {
          var t = a[e.renderer];
          t.isMounted ? t.paramsChanged.call(t, e.params) : s.push(t.open.call(t, e.params))
      }),
      0 < s.length && Promise.all(s).catch(window.wError.bind(null, "renderCtrl", "Unable to load render"));
      d = t.length,
      u = setTimeout(f, 5e3)
  }),
  e.on("movestart", function() {
      var e = o[c.overlay];
      d = e && e.layers.length
  }),
  e.on("redrawLayers", function() {
      d = 0,
      t.each(a, function(e) {
          e.isMounted && (e.redraw(),
          d++)
      })
  }),
  n.on("rendered", function() {
      0;
      --d <= 0 && (h(),
      i())
  });
  var i = t.debounce(function() {
      return e.emit.call(e, "redrawFinished", c)
  }, 200);
  function h() {
      clearTimeout(u),
      u = 0
  }
  function f() {
      d = 0,
      e.emit("redrawFinished", c)
  }
}),
/*! */
W.define("particles", ["Particles"], function(e) {
  return {
      wind: e.instance({
          configurable: !0,
          multiplier: {
              constant: 50,
              pow: 1.6,
              zoom: 2
          },
          velocity: {
              max: .1,
              damper: 1e-5
          },
          glSpeedCurvePowParam: .7,
          glMinSpeedParam: 1.5,
          glMaxSpeedParam: 30,
          glParticleWidth: 1.3,
          glParticleLengthEx: .1,
          glSpeedPx: 100,
          glCountMul: 1
      }),
      currents: e.instance({
          multiplier: {
              constant: 50,
              pow: 1.5,
              zoom: 2
          },
          velocity: {
              max: .4,
              damper: .35
          },
          glSpeedCurvePowParam: .4,
          glMinSpeedParam: .2,
          glMaxSpeedParam: 1.2,
          glParticleWidth: .6,
          glParticleLengthEx: .1,
          glSpeedPx: 50,
          glVelocity: 1,
          glOpacity: 1.3,
          glBlending: 1.05,
          glCountMul: 4,
          getBlendingAlpha: function() {
              return .96
          }
      }),
      waves: e.instance({
          animation: "wavecle",
          styles: ["rgba(100,100,100,0.25)", "rgba(150,150,150,0.3)", "rgba(200,200,200,0.35)", "rgba(255,255,255,0.4)"],
          lineWidth: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
          multiplier: {
              constant: 50,
              pow: 1.3,
              zoom: 2
          },
          velocity: {
              max: .02,
              damper: .015
          },
          glSpeedCurvePowParam: 1,
          glMinSpeedParam: .5,
          glMaxSpeedParam: 10,
          glParticleWidth: 5.5,
          glParticleLengthEx: 1,
          glSpeedPx: 8,
          glVelocity: 1,
          glOpacity: 1.6,
          glBlending: .93,
          glCountMul: 1.5,
          getIntensityFun: function() {
              return function(e) {
                  return e < 12 ? 0 : e < 25 ? 1 : e < 37 ? 2 : e < 62 ? 3 : e < 75 ? 2 : e < 85 ? 1 : 0
              }
          },
          getStyles: function() {
              return this.styles
          },
          getBlendingAlpha: function() {
              return .9
          }
      })
  }
}),
/*! */
W.define("interpolator", ["renderers"], function(n) {
  var i = function() {
      return null
  };
  return function(e) {
      var t = function() {
          for (var e in n) {
              var t = n[e];
              if (t.isMounted && "interpolator"in t)
                  return t.interpolator
          }
      }();
      t ? t.createFun(e) : e(i, i)
  }
}),
/*! */
W.define("tileInterpolator", ["map", "render", "tileLayer", "DataTiler"], function(o, W, t, e) {
  return e.instance({
      createFun: function(e) {
          return this.cb = e,
          this.getTiles(t.latestParams)
      },
      tilesReady: function(N, e, k) {
          var I = this
            , r = function(e, t) {
              var n = t + I.offsetY >> I.shift
                , i = n >> 8
                , s = n - (i << 8)
                , a = s % I.trans
                , r = e + I.offsetX >> I.shift
                , o = r >> 8
                , l = r - (o << 8)
                , c = l % I.trans
                , d = I.trans
                , u = N && N[i] && N[i][o];
              if (!u)
                  return console.warn("interpolator: Undefined dTile"),
                  NaN;
              var h = u.data
                , f = I.offset + l + (s << 8) + s << 2;
              if (k.PNGtransparency && W.testPNGtransparency(h, f))
                  return NaN;
              if (k.JPGtransparency && W.testJPGtransparency(h, f))
                  return NaN;
              var m = h[f]
                , p = h[f + 4]
                , g = h[f + 1]
                , v = h[f + 5]
                , y = h[f + 2]
                , w = h[f + 6]
                , b = h[f += 1028]
                , T = h[f + 4]
                , L = h[f + 1]
                , S = h[f + 5]
                , A = h[f + 2]
                , E = h[f + 6]
                , C = (d - a) * (d - c)
                , _ = (d - a) * c
                , M = a * (d - c)
                , P = c * a
                , x = d * d
                , D = (m * C + p * _ + b * M + T * P) / x
                , R = k.interpolateNearestG ? W.interpolateNearest(null, 0, g, v, L, S, C, _, M, P) : (g * C + v * _ + L * M + S * P) / x
                , O = (y * C + w * _ + A * M + E * P) / x;
              return [u.decodeR(D), u.decodeG(R), u.decodeB(O)]
          };
          this.cb(function(e) {
              var t = e.lat
                , n = e.lon
                , i = o.latLngToContainerPoint([t, n])
                , s = i.x
                , a = i.y;
              return s < 0 || a < 0 || s > I.width || a > I.height ? null : r.call(I, s, a)
          }, r)
      }
  })
}),
/*! */
W.define("tileLayer", ["TileLayerCanvas"], function(e) {
  return new e
}),
/*! */
W.define("renderTile", ["render", "layers"], function(te, ne) {
  return function(e, t, n, i, s) {
      if (n === this.syncCounter) {
          Date.now();
          e |= 0;
          var a = this.latestParams
            , r = a.isMultiColor
            , o = s.data
            , l = t.getContext("2d")
            , c = te.imgData.data
            , d = void 0;
          a.JPGtransparency ? d = te.testJPGtransparency : a.PNGtransparency && (d = te.testPNGtransparency);
          var u, h, f, m, p, g, v, y, w, b, T, L, S = !1, A = 0 | i.trans, E = 0 | Math.log2(A), C = 0 | Math.log2(A * A), _ = 0 | i.intX, M = 0 | i.intY, P = 256 >> E, x = te.getWTable(A), D = 0, R = 0, O = _ * P | 0, N = M * P | 0, k = 0, I = 0, U = 256, F = 0, z = 0, G = 0, H = 0, B = 0, j = 0, V = 0, q = 0, Y = 0, X = 0, Z = 0, $ = ne[a.layer], J = "B" === a.renderFrom, Q = "RG" === a.renderFrom, K = s.decodeR, ee = s.decodeG;
          for (r ? (w = te.createCombinedFillFun(c, $.getColor(), $.getColor2(), $.getAmountByColor),
          b = te.createFillFun(c, e, $.getColor())) : w = b = te.createFillFun(c, e, $.getColor()),
          J && (K = s.decodeB),
          L = 0; L < 256; L += e)
              for (G = L - ((I = L >> E) << E),
              T = 0; T < 256; T += e)
                  z = T - ((k = T >> E) << E),
                  U !== k && (R = 2056 + k + O + (((F = I + N) << 8) + F) << 2,
                  void 0 !== d && (S = d(o, R)),
                  !0 === J && (R += 2),
                  H = o[R],
                  B = o[R + 4],
                  j = o[R + 1028],
                  V = o[R + 1032],
                  !0 === Q && (q = o[R + 1],
                  Y = o[R + 5],
                  X = o[R + 1029],
                  Z = o[R + 1033]),
                  U = k),
                  S ? b(T, L, NaN) : (v = K(null !== x ? H * x[D = z + (G << E) << 2] + B * x[D + 1] + j * x[D + 2] + V * x[D + 3] >> C : H * (u = (1 - (p = z / A)) * (1 - (g = G / A))) + B * (h = p * (1 - g)) + j * (f = g * (1 - p)) + V * (m = p * g)),
                  !0 === Q && (y = ee(null !== x ? q * x[D] + Y * x[D + 1] + X * x[D + 2] + Z * x[D + 3] >> C : q * u + Y * h + X * f + Z * m)),
                  r ? w(T, L, v, y) : w(T, L, Q ? Math.sqrt(v * v + y * y) : v));
          l.putImageData(te.imgData, 0, 0),
          "pattern"in a && a.pattern in W && W[a.pattern].addPattern(l, A, o, 2056, O, N, P, K, ee),
          t.classList.add("leaflet-tile-loaded"),
          this._tileLoaded()
      }
  }
}),
/*! */
W.define("GlObj", [], function() {
  function t(e, t) {
      void 0 === e && (e = !1),
      void 0 === t && (t = !1),
      this.keepRefs = e,
      this.keepRefsShaders = t,
      this.reset()
  }
  return t.getNextPowerOf2Size = function(e) {
      return 1 << Math.floor(Math.log2(e + e - 1))
  }
  ,
  t.removeFromArray = function(e, t) {
      var n, i = -1;
      for (n = 0; n < t.length; n++)
          t[n] === e && (i = n);
      return -1 < i && t.splice(i, 1),
      i
  }
  ,
  t.prototype = {
      reset: function() {
          this.framebuffers = [],
          this.buffers = [],
          this.shaders = [],
          this.programs = [],
          this.textures = [],
          this.gl = null,
          this.canvas = null
      },
      create: function(e, t, n) {
          if (this._id = n || "noname",
          !this.gl && !this.canvas)
              return this.canvas = e,
              this.gl = e.getContext("webgl", t) || e.getContext("experimental-webgl", t),
              this.gl
      },
      get: function() {
          return this.gl
      },
      getCanvas: function() {
          return this.canvas
      },
      createShader: function(e, t, n) {
          var i = this.get()
            , s = i.createShader(t ? i.VERTEX_SHADER : i.FRAGMENT_SHADER);
          if (this.keepRefsShaders && this.shaders.push(s),
          i.shaderSource(s, e),
          i.compileShader(s),
          i.getShaderParameter(s, i.COMPILE_STATUS))
              return s;
          var a = new Error(i.getShaderInfoLog(s));
          throw a.contextLost = i.isContextLost(),
          a.isVertexShader = t,
          a.name = n,
          a.full = "ERROR compileShader! name: " + a.name + "; " + (a.isVertexShader ? "VS" : "FS") + "; " + (a.contextLost ? "contextLost" : "NOT contextLost") + "; msg: " + a.message,
          a
      },
      createProgramObj: function(e, t, n, i) {
          var s, a, r = this.get(), o = r.createProgram(), l = {
              program: o
          }, c = "";
          if (!o)
              throw (a = new Error).full = "gl.createProgram() is null; name: " + i,
              a;
          if (this.keepRefs && this.programs.push(o),
          o.name = i,
          n && 0 < n.length)
              for (s = 0; s < n.length; s++)
                  c += "#define " + n[s] + "\n";
          var d = this.createShader(c + e, !0, i)
            , u = this.createShader(c + t, !1, i);
          if (r.attachShader(o, d),
          r.attachShader(o, u),
          r.linkProgram(o),
          !r.getProgramParameter(o, r.LINK_STATUS))
              throw (a = new Error(r.getProgramInfoLog(o))).contextLost = r.isContextLost(),
              a.name = i,
              a.full = "ERROR linkProgram! name: " + a.name + "; " + (a.contextLost ? "contextLost" : "NOT contextLost") + "; msg: " + a.message,
              a;
          var h = r.getProgramParameter(o, r.ACTIVE_ATTRIBUTES);
          for (s = 0; s < h; s++) {
              var f = r.getActiveAttrib(o, s);
              l[f.name] = r.getAttribLocation(o, f.name)
          }
          var m = r.getProgramParameter(o, r.ACTIVE_UNIFORMS);
          for (s = 0; s < m; s++) {
              var p = r.getActiveUniform(o, s);
              l[p.name] = r.getUniformLocation(o, p.name)
          }
          return l
      },
      deleteProgramObj: function(e) {
          t.removeFromArray(e, this.programs),
          this.get().deleteProgram(e)
      },
      bindAttribute: function(e, t, n, i, s, a, r) {
          var o = this.get();
          o.bindBuffer(o.ARRAY_BUFFER, e),
          o.enableVertexAttribArray(t),
          o.vertexAttribPointer(t, n, i, s, a, r)
      },
      createTexture2D: function(e, t, n, i, s, a, r) {
          var o = this.get()
            , l = o.createTexture();
          return this.keepRefs && this.textures.push(l),
          l._width = s,
          l._height = a,
          o.bindTexture(o.TEXTURE_2D, l),
          this.setBindedTexture2DParams(e, t, n),
          this.resizeTexture2D(l, i, s, a, r)
      },
      deleteTexture2D: function(e) {
          t.removeFromArray(e, this.textures),
          this.get().deleteTexture(e)
      },
      bindTexture2D: function(e, t, n) {
          var i = this.get();
          i.activeTexture(i.TEXTURE0 + (t || 0)),
          i.bindTexture(i.TEXTURE_2D, e),
          n && i.uniform1i(n, t)
      },
      resizeTexture2D: function(e, t, n, i, s) {
          var a = this.get();
          return s = s || a.RGBA,
          e._width = n,
          e._height = i,
          a.bindTexture(a.TEXTURE_2D, e),
          null === t || t instanceof Uint8Array ? a.texImage2D(a.TEXTURE_2D, 0, s, n, i, 0, s, a.UNSIGNED_BYTE, t) : a.texImage2D(a.TEXTURE_2D, 0, s, s, a.UNSIGNED_BYTE, t),
          a.bindTexture(a.TEXTURE_2D, null),
          e
      },
      setBindedTexture2DParams: function(e, t, n) {
          var i = this.get();
          i.texParameteri(i.TEXTURE_2D, i.TEXTURE_MIN_FILTER, e),
          i.texParameteri(i.TEXTURE_2D, i.TEXTURE_MAG_FILTER, t),
          i.texParameteri(i.TEXTURE_2D, i.TEXTURE_WRAP_S, n),
          i.texParameteri(i.TEXTURE_2D, i.TEXTURE_WRAP_T, n)
      },
      createBuffer: function(e) {
          var t = this.get().createBuffer();
          return this.keepRefs && this.buffers.push(t),
          this.setBufferData(t, e),
          t
      },
      deleteBuffer: function(e) {
          t.removeFromArray(e, this.buffers),
          this.get().deleteBuffer(e)
      },
      setBufferData: function(e, t) {
          var n = this.get();
          n.bindBuffer(n.ARRAY_BUFFER, e),
          n.bufferData(n.ARRAY_BUFFER, t, n.STATIC_DRAW)
      },
      createIndexBuffer: function(e) {
          var t = this.get()
            , n = t.createBuffer();
          return this.keepRefs && this.buffers.push(n),
          t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, n),
          t.bufferData(t.ELEMENT_ARRAY_BUFFER, e, t.STATIC_DRAW),
          n
      },
      createFramebuffer: function() {
          var e = this.get().createFramebuffer();
          return this.keepRefs && this.framebuffers.push(e),
          e
      },
      deleteFramebuffer: function(e) {
          t.removeFromArray(e, this.framebuffers),
          this.get().deleteFramebuffer(e)
      },
      bindFramebuffer: function(e, t) {
          var n = this.get();
          n.bindFramebuffer(n.FRAMEBUFFER, e),
          t && n.framebufferTexture2D(n.FRAMEBUFFER, n.COLOR_ATTACHMENT0, n.TEXTURE_2D, t, 0)
      },
      release: function() {
          if (this.gl) {
              var e = this.get();
              e.flush(),
              e.finish();
              var t, n, i = this.textures.length;
              for (t = 0; t < i; t++)
                  n = this.textures[t],
                  e.isTexture(n) && e.deleteTexture(n);
              for (i = this.programs.length,
              t = 0; t < i; t++)
                  n = this.programs[t],
                  e.isProgram(n) && e.deleteProgram(n);
              for (i = this.shaders.length,
              t = 0; t < i; t++)
                  n = this.shaders[t],
                  e.isShader(n) && e.deleteShader(n);
              for (i = this.buffers.length,
              t = 0; t < i; t++)
                  n = this.buffers[t],
                  e.isBuffer(n) && e.deleteBuffer(n);
              for (i = this.framebuffers.length,
              t = 0; t < i; t++)
                  n = this.framebuffers[t],
                  e.isFramebuffer(n) && e.deleteFramebuffer(n);
              this.reset()
          }
      }
  },
  t
}),
/*! */
W.define("testWebGl", ["GlObj", "store", "storage", "rootScope"], function(e, a, r, o) {
  return {
      shRectVS: "\n\tattribute vec2 aPos;\n\tvarying vec2 vTc;\n\tvoid main(void) {\n\t\tgl_Position = vec4( aPos, 0.0, 1.0 );\n\t\tvTc = aPos.xy * 0.5 + 0.5;\n\t}\n",
      shEncodeDecodeFS: "\n\tprecision highp float;\n\tuniform vec4 uPars;\n\tuniform sampler2D sTex0;\n\tvarying vec2 vTc;\n\tvoid main(void) {\n\t\tvec4 tex0 = texture2D( sTex0, vTc );\n\t\tvec2 pos = tex0.ba + tex0.rg * uPars.x;\n\t\tvec2 rg = fract( pos * uPars.y + uPars.z );\n\t\tgl_FragColor.ba = pos + rg * uPars.w;\n\t\tgl_FragColor.rg = rg;\n\t}\n",
      retOk: "ok",
      glo: new e,
      useRadar: function() {
          var e = !1;
          try {
              e = this.useRadarInner()
          } catch (e) {
              window.wError("testWebGl", "Error testing radar", e)
          }
          return this.glo.release(),
          e
      },
      useRadarInner: function() {
          var t = this
            , n = "radarTest01"
            , e = r.get(n)
            , i = window.navigator.userAgent
            , s = function() {
              var e = t.runRadarTest();
              return r.put(n, {
                  status: e,
                  ua: i
              }),
              e === t.retOk
          };
          return e && e.ua === i ? e.status === this.retOk : s()
      },
      runRadarTest: function() {
          return this.status = "error-unspecified",
          this.status
      },
      useGLparticles: function() {
          var e = !1;
          try {
              e = this.useGLparticlesInner()
          } catch (e) {
              0,
              window.wError("testWebGl", "useGLparticles", e)
          }
          return this.glo.release(),
          e
      },
      useGLparticlesInner: function() {
          var t = this
            , e = a.get("disableWebGL")
            , n = r.get("webGLtest3")
            , i = window.navigator.userAgent
            , s = function() {
              var e = t.runParticlesTest();
              return r.put("webGLtest3", {
                  status: e,
                  ua: i
              }),
              e === t.retOk
          };
          return "desktop" === o.platform && "embed2" !== W.target && (!e && (n && n.ua === i ? n.status === this.retOk : s()))
      },
      runParticlesTest: function() {
          this.it = {},
          this.status = "error-unspecified";
          try {
              this.initWebGl() && this.runParticlesUpdateTest()
          } catch (e) {
              window.wError("testWebGl", "Unspecified error", e)
          }
          return this.it = null,
          this.status
      },
      runParticlesUpdateTest: function() {
          var e = 0;
          try {
              this.initParticleUpdateTest() && (this.status = this.startParticleUpdateTest(),
              e = this.status === this.retOk ? 2 : 1)
          } catch (e) {
              this.status = "error-in-particle-update-test"
          }
          return e
      },
      compileShader: function(e, t, n, i, s) {
          var a;
          s = s || "testWebGl";
          try {
              a = this.glo.createProgramObj(e, t, n, i)
          } catch (e) {
              0,
              window.wError(s, e.full),
              this.shaderErrors++,
              a = null
          }
          return a
      },
      initWebGl: function() {
          var e = null;
          try {
              this.it.fragment = document.createDocumentFragment();
              var t = document.createElement("canvas");
              this.it.fragment.appendChild(t);
              e = this.glo.create(t, {
                  antialias: !1,
                  depth: !1,
                  stencil: !1,
                  alpha: !0,
                  premultipliedAlpha: !0,
                  preserveDrawingBuffer: !1
              }, "testWebGl"),
              (this.it.gl = e) ? this.it.framebuffer = this.glo.createFramebuffer() : window.WebGLRenderingContext ? this.status = "error-no-WebGL-context" : this.status = "error-no-WebGL-browser"
          } catch (e) {
              window.wError("testWebGl", "initWebGl exception: " + e)
          }
          return e
      },
      startParticleUpdateTest: function() {
          return this.renderParticleUpdateTest(1 / 255.5, 255, .125 / 255, -1 / 255),
          1e3 < this.compareDataFast(this.it.data0, this.it.data1) ? "no-particles-update" : this.retOk
      },
      initParticleUpdateTest: function() {
          var e = this.glo
            , t = e.get();
          if (this.shaderErrors = 0,
          this.it.shEncodeDecode = this.compileShader(this.shRectVS, this.shEncodeDecodeFS, null, "EncodeDecode", "glParticlesTest"),
          0 < this.shaderErrors)
              return !(this.status = "error-shader-compilation");
          this.it.vertexBufferRect = e.createBuffer(new Float32Array([-1, -1, 1, -1, 1, 1, -1, 1])),
          this.it.w = 128,
          this.it.h = 256,
          this.it.data0 = new Uint8Array(this.it.w * this.it.h * 4),
          this.it.data1 = new Uint8Array(this.it.w * this.it.h * 4);
          var n, i, s = 0;
          for (i = 0; i < this.it.h; i++)
              for (n = 0; n < this.it.w; n++)
                  this.it.data0[s++] = n + n,
                  this.it.data0[s++] = n + n + 1,
                  this.it.data0[s++] = i,
                  this.it.data0[s++] = i;
          return this.it.texture0 = e.createTexture2D(t.NEAREST, t.NEAREST, t.REPEAT, this.it.data0, this.it.w, this.it.h),
          this.it.texture1 = e.createTexture2D(t.NEAREST, t.NEAREST, t.REPEAT, this.it.data1, this.it.w, this.it.h),
          !0
      },
      renderParticleUpdateTest: function(e, t, n, i) {
          var s = this.glo
            , a = s.get();
          s.bindFramebuffer(this.it.framebuffer, this.it.texture1),
          a.viewport(0, 0, this.it.w, this.it.h);
          var r = this.it.shEncodeDecode;
          a.useProgram(r.program),
          s.bindAttribute(this.it.vertexBufferRect, r.aPos, 2, a.FLOAT, 0, 8, 0),
          s.bindTexture2D(this.it.texture0, 0, r.sTex0),
          a.uniform4f(r.uPars, e, t, n, i),
          a.drawArrays(a.TRIANGLE_FAN, 0, 4),
          a.readPixels(0, 0, this.it.w, this.it.h, a.RGBA, a.UNSIGNED_BYTE, this.it.data1),
          s.bindFramebuffer(null)
      },
      compareDataFast: function(e, t) {
          for (var n = 0, i = 0; i < e.length; i++) {
              e[i] !== t[i] && ++n
          }
          return n
      }
  }
}),
/*! */
W.define("ImageGraph", ["ImageMaker"], function(e) {
  return e.extend({
      bottomWhitten: !0,
      getY: function(e, t, n, i) {
          return i * (n - e) / (n - t)
      },
      getControlPoint: function(e, t, n) {
          var i = 0;
          return n[1] <= t[1] && e[1] <= t[1] || n[1] >= t[1] && e[1] >= t[1] || (i = n[1] - e[1]),
          [.2 * (n[0] - e[0]) + t[0], .2 * i + t[1]]
      },
      createGradient: function(e, t, n) {
          for (var i, s, a = this.fillColors.length, r = this.fillColors[0][0], o = this.fillColors[a - 1][0], l = 1 / (o - r), c = this.h / (e - t), d = c * (o - t), u = c * (r - t), h = this.ctx.createLinearGradient(0, u, 0, d), f = 0; f < a; ++f)
              s = this.fillColors[f][1],
              i = l * (this.fillColors[f][0] - r),
              h.addColorStop(i, "rgba( " + s[0] + ", " + s[1] + ", " + s[2] + ", " + n + " )");
          return h
      },
      maskEnds: function(e) {
          var t = this.ctx
            , n = t.createLinearGradient(0, 0, e, 0);
          return t.globalCompositeOperation = "destination-out",
          n.addColorStop(0, "rgba(255,255,255,1)"),
          n.addColorStop(1, "rgba(255,255,255,0)"),
          t.fillStyle = n,
          t.fillRect(0, 0, e, this.h),
          (n = t.createLinearGradient(this.w - e, 0, this.w, 0)).addColorStop(0, "rgba(255,255,255,0)"),
          n.addColorStop(1, "rgba(255,255,255,1)"),
          t.fillStyle = n,
          t.fillRect(this.w - e, 0, this.w, this.h),
          this
      },
      findMinMax: function(e) {
          return [Math.min.apply(Math, e), Math.max.apply(Math, e)]
      },
      render: function(e, t) {
          void 0 === t && (t = 1),
          this.checkData(e);
          var n, i, s = this.ctx, a = e.length, r = this.tdWidth, o = r >> 1, l = this.h, c = [], d = -r - o, u = this.findMinMax(e), h = u[0], f = u[1];
          for (i = 0; i < a + 4; ++i)
              n = e[Math.max(0, Math.min(i - 2, a - 1))],
              c.push([d, this.getY(n, h, f, l), n]),
              d += r;
          for (i = 0; i < a; ++i)
              c[i + 2][1] = .6 * c[i + 2][1] + .15 * (c[i + 1][1] + c[i + 3][1]) + .05 * (c[i][1] + c[i + 4][1]);
          for (s.beginPath(),
          s.moveTo(c[1][0], l),
          s.lineTo(c[1][0], c[1][1]),
          i = 0; i < a + 1; ++i) {
              var m = this.getControlPoint(c[i], c[i + 1], c[i + 2])
                , p = this.getControlPoint(c[i + 3], c[i + 2], c[i + 1]);
              s.bezierCurveTo(m[0], m[1], p[0], p[1], c[i + 2][0], c[i + 2][1])
          }
          return s.lineTo(c[a + 2][0], l),
          this.fillColors ? (s.fillStyle = this.createGradient(h, f, t),
          s.fill()) : (s.lineWidth = this.lineWidth,
          s.strokeStyle = this.strokeStyle,
          s.stroke()),
          this.bottomWhitten && this.whiteBottom(s, t),
          this
      },
      whiteBottom: function(e, t) {
          var n = .5 * this.h
            , i = e.createLinearGradient(0, n, 0, this.h);
          t < 1 && (e.globalCompositeOperation = "destination-out"),
          i.addColorStop(0, "rgba(255,255,255,0.0)"),
          i.addColorStop(1, "rgba(255,255,255,1.0)"),
          e.fillStyle = i,
          e.fillRect(0, n, this.w, .5 * this.h)
      }
  })
}),
/*! */
W.define("ImageMaker", ["utils", "Class"], function(t, e) {
  return e.extend({
      canvasRatio: Math.min(window.devicePixelRatio || 1, 2),
      getPixelRatioAdjustedSize: function(e) {
          return Math.round(e * this.canvasRatio)
      },
      init: function(e, t, n, i) {
          var s = t * n;
          return this.num = t,
          this.canvas = e,
          this.ctx = this.canvas.getContext("2d"),
          this.tdWidth = n,
          this.w = s,
          this.h = i,
          this.canvas.width = t * this.getPixelRatioAdjustedSize(n),
          this.canvas.height = this.getPixelRatioAdjustedSize(i),
          this.canvas.style.width = s + "px",
          this.canvas.style.height = i + "px",
          this.resetCanvas()
      },
      mixinCanvas: function(e) {
          return t.include(this, e),
          this
      },
      setHeight: function(e) {
          return this.h = e,
          this
      },
      setOffset: function(e) {
          return this.ctx.translate(0, e),
          this
      },
      resetCanvas: function() {
          return this.ctx.setTransform(1, 0, 0, 1, 0, 0),
          this.ctx.scale(this.canvasRatio, this.canvasRatio),
          this
      },
      checkData: function(e) {
          for (var t, n = e[0] || 0, i = 0; i < e.length; i++)
              null === (t = e[i]) || isNaN(t) || void 0 === t ? e[i] = n : n = t
      }
  })
}),
/*! */
W.define("iMaker", ["ImageMaker", "ImageGraph"], function(e, t) {
  return {
      canvas: e.extend({}),
      temp: t.extend({
          fillColors: [[203, [255, 209, 233, 255]], [219, [183, 225, 255, 255]], [233, [229, 137, 255, 255]], [243, [153, 170, 255, 255]], [258, [192, 195, 243, 255]], [263, [251, 206, 241, 255]], [268, [195, 251, 253, 255]], [272, [197, 219, 255, 255]], [274, [206, 255, 203, 255]], [278, [171, 245, 166, 255]], [283, [238, 239, 175, 255]], [288, [239, 221, 198, 255]], [293, [241, 205, 205, 255]], [298, [247, 214, 241, 255]], [303, [248, 218, 249, 255]], [308, [222, 213, 253, 255]], [331, [208, 200, 251, 255]]],
          findMinMax: function(e) {
              var t = Math.min.apply(Math, e)
                , n = Math.max.apply(Math, e);
              t -= 1;
              var i = (n = (t -= Math.round(.05 * (n - t))) + Math.round(n - t)) - t;
              return i < 10 && (i = Math.round(.5 * (10 - i)),
              t -= Math.round(.5 * i),
              n += Math.round(1.5 * i)),
              [t, n]
          }
      }),
      dayNight: e.extend({
          nightColor: "rgba(234,234,245,1)",
          render: function(e) {
              for (var t = e.isDay, n = 0; n < t.length; n++) {
                  var i = t[n]
                    , s = n * this.tdWidth
                    , a = (n + 1) * this.tdWidth
                    , r = s + Math.abs(i) * this.tdWidth;
                  this.ctx.fillStyle = this.nightColor,
                  1 === i ? this.ctx.clearRect(s, 0, a, this.h) : 0 === i ? this.ctx.fillRect(s, 0, a, this.h) : i < 0 ? (this.ctx.clearRect(s, 0, r, this.h),
                  this.ctx.fillRect(r, 0, a, this.h)) : (this.ctx.fillRect(s, 0, r, this.h),
                  this.ctx.clearRect(r, 0, a, this.h))
              }
              return this
          }
      })
  }
}),
/*! */
W.define("weatherRender", ["rootScope", "$", "iMaker", "utils", "trans", "overlays", "colors", "Class"], function(r, l, c, n, d, o, t, e) {
  return e.extend({
      weatherData: function(e, t) {
          var n = t.days;
          void 0 === n && (n = 7);
          var i = t.history
            , s = Object.keys(e.summary)
            , a = e.summary;
          n = n || 7,
          a[s[s.length - 1]].segments < 3 && s.pop(),
          !i && a[s[1]].timestamp < Date.now() && s.shift(),
          s.length > n && (s = s.slice(0, n));
          var r = a[s[0]].index
            , o = a[s[s.length - 1]].index + a[s[s.length - 1]].segments;
          for (var l in this.dataLength = o - r,
          e.data)
              r && e.data[l].splice(0, r),
              e.data[l].splice(this.dataLength);
          return this.json = e,
          this.data = e.data,
          this.usedDays = s,
          this.data
      },
      giveMeDays: function(e) {
          for (var t = 0; t < this.usedDays.length; t++) {
              var n = this.usedDays[t];
              e(this.json.summary[n], this.json.summary[n].segments, n)
          }
      },
      renderSliderDays: function() {
          var i = this
            , s = ""
            , a = this.options.iconSize || 25;
          return this.giveMeDays(function(e, t) {
              var n = e.warning && /^[SE]/.test(e.warning) ? "_alert" : "";
              s += '<td width="' + 100 * t / i.dataLength + '%"',
              s += 3 < t ? ' data-afterbegin="' + e.weekday + '2"><img\n\t\t\t\tsrc="' + r.iconsDir + "/png_" + a + "px/" + e.icon + n + '.png"\n\t\t\t\tsrcset="' + r.iconsDir + "/png_" + a + "@2x/" + e.icon + n + '.png 2x"><big>\n\t\t\t\t' + o.temp.convertNumber(e.tempMax) + "°</big></td>" : ">&nbsp;</td>"
          }),
          s
      },
      renderSlider: function() {
          var e = t.windDetail.getColor.call(t.windDetail).color.bind(t.windDetail);
          return "linear-gradient(to right, " + this.data.wind.map(e).join(", ") + " )"
      },
      renderRainSnow: function() {
          for (var e = this.dataLength, t = "", n = this.data.snow, i = this.data.mm, s = 0; s < e; s++) {
              var a = null;
              n[s] && .1 < i[s] ? a = "&#xe000" : !n[s] && .5 < i[s] && (a = "&#xe006"),
              a && (t += '<i style="left: ' + s / e * 100 + '%">' + a + "</i>")
          }
          return t
      },
      renderAlert: function(t) {
          return "linear-gradient(to right, " + this.data.ts.map(function(e) {
              return n.contains(t, e) ? "rgba(208, 4, 0, 0.65)" : "transparent"
          }).join(", ") + " )"
      },
      renderFragment: function(e, t, n) {
          void 0 === n && (n = {}),
          this.options = n,
          t && this.weatherData(t, n);
          var i = l("table", e)
            , s = i.clientWidth / this.dataLength;
          c.temp.init(l("canvas", e), this.dataLength, s, n.bgHeight).render(this.data.temp, .5).maskEnds(10),
          l(".slider", e).style.background = this.renderSlider(),
          i.innerHTML = "<tr> " + this.renderSliderDays() + "</tr>";
          var a = l(".alerts-line", e);
          if (n.timestamps && a ? (a.style.background = this.renderAlert(n.timestamps),
          a.style.display = "block") : a && (a.style.display = "none"),
          n.addRain) {
              var r = this.renderRainSnow()
                , o = l(".slider-rain", e);
              r && o ? (o.innerHTML = r,
              o.style.display = "block") : o && (o.style.display = "none")
          }
          d.translateDocument(e)
      }
  })
}),
/*! */
W.define("searchCtrl", ["$", "broadcast", "results", "query"], function(e, t, n, i) {
  var s = e("#search .delete");
  s.onmousedown = l,
  e("#search .cancel-search").onmousedown = r,
  i.element.onblur = r,
  i.element.onfocus = function() {
      a.hasFocus = !0,
      i.element.addEventListener("keydown", c),
      i.element.addEventListener("keyup", o),
      3 < i.element.value.length && s.classList.add("show");
      t.emit("closeAll"),
      document.body.classList.add("onsearch"),
      n.show()
  }
  ,
  t.on("focusRqstd", function() {
      return i.element.focus()
  });
  var a = {
      hasFocus: !1,
      blur: r
  };
  function r() {
      a.hasFocus = !1,
      n.hide(),
      i.element.removeEventListener("keydown", c),
      i.element.removeEventListener("keyup", o),
      s.classList.remove("show"),
      document.body.classList.remove("onsearch"),
      t.emit("searchBlur")
  }
  function o(e) {
      var t = e.target.value;
      i.value !== t && (2 < t.length ? s.classList.add("show") : s.classList.remove("show"),
      i.put(t),
      n.show())
  }
  function l(e) {
      i.set(""),
      n.show(),
      s.classList.remove("show"),
      i.element.focus(),
      e && (e.stopPropagation(),
      e.preventDefault())
  }
  function c(e) {
      var t = e.keyCode;
      27 === t ? i.value ? l() : i.element.blur() : n.onkeypress(t, e),
      e.stopPropagation()
  }
  return a
}),
/*! */
W.define("results", ["store", "$", "utils", "rootScope", "broadcast", "maps", "recents", "query", "http", "geolocation", "Favs"], function(c, a, r, o, l, d, u, h, f, n, m) {
  return {
      el: a("#search"),
      marker: null,
      isOpen: !1,
      index: -1,
      mixRatio: [10, 9, 4, 4, 3, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      opacity: [1, 1, 1, .95, .9, .8, .7, .6, .4, .2, .1],
      recents: [],
      hits: [],
      data: [],
      clickTimer: null,
      maxResults: 10,
      element: a("#search .results"),
      elementData: a("#search .results-data"),
      image: a('#search img[data-do="hit"]'),
      onkeypress: function(e, t) {
          var n;
          switch (e) {
          case 40:
              this.colorize(1),
              t.preventDefault(),
              t.stopPropagation();
              break;
          case 38:
              this.colorize(-1),
              t.preventDefault(),
              t.stopPropagation();
              break;
          case 9:
          case 13:
              (n = a(".active", this.element)) ? this.doAction(n, t) : (this.colorize(null, 0),
              setTimeout(this.doAction.bind(this, a(".active", this.element), t), 1e3))
          }
      },
      doAction: function(e, t) {
          var n, i;
          e && e.dataset && (n = e.dataset.name,
          i = e.dataset.value,
          t && (t.preventDefault(),
          t.stopPropagation()),
          "next" === n ? this.show(this.data, parseInt(i)) : this.fireAction(this.data[i], t.shiftKey, i))
      },
      fireAction: function(e, t, n) {
          var i = h.get();
          e.zoom = 7,
          e.name = e.name || e.title,
          e.source = "search";
          var s = "wx" === e.type ? "station" : e.icao ? "airport" : "detail";
          l.emit("rqstOpen", s, r.clone(e)),
          this.hide(),
          h.element.blur(),
          l.emit("log", "search/" + (e.key ? "recents" : "results")),
          u.addItem(e, i);
          var a = "/search/put/v1.0?q=" + i + "&name=" + e.name + "&lat=" + e.lat + "&lon=" + e.lon + "&type=" + e.type + "&lang=" + o.prefLang + "&country=" + e.country + "&region=" + e.region + "&counter=" + (e.key ? e.counter : 0) + "&position=" + n;
          e.bounds && (a += "&bounds=" + JSON.stringify(e.bounds)),
          f.get(a, {
              cache: !1
          })
      },
      colorize: function(e, t) {
          var n = this.element.querySelectorAll("a", this.element);
          if (n.length) {
              this.index = e ? Math.min(Math.max(this.index + e, 0), n.length - 1) : t;
              var i = n[this.index]
                , s = a(".active", this.element);
              s && s.classList.remove("active"),
              i.classList.add("active"),
              this.mapize(i)
          }
      },
      newItem: function(e, t, n, i, s) {
          var a = this
            , r = document.createElement("a");
          return r.dataset.name = e,
          r.dataset.value = t,
          r.innerHTML = s,
          r.className = "type-" + i,
          r.ontouchend = r.onclick = function(e) {
              a.doAction(r, e),
              e.preventDefault(),
              e.stopPropagation()
          }
          ,
          r.onmouseenter = function() {
              return a.colorize(null, n)
          }
          ,
          r.onmouseleave = function() {
              return r.classList.remove("active")
          }
          ,
          r.onmousedown = function(e) {
              e.preventDefault(),
              e.stopPropagation()
          }
          ,
          r
      },
      load: function() {
          var n = this;
          h.showLoader(),
          f.get("/search/get/v2.1/" + this.pos.lat + "/" + this.pos.lon + "/" + h.get().replace(/\//g, " ") + "?lang=" + this.lang).then(function(e) {
              var t = e.data;
              void 0 === t && (t = {}),
              h.hideLoader(),
              n.hits = t.data,
              "2airports" === (t.header && t.header.type) ? l.emit("rqstOpen", "distance", n.hits) : n.display()
          }).catch(h.hideLoader)
      },
      show: function() {
          var e = this
            , t = h.get();
          this.pos = n.getMyLatestPos(),
          this.lang = c.get("usedLang"),
          this.recents = u.loadRecents(t),
          this.hits = [],
          this.element.classList.remove("wide"),
          this.index = -1,
          this.display(),
          this.element.style.display = "block",
          this.element.classList.add("show"),
          this.isOpen = !0,
          this.clickTimer && clearTimeout(this.clickTimer),
          1 < t.length && (this.clickTimer = setTimeout(function() {
              return e.load(t)
          }, 300))
      },
      display: function() {
          var e = c.get("country")
            , t = this.mixRatio[h.get().length] || 1;
          if (this.elementData.innerHTML = "",
          this.recents = this.recents.slice(0, t),
          this.hits.length && this.recents.length) {
              var n = this.recents.map(function(e) {
                  return e.key
              });
              this.hits = this.hits.filter(function(e) {
                  return n.indexOf(m.key(e)) < 0
              })
          }
          this.data = this.recents.concat(this.hits);
          for (var i = 0, s = Math.min(this.data.length, this.maxResults); i < s; i++) {
              var a = this.data[i]
                , r = a.title
                , o = void 0;
              r === a.region && (a.region = null),
              (r === a.country || "us" !== a.cc && e === a.cc) && (a.country = null),
              a.icao ? o = a.icao : "wx" === a.type && a.id ? (o = a.id.replace(/^.*-/, ""),
              r = "Wx station: " + (r || o)) : o = a.region && a.country ? a.region + ", " + a.country : a.country || a.region || "";
              var l = this.newItem("hit", i, i, a.type, r + (o ? " <span>" + o + "</span>" : ""));
              l.style.opacity = this.opacity[i],
              this.elementData.appendChild(l)
          }
      },
      hide: function() {
          this.isOpen = !1,
          this.element.classList.remove("show"),
          this.element.style.display = "none",
          this.element.classList.remove("wide"),
          this.marker && d.removeLayer(this.marker),
          this.image.src = r.emptyGIF
      },
      mapize: function(e) {
          if (e && "hit" === e.dataset.name) {
              this.marker && d.removeLayer(this.marker);
              var t = e.dataset.value
                , n = this.data[t]
                , i = +n.lat
                , s = +n.lon
                , a = n.bounds;
              this.marker = L.marker([i, s], {
                  icon: d.myMarkers.icon
              }).addTo(d),
              this.element.classList.add("wide"),
              this.image.src = "https://image.maps.api.here.com/mia/1.6/mapview?w=280&t=3&h=280&f=1" + (a ? "&bbox=" + a[1] + "," + a[2] + "," + a[0] + "," + a[3] : "&c=" + i + "%2C" + s + "&z=10") + "&" + o.hereMapsID,
              this.image.dataset.value = t
          }
      }
  }
}),
/*! */
W.define("recents", ["Favs", "favs"], function(e, s) {
  return e.instance({
      ident: "recents4",
      loadRecents: function(e) {
          var t, n, i;
          return n = this.get(2, e, "timestamp"),
          t = this.get(7, e, "counter", n),
          n = n.concat(t),
          i = s.get(7, e, "counter", n),
          n.concat(i)
      },
      _init: function() {
          this.load()
      },
      addItem: function(e, t) {
          this.isFav(e) ? this.hit(e, t) : this.add(e, t)
      },
      add: function(e, t) {
          e.counter = 1,
          e.timestamp = Date.now(),
          e.query = t,
          this.data[this.key(e)] = e,
          this.onchange(),
          this.save()
      }
  })
}),
/*! */
W.define("query", ["$"], function(e) {
  return {
      element: e("#search #q"),
      value: "",
      put: function(e) {
          this.value = e
      },
      set: function(e) {
          this.put(e),
          this.element.value = e
      },
      get: function() {
          return this.element.value && this.element.value.trim() || ""
      },
      showLoader: function() {
          this.element.classList.add("search-loading")
      },
      hideLoader: function() {
          this.element.classList.remove("search-loading")
      }
  }
}),
/*! */
W.define("Poi", ["map", "Class"], function(e, t) {
  return t.extend({
      minZoom: 5,
      pluginIdent: "detail",
      popupOffset: [20, -15],
      ident: "empty",
      events: ["onmouseover", "onmouseout", "onclick"],
      _init: function() {
          this.markers = {},
          this.data = [],
          this.layer = new L.PoisOverlay(this.ident),
          this.prevZoom = 0,
          this.isActive = !1,
          this.syncCounter = 0,
          this.latestLoaded = {}
      },
      activate: function() {
          var t = this;
          this.isActive = !0,
          e.addLayer(this.layer),
          this.events.forEach(function(e) {
              return t.layer._container[e] = t.event.bind(t, e)
          }),
          this.download()
      },
      event: function(e, t) {
          if (void 0 !== this[e]) {
              for (var n = t && t.target; n && n !== this.layer._container && !n.dataset.id; )
                  n = n.parentNode;
              n.dataset.id && this[e](n.dataset.id, +n.dataset.lat, +n.dataset.lon, n.dataset, t),
              t && t.stopPropagation()
          }
      },
      deactivate: function() {
          this.isActive = !1,
          this.lastUrl = null,
          this.data = [],
          this.cancel(),
          e.removeLayer(this.layer)
      },
      deleteMarker: function(e) {
          this.layer.replaceMarker(e, ""),
          delete this.markers[e]
      },
      display: function() {
          return []
      },
      render: function() {
          var e = this.data
            , t = e.length
            , n = "";
          if (!this.cancelRqstd) {
              0;
              for (var i = 0; i < t; i += this.items) {
                  var s = e[i];
                  if (!(s in this.markers)) {
                      var a = this.display(s, i);
                      if (a.html || a.attrs) {
                          var r = L.latLng(e[i + 1], e[i + 2]);
                          this.markers[s] = r,
                          n += this.layer.getHtml(s, r, a)
                      }
                  }
              }
              this.layer.addPois(n, this.markers)
          }
      },
      delete: function() {
          this.markers = {},
          this.lastUrl = null,
          this.layer.removePois()
      },
      cancel: function() {
          this.syncCounter++
      },
      redraw: function() {}
  })
}),
/*! */
W.define("Favs", ["storage", "utils", "Class"], function(e, d, t) {
  return t.extend({
      ident: null,
      key: function(e) {
          return "string" == typeof e ? e : e.key ? e.key : "station" === e.type ? e.id : "airport" === e.type || e.icao ? e.icao : "alert" === e.type || e.alertId ? e.alertId : d.normalizeLatLon(e.lat) + "/" + d.normalizeLatLon(e.lon)
      },
      add: function(e) {
          if (!d.isValidLatLonObj(e))
              return !1;
          var t = this.key(e)
            , n = {
              key: t,
              lat: +e.lat,
              lon: +e.lon,
              name: e.name || e.lat + ", " + e.lon,
              type: e.type || "fav",
              timestamp: Date.now(),
              counter: 1
          };
          return "alert" === e.type ? n.alertId = e.alertId : "airport" === e.type ? n.icao = e.icao : "station" === e.type && (n.id = e.id),
          this.data[t] = n,
          this.onchange(),
          this.save(),
          !0
      },
      isFav: function(e) {
          return !!this.data[this.key(e)]
      },
      save: function() {
          this.lastModified = Date.now(),
          e.put(this.ident, this.data),
          e.put(this.ident + "_ts", this.lastModified),
          e.put(this.ident + "_trash", this.trash)
      },
      load: function() {
          this.data = e.get(this.ident) || {},
          this.trash = e.get(this.ident + "_trash") || {},
          d.each(this.data, function(e, t) {
              e.type || (e.type = "fav"),
              e.key = t
          })
      },
      onchange: function() {},
      rename: function(e, t) {
          var n = this.data[this.key(e)];
          n && (n.name = n.title = t,
          n.timestamp = Date.now(),
          this.onchange(),
          this.save())
      },
      remove: function(e) {
          var t = this.key(e);
          this.data[t] && (this.trash[t] = {
              timestamp: Date.now()
          },
          delete this.data[t]),
          this.onchange(),
          this.save()
      },
      getAll: function() {
          return this.data
      },
      hit: function(e) {
          var t = this.data[this.key(e)];
          t && (t.counter ? t.counter++ : t.counter = 1,
          t.timestamp = Date.now(),
          this.save())
      },
      sortFavs: function(e, n, t) {
          var i = this
            , s = Object.keys(this.data);
          if (n = n || "counter",
          e)
              try {
                  var a = new RegExp("(?: |^)" + e,"i");
                  s = s.filter(function(e) {
                      return a.test(i.data[e].name) || a.test(i.data[e].icao) || a.test(i.data[e].query)
                  })
              } catch (e) {
                  console.error(e)
              }
          return t && (s = s.filter(function(e) {
              return !d.contains(t, e)
          })),
          s = s.sort(function(e, t) {
              return i.data[t][n] - i.data[e][n]
          })
      },
      get: function(e, t, n, i) {
          for (var s, a, r = [], o = i ? i.map(function(e) {
              return e.key
          }) : null, l = this.sortFavs(t, n, o), c = 0; c < Math.min(e, l.length); c++)
              a = l[c],
              (s = d.clone(this.data[a])).title || (s.title = s.name),
              r[c] = s;
          return r
      }
  })
}),
/*! */
W.define("WindyMap", ["utils", "rootScope"], function(o, s) {
  return L.Map.extend({
      minZoom: 3,
      myMarkers: {
          icon: L.divIcon({
              className: "icon-dot",
              html: '<div class="pulsating-icon"></div>',
              iconSize: [10, 10],
              iconAnchor: [5, 5]
          }),
          pulsatingIcon: L.divIcon({
              className: "icon-dot",
              html: '<div class="pulsating-icon repeat"></div>',
              iconSize: [10, 10],
              iconAnchor: [5, 5]
          }),
          myLocationIcon: L.divIcon({
              className: "icon-dot mylocation",
              html: '<div class="pulsating-icon repeat"></div>',
              iconSize: [10, 10],
              iconAnchor: [5, 5]
          }),
          webcamIcon: L.divIcon({
              className: "iconfont icon-webcam",
              iconSize: [10, 10],
              iconAnchor: [5, 5]
          })
      },
      center: function(e, t) {
          var n = e.zoom ? o.bound(e.zoom, this.minZoom, 20) : this.getZoom();
          if (e.paddingLeft || e.paddingTop) {
              var i = e.paddingLeft || 0
                , s = e.paddingTop || 0
                , a = this.project([e.lat, e.lon], n).subtract([i / 2, s / 2])
                , r = this.unproject(a, n);
              this.setView(r, n, {
                  animate: t
              })
          } else
              this.setView([e.lat, e.lon], n, {
                  animate: t
              });
          return this
      },
      ensurePointVisibleX: function(e, t, n) {
          var i = this.latLngToContainerPoint([e, t]).x;
          i < n && this.panBy([i - n, 0])
      },
      ensurePointVisibleY: function(e, t, n) {
          var i = this.latLngToContainerPoint([e, t]).y;
          i > s.map.height - n && this.panBy([0, i - (s.map.height - n)])
      }
  })
}),
/*! */
W.define("LabelsLayer", ["products", "http", "rootScope", "utils", "overlays", "store", "broadcast"], function(s, a, t, E, e, r, o) {
  return L.TileLayer.extend({
      options: {
          updateWhenIdle: !0,
          unloadInvisibleTiles: !0,
          minZoom: 3,
          maxZoom: 11
      },
      tempConverter: e.temp.convertNumber,
      cityDivs: {},
      latestTs: 0,
      latestIndex: 0,
      ts: r.get("timestamp"),
      hasHooks: !1,
      syncCounter: 0,
      _initContainer: function() {
          this._container || (this._tileContainer = this._container = L.DomUtil.create("div", "leaflet-layer labels-layer"),
          this._map.getPanes().markerPane.appendChild(this._container)),
          this.hasHooks || (this.updateProduct(),
          this.createTilesUrl(),
          this._container.onclick = this.onClick.bind(this),
          r.on("timestamp", this.onTsChange, this),
          r.on("usedLang", this.updateLabels, this),
          r.on("englishLabels", this.updateLabels, this),
          r.on("product", this.updateProduct.bind(this, "refresh")),
          o.on("metricChanged", this.refreshWeather, this),
          this.hasHooks = !0)
      },
      createTilesUrl: function() {
          var e = r.get("englishLabels") ? "en" : r.get("usedLang");
          this.tilesUrl = t.tileServer + "/labels/v1.3/" + e,
          this.fcstUrl = "https://ims-s.windy.com/forecast/citytile/v1.3"
      },
      updateLabels: function() {
          this.createTilesUrl(),
          this._reset()
      },
      updateProduct: function(e) {
          var t = r.get("product");
          s[t].labelsTemp || (t = "ecmwf");
          var n = s[t].refTime();
          if ((this.product !== t || this.refTime !== n) && (this.product = t,
          this.refTime = n,
          e))
              for (var i in this.cityDivs)
                  this.loadFcstTile(this.cityDivs[i])
      },
      onClick: function(e) {
          var t = e && e.target
            , n = t && t.dataset
            , i = n && n.id;
          if (i) {
              var s = i.split("/")
                , a = s[0]
                , r = s[1];
              o.emit("rqstOpen", "detail", {
                  lat: a,
                  lon: r,
                  name: n.label,
                  source: "label",
                  sourceEl: t
              }),
              e.preventDefault(),
              e.stopPropagation()
          }
      },
      onTsChange: function(e) {
          Math.abs(e - this.ts) > 1.5 * E.tsHour && (this.ts = e,
          this.refreshWeather())
      },
      toArray: function() {
          var e = [];
          for (var t in this.cityDivs)
              e = e.concat(this.cityDivs[t].labels);
          return e
      },
      refreshWeather: function() {
          for (var e in this.cityDivs)
              for (var t = this.cityDivs[e], n = t.start, i = t.step, s = t.labels, a = 0; a < s.length; a++)
                  this.renderWeather(n, i, s[a])
      },
      _getTile: function() {
          var e = L.DomUtil.create("div", "leaflet-tile");
          return e.style.width = e.style.height = this._getTileSize() + "px",
          e.onselectstart = e.onmousemove = L.Util.falseFn,
          e
      },
      resetCachesDivs: function() {
          this.syncCounter++,
          this._tiles = {},
          this.cityDivs = {},
          this._container.innerHTML = ""
      },
      _animateZoom: function() {
          this.resetCachesDivs()
      },
      _endZoomAnim: function() {},
      _reset: function() {
          this.resetCachesDivs(),
          this._update()
      },
      loadFcstTile: function(e) {
          e.labels.length && a.get(this.fcstUrl + "/" + this.product + "/" + e.urlFrag).then(this.onFcstLoaded.bind(this, this.syncCounter, e)).catch(function(e) {
              0
          })
      },
      _loadTile: function(e, t) {
          var n = this;
          this._adjustTilePoint(t);
          var i = t.z + "/" + t.x + "/" + t.y;
          a.get(this.tilesUrl + "/" + i + ".json").then(this.onTileLoaded.bind(this, this.syncCounter, t, e)).then(function(e) {
              e && (e.urlFrag = i,
              n.loadFcstTile(e))
          }).catch(function(e) {
              0
          })
      },
      onTileLoaded: function(e, t, n, i) {
          var s = i.data;
          if (e === this.syncCounter)
              return this.cityDivs[t.x + ":" + t.y] = this.renderTile(n, t, s)
      },
      onFcstLoaded: function(e, t, n) {
          var i = this
            , s = n.data;
          if (s && "object" == typeof s && e === this.syncCounter) {
              var a = s.start
                , r = s.step;
              t.start = a,
              t.step = r,
              t.labels.forEach(function(e) {
                  var t = e.id;
                  t in s && (e.data = s[t],
                  i.renderWeather(a, r, e))
              })
          }
      },
      renderTile: function(e, t, n) {
          for (var i = this._getTilePos(t), s = i.x, a = i.y, r = this._map.getPixelOrigin(), o = r.x, l = r.y, c = 256 << t.z, d = [], u = 0; u < n.length; ++u) {
              var h = n[u]
                , f = h[0]
                , m = h[1]
                , p = h[2]
                , g = h[3]
                , v = h[4]
                , y = h[5]
                , w = h[6]
                , b = "ci" !== p.substr(0, 2)
                , T = b ? f : v.toFixed(2) + "/" + g.toFixed(2)
                , L = Math.floor(E.lonDegToXUnit(g) * c - o - y / 2) - s
                , S = Math.floor(E.latDegToYUnit(v) * c - l - w / 2) - a
                , A = document.createElement("div");
              A.textContent = A.dataset.label = m,
              A.dataset.id = T,
              A.className = p,
              A.style.transform = "translate(" + L + "px, " + S + "px)",
              A.style.width = y + "px",
              b || d.push({
                  id: T,
                  el: A
              }),
              e.appendChild(A)
          }
          return e.classList.add("leaflet-tile-loaded"),
          {
              labels: d
          }
      },
      renderWeather: function(e, t, n) {
          var i = n.el
            , s = n.data;
          if (i)
              if (s && s.length) {
                  var a = this.ts - e
                    , r = Math.round(a / (t * E.tsHour));
                  0 <= r && r < s.length ? i.dataset.temp = this.tempConverter(s[r]) + "°" : delete i.dataset.temp
              } else
                  delete i.dataset.temp
      },
      _removeTile: function(e) {
          var t = this._tiles[e];
          t.parentNode === this._tileContainer && this._tileContainer.removeChild(t),
          delete this._tiles[e],
          delete this.cityDivs[e]
      }
  })
}),
/*! */
W.define("maps", ["map"], function(e) {
  return e
}),
/*! */
W.define("map", ["render", "plugins", "WindyMap", "rootScope", "utils", "store", "broadcast", "geolocation", "router"], function(e, t, n, s, a, i, r, o, l) {
  var c, d = 0, u = "location" === i.get("startUp") ? i.get("homeLocation") : l.sharedCoords || o.getMyLatestPos();
  "fallback" === u.source && r.once("newLocation", function(e) {
      e.zoom = 5,
      c.center(e, !0)
  });
  var h = "vn" === i.get("country") ? 11 : 17;
  c = new n("map-container",{
      zoomControl: !1,
      keyboard: !1,
      worldCopyJump: !0,
      zoomAnimationThreshold: 3,
      center: [+u.lat, +u.lon],
      zoom: +u.zoom || 5,
      minZoom: 3,
      maxZoom: h,
      maxBounds: [[-90, -720], [90, 720]]
  }),
  p(),
  g(),
  m(i.get("graticule")),
  c.on("moveend", p),
  c.on("movestart", r.emit.bind(r, "movestart")),
  r.on("zoomIn", c.zoomIn, c),
  r.on("zoomOut", c.zoomOut, c),
  i.on("map", g),
  i.on("graticule", m),
  e.on("toggleSeaMask", function(e) {
      e && !c.seaLayer ? (c.seaLayer = L.tileLayer(s.tileServer + "/tiles/v9.0/grayland/{z}/{x}/{y}.png", {
          minZoom: 3,
          maxZoom: 11
      }).addTo(c),
      c.seaLayer.getContainer().classList.add("sea-mask-layer")) : !e && c.seaLayer && (c.removeLayer(c.seaLayer),
      c.seaLayer = null)
  }),
  c.on("contextmenu", r.emit.bind(r, "rqstOpen", "contextmenu"));
  var f = null;
  function m(e) {
      e && !f && t.graticule.load().then(function() {
          f = (new L.LatLngGraticule).addTo(c)
      }),
      !e && f && (c.removeLayer(f),
      f = null)
  }
  function p() {
      var e = c.getCenter()
        , t = c.getBounds()
        , n = c.getSize()
        , i = c.getZoom();
      s.map = {
          source: "maps",
          lat: e.lat,
          lon: e.wrap().lng,
          south: t._southWest.lat,
          north: t._northEast.lat,
          east: t._northEast.lng,
          west: t._southWest.lng,
          width: n.x,
          height: n.y,
          zoom: i
      },
      i !== d && (a.replaceClass(/zoom\d+/, "zoom" + i),
      d = i),
      r.emit("mapChanged", s.map)
  }
  function g() {
      var e = {
          sznmap: "https://windytiles.mapy.cz/turist-m/{z}-{x}-{y}",
          sat: "https://{s}.aerial.maps.api.here.com/maptile/2.1/maptile/newest/satellite.day/{z}/{x}/{y}/256/jpg?" + s.hereMapsID
      }
        , t = s.tileServer + "/tiles/v9.0/darkmap" + (s.isRetina ? "-retina" : "") + "/{z}/{x}/{y}.png"
        , n = {
          11: {
              url: t
          },
          17: {
              url: e[i.get("map")] || e.sznmap,
              subdomains: "1234"
          }
      };
      c.baseLayer && c.removeLayer(c.baseLayer),
      c.baseLayer = L.TileLayer.multi(n, {
          detectRetina: !1,
          minZoom: 3,
          maxZoom: 17
      }),
      c.baseLayer.addTo(c).getContainer().classList.add("basemap-layer")
  }
  return c
}),
/*! */
W.define("picker", ["Evented"], function(e) {
  return e.instance({
      ident: "picker"
  })
}),
/*! */
W.define("singleclick", ["map", "Evented", "rootScope", "store", "broadcast", "plugins"], function(e, t, n, i, a, r) {
  var s = n.isMobile;
  return t.instance({
      ident: "singleclick",
      hpJustClosed: !1,
      _init: function() {
          t._init.call(this),
          e.on("singleclick", this.opener, this),
          s && i.on("hpShown", this.hpShown, this)
      },
      hpShown: function(e) {
          var t = this;
          e || (this.hpJustClosed = !0,
          setTimeout(function() {
              return t.hpJustClosed = !1
          }, 1e3))
      },
      parseEvent: function(e) {
          return {
              x: e.containerPoint.x,
              y: e.containerPoint.y,
              lat: e.latlng.lat,
              lon: e.latlng.lng,
              source: "singleclick"
          }
      },
      opener: function(e) {
          var t = ["detail", "sounding", "distance", "cap-alerts"];
          if (!this.hpJustClosed) {
              for (var n = this.parseEvent(e), i = 0; i < t.length; i++) {
                  var s = t[i];
                  if (r[s].isOpen)
                      return void this.emit(s, n)
              }
              a.emit("rqstOpen", "picker", n)
          }
      }
  })
}),
/*! */
W.define("favs", ["$", "store", "picker", "http", "broadcast", "utils", "Favs", "Evented"], function(e, t, n, i, s, a, r, o) {
  return o.instance(r, {
      ident: "favs",
      latestParams: {},
      triggeredAlerts: 0,
      _init: function() {
          o._init.call(this),
          this.load(),
          this.debouncedUpdate = a.debounce(this.update.bind(this), 200),
          this.onchange = a.debounce(this.emitChange.bind(this), 1e3),
          s.once("dependenciesResolved", this.checkAlerts, this),
          t.on("detailLocation", this.debouncedUpdate),
          s.on("airportLoaded", this.debouncedUpdate),
          s.on("stationLoaded", this.debouncedUpdate),
          n.on("pickerOpened", this.debouncedUpdate),
          n.on("pickerMoved", this.debouncedUpdate)
      },
      update: function(e) {
          e && (this.latestParams = e),
          this.updateCSS(),
          this.favsMenuOpened && (s.emit("rqstClose", "fav-alert-menu"),
          this.favsMenuOpened = !1)
      },
      hasTimestamps: function(e) {
          return (e = this.getAlert(e)) && e.alertProps && e.alertProps.timestamps || null
      },
      getAlert: function(t) {
          if ("string" == typeof t)
              return this.data[t];
          this.getArray().filter(function(e) {
              return "alert" === e.type && a.isNear(t, e)
          })
      },
      getArray: function() {
          var t = this;
          return Object.keys(this.data).map(function(e) {
              return t.data[e]
          })
      },
      updateCSS: function() {
          a.toggleClass(e("#fav"), this.isFav(this.latestParams), "isfav")
      },
      emitChange: function() {
          this.emit("favsChanged")
      },
      setAlertProps: function(e, t) {
          var n = this.data[this.key(e)];
          n ? (n.alertProps = t,
          this.onchange(),
          this.save()) : window.wError("favExtended", "Missing fav in setAlertProps " + JSON.stringify(e))
      },
      checkAlerts: function() {
          var t = Date.now()
            , n = 12 * a.tsHour
            , e = this.getArray().filter(function(e) {
              return "alert" === e.type
          });
          if (e.length) {
              var i = e.filter(function(e) {
                  return !e.alertProps || t - e.alertProps.checked > n
              }).map(this.checkAlert.bind(this));
              i.length ? Promise.all(i).then(this.onAlertsChecked.bind(this, e)) : this.onAlertsChecked(e)
          }
      },
      onAlertsChecked: function(e) {
          this.triggeredAlerts = e.filter(function(e) {
              return e.alertProps && e.alertProps.triggered
          }).length,
          this.emit("alertsChecked", this.triggeredAlerts)
      },
      checkAlert: function(r) {
          var o = this;
          return new Promise(function(a) {
              i.get("/users/alertCheck/" + r.alertId, {
                  cache: !1
              }).then(function(e) {
                  var t = e.data
                    , n = !1;
                  if ("missing" === t.status)
                      console.warn("Deleting the fav", r.alertId),
                      o.remove(r.alertId);
                  else {
                      var i = t.alert
                        , s = t.timestamps || [];
                      n = 0 < s.length,
                      o.setAlertProps(r, {
                          suspended: i.suspended,
                          checked: Date.now(),
                          seen: 0,
                          triggered: n,
                          timestamps: s
                      })
                  }
                  a()
              })
          }
          )
      }
  })
}),
/*! */
W.define("pois", ["Poi", "utils", "broadcast", "favs"], function(e, o, r, l) {
  var t = {};
  return t.empty = e.instance({
      ident: "empty",
      displayed: !1,
      _init: function() {},
      download: function() {},
      render: function() {},
      cancel: function() {},
      delete: function() {},
      activate: function() {},
      deactivate: function() {}
  }),
  t.favs = e.instance({
      ident: "favs",
      displayed: !1,
      items: 5,
      type2icon: {
          alert: "&#xe027",
          airport: "Q",
          station: "&#xe008",
          fav: "k"
      },
      _init: function() {
          e._init.call(this),
          l.on("favsChanged", this.repaint, this)
      },
      repaint: function() {
          this.isActive && (this.delete(),
          this.data = [],
          this.download())
      },
      download: function() {
          var r = this;
          this.data.length || (o.each(l.getAll(), function(e, t) {
              var n = e.lat
                , i = e.lon
                , s = e.type
                , a = e.name;
              r.data.push(t, +n, +i, s, a)
          }),
          this.render())
      },
      display: function(e, t) {
          return {
              attrs: ['data-icon="' + (this.type2icon[this.data[t + 3]] || "k") + '"', 'data-text="' + (this.data[t + 4] || "") + '"']
          }
      },
      onclick: function(e, t) {
          var n = l.getAll()
            , i = o.clone(n[e])
            , s = i.type
            , a = "airport" === s || "station" === s ? s : "detail";
          i.source = "poi-icon",
          r.emit("rqstOpen", a, i)
      },
      cancel: function() {}
  }),
  t
}),
/*! */
W.define("poisCtrl", ["pois", "store", "utils", "broadcast", "plugins"], function(t, n, i, s, e) {
  var a = "empty";
  function r(t) {
      "favs" !== t && "empty" !== t ? (n.off("pois", r),
      e.pois.open().then(function() {
          o(t);
          var e = i.debounce(c, 1500);
          s.on("paramsChanged", e),
          s.on("mapChanged", e),
          s.on("metricChanged", l),
          n.on("pois", o)
      })) : o(t)
  }
  function o(e) {
      i.replaceClass(/selectedpois-\S+/, "selectedpois-" + e),
      t[a].deactivate(),
      t[e].activate(),
      "empty" === e && t.favs.isActive ? t.favs.deactivate() : "empty" === e || t.favs.isActive || t.favs.activate(),
      a = e
  }
  function l() {
      t[n.get("pois")].redraw(!0)
  }
  function c() {
      t[n.get("pois")].redraw()
  }
  s.once("redrawFinished", function() {
      var e = n.get("pois");
      "favs" === e || "empty" === e ? (o(e),
      n.on("pois", r)) : r(e)
  })
}),
/*! */
W.define("labelsLayer", ["LabelsLayer", "map"], function(e, t) {
  return (new e).addTo(t)
}),
/*! */
function() {
  function e() {
      var e = W.require("broadcast");
      W.loadOrphanedModules(),
      e.emit("dependenciesResolved")
  }
  window.top === window.self ? (W.require(["utils", "broadcast", "storage", "colors", "geolocation", "products", "overlays", "store"]),
  "loading" !== document.readyState ? e() : document.addEventListener("DOMContentLoaded", e),
  document.addEventListener("DOMContentLoaded", e)) : document.addEventListener("DOMContentLoaded", function() {
      document.getElementById("unlegal-embed").style.display = "block"
  })
}();
