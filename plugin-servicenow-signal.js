!(function(t) {
  var e = {};
  function n(r) {
    if (e[r]) return e[r].exports;
    var o = (e[r] = { i: r, l: !1, exports: {} });
    return t[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
  }
  (n.m = t),
    (n.c = e),
    (n.d = function(t, e, r) {
      n.o(t, e) ||
        Object.defineProperty(t, e, {
          configurable: !1,
          enumerable: !0,
          get: r
        });
    }),
    (n.n = function(t) {
      var e =
        t && t.__esModule
          ? function() {
              return t.default;
            }
          : function() {
              return t;
            };
      return n.d(e, "a", e), e;
    }),
    (n.o = function(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (n.p = "/"),
    n((n.s = 2));
})([
  function(t, e, n) {
    "use strict";
    var r = n(5);
    function o() {}
    var i = null,
      s = {};
    function a(t) {
      if ("object" !== typeof this)
        throw new TypeError("Promises must be constructed via new");
      if ("function" !== typeof t)
        throw new TypeError("Promise constructor's argument is not a function");
      (this._75 = 0),
        (this._83 = 0),
        (this._18 = null),
        (this._38 = null),
        t !== o && p(t, this);
    }
    function u(t, e) {
      for (; 3 === t._83; ) t = t._18;
      if ((a._47 && a._47(t), 0 === t._83))
        return 0 === t._75
          ? ((t._75 = 1), void (t._38 = e))
          : 1 === t._75
          ? ((t._75 = 2), void (t._38 = [t._38, e]))
          : void t._38.push(e);
      !(function(t, e) {
        r(function() {
          var n = 1 === t._83 ? e.onFulfilled : e.onRejected;
          if (null !== n) {
            var r = (function(t, e) {
              try {
                return t(e);
              } catch (t) {
                return (i = t), s;
              }
            })(n, t._18);
            r === s ? f(e.promise, i) : c(e.promise, r);
          } else 1 === t._83 ? c(e.promise, t._18) : f(e.promise, t._18);
        });
      })(t, e);
    }
    function c(t, e) {
      if (e === t)
        return f(t, new TypeError("A promise cannot be resolved with itself."));
      if (e && ("object" === typeof e || "function" === typeof e)) {
        var n = (function(t) {
          try {
            return t.then;
          } catch (t) {
            return (i = t), s;
          }
        })(e);
        if (n === s) return f(t, i);
        if (n === t.then && e instanceof a)
          return (t._83 = 3), (t._18 = e), void l(t);
        if ("function" === typeof n) return void p(n.bind(e), t);
      }
      (t._83 = 1), (t._18 = e), l(t);
    }
    function f(t, e) {
      (t._83 = 2), (t._18 = e), a._71 && a._71(t, e), l(t);
    }
    function l(t) {
      if ((1 === t._75 && (u(t, t._38), (t._38 = null)), 2 === t._75)) {
        for (var e = 0; e < t._38.length; e++) u(t, t._38[e]);
        t._38 = null;
      }
    }
    function h(t, e, n) {
      (this.onFulfilled = "function" === typeof t ? t : null),
        (this.onRejected = "function" === typeof e ? e : null),
        (this.promise = n);
    }
    function p(t, e) {
      var n = !1,
        r = (function(t, e, n) {
          try {
            t(e, n);
          } catch (t) {
            return (i = t), s;
          }
        })(
          t,
          function(t) {
            n || ((n = !0), c(e, t));
          },
          function(t) {
            n || ((n = !0), f(e, t));
          }
        );
      n || r !== s || ((n = !0), f(e, i));
    }
    (t.exports = a),
      (a._47 = null),
      (a._71 = null),
      (a._44 = o),
      (a.prototype.then = function(t, e) {
        if (this.constructor !== a)
          return (function(t, e, n) {
            return new t.constructor(function(r, i) {
              var s = new a(o);
              s.then(r, i), u(t, new h(e, n, s));
            });
          })(this, t, e);
        var n = new a(o);
        return u(this, new h(t, e, n)), n;
      });
  },
  function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var r = (function() {
      return function(t) {
        (this.name = t), console.log("loading " + this.name + " plugin");
      };
    })();
    function o() {
      if (document && document.currentScript) {
        var t = document.currentScript;
        if ("string" === typeof t.src) {
          var e = t.src;
          return e.substr(0, e.lastIndexOf("/"));
        }
      }
      return "";
    }
    (e.FlexPlugin = r),
      (e.loadPlugin = function(t) {
        Twilio && Twilio.Flex && Twilio.Flex.Plugins
          ? Twilio.Flex.Plugins.init(t)
          : console.warn(
              "This version of Flex does not appear to support plugins."
            );
      }),
      (e.getRuntimeUrl = o),
      (e.getAssetsUrl = function() {
        return o() + "/assets";
      });
  },
  function(t, e, n) {
    n(3), (t.exports = n(10));
  },
  function(t, e, n) {
    "use strict";
    "undefined" === typeof Promise && (n(4).enable(), (window.Promise = n(7))),
      n(8),
      (Object.assign = n(9));
  },
  function(t, e, n) {
    "use strict";
    var r = n(0),
      o = [ReferenceError, TypeError, RangeError],
      i = !1;
    function s() {
      (i = !1), (r._47 = null), (r._71 = null);
    }
    function a(t, e) {
      return e.some(function(e) {
        return t instanceof e;
      });
    }
    (e.disable = s),
      (e.enable = function(t) {
        (t = t || {}), i && s();
        i = !0;
        var e = 0,
          n = 0,
          u = {};
        function c(e) {
          (t.allRejections || a(u[e].error, t.whitelist || o)) &&
            ((u[e].displayId = n++),
            t.onUnhandled
              ? ((u[e].logged = !0), t.onUnhandled(u[e].displayId, u[e].error))
              : ((u[e].logged = !0),
                (function(t, e) {
                  console.warn(
                    "Possible Unhandled Promise Rejection (id: " + t + "):"
                  ),
                    ((e && (e.stack || e)) + "")
                      .split("\n")
                      .forEach(function(t) {
                        console.warn("  " + t);
                      });
                })(u[e].displayId, u[e].error)));
        }
        (r._47 = function(e) {
          var n;
          2 === e._83 &&
            u[e._56] &&
            (u[e._56].logged
              ? ((n = e._56),
                u[n].logged &&
                  (t.onHandled
                    ? t.onHandled(u[n].displayId, u[n].error)
                    : u[n].onUnhandled ||
                      (console.warn(
                        "Promise Rejection Handled (id: " +
                          u[n].displayId +
                          "):"
                      ),
                      console.warn(
                        '  This means you can ignore any previous messages of the form "Possible Unhandled Promise Rejection" with id ' +
                          u[n].displayId +
                          "."
                      ))))
              : clearTimeout(u[e._56].timeout),
            delete u[e._56]);
        }),
          (r._71 = function(t, n) {
            0 === t._75 &&
              ((t._56 = e++),
              (u[t._56] = {
                displayId: null,
                error: n,
                timeout: setTimeout(c.bind(null, t._56), a(n, o) ? 100 : 2e3),
                logged: !1
              }));
          });
      });
  },
  function(t, e, n) {
    "use strict";
    (function(e) {
      function n(t) {
        o.length || (r(), !0), (o[o.length] = t);
      }
      t.exports = n;
      var r,
        o = [],
        i = 0,
        s = 1024;
      function a() {
        for (; i < o.length; ) {
          var t = i;
          if (((i += 1), o[t].call(), i > s)) {
            for (var e = 0, n = o.length - i; e < n; e++) o[e] = o[e + i];
            (o.length -= i), (i = 0);
          }
        }
        (o.length = 0), (i = 0), !1;
      }
      var u,
        c,
        f,
        l = "undefined" !== typeof e ? e : self,
        h = l.MutationObserver || l.WebKitMutationObserver;
      function p(t) {
        return function() {
          var e = setTimeout(r, 0),
            n = setInterval(r, 50);
          function r() {
            clearTimeout(e), clearInterval(n), t();
          }
        };
      }
      "function" === typeof h
        ? ((u = 1),
          (c = new h(a)),
          (f = document.createTextNode("")),
          c.observe(f, { characterData: !0 }),
          (r = function() {
            (u = -u), (f.data = u);
          }))
        : (r = p(a)),
        (n.requestFlush = r),
        (n.makeRequestCallFromTimer = p);
    }.call(e, n(6)));
  },
  function(t, e) {
    var n;
    n = (function() {
      return this;
    })();
    try {
      n = n || Function("return this")() || (0, eval)("this");
    } catch (t) {
      "object" === typeof window && (n = window);
    }
    t.exports = n;
  },
  function(t, e, n) {
    "use strict";
    var r = n(0);
    t.exports = r;
    var o = f(!0),
      i = f(!1),
      s = f(null),
      a = f(void 0),
      u = f(0),
      c = f("");
    function f(t) {
      var e = new r(r._44);
      return (e._83 = 1), (e._18 = t), e;
    }
    (r.resolve = function(t) {
      if (t instanceof r) return t;
      if (null === t) return s;
      if (void 0 === t) return a;
      if (!0 === t) return o;
      if (!1 === t) return i;
      if (0 === t) return u;
      if ("" === t) return c;
      if ("object" === typeof t || "function" === typeof t)
        try {
          var e = t.then;
          if ("function" === typeof e) return new r(e.bind(t));
        } catch (t) {
          return new r(function(e, n) {
            n(t);
          });
        }
      return f(t);
    }),
      (r.all = function(t) {
        var e = Array.prototype.slice.call(t);
        return new r(function(t, n) {
          if (0 === e.length) return t([]);
          var o = e.length;
          function i(s, a) {
            if (a && ("object" === typeof a || "function" === typeof a)) {
              if (a instanceof r && a.then === r.prototype.then) {
                for (; 3 === a._83; ) a = a._18;
                return 1 === a._83
                  ? i(s, a._18)
                  : (2 === a._83 && n(a._18),
                    void a.then(function(t) {
                      i(s, t);
                    }, n));
              }
              var u = a.then;
              if ("function" === typeof u)
                return void new r(u.bind(a)).then(function(t) {
                  i(s, t);
                }, n);
            }
            (e[s] = a), 0 === --o && t(e);
          }
          for (var s = 0; s < e.length; s++) i(s, e[s]);
        });
      }),
      (r.reject = function(t) {
        return new r(function(e, n) {
          n(t);
        });
      }),
      (r.race = function(t) {
        return new r(function(e, n) {
          t.forEach(function(t) {
            r.resolve(t).then(e, n);
          });
        });
      }),
      (r.prototype.catch = function(t) {
        return this.then(null, t);
      });
  },
  function(t, e) {
    !(function(t) {
      "use strict";
      if (!t.fetch) {
        var e = {
          searchParams: "URLSearchParams" in t,
          iterable: "Symbol" in t && "iterator" in Symbol,
          blob:
            "FileReader" in t &&
            "Blob" in t &&
            (function() {
              try {
                return new Blob(), !0;
              } catch (t) {
                return !1;
              }
            })(),
          formData: "FormData" in t,
          arrayBuffer: "ArrayBuffer" in t
        };
        if (e.arrayBuffer)
          var n = [
              "[object Int8Array]",
              "[object Uint8Array]",
              "[object Uint8ClampedArray]",
              "[object Int16Array]",
              "[object Uint16Array]",
              "[object Int32Array]",
              "[object Uint32Array]",
              "[object Float32Array]",
              "[object Float64Array]"
            ],
            r = function(t) {
              return t && DataView.prototype.isPrototypeOf(t);
            },
            o =
              ArrayBuffer.isView ||
              function(t) {
                return t && n.indexOf(Object.prototype.toString.call(t)) > -1;
              };
        (f.prototype.append = function(t, e) {
          (t = a(t)), (e = u(e));
          var n = this.map[t];
          this.map[t] = n ? n + "," + e : e;
        }),
          (f.prototype.delete = function(t) {
            delete this.map[a(t)];
          }),
          (f.prototype.get = function(t) {
            return (t = a(t)), this.has(t) ? this.map[t] : null;
          }),
          (f.prototype.has = function(t) {
            return this.map.hasOwnProperty(a(t));
          }),
          (f.prototype.set = function(t, e) {
            this.map[a(t)] = u(e);
          }),
          (f.prototype.forEach = function(t, e) {
            for (var n in this.map)
              this.map.hasOwnProperty(n) && t.call(e, this.map[n], n, this);
          }),
          (f.prototype.keys = function() {
            var t = [];
            return (
              this.forEach(function(e, n) {
                t.push(n);
              }),
              c(t)
            );
          }),
          (f.prototype.values = function() {
            var t = [];
            return (
              this.forEach(function(e) {
                t.push(e);
              }),
              c(t)
            );
          }),
          (f.prototype.entries = function() {
            var t = [];
            return (
              this.forEach(function(e, n) {
                t.push([n, e]);
              }),
              c(t)
            );
          }),
          e.iterable && (f.prototype[Symbol.iterator] = f.prototype.entries);
        var i = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
        (b.prototype.clone = function() {
          return new b(this, { body: this._bodyInit });
        }),
          y.call(b.prototype),
          y.call(m.prototype),
          (m.prototype.clone = function() {
            return new m(this._bodyInit, {
              status: this.status,
              statusText: this.statusText,
              headers: new f(this.headers),
              url: this.url
            });
          }),
          (m.error = function() {
            var t = new m(null, { status: 0, statusText: "" });
            return (t.type = "error"), t;
          });
        var s = [301, 302, 303, 307, 308];
        (m.redirect = function(t, e) {
          if (-1 === s.indexOf(e)) throw new RangeError("Invalid status code");
          return new m(null, { status: e, headers: { location: t } });
        }),
          (t.Headers = f),
          (t.Request = b),
          (t.Response = m),
          (t.fetch = function(t, n) {
            return new Promise(function(r, o) {
              var i = new b(t, n),
                s = new XMLHttpRequest();
              (s.onload = function() {
                var t,
                  e,
                  n = {
                    status: s.status,
                    statusText: s.statusText,
                    headers:
                      ((t = s.getAllResponseHeaders() || ""),
                      (e = new f()),
                      t.split(/\r?\n/).forEach(function(t) {
                        var n = t.split(":"),
                          r = n.shift().trim();
                        if (r) {
                          var o = n.join(":").trim();
                          e.append(r, o);
                        }
                      }),
                      e)
                  };
                n.url =
                  "responseURL" in s
                    ? s.responseURL
                    : n.headers.get("X-Request-URL");
                var o = "response" in s ? s.response : s.responseText;
                r(new m(o, n));
              }),
                (s.onerror = function() {
                  o(new TypeError("Network request failed"));
                }),
                (s.ontimeout = function() {
                  o(new TypeError("Network request failed"));
                }),
                s.open(i.method, i.url, !0),
                "include" === i.credentials && (s.withCredentials = !0),
                "responseType" in s && e.blob && (s.responseType = "blob"),
                i.headers.forEach(function(t, e) {
                  s.setRequestHeader(e, t);
                }),
                s.send("undefined" === typeof i._bodyInit ? null : i._bodyInit);
            });
          }),
          (t.fetch.polyfill = !0);
      }
      function a(t) {
        if (
          ("string" !== typeof t && (t = String(t)),
          /[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t))
        )
          throw new TypeError("Invalid character in header field name");
        return t.toLowerCase();
      }
      function u(t) {
        return "string" !== typeof t && (t = String(t)), t;
      }
      function c(t) {
        var n = {
          next: function() {
            var e = t.shift();
            return { done: void 0 === e, value: e };
          }
        };
        return (
          e.iterable &&
            (n[Symbol.iterator] = function() {
              return n;
            }),
          n
        );
      }
      function f(t) {
        (this.map = {}),
          t instanceof f
            ? t.forEach(function(t, e) {
                this.append(e, t);
              }, this)
            : Array.isArray(t)
            ? t.forEach(function(t) {
                this.append(t[0], t[1]);
              }, this)
            : t &&
              Object.getOwnPropertyNames(t).forEach(function(e) {
                this.append(e, t[e]);
              }, this);
      }
      function l(t) {
        if (t.bodyUsed) return Promise.reject(new TypeError("Already read"));
        t.bodyUsed = !0;
      }
      function h(t) {
        return new Promise(function(e, n) {
          (t.onload = function() {
            e(t.result);
          }),
            (t.onerror = function() {
              n(t.error);
            });
        });
      }
      function p(t) {
        var e = new FileReader(),
          n = h(e);
        return e.readAsArrayBuffer(t), n;
      }
      function d(t) {
        if (t.slice) return t.slice(0);
        var e = new Uint8Array(t.byteLength);
        return e.set(new Uint8Array(t)), e.buffer;
      }
      function y() {
        return (
          (this.bodyUsed = !1),
          (this._initBody = function(t) {
            if (((this._bodyInit = t), t))
              if ("string" === typeof t) this._bodyText = t;
              else if (e.blob && Blob.prototype.isPrototypeOf(t))
                this._bodyBlob = t;
              else if (e.formData && FormData.prototype.isPrototypeOf(t))
                this._bodyFormData = t;
              else if (
                e.searchParams &&
                URLSearchParams.prototype.isPrototypeOf(t)
              )
                this._bodyText = t.toString();
              else if (e.arrayBuffer && e.blob && r(t))
                (this._bodyArrayBuffer = d(t.buffer)),
                  (this._bodyInit = new Blob([this._bodyArrayBuffer]));
              else {
                if (
                  !e.arrayBuffer ||
                  (!ArrayBuffer.prototype.isPrototypeOf(t) && !o(t))
                )
                  throw new Error("unsupported BodyInit type");
                this._bodyArrayBuffer = d(t);
              }
            else this._bodyText = "";
            this.headers.get("content-type") ||
              ("string" === typeof t
                ? this.headers.set("content-type", "text/plain;charset=UTF-8")
                : this._bodyBlob && this._bodyBlob.type
                ? this.headers.set("content-type", this._bodyBlob.type)
                : e.searchParams &&
                  URLSearchParams.prototype.isPrototypeOf(t) &&
                  this.headers.set(
                    "content-type",
                    "application/x-www-form-urlencoded;charset=UTF-8"
                  ));
          }),
          e.blob &&
            ((this.blob = function() {
              var t = l(this);
              if (t) return t;
              if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
              if (this._bodyArrayBuffer)
                return Promise.resolve(new Blob([this._bodyArrayBuffer]));
              if (this._bodyFormData)
                throw new Error("could not read FormData body as blob");
              return Promise.resolve(new Blob([this._bodyText]));
            }),
            (this.arrayBuffer = function() {
              return this._bodyArrayBuffer
                ? l(this) || Promise.resolve(this._bodyArrayBuffer)
                : this.blob().then(p);
            })),
          (this.text = function() {
            var t,
              e,
              n,
              r = l(this);
            if (r) return r;
            if (this._bodyBlob)
              return (
                (t = this._bodyBlob),
                (e = new FileReader()),
                (n = h(e)),
                e.readAsText(t),
                n
              );
            if (this._bodyArrayBuffer)
              return Promise.resolve(
                (function(t) {
                  for (
                    var e = new Uint8Array(t), n = new Array(e.length), r = 0;
                    r < e.length;
                    r++
                  )
                    n[r] = String.fromCharCode(e[r]);
                  return n.join("");
                })(this._bodyArrayBuffer)
              );
            if (this._bodyFormData)
              throw new Error("could not read FormData body as text");
            return Promise.resolve(this._bodyText);
          }),
          e.formData &&
            (this.formData = function() {
              return this.text().then(v);
            }),
          (this.json = function() {
            return this.text().then(JSON.parse);
          }),
          this
        );
      }
      function b(t, e) {
        var n,
          r,
          o = (e = e || {}).body;
        if (t instanceof b) {
          if (t.bodyUsed) throw new TypeError("Already read");
          (this.url = t.url),
            (this.credentials = t.credentials),
            e.headers || (this.headers = new f(t.headers)),
            (this.method = t.method),
            (this.mode = t.mode),
            o || null == t._bodyInit || ((o = t._bodyInit), (t.bodyUsed = !0));
        } else this.url = String(t);
        if (
          ((this.credentials = e.credentials || this.credentials || "omit"),
          (!e.headers && this.headers) || (this.headers = new f(e.headers)),
          (this.method =
            ((n = e.method || this.method || "GET"),
            (r = n.toUpperCase()),
            i.indexOf(r) > -1 ? r : n)),
          (this.mode = e.mode || this.mode || null),
          (this.referrer = null),
          ("GET" === this.method || "HEAD" === this.method) && o)
        )
          throw new TypeError("Body not allowed for GET or HEAD requests");
        this._initBody(o);
      }
      function v(t) {
        var e = new FormData();
        return (
          t
            .trim()
            .split("&")
            .forEach(function(t) {
              if (t) {
                var n = t.split("="),
                  r = n.shift().replace(/\+/g, " "),
                  o = n.join("=").replace(/\+/g, " ");
                e.append(decodeURIComponent(r), decodeURIComponent(o));
              }
            }),
          e
        );
      }
      function m(t, e) {
        e || (e = {}),
          (this.type = "default"),
          (this.status = "status" in e ? e.status : 200),
          (this.ok = this.status >= 200 && this.status < 300),
          (this.statusText = "statusText" in e ? e.statusText : "OK"),
          (this.headers = new f(e.headers)),
          (this.url = e.url || ""),
          this._initBody(t);
      }
    })("undefined" !== typeof self ? self : this);
  },
  function(t, e, n) {
    "use strict";
    var r = Object.getOwnPropertySymbols,
      o = Object.prototype.hasOwnProperty,
      i = Object.prototype.propertyIsEnumerable;
    t.exports = (function() {
      try {
        if (!Object.assign) return !1;
        var t = new String("abc");
        if (((t[5] = "de"), "5" === Object.getOwnPropertyNames(t)[0]))
          return !1;
        for (var e = {}, n = 0; n < 10; n++)
          e["_" + String.fromCharCode(n)] = n;
        if (
          "0123456789" !==
          Object.getOwnPropertyNames(e)
            .map(function(t) {
              return e[t];
            })
            .join("")
        )
          return !1;
        var r = {};
        return (
          "abcdefghijklmnopqrst".split("").forEach(function(t) {
            r[t] = t;
          }),
          "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("")
        );
      } catch (t) {
        return !1;
      }
    })()
      ? Object.assign
      : function(t, e) {
          for (
            var n,
              s,
              a = (function(t) {
                if (null === t || void 0 === t)
                  throw new TypeError(
                    "Object.assign cannot be called with null or undefined"
                  );
                return Object(t);
              })(t),
              u = 1;
            u < arguments.length;
            u++
          ) {
            for (var c in (n = Object(arguments[u])))
              o.call(n, c) && (a[c] = n[c]);
            if (r) {
              s = r(n);
              for (var f = 0; f < s.length; f++)
                i.call(n, s[f]) && (a[s[f]] = n[s[f]]);
            }
          }
          return a;
        };
  },
  function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var r = n(1),
      o = (n.n(r), n(11));
    r.loadPlugin(o.a);
  },
  function(t, e, n) {
    "use strict";
    var r = n(1),
      o = (n.n(r), n(12)),
      i =
        (n.n(o),
        (function() {
          function t(t, e) {
            for (var n = 0; n < e.length; n++) {
              var r = e[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(t, r.key, r);
            }
          }
          return function(e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e;
          };
        })());
    var s = "ServicenowSignalPlugin",
      a = (function(t) {
        function e() {
          return (
            (function(t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
            (function(t, e) {
              if (!t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return !e || ("object" !== typeof e && "function" !== typeof e)
                ? t
                : e;
            })(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, s))
          );
        }
        return (
          (function(t, e) {
            if ("function" !== typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof e
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }
            })),
              e &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(t, e)
                  : (t.__proto__ = e));
          })(e, r["FlexPlugin"]),
          i(e, [
            {
              key: "init",
              value: function(t, e) {
                var n = "accept_task",
                  r = "complete_task",
                  o =
                    "https://" + e.store.getState().flex.config.serviceBaseUrl;
                (t.AgentDesktopView.defaultProps.showPanel2 = !1),
                  t.Actions.addListener("beforeAcceptTask", function(e) {
                    return (
                      (e.eventType = n),
                      t.Actions.invokeAction("ForwardEventToServiceNow", e)
                    );
                  }),
                  t.Actions.addListener("beforeCompleteTask", function(e) {
                    return (
                      (e.eventType = r),
                      t.Actions.invokeAction("ForwardEventToServiceNow", e)
                    );
                  }),
                  t.Actions.registerAction("ForwardEventToServiceNow", function(
                    t
                  ) {
                    var e = o + "/task_event",
                      n = {
                        method: "POST",
                        body: JSON.stringify({
                          worker: t.task.source._worker.attributes,
                          task: {
                            sid: t.task.sid,
                            attributes: t.task.attributes
                          },
                          eventType: t.eventType
                        }),
                        headers: { "Content-Type": "application/json" }
                      };
                    fetch(e, n)
                      .then(function(t) {
                        return t.json();
                      })
                      .then(function(e) {
                        console.log("////////////////////////////"),
                          console.log(t.eventType),
                          console.log(e),
                          console.log("////////////////////////////");
                      })
                      .catch(function(t) {
                        throw (console.log(t), t);
                      });
                  }),
                  (e.strings.TaskInfoPanelContent =
                    "\n    <h1>Customer Info</h1>\n    <h2>Name</h2>\n    <p>{{task.attributes.user.name}}</p>\n    <h2>Title</h2>\n    <p>{{task.attributes.user.title}}</p>\n    <h2>Department</h2>\n    <p>{{task.attributes.user.department}}</p>\n    <h2>Phone</h2>\n    <p>{{task.attributes.user.phone}}</p>\n    <h2>Location</h2>\n    <p>{{task.attributes.user.location}}</p>\n    <h2>user_sys_id</h2>\n    <p>{{task.attributes.user_sys_id}}</p>\n    <hr />\n    <h1>Task Info</h1>\n    <h2>Ticket #</h2>\n    <p>{{task.attributes.ticket_number}}</p>\n    <h2>SID</h2>\n    <p>{{task.sid}}</p>\n    <h2>Channel</h2>\n    <p>{{task.attributes.channelType}}</p>\n    <h2>Priority</h2>\n    <p>{{task.priority}}</p>\n    <h2>Create Date</h2>\n    <p>{{task.dateCreated}}</p>\n    <hr />\n    ");
              }
            }
          ]),
          e
        );
      })();
    e.a = a;
  },
  function(t, e) {
    t.exports = React;
  }
]);
//# sourceMappingURL=plugin-servicenow-signal.js.map
