var CWParser_informaworld = {
  name: "Taylor & Francis Online",
  webPageAsObject: !1,
  extractReference: !0,
  isCogent: !1,
  getSearchQuery: function (t) {
    try {
      Utility.validateArgs(t) || (t = Callbacks);
      var e = CwZ("form[name='quickSearchLineForm']");
      0 < e.length && 0 < e.find("input#XuiTxtSubjectSearch").length
        ? t.success(e.find("input#XuiTxtSubjectSearch").val())
        : t.success("");
    } catch (e) {
      t.success(""), Utility.log(e);
    }
  },
  next: function (t) {
    Utility.validateArgs(t) || (t = Callbacks);
    try {
      var e = CwZ(
        ".paginationLinkContainer ul li.pageLink-with-arrow a.nextPage"
      );
      0 < e.length
        ? (t.success(!0),
          setTimeout(function () {
            window.location.href = e[0].href;
          }, 500))
        : t.success(!1);
    } catch (e) {
      t.success(!1), Utility.log(e);
    }
  },
  matchFigAndData: function (e) {
    var t = e
      .replace(/\s+/, "")
      .match(
        /(section|figure|equation|table|fig)\s?[.\-–(\[{]?\s?(\d{1,3}\b)/gi
      );
    if (t) {
      var a = t[0].match(/\d+/);
      if (!e.replace(a[0], "").match(/\d+/)) return !0;
    }
    return !1;
  },
  parsePDFText: function (e, t, a, i, n, r, d, o, l, s, f, c) {
    var p = "",
      w = r;
    15 < r.length ? (r = p = (p = r).substr(0, e + 5)) : (p = i);
    var h,
      u,
      C = (p = p.replace(/,/g, "").trim()).length,
      m = p.lastIndexOf("(");
    C - 1 != m && -1 != m && (p = p.substr(m + 1, C)), (h = p);
    var g = -1;
    if (/^(\d{4}[a-z]?)$/.test((u = r)))
      -1 != (g = this.searchReference(s, u, h))
        ? CWPDFReader.CWComManager
          ? CWPDFReader.CWComManager.tell(
              "referenceID",
              {
                referenceId: g,
                annotLinkX: f,
                annotLinkY: c,
                dest: d,
                view: "pdfFrame",
              },
              "pdfFrame"
            )
          : CWComManager.tell(
              "referenceID",
              {
                referenceId: g,
                annotLinkX: f,
                annotLinkY: c,
                dest: d,
                view: "pdfFrame",
              },
              "pdfFrame"
            )
        : CWPDFReader.CWComManager
        ? CWPDFReader.CWComManager.tell(
            "referenceID",
            { referenceId: d, view: "pdfFrame" },
            "pdfFrame"
          )
        : CWComManager.tell(
            "referenceID",
            { referenceId: d, view: "pdfFrame" },
            "pdfFrame"
          );
    else {
      var b = r.replace(/\d*/g, ""),
        Z = "",
        v = r.match(/(\d{4})/g);
      if ((v && (Z = v.pop()), -1 != (g = this.searchReference(s, Z, b))))
        CWPDFReader.CWComManager
          ? CWPDFReader.CWComManager.tell(
              "referenceID",
              {
                referenceId: g,
                annotLinkX: f,
                annotLinkY: c,
                view: "pdfFrame",
              },
              "pdfFrame"
            )
          : CWComManager.tell(
              "referenceID",
              {
                referenceId: g,
                annotLinkX: f,
                annotLinkY: c,
                view: "pdfFrame",
              },
              "pdfFrame"
            );
      else {
        var y = w.match(/(\[|\()\d+((-|–)\d+)?(,\d+((-|–)\d+)?)*(\]|\))/g);
        if (y) {
          for (
            var P = y[0].replace(/(\[|\]|\(|\))/g, ""),
              x = ["-", ",", "–"],
              k = !1,
              D = 0;
            D < x.length;
            D++
          )
            if (-1 < P.indexOf(x[D])) {
              k = !0;
              break;
            }
          var L = e;
          isNaN(w.charAt(e)) &&
            (CwZ.inArray(e, x) || e.match(/(\[|\()/)
              ? (L = e + 1)
              : e.match(/(\]|\))/) && (L = e - 1));
          var U = P;
          if (k) {
            var I = w.indexOf(P),
              W = P.split(new RegExp(x.join("|")));
            if (((U = W[0]), 0 != L))
              for (D = 0; D < W.length; D++) {
                var O = W[D],
                  F = P.indexOf(O);
                if (L == F + I || (F + I < L && L < F + (O.length - 1) + I)) {
                  U = O;
                  break;
                }
              }
          }
          (g = U),
            CWPDFReader.CWComManager
              ? CWPDFReader.CWComManager.tell(
                  "referenceID",
                  {
                    referenceId: g,
                    annotLinkX: f,
                    annotLinkY: c,
                    view: "pdfFrame",
                  },
                  "pdfFrame"
                )
              : CWComManager.tell(
                  "referenceID",
                  {
                    referenceId: g,
                    annotLinkX: f,
                    annotLinkY: c,
                    view: "pdfFrame",
                  },
                  "pdfFrame"
                );
        } else {
          var _ = (i + r + n).match(/\[\d+\]/g);
          _
            ? 1 == _.length
              ? ((g = _[0].replace(/(\[|\])/g, "")),
                CWPDFReader.CWComManager
                  ? CWPDFReader.CWComManager.tell(
                      "referenceID",
                      {
                        referenceId: g,
                        annotLinkX: f,
                        annotLinkY: c,
                        view: "pdfFrame",
                      },
                      "pdfFrame"
                    )
                  : CWComManager.tell(
                      "referenceID",
                      {
                        referenceId: g,
                        annotLinkX: f,
                        annotLinkY: c,
                        view: "pdfFrame",
                      },
                      "pdfFrame"
                    ))
              : CWPDFReader.CWComManager
              ? CWPDFReader.CWComManager.tell(
                  "referenceID",
                  { referenceId: d, view: "pdfFrame" },
                  "pdfFrame"
                )
              : CWComManager.tell(
                  "referenceID",
                  { referenceId: d, view: "pdfFrame" },
                  "pdfFrame"
                )
            : CWParser_informaworld.matchFigAndData(r)
            ? CWPDFReader.CWComManager
              ? CWPDFReader.CWComManager.tell(
                  "referenceID",
                  { referenceId: d, view: "pdfFrame" },
                  "pdfFrame"
                )
              : CWComManager.tell(
                  "referenceID",
                  { referenceId: d, view: "pdfFrame" },
                  "pdfFrame"
                )
            : r.match(/\d+/g)
            ? (i = i.toLowerCase()).match(
                /section|figure|equation|table|fig.|\d{4,}/gi
              )
              ? CWPDFReader.CWComManager
                ? CWPDFReader.CWComManager.tell(
                    "referenceID",
                    { referenceId: d, view: "pdfFrame" },
                    "pdfFrame"
                  )
                : CWComManager.tell(
                    "referenceID",
                    { referenceId: d, view: "pdfFrame" },
                    "pdfFrame"
                  )
              : CWPDFReader.CWComManager
              ? CWPDFReader.CWComManager.tell(
                  "referenceID",
                  {
                    referenceId: r.match(/\d+/g)[0],
                    annotLinkX: f,
                    annotLinkY: c,
                    view: "pdfFrame",
                  },
                  "pdfFrame"
                )
              : CWComManager.tell(
                  "referenceID",
                  {
                    referenceId: r.match(/\d+/g)[0],
                    annotLinkX: f,
                    annotLinkY: c,
                    view: "pdfFrame",
                  },
                  "pdfFrame"
                )
            : CWPDFReader.CWComManager
            ? CWPDFReader.CWComManager.tell(
                "referenceID",
                { referenceId: d, view: "pdfFrame" },
                "pdfFrame"
              )
            : CWComManager.tell(
                "referenceID",
                { referenceId: d, view: "pdfFrame" },
                "pdfFrame"
              );
        }
      }
    }
  },
  searchReference: function (e, t, a) {
    var i = -1;
    if (e.hasOwnProperty(t))
      if (1 < Object.keys(e[t]).length) {
        var n = {},
          r = (a = (a = (a = a
            .replace(" et al.", "")
            .replace(/[&|;|(|)|,|"]/g, ""))
            .replace(" and ", " ")
            .replace("  ", " ")).replace(/([a-z])([A-Z])/g, "$1 $2")).split(
            " "
          ),
          d = 0;
        for (var o in e[t]) {
          var l = Utility.matchAuthors(r, e[t][o]);
          d < l && (d = l), (n[l] = o);
        }
        0 < d && (i = n[Object.keys(n)[Object.keys(n).length - 1]]);
      } else i = Object.keys(e[t])[0];
    return i;
  },
  getReference: function (e, t) {
    var a = CwZ.Deferred(),
      d = [],
      i = e.find("ul.references li");
    if (null != i && 0 < i.length)
      if (Utility.checkIssnParser(t))
        Utility.referenceParser(Utility.checkIssnParser(t), i).then(function (
          e
        ) {
          (d = e), a.resolve(d);
        });
      else
        CwZ(i).each(function (e) {
          var t = {};
          if (
            ((t.id = e + 1),
            (t.title = ""),
            (t.journal = ""),
            (t.author = ""),
            CWParser.isCogent)
          ) {
            var a = CwZ(this).text();
            (a = a
              .trim()
              .replace(/[0-9]+\./, "")
              .trim()),
              (t.author = a
                .replace(/^(.*?)(\(|\d{4}).*/, "$1")
                .replace(/[\.\(\):-]+/g, "")),
              (t.author = t.author.trim());
            var i = t.author.length;
            if (
              (t.author.lastIndexOf(",") === i - 1 &&
                ((t.author = t.author.substr(0, i - 1)),
                (t.author = t.author.substr(0, i - 1))),
              (t.year = a
                .replace(/(\r\n|\n|\r)/gm, "")
                .replace(/.*?(\d{4}[a-z]?).*/, "$1")),
              t.year ||
                (t.year = CwZ(this)
                  .contents()
                  .text()
                  .replace(/(\r\n|\n|\r)/gm, "")
                  .replace(/.*?(\d{4}[a-z]?).*/, "$1")),
              t.year.match(/(18|19|20)\d{2}[a-z]?/) || (t.year = ""),
              CwZ(this)
                .contents()
                .text()
                .match(/.*\)\.(.*?)$/))
            ) {
              CwZ(this).contents().remove("script");
              var n = CwZ(this)
                .contents()
                .text()
                .match(/.*\)\.(.*?)$/)[1];
              t.title = n;
            } else t.title = "";
            if (
              CwZ(this)
                .contents()
                .text()
                .match(/(\d{4}\)|n\.d\.\)|\d{4})\.(.*?)$/)
            )
              try {
                t.title = CwZ(this)
                  .contents()
                  .text()
                  .match(/(\d{4}\)|n\.d\.\)|\d{4})\.(.*?)$/)[2];
              } catch (e) {}
            else
              CwZ(this)
                .contents()
                .text()
                .match(/(\d{4}\)|n\.d\.\)|\d{4})\.(.*?)\..*/) &&
                (t.title = CwZ(this)
                  .contents()
                  .text()
                  .match(/(\d{4}\)|n\.d\.\)|\d{4})\.(.*?)\..*/)[2]);
            "" != t.title && (t.title = t.title.replace(/[\.\(\):-]+/g, "")),
              CwZ(this).find("i").length &&
                ((t.journal = CwZ(this)
                  .find("i")
                  .text()
                  .replace(/[\.\(\):-]+/g, "")),
                t.journal.match(/\d{1,2}$/) &&
                  (t.journal = t.journal.replace(/\d{1,3}$/, "")),
                t.journal.match(/,$/) &&
                  (t.journal = t.journal.replace(/,$/, "")),
                "" === t.title &&
                  "" !== t.journal &&
                  ((t.title = t.journal), (t.journal = ""))),
              "" === t.title && (t.title = CwZ(this).find("a").text()),
              (t.title = CWUtils.removeTags(t.title).trim()),
              (t.title = t.title.trim()),
              t.author &&
                "" !== t.title &&
                0 <= t.author.indexOf(t.title) &&
                (t.author = ""),
              t.journal &&
                "" !== t.title &&
                0 <= t.journal.indexOf(t.title) &&
                (t.journal = t.journal.replace("“" + t.title + "”", ""));
            var r = t.title.indexOf(t.journal);
            10 < r
              ? ((t.title = t.title.substr(0, r).trim()),
                t.title.match(/in$/i) &&
                  (t.title = t.title.replace(/in$/i, "").trim()))
              : -1 < r && (t.journal = ""),
              CwZ(this).find("a.ref").length &&
                (0 < CwZ(this).find("a.ref").attr("href").indexOf("popRefLink")
                  ? (t.doi = decodeURIComponent(
                      CwZ(this)
                        .find(".ref")
                        .attr("href")
                        .replace(/.*?\,.*\,\s*'(.*)'.*/, "$1")
                    ))
                  : 0 <
                      CwZ(this)
                        .find("a.ref")
                        .attr("href")
                        .indexOf("newWindow") &&
                    (t.doi = decodeURIComponent(
                      CwZ(this)
                        .find(".ref")
                        .attr("href")
                        .replace(/.*(org|abs)\/(.*)'\)/, "$2")
                    ))),
              t.doi || (t.doi = CWUtils.findDoi(this, "NLM_pub-id", a));
          } else ("" == t.title || "" == t.author || t.title.replace(/[^a-zA-Z]/g, "").length <= 3) && ((t.bad = !0), (t.refText = CWUtils.removeTags(CwZ(this).text()).trim()));
          d.push(t);
        }),
          a.resolve(d);
    else {
      var n = { refsNotFound: !0 };
      d.push(n), a.resolve(d);
    }
    return a.promise();
  },
  search: function (t) {
    Utility.validateArgs(t) || (t = Callbacks);
    try {
      var e = CwZ("form[name='quickSearch']");
      0 < e.length
        ? (CwZ("input#searchText").val(t.query),
          t.success(!0),
          setTimeout(function () {
            e.submit();
          }, 100))
        : t.success(!1);
    } catch (e) {
      t.success(!1), Utility.log(e);
    }
  },
  injectLink: function (r) {
    try {
      var e = CwZ(".accessmodule");
      if (e.length && !e.hasClass(".cw-done")) {
        e.closest(".gutter").addClass("cw-tandf-a");
        this.getFilter();
        if (CWParser_informaworld.isPubPage()) {
          if (
            ((a = (a = CwZ("#breadcrumb a:contains('List of Issues')").attr(
              "href"
            )).replace("/loi/", "")),
            Utility.filter(a, "informaworld"))
          ) {
            var t = CwZ(".pdf")[0].href;
            !e.hasClass("cw-done") &&
              t &&
              0 < t.length &&
              (Utility.log(t),
              e.prepend(
                r.addButton({
                  pdfUrl: t,
                  index: 0,
                  inline: !1,
                  class: "btn-tandf",
                })
              ),
              e.addClass("cw-done"),
              Utility.log("link injected"));
          }
        } else if (CWParser_informaworld.isListingPage()) {
          var a;
          (a = (a = CwZ("#breadcrumb a:contains('List of Issues')").attr(
            "href"
          )).replace("/loi/", "")),
            Utility.filter(a, "informaworld") &&
              CwZ(".article").each(function (e) {
                var t = CwZ(this);
                if (0 < t.find(".pdf").length) {
                  var a = t.find("a[href*='pdf']")[0].href,
                    i = t.find(".accessmodule");
                  i.closest(".gutter").addClass("cw-tandf-a"),
                    !i.hasClass("cw-done") &&
                      a &&
                      0 < a.length &&
                      (i.addClass("cw-done"),
                      i.prepend(
                        r.addButton({
                          pdfUrl: a,
                          index: e,
                          inline: !1,
                          class: "btn-tandf",
                        })
                      ));
                }
              });
        } else
          CWParser_informaworld.isSearchingPage() &&
            CwZ(".bd").each(function (e) {
              var t = CwZ(this);
              if (0 < t.find(".resultTitle").length) {
                var a = t
                  .find("a.searchResultJournal")
                  .attr("href")
                  .replace("/toc/", "");
                if (
                  ((a = a.substr(0, a.lastIndexOf("/"))),
                  Utility.filter(a, "informaworld") &&
                    0 < t.find(".filesLinks").length)
                ) {
                  var i = t.find("a[href*='pdf']")[0].href,
                    n = t.find(".accessmodule");
                  n.closest(".gutter").addClass("cw-tandf-a"),
                    !n.hasClass("cw-done") &&
                      i &&
                      0 < i.length &&
                      (Utility.log(i),
                      n.prepend(
                        r.addButton({
                          pdfUrl: i,
                          index: e,
                          inline: !1,
                          class: "btn-tandf",
                        })
                      ),
                      n.addClass("cw-done"));
                }
              }
              0 < CwZ(".iconLabel").length &&
                CwZ(".iconLabel").addClass("cw-tandf-b");
            });
      }
      r.success(CwZ(".cw-btnContainer").length);
    } catch (e) {
      Utility.log(e);
    }
  },
  isSearchingPage: function () {
    var e = this.webPageAsObject
      ? this.webPageAsObject.html.find("body")
      : CwZ("body");
    return (
      0 < e.find("#standardResults").length ||
      0 < e.find("#oaArticles .bd").length
    );
  },
  isListingPage: function () {
    var e = this.webPageAsObject
      ? this.webPageAsObject.html.find("body")
      : CwZ("body");
    return (
      (0 < e.find(".article").length ||
        0 < e.find(".topArticleDisplay").length) &&
      !CWParser_informaworld.isPbPubPage()
    );
  },
  isPubPage: function () {
    return (
      0 <
      (this.webPageAsObject
        ? this.webPageAsObject.html.find("body")
        : CwZ("body")
      ).find(".pageArticle").length
    );
  },
  isPbPubPage: function () {
    return (
      0 <
        (this.webPageAsObject
          ? this.webPageAsObject.html.find("body")
          : CwZ("body")
        ).find(".literatumPublicationTitle").length &&
      !CWParser_informaworld.isPbListingPage()
    );
  },
  isPbListingPage: function () {
    return 0 < CwZ(".tocContent").length;
  },
  isPbSearchPage: function () {
    return 0 < CwZ("ol.search-results").length;
  },
  parsePage: function (C) {
    Utility.validateArgs(C) || (C = Callbacks);
    var m = CWParser_informaworld,
      g = [];
    (parsedHtml = !1),
      (m.webPageAsObject = C.webPageAsObject || !1),
      m.webPageAsObject &&
        (parsedHtml = m.webPageAsObject.html =
          CwZ(Utility.parseHTML(m.webPageAsObject.data)));
    var b = Utility.getPageDomain(this.webPageAsObject.url),
      Z = document.domain.replace(/[\.-]/g, "");
    if (m.isPubPage())
      try {
        var e = "",
          t = "",
          a = "",
          i = "",
          n = "",
          r = "",
          d = "",
          o = "",
          l = "",
          s = "",
          u =
            CwZ("#breadcrumb a:contains('List of Issues')").attr("href") ||
            CwZ(
              "#JournalNavigator ul li a:contains(All volumes & issues)"
            ).attr("href"),
          f = CwZ(".accessmodule").hasClass("access_free");
        u && (u = u.replace("/loi/", "")),
          0 === u.indexOf("oa") && (m.isCogent = !0),
          (e =
            Utility.trim(CwZ(".description h1").text()) ||
            Utility.trim(CwZ("#ArticleInfo h1").text())),
          (t = CwZ(".doiMeta a")
            .map(function () {
              if (0 <= CwZ(this).attr("href").indexOf("author"))
                return Utility.trim(CwZ(this).text());
            })
            .get()
            .join("; ")) ||
            (t = Utility.selectorAttributeGetter(
              "meta[name='dc.Creator']",
              "content",
              !1,
              "; "
            )),
          (r =
            Utility.trim(
              CwZ(".doiMeta dl dd")
                .text()
                .replace(/(^.*DOI:)([a-zA-Z0-9_./-]+)?$/g, "$2")
            ) ||
            CwZ("meta[scheme=doi]").attr("content") ||
            Utility.trim(
              CwZ(".articleInfoDOI")
                .eq(0)
                .text()
                .replace(/(^.*DOI)([a-zA-Z0-9_./]+)?$/g, "$2")
            )),
          (d = "doi");
        var c = CwZ(".accessmodule:first").length
            ? CwZ(".accessmodule:first")
            : CwZ("#DownloadOptions").length
            ? CwZ("#DownloadOptions")
            : null,
          p = "";
        p = (p = /cogentoa/.test(Z)
          ? (-1 < CwZ(c).find("a:contains('PDF')").attr("href").indexOf("http")
              ? ""
              : b) + CwZ(c).find("a:contains('PDF')").attr("href")
          : (-1 < CwZ(c).find(".pdf").attr("href").indexOf("http") ? "" : b) +
            CwZ(c).find(".pdf").attr("href"))
          .split("#")[0]
          .replace("/abs/", "/pdf/");
        var w = "";
        (a = p).match(/\/\d{7}/) &&
          ((w = a.match(/\/\d{7}/)[0].replace(/[\/\.]/g, "")),
          (w = Utility.getIssnCheck(w))),
          (n = p.replace("/doi/pdf/", "/doi/abs/")),
          (i = p.replace("/doi/pdf/", "/doi/ref/")),
          (o =
            b +
            "/action/downloadCitation?doi=" +
            encodeURIComponent(r) +
            "&include=ref&direct=true&format=ris&submit=Download+article+citation+data"),
          (l = "ris"),
          (F = Utility.trim(CwZ(".gutter table h2").text())),
          (L = Utility.selectorAttributeGetter(
            "meta[name='dc.Date']",
            "content"
          )) && (s = new Date(L).getFullYear());
        var h = new CWMetaData({
          title: e,
          authors: t,
          identifier: r,
          identifierType: d,
          pubLink: n,
          refLink: i,
          pdfLink: a,
          dataUrl: o,
          type: l,
          issn: w,
          journal: F,
          openaccess: f,
          year: s,
        });
        if (
          (g.push(h),
          0 == (U = c.find(".showDownloadPopup,.cw-btnContainer")).length)
        )
          if (
            /(tandfonlinecom|tandfqaliteratumonlinecom|tandftestliteratumonlinecom|tandfstagliteratumonlinecom)/.test(
              Z
            )
          ) {
            Utility.filter(b, u, "informaworld") &&
              (c.find(".accessIconWrapper").before(
                C.addButton({
                  pdfUrl: a,
                  index: 0,
                  inline: !0,
                  class: " tandf-detail tip_bm",
                  buttonCB: function (e) {
                    var t = !!navigator.userAgent.match(/Trident.*rv[ :]*11\./),
                      a =
                        0 < navigator.userAgent.indexOf("MSIE") || t
                          ? "btns_bold_face-IE"
                          : "btns_bold_face";
                    if (/cogentoa/.test(Z)) {
                      var i =
                          '<a class="showDownloadPopup" style="position:relative;" href="@@pdfLink@@">@@btntext@@</a>',
                        n =
                          e.pdfLink.replace("/pdf/", "/abs/") +
                          "#" +
                          btoa(e.pdfLink + "@@@0");
                      c = CwZ("#DownloadOptionsContainer");
                      var r = CwZ(c).find("#DownloadOptions a").eq(0).text(),
                        d = CwZ(c).find("#DownloadOptions a").get(0);
                      (i = (i = i.replace("@@btntext@@", r)).replace(
                        "@@pdfLink@@",
                        n
                      )),
                        CwZ(i).insertBefore(
                          CwZ("#DownloadOptions .dropdown-toggle")
                        ),
                        CwZ(c).find(".showDownloadPopup").data("metadata", e),
                        CwZ(d).remove();
                    } else if (0 == CwZ(".showDownloadPopup").length) {
                      (i =
                        '<div class="showDownloadPopup-detail' +
                        a +
                        '"><a class="showDownloadPopup pdf" style="position:relative;" href="@@pdfLink@@">@@btntext@@</a></div>'),
                        (n =
                          e.pdfLink.replace("/pdf/", "/abs/") +
                          "#" +
                          btoa(e.pdfLink + "@@@0")),
                        (r = CwZ(c).find(".pdf").text());
                      var o = CwZ(c).find(".pdf").index();
                      (d = CwZ(c).find(".pdf")),
                        (i = (i = i.replace("@@btntext@@", r)).replace(
                          "@@pdfLink@@",
                          n
                        )),
                        CwZ(i).insertBefore(
                          CwZ(".accessmodule").children().eq(o)
                        ),
                        CwZ(c).find(".showDownloadPopup").data("metadata", e),
                        CwZ(d).remove(),
                        (c = CwZ(".top_article_links")),
                        (i =
                          '<div class="showDownloadPopup-detail' +
                          a +
                          '"><a class="showDownloadPopup pdf" style="position:relative;" href="@@pdfLink@@">@@btntext@@</a></div>'),
                        (r = CwZ(c).find(".pdf").text()),
                        (o = CwZ(c).find(".pdf").closest("li").index()),
                        (d = CwZ(c).find(".pdf")),
                        (i = (i = i.replace("@@btntext@@", r)).replace(
                          "@@pdfLink@@",
                          n
                        )),
                        CwZ(c).children().eq(o).append(i),
                        CwZ(c).find(".showDownloadPopup").data("metadata", e),
                        CwZ(d).remove();
                    }
                  },
                  metaData: h,
                })
              ),
              "" == a && c.find("a.cw-openPdfReader").hide(),
              c.find(".cw-btnContainer").data("metadata", h));
          } else
            c.find(".accessIconWrapper").before(
              C.addButton({
                pdfUrl: a,
                index: 0,
                inline: !0,
                class: " tandf-detail tip_bm",
              })
            ),
              "" == a && c.find("a.cw-openPdfReader").hide(),
              c.find(".cw-btnContainer").data("metadata", h);
        else
          0 != U.length &&
            void 0 === U.data("metadata") &&
            U.data("metadata", h);
        var v = Utility.getPageUrl(this.webPageAsObject.url);
        if (
          "1" == Utility.parseQueryStr(v).redirect ||
          ~v.indexOf("redirect=1")
        ) {
          if ((I = CwZ("body").find('form[name="frmLogin"]')) && 0 < I.length) {
            var y =
              n.replace("abs/", "full/") + "#" + Base64.encode(a + "@@@0");
            I.find("[name='redirectUri']").attr("value", y);
          }
          if ((W = CwZ("body").find("ul.externalLogin a")))
            for (
              var P =
                  encodeURIComponent("/doi/full/" + r + "#") +
                  Base64.encode(a + "@@@0"),
                x = encodeURIComponent("/doi/pdf/" + r + "?redirect=1"),
                k = 0;
              k < W.length;
              k++
            )
              W[k].href = W[k].href.replace(x, P);
        }
      } catch (e) {
        Utility.log(e);
      }
    else if (m.isPbPubPage())
      try {
        (e = ""),
          (t = ""),
          (a = ""),
          (i = ""),
          (n = ""),
          (r = ""),
          (d = ""),
          (o = ""),
          (l = ""),
          (s = ""),
          (u = CwZ("body").find(".info").find("a").attr("href")),
          (f = CwZ("body").find(".accessLogo").find("img").length);
        u && (u = (u = u.replace("/toc/", "")).replace(/\/\d+\/\d+/g, "")),
          0 === u.indexOf("oa") && (m.isCogent = !0);
        var D = CwZ("body");
        (e = (e =
          D.find(
            ".literatumPublicationTitle h1 span.NLM_article-title.hlFld-title"
          ).text() ||
          D.find(".literatumPublicationTitle h1 span").text() ||
          D.find(".literatumPublicationTitle h1").text()).trim()),
          (t = CwZ(CwZ(".publicationContentAuthors")[0])
            .find(".entryAuthor")
            .map(function () {
              if (0 <= CwZ(this).attr("href").indexOf("author")) {
                var e = CwZ(this).clone();
                return e.find("span").remove(), Utility.trim(e.text());
              }
            })
            .get()
            .join("; ")) ||
            (t = Utility.selectorAttributeGetter(
              "meta[name='dc.Creator']",
              "content",
              !1,
              "; "
            )),
          CwZ("meta[name='dc.Identifier'][scheme='doi']").length
            ? (r = CwZ("meta[name='dc.Identifier'][scheme='doi']").attr(
                "content"
              ))
            : CwZ(".show-pdf").length &&
              CwZ(".show-pdf")
                .attr("href")
                .match(/\/doi\/pdf/)
            ? (r = CwZ(".show-pdf")
                .attr("href")
                .replace("/doi/pdf/", "")
                .split("?")[0])
            : CwZ(".show-pdf").length
            ? CwZ(".show-pdf")
                .attr("href")
                .match(/\/abs\/(.*)\#/)
              ? (r = CwZ(".show-pdf")
                  .attr("href")
                  .match(/\/abs\/(.*)\#/)[1]
                  .split("?")[0])
              : CwZ(".show-pdf")
                  .attr("href")
                  .match(/\/abs\/(.*)/) &&
                (r = CwZ(".show-pdf")
                  .attr("href")
                  .match(/\/abs\/(.*)/)
                  .split("?")[0])
            : CwZ(".show-full").length &&
              (r = CwZ(".show-full")
                .attr("href")
                .replace("/doi/full/", "")
                .replace(/\?(.*)/g, "")),
          (d = "doi");
        (c = CwZ(".tab-nav")), (p = "");
        p = (p = /cogentoa/.test(Z)
          ? (-1 < CwZ(c).find("a:contains('PDF')").attr("href").indexOf("http")
              ? ""
              : b) + CwZ(c).find("a:contains('PDF')").attr("href")
          : CwZ(c).find(".show-pdf").length
          ? (-1 < CwZ(c).find(".show-pdf").attr("href").indexOf("http")
              ? ""
              : b) + CwZ(c).find(".show-pdf").attr("href")
          : (p =
              (-1 <
              CwZ(".show-full")
                .attr("href")
                .replace(/\?(.*)/g, "")
                .indexOf("http")
                ? ""
                : b) +
              CwZ(".show-full")
                .attr("href")
                .replace(/\?(.*)/g, "")).replace("/full/", "/pdf/"))
          .split("#")[0]
          .replace("/abs/", "/pdf/");
        var L;
        w = "";
        (a = p).match(/\/\d{7}/) &&
          ((w = a.match(/\/\d{7}/)[0].replace(/[\/\.]/g, "")),
          (w = Utility.getIssnCheck(w))),
          (n = p.replace("/doi/pdf/", "/doi/abs/")),
          (i = p.replace("/doi/pdf/", "/doi/ref/")),
          (o =
            b +
            "/action/downloadCitation?doi=" +
            encodeURIComponent(r) +
            "&include=cit&direct=true&format=ris&submit=Download+article+citation+data"),
          (l = "ris"),
          (F = CwZ("body").find(".info").find("a").eq(0).text()) &&
            (F = F.trim()),
          (L = Utility.selectorAttributeGetter(
            "meta[name='dc.Date']",
            "content"
          )) && (s = new Date(L).getFullYear());
        var U;
        h = new CWMetaData({
          title: e,
          authors: t,
          identifier: r,
          identifierType: d,
          pubLink: n,
          refLink: i,
          pdfLink: a,
          dataUrl: o,
          issn: w,
          type: l,
          journal: F,
          openaccess: f,
          year: s,
        });
        if (
          (g.push(h),
          0 == (U = c.find(".showDownloadPopup,.cw-btnContainer")).length)
        ) {
          Utility.filter(b, u, "informaworld") &&
            (c.find(".accessIconWrapper").before(
              C.addButton({
                pdfUrl: a,
                index: 0,
                inline: !0,
                class: " tandf-detail tip_bm",
                buttonCB: function (e) {
                  navigator.userAgent.match(/Trident.*rv[ :]*11\./);
                  if (
                    (navigator.userAgent.indexOf("MSIE"), /cogentoa/.test(Z))
                  ) {
                    var t =
                        '<a class="showDownloadPopup" style="position:relative;" href="@@pdfLink@@">@@btntext@@</a>',
                      a =
                        e.pdfLink.replace("/pdf/", "/abs/") +
                        "#" +
                        btoa(e.pdfLink + "@@@0");
                    c = CwZ("#DownloadOptionsContainer");
                    var i = CwZ(c).find("#DownloadOptions a").eq(0).text(),
                      n = CwZ(c).find("#DownloadOptions a").get(0);
                    (t = (t = t.replace("@@btntext@@", i)).replace(
                      "@@pdfLink@@",
                      a
                    )),
                      CwZ(t).insertBefore(
                        CwZ("#DownloadOptions .dropdown-toggle")
                      ),
                      CwZ(c).find(".showDownloadPopup").data("metadata", e),
                      CwZ(n).remove();
                  } else if (0 == CwZ(".showDownloadPopup").length) {
                    (t =
                      '<a class="showDownloadPopup show-pdf" style="position:relative;" href="@@pdfLink@@">@@btntext@@</a>'),
                      (a =
                        e.pdfLink.replace("/pdf/", "/abs/") +
                        "#" +
                        btoa(e.pdfLink + "@@@0"));
                    var r = c.length,
                      d =
                        ((i =
                          1 === r
                            ? CwZ(c).find(".show-pdf").text()
                            : CwZ(c).find(".show-pdf").eq(1).text()),
                        CwZ(c).find(".show-pdf").closest("li").index());
                    if (
                      ((n = CwZ(c).find(".show-pdf")),
                      (t = (t = t.replace("@@btntext@@", i)).replace(
                        "@@pdfLink@@",
                        a
                      )),
                      CwZ(c).find(".show-pdf").closest("span").length)
                    )
                      CwZ(c)
                        .find(".show-pdf")
                        .closest("span")
                        .children()
                        .eq(d)
                        .append(t);
                    else if (1 === r)
                      CwZ(c)
                        .find(".show-pdf")
                        .closest("ul")
                        .children()
                        .eq(d)
                        .append(t);
                    else if (2 === r) {
                      var o = CwZ(c)
                        .find(".show-pdf")
                        .eq(0)
                        .closest("li")
                        .index();
                      CwZ(c)
                        .find(".show-pdf")
                        .closest("ul")
                        .eq(0)
                        .children()
                        .eq(o)
                        .append(t),
                        CwZ(c)
                          .find(".show-pdf")
                          .closest("ul")
                          .eq(1)
                          .children()
                          .eq(o)
                          .append(t);
                    }
                    CwZ(c).find(".showDownloadPopup").data("metadata", e),
                      CwZ(n).remove();
                  }
                },
                metaData: h,
              })
            ),
            "" == a && c.find("a.cw-openPdfReader").hide(),
            c.find(".cw-btnContainer").data("metadata", h));
        }
        v = Utility.getPageUrl(this.webPageAsObject.url);
        if (
          "1" == Utility.parseQueryStr(v).redirect ||
          ~v.indexOf("redirect=1")
        ) {
          var I, W;
          if ((I = CwZ("body").find('form[name="frmLogin"]')) && 0 < I.length) {
            y = n.replace("abs/", "full/") + "#" + Base64.encode(a + "@@@0");
            I.find("[name='redirectUri']").attr("value", y);
          }
          if ((W = CwZ("body").find("ul.externalLogin a")))
            for (
              P =
                encodeURIComponent("/doi/full/" + r + "#") +
                Base64.encode(a + "@@@0"),
                x = encodeURIComponent("/doi/pdf/" + r + "?redirect=1"),
                k = 0;
              k < W.length;
              k++
            )
              W[k].href = W[k].href.replace(x, P);
        }
        CwZ(".pb-ui").on("DOMNodeInserted DOMNodeRemoved", function () {
          CwZ(".pb-ui > .fixed-tabs").length && CWPDFReader.bindPopupEvents();
        });
      } catch (e) {
        Utility.log(e);
      }
    else if (m.isPbSearchPage() && !CwZ(".semi-transparent-layer").length) {
      var O = ".search-results-body";
      (m.webPageAsObject ? parsedHtml.find(O) : CwZ(O))
        .find("ol.search-results li")
        .each(function (e) {
          var t,
            a,
            i,
            n,
            r,
            d,
            o,
            l = "",
            s = "",
            f = CwZ(this);
          if (
            ((t = Utility.trim(f.find(".art_title a").text())),
            (a = 0 < f.find(".access-icon").length),
            (i = f
              .find(".author span")
              .map(function () {
                return Utility.trim(CwZ(this).text());
              })
              .get()
              .join("; ")),
            0 !== f.find(".art_title a.ref").length)
          ) {
            (d = f
              .find(".art_title a.ref")
              .attr("href")
              .replace("/doi/abs/", "")
              .replace("/doi/full/", "")),
              "doi";
            var c =
                (-1 < f.find(".art_title a.ref").attr("href").indexOf("http")
                  ? ""
                  : b) + f.find(".art_title a.ref").attr("href"),
              p = "";
            (s = c =
              c.split("#")[0].replace(/\/full\/|\/abs\//, "/pdf/")).match(
              /\/\d{7}/
            ) &&
              ((p = s.match(/\/\d{7}/)[0].replace(/[\/\.]/g, "")),
              (p = Utility.getIssnCheck(p))),
              (n = c.replace("/doi/pdf/", "/doi/abs/")),
              (r = c.replace("/doi/pdf/", "/doi/ref/")),
              (o =
                b +
                "/action/downloadCitation?doi=" +
                decodeURIComponent(d) +
                "&include=ref&direct=true&format=ris&submit=Download+article+citation+data"),
              "ris",
              (F = Utility.trim(f.find(".searchResultJournal").text()));
            try {
              l = new Date(f.find(".publication-year")).getFullYear();
            } catch (e) {}
            var w = new CWMetaData({
              title: t,
              authors: i,
              identifier: d,
              identifierType: "doi",
              pubLink: n,
              issn: p,
              refLink: r,
              pdfLink: s,
              dataUrl: o,
              year: l,
              type: "ris",
              journal: F,
              listingPage: !0,
              openaccess: a,
            });
            g.push(w);
            var h = f.find(".showDownloadPopup,.cw-btnContainer");
            if (0 == h.length)
              if (
                /(tandfonlinecom|tandfqaliteratumonlinecom|tandftestliteratumonlinecom|tandfstagliteratumonlinecom)/.test(
                  Z
                )
              ) {
                Utility.filter(b, u, "informaworld") &&
                  (f.find(".access:first .accessIconWrapper").before(
                    C.addButton({
                      pdfUrl: s,
                      index: e,
                      inline: !0,
                      class: " tandf-list tip_bm",
                      buttonCB: function (e) {
                        var t =
                            !!navigator.userAgent.match(/Trident.*rv[ :]*11\./),
                          a =
                            0 < navigator.userAgent.indexOf("MSIE") || t
                              ? "btns_bold_face-IE"
                              : "btns_bold_face";
                        if (/cogentoa/.test(Z)) {
                          var i =
                              '<a class="showDownloadPopup" style="position:relative;" href="@@pdfLink@@">@@btntext@@</a>',
                            n =
                              e.pdfLink.replace("/pdf/", "/abs/") +
                              "#" +
                              btoa(e.pdfLink + "@@@0");
                          f = f.find(".access");
                          var r = CwZ(f).find(".pdf").eq(0).text(),
                            d = CwZ(f).find(".pdf").get(0);
                          (i = (i = i.replace("@@btntext@@", r)).replace(
                            "@@pdfLink@@",
                            n
                          )),
                            CwZ(f).append(i),
                            CwZ(f)
                              .find(".showDownloadPopup")
                              .data("metadata", e),
                            CwZ(d).remove();
                        } else {
                          (i =
                            '<div class="showDownloadPopup-detail' +
                            a +
                            '"><a class="showDownloadPopup pdf" style="position:relative;" href="@@pdfLink@@">@@btntext@@</a></div>'),
                            (n =
                              e.pdfLink.replace("/pdf/", "/abs/") +
                              "#" +
                              btoa(e.pdfLink + "@@@0")),
                            (r = CwZ(f).find(".pdf").text()),
                            CwZ(f).find(".pdf").index(),
                            (d = CwZ(f).find(".pdf")),
                            (i = (i = i.replace("@@btntext@@", r)).replace(
                              "@@pdfLink@@",
                              n
                            )),
                            CwZ(i).insertBefore(d),
                            CwZ(f)
                              .find(".showDownloadPopup")
                              .data("metadata", e),
                            CwZ(d).remove();
                          var o = f.find(".filesLinks");
                          (i =
                            '<div class="showDownloadPopup-detail' +
                            a +
                            '"><a class="showDownloadPopup" style="position:relative;" href="@@pdfLink@@">@@btntext@@</a></div>'),
                            (r = CwZ(o).find(".firstEntryLink a").text()),
                            (d = CwZ(o).find(".firstEntryLink a")),
                            (i = (i = i.replace("@@btntext@@", r)).replace(
                              "@@pdfLink@@",
                              n
                            )),
                            CwZ(o).find(".firstEntryLink").append(i),
                            CwZ(o)
                              .find(".showDownloadPopup")
                              .data("metadata", e),
                            CwZ(d).remove();
                        }
                      },
                      metaData: w,
                    })
                  ),
                  "" == s && f.find("a.cw-openPdfReader").hide(),
                  f.find(".cw-btnContainer").data("metadata", w));
              } else
                f.find(".access:first .accessIconWrapper").before(
                  C.addButton({
                    pdfUrl: s,
                    index: e,
                    inline: !0,
                    class: " tandf-list tip_bm",
                  })
                ),
                  "" == s && f.find("a.cw-openPdfReader").hide(),
                  f.find(".cw-btnContainer").data("metadata", w);
            else
              0 != h.length &&
                void 0 === h.data("metadata") &&
                h.data("metadata", w);
          }
        });
    } else if (m.isPbListingPage())
      try {
        O = ".tocContent";
        (m.webPageAsObject ? parsedHtml.find(O) : CwZ(O))
          .find("table")
          .each(function (e) {
            var t,
              a,
              i,
              n,
              r,
              d,
              o,
              l,
              s = "",
              f = CwZ(this),
              c = CwZ(".loi-issues-scroller a.open")
                .attr("href")
                .replace("/toc/", "")
                .replace("/journal/", "");
            0 ===
              (c =
                -1 == c.lastIndexOf("/")
                  ? c
                  : c.substr(0, c.lastIndexOf("/"))).indexOf("oa") &&
              (m.isCogent = !0),
              (t = Utility.trim(f.find(".art_title").text())),
              (a = 0 < f.find(".access-icon").length),
              (i = f
                .find(".articleEntryAuthorsLinks")
                .find("a")
                .map(function () {
                  return Utility.trim(CwZ(this).text());
                })
                .get()
                .join("; ")),
              (o = f
                .find(".art_title a.ref")
                .attr("href")
                .replace("/doi/full/", "")
                .replace("/doi/abs/", ""));
            var p =
                (-1 < f.find(".art_title a.ref").attr("href").indexOf("http")
                  ? ""
                  : b) + f.find(".art_title a.ref").attr("href"),
              w = "";
            (s = p =
              p.split("#")[0].replace(/\/full\/|\/abs\//, "/pdf/")).match(
              /\/\d{7}/
            ) &&
              ((w = s.match(/\/\d{7}/)[0].replace(/[\/\.]/g, "")),
              (w = Utility.getIssnCheck(w))),
              (r = p.replace("/doi/pdf/", "/doi/abs/")),
              (d = p.replace("/doi/pdf/", "/doi/ref/")),
              (l =
                b +
                "/action/downloadCitation?doi=" +
                encodeURIComponent(o) +
                "&include=ref&direct=true&format=ris&submit=Download+article+citation+data"),
              (F = Utility.trim(CwZ(".journalMetaTitle").text())),
              (n = new Date(
                f
                  .find("p:contains(Published online:):first")
                  .text()
                  .split("Published online:")[1]
              ).getFullYear());
            var h = new CWMetaData({
              title: t,
              authors: i,
              identifier: o,
              identifierType: "doi",
              pubLink: r,
              issn: w,
              refLink: d,
              pdfLink: s,
              dataUrl: l,
              year: n,
              type: "ris",
              journal: F,
              listingPage: !0,
              openaccess: a,
            });
            g.push(h);
            var u = f.find(".showDownloadPopup,.cw-btnContainer");
            if (0 == u.length)
              if (
                /(tandfonlinecom|tandfqaliteratumonlinecom|tandftestliteratumonlinecom|tandfstagliteratumonlinecom)/.test(
                  Z
                )
              ) {
                Utility.filter(b, c, "informaworld") &&
                  (f.find(".access:first .accessIconWrapper").before(
                    C.addButton({
                      pdfUrl: s,
                      index: e,
                      inline: !0,
                      class: " tandf-list tip_bm",
                      buttonCB: function (e) {
                        var t =
                            !!navigator.userAgent.match(/Trident.*rv[ :]*11\./),
                          a =
                            0 < navigator.userAgent.indexOf("MSIE") || t
                              ? "btns_bold_face-IE"
                              : "btns_bold_face";
                        if (/cogentoa/.test(Z)) {
                          var i =
                              '<a class="showDownloadPopup" style="position:relative;" href="@@pdfLink@@">@@btntext@@</a>',
                            n =
                              e.pdfLink.replace("/pdf/", "/abs/") +
                              "#" +
                              btoa(e.pdfLink + "@@@0");
                          f = f.find(".access");
                          var r = CwZ(f).find(".pdf").eq(0).text(),
                            d = CwZ(f).find(".pdf").get(0);
                          (i = (i = i.replace("@@btntext@@", r)).replace(
                            "@@pdfLink@@",
                            n
                          )),
                            CwZ(f).append(i),
                            CwZ(f)
                              .find(".showDownloadPopup")
                              .data("metadata", e),
                            CwZ(d).remove();
                        } else {
                          (i =
                            '<div class="showDownloadPopup-detail' +
                            a +
                            '"><a class="showDownloadPopup pdf" style="position:relative;" href="@@pdfLink@@">@@btntext@@</a></div>'),
                            (n =
                              e.pdfLink.replace("/pdf/", "/abs/") +
                              "#" +
                              btoa(e.pdfLink + "@@@0")),
                            (r = CwZ(f).find(".pdf").text()),
                            CwZ(f).find(".pdf").index(),
                            (d = CwZ(f).find(".pdf")),
                            (i = (i = i.replace("@@btntext@@", r)).replace(
                              "@@pdfLink@@",
                              n
                            )),
                            CwZ(i).insertBefore(d),
                            CwZ(f)
                              .find(".showDownloadPopup")
                              .data("metadata", e),
                            CwZ(d).remove();
                          var o = f.find(".filesLinks");
                          (i =
                            '<div class="showDownloadPopup-detail' +
                            a +
                            '"><a class="showDownloadPopup" style="position:relative;" href="@@pdfLink@@">@@btntext@@</a></div>'),
                            (r = CwZ(o).find(".firstEntryLink a").text()),
                            (d = CwZ(o).find(".firstEntryLink a")),
                            (i = (i = i.replace("@@btntext@@", r)).replace(
                              "@@pdfLink@@",
                              n
                            )),
                            CwZ(o).find(".firstEntryLink").append(i),
                            CwZ(o)
                              .find(".showDownloadPopup")
                              .data("metadata", e),
                            CwZ(d).remove();
                        }
                      },
                      metaData: h,
                    })
                  ),
                  "" == s && f.find("a.cw-openPdfReader").hide(),
                  f.find(".cw-btnContainer").data("metadata", h));
              } else
                f.find(".access:first .accessIconWrapper").before(
                  C.addButton({
                    pdfUrl: s,
                    index: e,
                    inline: !0,
                    class: " tandf-list tip_bm",
                  })
                ),
                  "" == s && f.find("a.cw-openPdfReader").hide(),
                  f.find(".cw-btnContainer").data("metadata", h);
            else
              0 != u.length &&
                void 0 === u.data("metadata") &&
                u.data("metadata", h);
          });
      } catch (e) {
        Utility.log(e);
      }
    else if (m.isSearchingPage())
      try {
        O = ".bd";
        (m.webPageAsObject ? parsedHtml.find(O) : CwZ(O))
          .has('input[name="doi"]')
          .each(function (e) {
            var t,
              a,
              i,
              n,
              r,
              d,
              o,
              l,
              s = "",
              f = CwZ(this),
              c = f
                .find("a.searchResultJournal")
                .attr("href")
                .replace("/toc/", "")
                .replace("/journal/", "");
            0 ===
              (c =
                -1 == c.lastIndexOf("/")
                  ? c
                  : c.substr(0, c.lastIndexOf("/"))).indexOf("oa") &&
              (m.isCogent = !0),
              (t = Utility.trim(f.find(".resultTitle a").text())),
              (a = f.find(".accessmodule").hasClass("access_free")),
              (i = f
                .find(".author a")
                .map(function () {
                  return Utility.trim(CwZ(this).text());
                })
                .get()
                .join("; ")),
              (o = Utility.selectorAttributeGetter(
                'input[name="doi"]',
                "value",
                f
              ));
            var p =
                (-1 < CwZ(f).find(".pdf").attr("href").indexOf("http")
                  ? ""
                  : b) + CwZ(f).find(".pdf").attr("href"),
              w = "";
            (s = p = p.split("#")[0].replace("/abs/", "/pdf/")).match(
              /\/\d{7}/
            ) &&
              ((w = s.match(/\/\d{7}/)[0].replace(/[\/\.]/g, "")),
              (w = Utility.getIssnCheck(w))),
              (r = p.replace("/doi/pdf/", "/doi/abs/")),
              (d = p.replace("/doi/pdf/", "/doi/ref/")),
              (l =
                b +
                "/action/downloadCitation?doi=" +
                encodeURIComponent(o) +
                "&include=ref&direct=true&format=ris&submit=Download+article+citation+data"),
              (F = Utility.trim(f.find("a.searchResultJournal").text())),
              (n = new Date(
                f
                  .find("p:contains(Published online:):first")
                  .text()
                  .split("Published online:")[1]
              ).getFullYear());
            var h = new CWMetaData({
              title: t,
              authors: i,
              identifier: o,
              identifierType: "doi",
              pubLink: r,
              issn: w,
              refLink: d,
              pdfLink: s,
              dataUrl: l,
              year: n,
              type: "ris",
              journal: F,
              listingPage: !0,
              openaccess: a,
            });
            g.push(h);
            var u = f.find(".showDownloadPopup,.cw-btnContainer");
            if (0 == u.length)
              if (
                /(tandfonlinecom|tandfqaliteratumonlinecom|tandftestliteratumonlinecom|tandfstagliteratumonlinecom)/.test(
                  Z
                )
              ) {
                Utility.filter(b, c, "informaworld") &&
                  (f.find(".access:first .accessIconWrapper").before(
                    C.addButton({
                      pdfUrl: s,
                      index: e,
                      inline: !0,
                      class: " tandf-list tip_bm",
                      buttonCB: function (e) {
                        var t =
                            !!navigator.userAgent.match(/Trident.*rv[ :]*11\./),
                          a =
                            0 < navigator.userAgent.indexOf("MSIE") || t
                              ? "btns_bold_face-IE"
                              : "btns_bold_face";
                        if (/cogentoa/.test(Z)) {
                          var i =
                              '<a class="showDownloadPopup" style="position:relative;" href="@@pdfLink@@">@@btntext@@</a>',
                            n =
                              e.pdfLink.replace("/pdf/", "/abs/") +
                              "#" +
                              btoa(e.pdfLink + "@@@0");
                          f = f.find(".access");
                          var r = CwZ(f).find(".pdf").eq(0).text(),
                            d = CwZ(f).find(".pdf").get(0);
                          (i = (i = i.replace("@@btntext@@", r)).replace(
                            "@@pdfLink@@",
                            n
                          )),
                            CwZ(f).append(i),
                            CwZ(f)
                              .find(".showDownloadPopup")
                              .data("metadata", e),
                            CwZ(d).remove();
                        } else {
                          (i =
                            '<div class="showDownloadPopup-detail' +
                            a +
                            '"><a class="showDownloadPopup pdf" style="position:relative;" href="@@pdfLink@@">@@btntext@@</a></div>'),
                            (n =
                              e.pdfLink.replace("/pdf/", "/abs/") +
                              "#" +
                              btoa(e.pdfLink + "@@@0")),
                            (r = CwZ(f).find(".pdf").text()),
                            CwZ(f).find(".pdf").index(),
                            (d = CwZ(f).find(".pdf")),
                            (i = (i = i.replace("@@btntext@@", r)).replace(
                              "@@pdfLink@@",
                              n
                            )),
                            CwZ(i).insertBefore(d),
                            CwZ(f)
                              .find(".showDownloadPopup")
                              .data("metadata", e),
                            CwZ(d).remove();
                          var o = f.find(".filesLinks");
                          (i =
                            '<div class="showDownloadPopup-detail' +
                            a +
                            '"><a class="showDownloadPopup" style="position:relative;" href="@@pdfLink@@">@@btntext@@</a></div>'),
                            (r = CwZ(o).find(".firstEntryLink a").text()),
                            (d = CwZ(o).find(".firstEntryLink a")),
                            (i = (i = i.replace("@@btntext@@", r)).replace(
                              "@@pdfLink@@",
                              n
                            )),
                            CwZ(o).find(".firstEntryLink").append(i),
                            CwZ(o)
                              .find(".showDownloadPopup")
                              .data("metadata", e),
                            CwZ(d).remove();
                        }
                      },
                      metaData: h,
                    })
                  ),
                  "" == s && f.find("a.cw-openPdfReader").hide(),
                  f.find(".cw-btnContainer").data("metadata", h));
              } else
                f.find(".access:first .accessIconWrapper").before(
                  C.addButton({
                    pdfUrl: s,
                    index: e,
                    inline: !0,
                    class: " tandf-list tip_bm",
                  })
                ),
                  "" == s && f.find("a.cw-openPdfReader").hide(),
                  f.find(".cw-btnContainer").data("metadata", h);
            else
              0 != u.length &&
                void 0 === u.data("metadata") &&
                u.data("metadata", h);
          });
      } catch (e) {
        Utility.log(e);
      }
    else if (m.isListingPage())
      try {
        var F = Utility.trim(CwZ("h1.topArticleMetaTitle").text());
        (u = CwZ("#breadcrumb a:contains('List of Issues')").attr("href")) &&
          (u = u.replace("/loi/", "")),
          0 === u.indexOf("oa") && (m.isCogent = !0),
          (0 < CwZ(".article").has('input[name="doi"]').length
            ? CwZ(".article").has('input[name="doi"]')
            : CwZ(".topArticleDisplay")
          ).each(function (e) {
            var t,
              a,
              i,
              n,
              r,
              d,
              o = "",
              l = "",
              s = CwZ(this);
            (a = s.find(".accessmodule").hasClass("access_free")),
              (t =
                Utility.trim(s.find(".entryTitle h3").text()) ||
                Utility.trim(s.find(".entryTitle h4").text())),
              (i = (
                0 < s.find("h4 a").length
                  ? s.find("h4 a")
                  : s.find(".entryAuthor")
              )
                .map(function () {
                  return Utility.trim(CwZ(this).text());
                })
                .get()
                .join("; ")),
              (l = s.find('input[name="doi"]').length
                ? Utility.selectorAttributeGetter(
                    'input[name="doi"]',
                    "value",
                    s
                  )
                : s
                    .find("a.entryTitle")
                    .attr("href")
                    .replace(/.*doi\/full\/(.*)/, "$1"));
            var f =
                (-1 < CwZ(s).find(".pdf").attr("href").indexOf("http")
                  ? ""
                  : b) + CwZ(s).find(".pdf").attr("href"),
              c = "";
            (o = f = f.split("#")[0].replace("/abs/", "/pdf/")).match(
              /\/\d{7}/
            ) &&
              ((c = o.match(/\/\d{7}/)[0].replace(/[\/\.]/g, "")),
              (c = Utility.getIssnCheck(c))),
              (n = f.replace("/doi/pdf/", "/doi/abs/")),
              (r = f.replace("/doi/pdf/", "/doi/ref/")),
              (d =
                b +
                "/action/downloadCitation?doi=" +
                encodeURIComponent(l) +
                "&include=ref&direct=true&format=ris&submit=Download+article+citation+data");
            var p = new CWMetaData({
              title: t,
              authors: i,
              identifier: l,
              identifierType: "doi",
              pubLink: n,
              refLink: r,
              pdfLink: o,
              dataUrl: d,
              type: "ris",
              listingPage: !0,
              issn: c,
              journal: F,
              openaccess: a,
            });
            g.push(p);
            var w = s.find(".showDownloadPopup,.cw-btnContainer");
            if (0 == w.length)
              if (
                /(tandfonlinecom|tandfqaliteratumonlinecom|tandftestliteratumonlinecom|tandfstagliteratumonlinecom)/.test(
                  Z
                )
              ) {
                if (Utility.filter(b, u, "informaworld")) {
                  s.find(".access:first .accessIconWrapper ").before(
                    C.addButton({
                      pdfUrl: o,
                      index: e,
                      inline: !0,
                      class: " tandf-list tip_bm",
                      buttonCB: function (e) {
                        var t =
                            !!navigator.userAgent.match(/Trident.*rv[ :]*11\./),
                          a =
                            '<div class="showDownloadPopup-detail' +
                            (0 < navigator.userAgent.indexOf("MSIE") || t
                              ? "btns_bold_face-IE"
                              : "btns_bold_face") +
                            '"><a class="showDownloadPopup pdf" style="position:relative;" href="@@pdfLink@@">@@btntext@@</a></div>',
                          i =
                            e.pdfLink.replace("/pdf/", "/abs/") +
                            "#" +
                            btoa(e.pdfLink + "@@@0"),
                          n = CwZ(s).find(".pdf").text(),
                          r =
                            (CwZ(s).find(".pdf").index(), CwZ(s).find(".pdf"));
                        (a = (a = a.replace("@@btntext@@", n)).replace(
                          "@@pdfLink@@",
                          i
                        )),
                          CwZ(a).insertBefore(r),
                          CwZ(s).find(".showDownloadPopup").data("metadata", e),
                          CwZ(r).remove();
                      },
                      metaData: p,
                    })
                  ),
                    "" == o && s.find("a.cw-openPdfReader").hide(),
                    s.find(".cw-btnContainer").data("metadata", p);
                }
              } else
                s.find(".access:first .accessIconWrapper ").before(
                  C.addButton({
                    pdfUrl: o,
                    index: e,
                    inline: !0,
                    class: " tandf-list tip_bm",
                  })
                ),
                  "" == o && s.find("a.cw-openPdfReader").hide(),
                  s.find(".cw-btnContainer").data("metadata", p);
            else
              0 != w.length &&
                void 0 === w.data("metadata") &&
                w.data("metadata", p);
          });
      } catch (e) {
        Utility.log(e);
      }
    C.success(g);
  },
  insertClassInAuthorsLink: function (i) {
    if (this.isPbPubPage()) {
      var n = (
        self.webPageAsObject ? parsedHtml.find("body") : CwZ("body")
      ).find(".publicationContentAuthors .contribDegrees");
      n.each(function (e) {
        var t = CwZ(n[e]).find("a");
        i[0].authors[e]
          ? t.attr("auid", i[0].authors[e].id)
          : t.attr("auid", -1),
          t.attr("pubid", publisher.appId);
        var a = t.clone();
        a.find("span").remove(),
          t.attr("cw-autitle", a.text()),
          t.addClass("cw-showTip"),
          t.addClass("cw-authorLink");
      });
    }
  },
  getData: function (e) {
    return Utility.getData(e);
  },
  extractHTML: function (e, t) {
    try {
      var a = "",
        i = "",
        n = "",
        r = "",
        d = "",
        o = "",
        l = "",
        s = "",
        f = "",
        c = "",
        p = "",
        w = "",
        h = "",
        u = "",
        C = "",
        m = "",
        g = "",
        b = "",
        Z = "",
        v = "",
        y = (
          this.webPageAsObject
            ? this.webPageAsObject.html.find(e.target)
            : CwZ(e.target)
        ).find("#journal_content #unit2");
      Z = Utility.trim(y.find(".gutter table tr:first td:first h2").text());
      var P = Utility.trim(y.find(".gutter table tr:first td:first h3").text());
      P = P.split(",");
      for (var x = 0; x < P.length; x++) {
        var k = Utility.trim(P[x]).toLowerCase().split(" ");
        switch (k[0]) {
          case "volume":
            w = k[1];
            break;
          case "issue":
            h = k[1];
            break;
          default:
            f = Utility.trim(P[x]);
        }
      }
      var D = y.find(".doiMeta > a");
      for (x = 0; x < D.length; x++) Utility.trim(D[x].text) + " ; ";
      c = Utility.trim(y.find(".gutter .last").text());
      var L = y.find(".doiMeta > p").text();
      (L = L.split(" ")) &&
        "2" == L.length &&
        ((pages = L[1]),
        (C = pages.replace(/^([\d]+)-([\d]+)/, "$1")),
        (m = pages.replace(/^([\d]+)-([\d]+)/, "$2")));
    } catch (e) {
      Utility.log(e);
    }
    return {
      title: t.title,
      isedited: i,
      author: t.authors,
      series_name: r,
      publisher: d,
      keywords: o,
      handle: l,
      year: f,
      date: s,
      description: c,
      redif_type: p,
      volume: w,
      issue: h,
      number: u,
      page_start: C,
      page_end: m,
      edition: g,
      book_editor: b,
      book_title: Z,
      chapter: v,
      url: t.pubLink,
      placeofpublication: n,
      identifier: t.identifier,
      isbn: a,
      doi: "doi" == t.identifierType ? t.identifier : "",
    };
  },
  getSupplementalContent: function () {
    var e,
      t,
      l = {},
      n = CwZ.Deferred();
    function s(e) {
      return e
        .replace(/\(.*KB.*/g, "")
        .replace(/\(.*MB.*/g, "")
        .trim();
    }
    try {
      ((t = CwZ.Deferred()),
      0 < CwZ("#supplementaryPanel").length
        ? 0 == CwZ("#supplementaryPanel").html().trim().length
          ? CwZ.get(CwZ("#supplementaryTab a").attr("href")).done(function (e) {
              t.resolve(e);
            })
          : t.resolve(CwZ("#supplementaryPanel"))
        : CWParser_informaworld.isSearchingPage() ||
          CWParser_informaworld.isListingPage()
        ? ((e =
            "undefined" != typeof CWDataCenterClass
              ? CWDataCenterClass.getInstance().pubSelected
              : CWDataCenter.pubSelected),
          CwZ.get(e.pdfLink.replace("/pdf/", "/suppl/"))
            .done(function (e) {
              t.resolve(e);
            })
            .fail(function () {
              t.resolve([]);
            }))
        : t.resolve([]),
      t.promise()).done(function (e) {
        var t, a;
        0 < (e = CwZ(e)).length &&
          ((l.files = {}),
          e.find(".SupplDownload a").each(function () {
            var e = CwZ(this);
            if ("#" != e.attr("href"))
              try {
                var t = s(e.text().trim());
                if (l.files[t]) {
                  var a = /\((\d+)\)/g,
                    i = a.exec(t);
                  if (i && 0 < i.length) {
                    var n = parseInt(i[1]);
                    t = t.replace(a, "(" + n + "1)");
                  } else t += "(1)";
                }
                l.files[t] = e.attr("href");
              } catch (e) {}
          })),
          ((a = CwZ.Deferred()),
          CWParser_informaworld.isPbPubPage()
            ? 0 < CwZ(".figuresContent").length
              ? a.resolve(CwZ(".figuresContent"))
              : CwZ.get(CwZ(".show-figure").attr("href")).done(function (e) {
                  a.resolve(e);
                })
            : 0 < CwZ("#figuresTablesPanel").length
            ? 0 == CwZ("#figuresTablesPanel").html().trim().length
              ? CwZ.get(CwZ("#figuresTablesTab a").attr("href")).done(function (
                  e
                ) {
                  a.resolve(e);
                })
              : a.resolve(CwZ("#figuresTablesPanel"))
            : CWParser_informaworld.isSearchingPage() ||
              CWParser_informaworld.isListingPage()
            ? ((t =
                "undefined" != typeof CWDataCenterClass
                  ? CWDataCenterClass.getInstance().pubSelected
                  : CWDataCenter.pubSelected),
              CwZ.get(t.pdfLink.replace("/pdf/", "/figure/"))
                .done(function (e) {
                  a.resolve(e);
                })
                .fail(function () {
                  a.resolve([]);
                }))
            : a.resolve([]),
          a.promise()).done(function (e) {
            if (((e = CwZ(e)), CWParser_informaworld.isPbPubPage())) {
              if (0 < e.find(".figuresContent .figure").length)
                var t = e.find(".figuresContent .figure"),
                  a = e.find(".figuresContent .tableView");
              else (t = e.find(".figure")), (a = e.find(".tableView"));
              var d = 1,
                i = 1,
                o = !(suppCount = 1);
              (0 < t.length || 0 < a.length) && (l.figures = {}),
                CwZ(t).each(function () {
                  var e = CwZ(this).find(
                      ".figureThumbnailContainer .figureDownloadOptions"
                    ),
                    n = e.length,
                    r = 1;
                  if (!e || !CwZ(e).find('a:contains("Original")').length)
                    return (
                      (o =
                        window.figureViewer &&
                        window.figureViewer.path &&
                        window.figureViewer.figures.length),
                      !1
                    );
                  e.each(function () {
                    var e = CwZ(this).find('a:contains("Original")');
                    if ("#" != e.attr("href"))
                      try {
                        var t = e.text().trim(),
                          a = s(t);
                        if ("PowerPoint slide" !== a) {
                          (a = "Figure " + d), 1 < n && ((a += "-" + r), r++);
                          var i = t.match(/\(.*\)/g);
                          i && (a += " " + i), (l.figures[a] = e.attr("href"));
                        }
                      } catch (e) {}
                  }),
                    d++;
                  CwZ(this).find(
                    '.figureDownloadOptions a:contains("Original")'
                  );
                }),
                o
                  ? window.figureViewer.figures.forEach(function (e) {
                      e &&
                        e.g &&
                        e.g.length &&
                        (e.g[0].l
                          ? (l.figures["Figure " + d++] =
                              window.figureViewer.path +
                              "/images/large/" +
                              e.g[0].l)
                          : e.g[0].m &&
                            (l.figures["Figure " + d++] =
                              window.figureViewer.path +
                              "/images/medium/" +
                              e.g[0].m));
                    })
                  : CwZ(e)
                      .find(
                        ".figuresContent #supplementaryPanel .supplement-box"
                      )
                      .each(function () {
                        var e = CwZ(this).find("a");
                        if ("#" != e.attr("href"))
                          try {
                            var t = e.text().trim();
                            l.figures[t] = e.attr("href");
                          } catch (e) {}
                      }),
                CwZ(a).each(function () {
                  try {
                    var e = CwZ(this).find("a#CSVdownloadButton").attr("href");
                    e && ((k = "Table " + i), (l.figures[k] = e)), i++;
                  } catch (e) {}
                });
            } else if (0 < e.length) {
              l.figures = {};
              (d = 1), (i = 1);
              e.find(".figureDownloadOptions a").each(function () {
                var e = CwZ(this);
                if ("#" != e.attr("href"))
                  try {
                    var t = e.text().trim(),
                      a = s(t);
                    if ("PowerPoint slide" !== a) {
                      a = "Figure " + d;
                      var i = t.match(/\(.*\)/g);
                      i && (a += " " + i), d++, (l.figures[a] = e.attr("href"));
                    }
                  } catch (e) {}
              }),
                e.find(".tableDownloadOption a").each(function () {
                  var e = CwZ(this);
                  if (
                    void 0 !== e.attr("href") &&
                    "" !== e.attr("href") &&
                    "#" != e.attr("href")
                  )
                    try {
                      var t = s(e.text().trim());
                      "CSV" !== t &&
                        "CSV" !== t &&
                        ("PDF" == t && ((t = "Table " + i), i++),
                        (l.figures[t] = e.attr("href")));
                    } catch (e) {}
                });
            }
            n.resolve(l);
          });
      });
    } catch (e) {
      n.reject(l);
    }
    return n.promise();
  },
  getDetails: function () {
    var t = {};
    try {
      if (CWParser_informaworld.isPbPubPage()) {
        "undefined" != typeof CWDataCenter
          ? (n = CWDataCenter.pubSelected)
          : "undefined" != typeof CWDataCenterClass &&
            (n = CWDataCenterClass.getInstance().pubSelected);
        var e = CwZ("body");
        if (
          ((t.title =
            e
              .find(
                ".literatumPublicationTitle h1 span.NLM_article-title.hlFld-title"
              )
              .text() ||
            e.find(".literatumPublicationTitle h1 span").text() ||
            e.find(".literatumPublicationTitle h1").text() ||
            Base64.decode(n.title)),
          (t.title = t.title.trim()),
          (t.authors = n.authors.replace(/;/g, ",")),
          n.listingPage)
        )
          t.title = Base64.decode(n.title);
        else {
          var a = document.domain.replace(/[\.-]/g, "");
          if (/cogentoa/.test(a))
            (t.abs = CwZ("#abstract").next().text()),
              (t.keywords = "<ul class='keywords'>"),
              CwZ(".articleKeywords li").each(function () {
                t.keywords +=
                  "<li>" +
                  CwZ(this).find("a").parent().html().trim() +
                  ",</li>";
              }),
              (t.keywords += "</ul>"),
              (t.keywords = CwZ(t.keywords.replace(/(.*),(.*)$/, "$1$2")));
          else {
            if (
              0 != CwZ(".abstractKeywords").find(".hlFld-KeywordText a").length
            ) {
              var i = !(t.keywords = "<ul class='keywords'>");
              CwZ(".abstractKeywords .hlFld-KeywordText")
                .contents()
                .each(function (e) {
                  (3 === this.nodeType || CwZ(this).is("b")) &&
                    (i = !!CwZ(this)
                      .text()
                      .match(/key\s?word/gi)),
                    CwZ(this).is("a") &&
                      i &&
                      (CwZ(this).attr("target", "_blank"),
                      (t.keywords += "<li>" + CwZ(this).prop("outerHTML")),
                      CwZ(this).next().hasClass("comma") &&
                        (t.keywords += ",&nbsp;"),
                      (t.keywords += "</li>"));
                }),
                (t.keywords += "</ul>"),
                (t.keywords =
                  0 < CwZ(t.keywords).find("li").length
                    ? CwZ(t.keywords)
                    : null);
            }
            0 < CwZ(".abstractSection").find(".MathJax").length ||
            0 < CwZ(".abstractSection").find(".MathJax_Preview").length
              ? (t.abs = Utility.removeMathJaxFromText(
                  CwZ(".abstractSection").not(".summary-title")
                ))
              : (t.abs = CwZ(".abstractSection")
                  .find('p:not(".summary-title")')
                  .map(function () {
                    return CwZ(this).text();
                  })
                  .get()
                  .join("<br><br>"));
          }
        }
      } else {
        var n;
        if (
          ("undefined" != typeof CWDataCenter
            ? (n = CWDataCenter.pubSelected)
            : "undefined" != typeof CWDataCenterClass &&
              (n = CWDataCenterClass.getInstance().pubSelected),
          (t.title = CwZ(".description h1").text() || Base64.decode(n.title)),
          (t.authors = n.authors.replace(/;/g, ",")),
          n.listingPage)
        )
          t.title = Base64.decode(n.title);
        else {
          a = document.domain.replace(/[\.-]/g, "");
          if (/cogentoa/.test(a))
            (t.abs = CwZ("#abstract").next().text()),
              (t.keywords = "<ul class='keywords'>"),
              CwZ(".articleKeywords li").each(function () {
                CwZ(this).find("a").attr("target", "_blank"),
                  (t.keywords +=
                    "<li>" +
                    CwZ(this).find("a").parent().html().trim() +
                    ",</li>");
              }),
              (t.keywords += "</ul>"),
              (t.keywords = CwZ(t.keywords.replace(/(.*),(.*)$/, "$1$2")));
          else {
            var r = CwZ(".abstract .bd .gutter");
            (t.abs = r.find(".paragraph").text()),
              (t.keywords = r.find(".keywords").clone()),
              t.keywords.find("a").each(function (e) {
                CwZ(this).attr("target", "_blank");
              });
          }
        }
      }
    } catch (e) {}
    return t;
  },
  insertRelatedPublications: function (e, t) {
    var a = CwZ(e),
      i = CwZ(t),
      n = "",
      r = "";
    if (
      -1 === e.indexOf("no-result-cw") &&
      -1 === e.indexOf("no-result-cw") &&
      (a.each(function () {
        var e = CwZ(this);
        CwZ(e.find("a")[0]).attr("href", e.find(".viewArticle").attr("href")),
          CwZ(e.find("a")[0]).attr("target", "_blank");
        var t = e.find(".year").text();
        t.match(/(18|19|20)\d{2}/g) &&
          e.find(".year").text(t.match(/(18|19|20)\d{2}/g)[0]);
        e.find(".title").text().length;
        n += "<li>" + e.html() + "</li>";
      }),
      i.each(function (e) {
        var t = CwZ(this);
        CwZ(t.find("a")[0]).attr("href", t.find(".viewArticle").attr("href")),
          CwZ(t.find("a")[0]).attr("target", "_blank");
        var a = t.find(".year").text();
        a.match(/(18|19|20)\d{2}/g) &&
          t.find(".year").text(a.match(/(18|19|20)\d{2}/g)[0]);
        t.find(".title").text().length;
        r += "<li>" + t.html() + "</li>";
      }),
      0 < a.length || 0 < i.length)
    ) {
      var d =
        '<div class="hlFld-Related cw-rec-wrapper"><h2>We Recommend</h2><div class="cw-list-column"><ul data-attr="cw-leftPanel">' +
        n +
        '</ul><ul data-attr="cw-rightPanel">' +
        r +
        '</ul><div class="cw-rec-footer"><span>Powered by</span><i class="cw-rec-logo"></i></div></div></div>';
      CwZ(".article").append(d),
        CwZ(".cw-rec-wrapper")
          .find("h3.title")
          .each(function () {
            var e = CwZ(CwZ(this)[0]),
              t = parseInt(e.css("line-height").replace("px", ""));
            e.height() > 2 * t && e.height(2 * t), e.dotdotdot();
          }),
        CWDataCenterClass.getInstance().postToTracker("recPubsRendered"),
        CwZ(".cw-list-column ul li>a")
          .off("click")
          .on("click", function (e) {
            var t = CwZ(this).attr("source");
            t && CWDataCenterClass.getInstance().postToTracker(t);
          }),
        CwZ(document).on("scroll", function () {
          if (!CWPDFReader.recommendedViewed)
            try {
              var e = CwZ(window).height();
              CwZ(".cw-rec-wrapper")[0].getClientRects()[0].top < e &&
                ((CWPDFReader.recommendedViewed = !0),
                CWDataCenterClass.getInstance().postToTracker("recPubsViewed"));
            } catch (e) {}
        });
    }
  },
};
