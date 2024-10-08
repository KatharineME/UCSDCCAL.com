var CWUtilsClass = (function () {
    function e() {
      this.isIframe = window !== window.parent;
      this.bParserTest = !1;
      this.browser = {
        adobeAir: !1,
        ie: !1,
        ie9: !1,
        ie8: !1,
        ie7: !1,
        ie6: !1,
        chrome: !1,
        firefox: !1,
        opera: !1,
        safari: !1,
      };
      this.sentry = {};
      this.ajax = {
        post: function (a, c, b, d) {
          void 0 === b && (b = function () {});
          void 0 === d && (d = function () {});
          void 0 === c && (c = {});
          CwZ.ajax({
            url: a,
            type: "POST",
            dataType: "text",
            data: c,
            success: b,
            error: d,
          });
        },
        get: function (a, c, b, d) {
          void 0 === b && (b = function () {});
          void 0 === d && (d = function () {});
          void 0 === c && (c = {});
          CwZ.ajax({
            url: a,
            type: "GET",
            dataType: "text",
            data: c,
            success: b,
            error: d,
          });
        },
      };
    }
    return (
      (e.prototype.removeTags = function (a) {
        return a.replace(
          RegExp(
            "(\\[(CSA|CrossRef|PubMed|Web of Science \u00ae|Taylor & Francis Online|Google Scholar)\\],?)",
            "g"
          ),
          ""
        );
      }),
      (e.prototype.matchDoi = function (a) {
        return a
          ? (a = a.match(/\b(10[.][0-9]{4,}(?:[.][0-9]+)*\/(?:\S)+)/g))
            ? a[0]
            : null
          : null;
      }),
      (e.prototype.findDoi = function (a, c, b) {
        a = CwZ(a)
          .find("." + c)
          .text();
        return !a && b && (a = b), CWUtils.matchDoi(a);
      }),
      (e.prototype.isValidURL = function (a) {
        return !!/(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/.test(
          a
        );
      }),
      (e.prototype.getPageUrl = function () {
        return window.parent.location.href;
      }),
      (e.prototype.getPageDomain = function () {
        var a = window.parent.location;
        return a.protocol + "//" + a.host;
      }),
      (e.prototype.getDomainFromURL = function (a) {
        a = a.replace(/^(.*\/\/)(.*?)(\/.*)$/, "$2");
        var c = /(.*?)(\w+)(\.[a-z]{2,3})(\.[a-z]{2})?$/;
        return (
          a.replace(c, "$1").replace(/\./g, ""), (a = a.replace(c, "$2")), a
        );
      }),
      (e.prototype.getQueryParam = function (a, c) {
        void 0 === c && (c = location.search);
        a = a.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var b = new RegExp("[\\?&]" + a + "=([^&#]*)").exec(c);
        return null == b ? "" : decodeURIComponent(b[1].replace(/\+/g, " "));
      }),
      (e.prototype.getFileTitle = function (a) {
        var c = a.pdfLink,
          b = c.indexOf("#"),
          d = c.indexOf("?"),
          b = Math.min(0 < b ? b : c.length, 0 < d ? d : c.length),
          c = c.substring(c.lastIndexOf("/", b) + 1, b),
          b = "";
        "" !== a.identifier &&
          ("number" == typeof a.identifier &&
            (a.identifier = a.identifier.toString()),
          (b = a.identifier.replace(/[\\\/:\*\?\"<>|]/g, "")));
        a = "";
        return (
          (a = 0 <= b.indexOf(c) ? b : b + "_" + c),
          180 < a.length && (a = a.substr(0, 180)),
          0 <= a.toLowerCase().indexOf(".pdf") ? a : a + ".pdf"
        );
      }),
      (e.prototype.updateScrollbar = function (a, c) {
        CwZ(a).each(function () {
          var a = CwZ(this),
            d = !1;
          a.is(":visible") || ((d = !0), a.show());
          d && a.hide();
          c && c(a);
        });
      }),
      (e.prototype.getEditDistance = function (a, c) {
        if (0 === a.length) return c.length;
        if (0 === c.length) return a.length;
        var b,
          d,
          f = [];
        for (b = 0; b <= c.length; b++) f[b] = [b];
        for (d = 0; d <= a.length; d++) f[0][d] = d;
        for (b = 1; b <= c.length; b++)
          for (d = 1; d <= a.length; d++)
            c.charAt(b - 1) === a.charAt(d - 1)
              ? (f[b][d] = f[b - 1][d - 1])
              : (f[b][d] = Math.min(
                  f[b - 1][d - 1] + 1,
                  Math.min(f[b][d - 1] + 1, f[b - 1][d] + 1)
                ));
        return f[c.length][a.length];
      }),
      (e.prototype.moveScrollbarTo = function (a, c, b, d) {
        void 0 === b && (b = !0);
        CwZ(a).each(function () {
          var a = CwZ(this);
          b ? a.animate({ scrollTop: c }, 400) : a.scrollTop(parseInt(c, 10));
        });
      }),
      (e.prototype.copyToClipboard = function (a) {
        var c,
          b,
          d,
          f = "INPUT" === a.tagName || "TEXTAREA" === a.tagName;
        f
          ? ((d = a), (c = a.selectionStart), (b = a.selectionEnd))
          : ((d = document.getElementById("_hiddenCopyText_")),
            d ||
              ((d = document.createElement("textarea")),
              (d.style.position = "absolute"),
              (d.style.left = "-10000px"),
              (d.id = "_hiddenCopyText_"),
              CwZ(a).append(d)),
            (d.textContent = a.textContent));
        var e,
          g = document.activeElement;
        d.focus();
        d.setSelectionRange(0, d.value.length);
        try {
          e = document.execCommand("copy");
        } catch (k) {
          e = !1;
        }
        return (
          g && "function" == typeof g.focus && g.focus(),
          f ? a.setSelectionRange(c, b) : (d.textContent = ""),
          e
        );
      }),
      (e.prototype.increaseProgress = function () {
        !(function c() {
          setTimeout(function () {
            if (CwZ("#cw-loader").is(":visible")) {
              var b =
                (CwZ("#cw-loader .cw-bar").width() /
                  CwZ(".cw-progress").width()) *
                100;
              CwZ("#cw-loader .cw-redirecting").hasClass("cw-hidden") &&
                (("undefined" != typeof CWPDFReader_Publisher &&
                  !CWPDFReader_Publisher.getInstance().progressComplete) ||
                  ("undefined" != typeof CWPDFReader &&
                    !CWPDFReader.progressComplete)) &&
                (50 > b
                  ? (CwZ(".cw-progress").addClass("cw-shine"), (b += 12.5))
                  : 75 > b
                  ? (b += 6.25)
                  : 99 > b + 3
                  ? (b += 3)
                  : 99 < b + 3 && 100 !== b && (b = 99),
                CwZ("#cw-loader .cw-bar").width(b + "%"),
                CWUtils.log("progress: " + b),
                99 > b && c());
            } else CwZ("#cw-loader .cw-bar").width("0%");
          }, 1e3);
        })();
      }),
      (e.prototype.moveScrollbarToXY = function (a, c, b) {
        CwZ(a).each(function () {
          var a = CwZ(this),
            f = a.scrollTop(),
            e = a.scrollLeft();
          a.scrollTop(f + -1 * b, 60);
          a.scrollLeft(e + -1 * c, 60);
        });
      }),
      (e.prototype.convertStrToBlob = function (a) {
        var c;
        try {
          c = new Blob([a]);
        } catch (b) {
          (window.BlobBuilder =
            window.BlobBuilder ||
            window.WebKitBlobBuilder ||
            window.MozBlobBuilder),
            (c = new BlobBuilder()),
            c.append(a),
            (c = c.getBlob());
        }
        return c;
      }),
      (e.prototype.log = function (a) {
        a = "object" == typeof a ? a.message : a;
        CWPDFReaderConfig.debug &&
          this.browser.ie7 &&
          (this.browser.ie8 || this.browser.webkit) &&
          console.log("log:" + a);
      }),
      (e.prototype.generateEntLinks = function (a, c, b, d) {
        void 0 === d && (d = !0);
        (void 0 !== b && "" !== b) ||
          (b = parseInt(a, 16).toString().substring(0, 3));
        var f;
        b = (function (a) {
          switch (a) {
            case "100":
            case "101":
              return "/profile";
            case "109":
              return "/publication";
            case "110":
              return "/publisher";
            case "111":
              return "/institute";
            case "161":
              return "/group";
            case "163":
              return "/journal";
            case "199":
              return "/author";
            default:
              return "";
          }
        })(b);
        return (
          "" === c.trim() && (c = b.substring(1)),
          d && (b = "/public" + b),
          b +
            "/" +
            a +
            "/" +
            ((f = c),
            encodeURIComponent(
              f.toLowerCase().substring(0, 500).trim().replace(/\s+/g, "_")
            ))
        );
      }),
      (e.prototype.getAvatarColor = function (a) {
        try {
          var c =
              "#626be0 #e06277 #b467da #e09862 #1abc9c #f44336 #3498db #673ab7 #34495e #8bc24a #27ae60 #2980b9 #8e44ad #6c3244 #f1c40f #2266e6 #e74c3c #50e3c2 #4498ae #f39c12 #2c5e1c #ea1e63 #62b6e0 #484d9c".split(
                " "
              ),
            b = " A B C D E F G H I J K L M N O P Q R S T U V W X Y Z".split(
              " "
            ),
            d = b.slice();
          d.shift();
          var f = "";
          return (
            b.forEach(function (b, e) {
              d.forEach(function (d, e) {
                a === b + d && (f = c[e % c.length]);
              });
            }),
            f
          );
        } catch (e) {
          return "#000000";
        }
      }),
      (e.prototype.trim = function (a) {
        return (null != a && void 0 !== a) || (a = ""), CwZ.trim(a);
      }),
      (e.prototype.stripTags = function (a) {
        return (a = a.replace(/(<([^>]+)>)/gi, "")), a;
      }),
      (e.prototype.timeDifference = function (a, c, b) {
        void 0 === c && (c = "Updated ");
        void 0 === b && (b = "");
        a = new Date(a);
        var d = (new Date().getTime() - a.getTime()) / 1e3,
          f = Math.round(d / 60),
          e = Math.round(f / 60),
          g = Math.round(e / 24);
        return (
          (d = Math.round(d)),
          (f = Math.round(f)),
          (e = Math.round(e)),
          (g = Math.round(g)),
          (c +=
            0 < g
              ? 7 < g
                ? "JanFebMarAprMayJunJulAugSepOctNovDec".substr(
                    3 * a.getMonth(),
                    3
                  ) +
                  " " +
                  a.getDate() +
                  ", " +
                  a.getFullYear()
                : g + " day" + (1 < g ? "s" : "") + " ago"
              : 0 < e
              ? e + " hour" + (1 < e ? "s" : "") + " ago"
              : 0 < f
              ? f + " minute" + (1 < f ? "s" : "") + " ago"
              : 10 > d
              ? "Few secs ago"
              : d + " sec" + (1 < d ? "s" : "") + " ago"),
          (c += b),
          c
        );
      }),
      (e.prototype.Compare = function (a, c) {
        return a <= c + 2 && c - 2 <= a;
      }),
      (e.prototype.utf16to8 = function (a) {
        var c, b, d, e;
        c = "";
        d = a.length;
        for (b = 0; b < d; b++)
          (e = a.charCodeAt(b)),
            1 <= e && 127 >= e
              ? (c += a.charAt(b))
              : (2047 < e
                  ? ((c += String.fromCharCode(224 | ((e >> 12) & 15))),
                    (c += String.fromCharCode(128 | ((e >> 6) & 63))))
                  : (c += String.fromCharCode(192 | ((e >> 6) & 31))),
                (c += String.fromCharCode(128 | ((e >> 0) & 63))));
        return c;
      }),
      (e.prototype.utf8to16 = function (a) {
        var c, b, d, e, h, g;
        c = "";
        d = a.length;
        for (b = 0; b < d; )
          switch (((e = a.charCodeAt(b++)), e >> 4)) {
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
              c += a.charAt(b - 1);
              break;
            case 12:
            case 13:
              h = a.charCodeAt(b++);
              c += String.fromCharCode(((31 & e) << 6) | (63 & h));
              break;
            case 14:
              (h = a.charCodeAt(b++)),
                (g = a.charCodeAt(b++)),
                (c += String.fromCharCode(
                  ((15 & e) << 12) | ((63 & h) << 6) | ((63 & g) << 0)
                ));
          }
        return c;
      }),
      (e.prototype.stringToByteArray = function (a) {
        var c,
          b,
          d = new (void 0 !== window.Uint8Array ? Uint8Array : Array)(a.length);
        c = 0;
        for (b = a.length; c < b; ++c) d[c] = 255 & a.charCodeAt(c);
        return d;
      }),
      (e.prototype.decompress = function (a) {
        a = a.replace(/\n/g, "");
        a = a.replace(/ \/ /g, "/");
        a = atob(a);
        a = a.split("").map(function (a) {
          return a.charCodeAt(0);
        });
        var c = new Zlib.Gunzip(a).decompress();
        a = [];
        for (var b = 0; b < c.byteLength; b++)
          a.push(String.fromCharCode(c[b]));
        a = CWUtils.utf8to16(a.join(""));
        try {
          for (
            var d = JSON.parse(a), b = 0;
            b < d.List.MemberData.length;
            b++
          ) {
            for (c = 0; c < d.List.MemberData[b].data.Graphics.length; c++)
              if (!d.List.MemberData[b].data.Graphics[c].hasOwnProperty("SHL"))
                for (
                  var e = "AEFHRS".split(""), h = [], g = 0;
                  g < e.length;
                  g++
                )
                  if (
                    d.List.MemberData[b].data.Graphics[c].hasOwnProperty(e[g])
                  ) {
                    for (
                      var h =
                          d.List.MemberData[b].data.Graphics[c][e[g]].split(
                            ","
                          ),
                        k = 0;
                      k < h.length;
                      k++
                    )
                      h[k] = Math.round(h[k] / 2);
                    d.List.MemberData[b].data.Graphics[c][e[g]] = h.join(",");
                    break;
                  }
            for (c = 0; c < d.List.MemberData[b].data.Comments.length; c++) {
              for (
                var l = d.List.MemberData[b].data.Comments[c].Pos.split(","),
                  e = 0;
                e < l.length;
                e++
              )
                l[e] = Math.round(l[e] / 2);
              d.List.MemberData[b].data.Comments[c].Pos = l.join(",");
            }
            a = JSON.stringify(d);
          }
        } catch (m) {
          CWUtils.log(m);
        }
        return a;
      }),
      (e.prototype.compress = function (a) {
        try {
          for (
            var c = JSON.parse(a), b = 0;
            b < c.List.MemberData.length;
            b++
          ) {
            for (var d = 0; d < c.List.MemberData[b].data.Graphics.length; d++)
              if (!c.List.MemberData[b].data.Graphics[d].hasOwnProperty("SHL"))
                for (
                  var e = "AEFHRS".split(""), h = [], g = 0;
                  g < e.length;
                  g++
                )
                  if (
                    c.List.MemberData[b].data.Graphics[d].hasOwnProperty(e[g])
                  ) {
                    for (
                      var h =
                          c.List.MemberData[b].data.Graphics[d][e[g]].split(
                            ","
                          ),
                        k = 0;
                      k < h.length;
                      k++
                    )
                      h[k] = Math.round(2 * h[k]);
                    c.List.MemberData[b].data.Graphics[d][e[g]] = h.join(",");
                    break;
                  }
            for (d = 0; d < c.List.MemberData[b].data.Comments.length; d++) {
              for (
                var l = c.List.MemberData[b].data.Comments[d].Pos.split(","),
                  e = 0;
                e < l.length;
                e++
              )
                l[e] = Math.round(2 * l[e]);
              c.List.MemberData[b].data.Comments[d].Pos = l.join(",");
            }
            a = JSON.stringify(c);
          }
        } catch (m) {
          CWUtils.log(m);
        }
        b = CWUtils.stringToByteArray(CWUtils.utf16to8(a));
        a = new Zlib.Gzip(b).compress();
        c = "";
        for (b = 0; b < a.byteLength; b++) c += String.fromCharCode(a[b]);
        return (c = btoa(c)), CWUtils.insertBN(c);
      }),
      (e.prototype.insertBN = function (a) {
        for (var c = ""; 0 < a.length; ) {
          var b = a.slice(0, 76),
            c = c + b;
          76 === b.length && (c += "\n");
          a = a.replace(b, "");
        }
        return c;
      }),
      (e.prototype.writeCookie = function (a, c, b) {
        var d = "";
        b &&
          ((d = new Date()),
          d.setTime(d.getTime() + 864e5 * b),
          (d = "; expires=" + d.toGMTString()));
        document.cookie = a + "=" + c + d + "; path=/";
      }),
      (e.prototype.readCookie = function (a) {
        a += "=";
        for (var c = document.cookie.split(";"), b = 0; b < c.length; b++) {
          for (var d = c[b]; " " === d.charAt(0); )
            d = d.substring(1, d.length);
          if (0 === d.indexOf(a)) return d.substring(a.length, d.length);
        }
        return null;
      }),
      (e.prototype.deleteCookie = function (a) {
        this.writeCookie(a, "", -1);
      }),
      e
    );
  })(),
  Base64 = {
    _keyStr:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    encode: function (e) {
      try {
        var a = "",
          c = void 0,
          b = void 0,
          d = void 0,
          f = void 0,
          h = void 0,
          g = void 0,
          k = void 0,
          l = 0;
        for (e = Base64._utf8_encode(e); l < e.length; )
          (c = e.charCodeAt(l++)),
            (b = e.charCodeAt(l++)),
            (d = e.charCodeAt(l++)),
            (f = c >> 2),
            (h = ((3 & c) << 4) | (b >> 4)),
            (g = ((15 & b) << 2) | (d >> 6)),
            (k = 63 & d),
            isNaN(b) ? (g = k = 64) : isNaN(d) && (k = 64),
            (a =
              a +
              this._keyStr.charAt(f) +
              this._keyStr.charAt(h) +
              this._keyStr.charAt(g) +
              this._keyStr.charAt(k));
        return a;
      } catch (m) {
        return "";
      }
    },
    decode: function (e) {
      var a,
        c,
        b,
        d,
        f,
        h = "",
        g = 0;
      for (e = e.replace(/[^A-Za-z0-9\+\/\=]/g, ""); g < e.length; )
        (a = this._keyStr.indexOf(e.charAt(g++))),
          (c = this._keyStr.indexOf(e.charAt(g++))),
          (d = this._keyStr.indexOf(e.charAt(g++))),
          (f = this._keyStr.indexOf(e.charAt(g++))),
          (a = (a << 2) | (c >> 4)),
          (c = ((15 & c) << 4) | (d >> 2)),
          (b = ((3 & d) << 6) | f),
          (h += String.fromCharCode(a)),
          64 !== d && (h += String.fromCharCode(c)),
          64 !== f && (h += String.fromCharCode(b));
      return (h = Base64._utf8_decode(h)), h;
    },
    _utf8_encode: function (e) {
      e = e.replace(/\r\n/g, "\n");
      for (var a = "", c = 0; c < e.length; c++) {
        var b = e.charCodeAt(c);
        128 > b
          ? (a += String.fromCharCode(b))
          : (127 < b && 2048 > b
              ? (a += String.fromCharCode((b >> 6) | 192))
              : ((a += String.fromCharCode((b >> 12) | 224)),
                (a += String.fromCharCode(((b >> 6) & 63) | 128))),
            (a += String.fromCharCode((63 & b) | 128)));
      }
      return a;
    },
    _utf8_decode: function (e) {
      for (var a, c, b = "", d = 0, f = 0; d < e.length; )
        (a = e.charCodeAt(d)),
          128 > a
            ? ((b += String.fromCharCode(a)), d++)
            : 191 < a && 224 > a
            ? ((c = e.charCodeAt(d + 1)),
              (b += String.fromCharCode(((31 & a) << 6) | (63 & c))),
              (d += 2))
            : ((c = e.charCodeAt(d + 1)),
              (f = e.charCodeAt(d + 2)),
              (b += String.fromCharCode(
                ((15 & a) << 12) | ((63 & c) << 6) | (63 & f)
              )),
              (d += 3));
      return b;
    },
  },
  CWUtils = new CWUtilsClass();
