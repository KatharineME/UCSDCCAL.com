var oldJQ = null,
  jQueryInc = !1;
"undefined" != typeof jQuery && ((jQueryInc = !0), (oldJQ = jQuery)),
  (function (e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports
      ? (module.exports = e.document
          ? t(e, !0)
          : function (e) {
              if (!e.document)
                throw new Error("jQuery requires a window with a document");
              return t(e);
            })
      : t(e);
  })("undefined" != typeof window ? window : this, function (T, e) {
    "use strict";
    var t = [],
      C = T.document,
      i = Object.getPrototypeOf,
      a = t.slice,
      m = t.concat,
      u = t.push,
      r = t.indexOf,
      n = {},
      o = n.toString,
      g = n.hasOwnProperty,
      s = g.toString,
      l = s.call(Object),
      v = {},
      y = function (e) {
        return "function" == typeof e && "number" != typeof e.nodeType;
      },
      b = function (e) {
        return null != e && e === e.window;
      },
      c = { type: !0, src: !0, noModule: !0 };
    function x(e, t, n) {
      t = t || C;
      var i,
        r = t.createElement("script");
      if (((r.text = e), n)) for (i in c) n[i] && (r[i] = n[i]);
      t.head.appendChild(r).parentNode.removeChild(r);
    }
    function _(e) {
      return null == e
        ? e + ""
        : "object" == typeof e || "function" == typeof e
        ? n[o.call(e)] || "object"
        : typeof e;
    }
    var f = "3.3.1",
      E = function (e, t) {
        return new E.fn.init(e, t);
      },
      h = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    function d(e) {
      var t = !!e && "length" in e && e.length,
        n = _(e);
      return (
        !y(e) &&
        !b(e) &&
        ("array" === n ||
          0 === t ||
          ("number" == typeof t && 0 < t && t - 1 in e))
      );
    }
    (E.fn = E.prototype =
      {
        jquery: f,
        constructor: E,
        length: 0,
        toArray: function () {
          return a.call(this);
        },
        get: function (e) {
          return null == e
            ? a.call(this)
            : e < 0
            ? this[e + this.length]
            : this[e];
        },
        pushStack: function (e) {
          var t = E.merge(this.constructor(), e);
          return (t.prevObject = this), t;
        },
        each: function (e) {
          return E.each(this, e);
        },
        map: function (n) {
          return this.pushStack(
            E.map(this, function (e, t) {
              return n.call(e, t, e);
            })
          );
        },
        slice: function () {
          return this.pushStack(a.apply(this, arguments));
        },
        first: function () {
          return this.eq(0);
        },
        last: function () {
          return this.eq(-1);
        },
        eq: function (e) {
          var t = this.length,
            n = +e + (e < 0 ? t : 0);
          return this.pushStack(0 <= n && n < t ? [this[n]] : []);
        },
        end: function () {
          return this.prevObject || this.constructor();
        },
        push: u,
        sort: t.sort,
        splice: t.splice,
      }),
      (E.extend = E.fn.extend =
        function () {
          var e,
            t,
            n,
            i,
            r,
            o,
            s = arguments[0] || {},
            a = 1,
            u = arguments.length,
            l = !1;
          for (
            "boolean" == typeof s && ((l = s), (s = arguments[a] || {}), a++),
              "object" == typeof s || y(s) || (s = {}),
              a === u && ((s = this), a--);
            a < u;
            a++
          )
            if (null != (e = arguments[a]))
              for (t in e)
                (n = s[t]),
                  (i = e[t]),
                  s !== i &&
                    (l && i && (E.isPlainObject(i) || (r = Array.isArray(i)))
                      ? ((o = r
                          ? ((r = !1), n && Array.isArray(n) ? n : [])
                          : n && E.isPlainObject(n)
                          ? n
                          : {}),
                        (s[t] = E.extend(l, o, i)))
                      : void 0 !== i && (s[t] = i));
          return s;
        }),
      E.extend({
        expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (e) {
          throw new Error(e);
        },
        noop: function () {},
        isPlainObject: function (e) {
          var t, n;
          return (
            !(!e || "[object Object]" !== o.call(e)) &&
            ((t = i(e)),
            !t ||
              ((n = g.call(t, "constructor") && t.constructor),
              "function" == typeof n && s.call(n) === l))
          );
        },
        isEmptyObject: function (e) {
          var t;
          for (t in e) return !1;
          return !0;
        },
        globalEval: function (e) {
          x(e);
        },
        each: function (e, t) {
          var n,
            i = 0;
          if (d(e))
            for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
          else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
          return e;
        },
        trim: function (e) {
          return null == e ? "" : (e + "").replace(h, "");
        },
        makeArray: function (e, t) {
          var n = t || [];
          return (
            null != e &&
              (d(Object(e))
                ? E.merge(n, "string" == typeof e ? [e] : e)
                : u.call(n, e)),
            n
          );
        },
        inArray: function (e, t, n) {
          return null == t ? -1 : r.call(t, e, n);
        },
        merge: function (e, t) {
          for (var n = +t.length, i = 0, r = e.length; i < n; i++)
            e[r++] = t[i];
          return (e.length = r), e;
        },
        grep: function (e, t, n) {
          for (var i, r = [], o = 0, s = e.length, a = !n; o < s; o++)
            (i = !t(e[o], o)), i !== a && r.push(e[o]);
          return r;
        },
        map: function (e, t, n) {
          var i,
            r,
            o = 0,
            s = [];
          if (d(e))
            for (i = e.length; o < i; o++)
              (r = t(e[o], o, n)), null != r && s.push(r);
          else for (o in e) (r = t(e[o], o, n)), null != r && s.push(r);
          return m.apply([], s);
        },
        guid: 1,
        support: v,
      }),
      "function" == typeof Symbol &&
        (E.fn[Symbol.iterator] = t[Symbol.iterator]),
      E.each(
        "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
          " "
        ),
        function (e, t) {
          n["[object " + t + "]"] = t.toLowerCase();
        }
      );
    var p = (function (n) {
      var e,
        d,
        x,
        o,
        r,
        p,
        f,
        m,
        _,
        u,
        l,
        w,
        T,
        s,
        C,
        g,
        a,
        c,
        v,
        E = "sizzle" + 1 * new Date(),
        y = n.document,
        D = 0,
        i = 0,
        h = se(),
        b = se(),
        k = se(),
        S = function (e, t) {
          return e === t && (l = !0), 0;
        },
        j = {}.hasOwnProperty,
        t = [],
        A = t.pop,
        N = t.push,
        q = t.push,
        P = t.slice,
        H = function (e, t) {
          for (var n = 0, i = e.length; n < i; n++) if (e[n] === t) return n;
          return -1;
        },
        L =
          "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        O = "[\\x20\\t\\r\\n\\f]",
        I = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
        F =
          "\\[" +
          O +
          "*(" +
          I +
          ")(?:" +
          O +
          "*([*^$|!~]?=)" +
          O +
          "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
          I +
          "))|)" +
          O +
          "*\\]",
        R =
          ":(" +
          I +
          ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
          F +
          ")*)|.*)\\)|)",
        M = new RegExp(O + "+", "g"),
        W = new RegExp("^" + O + "+|((?:^|[^\\\\])(?:\\\\.)*)" + O + "+$", "g"),
        B = new RegExp("^" + O + "*," + O + "*"),
        U = new RegExp("^" + O + "*([>+~]|" + O + ")" + O + "*"),
        X = new RegExp("=" + O + "*([^\\]'\"]*?)" + O + "*\\]", "g"),
        z = new RegExp(R),
        $ = new RegExp("^" + I + "$"),
        Q = {
          ID: new RegExp("^#(" + I + ")"),
          CLASS: new RegExp("^\\.(" + I + ")"),
          TAG: new RegExp("^(" + I + "|[*])"),
          ATTR: new RegExp("^" + F),
          PSEUDO: new RegExp("^" + R),
          CHILD: new RegExp(
            "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
              O +
              "*(even|odd|(([+-]|)(\\d*)n|)" +
              O +
              "*(?:([+-]|)" +
              O +
              "*(\\d+)|))" +
              O +
              "*\\)|)",
            "i"
          ),
          bool: new RegExp("^(?:" + L + ")$", "i"),
          needsContext: new RegExp(
            "^" +
              O +
              "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
              O +
              "*((?:-\\d)?\\d*)" +
              O +
              "*\\)|)(?=[^-]|$)",
            "i"
          ),
        },
        G = /^(?:input|select|textarea|button)$/i,
        V = /^h\d$/i,
        Y = /^[^{]+\{\s*\[native \w/,
        Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        J = /[+~]/,
        K = new RegExp("\\\\([\\da-f]{1,6}" + O + "?|(" + O + ")|.)", "ig"),
        ee = function (e, t, n) {
          var i = "0x" + t - 65536;
          return i != i || n
            ? t
            : i < 0
            ? String.fromCharCode(i + 65536)
            : String.fromCharCode((i >> 10) | 55296, (1023 & i) | 56320);
        },
        te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        ne = function (e, t) {
          return t
            ? "\0" === e
              ? "�"
              : e.slice(0, -1) +
                "\\" +
                e.charCodeAt(e.length - 1).toString(16) +
                " "
            : "\\" + e;
        },
        ie = function () {
          w();
        },
        re = ye(
          function (e) {
            return !0 === e.disabled && ("form" in e || "label" in e);
          },
          { dir: "parentNode", next: "legend" }
        );
      try {
        q.apply((t = P.call(y.childNodes)), y.childNodes),
          t[y.childNodes.length].nodeType;
      } catch (e) {
        q = {
          apply: t.length
            ? function (e, t) {
                N.apply(e, P.call(t));
              }
            : function (e, t) {
                for (var n = e.length, i = 0; (e[n++] = t[i++]); );
                e.length = n - 1;
              },
        };
      }
      function oe(e, t, n, i) {
        var r,
          o,
          s,
          a,
          u,
          l,
          c,
          f = t && t.ownerDocument,
          h = t ? t.nodeType : 9;
        if (
          ((n = n || []),
          "string" != typeof e || !e || (1 !== h && 9 !== h && 11 !== h))
        )
          return n;
        if (
          !i &&
          ((t ? t.ownerDocument || t : y) !== T && w(t), (t = t || T), C)
        ) {
          if (11 !== h && (u = Z.exec(e)))
            if ((r = u[1])) {
              if (9 === h) {
                if (!(s = t.getElementById(r))) return n;
                if (s.id === r) return n.push(s), n;
              } else if (
                f &&
                (s = f.getElementById(r)) &&
                v(t, s) &&
                s.id === r
              )
                return n.push(s), n;
            } else {
              if (u[2]) return q.apply(n, t.getElementsByTagName(e)), n;
              if (
                (r = u[3]) &&
                d.getElementsByClassName &&
                t.getElementsByClassName
              )
                return q.apply(n, t.getElementsByClassName(r)), n;
            }
          if (d.qsa && !k[e + " "] && (!g || !g.test(e))) {
            if (1 !== h) (f = t), (c = e);
            else if ("object" !== t.nodeName.toLowerCase()) {
              for (
                (a = t.getAttribute("id"))
                  ? (a = a.replace(te, ne))
                  : t.setAttribute("id", (a = E)),
                  l = p(e),
                  o = l.length;
                o--;

              )
                l[o] = "#" + a + " " + ve(l[o]);
              (c = l.join(",")), (f = (J.test(e) && me(t.parentNode)) || t);
            }
            if (c)
              try {
                return q.apply(n, f.querySelectorAll(c)), n;
              } catch (e) {
              } finally {
                a === E && t.removeAttribute("id");
              }
          }
        }
        return m(e.replace(W, "$1"), t, n, i);
      }
      function se() {
        var i = [];
        return function e(t, n) {
          return (
            i.push(t + " ") > x.cacheLength && delete e[i.shift()],
            (e[t + " "] = n)
          );
        };
      }
      function ae(e) {
        return (e[E] = !0), e;
      }
      function ue(e) {
        var t = T.createElement("fieldset");
        try {
          return !!e(t);
        } catch (e) {
          return !1;
        } finally {
          t.parentNode && t.parentNode.removeChild(t), (t = null);
        }
      }
      function le(e, t) {
        for (var n = e.split("|"), i = n.length; i--; ) x.attrHandle[n[i]] = t;
      }
      function ce(e, t) {
        var n = t && e,
          i =
            n &&
            1 === e.nodeType &&
            1 === t.nodeType &&
            e.sourceIndex - t.sourceIndex;
        if (i) return i;
        if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
        return e ? 1 : -1;
      }
      function fe(n) {
        return function (e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && e.type === n;
        };
      }
      function he(n) {
        return function (e) {
          var t = e.nodeName.toLowerCase();
          return ("input" === t || "button" === t) && e.type === n;
        };
      }
      function de(t) {
        return function (e) {
          return "form" in e
            ? e.parentNode && !1 === e.disabled
              ? "label" in e
                ? "label" in e.parentNode
                  ? e.parentNode.disabled === t
                  : e.disabled === t
                : e.isDisabled === t || (e.isDisabled !== !t && re(e) === t)
              : e.disabled === t
            : "label" in e && e.disabled === t;
        };
      }
      function pe(s) {
        return ae(function (o) {
          return (
            (o = +o),
            ae(function (e, t) {
              for (var n, i = s([], e.length, o), r = i.length; r--; )
                e[(n = i[r])] && (e[n] = !(t[n] = e[n]));
            })
          );
        });
      }
      function me(e) {
        return e && void 0 !== e.getElementsByTagName && e;
      }
      for (e in ((d = oe.support = {}),
      (r = oe.isXML =
        function (e) {
          var t = e && (e.ownerDocument || e).documentElement;
          return !!t && "HTML" !== t.nodeName;
        }),
      (w = oe.setDocument =
        function (e) {
          var t,
            n,
            i = e ? e.ownerDocument || e : y;
          return (
            i !== T &&
              9 === i.nodeType &&
              i.documentElement &&
              ((T = i),
              (s = T.documentElement),
              (C = !r(T)),
              y !== T &&
                (n = T.defaultView) &&
                n.top !== n &&
                (n.addEventListener
                  ? n.addEventListener("unload", ie, !1)
                  : n.attachEvent && n.attachEvent("onunload", ie)),
              (d.attributes = ue(function (e) {
                return (e.className = "i"), !e.getAttribute("className");
              })),
              (d.getElementsByTagName = ue(function (e) {
                return (
                  e.appendChild(T.createComment("")),
                  !e.getElementsByTagName("*").length
                );
              })),
              (d.getElementsByClassName = Y.test(T.getElementsByClassName)),
              (d.getById = ue(function (e) {
                return (
                  (s.appendChild(e).id = E),
                  !T.getElementsByName || !T.getElementsByName(E).length
                );
              })),
              d.getById
                ? ((x.filter.ID = function (e) {
                    var t = e.replace(K, ee);
                    return function (e) {
                      return e.getAttribute("id") === t;
                    };
                  }),
                  (x.find.ID = function (e, t) {
                    if (void 0 !== t.getElementById && C) {
                      var n = t.getElementById(e);
                      return n ? [n] : [];
                    }
                  }))
                : ((x.filter.ID = function (e) {
                    var n = e.replace(K, ee);
                    return function (e) {
                      var t =
                        void 0 !== e.getAttributeNode &&
                        e.getAttributeNode("id");
                      return t && t.value === n;
                    };
                  }),
                  (x.find.ID = function (e, t) {
                    if (void 0 !== t.getElementById && C) {
                      var n,
                        i,
                        r,
                        o = t.getElementById(e);
                      if (o) {
                        if (
                          ((n = o.getAttributeNode("id")), n && n.value === e)
                        )
                          return [o];
                        for (r = t.getElementsByName(e), i = 0; (o = r[i++]); )
                          if (
                            ((n = o.getAttributeNode("id")), n && n.value === e)
                          )
                            return [o];
                      }
                      return [];
                    }
                  })),
              (x.find.TAG = d.getElementsByTagName
                ? function (e, t) {
                    return void 0 !== t.getElementsByTagName
                      ? t.getElementsByTagName(e)
                      : d.qsa
                      ? t.querySelectorAll(e)
                      : void 0;
                  }
                : function (e, t) {
                    var n,
                      i = [],
                      r = 0,
                      o = t.getElementsByTagName(e);
                    if ("*" !== e) return o;
                    for (; (n = o[r++]); ) 1 === n.nodeType && i.push(n);
                    return i;
                  }),
              (x.find.CLASS =
                d.getElementsByClassName &&
                function (e, t) {
                  if (void 0 !== t.getElementsByClassName && C)
                    return t.getElementsByClassName(e);
                }),
              (a = []),
              (g = []),
              (d.qsa = Y.test(T.querySelectorAll)) &&
                (ue(function (e) {
                  (s.appendChild(e).innerHTML =
                    "<a id='" +
                    E +
                    "'></a><select id='" +
                    E +
                    "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                    e.querySelectorAll("[msallowcapture^='']").length &&
                      g.push("[*^$]=" + O + "*(?:''|\"\")"),
                    e.querySelectorAll("[selected]").length ||
                      g.push("\\[" + O + "*(?:value|" + L + ")"),
                    e.querySelectorAll("[id~=" + E + "-]").length ||
                      g.push("~="),
                    e.querySelectorAll(":checked").length || g.push(":checked"),
                    e.querySelectorAll("a#" + E + "+*").length ||
                      g.push(".#.+[+~]");
                }),
                ue(function (e) {
                  e.innerHTML =
                    "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                  var t = T.createElement("input");
                  t.setAttribute("type", "hidden"),
                    e.appendChild(t).setAttribute("name", "D"),
                    e.querySelectorAll("[name=d]").length &&
                      g.push("name" + O + "*[*^$|!~]?="),
                    2 !== e.querySelectorAll(":enabled").length &&
                      g.push(":enabled", ":disabled"),
                    (s.appendChild(e).disabled = !0),
                    2 !== e.querySelectorAll(":disabled").length &&
                      g.push(":enabled", ":disabled"),
                    e.querySelectorAll("*,:x"),
                    g.push(",.*:");
                })),
              (d.matchesSelector = Y.test(
                (c =
                  s.matches ||
                  s.webkitMatchesSelector ||
                  s.mozMatchesSelector ||
                  s.oMatchesSelector ||
                  s.msMatchesSelector)
              )) &&
                ue(function (e) {
                  (d.disconnectedMatch = c.call(e, "*")),
                    c.call(e, "[s!='']:x"),
                    a.push("!=", R);
                }),
              (g = g.length && new RegExp(g.join("|"))),
              (a = a.length && new RegExp(a.join("|"))),
              (t = Y.test(s.compareDocumentPosition)),
              (v =
                t || Y.test(s.contains)
                  ? function (e, t) {
                      var n = 9 === e.nodeType ? e.documentElement : e,
                        i = t && t.parentNode;
                      return (
                        e === i ||
                        !(
                          !i ||
                          1 !== i.nodeType ||
                          !(n.contains
                            ? n.contains(i)
                            : e.compareDocumentPosition &&
                              16 & e.compareDocumentPosition(i))
                        )
                      );
                    }
                  : function (e, t) {
                      if (t)
                        for (; (t = t.parentNode); ) if (t === e) return !0;
                      return !1;
                    }),
              (S = t
                ? function (e, t) {
                    if (e === t) return (l = !0), 0;
                    var n =
                      !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return (
                      n ||
                      ((n =
                        (e.ownerDocument || e) === (t.ownerDocument || t)
                          ? e.compareDocumentPosition(t)
                          : 1),
                      1 & n ||
                      (!d.sortDetached && t.compareDocumentPosition(e) === n)
                        ? e === T || (e.ownerDocument === y && v(y, e))
                          ? -1
                          : t === T || (t.ownerDocument === y && v(y, t))
                          ? 1
                          : u
                          ? H(u, e) - H(u, t)
                          : 0
                        : 4 & n
                        ? -1
                        : 1)
                    );
                  }
                : function (e, t) {
                    if (e === t) return (l = !0), 0;
                    var n,
                      i = 0,
                      r = e.parentNode,
                      o = t.parentNode,
                      s = [e],
                      a = [t];
                    if (!r || !o)
                      return e === T
                        ? -1
                        : t === T
                        ? 1
                        : r
                        ? -1
                        : o
                        ? 1
                        : u
                        ? H(u, e) - H(u, t)
                        : 0;
                    if (r === o) return ce(e, t);
                    for (n = e; (n = n.parentNode); ) s.unshift(n);
                    for (n = t; (n = n.parentNode); ) a.unshift(n);
                    for (; s[i] === a[i]; ) i++;
                    return i
                      ? ce(s[i], a[i])
                      : s[i] === y
                      ? -1
                      : a[i] === y
                      ? 1
                      : 0;
                  })),
            T
          );
        }),
      (oe.matches = function (e, t) {
        return oe(e, null, null, t);
      }),
      (oe.matchesSelector = function (e, t) {
        if (
          ((e.ownerDocument || e) !== T && w(e),
          (t = t.replace(X, "='$1']")),
          d.matchesSelector &&
            C &&
            !k[t + " "] &&
            (!a || !a.test(t)) &&
            (!g || !g.test(t)))
        )
          try {
            var n = c.call(e, t);
            if (
              n ||
              d.disconnectedMatch ||
              (e.document && 11 !== e.document.nodeType)
            )
              return n;
          } catch (e) {}
        return 0 < oe(t, T, null, [e]).length;
      }),
      (oe.contains = function (e, t) {
        return (e.ownerDocument || e) !== T && w(e), v(e, t);
      }),
      (oe.attr = function (e, t) {
        (e.ownerDocument || e) !== T && w(e);
        var n = x.attrHandle[t.toLowerCase()],
          i = n && j.call(x.attrHandle, t.toLowerCase()) ? n(e, t, !C) : void 0;
        return void 0 !== i
          ? i
          : d.attributes || !C
          ? e.getAttribute(t)
          : (i = e.getAttributeNode(t)) && i.specified
          ? i.value
          : null;
      }),
      (oe.escape = function (e) {
        return (e + "").replace(te, ne);
      }),
      (oe.error = function (e) {
        throw new Error("Syntax error, unrecognized expression: " + e);
      }),
      (oe.uniqueSort = function (e) {
        var t,
          n = [],
          i = 0,
          r = 0;
        if (
          ((l = !d.detectDuplicates),
          (u = !d.sortStable && e.slice(0)),
          e.sort(S),
          l)
        ) {
          for (; (t = e[r++]); ) t === e[r] && (i = n.push(r));
          for (; i--; ) e.splice(n[i], 1);
        }
        return (u = null), e;
      }),
      (o = oe.getText =
        function (e) {
          var t,
            n = "",
            i = 0,
            r = e.nodeType;
          if (r) {
            if (1 === r || 9 === r || 11 === r) {
              if ("string" == typeof e.textContent) return e.textContent;
              for (e = e.firstChild; e; e = e.nextSibling) n += o(e);
            } else if (3 === r || 4 === r) return e.nodeValue;
          } else for (; (t = e[i++]); ) n += o(t);
          return n;
        }),
      (x = oe.selectors =
        {
          cacheLength: 50,
          createPseudo: ae,
          match: Q,
          attrHandle: {},
          find: {},
          relative: {
            ">": { dir: "parentNode", first: !0 },
            " ": { dir: "parentNode" },
            "+": { dir: "previousSibling", first: !0 },
            "~": { dir: "previousSibling" },
          },
          preFilter: {
            ATTR: function (e) {
              return (
                (e[1] = e[1].replace(K, ee)),
                (e[3] = (e[3] || e[4] || e[5] || "").replace(K, ee)),
                "~=" === e[2] && (e[3] = " " + e[3] + " "),
                e.slice(0, 4)
              );
            },
            CHILD: function (e) {
              return (
                (e[1] = e[1].toLowerCase()),
                "nth" === e[1].slice(0, 3)
                  ? (e[3] || oe.error(e[0]),
                    (e[4] = +(e[4]
                      ? e[5] + (e[6] || 1)
                      : 2 * ("even" === e[3] || "odd" === e[3]))),
                    (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                  : e[3] && oe.error(e[0]),
                e
              );
            },
            PSEUDO: function (e) {
              var t,
                n = !e[6] && e[2];
              return Q.CHILD.test(e[0])
                ? null
                : (e[3]
                    ? (e[2] = e[4] || e[5] || "")
                    : n &&
                      z.test(n) &&
                      (t = p(n, !0)) &&
                      (t = n.indexOf(")", n.length - t) - n.length) &&
                      ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                  e.slice(0, 3));
            },
          },
          filter: {
            TAG: function (e) {
              var t = e.replace(K, ee).toLowerCase();
              return "*" === e
                ? function () {
                    return !0;
                  }
                : function (e) {
                    return e.nodeName && e.nodeName.toLowerCase() === t;
                  };
            },
            CLASS: function (e) {
              var t = h[e + " "];
              return (
                t ||
                ((t = new RegExp("(^|" + O + ")" + e + "(" + O + "|$)")) &&
                  h(e, function (e) {
                    return t.test(
                      ("string" == typeof e.className && e.className) ||
                        (void 0 !== e.getAttribute &&
                          e.getAttribute("class")) ||
                        ""
                    );
                  }))
              );
            },
            ATTR: function (n, i, r) {
              return function (e) {
                var t = oe.attr(e, n);
                return null == t
                  ? "!=" === i
                  : !i ||
                      ((t += ""),
                      "=" === i
                        ? t === r
                        : "!=" === i
                        ? t !== r
                        : "^=" === i
                        ? r && 0 === t.indexOf(r)
                        : "*=" === i
                        ? r && -1 < t.indexOf(r)
                        : "$=" === i
                        ? r && t.slice(-r.length) === r
                        : "~=" === i
                        ? -1 < (" " + t.replace(M, " ") + " ").indexOf(r)
                        : "|=" === i &&
                          (t === r || t.slice(0, r.length + 1) === r + "-"));
              };
            },
            CHILD: function (p, e, t, m, g) {
              var v = "nth" !== p.slice(0, 3),
                y = "last" !== p.slice(-4),
                b = "of-type" === e;
              return 1 === m && 0 === g
                ? function (e) {
                    return !!e.parentNode;
                  }
                : function (e, t, n) {
                    var i,
                      r,
                      o,
                      s,
                      a,
                      u,
                      l = v !== y ? "nextSibling" : "previousSibling",
                      c = e.parentNode,
                      f = b && e.nodeName.toLowerCase(),
                      h = !n && !b,
                      d = !1;
                    if (c) {
                      if (v) {
                        for (; l; ) {
                          for (s = e; (s = s[l]); )
                            if (
                              b
                                ? s.nodeName.toLowerCase() === f
                                : 1 === s.nodeType
                            )
                              return !1;
                          u = l = "only" === p && !u && "nextSibling";
                        }
                        return !0;
                      }
                      if (((u = [y ? c.firstChild : c.lastChild]), y && h)) {
                        for (
                          s = c,
                            o = s[E] || (s[E] = {}),
                            r = o[s.uniqueID] || (o[s.uniqueID] = {}),
                            i = r[p] || [],
                            a = i[0] === D && i[1],
                            d = a && i[2],
                            s = a && c.childNodes[a];
                          (s = (++a && s && s[l]) || (d = a = 0) || u.pop());

                        )
                          if (1 === s.nodeType && ++d && s === e) {
                            r[p] = [D, a, d];
                            break;
                          }
                      } else if (
                        (h &&
                          ((s = e),
                          (o = s[E] || (s[E] = {})),
                          (r = o[s.uniqueID] || (o[s.uniqueID] = {})),
                          (i = r[p] || []),
                          (a = i[0] === D && i[1]),
                          (d = a)),
                        !1 === d)
                      )
                        for (
                          ;
                          (s = (++a && s && s[l]) || (d = a = 0) || u.pop()) &&
                          ((b
                            ? s.nodeName.toLowerCase() !== f
                            : 1 !== s.nodeType) ||
                            !++d ||
                            (h &&
                              ((o = s[E] || (s[E] = {})),
                              (r = o[s.uniqueID] || (o[s.uniqueID] = {})),
                              (r[p] = [D, d])),
                            s !== e));

                        );
                      return (d -= g), d === m || (d % m == 0 && 0 <= d / m);
                    }
                  };
            },
            PSEUDO: function (e, o) {
              var t,
                s =
                  x.pseudos[e] ||
                  x.setFilters[e.toLowerCase()] ||
                  oe.error("unsupported pseudo: " + e);
              return s[E]
                ? s(o)
                : 1 < s.length
                ? ((t = [e, e, "", o]),
                  x.setFilters.hasOwnProperty(e.toLowerCase())
                    ? ae(function (e, t) {
                        for (var n, i = s(e, o), r = i.length; r--; )
                          (n = H(e, i[r])), (e[n] = !(t[n] = i[r]));
                      })
                    : function (e) {
                        return s(e, 0, t);
                      })
                : s;
            },
          },
          pseudos: {
            not: ae(function (e) {
              var i = [],
                r = [],
                a = f(e.replace(W, "$1"));
              return a[E]
                ? ae(function (e, t, n, i) {
                    for (var r, o = a(e, null, i, []), s = e.length; s--; )
                      (r = o[s]) && (e[s] = !(t[s] = r));
                  })
                : function (e, t, n) {
                    return (
                      (i[0] = e), a(i, null, n, r), (i[0] = null), !r.pop()
                    );
                  };
            }),
            has: ae(function (t) {
              return function (e) {
                return 0 < oe(t, e).length;
              };
            }),
            contains: ae(function (t) {
              return (
                (t = t.replace(K, ee)),
                function (e) {
                  return -1 < (e.textContent || e.innerText || o(e)).indexOf(t);
                }
              );
            }),
            lang: ae(function (n) {
              return (
                $.test(n || "") || oe.error("unsupported lang: " + n),
                (n = n.replace(K, ee).toLowerCase()),
                function (e) {
                  var t;
                  do {
                    if (
                      (t = C
                        ? e.lang
                        : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                    )
                      return (
                        (t = t.toLowerCase()),
                        t === n || 0 === t.indexOf(n + "-")
                      );
                  } while ((e = e.parentNode) && 1 === e.nodeType);
                  return !1;
                }
              );
            }),
            target: function (e) {
              var t = n.location && n.location.hash;
              return t && t.slice(1) === e.id;
            },
            root: function (e) {
              return e === s;
            },
            focus: function (e) {
              return (
                e === T.activeElement &&
                (!T.hasFocus || T.hasFocus()) &&
                !!(e.type || e.href || ~e.tabIndex)
              );
            },
            enabled: de(!1),
            disabled: de(!0),
            checked: function (e) {
              var t = e.nodeName.toLowerCase();
              return (
                ("input" === t && !!e.checked) ||
                ("option" === t && !!e.selected)
              );
            },
            selected: function (e) {
              return (
                e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
              );
            },
            empty: function (e) {
              for (e = e.firstChild; e; e = e.nextSibling)
                if (e.nodeType < 6) return !1;
              return !0;
            },
            parent: function (e) {
              return !x.pseudos.empty(e);
            },
            header: function (e) {
              return V.test(e.nodeName);
            },
            input: function (e) {
              return G.test(e.nodeName);
            },
            button: function (e) {
              var t = e.nodeName.toLowerCase();
              return ("input" === t && "button" === e.type) || "button" === t;
            },
            text: function (e) {
              var t;
              return (
                "input" === e.nodeName.toLowerCase() &&
                "text" === e.type &&
                (null == (t = e.getAttribute("type")) ||
                  "text" === t.toLowerCase())
              );
            },
            first: pe(function () {
              return [0];
            }),
            last: pe(function (e, t) {
              return [t - 1];
            }),
            eq: pe(function (e, t, n) {
              return [n < 0 ? n + t : n];
            }),
            even: pe(function (e, t) {
              for (var n = 0; n < t; n += 2) e.push(n);
              return e;
            }),
            odd: pe(function (e, t) {
              for (var n = 1; n < t; n += 2) e.push(n);
              return e;
            }),
            lt: pe(function (e, t, n) {
              for (var i = n < 0 ? n + t : n; 0 <= --i; ) e.push(i);
              return e;
            }),
            gt: pe(function (e, t, n) {
              for (var i = n < 0 ? n + t : n; ++i < t; ) e.push(i);
              return e;
            }),
          },
        }),
      (x.pseudos.nth = x.pseudos.eq),
      { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
        x.pseudos[e] = fe(e);
      for (e in { submit: !0, reset: !0 }) x.pseudos[e] = he(e);
      function ge() {}
      function ve(e) {
        for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
        return i;
      }
      function ye(a, e, t) {
        var u = e.dir,
          l = e.next,
          c = l || u,
          f = t && "parentNode" === c,
          h = i++;
        return e.first
          ? function (e, t, n) {
              for (; (e = e[u]); ) if (1 === e.nodeType || f) return a(e, t, n);
              return !1;
            }
          : function (e, t, n) {
              var i,
                r,
                o,
                s = [D, h];
              if (n) {
                for (; (e = e[u]); )
                  if ((1 === e.nodeType || f) && a(e, t, n)) return !0;
              } else
                for (; (e = e[u]); )
                  if (1 === e.nodeType || f)
                    if (
                      ((o = e[E] || (e[E] = {})),
                      (r = o[e.uniqueID] || (o[e.uniqueID] = {})),
                      l && l === e.nodeName.toLowerCase())
                    )
                      e = e[u] || e;
                    else {
                      if ((i = r[c]) && i[0] === D && i[1] === h)
                        return (s[2] = i[2]);
                      if (((r[c] = s), (s[2] = a(e, t, n)))) return !0;
                    }
              return !1;
            };
      }
      function be(r) {
        return 1 < r.length
          ? function (e, t, n) {
              for (var i = r.length; i--; ) if (!r[i](e, t, n)) return !1;
              return !0;
            }
          : r[0];
      }
      function xe(e, t, n, i, r) {
        for (var o, s = [], a = 0, u = e.length, l = null != t; a < u; a++)
          (o = e[a]) && ((n && !n(o, i, r)) || (s.push(o), l && t.push(a)));
        return s;
      }
      function _e(d, p, m, g, v, e) {
        return (
          g && !g[E] && (g = _e(g)),
          v && !v[E] && (v = _e(v, e)),
          ae(function (e, t, n, i) {
            var r,
              o,
              s,
              a = [],
              u = [],
              l = t.length,
              c =
                e ||
                (function (e, t, n) {
                  for (var i = 0, r = t.length; i < r; i++) oe(e, t[i], n);
                  return n;
                })(p || "*", n.nodeType ? [n] : n, []),
              f = !d || (!e && p) ? c : xe(c, a, d, n, i),
              h = m ? (v || (e ? d : l || g) ? [] : t) : f;
            if ((m && m(f, h, n, i), g))
              for (r = xe(h, u), g(r, [], n, i), o = r.length; o--; )
                (s = r[o]) && (h[u[o]] = !(f[u[o]] = s));
            if (e) {
              if (v || d) {
                if (v) {
                  for (r = [], o = h.length; o--; )
                    (s = h[o]) && r.push((f[o] = s));
                  v(null, (h = []), r, i);
                }
                for (o = h.length; o--; )
                  (s = h[o]) &&
                    -1 < (r = v ? H(e, s) : a[o]) &&
                    (e[r] = !(t[r] = s));
              }
            } else (h = xe(h === t ? h.splice(l, h.length) : h)), v ? v(null, t, h, i) : q.apply(t, h);
          })
        );
      }
      function we(e) {
        for (
          var r,
            t,
            n,
            i = e.length,
            o = x.relative[e[0].type],
            s = o || x.relative[" "],
            a = o ? 1 : 0,
            u = ye(
              function (e) {
                return e === r;
              },
              s,
              !0
            ),
            l = ye(
              function (e) {
                return -1 < H(r, e);
              },
              s,
              !0
            ),
            c = [
              function (e, t, n) {
                var i =
                  (!o && (n || t !== _)) ||
                  ((r = t).nodeType ? u(e, t, n) : l(e, t, n));
                return (r = null), i;
              },
            ];
          a < i;
          a++
        )
          if ((t = x.relative[e[a].type])) c = [ye(be(c), t)];
          else {
            if (((t = x.filter[e[a].type].apply(null, e[a].matches)), t[E])) {
              for (n = ++a; n < i && !x.relative[e[n].type]; n++);
              return _e(
                1 < a && be(c),
                1 < a &&
                  ve(
                    e
                      .slice(0, a - 1)
                      .concat({ value: " " === e[a - 2].type ? "*" : "" })
                  ).replace(W, "$1"),
                t,
                a < n && we(e.slice(a, n)),
                n < i && we((e = e.slice(n))),
                n < i && ve(e)
              );
            }
            c.push(t);
          }
        return be(c);
      }
      return (
        (ge.prototype = x.filters = x.pseudos),
        (x.setFilters = new ge()),
        (p = oe.tokenize =
          function (e, t) {
            var n,
              i,
              r,
              o,
              s,
              a,
              u,
              l = b[e + " "];
            if (l) return t ? 0 : l.slice(0);
            for (s = e, a = [], u = x.preFilter; s; ) {
              for (o in ((n && !(i = B.exec(s))) ||
                (i && (s = s.slice(i[0].length) || s), a.push((r = []))),
              (n = !1),
              (i = U.exec(s)) &&
                ((n = i.shift()),
                r.push({ value: n, type: i[0].replace(W, " ") }),
                (s = s.slice(n.length))),
              x.filter))
                !(i = Q[o].exec(s)) ||
                  (u[o] && !(i = u[o](i))) ||
                  ((n = i.shift()),
                  r.push({ value: n, type: o, matches: i }),
                  (s = s.slice(n.length)));
              if (!n) break;
            }
            return t ? s.length : s ? oe.error(e) : b(e, a).slice(0);
          }),
        (f = oe.compile =
          function (e, t) {
            var n,
              g,
              v,
              y,
              b,
              i,
              r = [],
              o = [],
              s = k[e + " "];
            if (!s) {
              for (t || (t = p(e)), n = t.length; n--; )
                (s = we(t[n])), s[E] ? r.push(s) : o.push(s);
              (s = k(
                e,
                ((g = o),
                (v = r),
                (y = 0 < v.length),
                (b = 0 < g.length),
                (i = function (e, t, n, i, r) {
                  var o,
                    s,
                    a,
                    u = 0,
                    l = "0",
                    c = e && [],
                    f = [],
                    h = _,
                    d = e || (b && x.find.TAG("*", r)),
                    p = (D += null == h ? 1 : Math.random() || 0.1),
                    m = d.length;
                  for (
                    r && (_ = t === T || t || r);
                    l !== m && null != (o = d[l]);
                    l++
                  ) {
                    if (b && o) {
                      for (
                        s = 0, t || o.ownerDocument === T || (w(o), (n = !C));
                        (a = g[s++]);

                      )
                        if (a(o, t || T, n)) {
                          i.push(o);
                          break;
                        }
                      r && (D = p);
                    }
                    y && ((o = !a && o) && u--, e && c.push(o));
                  }
                  if (((u += l), y && l !== u)) {
                    for (s = 0; (a = v[s++]); ) a(c, f, t, n);
                    if (e) {
                      if (0 < u)
                        for (; l--; ) c[l] || f[l] || (f[l] = A.call(i));
                      f = xe(f);
                    }
                    q.apply(i, f),
                      r &&
                        !e &&
                        0 < f.length &&
                        1 < u + v.length &&
                        oe.uniqueSort(i);
                  }
                  return r && ((D = p), (_ = h)), c;
                }),
                y ? ae(i) : i)
              )),
                (s.selector = e);
            }
            return s;
          }),
        (m = oe.select =
          function (e, t, n, i) {
            var r,
              o,
              s,
              a,
              u,
              l = "function" == typeof e && e,
              c = !i && p((e = l.selector || e));
            if (((n = n || []), 1 === c.length)) {
              if (
                ((o = c[0] = c[0].slice(0)),
                2 < o.length &&
                  "ID" === (s = o[0]).type &&
                  9 === t.nodeType &&
                  C &&
                  x.relative[o[1].type])
              ) {
                if (
                  ((t = (x.find.ID(s.matches[0].replace(K, ee), t) || [])[0]),
                  !t)
                )
                  return n;
                l && (t = t.parentNode), (e = e.slice(o.shift().value.length));
              }
              for (
                r = Q.needsContext.test(e) ? 0 : o.length;
                r-- && ((s = o[r]), !x.relative[(a = s.type)]);

              )
                if (
                  (u = x.find[a]) &&
                  (i = u(
                    s.matches[0].replace(K, ee),
                    (J.test(o[0].type) && me(t.parentNode)) || t
                  ))
                ) {
                  if ((o.splice(r, 1), (e = i.length && ve(o)), !e))
                    return q.apply(n, i), n;
                  break;
                }
            }
            return (
              (l || f(e, c))(
                i,
                t,
                !C,
                n,
                !t || (J.test(e) && me(t.parentNode)) || t
              ),
              n
            );
          }),
        (d.sortStable = E.split("").sort(S).join("") === E),
        (d.detectDuplicates = !!l),
        w(),
        (d.sortDetached = ue(function (e) {
          return 1 & e.compareDocumentPosition(T.createElement("fieldset"));
        })),
        ue(function (e) {
          return (
            (e.innerHTML = "<a href='#'></a>"),
            "#" === e.firstChild.getAttribute("href")
          );
        }) ||
          le("type|href|height|width", function (e, t, n) {
            if (!n)
              return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
          }),
        (d.attributes &&
          ue(function (e) {
            return (
              (e.innerHTML = "<input/>"),
              e.firstChild.setAttribute("value", ""),
              "" === e.firstChild.getAttribute("value")
            );
          })) ||
          le("value", function (e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase())
              return e.defaultValue;
          }),
        ue(function (e) {
          return null == e.getAttribute("disabled");
        }) ||
          le(L, function (e, t, n) {
            var i;
            if (!n)
              return !0 === e[t]
                ? t.toLowerCase()
                : (i = e.getAttributeNode(t)) && i.specified
                ? i.value
                : null;
          }),
        oe
      );
    })(T);
    (E.find = p),
      (E.expr = p.selectors),
      (E.expr[":"] = E.expr.pseudos),
      (E.uniqueSort = E.unique = p.uniqueSort),
      (E.text = p.getText),
      (E.isXMLDoc = p.isXML),
      (E.contains = p.contains),
      (E.escapeSelector = p.escape);
    var w = function (e, t, n) {
        for (var i = [], r = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
          if (1 === e.nodeType) {
            if (r && E(e).is(n)) break;
            i.push(e);
          }
        return i;
      },
      D = function (e, t) {
        for (var n = []; e; e = e.nextSibling)
          1 === e.nodeType && e !== t && n.push(e);
        return n;
      },
      k = E.expr.match.needsContext;
    function S(e, t) {
      return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    }
    var j = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function A(e, n, i) {
      return y(n)
        ? E.grep(e, function (e, t) {
            return !!n.call(e, t, e) !== i;
          })
        : n.nodeType
        ? E.grep(e, function (e) {
            return (e === n) !== i;
          })
        : "string" != typeof n
        ? E.grep(e, function (e) {
            return -1 < r.call(n, e) !== i;
          })
        : E.filter(n, e, i);
    }
    (E.filter = function (e, t, n) {
      var i = t[0];
      return (
        n && (e = ":not(" + e + ")"),
        1 === t.length && 1 === i.nodeType
          ? E.find.matchesSelector(i, e)
            ? [i]
            : []
          : E.find.matches(
              e,
              E.grep(t, function (e) {
                return 1 === e.nodeType;
              })
            )
      );
    }),
      E.fn.extend({
        find: function (e) {
          var t,
            n,
            i = this.length,
            r = this;
          if ("string" != typeof e)
            return this.pushStack(
              E(e).filter(function () {
                for (t = 0; t < i; t++) if (E.contains(r[t], this)) return !0;
              })
            );
          for (n = this.pushStack([]), t = 0; t < i; t++) E.find(e, r[t], n);
          return 1 < i ? E.uniqueSort(n) : n;
        },
        filter: function (e) {
          return this.pushStack(A(this, e || [], !1));
        },
        not: function (e) {
          return this.pushStack(A(this, e || [], !0));
        },
        is: function (e) {
          return !!A(
            this,
            "string" == typeof e && k.test(e) ? E(e) : e || [],
            !1
          ).length;
        },
      });
    var N,
      q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
      P = (E.fn.init = function (e, t, n) {
        var i, r;
        if (!e) return this;
        if (((n = n || N), "string" != typeof e))
          return e.nodeType
            ? ((this[0] = e), (this.length = 1), this)
            : y(e)
            ? void 0 !== n.ready
              ? n.ready(e)
              : e(E)
            : E.makeArray(e, this);
        if (
          ((i =
            "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length
              ? [null, e, null]
              : q.exec(e)),
          !i || (!i[1] && t))
        )
          return !t || t.jquery
            ? (t || n).find(e)
            : this.constructor(t).find(e);
        if (i[1]) {
          if (
            ((t = t instanceof E ? t[0] : t),
            E.merge(
              this,
              E.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : C, !0)
            ),
            j.test(i[1]) && E.isPlainObject(t))
          )
            for (i in t) y(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
          return this;
        }
        return (
          (r = C.getElementById(i[2])),
          r && ((this[0] = r), (this.length = 1)),
          this
        );
      });
    (P.prototype = E.fn), (N = E(C));
    var H = /^(?:parents|prev(?:Until|All))/,
      L = { children: !0, contents: !0, next: !0, prev: !0 };
    function O(e, t) {
      for (; (e = e[t]) && 1 !== e.nodeType; );
      return e;
    }
    E.fn.extend({
      has: function (e) {
        var t = E(e, this),
          n = t.length;
        return this.filter(function () {
          for (var e = 0; e < n; e++) if (E.contains(this, t[e])) return !0;
        });
      },
      closest: function (e, t) {
        var n,
          i = 0,
          r = this.length,
          o = [],
          s = "string" != typeof e && E(e);
        if (!k.test(e))
          for (; i < r; i++)
            for (n = this[i]; n && n !== t; n = n.parentNode)
              if (
                n.nodeType < 11 &&
                (s
                  ? -1 < s.index(n)
                  : 1 === n.nodeType && E.find.matchesSelector(n, e))
              ) {
                o.push(n);
                break;
              }
        return this.pushStack(1 < o.length ? E.uniqueSort(o) : o);
      },
      index: function (e) {
        return e
          ? "string" == typeof e
            ? r.call(E(e), this[0])
            : r.call(this, e.jquery ? e[0] : e)
          : this[0] && this[0].parentNode
          ? this.first().prevAll().length
          : -1;
      },
      add: function (e, t) {
        return this.pushStack(E.uniqueSort(E.merge(this.get(), E(e, t))));
      },
      addBack: function (e) {
        return this.add(
          null == e ? this.prevObject : this.prevObject.filter(e)
        );
      },
    }),
      E.each(
        {
          parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null;
          },
          parents: function (e) {
            return w(e, "parentNode");
          },
          parentsUntil: function (e, t, n) {
            return w(e, "parentNode", n);
          },
          next: function (e) {
            return O(e, "nextSibling");
          },
          prev: function (e) {
            return O(e, "previousSibling");
          },
          nextAll: function (e) {
            return w(e, "nextSibling");
          },
          prevAll: function (e) {
            return w(e, "previousSibling");
          },
          nextUntil: function (e, t, n) {
            return w(e, "nextSibling", n);
          },
          prevUntil: function (e, t, n) {
            return w(e, "previousSibling", n);
          },
          siblings: function (e) {
            return D((e.parentNode || {}).firstChild, e);
          },
          children: function (e) {
            return D(e.firstChild);
          },
          contents: function (e) {
            return S(e, "iframe")
              ? e.contentDocument
              : (S(e, "template") && (e = e.content || e),
                E.merge([], e.childNodes));
          },
        },
        function (i, r) {
          E.fn[i] = function (e, t) {
            var n = E.map(this, r, e);
            return (
              "Until" !== i.slice(-5) && (t = e),
              t && "string" == typeof t && (n = E.filter(t, n)),
              1 < this.length &&
                (L[i] || E.uniqueSort(n), H.test(i) && n.reverse()),
              this.pushStack(n)
            );
          };
        }
      );
    var I = /[^\x20\t\r\n\f]+/g;
    function F(e) {
      return e;
    }
    function R(e) {
      throw e;
    }
    function M(e, t, n, i) {
      var r;
      try {
        e && y((r = e.promise))
          ? r.call(e).done(t).fail(n)
          : e && y((r = e.then))
          ? r.call(e, t, n)
          : t.apply(void 0, [e].slice(i));
      } catch (e) {
        n.apply(void 0, [e]);
      }
    }
    (E.Callbacks = function (i) {
      var e, n;
      i =
        "string" == typeof i
          ? ((e = i),
            (n = {}),
            E.each(e.match(I) || [], function (e, t) {
              n[t] = !0;
            }),
            n)
          : E.extend({}, i);
      var r,
        t,
        o,
        s,
        a = [],
        u = [],
        l = -1,
        c = function () {
          for (s = s || i.once, o = r = !0; u.length; l = -1)
            for (t = u.shift(); ++l < a.length; )
              !1 === a[l].apply(t[0], t[1]) &&
                i.stopOnFalse &&
                ((l = a.length), (t = !1));
          i.memory || (t = !1), (r = !1), s && (a = t ? [] : "");
        },
        f = {
          add: function () {
            return (
              a &&
                (t && !r && ((l = a.length - 1), u.push(t)),
                (function n(e) {
                  E.each(e, function (e, t) {
                    y(t)
                      ? (i.unique && f.has(t)) || a.push(t)
                      : t && t.length && "string" !== _(t) && n(t);
                  });
                })(arguments),
                t && !r && c()),
              this
            );
          },
          remove: function () {
            return (
              E.each(arguments, function (e, t) {
                for (var n; -1 < (n = E.inArray(t, a, n)); )
                  a.splice(n, 1), n <= l && l--;
              }),
              this
            );
          },
          has: function (e) {
            return e ? -1 < E.inArray(e, a) : 0 < a.length;
          },
          empty: function () {
            return a && (a = []), this;
          },
          disable: function () {
            return (s = u = []), (a = t = ""), this;
          },
          disabled: function () {
            return !a;
          },
          lock: function () {
            return (s = u = []), t || r || (a = t = ""), this;
          },
          locked: function () {
            return !!s;
          },
          fireWith: function (e, t) {
            return (
              s ||
                ((t = t || []),
                (t = [e, t.slice ? t.slice() : t]),
                u.push(t),
                r || c()),
              this
            );
          },
          fire: function () {
            return f.fireWith(this, arguments), this;
          },
          fired: function () {
            return !!o;
          },
        };
      return f;
    }),
      E.extend({
        Deferred: function (e) {
          var o = [
              [
                "notify",
                "progress",
                E.Callbacks("memory"),
                E.Callbacks("memory"),
                2,
              ],
              [
                "resolve",
                "done",
                E.Callbacks("once memory"),
                E.Callbacks("once memory"),
                0,
                "resolved",
              ],
              [
                "reject",
                "fail",
                E.Callbacks("once memory"),
                E.Callbacks("once memory"),
                1,
                "rejected",
              ],
            ],
            r = "pending",
            s = {
              state: function () {
                return r;
              },
              always: function () {
                return a.done(arguments).fail(arguments), this;
              },
              catch: function (e) {
                return s.then(null, e);
              },
              pipe: function () {
                var r = arguments;
                return E.Deferred(function (i) {
                  E.each(o, function (e, t) {
                    var n = y(r[t[4]]) && r[t[4]];
                    a[t[1]](function () {
                      var e = n && n.apply(this, arguments);
                      e && y(e.promise)
                        ? e
                            .promise()
                            .progress(i.notify)
                            .done(i.resolve)
                            .fail(i.reject)
                        : i[t[0] + "With"](this, n ? [e] : arguments);
                    });
                  }),
                    (r = null);
                }).promise();
              },
              then: function (t, n, i) {
                var u = 0;
                function l(r, o, s, a) {
                  return function () {
                    var n = this,
                      i = arguments,
                      e = function () {
                        var e, t;
                        if (!(r < u)) {
                          if (((e = s.apply(n, i)), e === o.promise()))
                            throw new TypeError("Thenable self-resolution");
                          (t =
                            e &&
                            ("object" == typeof e || "function" == typeof e) &&
                            e.then),
                            y(t)
                              ? a
                                ? t.call(e, l(u, o, F, a), l(u, o, R, a))
                                : (u++,
                                  t.call(
                                    e,
                                    l(u, o, F, a),
                                    l(u, o, R, a),
                                    l(u, o, F, o.notifyWith)
                                  ))
                              : (s !== F && ((n = void 0), (i = [e])),
                                (a || o.resolveWith)(n, i));
                        }
                      },
                      t = a
                        ? e
                        : function () {
                            try {
                              e();
                            } catch (e) {
                              E.Deferred.exceptionHook &&
                                E.Deferred.exceptionHook(e, t.stackTrace),
                                u <= r + 1 &&
                                  (s !== R && ((n = void 0), (i = [e])),
                                  o.rejectWith(n, i));
                            }
                          };
                    r
                      ? t()
                      : (E.Deferred.getStackHook &&
                          (t.stackTrace = E.Deferred.getStackHook()),
                        T.setTimeout(t));
                  };
                }
                return E.Deferred(function (e) {
                  o[0][3].add(l(0, e, y(i) ? i : F, e.notifyWith)),
                    o[1][3].add(l(0, e, y(t) ? t : F)),
                    o[2][3].add(l(0, e, y(n) ? n : R));
                }).promise();
              },
              promise: function (e) {
                return null != e ? E.extend(e, s) : s;
              },
            },
            a = {};
          return (
            E.each(o, function (e, t) {
              var n = t[2],
                i = t[5];
              (s[t[1]] = n.add),
                i &&
                  n.add(
                    function () {
                      r = i;
                    },
                    o[3 - e][2].disable,
                    o[3 - e][3].disable,
                    o[0][2].lock,
                    o[0][3].lock
                  ),
                n.add(t[3].fire),
                (a[t[0]] = function () {
                  return (
                    a[t[0] + "With"](this === a ? void 0 : this, arguments),
                    this
                  );
                }),
                (a[t[0] + "With"] = n.fireWith);
            }),
            s.promise(a),
            e && e.call(a, a),
            a
          );
        },
        when: function (e) {
          var n = arguments.length,
            t = n,
            i = Array(t),
            r = a.call(arguments),
            o = E.Deferred(),
            s = function (t) {
              return function (e) {
                (i[t] = this),
                  (r[t] = 1 < arguments.length ? a.call(arguments) : e),
                  --n || o.resolveWith(i, r);
              };
            };
          if (
            n <= 1 &&
            (M(e, o.done(s(t)).resolve, o.reject, !n),
            "pending" === o.state() || y(r[t] && r[t].then))
          )
            return o.then();
          for (; t--; ) M(r[t], s(t), o.reject);
          return o.promise();
        },
      });
    var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    (E.Deferred.exceptionHook = function (e, t) {
      T.console &&
        T.console.warn &&
        e &&
        W.test(e.name) &&
        T.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
    }),
      (E.readyException = function (e) {
        T.setTimeout(function () {
          throw e;
        });
      });
    var B = E.Deferred();
    function U() {
      C.removeEventListener("DOMContentLoaded", U),
        T.removeEventListener("load", U),
        E.ready();
    }
    (E.fn.ready = function (e) {
      return (
        B.then(e).catch(function (e) {
          E.readyException(e);
        }),
        this
      );
    }),
      E.extend({
        isReady: !1,
        readyWait: 1,
        ready: function (e) {
          (!0 === e ? --E.readyWait : E.isReady) ||
            ((E.isReady = !0),
            (!0 !== e && 0 < --E.readyWait) || B.resolveWith(C, [E]));
        },
      }),
      (E.ready.then = B.then),
      "complete" === C.readyState ||
      ("loading" !== C.readyState && !C.documentElement.doScroll)
        ? T.setTimeout(E.ready)
        : (C.addEventListener("DOMContentLoaded", U),
          T.addEventListener("load", U));
    var X = function (e, t, n, i, r, o, s) {
        var a = 0,
          u = e.length,
          l = null == n;
        if ("object" === _(n))
          for (a in ((r = !0), n)) X(e, t, a, n[a], !0, o, s);
        else if (
          void 0 !== i &&
          ((r = !0),
          y(i) || (s = !0),
          l &&
            (t = s
              ? (t.call(e, i), null)
              : ((l = t),
                function (e, t, n) {
                  return l.call(E(e), n);
                })),
          t)
        )
          for (; a < u; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
        return r ? e : l ? t.call(e) : u ? t(e[0], n) : o;
      },
      z = /^-ms-/,
      $ = /-([a-z])/g;
    function Q(e, t) {
      return t.toUpperCase();
    }
    function G(e) {
      return e.replace(z, "ms-").replace($, Q);
    }
    var V = function (e) {
      return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
    };
    function Y() {
      this.expando = E.expando + Y.uid++;
    }
    (Y.uid = 1),
      (Y.prototype = {
        cache: function (e) {
          var t = e[this.expando];
          return (
            t ||
              ((t = {}),
              V(e) &&
                (e.nodeType
                  ? (e[this.expando] = t)
                  : Object.defineProperty(e, this.expando, {
                      value: t,
                      configurable: !0,
                    }))),
            t
          );
        },
        set: function (e, t, n) {
          var i,
            r = this.cache(e);
          if ("string" == typeof t) r[G(t)] = n;
          else for (i in t) r[G(i)] = t[i];
          return r;
        },
        get: function (e, t) {
          return void 0 === t
            ? this.cache(e)
            : e[this.expando] && e[this.expando][G(t)];
        },
        access: function (e, t, n) {
          return void 0 === t || (t && "string" == typeof t && void 0 === n)
            ? this.get(e, t)
            : (this.set(e, t, n), void 0 !== n ? n : t);
        },
        remove: function (e, t) {
          var n,
            i = e[this.expando];
          if (void 0 !== i) {
            if (void 0 !== t) {
              (t = Array.isArray(t)
                ? t.map(G)
                : ((t = G(t)), t in i ? [t] : t.match(I) || [])),
                (n = t.length);
              for (; n--; ) delete i[t[n]];
            }
            (void 0 === t || E.isEmptyObject(i)) &&
              (e.nodeType
                ? (e[this.expando] = void 0)
                : delete e[this.expando]);
          }
        },
        hasData: function (e) {
          var t = e[this.expando];
          return void 0 !== t && !E.isEmptyObject(t);
        },
      });
    var Z = new Y(),
      J = new Y(),
      K = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      ee = /[A-Z]/g;
    function te(e, t, n) {
      var i, r;
      if (void 0 === n && 1 === e.nodeType)
        if (
          ((i = "data-" + t.replace(ee, "-$&").toLowerCase()),
          (n = e.getAttribute(i)),
          "string" == typeof n)
        ) {
          try {
            (r = n),
              (n =
                "true" === r ||
                ("false" !== r &&
                  ("null" === r
                    ? null
                    : r === +r + ""
                    ? +r
                    : K.test(r)
                    ? JSON.parse(r)
                    : r)));
          } catch (e) {}
          J.set(e, t, n);
        } else n = void 0;
      return n;
    }
    E.extend({
      hasData: function (e) {
        return J.hasData(e) || Z.hasData(e);
      },
      data: function (e, t, n) {
        return J.access(e, t, n);
      },
      removeData: function (e, t) {
        J.remove(e, t);
      },
      _data: function (e, t, n) {
        return Z.access(e, t, n);
      },
      _removeData: function (e, t) {
        Z.remove(e, t);
      },
    }),
      E.fn.extend({
        data: function (n, e) {
          var t,
            i,
            r,
            o = this[0],
            s = o && o.attributes;
          if (void 0 !== n)
            return "object" == typeof n
              ? this.each(function () {
                  J.set(this, n);
                })
              : X(
                  this,
                  function (e) {
                    var t;
                    if (o && void 0 === e)
                      return (
                        (t = J.get(o, n)),
                        void 0 !== t
                          ? t
                          : ((t = te(o, n)), void 0 !== t ? t : void 0)
                      );
                    this.each(function () {
                      J.set(this, n, e);
                    });
                  },
                  null,
                  e,
                  1 < arguments.length,
                  null,
                  !0
                );
          if (
            this.length &&
            ((r = J.get(o)), 1 === o.nodeType && !Z.get(o, "hasDataAttrs"))
          ) {
            for (t = s.length; t--; )
              s[t] &&
                ((i = s[t].name),
                0 === i.indexOf("data-") &&
                  ((i = G(i.slice(5))), te(o, i, r[i])));
            Z.set(o, "hasDataAttrs", !0);
          }
          return r;
        },
        removeData: function (e) {
          return this.each(function () {
            J.remove(this, e);
          });
        },
      }),
      E.extend({
        queue: function (e, t, n) {
          var i;
          if (e)
            return (
              (t = (t || "fx") + "queue"),
              (i = Z.get(e, t)),
              n &&
                (!i || Array.isArray(n)
                  ? (i = Z.access(e, t, E.makeArray(n)))
                  : i.push(n)),
              i || []
            );
        },
        dequeue: function (e, t) {
          t = t || "fx";
          var n = E.queue(e, t),
            i = n.length,
            r = n.shift(),
            o = E._queueHooks(e, t);
          "inprogress" === r && ((r = n.shift()), i--),
            r &&
              ("fx" === t && n.unshift("inprogress"),
              delete o.stop,
              r.call(
                e,
                function () {
                  E.dequeue(e, t);
                },
                o
              )),
            !i && o && o.empty.fire();
        },
        _queueHooks: function (e, t) {
          var n = t + "queueHooks";
          return (
            Z.get(e, n) ||
            Z.access(e, n, {
              empty: E.Callbacks("once memory").add(function () {
                Z.remove(e, [t + "queue", n]);
              }),
            })
          );
        },
      }),
      E.fn.extend({
        queue: function (t, n) {
          var e = 2;
          return (
            "string" != typeof t && ((n = t), (t = "fx"), e--),
            arguments.length < e
              ? E.queue(this[0], t)
              : void 0 === n
              ? this
              : this.each(function () {
                  var e = E.queue(this, t, n);
                  E._queueHooks(this, t),
                    "fx" === t && "inprogress" !== e[0] && E.dequeue(this, t);
                })
          );
        },
        dequeue: function (e) {
          return this.each(function () {
            E.dequeue(this, e);
          });
        },
        clearQueue: function (e) {
          return this.queue(e || "fx", []);
        },
        promise: function (e, t) {
          var n,
            i = 1,
            r = E.Deferred(),
            o = this,
            s = this.length,
            a = function () {
              --i || r.resolveWith(o, [o]);
            };
          for (
            "string" != typeof e && ((t = e), (e = void 0)), e = e || "fx";
            s--;

          )
            (n = Z.get(o[s], e + "queueHooks")),
              n && n.empty && (i++, n.empty.add(a));
          return a(), r.promise(t);
        },
      });
    var ne = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      ie = new RegExp("^(?:([+-])=|)(" + ne + ")([a-z%]*)$", "i"),
      re = ["Top", "Right", "Bottom", "Left"],
      oe = function (e, t) {
        return (
          (e = t || e),
          "none" === e.style.display ||
            ("" === e.style.display &&
              E.contains(e.ownerDocument, e) &&
              "none" === E.css(e, "display"))
        );
      },
      se = function (e, t, n, i) {
        var r,
          o,
          s = {};
        for (o in t) (s[o] = e.style[o]), (e.style[o] = t[o]);
        for (o in ((r = n.apply(e, i || [])), t)) e.style[o] = s[o];
        return r;
      };
    function ae(e, t, n, i) {
      var r,
        o,
        s = 20,
        a = i
          ? function () {
              return i.cur();
            }
          : function () {
              return E.css(e, t, "");
            },
        u = a(),
        l = (n && n[3]) || (E.cssNumber[t] ? "" : "px"),
        c = (E.cssNumber[t] || ("px" !== l && +u)) && ie.exec(E.css(e, t));
      if (c && c[3] !== l) {
        for (u /= 2, l = l || c[3], c = +u || 1; s--; )
          E.style(e, t, c + l),
            (1 - o) * (1 - (o = a() / u || 0.5)) <= 0 && (s = 0),
            (c /= o);
        (c *= 2), E.style(e, t, c + l), (n = n || []);
      }
      return (
        n &&
          ((c = +c || +u || 0),
          (r = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
          i && ((i.unit = l), (i.start = c), (i.end = r))),
        r
      );
    }
    var ue = {};
    function le(e, t) {
      for (var n, i, r, o, s, a, u, l = [], c = 0, f = e.length; c < f; c++)
        (i = e[c]),
          i.style &&
            ((n = i.style.display),
            t
              ? ("none" === n &&
                  ((l[c] = Z.get(i, "display") || null),
                  l[c] || (i.style.display = "")),
                "" === i.style.display &&
                  oe(i) &&
                  (l[c] =
                    ((r = i),
                    (o = void 0),
                    (s = void 0),
                    void 0,
                    (u = void 0),
                    (s = r.ownerDocument),
                    (a = r.nodeName),
                    (u = ue[a]),
                    u ||
                      ((o = s.body.appendChild(s.createElement(a))),
                      (u = E.css(o, "display")),
                      o.parentNode.removeChild(o),
                      "none" === u && (u = "block"),
                      (ue[a] = u),
                      u))))
              : "none" !== n && ((l[c] = "none"), Z.set(i, "display", n)));
      for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
      return e;
    }
    E.fn.extend({
      show: function () {
        return le(this, !0);
      },
      hide: function () {
        return le(this);
      },
      toggle: function (e) {
        return "boolean" == typeof e
          ? e
            ? this.show()
            : this.hide()
          : this.each(function () {
              oe(this) ? E(this).show() : E(this).hide();
            });
      },
    });
    var ce = /^(?:checkbox|radio)$/i,
      fe = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
      he = /^$|^module$|\/(?:java|ecma)script/i,
      de = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""],
      };
    function pe(e, t) {
      var n;
      return (
        (n =
          void 0 !== e.getElementsByTagName
            ? e.getElementsByTagName(t || "*")
            : void 0 !== e.querySelectorAll
            ? e.querySelectorAll(t || "*")
            : []),
        void 0 === t || (t && S(e, t)) ? E.merge([e], n) : n
      );
    }
    function me(e, t) {
      for (var n = 0, i = e.length; n < i; n++)
        Z.set(e[n], "globalEval", !t || Z.get(t[n], "globalEval"));
    }
    (de.optgroup = de.option),
      (de.tbody = de.tfoot = de.colgroup = de.caption = de.thead),
      (de.th = de.td);
    var ge,
      ve,
      ye,
      be = /<|&#?\w+;/;
    function xe(e, t, n, i, r) {
      for (
        var o,
          s,
          a,
          u,
          l,
          c,
          f = t.createDocumentFragment(),
          h = [],
          d = 0,
          p = e.length;
        d < p;
        d++
      )
        if (((o = e[d]), o || 0 === o))
          if ("object" === _(o)) E.merge(h, o.nodeType ? [o] : o);
          else if (be.test(o)) {
            for (
              s = s || f.appendChild(t.createElement("div")),
                a = (fe.exec(o) || ["", ""])[1].toLowerCase(),
                u = de[a] || de._default,
                s.innerHTML = u[1] + E.htmlPrefilter(o) + u[2],
                c = u[0];
              c--;

            )
              s = s.lastChild;
            E.merge(h, s.childNodes), (s = f.firstChild), (s.textContent = "");
          } else h.push(t.createTextNode(o));
      for (f.textContent = "", d = 0; (o = h[d++]); )
        if (i && -1 < E.inArray(o, i)) r && r.push(o);
        else if (
          ((l = E.contains(o.ownerDocument, o)),
          (s = pe(f.appendChild(o), "script")),
          l && me(s),
          n)
        )
          for (c = 0; (o = s[c++]); ) he.test(o.type || "") && n.push(o);
      return f;
    }
    (ge = C.createDocumentFragment()),
      (ve = ge.appendChild(C.createElement("div"))),
      (ye = C.createElement("input")),
      ye.setAttribute("type", "radio"),
      ye.setAttribute("checked", "checked"),
      ye.setAttribute("name", "t"),
      ve.appendChild(ye),
      (v.checkClone = ve.cloneNode(!0).cloneNode(!0).lastChild.checked),
      (ve.innerHTML = "<textarea>x</textarea>"),
      (v.noCloneChecked = !!ve.cloneNode(!0).lastChild.defaultValue);
    var _e = C.documentElement,
      we = /^key/,
      Te = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      Ce = /^([^.]*)(?:\.(.+)|)/;
    function Ee() {
      return !0;
    }
    function De() {
      return !1;
    }
    function ke() {
      try {
        return C.activeElement;
      } catch (e) {}
    }
    function Se(e, t, n, i, r, o) {
      var s, a;
      if ("object" == typeof t) {
        for (a in ("string" != typeof n && ((i = i || n), (n = void 0)), t))
          Se(e, a, n, i, t[a], o);
        return e;
      }
      if (
        (null == i && null == r
          ? ((r = n), (i = n = void 0))
          : null == r &&
            ("string" == typeof n
              ? ((r = i), (i = void 0))
              : ((r = i), (i = n), (n = void 0))),
        !1 === r)
      )
        r = De;
      else if (!r) return e;
      return (
        1 === o &&
          ((s = r),
          (r = function (e) {
            return E().off(e), s.apply(this, arguments);
          }),
          (r.guid = s.guid || (s.guid = E.guid++))),
        e.each(function () {
          E.event.add(this, t, r, i, n);
        })
      );
    }
    (E.event = {
      global: {},
      add: function (t, e, n, i, r) {
        var o,
          s,
          a,
          u,
          l,
          c,
          f,
          h,
          d,
          p,
          m,
          g = Z.get(t);
        if (g)
          for (
            n.handler && ((o = n), (n = o.handler), (r = o.selector)),
              r && E.find.matchesSelector(_e, r),
              n.guid || (n.guid = E.guid++),
              (u = g.events) || (u = g.events = {}),
              (s = g.handle) ||
                (s = g.handle =
                  function (e) {
                    return void 0 !== E && E.event.triggered !== e.type
                      ? E.event.dispatch.apply(t, arguments)
                      : void 0;
                  }),
              e = (e || "").match(I) || [""],
              l = e.length;
            l--;

          )
            (a = Ce.exec(e[l]) || []),
              (d = m = a[1]),
              (p = (a[2] || "").split(".").sort()),
              d &&
                ((f = E.event.special[d] || {}),
                (d = (r ? f.delegateType : f.bindType) || d),
                (f = E.event.special[d] || {}),
                (c = E.extend(
                  {
                    type: d,
                    origType: m,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: r,
                    needsContext: r && E.expr.match.needsContext.test(r),
                    namespace: p.join("."),
                  },
                  o
                )),
                (h = u[d]) ||
                  ((h = u[d] = []),
                  (h.delegateCount = 0),
                  (f.setup && !1 !== f.setup.call(t, i, p, s)) ||
                    (t.addEventListener && t.addEventListener(d, s))),
                f.add &&
                  (f.add.call(t, c),
                  c.handler.guid || (c.handler.guid = n.guid)),
                r ? h.splice(h.delegateCount++, 0, c) : h.push(c),
                (E.event.global[d] = !0));
      },
      remove: function (e, t, n, i, r) {
        var o,
          s,
          a,
          u,
          l,
          c,
          f,
          h,
          d,
          p,
          m,
          g = Z.hasData(e) && Z.get(e);
        if (g && (u = g.events)) {
          for (t = (t || "").match(I) || [""], l = t.length; l--; )
            if (
              ((a = Ce.exec(t[l]) || []),
              (d = m = a[1]),
              (p = (a[2] || "").split(".").sort()),
              d)
            ) {
              for (
                f = E.event.special[d] || {},
                  d = (i ? f.delegateType : f.bindType) || d,
                  h = u[d] || [],
                  a =
                    a[2] &&
                    new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                  s = o = h.length;
                o--;

              )
                (c = h[o]),
                  (!r && m !== c.origType) ||
                    (n && n.guid !== c.guid) ||
                    (a && !a.test(c.namespace)) ||
                    (i && i !== c.selector && ("**" !== i || !c.selector)) ||
                    (h.splice(o, 1),
                    c.selector && h.delegateCount--,
                    f.remove && f.remove.call(e, c));
              s &&
                !h.length &&
                ((f.teardown && !1 !== f.teardown.call(e, p, g.handle)) ||
                  E.removeEvent(e, d, g.handle),
                delete u[d]);
            } else for (d in u) E.event.remove(e, d + t[l], n, i, !0);
          E.isEmptyObject(u) && Z.remove(e, "handle events");
        }
      },
      dispatch: function (e) {
        var t,
          n,
          i,
          r,
          o,
          s,
          a = E.event.fix(e),
          u = new Array(arguments.length),
          l = (Z.get(this, "events") || {})[a.type] || [],
          c = E.event.special[a.type] || {};
        for (u[0] = a, t = 1; t < arguments.length; t++) u[t] = arguments[t];
        if (
          ((a.delegateTarget = this),
          !c.preDispatch || !1 !== c.preDispatch.call(this, a))
        ) {
          for (
            s = E.event.handlers.call(this, a, l), t = 0;
            (r = s[t++]) && !a.isPropagationStopped();

          )
            for (
              a.currentTarget = r.elem, n = 0;
              (o = r.handlers[n++]) && !a.isImmediatePropagationStopped();

            )
              (a.rnamespace && !a.rnamespace.test(o.namespace)) ||
                ((a.handleObj = o),
                (a.data = o.data),
                (i = (
                  (E.event.special[o.origType] || {}).handle || o.handler
                ).apply(r.elem, u)),
                void 0 !== i &&
                  !1 === (a.result = i) &&
                  (a.preventDefault(), a.stopPropagation()));
          return c.postDispatch && c.postDispatch.call(this, a), a.result;
        }
      },
      handlers: function (e, t) {
        var n,
          i,
          r,
          o,
          s,
          a = [],
          u = t.delegateCount,
          l = e.target;
        if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
          for (; l !== this; l = l.parentNode || this)
            if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
              for (o = [], s = {}, n = 0; n < u; n++)
                (i = t[n]),
                  (r = i.selector + " "),
                  void 0 === s[r] &&
                    (s[r] = i.needsContext
                      ? -1 < E(r, this).index(l)
                      : E.find(r, this, null, [l]).length),
                  s[r] && o.push(i);
              o.length && a.push({ elem: l, handlers: o });
            }
        return (
          (l = this),
          u < t.length && a.push({ elem: l, handlers: t.slice(u) }),
          a
        );
      },
      addProp: function (t, e) {
        Object.defineProperty(E.Event.prototype, t, {
          enumerable: !0,
          configurable: !0,
          get: y(e)
            ? function () {
                if (this.originalEvent) return e(this.originalEvent);
              }
            : function () {
                if (this.originalEvent) return this.originalEvent[t];
              },
          set: function (e) {
            Object.defineProperty(this, t, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: e,
            });
          },
        });
      },
      fix: function (e) {
        return e[E.expando] ? e : new E.Event(e);
      },
      special: {
        load: { noBubble: !0 },
        focus: {
          trigger: function () {
            if (this !== ke() && this.focus) return this.focus(), !1;
          },
          delegateType: "focusin",
        },
        blur: {
          trigger: function () {
            if (this === ke() && this.blur) return this.blur(), !1;
          },
          delegateType: "focusout",
        },
        click: {
          trigger: function () {
            if ("checkbox" === this.type && this.click && S(this, "input"))
              return this.click(), !1;
          },
          _default: function (e) {
            return S(e.target, "a");
          },
        },
        beforeunload: {
          postDispatch: function (e) {
            void 0 !== e.result &&
              e.originalEvent &&
              (e.originalEvent.returnValue = e.result);
          },
        },
      },
    }),
      (E.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n);
      }),
      (E.Event = function (e, t) {
        if (!(this instanceof E.Event)) return new E.Event(e, t);
        e && e.type
          ? ((this.originalEvent = e),
            (this.type = e.type),
            (this.isDefaultPrevented =
              e.defaultPrevented ||
              (void 0 === e.defaultPrevented && !1 === e.returnValue)
                ? Ee
                : De),
            (this.target =
              e.target && 3 === e.target.nodeType
                ? e.target.parentNode
                : e.target),
            (this.currentTarget = e.currentTarget),
            (this.relatedTarget = e.relatedTarget))
          : (this.type = e),
          t && E.extend(this, t),
          (this.timeStamp = (e && e.timeStamp) || Date.now()),
          (this[E.expando] = !0);
      }),
      (E.Event.prototype = {
        constructor: E.Event,
        isDefaultPrevented: De,
        isPropagationStopped: De,
        isImmediatePropagationStopped: De,
        isSimulated: !1,
        preventDefault: function () {
          var e = this.originalEvent;
          (this.isDefaultPrevented = Ee),
            e && !this.isSimulated && e.preventDefault();
        },
        stopPropagation: function () {
          var e = this.originalEvent;
          (this.isPropagationStopped = Ee),
            e && !this.isSimulated && e.stopPropagation();
        },
        stopImmediatePropagation: function () {
          var e = this.originalEvent;
          (this.isImmediatePropagationStopped = Ee),
            e && !this.isSimulated && e.stopImmediatePropagation(),
            this.stopPropagation();
        },
      }),
      E.each(
        {
          altKey: !0,
          bubbles: !0,
          cancelable: !0,
          changedTouches: !0,
          ctrlKey: !0,
          detail: !0,
          eventPhase: !0,
          metaKey: !0,
          pageX: !0,
          pageY: !0,
          shiftKey: !0,
          view: !0,
          char: !0,
          charCode: !0,
          key: !0,
          keyCode: !0,
          button: !0,
          buttons: !0,
          clientX: !0,
          clientY: !0,
          offsetX: !0,
          offsetY: !0,
          pointerId: !0,
          pointerType: !0,
          screenX: !0,
          screenY: !0,
          targetTouches: !0,
          toElement: !0,
          touches: !0,
          which: function (e) {
            var t = e.button;
            return null == e.which && we.test(e.type)
              ? null != e.charCode
                ? e.charCode
                : e.keyCode
              : !e.which && void 0 !== t && Te.test(e.type)
              ? 1 & t
                ? 1
                : 2 & t
                ? 3
                : 4 & t
                ? 2
                : 0
              : e.which;
          },
        },
        E.event.addProp
      ),
      E.each(
        {
          mouseenter: "mouseover",
          mouseleave: "mouseout",
          pointerenter: "pointerover",
          pointerleave: "pointerout",
        },
        function (e, r) {
          E.event.special[e] = {
            delegateType: r,
            bindType: r,
            handle: function (e) {
              var t,
                n = e.relatedTarget,
                i = e.handleObj;
              return (
                (n && (n === this || E.contains(this, n))) ||
                  ((e.type = i.origType),
                  (t = i.handler.apply(this, arguments)),
                  (e.type = r)),
                t
              );
            },
          };
        }
      ),
      E.fn.extend({
        on: function (e, t, n, i) {
          return Se(this, e, t, n, i);
        },
        one: function (e, t, n, i) {
          return Se(this, e, t, n, i, 1);
        },
        off: function (e, t, n) {
          var i, r;
          if (e && e.preventDefault && e.handleObj)
            return (
              (i = e.handleObj),
              E(e.delegateTarget).off(
                i.namespace ? i.origType + "." + i.namespace : i.origType,
                i.selector,
                i.handler
              ),
              this
            );
          if ("object" != typeof e)
            return (
              (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
              !1 === n && (n = De),
              this.each(function () {
                E.event.remove(this, e, n, t);
              })
            );
          for (r in e) this.off(r, t, e[r]);
          return this;
        },
      });
    var je =
        /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
      Ae = /<script|<style|<link/i,
      Ne = /checked\s*(?:[^=]|=\s*.checked.)/i,
      qe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function Pe(e, t) {
      return (
        (S(e, "table") &&
          S(11 !== t.nodeType ? t : t.firstChild, "tr") &&
          E(e).children("tbody")[0]) ||
        e
      );
    }
    function He(e) {
      return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
    }
    function Le(e) {
      return (
        "true/" === (e.type || "").slice(0, 5)
          ? (e.type = e.type.slice(5))
          : e.removeAttribute("type"),
        e
      );
    }
    function Oe(e, t) {
      var n, i, r, o, s, a, u, l;
      if (1 === t.nodeType) {
        if (
          Z.hasData(e) &&
          ((o = Z.access(e)), (s = Z.set(t, o)), (l = o.events), l)
        )
          for (r in (delete s.handle, (s.events = {}), l))
            for (n = 0, i = l[r].length; n < i; n++) E.event.add(t, r, l[r][n]);
        J.hasData(e) && ((a = J.access(e)), (u = E.extend({}, a)), J.set(t, u));
      }
    }
    function Ie(n, i, r, o) {
      i = m.apply([], i);
      var e,
        t,
        s,
        a,
        u,
        l,
        c = 0,
        f = n.length,
        h = f - 1,
        d = i[0],
        p = y(d);
      if (p || (1 < f && "string" == typeof d && !v.checkClone && Ne.test(d)))
        return n.each(function (e) {
          var t = n.eq(e);
          p && (i[0] = d.call(this, e, t.html())), Ie(t, i, r, o);
        });
      if (
        f &&
        ((e = xe(i, n[0].ownerDocument, !1, n, o)),
        (t = e.firstChild),
        1 === e.childNodes.length && (e = t),
        t || o)
      ) {
        for (s = E.map(pe(e, "script"), He), a = s.length; c < f; c++)
          (u = e),
            c !== h &&
              ((u = E.clone(u, !0, !0)), a && E.merge(s, pe(u, "script"))),
            r.call(n[c], u, c);
        if (a)
          for (
            l = s[s.length - 1].ownerDocument, E.map(s, Le), c = 0;
            c < a;
            c++
          )
            (u = s[c]),
              he.test(u.type || "") &&
                !Z.access(u, "globalEval") &&
                E.contains(l, u) &&
                (u.src && "module" !== (u.type || "").toLowerCase()
                  ? E._evalUrl && E._evalUrl(u.src)
                  : x(u.textContent.replace(qe, ""), l, u));
      }
      return n;
    }
    function Fe(e, t, n) {
      for (var i, r = t ? E.filter(t, e) : e, o = 0; null != (i = r[o]); o++)
        n || 1 !== i.nodeType || E.cleanData(pe(i)),
          i.parentNode &&
            (n && E.contains(i.ownerDocument, i) && me(pe(i, "script")),
            i.parentNode.removeChild(i));
      return e;
    }
    E.extend({
      htmlPrefilter: function (e) {
        return e.replace(je, "<$1></$2>");
      },
      clone: function (e, t, n) {
        var i,
          r,
          o,
          s,
          a,
          u,
          l,
          c = e.cloneNode(!0),
          f = E.contains(e.ownerDocument, e);
        if (
          !(
            v.noCloneChecked ||
            (1 !== e.nodeType && 11 !== e.nodeType) ||
            E.isXMLDoc(e)
          )
        )
          for (s = pe(c), o = pe(e), i = 0, r = o.length; i < r; i++)
            (a = o[i]),
              (u = s[i]),
              void 0,
              (l = u.nodeName.toLowerCase()),
              "input" === l && ce.test(a.type)
                ? (u.checked = a.checked)
                : ("input" !== l && "textarea" !== l) ||
                  (u.defaultValue = a.defaultValue);
        if (t)
          if (n)
            for (
              o = o || pe(e), s = s || pe(c), i = 0, r = o.length;
              i < r;
              i++
            )
              Oe(o[i], s[i]);
          else Oe(e, c);
        return (
          (s = pe(c, "script")), 0 < s.length && me(s, !f && pe(e, "script")), c
        );
      },
      cleanData: function (e) {
        for (
          var t, n, i, r = E.event.special, o = 0;
          void 0 !== (n = e[o]);
          o++
        )
          if (V(n)) {
            if ((t = n[Z.expando])) {
              if (t.events)
                for (i in t.events)
                  r[i] ? E.event.remove(n, i) : E.removeEvent(n, i, t.handle);
              n[Z.expando] = void 0;
            }
            n[J.expando] && (n[J.expando] = void 0);
          }
      },
    }),
      E.fn.extend({
        detach: function (e) {
          return Fe(this, e, !0);
        },
        remove: function (e) {
          return Fe(this, e);
        },
        text: function (e) {
          return X(
            this,
            function (e) {
              return void 0 === e
                ? E.text(this)
                : this.empty().each(function () {
                    (1 !== this.nodeType &&
                      11 !== this.nodeType &&
                      9 !== this.nodeType) ||
                      (this.textContent = e);
                  });
            },
            null,
            e,
            arguments.length
          );
        },
        append: function () {
          return Ie(this, arguments, function (e) {
            if (
              1 === this.nodeType ||
              11 === this.nodeType ||
              9 === this.nodeType
            ) {
              var t = Pe(this, e);
              t.appendChild(e);
            }
          });
        },
        prepend: function () {
          return Ie(this, arguments, function (e) {
            if (
              1 === this.nodeType ||
              11 === this.nodeType ||
              9 === this.nodeType
            ) {
              var t = Pe(this, e);
              t.insertBefore(e, t.firstChild);
            }
          });
        },
        before: function () {
          return Ie(this, arguments, function (e) {
            this.parentNode && this.parentNode.insertBefore(e, this);
          });
        },
        after: function () {
          return Ie(this, arguments, function (e) {
            this.parentNode &&
              this.parentNode.insertBefore(e, this.nextSibling);
          });
        },
        empty: function () {
          for (var e, t = 0; null != (e = this[t]); t++)
            1 === e.nodeType && (E.cleanData(pe(e, !1)), (e.textContent = ""));
          return this;
        },
        clone: function (e, t) {
          return (
            (e = null != e && e),
            (t = null == t ? e : t),
            this.map(function () {
              return E.clone(this, e, t);
            })
          );
        },
        html: function (e) {
          return X(
            this,
            function (e) {
              var t = this[0] || {},
                n = 0,
                i = this.length;
              if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
              if (
                "string" == typeof e &&
                !Ae.test(e) &&
                !de[(fe.exec(e) || ["", ""])[1].toLowerCase()]
              ) {
                e = E.htmlPrefilter(e);
                try {
                  for (; n < i; n++)
                    (t = this[n] || {}),
                      1 === t.nodeType &&
                        (E.cleanData(pe(t, !1)), (t.innerHTML = e));
                  t = 0;
                } catch (e) {}
              }
              t && this.empty().append(e);
            },
            null,
            e,
            arguments.length
          );
        },
        replaceWith: function () {
          var n = [];
          return Ie(
            this,
            arguments,
            function (e) {
              var t = this.parentNode;
              E.inArray(this, n) < 0 &&
                (E.cleanData(pe(this)), t && t.replaceChild(e, this));
            },
            n
          );
        },
      }),
      E.each(
        {
          appendTo: "append",
          prependTo: "prepend",
          insertBefore: "before",
          insertAfter: "after",
          replaceAll: "replaceWith",
        },
        function (e, s) {
          E.fn[e] = function (e) {
            for (var t, n = [], i = E(e), r = i.length - 1, o = 0; o <= r; o++)
              (t = o === r ? this : this.clone(!0)),
                E(i[o])[s](t),
                u.apply(n, t.get());
            return this.pushStack(n);
          };
        }
      );
    var Re = new RegExp("^(" + ne + ")(?!px)[a-z%]+$", "i"),
      Me = function (e) {
        var t = e.ownerDocument.defaultView;
        return (t && t.opener) || (t = T), t.getComputedStyle(e);
      },
      We = new RegExp(re.join("|"), "i");
    function Be(e, t, n) {
      var i,
        r,
        o,
        s,
        a = e.style;
      return (
        (n = n || Me(e)),
        n &&
          ((s = n.getPropertyValue(t) || n[t]),
          "" !== s || E.contains(e.ownerDocument, e) || (s = E.style(e, t)),
          !v.pixelBoxStyles() &&
            Re.test(s) &&
            We.test(t) &&
            ((i = a.width),
            (r = a.minWidth),
            (o = a.maxWidth),
            (a.minWidth = a.maxWidth = a.width = s),
            (s = n.width),
            (a.width = i),
            (a.minWidth = r),
            (a.maxWidth = o))),
        void 0 !== s ? s + "" : s
      );
    }
    function Ue(e, t) {
      return {
        get: function () {
          if (!e()) return (this.get = t).apply(this, arguments);
          delete this.get;
        },
      };
    }
    !(function () {
      function e() {
        if (u) {
          (a.style.cssText =
            "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
            (u.style.cssText =
              "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
            _e.appendChild(a).appendChild(u);
          var e = T.getComputedStyle(u);
          (n = "1%" !== e.top),
            (s = 12 === t(e.marginLeft)),
            (u.style.right = "60%"),
            (o = 36 === t(e.right)),
            (i = 36 === t(e.width)),
            (u.style.position = "absolute"),
            (r = 36 === u.offsetWidth || "absolute"),
            _e.removeChild(a),
            (u = null);
        }
      }
      function t(e) {
        return Math.round(parseFloat(e));
      }
      var n,
        i,
        r,
        o,
        s,
        a = C.createElement("div"),
        u = C.createElement("div");
      u.style &&
        ((u.style.backgroundClip = "content-box"),
        (u.cloneNode(!0).style.backgroundClip = ""),
        (v.clearCloneStyle = "content-box" === u.style.backgroundClip),
        E.extend(v, {
          boxSizingReliable: function () {
            return e(), i;
          },
          pixelBoxStyles: function () {
            return e(), o;
          },
          pixelPosition: function () {
            return e(), n;
          },
          reliableMarginLeft: function () {
            return e(), s;
          },
          scrollboxSize: function () {
            return e(), r;
          },
        }));
    })();
    var Xe = /^(none|table(?!-c[ea]).+)/,
      ze = /^--/,
      $e = { position: "absolute", visibility: "hidden", display: "block" },
      Qe = { letterSpacing: "0", fontWeight: "400" },
      Ge = ["Webkit", "Moz", "ms"],
      Ve = C.createElement("div").style;
    function Ye(e) {
      var t = E.cssProps[e];
      return (
        t ||
          (t = E.cssProps[e] =
            (function (e) {
              if (e in Ve) return e;
              for (
                var t = e[0].toUpperCase() + e.slice(1), n = Ge.length;
                n--;

              )
                if (((e = Ge[n] + t), e in Ve)) return e;
            })(e) || e),
        t
      );
    }
    function Ze(e, t, n) {
      var i = ie.exec(t);
      return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t;
    }
    function Je(e, t, n, i, r, o) {
      var s = "width" === t ? 1 : 0,
        a = 0,
        u = 0;
      if (n === (i ? "border" : "content")) return 0;
      for (; s < 4; s += 2)
        "margin" === n && (u += E.css(e, n + re[s], !0, r)),
          i
            ? ("content" === n && (u -= E.css(e, "padding" + re[s], !0, r)),
              "margin" !== n &&
                (u -= E.css(e, "border" + re[s] + "Width", !0, r)))
            : ((u += E.css(e, "padding" + re[s], !0, r)),
              "padding" !== n
                ? (u += E.css(e, "border" + re[s] + "Width", !0, r))
                : (a += E.css(e, "border" + re[s] + "Width", !0, r)));
      return (
        !i &&
          0 <= o &&
          (u += Math.max(
            0,
            Math.ceil(
              e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - a - 0.5
            )
          )),
        u
      );
    }
    function Ke(e, t, n) {
      var i = Me(e),
        r = Be(e, t, i),
        o = "border-box" === E.css(e, "boxSizing", !1, i),
        s = o;
      if (Re.test(r)) {
        if (!n) return r;
        r = "auto";
      }
      return (
        (s = s && (v.boxSizingReliable() || r === e.style[t])),
        ("auto" === r ||
          (!parseFloat(r) && "inline" === E.css(e, "display", !1, i))) &&
          ((r = e["offset" + t[0].toUpperCase() + t.slice(1)]), (s = !0)),
        (r = parseFloat(r) || 0),
        r + Je(e, t, n || (o ? "border" : "content"), s, i, r) + "px"
      );
    }
    function et(e, t, n, i, r) {
      return new et.prototype.init(e, t, n, i, r);
    }
    E.extend({
      cssHooks: {
        opacity: {
          get: function (e, t) {
            if (t) {
              var n = Be(e, "opacity");
              return "" === n ? "1" : n;
            }
          },
        },
      },
      cssNumber: {
        animationIterationCount: !0,
        columnCount: !0,
        fillOpacity: !0,
        flexGrow: !0,
        flexShrink: !0,
        fontWeight: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
      },
      cssProps: {},
      style: function (e, t, n, i) {
        if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
          var r,
            o,
            s,
            a = G(t),
            u = ze.test(t),
            l = e.style;
          if (
            (u || (t = Ye(a)),
            (s = E.cssHooks[t] || E.cssHooks[a]),
            void 0 === n)
          )
            return s && "get" in s && void 0 !== (r = s.get(e, !1, i))
              ? r
              : l[t];
          (o = typeof n),
            "string" === o &&
              (r = ie.exec(n)) &&
              r[1] &&
              ((n = ae(e, t, r)), (o = "number")),
            null != n &&
              n == n &&
              ("number" === o &&
                (n += (r && r[3]) || (E.cssNumber[a] ? "" : "px")),
              v.clearCloneStyle ||
                "" !== n ||
                0 !== t.indexOf("background") ||
                (l[t] = "inherit"),
              (s && "set" in s && void 0 === (n = s.set(e, n, i))) ||
                (u ? l.setProperty(t, n) : (l[t] = n)));
        }
      },
      css: function (e, t, n, i) {
        var r,
          o,
          s,
          a = G(t),
          u = ze.test(t);
        return (
          u || (t = Ye(a)),
          (s = E.cssHooks[t] || E.cssHooks[a]),
          s && "get" in s && (r = s.get(e, !0, n)),
          void 0 === r && (r = Be(e, t, i)),
          "normal" === r && t in Qe && (r = Qe[t]),
          "" === n || n
            ? ((o = parseFloat(r)), !0 === n || isFinite(o) ? o || 0 : r)
            : r
        );
      },
    }),
      E.each(["height", "width"], function (e, a) {
        E.cssHooks[a] = {
          get: function (e, t, n) {
            if (t)
              return !Xe.test(E.css(e, "display")) ||
                (e.getClientRects().length && e.getBoundingClientRect().width)
                ? Ke(e, a, n)
                : se(e, $e, function () {
                    return Ke(e, a, n);
                  });
          },
          set: function (e, t, n) {
            var i,
              r = Me(e),
              o = "border-box" === E.css(e, "boxSizing", !1, r),
              s = n && Je(e, a, n, o, r);
            return (
              o &&
                v.scrollboxSize() === r.position &&
                (s -= Math.ceil(
                  e["offset" + a[0].toUpperCase() + a.slice(1)] -
                    parseFloat(r[a]) -
                    Je(e, a, "border", !1, r) -
                    0.5
                )),
              s &&
                (i = ie.exec(t)) &&
                "px" !== (i[3] || "px") &&
                ((e.style[a] = t), (t = E.css(e, a))),
              Ze(0, t, s)
            );
          },
        };
      }),
      (E.cssHooks.marginLeft = Ue(v.reliableMarginLeft, function (e, t) {
        if (t)
          return (
            (parseFloat(Be(e, "marginLeft")) ||
              e.getBoundingClientRect().left -
                se(e, { marginLeft: 0 }, function () {
                  return e.getBoundingClientRect().left;
                })) + "px"
          );
      })),
      E.each({ margin: "", padding: "", border: "Width" }, function (r, o) {
        (E.cssHooks[r + o] = {
          expand: function (e) {
            for (
              var t = 0, n = {}, i = "string" == typeof e ? e.split(" ") : [e];
              t < 4;
              t++
            )
              n[r + re[t] + o] = i[t] || i[t - 2] || i[0];
            return n;
          },
        }),
          "margin" !== r && (E.cssHooks[r + o].set = Ze);
      }),
      E.fn.extend({
        css: function (e, t) {
          return X(
            this,
            function (e, t, n) {
              var i,
                r,
                o = {},
                s = 0;
              if (Array.isArray(t)) {
                for (i = Me(e), r = t.length; s < r; s++)
                  o[t[s]] = E.css(e, t[s], !1, i);
                return o;
              }
              return void 0 !== n ? E.style(e, t, n) : E.css(e, t);
            },
            e,
            t,
            1 < arguments.length
          );
        },
      }),
      (E.Tween = et),
      (et.prototype = {
        constructor: et,
        init: function (e, t, n, i, r, o) {
          (this.elem = e),
            (this.prop = n),
            (this.easing = r || E.easing._default),
            (this.options = t),
            (this.start = this.now = this.cur()),
            (this.end = i),
            (this.unit = o || (E.cssNumber[n] ? "" : "px"));
        },
        cur: function () {
          var e = et.propHooks[this.prop];
          return e && e.get ? e.get(this) : et.propHooks._default.get(this);
        },
        run: function (e) {
          var t,
            n = et.propHooks[this.prop];
          return (
            this.options.duration
              ? (this.pos = t =
                  E.easing[this.easing](
                    e,
                    this.options.duration * e,
                    0,
                    1,
                    this.options.duration
                  ))
              : (this.pos = t = e),
            (this.now = (this.end - this.start) * t + this.start),
            this.options.step &&
              this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : et.propHooks._default.set(this),
            this
          );
        },
      }),
      (et.prototype.init.prototype = et.prototype),
      (et.propHooks = {
        _default: {
          get: function (e) {
            var t;
            return 1 !== e.elem.nodeType ||
              (null != e.elem[e.prop] && null == e.elem.style[e.prop])
              ? e.elem[e.prop]
              : ((t = E.css(e.elem, e.prop, "")), t && "auto" !== t ? t : 0);
          },
          set: function (e) {
            E.fx.step[e.prop]
              ? E.fx.step[e.prop](e)
              : 1 !== e.elem.nodeType ||
                (null == e.elem.style[E.cssProps[e.prop]] &&
                  !E.cssHooks[e.prop])
              ? (e.elem[e.prop] = e.now)
              : E.style(e.elem, e.prop, e.now + e.unit);
          },
        },
      }),
      (et.propHooks.scrollTop = et.propHooks.scrollLeft =
        {
          set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
          },
        }),
      (E.easing = {
        linear: function (e) {
          return e;
        },
        swing: function (e) {
          return 0.5 - Math.cos(e * Math.PI) / 2;
        },
        _default: "swing",
      }),
      (E.fx = et.prototype.init),
      (E.fx.step = {});
    var tt,
      nt,
      it,
      rt,
      ot,
      st = /^(?:toggle|show|hide)$/,
      at = /queueHooks$/;
    function ut() {
      nt &&
        (!1 === C.hidden && T.requestAnimationFrame
          ? T.requestAnimationFrame(ut)
          : T.setTimeout(ut, E.fx.interval),
        E.fx.tick());
    }
    function lt() {
      return (
        T.setTimeout(function () {
          tt = void 0;
        }),
        (tt = Date.now())
      );
    }
    function ct(e, t) {
      var n,
        i = 0,
        r = { height: e };
      for (t = t ? 1 : 0; i < 4; i += 2 - t)
        (n = re[i]), (r["margin" + n] = r["padding" + n] = e);
      return t && (r.opacity = r.width = e), r;
    }
    function ft(e, t, n) {
      for (
        var i,
          r = (ht.tweeners[t] || []).concat(ht.tweeners["*"]),
          o = 0,
          s = r.length;
        o < s;
        o++
      )
        if ((i = r[o].call(n, t, e))) return i;
    }
    function ht(s, e, t) {
      var n,
        a,
        i = 0,
        r = ht.prefilters.length,
        u = E.Deferred().always(function () {
          delete o.elem;
        }),
        o = function () {
          if (a) return !1;
          for (
            var e = tt || lt(),
              t = Math.max(0, l.startTime + l.duration - e),
              n = t / l.duration || 0,
              i = 1 - n,
              r = 0,
              o = l.tweens.length;
            r < o;
            r++
          )
            l.tweens[r].run(i);
          return (
            u.notifyWith(s, [l, i, t]),
            i < 1 && o
              ? t
              : (o || u.notifyWith(s, [l, 1, 0]), u.resolveWith(s, [l]), !1)
          );
        },
        l = u.promise({
          elem: s,
          props: E.extend({}, e),
          opts: E.extend(
            !0,
            { specialEasing: {}, easing: E.easing._default },
            t
          ),
          originalProperties: e,
          originalOptions: t,
          startTime: tt || lt(),
          duration: t.duration,
          tweens: [],
          createTween: function (e, t) {
            var n = E.Tween(
              s,
              l.opts,
              e,
              t,
              l.opts.specialEasing[e] || l.opts.easing
            );
            return l.tweens.push(n), n;
          },
          stop: function (e) {
            var t = 0,
              n = e ? l.tweens.length : 0;
            if (a) return this;
            for (a = !0; t < n; t++) l.tweens[t].run(1);
            return (
              e
                ? (u.notifyWith(s, [l, 1, 0]), u.resolveWith(s, [l, e]))
                : u.rejectWith(s, [l, e]),
              this
            );
          },
        }),
        c = l.props;
      for (
        !(function (e, t) {
          var n, i, r, o, s;
          for (n in e)
            if (
              ((i = G(n)),
              (r = t[i]),
              (o = e[n]),
              Array.isArray(o) && ((r = o[1]), (o = e[n] = o[0])),
              n !== i && ((e[i] = o), delete e[n]),
              (s = E.cssHooks[i]),
              s && ("expand" in s))
            )
              for (n in ((o = s.expand(o)), delete e[i], o))
                (n in e) || ((e[n] = o[n]), (t[n] = r));
            else t[i] = r;
        })(c, l.opts.specialEasing);
        i < r;
        i++
      )
        if (((n = ht.prefilters[i].call(l, s, c, l.opts)), n))
          return (
            y(n.stop) &&
              (E._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)),
            n
          );
      return (
        E.map(c, ft, l),
        y(l.opts.start) && l.opts.start.call(s, l),
        l
          .progress(l.opts.progress)
          .done(l.opts.done, l.opts.complete)
          .fail(l.opts.fail)
          .always(l.opts.always),
        E.fx.timer(E.extend(o, { elem: s, anim: l, queue: l.opts.queue })),
        l
      );
    }
    (E.Animation = E.extend(ht, {
      tweeners: {
        "*": [
          function (e, t) {
            var n = this.createTween(e, t);
            return ae(n.elem, e, ie.exec(t), n), n;
          },
        ],
      },
      tweener: function (e, t) {
        e = y(e) ? ((t = e), ["*"]) : e.match(I);
        for (var n, i = 0, r = e.length; i < r; i++)
          (n = e[i]),
            (ht.tweeners[n] = ht.tweeners[n] || []),
            ht.tweeners[n].unshift(t);
      },
      prefilters: [
        function (e, t, n) {
          var i,
            r,
            o,
            s,
            a,
            u,
            l,
            c,
            f = "width" in t || "height" in t,
            h = this,
            d = {},
            p = e.style,
            m = e.nodeType && oe(e),
            g = Z.get(e, "fxshow");
          for (i in (n.queue ||
            ((s = E._queueHooks(e, "fx")),
            null == s.unqueued &&
              ((s.unqueued = 0),
              (a = s.empty.fire),
              (s.empty.fire = function () {
                s.unqueued || a();
              })),
            s.unqueued++,
            h.always(function () {
              h.always(function () {
                s.unqueued--, E.queue(e, "fx").length || s.empty.fire();
              });
            })),
          t))
            if (((r = t[i]), st.test(r))) {
              if (
                (delete t[i],
                (o = o || "toggle" === r),
                r === (m ? "hide" : "show"))
              ) {
                if ("show" !== r || !g || void 0 === g[i]) continue;
                m = !0;
              }
              d[i] = (g && g[i]) || E.style(e, i);
            }
          if (((u = !E.isEmptyObject(t)), u || !E.isEmptyObject(d)))
            for (i in (f &&
              1 === e.nodeType &&
              ((n.overflow = [p.overflow, p.overflowX, p.overflowY]),
              (l = g && g.display),
              null == l && (l = Z.get(e, "display")),
              (c = E.css(e, "display")),
              "none" === c &&
                (l
                  ? (c = l)
                  : (le([e], !0),
                    (l = e.style.display || l),
                    (c = E.css(e, "display")),
                    le([e]))),
              ("inline" === c || ("inline-block" === c && null != l)) &&
                "none" === E.css(e, "float") &&
                (u ||
                  (h.done(function () {
                    p.display = l;
                  }),
                  null == l && ((c = p.display), (l = "none" === c ? "" : c))),
                (p.display = "inline-block"))),
            n.overflow &&
              ((p.overflow = "hidden"),
              h.always(function () {
                (p.overflow = n.overflow[0]),
                  (p.overflowX = n.overflow[1]),
                  (p.overflowY = n.overflow[2]);
              })),
            (u = !1),
            d))
              u ||
                (g
                  ? "hidden" in g && (m = g.hidden)
                  : (g = Z.access(e, "fxshow", { display: l })),
                o && (g.hidden = !m),
                m && le([e], !0),
                h.done(function () {
                  for (i in (m || le([e]), Z.remove(e, "fxshow"), d))
                    E.style(e, i, d[i]);
                })),
                (u = ft(m ? g[i] : 0, i, h)),
                i in g ||
                  ((g[i] = u.start), m && ((u.end = u.start), (u.start = 0)));
        },
      ],
      prefilter: function (e, t) {
        t ? ht.prefilters.unshift(e) : ht.prefilters.push(e);
      },
    })),
      (E.speed = function (e, t, n) {
        var i =
          e && "object" == typeof e
            ? E.extend({}, e)
            : {
                complete: n || (!n && t) || (y(e) && e),
                duration: e,
                easing: (n && t) || (t && !y(t) && t),
              };
        return (
          E.fx.off
            ? (i.duration = 0)
            : "number" != typeof i.duration &&
              (i.duration in E.fx.speeds
                ? (i.duration = E.fx.speeds[i.duration])
                : (i.duration = E.fx.speeds._default)),
          (null != i.queue && !0 !== i.queue) || (i.queue = "fx"),
          (i.old = i.complete),
          (i.complete = function () {
            y(i.old) && i.old.call(this), i.queue && E.dequeue(this, i.queue);
          }),
          i
        );
      }),
      E.fn.extend({
        fadeTo: function (e, t, n, i) {
          return this.filter(oe)
            .css("opacity", 0)
            .show()
            .end()
            .animate({ opacity: t }, e, n, i);
        },
        animate: function (t, e, n, i) {
          var r = E.isEmptyObject(t),
            o = E.speed(e, n, i),
            s = function () {
              var e = ht(this, E.extend({}, t), o);
              (r || Z.get(this, "finish")) && e.stop(!0);
            };
          return (
            (s.finish = s),
            r || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
          );
        },
        stop: function (r, e, o) {
          var s = function (e) {
            var t = e.stop;
            delete e.stop, t(o);
          };
          return (
            "string" != typeof r && ((o = e), (e = r), (r = void 0)),
            e && !1 !== r && this.queue(r || "fx", []),
            this.each(function () {
              var e = !0,
                t = null != r && r + "queueHooks",
                n = E.timers,
                i = Z.get(this);
              if (t) i[t] && i[t].stop && s(i[t]);
              else for (t in i) i[t] && i[t].stop && at.test(t) && s(i[t]);
              for (t = n.length; t--; )
                n[t].elem !== this ||
                  (null != r && n[t].queue !== r) ||
                  (n[t].anim.stop(o), (e = !1), n.splice(t, 1));
              (!e && o) || E.dequeue(this, r);
            })
          );
        },
        finish: function (s) {
          return (
            !1 !== s && (s = s || "fx"),
            this.each(function () {
              var e,
                t = Z.get(this),
                n = t[s + "queue"],
                i = t[s + "queueHooks"],
                r = E.timers,
                o = n ? n.length : 0;
              for (
                t.finish = !0,
                  E.queue(this, s, []),
                  i && i.stop && i.stop.call(this, !0),
                  e = r.length;
                e--;

              )
                r[e].elem === this &&
                  r[e].queue === s &&
                  (r[e].anim.stop(!0), r.splice(e, 1));
              for (e = 0; e < o; e++)
                n[e] && n[e].finish && n[e].finish.call(this);
              delete t.finish;
            })
          );
        },
      }),
      E.each(["toggle", "show", "hide"], function (e, i) {
        var r = E.fn[i];
        E.fn[i] = function (e, t, n) {
          return null == e || "boolean" == typeof e
            ? r.apply(this, arguments)
            : this.animate(ct(i, !0), e, t, n);
        };
      }),
      E.each(
        {
          slideDown: ct("show"),
          slideUp: ct("hide"),
          slideToggle: ct("toggle"),
          fadeIn: { opacity: "show" },
          fadeOut: { opacity: "hide" },
          fadeToggle: { opacity: "toggle" },
        },
        function (e, i) {
          E.fn[e] = function (e, t, n) {
            return this.animate(i, e, t, n);
          };
        }
      ),
      (E.timers = []),
      (E.fx.tick = function () {
        var e,
          t = 0,
          n = E.timers;
        for (tt = Date.now(); t < n.length; t++)
          (e = n[t]), e() || n[t] !== e || n.splice(t--, 1);
        n.length || E.fx.stop(), (tt = void 0);
      }),
      (E.fx.timer = function (e) {
        E.timers.push(e), E.fx.start();
      }),
      (E.fx.interval = 13),
      (E.fx.start = function () {
        nt || ((nt = !0), ut());
      }),
      (E.fx.stop = function () {
        nt = null;
      }),
      (E.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
      (E.fn.delay = function (i, e) {
        return (
          (i = (E.fx && E.fx.speeds[i]) || i),
          (e = e || "fx"),
          this.queue(e, function (e, t) {
            var n = T.setTimeout(e, i);
            t.stop = function () {
              T.clearTimeout(n);
            };
          })
        );
      }),
      (it = C.createElement("input")),
      (rt = C.createElement("select")),
      (ot = rt.appendChild(C.createElement("option"))),
      (it.type = "checkbox"),
      (v.checkOn = "" !== it.value),
      (v.optSelected = ot.selected),
      (it = C.createElement("input")),
      (it.value = "t"),
      (it.type = "radio"),
      (v.radioValue = "t" === it.value);
    var dt,
      pt = E.expr.attrHandle;
    E.fn.extend({
      attr: function (e, t) {
        return X(this, E.attr, e, t, 1 < arguments.length);
      },
      removeAttr: function (e) {
        return this.each(function () {
          E.removeAttr(this, e);
        });
      },
    }),
      E.extend({
        attr: function (e, t, n) {
          var i,
            r,
            o = e.nodeType;
          if (3 !== o && 8 !== o && 2 !== o)
            return void 0 === e.getAttribute
              ? E.prop(e, t, n)
              : ((1 === o && E.isXMLDoc(e)) ||
                  (r =
                    E.attrHooks[t.toLowerCase()] ||
                    (E.expr.match.bool.test(t) ? dt : void 0)),
                void 0 !== n
                  ? null === n
                    ? void E.removeAttr(e, t)
                    : r && "set" in r && void 0 !== (i = r.set(e, n, t))
                    ? i
                    : (e.setAttribute(t, n + ""), n)
                  : r && "get" in r && null !== (i = r.get(e, t))
                  ? i
                  : ((i = E.find.attr(e, t)), null == i ? void 0 : i));
        },
        attrHooks: {
          type: {
            set: function (e, t) {
              if (!v.radioValue && "radio" === t && S(e, "input")) {
                var n = e.value;
                return e.setAttribute("type", t), n && (e.value = n), t;
              }
            },
          },
        },
        removeAttr: function (e, t) {
          var n,
            i = 0,
            r = t && t.match(I);
          if (r && 1 === e.nodeType)
            for (; (n = r[i++]); ) e.removeAttribute(n);
        },
      }),
      (dt = {
        set: function (e, t, n) {
          return !1 === t ? E.removeAttr(e, n) : e.setAttribute(n, n), n;
        },
      }),
      E.each(E.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var s = pt[t] || E.find.attr;
        pt[t] = function (e, t, n) {
          var i,
            r,
            o = t.toLowerCase();
          return (
            n ||
              ((r = pt[o]),
              (pt[o] = i),
              (i = null != s(e, t, n) ? o : null),
              (pt[o] = r)),
            i
          );
        };
      });
    var mt = /^(?:input|select|textarea|button)$/i,
      gt = /^(?:a|area)$/i;
    function vt(e) {
      var t = e.match(I) || [];
      return t.join(" ");
    }
    function yt(e) {
      return (e.getAttribute && e.getAttribute("class")) || "";
    }
    function bt(e) {
      return Array.isArray(e) ? e : ("string" == typeof e && e.match(I)) || [];
    }
    E.fn.extend({
      prop: function (e, t) {
        return X(this, E.prop, e, t, 1 < arguments.length);
      },
      removeProp: function (e) {
        return this.each(function () {
          delete this[E.propFix[e] || e];
        });
      },
    }),
      E.extend({
        prop: function (e, t, n) {
          var i,
            r,
            o = e.nodeType;
          if (3 !== o && 8 !== o && 2 !== o)
            return (
              (1 === o && E.isXMLDoc(e)) ||
                ((t = E.propFix[t] || t), (r = E.propHooks[t])),
              void 0 !== n
                ? r && "set" in r && void 0 !== (i = r.set(e, n, t))
                  ? i
                  : (e[t] = n)
                : r && "get" in r && null !== (i = r.get(e, t))
                ? i
                : e[t]
            );
        },
        propHooks: {
          tabIndex: {
            get: function (e) {
              var t = E.find.attr(e, "tabindex");
              return t
                ? parseInt(t, 10)
                : mt.test(e.nodeName) || (gt.test(e.nodeName) && e.href)
                ? 0
                : -1;
            },
          },
        },
        propFix: { for: "htmlFor", class: "className" },
      }),
      v.optSelected ||
        (E.propHooks.selected = {
          get: function (e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null;
          },
          set: function (e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
          },
        }),
      E.each(
        [
          "tabIndex",
          "readOnly",
          "maxLength",
          "cellSpacing",
          "cellPadding",
          "rowSpan",
          "colSpan",
          "useMap",
          "frameBorder",
          "contentEditable",
        ],
        function () {
          E.propFix[this.toLowerCase()] = this;
        }
      ),
      E.fn.extend({
        addClass: function (t) {
          var e,
            n,
            i,
            r,
            o,
            s,
            a,
            u = 0;
          if (y(t))
            return this.each(function (e) {
              E(this).addClass(t.call(this, e, yt(this)));
            });
          if (((e = bt(t)), e.length))
            for (; (n = this[u++]); )
              if (
                ((r = yt(n)), (i = 1 === n.nodeType && " " + vt(r) + " "), i)
              ) {
                for (s = 0; (o = e[s++]); )
                  i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                (a = vt(i)), r !== a && n.setAttribute("class", a);
              }
          return this;
        },
        removeClass: function (t) {
          var e,
            n,
            i,
            r,
            o,
            s,
            a,
            u = 0;
          if (y(t))
            return this.each(function (e) {
              E(this).removeClass(t.call(this, e, yt(this)));
            });
          if (!arguments.length) return this.attr("class", "");
          if (((e = bt(t)), e.length))
            for (; (n = this[u++]); )
              if (
                ((r = yt(n)), (i = 1 === n.nodeType && " " + vt(r) + " "), i)
              ) {
                for (s = 0; (o = e[s++]); )
                  for (; -1 < i.indexOf(" " + o + " "); )
                    i = i.replace(" " + o + " ", " ");
                (a = vt(i)), r !== a && n.setAttribute("class", a);
              }
          return this;
        },
        toggleClass: function (r, t) {
          var o = typeof r,
            s = "string" === o || Array.isArray(r);
          return "boolean" == typeof t && s
            ? t
              ? this.addClass(r)
              : this.removeClass(r)
            : y(r)
            ? this.each(function (e) {
                E(this).toggleClass(r.call(this, e, yt(this), t), t);
              })
            : this.each(function () {
                var e, t, n, i;
                if (s)
                  for (t = 0, n = E(this), i = bt(r); (e = i[t++]); )
                    n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                else
                  (void 0 !== r && "boolean" !== o) ||
                    ((e = yt(this)),
                    e && Z.set(this, "__className__", e),
                    this.setAttribute &&
                      this.setAttribute(
                        "class",
                        e || !1 === r ? "" : Z.get(this, "__className__") || ""
                      ));
              });
        },
        hasClass: function (e) {
          var t,
            n,
            i = 0;
          for (t = " " + e + " "; (n = this[i++]); )
            if (1 === n.nodeType && -1 < (" " + vt(yt(n)) + " ").indexOf(t))
              return !0;
          return !1;
        },
      });
    var xt = /\r/g;
    E.fn.extend({
      val: function (n) {
        var i,
          e,
          r,
          t = this[0];
        return arguments.length
          ? ((r = y(n)),
            this.each(function (e) {
              var t;
              1 === this.nodeType &&
                ((t = r ? n.call(this, e, E(this).val()) : n),
                null == t
                  ? (t = "")
                  : "number" == typeof t
                  ? (t += "")
                  : Array.isArray(t) &&
                    (t = E.map(t, function (e) {
                      return null == e ? "" : e + "";
                    })),
                (i =
                  E.valHooks[this.type] ||
                  E.valHooks[this.nodeName.toLowerCase()]),
                (i && "set" in i && void 0 !== i.set(this, t, "value")) ||
                  (this.value = t));
            }))
          : t
          ? ((i = E.valHooks[t.type] || E.valHooks[t.nodeName.toLowerCase()]),
            i && "get" in i && void 0 !== (e = i.get(t, "value"))
              ? e
              : ((e = t.value),
                "string" == typeof e ? e.replace(xt, "") : null == e ? "" : e))
          : void 0;
      },
    }),
      E.extend({
        valHooks: {
          option: {
            get: function (e) {
              var t = E.find.attr(e, "value");
              return null != t ? t : vt(E.text(e));
            },
          },
          select: {
            get: function (e) {
              var t,
                n,
                i,
                r = e.options,
                o = e.selectedIndex,
                s = "select-one" === e.type,
                a = s ? null : [],
                u = s ? o + 1 : r.length;
              for (i = o < 0 ? u : s ? o : 0; i < u; i++)
                if (
                  ((n = r[i]),
                  (n.selected || i === o) &&
                    !n.disabled &&
                    (!n.parentNode.disabled || !S(n.parentNode, "optgroup")))
                ) {
                  if (((t = E(n).val()), s)) return t;
                  a.push(t);
                }
              return a;
            },
            set: function (e, t) {
              for (
                var n, i, r = e.options, o = E.makeArray(t), s = r.length;
                s--;

              )
                (i = r[s]),
                  (i.selected = -1 < E.inArray(E.valHooks.option.get(i), o)) &&
                    (n = !0);
              return n || (e.selectedIndex = -1), o;
            },
          },
        },
      }),
      E.each(["radio", "checkbox"], function () {
        (E.valHooks[this] = {
          set: function (e, t) {
            if (Array.isArray(t))
              return (e.checked = -1 < E.inArray(E(e).val(), t));
          },
        }),
          v.checkOn ||
            (E.valHooks[this].get = function (e) {
              return null === e.getAttribute("value") ? "on" : e.value;
            });
      }),
      (v.focusin = "onfocusin" in T);
    var _t = /^(?:focusinfocus|focusoutblur)$/,
      wt = function (e) {
        e.stopPropagation();
      };
    E.extend(E.event, {
      trigger: function (e, t, n, i) {
        var r,
          o,
          s,
          a,
          u,
          l,
          c,
          f,
          h = [n || C],
          d = g.call(e, "type") ? e.type : e,
          p = g.call(e, "namespace") ? e.namespace.split(".") : [];
        if (
          ((o = f = s = n = n || C),
          3 !== n.nodeType &&
            8 !== n.nodeType &&
            !_t.test(d + E.event.triggered) &&
            (-1 < d.indexOf(".") &&
              ((p = d.split(".")), (d = p.shift()), p.sort()),
            (u = d.indexOf(":") < 0 && "on" + d),
            (e = e[E.expando] ? e : new E.Event(d, "object" == typeof e && e)),
            (e.isTrigger = i ? 2 : 3),
            (e.namespace = p.join(".")),
            (e.rnamespace = e.namespace
              ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)")
              : null),
            (e.result = void 0),
            e.target || (e.target = n),
            (t = null == t ? [e] : E.makeArray(t, [e])),
            (c = E.event.special[d] || {}),
            i || !c.trigger || !1 !== c.trigger.apply(n, t)))
        ) {
          if (!i && !c.noBubble && !b(n)) {
            for (
              a = c.delegateType || d, _t.test(a + d) || (o = o.parentNode);
              o;
              o = o.parentNode
            )
              h.push(o), (s = o);
            s === (n.ownerDocument || C) &&
              h.push(s.defaultView || s.parentWindow || T);
          }
          for (r = 0; (o = h[r++]) && !e.isPropagationStopped(); )
            (f = o),
              (e.type = 1 < r ? a : c.bindType || d),
              (l = (Z.get(o, "events") || {})[e.type] && Z.get(o, "handle")),
              l && l.apply(o, t),
              (l = u && o[u]),
              l &&
                l.apply &&
                V(o) &&
                ((e.result = l.apply(o, t)),
                !1 === e.result && e.preventDefault());
          return (
            (e.type = d),
            i ||
              e.isDefaultPrevented() ||
              (c._default && !1 !== c._default.apply(h.pop(), t)) ||
              !V(n) ||
              (u &&
                y(n[d]) &&
                !b(n) &&
                ((s = n[u]),
                s && (n[u] = null),
                (E.event.triggered = d),
                e.isPropagationStopped() && f.addEventListener(d, wt),
                n[d](),
                e.isPropagationStopped() && f.removeEventListener(d, wt),
                (E.event.triggered = void 0),
                s && (n[u] = s))),
            e.result
          );
        }
      },
      simulate: function (e, t, n) {
        var i = E.extend(new E.Event(), n, { type: e, isSimulated: !0 });
        E.event.trigger(i, null, t);
      },
    }),
      E.fn.extend({
        trigger: function (e, t) {
          return this.each(function () {
            E.event.trigger(e, t, this);
          });
        },
        triggerHandler: function (e, t) {
          var n = this[0];
          if (n) return E.event.trigger(e, t, n, !0);
        },
      }),
      v.focusin ||
        E.each({ focus: "focusin", blur: "focusout" }, function (n, i) {
          var r = function (e) {
            E.event.simulate(i, e.target, E.event.fix(e));
          };
          E.event.special[i] = {
            setup: function () {
              var e = this.ownerDocument || this,
                t = Z.access(e, i);
              t || e.addEventListener(n, r, !0), Z.access(e, i, (t || 0) + 1);
            },
            teardown: function () {
              var e = this.ownerDocument || this,
                t = Z.access(e, i) - 1;
              t
                ? Z.access(e, i, t)
                : (e.removeEventListener(n, r, !0), Z.remove(e, i));
            },
          };
        });
    var Tt = T.location,
      Ct = Date.now(),
      Et = /\?/;
    E.parseXML = function (e) {
      var t;
      if (!e || "string" != typeof e) return null;
      try {
        t = new T.DOMParser().parseFromString(e, "text/xml");
      } catch (e) {
        t = void 0;
      }
      return (
        (t && !t.getElementsByTagName("parsererror").length) ||
          E.error("Invalid XML: " + e),
        t
      );
    };
    var Dt = /\[\]$/,
      kt = /\r?\n/g,
      St = /^(?:submit|button|image|reset|file)$/i,
      jt = /^(?:input|select|textarea|keygen)/i;
    function At(n, e, i, r) {
      var t;
      if (Array.isArray(e))
        E.each(e, function (e, t) {
          i || Dt.test(n)
            ? r(n, t)
            : At(
                n + "[" + ("object" == typeof t && null != t ? e : "") + "]",
                t,
                i,
                r
              );
        });
      else if (i || "object" !== _(e)) r(n, e);
      else for (t in e) At(n + "[" + t + "]", e[t], i, r);
    }
    (E.param = function (e, t) {
      var n,
        i = [],
        r = function (e, t) {
          var n = y(t) ? t() : t;
          i[i.length] =
            encodeURIComponent(e) +
            "=" +
            encodeURIComponent(null == n ? "" : n);
        };
      if (Array.isArray(e) || (e.jquery && !E.isPlainObject(e)))
        E.each(e, function () {
          r(this.name, this.value);
        });
      else for (n in e) At(n, e[n], t, r);
      return i.join("&");
    }),
      E.fn.extend({
        serialize: function () {
          return E.param(this.serializeArray());
        },
        serializeArray: function () {
          return this.map(function () {
            var e = E.prop(this, "elements");
            return e ? E.makeArray(e) : this;
          })
            .filter(function () {
              var e = this.type;
              return (
                this.name &&
                !E(this).is(":disabled") &&
                jt.test(this.nodeName) &&
                !St.test(e) &&
                (this.checked || !ce.test(e))
              );
            })
            .map(function (e, t) {
              var n = E(this).val();
              return null == n
                ? null
                : Array.isArray(n)
                ? E.map(n, function (e) {
                    return { name: t.name, value: e.replace(kt, "\r\n") };
                  })
                : { name: t.name, value: n.replace(kt, "\r\n") };
            })
            .get();
        },
      });
    var Nt = /%20/g,
      qt = /#.*$/,
      Pt = /([?&])_=[^&]*/,
      Ht = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      Lt = /^(?:GET|HEAD)$/,
      Ot = /^\/\//,
      It = {},
      Ft = {},
      Rt = "*/".concat("*"),
      Mt = C.createElement("a");
    function Wt(o) {
      return function (e, t) {
        "string" != typeof e && ((t = e), (e = "*"));
        var n,
          i = 0,
          r = e.toLowerCase().match(I) || [];
        if (y(t))
          for (; (n = r[i++]); )
            "+" === n[0]
              ? ((n = n.slice(1) || "*"), (o[n] = o[n] || []).unshift(t))
              : (o[n] = o[n] || []).push(t);
      };
    }
    function Bt(t, r, o, s) {
      var a = {},
        u = t === Ft;
      function l(e) {
        var i;
        return (
          (a[e] = !0),
          E.each(t[e] || [], function (e, t) {
            var n = t(r, o, s);
            return "string" != typeof n || u || a[n]
              ? u
                ? !(i = n)
                : void 0
              : (r.dataTypes.unshift(n), l(n), !1);
          }),
          i
        );
      }
      return l(r.dataTypes[0]) || (!a["*"] && l("*"));
    }
    function Ut(e, t) {
      var n,
        i,
        r = E.ajaxSettings.flatOptions || {};
      for (n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
      return i && E.extend(!0, e, i), e;
    }
    (Mt.href = Tt.href),
      E.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
          url: Tt.href,
          type: "GET",
          isLocal:
            /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
              Tt.protocol
            ),
          global: !0,
          processData: !0,
          async: !0,
          contentType: "application/x-www-form-urlencoded; charset=UTF-8",
          accepts: {
            "*": Rt,
            text: "text/plain",
            html: "text/html",
            xml: "application/xml, text/xml",
            json: "application/json, text/javascript",
          },
          contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
          responseFields: {
            xml: "responseXML",
            text: "responseText",
            json: "responseJSON",
          },
          converters: {
            "* text": String,
            "text html": !0,
            "text json": JSON.parse,
            "text xml": E.parseXML,
          },
          flatOptions: { url: !0, context: !0 },
        },
        ajaxSetup: function (e, t) {
          return t ? Ut(Ut(e, E.ajaxSettings), t) : Ut(E.ajaxSettings, e);
        },
        ajaxPrefilter: Wt(It),
        ajaxTransport: Wt(Ft),
        ajax: function (e, t) {
          "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
          var c,
            f,
            h,
            n,
            d,
            i,
            p,
            m,
            r,
            o,
            g = E.ajaxSetup({}, t),
            v = g.context || g,
            y = g.context && (v.nodeType || v.jquery) ? E(v) : E.event,
            b = E.Deferred(),
            x = E.Callbacks("once memory"),
            _ = g.statusCode || {},
            s = {},
            a = {},
            u = "canceled",
            w = {
              readyState: 0,
              getResponseHeader: function (e) {
                var t;
                if (p) {
                  if (!n)
                    for (n = {}; (t = Ht.exec(h)); )
                      n[t[1].toLowerCase()] = t[2];
                  t = n[e.toLowerCase()];
                }
                return null == t ? null : t;
              },
              getAllResponseHeaders: function () {
                return p ? h : null;
              },
              setRequestHeader: function (e, t) {
                return (
                  null == p &&
                    ((e = a[e.toLowerCase()] = a[e.toLowerCase()] || e),
                    (s[e] = t)),
                  this
                );
              },
              overrideMimeType: function (e) {
                return null == p && (g.mimeType = e), this;
              },
              statusCode: function (e) {
                var t;
                if (e)
                  if (p) w.always(e[w.status]);
                  else for (t in e) _[t] = [_[t], e[t]];
                return this;
              },
              abort: function (e) {
                var t = e || u;
                return c && c.abort(t), l(0, t), this;
              },
            };
          if (
            (b.promise(w),
            (g.url = ((e || g.url || Tt.href) + "").replace(
              Ot,
              Tt.protocol + "//"
            )),
            (g.type = t.method || t.type || g.method || g.type),
            (g.dataTypes = (g.dataType || "*").toLowerCase().match(I) || [""]),
            null == g.crossDomain)
          ) {
            i = C.createElement("a");
            try {
              (i.href = g.url),
                (i.href = i.href),
                (g.crossDomain =
                  Mt.protocol + "//" + Mt.host != i.protocol + "//" + i.host);
            } catch (e) {
              g.crossDomain = !0;
            }
          }
          if (
            (g.data &&
              g.processData &&
              "string" != typeof g.data &&
              (g.data = E.param(g.data, g.traditional)),
            Bt(It, g, t, w),
            p)
          )
            return w;
          for (r in ((m = E.event && g.global),
          m && 0 == E.active++ && E.event.trigger("ajaxStart"),
          (g.type = g.type.toUpperCase()),
          (g.hasContent = !Lt.test(g.type)),
          (f = g.url.replace(qt, "")),
          g.hasContent
            ? g.data &&
              g.processData &&
              0 ===
                (g.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              (g.data = g.data.replace(Nt, "+"))
            : ((o = g.url.slice(f.length)),
              g.data &&
                (g.processData || "string" == typeof g.data) &&
                ((f += (Et.test(f) ? "&" : "?") + g.data), delete g.data),
              !1 === g.cache &&
                ((f = f.replace(Pt, "$1")),
                (o = (Et.test(f) ? "&" : "?") + "_=" + Ct++ + o)),
              (g.url = f + o)),
          g.ifModified &&
            (E.lastModified[f] &&
              w.setRequestHeader("If-Modified-Since", E.lastModified[f]),
            E.etag[f] && w.setRequestHeader("If-None-Match", E.etag[f])),
          ((g.data && g.hasContent && !1 !== g.contentType) || t.contentType) &&
            w.setRequestHeader("Content-Type", g.contentType),
          w.setRequestHeader(
            "Accept",
            g.dataTypes[0] && g.accepts[g.dataTypes[0]]
              ? g.accepts[g.dataTypes[0]] +
                  ("*" !== g.dataTypes[0] ? ", " + Rt + "; q=0.01" : "")
              : g.accepts["*"]
          ),
          g.headers))
            w.setRequestHeader(r, g.headers[r]);
          if (g.beforeSend && (!1 === g.beforeSend.call(v, w, g) || p))
            return w.abort();
          if (
            ((u = "abort"),
            x.add(g.complete),
            w.done(g.success),
            w.fail(g.error),
            (c = Bt(Ft, g, t, w)),
            c)
          ) {
            if (((w.readyState = 1), m && y.trigger("ajaxSend", [w, g]), p))
              return w;
            g.async &&
              0 < g.timeout &&
              (d = T.setTimeout(function () {
                w.abort("timeout");
              }, g.timeout));
            try {
              (p = !1), c.send(s, l);
            } catch (e) {
              if (p) throw e;
              l(-1, e);
            }
          } else l(-1, "No Transport");
          function l(e, t, n, i) {
            var r,
              o,
              s,
              a,
              u,
              l = t;
            p ||
              ((p = !0),
              d && T.clearTimeout(d),
              (c = void 0),
              (h = i || ""),
              (w.readyState = 0 < e ? 4 : 0),
              (r = (200 <= e && e < 300) || 304 === e),
              n &&
                (a = (function (e, t, n) {
                  for (
                    var i, r, o, s, a = e.contents, u = e.dataTypes;
                    "*" === u[0];

                  )
                    u.shift(),
                      void 0 === i &&
                        (i = e.mimeType || t.getResponseHeader("Content-Type"));
                  if (i)
                    for (r in a)
                      if (a[r] && a[r].test(i)) {
                        u.unshift(r);
                        break;
                      }
                  if (u[0] in n) o = u[0];
                  else {
                    for (r in n) {
                      if (!u[0] || e.converters[r + " " + u[0]]) {
                        o = r;
                        break;
                      }
                      s || (s = r);
                    }
                    o = o || s;
                  }
                  if (o) return o !== u[0] && u.unshift(o), n[o];
                })(g, w, n)),
              (a = (function (e, t, n, i) {
                var r,
                  o,
                  s,
                  a,
                  u,
                  l = {},
                  c = e.dataTypes.slice();
                if (c[1])
                  for (s in e.converters) l[s.toLowerCase()] = e.converters[s];
                for (o = c.shift(); o; )
                  if (
                    (e.responseFields[o] && (n[e.responseFields[o]] = t),
                    !u &&
                      i &&
                      e.dataFilter &&
                      (t = e.dataFilter(t, e.dataType)),
                    (u = o),
                    (o = c.shift()),
                    o)
                  )
                    if ("*" === o) o = u;
                    else if ("*" !== u && u !== o) {
                      if (((s = l[u + " " + o] || l["* " + o]), !s))
                        for (r in l)
                          if (
                            ((a = r.split(" ")),
                            a[1] === o &&
                              ((s = l[u + " " + a[0]] || l["* " + a[0]]), s))
                          ) {
                            !0 === s
                              ? (s = l[r])
                              : !0 !== l[r] && ((o = a[0]), c.unshift(a[1]));
                            break;
                          }
                      if (!0 !== s)
                        if (s && e.throws) t = s(t);
                        else
                          try {
                            t = s(t);
                          } catch (e) {
                            return {
                              state: "parsererror",
                              error: s
                                ? e
                                : "No conversion from " + u + " to " + o,
                            };
                          }
                    }
                return { state: "success", data: t };
              })(g, a, w, r)),
              r
                ? (g.ifModified &&
                    ((u = w.getResponseHeader("Last-Modified")),
                    u && (E.lastModified[f] = u),
                    (u = w.getResponseHeader("etag")),
                    u && (E.etag[f] = u)),
                  204 === e || "HEAD" === g.type
                    ? (l = "nocontent")
                    : 304 === e
                    ? (l = "notmodified")
                    : ((l = a.state), (o = a.data), (s = a.error), (r = !s)))
                : ((s = l), (!e && l) || ((l = "error"), e < 0 && (e = 0))),
              (w.status = e),
              (w.statusText = (t || l) + ""),
              r ? b.resolveWith(v, [o, l, w]) : b.rejectWith(v, [w, l, s]),
              w.statusCode(_),
              (_ = void 0),
              m &&
                y.trigger(r ? "ajaxSuccess" : "ajaxError", [w, g, r ? o : s]),
              x.fireWith(v, [w, l]),
              m &&
                (y.trigger("ajaxComplete", [w, g]),
                --E.active || E.event.trigger("ajaxStop")));
          }
          return w;
        },
        getJSON: function (e, t, n) {
          return E.get(e, t, n, "json");
        },
        getScript: function (e, t) {
          return E.get(e, void 0, t, "script");
        },
      }),
      E.each(["get", "post"], function (e, r) {
        E[r] = function (e, t, n, i) {
          return (
            y(t) && ((i = i || n), (n = t), (t = void 0)),
            E.ajax(
              E.extend(
                { url: e, type: r, dataType: i, data: t, success: n },
                E.isPlainObject(e) && e
              )
            )
          );
        };
      }),
      (E._evalUrl = function (e) {
        return E.ajax({
          url: e,
          type: "GET",
          dataType: "script",
          cache: !0,
          async: !1,
          global: !1,
          throws: !0,
        });
      }),
      E.fn.extend({
        wrapAll: function (e) {
          var t;
          return (
            this[0] &&
              (y(e) && (e = e.call(this[0])),
              (t = E(e, this[0].ownerDocument).eq(0).clone(!0)),
              this[0].parentNode && t.insertBefore(this[0]),
              t
                .map(function () {
                  for (var e = this; e.firstElementChild; )
                    e = e.firstElementChild;
                  return e;
                })
                .append(this)),
            this
          );
        },
        wrapInner: function (n) {
          return y(n)
            ? this.each(function (e) {
                E(this).wrapInner(n.call(this, e));
              })
            : this.each(function () {
                var e = E(this),
                  t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n);
              });
        },
        wrap: function (t) {
          var n = y(t);
          return this.each(function (e) {
            E(this).wrapAll(n ? t.call(this, e) : t);
          });
        },
        unwrap: function (e) {
          return (
            this.parent(e)
              .not("body")
              .each(function () {
                E(this).replaceWith(this.childNodes);
              }),
            this
          );
        },
      }),
      (E.expr.pseudos.hidden = function (e) {
        return !E.expr.pseudos.visible(e);
      }),
      (E.expr.pseudos.visible = function (e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
      }),
      (E.ajaxSettings.xhr = function () {
        try {
          return new T.XMLHttpRequest();
        } catch (e) {}
      });
    var Xt = { 0: 200, 1223: 204 },
      zt = E.ajaxSettings.xhr();
    (v.cors = !!zt && "withCredentials" in zt),
      (v.ajax = zt = !!zt),
      E.ajaxTransport(function (r) {
        var o, s;
        if (v.cors || (zt && !r.crossDomain))
          return {
            send: function (e, t) {
              var n,
                i = r.xhr();
              if (
                (i.open(r.type, r.url, r.async, r.username, r.password),
                r.xhrFields)
              )
                for (n in r.xhrFields) i[n] = r.xhrFields[n];
              for (n in (r.mimeType &&
                i.overrideMimeType &&
                i.overrideMimeType(r.mimeType),
              r.crossDomain ||
                e["X-Requested-With"] ||
                (e["X-Requested-With"] = "XMLHttpRequest"),
              e))
                i.setRequestHeader(n, e[n]);
              (o = function (e) {
                return function () {
                  o &&
                    ((o =
                      s =
                      i.onload =
                      i.onerror =
                      i.onabort =
                      i.ontimeout =
                      i.onreadystatechange =
                        null),
                    "abort" === e
                      ? i.abort()
                      : "error" === e
                      ? "number" != typeof i.status
                        ? t(0, "error")
                        : t(i.status, i.statusText)
                      : t(
                          Xt[i.status] || i.status,
                          i.statusText,
                          "text" !== (i.responseType || "text") ||
                            "string" != typeof i.responseText
                            ? { binary: i.response }
                            : { text: i.responseText },
                          i.getAllResponseHeaders()
                        ));
                };
              }),
                (i.onload = o()),
                (s = i.onerror = i.ontimeout = o("error")),
                void 0 !== i.onabort
                  ? (i.onabort = s)
                  : (i.onreadystatechange = function () {
                      4 === i.readyState &&
                        T.setTimeout(function () {
                          o && s();
                        });
                    }),
                (o = o("abort"));
              try {
                i.send((r.hasContent && r.data) || null);
              } catch (e) {
                if (o) throw e;
              }
            },
            abort: function () {
              o && o();
            },
          };
      }),
      E.ajaxPrefilter(function (e) {
        e.crossDomain && (e.contents.script = !1);
      }),
      E.ajaxSetup({
        accepts: {
          script:
            "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
        },
        contents: { script: /\b(?:java|ecma)script\b/ },
        converters: {
          "text script": function (e) {
            return E.globalEval(e), e;
          },
        },
      }),
      E.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
      }),
      E.ajaxTransport("script", function (n) {
        var i, r;
        if (n.crossDomain)
          return {
            send: function (e, t) {
              (i = E("<script>")
                .prop({ charset: n.scriptCharset, src: n.url })
                .on(
                  "load error",
                  (r = function (e) {
                    i.remove(),
                      (r = null),
                      e && t("error" === e.type ? 404 : 200, e.type);
                  })
                )),
                C.head.appendChild(i[0]);
            },
            abort: function () {
              r && r();
            },
          };
      });
    var $t,
      Qt = [],
      Gt = /(=)\?(?=&|$)|\?\?/;
    E.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function () {
        var e = Qt.pop() || E.expando + "_" + Ct++;
        return (this[e] = !0), e;
      },
    }),
      E.ajaxPrefilter("json jsonp", function (e, t, n) {
        var i,
          r,
          o,
          s =
            !1 !== e.jsonp &&
            (Gt.test(e.url)
              ? "url"
              : "string" == typeof e.data &&
                0 ===
                  (e.contentType || "").indexOf(
                    "application/x-www-form-urlencoded"
                  ) &&
                Gt.test(e.data) &&
                "data");
        if (s || "jsonp" === e.dataTypes[0])
          return (
            (i = e.jsonpCallback =
              y(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
            s
              ? (e[s] = e[s].replace(Gt, "$1" + i))
              : !1 !== e.jsonp &&
                (e.url += (Et.test(e.url) ? "&" : "?") + e.jsonp + "=" + i),
            (e.converters["script json"] = function () {
              return o || E.error(i + " was not called"), o[0];
            }),
            (e.dataTypes[0] = "json"),
            (r = T[i]),
            (T[i] = function () {
              o = arguments;
            }),
            n.always(function () {
              void 0 === r ? E(T).removeProp(i) : (T[i] = r),
                e[i] && ((e.jsonpCallback = t.jsonpCallback), Qt.push(i)),
                o && y(r) && r(o[0]),
                (o = r = void 0);
            }),
            "script"
          );
      }),
      (v.createHTMLDocument =
        (($t = C.implementation.createHTMLDocument("").body),
        ($t.innerHTML = "<form></form><form></form>"),
        2 === $t.childNodes.length)),
      (E.parseHTML = function (e, t, n) {
        return "string" != typeof e
          ? []
          : ("boolean" == typeof t && ((n = t), (t = !1)),
            t ||
              (v.createHTMLDocument
                ? ((t = C.implementation.createHTMLDocument("")),
                  (i = t.createElement("base")),
                  (i.href = C.location.href),
                  t.head.appendChild(i))
                : (t = C)),
            (r = j.exec(e)),
            (o = !n && []),
            r
              ? [t.createElement(r[1])]
              : ((r = xe([e], t, o)),
                o && o.length && E(o).remove(),
                E.merge([], r.childNodes)));
        var i, r, o;
      }),
      (E.fn.load = function (e, t, n) {
        var i,
          r,
          o,
          s = this,
          a = e.indexOf(" ");
        return (
          -1 < a && ((i = vt(e.slice(a))), (e = e.slice(0, a))),
          y(t)
            ? ((n = t), (t = void 0))
            : t && "object" == typeof t && (r = "POST"),
          0 < s.length &&
            E.ajax({ url: e, type: r || "GET", dataType: "html", data: t })
              .done(function (e) {
                (o = arguments),
                  s.html(i ? E("<div>").append(E.parseHTML(e)).find(i) : e);
              })
              .always(
                n &&
                  function (e, t) {
                    s.each(function () {
                      n.apply(this, o || [e.responseText, t, e]);
                    });
                  }
              ),
          this
        );
      }),
      E.each(
        [
          "ajaxStart",
          "ajaxStop",
          "ajaxComplete",
          "ajaxError",
          "ajaxSuccess",
          "ajaxSend",
        ],
        function (e, t) {
          E.fn[t] = function (e) {
            return this.on(t, e);
          };
        }
      ),
      (E.expr.pseudos.animated = function (t) {
        return E.grep(E.timers, function (e) {
          return t === e.elem;
        }).length;
      }),
      (E.offset = {
        setOffset: function (e, t, n) {
          var i,
            r,
            o,
            s,
            a,
            u,
            l,
            c = E.css(e, "position"),
            f = E(e),
            h = {};
          "static" === c && (e.style.position = "relative"),
            (a = f.offset()),
            (o = E.css(e, "top")),
            (u = E.css(e, "left")),
            (l =
              ("absolute" === c || "fixed" === c) &&
              -1 < (o + u).indexOf("auto")),
            (r = l
              ? ((i = f.position()), (s = i.top), i.left)
              : ((s = parseFloat(o) || 0), parseFloat(u) || 0)),
            y(t) && (t = t.call(e, n, E.extend({}, a))),
            null != t.top && (h.top = t.top - a.top + s),
            null != t.left && (h.left = t.left - a.left + r),
            "using" in t ? t.using.call(e, h) : f.css(h);
        },
      }),
      E.fn.extend({
        offset: function (t) {
          if (arguments.length)
            return void 0 === t
              ? this
              : this.each(function (e) {
                  E.offset.setOffset(this, t, e);
                });
          var e,
            n,
            i = this[0];
          return i
            ? i.getClientRects().length
              ? ((e = i.getBoundingClientRect()),
                (n = i.ownerDocument.defaultView),
                { top: e.top + n.pageYOffset, left: e.left + n.pageXOffset })
              : { top: 0, left: 0 }
            : void 0;
        },
        position: function () {
          if (this[0]) {
            var e,
              t,
              n,
              i = this[0],
              r = { top: 0, left: 0 };
            if ("fixed" === E.css(i, "position")) t = i.getBoundingClientRect();
            else {
              for (
                t = this.offset(),
                  n = i.ownerDocument,
                  e = i.offsetParent || n.documentElement;
                e &&
                (e === n.body || e === n.documentElement) &&
                "static" === E.css(e, "position");

              )
                e = e.parentNode;
              e &&
                e !== i &&
                1 === e.nodeType &&
                ((r = E(e).offset()),
                (r.top += E.css(e, "borderTopWidth", !0)),
                (r.left += E.css(e, "borderLeftWidth", !0)));
            }
            return {
              top: t.top - r.top - E.css(i, "marginTop", !0),
              left: t.left - r.left - E.css(i, "marginLeft", !0),
            };
          }
        },
        offsetParent: function () {
          return this.map(function () {
            for (
              var e = this.offsetParent;
              e && "static" === E.css(e, "position");

            )
              e = e.offsetParent;
            return e || _e;
          });
        },
      }),
      E.each(
        { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
        function (t, r) {
          var o = "pageYOffset" === r;
          E.fn[t] = function (e) {
            return X(
              this,
              function (e, t, n) {
                var i;
                if (
                  (b(e) ? (i = e) : 9 === e.nodeType && (i = e.defaultView),
                  void 0 === n)
                )
                  return i ? i[r] : e[t];
                i
                  ? i.scrollTo(o ? i.pageXOffset : n, o ? n : i.pageYOffset)
                  : (e[t] = n);
              },
              t,
              e,
              arguments.length
            );
          };
        }
      ),
      E.each(["top", "left"], function (e, n) {
        E.cssHooks[n] = Ue(v.pixelPosition, function (e, t) {
          if (t)
            return (t = Be(e, n)), Re.test(t) ? E(e).position()[n] + "px" : t;
        });
      }),
      E.each({ Height: "height", Width: "width" }, function (s, a) {
        E.each(
          { padding: "inner" + s, content: a, "": "outer" + s },
          function (i, o) {
            E.fn[o] = function (e, t) {
              var n = arguments.length && (i || "boolean" != typeof e),
                r = i || (!0 === e || !0 === t ? "margin" : "border");
              return X(
                this,
                function (e, t, n) {
                  var i;
                  return b(e)
                    ? 0 === o.indexOf("outer")
                      ? e["inner" + s]
                      : e.document.documentElement["client" + s]
                    : 9 === e.nodeType
                    ? ((i = e.documentElement),
                      Math.max(
                        e.body["scroll" + s],
                        i["scroll" + s],
                        e.body["offset" + s],
                        i["offset" + s],
                        i["client" + s]
                      ))
                    : void 0 === n
                    ? E.css(e, t, r)
                    : E.style(e, t, n, r);
                },
                a,
                n ? e : void 0,
                n
              );
            };
          }
        );
      }),
      E.each(
        "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
          " "
        ),
        function (e, n) {
          E.fn[n] = function (e, t) {
            return 0 < arguments.length
              ? this.on(n, null, e, t)
              : this.trigger(n);
          };
        }
      ),
      E.fn.extend({
        hover: function (e, t) {
          return this.mouseenter(e).mouseleave(t || e);
        },
      }),
      E.fn.extend({
        bind: function (e, t, n) {
          return this.on(e, null, t, n);
        },
        unbind: function (e, t) {
          return this.off(e, null, t);
        },
        delegate: function (e, t, n, i) {
          return this.on(t, e, n, i);
        },
        undelegate: function (e, t, n) {
          return 1 === arguments.length
            ? this.off(e, "**")
            : this.off(t, e || "**", n);
        },
      }),
      (E.proxy = function (e, t) {
        var n, i, r;
        if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), y(e)))
          return (
            (i = a.call(arguments, 2)),
            (r = function () {
              return e.apply(t || this, i.concat(a.call(arguments)));
            }),
            (r.guid = e.guid = e.guid || E.guid++),
            r
          );
      }),
      (E.holdReady = function (e) {
        e ? E.readyWait++ : E.ready(!0);
      }),
      (E.isArray = Array.isArray),
      (E.parseJSON = JSON.parse),
      (E.nodeName = S),
      (E.isFunction = y),
      (E.isWindow = b),
      (E.camelCase = G),
      (E.type = _),
      (E.now = Date.now),
      (E.isNumeric = function (e) {
        var t = E.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
      }),
      "function" == typeof define &&
        define.amd &&
        define("jquery", [], function () {
          return E;
        });
    var Vt = T.jQuery,
      Yt = T.$;
    return (
      (E.noConflict = function (e) {
        return (
          T.$ === E && (T.$ = Yt), e && T.jQuery === E && (T.jQuery = Vt), E
        );
      }),
      e || (T.jQuery = T.$ = E),
      E
    );
  }),
  (function (e) {
    "function" == typeof define && define.amd
      ? define(["jquery", "./version"], e)
      : e(jQuery);
  })(function (i) {
    return i.extend(i.expr[":"], {
      data: i.expr.createPseudo
        ? i.expr.createPseudo(function (t) {
            return function (e) {
              return !!i.data(e, t);
            };
          })
        : function (e, t, n) {
            return !!i.data(e, n[3]);
          },
    });
  }),
  (function (e) {
    "function" == typeof define && define.amd
      ? define(["jquery"], e)
      : e(jQuery);
  })(function (e) {
    return (e.ui = e.ui || {}), (e.ui.version = "1.12.1");
  }),
  (function (e) {
    "function" == typeof define && define.amd
      ? define(["jquery", "./version"], e)
      : e(jQuery);
  })(function (e) {
    return e.fn.extend({
      disableSelection:
        ((t =
          "onselectstart" in document.createElement("div")
            ? "selectstart"
            : "mousedown"),
        function () {
          return this.on(t + ".ui-disableSelection", function (e) {
            e.preventDefault();
          });
        }),
      enableSelection: function () {
        return this.off(".ui-disableSelection");
      },
    });
    var t;
  }),
  (function (e) {
    "function" == typeof define && define.amd
      ? define(["jquery", "./version"], e)
      : e(jQuery);
  })(function (u) {
    return (
      (u.ui.focusable = function (e, t) {
        var n,
          i,
          r,
          o,
          s,
          a = e.nodeName.toLowerCase();
        return "area" === a
          ? ((n = e.parentNode),
            (i = n.name),
            !(!e.href || !i || "map" !== n.nodeName.toLowerCase()) &&
              ((r = u("img[usemap='#" + i + "']")),
              0 < r.length && r.is(":visible")))
          : (/^(input|select|textarea|button|object)$/.test(a)
              ? ((o = !e.disabled),
                o &&
                  ((s = u(e).closest("fieldset")[0]), s && (o = !s.disabled)))
              : (o = ("a" === a && e.href) || t),
            o &&
              u(e).is(":visible") &&
              (function (e) {
                var t = e.css("visibility");
                for (; "inherit" === t; )
                  (e = e.parent()), (t = e.css("visibility"));
                return "hidden" !== t;
              })(u(e)));
      }),
      u.extend(u.expr[":"], {
        focusable: function (e) {
          return u.ui.focusable(e, null != u.attr(e, "tabindex"));
        },
      }),
      u.ui.focusable
    );
  }),
  (function (e) {
    "function" == typeof define && define.amd
      ? define(["jquery", "./version"], e)
      : e(jQuery);
  })(function (e) {
    return (e.fn.form = function () {
      return "string" == typeof this[0].form
        ? this.closest("form")
        : e(this[0].form);
    });
  }),
  (function (e) {
    "function" == typeof define && define.amd
      ? define(["jquery", "./version"], e)
      : e(jQuery);
  })(function (e) {
    return (e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()));
  }),
  (function (e) {
    "function" == typeof define && define.amd
      ? define(["jquery", "./version"], e)
      : e(jQuery);
  })(function (a) {
    "1.7" === a.fn.jquery.substring(0, 3) &&
      (a.each(["Width", "Height"], function (e, n) {
        var r = "Width" === n ? ["Left", "Right"] : ["Top", "Bottom"],
          i = n.toLowerCase(),
          o = {
            innerWidth: a.fn.innerWidth,
            innerHeight: a.fn.innerHeight,
            outerWidth: a.fn.outerWidth,
            outerHeight: a.fn.outerHeight,
          };
        function s(e, t, n, i) {
          return (
            a.each(r, function () {
              (t -= parseFloat(a.css(e, "padding" + this)) || 0),
                n &&
                  (t -= parseFloat(a.css(e, "border" + this + "Width")) || 0),
                i && (t -= parseFloat(a.css(e, "margin" + this)) || 0);
            }),
            t
          );
        }
        (a.fn["inner" + n] = function (e) {
          return void 0 === e
            ? o["inner" + n].call(this)
            : this.each(function () {
                a(this).css(i, s(this, e) + "px");
              });
        }),
          (a.fn["outer" + n] = function (e, t) {
            return "number" != typeof e
              ? o["outer" + n].call(this, e)
              : this.each(function () {
                  a(this).css(i, s(this, e, !0, t) + "px");
                });
          });
      }),
      (a.fn.addBack = function (e) {
        return this.add(
          null == e ? this.prevObject : this.prevObject.filter(e)
        );
      }));
  }),
  (function (e) {
    "function" == typeof define && define.amd
      ? define(["jquery", "./version"], e)
      : e(jQuery);
  })(function (e) {
    return (e.ui.keyCode = {
      BACKSPACE: 8,
      COMMA: 188,
      DELETE: 46,
      DOWN: 40,
      END: 35,
      ENTER: 13,
      ESCAPE: 27,
      HOME: 36,
      LEFT: 37,
      PAGE_DOWN: 34,
      PAGE_UP: 33,
      PERIOD: 190,
      RIGHT: 39,
      SPACE: 32,
      TAB: 9,
      UP: 38,
    });
  }),
  (function (e) {
    "function" == typeof define && define.amd
      ? define(["jquery", "./version", "./escape-selector"], e)
      : e(jQuery);
  })(function (o) {
    return (o.fn.labels = function () {
      var e, t, n, i, r;
      return this[0].labels && this[0].labels.length
        ? this.pushStack(this[0].labels)
        : ((i = this.eq(0).parents("label")),
          (n = this.attr("id")),
          n &&
            ((e = this.eq(0).parents().last()),
            (r = e.add(e.length ? e.siblings() : this.siblings())),
            (t = "label[for='" + o.ui.escapeSelector(n) + "']"),
            (i = i.add(r.find(t).addBack(t)))),
          this.pushStack(i));
    });
  }),
  (function (e) {
    "function" == typeof define && define.amd
      ? define(["jquery", "./version"], e)
      : e(jQuery);
  })(function (e) {
    return (e.ui.safeActiveElement = function (t) {
      var n;
      try {
        n = t.activeElement;
      } catch (e) {
        n = t.body;
      }
      return n || (n = t.body), n.nodeName || (n = t.body), n;
    });
  }),
  (function (e) {
    "function" == typeof define && define.amd
      ? define(["jquery", "./version"], e)
      : e(jQuery);
  })(function (t) {
    return (t.ui.safeBlur = function (e) {
      e && "body" !== e.nodeName.toLowerCase() && t(e).trigger("blur");
    });
  }),
  (function (e) {
    "function" == typeof define && define.amd
      ? define(["jquery", "./version"], e)
      : e(jQuery);
  })(function (o) {
    return (o.fn.scrollParent = function (e) {
      var t = this.css("position"),
        n = "absolute" === t,
        i = e ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
        r = this.parents()
          .filter(function () {
            var e = o(this);
            return (
              (!n || "static" !== e.css("position")) &&
              i.test(
                e.css("overflow") + e.css("overflow-y") + e.css("overflow-x")
              )
            );
          })
          .eq(0);
      return "fixed" !== t && r.length
        ? r
        : o(this[0].ownerDocument || document);
    });
  }),
  (function (e) {
    "function" == typeof define && define.amd
      ? define(["jquery", "./version", "./focusable"], e)
      : e(jQuery);
  })(function (i) {
    return i.extend(i.expr[":"], {
      tabbable: function (e) {
        var t = i.attr(e, "tabindex"),
          n = null != t;
        return (!n || 0 <= t) && i.ui.focusable(e, n);
      },
    });
  }),
  (function (e) {
    "function" == typeof define && define.amd
      ? define(["jquery", "./version"], e)
      : e(jQuery);
  })(function (e) {
    return e.fn.extend({
      uniqueId:
        ((t = 0),
        function () {
          return this.each(function () {
            this.id || (this.id = "ui-id-" + ++t);
          });
        }),
      removeUniqueId: function () {
        return this.each(function () {
          /^ui-id-\d+$/.test(this.id) && e(this).removeAttr("id");
        });
      },
    });
    var t;
  }),
  (function (e) {
    "function" == typeof define && define.amd
      ? define(["jquery", "./version"], e)
      : e(jQuery);
  })(function (c) {
    var r,
      n = 0,
      a = Array.prototype.slice;
    return (
      (c.cleanData =
        ((r = c.cleanData),
        function (e) {
          var t, n, i;
          for (i = 0; null != (n = e[i]); i++)
            try {
              (t = c._data(n, "events")),
                t && t.remove && c(n).triggerHandler("remove");
            } catch (e) {}
          r(e);
        })),
      (c.widget = function (e, n, t) {
        var i,
          r,
          o,
          s = {},
          a = e.split(".")[0];
        e = e.split(".")[1];
        var u = a + "-" + e;
        return (
          t || ((t = n), (n = c.Widget)),
          c.isArray(t) && (t = c.extend.apply(null, [{}].concat(t))),
          (c.expr[":"][u.toLowerCase()] = function (e) {
            return !!c.data(e, u);
          }),
          (c[a] = c[a] || {}),
          (i = c[a][e]),
          (r = c[a][e] =
            function (e, t) {
              if (!this._createWidget) return new r(e, t);
              arguments.length && this._createWidget(e, t);
            }),
          c.extend(r, i, {
            version: t.version,
            _proto: c.extend({}, t),
            _childConstructors: [],
          }),
          (o = new n()),
          (o.options = c.widget.extend({}, o.options)),
          c.each(t, function (t, o) {
            c.isFunction(o)
              ? (s[t] = (function () {
                  function i() {
                    return n.prototype[t].apply(this, arguments);
                  }
                  function r(e) {
                    return n.prototype[t].apply(this, e);
                  }
                  return function () {
                    var e,
                      t = this._super,
                      n = this._superApply;
                    return (
                      (this._super = i),
                      (this._superApply = r),
                      (e = o.apply(this, arguments)),
                      (this._super = t),
                      (this._superApply = n),
                      e
                    );
                  };
                })())
              : (s[t] = o);
          }),
          (r.prototype = c.widget.extend(
            o,
            { widgetEventPrefix: (i && o.widgetEventPrefix) || e },
            s,
            { constructor: r, namespace: a, widgetName: e, widgetFullName: u }
          )),
          i
            ? (c.each(i._childConstructors, function (e, t) {
                var n = t.prototype;
                c.widget(n.namespace + "." + n.widgetName, r, t._proto);
              }),
              delete i._childConstructors)
            : n._childConstructors.push(r),
          c.widget.bridge(e, r),
          r
        );
      }),
      (c.widget.extend = function (e) {
        for (
          var t, n, i = a.call(arguments, 1), r = 0, o = i.length;
          r < o;
          r++
        )
          for (t in i[r])
            (n = i[r][t]),
              i[r].hasOwnProperty(t) &&
                void 0 !== n &&
                (c.isPlainObject(n)
                  ? (e[t] = c.isPlainObject(e[t])
                      ? c.widget.extend({}, e[t], n)
                      : c.widget.extend({}, n))
                  : (e[t] = n));
        return e;
      }),
      (c.widget.bridge = function (o, t) {
        var s = t.prototype.widgetFullName || o;
        c.fn[o] = function (n) {
          var e = "string" == typeof n,
            i = a.call(arguments, 1),
            r = this;
          return (
            e
              ? this.length || "instance" !== n
                ? this.each(function () {
                    var e,
                      t = c.data(this, s);
                    return "instance" === n
                      ? ((r = t), !1)
                      : t
                      ? c.isFunction(t[n]) && "_" !== n.charAt(0)
                        ? ((e = t[n].apply(t, i)),
                          e !== t && void 0 !== e
                            ? ((r = e && e.jquery ? r.pushStack(e.get()) : e),
                              !1)
                            : void 0)
                        : c.error(
                            "no such method '" +
                              n +
                              "' for " +
                              o +
                              " widget instance"
                          )
                      : c.error(
                          "cannot call methods on " +
                            o +
                            " prior to initialization; attempted to call method '" +
                            n +
                            "'"
                        );
                  })
                : (r = void 0)
              : (i.length && (n = c.widget.extend.apply(null, [n].concat(i))),
                this.each(function () {
                  var e = c.data(this, s);
                  e
                    ? (e.option(n || {}), e._init && e._init())
                    : c.data(this, s, new t(n, this));
                })),
            r
          );
        };
      }),
      (c.Widget = function () {}),
      (c.Widget._childConstructors = []),
      (c.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: { classes: {}, disabled: !1, create: null },
        _createWidget: function (e, t) {
          (t = c(t || this.defaultElement || this)[0]),
            (this.element = c(t)),
            (this.uuid = n++),
            (this.eventNamespace = "." + this.widgetName + this.uuid),
            (this.bindings = c()),
            (this.hoverable = c()),
            (this.focusable = c()),
            (this.classesElementLookup = {}),
            t !== this &&
              (c.data(t, this.widgetFullName, this),
              this._on(!0, this.element, {
                remove: function (e) {
                  e.target === t && this.destroy();
                },
              }),
              (this.document = c(t.style ? t.ownerDocument : t.document || t)),
              (this.window = c(
                this.document[0].defaultView || this.document[0].parentWindow
              ))),
            (this.options = c.widget.extend(
              {},
              this.options,
              this._getCreateOptions(),
              e
            )),
            this._create(),
            this.options.disabled &&
              this._setOptionDisabled(this.options.disabled),
            this._trigger("create", null, this._getCreateEventData()),
            this._init();
        },
        _getCreateOptions: function () {
          return {};
        },
        _getCreateEventData: c.noop,
        _create: c.noop,
        _init: c.noop,
        destroy: function () {
          var n = this;
          this._destroy(),
            c.each(this.classesElementLookup, function (e, t) {
              n._removeClass(t, e);
            }),
            this.element
              .off(this.eventNamespace)
              .removeData(this.widgetFullName),
            this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),
            this.bindings.off(this.eventNamespace);
        },
        _destroy: c.noop,
        widget: function () {
          return this.element;
        },
        option: function (e, t) {
          var n,
            i,
            r,
            o = e;
          if (0 === arguments.length) return c.widget.extend({}, this.options);
          if ("string" == typeof e)
            if (((o = {}), (n = e.split(".")), (e = n.shift()), n.length)) {
              for (
                i = o[e] = c.widget.extend({}, this.options[e]), r = 0;
                r < n.length - 1;
                r++
              )
                (i[n[r]] = i[n[r]] || {}), (i = i[n[r]]);
              if (((e = n.pop()), 1 === arguments.length))
                return void 0 === i[e] ? null : i[e];
              i[e] = t;
            } else {
              if (1 === arguments.length)
                return void 0 === this.options[e] ? null : this.options[e];
              o[e] = t;
            }
          return this._setOptions(o), this;
        },
        _setOptions: function (e) {
          var t;
          for (t in e) this._setOption(t, e[t]);
          return this;
        },
        _setOption: function (e, t) {
          return (
            "classes" === e && this._setOptionClasses(t),
            (this.options[e] = t),
            "disabled" === e && this._setOptionDisabled(t),
            this
          );
        },
        _setOptionClasses: function (e) {
          var t, n, i;
          for (t in e)
            (i = this.classesElementLookup[t]),
              e[t] !== this.options.classes[t] &&
                i &&
                i.length &&
                ((n = c(i.get())),
                this._removeClass(i, t),
                n.addClass(
                  this._classes({ element: n, keys: t, classes: e, add: !0 })
                ));
        },
        _setOptionDisabled: function (e) {
          this._toggleClass(
            this.widget(),
            this.widgetFullName + "-disabled",
            null,
            !!e
          ),
            e &&
              (this._removeClass(this.hoverable, null, "ui-state-hover"),
              this._removeClass(this.focusable, null, "ui-state-focus"));
        },
        enable: function () {
          return this._setOptions({ disabled: !1 });
        },
        disable: function () {
          return this._setOptions({ disabled: !0 });
        },
        _classes: function (r) {
          var o = [],
            s = this;
          function e(e, t) {
            var n, i;
            for (i = 0; i < e.length; i++)
              (n = s.classesElementLookup[e[i]] || c()),
                (n = r.add
                  ? c(c.unique(n.get().concat(r.element.get())))
                  : c(n.not(r.element).get())),
                (s.classesElementLookup[e[i]] = n),
                o.push(e[i]),
                t && r.classes[e[i]] && o.push(r.classes[e[i]]);
          }
          return (
            (r = c.extend(
              { element: this.element, classes: this.options.classes || {} },
              r
            )),
            this._on(r.element, { remove: "_untrackClassesElement" }),
            r.keys && e(r.keys.match(/\S+/g) || [], !0),
            r.extra && e(r.extra.match(/\S+/g) || []),
            o.join(" ")
          );
        },
        _untrackClassesElement: function (n) {
          var i = this;
          c.each(i.classesElementLookup, function (e, t) {
            -1 !== c.inArray(n.target, t) &&
              (i.classesElementLookup[e] = c(t.not(n.target).get()));
          });
        },
        _removeClass: function (e, t, n) {
          return this._toggleClass(e, t, n, !1);
        },
        _addClass: function (e, t, n) {
          return this._toggleClass(e, t, n, !0);
        },
        _toggleClass: function (e, t, n, i) {
          i = "boolean" == typeof i ? i : n;
          var r = "string" == typeof e || null === e,
            o = {
              extra: r ? t : n,
              keys: r ? e : t,
              element: r ? this.element : e,
              add: i,
            };
          return o.element.toggleClass(this._classes(o), i), this;
        },
        _on: function (s, a, e) {
          var u,
            l = this;
          "boolean" != typeof s && ((e = a), (a = s), (s = !1)),
            e
              ? ((a = u = c(a)), (this.bindings = this.bindings.add(a)))
              : ((e = a), (a = this.element), (u = this.widget())),
            c.each(e, function (e, t) {
              function n() {
                if (
                  s ||
                  (!0 !== l.options.disabled &&
                    !c(this).hasClass("ui-state-disabled"))
                )
                  return ("string" == typeof t ? l[t] : t).apply(l, arguments);
              }
              "string" != typeof t &&
                (n.guid = t.guid = t.guid || n.guid || c.guid++);
              var i = e.match(/^([\w:-]*)\s*(.*)$/),
                r = i[1] + l.eventNamespace,
                o = i[2];
              o ? u.on(r, o, n) : a.on(r, n);
            });
        },
        _off: function (e, t) {
          (t =
            (t || "").split(" ").join(this.eventNamespace + " ") +
            this.eventNamespace),
            e.off(t).off(t),
            (this.bindings = c(this.bindings.not(e).get())),
            (this.focusable = c(this.focusable.not(e).get())),
            (this.hoverable = c(this.hoverable.not(e).get()));
        },
        _delay: function (e, t) {
          var n = this;
          return setTimeout(function () {
            return ("string" == typeof e ? n[e] : e).apply(n, arguments);
          }, t || 0);
        },
        _hoverable: function (e) {
          (this.hoverable = this.hoverable.add(e)),
            this._on(e, {
              mouseenter: function (e) {
                this._addClass(c(e.currentTarget), null, "ui-state-hover");
              },
              mouseleave: function (e) {
                this._removeClass(c(e.currentTarget), null, "ui-state-hover");
              },
            });
        },
        _focusable: function (e) {
          (this.focusable = this.focusable.add(e)),
            this._on(e, {
              focusin: function (e) {
                this._addClass(c(e.currentTarget), null, "ui-state-focus");
              },
              focusout: function (e) {
                this._removeClass(c(e.currentTarget), null, "ui-state-focus");
              },
            });
        },
        _trigger: function (e, t, n) {
          var i,
            r,
            o = this.options[e];
          if (
            ((n = n || {}),
            (t = c.Event(t)),
            (t.type = (
              e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e
            ).toLowerCase()),
            (t.target = this.element[0]),
            (r = t.originalEvent),
            r)
          )
            for (i in r) i in t || (t[i] = r[i]);
          return (
            this.element.trigger(t, n),
            !(
              (c.isFunction(o) &&
                !1 === o.apply(this.element[0], [t].concat(n))) ||
              t.isDefaultPrevented()
            )
          );
        },
      }),
      c.each({ show: "fadeIn", hide: "fadeOut" }, function (o, s) {
        c.Widget.prototype["_" + o] = function (t, e, n) {
          var i;
          "string" == typeof e && (e = { effect: e });
          var r = e
            ? !0 === e || "number" == typeof e
              ? s
              : e.effect || s
            : o;
          (e = e || {}),
            "number" == typeof e && (e = { duration: e }),
            (i = !c.isEmptyObject(e)),
            (e.complete = n),
            e.delay && t.delay(e.delay),
            i && c.effects && c.effects.effect[r]
              ? t[o](e)
              : r !== o && t[r]
              ? t[r](e.duration, e.easing, n)
              : t.queue(function (e) {
                  c(this)[o](), n && n.call(t[0]), e();
                });
        };
      }),
      c.widget
    );
  }),
  (function (e) {
    "function" == typeof define && define.amd
      ? define(["jquery", "./version"], e)
      : e(jQuery);
  })(function (D) {
    return (
      (function () {
        var r,
          w = Math.max,
          T = Math.abs,
          i = /left|center|right/,
          o = /top|center|bottom/,
          s = /[\+\-]\d+(\.[\d]+)?%?/,
          a = /^\w+/,
          u = /%$/,
          l = D.fn.position;
        function C(e, t, n) {
          return [
            parseFloat(e[0]) * (u.test(e[0]) ? t / 100 : 1),
            parseFloat(e[1]) * (u.test(e[1]) ? n / 100 : 1),
          ];
        }
        function E(e, t) {
          return parseInt(D.css(e, t), 10) || 0;
        }
        (D.position = {
          scrollbarWidth: function () {
            if (void 0 !== r) return r;
            var e,
              t,
              n = D(
                "<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"
              ),
              i = n.children()[0];
            return (
              D("body").append(n),
              (e = i.offsetWidth),
              n.css("overflow", "scroll"),
              (t = i.offsetWidth),
              e === t && (t = n[0].clientWidth),
              n.remove(),
              (r = e - t)
            );
          },
          getScrollInfo: function (e) {
            var t =
                e.isWindow || e.isDocument ? "" : e.element.css("overflow-x"),
              n = e.isWindow || e.isDocument ? "" : e.element.css("overflow-y"),
              i =
                "scroll" === t ||
                ("auto" === t && e.width < e.element[0].scrollWidth),
              r =
                "scroll" === n ||
                ("auto" === n && e.height < e.element[0].scrollHeight);
            return {
              width: r ? D.position.scrollbarWidth() : 0,
              height: i ? D.position.scrollbarWidth() : 0,
            };
          },
          getWithinInfo: function (e) {
            var t = D(e || window),
              n = D.isWindow(t[0]),
              i = !!t[0] && 9 === t[0].nodeType,
              r = !n && !i;
            return {
              element: t,
              isWindow: n,
              isDocument: i,
              offset: r ? D(e).offset() : { left: 0, top: 0 },
              scrollLeft: t.scrollLeft(),
              scrollTop: t.scrollTop(),
              width: t.outerWidth(),
              height: t.outerHeight(),
            };
          },
        }),
          (D.fn.position = function (f) {
            if (!f || !f.of) return l.apply(this, arguments);
            f = D.extend({}, f);
            var h,
              d,
              p,
              m,
              g,
              e,
              t,
              n,
              v = D(f.of),
              y = D.position.getWithinInfo(f.within),
              b = D.position.getScrollInfo(y),
              x = (f.collision || "flip").split(" "),
              _ = {};
            return (
              (t = v),
              (n = t[0]),
              (e =
                9 === n.nodeType
                  ? {
                      width: t.width(),
                      height: t.height(),
                      offset: { top: 0, left: 0 },
                    }
                  : D.isWindow(n)
                  ? {
                      width: t.width(),
                      height: t.height(),
                      offset: { top: t.scrollTop(), left: t.scrollLeft() },
                    }
                  : n.preventDefault
                  ? {
                      width: 0,
                      height: 0,
                      offset: { top: n.pageY, left: n.pageX },
                    }
                  : {
                      width: t.outerWidth(),
                      height: t.outerHeight(),
                      offset: t.offset(),
                    }),
              v[0].preventDefault && (f.at = "left top"),
              (d = e.width),
              (p = e.height),
              (m = e.offset),
              (g = D.extend({}, m)),
              D.each(["my", "at"], function () {
                var e,
                  t,
                  n = (f[this] || "").split(" ");
                1 === n.length &&
                  (n = i.test(n[0])
                    ? n.concat(["center"])
                    : o.test(n[0])
                    ? ["center"].concat(n)
                    : ["center", "center"]),
                  (n[0] = i.test(n[0]) ? n[0] : "center"),
                  (n[1] = o.test(n[1]) ? n[1] : "center"),
                  (e = s.exec(n[0])),
                  (t = s.exec(n[1])),
                  (_[this] = [e ? e[0] : 0, t ? t[0] : 0]),
                  (f[this] = [a.exec(n[0])[0], a.exec(n[1])[0]]);
              }),
              1 === x.length && (x[1] = x[0]),
              "right" === f.at[0]
                ? (g.left += d)
                : "center" === f.at[0] && (g.left += d / 2),
              "bottom" === f.at[1]
                ? (g.top += p)
                : "center" === f.at[1] && (g.top += p / 2),
              (h = C(_.at, d, p)),
              (g.left += h[0]),
              (g.top += h[1]),
              this.each(function () {
                var n,
                  e,
                  s = D(this),
                  a = s.outerWidth(),
                  u = s.outerHeight(),
                  t = E(this, "marginLeft"),
                  i = E(this, "marginTop"),
                  r = a + t + E(this, "marginRight") + b.width,
                  o = u + i + E(this, "marginBottom") + b.height,
                  l = D.extend({}, g),
                  c = C(_.my, s.outerWidth(), s.outerHeight());
                "right" === f.my[0]
                  ? (l.left -= a)
                  : "center" === f.my[0] && (l.left -= a / 2),
                  "bottom" === f.my[1]
                    ? (l.top -= u)
                    : "center" === f.my[1] && (l.top -= u / 2),
                  (l.left += c[0]),
                  (l.top += c[1]),
                  (n = { marginLeft: t, marginTop: i }),
                  D.each(["left", "top"], function (e, t) {
                    D.ui.position[x[e]] &&
                      D.ui.position[x[e]][t](l, {
                        targetWidth: d,
                        targetHeight: p,
                        elemWidth: a,
                        elemHeight: u,
                        collisionPosition: n,
                        collisionWidth: r,
                        collisionHeight: o,
                        offset: [h[0] + c[0], h[1] + c[1]],
                        my: f.my,
                        at: f.at,
                        within: y,
                        elem: s,
                      });
                  }),
                  f.using &&
                    (e = function (e) {
                      var t = m.left - l.left,
                        n = t + d - a,
                        i = m.top - l.top,
                        r = i + p - u,
                        o = {
                          target: {
                            element: v,
                            left: m.left,
                            top: m.top,
                            width: d,
                            height: p,
                          },
                          element: {
                            element: s,
                            left: l.left,
                            top: l.top,
                            width: a,
                            height: u,
                          },
                          horizontal:
                            n < 0 ? "left" : 0 < t ? "right" : "center",
                          vertical: r < 0 ? "top" : 0 < i ? "bottom" : "middle",
                        };
                      d < a && T(t + n) < d && (o.horizontal = "center"),
                        p < u && T(i + r) < p && (o.vertical = "middle"),
                        w(T(t), T(n)) > w(T(i), T(r))
                          ? (o.important = "horizontal")
                          : (o.important = "vertical"),
                        f.using.call(this, e, o);
                    }),
                  s.offset(D.extend(l, { using: e }));
              })
            );
          }),
          (D.ui.position = {
            fit: {
              left: function (e, t) {
                var n,
                  i = t.within,
                  r = i.isWindow ? i.scrollLeft : i.offset.left,
                  o = i.width,
                  s = e.left - t.collisionPosition.marginLeft,
                  a = r - s,
                  u = s + t.collisionWidth - o - r;
                t.collisionWidth > o
                  ? 0 < a && u <= 0
                    ? ((n = e.left + a + t.collisionWidth - o - r),
                      (e.left += a - n))
                    : (e.left =
                        0 < u && a <= 0
                          ? r
                          : u < a
                          ? r + o - t.collisionWidth
                          : r)
                  : 0 < a
                  ? (e.left += a)
                  : 0 < u
                  ? (e.left -= u)
                  : (e.left = w(e.left - s, e.left));
              },
              top: function (e, t) {
                var n,
                  i = t.within,
                  r = i.isWindow ? i.scrollTop : i.offset.top,
                  o = t.within.height,
                  s = e.top - t.collisionPosition.marginTop,
                  a = r - s,
                  u = s + t.collisionHeight - o - r;
                t.collisionHeight > o
                  ? 0 < a && u <= 0
                    ? ((n = e.top + a + t.collisionHeight - o - r),
                      (e.top += a - n))
                    : (e.top =
                        0 < u && a <= 0
                          ? r
                          : u < a
                          ? r + o - t.collisionHeight
                          : r)
                  : 0 < a
                  ? (e.top += a)
                  : 0 < u
                  ? (e.top -= u)
                  : (e.top = w(e.top - s, e.top));
              },
            },
            flip: {
              left: function (e, t) {
                var n,
                  i,
                  r = t.within,
                  o = r.offset.left + r.scrollLeft,
                  s = r.width,
                  a = r.isWindow ? r.scrollLeft : r.offset.left,
                  u = e.left - t.collisionPosition.marginLeft,
                  l = u - a,
                  c = u + t.collisionWidth - s - a,
                  f =
                    "left" === t.my[0]
                      ? -t.elemWidth
                      : "right" === t.my[0]
                      ? t.elemWidth
                      : 0,
                  h =
                    "left" === t.at[0]
                      ? t.targetWidth
                      : "right" === t.at[0]
                      ? -t.targetWidth
                      : 0,
                  d = -2 * t.offset[0];
                l < 0
                  ? ((n = e.left + f + h + d + t.collisionWidth - s - o),
                    (n < 0 || n < T(l)) && (e.left += f + h + d))
                  : 0 < c &&
                    ((i =
                      e.left - t.collisionPosition.marginLeft + f + h + d - a),
                    (0 < i || T(i) < c) && (e.left += f + h + d));
              },
              top: function (e, t) {
                var n,
                  i,
                  r = t.within,
                  o = r.offset.top + r.scrollTop,
                  s = r.height,
                  a = r.isWindow ? r.scrollTop : r.offset.top,
                  u = e.top - t.collisionPosition.marginTop,
                  l = u - a,
                  c = u + t.collisionHeight - s - a,
                  f = "top" === t.my[1],
                  h = f
                    ? -t.elemHeight
                    : "bottom" === t.my[1]
                    ? t.elemHeight
                    : 0,
                  d =
                    "top" === t.at[1]
                      ? t.targetHeight
                      : "bottom" === t.at[1]
                      ? -t.targetHeight
                      : 0,
                  p = -2 * t.offset[1];
                l < 0
                  ? ((i = e.top + h + d + p + t.collisionHeight - s - o),
                    (i < 0 || i < T(l)) && (e.top += h + d + p))
                  : 0 < c &&
                    ((n =
                      e.top - t.collisionPosition.marginTop + h + d + p - a),
                    (0 < n || T(n) < c) && (e.top += h + d + p));
              },
            },
            flipfit: {
              left: function () {
                D.ui.position.flip.left.apply(this, arguments),
                  D.ui.position.fit.left.apply(this, arguments);
              },
              top: function () {
                D.ui.position.flip.top.apply(this, arguments),
                  D.ui.position.fit.top.apply(this, arguments);
              },
            },
          });
      })(),
      D.ui.position
    );
  }),
  (function (e) {
    "function" == typeof define && define.amd
      ? define(
          [
            "jquery",
            "../keycode",
            "../position",
            "../safe-active-element",
            "../unique-id",
            "../version",
            "../widget",
          ],
          e
        )
      : e(jQuery);
  })(function (u) {
    return u.widget("ui.menu", {
      version: "1.12.1",
      defaultElement: "<ul>",
      delay: 300,
      options: {
        icons: { submenu: "ui-icon-caret-1-e" },
        items: "> *",
        menus: "ul",
        position: { my: "left top", at: "right top" },
        role: "menu",
        blur: null,
        focus: null,
        select: null,
      },
      _create: function () {
        (this.activeMenu = this.element),
          (this.mouseHandled = !1),
          this.element
            .uniqueId()
            .attr({ role: this.options.role, tabIndex: 0 }),
          this._addClass("ui-menu", "ui-widget ui-widget-content"),
          this._on({
            "mousedown .ui-menu-item": function (e) {
              e.preventDefault();
            },
            "click .ui-menu-item": function (e) {
              var t = u(e.target),
                n = u(u.ui.safeActiveElement(this.document[0]));
              !this.mouseHandled &&
                t.not(".ui-state-disabled").length &&
                (this.select(e),
                e.isPropagationStopped() || (this.mouseHandled = !0),
                t.has(".ui-menu").length
                  ? this.expand(e)
                  : !this.element.is(":focus") &&
                    n.closest(".ui-menu").length &&
                    (this.element.trigger("focus", [!0]),
                    this.active &&
                      1 === this.active.parents(".ui-menu").length &&
                      clearTimeout(this.timer)));
            },
            "mouseenter .ui-menu-item": function (e) {
              if (!this.previousFilter) {
                var t = u(e.target).closest(".ui-menu-item"),
                  n = u(e.currentTarget);
                t[0] === n[0] &&
                  (this._removeClass(
                    n.siblings().children(".ui-state-active"),
                    null,
                    "ui-state-active"
                  ),
                  this.focus(e, n));
              }
            },
            mouseleave: "collapseAll",
            "mouseleave .ui-menu": "collapseAll",
            focus: function (e, t) {
              var n =
                this.active || this.element.find(this.options.items).eq(0);
              t || this.focus(e, n);
            },
            blur: function (t) {
              this._delay(function () {
                var e = !u.contains(
                  this.element[0],
                  u.ui.safeActiveElement(this.document[0])
                );
                e && this.collapseAll(t);
              });
            },
            keydown: "_keydown",
          }),
          this.refresh(),
          this._on(this.document, {
            click: function (e) {
              this._closeOnDocumentClick(e) && this.collapseAll(e),
                (this.mouseHandled = !1);
            },
          });
      },
      _destroy: function () {
        var e = this.element
            .find(".ui-menu-item")
            .removeAttr("role aria-disabled"),
          t = e
            .children(".ui-menu-item-wrapper")
            .removeUniqueId()
            .removeAttr("tabIndex role aria-haspopup");
        this.element
          .removeAttr("aria-activedescendant")
          .find(".ui-menu")
          .addBack()
          .removeAttr(
            "role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex"
          )
          .removeUniqueId()
          .show(),
          t.children().each(function () {
            var e = u(this);
            e.data("ui-menu-submenu-caret") && e.remove();
          });
      },
      _keydown: function (e) {
        var t,
          n,
          i,
          r,
          o = !0;
        switch (e.keyCode) {
          case u.ui.keyCode.PAGE_UP:
            this.previousPage(e);
            break;
          case u.ui.keyCode.PAGE_DOWN:
            this.nextPage(e);
            break;
          case u.ui.keyCode.HOME:
            this._move("first", "first", e);
            break;
          case u.ui.keyCode.END:
            this._move("last", "last", e);
            break;
          case u.ui.keyCode.UP:
            this.previous(e);
            break;
          case u.ui.keyCode.DOWN:
            this.next(e);
            break;
          case u.ui.keyCode.LEFT:
            this.collapse(e);
            break;
          case u.ui.keyCode.RIGHT:
            this.active &&
              !this.active.is(".ui-state-disabled") &&
              this.expand(e);
            break;
          case u.ui.keyCode.ENTER:
          case u.ui.keyCode.SPACE:
            this._activate(e);
            break;
          case u.ui.keyCode.ESCAPE:
            this.collapse(e);
            break;
          default:
            (o = !1),
              (n = this.previousFilter || ""),
              (r = !1),
              (i =
                96 <= e.keyCode && e.keyCode <= 105
                  ? (e.keyCode - 96).toString()
                  : String.fromCharCode(e.keyCode)),
              clearTimeout(this.filterTimer),
              i === n ? (r = !0) : (i = n + i),
              (t = this._filterMenuItems(i)),
              (t =
                r && -1 !== t.index(this.active.next())
                  ? this.active.nextAll(".ui-menu-item")
                  : t),
              t.length ||
                ((i = String.fromCharCode(e.keyCode)),
                (t = this._filterMenuItems(i))),
              t.length
                ? (this.focus(e, t),
                  (this.previousFilter = i),
                  (this.filterTimer = this._delay(function () {
                    delete this.previousFilter;
                  }, 1e3)))
                : delete this.previousFilter;
        }
        o && e.preventDefault();
      },
      _activate: function (e) {
        this.active &&
          !this.active.is(".ui-state-disabled") &&
          (this.active.children("[aria-haspopup='true']").length
            ? this.expand(e)
            : this.select(e));
      },
      refresh: function () {
        var e,
          t,
          n,
          i,
          r,
          o = this,
          s = this.options.icons.submenu,
          a = this.element.find(this.options.menus);
        this._toggleClass(
          "ui-menu-icons",
          null,
          !!this.element.find(".ui-icon").length
        ),
          (n = a
            .filter(":not(.ui-menu)")
            .hide()
            .attr({
              role: this.options.role,
              "aria-hidden": "true",
              "aria-expanded": "false",
            })
            .each(function () {
              var e = u(this),
                t = e.prev(),
                n = u("<span>").data("ui-menu-submenu-caret", !0);
              o._addClass(n, "ui-menu-icon", "ui-icon " + s),
                t.attr("aria-haspopup", "true").prepend(n),
                e.attr("aria-labelledby", t.attr("id"));
            })),
          this._addClass(n, "ui-menu", "ui-widget ui-widget-content ui-front"),
          (e = a.add(this.element)),
          (t = e.find(this.options.items)),
          t.not(".ui-menu-item").each(function () {
            var e = u(this);
            o._isDivider(e) &&
              o._addClass(e, "ui-menu-divider", "ui-widget-content");
          }),
          (i = t.not(".ui-menu-item, .ui-menu-divider")),
          (r = i
            .children()
            .not(".ui-menu")
            .uniqueId()
            .attr({ tabIndex: -1, role: this._itemRole() })),
          this._addClass(i, "ui-menu-item")._addClass(
            r,
            "ui-menu-item-wrapper"
          ),
          t.filter(".ui-state-disabled").attr("aria-disabled", "true"),
          this.active &&
            !u.contains(this.element[0], this.active[0]) &&
            this.blur();
      },
      _itemRole: function () {
        return { menu: "menuitem", listbox: "option" }[this.options.role];
      },
      _setOption: function (e, t) {
        if ("icons" === e) {
          var n = this.element.find(".ui-menu-icon");
          this._removeClass(n, null, this.options.icons.submenu)._addClass(
            n,
            null,
            t.submenu
          );
        }
        this._super(e, t);
      },
      _setOptionDisabled: function (e) {
        this._super(e),
          this.element.attr("aria-disabled", String(e)),
          this._toggleClass(null, "ui-state-disabled", !!e);
      },
      focus: function (e, t) {
        var n, i, r;
        this.blur(e, e && "focus" === e.type),
          this._scrollIntoView(t),
          (this.active = t.first()),
          (i = this.active.children(".ui-menu-item-wrapper")),
          this._addClass(i, null, "ui-state-active"),
          this.options.role &&
            this.element.attr("aria-activedescendant", i.attr("id")),
          (r = this.active
            .parent()
            .closest(".ui-menu-item")
            .children(".ui-menu-item-wrapper")),
          this._addClass(r, null, "ui-state-active"),
          e && "keydown" === e.type
            ? this._close()
            : (this.timer = this._delay(function () {
                this._close();
              }, this.delay)),
          (n = t.children(".ui-menu")),
          n.length && e && /^mouse/.test(e.type) && this._startOpening(n),
          (this.activeMenu = t.parent()),
          this._trigger("focus", e, { item: t });
      },
      _scrollIntoView: function (e) {
        var t, n, i, r, o, s;
        this._hasScroll() &&
          ((t = parseFloat(u.css(this.activeMenu[0], "borderTopWidth")) || 0),
          (n = parseFloat(u.css(this.activeMenu[0], "paddingTop")) || 0),
          (i = e.offset().top - this.activeMenu.offset().top - t - n),
          (r = this.activeMenu.scrollTop()),
          (o = this.activeMenu.height()),
          (s = e.outerHeight()),
          i < 0
            ? this.activeMenu.scrollTop(r + i)
            : o < i + s && this.activeMenu.scrollTop(r + i - o + s));
      },
      blur: function (e, t) {
        t || clearTimeout(this.timer),
          this.active &&
            (this._removeClass(
              this.active.children(".ui-menu-item-wrapper"),
              null,
              "ui-state-active"
            ),
            this._trigger("blur", e, { item: this.active }),
            (this.active = null));
      },
      _startOpening: function (e) {
        clearTimeout(this.timer),
          "true" === e.attr("aria-hidden") &&
            (this.timer = this._delay(function () {
              this._close(), this._open(e);
            }, this.delay));
      },
      _open: function (e) {
        var t = u.extend({ of: this.active }, this.options.position);
        clearTimeout(this.timer),
          this.element
            .find(".ui-menu")
            .not(e.parents(".ui-menu"))
            .hide()
            .attr("aria-hidden", "true"),
          e
            .show()
            .removeAttr("aria-hidden")
            .attr("aria-expanded", "true")
            .position(t);
      },
      collapseAll: function (t, n) {
        clearTimeout(this.timer),
          (this.timer = this._delay(function () {
            var e = n
              ? this.element
              : u(t && t.target).closest(this.element.find(".ui-menu"));
            e.length || (e = this.element),
              this._close(e),
              this.blur(t),
              this._removeClass(
                e.find(".ui-state-active"),
                null,
                "ui-state-active"
              ),
              (this.activeMenu = e);
          }, this.delay));
      },
      _close: function (e) {
        e || (e = this.active ? this.active.parent() : this.element),
          e
            .find(".ui-menu")
            .hide()
            .attr("aria-hidden", "true")
            .attr("aria-expanded", "false");
      },
      _closeOnDocumentClick: function (e) {
        return !u(e.target).closest(".ui-menu").length;
      },
      _isDivider: function (e) {
        return !/[^\-\u2014\u2013\s]/.test(e.text());
      },
      collapse: function (e) {
        var t =
          this.active &&
          this.active.parent().closest(".ui-menu-item", this.element);
        t && t.length && (this._close(), this.focus(e, t));
      },
      expand: function (e) {
        var t =
          this.active &&
          this.active.children(".ui-menu ").find(this.options.items).first();
        t &&
          t.length &&
          (this._open(t.parent()),
          this._delay(function () {
            this.focus(e, t);
          }));
      },
      next: function (e) {
        this._move("next", "first", e);
      },
      previous: function (e) {
        this._move("prev", "last", e);
      },
      isFirstItem: function () {
        return this.active && !this.active.prevAll(".ui-menu-item").length;
      },
      isLastItem: function () {
        return this.active && !this.active.nextAll(".ui-menu-item").length;
      },
      _move: function (e, t, n) {
        var i;
        this.active &&
          (i =
            "first" === e || "last" === e
              ? this.active["first" === e ? "prevAll" : "nextAll"](
                  ".ui-menu-item"
                ).eq(-1)
              : this.active[e + "All"](".ui-menu-item").eq(0)),
          (i && i.length && this.active) ||
            (i = this.activeMenu.find(this.options.items)[t]()),
          this.focus(n, i);
      },
      nextPage: function (e) {
        var t, n, i;
        this.active
          ? this.isLastItem() ||
            (this._hasScroll()
              ? ((n = this.active.offset().top),
                (i = this.element.height()),
                this.active.nextAll(".ui-menu-item").each(function () {
                  return (t = u(this)), t.offset().top - n - i < 0;
                }),
                this.focus(e, t))
              : this.focus(
                  e,
                  this.activeMenu
                    .find(this.options.items)
                    [this.active ? "last" : "first"]()
                ))
          : this.next(e);
      },
      previousPage: function (e) {
        var t, n, i;
        this.active
          ? this.isFirstItem() ||
            (this._hasScroll()
              ? ((n = this.active.offset().top),
                (i = this.element.height()),
                this.active.prevAll(".ui-menu-item").each(function () {
                  return (t = u(this)), 0 < t.offset().top - n + i;
                }),
                this.focus(e, t))
              : this.focus(e, this.activeMenu.find(this.options.items).first()))
          : this.next(e);
      },
      _hasScroll: function () {
        return this.element.outerHeight() < this.element.prop("scrollHeight");
      },
      select: function (e) {
        this.active = this.active || u(e.target).closest(".ui-menu-item");
        var t = { item: this.active };
        this.active.has(".ui-menu").length || this.collapseAll(e, !0),
          this._trigger("select", e, t);
      },
      _filterMenuItems: function (e) {
        var t = e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"),
          n = new RegExp("^" + t, "i");
        return this.activeMenu
          .find(this.options.items)
          .filter(".ui-menu-item")
          .filter(function () {
            return n.test(
              u.trim(u(this).children(".ui-menu-item-wrapper").text())
            );
          });
      },
    });
  }),
  (function (e) {
    "function" == typeof define && define.amd
      ? define(
          [
            "jquery",
            "./menu",
            "../keycode",
            "../position",
            "../safe-active-element",
            "../version",
            "../widget",
          ],
          e
        )
      : e(jQuery);
  })(function (s) {
    return (
      s.widget("ui.autocomplete", {
        version: "1.12.1",
        defaultElement: "<input>",
        options: {
          appendTo: null,
          autoFocus: !1,
          delay: 300,
          minLength: 1,
          position: { my: "left top", at: "left bottom", collision: "none" },
          source: null,
          change: null,
          close: null,
          focus: null,
          open: null,
          response: null,
          search: null,
          select: null,
        },
        requestIndex: 0,
        pending: 0,
        _create: function () {
          var n,
            i,
            r,
            e = this.element[0].nodeName.toLowerCase(),
            t = "textarea" === e,
            o = "input" === e;
          (this.isMultiLine =
            t || (!o && this._isContentEditable(this.element))),
            (this.valueMethod = this.element[t || o ? "val" : "text"]),
            (this.isNewMenu = !0),
            this._addClass("ui-autocomplete-input"),
            this.element.attr("autocomplete", "off"),
            this._on(this.element, {
              keydown: function (e) {
                if (this.element.prop("readOnly"))
                  return (n = !0), (r = !0), void (i = !0);
                (n = !1), (r = !1), (i = !1);
                var t = s.ui.keyCode;
                switch (e.keyCode) {
                  case t.PAGE_UP:
                    (n = !0), this._move("previousPage", e);
                    break;
                  case t.PAGE_DOWN:
                    (n = !0), this._move("nextPage", e);
                    break;
                  case t.UP:
                    (n = !0), this._keyEvent("previous", e);
                    break;
                  case t.DOWN:
                    (n = !0), this._keyEvent("next", e);
                    break;
                  case t.ENTER:
                    this.menu.active &&
                      ((n = !0), e.preventDefault(), this.menu.select(e));
                    break;
                  case t.TAB:
                    this.menu.active && this.menu.select(e);
                    break;
                  case t.ESCAPE:
                    this.menu.element.is(":visible") &&
                      (this.isMultiLine || this._value(this.term),
                      this.close(e),
                      e.preventDefault());
                    break;
                  default:
                    (i = !0), this._searchTimeout(e);
                }
              },
              keypress: function (e) {
                if (n)
                  return (
                    (n = !1),
                    void (
                      (this.isMultiLine && !this.menu.element.is(":visible")) ||
                      e.preventDefault()
                    )
                  );
                if (!i) {
                  var t = s.ui.keyCode;
                  switch (e.keyCode) {
                    case t.PAGE_UP:
                      this._move("previousPage", e);
                      break;
                    case t.PAGE_DOWN:
                      this._move("nextPage", e);
                      break;
                    case t.UP:
                      this._keyEvent("previous", e);
                      break;
                    case t.DOWN:
                      this._keyEvent("next", e);
                  }
                }
              },
              input: function (e) {
                if (r) return (r = !1), void e.preventDefault();
                this._searchTimeout(e);
              },
              focus: function () {
                (this.selectedItem = null), (this.previous = this._value());
              },
              blur: function (e) {
                this.cancelBlur
                  ? delete this.cancelBlur
                  : (clearTimeout(this.searching),
                    this.close(e),
                    this._change(e));
              },
            }),
            this._initSource(),
            (this.menu = s("<ul>")
              .appendTo(this._appendTo())
              .menu({ role: null })
              .hide()
              .menu("instance")),
            this._addClass(this.menu.element, "ui-autocomplete", "ui-front"),
            this._on(this.menu.element, {
              mousedown: function (e) {
                e.preventDefault(),
                  (this.cancelBlur = !0),
                  this._delay(function () {
                    delete this.cancelBlur,
                      this.element[0] !==
                        s.ui.safeActiveElement(this.document[0]) &&
                        this.element.trigger("focus");
                  });
              },
              menufocus: function (e, t) {
                var n, i;
                if (
                  this.isNewMenu &&
                  ((this.isNewMenu = !1),
                  e.originalEvent && /^mouse/.test(e.originalEvent.type))
                )
                  return (
                    this.menu.blur(),
                    void this.document.one("mousemove", function () {
                      s(e.target).trigger(e.originalEvent);
                    })
                  );
                (i = t.item.data("ui-autocomplete-item")),
                  !1 !== this._trigger("focus", e, { item: i }) &&
                    e.originalEvent &&
                    /^key/.test(e.originalEvent.type) &&
                    this._value(i.value),
                  (n = t.item.attr("aria-label") || i.value),
                  n &&
                    s.trim(n).length &&
                    (this.liveRegion.children().hide(),
                    s("<div>").text(n).appendTo(this.liveRegion));
              },
              menuselect: function (e, t) {
                var n = t.item.data("ui-autocomplete-item"),
                  i = this.previous;
                this.element[0] !== s.ui.safeActiveElement(this.document[0]) &&
                  (this.element.trigger("focus"),
                  (this.previous = i),
                  this._delay(function () {
                    (this.previous = i), (this.selectedItem = n);
                  })),
                  !1 !== this._trigger("select", e, { item: n }) &&
                    this._value(n.value),
                  (this.term = this._value()),
                  this.close(e),
                  (this.selectedItem = n);
              },
            }),
            (this.liveRegion = s("<div>", {
              role: "status",
              "aria-live": "assertive",
              "aria-relevant": "additions",
            }).appendTo(this.document[0].body)),
            this._addClass(
              this.liveRegion,
              null,
              "ui-helper-hidden-accessible"
            ),
            this._on(this.window, {
              beforeunload: function () {
                this.element.removeAttr("autocomplete");
              },
            });
        },
        _destroy: function () {
          clearTimeout(this.searching),
            this.element.removeAttr("autocomplete"),
            this.menu.element.remove(),
            this.liveRegion.remove();
        },
        _setOption: function (e, t) {
          this._super(e, t),
            "source" === e && this._initSource(),
            "appendTo" === e && this.menu.element.appendTo(this._appendTo()),
            "disabled" === e && t && this.xhr && this.xhr.abort();
        },
        _isEventTargetInWidget: function (e) {
          var t = this.menu.element[0];
          return (
            e.target === this.element[0] ||
            e.target === t ||
            s.contains(t, e.target)
          );
        },
        _closeOnClickOutside: function (e) {
          this._isEventTargetInWidget(e) || this.close();
        },
        _appendTo: function () {
          var e = this.options.appendTo;
          return (
            e &&
              (e = e.jquery || e.nodeType ? s(e) : this.document.find(e).eq(0)),
            (e && e[0]) || (e = this.element.closest(".ui-front, dialog")),
            e.length || (e = this.document[0].body),
            e
          );
        },
        _initSource: function () {
          var n,
            i,
            r = this;
          s.isArray(this.options.source)
            ? ((n = this.options.source),
              (this.source = function (e, t) {
                t(s.ui.autocomplete.filter(n, e.term));
              }))
            : "string" == typeof this.options.source
            ? ((i = this.options.source),
              (this.source = function (e, t) {
                r.xhr && r.xhr.abort(),
                  (r.xhr = s.ajax({
                    url: i,
                    data: e,
                    dataType: "json",
                    success: function (e) {
                      t(e);
                    },
                    error: function () {
                      t([]);
                    },
                  }));
              }))
            : (this.source = this.options.source);
        },
        _searchTimeout: function (i) {
          clearTimeout(this.searching),
            (this.searching = this._delay(function () {
              var e = this.term === this._value(),
                t = this.menu.element.is(":visible"),
                n = i.altKey || i.ctrlKey || i.metaKey || i.shiftKey;
              (e && (!e || t || n)) ||
                ((this.selectedItem = null), this.search(null, i));
            }, this.options.delay));
        },
        search: function (e, t) {
          return (
            (e = null != e ? e : this._value()),
            (this.term = this._value()),
            e.length < this.options.minLength
              ? this.close(t)
              : !1 !== this._trigger("search", t)
              ? this._search(e)
              : void 0
          );
        },
        _search: function (e) {
          this.pending++,
            this._addClass("ui-autocomplete-loading"),
            (this.cancelSearch = !1),
            this.source({ term: e }, this._response());
        },
        _response: function () {
          var t = ++this.requestIndex;
          return s.proxy(function (e) {
            t === this.requestIndex && this.__response(e),
              this.pending--,
              this.pending || this._removeClass("ui-autocomplete-loading");
          }, this);
        },
        __response: function (e) {
          e && (e = this._normalize(e)),
            this._trigger("response", null, { content: e }),
            !this.options.disabled && e && e.length && !this.cancelSearch
              ? (this._suggest(e), this._trigger("open"))
              : this._close();
        },
        close: function (e) {
          (this.cancelSearch = !0), this._close(e);
        },
        _close: function (e) {
          this._off(this.document, "mousedown"),
            this.menu.element.is(":visible") &&
              (this.menu.element.hide(),
              this.menu.blur(),
              (this.isNewMenu = !0),
              this._trigger("close", e));
        },
        _change: function (e) {
          this.previous !== this._value() &&
            this._trigger("change", e, { item: this.selectedItem });
        },
        _normalize: function (e) {
          return e.length && e[0].label && e[0].value
            ? e
            : s.map(e, function (e) {
                return "string" == typeof e
                  ? { label: e, value: e }
                  : s.extend({}, e, {
                      label: e.label || e.value,
                      value: e.value || e.label,
                    });
              });
        },
        _suggest: function (e) {
          var t = this.menu.element.empty();
          this._renderMenu(t, e),
            (this.isNewMenu = !0),
            this.menu.refresh(),
            t.show(),
            this._resizeMenu(),
            t.position(s.extend({ of: this.element }, this.options.position)),
            this.options.autoFocus && this.menu.next(),
            this._on(this.document, { mousedown: "_closeOnClickOutside" });
        },
        _resizeMenu: function () {
          var e = this.menu.element;
          e.outerWidth(
            Math.max(e.width("").outerWidth() + 1, this.element.outerWidth())
          );
        },
        _renderMenu: function (n, e) {
          var i = this;
          s.each(e, function (e, t) {
            i._renderItemData(n, t);
          });
        },
        _renderItemData: function (e, t) {
          return this._renderItem(e, t).data("ui-autocomplete-item", t);
        },
        _renderItem: function (e, t) {
          return s("<li>").append(s("<div>").text(t.label)).appendTo(e);
        },
        _move: function (e, t) {
          if (this.menu.element.is(":visible"))
            return (this.menu.isFirstItem() && /^previous/.test(e)) ||
              (this.menu.isLastItem() && /^next/.test(e))
              ? (this.isMultiLine || this._value(this.term),
                void this.menu.blur())
              : void this.menu[e](t);
          this.search(null, t);
        },
        widget: function () {
          return this.menu.element;
        },
        _value: function () {
          return this.valueMethod.apply(this.element, arguments);
        },
        _keyEvent: function (e, t) {
          (this.isMultiLine && !this.menu.element.is(":visible")) ||
            (this._move(e, t), t.preventDefault());
        },
        _isContentEditable: function (e) {
          if (!e.length) return !1;
          var t = e.prop("contentEditable");
          return "inherit" === t
            ? this._isContentEditable(e.parent())
            : "true" === t;
        },
      }),
      s.extend(s.ui.autocomplete, {
        escapeRegex: function (e) {
          return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
        },
        filter: function (e, t) {
          var n = new RegExp(s.ui.autocomplete.escapeRegex(t), "i");
          return s.grep(e, function (e) {
            return n.test(e.label || e.value || e);
          });
        },
      }),
      s.widget("ui.autocomplete", s.ui.autocomplete, {
        options: {
          messages: {
            noResults: "No search results.",
            results: function (e) {
              return (
                e +
                (1 < e ? " results are" : " result is") +
                " available, use up and down arrow keys to navigate."
              );
            },
          },
        },
        __response: function (e) {
          var t;
          this._superApply(arguments),
            this.options.disabled ||
              this.cancelSearch ||
              ((t =
                e && e.length
                  ? this.options.messages.results(e.length)
                  : this.options.messages.noResults),
              this.liveRegion.children().hide(),
              s("<div>").text(t).appendTo(this.liveRegion));
        },
      }),
      s.ui.autocomplete
    );
  }),
  (function (e) {
    "use strict";
    "function" == typeof define && define.amd
      ? define(["jquery", "jquery-ui/ui/widget"], e)
      : "object" == typeof exports
      ? e(require("jquery"), require("./vendor/jquery.ui.widget"))
      : e(window.jQuery);
  })(function (v) {
    "use strict";
    function e(n) {
      var i = "dragover" === n;
      return function (e) {
        e.dataTransfer = e.originalEvent && e.originalEvent.dataTransfer;
        var t = e.dataTransfer;
        t &&
          -1 !== v.inArray("Files", t.types) &&
          !1 !== this._trigger(n, v.Event(n, { delegatedEvent: e })) &&
          (e.preventDefault(), i && (t.dropEffect = "copy"));
      };
    }
    (v.support.fileInput = !(
      new RegExp(
        "(Android (1\\.[0156]|2\\.[01]))|(Windows Phone (OS 7|8\\.0))|(XBLWP)|(ZuneWP)|(WPDesktop)|(w(eb)?OSBrowser)|(webOS)|(Kindle/(1\\.0|2\\.[05]|3\\.0))"
      ).test(window.navigator.userAgent) ||
      v('<input type="file">').prop("disabled")
    )),
      (v.support.xhrFileUpload = !(
        !window.ProgressEvent || !window.FileReader
      )),
      (v.support.xhrFormDataFileUpload = !!window.FormData),
      (v.support.blobSlice =
        window.Blob &&
        (Blob.prototype.slice ||
          Blob.prototype.webkitSlice ||
          Blob.prototype.mozSlice)),
      v.widget("blueimp.fileupload", {
        options: {
          dropZone: v(document),
          pasteZone: void 0,
          fileInput: void 0,
          replaceFileInput: !0,
          paramName: void 0,
          singleFileUploads: !0,
          limitMultiFileUploads: void 0,
          limitMultiFileUploadSize: void 0,
          limitMultiFileUploadSizeOverhead: 512,
          sequentialUploads: !1,
          limitConcurrentUploads: void 0,
          forceIframeTransport: !1,
          redirect: void 0,
          redirectParamName: void 0,
          postMessage: void 0,
          multipart: !0,
          maxChunkSize: void 0,
          uploadedBytes: void 0,
          recalculateProgress: !0,
          progressInterval: 100,
          bitrateInterval: 500,
          autoUpload: !0,
          messages: { uploadedBytes: "Uploaded bytes exceed file size" },
          i18n: function (n, e) {
            return (
              (n = this.messages[n] || n.toString()),
              e &&
                v.each(e, function (e, t) {
                  n = n.replace("{" + e + "}", t);
                }),
              n
            );
          },
          formData: function (e) {
            return e.serializeArray();
          },
          add: function (e, t) {
            if (e.isDefaultPrevented()) return !1;
            (t.autoUpload ||
              (!1 !== t.autoUpload &&
                v(this).fileupload("option", "autoUpload"))) &&
              t.process().done(function () {
                t.submit();
              });
          },
          processData: !1,
          contentType: !1,
          cache: !1,
          timeout: 0,
        },
        _specialOptions: [
          "fileInput",
          "dropZone",
          "pasteZone",
          "multipart",
          "forceIframeTransport",
        ],
        _blobSlice:
          v.support.blobSlice &&
          function () {
            var e = this.slice || this.webkitSlice || this.mozSlice;
            return e.apply(this, arguments);
          },
        _BitrateTimer: function () {
          (this.timestamp = Date.now ? Date.now() : new Date().getTime()),
            (this.loaded = 0),
            (this.bitrate = 0),
            (this.getBitrate = function (e, t, n) {
              var i = e - this.timestamp;
              return (
                (!this.bitrate || !n || n < i) &&
                  ((this.bitrate = (t - this.loaded) * (1e3 / i) * 8),
                  (this.loaded = t),
                  (this.timestamp = e)),
                this.bitrate
              );
            });
        },
        _isXHRUpload: function (e) {
          return (
            !e.forceIframeTransport &&
            ((!e.multipart && v.support.xhrFileUpload) ||
              v.support.xhrFormDataFileUpload)
          );
        },
        _getFormData: function (e) {
          var n;
          return "function" === v.type(e.formData)
            ? e.formData(e.form)
            : v.isArray(e.formData)
            ? e.formData
            : "object" === v.type(e.formData)
            ? ((n = []),
              v.each(e.formData, function (e, t) {
                n.push({ name: e, value: t });
              }),
              n)
            : [];
        },
        _getTotal: function (e) {
          var n = 0;
          return (
            v.each(e, function (e, t) {
              n += t.size || 1;
            }),
            n
          );
        },
        _initProgressObject: function (e) {
          var t = { loaded: 0, total: 0, bitrate: 0 };
          e._progress ? v.extend(e._progress, t) : (e._progress = t);
        },
        _initResponseObject: function (e) {
          var t;
          if (e._response)
            for (t in e._response)
              e._response.hasOwnProperty(t) && delete e._response[t];
          else e._response = {};
        },
        _onProgress: function (e, t) {
          if (e.lengthComputable) {
            var n,
              i = Date.now ? Date.now() : new Date().getTime();
            if (
              t._time &&
              t.progressInterval &&
              i - t._time < t.progressInterval &&
              e.loaded !== e.total
            )
              return;
            (t._time = i),
              (n =
                Math.floor(
                  (e.loaded / e.total) * (t.chunkSize || t._progress.total)
                ) + (t.uploadedBytes || 0)),
              (this._progress.loaded += n - t._progress.loaded),
              (this._progress.bitrate = this._bitrateTimer.getBitrate(
                i,
                this._progress.loaded,
                t.bitrateInterval
              )),
              (t._progress.loaded = t.loaded = n),
              (t._progress.bitrate = t.bitrate =
                t._bitrateTimer.getBitrate(i, n, t.bitrateInterval)),
              this._trigger(
                "progress",
                v.Event("progress", { delegatedEvent: e }),
                t
              ),
              this._trigger(
                "progressall",
                v.Event("progressall", { delegatedEvent: e }),
                this._progress
              );
          }
        },
        _initProgressListener: function (n) {
          var i = this,
            e = n.xhr ? n.xhr() : v.ajaxSettings.xhr();
          e.upload &&
            (v(e.upload).bind("progress", function (e) {
              var t = e.originalEvent;
              (e.lengthComputable = t.lengthComputable),
                (e.loaded = t.loaded),
                (e.total = t.total),
                i._onProgress(e, n);
            }),
            (n.xhr = function () {
              return e;
            }));
        },
        _isInstanceOf: function (e, t) {
          return Object.prototype.toString.call(t) === "[object " + e + "]";
        },
        _initXHRData: function (n) {
          var i,
            r = this,
            e = n.files[0],
            t = n.multipart || !v.support.xhrFileUpload,
            o = "array" === v.type(n.paramName) ? n.paramName[0] : n.paramName;
          (n.headers = v.extend({}, n.headers)),
            n.contentRange && (n.headers["Content-Range"] = n.contentRange),
            (t && !n.blob && this._isInstanceOf("File", e)) ||
              (n.headers["Content-Disposition"] =
                'attachment; filename="' + encodeURI(e.name) + '"'),
            t
              ? v.support.xhrFormDataFileUpload &&
                (n.postMessage
                  ? ((i = this._getFormData(n)),
                    n.blob
                      ? i.push({ name: o, value: n.blob })
                      : v.each(n.files, function (e, t) {
                          i.push({
                            name:
                              ("array" === v.type(n.paramName) &&
                                n.paramName[e]) ||
                              o,
                            value: t,
                          });
                        }))
                  : (r._isInstanceOf("FormData", n.formData)
                      ? (i = n.formData)
                      : ((i = new FormData()),
                        v.each(this._getFormData(n), function (e, t) {
                          i.append(t.name, t.value);
                        })),
                    n.blob
                      ? i.append(o, n.blob, e.name)
                      : v.each(n.files, function (e, t) {
                          (r._isInstanceOf("File", t) ||
                            r._isInstanceOf("Blob", t)) &&
                            i.append(
                              ("array" === v.type(n.paramName) &&
                                n.paramName[e]) ||
                                o,
                              t,
                              t.uploadName || t.name
                            );
                        })),
                (n.data = i))
              : ((n.contentType = e.type || "application/octet-stream"),
                (n.data = n.blob || e)),
            (n.blob = null);
        },
        _initIframeSettings: function (e) {
          var t = v("<a></a>").prop("href", e.url).prop("host");
          (e.dataType = "iframe " + (e.dataType || "")),
            (e.formData = this._getFormData(e)),
            e.redirect &&
              t &&
              t !== location.host &&
              e.formData.push({
                name: e.redirectParamName || "redirect",
                value: e.redirect,
              });
        },
        _initDataSettings: function (e) {
          this._isXHRUpload(e)
            ? (this._chunkedUpload(e, !0) ||
                (e.data || this._initXHRData(e), this._initProgressListener(e)),
              e.postMessage &&
                (e.dataType = "postmessage " + (e.dataType || "")))
            : this._initIframeSettings(e);
        },
        _getParamName: function (e) {
          var t = v(e.fileInput),
            i = e.paramName;
          return (
            i
              ? v.isArray(i) || (i = [i])
              : ((i = []),
                t.each(function () {
                  for (
                    var e = v(this),
                      t = e.prop("name") || "files[]",
                      n = (e.prop("files") || [1]).length;
                    n;

                  )
                    i.push(t), (n -= 1);
                }),
                i.length || (i = [t.prop("name") || "files[]"])),
            i
          );
        },
        _initFormSettings: function (e) {
          (e.form && e.form.length) ||
            ((e.form = v(e.fileInput.prop("form"))),
            e.form.length || (e.form = v(this.options.fileInput.prop("form")))),
            (e.paramName = this._getParamName(e)),
            e.url || (e.url = e.form.prop("action") || location.href),
            (e.type = (
              e.type ||
              ("string" === v.type(e.form.prop("method")) &&
                e.form.prop("method")) ||
              ""
            ).toUpperCase()),
            "POST" !== e.type &&
              "PUT" !== e.type &&
              "PATCH" !== e.type &&
              (e.type = "POST"),
            e.formAcceptCharset ||
              (e.formAcceptCharset = e.form.attr("accept-charset"));
        },
        _getAJAXSettings: function (e) {
          var t = v.extend({}, this.options, e);
          return this._initFormSettings(t), this._initDataSettings(t), t;
        },
        _getDeferredState: function (e) {
          return e.state
            ? e.state()
            : e.isResolved()
            ? "resolved"
            : e.isRejected()
            ? "rejected"
            : "pending";
        },
        _enhancePromise: function (e) {
          return (
            (e.success = e.done), (e.error = e.fail), (e.complete = e.always), e
          );
        },
        _getXHRPromise: function (e, t, n) {
          var i = v.Deferred(),
            r = i.promise();
          return (
            (t = t || this.options.context || r),
            !0 === e ? i.resolveWith(t, n) : !1 === e && i.rejectWith(t, n),
            (r.abort = i.promise),
            this._enhancePromise(r)
          );
        },
        _addConvenienceMethods: function (e, n) {
          var i = this,
            r = function (e) {
              return v.Deferred().resolveWith(i, e).promise();
            };
          (n.process = function (e, t) {
            return (
              (e || t) &&
                (n._processQueue = this._processQueue =
                  (this._processQueue || r([this]))
                    .then(function () {
                      return n.errorThrown
                        ? v.Deferred().rejectWith(i, [n]).promise()
                        : r(arguments);
                    })
                    .then(e, t)),
              this._processQueue || r([this])
            );
          }),
            (n.submit = function () {
              return (
                "pending" !== this.state() &&
                  (n.jqXHR = this.jqXHR =
                    !1 !==
                      i._trigger(
                        "submit",
                        v.Event("submit", { delegatedEvent: e }),
                        this
                      ) && i._onSend(e, this)),
                this.jqXHR || i._getXHRPromise()
              );
            }),
            (n.abort = function () {
              return this.jqXHR
                ? this.jqXHR.abort()
                : ((this.errorThrown = "abort"),
                  i._trigger("fail", null, this),
                  i._getXHRPromise(!1));
            }),
            (n.state = function () {
              return this.jqXHR
                ? i._getDeferredState(this.jqXHR)
                : this._processQueue
                ? i._getDeferredState(this._processQueue)
                : void 0;
            }),
            (n.processing = function () {
              return (
                !this.jqXHR &&
                this._processQueue &&
                "pending" === i._getDeferredState(this._processQueue)
              );
            }),
            (n.progress = function () {
              return this._progress;
            }),
            (n.response = function () {
              return this._response;
            });
        },
        _getUploadedBytes: function (e) {
          var t = e.getResponseHeader("Range"),
            n = t && t.split("-"),
            i = n && 1 < n.length && parseInt(n[1], 10);
          return i && i + 1;
        },
        _chunkedUpload: function (o, e) {
          o.uploadedBytes = o.uploadedBytes || 0;
          var t,
            s,
            a = this,
            n = o.files[0],
            u = n.size,
            l = o.uploadedBytes,
            c = o.maxChunkSize || u,
            f = this._blobSlice,
            h = v.Deferred(),
            i = h.promise();
          return (
            !(
              !(
                this._isXHRUpload(o) &&
                f &&
                (l || ("function" === v.type(c) ? c(o) : c) < u)
              ) || o.data
            ) &&
            (!!e ||
              (u <= l
                ? ((n.error = o.i18n("uploadedBytes")),
                  this._getXHRPromise(!1, o.context, [null, "error", n.error]))
                : ((s = function () {
                    var i = v.extend({}, o),
                      r = i._progress.loaded;
                    (i.blob = f.call(
                      n,
                      l,
                      l + ("function" === v.type(c) ? c(i) : c),
                      n.type
                    )),
                      (i.chunkSize = i.blob.size),
                      (i.contentRange =
                        "bytes " + l + "-" + (l + i.chunkSize - 1) + "/" + u),
                      a._initXHRData(i),
                      a._initProgressListener(i),
                      (t = (
                        (!1 !== a._trigger("chunksend", null, i) &&
                          v.ajax(i)) ||
                        a._getXHRPromise(!1, i.context)
                      )
                        .done(function (e, t, n) {
                          (l = a._getUploadedBytes(n) || l + i.chunkSize),
                            r + i.chunkSize - i._progress.loaded &&
                              a._onProgress(
                                v.Event("progress", {
                                  lengthComputable: !0,
                                  loaded: l - i.uploadedBytes,
                                  total: l - i.uploadedBytes,
                                }),
                                i
                              ),
                            (o.uploadedBytes = i.uploadedBytes = l),
                            (i.result = e),
                            (i.textStatus = t),
                            (i.jqXHR = n),
                            a._trigger("chunkdone", null, i),
                            a._trigger("chunkalways", null, i),
                            l < u ? s() : h.resolveWith(i.context, [e, t, n]);
                        })
                        .fail(function (e, t, n) {
                          (i.jqXHR = e),
                            (i.textStatus = t),
                            (i.errorThrown = n),
                            a._trigger("chunkfail", null, i),
                            a._trigger("chunkalways", null, i),
                            h.rejectWith(i.context, [e, t, n]);
                        }));
                  }),
                  this._enhancePromise(i),
                  (i.abort = function () {
                    return t.abort();
                  }),
                  s(),
                  i)))
          );
        },
        _beforeSend: function (e, t) {
          0 === this._active &&
            (this._trigger("start"),
            (this._bitrateTimer = new this._BitrateTimer()),
            (this._progress.loaded = this._progress.total = 0),
            (this._progress.bitrate = 0)),
            this._initResponseObject(t),
            this._initProgressObject(t),
            (t._progress.loaded = t.loaded = t.uploadedBytes || 0),
            (t._progress.total = t.total = this._getTotal(t.files) || 1),
            (t._progress.bitrate = t.bitrate = 0),
            (this._active += 1),
            (this._progress.loaded += t.loaded),
            (this._progress.total += t.total);
        },
        _onDone: function (e, t, n, i) {
          var r = i._progress.total,
            o = i._response;
          i._progress.loaded < r &&
            this._onProgress(
              v.Event("progress", {
                lengthComputable: !0,
                loaded: r,
                total: r,
              }),
              i
            ),
            (o.result = i.result = e),
            (o.textStatus = i.textStatus = t),
            (o.jqXHR = i.jqXHR = n),
            this._trigger("done", null, i);
        },
        _onFail: function (e, t, n, i) {
          var r = i._response;
          i.recalculateProgress &&
            ((this._progress.loaded -= i._progress.loaded),
            (this._progress.total -= i._progress.total)),
            (r.jqXHR = i.jqXHR = e),
            (r.textStatus = i.textStatus = t),
            (r.errorThrown = i.errorThrown = n),
            this._trigger("fail", null, i);
        },
        _onAlways: function (e, t, n, i) {
          this._trigger("always", null, i);
        },
        _onSend: function (e, t) {
          t.submit || this._addConvenienceMethods(e, t);
          var n,
            i,
            r,
            o,
            s = this,
            a = s._getAJAXSettings(t),
            u = function () {
              return (
                (s._sending += 1),
                (a._bitrateTimer = new s._BitrateTimer()),
                (n =
                  n ||
                  (
                    ((i ||
                      !1 ===
                        s._trigger(
                          "send",
                          v.Event("send", { delegatedEvent: e }),
                          a
                        )) &&
                      s._getXHRPromise(!1, a.context, i)) ||
                    s._chunkedUpload(a) ||
                    v.ajax(a)
                  )
                    .done(function (e, t, n) {
                      s._onDone(e, t, n, a);
                    })
                    .fail(function (e, t, n) {
                      s._onFail(e, t, n, a);
                    })
                    .always(function (e, t, n) {
                      if (
                        (s._onAlways(e, t, n, a),
                        (s._sending -= 1),
                        (s._active -= 1),
                        a.limitConcurrentUploads &&
                          a.limitConcurrentUploads > s._sending)
                      )
                        for (var i = s._slots.shift(); i; ) {
                          if ("pending" === s._getDeferredState(i)) {
                            i.resolve();
                            break;
                          }
                          i = s._slots.shift();
                        }
                      0 === s._active && s._trigger("stop");
                    })),
                n
              );
            };
          return (
            this._beforeSend(e, a),
            this.options.sequentialUploads ||
            (this.options.limitConcurrentUploads &&
              this.options.limitConcurrentUploads <= this._sending)
              ? ((o =
                  1 < this.options.limitConcurrentUploads
                    ? ((r = v.Deferred()), this._slots.push(r), r.then(u))
                    : ((this._sequence = this._sequence.then(u, u)),
                      this._sequence)),
                (o.abort = function () {
                  return (
                    (i = [void 0, "abort", "abort"]),
                    n ? n.abort() : (r && r.rejectWith(a.context, i), u())
                  );
                }),
                this._enhancePromise(o))
              : u()
          );
        },
        _onAdd: function (i, r) {
          var o,
            e,
            s,
            t,
            a = this,
            u = !0,
            n = v.extend({}, this.options, r),
            l = r.files,
            c = l.length,
            f = n.limitMultiFileUploads,
            h = n.limitMultiFileUploadSize,
            d = n.limitMultiFileUploadSizeOverhead,
            p = 0,
            m = this._getParamName(n),
            g = 0;
          if (!c) return !1;
          if (
            (h && void 0 === l[0].size && (h = void 0),
            (n.singleFileUploads || f || h) && this._isXHRUpload(n))
          )
            if (n.singleFileUploads || h || !f)
              if (!n.singleFileUploads && h)
                for (s = [], o = [], t = 0; t < c; t += 1)
                  (p += l[t].size + d),
                    (t + 1 === c ||
                      p + l[t + 1].size + d > h ||
                      (f && f <= t + 1 - g)) &&
                      (s.push(l.slice(g, t + 1)),
                      (e = m.slice(g, t + 1)),
                      e.length || (e = m),
                      o.push(e),
                      (g = t + 1),
                      (p = 0));
              else o = m;
            else
              for (s = [], o = [], t = 0; t < c; t += f)
                s.push(l.slice(t, t + f)),
                  (e = m.slice(t, t + f)),
                  e.length || (e = m),
                  o.push(e);
          else (s = [l]), (o = [m]);
          return (
            (r.originalFiles = l),
            v.each(s || l, function (e, t) {
              var n = v.extend({}, r);
              return (
                (n.files = s ? t : [t]),
                (n.paramName = o[e]),
                a._initResponseObject(n),
                a._initProgressObject(n),
                a._addConvenienceMethods(i, n),
                (u = a._trigger(
                  "add",
                  v.Event("add", { delegatedEvent: i }),
                  n
                )),
                u
              );
            }),
            u
          );
        },
        _replaceFileInput: function (e) {
          var n = e.fileInput,
            i = n.clone(!0),
            t = n.is(document.activeElement);
          (e.fileInputClone = i),
            v("<form></form>").append(i)[0].reset(),
            n.after(i).detach(),
            t && i.focus(),
            v.cleanData(n.unbind("remove")),
            (this.options.fileInput = this.options.fileInput.map(function (
              e,
              t
            ) {
              return t === n[0] ? i[0] : t;
            })),
            n[0] === this.element[0] && (this.element = i);
        },
        _handleFileTreeEntry: function (n, i) {
          var e,
            r = this,
            o = v.Deferred(),
            s = [],
            a = function (e) {
              e && !e.entry && (e.entry = n), o.resolve([e]);
            },
            u = function () {
              e.readEntries(function (e) {
                var t;
                e.length
                  ? ((s = s.concat(e)), u())
                  : ((t = s),
                    r
                      ._handleFileTreeEntries(t, i + n.name + "/")
                      .done(function (e) {
                        o.resolve(e);
                      })
                      .fail(a));
              }, a);
            };
          return (
            (i = i || ""),
            n.isFile
              ? n._file
                ? ((n._file.relativePath = i), o.resolve(n._file))
                : n.file(function (e) {
                    (e.relativePath = i), o.resolve(e);
                  }, a)
              : n.isDirectory
              ? ((e = n.createReader()), u())
              : o.resolve([]),
            o.promise()
          );
        },
        _handleFileTreeEntries: function (e, t) {
          var n = this;
          return v.when
            .apply(
              v,
              v.map(e, function (e) {
                return n._handleFileTreeEntry(e, t);
              })
            )
            .then(function () {
              return Array.prototype.concat.apply([], arguments);
            });
        },
        _getDroppedFiles: function (e) {
          e = e || {};
          var t = e.items;
          return t && t.length && (t[0].webkitGetAsEntry || t[0].getAsEntry)
            ? this._handleFileTreeEntries(
                v.map(t, function (e) {
                  var t;
                  return e.webkitGetAsEntry
                    ? ((t = e.webkitGetAsEntry()),
                      t && (t._file = e.getAsFile()),
                      t)
                    : e.getAsEntry();
                })
              )
            : v.Deferred().resolve(v.makeArray(e.files)).promise();
        },
        _getSingleFileInputFiles: function (e) {
          e = v(e);
          var t,
            n,
            i = e.prop("webkitEntries") || e.prop("entries");
          if (i && i.length) return this._handleFileTreeEntries(i);
          if (((t = v.makeArray(e.prop("files"))), t.length))
            void 0 === t[0].name &&
              t[0].fileName &&
              v.each(t, function (e, t) {
                (t.name = t.fileName), (t.size = t.fileSize);
              });
          else {
            if (((n = e.prop("value")), !n))
              return v.Deferred().resolve([]).promise();
            t = [{ name: n.replace(/^.*\\/, "") }];
          }
          return v.Deferred().resolve(t).promise();
        },
        _getFileInputFiles: function (e) {
          return e instanceof v && 1 !== e.length
            ? v.when
                .apply(v, v.map(e, this._getSingleFileInputFiles))
                .then(function () {
                  return Array.prototype.concat.apply([], arguments);
                })
            : this._getSingleFileInputFiles(e);
        },
        _onChange: function (t) {
          var n = this,
            i = { fileInput: v(t.target), form: v(t.target.form) };
          this._getFileInputFiles(i.fileInput).always(function (e) {
            (i.files = e),
              n.options.replaceFileInput && n._replaceFileInput(i),
              !1 !==
                n._trigger(
                  "change",
                  v.Event("change", { delegatedEvent: t }),
                  i
                ) && n._onAdd(t, i);
          });
        },
        _onPaste: function (e) {
          var t =
              e.originalEvent &&
              e.originalEvent.clipboardData &&
              e.originalEvent.clipboardData.items,
            i = { files: [] };
          t &&
            t.length &&
            (v.each(t, function (e, t) {
              var n = t.getAsFile && t.getAsFile();
              n && i.files.push(n);
            }),
            !1 !==
              this._trigger(
                "paste",
                v.Event("paste", { delegatedEvent: e }),
                i
              ) && this._onAdd(e, i));
        },
        _onDrop: function (t) {
          t.dataTransfer = t.originalEvent && t.originalEvent.dataTransfer;
          var n = this,
            e = t.dataTransfer,
            i = {};
          e &&
            e.files &&
            e.files.length &&
            (t.preventDefault(),
            this._getDroppedFiles(e).always(function (e) {
              (i.files = e),
                !1 !==
                  n._trigger(
                    "drop",
                    v.Event("drop", { delegatedEvent: t }),
                    i
                  ) && n._onAdd(t, i);
            }));
        },
        _onDragOver: e("dragover"),
        _onDragEnter: e("dragenter"),
        _onDragLeave: e("dragleave"),
        _initEventHandlers: function () {
          this._isXHRUpload(this.options) &&
            (this._on(this.options.dropZone, {
              dragover: this._onDragOver,
              drop: this._onDrop,
              dragenter: this._onDragEnter,
              dragleave: this._onDragLeave,
            }),
            this._on(this.options.pasteZone, { paste: this._onPaste })),
            v.support.fileInput &&
              this._on(this.options.fileInput, { change: this._onChange });
        },
        _destroyEventHandlers: function () {
          this._off(this.options.dropZone, "dragenter dragleave dragover drop"),
            this._off(this.options.pasteZone, "paste"),
            this._off(this.options.fileInput, "change");
        },
        _destroy: function () {
          this._destroyEventHandlers();
        },
        _setOption: function (e, t) {
          var n = -1 !== v.inArray(e, this._specialOptions);
          n && this._destroyEventHandlers(),
            this._super(e, t),
            n && (this._initSpecialOptions(), this._initEventHandlers());
        },
        _initSpecialOptions: function () {
          var e = this.options;
          void 0 === e.fileInput
            ? (e.fileInput = this.element.is('input[type="file"]')
                ? this.element
                : this.element.find('input[type="file"]'))
            : e.fileInput instanceof v || (e.fileInput = v(e.fileInput)),
            e.dropZone instanceof v || (e.dropZone = v(e.dropZone)),
            e.pasteZone instanceof v || (e.pasteZone = v(e.pasteZone));
        },
        _getRegExp: function (e) {
          var t = e.split("/"),
            n = t.pop();
          return t.shift(), new RegExp(t.join("/"), n);
        },
        _isRegExpOption: function (e, t) {
          return (
            "url" !== e &&
            "string" === v.type(t) &&
            /^\/.*\/[igm]{0,3}$/.test(t)
          );
        },
        _initDataAttributes: function () {
          var r = this,
            o = this.options,
            s = this.element.data();
          v.each(this.element[0].attributes, function (e, t) {
            var n,
              i = t.name.toLowerCase();
            /^data-/.test(i) &&
              ((i = i.slice(5).replace(/-[a-z]/g, function (e) {
                return e.charAt(1).toUpperCase();
              })),
              (n = s[i]),
              r._isRegExpOption(i, n) && (n = r._getRegExp(n)),
              (o[i] = n));
          });
        },
        _create: function () {
          this._initDataAttributes(),
            this._initSpecialOptions(),
            (this._slots = []),
            (this._sequence = this._getXHRPromise(!0)),
            (this._sending = this._active = 0),
            this._initProgressObject(this),
            this._initEventHandlers();
        },
        active: function () {
          return this._active;
        },
        progress: function () {
          return this._progress;
        },
        add: function (t) {
          var n = this;
          t &&
            !this.options.disabled &&
            (t.fileInput && !t.files
              ? this._getFileInputFiles(t.fileInput).always(function (e) {
                  (t.files = e), n._onAdd(null, t);
                })
              : ((t.files = v.makeArray(t.files)), this._onAdd(null, t)));
        },
        send: function (t) {
          if (t && !this.options.disabled) {
            if (t.fileInput && !t.files) {
              var n,
                i,
                r = this,
                o = v.Deferred(),
                e = o.promise();
              return (
                (e.abort = function () {
                  return (
                    (i = !0),
                    n ? n.abort() : (o.reject(null, "abort", "abort"), e)
                  );
                }),
                this._getFileInputFiles(t.fileInput).always(function (e) {
                  i ||
                    (e.length
                      ? ((t.files = e),
                        (n = r._onSend(null, t)),
                        n.then(
                          function (e, t, n) {
                            o.resolve(e, t, n);
                          },
                          function (e, t, n) {
                            o.reject(e, t, n);
                          }
                        ))
                      : o.reject());
                }),
                this._enhancePromise(e)
              );
            }
            if (((t.files = v.makeArray(t.files)), t.files.length))
              return this._onSend(null, t);
          }
          return this._getXHRPromise(!1, t && t.context);
        },
      });
  }),
  (function (e) {
    "function" == typeof define && define.amd
      ? define(["jquery"], e)
      : "object" == typeof exports
      ? (module.exports = e)
      : e(jQuery);
  })(function (h) {
    var d,
      p,
      e = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
      t =
        "onwheel" in document || 9 <= document.documentMode
          ? ["wheel"]
          : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
      m = Array.prototype.slice;
    if (h.event.fixHooks)
      for (var n = e.length; n; ) h.event.fixHooks[e[--n]] = h.event.mouseHooks;
    var g = (h.event.special.mousewheel = {
      version: "3.1.12",
      setup: function () {
        if (this.addEventListener)
          for (var e = t.length; e; ) this.addEventListener(t[--e], i, !1);
        else this.onmousewheel = i;
        h.data(this, "mousewheel-line-height", g.getLineHeight(this)),
          h.data(this, "mousewheel-page-height", g.getPageHeight(this));
      },
      teardown: function () {
        if (this.removeEventListener)
          for (var e = t.length; e; ) this.removeEventListener(t[--e], i, !1);
        else this.onmousewheel = null;
        h.removeData(this, "mousewheel-line-height"),
          h.removeData(this, "mousewheel-page-height");
      },
      getLineHeight: function (e) {
        var t = h(e),
          n = t["offsetParent" in h.fn ? "offsetParent" : "parent"]();
        return (
          n.length || (n = h("body")),
          parseInt(n.css("fontSize"), 10) ||
            parseInt(t.css("fontSize"), 10) ||
            16
        );
      },
      getPageHeight: function (e) {
        return h(e).height();
      },
      settings: { adjustOldDeltas: !0, normalizeOffset: !0 },
    });
    function i(e) {
      var t,
        n = e || window.event,
        i = m.call(arguments, 1),
        r = 0,
        o = 0,
        s = 0,
        a = 0,
        u = 0;
      if (
        ((e = h.event.fix(n)),
        (e.type = "mousewheel"),
        "detail" in n && (s = -1 * n.detail),
        "wheelDelta" in n && (s = n.wheelDelta),
        "wheelDeltaY" in n && (s = n.wheelDeltaY),
        "wheelDeltaX" in n && (o = -1 * n.wheelDeltaX),
        "axis" in n && n.axis === n.HORIZONTAL_AXIS && ((o = -1 * s), (s = 0)),
        (r = 0 === s ? o : s),
        "deltaY" in n && ((s = -1 * n.deltaY), (r = s)),
        "deltaX" in n && ((o = n.deltaX), 0 === s && (r = -1 * o)),
        0 !== s || 0 !== o)
      ) {
        if (1 === n.deltaMode) {
          var l = h.data(this, "mousewheel-line-height");
          (r *= l), (s *= l), (o *= l);
        } else if (2 === n.deltaMode) {
          var c = h.data(this, "mousewheel-page-height");
          (r *= c), (s *= c), (o *= c);
        }
        if (
          ((t = Math.max(Math.abs(s), Math.abs(o))),
          (!p || t < p) && ((p = t), y(n, t) && (p /= 40)),
          y(n, t) && ((r /= 40), (o /= 40), (s /= 40)),
          (r = Math[1 <= r ? "floor" : "ceil"](r / p)),
          (o = Math[1 <= o ? "floor" : "ceil"](o / p)),
          (s = Math[1 <= s ? "floor" : "ceil"](s / p)),
          g.settings.normalizeOffset && this.getBoundingClientRect)
        ) {
          var f = this.getBoundingClientRect();
          (a = e.clientX - f.left), (u = e.clientY - f.top);
        }
        return (
          (e.deltaX = o),
          (e.deltaY = s),
          (e.deltaFactor = p),
          (e.offsetX = a),
          (e.offsetY = u),
          (e.deltaMode = 0),
          i.unshift(e, r, o, s),
          d && clearTimeout(d),
          (d = setTimeout(v, 200)),
          (h.event.dispatch || h.event.handle).apply(this, i)
        );
      }
    }
    function v() {
      p = null;
    }
    function y(e, t) {
      return (
        g.settings.adjustOldDeltas && "mousewheel" === e.type && t % 120 == 0
      );
    }
    h.fn.extend({
      mousewheel: function (e) {
        return e ? this.bind("mousewheel", e) : this.trigger("mousewheel");
      },
      unmousewheel: function (e) {
        return this.unbind("mousewheel", e);
      },
    });
  });
var CwZ = jQuery.noConflict();
jQueryInc && (jQuery = oldJQ);
