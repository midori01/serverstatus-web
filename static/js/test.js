!
function() {
  var e = {
    861 : function(e, t, n) {
      "use strict";
      var r = n(214),
      a = {
        childContextTypes: !0,
        contextType: !0,
        contextTypes: !0,
        defaultProps: !0,
        displayName: !0,
        getDefaultProps: !0,
        getDerivedStateFromError: !0,
        getDerivedStateFromProps: !0,
        mixins: !0,
        propTypes: !0,
        type: !0
      },
      o = {
        name: !0,
        length: !0,
        prototype: !0,
        caller: !0,
        callee: !0,
        arguments: !0,
        arity: !0
      },
      i = {
        $$typeof: !0,
        compare: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0,
        type: !0
      },
      l = {};
      function s(e) {
        return r.isMemo(e) ? i: l[e.$$typeof] || a
      }
      l[r.ForwardRef] = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0
      },
      l[r.Memo] = i;
      var c = Object.defineProperty,
      u = Object.getOwnPropertyNames,
      d = Object.getOwnPropertySymbols,
      f = Object.getOwnPropertyDescriptor,
      p = Object.getPrototypeOf,
      g = Object.prototype;
      e.exports = function e(t, n, r) {
        if ("string" !== typeof n) {
          if (g) {
            var a = p(n);
            a && a !== g && e(t, a, r)
          }
          var i = u(n);
          d && (i = i.concat(d(n)));
          for (var l = s(t), v = s(n), m = 0; m < i.length; ++m) {
            var h = i[m];
            if (!o[h] && (!r || !r[h]) && (!v || !v[h]) && (!l || !l[h])) {
              var y = f(n, h);
              try {
                c(t, h, y)
              } catch(b) {}
            }
          }
        }
        return t
      }
    },
    967 : function(e, t, n) {
      e = n.nmd(e);
      var r = "__lodash_hash_undefined__",
      a = 9007199254740991,
      o = "[object Arguments]",
      i = "[object Function]",
      l = "[object Object]",
      s = /^\[object .+?Constructor\]$/,
      c = /^(?:0|[1-9]\d*)$/,
      u = {};
      u["[object Float32Array]"] = u["[object Float64Array]"] = u["[object Int8Array]"] = u["[object Int16Array]"] = u["[object Int32Array]"] = u["[object Uint8Array]"] = u["[object Uint8ClampedArray]"] = u["[object Uint16Array]"] = u["[object Uint32Array]"] = !0,
      u[o] = u["[object Array]"] = u["[object ArrayBuffer]"] = u["[object Boolean]"] = u["[object DataView]"] = u["[object Date]"] = u["[object Error]"] = u[i] = u["[object Map]"] = u["[object Number]"] = u[l] = u["[object RegExp]"] = u["[object Set]"] = u["[object String]"] = u["[object WeakMap]"] = !1;
      var d = "object" == typeof n.g && n.g && n.g.Object === Object && n.g,
      f = "object" == typeof self && self && self.Object === Object && self,
      p = d || f || Function("return this")(),
      g = t && !t.nodeType && t,
      v = g && e && !e.nodeType && e,
      m = v && v.exports === g,
      h = m && d.process,
      y = function() {
        try {
          var e = v && v.require && v.require("util").types;
          return e || h && h.binding && h.binding("util")
        } catch(t) {}
      } (),
      b = y && y.isTypedArray;
      function x(e, t, n) {
        switch (n.length) {
        case 0:
          return e.call(t);
        case 1:
          return e.call(t, n[0]);
        case 2:
          return e.call(t, n[0], n[1]);
        case 3:
          return e.call(t, n[0], n[1], n[2])
        }
        return e.apply(t, n)
      }
      var w, k, _ = Array.prototype,
      S = Function.prototype,
      E = Object.prototype,
      C = p["__core-js_shared__"],
      A = S.toString,
      P = E.hasOwnProperty,
      T = function() {
        var e = /[^.]+$/.exec(C && C.keys && C.keys.IE_PROTO || "");
        return e ? "Symbol(src)_1." + e: ""
      } (),
      z = E.toString,
      j = A.call(Object),
      R = RegExp("^" + A.call(P).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
      M = m ? p.Buffer: void 0,
      N = p.Symbol,
      O = p.Uint8Array,
      B = M ? M.allocUnsafe: void 0,
      L = (w = Object.getPrototypeOf, k = Object,
      function(e) {
        return w(k(e))
      }),
      F = Object.create,
      D = E.propertyIsEnumerable,
      I = _.splice,
      V = N ? N.toStringTag: void 0,
      W = function() {
        try {
          var e = ge(Object, "defineProperty");
          return e({},
          "", {}),
          e
        } catch(t) {}
      } (),
      U = M ? M.isBuffer: void 0,
      H = Math.max,
      $ = Date.now,
      q = ge(p, "Map"),
      G = ge(Object, "create"),
      Y = function() {
        function e() {}
        return function(t) {
          if (!Ce(t)) return {};
          if (F) return F(t);
          e.prototype = t;
          var n = new e;
          return e.prototype = void 0,
          n
        }
      } ();
      function X(e) {
        var t = -1,
        n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n;) {
          var r = e[t];
          this.set(r[0], r[1])
        }
      }
      function K(e) {
        var t = -1,
        n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n;) {
          var r = e[t];
          this.set(r[0], r[1])
        }
      }
      function Q(e) {
        var t = -1,
        n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n;) {
          var r = e[t];
          this.set(r[0], r[1])
        }
      }
      function Z(e) {
        var t = this.__data__ = new K(e);
        this.size = t.size
      }
      function J(e, t) {
        var n = we(e),
        r = !n && xe(e),
        a = !n && !r && _e(e),
        o = !n && !r && !a && Pe(e),
        i = n || r || a || o,
        l = i ?
        function(e, t) {
          for (var n = -1,
          r = Array(e); ++n < e;) r[n] = t(n);
          return r
        } (e.length, String) : [],
        s = l.length;
        for (var c in e) ! t && !P.call(e, c) || i && ("length" == c || a && ("offset" == c || "parent" == c) || o && ("buffer" == c || "byteLength" == c || "byteOffset" == c) || ve(c, s)) || l.push(c);
        return l
      }
      function ee(e, t, n) { (void 0 !== n && !be(e[t], n) || void 0 === n && !(t in e)) && re(e, t, n)
      }
      function te(e, t, n) {
        var r = e[t];
        P.call(e, t) && be(r, n) && (void 0 !== n || t in e) || re(e, t, n)
      }
      function ne(e, t) {
        for (var n = e.length; n--;) if (be(e[n][0], t)) return n;
        return - 1
      }
      function re(e, t, n) {
        "__proto__" == t && W ? W(e, t, {
          configurable: !0,
          enumerable: !0,
          value: n,
          writable: !0
        }) : e[t] = n
      }
      X.prototype.clear = function() {
        this.__data__ = G ? G(null) : {},
        this.size = 0
      },
      X.prototype.delete = function(e) {
        var t = this.has(e) && delete this.__data__[e];
        return this.size -= t ? 1 : 0,
        t
      },
      X.prototype.get = function(e) {
        var t = this.__data__;
        if (G) {
          var n = t[e];
          return n === r ? void 0 : n
        }
        return P.call(t, e) ? t[e] : void 0
      },
      X.prototype.has = function(e) {
        var t = this.__data__;
        return G ? void 0 !== t[e] : P.call(t, e)
      },
      X.prototype.set = function(e, t) {
        var n = this.__data__;
        return this.size += this.has(e) ? 0 : 1,
        n[e] = G && void 0 === t ? r: t,
        this
      },
      K.prototype.clear = function() {
        this.__data__ = [],
        this.size = 0
      },
      K.prototype.delete = function(e) {
        var t = this.__data__,
        n = ne(t, e);
        return ! (n < 0) && (n == t.length - 1 ? t.pop() : I.call(t, n, 1), --this.size, !0)
      },
      K.prototype.get = function(e) {
        var t = this.__data__,
        n = ne(t, e);
        return n < 0 ? void 0 : t[n][1]
      },
      K.prototype.has = function(e) {
        return ne(this.__data__, e) > -1
      },
      K.prototype.set = function(e, t) {
        var n = this.__data__,
        r = ne(n, e);
        return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t,
        this
      },
      Q.prototype.clear = function() {
        this.size = 0,
        this.__data__ = {
          hash: new X,
          map: new(q || K),
          string: new X
        }
      },
      Q.prototype.delete = function(e) {
        var t = pe(this, e).delete(e);
        return this.size -= t ? 1 : 0,
        t
      },
      Q.prototype.get = function(e) {
        return pe(this, e).get(e)
      },
      Q.prototype.has = function(e) {
        return pe(this, e).has(e)
      },
      Q.prototype.set = function(e, t) {
        var n = pe(this, e),
        r = n.size;
        return n.set(e, t),
        this.size += n.size == r ? 0 : 1,
        this
      },
      Z.prototype.clear = function() {
        this.__data__ = new K,
        this.size = 0
      },
      Z.prototype.delete = function(e) {
        var t = this.__data__,
        n = t.delete(e);
        return this.size = t.size,
        n
      },
      Z.prototype.get = function(e) {
        return this.__data__.get(e)
      },
      Z.prototype.has = function(e) {
        return this.__data__.has(e)
      },
      Z.prototype.set = function(e, t) {
        var n = this.__data__;
        if (n instanceof K) {
          var r = n.__data__;
          if (!q || r.length < 199) return r.push([e, t]),
          this.size = ++n.size,
          this;
          n = this.__data__ = new Q(r)
        }
        return n.set(e, t),
        this.size = n.size,
        this
      };
      var ae, oe = function(e, t, n) {
        for (var r = -1,
        a = Object(e), o = n(e), i = o.length; i--;) {
          var l = o[ae ? i: ++r];
          if (!1 === t(a[l], l, a)) break
        }
        return e
      };
      function ie(e) {
        return null == e ? void 0 === e ? "[object Undefined]": "[object Null]": V && V in Object(e) ?
        function(e) {
          var t = P.call(e, V),
          n = e[V];
          try {
            e[V] = void 0;
            var r = !0
          } catch(o) {}
          var a = z.call(e);
          r && (t ? e[V] = n: delete e[V]);
          return a
        } (e) : function(e) {
          return z.call(e)
        } (e)
      }
      function le(e) {
        return Ae(e) && ie(e) == o
      }
      function se(e) {
        return ! (!Ce(e) ||
        function(e) {
          return !! T && T in e
        } (e)) && (Se(e) ? R: s).test(function(e) {
          if (null != e) {
            try {
              return A.call(e)
            } catch(t) {}
            try {
              return e + ""
            } catch(t) {}
          }
          return ""
        } (e))
      }
      function ce(e) {
        if (!Ce(e)) return function(e) {
          var t = [];
          if (null != e) for (var n in Object(e)) t.push(n);
          return t
        } (e);
        var t = me(e),
        n = [];
        for (var r in e)("constructor" != r || !t && P.call(e, r)) && n.push(r);
        return n
      }
      function ue(e, t, n, r, a) {
        e !== t && oe(t, (function(o, i) {
          if (a || (a = new Z), Ce(o)) !
          function(e, t, n, r, a, o, i) {
            var s = he(e, n),
            c = he(t, n),
            u = i.get(c);
            if (u) return void ee(e, n, u);
            var d = o ? o(s, c, n + "", e, t, i) : void 0,
            f = void 0 === d;
            if (f) {
              var p = we(c),
              g = !p && _e(c),
              v = !p && !g && Pe(c);
              d = c,
              p || g || v ? we(s) ? d = s: Ae(m = s) && ke(m) ? d = function(e, t) {
                var n = -1,
                r = e.length;
                t || (t = Array(r));
                for (; ++n < r;) t[n] = e[n];
                return t
              } (s) : g ? (f = !1, d = function(e, t) {
                if (t) return e.slice();
                var n = e.length,
                r = B ? B(n) : new e.constructor(n);
                return e.copy(r),
                r
              } (c, !0)) : v ? (f = !1, d = function(e, t) {
                var n = t ?
                function(e) {
                  var t = new e.constructor(e.byteLength);
                  return new O(t).set(new O(e)),
                  t
                } (e.buffer) : e.buffer;
                return new e.constructor(n, e.byteOffset, e.length)
              } (c, !0)) : d = [] : function(e) {
                if (!Ae(e) || ie(e) != l) return ! 1;
                var t = L(e);
                if (null === t) return ! 0;
                var n = P.call(t, "constructor") && t.constructor;
                return "function" == typeof n && n instanceof n && A.call(n) == j
              } (c) || xe(c) ? (d = s, xe(s) ? d = function(e) {
                return function(e, t, n, r) {
                  var a = !n;
                  n || (n = {});
                  var o = -1,
                  i = t.length;
                  for (; ++o < i;) {
                    var l = t[o],
                    s = r ? r(n[l], e[l], l, n, e) : void 0;
                    void 0 === s && (s = e[l]),
                    a ? re(n, l, s) : te(n, l, s)
                  }
                  return n
                } (e, Te(e))
              } (s) : Ce(s) && !Se(s) || (d = function(e) {
                return "function" != typeof e.constructor || me(e) ? {}: Y(L(e))
              } (c))) : f = !1
            }
            var m;
            f && (i.set(c, d), a(d, c, r, o, i), i.delete(c));
            ee(e, n, d)
          } (e, t, i, n, ue, r, a);
          else {
            var s = r ? r(he(e, i), o, i + "", e, t, a) : void 0;
            void 0 === s && (s = o),
            ee(e, i, s)
          }
        }), Te)
      }
      function de(e, t) {
        return ye(function(e, t, n) {
          return t = H(void 0 === t ? e.length - 1 : t, 0),
          function() {
            for (var r = arguments,
            a = -1,
            o = H(r.length - t, 0), i = Array(o); ++a < o;) i[a] = r[t + a];
            a = -1;
            for (var l = Array(t + 1); ++a < t;) l[a] = r[a];
            return l[t] = n(i),
            x(e, this, l)
          }
        } (e, t, Re), e + "")
      }
      var fe = W ?
      function(e, t) {
        return W(e, "toString", {
          configurable: !0,
          enumerable: !1,
          value: (n = t,
          function() {
            return n
          }),
          writable: !0
        });
        var n
      }: Re;
      function pe(e, t) {
        var n = e.__data__;
        return function(e) {
          var t = typeof e;
          return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e: null === e
        } (t) ? n["string" == typeof t ? "string": "hash"] : n.map
      }
      function ge(e, t) {
        var n = function(e, t) {
          return null == e ? void 0 : e[t]
        } (e, t);
        return se(n) ? n: void 0
      }
      function ve(e, t) {
        var n = typeof e;
        return !! (t = null == t ? a: t) && ("number" == n || "symbol" != n && c.test(e)) && e > -1 && e % 1 == 0 && e < t
      }
      function me(e) {
        var t = e && e.constructor;
        return e === ("function" == typeof t && t.prototype || E)
      }
      function he(e, t) {
        if (("constructor" !== t || "function" !== typeof e[t]) && "__proto__" != t) return e[t]
      }
      var ye = function(e) {
        var t = 0,
        n = 0;
        return function() {
          var r = $(),
          a = 16 - (r - n);
          if (n = r, a > 0) {
            if (++t >= 800) return arguments[0]
          } else t = 0;
          return e.apply(void 0, arguments)
        }
      } (fe);
      function be(e, t) {
        return e === t || e !== e && t !== t
      }
      var xe = le(function() {
        return arguments
      } ()) ? le: function(e) {
        return Ae(e) && P.call(e, "callee") && !D.call(e, "callee")
      },
      we = Array.isArray;
      function ke(e) {
        return null != e && Ee(e.length) && !Se(e)
      }
      var _e = U ||
      function() {
        return ! 1
      };
      function Se(e) {
        if (!Ce(e)) return ! 1;
        var t = ie(e);
        return t == i || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t
      }
      function Ee(e) {
        return "number" == typeof e && e > -1 && e % 1 == 0 && e <= a
      }
      function Ce(e) {
        var t = typeof e;
        return null != e && ("object" == t || "function" == t)
      }
      function Ae(e) {
        return null != e && "object" == typeof e
      }
      var Pe = b ?
      function(e) {
        return function(t) {
          return e(t)
        }
      } (b) : function(e) {
        return Ae(e) && Ee(e.length) && !!u[ie(e)]
      };
      function Te(e) {
        return ke(e) ? J(e, !0) : ce(e)
      }
      var ze, je = (ze = function(e, t, n, r) {
        ue(e, t, n, r)
      },
      de((function(e, t) {
        var n = -1,
        r = t.length,
        a = r > 1 ? t[r - 1] : void 0,
        o = r > 2 ? t[2] : void 0;
        for (a = ze.length > 3 && "function" == typeof a ? (r--, a) : void 0, o &&
        function(e, t, n) {
          if (!Ce(n)) return ! 1;
          var r = typeof t;
          return !! ("number" == r ? ke(n) && ve(t, n.length) : "string" == r && t in n) && be(n[t], e)
        } (t[0], t[1], o) && (a = r < 3 ? void 0 : a, r = 1), e = Object(e); ++n < r;) {
          var i = t[n];
          i && ze(e, i, n, a)
        }
        return e
      })));
      function Re(e) {
        return e
      }
      e.exports = je
    },
    534 : function(e, t, n) {
      "use strict";
      var r = n(313),
      a = n(224);
      function o(e) {
        for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
        n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
        return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
      }
      var i = new Set,
      l = {};
      function s(e, t) {
        c(e, t),
        c(e + "Capture", t)
      }
      function c(e, t) {
        for (l[e] = t, e = 0; e < t.length; e++) i.add(t[e])
      }
      var u = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement),
      d = Object.prototype.hasOwnProperty,
      f = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
      p = {},
      g = {};
      function v(e, t, n, r, a, o, i) {
        this.acceptsBooleans = 2 === t || 3 === t || 4 === t,
        this.attributeName = r,
        this.attributeNamespace = a,
        this.mustUseProperty = n,
        this.propertyName = e,
        this.type = t,
        this.sanitizeURL = o,
        this.removeEmptyString = i
      }
      var m = {};
      "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e) {
        m[e] = new v(e, 0, !1, e, null, !1, !1)
      })),
      [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach((function(e) {
        var t = e[0];
        m[t] = new v(t, 1, !1, e[1], null, !1, !1)
      })),
      ["contentEditable", "draggable", "spellCheck", "value"].forEach((function(e) {
        m[e] = new v(e, 2, !1, e.toLowerCase(), null, !1, !1)
      })),
      ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach((function(e) {
        m[e] = new v(e, 2, !1, e, null, !1, !1)
      })),
      "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e) {
        m[e] = new v(e, 3, !1, e.toLowerCase(), null, !1, !1)
      })),
      ["checked", "multiple", "muted", "selected"].forEach((function(e) {
        m[e] = new v(e, 3, !0, e, null, !1, !1)
      })),
      ["capture", "download"].forEach((function(e) {
        m[e] = new v(e, 4, !1, e, null, !1, !1)
      })),
      ["cols", "rows", "size", "span"].forEach((function(e) {
        m[e] = new v(e, 6, !1, e, null, !1, !1)
      })),
      ["rowSpan", "start"].forEach((function(e) {
        m[e] = new v(e, 5, !1, e.toLowerCase(), null, !1, !1)
      }));
      var h = /[\-:]([a-z])/g;
      function y(e) {
        return e[1].toUpperCase()
      }
      function b(e, t, n, r) {
        var a = m.hasOwnProperty(t) ? m[t] : null; (null !== a ? 0 !== a.type: r || !(2 < t.length) || "o" !== t[0] && "O" !== t[0] || "n" !== t[1] && "N" !== t[1]) && (function(e, t, n, r) {
          if (null === t || "undefined" === typeof t ||
          function(e, t, n, r) {
            if (null !== n && 0 === n.type) return ! 1;
            switch (typeof t) {
            case "function":
            case "symbol":
              return ! 0;
            case "boolean":
              return ! r && (null !== n ? !n.acceptsBooleans: "data-" !== (e = e.toLowerCase().slice(0, 5)) && "aria-" !== e);
            default:
              return ! 1
            }
          } (e, t, n, r)) return ! 0;
          if (r) return ! 1;
          if (null !== n) switch (n.type) {
          case 3:
            return ! t;
          case 4:
            return ! 1 === t;
          case 5:
            return isNaN(t);
          case 6:
            return isNaN(t) || 1 > t
          }
          return ! 1
        } (t, n, a, r) && (n = null), r || null === a ?
        function(e) {
          return !! d.call(g, e) || !d.call(p, e) && (f.test(e) ? g[e] = !0 : (p[e] = !0, !1))
        } (t) && (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : a.mustUseProperty ? e[a.propertyName] = null === n ? 3 !== a.type && "": n: (t = a.attributeName, r = a.attributeNamespace, null === n ? e.removeAttribute(t) : (n = 3 === (a = a.type) || 4 === a && !0 === n ? "": "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
      }
      "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e) {
        var t = e.replace(h, y);
        m[t] = new v(t, 1, !1, e, null, !1, !1)
      })),
      "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e) {
        var t = e.replace(h, y);
        m[t] = new v(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
      })),
      ["xml:base", "xml:lang", "xml:space"].forEach((function(e) {
        var t = e.replace(h, y);
        m[t] = new v(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
      })),
      ["tabIndex", "crossOrigin"].forEach((function(e) {
        m[e] = new v(e, 1, !1, e.toLowerCase(), null, !1, !1)
      })),
      m.xlinkHref = new v("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1),
      ["src", "href", "action", "formAction"].forEach((function(e) {
        m[e] = new v(e, 1, !1, e.toLowerCase(), null, !0, !0)
      }));
      var x = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
      w = Symbol.
      for ("react.element"),
      k = Symbol.
      for ("react.portal"),
      _ = Symbol.
      for ("react.fragment"),
      S = Symbol.
      for ("react.strict_mode"),
      E = Symbol.
      for ("react.profiler"),
      C = Symbol.
      for ("react.provider"),
      A = Symbol.
      for ("react.context"),
      P = Symbol.
      for ("react.forward_ref"),
      T = Symbol.
      for ("react.suspense"),
      z = Symbol.
      for ("react.suspense_list"),
      j = Symbol.
      for ("react.memo"),
      R = Symbol.
      for ("react.lazy");
      Symbol.
      for ("react.scope"),
      Symbol.
      for ("react.debug_trace_mode");
      var M = Symbol.
      for ("react.offscreen");
      Symbol.
      for ("react.legacy_hidden"),
      Symbol.
      for ("react.cache"),
      Symbol.
      for ("react.tracing_marker");
      var N = Symbol.iterator;
      function O(e) {
        return null === e || "object" !== typeof e ? null: "function" === typeof(e = N && e[N] || e["@@iterator"]) ? e: null
      }
      var B, L = Object.assign;
      function F(e) {
        if (void 0 === B) try {
          throw Error()
        } catch(n) {
          var t = n.stack.trim().match(/\n( *(at )?)/);
          B = t && t[1] || ""
        }
        return "\n" + B + e
      }
      var D = !1;
      function I(e, t) {
        if (!e || D) return "";
        D = !0;
        var n = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
          if (t) if (t = function() {
            throw Error()
          },
          Object.defineProperty(t.prototype, "props", {
            set: function() {
              throw Error()
            }
          }), "object" === typeof Reflect && Reflect.construct) {
            try {
              Reflect.construct(t, [])
            } catch(c) {
              var r = c
            }
            Reflect.construct(e, [], t)
          } else {
            try {
              t.call()
            } catch(c) {
              r = c
            }
            e.call(t.prototype)
          } else {
            try {
              throw Error()
            } catch(c) {
              r = c
            }
            e()
          }
        } catch(c) {
          if (c && r && "string" === typeof c.stack) {
            for (var a = c.stack.split("\n"), o = r.stack.split("\n"), i = a.length - 1, l = o.length - 1; 1 <= i && 0 <= l && a[i] !== o[l];) l--;
            for (; 1 <= i && 0 <= l; i--, l--) if (a[i] !== o[l]) {
              if (1 !== i || 1 !== l) do {
                if (i--, 0 > --l || a[i] !== o[l]) {
                  var s = "\n" + a[i].replace(" at new ", " at ");
                  return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)),
                  s
                }
              } while ( 1 <= i && 0 <= l );
              break
            }
          }
        } finally {
          D = !1,
          Error.prepareStackTrace = n
        }
        return (e = e ? e.displayName || e.name: "") ? F(e) : ""
      }
      function V(e) {
        switch (e.tag) {
        case 5:
          return F(e.type);
        case 16:
          return F("Lazy");
        case 13:
          return F("Suspense");
        case 19:
          return F("SuspenseList");
        case 0:
        case 2:
        case 15:
          return e = I(e.type, !1);
        case 11:
          return e = I(e.type.render, !1);
        case 1:
          return e = I(e.type, !0);
        default:
          return ""
        }
      }
      function W(e) {
        if (null == e) return null;
        if ("function" === typeof e) return e.displayName || e.name || null;
        if ("string" === typeof e) return e;
        switch (e) {
        case _:
          return "Fragment";
        case k:
          return "Portal";
        case E:
          return "Profiler";
        case S:
          return "StrictMode";
        case T:
          return "Suspense";
        case z:
          return "SuspenseList"
        }
        if ("object" === typeof e) switch (e.$$typeof) {
        case A:
          return (e.displayName || "Context") + ".Consumer";
        case C:
          return (e._context.displayName || "Context") + ".Provider";
        case P:
          var t = e.render;
          return (e = e.displayName) || (e = "" !== (e = t.displayName || t.name || "") ? "ForwardRef(" + e + ")": "ForwardRef"),
          e;
        case j:
          return null !== (t = e.displayName || null) ? t: W(e.type) || "Memo";
        case R:
          t = e._payload,
          e = e._init;
          try {
            return W(e(t))
          } catch(n) {}
        }
        return null
      }
      function U(e) {
        var t = e.type;
        switch (e.tag) {
        case 24:
          return "Cache";
        case 9:
          return (t.displayName || "Context") + ".Consumer";
        case 10:
          return (t._context.displayName || "Context") + ".Provider";
        case 18:
          return "DehydratedFragment";
        case 11:
          return e = (e = t.render).displayName || e.name || "",
          t.displayName || ("" !== e ? "ForwardRef(" + e + ")": "ForwardRef");
        case 7:
          return "Fragment";
        case 5:
          return t;
        case 4:
          return "Portal";
        case 3:
          return "Root";
        case 6:
          return "Text";
        case 16:
          return W(t);
        case 8:
          return t === S ? "StrictMode": "Mode";
        case 22:
          return "Offscreen";
        case 12:
          return "Profiler";
        case 21:
          return "Scope";
        case 13:
          return "Suspense";
        case 19:
          return "SuspenseList";
        case 25:
          return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
          if ("function" === typeof t) return t.displayName || t.name || null;
          if ("string" === typeof t) return t
        }
        return null
      }
      function H(e) {
        switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
        case "object":
          return e;
        default:
          return ""
        }
      }
      function $(e) {
        var t = e.type;
        return (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === t || "radio" === t)
      }
      function q(e) {
        e._valueTracker || (e._valueTracker = function(e) {
          var t = $(e) ? "checked": "value",
          n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
          r = "" + e[t];
          if (!e.hasOwnProperty(t) && "undefined" !== typeof n && "function" === typeof n.get && "function" === typeof n.set) {
            var a = n.get,
            o = n.set;
            return Object.defineProperty(e, t, {
              configurable: !0,
              get: function() {
                return a.call(this)
              },
              set: function(e) {
                r = "" + e,
                o.call(this, e)
              }
            }),
            Object.defineProperty(e, t, {
              enumerable: n.enumerable
            }),
            {
              getValue: function() {
                return r
              },
              setValue: function(e) {
                r = "" + e
              },
              stopTracking: function() {
                e._valueTracker = null,
                delete e[t]
              }
            }
          }
        } (e))
      }
      function G(e) {
        if (!e) return ! 1;
        var t = e._valueTracker;
        if (!t) return ! 0;
        var n = t.getValue(),
        r = "";
        return e && (r = $(e) ? e.checked ? "true": "false": e.value),
        (e = r) !== n && (t.setValue(e), !0)
      }
      function Y(e) {
        if ("undefined" === typeof(e = e || ("undefined" !== typeof document ? document: void 0))) return null;
        try {
          return e.activeElement || e.body
        } catch(t) {
          return e.body
        }
      }
      function X(e, t) {
        var n = t.checked;
        return L({},
        t, {
          defaultChecked: void 0,
          defaultValue: void 0,
          value: void 0,
          checked: null != n ? n: e._wrapperState.initialChecked
        })
      }
      function K(e, t) {
        var n = null == t.defaultValue ? "": t.defaultValue,
        r = null != t.checked ? t.checked: t.defaultChecked;
        n = H(null != t.value ? t.value: n),
        e._wrapperState = {
          initialChecked: r,
          initialValue: n,
          controlled: "checkbox" === t.type || "radio" === t.type ? null != t.checked: null != t.value
        }
      }
      function Q(e, t) {
        null != (t = t.checked) && b(e, "checked", t, !1)
      }
      function Z(e, t) {
        Q(e, t);
        var n = H(t.value),
        r = t.type;
        if (null != n)"number" === r ? (0 === n && "" === e.value || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
        else if ("submit" === r || "reset" === r) return void e.removeAttribute("value");
        t.hasOwnProperty("value") ? ee(e, t.type, n) : t.hasOwnProperty("defaultValue") && ee(e, t.type, H(t.defaultValue)),
        null == t.checked && null != t.defaultChecked && (e.defaultChecked = !!t.defaultChecked)
      }
      function J(e, t, n) {
        if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
          var r = t.type;
          if (! ("submit" !== r && "reset" !== r || void 0 !== t.value && null !== t.value)) return;
          t = "" + e._wrapperState.initialValue,
          n || t === e.value || (e.value = t),
          e.defaultValue = t
        }
        "" !== (n = e.name) && (e.name = ""),
        e.defaultChecked = !!e._wrapperState.initialChecked,
        "" !== n && (e.name = n)
      }
      function ee(e, t, n) {
        "number" === t && Y(e.ownerDocument) === e || (null == n ? e.defaultValue = "" + e._wrapperState.initialValue: e.defaultValue !== "" + n && (e.defaultValue = "" + n))
      }
      var te = Array.isArray;
      function ne(e, t, n, r) {
        if (e = e.options, t) {
          t = {};
          for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
          for (n = 0; n < e.length; n++) a = t.hasOwnProperty("$" + e[n].value),
          e[n].selected !== a && (e[n].selected = a),
          a && r && (e[n].defaultSelected = !0)
        } else {
          for (n = "" + H(n), t = null, a = 0; a < e.length; a++) {
            if (e[a].value === n) return e[a].selected = !0,
            void(r && (e[a].defaultSelected = !0));
            null !== t || e[a].disabled || (t = e[a])
          }
          null !== t && (t.selected = !0)
        }
      }
      function re(e, t) {
        if (null != t.dangerouslySetInnerHTML) throw Error(o(91));
        return L({},
        t, {
          value: void 0,
          defaultValue: void 0,
          children: "" + e._wrapperState.initialValue
        })
      }
      function ae(e, t) {
        var n = t.value;
        if (null == n) {
          if (n = t.children, t = t.defaultValue, null != n) {
            if (null != t) throw Error(o(92));
            if (te(n)) {
              if (1 < n.length) throw Error(o(93));
              n = n[0]
            }
            t = n
          }
          null == t && (t = ""),
          n = t
        }
        e._wrapperState = {
          initialValue: H(n)
        }
      }
      function oe(e, t) {
        var n = H(t.value),
        r = H(t.defaultValue);
        null != n && ((n = "" + n) !== e.value && (e.value = n), null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)),
        null != r && (e.defaultValue = "" + r)
      }
      function ie(e) {
        var t = e.textContent;
        t === e._wrapperState.initialValue && "" !== t && null !== t && (e.value = t)
      }
      function le(e) {
        switch (e) {
        case "svg":
          return "http://www.w3.org/2000/svg";
        case "math":
          return "http://www.w3.org/1998/Math/MathML";
        default:
          return "http://www.w3.org/1999/xhtml"
        }
      }
      function se(e, t) {
        return null == e || "http://www.w3.org/1999/xhtml" === e ? le(t) : "http://www.w3.org/2000/svg" === e && "foreignObject" === t ? "http://www.w3.org/1999/xhtml": e
      }
      var ce, ue, de = (ue = function(e, t) {
        if ("http://www.w3.org/2000/svg" !== e.namespaceURI || "innerHTML" in e) e.innerHTML = t;
        else {
          for ((ce = ce || document.createElement("div")).innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = ce.firstChild; e.firstChild;) e.removeChild(e.firstChild);
          for (; t.firstChild;) e.appendChild(t.firstChild)
        }
      },
      "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ?
      function(e, t, n, r) {
        MSApp.execUnsafeLocalFunction((function() {
          return ue(e, t)
        }))
      }: ue);
      function fe(e, t) {
        if (t) {
          var n = e.firstChild;
          if (n && n === e.lastChild && 3 === n.nodeType) return void(n.nodeValue = t)
        }
        e.textContent = t
      }
      var pe = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0
      },
      ge = ["Webkit", "ms", "Moz", "O"];
      function ve(e, t, n) {
        return null == t || "boolean" === typeof t || "" === t ? "": n || "number" !== typeof t || 0 === t || pe.hasOwnProperty(e) && pe[e] ? ("" + t).trim() : t + "px"
      }
      function me(e, t) {
        for (var n in e = e.style,
        t) if (t.hasOwnProperty(n)) {
          var r = 0 === n.indexOf("--"),
          a = ve(n, t[n], r);
          "float" === n && (n = "cssFloat"),
          r ? e.setProperty(n, a) : e[n] = a
        }
      }
      Object.keys(pe).forEach((function(e) {
        ge.forEach((function(t) {
          t = t + e.charAt(0).toUpperCase() + e.substring(1),
          pe[t] = pe[e]
        }))
      }));
      var he = L({
        menuitem: !0
      },
      {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
      });
      function ye(e, t) {
        if (t) {
          if (he[e] && (null != t.children || null != t.dangerouslySetInnerHTML)) throw Error(o(137, e));
          if (null != t.dangerouslySetInnerHTML) {
            if (null != t.children) throw Error(o(60));
            if ("object" !== typeof t.dangerouslySetInnerHTML || !("__html" in t.dangerouslySetInnerHTML)) throw Error(o(61))
          }
          if (null != t.style && "object" !== typeof t.style) throw Error(o(62))
        }
      }
      function be(e, t) {
        if ( - 1 === e.indexOf("-")) return "string" === typeof t.is;
        switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return ! 1;
        default:
          return ! 0
        }
      }
      var xe = null;
      function we(e) {
        return (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement),
        3 === e.nodeType ? e.parentNode: e
      }
      var ke = null,
      _e = null,
      Se = null;
      function Ee(e) {
        if (e = ba(e)) {
          if ("function" !== typeof ke) throw Error(o(280));
          var t = e.stateNode;
          t && (t = wa(t), ke(e.stateNode, e.type, t))
        }
      }
      function Ce(e) {
        _e ? Se ? Se.push(e) : Se = [e] : _e = e
      }
      function Ae() {
        if (_e) {
          var e = _e,
          t = Se;
          if (Se = _e = null, Ee(e), t) for (e = 0; e < t.length; e++) Ee(t[e])
        }
      }
      function Pe(e, t) {
        return e(t)
      }
      function Te() {}
      var ze = !1;
      function je(e, t, n) {
        if (ze) return e(t, n);
        ze = !0;
        try {
          return Pe(e, t, n)
        } finally {
          ze = !1,
          (null !== _e || null !== Se) && (Te(), Ae())
        }
      }
      function Re(e, t) {
        var n = e.stateNode;
        if (null === n) return null;
        var r = wa(n);
        if (null === r) return null;
        n = r[t];
        e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          (r = !r.disabled) || (r = !("button" === (e = e.type) || "input" === e || "select" === e || "textarea" === e)),
          e = !r;
          break e;
        default:
          e = !1
        }
        if (e) return null;
        if (n && "function" !== typeof n) throw Error(o(231, t, typeof n));
        return n
      }
      var Me = !1;
      if (u) try {
        var Ne = {};
        Object.defineProperty(Ne, "passive", {
          get: function() {
            Me = !0
          }
        }),
        window.addEventListener("test", Ne, Ne),
        window.removeEventListener("test", Ne, Ne)
      } catch(ue) {
        Me = !1
      }
      function Oe(e, t, n, r, a, o, i, l, s) {
        var c = Array.prototype.slice.call(arguments, 3);
        try {
          t.apply(n, c)
        } catch(u) {
          this.onError(u)
        }
      }
      var Be = !1,
      Le = null,
      Fe = !1,
      De = null,
      Ie = {
        onError: function(e) {
          Be = !0,
          Le = e
        }
      };
      function Ve(e, t, n, r, a, o, i, l, s) {
        Be = !1,
        Le = null,
        Oe.apply(Ie, arguments)
      }
      function We(e) {
        var t = e,
        n = e;
        if (e.alternate) for (; t.
        return;) t = t.
        return;
        else {
          e = t;
          do {
            0 !== (4098 & (t = e).flags) && (n = t.
            return), e = t.
            return
          } while ( e )
        }
        return 3 === t.tag ? n: null
      }
      function Ue(e) {
        if (13 === e.tag) {
          var t = e.memoizedState;
          if (null === t && (null !== (e = e.alternate) && (t = e.memoizedState)), null !== t) return t.dehydrated
        }
        return null
      }
      function He(e) {
        if (We(e) !== e) throw Error(o(188))
      }
      function $e(e) {
        return null !== (e = function(e) {
          var t = e.alternate;
          if (!t) {
            if (null === (t = We(e))) throw Error(o(188));
            return t !== e ? null: e
          }
          for (var n = e,
          r = t;;) {
            var a = n.
            return;
            if (null === a) break;
            var i = a.alternate;
            if (null === i) {
              if (null !== (r = a.
              return)) {
                n = r;
                continue
              }
              break
            }
            if (a.child === i.child) {
              for (i = a.child; i;) {
                if (i === n) return He(a),
                e;
                if (i === r) return He(a),
                t;
                i = i.sibling
              }
              throw Error(o(188))
            }
            if (n.
            return !== r.
            return) n = a,
            r = i;
            else {
              for (var l = !1,
              s = a.child; s;) {
                if (s === n) {
                  l = !0,
                  n = a,
                  r = i;
                  break
                }
                if (s === r) {
                  l = !0,
                  r = a,
                  n = i;
                  break
                }
                s = s.sibling
              }
              if (!l) {
                for (s = i.child; s;) {
                  if (s === n) {
                    l = !0,
                    n = i,
                    r = a;
                    break
                  }
                  if (s === r) {
                    l = !0,
                    r = i,
                    n = a;
                    break
                  }
                  s = s.sibling
                }
                if (!l) throw Error(o(189))
              }
            }
            if (n.alternate !== r) throw Error(o(190))
          }
          if (3 !== n.tag) throw Error(o(188));
          return n.stateNode.current === n ? e: t
        } (e)) ? qe(e) : null
      }
      function qe(e) {
        if (5 === e.tag || 6 === e.tag) return e;
        for (e = e.child; null !== e;) {
          var t = qe(e);
          if (null !== t) return t;
          e = e.sibling
        }
        return null
      }
      var Ge = a.unstable_scheduleCallback,
      Ye = a.unstable_cancelCallback,
      Xe = a.unstable_shouldYield,
      Ke = a.unstable_requestPaint,
      Qe = a.unstable_now,
      Ze = a.unstable_getCurrentPriorityLevel,
      Je = a.unstable_ImmediatePriority,
      et = a.unstable_UserBlockingPriority,
      tt = a.unstable_NormalPriority,
      nt = a.unstable_LowPriority,
      rt = a.unstable_IdlePriority,
      at = null,
      ot = null;
      var it = Math.clz32 ? Math.clz32: function(e) {
        return e >>>= 0,
        0 === e ? 32 : 31 - (lt(e) / st | 0) | 0
      },
      lt = Math.log,
      st = Math.LN2;
      var ct = 64,
      ut = 4194304;
      function dt(e) {
        switch (e & -e) {
        case 1:
          return 1;
        case 2:
          return 2;
        case 4:
          return 4;
        case 8:
          return 8;
        case 16:
          return 16;
        case 32:
          return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return 4194240 & e;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          return 130023424 & e;
        case 134217728:
          return 134217728;
        case 268435456:
          return 268435456;
        case 536870912:
          return 536870912;
        case 1073741824:
          return 1073741824;
        default:
          return e
        }
      }
      function ft(e, t) {
        var n = e.pendingLanes;
        if (0 === n) return 0;
        var r = 0,
        a = e.suspendedLanes,
        o = e.pingedLanes,
        i = 268435455 & n;
        if (0 !== i) {
          var l = i & ~a;
          0 !== l ? r = dt(l) : 0 !== (o &= i) && (r = dt(o))
        } else 0 !== (i = n & ~a) ? r = dt(i) : 0 !== o && (r = dt(o));
        if (0 === r) return 0;
        if (0 !== t && t !== r && 0 === (t & a) && ((a = r & -r) >= (o = t & -t) || 16 === a && 0 !== (4194240 & o))) return t;
        if (0 !== (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)) for (e = e.entanglements, t &= r; 0 < t;) a = 1 << (n = 31 - it(t)),
        r |= e[n],
        t &= ~a;
        return r
      }
      function pt(e, t) {
        switch (e) {
        case 1:
        case 2:
        case 4:
          return t + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return t + 5e3;
        default:
          return - 1
        }
      }
      function gt(e) {
        return 0 !== (e = -1073741825 & e.pendingLanes) ? e: 1073741824 & e ? 1073741824 : 0
      }
      function vt() {
        var e = ct;
        return 0 === (4194240 & (ct <<= 1)) && (ct = 64),
        e
      }
      function mt(e) {
        for (var t = [], n = 0; 31 > n; n++) t.push(e);
        return t
      }
      function ht(e, t, n) {
        e.pendingLanes |= t,
        536870912 !== t && (e.suspendedLanes = 0, e.pingedLanes = 0),
        (e = e.eventTimes)[t = 31 - it(t)] = n
      }
      function yt(e, t) {
        var n = e.entangledLanes |= t;
        for (e = e.entanglements; n;) {
          var r = 31 - it(n),
          a = 1 << r;
          a & t | e[r] & t && (e[r] |= t),
          n &= ~a
        }
      }
      var bt = 0;
      function xt(e) {
        return 1 < (e &= -e) ? 4 < e ? 0 !== (268435455 & e) ? 16 : 536870912 : 4 : 1
      }
      var wt, kt, _t, St, Et, Ct = !1,
      At = [],
      Pt = null,
      Tt = null,
      zt = null,
      jt = new Map,
      Rt = new Map,
      Mt = [],
      Nt = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
      function Ot(e, t) {
        switch (e) {
        case "focusin":
        case "focusout":
          Pt = null;
          break;
        case "dragenter":
        case "dragleave":
          Tt = null;
          break;
        case "mouseover":
        case "mouseout":
          zt = null;
          break;
        case "pointerover":
        case "pointerout":
          jt.delete(t.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          Rt.delete(t.pointerId)
        }
      }
      function Bt(e, t, n, r, a, o) {
        return null === e || e.nativeEvent !== o ? (e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: r,
          nativeEvent: o,
          targetContainers: [a]
        },
        null !== t && (null !== (t = ba(t)) && kt(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, null !== a && -1 === t.indexOf(a) && t.push(a), e)
      }
      function Lt(e) {
        var t = ya(e.target);
        if (null !== t) {
          var n = We(t);
          if (null !== n) if (13 === (t = n.tag)) {
            if (null !== (t = Ue(n))) return e.blockedOn = t,
            void Et(e.priority, (function() {
              _t(n)
            }))
          } else if (3 === t && n.stateNode.current.memoizedState.isDehydrated) return void(e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo: null)
        }
        e.blockedOn = null
      }
      function Ft(e) {
        if (null !== e.blockedOn) return ! 1;
        for (var t = e.targetContainers; 0 < t.length;) {
          var n = Xt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
          if (null !== n) return null !== (t = ba(n)) && kt(t),
          e.blockedOn = n,
          !1;
          var r = new(n = e.nativeEvent).constructor(n.type, n);
          xe = r,
          n.target.dispatchEvent(r),
          xe = null,
          t.shift()
        }
        return ! 0
      }
      function Dt(e, t, n) {
        Ft(e) && n.delete(t)
      }
      function It() {
        Ct = !1,
        null !== Pt && Ft(Pt) && (Pt = null),
        null !== Tt && Ft(Tt) && (Tt = null),
        null !== zt && Ft(zt) && (zt = null),
        jt.forEach(Dt),
        Rt.forEach(Dt)
      }
      function Vt(e, t) {
        e.blockedOn === t && (e.blockedOn = null, Ct || (Ct = !0, a.unstable_scheduleCallback(a.unstable_NormalPriority, It)))
      }
      function Wt(e) {
        function t(t) {
          return Vt(t, e)
        }
        if (0 < At.length) {
          Vt(At[0], e);
          for (var n = 1; n < At.length; n++) {
            var r = At[n];
            r.blockedOn === e && (r.blockedOn = null)
          }
        }
        for (null !== Pt && Vt(Pt, e), null !== Tt && Vt(Tt, e), null !== zt && Vt(zt, e), jt.forEach(t), Rt.forEach(t), n = 0; n < Mt.length; n++)(r = Mt[n]).blockedOn === e && (r.blockedOn = null);
        for (; 0 < Mt.length && null === (n = Mt[0]).blockedOn;) Lt(n),
        null === n.blockedOn && Mt.shift()
      }
      var Ut = x.ReactCurrentBatchConfig,
      Ht = !0;
      function $t(e, t, n, r) {
        var a = bt,
        o = Ut.transition;
        Ut.transition = null;
        try {
          bt = 1,
          Gt(e, t, n, r)
        } finally {
          bt = a,
          Ut.transition = o
        }
      }
      function qt(e, t, n, r) {
        var a = bt,
        o = Ut.transition;
        Ut.transition = null;
        try {
          bt = 4,
          Gt(e, t, n, r)
        } finally {
          bt = a,
          Ut.transition = o
        }
      }
      function Gt(e, t, n, r) {
        if (Ht) {
          var a = Xt(e, t, n, r);
          if (null === a) Hr(e, t, r, Yt, n),
          Ot(e, r);
          else if (function(e, t, n, r, a) {
            switch (t) {
            case "focusin":
              return Pt = Bt(Pt, e, t, n, r, a),
              !0;
            case "dragenter":
              return Tt = Bt(Tt, e, t, n, r, a),
              !0;
            case "mouseover":
              return zt = Bt(zt, e, t, n, r, a),
              !0;
            case "pointerover":
              var o = a.pointerId;
              return jt.set(o, Bt(jt.get(o) || null, e, t, n, r, a)),
              !0;
            case "gotpointercapture":
              return o = a.pointerId,
              Rt.set(o, Bt(Rt.get(o) || null, e, t, n, r, a)),
              !0
            }
            return ! 1
          } (a, e, t, n, r)) r.stopPropagation();
          else if (Ot(e, r), 4 & t && -1 < Nt.indexOf(e)) {
            for (; null !== a;) {
              var o = ba(a);
              if (null !== o && wt(o), null === (o = Xt(e, t, n, r)) && Hr(e, t, r, Yt, n), o === a) break;
              a = o
            }
            null !== a && r.stopPropagation()
          } else Hr(e, t, r, null, n)
        }
      }
      var Yt = null;
      function Xt(e, t, n, r) {
        if (Yt = null, null !== (e = ya(e = we(r)))) if (null === (t = We(e))) e = null;
        else if (13 === (n = t.tag)) {
          if (null !== (e = Ue(t))) return e;
          e = null
        } else if (3 === n) {
          if (t.stateNode.current.memoizedState.isDehydrated) return 3 === t.tag ? t.stateNode.containerInfo: null;
          e = null
        } else t !== e && (e = null);
        return Yt = e,
        null
      }
      function Kt(e) {
        switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return 4;
        case "message":
          switch (Ze()) {
          case Je:
            return 1;
          case et:
            return 4;
          case tt:
          case nt:
            return 16;
          case rt:
            return 536870912;
          default:
            return 16
          }
        default:
          return 16
        }
      }
      var Qt = null,
      Zt = null,
      Jt = null;
      function en() {
        if (Jt) return Jt;
        var e, t, n = Zt,
        r = n.length,
        a = "value" in Qt ? Qt.value: Qt.textContent,
        o = a.length;
        for (e = 0; e < r && n[e] === a[e]; e++);
        var i = r - e;
        for (t = 1; t <= i && n[r - t] === a[o - t]; t++);
        return Jt = a.slice(e, 1 < t ? 1 - t: void 0)
      }
      function tn(e) {
        var t = e.keyCode;
        return "charCode" in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : e = t,
        10 === e && (e = 13),
        32 <= e || 13 === e ? e: 0
      }
      function nn() {
        return ! 0
      }
      function rn() {
        return ! 1
      }
      function an(e) {
        function t(t, n, r, a, o) {
          for (var i in this._reactName = t,
          this._targetInst = r,
          this.type = n,
          this.nativeEvent = a,
          this.target = o,
          this.currentTarget = null,
          e) e.hasOwnProperty(i) && (t = e[i], this[i] = t ? t(a) : a[i]);
          return this.isDefaultPrevented = (null != a.defaultPrevented ? a.defaultPrevented: !1 === a.returnValue) ? nn: rn,
          this.isPropagationStopped = rn,
          this
        }
        return L(t.prototype, {
          preventDefault: function() {
            this.defaultPrevented = !0;
            var e = this.nativeEvent;
            e && (e.preventDefault ? e.preventDefault() : "unknown" !== typeof e.returnValue && (e.returnValue = !1), this.isDefaultPrevented = nn)
          },
          stopPropagation: function() {
            var e = this.nativeEvent;
            e && (e.stopPropagation ? e.stopPropagation() : "unknown" !== typeof e.cancelBubble && (e.cancelBubble = !0), this.isPropagationStopped = nn)
          },
          persist: function() {},
          isPersistent: nn
        }),
        t
      }
      var on, ln, sn, cn = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(e) {
          return e.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
      },
      un = an(cn),
      dn = L({},
      cn, {
        view: 0,
        detail: 0
      }),
      fn = an(dn),
      pn = L({},
      dn, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: En,
        button: 0,
        buttons: 0,
        relatedTarget: function(e) {
          return void 0 === e.relatedTarget ? e.fromElement === e.srcElement ? e.toElement: e.fromElement: e.relatedTarget
        },
        movementX: function(e) {
          return "movementX" in e ? e.movementX: (e !== sn && (sn && "mousemove" === e.type ? (on = e.screenX - sn.screenX, ln = e.screenY - sn.screenY) : ln = on = 0, sn = e), on)
        },
        movementY: function(e) {
          return "movementY" in e ? e.movementY: ln
        }
      }),
      gn = an(pn),
      vn = an(L({},
      pn, {
        dataTransfer: 0
      })),
      mn = an(L({},
      dn, {
        relatedTarget: 0
      })),
      hn = an(L({},
      cn, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
      })),
      yn = L({},
      cn, {
        clipboardData: function(e) {
          return "clipboardData" in e ? e.clipboardData: window.clipboardData
        }
      }),
      bn = an(yn),
      xn = an(L({},
      cn, {
        data: 0
      })),
      wn = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
      },
      kn = {
        8 : "Backspace",
        9 : "Tab",
        12 : "Clear",
        13 : "Enter",
        16 : "Shift",
        17 : "Control",
        18 : "Alt",
        19 : "Pause",
        20 : "CapsLock",
        27 : "Escape",
        32 : " ",
        33 : "PageUp",
        34 : "PageDown",
        35 : "End",
        36 : "Home",
        37 : "ArrowLeft",
        38 : "ArrowUp",
        39 : "ArrowRight",
        40 : "ArrowDown",
        45 : "Insert",
        46 : "Delete",
        112 : "F1",
        113 : "F2",
        114 : "F3",
        115 : "F4",
        116 : "F5",
        117 : "F6",
        118 : "F7",
        119 : "F8",
        120 : "F9",
        121 : "F10",
        122 : "F11",
        123 : "F12",
        144 : "NumLock",
        145 : "ScrollLock",
        224 : "Meta"
      },
      _n = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
      };
      function Sn(e) {
        var t = this.nativeEvent;
        return t.getModifierState ? t.getModifierState(e) : !!(e = _n[e]) && !!t[e]
      }
      function En() {
        return Sn
      }
      var Cn = L({},
      dn, {
        key: function(e) {
          if (e.key) {
            var t = wn[e.key] || e.key;
            if ("Unidentified" !== t) return t
          }
          return "keypress" === e.type ? 13 === (e = tn(e)) ? "Enter": String.fromCharCode(e) : "keydown" === e.type || "keyup" === e.type ? kn[e.keyCode] || "Unidentified": ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: En,
        charCode: function(e) {
          return "keypress" === e.type ? tn(e) : 0
        },
        keyCode: function(e) {
          return "keydown" === e.type || "keyup" === e.type ? e.keyCode: 0
        },
        which: function(e) {
          return "keypress" === e.type ? tn(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode: 0
        }
      }),
      An = an(Cn),
      Pn = an(L({},
      pn, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
      })),
      Tn = an(L({},
      dn, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: En
      })),
      zn = an(L({},
      cn, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
      })),
      jn = L({},
      pn, {
        deltaX: function(e) {
          return "deltaX" in e ? e.deltaX: "wheelDeltaX" in e ? -e.wheelDeltaX: 0
        },
        deltaY: function(e) {
          return "deltaY" in e ? e.deltaY: "wheelDeltaY" in e ? -e.wheelDeltaY: "wheelDelta" in e ? -e.wheelDelta: 0
        },
        deltaZ: 0,
        deltaMode: 0
      }),
      Rn = an(jn),
      Mn = [9, 13, 27, 32],
      Nn = u && "CompositionEvent" in window,
      On = null;
      u && "documentMode" in document && (On = document.documentMode);
      var Bn = u && "TextEvent" in window && !On,
      Ln = u && (!Nn || On && 8 < On && 11 >= On),
      Fn = String.fromCharCode(32),
      Dn = !1;
      function In(e, t) {
        switch (e) {
        case "keyup":
          return - 1 !== Mn.indexOf(t.keyCode);
        case "keydown":
          return 229 !== t.keyCode;
        case "keypress":
        case "mousedown":
        case "focusout":
          return ! 0;
        default:
          return ! 1
        }
      }
      function Vn(e) {
        return "object" === typeof(e = e.detail) && "data" in e ? e.data: null
      }
      var Wn = !1;
      var Un = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0
      };
      function Hn(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return "input" === t ? !!Un[e.type] : "textarea" === t
      }
      function $n(e, t, n, r) {
        Ce(r),
        0 < (t = qr(t, "onChange")).length && (n = new un("onChange", "change", null, n, r), e.push({
          event: n,
          listeners: t
        }))
      }
      var qn = null,
      Gn = null;
      function Yn(e) {
        Fr(e, 0)
      }
      function Xn(e) {
        if (G(xa(e))) return e
      }
      function Kn(e, t) {
        if ("change" === e) return t
      }
      var Qn = !1;
      if (u) {
        var Zn;
        if (u) {
          var Jn = "oninput" in document;
          if (!Jn) {
            var er = document.createElement("div");
            er.setAttribute("oninput", "return;"),
            Jn = "function" === typeof er.oninput
          }
          Zn = Jn
        } else Zn = !1;
        Qn = Zn && (!document.documentMode || 9 < document.documentMode)
      }
      function tr() {
        qn && (qn.detachEvent("onpropertychange", nr), Gn = qn = null)
      }
      function nr(e) {
        if ("value" === e.propertyName && Xn(Gn)) {
          var t = [];
          $n(t, Gn, e, we(e)),
          je(Yn, t)
        }
      }
      function rr(e, t, n) {
        "focusin" === e ? (tr(), Gn = n, (qn = t).attachEvent("onpropertychange", nr)) : "focusout" === e && tr()
      }
      function ar(e) {
        if ("selectionchange" === e || "keyup" === e || "keydown" === e) return Xn(Gn)
      }
      function or(e, t) {
        if ("click" === e) return Xn(t)
      }
      function ir(e, t) {
        if ("input" === e || "change" === e) return Xn(t)
      }
      var lr = "function" === typeof Object.is ? Object.is: function(e, t) {
        return e === t && (0 !== e || 1 / e === 1 / t) || e !== e && t !== t
      };
      function sr(e, t) {
        if (lr(e, t)) return ! 0;
        if ("object" !== typeof e || null === e || "object" !== typeof t || null === t) return ! 1;
        var n = Object.keys(e),
        r = Object.keys(t);
        if (n.length !== r.length) return ! 1;
        for (r = 0; r < n.length; r++) {
          var a = n[r];
          if (!d.call(t, a) || !lr(e[a], t[a])) return ! 1
        }
        return ! 0
      }
      function cr(e) {
        for (; e && e.firstChild;) e = e.firstChild;
        return e
      }
      function ur(e, t) {
        var n, r = cr(e);
        for (e = 0; r;) {
          if (3 === r.nodeType) {
            if (n = e + r.textContent.length, e <= t && n >= t) return {
              node: r,
              offset: t - e
            };
            e = n
          }
          e: {
            for (; r;) {
              if (r.nextSibling) {
                r = r.nextSibling;
                break e
              }
              r = r.parentNode
            }
            r = void 0
          }
          r = cr(r)
        }
      }
      function dr(e, t) {
        return ! (!e || !t) && (e === t || (!e || 3 !== e.nodeType) && (t && 3 === t.nodeType ? dr(e, t.parentNode) : "contains" in e ? e.contains(t) : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t))))
      }
      function fr() {
        for (var e = window,
        t = Y(); t instanceof e.HTMLIFrameElement;) {
          try {
            var n = "string" === typeof t.contentWindow.location.href
          } catch(r) {
            n = !1
          }
          if (!n) break;
          t = Y((e = t.contentWindow).document)
        }
        return t
      }
      function pr(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t && ("input" === t && ("text" === e.type || "search" === e.type || "tel" === e.type || "url" === e.type || "password" === e.type) || "textarea" === t || "true" === e.contentEditable)
      }
      function gr(e) {
        var t = fr(),
        n = e.focusedElem,
        r = e.selectionRange;
        if (t !== n && n && n.ownerDocument && dr(n.ownerDocument.documentElement, n)) {
          if (null !== r && pr(n)) if (t = r.start, void 0 === (e = r.end) && (e = t), "selectionStart" in n) n.selectionStart = t,
          n.selectionEnd = Math.min(e, n.value.length);
          else if ((e = (t = n.ownerDocument || document) && t.defaultView || window).getSelection) {
            e = e.getSelection();
            var a = n.textContent.length,
            o = Math.min(r.start, a);
            r = void 0 === r.end ? o: Math.min(r.end, a),
            !e.extend && o > r && (a = r, r = o, o = a),
            a = ur(n, o);
            var i = ur(n, r);
            a && i && (1 !== e.rangeCount || e.anchorNode !== a.node || e.anchorOffset !== a.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && ((t = t.createRange()).setStart(a.node, a.offset), e.removeAllRanges(), o > r ? (e.addRange(t), e.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset), e.addRange(t)))
          }
          for (t = [], e = n; e = e.parentNode;) 1 === e.nodeType && t.push({
            element: e,
            left: e.scrollLeft,
            top: e.scrollTop
          });
          for ("function" === typeof n.focus && n.focus(), n = 0; n < t.length; n++)(e = t[n]).element.scrollLeft = e.left,
          e.element.scrollTop = e.top
        }
      }
      var vr = u && "documentMode" in document && 11 >= document.documentMode,
      mr = null,
      hr = null,
      yr = null,
      br = !1;
      function xr(e, t, n) {
        var r = n.window === n ? n.document: 9 === n.nodeType ? n: n.ownerDocument;
        br || null == mr || mr !== Y(r) || ("selectionStart" in (r = mr) && pr(r) ? r = {
          start: r.selectionStart,
          end: r.selectionEnd
        }: r = {
          anchorNode: (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection()).anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset
        },
        yr && sr(yr, r) || (yr = r, 0 < (r = qr(hr, "onSelect")).length && (t = new un("onSelect", "select", null, t, n), e.push({
          event: t,
          listeners: r
        }), t.target = mr)))
      }
      function wr(e, t) {
        var n = {};
        return n[e.toLowerCase()] = t.toLowerCase(),
        n["Webkit" + e] = "webkit" + t,
        n["Moz" + e] = "moz" + t,
        n
      }
      var kr = {
        animationend: wr("Animation", "AnimationEnd"),
        animationiteration: wr("Animation", "AnimationIteration"),
        animationstart: wr("Animation", "AnimationStart"),
        transitionend: wr("Transition", "TransitionEnd")
      },
      _r = {},
      Sr = {};
      function Er(e) {
        if (_r[e]) return _r[e];
        if (!kr[e]) return e;
        var t, n = kr[e];
        for (t in n) if (n.hasOwnProperty(t) && t in Sr) return _r[e] = n[t];
        return e
      }
      u && (Sr = document.createElement("div").style, "AnimationEvent" in window || (delete kr.animationend.animation, delete kr.animationiteration.animation, delete kr.animationstart.animation), "TransitionEvent" in window || delete kr.transitionend.transition);
      var Cr = Er("animationend"),
      Ar = Er("animationiteration"),
      Pr = Er("animationstart"),
      Tr = Er("transitionend"),
      zr = new Map,
      jr = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
      function Rr(e, t) {
        zr.set(e, t),
        s(t, [e])
      }
      for (var Mr = 0; Mr < jr.length; Mr++) {
        var Nr = jr[Mr];
        Rr(Nr.toLowerCase(), "on" + (Nr[0].toUpperCase() + Nr.slice(1)))
      }
      Rr(Cr, "onAnimationEnd"),
      Rr(Ar, "onAnimationIteration"),
      Rr(Pr, "onAnimationStart"),
      Rr("dblclick", "onDoubleClick"),
      Rr("focusin", "onFocus"),
      Rr("focusout", "onBlur"),
      Rr(Tr, "onTransitionEnd"),
      c("onMouseEnter", ["mouseout", "mouseover"]),
      c("onMouseLeave", ["mouseout", "mouseover"]),
      c("onPointerEnter", ["pointerout", "pointerover"]),
      c("onPointerLeave", ["pointerout", "pointerover"]),
      s("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
      s("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),
      s("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
      s("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
      s("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")),
      s("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
      var Or = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
      Br = new Set("cancel close invalid load scroll toggle".split(" ").concat(Or));
      function Lr(e, t, n) {
        var r = e.type || "unknown-event";
        e.currentTarget = n,
        function(e, t, n, r, a, i, l, s, c) {
          if (Ve.apply(this, arguments), Be) {
            if (!Be) throw Error(o(198));
            var u = Le;
            Be = !1,
            Le = null,
            Fe || (Fe = !0, De = u)
          }
        } (r, t, void 0, e),
        e.currentTarget = null
      }
      function Fr(e, t) {
        t = 0 !== (4 & t);
        for (var n = 0; n < e.length; n++) {
          var r = e[n],
          a = r.event;
          r = r.listeners;
          e: {
            var o = void 0;
            if (t) for (var i = r.length - 1; 0 <= i; i--) {
              var l = r[i],
              s = l.instance,
              c = l.currentTarget;
              if (l = l.listener, s !== o && a.isPropagationStopped()) break e;
              Lr(a, l, c),
              o = s
            } else for (i = 0; i < r.length; i++) {
              if (s = (l = r[i]).instance, c = l.currentTarget, l = l.listener, s !== o && a.isPropagationStopped()) break e;
              Lr(a, l, c),
              o = s
            }
          }
        }
        if (Fe) throw e = De,
        Fe = !1,
        De = null,
        e
      }
      function Dr(e, t) {
        var n = t[va];
        void 0 === n && (n = t[va] = new Set);
        var r = e + "__bubble";
        n.has(r) || (Ur(t, e, 2, !1), n.add(r))
      }
      function Ir(e, t, n) {
        var r = 0;
        t && (r |= 4),
        Ur(n, e, r, t)
      }
      var Vr = "_reactListening" + Math.random().toString(36).slice(2);
      function Wr(e) {
        if (!e[Vr]) {
          e[Vr] = !0,
          i.forEach((function(t) {
            "selectionchange" !== t && (Br.has(t) || Ir(t, !1, e), Ir(t, !0, e))
          }));
          var t = 9 === e.nodeType ? e: e.ownerDocument;
          null === t || t[Vr] || (t[Vr] = !0, Ir("selectionchange", !1, t))
        }
      }
      function Ur(e, t, n, r) {
        switch (Kt(t)) {
        case 1:
          var a = $t;
          break;
        case 4:
          a = qt;
          break;
        default:
          a = Gt
        }
        n = a.bind(null, t, n, e),
        a = void 0,
        !Me || "touchstart" !== t && "touchmove" !== t && "wheel" !== t || (a = !0),
        r ? void 0 !== a ? e.addEventListener(t, n, {
          capture: !0,
          passive: a
        }) : e.addEventListener(t, n, !0) : void 0 !== a ? e.addEventListener(t, n, {
          passive: a
        }) : e.addEventListener(t, n, !1)
      }
      function Hr(e, t, n, r, a) {
        var o = r;
        if (0 === (1 & t) && 0 === (2 & t) && null !== r) e: for (;;) {
          if (null === r) return;
          var i = r.tag;
          if (3 === i || 4 === i) {
            var l = r.stateNode.containerInfo;
            if (l === a || 8 === l.nodeType && l.parentNode === a) break;
            if (4 === i) for (i = r.
            return; null !== i;) {
              var s = i.tag;
              if ((3 === s || 4 === s) && ((s = i.stateNode.containerInfo) === a || 8 === s.nodeType && s.parentNode === a)) return;
              i = i.
              return
            }
            for (; null !== l;) {
              if (null === (i = ya(l))) return;
              if (5 === (s = i.tag) || 6 === s) {
                r = o = i;
                continue e
              }
              l = l.parentNode
            }
          }
          r = r.
          return
        }
        je((function() {
          var r = o,
          a = we(n),
          i = [];
          e: {
            var l = zr.get(e);
            if (void 0 !== l) {
              var s = un,
              c = e;
              switch (e) {
              case "keypress":
                if (0 === tn(n)) break e;
              case "keydown":
              case "keyup":
                s = An;
                break;
              case "focusin":
                c = "focus",
                s = mn;
                break;
              case "focusout":
                c = "blur",
                s = mn;
                break;
              case "beforeblur":
              case "afterblur":
                s = mn;
                break;
              case "click":
                if (2 === n.button) break e;
              case "auxclick":
              case "dblclick":
              case "mousedown":
              case "mousemove":
              case "mouseup":
              case "mouseout":
              case "mouseover":
              case "contextmenu":
                s = gn;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                s = vn;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                s = Tn;
                break;
              case Cr:
              case Ar:
              case Pr:
                s = hn;
                break;
              case Tr:
                s = zn;
                break;
              case "scroll":
                s = fn;
                break;
              case "wheel":
                s = Rn;
                break;
              case "copy":
              case "cut":
              case "paste":
                s = bn;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                s = Pn
              }
              var u = 0 !== (4 & t),
              d = !u && "scroll" === e,
              f = u ? null !== l ? l + "Capture": null: l;
              u = [];
              for (var p, g = r; null !== g;) {
                var v = (p = g).stateNode;
                if (5 === p.tag && null !== v && (p = v, null !== f && (null != (v = Re(g, f)) && u.push($r(g, v, p)))), d) break;
                g = g.
                return
              }
              0 < u.length && (l = new s(l, c, null, n, a), i.push({
                event: l,
                listeners: u
              }))
            }
          }
          if (0 === (7 & t)) {
            if (s = "mouseout" === e || "pointerout" === e, (!(l = "mouseover" === e || "pointerover" === e) || n === xe || !(c = n.relatedTarget || n.fromElement) || !ya(c) && !c[ga]) && (s || l) && (l = a.window === a ? a: (l = a.ownerDocument) ? l.defaultView || l.parentWindow: window, s ? (s = r, null !== (c = (c = n.relatedTarget || n.toElement) ? ya(c) : null) && (c !== (d = We(c)) || 5 !== c.tag && 6 !== c.tag) && (c = null)) : (s = null, c = r), s !== c)) {
              if (u = gn, v = "onMouseLeave", f = "onMouseEnter", g = "mouse", "pointerout" !== e && "pointerover" !== e || (u = Pn, v = "onPointerLeave", f = "onPointerEnter", g = "pointer"), d = null == s ? l: xa(s), p = null == c ? l: xa(c), (l = new u(v, g + "leave", s, n, a)).target = d, l.relatedTarget = p, v = null, ya(a) === r && ((u = new u(f, g + "enter", c, n, a)).target = p, u.relatedTarget = d, v = u), d = v, s && c) e: {
                for (f = c, g = 0, p = u = s; p; p = Gr(p)) g++;
                for (p = 0, v = f; v; v = Gr(v)) p++;
                for (; 0 < g - p;) u = Gr(u),
                g--;
                for (; 0 < p - g;) f = Gr(f),
                p--;
                for (; g--;) {
                  if (u === f || null !== f && u === f.alternate) break e;
                  u = Gr(u),
                  f = Gr(f)
                }
                u = null
              } else u = null;
              null !== s && Yr(i, l, s, u, !1),
              null !== c && null !== d && Yr(i, d, c, u, !0)
            }
            if ("select" === (s = (l = r ? xa(r) : window).nodeName && l.nodeName.toLowerCase()) || "input" === s && "file" === l.type) var m = Kn;
            else if (Hn(l)) if (Qn) m = ir;
            else {
              m = ar;
              var h = rr
            } else(s = l.nodeName) && "input" === s.toLowerCase() && ("checkbox" === l.type || "radio" === l.type) && (m = or);
            switch (m && (m = m(e, r)) ? $n(i, m, n, a) : (h && h(e, l, r), "focusout" === e && (h = l._wrapperState) && h.controlled && "number" === l.type && ee(l, "number", l.value)), h = r ? xa(r) : window, e) {
            case "focusin":
              (Hn(h) || "true" === h.contentEditable) && (mr = h, hr = r, yr = null);
              break;
            case "focusout":
              yr = hr = mr = null;
              break;
            case "mousedown":
              br = !0;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              br = !1,
              xr(i, n, a);
              break;
            case "selectionchange":
              if (vr) break;
            case "keydown":
            case "keyup":
              xr(i, n, a)
            }
            var y;
            if (Nn) e: {
              switch (e) {
              case "compositionstart":
                var b = "onCompositionStart";
                break e;
              case "compositionend":
                b = "onCompositionEnd";
                break e;
              case "compositionupdate":
                b = "onCompositionUpdate";
                break e
              }
              b = void 0
            } else Wn ? In(e, n) && (b = "onCompositionEnd") : "keydown" === e && 229 === n.keyCode && (b = "onCompositionStart");
            b && (Ln && "ko" !== n.locale && (Wn || "onCompositionStart" !== b ? "onCompositionEnd" === b && Wn && (y = en()) : (Zt = "value" in (Qt = a) ? Qt.value: Qt.textContent, Wn = !0)), 0 < (h = qr(r, b)).length && (b = new xn(b, e, null, n, a), i.push({
              event: b,
              listeners: h
            }), y ? b.data = y: null !== (y = Vn(n)) && (b.data = y))),
            (y = Bn ?
            function(e, t) {
              switch (e) {
              case "compositionend":
                return Vn(t);
              case "keypress":
                return 32 !== t.which ? null: (Dn = !0, Fn);
              case "textInput":
                return (e = t.data) === Fn && Dn ? null: e;
              default:
                return null
              }
            } (e, n) : function(e, t) {
              if (Wn) return "compositionend" === e || !Nn && In(e, t) ? (e = en(), Jt = Zt = Qt = null, Wn = !1, e) : null;
              switch (e) {
              case "paste":
              default:
                return null;
              case "keypress":
                if (! (t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                  if (t.char && 1 < t.char.length) return t.char;
                  if (t.which) return String.fromCharCode(t.which)
                }
                return null;
              case "compositionend":
                return Ln && "ko" !== t.locale ? null: t.data
              }
            } (e, n)) && (0 < (r = qr(r, "onBeforeInput")).length && (a = new xn("onBeforeInput", "beforeinput", null, n, a), i.push({
              event: a,
              listeners: r
            }), a.data = y))
          }
          Fr(i, t)
        }))
      }
      function $r(e, t, n) {
        return {
          instance: e,
          listener: t,
          currentTarget: n
        }
      }
      function qr(e, t) {
        for (var n = t + "Capture",
        r = []; null !== e;) {
          var a = e,
          o = a.stateNode;
          5 === a.tag && null !== o && (a = o, null != (o = Re(e, n)) && r.unshift($r(e, o, a)), null != (o = Re(e, t)) && r.push($r(e, o, a))),
          e = e.
          return
        }
        return r
      }
      function Gr(e) {
        if (null === e) return null;
        do {
          e = e.
          return
        } while ( e && 5 !== e . tag );
        return e || null
      }
      function Yr(e, t, n, r, a) {
        for (var o = t._reactName,
        i = []; null !== n && n !== r;) {
          var l = n,
          s = l.alternate,
          c = l.stateNode;
          if (null !== s && s === r) break;
          5 === l.tag && null !== c && (l = c, a ? null != (s = Re(n, o)) && i.unshift($r(n, s, l)) : a || null != (s = Re(n, o)) && i.push($r(n, s, l))),
          n = n.
          return
        }
        0 !== i.length && e.push({
          event: t,
          listeners: i
        })
      }
      var Xr = /\r\n?/g,
      Kr = /\u0000|\uFFFD/g;
      function Qr(e) {
        return ("string" === typeof e ? e: "" + e).replace(Xr, "\n").replace(Kr, "")
      }
      function Zr(e, t, n) {
        if (t = Qr(t), Qr(e) !== t && n) throw Error(o(425))
      }
      function Jr() {}
      var ea = null,
      ta = null;
      function na(e, t) {
        return "textarea" === e || "noscript" === e || "string" === typeof t.children || "number" === typeof t.children || "object" === typeof t.dangerouslySetInnerHTML && null !== t.dangerouslySetInnerHTML && null != t.dangerouslySetInnerHTML.__html
      }
      var ra = "function" === typeof setTimeout ? setTimeout: void 0,
      aa = "function" === typeof clearTimeout ? clearTimeout: void 0,
      oa = "function" === typeof Promise ? Promise: void 0,
      ia = "function" === typeof queueMicrotask ? queueMicrotask: "undefined" !== typeof oa ?
      function(e) {
        return oa.resolve(null).then(e).
        catch(la)
      }: ra;
      function la(e) {
        setTimeout((function() {
          throw e
        }))
      }
      function sa(e, t) {
        var n = t,
        r = 0;
        do {
          var a = n.nextSibling;
          if (e.removeChild(n), a && 8 === a.nodeType) if ("/$" === (n = a.data)) {
            if (0 === r) return e.removeChild(a),
            void Wt(t);
            r--
          } else "$" !== n && "$?" !== n && "$!" !== n || r++;
          n = a
        } while ( n );
        Wt(t)
      }
      function ca(e) {
        for (; null != e; e = e.nextSibling) {
          var t = e.nodeType;
          if (1 === t || 3 === t) break;
          if (8 === t) {
            if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
            if ("/$" === t) return null
          }
        }
        return e
      }
      function ua(e) {
        e = e.previousSibling;
        for (var t = 0; e;) {
          if (8 === e.nodeType) {
            var n = e.data;
            if ("$" === n || "$!" === n || "$?" === n) {
              if (0 === t) return e;
              t--
            } else "/$" === n && t++
          }
          e = e.previousSibling
        }
        return null
      }
      var da = Math.random().toString(36).slice(2),
      fa = "__reactFiber$" + da,
      pa = "__reactProps$" + da,
      ga = "__reactContainer$" + da,
      va = "__reactEvents$" + da,
      ma = "__reactListeners$" + da,
      ha = "__reactHandles$" + da;
      function ya(e) {
        var t = e[fa];
        if (t) return t;
        for (var n = e.parentNode; n;) {
          if (t = n[ga] || n[fa]) {
            if (n = t.alternate, null !== t.child || null !== n && null !== n.child) for (e = ua(e); null !== e;) {
              if (n = e[fa]) return n;
              e = ua(e)
            }
            return t
          }
          n = (e = n).parentNode
        }
        return null
      }
      function ba(e) {
        return ! (e = e[fa] || e[ga]) || 5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag ? null: e
      }
      function xa(e) {
        if (5 === e.tag || 6 === e.tag) return e.stateNode;
        throw Error(o(33))
      }
      function wa(e) {
        return e[pa] || null
      }
      var ka = [],
      _a = -1;
      function Sa(e) {
        return {
          current: e
        }
      }
      function Ea(e) {
        0 > _a || (e.current = ka[_a], ka[_a] = null, _a--)
      }
      function Ca(e, t) {
        _a++,
        ka[_a] = e.current,
        e.current = t
      }
      var Aa = {},
      Pa = Sa(Aa),
      Ta = Sa(!1),
      za = Aa;
      function ja(e, t) {
        var n = e.type.contextTypes;
        if (!n) return Aa;
        var r = e.stateNode;
        if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
        var a, o = {};
        for (a in n) o[a] = t[a];
        return r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o),
        o
      }
      function Ra(e) {
        return null !== (e = e.childContextTypes) && void 0 !== e
      }
      function Ma() {
        Ea(Ta),
        Ea(Pa)
      }
      function Na(e, t, n) {
        if (Pa.current !== Aa) throw Error(o(168));
        Ca(Pa, t),
        Ca(Ta, n)
      }
      function Oa(e, t, n) {
        var r = e.stateNode;
        if (t = t.childContextTypes, "function" !== typeof r.getChildContext) return n;
        for (var a in r = r.getChildContext()) if (! (a in t)) throw Error(o(108, U(e) || "Unknown", a));
        return L({},
        n, r)
      }
      function Ba(e) {
        return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Aa,
        za = Pa.current,
        Ca(Pa, e),
        Ca(Ta, Ta.current),
        !0
      }
      function La(e, t, n) {
        var r = e.stateNode;
        if (!r) throw Error(o(169));
        n ? (e = Oa(e, t, za), r.__reactInternalMemoizedMergedChildContext = e, Ea(Ta), Ea(Pa), Ca(Pa, e)) : Ea(Ta),
        Ca(Ta, n)
      }
      var Fa = null,
      Da = !1,
      Ia = !1;
      function Va(e) {
        null === Fa ? Fa = [e] : Fa.push(e)
      }
      function Wa() {
        if (!Ia && null !== Fa) {
          Ia = !0;
          var e = 0,
          t = bt;
          try {
            var n = Fa;
            for (bt = 1; e < n.length; e++) {
              var r = n[e];
              do {
                r = r(!0)
              } while ( null !== r )
            }
            Fa = null,
            Da = !1
          } catch(a) {
            throw null !== Fa && (Fa = Fa.slice(e + 1)),
            Ge(Je, Wa),
            a
          } finally {
            bt = t,
            Ia = !1
          }
        }
        return null
      }
      var Ua = [],
      Ha = 0,
      $a = null,
      qa = 0,
      Ga = [],
      Ya = 0,
      Xa = null,
      Ka = 1,
      Qa = "";
      function Za(e, t) {
        Ua[Ha++] = qa,
        Ua[Ha++] = $a,
        $a = e,
        qa = t
      }
      function Ja(e, t, n) {
        Ga[Ya++] = Ka,
        Ga[Ya++] = Qa,
        Ga[Ya++] = Xa,
        Xa = e;
        var r = Ka;
        e = Qa;
        var a = 32 - it(r) - 1;
        r &= ~ (1 << a),
        n += 1;
        var o = 32 - it(t) + a;
        if (30 < o) {
          var i = a - a % 5;
          o = (r & (1 << i) - 1).toString(32),
          r >>= i,
          a -= i,
          Ka = 1 << 32 - it(t) + a | n << a | r,
          Qa = o + e
        } else Ka = 1 << o | n << a | r,
        Qa = e
      }
      function eo(e) {
        null !== e.
        return && (Za(e, 1), Ja(e, 1, 0))
      }
      function to(e) {
        for (; e === $a;) $a = Ua[--Ha],
        Ua[Ha] = null,
        qa = Ua[--Ha],
        Ua[Ha] = null;
        for (; e === Xa;) Xa = Ga[--Ya],
        Ga[Ya] = null,
        Qa = Ga[--Ya],
        Ga[Ya] = null,
        Ka = Ga[--Ya],
        Ga[Ya] = null
      }
      var no = null,
      ro = null,
      ao = !1,
      oo = null;
      function io(e, t) {
        var n = jc(5, null, null, 0);
        n.elementType = "DELETED",
        n.stateNode = t,
        n.
        return = e,
        null === (t = e.deletions) ? (e.deletions = [n], e.flags |= 16) : t.push(n)
      }
      function lo(e, t) {
        switch (e.tag) {
        case 5:
          var n = e.type;
          return null !== (t = 1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase() ? null: t) && (e.stateNode = t, no = e, ro = ca(t.firstChild), !0);
        case 6:
          return null !== (t = "" === e.pendingProps || 3 !== t.nodeType ? null: t) && (e.stateNode = t, no = e, ro = null, !0);
        case 13:
          return null !== (t = 8 !== t.nodeType ? null: t) && (n = null !== Xa ? {
            id: Ka,
            overflow: Qa
          }: null, e.memoizedState = {
            dehydrated: t,
            treeContext: n,
            retryLane: 1073741824
          },
          (n = jc(18, null, null, 0)).stateNode = t, n.
          return = e, e.child = n, no = e, ro = null, !0);
        default:
          return ! 1
        }
      }
      function so(e) {
        return 0 !== (1 & e.mode) && 0 === (128 & e.flags)
      }
      function co(e) {
        if (ao) {
          var t = ro;
          if (t) {
            var n = t;
            if (!lo(e, t)) {
              if (so(e)) throw Error(o(418));
              t = ca(n.nextSibling);
              var r = no;
              t && lo(e, t) ? io(r, n) : (e.flags = -4097 & e.flags | 2, ao = !1, no = e)
            }
          } else {
            if (so(e)) throw Error(o(418));
            e.flags = -4097 & e.flags | 2,
            ao = !1,
            no = e
          }
        }
      }
      function uo(e) {
        for (e = e.
        return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;) e = e.
        return;
        no = e
      }
      function fo(e) {
        if (e !== no) return ! 1;
        if (!ao) return uo(e),
        ao = !0,
        !1;
        var t;
        if ((t = 3 !== e.tag) && !(t = 5 !== e.tag) && (t = "head" !== (t = e.type) && "body" !== t && !na(e.type, e.memoizedProps)), t && (t = ro)) {
          if (so(e)) throw po(),
          Error(o(418));
          for (; t;) io(e, t),
          t = ca(t.nextSibling)
        }
        if (uo(e), 13 === e.tag) {
          if (! (e = null !== (e = e.memoizedState) ? e.dehydrated: null)) throw Error(o(317));
          e: {
            for (e = e.nextSibling, t = 0; e;) {
              if (8 === e.nodeType) {
                var n = e.data;
                if ("/$" === n) {
                  if (0 === t) {
                    ro = ca(e.nextSibling);
                    break e
                  }
                  t--
                } else "$" !== n && "$!" !== n && "$?" !== n || t++
              }
              e = e.nextSibling
            }
            ro = null
          }
        } else ro = no ? ca(e.stateNode.nextSibling) : null;
        return ! 0
      }
      function po() {
        for (var e = ro; e;) e = ca(e.nextSibling)
      }
      function go() {
        ro = no = null,
        ao = !1
      }
      function vo(e) {
        null === oo ? oo = [e] : oo.push(e)
      }
      var mo = x.ReactCurrentBatchConfig;
      function ho(e, t) {
        if (e && e.defaultProps) {
          for (var n in t = L({},
          t), e = e.defaultProps) void 0 === t[n] && (t[n] = e[n]);
          return t
        }
        return t
      }
      var yo = Sa(null),
      bo = null,
      xo = null,
      wo = null;
      function ko() {
        wo = xo = bo = null
      }
      function _o(e) {
        var t = yo.current;
        Ea(yo),
        e._currentValue = t
      }
      function So(e, t, n) {
        for (; null !== e;) {
          var r = e.alternate;
          if ((e.childLanes & t) !== t ? (e.childLanes |= t, null !== r && (r.childLanes |= t)) : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
          e = e.
          return
        }
      }
      function Eo(e, t) {
        bo = e,
        wo = xo = null,
        null !== (e = e.dependencies) && null !== e.firstContext && (0 !== (e.lanes & t) && (xl = !0), e.firstContext = null)
      }
      function Co(e) {
        var t = e._currentValue;
        if (wo !== e) if (e = {
          context: e,
          memoizedValue: t,
          next: null
        },
        null === xo) {
          if (null === bo) throw Error(o(308));
          xo = e,
          bo.dependencies = {
            lanes: 0,
            firstContext: e
          }
        } else xo = xo.next = e;
        return t
      }
      var Ao = null;
      function Po(e) {
        null === Ao ? Ao = [e] : Ao.push(e)
      }
      function To(e, t, n, r) {
        var a = t.interleaved;
        return null === a ? (n.next = n, Po(t)) : (n.next = a.next, a.next = n),
        t.interleaved = n,
        zo(e, r)
      }
      function zo(e, t) {
        e.lanes |= t;
        var n = e.alternate;
        for (null !== n && (n.lanes |= t), n = e, e = e.
        return; null !== e;) e.childLanes |= t,
        null !== (n = e.alternate) && (n.childLanes |= t),
        n = e,
        e = e.
        return;
        return 3 === n.tag ? n.stateNode: null
      }
      var jo = !1;
      function Ro(e) {
        e.updateQueue = {
          baseState: e.memoizedState,
          firstBaseUpdate: null,
          lastBaseUpdate: null,
          shared: {
            pending: null,
            interleaved: null,
            lanes: 0
          },
          effects: null
        }
      }
      function Mo(e, t) {
        e = e.updateQueue,
        t.updateQueue === e && (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects
        })
      }
      function No(e, t) {
        return {
          eventTime: e,
          lane: t,
          tag: 0,
          payload: null,
          callback: null,
          next: null
        }
      }
      function Oo(e, t, n) {
        var r = e.updateQueue;
        if (null === r) return null;
        if (r = r.shared, 0 !== (2 & Ps)) {
          var a = r.pending;
          return null === a ? t.next = t: (t.next = a.next, a.next = t),
          r.pending = t,
          zo(e, n)
        }
        return null === (a = r.interleaved) ? (t.next = t, Po(r)) : (t.next = a.next, a.next = t),
        r.interleaved = t,
        zo(e, n)
      }
      function Bo(e, t, n) {
        if (null !== (t = t.updateQueue) && (t = t.shared, 0 !== (4194240 & n))) {
          var r = t.lanes;
          n |= r &= e.pendingLanes,
          t.lanes = n,
          yt(e, n)
        }
      }
      function Lo(e, t) {
        var n = e.updateQueue,
        r = e.alternate;
        if (null !== r && n === (r = r.updateQueue)) {
          var a = null,
          o = null;
          if (null !== (n = n.firstBaseUpdate)) {
            do {
              var i = {
                eventTime: n.eventTime,
                lane: n.lane,
                tag: n.tag,
                payload: n.payload,
                callback: n.callback,
                next: null
              };
              null === o ? a = o = i: o = o.next = i, n = n.next
            } while ( null !== n );
            null === o ? a = o = t: o = o.next = t
          } else a = o = t;
          return n = {
            baseState: r.baseState,
            firstBaseUpdate: a,
            lastBaseUpdate: o,
            shared: r.shared,
            effects: r.effects
          },
          void(e.updateQueue = n)
        }
        null === (e = n.lastBaseUpdate) ? n.firstBaseUpdate = t: e.next = t,
        n.lastBaseUpdate = t
      }
      function Fo(e, t, n, r) {
        var a = e.updateQueue;
        jo = !1;
        var o = a.firstBaseUpdate,
        i = a.lastBaseUpdate,
        l = a.shared.pending;
        if (null !== l) {
          a.shared.pending = null;
          var s = l,
          c = s.next;
          s.next = null,
          null === i ? o = c: i.next = c,
          i = s;
          var u = e.alternate;
          null !== u && ((l = (u = u.updateQueue).lastBaseUpdate) !== i && (null === l ? u.firstBaseUpdate = c: l.next = c, u.lastBaseUpdate = s))
        }
        if (null !== o) {
          var d = a.baseState;
          for (i = 0, u = c = s = null, l = o;;) {
            var f = l.lane,
            p = l.eventTime;
            if ((r & f) === f) {
              null !== u && (u = u.next = {
                eventTime: p,
                lane: 0,
                tag: l.tag,
                payload: l.payload,
                callback: l.callback,
                next: null
              });
              e: {
                var g = e,
                v = l;
                switch (f = t, p = n, v.tag) {
                case 1:
                  if ("function" === typeof(g = v.payload)) {
                    d = g.call(p, d, f);
                    break e
                  }
                  d = g;
                  break e;
                case 3:
                  g.flags = -65537 & g.flags | 128;
                case 0:
                  if (null === (f = "function" === typeof(g = v.payload) ? g.call(p, d, f) : g) || void 0 === f) break e;
                  d = L({},
                  d, f);
                  break e;
                case 2:
                  jo = !0
                }
              }
              null !== l.callback && 0 !== l.lane && (e.flags |= 64, null === (f = a.effects) ? a.effects = [l] : f.push(l))
            } else p = {
              eventTime: p,
              lane: f,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null
            },
            null === u ? (c = u = p, s = d) : u = u.next = p,
            i |= f;
            if (null === (l = l.next)) {
              if (null === (l = a.shared.pending)) break;
              l = (f = l).next,
              f.next = null,
              a.lastBaseUpdate = f,
              a.shared.pending = null
            }
          }
          if (null === u && (s = d), a.baseState = s, a.firstBaseUpdate = c, a.lastBaseUpdate = u, null !== (t = a.shared.interleaved)) {
            a = t;
            do {
              i |= a.lane, a = a.next
            } while ( a !== t )
          } else null === o && (a.shared.lanes = 0);
          Bs |= i,
          e.lanes = i,
          e.memoizedState = d
        }
      }
      function Do(e, t, n) {
        if (e = t.effects, t.effects = null, null !== e) for (t = 0; t < e.length; t++) {
          var r = e[t],
          a = r.callback;
          if (null !== a) {
            if (r.callback = null, r = n, "function" !== typeof a) throw Error(o(191, a));
            a.call(r)
          }
        }
      }
      var Io = (new r.Component).refs;
      function Vo(e, t, n, r) {
        n = null === (n = n(r, t = e.memoizedState)) || void 0 === n ? t: L({},
        t, n),
        e.memoizedState = n,
        0 === e.lanes && (e.updateQueue.baseState = n)
      }
      var Wo = {
        isMounted: function(e) {
          return !! (e = e._reactInternals) && We(e) === e
        },
        enqueueSetState: function(e, t, n) {
          e = e._reactInternals;
          var r = ec(),
          a = tc(e),
          o = No(r, a);
          o.payload = t,
          void 0 !== n && null !== n && (o.callback = n),
          null !== (t = Oo(e, o, a)) && (nc(t, e, a, r), Bo(t, e, a))
        },
        enqueueReplaceState: function(e, t, n) {
          e = e._reactInternals;
          var r = ec(),
          a = tc(e),
          o = No(r, a);
          o.tag = 1,
          o.payload = t,
          void 0 !== n && null !== n && (o.callback = n),
          null !== (t = Oo(e, o, a)) && (nc(t, e, a, r), Bo(t, e, a))
        },
        enqueueForceUpdate: function(e, t) {
          e = e._reactInternals;
          var n = ec(),
          r = tc(e),
          a = No(n, r);
          a.tag = 2,
          void 0 !== t && null !== t && (a.callback = t),
          null !== (t = Oo(e, a, r)) && (nc(t, e, r, n), Bo(t, e, r))
        }
      };
      function Uo(e, t, n, r, a, o, i) {
        return "function" === typeof(e = e.stateNode).shouldComponentUpdate ? e.shouldComponentUpdate(r, o, i) : !t.prototype || !t.prototype.isPureReactComponent || (!sr(n, r) || !sr(a, o))
      }
      function Ho(e, t, n) {
        var r = !1,
        a = Aa,
        o = t.contextType;
        return "object" === typeof o && null !== o ? o = Co(o) : (a = Ra(t) ? za: Pa.current, o = (r = null !== (r = t.contextTypes) && void 0 !== r) ? ja(e, a) : Aa),
        t = new t(n, o),
        e.memoizedState = null !== t.state && void 0 !== t.state ? t.state: null,
        t.updater = Wo,
        e.stateNode = t,
        t._reactInternals = e,
        r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = a, e.__reactInternalMemoizedMaskedChildContext = o),
        t
      }
      function $o(e, t, n, r) {
        e = t.state,
        "function" === typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r),
        "function" === typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r),
        t.state !== e && Wo.enqueueReplaceState(t, t.state, null)
      }
      function qo(e, t, n, r) {
        var a = e.stateNode;
        a.props = n,
        a.state = e.memoizedState,
        a.refs = Io,
        Ro(e);
        var o = t.contextType;
        "object" === typeof o && null !== o ? a.context = Co(o) : (o = Ra(t) ? za: Pa.current, a.context = ja(e, o)),
        a.state = e.memoizedState,
        "function" === typeof(o = t.getDerivedStateFromProps) && (Vo(e, t, o, n), a.state = e.memoizedState),
        "function" === typeof t.getDerivedStateFromProps || "function" === typeof a.getSnapshotBeforeUpdate || "function" !== typeof a.UNSAFE_componentWillMount && "function" !== typeof a.componentWillMount || (t = a.state, "function" === typeof a.componentWillMount && a.componentWillMount(), "function" === typeof a.UNSAFE_componentWillMount && a.UNSAFE_componentWillMount(), t !== a.state && Wo.enqueueReplaceState(a, a.state, null), Fo(e, n, a, r), a.state = e.memoizedState),
        "function" === typeof a.componentDidMount && (e.flags |= 4194308)
      }
      function Go(e, t, n) {
        if (null !== (e = n.ref) && "function" !== typeof e && "object" !== typeof e) {
          if (n._owner) {
            if (n = n._owner) {
              if (1 !== n.tag) throw Error(o(309));
              var r = n.stateNode
            }
            if (!r) throw Error(o(147, e));
            var a = r,
            i = "" + e;
            return null !== t && null !== t.ref && "function" === typeof t.ref && t.ref._stringRef === i ? t.ref: (t = function(e) {
              var t = a.refs;
              t === Io && (t = a.refs = {}),
              null === e ? delete t[i] : t[i] = e
            },
            t._stringRef = i, t)
          }
          if ("string" !== typeof e) throw Error(o(284));
          if (!n._owner) throw Error(o(290, e))
        }
        return e
      }
      function Yo(e, t) {
        throw e = Object.prototype.toString.call(t),
        Error(o(31, "[object Object]" === e ? "object with keys {" + Object.keys(t).join(", ") + "}": e))
      }
      function Xo(e) {
        return (0, e._init)(e._payload)
      }
      function Ko(e) {
        function t(t, n) {
          if (e) {
            var r = t.deletions;
            null === r ? (t.deletions = [n], t.flags |= 16) : r.push(n)
          }
        }
        function n(n, r) {
          if (!e) return null;
          for (; null !== r;) t(n, r),
          r = r.sibling;
          return null
        }
        function r(e, t) {
          for (e = new Map; null !== t;) null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
          t = t.sibling;
          return e
        }
        function a(e, t) {
          return (e = Mc(e, t)).index = 0,
          e.sibling = null,
          e
        }
        function i(t, n, r) {
          return t.index = r,
          e ? null !== (r = t.alternate) ? (r = r.index) < n ? (t.flags |= 2, n) : r: (t.flags |= 2, n) : (t.flags |= 1048576, n)
        }
        function l(t) {
          return e && null === t.alternate && (t.flags |= 2),
          t
        }
        function s(e, t, n, r) {
          return null === t || 6 !== t.tag ? ((t = Lc(n, e.mode, r)).
          return = e, t) : ((t = a(t, n)).
          return = e, t)
        }
        function c(e, t, n, r) {
          var o = n.type;
          return o === _ ? d(e, t, n.props.children, r, n.key) : null !== t && (t.elementType === o || "object" === typeof o && null !== o && o.$$typeof === R && Xo(o) === t.type) ? ((r = a(t, n.props)).ref = Go(e, t, n), r.
          return = e, r) : ((r = Nc(n.type, n.key, n.props, null, e.mode, r)).ref = Go(e, t, n), r.
          return = e, r)
        }
        function u(e, t, n, r) {
          return null === t || 4 !== t.tag || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? ((t = Fc(n, e.mode, r)).
          return = e, t) : ((t = a(t, n.children || [])).
          return = e, t)
        }
        function d(e, t, n, r, o) {
          return null === t || 7 !== t.tag ? ((t = Oc(n, e.mode, r, o)).
          return = e, t) : ((t = a(t, n)).
          return = e, t)
        }
        function f(e, t, n) {
          if ("string" === typeof t && "" !== t || "number" === typeof t) return (t = Lc("" + t, e.mode, n)).
          return = e,
          t;
          if ("object" === typeof t && null !== t) {
            switch (t.$$typeof) {
            case w:
              return (n = Nc(t.type, t.key, t.props, null, e.mode, n)).ref = Go(e, null, t),
              n.
              return = e,
              n;
            case k:
              return (t = Fc(t, e.mode, n)).
              return = e,
              t;
            case R:
              return f(e, (0, t._init)(t._payload), n)
            }
            if (te(t) || O(t)) return (t = Oc(t, e.mode, n, null)).
            return = e,
            t;
            Yo(e, t)
          }
          return null
        }
        function p(e, t, n, r) {
          var a = null !== t ? t.key: null;
          if ("string" === typeof n && "" !== n || "number" === typeof n) return null !== a ? null: s(e, t, "" + n, r);
          if ("object" === typeof n && null !== n) {
            switch (n.$$typeof) {
            case w:
              return n.key === a ? c(e, t, n, r) : null;
            case k:
              return n.key === a ? u(e, t, n, r) : null;
            case R:
              return p(e, t, (a = n._init)(n._payload), r)
            }
            if (te(n) || O(n)) return null !== a ? null: d(e, t, n, r, null);
            Yo(e, n)
          }
          return null
        }
        function g(e, t, n, r, a) {
          if ("string" === typeof r && "" !== r || "number" === typeof r) return s(t, e = e.get(n) || null, "" + r, a);
          if ("object" === typeof r && null !== r) {
            switch (r.$$typeof) {
            case w:
              return c(t, e = e.get(null === r.key ? n: r.key) || null, r, a);
            case k:
              return u(t, e = e.get(null === r.key ? n: r.key) || null, r, a);
            case R:
              return g(e, t, n, (0, r._init)(r._payload), a)
            }
            if (te(r) || O(r)) return d(t, e = e.get(n) || null, r, a, null);
            Yo(t, r)
          }
          return null
        }
        function v(a, o, l, s) {
          for (var c = null,
          u = null,
          d = o,
          v = o = 0,
          m = null; null !== d && v < l.length; v++) {
            d.index > v ? (m = d, d = null) : m = d.sibling;
            var h = p(a, d, l[v], s);
            if (null === h) {
              null === d && (d = m);
              break
            }
            e && d && null === h.alternate && t(a, d),
            o = i(h, o, v),
            null === u ? c = h: u.sibling = h,
            u = h,
            d = m
          }
          if (v === l.length) return n(a, d),
          ao && Za(a, v),
          c;
          if (null === d) {
            for (; v < l.length; v++) null !== (d = f(a, l[v], s)) && (o = i(d, o, v), null === u ? c = d: u.sibling = d, u = d);
            return ao && Za(a, v),
            c
          }
          for (d = r(a, d); v < l.length; v++) null !== (m = g(d, a, v, l[v], s)) && (e && null !== m.alternate && d.delete(null === m.key ? v: m.key), o = i(m, o, v), null === u ? c = m: u.sibling = m, u = m);
          return e && d.forEach((function(e) {
            return t(a, e)
          })),
          ao && Za(a, v),
          c
        }
        function m(a, l, s, c) {
          var u = O(s);
          if ("function" !== typeof u) throw Error(o(150));
          if (null == (s = u.call(s))) throw Error(o(151));
          for (var d = u = null,
          v = l,
          m = l = 0,
          h = null,
          y = s.next(); null !== v && !y.done; m++, y = s.next()) {
            v.index > m ? (h = v, v = null) : h = v.sibling;
            var b = p(a, v, y.value, c);
            if (null === b) {
              null === v && (v = h);
              break
            }
            e && v && null === b.alternate && t(a, v),
            l = i(b, l, m),
            null === d ? u = b: d.sibling = b,
            d = b,
            v = h
          }
          if (y.done) return n(a, v),
          ao && Za(a, m),
          u;
          if (null === v) {
            for (; ! y.done; m++, y = s.next()) null !== (y = f(a, y.value, c)) && (l = i(y, l, m), null === d ? u = y: d.sibling = y, d = y);
            return ao && Za(a, m),
            u
          }
          for (v = r(a, v); ! y.done; m++, y = s.next()) null !== (y = g(v, a, m, y.value, c)) && (e && null !== y.alternate && v.delete(null === y.key ? m: y.key), l = i(y, l, m), null === d ? u = y: d.sibling = y, d = y);
          return e && v.forEach((function(e) {
            return t(a, e)
          })),
          ao && Za(a, m),
          u
        }
        return function e(r, o, i, s) {
          if ("object" === typeof i && null !== i && i.type === _ && null === i.key && (i = i.props.children), "object" === typeof i && null !== i) {
            switch (i.$$typeof) {
            case w:
              e:
              {
                for (var c = i.key,
                u = o; null !== u;) {
                  if (u.key === c) {
                    if ((c = i.type) === _) {
                      if (7 === u.tag) {
                        n(r, u.sibling),
                        (o = a(u, i.props.children)).
                        return = r,
                        r = o;
                        break e
                      }
                    } else if (u.elementType === c || "object" === typeof c && null !== c && c.$$typeof === R && Xo(c) === u.type) {
                      n(r, u.sibling),
                      (o = a(u, i.props)).ref = Go(r, u, i),
                      o.
                      return = r,
                      r = o;
                      break e
                    }
                    n(r, u);
                    break
                  }
                  t(r, u),
                  u = u.sibling
                }
                i.type === _ ? ((o = Oc(i.props.children, r.mode, s, i.key)).
                return = r, r = o) : ((s = Nc(i.type, i.key, i.props, null, r.mode, s)).ref = Go(r, o, i), s.
                return = r, r = s)
              }
              return l(r);
            case k:
              e:
              {
                for (u = i.key; null !== o;) {
                  if (o.key === u) {
                    if (4 === o.tag && o.stateNode.containerInfo === i.containerInfo && o.stateNode.implementation === i.implementation) {
                      n(r, o.sibling),
                      (o = a(o, i.children || [])).
                      return = r,
                      r = o;
                      break e
                    }
                    n(r, o);
                    break
                  }
                  t(r, o),
                  o = o.sibling
                } (o = Fc(i, r.mode, s)).
                return = r,
                r = o
              }
              return l(r);
            case R:
              return e(r, o, (u = i._init)(i._payload), s)
            }
            if (te(i)) return v(r, o, i, s);
            if (O(i)) return m(r, o, i, s);
            Yo(r, i)
          }
          return "string" === typeof i && "" !== i || "number" === typeof i ? (i = "" + i, null !== o && 6 === o.tag ? (n(r, o.sibling), (o = a(o, i)).
          return = r, r = o) : (n(r, o), (o = Lc(i, r.mode, s)).
          return = r, r = o), l(r)) : n(r, o)
        }
      }
      var Qo = Ko(!0),
      Zo = Ko(!1),
      Jo = {},
      ei = Sa(Jo),
      ti = Sa(Jo),
      ni = Sa(Jo);
      function ri(e) {
        if (e === Jo) throw Error(o(174));
        return e
      }
      function ai(e, t) {
        switch (Ca(ni, t), Ca(ti, e), Ca(ei, Jo), e = t.nodeType) {
        case 9:
        case 11:
          t = (t = t.documentElement) ? t.namespaceURI: se(null, "");
          break;
        default:
          t = se(t = (e = 8 === e ? t.parentNode: t).namespaceURI || null, e = e.tagName)
        }
        Ea(ei),
        Ca(ei, t)
      }
      function oi() {
        Ea(ei),
        Ea(ti),
        Ea(ni)
      }
      function ii(e) {
        ri(ni.current);
        var t = ri(ei.current),
        n = se(t, e.type);
        t !== n && (Ca(ti, e), Ca(ei, n))
      }
      function li(e) {
        ti.current === e && (Ea(ei), Ea(ti))
      }
      var si = Sa(0);
      function ci(e) {
        for (var t = e; null !== t;) {
          if (13 === t.tag) {
            var n = t.memoizedState;
            if (null !== n && (null === (n = n.dehydrated) || "$?" === n.data || "$!" === n.data)) return t
          } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
            if (0 !== (128 & t.flags)) return t
          } else if (null !== t.child) {
            t.child.
            return = t,
            t = t.child;
            continue
          }
          if (t === e) break;
          for (; null === t.sibling;) {
            if (null === t.
            return || t.
            return === e) return null;
            t = t.
            return
          }
          t.sibling.
          return = t.
          return,
          t = t.sibling
        }
        return null
      }
      var ui = [];
      function di() {
        for (var e = 0; e < ui.length; e++) ui[e]._workInProgressVersionPrimary = null;
        ui.length = 0
      }
      var fi = x.ReactCurrentDispatcher,
      pi = x.ReactCurrentBatchConfig,
      gi = 0,
      vi = null,
      mi = null,
      hi = null,
      yi = !1,
      bi = !1,
      xi = 0,
      wi = 0;
      function ki() {
        throw Error(o(321))
      }
      function _i(e, t) {
        if (null === t) return ! 1;
        for (var n = 0; n < t.length && n < e.length; n++) if (!lr(e[n], t[n])) return ! 1;
        return ! 0
      }
      function Si(e, t, n, r, a, i) {
        if (gi = i, vi = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, fi.current = null === e || null === e.memoizedState ? ll: sl, e = n(r, a), bi) {
          i = 0;
          do {
            if (bi = !1, xi = 0, 25 <= i) throw Error(o(301));
            i += 1, hi = mi = null, t.updateQueue = null, fi.current = cl, e = n(r, a)
          } while ( bi )
        }
        if (fi.current = il, t = null !== mi && null !== mi.next, gi = 0, hi = mi = vi = null, yi = !1, t) throw Error(o(300));
        return e
      }
      function Ei() {
        var e = 0 !== xi;
        return xi = 0,
        e
      }
      function Ci() {
        var e = {
          memoizedState: null,
          baseState: null,
          baseQueue: null,
          queue: null,
          next: null
        };
        return null === hi ? vi.memoizedState = hi = e: hi = hi.next = e,
        hi
      }
      function Ai() {
        if (null === mi) {
          var e = vi.alternate;
          e = null !== e ? e.memoizedState: null
        } else e = mi.next;
        var t = null === hi ? vi.memoizedState: hi.next;
        if (null !== t) hi = t,
        mi = e;
        else {
          if (null === e) throw Error(o(310));
          e = {
            memoizedState: (mi = e).memoizedState,
            baseState: mi.baseState,
            baseQueue: mi.baseQueue,
            queue: mi.queue,
            next: null
          },
          null === hi ? vi.memoizedState = hi = e: hi = hi.next = e
        }
        return hi
      }
      function Pi(e, t) {
        return "function" === typeof t ? t(e) : t
      }
      function Ti(e) {
        var t = Ai(),
        n = t.queue;
        if (null === n) throw Error(o(311));
        n.lastRenderedReducer = e;
        var r = mi,
        a = r.baseQueue,
        i = n.pending;
        if (null !== i) {
          if (null !== a) {
            var l = a.next;
            a.next = i.next,
            i.next = l
          }
          r.baseQueue = a = i,
          n.pending = null
        }
        if (null !== a) {
          i = a.next,
          r = r.baseState;
          var s = l = null,
          c = null,
          u = i;
          do {
            var d = u.lane;
            if ((gi & d) === d) null !== c && (c = c.next = {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null
            }), r = u.hasEagerState ? u.eagerState: e(r, u.action);
            else {
              var f = {
                lane: d,
                action: u.action,
                hasEagerState: u.hasEagerState,
                eagerState: u.eagerState,
                next: null
              };
              null === c ? (s = c = f, l = r) : c = c.next = f,
              vi.lanes |= d,
              Bs |= d
            }
            u = u.next
          } while ( null !== u && u !== i );
          null === c ? l = r: c.next = s,
          lr(r, t.memoizedState) || (xl = !0),
          t.memoizedState = r,
          t.baseState = l,
          t.baseQueue = c,
          n.lastRenderedState = r
        }
        if (null !== (e = n.interleaved)) {
          a = e;
          do {
            i = a.lane, vi.lanes |= i, Bs |= i, a = a.next
          } while ( a !== e )
        } else null === a && (n.lanes = 0);
        return [t.memoizedState, n.dispatch]
      }
      function zi(e) {
        var t = Ai(),
        n = t.queue;
        if (null === n) throw Error(o(311));
        n.lastRenderedReducer = e;
        var r = n.dispatch,
        a = n.pending,
        i = t.memoizedState;
        if (null !== a) {
          n.pending = null;
          var l = a = a.next;
          do {
            i = e(i, l.action), l = l.next
          } while ( l !== a );
          lr(i, t.memoizedState) || (xl = !0),
          t.memoizedState = i,
          null === t.baseQueue && (t.baseState = i),
          n.lastRenderedState = i
        }
        return [i, r]
      }
      function ji() {}
      function Ri(e, t) {
        var n = vi,
        r = Ai(),
        a = t(),
        i = !lr(r.memoizedState, a);
        if (i && (r.memoizedState = a, xl = !0), r = r.queue, Hi(Oi.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || null !== hi && 1 & hi.memoizedState.tag) {
          if (n.flags |= 2048, Di(9, Ni.bind(null, n, r, a, t), void 0, null), null === Ts) throw Error(o(349));
          0 !== (30 & gi) || Mi(n, t, a)
        }
        return a
      }
      function Mi(e, t, n) {
        e.flags |= 16384,
        e = {
          getSnapshot: t,
          value: n
        },
        null === (t = vi.updateQueue) ? (t = {
          lastEffect: null,
          stores: null
        },
        vi.updateQueue = t, t.stores = [e]) : null === (n = t.stores) ? t.stores = [e] : n.push(e)
      }
      function Ni(e, t, n, r) {
        t.value = n,
        t.getSnapshot = r,
        Bi(t) && Li(e)
      }
      function Oi(e, t, n) {
        return n((function() {
          Bi(t) && Li(e)
        }))
      }
      function Bi(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
          var n = t();
          return ! lr(e, n)
        } catch(r) {
          return ! 0
        }
      }
      function Li(e) {
        var t = zo(e, 1);
        null !== t && nc(t, e, 1, -1)
      }
      function Fi(e) {
        var t = Ci();
        return "function" === typeof e && (e = e()),
        t.memoizedState = t.baseState = e,
        e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Pi,
          lastRenderedState: e
        },
        t.queue = e,
        e = e.dispatch = nl.bind(null, vi, e),
        [t.memoizedState, e]
      }
      function Di(e, t, n, r) {
        return e = {
          tag: e,
          create: t,
          destroy: n,
          deps: r,
          next: null
        },
        null === (t = vi.updateQueue) ? (t = {
          lastEffect: null,
          stores: null
        },
        vi.updateQueue = t, t.lastEffect = e.next = e) : null === (n = t.lastEffect) ? t.lastEffect = e.next = e: (r = n.next, n.next = e, e.next = r, t.lastEffect = e),
        e
      }
      function Ii() {
        return Ai().memoizedState
      }
      function Vi(e, t, n, r) {
        var a = Ci();
        vi.flags |= e,
        a.memoizedState = Di(1 | t, n, void 0, void 0 === r ? null: r)
      }
      function Wi(e, t, n, r) {
        var a = Ai();
        r = void 0 === r ? null: r;
        var o = void 0;
        if (null !== mi) {
          var i = mi.memoizedState;
          if (o = i.destroy, null !== r && _i(r, i.deps)) return void(a.memoizedState = Di(t, n, o, r))
        }
        vi.flags |= e,
        a.memoizedState = Di(1 | t, n, o, r)
      }
      function Ui(e, t) {
        return Vi(8390656, 8, e, t)
      }
      function Hi(e, t) {
        return Wi(2048, 8, e, t)
      }
      function $i(e, t) {
        return Wi(4, 2, e, t)
      }
      function qi(e, t) {
        return Wi(4, 4, e, t)
      }
      function Gi(e, t) {
        return "function" === typeof t ? (e = e(), t(e),
        function() {
          t(null)
        }) : null !== t && void 0 !== t ? (e = e(), t.current = e,
        function() {
          t.current = null
        }) : void 0
      }
      function Yi(e, t, n) {
        return n = null !== n && void 0 !== n ? n.concat([e]) : null,
        Wi(4, 4, Gi.bind(null, t, e), n)
      }
      function Xi() {}
      function Ki(e, t) {
        var n = Ai();
        t = void 0 === t ? null: t;
        var r = n.memoizedState;
        return null !== r && null !== t && _i(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
      }
      function Qi(e, t) {
        var n = Ai();
        t = void 0 === t ? null: t;
        var r = n.memoizedState;
        return null !== r && null !== t && _i(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
      }
      function Zi(e, t, n) {
        return 0 === (21 & gi) ? (e.baseState && (e.baseState = !1, xl = !0), e.memoizedState = n) : (lr(n, t) || (n = vt(), vi.lanes |= n, Bs |= n, e.baseState = !0), t)
      }
      function Ji(e, t) {
        var n = bt;
        bt = 0 !== n && 4 > n ? n: 4,
        e(!0);
        var r = pi.transition;
        pi.transition = {};
        try {
          e(!1),
          t()
        } finally {
          bt = n,
          pi.transition = r
        }
      }
      function el() {
        return Ai().memoizedState
      }
      function tl(e, t, n) {
        var r = tc(e);
        if (n = {
          lane: r,
          action: n,
          hasEagerState: !1,
          eagerState: null,
          next: null
        },
        rl(e)) al(t, n);
        else if (null !== (n = To(e, t, n, r))) {
          nc(n, e, r, ec()),
          ol(n, t, r)
        }
      }
      function nl(e, t, n) {
        var r = tc(e),
        a = {
          lane: r,
          action: n,
          hasEagerState: !1,
          eagerState: null,
          next: null
        };
        if (rl(e)) al(t, a);
        else {
          var o = e.alternate;
          if (0 === e.lanes && (null === o || 0 === o.lanes) && null !== (o = t.lastRenderedReducer)) try {
            var i = t.lastRenderedState,
            l = o(i, n);
            if (a.hasEagerState = !0, a.eagerState = l, lr(l, i)) {
              var s = t.interleaved;
              return null === s ? (a.next = a, Po(t)) : (a.next = s.next, s.next = a),
              void(t.interleaved = a)
            }
          } catch(c) {}
          null !== (n = To(e, t, a, r)) && (nc(n, e, r, a = ec()), ol(n, t, r))
        }
      }
      function rl(e) {
        var t = e.alternate;
        return e === vi || null !== t && t === vi
      }
      function al(e, t) {
        bi = yi = !0;
        var n = e.pending;
        null === n ? t.next = t: (t.next = n.next, n.next = t),
        e.pending = t
      }
      function ol(e, t, n) {
        if (0 !== (4194240 & n)) {
          var r = t.lanes;
          n |= r &= e.pendingLanes,
          t.lanes = n,
          yt(e, n)
        }
      }
      var il = {
        readContext: Co,
        useCallback: ki,
        useContext: ki,
        useEffect: ki,
        useImperativeHandle: ki,
        useInsertionEffect: ki,
        useLayoutEffect: ki,
        useMemo: ki,
        useReducer: ki,
        useRef: ki,
        useState: ki,
        useDebugValue: ki,
        useDeferredValue: ki,
        useTransition: ki,
        useMutableSource: ki,
        useSyncExternalStore: ki,
        useId: ki,
        unstable_isNewReconciler: !1
      },
      ll = {
        readContext: Co,
        useCallback: function(e, t) {
          return Ci().memoizedState = [e, void 0 === t ? null: t],
          e
        },
        useContext: Co,
        useEffect: Ui,
        useImperativeHandle: function(e, t, n) {
          return n = null !== n && void 0 !== n ? n.concat([e]) : null,
          Vi(4194308, 4, Gi.bind(null, t, e), n)
        },
        useLayoutEffect: function(e, t) {
          return Vi(4194308, 4, e, t)
        },
        useInsertionEffect: function(e, t) {
          return Vi(4, 2, e, t)
        },
        useMemo: function(e, t) {
          var n = Ci();
          return t = void 0 === t ? null: t,
          e = e(),
          n.memoizedState = [e, t],
          e
        },
        useReducer: function(e, t, n) {
          var r = Ci();
          return t = void 0 !== n ? n(t) : t,
          r.memoizedState = r.baseState = t,
          e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t
          },
          r.queue = e,
          e = e.dispatch = tl.bind(null, vi, e),
          [r.memoizedState, e]
        },
        useRef: function(e) {
          return e = {
            current: e
          },
          Ci().memoizedState = e
        },
        useState: Fi,
        useDebugValue: Xi,
        useDeferredValue: function(e) {
          return Ci().memoizedState = e
        },
        useTransition: function() {
          var e = Fi(!1),
          t = e[0];
          return e = Ji.bind(null, e[1]),
          Ci().memoizedState = e,
          [t, e]
        },
        useMutableSource: function() {},
        useSyncExternalStore: function(e, t, n) {
          var r = vi,
          a = Ci();
          if (ao) {
            if (void 0 === n) throw Error(o(407));
            n = n()
          } else {
            if (n = t(), null === Ts) throw Error(o(349));
            0 !== (30 & gi) || Mi(r, t, n)
          }
          a.memoizedState = n;
          var i = {
            value: n,
            getSnapshot: t
          };
          return a.queue = i,
          Ui(Oi.bind(null, r, i, e), [e]),
          r.flags |= 2048,
          Di(9, Ni.bind(null, r, i, n, t), void 0, null),
          n
        },
        useId: function() {
          var e = Ci(),
          t = Ts.identifierPrefix;
          if (ao) {
            var n = Qa;
            t = ":" + t + "R" + (n = (Ka & ~ (1 << 32 - it(Ka) - 1)).toString(32) + n),
            0 < (n = xi++) && (t += "H" + n.toString(32)),
            t += ":"
          } else t = ":" + t + "r" + (n = wi++).toString(32) + ":";
          return e.memoizedState = t
        },
        unstable_isNewReconciler: !1
      },
      sl = {
        readContext: Co,
        useCallback: Ki,
        useContext: Co,
        useEffect: Hi,
        useImperativeHandle: Yi,
        useInsertionEffect: $i,
        useLayoutEffect: qi,
        useMemo: Qi,
        useReducer: Ti,
        useRef: Ii,
        useState: function() {
          return Ti(Pi)
        },
        useDebugValue: Xi,
        useDeferredValue: function(e) {
          return Zi(Ai(), mi.memoizedState, e)
        },
        useTransition: function() {
          return [Ti(Pi)[0], Ai().memoizedState]
        },
        useMutableSource: ji,
        useSyncExternalStore: Ri,
        useId: el,
        unstable_isNewReconciler: !1
      },
      cl = {
        readContext: Co,
        useCallback: Ki,
        useContext: Co,
        useEffect: Hi,
        useImperativeHandle: Yi,
        useInsertionEffect: $i,
        useLayoutEffect: qi,
        useMemo: Qi,
        useReducer: zi,
        useRef: Ii,
        useState: function() {
          return zi(Pi)
        },
        useDebugValue: Xi,
        useDeferredValue: function(e) {
          var t = Ai();
          return null === mi ? t.memoizedState = e: Zi(t, mi.memoizedState, e)
        },
        useTransition: function() {
          return [zi(Pi)[0], Ai().memoizedState]
        },
        useMutableSource: ji,
        useSyncExternalStore: Ri,
        useId: el,
        unstable_isNewReconciler: !1
      };
      function ul(e, t) {
        try {
          var n = "",
          r = t;
          do {
            n += V(r), r = r.
            return
          } while ( r );
          var a = n
        } catch(o) {
          a = "\nError generating stack: " + o.message + "\n" + o.stack
        }
        return {
          value: e,
          source: t,
          stack: a,
          digest: null
        }
      }
      function dl(e, t, n) {
        return {
          value: e,
          source: null,
          stack: null != n ? n: null,
          digest: null != t ? t: null
        }
      }
      function fl(e, t) {
        try {
          console.error(t.value)
        } catch(n) {
          setTimeout((function() {
            throw n
          }))
        }
      }
      var pl = "function" === typeof WeakMap ? WeakMap: Map;
      function gl(e, t, n) { (n = No( - 1, n)).tag = 3,
        n.payload = {
          element: null
        };
        var r = t.value;
        return n.callback = function() {
          Hs || (Hs = !0, $s = r),
          fl(0, t)
        },
        n
      }
      function vl(e, t, n) { (n = No( - 1, n)).tag = 3;
        var r = e.type.getDerivedStateFromError;
        if ("function" === typeof r) {
          var a = t.value;
          n.payload = function() {
            return r(a)
          },
          n.callback = function() {
            fl(0, t)
          }
        }
        var o = e.stateNode;
        return null !== o && "function" === typeof o.componentDidCatch && (n.callback = function() {
          fl(0, t),
          "function" !== typeof r && (null === qs ? qs = new Set([this]) : qs.add(this));
          var e = t.stack;
          this.componentDidCatch(t.value, {
            componentStack: null !== e ? e: ""
          })
        }),
        n
      }
      function ml(e, t, n) {
        var r = e.pingCache;
        if (null === r) {
          r = e.pingCache = new pl;
          var a = new Set;
          r.set(t, a)
        } else void 0 === (a = r.get(t)) && (a = new Set, r.set(t, a));
        a.has(n) || (a.add(n), e = Ec.bind(null, e, t, n), t.then(e, e))
      }
      function hl(e) {
        do {
          var t;
          if ((t = 13 === e.tag) && (t = null === (t = e.memoizedState) || null !== t.dehydrated), t) return e;
          e = e.
          return
        } while ( null !== e );
        return null
      }
      function yl(e, t, n, r, a) {
        return 0 === (1 & e.mode) ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, 1 === n.tag && (null === n.alternate ? n.tag = 17 : ((t = No( - 1, 1)).tag = 2, Oo(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = a, e)
      }
      var bl = x.ReactCurrentOwner,
      xl = !1;
      function wl(e, t, n, r) {
        t.child = null === e ? Zo(t, null, n, r) : Qo(t, e.child, n, r)
      }
      function kl(e, t, n, r, a) {
        n = n.render;
        var o = t.ref;
        return Eo(t, a),
        r = Si(e, t, n, r, o, a),
        n = Ei(),
        null === e || xl ? (ao && n && eo(t), t.flags |= 1, wl(e, t, r, a), t.child) : (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, Hl(e, t, a))
      }
      function _l(e, t, n, r, a) {
        if (null === e) {
          var o = n.type;
          return "function" !== typeof o || Rc(o) || void 0 !== o.defaultProps || null !== n.compare || void 0 !== n.defaultProps ? ((e = Nc(n.type, null, r, t, t.mode, a)).ref = t.ref, e.
          return = t, t.child = e) : (t.tag = 15, t.type = o, Sl(e, t, o, r, a))
        }
        if (o = e.child, 0 === (e.lanes & a)) {
          var i = o.memoizedProps;
          if ((n = null !== (n = n.compare) ? n: sr)(i, r) && e.ref === t.ref) return Hl(e, t, a)
        }
        return t.flags |= 1,
        (e = Mc(o, r)).ref = t.ref,
        e.
        return = t,
        t.child = e
      }
      function Sl(e, t, n, r, a) {
        if (null !== e) {
          var o = e.memoizedProps;
          if (sr(o, r) && e.ref === t.ref) {
            if (xl = !1, t.pendingProps = r = o, 0 === (e.lanes & a)) return t.lanes = e.lanes,
            Hl(e, t, a);
            0 !== (131072 & e.flags) && (xl = !0)
          }
        }
        return Al(e, t, n, r, a)
      }
      function El(e, t, n) {
        var r = t.pendingProps,
        a = r.children,
        o = null !== e ? e.memoizedState: null;
        if ("hidden" === r.mode) if (0 === (1 & t.mode)) t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null
        },
        Ca(Ms, Rs),
        Rs |= n;
        else {
          if (0 === (1073741824 & n)) return e = null !== o ? o.baseLanes | n: n,
          t.lanes = t.childLanes = 1073741824,
          t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null
          },
          t.updateQueue = null,
          Ca(Ms, Rs),
          Rs |= e,
          null;
          t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null
          },
          r = null !== o ? o.baseLanes: n,
          Ca(Ms, Rs),
          Rs |= r
        } else null !== o ? (r = o.baseLanes | n, t.memoizedState = null) : r = n,
        Ca(Ms, Rs),
        Rs |= r;
        return wl(e, t, a, n),
        t.child
      }
      function Cl(e, t) {
        var n = t.ref; (null === e && null !== n || null !== e && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152)
      }
      function Al(e, t, n, r, a) {
        var o = Ra(n) ? za: Pa.current;
        return o = ja(t, o),
        Eo(t, a),
        n = Si(e, t, n, r, o, a),
        r = Ei(),
        null === e || xl ? (ao && r && eo(t), t.flags |= 1, wl(e, t, n, a), t.child) : (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, Hl(e, t, a))
      }
      function Pl(e, t, n, r, a) {
        if (Ra(n)) {
          var o = !0;
          Ba(t)
        } else o = !1;
        if (Eo(t, a), null === t.stateNode) Ul(e, t),
        Ho(t, n, r),
        qo(t, n, r, a),
        r = !0;
        else if (null === e) {
          var i = t.stateNode,
          l = t.memoizedProps;
          i.props = l;
          var s = i.context,
          c = n.contextType;
          "object" === typeof c && null !== c ? c = Co(c) : c = ja(t, c = Ra(n) ? za: Pa.current);
          var u = n.getDerivedStateFromProps,
          d = "function" === typeof u || "function" === typeof i.getSnapshotBeforeUpdate;
          d || "function" !== typeof i.UNSAFE_componentWillReceiveProps && "function" !== typeof i.componentWillReceiveProps || (l !== r || s !== c) && $o(t, i, r, c),
          jo = !1;
          var f = t.memoizedState;
          i.state = f,
          Fo(t, r, i, a),
          s = t.memoizedState,
          l !== r || f !== s || Ta.current || jo ? ("function" === typeof u && (Vo(t, n, u, r), s = t.memoizedState), (l = jo || Uo(t, n, l, r, f, s, c)) ? (d || "function" !== typeof i.UNSAFE_componentWillMount && "function" !== typeof i.componentWillMount || ("function" === typeof i.componentWillMount && i.componentWillMount(), "function" === typeof i.UNSAFE_componentWillMount && i.UNSAFE_componentWillMount()), "function" === typeof i.componentDidMount && (t.flags |= 4194308)) : ("function" === typeof i.componentDidMount && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = s), i.props = r, i.state = s, i.context = c, r = l) : ("function" === typeof i.componentDidMount && (t.flags |= 4194308), r = !1)
        } else {
          i = t.stateNode,
          Mo(e, t),
          l = t.memoizedProps,
          c = t.type === t.elementType ? l: ho(t.type, l),
          i.props = c,
          d = t.pendingProps,
          f = i.context,
          "object" === typeof(s = n.contextType) && null !== s ? s = Co(s) : s = ja(t, s = Ra(n) ? za: Pa.current);
          var p = n.getDerivedStateFromProps; (u = "function" === typeof p || "function" === typeof i.getSnapshotBeforeUpdate) || "function" !== typeof i.UNSAFE_componentWillReceiveProps && "function" !== typeof i.componentWillReceiveProps || (l !== d || f !== s) && $o(t, i, r, s),
          jo = !1,
          f = t.memoizedState,
          i.state = f,
          Fo(t, r, i, a);
          var g = t.memoizedState;
          l !== d || f !== g || Ta.current || jo ? ("function" === typeof p && (Vo(t, n, p, r), g = t.memoizedState), (c = jo || Uo(t, n, c, r, f, g, s) || !1) ? (u || "function" !== typeof i.UNSAFE_componentWillUpdate && "function" !== typeof i.componentWillUpdate || ("function" === typeof i.componentWillUpdate && i.componentWillUpdate(r, g, s), "function" === typeof i.UNSAFE_componentWillUpdate && i.UNSAFE_componentWillUpdate(r, g, s)), "function" === typeof i.componentDidUpdate && (t.flags |= 4), "function" === typeof i.getSnapshotBeforeUpdate && (t.flags |= 1024)) : ("function" !== typeof i.componentDidUpdate || l === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), "function" !== typeof i.getSnapshotBeforeUpdate || l === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = g), i.props = r, i.state = g, i.context = s, r = c) : ("function" !== typeof i.componentDidUpdate || l === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), "function" !== typeof i.getSnapshotBeforeUpdate || l === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), r = !1)
        }
        return Tl(e, t, n, r, o, a)
      }
      function Tl(e, t, n, r, a, o) {
        Cl(e, t);
        var i = 0 !== (128 & t.flags);
        if (!r && !i) return a && La(t, n, !1),
        Hl(e, t, o);
        r = t.stateNode,
        bl.current = t;
        var l = i && "function" !== typeof n.getDerivedStateFromError ? null: r.render();
        return t.flags |= 1,
        null !== e && i ? (t.child = Qo(t, e.child, null, o), t.child = Qo(t, null, l, o)) : wl(e, t, l, o),
        t.memoizedState = r.state,
        a && La(t, n, !0),
        t.child
      }
      function zl(e) {
        var t = e.stateNode;
        t.pendingContext ? Na(0, t.pendingContext, t.pendingContext !== t.context) : t.context && Na(0, t.context, !1),
        ai(e, t.containerInfo)
      }
      function jl(e, t, n, r, a) {
        return go(),
        vo(a),
        t.flags |= 256,
        wl(e, t, n, r),
        t.child
      }
      var Rl, Ml, Nl, Ol = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0
      };
      function Bl(e) {
        return {
          baseLanes: e,
          cachePool: null,
          transitions: null
        }
      }
      function Ll(e, t, n) {
        var r, a = t.pendingProps,
        i = si.current,
        l = !1,
        s = 0 !== (128 & t.flags);
        if ((r = s) || (r = (null === e || null !== e.memoizedState) && 0 !== (2 & i)), r ? (l = !0, t.flags &= -129) : null !== e && null === e.memoizedState || (i |= 1), Ca(si, 1 & i), null === e) return co(t),
        null !== (e = t.memoizedState) && null !== (e = e.dehydrated) ? (0 === (1 & t.mode) ? t.lanes = 1 : "$!" === e.data ? t.lanes = 8 : t.lanes = 1073741824, null) : (s = a.children, e = a.fallback, l ? (a = t.mode, l = t.child, s = {
          mode: "hidden",
          children: s
        },
        0 === (1 & a) && null !== l ? (l.childLanes = 0, l.pendingProps = s) : l = Bc(s, a, 0, null), e = Oc(e, a, n, null), l.
        return = t, e.
        return = t, l.sibling = e, t.child = l, t.child.memoizedState = Bl(n), t.memoizedState = Ol, e) : Fl(t, s));
        if (null !== (i = e.memoizedState) && null !== (r = i.dehydrated)) return function(e, t, n, r, a, i, l) {
          if (n) return 256 & t.flags ? (t.flags &= -257, Dl(e, t, l, r = dl(Error(o(422))))) : null !== t.memoizedState ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, a = t.mode, r = Bc({
            mode: "visible",
            children: r.children
          },
          a, 0, null), (i = Oc(i, a, l, null)).flags |= 2, r.
          return = t, i.
          return = t, r.sibling = i, t.child = r, 0 !== (1 & t.mode) && Qo(t, e.child, null, l), t.child.memoizedState = Bl(l), t.memoizedState = Ol, i);
          if (0 === (1 & t.mode)) return Dl(e, t, l, null);
          if ("$!" === a.data) {
            if (r = a.nextSibling && a.nextSibling.dataset) var s = r.dgst;
            return r = s,
            Dl(e, t, l, r = dl(i = Error(o(419)), r, void 0))
          }
          if (s = 0 !== (l & e.childLanes), xl || s) {
            if (null !== (r = Ts)) {
              switch (l & -l) {
              case 4:
                a = 2;
                break;
              case 16:
                a = 8;
                break;
              case 64:
              case 128:
              case 256:
              case 512:
              case 1024:
              case 2048:
              case 4096:
              case 8192:
              case 16384:
              case 32768:
              case 65536:
              case 131072:
              case 262144:
              case 524288:
              case 1048576:
              case 2097152:
              case 4194304:
              case 8388608:
              case 16777216:
              case 33554432:
              case 67108864:
                a = 32;
                break;
              case 536870912:
                a = 268435456;
                break;
              default:
                a = 0
              }
              0 !== (a = 0 !== (a & (r.suspendedLanes | l)) ? 0 : a) && a !== i.retryLane && (i.retryLane = a, zo(e, a), nc(r, e, a, -1))
            }
            return vc(),
            Dl(e, t, l, r = dl(Error(o(421))))
          }
          return "$?" === a.data ? (t.flags |= 128, t.child = e.child, t = Ac.bind(null, e), a._reactRetry = t, null) : (e = i.treeContext, ro = ca(a.nextSibling), no = t, ao = !0, oo = null, null !== e && (Ga[Ya++] = Ka, Ga[Ya++] = Qa, Ga[Ya++] = Xa, Ka = e.id, Qa = e.overflow, Xa = t), t = Fl(t, r.children), t.flags |= 4096, t)
        } (e, t, s, a, r, i, n);
        if (l) {
          l = a.fallback,
          s = t.mode,
          r = (i = e.child).sibling;
          var c = {
            mode: "hidden",
            children: a.children
          };
          return 0 === (1 & s) && t.child !== i ? ((a = t.child).childLanes = 0, a.pendingProps = c, t.deletions = null) : (a = Mc(i, c)).subtreeFlags = 14680064 & i.subtreeFlags,
          null !== r ? l = Mc(r, l) : (l = Oc(l, s, n, null)).flags |= 2,
          l.
          return = t,
          a.
          return = t,
          a.sibling = l,
          t.child = a,
          a = l,
          l = t.child,
          s = null === (s = e.child.memoizedState) ? Bl(n) : {
            baseLanes: s.baseLanes | n,
            cachePool: null,
            transitions: s.transitions
          },
          l.memoizedState = s,
          l.childLanes = e.childLanes & ~n,
          t.memoizedState = Ol,
          a
        }
        return e = (l = e.child).sibling,
        a = Mc(l, {
          mode: "visible",
          children: a.children
        }),
        0 === (1 & t.mode) && (a.lanes = n),
        a.
        return = t,
        a.sibling = null,
        null !== e && (null === (n = t.deletions) ? (t.deletions = [e], t.flags |= 16) : n.push(e)),
        t.child = a,
        t.memoizedState = null,
        a
      }
      function Fl(e, t) {
        return (t = Bc({
          mode: "visible",
          children: t
        },
        e.mode, 0, null)).
        return = e,
        e.child = t
      }
      function Dl(e, t, n, r) {
        return null !== r && vo(r),
        Qo(t, e.child, null, n),
        (e = Fl(t, t.pendingProps.children)).flags |= 2,
        t.memoizedState = null,
        e
      }
      function Il(e, t, n) {
        e.lanes |= t;
        var r = e.alternate;
        null !== r && (r.lanes |= t),
        So(e.
        return, t, n)
      }
      function Vl(e, t, n, r, a) {
        var o = e.memoizedState;
        null === o ? e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: r,
          tail: n,
          tailMode: a
        }: (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = a)
      }
      function Wl(e, t, n) {
        var r = t.pendingProps,
        a = r.revealOrder,
        o = r.tail;
        if (wl(e, t, r.children, n), 0 !== (2 & (r = si.current))) r = 1 & r | 2,
        t.flags |= 128;
        else {
          if (null !== e && 0 !== (128 & e.flags)) e: for (e = t.child; null !== e;) {
            if (13 === e.tag) null !== e.memoizedState && Il(e, n, t);
            else if (19 === e.tag) Il(e, n, t);
            else if (null !== e.child) {
              e.child.
              return = e,
              e = e.child;
              continue
            }
            if (e === t) break e;
            for (; null === e.sibling;) {
              if (null === e.
              return || e.
              return === t) break e;
              e = e.
              return
            }
            e.sibling.
            return = e.
            return,
            e = e.sibling
          }
          r &= 1
        }
        if (Ca(si, r), 0 === (1 & t.mode)) t.memoizedState = null;
        else switch (a) {
        case "forwards":
          for (n = t.child, a = null; null !== n;) null !== (e = n.alternate) && null === ci(e) && (a = n),
          n = n.sibling;
          null === (n = a) ? (a = t.child, t.child = null) : (a = n.sibling, n.sibling = null),
          Vl(t, !1, a, n, o);
          break;
        case "backwards":
          for (n = null, a = t.child, t.child = null; null !== a;) {
            if (null !== (e = a.alternate) && null === ci(e)) {
              t.child = a;
              break
            }
            e = a.sibling,
            a.sibling = n,
            n = a,
            a = e
          }
          Vl(t, !0, n, null, o);
          break;
        case "together":
          Vl(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null
        }
        return t.child
      }
      function Ul(e, t) {
        0 === (1 & t.mode) && null !== e && (e.alternate = null, t.alternate = null, t.flags |= 2)
      }
      function Hl(e, t, n) {
        if (null !== e && (t.dependencies = e.dependencies), Bs |= t.lanes, 0 === (n & t.childLanes)) return null;
        if (null !== e && t.child !== e.child) throw Error(o(153));
        if (null !== t.child) {
          for (n = Mc(e = t.child, e.pendingProps), t.child = n, n.
          return = t; null !== e.sibling;) e = e.sibling,
          (n = n.sibling = Mc(e, e.pendingProps)).
          return = t;
          n.sibling = null
        }
        return t.child
      }
      function $l(e, t) {
        if (!ao) switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; null !== t;) null !== t.alternate && (n = t),
          t = t.sibling;
          null === n ? e.tail = null: n.sibling = null;
          break;
        case "collapsed":
          n = e.tail;
          for (var r = null; null !== n;) null !== n.alternate && (r = n),
          n = n.sibling;
          null === r ? t || null === e.tail ? e.tail = null: e.tail.sibling = null: r.sibling = null
        }
      }
      function ql(e) {
        var t = null !== e.alternate && e.alternate.child === e.child,
        n = 0,
        r = 0;
        if (t) for (var a = e.child; null !== a;) n |= a.lanes | a.childLanes,
        r |= 14680064 & a.subtreeFlags,
        r |= 14680064 & a.flags,
        a.
        return = e,
        a = a.sibling;
        else for (a = e.child; null !== a;) n |= a.lanes | a.childLanes,
        r |= a.subtreeFlags,
        r |= a.flags,
        a.
        return = e,
        a = a.sibling;
        return e.subtreeFlags |= r,
        e.childLanes = n,
        t
      }
      function Gl(e, t, n) {
        var r = t.pendingProps;
        switch (to(t), t.tag) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return ql(t),
          null;
        case 1:
        case 17:
          return Ra(t.type) && Ma(),
          ql(t),
          null;
        case 3:
          return r = t.stateNode,
          oi(),
          Ea(Ta),
          Ea(Pa),
          di(),
          r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null),
          null !== e && null !== e.child || (fo(t) ? t.flags |= 4 : null === e || e.memoizedState.isDehydrated && 0 === (256 & t.flags) || (t.flags |= 1024, null !== oo && (ic(oo), oo = null))),
          ql(t),
          null;
        case 5:
          li(t);
          var a = ri(ni.current);
          if (n = t.type, null !== e && null != t.stateNode) Ml(e, t, n, r),
          e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
          else {
            if (!r) {
              if (null === t.stateNode) throw Error(o(166));
              return ql(t),
              null
            }
            if (e = ri(ei.current), fo(t)) {
              r = t.stateNode,
              n = t.type;
              var i = t.memoizedProps;
              switch (r[fa] = t, r[pa] = i, e = 0 !== (1 & t.mode), n) {
              case "dialog":
                Dr("cancel", r),
                Dr("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                Dr("load", r);
                break;
              case "video":
              case "audio":
                for (a = 0; a < Or.length; a++) Dr(Or[a], r);
                break;
              case "source":
                Dr("error", r);
                break;
              case "img":
              case "image":
              case "link":
                Dr("error", r),
                Dr("load", r);
                break;
              case "details":
                Dr("toggle", r);
                break;
              case "input":
                K(r, i),
                Dr("invalid", r);
                break;
              case "select":
                r._wrapperState = {
                  wasMultiple: !!i.multiple
                },
                Dr("invalid", r);
                break;
              case "textarea":
                ae(r, i),
                Dr("invalid", r)
              }
              for (var s in ye(n, i), a = null, i) if (i.hasOwnProperty(s)) {
                var c = i[s];
                "children" === s ? "string" === typeof c ? r.textContent !== c && (!0 !== i.suppressHydrationWarning && Zr(r.textContent, c, e), a = ["children", c]) : "number" === typeof c && r.textContent !== "" + c && (!0 !== i.suppressHydrationWarning && Zr(r.textContent, c, e), a = ["children", "" + c]) : l.hasOwnProperty(s) && null != c && "onScroll" === s && Dr("scroll", r)
              }
              switch (n) {
              case "input":
                q(r),
                J(r, i, !0);
                break;
              case "textarea":
                q(r),
                ie(r);
                break;
              case "select":
              case "option":
                break;
              default:
                "function" === typeof i.onClick && (r.onclick = Jr)
              }
              r = a,
              t.updateQueue = r,
              null !== r && (t.flags |= 4)
            } else {
              s = 9 === a.nodeType ? a: a.ownerDocument,
              "http://www.w3.org/1999/xhtml" === e && (e = le(n)),
              "http://www.w3.org/1999/xhtml" === e ? "script" === n ? ((e = s.createElement("div")).innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : "string" === typeof r.is ? e = s.createElement(n, {
                is: r.is
              }) : (e = s.createElement(n), "select" === n && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n),
              e[fa] = t,
              e[pa] = r,
              Rl(e, t),
              t.stateNode = e;
              e: {
                switch (s = be(n, r), n) {
                case "dialog":
                  Dr("cancel", e),
                  Dr("close", e),
                  a = r;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Dr("load", e),
                  a = r;
                  break;
                case "video":
                case "audio":
                  for (a = 0; a < Or.length; a++) Dr(Or[a], e);
                  a = r;
                  break;
                case "source":
                  Dr("error", e),
                  a = r;
                  break;
                case "img":
                case "image":
                case "link":
                  Dr("error", e),
                  Dr("load", e),
                  a = r;
                  break;
                case "details":
                  Dr("toggle", e),
                  a = r;
                  break;
                case "input":
                  K(e, r),
                  a = X(e, r),
                  Dr("invalid", e);
                  break;
                case "option":
                default:
                  a = r;
                  break;
                case "select":
                  e._wrapperState = {
                    wasMultiple: !!r.multiple
                  },
                  a = L({},
                  r, {
                    value: void 0
                  }),
                  Dr("invalid", e);
                  break;
                case "textarea":
                  ae(e, r),
                  a = re(e, r),
                  Dr("invalid", e)
                }
                for (i in ye(n, a), c = a) if (c.hasOwnProperty(i)) {
                  var u = c[i];
                  "style" === i ? me(e, u) : "dangerouslySetInnerHTML" === i ? null != (u = u ? u.__html: void 0) && de(e, u) : "children" === i ? "string" === typeof u ? ("textarea" !== n || "" !== u) && fe(e, u) : "number" === typeof u && fe(e, "" + u) : "suppressContentEditableWarning" !== i && "suppressHydrationWarning" !== i && "autoFocus" !== i && (l.hasOwnProperty(i) ? null != u && "onScroll" === i && Dr("scroll", e) : null != u && b(e, i, u, s))
                }
                switch (n) {
                case "input":
                  q(e),
                  J(e, r, !1);
                  break;
                case "textarea":
                  q(e),
                  ie(e);
                  break;
                case "option":
                  null != r.value && e.setAttribute("value", "" + H(r.value));
                  break;
                case "select":
                  e.multiple = !!r.multiple,
                  null != (i = r.value) ? ne(e, !!r.multiple, i, !1) : null != r.defaultValue && ne(e, !!r.multiple, r.defaultValue, !0);
                  break;
                default:
                  "function" === typeof a.onClick && (e.onclick = Jr)
                }
                switch (n) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  r = !!r.autoFocus;
                  break e;
                case "img":
                  r = !0;
                  break e;
                default:
                  r = !1
                }
              }
              r && (t.flags |= 4)
            }
            null !== t.ref && (t.flags |= 512, t.flags |= 2097152)
          }
          return ql(t),
          null;
        case 6:
          if (e && null != t.stateNode) Nl(0, t, e.memoizedProps, r);
          else {
            if ("string" !== typeof r && null === t.stateNode) throw Error(o(166));
            if (n = ri(ni.current), ri(ei.current), fo(t)) {
              if (r = t.stateNode, n = t.memoizedProps, r[fa] = t, (i = r.nodeValue !== n) && null !== (e = no)) switch (e.tag) {
              case 3:
                Zr(r.nodeValue, n, 0 !== (1 & e.mode));
                break;
              case 5:
                !0 !== e.memoizedProps.suppressHydrationWarning && Zr(r.nodeValue, n, 0 !== (1 & e.mode))
              }
              i && (t.flags |= 4)
            } else(r = (9 === n.nodeType ? n: n.ownerDocument).createTextNode(r))[fa] = t,
            t.stateNode = r
          }
          return ql(t),
          null;
        case 13:
          if (Ea(si), r = t.memoizedState, null === e || null !== e.memoizedState && null !== e.memoizedState.dehydrated) {
            if (ao && null !== ro && 0 !== (1 & t.mode) && 0 === (128 & t.flags)) po(),
            go(),
            t.flags |= 98560,
            i = !1;
            else if (i = fo(t), null !== r && null !== r.dehydrated) {
              if (null === e) {
                if (!i) throw Error(o(318));
                if (! (i = null !== (i = t.memoizedState) ? i.dehydrated: null)) throw Error(o(317));
                i[fa] = t
              } else go(),
              0 === (128 & t.flags) && (t.memoizedState = null),
              t.flags |= 4;
              ql(t),
              i = !1
            } else null !== oo && (ic(oo), oo = null),
            i = !0;
            if (!i) return 65536 & t.flags ? t: null
          }
          return 0 !== (128 & t.flags) ? (t.lanes = n, t) : ((r = null !== r) !== (null !== e && null !== e.memoizedState) && r && (t.child.flags |= 8192, 0 !== (1 & t.mode) && (null === e || 0 !== (1 & si.current) ? 0 === Ns && (Ns = 3) : vc())), null !== t.updateQueue && (t.flags |= 4), ql(t), null);
        case 4:
          return oi(),
          null === e && Wr(t.stateNode.containerInfo),
          ql(t),
          null;
        case 10:
          return _o(t.type._context),
          ql(t),
          null;
        case 19:
          if (Ea(si), null === (i = t.memoizedState)) return ql(t),
          null;
          if (r = 0 !== (128 & t.flags), null === (s = i.rendering)) if (r) $l(i, !1);
          else {
            if (0 !== Ns || null !== e && 0 !== (128 & e.flags)) for (e = t.child; null !== e;) {
              if (null !== (s = ci(e))) {
                for (t.flags |= 128, $l(i, !1), null !== (r = s.updateQueue) && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; null !== n;) e = r,
                (i = n).flags &= 14680066,
                null === (s = i.alternate) ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = s.childLanes, i.lanes = s.lanes, i.child = s.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = s.memoizedProps, i.memoizedState = s.memoizedState, i.updateQueue = s.updateQueue, i.type = s.type, e = s.dependencies, i.dependencies = null === e ? null: {
                  lanes: e.lanes,
                  firstContext: e.firstContext
                }),
                n = n.sibling;
                return Ca(si, 1 & si.current | 2),
                t.child
              }
              e = e.sibling
            }
            null !== i.tail && Qe() > Ws && (t.flags |= 128, r = !0, $l(i, !1), t.lanes = 4194304)
          } else {
            if (!r) if (null !== (e = ci(s))) {
              if (t.flags |= 128, r = !0, null !== (n = e.updateQueue) && (t.updateQueue = n, t.flags |= 4), $l(i, !0), null === i.tail && "hidden" === i.tailMode && !s.alternate && !ao) return ql(t),
              null
            } else 2 * Qe() - i.renderingStartTime > Ws && 1073741824 !== n && (t.flags |= 128, r = !0, $l(i, !1), t.lanes = 4194304);
            i.isBackwards ? (s.sibling = t.child, t.child = s) : (null !== (n = i.last) ? n.sibling = s: t.child = s, i.last = s)
          }
          return null !== i.tail ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = Qe(), t.sibling = null, n = si.current, Ca(si, r ? 1 & n | 2 : 1 & n), t) : (ql(t), null);
        case 22:
        case 23:
          return dc(),
          r = null !== t.memoizedState,
          null !== e && null !== e.memoizedState !== r && (t.flags |= 8192),
          r && 0 !== (1 & t.mode) ? 0 !== (1073741824 & Rs) && (ql(t), 6 & t.subtreeFlags && (t.flags |= 8192)) : ql(t),
          null;
        case 24:
        case 25:
          return null
        }
        throw Error(o(156, t.tag))
      }
      function Yl(e, t) {
        switch (to(t), t.tag) {
        case 1:
          return Ra(t.type) && Ma(),
          65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
        case 3:
          return oi(),
          Ea(Ta),
          Ea(Pa),
          di(),
          0 !== (65536 & (e = t.flags)) && 0 === (128 & e) ? (t.flags = -65537 & e | 128, t) : null;
        case 5:
          return li(t),
          null;
        case 13:
          if (Ea(si), null !== (e = t.memoizedState) && null !== e.dehydrated) {
            if (null === t.alternate) throw Error(o(340));
            go()
          }
          return 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
        case 19:
          return Ea(si),
          null;
        case 4:
          return oi(),
          null;
        case 10:
          return _o(t.type._context),
          null;
        case 22:
        case 23:
          return dc(),
          null;
        default:
          return null
        }
      }
      Rl = function(e, t) {
        for (var n = t.child; null !== n;) {
          if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
          else if (4 !== n.tag && null !== n.child) {
            n.child.
            return = n,
            n = n.child;
            continue
          }
          if (n === t) break;
          for (; null === n.sibling;) {
            if (null === n.
            return || n.
            return === t) return;
            n = n.
            return
          }
          n.sibling.
          return = n.
          return,
          n = n.sibling
        }
      },
      Ml = function(e, t, n, r) {
        var a = e.memoizedProps;
        if (a !== r) {
          e = t.stateNode,
          ri(ei.current);
          var o, i = null;
          switch (n) {
          case "input":
            a = X(e, a),
            r = X(e, r),
            i = [];
            break;
          case "select":
            a = L({},
            a, {
              value: void 0
            }),
            r = L({},
            r, {
              value: void 0
            }),
            i = [];
            break;
          case "textarea":
            a = re(e, a),
            r = re(e, r),
            i = [];
            break;
          default:
            "function" !== typeof a.onClick && "function" === typeof r.onClick && (e.onclick = Jr)
          }
          for (u in ye(n, r), n = null, a) if (!r.hasOwnProperty(u) && a.hasOwnProperty(u) && null != a[u]) if ("style" === u) {
            var s = a[u];
            for (o in s) s.hasOwnProperty(o) && (n || (n = {}), n[o] = "")
          } else "dangerouslySetInnerHTML" !== u && "children" !== u && "suppressContentEditableWarning" !== u && "suppressHydrationWarning" !== u && "autoFocus" !== u && (l.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
          for (u in r) {
            var c = r[u];
            if (s = null != a ? a[u] : void 0, r.hasOwnProperty(u) && c !== s && (null != c || null != s)) if ("style" === u) if (s) {
              for (o in s) ! s.hasOwnProperty(o) || c && c.hasOwnProperty(o) || (n || (n = {}), n[o] = "");
              for (o in c) c.hasOwnProperty(o) && s[o] !== c[o] && (n || (n = {}), n[o] = c[o])
            } else n || (i || (i = []), i.push(u, n)),
            n = c;
            else "dangerouslySetInnerHTML" === u ? (c = c ? c.__html: void 0, s = s ? s.__html: void 0, null != c && s !== c && (i = i || []).push(u, c)) : "children" === u ? "string" !== typeof c && "number" !== typeof c || (i = i || []).push(u, "" + c) : "suppressContentEditableWarning" !== u && "suppressHydrationWarning" !== u && (l.hasOwnProperty(u) ? (null != c && "onScroll" === u && Dr("scroll", e), i || s === c || (i = [])) : (i = i || []).push(u, c))
          }
          n && (i = i || []).push("style", n);
          var u = i; (t.updateQueue = u) && (t.flags |= 4)
        }
      },
      Nl = function(e, t, n, r) {
        n !== r && (t.flags |= 4)
      };
      var Xl = !1,
      Kl = !1,
      Ql = "function" === typeof WeakSet ? WeakSet: Set,
      Zl = null;
      function Jl(e, t) {
        var n = e.ref;
        if (null !== n) if ("function" === typeof n) try {
          n(null)
        } catch(r) {
          Sc(e, t, r)
        } else n.current = null
      }
      function es(e, t, n) {
        try {
          n()
        } catch(r) {
          Sc(e, t, r)
        }
      }
      var ts = !1;
      function ns(e, t, n) {
        var r = t.updateQueue;
        if (null !== (r = null !== r ? r.lastEffect: null)) {
          var a = r = r.next;
          do {
            if ((a.tag & e) === e) {
              var o = a.destroy;
              a.destroy = void 0,
              void 0 !== o && es(t, n, o)
            }
            a = a.next
          } while ( a !== r )
        }
      }
      function rs(e, t) {
        if (null !== (t = null !== (t = t.updateQueue) ? t.lastEffect: null)) {
          var n = t = t.next;
          do {
            if ((n.tag & e) === e) {
              var r = n.create;
              n.destroy = r()
            }
            n = n.next
          } while ( n !== t )
        }
      }
      function as(e) {
        var t = e.ref;
        if (null !== t) {
          var n = e.stateNode;
          e.tag,
          e = n,
          "function" === typeof t ? t(e) : t.current = e
        }
      }
      function os(e) {
        var t = e.alternate;
        null !== t && (e.alternate = null, os(t)),
        e.child = null,
        e.deletions = null,
        e.sibling = null,
        5 === e.tag && (null !== (t = e.stateNode) && (delete t[fa], delete t[pa], delete t[va], delete t[ma], delete t[ha])),
        e.stateNode = null,
        e.
        return = null,
        e.dependencies = null,
        e.memoizedProps = null,
        e.memoizedState = null,
        e.pendingProps = null,
        e.stateNode = null,
        e.updateQueue = null
      }
      function is(e) {
        return 5 === e.tag || 3 === e.tag || 4 === e.tag
      }
      function ls(e) {
        e: for (;;) {
          for (; null === e.sibling;) {
            if (null === e.
            return || is(e.
            return)) return null;
            e = e.
            return
          }
          for (e.sibling.
          return = e.
          return, e = e.sibling; 5 !== e.tag && 6 !== e.tag && 18 !== e.tag;) {
            if (2 & e.flags) continue e;
            if (null === e.child || 4 === e.tag) continue e;
            e.child.
            return = e,
            e = e.child
          }
          if (! (2 & e.flags)) return e.stateNode
        }
      }
      function ss(e, t, n) {
        var r = e.tag;
        if (5 === r || 6 === r) e = e.stateNode,
        t ? 8 === n.nodeType ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (8 === n.nodeType ? (t = n.parentNode).insertBefore(e, n) : (t = n).appendChild(e), null !== (n = n._reactRootContainer) && void 0 !== n || null !== t.onclick || (t.onclick = Jr));
        else if (4 !== r && null !== (e = e.child)) for (ss(e, t, n), e = e.sibling; null !== e;) ss(e, t, n),
        e = e.sibling
      }
      function cs(e, t, n) {
        var r = e.tag;
        if (5 === r || 6 === r) e = e.stateNode,
        t ? n.insertBefore(e, t) : n.appendChild(e);
        else if (4 !== r && null !== (e = e.child)) for (cs(e, t, n), e = e.sibling; null !== e;) cs(e, t, n),
        e = e.sibling
      }
      var us = null,
      ds = !1;
      function fs(e, t, n) {
        for (n = n.child; null !== n;) ps(e, t, n),
        n = n.sibling
      }
      function ps(e, t, n) {
        if (ot && "function" === typeof ot.onCommitFiberUnmount) try {
          ot.onCommitFiberUnmount(at, n)
        } catch(l) {}
        switch (n.tag) {
        case 5:
          Kl || Jl(n, t);
        case 6:
          var r = us,
          a = ds;
          us = null,
          fs(e, t, n),
          ds = a,
          null !== (us = r) && (ds ? (e = us, n = n.stateNode, 8 === e.nodeType ? e.parentNode.removeChild(n) : e.removeChild(n)) : us.removeChild(n.stateNode));
          break;
        case 18:
          null !== us && (ds ? (e = us, n = n.stateNode, 8 === e.nodeType ? sa(e.parentNode, n) : 1 === e.nodeType && sa(e, n), Wt(e)) : sa(us, n.stateNode));
          break;
        case 4:
          r = us,
          a = ds,
          us = n.stateNode.containerInfo,
          ds = !0,
          fs(e, t, n),
          us = r,
          ds = a;
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          if (!Kl && (null !== (r = n.updateQueue) && null !== (r = r.lastEffect))) {
            a = r = r.next;
            do {
              var o = a,
              i = o.destroy;
              o = o.tag, void 0 !== i && (0 !== (2 & o) || 0 !== (4 & o)) && es(n, t, i), a = a.next
            } while ( a !== r )
          }
          fs(e, t, n);
          break;
        case 1:
          if (!Kl && (Jl(n, t), "function" === typeof(r = n.stateNode).componentWillUnmount)) try {
            r.props = n.memoizedProps,
            r.state = n.memoizedState,
            r.componentWillUnmount()
          } catch(l) {
            Sc(n, t, l)
          }
          fs(e, t, n);
          break;
        case 21:
          fs(e, t, n);
          break;
        case 22:
          1 & n.mode ? (Kl = (r = Kl) || null !== n.memoizedState, fs(e, t, n), Kl = r) : fs(e, t, n);
          break;
        default:
          fs(e, t, n)
        }
      }
      function gs(e) {
        var t = e.updateQueue;
        if (null !== t) {
          e.updateQueue = null;
          var n = e.stateNode;
          null === n && (n = e.stateNode = new Ql),
          t.forEach((function(t) {
            var r = Pc.bind(null, e, t);
            n.has(t) || (n.add(t), t.then(r, r))
          }))
        }
      }
      function vs(e, t) {
        var n = t.deletions;
        if (null !== n) for (var r = 0; r < n.length; r++) {
          var a = n[r];
          try {
            var i = e,
            l = t,
            s = l;
            e: for (; null !== s;) {
              switch (s.tag) {
              case 5:
                us = s.stateNode,
                ds = !1;
                break e;
              case 3:
              case 4:
                us = s.stateNode.containerInfo,
                ds = !0;
                break e
              }
              s = s.
              return
            }
            if (null === us) throw Error(o(160));
            ps(i, l, a),
            us = null,
            ds = !1;
            var c = a.alternate;
            null !== c && (c.
            return = null),
            a.
            return = null
          } catch(u) {
            Sc(a, t, u)
          }
        }
        if (12854 & t.subtreeFlags) for (t = t.child; null !== t;) ms(t, e),
        t = t.sibling
      }
      function ms(e, t) {
        var n = e.alternate,
        r = e.flags;
        switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          if (vs(t, e), hs(e), 4 & r) {
            try {
              ns(3, e, e.
              return),
              rs(3, e)
            } catch(m) {
              Sc(e, e.
              return, m)
            }
            try {
              ns(5, e, e.
              return)
            } catch(m) {
              Sc(e, e.
              return, m)
            }
          }
          break;
        case 1:
          vs(t, e),
          hs(e),
          512 & r && null !== n && Jl(n, n.
          return);
          break;
        case 5:
          if (vs(t, e), hs(e), 512 & r && null !== n && Jl(n, n.
          return), 32 & e.flags) {
            var a = e.stateNode;
            try {
              fe(a, "")
            } catch(m) {
              Sc(e, e.
              return, m)
            }
          }
          if (4 & r && null != (a = e.stateNode)) {
            var i = e.memoizedProps,
            l = null !== n ? n.memoizedProps: i,
            s = e.type,
            c = e.updateQueue;
            if (e.updateQueue = null, null !== c) try {
              "input" === s && "radio" === i.type && null != i.name && Q(a, i),
              be(s, l);
              var u = be(s, i);
              for (l = 0; l < c.length; l += 2) {
                var d = c[l],
                f = c[l + 1];
                "style" === d ? me(a, f) : "dangerouslySetInnerHTML" === d ? de(a, f) : "children" === d ? fe(a, f) : b(a, d, f, u)
              }
              switch (s) {
              case "input":
                Z(a, i);
                break;
              case "textarea":
                oe(a, i);
                break;
              case "select":
                var p = a._wrapperState.wasMultiple;
                a._wrapperState.wasMultiple = !!i.multiple;
                var g = i.value;
                null != g ? ne(a, !!i.multiple, g, !1) : p !== !!i.multiple && (null != i.defaultValue ? ne(a, !!i.multiple, i.defaultValue, !0) : ne(a, !!i.multiple, i.multiple ? [] : "", !1))
              }
              a[pa] = i
            } catch(m) {
              Sc(e, e.
              return, m)
            }
          }
          break;
        case 6:
          if (vs(t, e), hs(e), 4 & r) {
            if (null === e.stateNode) throw Error(o(162));
            a = e.stateNode,
            i = e.memoizedProps;
            try {
              a.nodeValue = i
            } catch(m) {
              Sc(e, e.
              return, m)
            }
          }
          break;
        case 3:
          if (vs(t, e), hs(e), 4 & r && null !== n && n.memoizedState.isDehydrated) try {
            Wt(t.containerInfo)
          } catch(m) {
            Sc(e, e.
            return, m)
          }
          break;
        case 4:
        default:
          vs(t, e),
          hs(e);
          break;
        case 13:
          vs(t, e),
          hs(e),
          8192 & (a = e.child).flags && (i = null !== a.memoizedState, a.stateNode.isHidden = i, !i || null !== a.alternate && null !== a.alternate.memoizedState || (Vs = Qe())),
          4 & r && gs(e);
          break;
        case 22:
          if (d = null !== n && null !== n.memoizedState, 1 & e.mode ? (Kl = (u = Kl) || d, vs(t, e), Kl = u) : vs(t, e), hs(e), 8192 & r) {
            if (u = null !== e.memoizedState, (e.stateNode.isHidden = u) && !d && 0 !== (1 & e.mode)) for (Zl = e, d = e.child; null !== d;) {
              for (f = Zl = d; null !== Zl;) {
                switch (g = (p = Zl).child, p.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  ns(4, p, p.
                  return);
                  break;
                case 1:
                  Jl(p, p.
                  return);
                  var v = p.stateNode;
                  if ("function" === typeof v.componentWillUnmount) {
                    r = p,
                    n = p.
                    return;
                    try {
                      t = r,
                      v.props = t.memoizedProps,
                      v.state = t.memoizedState,
                      v.componentWillUnmount()
                    } catch(m) {
                      Sc(r, n, m)
                    }
                  }
                  break;
                case 5:
                  Jl(p, p.
                  return);
                  break;
                case 22:
                  if (null !== p.memoizedState) {
                    ws(f);
                    continue
                  }
                }
                null !== g ? (g.
                return = p, Zl = g) : ws(f)
              }
              d = d.sibling
            }
            e: for (d = null, f = e;;) {
              if (5 === f.tag) {
                if (null === d) {
                  d = f;
                  try {
                    a = f.stateNode,
                    u ? "function" === typeof(i = a.style).setProperty ? i.setProperty("display", "none", "important") : i.display = "none": (s = f.stateNode, l = void 0 !== (c = f.memoizedProps.style) && null !== c && c.hasOwnProperty("display") ? c.display: null, s.style.display = ve("display", l))
                  } catch(m) {
                    Sc(e, e.
                    return, m)
                  }
                }
              } else if (6 === f.tag) {
                if (null === d) try {
                  f.stateNode.nodeValue = u ? "": f.memoizedProps
                } catch(m) {
                  Sc(e, e.
                  return, m)
                }
              } else if ((22 !== f.tag && 23 !== f.tag || null === f.memoizedState || f === e) && null !== f.child) {
                f.child.
                return = f,
                f = f.child;
                continue
              }
              if (f === e) break e;
              for (; null === f.sibling;) {
                if (null === f.
                return || f.
                return === e) break e;
                d === f && (d = null),
                f = f.
                return
              }
              d === f && (d = null),
              f.sibling.
              return = f.
              return,
              f = f.sibling
            }
          }
          break;
        case 19:
          vs(t, e),
          hs(e),
          4 & r && gs(e);
        case 21:
        }
      }
      function hs(e) {
        var t = e.flags;
        if (2 & t) {
          try {
            e: {
              for (var n = e.
              return; null !== n;) {
                if (is(n)) {
                  var r = n;
                  break e
                }
                n = n.
                return
              }
              throw Error(o(160))
            }
            switch (r.tag) {
            case 5:
              var a = r.stateNode;
              32 & r.flags && (fe(a, ""), r.flags &= -33),
              cs(e, ls(e), a);
              break;
            case 3:
            case 4:
              var i = r.stateNode.containerInfo;
              ss(e, ls(e), i);
              break;
            default:
              throw Error(o(161))
            }
          } catch(l) {
            Sc(e, e.
            return, l)
          }
          e.flags &= -3
        }
        4096 & t && (e.flags &= -4097)
      }
      function ys(e, t, n) {
        Zl = e,
        bs(e, t, n)
      }
      function bs(e, t, n) {
        for (var r = 0 !== (1 & e.mode); null !== Zl;) {
          var a = Zl,
          o = a.child;
          if (22 === a.tag && r) {
            var i = null !== a.memoizedState || Xl;
            if (!i) {
              var l = a.alternate,
              s = null !== l && null !== l.memoizedState || Kl;
              l = Xl;
              var c = Kl;
              if (Xl = i, (Kl = s) && !c) for (Zl = a; null !== Zl;) s = (i = Zl).child,
              22 === i.tag && null !== i.memoizedState ? ks(a) : null !== s ? (s.
              return = i, Zl = s) : ks(a);
              for (; null !== o;) Zl = o,
              bs(o, t, n),
              o = o.sibling;
              Zl = a,
              Xl = l,
              Kl = c
            }
            xs(e)
          } else 0 !== (8772 & a.subtreeFlags) && null !== o ? (o.
          return = a, Zl = o) : xs(e)
        }
      }
      function xs(e) {
        for (; null !== Zl;) {
          var t = Zl;
          if (0 !== (8772 & t.flags)) {
            var n = t.alternate;
            try {
              if (0 !== (8772 & t.flags)) switch (t.tag) {
              case 0:
              case 11:
              case 15:
                Kl || rs(5, t);
                break;
              case 1:
                var r = t.stateNode;
                if (4 & t.flags && !Kl) if (null === n) r.componentDidMount();
                else {
                  var a = t.elementType === t.type ? n.memoizedProps: ho(t.type, n.memoizedProps);
                  r.componentDidUpdate(a, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                }
                var i = t.updateQueue;
                null !== i && Do(t, i, r);
                break;
              case 3:
                var l = t.updateQueue;
                if (null !== l) {
                  if (n = null, null !== t.child) switch (t.child.tag) {
                  case 5:
                  case 1:
                    n = t.child.stateNode
                  }
                  Do(t, l, n)
                }
                break;
              case 5:
                var s = t.stateNode;
                if (null === n && 4 & t.flags) {
                  n = s;
                  var c = t.memoizedProps;
                  switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    c.autoFocus && n.focus();
                    break;
                  case "img":
                    c.src && (n.src = c.src)
                  }
                }
                break;
              case 6:
              case 4:
              case 12:
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              case 13:
                if (null === t.memoizedState) {
                  var u = t.alternate;
                  if (null !== u) {
                    var d = u.memoizedState;
                    if (null !== d) {
                      var f = d.dehydrated;
                      null !== f && Wt(f)
                    }
                  }
                }
                break;
              default:
                throw Error(o(163))
              }
              Kl || 512 & t.flags && as(t)
            } catch(p) {
              Sc(t, t.
              return, p)
            }
          }
          if (t === e) {
            Zl = null;
            break
          }
          if (null !== (n = t.sibling)) {
            n.
            return = t.
            return,
            Zl = n;
            break
          }
          Zl = t.
          return
        }
      }
      function ws(e) {
        for (; null !== Zl;) {
          var t = Zl;
          if (t === e) {
            Zl = null;
            break
          }
          var n = t.sibling;
          if (null !== n) {
            n.
            return = t.
            return,
            Zl = n;
            break
          }
          Zl = t.
          return
        }
      }
      function ks(e) {
        for (; null !== Zl;) {
          var t = Zl;
          try {
            switch (t.tag) {
            case 0:
            case 11:
            case 15:
              var n = t.
              return;
              try {
                rs(4, t)
              } catch(s) {
                Sc(t, n, s)
              }
              break;
            case 1:
              var r = t.stateNode;
              if ("function" === typeof r.componentDidMount) {
                var a = t.
                return;
                try {
                  r.componentDidMount()
                } catch(s) {
                  Sc(t, a, s)
                }
              }
              var o = t.
              return;
              try {
                as(t)
              } catch(s) {
                Sc(t, o, s)
              }
              break;
            case 5:
              var i = t.
              return;
              try {
                as(t)
              } catch(s) {
                Sc(t, i, s)
              }
            }
          } catch(s) {
            Sc(t, t.
            return, s)
          }
          if (t === e) {
            Zl = null;
            break
          }
          var l = t.sibling;
          if (null !== l) {
            l.
            return = t.
            return,
            Zl = l;
            break
          }
          Zl = t.
          return
        }
      }
      var _s, Ss = Math.ceil,
      Es = x.ReactCurrentDispatcher,
      Cs = x.ReactCurrentOwner,
      As = x.ReactCurrentBatchConfig,
      Ps = 0,
      Ts = null,
      zs = null,
      js = 0,
      Rs = 0,
      Ms = Sa(0),
      Ns = 0,
      Os = null,
      Bs = 0,
      Ls = 0,
      Fs = 0,
      Ds = null,
      Is = null,
      Vs = 0,
      Ws = 1 / 0,
      Us = null,
      Hs = !1,
      $s = null,
      qs = null,
      Gs = !1,
      Ys = null,
      Xs = 0,
      Ks = 0,
      Qs = null,
      Zs = -1,
      Js = 0;
      function ec() {
        return 0 !== (6 & Ps) ? Qe() : -1 !== Zs ? Zs: Zs = Qe()
      }
      function tc(e) {
        return 0 === (1 & e.mode) ? 1 : 0 !== (2 & Ps) && 0 !== js ? js & -js: null !== mo.transition ? (0 === Js && (Js = vt()), Js) : 0 !== (e = bt) ? e: e = void 0 === (e = window.event) ? 16 : Kt(e.type)
      }
      function nc(e, t, n, r) {
        if (50 < Ks) throw Ks = 0,
        Qs = null,
        Error(o(185));
        ht(e, n, r),
        0 !== (2 & Ps) && e === Ts || (e === Ts && (0 === (2 & Ps) && (Ls |= n), 4 === Ns && lc(e, js)), rc(e, r), 1 === n && 0 === Ps && 0 === (1 & t.mode) && (Ws = Qe() + 500, Da && Wa()))
      }
      function rc(e, t) {
        var n = e.callbackNode; !
        function(e, t) {
          for (var n = e.suspendedLanes,
          r = e.pingedLanes,
          a = e.expirationTimes,
          o = e.pendingLanes; 0 < o;) {
            var i = 31 - it(o),
            l = 1 << i,
            s = a[i]; - 1 === s ? 0 !== (l & n) && 0 === (l & r) || (a[i] = pt(l, t)) : s <= t && (e.expiredLanes |= l),
            o &= ~l
          }
        } (e, t);
        var r = ft(e, e === Ts ? js: 0);
        if (0 === r) null !== n && Ye(n),
        e.callbackNode = null,
        e.callbackPriority = 0;
        else if (t = r & -r, e.callbackPriority !== t) {
          if (null != n && Ye(n), 1 === t) 0 === e.tag ?
          function(e) {
            Da = !0,
            Va(e)
          } (sc.bind(null, e)) : Va(sc.bind(null, e)),
          ia((function() {
            0 === (6 & Ps) && Wa()
          })),
          n = null;
          else {
            switch (xt(r)) {
            case 1:
              n = Je;
              break;
            case 4:
              n = et;
              break;
            case 16:
            default:
              n = tt;
              break;
            case 536870912:
              n = rt
            }
            n = Tc(n, ac.bind(null, e))
          }
          e.callbackPriority = t,
          e.callbackNode = n
        }
      }
      function ac(e, t) {
        if (Zs = -1, Js = 0, 0 !== (6 & Ps)) throw Error(o(327));
        var n = e.callbackNode;
        if (kc() && e.callbackNode !== n) return null;
        var r = ft(e, e === Ts ? js: 0);
        if (0 === r) return null;
        if (0 !== (30 & r) || 0 !== (r & e.expiredLanes) || t) t = mc(e, r);
        else {
          t = r;
          var a = Ps;
          Ps |= 2;
          var i = gc();
          for (Ts === e && js === t || (Us = null, Ws = Qe() + 500, fc(e, t));;) try {
            yc();
            break
          } catch(s) {
            pc(e, s)
          }
          ko(),
          Es.current = i,
          Ps = a,
          null !== zs ? t = 0 : (Ts = null, js = 0, t = Ns)
        }
        if (0 !== t) {
          if (2 === t && (0 !== (a = gt(e)) && (r = a, t = oc(e, a))), 1 === t) throw n = Os,
          fc(e, 0),
          lc(e, r),
          rc(e, Qe()),
          n;
          if (6 === t) lc(e, r);
          else {
            if (a = e.current.alternate, 0 === (30 & r) && !
            function(e) {
              for (var t = e;;) {
                if (16384 & t.flags) {
                  var n = t.updateQueue;
                  if (null !== n && null !== (n = n.stores)) for (var r = 0; r < n.length; r++) {
                    var a = n[r],
                    o = a.getSnapshot;
                    a = a.value;
                    try {
                      if (!lr(o(), a)) return ! 1
                    } catch(l) {
                      return ! 1
                    }
                  }
                }
                if (n = t.child, 16384 & t.subtreeFlags && null !== n) n.
                return = t,
                t = n;
                else {
                  if (t === e) break;
                  for (; null === t.sibling;) {
                    if (null === t.
                    return || t.
                    return === e) return ! 0;
                    t = t.
                    return
                  }
                  t.sibling.
                  return = t.
                  return,
                  t = t.sibling
                }
              }
              return ! 0
            } (a) && (2 === (t = mc(e, r)) && (0 !== (i = gt(e)) && (r = i, t = oc(e, i))), 1 === t)) throw n = Os,
            fc(e, 0),
            lc(e, r),
            rc(e, Qe()),
            n;
            switch (e.finishedWork = a, e.finishedLanes = r, t) {
            case 0:
            case 1:
              throw Error(o(345));
            case 2:
            case 5:
              wc(e, Is, Us);
              break;
            case 3:
              if (lc(e, r), (130023424 & r) === r && 10 < (t = Vs + 500 - Qe())) {
                if (0 !== ft(e, 0)) break;
                if (((a = e.suspendedLanes) & r) !== r) {
                  ec(),
                  e.pingedLanes |= e.suspendedLanes & a;
                  break
                }
                e.timeoutHandle = ra(wc.bind(null, e, Is, Us), t);
                break
              }
              wc(e, Is, Us);
              break;
            case 4:
              if (lc(e, r), (4194240 & r) === r) break;
              for (t = e.eventTimes, a = -1; 0 < r;) {
                var l = 31 - it(r);
                i = 1 << l,
                (l = t[l]) > a && (a = l),
                r &= ~i
              }
              if (r = a, 10 < (r = (120 > (r = Qe() - r) ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3: 4320 > r ? 4320 : 1960 * Ss(r / 1960)) - r)) {
                e.timeoutHandle = ra(wc.bind(null, e, Is, Us), r);
                break
              }
              wc(e, Is, Us);
              break;
            default:
              throw Error(o(329))
            }
          }
        }
        return rc(e, Qe()),
        e.callbackNode === n ? ac.bind(null, e) : null
      }
      function oc(e, t) {
        var n = Ds;
        return e.current.memoizedState.isDehydrated && (fc(e, t).flags |= 256),
        2 !== (e = mc(e, t)) && (t = Is, Is = n, null !== t && ic(t)),
        e
      }
      function ic(e) {
        null === Is ? Is = e: Is.push.apply(Is, e)
      }
      function lc(e, t) {
        for (t &= ~Fs, t &= ~Ls, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
          var n = 31 - it(t),
          r = 1 << n;
          e[n] = -1,
          t &= ~r
        }
      }
      function sc(e) {
        if (0 !== (6 & Ps)) throw Error(o(327));
        kc();
        var t = ft(e, 0);
        if (0 === (1 & t)) return rc(e, Qe()),
        null;
        var n = mc(e, t);
        if (0 !== e.tag && 2 === n) {
          var r = gt(e);
          0 !== r && (t = r, n = oc(e, r))
        }
        if (1 === n) throw n = Os,
        fc(e, 0),
        lc(e, t),
        rc(e, Qe()),
        n;
        if (6 === n) throw Error(o(345));
        return e.finishedWork = e.current.alternate,
        e.finishedLanes = t,
        wc(e, Is, Us),
        rc(e, Qe()),
        null
      }
      function cc(e, t) {
        var n = Ps;
        Ps |= 1;
        try {
          return e(t)
        } finally {
          0 === (Ps = n) && (Ws = Qe() + 500, Da && Wa())
        }
      }
      function uc(e) {
        null !== Ys && 0 === Ys.tag && 0 === (6 & Ps) && kc();
        var t = Ps;
        Ps |= 1;
        var n = As.transition,
        r = bt;
        try {
          if (As.transition = null, bt = 1, e) return e()
        } finally {
          bt = r,
          As.transition = n,
          0 === (6 & (Ps = t)) && Wa()
        }
      }
      function dc() {
        Rs = Ms.current,
        Ea(Ms)
      }
      function fc(e, t) {
        e.finishedWork = null,
        e.finishedLanes = 0;
        var n = e.timeoutHandle;
        if ( - 1 !== n && (e.timeoutHandle = -1, aa(n)), null !== zs) for (n = zs.
        return; null !== n;) {
          var r = n;
          switch (to(r), r.tag) {
          case 1:
            null !== (r = r.type.childContextTypes) && void 0 !== r && Ma();
            break;
          case 3:
            oi(),
            Ea(Ta),
            Ea(Pa),
            di();
            break;
          case 5:
            li(r);
            break;
          case 4:
            oi();
            break;
          case 13:
          case 19:
            Ea(si);
            break;
          case 10:
            _o(r.type._context);
            break;
          case 22:
          case 23:
            dc()
          }
          n = n.
          return
        }
        if (Ts = e, zs = e = Mc(e.current, null), js = Rs = t, Ns = 0, Os = null, Fs = Ls = Bs = 0, Is = Ds = null, null !== Ao) {
          for (t = 0; t < Ao.length; t++) if (null !== (r = (n = Ao[t]).interleaved)) {
            n.interleaved = null;
            var a = r.next,
            o = n.pending;
            if (null !== o) {
              var i = o.next;
              o.next = a,
              r.next = i
            }
            n.pending = r
          }
          Ao = null
        }
        return e
      }
      function pc(e, t) {
        for (;;) {
          var n = zs;
          try {
            if (ko(), fi.current = il, yi) {
              for (var r = vi.memoizedState; null !== r;) {
                var a = r.queue;
                null !== a && (a.pending = null),
                r = r.next
              }
              yi = !1
            }
            if (gi = 0, hi = mi = vi = null, bi = !1, xi = 0, Cs.current = null, null === n || null === n.
            return) {
              Ns = 1,
              Os = t,
              zs = null;
              break
            }
            e: {
              var i = e,
              l = n.
              return,
              s = n,
              c = t;
              if (t = js, s.flags |= 32768, null !== c && "object" === typeof c && "function" === typeof c.then) {
                var u = c,
                d = s,
                f = d.tag;
                if (0 === (1 & d.mode) && (0 === f || 11 === f || 15 === f)) {
                  var p = d.alternate;
                  p ? (d.updateQueue = p.updateQueue, d.memoizedState = p.memoizedState, d.lanes = p.lanes) : (d.updateQueue = null, d.memoizedState = null)
                }
                var g = hl(l);
                if (null !== g) {
                  g.flags &= -257,
                  yl(g, l, s, 0, t),
                  1 & g.mode && ml(i, u, t),
                  c = u;
                  var v = (t = g).updateQueue;
                  if (null === v) {
                    var m = new Set;
                    m.add(c),
                    t.updateQueue = m
                  } else v.add(c);
                  break e
                }
                if (0 === (1 & t)) {
                  ml(i, u, t),
                  vc();
                  break e
                }
                c = Error(o(426))
              } else if (ao && 1 & s.mode) {
                var h = hl(l);
                if (null !== h) {
                  0 === (65536 & h.flags) && (h.flags |= 256),
                  yl(h, l, s, 0, t),
                  vo(ul(c, s));
                  break e
                }
              }
              i = c = ul(c, s),
              4 !== Ns && (Ns = 2),
              null === Ds ? Ds = [i] : Ds.push(i),
              i = l;
              do {
                switch (i.tag) {
                case 3:
                  i.flags |= 65536,
                  t &= -t,
                  i.lanes |= t,
                  Lo(i, gl(0, c, t));
                  break e;
                case 1:
                  s = c;
                  var y = i.type,
                  b = i.stateNode;
                  if (0 === (128 & i.flags) && ("function" === typeof y.getDerivedStateFromError || null !== b && "function" === typeof b.componentDidCatch && (null === qs || !qs.has(b)))) {
                    i.flags |= 65536,
                    t &= -t,
                    i.lanes |= t,
                    Lo(i, vl(i, s, t));
                    break e
                  }
                }
                i = i.
                return
              } while ( null !== i )
            }
            xc(n)
          } catch(x) {
            t = x,
            zs === n && null !== n && (zs = n = n.
            return);
            continue
          }
          break
        }
      }
      function gc() {
        var e = Es.current;
        return Es.current = il,
        null === e ? il: e
      }
      function vc() {
        0 !== Ns && 3 !== Ns && 2 !== Ns || (Ns = 4),
        null === Ts || 0 === (268435455 & Bs) && 0 === (268435455 & Ls) || lc(Ts, js)
      }
      function mc(e, t) {
        var n = Ps;
        Ps |= 2;
        var r = gc();
        for (Ts === e && js === t || (Us = null, fc(e, t));;) try {
          hc();
          break
        } catch(a) {
          pc(e, a)
        }
        if (ko(), Ps = n, Es.current = r, null !== zs) throw Error(o(261));
        return Ts = null,
        js = 0,
        Ns
      }
      function hc() {
        for (; null !== zs;) bc(zs)
      }
      function yc() {
        for (; null !== zs && !Xe();) bc(zs)
      }
      function bc(e) {
        var t = _s(e.alternate, e, Rs);
        e.memoizedProps = e.pendingProps,
        null === t ? xc(e) : zs = t,
        Cs.current = null
      }
      function xc(e) {
        var t = e;
        do {
          var n = t.alternate;
          if (e = t.
          return, 0 === (32768 & t.flags)) {
            if (null !== (n = Gl(n, t, Rs))) return void(zs = n)
          } else {
            if (null !== (n = Yl(n, t))) return n.flags &= 32767,
            void(zs = n);
            if (null === e) return Ns = 6,
            void(zs = null);
            e.flags |= 32768,
            e.subtreeFlags = 0,
            e.deletions = null
          }
          if (null !== (t = t.sibling)) return void(zs = t);
          zs = t = e
        } while ( null !== t );
        0 === Ns && (Ns = 5)
      }
      function wc(e, t, n) {
        var r = bt,
        a = As.transition;
        try {
          As.transition = null,
          bt = 1,
          function(e, t, n, r) {
            do {
              kc()
            } while ( null !== Ys );
            if (0 !== (6 & Ps)) throw Error(o(327));
            n = e.finishedWork;
            var a = e.finishedLanes;
            if (null === n) return null;
            if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(o(177));
            e.callbackNode = null,
            e.callbackPriority = 0;
            var i = n.lanes | n.childLanes;
            if (function(e, t) {
              var n = e.pendingLanes & ~t;
              e.pendingLanes = t,
              e.suspendedLanes = 0,
              e.pingedLanes = 0,
              e.expiredLanes &= t,
              e.mutableReadLanes &= t,
              e.entangledLanes &= t,
              t = e.entanglements;
              var r = e.eventTimes;
              for (e = e.expirationTimes; 0 < n;) {
                var a = 31 - it(n),
                o = 1 << a;
                t[a] = 0,
                r[a] = -1,
                e[a] = -1,
                n &= ~o
              }
            } (e, i), e === Ts && (zs = Ts = null, js = 0), 0 === (2064 & n.subtreeFlags) && 0 === (2064 & n.flags) || Gs || (Gs = !0, Tc(tt, (function() {
              return kc(),
              null
            }))), i = 0 !== (15990 & n.flags), 0 !== (15990 & n.subtreeFlags) || i) {
              i = As.transition,
              As.transition = null;
              var l = bt;
              bt = 1;
              var s = Ps;
              Ps |= 4,
              Cs.current = null,
              function(e, t) {
                if (ea = Ht, pr(e = fr())) {
                  if ("selectionStart" in e) var n = {
                    start: e.selectionStart,
                    end: e.selectionEnd
                  };
                  else e: {
                    var r = (n = (n = e.ownerDocument) && n.defaultView || window).getSelection && n.getSelection();
                    if (r && 0 !== r.rangeCount) {
                      n = r.anchorNode;
                      var a = r.anchorOffset,
                      i = r.focusNode;
                      r = r.focusOffset;
                      try {
                        n.nodeType,
                        i.nodeType
                      } catch(w) {
                        n = null;
                        break e
                      }
                      var l = 0,
                      s = -1,
                      c = -1,
                      u = 0,
                      d = 0,
                      f = e,
                      p = null;
                      t: for (;;) {
                        for (var g; f !== n || 0 !== a && 3 !== f.nodeType || (s = l + a), f !== i || 0 !== r && 3 !== f.nodeType || (c = l + r), 3 === f.nodeType && (l += f.nodeValue.length), null !== (g = f.firstChild);) p = f,
                        f = g;
                        for (;;) {
                          if (f === e) break t;
                          if (p === n && ++u === a && (s = l), p === i && ++d === r && (c = l), null !== (g = f.nextSibling)) break;
                          p = (f = p).parentNode
                        }
                        f = g
                      }
                      n = -1 === s || -1 === c ? null: {
                        start: s,
                        end: c
                      }
                    } else n = null
                  }
                  n = n || {
                    start: 0,
                    end: 0
                  }
                } else n = null;
                for (ta = {
                  focusedElem: e,
                  selectionRange: n
                },
                Ht = !1, Zl = t; null !== Zl;) if (e = (t = Zl).child, 0 !== (1028 & t.subtreeFlags) && null !== e) e.
                return = t,
                Zl = e;
                else for (; null !== Zl;) {
                  t = Zl;
                  try {
                    var v = t.alternate;
                    if (0 !== (1024 & t.flags)) switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                    case 5:
                    case 6:
                    case 4:
                    case 17:
                      break;
                    case 1:
                      if (null !== v) {
                        var m = v.memoizedProps,
                        h = v.memoizedState,
                        y = t.stateNode,
                        b = y.getSnapshotBeforeUpdate(t.elementType === t.type ? m: ho(t.type, m), h);
                        y.__reactInternalSnapshotBeforeUpdate = b
                      }
                      break;
                    case 3:
                      var x = t.stateNode.containerInfo;
                      1 === x.nodeType ? x.textContent = "": 9 === x.nodeType && x.documentElement && x.removeChild(x.documentElement);
                      break;
                    default:
                      throw Error(o(163))
                    }
                  } catch(w) {
                    Sc(t, t.
                    return, w)
                  }
                  if (null !== (e = t.sibling)) {
                    e.
                    return = t.
                    return,
                    Zl = e;
                    break
                  }
                  Zl = t.
                  return
                }
                v = ts,
                ts = !1
              } (e, n),
              ms(n, e),
              gr(ta),
              Ht = !!ea,
              ta = ea = null,
              e.current = n,
              ys(n, e, a),
              Ke(),
              Ps = s,
              bt = l,
              As.transition = i
            } else e.current = n;
            if (Gs && (Gs = !1, Ys = e, Xs = a), i = e.pendingLanes, 0 === i && (qs = null),
            function(e) {
              if (ot && "function" === typeof ot.onCommitFiberRoot) try {
                ot.onCommitFiberRoot(at, e, void 0, 128 === (128 & e.current.flags))
              } catch(t) {}
            } (n.stateNode), rc(e, Qe()), null !== t) for (r = e.onRecoverableError, n = 0; n < t.length; n++) r((a = t[n]).value, {
              componentStack: a.stack,
              digest: a.digest
            });
            if (Hs) throw Hs = !1,
            e = $s,
            $s = null,
            e;
            0 !== (1 & Xs) && 0 !== e.tag && kc(),
            i = e.pendingLanes,
            0 !== (1 & i) ? e === Qs ? Ks++:(Ks = 0, Qs = e) : Ks = 0,
            Wa()
          } (e, t, n, r)
        } finally {
          As.transition = a,
          bt = r
        }
        return null
      }
      function kc() {
        if (null !== Ys) {
          var e = xt(Xs),
          t = As.transition,
          n = bt;
          try {
            if (As.transition = null, bt = 16 > e ? 16 : e, null === Ys) var r = !1;
            else {
              if (e = Ys, Ys = null, Xs = 0, 0 !== (6 & Ps)) throw Error(o(331));
              var a = Ps;
              for (Ps |= 4, Zl = e.current; null !== Zl;) {
                var i = Zl,
                l = i.child;
                if (0 !== (16 & Zl.flags)) {
                  var s = i.deletions;
                  if (null !== s) {
                    for (var c = 0; c < s.length; c++) {
                      var u = s[c];
                      for (Zl = u; null !== Zl;) {
                        var d = Zl;
                        switch (d.tag) {
                        case 0:
                        case 11:
                        case 15:
                          ns(8, d, i)
                        }
                        var f = d.child;
                        if (null !== f) f.
                        return = d,
                        Zl = f;
                        else for (; null !== Zl;) {
                          var p = (d = Zl).sibling,
                          g = d.
                          return;
                          if (os(d), d === u) {
                            Zl = null;
                            break
                          }
                          if (null !== p) {
                            p.
                            return = g,
                            Zl = p;
                            break
                          }
                          Zl = g
                        }
                      }
                    }
                    var v = i.alternate;
                    if (null !== v) {
                      var m = v.child;
                      if (null !== m) {
                        v.child = null;
                        do {
                          var h = m.sibling;
                          m.sibling = null, m = h
                        } while ( null !== m )
                      }
                    }
                    Zl = i
                  }
                }
                if (0 !== (2064 & i.subtreeFlags) && null !== l) l.
                return = i,
                Zl = l;
                else e: for (; null !== Zl;) {
                  if (0 !== (2048 & (i = Zl).flags)) switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    ns(9, i, i.
                    return)
                  }
                  var y = i.sibling;
                  if (null !== y) {
                    y.
                    return = i.
                    return,
                    Zl = y;
                    break e
                  }
                  Zl = i.
                  return
                }
              }
              var b = e.current;
              for (Zl = b; null !== Zl;) {
                var x = (l = Zl).child;
                if (0 !== (2064 & l.subtreeFlags) && null !== x) x.
                return = l,
                Zl = x;
                else e: for (l = b; null !== Zl;) {
                  if (0 !== (2048 & (s = Zl).flags)) try {
                    switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      rs(9, s)
                    }
                  } catch(k) {
                    Sc(s, s.
                    return, k)
                  }
                  if (s === l) {
                    Zl = null;
                    break e
                  }
                  var w = s.sibling;
                  if (null !== w) {
                    w.
                    return = s.
                    return,
                    Zl = w;
                    break e
                  }
                  Zl = s.
                  return
                }
              }
              if (Ps = a, Wa(), ot && "function" === typeof ot.onPostCommitFiberRoot) try {
                ot.onPostCommitFiberRoot(at, e)
              } catch(k) {}
              r = !0
            }
            return r
          } finally {
            bt = n,
            As.transition = t
          }
        }
        return ! 1
      }
      function _c(e, t, n) {
        e = Oo(e, t = gl(0, t = ul(n, t), 1), 1),
        t = ec(),
        null !== e && (ht(e, 1, t), rc(e, t))
      }
      function Sc(e, t, n) {
        if (3 === e.tag) _c(e, e, n);
        else for (; null !== t;) {
          if (3 === t.tag) {
            _c(t, e, n);
            break
          }
          if (1 === t.tag) {
            var r = t.stateNode;
            if ("function" === typeof t.type.getDerivedStateFromError || "function" === typeof r.componentDidCatch && (null === qs || !qs.has(r))) {
              t = Oo(t, e = vl(t, e = ul(n, e), 1), 1),
              e = ec(),
              null !== t && (ht(t, 1, e), rc(t, e));
              break
            }
          }
          t = t.
          return
        }
      }
      function Ec(e, t, n) {
        var r = e.pingCache;
        null !== r && r.delete(t),
        t = ec(),
        e.pingedLanes |= e.suspendedLanes & n,
        Ts === e && (js & n) === n && (4 === Ns || 3 === Ns && (130023424 & js) === js && 500 > Qe() - Vs ? fc(e, 0) : Fs |= n),
        rc(e, t)
      }
      function Cc(e, t) {
        0 === t && (0 === (1 & e.mode) ? t = 1 : (t = ut, 0 === (130023424 & (ut <<= 1)) && (ut = 4194304)));
        var n = ec();
        null !== (e = zo(e, t)) && (ht(e, t, n), rc(e, n))
      }
      function Ac(e) {
        var t = e.memoizedState,
        n = 0;
        null !== t && (n = t.retryLane),
        Cc(e, n)
      }
      function Pc(e, t) {
        var n = 0;
        switch (e.tag) {
        case 13:
          var r = e.stateNode,
          a = e.memoizedState;
          null !== a && (n = a.retryLane);
          break;
        case 19:
          r = e.stateNode;
          break;
        default:
          throw Error(o(314))
        }
        null !== r && r.delete(t),
        Cc(e, n)
      }
      function Tc(e, t) {
        return Ge(e, t)
      }
      function zc(e, t, n, r) {
        this.tag = e,
        this.key = n,
        this.sibling = this.child = this.
        return = this.stateNode = this.type = this.elementType = null,
        this.index = 0,
        this.ref = null,
        this.pendingProps = t,
        this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
        this.mode = r,
        this.subtreeFlags = this.flags = 0,
        this.deletions = null,
        this.childLanes = this.lanes = 0,
        this.alternate = null
      }
      function jc(e, t, n, r) {
        return new zc(e, t, n, r)
      }
      function Rc(e) {
        return ! (! (e = e.prototype) || !e.isReactComponent)
      }
      function Mc(e, t) {
        var n = e.alternate;
        return null === n ? ((n = jc(e.tag, t, e.key, e.mode)).elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null),
        n.flags = 14680064 & e.flags,
        n.childLanes = e.childLanes,
        n.lanes = e.lanes,
        n.child = e.child,
        n.memoizedProps = e.memoizedProps,
        n.memoizedState = e.memoizedState,
        n.updateQueue = e.updateQueue,
        t = e.dependencies,
        n.dependencies = null === t ? null: {
          lanes: t.lanes,
          firstContext: t.firstContext
        },
        n.sibling = e.sibling,
        n.index = e.index,
        n.ref = e.ref,
        n
      }
      function Nc(e, t, n, r, a, i) {
        var l = 2;
        if (r = e, "function" === typeof e) Rc(e) && (l = 1);
        else if ("string" === typeof e) l = 5;
        else e: switch (e) {
        case _:
          return Oc(n.children, a, i, t);
        case S:
          l = 8,
          a |= 8;
          break;
        case E:
          return (e = jc(12, n, t, 2 | a)).elementType = E,
          e.lanes = i,
          e;
        case T:
          return (e = jc(13, n, t, a)).elementType = T,
          e.lanes = i,
          e;
        case z:
          return (e = jc(19, n, t, a)).elementType = z,
          e.lanes = i,
          e;
        case M:
          return Bc(n, a, i, t);
        default:
          if ("object" === typeof e && null !== e) switch (e.$$typeof) {
          case C:
            l = 10;
            break e;
          case A:
            l = 9;
            break e;
          case P:
            l = 11;
            break e;
          case j:
            l = 14;
            break e;
          case R:
            l = 16,
            r = null;
            break e
          }
          throw Error(o(130, null == e ? e: typeof e, ""))
        }
        return (t = jc(l, n, t, a)).elementType = e,
        t.type = r,
        t.lanes = i,
        t
      }
      function Oc(e, t, n, r) {
        return (e = jc(7, e, r, t)).lanes = n,
        e
      }
      function Bc(e, t, n, r) {
        return (e = jc(22, e, r, t)).elementType = M,
        e.lanes = n,
        e.stateNode = {
          isHidden: !1
        },
        e
      }
      function Lc(e, t, n) {
        return (e = jc(6, e, null, t)).lanes = n,
        e
      }
      function Fc(e, t, n) {
        return (t = jc(4, null !== e.children ? e.children: [], e.key, t)).lanes = n,
        t.stateNode = {
          containerInfo: e.containerInfo,
          pendingChildren: null,
          implementation: e.implementation
        },
        t
      }
      function Dc(e, t, n, r, a) {
        this.tag = t,
        this.containerInfo = e,
        this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
        this.timeoutHandle = -1,
        this.callbackNode = this.pendingContext = this.context = null,
        this.callbackPriority = 0,
        this.eventTimes = mt(0),
        this.expirationTimes = mt( - 1),
        this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
        this.entanglements = mt(0),
        this.identifierPrefix = r,
        this.onRecoverableError = a,
        this.mutableSourceEagerHydrationData = null
      }
      function Ic(e, t, n, r, a, o, i, l, s) {
        return e = new Dc(e, t, n, l, s),
        1 === t ? (t = 1, !0 === o && (t |= 8)) : t = 0,
        o = jc(3, null, null, t),
        e.current = o,
        o.stateNode = e,
        o.memoizedState = {
          element: r,
          isDehydrated: n,
          cache: null,
          transitions: null,
          pendingSuspenseBoundaries: null
        },
        Ro(o),
        e
      }
      function Vc(e, t, n) {
        var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
        return {
          $$typeof: k,
          key: null == r ? null: "" + r,
          children: e,
          containerInfo: t,
          implementation: n
        }
      }
      function Wc(e) {
        if (!e) return Aa;
        e: {
          if (We(e = e._reactInternals) !== e || 1 !== e.tag) throw Error(o(170));
          var t = e;
          do {
            switch (t.tag) {
            case 3:
              t = t.stateNode.context;
              break e;
            case 1:
              if (Ra(t.type)) {
                t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                break e
              }
            }
            t = t.
            return
          } while ( null !== t );
          throw Error(o(171))
        }
        if (1 === e.tag) {
          var n = e.type;
          if (Ra(n)) return Oa(e, n, t)
        }
        return t
      }
      function Uc(e, t, n, r, a, o, i, l, s) {
        return (e = Ic(n, r, !0, e, 0, o, 0, l, s)).context = Wc(null),
        n = e.current,
        (o = No(r = ec(), a = tc(n))).callback = void 0 !== t && null !== t ? t: null,
        Oo(n, o, a),
        e.current.lanes = a,
        ht(e, a, r),
        rc(e, r),
        e
      }
      function Hc(e, t, n, r) {
        var a = t.current,
        o = ec(),
        i = tc(a);
        return n = Wc(n),
        null === t.context ? t.context = n: t.pendingContext = n,
        (t = No(o, i)).payload = {
          element: e
        },
        null !== (r = void 0 === r ? null: r) && (t.callback = r),
        null !== (e = Oo(a, t, i)) && (nc(e, a, i, o), Bo(e, a, i)),
        i
      }
      function $c(e) {
        return (e = e.current).child ? (e.child.tag, e.child.stateNode) : null
      }
      function qc(e, t) {
        if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
          var n = e.retryLane;
          e.retryLane = 0 !== n && n < t ? n: t
        }
      }
      function Gc(e, t) {
        qc(e, t),
        (e = e.alternate) && qc(e, t)
      }
      _s = function(e, t, n) {
        if (null !== e) if (e.memoizedProps !== t.pendingProps || Ta.current) xl = !0;
        else {
          if (0 === (e.lanes & n) && 0 === (128 & t.flags)) return xl = !1,
          function(e, t, n) {
            switch (t.tag) {
            case 3:
              zl(t),
              go();
              break;
            case 5:
              ii(t);
              break;
            case 1:
              Ra(t.type) && Ba(t);
              break;
            case 4:
              ai(t, t.stateNode.containerInfo);
              break;
            case 10:
              var r = t.type._context,
              a = t.memoizedProps.value;
              Ca(yo, r._currentValue),
              r._currentValue = a;
              break;
            case 13:
              if (null !== (r = t.memoizedState)) return null !== r.dehydrated ? (Ca(si, 1 & si.current), t.flags |= 128, null) : 0 !== (n & t.child.childLanes) ? Ll(e, t, n) : (Ca(si, 1 & si.current), null !== (e = Hl(e, t, n)) ? e.sibling: null);
              Ca(si, 1 & si.current);
              break;
            case 19:
              if (r = 0 !== (n & t.childLanes), 0 !== (128 & e.flags)) {
                if (r) return Wl(e, t, n);
                t.flags |= 128
              }
              if (null !== (a = t.memoizedState) && (a.rendering = null, a.tail = null, a.lastEffect = null), Ca(si, si.current), r) break;
              return null;
            case 22:
            case 23:
              return t.lanes = 0,
              El(e, t, n)
            }
            return Hl(e, t, n)
          } (e, t, n);
          xl = 0 !== (131072 & e.flags)
        } else xl = !1,
        ao && 0 !== (1048576 & t.flags) && Ja(t, qa, t.index);
        switch (t.lanes = 0, t.tag) {
        case 2:
          var r = t.type;
          Ul(e, t),
          e = t.pendingProps;
          var a = ja(t, Pa.current);
          Eo(t, n),
          a = Si(null, t, r, e, a, n);
          var i = Ei();
          return t.flags |= 1,
          "object" === typeof a && null !== a && "function" === typeof a.render && void 0 === a.$$typeof ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ra(r) ? (i = !0, Ba(t)) : i = !1, t.memoizedState = null !== a.state && void 0 !== a.state ? a.state: null, Ro(t), a.updater = Wo, t.stateNode = a, a._reactInternals = t, qo(t, r, e, n), t = Tl(null, t, r, !0, i, n)) : (t.tag = 0, ao && i && eo(t), wl(null, t, a, n), t = t.child),
          t;
        case 16:
          r = t.elementType;
          e: {
            switch (Ul(e, t), e = t.pendingProps, r = (a = r._init)(r._payload), t.type = r, a = t.tag = function(e) {
              if ("function" === typeof e) return Rc(e) ? 1 : 0;
              if (void 0 !== e && null !== e) {
                if ((e = e.$$typeof) === P) return 11;
                if (e === j) return 14
              }
              return 2
            } (r), e = ho(r, e), a) {
            case 0:
              t = Al(null, t, r, e, n);
              break e;
            case 1:
              t = Pl(null, t, r, e, n);
              break e;
            case 11:
              t = kl(null, t, r, e, n);
              break e;
            case 14:
              t = _l(null, t, r, ho(r.type, e), n);
              break e
            }
            throw Error(o(306, r, ""))
          }
          return t;
        case 0:
          return r = t.type,
          a = t.pendingProps,
          Al(e, t, r, a = t.elementType === r ? a: ho(r, a), n);
        case 1:
          return r = t.type,
          a = t.pendingProps,
          Pl(e, t, r, a = t.elementType === r ? a: ho(r, a), n);
        case 3:
          e:
          {
            if (zl(t), null === e) throw Error(o(387));
            r = t.pendingProps,
            a = (i = t.memoizedState).element,
            Mo(e, t),
            Fo(t, r, null, n);
            var l = t.memoizedState;
            if (r = l.element, i.isDehydrated) {
              if (i = {
                element: r,
                isDehydrated: !1,
                cache: l.cache,
                pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
                transitions: l.transitions
              },
              t.updateQueue.baseState = i, t.memoizedState = i, 256 & t.flags) {
                t = jl(e, t, r, n, a = ul(Error(o(423)), t));
                break e
              }
              if (r !== a) {
                t = jl(e, t, r, n, a = ul(Error(o(424)), t));
                break e
              }
              for (ro = ca(t.stateNode.containerInfo.firstChild), no = t, ao = !0, oo = null, n = Zo(t, null, r, n), t.child = n; n;) n.flags = -3 & n.flags | 4096,
              n = n.sibling
            } else {
              if (go(), r === a) {
                t = Hl(e, t, n);
                break e
              }
              wl(e, t, r, n)
            }
            t = t.child
          }
          return t;
        case 5:
          return ii(t),
          null === e && co(t),
          r = t.type,
          a = t.pendingProps,
          i = null !== e ? e.memoizedProps: null,
          l = a.children,
          na(r, a) ? l = null: null !== i && na(r, i) && (t.flags |= 32),
          Cl(e, t),
          wl(e, t, l, n),
          t.child;
        case 6:
          return null === e && co(t),
          null;
        case 13:
          return Ll(e, t, n);
        case 4:
          return ai(t, t.stateNode.containerInfo),
          r = t.pendingProps,
          null === e ? t.child = Qo(t, null, r, n) : wl(e, t, r, n),
          t.child;
        case 11:
          return r = t.type,
          a = t.pendingProps,
          kl(e, t, r, a = t.elementType === r ? a: ho(r, a), n);
        case 7:
          return wl(e, t, t.pendingProps, n),
          t.child;
        case 8:
        case 12:
          return wl(e, t, t.pendingProps.children, n),
          t.child;
        case 10:
          e:
          {
            if (r = t.type._context, a = t.pendingProps, i = t.memoizedProps, l = a.value, Ca(yo, r._currentValue), r._currentValue = l, null !== i) if (lr(i.value, l)) {
              if (i.children === a.children && !Ta.current) {
                t = Hl(e, t, n);
                break e
              }
            } else for (null !== (i = t.child) && (i.
            return = t); null !== i;) {
              var s = i.dependencies;
              if (null !== s) {
                l = i.child;
                for (var c = s.firstContext; null !== c;) {
                  if (c.context === r) {
                    if (1 === i.tag) { (c = No( - 1, n & -n)).tag = 2;
                      var u = i.updateQueue;
                      if (null !== u) {
                        var d = (u = u.shared).pending;
                        null === d ? c.next = c: (c.next = d.next, d.next = c),
                        u.pending = c
                      }
                    }
                    i.lanes |= n,
                    null !== (c = i.alternate) && (c.lanes |= n),
                    So(i.
                    return, n, t),
                    s.lanes |= n;
                    break
                  }
                  c = c.next
                }
              } else if (10 === i.tag) l = i.type === t.type ? null: i.child;
              else if (18 === i.tag) {
                if (null === (l = i.
                return)) throw Error(o(341));
                l.lanes |= n,
                null !== (s = l.alternate) && (s.lanes |= n),
                So(l, n, t),
                l = i.sibling
              } else l = i.child;
              if (null !== l) l.
              return = i;
              else for (l = i; null !== l;) {
                if (l === t) {
                  l = null;
                  break
                }
                if (null !== (i = l.sibling)) {
                  i.
                  return = l.
                  return,
                  l = i;
                  break
                }
                l = l.
                return
              }
              i = l
            }
            wl(e, t, a.children, n),
            t = t.child
          }
          return t;
        case 9:
          return a = t.type,
          r = t.pendingProps.children,
          Eo(t, n),
          r = r(a = Co(a)),
          t.flags |= 1,
          wl(e, t, r, n),
          t.child;
        case 14:
          return a = ho(r = t.type, t.pendingProps),
          _l(e, t, r, a = ho(r.type, a), n);
        case 15:
          return Sl(e, t, t.type, t.pendingProps, n);
        case 17:
          return r = t.type,
          a = t.pendingProps,
          a = t.elementType === r ? a: ho(r, a),
          Ul(e, t),
          t.tag = 1,
          Ra(r) ? (e = !0, Ba(t)) : e = !1,
          Eo(t, n),
          Ho(t, r, a),
          qo(t, r, a, n),
          Tl(null, t, r, !0, e, n);
        case 19:
          return Wl(e, t, n);
        case 22:
          return El(e, t, n)
        }
        throw Error(o(156, t.tag))
      };
      var Yc = "function" === typeof reportError ? reportError: function(e) {
        console.error(e)
      };
      function Xc(e) {
        this._internalRoot = e
      }
      function Kc(e) {
        this._internalRoot = e
      }
      function Qc(e) {
        return ! (!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
      }
      function Zc(e) {
        return ! (!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType && (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue))
      }
      function Jc() {}
      function eu(e, t, n, r, a) {
        var o = n._reactRootContainer;
        if (o) {
          var i = o;
          if ("function" === typeof a) {
            var l = a;
            a = function() {
              var e = $c(i);
              l.call(e)
            }
          }
          Hc(t, i, e, a)
        } else i = function(e, t, n, r, a) {
          if (a) {
            if ("function" === typeof r) {
              var o = r;
              r = function() {
                var e = $c(i);
                o.call(e)
              }
            }
            var i = Uc(t, r, e, 0, null, !1, 0, "", Jc);
            return e._reactRootContainer = i,
            e[ga] = i.current,
            Wr(8 === e.nodeType ? e.parentNode: e),
            uc(),
            i
          }
          for (; a = e.lastChild;) e.removeChild(a);
          if ("function" === typeof r) {
            var l = r;
            r = function() {
              var e = $c(s);
              l.call(e)
            }
          }
          var s = Ic(e, 0, !1, null, 0, !1, 0, "", Jc);
          return e._reactRootContainer = s,
          e[ga] = s.current,
          Wr(8 === e.nodeType ? e.parentNode: e),
          uc((function() {
            Hc(t, s, n, r)
          })),
          s
        } (n, t, e, a, r);
        return $c(i)
      }
      Kc.prototype.render = Xc.prototype.render = function(e) {
        var t = this._internalRoot;
        if (null === t) throw Error(o(409));
        Hc(e, t, null, null)
      },
      Kc.prototype.unmount = Xc.prototype.unmount = function() {
        var e = this._internalRoot;
        if (null !== e) {
          this._internalRoot = null;
          var t = e.containerInfo;
          uc((function() {
            Hc(null, e, null, null)
          })),
          t[ga] = null
        }
      },
      Kc.prototype.unstable_scheduleHydration = function(e) {
        if (e) {
          var t = St();
          e = {
            blockedOn: null,
            target: e,
            priority: t
          };
          for (var n = 0; n < Mt.length && 0 !== t && t < Mt[n].priority; n++);
          Mt.splice(n, 0, e),
          0 === n && Lt(e)
        }
      },
      wt = function(e) {
        switch (e.tag) {
        case 3:
          var t = e.stateNode;
          if (t.current.memoizedState.isDehydrated) {
            var n = dt(t.pendingLanes);
            0 !== n && (yt(t, 1 | n), rc(t, Qe()), 0 === (6 & Ps) && (Ws = Qe() + 500, Wa()))
          }
          break;
        case 13:
          uc((function() {
            var t = zo(e, 1);
            if (null !== t) {
              var n = ec();
              nc(t, e, 1, n)
            }
          })),
          Gc(e, 1)
        }
      },
      kt = function(e) {
        if (13 === e.tag) {
          var t = zo(e, 134217728);
          if (null !== t) nc(t, e, 134217728, ec());
          Gc(e, 134217728)
        }
      },
      _t = function(e) {
        if (13 === e.tag) {
          var t = tc(e),
          n = zo(e, t);
          if (null !== n) nc(n, e, t, ec());
          Gc(e, t)
        }
      },
      St = function() {
        return bt
      },
      Et = function(e, t) {
        var n = bt;
        try {
          return bt = e,
          t()
        } finally {
          bt = n
        }
      },
      ke = function(e, t, n) {
        switch (t) {
        case "input":
          if (Z(e, n), t = n.name, "radio" === n.type && null != t) {
            for (n = e; n.parentNode;) n = n.parentNode;
            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
              var r = n[t];
              if (r !== e && r.form === e.form) {
                var a = wa(r);
                if (!a) throw Error(o(90));
                G(r),
                Z(r, a)
              }
            }
          }
          break;
        case "textarea":
          oe(e, n);
          break;
        case "select":
          null != (t = n.value) && ne(e, !!n.multiple, t, !1)
        }
      },
      Pe = cc,
      Te = uc;
      var tu = {
        usingClientEntryPoint: !1,
        Events: [ba, xa, wa, Ce, Ae, cc]
      },
      nu = {
        findFiberByHostInstance: ya,
        bundleType: 0,
        version: "18.2.0",
        rendererPackageName: "react-dom"
      },
      ru = {
        bundleType: nu.bundleType,
        version: nu.version,
        rendererPackageName: nu.rendererPackageName,
        rendererConfig: nu.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: x.ReactCurrentDispatcher,
        findHostInstanceByFiber: function(e) {
          return null === (e = $e(e)) ? null: e.stateNode
        },
        findFiberByHostInstance: nu.findFiberByHostInstance ||
        function() {
          return null
        },
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.2.0-next-9e3b772b8-20220608"
      };
      if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
        var au = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!au.isDisabled && au.supportsFiber) try {
          at = au.inject(ru),
          ot = au
        } catch(ue) {}
      }
      t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tu,
      t.createPortal = function(e, t) {
        var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
        if (!Qc(t)) throw Error(o(200));
        return Vc(e, t, null, n)
      },
      t.createRoot = function(e, t) {
        if (!Qc(e)) throw Error(o(299));
        var n = !1,
        r = "",
        a = Yc;
        return null !== t && void 0 !== t && (!0 === t.unstable_strictMode && (n = !0), void 0 !== t.identifierPrefix && (r = t.identifierPrefix), void 0 !== t.onRecoverableError && (a = t.onRecoverableError)),
        t = Ic(e, 1, !1, null, 0, n, 0, r, a),
        e[ga] = t.current,
        Wr(8 === e.nodeType ? e.parentNode: e),
        new Xc(t)
      },
      t.findDOMNode = function(e) {
        if (null == e) return null;
        if (1 === e.nodeType) return e;
        var t = e._reactInternals;
        if (void 0 === t) {
          if ("function" === typeof e.render) throw Error(o(188));
          throw e = Object.keys(e).join(","),
          Error(o(268, e))
        }
        return e = null === (e = $e(t)) ? null: e.stateNode
      },
      t.flushSync = function(e) {
        return uc(e)
      },
      t.hydrate = function(e, t, n) {
        if (!Zc(t)) throw Error(o(200));
        return eu(null, e, t, !0, n)
      },
      t.hydrateRoot = function(e, t, n) {
        if (!Qc(e)) throw Error(o(405));
        var r = null != n && n.hydratedSources || null,
        a = !1,
        i = "",
        l = Yc;
        if (null !== n && void 0 !== n && (!0 === n.unstable_strictMode && (a = !0), void 0 !== n.identifierPrefix && (i = n.identifierPrefix), void 0 !== n.onRecoverableError && (l = n.onRecoverableError)), t = Uc(t, null, e, 1, null != n ? n: null, a, 0, i, l), e[ga] = t.current, Wr(e), r) for (e = 0; e < r.length; e++) a = (a = (n = r[e])._getVersion)(n._source),
        null == t.mutableSourceEagerHydrationData ? t.mutableSourceEagerHydrationData = [n, a] : t.mutableSourceEagerHydrationData.push(n, a);
        return new Kc(t)
      },
      t.render = function(e, t, n) {
        if (!Zc(t)) throw Error(o(200));
        return eu(null, e, t, !1, n)
      },
      t.unmountComponentAtNode = function(e) {
        if (!Zc(e)) throw Error(o(40));
        return !! e._reactRootContainer && (uc((function() {
          eu(null, null, e, !1, (function() {
            e._reactRootContainer = null,
            e[ga] = null
          }))
        })), !0)
      },
      t.unstable_batchedUpdates = cc,
      t.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
        if (!Zc(n)) throw Error(o(200));
        if (null == e || void 0 === e._reactInternals) throw Error(o(38));
        return eu(e, t, n, !1, r)
      },
      t.version = "18.2.0-next-9e3b772b8-20220608"
    },
    739 : function(e, t, n) {
      "use strict";
      var r = n(168);
      t.createRoot = r.createRoot,
      t.hydrateRoot = r.hydrateRoot
    },
    168 : function(e, t, n) {
      "use strict"; !
      function e() {
        if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)
        } catch(t) {
          console.error(t)
        }
      } (),
      e.exports = n(534)
    },
    939 : function(e) {
      var t = "undefined" !== typeof Element,
      n = "function" === typeof Map,
      r = "function" === typeof Set,
      a = "function" === typeof ArrayBuffer && !!ArrayBuffer.isView;
      function o(e, i) {
        if (e === i) return ! 0;
        if (e && i && "object" == typeof e && "object" == typeof i) {
          if (e.constructor !== i.constructor) return ! 1;
          var l, s, c, u;
          if (Array.isArray(e)) {
            if ((l = e.length) != i.length) return ! 1;
            for (s = l; 0 !== s--;) if (!o(e[s], i[s])) return ! 1;
            return ! 0
          }
          if (n && e instanceof Map && i instanceof Map) {
            if (e.size !== i.size) return ! 1;
            for (u = e.entries(); ! (s = u.next()).done;) if (!i.has(s.value[0])) return ! 1;
            for (u = e.entries(); ! (s = u.next()).done;) if (!o(s.value[1], i.get(s.value[0]))) return ! 1;
            return ! 0
          }
          if (r && e instanceof Set && i instanceof Set) {
            if (e.size !== i.size) return ! 1;
            for (u = e.entries(); ! (s = u.next()).done;) if (!i.has(s.value[0])) return ! 1;
            return ! 0
          }
          if (a && ArrayBuffer.isView(e) && ArrayBuffer.isView(i)) {
            if ((l = e.length) != i.length) return ! 1;
            for (s = l; 0 !== s--;) if (e[s] !== i[s]) return ! 1;
            return ! 0
          }
          if (e.constructor === RegExp) return e.source === i.source && e.flags === i.flags;
          if (e.valueOf !== Object.prototype.valueOf) return e.valueOf() === i.valueOf();
          if (e.toString !== Object.prototype.toString) return e.toString() === i.toString();
          if ((l = (c = Object.keys(e)).length) !== Object.keys(i).length) return ! 1;
          for (s = l; 0 !== s--;) if (!Object.prototype.hasOwnProperty.call(i, c[s])) return ! 1;
          if (t && e instanceof Element) return ! 1;
          for (s = l; 0 !== s--;) if (("_owner" !== c[s] && "__v" !== c[s] && "__o" !== c[s] || !e.$$typeof) && !o(e[c[s]], i[c[s]])) return ! 1;
          return ! 0
        }
        return e !== e && i !== i
      }
      e.exports = function(e, t) {
        try {
          return o(e, t)
        } catch(n) {
          if ((n.message || "").match(/stack|recursion/i)) return console.warn("react-fast-compare cannot handle circular refs"),
          !1;
          throw n
        }
      }
    },
    624 : function(e, t) {
      "use strict";
      var n = "function" === typeof Symbol && Symbol.
      for,
      r = n ? Symbol.
      for ("react.element") : 60103,
      a = n ? Symbol.
      for ("react.portal") : 60106,
      o = n ? Symbol.
      for ("react.fragment") : 60107,
      i = n ? Symbol.
      for ("react.strict_mode") : 60108,
      l = n ? Symbol.
      for ("react.profiler") : 60114,
      s = n ? Symbol.
      for ("react.provider") : 60109,
      c = n ? Symbol.
      for ("react.context") : 60110,
      u = n ? Symbol.
      for ("react.async_mode") : 60111,
      d = n ? Symbol.
      for ("react.concurrent_mode") : 60111,
      f = n ? Symbol.
      for ("react.forward_ref") : 60112,
      p = n ? Symbol.
      for ("react.suspense") : 60113,
      g = n ? Symbol.
      for ("react.suspense_list") : 60120,
      v = n ? Symbol.
      for ("react.memo") : 60115,
      m = n ? Symbol.
      for ("react.lazy") : 60116,
      h = n ? Symbol.
      for ("react.block") : 60121,
      y = n ? Symbol.
      for ("react.fundamental") : 60117,
      b = n ? Symbol.
      for ("react.responder") : 60118,
      x = n ? Symbol.
      for ("react.scope") : 60119;
      function w(e) {
        if ("object" === typeof e && null !== e) {
          var t = e.$$typeof;
          switch (t) {
          case r:
            switch (e = e.type) {
            case u:
            case d:
            case o:
            case l:
            case i:
            case p:
              return e;
            default:
              switch (e = e && e.$$typeof) {
              case c:
              case f:
              case m:
              case v:
              case s:
                return e;
              default:
                return t
              }
            }
          case a:
            return t
          }
        }
      }
      function k(e) {
        return w(e) === d
      }
      t.AsyncMode = u,
      t.ConcurrentMode = d,
      t.ContextConsumer = c,
      t.ContextProvider = s,
      t.Element = r,
      t.ForwardRef = f,
      t.Fragment = o,
      t.Lazy = m,
      t.Memo = v,
      t.Portal = a,
      t.Profiler = l,
      t.StrictMode = i,
      t.Suspense = p,
      t.isAsyncMode = function(e) {
        return k(e) || w(e) === u
      },
      t.isConcurrentMode = k,
      t.isContextConsumer = function(e) {
        return w(e) === c
      },
      t.isContextProvider = function(e) {
        return w(e) === s
      },
      t.isElement = function(e) {
        return "object" === typeof e && null !== e && e.$$typeof === r
      },
      t.isForwardRef = function(e) {
        return w(e) === f
      },
      t.isFragment = function(e) {
        return w(e) === o
      },
      t.isLazy = function(e) {
        return w(e) === m
      },
      t.isMemo = function(e) {
        return w(e) === v
      },
      t.isPortal = function(e) {
        return w(e) === a
      },
      t.isProfiler = function(e) {
        return w(e) === l
      },
      t.isStrictMode = function(e) {
        return w(e) === i
      },
      t.isSuspense = function(e) {
        return w(e) === p
      },
      t.isValidElementType = function(e) {
        return "string" === typeof e || "function" === typeof e || e === o || e === d || e === l || e === i || e === p || e === g || "object" === typeof e && null !== e && (e.$$typeof === m || e.$$typeof === v || e.$$typeof === s || e.$$typeof === c || e.$$typeof === f || e.$$typeof === y || e.$$typeof === b || e.$$typeof === x || e.$$typeof === h)
      },
      t.typeOf = w
    },
    214 : function(e, t, n) {
      "use strict";
      e.exports = n(624)
    },
    918 : function(e, t, n) {
      "use strict";
      var r = n(313),
      a = Symbol.
      for ("react.element"),
      o = Symbol.
      for ("react.fragment"),
      i = Object.prototype.hasOwnProperty,
      l = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
      s = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      };
      function c(e, t, n) {
        var r, o = {},
        c = null,
        u = null;
        for (r in void 0 !== n && (c = "" + n), void 0 !== t.key && (c = "" + t.key), void 0 !== t.ref && (u = t.ref), t) i.call(t, r) && !s.hasOwnProperty(r) && (o[r] = t[r]);
        if (e && e.defaultProps) for (r in t = e.defaultProps) void 0 === o[r] && (o[r] = t[r]);
        return {
          $$typeof: a,
          type: e,
          key: c,
          ref: u,
          props: o,
          _owner: l.current
        }
      }
      t.Fragment = o,
      t.jsx = c,
      t.jsxs = c
    },
    306 : function(e, t) {
      "use strict";
      var n = Symbol.
      for ("react.element"),
      r = Symbol.
      for ("react.portal"),
      a = Symbol.
      for ("react.fragment"),
      o = Symbol.
      for ("react.strict_mode"),
      i = Symbol.
      for ("react.profiler"),
      l = Symbol.
      for ("react.provider"),
      s = Symbol.
      for ("react.context"),
      c = Symbol.
      for ("react.forward_ref"),
      u = Symbol.
      for ("react.suspense"),
      d = Symbol.
      for ("react.memo"),
      f = Symbol.
      for ("react.lazy"),
      p = Symbol.iterator;
      var g = {
        isMounted: function() {
          return ! 1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
      },
      v = Object.assign,
      m = {};
      function h(e, t, n) {
        this.props = e,
        this.context = t,
        this.refs = m,
        this.updater = n || g
      }
      function y() {}
      function b(e, t, n) {
        this.props = e,
        this.context = t,
        this.refs = m,
        this.updater = n || g
      }
      h.prototype.isReactComponent = {},
      h.prototype.setState = function(e, t) {
        if ("object" !== typeof e && "function" !== typeof e && null != e) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, e, t, "setState")
      },
      h.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate")
      },
      y.prototype = h.prototype;
      var x = b.prototype = new y;
      x.constructor = b,
      v(x, h.prototype),
      x.isPureReactComponent = !0;
      var w = Array.isArray,
      k = Object.prototype.hasOwnProperty,
      _ = {
        current: null
      },
      S = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      };
      function E(e, t, r) {
        var a, o = {},
        i = null,
        l = null;
        if (null != t) for (a in void 0 !== t.ref && (l = t.ref), void 0 !== t.key && (i = "" + t.key), t) k.call(t, a) && !S.hasOwnProperty(a) && (o[a] = t[a]);
        var s = arguments.length - 2;
        if (1 === s) o.children = r;
        else if (1 < s) {
          for (var c = Array(s), u = 0; u < s; u++) c[u] = arguments[u + 2];
          o.children = c
        }
        if (e && e.defaultProps) for (a in s = e.defaultProps) void 0 === o[a] && (o[a] = s[a]);
        return {
          $$typeof: n,
          type: e,
          key: i,
          ref: l,
          props: o,
          _owner: _.current
        }
      }
      function C(e) {
        return "object" === typeof e && null !== e && e.$$typeof === n
      }
      var A = /\/+/g;
      function P(e, t) {
        return "object" === typeof e && null !== e && null != e.key ?
        function(e) {
          var t = {
            "=": "=0",
            ":": "=2"
          };
          return "$" + e.replace(/[=:]/g, (function(e) {
            return t[e]
          }))
        } ("" + e.key) : t.toString(36)
      }
      function T(e, t, a, o, i) {
        var l = typeof e;
        "undefined" !== l && "boolean" !== l || (e = null);
        var s = !1;
        if (null === e) s = !0;
        else switch (l) {
        case "string":
        case "number":
          s = !0;
          break;
        case "object":
          switch (e.$$typeof) {
          case n:
          case r:
            s = !0
          }
        }
        if (s) return i = i(s = e),
        e = "" === o ? "." + P(s, 0) : o,
        w(i) ? (a = "", null != e && (a = e.replace(A, "$&/") + "/"), T(i, t, a, "", (function(e) {
          return e
        }))) : null != i && (C(i) && (i = function(e, t) {
          return {
            $$typeof: n,
            type: e.type,
            key: t,
            ref: e.ref,
            props: e.props,
            _owner: e._owner
          }
        } (i, a + (!i.key || s && s.key === i.key ? "": ("" + i.key).replace(A, "$&/") + "/") + e)), t.push(i)),
        1;
        if (s = 0, o = "" === o ? ".": o + ":", w(e)) for (var c = 0; c < e.length; c++) {
          var u = o + P(l = e[c], c);
          s += T(l, t, a, u, i)
        } else if (u = function(e) {
          return null === e || "object" !== typeof e ? null: "function" === typeof(e = p && e[p] || e["@@iterator"]) ? e: null
        } (e), "function" === typeof u) for (e = u.call(e), c = 0; ! (l = e.next()).done;) s += T(l = l.value, t, a, u = o + P(l, c++), i);
        else if ("object" === l) throw t = String(e),
        Error("Objects are not valid as a React child (found: " + ("[object Object]" === t ? "object with keys {" + Object.keys(e).join(", ") + "}": t) + "). If you meant to render a collection of children, use an array instead.");
        return s
      }
      function z(e, t, n) {
        if (null == e) return e;
        var r = [],
        a = 0;
        return T(e, r, "", "", (function(e) {
          return t.call(n, e, a++)
        })),
        r
      }
      function j(e) {
        if ( - 1 === e._status) {
          var t = e._result; (t = t()).then((function(t) {
            0 !== e._status && -1 !== e._status || (e._status = 1, e._result = t)
          }), (function(t) {
            0 !== e._status && -1 !== e._status || (e._status = 2, e._result = t)
          })),
          -1 === e._status && (e._status = 0, e._result = t)
        }
        if (1 === e._status) return e._result.
      default;
        throw e._result
      }
      var R = {
        current: null
      },
      M = {
        transition: null
      },
      N = {
        ReactCurrentDispatcher: R,
        ReactCurrentBatchConfig: M,
        ReactCurrentOwner: _
      };
      t.Children = {
        map: z,
        forEach: function(e, t, n) {
          z(e, (function() {
            t.apply(this, arguments)
          }), n)
        },
        count: function(e) {
          var t = 0;
          return z(e, (function() {
            t++
          })),
          t
        },
        toArray: function(e) {
          return z(e, (function(e) {
            return e
          })) || []
        },
        only: function(e) {
          if (!C(e)) throw Error("React.Children.only expected to receive a single React element child.");
          return e
        }
      },
      t.Component = h,
      t.Fragment = a,
      t.Profiler = i,
      t.PureComponent = b,
      t.StrictMode = o,
      t.Suspense = u,
      t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = N,
      t.cloneElement = function(e, t, r) {
        if (null === e || void 0 === e) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
        var a = v({},
        e.props),
        o = e.key,
        i = e.ref,
        l = e._owner;
        if (null != t) {
          if (void 0 !== t.ref && (i = t.ref, l = _.current), void 0 !== t.key && (o = "" + t.key), e.type && e.type.defaultProps) var s = e.type.defaultProps;
          for (c in t) k.call(t, c) && !S.hasOwnProperty(c) && (a[c] = void 0 === t[c] && void 0 !== s ? s[c] : t[c])
        }
        var c = arguments.length - 2;
        if (1 === c) a.children = r;
        else if (1 < c) {
          s = Array(c);
          for (var u = 0; u < c; u++) s[u] = arguments[u + 2];
          a.children = s
        }
        return {
          $$typeof: n,
          type: e.type,
          key: o,
          ref: i,
          props: a,
          _owner: l
        }
      },
      t.createContext = function(e) {
        return (e = {
          $$typeof: s,
          _currentValue: e,
          _currentValue2: e,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null
        }).Provider = {
          $$typeof: l,
          _context: e
        },
        e.Consumer = e
      },
      t.createElement = E,
      t.createFactory = function(e) {
        var t = E.bind(null, e);
        return t.type = e,
        t
      },
      t.createRef = function() {
        return {
          current: null
        }
      },
      t.forwardRef = function(e) {
        return {
          $$typeof: c,
          render: e
        }
      },
      t.isValidElement = C,
      t.lazy = function(e) {
        return {
          $$typeof: f,
          _payload: {
            _status: -1,
            _result: e
          },
          _init: j
        }
      },
      t.memo = function(e, t) {
        return {
          $$typeof: d,
          type: e,
          compare: void 0 === t ? null: t
        }
      },
      t.startTransition = function(e) {
        var t = M.transition;
        M.transition = {};
        try {
          e()
        } finally {
          M.transition = t
        }
      },
      t.unstable_act = function() {
        throw Error("act(...) is not supported in production builds of React.")
      },
      t.useCallback = function(e, t) {
        return R.current.useCallback(e, t)
      },
      t.useContext = function(e) {
        return R.current.useContext(e)
      },
      t.useDebugValue = function() {},
      t.useDeferredValue = function(e) {
        return R.current.useDeferredValue(e)
      },
      t.useEffect = function(e, t) {
        return R.current.useEffect(e, t)
      },
      t.useId = function() {
        return R.current.useId()
      },
      t.useImperativeHandle = function(e, t, n) {
        return R.current.useImperativeHandle(e, t, n)
      },
      t.useInsertionEffect = function(e, t) {
        return R.current.useInsertionEffect(e, t)
      },
      t.useLayoutEffect = function(e, t) {
        return R.current.useLayoutEffect(e, t)
      },
      t.useMemo = function(e, t) {
        return R.current.useMemo(e, t)
      },
      t.useReducer = function(e, t, n) {
        return R.current.useReducer(e, t, n)
      },
      t.useRef = function(e) {
        return R.current.useRef(e)
      },
      t.useState = function(e) {
        return R.current.useState(e)
      },
      t.useSyncExternalStore = function(e, t, n) {
        return R.current.useSyncExternalStore(e, t, n)
      },
      t.useTransition = function() {
        return R.current.useTransition()
      },
      t.version = "18.2.0"
    },
    313 : function(e, t, n) {
      "use strict";
      e.exports = n(306)
    },
    417 : function(e, t, n) {
      "use strict";
      e.exports = n(918)
    },
    95 : function(e, t) {
      "use strict";
      function n(e, t) {
        var n = e.length;
        e.push(t);
        e: for (; 0 < n;) {
          var r = n - 1 >>> 1,
          a = e[r];
          if (! (0 < o(a, t))) break e;
          e[r] = t,
          e[n] = a,
          n = r
        }
      }
      function r(e) {
        return 0 === e.length ? null: e[0]
      }
      function a(e) {
        if (0 === e.length) return null;
        var t = e[0],
        n = e.pop();
        if (n !== t) {
          e[0] = n;
          e: for (var r = 0,
          a = e.length,
          i = a >>> 1; r < i;) {
            var l = 2 * (r + 1) - 1,
            s = e[l],
            c = l + 1,
            u = e[c];
            if (0 > o(s, n)) c < a && 0 > o(u, s) ? (e[r] = u, e[c] = n, r = c) : (e[r] = s, e[l] = n, r = l);
            else {
              if (! (c < a && 0 > o(u, n))) break e;
              e[r] = u,
              e[c] = n,
              r = c
            }
          }
        }
        return t
      }
      function o(e, t) {
        var n = e.sortIndex - t.sortIndex;
        return 0 !== n ? n: e.id - t.id
      }
      if ("object" === typeof performance && "function" === typeof performance.now) {
        var i = performance;
        t.unstable_now = function() {
          return i.now()
        }
      } else {
        var l = Date,
        s = l.now();
        t.unstable_now = function() {
          return l.now() - s
        }
      }
      var c = [],
      u = [],
      d = 1,
      f = null,
      p = 3,
      g = !1,
      v = !1,
      m = !1,
      h = "function" === typeof setTimeout ? setTimeout: null,
      y = "function" === typeof clearTimeout ? clearTimeout: null,
      b = "undefined" !== typeof setImmediate ? setImmediate: null;
      function x(e) {
        for (var t = r(u); null !== t;) {
          if (null === t.callback) a(u);
          else {
            if (! (t.startTime <= e)) break;
            a(u),
            t.sortIndex = t.expirationTime,
            n(c, t)
          }
          t = r(u)
        }
      }
      function w(e) {
        if (m = !1, x(e), !v) if (null !== r(c)) v = !0,
        M(k);
        else {
          var t = r(u);
          null !== t && N(w, t.startTime - e)
        }
      }
      function k(e, n) {
        v = !1,
        m && (m = !1, y(C), C = -1),
        g = !0;
        var o = p;
        try {
          for (x(n), f = r(c); null !== f && (!(f.expirationTime > n) || e && !T());) {
            var i = f.callback;
            if ("function" === typeof i) {
              f.callback = null,
              p = f.priorityLevel;
              var l = i(f.expirationTime <= n);
              n = t.unstable_now(),
              "function" === typeof l ? f.callback = l: f === r(c) && a(c),
              x(n)
            } else a(c);
            f = r(c)
          }
          if (null !== f) var s = !0;
          else {
            var d = r(u);
            null !== d && N(w, d.startTime - n),
            s = !1
          }
          return s
        } finally {
          f = null,
          p = o,
          g = !1
        }
      }
      "undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      var _, S = !1,
      E = null,
      C = -1,
      A = 5,
      P = -1;
      function T() {
        return ! (t.unstable_now() - P < A)
      }
      function z() {
        if (null !== E) {
          var e = t.unstable_now();
          P = e;
          var n = !0;
          try {
            n = E(!0, e)
          } finally {
            n ? _() : (S = !1, E = null)
          }
        } else S = !1
      }
      if ("function" === typeof b) _ = function() {
        b(z)
      };
      else if ("undefined" !== typeof MessageChannel) {
        var j = new MessageChannel,
        R = j.port2;
        j.port1.onmessage = z,
        _ = function() {
          R.postMessage(null)
        }
      } else _ = function() {
        h(z, 0)
      };
      function M(e) {
        E = e,
        S || (S = !0, _())
      }
      function N(e, n) {
        C = h((function() {
          e(t.unstable_now())
        }), n)
      }
      t.unstable_IdlePriority = 5,
      t.unstable_ImmediatePriority = 1,
      t.unstable_LowPriority = 4,
      t.unstable_NormalPriority = 3,
      t.unstable_Profiling = null,
      t.unstable_UserBlockingPriority = 2,
      t.unstable_cancelCallback = function(e) {
        e.callback = null
      },
      t.unstable_continueExecution = function() {
        v || g || (v = !0, M(k))
      },
      t.unstable_forceFrameRate = function(e) {
        0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : A = 0 < e ? Math.floor(1e3 / e) : 5
      },
      t.unstable_getCurrentPriorityLevel = function() {
        return p
      },
      t.unstable_getFirstCallbackNode = function() {
        return r(c)
      },
      t.unstable_next = function(e) {
        switch (p) {
        case 1:
        case 2:
        case 3:
          var t = 3;
          break;
        default:
          t = p
        }
        var n = p;
        p = t;
        try {
          return e()
        } finally {
          p = n
        }
      },
      t.unstable_pauseExecution = function() {},
      t.unstable_requestPaint = function() {},
      t.unstable_runWithPriority = function(e, t) {
        switch (e) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          e = 3
        }
        var n = p;
        p = e;
        try {
          return t()
        } finally {
          p = n
        }
      },
      t.unstable_scheduleCallback = function(e, a, o) {
        var i = t.unstable_now();
        switch ("object" === typeof o && null !== o ? o = "number" === typeof(o = o.delay) && 0 < o ? i + o: i: o = i, e) {
        case 1:
          var l = -1;
          break;
        case 2:
          l = 250;
          break;
        case 5:
          l = 1073741823;
          break;
        case 4:
          l = 1e4;
          break;
        default:
          l = 5e3
        }
        return e = {
          id: d++,
          callback: a,
          priorityLevel: e,
          startTime: o,
          expirationTime: l = o + l,
          sortIndex: -1
        },
        o > i ? (e.sortIndex = o, n(u, e), null === r(c) && e === r(u) && (m ? (y(C), C = -1) : m = !0, N(w, o - i))) : (e.sortIndex = l, n(c, e), v || g || (v = !0, M(k))),
        e
      },
      t.unstable_shouldYield = T,
      t.unstable_wrapCallback = function(e) {
        var t = p;
        return function() {
          var n = p;
          p = t;
          try {
            return e.apply(this, arguments)
          } finally {
            p = n
          }
        }
      }
    },
    224 : function(e, t, n) {
      "use strict";
      e.exports = n(95)
    }
  },
  t = {};
  function n(r) {
    var a = t[r];
    if (void 0 !== a) return a.exports;
    var o = t[r] = {
      id: r,
      loaded: !1,
      exports: {}
    };
    return e[r](o, o.exports, n),
    o.loaded = !0,
    o.exports
  }
  n.m = e,
  n.n = function(e) {
    var t = e && e.__esModule ?
    function() {
      return e.
    default
    }:
    function() {
      return e
    };
    return n.d(t, {
      a: t
    }),
    t
  },
  function() {
    var e, t = Object.getPrototypeOf ?
    function(e) {
      return Object.getPrototypeOf(e)
    }: function(e) {
      return e.__proto__
    };
    n.t = function(r, a) {
      if (1 & a && (r = this(r)), 8 & a) return r;
      if ("object" === typeof r && r) {
        if (4 & a && r.__esModule) return r;
        if (16 & a && "function" === typeof r.then) return r
      }
      var o = Object.create(null);
      n.r(o);
      var i = {};
      e = e || [null, t({}), t([]), t(t)];
      for (var l = 2 & a && r;
      "object" == typeof l && !~e.indexOf(l); l = t(l)) Object.getOwnPropertyNames(l).forEach((function(e) {
        i[e] = function() {
          return r[e]
        }
      }));
      return i.
    default = function() {
        return r
      },
      n.d(o, i),
      o
    }
  } (),
  n.d = function(e, t) {
    for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, {
      enumerable: !0,
      get: t[r]
    })
  },
  n.f = {},
  n.e = function(e) {
    return Promise.all(Object.keys(n.f).reduce((function(t, r) {
      return n.f[r](e, t),
      t
    }), []))
  },
  n.u = function(e) {
    return "static/js/chunk.js"
  },
  n.miniCssF = function(e) {},
  n.g = function() {
    if ("object" === typeof globalThis) return globalThis;
    try {
      return this || new Function("return this")()
    } catch(e) {
      if ("object" === typeof window) return window
    }
  } (),
  n.o = function(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
  },
  function() {
    var e = {},
    t = "server-status-radmin:";
    n.l = function(r, a, o, i) {
      if (e[r]) e[r].push(a);
      else {
        var l, s;
        if (void 0 !== o) for (var c = document.getElementsByTagName("script"), u = 0; u < c.length; u++) {
          var d = c[u];
          if (d.getAttribute("src") == r || d.getAttribute("data-webpack") == t + o) {
            l = d;
            break
          }
        }
        l || (s = !0, (l = document.createElement("script")).charset = "utf-8", l.timeout = 120, n.nc && l.setAttribute("nonce", n.nc), l.setAttribute("data-webpack", t + o), l.src = r),
        e[r] = [a];
        var f = function(t, n) {
          l.onerror = l.onload = null,
          clearTimeout(p);
          var a = e[r];
          if (delete e[r], l.parentNode && l.parentNode.removeChild(l), a && a.forEach((function(e) {
            return e(n)
          })), t) return t(n)
        },
        p = setTimeout(f.bind(null, void 0, {
          type: "timeout",
          target: l
        }), 12e4);
        l.onerror = f.bind(null, l.onerror),
        l.onload = f.bind(null, l.onload),
        s && document.head.appendChild(l)
      }
    }
  } (),
  n.r = function(e) {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }),
    Object.defineProperty(e, "__esModule", {
      value: !0
    })
  },
  n.nmd = function(e) {
    return e.paths = [],
    e.children || (e.children = []),
    e
  },
  n.p = "/",
  function() {
    var e = {
      179 : 0
    };
    n.f.j = function(t, r) {
      var a = n.o(e, t) ? e[t] : void 0;
      if (0 !== a) if (a) r.push(a[2]);
      else {
        var o = new Promise((function(n, r) {
          a = e[t] = [n, r]
        }));
        r.push(a[2] = o);
        var i = n.p + n.u(t),
        l = new Error;
        n.l(i, (function(r) {
          if (n.o(e, t) && (0 !== (a = e[t]) && (e[t] = void 0), a)) {
            var o = r && ("load" === r.type ? "missing": r.type),
            i = r && r.target && r.target.src;
            l.message = "Loading chunk " + t + " failed.\n(" + o + ": " + i + ")",
            l.name = "ChunkLoadError",
            l.type = o,
            l.request = i,
            a[1](l)
          }
        }), "chunk-" + t, t)
      }
    };
    var t = function(t, r) {
      var a, o, i = r[0],
      l = r[1],
      s = r[2],
      c = 0;
      if (i.some((function(t) {
        return 0 !== e[t]
      }))) {
        for (a in l) n.o(l, a) && (n.m[a] = l[a]);
        if (s) s(n)
      }
      for (t && t(r); c < i.length; c++) o = i[c],
      n.o(e, o) && e[o] && e[o][0](),
      e[o] = 0
    },
    r = self.webpackChunkserver_status_radmin = self.webpackChunkserver_status_radmin || [];
    r.forEach(t.bind(null, 0)),
    r.push = t.bind(null, r.push.bind(r))
  } (),
  function() {
    "use strict";
    var e = n(313),
    t = n.t(e, 2),
    r = n(739),
    a = function(e) {
      e && e instanceof Function && n.e(27).then(n.bind(n, 27)).then((function(t) {
        var n = t.getCLS,
        r = t.getFID,
        a = t.getFCP,
        o = t.getLCP,
        i = t.getTTFB;
        n(e),
        r(e),
        a(e),
        o(e),
        i(e)
      }))
    };
    function o(e) {
      return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
      function(e) {
        return typeof e
      }: function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
      },
      o(e)
    }
    function i(e) {
      var t = function(e, t) {
        if ("object" !== o(e) || null === e) return e;
        var n = e[Symbol.toPrimitive];
        if (void 0 !== n) {
          var r = n.call(e, t || "default");
          if ("object" !== o(r)) return r;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === t ? String: Number)(e)
      } (e, "string");
      return "symbol" === o(t) ? t: String(t)
    }
    function l(e, t, n) {
      return (t = i(t)) in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n,
      e
    }
    function s(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter((function(t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable
        }))),
        n.push.apply(n, r)
      }
      return n
    }
    function c(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? s(Object(n), !0).forEach((function(t) {
          l(e, t, n[t])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach((function(t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
        }))
      }
      return e
    }
    function u(e, t) {
      if (null == e) return {};
      var n, r, a = function(e, t) {
        if (null == e) return {};
        var n, r, a = {},
        o = Object.keys(e);
        for (r = 0; r < o.length; r++) n = o[r],
        t.indexOf(n) >= 0 || (a[n] = e[n]);
        return a
      } (e, t);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) n = o[r],
        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
      }
      return a
    }
    var d = function() {
      function e(e) {
        var t = this;
        this._insertTag = function(e) {
          var n;
          n = 0 === t.tags.length ? t.insertionPoint ? t.insertionPoint.nextSibling: t.prepend ? t.container.firstChild: t.before: t.tags[t.tags.length - 1].nextSibling,
          t.container.insertBefore(e, n),
          t.tags.push(e)
        },
        this.isSpeedy = void 0 === e.speedy || e.speedy,
        this.tags = [],
        this.ctr = 0,
        this.nonce = e.nonce,
        this.key = e.key,
        this.container = e.container,
        this.prepend = e.prepend,
        this.insertionPoint = e.insertionPoint,
        this.before = null
      }
      var t = e.prototype;
      return t.hydrate = function(e) {
        e.forEach(this._insertTag)
      },
      t.insert = function(e) {
        this.ctr % (this.isSpeedy ? 65e3: 1) === 0 && this._insertTag(function(e) {
          var t = document.createElement("style");
          return t.setAttribute("data-emotion", e.key),
          void 0 !== e.nonce && t.setAttribute("nonce", e.nonce),
          t.appendChild(document.createTextNode("")),
          t.setAttribute("data-s", ""),
          t
        } (this));
        var t = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var n = function(e) {
            if (e.sheet) return e.sheet;
            for (var t = 0; t < document.styleSheets.length; t++) if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t]
          } (t);
          try {
            n.insertRule(e, n.cssRules.length)
          } catch(r) {
            0
          }
        } else t.appendChild(document.createTextNode(e));
        this.ctr++
      },
      t.flush = function() {
        this.tags.forEach((function(e) {
          return e.parentNode && e.parentNode.removeChild(e)
        })),
        this.tags = [],
        this.ctr = 0
      },
      e
    } (),
    f = Math.abs,
    p = String.fromCharCode,
    g = Object.assign;
    function v(e) {
      return e.trim()
    }
    function m(e, t, n) {
      return e.replace(t, n)
    }
    function h(e, t) {
      return e.indexOf(t)
    }
    function y(e, t) {
      return 0 | e.charCodeAt(t)
    }
    function b(e, t, n) {
      return e.slice(t, n)
    }
    function x(e) {
      return e.length
    }
    function w(e) {
      return e.length
    }
    function k(e, t) {
      return t.push(e),
      e
    }
    var _ = 1,
    S = 1,
    E = 0,
    C = 0,
    A = 0,
    P = "";
    function T(e, t, n, r, a, o, i) {
      return {
        value: e,
        root: t,
        parent: n,
        type: r,
        props: a,
        children: o,
        line: _,
        column: S,
        length: i,
        return: ""
      }
    }
    function z(e, t) {
      return g(T("", null, null, "", null, null, 0), e, {
        length: -e.length
      },
      t)
    }
    function j() {
      return A = C > 0 ? y(P, --C) : 0,
      S--,
      10 === A && (S = 1, _--),
      A
    }
    function R() {
      return A = C < E ? y(P, C++) : 0,
      S++,
      10 === A && (S = 1, _++),
      A
    }
    function M() {
      return y(P, C)
    }
    function N() {
      return C
    }
    function O(e, t) {
      return b(P, e, t)
    }
    function B(e) {
      switch (e) {
      case 0:
      case 9:
      case 10:
      case 13:
      case 32:
        return 5;
      case 33:
      case 43:
      case 44:
      case 47:
      case 62:
      case 64:
      case 126:
      case 59:
      case 123:
      case 125:
        return 4;
      case 58:
        return 3;
      case 34:
      case 39:
      case 40:
      case 91:
        return 2;
      case 41:
      case 93:
        return 1
      }
      return 0
    }
    function L(e) {
      return _ = S = 1,
      E = x(P = e),
      C = 0,
      []
    }
    function F(e) {
      return P = "",
      e
    }
    function D(e) {
      return v(O(C - 1, W(91 === e ? e + 2 : 40 === e ? e + 1 : e)))
    }
    function I(e) {
      for (; (A = M()) && A < 33;) R();
      return B(e) > 2 || B(A) > 3 ? "": " "
    }
    function V(e, t) {
      for (; --t && R() && !(A < 48 || A > 102 || A > 57 && A < 65 || A > 70 && A < 97););
      return O(e, N() + (t < 6 && 32 == M() && 32 == R()))
    }
    function W(e) {
      for (; R();) switch (A) {
      case e:
        return C;
      case 34:
      case 39:
        34 !== e && 39 !== e && W(A);
        break;
      case 40:
        41 === e && W(e);
        break;
      case 92:
        R()
      }
      return C
    }
    function U(e, t) {
      for (; R() && e + A !== 57 && (e + A !== 84 || 47 !== M()););
      return "/*" + O(t, C - 1) + "*" + p(47 === e ? e: R())
    }
    function H(e) {
      for (; ! B(M());) R();
      return O(e, C)
    }
    var $ = "-ms-",
    q = "-moz-",
    G = "-webkit-",
    Y = "comm",
    X = "rule",
    K = "decl",
    Q = "@keyframes";
    function Z(e, t) {
      for (var n = "",
      r = w(e), a = 0; a < r; a++) n += t(e[a], a, e, t) || "";
      return n
    }
    function J(e, t, n, r) {
      switch (e.type) {
      case "@import":
      case K:
        return e.
        return = e.
        return || e.value;
      case Y:
        return "";
      case Q:
        return e.
        return = e.value + "{" + Z(e.children, r) + "}";
      case X:
        e.value = e.props.join(",")
      }
      return x(n = Z(e.children, r)) ? e.
      return = e.value + "{" + n + "}": ""
    }
    function ee(e) {
      return F(te("", null, null, null, [""], e = L(e), 0, [0], e))
    }
    function te(e, t, n, r, a, o, i, l, s) {
      for (var c = 0,
      u = 0,
      d = i,
      f = 0,
      g = 0,
      v = 0,
      b = 1,
      w = 1,
      _ = 1,
      S = 0,
      E = "",
      C = a,
      A = o,
      P = r,
      T = E; w;) switch (v = S, S = R()) {
      case 40:
        if (108 != v && 58 == y(T, d - 1)) { - 1 != h(T += m(D(S), "&", "&\f"), "&\f") && (_ = -1);
          break
        }
      case 34:
      case 39:
      case 91:
        T += D(S);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        T += I(v);
        break;
      case 92:
        T += V(N() - 1, 7);
        continue;
      case 47:
        switch (M()) {
        case 42:
        case 47:
          k(re(U(R(), N()), t, n), s);
          break;
        default:
          T += "/"
        }
        break;
      case 123 * b: l[c++] = x(T) * _;
      case 125 * b: case 59:
      case 0:
        switch (S) {
        case 0:
        case 125:
          w = 0;
        case 59 + u: g > 0 && x(T) - d && k(g > 32 ? ae(T + ";", r, n, d - 1) : ae(m(T, " ", "") + ";", r, n, d - 2), s);
          break;
        case 59:
          T += ";";
        default:
          if (k(P = ne(T, t, n, c, u, a, l, E, C = [], A = [], d), o), 123 === S) if (0 === u) te(T, t, P, P, C, o, d, l, A);
          else switch (99 === f && 110 === y(T, 3) ? 100 : f) {
          case 100:
          case 109:
          case 115:
            te(e, P, P, r && k(ne(e, P, P, 0, 0, a, l, E, a, C = [], d), A), a, A, d, l, r ? C: A);
            break;
          default:
            te(T, P, P, P, [""], A, 0, l, A)
          }
        }
        c = u = g = 0,
        b = _ = 1,
        E = T = "",
        d = i;
        break;
      case 58:
        d = 1 + x(T),
        g = v;
      default:
        if (b < 1) if (123 == S)--b;
        else if (125 == S && 0 == b++&&125 == j()) continue;
        switch (T += p(S), S * b) {
        case 38:
          _ = u > 0 ? 1 : (T += "\f", -1);
          break;
        case 44:
          l[c++] = (x(T) - 1) * _,
          _ = 1;
          break;
        case 64:
          45 === M() && (T += D(R())),
          f = M(),
          u = d = x(E = T += H(N())),
          S++;
          break;
        case 45:
          45 === v && 2 == x(T) && (b = 0)
        }
      }
      return o
    }
    function ne(e, t, n, r, a, o, i, l, s, c, u) {
      for (var d = a - 1,
      p = 0 === a ? o: [""], g = w(p), h = 0, y = 0, x = 0; h < r; ++h) for (var k = 0,
      _ = b(e, d + 1, d = f(y = i[h])), S = e; k < g; ++k)(S = v(y > 0 ? p[k] + " " + _: m(_, /&\f/g, p[k]))) && (s[x++] = S);
      return T(e, t, n, 0 === a ? X: l, s, c, u)
    }
    function re(e, t, n) {
      return T(e, t, n, Y, p(A), b(e, 2, -2), 0)
    }
    function ae(e, t, n, r) {
      return T(e, t, n, K, b(e, 0, r), b(e, r + 1, -1), r)
    }
    var oe = function(e, t, n) {
      for (var r = 0,
      a = 0; r = a, a = M(), 38 === r && 12 === a && (t[n] = 1), !B(a);) R();
      return O(e, C)
    },
    ie = function(e, t) {
      return F(function(e, t) {
        var n = -1,
        r = 44;
        do {
          switch (B(r)) {
          case 0:
            38 === r && 12 === M() && (t[n] = 1),
            e[n] += oe(C - 1, t, n);
            break;
          case 2:
            e[n] += D(r);
            break;
          case 4:
            if (44 === r) {
              e[++n] = 58 === M() ? "&\f": "",
              t[n] = e[n].length;
              break
            }
          default:
            e[n] += p(r)
          }
        } while ( r = R ());
        return e
      } (L(e), t))
    },
    le = new WeakMap,
    se = function(e) {
      if ("rule" === e.type && e.parent && !(e.length < 1)) {
        for (var t = e.value,
        n = e.parent,
        r = e.column === n.column && e.line === n.line;
        "rule" !== n.type;) if (! (n = n.parent)) return;
        if ((1 !== e.props.length || 58 === t.charCodeAt(0) || le.get(n)) && !r) {
          le.set(e, !0);
          for (var a = [], o = ie(t, a), i = n.props, l = 0, s = 0; l < o.length; l++) for (var c = 0; c < i.length; c++, s++) e.props[s] = a[l] ? o[l].replace(/&\f/g, i[c]) : i[c] + " " + o[l]
        }
      }
    },
    ce = function(e) {
      if ("decl" === e.type) {
        var t = e.value;
        108 === t.charCodeAt(0) && 98 === t.charCodeAt(2) && (e.
        return = "", e.value = "")
      }
    };
    function ue(e, t) {
      switch (function(e, t) {
        return 45 ^ y(e, 0) ? (((t << 2 ^ y(e, 0)) << 2 ^ y(e, 1)) << 2 ^ y(e, 2)) << 2 ^ y(e, 3) : 0
      } (e, t)) {
      case 5103:
        return G + "print-" + e + e;
      case 5737:
      case 4201:
      case 3177:
      case 3433:
      case 1641:
      case 4457:
      case 2921:
      case 5572:
      case 6356:
      case 5844:
      case 3191:
      case 6645:
      case 3005:
      case 6391:
      case 5879:
      case 5623:
      case 6135:
      case 4599:
      case 4855:
      case 4215:
      case 6389:
      case 5109:
      case 5365:
      case 5621:
      case 3829:
        return G + e + e;
      case 5349:
      case 4246:
      case 4810:
      case 6968:
      case 2756:
        return G + e + q + e + $ + e + e;
      case 6828:
      case 4268:
        return G + e + $ + e + e;
      case 6165:
        return G + e + $ + "flex-" + e + e;
      case 5187:
        return G + e + m(e, /(\w+).+(:[^]+)/, G + "box-$1$2" + $ + "flex-$1$2") + e;
      case 5443:
        return G + e + $ + "flex-item-" + m(e, /flex-|-self/, "") + e;
      case 4675:
        return G + e + $ + "flex-line-pack" + m(e, /align-content|flex-|-self/, "") + e;
      case 5548:
        return G + e + $ + m(e, "shrink", "negative") + e;
      case 5292:
        return G + e + $ + m(e, "basis", "preferred-size") + e;
      case 6060:
        return G + "box-" + m(e, "-grow", "") + G + e + $ + m(e, "grow", "positive") + e;
      case 4554:
        return G + m(e, /([^-])(transform)/g, "$1" + G + "$2") + e;
      case 6187:
        return m(m(m(e, /(zoom-|grab)/, G + "$1"), /(image-set)/, G + "$1"), e, "") + e;
      case 5495:
      case 3959:
        return m(e, /(image-set\([^]*)/, G + "$1$`$1");
      case 4968:
        return m(m(e, /(.+:)(flex-)?(.*)/, G + "box-pack:$3" + $ + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + G + e + e;
      case 4095:
      case 3583:
      case 4068:
      case 2532:
        return m(e, /(.+)-inline(.+)/, G + "$1$2") + e;
      case 8116:
      case 7059:
      case 5753:
      case 5535:
      case 5445:
      case 5701:
      case 4933:
      case 4677:
      case 5533:
      case 5789:
      case 5021:
      case 4765:
        if (x(e) - 1 - t > 6) switch (y(e, t + 1)) {
        case 109:
          if (45 !== y(e, t + 4)) break;
        case 102:
          return m(e, /(.+:)(.+)-([^]+)/, "$1" + G + "$2-$3$1" + q + (108 == y(e, t + 3) ? "$3": "$2-$3")) + e;
        case 115:
          return~h(e, "stretch") ? ue(m(e, "stretch", "fill-available"), t) + e: e
        }
        break;
      case 4949:
        if (115 !== y(e, t + 1)) break;
      case 6444:
        switch (y(e, x(e) - 3 - (~h(e, "!important") && 10))) {
        case 107:
          return m(e, ":", ":" + G) + e;
        case 101:
          return m(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + G + (45 === y(e, 14) ? "inline-": "") + "box$3$1" + G + "$2$3$1" + $ + "$2box$3") + e
        }
        break;
      case 5936:
        switch (y(e, t + 11)) {
        case 114:
          return G + e + $ + m(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return G + e + $ + m(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return G + e + $ + m(e, /[svh]\w+-[tblr]{2}/, "lr") + e
        }
        return G + e + $ + e + e
      }
      return e
    }
    var de = [function(e, t, n, r) {
      if (e.length > -1 && !e.
      return) switch (e.type) {
      case K:
        e.
        return = ue(e.value, e.length);
        break;
      case Q:
        return Z([z(e, {
          value: m(e.value, "@", "@" + G)
        })], r);
      case X:
        if (e.length) return function(e, t) {
          return e.map(t).join("")
        } (e.props, (function(t) {
          switch (function(e, t) {
            return (e = t.exec(e)) ? e[0] : e
          } (t, /(::plac\w+|:read-\w+)/)) {
          case ":read-only":
          case ":read-write":
            return Z([z(e, {
              props: [m(t, /:(read-\w+)/, ":-moz-$1")]
            })], r);
          case "::placeholder":
            return Z([z(e, {
              props: [m(t, /:(plac\w+)/, ":" + G + "input-$1")]
            }), z(e, {
              props: [m(t, /:(plac\w+)/, ":-moz-$1")]
            }), z(e, {
              props: [m(t, /:(plac\w+)/, $ + "input-$1")]
            })], r)
          }
          return ""
        }))
      }
    }],
    fe = function(e) {
      var t = e.key;
      if ("css" === t) {
        var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
        Array.prototype.forEach.call(n, (function(e) { - 1 !== e.getAttribute("data-emotion").indexOf(" ") && (document.head.appendChild(e), e.setAttribute("data-s", ""))
        }))
      }
      var r = e.stylisPlugins || de;
      var a, o, i = {},
      l = [];
      a = e.container || document.head,
      Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + t + ' "]'), (function(e) {
        for (var t = e.getAttribute("data-emotion").split(" "), n = 1; n < t.length; n++) i[t[n]] = !0;
        l.push(e)
      }));
      var s, c, u = [J, (c = function(e) {
        s.insert(e)
      },
      function(e) {
        e.root || (e = e.
        return) && c(e)
      })],
      f = function(e) {
        var t = w(e);
        return function(n, r, a, o) {
          for (var i = "",
          l = 0; l < t; l++) i += e[l](n, r, a, o) || "";
          return i
        }
      } ([se, ce].concat(r, u));
      o = function(e, t, n, r) {
        s = n,
        function(e) {
          Z(ee(e), f)
        } (e ? e + "{" + t.styles + "}": t.styles),
        r && (p.inserted[t.name] = !0)
      };
      var p = {
        key: t,
        sheet: new d({
          key: t,
          container: a,
          nonce: e.nonce,
          speedy: e.speedy,
          prepend: e.prepend,
          insertionPoint: e.insertionPoint
        }),
        nonce: e.nonce,
        inserted: i,
        registered: {},
        insert: o
      };
      return p.sheet.hydrate(l),
      p
    };
    function pe() {
      return pe = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
      },
      pe.apply(this, arguments)
    }
    var ge = function(e) {
      var t = new WeakMap;
      return function(n) {
        if (t.has(n)) return t.get(n);
        var r = e(n);
        return t.set(n, r),
        r
      }
    };
    var ve = function(e) {
      for (var t, n = 0,
      r = 0,
      a = e.length; a >= 4; ++r, a -= 4) t = 1540483477 * (65535 & (t = 255 & e.charCodeAt(r) | (255 & e.charCodeAt(++r)) << 8 | (255 & e.charCodeAt(++r)) << 16 | (255 & e.charCodeAt(++r)) << 24)) + (59797 * (t >>> 16) << 16),
      n = 1540483477 * (65535 & (t ^= t >>> 24)) + (59797 * (t >>> 16) << 16) ^ 1540483477 * (65535 & n) + (59797 * (n >>> 16) << 16);
      switch (a) {
      case 3:
        n ^= (255 & e.charCodeAt(r + 2)) << 16;
      case 2:
        n ^= (255 & e.charCodeAt(r + 1)) << 8;
      case 1:
        n = 1540483477 * (65535 & (n ^= 255 & e.charCodeAt(r))) + (59797 * (n >>> 16) << 16)
      }
      return (((n = 1540483477 * (65535 & (n ^= n >>> 13)) + (59797 * (n >>> 16) << 16)) ^ n >>> 15) >>> 0).toString(36)
    },
    me = {
      animationIterationCount: 1,
      borderImageOutset: 1,
      borderImageSlice: 1,
      borderImageWidth: 1,
      boxFlex: 1,
      boxFlexGroup: 1,
      boxOrdinalGroup: 1,
      columnCount: 1,
      columns: 1,
      flex: 1,
      flexGrow: 1,
      flexPositive: 1,
      flexShrink: 1,
      flexNegative: 1,
      flexOrder: 1,
      gridRow: 1,
      gridRowEnd: 1,
      gridRowSpan: 1,
      gridRowStart: 1,
      gridColumn: 1,
      gridColumnEnd: 1,
      gridColumnSpan: 1,
      gridColumnStart: 1,
      msGridRow: 1,
      msGridRowSpan: 1,
      msGridColumn: 1,
      msGridColumnSpan: 1,
      fontWeight: 1,
      lineHeight: 1,
      opacity: 1,
      order: 1,
      orphans: 1,
      tabSize: 1,
      widows: 1,
      zIndex: 1,
      zoom: 1,
      WebkitLineClamp: 1,
      fillOpacity: 1,
      floodOpacity: 1,
      stopOpacity: 1,
      strokeDasharray: 1,
      strokeDashoffset: 1,
      strokeMiterlimit: 1,
      strokeOpacity: 1,
      strokeWidth: 1
    };
    var he = function(e) {
      var t = Object.create(null);
      return function(n) {
        return void 0 === t[n] && (t[n] = e(n)),
        t[n]
      }
    },
    ye = /[A-Z]|^ms/g,
    be = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
    xe = function(e) {
      return 45 === e.charCodeAt(1)
    },
    we = function(e) {
      return null != e && "boolean" !== typeof e
    },
    ke = he((function(e) {
      return xe(e) ? e: e.replace(ye, "-$&").toLowerCase()
    })),
    _e = function(e, t) {
      switch (e) {
      case "animation":
      case "animationName":
        if ("string" === typeof t) return t.replace(be, (function(e, t, n) {
          return Ee = {
            name: t,
            styles: n,
            next: Ee
          },
          t
        }))
      }
      return 1 === me[e] || xe(e) || "number" !== typeof t || 0 === t ? t: t + "px"
    };
    function Se(e, t, n) {
      if (null == n) return "";
      if (void 0 !== n.__emotion_styles) return n;
      switch (typeof n) {
      case "boolean":
        return "";
      case "object":
        if (1 === n.anim) return Ee = {
          name: n.name,
          styles: n.styles,
          next: Ee
        },
        n.name;
        if (void 0 !== n.styles) {
          var r = n.next;
          if (void 0 !== r) for (; void 0 !== r;) Ee = {
            name: r.name,
            styles: r.styles,
            next: Ee
          },
          r = r.next;
          return n.styles + ";"
        }
        return function(e, t, n) {
          var r = "";
          if (Array.isArray(n)) for (var a = 0; a < n.length; a++) r += Se(e, t, n[a]) + ";";
          else for (var o in n) {
            var i = n[o];
            if ("object" !== typeof i) null != t && void 0 !== t[i] ? r += o + "{" + t[i] + "}": we(i) && (r += ke(o) + ":" + _e(o, i) + ";");
            else if (!Array.isArray(i) || "string" !== typeof i[0] || null != t && void 0 !== t[i[0]]) {
              var l = Se(e, t, i);
              switch (o) {
              case "animation":
              case "animationName":
                r += ke(o) + ":" + l + ";";
                break;
              default:
                r += o + "{" + l + "}"
              }
            } else for (var s = 0; s < i.length; s++) we(i[s]) && (r += ke(o) + ":" + _e(o, i[s]) + ";")
          }
          return r
        } (e, t, n);
      case "function":
        if (void 0 !== e) {
          var a = Ee,
          o = n(e);
          return Ee = a,
          Se(e, t, o)
        }
      }
      if (null == t) return n;
      var i = t[n];
      return void 0 !== i ? i: n
    }
    var Ee, Ce = /label:\s*([^\s;\n{]+)\s*(;|$)/g;
    var Ae = function(e, t, n) {
      if (1 === e.length && "object" === typeof e[0] && null !== e[0] && void 0 !== e[0].styles) return e[0];
      var r = !0,
      a = "";
      Ee = void 0;
      var o = e[0];
      null == o || void 0 === o.raw ? (r = !1, a += Se(n, t, o)) : a += o[0];
      for (var i = 1; i < e.length; i++) a += Se(n, t, e[i]),
      r && (a += o[i]);
      Ce.lastIndex = 0;
      for (var l, s = ""; null !== (l = Ce.exec(a));) s += "-" + l[1];
      return {
        name: ve(a) + s,
        styles: a,
        next: Ee
      }
    },
    Pe = !!t.useInsertionEffect && t.useInsertionEffect,
    Te = Pe ||
    function(e) {
      return e()
    },
    ze = Pe || e.useLayoutEffect,
    je = (0, e.createContext)("undefined" !== typeof HTMLElement ? fe({
      key: "css"
    }) : null);
    je.Provider;
    var Re = function(t) {
      return (0, e.forwardRef)((function(n, r) {
        var a = (0, e.useContext)(je);
        return t(n, a, r)
      }))
    },
    Me = (0, e.createContext)({});
    var Ne = ge((function(e) {
      return ge((function(t) {
        return function(e, t) {
          return "function" === typeof t ? t(e) : pe({},
          e, t)
        } (e, t)
      }))
    })),
    Oe = function(t) {
      var n = (0, e.useContext)(Me);
      return t.theme !== n && (n = Ne(n)(t.theme)),
      (0, e.createElement)(Me.Provider, {
        value: n
      },
      t.children)
    };
    n(861);
    function Be(e, t, n) {
      var r = "";
      return n.split(" ").forEach((function(n) {
        void 0 !== e[n] ? t.push(e[n] + ";") : r += n + " "
      })),
      r
    }
    var Le = function(e, t, n) {
      var r = e.key + "-" + t.name; ! 1 === n && void 0 === e.registered[r] && (e.registered[r] = t.styles)
    },
    Fe = function(e, t, n) {
      Le(e, t, n);
      var r = e.key + "-" + t.name;
      if (void 0 === e.inserted[t.name]) {
        var a = t;
        do {
          e.insert(t === a ? "." + r: "", a, e.sheet, !0);
          a = a.next
        } while ( void 0 !== a )
      }
    },
    De = Re((function(t, n) {
      var r = t.styles,
      a = Ae([r], void 0, (0, e.useContext)(Me)),
      o = (0, e.useRef)();
      return ze((function() {
        var e = n.key + "-global",
        t = new n.sheet.constructor({
          key: e,
          nonce: n.sheet.nonce,
          container: n.sheet.container,
          speedy: n.sheet.isSpeedy
        }),
        r = !1,
        i = document.querySelector('style[data-emotion="' + e + " " + a.name + '"]');
        return n.sheet.tags.length && (t.before = n.sheet.tags[0]),
        null !== i && (r = !0, i.setAttribute("data-emotion", e), t.hydrate([i])),
        o.current = [t, r],
        function() {
          t.flush()
        }
      }), [n]),
      ze((function() {
        var e = o.current,
        t = e[0];
        if (e[1]) e[1] = !1;
        else {
          if (void 0 !== a.next && Fe(n, a.next, !0), t.tags.length) {
            var r = t.tags[t.tags.length - 1].nextElementSibling;
            t.before = r,
            t.flush()
          }
          n.insert("", a, t, !1)
        }
      }), [n, a.name]),
      null
    }));
    function Ie() {
      for (var e = arguments.length,
      t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
      return Ae(t)
    }
    var Ve = "\n  :root {\n    --chakra-vh: 100vh;\n  }\n\n  @supports (height: -webkit-fill-available) {\n    :root {\n      --chakra-vh: -webkit-fill-available;\n    }\n  }\n\n  @supports (height: -moz-fill-available) {\n    :root {\n      --chakra-vh: -moz-fill-available;\n    }\n  }\n\n  @supports (height: 100dvh) {\n    :root {\n      --chakra-vh: 100dvh;\n    }\n  }\n",
    We = function() {
      return e.createElement(De, {
        styles: Ve
      })
    },
    Ue = function() {
      return e.createElement(De, {
        styles: '\n      html {\n        line-height: 1.5;\n        -webkit-text-size-adjust: 100%;\n        font-family: system-ui, sans-serif;\n        -webkit-font-smoothing: antialiased;\n        text-rendering: optimizeLegibility;\n        -moz-osx-font-smoothing: grayscale;\n        touch-action: manipulation;\n      }\n\n      body {\n        position: relative;\n        min-height: 100%;\n        font-feature-settings: \'kern\';\n      }\n\n      *,\n      *::before,\n      *::after {\n        border-width: 0;\n        border-style: solid;\n        box-sizing: border-box;\n      }\n\n      main {\n        display: block;\n      }\n\n      hr {\n        border-top-width: 1px;\n        box-sizing: content-box;\n        height: 0;\n        overflow: visible;\n      }\n\n      pre,\n      code,\n      kbd,\n      samp {\n        font-family: SFMono-Regular,  Menlo, Monaco, Consolas, monospace;\n        font-size: 1em;\n      }\n\n      a {\n        background-color: transparent;\n        color: inherit;\n        text-decoration: inherit;\n      }\n\n      abbr[title] {\n        border-bottom: none;\n        text-decoration: underline;\n        -webkit-text-decoration: underline dotted;\n        text-decoration: underline dotted;\n      }\n\n      b,\n      strong {\n        font-weight: bold;\n      }\n\n      small {\n        font-size: 80%;\n      }\n\n      sub,\n      sup {\n        font-size: 75%;\n        line-height: 0;\n        position: relative;\n        vertical-align: baseline;\n      }\n\n      sub {\n        bottom: -0.25em;\n      }\n\n      sup {\n        top: -0.5em;\n      }\n\n      img {\n        border-style: none;\n      }\n\n      button,\n      input,\n      optgroup,\n      select,\n      textarea {\n        font-family: inherit;\n        font-size: 100%;\n        line-height: 1.15;\n        margin: 0;\n      }\n\n      button,\n      input {\n        overflow: visible;\n      }\n\n      button,\n      select {\n        text-transform: none;\n      }\n\n      button::-moz-focus-inner,\n      [type="button"]::-moz-focus-inner,\n      [type="reset"]::-moz-focus-inner,\n      [type="submit"]::-moz-focus-inner {\n        border-style: none;\n        padding: 0;\n      }\n\n      fieldset {\n        padding: 0.35em 0.75em 0.625em;\n      }\n\n      legend {\n        box-sizing: border-box;\n        color: inherit;\n        display: table;\n        max-width: 100%;\n        padding: 0;\n        white-space: normal;\n      }\n\n      progress {\n        vertical-align: baseline;\n      }\n\n      textarea {\n        overflow: auto;\n      }\n\n      [type="checkbox"],\n      [type="radio"] {\n        box-sizing: border-box;\n        padding: 0;\n      }\n\n      [type="number"]::-webkit-inner-spin-button,\n      [type="number"]::-webkit-outer-spin-button {\n        -webkit-appearance: none !important;\n      }\n\n      input[type="number"] {\n        -moz-appearance: textfield;\n      }\n\n      [type="search"] {\n        -webkit-appearance: textfield;\n        outline-offset: -2px;\n      }\n\n      [type="search"]::-webkit-search-decoration {\n        -webkit-appearance: none !important;\n      }\n\n      ::-webkit-file-upload-button {\n        -webkit-appearance: button;\n        font: inherit;\n      }\n\n      details {\n        display: block;\n      }\n\n      summary {\n        display: list-item;\n      }\n\n      template {\n        display: none;\n      }\n\n      [hidden] {\n        display: none !important;\n      }\n\n      body,\n      blockquote,\n      dl,\n      dd,\n      h1,\n      h2,\n      h3,\n      h4,\n      h5,\n      h6,\n      hr,\n      figure,\n      p,\n      pre {\n        margin: 0;\n      }\n\n      button {\n        background: transparent;\n        padding: 0;\n      }\n\n      fieldset {\n        margin: 0;\n        padding: 0;\n      }\n\n      ol,\n      ul {\n        margin: 0;\n        padding: 0;\n      }\n\n      textarea {\n        resize: vertical;\n      }\n\n      button,\n      [role="button"] {\n        cursor: pointer;\n      }\n\n      button::-moz-focus-inner {\n        border: 0 !important;\n      }\n\n      table {\n        border-collapse: collapse;\n      }\n\n      h1,\n      h2,\n      h3,\n      h4,\n      h5,\n      h6 {\n        font-size: inherit;\n        font-weight: inherit;\n      }\n\n      button,\n      input,\n      optgroup,\n      select,\n      textarea {\n        padding: 0;\n        line-height: inherit;\n        color: inherit;\n      }\n\n      img,\n      svg,\n      video,\n      canvas,\n      audio,\n      iframe,\n      embed,\n      object {\n        display: block;\n      }\n\n      img,\n      video {\n        max-width: 100%;\n        height: auto;\n      }\n\n      [data-js-focus-visible] :focus:not([data-focus-visible-added]):not([data-focus-visible-disabled]) {\n        outline: none;\n        box-shadow: none;\n      }\n\n      select::-ms-expand {\n        display: none;\n      }\n\n      '.concat(Ve, "\n    ")
      })
    };
    function He(e) {
      if (Array.isArray(e)) return e
    }
    function $e(e, t) { (null == t || t > e.length) && (t = e.length);
      for (var n = 0,
      r = new Array(t); n < t; n++) r[n] = e[n];
      return r
    }
    function qe(e, t) {
      if (e) {
        if ("string" === typeof e) return $e(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        return "Object" === n && e.constructor && (n = e.constructor.name),
        "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? $e(e, t) : void 0
      }
    }
    function Ge() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }
    function Ye(e, t) {
      return He(e) ||
      function(e, t) {
        var n = null == e ? null: "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (null != n) {
          var r, a, o, i, l = [],
          s = !0,
          c = !1;
          try {
            if (o = (n = n.call(e)).next, 0 === t) {
              if (Object(n) !== n) return;
              s = !1
            } else for (; ! (s = (r = o.call(n)).done) && (l.push(r.value), l.length !== t); s = !0);
          } catch(u) {
            c = !0,
            a = u
          } finally {
            try {
              if (!s && null != n.
              return && (i = n.
              return (), Object(i) !== i)) return
            } finally {
              if (c) throw a
            }
          }
          return l
        }
      } (e, t) || qe(e, t) || Ge()
    }
    function Xe(e, t) {
      return "".concat(e, " returned `undefined`. Seems you forgot to wrap component within ").concat(t)
    }
    function Ke() {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      n = t.name,
      r = t.strict,
      a = void 0 === r || r,
      o = t.hookName,
      i = void 0 === o ? "useContext": o,
      l = t.providerName,
      s = void 0 === l ? "Provider": l,
      c = t.errorMessage,
      u = (0, e.createContext)(void 0);
      function d() {
        var t, n = (0, e.useContext)(u);
        if (!n && a) {
          var r = new Error(null !== c && void 0 !== c ? c: Xe(i, s));
          throw r.name = "ContextError",
          null == (t = Error.captureStackTrace) || t.call(Error, r, d),
          r
        }
        return n
      }
      return u.displayName = n,
      [u.Provider, d, u]
    }
    var Qe = Boolean(null == globalThis ? void 0 : globalThis.document) ? e.useLayoutEffect: e.useEffect,
    Ze = n(168),
    Je = ["containerRef"],
    et = Ye(Ke({
      strict: !1,
      name: "PortalManagerContext"
    }), 2),
    tt = et[0],
    nt = et[1];
    function rt(t) {
      var n = t.children,
      r = t.zIndex;
      return e.createElement(tt, {
        value: {
          zIndex: r
        }
      },
      n)
    }
    rt.displayName = "PortalManager";
    var at = Ye(Ke({
      strict: !1,
      name: "PortalContext"
    }), 2),
    ot = at[0],
    it = at[1],
    lt = "chakra-portal",
    st = function(t) {
      return e.createElement("div", {
        className: "chakra-portal-zIndex",
        style: {
          position: "absolute",
          zIndex: t.zIndex,
          top: 0,
          left: 0,
          right: 0
        }
      },
      t.children)
    },
    ct = function(t) {
      var n = t.appendToParentPortal,
      r = t.children,
      a = Ye((0, e.useState)(null), 2),
      o = a[0],
      i = a[1],
      l = (0, e.useRef)(null),
      s = Ye((0, e.useState)({}), 2)[1]; (0, e.useEffect)((function() {
        return s({})
      }), []);
      var c = it(),
      u = nt();
      Qe((function() {
        if (o) {
          var e = o.ownerDocument,
          t = n && null !== c && void 0 !== c ? c: e.body;
          if (t) {
            l.current = e.createElement("div"),
            l.current.className = lt,
            t.appendChild(l.current),
            s({});
            var r = l.current;
            return function() {
              t.contains(r) && t.removeChild(r)
            }
          }
        }
      }), [o]);
      var d = (null == u ? void 0 : u.zIndex) ? e.createElement(st, {
        zIndex: null == u ? void 0 : u.zIndex
      },
      r) : r;
      return l.current ? (0, Ze.createPortal)(e.createElement(ot, {
        value: l.current
      },
      d), l.current) : e.createElement("span", {
        ref: function(e) {
          e && i(e)
        }
      })
    },
    ut = function(t) {
      var n = t.children,
      r = t.containerRef,
      a = t.appendToParentPortal,
      o = r.current,
      i = null !== o && void 0 !== o ? o: "undefined" !== typeof window ? document.body: void 0,
      l = (0, e.useMemo)((function() {
        var e = null == o ? void 0 : o.ownerDocument.createElement("div");
        return e && (e.className = lt),
        e
      }), [o]),
      s = Ye((0, e.useState)({}), 2)[1];
      return Qe((function() {
        return s({})
      }), []),
      Qe((function() {
        if (l && i) return i.appendChild(l),
        function() {
          i.removeChild(l)
        }
      }), [l, i]),
      i && l ? (0, Ze.createPortal)(e.createElement(ot, {
        value: a ? l: null
      },
      n), l) : null
    };
    function dt(t) {
      var n = t.containerRef,
      r = u(t, Je);
      return n ? e.createElement(ut, c({
        containerRef: n
      },
      r)) : e.createElement(ct, c({},
      r))
    }
    function ft(e) {
      if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
    }
    function pt(e) {
      return function(e) {
        if (Array.isArray(e)) return $e(e)
      } (e) || ft(e) || qe(e) ||
      function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      } ()
    }
    dt.defaultProps = {
      appendToParentPortal: !0
    },
    dt.className = lt,
    dt.selector = ".chakra-portal",
    dt.displayName = "Portal";
    var gt = (0, e.createContext)({});
    function vt() {
      var t = (0, e.useContext)(gt);
      if (void 0 === t) throw new Error("useColorMode must be used within a ColorModeProvider");
      return t
    }
    gt.displayName = "ColorModeContext";
    var mt = "chakra-ui-light",
    ht = "chakra-ui-dark";
    var yt = "chakra-ui-color-mode";
    var bt, xt = (bt = yt, {
      ssr: !1,
      type: "localStorage",
      get: function(e) {
        if (! (null == globalThis ? void 0 : globalThis.document)) return e;
        var t;
        try {
          t = localStorage.getItem(bt) || e
        } catch(n) {}
        return t || e
      },
      set: function(e) {
        try {
          localStorage.setItem(bt, e)
        } catch(t) {}
      }
    });
    function wt(e, t) {
      var n = e.match(new RegExp("(^| )".concat(t, "=([^;]+)")));
      return null == n ? void 0 : n[2]
    }
    function kt(e, t) {
      return {
        ssr: !!t,
        type: "cookie",
        get: function(n) {
          return t ? wt(t, e) : (null == globalThis ? void 0 : globalThis.document) && wt(document.cookie, e) || n
        },
        set: function(t) {
          document.cookie = "".concat(e, "=").concat(t, "; max-age=31536000; path=/")
        }
      }
    }
    kt(yt);
    var _t = function() {};
    function St(e, t) {
      return "cookie" === e.type && e.ssr ? e.get(t) : t
    }
    function Et(t) {
      var n = t.value,
      r = t.children,
      a = t.options,
      o = (a = void 0 === a ? {}: a).useSystemColorMode,
      i = a.initialColorMode,
      l = a.disableTransitionOnChange,
      s = t.colorModeManager,
      c = void 0 === s ? xt: s,
      u = "dark" === i ? "dark": "light",
      d = Ye((0, e.useState)((function() {
        return St(c, u)
      })), 2),
      f = d[0],
      p = d[1],
      g = Ye((0, e.useState)((function() {
        return St(c)
      })), 2),
      v = g[0],
      m = g[1],
      h = (0, e.useMemo)((function() {
        return function() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = e.preventTransition,
          n = void 0 === t || t,
          r = {
            setDataset: function(e) {
              var t = n ? r.preventTransition() : void 0;
              document.documentElement.dataset.theme = e,
              document.documentElement.style.colorScheme = e,
              null == t || t()
            },
            setClassName: function(e) {
              document.body.classList.add(e ? ht: mt),
              document.body.classList.remove(e ? mt: ht)
            },
            query: function() {
              return window.matchMedia("(prefers-color-scheme: dark)")
            },
            getSystemTheme: function(e) {
              var t;
              return (null !== (t = r.query().matches) && void 0 !== t ? t: "dark" === e) ? "dark": "light"
            },
            addListener: function(e) {
              var t = r.query(),
              n = function(t) {
                e(t.matches ? "dark": "light")
              };
              return "function" === typeof t.addListener ? t.addListener(n) : t.addEventListener("change", n),
              function() {
                "function" === typeof t.removeListener ? t.removeListener(n) : t.removeEventListener("change", n)
              }
            },
            preventTransition: function() {
              var e = document.createElement("style");
              return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),
              document.head.appendChild(e),
              function() {
                window.getComputedStyle(document.body),
                requestAnimationFrame((function() {
                  requestAnimationFrame((function() {
                    document.head.removeChild(e)
                  }))
                }))
              }
            }
          };
          return r
        } ({
          preventTransition: l
        })
      }), [l]),
      y = h.getSystemTheme,
      b = h.setClassName,
      x = h.setDataset,
      w = h.addListener,
      k = "system" !== i || f ? f: v,
      _ = (0, e.useCallback)((function(e) {
        var t = "system" === e ? y() : e;
        p(t),
        b("dark" === t),
        x(t),
        c.set(t)
      }), [c, y, b, x]);
      Qe((function() {
        "system" === i && m(y())
      }), []),
      (0, e.useEffect)((function() {
        var e = c.get();
        _(e || ("system" !== i ? u: "system"))
      }), [c, u, i, _]);
      var S = (0, e.useCallback)((function() {
        _("dark" === k ? "light": "dark")
      }), [k, _]); (0, e.useEffect)((function() {
        if (o) return w(_)
      }), [o, w, _]);
      var E = (0, e.useMemo)((function() {
        return {
          colorMode: null !== n && void 0 !== n ? n: k,
          toggleColorMode: n ? _t: S,
          setColorMode: n ? _t: _,
          forced: void 0 !== n
        }
      }), [k, S, _, n]);
      return e.createElement(gt.Provider, {
        value: E
      },
      r)
    }
    Et.displayName = "ColorModeProvider";
    var Ct = new Set(["dark", "light", "system"]);
    function At(e) {
      var t = e;
      return Ct.has(t) || (t = "light"),
      t
    }
    function Pt() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      t = e.initialColorMode,
      n = void 0 === t ? "light": t,
      r = e.type,
      a = void 0 === r ? "localStorage": r,
      o = e.storageKey,
      i = void 0 === o ? "chakra-ui-color-mode": o,
      l = At(n),
      s = "cookie" === a,
      c = '(function(){try{var a=function(o){var l="(prefers-color-scheme: dark)",v=window.matchMedia(l).matches?"dark":"light",e=o==="system"?v:o,d=document.documentElement,m=document.body,i="chakra-ui-light",n="chakra-ui-dark",s=e==="dark";return m.classList.add(s?n:i),m.classList.remove(s?i:n),d.style.colorScheme=e,d.dataset.theme=e,e},u=a,h="'.concat(l, '",r="').concat(i, '",t=document.cookie.match(new RegExp("(^| )".concat(r,"=([^;]+)"))),c=t?t[2]:null;c?a(c):document.cookie="".concat(r,"=").concat(a(h),"; max-age=31536000; path=/")}catch(a){}})();\n  '),
      u = '(function(){try{var a=function(c){var v="(prefers-color-scheme: dark)",h=window.matchMedia(v).matches?"dark":"light",r=c==="system"?h:c,o=document.documentElement,s=document.body,l="chakra-ui-light",d="chakra-ui-dark",i=r==="dark";return s.classList.add(i?d:l),s.classList.remove(i?l:d),o.style.colorScheme=r,o.dataset.theme=r,r},n=a,m="'.concat(l, '",e="').concat(i, '",t=localStorage.getItem(e);t?a(t):localStorage.setItem(e,a(m))}catch(a){}})();\n  '),
      d = s ? c: u;
      return "!".concat(d).trim()
    }
    function Tt() {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      n = t.nonce;
      return e.createElement("script", {
        id: "chakra-script",
        nonce: n,
        dangerouslySetInnerHTML: {
          __html: Pt(t)
        }
      })
    }
    function zt(e, t) {
      var n = "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
      if (!n) {
        if (Array.isArray(e) || (n = qe(e)) || t && e && "number" === typeof e.length) {
          n && (e = n);
          var r = 0,
          a = function() {};
          return {
            s: a,
            n: function() {
              return r >= e.length ? {
                done: !0
              }: {
                done: !1,
                value: e[r++]
              }
            },
            e: function(e) {
              throw e
            },
            f: a
          }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }
      var o, i = !0,
      l = !1;
      return {
        s: function() {
          n = n.call(e)
        },
        n: function() {
          var e = n.next();
          return i = e.done,
          e
        },
        e: function(e) {
          l = !0,
          o = e
        },
        f: function() {
          try {
            i || null == n.
            return || n.
            return ()
          } finally {
            if (l) throw o
          }
        }
      }
    }
    function jt(e) {
      return He(e) || ft(e) || qe(e) || Ge()
    }
    function Rt(e, t) {
      return Rt = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
        return e.__proto__ = t,
        e
      },
      Rt(e, t)
    }
    function Mt(e, t) {
      if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          writable: !0,
          configurable: !0
        }
      }),
      Object.defineProperty(e, "prototype", {
        writable: !1
      }),
      t && Rt(e, t)
    }
    function Nt() {
      Nt = function(e, t) {
        return new n(e, void 0, t)
      };
      var e = RegExp.prototype,
      t = new WeakMap;
      function n(e, r, a) {
        var o = new RegExp(e, r);
        return t.set(o, a || t.get(e)),
        Rt(o, n.prototype)
      }
      function r(e, n) {
        var r = t.get(n);
        return Object.keys(r).reduce((function(t, n) {
          var a = r[n];
          if ("number" == typeof a) t[n] = e[a];
          else {
            for (var o = 0; void 0 === e[a[o]] && o + 1 < a.length;) o++;
            t[n] = e[a[o]]
          }
          return t
        }), Object.create(null))
      }
      return Mt(n, RegExp),
      n.prototype.exec = function(t) {
        var n = e.exec.call(this, t);
        if (n) {
          n.groups = r(n, this);
          var a = n.indices;
          a && (a.groups = r(a, this))
        }
        return n
      },
      n.prototype[Symbol.replace] = function(n, a) {
        if ("string" == typeof a) {
          var i = t.get(this);
          return e[Symbol.replace].call(this, n, a.replace(/\$<([^>]+)>/g, (function(e, t) {
            var n = i[t];
            return "$" + (Array.isArray(n) ? n.join("$") : n)
          })))
        }
        if ("function" == typeof a) {
          var l = this;
          return e[Symbol.replace].call(this, n, (function() {
            var e = arguments;
            return "object" != o(e[e.length - 1]) && (e = [].slice.call(e)).push(r(e, l)),
            a.apply(this, e)
          }))
        }
        return e[Symbol.replace].call(this, n, a)
      },
      Nt.apply(this, arguments)
    }
    var Ot = n(967),
    Bt = n.n(Ot),
    Lt = ["__cssMap", "__cssVars", "__breakpoints"];
    function Ft(e) {
      var t = typeof e;
      return null != e && ("object" === t || "function" === t) && !Array.isArray(e)
    }
    function Dt(e) {
      for (var t = arguments.length,
      n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
      return It(e) ? e.apply(void 0, n) : e
    }
    var It = function(e) {
      return "function" === typeof e
    },
    Vt = function(e) {
      return "string" === typeof e ? e.replace(/!(important)?$/, "").trim() : e
    },
    Wt = function(e, t) {
      return function(n) {
        var r = String(t),
        a = function(e) {
          return /!(important)?$/.test(e)
        } (r),
        o = Vt(r),
        i = e ? "".concat(e, ".").concat(o) : o,
        l = Ft(n.__cssMap) && i in n.__cssMap ? n.__cssMap[i].varRef: t;
        return l = Vt(l),
        a ? "".concat(l, " !important") : l
      }
    };
    function Ut(e) {
      var t = e.scale,
      n = e.transform,
      r = e.compose;
      return function(e, a) {
        var o, i = Wt(t, e)(a),
        l = null !== (o = null == n ? void 0 : n(i, a)) && void 0 !== o ? o: i;
        return r && (l = r(l, a)),
        l
      }
    }
    var Ht = function() {
      for (var e = arguments.length,
      t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
      return function(e) {
        return t.reduce((function(e, t) {
          return t(e)
        }), e)
      }
    };
    function $t(e, t) {
      return function(n) {
        var r = {
          property: n,
          scale: e
        };
        return r.transform = Ut({
          scale: e,
          transform: t
        }),
        r
      }
    }
    var qt = function(e) {
      var t = e.rtl,
      n = e.ltr;
      return function(e) {
        return "rtl" === e.direction ? t: n
      }
    };
    var Gt = ["rotate(var(--chakra-rotate, 0))", "scaleX(var(--chakra-scale-x, 1))", "scaleY(var(--chakra-scale-y, 1))", "skewX(var(--chakra-skew-x, 0))", "skewY(var(--chakra-skew-y, 0))"];
    var Yt = {
      "--chakra-blur": "var(--chakra-empty,/*!*/ /*!*/)",
      "--chakra-brightness": "var(--chakra-empty,/*!*/ /*!*/)",
      "--chakra-contrast": "var(--chakra-empty,/*!*/ /*!*/)",
      "--chakra-grayscale": "var(--chakra-empty,/*!*/ /*!*/)",
      "--chakra-hue-rotate": "var(--chakra-empty,/*!*/ /*!*/)",
      "--chakra-invert": "var(--chakra-empty,/*!*/ /*!*/)",
      "--chakra-saturate": "var(--chakra-empty,/*!*/ /*!*/)",
      "--chakra-sepia": "var(--chakra-empty,/*!*/ /*!*/)",
      "--chakra-drop-shadow": "var(--chakra-empty,/*!*/ /*!*/)",
      filter: ["var(--chakra-blur)", "var(--chakra-brightness)", "var(--chakra-contrast)", "var(--chakra-grayscale)", "var(--chakra-hue-rotate)", "var(--chakra-invert)", "var(--chakra-saturate)", "var(--chakra-sepia)", "var(--chakra-drop-shadow)"].join(" ")
    },
    Xt = {
      backdropFilter: ["var(--chakra-backdrop-blur)", "var(--chakra-backdrop-brightness)", "var(--chakra-backdrop-contrast)", "var(--chakra-backdrop-grayscale)", "var(--chakra-backdrop-hue-rotate)", "var(--chakra-backdrop-invert)", "var(--chakra-backdrop-opacity)", "var(--chakra-backdrop-saturate)", "var(--chakra-backdrop-sepia)"].join(" "),
      "--chakra-backdrop-blur": "var(--chakra-empty,/*!*/ /*!*/)",
      "--chakra-backdrop-brightness": "var(--chakra-empty,/*!*/ /*!*/)",
      "--chakra-backdrop-contrast": "var(--chakra-empty,/*!*/ /*!*/)",
      "--chakra-backdrop-grayscale": "var(--chakra-empty,/*!*/ /*!*/)",
      "--chakra-backdrop-hue-rotate": "var(--chakra-empty,/*!*/ /*!*/)",
      "--chakra-backdrop-invert": "var(--chakra-empty,/*!*/ /*!*/)",
      "--chakra-backdrop-opacity": "var(--chakra-empty,/*!*/ /*!*/)",
      "--chakra-backdrop-saturate": "var(--chakra-empty,/*!*/ /*!*/)",
      "--chakra-backdrop-sepia": "var(--chakra-empty,/*!*/ /*!*/)"
    };
    var Kt = {
      "row-reverse": {
        space: "--chakra-space-x-reverse",
        divide: "--chakra-divide-x-reverse"
      },
      "column-reverse": {
        space: "--chakra-space-y-reverse",
        divide: "--chakra-divide-y-reverse"
      }
    },
    Qt = "& > :not(style) ~ :not(style)",
    Zt = l({},
    Qt, {
      marginInlineStart: "calc(var(--chakra-space-x) * calc(1 - var(--chakra-space-x-reverse)))",
      marginInlineEnd: "calc(var(--chakra-space-x) * var(--chakra-space-x-reverse))"
    }),
    Jt = l({},
    Qt, {
      marginTop: "calc(var(--chakra-space-y) * calc(1 - var(--chakra-space-y-reverse)))",
      marginBottom: "calc(var(--chakra-space-y) * var(--chakra-space-y-reverse))"
    }),
    en = {
      "to-t": "to top",
      "to-tr": "to top right",
      "to-r": "to right",
      "to-br": "to bottom right",
      "to-b": "to bottom",
      "to-bl": "to bottom left",
      "to-l": "to left",
      "to-tl": "to top left"
    },
    tn = new Set(Object.values(en)),
    nn = new Set(["none", "-moz-initial", "inherit", "initial", "revert", "unset"]),
    rn = function(e) {
      return e.trim()
    };
    var an = function(e) {
      return "string" === typeof e && e.includes("(") && e.includes(")")
    };
    var on = function(e) {
      return function(t) {
        return "".concat(e, "(").concat(t, ")")
      }
    },
    ln = {
      filter: function(e) {
        return "auto" !== e ? e: Yt
      },
      backdropFilter: function(e) {
        return "auto" !== e ? e: Xt
      },
      ring: function(e) {
        return function(e) {
          return {
            "--chakra-ring-offset-shadow": "var(--chakra-ring-inset) 0 0 0 var(--chakra-ring-offset-width) var(--chakra-ring-offset-color)",
            "--chakra-ring-shadow": "var(--chakra-ring-inset) 0 0 0 calc(var(--chakra-ring-width) + var(--chakra-ring-offset-width)) var(--chakra-ring-color)",
            "--chakra-ring-width": e,
            boxShadow: ["var(--chakra-ring-offset-shadow)", "var(--chakra-ring-shadow)", "var(--chakra-shadow, 0 0 #0000)"].join(", ")
          }
        } (ln.px(e))
      },
      bgClip: function(e) {
        return "text" === e ? {
          color: "transparent",
          backgroundClip: "text"
        }: {
          backgroundClip: e
        }
      },
      transform: function(e) {
        return "auto" === e ? ["translateX(var(--chakra-translate-x, 0))", "translateY(var(--chakra-translate-y, 0))"].concat(Gt).join(" ") : "auto-gpu" === e ? ["translate3d(var(--chakra-translate-x, 0), var(--chakra-translate-y, 0), 0)"].concat(Gt).join(" ") : e
      },
      vh: function(e) {
        return "$100vh" === e ? "var(--chakra-vh)": e
      },
      px: function(e) {
        if (null == e) return e;
        var t = function(e) {
          var t = parseFloat(e.toString()),
          n = e.toString().replace(String(t), "");
          return {
            unitless: !n,
            value: t,
            unit: n
          }
        } (e);
        return t.unitless || "number" === typeof e ? "".concat(e, "px") : e
      },
      fraction: function(e) {
        return "number" !== typeof e || e > 1 ? e: "".concat(100 * e, "%")
      },
      float: function(e, t) {
        return "rtl" === t.direction ? {
          left: "right",
          right: "left"
        } [e] : e
      },
      degree: function(e) {
        if (function(e) {
          return /^var\(--.+\)$/.test(e)
        } (e) || null == e) return e;
        var t = "string" === typeof e && !e.endsWith("deg");
        return "number" === typeof e || t ? "".concat(e, "deg") : e
      },
      gradient: function(e, t) {
        return function(e, t) {
          var n, r;
          if (null == e || nn.has(e)) return e;
          var a = null !== (n = null == (r = Nt(/(^[a-z-A-Z]+)\(((.*))\)/g, {
            type: 1,
            values: 2
          }).exec(e)) ? void 0 : r.groups) && void 0 !== n ? n: {},
          o = a.type,
          i = a.values;
          if (!o || !i) return e;
          var l = o.includes("-gradient") ? o: "".concat(o, "-gradient"),
          s = jt(i.split(",").map(rn).filter(Boolean)),
          c = s[0],
          u = s.slice(1);
          if (0 === (null == u ? void 0 : u.length)) return e;
          var d = c in en ? en[c] : c;
          u.unshift(d);
          var f = u.map((function(e) {
            if (tn.has(e)) return e;
            var n = e.indexOf(" "),
            r = Ye( - 1 !== n ? [e.substr(0, n), e.substr(n + 1)] : [e], 2),
            a = r[0],
            o = r[1],
            i = an(o) ? o: o && o.split(" "),
            l = "colors.".concat(a),
            s = l in t.__cssMap ? t.__cssMap[l].varRef: a;
            return i ? [s].concat(pt(Array.isArray(i) ? i: [i])).join(" ") : s
          }));
          return "".concat(l, "(").concat(f.join(", "), ")")
        } (e, null !== t && void 0 !== t ? t: {})
      },
      blur: on("blur"),
      opacity: on("opacity"),
      brightness: on("brightness"),
      contrast: on("contrast"),
      dropShadow: on("drop-shadow"),
      grayscale: on("grayscale"),
      hueRotate: on("hue-rotate"),
      invert: on("invert"),
      saturate: on("saturate"),
      sepia: on("sepia"),
      bgImage: function(e) {
        return null == e || an(e) || nn.has(e) ? e: "url(".concat(e, ")")
      },
      outline: function(e) {
        var t = "0" === String(e) || "none" === String(e);
        return null !== e && t ? {
          outline: "2px solid transparent",
          outlineOffset: "2px"
        }: {
          outline: e
        }
      },
      flexDirection: function(e) {
        var t, n = null !== (t = Kt[e]) && void 0 !== t ? t: {},
        r = n.space,
        a = n.divide,
        o = {
          flexDirection: e
        };
        return r && (o[r] = 1),
        a && (o[a] = 1),
        o
      }
    },
    sn = {
      borderWidths: $t("borderWidths"),
      borderStyles: $t("borderStyles"),
      colors: $t("colors"),
      borders: $t("borders"),
      radii: $t("radii", ln.px),
      space: $t("space", Ht(ln.vh, ln.px)),
      spaceT: $t("space", Ht(ln.vh, ln.px)),
      degreeT: function(e) {
        return {
          property: e,
          transform: ln.degree
        }
      },
      prop: function(e, t, n) {
        return c({
          property: e,
          scale: t
        },
        t && {
          transform: Ut({
            scale: t,
            transform: n
          })
        })
      },
      propT: function(e, t) {
        return {
          property: e,
          transform: t
        }
      },
      sizes: $t("sizes", Ht(ln.vh, ln.px)),
      sizesT: $t("sizes", Ht(ln.vh, ln.fraction)),
      shadows: $t("shadows"),
      logical: function(e) {
        var t = e.property,
        n = e.scale,
        r = e.transform;
        return {
          scale: n,
          property: qt(t),
          transform: n ? Ut({
            scale: n,
            compose: r
          }) : r
        }
      },
      blur: $t("blur", ln.blur)
    },
    cn = {
      background: sn.colors("background"),
      backgroundColor: sn.colors("backgroundColor"),
      backgroundImage: sn.propT("backgroundImage", ln.bgImage),
      backgroundSize: !0,
      backgroundPosition: !0,
      backgroundRepeat: !0,
      backgroundAttachment: !0,
      backgroundClip: {
        transform: ln.bgClip
      },
      bgSize: sn.prop("backgroundSize"),
      bgPosition: sn.prop("backgroundPosition"),
      bg: sn.colors("background"),
      bgColor: sn.colors("backgroundColor"),
      bgPos: sn.prop("backgroundPosition"),
      bgRepeat: sn.prop("backgroundRepeat"),
      bgAttachment: sn.prop("backgroundAttachment"),
      bgGradient: sn.propT("backgroundImage", ln.gradient),
      bgClip: {
        transform: ln.bgClip
      }
    };
    Object.assign(cn, {
      bgImage: cn.backgroundImage,
      bgImg: cn.backgroundImage
    });
    var un = {
      border: sn.borders("border"),
      borderWidth: sn.borderWidths("borderWidth"),
      borderStyle: sn.borderStyles("borderStyle"),
      borderColor: sn.colors("borderColor"),
      borderRadius: sn.radii("borderRadius"),
      borderTop: sn.borders("borderTop"),
      borderBlockStart: sn.borders("borderBlockStart"),
      borderTopLeftRadius: sn.radii("borderTopLeftRadius"),
      borderStartStartRadius: sn.logical({
        scale: "radii",
        property: {
          ltr: "borderTopLeftRadius",
          rtl: "borderTopRightRadius"
        }
      }),
      borderEndStartRadius: sn.logical({
        scale: "radii",
        property: {
          ltr: "borderBottomLeftRadius",
          rtl: "borderBottomRightRadius"
        }
      }),
      borderTopRightRadius: sn.radii("borderTopRightRadius"),
      borderStartEndRadius: sn.logical({
        scale: "radii",
        property: {
          ltr: "borderTopRightRadius",
          rtl: "borderTopLeftRadius"
        }
      }),
      borderEndEndRadius: sn.logical({
        scale: "radii",
        property: {
          ltr: "borderBottomRightRadius",
          rtl: "borderBottomLeftRadius"
        }
      }),
      borderRight: sn.borders("borderRight"),
      borderInlineEnd: sn.borders("borderInlineEnd"),
      borderBottom: sn.borders("borderBottom"),
      borderBlockEnd: sn.borders("borderBlockEnd"),
      borderBottomLeftRadius: sn.radii("borderBottomLeftRadius"),
      borderBottomRightRadius: sn.radii("borderBottomRightRadius"),
      borderLeft: sn.borders("borderLeft"),
      borderInlineStart: {
        property: "borderInlineStart",
        scale: "borders"
      },
      borderInlineStartRadius: sn.logical({
        scale: "radii",
        property: {
          ltr: ["borderTopLeftRadius", "borderBottomLeftRadius"],
          rtl: ["borderTopRightRadius", "borderBottomRightRadius"]
        }
      }),
      borderInlineEndRadius: sn.logical({
        scale: "radii",
        property: {
          ltr: ["borderTopRightRadius", "borderBottomRightRadius"],
          rtl: ["borderTopLeftRadius", "borderBottomLeftRadius"]
        }
      }),
      borderX: sn.borders(["borderLeft", "borderRight"]),
      borderInline: sn.borders("borderInline"),
      borderY: sn.borders(["borderTop", "borderBottom"]),
      borderBlock: sn.borders("borderBlock"),
      borderTopWidth: sn.borderWidths("borderTopWidth"),
      borderBlockStartWidth: sn.borderWidths("borderBlockStartWidth"),
      borderTopColor: sn.colors("borderTopColor"),
      borderBlockStartColor: sn.colors("borderBlockStartColor"),
      borderTopStyle: sn.borderStyles("borderTopStyle"),
      borderBlockStartStyle: sn.borderStyles("borderBlockStartStyle"),
      borderBottomWidth: sn.borderWidths("borderBottomWidth"),
      borderBlockEndWidth: sn.borderWidths("borderBlockEndWidth"),
      borderBottomColor: sn.colors("borderBottomColor"),
      borderBlockEndColor: sn.colors("borderBlockEndColor"),
      borderBottomStyle: sn.borderStyles("borderBottomStyle"),
      borderBlockEndStyle: sn.borderStyles("borderBlockEndStyle"),
      borderLeftWidth: sn.borderWidths("borderLeftWidth"),
      borderInlineStartWidth: sn.borderWidths("borderInlineStartWidth"),
      borderLeftColor: sn.colors("borderLeftColor"),
      borderInlineStartColor: sn.colors("borderInlineStartColor"),
      borderLeftStyle: sn.borderStyles("borderLeftStyle"),
      borderInlineStartStyle: sn.borderStyles("borderInlineStartStyle"),
      borderRightWidth: sn.borderWidths("borderRightWidth"),
      borderInlineEndWidth: sn.borderWidths("borderInlineEndWidth"),
      borderRightColor: sn.colors("borderRightColor"),
      borderInlineEndColor: sn.colors("borderInlineEndColor"),
      borderRightStyle: sn.borderStyles("borderRightStyle"),
      borderInlineEndStyle: sn.borderStyles("borderInlineEndStyle"),
      borderTopRadius: sn.radii(["borderTopLeftRadius", "borderTopRightRadius"]),
      borderBottomRadius: sn.radii(["borderBottomLeftRadius", "borderBottomRightRadius"]),
      borderLeftRadius: sn.radii(["borderTopLeftRadius", "borderBottomLeftRadius"]),
      borderRightRadius: sn.radii(["borderTopRightRadius", "borderBottomRightRadius"])
    };
    Object.assign(un, {
      rounded: un.borderRadius,
      roundedTop: un.borderTopRadius,
      roundedTopLeft: un.borderTopLeftRadius,
      roundedTopRight: un.borderTopRightRadius,
      roundedTopStart: un.borderStartStartRadius,
      roundedTopEnd: un.borderStartEndRadius,
      roundedBottom: un.borderBottomRadius,
      roundedBottomLeft: un.borderBottomLeftRadius,
      roundedBottomRight: un.borderBottomRightRadius,
      roundedBottomStart: un.borderEndStartRadius,
      roundedBottomEnd: un.borderEndEndRadius,
      roundedLeft: un.borderLeftRadius,
      roundedRight: un.borderRightRadius,
      roundedStart: un.borderInlineStartRadius,
      roundedEnd: un.borderInlineEndRadius,
      borderStart: un.borderInlineStart,
      borderEnd: un.borderInlineEnd,
      borderTopStartRadius: un.borderStartStartRadius,
      borderTopEndRadius: un.borderStartEndRadius,
      borderBottomStartRadius: un.borderEndStartRadius,
      borderBottomEndRadius: un.borderEndEndRadius,
      borderStartRadius: un.borderInlineStartRadius,
      borderEndRadius: un.borderInlineEndRadius,
      borderStartWidth: un.borderInlineStartWidth,
      borderEndWidth: un.borderInlineEndWidth,
      borderStartColor: un.borderInlineStartColor,
      borderEndColor: un.borderInlineEndColor,
      borderStartStyle: un.borderInlineStartStyle,
      borderEndStyle: un.borderInlineEndStyle
    });
    var dn = {
      color: sn.colors("color"),
      textColor: sn.colors("color"),
      fill: sn.colors("fill"),
      stroke: sn.colors("stroke")
    },
    fn = {
      boxShadow: sn.shadows("boxShadow"),
      mixBlendMode: !0,
      blendMode: sn.prop("mixBlendMode"),
      backgroundBlendMode: !0,
      bgBlendMode: sn.prop("backgroundBlendMode"),
      opacity: !0
    };
    Object.assign(fn, {
      shadow: fn.boxShadow
    });
    var pn = {
      filter: {
        transform: ln.filter
      },
      blur: sn.blur("--chakra-blur"),
      brightness: sn.propT("--chakra-brightness", ln.brightness),
      contrast: sn.propT("--chakra-contrast", ln.contrast),
      hueRotate: sn.degreeT("--chakra-hue-rotate"),
      invert: sn.propT("--chakra-invert", ln.invert),
      saturate: sn.propT("--chakra-saturate", ln.saturate),
      dropShadow: sn.propT("--chakra-drop-shadow", ln.dropShadow),
      backdropFilter: {
        transform: ln.backdropFilter
      },
      backdropBlur: sn.blur("--chakra-backdrop-blur"),
      backdropBrightness: sn.propT("--chakra-backdrop-brightness", ln.brightness),
      backdropContrast: sn.propT("--chakra-backdrop-contrast", ln.contrast),
      backdropHueRotate: sn.degreeT("--chakra-backdrop-hue-rotate"),
      backdropInvert: sn.propT("--chakra-backdrop-invert", ln.invert),
      backdropSaturate: sn.propT("--chakra-backdrop-saturate", ln.saturate)
    },
    gn = {
      alignItems: !0,
      alignContent: !0,
      justifyItems: !0,
      justifyContent: !0,
      flexWrap: !0,
      flexDirection: {
        transform: ln.flexDirection
      },
      experimental_spaceX: {
        static: Zt,
        transform: Ut({
          scale: "space",
          transform: function(e) {
            return null !== e ? {
              "--chakra-space-x": e
            }: null
          }
        })
      },
      experimental_spaceY: {
        static: Jt,
        transform: Ut({
          scale: "space",
          transform: function(e) {
            return null != e ? {
              "--chakra-space-y": e
            }: null
          }
        })
      },
      flex: !0,
      flexFlow: !0,
      flexGrow: !0,
      flexShrink: !0,
      flexBasis: sn.sizes("flexBasis"),
      justifySelf: !0,
      alignSelf: !0,
      order: !0,
      placeItems: !0,
      placeContent: !0,
      placeSelf: !0,
      gap: sn.space("gap"),
      rowGap: sn.space("rowGap"),
      columnGap: sn.space("columnGap")
    };
    Object.assign(gn, {
      flexDir: gn.flexDirection
    });
    var vn = {
      gridGap: sn.space("gridGap"),
      gridColumnGap: sn.space("gridColumnGap"),
      gridRowGap: sn.space("gridRowGap"),
      gridColumn: !0,
      gridRow: !0,
      gridAutoFlow: !0,
      gridAutoColumns: !0,
      gridColumnStart: !0,
      gridColumnEnd: !0,
      gridRowStart: !0,
      gridRowEnd: !0,
      gridAutoRows: !0,
      gridTemplate: !0,
      gridTemplateColumns: !0,
      gridTemplateRows: !0,
      gridTemplateAreas: !0,
      gridArea: !0
    },
    mn = {
      appearance: !0,
      cursor: !0,
      resize: !0,
      userSelect: !0,
      pointerEvents: !0,
      outline: {
        transform: ln.outline
      },
      outlineOffset: !0,
      outlineColor: sn.colors("outlineColor")
    },
    hn = {
      width: sn.sizesT("width"),
      inlineSize: sn.sizesT("inlineSize"),
      height: sn.sizes("height"),
      blockSize: sn.sizes("blockSize"),
      boxSize: sn.sizes(["width", "height"]),
      minWidth: sn.sizes("minWidth"),
      minInlineSize: sn.sizes("minInlineSize"),
      minHeight: sn.sizes("minHeight"),
      minBlockSize: sn.sizes("minBlockSize"),
      maxWidth: sn.sizes("maxWidth"),
      maxInlineSize: sn.sizes("maxInlineSize"),
      maxHeight: sn.sizes("maxHeight"),
      maxBlockSize: sn.sizes("maxBlockSize"),
      overflow: !0,
      overflowX: !0,
      overflowY: !0,
      overscrollBehavior: !0,
      overscrollBehaviorX: !0,
      overscrollBehaviorY: !0,
      display: !0,
      verticalAlign: !0,
      boxSizing: !0,
      boxDecorationBreak: !0,
      float: sn.propT("float", ln.float),
      objectFit: !0,
      objectPosition: !0,
      visibility: !0,
      isolation: !0
    };
    Object.assign(hn, {
      w: hn.width,
      h: hn.height,
      minW: hn.minWidth,
      maxW: hn.maxWidth,
      minH: hn.minHeight,
      maxH: hn.maxHeight,
      overscroll: hn.overscrollBehavior,
      overscrollX: hn.overscrollBehaviorX,
      overscrollY: hn.overscrollBehaviorY
    });
    var yn = {
      listStyleType: !0,
      listStylePosition: !0,
      listStylePos: sn.prop("listStylePosition"),
      listStyleImage: !0,
      listStyleImg: sn.prop("listStyleImage")
    };
    var bn = function(e) {
      var t = new WeakMap;
      return function(n, r, a, o) {
        if ("undefined" === typeof n) return e(n, r, a);
        t.has(n) || t.set(n, new Map);
        var i = t.get(n);
        if (i.has(r)) return i.get(r);
        var l = e(n, r, a, o);
        return i.set(r, l),
        l
      }
    } ((function(e, t, n, r) {
      var a = "string" === typeof t ? t.split(".") : [t];
      for (r = 0; r < a.length && e; r += 1) e = e[a[r]];
      return void 0 === e ? n: e
    })),
    xn = {
      border: "0px",
      clip: "rect(0, 0, 0, 0)",
      width: "1px",
      height: "1px",
      margin: "-1px",
      padding: "0px",
      overflow: "hidden",
      whiteSpace: "nowrap",
      position: "absolute"
    },
    wn = {
      position: "static",
      width: "auto",
      height: "auto",
      clip: "auto",
      padding: "0",
      margin: "0",
      overflow: "visible",
      whiteSpace: "normal"
    },
    kn = function(e, t, n) {
      var r = {},
      a = bn(e, t, {});
      for (var o in a) {
        o in n && null != n[o] || (r[o] = a[o])
      }
      return r
    },
    _n = {
      srOnly: {
        transform: function(e) {
          return ! 0 === e ? xn: "focusable" === e ? wn: {}
        }
      },
      layerStyle: {
        processResult: !0,
        transform: function(e, t, n) {
          return kn(t, "layerStyles.".concat(e), n)
        }
      },
      textStyle: {
        processResult: !0,
        transform: function(e, t, n) {
          return kn(t, "textStyles.".concat(e), n)
        }
      },
      apply: {
        processResult: !0,
        transform: function(e, t, n) {
          return kn(t, e, n)
        }
      }
    },
    Sn = {
      position: !0,
      pos: sn.prop("position"),
      zIndex: sn.prop("zIndex", "zIndices"),
      inset: sn.spaceT("inset"),
      insetX: sn.spaceT(["left", "right"]),
      insetInline: sn.spaceT("insetInline"),
      insetY: sn.spaceT(["top", "bottom"]),
      insetBlock: sn.spaceT("insetBlock"),
      top: sn.spaceT("top"),
      insetBlockStart: sn.spaceT("insetBlockStart"),
      bottom: sn.spaceT("bottom"),
      insetBlockEnd: sn.spaceT("insetBlockEnd"),
      left: sn.spaceT("left"),
      insetInlineStart: sn.logical({
        scale: "space",
        property: {
          ltr: "left",
          rtl: "right"
        }
      }),
      right: sn.spaceT("right"),
      insetInlineEnd: sn.logical({
        scale: "space",
        property: {
          ltr: "right",
          rtl: "left"
        }
      })
    };
    Object.assign(Sn, {
      insetStart: Sn.insetInlineStart,
      insetEnd: Sn.insetInlineEnd
    });
    var En = {
      ring: {
        transform: ln.ring
      },
      ringColor: sn.colors("--chakra-ring-color"),
      ringOffset: sn.prop("--chakra-ring-offset-width"),
      ringOffsetColor: sn.colors("--chakra-ring-offset-color"),
      ringInset: sn.prop("--chakra-ring-inset")
    },
    Cn = {
      margin: sn.spaceT("margin"),
      marginTop: sn.spaceT("marginTop"),
      marginBlockStart: sn.spaceT("marginBlockStart"),
      marginRight: sn.spaceT("marginRight"),
      marginInlineEnd: sn.spaceT("marginInlineEnd"),
      marginBottom: sn.spaceT("marginBottom"),
      marginBlockEnd: sn.spaceT("marginBlockEnd"),
      marginLeft: sn.spaceT("marginLeft"),
      marginInlineStart: sn.spaceT("marginInlineStart"),
      marginX: sn.spaceT(["marginInlineStart", "marginInlineEnd"]),
      marginInline: sn.spaceT("marginInline"),
      marginY: sn.spaceT(["marginTop", "marginBottom"]),
      marginBlock: sn.spaceT("marginBlock"),
      padding: sn.space("padding"),
      paddingTop: sn.space("paddingTop"),
      paddingBlockStart: sn.space("paddingBlockStart"),
      paddingRight: sn.space("paddingRight"),
      paddingBottom: sn.space("paddingBottom"),
      paddingBlockEnd: sn.space("paddingBlockEnd"),
      paddingLeft: sn.space("paddingLeft"),
      paddingInlineStart: sn.space("paddingInlineStart"),
      paddingInlineEnd: sn.space("paddingInlineEnd"),
      paddingX: sn.space(["paddingInlineStart", "paddingInlineEnd"]),
      paddingInline: sn.space("paddingInline"),
      paddingY: sn.space(["paddingTop", "paddingBottom"]),
      paddingBlock: sn.space("paddingBlock")
    };
    Object.assign(Cn, {
      m: Cn.margin,
      mt: Cn.marginTop,
      mr: Cn.marginRight,
      me: Cn.marginInlineEnd,
      marginEnd: Cn.marginInlineEnd,
      mb: Cn.marginBottom,
      ml: Cn.marginLeft,
      ms: Cn.marginInlineStart,
      marginStart: Cn.marginInlineStart,
      mx: Cn.marginX,
      my: Cn.marginY,
      p: Cn.padding,
      pt: Cn.paddingTop,
      py: Cn.paddingY,
      px: Cn.paddingX,
      pb: Cn.paddingBottom,
      pl: Cn.paddingLeft,
      ps: Cn.paddingInlineStart,
      paddingStart: Cn.paddingInlineStart,
      pr: Cn.paddingRight,
      pe: Cn.paddingInlineEnd,
      paddingEnd: Cn.paddingInlineEnd
    });
    var An = {
      textDecorationColor: sn.colors("textDecorationColor"),
      textDecoration: !0,
      textDecor: {
        property: "textDecoration"
      },
      textDecorationLine: !0,
      textDecorationStyle: !0,
      textDecorationThickness: !0,
      textUnderlineOffset: !0,
      textShadow: sn.shadows("textShadow")
    },
    Pn = {
      clipPath: !0,
      transform: sn.propT("transform", ln.transform),
      transformOrigin: !0,
      translateX: sn.spaceT("--chakra-translate-x"),
      translateY: sn.spaceT("--chakra-translate-y"),
      skewX: sn.degreeT("--chakra-skew-x"),
      skewY: sn.degreeT("--chakra-skew-y"),
      scaleX: sn.prop("--chakra-scale-x"),
      scaleY: sn.prop("--chakra-scale-y"),
      scale: sn.prop(["--chakra-scale-x", "--chakra-scale-y"]),
      rotate: sn.degreeT("--chakra-rotate")
    },
    Tn = {
      transition: !0,
      transitionDelay: !0,
      animation: !0,
      willChange: !0,
      transitionDuration: sn.prop("transitionDuration", "transition.duration"),
      transitionProperty: sn.prop("transitionProperty", "transition.property"),
      transitionTimingFunction: sn.prop("transitionTimingFunction", "transition.easing")
    },
    zn = {
      fontFamily: sn.prop("fontFamily", "fonts"),
      fontSize: sn.prop("fontSize", "fontSizes", ln.px),
      fontWeight: sn.prop("fontWeight", "fontWeights"),
      lineHeight: sn.prop("lineHeight", "lineHeights"),
      letterSpacing: sn.prop("letterSpacing", "letterSpacings"),
      textAlign: !0,
      fontStyle: !0,
      textIndent: !0,
      wordBreak: !0,
      overflowWrap: !0,
      textOverflow: !0,
      textTransform: !0,
      whiteSpace: !0,
      noOfLines: {
        static: {
          overflow: "hidden",
          textOverflow: "ellipsis",
          display: "-webkit-box",
          WebkitBoxOrient: "vertical",
          WebkitLineClamp: "var(--chakra-line-clamp)"
        },
        property: "--chakra-line-clamp"
      }
    },
    jn = {
      scrollBehavior: !0,
      scrollSnapAlign: !0,
      scrollSnapStop: !0,
      scrollSnapType: !0,
      scrollMargin: sn.spaceT("scrollMargin"),
      scrollMarginTop: sn.spaceT("scrollMarginTop"),
      scrollMarginBottom: sn.spaceT("scrollMarginBottom"),
      scrollMarginLeft: sn.spaceT("scrollMarginLeft"),
      scrollMarginRight: sn.spaceT("scrollMarginRight"),
      scrollMarginX: sn.spaceT(["scrollMarginLeft", "scrollMarginRight"]),
      scrollMarginY: sn.spaceT(["scrollMarginTop", "scrollMarginBottom"]),
      scrollPadding: sn.spaceT("scrollPadding"),
      scrollPaddingTop: sn.spaceT("scrollPaddingTop"),
      scrollPaddingBottom: sn.spaceT("scrollPaddingBottom"),
      scrollPaddingLeft: sn.spaceT("scrollPaddingLeft"),
      scrollPaddingRight: sn.spaceT("scrollPaddingRight"),
      scrollPaddingX: sn.spaceT(["scrollPaddingLeft", "scrollPaddingRight"]),
      scrollPaddingY: sn.spaceT(["scrollPaddingTop", "scrollPaddingBottom"])
    };
    function Rn(e) {
      return Ft(e) && e.reference ? e.reference: String(e)
    }
    var Mn = function(e) {
      for (var t = arguments.length,
      n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
      return n.map(Rn).join(" ".concat(e, " ")).replace(/calc/g, "")
    },
    Nn = function() {
      for (var e = arguments.length,
      t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
      return "calc(".concat(Mn.apply(void 0, ["+"].concat(t)), ")")
    },
    On = function() {
      for (var e = arguments.length,
      t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
      return "calc(".concat(Mn.apply(void 0, ["-"].concat(t)), ")")
    },
    Bn = function() {
      for (var e = arguments.length,
      t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
      return "calc(".concat(Mn.apply(void 0, ["*"].concat(t)), ")")
    },
    Ln = function() {
      for (var e = arguments.length,
      t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
      return "calc(".concat(Mn.apply(void 0, ["/"].concat(t)), ")")
    },
    Fn = function(e) {
      var t = Rn(e);
      return null == t || Number.isNaN(parseFloat(t)) ? Bn(t, -1) : String(t).startsWith("-") ? String(t).slice(1) : "-".concat(t)
    },
    Dn = Object.assign((function(e) {
      return {
        add: function() {
          for (var t = arguments.length,
          n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
          return Dn(Nn.apply(void 0, [e].concat(n)))
        },
        subtract: function() {
          for (var t = arguments.length,
          n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
          return Dn(On.apply(void 0, [e].concat(n)))
        },
        multiply: function() {
          for (var t = arguments.length,
          n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
          return Dn(Bn.apply(void 0, [e].concat(n)))
        },
        divide: function() {
          for (var t = arguments.length,
          n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
          return Dn(Ln.apply(void 0, [e].concat(n)))
        },
        negate: function() {
          return Dn(Fn(e))
        },
        toString: function() {
          return e.toString()
        }
      }
    }), {
      add: Nn,
      subtract: On,
      multiply: Bn,
      divide: Ln,
      negate: Fn
    });
    function In(e) {
      var t = function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "-";
        return e.replace(/\s+/g, t)
      } (e.toString());
      return function(e) {
        return e.replace(/[!-,/: -@ [ - ^` { - ~] / g, "\\$&")
        } (function(e) {
          if (e.includes("\\.")) return e;
          var t = !Number.isInteger(parseFloat(e.toString()));
          return t ? e.replace(".", "\\.") : e
        } (t))
      }
      function Vn(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        return [t, e].filter(Boolean).join("-")
      }
      function Wn(e, t) {
        return "var(".concat(e).concat(t ? ", ".concat(t) : "", ")")
      }
      function Un(e, t, n) {
        var r = function(e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
          return In("--".concat(Vn(e, t)))
        } (e, n);
        return {
          variable: r,
          reference: Wn(r, t)
        }
      }
      function Hn(e) {
        var t = null == e ? 0 : e.length;
        return t ? e[t - 1] : void 0
      }
      function $n(e) {
        if (null == e) return e;
        var t = function(e) {
          var t = parseFloat(e.toString()),
          n = e.toString().replace(String(t), "");
          return {
            unitless: !n,
            value: t,
            unit: n
          }
        } (e);
        return t.unitless || "number" === typeof e ? "".concat(e, "px") : e
      }
      var qn = function(e, t) {
        return parseInt(e[1], 10) > parseInt(t[1], 10) ? 1 : -1
      },
      Gn = function(e) {
        return Object.fromEntries(Object.entries(e).sort(qn))
      };
      function Yn(e) {
        var t = Gn(e);
        return Object.assign(Object.values(t), t)
      }
      function Xn(e) {
        var t;
        if (!e) return e;
        var n = (e = null !== (t = $n(e)) && void 0 !== t ? t: e).endsWith("px") ? -1 : -.0625;
        return "number" === typeof e ? "".concat(e + n) : e.replace(/([0-9]+\.?[0-9]*)/, (function(e) {
          return "".concat(parseFloat(e) + n)
        }))
      }
      function Kn(e, t) {
        var n = ["@media screen"];
        return e && n.push("and", "(min-width: ".concat($n(e), ")")),
        t && n.push("and", "(max-width: ".concat($n(t), ")")),
        n.join(" ")
      }
      function Qn(e) {
        var t;
        if (!e) return null;
        e.base = null !== (t = e.base) && void 0 !== t ? t: "0px";
        var n = Yn(e),
        r = Object.entries(e).sort(qn).map((function(e, t, n) {
          var r, a = Ye(e, 2),
          o = a[0],
          i = a[1],
          l = Ye(null !== (r = n[t + 1]) && void 0 !== r ? r: [], 2)[1];
          return l = parseFloat(l) > 0 ? Xn(l) : void 0,
          {
            _minW: Xn(i),
            breakpoint: o,
            minW: i,
            maxW: l,
            maxWQuery: Kn(null, l),
            minWQuery: Kn(i),
            minMaxQuery: Kn(i, l)
          }
        })),
        a = function(e) {
          var t = Object.keys(Gn(e));
          return new Set(t)
        } (e),
        o = Array.from(a.values());
        return {
          keys: a,
          normalized: n,
          isResponsive: function(e) {
            var t = Object.keys(e);
            return t.length > 0 && t.every((function(e) {
              return a.has(e)
            }))
          },
          asObject: Gn(e),
          asArray: Yn(e),
          details: r,
          media: [null].concat(pt(n.map((function(e) {
            return Kn(e)
          })).slice(1))),
          toArrayValue: function(e) {
            if (!Ft(e)) throw new Error("toArrayValue: value must be an object");
            for (var t = o.map((function(t) {
              var n;
              return null !== (n = e[t]) && void 0 !== n ? n: null
            })); null === Hn(t);) t.pop();
            return t
          },
          toObjectValue: function(e) {
            if (!Array.isArray(e)) throw new Error("toObjectValue: value must be an array");
            return e.reduce((function(e, t, n) {
              var r = o[n];
              return null != r && null != t && (e[r] = t),
              e
            }), {})
          }
        }
      }
      var Zn = function(e, t) {
        return "".concat(e, ":hover ").concat(t, ", ").concat(e, "[data-hover] ").concat(t)
      },
      Jn = function(e, t) {
        return "".concat(e, ":focus ").concat(t, ", ").concat(e, "[data-focus] ").concat(t)
      },
      er = function(e, t) {
        return "".concat(e, ":focus-visible ").concat(t)
      },
      tr = function(e, t) {
        return "".concat(e, ":focus-within ").concat(t)
      },
      nr = function(e, t) {
        return "".concat(e, ":active ").concat(t, ", ").concat(e, "[data-active] ").concat(t)
      },
      rr = function(e, t) {
        return "".concat(e, ":disabled ").concat(t, ", ").concat(e, "[data-disabled] ").concat(t)
      },
      ar = function(e, t) {
        return "".concat(e, ":invalid ").concat(t, ", ").concat(e, "[data-invalid] ").concat(t)
      },
      or = function(e, t) {
        return "".concat(e, ":checked ").concat(t, ", ").concat(e, "[data-checked] ").concat(t)
      },
      ir = function(e, t) {
        return "".concat(e, ":placeholder-shown ").concat(t)
      },
      lr = function(e) {
        return cr((function(t) {
          return e(t, "&")
        }), "[role=group]", "[data-group]", ".group")
      },
      sr = function(e) {
        return cr((function(t) {
          return e(t, "~ &")
        }), "[data-peer]", ".peer")
      },
      cr = function(e) {
        for (var t = arguments.length,
        n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
        return n.map(e).join(", ")
      },
      ur = {
        _hover: "&:hover, &[data-hover]",
        _active: "&:active, &[data-active]",
        _focus: "&:focus, &[data-focus]",
        _highlighted: "&[data-highlighted]",
        _focusWithin: "&:focus-within",
        _focusVisible: "&:focus-visible, &[data-focus-visible]",
        _disabled: "&:disabled, &[disabled], &[aria-disabled=true], &[data-disabled]",
        _readOnly: "&[aria-readonly=true], &[readonly], &[data-readonly]",
        _before: "&::before",
        _after: "&::after",
        _empty: "&:empty",
        _expanded: "&[aria-expanded=true], &[data-expanded]",
        _checked: "&[aria-checked=true], &[data-checked]",
        _grabbed: "&[aria-grabbed=true], &[data-grabbed]",
        _pressed: "&[aria-pressed=true], &[data-pressed]",
        _invalid: "&[aria-invalid=true], &[data-invalid]",
        _valid: "&[data-valid], &[data-state=valid]",
        _loading: "&[data-loading], &[aria-busy=true]",
        _selected: "&[aria-selected=true], &[data-selected]",
        _hidden: "&[hidden], &[data-hidden]",
        _autofill: "&:-webkit-autofill",
        _even: "&:nth-of-type(even)",
        _odd: "&:nth-of-type(odd)",
        _first: "&:first-of-type",
        _last: "&:last-of-type",
        _notFirst: "&:not(:first-of-type)",
        _notLast: "&:not(:last-of-type)",
        _visited: "&:visited",
        _activeLink: "&[aria-current=page]",
        _activeStep: "&[aria-current=step]",
        _indeterminate: "&:indeterminate, &[aria-checked=mixed], &[data-indeterminate]",
        _groupHover: lr(Zn),
        _peerHover: sr(Zn),
        _groupFocus: lr(Jn),
        _peerFocus: sr(Jn),
        _groupFocusVisible: lr(er),
        _peerFocusVisible: sr(er),
        _groupActive: lr(nr),
        _peerActive: sr(nr),
        _groupDisabled: lr(rr),
        _peerDisabled: sr(rr),
        _groupInvalid: lr(ar),
        _peerInvalid: sr(ar),
        _groupChecked: lr(or),
        _peerChecked: sr(or),
        _groupFocusWithin: lr(tr),
        _peerFocusWithin: sr(tr),
        _peerPlaceholderShown: sr(ir),
        _placeholder: "&::placeholder",
        _placeholderShown: "&:placeholder-shown",
        _fullScreen: "&:fullscreen",
        _selection: "&::selection",
        _rtl: "[dir=rtl] &, &[dir=rtl]",
        _ltr: "[dir=ltr] &, &[dir=ltr]",
        _mediaDark: "@media (prefers-color-scheme: dark)",
        _mediaReduceMotion: "@media (prefers-reduced-motion: reduce)",
        _dark: ".chakra-ui-dark &:not([data-theme]),[data-theme=dark] &:not([data-theme]),&[data-theme=dark]",
        _light: ".chakra-ui-light &:not([data-theme]),[data-theme=light] &:not([data-theme]),&[data-theme=light]"
      },
      dr = Object.keys(ur);
      function fr(e, t) {
        return Un(String(e).replace(/\./g, "-"), void 0, t)
      }
      function pr(e, t) {
        for (var n = {},
        r = {},
        a = function() {
          var a = Ye(i[o], 2),
          s = a[0],
          c = a[1],
          u = c.isSemantic,
          d = c.value,
          f = fr(s, null == t ? void 0 : t.cssVarPrefix),
          p = f.variable,
          g = f.reference;
          if (!u) {
            if (s.startsWith("space")) {
              var v = jt(s.split(".")),
              m = v[0],
              h = v.slice(1),
              y = "".concat(m, ".-").concat(h.join(".")),
              b = Dn.negate(d),
              x = Dn.negate(g);
              r[y] = {
                value: b,
                var: p,
                varRef: x
              }
            }
            return n[p] = d,
            r[s] = {
              value: d,
              var: p,
              varRef: g
            },
            "continue"
          }
          var w = Ft(d) ? d: {
          default:
            d
          };
          n = Bt()(n, Object.entries(w).reduce((function(n, r) {
            var a, o, i = Ye(r, 2),
            c = i[0],
            u = function(n) {
              var r = [String(s).split(".")[0], n].join(".");
              return e[r] ? fr(r, null == t ? void 0 : t.cssVarPrefix).reference: n
            } (i[1]);
            return "default" === c ? (n[p] = u, n) : (n[null !== (a = null == (o = ur) ? void 0 : o[c]) && void 0 !== a ? a: c] = l({},
            p, u), n)
          }), {})),
          r[s] = {
            value: g,
            var: p,
            varRef: g
          }
        },
        o = 0, i = Object.entries(e); o < i.length; o++) a();
        return {
          cssVars: n,
          cssMap: r
        }
      }
      var gr = ["colors", "borders", "borderWidths", "borderStyles", "fonts", "fontSizes", "fontWeights", "letterSpacings", "lineHeights", "radii", "space", "shadows", "sizes", "zIndices", "transition", "blur"];
      function vr(e) {
        return function(e, t) {
          var n, r = {},
          a = zt(t);
          try {
            for (a.s(); ! (n = a.n()).done;) {
              var o = n.value;
              o in e && (r[o] = e[o])
            }
          } catch(i) {
            a.e(i)
          } finally {
            a.f()
          }
          return r
        } (e, gr)
      }
      function mr(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1 / 0;
        return (Ft(e) || Array.isArray(e)) && t ? Object.entries(e).reduce((function(e, n) {
          var r = Ye(n, 2),
          a = r[0],
          o = r[1];
          return Ft(o) || Array.isArray(o) ? Object.entries(mr(o, t - 1)).forEach((function(t) {
            var n = Ye(t, 2),
            r = n[0],
            o = n[1];
            e["".concat(a, ".").concat(r)] = o
          })) : e[a] = o,
          e
        }), {}) : e
      }
      function hr(e) {
        var t, n = function(e) {
          return e.__cssMap,
          e.__cssVars,
          e.__breakpoints,
          u(e, Lt)
        } (e),
        r = vr(n),
        a = function(e) {
          return e.semanticTokens
        } (n),
        o = function(e) {
          var t, n, r = e.tokens,
          a = e.semanticTokens,
          o = Object.entries(null !== (t = mr(r)) && void 0 !== t ? t: {}).map((function(e) {
            var t = Ye(e, 2);
            return [t[0], {
              isSemantic: !1,
              value: t[1]
            }]
          })),
          i = Object.entries(null !== (n = mr(a, 1)) && void 0 !== n ? n: {}).map((function(e) {
            var t = Ye(e, 2);
            return [t[0], {
              isSemantic: !0,
              value: t[1]
            }]
          }));
          return Object.fromEntries([].concat(pt(o), pt(i)))
        } ({
          tokens: r,
          semanticTokens: a
        }),
        i = pr(o, {
          cssVarPrefix: null == (t = n.config) ? void 0 : t.cssVarPrefix
        }),
        l = i.cssMap,
        s = i.cssVars;
        return Object.assign(n, {
          __cssVars: c(c({},
          {
            "--chakra-ring-inset": "var(--chakra-empty,/*!*/ /*!*/)",
            "--chakra-ring-offset-width": "0px",
            "--chakra-ring-offset-color": "#fff",
            "--chakra-ring-color": "rgba(66, 153, 225, 0.6)",
            "--chakra-ring-offset-shadow": "0 0 #0000",
            "--chakra-ring-shadow": "0 0 #0000",
            "--chakra-space-x-reverse": "0",
            "--chakra-space-y-reverse": "0"
          }), s),
          __cssMap: l,
          __breakpoints: Qn(n.breakpoints)
        }),
        n
      }
      var yr = Bt()({},
      cn, un, dn, gn, hn, pn, En, mn, vn, _n, Sn, fn, Cn, jn, zn, An, Pn, yn, Tn),
      br = Object.assign({},
      Cn, hn, gn, vn, Sn),
      xr = (Object.keys(br), [].concat(pt(Object.keys(yr)), dr)),
      wr = c(c({},
      yr), ur),
      kr = function(e) {
        return e in wr
      },
      _r = function(e) {
        return function(t) {
          if (!t.__breakpoints) return e;
          var n = t.__breakpoints,
          r = n.isResponsive,
          a = n.toArrayValue,
          o = n.media,
          i = {};
          for (var l in e) {
            var s = Dt(e[l], t);
            if (null != s) if (s = Ft(s) && r(s) ? a(s) : s, Array.isArray(s)) for (var c = s.slice(0, o.length).length, u = 0; u < c; u += 1) {
              var d = null == o ? void 0 : o[u];
              d ? (i[d] = i[d] || {},
              null != s[u] && (i[d][l] = s[u])) : i[l] = s[u]
            } else i[l] = s
          }
          return i
        }
      };
      var Sr = function(e, t) {
        return e.startsWith("--") && "string" === typeof t && !
        function(e) {
          return /^var\(--.+\)$/.test(e)
        } (t)
      },
      Er = function(e, t) {
        var n, r;
        if (null == t) return t;
        var a = function(t) {
          var n, r;
          return null == (r = null == (n = e.__cssMap) ? void 0 : n[t]) ? void 0 : r.varRef
        },
        o = function(e) {
          var t;
          return null !== (t = a(e)) && void 0 !== t ? t: e
        },
        i = function(e) {
          for (var t = [], n = "", r = !1, a = 0; a < e.length; a++) {
            var o = e[a];
            "(" === o ? (r = !0, n += o) : ")" === o ? (r = !1, n += o) : "," !== o || r ? n += o: (t.push(n), n = "")
          }
          return (n = n.trim()) && t.push(n),
          t
        } (t),
        l = Ye(i, 2),
        s = l[0],
        c = l[1];
        return t = null !== (n = null !== (r = a(s)) && void 0 !== r ? r: o(c)) && void 0 !== n ? n: o(t)
      };
      var Cr = function(e) {
        return function(t) {
          var n = function(e) {
            var t = e.configs,
            n = void 0 === t ? {}: t,
            r = e.pseudos,
            a = void 0 === r ? {}: r,
            o = e.theme;
            return function e(t) {
              var r, i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              l = Dt(t, o),
              s = _r(l)(o),
              c = {};
              for (var u in s) {
                var d, f = Dt(s[u], o);
                u in a && (u = a[u]),
                Sr(u, f) && (f = Er(o, f));
                var p = n[u];
                if (!0 === p && (p = {
                  property: u
                }), Ft(f)) {
                  var g;
                  c[u] = null !== (g = c[u]) && void 0 !== g ? g: {},
                  c[u] = Bt()({},
                  c[u], e(f, !0))
                } else {
                  var v = null !== (d = null == (r = null == p ? void 0 : p.transform) ? void 0 : r.call(p, f, o, l)) && void 0 !== d ? d: f;
                  v = (null == p ? void 0 : p.processResult) ? e(v, !0) : v;
                  var m = Dt(null == p ? void 0 : p.property, o);
                  if (!i && (null == p ? void 0 : p.static)) {
                    var h = Dt(p.static, o);
                    c = Bt()({},
                    c, h)
                  }
                  if (m && Array.isArray(m)) {
                    var y, b = zt(m);
                    try {
                      for (b.s(); ! (y = b.n()).done;) {
                        c[y.value] = v
                      }
                    } catch(x) {
                      b.e(x)
                    } finally {
                      b.f()
                    }
                  } else m ? "&" === m && Ft(v) ? c = Bt()({},
                  c, v) : c[m] = v: Ft(v) ? c = Bt()({},
                  c, v) : c[u] = v
                }
              }
              return c
            }
          } ({
            theme: t,
            pseudos: ur,
            configs: yr
          });
          return n(e)
        }
      };
      function Ar(e) {
        return {
          definePartsStyle: function(e) {
            return e
          },
          defineMultiStyleConfig: function(t) {
            return c({
              parts: e
            },
            t)
          }
        }
      }
      function Pr(e) {
        var t = e.__breakpoints;
        return function(e, n, r, a) {
          var o, i;
          if (t) {
            var s = {},
            c = function(e, t) {
              return Array.isArray(e) ? e: Ft(e) ? t(e) : null != e ? [e] : void 0
            } (r, t.toArrayValue);
            if (!c) return s;
            for (var u = c.length,
            d = 1 === u,
            f = !!e.parts,
            p = function(r) {
              var u = t.details[r],
              p = t.details[function(e, t) {
                for (var n = t + 1; n < e.length; n++) if (null != e[n]) return n;
                return - 1
              } (c, r)],
              g = Kn(u.minW, null == p ? void 0 : p._minW),
              v = Dt(null == (o = e[n]) ? void 0 : o[c[r]], a);
              return v ? f ? (null == (i = e.parts) || i.forEach((function(e) {
                Bt()(s, l({},
                e, d ? v[e] : l({},
                g, v[e])))
              })), "continue") : f ? void(s[g] = v) : (d ? Bt()(s, v) : s[g] = v, "continue") : "continue"
            },
            g = 0; g < u; g++) p(g);
            return s
          }
        }
      }
      function Tr(e) {
        return function(t) {
          var n, r = t.variant,
          a = t.size,
          o = Pr(t.theme);
          return Bt()({},
          Dt(null !== (n = e.baseStyle) && void 0 !== n ? n: {},
          t), o(e, "sizes", a, t), o(e, "variants", r, t))
        }
      }
      function zr(e) {
        return function(e) {
          var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          r = Object.assign({},
          e),
          a = zt(n);
          try {
            for (a.s(); ! (t = a.n()).done;) {
              var o = t.value;
              o in r && delete r[o]
            }
          } catch(i) {
            a.e(i)
          } finally {
            a.f()
          }
          return r
        } (e, ["styleConfig", "size", "variant", "colorScheme"])
      }
      var jr = 1 / 60 * 1e3,
      Rr = "undefined" !== typeof performance ?
      function() {
        return performance.now()
      }: function() {
        return Date.now()
      };
      function Mr(e) {
        return "function" === typeof e
      }
      function Nr(e, t) {
        var n = {};
        return Object.keys(e).forEach((function(r) {
          t.includes(r) || (n[r] = e[r])
        })),
        n
      }
      var Or = function(e) {
        var t = new WeakMap;
        return function(n, r, a, o) {
          if ("undefined" === typeof n) return e(n, r, a);
          t.has(n) || t.set(n, new Map);
          var i = t.get(n);
          if (i.has(r)) return i.get(r);
          var l = e(n, r, a, o);
          return i.set(r, l),
          l
        }
      } ((function(e, t, n, r) {
        var a = "string" === typeof t ? t.split(".") : [t];
        for (r = 0; r < a.length && e; r += 1) e = e[a[r]];
        return void 0 === e ? n: e
      }));
      function Br(e, t) {
        var n = {};
        return Object.keys(e).forEach((function(r) {
          var a = e[r];
          t(a, r, e) && (n[r] = a)
        })),
        n
      }
      var Lr = function(e) {
        return Br(e, (function(e) {
          return null !== e && void 0 !== e
        }))
      }; ["input:not(:disabled):not([disabled])", "select:not(:disabled):not([disabled])", "textarea:not(:disabled):not([disabled])", "embed", "iframe", "object", "a[href]", "area[href]", "button:not(:disabled):not([disabled])", "[tabindex]", "audio[controls]", "video[controls]", "*[tabindex]:not([aria-disabled])", "*[contenteditable]"].join();
      function Fr(e) {
        for (var t = arguments.length,
        n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
        return Mr(e) ? e.apply(void 0, n) : e
      }
      Number.MIN_SAFE_INTEGER,
      Number.MAX_SAFE_INTEGER;
      Object.freeze(["base", "sm", "md", "lg", "xl", "2xl"]);
      var Dr = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
      Ir = he((function(e) {
        return Dr.test(e) || 111 === e.charCodeAt(0) && 110 === e.charCodeAt(1) && e.charCodeAt(2) < 91
      })),
      Vr = function(e) {
        return "theme" !== e
      },
      Wr = function(e) {
        return "string" === typeof e && e.charCodeAt(0) > 96 ? Ir: Vr
      },
      Ur = function(e, t, n) {
        var r;
        if (t) {
          var a = t.shouldForwardProp;
          r = e.__emotion_forwardProp && a ?
          function(t) {
            return e.__emotion_forwardProp(t) && a(t)
          }: a
        }
        return "function" !== typeof r && n && (r = e.__emotion_forwardProp),
        r
      },
      Hr = function(e) {
        var t = e.cache,
        n = e.serialized,
        r = e.isStringTag;
        Le(t, n, r);
        Te((function() {
          return Fe(t, n, r)
        }));
        return null
      },
      $r = function t(n, r) {
        var a, o, i = n.__emotion_real === n,
        l = i && n.__emotion_base || n;
        void 0 !== r && (a = r.label, o = r.target);
        var s = Ur(n, r, i),
        c = s || Wr(l),
        u = !c("as");
        return function() {
          var d = arguments,
          f = i && void 0 !== n.__emotion_styles ? n.__emotion_styles.slice(0) : [];
          if (void 0 !== a && f.push("label:" + a + ";"), null == d[0] || void 0 === d[0].raw) f.push.apply(f, d);
          else {
            0,
            f.push(d[0][0]);
            for (var p = d.length,
            g = 1; g < p; g++) f.push(d[g], d[0][g])
          }
          var v = Re((function(t, n, r) {
            var a = u && t.as || l,
            i = "",
            d = [],
            p = t;
            if (null == t.theme) {
              for (var g in p = {},
              t) p[g] = t[g];
              p.theme = (0, e.useContext)(Me)
            }
            "string" === typeof t.className ? i = Be(n.registered, d, t.className) : null != t.className && (i = t.className + " ");
            var v = Ae(f.concat(d), n.registered, p);
            i += n.key + "-" + v.name,
            void 0 !== o && (i += " " + o);
            var m = u && void 0 === s ? Wr(a) : c,
            h = {};
            for (var y in t) u && "as" === y || m(y) && (h[y] = t[y]);
            return h.className = i,
            h.ref = r,
            (0, e.createElement)(e.Fragment, null, (0, e.createElement)(Hr, {
              cache: n,
              serialized: v,
              isStringTag: "string" === typeof a
            }), (0, e.createElement)(a, h))
          }));
          return v.displayName = void 0 !== a ? a: "Styled(" + ("string" === typeof l ? l: l.displayName || l.name || "Component") + ")",
          v.defaultProps = n.defaultProps,
          v.__emotion_real = v,
          v.__emotion_base = l,
          v.__emotion_styles = f,
          v.__emotion_forwardProp = s,
          Object.defineProperty(v, "toString", {
            value: function() {
              return "." + o
            }
          }),
          v.withComponent = function(e, n) {
            return t(e, pe({},
            r, n, {
              shouldForwardProp: Ur(v, n, !0)
            })).apply(void 0, f)
          },
          v
        }
      },
      qr = $r.bind(); ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"].forEach((function(e) {
        qr[e] = qr(e)
      }));
      var Gr = qr,
      Yr = n(939),
      Xr = n.n(Yr),
      Kr = ["theme", "css", "__css", "sx"],
      Qr = ["baseStyle"],
      Zr = ["styleConfig"];
      function Jr() {
        var t = (0, e.useContext)(Me);
        if (!t) throw Error("useTheme: `theme` is undefined. Seems you forgot to wrap your app in `<ChakraProvider />` or `<ThemeProvider />`");
        return t
      }
      function ea() {
        var e = vt(),
        t = Jr();
        return c(c({},
        e), {},
        {
          theme: t
        })
      }
      function ta(e, t, n) {
        var r = Array.isArray(t) ? t: [t],
        a = Array.isArray(n) ? n: [n];
        return function(n) {
          var o = a.filter(Boolean),
          i = r.map((function(t, r) {
            var a, i;
            if ("breakpoints" === e) return function(e, t, n) {
              var r, a;
              if (null == t) return t;
              var o = function(t) {
                var n, r;
                return null == (r = null == (n = e.__breakpoints) ? void 0 : n.asArray) ? void 0 : r[t]
              };
              return null !== (r = null !== (a = o(t)) && void 0 !== a ? a: o(n)) && void 0 !== r ? r: n
            } (n, t, null !== (i = o[r]) && void 0 !== i ? i: t);
            var l = "".concat(e, ".").concat(t);
            return function(e, t, n) {
              var r, a;
              if (null == t) return t;
              var o = function(t) {
                var n, r;
                return null == (r = null == (n = e.__cssMap) ? void 0 : n[t]) ? void 0 : r.value
              };
              return null !== (r = null !== (a = o(t)) && void 0 !== a ? a: o(n)) && void 0 !== r ? r: n
            } (n, l, null !== (a = o[r]) && void 0 !== a ? a: t)
          }));
          return Array.isArray(t) ? i: i[0]
        }
      }
      function na(t) {
        var n = t.cssVarsRoot,
        r = t.theme,
        a = t.children,
        o = (0, e.useMemo)((function() {
          return hr(r)
        }), [r]);
        return e.createElement(Oe, {
          theme: o
        },
        e.createElement(ra, {
          root: n
        }), a)
      }
      function ra(t) {
        var n = t.root,
        r = [void 0 === n ? ":host, :root": n, "[data-theme]"].join(",");
        return e.createElement(De, {
          styles: function(e) {
            return l({},
            r, e.__cssVars)
          }
        })
      }
      var aa = function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        n = t.strict,
        r = void 0 === n || n,
        a = t.errorMessage,
        o = void 0 === a ? "useContext: `context` is undefined. Seems you forgot to wrap component within the Provider": a,
        i = t.name,
        l = (0, e.createContext)(void 0);
        function s() {
          var t, n = (0, e.useContext)(l);
          if (!n && r) {
            var a = new Error(o);
            throw a.name = "ContextError",
            null == (t = Error.captureStackTrace) || t.call(Error, a, s),
            a
          }
          return n
        }
        return l.displayName = i,
        [l.Provider, s, l]
      } ({
        name: "StylesContext",
        errorMessage: "useStyles: `styles` is undefined. Seems you forgot to wrap the components in `<StylesProvider />` "
      }),
      oa = Ye(aa, 2);
      oa[0],
      oa[1];
      function ia() {
        var t = vt().colorMode;
        return e.createElement(De, {
          styles: function(e) {
            var n = Fr(Or(e, "styles.global"), {
              theme: e,
              colorMode: t
            });
            if (n) {
              var r = Cr(n)(e);
              return r
            }
          }
        })
      }
      var la = new Set([].concat(pt(xr), ["textStyle", "layerStyle", "apply", "noOfLines", "focusBorderColor", "errorBorderColor", "as", "__css", "css", "sx"])),
      sa = new Set(["htmlWidth", "htmlHeight", "htmlSize"]);
      function ca(e) {
        return sa.has(e) || !la.has(e)
      }
      function ua(t, n) {
        var r = null !== n && void 0 !== n ? n: {},
        a = r.baseStyle,
        o = u(r, Qr);
        o.shouldForwardProp || (o.shouldForwardProp = ca);
        var i = function(e) {
          var t = e.baseStyle;
          return function(e) {
            e.theme;
            var n = e.css,
            r = e.__css,
            a = e.sx,
            o = Br(u(e, Kr), (function(e, t) {
              return kr(t)
            })),
            i = Fr(t, e),
            l = Object.assign({},
            r, i, Lr(o), a),
            s = Cr(l)(e.theme);
            return n ? [s, n] : s
          }
        } ({
          baseStyle: a
        }),
        l = Gr(t, o)(i);
        return e.forwardRef((function(t, n) {
          var r = vt(),
          a = r.colorMode,
          o = r.forced;
          return e.createElement(l, c({
            ref: n,
            "data-theme": o ? a: void 0
          },
          t))
        }))
      }
      function da(t) {
        return (0, e.forwardRef)(t)
      }
      function fa(t) {
        var n, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        a = r.styleConfig,
        o = u(r, Zr),
        i = ea(),
        l = i.theme,
        s = i.colorMode,
        c = t ? Or(l, "components.".concat(t)) : void 0,
        d = a || c,
        f = Bt()({
          theme: l,
          colorMode: s
        },
        null !== (n = null == d ? void 0 : d.defaultProps) && void 0 !== n ? n: {},
        Lr(Nr(o, ["children"]))),
        p = (0, e.useRef)({});
        if (d) {
          var g = Tr(d),
          v = g(f),
          m = Xr()(p.current, v);
          m || (p.current = v)
        }
        return p.current
      }
      function pa(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return fa(e, t)
      }
      function ga(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return fa(e, t)
      }
      var va = function() {
        var e = new Map;
        return new Proxy(ua, {
          apply: function(e, t, n) {
            return ua.apply(void 0, pt(n))
          },
          get: function(t, n) {
            return e.has(n) || e.set(n, ua(n)),
            e.get(n)
          }
        })
      } (),
      ma = {
        body: {
          classList: {
            add: function() {},
            remove: function() {}
          }
        },
        addEventListener: function() {},
        removeEventListener: function() {},
        activeElement: {
          blur: function() {},
          nodeName: ""
        },
        querySelector: function() {
          return null
        },
        querySelectorAll: function() {
          return []
        },
        getElementById: function() {
          return null
        },
        createEvent: function() {
          return {
            initEvent: function() {}
          }
        },
        createElement: function() {
          return {
            children: [],
            childNodes: [],
            style: {},
            setAttribute: function() {},
            getElementsByTagName: function() {
              return []
            }
          }
        }
      },
      ha = function() {},
      ya = {
        document: ma,
        navigator: {
          userAgent: ""
        },
        CustomEvent: function() {
          return this
        },
        addEventListener: ha,
        removeEventListener: ha,
        getComputedStyle: function() {
          return {
            getPropertyValue: function() {
              return ""
            }
          }
        },
        matchMedia: function() {
          return {
            matches: !1,
            addListener: ha,
            removeListener: ha
          }
        },
        requestAnimationFrame: function(e) {
          return "undefined" === typeof setTimeout ? (e(), null) : setTimeout(e, 0)
        },
        cancelAnimationFrame: function(e) {
          "undefined" !== typeof setTimeout && clearTimeout(e)
        },
        setTimeout: function() {
          return 0
        },
        clearTimeout: ha,
        setInterval: function() {
          return 0
        },
        clearInterval: ha
      },
      ba = "undefined" !== typeof window ? {
        window: window,
        document: document
      }: {
        window: ya,
        document: ma
      },
      xa = (0, e.createContext)(ba);
      function wa(t) {
        var n = t.children,
        r = t.environment,
        a = Ye((0, e.useState)(null), 2),
        o = a[0],
        i = a[1],
        l = Ye((0, e.useState)(!1), 2),
        s = l[0],
        c = l[1]; (0, e.useEffect)((function() {
          return c(!0)
        }), []);
        var u = (0, e.useMemo)((function() {
          if (r) return r;
          var e = null == o ? void 0 : o.ownerDocument,
          t = null == o ? void 0 : o.ownerDocument.defaultView;
          return e ? {
            document: e,
            window: t
          }: ba
        }), [o, r]);
        return e.createElement(xa.Provider, {
          value: u
        },
        n, !r && s && e.createElement("span", {
          id: "__chakra_env",
          hidden: !0,
          ref: function(t) { (0, e.startTransition)((function() {
              t && i(t)
            }))
          }
        }))
      }
      xa.displayName = "EnvironmentContext",
      wa.displayName = "EnvironmentProvider";
      var ka = function(t) {
        var n = t.children,
        r = t.colorModeManager,
        a = t.portalZIndex,
        o = t.resetCSS,
        i = void 0 === o || o,
        l = t.theme,
        s = void 0 === l ? {}: l,
        c = t.environment,
        u = t.cssVarsRoot,
        d = e.createElement(wa, {
          environment: c
        },
        n);
        return e.createElement(na, {
          theme: s,
          cssVarsRoot: u
        },
        e.createElement(Et, {
          colorModeManager: r,
          options: s.config
        },
        i ? e.createElement(Ue, null) : e.createElement(We, null), e.createElement(ia, null), a ? e.createElement(rt, {
          zIndex: a
        },
        d) : d))
      };
      function _a(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = !1;
        function r() {
          if (n) throw new Error("[anatomy] .part(...) should only be called once. Did you mean to use .extend(...) ?");
          n = !0
        }
        function a() {
          r();
          for (var n = arguments.length,
          a = new Array(n), o = 0; o < n; o++) a[o] = arguments[o];
          for (var i = 0,
          l = a; i < l.length; i++) {
            var c = l[i];
            t[c] = s(c)
          }
          return _a(e, t)
        }
        function o() {
          for (var n = arguments.length,
          r = new Array(n), a = 0; a < n; a++) r[a] = arguments[a];
          for (var o = 0,
          i = r; o < i.length; o++) {
            var l = i[o];
            l in t || (t[l] = s(l))
          }
          return _a(e, t)
        }
        function i() {
          return Object.fromEntries(Object.entries(t).map((function(e) {
            var t = Ye(e, 2);
            return [t[0], t[1].selector]
          })))
        }
        function l() {
          return Object.fromEntries(Object.entries(t).map((function(e) {
            var t = Ye(e, 2);
            return [t[0], t[1].className]
          })))
        }
        function s(t) {
          var n = (["container", "root"].includes(null !== t && void 0 !== t ? t: "") ? [e] : [e, t]).filter(Boolean).join("__"),
          r = "chakra-".concat(n);
          return {
            className: r,
            selector: ".".concat(r),
            toString: function() {
              return t
            }
          }
        }
        var c = {};
        return {
          parts: a,
          toPart: s,
          extend: o,
          selectors: i,
          classnames: l,
          get keys() {
            return Object.keys(t)
          },
          __type: c
        }
      }
      var Sa = _a("accordion").parts("root", "container", "button", "panel").extend("icon"),
      Ea = _a("alert").parts("title", "description", "container").extend("icon", "spinner"),
      Ca = _a("avatar").parts("label", "badge", "container").extend("excessLabel", "group"),
      Aa = _a("breadcrumb").parts("link", "item", "container").extend("separator"),
      Pa = (_a("button").parts(), _a("checkbox").parts("control", "icon", "container").extend("label")),
      Ta = (_a("progress").parts("track", "filledTrack").extend("label"), _a("drawer").parts("overlay", "dialogContainer", "dialog").extend("header", "closeButton", "body", "footer")),
      za = _a("editable").parts("preview", "input", "textarea"),
      ja = _a("form").parts("container", "requiredIndicator", "helperText"),
      Ra = _a("formError").parts("text", "icon"),
      Ma = _a("input").parts("addon", "field", "element"),
      Na = _a("list").parts("container", "item", "icon"),
      Oa = _a("menu").parts("button", "list", "item").extend("groupTitle", "command", "divider"),
      Ba = _a("modal").parts("overlay", "dialogContainer", "dialog").extend("header", "closeButton", "body", "footer"),
      La = _a("numberinput").parts("root", "field", "stepperGroup", "stepper"),
      Fa = (_a("pininput").parts("field"), _a("popover").parts("content", "header", "body", "footer").extend("popper", "arrow", "closeButton")),
      Da = _a("progress").parts("label", "filledTrack", "track"),
      Ia = _a("radio").parts("container", "control", "label"),
      Va = _a("select").parts("field", "icon"),
      Wa = _a("slider").parts("container", "track", "thumb", "filledTrack", "mark"),
      Ua = _a("stat").parts("container", "label", "helpText", "number", "icon"),
      Ha = _a("switch").parts("container", "track", "thumb"),
      $a = _a("table").parts("table", "thead", "tbody", "tr", "th", "td", "tfoot", "caption"),
      qa = _a("tabs").parts("root", "tab", "tablist", "tabpanel", "tabpanels", "indicator"),
      Ga = _a("tag").parts("container", "label", "closeButton"),
      Ya = _a("card").parts("container", "header", "body", "footer");
      function Xa(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1,
          r.configurable = !0,
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, i(r.key), r)
        }
      }
      function Ka(e, t, n) {
        return t && Xa(e.prototype, t),
        n && Xa(e, n),
        Object.defineProperty(e, "prototype", {
          writable: !1
        }),
        e
      }
      function Qa(e, t) {
        if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
      }
      function Za(e) {
        return Za = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        },
        Za(e)
      }
      function Ja() {
        if ("undefined" === typeof Reflect || !Reflect.construct) return ! 1;
        if (Reflect.construct.sham) return ! 1;
        if ("function" === typeof Proxy) return ! 0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))),
          !0
        } catch(e) {
          return ! 1
        }
      }
      function eo(e, t) {
        if (t && ("object" === o(t) || "function" === typeof t)) return t;
        if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
        return function(e) {
          if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e
        } (e)
      }
      function to(e) {
        var t = Ja();
        return function() {
          var n, r = Za(e);
          if (t) {
            var a = Za(this).constructor;
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments);
          return eo(this, n)
        }
      }
      function no(e, t, n) {
        return no = Ja() ? Reflect.construct.bind() : function(e, t, n) {
          var r = [null];
          r.push.apply(r, t);
          var a = new(Function.bind.apply(e, r));
          return n && Rt(a, n.prototype),
          a
        },
        no.apply(null, arguments)
      }
      function ro(e) {
        var t = "function" === typeof Map ? new Map: void 0;
        return ro = function(e) {
          if (null === e || (n = e, -1 === Function.toString.call(n).indexOf("[native code]"))) return e;
          var n;
          if ("function" !== typeof e) throw new TypeError("Super expression must either be null or a function");
          if ("undefined" !== typeof t) {
            if (t.has(e)) return t.get(e);
            t.set(e, r)
          }
          function r() {
            return no(e, arguments, Za(this).constructor)
          }
          return r.prototype = Object.create(e.prototype, {
            constructor: {
              value: r,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          }),
          Rt(r, e)
        },
        ro(e)
      }
      function ao(e, t, n) {
        return Math.min(Math.max(e, n), t)
      }
      var oo = function(e) {
        Mt(n, e);
        var t = to(n);
        function n(e) {
          return Qa(this, n),
          t.call(this, 'Failed to parse color: "'.concat(e, '"'))
        }
        return Ka(n)
      } (ro(Error)),
      io = oo;
      function lo(e) {
        if ("string" !== typeof e) throw new io(e);
        if ("transparent" === e.trim().toLowerCase()) return [0, 0, 0, 0];
        var t = e.trim();
        t = mo.test(e) ?
        function(e) {
          var t = e.toLowerCase().trim(),
          n = co[function(e) {
            var t = 5381,
            n = e.length;
            for (; n;) t = 33 * t ^ e.charCodeAt(--n);
            return (t >>> 0) % 2341
          } (t)];
          if (!n) throw new io(e);
          return "#".concat(n)
        } (e) : e;
        var n = fo.exec(t);
        if (n) {
          var r = Array.from(n).slice(1);
          return [].concat(pt(r.slice(0, 3).map((function(e) {
            return parseInt(uo(e, 2), 16)
          }))), [parseInt(uo(r[3] || "f", 2), 16) / 255])
        }
        var a = po.exec(t);
        if (a) {
          var o = Array.from(a).slice(1);
          return [].concat(pt(o.slice(0, 3).map((function(e) {
            return parseInt(e, 16)
          }))), [parseInt(o[3] || "ff", 16) / 255])
        }
        var i = go.exec(t);
        if (i) {
          var l = Array.from(i).slice(1);
          return [].concat(pt(l.slice(0, 3).map((function(e) {
            return parseInt(e, 10)
          }))), [parseFloat(l[3] || "1")])
        }
        var s = vo.exec(t);
        if (s) {
          var c = Ye(Array.from(s).slice(1).map(parseFloat), 4),
          u = c[0],
          d = c[1],
          f = c[2],
          p = c[3];
          if (ao(0, 100, d) !== d) throw new io(e);
          if (ao(0, 100, f) !== f) throw new io(e);
          return [].concat(pt(yo(u, d, f)), [p || 1])
        }
        throw new io(e)
      }
      var so = function(e) {
        return parseInt(e.replace(/_/g, ""), 36)
      },
      co = "1q29ehhb 1n09sgk7 1kl1ekf_ _yl4zsno 16z9eiv3 1p29lhp8 _bd9zg04 17u0____ _iw9zhe5 _to73___ _r45e31e _7l6g016 _jh8ouiv _zn3qba8 1jy4zshs 11u87k0u 1ro9yvyo 1aj3xael 1gz9zjz0 _3w8l4xo 1bf1ekf_ _ke3v___ _4rrkb__ 13j776yz _646mbhl _nrjr4__ _le6mbhl 1n37ehkb _m75f91n _qj3bzfz 1939yygw 11i5z6x8 _1k5f8xs 1509441m 15t5lwgf _ae2th1n _tg1ugcv 1lp1ugcv 16e14up_ _h55rw7n _ny9yavn _7a11xb_ 1ih442g9 _pv442g9 1mv16xof 14e6y7tu 1oo9zkds 17d1cisi _4v9y70f _y98m8kc 1019pq0v 12o9zda8 _348j4f4 1et50i2o _8epa8__ _ts6senj 1o350i2o 1mi9eiuo 1259yrp0 1ln80gnw _632xcoy 1cn9zldc _f29edu4 1n490c8q _9f9ziet 1b94vk74 _m49zkct 1kz6s73a 1eu9dtog _q58s1rz 1dy9sjiq __u89jo3 _aj5nkwg _ld89jo3 13h9z6wx _qa9z2ii _l119xgq _bs5arju 1hj4nwk9 1qt4nwk9 1ge6wau6 14j9zlcw 11p1edc_ _ms1zcxe _439shk6 _jt9y70f _754zsow 1la40eju _oq5p___ _x279qkz 1fa5r3rv _yd2d9ip _424tcku _8y1di2_ _zi2uabw _yy7rn9h 12yz980_ __39ljp6 1b59zg0x _n39zfzp 1fy9zest _b33k___ _hp9wq92 1il50hz4 _io472ub _lj9z3eo 19z9ykg0 _8t8iu3a 12b9bl4a 1ak5yw0o _896v4ku _tb8k8lv _s59zi6t _c09ze0p 1lg80oqn 1id9z8wb _238nba5 1kq6wgdi _154zssg _tn3zk49 _da9y6tc 1sg7cv4f _r12jvtt 1gq5fmkz 1cs9rvci _lp9jn1c _xw1tdnb 13f9zje6 16f6973h _vo7ir40 _bt5arjf _rc45e4t _hr4e100 10v4e100 _hc9zke2 _w91egv_ _sj2r1kk 13c87yx8 _vqpds__ _ni8ggk8 _tj9yqfb 1ia2j4r4 _7x9b10u 1fc9ld4j 1eq9zldr _5j9lhpx _ez9zl6o _md61fzm".split(" ").reduce((function(e, t) {
        for (var n = so(t.substring(0, 3)), r = so(t.substring(3)).toString(16), a = "", o = 0; o < 6 - r.length; o++) a += "0";
        return e[n] = "".concat(a).concat(r),
        e
      }), {});
      var uo = function(e, t) {
        return Array.from(Array(t)).map((function() {
          return e
        })).join("")
      },
      fo = new RegExp("^#".concat(uo("([a-f0-9])", 3), "([a-f0-9])?$"), "i"),
      po = new RegExp("^#".concat(uo("([a-f0-9]{2})", 3), "([a-f0-9]{2})?$"), "i"),
      go = new RegExp("^rgba?\\(\\s*(\\d+)\\s*".concat(uo(",\\s*(\\d+)\\s*", 2), "(?:,\\s*([\\d.]+))?\\s*\\)$"), "i"),
      vo = /^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i,
      mo = /^[a-z]+$/i,
      ho = function(e) {
        return Math.round(255 * e)
      },
      yo = function(e, t, n) {
        var r = n / 100;
        if (0 === t) return [r, r, r].map(ho);
        var a = (e % 360 + 360) % 360 / 60,
        o = (1 - Math.abs(2 * r - 1)) * (t / 100),
        i = o * (1 - Math.abs(a % 2 - 1)),
        l = 0,
        s = 0,
        c = 0;
        a >= 0 && a < 1 ? (l = o, s = i) : a >= 1 && a < 2 ? (l = i, s = o) : a >= 2 && a < 3 ? (s = o, c = i) : a >= 3 && a < 4 ? (s = i, c = o) : a >= 4 && a < 5 ? (l = i, c = o) : a >= 5 && a < 6 && (l = o, c = i);
        var u = r - o / 2;
        return [l + u, s + u, c + u].map(ho)
      };
      function bo(e, t, n, r) {
        return "rgba(".concat(ao(0, 255, e).toFixed(), ", ").concat(ao(0, 255, t).toFixed(), ", ").concat(ao(0, 255, n).toFixed(), ", ").concat(parseFloat(ao(0, 1, r).toFixed(3)), ")")
      }
      function xo(e, t) {
        var n = Ye(lo(e), 4);
        return bo(n[0], n[1], n[2], n[3] - t)
      }
      var wo = function(e, t, n) {
        var r = function(e, t, n, r, a) {
          for (t = t.split ? t.split(".") : t, r = 0; r < t.length; r++) e = e ? e[t[r]] : a;
          return e === a ? n: e
        } (e, "colors.".concat(t), t);
        try {
          return function(e) {
            var t = Ye(lo(e), 4),
            n = t[0],
            r = t[1],
            a = t[2],
            o = t[3],
            i = function(e) {
              var t = ao(0, 255, e).toString(16);
              return 1 === t.length ? "0".concat(t) : t
            };
            "#".concat(i(n)).concat(i(r)).concat(i(a)).concat(o < 1 ? i(Math.round(255 * o)) : "")
          } (r),
          r
        } catch(a) {
          return null !== n && void 0 !== n ? n: "#000000"
        }
      },
      ko = function(e) {
        return function(t) {
          var n = function(e) {
            var t = Ye(lo(e), 3);
            return (299 * t[0] + 587 * t[1] + 114 * t[2]) / 1e3
          } (wo(t, e));
          return n < 128 ? "dark": "light"
        }
      },
      _o = function(e, t) {
        return function(n) {
          return xo(wo(n, e), 1 - t)
        }
      };
      function So() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "1rem",
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "rgba(255, 255, 255, 0.15)";
        return {
          backgroundImage: "linear-gradient(\n    45deg,\n    ".concat(t, " 25%,\n    transparent 25%,\n    transparent 50%,\n    ").concat(t, " 50%,\n    ").concat(t, " 75%,\n    transparent 75%,\n    transparent\n  )"),
          backgroundSize: "".concat(e, " ").concat(e)
        }
      }
      function Eo(e) {
        var t, n = "#".concat(Math.floor(16777215 * Math.random()).toString(16).padEnd(6, "0"));
        return e && (t = e, 0 !== Object.keys(t).length) ? e.string && e.colors ?
        function(e, t) {
          var n = 0;
          if (0 === e.length) return t[0];
          for (var r = 0; r < e.length; r += 1) n = e.charCodeAt(r) + ((n << 5) - n),
          n &= n;
          return n = (n % t.length + t.length) % t.length,
          t[n]
        } (e.string, e.colors) : e.string && !e.colors ?
        function(e) {
          var t = 0;
          if (0 === e.length) return t.toString();
          for (var n = 0; n < e.length; n += 1) t = e.charCodeAt(n) + ((t << 5) - t),
          t &= t;
          for (var r = "#",
          a = 0; a < 3; a += 1) {
            r += "00".concat((t >> 8 * a & 255).toString(16)).substr( - 2)
          }
          return r
        } (e.string) : e.colors && !e.string ?
        function(e) {
          return e[Math.floor(Math.random() * e.length)]
        } (e.colors) : n: n
      }
      function Co(e, t) {
        return function(n) {
          return "dark" === n.colorMode ? t: e
        }
      }
      function Ao(e) {
        var t = e.orientation,
        n = e.vertical,
        r = e.horizontal;
        return t ? "vertical" === t ? n: r: {}
      }
      function Po(e) {
        return function(e) {
          var t = typeof e;
          return null != e && ("object" === t || "function" === t) && !Array.isArray(e)
        } (e) && e.reference ? e.reference: String(e)
      }
      var To, zo, jo, Ro, Mo, No, Oo, Bo, Lo, Fo, Do, Io, Vo, Wo, Uo, Ho, $o, qo, Go, Yo, Xo, Ko, Qo, Zo, Jo, ei, ti, ni, ri, ai, oi, ii, li, si, ci, ui, di, fi, pi, gi, vi, mi, hi = function(e) {
        for (var t = arguments.length,
        n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
        return n.map(Po).join(" ".concat(e, " ")).replace(/calc/g, "")
      },
      yi = function() {
        for (var e = arguments.length,
        t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return "calc(".concat(hi.apply(void 0, ["+"].concat(t)), ")")
      },
      bi = function() {
        for (var e = arguments.length,
        t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return "calc(".concat(hi.apply(void 0, ["-"].concat(t)), ")")
      },
      xi = function() {
        for (var e = arguments.length,
        t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return "calc(".concat(hi.apply(void 0, ["*"].concat(t)), ")")
      },
      wi = function() {
        for (var e = arguments.length,
        t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return "calc(".concat(hi.apply(void 0, ["/"].concat(t)), ")")
      },
      ki = function(e) {
        var t = Po(e);
        return null == t || Number.isNaN(parseFloat(t)) ? xi(t, -1) : String(t).startsWith("-") ? String(t).slice(1) : "-".concat(t)
      },
      _i = Object.assign((function(e) {
        return {
          add: function() {
            for (var t = arguments.length,
            n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
            return _i(yi.apply(void 0, [e].concat(n)))
          },
          subtract: function() {
            for (var t = arguments.length,
            n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
            return _i(bi.apply(void 0, [e].concat(n)))
          },
          multiply: function() {
            for (var t = arguments.length,
            n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
            return _i(xi.apply(void 0, [e].concat(n)))
          },
          divide: function() {
            for (var t = arguments.length,
            n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
            return _i(wi.apply(void 0, [e].concat(n)))
          },
          negate: function() {
            return _i(ki(e))
          },
          toString: function() {
            return e.toString()
          }
        }
      }), {
        add: yi,
        subtract: bi,
        multiply: xi,
        divide: wi,
        negate: ki
      });
      function Si(e) {
        var t = function(e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "-";
          return e.replace(/\s+/g, t)
        } (e.toString());
        return t.includes("\\.") ? e: function(e) {
          return ! Number.isInteger(parseFloat(e.toString()))
        } (e) ? t.replace(".", "\\.") : e
      }
      function Ei(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        return [t, Si(e)].filter(Boolean).join("-")
      }
      function Ci(e, t) {
        return "var(".concat(Si(e)).concat(t ? ", ".concat(t) : "", ")")
      }
      function Ai(e, t) {
        var n = function(e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
          return "--".concat(Ei(e, t))
        } (e, null == t ? void 0 : t.prefix);
        return {
          variable: n,
          reference: Ci(n, Pi(null == t ? void 0 : t.fallback))
        }
      }
      function Pi(e) {
        return "string" === typeof e ? e: null == e ? void 0 : e.reference
      }
      var Ti = Ar(Sa.keys),
      zi = Ti.definePartsStyle,
      ji = (0, Ti.defineMultiStyleConfig)({
        baseStyle: zi({
          container: {
            borderTopWidth: "1px",
            borderColor: "inherit",
            _last: {
              borderBottomWidth: "1px"
            }
          },
          button: {
            transitionProperty: "common",
            transitionDuration: "normal",
            fontSize: "md",
            _focusVisible: {
              boxShadow: "outline"
            },
            _hover: {
              bg: "blackAlpha.50"
            },
            _disabled: {
              opacity: .4,
              cursor: "not-allowed"
            },
            px: "4",
            py: "2"
          },
          panel: {
            pt: "2",
            px: "4",
            pb: "5"
          },
          icon: {
            fontSize: "1.25em"
          }
        })
      }),
      Ri = Ar(Ea.keys),
      Mi = Ri.definePartsStyle,
      Ni = Ri.defineMultiStyleConfig,
      Oi = Un("alert-fg"),
      Bi = Un("alert-bg");
      function Li(e) {
        var t = e.theme,
        n = e.colorScheme,
        r = _o("".concat(n, ".200"), .16)(t);
        return {
          light: "colors.".concat(n, ".100"),
          dark: r
        }
      }
      var Fi = Ni({
        baseStyle: Mi({
          container: {
            bg: Bi.reference,
            px: "4",
            py: "3"
          },
          title: {
            fontWeight: "bold",
            lineHeight: "6",
            marginEnd: "2"
          },
          description: {
            lineHeight: "6"
          },
          icon: {
            color: Oi.reference,
            flexShrink: 0,
            marginEnd: "3",
            w: "5",
            h: "6"
          },
          spinner: {
            color: Oi.reference,
            flexShrink: 0,
            marginEnd: "3",
            w: "5",
            h: "5"
          }
        }),
        variants: {
          subtle: Mi((function(e) {
            var t, n, r = e.colorScheme,
            a = Li(e);
            return {
              container: (n = {},
              l(n, Oi.variable, "colors.".concat(r, ".500")), l(n, Bi.variable, a.light), l(n, "_dark", (t = {},
              l(t, Oi.variable, "colors.".concat(r, ".200")), l(t, Bi.variable, a.dark), t)), n)
            }
          })),
          "left-accent": Mi((function(e) {
            var t, n, r = e.colorScheme,
            a = Li(e);
            return {
              container: (n = {},
              l(n, Oi.variable, "colors.".concat(r, ".500")), l(n, Bi.variable, a.light), l(n, "_dark", (t = {},
              l(t, Oi.variable, "colors.".concat(r, ".200")), l(t, Bi.variable, a.dark), t)), l(n, "paddingStart", "3"), l(n, "borderStartWidth", "4px"), l(n, "borderStartColor", Oi.reference), n)
            }
          })),
          "top-accent": Mi((function(e) {
            var t, n, r = e.colorScheme,
            a = Li(e);
            return {
              container: (n = {},
              l(n, Oi.variable, "colors.".concat(r, ".500")), l(n, Bi.variable, a.light), l(n, "_dark", (t = {},
              l(t, Oi.variable, "colors.".concat(r, ".200")), l(t, Bi.variable, a.dark), t)), l(n, "pt", "2"), l(n, "borderTopWidth", "4px"), l(n, "borderTopColor", Oi.reference), n)
            }
          })),
          solid: Mi((function(e) {
            var t, n, r = e.colorScheme;
            return {
              container: (n = {},
              l(n, Oi.variable, "colors.white"), l(n, Bi.variable, "colors.".concat(r, ".500")), l(n, "_dark", (t = {},
              l(t, Oi.variable, "colors.gray.900"), l(t, Bi.variable, "colors.".concat(r, ".200")), t)), l(n, "color", Oi.reference), n)
            }
          }))
        },
        defaultProps: {
          variant: "subtle",
          colorScheme: "blue"
        }
      }),
      Di = {
        px: "1px",
        .5 : "0.125rem",
        1 : "0.25rem",
        1.5 : "0.375rem",
        2 : "0.5rem",
        2.5 : "0.625rem",
        3 : "0.75rem",
        3.5 : "0.875rem",
        4 : "1rem",
        5 : "1.25rem",
        6 : "1.5rem",
        7 : "1.75rem",
        8 : "2rem",
        9 : "2.25rem",
        10 : "2.5rem",
        12 : "3rem",
        14 : "3.5rem",
        16 : "4rem",
        20 : "5rem",
        24 : "6rem",
        28 : "7rem",
        32 : "8rem",
        36 : "9rem",
        40 : "10rem",
        44 : "11rem",
        48 : "12rem",
        52 : "13rem",
        56 : "14rem",
        60 : "15rem",
        64 : "16rem",
        72 : "18rem",
        80 : "20rem",
        96 : "24rem"
      },
      Ii = c(c(c({},
      Di), {
        max: "max-content",
        min: "min-content",
        full: "100%",
        "3xs": "14rem",
        "2xs": "16rem",
        xs: "20rem",
        sm: "24rem",
        md: "28rem",
        lg: "32rem",
        xl: "36rem",
        "2xl": "42rem",
        "3xl": "48rem",
        "4xl": "56rem",
        "5xl": "64rem",
        "6xl": "72rem",
        "7xl": "80rem",
        "8xl": "90rem",
        prose: "60ch"
      }), {},
      {
        container: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px"
        }
      }),
      Vi = function(e) {
        return "function" === typeof e
      };
      function Wi(e) {
        for (var t = arguments.length,
        n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
        return Vi(e) ? e.apply(void 0, n) : e
      }
      var Ui = Ar(Ca.keys),
      Hi = Ui.definePartsStyle,
      $i = Ui.defineMultiStyleConfig,
      qi = Un("avatar-border-color"),
      Gi = Un("avatar-bg"),
      Yi = (l(To = {
        borderRadius: "full",
        border: "0.2em solid"
      },
      qi.variable, "white"), l(To, "_dark", l({},
      qi.variable, "colors.gray.800")), l(To, "borderColor", qi.reference), To),
      Xi = (l(zo = {},
      Gi.variable, "colors.gray.200"), l(zo, "_dark", l({},
      Gi.variable, "colors.whiteAlpha.400")), l(zo, "bgColor", Gi.reference), zo),
      Ki = Un("avatar-background"),
      Qi = function(e) {
        var t, n = e.name,
        r = e.theme,
        a = n ? Eo({
          string: n
        }) : "colors.gray.400",
        o = function(e) {
          return function(t) {
            return "dark" === ko(e)(t)
          }
        } (a)(r),
        i = "white";
        return o || (i = "gray.800"),
        t = {
          bg: Ki.reference,
          "&:not([data-loaded])": l({},
          Ki.variable, a),
          color: i
        },
        l(t, qi.variable, "colors.white"),
        l(t, "_dark", l({},
        qi.variable, "colors.gray.800")),
        l(t, "borderColor", qi.reference),
        l(t, "verticalAlign", "top"),
        t
      };
      function Zi(e) {
        var t = "100%" !== e ? Ii[e] : void 0;
        return Hi({
          container: {
            width: e,
            height: e,
            fontSize: "calc(".concat(null !== t && void 0 !== t ? t: e, " / 2.5)")
          },
          excessLabel: {
            width: e,
            height: e
          },
          label: {
            fontSize: "calc(".concat(null !== t && void 0 !== t ? t: e, " / 2.5)"),
            lineHeight: "100%" !== e ? null !== t && void 0 !== t ? t: e: void 0
          }
        })
      }
      var Ji = $i({
        baseStyle: Hi((function(e) {
          return {
            badge: Wi(Yi, e),
            excessLabel: Wi(Xi, e),
            container: Wi(Qi, e)
          }
        })),
        sizes: {
          "2xs": Zi(4),
          xs: Zi(6),
          sm: Zi(8),
          md: Zi(12),
          lg: Zi(16),
          xl: Zi(24),
          "2xl": Zi(32),
          full: Zi("100%")
        },
        defaultProps: {
          size: "md"
        }
      }),
      el = {
        px: 1,
        textTransform: "uppercase",
        fontSize: "xs",
        borderRadius: "sm",
        fontWeight: "bold"
      },
      tl = Un("badge-bg"),
      nl = Un("badge-color"),
      rl = {
        baseStyle: el,
        variants: {
          solid: function(e) {
            var t, n, r = e.colorScheme,
            a = e.theme,
            o = _o("".concat(r, ".500"), .6)(a);
            return l(n = {},
            tl.variable, "colors.".concat(r, ".500")),
            l(n, nl.variable, "colors.white"),
            l(n, "_dark", (l(t = {},
            tl.variable, o), l(t, nl.variable, "colors.whiteAlpha.800"), t)),
            l(n, "bg", tl.reference),
            l(n, "color", nl.reference),
            n
          },
          subtle: function(e) {
            var t, n, r = e.colorScheme,
            a = e.theme,
            o = _o("".concat(r, ".200"), .16)(a);
            return l(n = {},
            tl.variable, "colors.".concat(r, ".100")),
            l(n, nl.variable, "colors.".concat(r, ".800")),
            l(n, "_dark", (l(t = {},
            tl.variable, o), l(t, nl.variable, "colors.".concat(r, ".200")), t)),
            l(n, "bg", tl.reference),
            l(n, "color", nl.reference),
            n
          },
          outline: function(e) {
            var t, n = e.colorScheme,
            r = e.theme,
            a = _o("".concat(n, ".200"), .8)(r);
            return l(t = {},
            nl.variable, "colors.".concat(n, ".500")),
            l(t, "_dark", l({},
            nl.variable, a)),
            l(t, "color", nl.reference),
            l(t, "boxShadow", "inset 0 0 0px 1px ".concat(nl.reference)),
            t
          }
        },
        defaultProps: {
          variant: "subtle",
          colorScheme: "gray"
        }
      },
      al = Ar(Aa.keys),
      ol = (0, al.defineMultiStyleConfig)({
        baseStyle: (0, al.definePartsStyle)({
          link: {
            transitionProperty: "common",
            transitionDuration: "fast",
            transitionTimingFunction: "ease-out",
            cursor: "pointer",
            textDecoration: "none",
            outline: "none",
            color: "inherit",
            _hover: {
              textDecoration: "underline"
            },
            _focusVisible: {
              boxShadow: "outline"
            }
          }
        })
      }),
      il = function(e) {
        var t = e.colorScheme,
        n = e.theme;
        if ("gray" === t) return {
          color: Co("inherit", "whiteAlpha.900")(e),
          _hover: {
            bg: Co("gray.100", "whiteAlpha.200")(e)
          },
          _active: {
            bg: Co("gray.200", "whiteAlpha.300")(e)
          }
        };
        var r = _o("".concat(t, ".200"), .12)(n),
        a = _o("".concat(t, ".200"), .24)(n);
        return {
          color: Co("".concat(t, ".600"), "".concat(t, ".200"))(e),
          bg: "transparent",
          _hover: {
            bg: Co("".concat(t, ".50"), r)(e)
          },
          _active: {
            bg: Co("".concat(t, ".100"), a)(e)
          }
        }
      },
      ll = {
        yellow: {
          bg: "yellow.400",
          color: "black",
          hoverBg: "yellow.500",
          activeBg: "yellow.600"
        },
        cyan: {
          bg: "cyan.400",
          color: "black",
          hoverBg: "cyan.500",
          activeBg: "cyan.600"
        }
      },
      sl = function(e) {
        var t, n = e.colorScheme;
        if ("gray" === n) {
          var r = Co("gray.100", "whiteAlpha.200")(e);
          return {
            bg: r,
            _hover: {
              bg: Co("gray.200", "whiteAlpha.300")(e),
              _disabled: {
                bg: r
              }
            },
            _active: {
              bg: Co("gray.300", "whiteAlpha.400")(e)
            }
          }
        }
        var a = null !== (t = ll[n]) && void 0 !== t ? t: {},
        o = a.bg,
        i = void 0 === o ? "".concat(n, ".500") : o,
        l = a.color,
        s = void 0 === l ? "white": l,
        c = a.hoverBg,
        u = void 0 === c ? "".concat(n, ".600") : c,
        d = a.activeBg,
        f = void 0 === d ? "".concat(n, ".700") : d,
        p = Co(i, "".concat(n, ".200"))(e);
        return {
          bg: p,
          color: Co(s, "gray.800")(e),
          _hover: {
            bg: Co(u, "".concat(n, ".300"))(e),
            _disabled: {
              bg: p
            }
          },
          _active: {
            bg: Co(f, "".concat(n, ".400"))(e)
          }
        }
      },
      cl = {
        baseStyle: {
          lineHeight: "1.2",
          borderRadius: "md",
          fontWeight: "semibold",
          transitionProperty: "common",
          transitionDuration: "normal",
          _focusVisible: {
            boxShadow: "outline"
          },
          _disabled: {
            opacity: .4,
            cursor: "not-allowed",
            boxShadow: "none"
          },
          _hover: {
            _disabled: {
              bg: "initial"
            }
          }
        },
        variants: {
          ghost: il,
          outline: function(e) {
            var t = e.colorScheme,
            n = Co("gray.200", "whiteAlpha.300")(e);
            return c({
              border: "1px solid",
              borderColor: "gray" === t ? n: "currentColor",
              ".chakra-button__group[data-attached][data-orientation=horizontal] > &:not(:last-of-type)": {
                marginEnd: "-1px"
              },
              ".chakra-button__group[data-attached][data-orientation=vertical] > &:not(:last-of-type)": {
                marginBottom: "-1px"
              }
            },
            Wi(il, e))
          },
          solid: sl,
          link: function(e) {
            var t = e.colorScheme;
            return {
              padding: 0,
              height: "auto",
              lineHeight: "normal",
              verticalAlign: "baseline",
              color: Co("".concat(t, ".500"), "".concat(t, ".200"))(e),
              _hover: {
                textDecoration: "underline",
                _disabled: {
                  textDecoration: "none"
                }
              },
              _active: {
                color: Co("".concat(t, ".700"), "".concat(t, ".500"))(e)
              }
            }
          },
          unstyled: {
            bg: "none",
            color: "inherit",
            display: "inline",
            lineHeight: "inherit",
            m: "0",
            p: "0"
          }
        },
        sizes: {
          lg: {
            h: "12",
            minW: "12",
            fontSize: "lg",
            px: "6"
          },
          md: {
            h: "10",
            minW: "10",
            fontSize: "md",
            px: "4"
          },
          sm: {
            h: "8",
            minW: "8",
            fontSize: "sm",
            px: "3"
          },
          xs: {
            h: "6",
            minW: "6",
            fontSize: "xs",
            px: "2"
          }
        },
        defaultProps: {
          variant: "solid",
          size: "md",
          colorScheme: "gray"
        }
      },
      ul = Ar(Ya.keys),
      dl = ul.definePartsStyle,
      fl = ul.defineMultiStyleConfig,
      pl = Un("card-bg"),
      gl = Un("card-padding"),
      vl = dl({
        container: (jo = {},
        l(jo, pl.variable, "chakra-body-bg"), l(jo, "backgroundColor", pl.reference), l(jo, "color", "chakra-body-text"), jo),
        body: {
          padding: gl.reference,
          flex: "1 1 0%"
        },
        header: {
          padding: gl.reference
        },
        footer: {
          padding: gl.reference
        }
      }),
      ml = {
        sm: dl({
          container: l({
            borderRadius: "base"
          },
          gl.variable, "space.3")
        }),
        md: dl({
          container: l({
            borderRadius: "md"
          },
          gl.variable, "space.5")
        }),
        lg: dl({
          container: l({
            borderRadius: "xl"
          },
          gl.variable, "space.7")
        })
      },
      hl = fl({
        baseStyle: vl,
        variants: {
          elevated: dl({
            container: {
              boxShadow: "base",
              _dark: l({},
              pl.variable, "colors.gray.700")
            }
          }),
          outline: dl({
            container: {
              borderWidth: "1px",
              borderColor: "chakra-border-color"
            }
          }),
          filled: dl({
            container: l({},
            pl.variable, "colors.chakra-subtle-bg")
          }),
          unstyled: {
            body: {
              padding: 0
            },
            header: {
              padding: 0
            },
            footer: {
              padding: 0
            }
          }
        },
        sizes: ml,
        defaultProps: {
          variant: "elevated",
          size: "md"
        }
      }),
      yl = Ar(Pa.keys),
      bl = yl.definePartsStyle,
      xl = yl.defineMultiStyleConfig,
      wl = Un("checkbox-size"),
      kl = function(e) {
        var t = e.colorScheme;
        return {
          w: wl.reference,
          h: wl.reference,
          transitionProperty: "box-shadow",
          transitionDuration: "normal",
          border: "2px solid",
          borderRadius: "sm",
          borderColor: "inherit",
          color: "white",
          _checked: {
            bg: Co("".concat(t, ".500"), "".concat(t, ".200"))(e),
            borderColor: Co("".concat(t, ".500"), "".concat(t, ".200"))(e),
            color: Co("white", "gray.900")(e),
            _hover: {
              bg: Co("".concat(t, ".600"), "".concat(t, ".300"))(e),
              borderColor: Co("".concat(t, ".600"), "".concat(t, ".300"))(e)
            },
            _disabled: {
              borderColor: Co("gray.200", "transparent")(e),
              bg: Co("gray.200", "whiteAlpha.300")(e),
              color: Co("gray.500", "whiteAlpha.500")(e)
            }
          },
          _indeterminate: {
            bg: Co("".concat(t, ".500"), "".concat(t, ".200"))(e),
            borderColor: Co("".concat(t, ".500"), "".concat(t, ".200"))(e),
            color: Co("white", "gray.900")(e)
          },
          _disabled: {
            bg: Co("gray.100", "whiteAlpha.100")(e),
            borderColor: Co("gray.100", "transparent")(e)
          },
          _focusVisible: {
            boxShadow: "outline"
          },
          _invalid: {
            borderColor: Co("red.500", "red.300")(e)
          }
        }
      },
      _l = {
        _disabled: {
          cursor: "not-allowed"
        }
      },
      Sl = {
        userSelect: "none",
        _disabled: {
          opacity: .4
        }
      },
      El = {
        transitionProperty: "transform",
        transitionDuration: "normal"
      },
      Cl = xl({
        baseStyle: bl((function(e) {
          return {
            icon: El,
            container: _l,
            control: Wi(kl, e),
            label: Sl
          }
        })),
        sizes: {
          sm: bl({
            control: l({},
            wl.variable, "sizes.3"),
            label: {
              fontSize: "sm"
            },
            icon: {
              fontSize: "3xs"
            }
          }),
          md: bl({
            control: l({},
            wl.variable, "sizes.4"),
            label: {
              fontSize: "md"
            },
            icon: {
              fontSize: "2xs"
            }
          }),
          lg: bl({
            control: l({},
            wl.variable, "sizes.5"),
            label: {
              fontSize: "lg"
            },
            icon: {
              fontSize: "2xs"
            }
          })
        },
        defaultProps: {
          size: "md",
          colorScheme: "blue"
        }
      }),
      Al = Ai("close-button-size"),
      Pl = Ai("close-button-bg"),
      Tl = {
        baseStyle: {
          w: [Al.reference],
          h: [Al.reference],
          borderRadius: "md",
          transitionProperty: "common",
          transitionDuration: "normal",
          _disabled: {
            opacity: .4,
            cursor: "not-allowed",
            boxShadow: "none"
          },
          _hover: (Ro = {},
          l(Ro, Pl.variable, "colors.blackAlpha.100"), l(Ro, "_dark", l({},
          Pl.variable, "colors.whiteAlpha.100")), Ro),
          _active: (Mo = {},
          l(Mo, Pl.variable, "colors.blackAlpha.200"), l(Mo, "_dark", l({},
          Pl.variable, "colors.whiteAlpha.200")), Mo),
          _focusVisible: {
            boxShadow: "outline"
          },
          bg: Pl.reference
        },
        sizes: {
          lg: (No = {},
          l(No, Al.variable, "sizes.10"), l(No, "fontSize", "md"), No),
          md: (Oo = {},
          l(Oo, Al.variable, "sizes.8"), l(Oo, "fontSize", "xs"), Oo),
          sm: (Bo = {},
          l(Bo, Al.variable, "sizes.6"), l(Bo, "fontSize", "2xs"), Bo)
        },
        defaultProps: {
          size: "md"
        }
      },
      zl = {
        baseStyle: {
          fontFamily: "mono",
          fontSize: "sm",
          px: "0.2em",
          borderRadius: "sm"
        },
        variants: rl.variants,
        defaultProps: rl.defaultProps
      },
      jl = {
        baseStyle: {
          w: "100%",
          mx: "auto",
          maxW: "prose",
          px: "4"
        }
      },
      Rl = {
        baseStyle: {
          opacity: .6,
          borderColor: "inherit"
        },
        variants: {
          solid: {
            borderStyle: "solid"
          },
          dashed: {
            borderStyle: "dashed"
          }
        },
        defaultProps: {
          variant: "solid"
        }
      },
      Ml = Ar(Ta.keys),
      Nl = Ml.definePartsStyle,
      Ol = Ml.defineMultiStyleConfig,
      Bl = Un("drawer-bg"),
      Ll = Un("drawer-box-shadow");
      function Fl(e) {
        return Nl("full" === e ? {
          dialog: {
            maxW: "100vw",
            h: "100vh"
          }
        }: {
          dialog: {
            maxW: e
          }
        })
      }
      var Dl = {
        bg: "blackAlpha.600",
        zIndex: "overlay"
      },
      Il = {
        display: "flex",
        zIndex: "modal",
        justifyContent: "center"
      },
      Vl = function(e) {
        var t, n;
        return c(c({},
        e.isFullHeight && {
          height: "100vh"
        }), {},
        (l(n = {
          zIndex: "modal",
          maxH: "100vh",
          color: "inherit"
        },
        Bl.variable, "colors.white"), l(n, Ll.variable, "shadows.lg"), l(n, "_dark", (l(t = {},
        Bl.variable, "colors.gray.700"), l(t, Ll.variable, "shadows.dark-lg"), t)), l(n, "bg", Bl.reference), l(n, "boxShadow", Ll.reference), n))
      },
      Wl = {
        px: "6",
        py: "4",
        fontSize: "xl",
        fontWeight: "semibold"
      },
      Ul = {
        position: "absolute",
        top: "2",
        insetEnd: "3"
      },
      Hl = {
        px: "6",
        py: "2",
        flex: "1",
        overflow: "auto"
      },
      $l = {
        px: "6",
        py: "4"
      },
      ql = Ol({
        baseStyle: Nl((function(e) {
          return {
            overlay: Dl,
            dialogContainer: Il,
            dialog: Wi(Vl, e),
            header: Wl,
            closeButton: Ul,
            body: Hl,
            footer: $l
          }
        })),
        sizes: {
          xs: Fl("xs"),
          sm: Fl("md"),
          md: Fl("lg"),
          lg: Fl("2xl"),
          xl: Fl("4xl"),
          full: Fl("full")
        },
        defaultProps: {
          size: "xs"
        }
      }),
      Gl = Ar(za.keys),
      Yl = Gl.definePartsStyle,
      Xl = (0, Gl.defineMultiStyleConfig)({
        baseStyle: Yl({
          preview: {
            borderRadius: "md",
            py: "1",
            transitionProperty: "common",
            transitionDuration: "normal"
          },
          input: {
            borderRadius: "md",
            py: "1",
            transitionProperty: "common",
            transitionDuration: "normal",
            width: "full",
            _focusVisible: {
              boxShadow: "outline"
            },
            _placeholder: {
              opacity: .6
            }
          },
          textarea: {
            borderRadius: "md",
            py: "1",
            transitionProperty: "common",
            transitionDuration: "normal",
            width: "full",
            _focusVisible: {
              boxShadow: "outline"
            },
            _placeholder: {
              opacity: .6
            }
          }
        })
      }),
      Kl = Ar(ja.keys),
      Ql = Kl.definePartsStyle,
      Zl = Kl.defineMultiStyleConfig,
      Jl = Un("form-control-color"),
      es = Zl({
        baseStyle: Ql({
          container: {
            width: "100%",
            position: "relative"
          },
          requiredIndicator: (l(Lo = {
            marginStart: "1"
          },
          Jl.variable, "colors.red.500"), l(Lo, "_dark", l({},
          Jl.variable, "colors.red.300")), l(Lo, "color", Jl.reference), Lo),
          helperText: (l(Fo = {
            mt: "2"
          },
          Jl.variable, "colors.gray.600"), l(Fo, "_dark", l({},
          Jl.variable, "colors.whiteAlpha.600")), l(Fo, "color", Jl.reference), l(Fo, "lineHeight", "normal"), l(Fo, "fontSize", "sm"), Fo)
        })
      }),
      ts = Ar(Ra.keys),
      ns = ts.definePartsStyle,
      rs = ts.defineMultiStyleConfig,
      as = Un("form-error-color"),
      os = rs({
        baseStyle: ns({
          text: (l(Do = {},
          as.variable, "colors.red.500"), l(Do, "_dark", l({},
          as.variable, "colors.red.300")), l(Do, "color", as.reference), l(Do, "mt", "2"), l(Do, "fontSize", "sm"), l(Do, "lineHeight", "normal"), Do),
          icon: (l(Io = {
            marginEnd: "0.5em"
          },
          as.variable, "colors.red.500"), l(Io, "_dark", l({},
          as.variable, "colors.red.300")), l(Io, "color", as.reference), Io)
        })
      }),
      is = {
        baseStyle: {
          fontSize: "md",
          marginEnd: "3",
          mb: "2",
          fontWeight: "medium",
          transitionProperty: "common",
          transitionDuration: "normal",
          opacity: 1,
          _disabled: {
            opacity: .4
          }
        }
      },
      ls = {
        baseStyle: {
          fontFamily: "heading",
          fontWeight: "bold"
        },
        sizes: {
          "4xl": {
            fontSize: ["6xl", null, "7xl"],
            lineHeight: 1
          },
          "3xl": {
            fontSize: ["5xl", null, "6xl"],
            lineHeight: 1
          },
          "2xl": {
            fontSize: ["4xl", null, "5xl"],
            lineHeight: [1.2, null, 1]
          },
          xl: {
            fontSize: ["3xl", null, "4xl"],
            lineHeight: [1.33, null, 1.2]
          },
          lg: {
            fontSize: ["2xl", null, "3xl"],
            lineHeight: [1.33, null, 1.2]
          },
          md: {
            fontSize: "xl",
            lineHeight: 1.2
          },
          sm: {
            fontSize: "md",
            lineHeight: 1.2
          },
          xs: {
            fontSize: "sm",
            lineHeight: 1.2
          }
        },
        defaultProps: {
          size: "xl"
        }
      },
      ss = Ar(Ma.keys),
      cs = ss.definePartsStyle,
      us = {
        lg: {
          fontSize: "lg",
          px: "4",
          h: "12",
          borderRadius: "md"
        },
        md: {
          fontSize: "md",
          px: "4",
          h: "10",
          borderRadius: "md"
        },
        sm: {
          fontSize: "sm",
          px: "3",
          h: "8",
          borderRadius: "sm"
        },
        xs: {
          fontSize: "xs",
          px: "2",
          h: "6",
          borderRadius: "sm"
        }
      };
      function ds(e) {
        var t = e.focusBorderColor,
        n = e.errorBorderColor;
        return {
          focusBorderColor: t || Co("blue.500", "blue.300")(e),
          errorBorderColor: n || Co("red.500", "red.300")(e)
        }
      }
      var fs = (0, ss.defineMultiStyleConfig)({
        baseStyle: cs({
          field: {
            width: "100%",
            minWidth: 0,
            outline: 0,
            position: "relative",
            appearance: "none",
            transitionProperty: "common",
            transitionDuration: "normal",
            _disabled: {
              opacity: .4,
              cursor: "not-allowed"
            }
          }
        }),
        sizes: {
          lg: cs({
            field: us.lg,
            addon: us.lg
          }),
          md: cs({
            field: us.md,
            addon: us.md
          }),
          sm: cs({
            field: us.sm,
            addon: us.sm
          }),
          xs: cs({
            field: us.xs,
            addon: us.xs
          })
        },
        variants: {
          outline: cs((function(e) {
            var t = e.theme,
            n = ds(e),
            r = n.focusBorderColor,
            a = n.errorBorderColor;
            return {
              field: {
                border: "1px solid",
                borderColor: "inherit",
                bg: "inherit",
                _hover: {
                  borderColor: Co("gray.300", "whiteAlpha.400")(e)
                },
                _readOnly: {
                  boxShadow: "none !important",
                  userSelect: "all"
                },
                _invalid: {
                  borderColor: wo(t, a),
                  boxShadow: "0 0 0 1px ".concat(wo(t, a))
                },
                _focusVisible: {
                  zIndex: 1,
                  borderColor: wo(t, r),
                  boxShadow: "0 0 0 1px ".concat(wo(t, r))
                }
              },
              addon: {
                border: "1px solid",
                borderColor: Co("inherit", "whiteAlpha.50")(e),
                bg: Co("gray.100", "whiteAlpha.300")(e)
              }
            }
          })),
          filled: cs((function(e) {
            var t = e.theme,
            n = ds(e),
            r = n.focusBorderColor,
            a = n.errorBorderColor;
            return {
              field: {
                border: "2px solid",
                borderColor: "transparent",
                bg: Co("gray.100", "whiteAlpha.50")(e),
                _hover: {
                  bg: Co("gray.200", "whiteAlpha.100")(e)
                },
                _readOnly: {
                  boxShadow: "none !important",
                  userSelect: "all"
                },
                _invalid: {
                  borderColor: wo(t, a)
                },
                _focusVisible: {
                  bg: "transparent",
                  borderColor: wo(t, r)
                }
              },
              addon: {
                border: "2px solid",
                borderColor: "transparent",
                bg: Co("gray.100", "whiteAlpha.50")(e)
              }
            }
          })),
          flushed: cs((function(e) {
            var t = e.theme,
            n = ds(e),
            r = n.focusBorderColor,
            a = n.errorBorderColor;
            return {
              field: {
                borderBottom: "1px solid",
                borderColor: "inherit",
                borderRadius: "0",
                px: "0",
                bg: "transparent",
                _readOnly: {
                  boxShadow: "none !important",
                  userSelect: "all"
                },
                _invalid: {
                  borderColor: wo(t, a),
                  boxShadow: "0px 1px 0px 0px ".concat(wo(t, a))
                },
                _focusVisible: {
                  borderColor: wo(t, r),
                  boxShadow: "0px 1px 0px 0px ".concat(wo(t, r))
                }
              },
              addon: {
                borderBottom: "2px solid",
                borderColor: "inherit",
                borderRadius: "0",
                px: "0",
                bg: "transparent"
              }
            }
          })),
          unstyled: cs({
            field: {
              bg: "transparent",
              px: "0",
              height: "auto"
            },
            addon: {
              bg: "transparent",
              px: "0",
              height: "auto"
            }
          })
        },
        defaultProps: {
          size: "md",
          variant: "outline"
        }
      }),
      ps = Un("kbd-bg"),
      gs = {
        baseStyle: (l(Vo = {},
        ps.variable, "colors.gray.100"), l(Vo, "_dark", l({},
        ps.variable, "colors.whiteAlpha.100")), l(Vo, "bg", ps.reference), l(Vo, "borderRadius", "md"), l(Vo, "borderWidth", "1px"), l(Vo, "borderBottomWidth", "3px"), l(Vo, "fontSize", "0.8em"), l(Vo, "fontWeight", "bold"), l(Vo, "lineHeight", "normal"), l(Vo, "px", "0.4em"), l(Vo, "whiteSpace", "nowrap"), Vo)
      },
      vs = {
        baseStyle: {
          transitionProperty: "common",
          transitionDuration: "fast",
          transitionTimingFunction: "ease-out",
          cursor: "pointer",
          textDecoration: "none",
          outline: "none",
          color: "inherit",
          _hover: {
            textDecoration: "underline"
          },
          _focusVisible: {
            boxShadow: "outline"
          }
        }
      },
      ms = Ar(Na.keys),
      hs = (0, ms.defineMultiStyleConfig)({
        baseStyle: (0, ms.definePartsStyle)({
          icon: {
            marginEnd: "2",
            display: "inline",
            verticalAlign: "text-bottom"
          }
        })
      }),
      ys = Ar(Oa.keys),
      bs = ys.defineMultiStyleConfig,
      xs = ys.definePartsStyle,
      ws = Un("menu-bg"),
      ks = Un("menu-shadow"),
      _s = bs({
        baseStyle: xs({
          button: {
            transitionProperty: "common",
            transitionDuration: "normal"
          },
          list: (l(Uo = {},
          ws.variable, "#fff"), l(Uo, ks.variable, "shadows.sm"), l(Uo, "_dark", (l(Wo = {},
          ws.variable, "colors.gray.700"), l(Wo, ks.variable, "shadows.dark-lg"), Wo)), l(Uo, "color", "inherit"), l(Uo, "minW", "3xs"), l(Uo, "py", "2"), l(Uo, "zIndex", 1), l(Uo, "borderRadius", "md"), l(Uo, "borderWidth", "1px"), l(Uo, "bg", ws.reference), l(Uo, "boxShadow", ks.reference), Uo),
          item: {
            py: "1.5",
            px: "3",
            transitionProperty: "background",
            transitionDuration: "ultra-fast",
            transitionTimingFunction: "ease-in",
            _focus: (Ho = {},
            l(Ho, ws.variable, "colors.gray.100"), l(Ho, "_dark", l({},
            ws.variable, "colors.whiteAlpha.100")), Ho),
            _active: ($o = {},
            l($o, ws.variable, "colors.gray.200"), l($o, "_dark", l({},
            ws.variable, "colors.whiteAlpha.200")), $o),
            _expanded: (qo = {},
            l(qo, ws.variable, "colors.gray.100"), l(qo, "_dark", l({},
            ws.variable, "colors.whiteAlpha.100")), qo),
            _disabled: {
              opacity: .4,
              cursor: "not-allowed"
            },
            bg: ws.reference
          },
          groupTitle: {
            mx: 4,
            my: 2,
            fontWeight: "semibold",
            fontSize: "sm"
          },
          command: {
            opacity: .6
          },
          divider: {
            border: 0,
            borderBottom: "1px solid",
            borderColor: "inherit",
            my: "2",
            opacity: .6
          }
        })
      }),
      Ss = Ar(Ba.keys),
      Es = Ss.defineMultiStyleConfig,
      Cs = Ss.definePartsStyle,
      As = {
        bg: "blackAlpha.600",
        zIndex: "modal"
      },
      Ps = function(e) {
        return {
          display: "flex",
          zIndex: "modal",
          justifyContent: "center",
          alignItems: e.isCentered ? "center": "flex-start",
          overflow: "inside" === e.scrollBehavior ? "hidden": "auto",
          overscrollBehaviorY: "none"
        }
      },
      Ts = function(e) {
        var t = e.scrollBehavior;
        return {
          borderRadius: "md",
          bg: Co("white", "gray.700")(e),
          color: "inherit",
          my: "16",
          zIndex: "modal",
          maxH: "inside" === t ? "calc(100% - 7.5rem)": void 0,
          boxShadow: Co("lg", "dark-lg")(e)
        }
      },
      zs = {
        px: "6",
        py: "4",
        fontSize: "xl",
        fontWeight: "semibold"
      },
      js = {
        position: "absolute",
        top: "2",
        insetEnd: "3"
      },
      Rs = function(e) {
        return {
          px: "6",
          py: "2",
          flex: "1",
          overflow: "inside" === e.scrollBehavior ? "auto": void 0
        }
      },
      Ms = {
        px: "6",
        py: "4"
      };
      function Ns(e) {
        return Cs("full" === e ? {
          dialog: {
            maxW: "100vw",
            minH: "$100vh",
            my: "0",
            borderRadius: "0"
          }
        }: {
          dialog: {
            maxW: e
          }
        })
      }
      var Os = Es({
        baseStyle: Cs((function(e) {
          return {
            overlay: As,
            dialogContainer: Wi(Ps, e),
            dialog: Wi(Ts, e),
            header: zs,
            closeButton: js,
            body: Wi(Rs, e),
            footer: Ms
          }
        })),
        sizes: {
          xs: Ns("xs"),
          sm: Ns("sm"),
          md: Ns("md"),
          lg: Ns("lg"),
          xl: Ns("xl"),
          "2xl": Ns("2xl"),
          "3xl": Ns("3xl"),
          "4xl": Ns("4xl"),
          "5xl": Ns("5xl"),
          "6xl": Ns("6xl"),
          full: Ns("full")
        },
        defaultProps: {
          size: "md"
        }
      }),
      Bs = {
        letterSpacings: {
          tighter: "-0.05em",
          tight: "-0.025em",
          normal: "0",
          wide: "0.025em",
          wider: "0.05em",
          widest: "0.1em"
        },
        lineHeights: {
          normal: "normal",
          none: 1,
          shorter: 1.25,
          short: 1.375,
          base: 1.5,
          tall: 1.625,
          taller: "2",
          3 : ".75rem",
          4 : "1rem",
          5 : "1.25rem",
          6 : "1.5rem",
          7 : "1.75rem",
          8 : "2rem",
          9 : "2.25rem",
          10 : "2.5rem"
        },
        fontWeights: {
          hairline: 100,
          thin: 200,
          light: 300,
          normal: 400,
          medium: 500,
          semibold: 600,
          bold: 700,
          extrabold: 800,
          black: 900
        },
        fonts: {
          heading: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
          body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
          mono: 'SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace'
        },
        fontSizes: {
          "3xs": "0.45rem",
          "2xs": "0.625rem",
          xs: "0.75rem",
          sm: "0.875rem",
          md: "1rem",
          lg: "1.125rem",
          xl: "1.25rem",
          "2xl": "1.5rem",
          "3xl": "1.875rem",
          "4xl": "2.25rem",
          "5xl": "3rem",
          "6xl": "3.75rem",
          "7xl": "4.5rem",
          "8xl": "6rem",
          "9xl": "8rem"
        }
      },
      Ls = Ar(La.keys),
      Fs = Ls.defineMultiStyleConfig,
      Ds = Ls.definePartsStyle,
      Is = Ai("number-input-stepper-width"),
      Vs = Ai("number-input-input-padding"),
      Ws = _i(Is).add("0.5rem").toString(),
      Us = Ai("number-input-bg"),
      Hs = Ai("number-input-color"),
      $s = Ai("number-input-border-color"),
      qs = (l(Go = {},
      Is.variable, "sizes.6"), l(Go, Vs.variable, Ws), Go),
      Gs = function(e) {
        var t, n;
        return null !== (t = null == (n = Wi(fs.baseStyle, e)) ? void 0 : n.field) && void 0 !== t ? t: {}
      },
      Ys = {
        width: Is.reference
      },
      Xs = (l(Ko = {
        borderStart: "1px solid",
        borderStartColor: $s.reference,
        color: Hs.reference,
        bg: Us.reference
      },
      Hs.variable, "colors.chakra-body-text"), l(Ko, $s.variable, "colors.chakra-border-color"), l(Ko, "_dark", (l(Yo = {},
      Hs.variable, "colors.whiteAlpha.800"), l(Yo, $s.variable, "colors.whiteAlpha.300"), Yo)), l(Ko, "_active", (l(Xo = {},
      Us.variable, "colors.gray.200"), l(Xo, "_dark", l({},
      Us.variable, "colors.whiteAlpha.300")), Xo)), l(Ko, "_disabled", {
        opacity: .4,
        cursor: "not-allowed"
      }), Ko);
      function Ks(e) {
        var t, n, r, a = null == (n = fs.sizes) ? void 0 : n[e],
        o = {
          lg: "md",
          md: "md",
          sm: "sm",
          xs: "sm"
        },
        i = null !== (t = null == (r = a.field) ? void 0 : r.fontSize) && void 0 !== t ? t: "md",
        l = Bs.fontSizes[i];
        return Ds({
          field: c(c({},
          a.field), {},
          {
            paddingInlineEnd: Vs.reference,
            verticalAlign: "top"
          }),
          stepper: {
            fontSize: _i(l).multiply(.75).toString(),
            _first: {
              borderTopEndRadius: o[e]
            },
            _last: {
              borderBottomEndRadius: o[e],
              mt: "-1px",
              borderTopWidth: 1
            }
          }
        })
      }
      var Qs, Zs, Js, ec, tc, nc, rc, ac, oc, ic, lc, sc, cc, uc, dc, fc, pc, gc = Fs({
        baseStyle: Ds((function(e) {
          var t;
          return {
            root: qs,
            field: null !== (t = Wi(Gs, e)) && void 0 !== t ? t: {},
            stepperGroup: Ys,
            stepper: Xs
          }
        })),
        sizes: {
          xs: Ks("xs"),
          sm: Ks("sm"),
          md: Ks("md"),
          lg: Ks("lg")
        },
        variants: fs.variants,
        defaultProps: fs.defaultProps
      }),
      vc = {
        baseStyle: c(c({},
        null == (Qs = fs.baseStyle) ? void 0 : Qs.field), {},
        {
          textAlign: "center"
        }),
        sizes: {
          lg: {
            fontSize: "lg",
            w: 12,
            h: 12,
            borderRadius: "md"
          },
          md: {
            fontSize: "md",
            w: 10,
            h: 10,
            borderRadius: "md"
          },
          sm: {
            fontSize: "sm",
            w: 8,
            h: 8,
            borderRadius: "sm"
          },
          xs: {
            fontSize: "xs",
            w: 6,
            h: 6,
            borderRadius: "sm"
          }
        },
        variants: {
          outline: function(e) {
            var t, n, r;
            return null !== (t = null == (r = Wi(null == (n = fs.variants) ? void 0 : n.outline, e)) ? void 0 : r.field) && void 0 !== t ? t: {}
          },
          flushed: function(e) {
            var t, n, r;
            return null !== (t = null == (r = Wi(null == (n = fs.variants) ? void 0 : n.flushed, e)) ? void 0 : r.field) && void 0 !== t ? t: {}
          },
          filled: function(e) {
            var t, n, r;
            return null !== (t = null == (r = Wi(null == (n = fs.variants) ? void 0 : n.filled, e)) ? void 0 : r.field) && void 0 !== t ? t: {}
          },
          unstyled: null !== (Qo = null == (Zs = fs.variants) ? void 0 : Zs.unstyled.field) && void 0 !== Qo ? Qo: {}
        },
        defaultProps: fs.defaultProps
      },
      mc = Ar(Fa.keys),
      hc = mc.defineMultiStyleConfig,
      yc = mc.definePartsStyle,
      bc = Ai("popper-bg"),
      xc = Ai("popper-arrow-bg"),
      wc = Ai("popper-arrow-shadow-color"),
      kc = hc({
        baseStyle: yc({
          popper: {
            zIndex: 10
          },
          content: (l(Jo = {},
          bc.variable, "colors.white"), l(Jo, "bg", bc.reference), l(Jo, xc.variable, bc.reference), l(Jo, wc.variable, "colors.gray.200"), l(Jo, "_dark", (l(Zo = {},
          bc.variable, "colors.gray.700"), l(Zo, wc.variable, "colors.whiteAlpha.300"), Zo)), l(Jo, "width", "xs"), l(Jo, "border", "1px solid"), l(Jo, "borderColor", "inherit"), l(Jo, "borderRadius", "md"), l(Jo, "boxShadow", "sm"), l(Jo, "zIndex", "inherit"), l(Jo, "_focusVisible", {
            outline: 0,
            boxShadow: "outline"
          }), Jo),
          header: {
            px: 3,
            py: 2,
            borderBottomWidth: "1px"
          },
          body: {
            px: 3,
            py: 2
          },
          footer: {
            px: 3,
            py: 2,
            borderTopWidth: "1px"
          },
          closeButton: {
            position: "absolute",
            borderRadius: "md",
            top: 1,
            insetEnd: 2,
            padding: 2
          }
        })
      }),
      _c = Ar(Da.keys),
      Sc = _c.defineMultiStyleConfig,
      Ec = _c.definePartsStyle,
      Cc = function(e) {
        var t = e.colorScheme,
        n = e.theme,
        r = e.isIndeterminate,
        a = e.hasStripe,
        o = Co(So(), So("1rem", "rgba(0,0,0,0.1)"))(e),
        i = Co("".concat(t, ".500"), "".concat(t, ".200"))(e),
        l = "linear-gradient(\n    to right,\n    transparent 0%,\n    ".concat(wo(n, i), " 50%,\n    transparent 100%\n  )");
        return c(c({},
        !r && a && o), r ? {
          bgImage: l
        }: {
          bgColor: i
        })
      },
      Ac = {
        lineHeight: "1",
        fontSize: "0.25em",
        fontWeight: "bold",
        color: "white"
      },
      Pc = function(e) {
        return {
          bg: Co("gray.100", "whiteAlpha.300")(e)
        }
      },
      Tc = function(e) {
        return c({
          transitionProperty: "common",
          transitionDuration: "slow"
        },
        Cc(e))
      },
      zc = Ec((function(e) {
        return {
          label: Ac,
          filledTrack: Tc(e),
          track: Pc(e)
        }
      })),
      jc = Sc({
        sizes: {
          xs: Ec({
            track: {
              h: "1"
            }
          }),
          sm: Ec({
            track: {
              h: "2"
            }
          }),
          md: Ec({
            track: {
              h: "3"
            }
          }),
          lg: Ec({
            track: {
              h: "4"
            }
          })
        },
        baseStyle: zc,
        defaultProps: {
          size: "md",
          colorScheme: "blue"
        }
      }),
      Rc = Ar(Ia.keys),
      Mc = Rc.defineMultiStyleConfig,
      Nc = Rc.definePartsStyle,
      Oc = function(e) {
        var t, n = null == (t = Wi(Cl.baseStyle, e)) ? void 0 : t.control;
        return c(c({},
        n), {},
        {
          borderRadius: "full",
          _checked: c(c({},
          null == n ? void 0 : n._checked), {},
          {
            _before: {
              content: '""',
              display: "inline-block",
              pos: "relative",
              w: "50%",
              h: "50%",
              borderRadius: "50%",
              bg: "currentColor"
            }
          })
        })
      },
      Bc = Mc({
        baseStyle: Nc((function(e) {
          var t, n, r, a;
          return {
            label: null == (n = (t = Cl).baseStyle) ? void 0 : n.call(t, e).label,
            container: null == (a = (r = Cl).baseStyle) ? void 0 : a.call(r, e).container,
            control: Oc(e)
          }
        })),
        sizes: {
          md: Nc({
            control: {
              w: "4",
              h: "4"
            },
            label: {
              fontSize: "md"
            }
          }),
          lg: Nc({
            control: {
              w: "5",
              h: "5"
            },
            label: {
              fontSize: "lg"
            }
          }),
          sm: Nc({
            control: {
              width: "3",
              height: "3"
            },
            label: {
              fontSize: "sm"
            }
          })
        },
        defaultProps: {
          size: "md",
          colorScheme: "blue"
        }
      }),
      Lc = Ar(Va.keys),
      Fc = Lc.defineMultiStyleConfig,
      Dc = Lc.definePartsStyle,
      Ic = Un("select-bg"),
      Vc = {
        paddingInlineEnd: "8"
      },
      Wc = Fc({
        baseStyle: Dc({
          field: c(c({},
          null == (Js = fs.baseStyle) ? void 0 : Js.field), {},
          (l(ei = {
            appearance: "none",
            paddingBottom: "1px",
            lineHeight: "normal",
            bg: Ic.reference
          },
          Ic.variable, "colors.white"), l(ei, "_dark", l({},
          Ic.variable, "colors.gray.700")), l(ei, "> option, > optgroup", {
            bg: Ic.reference
          }), ei)),
          icon: {
            width: "6",
            height: "100%",
            insetEnd: "2",
            position: "relative",
            color: "currentColor",
            fontSize: "xl",
            _disabled: {
              opacity: .5
            }
          }
        }),
        sizes: {
          lg: c(c({},
          null == (ec = fs.sizes) ? void 0 : ec.lg), {},
          {
            field: c(c({},
            null == (tc = fs.sizes) ? void 0 : tc.lg.field), Vc)
          }),
          md: c(c({},
          null == (nc = fs.sizes) ? void 0 : nc.md), {},
          {
            field: c(c({},
            null == (rc = fs.sizes) ? void 0 : rc.md.field), Vc)
          }),
          sm: c(c({},
          null == (ac = fs.sizes) ? void 0 : ac.sm), {},
          {
            field: c(c({},
            null == (oc = fs.sizes) ? void 0 : oc.sm.field), Vc)
          }),
          xs: c(c({},
          null == (ic = fs.sizes) ? void 0 : ic.xs), {},
          {
            field: c(c({},
            null == (lc = fs.sizes) ? void 0 : lc.xs.field), Vc),
            icon: {
              insetEnd: "1"
            }
          })
        },
        variants: fs.variants,
        defaultProps: fs.defaultProps
      }),
      Uc = Un("skeleton-start-color"),
      Hc = Un("skeleton-end-color"),
      $c = {
        baseStyle: (l(ni = {},
        Uc.variable, "colors.gray.100"), l(ni, Hc.variable, "colors.gray.400"), l(ni, "_dark", (l(ti = {},
        Uc.variable, "colors.gray.800"), l(ti, Hc.variable, "colors.gray.600"), ti)), l(ni, "background", Uc.reference), l(ni, "borderColor", Hc.reference), l(ni, "opacity", .7), l(ni, "borderRadius", "sm"), ni)
      },
      qc = Un("skip-link-bg"),
      Gc = {
        baseStyle: {
          borderRadius: "md",
          fontWeight: "semibold",
          _focusVisible: (ri = {
            boxShadow: "outline",
            padding: "4",
            position: "fixed",
            top: "6",
            insetStart: "6"
          },
          l(ri, qc.variable, "colors.white"), l(ri, "_dark", l({},
          qc.variable, "colors.gray.700")), l(ri, "bg", qc.reference), ri)
        }
      },
      Yc = Ar(Wa.keys),
      Xc = Yc.defineMultiStyleConfig,
      Kc = Yc.definePartsStyle,
      Qc = Un("slider-thumb-size"),
      Zc = Un("slider-track-size"),
      Jc = Un("slider-bg"),
      eu = function(e) {
        return c({
          display: "inline-block",
          position: "relative",
          cursor: "pointer",
          _disabled: {
            opacity: .6,
            cursor: "default",
            pointerEvents: "none"
          }
        },
        Ao({
          orientation: e.orientation,
          vertical: {
            h: "100%"
          },
          horizontal: {
            w: "100%"
          }
        }))
      },
      tu = function(e) {
        var t, n;
        return c(c({},
        Ao({
          orientation: e.orientation,
          horizontal: {
            h: Zc.reference
          },
          vertical: {
            w: Zc.reference
          }
        })), {},
        (l(n = {
          overflow: "hidden",
          borderRadius: "sm"
        },
        Jc.variable, "colors.gray.200"), l(n, "_dark", l({},
        Jc.variable, "colors.whiteAlpha.200")), l(n, "_disabled", (l(t = {},
        Jc.variable, "colors.gray.300"), l(t, "_dark", l({},
        Jc.variable, "colors.whiteAlpha.300")), t)), l(n, "bg", Jc.reference), n))
      },
      nu = function(e) {
        return c(c({},
        Ao({
          orientation: e.orientation,
          vertical: {
            left: "50%",
            transform: "translateX(-50%)",
            _active: {
              transform: "translateX(-50%) scale(1.15)"
            }
          },
          horizontal: {
            top: "50%",
            transform: "translateY(-50%)",
            _active: {
              transform: "translateY(-50%) scale(1.15)"
            }
          }
        })), {},
        {
          w: Qc.reference,
          h: Qc.reference,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          outline: 0,
          zIndex: 1,
          borderRadius: "full",
          bg: "white",
          boxShadow: "base",
          border: "1px solid",
          borderColor: "transparent",
          transitionProperty: "transform",
          transitionDuration: "normal",
          _focusVisible: {
            boxShadow: "outline"
          },
          _disabled: {
            bg: "gray.300"
          }
        })
      },
      ru = function(e) {
        var t, n = e.colorScheme;
        return l(t = {
          width: "inherit",
          height: "inherit"
        },
        Jc.variable, "colors.".concat(n, ".500")),
        l(t, "_dark", l({},
        Jc.variable, "colors.".concat(n, ".200"))),
        l(t, "bg", Jc.reference),
        t
      },
      au = Xc({
        baseStyle: Kc((function(e) {
          return {
            container: eu(e),
            track: tu(e),
            thumb: nu(e),
            filledTrack: ru(e)
          }
        })),
        sizes: {
          lg: Kc({
            container: (ai = {},
            l(ai, Qc.variable, "sizes.4"), l(ai, Zc.variable, "sizes.1"), ai)
          }),
          md: Kc({
            container: (oi = {},
            l(oi, Qc.variable, "sizes.3.5"), l(oi, Zc.variable, "sizes.1"), oi)
          }),
          sm: Kc({
            container: (ii = {},
            l(ii, Qc.variable, "sizes.2.5"), l(ii, Zc.variable, "sizes.0.5"), ii)
          })
        },
        defaultProps: {
          size: "md",
          colorScheme: "blue"
        }
      }),
      ou = Ai("spinner-size"),
      iu = {
        baseStyle: {
          width: [ou.reference],
          height: [ou.reference]
        },
        sizes: {
          xs: l({},
          ou.variable, "sizes.3"),
          sm: l({},
          ou.variable, "sizes.4"),
          md: l({},
          ou.variable, "sizes.6"),
          lg: l({},
          ou.variable, "sizes.8"),
          xl: l({},
          ou.variable, "sizes.12")
        },
        defaultProps: {
          size: "md"
        }
      },
      lu = Ar(Ua.keys),
      su = lu.defineMultiStyleConfig,
      cu = lu.definePartsStyle,
      uu = su({
        baseStyle: cu({
          container: {},
          label: {
            fontWeight: "medium"
          },
          helpText: {
            opacity: .8,
            marginBottom: "2"
          },
          number: {
            verticalAlign: "baseline",
            fontWeight: "semibold"
          },
          icon: {
            marginEnd: 1,
            w: "3.5",
            h: "3.5",
            verticalAlign: "middle"
          }
        }),
        sizes: {
          md: cu({
            label: {
              fontSize: "sm"
            },
            helpText: {
              fontSize: "sm"
            },
            number: {
              fontSize: "2xl"
            }
          })
        },
        defaultProps: {
          size: "md"
        }
      }),
      du = Ar(Ha.keys),
      fu = du.defineMultiStyleConfig,
      pu = du.definePartsStyle,
      gu = Ai("switch-track-width"),
      vu = Ai("switch-track-height"),
      mu = Ai("switch-track-diff"),
      hu = _i.subtract(gu, vu),
      yu = Ai("switch-thumb-x"),
      bu = Ai("switch-bg"),
      xu = function(e) {
        var t, n, r = e.colorScheme;
        return l(n = {
          borderRadius: "full",
          p: "0.5",
          width: [gu.reference],
          height: [vu.reference],
          transitionProperty: "common",
          transitionDuration: "fast"
        },
        bu.variable, "colors.gray.300"),
        l(n, "_dark", l({},
        bu.variable, "colors.whiteAlpha.400")),
        l(n, "_focusVisible", {
          boxShadow: "outline"
        }),
        l(n, "_disabled", {
          opacity: .4,
          cursor: "not-allowed"
        }),
        l(n, "_checked", (l(t = {},
        bu.variable, "colors.".concat(r, ".500")), l(t, "_dark", l({},
        bu.variable, "colors.".concat(r, ".200"))), t)),
        l(n, "bg", bu.reference),
        n
      },
      wu = {
        bg: "white",
        transitionProperty: "transform",
        transitionDuration: "normal",
        borderRadius: "inherit",
        width: [vu.reference],
        height: [vu.reference],
        _checked: {
          transform: "translateX(".concat(yu.reference, ")")
        }
      },
      ku = fu({
        baseStyle: pu((function(e) {
          var t;
          return {
            container: (t = {},
            l(t, mu.variable, hu), l(t, yu.variable, mu.reference), l(t, "_rtl", l({},
            yu.variable, _i(mu).negate().toString())), t),
            track: xu(e),
            thumb: wu
          }
        })),
        sizes: {
          sm: pu({
            container: (li = {},
            l(li, gu.variable, "1.375rem"), l(li, vu.variable, "sizes.3"), li)
          }),
          md: pu({
            container: (si = {},
            l(si, gu.variable, "1.875rem"), l(si, vu.variable, "sizes.4"), si)
          }),
          lg: pu({
            container: (ci = {},
            l(ci, gu.variable, "2.875rem"), l(ci, vu.variable, "sizes.6"), ci)
          })
        },
        defaultProps: {
          size: "md",
          colorScheme: "blue"
        }
      }),
      _u = Ar($a.keys),
      Su = _u.defineMultiStyleConfig,
      Eu = _u.definePartsStyle,
      Cu = Eu({
        table: {
          fontVariantNumeric: "lining-nums tabular-nums",
          borderCollapse: "collapse",
          width: "full"
        },
        th: {
          fontFamily: "heading",
          fontWeight: "bold",
          textTransform: "uppercase",
          letterSpacing: "wider",
          textAlign: "start"
        },
        td: {
          textAlign: "start"
        },
        caption: {
          mt: 4,
          fontFamily: "heading",
          textAlign: "center",
          fontWeight: "medium"
        }
      }),
      Au = {
        "&[data-is-numeric=true]": {
          textAlign: "end"
        }
      },
      Pu = Su({
        baseStyle: Cu,
        variants: {
          simple: Eu((function(e) {
            var t = e.colorScheme;
            return {
              th: c({
                color: Co("gray.600", "gray.400")(e),
                borderBottom: "1px",
                borderColor: Co("".concat(t, ".100"), "".concat(t, ".700"))(e)
              },
              Au),
              td: c({
                borderBottom: "1px",
                borderColor: Co("".concat(t, ".100"), "".concat(t, ".700"))(e)
              },
              Au),
              caption: {
                color: Co("gray.600", "gray.100")(e)
              },
              tfoot: {
                tr: {
                  "&:last-of-type": {
                    th: {
                      borderBottomWidth: 0
                    }
                  }
                }
              }
            }
          })),
          striped: Eu((function(e) {
            var t = e.colorScheme;
            return {
              th: c({
                color: Co("gray.600", "gray.400")(e),
                borderBottom: "1px",
                borderColor: Co("".concat(t, ".100"), "".concat(t, ".700"))(e)
              },
              Au),
              td: c({
                borderBottom: "1px",
                borderColor: Co("".concat(t, ".100"), "".concat(t, ".700"))(e)
              },
              Au),
              caption: {
                color: Co("gray.600", "gray.100")(e)
              },
              tbody: {
                tr: {
                  "&:nth-of-type(odd)": {
                    "th, td": {
                      borderBottomWidth: "1px",
                      borderColor: Co("".concat(t, ".100"), "".concat(t, ".700"))(e)
                    },
                    td: {
                      background: Co("".concat(t, ".100"), "".concat(t, ".700"))(e)
                    }
                  }
                }
              },
              tfoot: {
                tr: {
                  "&:last-of-type": {
                    th: {
                      borderBottomWidth: 0
                    }
                  }
                }
              }
            }
          })),
          unstyled: {}
        },
        sizes: {
          sm: Eu({
            th: {
              px: "4",
              py: "1",
              lineHeight: "4",
              fontSize: "xs"
            },
            td: {
              px: "4",
              py: "2",
              fontSize: "sm",
              lineHeight: "4"
            },
            caption: {
              px: "4",
              py: "2",
              fontSize: "xs"
            }
          }),
          md: Eu({
            th: {
              px: "6",
              py: "3",
              lineHeight: "4",
              fontSize: "xs"
            },
            td: {
              px: "6",
              py: "4",
              lineHeight: "5"
            },
            caption: {
              px: "6",
              py: "2",
              fontSize: "sm"
            }
          }),
          lg: Eu({
            th: {
              px: "8",
              py: "4",
              lineHeight: "5",
              fontSize: "sm"
            },
            td: {
              px: "8",
              py: "5",
              lineHeight: "6"
            },
            caption: {
              px: "6",
              py: "2",
              fontSize: "md"
            }
          })
        },
        defaultProps: {
          variant: "simple",
          size: "md",
          colorScheme: "gray"
        }
      }),
      Tu = Un("tabs-color"),
      zu = Un("tabs-bg"),
      ju = Un("tabs-border-color"),
      Ru = Ar(qa.keys),
      Mu = Ru.defineMultiStyleConfig,
      Nu = Ru.definePartsStyle,
      Ou = function(e) {
        return {
          display: "vertical" === e.orientation ? "flex": "block"
        }
      },
      Bu = function(e) {
        return {
          flex: e.isFitted ? 1 : void 0,
          transitionProperty: "common",
          transitionDuration: "normal",
          _focusVisible: {
            zIndex: 1,
            boxShadow: "outline"
          },
          _disabled: {
            cursor: "not-allowed",
            opacity: .4
          }
        }
      },
      Lu = function(e) {
        var t = e.align,
        n = void 0 === t ? "start": t,
        r = e.orientation;
        return {
          justifyContent: {
            end: "flex-end",
            center: "center",
            start: "flex-start"
          } [n],
          flexDirection: "vertical" === r ? "column": "row"
        }
      },
      Fu = {
        p: 4
      },
      Du = Mu({
        baseStyle: Nu((function(e) {
          return {
            root: Ou(e),
            tab: Bu(e),
            tablist: Lu(e),
            tabpanel: Fu
          }
        })),
        sizes: {
          sm: Nu({
            tab: {
              py: 1,
              px: 4,
              fontSize: "sm"
            }
          }),
          md: Nu({
            tab: {
              fontSize: "md",
              py: 2,
              px: 4
            }
          }),
          lg: Nu({
            tab: {
              fontSize: "lg",
              py: 3,
              px: 4
            }
          })
        },
        variants: {
          line: Nu((function(e) {
            var t, n, r, a, o = e.colorScheme,
            i = e.orientation,
            s = "vertical" === i ? "borderStart": "borderBottom",
            c = "vertical" === i ? "marginStart": "marginBottom";
            return {
              tablist: (t = {},
              l(t, s, "2px solid"), l(t, "borderColor", "inherit"), t),
              tab: (a = {},
              l(a, s, "2px solid"), l(a, "borderColor", "transparent"), l(a, c, "-2px"), l(a, "_selected", (n = {},
              l(n, Tu.variable, "colors.".concat(o, ".600")), l(n, "_dark", l({},
              Tu.variable, "colors.".concat(o, ".300"))), l(n, "borderColor", "currentColor"), n)), l(a, "_active", (r = {},
              l(r, zu.variable, "colors.gray.200"), l(r, "_dark", l({},
              zu.variable, "colors.whiteAlpha.300")), r)), l(a, "_disabled", {
                _active: {
                  bg: "none"
                }
              }), l(a, "color", Tu.reference), l(a, "bg", zu.reference), a)
            }
          })),
          enclosed: Nu((function(e) {
            var t, n, r, a = e.colorScheme;
            return {
              tab: (r = {
                borderTopRadius: "md",
                border: "1px solid",
                borderColor: "transparent",
                mb: "-1px"
              },
              l(r, ju.variable, "transparent"), l(r, "_selected", (n = {},
              l(n, Tu.variable, "colors.".concat(a, ".600")), l(n, ju.variable, "colors.white"), l(n, "_dark", (t = {},
              l(t, Tu.variable, "colors.".concat(a, ".300")), l(t, ju.variable, "colors.gray.800"), t)), l(n, "borderColor", "inherit"), l(n, "borderBottomColor", ju.reference), n)), l(r, "color", Tu.reference), r),
              tablist: {
                mb: "-1px",
                borderBottom: "1px solid",
                borderColor: "inherit"
              }
            }
          })),
          "enclosed-colored": Nu((function(e) {
            var t, n, r, a = e.colorScheme;
            return {
              tab: (r = {
                border: "1px solid",
                borderColor: "inherit"
              },
              l(r, zu.variable, "colors.gray.50"), l(r, "_dark", l({},
              zu.variable, "colors.whiteAlpha.50")), l(r, "mb", "-1px"), l(r, "_notLast", {
                marginEnd: "-1px"
              }), l(r, "_selected", (n = {},
              l(n, zu.variable, "colors.white"), l(n, Tu.variable, "colors.".concat(a, ".600")), l(n, "_dark", (t = {},
              l(t, zu.variable, "colors.gray.800"), l(t, Tu.variable, "colors.".concat(a, ".300")), t)), l(n, "borderColor", "inherit"), l(n, "borderTopColor", "currentColor"), l(n, "borderBottomColor", "transparent"), n)), l(r, "color", Tu.reference), l(r, "bg", zu.reference), r),
              tablist: {
                mb: "-1px",
                borderBottom: "1px solid",
                borderColor: "inherit"
              }
            }
          })),
          "soft-rounded": Nu((function(e) {
            var t = e.colorScheme,
            n = e.theme;
            return {
              tab: {
                borderRadius: "full",
                fontWeight: "semibold",
                color: "gray.600",
                _selected: {
                  color: wo(n, "".concat(t, ".700")),
                  bg: wo(n, "".concat(t, ".100"))
                }
              }
            }
          })),
          "solid-rounded": Nu((function(e) {
            var t, n, r, a = e.colorScheme;
            return {
              tab: (r = {
                borderRadius: "full",
                fontWeight: "semibold"
              },
              l(r, Tu.variable, "colors.gray.600"), l(r, "_dark", l({},
              Tu.variable, "inherit")), l(r, "_selected", (n = {},
              l(n, Tu.variable, "colors.white"), l(n, zu.variable, "colors.".concat(a, ".600")), l(n, "_dark", (t = {},
              l(t, Tu.variable, "colors.gray.800"), l(t, zu.variable, "colors.".concat(a, ".300")), t)), n)), l(r, "color", Tu.reference), l(r, "bg", zu.reference), r)
            }
          })),
          unstyled: Nu({})
        },
        defaultProps: {
          size: "md",
          variant: "line",
          colorScheme: "blue"
        }
      }),
      Iu = Ar(Ga.keys),
      Vu = Iu.defineMultiStyleConfig,
      Wu = Iu.definePartsStyle,
      Uu = Wu({
        container: {
          fontWeight: "medium",
          lineHeight: 1.2,
          outline: 0,
          borderRadius: "md",
          _focusVisible: {
            boxShadow: "outline"
          }
        },
        label: {
          lineHeight: 1.2,
          overflow: "visible"
        },
        closeButton: {
          fontSize: "lg",
          w: "5",
          h: "5",
          transitionProperty: "common",
          transitionDuration: "normal",
          borderRadius: "full",
          marginStart: "1.5",
          marginEnd: "-1",
          opacity: .5,
          _disabled: {
            opacity: .4
          },
          _focusVisible: {
            boxShadow: "outline",
            bg: "rgba(0, 0, 0, 0.14)"
          },
          _hover: {
            opacity: .8
          },
          _active: {
            opacity: 1
          }
        }
      }),
      Hu = {
        sm: Wu({
          container: {
            minH: "5",
            minW: "5",
            fontSize: "xs",
            px: "2"
          },
          closeButton: {
            marginEnd: "-2px",
            marginStart: "0.35rem"
          }
        }),
        md: Wu({
          container: {
            minH: "6",
            minW: "6",
            fontSize: "sm",
            px: "2"
          }
        }),
        lg: Wu({
          container: {
            minH: "8",
            minW: "8",
            fontSize: "md",
            px: "3"
          }
        })
      },
      $u = Vu({
        variants: {
          subtle: Wu((function(e) {
            var t;
            return {
              container: null == (t = rl.variants) ? void 0 : t.subtle(e)
            }
          })),
          solid: Wu((function(e) {
            var t;
            return {
              container: null == (t = rl.variants) ? void 0 : t.solid(e)
            }
          })),
          outline: Wu((function(e) {
            var t;
            return {
              container: null == (t = rl.variants) ? void 0 : t.outline(e)
            }
          }))
        },
        baseStyle: Uu,
        sizes: Hu,
        defaultProps: {
          size: "md",
          variant: "subtle",
          colorScheme: "gray"
        }
      }),
      qu = c(c({},
      null == (sc = fs.baseStyle) ? void 0 : sc.field), {},
      {
        paddingY: "2",
        minHeight: "20",
        lineHeight: "short",
        verticalAlign: "top"
      }),
      Gu = {
        outline: function(e) {
          var t, n;
          return null !== (t = null == (n = fs.variants) ? void 0 : n.outline(e).field) && void 0 !== t ? t: {}
        },
        flushed: function(e) {
          var t, n;
          return null !== (t = null == (n = fs.variants) ? void 0 : n.flushed(e).field) && void 0 !== t ? t: {}
        },
        filled: function(e) {
          var t, n;
          return null !== (t = null == (n = fs.variants) ? void 0 : n.filled(e).field) && void 0 !== t ? t: {}
        },
        unstyled: null !== (ui = null == (cc = fs.variants) ? void 0 : cc.unstyled.field) && void 0 !== ui ? ui: {}
      },
      Yu = {
        baseStyle: qu,
        sizes: {
          xs: null !== (di = null == (uc = fs.sizes) ? void 0 : uc.xs.field) && void 0 !== di ? di: {},
          sm: null !== (fi = null == (dc = fs.sizes) ? void 0 : dc.sm.field) && void 0 !== fi ? fi: {},
          md: null !== (pi = null == (fc = fs.sizes) ? void 0 : fc.md.field) && void 0 !== pi ? pi: {},
          lg: null !== (gi = null == (pc = fs.sizes) ? void 0 : pc.lg.field) && void 0 !== gi ? gi: {}
        },
        variants: Gu,
        defaultProps: {
          size: "md",
          variant: "outline"
        }
      },
      Xu = Ai("tooltip-bg"),
      Ku = Ai("tooltip-fg"),
      Qu = Ai("popper-arrow-bg"),
      Zu = (l(mi = {
        bg: Xu.reference,
        color: Ku.reference
      },
      Xu.variable, "colors.gray.700"), l(mi, Ku.variable, "colors.whiteAlpha.900"), l(mi, "_dark", (l(vi = {},
      Xu.variable, "colors.gray.300"), l(vi, Ku.variable, "colors.gray.900"), vi)), l(mi, Qu.variable, Xu.reference), l(mi, "px", "2"), l(mi, "py", "0.5"), l(mi, "borderRadius", "sm"), l(mi, "fontWeight", "medium"), l(mi, "fontSize", "sm"), l(mi, "boxShadow", "md"), l(mi, "maxW", "xs"), l(mi, "zIndex", "tooltip"), mi),
      Ju = {
        Accordion: ji,
        Alert: Fi,
        Avatar: Ji,
        Badge: rl,
        Breadcrumb: ol,
        Button: cl,
        Checkbox: Cl,
        CloseButton: Tl,
        Code: zl,
        Container: jl,
        Divider: Rl,
        Drawer: ql,
        Editable: Xl,
        Form: es,
        FormError: os,
        FormLabel: is,
        Heading: ls,
        Input: fs,
        Kbd: gs,
        Link: vs,
        List: hs,
        Menu: _s,
        Modal: Os,
        NumberInput: gc,
        PinInput: vc,
        Popover: kc,
        Progress: jc,
        Radio: Bc,
        Select: Wc,
        Skeleton: $c,
        SkipLink: Gc,
        Slider: au,
        Spinner: iu,
        Stat: uu,
        Switch: ku,
        Table: Pu,
        Tabs: Du,
        Tag: $u,
        Textarea: Yu,
        Tooltip: {
          baseStyle: Zu
        },
        Card: hl
      },
      ed = {
        none: 0,
        "1px": "1px solid",
        "2px": "2px solid",
        "4px": "4px solid",
        "8px": "8px solid"
      },
      td = {
        xs: "0 0 0 1px rgba(0, 0, 0, 0.05)",
        sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        base: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
        md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        outline: "0 0 0 3px rgba(66, 153, 225, 0.6)",
        inner: "inset 0 2px 4px 0 rgba(0,0,0,0.06)",
        none: "none",
        "dark-lg": "rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 5px 10px, rgba(0, 0, 0, 0.4) 0px 15px 40px"
      },
      nd = {
        property: {
          common: "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
          colors: "background-color, border-color, color, fill, stroke",
          dimensions: "width, height",
          position: "left, right, top, bottom",
          background: "background-color, background-image, background-position"
        },
        easing: {
          "ease-in": "cubic-bezier(0.4, 0, 1, 1)",
          "ease-out": "cubic-bezier(0, 0, 0.2, 1)",
          "ease-in-out": "cubic-bezier(0.4, 0, 0.2, 1)"
        },
        duration: {
          "ultra-fast": "50ms",
          faster: "100ms",
          fast: "150ms",
          normal: "200ms",
          slow: "300ms",
          slower: "400ms",
          "ultra-slow": "500ms"
        }
      },
      rd = c(c({
        breakpoints: {
          base: "0em",
          sm: "30em",
          md: "48em",
          lg: "62em",
          xl: "80em",
          "2xl": "96em"
        },
        zIndices: {
          hide: -1,
          auto: "auto",
          base: 0,
          docked: 10,
          dropdown: 1e3,
          sticky: 1100,
          banner: 1200,
          overlay: 1300,
          modal: 1400,
          popover: 1500,
          skipLink: 1600,
          toast: 1700,
          tooltip: 1800
        },
        radii: {
          none: "0",
          sm: "0.125rem",
          base: "0.25rem",
          md: "0.375rem",
          lg: "0.5rem",
          xl: "0.75rem",
          "2xl": "1rem",
          "3xl": "1.5rem",
          full: "9999px"
        },
        blur: {
          none: 0,
          sm: "4px",
          base: "8px",
          md: "12px",
          lg: "16px",
          xl: "24px",
          "2xl": "40px",
          "3xl": "64px"
        },
        colors: {
          transparent: "transparent",
          current: "currentColor",
          black: "#000000",
          white: "#FFFFFF",
          whiteAlpha: {
            50 : "rgba(255, 255, 255, 0.04)",
            100 : "rgba(255, 255, 255, 0.06)",
            200 : "rgba(255, 255, 255, 0.08)",
            300 : "rgba(255, 255, 255, 0.16)",
            400 : "rgba(255, 255, 255, 0.24)",
            500 : "rgba(255, 255, 255, 0.36)",
            600 : "rgba(255, 255, 255, 0.48)",
            700 : "rgba(255, 255, 255, 0.64)",
            800 : "rgba(255, 255, 255, 0.80)",
            900 : "rgba(255, 255, 255, 0.92)"
          },
          blackAlpha: {
            50 : "rgba(0, 0, 0, 0.04)",
            100 : "rgba(0, 0, 0, 0.06)",
            200 : "rgba(0, 0, 0, 0.08)",
            300 : "rgba(0, 0, 0, 0.16)",
            400 : "rgba(0, 0, 0, 0.24)",
            500 : "rgba(0, 0, 0, 0.36)",
            600 : "rgba(0, 0, 0, 0.48)",
            700 : "rgba(0, 0, 0, 0.64)",
            800 : "rgba(0, 0, 0, 0.80)",
            900 : "rgba(0, 0, 0, 0.92)"
          },
          gray: {
            50 : "#F7FAFC",
            100 : "#EDF2F7",
            200 : "#E2E8F0",
            300 : "#CBD5E0",
            400 : "#A0AEC0",
            500 : "#718096",
            600 : "#4A5568",
            700 : "#2D3748",
            800 : "#1A202C",
            900 : "#171923"
          },
          red: {
            50 : "#FFF5F5",
            100 : "#FED7D7",
            200 : "#FEB2B2",
            300 : "#FC8181",
            400 : "#F56565",
            500 : "#E53E3E",
            600 : "#C53030",
            700 : "#9B2C2C",
            800 : "#822727",
            900 : "#63171B"
          },
          orange: {
            50 : "#FFFAF0",
            100 : "#FEEBC8",
            200 : "#FBD38D",
            300 : "#F6AD55",
            400 : "#ED8936",
            500 : "#DD6B20",
            600 : "#C05621",
            700 : "#9C4221",
            800 : "#7B341E",
            900 : "#652B19"
          },
          yellow: {
            50 : "#FFFFF0",
            100 : "#FEFCBF",
            200 : "#FAF089",
            300 : "#F6E05E",
            400 : "#ECC94B",
            500 : "#D69E2E",
            600 : "#B7791F",
            700 : "#975A16",
            800 : "#744210",
            900 : "#5F370E"
          },
          green: {
            50 : "#F0FFF4",
            100 : "#C6F6D5",
            200 : "#9AE6B4",
            300 : "#68D391",
            400 : "#48BB78",
            500 : "#38A169",
            600 : "#2F855A",
            700 : "#276749",
            800 : "#22543D",
            900 : "#1C4532"
          },
          teal: {
            50 : "#E6FFFA",
            100 : "#B2F5EA",
            200 : "#81E6D9",
            300 : "#4FD1C5",
            400 : "#38B2AC",
            500 : "#319795",
            600 : "#2C7A7B",
            700 : "#285E61",
            800 : "#234E52",
            900 : "#1D4044"
          },
          blue: {
            50 : "#ebf8ff",
            100 : "#bee3f8",
            200 : "#90cdf4",
            300 : "#63b3ed",
            400 : "#4299e1",
            500 : "#3182ce",
            600 : "#2b6cb0",
            700 : "#2c5282",
            800 : "#2a4365",
            900 : "#1A365D"
          },
          cyan: {
            50 : "#EDFDFD",
            100 : "#C4F1F9",
            200 : "#9DECF9",
            300 : "#76E4F7",
            400 : "#0BC5EA",
            500 : "#00B5D8",
            600 : "#00A3C4",
            700 : "#0987A0",
            800 : "#086F83",
            900 : "#065666"
          },
          purple: {
            50 : "#FAF5FF",
            100 : "#E9D8FD",
            200 : "#D6BCFA",
            300 : "#B794F4",
            400 : "#9F7AEA",
            500 : "#805AD5",
            600 : "#6B46C1",
            700 : "#553C9A",
            800 : "#44337A",
            900 : "#322659"
          },
          pink: {
            50 : "#FFF5F7",
            100 : "#FED7E2",
            200 : "#FBB6CE",
            300 : "#F687B3",
            400 : "#ED64A6",
            500 : "#D53F8C",
            600 : "#B83280",
            700 : "#97266D",
            800 : "#702459",
            900 : "#521B41"
          },
          linkedin: {
            50 : "#E8F4F9",
            100 : "#CFEDFB",
            200 : "#9BDAF3",
            300 : "#68C7EC",
            400 : "#34B3E4",
            500 : "#00A0DC",
            600 : "#008CC9",
            700 : "#0077B5",
            800 : "#005E93",
            900 : "#004471"
          },
          facebook: {
            50 : "#E8F4F9",
            100 : "#D9DEE9",
            200 : "#B7C2DA",
            300 : "#6482C0",
            400 : "#4267B2",
            500 : "#385898",
            600 : "#314E89",
            700 : "#29487D",
            800 : "#223B67",
            900 : "#1E355B"
          },
          messenger: {
            50 : "#D0E6FF",
            100 : "#B9DAFF",
            200 : "#A2CDFF",
            300 : "#7AB8FF",
            400 : "#2E90FF",
            500 : "#0078FF",
            600 : "#0063D1",
            700 : "#0052AC",
            800 : "#003C7E",
            900 : "#002C5C"
          },
          whatsapp: {
            50 : "#dffeec",
            100 : "#b9f5d0",
            200 : "#90edb3",
            300 : "#65e495",
            400 : "#3cdd78",
            500 : "#22c35e",
            600 : "#179848",
            700 : "#0c6c33",
            800 : "#01421c",
            900 : "#001803"
          },
          twitter: {
            50 : "#E5F4FD",
            100 : "#C8E9FB",
            200 : "#A8DCFA",
            300 : "#83CDF7",
            400 : "#57BBF5",
            500 : "#1DA1F2",
            600 : "#1A94DA",
            700 : "#1681BF",
            800 : "#136B9E",
            900 : "#0D4D71"
          },
          telegram: {
            50 : "#E3F2F9",
            100 : "#C5E4F3",
            200 : "#A2D4EC",
            300 : "#7AC1E4",
            400 : "#47A9DA",
            500 : "#0088CC",
            600 : "#007AB8",
            700 : "#006BA1",
            800 : "#005885",
            900 : "#003F5E"
          }
        }
      },
      Bs), {},
      {
        sizes: Ii,
        shadows: td,
        space: Di,
        borders: ed,
        transition: nd
      }),
      ad = {
        colors: {
          "chakra-body-text": {
            _light: "gray.800",
            _dark: "whiteAlpha.900"
          },
          "chakra-body-bg": {
            _light: "white",
            _dark: "gray.800"
          },
          "chakra-border-color": {
            _light: "gray.200",
            _dark: "whiteAlpha.300"
          },
          "chakra-subtle-bg": {
            _light: "gray.100",
            _dark: "gray.700"
          },
          "chakra-placeholder-color": {
            _light: "gray.500",
            _dark: "whiteAlpha.400"
          }
        }
      },
      od = {
        global: {
          body: {
            fontFamily: "body",
            color: "chakra-body-text",
            bg: "chakra-body-bg",
            transitionProperty: "background-color",
            transitionDuration: "normal",
            lineHeight: "base"
          },
          "*::placeholder": {
            color: "chakra-placeholder-color"
          },
          "*, *::before, &::after": {
            borderColor: "chakra-border-color",
            wordWrap: "break-word"
          }
        }
      };
      var id = {
        useSystemColorMode: !1,
        initialColorMode: "light",
        cssVarPrefix: "chakra"
      },
      ld = c(c({
        semanticTokens: ad,
        direction: "ltr"
      },
      rd), {},
      {
        components: Ju,
        styles: od,
        config: id
      }),
      sd = c(c({
        semanticTokens: ad,
        direction: "ltr",
        components: {}
      },
      rd), {},
      {
        styles: od,
        config: id
      }),
      cd = function() {
        for (var e = arguments.length,
        t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return t.filter(Boolean).join(" ")
      };
      var ud = ["as", "viewBox", "color", "focusable", "children", "className", "__css"],
      dd = {
        path: e.createElement("g", {
          stroke: "currentColor",
          strokeWidth: "1.5"
        },
        e.createElement("path", {
          strokeLinecap: "round",
          fill: "none",
          d: "M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25"
        }), e.createElement("path", {
          fill: "currentColor",
          strokeLinecap: "round",
          d: "M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0"
        }), e.createElement("circle", {
          fill: "none",
          strokeMiterlimit: "10",
          cx: "12",
          cy: "12",
          r: "11.25"
        })),
        viewBox: "0 0 24 24"
      },
      fd = da((function(t, n) {
        var r = t.as,
        a = t.viewBox,
        o = t.color,
        i = void 0 === o ? "currentColor": o,
        l = t.focusable,
        s = void 0 !== l && l,
        d = t.children,
        f = t.className,
        p = t.__css,
        g = u(t, ud),
        v = cd("chakra-icon", f),
        m = pa("Icon", t),
        h = {
          ref: n,
          focusable: s,
          className: v,
          __css: c(c({
            w: "1em",
            h: "1em",
            display: "inline-block",
            lineHeight: "1em",
            flexShrink: 0,
            color: i
          },
          p), m)
        },
        y = null !== a && void 0 !== a ? a: dd.viewBox;
        if (r && "string" !== typeof r) return e.createElement(va.svg, c(c({
          as: r
        },
        h), g));
        var b = null !== d && void 0 !== d ? d: dd.path;
        return e.createElement(va.svg, c(c({
          verticalAlign: "middle",
          viewBox: y
        },
        h), g), b)
      }));
      fd.displayName = "Icon";
      var pd = ["label", "thickness", "speed", "emptyColor", "className"],
      gd = function() {
        var e = Ie.apply(void 0, arguments),
        t = "animation-" + e.name;
        return {
          name: t,
          styles: "@keyframes " + t + "{" + e.styles + "}",
          anim: 1,
          toString: function() {
            return "_EMO_" + this.name + "_" + this.styles + "_EMO_"
          }
        }
      } ({
        "0%": {
          transform: "rotate(0deg)"
        },
        "100%": {
          transform: "rotate(360deg)"
        }
      }),
      vd = da((function(t, n) {
        var r = pa("Spinner", t),
        a = zr(t),
        o = a.label,
        i = void 0 === o ? "Loading...": o,
        l = a.thickness,
        s = void 0 === l ? "2px": l,
        d = a.speed,
        f = void 0 === d ? "0.45s": d,
        p = a.emptyColor,
        g = void 0 === p ? "transparent": p,
        v = a.className,
        m = u(a, pd),
        h = function() {
          for (var e = arguments.length,
          t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
          return t.filter(Boolean).join(" ")
        } ("chakra-spinner", v),
        y = c({
          display: "inline-block",
          borderColor: "currentColor",
          borderStyle: "solid",
          borderRadius: "99999px",
          borderWidth: s,
          borderBottomColor: g,
          borderLeftColor: g,
          animation: "".concat(gd, " ").concat(f, " linear infinite")
        },
        r);
        return e.createElement(va.div, c({
          ref: n,
          __css: y,
          className: h
        },
        m), i && e.createElement(va.span, {
          srOnly: !0
        },
        i))
      }));
      vd.displayName = "Spinner";
      var md = ["status", "addRole"],
      hd = function() {
        for (var e = arguments.length,
        t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return t.filter(Boolean).join(" ")
      };
      function yd(t) {
        return e.createElement(fd, c({
          viewBox: "0 0 24 24"
        },
        t), e.createElement("path", {
          fill: "currentColor",
          d: "M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"
        }))
      }
      var bd = Ye(Ke({
        name: "AlertContext",
        hookName: "useAlertContext",
        providerName: "<Alert />"
      }), 2),
      xd = bd[0],
      wd = bd[1],
      kd = Ye(Ke({
        name: "AlertStylesContext",
        hookName: "useAlertStyles",
        providerName: "<Alert />"
      }), 2),
      _d = kd[0],
      Sd = kd[1],
      Ed = {
        info: {
          icon: function(t) {
            return e.createElement(fd, c({
              viewBox: "0 0 24 24"
            },
            t), e.createElement("path", {
              fill: "currentColor",
              d: "M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm.25,5a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,12.25,5ZM14.5,18.5h-4a1,1,0,0,1,0-2h.75a.25.25,0,0,0,.25-.25v-4.5a.25.25,0,0,0-.25-.25H10.5a1,1,0,0,1,0-2h1a2,2,0,0,1,2,2v4.75a.25.25,0,0,0,.25.25h.75a1,1,0,1,1,0,2Z"
            }))
          },
          colorScheme: "blue"
        },
        warning: {
          icon: yd,
          colorScheme: "orange"
        },
        success: {
          icon: function(t) {
            return e.createElement(fd, c({
              viewBox: "0 0 24 24"
            },
            t), e.createElement("path", {
              fill: "currentColor",
              d: "M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
            }))
          },
          colorScheme: "green"
        },
        error: {
          icon: yd,
          colorScheme: "red"
        },
        loading: {
          icon: vd,
          colorScheme: "blue"
        }
      };
      var Cd = da((function(t, n) {
        var r, a = zr(t),
        o = a.status,
        i = void 0 === o ? "info": o,
        l = a.addRole,
        s = void 0 === l || l,
        d = u(a, md),
        f = null !== (r = t.colorScheme) && void 0 !== r ? r: function(e) {
          return Ed[e].colorScheme
        } (i),
        p = ga("Alert", c(c({},
        t), {},
        {
          colorScheme: f
        })),
        g = c({
          width: "100%",
          display: "flex",
          alignItems: "center",
          position: "relative",
          overflow: "hidden"
        },
        p.container);
        return e.createElement(xd, {
          value: {
            status: i
          }
        },
        e.createElement(_d, {
          value: p
        },
        e.createElement(va.div, c(c({
          role: s ? "alert": void 0,
          ref: n
        },
        d), {},
        {
          className: hd("chakra-alert", t.className),
          __css: g
        }))))
      }));
      Cd.displayName = "Alert";
      var Ad = da((function(t, n) {
        var r = c({
          display: "inline"
        },
        Sd().description);
        return e.createElement(va.div, c(c({
          ref: n
        },
        t), {},
        {
          className: hd("chakra-alert__desc", t.className),
          __css: r
        }))
      }));
      function Pd(t) {
        var n = wd().status,
        r = function(e) {
          return Ed[e].icon
        } (n),
        a = Sd(),
        o = "loading" === n ? a.spinner: a.icon;
        return e.createElement(va.span, c(c({
          display: "inherit"
        },
        t), {},
        {
          className: hd("chakra-alert__icon", t.className),
          __css: o
        }), t.children || e.createElement(r, {
          h: "100%",
          w: "100%"
        }))
      }
      Ad.displayName = "AlertDescription",
      Pd.displayName = "AlertIcon";
      var Td = da((function(t, n) {
        var r = Sd();
        return e.createElement(va.div, c(c({
          ref: n
        },
        t), {},
        {
          className: hd("chakra-alert__title", t.className),
          __css: r.title
        }))
      }));
      Td.displayName = "AlertTitle";
      var zd = ["children", "isDisabled", "__css"];
      function jd(t) {
        return e.createElement(fd, c({
          focusable: "false",
          "aria-hidden": !0
        },
        t), e.createElement("path", {
          fill: "currentColor",
          d: "M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"
        }))
      }
      var Rd = da((function(t, n) {
        var r = pa("CloseButton", t),
        a = zr(t),
        o = a.children,
        i = a.isDisabled,
        l = a.__css,
        s = u(a, zd);
        return e.createElement(va.button, c({
          type: "button",
          "aria-label": "Close",
          ref: n,
          disabled: i,
          __css: c(c(c({},
          {
            outline: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0
          }), r), l)
        },
        s), o || e.createElement(jd, {
          width: "1em",
          height: "1em"
        }))
      }));
      Rd.displayName = "CloseButton";
      var Md = 1 / 60 * 1e3,
      Nd = "undefined" !== typeof performance ?
      function() {
        return performance.now()
      }: function() {
        return Date.now()
      },
      Od = "undefined" !== typeof window ?
      function(e) {
        return window.requestAnimationFrame(e)
      }: function(e) {
        return setTimeout((function() {
          return e(Nd())
        }), Md)
      };
      var Bd = !0,
      Ld = !1,
      Fd = !1,
      Dd = {
        delta: 0,
        timestamp: 0
      },
      Id = ["read", "update", "preRender", "render", "postRender"],
      Vd = Id.reduce((function(e, t) {
        return e[t] = function(e) {
          var t = [],
          n = [],
          r = 0,
          a = !1,
          o = !1,
          i = new WeakSet,
          l = {
            schedule: function(e) {
              var o = arguments.length > 2 && void 0 !== arguments[2] && arguments[2] && a,
              l = o ? t: n;
              return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] && i.add(e),
              -1 === l.indexOf(e) && (l.push(e), o && a && (r = t.length)),
              e
            },
            cancel: function(e) {
              var t = n.indexOf(e); - 1 !== t && n.splice(t, 1),
              i.delete(e)
            },
            process: function(s) {
              if (a) o = !0;
              else {
                a = !0;
                var c = [n, t];
                if (t = c[0], (n = c[1]).length = 0, r = t.length) for (var u = 0; u < r; u++) {
                  var d = t[u];
                  d(s),
                  i.has(d) && (l.schedule(d), e())
                }
                a = !1,
                o && (o = !1, l.process(s))
              }
            }
          };
          return l
        } ((function() {
          return Ld = !0
        })),
        e
      }), {}),
      Wd = Id.reduce((function(e, t) {
        var n = Vd[t];
        return e[t] = function(e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          return Ld || Gd(),
          n.schedule(e, t, r)
        },
        e
      }), {}),
      Ud = Id.reduce((function(e, t) {
        return e[t] = Vd[t].cancel,
        e
      }), {}),
      Hd = Id.reduce((function(e, t) {
        return e[t] = function() {
          return Vd[t].process(Dd)
        },
        e
      }), {}),
      $d = function(e) {
        return Vd[e].process(Dd)
      },
      qd = function e(t) {
        Ld = !1,
        Dd.delta = Bd ? Md: Math.max(Math.min(t - Dd.timestamp, 40), 1),
        Dd.timestamp = t,
        Fd = !0,
        Id.forEach($d),
        Fd = !1,
        Ld && (Bd = !1, Od(e))
      },
      Gd = function() {
        Ld = !0,
        Bd = !0,
        Fd || Od(qd)
      },
      Yd = function() {
        return Dd
      },
      Xd = Wd,
      Kd = "undefined" !== typeof document,
      Qd = Kd ? e.useLayoutEffect: e.useEffect;
      function Zd() {
        var t = (0, e.useRef)(!1);
        return Qd((function() {
          return t.current = !0,
          function() {
            t.current = !1
          }
        }), []),
        t
      }
      var Jd = (0, e.createContext)(null);
      function ef(t) {
        var n = (0, e.useRef)(null);
        return null === n.current && (n.current = t()),
        n.current
      }
      var tf = function(e) {
        Mt(n, e);
        var t = to(n);
        function n() {
          return Qa(this, n),
          t.apply(this, arguments)
        }
        return Ka(n, [{
          key: "getSnapshotBeforeUpdate",
          value: function(e) {
            var t = this.props.childRef.current;
            if (t && e.isPresent && !this.props.isPresent) {
              var n = this.props.sizeRef.current;
              n.height = t.offsetHeight || 0,
              n.width = t.offsetWidth || 0,
              n.top = t.offsetTop,
              n.left = t.offsetLeft
            }
            return null
          }
        },
        {
          key: "componentDidUpdate",
          value: function() {}
        },
        {
          key: "render",
          value: function() {
            return this.props.children
          }
        }]),
        n
      } (e.Component);
      function nf(t) {
        var n = t.children,
        r = t.isPresent,
        a = (0, e.useId)(),
        o = (0, e.useRef)(null),
        i = (0, e.useRef)({
          width: 0,
          height: 0,
          top: 0,
          left: 0
        });
        return (0, e.useInsertionEffect)((function() {
          var e = i.current,
          t = e.width,
          n = e.height,
          l = e.top,
          s = e.left;
          if (!r && o.current && t && n) {
            o.current.dataset.motionPopId = a;
            var c = document.createElement("style");
            return document.head.appendChild(c),
            c.sheet && c.sheet.insertRule('\n          [data-motion-pop-id="'.concat(a, '"] {\n            position: absolute !important;\n            width: ').concat(t, "px !important;\n            height: ").concat(n, "px !important;\n            top: ").concat(l, "px !important;\n            left: ").concat(s, "px !important;\n          }\n        ")),
            function() {
              document.head.removeChild(c)
            }
          }
        }), [r]),
        e.createElement(tf, {
          isPresent: r,
          childRef: o,
          sizeRef: i
        },
        e.cloneElement(n, {
          ref: o
        }))
      }
      var rf = function(t) {
        var n = t.children,
        r = t.initial,
        a = t.isPresent,
        o = t.onExitComplete,
        i = t.custom,
        l = t.presenceAffectsLayout,
        s = t.mode,
        c = ef(af),
        u = (0, e.useId)(),
        d = (0, e.useMemo)((function() {
          return {
            id: u,
            initial: r,
            isPresent: a,
            custom: i,
            onExitComplete: function(e) {
              c.set(e, !0);
              var t, n = zt(c.values());
              try {
                for (n.s(); ! (t = n.n()).done;) {
                  if (!t.value) return
                }
              } catch(r) {
                n.e(r)
              } finally {
                n.f()
              }
              o && o()
            },
            register: function(e) {
              return c.set(e, !1),
              function() {
                return c.delete(e)
              }
            }
          }
        }), l ? void 0 : [a]);
        return (0, e.useMemo)((function() {
          c.forEach((function(e, t) {
            return c.set(t, !1)
          }))
        }), [a]),
        e.useEffect((function() { ! a && !c.size && o && o()
        }), [a]),
        "popLayout" === s && (n = e.createElement(nf, {
          isPresent: a
        },
        n)),
        e.createElement(Jd.Provider, {
          value: d
        },
        n)
      };
      function af() {
        return new Map
      }
      var of = (0, e.createContext)({});
      function lf(t) {
        return (0, e.useEffect)((function() {
          return function() {
            return t()
          }
        }), [])
      }
      var sf = new Set;
      function cf(e, t, n) {
        e || sf.has(t) || (console.warn(t), n && console.warn(n), sf.add(t))
      }
      var uf = function(e) {
        return e.key || ""
      };
      var df = function(t) {
        var n = t.children,
        r = t.custom,
        a = t.initial,
        o = void 0 === a || a,
        i = t.onExitComplete,
        l = t.exitBeforeEnter,
        s = t.presenceAffectsLayout,
        c = void 0 === s || s,
        u = t.mode,
        d = void 0 === u ? "sync": u;
        l && (d = "wait", cf(!1, "Replace exitBeforeEnter with mode='wait'"));
        var f = function() {
          var t = Zd(),
          n = Ye((0, e.useState)(0), 2),
          r = n[0],
          a = n[1],
          o = (0, e.useCallback)((function() {
            t.current && a(r + 1)
          }), [r]);
          return [(0, e.useCallback)((function() {
            return Xd.postRender(o)
          }), [o]), r]
        } (),
        p = Ye(f, 1)[0],
        g = (0, e.useContext)(of).forceRender;
        g && (p = g);
        var v = Zd(),
        m = function(t) {
          var n = [];
          return e.Children.forEach(t, (function(t) { (0, e.isValidElement)(t) && n.push(t)
          })),
          n
        } (n),
        h = m,
        y = new Set,
        b = (0, e.useRef)(h),
        x = (0, e.useRef)(new Map).current,
        w = (0, e.useRef)(!0);
        if (Qd((function() {
          w.current = !1,
          function(e, t) {
            e.forEach((function(e) {
              var n = uf(e);
              t.set(n, e)
            }))
          } (m, x),
          b.current = h
        })), lf((function() {
          w.current = !0,
          x.clear(),
          y.clear()
        })), w.current) return e.createElement(e.Fragment, null, h.map((function(t) {
          return e.createElement(rf, {
            key: uf(t),
            isPresent: !0,
            initial: !!o && void 0,
            presenceAffectsLayout: c,
            mode: d
          },
          t)
        })));
        h = pt(h);
        for (var k = b.current.map(uf), _ = m.map(uf), S = k.length, E = 0; E < S; E++) {
          var C = k[E]; - 1 === _.indexOf(C) && y.add(C)
        }
        return "wait" === d && y.size && (h = []),
        y.forEach((function(t) {
          if ( - 1 === _.indexOf(t)) {
            var n = x.get(t);
            if (n) {
              var a = k.indexOf(t);
              h.splice(a, 0, e.createElement(rf, {
                key: uf(n),
                isPresent: !1,
                onExitComplete: function() {
                  x.delete(t),
                  y.delete(t);
                  var e = b.current.findIndex((function(e) {
                    return e.key === t
                  }));
                  if (b.current.splice(e, 1), !y.size) {
                    if (b.current = m, !1 === v.current) return;
                    p(),
                    i && i()
                  }
                },
                custom: r,
                presenceAffectsLayout: c,
                mode: d
              },
              n))
            }
          }
        })),
        h = h.map((function(t) {
          var n = t.key;
          return y.has(n) ? t: e.createElement(rf, {
            key: uf(t),
            isPresent: !0,
            presenceAffectsLayout: c,
            mode: d
          },
          t)
        })),
        e.createElement(e.Fragment, null, y.size ? h: h.map((function(t) {
          return (0, e.cloneElement)(t)
        })))
      };
      function ff(t) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
        r = (0, e.useRef)(t);
        return (0, e.useEffect)((function() {
          r.current = t
        })),
        (0, e.useCallback)((function() {
          for (var e, t, n = arguments.length,
          a = new Array(n), o = 0; o < n; o++) a[o] = arguments[o];
          return null == (t = r.current) ? void 0 : (e = t).call.apply(e, [r].concat(a))
        }), n)
      }
      function pf(t, n) {
        var r = (0, e.useRef)(!1),
        a = (0, e.useRef)(!1); (0, e.useEffect)((function() {
          if (r.current && a.current) return t();
          a.current = !0
        }), n),
        (0, e.useEffect)((function() {
          return r.current = !0,
          function() {
            r.current = !1
          }
        }), [])
      }
      function gf() {
        var t = (0, e.useContext)(Jd);
        if (null === t) return [!0, null];
        var n = t.isPresent,
        r = t.onExitComplete,
        a = t.register,
        o = (0, e.useId)(); (0, e.useEffect)((function() {
          return a(o)
        }), []);
        return ! n && r ? [!1,
        function() {
          return r && r(o)
        }] : [!0]
      }
      function vf() {
        return null === (t = (0, e.useContext)(Jd)) || t.isPresent;
        var t
      }
      var mf = (0, e.createContext)({
        transformPagePoint: function(e) {
          return e
        },
        isStatic: !1,
        reducedMotion: "never"
      }),
      hf = (0, e.createContext)({});
      var yf = (0, e.createContext)({
        strict: !1
      });
      function bf(t, n, r, a) {
        var o = (0, e.useContext)(hf).visualElement,
        i = (0, e.useContext)(yf),
        l = (0, e.useContext)(Jd),
        s = (0, e.useContext)(mf).reducedMotion,
        c = (0, e.useRef)();
        a = a || i.renderer,
        !c.current && a && (c.current = a(t, {
          visualState: n,
          parent: o,
          props: r,
          presenceId: l ? l.id: void 0,
          blockInitialAnimation: !!l && !1 === l.initial,
          reducedMotionConfig: s
        }));
        var u = c.current;
        return Qd((function() {
          u && u.render()
        })),
        (0, e.useEffect)((function() {
          u && u.animationState && u.animationState.animateChanges()
        })),
        Qd((function() {
          return function() {
            return u && u.notify("Unmount")
          }
        }), []),
        u
      }
      function xf(e) {
        return "object" === typeof e && Object.prototype.hasOwnProperty.call(e, "current")
      }
      function wf(e) {
        return "string" === typeof e || Array.isArray(e)
      }
      function kf(e) {
        return "object" === typeof e && "function" === typeof e.start
      }
      var _f = ["initial", "animate", "exit", "whileHover", "whileDrag", "whileTap", "whileFocus", "whileInView"];
      function Sf(e) {
        return kf(e.animate) || _f.some((function(t) {
          return wf(e[t])
        }))
      }
      function Ef(e) {
        return Boolean(Sf(e) || e.variants)
      }
      function Cf(t) {
        var n = function(e, t) {
          if (Sf(e)) {
            var n = e.initial,
            r = e.animate;
            return {
              initial: !1 === n || wf(n) ? n: void 0,
              animate: wf(r) ? r: void 0
            }
          }
          return ! 1 !== e.inherit ? t: {}
        } (t, (0, e.useContext)(hf)),
        r = n.initial,
        a = n.animate;
        return (0, e.useMemo)((function() {
          return {
            initial: r,
            animate: a
          }
        }), [Af(r), Af(a)])
      }
      function Af(e) {
        return Array.isArray(e) ? e.join(" ") : e
      }
      var Pf = function(e) {
        return {
          isEnabled: function(t) {
            return e.some((function(e) {
              return !! t[e]
            }))
          }
        }
      },
      Tf = {
        measureLayout: Pf(["layout", "layoutId", "drag"]),
        animation: Pf(["animate", "exit", "variants", "whileHover", "whileTap", "whileFocus", "whileDrag", "whileInView"]),
        exit: Pf(["exit"]),
        drag: Pf(["drag", "dragControls"]),
        focus: Pf(["whileFocus"]),
        hover: Pf(["whileHover", "onHoverStart", "onHoverEnd"]),
        tap: Pf(["whileTap", "onTap", "onTapStart", "onTapCancel"]),
        pan: Pf(["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"]),
        inView: Pf(["whileInView", "onViewportEnter", "onViewportLeave"])
      };
      var zf = {
        hasAnimatedSinceResize: !0,
        hasEverUpdated: !1
      },
      jf = 1;
      var Rf = function(e) {
        Mt(n, e);
        var t = to(n);
        function n() {
          return Qa(this, n),
          t.apply(this, arguments)
        }
        return Ka(n, [{
          key: "getSnapshotBeforeUpdate",
          value: function() {
            var e = this.props,
            t = e.visualElement,
            n = e.props;
            return t && t.setProps(n),
            null
          }
        },
        {
          key: "componentDidUpdate",
          value: function() {}
        },
        {
          key: "render",
          value: function() {
            return this.props.children
          }
        }]),
        n
      } (e.Component),
      Mf = (0, e.createContext)({}),
      Nf = Symbol.
      for ("motionComponentSymbol");
      function Of(t) {
        var n = t.preloadedFeatures,
        r = t.createVisualElement,
        a = t.projectionNodeConstructor,
        o = t.useRender,
        i = t.useVisualState,
        l = t.Component;
        n &&
        function(e) {
          for (var t in e)"projectionNodeConstructor" === t ? Tf.projectionNodeConstructor = e[t] : Tf[t].Component = e[t]
        } (n);
        var s = (0, e.forwardRef)((function(t, s) {
          var u = c(c(c({},
          (0, e.useContext)(mf)), t), {},
          {
            layoutId: Bf(t)
          }),
          d = u.isStatic,
          f = null,
          p = Cf(t),
          g = d ? void 0 : ef((function() {
            if (zf.hasEverUpdated) return jf++
          })),
          v = i(t, d);
          if (!d && Kd) {
            p.visualElement = bf(l, v, u, r);
            var m = (0, e.useContext)(yf).strict,
            h = (0, e.useContext)(Mf);
            p.visualElement && (f = p.visualElement.loadFeatures(u, m, n, g, a || Tf.projectionNodeConstructor, h))
          }
          return e.createElement(Rf, {
            visualElement: p.visualElement,
            props: u
          },
          f, e.createElement(hf.Provider, {
            value: p
          },
          o(l, t, g,
          function(t, n, r) {
            return (0, e.useCallback)((function(e) {
              e && t.mount && t.mount(e),
              n && (e ? n.mount(e) : n.unmount()),
              r && ("function" === typeof r ? r(e) : xf(r) && (r.current = e))
            }), [n])
          } (v, p.visualElement, s), v, d, p.visualElement)))
        }));
        return s[Nf] = l,
        s
      }
      function Bf(t) {
        var n = t.layoutId,
        r = (0, e.useContext)(of).id;
        return r && void 0 !== n ? r + "-" + n: n
      }
      function Lf(e) {
        function t(t) {
          var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return Of(e(t, n))
        }
        if ("undefined" === typeof Proxy) return t;
        var n = new Map;
        return new Proxy(t, {
          get: function(e, r) {
            return n.has(r) || n.set(r, t(r)),
            n.get(r)
          }
        })
      }
      var Ff = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "text", "tspan", "use", "view"];
      function Df(e) {
        return "string" === typeof e && !e.includes("-") && !!(Ff.indexOf(e) > -1 || /[A-Z]/.test(e))
      }
      var If = {};
      var Vf = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
      Wf = new Set(Vf);
      function Uf(e, t) {
        var n = t.layout,
        r = t.layoutId;
        return Wf.has(e) || e.startsWith("origin") || (n || void 0 !== r) && ( !! If[e] || "opacity" === e)
      }
      var Hf = function(e) {
        return !! (null === e || void 0 === e ? void 0 : e.getVelocity)
      },
      $f = {
        x: "translateX",
        y: "translateY",
        z: "translateZ",
        transformPerspective: "perspective"
      },
      qf = function(e, t) {
        return Vf.indexOf(e) - Vf.indexOf(t)
      };
      function Gf(e) {
        return e.startsWith("--")
      }
      var Yf = function(e, t) {
        return t && "number" === typeof e ? t.transform(e) : e
      },
      Xf = function(e, t) {
        return function(n) {
          return Math.max(Math.min(n, t), e)
        }
      },
      Kf = function(e) {
        return e % 1 ? Number(e.toFixed(5)) : e
      },
      Qf = /(-)?([\d]*\.?[\d])+/g,
      Zf = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
      Jf = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
      function ep(e) {
        return "string" === typeof e
      }
      var tp = function(e) {
        return {
          test: function(t) {
            return ep(t) && t.endsWith(e) && 1 === t.split(" ").length
          },
          parse: parseFloat,
          transform: function(t) {
            return "".concat(t).concat(e)
          }
        }
      },
      np = tp("deg"),
      rp = tp("%"),
      ap = tp("px"),
      op = tp("vh"),
      ip = tp("vw"),
      lp = Object.assign(Object.assign({},
      rp), {
        parse: function(e) {
          return rp.parse(e) / 100
        },
        transform: function(e) {
          return rp.transform(100 * e)
        }
      }),
      sp = {
        test: function(e) {
          return "number" === typeof e
        },
        parse: parseFloat,
        transform: function(e) {
          return e
        }
      },
      cp = Object.assign(Object.assign({},
      sp), {
        transform: Xf(0, 1)
      }),
      up = Object.assign(Object.assign({},
      sp), {
      default:
        1
      }),
      dp = c(c({},
      sp), {},
      {
        transform: Math.round
      }),
      fp = {
        borderWidth: ap,
        borderTopWidth: ap,
        borderRightWidth: ap,
        borderBottomWidth: ap,
        borderLeftWidth: ap,
        borderRadius: ap,
        radius: ap,
        borderTopLeftRadius: ap,
        borderTopRightRadius: ap,
        borderBottomRightRadius: ap,
        borderBottomLeftRadius: ap,
        width: ap,
        maxWidth: ap,
        height: ap,
        maxHeight: ap,
        size: ap,
        top: ap,
        right: ap,
        bottom: ap,
        left: ap,
        padding: ap,
        paddingTop: ap,
        paddingRight: ap,
        paddingBottom: ap,
        paddingLeft: ap,
        margin: ap,
        marginTop: ap,
        marginRight: ap,
        marginBottom: ap,
        marginLeft: ap,
        rotate: np,
        rotateX: np,
        rotateY: np,
        rotateZ: np,
        scale: up,
        scaleX: up,
        scaleY: up,
        scaleZ: up,
        skew: np,
        skewX: np,
        skewY: np,
        distance: ap,
        translateX: ap,
        translateY: ap,
        translateZ: ap,
        x: ap,
        y: ap,
        z: ap,
        perspective: ap,
        transformPerspective: ap,
        opacity: cp,
        originX: lp,
        originY: lp,
        originZ: ap,
        zIndex: dp,
        fillOpacity: cp,
        strokeOpacity: cp,
        numOctaves: dp
      };
      function pp(e, t, n, r) {
        var a = e.style,
        o = e.vars,
        i = e.transform,
        l = e.transformKeys,
        s = e.transformOrigin;
        l.length = 0;
        var c = !1,
        u = !1,
        d = !0;
        for (var f in t) {
          var p = t[f];
          if (Gf(f)) o[f] = p;
          else {
            var g = fp[f],
            v = Yf(p, g);
            if (Wf.has(f)) {
              if (c = !0, i[f] = v, l.push(f), !d) continue;
              p !== (g.
            default || 0) && (d = !1)
            } else f.startsWith("origin") ? (u = !0, s[f] = v) : a[f] = v
          }
        }
        if (t.transform || (c || r ? a.transform = function(e, t, n, r) {
          var a = e.transform,
          o = e.transformKeys,
          i = t.enableHardwareAcceleration,
          l = void 0 === i || i,
          s = t.allowTransformNone,
          c = void 0 === s || s,
          u = "";
          o.sort(qf);
          var d, f = zt(o);
          try {
            for (f.s(); ! (d = f.n()).done;) {
              var p = d.value;
              u += "".concat($f[p] || p, "(").concat(a[p], ") ")
            }
          } catch(g) {
            f.e(g)
          } finally {
            f.f()
          }
          return l && !a.z && (u += "translateZ(0)"),
          u = u.trim(),
          r ? u = r(a, n ? "": u) : c && n && (u = "none"),
          u
        } (e, n, d, r) : a.transform && (a.transform = "none")), u) {
          var m = s.originX,
          h = void 0 === m ? "50%": m,
          y = s.originY,
          b = void 0 === y ? "50%": y,
          x = s.originZ,
          w = void 0 === x ? 0 : x;
          a.transformOrigin = "".concat(h, " ").concat(b, " ").concat(w)
        }
      }
      var gp = function() {
        return {
          style: {},
          transform: {},
          transformKeys: [],
          transformOrigin: {},
          vars: {}
        }
      };
      function vp(e, t, n) {
        for (var r in t) Hf(t[r]) || Uf(r, n) || (e[r] = t[r])
      }
      function mp(t, n, r) {
        var a = {};
        return vp(a, t.style || {},
        t),
        Object.assign(a,
        function(t, n, r) {
          var a = t.transformTemplate;
          return (0, e.useMemo)((function() {
            var e = {
              style: {},
              transform: {},
              transformKeys: [],
              transformOrigin: {},
              vars: {}
            };
            return pp(e, n, {
              enableHardwareAcceleration: !r
            },
            a),
            Object.assign({},
            e.vars, e.style)
          }), [n])
        } (t, n, r)),
        t.transformValues ? t.transformValues(a) : a
      }
      function hp(e, t, n) {
        var r = {},
        a = mp(e, t, n);
        return e.drag && !1 !== e.dragListener && (r.draggable = !1, a.userSelect = a.WebkitUserSelect = a.WebkitTouchCallout = "none", a.touchAction = !0 === e.drag ? "none": "pan-".concat("x" === e.drag ? "y": "x")),
        r.style = a,
        r
      }
      var yp = new Set(["initial", "style", "values", "variants", "transition", "transformTemplate", "transformValues", "custom", "inherit", "layout", "layoutId", "layoutDependency", "onLayoutAnimationStart", "onLayoutAnimationComplete", "onLayoutMeasure", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "drag", "dragControls", "dragListener", "dragConstraints", "dragDirectionLock", "dragSnapToOrigin", "_dragX", "_dragY", "dragElastic", "dragMomentum", "dragPropagation", "dragTransition", "onHoverStart", "onHoverEnd", "layoutScroll"].concat(["whileInView", "onViewportEnter", "onViewportLeave", "viewport"], ["whileTap", "onTap", "onTapStart", "onTapCancel"], ["animate", "exit", "variants", "whileHover", "whileTap", "whileFocus", "whileDrag", "whileInView"], ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"]));
      function bp(e) {
        return yp.has(e)
      }
      var xp, wp = function(e) {
        return ! bp(e)
      };
      try { (xp = require("@emotion/is-prop-valid").
      default) && (wp = function(e) {
          return e.startsWith("on") ? !bp(e) : xp(e)
        })
      } catch(Qs) {}
      function kp(e, t, n) {
        var r = {};
        for (var a in e)(wp(a) || !0 === n && bp(a) || !t && !bp(a) || e.draggable && a.startsWith("onDrag")) && (r[a] = e[a]);
        return r
      }
      function _p(e, t, n) {
        return "string" === typeof e ? e: ap.transform(t + n * e)
      }
      var Sp = {
        offset: "stroke-dashoffset",
        array: "stroke-dasharray"
      },
      Ep = {
        offset: "strokeDashoffset",
        array: "strokeDasharray"
      };
      var Cp = ["attrX", "attrY", "originX", "originY", "pathLength", "pathSpacing", "pathOffset"];
      function Ap(e, t, n, r) {
        var a = t.attrX,
        o = t.attrY,
        i = t.originX,
        l = t.originY,
        s = t.pathLength,
        c = t.pathSpacing,
        d = void 0 === c ? 1 : c,
        f = t.pathOffset,
        p = void 0 === f ? 0 : f;
        pp(e, u(t, Cp), n, r),
        e.attrs = e.style,
        e.style = {};
        var g = e.attrs,
        v = e.style,
        m = e.dimensions;
        g.transform && (m && (v.transform = g.transform), delete g.transform),
        m && (void 0 !== i || void 0 !== l || v.transform) && (v.transformOrigin = function(e, t, n) {
          var r = _p(t, e.x, e.width),
          a = _p(n, e.y, e.height);
          return "".concat(r, " ").concat(a)
        } (m, void 0 !== i ? i: .5, void 0 !== l ? l: .5)),
        void 0 !== a && (g.x = a),
        void 0 !== o && (g.y = o),
        void 0 !== s &&
        function(e, t) {
          var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          a = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
          e.pathLength = 1;
          var o = a ? Sp: Ep;
          e[o.offset] = ap.transform( - r);
          var i = ap.transform(t),
          l = ap.transform(n);
          e[o.array] = "".concat(i, " ").concat(l)
        } (g, s, d, p, !1)
      }
      var Pp = function() {
        return c(c({},
        {
          style: {},
          transform: {},
          transformKeys: [],
          transformOrigin: {},
          vars: {}
        }), {},
        {
          attrs: {}
        })
      };
      function Tp(t, n) {
        var r = (0, e.useMemo)((function() {
          var e = Pp();
          return Ap(e, n, {
            enableHardwareAcceleration: !1
          },
          t.transformTemplate),
          c(c({},
          e.attrs), {},
          {
            style: c({},
            e.style)
          })
        }), [n]);
        if (t.style) {
          var a = {};
          vp(a, t.style, t),
          r.style = c(c({},
          a), r.style)
        }
        return r
      }
      function zp() {
        var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        n = function(n, r, a, o, i, l) {
          var s = i.latestValues,
          u = (Df(n) ? Tp: hp)(r, s, l),
          d = c(c(c({},
          kp(r, "string" === typeof n, t)), u), {},
          {
            ref: o
          });
          return a && (d["data-projection-id"] = a),
          (0, e.createElement)(n, d)
        };
        return n
      }
      var jp = function(e) {
        return e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
      };
      function Rp(e, t, n, r) {
        var a = t.style,
        o = t.vars;
        for (var i in Object.assign(e.style, a, r && r.getProjectionStyles(n)), o) e.style.setProperty(i, o[i])
      }
      var Mp = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength"]);
      function Np(e, t, n, r) {
        for (var a in Rp(e, t, void 0, r), t.attrs) e.setAttribute(Mp.has(a) ? a: jp(a), t.attrs[a])
      }
      function Op(e) {
        var t = e.style,
        n = {};
        for (var r in t)(Hf(t[r]) || Uf(r, e)) && (n[r] = t[r]);
        return n
      }
      function Bp(e) {
        var t = Op(e);
        for (var n in e) {
          if (Hf(e[n])) t["x" === n || "y" === n ? "attr" + n.toUpperCase() : n] = e[n]
        }
        return t
      }
      function Lp(e, t, n) {
        var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
        return "function" === typeof t && (t = t(void 0 !== n ? n: e.custom, r, a)),
        "string" === typeof t && (t = e.variants && e.variants[t]),
        "function" === typeof t && (t = t(void 0 !== n ? n: e.custom, r, a)),
        t
      }
      var Fp = function(e) {
        return Array.isArray(e)
      },
      Dp = function(e) {
        return Fp(e) ? e[e.length - 1] || 0 : e
      };
      function Ip(e) {
        var t, n = Hf(e) ? e.get() : e;
        return t = n,
        Boolean(t && "object" === typeof t && t.mix && t.toValue) ? n.toValue() : n
      }
      var Vp = ["transitionEnd", "transition"];
      var Wp = function(t) {
        return function(n, r) {
          var a = (0, e.useContext)(hf),
          o = (0, e.useContext)(Jd),
          i = function() {
            return function(e, t, n, r) {
              var a = e.scrapeMotionValuesFromProps,
              o = e.createRenderState,
              i = e.onMount,
              l = {
                latestValues: Up(t, n, r, a),
                renderState: o()
              };
              return i && (l.mount = function(e) {
                return i(t, e, l)
              }),
              l
            } (t, n, a, o)
          };
          return r ? i() : ef(i)
        }
      };
      function Up(e, t, n, r) {
        var a = {},
        o = r(e);
        for (var i in o) a[i] = Ip(o[i]);
        var l = e.initial,
        s = e.animate,
        c = Sf(e),
        d = Ef(e);
        t && d && !c && !1 !== e.inherit && (void 0 === l && (l = t.initial), void 0 === s && (s = t.animate));
        var f = !!n && !1 === n.initial,
        p = (f = f || !1 === l) ? s: l;
        p && "boolean" !== typeof p && !kf(p) && (Array.isArray(p) ? p: [p]).forEach((function(t) {
          var n = Lp(e, t);
          if (n) {
            var r = n.transitionEnd,
            o = (n.transition, u(n, Vp));
            for (var i in o) {
              var l = o[i];
              if (Array.isArray(l)) l = l[f ? l.length - 1 : 0];
              null !== l && (a[i] = l)
            }
            for (var s in r) a[s] = r[s]
          }
        }));
        return a
      }
      var Hp, $p = {
        useVisualState: Wp({
          scrapeMotionValuesFromProps: Bp,
          createRenderState: Pp,
          onMount: function(e, t, n) {
            var r = n.renderState,
            a = n.latestValues;
            try {
              r.dimensions = "function" === typeof t.getBBox ? t.getBBox() : t.getBoundingClientRect()
            } catch(o) {
              r.dimensions = {
                x: 0,
                y: 0,
                width: 0,
                height: 0
              }
            }
            Ap(r, a, {
              enableHardwareAcceleration: !1
            },
            e.transformTemplate),
            Np(t, r)
          }
        })
      },
      qp = {
        useVisualState: Wp({
          scrapeMotionValuesFromProps: Op,
          createRenderState: gp
        })
      };
      function Gp(e, t, n) {
        var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
          passive: !0
        };
        return e.addEventListener(t, n, r),
        function() {
          return e.removeEventListener(t, n)
        }
      }
      function Yp(t, n, r, a) { (0, e.useEffect)((function() {
          var e = t.current;
          if (r && e) return Gp(e, n, r, a)
        }), [t, n, r, a])
      }
      function Xp(e) {
        return "undefined" !== typeof PointerEvent && e instanceof PointerEvent ? !("mouse" !== e.pointerType) : e instanceof MouseEvent
      }
      function Kp(e) {
        return !! e.touches
      }
      function Qp(e) {
        return function(t) {
          var n = t instanceof MouseEvent; (!n || n && 0 === t.button) && e(t)
        }
      } !
      function(e) {
        e.Animate = "animate",
        e.Hover = "whileHover",
        e.Tap = "whileTap",
        e.Drag = "whileDrag",
        e.Focus = "whileFocus",
        e.InView = "whileInView",
        e.Exit = "exit"
      } (Hp || (Hp = {}));
      var Zp = {
        pageX: 0,
        pageY: 0
      };
      function Jp(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "page",
        n = e.touches[0] || e.changedTouches[0],
        r = n || Zp;
        return {
          x: r[t + "X"],
          y: r[t + "Y"]
        }
      }
      function eg(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "page";
        return {
          x: e[t + "X"],
          y: e[t + "Y"]
        }
      }
      function tg(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "page";
        return {
          point: Kp(e) ? Jp(e, t) : eg(e, t)
        }
      }
      var ng = function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = function(t) {
          return e(t, tg(t))
        };
        return t ? Qp(n) : n
      },
      rg = {
        pointerdown: "mousedown",
        pointermove: "mousemove",
        pointerup: "mouseup",
        pointercancel: "mousecancel",
        pointerover: "mouseover",
        pointerout: "mouseout",
        pointerenter: "mouseenter",
        pointerleave: "mouseleave"
      },
      ag = {
        pointerdown: "touchstart",
        pointermove: "touchmove",
        pointerup: "touchend",
        pointercancel: "touchcancel"
      };
      function og(e) {
        return Kd && null === window.onpointerdown ? e: Kd && null === window.ontouchstart ? ag[e] : Kd && null === window.onmousedown ? rg[e] : e
      }
      function ig(e, t, n, r) {
        return Gp(e, og(t), ng(n, "pointerdown" === t), r)
      }
      function lg(e, t, n, r) {
        return Yp(e, og(t), n && ng(n, "pointerdown" === t), r)
      }
      function sg(e) {
        var t = null;
        return function() {
          return null === t && (t = e,
          function() {
            t = null
          })
        }
      }
      var cg = sg("dragHorizontal"),
      ug = sg("dragVertical");
      function dg(e) {
        var t = !1;
        if ("y" === e) t = ug();
        else if ("x" === e) t = cg();
        else {
          var n = cg(),
          r = ug();
          n && r ? t = function() {
            n(),
            r()
          }: (n && n(), r && r())
        }
        return t
      }
      function fg() {
        var e = dg(!0);
        return ! e || (e(), !1)
      }
      function pg(e, t, n) {
        return function(r, a) {
          Xp(r) && !fg() && (e.animationState && e.animationState.setActive(Hp.Hover, t), n && n(r, a))
        }
      }
      var gg = function e(t, n) {
        return !! n && (t === n || e(t, n.parentElement))
      },
      vg = function(e, t) {
        return function(n) {
          return t(e(n))
        }
      },
      mg = function() {
        for (var e = arguments.length,
        t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return t.reduce(vg)
      };
      var hg = ["root"],
      yg = new WeakMap,
      bg = new WeakMap,
      xg = function(e) {
        var t = yg.get(e.target);
        t && t(e)
      },
      wg = function(e) {
        e.forEach(xg)
      };
      function kg(e, t, n) {
        var r = function(e) {
          var t = e.root,
          n = u(e, hg),
          r = t || document;
          bg.has(r) || bg.set(r, {});
          var a = bg.get(r),
          o = JSON.stringify(n);
          return a[o] || (a[o] = new IntersectionObserver(wg, c({
            root: t
          },
          n))),
          a[o]
        } (t);
        return yg.set(e, n),
        r.observe(e),
        function() {
          yg.delete(e),
          r.unobserve(e)
        }
      }
      var _g = {
        some: 0,
        all: 1
      };
      function Sg(t, n, r, a) {
        var o = a.root,
        i = a.margin,
        l = a.amount,
        s = void 0 === l ? "some": l,
        c = a.once; (0, e.useEffect)((function() {
          if (t && r.current) {
            var e = {
              root: null === o || void 0 === o ? void 0 : o.current,
              rootMargin: i,
              threshold: "number" === typeof s ? s: _g[s]
            };
            return kg(r.current, e, (function(e) {
              var t = e.isIntersecting;
              if (n.isInView !== t && (n.isInView = t, !c || t || !n.hasEnteredView)) {
                t && (n.hasEnteredView = !0),
                r.animationState && r.animationState.setActive(Hp.InView, t);
                var a = r.getProps(),
                o = t ? a.onViewportEnter: a.onViewportLeave;
                o && o(e)
              }
            }))
          }
        }), [t, o, i, s])
      }
      function Eg(t, n, r, a) {
        var o = a.fallback,
        i = void 0 === o || o; (0, e.useEffect)((function() {
          t && i && requestAnimationFrame((function() {
            n.hasEnteredView = !0;
            var e = r.getProps().onViewportEnter;
            e && e(null),
            r.animationState && r.animationState.setActive(Hp.InView, !0)
          }))
        }), [t])
      }
      var Cg = function(e) {
        return function(t) {
          return e(t),
          null
        }
      },
      Ag = {
        inView: Cg((function(t) {
          var n = t.visualElement,
          r = t.whileInView,
          a = t.onViewportEnter,
          o = t.onViewportLeave,
          i = t.viewport,
          l = void 0 === i ? {}: i,
          s = (0, e.useRef)({
            hasEnteredView: !1,
            isInView: !1
          }),
          c = Boolean(r || a || o);
          l.once && s.current.hasEnteredView && (c = !1),
          ("undefined" === typeof IntersectionObserver ? Eg: Sg)(c, s.current, n, l)
        })),
        tap: Cg((function(t) {
          var n = t.onTap,
          r = t.onTapStart,
          a = t.onTapCancel,
          o = t.whileTap,
          i = t.visualElement,
          l = n || r || a || o,
          s = (0, e.useRef)(!1),
          c = (0, e.useRef)(null),
          u = {
            passive: !(r || n || a || v)
          };
          function d() {
            c.current && c.current(),
            c.current = null
          }
          function f() {
            return d(),
            s.current = !1,
            i.animationState && i.animationState.setActive(Hp.Tap, !1),
            !fg()
          }
          function p(e, t) {
            f() && (gg(i.current, e.target) ? n && n(e, t) : a && a(e, t))
          }
          function g(e, t) {
            f() && a && a(e, t)
          }
          function v(e, t) {
            d(),
            s.current || (s.current = !0, c.current = mg(ig(window, "pointerup", p, u), ig(window, "pointercancel", g, u)), i.animationState && i.animationState.setActive(Hp.Tap, !0), r && r(e, t))
          }
          lg(i, "pointerdown", l ? v: void 0, u),
          lf(d)
        })),
        focus: Cg((function(e) {
          var t = e.whileFocus,
          n = e.visualElement,
          r = n.animationState;
          Yp(n, "focus", t ?
          function() {
            r && r.setActive(Hp.Focus, !0)
          }: void 0),
          Yp(n, "blur", t ?
          function() {
            r && r.setActive(Hp.Focus, !1)
          }: void 0)
        })),
        hover: Cg((function(e) {
          var t = e.onHoverStart,
          n = e.onHoverEnd,
          r = e.whileHover,
          a = e.visualElement;
          lg(a, "pointerenter", t || r ? pg(a, !0, t) : void 0, {
            passive: !t
          }),
          lg(a, "pointerleave", n || r ? pg(a, !1, n) : void 0, {
            passive: !n
          })
        }))
      };
      function Pg(e, t) {
        if (!Array.isArray(t)) return ! 1;
        var n = t.length;
        if (n !== e.length) return ! 1;
        for (var r = 0; r < n; r++) if (t[r] !== e[r]) return ! 1;
        return ! 0
      }
      var Tg = function(e) {
        return 1e3 * e
      };
      var zg = function(e) {
        return e
      },
      jg = function(e, t, n) {
        return (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e
      };
      function Rg(e, t, n, r) {
        if (e === t && n === r) return zg;
        var a = function(t) {
          return function(e, t, n, r, a) {
            var o, i, l = 0;
            do { (o = jg(i = t + (n - t) / 2, r, a) - e) > 0 ? n = i: t = i
            } while ( Math . abs ( o ) > 1e-7 && ++l < 12);
            return i
          } (t, 0, 1, e, n)
        };
        return function(e) {
          return 0 === e || 1 === e ? e: jg(a(e), t, r)
        }
      }
      var Mg = function(e) {
        return function(t) {
          return t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2
        }
      },
      Ng = function(e) {
        return function(t) {
          return 1 - e(1 - t)
        }
      },
      Og = function(e) {
        return e * e
      },
      Bg = Ng(Og),
      Lg = Mg(Og),
      Fg = function(e) {
        return 1 - Math.sin(Math.acos(e))
      },
      Dg = Ng(Fg),
      Ig = Mg(Dg),
      Vg = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1.525;
        return function(t) {
          return t * t * ((e + 1) * t - e)
        }
      },
      Wg = Vg(),
      Ug = Ng(Wg),
      Hg = Mg(Wg),
      $g = function(e) {
        var t = Vg(e);
        return function(e) {
          return (e *= 2) < 1 ? .5 * t(e) : .5 * (2 - Math.pow(2, -10 * (e - 1)))
        }
      } (),
      qg = {
        linear: zg,
        easeIn: Og,
        easeInOut: Lg,
        easeOut: Bg,
        circIn: Fg,
        circInOut: Ig,
        circOut: Dg,
        backIn: Wg,
        backInOut: Hg,
        backOut: Ug,
        anticipate: $g
      },
      Gg = function(e) {
        if (Array.isArray(e)) {
          e.length;
          var t = Ye(e, 4);
          return Rg(t[0], t[1], t[2], t[3])
        }
        return "string" === typeof e ? ("Invalid easing type '".concat(e, "'"), qg[e]) : e
      },
      Yg = function(e, t) {
        return function(n) {
          return Boolean(ep(n) && Jf.test(n) && n.startsWith(e) || t && Object.prototype.hasOwnProperty.call(n, t))
        }
      },
      Xg = function(e, t, n) {
        return function(r) {
          var a;
          if (!ep(r)) return r;
          var o = Ye(r.match(Qf), 4),
          i = o[0],
          s = o[1],
          c = o[2],
          u = o[3];
          return l(a = {},
          e, parseFloat(i)),
          l(a, t, parseFloat(s)),
          l(a, n, parseFloat(c)),
          l(a, "alpha", void 0 !== u ? parseFloat(u) : 1),
          a
        }
      },
      Kg = Xf(0, 255),
      Qg = Object.assign(Object.assign({},
      sp), {
        transform: function(e) {
          return Math.round(Kg(e))
        }
      }),
      Zg = {
        test: Yg("rgb", "red"),
        parse: Xg("red", "green", "blue"),
        transform: function(e) {
          var t = e.red,
          n = e.green,
          r = e.blue,
          a = e.alpha,
          o = void 0 === a ? 1 : a;
          return "rgba(" + Qg.transform(t) + ", " + Qg.transform(n) + ", " + Qg.transform(r) + ", " + Kf(cp.transform(o)) + ")"
        }
      };
      var Jg = {
        test: Yg("#"),
        parse: function(e) {
          var t = "",
          n = "",
          r = "",
          a = "";
          return e.length > 5 ? (t = e.substr(1, 2), n = e.substr(3, 2), r = e.substr(5, 2), a = e.substr(7, 2)) : (t = e.substr(1, 1), n = e.substr(2, 1), r = e.substr(3, 1), a = e.substr(4, 1), t += t, n += n, r += r, a += a),
          {
            red: parseInt(t, 16),
            green: parseInt(n, 16),
            blue: parseInt(r, 16),
            alpha: a ? parseInt(a, 16) / 255 : 1
          }
        },
        transform: Zg.transform
      },
      ev = {
        test: Yg("hsl", "hue"),
        parse: Xg("hue", "saturation", "lightness"),
        transform: function(e) {
          var t = e.hue,
          n = e.saturation,
          r = e.lightness,
          a = e.alpha,
          o = void 0 === a ? 1 : a;
          return "hsla(" + Math.round(t) + ", " + rp.transform(Kf(n)) + ", " + rp.transform(Kf(r)) + ", " + Kf(cp.transform(o)) + ")"
        }
      },
      tv = {
        test: function(e) {
          return Zg.test(e) || Jg.test(e) || ev.test(e)
        },
        parse: function(e) {
          return Zg.test(e) ? Zg.parse(e) : ev.test(e) ? ev.parse(e) : Jg.parse(e)
        },
        transform: function(e) {
          return ep(e) ? e: e.hasOwnProperty("red") ? Zg.transform(e) : ev.transform(e)
        }
      },
      nv = "${c}",
      rv = "${n}";
      function av(e) {
        "number" === typeof e && (e = "".concat(e));
        var t = [],
        n = 0,
        r = e.match(Zf);
        r && (n = r.length, e = e.replace(Zf, nv), t.push.apply(t, pt(r.map(tv.parse))));
        var a = e.match(Qf);
        return a && (e = e.replace(Qf, rv), t.push.apply(t, pt(a.map(sp.parse)))),
        {
          values: t,
          numColors: n,
          tokenised: e
        }
      }
      function ov(e) {
        return av(e).values
      }
      function iv(e) {
        var t = av(e),
        n = t.values,
        r = t.numColors,
        a = t.tokenised,
        o = n.length;
        return function(e) {
          for (var t = a,
          n = 0; n < o; n++) t = t.replace(n < r ? nv: rv, n < r ? tv.transform(e[n]) : Kf(e[n]));
          return t
        }
      }
      var lv = function(e) {
        return "number" === typeof e ? 0 : e
      };
      var sv = {
        test: function(e) {
          var t, n, r, a;
          return isNaN(e) && ep(e) && (null !== (n = null === (t = e.match(Qf)) || void 0 === t ? void 0 : t.length) && void 0 !== n ? n: 0) + (null !== (a = null === (r = e.match(Zf)) || void 0 === r ? void 0 : r.length) && void 0 !== a ? a: 0) > 0
        },
        parse: ov,
        createTransformer: iv,
        getAnimatableNone: function(e) {
          var t = ov(e);
          return iv(e)(t.map(lv))
        }
      },
      cv = function(e, t) {
        return "zIndex" !== e && (!("number" !== typeof t && !Array.isArray(t)) || !("string" !== typeof t || !sv.test(t) || t.startsWith("url(")))
      },
      uv = function() {
        return {
          type: "spring",
          stiffness: 500,
          damping: 25,
          restSpeed: 10
        }
      },
      dv = function(e) {
        return {
          type: "spring",
          stiffness: 550,
          damping: 0 === e ? 2 * Math.sqrt(550) : 30,
          restSpeed: 10
        }
      },
      fv = function() {
        return {
          type: "keyframes",
          ease: "linear",
          duration: .3
        }
      },
      pv = function(e) {
        return {
          type: "keyframes",
          duration: .8,
          values: e
        }
      },
      gv = {
        x: uv,
        y: uv,
        z: uv,
        rotate: uv,
        rotateX: uv,
        rotateY: uv,
        rotateZ: uv,
        scaleX: dv,
        scaleY: dv,
        scale: dv,
        opacity: fv,
        backgroundColor: fv,
        color: fv,
      default:
        dv
      },
      vv = new Set(["brightness", "contrast", "saturate", "opacity"]);
      function mv(e) {
        var t = Ye(e.slice(0, -1).split("("), 2),
        n = t[0],
        r = t[1];
        if ("drop-shadow" === n) return e;
        var a = Ye(r.match(Qf) || [], 1)[0];
        if (!a) return e;
        var o = r.replace(a, ""),
        i = vv.has(n) ? 1 : 0;
        return a !== r && (i *= 100),
        n + "(" + i + o + ")"
      }
      var hv = /([a-z-]*)\(.*?\)/g,
      yv = Object.assign(Object.assign({},
      sv), {
        getAnimatableNone: function(e) {
          var t = e.match(hv);
          return t ? t.map(mv).join(" ") : e
        }
      }),
      bv = c(c({},
      fp), {},
      {
        color: tv,
        backgroundColor: tv,
        outlineColor: tv,
        fill: tv,
        stroke: tv,
        borderColor: tv,
        borderTopColor: tv,
        borderRightColor: tv,
        borderBottomColor: tv,
        borderLeftColor: tv,
        filter: yv,
        WebkitFilter: yv
      }),
      xv = function(e) {
        return bv[e]
      };
      function wv(e, t) {
        var n, r = xv(e);
        return r !== yv && (r = sv),
        null === (n = r.getAnimatableNone) || void 0 === n ? void 0 : n.call(r, t)
      }
      var kv = !1;
      function _v(e, t) {
        var n = performance.now(),
        r = function r(a) {
          var o = a.timestamp - n;
          o >= t && (Ud.read(r), e(o - t))
        };
        return Xd.read(r, !0),
        function() {
          return Ud.read(r)
        }
      }
      var Sv = function(e, t, n) {
        return Math.min(Math.max(n, e), t)
      },
      Ev = function(e, t, n) {
        return - n * e + n * t + e
      };
      function Cv(e, t, n) {
        return n < 0 && (n += 1),
        n > 1 && (n -= 1),
        n < 1 / 6 ? e + 6 * (t - e) * n: n < .5 ? t: n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
      }
      var Av = function(e, t, n) {
        var r = e * e;
        return Math.sqrt(Math.max(0, n * (t * t - r) + r))
      },
      Pv = [Jg, Zg, ev];
      function Tv(e) {
        var t, n = (t = e, Pv.find((function(e) {
          return e.test(t)
        })));
        Boolean(n),
        "'".concat(e, "' is not an animatable color. Use the equivalent color code instead.");
        var r = n.parse(e);
        return n === ev && (r = function(e) {
          var t = e.hue,
          n = e.saturation,
          r = e.lightness,
          a = e.alpha;
          t /= 360,
          r /= 100;
          var o = 0,
          i = 0,
          l = 0;
          if (n /= 100) {
            var s = r < .5 ? r * (1 + n) : r + n - r * n,
            c = 2 * r - s;
            o = Cv(c, s, t + 1 / 3),
            i = Cv(c, s, t),
            l = Cv(c, s, t - 1 / 3)
          } else o = i = l = r;
          return {
            red: Math.round(255 * o),
            green: Math.round(255 * i),
            blue: Math.round(255 * l),
            alpha: a
          }
        } (r)),
        r
      }
      var zv = function(e, t) {
        var n = Tv(e),
        r = Tv(t),
        a = c({},
        n);
        return function(e) {
          return a.red = Av(n.red, r.red, e),
          a.green = Av(n.green, r.green, e),
          a.blue = Av(n.blue, r.blue, e),
          a.alpha = Ev(n.alpha, r.alpha, e),
          Zg.transform(a)
        }
      };
      function jv(e, t) {
        return "number" === typeof e ?
        function(n) {
          return Ev(e, t, n)
        }: tv.test(e) ? zv(e, t) : Ov(e, t)
      }
      var Rv = function(e, t) {
        var n = pt(e),
        r = n.length,
        a = e.map((function(e, n) {
          return jv(e, t[n])
        }));
        return function(e) {
          for (var t = 0; t < r; t++) n[t] = a[t](e);
          return n
        }
      },
      Mv = function(e, t) {
        var n = c(c({},
        e), t),
        r = {};
        for (var a in n) void 0 !== e[a] && void 0 !== t[a] && (r[a] = jv(e[a], t[a]));
        return function(e) {
          for (var t in r) n[t] = r[t](e);
          return n
        }
      };
      function Nv(e) {
        for (var t = sv.parse(e), n = t.length, r = 0, a = 0, o = 0; o < n; o++) r || "number" === typeof t[o] ? r++:a++;
        return {
          parsed: t,
          numNumbers: r,
          numColors: a
        }
      }
      var Ov = function(e, t) {
        var n = sv.createTransformer(t),
        r = Nv(e),
        a = Nv(t);
        return r.numColors === a.numColors && r.numNumbers >= a.numNumbers ? mg(Rv(r.parsed, a.parsed), n) : ("Complex values '".concat(e, "' and '").concat(t, "' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition."),
        function(n) {
          return "".concat(n > 0 ? t: e)
        })
      },
      Bv = function(e, t, n) {
        var r = t - e;
        return 0 === r ? 1 : (n - e) / r
      },
      Lv = function(e, t) {
        return function(n) {
          return Ev(e, t, n)
        }
      };
      function Fv(e, t, n) {
        for (var r, a = [], o = n || ("number" === typeof(r = e[0]) ? Lv: "string" === typeof r ? tv.test(r) ? zv: Ov: Array.isArray(r) ? Rv: "object" === typeof r ? Mv: Lv), i = e.length - 1, l = 0; l < i; l++) {
          var s = o(e[l], e[l + 1]);
          if (t) {
            var c = Array.isArray(t) ? t[l] : t;
            s = mg(c, s)
          }
          a.push(s)
        }
        return a
      }
      function Dv(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        r = n.clamp,
        a = void 0 === r || r,
        o = n.ease,
        i = n.mixer,
        l = e.length;
        t.length,
        !o || !Array.isArray(o) || o.length,
        e[0] > e[l - 1] && (e = pt(e).reverse(), t = pt(t).reverse());
        var s = Fv(t, o, i),
        c = s.length,
        u = function(t) {
          var n = 0;
          if (c > 1) for (; n < e.length - 2 && !(t < e[n + 1]); n++);
          var r = Bv(e[n], e[n + 1], t);
          return s[n](r)
        };
        return a ?
        function(t) {
          return u(Sv(e[0], e[l - 1], t))
        }: u
      }
      function Iv(e, t) {
        return e.map((function() {
          return t || Lg
        })).splice(0, e.length - 1)
      }
      var Vv = .001;
      function Wv(e) {
        var t, n, r = e.duration,
        a = void 0 === r ? 800 : r,
        o = e.bounce,
        i = void 0 === o ? .25 : o,
        l = e.velocity,
        s = void 0 === l ? 0 : l,
        c = e.mass,
        u = void 0 === c ? 1 : c,
        d = 1 - i;
        d = Sv(.05, 1, d),
        a = Sv(.01, 10, a / 1e3),
        d < 1 ? (t = function(e) {
          var t = e * d,
          n = t * a,
          r = t - s,
          o = Uv(e, d),
          i = Math.exp( - n);
          return Vv - r / o * i
        },
        n = function(e) {
          var n = e * d * a,
          r = n * s + s,
          o = Math.pow(d, 2) * Math.pow(e, 2) * a,
          i = Math.exp( - n),
          l = Uv(Math.pow(e, 2), d);
          return ( - t(e) + Vv > 0 ? -1 : 1) * ((r - o) * i) / l
        }) : (t = function(e) {
          return Math.exp( - e * a) * ((e - s) * a + 1) - .001
        },
        n = function(e) {
          return Math.exp( - e * a) * (a * a * (s - e))
        });
        var f = function(e, t, n) {
          for (var r = n,
          a = 1; a < 12; a++) r -= e(r) / t(r);
          return r
        } (t, n, 5 / a);
        if (a *= 1e3, isNaN(f)) return {
          stiffness: 100,
          damping: 10,
          duration: a
        };
        var p = Math.pow(f, 2) * u;
        return {
          stiffness: p,
          damping: 2 * d * Math.sqrt(u * p),
          duration: a
        }
      }
      function Uv(e, t) {
        return e * Math.sqrt(1 - t * t)
      }
      var Hv = ["from", "to", "restSpeed", "restDelta"],
      $v = ["duration", "bounce"],
      qv = ["stiffness", "damping", "mass"];
      function Gv(e, t) {
        return t.some((function(t) {
          return void 0 !== e[t]
        }))
      }
      function Yv(e) {
        var t = e.from,
        n = void 0 === t ? 0 : t,
        r = e.to,
        a = void 0 === r ? 1 : r,
        o = e.restSpeed,
        i = void 0 === o ? 2 : o,
        l = e.restDelta,
        s = void 0 === l ? .01 : l,
        d = u(e, Hv),
        f = {
          done: !1,
          value: n
        },
        p = function(e) {
          var t = c({
            velocity: 0,
            stiffness: 100,
            damping: 10,
            mass: 1,
            isResolvedFromDuration: !1
          },
          e);
          if (!Gv(e, qv) && Gv(e, $v)) {
            var n = Wv(e); (t = c(c(c({},
            t), n), {},
            {
              velocity: 0,
              mass: 1
            })).isResolvedFromDuration = !0
          }
          return t
        } (d),
        g = p.stiffness,
        v = p.damping,
        m = p.mass,
        h = p.velocity,
        y = p.duration,
        b = p.isResolvedFromDuration,
        x = Xv,
        w = Xv;
        function k() {
          var e = h ? -h / 1e3: 0,
          t = a - n,
          r = v / (2 * Math.sqrt(g * m)),
          o = Math.sqrt(g / m) / 1e3;
          if (void 0 === s && (s = Math.min(Math.abs(a - n) / 100, .4)), r < 1) {
            var i = Uv(o, r);
            x = function(n) {
              var l = Math.exp( - r * o * n);
              return a - l * ((e + r * o * t) / i * Math.sin(i * n) + t * Math.cos(i * n))
            },
            w = function(n) {
              var a = Math.exp( - r * o * n);
              return r * o * a * (Math.sin(i * n) * (e + r * o * t) / i + t * Math.cos(i * n)) - a * (Math.cos(i * n) * (e + r * o * t) - i * t * Math.sin(i * n))
            }
          } else if (1 === r) x = function(n) {
            return a - Math.exp( - o * n) * (t + (e + o * t) * n)
          };
          else {
            var l = o * Math.sqrt(r * r - 1);
            x = function(n) {
              var i = Math.exp( - r * o * n),
              s = Math.min(l * n, 300);
              return a - i * ((e + r * o * t) * Math.sinh(s) + l * t * Math.cosh(s)) / l
            }
          }
        }
        return k(),
        {
          next: function(e) {
            var t = x(e);
            if (b) f.done = e >= y;
            else {
              var n = 1e3 * w(e),
              r = Math.abs(n) <= i,
              o = Math.abs(a - t) <= s;
              f.done = r && o
            }
            return f.value = f.done ? a: t,
            f
          },
          flipTarget: function() {
            h = -h;
            var e = [a, n];
            n = e[0],
            a = e[1],
            k()
          }
        }
      }
      Yv.needsInterpolation = function(e, t) {
        return "string" === typeof e || "string" === typeof t
      };
      var Xv = function(e) {
        return 0
      };
      var Kv = ["from", "autoplay", "driver", "elapsed", "repeat", "repeatType", "repeatDelay", "onPlay", "onStop", "onComplete", "onRepeat", "onUpdate", "type"],
      Qv = {
        decay: function(e) {
          var t = e.velocity,
          n = void 0 === t ? 0 : t,
          r = e.from,
          a = void 0 === r ? 0 : r,
          o = e.power,
          i = void 0 === o ? .8 : o,
          l = e.timeConstant,
          s = void 0 === l ? 350 : l,
          c = e.restDelta,
          u = void 0 === c ? .5 : c,
          d = e.modifyTarget,
          f = {
            done: !1,
            value: a
          },
          p = i * n,
          g = a + p,
          v = void 0 === d ? g: d(g);
          return v !== g && (p = v - a),
          {
            next: function(e) {
              var t = -p * Math.exp( - e / s);
              return f.done = !(t > u || t < -u),
              f.value = f.done ? v: v + t,
              f
            },
            flipTarget: function() {}
          }
        },
        keyframes: function(e) {
          var t = e.from,
          n = void 0 === t ? 0 : t,
          r = e.to,
          a = void 0 === r ? 1 : r,
          o = e.ease,
          i = e.offset,
          l = e.duration,
          s = void 0 === l ? 300 : l,
          c = {
            done: !1,
            value: n
          },
          u = Array.isArray(a) ? a: [n, a],
          d = function(e, t) {
            return e.map((function(e) {
              return e * t
            }))
          } (i && i.length === u.length ? i: function(e) {
            var t = e.length;
            return e.map((function(e, n) {
              return 0 !== n ? n / (t - 1) : 0
            }))
          } (u), s);
          function f() {
            return Dv(d, u, {
              ease: Array.isArray(o) ? o: Iv(u, o)
            })
          }
          var p = f();
          return {
            next: function(e) {
              return c.value = p(e),
              c.done = e >= s,
              c
            },
            flipTarget: function() {
              u.reverse(),
              p = f()
            }
          }
        },
        spring: Yv
      };
      function Zv(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return e - t - n
      }
      var Jv = function(e) {
        var t = function(t) {
          var n = t.delta;
          return e(n)
        };
        return {
          start: function() {
            return Xd.update(t, !0)
          },
          stop: function() {
            return Ud.update(t)
          }
        }
      };
      function em(e) {
        var t, n, r, a, o, i = e.from,
        l = e.autoplay,
        s = void 0 === l || l,
        d = e.driver,
        f = void 0 === d ? Jv: d,
        p = e.elapsed,
        g = void 0 === p ? 0 : p,
        v = e.repeat,
        m = void 0 === v ? 0 : v,
        h = e.repeatType,
        y = void 0 === h ? "loop": h,
        b = e.repeatDelay,
        x = void 0 === b ? 0 : b,
        w = e.onPlay,
        k = e.onStop,
        _ = e.onComplete,
        S = e.onRepeat,
        E = e.onUpdate,
        C = e.type,
        A = void 0 === C ? "keyframes": C,
        P = u(e, Kv),
        T = P.to,
        z = 0,
        j = P.duration,
        R = !1,
        M = !0,
        N = Qv[Array.isArray(T) ? "keyframes": A]; (null === (n = (t = N).needsInterpolation) || void 0 === n ? void 0 : n.call(t, i, T)) && (o = Dv([0, 100], [i, T], {
          clamp: !1
        }), i = 0, T = 100);
        var O = N(c(c({},
        P), {},
        {
          from: i,
          to: T
        }));
        function B() {
          z++,
          "reverse" === y ? g = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            r = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
            return r ? Zv(t + -e, t, n) : t - (e - t) + n
          } (g, j, x, M = z % 2 === 0) : (g = Zv(g, j, x), "mirror" === y && O.flipTarget()),
          R = !1,
          S && S()
        }
        function L(e) {
          if (M || (e = -e), g += e, !R) {
            var t = O.next(Math.max(0, g));
            a = t.value,
            o && (a = o(a)),
            R = M ? t.done: g <= 0
          }
          null === E || void 0 === E || E(a),
          R && (0 === z && (null !== j && void 0 !== j || (j = g)), z < m ?
          function(e, t, n, r) {
            return r ? e >= t + n: e <= -n
          } (g, j, x, M) && B() : (r.stop(), _ && _()))
        }
        return s && (null === w || void 0 === w || w(), (r = f(L)).start()),
        {
          stop: function() {
            null === k || void 0 === k || k(),
            r.stop()
          }
        }
      }
      function tm(e, t) {
        return t ? e * (1e3 / t) : 0
      }
      var nm = ["when", "delay", "delayChildren", "staggerChildren", "staggerDirection", "repeat", "repeatType", "repeatDelay", "from"],
      rm = ["ease", "times", "yoyo", "flip", "loop"];
      function am(e) {
        var t = e.ease,
        n = e.times,
        r = e.yoyo,
        a = e.flip,
        o = e.loop,
        i = u(e, rm),
        l = c({},
        i);
        return n && (l.offset = n),
        i.duration && (l.duration = Tg(i.duration)),
        i.repeatDelay && (l.repeatDelay = Tg(i.repeatDelay)),
        t && (l.ease = function(e) {
          return Array.isArray(e) && "number" !== typeof e[0]
        } (t) ? t.map(Gg) : Gg(t)),
        "tween" === i.type && (l.type = "keyframes"),
        (r || o || a) && (!0, r ? l.repeatType = "reverse": o ? l.repeatType = "loop": a && (l.repeatType = "mirror"), l.repeat = o || r || a || i.repeat),
        "spring" !== i.type && (l.type = "keyframes"),
        l
      }
      function om(e, t) {
        var n, r;
        return null !== (r = null !== (n = (um(e, t) || {}).delay) && void 0 !== n ? n: e.delay) && void 0 !== r ? r: 0
      }
      function im(e, t, n) {
        var r, a;
        return Array.isArray(t.to) && void 0 === e.duration && (e.duration = .8),
        function(e) {
          Array.isArray(e.to) && null === e.to[0] && (e.to = pt(e.to), e.to[0] = e.from)
        } (t),
        function(e) {
          e.when,
          e.delay,
          e.delayChildren,
          e.staggerChildren,
          e.staggerDirection,
          e.repeat,
          e.repeatType,
          e.repeatDelay,
          e.from;
          var t = u(e, nm);
          return !! Object.keys(t).length
        } (e) || (e = c(c({},
        e), (r = n, c({
          to: a = t.to
        },
        (Fp(a) ? pv: gv[r] || gv.
      default)(a))))),
        c(c({},
        t), am(e))
      }
      function lm(e, t, n, r, a) {
        var o = um(r, e) || {},
        i = void 0 !== o.from ? o.from: t.get(),
        l = cv(e, n);
        "none" === i && l && "string" === typeof n ? i = wv(e, n) : sm(i) && "string" === typeof n ? i = cm(n) : !Array.isArray(n) && sm(n) && "string" === typeof i && (n = cm(i));
        var s = cv(e, i);
        return "You are trying to animate ".concat(e, ' from "').concat(i, '" to "').concat(n, '". ').concat(i, " is not an animatable value - to enable this animation set ").concat(i, " to a value animatable to ").concat(n, " via the `style` property."),
        s && l && !1 !== o.type ?
        function() {
          var r = {
            from: i,
            to: n,
            velocity: t.getVelocity(),
            onComplete: a,
            onUpdate: function(e) {
              return t.set(e)
            }
          };
          return "inertia" === o.type || "decay" === o.type ?
          function(e) {
            var t, n = e.from,
            r = void 0 === n ? 0 : n,
            a = e.velocity,
            o = void 0 === a ? 0 : a,
            i = e.min,
            l = e.max,
            s = e.power,
            u = void 0 === s ? .8 : s,
            d = e.timeConstant,
            f = void 0 === d ? 750 : d,
            p = e.bounceStiffness,
            g = void 0 === p ? 500 : p,
            v = e.bounceDamping,
            m = void 0 === v ? 10 : v,
            h = e.restDelta,
            y = void 0 === h ? 1 : h,
            b = e.modifyTarget,
            x = e.driver,
            w = e.onUpdate,
            k = e.onComplete,
            _ = e.onStop;
            function S(e) {
              return void 0 !== i && e < i || void 0 !== l && e > l
            }
            function E(e) {
              return void 0 === i ? l: void 0 === l || Math.abs(i - e) < Math.abs(l - e) ? i: l
            }
            function C(e) {
              null === t || void 0 === t || t.stop(),
              t = em(c(c({},
              e), {},
              {
                driver: x,
                onUpdate: function(t) {
                  var n;
                  null === w || void 0 === w || w(t),
                  null === (n = e.onUpdate) || void 0 === n || n.call(e, t)
                },
                onComplete: k,
                onStop: _
              }))
            }
            function A(e) {
              C(c({
                type: "spring",
                stiffness: g,
                damping: m,
                restDelta: y
              },
              e))
            }
            if (S(r)) A({
              from: r,
              velocity: o,
              to: E(r)
            });
            else {
              var P = u * o + r;
              "undefined" !== typeof b && (P = b(P));
              var T, z, j = E(P),
              R = j === i ? -1 : 1;
              C({
                type: "decay",
                from: r,
                velocity: o,
                timeConstant: f,
                power: u,
                restDelta: y,
                modifyTarget: b,
                onUpdate: S(P) ?
                function(e) {
                  T = z,
                  z = e,
                  o = tm(e - T, Yd().delta),
                  (1 === R && e > j || -1 === R && e < j) && A({
                    from: e,
                    to: j,
                    velocity: o
                  })
                }: void 0
              })
            }
            return {
              stop: function() {
                return null === t || void 0 === t ? void 0 : t.stop()
              }
            }
          } (c(c({},
          r), o)) : em(c(c({},
          im(o, r, e)), {},
          {
            onUpdate: function(e) {
              r.onUpdate(e),
              o.onUpdate && o.onUpdate(e)
            },
            onComplete: function() {
              r.onComplete(),
              o.onComplete && o.onComplete()
            }
          }))
        }: function() {
          var e = Dp(n);
          return t.set(e),
          a(),
          o.onUpdate && o.onUpdate(e),
          o.onComplete && o.onComplete(),
          {
            stop: function() {}
          }
        }
      }
      function sm(e) {
        return 0 === e || "string" === typeof e && 0 === parseFloat(e) && -1 === e.indexOf(" ")
      }
      function cm(e) {
        return "number" === typeof e ? 0 : wv("", e)
      }
      function um(e, t) {
        return e[t] || e.
      default || e
      }
      function dm(e, t, n) {
        var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        return kv && (r = {
          type: !1
        }),
        t.start((function(a) {
          var o, i, l = lm(e, t, n, r, a),
          s = om(r, e),
          c = function() {
            return o = l()
          };
          return s ? i = _v(c, Tg(s)) : c(),
          function() {
            i && i(),
            o && o.stop()
          }
        }))
      }
      var fm = function(e) {
        return /^0[^.\s]+$/.test(e)
      };
      function pm(e, t) { - 1 === e.indexOf(t) && e.push(t)
      }
      function gm(e, t) {
        var n = e.indexOf(t);
        n > -1 && e.splice(n, 1)
      }
      var vm = function() {
        function e() {
          Qa(this, e),
          this.subscriptions = []
        }
        return Ka(e, [{
          key: "add",
          value: function(e) {
            var t = this;
            return pm(this.subscriptions, e),
            function() {
              return gm(t.subscriptions, e)
            }
          }
        },
        {
          key: "notify",
          value: function(e, t, n) {
            var r = this.subscriptions.length;
            if (r) if (1 === r) this.subscriptions[0](e, t, n);
            else for (var a = 0; a < r; a++) {
              var o = this.subscriptions[a];
              o && o(e, t, n)
            }
          }
        },
        {
          key: "getSize",
          value: function() {
            return this.subscriptions.length
          }
        },
        {
          key: "clear",
          value: function() {
            this.subscriptions.length = 0
          }
        }]),
        e
      } (),
      mm = function() {
        function e(t) {
          var n, r = this;
          Qa(this, e),
          this.version = "7.6.18",
          this.timeDelta = 0,
          this.lastUpdated = 0,
          this.updateSubscribers = new vm,
          this.velocityUpdateSubscribers = new vm,
          this.renderSubscribers = new vm,
          this.canTrackVelocity = !1,
          this.updateAndNotify = function(e) {
            var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            r.prev = r.current,
            r.current = e;
            var n = Yd(),
            a = n.delta,
            o = n.timestamp;
            r.lastUpdated !== o && (r.timeDelta = a, r.lastUpdated = o, Xd.postRender(r.scheduleVelocityCheck)),
            r.prev !== r.current && r.updateSubscribers.notify(r.current),
            r.velocityUpdateSubscribers.getSize() && r.velocityUpdateSubscribers.notify(r.getVelocity()),
            t && r.renderSubscribers.notify(r.current)
          },
          this.scheduleVelocityCheck = function() {
            return Xd.postRender(r.velocityCheck)
          },
          this.velocityCheck = function(e) {
            e.timestamp !== r.lastUpdated && (r.prev = r.current, r.velocityUpdateSubscribers.notify(r.getVelocity()))
          },
          this.hasAnimated = !1,
          this.prev = this.current = t,
          this.canTrackVelocity = (n = this.current, !isNaN(parseFloat(n)))
        }
        return Ka(e, [{
          key: "onChange",
          value: function(e) {
            return this.updateSubscribers.add(e)
          }
        },
        {
          key: "clearListeners",
          value: function() {
            this.updateSubscribers.clear()
          }
        },
        {
          key: "onRenderRequest",
          value: function(e) {
            return e(this.get()),
            this.renderSubscribers.add(e)
          }
        },
        {
          key: "attach",
          value: function(e) {
            this.passiveEffect = e
          }
        },
        {
          key: "set",
          value: function(e) {
            var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            t && this.passiveEffect ? this.passiveEffect(e, this.updateAndNotify) : this.updateAndNotify(e, t)
          }
        },
        {
          key: "get",
          value: function() {
            return this.current
          }
        },
        {
          key: "getPrevious",
          value: function() {
            return this.prev
          }
        },
        {
          key: "getVelocity",
          value: function() {
            return this.canTrackVelocity ? tm(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta) : 0
          }
        },
        {
          key: "start",
          value: function(e) {
            var t = this;
            return this.stop(),
            new Promise((function(n) {
              t.hasAnimated = !0,
              t.stopAnimation = e(n)
            })).then((function() {
              return t.clearAnimation()
            }))
          }
        },
        {
          key: "stop",
          value: function() {
            this.stopAnimation && this.stopAnimation(),
            this.clearAnimation()
          }
        },
        {
          key: "isAnimating",
          value: function() {
            return !! this.stopAnimation
          }
        },
        {
          key: "clearAnimation",
          value: function() {
            this.stopAnimation = null
          }
        },
        {
          key: "destroy",
          value: function() {
            this.updateSubscribers.clear(),
            this.renderSubscribers.clear(),
            this.stop()
          }
        }]),
        e
      } ();
      function hm(e) {
        return new mm(e)
      }
      var ym = function(e) {
        return function(t) {
          return t.test(e)
        }
      },
      bm = [sp, ap, rp, np, ip, op, {
        test: function(e) {
          return "auto" === e
        },
        parse: function(e) {
          return e
        }
      }],
      xm = function(e) {
        return bm.find(ym(e))
      },
      wm = [].concat(pt(bm), [tv, sv]),
      km = function(e) {
        return wm.find(ym(e))
      };
      function _m(e, t, n) {
        var r = e.getProps();
        return Lp(r, t, void 0 !== n ? n: r.custom,
        function(e) {
          var t = {};
          return e.values.forEach((function(e, n) {
            return t[n] = e.get()
          })),
          t
        } (e),
        function(e) {
          var t = {};
          return e.values.forEach((function(e, n) {
            return t[n] = e.getVelocity()
          })),
          t
        } (e))
      }
      var Sm = ["transitionEnd", "transition"];
      function Em(e, t, n) {
        e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, hm(n))
      }
      function Cm(e, t) {
        var n = _m(e, t),
        r = n ? e.makeTargetAnimatable(n, !1) : {},
        a = r.transitionEnd,
        o = void 0 === a ? {}: a,
        i = (r.transition, u(r, Sm));
        for (var l in i = c(c({},
        i), o)) {
          Em(e, l, Dp(i[l]))
        }
      }
      function Am(e, t) {
        if (t) return (t[e] || t.
      default || t).from
      }
      function Pm(e) {
        return Boolean(Hf(e) && e.add)
      }
      var Tm = ["transition", "transitionEnd"];
      function zm(e, t) {
        var n, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        a = _m(e, t, r.custom),
        o = a || {},
        i = o.transition,
        l = void 0 === i ? e.getDefaultTransition() || {}: i;
        r.transitionOverride && (l = r.transitionOverride);
        var s = a ?
        function() {
          return jm(e, a, r)
        }: function() {
          return Promise.resolve()
        },
        c = (null === (n = e.variantChildren) || void 0 === n ? void 0 : n.size) ?
        function() {
          var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          a = l,
          o = a.delayChildren,
          i = void 0 === o ? 0 : o,
          s = a.staggerChildren,
          c = a.staggerDirection;
          return Rm(e, t, i + n, s, c, r)
        }: function() {
          return Promise.resolve()
        },
        u = l,
        d = u.when;
        if (d) {
          var f = "beforeChildren" === d ? [s, c] : [c, s],
          p = Ye(f, 2),
          g = p[0],
          v = p[1];
          return g().then(v)
        }
        return Promise.all([s(), c(r.delay)])
      }
      function jm(e, t) {
        var n, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        a = r.delay,
        o = void 0 === a ? 0 : a,
        i = r.transitionOverride,
        l = r.type,
        s = e.makeTargetAnimatable(t),
        d = s.transition,
        f = void 0 === d ? e.getDefaultTransition() : d,
        p = s.transitionEnd,
        g = u(s, Tm),
        v = e.getValue("willChange");
        i && (f = i);
        var m = [],
        h = l && (null === (n = e.animationState) || void 0 === n ? void 0 : n.getState()[l]),
        y = function(t) {
          var n = e.getValue(t),
          r = g[t];
          if (!n || void 0 === r || h && Nm(h, t)) return "continue";
          var a = c({
            delay: o
          },
          f);
          e.shouldReduceMotion && Wf.has(t) && (a = c(c({},
          a), {},
          {
            type: !1,
            delay: 0
          }));
          var i = dm(t, n, r, a);
          Pm(v) && (v.add(t), i = i.then((function() {
            return v.remove(t)
          }))),
          m.push(i)
        };
        for (var b in g) y(b);
        return Promise.all(m).then((function() {
          p && Cm(e, p)
        }))
      }
      function Rm(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
        o = arguments.length > 5 ? arguments[5] : void 0,
        i = [],
        l = (e.variantChildren.size - 1) * r,
        s = 1 === a ?
        function() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
          return e * r
        }: function() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
          return l - e * r
        };
        return Array.from(e.variantChildren).sort(Mm).forEach((function(e, r) {
          i.push(zm(e, t, c(c({},
          o), {},
          {
            delay: n + s(r)
          })).then((function() {
            return e.notify("AnimationComplete", t)
          })))
        })),
        Promise.all(i)
      }
      function Mm(e, t) {
        return e.sortNodePosition(t)
      }
      function Nm(e, t) {
        var n = e.protectedKeys,
        r = e.needsAnimating,
        a = n.hasOwnProperty(t) && !0 !== r[t];
        return r[t] = !1,
        a
      }
      var Om = ["transition", "transitionEnd"],
      Bm = [Hp.Animate, Hp.InView, Hp.Focus, Hp.Hover, Hp.Tap, Hp.Drag, Hp.Exit],
      Lm = [].concat(Bm).reverse(),
      Fm = Bm.length;
      function Dm(e) {
        return function(t) {
          return Promise.all(t.map((function(t) {
            var n = t.animation,
            r = t.options;
            return function(e, t) {
              var n, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
              if (e.notify("AnimationStart", t), Array.isArray(t)) {
                var a = t.map((function(t) {
                  return zm(e, t, r)
                }));
                n = Promise.all(a)
              } else if ("string" === typeof t) n = zm(e, t, r);
              else {
                var o = "function" === typeof t ? _m(e, t, r.custom) : t;
                n = jm(e, o, r)
              }
              return n.then((function() {
                return e.notify("AnimationComplete", t)
              }))
            } (e, n, r)
          })))
        }
      }
      function Im(e) {
        var t = Dm(e),
        n = function() {
          var e;
          return l(e = {},
          Hp.Animate, Vm(!0)),
          l(e, Hp.InView, Vm()),
          l(e, Hp.Hover, Vm()),
          l(e, Hp.Tap, Vm()),
          l(e, Hp.Drag, Vm()),
          l(e, Hp.Focus, Vm()),
          l(e, Hp.Exit, Vm()),
          e
        } (),
        r = !0,
        a = function(t, n) {
          var r = _m(e, n);
          if (r) {
            r.transition;
            var a = r.transitionEnd,
            o = u(r, Om);
            t = c(c(c({},
            t), o), a)
          }
          return t
        };
        function o(o, i) {
          for (var l, s = e.getProps(), u = e.getVariantContext(!0) || {},
          d = [], f = new Set, p = {},
          g = 1 / 0, v = function(t) {
            var v = Lm[t],
            m = n[v],
            h = null !== (l = s[v]) && void 0 !== l ? l: u[v],
            y = wf(h),
            b = v === i ? m.isActive: null; ! 1 === b && (g = t);
            var x = h === u[v] && h !== s[v] && y;
            if (x && r && e.manuallyAnimateOnMount && (x = !1), m.protectedKeys = c({},
            p), !m.isActive && null === b || !h && !m.prevProp || kf(h) || "boolean" === typeof h) return "continue";
            var w = function(e, t) {
              if ("string" === typeof t) return t !== e;
              if (Array.isArray(t)) return ! Pg(t, e);
              return ! 1
            } (m.prevProp, h),
            k = w || v === i && m.isActive && !x && y || t > g && y,
            _ = Array.isArray(h) ? h: [h],
            S = _.reduce(a, {}); ! 1 === b && (S = {});
            var E = m.prevResolvedValues,
            C = void 0 === E ? {}: E,
            A = c(c({},
            C), S),
            P = function(e) {
              k = !0,
              f.delete(e),
              m.needsAnimating[e] = !0
            };
            for (var T in A) {
              var z = S[T],
              j = C[T];
              p.hasOwnProperty(T) || (z !== j ? Fp(z) && Fp(j) ? !Pg(z, j) || w ? P(T) : m.protectedKeys[T] = !0 : void 0 !== z ? P(T) : f.add(T) : void 0 !== z && f.has(T) ? P(T) : m.protectedKeys[T] = !0)
            }
            m.prevProp = h,
            m.prevResolvedValues = S,
            m.isActive && (p = c(c({},
            p), S)),
            r && e.blockInitialAnimation && (k = !1),
            k && !x && d.push.apply(d, pt(_.map((function(e) {
              return {
                animation: e,
                options: c({
                  type: v
                },
                o)
              }
            }))))
          },
          m = 0; m < Fm; m++) v(m);
          if (f.size) {
            var h = {};
            f.forEach((function(t) {
              var n = e.getBaseTarget(t);
              void 0 !== n && (h[t] = n)
            })),
            d.push({
              animation: h
            })
          }
          var y = Boolean(d.length);
          return r && !1 === s.initial && !e.manuallyAnimateOnMount && (y = !1),
          r = !1,
          y ? t(d) : Promise.resolve()
        }
        return {
          animateChanges: o,
          setActive: function(t, r, a) {
            var i;
            if (n[t].isActive === r) return Promise.resolve();
            null === (i = e.variantChildren) || void 0 === i || i.forEach((function(e) {
              var n;
              return null === (n = e.animationState) || void 0 === n ? void 0 : n.setActive(t, r)
            })),
            n[t].isActive = r;
            var l = o(a, t);
            for (var s in n) n[s].protectedKeys = {};
            return l
          },
          setAnimateFunction: function(n) {
            t = n(e)
          },
          getState: function() {
            return n
          }
        }
      }
      function Vm() {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return {
          isActive: e,
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {}
        }
      }
      var Wm = {
        animation: Cg((function(t) {
          var n = t.visualElement,
          r = t.animate;
          n.animationState || (n.animationState = Im(n)),
          kf(r) && (0, e.useEffect)((function() {
            return r.subscribe(n)
          }), [r])
        })),
        exit: Cg((function(t) {
          var n = t.custom,
          r = t.visualElement,
          a = Ye(gf(), 2),
          o = a[0],
          i = a[1],
          l = (0, e.useContext)(Jd); (0, e.useEffect)((function() {
            r.isPresent = o;
            var e = r.animationState && r.animationState.setActive(Hp.Exit, !o, {
              custom: l && l.custom || n
            });
            e && !o && e.then(i)
          }), [o])
        }))
      },
      Um = function(e, t) {
        return Math.abs(e - t)
      };
      function Hm(e, t) {
        var n = Um(e.x, t.x),
        r = Um(e.y, t.y);
        return Math.sqrt(Math.pow(n, 2) + Math.pow(r, 2))
      }
      var $m = function() {
        function e(t, n) {
          var r = this,
          a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          o = a.transformPagePoint;
          if (Qa(this, e), this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {},
          this.updatePoint = function() {
            if (r.lastMoveEvent && r.lastMoveEventInfo) {
              var e = Ym(r.lastMoveEventInfo, r.history),
              t = null !== r.startEvent,
              n = Hm(e.offset, {
                x: 0,
                y: 0
              }) >= 3;
              if (t || n) {
                var a = e.point,
                o = Yd().timestamp;
                r.history.push(c(c({},
                a), {},
                {
                  timestamp: o
                }));
                var i = r.handlers,
                l = i.onStart,
                s = i.onMove;
                t || (l && l(r.lastMoveEvent, e), r.startEvent = r.lastMoveEvent),
                s && s(r.lastMoveEvent, e)
              }
            }
          },
          this.handlePointerMove = function(e, t) {
            r.lastMoveEvent = e,
            r.lastMoveEventInfo = qm(t, r.transformPagePoint),
            Xp(e) && 0 === e.buttons ? r.handlePointerUp(e, t) : Xd.update(r.updatePoint, !0)
          },
          this.handlePointerUp = function(e, t) {
            r.end();
            var n = r.handlers,
            a = n.onEnd,
            o = n.onSessionEnd,
            i = Ym(qm(t, r.transformPagePoint), r.history);
            r.startEvent && a && a(e, i),
            o && o(e, i)
          },
          !(Kp(t) && t.touches.length > 1)) {
            this.handlers = n,
            this.transformPagePoint = o;
            var i = tg(t),
            l = qm(i, this.transformPagePoint),
            s = l.point,
            u = Yd(),
            d = u.timestamp;
            this.history = [c(c({},
            s), {},
            {
              timestamp: d
            })];
            var f = n.onSessionStart;
            f && f(t, Ym(l, this.history)),
            this.removeListeners = mg(ig(window, "pointermove", this.handlePointerMove), ig(window, "pointerup", this.handlePointerUp), ig(window, "pointercancel", this.handlePointerUp))
          }
        }
        return Ka(e, [{
          key: "updateHandlers",
          value: function(e) {
            this.handlers = e
          }
        },
        {
          key: "end",
          value: function() {
            this.removeListeners && this.removeListeners(),
            Ud.update(this.updatePoint)
          }
        }]),
        e
      } ();
      function qm(e, t) {
        return t ? {
          point: t(e.point)
        }: e
      }
      function Gm(e, t) {
        return {
          x: e.x - t.x,
          y: e.y - t.y
        }
      }
      function Ym(e, t) {
        var n = e.point;
        return {
          point: n,
          delta: Gm(n, Km(t)),
          offset: Gm(n, Xm(t)),
          velocity: Qm(t, .1)
        }
      }
      function Xm(e) {
        return e[0]
      }
      function Km(e) {
        return e[e.length - 1]
      }
      function Qm(e, t) {
        if (e.length < 2) return {
          x: 0,
          y: 0
        };
        for (var n = e.length - 1,
        r = null,
        a = Km(e); n >= 0 && (r = e[n], !(a.timestamp - r.timestamp > Tg(t)));) n--;
        if (!r) return {
          x: 0,
          y: 0
        };
        var o = (a.timestamp - r.timestamp) / 1e3;
        if (0 === o) return {
          x: 0,
          y: 0
        };
        var i = {
          x: (a.x - r.x) / o,
          y: (a.y - r.y) / o
        };
        return i.x === 1 / 0 && (i.x = 0),
        i.y === 1 / 0 && (i.y = 0),
        i
      }
      function Zm(e) {
        return e.max - e.min
      }
      function Jm(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .01;
        return Math.abs(e - t) <= n
      }
      function eh(e, t, n) {
        var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : .5;
        e.origin = r,
        e.originPoint = Ev(t.min, t.max, e.origin),
        e.scale = Zm(n) / Zm(t),
        (Jm(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1),
        e.translate = Ev(n.min, n.max, e.origin) - e.originPoint,
        (Jm(e.translate) || isNaN(e.translate)) && (e.translate = 0)
      }
      function th(e, t, n, r) {
        eh(e.x, t.x, n.x, null === r || void 0 === r ? void 0 : r.originX),
        eh(e.y, t.y, n.y, null === r || void 0 === r ? void 0 : r.originY)
      }
      function nh(e, t, n) {
        e.min = n.min + t.min,
        e.max = e.min + Zm(t)
      }
      function rh(e, t, n) {
        e.min = t.min - n.min,
        e.max = e.min + Zm(t)
      }
      function ah(e, t, n) {
        rh(e.x, t.x, n.x),
        rh(e.y, t.y, n.y)
      }
      function oh(e, t, n) {
        return {
          min: void 0 !== t ? e.min + t: void 0,
          max: void 0 !== n ? e.max + n - (e.max - e.min) : void 0
        }
      }
      function ih(e, t) {
        var n = t.min - e.min,
        r = t.max - e.max;
        if (t.max - t.min < e.max - e.min) {
          var a = [r, n];
          n = a[0],
          r = a[1]
        }
        return {
          min: n,
          max: r
        }
      }
      var lh = .35;
      function sh(e, t, n) {
        return {
          min: ch(e, t),
          max: ch(e, n)
        }
      }
      function ch(e, t) {
        var n;
        return "number" === typeof e ? e: null !== (n = e[t]) && void 0 !== n ? n: 0
      }
      function uh(e) {
        return [e("x"), e("y")]
      }
      function dh(e) {
        var t = e.top;
        return {
          x: {
            min: e.left,
            max: e.right
          },
          y: {
            min: t,
            max: e.bottom
          }
        }
      }
      function fh(e) {
        return void 0 === e || 1 === e
      }
      function ph(e) {
        var t = e.scale,
        n = e.scaleX,
        r = e.scaleY;
        return ! fh(t) || !fh(n) || !fh(r)
      }
      function gh(e) {
        return ph(e) || vh(e) || e.z || e.rotate || e.rotateX || e.rotateY
      }
      function vh(e) {
        return mh(e.x) || mh(e.y)
      }
      function mh(e) {
        return e && "0%" !== e
      }
      function hh(e, t, n) {
        return n + t * (e - n)
      }
      function yh(e, t, n, r, a) {
        return void 0 !== a && (e = hh(e, a, r)),
        hh(e, n, r) + t
      }
      function bh(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
        r = arguments.length > 3 ? arguments[3] : void 0,
        a = arguments.length > 4 ? arguments[4] : void 0;
        e.min = yh(e.min, t, n, r, a),
        e.max = yh(e.max, t, n, r, a)
      }
      function xh(e, t) {
        var n = t.x,
        r = t.y;
        bh(e.x, n.translate, n.scale, n.originPoint),
        bh(e.y, r.translate, r.scale, r.originPoint)
      }
      function wh(e) {
        return Number.isInteger(e) || e > 1.0000000000001 || e < .999999999999 ? e: 1
      }
      function kh(e, t) {
        e.min = e.min + t,
        e.max = e.max + t
      }
      function _h(e, t, n) {
        var r = Ye(n, 3),
        a = r[0],
        o = r[1],
        i = r[2],
        l = void 0 !== t[i] ? t[i] : .5,
        s = Ev(e.min, e.max, l);
        bh(e, t[a], t[o], s, t.scale)
      }
      var Sh = ["x", "scaleX", "originX"],
      Eh = ["y", "scaleY", "originY"];
      function Ch(e, t) {
        _h(e.x, t, Sh),
        _h(e.y, t, Eh)
      }
      function Ah(e, t) {
        return dh(function(e, t) {
          if (!t) return e;
          var n = t({
            x: e.left,
            y: e.top
          }),
          r = t({
            x: e.right,
            y: e.bottom
          });
          return {
            top: n.y,
            left: n.x,
            bottom: r.y,
            right: r.x
          }
        } (e.getBoundingClientRect(), t))
      }
      var Ph = new WeakMap,
      Th = function() {
        function e(t) {
          Qa(this, e),
          this.openGlobalLock = null,
          this.isDragging = !1,
          this.currentDirection = null,
          this.originPoint = {
            x: 0,
            y: 0
          },
          this.constraints = !1,
          this.hasMutatedConstraints = !1,
          this.elastic = {
            x: {
              min: 0,
              max: 0
            },
            y: {
              min: 0,
              max: 0
            }
          },
          this.visualElement = t
        }
        return Ka(e, [{
          key: "start",
          value: function(e) {
            var t = this,
            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            r = n.snapToCursor,
            a = void 0 !== r && r;
            if (!1 !== this.visualElement.isPresent) {
              var o = function(e) {
                t.stopAnimation(),
                a && t.snapToCursor(tg(e, "page").point)
              },
              i = function(e, n) {
                var r, a = t.getProps(),
                o = a.drag,
                i = a.dragPropagation,
                l = a.onDragStart; (!o || i || (t.openGlobalLock && t.openGlobalLock(), t.openGlobalLock = dg(o), t.openGlobalLock)) && (t.isDragging = !0, t.currentDirection = null, t.resolveConstraints(), t.visualElement.projection && (t.visualElement.projection.isAnimationBlocked = !0, t.visualElement.projection.target = void 0), uh((function(e) {
                  var n, r, a = t.getAxisMotionValue(e).get() || 0;
                  if (rp.test(a)) {
                    var o = null === (r = null === (n = t.visualElement.projection) || void 0 === n ? void 0 : n.layout) || void 0 === r ? void 0 : r.layoutBox[e];
                    if (o) a = Zm(o) * (parseFloat(a) / 100)
                  }
                  t.originPoint[e] = a
                })), null === l || void 0 === l || l(e, n), null === (r = t.visualElement.animationState) || void 0 === r || r.setActive(Hp.Drag, !0))
              },
              l = function(e, n) {
                var r = t.getProps(),
                a = r.dragPropagation,
                o = r.dragDirectionLock,
                i = r.onDirectionLock,
                l = r.onDrag;
                if (a || t.openGlobalLock) {
                  var s = n.offset;
                  if (o && null === t.currentDirection) return t.currentDirection = jh(s),
                  void(null !== t.currentDirection && (null === i || void 0 === i || i(t.currentDirection)));
                  t.updateAxis("x", n.point, s),
                  t.updateAxis("y", n.point, s),
                  t.visualElement.render(),
                  null === l || void 0 === l || l(e, n)
                }
              },
              s = function(e, n) {
                return t.stop(e, n)
              };
              this.panSession = new $m(e, {
                onSessionStart: o,
                onStart: i,
                onMove: l,
                onSessionEnd: s
              },
              {
                transformPagePoint: this.visualElement.getTransformPagePoint()
              })
            }
          }
        },
        {
          key: "stop",
          value: function(e, t) {
            var n = this.isDragging;
            if (this.cancel(), n) {
              var r = t.velocity;
              this.startAnimation(r);
              var a = this.getProps().onDragEnd;
              null === a || void 0 === a || a(e, t)
            }
          }
        },
        {
          key: "cancel",
          value: function() {
            var e, t;
            this.isDragging = !1,
            this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !1),
            null === (e = this.panSession) || void 0 === e || e.end(),
            this.panSession = void 0,
            !this.getProps().dragPropagation && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null),
            null === (t = this.visualElement.animationState) || void 0 === t || t.setActive(Hp.Drag, !1)
          }
        },
        {
          key: "updateAxis",
          value: function(e, t, n) {
            var r = this.getProps().drag;
            if (n && zh(e, r, this.currentDirection)) {
              var a = this.getAxisMotionValue(e),
              o = this.originPoint[e] + n[e];
              this.constraints && this.constraints[e] && (o = function(e, t, n) {
                var r = t.min,
                a = t.max;
                return void 0 !== r && e < r ? e = n ? Ev(r, e, n.min) : Math.max(e, r) : void 0 !== a && e > a && (e = n ? Ev(a, e, n.max) : Math.min(e, a)),
                e
              } (o, this.constraints[e], this.elastic[e])),
              a.set(o)
            }
          }
        },
        {
          key: "resolveConstraints",
          value: function() {
            var e = this,
            t = this.getProps(),
            n = t.dragConstraints,
            r = t.dragElastic,
            a = (this.visualElement.projection || {}).layout,
            o = this.constraints;
            n && xf(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : this.constraints = !(!n || !a) &&
            function(e, t) {
              var n = t.top,
              r = t.left,
              a = t.bottom,
              o = t.right;
              return {
                x: oh(e.x, r, o),
                y: oh(e.y, n, a)
              }
            } (a.layoutBox, n),
            this.elastic = function() {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : lh;
              return ! 1 === e ? e = 0 : !0 === e && (e = lh),
              {
                x: sh(e, "left", "right"),
                y: sh(e, "top", "bottom")
              }
            } (r),
            o !== this.constraints && a && this.constraints && !this.hasMutatedConstraints && uh((function(t) {
              e.getAxisMotionValue(t) && (e.constraints[t] = function(e, t) {
                var n = {};
                return void 0 !== t.min && (n.min = t.min - e.min),
                void 0 !== t.max && (n.max = t.max - e.min),
                n
              } (a.layoutBox[t], e.constraints[t]))
            }))
          }
        },
        {
          key: "resolveRefConstraints",
          value: function() {
            var e = this.getProps(),
            t = e.dragConstraints,
            n = e.onMeasureDragConstraints;
            if (!t || !xf(t)) return ! 1;
            var r = t.current,
            a = this.visualElement.projection;
            if (!a || !a.layout) return ! 1;
            var o = function(e, t, n) {
              var r = Ah(e, n),
              a = t.scroll;
              return a && (kh(r.x, a.offset.x), kh(r.y, a.offset.y)),
              r
            } (r, a.root, this.visualElement.getTransformPagePoint()),
            i = function(e, t) {
              return {
                x: ih(e.x, t.x),
                y: ih(e.y, t.y)
              }
            } (a.layout.layoutBox, o);
            if (n) {
              var l = n(function(e) {
                var t = e.x,
                n = e.y;
                return {
                  top: n.min,
                  right: t.max,
                  bottom: n.max,
                  left: t.min
                }
              } (i));
              this.hasMutatedConstraints = !!l,
              l && (i = dh(l))
            }
            return i
          }
        },
        {
          key: "startAnimation",
          value: function(e) {
            var t = this,
            n = this.getProps(),
            r = n.drag,
            a = n.dragMomentum,
            o = n.dragElastic,
            i = n.dragTransition,
            l = n.dragSnapToOrigin,
            s = n.onDragTransitionEnd,
            u = this.constraints || {},
            d = uh((function(n) {
              var s;
              if (zh(n, r, t.currentDirection)) {
                var d = null !== (s = null === u || void 0 === u ? void 0 : u[n]) && void 0 !== s ? s: {};
                l && (d = {
                  min: 0,
                  max: 0
                });
                var f = o ? 200 : 1e6,
                p = o ? 40 : 1e7,
                g = c(c({
                  type: "inertia",
                  velocity: a ? e[n] : 0,
                  bounceStiffness: f,
                  bounceDamping: p,
                  timeConstant: 750,
                  restDelta: 1,
                  restSpeed: 10
                },
                i), d);
                return t.startAxisValueAnimation(n, g)
              }
            }));
            return Promise.all(d).then(s)
          }
        },
        {
          key: "startAxisValueAnimation",
          value: function(e, t) {
            return dm(e, this.getAxisMotionValue(e), 0, t)
          }
        },
        {
          key: "stopAnimation",
          value: function() {
            var e = this;
            uh((function(t) {
              return e.getAxisMotionValue(t).stop()
            }))
          }
        },
        {
          key: "getAxisMotionValue",
          value: function(e) {
            var t, n, r = "_drag" + e.toUpperCase(),
            a = this.visualElement.getProps()[r];
            return a || this.visualElement.getValue(e, null !== (n = null === (t = this.visualElement.getProps().initial) || void 0 === t ? void 0 : t[e]) && void 0 !== n ? n: 0)
          }
        },
        {
          key: "snapToCursor",
          value: function(e) {
            var t = this;
            uh((function(n) {
              if (zh(n, t.getProps().drag, t.currentDirection)) {
                var r = t.visualElement.projection,
                a = t.getAxisMotionValue(n);
                if (r && r.layout) {
                  var o = r.layout.layoutBox[n],
                  i = o.min,
                  l = o.max;
                  a.set(e[n] - Ev(i, l, .5))
                }
              }
            }))
          }
        },
        {
          key: "scalePositionWithinConstraints",
          value: function() {
            var e, t = this;
            if (this.visualElement.current) {
              var n = this.getProps(),
              r = n.drag,
              a = n.dragConstraints,
              o = this.visualElement.projection;
              if (xf(a) && o && this.constraints) {
                this.stopAnimation();
                var i = {
                  x: 0,
                  y: 0
                };
                uh((function(e) {
                  var n = t.getAxisMotionValue(e);
                  if (n) {
                    var r = n.get();
                    i[e] = function(e, t) {
                      var n = .5,
                      r = Zm(e),
                      a = Zm(t);
                      return a > r ? n = Bv(t.min, t.max - r, e.min) : r > a && (n = Bv(e.min, e.max - a, t.min)),
                      Sv(0, 1, n)
                    } ({
                      min: r,
                      max: r
                    },
                    t.constraints[e])
                  }
                }));
                var l = this.visualElement.getProps().transformTemplate;
                this.visualElement.current.style.transform = l ? l({},
                "") : "none",
                null === (e = o.root) || void 0 === e || e.updateScroll(),
                o.updateLayout(),
                this.resolveConstraints(),
                uh((function(e) {
                  if (zh(e, r, null)) {
                    var n = t.getAxisMotionValue(e),
                    a = t.constraints[e],
                    o = a.min,
                    l = a.max;
                    n.set(Ev(o, l, i[e]))
                  }
                }))
              }
            }
          }
        },
        {
          key: "addListeners",
          value: function() {
            var e, t = this;
            if (this.visualElement.current) {
              Ph.set(this.visualElement, this);
              var n = ig(this.visualElement.current, "pointerdown", (function(e) {
                var n = t.getProps(),
                r = n.drag,
                a = n.dragListener;
                r && (void 0 === a || a) && t.start(e)
              })),
              r = function() {
                xf(t.getProps().dragConstraints) && (t.constraints = t.resolveRefConstraints())
              },
              a = this.visualElement.projection,
              o = a.addEventListener("measure", r);
              a && !a.layout && (null === (e = a.root) || void 0 === e || e.updateScroll(), a.updateLayout()),
              r();
              var i = Gp(window, "resize", (function() {
                return t.scalePositionWithinConstraints()
              })),
              l = a.addEventListener("didUpdate", (function(e) {
                var n = e.delta,
                r = e.hasLayoutChanged;
                t.isDragging && r && (uh((function(e) {
                  var r = t.getAxisMotionValue(e);
                  r && (t.originPoint[e] += n[e].translate, r.set(r.get() + n[e].translate))
                })), t.visualElement.render())
              }));
              return function() {
                i(),
                n(),
                o(),
                null === l || void 0 === l || l()
              }
            }
          }
        },
        {
          key: "getProps",
          value: function() {
            var e = this.visualElement.getProps(),
            t = e.drag,
            n = void 0 !== t && t,
            r = e.dragDirectionLock,
            a = void 0 !== r && r,
            o = e.dragPropagation,
            i = void 0 !== o && o,
            l = e.dragConstraints,
            s = void 0 !== l && l,
            u = e.dragElastic,
            d = void 0 === u ? lh: u,
            f = e.dragMomentum,
            p = void 0 === f || f;
            return c(c({},
            e), {},
            {
              drag: n,
              dragDirectionLock: a,
              dragPropagation: i,
              dragConstraints: s,
              dragElastic: d,
              dragMomentum: p
            })
          }
        }]),
        e
      } ();
      function zh(e, t, n) {
        return (!0 === t || t === e) && (null === n || n === e)
      }
      function jh(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10,
        n = null;
        return Math.abs(e.y) > t ? n = "y": Math.abs(e.x) > t && (n = "x"),
        n
      }
      var Rh = {
        pan: Cg((function(t) {
          var n = t.onPan,
          r = t.onPanStart,
          a = t.onPanEnd,
          o = t.onPanSessionStart,
          i = t.visualElement,
          l = n || r || a || o,
          s = (0, e.useRef)(null),
          c = (0, e.useContext)(mf).transformPagePoint,
          u = {
            onSessionStart: o,
            onStart: r,
            onMove: n,
            onEnd: function(e, t) {
              s.current = null,
              a && a(e, t)
            }
          }; (0, e.useEffect)((function() {
            null !== s.current && s.current.updateHandlers(u)
          })),
          lg(i, "pointerdown", l &&
          function(e) {
            s.current = new $m(e, u, {
              transformPagePoint: c
            })
          }),
          lf((function() {
            return s.current && s.current.end()
          }))
        })),
        drag: Cg((function(t) {
          var n = t.dragControls,
          r = t.visualElement,
          a = ef((function() {
            return new Th(r)
          })); (0, e.useEffect)((function() {
            return n && n.subscribe(a)
          }), [a, n]),
          (0, e.useEffect)((function() {
            return a.addListeners()
          }), [a])
        }))
      };
      function Mh(e) {
        return "string" === typeof e && e.startsWith("var(--")
      }
      var Nh = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
      function Oh(e) {
        var t = Nh.exec(e);
        if (!t) return [, ];
        var n = Ye(t, 3);
        return [n[1], n[2]]
      }
      function Bh(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        'Max CSS variable fallback depth detected in property "'.concat(e, '". This may indicate a circular fallback dependency.');
        var r = Oh(e),
        a = Ye(r, 2),
        o = a[0],
        i = a[1];
        if (o) {
          var l = window.getComputedStyle(t).getPropertyValue(o);
          return l ? l.trim() : Mh(i) ? Bh(i, t, n + 1) : i
        }
      }
      function Lh(e, t, n) {
        var r = Object.assign({},
        (function(e) {
          if (null == e) throw new TypeError("Cannot destructure " + e)
        } (t), t)),
        a = e.current;
        if (! (a instanceof Element)) return {
          target: r,
          transitionEnd: n
        };
        for (var o in n && (n = c({},
        n)), e.values.forEach((function(e) {
          var t = e.get();
          if (Mh(t)) {
            var n = Bh(t, a);
            n && e.set(n)
          }
        })), r) {
          var i = r[o];
          if (Mh(i)) {
            var l = Bh(i, a);
            l && (r[o] = l, n && void 0 === n[o] && (n[o] = i))
          }
        }
        return {
          target: r,
          transitionEnd: n
        }
      }
      var Fh, Dh = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y"]),
      Ih = function(e) {
        return Dh.has(e)
      },
      Vh = function(e, t) {
        e.set(t, !1),
        e.set(t)
      },
      Wh = function(e) {
        return e === sp || e === ap
      }; !
      function(e) {
        e.width = "width",
        e.height = "height",
        e.left = "left",
        e.right = "right",
        e.top = "top",
        e.bottom = "bottom"
      } (Fh || (Fh = {}));
      var Uh = function(e, t) {
        return parseFloat(e.split(", ")[t])
      },
      Hh = function(e, t) {
        return function(n, r) {
          var a = r.transform;
          if ("none" === a || !a) return 0;
          var o = a.match(/^matrix3d\((.+)\)$/);
          if (o) return Uh(o[1], t);
          var i = a.match(/^matrix\((.+)\)$/);
          return i ? Uh(i[1], e) : 0
        }
      },
      $h = new Set(["x", "y", "z"]),
      qh = Vf.filter((function(e) {
        return ! $h.has(e)
      }));
      function Gh(e) {
        var t = [];
        return qh.forEach((function(n) {
          var r = e.getValue(n);
          void 0 !== r && (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0))
        })),
        t.length && e.render(),
        t
      }
      var Yh = {
        width: function(e, t) {
          var n = e.x,
          r = t.paddingLeft,
          a = void 0 === r ? "0": r,
          o = t.paddingRight,
          i = void 0 === o ? "0": o;
          return n.max - n.min - parseFloat(a) - parseFloat(i)
        },
        height: function(e, t) {
          var n = e.y,
          r = t.paddingTop,
          a = void 0 === r ? "0": r,
          o = t.paddingBottom,
          i = void 0 === o ? "0": o;
          return n.max - n.min - parseFloat(a) - parseFloat(i)
        },
        top: function(e, t) {
          var n = t.top;
          return parseFloat(n)
        },
        left: function(e, t) {
          var n = t.left;
          return parseFloat(n)
        },
        bottom: function(e, t) {
          var n = e.y,
          r = t.top;
          return parseFloat(r) + (n.max - n.min)
        },
        right: function(e, t) {
          var n = e.x,
          r = t.left;
          return parseFloat(r) + (n.max - n.min)
        },
        x: Hh(4, 13),
        y: Hh(5, 14)
      },
      Xh = function(e, t, n) {
        var r = t.measureViewportBox(),
        a = t.current,
        o = getComputedStyle(a),
        i = o.display,
        l = {};
        "none" === i && t.setStaticValue("display", e.display || "block"),
        n.forEach((function(e) {
          l[e] = Yh[e](r, o)
        })),
        t.render();
        var s = t.measureViewportBox();
        return n.forEach((function(n) {
          var r = t.getValue(n);
          Vh(r, l[n]),
          e[n] = Yh[n](s, o)
        })),
        e
      };
      function Kh(e, t, n, r) {
        return function(e) {
          return Object.keys(e).some(Ih)
        } (t) ?
        function(e, t) {
          var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
          t = c({},
          t),
          r = c({},
          r);
          var a = Object.keys(t).filter(Ih),
          o = [],
          i = !1,
          l = [];
          if (a.forEach((function(a) {
            var s = e.getValue(a);
            if (e.hasValue(a)) {
              var c, u = n[a],
              d = xm(u),
              f = t[a];
              if (Fp(f)) {
                var p = f.length,
                g = null === f[0] ? 1 : 0;
                u = f[g],
                d = xm(u);
                for (var v = g; v < p; v++) c ? xm(f[v]) : (c = xm(f[v])) === d || Wh(d) && Wh(c)
              } else c = xm(f);
              if (d !== c) if (Wh(d) && Wh(c)) {
                var m = s.get();
                "string" === typeof m && s.set(parseFloat(m)),
                "string" === typeof f ? t[a] = parseFloat(f) : Array.isArray(f) && c === ap && (t[a] = f.map(parseFloat))
              } else(null === d || void 0 === d ? void 0 : d.transform) && (null === c || void 0 === c ? void 0 : c.transform) && (0 === u || 0 === f) ? 0 === u ? s.set(c.transform(u)) : t[a] = d.transform(f) : (i || (o = Gh(e), i = !0), l.push(a), r[a] = void 0 !== r[a] ? r[a] : t[a], Vh(s, f))
            }
          })), l.length) {
            var s = l.indexOf("height") >= 0 ? window.pageYOffset: null,
            u = Xh(t, e, l);
            return o.length && o.forEach((function(t) {
              var n = Ye(t, 2),
              r = n[0],
              a = n[1];
              e.getValue(r).set(a)
            })),
            e.render(),
            Kd && null !== s && window.scrollTo({
              top: s
            }),
            {
              target: u,
              transitionEnd: r
            }
          }
          return {
            target: t,
            transitionEnd: r
          }
        } (e, t, n, r) : {
          target: t,
          transitionEnd: r
        }
      }
      var Qh = {
        current: null
      },
      Zh = {
        current: !1
      };
      var Jh = ["willChange"],
      ey = Object.keys(Tf),
      ty = ey.length,
      ny = ["AnimationStart", "AnimationComplete", "Update", "Unmount", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"],
      ry = function() {
        function t(e) {
          var n = this,
          r = e.parent,
          a = e.props,
          o = e.reducedMotionConfig,
          i = e.visualState,
          l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          Qa(this, t),
          this.current = null,
          this.children = new Set,
          this.isVariantNode = !1,
          this.isControllingVariants = !1,
          this.shouldReduceMotion = null,
          this.values = new Map,
          this.isPresent = !0,
          this.valueSubscriptions = new Map,
          this.prevMotionValues = {},
          this.events = {},
          this.propEventSubscriptions = {},
          this.notifyUpdate = function() {
            return n.notify("Update", n.latestValues)
          },
          this.render = function() {
            n.current && (n.triggerBuild(), n.renderInstance(n.current, n.renderState, n.props.style, n.projection))
          },
          this.scheduleRender = function() {
            return Xd.render(n.render, !1, !0)
          };
          var s = i.latestValues,
          d = i.renderState;
          this.latestValues = s,
          this.baseTarget = c({},
          s),
          this.initialValues = a.initial ? c({},
          s) : {},
          this.renderState = d,
          this.parent = r,
          this.props = a,
          this.depth = r ? r.depth + 1 : 0,
          this.reducedMotionConfig = o,
          this.options = l,
          this.isControllingVariants = Sf(a),
          this.isVariantNode = Ef(a),
          this.isVariantNode && (this.variantChildren = new Set),
          this.manuallyAnimateOnMount = Boolean(r && r.current);
          var f = this.scrapeMotionValuesFromProps(a),
          p = f.willChange,
          g = u(f, Jh);
          for (var v in g) {
            var m = g[v];
            void 0 !== s[v] && Hf(m) && (m.set(s[v], !1), Pm(p) && p.add(v))
          }
        }
        return Ka(t, [{
          key: "scrapeMotionValuesFromProps",
          value: function(e) {
            return {}
          }
        },
        {
          key: "mount",
          value: function(e) {
            var t, n = this;
            this.current = e,
            this.projection && this.projection.mount(e),
            this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = null === (t = this.parent) || void 0 === t ? void 0 : t.addVariantChild(this)),
            this.values.forEach((function(e, t) {
              return n.bindToMotionValue(t, e)
            })),
            Zh.current ||
            function() {
              if (Zh.current = !0, Kd) if (window.matchMedia) {
                var e = window.matchMedia("(prefers-reduced-motion)"),
                t = function() {
                  return Qh.current = e.matches
                };
                e.addListener(t),
                t()
              } else Qh.current = !1
            } (),
            this.shouldReduceMotion = "never" !== this.reducedMotionConfig && ("always" === this.reducedMotionConfig || Qh.current),
            this.parent && this.parent.children.add(this),
            this.setProps(this.props)
          }
        },
        {
          key: "unmount",
          value: function() {
            var e, t, n;
            for (var r in null === (e = this.projection) || void 0 === e || e.unmount(), Ud.update(this.notifyUpdate), Ud.render(this.render), this.valueSubscriptions.forEach((function(e) {
              return e()
            })), null === (t = this.removeFromVariantTree) || void 0 === t || t.call(this), null === (n = this.parent) || void 0 === n || n.children.delete(this), this.events) this.events[r].clear();
            this.current = null
          }
        },
        {
          key: "bindToMotionValue",
          value: function(e, t) {
            var n = this,
            r = Wf.has(e),
            a = t.onChange((function(t) {
              n.latestValues[e] = t,
              n.props.onUpdate && Xd.update(n.notifyUpdate, !1, !0),
              r && n.projection && (n.projection.isTransformDirty = !0)
            })),
            o = t.onRenderRequest(this.scheduleRender);
            this.valueSubscriptions.set(e, (function() {
              a(),
              o()
            }))
          }
        },
        {
          key: "sortNodePosition",
          value: function(e) {
            return this.current && this.sortInstanceNodePosition && this.type === e.type ? this.sortInstanceNodePosition(this.current, e.current) : 0
          }
        },
        {
          key: "loadFeatures",
          value: function(t, n, r, a, o, i) {
            var l = this,
            s = [];
            for (var u = 0; u < ty; u++) {
              var d = ey[u],
              f = Tf[d],
              p = f.isEnabled,
              g = f.Component;
              p(t) && g && s.push((0, e.createElement)(g, c(c({
                key: d
              },
              t), {},
              {
                visualElement: this
              })))
            }
            if (!this.projection && o) {
              this.projection = new o(a, this.latestValues, this.parent && this.parent.projection);
              var v = t.layoutId,
              m = t.layout,
              h = t.drag,
              y = t.dragConstraints,
              b = t.layoutScroll;
              this.projection.setOptions({
                layoutId: v,
                layout: m,
                alwaysMeasureLayout: Boolean(h) || y && xf(y),
                visualElement: this,
                scheduleRender: function() {
                  return l.scheduleRender()
                },
                animationType: "string" === typeof m ? m: "both",
                initialPromotionConfig: i,
                layoutScroll: b
              })
            }
            return s
          }
        },
        {
          key: "triggerBuild",
          value: function() {
            this.build(this.renderState, this.latestValues, this.options, this.props)
          }
        },
        {
          key: "measureViewportBox",
          value: function() {
            return this.current ? this.measureInstanceViewportBox(this.current, this.props) : {
              x: {
                min: 0,
                max: 0
              },
              y: {
                min: 0,
                max: 0
              }
            }
          }
        },
        {
          key: "getStaticValue",
          value: function(e) {
            return this.latestValues[e]
          }
        },
        {
          key: "setStaticValue",
          value: function(e, t) {
            this.latestValues[e] = t
          }
        },
        {
          key: "makeTargetAnimatable",
          value: function(e) {
            var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            return this.makeTargetAnimatableFromInstance(e, this.props, t)
          }
        },
        {
          key: "setProps",
          value: function(e) { (e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
            this.props = e;
            for (var t = 0; t < ny.length; t++) {
              var n = ny[t];
              this.propEventSubscriptions[n] && (this.propEventSubscriptions[n](), delete this.propEventSubscriptions[n]);
              var r = e["on" + n];
              r && (this.propEventSubscriptions[n] = this.on(n, r))
            }
            this.prevMotionValues = function(e, t, n) {
              var r = t.willChange;
              for (var a in t) {
                var o = t[a],
                i = n[a];
                if (Hf(o)) e.addValue(a, o),
                Pm(r) && r.add(a);
                else if (Hf(i)) e.addValue(a, hm(o)),
                Pm(r) && r.remove(a);
                else if (i !== o) if (e.hasValue(a)) {
                  var l = e.getValue(a); ! l.hasAnimated && l.set(o)
                } else {
                  var s = e.getStaticValue(a);
                  e.addValue(a, hm(void 0 !== s ? s: o))
                }
              }
              for (var c in n) void 0 === t[c] && e.removeValue(c);
              return t
            } (this, this.scrapeMotionValuesFromProps(e), this.prevMotionValues)
          }
        },
        {
          key: "getProps",
          value: function() {
            return this.props
          }
        },
        {
          key: "getVariant",
          value: function(e) {
            var t;
            return null === (t = this.props.variants) || void 0 === t ? void 0 : t[e]
          }
        },
        {
          key: "getDefaultTransition",
          value: function() {
            return this.props.transition
          }
        },
        {
          key: "getTransformPagePoint",
          value: function() {
            return this.props.transformPagePoint
          }
        },
        {
          key: "getClosestVariantNode",
          value: function() {
            var e;
            return this.isVariantNode ? this: null === (e = this.parent) || void 0 === e ? void 0 : e.getClosestVariantNode()
          }
        },
        {
          key: "getVariantContext",
          value: function() {
            var e, t, n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (n) return null === (e = this.parent) || void 0 === e ? void 0 : e.getVariantContext();
            if (!this.isControllingVariants) {
              var r = (null === (t = this.parent) || void 0 === t ? void 0 : t.getVariantContext()) || {};
              return void 0 !== this.props.initial && (r.initial = this.props.initial),
              r
            }
            for (var a = {},
            o = 0; o < oy; o++) {
              var i = ay[o],
              l = this.props[i]; (wf(l) || !1 === l) && (a[i] = l)
            }
            return a
          }
        },
        {
          key: "addVariantChild",
          value: function(e) {
            var t, n = this.getClosestVariantNode();
            if (n) return null === (t = n.variantChildren) || void 0 === t || t.add(e),
            function() {
              return n.variantChildren.delete(e)
            }
          }
        },
        {
          key: "addValue",
          value: function(e, t) {
            this.hasValue(e) && this.removeValue(e),
            this.values.set(e, t),
            this.latestValues[e] = t.get(),
            this.bindToMotionValue(e, t)
          }
        },
        {
          key: "removeValue",
          value: function(e) {
            var t;
            this.values.delete(e),
            null === (t = this.valueSubscriptions.get(e)) || void 0 === t || t(),
            this.valueSubscriptions.delete(e),
            delete this.latestValues[e],
            this.removeValueFromRenderState(e, this.renderState)
          }
        },
        {
          key: "hasValue",
          value: function(e) {
            return this.values.has(e)
          }
        },
        {
          key: "getValue",
          value: function(e, t) {
            if (this.props.values && this.props.values[e]) return this.props.values[e];
            var n = this.values.get(e);
            return void 0 === n && void 0 !== t && (n = hm(t), this.addValue(e, n)),
            n
          }
        },
        {
          key: "readValue",
          value: function(e) {
            return void 0 === this.latestValues[e] && this.current ? this.readValueFromInstance(this.current, e, this.options) : this.latestValues[e]
          }
        },
        {
          key: "setBaseTarget",
          value: function(e, t) {
            this.baseTarget[e] = t
          }
        },
        {
          key: "getBaseTarget",
          value: function(e) {
            var t, n = this.props.initial,
            r = "string" === typeof n || "object" === typeof n ? null === (t = Lp(this.props, n)) || void 0 === t ? void 0 : t[e] : void 0;
            if (n && void 0 !== r) return r;
            var a = this.getBaseTargetFromProps(this.props, e);
            return void 0 === a || Hf(a) ? void 0 !== this.initialValues[e] && void 0 === r ? void 0 : this.baseTarget[e] : a
          }
        },
        {
          key: "on",
          value: function(e, t) {
            return this.events[e] || (this.events[e] = new vm),
            this.events[e].add(t)
          }
        },
        {
          key: "notify",
          value: function(e) {
            for (var t, n, r = arguments.length,
            a = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) a[o - 1] = arguments[o];
            null === (n = this.events[e]) || void 0 === n || (t = n).notify.apply(t, a)
          }
        }]),
        t
      } (),
      ay = ["initial"].concat(pt(Bm)),
      oy = ay.length,
      iy = ["transition", "transitionEnd"],
      ly = function(e) {
        Mt(n, e);
        var t = to(n);
        function n() {
          return Qa(this, n),
          t.apply(this, arguments)
        }
        return Ka(n, [{
          key: "sortInstanceNodePosition",
          value: function(e, t) {
            return 2 & e.compareDocumentPosition(t) ? 1 : -1
          }
        },
        {
          key: "getBaseTargetFromProps",
          value: function(e, t) {
            var n;
            return null === (n = e.style) || void 0 === n ? void 0 : n[t]
          }
        },
        {
          key: "removeValueFromRenderState",
          value: function(e, t) {
            var n = t.vars,
            r = t.style;
            delete n[e],
            delete r[e]
          }
        },
        {
          key: "makeTargetAnimatableFromInstance",
          value: function(e, t, n) {
            var r = e.transition,
            a = e.transitionEnd,
            o = u(e, iy),
            i = t.transformValues,
            l = function(e, t, n) {
              var r, a = {};
              for (var o in e) {
                var i = Am(o, t);
                a[o] = void 0 !== i ? i: null === (r = n.getValue(o)) || void 0 === r ? void 0 : r.get()
              }
              return a
            } (o, r || {},
            this);
            if (i && (a && (a = i(a)), o && (o = i(o)), l && (l = i(l))), n) { !
              function(e, t, n) {
                var r, a, o = Object.keys(t).filter((function(t) {
                  return ! e.hasValue(t)
                })),
                i = o.length;
                if (i) for (var l = 0; l < i; l++) {
                  var s = o[l],
                  c = t[s],
                  u = null;
                  Array.isArray(c) && (u = c[0]),
                  null === u && (u = null !== (a = null !== (r = n[s]) && void 0 !== r ? r: e.readValue(s)) && void 0 !== a ? a: t[s]),
                  void 0 !== u && null !== u && ("string" === typeof u && (/^\-?\d*\.?\d+$/.test(u) || fm(u)) ? u = parseFloat(u) : !km(u) && sv.test(c) && (u = wv(s, c)), e.addValue(s, hm(u)), void 0 === n[s] && (n[s] = u), null !== u && e.setBaseTarget(s, u))
                }
              } (this, o, l);
              var s = function(e, t, n, r) {
                var a = Lh(e, t, r);
                return Kh(e, t = a.target, n, r = a.transitionEnd)
              } (this, o, l, a);
              a = s.transitionEnd,
              o = s.target
            }
            return c({
              transition: r,
              transitionEnd: a
            },
            o)
          }
        }]),
        n
      } (ry);
      var sy = function(e) {
        Mt(n, e);
        var t = to(n);
        function n() {
          return Qa(this, n),
          t.apply(this, arguments)
        }
        return Ka(n, [{
          key: "readValueFromInstance",
          value: function(e, t) {
            if (Wf.has(t)) {
              var n = xv(t);
              return n && n.
            default || 0
            }
            var r, a = (r = e, window.getComputedStyle(r)),
            o = (Gf(t) ? a.getPropertyValue(t) : a[t]) || 0;
            return "string" === typeof o ? o.trim() : o
          }
        },
        {
          key: "measureInstanceViewportBox",
          value: function(e, t) {
            return Ah(e, t.transformPagePoint)
          }
        },
        {
          key: "build",
          value: function(e, t, n, r) {
            pp(e, t, n, r.transformTemplate)
          }
        },
        {
          key: "scrapeMotionValuesFromProps",
          value: function(e) {
            return Op(e)
          }
        },
        {
          key: "renderInstance",
          value: function(e, t, n, r) {
            Rp(e, t, n, r)
          }
        }]),
        n
      } (ly),
      cy = function(e) {
        Mt(n, e);
        var t = to(n);
        function n() {
          return Qa(this, n),
          t.apply(this, arguments)
        }
        return Ka(n, [{
          key: "getBaseTargetFromProps",
          value: function(e, t) {
            return e[t]
          }
        },
        {
          key: "readValueFromInstance",
          value: function(e, t) {
            var n;
            return Wf.has(t) ? (null === (n = xv(t)) || void 0 === n ? void 0 : n.
          default) || 0 : (t = Mp.has(t) ? t: jp(t), e.getAttribute(t))
          }
        },
        {
          key: "measureInstanceViewportBox",
          value: function() {
            return {
              x: {
                min: 0,
                max: 0
              },
              y: {
                min: 0,
                max: 0
              }
            }
          }
        },
        {
          key: "scrapeMotionValuesFromProps",
          value: function(e) {
            return Bp(e)
          }
        },
        {
          key: "build",
          value: function(e, t, n, r) {
            Ap(e, t, n, r.transformTemplate)
          }
        },
        {
          key: "renderInstance",
          value: function(e, t, n, r) {
            Np(e, t, 0, r)
          }
        }]),
        n
      } (ly),
      uy = function(e, t) {
        return Df(e) ? new cy(t, {
          enableHardwareAcceleration: !1
        }) : new sy(t, {
          enableHardwareAcceleration: !0
        })
      };
      function dy(e, t) {
        return t.max === t.min ? 0 : e / (t.max - t.min) * 100
      }
      var fy = {
        correct: function(e, t) {
          if (!t.target) return e;
          if ("string" === typeof e) {
            if (!ap.test(e)) return e;
            e = parseFloat(e)
          }
          var n = dy(e, t.target.x),
          r = dy(e, t.target.y);
          return "".concat(n, "% ").concat(r, "%")
        }
      },
      py = "_$css",
      gy = {
        correct: function(e, t) {
          var n = t.treeScale,
          r = t.projectionDelta,
          a = e,
          o = e.includes("var("),
          i = [];
          o && (e = e.replace(Nh, (function(e) {
            return i.push(e),
            py
          })));
          var l = sv.parse(e);
          if (l.length > 5) return a;
          var s = sv.createTransformer(e),
          c = "number" !== typeof l[0] ? 1 : 0,
          u = r.x.scale * n.x,
          d = r.y.scale * n.y;
          l[0 + c] /= u,
          l[1 + c] /= d;
          var f = Ev(u, d, .5);
          "number" === typeof l[2 + c] && (l[2 + c] /= f),
          "number" === typeof l[3 + c] && (l[3 + c] /= f);
          var p = s(l);
          if (o) {
            var g = 0;
            p = p.replace(py, (function() {
              var e = i[g];
              return g++,
              e
            }))
          }
          return p
        }
      },
      vy = function(e) {
        Mt(n, e);
        var t = to(n);
        function n() {
          return Qa(this, n),
          t.apply(this, arguments)
        }
        return Ka(n, [{
          key: "componentDidMount",
          value: function() {
            var e, t = this,
            n = this.props,
            r = n.visualElement,
            a = n.layoutGroup,
            o = n.switchLayoutGroup,
            i = n.layoutId,
            l = r.projection;
            e = my,
            Object.assign(If, e),
            l && (a.group && a.group.add(l), o && o.register && i && o.register(l), l.root.didUpdate(), l.addEventListener("animationComplete", (function() {
              t.safeToRemove()
            })), l.setOptions(c(c({},
            l.options), {},
            {
              onExitComplete: function() {
                return t.safeToRemove()
              }
            }))),
            zf.hasEverUpdated = !0
          }
        },
        {
          key: "getSnapshotBeforeUpdate",
          value: function(e) {
            var t = this,
            n = this.props,
            r = n.layoutDependency,
            a = n.visualElement,
            o = n.drag,
            i = n.isPresent,
            l = a.projection;
            return l ? (l.isPresent = i, o || e.layoutDependency !== r || void 0 === r ? l.willUpdate() : this.safeToRemove(), e.isPresent !== i && (i ? l.promote() : l.relegate() || Xd.postRender((function() {
              var e; (null === (e = l.getStack()) || void 0 === e ? void 0 : e.members.length) || t.safeToRemove()
            }))), null) : null
          }
        },
        {
          key: "componentDidUpdate",
          value: function() {
            var e = this.props.visualElement.projection;
            e && (e.root.didUpdate(), !e.currentAnimation && e.isLead() && this.safeToRemove())
          }
        },
        {
          key: "componentWillUnmount",
          value: function() {
            var e = this.props,
            t = e.visualElement,
            n = e.layoutGroup,
            r = e.switchLayoutGroup,
            a = t.projection;
            a && (a.scheduleCheckAfterUnmount(), (null === n || void 0 === n ? void 0 : n.group) && n.group.remove(a), (null === r || void 0 === r ? void 0 : r.deregister) && r.deregister(a))
          }
        },
        {
          key: "safeToRemove",
          value: function() {
            var e = this.props.safeToRemove;
            null === e || void 0 === e || e()
          }
        },
        {
          key: "render",
          value: function() {
            return null
          }
        }]),
        n
      } (e.Component);
      var my = {
        borderRadius: c(c({},
        fy), {},
        {
          applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
        }),
        borderTopLeftRadius: fy,
        borderTopRightRadius: fy,
        borderBottomLeftRadius: fy,
        borderBottomRightRadius: fy,
        boxShadow: gy
      },
      hy = {
        measureLayout: function(t) {
          var n = Ye(gf(), 2),
          r = n[0],
          a = n[1],
          o = (0, e.useContext)(of);
          return e.createElement(vy, c(c({},
          t), {},
          {
            layoutGroup: o,
            switchLayoutGroup: (0, e.useContext)(Mf),
            isPresent: r,
            safeToRemove: a
          }))
        }
      };
      function yy(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        r = Hf(e) ? e: hm(e);
        return dm("", r, t, n),
        {
          stop: function() {
            return r.stop()
          },
          isAnimating: function() {
            return r.isAnimating()
          }
        }
      }
      var by = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
      xy = by.length,
      wy = function(e) {
        return "string" === typeof e ? parseFloat(e) : e
      },
      ky = function(e) {
        return "number" === typeof e || ap.test(e)
      };
      function _y(e, t, n, r, a, o) {
        var i, l, s, c;
        a ? (e.opacity = Ev(0, null !== (i = n.opacity) && void 0 !== i ? i: 1, Ey(r)), e.opacityExit = Ev(null !== (l = t.opacity) && void 0 !== l ? l: 1, 0, Cy(r))) : o && (e.opacity = Ev(null !== (s = t.opacity) && void 0 !== s ? s: 1, null !== (c = n.opacity) && void 0 !== c ? c: 1, r));
        for (var u = 0; u < xy; u++) {
          var d = "border".concat(by[u], "Radius"),
          f = Sy(t, d),
          p = Sy(n, d);
          if (void 0 !== f || void 0 !== p) f || (f = 0),
          p || (p = 0),
          0 === f || 0 === p || ky(f) === ky(p) ? (e[d] = Math.max(Ev(wy(f), wy(p), r), 0), (rp.test(p) || rp.test(f)) && (e[d] += "%")) : e[d] = p
        } (t.rotate || n.rotate) && (e.rotate = Ev(t.rotate || 0, n.rotate || 0, r))
      }
      function Sy(e, t) {
        var n;
        return null !== (n = e[t]) && void 0 !== n ? n: e.borderRadius
      }
      var Ey = Ay(0, .5, Dg),
      Cy = Ay(.5, .95, zg);
      function Ay(e, t, n) {
        return function(r) {
          return r < e ? 0 : r > t ? 1 : n(Bv(e, t, r))
        }
      }
      function Py(e, t) {
        e.min = t.min,
        e.max = t.max
      }
      function Ty(e, t) {
        Py(e.x, t.x),
        Py(e.y, t.y)
      }
      function zy(e, t, n, r, a) {
        return e = hh(e -= t, 1 / n, r),
        void 0 !== a && (e = hh(e, 1 / a, r)),
        e
      }
      function jy(e, t, n, r, a) {
        var o = Ye(n, 3),
        i = o[0],
        l = o[1],
        s = o[2]; !
        function(e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : .5,
          a = arguments.length > 4 ? arguments[4] : void 0,
          o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : e,
          i = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : e;
          if (rp.test(t)) {
            t = parseFloat(t),
            t = Ev(i.min, i.max, t / 100) - i.min
          }
          if ("number" === typeof t) {
            var l = Ev(o.min, o.max, r);
            e === o && (l -= t),
            e.min = zy(e.min, t, n, l, a),
            e.max = zy(e.max, t, n, l, a)
          }
        } (e, t[i], t[l], t[s], t.scale, r, a)
      }
      var Ry = ["x", "scaleX", "originX"],
      My = ["y", "scaleY", "originY"];
      function Ny(e, t, n, r) {
        jy(e.x, t, Ry, null === n || void 0 === n ? void 0 : n.x, null === r || void 0 === r ? void 0 : r.x),
        jy(e.y, t, My, null === n || void 0 === n ? void 0 : n.y, null === r || void 0 === r ? void 0 : r.y)
      }
      function Oy(e) {
        return 0 === e.translate && 1 === e.scale
      }
      function By(e) {
        return Oy(e.x) && Oy(e.y)
      }
      function Ly(e, t) {
        return e.x.min === t.x.min && e.x.max === t.x.max && e.y.min === t.y.min && e.y.max === t.y.max
      }
      function Fy(e) {
        return Zm(e.x) / Zm(e.y)
      }
      var Dy = function() {
        function e() {
          Qa(this, e),
          this.members = []
        }
        return Ka(e, [{
          key: "add",
          value: function(e) {
            pm(this.members, e),
            e.scheduleRender()
          }
        },
        {
          key: "remove",
          value: function(e) {
            if (gm(this.members, e), e === this.prevLead && (this.prevLead = void 0), e === this.lead) {
              var t = this.members[this.members.length - 1];
              t && this.promote(t)
            }
          }
        },
        {
          key: "relegate",
          value: function(e) {
            var t, n = this.members.findIndex((function(t) {
              return e === t
            }));
            if (0 === n) return ! 1;
            for (var r = n; r >= 0; r--) {
              var a = this.members[r];
              if (!1 !== a.isPresent) {
                t = a;
                break
              }
            }
            return !! t && (this.promote(t), !0)
          }
        },
        {
          key: "promote",
          value: function(e, t) {
            var n, r = this.lead;
            e !== r && (this.prevLead = r, this.lead = e, e.show(), r && (r.instance && r.scheduleRender(), e.scheduleRender(), e.resumeFrom = r, t && (e.resumeFrom.preserveOpacity = !0), r.snapshot && (e.snapshot = r.snapshot, e.snapshot.latestValues = r.animationValues || r.latestValues), (null === (n = e.root) || void 0 === n ? void 0 : n.isUpdating) && (e.isLayoutDirty = !0), !1 === e.options.crossfade && r.hide()))
          }
        },
        {
          key: "exitAnimationComplete",
          value: function() {
            this.members.forEach((function(e) {
              var t, n, r, a, o;
              null === (n = (t = e.options).onExitComplete) || void 0 === n || n.call(t),
              null === (o = null === (r = e.resumingFrom) || void 0 === r ? void 0 : (a = r.options).onExitComplete) || void 0 === o || o.call(a)
            }))
          }
        },
        {
          key: "scheduleRender",
          value: function() {
            this.members.forEach((function(e) {
              e.instance && e.scheduleRender(!1)
            }))
          }
        },
        {
          key: "removeLeadSnapshot",
          value: function() {
            this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
          }
        }]),
        e
      } ();
      function Iy(e, t, n) {
        var r = "",
        a = e.x.translate / t.x,
        o = e.y.translate / t.y;
        if ((a || o) && (r = "translate3d(".concat(a, "px, ").concat(o, "px, 0) ")), 1 === t.x && 1 === t.y || (r += "scale(".concat(1 / t.x, ", ").concat(1 / t.y, ") ")), n) {
          var i = n.rotate,
          l = n.rotateX,
          s = n.rotateY;
          i && (r += "rotate(".concat(i, "deg) ")),
          l && (r += "rotateX(".concat(l, "deg) ")),
          s && (r += "rotateY(".concat(s, "deg) "))
        }
        var c = e.x.scale * t.x,
        u = e.y.scale * t.y;
        return 1 === c && 1 === u || (r += "scale(".concat(c, ", ").concat(u, ")")),
        r || "none"
      }
      var Vy = function(e, t) {
        return e.depth - t.depth
      },
      Wy = function() {
        function e() {
          Qa(this, e),
          this.children = [],
          this.isDirty = !1
        }
        return Ka(e, [{
          key: "add",
          value: function(e) {
            pm(this.children, e),
            this.isDirty = !0
          }
        },
        {
          key: "remove",
          value: function(e) {
            gm(this.children, e),
            this.isDirty = !0
          }
        },
        {
          key: "forEach",
          value: function(e) {
            this.isDirty && this.children.sort(Vy),
            this.isDirty = !1,
            this.children.forEach(e)
          }
        }]),
        e
      } (),
      Uy = ["", "X", "Y", "Z"],
      Hy = 0;
      function $y(e) {
        var t = e.attachResizeListener,
        n = e.defaultParent,
        r = e.measureScroll,
        a = e.checkIsScrollRoot,
        o = e.resetTransform;
        return function() {
          function e(t) {
            var r = this,
            a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null === n || void 0 === n ? void 0 : n();
            Qa(this, e),
            this.id = Hy++,
            this.animationId = 0,
            this.children = new Set,
            this.options = {},
            this.isTreeAnimating = !1,
            this.isAnimationBlocked = !1,
            this.isLayoutDirty = !1,
            this.isTransformDirty = !1,
            this.isProjectionDirty = !1,
            this.updateManuallyBlocked = !1,
            this.updateBlockedByResize = !1,
            this.isUpdating = !1,
            this.isSVG = !1,
            this.needsReset = !1,
            this.shouldResetTransform = !1,
            this.treeScale = {
              x: 1,
              y: 1
            },
            this.eventHandlers = new Map,
            this.potentialNodes = new Map,
            this.checkUpdateFailed = function() {
              r.isUpdating && (r.isUpdating = !1, r.clearAllSnapshots())
            },
            this.updateProjection = function() {
              r.nodes.forEach(Yy),
              r.nodes.forEach(Jy),
              r.nodes.forEach(eb)
            },
            this.hasProjected = !1,
            this.isVisible = !0,
            this.animationProgress = 0,
            this.sharedNodes = new Map,
            this.elementId = t,
            this.latestValues = a,
            this.root = o ? o.root || o: this,
            this.path = o ? [].concat(pt(o.path), [o]) : [],
            this.parent = o,
            this.depth = o ? o.depth + 1 : 0,
            t && this.root.registerPotentialNode(t, this);
            for (var i = 0; i < this.path.length; i++) this.path[i].shouldResetTransform = !0;
            this.root === this && (this.nodes = new Wy)
          }
          return Ka(e, [{
            key: "addEventListener",
            value: function(e, t) {
              return this.eventHandlers.has(e) || this.eventHandlers.set(e, new vm),
              this.eventHandlers.get(e).add(t)
            }
          },
          {
            key: "notifyListeners",
            value: function(e) {
              for (var t = this.eventHandlers.get(e), n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) r[a - 1] = arguments[a];
              null === t || void 0 === t || t.notify.apply(t, r)
            }
          },
          {
            key: "hasListeners",
            value: function(e) {
              return this.eventHandlers.has(e)
            }
          },
          {
            key: "registerPotentialNode",
            value: function(e, t) {
              this.potentialNodes.set(e, t)
            }
          },
          {
            key: "mount",
            value: function(e) {
              var n, r = this,
              a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              if (!this.instance) {
                this.isSVG = e instanceof SVGElement && "svg" !== e.tagName,
                this.instance = e;
                var o = this.options,
                i = o.layoutId,
                l = o.layout,
                s = o.visualElement;
                if (s && !s.current && s.mount(e), this.root.nodes.add(this), null === (n = this.parent) || void 0 === n || n.children.add(this), this.elementId && this.root.potentialNodes.delete(this.elementId), a && (l || i) && (this.isLayoutDirty = !0), t) {
                  var u, d = function() {
                    return r.root.updateBlockedByResize = !1
                  };
                  t(e, (function() {
                    r.root.updateBlockedByResize = !0,
                    u && u(),
                    u = _v(d, 250),
                    zf.hasAnimatedSinceResize && (zf.hasAnimatedSinceResize = !1, r.nodes.forEach(Zy))
                  }))
                }
                i && this.root.registerSharedNode(i, this),
                !1 !== this.options.animate && s && (i || l) && this.addEventListener("didUpdate", (function(e) {
                  var t, n, a, o, i, l = e.delta,
                  u = e.hasLayoutChanged,
                  d = e.hasRelativeTargetChanged,
                  f = e.layout;
                  if (r.isTreeAnimationBlocked()) return r.target = void 0,
                  void(r.relativeTarget = void 0);
                  var p = null !== (n = null !== (t = r.options.transition) && void 0 !== t ? t: s.getDefaultTransition()) && void 0 !== n ? n: lb,
                  g = s.getProps(),
                  v = g.onLayoutAnimationStart,
                  m = g.onLayoutAnimationComplete,
                  h = !r.targetLayout || !Ly(r.targetLayout, f) || d,
                  y = !u && d;
                  if ((null === (a = r.resumeFrom) || void 0 === a ? void 0 : a.instance) || y || u && (h || !r.currentAnimation)) {
                    r.resumeFrom && (r.resumingFrom = r.resumeFrom, r.resumingFrom.resumingFrom = void 0),
                    r.setAnimationOrigin(l, y);
                    var b = c(c({},
                    um(p, "layout")), {},
                    {
                      onPlay: v,
                      onComplete: m
                    });
                    s.shouldReduceMotion && (b.delay = 0, b.type = !1),
                    r.startAnimation(b)
                  } else u || 0 !== r.animationProgress || Zy(r),
                  r.isLead() && (null === (i = (o = r.options).onExitComplete) || void 0 === i || i.call(o));
                  r.targetLayout = f
                }))
              }
            }
          },
          {
            key: "unmount",
            value: function() {
              var e, t;
              this.options.layoutId && this.willUpdate(),
              this.root.nodes.remove(this),
              null === (e = this.getStack()) || void 0 === e || e.remove(this),
              null === (t = this.parent) || void 0 === t || t.children.delete(this),
              this.instance = void 0,
              Ud.preRender(this.updateProjection)
            }
          },
          {
            key: "blockUpdate",
            value: function() {
              this.updateManuallyBlocked = !0
            }
          },
          {
            key: "unblockUpdate",
            value: function() {
              this.updateManuallyBlocked = !1
            }
          },
          {
            key: "isUpdateBlocked",
            value: function() {
              return this.updateManuallyBlocked || this.updateBlockedByResize
            }
          },
          {
            key: "isTreeAnimationBlocked",
            value: function() {
              var e;
              return this.isAnimationBlocked || (null === (e = this.parent) || void 0 === e ? void 0 : e.isTreeAnimationBlocked()) || !1
            }
          },
          {
            key: "startUpdate",
            value: function() {
              var e;
              this.isUpdateBlocked() || (this.isUpdating = !0, null === (e = this.nodes) || void 0 === e || e.forEach(tb), this.animationId++)
            }
          },
          {
            key: "willUpdate",
            value: function() {
              var e, t, n, r = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
              if (this.root.isUpdateBlocked()) null === (t = (e = this.options).onExitComplete) || void 0 === t || t.call(e);
              else if (!this.root.isUpdating && this.root.startUpdate(), !this.isLayoutDirty) {
                this.isLayoutDirty = !0;
                for (var a = 0; a < this.path.length; a++) {
                  var o = this.path[a];
                  o.shouldResetTransform = !0,
                  o.updateScroll("snapshot")
                }
                var i = this.options,
                l = i.layoutId,
                s = i.layout;
                if (void 0 !== l || s) {
                  var c = null === (n = this.options.visualElement) || void 0 === n ? void 0 : n.getProps().transformTemplate;
                  this.prevTransformTemplateValue = null === c || void 0 === c ? void 0 : c(this.latestValues, ""),
                  this.updateSnapshot(),
                  r && this.notifyListeners("willUpdate")
                }
              }
            }
          },
          {
            key: "didUpdate",
            value: function() {
              if (this.isUpdateBlocked()) return this.unblockUpdate(),
              this.clearAllSnapshots(),
              void this.nodes.forEach(Ky);
              this.isUpdating && (this.isUpdating = !1, this.potentialNodes.size && (this.potentialNodes.forEach(sb), this.potentialNodes.clear()), this.nodes.forEach(Qy), this.nodes.forEach(qy), this.nodes.forEach(Gy), this.clearAllSnapshots(), Hd.update(), Hd.preRender(), Hd.render())
            }
          },
          {
            key: "clearAllSnapshots",
            value: function() {
              this.nodes.forEach(Xy),
              this.sharedNodes.forEach(nb)
            }
          },
          {
            key: "scheduleUpdateProjection",
            value: function() {
              Xd.preRender(this.updateProjection, !1, !0)
            }
          },
          {
            key: "scheduleCheckAfterUnmount",
            value: function() {
              var e = this;
              Xd.postRender((function() {
                e.isLayoutDirty ? e.root.didUpdate() : e.root.checkUpdateFailed()
              }))
            }
          },
          {
            key: "updateSnapshot",
            value: function() { ! this.snapshot && this.instance && (this.snapshot = this.measure())
            }
          },
          {
            key: "updateLayout",
            value: function() {
              var e;
              if (this.instance && (this.updateScroll(), this.options.alwaysMeasureLayout && this.isLead() || this.isLayoutDirty)) {
                if (this.resumeFrom && !this.resumeFrom.instance) for (var t = 0; t < this.path.length; t++) {
                  this.path[t].updateScroll()
                }
                var n = this.layout;
                this.layout = this.measure(!1),
                this.layoutCorrected = {
                  x: {
                    min: 0,
                    max: 0
                  },
                  y: {
                    min: 0,
                    max: 0
                  }
                },
                this.isLayoutDirty = !1,
                this.projectionDelta = void 0,
                this.notifyListeners("measure", this.layout.layoutBox),
                null === (e = this.options.visualElement) || void 0 === e || e.notify("LayoutMeasure", this.layout.layoutBox, null === n || void 0 === n ? void 0 : n.layoutBox)
              }
            }
          },
          {
            key: "updateScroll",
            value: function() {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "measure",
              t = Boolean(this.options.layoutScroll && this.instance);
              this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === e && (t = !1),
              t && (this.scroll = {
                animationId: this.root.animationId,
                phase: e,
                isRoot: a(this.instance),
                offset: r(this.instance)
              })
            }
          },
          {
            key: "resetTransform",
            value: function() {
              var e;
              if (o) {
                var t = this.isLayoutDirty || this.shouldResetTransform,
                n = this.projectionDelta && !By(this.projectionDelta),
                r = null === (e = this.options.visualElement) || void 0 === e ? void 0 : e.getProps().transformTemplate,
                a = null === r || void 0 === r ? void 0 : r(this.latestValues, ""),
                i = a !== this.prevTransformTemplateValue;
                t && (n || gh(this.latestValues) || i) && (o(this.instance, a), this.shouldResetTransform = !1, this.scheduleRender())
              }
            }
          },
          {
            key: "measure",
            value: function() {
              var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
              t = this.measurePageBox(),
              n = this.removeElementScroll(t);
              return e && (n = this.removeTransform(n)),
              ub(n),
              {
                animationId: this.root.animationId,
                measuredBox: t,
                layoutBox: n,
                latestValues: {},
                source: this.id
              }
            }
          },
          {
            key: "measurePageBox",
            value: function() {
              var e = this.options.visualElement;
              if (!e) return {
                x: {
                  min: 0,
                  max: 0
                },
                y: {
                  min: 0,
                  max: 0
                }
              };
              var t = e.measureViewportBox(),
              n = this.root.scroll;
              return n && (kh(t.x, n.offset.x), kh(t.y, n.offset.y)),
              t
            }
          },
          {
            key: "removeElementScroll",
            value: function(e) {
              var t = {
                x: {
                  min: 0,
                  max: 0
                },
                y: {
                  min: 0,
                  max: 0
                }
              };
              Ty(t, e);
              for (var n = 0; n < this.path.length; n++) {
                var r = this.path[n],
                a = r.scroll,
                o = r.options;
                if (r !== this.root && a && o.layoutScroll) {
                  if (a.isRoot) {
                    Ty(t, e);
                    var i = this.root.scroll;
                    i && (kh(t.x, -i.offset.x), kh(t.y, -i.offset.y))
                  }
                  kh(t.x, a.offset.x),
                  kh(t.y, a.offset.y)
                }
              }
              return t
            }
          },
          {
            key: "applyTransform",
            value: function(e) {
              var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              n = {
                x: {
                  min: 0,
                  max: 0
                },
                y: {
                  min: 0,
                  max: 0
                }
              };
              Ty(n, e);
              for (var r = 0; r < this.path.length; r++) {
                var a = this.path[r]; ! t && a.options.layoutScroll && a.scroll && a !== a.root && Ch(n, {
                  x: -a.scroll.offset.x,
                  y: -a.scroll.offset.y
                }),
                gh(a.latestValues) && Ch(n, a.latestValues)
              }
              return gh(this.latestValues) && Ch(n, this.latestValues),
              n
            }
          },
          {
            key: "removeTransform",
            value: function(e) {
              var t, n = {
                x: {
                  min: 0,
                  max: 0
                },
                y: {
                  min: 0,
                  max: 0
                }
              };
              Ty(n, e);
              for (var r = 0; r < this.path.length; r++) {
                var a = this.path[r];
                if (a.instance && gh(a.latestValues)) {
                  ph(a.latestValues) && a.updateSnapshot();
                  var o = {
                    x: {
                      min: 0,
                      max: 0
                    },
                    y: {
                      min: 0,
                      max: 0
                    }
                  };
                  Ty(o, a.measurePageBox()),
                  Ny(n, a.latestValues, null === (t = a.snapshot) || void 0 === t ? void 0 : t.layoutBox, o)
                }
              }
              return gh(this.latestValues) && Ny(n, this.latestValues),
              n
            }
          },
          {
            key: "setTargetDelta",
            value: function(e) {
              this.targetDelta = e,
              this.isProjectionDirty = !0,
              this.root.scheduleUpdateProjection()
            }
          },
          {
            key: "setOptions",
            value: function(e) {
              this.options = c(c(c({},
              this.options), e), {},
              {
                crossfade: void 0 === e.crossfade || e.crossfade
              })
            }
          },
          {
            key: "clearMeasurements",
            value: function() {
              this.scroll = void 0,
              this.layout = void 0,
              this.snapshot = void 0,
              this.prevTransformTemplateValue = void 0,
              this.targetDelta = void 0,
              this.target = void 0,
              this.isLayoutDirty = !1
            }
          },
          {
            key: "resolveTargetDelta",
            value: function() {
              var e, t = this.getLead();
              if (this.isProjectionDirty || (this.isProjectionDirty = t.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = t.isTransformDirty), this.isProjectionDirty || this.attemptToResolveRelativeTarget) {
                var n = this.options,
                r = n.layout,
                a = n.layoutId;
                if (this.layout && (r || a)) {
                  if (!this.targetDelta && !this.relativeTarget) {
                    var o = this.getClosestProjectingParent();
                    o && o.layout ? (this.relativeParent = o, this.relativeTarget = {
                      x: {
                        min: 0,
                        max: 0
                      },
                      y: {
                        min: 0,
                        max: 0
                      }
                    },
                    this.relativeTargetOrigin = {
                      x: {
                        min: 0,
                        max: 0
                      },
                      y: {
                        min: 0,
                        max: 0
                      }
                    },
                    ah(this.relativeTargetOrigin, this.layout.layoutBox, o.layout.layoutBox), Ty(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                  }
                  var i, l, s;
                  if (this.relativeTarget || this.targetDelta) if (this.target || (this.target = {
                    x: {
                      min: 0,
                      max: 0
                    },
                    y: {
                      min: 0,
                      max: 0
                    }
                  },
                  this.targetWithTransforms = {
                    x: {
                      min: 0,
                      max: 0
                    },
                    y: {
                      min: 0,
                      max: 0
                    }
                  }), this.relativeTarget && this.relativeTargetOrigin && (null === (e = this.relativeParent) || void 0 === e ? void 0 : e.target) ? (i = this.target, l = this.relativeTarget, s = this.relativeParent.target, nh(i.x, l.x, s.x), nh(i.y, l.y, s.y)) : this.targetDelta ? (Boolean(this.resumingFrom) ? this.target = this.applyTransform(this.layout.layoutBox) : Ty(this.target, this.layout.layoutBox), xh(this.target, this.targetDelta)) : Ty(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
                    this.attemptToResolveRelativeTarget = !1;
                    var c = this.getClosestProjectingParent();
                    c && Boolean(c.resumingFrom) === Boolean(this.resumingFrom) && !c.options.layoutScroll && c.target ? (this.relativeParent = c, this.relativeTarget = {
                      x: {
                        min: 0,
                        max: 0
                      },
                      y: {
                        min: 0,
                        max: 0
                      }
                    },
                    this.relativeTargetOrigin = {
                      x: {
                        min: 0,
                        max: 0
                      },
                      y: {
                        min: 0,
                        max: 0
                      }
                    },
                    ah(this.relativeTargetOrigin, this.target, c.target), Ty(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                  }
                }
              }
            }
          },
          {
            key: "getClosestProjectingParent",
            value: function() {
              if (this.parent && !ph(this.parent.latestValues) && !vh(this.parent.latestValues)) return (this.parent.relativeTarget || this.parent.targetDelta) && this.parent.layout ? this.parent: this.parent.getClosestProjectingParent()
            }
          },
          {
            key: "calcProjection",
            value: function() {
              var e, t = this.isProjectionDirty,
              n = this.isTransformDirty;
              this.isProjectionDirty = this.isTransformDirty = !1;
              var r = this.getLead(),
              a = Boolean(this.resumingFrom) || this !== r,
              o = !0;
              if (t && (o = !1), a && n && (o = !1), !o) {
                var i = this.options,
                l = i.layout,
                s = i.layoutId;
                if (this.isTreeAnimating = Boolean((null === (e = this.parent) || void 0 === e ? void 0 : e.isTreeAnimating) || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), this.layout && (l || s)) {
                  Ty(this.layoutCorrected, this.layout.layoutBox),
                  function(e, t, n) {
                    var r, a, o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                    i = n.length;
                    if (i) {
                      var l, s;
                      t.x = t.y = 1;
                      for (var c = 0; c < i; c++) s = (l = n[c]).projectionDelta,
                      "contents" !== (null === (a = null === (r = l.instance) || void 0 === r ? void 0 : r.style) || void 0 === a ? void 0 : a.display) && (o && l.options.layoutScroll && l.scroll && l !== l.root && Ch(e, {
                        x: -l.scroll.offset.x,
                        y: -l.scroll.offset.y
                      }), s && (t.x *= s.x.scale, t.y *= s.y.scale, xh(e, s)), o && gh(l.latestValues) && Ch(e, l.latestValues));
                      t.x = wh(t.x),
                      t.y = wh(t.y)
                    }
                  } (this.layoutCorrected, this.treeScale, this.path, a);
                  var c = r.target;
                  if (c) {
                    this.projectionDelta || (this.projectionDelta = {
                      x: {
                        translate: 0,
                        scale: 1,
                        origin: 0,
                        originPoint: 0
                      },
                      y: {
                        translate: 0,
                        scale: 1,
                        origin: 0,
                        originPoint: 0
                      }
                    },
                    this.projectionDeltaWithTransform = {
                      x: {
                        translate: 0,
                        scale: 1,
                        origin: 0,
                        originPoint: 0
                      },
                      y: {
                        translate: 0,
                        scale: 1,
                        origin: 0,
                        originPoint: 0
                      }
                    });
                    var u = this.treeScale.x,
                    d = this.treeScale.y,
                    f = this.projectionTransform;
                    th(this.projectionDelta, this.layoutCorrected, c, this.latestValues),
                    this.projectionTransform = Iy(this.projectionDelta, this.treeScale),
                    this.projectionTransform === f && this.treeScale.x === u && this.treeScale.y === d || (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", c))
                  }
                }
              }
            }
          },
          {
            key: "hide",
            value: function() {
              this.isVisible = !1
            }
          },
          {
            key: "show",
            value: function() {
              this.isVisible = !0
            }
          },
          {
            key: "scheduleRender",
            value: function() {
              var e, t, n, r = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
              null === (t = (e = this.options).scheduleRender) || void 0 === t || t.call(e),
              r && (null === (n = this.getStack()) || void 0 === n || n.scheduleRender()),
              this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
            }
          },
          {
            key: "setAnimationOrigin",
            value: function(e) {
              var t, n, r = this,
              a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              o = this.snapshot,
              i = (null === o || void 0 === o ? void 0 : o.latestValues) || {},
              l = c({},
              this.latestValues),
              s = {
                x: {
                  translate: 0,
                  scale: 1,
                  origin: 0,
                  originPoint: 0
                },
                y: {
                  translate: 0,
                  scale: 1,
                  origin: 0,
                  originPoint: 0
                }
              };
              this.relativeTarget = this.relativeTargetOrigin = void 0,
              this.attemptToResolveRelativeTarget = !a;
              var u = {
                x: {
                  min: 0,
                  max: 0
                },
                y: {
                  min: 0,
                  max: 0
                }
              },
              d = (null === o || void 0 === o ? void 0 : o.source) !== (null === (t = this.layout) || void 0 === t ? void 0 : t.source),
              f = ((null === (n = this.getStack()) || void 0 === n ? void 0 : n.members.length) || 0) <= 1,
              p = Boolean(d && !f && !0 === this.options.crossfade && !this.path.some(ib));
              this.animationProgress = 0,
              this.mixTargetDelta = function(t) {
                var n, a = t / 1e3;
                rb(s.x, e.x, a),
                rb(s.y, e.y, a),
                r.setTargetDelta(s),
                r.relativeTarget && r.relativeTargetOrigin && r.layout && (null === (n = r.relativeParent) || void 0 === n ? void 0 : n.layout) && (ah(u, r.layout.layoutBox, r.relativeParent.layout.layoutBox), ob(r.relativeTarget, r.relativeTargetOrigin, u, a)),
                d && (r.animationValues = l, _y(l, i, r.latestValues, a, p, f)),
                r.root.scheduleUpdateProjection(),
                r.scheduleRender(),
                r.animationProgress = a
              },
              this.mixTargetDelta(0)
            }
          },
          {
            key: "startAnimation",
            value: function(e) {
              var t, n, r = this;
              this.notifyListeners("animationStart"),
              null === (t = this.currentAnimation) || void 0 === t || t.stop(),
              this.resumingFrom && (null === (n = this.resumingFrom.currentAnimation) || void 0 === n || n.stop()),
              this.pendingAnimation && (Ud.update(this.pendingAnimation), this.pendingAnimation = void 0),
              this.pendingAnimation = Xd.update((function() {
                zf.hasAnimatedSinceResize = !0,
                r.currentAnimation = yy(0, 1e3, c(c({},
                e), {},
                {
                  onUpdate: function(t) {
                    var n;
                    r.mixTargetDelta(t),
                    null === (n = e.onUpdate) || void 0 === n || n.call(e, t)
                  },
                  onComplete: function() {
                    var t;
                    null === (t = e.onComplete) || void 0 === t || t.call(e),
                    r.completeAnimation()
                  }
                })),
                r.resumingFrom && (r.resumingFrom.currentAnimation = r.currentAnimation),
                r.pendingAnimation = void 0
              }))
            }
          },
          {
            key: "completeAnimation",
            value: function() {
              var e;
              this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0),
              null === (e = this.getStack()) || void 0 === e || e.exitAnimationComplete(),
              this.resumingFrom = this.currentAnimation = this.animationValues = void 0,
              this.notifyListeners("animationComplete")
            }
          },
          {
            key: "finishAnimation",
            value: function() {
              var e;
              this.currentAnimation && (null === (e = this.mixTargetDelta) || void 0 === e || e.call(this, 1e3), this.currentAnimation.stop()),
              this.completeAnimation()
            }
          },
          {
            key: "applyTransformsToTarget",
            value: function() {
              var e = this.getLead(),
              t = e.targetWithTransforms,
              n = e.target,
              r = e.layout,
              a = e.latestValues;
              if (t && n && r) {
                if (this !== e && this.layout && r && db(this.options.animationType, this.layout.layoutBox, r.layoutBox)) {
                  n = this.target || {
                    x: {
                      min: 0,
                      max: 0
                    },
                    y: {
                      min: 0,
                      max: 0
                    }
                  };
                  var o = Zm(this.layout.layoutBox.x);
                  n.x.min = e.target.x.min,
                  n.x.max = n.x.min + o;
                  var i = Zm(this.layout.layoutBox.y);
                  n.y.min = e.target.y.min,
                  n.y.max = n.y.min + i
                }
                Ty(t, n),
                Ch(t, a),
                th(this.projectionDeltaWithTransform, this.layoutCorrected, t, a)
              }
            }
          },
          {
            key: "registerSharedNode",
            value: function(e, t) {
              var n, r, a;
              this.sharedNodes.has(e) || this.sharedNodes.set(e, new Dy),
              this.sharedNodes.get(e).add(t),
              t.promote({
                transition: null === (n = t.options.initialPromotionConfig) || void 0 === n ? void 0 : n.transition,
                preserveFollowOpacity: null === (a = null === (r = t.options.initialPromotionConfig) || void 0 === r ? void 0 : r.shouldPreserveFollowOpacity) || void 0 === a ? void 0 : a.call(r, t)
              })
            }
          },
          {
            key: "isLead",
            value: function() {
              var e = this.getStack();
              return ! e || e.lead === this
            }
          },
          {
            key: "getLead",
            value: function() {
              var e;
              return this.options.layoutId && (null === (e = this.getStack()) || void 0 === e ? void 0 : e.lead) || this
            }
          },
          {
            key: "getPrevLead",
            value: function() {
              var e;
              return this.options.layoutId ? null === (e = this.getStack()) || void 0 === e ? void 0 : e.prevLead: void 0
            }
          },
          {
            key: "getStack",
            value: function() {
              var e = this.options.layoutId;
              if (e) return this.root.sharedNodes.get(e)
            }
          },
          {
            key: "promote",
            value: function() {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              t = e.needsReset,
              n = e.transition,
              r = e.preserveFollowOpacity,
              a = this.getStack();
              a && a.promote(this, r),
              t && (this.projectionDelta = void 0, this.needsReset = !0),
              n && this.setOptions({
                transition: n
              })
            }
          },
          {
            key: "relegate",
            value: function() {
              var e = this.getStack();
              return !! e && e.relegate(this)
            }
          },
          {
            key: "resetRotation",
            value: function() {
              var e = this.options.visualElement;
              if (e) {
                var t = !1,
                n = e.latestValues;
                if ((n.rotate || n.rotateX || n.rotateY || n.rotateZ) && (t = !0), t) {
                  for (var r = {},
                  a = 0; a < Uy.length; a++) {
                    var o = "rotate" + Uy[a];
                    n[o] && (r[o] = n[o], e.setStaticValue(o, 0))
                  }
                  for (var i in null === e || void 0 === e || e.render(), r) e.setStaticValue(i, r[i]);
                  e.scheduleRender()
                }
              }
            }
          },
          {
            key: "getProjectionStyles",
            value: function() {
              var e, t, n, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              a = {};
              if (!this.instance || this.isSVG) return a;
              if (!this.isVisible) return {
                visibility: "hidden"
              };
              a.visibility = "";
              var o = null === (e = this.options.visualElement) || void 0 === e ? void 0 : e.getProps().transformTemplate;
              if (this.needsReset) return this.needsReset = !1,
              a.opacity = "",
              a.pointerEvents = Ip(r.pointerEvents) || "",
              a.transform = o ? o(this.latestValues, "") : "none",
              a;
              var i = this.getLead();
              if (!this.projectionDelta || !this.layout || !i.target) {
                var l = {};
                return this.options.layoutId && (l.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity: 1, l.pointerEvents = Ip(r.pointerEvents) || ""),
                this.hasProjected && !gh(this.latestValues) && (l.transform = o ? o({},
                "") : "none", this.hasProjected = !1),
                l
              }
              var s = i.animationValues || i.latestValues;
              this.applyTransformsToTarget(),
              a.transform = Iy(this.projectionDeltaWithTransform, this.treeScale, s),
              o && (a.transform = o(s, a.transform));
              var c = this.projectionDelta,
              u = c.x,
              d = c.y;
              for (var f in a.transformOrigin = "".concat(100 * u.origin, "% ").concat(100 * d.origin, "% 0"), i.animationValues ? a.opacity = i === this ? null !== (n = null !== (t = s.opacity) && void 0 !== t ? t: this.latestValues.opacity) && void 0 !== n ? n: 1 : this.preserveOpacity ? this.latestValues.opacity: s.opacityExit: a.opacity = i === this ? void 0 !== s.opacity ? s.opacity: "": void 0 !== s.opacityExit ? s.opacityExit: 0, If) if (void 0 !== s[f]) {
                var p = If[f],
                g = p.correct,
                v = p.applyTo,
                m = g(s[f], i);
                if (v) for (var h = v.length,
                y = 0; y < h; y++) a[v[y]] = m;
                else a[f] = m
              }
              return this.options.layoutId && (a.pointerEvents = i === this ? Ip(r.pointerEvents) || "": "none"),
              a
            }
          },
          {
            key: "clearSnapshot",
            value: function() {
              this.resumeFrom = this.snapshot = void 0
            }
          },
          {
            key: "resetTree",
            value: function() {
              this.root.nodes.forEach((function(e) {
                var t;
                return null === (t = e.currentAnimation) || void 0 === t ? void 0 : t.stop()
              })),
              this.root.nodes.forEach(Ky),
              this.root.sharedNodes.clear()
            }
          }]),
          e
        } ()
      }
      function qy(e) {
        e.updateLayout()
      }
      function Gy(e) {
        var t, n, r, a = (null === (t = e.resumeFrom) || void 0 === t ? void 0 : t.snapshot) || e.snapshot;
        if (e.isLead() && e.layout && a && e.hasListeners("didUpdate")) {
          var o = e.layout,
          i = o.layoutBox,
          l = o.measuredBox,
          s = e.options.animationType,
          c = a.source !== e.layout.source;
          "size" === s ? uh((function(e) {
            var t = c ? a.measuredBox[e] : a.layoutBox[e],
            n = Zm(t);
            t.min = i[e].min,
            t.max = t.min + n
          })) : db(s, a.layoutBox, i) && uh((function(e) {
            var t = c ? a.measuredBox[e] : a.layoutBox[e],
            n = Zm(i[e]);
            t.max = t.min + n
          }));
          var u = {
            x: {
              translate: 0,
              scale: 1,
              origin: 0,
              originPoint: 0
            },
            y: {
              translate: 0,
              scale: 1,
              origin: 0,
              originPoint: 0
            }
          };
          th(u, i, a.layoutBox);
          var d = {
            x: {
              translate: 0,
              scale: 1,
              origin: 0,
              originPoint: 0
            },
            y: {
              translate: 0,
              scale: 1,
              origin: 0,
              originPoint: 0
            }
          };
          c ? th(d, e.applyTransform(l, !0), a.measuredBox) : th(d, i, a.layoutBox);
          var f = !By(u),
          p = !1;
          if (!e.resumeFrom) {
            var g = e.getClosestProjectingParent();
            if (g && !g.resumeFrom) {
              var v = g.snapshot,
              m = g.layout;
              if (v && m) {
                var h = {
                  x: {
                    min: 0,
                    max: 0
                  },
                  y: {
                    min: 0,
                    max: 0
                  }
                };
                ah(h, a.layoutBox, v.layoutBox);
                var y = {
                  x: {
                    min: 0,
                    max: 0
                  },
                  y: {
                    min: 0,
                    max: 0
                  }
                };
                ah(y, i, m.layoutBox),
                Ly(h, y) || (p = !0)
              }
            }
          }
          e.notifyListeners("didUpdate", {
            layout: i,
            snapshot: a,
            delta: d,
            layoutDelta: u,
            hasLayoutChanged: f,
            hasRelativeTargetChanged: p
          })
        } else e.isLead() && (null === (r = (n = e.options).onExitComplete) || void 0 === r || r.call(n));
        e.options.transition = void 0
      }
      function Yy(e) {
        e.isProjectionDirty || (e.isProjectionDirty = Boolean(e.parent && e.parent.isProjectionDirty)),
        e.isTransformDirty || (e.isTransformDirty = Boolean(e.parent && e.parent.isTransformDirty))
      }
      function Xy(e) {
        e.clearSnapshot()
      }
      function Ky(e) {
        e.clearMeasurements()
      }
      function Qy(e) {
        var t = e.options.visualElement; (null === t || void 0 === t ? void 0 : t.getProps().onBeforeLayoutMeasure) && t.notify("BeforeLayoutMeasure"),
        e.resetTransform()
      }
      function Zy(e) {
        e.finishAnimation(),
        e.targetDelta = e.relativeTarget = e.target = void 0
      }
      function Jy(e) {
        e.resolveTargetDelta()
      }
      function eb(e) {
        e.calcProjection()
      }
      function tb(e) {
        e.resetRotation()
      }
      function nb(e) {
        e.removeLeadSnapshot()
      }
      function rb(e, t, n) {
        e.translate = Ev(t.translate, 0, n),
        e.scale = Ev(t.scale, 1, n),
        e.origin = t.origin,
        e.originPoint = t.originPoint
      }
      function ab(e, t, n, r) {
        e.min = Ev(t.min, n.min, r),
        e.max = Ev(t.max, n.max, r)
      }
      function ob(e, t, n, r) {
        ab(e.x, t.x, n.x, r),
        ab(e.y, t.y, n.y, r)
      }
      function ib(e) {
        return e.animationValues && void 0 !== e.animationValues.opacityExit
      }
      var lb = {
        duration: .45,
        ease: [.4, 0, .1, 1]
      };
      function sb(e, t) {
        for (var n = e.root,
        r = e.path.length - 1; r >= 0; r--) if (Boolean(e.path[r].instance)) {
          n = e.path[r];
          break
        }
        var a = (n && n !== e.root ? n.instance: document).querySelector('[data-projection-id="'.concat(t, '"]'));
        a && e.mount(a, !0)
      }
      function cb(e) {
        e.min = Math.round(e.min),
        e.max = Math.round(e.max)
      }
      function ub(e) {
        cb(e.x),
        cb(e.y)
      }
      function db(e, t, n) {
        return "position" === e || "preserve-aspect" === e && !Jm(Fy(t), Fy(n), .2)
      }
      var fb = $y({
        attachResizeListener: function(e, t) {
          return Gp(e, "resize", t)
        },
        measureScroll: function() {
          return {
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop
          }
        },
        checkIsScrollRoot: function() {
          return ! 0
        }
      }),
      pb = {
        current: void 0
      },
      gb = $y({
        measureScroll: function(e) {
          return {
            x: e.scrollLeft,
            y: e.scrollTop
          }
        },
        defaultParent: function() {
          if (!pb.current) {
            var e = new fb(0, {});
            e.mount(window),
            e.setOptions({
              layoutScroll: !0
            }),
            pb.current = e
          }
          return pb.current
        },
        resetTransform: function(e, t) {
          e.style.transform = void 0 !== t ? t: "none"
        },
        checkIsScrollRoot: function(e) {
          return Boolean("fixed" === window.getComputedStyle(e).position)
        }
      }),
      vb = c(c(c(c({},
      Wm), Ag), Rh), hy),
      mb = Lf((function(e, t) {
        return function(e, t, n, r, a) {
          var o = t.forwardMotionProps,
          i = void 0 !== o && o;
          return c(c({},
          Df(e) ? $p: qp), {},
          {
            preloadedFeatures: n,
            useRender: zp(i),
            createVisualElement: r,
            projectionNodeConstructor: a,
            Component: e
          })
        } (e, t, vb, uy, gb)
      }));
      function hb(e) {
        for (var t = arguments.length,
        n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
        return yb(e) ? e.apply(void 0, n) : e
      }
      var yb = function(e) {
        return "function" === typeof e
      };
      var bb = function(e, t) {
        return e.find((function(e) {
          return e.id === t
        }))
      };
      function xb(e, t) {
        var n = wb(e, t);
        return {
          position: n,
          index: n ? e[n].findIndex((function(e) {
            return e.id === t
          })) : -1
        }
      }
      function wb(e, t) {
        for (var n = 0,
        r = Object.entries(e); n < r.length; n++) {
          var a = Ye(r[n], 2),
          o = a[0],
          i = a[1];
          if (bb(i, t)) return o
        }
      }
      function kb(e) {
        return {
          position: "fixed",
          zIndex: 5500,
          pointerEvents: "none",
          display: "flex",
          flexDirection: "column",
          margin: "top" === e || "bottom" === e ? "0 auto": void 0,
          top: e.includes("top") ? "env(safe-area-inset-top, 0px)": void 0,
          bottom: e.includes("bottom") ? "env(safe-area-inset-bottom, 0px)": void 0,
          right: e.includes("left") ? void 0 : "env(safe-area-inset-right, 0px)",
          left: e.includes("right") ? void 0 : "env(safe-area-inset-left, 0px)"
        }
      }
      var _b = function(e) {
        var t = e,
        n = new Set,
        r = function(e) {
          t = e(t),
          n.forEach((function(e) {
            return e()
          }))
        };
        return {
          getState: function() {
            return t
          },
          subscribe: function(t) {
            return n.add(t),
            function() {
              r((function() {
                return e
              })),
              n.delete(t)
            }
          },
          removeToast: function(e, t) {
            r((function(n) {
              return c(c({},
              n), {},
              l({},
              t, n[t].filter((function(t) {
                return t.id != e
              }))))
            }))
          },
          notify: function(e, t) {
            var n = function(e) {
              var t, n, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              Sb += 1;
              var a = null !== (t = r.id) && void 0 !== t ? t: Sb,
              o = null !== (n = r.position) && void 0 !== n ? n: "bottom";
              return {
                id: a,
                message: e,
                position: o,
                duration: r.duration,
                onCloseComplete: r.onCloseComplete,
                onRequestRemove: function() {
                  return _b.removeToast(String(a), o)
                },
                status: r.status,
                requestClose: !1,
                containerStyle: r.containerStyle
              }
            } (e, t),
            a = n.position,
            o = n.id;
            return r((function(e) {
              var t, r, o = a.includes("top") ? [n].concat(pt(null !== (t = e[a]) && void 0 !== t ? t: [])) : [].concat(pt(null !== (r = e[a]) && void 0 !== r ? r: []), [n]);
              return c(c({},
              e), {},
              l({},
              a, o))
            })),
            o
          },
          update: function(e, t) {
            e && r((function(n) {
              var r = c({},
              n),
              a = xb(r, e),
              o = a.position,
              i = a.index;
              return o && -1 !== i && (r[o][i] = c(c(c({},
              r[o][i]), t), {},
              {
                message: Cb(t)
              })),
              r
            }))
          },
          closeAll: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = e.positions;
            r((function(e) {
              return (null !== t && void 0 !== t ? t: ["bottom", "bottom-right", "bottom-left", "top", "top-left", "top-right"]).reduce((function(t, n) {
                return t[n] = e[n].map((function(e) {
                  return c(c({},
                  e), {},
                  {
                    requestClose: !0
                  })
                })),
                t
              }), c({},
              e))
            }))
          },
          close: function(e) {
            r((function(t) {
              var n = wb(t, e);
              return n ? c(c({},
              t), {},
              l({},
              n, t[n].map((function(t) {
                return t.id == e ? c(c({},
                t), {},
                {
                  requestClose: !0
                }) : t
              })))) : t
            }))
          },
          isActive: function(e) {
            return Boolean(xb(_b.getState(), e).position)
          }
        }
      } ({
        top: [],
        "top-left": [],
        "top-right": [],
        "bottom-left": [],
        bottom: [],
        "bottom-right": []
      });
      var Sb = 0;
      var Eb = function(t) {
        var n = t.status,
        r = t.variant,
        a = void 0 === r ? "solid": r,
        o = t.id,
        i = t.title,
        l = t.isClosable,
        s = t.onClose,
        c = t.description,
        u = t.icon,
        d = o ? {
          root: "toast-".concat(o),
          title: "toast-".concat(o, "-title"),
          description: "toast-".concat(o, "-description")
        }: void 0;
        return e.createElement(Cd, {
          addRole: !1,
          status: n,
          variant: a,
          id: null == d ? void 0 : d.root,
          alignItems: "start",
          borderRadius: "md",
          boxShadow: "lg",
          paddingEnd: 8,
          textAlign: "start",
          width: "auto"
        },
        e.createElement(Pd, null, u), e.createElement(va.div, {
          flex: "1",
          maxWidth: "100%"
        },
        i && e.createElement(Td, {
          id: null == d ? void 0 : d.title
        },
        i), c && e.createElement(Ad, {
          id: null == d ? void 0 : d.description,
          display: "block"
        },
        c)), l && e.createElement(Rd, {
          size: "sm",
          onClick: s,
          position: "absolute",
          insetEnd: 1,
          top: 1
        }))
      };
      function Cb() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        n = t.render,
        r = t.toastComponent,
        a = void 0 === r ? Eb: r,
        o = function(r) {
          return "function" === typeof n ? n(c(c({},
          r), t)) : e.createElement(a, c(c({},
          r), t))
        };
        return o
      }
      var Ab = {
        initial: function(e) {
          var t = e.position,
          n = ["top", "bottom"].includes(t) ? "y": "x",
          r = ["top-right", "bottom-right"].includes(t) ? 1 : -1;
          return "bottom" === t && (r = 1),
          l({
            opacity: 0
          },
          n, 24 * r)
        },
        animate: {
          opacity: 1,
          y: 0,
          x: 0,
          scale: 1,
          transition: {
            duration: .4,
            ease: [.4, 0, .2, 1]
          }
        },
        exit: {
          opacity: 0,
          scale: .85,
          transition: {
            duration: .2,
            ease: [.4, 0, 1, 1]
          }
        }
      },
      Pb = (0, e.memo)((function(t) {
        var n = t.id,
        r = t.message,
        a = t.onCloseComplete,
        o = t.onRequestRemove,
        i = t.requestClose,
        l = void 0 !== i && i,
        s = t.position,
        u = void 0 === s ? "bottom": s,
        d = t.duration,
        f = void 0 === d ? 5e3: d,
        p = t.containerStyle,
        g = t.motionVariants,
        v = void 0 === g ? Ab: g,
        m = t.toastSpacing,
        h = void 0 === m ? "0.5rem": m,
        y = Ye((0, e.useState)(f), 2),
        b = y[0],
        x = y[1],
        w = vf();
        pf((function() {
          w || null == a || a()
        }), [w]),
        pf((function() {
          x(f)
        }), [f]);
        var k = function() {
          w && o()
        }; (0, e.useEffect)((function() {
          w && l && o()
        }), [w, l, o]),
        function(t, n) {
          var r = ff(t); (0, e.useEffect)((function() {
            var e;
            if (null != n) return e = window.setTimeout((function() {
              r()
            }), n),
            function() {
              e && window.clearTimeout(e)
            }
          }), [n, r])
        } (k, b);
        var _ = (0, e.useMemo)((function() {
          return c({
            pointerEvents: "auto",
            maxWidth: 560,
            minWidth: 300,
            margin: h
          },
          p)
        }), [p, h]),
        S = (0, e.useMemo)((function() {
          return function(e) {
            var t = "center";
            return e.includes("right") && (t = "flex-end"),
            e.includes("left") && (t = "flex-start"),
            {
              display: "flex",
              flexDirection: "column",
              alignItems: t
            }
          } (u)
        }), [u]);
        return e.createElement(mb.li, {
          layout: !0,
          className: "chakra-toast",
          variants: v,
          initial: "initial",
          animate: "animate",
          exit: "exit",
          onHoverStart: function() {
            return x(null)
          },
          onHoverEnd: function() {
            return x(f)
          },
          custom: {
            position: u
          },
          style: S
        },
        e.createElement(va.div, {
          role: "status",
          "aria-atomic": "true",
          className: "chakra-toast__inner",
          __css: _
        },
        hb(r, {
          id: n,
          onClose: k
        })))
      }));
      Pb.displayName = "ToastComponent";
      var Tb = function(t) {
        var n = (0, e.useSyncExternalStore)(_b.subscribe, _b.getState, _b.getState),
        r = t.children,
        a = t.motionVariants,
        o = t.component,
        i = void 0 === o ? Pb: o,
        l = t.portalProps,
        s = Object.keys(n).map((function(t) {
          var r = n[t];
          return e.createElement("ul", {
            role: "region",
            "aria-live": "polite",
            key: t,
            id: "chakra-toast-manager-".concat(t),
            style: kb(t)
          },
          e.createElement(df, {
            initial: !1
          },
          r.map((function(t) {
            return e.createElement(i, c({
              key: t.id,
              motionVariants: a
            },
            t))
          }))))
        }));
        return e.createElement(e.Fragment, null, r, e.createElement(dt, c({},
        l), s))
      };
      var zb = ["children", "theme", "toastOptions"],
      jb = function(t) {
        return function(n) {
          var r = n.children,
          a = n.theme,
          o = void 0 === a ? t: a,
          i = n.toastOptions,
          l = u(n, zb);
          return e.createElement(ka, c({
            theme: o
          },
          l), r, e.createElement(Tb, c({},
          i)))
        }
      },
      Rb = jb(ld),
      Mb = (jb(sd), n(417));
      var Nb = function(e) {
        return (0, Mb.jsx)("a", c(c({},
        e), {},
        {
          href: e.to,
          target: "_blank",
          rel: "noopener noreferrer",
          children: eサーバーステータス";function Bb(e){return(0,Mb.jsxs)("svg ",c(c({width:"24 ",height:"24 ",fill:"none ","aria - hidden ":"true "},e),{},{children:[(0,Mb.jsx)("path ",{d:"M15 12a3 3 0 1 1 - 6 0 3 3 0 0 1 6 0Z ",fill:"currentColor ",stroke:"currentColor ",strokeWidth:"2 ",strokeLinecap:"round ",strokeLinejoin:"round "}),(0,Mb.jsx)("path ",{d:"M12 4v1M18 6l - 1 1M20 12h - 1M18 18l - 1 - 1M12 19v1M7 17l - 1 1M5 12H4M7 7 6 6 ",stroke:"currentColor ",strokeWidth:"2 ",strokeLinecap:"round ",strokeLinejoin:"round "})]}))}function Lb(e){return(0,Mb.jsx)("svg ",c(c({width:"24 ",height:"24 ",fill:"none ","aria - hidden ":"true "},e),{},{children:(0,Mb.jsx)("path ",{d:"M18 15.63c - .977.52 - 1.945.481 - 3.13.481A6.981 6.981 0 0 1 7.89 9.13c0 - 1.185 - .04 - 2.153.481 - 3.13C6.166 7.174 5 9.347 5 12.018A6.981 6.981 0 0 0 11.982 19c2.67 0 4.844 - 1.166 6.018 - 3.37ZM16 5c0 2.08 - .96 4 - 3 4 2.04 0 3.92 3 3 0 - 2.08.96 - 3 3 - 3 - 2.04 0 - 3 - 1.92 - 3 - 4Z ",fill:"currentColor ",stroke:"currentColor ",strokeWidth:"2 ",strokeLinecap:"round ",strokeLinejoin:"round "})}))}function Fb(){var e=vt(),t=e.colorMode,n=e.toggleColorMode;return(0,Mb.jsx)("button ",{type:"button ",onClick:function(){var e="light "===t?"#334155 ":"#f8fafc ";"light "===t?(document.documentElement.classList.add("dark "),document.body.style.backgroundColor=e):(document.documentElement.classList.remove("dark "),document.body.style.backgroundColor=e),n()},children:"light "===t?(0,Mb.jsx)(Lb,{}):(0,Mb.jsx)(Bb,{})})}var Db=function(){return(0,e.useEffect)((function(){document.title=Ob}),[]),(0,Mb.jsxs)("div ",{className:"container mx - auto flex max - w - 7xl flex - row items - end justify - between pt - 5 ",children:[(0,Mb.jsx)("h1 ",{className:"logo pl - 2 text - 2xl font - bold ",children:Ob}),(0,Mb.jsx)("div ",{className:"pr - 8 ",children:(0,Mb.jsx)(Fb,{})})]})};function Ib(e){var t=typeof e;return null!=e&&("object "===t||"
          function "===t)&&!Array.isArray(e)}Object.freeze(["base ","sm ","md ","lg ","xl ","2xl "]);function Vb(e,t){return Array.isArray(e)?e.map((function(e){return null===e?null:t(e)})):Ib(e)?Object.keys(e).reduce((function(n,r){return n[r]=t(e[r]),n}),{}):null!=e?t(e):null}function Wb(e){var t=Object.assign({},e);for(var n in t)void 0===t[n]&&delete t[n];return t}function Ub(t){return e.Children.toArray(t).filter((function(t){return(0,e.isValidElement)(t)}))}var Hb=["ratio ","children ","className "],$b=["className "],qb=["size ","centerContent "],Gb=["size "],Yb=["axis "],Xb=["className "],Kb=["className ","centerContent "],Qb=["borderLeftWidth ","borderBottomWidth ","borderTopWidth ","borderRightWidth ","borderWidth ","borderStyle ","borderColor "],Zb=["className ","orientation ","__css "],Jb=["direction ","align ","justify ","wrap ","basis ","grow ","shrink "],ex=["templateAreas ","gap ","rowGap ","columnGap ","column ","row ","autoFlow ","autoRows ","templateRows ","autoColumns ","templateColumns "],tx=["area ","colSpan ","colStart ","colEnd ","rowEnd ","rowSpan ","rowStart "],nx=["className "],rx=["className "],ax=["className ","isExternal "],ox=["isExternal ","target ","rel ","className "],ix=["className "],lx=["children ","styleType ","stylePosition ","spacing "],sx=["as "],cx=["as "],ux=["columns ","spacingX ","spacingY ","spacing ","minChildWidth "],dx=["isInline ","direction ","align ","justify ","spacing ","wrap ","children ","divider ","className ","shouldWrapChildren "],fx=["className ","align ","decoration ","casing "],px=["spacing ","spacingX ","spacingY ","children ","justify ","direction ","align ","className ","shouldWrapChildren "],gx=["className "],vx=da((function(t,n){var r=t.ratio,a=void 0===r?4/3:r,o=t.children,i=t.className,l=u(t,Hb),s=e.Children.only(o),d=cd("chakra - aspect - ratio ",i);return e.createElement(va.div,c({ref:n,position:"relative ",className:d,_before:{height:0,content:'""',display:"block ",paddingBottom:Vb(a,(function(e){return"".concat(1/e*100," % ")}))},__css:{" & >*:not(style)":{overflow:"hidden ",position:"absolute ",top:"0 ",right:"0 ",bottom:"0 ",left:"0 ",display:"flex ",justifyContent:"center ",alignItems:"center ",width:"100 % ",height:"100 % "}," & >img,
          &>video ":{objectFit:"cover "}}},l),s)}));vx.displayName="AspectRatio ";var mx=da((function(t,n){var r=pa("Badge ",t),a=zr(t),o=(a.className,u(a,$b));return e.createElement(va.span,c(c({ref:n,className:cd("chakra - badge ",t.className)},o),{},{__css:c({display:"inline - block ",whiteSpace:"nowrap ",verticalAlign:"middle "},r)}))}));mx.displayName="Badge ";var hx=va("div ");hx.displayName="Box ";var yx=da((function(t,n){var r=t.size,a=t.centerContent,o=void 0===a||a,i=u(t,qb),l=o?{display:"flex ",alignItems:"center ",justifyContent:"center "}:{};return e.createElement(hx,c({ref:n,boxSize:r,__css:c(c({},l),{},{flexShrink:0,flexGrow:0})},i))}));yx.displayName="Square ";var bx=da((function(t,n){var r=t.size,a=u(t,Gb);return e.createElement(yx,c({size:r,ref:n,borderRadius:"9999px "},a))}));bx.displayName="Circle ",va("div ",{baseStyle:{display:"flex ",alignItems:"center ",justifyContent:"center "}}).displayName="Center ";var xx={horizontal:{insetStart:"50 % ",transform:"translateX( - 50 % )"},vertical:{top:"50 % ",transform:"translateY( - 50 % )"},both:{insetStart:"50 % ",top:"50 % ",transform:"translate( - 50 % , -50 % )"}},wx=(da((function(t,n){var r=t.axis,a=void 0===r?"both ":r,o=u(t,Yb);return e.createElement(va.div,c(c({ref:n,__css:xx[a]},o),{},{position:"absolute "}))})),da((function(t,n){var r=pa("Code ",t),a=zr(t),o=(a.className,u(a,Xb));return e.createElement(va.code,c(c({ref:n,className:cd("chakra - code ",t.className)},o),{},{__css:c({display:"inline - block "},r)}))})));wx.displayName="Code ";var kx=da((function(t,n){var r=zr(t),a=r.className,o=r.centerContent,i=u(r,Kb),l=pa("Container ",t);return e.createElement(va.div,c(c({ref:n,className:cd("chakra - container ",a)},i),{},{__css:c(c({},l),o&&{display:"flex ",flexDirection:"column ",alignItems:"center "})}))}));kx.displayName="Container ";var _x=da((function(t,n){var r=pa("Divider ",t),a=r.borderLeftWidth,o=r.borderBottomWidth,i=r.borderTopWidth,l=r.borderRightWidth,s=r.borderWidth,d=r.borderStyle,f=r.borderColor,p=u(r,Qb),g=zr(t),v=g.className,m=g.orientation,h=void 0===m?"horizontal ":m,y=g.__css,b=u(g,Zb),x={vertical:{borderLeftWidth:a||l||s||"1px ",height:"100 % "},horizontal:{borderBottomWidth:o||i||s||"1px ",width:"100 % "}};return e.createElement(va.hr,c(c({ref:n,"aria - orientation ":h},b),{},{__css:c(c(c({},p),{},{border:"0 ",borderColor:f,borderStyle:d},x[h]),y),className:cd("chakra - divider ",v)}))}));_x.displayName="Divider ";var Sx=da((function(t,n){var r=t.direction,a=t.align,o=t.justify,i=t.wrap,l=t.basis,s=t.grow,d=t.shrink,f=u(t,Jb),p={display:"flex ",flexDirection:r,alignItems:a,justifyContent:o,flexWrap:i,flexBasis:l,flexGrow:s,flexShrink:d};return e.createElement(va.div,c({ref:n,__css:p},f))}));Sx.displayName="Flex ";var Ex=da((function(t,n){var r=t.templateAreas,a=t.gap,o=t.rowGap,i=t.columnGap,l=t.column,s=t.row,d=t.autoFlow,f=t.autoRows,p=t.templateRows,g=t.autoColumns,v=t.templateColumns,m=u(t,ex),h={display:"grid ",gridTemplateAreas:r,gridGap:a,gridRowGap:o,gridColumnGap:i,gridAutoColumns:g,gridColumn:l,gridRow:s,gridAutoFlow:d,gridAutoRows:f,gridTemplateRows:p,gridTemplateColumns:v};return e.createElement(va.div,c({ref:n,__css:h},m))}));function Cx(e){return Vb(e,(function(e){return"auto "===e?"auto ":"span ".concat(e," / span ").concat(e)}))}Ex.displayName="Grid ";var Ax=da((function(t,n){var r=t.area,a=t.colSpan,o=t.colStart,i=t.colEnd,l=t.rowEnd,s=t.rowSpan,d=t.rowStart,f=u(t,tx),p=Wb({gridArea:r,gridColumn:Cx(a),gridRow:Cx(s),gridColumnStart:o,gridColumnEnd:i,gridRowStart:d,gridRowEnd:l});return e.createElement(va.div,c({ref:n,__css:p},f))}));Ax.displayName="GridItem ";var Px=da((function(t,n){var r=pa("Heading ",t),a=zr(t),o=(a.className,u(a,nx));return e.createElement(va.h2,c(c({ref:n,className:cd("chakra - heading ",t.className)},o),{},{__css:r}))}));Px.displayName="Heading ";da((function(t,n){var r=pa("Mark ",t),a=zr(t);return e.createElement(hx,c(c({ref:n},a),{},{as:"mark ",__css:c({bg:"transparent ",whiteSpace:"nowrap "},r)}))}));var Tx=da((function(t,n){var r=pa("Kbd ",t),a=zr(t),o=a.className,i=u(a,rx);return e.createElement(va.kbd,c(c({ref:n,className:cd("chakra - kbd ",o)},i),{},{__css:c({fontFamily:"mono "},r)}))}));Tx.displayName="Kbd ";var zx=da((function(t,n){var r=pa("Link ",t),a=zr(t),o=a.className,i=a.isExternal,l=u(a,ax);return e.createElement(va.a,c(c({target:i?"_blank ":void 0,rel:i?"noopener ":void 0,ref:n,className:cd("chakra - link ",o)},l),{},{__css:r}))}));zx.displayName="Link ";da((function(t,n){var r=t.isExternal,a=t.target,o=t.rel,i=t.className,l=u(t,ox);return e.createElement(va.a,c(c({},l),{},{ref:n,className:cd("chakra - linkbox__overlay ",i),rel:r?"noopener noreferrer ":o,target:r?"_blank ":a,__css:{position:"static "," & ::before ":{content:"''",cursor:"inherit ",display:"block ",position:"absolute ",top:0,left:0,zIndex:0,width:"100 % ",height:"100 % "}}}))})),da((function(t,n){var r=t.className,a=u(t,ix);return e.createElement(va.div,c(c({ref:n,position:"relative "},a),{},{className:cd("chakra - linkbox ",r),__css:{"a[href] : not(.chakra - linkbox__overlay),
          abbr[title]":{position:"relative ",zIndex:1}}}))}));var jx=Ye(Ke({name:"ListStylesContext ",errorMessage:"useListStyles returned is 'undefined'.Seems you forgot to wrap the components in \"<List />\" "
        }), 2),
        Rx = jx[0],
        Mx = jx[1],
        Nx = da((function(t, n) {
          var r = ga("List", t),
          a = zr(t),
          o = a.children,
          i = a.styleType,
          s = void 0 === i ? "none": i,
          d = a.stylePosition,
          f = a.spacing,
          p = u(a, lx),
          g = Ub(o),
          v = f ? l({},
          "& > *:not(style) ~ *:not(style)", {
            mt: f
          }) : {};
          return e.createElement(Rx, {
            value: r
          },
          e.createElement(va.ul, c({
            ref: n,
            listStyleType: s,
            listStylePosition: d,
            role: "list",
            __css: c(c({},
            r.container), v)
          },
          p), g))
        }));
        Nx.displayName = "List",
        da((function(t, n) {
          t.as;
          var r = u(t, sx);
          return e.createElement(Nx, c({
            ref: n,
            as: "ol",
            styleType: "decimal",
            marginStart: "1em"
          },
          r))
        })).displayName = "OrderedList",
        da((function(t, n) {
          t.as;
          var r = u(t, cx);
          return e.createElement(Nx, c({
            ref: n,
            as: "ul",
            styleType: "initial",
            marginStart: "1em"
          },
          r))
        })).displayName = "UnorderedList";
        var Ox = da((function(t, n) {
          var r = Mx();
          return e.createElement(va.li, c(c({
            ref: n
          },
          t), {},
          {
            __css: r.item
          }))
        }));
        Ox.displayName = "ListItem";
        var Bx = da((function(t, n) {
          var r = Mx();
          return e.createElement(fd, c(c({
            ref: n,
            role: "presentation"
          },
          t), {},
          {
            __css: r.icon
          }))
        }));
        Bx.displayName = "ListIcon";
        var Lx = da((function(t, n) {
          var r = t.columns,
          a = t.spacingX,
          o = t.spacingY,
          i = t.spacing,
          l = t.minChildWidth,
          s = u(t, ux),
          d = Jr(),
          f = l ?
          function(e, t) {
            return Vb(e, (function(e) {
              var n, r = ta("sizes", e, "number" === typeof(n = e) ? "".concat(n, "px") : n)(t);
              return null === e ? null: "repeat(auto-fit, minmax(".concat(r, ", 1fr))")
            }))
          } (l, d) : Vb(r, (function(e) {
            return null === e ? null: "repeat(".concat(e, ", minmax(0, 1fr))")
          }));
          return e.createElement(Ex, c({
            ref: n,
            gap: i,
            columnGap: a,
            rowGap: o,
            templateColumns: f
          },
          s))
        }));
        Lx.displayName = "SimpleGrid",
        va("div", {
          baseStyle: {
            flex: 1,
            justifySelf: "stretch",
            alignSelf: "stretch"
          }
        }).displayName = "Spacer";
        var Fx = "& > *:not(style) ~ *:not(style)";
        var Dx = function(t) {
          return e.createElement(va.div, c(c({
            className: "chakra-stack__item"
          },
          t), {},
          {
            __css: c({
              display: "inline-block",
              flex: "0 0 auto",
              minWidth: 0
            },
            t.__css)
          }))
        };
        Dx.displayName = "StackItem";
        var Ix = da((function(t, n) {
          var r = t.isInline,
          a = t.direction,
          o = t.align,
          i = t.justify,
          s = t.spacing,
          d = void 0 === s ? "0.5rem": s,
          f = t.wrap,
          p = t.children,
          g = t.divider,
          v = t.className,
          m = t.shouldWrapChildren,
          h = u(t, dx),
          y = r ? "row": null !== a && void 0 !== a ? a: "column",
          b = (0, e.useMemo)((function() {
            return function(e) {
              var t = e.spacing,
              n = e.direction,
              r = {
                column: {
                  marginTop: t,
                  marginEnd: 0,
                  marginBottom: 0,
                  marginStart: 0
                },
                row: {
                  marginTop: 0,
                  marginEnd: 0,
                  marginBottom: 0,
                  marginStart: t
                },
                "column-reverse": {
                  marginTop: 0,
                  marginEnd: 0,
                  marginBottom: t,
                  marginStart: 0
                },
                "row-reverse": {
                  marginTop: 0,
                  marginEnd: t,
                  marginBottom: 0,
                  marginStart: 0
                }
              };
              return l({
                flexDirection: n
              },
              Fx, Vb(n, (function(e) {
                return r[e]
              })))
            } ({
              direction: y,
              spacing: d
            })
          }), [y, d]),
          x = (0, e.useMemo)((function() {
            return function(e) {
              var t = e.spacing,
              n = e.direction,
              r = {
                column: {
                  my: t,
                  mx: 0,
                  borderLeftWidth: 0,
                  borderBottomWidth: "1px"
                },
                "column-reverse": {
                  my: t,
                  mx: 0,
                  borderLeftWidth: 0,
                  borderBottomWidth: "1px"
                },
                row: {
                  mx: t,
                  my: 0,
                  borderLeftWidth: "1px",
                  borderBottomWidth: 0
                },
                "row-reverse": {
                  mx: t,
                  my: 0,
                  borderLeftWidth: "1px",
                  borderBottomWidth: 0
                }
              };
              return {
                "&": Vb(n, (function(e) {
                  return r[e]
                }))
              }
            } ({
              spacing: d,
              direction: y
            })
          }), [d, y]),
          w = !!g,
          k = !m && !w,
          _ = (0, e.useMemo)((function() {
            var t = Ub(p);
            return k ? t: t.map((function(n, r) {
              var a = "undefined" !== typeof n.key ? n.key: r,
              o = r + 1 === t.length,
              i = m ? e.createElement(Dx, {
                key: a
              },
              n) : n;
              if (!w) return i;
              var l = (0, e.cloneElement)(g, {
                __css: x
              }),
              s = o ? null: l;
              return e.createElement(e.Fragment, {
                key: a
              },
              i, s)
            }))
          }), [g, x, w, k, m, p]),
          S = cd("chakra-stack", v);
          return e.createElement(va.div, c({
            ref: n,
            display: "flex",
            alignItems: o,
            justifyContent: i,
            flexDirection: b.flexDirection,
            flexWrap: f,
            className: S,
            __css: w ? {}: l({},
            Fx, b[Fx])
          },
          h), _)
        }));
        Ix.displayName = "Stack",
        da((function(t, n) {
          return e.createElement(Ix, c(c({
            align: "center"
          },
          t), {},
          {
            direction: "row",
            ref: n
          }))
        })).displayName = "HStack";
        da((function(t, n) {
          return e.createElement(Ix, c(c({
            align: "center"
          },
          t), {},
          {
            direction: "column",
            ref: n
          }))
        })).displayName = "VStack";
        var Vx = da((function(t, n) {
          var r = pa("Text", t),
          a = zr(t),
          o = (a.className, a.align, a.decoration, a.casing, u(a, fx)),
          i = Wb({
            textAlign: t.align,
            textDecoration: t.decoration,
            textTransform: t.casing
          });
          return e.createElement(va.p, c(c(c({
            ref: n,
            className: cd("chakra-text", t.className)
          },
          i), o), {},
          {
            __css: r
          }))
        }));
        function Wx(e) {
          return "number" === typeof e ? "".concat(e, "px") : e
        }
        Vx.displayName = "Text";
        var Ux = da((function(t, n) {
          var r = t.spacing,
          a = void 0 === r ? "0.5rem": r,
          o = t.spacingX,
          i = t.spacingY,
          l = t.children,
          s = t.justify,
          d = t.direction,
          f = t.align,
          p = t.className,
          g = t.shouldWrapChildren,
          v = u(t, px),
          m = (0, e.useMemo)((function() {
            var e = {
              spacingX: o,
              spacingY: i
            },
            t = e.spacingX,
            n = void 0 === t ? a: t,
            r = e.spacingY,
            l = void 0 === r ? a: r;
            return {
              "--chakra-wrap-x-spacing": function(e) {
                return Vb(n, (function(t) {
                  return Wx(Wt("space", t)(e))
                }))
              },
              "--chakra-wrap-y-spacing": function(e) {
                return Vb(l, (function(t) {
                  return Wx(Wt("space", t)(e))
                }))
              },
              "--wrap-x-spacing": "calc(var(--chakra-wrap-x-spacing) / 2)",
              "--wrap-y-spacing": "calc(var(--chakra-wrap-y-spacing) / 2)",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: s,
              alignItems: f,
              flexDirection: d,
              listStyleType: "none",
              padding: "0",
              margin: "calc(var(--wrap-y-spacing) * -1) calc(var(--wrap-x-spacing) * -1)",
              "& > *:not(style)": {
                margin: "var(--wrap-y-spacing) var(--wrap-x-spacing)"
              }
            }
          }), [a, o, i, s, f, d]),
          h = (0, e.useMemo)((function() {
            return g ? e.Children.map(l, (function(t, n) {
              return e.createElement(Hx, {
                key: n
              },
              t)
            })) : l
          }), [l, g]);
          return e.createElement(va.div, c({
            ref: n,
            className: cd("chakra-wrap", p),
            overflow: "hidden"
          },
          v), e.createElement(va.ul, {
            className: "chakra-wrap__list",
            __css: m
          },
          h))
        }));
        Ux.displayName = "Wrap";
        var Hx = da((function(t, n) {
          var r = t.className,
          a = u(t, gx);
          return e.createElement(va.li, c({
            ref: n,
            __css: {
              display: "flex",
              alignItems: "flex-start"
            },
            className: cd("chakra-wrap__listitem", r)
          },
          a))
        }));
        Hx.displayName = "WrapItem";
        var $x = {
          color: void 0,
          size: void 0,
          className: void 0,
          style: void 0,
          attr: void 0
        },
        qx = e.createContext && e.createContext($x),
        Gx = function() {
          return Gx = Object.assign ||
          function(e) {
            for (var t, n = 1,
            r = arguments.length; n < r; n++) for (var a in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
            return e
          },
          Gx.apply(this, arguments)
        },
        Yx = function(e, t) {
          var n = {};
          for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
          if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
            var a = 0;
            for (r = Object.getOwnPropertySymbols(e); a < r.length; a++) t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]])
          }
          return n
        };
        function Xx(t) {
          return t && t.map((function(t, n) {
            return e.createElement(t.tag, Gx({
              key: n
            },
            t.attr), Xx(t.child))
          }))
        }
        function Kx(t) {
          return function(n) {
            return e.createElement(Qx, Gx({
              attr: Gx({},
              t.attr)
            },
            n), Xx(t.child))
          }
        }
        function Qx(t) {
          var n = function(n) {
            var r, a = t.attr,
            o = t.size,
            i = t.title,
            l = Yx(t, ["attr", "size", "title"]),
            s = o || n.size || "1em";
            return n.className && (r = n.className),
            t.className && (r = (r ? r + " ": "") + t.className),
            e.createElement("svg", Gx({
              stroke: "currentColor",
              fill: "currentColor",
              strokeWidth: "0"
            },
            n.attr, a, l, {
              className: r,
              style: Gx(Gx({
                color: t.color || n.color
              },
              n.style), t.style),
              height: s,
              width: s,
              xmlns: "http://www.w3.org/2000/svg"
            }), i && e.createElement("title", null, i), t.children)
          };
          return void 0 !== qx ? e.createElement(qx.Consumer, null, (function(e) {
            return n(e)
          })) : n($x)
        }
        function Zx(e) {
          return Kx({
            tag: "svg",
            attr: {
              viewBox: "0 0 1024 1024"
            },
            child: [{
              tag: "path",
              attr: {
                d: "M848 359.3H627.7L825.8 109c4.1-5.3.4-13-6.3-13H436c-2.8 0-5.5 1.5-6.9 4L170 547.5c-3.1 5.3.7 12 6.9 12h174.4l-89.4 357.6c-1.9 7.8 7.5 13.3 13.3 7.7L853.5 373c5.2-4.9 1.7-13.7-5.5-13.7zM378.2 732.5l60.3-241H281.1l189.6-327.4h224.6L487 427.4h211L378.2 732.5z"
              }
            }]
          })(e)
        }
        function Jx(e) {
          return Kx({
            tag: "svg",
            attr: {
              version: "1.2",
              baseProfile: "tiny",
              viewBox: "0 0 24 24"
            },
            child: [{
              tag: "path",
              attr: {
                d: "M12 5.511c.561 0 1.119.354 1.544 1.062l5.912 9.854c.851 1.415.194 2.573-1.456 2.573h-12c-1.65 0-2.307-1.159-1.456-2.573l5.912-9.854c.425-.708.983-1.062 1.544-1.062m0-2c-1.296 0-2.482.74-3.259 2.031l-5.912 9.856c-.786 1.309-.872 2.705-.235 3.83s1.879 1.772 3.406 1.772h12c1.527 0 2.77-.646 3.406-1.771s.551-2.521-.235-3.83l-5.912-9.854c-.777-1.294-1.963-2.034-3.259-2.034z"
              }
            },
            {
              tag: "circle",
              attr: {
                cx: "12",
                cy: "16",
                r: "1.3"
              }
            },
            {
              tag: "path",
              attr: {
                d: "M13.5 10c0-.83-.671-1.5-1.5-1.5s-1.5.67-1.5 1.5c0 .199.041.389.111.562.554 1.376 1.389 3.438 1.389 3.438l1.391-3.438c.068-.173.109-.363.109-.562z"
              }
            }]
          })(e)
        }
        var ew = function() {
          return (0, Mb.jsx)("div", {
            className: "flex justify-center",
            children: (0, Mb.jsx)(Jx, {
              className: "h-6 w-6 text-red-400 dark:text-red-400"
            })
          })
        },
        tw = function() {
          return (0, Mb.jsx)("div", {
            className: "flex justify-center bg-red-400",
            children: (0, Mb.jsx)("div", {
              className: "text-sm font-normal text-indigo-800",
              children: " - "
            })
          })
        };
        function nw(e) {
          var t = Math.round(e),
          n = t + "%";
          e < 0 && (n = "X", t = 100);
          var r = function(e) {
            var t = "bg-indigo-400";
            return e > 90 ? t = "bg-red-400": e > 80 && (t = "bg-yellow-400"),
            [t, "bg-slate-100"]
          } (t),
          a = Ye(r, 2),
          o = a[0],
          i = a[1];
          return (0, Mb.jsxs)("div", {
            className: "relative flex h-5 w-full text-tiny lg:text-base ".concat(i),
            children: [(0, Mb.jsx)("div", {
              style: {
                width: "".concat(t, "%"),
                transition: "width 1s"
              },
              className: "h-full ".concat(o)
            }), (0, Mb.jsx)("div", {
              className: "lg:text-md absolute left-1/4 top-1/2 -mt-2 text-center text-tiny font-normal text-indigo-800 md:left-1/3 md:text-xs",
              children: n
            })]
          })
        }
        function rw(e, t) {
          if (!e.online4 && !e.online6) return tw();
          switch (t) {
          case "cpu":
            return nw(Math.round(e.cpu));
          case "mem":
            return nw(Math.round(100 * e.memory_used / e.memory_total));
          case "hdd":
            return nw(Math.round(100 * e.hdd_used / e.hdd_total));
          default:
            return tw()
          }
        }
        function aw(e) {
          var t = "bg-emerald-400";
          return e.ping_10010 > 70 || e.ping_189 > 70 || e.ping_10086 > 70 ? t = "bg-red-400": (e.ping_10010 > 20 || e.ping_189 > 20 || e.ping_10086 > 20) && (t = "bg-yellow-400"),
          e.online4 || e.online6 ? (0, Mb.jsx)("div", {
            className: "h-5 w-full text-sm lg:text-base ".concat(t, " pr-2"),
            children: (0, Mb.jsxs)("div", {
              className: "flex h-full w-full items-center justify-center space-x-1 pt-0.5 text-center text-tiny font-normal text-indigo-800 dark:text-indigo-900",
              children: [(0, Mb.jsxs)("div", {
                children: [e.ping_10010.toFixed(0), "%"]
              }), (0, Mb.jsx)(Zx, {
                className: "h-4 w-4 text-amber-500"
              }), (0, Mb.jsxs)("div", {
                children: [e.ping_189.toFixed(0), "%"]
              }), (0, Mb.jsx)(Zx, {
                className: "h-4 w-4 text-amber-500"
              }), (0, Mb.jsxs)("div", {
                children: [" ", e.ping_10086.toFixed(0), "%"]
              })]
            })
          }) : (0, Mb.jsxs)("div", {
            className: "flex items-center justify-evenly bg-red-400",
            children: [(0, Mb.jsx)("div", {
              className: "text-sm font-normal text-indigo-800",
              children: " - "
            }), (0, Mb.jsx)("div", {
              className: "text-sm font-normal text-indigo-800",
              children: " - "
            }), (0, Mb.jsx)("div", {
              className: "text-sm font-normal text-indigo-800",
              children: " - "
            })]
          })
        }
        var ow = ["B", "K", "M", "G", "T", "P"],
        iw = [ow.map((function(e, t) {
          return Math.pow(2, 10 * t)
        })), ow.map((function(e, t) {
          return Math.pow(10, 3 * t)
        }))];
        function lw(e) {
          for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, r = ow.length - 1; r >= 1; --r) if (e >= iw[n][r]) return (1 * e / iw[n][r]).toFixed(t) + ow[r];
          return e.toFixed(t) + "B"
        }
        function sw(e) {
          return Kx({
            tag: "svg",
            attr: {
              fill: "none",
              viewBox: "0 0 24 24",
              strokeWidth: "1.5",
              stroke: "currentColor",
              "aria-hidden": "true"
            },
            child: [{
              tag: "path",
              attr: {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z"
              }
            }]
          })(e)
        }
        function cw(e) {
          return Kx({
            tag: "svg",
            attr: {
              version: "1",
              viewBox: "0 0 48 48",
              enableBackground: "new 0 0 48 48"
            },
            child: [{
              tag: "path",
              attr: {
                fill: "#CFD8DC",
                d: "M5,38V14h38v24c0,2.2-1.8,4-4,4H9C6.8,42,5,40.2,5,38z"
              }
            },
            {
              tag: "path",
              attr: {
                fill: "#F44336",
                d: "M43,10v6H5v-6c0-2.2,1.8-4,4-4h30C41.2,6,43,7.8,43,10z"
              }
            },
            {
              tag: "g",
              attr: {
                fill: "#B71C1C"
              },
              child: [{
                tag: "circle",
                attr: {
                  cx: "33",
                  cy: "10",
                  r: "3"
                }
              },
              {
                tag: "circle",
                attr: {
                  cx: "15",
                  cy: "10",
                  r: "3"
                }
              }]
            },
            {
              tag: "g",
              attr: {
                fill: "#B0BEC5"
              },
              child: [{
                tag: "path",
                attr: {
                  d: "M33,3c-1.1,0-2,0.9-2,2v5c0,1.1,0.9,2,2,2s2-0.9,2-2V5C35,3.9,34.1,3,33,3z"
                }
              },
              {
                tag: "path",
                attr: {
                  d: "M15,3c-1.1,0-2,0.9-2,2v5c0,1.1,0.9,2,2,2s2-0.9,2-2V5C17,3.9,16.1,3,15,3z"
                }
              }]
            },
            {
              tag: "g",
              attr: {
                fill: "#90A4AE"
              },
              child: [{
                tag: "rect",
                attr: {
                  x: "13",
                  y: "20",
                  width: "4",
                  height: "4"
                }
              },
              {
                tag: "rect",
                attr: {
                  x: "19",
                  y: "20",
                  width: "4",
                  height: "4"
                }
              },
              {
                tag: "rect",
                attr: {
                  x: "25",
                  y: "20",
                  width: "4",
                  height: "4"
                }
              },
              {
                tag: "rect",
                attr: {
                  x: "31",
                  y: "20",
                  width: "4",
                  height: "4"
                }
              },
              {
                tag: "rect",
                attr: {
                  x: "13",
                  y: "26",
                  width: "4",
                  height: "4"
                }
              },
              {
                tag: "rect",
                attr: {
                  x: "19",
                  y: "26",
                  width: "4",
                  height: "4"
                }
              },
              {
                tag: "rect",
                attr: {
                  x: "25",
                  y: "26",
                  width: "4",
                  height: "4"
                }
              },
              {
                tag: "rect",
                attr: {
                  x: "31",
                  y: "26",
                  width: "4",
                  height: "4"
                }
              },
              {
                tag: "rect",
                attr: {
                  x: "13",
                  y: "32",
                  width: "4",
                  height: "4"
                }
              },
              {
                tag: "rect",
                attr: {
                  x: "19",
                  y: "32",
                  width: "4",
                  height: "4"
                }
              },
              {
                tag: "rect",
                attr: {
                  x: "25",
                  y: "32",
                  width: "4",
                  height: "4"
                }
              },
              {
                tag: "rect",
                attr: {
                  x: "31",
                  y: "32",
                  width: "4",
                  height: "4"
                }
              }]
            }]
          })(e)
        }
        function uw(e) {
          return Kx({
            tag: "svg",
            attr: {
              version: "1",
              viewBox: "0 0 48 48",
              enableBackground: "new 0 0 48 48"
            },
            child: [{
              tag: "path",
              attr: {
                fill: "#FF9800",
                d: "M44,18v-4H34V4h-4v10h-4V4h-4v10h-4V4h-4v10H4v4h10v4H4v4h10v4H4v4h10v10h4V34h4v10h4V34h4v10h4V34h10v-4H34 v-4h10v-4H34v-4H44z"
              }
            },
            {
              tag: "path",
              attr: {
                fill: "#4CAF50",
                d: "M8,12v24c0,2.2,1.8,4,4,4h24c2.2,0,4-1.8,4-4V12c0-2.2-1.8-4-4-4H12C9.8,8,8,9.8,8,12z"
              }
            },
            {
              tag: "path",
              attr: {
                fill: "#37474F",
                d: "M31,31H17c-1.1,0-2-0.9-2-2V19c0-1.1,0.9-2,2-2h14c1.1,0,2,0.9,2,2v10C33,30.1,32.1,31,31,31z"
              }
            }]
          })(e)
        }
        function dw(e) {
          return Kx({
            tag: "svg",
            attr: {
              role: "img",
              viewBox: "0 0 24 24"
            },
            child: [{
              tag: "title",
              attr: {},
              child: []
            },
            {
              tag: "path",
              attr: {
                d: "M5.998 1.607L0 12l5.998 10.393h12.004L24 12 18.002 1.607H5.998zM9.965 7.12L12.66 9.9l1.598 1.595.002-.002 2.41 2.363c-.2.14-.386.252-.563.344a3.756 3.756 0 01-.496.217 2.702 2.702 0 01-.425.111c-.131.023-.25.034-.358.034-.13 0-.242-.014-.338-.034a1.317 1.317 0 01-.24-.072.95.95 0 01-.2-.113l-1.062-1.092-3.039-3.041-1.1 1.053-3.07 3.072a.974.974 0 01-.2.111 1.274 1.274 0 01-.237.073c-.096.02-.209.033-.338.033-.108 0-.227-.009-.358-.031a2.7 2.7 0 01-.425-.114 3.748 3.748 0 01-.496-.217 5.228 5.228 0 01-.563-.343l6.803-6.727zm4.72.785l4.579 4.598 1.382 1.353a5.24 5.24 0 01-.564.344 3.73 3.73 0 01-.494.217 2.697 2.697 0 01-.426.111c-.13.023-.251.034-.36.034-.129 0-.241-.014-.337-.034a1.285 1.285 0 01-.385-.146c-.033-.02-.05-.036-.053-.04l-1.232-1.218-2.111-2.111-.334.334L12.79 9.8l1.896-1.897zm-5.966 4.12v2.529a2.128 2.128 0 01-.356-.035 2.765 2.765 0 01-.422-.116 3.708 3.708 0 01-.488-.214 5.217 5.217 0 01-.555-.34l1.82-1.825Z"
              }
            }]
          })(e)
        }
        var fw = function() {
          return (0, Mb.jsx)("img", {
            className: "h-5 w-5 rounded",
            alt: "Centos",
            src: "static/os/centos.svg"
          })
        },
        pw = function() {
          return (0, Mb.jsx)("img", {
            className: "h-5 w-5 rounded",
            alt: "Debian",
            src: "static/os/debian.svg"
          })
        },
        gw = function() {
          return (0, Mb.jsx)("img", {
            className: "h-5 w-5 rounded",
            alt: "Ubuntu",
            src: "static/os/ubuntu.svg"
          })
        },
        vw = function() {
          return (0, Mb.jsx)("img", {
            className: "h-5 w-5 rounded",
            alt: "Pi",
            src: "static/os/raspberry.svg"
          })
        },
        mw = function() {
          return (0, Mb.jsx)("img", {
            className: "h-5 w-5 rounded",
            alt: "Arch",
            src: "static/os/archlinux.svg"
          })
        },
        hw = function() {
          return (0, Mb.jsx)("img", {
            className: "h-5 w-5 rounded",
            alt: "MacOS",
            src: "static/os/macos.svg"
          })
        },
        yw = function() {
          return (0, Mb.jsx)("img", {
            className: "h-5 w-5 rounded",
            alt: "Windows",
            src: "static/os/window.svg"
          })
        },
        bw = function() {
          return (0, Mb.jsx)("img", {
            className: "h-5 w-5 rounded",
            alt: "Android",
            src: "static/os/android.svg"
          })
        },
        xw = function() {
          return (0, Mb.jsx)("img", {
            className: "h-5 w-5 rounded",
            alt: "Linux",
            src: "static/os/linux.svg"
          })
        };
        var ww = function(e) {
          switch (e) {
          case "centos":
            return (0, Mb.jsx)("div", {
              children: (0, Mb.jsx)(fw, {})
            });
          case "debian":
            return (0, Mb.jsx)("div", {
              children: (0, Mb.jsx)(pw, {})
            });
          case "ubuntu":
            return (0, Mb.jsx)("div", {
              children: (0, Mb.jsx)(gw, {})
            });
          case "alpine":
            return (0, Mb.jsx)("div", {
              children: (0, Mb.jsx)(dw, {
                className: "h-5 w-5 rounded text-blue-500 dark:text-sky-500"
              })
            });
          case "pi":
            return (0, Mb.jsx)("div", {
              children: (0, Mb.jsx)(vw, {})
            });
          case "arch":
            return (0, Mb.jsx)("div", {
              children: (0, Mb.jsx)(mw, {})
            });
          case "macos":
            return (0, Mb.jsx)("div", {
              children: (0, Mb.jsx)(hw, {})
            });
          case "windows":
            return (0, Mb.jsx)("div", {
              children: (0, Mb.jsx)(yw, {})
            });
          case "android":
            return (0, Mb.jsx)("div", {
              children: (0, Mb.jsx)(bw, {})
            });
          default:
            return (0, Mb.jsx)("div", {
              children: (0, Mb.jsx)(xw, {})
            })
          }
        };
        function kw(e, t) {
          if (null != e) if ("function" !== typeof e) try {
            e.current = t
          } catch(n) {
            throw new Error("Cannot assign value '".concat(t, "' to ref '").concat(e, "'"))
          } else e(t)
        }
        function _w() {
          for (var e = arguments.length,
          t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
          return function(e) {
            t.forEach((function(t) {
              kw(t, e)
            }))
          }
        }
        function Sw(e) {
          if (null == e) return window;
          if ("[object Window]" !== e.toString()) {
            var t = e.ownerDocument;
            return t && t.defaultView || window
          }
          return e
        }
        function Ew(e) {
          return e instanceof Sw(e).Element || e instanceof Element
        }
        function Cw(e) {
          return e instanceof Sw(e).HTMLElement || e instanceof HTMLElement
        }
        function Aw(e) {
          return "undefined" !== typeof ShadowRoot && (e instanceof Sw(e).ShadowRoot || e instanceof ShadowRoot)
        }
        var Pw = Math.max,
        Tw = Math.min,
        zw = Math.round;
        function jw() {
          var e = navigator.userAgentData;
          return null != e && e.brands ? e.brands.map((function(e) {
            return e.brand + "/" + e.version
          })).join(" ") : navigator.userAgent
        }
        function Rw() {
          return ! /^((?!chrome|android).)*safari/i.test(jw())
        }
        function Mw(e, t, n) {
          void 0 === t && (t = !1),
          void 0 === n && (n = !1);
          var r = e.getBoundingClientRect(),
          a = 1,
          o = 1;
          t && Cw(e) && (a = e.offsetWidth > 0 && zw(r.width) / e.offsetWidth || 1, o = e.offsetHeight > 0 && zw(r.height) / e.offsetHeight || 1);
          var i = (Ew(e) ? Sw(e) : window).visualViewport,
          l = !Rw() && n,
          s = (r.left + (l && i ? i.offsetLeft: 0)) / a,
          c = (r.top + (l && i ? i.offsetTop: 0)) / o,
          u = r.width / a,
          d = r.height / o;
          return {
            width: u,
            height: d,
            top: c,
            right: s + u,
            bottom: c + d,
            left: s,
            x: s,
            y: c
          }
        }
        function Nw(e) {
          var t = Sw(e);
          return {
            scrollLeft: t.pageXOffset,
            scrollTop: t.pageYOffset
          }
        }
        function Ow(e) {
          return e ? (e.nodeName || "").toLowerCase() : null
        }
        function Bw(e) {
          return ((Ew(e) ? e.ownerDocument: e.document) || window.document).documentElement
        }
        function Lw(e) {
          return Mw(Bw(e)).left + Nw(e).scrollLeft
        }
        function Fw(e) {
          return Sw(e).getComputedStyle(e)
        }
        function Dw(e) {
          var t = Fw(e),
          n = t.overflow,
          r = t.overflowX,
          a = t.overflowY;
          return /auto|scroll|overlay|hidden/.test(n + a + r)
        }
        function Iw(e, t, n) {
          void 0 === n && (n = !1);
          var r = Cw(t),
          a = Cw(t) &&
          function(e) {
            var t = e.getBoundingClientRect(),
            n = zw(t.width) / e.offsetWidth || 1,
            r = zw(t.height) / e.offsetHeight || 1;
            return 1 !== n || 1 !== r
          } (t),
          o = Bw(t),
          i = Mw(e, a, n),
          l = {
            scrollLeft: 0,
            scrollTop: 0
          },
          s = {
            x: 0,
            y: 0
          };
          return (r || !r && !n) && (("body" !== Ow(t) || Dw(o)) && (l = function(e) {
            return e !== Sw(e) && Cw(e) ? {
              scrollLeft: (t = e).scrollLeft,
              scrollTop: t.scrollTop
            }: Nw(e);
            var t
          } (t)), Cw(t) ? ((s = Mw(t, !0)).x += t.clientLeft, s.y += t.clientTop) : o && (s.x = Lw(o))),
          {
            x: i.left + l.scrollLeft - s.x,
            y: i.top + l.scrollTop - s.y,
            width: i.width,
            height: i.height
          }
        }
        function Vw(e) {
          var t = Mw(e),
          n = e.offsetWidth,
          r = e.offsetHeight;
          return Math.abs(t.width - n) <= 1 && (n = t.width),
          Math.abs(t.height - r) <= 1 && (r = t.height),
          {
            x: e.offsetLeft,
            y: e.offsetTop,
            width: n,
            height: r
          }
        }
        function Ww(e) {
          return "html" === Ow(e) ? e: e.assignedSlot || e.parentNode || (Aw(e) ? e.host: null) || Bw(e)
        }
        function Uw(e) {
          return ["html", "body", "#document"].indexOf(Ow(e)) >= 0 ? e.ownerDocument.body: Cw(e) && Dw(e) ? e: Uw(Ww(e))
        }
        function Hw(e, t) {
          var n;
          void 0 === t && (t = []);
          var r = Uw(e),
          a = r === (null == (n = e.ownerDocument) ? void 0 : n.body),
          o = Sw(r),
          i = a ? [o].concat(o.visualViewport || [], Dw(r) ? r: []) : r,
          l = t.concat(i);
          return a ? l: l.concat(Hw(Ww(i)))
        }
        function $w(e) {
          return ["table", "td", "th"].indexOf(Ow(e)) >= 0
        }
        function qw(e) {
          return Cw(e) && "fixed" !== Fw(e).position ? e.offsetParent: null
        }
        function Gw(e) {
          for (var t = Sw(e), n = qw(e); n && $w(n) && "static" === Fw(n).position;) n = qw(n);
          return n && ("html" === Ow(n) || "body" === Ow(n) && "static" === Fw(n).position) ? t: n ||
          function(e) {
            var t = /firefox/i.test(jw());
            if (/Trident/i.test(jw()) && Cw(e) && "fixed" === Fw(e).position) return null;
            var n = Ww(e);
            for (Aw(n) && (n = n.host); Cw(n) && ["html", "body"].indexOf(Ow(n)) < 0;) {
              var r = Fw(n);
              if ("none" !== r.transform || "none" !== r.perspective || "paint" === r.contain || -1 !== ["transform", "perspective"].indexOf(r.willChange) || t && "filter" === r.willChange || t && r.filter && "none" !== r.filter) return n;
              n = n.parentNode
            }
            return null
          } (e) || t
        }
        var Yw = "top",
        Xw = "bottom",
        Kw = "right",
        Qw = "left",
        Zw = "auto",
        Jw = [Yw, Xw, Kw, Qw],
        ek = "start",
        tk = "end",
        nk = "viewport",
        rk = "popper",
        ak = Jw.reduce((function(e, t) {
          return e.concat([t + "-" + ek, t + "-" + tk])
        }), []),
        ok = [].concat(Jw, [Zw]).reduce((function(e, t) {
          return e.concat([t, t + "-" + ek, t + "-" + tk])
        }), []),
        ik = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];
        function lk(e) {
          var t = new Map,
          n = new Set,
          r = [];
          function a(e) {
            n.add(e.name),
            [].concat(e.requires || [], e.requiresIfExists || []).forEach((function(e) {
              if (!n.has(e)) {
                var r = t.get(e);
                r && a(r)
              }
            })),
            r.push(e)
          }
          return e.forEach((function(e) {
            t.set(e.name, e)
          })),
          e.forEach((function(e) {
            n.has(e.name) || a(e)
          })),
          r
        }
        function sk(e) {
          var t;
          return function() {
            return t || (t = new Promise((function(n) {
              Promise.resolve().then((function() {
                t = void 0,
                n(e())
              }))
            }))),
            t
          }
        }
        var ck = {
          placement: "bottom",
          modifiers: [],
          strategy: "absolute"
        };
        function uk() {
          for (var e = arguments.length,
          t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
          return ! t.some((function(e) {
            return ! (e && "function" === typeof e.getBoundingClientRect)
          }))
        }
        function dk(e) {
          void 0 === e && (e = {});
          var t = e,
          n = t.defaultModifiers,
          r = void 0 === n ? [] : n,
          a = t.defaultOptions,
          o = void 0 === a ? ck: a;
          return function(e, t, n) {
            void 0 === n && (n = o);
            var a = {
              placement: "bottom",
              orderedModifiers: [],
              options: Object.assign({},
              ck, o),
              modifiersData: {},
              elements: {
                reference: e,
                popper: t
              },
              attributes: {},
              styles: {}
            },
            i = [],
            l = !1,
            s = {
              state: a,
              setOptions: function(n) {
                var l = "function" === typeof n ? n(a.options) : n;
                c(),
                a.options = Object.assign({},
                o, a.options, l),
                a.scrollParents = {
                  reference: Ew(e) ? Hw(e) : e.contextElement ? Hw(e.contextElement) : [],
                  popper: Hw(t)
                };
                var u = function(e) {
                  var t = lk(e);
                  return ik.reduce((function(e, n) {
                    return e.concat(t.filter((function(e) {
                      return e.phase === n
                    })))
                  }), [])
                } (function(e) {
                  var t = e.reduce((function(e, t) {
                    var n = e[t.name];
                    return e[t.name] = n ? Object.assign({},
                    n, t, {
                      options: Object.assign({},
                      n.options, t.options),
                      data: Object.assign({},
                      n.data, t.data)
                    }) : t,
                    e
                  }), {});
                  return Object.keys(t).map((function(e) {
                    return t[e]
                  }))
                } ([].concat(r, a.options.modifiers)));
                return a.orderedModifiers = u.filter((function(e) {
                  return e.enabled
                })),
                a.orderedModifiers.forEach((function(e) {
                  var t = e.name,
                  n = e.options,
                  r = void 0 === n ? {}: n,
                  o = e.effect;
                  if ("function" === typeof o) {
                    var l = o({
                      state: a,
                      name: t,
                      instance: s,
                      options: r
                    }),
                    c = function() {};
                    i.push(l || c)
                  }
                })),
                s.update()
              },
              forceUpdate: function() {
                if (!l) {
                  var e = a.elements,
                  t = e.reference,
                  n = e.popper;
                  if (uk(t, n)) {
                    a.rects = {
                      reference: Iw(t, Gw(n), "fixed" === a.options.strategy),
                      popper: Vw(n)
                    },
                    a.reset = !1,
                    a.placement = a.options.placement,
                    a.orderedModifiers.forEach((function(e) {
                      return a.modifiersData[e.name] = Object.assign({},
                      e.data)
                    }));
                    for (var r = 0; r < a.orderedModifiers.length; r++) if (!0 !== a.reset) {
                      var o = a.orderedModifiers[r],
                      i = o.fn,
                      c = o.options,
                      u = void 0 === c ? {}: c,
                      d = o.name;
                      "function" === typeof i && (a = i({
                        state: a,
                        options: u,
                        name: d,
                        instance: s
                      }) || a)
                    } else a.reset = !1,
                    r = -1
                  }
                }
              },
              update: sk((function() {
                return new Promise((function(e) {
                  s.forceUpdate(),
                  e(a)
                }))
              })),
              destroy: function() {
                c(),
                l = !0
              }
            };
            if (!uk(e, t)) return s;
            function c() {
              i.forEach((function(e) {
                return e()
              })),
              i = []
            }
            return s.setOptions(n).then((function(e) { ! l && n.onFirstUpdate && n.onFirstUpdate(e)
            })),
            s
          }
        }
        var fk = {
          passive: !0
        };
        var pk = {
          name: "eventListeners",
          enabled: !0,
          phase: "write",
          fn: function() {},
          effect: function(e) {
            var t = e.state,
            n = e.instance,
            r = e.options,
            a = r.scroll,
            o = void 0 === a || a,
            i = r.resize,
            l = void 0 === i || i,
            s = Sw(t.elements.popper),
            c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
            return o && c.forEach((function(e) {
              e.addEventListener("scroll", n.update, fk)
            })),
            l && s.addEventListener("resize", n.update, fk),
            function() {
              o && c.forEach((function(e) {
                e.removeEventListener("scroll", n.update, fk)
              })),
              l && s.removeEventListener("resize", n.update, fk)
            }
          },
          data: {}
        };
        function gk(e) {
          return e.split("-")[0]
        }
        function vk(e) {
          return e.split("-")[1]
        }
        function mk(e) {
          return ["top", "bottom"].indexOf(e) >= 0 ? "x": "y"
        }
        function hk(e) {
          var t, n = e.reference,
          r = e.element,
          a = e.placement,
          o = a ? gk(a) : null,
          i = a ? vk(a) : null,
          l = n.x + n.width / 2 - r.width / 2,
          s = n.y + n.height / 2 - r.height / 2;
          switch (o) {
          case Yw:
            t = {
              x: l,
              y: n.y - r.height
            };
            break;
          case Xw:
            t = {
              x: l,
              y: n.y + n.height
            };
            break;
          case Kw:
            t = {
              x: n.x + n.width,
              y: s
            };
            break;
          case Qw:
            t = {
              x: n.x - r.width,
              y: s
            };
            break;
          default:
            t = {
              x: n.x,
              y: n.y
            }
          }
          var c = o ? mk(o) : null;
          if (null != c) {
            var u = "y" === c ? "height": "width";
            switch (i) {
            case ek:
              t[c] = t[c] - (n[u] / 2 - r[u] / 2);
              break;
            case tk:
              t[c] = t[c] + (n[u] / 2 - r[u] / 2)
            }
          }
          return t
        }
        var yk = {
          name: "popperOffsets",
          enabled: !0,
          phase: "read",
          fn: function(e) {
            var t = e.state,
            n = e.name;
            t.modifiersData[n] = hk({
              reference: t.rects.reference,
              element: t.rects.popper,
              strategy: "absolute",
              placement: t.placement
            })
          },
          data: {}
        },
        bk = {
          top: "auto",
          right: "auto",
          bottom: "auto",
          left: "auto"
        };
        function xk(e) {
          var t, n = e.popper,
          r = e.popperRect,
          a = e.placement,
          o = e.variation,
          i = e.offsets,
          l = e.position,
          s = e.gpuAcceleration,
          c = e.adaptive,
          u = e.roundOffsets,
          d = e.isFixed,
          f = i.x,
          p = void 0 === f ? 0 : f,
          g = i.y,
          v = void 0 === g ? 0 : g,
          m = "function" === typeof u ? u({
            x: p,
            y: v
          }) : {
            x: p,
            y: v
          };
          p = m.x,
          v = m.y;
          var h = i.hasOwnProperty("x"),
          y = i.hasOwnProperty("y"),
          b = Qw,
          x = Yw,
          w = window;
          if (c) {
            var k = Gw(n),
            _ = "clientHeight",
            S = "clientWidth";
            if (k === Sw(n) && "static" !== Fw(k = Bw(n)).position && "absolute" === l && (_ = "scrollHeight", S = "scrollWidth"), a === Yw || (a === Qw || a === Kw) && o === tk) x = Xw,
            v -= (d && k === w && w.visualViewport ? w.visualViewport.height: k[_]) - r.height,
            v *= s ? 1 : -1;
            if (a === Qw || (a === Yw || a === Xw) && o === tk) b = Kw,
            p -= (d && k === w && w.visualViewport ? w.visualViewport.width: k[S]) - r.width,
            p *= s ? 1 : -1
          }
          var E, C = Object.assign({
            position: l
          },
          c && bk),
          A = !0 === u ?
          function(e) {
            var t = e.x,
            n = e.y,
            r = window.devicePixelRatio || 1;
            return {
              x: zw(t * r) / r || 0,
              y: zw(n * r) / r || 0
            }
          } ({
            x: p,
            y: v
          }) : {
            x: p,
            y: v
          };
          return p = A.x,
          v = A.y,
          s ? Object.assign({},
          C, ((E = {})[x] = y ? "0": "", E[b] = h ? "0": "", E.transform = (w.devicePixelRatio || 1) <= 1 ? "translate(" + p + "px, " + v + "px)": "translate3d(" + p + "px, " + v + "px, 0)", E)) : Object.assign({},
          C, ((t = {})[x] = y ? v + "px": "", t[b] = h ? p + "px": "", t.transform = "", t))
        }
        var wk = {
          name: "computeStyles",
          enabled: !0,
          phase: "beforeWrite",
          fn: function(e) {
            var t = e.state,
            n = e.options,
            r = n.gpuAcceleration,
            a = void 0 === r || r,
            o = n.adaptive,
            i = void 0 === o || o,
            l = n.roundOffsets,
            s = void 0 === l || l,
            c = {
              placement: gk(t.placement),
              variation: vk(t.placement),
              popper: t.elements.popper,
              popperRect: t.rects.popper,
              gpuAcceleration: a,
              isFixed: "fixed" === t.options.strategy
            };
            null != t.modifiersData.popperOffsets && (t.styles.popper = Object.assign({},
            t.styles.popper, xk(Object.assign({},
            c, {
              offsets: t.modifiersData.popperOffsets,
              position: t.options.strategy,
              adaptive: i,
              roundOffsets: s
            })))),
            null != t.modifiersData.arrow && (t.styles.arrow = Object.assign({},
            t.styles.arrow, xk(Object.assign({},
            c, {
              offsets: t.modifiersData.arrow,
              position: "absolute",
              adaptive: !1,
              roundOffsets: s
            })))),
            t.attributes.popper = Object.assign({},
            t.attributes.popper, {
              "data-popper-placement": t.placement
            })
          },
          data: {}
        };
        var kk = {
          name: "applyStyles",
          enabled: !0,
          phase: "write",
          fn: function(e) {
            var t = e.state;
            Object.keys(t.elements).forEach((function(e) {
              var n = t.styles[e] || {},
              r = t.attributes[e] || {},
              a = t.elements[e];
              Cw(a) && Ow(a) && (Object.assign(a.style, n), Object.keys(r).forEach((function(e) {
                var t = r[e]; ! 1 === t ? a.removeAttribute(e) : a.setAttribute(e, !0 === t ? "": t)
              })))
            }))
          },
          effect: function(e) {
            var t = e.state,
            n = {
              popper: {
                position: t.options.strategy,
                left: "0",
                top: "0",
                margin: "0"
              },
              arrow: {
                position: "absolute"
              },
              reference: {}
            };
            return Object.assign(t.elements.popper.style, n.popper),
            t.styles = n,
            t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
            function() {
              Object.keys(t.elements).forEach((function(e) {
                var r = t.elements[e],
                a = t.attributes[e] || {},
                o = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]).reduce((function(e, t) {
                  return e[t] = "",
                  e
                }), {});
                Cw(r) && Ow(r) && (Object.assign(r.style, o), Object.keys(a).forEach((function(e) {
                  r.removeAttribute(e)
                })))
              }))
            }
          },
          requires: ["computeStyles"]
        };
        var _k = {
          name: "offset",
          enabled: !0,
          phase: "main",
          requires: ["popperOffsets"],
          fn: function(e) {
            var t = e.state,
            n = e.options,
            r = e.name,
            a = n.offset,
            o = void 0 === a ? [0, 0] : a,
            i = ok.reduce((function(e, n) {
              return e[n] = function(e, t, n) {
                var r = gk(e),
                a = [Qw, Yw].indexOf(r) >= 0 ? -1 : 1,
                o = "function" === typeof n ? n(Object.assign({},
                t, {
                  placement: e
                })) : n,
                i = o[0],
                l = o[1];
                return i = i || 0,
                l = (l || 0) * a,
                [Qw, Kw].indexOf(r) >= 0 ? {
                  x: l,
                  y: i
                }: {
                  x: i,
                  y: l
                }
              } (n, t.rects, o),
              e
            }), {}),
            l = i[t.placement],
            s = l.x,
            c = l.y;
            null != t.modifiersData.popperOffsets && (t.modifiersData.popperOffsets.x += s, t.modifiersData.popperOffsets.y += c),
            t.modifiersData[r] = i
          }
        },
        Sk = {
          left: "right",
          right: "left",
          bottom: "top",
          top: "bottom"
        };
        function Ek(e) {
          return e.replace(/left|right|bottom|top/g, (function(e) {
            return Sk[e]
          }))
        }
        var Ck = {
          start: "end",
          end: "start"
        };
        function Ak(e) {
          return e.replace(/start|end/g, (function(e) {
            return Ck[e]
          }))
        }
        function Pk(e, t) {
          var n = t.getRootNode && t.getRootNode();
          if (e.contains(t)) return ! 0;
          if (n && Aw(n)) {
            var r = t;
            do {
              if (r && e.isSameNode(r)) return ! 0;
              r = r.parentNode || r.host
            } while ( r )
          }
          return ! 1
        }
        function Tk(e) {
          return Object.assign({},
          e, {
            left: e.x,
            top: e.y,
            right: e.x + e.width,
            bottom: e.y + e.height
          })
        }
        function zk(e, t, n) {
          return t === nk ? Tk(function(e, t) {
            var n = Sw(e),
            r = Bw(e),
            a = n.visualViewport,
            o = r.clientWidth,
            i = r.clientHeight,
            l = 0,
            s = 0;
            if (a) {
              o = a.width,
              i = a.height;
              var c = Rw(); (c || !c && "fixed" === t) && (l = a.offsetLeft, s = a.offsetTop)
            }
            return {
              width: o,
              height: i,
              x: l + Lw(e),
              y: s
            }
          } (e, n)) : Ew(t) ?
          function(e, t) {
            var n = Mw(e, !1, "fixed" === t);
            return n.top = n.top + e.clientTop,
            n.left = n.left + e.clientLeft,
            n.bottom = n.top + e.clientHeight,
            n.right = n.left + e.clientWidth,
            n.width = e.clientWidth,
            n.height = e.clientHeight,
            n.x = n.left,
            n.y = n.top,
            n
          } (t, n) : Tk(function(e) {
            var t, n = Bw(e),
            r = Nw(e),
            a = null == (t = e.ownerDocument) ? void 0 : t.body,
            o = Pw(n.scrollWidth, n.clientWidth, a ? a.scrollWidth: 0, a ? a.clientWidth: 0),
            i = Pw(n.scrollHeight, n.clientHeight, a ? a.scrollHeight: 0, a ? a.clientHeight: 0),
            l = -r.scrollLeft + Lw(e),
            s = -r.scrollTop;
            return "rtl" === Fw(a || n).direction && (l += Pw(n.clientWidth, a ? a.clientWidth: 0) - o),
            {
              width: o,
              height: i,
              x: l,
              y: s
            }
          } (Bw(e)))
        }
        function jk(e, t, n, r) {
          var a = "clippingParents" === t ?
          function(e) {
            var t = Hw(Ww(e)),
            n = ["absolute", "fixed"].indexOf(Fw(e).position) >= 0 && Cw(e) ? Gw(e) : e;
            return Ew(n) ? t.filter((function(e) {
              return Ew(e) && Pk(e, n) && "body" !== Ow(e)
            })) : []
          } (e) : [].concat(t),
          o = [].concat(a, [n]),
          i = o[0],
          l = o.reduce((function(t, n) {
            var a = zk(e, n, r);
            return t.top = Pw(a.top, t.top),
            t.right = Tw(a.right, t.right),
            t.bottom = Tw(a.bottom, t.bottom),
            t.left = Pw(a.left, t.left),
            t
          }), zk(e, i, r));
          return l.width = l.right - l.left,
          l.height = l.bottom - l.top,
          l.x = l.left,
          l.y = l.top,
          l
        }
        function Rk(e) {
          return Object.assign({},
          {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          },
          e)
        }
        function Mk(e, t) {
          return t.reduce((function(t, n) {
            return t[n] = e,
            t
          }), {})
        }
        function Nk(e, t) {
          void 0 === t && (t = {});
          var n = t,
          r = n.placement,
          a = void 0 === r ? e.placement: r,
          o = n.strategy,
          i = void 0 === o ? e.strategy: o,
          l = n.boundary,
          s = void 0 === l ? "clippingParents": l,
          c = n.rootBoundary,
          u = void 0 === c ? nk: c,
          d = n.elementContext,
          f = void 0 === d ? rk: d,
          p = n.altBoundary,
          g = void 0 !== p && p,
          v = n.padding,
          m = void 0 === v ? 0 : v,
          h = Rk("number" !== typeof m ? m: Mk(m, Jw)),
          y = f === rk ? "reference": rk,
          b = e.rects.popper,
          x = e.elements[g ? y: f],
          w = jk(Ew(x) ? x: x.contextElement || Bw(e.elements.popper), s, u, i),
          k = Mw(e.elements.reference),
          _ = hk({
            reference: k,
            element: b,
            strategy: "absolute",
            placement: a
          }),
          S = Tk(Object.assign({},
          b, _)),
          E = f === rk ? S: k,
          C = {
            top: w.top - E.top + h.top,
            bottom: E.bottom - w.bottom + h.bottom,
            left: w.left - E.left + h.left,
            right: E.right - w.right + h.right
          },
          A = e.modifiersData.offset;
          if (f === rk && A) {
            var P = A[a];
            Object.keys(C).forEach((function(e) {
              var t = [Kw, Xw].indexOf(e) >= 0 ? 1 : -1,
              n = [Yw, Xw].indexOf(e) >= 0 ? "y": "x";
              C[e] += P[n] * t
            }))
          }
          return C
        }
        var Ok = {
          name: "flip",
          enabled: !0,
          phase: "main",
          fn: function(e) {
            var t = e.state,
            n = e.options,
            r = e.name;
            if (!t.modifiersData[r]._skip) {
              for (var a = n.mainAxis,
              o = void 0 === a || a,
              i = n.altAxis,
              l = void 0 === i || i,
              s = n.fallbackPlacements,
              c = n.padding,
              u = n.boundary,
              d = n.rootBoundary,
              f = n.altBoundary,
              p = n.flipVariations,
              g = void 0 === p || p,
              v = n.allowedAutoPlacements,
              m = t.options.placement,
              h = gk(m), y = s || (h === m || !g ? [Ek(m)] : function(e) {
                if (gk(e) === Zw) return [];
                var t = Ek(e);
                return [Ak(e), t, Ak(t)]
              } (m)), b = [m].concat(y).reduce((function(e, n) {
                return e.concat(gk(n) === Zw ?
                function(e, t) {
                  void 0 === t && (t = {});
                  var n = t,
                  r = n.placement,
                  a = n.boundary,
                  o = n.rootBoundary,
                  i = n.padding,
                  l = n.flipVariations,
                  s = n.allowedAutoPlacements,
                  c = void 0 === s ? ok: s,
                  u = vk(r),
                  d = u ? l ? ak: ak.filter((function(e) {
                    return vk(e) === u
                  })) : Jw,
                  f = d.filter((function(e) {
                    return c.indexOf(e) >= 0
                  }));
                  0 === f.length && (f = d);
                  var p = f.reduce((function(t, n) {
                    return t[n] = Nk(e, {
                      placement: n,
                      boundary: a,
                      rootBoundary: o,
                      padding: i
                    })[gk(n)],
                    t
                  }), {});
                  return Object.keys(p).sort((function(e, t) {
                    return p[e] - p[t]
                  }))
                } (t, {
                  placement: n,
                  boundary: u,
                  rootBoundary: d,
                  padding: c,
                  flipVariations: g,
                  allowedAutoPlacements: v
                }) : n)
              }), []), x = t.rects.reference, w = t.rects.popper, k = new Map, _ = !0, S = b[0], E = 0; E < b.length; E++) {
                var C = b[E],
                A = gk(C),
                P = vk(C) === ek,
                T = [Yw, Xw].indexOf(A) >= 0,
                z = T ? "width": "height",
                j = Nk(t, {
                  placement: C,
                  boundary: u,
                  rootBoundary: d,
                  altBoundary: f,
                  padding: c
                }),
                R = T ? P ? Kw: Qw: P ? Xw: Yw;
                x[z] > w[z] && (R = Ek(R));
                var M = Ek(R),
                N = [];
                if (o && N.push(j[A] <= 0), l && N.push(j[R] <= 0, j[M] <= 0), N.every((function(e) {
                  return e
                }))) {
                  S = C,
                  _ = !1;
                  break
                }
                k.set(C, N)
              }
              if (_) for (var O = function(e) {
                var t = b.find((function(t) {
                  var n = k.get(t);
                  if (n) return n.slice(0, e).every((function(e) {
                    return e
                  }))
                }));
                if (t) return S = t,
                "break"
              },
              B = g ? 3 : 1; B > 0; B--) {
                if ("break" === O(B)) break
              }
              t.placement !== S && (t.modifiersData[r]._skip = !0, t.placement = S, t.reset = !0)
            }
          },
          requiresIfExists: ["offset"],
          data: {
            _skip: !1
          }
        };
        function Bk(e, t, n) {
          return Pw(e, Tw(t, n))
        }
        var Lk = {
          name: "preventOverflow",
          enabled: !0,
          phase: "main",
          fn: function(e) {
            var t = e.state,
            n = e.options,
            r = e.name,
            a = n.mainAxis,
            o = void 0 === a || a,
            i = n.altAxis,
            l = void 0 !== i && i,
            s = n.boundary,
            c = n.rootBoundary,
            u = n.altBoundary,
            d = n.padding,
            f = n.tether,
            p = void 0 === f || f,
            g = n.tetherOffset,
            v = void 0 === g ? 0 : g,
            m = Nk(t, {
              boundary: s,
              rootBoundary: c,
              padding: d,
              altBoundary: u
            }),
            h = gk(t.placement),
            y = vk(t.placement),
            b = !y,
            x = mk(h),
            w = "x" === x ? "y": "x",
            k = t.modifiersData.popperOffsets,
            _ = t.rects.reference,
            S = t.rects.popper,
            E = "function" === typeof v ? v(Object.assign({},
            t.rects, {
              placement: t.placement
            })) : v,
            C = "number" === typeof E ? {
              mainAxis: E,
              altAxis: E
            }: Object.assign({
              mainAxis: 0,
              altAxis: 0
            },
            E),
            A = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
            P = {
              x: 0,
              y: 0
            };
            if (k) {
              if (o) {
                var T, z = "y" === x ? Yw: Qw,
                j = "y" === x ? Xw: Kw,
                R = "y" === x ? "height": "width",
                M = k[x],
                N = M + m[z],
                O = M - m[j],
                B = p ? -S[R] / 2 : 0,
                L = y === ek ? _[R] : S[R],
                F = y === ek ? -S[R] : -_[R],
                D = t.elements.arrow,
                I = p && D ? Vw(D) : {
                  width: 0,
                  height: 0
                },
                V = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding: {
                  top: 0,
                  right: 0,
                  bottom: 0,
                  left: 0
                },
                W = V[z],
                U = V[j],
                H = Bk(0, _[R], I[R]),
                $ = b ? _[R] / 2 - B - H - W - C.mainAxis: L - H - W - C.mainAxis,
                q = b ? -_[R] / 2 + B + H + U + C.mainAxis: F + H + U + C.mainAxis,
                G = t.elements.arrow && Gw(t.elements.arrow),
                Y = G ? "y" === x ? G.clientTop || 0 : G.clientLeft || 0 : 0,
                X = null != (T = null == A ? void 0 : A[x]) ? T: 0,
                K = M + q - X,
                Q = Bk(p ? Tw(N, M + $ - X - Y) : N, M, p ? Pw(O, K) : O);
                k[x] = Q,
                P[x] = Q - M
              }
              if (l) {
                var Z, J = "x" === x ? Yw: Qw,
                ee = "x" === x ? Xw: Kw,
                te = k[w],
                ne = "y" === w ? "height": "width",
                re = te + m[J],
                ae = te - m[ee],
                oe = -1 !== [Yw, Qw].indexOf(h),
                ie = null != (Z = null == A ? void 0 : A[w]) ? Z: 0,
                le = oe ? re: te - _[ne] - S[ne] - ie + C.altAxis,
                se = oe ? te + _[ne] + S[ne] - ie - C.altAxis: ae,
                ce = p && oe ?
                function(e, t, n) {
                  var r = Bk(e, t, n);
                  return r > n ? n: r
                } (le, te, se) : Bk(p ? le: re, te, p ? se: ae);
                k[w] = ce,
                P[w] = ce - te
              }
              t.modifiersData[r] = P
            }
          },
          requiresIfExists: ["offset"]
        };
        var Fk = {
          name: "arrow",
          enabled: !0,
          phase: "main",
          fn: function(e) {
            var t, n = e.state,
            r = e.name,
            a = e.options,
            o = n.elements.arrow,
            i = n.modifiersData.popperOffsets,
            l = gk(n.placement),
            s = mk(l),
            c = [Qw, Kw].indexOf(l) >= 0 ? "height": "width";
            if (o && i) {
              var u = function(e, t) {
                return Rk("number" !== typeof(e = "function" === typeof e ? e(Object.assign({},
                t.rects, {
                  placement: t.placement
                })) : e) ? e: Mk(e, Jw))
              } (a.padding, n),
              d = Vw(o),
              f = "y" === s ? Yw: Qw,
              p = "y" === s ? Xw: Kw,
              g = n.rects.reference[c] + n.rects.reference[s] - i[s] - n.rects.popper[c],
              v = i[s] - n.rects.reference[s],
              m = Gw(o),
              h = m ? "y" === s ? m.clientHeight || 0 : m.clientWidth || 0 : 0,
              y = g / 2 - v / 2,
              b = u[f],
              x = h - d[c] - u[p],
              w = h / 2 - d[c] / 2 + y,
              k = Bk(b, w, x),
              _ = s;
              n.modifiersData[r] = ((t = {})[_] = k, t.centerOffset = k - w, t)
            }
          },
          effect: function(e) {
            var t = e.state,
            n = e.options.element,
            r = void 0 === n ? "[data-popper-arrow]": n;
            null != r && ("string" !== typeof r || (r = t.elements.popper.querySelector(r))) && Pk(t.elements.popper, r) && (t.elements.arrow = r)
          },
          requires: ["popperOffsets"],
          requiresIfExists: ["preventOverflow"]
        };
        function Dk(e, t, n) {
          return void 0 === n && (n = {
            x: 0,
            y: 0
          }),
          {
            top: e.top - t.height - n.y,
            right: e.right - t.width + n.x,
            bottom: e.bottom - t.height + n.y,
            left: e.left - t.width - n.x
          }
        }
        function Ik(e) {
          return [Yw, Kw, Xw, Qw].some((function(t) {
            return e[t] >= 0
          }))
        }
        var Vk = {
          name: "hide",
          enabled: !0,
          phase: "main",
          requiresIfExists: ["preventOverflow"],
          fn: function(e) {
            var t = e.state,
            n = e.name,
            r = t.rects.reference,
            a = t.rects.popper,
            o = t.modifiersData.preventOverflow,
            i = Nk(t, {
              elementContext: "reference"
            }),
            l = Nk(t, {
              altBoundary: !0
            }),
            s = Dk(i, r),
            c = Dk(l, a, o),
            u = Ik(s),
            d = Ik(c);
            t.modifiersData[n] = {
              referenceClippingOffsets: s,
              popperEscapeOffsets: c,
              isReferenceHidden: u,
              hasPopperEscaped: d
            },
            t.attributes.popper = Object.assign({},
            t.attributes.popper, {
              "data-popper-reference-hidden": u,
              "data-popper-escaped": d
            })
          }
        },
        Wk = dk({
          defaultModifiers: [pk, yk, wk, kk, _k, Ok, Lk, Fk, Vk]
        }),
        Uk = ["size", "shadowColor", "bg", "style"],
        Hk = function(e, t) {
          return {
            var: e,
            varRef: t ? "var(".concat(e, ", ").concat(t, ")") : "var(".concat(e, ")")
          }
        },
        $k = {
          arrowShadowColor: Hk("--popper-arrow-shadow-color"),
          arrowSize: Hk("--popper-arrow-size", "8px"),
          arrowSizeHalf: Hk("--popper-arrow-size-half"),
          arrowBg: Hk("--popper-arrow-bg"),
          transformOrigin: Hk("--popper-transform-origin"),
          arrowOffset: Hk("--popper-arrow-offset")
        };
        var qk = {
          top: "bottom center",
          "top-start": "bottom left",
          "top-end": "bottom right",
          bottom: "top center",
          "bottom-start": "top left",
          "bottom-end": "top right",
          left: "right center",
          "left-start": "right top",
          "left-end": "right bottom",
          right: "left center",
          "right-start": "left top",
          "right-end": "left bottom"
        },
        Gk = {
          scroll: !0,
          resize: !0
        };
        function Yk(e) {
          return "object" === typeof e ? {
            enabled: !0,
            options: c(c({},
            Gk), e)
          }: {
            enabled: e,
            options: Gk
          }
        }
        var Xk = {
          name: "matchWidth",
          enabled: !0,
          phase: "beforeWrite",
          requires: ["computeStyles"],
          fn: function(e) {
            var t = e.state;
            t.styles.popper.width = "".concat(t.rects.reference.width, "px")
          },
          effect: function(e) {
            var t = e.state;
            return function() {
              var e = t.elements.reference;
              t.elements.popper.style.width = "".concat(e.offsetWidth, "px")
            }
          }
        },
        Kk = {
          name: "transformOrigin",
          enabled: !0,
          phase: "write",
          fn: function(e) {
            var t = e.state;
            Qk(t)
          },
          effect: function(e) {
            var t = e.state;
            return function() {
              Qk(t)
            }
          }
        },
        Qk = function(e) {
          var t;
          e.elements.popper.style.setProperty($k.transformOrigin.
          var, (t = e.placement, qk[t]))
        },
        Zk = {
          name: "positionArrow",
          enabled: !0,
          phase: "afterWrite",
          fn: function(e) {
            var t = e.state;
            Jk(t)
          }
        },
        Jk = function(e) {
          var t;
          if (e.placement) {
            var n = e_(e.placement);
            if ((null == (t = e.elements) ? void 0 : t.arrow) && n) {
              var r, a;
              Object.assign(e.elements.arrow.style, (l(r = {},
              n.property, n.value), l(r, "width", $k.arrowSize.varRef), l(r, "height", $k.arrowSize.varRef), l(r, "zIndex", -1), r));
              var o = (l(a = {},
              $k.arrowSizeHalf.
              var, "calc(".concat($k.arrowSize.varRef, " / 2)")), l(a, $k.arrowOffset.
              var, "calc(".concat($k.arrowSizeHalf.varRef, " * -1)")), a);
              for (var i in o) e.elements.arrow.style.setProperty(i, o[i])
            }
          }
        },
        e_ = function(e) {
          return e.startsWith("top") ? {
            property: "bottom",
            value: $k.arrowOffset.varRef
          }: e.startsWith("bottom") ? {
            property: "top",
            value: $k.arrowOffset.varRef
          }: e.startsWith("left") ? {
            property: "right",
            value: $k.arrowOffset.varRef
          }: e.startsWith("right") ? {
            property: "left",
            value: $k.arrowOffset.varRef
          }: void 0
        },
        t_ = {
          name: "innerArrow",
          enabled: !0,
          phase: "main",
          requires: ["arrow"],
          fn: function(e) {
            var t = e.state;
            n_(t)
          },
          effect: function(e) {
            var t = e.state;
            return function() {
              n_(t)
            }
          }
        },
        n_ = function(e) {
          if (e.elements.arrow) {
            var t, n = e.elements.arrow.querySelector("[data-popper-arrow-inner]");
            if (n) Object.assign(n.style, {
              transform: "rotate(45deg)",
              background: $k.arrowBg.varRef,
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              position: "absolute",
              zIndex: "inherit",
              boxShadow: (t = e.placement, t.includes("top") ? "1px 1px 1px 0 var(--popper-arrow-shadow-color)": t.includes("bottom") ? "-1px -1px 1px 0 var(--popper-arrow-shadow-color)": t.includes("right") ? "-1px 1px 1px 0 var(--popper-arrow-shadow-color)": t.includes("left") ? "1px -1px 1px 0 var(--popper-arrow-shadow-color)": void 0)
            })
          }
        },
        r_ = {
          "start-start": {
            ltr: "left-start",
            rtl: "right-start"
          },
          "start-end": {
            ltr: "left-end",
            rtl: "right-end"
          },
          "end-start": {
            ltr: "right-start",
            rtl: "left-start"
          },
          "end-end": {
            ltr: "right-end",
            rtl: "left-end"
          },
          start: {
            ltr: "left",
            rtl: "right"
          },
          end: {
            ltr: "right",
            rtl: "left"
          }
        },
        a_ = {
          "auto-start": "auto-end",
          "auto-end": "auto-start",
          "top-start": "top-end",
          "top-end": "top-start",
          "bottom-start": "bottom-end",
          "bottom-end": "bottom-start"
        };
        function o_(e) {
          var t, n, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "ltr",
          a = (null == (n = r_[e]) ? void 0 : n[r]) || e;
          return "ltr" === r ? a: null !== (t = a_[e]) && void 0 !== t ? t: a
        }
        function i_() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          n = t.enabled,
          r = void 0 === n || n,
          a = t.modifiers,
          o = t.placement,
          i = void 0 === o ? "bottom": o,
          l = t.strategy,
          s = void 0 === l ? "absolute": l,
          d = t.arrowPadding,
          f = void 0 === d ? 8 : d,
          p = t.eventListeners,
          g = void 0 === p || p,
          v = t.offset,
          m = t.gutter,
          h = void 0 === m ? 8 : m,
          y = t.flip,
          b = void 0 === y || y,
          x = t.boundary,
          w = void 0 === x ? "clippingParents": x,
          k = t.preventOverflow,
          _ = void 0 === k || k,
          S = t.matchWidth,
          E = t.direction,
          C = void 0 === E ? "ltr": E,
          A = (0, e.useRef)(null),
          P = (0, e.useRef)(null),
          T = (0, e.useRef)(null),
          z = o_(i, C),
          j = (0, e.useRef)((function() {})),
          R = (0, e.useCallback)((function() {
            var e;
            r && A.current && P.current && (null == (e = j.current) || e.call(j), T.current = Wk(A.current, P.current, {
              placement: z,
              modifiers: [t_, Zk, Kk, c(c({},
              Xk), {},
              {
                enabled: !!S
              }), c({
                name: "eventListeners"
              },
              Yk(g)), {
                name: "arrow",
                options: {
                  padding: f
                }
              },
              {
                name: "offset",
                options: {
                  offset: null !== v && void 0 !== v ? v: [0, h]
                }
              },
              {
                name: "flip",
                enabled: !!b,
                options: {
                  padding: 8
                }
              },
              {
                name: "preventOverflow",
                enabled: !!_,
                options: {
                  boundary: w
                }
              }].concat(pt(null !== a && void 0 !== a ? a: [])),
              strategy: s
            }), T.current.forceUpdate(), j.current = T.current.destroy)
          }), [z, r, a, S, g, f, v, h, b, _, w, s]); (0, e.useEffect)((function() {
            return function() {
              var e;
              A.current || P.current || (null == (e = T.current) || e.destroy(), T.current = null)
            }
          }), []);
          var M = (0, e.useCallback)((function(e) {
            A.current = e,
            R()
          }), [R]),
          N = (0, e.useCallback)((function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            return c(c({},
            e), {},
            {
              ref: _w(M, t)
            })
          }), [M]),
          O = (0, e.useCallback)((function(e) {
            P.current = e,
            R()
          }), [R]),
          B = (0, e.useCallback)((function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            return c(c({},
            e), {},
            {
              ref: _w(O, t),
              style: c(c({},
              e.style), {},
              {
                position: s,
                minWidth: S ? void 0 : "max-content",
                inset: "0 auto auto 0"
              })
            })
          }), [s, O, S]),
          L = (0, e.useCallback)((function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            n = (e.size, e.shadowColor, e.bg, e.style, u(e, Uk));
            return c(c({},
            n), {},
            {
              ref: t,
              "data-popper-arrow": "",
              style: l_(e)
            })
          }), []),
          F = (0, e.useCallback)((function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            return c(c({},
            e), {},
            {
              ref: t,
              "data-popper-arrow-inner": ""
            })
          }), []);
          return {
            update: function() {
              var e;
              null == (e = T.current) || e.update()
            },
            forceUpdate: function() {
              var e;
              null == (e = T.current) || e.forceUpdate()
            },
            transformOrigin: $k.transformOrigin.varRef,
            referenceRef: M,
            popperRef: O,
            getPopperProps: B,
            getArrowProps: L,
            getArrowInnerProps: F,
            getReferenceProps: N
          }
        }
        function l_(e) {
          var t = e.size,
          n = e.shadowColor,
          r = e.bg,
          a = c(c({},
          e.style), {},
          {
            position: "absolute"
          });
          return t && (a["--popper-arrow-size"] = t),
          n && (a["--popper-arrow-shadow-color"] = n),
          r && (a["--popper-arrow-bg"] = r),
          a
        }
        function s_(t, n, r, a) {
          var o = ff(r);
          return (0, e.useEffect)((function() {
            var e = "function" === typeof t ? t() : null !== t && void 0 !== t ? t: document;
            if (r && e) return e.addEventListener(n, o, a),
            function() {
              e.removeEventListener(n, o, a)
            }
          }), [n, t, a, o, r]),
          function() {
            var e = "function" === typeof t ? t() : null !== t && void 0 !== t ? t: document;
            null == e || e.removeEventListener(n, o, a)
          }
        }
        function c_() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          n = t.onClose,
          r = t.onOpen,
          a = t.isOpen,
          o = t.id,
          i = ff(r),
          l = ff(n),
          s = (0, e.useState)(t.defaultIsOpen || !1),
          u = Ye(s, 2),
          d = u[0],
          f = u[1],
          p = void 0 !== a ? a: d,
          g = void 0 !== a,
          v = (0, e.useId)(),
          m = null !== o && void 0 !== o ? o: "disclosure-".concat(v),
          h = (0, e.useCallback)((function() {
            g || f(!1),
            null == l || l()
          }), [g, l]),
          y = (0, e.useCallback)((function() {
            g || f(!0),
            null == i || i()
          }), [g, i]),
          b = (0, e.useCallback)((function() {
            p ? h() : y()
          }), [p, y, h]);
          function x() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return c(c({},
            e), {},
            {
              "aria-expanded": p,
              "aria-controls": m,
              onClick: function(t) {
                var n;
                null == (n = e.onClick) || n.call(e, t),
                b()
              }
            })
          }
          function w() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return c(c({},
            e), {},
            {
              hidden: !p,
              id: m
            })
          }
          return {
            isOpen: p,
            onOpen: y,
            onClose: h,
            onToggle: b,
            isControlled: g,
            getButtonProps: x,
            getDisclosureProps: w
          }
        }
        var u_ = ["openDelay", "closeDelay", "closeOnClick", "closeOnMouseDown", "closeOnScroll", "closeOnPointerDown", "closeOnEsc", "onOpen", "onClose", "placement", "id", "isOpen", "defaultIsOpen", "arrowSize", "arrowShadowColor", "arrowPadding", "modifiers", "isDisabled", "gutter", "offset", "direction"],
        d_ = ["children", "label", "shouldWrapChildren", "aria-label", "hasArrow", "bg", "portalProps", "background", "backgroundColor", "bgColor", "motionProps"];
        var f_ = {
          exit: {
            scale: .85,
            opacity: 0,
            transition: {
              opacity: {
                duration: .15,
                easings: "easeInOut"
              },
              scale: {
                duration: .2,
                easings: "easeInOut"
              }
            }
          },
          enter: {
            scale: 1,
            opacity: 1,
            transition: {
              opacity: {
                easings: "easeOut",
                duration: .2
              },
              scale: {
                duration: .2,
                ease: [.175, .885, .4, 1.1]
              }
            }
          }
        };
        function p_() {
          for (var e = arguments.length,
          t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
          return function(e) {
            t.some((function(t) {
              return null == t || t(e),
              null == e ? void 0 : e.defaultPrevented
            }))
          }
        }
        var g_ = function(e) {
          var t;
          return (null == (t = e.current) ? void 0 : t.ownerDocument) || document
        },
        v_ = function(e) {
          var t, n;
          return (null == (n = null == (t = e.current) ? void 0 : t.ownerDocument) ? void 0 : n.defaultView) || window
        };
        var m_ = "chakra-ui:close-tooltip";
        function h_(t, n) {
          return (0, e.useEffect)((function() {
            var e = g_(t);
            return e.addEventListener(m_, n),
            function() {
              return e.removeEventListener(m_, n)
            }
          }), [n, t]),
          function() {
            var e = g_(t),
            n = v_(t);
            e.dispatchEvent(new n.CustomEvent(m_))
          }
        }
        var y_ = va(mb.div),
        b_ = da((function(t, n) {
          var r, a, o = pa("Tooltip", t),
          i = zr(t),
          s = Jr(),
          d = i.children,
          f = i.label,
          p = i.shouldWrapChildren,
          g = i["aria-label"],
          v = i.hasArrow,
          m = i.bg,
          h = i.portalProps,
          y = i.background,
          b = i.backgroundColor,
          x = i.bgColor,
          w = i.motionProps,
          k = u(i, d_),
          _ = null !== (r = null !== (a = null !== y && void 0 !== y ? y: b) && void 0 !== a ? a: m) && void 0 !== r ? r: x;
          if (_) {
            o.bg = _;
            var S = function(e, t, n) {
              var r, a, o;
              return null !== (r = null == (o = null == (a = e.__cssMap) ? void 0 : a["".concat(t, ".").concat(n)]) ? void 0 : o.varRef) && void 0 !== r ? r: n
            } (s, "colors", _);
            o[$k.arrowBg.
            var] = S
          }
          var E, C = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            n = t.openDelay,
            r = void 0 === n ? 0 : n,
            a = t.closeDelay,
            o = void 0 === a ? 0 : a,
            i = t.closeOnClick,
            s = void 0 === i || i,
            d = t.closeOnMouseDown,
            f = t.closeOnScroll,
            p = t.closeOnPointerDown,
            g = void 0 === p ? d: p,
            v = t.closeOnEsc,
            m = void 0 === v || v,
            h = t.onOpen,
            y = t.onClose,
            b = t.placement,
            x = t.id,
            w = t.isOpen,
            k = t.defaultIsOpen,
            _ = t.arrowSize,
            S = void 0 === _ ? 10 : _,
            E = t.arrowShadowColor,
            C = t.arrowPadding,
            A = t.modifiers,
            P = t.isDisabled,
            T = t.gutter,
            z = t.offset,
            j = t.direction,
            R = u(t, u_),
            M = c_({
              isOpen: w,
              defaultIsOpen: k,
              onOpen: h,
              onClose: y
            }),
            N = M.isOpen,
            O = M.onOpen,
            B = M.onClose,
            L = i_({
              enabled: N,
              placement: b,
              arrowPadding: C,
              modifiers: A,
              gutter: T,
              offset: z,
              direction: j
            }),
            F = L.referenceRef,
            D = L.getPopperProps,
            I = L.getArrowInnerProps,
            V = L.getArrowProps,
            W = (0, e.useId)(),
            U = null !== x && void 0 !== x ? x: W,
            H = "tooltip-".concat(U),
            $ = (0, e.useRef)(null),
            q = (0, e.useRef)(),
            G = (0, e.useCallback)((function() {
              q.current && (clearTimeout(q.current), q.current = void 0)
            }), []),
            Y = (0, e.useRef)(),
            X = (0, e.useCallback)((function() {
              Y.current && (clearTimeout(Y.current), Y.current = void 0)
            }), []),
            K = (0, e.useCallback)((function() {
              X(),
              B()
            }), [B, X]),
            Q = h_($, K),
            Z = (0, e.useCallback)((function() {
              if (!P && !q.current) {
                Q();
                var e = v_($);
                q.current = e.setTimeout(O, r)
              }
            }), [Q, P, O, r]),
            J = (0, e.useCallback)((function() {
              G();
              var e = v_($);
              Y.current = e.setTimeout(K, o)
            }), [o, K, G]),
            ee = (0, e.useCallback)((function() {
              N && s && J()
            }), [s, J, N]),
            te = (0, e.useCallback)((function() {
              N && g && J()
            }), [g, J, N]),
            ne = (0, e.useCallback)((function(e) {
              N && "Escape" === e.key && J()
            }), [N, J]);
            s_((function() {
              return g_($)
            }), "keydown", m ? ne: void 0),
            s_((function() {
              return g_($)
            }), "scroll", (function() {
              N && f && K()
            })),
            (0, e.useEffect)((function() {
              P && (G(), N && B())
            }), [P, N, B, G]),
            (0, e.useEffect)((function() {
              return function() {
                G(),
                X()
              }
            }), [G, X]),
            s_((function() {
              return $.current
            }), "pointerleave", J);
            var re = (0, e.useCallback)((function() {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
              return c(c({},
              e), {},
              {
                ref: _w($, t, F),
                onPointerEnter: p_(e.onPointerEnter, (function(e) {
                  "touch" !== e.pointerType && Z()
                })),
                onClick: p_(e.onClick, ee),
                onPointerDown: p_(e.onPointerDown, te),
                onFocus: p_(e.onFocus, Z),
                onBlur: p_(e.onBlur, J),
                "aria-describedby": N ? H: void 0
              })
            }), [Z, J, te, N, H, ee, F]),
            ae = (0, e.useCallback)((function() {
              var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
              return D(c(c({},
              t), {},
              {
                style: c(c({},
                t.style), {},
                (e = {},
                l(e, $k.arrowSize.
                var, S ? "".concat(S, "px") : void 0), l(e, $k.arrowShadowColor.
                var, E), e))
              }), n)
            }), [D, S, E]),
            oe = (0, e.useCallback)((function() {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              n = c(c({},
              e.style), {},
              {
                position: "relative",
                transformOrigin: $k.transformOrigin.varRef
              });
              return c(c(c({
                ref: t
              },
              R), e), {},
              {
                id: H,
                role: "tooltip",
                style: n
              })
            }), [R, H]);
            return {
              isOpen: N,
              show: Z,
              hide: J,
              getTriggerProps: re,
              getTooltipProps: oe,
              getTooltipPositionerProps: ae,
              getArrowProps: V,
              getArrowInnerProps: I
            }
          } (c(c({},
          k), {},
          {
            direction: s.direction
          }));
          if ("string" === typeof d || p) E = e.createElement(va.span, c({
            display: "inline-block",
            tabIndex: 0
          },
          C.getTriggerProps()), d);
          else {
            var A = e.Children.only(d);
            E = (0, e.cloneElement)(A, C.getTriggerProps(A.props, A.ref))
          }
          var P = !!g,
          T = C.getTooltipProps({},
          n),
          z = P ?
          function(e) {
            var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
            r = Object.assign({},
            e),
            a = zt(n);
            try {
              for (a.s(); ! (t = a.n()).done;) {
                var o = t.value;
                o in r && delete r[o]
              }
            } catch(i) {
              a.e(i)
            } finally {
              a.f()
            }
            return r
          } (T, ["role", "id"]) : T,
          j = function(e, t) {
            var n, r = {},
            a = zt(t);
            try {
              for (a.s(); ! (n = a.n()).done;) {
                var o = n.value;
                o in e && (r[o] = e[o])
              }
            } catch(i) {
              a.e(i)
            } finally {
              a.f()
            }
            return r
          } (T, ["role", "id"]);
          return f ? e.createElement(e.Fragment, null, E, e.createElement(df, null, C.isOpen && e.createElement(dt, c({},
          h), e.createElement(va.div, c(c({},
          C.getTooltipPositionerProps()), {},
          {
            __css: {
              zIndex: o.zIndex,
              pointerEvents: "none"
            }
          }), e.createElement(y_, c(c(c({
            variants: f_,
            initial: "exit",
            animate: "enter",
            exit: "exit"
          },
          w), z), {},
          {
            __css: o
          }), f, P && e.createElement(va.span, c({
            srOnly: !0
          },
          j), g), v && e.createElement(va.div, {
            "data-popper-arrow": !0,
            className: "chakra-tooltip__arrow-wrapper"
          },
          e.createElement(va.div, {
            "data-popper-arrow-inner": !0,
            className: "chakra-tooltip__arrow",
            __css: {
              bg: o.bg
            }
          }))))))) : e.createElement(e.Fragment, null, d)
        }));
        b_.displayName = "Tooltip";
        var x_ = function(e) {
          var t = e.online,
          n = e.label,
          r = "light" === vt().colorMode ? "#C7D2FE": "#FFFFFF";
          return t ? (0, Mb.jsx)(b_, {
            label: n,
            children: (0, Mb.jsx)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              version: "1.1",
              className: "h-4 w-4",
              children: (0, Mb.jsx)("circle", {
                cx: "7",
                cy: "7",
                r: "5",
                stroke: r,
                strokeWidth: "1",
                fill: "#3bd672"
              })
            })
          }) : (0, Mb.jsx)(b_, {
            label: n,
            children: (0, Mb.jsx)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              version: "1.1",
              className: "h-4 w-4",
              children: (0, Mb.jsx)("circle", {
                cx: "7",
                cy: "7",
                r: "5",
                stroke: r,
                strokeWidth: "1",
                fill: "#F87171"
              })
            })
          })
        },
        w_ = new Map(Object.entries({
          ac: {
            capital: "Georgetown",
            code: "ac",
            continent: "Africa",
            flag_1x1: "flags/1x1/ac.svg",
            flag_4x3: "flags/4x3/ac.svg",
            iso: !1,
            name: "Ascension Island"
          },
          ad: {
            capital: "Andorra la Vella",
            code: "ad",
            continent: "Europe",
            flag_1x1: "flags/1x1/ad.svg",
            flag_4x3: "flags/4x3/ad.svg",
            iso: !0,
            name: "Andorra"
          },
          ae: {
            capital: "Abu Dhabi",
            code: "ae",
            continent: "Asia",
            flag_1x1: "flags/1x1/ae.svg",
            flag_4x3: "flags/4x3/ae.svg",
            iso: !0,
            name: "United Arab Emirates"
          },
          af: {
            capital: "Kabul",
            code: "af",
            continent: "Asia",
            flag_1x1: "flags/1x1/af.svg",
            flag_4x3: "flags/4x3/af.svg",
            iso: !0,
            name: "Afghanistan"
          },
          ag: {
            capital: "St. John's",
            code: "ag",
            continent: "North America",
            flag_1x1: "flags/1x1/ag.svg",
            flag_4x3: "flags/4x3/ag.svg",
            iso: !0,
            name: "Antigua and Barbuda"
          },
          ai: {
            capital: "The Valley",
            code: "ai",
            continent: "North America",
            flag_1x1: "flags/1x1/ai.svg",
            flag_4x3: "flags/4x3/ai.svg",
            iso: !0,
            name: "Anguilla"
          },
          al: {
            capital: "Tirana",
            code: "al",
            continent: "Europe",
            flag_1x1: "flags/1x1/al.svg",
            flag_4x3: "flags/4x3/al.svg",
            iso: !0,
            name: "Albania"
          },
          am: {
            capital: "Yerevan",
            code: "am",
            continent: "Asia",
            flag_1x1: "flags/1x1/am.svg",
            flag_4x3: "flags/4x3/am.svg",
            iso: !0,
            name: "Armenia"
          },
          ao: {
            capital: "Luanda",
            code: "ao",
            continent: "Africa",
            flag_1x1: "flags/1x1/ao.svg",
            flag_4x3: "flags/4x3/ao.svg",
            iso: !0,
            name: "Angola"
          },
          aq: {
            code: "aq",
            flag_1x1: "flags/1x1/aq.svg",
            flag_4x3: "flags/4x3/aq.svg",
            iso: !0,
            name: "Antarctica"
          },
          ar: {
            capital: "Buenos Aires",
            code: "ar",
            continent: "South America",
            flag_1x1: "flags/1x1/ar.svg",
            flag_4x3: "flags/4x3/ar.svg",
            iso: !0,
            name: "Argentina"
          },
          as: {
            capital: "Pago Pago",
            code: "as",
            continent: "Oceania",
            flag_1x1: "flags/1x1/as.svg",
            flag_4x3: "flags/4x3/as.svg",
            iso: !0,
            name: "American Samoa"
          },
          at: {
            capital: "Vienna",
            code: "at",
            continent: "Europe",
            flag_1x1: "flags/1x1/at.svg",
            flag_4x3: "flags/4x3/at.svg",
            iso: !0,
            name: "Austria"
          },
          au: {
            capital: "Canberra",
            code: "au",
            continent: "Oceania",
            flag_1x1: "flags/1x1/au.svg",
            flag_4x3: "flags/4x3/au.svg",
            iso: !0,
            name: "Australia"
          },
          aw: {
            capital: "Oranjestad",
            code: "aw",
            continent: "South America",
            flag_1x1: "flags/1x1/aw.svg",
            flag_4x3: "flags/4x3/aw.svg",
            iso: !0,
            name: "Aruba"
          },
          ax: {
            capital: "Mariehamn",
            code: "ax",
            continent: "Europe",
            flag_1x1: "flags/1x1/ax.svg",
            flag_4x3: "flags/4x3/ax.svg",
            iso: !0,
            name: "Aland Islands"
          },
          az: {
            capital: "Baku",
            code: "az",
            continent: "Asia",
            flag_1x1: "flags/1x1/az.svg",
            flag_4x3: "flags/4x3/az.svg",
            iso: !0,
            name: "Azerbaijan"
          },
          ba: {
            capital: "Sarajevo",
            code: "ba",
            continent: "Europe",
            flag_1x1: "flags/1x1/ba.svg",
            flag_4x3: "flags/4x3/ba.svg",
            iso: !0,
            name: "Bosnia and Herzegovina"
          },
          bb: {
            capital: "Bridgetown",
            code: "bb",
            continent: "North America",
            flag_1x1: "flags/1x1/bb.svg",
            flag_4x3: "flags/4x3/bb.svg",
            iso: !0,
            name: "Barbados"
          },
          bd: {
            capital: "Dhaka",
            code: "bd",
            continent: "Asia",
            flag_1x1: "flags/1x1/bd.svg",
            flag_4x3: "flags/4x3/bd.svg",
            iso: !0,
            name: "Bangladesh"
          },
          be: {
            capital: "Brussels",
            code: "be",
            continent: "Europe",
            flag_1x1: "flags/1x1/be.svg",
            flag_4x3: "flags/4x3/be.svg",
            iso: !0,
            name: "Belgium"
          },
          bf: {
            capital: "Ouagadougou",
            code: "bf",
            continent: "Africa",
            flag_1x1: "flags/1x1/bf.svg",
            flag_4x3: "flags/4x3/bf.svg",
            iso: !0,
            name: "Burkina Faso"
          },
          bg: {
            capital: "Sofia",
            code: "bg",
            continent: "Europe",
            flag_1x1: "flags/1x1/bg.svg",
            flag_4x3: "flags/4x3/bg.svg",
            iso: !0,
            name: "Bulgaria"
          },
          bh: {
            capital: "Manama",
            code: "bh",
            continent: "Asia",
            flag_1x1: "flags/1x1/bh.svg",
            flag_4x3: "flags/4x3/bh.svg",
            iso: !0,
            name: "Bahrain"
          },
          bi: {
            capital: "Bujumbura",
            code: "bi",
            continent: "Africa",
            flag_1x1: "flags/1x1/bi.svg",
            flag_4x3: "flags/4x3/bi.svg",
            iso: !0,
            name: "Burundi"
          },
          bj: {
            capital: "Porto-Novo",
            code: "bj",
            continent: "Africa",
            flag_1x1: "flags/1x1/bj.svg",
            flag_4x3: "flags/4x3/bj.svg",
            iso: !0,
            name: "Benin"
          },
          bl: {
            capital: "Gustavia",
            code: "bl",
            continent: "North America",
            flag_1x1: "flags/1x1/bl.svg",
            flag_4x3: "flags/4x3/bl.svg",
            iso: !0,
            name: "Saint Barth\xe9lemy"
          },
          bm: {
            capital: "Hamilton",
            code: "bm",
            continent: "North America",
            flag_1x1: "flags/1x1/bm.svg",
            flag_4x3: "flags/4x3/bm.svg",
            iso: !0,
            name: "Bermuda"
          },
          bn: {
            capital: "Bandar Seri Begawan",
            code: "bn",
            continent: "Asia",
            flag_1x1: "flags/1x1/bn.svg",
            flag_4x3: "flags/4x3/bn.svg",
            iso: !0,
            name: "Brunei Darussalam"
          },
          bo: {
            capital: "Sucre",
            code: "bo",
            continent: "South America",
            flag_1x1: "flags/1x1/bo.svg",
            flag_4x3: "flags/4x3/bo.svg",
            iso: !0,
            name: "Bolivia"
          },
          bq: {
            capital: "Kralendijk",
            code: "bq",
            continent: "South America",
            flag_1x1: "flags/1x1/bq.svg",
            flag_4x3: "flags/4x3/bq.svg",
            iso: !0,
            name: "Bonaire, Sint Eustatius and Saba"
          },
          br: {
            capital: "Bras\xedlia",
            code: "br",
            continent: "South America",
            flag_1x1: "flags/1x1/br.svg",
            flag_4x3: "flags/4x3/br.svg",
            iso: !0,
            name: "Brazil"
          },
          bs: {
            capital: "Nassau",
            code: "bs",
            continent: "North America",
            flag_1x1: "flags/1x1/bs.svg",
            flag_4x3: "flags/4x3/bs.svg",
            iso: !0,
            name: "Bahamas"
          },
          bt: {
            capital: "Thimphu",
            code: "bt",
            continent: "Asia",
            flag_1x1: "flags/1x1/bt.svg",
            flag_4x3: "flags/4x3/bt.svg",
            iso: !0,
            name: "Bhutan"
          },
          bv: {
            code: "bv",
            flag_1x1: "flags/1x1/bv.svg",
            flag_4x3: "flags/4x3/bv.svg",
            iso: !0,
            name: "Bouvet Island"
          },
          bw: {
            capital: "Gaborone",
            code: "bw",
            continent: "Africa",
            flag_1x1: "flags/1x1/bw.svg",
            flag_4x3: "flags/4x3/bw.svg",
            iso: !0,
            name: "Botswana"
          },
          by: {
            capital: "Minsk",
            code: "by",
            continent: "Europe",
            flag_1x1: "flags/1x1/by.svg",
            flag_4x3: "flags/4x3/by.svg",
            iso: !0,
            name: "Belarus"
          },
          bz: {
            capital: "Belmopan",
            code: "bz",
            continent: "North America",
            flag_1x1: "flags/1x1/bz.svg",
            flag_4x3: "flags/4x3/bz.svg",
            iso: !0,
            name: "Belize"
          },
          ca: {
            capital: "Ottawa",
            code: "ca",
            continent: "North America",
            flag_1x1: "flags/1x1/ca.svg",
            flag_4x3: "flags/4x3/ca.svg",
            iso: !0,
            name: "Canada"
          },
          cc: {
            capital: "West Island",
            code: "cc",
            continent: "Asia",
            flag_1x1: "flags/1x1/cc.svg",
            flag_4x3: "flags/4x3/cc.svg",
            iso: !0,
            name: "Cocos (Keeling) Islands"
          },
          cd: {
            capital: "Kinshasa",
            code: "cd",
            continent: "Africa",
            flag_1x1: "flags/1x1/cd.svg",
            flag_4x3: "flags/4x3/cd.svg",
            iso: !0,
            name: "Democratic Republic of the Congo"
          },
          cefta: {
            code: "cefta",
            flag_1x1: "flags/1x1/cefta.svg",
            flag_4x3: "flags/4x3/cefta.svg",
            iso: !1,
            name: "Central European Free Trade Agreement"
          },
          cf: {
            capital: "Bangui",
            code: "cf",
            continent: "Africa",
            flag_1x1: "flags/1x1/cf.svg",
            flag_4x3: "flags/4x3/cf.svg",
            iso: !0,
            name: "Central African Republic"
          },
          cg: {
            capital: "Brazzaville",
            code: "cg",
            continent: "Africa",
            flag_1x1: "flags/1x1/cg.svg",
            flag_4x3: "flags/4x3/cg.svg",
            iso: !0,
            name: "Republic of the Congo"
          },
          ch: {
            capital: "Bern",
            code: "ch",
            continent: "Europe",
            flag_1x1: "flags/1x1/ch.svg",
            flag_4x3: "flags/4x3/ch.svg",
            iso: !0,
            name: "Switzerland"
          },
          ci: {
            capital: "Yamoussoukro",
            code: "ci",
            continent: "Africa",
            flag_1x1: "flags/1x1/ci.svg",
            flag_4x3: "flags/4x3/ci.svg",
            iso: !0,
            name: "C\xf4te d'Ivoire"
          },
          ck: {
            capital: "Avarua",
            code: "ck",
            continent: "Oceania",
            flag_1x1: "flags/1x1/ck.svg",
            flag_4x3: "flags/4x3/ck.svg",
            iso: !0,
            name: "Cook Islands"
          },
          cl: {
            capital: "Santiago",
            code: "cl",
            continent: "South America",
            flag_1x1: "flags/1x1/cl.svg",
            flag_4x3: "flags/4x3/cl.svg",
            iso: !0,
            name: "Chile"
          },
          cm: {
            capital: "Yaound\xe9",
            code: "cm",
            continent: "Africa",
            flag_1x1: "flags/1x1/cm.svg",
            flag_4x3: "flags/4x3/cm.svg",
            iso: !0,
            name: "Cameroon"
          },
          cn: {
            capital: "Beijing",
            code: "cn",
            continent: "Asia",
            flag_1x1: "flags/1x1/cn.svg",
            flag_4x3: "flags/4x3/cn.svg",
            iso: !0,
            name: "China"
          },
          co: {
            capital: "Bogot\xe1",
            code: "co",
            continent: "South America",
            flag_1x1: "flags/1x1/co.svg",
            flag_4x3: "flags/4x3/co.svg",
            iso: !0,
            name: "Colombia"
          },
          cp: {
            code: "cp",
            flag_1x1: "flags/1x1/cp.svg",
            flag_4x3: "flags/4x3/cp.svg",
            iso: !1,
            name: "Clipperton Island"
          },
          cr: {
            capital: "San Jos\xe9",
            code: "cr",
            continent: "North America",
            flag_1x1: "flags/1x1/cr.svg",
            flag_4x3: "flags/4x3/cr.svg",
            iso: !0,
            name: "Costa Rica"
          },
          cu: {
            capital: "Havana",
            code: "cu",
            continent: "North America",
            flag_1x1: "flags/1x1/cu.svg",
            flag_4x3: "flags/4x3/cu.svg",
            iso: !0,
            name: "Cuba"
          },
          cv: {
            capital: "Praia",
            code: "cv",
            continent: "Africa",
            flag_1x1: "flags/1x1/cv.svg",
            flag_4x3: "flags/4x3/cv.svg",
            iso: !0,
            name: "Cabo Verde"
          },
          cw: {
            capital: "Willemstad",
            code: "cw",
            continent: "South America",
            flag_1x1: "flags/1x1/cw.svg",
            flag_4x3: "flags/4x3/cw.svg",
            iso: !0,
            name: "Cura\xe7ao"
          },
          cx: {
            capital: "Flying Fish Cove",
            code: "cx",
            continent: "Asia",
            flag_1x1: "flags/1x1/cx.svg",
            flag_4x3: "flags/4x3/cx.svg",
            iso: !0,
            name: "Christmas Island"
          },
          cy: {
            capital: "Nicosia",
            code: "cy",
            continent: "Europe",
            flag_1x1: "flags/1x1/cy.svg",
            flag_4x3: "flags/4x3/cy.svg",
            iso: !0,
            name: "Cyprus"
          },
          cz: {
            capital: "Prague",
            code: "cz",
            continent: "Europe",
            flag_1x1: "flags/1x1/cz.svg",
            flag_4x3: "flags/4x3/cz.svg",
            iso: !0,
            name: "Czech Republic"
          },
          de: {
            capital: "Berlin",
            code: "de",
            continent: "Europe",
            flag_1x1: "flags/1x1/de.svg",
            flag_4x3: "flags/4x3/de.svg",
            iso: !0,
            name: "Germany"
          },
          dg: {
            code: "dg",
            flag_1x1: "flags/1x1/dg.svg",
            flag_4x3: "flags/4x3/dg.svg",
            iso: !1,
            name: "Diego Garcia"
          },
          dj: {
            capital: "Djibouti",
            code: "dj",
            continent: "Africa",
            flag_1x1: "flags/1x1/dj.svg",
            flag_4x3: "flags/4x3/dj.svg",
            iso: !0,
            name: "Djibouti"
          },
          dk: {
            capital: "Copenhagen",
            code: "dk",
            continent: "Europe",
            flag_1x1: "flags/1x1/dk.svg",
            flag_4x3: "flags/4x3/dk.svg",
            iso: !0,
            name: "Denmark"
          },
          dm: {
            capital: "Roseau",
            code: "dm",
            continent: "North America",
            flag_1x1: "flags/1x1/dm.svg",
            flag_4x3: "flags/4x3/dm.svg",
            iso: !0,
            name: "Dominica"
          },
          do: {
            capital: "Santo Domingo", code: "do", continent: "North America", flag_1x1: "flags/1x1/do.svg", flag_4x3: "flags/4x3/do.svg", iso: !0, name: "Dominican Republic"
          },
          dz : { capital : "Algiers",
            code : "dz",
            continent : "Africa",
            flag_1x1 : "flags/1x1/dz.svg",
            flag_4x3 : "flags/4x3/dz.svg",
            iso : ! 0 ,
            name : "Algeria"
          },
          ea: {
            code: "ea",
            flag_1x1: "flags/1x1/ea.svg",
            flag_4x3: "flags/4x3/ea.svg",
            iso: !1,
            name: "Ceuta & Melilla"
          },
          ec: {
            capital: "Quito",
            code: "ec",
            continent: "South America",
            flag_1x1: "flags/1x1/ec.svg",
            flag_4x3: "flags/4x3/ec.svg",
            iso: !0,
            name: "Ecuador"
          },
          ee: {
            capital: "Tallinn",
            code: "ee",
            continent: "Europe",
            flag_1x1: "flags/1x1/ee.svg",
            flag_4x3: "flags/4x3/ee.svg",
            iso: !0,
            name: "Estonia"
          },
          eg: {
            capital: "Cairo",
            code: "eg",
            continent: "Africa",
            flag_1x1: "flags/1x1/eg.svg",
            flag_4x3: "flags/4x3/eg.svg",
            iso: !0,
            name: "Egypt"
          },
          eh: {
            capital: "Laayoune",
            code: "eh",
            continent: "Africa",
            flag_1x1: "flags/1x1/eh.svg",
            flag_4x3: "flags/4x3/eh.svg",
            iso: !0,
            name: "Western Sahara"
          },
          er: {
            capital: "Asmara",
            code: "er",
            continent: "Africa",
            flag_1x1: "flags/1x1/er.svg",
            flag_4x3: "flags/4x3/er.svg",
            iso: !0,
            name: "Eritrea"
          },
          es: {
            capital: "Madrid",
            code: "es",
            continent: "Europe",
            flag_1x1: "flags/1x1/es.svg",
            flag_4x3: "flags/4x3/es.svg",
            iso: !0,
            name: "Spain"
          },
          "es-ct": {
            code: "es-ct",
            flag_1x1: "flags/1x1/es-ct.svg",
            flag_4x3: "flags/4x3/es-ct.svg",
            iso: !1,
            name: "Catalonia"
          },
          "es-ga": {
            code: "es-ga",
            flag_1x1: "flags/1x1/es-ga.svg",
            flag_4x3: "flags/4x3/es-ga.svg",
            iso: !1,
            name: "Galicia"
          },
          et: {
            capital: "Addis Ababa",
            code: "et",
            continent: "Africa",
            flag_1x1: "flags/1x1/et.svg",
            flag_4x3: "flags/4x3/et.svg",
            iso: !0,
            name: "Ethiopia"
          },
          eu: {
            code: "eu",
            flag_1x1: "flags/1x1/eu.svg",
            flag_4x3: "flags/4x3/eu.svg",
            iso: !1,
            name: "Europe"
          },
          fi: {
            capital: "Helsinki",
            code: "fi",
            continent: "Europe",
            flag_1x1: "flags/1x1/fi.svg",
            flag_4x3: "flags/4x3/fi.svg",
            iso: !0,
            name: "Finland"
          },
          fj: {
            capital: "Suva",
            code: "fj",
            continent: "Oceania",
            flag_1x1: "flags/1x1/fj.svg",
            flag_4x3: "flags/4x3/fj.svg",
            iso: !0,
            name: "Fiji"
          },
          fk: {
            capital: "Stanley",
            code: "fk",
            continent: "South America",
            flag_1x1: "flags/1x1/fk.svg",
            flag_4x3: "flags/4x3/fk.svg",
            iso: !0,
            name: "Falkland Islands"
          },
          fm: {
            capital: "Palikir",
            code: "fm",
            continent: "Oceania",
            flag_1x1: "flags/1x1/fm.svg",
            flag_4x3: "flags/4x3/fm.svg",
            iso: !0,
            name: "Federated States of Micronesia"
          },
          fo: {
            capital: "T\xf3rshavn",
            code: "fo",
            continent: "Europe",
            flag_1x1: "flags/1x1/fo.svg",
            flag_4x3: "flags/4x3/fo.svg",
            iso: !0,
            name: "Faroe Islands"
          },
          fr: {
            capital: "Paris",
            code: "fr",
            continent: "Europe",
            flag_1x1: "flags/1x1/fr.svg",
            flag_4x3: "flags/4x3/fr.svg",
            iso: !0,
            name: "France"
          },
          ga: {
            capital: "Libreville",
            code: "ga",
            continent: "Africa",
            flag_1x1: "flags/1x1/ga.svg",
            flag_4x3: "flags/4x3/ga.svg",
            iso: !0,
            name: "Gabon"
          },
          gb: {
            capital: "London",
            code: "gb",
            continent: "Europe",
            flag_1x1: "flags/1x1/gb.svg",
            flag_4x3: "flags/4x3/gb.svg",
            iso: !0,
            name: "United Kingdom"
          },
          "gb-eng": {
            capital: "London",
            code: "gb-eng",
            continent: "Europe",
            flag_1x1: "flags/1x1/gb-eng.svg",
            flag_4x3: "flags/4x3/gb-eng.svg",
            iso: !1,
            name: "England"
          },
          "gb-nir": {
            capital: "Belfast",
            code: "gb-nir",
            continent: "Europe",
            flag_1x1: "flags/1x1/gb-nir.svg",
            flag_4x3: "flags/4x3/gb-nir.svg",
            iso: !1,
            name: "Northern Ireland"
          },
          "gb-sct": {
            capital: "Edinburgh",
            code: "gb-sct",
            continent: "Europe",
            flag_1x1: "flags/1x1/gb-sct.svg",
            flag_4x3: "flags/4x3/gb-sct.svg",
            iso: !1,
            name: "Scotland"
          },
          "gb-wls": {
            capital: "Cardiff",
            code: "gb-wls",
            continent: "Europe",
            flag_1x1: "flags/1x1/gb-wls.svg",
            flag_4x3: "flags/4x3/gb-wls.svg",
            iso: !1,
            name: "Wales"
          },
          gd: {
            capital: "St. George's",
            code: "gd",
            continent: "North America",
            flag_1x1: "flags/1x1/gd.svg",
            flag_4x3: "flags/4x3/gd.svg",
            iso: !0,
            name: "Grenada"
          },
          ge: {
            capital: "Tbilisi",
            code: "ge",
            continent: "Asia",
            flag_1x1: "flags/1x1/ge.svg",
            flag_4x3: "flags/4x3/ge.svg",
            iso: !0,
            name: "Georgia"
          },
          gf: {
            capital: "Cayenne",
            code: "gf",
            continent: "South America",
            flag_1x1: "flags/1x1/gf.svg",
            flag_4x3: "flags/4x3/gf.svg",
            iso: !0,
            name: "French Guiana"
          },
          gg: {
            capital: "Saint Peter Port",
            code: "gg",
            continent: "Europe",
            flag_1x1: "flags/1x1/gg.svg",
            flag_4x3: "flags/4x3/gg.svg",
            iso: !0,
            name: "Guernsey"
          },
          gh: {
            capital: "Accra",
            code: "gh",
            continent: "Africa",
            flag_1x1: "flags/1x1/gh.svg",
            flag_4x3: "flags/4x3/gh.svg",
            iso: !0,
            name: "Ghana"
          },
          gi: {
            capital: "Gibraltar",
            code: "gi",
            continent: "Europe",
            flag_1x1: "flags/1x1/gi.svg",
            flag_4x3: "flags/4x3/gi.svg",
            iso: !0,
            name: "Gibraltar"
          },
          gl: {
            capital: "Nuuk",
            code: "gl",
            continent: "North America",
            flag_1x1: "flags/1x1/gl.svg",
            flag_4x3: "flags/4x3/gl.svg",
            iso: !0,
            name: "Greenland"
          },
          gm: {
            capital: "Banjul",
            code: "gm",
            continent: "Africa",
            flag_1x1: "flags/1x1/gm.svg",
            flag_4x3: "flags/4x3/gm.svg",
            iso: !0,
            name: "Gambia"
          },
          gn: {
            capital: "Conakry",
            code: "gn",
            continent: "Africa",
            flag_1x1: "flags/1x1/gn.svg",
            flag_4x3: "flags/4x3/gn.svg",
            iso: !0,
            name: "Guinea"
          },
          gp: {
            capital: "Basse-Terre",
            code: "gp",
            continent: "North America",
            flag_1x1: "flags/1x1/gp.svg",
            flag_4x3: "flags/4x3/gp.svg",
            iso: !0,
            name: "Guadeloupe"
          },
          gq: {
            capital: "Malabo",
            code: "gq",
            continent: "Africa",
            flag_1x1: "flags/1x1/gq.svg",
            flag_4x3: "flags/4x3/gq.svg",
            iso: !0,
            name: "Equatorial Guinea"
          },
          gr: {
            capital: "Athens",
            code: "gr",
            continent: "Europe",
            flag_1x1: "flags/1x1/gr.svg",
            flag_4x3: "flags/4x3/gr.svg",
            iso: !0,
            name: "Greece"
          },
          gs: {
            capital: "King Edward Point",
            code: "gs",
            continent: "Antarctica",
            flag_1x1: "flags/1x1/gs.svg",
            flag_4x3: "flags/4x3/gs.svg",
            iso: !0,
            name: "South Georgia and the South Sandwich Islands"
          },
          gt: {
            capital: "Guatemala City",
            code: "gt",
            continent: "North America",
            flag_1x1: "flags/1x1/gt.svg",
            flag_4x3: "flags/4x3/gt.svg",
            iso: !0,
            name: "Guatemala"
          },
          gu: {
            capital: "Hag\xe5t\xf1a",
            code: "gu",
            continent: "Oceania",
            flag_1x1: "flags/1x1/gu.svg",
            flag_4x3: "flags/4x3/gu.svg",
            iso: !0,
            name: "Guam"
          },
          gw: {
            capital: "Bissau",
            code: "gw",
            continent: "Africa",
            flag_1x1: "flags/1x1/gw.svg",
            flag_4x3: "flags/4x3/gw.svg",
            iso: !0,
            name: "Guinea-Bissau"
          },
          gy: {
            capital: "Georgetown",
            code: "gy",
            continent: "South America",
            flag_1x1: "flags/1x1/gy.svg",
            flag_4x3: "flags/4x3/gy.svg",
            iso: !0,
            name: "Guyana"
          },
          hk: {
            capital: "Hong Kong",
            code: "hk",
            continent: "Asia",
            flag_1x1: "flags/1x1/hk.svg",
            flag_4x3: "flags/4x3/hk.svg",
            iso: !0,
            name: "Hong Kong"
          },
          hm: {
            code: "hm",
            flag_1x1: "flags/1x1/hm.svg",
            flag_4x3: "flags/4x3/hm.svg",
            iso: !0,
            name: "Heard Island and McDonald Islands"
          },
          hn: {
            capital: "Tegucigalpa",
            code: "hn",
            continent: "North America",
            flag_1x1: "flags/1x1/hn.svg",
            flag_4x3: "flags/4x3/hn.svg",
            iso: !0,
            name: "Honduras"
          },
          hr: {
            capital: "Zagreb",
            code: "hr",
            continent: "Europe",
            flag_1x1: "flags/1x1/hr.svg",
            flag_4x3: "flags/4x3/hr.svg",
            iso: !0,
            name: "Croatia"
          },
          ht: {
            capital: "Port-au-Prince",
            code: "ht",
            continent: "North America",
            flag_1x1: "flags/1x1/ht.svg",
            flag_4x3: "flags/4x3/ht.svg",
            iso: !0,
            name: "Haiti"
          },
          hu: {
            capital: "Budapest",
            code: "hu",
            continent: "Europe",
            flag_1x1: "flags/1x1/hu.svg",
            flag_4x3: "flags/4x3/hu.svg",
            iso: !0,
            name: "Hungary"
          },
          ic: {
            code: "ic",
            flag_1x1: "flags/1x1/ic.svg",
            flag_4x3: "flags/4x3/ic.svg",
            iso: !1,
            name: "Canary Islands"
          },
          id: {
            capital: "Jakarta",
            code: "id",
            continent: "Asia",
            flag_1x1: "flags/1x1/id.svg",
            flag_4x3: "flags/4x3/id.svg",
            iso: !0,
            name: "Indonesia"
          },
          ie: {
            capital: "Dublin",
            code: "ie",
            continent: "Europe",
            flag_1x1: "flags/1x1/ie.svg",
            flag_4x3: "flags/4x3/ie.svg",
            iso: !0,
            name: "Ireland"
          },
          il: {
            capital: "Jerusalem",
            code: "il",
            continent: "Asia",
            flag_1x1: "flags/1x1/il.svg",
            flag_4x3: "flags/4x3/il.svg",
            iso: !0,
            name: "Israel"
          },
          im: {
            capital: "Douglas",
            code: "im",
            continent: "Europe",
            flag_1x1: "flags/1x1/im.svg",
            flag_4x3: "flags/4x3/im.svg",
            iso: !0,
            name: "Isle of Man"
          },
          in:{
            capital: "New Delhi",
            code: "in",
            continent: "Asia",
            flag_1x1: "flags/1x1/in.svg",
            flag_4x3: "flags/4x3/in.svg",
            iso: !0,
            name: "India"
          },
          io: {
            capital: "Diego Garcia",
            code: "io",
            continent: "Asia",
            flag_1x1: "flags/1x1/io.svg",
            flag_4x3: "flags/4x3/io.svg",
            iso: !0,
            name: "British Indian Ocean Territory"
          },
          iq: {
            capital: "Baghdad",
            code: "iq",
            continent: "Asia",
            flag_1x1: "flags/1x1/iq.svg",
            flag_4x3: "flags/4x3/iq.svg",
            iso: !0,
            name: "Iraq"
          },
          ir: {
            capital: "Tehran",
            code: "ir",
            continent: "Asia",
            flag_1x1: "flags/1x1/ir.svg",
            flag_4x3: "flags/4x3/ir.svg",
            iso: !0,
            name: "Iran"
          },
          is: {
            capital: "Reykjavik",
            code: "is",
            continent: "Europe",
            flag_1x1: "flags/1x1/is.svg",
            flag_4x3: "flags/4x3/is.svg",
            iso: !0,
            name: "Iceland"
          },
          it: {
            capital: "Rome",
            code: "it",
            continent: "Europe",
            flag_1x1: "flags/1x1/it.svg",
            flag_4x3: "flags/4x3/it.svg",
            iso: !0,
            name: "Italy"
          },
          je: {
            capital: "Saint Helier",
            code: "je",
            continent: "Europe",
            flag_1x1: "flags/1x1/je.svg",
            flag_4x3: "flags/4x3/je.svg",
            iso: !0,
            name: "Jersey"
          },
          jm: {
            capital: "Kingston",
            code: "jm",
            continent: "North America",
            flag_1x1: "flags/1x1/jm.svg",
            flag_4x3: "flags/4x3/jm.svg",
            iso: !0,
            name: "Jamaica"
          },
          jo: {
            capital: "Amman",
            code: "jo",
            continent: "Asia",
            flag_1x1: "flags/1x1/jo.svg",
            flag_4x3: "flags/4x3/jo.svg",
            iso: !0,
            name: "Jordan"
          },
          jp: {
            capital: "Tokyo",
            code: "jp",
            continent: "Asia",
            flag_1x1: "flags/1x1/jp.svg",
            flag_4x3: "flags/4x3/jp.svg",
            iso: !0,
            name: "Japan"
          },
          ke: {
            capital: "Nairobi",
            code: "ke",
            continent: "Africa",
            flag_1x1: "flags/1x1/ke.svg",
            flag_4x3: "flags/4x3/ke.svg",
            iso: !0,
            name: "Kenya"
          },
          kg: {
            capital: "Bishkek",
            code: "kg",
            continent: "Asia",
            flag_1x1: "flags/1x1/kg.svg",
            flag_4x3: "flags/4x3/kg.svg",
            iso: !0,
            name: "Kyrgyzstan"
          },
          kh: {
            capital: "Phnom Penh",
            code: "kh",
            continent: "Asia",
            flag_1x1: "flags/1x1/kh.svg",
            flag_4x3: "flags/4x3/kh.svg",
            iso: !0,
            name: "Cambodia"
          },
          ki: {
            capital: "South Tarawa",
            code: "ki",
            continent: "Oceania",
            flag_1x1: "flags/1x1/ki.svg",
            flag_4x3: "flags/4x3/ki.svg",
            iso: !0,
            name: "Kiribati"
          },
          km: {
            capital: "Moroni",
            code: "km",
            continent: "Africa",
            flag_1x1: "flags/1x1/km.svg",
            flag_4x3: "flags/4x3/km.svg",
            iso: !0,
            name: "Comoros"
          },
          kn: {
            capital: "Basseterre",
            code: "kn",
            continent: "North America",
            flag_1x1: "flags/1x1/kn.svg",
            flag_4x3: "flags/4x3/kn.svg",
            iso: !0,
            name: "Saint Kitts and Nevis"
          },
          kp: {
            capital: "Pyongyang",
            code: "kp",
            continent: "Asia",
            flag_1x1: "flags/1x1/kp.svg",
            flag_4x3: "flags/4x3/kp.svg",
            iso: !0,
            name: "North Korea"
          },
          kr: {
            capital: "Seoul",
            code: "kr",
            continent: "Asia",
            flag_1x1: "flags/1x1/kr.svg",
            flag_4x3: "flags/4x3/kr.svg",
            iso: !0,
            name: "South Korea"
          },
          kw: {
            capital: "Kuwait City",
            code: "kw",
            continent: "Asia",
            flag_1x1: "flags/1x1/kw.svg",
            flag_4x3: "flags/4x3/kw.svg",
            iso: !0,
            name: "Kuwait"
          },
          ky: {
            capital: "George Town",
            code: "ky",
            continent: "North America",
            flag_1x1: "flags/1x1/ky.svg",
            flag_4x3: "flags/4x3/ky.svg",
            iso: !0,
            name: "Cayman Islands"
          },
          kz: {
            capital: "Astana",
            code: "kz",
            continent: "Asia",
            flag_1x1: "flags/1x1/kz.svg",
            flag_4x3: "flags/4x3/kz.svg",
            iso: !0,
            name: "Kazakhstan"
          },
          la: {
            capital: "Vientiane",
            code: "la",
            continent: "Asia",
            flag_1x1: "flags/1x1/la.svg",
            flag_4x3: "flags/4x3/la.svg",
            iso: !0,
            name: "Laos"
          },
          lb: {
            capital: "Beirut",
            code: "lb",
            continent: "Asia",
            flag_1x1: "flags/1x1/lb.svg",
            flag_4x3: "flags/4x3/lb.svg",
            iso: !0,
            name: "Lebanon"
          },
          lc: {
            capital: "Castries",
            code: "lc",
            continent: "North America",
            flag_1x1: "flags/1x1/lc.svg",
            flag_4x3: "flags/4x3/lc.svg",
            iso: !0,
            name: "Saint Lucia"
          },
          li: {
            capital: "Vaduz",
            code: "li",
            continent: "Europe",
            flag_1x1: "flags/1x1/li.svg",
            flag_4x3: "flags/4x3/li.svg",
            iso: !0,
            name: "Liechtenstein"
          },
          lk: {
            capital: "Sri Jayawardenepura Kotte, Colombo",
            code: "lk",
            continent: "Asia",
            flag_1x1: "flags/1x1/lk.svg",
            flag_4x3: "flags/4x3/lk.svg",
            iso: !0,
            name: "Sri Lanka"
          },
          lr: {
            capital: "Monrovia",
            code: "lr",
            continent: "Africa",
            flag_1x1: "flags/1x1/lr.svg",
            flag_4x3: "flags/4x3/lr.svg",
            iso: !0,
            name: "Liberia"
          },
          ls: {
            capital: "Maseru",
            code: "ls",
            continent: "Africa",
            flag_1x1: "flags/1x1/ls.svg",
            flag_4x3: "flags/4x3/ls.svg",
            iso: !0,
            name: "Lesotho"
          },
          lt: {
            capital: "Vilnius",
            code: "lt",
            continent: "Europe",
            flag_1x1: "flags/1x1/lt.svg",
            flag_4x3: "flags/4x3/lt.svg",
            iso: !0,
            name: "Lithuania"
          },
          lu: {
            capital: "Luxembourg City",
            code: "lu",
            continent: "Europe",
            flag_1x1: "flags/1x1/lu.svg",
            flag_4x3: "flags/4x3/lu.svg",
            iso: !0,
            name: "Luxembourg"
          },
          lv: {
            capital: "Riga",
            code: "lv",
            continent: "Europe",
            flag_1x1: "flags/1x1/lv.svg",
            flag_4x3: "flags/4x3/lv.svg",
            iso: !0,
            name: "Latvia"
          },
          ly: {
            capital: "Tripoli",
            code: "ly",
            continent: "Africa",
            flag_1x1: "flags/1x1/ly.svg",
            flag_4x3: "flags/4x3/ly.svg",
            iso: !0,
            name: "Libya"
          },
          ma: {
            capital: "Rabat",
            code: "ma",
            continent: "Africa",
            flag_1x1: "flags/1x1/ma.svg",
            flag_4x3: "flags/4x3/ma.svg",
            iso: !0,
            name: "Morocco"
          },
          mc: {
            capital: "Monaco",
            code: "mc",
            continent: "Europe",
            flag_1x1: "flags/1x1/mc.svg",
            flag_4x3: "flags/4x3/mc.svg",
            iso: !0,
            name: "Monaco"
          },
          md: {
            capital: "Chi\u0219in\u0103u",
            code: "md",
            continent: "Europe",
            flag_1x1: "flags/1x1/md.svg",
            flag_4x3: "flags/4x3/md.svg",
            iso: !0,
            name: "Moldova"
          },
          me: {
            capital: "Podgorica",
            code: "me",
            continent: "Europe",
            flag_1x1: "flags/1x1/me.svg",
            flag_4x3: "flags/4x3/me.svg",
            iso: !0,
            name: "Montenegro"
          },
          mf: {
            capital: "Marigot",
            code: "mf",
            continent: "North America",
            flag_1x1: "flags/1x1/mf.svg",
            flag_4x3: "flags/4x3/mf.svg",
            iso: !0,
            name: "Saint Martin"
          },
          mg: {
            capital: "Antananarivo",
            code: "mg",
            continent: "Africa",
            flag_1x1: "flags/1x1/mg.svg",
            flag_4x3: "flags/4x3/mg.svg",
            iso: !0,
            name: "Madagascar"
          },
          mh: {
            capital: "Majuro",
            code: "mh",
            continent: "Oceania",
            flag_1x1: "flags/1x1/mh.svg",
            flag_4x3: "flags/4x3/mh.svg",
            iso: !0,
            name: "Marshall Islands"
          },
          mk: {
            capital: "Skopje",
            code: "mk",
            continent: "Europe",
            flag_1x1: "flags/1x1/mk.svg",
            flag_4x3: "flags/4x3/mk.svg",
            iso: !0,
            name: "North Macedonia"
          },
          ml: {
            capital: "Bamako",
            code: "ml",
            continent: "Africa",
            flag_1x1: "flags/1x1/ml.svg",
            flag_4x3: "flags/4x3/ml.svg",
            iso: !0,
            name: "Mali"
          },
          mm: {
            capital: "Naypyidaw",
            code: "mm",
            continent: "Asia",
            flag_1x1: "flags/1x1/mm.svg",
            flag_4x3: "flags/4x3/mm.svg",
            iso: !0,
            name: "Myanmar"
          },
          mn: {
            capital: "Ulaanbaatar",
            code: "mn",
            continent: "Asia",
            flag_1x1: "flags/1x1/mn.svg",
            flag_4x3: "flags/4x3/mn.svg",
            iso: !0,
            name: "Mongolia"
          },
          mo: {
            capital: "Macau",
            code: "mo",
            continent: "Asia",
            flag_1x1: "flags/1x1/mo.svg",
            flag_4x3: "flags/4x3/mo.svg",
            iso: !0,
            name: "Macau"
          },
          mp: {
            capital: "Saipan",
            code: "mp",
            continent: "Oceania",
            flag_1x1: "flags/1x1/mp.svg",
            flag_4x3: "flags/4x3/mp.svg",
            iso: !0,
            name: "Northern Mariana Islands"
          },
          mq: {
            capital: "Fort-de-France",
            code: "mq",
            continent: "North America",
            flag_1x1: "flags/1x1/mq.svg",
            flag_4x3: "flags/4x3/mq.svg",
            iso: !0,
            name: "Martinique"
          },
          mr: {
            capital: "Nouakchott",
            code: "mr",
            continent: "Africa",
            flag_1x1: "flags/1x1/mr.svg",
            flag_4x3: "flags/4x3/mr.svg",
            iso: !0,
            name: "Mauritania"
          },
          ms: {
            capital: "Little Bay, Brades, Plymouth",
            code: "ms",
            continent: "North America",
            flag_1x1: "flags/1x1/ms.svg",
            flag_4x3: "flags/4x3/ms.svg",
            iso: !0,
            name: "Montserrat"
          },
          mt: {
            capital: "Valletta",
            code: "mt",
            continent: "Europe",
            flag_1x1: "flags/1x1/mt.svg",
            flag_4x3: "flags/4x3/mt.svg",
            iso: !0,
            name: "Malta"
          },
          mu: {
            capital: "Port Louis",
            code: "mu",
            continent: "Africa",
            flag_1x1: "flags/1x1/mu.svg",
            flag_4x3: "flags/4x3/mu.svg",
            iso: !0,
            name: "Mauritius"
          },
          mv: {
            capital: "Mal\xe9",
            code: "mv",
            continent: "Asia",
            flag_1x1: "flags/1x1/mv.svg",
            flag_4x3: "flags/4x3/mv.svg",
            iso: !0,
            name: "Maldives"
          },
          mw: {
            capital: "Lilongwe",
            code: "mw",
            continent: "Africa",
            flag_1x1: "flags/1x1/mw.svg",
            flag_4x3: "flags/4x3/mw.svg",
            iso: !0,
            name: "Malawi"
          },
          mx: {
            capital: "Mexico City",
            code: "mx",
            continent: "North America",
            flag_1x1: "flags/1x1/mx.svg",
            flag_4x3: "flags/4x3/mx.svg",
            iso: !0,
            name: "Mexico"
          },
          my: {
            capital: "Kuala Lumpur",
            code: "my",
            continent: "Asia",
            flag_1x1: "flags/1x1/my.svg",
            flag_4x3: "flags/4x3/my.svg",
            iso: !0,
            name: "Malaysia"
          },
          mz: {
            capital: "Maputo",
            code: "mz",
            continent: "Africa",
            flag_1x1: "flags/1x1/mz.svg",
            flag_4x3: "flags/4x3/mz.svg",
            iso: !0,
            name: "Mozambique"
          },
          na: {
            capital: "Windhoek",
            code: "na",
            continent: "Africa",
            flag_1x1: "flags/1x1/na.svg",
            flag_4x3: "flags/4x3/na.svg",
            iso: !0,
            name: "Namibia"
          },
          nc: {
            capital: "Noum\xe9a",
            code: "nc",
            continent: "Oceania",
            flag_1x1: "flags/1x1/nc.svg",
            flag_4x3: "flags/4x3/nc.svg",
            iso: !0,
            name: "New Caledonia"
          },
          ne: {
            capital: "Niamey",
            code: "ne",
            continent: "Africa",
            flag_1x1: "flags/1x1/ne.svg",
            flag_4x3: "flags/4x3/ne.svg",
            iso: !0,
            name: "Niger"
          },
          nf: {
            capital: "Kingston",
            code: "nf",
            continent: "Oceania",
            flag_1x1: "flags/1x1/nf.svg",
            flag_4x3: "flags/4x3/nf.svg",
            iso: !0,
            name: "Norfolk Island"
          },
          ng: {
            capital: "Abuja",
            code: "ng",
            continent: "Africa",
            flag_1x1: "flags/1x1/ng.svg",
            flag_4x3: "flags/4x3/ng.svg",
            iso: !0,
            name: "Nigeria"
          },
          ni: {
            capital: "Managua",
            code: "ni",
            continent: "North America",
            flag_1x1: "flags/1x1/ni.svg",
            flag_4x3: "flags/4x3/ni.svg",
            iso: !0,
            name: "Nicaragua"
          },
          nl: {
            capital: "Amsterdam",
            code: "nl",
            continent: "Europe",
            flag_1x1: "flags/1x1/nl.svg",
            flag_4x3: "flags/4x3/nl.svg",
            iso: !0,
            name: "Netherlands"
          },
          no: {
            capital: "Oslo",
            code: "no",
            continent: "Europe",
            flag_1x1: "flags/1x1/no.svg",
            flag_4x3: "flags/4x3/no.svg",
            iso: !0,
            name: "Norway"
          },
          np: {
            capital: "Kathmandu",
            code: "np",
            continent: "Asia",
            flag_1x1: "flags/1x1/np.svg",
            flag_4x3: "flags/4x3/np.svg",
            iso: !0,
            name: "Nepal"
          },
          nr: {
            capital: "Yaren District",
            code: "nr",
            continent: "Oceania",
            flag_1x1: "flags/1x1/nr.svg",
            flag_4x3: "flags/4x3/nr.svg",
            iso: !0,
            name: "Nauru"
          },
          nu: {
            capital: "Alofi",
            code: "nu",
            continent: "Oceania",
            flag_1x1: "flags/1x1/nu.svg",
            flag_4x3: "flags/4x3/nu.svg",
            iso: !0,
            name: "Niue"
          },
          nz: {
            capital: "Wellington",
            code: "nz",
            continent: "Oceania",
            flag_1x1: "flags/1x1/nz.svg",
            flag_4x3: "flags/4x3/nz.svg",
            iso: !0,
            name: "New Zealand"
          },
          om: {
            capital: "Muscat",
            code: "om",
            continent: "Asia",
            flag_1x1: "flags/1x1/om.svg",
            flag_4x3: "flags/4x3/om.svg",
            iso: !0,
            name: "Oman"
          },
          pa: {
            capital: "Panama City",
            code: "pa",
            continent: "North America",
            flag_1x1: "flags/1x1/pa.svg",
            flag_4x3: "flags/4x3/pa.svg",
            iso: !0,
            name: "Panama"
          },
          pe: {
            capital: "Lima",
            code: "pe",
            continent: "South America",
            flag_1x1: "flags/1x1/pe.svg",
            flag_4x3: "flags/4x3/pe.svg",
            iso: !0,
            name: "Peru"
          },
          pf: {
            capital: "Papeete",
            code: "pf",
            continent: "Oceania",
            flag_1x1: "flags/1x1/pf.svg",
            flag_4x3: "flags/4x3/pf.svg",
            iso: !0,
            name: "French Polynesia"
          },
          pg: {
            capital: "Port Moresby",
            code: "pg",
            continent: "Oceania",
            flag_1x1: "flags/1x1/pg.svg",
            flag_4x3: "flags/4x3/pg.svg",
            iso: !0,
            name: "Papua New Guinea"
          },
          ph: {
            capital: "Manila",
            code: "ph",
            continent: "Asia",
            flag_1x1: "flags/1x1/ph.svg",
            flag_4x3: "flags/4x3/ph.svg",
            iso: !0,
            name: "Philippines"
          },
          pk: {
            capital: "Islamabad",
            code: "pk",
            continent: "Asia",
            flag_1x1: "flags/1x1/pk.svg",
            flag_4x3: "flags/4x3/pk.svg",
            iso: !0,
            name: "Pakistan"
          },
          pl: {
            capital: "Warsaw",
            code: "pl",
            continent: "Europe",
            flag_1x1: "flags/1x1/pl.svg",
            flag_4x3: "flags/4x3/pl.svg",
            iso: !0,
            name: "Poland"
          },
          pm: {
            capital: "Saint-Pierre",
            code: "pm",
            continent: "North America",
            flag_1x1: "flags/1x1/pm.svg",
            flag_4x3: "flags/4x3/pm.svg",
            iso: !0,
            name: "Saint Pierre and Miquelon"
          },
          pn: {
            capital: "Adamstown",
            code: "pn",
            continent: "Oceania",
            flag_1x1: "flags/1x1/pn.svg",
            flag_4x3: "flags/4x3/pn.svg",
            iso: !0,
            name: "Pitcairn"
          },
          pr: {
            capital: "San Juan",
            code: "pr",
            continent: "North America",
            flag_1x1: "flags/1x1/pr.svg",
            flag_4x3: "flags/4x3/pr.svg",
            iso: !0,
            name: "Puerto Rico"
          },
          ps: {
            capital: "Ramallah",
            code: "ps",
            continent: "Asia",
            flag_1x1: "flags/1x1/ps.svg",
            flag_4x3: "flags/4x3/ps.svg",
            iso: !0,
            name: "State of Palestine"
          },
          pt: {
            capital: "Lisbon",
            code: "pt",
            continent: "Europe",
            flag_1x1: "flags/1x1/pt.svg",
            flag_4x3: "flags/4x3/pt.svg",
            iso: !0,
            name: "Portugal"
          },
          pw: {
            capital: "Ngerulmud",
            code: "pw",
            continent: "Oceania",
            flag_1x1: "flags/1x1/pw.svg",
            flag_4x3: "flags/4x3/pw.svg",
            iso: !0,
            name: "Palau"
          },
          py: {
            capital: "Asunci\xf3n",
            code: "py",
            continent: "South America",
            flag_1x1: "flags/1x1/py.svg",
            flag_4x3: "flags/4x3/py.svg",
            iso: !0,
            name: "Paraguay"
          },
          qa: {
            capital: "Doha",
            code: "qa",
            continent: "Asia",
            flag_1x1: "flags/1x1/qa.svg",
            flag_4x3: "flags/4x3/qa.svg",
            iso: !0,
            name: "Qatar"
          },
          re: {
            capital: "Saint-Denis",
            code: "re",
            continent: "Africa",
            flag_1x1: "flags/1x1/re.svg",
            flag_4x3: "flags/4x3/re.svg",
            iso: !0,
            name: "R\xe9union"
          },
          ro: {
            capital: "Bucharest",
            code: "ro",
            continent: "Europe",
            flag_1x1: "flags/1x1/ro.svg",
            flag_4x3: "flags/4x3/ro.svg",
            iso: !0,
            name: "Romania"
          },
          rs: {
            capital: "Belgrade",
            code: "rs",
            continent: "Europe",
            flag_1x1: "flags/1x1/rs.svg",
            flag_4x3: "flags/4x3/rs.svg",
            iso: !0,
            name: "Serbia"
          },
          ru: {
            capital: "Moscow",
            code: "ru",
            continent: "Europe",
            flag_1x1: "flags/1x1/ru.svg",
            flag_4x3: "flags/4x3/ru.svg",
            iso: !0,
            name: "Russia"
          },
          rw: {
            capital: "Kigali",
            code: "rw",
            continent: "Africa",
            flag_1x1: "flags/1x1/rw.svg",
            flag_4x3: "flags/4x3/rw.svg",
            iso: !0,
            name: "Rwanda"
          },
          sa: {
            capital: "Riyadh",
            code: "sa",
            continent: "Asia",
            flag_1x1: "flags/1x1/sa.svg",
            flag_4x3: "flags/4x3/sa.svg",
            iso: !0,
            name: "Saudi Arabia"
          },
          sb: {
            capital: "Honiara",
            code: "sb",
            continent: "Oceania",
            flag_1x1: "flags/1x1/sb.svg",
            flag_4x3: "flags/4x3/sb.svg",
            iso: !0,
            name: "Solomon Islands"
          },
          sc: {
            capital: "Victoria",
            code: "sc",
            continent: "Africa",
            flag_1x1: "flags/1x1/sc.svg",
            flag_4x3: "flags/4x3/sc.svg",
            iso: !0,
            name: "Seychelles"
          },
          sd: {
            capital: "Khartoum",
            code: "sd",
            continent: "Africa",
            flag_1x1: "flags/1x1/sd.svg",
            flag_4x3: "flags/4x3/sd.svg",
            iso: !0,
            name: "Sudan"
          },
          se: {
            capital: "Stockholm",
            code: "se",
            continent: "Europe",
            flag_1x1: "flags/1x1/se.svg",
            flag_4x3: "flags/4x3/se.svg",
            iso: !0,
            name: "Sweden"
          },
          sg: {
            capital: "Singapore",
            code: "sg",
            continent: "Asia",
            flag_1x1: "flags/1x1/sg.svg",
            flag_4x3: "flags/4x3/sg.svg",
            iso: !0,
            name: "Singapore"
          },
          sh: {
            capital: "Jamestown",
            code: "sh",
            continent: "Africa",
            flag_1x1: "flags/1x1/sh.svg",
            flag_4x3: "flags/4x3/sh.svg",
            iso: !0,
            name: "Saint Helena, Ascension and Tristan da Cunha"
          },
          si: {
            capital: "Ljubljana",
            code: "si",
            continent: "Europe",
            flag_1x1: "flags/1x1/si.svg",
            flag_4x3: "flags/4x3/si.svg",
            iso: !0,
            name: "Slovenia"
          },
          sj: {
            capital: "Longyearbyen",
            code: "sj",
            continent: "Europe",
            flag_1x1: "flags/1x1/sj.svg",
            flag_4x3: "flags/4x3/sj.svg",
            iso: !0,
            name: "Svalbard and Jan Mayen"
          },
          sk: {
            capital: "Bratislava",
            code: "sk",
            continent: "Europe",
            flag_1x1: "flags/1x1/sk.svg",
            flag_4x3: "flags/4x3/sk.svg",
            iso: !0,
            name: "Slovakia"
          },
          sl: {
            capital: "Freetown",
            code: "sl",
            continent: "Africa",
            flag_1x1: "flags/1x1/sl.svg",
            flag_4x3: "flags/4x3/sl.svg",
            iso: !0,
            name: "Sierra Leone"
          },
          sm: {
            capital: "San Marino",
            code: "sm",
            continent: "Europe",
            flag_1x1: "flags/1x1/sm.svg",
            flag_4x3: "flags/4x3/sm.svg",
            iso: !0,
            name: "San Marino"
          },
          sn: {
            capital: "Dakar",
            code: "sn",
            continent: "Africa",
            flag_1x1: "flags/1x1/sn.svg",
            flag_4x3: "flags/4x3/sn.svg",
            iso: !0,
            name: "Senegal"
          },
          so: {
            capital: "Mogadishu",
            code: "so",
            continent: "Africa",
            flag_1x1: "flags/1x1/so.svg",
            flag_4x3: "flags/4x3/so.svg",
            iso: !0,
            name: "Somalia"
          },
          sr: {
            capital: "Paramaribo",
            code: "sr",
            continent: "South America",
            flag_1x1: "flags/1x1/sr.svg",
            flag_4x3: "flags/4x3/sr.svg",
            iso: !0,
            name: "Suriname"
          },
          ss: {
            capital: "Juba",
            code: "ss",
            continent: "Africa",
            flag_1x1: "flags/1x1/ss.svg",
            flag_4x3: "flags/4x3/ss.svg",
            iso: !0,
            name: "South Sudan"
          },
          st: {
            capital: "S\xe3o Tom\xe9",
            code: "st",
            continent: "Africa",
            flag_1x1: "flags/1x1/st.svg",
            flag_4x3: "flags/4x3/st.svg",
            iso: !0,
            name: "Sao Tome and Principe"
          },
          sv: {
            capital: "San Salvador",
            code: "sv",
            continent: "North America",
            flag_1x1: "flags/1x1/sv.svg",
            flag_4x3: "flags/4x3/sv.svg",
            iso: !0,
            name: "El Salvador"
          },
          sx: {
            capital: "Philipsburg",
            code: "sx",
            continent: "North America",
            flag_1x1: "flags/1x1/sx.svg",
            flag_4x3: "flags/4x3/sx.svg",
            iso: !0,
            name: "Sint Maarten"
          },
          sy: {
            capital: "Damascus",
            code: "sy",
            continent: "Asia",
            flag_1x1: "flags/1x1/sy.svg",
            flag_4x3: "flags/4x3/sy.svg",
            iso: !0,
            name: "Syria"
          },
          sz: {
            capital: "Lobamba, Mbabane",
            code: "sz",
            continent: "Africa",
            flag_1x1: "flags/1x1/sz.svg",
            flag_4x3: "flags/4x3/sz.svg",
            iso: !0,
            name: "Eswatini"
          },
          ta: {
            code: "ta",
            flag_1x1: "flags/1x1/ta.svg",
            flag_4x3: "flags/4x3/ta.svg",
            iso: !1,
            name: "Tristan da Cunha"
          },
          tc: {
            capital: "Cockburn Town",
            code: "tc",
            continent: "North America",
            flag_1x1: "flags/1x1/tc.svg",
            flag_4x3: "flags/4x3/tc.svg",
            iso: !0,
            name: "Turks and Caicos Islands"
          },
          td: {
            capital: "N'Djamena",
            code: "td",
            continent: "Africa",
            flag_1x1: "flags/1x1/td.svg",
            flag_4x3: "flags/4x3/td.svg",
            iso: !0,
            name: "Chad"
          },
          tf: {
            capital: "Saint-Pierre, R\xe9union",
            code: "tf",
            continent: "Africa",
            flag_1x1: "flags/1x1/tf.svg",
            flag_4x3: "flags/4x3/tf.svg",
            iso: !0,
            name: "French Southern Territories"
          },
          tg: {
            capital: "Lom\xe9",
            code: "tg",
            continent: "Africa",
            flag_1x1: "flags/1x1/tg.svg",
            flag_4x3: "flags/4x3/tg.svg",
            iso: !0,
            name: "Togo"
          },
          th: {
            capital: "Bangkok",
            code: "th",
            continent: "Asia",
            flag_1x1: "flags/1x1/th.svg",
            flag_4x3: "flags/4x3/th.svg",
            iso: !0,
            name: "Thailand"
          },
          tj: {
            capital: "Dushanbe",
            code: "tj",
            continent: "Asia",
            flag_1x1: "flags/1x1/tj.svg",
            flag_4x3: "flags/4x3/tj.svg",
            iso: !0,
            name: "Tajikistan"
          },
          tk: {
            capital: "Nukunonu, Atafu,Tokelau",
            code: "tk",
            continent: "Oceania",
            flag_1x1: "flags/1x1/tk.svg",
            flag_4x3: "flags/4x3/tk.svg",
            iso: !0,
            name: "Tokelau"
          },
          tl: {
            capital: "Dili",
            code: "tl",
            continent: "Asia",
            flag_1x1: "flags/1x1/tl.svg",
            flag_4x3: "flags/4x3/tl.svg",
            iso: !0,
            name: "Timor-Leste"
          },
          tm: {
            capital: "Ashgabat",
            code: "tm",
            continent: "Asia",
            flag_1x1: "flags/1x1/tm.svg",
            flag_4x3: "flags/4x3/tm.svg",
            iso: !0,
            name: "Turkmenistan"
          },
          tn: {
            capital: "Tunis",
            code: "tn",
            continent: "Africa",
            flag_1x1: "flags/1x1/tn.svg",
            flag_4x3: "flags/4x3/tn.svg",
            iso: !0,
            name: "Tunisia"
          },
          to: {
            capital: "Nuku\u02bbalofa",
            code: "to",
            continent: "Oceania",
            flag_1x1: "flags/1x1/to.svg",
            flag_4x3: "flags/4x3/to.svg",
            iso: !0,
            name: "Tonga"
          },
          tr: {
            capital: "Ankara",
            code: "tr",
            continent: "Asia",
            flag_1x1: "flags/1x1/tr.svg",
            flag_4x3: "flags/4x3/tr.svg",
            iso: !0,
            name: "Turkey"
          },
          tt: {
            capital: "Port of Spain",
            code: "tt",
            continent: "South America",
            flag_1x1: "flags/1x1/tt.svg",
            flag_4x3: "flags/4x3/tt.svg",
            iso: !0,
            name: "Trinidad and Tobago"
          },
          tv: {
            capital: "Funafuti",
            code: "tv",
            continent: "Oceania",
            flag_1x1: "flags/1x1/tv.svg",
            flag_4x3: "flags/4x3/tv.svg",
            iso: !0,
            name: "Tuvalu"
          },
          tw: {
            capital: "Taipei",
            code: "tw",
            continent: "Asia",
            flag_1x1: "flags/1x1/tw.svg",
            flag_4x3: "flags/4x3/tw.svg",
            iso: !0,
            name: "Taiwan"
          },
          tz: {
            capital: "Dodoma",
            code: "tz",
            continent: "Africa",
            flag_1x1: "flags/1x1/tz.svg",
            flag_4x3: "flags/4x3/tz.svg",
            iso: !0,
            name: "Tanzania"
          },
          ua: {
            capital: "Kiev",
            code: "ua",
            continent: "Europe",
            flag_1x1: "flags/1x1/ua.svg",
            flag_4x3: "flags/4x3/ua.svg",
            iso: !0,
            name: "Ukraine"
          },
          ug: {
            capital: "Kampala",
            code: "ug",
            continent: "Africa",
            flag_1x1: "flags/1x1/ug.svg",
            flag_4x3: "flags/4x3/ug.svg",
            iso: !0,
            name: "Uganda"
          },
          um: {
            capital: "Washington, D.C.",
            code: "um",
            continent: "North America",
            flag_1x1: "flags/1x1/um.svg",
            flag_4x3: "flags/4x3/um.svg",
            iso: !0,
            name: "United States Minor Outlying Islands"
          },
          un: {
            code: "un",
            flag_1x1: "flags/1x1/un.svg",
            flag_4x3: "flags/4x3/un.svg",
            iso: !1,
            name: "United Nations"
          },
          us: {
            capital: "Washington, D.C.",
            code: "us",
            continent: "North America",
            flag_1x1: "flags/1x1/us.svg",
            flag_4x3: "flags/4x3/us.svg",
            iso: !0,
            name: "United States of America"
          },
          uy: {
            capital: "Montevideo",
            code: "uy",
            continent: "South America",
            flag_1x1: "flags/1x1/uy.svg",
            flag_4x3: "flags/4x3/uy.svg",
            iso: !0,
            name: "Uruguay"
          },
          uz: {
            capital: "Tashkent",
            code: "uz",
            continent: "Asia",
            flag_1x1: "flags/1x1/uz.svg",
            flag_4x3: "flags/4x3/uz.svg",
            iso: !0,
            name: "Uzbekistan"
          },
          va: {
            capital: "Vatican City",
            code: "va",
            continent: "Europe",
            flag_1x1: "flags/1x1/va.svg",
            flag_4x3: "flags/4x3/va.svg",
            iso: !0,
            name: "Holy See"
          },
          vc: {
            capital: "Kingstown",
            code: "vc",
            continent: "North America",
            flag_1x1: "flags/1x1/vc.svg",
            flag_4x3: "flags/4x3/vc.svg",
            iso: !0,
            name: "Saint Vincent and the Grenadines"
          },
          ve: {
            capital: "Caracas",
            code: "ve",
            continent: "South America",
            flag_1x1: "flags/1x1/ve.svg",
            flag_4x3: "flags/4x3/ve.svg",
            iso: !0,
            name: "Venezuela"
          },
          vg: {
            capital: "Road Town",
            code: "vg",
            continent: "North America",
            flag_1x1: "flags/1x1/vg.svg",
            flag_4x3: "flags/4x3/vg.svg",
            iso: !0,
            name: "Virgin Islands (British)"
          },
          vi: {
            capital: "Charlotte Amalie",
            code: "vi",
            continent: "North America",
            flag_1x1: "flags/1x1/vi.svg",
            flag_4x3: "flags/4x3/vi.svg",
            iso: !0,
            name: "Virgin Islands (U.S.)"
          },
          vn: {
            capital: "Hanoi",
            code: "vn",
            continent: "Asia",
            flag_1x1: "flags/1x1/vn.svg",
            flag_4x3: "flags/4x3/vn.svg",
            iso: !0,
            name: "Vietnam"
          },
          vu: {
            capital: "Port Vila",
            code: "vu",
            continent: "Oceania",
            flag_1x1: "flags/1x1/vu.svg",
            flag_4x3: "flags/4x3/vu.svg",
            iso: !0,
            name: "Vanuatu"
          },
          wf: {
            capital: "Mata-Utu",
            code: "wf",
            continent: "Oceania",
            flag_1x1: "flags/1x1/wf.svg",
            flag_4x3: "flags/4x3/wf.svg",
            iso: !0,
            name: "Wallis and Futuna"
          },
          ws: {
            capital: "Apia",
            code: "ws",
            continent: "Oceania",
            flag_1x1: "flags/1x1/ws.svg",
            flag_4x3: "flags/4x3/ws.svg",
            iso: !0,
            name: "Samoa"
          },
          xk: {
            capital: "Pristina",
            code: "xk",
            continent: "Europe",
            flag_1x1: "flags/1x1/xk.svg",
            flag_4x3: "flags/4x3/xk.svg",
            iso: !1,
            name: "Kosovo"
          },
          xx: {
            code: "xx",
            flag_1x1: "flags/1x1/xx.svg",
            flag_4x3: "flags/4x3/xx.svg",
            iso: !1,
            name: "Unknown"
          },
          ye: {
            capital: "Sana'a",
            code: "ye",
            continent: "Asia",
            flag_1x1: "flags/1x1/ye.svg",
            flag_4x3: "flags/4x3/ye.svg",
            iso: !0,
            name: "Yemen"
          },
          yt: {
            capital: "Mamoudzou",
            code: "yt",
            continent: "Africa",
            flag_1x1: "flags/1x1/yt.svg",
            flag_4x3: "flags/4x3/yt.svg",
            iso: !0,
            name: "Mayotte"
          },
          za: {
            capital: "Pretoria",
            code: "za",
            continent: "Africa",
            flag_1x1: "flags/1x1/za.svg",
            flag_4x3: "flags/4x3/za.svg",
            iso: !0,
            name: "South Africa"
          },
          zm: {
            capital: "Lusaka",
            code: "zm",
            continent: "Africa",
            flag_1x1: "flags/1x1/zm.svg",
            flag_4x3: "flags/4x3/zm.svg",
            iso: !0,
            name: "Zambia"
          },
          zw: {
            capital: "Harare",
            code: "zw",
            continent: "Africa",
            flag_1x1: "flags/1x1/zw.svg",
            flag_4x3: "flags/4x3/zw.svg",
            iso: !0,
            name: "Zimbabwe"
          }
        })),
        k_ = function(e) {
          var t = w_.get(e.cc.toLowerCase());
          return void 0 !== t ? (0, Mb.jsx)("div", {
            className: "flex justify-center",
            children: (0, Mb.jsx)("img", {
              className: "h-5 w-5",
              src: "static/".concat(t.flag_4x3),
              alt: t.name
            })
          }) : (0, Mb.jsx)(Mb.Fragment, {
            children: e.cc
          })
        };
        function __(e, t, n) {
          return t < 0 && (t = 0),
          n < 0 && (n = 0),
          e.online4 || e.online6 ? (0, Mb.jsxs)("div", {
            className: "inline-grid grid-cols-11 items-center space-x-1",
            children: [(0, Mb.jsx)("div", {
              className: "col-span-5 min-w-min text-right",
              children: lw(t, 1, e.si ? 1 : 0)
            }), (0, Mb.jsx)("div", {
              children: "|"
            }), (0, Mb.jsx)("div", {
              className: "col-span-5 min-w-min text-left",
              children: lw(n, 1, e.si ? 1 : 0)
            })]
          }) : (0, Mb.jsx)("div", {
            children: "-"
          })
        }
        function S_(e, t, n) {
          return t < 0 && (t = 0),
          n < 0 && (n = 0),
          e.online4 || e.online6 ? (0, Mb.jsxs)(Mb.Fragment, {
            children: [lw(t, 1, e.si ? 1 : 0), "|", lw(n, 1, e.si ? 1 : 0)]
          }) : (0, Mb.jsx)(Mb.Fragment, {
            children: "-"
          })
        }
        function E_(e) {
          var t = new Map;
          return void 0 !== e.labels && (t = function(e) {
            var t = new Map;
            return e.split(";").forEach((function(e) {
              if (! (e.length < 1)) {
                var n = e.split("=");
                2 === n.length && t.set(n[0], n[1])
              }
            })),
            t
          } (e.labels)),
          (0, Mb.jsxs)(Mb.Fragment, {
            children: [t.has("os") && ww(t.get("os")), e.gid.length > 0 && (0, Mb.jsxs)(Mb.Fragment, {
              children: [(0, Mb.jsx)("div", {
                children: (0, Mb.jsx)(sw, {
                  className: "h-5 w-5 text-amber-500 dark:text-yellow-400"
                })
              }), (0, Mb.jsx)("div", {
                children: e.gid
              })]
            }), t.has("spec") && (0, Mb.jsxs)(Mb.Fragment, {
              children: [(0, Mb.jsx)("div", {
                children: (0, Mb.jsx)(uw, {
                  className: "h-5 w-5"
                })
              }), (0, Mb.jsx)("div", {
                children: t.get("spec")
              })]
            }), t.has("ndd") && (0, Mb.jsxs)(Mb.Fragment, {
              children: [(0, Mb.jsx)("div", {
                children: (0, Mb.jsx)(cw, {
                  className: "h-5 w-5 "
                })
              }), (0, Mb.jsx)("div", {
                children: t.get("ndd")
              })]
            })]
          })
        }
        var C_ = function(t) {
          var n = "mx-auto items-stretch gap-x-4 pl-2 text-tiny md:text-sm lg:text-base",
          r = function(e) {
            var t = e.getFullYear(),
            n = "".concat(e.getMonth() + 1).padStart(2, "0"),
            r = "".concat(e.getDate()).padStart(2, "0"),
            a = "".concat(e.getHours()).padStart(2, "0"),
            o = "".concat(e.getMinutes()).padStart(2, "0"),
            i = "".concat(e.getSeconds()).padStart(2, "0");
            return "".concat(t, "-").concat(n, "-").concat(r, " ").concat(a, ":").concat(o, ":").concat(i)
          } (new Date(1e3 * t.updated)),
          a = Ye((0, e.useState)([]), 2),
          o = a[0],
          i = a[1];
          return (0, Mb.jsxs)("div", {
            className: "mx-auto min-w-min flex-1",
            children: [(0, Mb.jsx)("div", {
              children: t.servers.length > 0 ? (0, Mb.jsxs)("table", {
                id: "ssr-table",
                className: "items-end pt-1 text-center text-indigo-800 dark:text-white",
                children: [(0, Mb.jsx)("thead", {
                  children: (0, Mb.jsxs)("tr", {
                    className: "".concat(n, " h-8 border-b-[1px] border-indigo-100 bg-slate-100 text-center font-bold dark:border-white dark:bg-slate-700"),
                    children: [(0, Mb.jsx)("th", {
                      children: "\u30ce\u30fc\u30c9"
                    }), (0, Mb.jsx)("th", {
                      children: "IP"
                    }), (0, Mb.jsx)("th", {
                      className: "hidden w-20 lg:table-cell",
                      children: "\u7a3c\u50cd"
                    }), (0, Mb.jsx)("th", {
                      className: "hidden w-20 lg:table-cell",
                      children: "\u5730\u57df"
                    }), (0, Mb.jsx)("th", {
                      className: "hidden w-20 lg:table-cell",
                      children: "\u30bf\u30a4\u30d7"
                    }), (0, Mb.jsx)("th", {
                      className: "w-20",
                      children: "\u30ed\u30fc\u30c9"
                    }), (0, Mb.jsx)("th", {
                      className: "hidden md:table-cell lg:table-cell",
                      children: "\u4eca\u6708\u306e\u8ee2\u9001\u91cf \u2193|\u2191"
                    }), (0, Mb.jsx)("th", {
                      children: "\u30cd\u30c3\u30c8\u30ef\u30fc\u30af \u2193|\u2191"
                    }), (0, Mb.jsx)("th", {
                      className: "hidden md:table-cell lg:table-cell",
                      children: "\u8ee2\u9001\u91cf \u2193|\u2191"
                    }), (0, Mb.jsx)("th", {
                      children: "CPU"
                    }), (0, Mb.jsx)("th", {
                      children: "\u30e1\u30e2\u30ea\u30fc"
                    }), (0, Mb.jsx)("th", {
                      children: "\u30c7\u30a3\u30b9\u30af"
                    }), (0, Mb.jsx)("th", {
                      className: "hidden w-44 pr-5 pl-3 xl:table-cell",
                      children: "\u6771\u4eac | \uc11c\uc6b8 | \u9999\u6e2f"
                    })]
                  })
                }), (0, Mb.jsx)("tbody", {
                  children: t.servers.map((function(e, t) {
                    return (0, Mb.jsxs)(Mb.Fragment, {
                      children: [(0, Mb.jsxs)("tr", {
                        id: "r-".concat(t),
                        onClick: function() {
                          return function(e) {
                            var t = o,
                            n = t.includes(e) ? t.filter((function(t) {
                              return t !== e
                            })) : t.concat(e);
                            i(n)
                          } (t)
                        },
                        className: "".concat(n, " h-[40px] ").concat(t > 0 ? "font-tiny border-t-[1px] border-dashed border-slate-400 border-opacity-75 font-normal dark:border-solid dark:border-white": "", " bg-slate-50 hover:bg-indigo-50 dark:bg-slate-700 dark:hover:bg-slate-600"),
                        children: [(0, Mb.jsx)("td", {
                          className: "w-20 min-w-min",
                          children: (0, Mb.jsx)("div", {
                            className: "mx-auto max-w-xs truncate pr-1",
                            children: e.alias
                          })
                        }), (0, Mb.jsx)("td", {
                          children: (0, Mb.jsxs)("div", {
                            className: "flex justify-center",
                            children: [(0, Mb.jsx)(x_, {
                              online: e.online4,
                              label: "IPv4"
                            },
                            "v4-".concat(t)), (0, Mb.jsx)(x_, {
                              online: e.online6,
                              label: "IPv6"
                            },
                            "v6-".concat(t))]
                          })
                        }), (0, Mb.jsx)("td", {
                          className: "hidden w-24 min-w-min lg:table-cell",
                          children: e.online4 || e.online6 ? e.uptime: (0, Mb.jsx)(ew, {})
                        }), (0, Mb.jsx)("td", {
                          className: "hidden w-20 min-w-min lg:table-cell",
                          children: (0, Mb.jsx)(k_, {
                            cc: e.location
                          })
                        }), (0, Mb.jsx)("td", {
                          className: "hidden w-20 min-w-min lg:table-cell",
                          children: e.online4 || e.online6 ? e.type: "-"
                        }), (0, Mb.jsx)("td", {
                          className: "w-20 min-w-min",
                          children: e.online4 || e.online6 ? e.load_1.toFixed(2) : "-"
                        }), (0, Mb.jsx)("td", {
                          className: "hidden w-48 min-w-max md:table-cell lg:table-cell",
                          children: __(e, e.network_in - e.last_network_in, e.network_out - e.last_network_out)
                        }), (0, Mb.jsx)("td", {
                          className: "w-56 min-w-min md:w-48",
                          children: __(e, e.network_rx, e.network_tx)
                        }), (0, Mb.jsx)("td", {
                          className: "hidden w-48 min-w-min md:table-cell lg:table-cell",
                          children: __(e, e.network_in, e.network_out)
                        }), (0, Mb.jsx)("td", {
                          className: "w-24 pl-2",
                          children: rw(e, "cpu")
                        }), (0, Mb.jsx)("td", {
                          className: "w-24 pl-2",
                          children: rw(e, "mem")
                        }), (0, Mb.jsx)("td", {
                          className: "w-24 pl-2 pr-px lg:pr-0",
                          children: rw(e, "hdd")
                        }), (0, Mb.jsx)("td", {
                          className: "hidden w-44 pr-2 pl-2 xl:table-cell",
                          children: aw(e)
                        })]
                      },
                      "r-".concat(t)), (0, Mb.jsx)("tr", {
                        id: "r-".concat(t, "-expand"),
                        className: "".concat(n, " font-xs font-mono font-normal transition-all duration-[500ms] ease-out md:duration-[450ms] ").concat((e.online4 || e.online6) && o.includes(t) ? "visible": "collapse"),
                        children: (0, Mb.jsx)("td", {
                          colSpan: 16,
                          children: (0, Mb.jsxs)("div", {
                            className: "grid w-11/12 grid-cols-12 items-center space-x-1 overflow-hidden text-center transition-all duration-[500ms] ease-out md:duration-[450ms] ".concat((e.online4 || e.online6) && o.includes(t) ? "max-h-48": "max-h-0"),
                            children: [(0, Mb.jsx)("div", {
                              className: "col-start-1 col-end-7 text-right",
                              children: "\u30ed\u30fc\u30c9:"
                            }), (0, Mb.jsxs)("div", {
                              className: "col-start-7 col-end-13 text-left",
                              children: [e.load_1.toFixed(2), "/", e.load_5.toFixed(2), "/", e.load_15.toFixed(2)]
                            }), (0, Mb.jsx)("div", {
                              className: "col-start-1 col-end-7 text-right",
                              children: "\u30e1\u30e2\u30ea\u30fc:"
                            }), (0, Mb.jsxs)("div", {
                              className: "col-start-7 col-end-13 text-left",
                              children: [lw(1024 * e.memory_used), "/", lw(1024 * e.memory_total)]
                            }), (0, Mb.jsx)("div", {
                              className: "col-start-1 col-end-7 text-right",
                              children: "\u30b9\u30ef\u30c3\u30d7:"
                            }), (0, Mb.jsxs)("div", {
                              className: "col-start-7 col-end-13 text-left",
                              children: [lw(e.swap_used * (e.si ? 1e3: 1024), 2, e.si ? 1 : 0), "/", lw(e.swap_total * (e.si ? 1e3: 1024), 2, e.si ? 1 : 0)]
                            }), (0, Mb.jsx)("div", {
                              className: "col-start-1 col-end-7 text-right",
                              children: "\u30c7\u30a3\u30b9\u30af:"
                            }), (0, Mb.jsxs)("div", {
                              className: "col-start-7 col-end-13 text-left",
                              children: [lw(e.hdd_used * (e.si ? 1e6: 1048576), 2, e.si ? 1 : 0), "/", lw(e.hdd_total * (e.si ? 1e6: 1048576), 2, e.si ? 1 : 0)]
                            }), (0, Mb.jsx)("div", {
                              className: "col-start-1 col-end-7 text-right",
                              children: "TCP/UDP/\u30d7\u30ed\u30bb\u30b9/\u30b9\u30ec\u30c3\u30c9:"
                            }), (0, Mb.jsxs)("div", {
                              className: "col-start-7 col-end-13 text-left",
                              children: [e.tcp_count, "/", e.udp_count, "/", e.process_count, "/", e.thread_count]
                            }), (0, Mb.jsx)("div", {
                              className: "col-start-1 col-end-7 text-right",
                              children: "\u30ec\u30a4\u30c6\u30f3\u30b7[\u6771\u4eac/\uc11c\uc6b8/\u9999\u6e2f]:"
                            }), (0, Mb.jsxs)("div", {
                              className: "col-start-7 col-end-13 text-left",
                              children: [e.time_10010, "ms/", e.time_189, "ms/", e.time_10086, "ms"]
                            }), (0, Mb.jsx)("div", {
                              className: "col-start-1 col-end-7 text-right xl:hidden",
                              children: "\u30d1\u30b1\u30c3\u30c8\u30ed\u30b9[\u6771\u4eac/\uc11c\uc6b8/\u9999\u6e2f]:"
                            }), (0, Mb.jsxs)("div", {
                              className: "col-start-7 col-end-13 text-left xl:hidden",
                              children: [e.ping_10010.toFixed(0), "%/", e.ping_189.toFixed(0), "%/", e.ping_10086.toFixed(0), "%"]
                            }), (0, Mb.jsx)("div", {
                              className: "col-start-1 col-end-7 text-right md:hidden",
                              children: "\u4eca\u6708\u306e\u30c7\u30fc\u30bf\u8ee2\u9001\u91cf\u0020\u4e0b\u308a\u007c\u4e0a\u308a:"
                            }), (0, Mb.jsxs)("div", {
                              className: "col-start-7 col-end-13 text-left md:hidden",
                              children: [S_(e, e.network_in - e.last_network_in, e.network_out - e.last_network_out)]
                            }), (0, Mb.jsxs)("div", {
                              className: "col-start-2 col-end-13 flex items-center justify-center space-x-1",
                              children: [(0, Mb.jsxs)("div", {
                                className: "text-red-400 dark:text-white",
                                children: ["#", t]
                              }), (0, Mb.jsx)(_x, {
                                orientation: "vertical"
                              }), E_(e)]
                            })]
                          })
                        })
                      },
                      "r-".concat(t, "-expand"))]
                    })
                  }))
                })]
              },
              "ssr-table") : (0, Mb.jsx)("div", {
                className: "mx-auto mt-8 grid min-w-min justify-center bg-transparent",
                children: (0, Mb.jsx)(Ix, {
                  direction: "row",
                  spacing: 4,
                  children: (0, Mb.jsx)(vd, {
                    size: "xl",
                    speed: "0.75s",
                    thickness: "4px",
                    color: "blue.500"
                  })
                })
              })
            }), (0, Mb.jsxs)("div", {
              className: "mt-2 pl-6 text-xs text-slate-400",
              children: ["\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8 ", r]
            })]
          })
        };
        function A_(e) {
          return Kx({
            tag: "svg",
            attr: {
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            },
            child: [{
              tag: "path",
              attr: {
                d: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
              }
            }]
          })(e)
        }
        var P_ = function() {
          var t = Ye((0, e.useState)({
            servers: [],
            updated: 0
          }), 2),
          n = t[0],
          r = t[1],
          a = vt().colorMode,
          o = Ye((0, e.useState)("dark"), 2),
          i = o[0],
          l = o[1];
          if (a !== i) {
            var s = "light" === a ? "#f8fafc": "#334155";
            "light" === a ? (document.documentElement.classList.remove("dark"), document.body.style.backgroundColor = s) : (document.documentElement.classList.add("dark"), document.body.style.backgroundColor = s),
            l(a)
          }
          return (0, e.useEffect)((function() {
            var e = function() {
              fetch("json/stats.json").then((function(e) {
                return e.json()
              })).then((function(e) {
                r(e)
              })).
              catch((function(e) {
                return console.log("\u9519\u8bef:", e)
              }))
            };
            e();
            var t = setInterval(e, 1e3);
            return function() {
              clearInterval(t)
            }
          }), []),
          (0, Mb.jsxs)("div", {
            id: "app",
            className: "grid h-full w-full bg-transparent subpixel-antialiased dark:bg-slate-700",
            children: [(0, Mb.jsx)("div", {
              id: "header",
              className: "h-[80px] w-full bg-slate-700 text-green-400 md:h-[100px]",
              children: (0, Mb.jsx)(Db, {})
            }), (0, Mb.jsx)("div", {
              id: "body",
              className: "container mx-auto -mt-[20px] h-auto w-full max-w-7xl dark:bg-slate-700 md:-mt-[32px]",
              children: (0, Mb.jsx)(C_, c({},
              n))
            }), (0, Mb.jsxs)("div", {
              id: "footer",
              className: "font-blod flex w-full items-center justify-center pt-4 pb-4 dark:bg-slate-700",
              children: ["Copyright © 2023", (0, Mb.jsx)("p", {
                className: "pl-1 text-indigo-800 dark:text-green-400",
                children: (0, Mb.jsx)(Nb, {
                  to: "https://lvlv.lv",
                  text: "MIDORI"
                })
              })]
            })]
          })
        };
        r.createRoot(document.getElementById("root")).render((0, Mb.jsx)(e.StrictMode, {
          children: (0, Mb.jsxs)(Rb, {
            children: [(0, Mb.jsx)(Tt, {
              initialColorMode: "dark",
              type: "localStorage"
            }), (0, Mb.jsx)(P_, {})]
          })
        })),
        a()
      } ()
    } ();
