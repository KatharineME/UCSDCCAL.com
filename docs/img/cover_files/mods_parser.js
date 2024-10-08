var MODSParser = (function () {
  function t(t, e) {
    (this.eid = t), (this.mods = e);
  }
  return (
    (t.prototype.convert = function () {
      if (null == this.publication) {
        var e = this.eid,
          t = this.mods,
          r = {
            id: e,
            type: this.findType(t),
            title: this.xtitle(t.titleInfo),
            year: null,
            ext: {},
          },
          n = function (t, e) {
            null != e && (r[t] = e);
          };
        try {
          n("author", this.parseNames(t, ["author", "aut"])),
            n("editor", this.parseNames(t, ["editor", "edt"])),
            n("composer", this.parseNames(t, ["composer"])),
            n("interviewer", this.parseNames(t, ["interviewer"])),
            n("recipient", this.parseNames(t, ["recipient"])),
            n("translator", this.parseNames(t, ["translator", "trl"])),
            n("contributor", this.parseNames(t, ["contributor", "ctb"]));
        } catch (t) {
          console.error(t);
        }
        var i = t.originInfo ? t.originInfo[0] : {},
          a = t.relatedItem ? t.relatedItem : {},
          s = a.originInfo ? a.originInfo : {},
          o = t.dateIssued ? t.dateIssued : {};
        try {
          var l = t.relatedItem;
          if (l)
            for (var c in l) {
              a = CwZ(l)[0];
              a.type && "host" == a.type
                ? n("container-author", this.parseNames(a, ["author"]))
                : a.$ &&
                  "series" == a.$.type &&
                  n("collection-editor", this.parseNames(a, ["editor"])),
                a.titleInfo &&
                  (n("container-title", this.xtitle(a.titleInfo)),
                  n("collection-title", this.text(a.titleInfo[0].partNumber)));
            }
        } catch (t) {
          console.warn("MODS.2 ..", t.message, t.source, e);
        }
        try {
          var u = i.dateIssued || s.dateIssued || o,
            f = this.xdate(this.text(u));
          f && (n("issued", f), n("year", f.year));
        } catch (t) {
          console.warn("MODS.3 ..", t.message, t.source, e);
        }
        try {
          n("publisher-place", this.xplace(i) || this.xplace(s));
          var p = this.text(i.publisher || s.publisher);
          if (!p) {
            var h = this.parseNames(t, ["degree grantor"]);
            h && h[0] && (p = h[0].literal);
          }
          n("publisher", p);
        } catch (t) {
          console.warn("MODS.4 ..", t.message, t.source, e, r);
        }
        try {
          var d = a.part || t.part;
          if (d) {
            var g = d[0].detail;
            g && g[0].$ && n(g[0].$.type, this.text(g[0].number)),
              d[0].extent && n("page", this.xpage(d[0].extent[0]));
          }
          this.identify(r, a.identifier), this.identify(r, t.identifier);
          var x = this.text(t.abstract);
          x && (r.ext.description = x);
          for (var _ = [], m = t.subject || [], y = 0; y < m.length; y++) {
            var v = this.text(m[y].topic);
            this.containsObj(_, v) || _.push(v);
          }
          1 < _.length && (r.ext.keywords = _.join("; "));
        } catch (t) {
          console.warn("MODS.5 ..", t.message, t.source, e);
        }
        try {
          if (t.location) {
            var b = t.location[0].url,
              O = "";
            (O =
              b && b.length
                ? this.text(t.location[0].url[0])
                : this.text(t.location[0].url)),
              n("URL", O);
            var N = i.dateAccessed || i.dateIssued || s.dateIssued;
            f = this.xdate(this.text(N));
            n("accessed", f), (r.ext.url = []);
            for (var T = 0; T < b.length; T++) {
              var S = b[T],
                A = {};
              for (var D in ((A.url = this.text(S)), S.$)) A[D] = S.$[D];
              r.ext.url.push(A);
            }
          }
        } catch (t) {
          console.warn("MODS.6 ..", t.message, t.source, e);
        }
        try {
          var M = [];
          if (t.note) {
            var F = t.note.length;
            for (T = 0; T < F; T++) M.push(this.text(t.note[T]));
            (r.note = M[0]), (r.notes = M);
          }
        } catch (t) {
          console.warn("MODS.7 (notes)..", t.message, t.source, e);
        }
        this.publication = r;
      }
      return this.publication;
    }),
    (t.prototype.findType = function (t) {
      for (
        var e = null, r = null, n = null, i = t.genre || [], a = 0;
        a < i.length;
        a++
      ) {
        var s = i[a];
        if (s.$ && "colwiz" == s.$.authority) {
          n = this.text(s);
          break;
        }
        r = this.text(s);
      }
      if ((n && (r = n), !r)) {
        for (a = 0; a < i.length; a++) r = i[a];
        i = (t.relatedItem && t.relatedItem[0].genre) || [];
        for (a = 0; a < i.length; a++) e = i[a];
      }
      return PubType.toCSLType(r, e);
    }),
    (t.prototype.text = function (t) {
      if (null == t) return null;
      var e = t[0];
      if (e) {
        if (e._) return e._;
        if (e.nodeValue) return e.nodeValue;
      }
      return t._ ? t._ : t.nodeValue ? t.nodeValue : t.toString();
    }),
    (t.prototype.xplace = function (t) {
      if (!t) return null;
      var e = t.place;
      if (!e) return null;
      for (var r = 0; r < e.length; r++) {
        var n = e[r].placeTerm;
        if ((n[0] && (n = n[0]), n.$ && "text" == n.$.type))
          return this.text(n);
      }
      return e && e[0] ? this.text(e[0].placeTerm) : null;
    }),
    (t.prototype.xdate = function (t) {
      try {
        if (!t) return null;
        var e = new Date(t),
          r = { year: e.getFullYear() };
        return (
          r.year &&
            6 < t.length &&
            ((r.month = e.getMonth() + 1), (r.day = e.getDate())),
          r
        );
      } catch (t) {
        return null;
      }
    }),
    (t.prototype.xtitle = function (t) {
      var e = t;
      if (t.length) {
        e = t[0];
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.$ && "abbreviated" == n.$.type) || (e = n);
        }
      }
      var i = this.text(e.title);
      if (!i) return null;
      var a = this.text(e.subTitle);
      a && 1 < a.trim().length && (i += ": " + a.trim()), (i = i.trim());
      var s = this.text(e.nonSort);
      return (
        s && 0 < s.length && (i = s + " " + i),
        (i = i.replace(/\{|\}|\\|\$/g, "")),
        (i = i
          .replace(/&lt;/g, "<")
          .replace(/&gt;/g, ">")
          .replace(/<(\/)?(bold)>/gi, "<$1b>")
          .replace(/<(\/)?(italic)>/gi, "<$1i>")
          .replace(/<(\/)?(xref)>/gi, "<$1sup>")),
        i
      );
    }),
    (t.prototype.identify = function (t, e) {
      if (null == e) return !1;
      t.ext.idents = t.ext.idents || {};
      for (var r = 0; r < e.length; r++)
        try {
          var n = e[r],
            i = n.$.type,
            a = this.text(n).replace("&amp;", "&");
          switch (
            ("[object Object]" == a && (a = ""), (t.ext.idents[i] = a), i)
          ) {
            case "doi":
              t.DOI = a;
              break;
            case "isbn":
              t.ISBN = a;
              break;
            case "issn":
              t.ISSN = a;
              break;
            case "citekey":
              t.citekey = a;
          }
        } catch (t) {
          console.error(t);
        }
    }),
    (t.prototype.parseNames = function (t, e) {
      var r = [],
        n = t.name;
      if (!n) return null;
      for (var i = 0; i < n.length; i++) {
        var a;
        if (
          (n[i].role && (a = this.text(n[i].role.roleTerm)),
          (a && "[object Object]" != a) || (a = "author"),
          Array.isArray(e))
        ) {
          var s = !1;
          if (
            (e.forEach(function (t) {
              s = s || a == t;
            }),
            !s)
          )
            continue;
        } else if (a != e) continue;
        for (
          var o = n[i].namePart, l = null, c = null, u = "", f = 0;
          f < o.length;
          f++
        ) {
          var p = o[f],
            h = p.type ? p.type : null;
          if ("family" == h) l = this.text(p);
          else if ("given" == h) {
            "" != u && (u += " ");
            var d = this.text(p);
            1 == d.length && (d += "."), (u += d);
          } else c = this.text(p);
        }
        l && "others" != l.toLowerCase()
          ? 0 < u.length
            ? r.push({ family: l.trim(), given: u.trim() })
            : r.push({ literal: l.trim(), "parse-names": !0 })
          : c && r.push({ literal: c.trim(), "parse-names": !0 });
      }
      return 0 == r.length ? null : r;
    }),
    (t.prototype.xpage = function (t) {
      if (t && t.$) {
        var e = t.$.unit;
        if (e && "page" == e.substr(0, 4)) {
          var r = this.text(t.start);
          if (r) {
            var n = this.text(t.end);
            return n && (r += "-" + n), r;
          }
          return this.text(t.list);
        }
      }
      return null;
    }),
    (t.prototype.containsObj = function (t, e) {
      for (var r = t.length, n = 0; n < r; n++) if (t[n] === e) return !0;
      return !1;
    }),
    t
  );
})();
function X2JS(p) {
  "use strict";
  (p = p || {}),
    (function () {
      void 0 === p.escapeMode && (p.escapeMode = !0);
      (p.attributePrefix = p.attributePrefix || "_"),
        (p.arrayAccessForm = p.arrayAccessForm || "none"),
        (p.emptyNodeForm = p.emptyNodeForm || "text"),
        void 0 === p.enableToStringFunc && (p.enableToStringFunc = !0);
      (p.arrayAccessFormPaths = p.arrayAccessFormPaths || []),
        void 0 === p.skipEmptyTextNodesForObj &&
          (p.skipEmptyTextNodesForObj = !0);
      void 0 === p.stripWhitespaces && (p.stripWhitespaces = !0);
      p.datetimeAccessFormPaths = p.datetimeAccessFormPaths || [];
    })(),
    (function () {
      function t(t) {
        var e = String(t);
        return 1 === e.length && (e = "0" + e), e;
      }
      "function" != typeof String.prototype.trim &&
        (String.prototype.trim = function () {
          return this.replace(/^\s+|^\n+|(\s|\n)+$/g, "");
        });
      "function" != typeof Date.prototype.toISOString &&
        (Date.prototype.toISOString = function () {
          return (
            this.getUTCFullYear() +
            "-" +
            t(this.getUTCMonth() + 1) +
            "-" +
            t(this.getUTCDate()) +
            "T" +
            t(this.getUTCHours()) +
            ":" +
            t(this.getUTCMinutes()) +
            ":" +
            t(this.getUTCSeconds()) +
            "." +
            String((this.getUTCMilliseconds() / 1e3).toFixed(3)).slice(2, 5) +
            "Z"
          );
        });
    })();
  var h = {
    ELEMENT_NODE: 1,
    TEXT_NODE: 3,
    CDATA_SECTION_NODE: 4,
    COMMENT_NODE: 8,
    DOCUMENT_NODE: 9,
  };
  function d(t) {
    var e = t.localName;
    return (
      null == e && (e = t.baseName),
      (null != e && "" != e) || (e = t.nodeName),
      e
    );
  }
  function l(t) {
    return "string" == typeof t
      ? t
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/"/g, "&quot;")
          .replace(/'/g, "&#x27;")
          .replace(/\//g, "&#x2F;")
      : t;
  }
  function g(t, e, r) {
    switch (p.arrayAccessForm) {
      case "property":
        t[e] instanceof Array
          ? (t[e + "_asArray"] = t[e])
          : (t[e + "_asArray"] = [t[e]]);
    }
    if (!(t[e] instanceof Array) && 0 < p.arrayAccessFormPaths.length) {
      for (var n = 0; n < p.arrayAccessFormPaths.length; n++) {
        var i = p.arrayAccessFormPaths[n];
        if ("string" == typeof i) {
          if (i == r) break;
        } else if (i instanceof RegExp) {
          if (i.test(r)) break;
        } else if ("function" == typeof i && i(t, e, r)) break;
      }
      n != p.arrayAccessFormPaths.length && (t[e] = [t[e]]);
    }
  }
  function x(t) {
    var e = t.split(/[-T:+Z]/g),
      r = new Date(e[0], e[1] - 1, e[2]),
      n = e[5].split(".");
    if (
      (r.setHours(e[3], e[4], n[0]),
      1 < n.length && r.setMilliseconds(n[1]),
      e[6] && e[7])
    ) {
      var i = 60 * e[6] + Number(e[7]),
        a = /\d\d-\d\d:\d\d$/.test(t) ? "-" : "+";
      (i = 0 + ("-" == a ? -1 * i : i)),
        r.setMinutes(r.getMinutes() - i - r.getTimezoneOffset());
    } else
      -1 !== t.indexOf("Z", t.length - 1) &&
        (r = new Date(
          Date.UTC(
            r.getFullYear(),
            r.getMonth(),
            r.getDate(),
            r.getHours(),
            r.getMinutes(),
            r.getSeconds(),
            r.getMilliseconds()
          )
        ));
    return r;
  }
  function _(t, e) {
    if (t.nodeType == h.DOCUMENT_NODE) {
      for (var r = new Object(), n = t.childNodes, i = 0; i < n.length; i++) {
        var a = n.item(i);
        if (a.nodeType == h.ELEMENT_NODE) {
          var s = d(a);
          r[s] = _(a, s);
        }
      }
      return r;
    }
    if (t.nodeType == h.ELEMENT_NODE) {
      r = new Object();
      r.__cnt = 0;
      for (n = t.childNodes, i = 0; i < n.length; i++) {
        (a = n.item(i)), (s = d(a));
        a.nodeType != h.COMMENT_NODE &&
          (r.__cnt++,
          null == r[s]
            ? ((r[s] = _(a, e + "." + s)), g(r, s, e + "." + s))
            : (null != r[s] &&
                (r[s] instanceof Array ||
                  ((r[s] = [r[s]]), g(r, s, e + "." + s))),
              (r[s][r[s].length] = _(a, e + "." + s))));
      }
      for (var o = 0; o < t.attributes.length; o++) {
        var l = t.attributes.item(o);
        r.__cnt++, (r[p.attributePrefix + l.name] = l.value);
      }
      var c = ((f = t), f.prefix);
      return (
        null != c && "" != c && (r.__cnt++, (r.__prefix = c)),
        null != r["#text"] &&
          ((r.__text = r["#text"]),
          r.__text instanceof Array && (r.__text = r.__text.join("\n")),
          p.escapeMode &&
            (r.__text =
              ((u = r.__text),
              u
                .replace(/&amp;/g, "&")
                .replace(/&lt;/g, "<")
                .replace(/&gt;/g, ">")
                .replace(/&quot;/g, '"')
                .replace(/&#x27;/g, "'")
                .replace(/&#x2F;/g, "/"))),
          p.stripWhitespaces && (r.__text = r.__text.trim()),
          delete r["#text"],
          "property" == p.arrayAccessForm && delete r["#text_asArray"],
          (r.__text = (function (t, e, r) {
            if (0 < p.datetimeAccessFormPaths.length) {
              for (
                var n = r.split(".#")[0], i = 0;
                i < p.datetimeAccessFormPaths.length;
                i++
              ) {
                var a = p.datetimeAccessFormPaths[i];
                if ("string" == typeof a) {
                  if (a == n) break;
                } else if (a instanceof RegExp) {
                  if (a.test(n)) break;
                } else if ("function" == typeof a && a(obj, e, n)) break;
              }
              return i != p.datetimeAccessFormPaths.length ? x(t) : t;
            }
            return t;
          })(r.__text, s, e + "." + s))),
        null != r["#cdata-section"] &&
          ((r.__cdata = r["#cdata-section"]),
          delete r["#cdata-section"],
          "property" == p.arrayAccessForm &&
            delete r["#cdata-section_asArray"]),
        1 == r.__cnt && null != r.__text
          ? (r = r.__text)
          : 0 == r.__cnt && "text" == p.emptyNodeForm
          ? (r = "")
          : 1 < r.__cnt &&
            null != r.__text &&
            p.skipEmptyTextNodesForObj &&
            ((p.stripWhitespaces && "" == r.__text) || "" == r.__text.trim()) &&
            delete r.__text,
        delete r.__cnt,
        !p.enableToStringFunc ||
          (null == r.__text && null == r.__cdata) ||
          (r.toString = function () {
            return (
              (null != this.__text ? this.__text : "") +
              (null != this.__cdata ? this.__cdata : "")
            );
          }),
        r
      );
    }
    if (t.nodeType == h.TEXT_NODE || t.nodeType == h.CDATA_SECTION_NODE)
      return t.nodeValue;
    var u, f;
  }
  function o(t, e, r, n) {
    var i = "<" + (null != t && null != t.__prefix ? t.__prefix + ":" : "") + e;
    if (null != r)
      for (var a = 0; a < r.length; a++) {
        var s = r[a],
          o = t[s];
        p.escapeMode && (o = l(o)),
          (i += " " + s.substr(p.attributePrefix.length) + "='" + o + "'");
      }
    return (i += n ? "/>" : ">"), i;
  }
  function c(t, e) {
    return "</" + (null != t.__prefix ? t.__prefix + ":" : "") + e + ">";
  }
  function u(t, e) {
    return (
      ("property" == p.arrayAccessForm &&
        ((r = e.toString()),
        (n = "_asArray"),
        -1 !== r.indexOf(n, r.length - n.length))) ||
      0 == e.toString().indexOf(p.attributePrefix) ||
      0 == e.toString().indexOf("__") ||
      t[e] instanceof Function
    );
    var r, n;
  }
  function f(t) {
    var e = 0;
    if (t instanceof Object) for (var r in t) u(t, r) || e++;
    return e;
  }
  function m(t) {
    var e = [];
    if (t instanceof Object)
      for (var r in t)
        -1 == r.toString().indexOf("__") &&
          0 == r.toString().indexOf(p.attributePrefix) &&
          e.push(r);
    return e;
  }
  function y(t) {
    var e,
      r,
      n = "";
    return (
      t instanceof Object
        ? (n +=
            ((e = t),
            (r = ""),
            null != e.__cdata && (r += "<![CDATA[" + e.__cdata + "]]>"),
            null != e.__text &&
              (p.escapeMode ? (r += l(e.__text)) : (r += e.__text)),
            r))
        : null != t && (p.escapeMode ? (n += l(t)) : (n += t)),
      n
    );
  }
  function v(t, e, r) {
    var n = "";
    if (0 == t.length) n += o(t, e, r, !0);
    else
      for (var i = 0; i < t.length; i++)
        (n += o(t[i], e, m(t[i]), !1)), (n += b(t[i])), (n += c(t[i], e));
    return n;
  }
  function b(t) {
    var e = "",
      r = f(t);
    if (0 < r)
      for (var n in t)
        if (!u(t, n)) {
          var i = t[n],
            a = m(i);
          if (null == i || null == i) e += o(i, n, a, !0);
          else if (i instanceof Object)
            if (i instanceof Array) e += v(i, n, a);
            else if (i instanceof Date)
              (e += o(i, n, a, !1)), (e += i.toISOString()), (e += c(i, n));
            else {
              var s = f(i);
              0 < s || null != i.__text || null != i.__cdata
                ? ((e += o(i, n, a, !1)), (e += b(i)), (e += c(i, n)))
                : (e += o(i, n, a, !0));
            }
          else (e += o(i, n, a, !1)), (e += y(i)), (e += c(i, n));
        }
    return (e += y(t)), e;
  }
  (this.parseXmlString = function (t) {
    var e,
      r = window.ActiveXObject || "ActiveXObject" in window;
    if (void 0 === t) return null;
    if (window.DOMParser) {
      var n = new window.DOMParser(),
        i = null;
      if (!r)
        try {
          i = n.parseFromString("INVALID", "text/xml").childNodes[0]
            .namespaceURI;
        } catch (t) {
          i = null;
        }
      try {
        (e = n.parseFromString(t, "text/xml")),
          null != i &&
            0 < e.getElementsByTagNameNS(i, "parsererror").length &&
            (e = null);
      } catch (t) {
        e = null;
      }
    } else
      0 == t.indexOf("<?") && (t = t.substr(t.indexOf("?>") + 2)),
        (e = new ActiveXObject("Microsoft.XMLDOM")),
        (e.async = "false"),
        e.loadXML(t);
    return e;
  }),
    (this.asArray = function (t) {
      return t instanceof Array ? t : [t];
    }),
    (this.toXmlDateTime = function (t) {
      return t instanceof Date
        ? t.toISOString()
        : "number" == typeof t
        ? new Date(t).toISOString()
        : null;
    }),
    (this.asDateTime = function (t) {
      return "string" == typeof t ? x(t) : t;
    }),
    (this.xml2json = function (t) {
      return _(t);
    }),
    (this.xml_str2json = function (t) {
      var e = this.parseXmlString(t);
      return null != e ? this.xml2json(e) : null;
    }),
    (this.json2xml_str = function (t) {
      return b(t);
    }),
    (this.json2xml = function (t) {
      var e = this.json2xml_str(t);
      return this.parseXmlString(e);
    }),
    (this.getVersion = function () {
      return "1.1.5";
    });
}
