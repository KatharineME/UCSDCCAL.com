(function () {
  if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.msMatchesSelector;
  }
  if (!Element.prototype.closest) {
    Element.prototype.closest = function (e) {
      var t = this;
      while (t) {
        if (t.matches(e)) {
          return t;
        }
        t = t.parentElement;
      }
    };
  }
  var t = window.top,
    e = t.document,
    a = screen.height || "",
    s = screen.width || "",
    f = "taylorfrancis",
    d = 59,
    c = 59,
    r = w(),
    u = E(),
    o = I(),
    l = (new Date().getTime() + Math.random().toString().substr(2, 8) + r)
      .replace(/[^a-z0-9]/gim, "")
      .substr(0, 100),
    n = [
      {
        i: 181,
        d: [160, 600],
        p: {
          pi: (function () {
            return r;
          })(),
          j: (function () {
            return o;
          })(),
        },
        e: "pbgrd-skyscraper",
        sp: { cb: p, d: "/21695416317/tandfonline/skyscraper" },
        st: { cb: b },
        f: 1,
        a: function () {
          return e.getElementById("pbgrd-skyscraper") !== null;
        },
      },
      {
        i: 183,
        d: [728, 90],
        p: {
          pi: (function () {
            return r;
          })(),
          j: (function () {
            return o;
          })(),
        },
        e: "pbgrd-leaderboard",
        sp: { cb: p, d: "/21695416317/tandfonline/leaderboard" },
        f: 1,
        a: function () {
          return e.getElementById("pbgrd-leaderboard") !== null;
        },
      },
    ];
  e.addEventListener("DOMContentLoaded", function () {
    n = n.filter(function (e) {
      if (e.a !== undefined) {
        return e.a() && e.d.length > 0;
      }
      return !0;
    });
    if (n.length === 0) {
      return;
    }
    e.addEventListener(
      "pbgrdFinished",
      function (r) {
        for (var a in n) {
          var o = n[a];
          if (o.sp !== undefined && o.sp.cb !== undefined) {
            setTimeout(
              (function () {
                m(o)();
                t.window.addEventListener("scroll", i(o));
                e.addEventListener("DOMContentLoaded", i(o));
                t.window.addEventListener("load", i(o));
              })(),
              1000
            );
          }
        }
      },
      !1
    );
    v(n);
    h();
  });
  googletag = t.window.googletag || {};
  googletag.cmd = googletag.cmd || [];
  googletag.cmd.push(function () {
    googletag.pubads().addEventListener("slotRenderEnded", function (e) {
      if (e && e.slot) {
        if (!e.advertiserId) {
          var o = e.slot.getSlotElementId();
          for (var r in n) {
            var t = n[r];
            if (t.f && t.e === o) {
              y(t);
              break;
            }
          }
        }
      }
    });
  });
  function m(e) {
    return function () {
      e.sp.cb(e);
    };
  }
  function i(e) {
    return function () {
      if (e.st !== undefined && e.st.cb !== undefined) {
        e.st.cb(e);
        setTimeout(function () {
          e.st.cb(e);
        }, 1000);
      }
    };
  }
  function h() {
    var t = document.createElement("script");
    t.src = "https://www.googletagservices.com/tag/js/gpt.js";
    t.async = 1;
    var n = e.getElementsByTagName("script")[0];
    n.parentNode.insertBefore(t, n);
  }
  function v(t) {
    var c = [];
    for (var p in t) {
      var l = t[p];
      c.push(l.i);
    }
    var i = document.createElement("script"),
      n = "https://delivery.pbgrd.com/network/adj.php";
    n += "?sct=1";
    n += "&platform=" + encodeURIComponent(f);
    n += "&zones=" + c.join();
    n += "&pageid=" + encodeURIComponent(r);
    n += "&journal=" + encodeURIComponent(o);
    n += "&outerheight=" + a;
    n += "&outerwidth=" + s;
    n += "&location=" + encodeURIComponent(window.top.location);
    i.src = n;
    i.async = 1;
    var d = e.getElementsByTagName("script")[0];
    d.parentNode.insertBefore(i, d);
  }
  function y(t) {
    var n = "https://delivery.pbgrd.com/network/logger.php",
      p = Math.random().toString().substr(2, 8);
    n += "?cb=" + p;
    var r = t.p !== undefined ? t.p : {};
    if (r.pi !== undefined) {
      var o = r.pi;
    } else {
      var o = "";
    }
    if (o.length > 0) {
      n += "&pgpid=" + encodeURIComponent(o);
    } else {
      n += "&pgpid=" + encodeURIComponent(u);
    }
    n += "&pgiid=" + l + t.i;
    n += "&pgpro=" + d;
    n += "&pgpub=" + c;
    n += "&pgzid=" + t.i;
    n += "&pgscrh=" + a;
    n += "&pgscrw=" + s;
    if (r.j !== undefined) {
      n += "&pgjour=" + encodeURIComponent(r.j);
    }
    n += "&exc=1";
    var i = document.createElement("img");
    i.src = n;
    e.body.appendChild(i);
    t.f = !1;
  }
  function p(n) {
    var i = n.sp,
      o = n.e;
    if (e.getElementById(o)) {
      var r = t.window.googletag || {};
      r.cmd = r.cmd || [];
      r.cmd.push(function () {
        r.enableServices();
        var e = r.defineSlot(i.d, n.d, o);
        e.addService(r.pubads());
        r.pubads().setRequestNonPersonalizedAds(1);
        e.setTargeting("pgpub", c);
        e.setTargeting("pgpro", d);
        e.setTargeting("pgzid", n.i);
        e.setTargeting("pgiid", l + n.i);
        e.setCollapseEmptyDiv(!0);
        r.display(o);
      });
    }
  }
  function b(r) {
    var o = e.querySelector("footer"),
      i =
        t.window.pageYOffset || e.body.scrollTop || e.documentElement.scrollTop,
      n = e.getElementById(r.e),
      a = n.parentElement.scrollHeight + 10,
      s = n.closest(".contents").scrollHeight;
    if (!n.closest(".literatumAd").nextElementSibling) {
      s -= a;
    }
    var d = S(n.closest(".contents")) - 70;
    if (n && o) {
      if (
        i > s + d &&
        !e.querySelector(
          ".combinedRecommendationsWidget.recommended-sidebar"
        ) &&
        e.body.scrollHeight - i - o.scrollHeight - n.scrollHeight - 60 > 0
      ) {
        if (n.style.position !== "fixed") {
          n.parentElement.style.height = a + "px";
          n.parentElement.style.width = r.d[0] + "px";
          n.style.display = "none";
          n.style.position = "fixed";
          n.style.top = "60px";
          n.style.display = "block";
        }
      } else if (n.style.position !== "relative") {
        n.parentElement.style.height = "";
        n.style.position = "relative";
        n.style.top = "inherit";
      }
    }
  }
  function E() {
    return t.window.location
      .toString()
      .replace(/\?/g, "þþ")
      .replace(/\&/g, "þ")
      .replace(/\=/g, "|")
      .replace(/[^A-Za-z0-9\-_\.\/\:\þ\|]+/g, "");
  }
  function w() {
    var n = g({ name: "dc.Identifier", scheme: "doi" });
    if (n.length === 0) {
      try {
        if (e.getElementById("crossMark")) {
          n = e.getElementById("crossMark").dataset.doi;
        }
      } catch (o) {}
    }
    if (n.length === 0) {
      try {
        var r = t.window.location.pathname;
        if (r.length > 0 && r.search("10.") > -1) {
          n = r.substr(r.search("10."));
        }
      } catch (o) {}
    }
    return n;
  }
  function I() {
    var t = g({ name: "citation_journal_title" });
    if (t.length === 0 && e.querySelector(".title-container h1 a")) {
      t = e.querySelector(".title-container h1 a").text.trim();
    }
    return t;
  }
  function g(t) {
    var r = e.getElementsByTagName("meta");
    for (var n = 0; n < r.length; n++) {
      var i = !0;
      for (var o in t) {
        if (r[n].getAttribute(o) !== t[o]) {
          i = !1;
        }
      }
      if (i) {
        return r[n].getAttribute("content");
      }
    }
    return "";
  }
  function S(e) {
    var t = 0;
    do {
      if (!isNaN(e.offsetLeft)) {
        t += e.offsetTop;
      }
    } while ((e = e.offsetParent) !== null);
    return t;
  }
})();
