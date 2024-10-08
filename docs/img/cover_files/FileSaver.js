var _global =
  "object" == typeof window && window.window === window
    ? window
    : "object" == typeof self && self.self === self
    ? self
    : "object" == typeof global && global.global === global
    ? global
    : this;
function bom(e, o) {
  return (
    void 0 === o
      ? (o = { autoBom: !1 })
      : "object" != typeof o &&
        (console.warn("Depricated: Expected third argument to be a object"),
        (o = { autoBom: !o })),
    o.autoBom &&
    /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(
      e.type
    )
      ? new Blob([String.fromCharCode(65279), e], { type: e.type })
      : e
  );
}
function download(e, o, t) {
  var n = new XMLHttpRequest();
  n.open("GET", e),
    (n.responseType = "blob"),
    (n.onload = function () {
      saveAs(n.response, o, t);
    }),
    (n.onerror = function () {
      console.error("could not download file");
    }),
    n.send();
}
function corsEnabled(e) {
  var o = new XMLHttpRequest();
  return o.open("HEAD", e, !1), o.send(), 200 <= o.status && o.status <= 299;
}
function click(o) {
  try {
    o.dispatchEvent(new MouseEvent("click"));
  } catch (e) {
    var t = document.createEvent("MouseEvents");
    t.initMouseEvent(
      "click",
      !0,
      !0,
      window,
      0,
      0,
      0,
      80,
      20,
      !1,
      !1,
      !1,
      !1,
      0,
      null
    ),
      o.dispatchEvent(t);
  }
}
var saveAs =
  _global.saveAs || "object" != typeof window || window !== _global
    ? function () {}
    : "download" in HTMLAnchorElement.prototype
    ? function (e, o, t) {
        var n = _global.URL || _global.webkitURL,
          a = document.createElement("a");
        (o = o || e.name || "download"),
          (a.download = o),
          (a.rel = "noopener"),
          "string" == typeof e
            ? ((a.href = e),
              a.origin !== location.origin
                ? corsEnabled(a.href)
                  ? download(e, o, t)
                  : click(a, (a.target = "_blank"))
                : click(a))
            : ((a.href = n.createObjectURL(e)),
              setTimeout(function () {
                n.revokeObjectURL(a.href);
              }, 4e4),
              setTimeout(function () {
                click(a);
              }, 0));
      }
    : "msSaveOrOpenBlob" in navigator
    ? function (e, o, t) {
        if (((o = o || e.name || "download"), "string" == typeof e))
          if (corsEnabled(e)) download(e, o, t);
          else {
            var n = document.createElement("a");
            (n.href = e),
              (n.target = "_blank"),
              setTimeout(function () {
                click(n);
              });
          }
        else navigator.msSaveOrOpenBlob(bom(e, t), o);
      }
    : function (e, o, t, n) {
        if (
          ((n = n || open("", "_blank")),
          n &&
            (n.document.title = n.document.body.innerText = "downloading..."),
          "string" == typeof e)
        )
          return download(e, o, t);
        var a = "application/octet-stream" === e.type,
          l = /constructor/i.test(_global.HTMLElement) || _global.safari,
          i = /CriOS\/[\d]+/.test(navigator.userAgent);
        if ((i || (a && l)) && "object" == typeof FileReader) {
          var r = new FileReader();
          (r.onloadend = function () {
            var e = r.result;
            (e = i ? e : e.replace(/^data:[^;]*;/, "data:attachment/file;")),
              n ? (n.location.href = e) : (location = e),
              (n = null);
          }),
            r.readAsDataURL(e);
        } else {
          var c = _global.URL || _global.webkitURL,
            s = c.createObjectURL(e);
          n ? (n.location = s) : (location.href = s),
            (n = null),
            setTimeout(function () {
              c.revokeObjectURL(s);
            }, 4e4);
        }
      };
(_global.saveAs = saveAs.saveAs = saveAs),
  "undefined" != typeof module && (module.exports = saveAs);
