(function (_) {
  var window = this,
    document = this.document;
  var da,
    ia,
    ja,
    ma,
    na,
    oa,
    ra,
    sa,
    wa,
    Aa,
    za,
    ya,
    Ca,
    Ja,
    Ha,
    Ia,
    Ka,
    La,
    Na;
  _.ba = function (a) {
    return function () {
      return _.aa[a].apply(this, arguments);
    };
  };
  da = function (a) {
    return a ? (a.passive && ca() ? a : a.capture || !1) : !1;
  };
  ia = function () {
    return fa(_.p.top, "GoogleSetNPA") || fa(ha(), "GoogleSetNPA");
  };
  ja = function (a) {
    a = _.q(a.split(/\s+/), function (b) {
      return (b = /^(-?\d+)(px|%)$/.exec(b))
        ? { value: parseFloat(b[1]), type: b[2] }
        : { value: 0, type: "px" };
    });
    a[1] = a[1] || a[0];
    a[2] = a[2] || a[0];
    a[3] = a[3] || a[1];
    return a;
  };
  ma = function (a) {
    if (!a) return [0];
    a = _.r(a) ? [a] : a;
    a = _.u(a, function (b) {
      return _.r(b) && 0 <= b && 1 >= b ? !0 : !1;
    });
    _.ka(a);
    la(a, function (b, c) {
      return b - c;
    });
    return a;
  };
  na = function (a) {
    try {
      var b = a.getBoundingClientRect();
    } catch (c) {}
    return b
      ? {
          top: b.top,
          right: b.right,
          bottom: b.bottom,
          left: b.left,
          width: b.width || b.right - b.left,
          height: b.height || b.bottom - b.top,
        }
      : { top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 };
  };
  _.aa = [];
  oa = function (a) {
    var b = 0;
    return function () {
      return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
    };
  };
  _.pa = function (a) {
    var b =
      "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
    return b ? b.call(a) : { next: oa(a) };
  };
  _.qa = function (a) {
    if (!(a instanceof Array)) {
      a = _.pa(a);
      for (var b, c = []; !(b = a.next()).done; ) c.push(b.value);
      a = c;
    }
    return a;
  };
  ra =
    "function" == typeof Object.create
      ? Object.create
      : function (a) {
          var b = function () {};
          b.prototype = a;
          return new b();
        };
  if ("function" == typeof Object.setPrototypeOf) sa = Object.setPrototypeOf;
  else {
    var ta;
    a: {
      var ua = { a: !0 },
        va = {};
      try {
        va.__proto__ = ua;
        ta = va.a;
        break a;
      } catch (a) {}
      ta = !1;
    }
    sa = ta
      ? function (a, b) {
          a.__proto__ = b;
          if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
          return a;
        }
      : null;
  }
  wa = sa;
  _.v = function (a, b) {
    a.prototype = ra(b.prototype);
    a.prototype.constructor = a;
    if (wa) wa(a, b);
    else
      for (var c in b)
        if ("prototype" != c)
          if (Object.defineProperties) {
            var d = Object.getOwnPropertyDescriptor(b, c);
            d && Object.defineProperty(a, c, d);
          } else a[c] = b[c];
    a.Da = b.prototype;
  };
  _.p = this || self;
  _.w = function (a) {
    return void 0 !== a;
  };
  _.x = function (a) {
    return "string" == typeof a;
  };
  _.xa = function (a) {
    return "boolean" == typeof a;
  };
  _.r = function (a) {
    return "number" == typeof a;
  };
  Aa = function () {
    if (null === ya)
      a: {
        var a = _.p.document;
        if (
          (a = a.querySelector && a.querySelector("script[nonce]")) &&
          (a = a.nonce || a.getAttribute("nonce")) &&
          za.test(a)
        ) {
          ya = a;
          break a;
        }
        ya = "";
      }
    return ya;
  };
  za = /^[\w+/_-]+[=]{0,2}$/;
  ya = null;
  _.Ba = function () {};
  Ca = function (a) {
    a.Ka = void 0;
    a.B = function () {
      return a.Ka ? a.Ka : (a.Ka = new a());
    };
  };
  _.Da = function (a) {
    var b = typeof a;
    if ("object" == b)
      if (a) {
        if (a instanceof Array) return "array";
        if (a instanceof Object) return b;
        var c = Object.prototype.toString.call(a);
        if ("[object Window]" == c) return "object";
        if (
          "[object Array]" == c ||
          ("number" == typeof a.length &&
            "undefined" != typeof a.splice &&
            "undefined" != typeof a.propertyIsEnumerable &&
            !a.propertyIsEnumerable("splice"))
        )
          return "array";
        if (
          "[object Function]" == c ||
          ("undefined" != typeof a.call &&
            "undefined" != typeof a.propertyIsEnumerable &&
            !a.propertyIsEnumerable("call"))
        )
          return "function";
      } else return "null";
    else if ("function" == b && "undefined" == typeof a.call) return "object";
    return b;
  };
  _.z = function (a) {
    return "array" == _.Da(a);
  };
  _.Ea = function (a) {
    var b = _.Da(a);
    return "array" == b || ("object" == b && "number" == typeof a.length);
  };
  _.Fa = function (a) {
    return "function" == _.Da(a);
  };
  _.B = function (a) {
    var b = typeof a;
    return ("object" == b && null != a) || "function" == b;
  };
  Ja = function (a) {
    return a[Ha] || (a[Ha] = ++Ia);
  };
  Ha = "closure_uid_" + ((1e9 * Math.random()) >>> 0);
  Ia = 0;
  Ka = function (a, b, c) {
    return a.call.apply(a.bind, arguments);
  };
  La = function (a, b, c) {
    if (!a) throw Error();
    if (2 < arguments.length) {
      var d = Array.prototype.slice.call(arguments, 2);
      return function () {
        var e = Array.prototype.slice.call(arguments);
        Array.prototype.unshift.apply(e, d);
        return a.apply(b, e);
      };
    }
    return function () {
      return a.apply(b, arguments);
    };
  };
  _.C = function (a, b, c) {
    Function.prototype.bind &&
    -1 != Function.prototype.bind.toString().indexOf("native code")
      ? (_.C = Ka)
      : (_.C = La);
    return _.C.apply(null, arguments);
  };
  _.Ma = function (a, b) {
    var c = Array.prototype.slice.call(arguments, 1);
    return function () {
      var d = c.slice();
      d.push.apply(d, arguments);
      return a.apply(this, d);
    };
  };
  Na = function (a, b) {
    for (var c in b) a[c] = b[c];
  };
  _.Oa = function () {
    return +new Date();
  };
  _.Pa = function (a, b) {
    a = a.split(".");
    var c = _.p;
    a[0] in c ||
      "undefined" == typeof c.execScript ||
      c.execScript("var " + a[0]);
    for (var d; a.length && (d = a.shift()); )
      !a.length && _.w(b)
        ? (c[d] = b)
        : c[d] && c[d] !== Object.prototype[d]
        ? (c = c[d])
        : (c = c[d] = {});
  };
  _.Qa = function (a, b) {
    function c() {}
    c.prototype = b.prototype;
    a.Da = b.prototype;
    a.prototype = new c();
    a.prototype.constructor = a;
    a.vd = function (d, e, f) {
      for (
        var g = Array(arguments.length - 2), h = 2;
        h < arguments.length;
        h++
      )
        g[h - 2] = arguments[h];
      return b.prototype[e].apply(d, g);
    };
  };
  var Sa = [1, 2, 8],
    Ta = function (a) {
      return (
        a +
        'Correlator has been deprecated. Please see the Google Ad Manager help page on "Pageviews in GPT" for more information: https://support.google.com/admanager/answer/183281?hl=en'
      );
    };
  _.Ua = [];
  var Va;
  var Xa, Ya, $a, ab, cb, eb, hb, jb, la, nb, pb, kb, ob, qb, tb;
  _.Wa = function (a, b) {
    if (_.x(a)) return _.x(b) && 1 == b.length ? a.indexOf(b, 0) : -1;
    for (var c = 0; c < a.length; c++) if (c in a && a[c] === b) return c;
    return -1;
  };
  _.D = function (a, b, c) {
    for (var d = a.length, e = _.x(a) ? a.split("") : a, f = 0; f < d; f++)
      f in e && b.call(c, e[f], f, a);
  };
  _.u = function (a, b) {
    for (
      var c = a.length, d = [], e = 0, f = _.x(a) ? a.split("") : a, g = 0;
      g < c;
      g++
    )
      if (g in f) {
        var h = f[g];
        b.call(void 0, h, g, a) && (d[e++] = h);
      }
    return d;
  };
  _.q = function (a, b) {
    for (
      var c = a.length, d = Array(c), e = _.x(a) ? a.split("") : a, f = 0;
      f < c;
      f++
    )
      f in e && (d[f] = b.call(void 0, e[f], f, a));
    return d;
  };
  Xa = function (a, b) {
    var c = 0;
    _.D(a, function (d, e) {
      c = b.call(void 0, c, d, e, a);
    });
    return c;
  };
  Ya = function (a, b) {
    for (var c = a.length, d = _.x(a) ? a.split("") : a, e = 0; e < c; e++)
      if (e in d && b.call(void 0, d[e], e, a)) return !0;
    return !1;
  };
  $a = function (a, b) {
    for (var c = a.length, d = _.x(a) ? a.split("") : a, e = 0; e < c; e++)
      if (e in d && !b.call(void 0, d[e], e, a)) return !1;
    return !0;
  };
  ab = function (a, b) {
    var c = 0;
    _.D(
      a,
      function (d, e, f) {
        b.call(void 0, d, e, f) && ++c;
      },
      void 0
    );
    return c;
  };
  cb = function (a, b) {
    b = _.bb(a, b);
    return 0 > b ? null : _.x(a) ? a.charAt(b) : a[b];
  };
  _.bb = function (a, b) {
    for (var c = a.length, d = _.x(a) ? a.split("") : a, e = 0; e < c; e++)
      if (e in d && b.call(void 0, d[e], e, a)) return e;
    return -1;
  };
  _.db = function (a, b) {
    return 0 <= _.Wa(a, b);
  };
  eb = function (a, b) {
    _.db(a, b) || a.push(b);
  };
  _.gb = function (a, b) {
    b = _.Wa(a, b);
    0 <= b && _.fb(a, b);
  };
  _.fb = function (a, b) {
    return 1 == Array.prototype.splice.call(a, b, 1).length;
  };
  hb = function (a, b) {
    b = _.bb(a, b);
    return 0 <= b ? (_.fb(a, b), !0) : !1;
  };
  _.ib = function (a) {
    var b = a.length;
    if (0 < b) {
      for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
      return c;
    }
    return [];
  };
  jb = function (a, b, c) {
    return 2 >= arguments.length
      ? Array.prototype.slice.call(a, b)
      : Array.prototype.slice.call(a, b, c);
  };
  _.ka = function (a) {
    for (var b = {}, c = 0, d = 0; d < a.length; ) {
      var e = a[d++];
      var f = e;
      f = _.B(f) ? "o" + Ja(f) : (typeof f).charAt(0) + f;
      Object.prototype.hasOwnProperty.call(b, f) || ((b[f] = !0), (a[c++] = e));
    }
    a.length = c;
  };
  la = function (a, b) {
    a.sort(b || kb);
  };
  nb = function (a, b) {
    for (var c = Array(a.length), d = 0; d < a.length; d++)
      c[d] = { index: d, value: a[d] };
    var e = b || kb;
    la(c, function (f, g) {
      return e(f.value, g.value) || f.index - g.index;
    });
    for (d = 0; d < a.length; d++) a[d] = c[d].value;
  };
  pb = function (a, b) {
    if (!_.Ea(a) || !_.Ea(b) || a.length != b.length) return !1;
    for (var c = a.length, d = ob, e = 0; e < c; e++)
      if (!d(a[e], b[e])) return !1;
    return !0;
  };
  kb = function (a, b) {
    return a > b ? 1 : a < b ? -1 : 0;
  };
  ob = function (a, b) {
    return a === b;
  };
  qb = function (a, b) {
    for (var c = {}, d = 0; d < a.length; d++) {
      var e = a[d],
        f = b.call(void 0, e, d, a);
      _.w(f) && (c[f] || (c[f] = [])).push(e);
    }
    return c;
  };
  tb = function () {
    for (var a = rb(sb).length, b = [], c = 0; c < a; c++) b[c] = 0;
    return b;
  };
  var ub = function (a) {
      var b = !1,
        c;
      return function () {
        b || ((c = a()), (b = !0));
        return c;
      };
    },
    vb = function (a, b, c) {
      var d = 0,
        e = !1,
        f = [],
        g = function () {
          d = 0;
          e && ((e = !1), h());
        },
        h = function () {
          d = _.p.setTimeout(g, b);
          a.apply(c, f);
        };
      return function (k) {
        f = arguments;
        d ? (e = !0) : h();
      };
    };
  var xb, yb, zb, Ab, Bb, Cb;
  _.wb = function (a, b) {
    for (var c in a) b.call(void 0, a[c], c, a);
  };
  xb = function (a, b) {
    var c = {},
      d;
    for (d in a) b.call(void 0, a[d], d, a) && (c[d] = a[d]);
    return c;
  };
  yb = function (a, b) {
    for (var c in a) if (b.call(void 0, a[c], c, a)) return !0;
    return !1;
  };
  zb = function (a, b) {
    return null !== a && b in a;
  };
  Ab = function (a, b) {
    for (var c in a) if (a[c] == b) return !0;
    return !1;
  };
  Bb = function (a, b) {
    for (var c in a) if (b.call(void 0, a[c], c, a)) return c;
  };
  Cb = function (a) {
    var b = {},
      c;
    for (c in a) b[c] = a[c];
    return b;
  };
  var Eb = function () {
    this.j = "";
    this.l = Db;
  };
  Eb.prototype.Sa = !0;
  Eb.prototype.Qa = function () {
    return this.j.toString();
  };
  var Fb = function (a) {
      if (a instanceof Eb && a.constructor === Eb && a.l === Db) return a.j;
      _.Da(a);
      return "type_error:TrustedResourceUrl";
    },
    Db = {};
  var Gb, Hb, Ib, Jb, Kb, Lb, Mb, Nb, Ob, Pb;
  Gb = function (a) {
    return /^[\s\xa0]*$/.test(a);
  };
  Hb = function (a) {
    return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1];
  };
  Ib = /&/g;
  Jb = /</g;
  Kb = />/g;
  Lb = /"/g;
  Mb = /'/g;
  Nb = /\x00/g;
  Ob = /[\x00&<>"']/;
  _.Qb = function (a, b) {
    var c = 0;
    a = Hb(String(a)).split(".");
    b = Hb(String(b)).split(".");
    for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
      var f = a[e] || "",
        g = b[e] || "";
      do {
        f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
        g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
        if (0 == f[0].length && 0 == g[0].length) break;
        c =
          Pb(
            0 == f[1].length ? 0 : parseInt(f[1], 10),
            0 == g[1].length ? 0 : parseInt(g[1], 10)
          ) ||
          Pb(0 == f[2].length, 0 == g[2].length) ||
          Pb(f[2], g[2]);
        f = f[3];
        g = g[3];
      } while (0 == c);
    }
    return c;
  };
  Pb = function (a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
  };
  var Ub, Rb, Vb;
  _.Sb = function () {
    this.j = "";
    this.l = Rb;
  };
  _.Sb.prototype.Sa = !0;
  _.Sb.prototype.Qa = function () {
    return this.j.toString();
  };
  _.Tb = function (a) {
    if (a instanceof _.Sb && a.constructor === _.Sb && a.l === Rb) return a.j;
    _.Da(a);
    return "type_error:SafeUrl";
  };
  Ub = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
  _.Wb = function (a) {
    if (a instanceof _.Sb) return a;
    a = "object" == typeof a && a.Sa ? a.Qa() : String(a);
    Ub.test(a) || (a = "about:invalid#zClosurez");
    return Vb(a);
  };
  Rb = {};
  Vb = function (a) {
    var b = new _.Sb();
    b.j = a;
    return b;
  };
  Vb("about:blank");
  _.Yb = function () {
    this.j = "";
    this.l = _.Xb;
  };
  _.Yb.prototype.Sa = !0;
  _.Xb = {};
  _.Yb.prototype.Qa = function () {
    return this.j;
  };
  _.Zb = function (a) {
    var b = new _.Yb();
    b.j = a;
    return b;
  };
  _.$b = _.Zb("");
  a: {
    var bc = _.p.navigator;
    if (bc) {
      var cc = bc.userAgent;
      if (cc) {
        _.ac = cc;
        break a;
      }
    }
    _.ac = "";
  }
  var E = function (a) {
      return -1 != _.ac.indexOf(a);
    },
    dc = function (a) {
      for (
        var b = /(\w[\w ]+)\/([^\s]+)\s*(?:\((.*?)\))?/g, c = [], d;
        (d = b.exec(a));

      )
        c.push([d[1], d[2], d[3] || void 0]);
      return c;
    };
  var hc, gc, ic;
  _.ec = function () {
    return E("Trident") || E("MSIE");
  };
  _.fc = function () {
    return E("Firefox") || E("FxiOS");
  };
  hc = function () {
    return (
      E("Safari") &&
      !(
        gc() ||
        E("Coast") ||
        E("Opera") ||
        E("Edge") ||
        _.fc() ||
        E("Silk") ||
        E("Android")
      )
    );
  };
  gc = function () {
    return (E("Chrome") || E("CriOS")) && !E("Edge");
  };
  _.jc = function () {
    function a(e) {
      e = cb(e, d);
      return c[e] || "";
    }
    var b = _.ac;
    if (_.ec()) return ic(b);
    b = dc(b);
    var c = {};
    _.D(b, function (e) {
      c[e[0]] = e[1];
    });
    var d = _.Ma(zb, c);
    return E("Opera")
      ? a(["Version", "Opera"])
      : E("Edge")
      ? a(["Edge"])
      : gc()
      ? a(["Chrome", "CriOS"])
      : ((b = b[2]) && b[1]) || "";
  };
  ic = function (a) {
    var b = /rv: *([\d\.]*)/.exec(a);
    if (b && b[1]) return b[1];
    b = "";
    var c = /MSIE +([\d\.]+)/.exec(a);
    if (c && c[1])
      if (((a = /Trident\/(\d.\d)/.exec(a)), "7.0" == c[1]))
        if (a && a[1])
          switch (a[1]) {
            case "4.0":
              b = "8.0";
              break;
            case "5.0":
              b = "9.0";
              break;
            case "6.0":
              b = "10.0";
              break;
            case "7.0":
              b = "11.0";
          }
        else b = "7.0";
      else b = c[1];
    return b;
  };
  var kc = function (a, b) {
    a.src = Fb(b);
    (b = Aa()) && a.setAttribute("nonce", b);
  };
  var mc, nc, oc;
  _.lc = function (a) {
    Ob.test(a) &&
      (-1 != a.indexOf("&") && (a = a.replace(Ib, "&amp;")),
      -1 != a.indexOf("<") && (a = a.replace(Jb, "&lt;")),
      -1 != a.indexOf(">") && (a = a.replace(Kb, "&gt;")),
      -1 != a.indexOf('"') && (a = a.replace(Lb, "&quot;")),
      -1 != a.indexOf("'") && (a = a.replace(Mb, "&#39;")),
      -1 != a.indexOf("\x00") && (a = a.replace(Nb, "&#0;")));
    return a;
  };
  mc = String.prototype.repeat
    ? function (a, b) {
        return a.repeat(b);
      }
    : function (a, b) {
        return Array(b + 1).join(a);
      };
  nc = function (a) {
    a = _.w(void 0) ? a.toFixed(void 0) : String(a);
    var b = a.indexOf(".");
    -1 == b && (b = a.length);
    return mc("0", Math.max(0, 2 - b)) + a;
  };
  oc = function (a) {
    return null == a ? "" : String(a);
  };
  _.pc = function () {
    return (
      Math.floor(2147483648 * Math.random()).toString(36) +
      Math.abs(Math.floor(2147483648 * Math.random()) ^ _.Oa()).toString(36)
    );
  };
  var qc = function () {
    return E("iPhone") && !E("iPod") && !E("iPad");
  };
  var rc = function (a) {
    rc[" "](a);
    return a;
  };
  rc[" "] = _.Ba;
  var sc = function (a, b) {
      try {
        return rc(a[b]), !0;
      } catch (c) {}
      return !1;
    },
    uc = function (a, b) {
      var c = tc;
      return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : (c[a] = b(a));
    };
  var xc, yc, Dc, Ec, Fc, Gc, Hc, Mc, tc;
  _.vc = E("Opera");
  _.wc = _.ec();
  xc = E("Edge");
  yc = xc || _.wc;
  _.zc =
    E("Gecko") &&
    !(-1 != _.ac.toLowerCase().indexOf("webkit") && !E("Edge")) &&
    !(E("Trident") || E("MSIE")) &&
    !E("Edge");
  _.Ac = -1 != _.ac.toLowerCase().indexOf("webkit") && !E("Edge");
  _.Bc = _.Ac && E("Mobile");
  _.Cc = E("Android");
  Dc = qc();
  Ec = E("iPad");
  Fc = E("iPod");
  Gc = function () {
    var a = _.p.document;
    return a ? a.documentMode : void 0;
  };
  a: {
    var Jc = "",
      Kc = (function () {
        var a = _.ac;
        if (_.zc) return /rv:([^\);]+)(\)|;)/.exec(a);
        if (xc) return /Edge\/([\d\.]+)/.exec(a);
        if (_.wc) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
        if (_.Ac) return /WebKit\/(\S+)/.exec(a);
        if (_.vc) return /(?:Version)[ \/]?(\S+)/.exec(a);
      })();
    Kc && (Jc = Kc ? Kc[1] : "");
    if (_.wc) {
      var Lc = Gc();
      if (null != Lc && Lc > parseFloat(Jc)) {
        Hc = String(Lc);
        break a;
      }
    }
    Hc = Jc;
  }
  Mc = Hc;
  tc = {};
  _.Nc = function (a) {
    return uc(a, function () {
      return 0 <= _.Qb(Mc, a);
    });
  };
  var Pc = _.p.document;
  _.Oc =
    Pc && _.wc
      ? Gc() || ("CSS1Compat" == Pc.compatMode ? parseInt(Mc, 10) : 5)
      : void 0;
  var Qc = gc(),
    Rc = hc() && !(qc() || E("iPad") || E("iPod"));
  var Sc, Tc, Uc;
  Sc = null;
  Tc = null;
  Uc = _.zc || (_.Ac && !Rc) || _.vc || "function" == typeof _.p.btoa;
  _.Vc = function (a, b) {
    if (!Sc) {
      Sc = {};
      Tc = {};
      for (var c = 0; 65 > c; c++)
        (Sc[c] =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(
            c
          )),
          (Tc[c] =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(
              c
            ));
    }
    b = b ? Tc : Sc;
    c = [];
    for (var d = 0; d < a.length; d += 3) {
      var e = a[d],
        f = d + 1 < a.length,
        g = f ? a[d + 1] : 0,
        h = d + 2 < a.length,
        k = h ? a[d + 2] : 0,
        l = e >> 2;
      e = ((e & 3) << 4) | (g >> 4);
      g = ((g & 15) << 2) | (k >> 6);
      k &= 63;
      h || ((k = 64), f || (g = 64));
      c.push(b[l], b[e], b[g], b[k]);
    }
    return c.join("");
  };
  var Wc = 0,
    Xc = 0;
  var Yc = function () {
    this.j = [];
  };
  Yc.prototype.length = function () {
    return this.j.length;
  };
  var Zc = function (a, b) {
    for (; 127 < b; ) a.j.push((b & 127) | 128), (b >>>= 7);
    a.j.push(b);
  };
  var $c = function () {
      this.l = [];
      this.j = new Yc();
    },
    ad = function (a, b, c) {
      if (null != c) {
        Zc(a.j, 8 * b);
        a = a.j;
        var d = c;
        c = 0 > d;
        d = Math.abs(d);
        b = d >>> 0;
        d = Math.floor((d - b) / 4294967296);
        d >>>= 0;
        c &&
          ((d = ~d >>> 0),
          (b = (~b >>> 0) + 1),
          4294967295 < b && ((b = 0), d++, 4294967295 < d && (d = 0)));
        Wc = b;
        Xc = d;
        c = Wc;
        for (b = Xc; 0 < b || 127 < c; )
          a.j.push((c & 127) | 128),
            (c = ((c >>> 7) | (b << 25)) >>> 0),
            (b >>>= 7);
        a.j.push(c);
      }
    };
  var dd, ed, id, md;
  _.bd = function () {};
  _.cd = "function" == typeof Uint8Array;
  _.gd = function (a, b, c, d) {
    a.j = null;
    b || (b = []);
    a.A = void 0;
    a.o = -1;
    a.l = b;
    a: {
      if ((b = a.l.length)) {
        --b;
        var e = a.l[b];
        if (
          !(
            null === e ||
            "object" != typeof e ||
            _.z(e) ||
            (_.cd && e instanceof Uint8Array)
          )
        ) {
          a.v = b - a.o;
          a.m = e;
          break a;
        }
      }
      a.v = Number.MAX_VALUE;
    }
    a.w = {};
    if (c)
      for (b = 0; b < c.length; b++)
        (e = c[b]),
          e < a.v
            ? ((e += a.o), (a.l[e] = a.l[e] || dd))
            : (ed(a), (a.m[e] = a.m[e] || dd));
    if (d && d.length) for (b = 0; b < d.length; b++) _.fd(a, d[b]);
  };
  dd = [];
  ed = function (a) {
    var b = a.v + a.o;
    a.l[b] || (a.m = a.l[b] = {});
  };
  _.F = function (a, b) {
    if (b < a.v) {
      b += a.o;
      var c = a.l[b];
      return c === dd ? (a.l[b] = []) : c;
    }
    if (a.m) return (c = a.m[b]), c === dd ? (a.m[b] = []) : c;
  };
  _.G = function (a, b) {
    a = _.F(a, b);
    return null == a ? a : !!a;
  };
  _.H = function (a, b, c) {
    b < a.v ? (a.l[b + a.o] = c) : (ed(a), (a.m[b] = c));
  };
  _.fd = function (a, b) {
    for (var c, d, e = 0; e < b.length; e++) {
      var f = b[e],
        g = _.F(a, f);
      null != g && ((c = f), (d = g), _.H(a, f, void 0));
    }
    return c ? (_.H(a, c, d), c) : 0;
  };
  _.hd = function (a, b, c) {
    a.j || (a.j = {});
    if (!a.j[c]) {
      var d = _.F(a, c);
      d && (a.j[c] = new b(d));
    }
    return a.j[c];
  };
  _.jd = function (a, b, c) {
    id(a, b, c);
    b = a.j[c];
    b == dd && (b = a.j[c] = []);
    return b;
  };
  id = function (a, b, c) {
    a.j || (a.j = {});
    if (!a.j[c]) {
      for (var d = _.F(a, c), e = [], f = 0; f < d.length; f++)
        e[f] = new b(d[f]);
      a.j[c] = e;
    }
  };
  _.ld = function (a, b, c) {
    a.j || (a.j = {});
    c = c || [];
    for (var d = [], e = 0; e < c.length; e++) d[e] = _.kd(c[e]);
    a.j[b] = c;
    _.H(a, b, d);
  };
  md = function (a, b, c, d) {
    id(a, d, b);
    var e = a.j[b];
    e || (e = a.j[b] = []);
    c = c ? c : new d();
    a = _.F(a, b);
    e.push(c);
    a.push(_.kd(c));
  };
  _.kd = function (a) {
    if (a.j)
      for (var b in a.j) {
        var c = a.j[b];
        if (_.z(c)) for (var d = 0; d < c.length; d++) c[d] && _.kd(c[d]);
        else c && _.kd(c);
      }
    return a.l;
  };
  _.od = function (a) {
    _.gd(this, a, nd, null);
  };
  _.Qa(_.od, _.bd);
  var nd = [13];
  _.pd = function (a) {
    _.gd(this, a, null, null);
  };
  _.Qa(_.pd, _.bd);
  var qd = document,
    rd = window;
  var td = function (a) {
    _.gd(this, a, sd, null);
  };
  _.Qa(td, _.bd);
  var sd = [1, 2, 3, 4];
  var ud = function () {
    this.j = document || { cookie: "" };
  };
  ud.prototype.set = function (a, b, c, d, e, f) {
    if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
    if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
    _.w(c) || (c = -1);
    e = e ? ";domain=" + e : "";
    d = d ? ";path=" + d : "";
    f = f ? ";secure" : "";
    c =
      0 > c
        ? ""
        : 0 == c
        ? ";expires=" + new Date(1970, 1, 1).toUTCString()
        : ";expires=" + new Date(_.Oa() + 1e3 * c).toUTCString();
    this.j.cookie = a + "=" + b + e + d + c + f;
  };
  ud.prototype.get = function (a, b) {
    for (
      var c = a + "=", d = (this.j.cookie || "").split(";"), e = 0, f;
      e < d.length;
      e++
    ) {
      f = Hb(d[e]);
      if (0 == f.lastIndexOf(c, 0)) return f.substr(c.length);
      if (f == a) return "";
    }
    return b;
  };
  var vd = function () {
    this.j = new ud();
  };
  vd.prototype.get = function (a) {
    a = this.j.get(a);
    return void 0 === a ? null : a;
  };
  vd.prototype.set = function (a, b) {
    this.j.set(a, b, 0, "", "");
  };
  var wd = function () {
    var a = new vd();
    try {
      var b = a.get("DATA_USE_CONSENT");
    } catch (c) {}
    if (!b) return null;
    try {
      return new td(b ? JSON.parse(b) : null);
    } catch (c) {
      return null;
    }
  };
  var zd = function (a, b, c) {
      _.r(a)
        ? ((this.j = xd(a, b || 0, c || 1)), yd(this, c || 1))
        : _.B(a)
        ? ((this.j = xd(a.getFullYear(), a.getMonth(), a.getDate())),
          yd(this, a.getDate()))
        : ((this.j = new Date(_.Oa())),
          (a = this.j.getDate()),
          this.j.setHours(0),
          this.j.setMinutes(0),
          this.j.setSeconds(0),
          this.j.setMilliseconds(0),
          yd(this, a));
    },
    xd = function (a, b, c) {
      b = new Date(a, b, c);
      0 <= a && 100 > a && b.setFullYear(b.getFullYear() - 1900);
      return b;
    };
  _.n = zd.prototype;
  _.n.getFullYear = function () {
    return this.j.getFullYear();
  };
  _.n.getMonth = function () {
    return this.j.getMonth();
  };
  _.n.getDate = function () {
    return this.j.getDate();
  };
  _.n.getTime = function () {
    return this.j.getTime();
  };
  _.n.set = function (a) {
    this.j = new Date(a.getFullYear(), a.getMonth(), a.getDate());
  };
  _.n.add = function (a) {
    if (a.w || a.o) {
      var b = this.getMonth() + a.o + 12 * a.w,
        c = this.getFullYear() + Math.floor(b / 12);
      b %= 12;
      0 > b && (b += 12);
      a: {
        switch (b) {
          case 1:
            var d = 0 != c % 4 || (0 == c % 100 && 0 != c % 400) ? 28 : 29;
            break a;
          case 5:
          case 8:
          case 10:
          case 3:
            d = 30;
            break a;
        }
        d = 31;
      }
      d = Math.min(d, this.getDate());
      this.j.setDate(1);
      this.j.setFullYear(c);
      this.j.setMonth(b);
      this.j.setDate(d);
    }
    a.j &&
      ((a = new Date(
        new Date(
          this.getFullYear(),
          this.getMonth(),
          this.getDate(),
          12
        ).getTime() +
          864e5 * a.j
      )),
      this.j.setDate(1),
      this.j.setFullYear(a.getFullYear()),
      this.j.setMonth(a.getMonth()),
      this.j.setDate(a.getDate()),
      yd(this, a.getDate()));
  };
  _.n.eb = function (a) {
    return [
      this.getFullYear(),
      nc(this.getMonth() + 1),
      nc(this.getDate()),
    ].join(a ? "-" : "");
  };
  _.n.toString = function () {
    return this.eb();
  };
  var yd = function (a, b) {
    a.getDate() != b &&
      a.j.setUTCHours(a.j.getUTCHours() + (a.getDate() < b ? 1 : -1));
  };
  zd.prototype.valueOf = function () {
    return this.j.valueOf();
  };
  var Ad = function (a, b, c, d, e, f, g) {
    this.j = _.r(a)
      ? new Date(a, b || 0, c || 1, d || 0, e || 0, f || 0, g || 0)
      : new Date(a && a.getTime ? a.getTime() : _.Oa());
  };
  _.Qa(Ad, zd);
  Ad.prototype.add = function (a) {
    zd.prototype.add.call(this, a);
    a.l && this.j.setUTCHours(this.j.getUTCHours() + a.l);
    a.m && this.j.setUTCMinutes(this.j.getUTCMinutes() + a.m);
    a.v && this.j.setUTCSeconds(this.j.getUTCSeconds() + a.v);
  };
  Ad.prototype.eb = function (a) {
    var b = zd.prototype.eb.call(this, a);
    return a
      ? b +
          " " +
          nc(this.j.getHours()) +
          ":" +
          nc(this.j.getMinutes()) +
          ":" +
          nc(this.j.getSeconds())
      : b +
          "T" +
          nc(this.j.getHours()) +
          nc(this.j.getMinutes()) +
          nc(this.j.getSeconds());
  };
  Ad.prototype.toString = function () {
    return this.eb();
  };
  var Cd;
  _.Bd = !_.wc || 9 <= Number(_.Oc);
  Cd = _.wc || _.vc || _.Ac;
  _.Dd = function (a, b) {
    this.x = _.w(a) ? a : 0;
    this.y = _.w(b) ? b : 0;
  };
  _.Dd.prototype.ceil = function () {
    this.x = Math.ceil(this.x);
    this.y = Math.ceil(this.y);
    return this;
  };
  _.Dd.prototype.floor = function () {
    this.x = Math.floor(this.x);
    this.y = Math.floor(this.y);
    return this;
  };
  _.Dd.prototype.round = function () {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    return this;
  };
  _.Ed = function (a, b) {
    this.width = a;
    this.height = b;
  };
  _.Ed.prototype.aspectRatio = function () {
    return this.width / this.height;
  };
  _.Ed.prototype.ceil = function () {
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this;
  };
  _.Ed.prototype.floor = function () {
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this;
  };
  _.Ed.prototype.round = function () {
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this;
  };
  _.Hd = function (a) {
    return a ? new _.Fd(_.Gd(a)) : Va || (Va = new _.Fd());
  };
  _.Jd = function (a) {
    a = a.document;
    a = _.Id(a) ? a.documentElement : a.body;
    return new _.Ed(a.clientWidth, a.clientHeight);
  };
  _.Kd = function (a) {
    return a.scrollingElement
      ? a.scrollingElement
      : !_.Ac && _.Id(a)
      ? a.documentElement
      : a.body || a.documentElement;
  };
  _.Id = function (a) {
    return "CSS1Compat" == a.compatMode;
  };
  _.Ld = function (a) {
    a && a.parentNode && a.parentNode.removeChild(a);
  };
  _.Md = function (a) {
    var b;
    if (
      Cd &&
      !(
        _.wc &&
        _.Nc("9") &&
        !_.Nc("10") &&
        _.p.SVGElement &&
        a instanceof _.p.SVGElement
      ) &&
      (b = a.parentElement)
    )
      return b;
    b = a.parentNode;
    return _.B(b) && 1 == b.nodeType ? b : null;
  };
  _.Gd = function (a) {
    return 9 == a.nodeType ? a : a.ownerDocument || a.document;
  };
  _.Fd = function (a) {
    this.j = a || _.p.document || document;
  };
  _.Fd.prototype.getElementsByTagName = function (a, b) {
    return (b || this.j).getElementsByTagName(String(a));
  };
  _.Fd.prototype.l = _.ba(22);
  _.Nd = function (a, b) {
    return a.j.createElement(String(b));
  };
  var Pd = function (a) {
      Od();
      var b = new Eb();
      b.j = a;
      return b;
    },
    Od = _.Ba;
  var Qd = function () {
    return E("iPad") || (E("Android") && !E("Mobile")) || E("Silk");
  };
  var Rd,
    Td,
    ha,
    Sd,
    Ud,
    Zd,
    Yd,
    rb,
    be,
    Xd,
    ee,
    ge,
    he,
    ae,
    je,
    ke,
    le,
    me,
    fa,
    ne,
    pe,
    xe,
    ye,
    ze,
    Ae;
  Rd = function (a) {
    try {
      return !!a && null != a.location.href && sc(a, "foo");
    } catch (b) {
      return !1;
    }
  };
  Td = function (a) {
    for (var b = _.p, c = 0; b && 40 > c++ && (!Rd(b) || !a(b)); ) b = Sd(b);
  };
  ha = function () {
    var a = _.p;
    Td(function (b) {
      a = b;
      return !1;
    });
    return a;
  };
  Sd = function (a) {
    try {
      var b = a.parent;
      if (b && b != a) return b;
    } catch (c) {}
    return null;
  };
  Ud = function (a) {
    return Rd(a.top) ? a.top : null;
  };
  _.Vd = function (a, b) {
    var c = a.createElement("script");
    kc(c, Pd(b));
    return (a = a.getElementsByTagName("script")[0]) && a.parentNode
      ? (a.parentNode.insertBefore(c, a), c)
      : null;
  };
  _.Wd = function (a, b) {
    return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle;
  };
  Zd = function (a, b) {
    if (!Xd()) {
      var c = Math.random();
      if (c < b) return (c = Yd()), a[Math.floor(c * a.length)];
    }
    return null;
  };
  Yd = function () {
    if (!_.p.crypto) return Math.random();
    try {
      var a = new Uint32Array(1);
      _.p.crypto.getRandomValues(a);
      return a[0] / 65536 / 65536;
    } catch (b) {
      return Math.random();
    }
  };
  _.I = function (a, b, c) {
    if (a)
      for (var d in a)
        Object.prototype.hasOwnProperty.call(a, d) && b.call(c, a[d], d, a);
  };
  _.$d = function (a) {
    for (var b in a) if (Object.prototype.hasOwnProperty.call(a, b)) return !1;
    return !0;
  };
  rb = function (a) {
    var b = [];
    _.I(a, function (c, d) {
      b.push(d);
    });
    return b;
  };
  be = function () {
    var a = [];
    _.I(ae, function (b) {
      a.push(b);
    });
    return a;
  };
  _.ce = function (a, b) {
    return Bb(a, function (c, d) {
      return Object.prototype.hasOwnProperty.call(a, d) && b(c, d);
    });
  };
  _.de = function (a) {
    var b = a.length;
    if (0 == b) return 0;
    for (var c = 305419896, d = 0; d < b; d++)
      c ^= ((c << 5) + (c >> 2) + a.charCodeAt(d)) & 4294967295;
    return 0 < c ? c : 4294967296 + c;
  };
  Xd = ub(function () {
    return -1 != _.ac.indexOf("Google Web Preview") || 1e-4 > Math.random();
  });
  ee = /^(-?[0-9.]{1,30})$/;
  _.fe = function (a, b) {
    return ee.test(a) && ((a = Number(a)), !isNaN(a))
      ? a
      : void 0 == b
      ? null
      : b;
  };
  ge = function () {
    return /^true$/.test("false");
  };
  he = function (a, b) {
    b = void 0 === b ? !0 : b;
    try {
      for (var c = null; c != a; c = a, a = a.parent)
        switch (a.location.protocol) {
          case "https:":
            return !0;
          case "file:":
            return b;
          case "http:":
            return !1;
        }
    } catch (d) {}
    return !0;
  };
  _.ie = function (a) {
    if (!a) return "";
    var b = /.*[&#?]google_debug(=[^&]*)?(&.*)?$/;
    try {
      var c = b.exec(decodeURIComponent(a));
      if (c) return c[1] && 1 < c[1].length ? c[1].substring(1) : "true";
    } catch (d) {}
    return "";
  };
  ae = {
    Qc: "allow-forms",
    Rc: "allow-modals",
    Sc: "allow-orientation-lock",
    Tc: "allow-pointer-lock",
    Uc: "allow-popups",
    Vc: "allow-popups-to-escape-sandbox",
    Wc: "allow-presentation",
    Xc: "allow-same-origin",
    Yc: "allow-scripts",
    Zc: "allow-top-navigation",
    $c: "allow-top-navigation-by-user-activation",
  };
  je = ub(function () {
    return be();
  });
  ke = function (a) {
    var b = je();
    return a.length
      ? _.u(b, function (c) {
          return !_.db(a, c);
        })
      : b;
  };
  le = function () {
    var a = document.createElement("IFRAME").sandbox,
      b = a && a.supports;
    if (!b) return {};
    var c = {};
    _.D(je(), function (d) {
      b.call(a, d) && (c[d] = !0);
    });
    return c;
  };
  me = function (a) {
    a = a && a.toString && a.toString();
    return _.x(a) && -1 != a.indexOf("[native code]");
  };
  fa = function (a, b) {
    try {
      return !(!a.frames || !a.frames[b]);
    } catch (c) {
      return !1;
    }
  };
  ne = function () {
    for (var a = _.p, b = 0; 40 > b; ++b) {
      if (fa(a, "__cmpLocator")) return a;
      if (!(a = Sd(a))) break;
    }
    return null;
  };
  _.oe = ub(function () {
    return !Qd() && (E("iPod") || E("iPhone") || E("Android") || E("IEMobile"))
      ? 2
      : Qd()
      ? 1
      : 0;
  });
  pe = function (a) {
    return (/^(?:https?:\/\/)?([^\/\?:#]+)/i.exec(a) || [])[1];
  };
  _.ue =
    Object.assign ||
    function (a, b) {
      for (var c = 1; c < arguments.length; c++) {
        var d = arguments[c];
        if (d)
          for (var e in d)
            Object.prototype.hasOwnProperty.call(d, e) && (a[e] = d[e]);
      }
      return a;
    };
  _.ve = function (a) {
    if (!a) return null;
    a = a.transform;
    if (!a) return null;
    a = a.replace(/^.*\(([0-9., -]+)\)$/, "$1").split(/, /);
    return 6 != a.length ? null : _.q(a, parseFloat);
  };
  _.we = function (a) {
    a && a.setAttribute("data-load-complete", !0);
  };
  xe = function (a) {
    _.p.console && _.p.console.warn && _.p.console.warn(a);
  };
  ye = [];
  ze = function () {
    var a = ye;
    ye = [];
    a = _.pa(a);
    for (var b = a.next(); !b.done; b = a.next()) (b = b.value), b();
  };
  Ae = function (a) {
    ye.push(a);
    1 == ye.length &&
      (window.Promise
        ? Promise.resolve().then(ze)
        : window.setImmediate
        ? setImmediate(ze)
        : setTimeout(ze, 0));
  };
  var sb = { gd: 0, cd: 1, bd: 2, ad: 3, hd: 4, jd: 5, ed: 6, dd: 7 };
  var ca;
  ca = ub(function () {
    var a = !1;
    try {
      var b = Object.defineProperty({}, "passive", {
        get: function () {
          a = !0;
        },
      });
      _.p.addEventListener("test", null, b);
    } catch (c) {}
    return a;
  });
  _.J = function (a, b, c, d) {
    return a.addEventListener ? (a.addEventListener(b, c, da(d)), !0) : !1;
  };
  _.Be = function (a, b, c, d) {
    return a.removeEventListener
      ? (a.removeEventListener(b, c, da(d)), !0)
      : !1;
  };
  _.Ce = function (a, b) {
    a.google_image_requests || (a.google_image_requests = []);
    var c = a.document.createElement("img");
    c.src = b;
    a.google_image_requests.push(c);
  };
  var De = !1,
    Ee = function (a) {
      var b = wd();
      if (!b) return 0;
      if (_.G(b, 7)) return 4;
      if (6048e5 < _.Oa() - (_.F(b, 5) || 0)) return 0;
      if (a) {
        if (_.db(_.F(b, 3), a)) return 2;
        if (_.db(_.F(b, 4), a)) return 3;
      }
      return 1;
    },
    Fe = ub(function () {
      var a = /[?&]fc(consent)?=alwaysshow([&#]|$)/;
      try {
        return a.test(_.p.top.location.href);
      } catch (b) {
        return a.test(_.p.location.href);
      }
    }),
    Ge = {},
    He = null,
    Ie = null,
    Ke = function () {
      var a = Je();
      a &&
        _.p.setTimeout &&
        0.01 > Math.random() &&
        _.p.setTimeout(function () {
          _.p.__cmp &&
            _.p.__cmp("getConsentData", null, function (b) {
              b =
                "https://pagead2.googlesyndication.com/pagead/gen_204?id=iabcmp&vcd=" +
                JSON.stringify(b);
              _.Ce(_.p, b);
            });
        }, 1e4);
      return a;
    },
    Je = function () {
      if (_.p.__cmp) {
        var a = !1;
        try {
          _.p.__cmp("ping", null, function () {
            a = !0;
          });
        } catch (b) {}
        if (a) return !0;
      }
      Ie = ne();
      return !!Ie;
    },
    Le = 1,
    Me = function () {
      if (!_.p.__cmp && Ie) {
        try {
          if (Ie.__cmp) {
            _.p.__cmp = Ie.__cmp;
            return;
          }
        } catch (a) {}
        _.p.__cmp = function (a, b, c) {
          var d = "google_cmp_callback_" + Le;
          Le++;
          a = { __cmpCall: { command: a, parameter: b, callId: d } };
          Ge[d] = c;
          Ie.postMessage(a, "*");
        };
        _.J(_.p, "message", function (a) {
          a = a.data;
          if ("string" == typeof a)
            try {
              a = JSON.parse(a);
            } catch (b) {}
          (a = a.__cmpReturn) &&
            "function" == typeof Ge[a.callId] &&
            (Ge[a.callId](a.returnValue, a.success), delete Ge[a.callId]);
        });
      }
    },
    Ne = function (a, b) {
      var c = void 0 === b ? function () {} : b,
        d = ia(),
        e = tb();
      e[0] = a ? 1 : 2;
      e[6] = 1;
      e[5] = d ? 1 : 2;
      var f = !1;
      b = function (k, l) {
        l && k && (f = !!k.gdprAppliesGlobally);
      };
      _.p.__cmp && _.p.__cmp("ping", null, b);
      if (f || a) {
        var g = function (k) {
          k &&
            (k.gdprApplies
              ? ((e[6] = 8),
                (He = {
                  fb: 5,
                  Ua: d,
                  Va: !1,
                  Ra: e.join("."),
                  zb: k.consentData,
                  Nb: k.googleVendorIds,
                }),
                c(He))
              : ((He = { fb: 5, Ua: d, Va: !1, Ra: e.join(".") }), c(He)));
        };
        a = ha().GoogleMostRecentCmpConsentData;
        var h = !!a;
        a && g(a);
        _.p.__cmp &&
          _.p.__cmp("getConsentData", null, function (k, l) {
            l && ((ha().GoogleMostRecentCmpConsentData = k), h || g(k));
          });
      } else (He = { fb: 5, Ua: d, Va: !1, Ra: e.join(".") }), c(He);
    },
    Oe = function (a, b) {
      var c = tb();
      Fe() && (a = !0);
      c[0] = a ? 1 : 2;
      var d = ia();
      c[5] = d ? 1 : 2;
      if (De && Ke())
        return (
          Me(),
          Ne(a),
          He ||
            ((c[6] = 7),
            (He = { fb: 5, Ua: d, Va: !0, Ra: c.join("."), zb: "NCS" })),
          He
        );
      c[4] = 2;
      var e = !!_.p.googlefc || fa(_.p.top, "googlefcPresent");
      c[1] = e ? 1 : 2;
      var f = Ee(b);
      0 != f
        ? (b = { Mb: f, Ob: 3 })
        : ((f = _.p.top),
          (b = {
            Mb: fa(f, "googlefcInactive")
              ? 4
              : b && fa(f, "googlefcPA-" + b)
              ? 2
              : fa(f, "googlefcNPA")
              ? 3
              : 0,
            Ob: 2,
          }));
      f = b;
      b = f.Mb;
      c[f.Ob] = b;
      if (!d)
        a: switch (b) {
          case 2:
          case 4:
            d = !1;
            break a;
          case 3:
            d = !0;
            break a;
          case 1:
            d = a;
            break a;
          default:
            d = (void 0 === e ? !1 : e) && a;
        }
      return { fb: b, Ua: d, Va: 0 == b && a && e, Ra: c.join(".") };
    },
    Pe = function (a, b, c) {
      if (De && Ke()) Me(), Ne(a, c);
      else {
        var d = Oe(a, b);
        d.Va
          ? _.p.setTimeout(function () {
              Pe(a, b, c);
            }, 1e3)
          : c(d);
      }
    };
  _.Qe = function (a, b, c, d) {
    this.left = a;
    this.top = b;
    this.width = c;
    this.height = d;
  };
  _.Qe.prototype.ceil = function () {
    this.left = Math.ceil(this.left);
    this.top = Math.ceil(this.top);
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this;
  };
  _.Qe.prototype.floor = function () {
    this.left = Math.floor(this.left);
    this.top = Math.floor(this.top);
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this;
  };
  _.Qe.prototype.round = function () {
    this.left = Math.round(this.left);
    this.top = Math.round(this.top);
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this;
  };
  _.Re = function (a, b) {
    var c = _.Gd(a);
    return c.defaultView &&
      c.defaultView.getComputedStyle &&
      (a = c.defaultView.getComputedStyle(a, null))
      ? a[b] || a.getPropertyValue(b) || ""
      : "";
  };
  _.Se = function (a, b) {
    return (
      _.Re(a, b) ||
      (a.currentStyle ? a.currentStyle[b] : null) ||
      (a.style && a.style[b])
    );
  };
  _.Te = function (a) {
    try {
      var b = a.getBoundingClientRect();
    } catch (c) {
      return { left: 0, top: 0, right: 0, bottom: 0 };
    }
    _.wc &&
      a.ownerDocument.body &&
      ((a = a.ownerDocument),
      (b.left -= a.documentElement.clientLeft + a.body.clientLeft),
      (b.top -= a.documentElement.clientTop + a.body.clientTop));
    return b;
  };
  _.Ue = function (a) {
    var b = _.Gd(a),
      c = new _.Dd(0, 0);
    var d = b ? _.Gd(b) : document;
    d =
      !_.wc || 9 <= Number(_.Oc) || _.Id(_.Hd(d).j)
        ? d.documentElement
        : d.body;
    if (a == d) return c;
    a = _.Te(a);
    d = _.Hd(b).j;
    b = _.Kd(d);
    d = d.parentWindow || d.defaultView;
    b =
      _.wc && _.Nc("10") && d.pageYOffset != b.scrollTop
        ? new _.Dd(b.scrollLeft, b.scrollTop)
        : new _.Dd(d.pageXOffset || b.scrollLeft, d.pageYOffset || b.scrollTop);
    c.x = a.left + b.x;
    c.y = a.top + b.y;
    return c;
  };
  _.Ve = function (a) {
    a = _.Te(a);
    return new _.Dd(a.left, a.top);
  };
  _.We = function (a, b) {
    if ("none" != _.Se(b, "display")) return a(b);
    var c = b.style,
      d = c.display,
      e = c.visibility,
      f = c.position;
    c.visibility = "hidden";
    c.position = "absolute";
    c.display = "inline";
    a = a(b);
    c.display = d;
    c.position = f;
    c.visibility = e;
    return a;
  };
  _.Xe = function (a) {
    if (!a.getBoundingClientRect) return null;
    a = _.We(_.Te, a);
    return new _.Ed(a.right - a.left, a.bottom - a.top);
  };
  _.Ye = function (a, b) {
    a.style.display = b ? "" : "none";
  };
  var Ze = {
      "AMP-CAROUSEL": "ac",
      "AMP-FX-FLYING-CARPET": "fc",
      "AMP-LIGHTBOX": "lb",
      "AMP-STICKY-AD": "sa",
    },
    $e = function (a) {
      a = void 0 === a ? _.p : a;
      var b = a.context || a.AMP_CONTEXT_DATA;
      if (!b)
        try {
          b = a.parent.context || a.parent.AMP_CONTEXT_DATA;
        } catch (c) {}
      try {
        if (b && b.pageViewId && b.canonicalUrl) return b;
      } catch (c) {}
      return null;
    },
    af = function () {
      var a = $e();
      return a && a.mode ? +a.mode.version || null : null;
    },
    bf = function () {
      var a = $e();
      if (a && a.container) {
        a = a.container.split(",");
        for (var b = [], c = 0; c < a.length; c++) b.push(Ze[a[c]] || "x");
        return b.join();
      }
      return null;
    },
    cf = function () {
      var a = $e();
      return a && a.initialIntersection;
    },
    df = function (a) {
      return (a = a || $e()) ? (Rd(a.master) ? a.master : null) : null;
    },
    ef = !!$e() && _.p != _.p.top,
    ff = function (a) {
      a = $e(a);
      if (!a || !_.B(a.data) || !_.x(a.data.type)) return null;
      a = a.data.type.toLowerCase();
      return "doubleclick" == a || "adsense" == a ? null : a;
    };
  var gf, hf, jf, kf, mf;
  gf = function () {
    var a = void 0 === a ? rd : a;
    try {
      return a.history.length;
    } catch (b) {
      return 0;
    }
  };
  hf = function (a) {
    a = df($e(a)) || a;
    a.google_unique_id ? ++a.google_unique_id : (a.google_unique_id = 1);
    return a.google_unique_id;
  };
  jf = !!window.google_async_iframe_id;
  kf = (jf && window.parent) || window;
  _.lf = function () {
    if (jf && !Rd(kf)) {
      var a = "." + qd.domain;
      try {
        for (; 2 < a.split(".").length && !Rd(kf); )
          (qd.domain = a = a.substr(a.indexOf(".") + 1)), (kf = window.parent);
      } catch (b) {}
      Rd(kf) || (kf = window);
    }
    return kf;
  };
  mf = function () {
    var a,
      b = window.ActiveXObject;
    if (navigator.plugins && navigator.mimeTypes.length) {
      if ((a = navigator.plugins["Shockwave Flash"]) && a.description)
        return a.description
          .replace(/([a-zA-Z]|\s)+/, "")
          .replace(/(\s)+r/, ".");
    } else {
      if (
        navigator.userAgent &&
        0 <= navigator.userAgent.indexOf("Windows CE")
      ) {
        var c = 3;
        for (a = 1; a; )
          try {
            (a = new b("ShockwaveFlash.ShockwaveFlash." + (c + 1))), c++;
          } catch (d) {
            a = null;
          }
        return c.toString();
      }
      if (_.ec()) {
        a = null;
        try {
          a = new b("ShockwaveFlash.ShockwaveFlash.7");
        } catch (d) {
          c = 0;
          try {
            (a = new b("ShockwaveFlash.ShockwaveFlash.6")),
              (c = 6),
              (a.AllowScriptAccess = "always");
          } catch (e) {
            if (6 === c) return c.toString();
          }
          try {
            a = new b("ShockwaveFlash.ShockwaveFlash");
          } catch (e) {}
        }
        if (a)
          return (
            (c = a.GetVariable("$version").split(" ")[1]), c.replace(/,/g, ".")
          );
      }
    }
    return "0";
  };
  var nf = function (a) {
      return !!a && a.top == a;
    },
    of = function (a, b, c, d) {
      c = c || a.google_ad_width;
      d = d || a.google_ad_height;
      if (nf(a)) return !1;
      var e = b.documentElement;
      if (c && d) {
        var f = 1,
          g = 1;
        a.innerHeight
          ? ((f = a.innerWidth), (g = a.innerHeight))
          : e && e.clientHeight
          ? ((f = e.clientWidth), (g = e.clientHeight))
          : b.body && ((f = b.body.clientWidth), (g = b.body.clientHeight));
        if (g > 2 * d || f > 2 * c) return !1;
      }
      return !0;
    },
    pf = function () {
      var a = _.lf();
      if (a != a.top)
        for (
          ;
          a &&
          a != a.top &&
          Rd(a) &&
          !a.sf_ &&
          !a.$sf &&
          !a.inGptIF &&
          !a.inDapIF;
          a = a.parent
        );
    };
  var rf = function (a, b) {
      var c = b || qf;
      return function () {
        var d = this || _.p;
        d = d.closure_memoize_cache_ || (d.closure_memoize_cache_ = {});
        var e = c(Ja(a), arguments);
        return d.hasOwnProperty(e) ? d[e] : (d[e] = a.apply(this, arguments));
      };
    },
    qf = function (a, b) {
      a = [a];
      for (var c = b.length - 1; 0 <= c; --c) a.push(typeof b[c], b[c]);
      return a.join("\x0B");
    };
  var tf, uf, vf, wf;
  _.sf =
    /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
  tf = function (a) {
    return a ? decodeURI(a) : a;
  };
  uf = function (a, b, c) {
    if (_.z(b)) for (var d = 0; d < b.length; d++) uf(a, String(b[d]), c);
    else
      null != b &&
        c.push(a + ("" === b ? "" : "=" + encodeURIComponent(String(b))));
  };
  vf = /#|$/;
  wf = function (a, b) {
    var c = a.search(vf);
    a: {
      var d = 0;
      for (var e = b.length; 0 <= (d = a.indexOf(b, d)) && d < c; ) {
        var f = a.charCodeAt(d - 1);
        if (38 == f || 63 == f)
          if (((f = a.charCodeAt(d + e)), !f || 61 == f || 38 == f || 35 == f))
            break a;
        d += e + 1;
      }
      d = -1;
    }
    if (0 > d) return null;
    e = a.indexOf("&", d);
    if (0 > e || e > c) e = c;
    d += b.length + 1;
    return decodeURIComponent(a.substr(d, e - d).replace(/\+/g, " "));
  };
  var xf = [
      /^https?:\/\/(secure)?pubads\.g\.doubleclick\.net(:\d+)?($|\/)/i,
      /^https?:\/\/(googleads|adx)\.g\.doubleclick\.net(:\d+)?($|\/)/i,
      /^https?:\/\/(?!adx)ad.*\.doubleclick\.net(:\d+)?($|\/)/i,
      /^https?:\/\/(tpc|pagead2)\.googlesyndication\.com(:\d+)?($|\/)/i,
      /^https?:\/\/www\.googletagservices\.com(:\d+)?($|\/)/i,
      /^https?:\/\/adservice\.google\.(com?\.)?[a-z]{2,3}(:\d+)?($|\/)/i,
    ],
    yf = function (a) {
      return Ya(xf, function (b) {
        return b.test(a);
      });
    },
    zf = function (a) {
      if ((a = /[-\w]+\.[-\w]+$/.exec(a))) {
        a = a[0].toLowerCase();
        for (var b = 0, c = 0; c < a.length; ++c)
          b = (31 * b + a.charCodeAt(c)) >>> 0;
        switch (b) {
          case 1967261364:
            return 0;
          case 3147493546:
            return 1;
          case 1567346461:
            return 2;
          case 2183041838:
            return 3;
          case 763236279:
            return 4;
          case 1342279801:
            return 5;
          case 526831769:
            return 6;
          case 352806002:
            return 7;
          case 2755048925:
            return 8;
          case 3306848407:
            return 9;
          case 2207000920:
            return 10;
          case 484037040:
            return 11;
          case 3506871055:
            return 12;
          case 672143848:
            return 13;
          case 2528751226:
            return 14;
          case 2744854768:
            return 15;
          case 3703278665:
            return 16;
          case 2014749173:
            return 17;
          case 133063824:
            return 18;
          case 2749334602:
            return 19;
          case 3131239845:
            return 20;
          case 2074086763:
            return 21;
          case 795772493:
            return 22;
          case 290857819:
            return 23;
          case 3035947606:
            return 24;
          case 2983138003:
            return 25;
          case 2197138676:
            return 26;
          case 4216016165:
            return 27;
          case 239803524:
            return 28;
          case 975993579:
            return 29;
          case 1794940339:
            return 30;
          case 1314429186:
            return 31;
          case 1643618937:
            return 32;
          case 497159982:
            return 33;
        }
      }
      return -1;
    },
    Af = function (a) {
      if (!a.length) return 0;
      for (var b = [], c = 0; 33 >= c; c++) b[c] = 0;
      for (c = a.length - 1; 0 <= c; c--) {
        var d = zf(a[c]);
        0 <= d && (b[33 - d] = 1);
      }
      return parseInt(b.join(""), 2);
    };
  var Cf = function (a) {
      a = (this.l = a || _.p) || _.p;
      this.m = a.top == a ? 1 : Rd(a.top) ? 2 : 3;
      3 != this.m && Date.parse(_.p.top.document.lastModified);
      var b = this.l,
        c = b || _.p;
      a = [];
      var d = null;
      do {
        var e = c;
        if (Rd(e)) {
          var f = e.location.href;
          d = (e.document && e.document.referrer) || null;
        } else (f = d), (d = null);
        a.push(new Bf(f || "", e));
        try {
          c = e.parent;
        } catch (g) {
          c = null;
        }
      } while (c && e != c);
      e = 0;
      for (c = a.length - 1; e <= c; ++e) a[e].depth = c - e;
      e = b || _.p;
      if (
        e.location &&
        e.location.ancestorOrigins &&
        e.location.ancestorOrigins.length == a.length - 1
      )
        for (b = 1; b < a.length; ++b)
          (c = a[b]),
            c.url ||
              ((c.url = e.location.ancestorOrigins[b - 1] || ""), (c.pc = !0));
      this.j = a;
    },
    Df = function (a, b) {
      for (
        var c = 0,
          d =
            (a = a.j[Math.max(a.j.length - 1, 0)].url || null) &&
            tf(a.match(_.sf)[3] || null),
          e = Math.min(b.length, 26),
          f = 0;
        f < e;
        f++
      )
        (a = (null != b[f] && tf(b[f].match(_.sf)[3] || null)) || ""),
          (c *= 4),
          a &&
            (d && a == d
              ? (c += 3)
              : yf(b[f])
              ? (c += 2)
              : a && 0 <= zf(a) && (c += 1));
      return c;
    },
    Bf = function (a, b) {
      this.url = a;
      this.gb = b;
      this.pc = !1;
      this.depth = _.r(void 0) ? void 0 : null;
    };
  var Ef = null,
    Ff = function () {
      if (null === Ef) {
        Ef = "";
        try {
          var a = "";
          try {
            a = _.p.top.location.hash;
          } catch (c) {
            a = _.p.location.hash;
          }
          if (a) {
            var b = a.match(/\bdeid=([\d,]+)/);
            Ef = b ? b[1] : "";
          }
        } catch (c) {}
      }
      return Ef;
    };
  var If;
  _.Gf = function () {
    var a = _.p.performance;
    return a && a.now && a.timing
      ? Math.floor(a.now() + a.timing.navigationStart)
      : _.Oa();
  };
  _.Hf = function (a) {
    a = void 0 === a ? _.p : a;
    return (a = a.performance) && a.now ? a.now() : null;
  };
  If = function (a) {
    var b = _.p.performance;
    return (b && b.timing && b.timing[a]) || 0;
  };
  var Jf = function (a, b, c, d, e) {
    this.label = a;
    this.type = b;
    this.value = c;
    this.duration = void 0 === d ? 0 : d;
    this.uniqueId = Math.random();
    this.slotId = e;
  };
  var Kf = _.p.performance,
    Lf = !!(Kf && Kf.mark && Kf.measure && Kf.clearMarks),
    Mf = ub(function () {
      var a;
      if ((a = Lf)) (a = Ff()), (a = !!a.indexOf && 0 <= a.indexOf("1337"));
      return a;
    }),
    Nf = function (a, b) {
      this.events = [];
      this.l = b || _.p;
      var c = null;
      b &&
        ((b.google_js_reporting_queue = b.google_js_reporting_queue || []),
        (this.events = b.google_js_reporting_queue),
        (c = b.google_measure_js_timing));
      this.j = Mf() || (null != c ? c : Math.random() < a);
    },
    Of = function (a) {
      a &&
        Kf &&
        Mf() &&
        (Kf.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_start"),
        Kf.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_end"));
    },
    Pf = function (a, b, c, d, e, f) {
      a.j &&
        ((b = new Jf(b, c, d, void 0 === e ? 0 : e, f)),
        !a.j || 2048 < a.events.length || a.events.push(b));
    },
    Qf;
  Nf.prototype.start = function (a, b) {
    if (!this.j) return null;
    var c = _.Hf() || _.Gf();
    a = new Jf(a, b, c);
    b = "goog_" + a.label + "_" + a.uniqueId + "_start";
    Kf && Mf() && Kf.mark(b);
    return a;
  };
  Qf = function (a, b) {
    if (a.j && _.r(b.value)) {
      var c = _.Hf() || _.Gf();
      b.duration = c - b.value;
      c = "goog_" + b.label + "_" + b.uniqueId + "_end";
      Kf && Mf() && Kf.mark(c);
      !a.j || 2048 < a.events.length || a.events.push(b);
    }
  };
  _.Rf = function (a, b, c) {
    var d = _.Hf();
    d && Pf(a, b, 9, d, 0, c);
  };
  var Sf = function (a, b) {
    try {
      -1 == a.indexOf(b) && (a = b + "\n" + a);
      for (var c; a != c; )
        (c = a),
          (a = a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, "$1"));
      return a.replace(/\n */g, "\n");
    } catch (d) {
      return b;
    }
  };
  var Tf = function () {};
  Ca(Tf);
  var Uf = function () {
    var a = {};
    this.j = ((a[1] = {}), (a[2] = {}), (a[3] = {}), (a[6] = {}), a);
  };
  Ca(Uf);
  var Vf = function (a) {
      this.j = a;
    },
    Wf = new Vf(1),
    Xf = new Vf(2),
    Yf = new Vf(3),
    Zf = new Vf(4),
    $f = new Vf(5),
    ag = new Vf(6),
    cg = new Vf(7),
    gg = new Vf(8),
    hg = function (a, b) {
      return b[a.j] || function () {};
    };
  var ig = function () {
      this.j = function () {
        return !1;
      };
      this.l = function () {
        return 0;
      };
      this.m = function () {
        return "";
      };
      this.o = function () {
        return [];
      };
    },
    jg = function (a) {
      var b = ig.B();
      b.j = hg($f, a);
      b.l = hg(ag, a);
      b.m = hg(cg, a);
      b.o = hg(gg, a);
    },
    ng;
  Ca(ig);
  _.K = function (a) {
    var b = void 0 === b ? !1 : b;
    return ig.B().j(a, b);
  };
  _.kg = function (a, b) {
    b = void 0 === b ? 0 : b;
    return ig.B().l(a, b);
  };
  _.lg = function (a) {
    var b = void 0 === b ? "" : b;
    return ig.B().m(a, b);
  };
  _.mg = function (a) {
    var b = void 0 === b ? [] : b;
    return ig.B().o(a, b);
  };
  ng = function () {
    var a = _.L(230);
    Na(Uf.B().j, a);
  };
  var og, qg;
  og = function (a) {
    return "CSS1Compat" == a.compatMode ? a.documentElement : a.body;
  };
  _.pg = function (a) {
    try {
      var b = og(a.document);
      return new _.Ed(b.clientWidth, b.clientHeight);
    } catch (c) {
      return new _.Ed(-12245933, -12245933);
    }
  };
  qg = function (a, b) {
    b = void 0 === b ? _.p : b;
    a = a.scrollingElement || og(a);
    return new _.Dd(
      b.pageXOffset || a.scrollLeft,
      b.pageYOffset || a.scrollTop
    );
  };
  _.rg = function (a) {
    try {
      return !(
        !a || !(a.offsetWidth || a.offsetHeight || a.getClientRects().length)
      );
    } catch (b) {
      return !1;
    }
  };
  var sg = function (a, b, c) {
      var d = !1,
        e = function (f) {
          return function (g) {
            d || ((d = !0), f(g));
          };
        };
      b = e(b);
      c = e(c);
      try {
        a(b, c);
      } catch (f) {
        c(f);
      }
    },
    tg = function (a) {
      this.l = 0;
      this.j = [];
      sg(a, this.w.bind(this), this.o.bind(this));
    };
  tg.prototype.v = function (a) {
    Ae(a);
  };
  var ug = function (a, b) {
    0 === a.l
      ? a.j.push(b)
      : a.v(function () {
          var c = b.vc,
            d = b.wc;
          if ((c = 1 === a.l ? c : d)) {
            try {
              var e = c(a.m);
            } catch (f) {
              b.reject(f);
              return;
            }
            b.resolve(e);
          } else (e = b.resolve), (c = b.reject), 1 === a.l ? e(a.m) : c(a.m);
        });
  };
  tg.prototype.w = function (a) {
    try {
      if (a === this) throw new TypeError();
      if (a instanceof tg || (_.B(a) && _.Fa(a.then)))
        sg(a.then.bind(a), this.w.bind(this), this.o.bind(this));
      else
        for (this.l = 1, this.m = a; this.j.length; ) ug(this, this.j.shift());
    } catch (b) {
      this.o(b);
    }
  };
  tg.prototype.o = function (a) {
    this.l = 2;
    for (this.m = a; this.j.length; ) ug(this, this.j.shift());
  };
  tg.prototype.then = function (a, b) {
    var c = this;
    return new this.constructor(function (d, e) {
      ug(c, { vc: a, wc: b, resolve: d, reject: e });
    });
  };
  var vg = !1,
    wg = 0,
    xg = function (a, b, c) {
      if (!vg) {
        vg = !0;
        var d =
          a.requestAnimationFrame ||
          a.webkitRequestAnimationFrame ||
          a.msRequestAnimationFrame ||
          a.mozRequestAnimationFrame ||
          a.oRequestAnimationFrame;
        if (me(d)) {
          var e,
            f,
            g,
            h,
            k = a.requestIdleCallback;
          k &&
            (h = function (m) {
              f = m.timeRemaining();
              g = 0;
            });
          var l = function (m) {
            vg &&
              (b.push(m - e),
              (e = m),
              k && (c.push(f || 0), g || ((f = 0), (g = k(h)))),
              d(l));
          };
          d(function (m) {
            e = m;
            k && (g = k(h));
            d(l);
          });
        }
      }
    },
    yg = function () {
      vg = !1;
    },
    zg = function () {
      wg && _.p.clearTimeout(wg);
      wg = vg ? _.p.setTimeout(yg, 1e4) : 0;
    };
  var Ag = function (a) {
    return (a._google_rum_ns_ = a._google_rum_ns_ || {});
  };
  var Bg = null,
    Cg = function () {
      return Bg ? Bg : me(window.Map) ? (Bg = new Map()) : null;
    },
    Dg = {},
    Eg = function () {},
    Fg = function (a, b) {
      if (a instanceof b) return a;
      if (a instanceof Eg) {
        var c = Cg();
        a = c ? c.get(a) : Dg[Ja(a)];
        if (a instanceof b) return a;
      }
      return null;
    };
  var Hg, Ig;
  _.Gg = function () {
    return _.p.googletag || (_.p.googletag = {});
  };
  Hg = function (a, b) {
    var c = _.Gg();
    c.hasOwnProperty(a) || (c[a] = b);
  };
  Ig = function (a, b) {
    a.addEventListener
      ? a.addEventListener("load", b, !1)
      : a.attachEvent && a.attachEvent("onload", b);
  };
  var Jg = {
      173: "pubads.g.doubleclick.net",
      174: "securepubads.g.doubleclick.net",
      7: 0.02,
      13: 1500,
      23: 0.001,
      24: 200,
      37: 0.01,
      38: 0.001,
      58: 1,
      76: "",
      150: "",
      211: !1,
      152: [],
      172: null,
      191: "",
      192: "",
      190: "",
      245: {},
      180: null,
      219: [],
      230: {},
      210: {},
      227: {},
      226: [],
      241: {},
      220: !1,
      228: "//www.googletagservices.com/pubconsole/",
      242: !1,
      244: !1,
      243: -1,
    },
    Lg,
    Mg;
  Jg[6] = he(window);
  Jg[49] = new Date().getTime();
  Jg[36] = ge();
  Jg[46] = ge();
  Jg[148] = ge();
  Jg[221] = ge();
  Jg[204] = _.fe("-1", -1);
  var Kg = function () {
    Na(this, Jg);
  };
  Ca(Kg);
  _.L = function (a) {
    return Kg.B()[a];
  };
  Lg = _.Gg();
  Mg = Kg.B();
  Na(Mg, Lg._vars_);
  Lg._vars_ = Mg;
  _.Ng = function () {
    var a = _.K(85) || _.K(84);
    _.p.google_measure_js_timing = a || _.p.google_measure_js_timing;
    Nf.call(this, a ? 1 : 0, _.p);
    this.m = 0;
  };
  _.v(_.Ng, Nf);
  Ca(_.Ng);
  var Pg, Rg, Sg, Tg, Ug, Vg, Xg, Yg, Zg, $g, ah, ch, eh, hh, ih, jh;
  Pg = function (a, b) {
    var c = a.ia;
    if ("" != c) return c;
    a = b[_.N(a)];
    return null != a ? Og(a) : null;
  };
  Rg = function () {
    return Qg().replace(/[\W_]/g, function (a) {
      return "&#" + a.charCodeAt() + ";";
    });
  };
  Sg = function (a) {
    var b = a;
    "about:blank" != a &&
      ((b = b
        .replace(/</g, "%3C")
        .replace(/>/g, "%3E")
        .replace(/"/g, "%22")
        .replace(/'/g, "%27")),
      /^https?:\/\//.test(b) || (b = "unknown:" + b));
    return b;
  };
  Tg = /\+/g;
  Ug = function () {
    return "https://pagead2.googlesyndication.com";
  };
  Vg = function (a) {
    var b = a.document;
    return nf(a) ? b.URL : b.referrer;
  };
  Xg = function (a, b) {
    b = void 0 === b ? null : b;
    var c = 0,
      d = [];
    a && (d.push(a.getAdUnitPath()), d.push(_.Wg(a)), d.push(a.U.j));
    if (b) {
      a = [];
      for (var e = 0; b && 25 > e; b = b.parentNode, ++e)
        9 === b.nodeType ? a.push("") : a.push(b.id);
      (b = a.join()) && d.push(b);
    }
    0 < d.length && (c = _.de(d.join(":")));
    return c.toString();
  };
  Yg = function (a) {
    try {
      var b = window.top,
        c = new _.Dd(0, 0),
        d = _.Gd(a);
      var e = d ? d.parentWindow || d.defaultView : window;
      if (sc(e, "parent")) {
        do {
          var f = e == b ? _.Ue(a) : _.Ve(a);
          c.x += f.x;
          c.y += f.y;
        } while (
          e &&
          e != b &&
          e != e.parent &&
          (a = e.frameElement) &&
          (e = e.parent)
        );
      }
      var g = c;
    } catch (h) {
      g = new _.Dd(-12245933, -12245933);
    }
    return g;
  };
  Zg = function (a, b) {
    if (null == b) return a;
    b = a.indexOf("google_preview=", a.lastIndexOf("?"));
    var c = a.indexOf("&", b);
    -1 == c && ((c = a.length - 1), --b);
    return a.substring(0, b) + a.substring(c + 1, a.length);
  };
  $g = ub(function () {
    return (
      "XMLHttpRequest" in window && "withCredentials" in new XMLHttpRequest()
    );
  });
  ah = ub(function () {
    return (
      me(_.p.XMLHttpRequest) &&
      me(XMLHttpRequest.prototype.open) &&
      me(XMLHttpRequest.prototype.send)
    );
  });
  _.bh = function (a, b) {
    var c = !1;
    _.L(46) ? (c = !0) : null != b && (c = !b);
    return c && !he(a, void 0 === b ? !1 : b);
  };
  ch = ub(function () {
    return !!_.ie(_.p.location.href);
  });
  _.dh = Math.floor(Math.random() * Math.pow(2, 53));
  eh = function (a) {
    return 0 === a || (_.r(a) && isFinite(a) && 0 == a % 1 && 0 < a);
  };
  _.fh = function () {
    var a = _.L(46),
      b = _.L(6),
      c = _.K(152);
    return !a || b || c;
  };
  _.gh = function () {
    return _.K(151)
      ? _.fh()
        ? "https:"
        : "http:"
      : _.L(6)
      ? "https:"
      : "http:";
  };
  hh = function (a) {
    var b = a.split("/");
    return "/" == a.charAt(0) && 2 <= b.length
      ? b[1]
      : "/" != a.charAt(0) && 1 <= b.length
      ? b[0]
      : "";
  };
  ih = function (a) {
    var b = [];
    b = _.q(a, function (c) {
      return hh(c.getAdUnitPath());
    });
    _.ka(b);
    return b;
  };
  jh = function (a) {
    return a ? (a = _.Xe(a)) && a.floor() : null;
  };
  _.kh = function (a) {
    return !!a && !!_.hd(a, _.pd, 43) && !!_.F(_.hd(a, _.pd, 43), 1);
  };
  _.lh = function (a) {
    return a ? (_.K(54) ? 1 : _.K(71) && _.K(65) ? 2 : 0) : 0;
  };
  var mh = function () {
    return "2019052001";
  };
  Hg("getVersion", mh);
  var nh, rh;
  _.oh = function (a, b, c) {
    b = void 0 === b ? nh : b;
    c = void 0 === c ? -1 : c;
    if (0 > c || 1 < c) c = _.L(23);
    this.l = Math.random();
    this.o = this.l < c;
    this.m = a;
    this.j = b + "/pagead/gen_204?id=" + encodeURIComponent(a);
  };
  _.ph = [];
  nh = (_.L(6) ? "https" : "http") + "://pagead2.googlesyndication.com";
  _.O = function (a, b, c) {
    "string" != typeof c && (c = String(c));
    b &&
      b.match(/^\w+$/) &&
      c &&
      (a.j += "&" + b + "=" + encodeURIComponent(c));
  };
  _.qh = function (a, b, c) {
    b = void 0 === b ? null : b;
    c = void 0 === c ? !1 : c;
    b = void 0 === b ? null : b;
    var d = a.o;
    b && 0 <= b && (d = ((void 0 === c ? 0 : c) ? a.l : Math.random()) < b);
    (a = (d || ch()) && a.m && a.j ? a.j : null) && _.Ce(window, a);
  };
  rh = function (a, b) {
    0 < b.length &&
      (3 >= b.length
        ? _.O(a, "nw_id", b.join(","))
        : ((b = jb(b, 0, 3)),
          b.push("__extra__"),
          _.O(a, "nw_id", b.join(","))));
  };
  _.Q = function (a, b) {
    b = void 0 === b ? null : b;
    var c = void 0 === c ? document : c;
    _.O(a, "vrg", mh());
    b
      ? (rh(a, sh(b)), _.O(a, "nslots", th(b).toString()))
      : (rh(a, ih(_.ph)), _.O(a, "nslots", _.ph.length.toString()));
    b = ((b = (b = _.L(245)) && hg(Yf, b)) && b()) || [];
    0 < b.length && _.O(a, "eid", b.join());
    _.O(a, "pub_url", c.URL);
  };
  _.uh = function (a, b, c) {
    c = void 0 === c ? {} : c;
    var d = c.wd || nh;
    c = c.$a;
    if (!_.w(c) || 0 > c || 1 < c) c = _.L(23);
    Math.random() < c && ((a = new _.oh(a, d)), b(a), _.qh(a, 1, !0));
  };
  var vh, wh, S, Ah, zh;
  vh = _.L(38);
  wh = function (a, b) {
    a = { methodId: a };
    b.name && (a.name = b.name);
    b.message && (a.message = b.message.substring(0, 512));
    b.fileName && (a.fileName = b.fileName);
    b.lineNumber && (a.lineNumber = b.lineNumber);
    b.stack && (a.stack = Sf(b.stack, ""));
    return a;
  };
  _.yh = function (a, b, c) {
    c = void 0 === c ? !1 : c;
    _.xh(a, b);
    if (!c) throw b;
  };
  _.xh = function (a, b, c) {
    c = void 0 === c ? vh : c;
    if (!b.isReported)
      try {
        b.isReported = !0;
        var d = wh(a, b),
          e = new _.oh("gpt_exception");
        try {
          _.Q(e);
        } catch (f) {}
        _.I(d, function (f, g) {
          return _.O(e, g, f);
        });
        _.qh(e, c);
      } catch (f) {}
  };
  S = function (a, b, c) {
    return _.R(a, b, c, _.K(144));
  };
  _.R = function (a, b, c, d) {
    d = void 0 === d ? !1 : d;
    return function (e) {
      for (var f = [], g = 0; g < arguments.length; ++g) f[g] = arguments[g];
      g = !1;
      var h = null,
        k = c || _.yh,
        l = _.Ng.B();
      try {
        var m = l && _.K(85);
        m && (h = l.start(a.toString(), 3));
        var t = b.apply(this, f);
        g = !0;
        m && Qf(l, h);
      } catch (A) {
        g ? _.xh(110, A) : (t = k.call(this, a, A)), Of(h);
      }
      if (d)
        try {
          var y = Error();
          _.uh(
            "gpt_api_usage",
            function (A) {
              _.O(A, "methodId", a);
              _.O(A, "args", f.length);
              _.O(A, "stack", Sf(y.stack, y.message));
              _.Q(A);
            },
            { $a: 1 }
          );
        } catch (A) {}
      return t;
    };
  };
  Ah = function () {
    var a,
      b = window;
    if ((a = _.K(86)))
      b._google_rum_ns_ ? ((a = Ag(b)), (a = !(!a.raf || !a.ric))) : (a = !1),
        (a = !a);
    if (a) {
      var c = Ag(b);
      c.raf = c.raf || [];
      c.ric = c.ric || [];
      a = c.raf;
      c = c.ric;
      xg(b, a, c);
      Ig(b, zh);
      b.setTimeout(yg, 6e4);
    }
  };
  zh = function () {
    zg();
  };
  var Bh = function (a) {
    this.push = S(76, function (b) {
      return a.push.apply(a, arguments);
    });
  };
  _.v(Bh, Eg);
  var Ch = function (a, b) {
    b = void 0 === b ? [] : b;
    this.l = a;
    this.j = b;
  };
  Ch.prototype.getMessageId = function () {
    return this.l;
  };
  Ch.prototype.getMessageArgs = function () {
    return this.j;
  };
  var Dh = function (a, b, c, d, e) {
    this.l = new Date();
    this.w = d && d.l();
    this.v = c && c.l();
    this.m = a;
    this.o = b;
    this.j = e;
  };
  _.n = Dh.prototype;
  _.n.getSlot = function () {
    return this.w;
  };
  _.n.getService = function () {
    return this.v;
  };
  _.n.getLevel = function () {
    return this.m;
  };
  _.n.getTimestamp = function () {
    return this.l;
  };
  _.n.getMessage = function () {
    return this.o;
  };
  _.n.getReference = function () {
    return this.j;
  };
  _.n.toString = function () {
    var a = this.l.toTimeString() + ": " + Eh[this.m] + ": " + this.o;
    this.j &&
      (a +=
        " Duration: " +
        (this.l.getTime() - this.j.getTimestamp().getTime()) +
        "ms.");
    return a;
  };
  var Eh = ["Debug", "Info", "Warning", "Error", "Fatal"];
  var Fh = null,
    Gh = !1,
    Hh = !1,
    Ih = function () {
      var a = void 0 === a ? _.p : a;
      if (!Hh) {
        var b = _.gh() + _.L(228) + "loader.js";
        _.Vd(a.document, b);
        Hh = !0;
      }
    },
    Jh = function () {
      var a = void 0 === a ? _.p : a;
      if (_.Gg()._pubconsole_disable_) return !1;
      var b = a.document;
      b = void 0 === b ? _.p.document : b;
      b = b.cookie.split("google_pubconsole=");
      if ((b = 2 == b.length ? b[1].split(";")[0] : ""))
        if (((b = b.split("|")), 0 < b.length && ("1" == b[0] || "0" == b[0])))
          return !0;
      a = Vg(a);
      return (
        null !== wf(a, "google_debug") ||
        null !== wf(a, "dfpdeb") ||
        null !== wf(a, "google_console") ||
        null !== wf(a, "google_force_console") ||
        null !== wf(a, "googfc")
      );
    },
    Lh = _.R(94, function () {
      Jh() && Ih();
      _.J(_.p, "message", Kh);
    }),
    Mh = _.R(93, function () {
      _.Gg()._pubconsole_disable_ = !0;
    }),
    Kh = function (a) {
      a.source == _.p &&
        "gpt_open_pubconsole" == a.data.type &&
        (a = a.data.slotDomId) &&
        Nh(a);
    },
    Nh = function (a) {
      a = void 0 === a ? "" : a;
      _.Gg && _.Gg().console
        ? _.Gg().console.openConsole(a)
        : (a && (Fh = a), (Gh = !0), Ih());
    };
  "complete" === _.p.document.readyState ? Lh() : Ig(_.p, Lh);
  Hg("disablePublisherConsole", Mh);
  Hg("onPubConsoleJsLoad", function () {
    Gh && (_.Gg().console.openConsole(Fh), (Fh = null), (Gh = !1));
  });
  Hg("openConsole", Nh);
  var Oh = function () {
      this.j = [];
    },
    Ph = function (a, b) {
      return _.u(a.j, function (c) {
        return c.getService() === b;
      });
    },
    Qh = function (a, b) {
      return _.u(a.j, function (c) {
        return c.getSlot() === b;
      });
    },
    Rh = function (a, b) {
      return _.u(a.j, function (c) {
        return c.getLevel() >= b;
      });
    };
  Oh.prototype.log = function (a, b, c, d, e) {
    a = new Dh(
      a,
      b,
      void 0 === c ? null : c,
      void 0 === d ? null : d,
      void 0 === e ? null : e
    );
    (_.K(47) && !Jh()) || this.j.push(a);
    return a;
  };
  Oh.prototype.info = function (a, b, c, d) {
    return this.log(1, a, b, c, d);
  };
  Oh.prototype.G = function (a, b, c, d) {
    return this.log(2, a, b, c, d);
  };
  Oh.prototype.error = function (a, b, c, d) {
    return this.log(3, a, b, c, d);
  };
  Ca(Oh);
  var Sh = function () {};
  Sh.prototype.l = function () {
    var a = this.Aa(),
      b = Cg();
    b ? b.set(a, this) : (Dg[Ja(a)] = this);
    return a;
  };
  var Th = Sh.prototype;
  Th.l = rf(Th.l);
  var T,
    Uh,
    U,
    Vh,
    Wh,
    Xh,
    Zh,
    $h,
    ai,
    bi,
    ci,
    di,
    ei,
    fi,
    gi,
    hi,
    ii,
    ji,
    ki,
    li,
    mi,
    ni,
    oi,
    pi,
    qi,
    ri,
    si,
    ti,
    ui,
    vi,
    wi,
    xi,
    yi,
    zi,
    Ai,
    Bi,
    Ci,
    Di,
    Ei,
    Fi,
    Gi,
    Hi,
    Ii,
    Ji,
    Qi,
    Ri,
    Si,
    Ti,
    Ui,
    Vi,
    Wi,
    Xi,
    Yi,
    Zi,
    $i,
    aj,
    bj,
    cj,
    dj,
    ej,
    fj,
    gj,
    hj,
    ij,
    jj,
    kj,
    lj,
    mj,
    nj,
    oj,
    pj,
    qj,
    rj,
    sj,
    tj,
    uj,
    vj,
    wj,
    xj,
    yj,
    zj,
    Aj,
    Bj,
    Cj,
    Dj,
    Ej;
  T = function (a) {
    return function (b) {
      for (var c = [], d = 0; d < arguments.length; ++d) c[d] = arguments[d];
      return new Ch(a, [].concat(_.qa(c)));
    };
  };
  Uh = function (a) {
    return (
      "[" +
      _.q(a, function (b) {
        return _.x(b) ? "'" + b + "'" : _.z(b) ? Uh(b) : String(b);
      }).join(", ") +
      "]"
    );
  };
  U = function (a, b) {
    b = Uh(b);
    b = b.substring(1, b.length - 1);
    return new Ch(96, [a, b]);
  };
  Vh = T(1);
  Wh = T(2);
  Xh = T(3);
  _.Yh = T(4);
  Zh = T(5);
  $h = T(6);
  ai = T(8);
  bi = T(12);
  ci = T(14);
  di = T(16);
  ei = T(17);
  fi = T(19);
  gi = T(20);
  hi = T(21);
  ii = T(22);
  ji = T(23);
  ki = T(26);
  li = T(27);
  mi = T(28);
  ni = T(30);
  oi = T(31);
  pi = T(34);
  qi = T(35);
  ri = T(36);
  si = T(37);
  ti = T(38);
  ui = T(40);
  vi = T(42);
  wi = T(43);
  xi = T(44);
  yi = T(45);
  zi = T(46);
  Ai = T(47);
  Bi = T(48);
  Ci = T(49);
  Di = T(50);
  Ei = T(57);
  Fi = T(58);
  Gi = T(59);
  Hi = T(60);
  Ii = T(61);
  Ji = T(62);
  Qi = T(63);
  Ri = T(64);
  Si = T(65);
  Ti = T(66);
  Ui = T(68);
  Vi = T(69);
  Wi = T(70);
  Xi = T(71);
  Yi = T(74);
  Zi = T(75);
  $i = T(77);
  aj = T(78);
  bj = T(79);
  cj = T(80);
  dj = T(82);
  ej = T(84);
  fj = T(85);
  gj = T(87);
  hj = T(88);
  ij = T(90);
  jj = T(92);
  kj = T(93);
  lj = T(94);
  mj = T(95);
  nj = T(97);
  oj = T(99);
  pj = T(100);
  qj = T(101);
  rj = T(102);
  sj = T(103);
  tj = T(104);
  uj = T(105);
  vj = T(106);
  wj = T(107);
  xj = T(108);
  yj = T(109);
  zj = T(110);
  Aj = T(111);
  Bj = T(112);
  Cj = T(113);
  Dj = T(114);
  Ej = T(115);
  var Ij;
  _.Fj = function (a) {
    tg.call(this, a);
  };
  _.v(_.Fj, tg);
  _.Fj.prototype.v = function (a) {
    _.K(102) ? tg.prototype.v.call(this, a) : a();
  };
  _.Gj = function (a) {
    return new _.Fj(function (b) {
      return void b(a);
    });
  };
  Ij = function (a) {
    var b = new _.Hj(),
      c = b.j,
      d = b.resolve,
      e = b.reject;
    b = a.length;
    if (!b) return d([]), c;
    var f = [],
      g = b;
    _.D(a, function (h, k) {
      try {
        h.then(function (l) {
          f[k] = l;
          0 === --g && d(f);
        }, e);
      } catch (l) {
        e(l);
      }
    });
    return c;
  };
  _.Hj = function () {
    var a = this;
    this.j = new _.Fj(function (b, c) {
      a.resolve = b;
      a.reject = c;
    });
  };
  var Jj = function () {
    this.o = this.m = 0;
    this.j = null;
  };
  _.v(Jj, Sh);
  Jj.prototype.Aa = function () {
    return new Bh(this);
  };
  var Kj = function () {
    var a = Fg(_.Gg().cmd, Jj);
    return a.j ? a.j.j : _.Gj();
  };
  Jj.prototype.push = function (a) {
    var b = Oh.B();
    try {
      _.K(99) && (this.j = this.j || new _.Hj());
      for (var c = 0; c < arguments.length; ++c)
        try {
          _.Fa(arguments[c]) && (arguments[c](), this.m++);
        } catch (d) {
          this.o++,
            window.console &&
              window.console.error &&
              window.console.error("Exception in queued GPT command", d),
            b.error(ni(String(d.message)));
        }
      b.info(oi(String(this.m), String(this.o)));
      return this.m;
    } finally {
      _.K(99) && this.j && (this.j.resolve(), (this.j = null));
    }
  };
  var Lj = function () {
    var a = _.Gg().cmd;
    if (!a || _.z(a)) {
      var b = new Jj();
      _.Gg().cmd = b.l();
      a && 0 < a.length && b.push.apply(b, a);
    }
  };
  Lj = _.R(77, Lj);
  var Mj = function (a, b, c) {
    a && null !== b && b != b.top && (b = b.top);
    try {
      return (void 0 === c ? 0 : c)
        ? new _.Ed(b.innerWidth, b.innerHeight).round()
        : _.Jd(b || window).round();
    } catch (d) {
      return new _.Ed(-12245933, -12245933);
    }
  };
  _.Nj = function () {
    this.H = this.H;
    this.L = this.L;
  };
  _.Nj.prototype.H = !1;
  _.Nj.prototype.Oa = function () {
    this.H || ((this.H = !0), this.l());
  };
  _.Nj.prototype.l = function () {
    if (this.L) for (; this.L.length; ) this.L.shift()();
  };
  _.Oj = function (a) {
    a && "function" == typeof a.Oa && a.Oa();
  };
  _.Pj = /\uffff/.test("\uffff")
    ? /[\\"\x00-\x1f\x7f-\uffff]/g
    : /[\\"\x00-\x1f\x7f-\xff]/g;
  var Qj = function (a, b) {
    this.l = a;
    this.j = b;
  };
  var Rj = !1,
    Sj = "",
    Tj = function (a) {
      a = a.match(/[\d]+/g);
      if (!a) return "";
      a.length = 3;
      return a.join(".");
    };
  (function () {
    if (navigator.plugins && navigator.plugins.length) {
      var a = navigator.plugins["Shockwave Flash"];
      if (a && ((Rj = !0), a.description)) {
        Sj = Tj(a.description);
        return;
      }
      if (navigator.plugins["Shockwave Flash 2.0"]) {
        Rj = !0;
        Sj = "2.0.0.11";
        return;
      }
    }
    if (
      navigator.mimeTypes &&
      navigator.mimeTypes.length &&
      ((a = navigator.mimeTypes["application/x-shockwave-flash"]),
      (Rj = !(!a || !a.enabledPlugin)))
    ) {
      Sj = Tj(a.enabledPlugin.description);
      return;
    }
    if ("undefined" != typeof ActiveXObject) {
      try {
        var b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");
        Rj = !0;
        Sj = Tj(b.GetVariable("$version"));
        return;
      } catch (c) {}
      try {
        b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
        Rj = !0;
        Sj = "6.0.21";
        return;
      } catch (c) {}
      try {
        (b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash")),
          (Rj = !0),
          (Sj = Tj(b.GetVariable("$version")));
      } catch (c) {}
    }
  })();
  _.Uj = Rj;
  _.Vj = Sj;
  var Wj = function () {
      this.j = function () {};
      this.l = function () {
        return [];
      };
      this.m = function () {
        return [];
      };
    },
    Xj = function (a) {
      var b = Wj.B();
      b.j = hg(Wf, a);
      b.l = hg(Xf, a);
      b.m = hg(Yf, a);
    };
  Ca(Wj);
  var Yj = function (a) {
      Wj.B().j(a);
    },
    Zj = function (a) {
      return Wj.B().l(a);
    },
    ak = function () {
      return Wj.B().m();
    };
  var bk = function () {};
  Ca(bk);
  var ck, ek;
  ck = {};
  _.dk =
    ((ck[3] =
      "https://s0.2mdn.net/ads/richmedia/studio/mu/templates/hifi/hifi.js"),
    ck);
  ek = {};
  _.fk =
    ((ek[3] =
      "https://s0.2mdn.net/ads/richmedia/studio_canary/mu/templates/hifi/hifi_canary.js"),
    ek);
  var hk, ik;
  _.gk = function (a, b) {
    b = void 0 === b ? {} : b;
    this.root = b.root ? b.root : null;
    this.A = b.rootMargin
      ? ja(b.rootMargin)
      : [
          { value: 0, type: "px" },
          { value: 0, type: "px" },
          { value: 0, type: "px" },
          { value: 0, type: "px" },
        ];
    this.rootMargin = _.q(this.A, function (c) {
      return "" + c.value + c.type;
    }).join(" ");
    this.D = ma(b.threshold);
    this.C = a;
    this.j = [];
    this.o = [];
    this.v = !1;
    this.l = null;
    this.m = vb(this.w, 100, this);
  };
  hk = function (a) {
    if (a.root) var b = na(a.root);
    else {
      var c = _.Jd(window);
      b = {
        top: 0,
        right: c.width,
        bottom: c.height,
        left: 0,
        width: c.width,
        height: c.height,
      };
    }
    a = _.q(a.A, function (d, e) {
      return "px" == d.type
        ? d.value
        : (d.value * (e % 2 ? b.width : b.height)) / 100;
    });
    return {
      top: b.top - a[0],
      right: b.right + a[1],
      bottom: b.bottom + a[2],
      left: b.left - a[3],
      width: b.width + a[1] + a[3],
      height: b.height + a[0] + a[2],
    };
  };
  ik = function (a, b, c) {
    if (!b || b.isIntersecting != c.isIntersecting) return !0;
    var d = b.intersectionRatio,
      e = c.intersectionRatio;
    return d == e
      ? !1
      : Ya(a.D, function (f) {
          return f < d != f < e;
        });
  };
  _.gk.prototype.w = function () {
    var a = this,
      b = hk(this);
    _.D(this.j, function (c) {
      var d = c.target,
        e = na(d),
        f = e.width * e.height;
      var g = Math.max(b.top, e.top);
      var h = Math.min(b.right, e.right),
        k = Math.min(b.bottom, e.bottom),
        l = Math.max(b.left, e.left),
        m = h - l,
        t = k - g;
      g =
        0 <= m && 0 <= t
          ? { top: g, right: h, bottom: k, left: l, width: m, height: t }
          : null;
      h = !!g;
      k = g ? g.width * g.height : 0;
      l = window.performance;
      d = {
        boundingClientRect: e,
        intersectionRatio: f ? k / f : h ? 1 : 0,
        intersectionRect: g || {
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          width: 0,
          height: 0,
        },
        isIntersecting: h,
        rootBounds: b,
        target: d,
        time: l && l.now ? l.now() : 0,
      };
      ik(a, c.Jb, d) && a.o.push(d);
      c.Jb = d;
    });
    this.o.length && this.C(jk(this), this);
  };
  _.gk.prototype.observe = function (a) {
    Ya(this.j, function (b) {
      return b.target == a;
    }) ||
      (this.j.push({ target: a, Jb: null }),
      this.w(),
      this.v ||
        ((this.v = !0),
        _.J(_.p, "scroll", this.m),
        _.J(_.p, "resize", this.m),
        _.p.MutationObserver &&
          !this.l &&
          ((this.l = new MutationObserver(this.m)),
          this.l.observe(_.p.document, {
            attributes: !0,
            childList: !0,
            characterData: !0,
            subtree: !0,
          }))));
  };
  _.gk.prototype.unobserve = function (a) {
    this.j = _.u(this.j, function (b) {
      return b.target != a;
    });
    0 == this.j.length && this.disconnect();
  };
  _.gk.prototype.disconnect = function () {
    this.v = !1;
    this.j.length = 0;
    _.Be(_.p, "scroll", this.m);
    _.Be(_.p, "resize", this.m);
    this.l && (this.l.disconnect(), (this.l = null));
  };
  var jk = function (a) {
    var b = [].concat(_.qa(a.o));
    a.o.length = 0;
    return b;
  };
  var lk;
  lk = function () {
    return 0 != _.kk(document);
  };
  _.kk = function (a) {
    return (
      { visible: 1, hidden: 2, prerender: 3, preview: 4, unloaded: 5 }[
        a.visibilityState ||
          a.webkitVisibilityState ||
          a.mozVisibilityState ||
          ""
      ] || 0
    );
  };
  _.mk = function (a) {
    var b;
    a.visibilityState
      ? (b = "visibilitychange")
      : a.mozVisibilityState
      ? (b = "mozvisibilitychange")
      : a.webkitVisibilityState && (b = "webkitvisibilitychange");
    return b;
  };
  _.nk = function (a) {
    return null != a.hidden
      ? a.hidden
      : null != a.mozHidden
      ? a.mozHidden
      : null != a.webkitHidden
      ? a.webkitHidden
      : null;
  };
  var ok;
  ok = function () {
    this.wasPlaTagProcessed = !1;
    this.wasReactiveAdConfigReceived = {};
    this.adCount = {};
    this.wasReactiveAdVisible = {};
    this.stateForType = {};
    this.reactiveTypeEnabledInAsfe = {};
    this.isReactiveTagFirstOnPage =
      this.wasReactiveAdConfigHandlerRegistered =
      this.wasReactiveTagRequestSent =
        !1;
    this.reactiveTypeDisabledByPublisher = {};
    this.tagSpecificState = {};
    this.adRegion = this.floatingAdsFillMessage = null;
    this.improveCollisionDetection = 0;
    this.messageValidationEnabled = !1;
  };
  _.pk = function (a) {
    a.google_reactive_ads_global_state ||
      (a.google_reactive_ads_global_state = new ok());
    return a.google_reactive_ads_global_state;
  };
  var qk, uk, vk, wk, xk;
  qk = 728 * 1.38;
  _.rk = function (a) {
    return a.innerHeight >= a.innerWidth;
  };
  _.tk = function (a) {
    var b = _.sk(a).clientWidth;
    a = a.innerWidth;
    return b && a ? b / a : 0;
  };
  uk = function (a) {
    return (a = _.sk(a).clientWidth)
      ? a > (void 0 === qk ? 420 : qk)
        ? 32768
        : 320 > a
        ? 65536
        : 0
      : 16384;
  };
  vk = function (a) {
    return (a = _.tk(a)) ? (1.05 < a ? 262144 : 0.95 > a ? 524288 : 0) : 131072;
  };
  _.sk = function (a) {
    a = a.document;
    var b = {};
    a && (b = "CSS1Compat" == a.compatMode ? a.documentElement : a.body);
    return b || {};
  };
  wk = function (a, b) {
    return a.adCount
      ? 1 == b || 2 == b
        ? !(!a.adCount[1] && !a.adCount[2])
        : (a = a.adCount[b]) && 27 != b && 26 != b
        ? 1 <= a
        : !1
      : !1;
  };
  xk = function (a) {
    var b = [];
    _.I(a, function (c, d) {
      c && b.push(d + ":" + c);
    });
    return b.join();
  };
  _.yk = function (a, b, c, d) {
    var e = c;
    e && (e = "?" + e);
    b =
      "//tpc.googlesyndication.com/safeframe/" + b + "/html/container.html" + e;
    e = a;
    for (var f = 0; e != e.parent; ) f++, (e = e.parent);
    (e = f) && (b += (c ? "&" : "?") + "n=" + e);
    return (d || he(a, !1) ? "https:" : "http:") + b;
  };
  _.zk = function (a) {
    for (var b = a.j.length - 1; 0 <= b; b--) {
      var c = a.j[b];
      c.l
        ? (c.m.style.removeProperty(c.j),
          c.m.style.setProperty(c.j, String(c.o), c.v))
        : (c.m.style[c.j] = c.o);
    }
    a.j.length = 0;
  };
  var Bk, Ck, Dk;
  _.Ak = function (a) {
    a.La() ||
      (2 == a.H && (_.zk(a.m), (a.H = 0)),
      window.clearTimeout(a.L),
      (a.L = -1),
      (a.A = 3),
      a.l && (a.l.Oa(), (a.l = null)),
      a.D && a.j
        ? a.D.unobserve(a.j)
        : (_.Be(window, "resize", a.J), _.Be(window, "scroll", a.J)),
      a.j && a.w == _.Md(a.j) && a.w.removeChild(a.j),
      (a.j = null),
      (a.w = null),
      a.D && (a.D.disconnect(), (a.D = null)),
      (a.status = 100));
  };
  Bk = ["allow-modals", "allow-orientation-lock", "allow-presentation"];
  Ck = ["allow-top-navigation"];
  Dk = ["allow-same-origin"];
  _.Ek = ke([].concat(_.qa(Bk), _.qa(Ck)));
  ke([].concat(_.qa(Bk), _.qa(Dk)));
  ke([].concat(_.qa(Bk), _.qa(Ck), _.qa(Dk)));
  var Fk = function (a) {
    _.gd(this, a, null, null);
  };
  _.Qa(Fk, _.bd);
  Fk.prototype.getTime = function () {
    return _.F(this, 4);
  };
  var Gk;
  Gk = function (a) {
    this.v = a.time;
    this.A = a.rc;
    this.w = a.qc;
    this.j = this.l = -1;
    this.o = this.m = 0;
  };
  _.Hk = function (a, b) {
    a.A && a.w
      ? ((a.o += b - a.v), 1e3 <= a.o && (a.l = b), 0 < a.j || (a.m += b - a.v))
      : (a.o = 0);
    a.v = b;
  };
  var Ik, Jk, Kk, Lk, Pk;
  Ik = [0.05, 0.1, 0.2, 0.5];
  Jk = [0, 0.5, 1];
  Kk = function (a) {
    a = Ud(a);
    if (!a) return -1;
    a = _.pg(a);
    return -12245933 == a.width || -12245933 == a.height
      ? -1
      : a.width * a.height;
  };
  Lk = function (a, b) {
    return 0 > a
      ? []
      : _.q(Ik, function (c) {
          return Math.min((a / b) * c, 1);
        });
  };
  _.Mk = function () {
    return Math.round(performance.now());
  };
  Pk = function (a) {
    this.l = a.gb;
    this.m = a.Pa;
    this.D = a.Lc;
    this.w = null;
    this.v = a.ma;
    this.A = !1;
    this.o = Nk(this);
    this.F = a.Hc || !1;
    this.C = a.Gc || !1;
    this.j = null;
    this.C && Ok(this);
  };
  Pk.prototype.unobserve = function () {
    try {
      Qk(this, _.Mk(), 0, 0, 0, !1);
    } catch (a) {
      this.v && this.v(a);
    }
    this.o && this.o.unobserve(this.m);
    this.A = !1;
    this.j = null;
  };
  var Rk = function (a, b) {
      if (
        a.o &&
        (null != a.w && a.unobserve(),
        (a.w = b),
        a.o.observe(a.m),
        (a.A = !0),
        a.C)
      ) {
        b = _.Mk();
        var c = a.m.getBoundingClientRect(),
          d = c.width * c.height;
        a: {
          var e = 0;
          if (!_.nk(a.l.document)) {
            e = Ud(a.l);
            if (!e) {
              c = -1;
              break a;
            }
            var f = og(e.document);
            e = Math.min(f.clientWidth, c.left + c.width) - Math.max(0, c.left);
            c = Math.min(f.clientHeight, c.top + c.height) - Math.max(0, c.top);
            e = 0 < e && 0 < c ? e * c : 0;
          }
          c = e;
        }
        a.j = new Gk({
          time: b,
          rc: 0 < d ? c / d > (242500 < d ? 0.3 : 0.5) : !1,
          qc: 1 == _.kk(a.l.document),
        });
      }
    },
    Nk = function (a) {
      var b = a.m.offsetWidth * a.m.offsetHeight,
        c = Kk(a.l);
      b = [].concat(_.qa(Jk), _.qa(Lk(c, b)));
      _.ka(b);
      return _.p.IntersectionObserver
        ? new _.p.IntersectionObserver(
            function (d) {
              return Sk(a, d);
            },
            { threshold: b }
          )
        : new _.gk(
            function (d) {
              return Sk(a, d);
            },
            { threshold: b }
          );
    },
    Sk = function (a, b) {
      try {
        var c = Kk(a.l);
        _.D(b, function (d) {
          var e = Math.round(d.time),
            f = d.boundingClientRect.width * d.boundingClientRect.height,
            g = d.intersectionRect.width * d.intersectionRect.height;
          d = d.isIntersecting;
          if (a.C && a.j) {
            var h = a.j,
              k = 0 < f ? g / f > (242500 < f ? 0.3 : 0.5) : !1;
            _.Hk(h, e);
            h.A = k;
          }
          a.F && Qk(a, e, f, g, c, d);
        });
      } catch (d) {
        a.v && a.v(d);
      }
    },
    Qk = function (a, b, c, d, e, f) {
      if (null == a.w) throw Error("Not Attached.");
      var g = new Fk();
      _.H(g, 1, c);
      _.H(g, 2, d);
      _.H(g, 3, e);
      _.H(g, 4, b);
      _.H(g, 5, f);
      b = new $c();
      c = _.F(g, 4);
      null != c && null != c && ad(b, 4, c);
      c = _.F(g, 2);
      null != c && null != c && ad(b, 2, c);
      c = _.F(g, 1);
      null != c && null != c && ad(b, 1, c);
      c = _.F(g, 3);
      null != c && null != c && ad(b, 3, c);
      c = _.F(g, 5);
      null != c && ((g = c), null != g && (Zc(b.j, 40), b.j.j.push(g ? 1 : 0)));
      g = new Uint8Array(b.j.length());
      d = b.l;
      e = d.length;
      for (f = c = 0; f < e; f++) {
        var h = d[f];
        g.set(h, c);
        c += h.length;
      }
      d = b.j;
      e = d.j;
      d.j = [];
      g.set(e, c);
      b.l = [g];
      b = _.Vc(g, !0).replace(/\.+$/, "");
      Pf(a.D, "1", 10, b, void 0, a.w);
    },
    Ok = function (a) {
      var b = _.mk(a.l.document);
      b &&
        _.J(a.l.document, b, function () {
          if (a.j) {
            var c = a.j,
              d = 1 == _.kk(a.l.document);
            _.Hk(c, _.Mk());
            c.w = d;
          }
        });
    };
  var Uk = function (a) {
    var b = this;
    this.addEventListener = S(86, function (c, d) {
      a.addEventListener(c, d);
      return b;
    });
    this.getSlots = S(573, function () {
      return _.q(a.v, function (c) {
        return c.l();
      });
    });
    this.getSlotIdMap = S(574, function () {
      var c = a.R,
        d = {},
        e;
      for (e in c) d[e] = c[e].l();
      return d;
    });
    this.enable = S(
      87,
      function () {
        return Tk(a);
      },
      _.xh
    );
    this.getName = S(575, function () {
      return a.ba();
    });
  };
  _.v(Uk, Eg);
  var Wk = function (a) {
    _.gd(this, a, Vk, null);
  };
  _.Qa(Wk, _.bd);
  var Vk = [2],
    Xk = function (a, b) {
      _.H(a, 2, b || []);
    },
    Yk = function (a, b) {
      _.F(a, 2).push(b);
    };
  var $k = function (a) {
    _.gd(this, a, Zk, null);
  };
  _.Qa($k, _.bd);
  var Zk = [3, 4, 5, 6, 8, 9];
  $k.prototype.getAdUnitPath = function () {
    return _.F(this, 1);
  };
  $k.prototype.ka = function () {
    return _.F(this, 15);
  };
  var jl = function (a, b, c) {
    var d = this,
      e = Oh.B();
    this.set = S(40, function (f, g) {
      if (!_.x(f) || !g) return e.G(U("Slot.set", [f, g]), null, a), d;
      var h = _.jd(c, Wk, 3);
      (h = cb(h, function (k) {
        return _.F(k, 1) === f;
      }))
        ? Xk(h, [g])
        : ((h = new Wk()), _.H(h, 1, f), Yk(h, g), md(c, 3, h, Wk));
      a.set(f, g);
      return d;
    });
    this.get = S(41, function (f) {
      return _.x(f) ? a.get(f) : (e.G(U("Slot.get", [f]), null, a), null);
    });
    this.getAttributeKeys = S(42, function () {
      return rb(a.P);
    });
    this.addService = S(43, function (f) {
      f = Fg(f, b);
      a.addService(f);
      return d;
    });
    this.defineSizeMapping = S(
      44,
      function (f) {
        if (!_.z(f)) throw Error("Size mapping has to be an array");
        f = _.q(f, al);
        a.Ia = new bl(f);
        return d;
      },
      function (f, g) {
        _.xh(f, g);
        xe("Incorrect usage of googletag.Slot defineSizeMapping: " + g.message);
        return d;
      }
    );
    this.setClickUrl = S(45, function (f) {
      cl(a, f);
      return d;
    });
    this.setCategoryExclusion = S(46, function (f) {
      _.x(f) && !Gb(oc(f))
        ? (eb(a.W, f), a.m.info(ci(f), null, a))
        : a.m.G(U("Slot.setCategoryExclusion", [f]), null, a);
      return d;
    });
    this.clearCategoryExclusions = S(47, function () {
      a.m.info(di(), null, a);
      a.W = [];
      return d;
    });
    this.getCategoryExclusions = S(48, function () {
      return _.ib(a.W);
    });
    this.setTargeting = S(49, function (f, g) {
      dl(a, f, g);
      return d;
    });
    this.clearTargeting = S(50, function (f) {
      "undefined" != typeof f
        ? !_.x(f) || Gb(oc(f))
          ? a.m.G(U("Slot.clearTargeting", [f]), null, a)
          : a.v[f]
          ? (delete a.v[f], a.m.info(sj(f, a.getAdUnitPath()), null, a))
          : a.m.G(rj(f, a.getAdUnitPath()), null, a)
        : (a.m.info(fi(), null, a), (a.v = {}));
      return d;
    });
    this.getTargeting = S(51, function (f) {
      _.x(f)
        ? (f = a.v.hasOwnProperty(f) ? _.ib(a.v[f]) : [])
        : (a.m.G(U("Slot.getTargeting", [f]), null, a), (f = []));
      return f;
    });
    this.getTargetingKeys = S(52, function () {
      return rb(a.v);
    });
    this.setCollapseEmptyDiv = S(53, function (f, g) {
      el(a, f, g);
      return d;
    });
    this.getAdUnitPath = S(54, function () {
      return a.getAdUnitPath();
    });
    this.getSlotElementId = S(598, function () {
      return a.U.j;
    });
    this.setForceSafeFrame = S(55, function (f) {
      fl(a, f);
      return d;
    });
    this.setSafeFrameConfig = S(56, function (f) {
      if (f && _.B(f)) {
        if ((f = gl(f))) a.xa = f;
      } else a.m.error(U("Slot.setSafeFrameConfig", [f]), null, a);
      return d;
    });
    this.getResponseInformation = S(355, function () {
      return a.ja;
    });
    this.getName = S(170, function () {
      window.console &&
        console.error &&
        console.error(
          "getName on googletag.Slot is deprecated and will be removed. Use getAdUnitPath instead."
        );
      var f = new _.oh("slot_get_name");
      _.Q(f);
      _.qh(f);
      return a.L;
    });
    this.getSlotId = S(579, function () {
      return a.U.l();
    });
    this.getServices = S(580, function () {
      return _.q(a.K, function (f) {
        return f.l();
      });
    });
    this.getSizes = S(581, function (f, g) {
      return hl(a, f, g);
    });
    this.getClickUrl = S(582, function () {
      return a.M;
    });
    this.getTargetingMap = S(583, function () {
      return Cb(a.v);
    });
    this.getOutOfPage = S(584, function () {
      return a.getOutOfPage();
    });
    this.getCollapseEmptyDiv = S(585, function () {
      return a.na;
    });
    this.getDivStartsCollapsed = S(586, function () {
      return a.$;
    });
    this.getContentUrl = S(587, function () {
      return a.Y;
    });
    this.getFirstLook = S(588, function () {
      return a.ca;
    });
    this.setFirstLook = S(589, function (f) {
      _.xa(f)
        ? (a.ca = f ? 1 : 2)
        : a.m.G(U("Slot.setFirstLook", [f]), null, a);
      return d;
    });
    this.getPassbackPageUrl = S(590, function () {
      return a.ia;
    });
    this.getEscapedQemQueryId = S(591, function () {
      return _.il(a);
    });
    this.getHtml = S(592, function () {
      return a.getHtml();
    });
  };
  _.v(jl, Eg);
  var kl = function (a) {
    this.getId = S(593, function () {
      return a.m;
    });
    this.getAdUnitPath = S(594, function () {
      return a.getAdUnitPath();
    });
    this.getName = S(595, function () {
      var b = new _.oh("slot_id_get_name");
      _.Q(b);
      _.qh(b);
      return a.o;
    });
    this.toString = S(596, function () {
      return a.toString();
    });
    this.getDomId = S(597, function () {
      return a.j;
    });
  };
  _.v(kl, Eg);
  var ll = function (a) {
      switch (a) {
        case 1:
          return 2;
        case 2:
          return 1;
        case 4:
          return 8;
        default:
          return null;
      }
    },
    ml = ub(function () {
      var a = { REWARDED: 3 };
      _.K(35) && ((a.TOP_ANCHOR = 1), (a.BOTTOM_ANCHOR = 2), (a.VIGNETTE = 4));
      return a;
    }),
    nl = function () {
      var a = _.Gg();
      if (!a.enums) {
        var b = ml();
        b && (a.enums = { OutOfPageFormat: b });
      }
    };
  _.ol = function () {
    this.j = this.m = this.l = null;
  };
  var ql = function (a) {
    _.gd(this, a, pl, null);
  };
  _.Qa(ql, _.bd);
  var pl = [1];
  var rl, sl, gl;
  rl = "";
  sl = null;
  _.tl = function () {
    rl || (rl = _.lg(2) || "1-0-33");
    return rl;
  };
  _.ul = function () {
    if (null == sl) {
      for (var a = _.mg(1), b = [], c = 0; c < a.length; c += 2)
        uf(a[c], a[c + 1], b);
      sl = b.join("&");
    }
    return sl;
  };
  gl = function (a) {
    var b = Oh.B(),
      c = {};
    if (!a || !_.B(a)) return null;
    var d = !1;
    _.I(a, function (e, f) {
      switch (f) {
        case "allowOverlayExpansion":
          _.xa(e)
            ? (c.allowOverlayExpansion = a.allowOverlayExpansion)
            : (b.error(
                qj("allowOverlayExpansion", String(a.allowOverlayExpansion))
              ),
              (d = !0));
          break;
        case "allowPushExpansion":
          _.xa(e)
            ? (c.allowPushExpansion = a.allowPushExpansion)
            : (b.error(qj("allowPushExpansion", String(a.allowPushExpansion))),
              (d = !0));
          break;
        case "sandbox":
          !0 === e
            ? (c.sandbox = a.sandbox)
            : (b.error(qj("sandbox", String(a.sandbox))), (d = !0));
          break;
        default:
          b.G(pj(f));
      }
    });
    return d ? null : c;
  };
  var vl, zl;
  vl = {
    fd: "impressionViewable",
    kd: "rewardedSlotCanceled",
    ld: "rewardedSlotClosed",
    md: "rewardedSlotCompleted",
    nd: "rewardedSlotGranted",
    od: "rewardedSlotReady",
    pd: "slotAdded",
    qd: "slotOnload",
    rd: "slotRenderEnded",
    sd: "slotRequested",
    td: "slotResponseReceived",
    ud: "slotVisibilityChanged",
  };
  _.wl = function (a, b) {
    this.slot = a;
    this.serviceName = b;
  };
  _.xl = function (a, b, c) {
    _.wl.call(this, a, c);
    this.isEmpty = b;
    this.slotContentChanged = !0;
    this.sourceAgnosticLineItemId =
      this.sourceAgnosticCreativeId =
      this.lineItemId =
      this.labelIds =
      this.creativeTemplateId =
      this.creativeId =
      this.campaignId =
      this.advertiserId =
      this.size =
        null;
    this.isBackfill = !1;
    this.companyIds = this.yieldGroupIds = null;
  };
  _.v(_.xl, _.wl);
  _.yl = function (a, b) {
    a.size = b;
    return a;
  };
  zl = function (a, b, c) {
    _.wl.call(this, a, b);
    this.inViewPercentage = c;
  };
  _.v(zl, _.wl);
  var Al = function () {
    _.wl.apply(this, arguments);
  };
  _.v(Al, _.wl);
  var Bl = function () {
    _.wl.apply(this, arguments);
  };
  _.v(Bl, _.wl);
  var Cl = function () {
    _.wl.apply(this, arguments);
  };
  _.v(Cl, _.wl);
  var Dl = function () {
    this.v = [];
    this.R = {};
    this.m = !1;
    this.L = {};
    this.log = Oh.B();
    this.log.info(qi(this.ba()), this);
  };
  _.v(Dl, Sh);
  Dl.prototype.Aa = function () {
    return new Uk(this);
  };
  Dl.prototype.getVersion = function () {
    return "unversioned";
  };
  var Tk = function (a) {
    a.m || (a.nb(), (a.m = !0));
  };
  Dl.prototype.wb = function (a) {
    this.v.push(a);
    var b = new Bl(a.l(), this.ba());
    El(this, "slotAdded", b);
    this.R[_.N(a)] = a;
    this.log.info(ui(this.ba(), a.getAdUnitPath()), this, a);
  };
  Dl.prototype.destroySlots = function (a) {
    var b = this.v,
      c = _.u(b, function (d) {
        return _.db(a, d);
      });
    _.D(c, function (d) {
      _.gb(b, d);
    });
    return c;
  };
  var Fl = function (a, b) {
    _.uh("gpt_callback_usage", function (c) {
      _.Q(c);
      _.O(c, "type", b);
      var d = 0,
        e = 0;
      _.D(a.v, function (f) {
        0 < f.A && d++;
        f.D && e++;
      });
      _.O(c, "nfetch", d);
      _.O(c, "nrend", e);
    });
  };
  Dl.prototype.addEventListener = function (a, b) {
    if (!_.Fa(b) || !_.x(a))
      return (
        (a = U("Service.addEventListener", [a, b])), this.log.G(a, this), this
      );
    if (!Ab(vl, a)) return this.log.G(kj(a), this), this;
    _.z(this.L[a]) || (this.L[a] = []);
    this.L[a].push(b);
    Fl(this, a);
    return this;
  };
  var El = function (a, b, c) {
      var d = a.L[b];
      _.z(d) &&
        (_.K(90)
          ? Ae(function () {
              Gl(a, d, c);
            })
          : Gl(a, d, c));
    },
    Gl = function (a, b, c) {
      b = _.pa(b);
      for (var d = b.next(); !d.done; d = b.next()) {
        d = d.value;
        try {
          d(c);
        } catch (g) {
          d = g && _.x(g.name) ? g.name : null;
          var e = g && _.x(g.message) ? g.message : null,
            f = "";
          d && e ? (f = d + ": " + e) : d ? (f = d) : e && (f = e);
          a.log.G(jj(f), a);
          window.console && console.error && console.error(g);
        }
      }
    };
  var Hl = function () {
    var a = this;
    this.j = "";
    var b = {};
    this[3] =
      ((b[14] = $g),
      (b[13] = function (c) {
        for (var d = [], e = 0; e < arguments.length; ++e) d[e] = arguments[e];
        return Ya(d, function (f) {
          return 0 == a.j.lastIndexOf(f, 0);
        });
      }),
      (b[12] = function () {
        return !1;
      }),
      (b[11] = lk),
      (b[15] = function () {
        return !1;
      }),
      (b[7] = function () {
        return !(!_.p.crypto || !_.p.crypto.subtle);
      }),
      (b[1] = function () {
        return 0 == (0, _.oe)();
      }),
      b);
    b = {};
    this[4] =
      ((b[3] = function () {
        return (0, _.oe)();
      }),
      b);
    this[5] = {};
  };
  Ca(Hl);
  _.Il = function () {
    var a = Hl.B(),
      b = _.L(241);
    _.wb(a, function (d, e) {
      Na(d, b[e]);
    });
    ng();
    Tf.B();
    var c = _.L(245);
    Xj(c);
    jg(c);
    bk.B();
    this.l = Yj;
    this.j = Zj;
    this.m = ak;
    this.o = _.R(511, hg(Zf, c));
    this.o(a);
  };
  Ca(_.Il);
  _.Jl = function () {
    var a = this;
    this.j = {};
    this.l = Oh.B();
    this.o = this.l.info(ai());
    Ig(window, function () {
      return _.R(92, a.m);
    });
  };
  _.Jl.prototype.add = function (a) {
    this.j[a.ba()] = a;
  };
  _.Jl.prototype.find = function (a) {
    var b = null;
    a in this.j && (b = this.j[a]);
    return b;
  };
  var Kl = function () {
    var a = _.Jl.B();
    _.Il.B().j(6);
    _.I(a.j, function (b) {
      b.m ? a.l.info(ti(), b) : Tk(b);
    });
  };
  _.Jl.prototype.destroySlots = function (a) {
    _.I(this.j, function (b) {
      return b.destroySlots(a);
    });
  };
  _.Jl.prototype.m = function () {
    this.l.info(Vh(), null, null, this.o);
  };
  Ca(_.Jl);
  _.Jl.prototype.m = _.R(92, _.Jl.prototype.m);
  Hg(
    "enableServices",
    _.R(91, function () {
      Kl();
    })
  );
  var Ll = function (a, b) {
    this.l = a;
    this.j = b;
  };
  Ll.prototype.getWidth = function () {
    return this.l;
  };
  Ll.prototype.getHeight = function () {
    return this.j;
  };
  var Ml = function (a) {
      var b = _.z(a) && 2 == a.length && eh(a[0]) && eh(a[1]);
      a = _.x(a) && "fluid" == a;
      return b || a;
    },
    Nl = function (a) {
      return _.z(a) ? new Ll(a[0], a[1]) : a;
    },
    Pl = function (a) {
      var b = [];
      if (Ol(a)) b.push(Nl(a));
      else if (_.z(a))
        for (var c = 0; c < a.length; ++c) {
          var d = a[c];
          Ol(d) && b.push(Nl(d));
          pb(d, ["fluid"]) && b.push("fluid");
        }
      return b;
    },
    Ol = function (a) {
      var b = _.z(a) && 1 < a.length && _.r(a[0]) && _.r(a[1]);
      a = _.x(a) && "fluid" == a;
      return b || a;
    };
  var bl = function (a) {
      this.j = a;
    },
    Ql = function (a, b) {
      a = cb(a.j, function (c) {
        c = c.l;
        return c.width <= b.width && c.height <= b.height;
      });
      return null == a ? null : a.j;
    },
    al = function (a) {
      if (!_.z(a) || 2 != a.length)
        throw Error("Each mapping entry has to be an array of size 2");
      var b = a[0];
      if (!Ml(b) || "fluid" == b)
        throw Error("Size has to be an array of two non-negative integers");
      b = new _.Ed(b[0], b[1]);
      if (_.z(a[1]) && 0 == a[1].length) a = [];
      else if (((a = Pl(a[1])), 0 == a.length))
        throw Error("At least one slot size must be present");
      return new Qj(b, a);
    };
  var Rl = function (a, b, c) {
    this.o = a;
    this.Ka = b;
    this.m = this.o + "_" + this.Ka;
    this.j = c;
  };
  _.v(Rl, Sh);
  Rl.prototype.getAdUnitPath = function () {
    return this.o;
  };
  Rl.prototype.B = function () {
    return this.Ka;
  };
  Rl.prototype.toString = function () {
    return this.m;
  };
  Rl.prototype.Aa = function () {
    return new kl(this);
  };
  Rl.prototype.getInstance = Rl.prototype.B;
  var Ul = function (a, b, c, d, e) {
      this.gc = e;
      this.L = a;
      this.hc = Pl(c);
      this.Ia = null;
      this.U = new Rl(a, b, d);
      this.K = [];
      this.P = {};
      this.qa = null;
      this.m = Oh.B();
      this.m.info(Wh(this.U.toString()), null, this);
      this.D = this.oa = null;
      this.M = this.Y = "";
      this.Bb = !0;
      this.v = {};
      this.W = [];
      this.sa = !1;
      this.Cb = 0;
      this.$ = this.na = null;
      this.Zb = 0;
      this.cc = -1;
      this.Ab = 2;
      this.ca = 0;
      this.ga = !1;
      this.xa = {};
      this.ia = "";
      this.bc = !1;
      this.da = null;
      this.I = !1;
      this.J = null;
      this.ic = vb(
        function () {
          null !== this.J && _.Sl(this, this.J);
        },
        200,
        this
      );
      this.w = hh(this.L);
      this.Wa = "";
      this.ja = this.F = null;
      this.Z = !1;
      this.va = this.A = 0;
      this.Db = this.N = this.ra = this.H = null;
      this.ua = !1;
      this.V = this.Ga = this.xb = this.vb = this.ha = null;
      _.Tl(this);
      this.R = _.K(118) ? "" : null;
      this.wa = new _.ol();
      this.T = this.yb = this.aa = null;
      this.O = 0;
      this.Eb = "";
      this.j = null;
      this.la = this.C = 0;
      this.pa = this.$b = this.ac = !1;
      this.Ha = null;
    },
    hl,
    el,
    Zl,
    $l,
    bm,
    cm,
    dm,
    fm,
    mm;
  _.v(Ul, Sh);
  _.n = Ul.prototype;
  _.n.Aa = function () {
    return new jl(this, Dl, this.gc);
  };
  _.n.set = function (a, b) {
    this.P[a] = b;
    return this;
  };
  _.n.get = function (a) {
    return this.P.hasOwnProperty(a) ? this.P[a] : null;
  };
  _.n.addService = function (a) {
    var b = _.Jl.B();
    if (!Ab(b.j, a)) return this.m.G(lj(this.U.toString()), null, this), this;
    for (b = 0; b < this.K.length; ++b)
      if (a == this.K[b])
        return this.m.G(bi(a.ba(), this.U.toString()), a, this), this;
    this.K.push(a);
    a.wb(this);
    return this;
  };
  _.n.getAdUnitPath = function () {
    return this.L;
  };
  _.n.B = function () {
    return this.U.B();
  };
  _.V = function (a, b) {
    b = void 0 === b ? document : b;
    return a.H || b.getElementById(a.U.j);
  };
  hl = function (a, b, c) {
    return _.r(b) && _.r(c) && a.Ia ? Ql(a.Ia, new _.Ed(b, c)) : a.hc;
  };
  _.N = function (a) {
    return a.L + "_" + a.U.B();
  };
  _.Vl = function (a) {
    var b = void 0 === b ? window : b;
    var c = null;
    b.top == b && ((b = Mj(!1, b)), (c = hl(a, b.width, b.height)));
    null == c && (c = hl(a));
    return _.q(c, function (d) {
      return _.x(d) ? d : [d.getWidth(), d.getHeight()];
    });
  };
  _.Wg = function (a) {
    var b = [],
      c = !1;
    _.D(_.Vl(a), function (d) {
      _.z(d) ? b.push(d.join("x")) : "fluid" == d ? (c = !0) : b.push(d);
    });
    c && b.unshift("320x50");
    return b.join("|");
  };
  Ul.prototype.fa = function () {
    return _.db(_.Vl(this), "fluid");
  };
  var cl = function (a, b) {
      _.x(b) ? (a.M = b) : a.m.G(U("Slot.setClickUrl", [b]), null, a);
    },
    fl = function (a, b) {
      _.xa(b) ? (a.da = b) : a.m.G(U("Slot.setForceSafeFrame", [b]), null, a);
    },
    dl = function (a, b, c) {
      var d = [];
      _.z(c) ? (d = c) : c && d.push(c.toString());
      _.x(b)
        ? (a.m.info(ei(b, d.join(), a.getAdUnitPath()), null, a), (a.v[b] = d))
        : a.m.G(U("Slot.setTargeting", [b, c]), null, a);
    };
  Ul.prototype.getOutOfPage = function () {
    return this.sa;
  };
  Ul.prototype.ka = function () {
    return this.Cb;
  };
  _.Wl = function (a) {
    return 3 == a.ka();
  };
  el = function (a, b, c) {
    !_.xa(b) || (c && !_.xa(c))
      ? a.m.G(U("Slot.setCollapseEmptyDiv", _.u([b, c], _.w)), null, a)
      : ((a.na = b),
        (a.$ = b && !!c),
        _.uh("gpt_ced", function (d) {
          _.O(d, "sc", a.$ ? "t" : "f");
          _.O(d, "level", "slot");
          _.Q(d);
        }),
        c && !b && a.m.G(gi(a.U.toString()), null, a));
  };
  Zl = function (a, b) {
    if (!_.V(a)) return a.m.error(hi(a.U.toString()), null, a), !1;
    var c = a.U.j,
      d = _.V(a, _.p.document);
    if (!d) return a.m.error(ii(c, a.U.toString()), null, a), !1;
    c = a.qa;
    return _.x(c) && 0 < c.length
      ? (_.Xl(a), (d.innerHTML = c), _.Yl(a, b), !0)
      : !1;
  };
  $l = function (a, b) {
    b = void 0 === b ? null : b;
    if (
      a.Z &&
      (_.uh("gpt_mult_disp", function (c) {
        _.O(c, "iu", a.L);
        _.O(c, "ac", a.j ? "1" : "0");
        _.Q(c);
      }),
      _.K(89))
    )
      return;
    a.H = b;
    a.Bb && !_.V(a)
      ? a.m.G(ji(a.L, a.U.j), null, a)
      : ((a.Z = !0),
        _.D(a.K, function (c) {
          c.m && c.pb(a);
        }));
  };
  bm = function (a) {
    a.oa = a.m.info(Xh(a.getAdUnitPath()), null, a);
    a.A++;
    Pf(_.Ng.B(), "7", 9, a.A, 0, a.o);
    var b = new Cl(a.l(), "publisher_ads");
    _.am(a, "slotRequested", b);
    a.D = null;
  };
  _.Xl = function (a) {
    a.D = a.m.info(Zh(a.getAdUnitPath()), null, a);
  };
  _.Yl = function (a, b) {
    a.m.info($h(a.getAdUnitPath()), null, a, a.D);
    _.am(a, "slotRenderEnded", b);
  };
  Ul.prototype.loaded = function () {
    var a = new Al(this.l(), "publisher_ads");
    _.am(this, "slotOnload", a);
    _.Rf(_.Ng.B(), "6", this.o);
    _.K(86) && this.j && _.F(this.j, 4) && zg();
  };
  cm = function (a) {
    a.I = !1;
    a.J = null;
    a.ja = null;
    a.j = null;
    a.yb = null;
    a.T = null;
    var b = _.K(118) ? "" : null;
    a.R = b;
    a.Ha = null;
  };
  dm = function (a) {
    var b = a.C ? _.Gf() - a.C : 0;
    return Math.round((a.la + b) / 1e3);
  };
  _.Sl = function (a, b) {
    b = new zl(a.l(), "publisher_ads", b);
    _.am(a, "slotVisibilityChanged", b);
  };
  _.il = function (a) {
    return (a.j && _.F(a.j, 34)) || "";
  };
  Ul.prototype.getHtml = function () {
    return _.K(67) && _.em(this)
      ? (window.console &&
          console.warn &&
          console.warn(
            "This ad's html cannot be accessed using the getHtml method on googletag.Slot. Returning the empty string instead."
          ),
        "")
      : (this.j && _.F(this.j, 4)) || "";
  };
  _.em = function (a) {
    return a.j ? !!_.G(a.j, 9) : null;
  };
  _.am = function (a, b, c) {
    _.D(a.K, function (d) {
      d.ba() == c.serviceName && El(d, b, c);
    });
  };
  Ul.prototype.La = function () {
    return this.bc;
  };
  Ul.prototype.ec = function () {
    return this.w;
  };
  fm = function (a, b) {
    a.va = b;
  };
  _.gm = function (a) {
    return "google_ads_iframe_" + _.N(a);
  };
  _.hm = function (a) {
    return _.gm(a) + "__container__";
  };
  _.Tl = function (a, b) {
    b || (b = ++_.Ng.B().m);
    a.o = b;
  };
  _.im = function (a, b) {
    return a.ra ? a.ra : b.getElementById(_.gm(a));
  };
  _.jm = function (a, b) {
    if (a.N) return a.N;
    a = _.hm(a);
    return b.getElementById(a);
  };
  _.km = function (a) {
    if (!a.ha) {
      var b = _.V(a);
      b = b && b.parentElement;
      if (_.K(50)) {
        if ((b = b.getBoundingClientRect()))
          a.ha = new _.Ed(b.right - b.left, b.bottom - b.top).floor();
      } else b && b.getBoundingClientRect && (a.ha = jh(b));
    }
    return a.ha;
  };
  _.lm = function (a, b) {
    b = void 0 === b ? document : b;
    if (!a.xb) {
      b = _.V(a, b);
      if (!b) return null;
      a.xb = _.Wd(b, window);
    }
    return a.xb;
  };
  mm = function (a) {
    var b = _.km(a);
    return b
      ? Ya(_.Vl(a), function (c) {
          if (_.x(c)) return !0;
          var d = Math.floor(c[1]) == b.height;
          return Math.floor(c[0]) != b.width || !d;
        })
      : !1;
  };
  var om;
  _.nm = function () {
    this.l = [];
    this.m = [];
    this.j = {};
  };
  om = function (a, b) {
    return a.j[b] || [];
  };
  Ca(_.nm);
  var pm = function () {
      this.j = new ql();
    },
    qm = function (a, b) {
      return cb(_.jd(a.j, $k, 1), function (c) {
        return _.F(c, 2) === b;
      });
    },
    rm = function (a, b) {
      var c = _.jd(a.j, $k, 1);
      hb(c, function (d) {
        return _.F(d, 2) === b;
      }) && _.ld(a.j, 1, c);
    };
  Ca(pm);
  var sm = function (a) {
      return !!_.ce(ml(), function (b) {
        return b == a;
      });
    },
    vm = function (a) {
      return _.db(ih(tm(um.B())), a);
    },
    um = function () {
      this.j = {};
      this.m = {};
      this.l = {};
      this.o = Oh.B();
      Hl.B()[3][15] = vm;
    },
    tm,
    wm,
    xm,
    ym,
    zm,
    Am,
    Bm,
    Cm,
    Dm,
    Fm;
  um.prototype.add = function (a, b, c) {
    var d = void 0 === c ? {} : c,
      e = void 0 === d.Pa ? void 0 : d.Pa;
    c = void 0 === d.Wb ? Ul : d.Wb;
    if (!_.x(a) || 0 >= a.length || !b) return {};
    d = ll(void 0 === d.format ? 0 : d.format);
    if (null != d) {
      var f = _.pk(window);
      if (wk(f, d)) return {};
      f.adCount = f.adCount || {};
      f.adCount[d] = f.adCount[d] + 1 || 1;
    }
    a in this.j || ((this.j[a] = []), (this.m[a] = 0));
    d = this.m[a];
    f = e || "gpt_unit_" + a + "_" + d;
    if (this.l[f]) return this.o.error(mi(f)), {};
    e = new $k();
    _.H(e, 1, a);
    _.H(e, 2, f);
    var g = pm.B();
    md(g.j, 1, e, $k);
    b = new c(a, d, b, f, e);
    this.m[a]++;
    this.j[a].push(b);
    this.l[b.U.j] = b;
    _.ph.push(b);
    return { slot: b, Ca: e };
  };
  tm = function (a) {
    var b = [];
    _.wb(a.j, function (c) {
      _.D(c, function (d) {
        b.push(d);
      });
    });
    return b;
  };
  wm = function (a) {
    var b = [];
    a = om(_.nm.B(), a);
    _.D(a, function (c) {
      (c = _.im(c, document)) && b.push(c.contentWindow);
    });
    return b;
  };
  xm = function (a, b) {
    b = _.pa(b);
    for (var c = b.next(); !c.done; c = b.next()) {
      c = c.value;
      rm(pm.B(), c.U.j);
      c.bc = !0;
      c.m.info(oj(c.U.toString()), null, c);
      var d = ll(c.ka());
      if (null != d) {
        var e = _.pk(window),
          f = e.adCount && e.adCount[d];
        f && (e.adCount[d] = f - 1);
      }
      d = c.getAdUnitPath();
      _.gb(a.j[d], c);
      0 == a.j[d].length && ((e = a.j), d in e && delete e[d]);
      d = a.l;
      e = c.U.j;
      e in d && delete d[e];
      _.gb(_.ph, c);
    }
  };
  ym = function (a, b) {
    if (b && !_.z(b)) return a.o.G(U("googletag.destroySlots", [b])), !1;
    b
      ? (_.ka(b),
        (b = _.u(b, function (c) {
          return c && !c.La();
        })))
      : (b = tm(a));
    if (!b || 0 == b.length) return !1;
    _.Jl.B().destroySlots(b);
    xm(a, b);
    return !0;
  };
  zm = function (a, b) {
    return a.l[b] ? a.l[b] : null;
  };
  Am = function (a) {
    var b = um.B(),
      c = Fg(a, Ul);
    return (
      !!c &&
      yb(b.j, function (d) {
        return _.db(d, c);
      })
    );
  };
  Bm = function (a, b, c) {
    if (_.x(a) && (!_.w(c) || _.x(c))) {
      var d = um.B();
      return d && d.add(a, b, { Pa: c, Wb: void 0 });
    }
    return {};
  };
  Cm = function (a, b, c) {
    return ((a = Bm(a, b, c).slot) && a.l()) || null;
  };
  Dm = function (a) {
    var b = um.B();
    return b && null == a
      ? ym(b)
      : b && _.z(a)
      ? ((a = _.q(a, function (c) {
          return Fg(c, Ul);
        })),
        ym(b, a))
      : !1;
  };
  _.Em = function (a, b, c) {
    if ((a = um.B().add(a, [1, 1], { Pa: c, format: b }).slot))
      (a.sa = !0), (a.Cb = b);
    return a || null;
  };
  Fm = function (a, b) {
    if (!_.x(a) || !(null == b || _.x(b) || (_.r(b) && sm(b)))) return null;
    var c = _.x(b) ? b : void 0;
    b = _.r(b) ? b : 0;
    return 3 == b && _.p != _.p.top
      ? (Oh.B().G(Bj(String(a))), null)
      : (a = _.Em(a, b, c)) && a.l();
  };
  Ca(um);
  Cm = _.R(74, Cm);
  Dm = _.R(75, Dm);
  Fm = _.R(73, Fm);
  var Gm = _.R(95, function (a) {
    var b = Oh.B();
    var c = null;
    var d = "";
    if (_.x(a)) {
      d = a;
      var e = zm(um.B(), d);
    } else _.B(a) && 1 == a.nodeType ? ((c = a), (d = c.id), (e = zm(um.B(), d))) : (e = Fg(a, Ul));
    e
      ? (pm.B(), qm(pm.B(), e.U.j) && $l(e, c))
      : d
      ? b.error(li(String(d)))
      : b.error(ki(String(a)));
  });
  var Hm = _.lf(),
    Im = new Nf(1, Hm),
    Jm = function () {
      Hm.google_measure_js_timing ||
        ((Im.j = !1),
        Im.events != Im.l.google_js_reporting_queue &&
          (Mf() && _.D(Im.events, Of), (Im.events.length = 0)));
    };
  "complete" == Hm.document.readyState
    ? Jm()
    : Im.j &&
      _.J(Hm, "load", function () {
        Jm();
      });
  var Km = navigator,
    Lm = function () {
      try {
        return Km.javaEnabled();
      } catch (a) {
        return !1;
      }
    },
    Mm = function (a) {
      var b = 1,
        c;
      if (void 0 != a && "" != a)
        for (b = 0, c = a.length - 1; 0 <= c; c--) {
          var d = a.charCodeAt(c);
          b = ((b << 6) & 268435455) + d + (d << 14);
          d = b & 266338304;
          b = 0 != d ? b ^ (d >> 21) : b;
        }
      return b;
    },
    Nm = function (a, b) {
      if (!a || "none" == a) return 1;
      a = String(a);
      "auto" == a &&
        ((a = b),
        "www." == a.substring(0, 4) && (a = a.substring(4, a.length)));
      return Mm(a.toLowerCase());
    },
    Om = /^\s*_ga=\s*1\.(\d+)[^.]*\.(.*?)\s*$/,
    Pm = /^[^=]+=\s*GA1\.(\d+)[^.]*\.(.*?)\s*$/,
    Qm = /^\s*_ga=\s*()(amp-[\w.-]{22,64})$/;
  _.Rm = function (a, b) {
    if (!(window && Math.random && navigator)) return -1;
    if (window.__google_ad_urls) {
      var c = window.__google_ad_urls;
      try {
        if (c && c.getOseId()) return c.getOseId();
      } catch (e) {}
    }
    if (!window.__google_ad_urls_id) {
      c = window.google_enable_ose;
      if (!0 === c) var d = 2;
      else
        !1 !== c &&
          ((d = Zd([0], a)), null == d && ((d = Zd([2], b)) || (d = 3)));
      if (!d) return 0;
      window.__google_ad_urls_id = d;
    }
    return window.__google_ad_urls_id;
  };
  _.Oa();
  var Sm;
  Sm = function (a, b, c, d, e, f) {
    e = void 0 === e ? 10 : e;
    f = void 0 === f ? 10 : f;
    b = b.styleSheets;
    if (!b) return !1;
    var g =
      a.matches ||
      a.webkitMatchesSelector ||
      a.mozMatchesSelector ||
      a.msMatchesSelector ||
      a.oMatchesSelector;
    e = -1 == e ? Infinity : e;
    f = -1 == f ? Infinity : f;
    for (var h = 0; h < Math.min(b.length, e); ++h) {
      var k = void 0;
      try {
        var l = b[h],
          m = null;
        try {
          m = l.cssRules || l.rules;
        } catch (ea) {
          if (15 == ea.code) throw ((ea.styleSheet = l), ea);
        }
        k = m;
      } catch (ea) {
        continue;
      }
      if (k && 0 < k.length)
        for (m = 0; m < Math.min(k.length, f); ++m) {
          var t = k[m],
            y;
          if ((y = 1 == t.type)) {
            y = t;
            var A = c;
            y = g.call(a, y.selectorText) && A(y);
          }
          if (!y && (y = d && 4 == t.type))
            a: {
              y = a;
              A = c;
              for (var M = f, P = 0; P < Math.min(t.cssRules.length, M); P++) {
                var Ga = t.cssRules[P],
                  Ra = A;
                if (g.call(y, Ga.selectorText) && Ra(Ga)) {
                  y = !0;
                  break a;
                }
              }
              y = !1;
            }
          if (y) return !0;
        }
    }
    return !1;
  };
  _.Tm = function (a, b, c, d, e, f) {
    d = void 0 === d ? 100 : d;
    e = void 0 === e ? 10 : e;
    f = void 0 === f ? 10 : f;
    for (
      var g = ["auto", "inherit", "100%"], h = g.concat(["none"]), k = 0;
      k < d && a;
      k++
    ) {
      var l = a.style;
      if (
        (l && l.height && !_.db(g, l.height)) ||
        (l && l.maxHeight && !_.db(h, l.maxHeight)) ||
        Sm(
          a,
          b.document,
          function (m) {
            var t = m.style.height;
            m = m.style["max-height"];
            return (t && !_.db(g, t)) || (m && !_.db(h, m));
          },
          c,
          e,
          f
        )
      )
        return !1;
      a = a.parentElement;
    }
    return !0;
  };
  var Um = function (a) {
      a = void 0 === a ? window : a;
      return a._gmptnl
        ? "afma-gpt-sdk-a"
        : a.webkit &&
          a.webkit.messageHandlers &&
          a.webkit.messageHandlers._gmptnl
        ? "afma-gpt-sdk-i"
        : null;
    },
    Vm = function (a, b) {
      b = void 0 === b ? window : b;
      var c = Um(b);
      if (!c) return null;
      var d = null;
      try {
        "afma-gpt-sdk-a" == c
          ? (d = b._gmptnl.pm("GAM=", a) || "5")
          : ((d = b.__gmptnl_n || "5"),
            b.webkit.messageHandlers._gmptnl.postMessage("GAM="));
      } catch (e) {
        return "3";
      }
      return _.x(d) ? d : "3";
    };
  _.Wm = function () {
    this.l = [];
    this.j = -1;
  };
  _.Wm.prototype.set = function (a, b) {
    b = void 0 === b ? !0 : b;
    0 <= a &&
      52 > a &&
      0 === a % 1 &&
      this.l[a] != b &&
      ((this.l[a] = b), (this.j = -1));
  };
  _.Wm.prototype.get = function (a) {
    return !!this.l[a];
  };
  _.Xm = function (a) {
    -1 == a.j &&
      (a.j = Xa(a.l, function (b, c, d) {
        return c ? b + Math.pow(2, d) : b;
      }));
    return a.j;
  };
  var $m = function () {
      var a = void 0;
      this.m = a = void 0 === a ? document : a;
      this.j = 0;
      this.o = Ym(this, "__gads=");
      this.w = !1;
      this.l = null;
      this.v = !1;
      Zm(this);
    },
    Zm = function (a) {
      if (!a.o && !a.v && 1 != a.j) {
        a.m.cookie = "GoogleAdServingTest=Good";
        var b = "Good" === Ym(a, "GoogleAdServingTest=");
        if (b) {
          var c = a.m,
            d = new Date();
          d.setTime(new Date().valueOf() + -1);
          c.cookie = "GoogleAdServingTest=; expires=" + d.toGMTString();
        }
        a.w = b;
        a.v = !0;
      }
    },
    Ym = function (a, b) {
      a = a.m.cookie;
      var c = a.indexOf(b);
      if (-1 === c) return "";
      b = c + b.length;
      c = a.indexOf(";", b);
      -1 == c && (c = a.length);
      return a.substring(b, c);
    };
  var an = ub(function () {
      return !(Ec || Fc || Dc) && (Qc || _.zc || (yc && _.Nc(11)));
    }),
    bn = function (a, b, c, d, e) {
      d = void 0 === d ? "" : d;
      var f = a.createElement("link");
      try {
        (f.rel = c),
          (f.href =
            -1 != c.toLowerCase().indexOf("stylesheet")
              ? Fb(b).toString()
              : b instanceof Eb
              ? Fb(b).toString()
              : b instanceof _.Sb
              ? _.Tb(b)
              : _.Tb(_.Wb(b)));
      } catch (g) {
        return null;
      }
      d && "preload" == c && (f.as = d);
      e && f.setAttribute("nonce", e);
      a = a.getElementsByTagName("head")[0];
      if (!a) return null;
      try {
        a.appendChild(f);
      } catch (g) {}
      return f;
    };
  var cn = /^\.google\.(com?\.)?[a-z]{2,3}$/,
    dn = /\.(cn|com\.bi|do|sl|ba|by|ma|am)$/,
    en = _.p,
    gn = function (a) {
      a = "https://" + ("adservice" + a + "/adsid/integrator.js");
      var b = ["domain=" + encodeURIComponent(_.p.location.hostname)];
      fn[3] >= _.Oa() && b.push("adsid=" + encodeURIComponent(fn[1]));
      return a + "?" + b.join("&");
    },
    fn,
    hn,
    jn = function () {
      en = _.p;
      fn = en.googleToken = en.googleToken || {};
      var a = _.Oa();
      (fn[1] && fn[3] > a && 0 < fn[2]) ||
        ((fn[1] = ""), (fn[2] = -1), (fn[3] = -1), (fn[4] = ""), (fn[6] = ""));
      hn = en.googleIMState = en.googleIMState || {};
      a = hn[1];
      (cn.test(a) && !dn.test(a)) || (hn[1] = ".google.com");
      _.z(hn[5]) || (hn[5] = []);
      _.xa(hn[6]) || (hn[6] = !1);
      _.z(hn[7]) || (hn[7] = []);
      _.r(hn[8]) || (hn[8] = 0);
    },
    kn = {
      lb: function () {
        return 0 < hn[8];
      },
      yc: function () {
        hn[8]++;
      },
      zc: function () {
        0 < hn[8] && hn[8]--;
      },
      Ac: function () {
        hn[8] = 0;
      },
      zd: function () {
        return !1;
      },
      Lb: function () {
        return hn[5];
      },
      Hb: function (a) {
        try {
          a();
        } catch (b) {
          _.p.setTimeout(function () {
            throw b;
          }, 0);
        }
      },
      Vb: function () {
        if (!kn.lb()) {
          var a = _.p.document,
            b = function (e) {
              e = gn(e);
              a: {
                try {
                  var f = Aa();
                  break a;
                } catch (g) {}
                f = void 0;
              }
              bn(a, e, "preload", "script", f);
              f = a.createElement("script");
              f.type = "text/javascript";
              f.onerror = function () {
                return _.p.processGoogleToken({}, 2);
              };
              e = Pd(e);
              kc(f, e);
              try {
                (a.head || a.body || a.documentElement).appendChild(f), kn.yc();
              } catch (g) {}
            },
            c = hn[1];
          b(c);
          ".google.com" != c && b(".google.com");
          b = {};
          var d = ((b.newToken = "FBT"), b);
          _.p.setTimeout(function () {
            return _.p.processGoogleToken(d, 1);
          }, 1e3);
        }
      },
    },
    ln = function (a) {
      jn();
      var b = en.googleToken[5] || 0;
      a && (0 != b || fn[3] >= _.Oa() ? kn.Hb(a) : (kn.Lb().push(a), kn.Vb()));
      (fn[3] >= _.Oa() && fn[2] >= _.Oa()) || kn.Vb();
    },
    mn = function (a) {
      _.p.processGoogleToken =
        _.p.processGoogleToken ||
        function (b, c) {
          var d = b;
          d = void 0 === d ? {} : d;
          c = void 0 === c ? 0 : c;
          b = d.newToken || "";
          var e = "NT" == b,
            f = parseInt(d.freshLifetimeSecs || "", 10),
            g = parseInt(d.validLifetimeSecs || "", 10),
            h = d["1p_jar"] || "";
          d = d.pucrd || "";
          jn();
          1 == c ? kn.Ac() : kn.zc();
          var k = (en.googleToken = en.googleToken || {}),
            l =
              0 == c &&
              b &&
              _.x(b) &&
              !e &&
              _.r(f) &&
              0 < f &&
              _.r(g) &&
              0 < g &&
              _.x(h);
          e = e && !kn.lb() && (!(fn[3] >= _.Oa()) || "NT" == fn[1]);
          var m = !(fn[3] >= _.Oa()) && 0 != c;
          if (l || e || m)
            (e = _.Oa()),
              (f = e + 1e3 * f),
              (g = e + 1e3 * g),
              1e-5 > Math.random() &&
                _.Ce(
                  _.p,
                  "https://pagead2.googlesyndication.com/pagead/gen_204?id=imerr&err=" +
                    c
                ),
              (k[5] = c),
              (k[1] = b),
              (k[2] = f),
              (k[3] = g),
              (k[4] = h),
              (k[6] = d),
              jn();
          if (l || !kn.lb()) {
            c = kn.Lb();
            for (b = 0; b < c.length; b++) kn.Hb(c[b]);
            c.length = 0;
          }
        };
      ln(a);
    };
  var nn = function () {
    var a = window,
      b = a.google_ltobserver;
    b && (b.disconnect(), delete a.google_ltobserver);
    a.google_lt_queue && delete a.google_lt_queue;
  };
  var on = function (a) {
    this.j = null;
    this.l = 0;
    this.m = a;
  };
  on.prototype.getOseId = function () {
    this.l || (this.l = _.Rm(0, _.L(7)));
    return this.l;
  };
  var pn = function (a, b) {
      a = void 0 === a ? {} : a;
      b = void 0 === b ? {} : b;
      this.l = a;
      this.j = b;
    },
    qn = function (a, b, c, d) {
      if (!(b && b in a.l)) return !1;
      if (void 0 === d || d || !a.j[b]) a.j[b] = c || "";
      return !0;
    },
    rn = function (a, b) {
      _.I(
        b.j,
        function (c, d) {
          this.j[d] || (this.j[d] = c);
        },
        a
      );
    },
    Og = function (a) {
      return a.j.page_url;
    },
    sn = function (a) {
      var b = {};
      _.I(a.j, function (c, d) {
        d in a.l && (b[a.l[d]] = c);
      });
      return new pn(a.l, b);
    },
    tn = function (a) {
      var b = [];
      _.I(a.j, function (c, d) {
        d in a.l && b.push({ bb: a.l[d], Ub: c });
      });
      return b;
    },
    un = function (a, b, c, d) {
      var e = [],
        f = b.j;
      _.I(d, function (g, h) {
        if (g) {
          g = { bb: g };
          var k = f[h],
            l = [];
          a.forEach(function (m, t) {
            (m = c[_.N(m)]) && m.j[h] && (l[t] = m.j[h]);
          });
          if (l.length || k) l.length && (g.Ic = l), k && (g.Ub = k), e.push(g);
        }
      });
      return e;
    };
  var wn = function () {
      var a = vn();
      this.j = {};
      this.l = {};
      this.D = [];
      this.T = a;
      this.m = new pn(a);
      this.o = {};
      this.L = {};
      this.J = {};
      this.P = {};
      this.R = this.F = "";
      this.v = _.L(36);
      this.H = -1;
      this.M = 0;
      this.O = 2;
      this.A = this.w = !1;
      this.I = {};
      this.K = !1;
      this.C = new _.ol();
      this.N = !1;
    },
    xn = function (a, b) {
      var c = _.N(b);
      a.j[c] || (a.j[c] = b);
    },
    zn = function (a) {
      return _.u(yn(a), function (b) {
        return _.K(140) ? !b.pa : !(b.oa || b.$b);
      });
    },
    An = function (a, b) {
      _.D(b, function (c) {
        _.N(c) in a.j && cm(c);
      });
    },
    Bn = function (a, b) {
      return !a.P[_.N(b)] && (!_.K(150) || !_.em(b));
    },
    th = function (a) {
      var b = 0;
      _.I(a.j, function () {
        b++;
      });
      return b;
    },
    yn,
    sh,
    Cn,
    Dn,
    En,
    Fn,
    Gn,
    Hn,
    In,
    Jn,
    Kn,
    Ln,
    Mn,
    Nn,
    On,
    Qn,
    Rn;
  wn.prototype.toString = function () {
    var a = "[AdData:",
      b = [];
    _.I(this.j, function (c) {
      b.push(c.toString());
    });
    _.I(this.l, function (c, d) {
      b.push("[" + d + "," + c + "]");
    });
    a += b.join();
    return a + "]";
  };
  yn = function (a) {
    var b = [];
    _.I(a.j, function (c) {
      b.push(c);
    });
    return b;
  };
  sh = function (a) {
    a = yn(a);
    a = _.q(a, function (b) {
      return b.w;
    });
    _.ka(a);
    return a;
  };
  Cn = function (a, b, c) {
    if (!Gb(oc(b))) {
      Gb(oc(c)) && (c = "");
      var d = a.l[b];
      a.l[b] = d ? d + "," + c : c;
    }
  };
  Dn = function (a, b) {
    void 0 != b ? Gb(oc(b)) || (a.l[b] && delete a.l[b]) : (a.l = {});
  };
  En = function (a, b) {
    Gb(oc(b)) || eb(a.D, b);
  };
  Fn = function (a, b, c) {
    return qn(a.m, b, c);
  };
  Gn = function (a) {
    var b = [];
    _.I(a.l, function (c, d) {
      b.push(encodeURIComponent(d) + "=" + encodeURIComponent(c));
    });
    0 < a.D.length &&
      !("excl_cat" in a.l) &&
      ((a = a.D.join(",")),
      b.push(encodeURIComponent("excl_cat") + "=" + encodeURIComponent(a)));
    return b.join("&");
  };
  Hn = function (a, b) {
    return _.K(130) ? (a.N ? null : _.V(b)) : a.L[_.N(b)] || null;
  };
  In = function (a, b) {
    return _.K(97) ? _.jm(a, b) || _.V(a, b) : _.jm(a, b);
  };
  Jn = function (a, b, c, d) {
    var e = Yg(c);
    if (!e) return e;
    var f = c === _.V(d, b),
      g = ub(function () {
        return f ? _.lm(d, b) || {} : _.Wd(c, window) || {};
      }),
      h = _.Vl(d)[0],
      k = !1;
    _.z(h) && (k = a.v ? f : 0 == e.x && "center" == g()["text-align"]);
    k &&
      (e.x += Math.round(
        Math.max(0, (f ? c.clientWidth : c.parentElement.clientWidth) - h[0]) /
          2
      ));
    f &&
      ((e.y += Math.round(
        Math.min(parseInt(g()["padding-top"], 10) || 0, c.clientHeight)
      )),
      k ||
        ((a = c.clientWidth),
        (e.x += Math.round(
          Math.min(parseInt(g()["padding-left"], 10) || 0, a)
        ))));
    return e;
  };
  Kn = function (a, b, c) {
    var d = In(b, c);
    if (!d) return null;
    c = Jn(a, c, d, b);
    if (!c) return null;
    d = c && _.rg(d);
    var e = _.kg(13);
    if (d && (0 <= c.x || 0 <= c.y))
      2 == e && (0 === c.x && (c.x = 1), 0 === c.y && (c.y = 1)),
        (a.J[_.N(b)] = c);
    else if (!d && 1 == e) return new _.Dd(-12245933, -12245933);
    return c;
  };
  Ln = function (a) {
    return _.q(a, function (b) {
      return _.Wg(b);
    }).join();
  };
  Mn = function (a) {
    var b = !1;
    a = _.q(a, function (c) {
      c = c.ca;
      0 != c && (b = !0);
      return c;
    });
    return b ? a.join() : void 0;
  };
  Nn = function (a, b) {
    _.D(b, function (c) {
      if (a.j[_.N(c)]) {
        var d = a.j;
        c = _.N(c);
        c in d && delete d[c];
      }
    });
  };
  On = function (a, b) {
    if (!b.length) return [];
    var c = b[0].w;
    return _.q(
      _.u(yn(a), function (d) {
        return d.w == c && !!d.R && !_.db(b, d);
      }),
      function (d) {
        return d.R;
      }
    );
  };
  _.Pn = function (a, b, c, d) {
    var e = b.document;
    a = a.J[_.N(d)] || Kn(a, d, e);
    if (!a || -12245933 == a.y) return !0;
    try {
      var f = qg(b.top.document, b.top).y,
        g = Mj(!0, b),
        h = f + g.height * (c + 1);
      return a.y >= f && a.y <= h;
    } catch (k) {
      return !0;
    }
  };
  Qn = function (a, b) {
    for (var c = [], d = b.length - 1; 0 <= d; d--) {
      var e = b[d];
      if (_.V(e) && _.Pn(a, _.p, 2, e)) break;
      else c.unshift(e);
    }
    return c;
  };
  Rn = function (a, b) {
    var c = null;
    if (_.z(_.Vl(a)[0])) {
      var d = _.pa(_.Vl(a)[0]);
      c = d.next().value;
      d = d.next().value;
      c = { width: c, height: d };
    }
    a: {
      var e = In(a, b);
      a = { Xb: c, Ib: !1 };
      d = void 0 === a ? {} : a;
      a = void 0 === d.Xb ? null : d.Xb;
      b = void 0 === d.uc ? 100 : d.uc;
      c = void 0 === d.Jc ? 50 : d.Jc;
      d = void 0 === d.Ib ? !0 : d.Ib;
      for (var f = _.Oa(), g = !1; e; ) {
        if (!b-- || _.Oa() - f >= c) {
          var h = !1;
          break a;
        }
        switch (e.nodeType) {
          case 9:
            try {
              if ((h = e.parentWindow || e.defaultView)) {
                var k = h.frameElement;
                if (k && Rd(h.parent)) {
                  e = k;
                  break;
                }
              }
            } catch (A) {}
            e = null;
            break;
          case 1:
            var l = e,
              m;
            if ((m = d)) {
              b: {
                try {
                  if (
                    0 < l.offsetWidth &&
                    0 < l.offsetHeight &&
                    l.style &&
                    "none" !== l.style.display &&
                    "hidden" !== l.style.visibility &&
                    (!l.style.opacity || 0 !== Number(l.style.opacity))
                  ) {
                    var t = l.getBoundingClientRect();
                    var y = 0 < t.right && 0 < t.bottom;
                    break b;
                  }
                } catch (A) {}
                y = !1;
              }
              m = !y;
            }
            if (m) {
              h = !1;
              break a;
            }
            g ||
              (/^html|body$/i.test(l.tagName)
                ? (g = null)
                : ((g = l.style.position || (_.Wd(l, window) || {}).position),
                  (g = /^fixed/i.test(g) ? l : null)),
              (g =
                !!g &&
                (!a ||
                  g.offsetWidth * g.offsetHeight <= 4 * a.width * a.height)));
            e = e.parentNode;
        }
      }
      h = g;
    }
    return h;
  };
  var Sn, Tn;
  Sn = 0;
  Tn = function () {
    var a = new Ad();
    this.cb =
      a.j.getUTCFullYear() + nc(a.j.getUTCMonth() + 1) + nc(a.j.getUTCDate());
    this.j = [];
    this.V = !1;
    this.I = "";
    this.C = NaN;
    this.R = "json_html";
    this.w = "fif";
    this.v = 1;
    this.K = !1;
    this.m = "";
    this.J = [];
    this.persistentRoadblocksOnly = !1;
    this.videoPodNumber = this.videoPodPosition = NaN;
    this.O = this.P = "";
    this.N = !1;
    this.videoStreamCorrelator = NaN;
    this.A = 0;
    this.T = this.M = this.H = "";
    this.D = [];
    this.L = this.l = 0;
    this.o = [];
    this.F = {};
    this.W = {};
  };
  _.Un = function (a, b) {
    b = _.N(b);
    a.F[b] || (a.F[b] = window == window.top ? (++Sn).toString(36) : _.pc());
    return a.F[b];
  };
  var vn = function () {
    var a = {};
    return (
      (a.adsense_channel_ids = "channel"),
      (a.adsense_ad_types = "ad_type"),
      (a.adsense_ad_format = "format"),
      (a.adsense_background_color = "color_bg"),
      (a.adsense_border_color = "color_border"),
      (a.adsense_link_color = "color_link"),
      (a.adsense_text_color = "color_text"),
      (a.adsense_url_color = "color_url"),
      (a.page_url = "url"),
      (a.adsense_allow_expandable_ads = "ea"),
      (a.adsense_content_section = "region"),
      (a.adsense_cpm = "cpm"),
      (a.adsense_encoding = "oe"),
      (a.adsense_family_safe = "adsafe"),
      (a.adsense_flash_version = "flash"),
      (a.adsense_font_face = "f"),
      (a.adsense_font_size = "fs"),
      (a.adsense_hints = "hints"),
      (a.adsense_host = "host"),
      (a.adsense_host_channel = "h_ch"),
      (a.adsense_host_tier_id = "ht_id"),
      (a.adsense_keyword_type = "kw_type"),
      (a.adsense_keywords = "kw"),
      (a.adsense_relevant_content = "contents"),
      (a.adsense_targeting = "targeting"),
      (a.adsense_targeting_types = "targeting"),
      (a.adsense_test_mode = "adtest"),
      (a.alternate_ad_iframe_color = "alt_color"),
      (a.alternate_ad_url = "alternate_ad_url"),
      (a.demographic_age = "cust_age"),
      (a.demographic_ch = "cust_ch"),
      (a.demographic_gender = "cust_gender"),
      (a.demographic_interests = "cust_interests"),
      (a.demographic_job = "cust_job"),
      (a.demographic_l = "cust_l"),
      (a.demographic_lh = "cust_lh"),
      (a.demographic_u_url = "cust_u_url"),
      (a.demographic_unique_id = "cust_id"),
      (a.document_language = "hl"),
      (a.geography_override_city = "gcs"),
      (a.geography_override_country = "gl"),
      (a.google_content_recommendation_ad_positions = "ad_pos"),
      (a.matched_content_columns_num = "cr_col"),
      (a.matched_content_rows_num = "cr_row"),
      (a.matched_content_ui_type = "crui"),
      (a.matched_content_use_square_imgs = "cr_sq_img"),
      a
    );
  };
  var Vn = function () {
    var a = Oh.B();
    this.getAllEvents = S(563, function () {
      return Hh ? a.j.slice() : [];
    });
    this.getEventsByService = S(564, function (b) {
      return Hh ? Ph(a, b).slice() : [];
    });
    this.getEventsBySlot = S(565, function (b) {
      return Hh ? Qh(a, b).slice() : [];
    });
    this.getEventsByLevel = S(566, function (b) {
      return Hh ? Rh(a, b).slice() : [];
    });
  };
  _.v(Vn, Eg);
  var Wn = function (a, b) {
      a: {
        b = b[0];
        a = a[0];
        for (var c = kb, d = Math.min(b.length, a.length), e = 0; e < d; e++) {
          var f = c(b[e], a[e]);
          if (0 != f) {
            b = f;
            break a;
          }
        }
        b = kb(b.length, a.length);
      }
      return b;
    },
    Xn = function () {
      var a = this,
        b = [],
        c = !1,
        d = Oh.B();
      this.addSize = _.R(88, function (e, f) {
        var g;
        (g = !Ml(e) || "fluid" === e) ||
          ((g = Ml(f)) || (g = _.z(f) && $a(f, Ml)), (g = !g));
        if (g) return (c = !0), d.G(U("SizeMappingBuilder.addSize", [e, f])), a;
        b.push([e, f]);
        return a;
      });
      this.build = _.R(89, function () {
        if (c) return d.G(pi()), null;
        nb(b, Wn);
        return b;
      });
    };
  var Zn, $n, ao;
  _.Yn = function (a) {
    var b =
      "performance" in window && "now" in performance
        ? performance.now.bind(performance)
        : _.Oa;
    for (a = b() + a; b() < a; );
    b();
  };
  Zn = function (a, b) {
    b >= a.length ||
      (_.Yn(a[b]),
      window.requestAnimationFrame(function () {
        return Zn(a, ++b);
      }));
  };
  $n = function (a) {
    window.requestAnimationFrame(function () {
      return Zn(a, 0);
    });
  };
  ao = function () {
    if (_.Fa(window.requestAnimationFrame)) {
      var a = _.mg(2);
      a.length &&
        ((a = a.map(function (b) {
          return _.fe(b, 0);
        })),
        $n(a));
    }
  };
  var bo = 0,
    co = function () {
      try {
        var a = _.Il.B(),
          b = _.L(152);
        b &&
          b.length &&
          _.D(b, function () {
            return a.l(b);
          });
        a.j(3);
      } catch (c) {
        _.yh(408, c, !0);
      }
    },
    eo = _.R(
      297,
      function (a) {
        _.D(a.getElementsByTagName("script"), function (b) {
          var c = b.src;
          !c ||
            (-1 == c.indexOf("/tag/js/gpt.js") &&
              -1 == c.indexOf("/tag/js/gpt_mobile.js")) ||
            !b.innerHTML ||
            b.googletag_executed ||
            ((b.googletag_executed = !0), eval(b.innerHTML));
        });
      },
      function (a, b) {
        _.xh(a, b);
        window.console && window.console.error && window.console.error(b);
      }
    ),
    fo = function () {
      bo = _.Gf();
      co();
      try {
        _.K(79) || nn(),
          ao(),
          Hg("defineOutOfPageSlot", Fm),
          Hg("defineSlot", Cm),
          Hg("defineUnit", Cm),
          Hg("destroySlots", Dm),
          Hg("getWindowsThatCanCommunicateWithHostpageLibrary", wm),
          Hg("display", Gm),
          nl(),
          Hg("getEventLog", function () {
            return new Vn();
          }),
          Hg(
            "sizeMapping",
            _.R(90, function () {
              return new Xn();
            })
          ),
          Hg("apiReady", !0),
          _.Gg().fifWin && "complete" != document.readyState
            ? Ig(window, function () {
                window.setTimeout(function () {
                  Lj();
                }, 0);
              })
            : Lj(),
          eo(document),
          Ah();
      } catch (a) {
        _.yh(106, a);
      }
    };
  var go;
  go = function () {
    var a = void 0 === a ? document : a;
    var b = (this.j = {});
    a = a.URL.split("?");
    a = _.pa(a[a.length - 1].split("&"));
    for (var c = a.next(); !c.done; c = a.next())
      if (((c = c.value.split("=")), c[0])) {
        var d = c[0].toLowerCase();
        if ("google_domain_reset_url" != d)
          try {
            if (1 < c.length) {
              var e = c[1];
              var f = window.decodeURIComponent
                ? decodeURIComponent(e.replace(Tg, " "))
                : unescape(e);
            } else f = "";
            b[d] = f;
          } catch (g) {}
      }
  };
  _.ho = function (a, b) {
    return a.j[b] || null;
  };
  var io = rf(
    function (a) {
      return a && a.src
        ? /^(?:https?:)?\/\/(?:www\.googletagservices\.com|securepubads\.g\.doubleclick\.net)\/tag\/js\/gpt(?:_[a-z]+)*\.js/.test(
            a.src
          )
          ? 0
          : 1
        : 2;
    },
    function (a, b) {
      return a + "\x0B" + (b[0] && b[0].src);
    }
  );
  var jo = null,
    ko = function (a, b, c, d) {
      try {
        var e;
        if (!(e = !b)) {
          var f;
          if (!(f = !_.Tm(b, c, !1, void 0 === d ? 100 : d))) {
            a: {
              do {
                var g = _.Wd(b, c);
                if (g && "fixed" == g.position) {
                  var h = !1;
                  break a;
                }
              } while ((b = b.parentElement));
              h = !0;
            }
            f = !h;
          }
          e = f;
        }
        e && (a.height = -1);
      } catch (k) {
        (a.width = -1), (a.height = -1);
      }
    },
    lo = rf(_.Wd, function (a, b) {
      return a + "_" + Ja(b[0]);
    }),
    mo = function (a, b, c) {
      if (!a) return 256;
      if (c) return 67108864;
      c = 0;
      var d = _.pk(a);
      wk(d, b) && (c |= 64);
      switch (b) {
        case 2:
        case 1:
          d = 0;
          try {
            d |= a != a.top ? 512 : 0;
            var e = Math.min(a.screen.width || 0, a.screen.height || 0);
            d |= e ? (320 > e ? 8192 : 0) : 2048;
            var f;
            if ((f = a.navigator)) {
              var g = a.navigator.userAgent;
              f =
                /Firefox/.test(g) ||
                /Android 2/.test(g) ||
                /iPhone OS [34]_/.test(g) ||
                /Windows Phone (?:OS )?[67]/.test(g);
            }
            d |= f ? 1048576 : 0;
          } catch (t) {
            d |= 32;
          }
          e = d;
          f = 0;
          try {
            (f |= _.rk(a) ? 0 : 8), (f |= uk(a)), (f |= vk(a));
          } catch (t) {
            f |= 32;
          }
          if (2 == b) {
            a: {
              b = a.document;
              var h = a.innerWidth;
              g = _.pk(a).improveCollisionDetection;
              var k = Math.round((a.innerWidth / 320) * 50 + 15);
              d = [];
              for (var l = 0; 3 > l; l++)
                for (var m = 0; 3 > m; m++)
                  d.push({ x: (m / 2) * h, y: (l / 2) * k });
              for (h = 0; h < d.length; h++) {
                if (
                  (l = k = b.elementFromPoint(d[h].x, d[h].y)) &&
                  !(l = "fixed" == _.Se(k, "position")) &&
                  (l = 1 == g)
                )
                  b: {
                    l = a.document;
                    for (
                      k = k.offsetParent;
                      k && k != l.body;
                      k = k.offsetParent
                    )
                      if ("fixed" == _.Se(k, "position")) {
                        l = !0;
                        break b;
                      }
                    l = !1;
                  }
                if (l) {
                  a = !0;
                  break a;
                }
              }
              a = !1;
            }
            a && (f |= 16777216);
          }
          return c | e | f;
        case 8:
          e = 0;
          try {
            (e |= a != a.top ? 512 : 0),
              (e |=
                a.navigator && /Android 2/.test(a.navigator.userAgent)
                  ? 1048576
                  : 0);
          } catch (t) {
            e |= 32;
          }
          f = 0;
          try {
            (f |= uk(a)), (f |= vk(a)), (f |= _.rk(a) ? 0 : 8);
          } catch (t) {
            f |= 32;
          }
          return c | e | f;
        default:
          return c | 32;
      }
    },
    no = function (a, b, c, d, e) {
      c = void 0 === c ? "" : c;
      d =
        void 0 === d
          ? function (h) {
              return !!h;
            }
          : d;
      e = void 0 === e ? "," : e;
      var f = [],
        g = !1;
      _.D(a, function (h) {
        h = b(h);
        var k = d(h);
        g = g || k;
        f.push(String(k ? h : c));
      });
      return g ? f.join(e) : null;
    },
    oo = function (a) {
      var b = Cb(a.v);
      a = _.ib(a.W);
      a.length && null == b.excl_cat && (b.excl_cat = a);
      return b;
    },
    po = function (a, b) {
      var c = {};
      _.I(a, function (d, e) {
        if (b[e]) {
          var f = _.u(b[e], function (g) {
            return -1 < d.indexOf(g);
          });
          f.length && (c[e] = f);
        }
      });
      return c;
    },
    qo = function (a, b) {
      b =
        void 0 === b
          ? function () {
              return !0;
            }
          : b;
      a = oo(a);
      var c = [];
      _.I(a, function (d, e) {
        d = _.u(d, function (g) {
          return b(g, e);
        });
        if (d.length) {
          d = _.q(d, encodeURIComponent);
          var f = encodeURIComponent(e);
          c.push(f + "=" + d.join());
        }
      });
      return c;
    },
    ro = function (a, b, c, d, e) {
      this.l = b;
      this.Ca = c;
      this.m = d;
      this.v = (this.A = a) || _.K(139);
      this.j = e;
      this.C = [];
      this.o = "";
      this.F = vn();
      this.w = [];
      this.D = [];
    },
    uo = function (a) {
      var b = void 0 === b ? window : b;
      var c = a.j.j;
      if (!_.z(c)) return "";
      if (a.A) 0 == c.length && (c = yn(a.l));
      else {
        if (0 == c.length) return "";
        1 < c.length && (c = [c[0]]);
      }
      var d = !!vk(_.p);
      c = _.u(c, function (e) {
        return d && _.Wl(e)
          ? (Oh.B().G(Cj(String(e.getAdUnitPath()))), !1)
          : !0;
      });
      if (!c.length) return "";
      30 < c.length &&
        (Oh.B().G(uj("30", String(c.length), String(c.length - 30))),
        (c = jb(c, 0, 30)));
      so(a, c, b);
      to(a);
      return a.o;
    },
    vo = function (a, b) {
      try {
        var c = b.top;
        var d = qg(c.document, c);
      } catch (e) {
        d = new _.Dd(-12245933, -12245933);
      }
      W(a, "scr_x", Math.round(d.x), { ea: !0 });
      W(a, "scr_y", Math.round(d.y), { ea: !0 });
    },
    wo = function (a) {
      _.L(242) &&
        (W(a, "blev", Math.floor(100 * _.L(243)) / 100),
        W(a, "bisch", _.L(244) ? 1 : 0));
    },
    xo = function (a) {
      var b = window;
      var c = b.document.domain;
      var d = b.document.cookie,
        e = b.history.length,
        f = b.screen,
        g = b.document.referrer;
      if ($e()) c = _.lf().gaGlobal || {};
      else {
        var h = Math.round(new Date().getTime() / 1e3),
          k = b.google_analytics_domain_name;
        c = "undefined" == typeof k ? Nm("auto", c) : Nm(k, c);
        var l = -1 < d.indexOf("__utma=" + c + "."),
          m = -1 < d.indexOf("__utmb=" + c),
          t;
        (t = (df() || _.lf()).gaGlobal) ||
          ((t = {}), ((df() || _.lf()).gaGlobal = t));
        var y = !1;
        if (l)
          (g = d
            .split("__utma=" + c + ".")[1]
            .split(";")[0]
            .split(".")),
            m ? (t.sid = g[3]) : t.sid || (t.sid = h + ""),
            (t.vid = g[0] + "." + g[1]),
            (t.from_cookie = !0);
        else {
          t.sid || (t.sid = h + "");
          if (!t.vid) {
            y = !0;
            m = Math.round(2147483647 * Math.random());
            l = [
              Km.appName,
              Km.version,
              Km.language ? Km.language : Km.browserLanguage,
              Km.platform,
              Km.userAgent,
              Lm() ? 1 : 0,
            ].join("");
            f
              ? (l += f.width + "x" + f.height + f.colorDepth)
              : _.p.java &&
                _.p.java.awt &&
                ((f = _.p.java.awt.Toolkit.getDefaultToolkit().getScreenSize()),
                (l += f.screen.width + "x" + f.screen.height));
            l = l + d + (g || "");
            for (g = l.length; 0 < e; ) l += e-- ^ g++;
            t.vid = (m ^ (Mm(l) & 2147483647)) + "." + h;
          }
          t.from_cookie = !1;
        }
        if (!t.cid) {
          b: for (
            h = 999,
              k &&
                ((k = 0 == k.indexOf(".") ? k.substr(1) : k),
                (h = k.split(".").length)),
              k = 999,
              d = d.split(";"),
              g = 0;
            g < d.length;
            g++
          )
            if ((f = Om.exec(d[g]) || Pm.exec(d[g]) || Qm.exec(d[g]))) {
              e = f[1] || 0;
              if (e == h) {
                var A = f[2];
                break b;
              }
              e < k && ((k = e), (A = f[2]));
            }
          y && A && -1 != A.search(/^\d+\.\d+$/)
            ? (t.vid = A)
            : A != t.vid && (t.cid = A);
        }
        t.dh = c;
        t.hid || (t.hid = Math.round(2147483647 * Math.random()));
        c = t;
      }
      W(a, "ga_vid", c.vid, { X: !1 });
      W(a, "ga_sid", c.sid, { X: !1 });
      W(a, "ga_hid", c.hid, { X: !1 });
      W(a, "ga_fc", c.from_cookie, { X: !1 });
      W(a, "ga_cid", c.cid, { X: !1 });
      W(a, "ga_wpids", b.google_analytics_uacct);
    },
    so = function (a, b, c) {
      c = void 0 === c ? window : c;
      var d = c.document;
      fm(b[0], hf(c));
      W(a, "gdfp_req", 1, { X: !1 });
      W(a, "pvsid", a.j.C);
      W(a, "correlator", a.j.I);
      W(a, "output", a.j.R, { X: !1 });
      W(a, "callback", a.j.m, { X: !1 });
      W(a, "impl", a.j.w, { X: !1 });
      (a.m && 1 == a.m.j) || (W(a, "adsid", a.j.H), W(a, "pucrd", a.j.T));
      W(a, "jar", a.j.M);
      a.j.persistentRoadblocksOnly && W(a, "per_only", 1);
      a.A && W(a, "json_a", 1);
      a.j.N &&
        (W(a, "hxva", 1, { X: !1 }), W(a, "cmsid", a.j.O), W(a, "vid", a.j.P));
      isNaN(a.j.videoPodNumber) || W(a, "pod", a.j.videoPodNumber, { X: !1 });
      isNaN(a.j.videoPodPosition) ||
        W(a, "ppos", a.j.videoPodPosition, { X: !1 });
      isNaN(a.j.videoStreamCorrelator) ||
        W(a, "scor", a.j.videoStreamCorrelator, { X: !1 });
      yo(a);
      W(a, "vrg", mh());
      a.m && 0 !== a.m.j && W(a, "co", a.m.j, { ea: !0 });
      zo(a);
      1 === a.l.M && W(a, "kfa", 1);
      Ao(a, b[0].w);
      Bo(a);
      var e = $a(b, function (h) {
        return 0 < h.A && !ll(h.ka());
      });
      Co(a, c, e);
      W(a, "sc", _.L(6) ? 1 : 0, { ea: !0 });
      window.postMessage && W(a, "sfv", _.tl());
      W(a, "ecs", a.j.cb);
      a.v
        ? (Do(a, b, d), Eo(a), Fo(a, b))
        : (Go(a, b[0]), Ho(a, b[0]), Uo(a, b[0], d), Eo(a), Vo(a, b[0]));
      Wo(a, b);
      Xo(a, c);
      null != _.ho(a.Ca, "google_preview") &&
        W(a, "gct", _.ho(a.Ca, "google_preview"));
      if (a.l.w) {
        W(a, "is_amp", "1");
        W(a, "amp_v", af());
        W(a, "act", bf());
        ef &&
          !/^https:\/\/d-\d+\.ampproject\.net\/\d+\/frame\.html$/.test(
            c.location.href
          ) &&
          W(a, "ati", 1);
        (e = ff(c)) && W(a, "apn", e.substr(0, 10));
        try {
          var f = JSON.parse(c.context.cachedFrameName_);
          f.attributes &&
            f.attributes.useSameDomainRenderingUntilDeprecated &&
            W(a, "asd", 1);
        } catch (h) {}
      } else Yo(a);
      c == c.top && W(a, "abxe", 1);
      (f = _.lg(10)) && W(a, "expflags", f);
      Zo(a, b, c);
      f = {};
      f.u_tz = -new Date().getTimezoneOffset();
      f.u_his = gf();
      f.u_java =
        !!rd.navigator &&
        "unknown" !== typeof rd.navigator.javaEnabled &&
        !!rd.navigator.javaEnabled &&
        rd.navigator.javaEnabled();
      rd.screen &&
        ((f.u_h = rd.screen.height),
        (f.u_w = rd.screen.width),
        (f.u_ah = rd.screen.availHeight),
        (f.u_aw = rd.screen.availWidth),
        (f.u_cd = rd.screen.colorDepth));
      rd.navigator &&
        rd.navigator.plugins &&
        (f.u_nplug = rd.navigator.plugins.length);
      rd.navigator &&
        rd.navigator.mimeTypes &&
        (f.u_nmime = rd.navigator.mimeTypes.length);
      $o(a, f);
      ap(a);
      try {
        var g = mf();
      } catch (h) {
        g = "0";
      }
      W(a, "flash", g, { X: !1, ea: !0 });
      bp(a, b, c);
      _.K(2) || cp(a, c);
      (_.K(82) || _.K(84) || _.Ng.B().j) && W(a, "rumc", _.dh, { X: !1 });
      _.K(83) && W(a, "rume", 1, { X: !1 });
      W(a, "vis", _.kk(d), { X: !1 });
      0 === io(_.L(172)) || W(a, "stss", io(_.L(172)));
      !a.l.w && dp(c) && W(a, "arp", 1, { X: !1 });
      _.p.navigator &&
        _.p.navigator.deviceMemory &&
        W(a, "dmc", _.p.navigator.deviceMemory);
      vo(a, c);
      ep(a, b, c);
      wo(a);
      0 < a.j.D.length && W(a, "psts", a.j.D);
      xo(a);
      _.K(23) && (W(a, "js", Um(c)), W(a, "ms", Vm(a.j.C.toString(), c)));
      fp(a, c, b);
      0 != _.lh(a.A) &&
        0 != a.j.o.length &&
        ((b = pb(a.j.o, a.j.j) ? -1 : a.j.o.length), W(a, "optslots", b));
    },
    ep = function (a, b, c) {
      if (!_.K(51)) {
        var d = [],
          e = [];
        _.D(b, function (f) {
          a: {
            if (!f.Ga) {
              var g = (g = _.V(f)) && g.parentElement;
              if (!g) {
                g = null;
                break a;
              }
              f.Ga = _.Wd(g, window);
            }
            g = f.Ga;
          }
          if ((g = _.ve(g)) && (1 != g[0] || 1 != g[3]))
            d.push("-1x-1"), e.push("-1x-1");
          else if (a.v || mm(f)) {
            var h = (g = _.V(f)) && g.parentElement,
              k = _.km(f) || new _.Ed(0, 0);
            ko(k, h, c);
            d.push(k.width + "x" + k.height);
            _.K(58) ||
              (f.vb || (f.vb = jh(_.V(f))),
              (f = f.vb || new _.Ed(0, 0)),
              ko(f, g, c, 1),
              -1 == k.height && (f.height = -1),
              e.push(f.width + "x" + f.height));
          }
        });
        W(a, "psz", d, { Fa: "|" });
        W(a, "msz", e, { Fa: "|" });
      }
    },
    fp = function (a, b, c) {
      var d = _.K(31) ? lo : _.Wd,
        e = [];
      _.D(c, function (f) {
        var g = new _.Wm(),
          h = _.V(f);
        if (h) {
          f = Mj(!0, b).width;
          if (null !== b && b != b.top) {
            var k = Mj(!1, b).width;
            (-12245933 == f || -12245933 == k || k < f) && g.set(8);
          }
          for (k = 0; h && 100 > k; k++, h = h.parentElement) {
            var l = d(h, b);
            if (l) {
              if (l.overflowY && "visible" != l.overflowY) {
                g.set(2);
                break;
              }
              if ("none" == l.display) {
                g.set(7);
                break;
              }
              "IFRAME" == h.nodeName && parseInt(l.width, 10) < f && g.set(8);
            } else g.set(3);
          }
        } else g.set(1);
        e.push(_.Xm(g));
      });
      W(a, "fws", e);
    },
    Yo = function (a) {
      switch (_.kg(10)) {
        case 1:
          var b = 190;
          break;
        case 3:
          b = 191;
          break;
        case 2:
          b = 192;
          break;
        default:
          return;
      }
      W(a, "amp_v", _.L(b));
    },
    hp = function (a, b, c) {
      var d = [],
        e = [];
      _.D(b, function (f) {
        f = Kn(a.l, f, c) || gp;
        d.push(Math.round(f.x));
        e.push(Math.round(f.y));
      });
      W(a, "adxs", d);
      W(a, "adys", e);
    },
    ip = function (a, b) {
      return _.q(
        b,
        a.A
          ? function (c) {
              var d;
              _.K(143) ? (d = c.Wa || Xg(c, Hn(a.l, c))) : (d = Xg(c));
              return (c.Wa = d);
            }
          : function (c) {
              return c.Wa || Xg(c, Hn(a.l, c));
            }
      ).join(",");
    },
    Co = function (a, b, c) {
      var d = {},
        e = Ud(b);
      _.D(Sa, function (f) {
        d[f] = mo(e, f, c);
      });
      W(a, "plat", xk(d) || null);
    },
    bp = function (a, b, c) {
      c = void 0 === c ? window : c;
      var d = c.document;
      b = a.v ? Og(a.l.m) : Pg(b[0], a.l.o) || Og(a.l.m);
      var e = Zg(d.URL, _.ho(a.Ca, "google_preview")),
        f = Zg(d.referrer, _.ho(a.Ca, "google_preview"));
      d = !1;
      if (null != b) {
        var g = e;
        nf(c) || ((f = ""), (d = !0));
      } else b = e;
      a.l.w && (f = (f = $e()) && f.referrer);
      if (_.K(2)) W(a, "url", b), W(a, "ref", f);
      else {
        e = new Cf(c);
        var h = e.j[0].depth,
          k = h && 0 < h;
        if (k && (W(a, "nhd", h), c.location.ancestorOrigins)) {
          h = [];
          for (var l = Math.min(e.j.length, 27), m = 1; m < l; m++)
            e.j[m] && e.j[m].url && (h[m - 1] = e.j[m].url);
          h = Df(e, h.reverse());
          W(a, "iag", h);
          h = e.j;
          l = [];
          for (m = h.length - 1; 0 < m; m--) {
            var t = h[m];
            t && null != t.url && l.push(tf(t.url.match(_.sf)[3] || null));
          }
          h = Af(l);
          0 < h && W(a, "mdo", h);
        }
        W(a, "url", b);
        null != g && g != b && W(a, "loc", g);
        W(a, "ref", f);
        k &&
          (g = e.j[Math.max(e.j.length - 1, 0)].url) &&
          W(a, "top", d ? tf(g.match(_.sf)[3] || null) : g);
        if (_.K(37)) {
          if (
            !c.location ||
            !c.location.ancestorOrigins ||
            2 >= c.location.ancestorOrigins.length
          )
            c = "";
          else {
            g = [];
            for (
              b = 1;
              10 > g.length && b < c.location.ancestorOrigins.length - 1;
              b++
            )
              (d = c.location.ancestorOrigins[b]),
                g.push((pe(d) || d).substr(0, 20));
            c = g.join();
          }
          c && W(a, "aor", c);
        }
      }
    },
    cp = function (a, b) {
      b = void 0 === b ? window : b;
      var c = b.document,
        d = c.scripts;
      d && W(a, "dssz", d.length);
      b = new Cf(b);
      if (
        (d = b.l.document && b.l.document.scripts ? b.l.document.scripts : [])
      ) {
        for (var e = [], f = d.length - 1; 0 <= f && 26 > e.length; )
          d[f].src && e.unshift(d[f].src), f--;
        d = Df(b, e);
      } else d = 0;
      W(a, "icsg", d, { ea: !0 });
      if (
        (b = b.l.document && b.l.document.scripts ? b.l.document.scripts : [])
      ) {
        d = [];
        for (e = b.length - 1; 0 <= e; e--)
          (f = b[e]) &&
            null != f.src &&
            d.push(tf(f.src.match(_.sf)[3] || null));
        b = Af(d);
      } else b = 0;
      W(a, "mso", b);
      b = Error();
      b.stack &&
        ((d = b.stack),
        (e = d.split(/\r\n|\r|\n/).length),
        "Error" == d.slice(0, 5) && e--,
        (d = e - 13),
        0 > d &&
          ((d = 0),
          (e = new _.oh("gpt_negative_stack_trace", Ug(), _.L(23))),
          _.Q(e, a.l),
          _.O(e, "stackTrace", b.stack),
          _.qh(e)),
        W(a, "std", d, { ea: !0 }));
      c.currentScript &&
        c.currentScript.text &&
        W(a, "csl", c.currentScript.text.length);
    },
    Vo = function (a, b) {
      var c = qo(b);
      W(a, "scp", c, { Fa: "&" });
      b = b.Zb;
      0 < b && W(a, "audextid", b);
    },
    jp = function (a) {
      a = _.q(a, oo);
      for (var b = a.shift() || {}; a.length; ) b = po(b, a.shift());
      return b;
    },
    Fo = function (a, b) {
      var c;
      _.K(49) && 1 < b.length
        ? (c = kp(a, b))
        : (c = _.q(b, function (d) {
            return qo(d).join("&");
          }));
      b = c;
      b.join("|").length == c.length - 1 && (b = null);
      W(a, "prev_scp", b, { Fa: "|" });
    },
    kp = function (a, b) {
      var c = [],
        d = jp(b);
      _.D(b, function (f) {
        f = qo(f, function (g, h) {
          h = d[h];
          return !h || -1 == h.indexOf(g);
        });
        c.push(f.join("&"));
      });
      var e = [];
      _.I(d, function (f, g) {
        f = _.q(f, encodeURIComponent);
        g = encodeURIComponent(g);
        e.push(g + "=" + f.join());
      });
      e.length && W(a, "csp", e, { Fa: "&" });
      return c;
    },
    $o = function (a, b) {
      _.I(b, function (c, d) {
        W(a, d, c, { X: !1 });
      });
    },
    zo = function (a) {
      var b = a.l.H;
      -1 !== b && W(a, "tfcd", b, { ea: !0 });
    },
    Go = function (a, b) {
      b = b.cc;
      -1 !== b && W(a, "tfcd", b, { ea: !0 });
    },
    Ao = function (a, b) {
      var c = _.L(221);
      De = _.K(24);
      b = Oe(c, b);
      b.Ua && W(a, "npa", 1);
      b.zb && (W(a, "vcd", b.zb), b.Nb && W(a, "gvcd", b.Nb));
      W(a, "guci", b.Ra);
    },
    Bo = function (a) {
      var b = a.l.O;
      2 !== b && W(a, "tfua", b, { ea: !0 });
    },
    Ho = function (a, b) {
      b = b.Ab;
      2 !== b && W(a, "tfua", b);
    },
    Eo = function (a) {
      (a.m && 1 == a.m.j) || W(a, "ppid", a.l.R, { ea: !0 });
    },
    Wo = function (a, b) {
      var c = 1 != a.j.v,
        d = b[0].ga;
      var e = a.l.o;
      if (null != Og(a.l.m)) b = !0;
      else {
        for (var f = !1, g = 0; g < b.length && !f; g++)
          f = null != Pg(b[g], e);
        b = f;
      }
      e = a.j.K;
      f = 3 == a.j.v;
      g = _.L(46);
      var h = new _.Wm();
      h.set(0, c);
      h.set(1, d);
      h.set(2, b);
      h.set(3, e);
      h.set(4, f);
      h.set(5, g);
      c = _.Xm(h);
      0 < c && W(a, "eri", c);
    },
    Xo = function (a, b) {
      W(a, "cust_params", Gn(a.l));
      a.m &&
        1 != a.m.j &&
        (W(a, "cookie", Ym(a.m, "__gads="), { ea: !0 }),
        a.m.w && W(a, "cookie_enabled", "1", { ea: !0 }));
      var c = a.l.F;
      c && W(a, "uule", c);
      a.m &&
        1 != a.m.j &&
        ((c = b.document),
        (b = (Og(a.l.m) || Vg(b)) != c.URL ? c.domain : "") && W(a, "cdm", b));
      _.K(6) ||
        ((b = new _.Wm()),
        _.p.SVGElement && _.p.document.createElementNS && b.set(0),
        (c = le()),
        c["allow-top-navigation-by-user-activation"] && b.set(1),
        c["allow-popups-to-escape-sandbox"] && b.set(2),
        _.p.crypto && _.p.crypto.subtle && b.set(3),
        _.p.TextDecoder && _.p.TextEncoder && b.set(4),
        (b = _.Xm(b)),
        W(a, "bc", b));
    },
    Zo = function (a, b, c) {
      var d = c.document;
      0 < navigator.userAgent.indexOf("MSIE ") &&
        qn(a.l.m, "adsense_encoding", d.charset, !1);
      W(a, "lmt", (Date.parse(c.document.lastModified) / 1e3).toString());
      var e = _.K(43) ? _.Gf() : new Date().getTime();
      W(a, "dt", e, { X: !1 });
      try {
        e = bo;
        var f = Math.min(
          If("domLoading") || Infinity,
          If("domInteractive") || Infinity
        );
        var g =
          Infinity == f
            ? Math.max(If("responseEnd"), If("navigationStart"))
            : f;
        0 < g &&
          e >= g &&
          (W(a, "dlt", g, { X: !1 }), W(a, "idt", e - g, { X: !1 }));
      } catch (t) {
        W(a, "idt", -9, { X: !1 }), _.xh(479, t);
      }
      W(a, "deb", _.ho(a.Ca, "deb"));
      W(a, "haonly", _.ho(a.Ca, "haonly"));
      if (null == jo) {
        a: {
          g = c.navigator;
          f = g.userAgent;
          e = g.platform;
          var h = /WebKit\/(\d+)/,
            k = /rv:(\d+\.\d+)/,
            l = /rv:1\.8([^.]|\.0)/;
          if (
            /Win|Mac|Linux|iPad|iPod|iPhone/.test(e) &&
            !/^Opera/.test(f) &&
            ((h = (h.exec(f) || [0, 0])[1]),
            (k = (k.exec(f) || [0, 0])[1]),
            (/Win/.test(e) && /Trident/.test(f) && 11 <= d.documentMode) ||
              (!h && "Gecko" === g.product && 27 <= k && !l.test(f)) ||
              536 <= h)
          ) {
            g = !0;
            break a;
          }
          g = !1;
        }
        f = of(c, c.document, 500, 300);
        jo = g && !f;
      }
      jo || W(a, "ea", "0", { ea: !0 });
      f = g = _.lf();
      for (e = 0; g && g != g.parent; ) (g = g.parent), e++, Rd(g) && (f = g);
      e = f;
      g = e.location.href;
      e == e.top
        ? (g = { url: g, Qb: !0 })
        : ((f = !1),
          (l = e.document) &&
            l.referrer &&
            ((g = l.referrer), e.parent == e.top && (f = !0)),
          (e = e.location.ancestorOrigins) &&
            (e = e[e.length - 1]) &&
            -1 == g.indexOf(e) &&
            ((f = !1), (g = e)),
          (g = { url: g, Qb: f }));
      f = g;
      g = of(_.lf(), d, c.google_ad_width, c.google_ad_height);
      f = f.Qb;
      e = _.lf();
      e = e.top == e ? 0 : Rd(e.top) ? 1 : 2;
      l = 4;
      g || 1 != e
        ? g || 2 != e
          ? g && 1 == e
            ? (l = 7)
            : g && 2 == e && (l = 8)
          : (l = 6)
        : (l = 5);
      f && (l |= 16);
      g = "" + l;
      pf();
      W(a, "frm", g || null);
      a.l.w
        ? (g =
            (g = cf()) && _.B(g.rootBounds)
              ? new _.Ed(g.rootBounds.width, g.rootBounds.height)
              : null)
        : (g = Mj(!0, c));
      g && (W(a, "biw", g.width), W(a, "bih", g.height));
      !nf(c) &&
        (g = Mj(!1, c)) &&
        (W(a, "isw", g.width), W(a, "ish", g.height));
      a.j.A && W(a, "oid", a.j.A);
      if (a.v) hp(a, b, d);
      else {
        var m;
        a.l.w
          ? (m = (g =
              (g = $e()) &&
              (m = g.initialLayoutRect) &&
              _.r(m.top) &&
              _.r(m.left) &&
              _.r(m.width) &&
              _.r(m.height)
                ? new _.Qe(m.left, m.top, m.width, m.height)
                : null)
              ? new _.Dd(g.left, g.top)
              : (m = cf()) && _.B(m.rootBounds)
              ? new _.Dd(
                  m.rootBounds.left + m.boundingClientRect.left,
                  m.rootBounds.top + m.boundingClientRect.top
                )
              : null)
          : (m = null);
        if ((d = m || Kn(a.l, b[0], d)))
          W(a, "adx", Math.round(d.x), { ea: !0 }),
            W(a, "ady", Math.round(d.y), { ea: !0 });
      }
      a.v
        ? W(a, "adks", ip(a, b))
        : ((d = b[0]), (d = d.Wa || Xg(d, Hn(a.l, d))), W(a, "adk", d));
      d = 0;
      !_.w(_.p.postMessage) && (d |= 1);
      0 < d && W(a, "osd", d);
      lp(a);
      m = d = a.l.m;
      a.v
        ? (m = un(b, d, a.l.o, a.F))
        : ((g = a.l.o[_.N(b[0])]) && rn(sn(g), d), (m = tn(m)));
      W(a, "adsenseParameters", m, { X: !1 });
      W(a, "ifi", b[0].va);
      null !== c && c != c.top
        ? ((b = [c.document.URL]),
          c.name && b.push(c.name),
          (c = Mj(!1, c, !1)),
          b.push(c.width.toString()),
          b.push(c.height.toString()),
          (c = _.de(b.join(""))))
        : (c = 0);
      0 != c && W(a, "ifk", c.toString());
    },
    ap = function (a) {
      var b = _.p.devicePixelRatio;
      (b = _.r(b) ? +b.toFixed(3) : null) && W(a, "u_sd", b, { X: !1 });
    },
    yo = function (a) {
      W(a, "eid", a.j.J);
      var b = Ff().split(",");
      b && W(a, "debug_experiment_id", b);
    },
    Uo = function (a, b, c) {
      W(a, "iu", b.getAdUnitPath());
      W(a, "sz", _.Wg(b));
      _.Wl(b) && W(a, "rbv", "1");
      b.fa() && W(a, "fluid", "height");
      var d = b.ca;
      d && W(a, "fl", d);
      d = b.da;
      (d = (null === d ? a.l.A : d) ? 1 : 0) && W(a, "fsf", d);
      mp(a, b) && W(a, "fsb", "1");
      d = b.A;
      0 < d && W(a, "rc", d);
      np(a, b);
      b.getOutOfPage() && W(a, "ists", "1");
      d = ll(b.ka());
      W(a, "fa", d);
      _.K(98) && !d && Rn(b, c) && W(a, "pfx", "1");
      b.A && W(a, "prevtos", Math.min(dm(b), 3600));
    },
    Do = function (a, b, c) {
      _.D(b, function (g) {
        g = g.getAdUnitPath();
        var h = "";
        if ("" != g) {
          g = g.split("/");
          for (h = 0; h < g.length; h++)
            if ("" != g[h]) {
              for (var k = !1, l = 0; l < a.w.length; l++)
                if (g[h] == a.w[l]) {
                  k = !0;
                  break;
                }
              k || a.w.push(g[h]);
            }
          h = "";
          for (k = 0; k < g.length; k++) {
            if (0 < k) h += "/";
            else if ("" == g[0]) continue;
            for (l = 0; l < a.w.length; l++)
              if (g[k] == a.w[l]) {
                h += l;
                break;
              }
          }
        }
        a.D.push(h);
      });
      W(a, "iu_parts", a.w);
      W(a, "enc_prev_ius", a.D);
      W(a, "prev_iu_szs", Ln(b));
      if (
        Ya(b, function (g) {
          return g.fa();
        })
      ) {
        var d = _.q(b, function (g) {
          return g.fa() ? "height" : "0";
        });
        W(a, "fluid", d);
      }
      (d = Mn(b)) && W(a, "fla", d);
      W(
        a,
        "fsfs",
        no(
          b,
          function (g) {
            g = g.da;
            return (null === g ? a.l.A : g) ? 1 : 0;
          },
          0
        )
      );
      W(
        a,
        "fsbs",
        no(
          b,
          function (g) {
            return mp(a, g) ? 1 : 0;
          },
          0
        )
      );
      W(
        a,
        "rcs",
        no(
          b,
          function (g) {
            return g.A;
          },
          0
        )
      );
      np(a, b[0]);
      (d = op(b)) && W(a, "ists", d);
      W(
        a,
        "fas",
        no(b, function (g) {
          return ll(g.ka());
        })
      );
      (d = pp(b, function (g) {
        return _.Wl(g);
      })) && W(a, "rbvs", d);
      _.K(98) &&
        (d = pp(b, function (g) {
          return !ll(g.ka()) && Rn(g, c);
        })) &&
        W(a, "pfxs", d);
      d = no(
        b,
        function (g) {
          g = g.A ? dm(g) : -1;
          return Math.min(g, 3600);
        },
        0,
        function (g) {
          return 0 <= g;
        },
        "_"
      );
      W(a, "prevtoss", d);
      var e = {};
      _.D(b, function (g) {
        (g = g.M) && (e[g] = (e[g] || 0) + 1);
      });
      if (!_.$d(e)) {
        b = new _.oh("gpt_sra_setclickurl");
        var f = [];
        _.I(e, function (g, h) {
          f.push(h.length + ":" + g);
        });
        _.O(b, "lenfreqs", f.join());
        _.Q(b);
        _.qh(b, _.L(58));
      }
    },
    np = function (a, b) {
      b.M && !a.A && W(a, "click", b.M);
    },
    mp = function (a, b) {
      b = b.xa;
      a = a.l.I;
      return null == b.sandbox ? a.sandbox : b.sandbox;
    },
    qp = function (a) {
      a = !(_.L(46) && !a.l.F);
      a = void 0 === a ? !1 : a;
      return (
        (_.L(148) && _.K(133)
          ? "http://localhost:8080"
          : a || _.K(152) || _.L(6)
          ? "https://securepubads.g.doubleclick.net"
          : "http://pubads.g.doubleclick.net") + "/gampad/ads?"
      );
    },
    op = function (a) {
      return pp(a, function (b) {
        return b.getOutOfPage();
      });
    },
    pp = function (a, b) {
      var c = new _.Wm();
      _.D(a, function (d, e) {
        c.set(a.length - e - 1, b(d));
      });
      return _.Xm(c);
    },
    lp = function (a) {
      if (a.v) {
        var b = _.q(a.j.j, function (c) {
          return _.Un(a.j, c);
        });
        W(a, "ucis", b, { Fa: "|" });
      } else 0 < a.j.j.length && W(a, "uci", _.Un(a.j, a.j.j[0]));
    },
    W = function (a, b, c, d) {
      d = void 0 === d ? {} : d;
      a.C.push({ bb: b, value: c, options: d });
    },
    to = function (a) {
      var b = function (l, m) {
        l = l.toString();
        return m ? encodeURIComponent(l) : l;
      };
      a.o = qp(a);
      for (
        var c = {}, d = _.pa(a.C), e = d.next();
        !e.done;
        c = { Ma: c.Ma }, e = d.next()
      ) {
        var f = e.value,
          g = f;
        e = g.bb;
        var h = g.value,
          k = g.options;
        c.Ma = void 0 === k.X ? !0 : k.X;
        g = void 0 === k.Fa ? "," : k.Fa;
        k = void 0 === k.ea ? !1 : k.ea;
        if ("adsenseParameters" === e) rp(a, f);
        else {
          f = "";
          if (_.B(h))
            _.z(h) &&
              h.length &&
              (f = _.q(
                h,
                (function (l) {
                  return function (m) {
                    return b(m, l.Ma);
                  };
                })(c)
              ).join(b(g, c.Ma)));
          else {
            if (null == h || (!k && 0 == h)) continue;
            f = b(h, c.Ma);
          }
          f &&
            ("?" !== a.o[a.o.length - 1] && (a.o += "&"), (a.o += e + "=" + f));
        }
      }
    },
    rp = function (a, b) {
      var c = [],
        d = [];
      b = _.z(b.value) ? b.value : [];
      b = _.pa(b);
      for (var e = b.next(); !e.done; e = b.next()) {
        var f = e.value;
        e = f.bb;
        var g = f.Ub,
          h = f.Ic;
        f = g ? encodeURIComponent(g.toString()) : "";
        h
          ? ((g = _.q(h, function (k) {
              return k ? encodeURIComponent(encodeURIComponent(k)) : "";
            }).join(",")),
            d.push(e + "," + encodeURIComponent(f) + "," + g))
          : g && "url" != e && c.push(e + "=" + f);
      }
      c.length && (a.o += "&" + c.join("&"));
      d.length && (a.o += "&sps=" + d.join("|"));
    },
    dp = function (a) {
      a = Rd(a.top) ? a.top : a;
      return (
        _.B(a.AMP) &&
        !!_.ce(a.AMP, function (b, c) {
          return !/^inabox/i.test(c);
        })
      );
    },
    gp = new _.Dd(-9, -9);
  _.sp = function (a, b, c, d, e) {
    a = _.Nd(new _.Fd(a), "DIV");
    a.id = c;
    a.name = c;
    c = a.style;
    c.border = "0pt none";
    d && ((c.margin = "auto"), (c.textAlign = "center"));
    e &&
      ((d = _.z(e)),
      (c.width = d ? e[0] + "px" : "100%"),
      (c.height = d ? e[1] + "px" : "0%"));
    b.appendChild(a);
    return a;
  };
  _.X = function (a, b) {
    _.Nj.call(this);
    this.slot = a;
    this.F = b;
    this.w = [];
  };
  _.v(_.X, _.Nj);
  _.X.prototype.j = _.ba(6);
  _.X.prototype.m = _.ba(12);
  _.X.prototype.l = function () {
    _.Nj.prototype.l.call(this);
    _.D(this.w, function (a) {
      return a();
    });
    this.w = [];
  };
  _.tp = function (a, b) {
    _.X.call(this, a, b);
    this.v = "";
    this.o = null;
  };
  _.v(_.tp, _.X);
  _.tp.prototype.j = _.ba(5);
  _.tp.prototype.m = _.ba(11);
  _.tp.prototype.l = function () {
    _.X.prototype.l.call(this);
    if (this.o)
      try {
        this.o();
      } catch (a) {
        _.xh(493, a);
      }
  };
  _.up = function (a, b) {
    _.X.call(this, a, b);
    this.v = this.C = this.D = !1;
    this.A = this.o = null;
  };
  _.v(_.up, _.X);
  _.up.prototype.j = _.ba(4);
  _.up.prototype.m = _.ba(10);
  _.vp = new (function (a) {
    this.id = a;
  })(1);
  var xp;
  _.wp = function () {
    this.j = {};
  };
  xp = function (a) {
    var b = _.wp.B(),
      c = _.vp.id;
    a = _.R(614, a, function (d, e) {
      _.yh(d, e, !0);
    });
    b.j[c] ? b.j[c].push(a) : (b.j[c] = [a]);
  };
  Ca(_.wp);
  _.yp = function (a, b) {
    _.X.call(this, a, b);
    this.o = null;
  };
  _.v(_.yp, _.X);
  _.yp.prototype.m = _.ba(9);
  _.yp.prototype.l = function () {
    _.X.prototype.l.call(this);
    this.o && this.o();
  };
  _.zp = function (a, b) {
    _.X.call(this, a, b);
    this.o = !1;
  };
  _.v(_.zp, _.X);
  _.zp.prototype.j = _.ba(3);
  _.zp.prototype.m = _.ba(8);
  _.Ap = function (a, b) {
    _.X.call(this, a, b);
  };
  _.v(_.Ap, _.X);
  _.Ap.prototype.j = _.ba(2);
  _.Bp = function (a, b) {
    _.X.call(this, a, b);
    this.v = new _.Fd();
    this.o = null;
  };
  _.v(_.Bp, _.X);
  _.Bp.prototype.j = _.ba(1);
  _.Cp = function (a, b) {
    _.X.call(this, a, b);
    this.v = new _.Fd();
    this.o = null;
  };
  _.v(_.Cp, _.X);
  _.Cp.prototype.j = _.ba(0);
  _.Cp.prototype.l = function () {
    _.X.prototype.l.call(this);
    this.o && (this.o.disconnect(), (this.o = null));
  };
  _.Dp = function (a, b) {
    _.X.call(this, a, b);
    this.o = 1;
    this.v = null;
    this.C = this.A = !1;
  };
  _.v(_.Dp, _.X);
  _.Dp.prototype.m = _.ba(7);
  _.Dp.prototype.l = function () {
    _.X.prototype.l.call(this);
    _.Ep(this);
  };
  _.Ep = function (a) {
    5 != a.o &&
      ((a.o = 5),
      a.v && (a.v(), (a.v = null)),
      a.slot.F && _.Ak(a.slot.F),
      _.Ld(_.V(a.slot, _.p.document)));
  };
  var Fp, Gp, Jp;
  Fp = {};
  Gp =
    ((Fp[1] = { qb: "rendering" }),
    (Fp[2] = { qb: "floating", jb: [1] }),
    (Fp[3] = { qb: "vignette", jb: [1] }),
    Fp);
  _.Hp = function () {
    this.l = {};
    this.j = Gp;
  };
  _.Ip = function (a, b) {
    a.l[b] || (a.l[b] = new _.Hj());
    return a.l[b];
  };
  Jp = function (a, b) {
    var c = "_gpt_js_load_" + b + "_",
      d = _.R(340, function (e) {
        if (a.j[b] && _.Fa(e)) {
          var f = a.j[b];
          f = _.q(void 0 === f.jb ? [] : f.jb, function (g) {
            return _.Ip(a, g).j;
          });
          Ij(f).then(function () {
            e.call(_.p, _);
          });
        }
      });
    Object.defineProperty(_.Gg(), c, {
      value: function (e) {
        if (d) {
          var f = d;
          d = null;
          f(e);
        }
      },
      writable: !1,
      enumerable: !1,
    });
  };
  _.Hp.prototype.load = function (a) {
    var b = _.Ip(this, a);
    var c = this.j[a].qb;
    var d = _.bh(window),
      e = d ? "http" : "https",
      f = _.L(d ? 173 : 174),
      g = mh();
    d = _.lg(6);
    c = e + "://" + f + "/gpt/pubads_impl_" + c + "_" + g + ".js";
    d && (c += "?" + d);
    Jp(this, a);
    _.Vd(document, c);
    return b.j;
  };
  Ca(_.Hp);
  _.Hp.prototype.load = rf(_.Hp.prototype.load);
  var Kp;
  Kp = [
    {
      Ba: _.Ap,
      ta: function () {
        return 0 < (_.kg(16) || _.kg(17) || _.kg(18));
      },
    },
    {
      Ba: _.Bp,
      ta: function () {
        return _.K(20);
      },
    },
    {
      Ba: _.Cp,
      ta: function () {
        return !0;
      },
    },
    {
      Ba: _.up,
      ta: function (a, b) {
        return _.kh(b);
      },
    },
    {
      Ba: _.tp,
      ta: function (a, b) {
        return !_.K(111) && (_.K(105) || _.kh(b));
      },
    },
    {
      Ba: _.Dp,
      ta: function (a) {
        return _.Wl(a);
      },
    },
    {
      ob: 3,
      ta: function (a) {
        return 4 == a.ka();
      },
    },
    {
      ob: 2,
      ta: function (a, b) {
        a = a.ka();
        if ((a = (1 == a || 2 == a) && _.B(_.hd(b, _.od, 39))))
          (b = _.hd(b, _.od, 39)), (b = _.G(b, 12)), (a = null == b ? !1 : b);
        return a;
      },
    },
    {
      Ba: _.zp,
      ta: function () {
        return _.K(96);
      },
    },
    {
      Ba: _.yp,
      ta: function (a, b) {
        return _.kg(19) && _.G(b, 9) && !_.G(b, 40);
      },
    },
  ];
  _.Lp = function () {
    this.j = {};
    this.l = Kp;
  };
  Ca(_.Lp);
  _.Np = function (a, b, c, d) {
    this.j = b;
    this.m = c;
    this.W = d;
    this.ha = _.nm.B();
    this.C = Mp();
    this.Ia = Mp();
    this.ja = !1;
    this.l = a;
    this.H = {};
    this.T = rf(this.T);
    this.I = _.R(291, this.I);
    this.V = _.R(513, this.V);
    this.oa = this.aa = this.Y = this.K = !1;
    this.Z = this.$ = "";
    this.videoStreamCorrelator = NaN;
    this.L = 0;
    this.R = new on(this.C);
    this.D = 0;
  };
  _.Np.prototype.A = function () {
    return "json_html";
  };
  var Op = function (a, b) {
      b = void 0 === b ? 0 : b;
      var c = void 0 === c ? window : c;
      !b || nf(c) ? (b = Mp()) : (a.ja = !0);
      a.C = Math.floor(b);
    },
    Mp = function () {
      return Math.floor(Math.random() * Math.pow(2, 52));
    };
  _.n = _.Np.prototype;
  _.n.Sb = function () {
    return null;
  };
  _.n.Xa = function (a) {
    if (!a.length) return !1;
    var b = _.Lp.B();
    Ya(a, function (c) {
      return 0 < (b.j[_.N(c)] || []).length;
    }) && _.Ua.push({ Ea: this, za: 14, ya: [a] });
    return !1;
  };
  _.n.Rb = _.ba(13);
  _.n.ab = function () {};
  _.n.loaded = function (a) {
    var b = _.im(a, document);
    _.we(b);
    a.loaded();
  };
  var Qp = function (a, b, c, d, e) {
    e = void 0 === e ? 0 : e;
    var f = new Tn();
    f.R = a.A();
    f.w = Pp(a.l || _.K(139));
    f.C = a.Ia;
    f.v = c;
    f.m = d;
    f.j = b;
    f.D = On(a.j, b);
    f.L = e;
    if (b.length)
      for (a = _.pa(b), b = a.next(); !b.done; b = a.next())
        (b = b.value), (f.W[_.N(b)] = b.o);
    return f;
  };
  _.Np.prototype.ga = function () {
    return $g() ? 2 : 3;
  };
  var Rp = function (a) {
      var b = _.kg(1) || ($g() ? 8192 : 4096);
      if (a.length <= b) return a;
      var c = a;
      var d = b - 8;
      c.length > b &&
        ((b = c.lastIndexOf("&", d)),
        -1 !== b
          ? (c = c.substring(0, b))
          : ((c = c.substring(0, d)), (c = c.replace(/%\w?$/, ""))),
        (c += "&trunc=1"));
      Pf(_.Ng.B(), (9).toString(), 9, a.length - c.length + 8);
      return c;
    },
    Sp = function (a, b, c) {
      try {
        var d = new window.XMLHttpRequest();
        d.open("GET", a);
        d.withCredentials = !0;
        d.onload = _.R(403, function () {
          if (200 == d.status) {
            var e = d.responseText;
            e = e
              .substring(e.indexOf("(") + 1, e.lastIndexOf(")"))
              .replace(/\\x/g, "\\u00");
            try {
              var f = window.JSON.parse(e);
            } catch (g) {
              _.xh(403, g), (f = null);
            }
            f && b(f);
          }
        });
        d.onerror = c;
        d.send();
      } catch (e) {
        c();
      }
    },
    Tp = function (a, b, c, d, e) {
      e ? a.V(c, d) : (bm(c[0]), (c[0].Y = b));
    };
  _.Np.prototype.V = function (a, b) {
    var c = this;
    _.D(a, function (d) {
      var e = Qp(c, [d], 1, b);
      c.P(e);
      e.w = Pp(!1);
      e = new ro(!1, c.j, c.m, c.W, e);
      e = Rp(uo(e));
      bm(d);
      d.Y = e;
    });
  };
  _.Up = function (a, b, c, d) {
    Bn(a.j, c) &&
      (d && a.Xa([c]), d || !_.im(c, b)) &&
      ((d = c.na),
      null == d && (d = "true" === _.ho(a.m, "google_collapse_empty_div")),
      d && (a = _.V(c, b)) && _.Ye(a, !1));
  };
  _.Np.prototype.T = function (a, b) {
    var c = this;
    b = void 0 === b ? !1 : b;
    return _.p.IntersectionObserver
      ? new _.p.IntersectionObserver(
          function (d, e) {
            return c.I(d, e, b);
          },
          { rootMargin: a }
        )
      : new _.gk(
          function (d, e) {
            return c.I(d, e, b);
          },
          { rootMargin: a }
        );
  };
  _.Np.prototype.I = function (a, b, c) {
    var d = this;
    c = void 0 === c ? !1 : c;
    _.D(a, function (e) {
      if (c || !(0 >= e.intersectionRatio)) {
        b.unobserve(e.target);
        e = e.target.id;
        var f = d.H[e];
        f && (f.call(d), delete d.H[e]);
      }
    });
  };
  var Vp = function (a) {
      a.length && ((a = a[0]), _.Rf(_.Ng.B(), "3", a.o));
    },
    Yp = function (a) {
      a.K =
        null != _.ho(a.m, "google_nofetch") || !!window.google_noFetch || a.K;
      a.Y =
        null != _.ho(a.m, "google_disable_initial_load") ||
        !!window.google_DisableInitialLoad ||
        a.Y;
      a.aa = null != _.ho(a.m, "google_norender") || a.aa;
      Wp(function () {
        var b = new _.oh("gpt_req_disp_mismatch", Ug(), _.L(23));
        _.O(b, "dslots", Xp(a).toString());
        _.O(b, "impl", Pp(a.l));
        _.O(b, "sra", a.l ? "1" : "0");
        _.O(b, "correlator", a.C.toString());
        _.Q(b, a.j);
        _.qh(b);
      });
      a.L = a.R.getOseId();
    };
  _.Np.prototype.P = function (a) {
    a.I = this.C + "";
    a.J = _.Il.B().m();
    a.K = this.ja;
    a.N = this.oa;
    a.O = this.Z;
    a.P = this.$;
    a.A = this.L;
    jn();
    a.H = fn[1];
    jn();
    a.M = fn[4];
    jn();
    a.T = fn[6];
  };
  var $p = function () {
      var a = Zp(Y());
      return { cmsid: a.Z, vid: a.$ };
    },
    Wp = function (a) {
      _.p.attachEvent
        ? _.p.attachEvent("onunload", a)
        : _.p.addEventListener && _.p.addEventListener("unload", a, !1);
    },
    Xp = function (a) {
      return Xa(yn(a.j), function (b, c) {
        return c.Z ? b + 1 : b;
      });
    };
  _.Np.prototype.pa = _.ba(14);
  var iq = function (a, b) {
    Uk.call(this, a);
    var c = this;
    this.set = S(576, function (d, e) {
      a.set(d, e);
      return c;
    });
    this.get = S(577, function (d) {
      return a.get(d);
    });
    this.getAttributeKeys = S(578, function () {
      return rb(a.F);
    });
    this.display = S(558, function (d, e, f, g) {
      return a.display(d, e, void 0 === f ? "" : f, void 0 === g ? "" : g);
    });
    this.setClearUnfilledSlots = S(68, function (d) {
      _.xa(d) && (a.o = d);
    });
    this.notifyUnfilledSlots = S(69, function (d) {
      if (a.H) aq(a, bq(a, d));
      else if (a.o) {
        d = bq(a, d);
        var e = cq();
        if (e.m) {
          dq(e, d);
          for (var f = 0; f < d.length; ++f) {
            var g = new _.xl(d[f].l(), !0, e.ba());
            El(e, "slotRenderEnded", g);
          }
        } else a.log.error(wi("PubAds", "clear"));
      }
    });
    this.isRoadblockingSupported = S(111, function () {
      return eq(a);
    });
    this.refreshAllSlots = S(60, function () {
      a.H && aq(a, null);
    });
    this.setVideoSession = S(61, function (d, e, f, g) {
      a.K = d;
      a.I = e;
      a.J = f;
      a.w = g;
    });
    this.getDisplayAdsCorrelator = S(62, function (d) {
      return fq(a, void 0 === d ? "" : d);
    });
    this.getVideoStreamCorrelator = S(63, function () {
      if (cq().j) {
        var d = Zp(Y()).videoStreamCorrelator;
        d = isNaN(d) ? 0 : d;
      } else d = 0;
      return d;
    });
    this.isSlotAPersistentRoadblock = S(64, function (d) {
      d = Fg(d, b);
      return !!d && gq(a, d);
    });
    this.onImplementationLoaded = S(65, function () {
      a.log.info(Bi("GPT CompanionAds"), a);
      a.C = !0;
    });
    this.fillSlot = S(66, function (d, e, f, g) {
      d = Fg(d, b);
      var h;
      if ((h = !!d))
        d && Am(d) && _.x(e) && 0 < e.length
          ? ((a.A[d.U.m] = e),
            null != f && null != g && (a.j[d.U.m] = [f, g]),
            (h = hq(a, d)))
          : (h = !1);
      return h;
    });
    this.slotRenderEnded = S(67, function (d, e, f) {
      d = Fg(d, b);
      var g;
      if ((g = d))
        (d = new _.xl(d.l(), !1, a.ba())),
          null != e && null != f && _.yl(d, [e, f]),
          El(a, "slotRenderEnded", d),
          (g = void 0);
      return g;
    });
    this.enableSyncLoading = S(58, function () {
      a.M = !1;
    });
    this.setRefreshUnfilledSlots = S(59, function (d) {
      _.xa(d) && (a.H = d);
    });
  };
  _.v(iq, Uk);
  var kq = function (a, b) {
    var c = this;
    this.setAudExtId = S(82, function (d) {
      eh(d) && (a.j.Zb = d);
      return c;
    });
    this.set = S(83, function (d, e) {
      a.set(d, e);
      return c;
    });
    this.get = S(84, function (d) {
      return a.get(d);
    });
    this.setClickUrl = S(79, function (d) {
      cl(a.j, d);
      return c;
    });
    this.setTargeting = S(81, function (d, e) {
      dl(a.j, d, e);
      return c;
    });
    this.updateTargetingFromMap = S(85, function (d) {
      jq(a, d);
      return c;
    });
    this.display = S(78, function () {
      a.display({ xd: pm.B().j, yd: [b] });
    });
    this.setTagForChildDirectedTreatment = S(80, function (d) {
      if (0 === d || 1 === d) a.j.cc = d;
      return c;
    });
    this.setForceSafeFrame = S(567, function (d) {
      fl(a.j, d);
      return c;
    });
    this.setTagForUnderAgeOfConsent = S(448, function (d) {
      if (0 === d || 1 === d) a.j.Ab = d;
      return c;
    });
  };
  _.v(kq, Eg);
  var lq = function (a, b) {
      a = _.q(a, function (c) {
        return Fg(c, b);
      });
      return _.u(a, function (c) {
        return !!c;
      });
    },
    xq = function (a, b) {
      Uk.call(this, a);
      var c = this;
      this.setTargeting = S(1, function (d, e) {
        mq(a, d, e);
        return c;
      });
      this.clearTargeting = S(2, function (d) {
        a: {
          if ("undefined" != typeof d) {
            if (!_.x(d) || Gb(oc(d))) {
              a.log.G(U("PubAdsService.clearTargeting", [d]), a);
              break a;
            }
            if (!a.w[d]) {
              a.log.G(ej(d, a.ba()), a);
              break a;
            }
            if ("gpt-beta" == d) {
              a.log.G(xj(d));
              break a;
            }
            delete a.w[d];
            a.log.info(dj(d, a.ba()), a);
          } else (a.w = {}), a.log.info(tj(a.ba()), a);
          a.j && Dn(Z(Y()), d);
        }
        return c;
      });
      this.getTargeting = S(38, function (d) {
        _.x(d)
          ? (d = Object.prototype.hasOwnProperty.call(a.w, d)
              ? _.ib(a.w[d])
              : [])
          : (a.log.G(U("PubAdsService.getTargeting", [d]), a), (d = []));
        return d;
      });
      this.getTargetingKeys = S(39, function () {
        return rb(a.w);
      });
      this.setCategoryExclusion = S(3, function (d) {
        !_.x(d) || Gb(oc(d))
          ? a.log.G(U("PubAdsService.setCategoryExclusion", [d]), a)
          : (eb(a.P, d), a.log.info(fj(d), a), a.j && En(Z(Y()), d));
        return c;
      });
      this.clearCategoryExclusions = S(4, function () {
        a.P = [];
        a.log.info(gj(), a);
        a.j && (Z(Y()).D = []);
        return c;
      });
      this.disableInitialLoad = S(5, function () {
        a.j ? a.log.G(Ii("disableInitialLoad", "pubads"), a) : (a.O = !0);
      });
      this.enableSingleRequest = S(6, function () {
        return nq(a);
      });
      this.enableAsyncRendering = S(7, function () {
        return !0;
      });
      this.enableSyncRendering = S(8, function () {
        xe(
          "GPT synchronous rendering is no longer supported, ads will be requested and rendered asynchronously. See https://support.google.com/admanager/answer/9212594 for more details."
        );
        return !1;
      });
      this.enableLazyLoad = S(485, function (d) {
        a.o = new _.ol();
        a.o.l = 800;
        a.o.m = 400;
        a.o.j = 3;
        if (_.B(d)) {
          var e = d.fetchMarginPercent;
          _.r(e) && (0 <= e ? (a.o.l = e) : -1 == e && (a.o.l = null));
          e = d.renderMarginPercent;
          _.r(e) && (0 <= e ? (a.o.m = e) : -1 == e && (a.o.m = null));
          d = d.mobileScaling;
          _.r(d) && (0 < d ? (a.o.j = d) : -1 == d && (a.o.j = 1));
        }
        a.j && (Z(Y()).C = a.o);
      });
      this.setCentering = S(9, function (d) {
        a.log.info(Ri("centering", String(d)), a);
        Z(Y()).v = d;
      });
      this.definePassback = S(10, function (d, e) {
        return (d = oq(a, d, e)) && d.l();
      });
      this.refresh = S(11, function (d, e) {
        _.z(d) ? ((d = lq(d, b)), pq(a, d, e)) : pq(a, d, e);
      });
      this.enableVideoAds = S(12, function () {
        a.D = !0;
        qq(a);
      });
      this.setVideoContent = S(13, function (d, e) {
        a.D = !0;
        a.V = d;
        a.T = e;
        qq(a);
        a.N = !0;
      });
      this.collapseEmptyDivs = S(14, function (d) {
        return rq(a, d);
      });
      this.clear = S(15, function (d) {
        _.z(d) && (d = lq(d, b));
        return sq(a, d);
      });
      this.setLocation = S(16, function (d, e, f) {
        a: {
          var g = "role:1 producer:12";
          if (_.w(e)) {
            if (!_.r(d)) {
              a.log.G(Zi("Latitude"));
              break a;
            }
            if (!_.r(e)) {
              a.log.G(Zi("Longitude"));
              break a;
            }
            g +=
              " latlng{ latitude_e7: " +
              Math.round(1e7 * d) +
              " longitude_e7: " +
              Math.round(1e7 * e) +
              "}";
            if (_.w(f)) {
              if (isNaN(f)) {
                a.log.G(Zi("Radius"));
                break a;
              }
              g += " radius:" + Math.round(f);
            }
          } else 50 < d.length && ((e = d.substring(0, 50)), a.log.G($i(String(d), "50", e)), (d = e)), (g += ' loc:"' + d + '"');
          if (Uc) g = _.p.btoa(g);
          else {
            d = [];
            for (f = e = 0; f < g.length; f++) {
              var h = g.charCodeAt(f);
              255 < h && ((d[e++] = h & 255), (h >>= 8));
              d[e++] = h;
            }
            g = _.Vc(d, void 0);
          }
          g = "a " + g;
          Z(Y()).F = g;
        }
        return c;
      });
      this.setCookieOptions = S(17, function (d) {
        if (eh(d)) {
          var e = tq();
          e.j = d;
          Zm(e);
        } else a.log.G(Gi(String(d)), a);
        return c;
      });
      this.setTagForChildDirectedTreatment = S(18, function (d) {
        0 !== d && 1 !== d ? a.log.G(ij(String(d)), a) : (Z(Y()).H = d);
        return c;
      });
      this.clearTagForChildDirectedTreatment = S(19, function () {
        Z(Y()).H = -1;
        return a;
      });
      this.setPublisherProvidedId = S(20, function (d) {
        a.m
          ? a.log.G(Ji("setPublisherProvidedId", d), a)
          : (a.log.info(Ri("PPID", d), a), (Z(Y()).R = d));
        return c;
      });
      this.set = S(21, function (d, e) {
        a.set(d, e);
        return c;
      });
      this.get = S(22, function (d) {
        return a.get(d);
      });
      this.getAttributeKeys = S(23, function () {
        return rb(a.K);
      });
      this.display = S(24, function (d, e, f, g) {
        return a.display(d, e, void 0 === f ? "" : f, void 0 === g ? "" : g);
      });
      this.updateCorrelator = S(25, function () {
        xe(Ta("update"));
        a.log.G(Ej(), a);
        a.M = -1;
        uq(a);
        return c;
      });
      this.defineOutOfPagePassback = S(35, function (d) {
        if ((d = oq(a, d, [1, 1]))) d.j.sa = !0;
        return d && d.l();
      });
      this.setForceSafeFrame = S(36, function (d) {
        _.xa(d) ? (Z(Y()).A = d) : a.log.G(Yi(String(d)), a);
        return c;
      });
      this.setSafeFrameConfig = S(37, function (d) {
        if (d && _.B(d)) {
          if ((d = gl(d))) Z(Y()).I = d;
        } else a.log.error(U("PubAdsService.setSafeFrameConfig", [d]), a);
        return c;
      });
      this.setRequestNonPersonalizedAds = S(445, function (d) {
        if (0 !== d && 1 !== d) a.log.G(yj(String(d)), a);
        else if (d) {
          if ((d = ha()) && d.frames && !d.frames.GoogleSetNPA)
            try {
              var e = d.document,
                f = new _.Fd(e),
                g = e.body || (e.head && e.head.parentElement);
              if (g) {
                var h = _.Nd(f, "IFRAME");
                h.name = "GoogleSetNPA";
                h.id = "GoogleSetNPA";
                h.setAttribute(
                  "style",
                  "display:none;position:fixed;left:-999px;top:-999px;width:0px;height:0px;"
                );
                g.appendChild(h);
              }
            } catch (k) {}
        } else
          (e = ha().document.getElementById("GoogleSetNPA")) &&
            e.parentNode &&
            e.parentNode.removeChild(e);
        return c;
      });
      this.setTagForUnderAgeOfConsent = S(447, function (d) {
        0 !== d && 1 !== d && void 0 !== d
          ? a.log.G(zj(String(d)), a)
          : ((d = void 0 === d ? 2 : d), (Z(Y()).O = d));
        return c;
      });
      this.getCorrelator = S(27, function () {
        return vq(a);
      });
      this.isAdRequestFinished = S(29, function () {
        return a.j ? Zp(Y()).Sb() : !1;
      });
      this.getVideoContent = S(30, function () {
        return a.j ? $p() : null;
      });
      this.getVersion = S(568, function () {
        return a.getVersion();
      });
      this.forceExperiment = S(569, function (d) {
        d = parseInt(d, 10);
        0 < d && _.Il.B().l(d);
      });
      this.setCorrelator = S(28, function (d) {
        xe(Ta("set"));
        a.log.G(Dj(), a);
        nf(window) ||
          (_.r(d) && isFinite(d) && 0 == d % 1 && 0 < d
            ? ((a.M = d), uq(a))
            : a.log.G(mj(String(d)), a));
        return c;
      });
      this.setKidsFriendlyAds = S(18, function (d) {
        0 !== d && 1 !== d ? a.log.G(nj(String(d)), a) : (Z(Y()).M = d);
        return c;
      });
      this.markAsAmp = S(570, function () {
        return wq(a);
      });
      this.isSRA = S(571, function () {
        return a.C;
      });
      this.setFetchAdsSerially = S(275, function (d) {
        _.xa(d) ? (Z(Y()).K = d) : a.log.G(Yi(String(d)), a);
      });
      this.setImaContent = S(328, function (d, e) {
        a.N
          ? ((a.D = !0), (a.V = d), (a.T = e), qq(a), (a.N = !0))
          : ((a.D = !0), qq(a), _.x(d) && (a.Y = d), _.x(e) && (a.W = e));
      });
      this.getImaContent = S(329, function () {
        return a.N
          ? a.j
            ? $p()
            : null
          : a.j
          ? { vid: a.Y, cmsid: a.W }
          : null;
      });
      this.isInitialLoadDisabled = S(572, function () {
        return a.O;
      });
    };
  _.v(xq, Uk);
  var yq = null,
    Aq = function () {
      var a = this;
      this.j = {};
      this.l = _.Ng.B();
      _.J(
        _.p,
        "DOMContentLoaded",
        _.R(334, function () {
          return zq(a);
        })
      );
    },
    Bq = function () {
      return yq
        ? yq
        : window.performance && me(window.performance.now)
        ? (yq = new Aq())
        : null;
    },
    Dq = function (a, b) {
      var c = b.U.j;
      Cq(a, b) ? delete a.j[c] : (a.j[c] = b);
    },
    Eq = function (a, b) {
      var c = b.T;
      null != c ? Rk(c, b.o) : Dq(a, b);
    },
    Cq = function (a, b) {
      var c = _.V(b, _.p.document);
      if (c && "DIV" == c.nodeName) {
        var d = _.K(87),
          e = _.K(64);
        a = new Pk({
          gb: _.p,
          Lc: a.l,
          Pa: c,
          ma: function (f) {
            _.xh(336, f, 1);
          },
          Hc: d,
          Gc: e,
        });
        if (a.o) return Rk(a, b.o), (b.T = a), !0;
      }
      return !1;
    },
    zq = function (a) {
      _.$d(a.j) ||
        (a.j = xb(a.j, function (b) {
          return !Cq(a, b);
        }));
    };
  var Fq = function () {
      this.j = !1;
      this.l = {};
    },
    Gq = function (a, b) {
      var c = bn(document, b, "prefetch", "");
      c &&
        _.J(c, "load", function () {
          a.l[b] = 3;
          c && _.Ld(c);
        });
    };
  Ca(Fq);
  _.Hq = "3rd party ad content";
  Hg("setAdIframeTitle", function (a) {
    _.Hq = a;
  });
  var ir, hr, Oq, kr, Rq;
  _.Iq = function (a, b, c, d) {
    var e = _.K(143);
    _.Np.call(this, a || e, b, c, d);
    var f = this;
    this.qa = a;
    this.fa = e;
    this.w = [];
    this.o = {};
    this.va = {};
    this.xa = this.wa = NaN;
    this.J = _.K(123);
    this.ca = NaN;
    this.ra = !1;
    this.Ha = 0;
    this.F = {};
    this.N = _.R(203, this.N);
    xp(function (g) {
      f.ab([g], {});
    });
  };
  _.v(_.Iq, _.Np);
  var Pp = function (a) {
    return a ? "fifs" : "fif";
  };
  _.Iq.prototype.P = function (a) {
    _.Np.prototype.P.call(this, a);
    a.persistentRoadblocksOnly = this.ra;
    a.videoPodNumber = this.wa;
    a.videoPodPosition = this.xa;
    a.videoStreamCorrelator = this.videoStreamCorrelator;
  };
  var Lq = function (a, b) {
      Jq(a, b) || Kq(a, b);
    },
    Jq = function (a, b) {
      var c = b.j,
        d = a.j.C;
      _.D(c, function (k) {
        k.wa = d;
      });
      var e = null != d.l && d.j && 0 != (0, _.oe)() ? d.l * d.j : d.l;
      if (null == e) return !1;
      var f = Math.max(e / 100, 0);
      if (
        !$a(c, function (k) {
          return _.rg(_.V(k)) && !_.Pn(a.j, window, f, k);
        })
      )
        return !1;
      var g = a.T(e + "%"),
        h = function () {
          return Kq(a, b);
        };
      _.D(c, function (k) {
        var l = k.U.j,
          m = _.V(k);
        m && ((a.H[l] = h), g.observe(m), (k.aa = g));
      });
      return !0;
    },
    Kq = function (a, b) {
      var c = b.j;
      null != c[0].aa &&
        _.D(c, function (d) {
          Mq(a, _.V(d), d.U.j, d);
        });
      Nq(a, b);
    },
    Nq = function (a, b) {
      a.P(b);
      var c = uo(new ro(a.l, a.j, a.m, a.W, b));
      if (3 == a.ga()) {
        c = Rp(c);
        c = Sg(c);
        var d = b.j;
        Tp(a, c, d, b.m, a.l);
        _.K(129) && Oq(d, !1);
        var e = ++a.D;
        b.l = e;
        a.o[e] = d;
        Vp(d);
        a.da(e, c, b);
      } else a.na(c, b);
      b.V = !0;
      b = b.j;
      a.l || (a.va[_.N(b[0])] = window.setTimeout((0, _.C)(a.Ga, a), _.L(13)));
      _.Hp.B().load(1);
      c = Fq.B();
      d = window;
      c.j ||
        ((c.j = !0),
        (a = _.yk(d, _.tl(), _.ul(), !_.bh(d, !1))),
        (c.l[a] = 1),
        an()
          ? Gq(c, a)
          : _.Gg().fifWin ||
            ((d = d.document),
            (c = _.Nd(new _.Fd(d), "IFRAME")),
            (c.src = a),
            (c.style.visibility = "hidden"),
            (c.style.display = "none"),
            (a = d.getElementsByTagName("script")),
            0 < a.length &&
              ((a = a[a.length - 1]),
              a.parentNode && a.parentNode.insertBefore(c, a.nextSibling))));
      Pq(b);
    },
    Pq = function (a) {
      var b = _.Gf();
      _.D(a, function (c) {
        c.Db = b;
      });
    };
  _.Iq.prototype.da = function (a, b, c) {
    for (
      var d = this, e = c.m, f = e.split("."), g = window, h = 0;
      h < f.length && g;
      h++
    )
      g = g[f[h]];
    g &&
      ((f = new _.oh("gpt_callbackexists")),
      _.Q(f),
      _.O(f, "callback", e),
      _.qh(f));
    var k = function (l) {
      d.N(window, l, a, c);
    };
    _.Pa(e, function (l) {
      k && (k(l), (k = null));
    });
    _.Vd(document, b);
  };
  _.Iq.prototype.na = function (a, b) {
    var c = this;
    a = Rp(a);
    var d = Sg(a),
      e = b.j;
    Tp(this, d, e, b.m, this.l);
    _.K(129) && Oq(e, !1);
    var f = ++this.D;
    b.l = f;
    this.o[f] = e;
    Sp(
      a,
      function (g) {
        c.N(window, g, f, b);
      },
      function () {
        _.uh("gpt_xhr_err", function (g) {
          _.Q(g);
        });
        c.da(f, d, b);
      }
    );
    Vp(e);
  };
  _.Iq.prototype.ab = function (a, b) {
    _.Np.prototype.ab.call(this, a, b);
    a = _.u(a, function (c) {
      return !c.ua;
    });
    a.length &&
      (_.D(a, function (c) {
        c.ua = !0;
      }),
      Qq(this, a, b));
  };
  var Qq = function (a, b, c) {
      var d = _.Gf();
      b = qb(b, function (g) {
        g = g.Db;
        return null == g ? 0 : Math.max(0, Math.round((1e3 - (d - g)) / 1e3));
      });
      var e = b[0] || [],
        f = Oh.B();
      _.I(b, function (g, h) {
        var k = parseInt(h, 10);
        !k ||
          0 > k ||
          (_.D(g, function (l) {
            f.G(Aj(String(k), l.getAdUnitPath()));
          }),
          _.p.setTimeout(
            _.R(375, function () {
              Rq(347, function () {
                return Sq(a, g, c);
              });
            }),
            1e3 * k
          ));
      });
      e.length &&
        Rq(347, function () {
          return Sq(a, e, c);
        });
    },
    Sq = function (a, b, c) {
      _.D(b, function (f) {
        f.ua = !1;
      });
      b = qb(b, function (f) {
        return 0 != _.Vl(f).length;
      });
      b[!1] &&
        _.D(b[!1], function (f) {
          _.Up(a, document, f, !0);
        });
      if ((b = b[!0])) {
        var d = c.isVideoRefresh ? 3 : 2;
        _.D(b, function (f) {
          _.Tl(f);
        });
        _.w(c.videoStreamCorrelator)
          ? (a.videoStreamCorrelator = c.videoStreamCorrelator)
          : 0 != c.changeCorrelator && Op(a);
        a.wa = c.videoPodNumber || NaN;
        a.xa = c.videoPodPosition || NaN;
        a.ra = c.persistentRoadblocksOnly || !1;
        a.J = c.clearUnfilledSlots || _.K(123);
        An(a.j, b);
        a.ca = b.length;
        if (!a.K) {
          var e = (0, _.C)(function (f) {
            var g = Tq(this);
            return Qp(this, f, d, g);
          }, a);
          a.l
            ? ((c = qb(b, function (f) {
                return f.w;
              })),
              _.I(
                c,
                function (f) {
                  Uq(this, e(f));
                },
                a
              ))
            : _.D(b, function (f) {
                Uq(a, e([f]));
              });
        }
      }
    };
  _.Iq.prototype.Xa = function (a) {
    _.Np.prototype.Xa.call(this, a);
    a = _.pa(a);
    for (var b = a.next(); !b.done; b = a.next()) {
      b = b.value;
      var c = _.V(b),
        d = this.F[_.N(b)];
      d
        ? (_.Oj(d), delete this.F[_.N(b)])
        : c && ((c.innerHTML = ""), c.removeAttribute("data-google-query-id"));
      Vq(this, b) && c && _.Ye(c, !1);
      Mq(this, c, b.U.j, b);
      cm(b);
    }
    return !0;
  };
  var Mq = function (a, b, c, d) {
      if (b && a.H[c]) {
        var e = d.aa;
        e && ((d.aa = null), e.unobserve(b));
        delete a.H[c];
      }
    },
    Wq = function (a, b) {
      var c = _.Vl(b);
      if (0 == c.length) return null;
      var d = c[0];
      if (1 < c.length) {
        a: if ((a = _.V(b, a)) && a.style.height && a.style.width)
          for (a = [a.style.width, a.style.height], b = 0; b < a.length; ++b)
            if (2 < a[b].length && "px" == a[b].substring(a[b].length - 2))
              a[b] = parseInt(a[b], 10);
            else {
              a = null;
              break a;
            }
        else a = null;
        d = a || d;
      }
      return d;
    },
    Xq = function (a, b, c, d) {
      var e = _.V(c, b);
      e && ((a = _.sp(b, e, _.hm(c), a.j.v, d)), c.H && (c.N = a));
    };
  _.Iq.prototype.N = function (a, b, c, d) {
    _.Ua.push({ Ea: this, za: 1, ya: [a, b, d] });
  };
  _.Iq.prototype.ua = _.ba(17);
  _.Iq.prototype.Ga = function () {
    var a = new _.oh("gpt_request_timeout", Ug(), _.L(23));
    _.Q(a, this.j);
    _.qh(a);
    _.Yq(this);
  };
  _.Yq = function (a) {
    0 < a.w.length && (a.w.shift(), 0 < a.w.length && Lq(a, a.w[0]));
  };
  _.Iq.prototype.O = function (a, b) {
    _.im(a, b) ||
      (_.jm(a, b) || Xq(this, b, a, Wq(b, a)),
      _.V(a, b)
        ? _.Ua.push({ Ea: this, za: 3, ya: [a, b] })
        : _.K(42) || Zq(this, a));
  };
  _.Iq.prototype.sa = _.ba(18);
  var Uq = function (a, b, c) {
      c = void 0 === c ? document : c;
      _.K(140) &&
        _.D(b.j, function (g) {
          g.pa = !0;
        });
      var d = _.L(221);
      De = _.K(24);
      var e = b.j[0] && b.j[0].ec ? b.j[0].w : "",
        f = _.p.setTimeout(function () {
          var g = new _.oh("gpt_cmp_never_called");
          _.Q(g, a.j);
          _.O(g, "consent", JSON.stringify(Oe(d, e)));
          _.qh(g);
        }, 1e4);
      Pe(
        d,
        e,
        _.R(451, function () {
          _.p.clearTimeout(f);
          $q(a, b, c);
        })
      );
    },
    $q = function (a, b, c) {
      var d = (c = void 0 === c ? document : c),
        e = _.K(42);
      _.D(b.j, function (g) {
        e || Zq(a, g);
        _.jm(g, d) || Xq(a, d, g, Wq(d, g));
        if (_.K(114)) {
          var h = _.hm(g);
          _.Ua.push({ za: 16, ya: [d, h, _.N(g)] });
        }
      });
      if (a.l || !a.j.K) Lq(a, b);
      else if ((a.w.push(b), 1 == a.w.length)) Lq(a, b);
      else if (
        ((c = _.u(a.w, function (g) {
          return !g.V;
        })),
        1 < c.length)
      ) {
        var f = new _.oh("gpt_request_queue_length", Ug());
        _.O(f, "len", "" + c.length);
        _.Q(f, a.j);
        _.qh(f);
      }
      e &&
        _.D(b.j, function (g) {
          Zq(a, g);
        });
    },
    cr = function (a, b) {
      var c = void 0 === c ? document : c;
      Rq(348, function () {
        a.l
          ? ar(a, b, c)
          : _.Vl(b).length
          ? br(a, [[b]], c)
          : _.Up(a, document, b, !0);
        Zq(a, b);
      });
    },
    ar = function (a, b, c) {
      a.O(b, c);
      var d = function () {
        var e = dr(a, b.w, c);
        br(a, e, c);
      };
      a.fa && a.D ? Ae(d) : _.K(99) ? Kj().then(d) : d();
    },
    dr = function (a, b, c) {
      var d = zn(a.j);
      a.fa &&
        !a.qa &&
        (d = _.u(d, function (e) {
          return e.Z && !!_.V(e, c);
        }));
      return (d = er(a, d)) ? fr(a, d, b) : null;
    },
    er = function (a, b) {
      b = qb(b, function (c) {
        return 0 != _.Vl(c).length;
      });
      b[!1] && gr(a, b[!1]);
      return b[!0] || null;
    },
    fr = function (a, b, c) {
      var d = [];
      b = qb(b, function (e) {
        return e.w;
      });
      _.I(b, function (e, f) {
        e = _.K(65) ? hr(a, e) : e;
        f == c ? d.unshift(e) : d.push(e);
      });
      return d;
    },
    br = function (a, b, c) {
      a.K ||
        a.Y ||
        !b ||
        _.D(b, function (d) {
          if (_.K(129)) {
            var e = _.u(d, function (l) {
              return !l.ac;
            });
            if (!e.length) return;
            Oq(e, !0);
          } else e = d;
          var f = e.length,
            g = e,
            h = _.lh(a.l);
          d = 0 == h ? [] : Qn(a.j, e);
          var k = d.length;
          2 == h && k && k < f && (g = jb(e, 0, f - k));
          e = Tq(a);
          g = Qp(a, g, 1, e);
          g.o = d;
          Uq(a, g, c);
        });
    },
    Tq = function (a) {
      return "googletag.impl.pubads.callbackProxy" + ++a.Ha;
    },
    gr = function (a, b) {
      _.D(b, function (c) {
        0 == _.Vl(c).length && _.Up(a, document, c, !0);
      });
    },
    Vq = function (a, b) {
      b = b.$;
      null == b && (b = "true" === _.ho(a.m, "google_divs_start_collapsed"));
      return b;
    },
    Zq = function (a, b) {
      Vq(a, b) && !b.D && (a = _.V(b)) && _.Ye(a, !1);
    };
  _.Iq.prototype.Sb = function () {
    return isNaN(this.ca) || this.l
      ? 0 == zn(this.j).length
      : zn(this.j).length == th(this.j) - this.ca;
  };
  ir = function (a, b, c) {
    b = Qp(a, b, c.v, Tq(a), c.l);
    Uq(a, b);
  };
  _.jr = function (a, b) {
    var c = b.j,
      d = b.o,
      e = b.l,
      f = b.L,
      g = _.lh(a.l);
    f && 0 != g
      ? (_.D(null == f ? null : a.o[f], function (h) {
          h.O = 0;
        }),
        delete a.o[f],
        delete a.o[e])
      : ((f = []),
        1 == g
          ? (f = _.u(c, function (h) {
              return 1 == h.O;
            }))
          : 2 != g || pb(c, d) || (f = d),
        f.length && 0 != g ? ir(a, f, b) : delete a.o[e]);
  };
  hr = function (a, b) {
    var c = [];
    _.D(b, function (d) {
      if (!d.getOutOfPage()) {
        var e = Kn(a.j, d, document) || {};
        c.push({ Gb: void 0 === e.y ? Infinity : e.y, slot: d });
      }
    });
    nb(c, function (d, e) {
      return kb(d.Gb, e.Gb);
    });
    return _.q(b, function (d) {
      return d.getOutOfPage() ? d : c.shift().slot;
    });
  };
  Oq = function (a, b) {
    a = _.pa(a);
    for (var c = a.next(); !c.done; c = a.next()) c.value.ac = b;
  };
  kr = function () {
    if (hc()) {
      if (_.K(109) && 0 <= _.Qb(_.jc(), 12)) return !1;
      if (0 <= _.Qb(_.jc(), 11)) return !0;
    } else if (_.fc() && _.K(112) && 0 <= _.Qb(_.jc(), 65)) return !0;
    return !1;
  };
  Rq = function (a, b) {
    kr() ? mn(_.R(a, b)) : b();
  };
  var lr;
  lr = function (a, b, c, d, e) {
    this.D = b;
    this.C = c;
    this.F = d;
    this.A = e;
    this.o = a.slice();
    this.l = null;
    this.j = 1;
    this.m = "";
    this.v = this.w = 0;
  };
  _.mr = function (a, b) {
    a.j = 4;
    try {
      a.F(b);
    } catch (c) {}
  };
  var pr, or;
  _.nr = function (a, b) {
    this.w = a;
    this.j = b;
    this.o = !1;
    this.v = 0;
    this.m = !1;
  };
  pr = function (a) {
    a.o || ((a.o = !0), or(a));
  };
  or = function (a) {
    var b = new _.p.XMLHttpRequest();
    b.open("GET", a.w);
    b.withCredentials = !0;
    b.onreadystatechange = _.R(322, function () {
      _.Ua.push({ Ea: a, za: 17, ya: [!1, b] });
    });
    b.onload = _.R(444, function () {
      _.Ua.push({ Ea: a, za: 17, ya: [!0, b] });
    });
    b.onerror = function (c) {
      return _.mr(a.j, c);
    };
    b.send();
  };
  _.nr.prototype.l = _.ba(19);
  var qr = $g() && ah();
  _.rr = function (a, b, c, d) {
    _.Iq.call(this, a, b, c, d);
    this.v = {};
    this.M = {};
  };
  _.v(_.rr, _.Iq);
  _.rr.prototype.A = function () {
    return _.K(132) ? _.Iq.prototype.A.call(this) : "ldjh";
  };
  _.rr.prototype.ga = function () {
    return 2;
  };
  _.rr.prototype.na = function (a, b) {
    var c = this;
    var d = void 0 === d ? _.p.document : d;
    b.l = ++this.D;
    var e = b.j;
    this.o[b.l] = e;
    var f = _.R(287, function (l, m) {
        _.Ua.push({ Ea: c, za: 6, ya: [b, l, m, d] });
      }),
      g = _.R(288, function (l, m) {
        _.Ua.push({ Ea: c, za: 5, ya: [b, l, m, d] });
      }),
      h = _.R(289, function (l) {
        return sr(c, l, a, b);
      }),
      k = Sg(Rp(a));
    f = new lr(e, f, g, h, function () {
      return void _.jr(c, b);
    });
    Vp(e);
    pr(new _.nr(k, f));
    Tp(this, k, e, "", this.l);
    _.K(129) && Oq(e, !1);
    _.Hp.B().load(1);
  };
  var sr = function (a, b, c, d) {
    var e = d.l;
    a.M[e] || _.K(126)
      ? ((d = Bb(a.v, function (f) {
          return f == e;
        })) && delete a.v[d],
        _.yh(289, Error((b && b.message) || "strm_err"), !0))
      : ((b = c.replace(
          "output=" + a.A(),
          "output=" + _.Iq.prototype.A.call(a)
        )),
        _.Iq.prototype.da.call(a, e, b, d),
        (a.M[e] = !0));
  };
  _.rr.prototype.la = _.ba(20);
  _.rr.prototype.ia = _.ba(21);
  _.rr.prototype.O = function (a, b) {
    null == this.v[_.N(a)] && _.Iq.prototype.O.call(this, a, b);
  };
  var tr = function () {
      this.m = this.j = this.l = null;
    },
    Z = function (a) {
      null == a.l && ((a.l = new wn()), a === ur && (a.l.v = !1));
      return a.l;
    },
    Zp = function (a) {
      if (a.j) return a.j;
      switch (_.ho(vr(a), "google_ad_impl")) {
        case "gut_friendly_iframe_sra":
          wr(a, !0);
          break;
        default:
          wr(a, !1);
      }
      Yp(a.j);
      return a.j;
    },
    wr = function (a, b) {
      (qr && _.K(69)) || _.K(110)
        ? (a.j = new _.rr(b, Z(a), vr(a), tq()))
        : (a.j = new _.Iq(b, Z(a), vr(a), tq()));
    },
    vr = function (a) {
      null == a.m && (a.m = new go());
      return a.m;
    },
    xr = null,
    tq = function () {
      xr || (xr = new $m());
      return xr;
    },
    yr = null,
    Y = function () {
      yr || (yr = new tr());
      return yr;
    },
    ur = null;
  var zr = function (a, b, c) {
    this.o = c;
    this.j = a;
    this.j.ga = !0;
    this.j.addService(b);
    this.m = b;
  };
  _.v(zr, Sh);
  zr.prototype.Aa = function () {
    return new kq(this, this.o);
  };
  var jq = function (a, b) {
    var c = Cb(a.j.v);
    if (!b || _.x(b) || "number" == typeof b)
      Oh.B().error(U("PassbackSlot.updateTargetingFromMap", [b]));
    else
      try {
        _.I(
          b,
          function (d, e) {
            dl(this.j, e, d);
          },
          a
        );
      } catch (d) {
        (a.j.v = Cb(c)),
          Oh.B().error(U("PassbackSlot.updateTargetingFromMap", [b]));
      }
  };
  zr.prototype.display = function () {
    document.write('<div id="' + _.lc(this.j.U.j) + '"></div>');
    _.V(this.j)
      ? Ar(this.m, this.j)
      : _.uh("gpt_pb_write", function (a) {
          _.Q(a);
        });
  };
  zr.prototype.set = function (a, b) {
    if (!_.x(a) || !b || "page_url" != a) return this;
    a = this.j;
    a.ga && (a.ia = b);
    return this;
  };
  zr.prototype.get = function (a) {
    return _.x(a) && "page_url" == a ? this.j.ia : null;
  };
  var Br = function (a, b) {
      b = void 0 === b ? { changeCorrelator: !0 } : b;
      this.j = a;
      this.options = b;
    },
    Cr = function (a) {
      var b = vr(Y());
      null == _.ho(b, "google_ad_impl") && (b.j.google_ad_impl = a);
    },
    Dr = function () {
      Dl.call(this);
      this.j = !1;
      this.K = {};
      this.w = {};
      this.P = [];
      this.J = this.I = this.C = this.O = this.$ = !1;
      this.F = [];
      this.aa = {};
      this.N = this.D = !1;
      this.M = -1;
      this.W = this.Y = this.T = this.V = "";
      this.Z = !1;
      this.o = new _.ol();
      this.A = _.K(87) || _.K(64) ? Bq() : null;
      this.H = {};
      this.ca = 1;
    };
  _.v(Dr, Dl);
  _.n = Dr.prototype;
  _.n.Aa = function () {
    return new xq(this, Ul);
  };
  _.n.set = function (a, b) {
    if (!(_.x(a) && 0 < a.length))
      return this.log.G(U("PubAdsService.set", [a, b]), this, null), this;
    this.K[a] = b;
    this.log.info(ri(a, String(b), this.ba()), this, null);
    return this;
  };
  _.n.get = function (a) {
    return this.K[a];
  };
  _.n.display = function (a, b, c, d) {
    c = void 0 === c ? "" : c;
    d = void 0 === d ? "" : d;
    var e = "";
    if (c)
      if (_.B(c) && 1 == c.nodeType) {
        var f = c;
        e = f.id;
      } else e = c;
    Tk(this);
    if ((a = Bm(a, b, e).slot))
      f && !e && (f.id = a.U.j), a.addService(this), cl(a, d), Gm(f || a.U.j);
  };
  _.n.nb = function () {
    this.j = !0;
    window.google_noFetch = !1;
    var a = _.kg(8, -1);
    -1 != a && (this.o.l = a);
    Z(Y()).C = this.o;
    this.I &&
      ((a = vr(Y())),
      (a.j.google_collapse_empty_div = "true"),
      this.J && (a.j.google_divs_start_collapsed = "true"));
    if (this.C) {
      Cr("gut_friendly_iframe_sra");
      Er(this);
      a = _.pa(this.v);
      for (var b = a.next(); !b.done; b = a.next()) Fr(this, b.value);
    } else Cr("gut_friendly_iframe");
    window.google_DisableInitialLoad = this.O;
    qq(this);
    uq(this);
    this.Z && wq(this);
    Hg("pubadsReady", !0);
  };
  _.n.ba = function () {
    return "publisher_ads";
  };
  _.n.wb = function (a) {
    0 != a.ka() && (a.Bb = !1);
    a.ga || Fr(this, a);
    this.A && Dq(this.A, a);
    Dl.prototype.wb.call(this, a);
  };
  _.n.pb = function (a) {
    Tk(this);
    Er(this);
    Fr(this, a);
    this.log.info(Di());
    var b = Y(),
      c = Zp(b);
    b = Z(b);
    var d = null != a.j && !c.l;
    b.j[_.N(a)] &&
      !d &&
      (_.K(130) ||
        c.qa ||
        !(b = _.V(a)) ||
        ((d = c.j), _.K(130) || (d.L[_.N(a)] = b)),
      cr(c, a));
    this.aa[a.getAdUnitPath()] = !0;
    if (this.j)
      for (a = 0; a < this.F.length; ++a)
        (c = this.F[a]),
          this.aa[c.j[0].getAdUnitPath()] &&
            (Gr(this, c.j, c.options), _.fb(this.F, a--));
    else this.log.error(Ci(), this);
  };
  var Fr = function (a, b) {
      (a.j || _.K(141)) && xn(Z(Y()), b);
      if (a.j) {
        var c = Z(Y()),
          d = rb(b.P);
        d = _.pa(d);
        for (var e = d.next(); !e.done; e = d.next()) {
          e = e.value;
          var f;
          if ((f = !!c.j[_.N(b)])) {
            f = String(b.get(e));
            var g = _.N(b);
            null == c.o[g] && (c.o[g] = new pn(c.T));
            f = qn(c.o[g], e, f);
          }
          f ||
            a.log.G(Fi(String(e), String(b.get(e)), b.getAdUnitPath()), a, b);
        }
      }
    },
    Er = function (a) {
      if ((_.K(148) || !a.$) && a.j) {
        a.$ = !0;
        var b = rb(a.K),
          c = Z(Y());
        b = _.pa(b);
        for (var d = b.next(); !d.done; d = b.next())
          (d = d.value),
            Fn(c, d, String(a.get(d))) ||
              a.log.G(Ei(String(d), String(a.get(d))), a);
        _.I(a.w, function (e, f) {
          if (_.z(e)) {
            Dn(c, f);
            e = _.pa(e);
            for (var g = e.next(); !g.done; g = e.next()) Cn(c, f, g.value);
          }
        });
        a = _.pa(a.P);
        for (b = a.next(); !b.done; b = a.next()) En(c, b.value);
      }
    },
    mq = function (a, b, c) {
      var d = null;
      _.x(c) ? (d = [c]) : _.z(c) ? (d = c) : _.Ea(c) && (d = _.ib(c));
      if (_.x(b) && !Gb(oc(b)) && d) {
        if ("gpt-beta" == b) {
          if (a.m) {
            a.log.G(vj(d.join(",")));
            return;
          }
          if (Object.prototype.hasOwnProperty.call(a.w, b)) {
            a.log.G(wj(d.join(",")));
            return;
          }
          var e = Hl.B(),
            f = [];
          _.D(d, function (g) {
            e.j = g;
            var h = _.Il.B().j(9);
            1 === h.length && (f.push(g), f.push(g + "-" + h[0]));
          });
          d = f;
        }
        a.w[b] = d;
        a.log.info(hj(b, d ? d.join() : String(c), a.ba()), a);
        if (a.j)
          for (Dn(Z(Y()), b), a = _.pa(d), c = a.next(); !c.done; c = a.next())
            (c = c.value), Cn(Z(Y()), b, c);
      } else a.log.G(U("PubAdsService.setTargeting", [b, c]), a);
    },
    nq = function (a) {
      a.m && !a.C
        ? a.log.G(Hi("enableSingleRequest"), a)
        : (a.log.info(Qi("single request"), a),
          (a.C = !0),
          (Hl.B()[3][12] = function () {
            return !0;
          }),
          (Z(Y()).N = !0));
      return a.C;
    },
    oq = function (a, b, c) {
      if (!_.x(b) || 0 >= b.length || !c)
        return a.log.error(U("PubAdsService.definePassback", [b, c])), null;
      if (_.K(146)) {
        b = Bm(b, c);
        var d = b.slot;
        b = b.Ca;
        return d && b ? new zr(d, a, b) : null;
      }
      var e = a.ca++;
      _.K(153) && e--;
      var f = "gpt_unit_" + b + "_" + e;
      d = new $k();
      _.H(d, 1, b);
      _.H(d, 2, f);
      var g = pm.B();
      md(g.j, 1, d, $k);
      b = new Ul(b, e, c, f, d);
      return new zr(b, a, d);
    },
    Ar = function (a, b) {
      Tk(a);
      _.K(149) ? (a = Y()) : (ur || (ur = new tr()), (a = ur));
      vr(a).j.google_ad_impl = "gut_friendly_iframe";
      xn(Z(a), b);
      cr(Zp(a), b);
    },
    pq = function (a, b, c) {
      if (
        (b && !_.z(b)) ||
        (c && (!_.B(c) || (c.changeCorrelator && !_.xa(c.changeCorrelator))))
      )
        a.log.G(U("PubAdsService.refresh", _.u([b, c], _.w)), a);
      else {
        var d = null;
        if (b && ((d = Hr(a, b)), !d.length)) {
          a.log.G(U("PubAdsService.refresh", _.u([b, c], _.w)), a);
          return;
        }
        Gr(a, d, c);
      }
    },
    Gr = function (a, b, c) {
      if (_.K(104))
        Tk(a),
          _.D(b || [], function (e) {
            e.addService(a);
          });
      else if (!a.j) {
        a.C
          ? (a.log.info(Vi(), a),
            b ? eb(a.F, new Br(b, c)) : eb(a.F, new Br(a.v, c)))
          : a.log.G(Ti(), a);
        return;
      }
      a.log.info(Wi(), a);
      var d = {};
      _.w(c) &&
        _.w(c.changeCorrelator) &&
        (d.changeCorrelator = c.changeCorrelator);
      (b = Ir(a, b, d)) &&
        a.A &&
        _.D(b, function (e) {
          return Eq(a.A, e);
        });
    },
    Ir = function (a, b, c) {
      var d = Y(),
        e = Zp(d),
        f = Z(d);
      b =
        null != b
          ? _.u(b, function (k) {
              return !!f.j[_.N(k)];
            })
          : yn(f);
      var g = ab(b, function (k) {
        return !!a.H[_.N(k)];
      });
      0 < g &&
        _.uh("gpt_cbr", function (k) {
          _.O(k, "num", g);
          _.Q(k);
        });
      d = _.pa(b);
      for (var h = d.next(); !h.done; h = d.next()) delete a.H[_.N(h.value)];
      d = _.u(b, function (k) {
        return Bn(f, k);
      });
      if (!d.length) return null;
      e.ab(d, c);
      return b;
    },
    Jr = function (a, b, c) {
      if (
        (b && !_.z(b)) ||
        (c.videoStreamCorrelator && !_.r(c.videoStreamCorrelator)) ||
        (c.videoPodNumber && !_.r(c.videoPodNumber)) ||
        (c.videoPodPosition && !_.r(c.videoPodPosition)) ||
        (c.persistentRoadblocksOnly && !_.xa(c.persistentRoadblocksOnly)) ||
        (c.clearUnfilledSlots && !_.xa(c.clearUnfilledSlots))
      )
        a.log.G(U("PubAdsService.videoRefresh", _.u([b, c], _.w)), a);
      else if (a.j) {
        var d = null;
        if (b && ((d = Hr(a, b)), !d.length)) {
          a.log.error(Si("videoRefresh"), a);
          return;
        }
        a.log.info(Wi(), a);
        (b = Ir(a, d, c)) &&
          a.A &&
          _.D(b, function (e) {
            return Eq(a.A, e);
          });
      } else a.log.G(Ti(), a);
    },
    qq = function (a) {
      if (a.D && a.j) {
        var b = Zp(Y()),
          c = a.V;
        a = a.T;
        b.oa = !0;
        b.$ = c;
        b.Z = a;
        b.videoStreamCorrelator = Mp();
      }
    },
    uq = function (a) {
      a.j && Op(Zp(Y()), -1 == a.M ? void 0 : a.M);
    },
    vq = function (a) {
      return 0 == a.v.length
        ? "not_available"
        : a.j
        ? Zp(Y()).C + ""
        : "not_loaded";
    },
    rq = function (a, b) {
      a.I
        ? a.log.G(bj(), a)
        : a.m
        ? a.log.G(Hi("collapseEmptyDivs"), a)
        : ((a.J = !!b),
          _.uh("gpt_ced", function (c) {
            _.O(c, "sc", a.J ? "t" : "f");
            _.O(c, "level", "page");
            _.Q(c);
          }),
          a.log.info(aj(String(a.J)), a),
          (a.I = !0));
      return a.I;
    },
    dq = function (a, b) {
      b = void 0 === b ? null : b;
      var c = Y(),
        d = Zp(c);
      c = Z(c);
      b = b ? Hr(a, b) : yn(c);
      c = {};
      for (
        var e = _.pa(b), f = e.next();
        !f.done;
        c = { Na: c.Na }, f = e.next()
      )
        (c.Na = _.N(f.value)),
          a.H[c.Na] ||
            ((a.H[c.Na] = !0),
            setTimeout(
              (function (g) {
                return function () {
                  delete a.H[g.Na];
                };
              })(c),
              0
            ));
      return d.Xa(b);
    },
    sq = function (a, b) {
      if (!a.j) return a.log.G(Ui(), a), !1;
      var c = null;
      if (b && ((c = Hr(a, b)), 0 == c.length))
        return a.log.G(U("PubAdsService.clear", _.u([b], _.w)), a), !1;
      a.log.info(Xi(), a);
      return dq(a, c);
    };
  Dr.prototype.getVersion = function () {
    if (this.j) return mh();
  };
  var Hr = function (a, b) {
      var c = [];
      if (!_.z(b)) return c;
      _.D(b, function (d, e) {
        (d = Fg(d, Ul)) && !d.La() ? c.push(d) : a.log.G(cj(String(e)), a);
      });
      return c;
    },
    wq = function (a) {
      a.Z = !0;
      if (a.j) {
        a = Z(Y());
        a.w = !0;
        var b = new _.oh("gpt_markAsAmp", Ug(), _.L(23));
        _.Q(b, a);
        try {
          var c = ff(_.p);
          c && _.O(b, "ntype", c);
          var d = _.q(_.p.location.ancestorOrigins, function (e) {
            return (pe(e) || e).substr(0, 20);
          });
          _.O(b, "ost", d.slice(0, 10).join());
        } catch (e) {}
        _.qh(b);
      }
    };
  Dr.prototype.destroySlots = function (a) {
    var b = Dl.prototype.destroySlots.call(this, a);
    if (0 == b.length) return b;
    if (this.j) {
      var c = Z(Y());
      dq(this, a);
      Nn(c, a);
    }
    return b;
  };
  var cq = _.R(26, function () {
    var a = _.Jl.B(),
      b = a.find("publisher_ads");
    b ||
      (_.L(36) &&
        _.uh("gpt_mobile", function (c) {
          _.Q(c);
        }),
      (b = new Dr()),
      a.add(b));
    return b;
  });
  Hg("pubads", function () {
    return cq().l();
  });
  var Kr = function () {
    Dl.call(this);
    this.M = !0;
    this.o = this.H = !1;
    this.K = 0;
    this.J = this.I = void 0;
    this.O = this.C = !1;
    this.A = {};
    this.j = {};
    this.w = !1;
    this.F = {};
    this.N = !1;
  };
  _.v(Kr, Dl);
  _.n = Kr.prototype;
  _.n.Aa = function () {
    return new iq(this, Ul);
  };
  _.n.set = function (a, b) {
    _.x(a) && 0 < a.length
      ? ((this.F[a] = b),
        this.log.info(ri(a, String(b), this.ba()), this, null))
      : this.log.G(si(String(a), String(b), this.ba()), this, null);
    return this;
  };
  _.n.get = function (a) {
    return this.F[a];
  };
  _.n.display = function (a, b, c, d) {
    c = void 0 === c ? "" : c;
    d = void 0 === d ? "" : d;
    Tk(this);
    a = Bm(a, b, c).slot;
    a.addService(this);
    cl(a, d);
    Gm(a.U.j);
  };
  _.n.nb = function () {
    this.M
      ? this.D()
      : this.C ||
        (_.p.document.write(
          '<script type="text/javascript" src="' + Rg() + '">\x3c/script>'
        ),
        (this.C = !0));
  };
  var eq = function (a) {
      var b = cq();
      if (!b.m) return !1;
      b = b.v;
      a = a.v;
      if (b.length != a.length) return !1;
      for (var c = 0; c < a.length; ++c) {
        for (var d = !1, e = 0; e < b.length; ++e)
          if (a[c] === b[e]) {
            d = !0;
            break;
          }
        if (!d) return !1;
      }
      return !0;
    },
    fq = function (a, b) {
      (b = void 0 === b ? "" : b) &&
        !a.N &&
        _.uh("ima_sdk_v", function (c) {
          a.N = !0;
          _.O(c, "v", b);
        });
      return vq(cq());
    },
    aq = function (a, b) {
      var c = cq();
      if (c.m) {
        if (a.w) {
          if (!eq(a)) {
            a.log.G(vi());
            return;
          }
          dq(c);
        }
        var d = { isVideoRefresh: !0 };
        _.w(a.K) && (d.videoStreamCorrelator = a.K);
        a.I && (d.videoPodNumber = a.I);
        a.J && (d.videoPodPosition = a.J);
        a.w && (d.persistentRoadblocksOnly = a.w);
        a.o && (d.clearUnfilledSlots = a.o);
        Jr(c, b, d);
      } else a.log.error(wi("PubAds", "refresh"));
    },
    gq = function (a, b) {
      if (cq().m && Am(b)) return (a = b.j), !!a && !!_.G(a, 11);
      a.log.error(xi());
      return !1;
    },
    bq = function (a, b) {
      for (var c = a.R, d = [], e = 0; e < b.length; ++e) {
        var f = b[e];
        zb(c, f) ? d.push(c[f]) : a.log.G(yi(), a);
      }
      return d;
    };
  Kr.prototype.ba = function () {
    return "companion_ads";
  };
  var Qg = function () {
    return (
      _.gh() + "//pagead2.googlesyndication.com/pagead/show_companion_ad.js"
    );
  };
  Kr.prototype.D = function () {
    if (!this.O) {
      var a = document,
        b = Qg();
      this.log.info(zi("GPT CompanionAds"), this);
      _.Vd(a, b);
      this.O = !0;
    }
  };
  Kr.prototype.P = function (a, b) {
    _.xh(a, b);
    this.log.error(Ai("GPT CompanionAds"), this);
  };
  var hq = function (a, b) {
    var c = b && b.U.m;
    if (c && c in a.A && _.V(b) && a.m && !gq(a, b)) {
      b.qa = a.A[c];
      var d = new _.xl(b.l(), !1, a.ba());
      if (a.j.hasOwnProperty(c)) {
        var e = a.j[c];
        delete a.j[c];
        _.yl(d, e);
      }
      return Zl(b, d);
    }
    return !1;
  };
  Kr.prototype.pb = function (a) {
    hq(this, a);
  };
  var Lr = Kr.prototype;
  Lr.D = _.R(70, Lr.D, Lr.P);
  var Mr = _.R(57, function () {
    var a = _.Jl.B(),
      b = a.find("companion_ads");
    b || ((b = new Kr()), a.add(b));
    return b;
  });
  Hg("companionAds", function () {
    return Mr().l();
  });
  var Or = function (a, b) {
    Uk.call(this, a);
    var c = this;
    this.setContent = S(72, function (d, e) {
      d = Fg(d, b);
      var f;
      if ((f = d))
        Am(d) && _.x(e) && 0 < e.length && ((a.j[d.U.m] = e), Nr(a, d)),
          (f = void 0);
      return f;
    });
    this.set = S(559, function (d, e) {
      a.set(d, e);
      return c;
    });
    this.get = S(560, function (d) {
      return a.get(d);
    });
    this.getAttributeKeys = S(561, function () {
      return rb(a.o);
    });
    this.display = S(562, function (d, e, f, g) {
      return a.display(d, e, void 0 === f ? "" : f, void 0 === g ? "" : g);
    });
  };
  _.v(Or, Uk);
  var Pr = function () {
    Dl.call(this);
    this.o = {};
    this.j = {};
  };
  _.v(Pr, Dl);
  _.n = Pr.prototype;
  _.n.Aa = function () {
    return new Or(this, Ul);
  };
  _.n.ba = function () {
    return "content";
  };
  _.n.set = function (a, b) {
    _.x(a) && 0 < a.length
      ? ((this.o[a] = b),
        this.log.info(ri(a, String(b), this.ba()), this, null))
      : this.log.G(si(String(a), String(b), this.ba()), this, null);
    return this;
  };
  _.n.get = function (a) {
    return this.o[a];
  };
  _.n.display = function (a, b, c, d) {
    c = void 0 === c ? "" : c;
    d = void 0 === d ? "" : d;
    Tk(this);
    a = Bm(a, b, c).slot;
    a.addService(this);
    cl(a, d);
    Gm(a.U.j);
  };
  var Nr = function (a, b) {
    var c = b && b.U.m;
    c in a.j &&
      a.m &&
      _.V(b) &&
      !b.D &&
      ((b.qa = a.j[c]), (a = new _.xl(b.l(), !1, a.ba())), Zl(b, a));
  };
  Pr.prototype.nb = function () {
    for (var a = this.v, b = 0; b < a.length; ++b) Nr(this, a[b]);
  };
  Pr.prototype.pb = function (a) {
    Nr(this, a);
  };
  var Qr = _.R(71, function () {
    var a = _.Jl.B(),
      b = a.find("content");
    b || ((b = new Pr()), a.add(b));
    return b;
  });
  Hg("content", function () {
    return Qr().l();
  });
  if (window.googletag.evalScripts) window.googletag.evalScripts();
  else {
    var Rr = window,
      Sr = _.Hf(Rr);
    if (Sr) {
      var Tr = { label: "2", type: 9, value: Sr },
        Ur = (Rr.google_js_reporting_queue =
          Rr.google_js_reporting_queue || []);
      2048 > Ur.length && Ur.push(Tr);
    }
    Hg("evalScripts", function () {
      eo(document);
    });
    fo();
  }
}.call(
  this.googletag && googletag.fifWin ? googletag.fifWin.parent : this,
  {}
));
