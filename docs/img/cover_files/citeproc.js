var CSL = {
  PROCESSOR_VERSION: "1.1.177",
  CONDITION_LEVEL_TOP: 1,
  CONDITION_LEVEL_BOTTOM: 2,
  PLAIN_HYPHEN_REGEX: /(?:[^\\]-|\u2013)/,
  LOCATOR_LABELS_REGEXP: new RegExp(
    "^((art|ch|subch|col|fig|l|n|no|op|p|pp|para|subpara|pt|r|sec|subsec|sv|sch|tit|vrs|vol)\\.)\\s+(.*)"
  ),
  STATUTE_SUBDIV_GROUPED_REGEX:
    /((?:^| )(?:art|bk|ch|subch|col|fig|fol|l|n|no|op|p|pp|para|subpara|pt|r|sec|subsec|sv|sch|tit|vrs|vol)\. *)/g,
  STATUTE_SUBDIV_PLAIN_REGEX:
    /(?:(?:^| )(?:art|bk|ch|subch|col|fig|fol|l|n|no|op|p|pp|para|subpara|pt|r|sec|subsec|sv|sch|tit|vrs|vol)\. *)/,
  STATUTE_SUBDIV_STRINGS: {
    "art.": "article",
    "bk.": "book",
    "ch.": "chapter",
    "subch.": "subchapter",
    "p.": "page",
    "pp.": "page",
    "para.": "paragraph",
    "subpara.": "subparagraph",
    "pt.": "part",
    "r.": "rule",
    "sec.": "section",
    "subsec.": "subsection",
    "sch.": "schedule",
    "tit.": "title",
    "col.": "column",
    "fig.": "figure",
    "fol.": "folio",
    "l.": "line",
    "n.": "note",
    "no.": "issue",
    "op.": "opus",
    "sv.": "sub-verbo",
    "vrs.": "verse",
    "vol.": "volume",
  },
  STATUTE_SUBDIV_STRINGS_REVERSE: {
    article: "art.",
    book: "bk.",
    chapter: "ch.",
    subchapter: "subch.",
    page: "p.",
    paragraph: "para.",
    subparagraph: "subpara.",
    part: "pt.",
    rule: "r.",
    section: "sec.",
    subsection: "subsec.",
    schedule: "sch.",
    title: "tit.",
    column: "col.",
    figure: "fig.",
    folio: "fol.",
    line: "l.",
    note: "n.",
    issue: "no.",
    opus: "op.",
    "sub-verbo": "sv.",
    "sub verbo": "sv.",
    verse: "vrs.",
    volume: "vol.",
  },
  LOCATOR_LABELS_MAP: {
    art: "article",
    bk: "book",
    ch: "chapter",
    subch: "subchapter",
    col: "column",
    fig: "figure",
    fol: "folio",
    l: "line",
    n: "note",
    no: "issue",
    op: "opus",
    p: "page",
    pp: "page",
    para: "paragraph",
    subpara: "subparagraph",
    pt: "part",
    r: "rule",
    sec: "section",
    subsec: "subsection",
    sv: "sub-verbo",
    sch: "schedule",
    tit: "title",
    vrs: "verse",
    vol: "volume",
  },
  MODULE_MACROS: {
    "juris-pretitle": !0,
    "juris-title": !0,
    "juris-pretitle-short": !0,
    "juris-title-short": !0,
    "juris-main": !0,
    "juris-main-short": !0,
    "juris-tail": !0,
    "juris-tail-short": !0,
    "juris-locator": !0,
  },
  MODULE_TYPES: {
    legal_case: !0,
    legislation: !0,
    bill: !0,
    hearing: !0,
    gazette: !0,
    report: !0,
    regulation: !0,
    standard: !0,
  },
  NestedBraces: [
    ["(", "["],
    [")", "]"],
  ],
  checkNestedBrace: function (t) {
    "note" === t.opt.xclass
      ? ((this.depth = 0),
        (this.update = function (t) {
          t = t || "";
          for (var e = t.split(/([\(\)])/), i = 1, s = e.length; i < s; i += 2)
            "(" === e[i]
              ? (1 == this.depth % 2 && (e[i] = "["), (this.depth += 1))
              : ")" === e[i] &&
                (0 == this.depth % 2 && (e[i] = "]"), (this.depth -= 1));
          var r = e.join("");
          return r;
        }))
      : (this.update = function (t) {
          return t;
        });
  },
  MULTI_FIELDS: [
    "event",
    "publisher",
    "publisher-place",
    "event-place",
    "title",
    "container-title",
    "collection-title",
    "authority",
    "genre",
    "title-short",
    "medium",
    "jurisdiction",
    "archive",
    "archive-place",
  ],
  LangPrefsMap: {
    title: "titles",
    "title-short": "titles",
    event: "titles",
    genre: "titles",
    medium: "titles",
    "container-title": "journals",
    "collection-title": "journals",
    archive: "journals",
    publisher: "publishers",
    authority: "publishers",
    "publisher-place": "places",
    "event-place": "places",
    "archive-place": "places",
    jurisdiction: "places",
    number: "number",
    edition: "number",
    issue: "number",
    volume: "number",
  },
  AbbreviationSegments: function () {
    (this["container-title"] = {}),
      (this["collection-title"] = {}),
      (this["institution-entire"] = {}),
      (this["institution-part"] = {}),
      (this.nickname = {}),
      (this.number = {}),
      (this.title = {}),
      (this.place = {}),
      (this.hereinafter = {}),
      (this.classic = {}),
      (this["container-phrase"] = {}),
      (this["title-phrase"] = {});
  },
  FIELD_CATEGORY_REMAP: {
    title: "title",
    "container-title": "container-title",
    "collection-title": "collection-title",
    number: "number",
    place: "place",
    archive: "collection-title",
    "title-short": "title",
    genre: "title",
    event: "title",
    medium: "title",
    "archive-place": "place",
    "publisher-place": "place",
    "event-place": "place",
    jurisdiction: "place",
    "language-name": "place",
    "language-name-original": "place",
    "call-number": "number",
    "chapter-number": "number",
    "collection-number": "number",
    edition: "number",
    page: "number",
    issue: "number",
    locator: "number",
    "number-of-pages": "number",
    "number-of-volumes": "number",
    volume: "number",
    "citation-number": "number",
    publisher: "institution-part",
  },
  parseLocator: function (t) {
    if (
      this.opt.development_extensions.locator_date_and_revision &&
      t.locator
    ) {
      t.locator = "" + t.locator;
      var e = t.locator.indexOf("|");
      if (-1 < e) {
        var i = t.locator;
        (t.locator = i.slice(0, e)), (i = i.slice(e + 1));
        var s = i.match(/^([0-9]{4}-[0-9]{2}-[0-9]{2}).*/);
        s &&
          ((t["locator-date"] = this.fun.dateparser.parseDateToObject(s[1])),
          (i = i.slice(s[1].length))),
          (t["locator-extra"] = i.replace(/^\s+/, "").replace(/\s+$/, ""));
      }
    }
    return t.locator && (t.locator = ("" + t.locator).replace(/\s+$/, "")), t;
  },
  normalizeLocaleStr: function (t) {
    if (t) {
      var e = t.split("-");
      return (
        (e[0] = e[0].toLowerCase()),
        e[1] && (e[1] = e[1].toUpperCase()),
        e.join("-")
      );
    }
  },
  parseNoteFieldHacks: function (t, e, i) {
    if ("string" == typeof t.note) {
      for (
        var s = [], r = t.note.split("\n"), a = 0, n = r.length;
        a < n;
        a++
      ) {
        var o = r[a],
          l = ((s = []), o.match(CSL.NOTE_FIELDS_REGEXP));
        if (l) {
          for (
            var u = o.split(CSL.NOTE_FIELDS_REGEXP), h = 0, p = u.length - 1;
            h < p;
            h++
          )
            s.push(u[h]), s.push(l[h]);
          s.push(u[u.length - 1]);
          for (
            h = 1, p = s.length;
            h < p &&
            (!s[h - 1].trim() ||
              !(0 < a || 1 < h) ||
              s[h - 1].match(CSL.NOTE_FIELD_REGEXP));
            h += 2
          )
            s[h] = "\n" + s[h].slice(2, -1).trim() + "\n";
          r[a] = s.join("");
        }
      }
      r = r.join("\n").split("\n");
      var c = 0,
        m = {};
      for (a = 0, n = r.length; a < n; a++) {
        o = r[a];
        var f = o.match(CSL.NOTE_FIELD_REGEXP);
        if (o.trim()) {
          if (!f) {
            if (0 === a) continue;
            c = a;
            break;
          }
          var d = f[1],
            g = f[2].replace(/^\s+/, "").replace(/\s+$/, "");
          if ("type" === d) (t.type = g), (r[a] = "");
          else if (-1 < CSL.DATE_VARIABLES.indexOf(d))
            i &&
              ((t[d] = { raw: g }),
              (!e ||
                (e[d] &&
                  g.match(/^[0-9]{4}(?:-[0-9]{1,2}(?:-[0-9]{1,2})*)*$/))) &&
                (r[a] = ""));
          else if (!t[d]) {
            if (-1 < CSL.NAME_VARIABLES.indexOf(d)) {
              m[d] || (m[d] = []);
              var b = g.split(/\s*\|\|\s*/);
              if (1 === b.length) m[d].push({ literal: b[0] });
              else if (2 === b.length) {
                var _ = { family: b[0], given: b[1] };
                CSL.parseParticles(_), m[d].push(_);
              }
            } else t[d] = g;
            (e && !e[d]) || (r[a] = "");
          }
        }
      }
      for (var d in m) t[d] = m[d];
      if (e) {
        r[c].trim() && (r[c] = "\n" + r[c]);
        for (a = c - 1; -1 < a; a--)
          r[a].trim() || (r = r.slice(0, a).concat(r.slice(a + 1)));
      }
      t.note = r.join("\n").trim();
    }
  },
  GENDERS: ["masculine", "feminine"],
  ERROR_NO_RENDERED_FORM: 1,
  PREVIEW: "Just for laughs.",
  ASSUME_ALL_ITEMS_REGISTERED: 2,
  START: 0,
  END: 1,
  SINGLETON: 2,
  SEEN: 6,
  SUCCESSOR: 3,
  SUCCESSOR_OF_SUCCESSOR: 4,
  SUPPRESS: 5,
  SINGULAR: 0,
  PLURAL: 1,
  LITERAL: !0,
  BEFORE: 1,
  AFTER: 2,
  DESCENDING: 1,
  ASCENDING: 2,
  ONLY_FIRST: 1,
  ALWAYS: 2,
  ONLY_LAST: 3,
  FINISH: 1,
  POSITION_FIRST: 0,
  POSITION_SUBSEQUENT: 1,
  POSITION_IBID: 2,
  POSITION_IBID_WITH_LOCATOR: 3,
  MARK_TRAILING_NAMES: !0,
  POSITION_TEST_VARS: ["position", "first-reference-note-number", "near-note"],
  AREAS: ["citation", "citation_sort", "bibliography", "bibliography_sort"],
  CITE_FIELDS: ["first-reference-note-number", "locator", "locator-extra"],
  MINIMAL_NAME_FIELDS: ["literal", "family"],
  SWAPPING_PUNCTUATION: [".", "!", "?", ":", ","],
  TERMINAL_PUNCTUATION: [":", ".", ";", "!", "?", " "],
  NONE: 0,
  NUMERIC: 1,
  POSITION: 2,
  COLLAPSE_VALUES: ["citation-number", "year", "year-suffix"],
  DATE_PARTS: ["year", "month", "day"],
  DATE_PARTS_ALL: ["year", "month", "day", "season"],
  DATE_PARTS_INTERNAL: [
    "year",
    "month",
    "day",
    "year_end",
    "month_end",
    "day_end",
  ],
  NAME_PARTS: [
    "non-dropping-particle",
    "family",
    "given",
    "dropping-particle",
    "suffix",
    "literal",
  ],
  DECORABLE_NAME_PARTS: ["given", "family", "suffix"],
  DISAMBIGUATE_OPTIONS: [
    "disambiguate-add-names",
    "disambiguate-add-givenname",
    "disambiguate-add-year-suffix",
  ],
  GIVENNAME_DISAMBIGUATION_RULES: [
    "all-names",
    "all-names-with-initials",
    "primary-name",
    "primary-name-with-initials",
    "by-cite",
  ],
  NAME_ATTRIBUTES: [
    "and",
    "delimiter-precedes-last",
    "delimiter-precedes-et-al",
    "initialize-with",
    "initialize",
    "name-as-sort-order",
    "sort-separator",
    "et-al-min",
    "et-al-use-first",
    "et-al-subsequent-min",
    "et-al-subsequent-use-first",
    "form",
    "prefix",
    "suffix",
    "delimiter",
  ],
  PARALLEL_MATCH_VARS: ["container-title"],
  PARALLEL_TYPES: [
    "bill",
    "gazette",
    "regulation",
    "legislation",
    "legal_case",
    "treaty",
    "article-magazine",
    "article-journal",
  ],
  PARALLEL_COLLAPSING_MID_VARSET: [
    "volume",
    "issue",
    "container-title",
    "section",
    "collection-number",
  ],
  LOOSE: 0,
  STRICT: 1,
  TOLERANT: 2,
  PREFIX_PUNCTUATION: /[.;:]\s*$/,
  SUFFIX_PUNCTUATION: /^\s*[.;:,\(\)]/,
  NUMBER_REGEXP: /(?:^\d+|\d+$)/,
  NAME_INITIAL_REGEXP:
    /^([A-Z\u0590-\u05ff\u00c0-\u017f\u0400-\u042f\u0600-\u06ff\u0370\u0372\u0376\u0386\u0388-\u03ab\u03e2\u03e4\u03e6\u03e8\u03ea\u03ec\u03ee\u03f4\u03f7\u03fd-\u03ff])([a-zA-Z\u00c0-\u017f\u0400-\u052f\u0600-\u06ff\u0370-\u03ff\u1f00-\u1fff]*|)/,
  ROMANESQUE_REGEXP:
    /[-0-9a-zA-Z\u0590-\u05d4\u05d6-\u05ff\u0080-\u017f\u0400-\u052f\u0370-\u03ff\u1f00-\u1fff\u0600-\u06ff\u200c\u200d\u200e\u0218\u0219\u021a\u021b\u202a-\u202e]/,
  ROMANESQUE_NOT_REGEXP:
    /[^a-zA-Z\u0590-\u05ff\u00c0-\u017f\u0400-\u052f\u0370-\u03ff\u1f00-\u1fff\u0600-\u06ff\u200c\u200d\u200e\u0218\u0219\u021a\u021b\u202a-\u202e]/g,
  STARTSWITH_ROMANESQUE_REGEXP:
    /^[&a-zA-Z\u0590-\u05d4\u05d6-\u05ff\u00c0-\u017f\u0400-\u052f\u0370-\u03ff\u1f00-\u1fff\u0600-\u06ff\u200c\u200d\u200e\u0218\u0219\u021a\u021b\u202a-\u202e]/,
  ENDSWITH_ROMANESQUE_REGEXP:
    /[.;:&a-zA-Z\u0590-\u05d4\u05d6-\u05ff\u00c0-\u017f\u0400-\u052f\u0370-\u03ff\u1f00-\u1fff\u0600-\u06ff\u200c\u200d\u200e\u0218\u0219\u021a\u021b\u202a-\u202e]$/,
  ALL_ROMANESQUE_REGEXP:
    /^[a-zA-Z\u0590-\u05ff\u00c0-\u017f\u0400-\u052f\u0370-\u03ff\u1f00-\u1fff\u0600-\u06ff\u200c\u200d\u200e\u0218\u0219\u021a\u021b\u202a-\u202e]+$/,
  VIETNAMESE_SPECIALS:
    /[\u00c0-\u00c3\u00c8-\u00ca\u00cc\u00cd\u00d2-\u00d5\u00d9\u00da\u00dd\u00e0-\u00e3\u00e8-\u00ea\u00ec\u00ed\u00f2-\u00f5\u00f9\u00fa\u00fd\u0101\u0103\u0110\u0111\u0128\u0129\u0168\u0169\u01a0\u01a1\u01af\u01b0\u1ea0-\u1ef9]/,
  VIETNAMESE_NAMES:
    /^(?:(?:[.AaBbCcDdEeGgHhIiKkLlMmNnOoPpQqRrSsTtUuVvXxYy \u00c0-\u00c3\u00c8-\u00ca\u00cc\u00cd\u00d2-\u00d5\u00d9\u00da\u00dd\u00e0-\u00e3\u00e8-\u00ea\u00ec\u00ed\u00f2-\u00f5\u00f9\u00fa\u00fd\u0101\u0103\u0110\u0111\u0128\u0129\u0168\u0169\u01a0\u01a1\u01af\u01b0\u1ea0-\u1ef9]{2,6})(\s+|$))+$/,
  NOTE_FIELDS_REGEXP: /\{:(?:[\-_a-z]+|[A-Z]+):[^\}]+\}/g,
  NOTE_FIELD_REGEXP: /^([\-_a-z]+|[A-Z]+):\s*([^\}]+)$/,
  PARTICLE_GIVEN_REGEXP: /^([^ ]+(?:\u02bb |\u2019 | |\' ) *)(.+)$/,
  PARTICLE_FAMILY_REGEXP: /^([^ ]+(?:\-|\u02bb|\u2019| |\') *)(.+)$/,
  DISPLAY_CLASSES: ["block", "left-margin", "right-inline", "indent"],
  NAME_VARIABLES: [
    "author",
    "editor",
    "translator",
    "contributor",
    "collection-editor",
    "composer",
    "container-author",
    "director",
    "editorial-director",
    "interviewer",
    "original-author",
    "recipient",
  ],
  NUMERIC_VARIABLES: [
    "call-number",
    "chapter-number",
    "collection-number",
    "edition",
    "page",
    "issue",
    "locator",
    "number",
    "number-of-pages",
    "number-of-volumes",
    "volume",
    "citation-number",
  ],
  DATE_VARIABLES: [
    "locator-date",
    "issued",
    "event-date",
    "accessed",
    "container",
    "original-date",
    "publication-date",
    "original-date",
    "available-date",
    "submitted",
  ],
  TITLE_FIELD_SPLITS: function (t) {
    for (
      var e = ["title", "short", "main", "sub"], i = {}, s = 0, r = e.length;
      s < r;
      s++
    )
      i[e[s]] = t + "title" + ("title" === e[s] ? "" : "-" + e[s]);
    return i;
  },
  TAG_USEALL: function (t) {
    var e, i, s, r;
    for (e = [""], i = t.indexOf("<"), s = t.indexOf(">"); -1 < i && -1 < s; )
      (r = s < i ? i + 1 : s + 1),
        (t =
          (i < s && -1 === t.slice(i + 1, s).indexOf("<")
            ? ((e[e.length - 1] += t.slice(0, i)),
              e.push(t.slice(i, s + 1)),
              e.push(""))
            : (e[e.length - 1] += t.slice(0, s + 1)),
          t.slice(r))),
        (i = t.indexOf("<")),
        (s = t.indexOf(">"));
    return (e[e.length - 1] += t), e;
  },
  demoteNoiseWords: function (t, e, i) {
    var s = t.locale[t.opt.lang].opts["leading-noise-words"];
    if (e && i) {
      (e = e.split(/\s+/)), e.reverse();
      for (
        var r = [], a = e.length - 1;
        -1 < a && -1 < s.indexOf(e[a].toLowerCase());
        a += -1
      )
        r.push(e.pop());
      e.reverse();
      var n = e.join(" "),
        o = r.join(" ");
      "drop" !== i && o ? "demote" === i && (e = [n, o].join(", ")) : (e = n);
    }
    return e;
  },
  extractTitleAndSubtitle: function (t) {
    for (var e = ["", "container-"], i = 0, s = e.length; i < s; i++) {
      var r = e[i],
        a = CSL.TITLE_FIELD_SPLITS(r),
        n = [!1];
      if (t.multi) for (var o in t.multi._keys[a.short]) n.push(o);
      var l = 0;
      for (n.length; l < s; l++) {
        o = n[l];
        var u = {};
        if (
          (o
            ? (t.multi._keys[a.title] &&
                (u[a.title] = t.multi._keys[a.title][o]),
              t.multi._keys[a.short] &&
                (u[a.short] = t.multi._keys[a.short][o]))
            : ((u[a.title] = t[a.title]), (u[a.short] = t[a.short])),
          (u[a.main] = u[a.title]),
          (u[a.sub] = !1),
          u[a.title] && u[a.short])
        ) {
          var h = u[a.short],
            p = h.length;
          u[a.title].slice(0, p) === h &&
            u[a.title].slice(p).match(/^\s*:/) &&
            ((u[a.main] = u[a.title].slice(0, p).replace(/\s+$/, "")),
            (u[a.sub] = u[a.title].slice(p).replace(/^\s*:\s*/, "")));
        }
        if (o)
          for (var c in u)
            t.multi._keys[c] || (t.multi._keys[c] = {}),
              (t.multi._keys[c][o] = u[c]);
        else for (var c in u) t[c] = u[c];
      }
    }
  },
  titlecaseSentenceOrNormal: function (t, e, i, s, r) {
    var a = CSL.TITLE_FIELD_SPLITS(i),
      n = {};
    if (
      (s && e.multi
        ? (e.multi._keys[a.title] && (n[a.title] = e.multi._keys[a.title][s]),
          e.multi._keys[a.main] && (n[a.main] = e.multi._keys[a.main][s]),
          e.multi._keys[a.sub] && (n[a.sub] = e.multi._keys[a.sub][s]))
        : ((n[a.title] = e[a.title]),
          (n[a.main] = e[a.main]),
          (n[a.sub] = e[a.sub])),
      n[a.main] && n[a.sub])
    ) {
      var o = n[a.main],
        l = n[a.sub];
      return (
        (l = r
          ? ((o = CSL.Output.Formatters.sentence(t, o)),
            CSL.Output.Formatters.sentence(t, l))
          : CSL.Output.Formatters["capitalize-first"](t, l)),
        [o, l].join(n[a.title].slice(o.length, -1 * l.length))
      );
    }
    return r ? CSL.Output.Formatters.sentence(t, n[a.title]) : n[a.title];
  },
  getSafeEscape: function (s) {
    if (-1 < ["bibliography", "citation"].indexOf(s.tmp.area)) {
      var r = [];
      return (
        s.opt.development_extensions.thin_non_breaking_space_html_hack &&
          "html" === s.opt.mode &&
          r.push(function (t) {
            return t.replace(
              /\u202f/g,
              '<span style="white-space:nowrap">&thinsp;</span>'
            );
          }),
        r.length
          ? function (t) {
              for (var e = 0, i = r.length; e < i; e += 1) t = r[e](t);
              return CSL.Output.Formats[s.opt.mode].text_escape(t);
            }
          : CSL.Output.Formats[s.opt.mode].text_escape
      );
    }
    return function (t) {
      return t;
    };
  },
  SKIP_WORDS: [
    "about",
    "above",
    "across",
    "afore",
    "after",
    "against",
    "along",
    "alongside",
    "amid",
    "amidst",
    "among",
    "amongst",
    "anenst",
    "apropos",
    "apud",
    "around",
    "as",
    "aside",
    "astride",
    "at",
    "athwart",
    "atop",
    "barring",
    "before",
    "behind",
    "below",
    "beneath",
    "beside",
    "besides",
    "between",
    "beyond",
    "but",
    "by",
    "circa",
    "despite",
    "down",
    "during",
    "except",
    "for",
    "forenenst",
    "from",
    "given",
    "in",
    "inside",
    "into",
    "lest",
    "like",
    "modulo",
    "near",
    "next",
    "notwithstanding",
    "of",
    "off",
    "on",
    "onto",
    "out",
    "over",
    "per",
    "plus",
    "pro",
    "qua",
    "sans",
    "since",
    "than",
    "through",
    " thru",
    "throughout",
    "thruout",
    "till",
    "to",
    "toward",
    "towards",
    "under",
    "underneath",
    "until",
    "unto",
    "up",
    "upon",
    "versus",
    "vs.",
    "v.",
    "vs",
    "v",
    "via",
    "vis-à-vis",
    "with",
    "within",
    "without",
    "according to",
    "ahead of",
    "apart from",
    "as for",
    "as of",
    "as per",
    "as regards",
    "aside from",
    "back to",
    "because of",
    "close to",
    "due to",
    "except for",
    "far from",
    "inside of",
    "instead of",
    "near to",
    "next to",
    "on to",
    "out from",
    "out of",
    "outside of",
    "prior to",
    "pursuant to",
    "rather than",
    "regardless of",
    "such as",
    "that of",
    "up to",
    "where as",
    "or",
    "yet",
    "so",
    "for",
    "and",
    "nor",
    "a",
    "an",
    "the",
    "de",
    "d'",
    "von",
    "van",
    "c",
    "et",
    "ca",
  ],
  FORMAT_KEY_SEQUENCE: [
    "@strip-periods",
    "@font-style",
    "@font-variant",
    "@font-weight",
    "@text-decoration",
    "@vertical-align",
    "@quotes",
  ],
  INSTITUTION_KEYS: [
    "font-style",
    "font-variant",
    "font-weight",
    "text-decoration",
    "text-case",
  ],
  SUFFIX_CHARS: "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z",
  ROMAN_NUMERALS: [
    ["", "i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix"],
    ["", "x", "xx", "xxx", "xl", "l", "lx", "lxx", "lxxx", "xc"],
    ["", "c", "cc", "ccc", "cd", "d", "dc", "dcc", "dccc", "cm"],
    ["", "m", "mm", "mmm", "mmmm", "mmmmm"],
  ],
  CREATORS: [
    "author",
    "editor",
    "contributor",
    "translator",
    "recipient",
    "interviewer",
    "composer",
    "original-author",
    "container-author",
    "collection-editor",
  ],
  LANGS: {
    "af-ZA": "Afrikaans",
    ar: "Arabic",
    "bg-BG": "Bulgarian",
    "ca-AD": "Catalan",
    "cs-CZ": "Czech",
    "da-DK": "Danish",
    "de-AT": "Austrian",
    "de-CH": "German (CH)",
    "de-DE": "German (DE)",
    "el-GR": "Greek",
    "en-GB": "English (GB)",
    "en-US": "English (US)",
    "es-ES": "Spanish",
    "et-EE": "Estonian",
    eu: "European",
    "fa-IR": "Persian",
    "fi-FI": "Finnish",
    "fr-CA": "French (CA)",
    "fr-FR": "French (FR)",
    "he-IL": "Hebrew",
    "hr-HR": "Croatian",
    "hu-HU": "Hungarian",
    "is-IS": "Icelandic",
    "it-IT": "Italian",
    "ja-JP": "Japanese",
    "km-KH": "Khmer",
    "ko-KR": "Korean",
    "lt-LT": "Lithuanian",
    "lv-LV": "Latvian",
    "mn-MN": "Mongolian",
    "nb-NO": "Norwegian (Bokmål)",
    "nl-NL": "Dutch",
    "nn-NO": "Norwegian (Nynorsk)",
    "pl-PL": "Polish",
    "pt-BR": "Portuguese (BR)",
    "pt-PT": "Portuguese (PT)",
    "ro-RO": "Romanian",
    "ru-RU": "Russian",
    "sk-SK": "Slovak",
    "sl-SI": "Slovenian",
    "sr-RS": "Serbian",
    "sv-SE": "Swedish",
    "th-TH": "Thai",
    "tr-TR": "Turkish",
    "uk-UA": "Ukranian",
    "vi-VN": "Vietnamese",
    "zh-CN": "Chinese (CN)",
    "zh-TW": "Chinese (TW)",
  },
  LANG_BASES: {
    af: "af_ZA",
    ar: "ar",
    bg: "bg_BG",
    ca: "ca_AD",
    cs: "cs_CZ",
    da: "da_DK",
    de: "de_DE",
    el: "el_GR",
    en: "en_US",
    es: "es_ES",
    et: "et_EE",
    eu: "eu",
    fa: "fa_IR",
    fi: "fi_FI",
    fr: "fr_FR",
    he: "he_IL",
    hr: "hr-HR",
    hu: "hu_HU",
    is: "is_IS",
    it: "it_IT",
    ja: "ja_JP",
    km: "km_KH",
    ko: "ko_KR",
    lt: "lt_LT",
    lv: "lv-LV",
    mn: "mn_MN",
    nb: "nb_NO",
    nl: "nl_NL",
    nn: "nn-NO",
    pl: "pl_PL",
    pt: "pt_PT",
    ro: "ro_RO",
    ru: "ru_RU",
    sk: "sk_SK",
    sl: "sl_SI",
    sr: "sr_RS",
    sv: "sv_SE",
    th: "th_TH",
    tr: "tr_TR",
    uk: "uk_UA",
    vi: "vi_VN",
    zh: "zh_CN",
  },
  SUPERSCRIPTS: {
    ª: "a",
    "²": "2",
    "³": "3",
    "¹": "1",
    º: "o",
    ʰ: "h",
    ʱ: "ɦ",
    ʲ: "j",
    ʳ: "r",
    ʴ: "ɹ",
    ʵ: "ɻ",
    ʶ: "ʁ",
    ʷ: "w",
    ʸ: "y",
    ˠ: "ɣ",
    ˡ: "l",
    ˢ: "s",
    ˣ: "x",
    ˤ: "ʕ",
    ᴬ: "A",
    ᴭ: "Æ",
    ᴮ: "B",
    ᴰ: "D",
    ᴱ: "E",
    ᴲ: "Ǝ",
    ᴳ: "G",
    ᴴ: "H",
    ᴵ: "I",
    ᴶ: "J",
    ᴷ: "K",
    ᴸ: "L",
    ᴹ: "M",
    ᴺ: "N",
    ᴼ: "O",
    ᴽ: "Ȣ",
    ᴾ: "P",
    ᴿ: "R",
    ᵀ: "T",
    ᵁ: "U",
    ᵂ: "W",
    ᵃ: "a",
    ᵄ: "ɐ",
    ᵅ: "ɑ",
    ᵆ: "ᴂ",
    ᵇ: "b",
    ᵈ: "d",
    ᵉ: "e",
    ᵊ: "ə",
    ᵋ: "ɛ",
    ᵌ: "ɜ",
    ᵍ: "g",
    ᵏ: "k",
    ᵐ: "m",
    ᵑ: "ŋ",
    ᵒ: "o",
    ᵓ: "ɔ",
    ᵔ: "ᴖ",
    ᵕ: "ᴗ",
    ᵖ: "p",
    ᵗ: "t",
    ᵘ: "u",
    ᵙ: "ᴝ",
    ᵚ: "ɯ",
    ᵛ: "v",
    ᵜ: "ᴥ",
    ᵝ: "β",
    ᵞ: "γ",
    ᵟ: "δ",
    ᵠ: "φ",
    ᵡ: "χ",
    "⁰": "0",
    ⁱ: "i",
    "⁴": "4",
    "⁵": "5",
    "⁶": "6",
    "⁷": "7",
    "⁸": "8",
    "⁹": "9",
    "⁺": "+",
    "⁻": "−",
    "⁼": "=",
    "⁽": "(",
    "⁾": ")",
    ⁿ: "n",
    "℠": "SM",
    "™": "TM",
    "㆒": "一",
    "㆓": "二",
    "㆔": "三",
    "㆕": "四",
    "㆖": "上",
    "㆗": "中",
    "㆘": "下",
    "㆙": "甲",
    "㆚": "乙",
    "㆛": "丙",
    "㆜": "丁",
    "㆝": "天",
    "㆞": "地",
    "㆟": "人",
    ˀ: "ʔ",
    ˁ: "ʕ",
    ۥ: "و",
    ۦ: "ي",
  },
  SUPERSCRIPTS_REGEXP: new RegExp(
    "[ª²³¹ºʰʱʲʳʴʵʶʷʸˠˡˢˣˤᴬᴭᴮᴰᴱᴲᴳᴴᴵᴶᴷᴸᴹᴺᴼᴽᴾᴿᵀᵁᵂᵃᵄᵅᵆᵇᵈᵉᵊᵋᵌᵍᵏᵐᵑᵒᵓᵔᵕᵖᵗᵘᵙᵚᵛᵜᵝᵞᵟᵠᵡ⁰ⁱ⁴⁵⁶⁷⁸⁹⁺⁻⁼⁽⁾ⁿ℠™㆒㆓㆔㆕㆖㆗㆘㆙㆚㆛㆜㆝㆞㆟ˀˁۥۦ]",
    "g"
  ),
  UPDATE_GROUP_CONTEXT_CONDITION: function (t, e, i) {
    if (t.tmp.group_context.tip.condition) {
      if (t.tmp.group_context.tip.condition.test) {
        var s;
        if ("empty-label" === t.tmp.group_context.tip.condition.test) s = !e;
        else if ("comma-safe" === t.tmp.group_context.tip.condition.test) {
          var r = !e,
            a = e.slice(0, 1).match(CSL.ALL_ROMANESQUE_REGEXP);
          t.tmp.just_did_number;
          s = !!r || !(!a || i);
        }
        (t.tmp.group_context.tip.force_suppress = !s),
          t.tmp.group_context.tip.condition.not &&
            (t.tmp.group_context.tip.force_suppress =
              !t.tmp.group_context.tip.force_suppress);
      }
    } else
      e.slice(-1).match(/[0-9]/)
        ? (t.tmp.just_did_number = !0)
        : (t.tmp.just_did_number = !1);
  },
  locale: {},
  locale_opts: {},
  locale_dates: {},
};
if (
  "undefined" != typeof require &&
  "undefined" != typeof module &&
  "exports" in module
) {
  var CSL_IS_NODEJS = !0;
  exports.CSL = CSL;
}
(CSL.TERMINAL_PUNCTUATION_REGEXP = new RegExp(
  "^([" + CSL.TERMINAL_PUNCTUATION.slice(0, -1).join("") + "])(.*)"
)),
  (CSL.CLOSURES = new RegExp(".*[\\]\\)]")),
  "undefined" == typeof console
    ? ((CSL.debug = function (t) {
        dump("CSL: " + t + "\n");
      }),
      (CSL.error = function (t) {
        dump("CSL error: " + t + "\n");
      }))
    : ((CSL.debug = function (t) {
        console.log("CSL: " + t);
      }),
      (CSL.error = function (t) {
        console.log("CSL error: " + t);
      })),
  (CSL.XmlJSON = function (t) {
    (this.dataObj = t),
      (this.institution = {
        name: "institution",
        attrs: {
          "institution-parts": "long",
          delimiter: ", ",
          "substitute-use-first": "1",
          "use-last": "1",
        },
        children: [
          { name: "institution-part", attrs: { name: "long" }, children: [] },
        ],
      });
  }),
  (CSL.XmlJSON.prototype.clean = function (t) {
    return t;
  }),
  (CSL.XmlJSON.prototype.getStyleId = function (t, e) {
    var i = "id";
    e && (i = "title");
    for (var s = "", r = t.children, a = 0, n = r.length; a < n; a++)
      if ("info" === r[a].name)
        for (var o = r[a].children, l = 0, u = o.length; l < u; l++)
          o[l].name === i && (s = o[l].children[0]);
    return s;
  }),
  (CSL.XmlJSON.prototype.children = function (t) {
    return !(!t || !t.children.length) && t.children.slice();
  }),
  (CSL.XmlJSON.prototype.nodename = function (t) {
    return t ? t.name : null;
  }),
  (CSL.XmlJSON.prototype.attributes = function (t) {
    var e = {};
    for (var i in t.attrs) e["@" + i] = t.attrs[i];
    return e;
  }),
  (CSL.XmlJSON.prototype.content = function (t) {
    var e = "";
    if (!t || !t.children) return e;
    for (var i = 0, s = t.children.length; i < s; i += 1)
      "string" == typeof t.children[i] && (e += t.children[i]);
    return e;
  }),
  (CSL.XmlJSON.prototype.namespace = {}),
  (CSL.XmlJSON.prototype.numberofnodes = function (t) {
    return t && "number" == typeof t.length ? t.length : 0;
  }),
  (CSL.XmlJSON.prototype.getAttributeValue = function (t, e, i) {
    var s = "";
    return (
      i && (e = i + ":" + e),
      t && t.attrs && (s = t.attrs[e] ? t.attrs[e] : ""),
      s
    );
  }),
  (CSL.XmlJSON.prototype.getNodeValue = function (t, e) {
    var i = "";
    if (e)
      for (var s = 0, r = t.children.length; s < r; s += 1)
        t.children[s].name === e &&
          (i = t.children[s].children.length ? t.children[s] : "");
    else t && (i = t);
    return (
      i &&
        i.children &&
        1 == i.children.length &&
        "string" == typeof i.children[0] &&
        (i = i.children[0]),
      i
    );
  }),
  (CSL.XmlJSON.prototype.setAttributeOnNodeIdentifiedByNameAttribute =
    function (t, e, i, s, r) {
      "@" === s.slice(0, 1) && (s = s.slice(1));
      for (var a = 0, n = t.children.length; a < n; a += 1)
        t.children[a].name === e &&
          t.children[a].attrs.name === i &&
          (t.children[a].attrs[s] = r);
    }),
  (CSL.XmlJSON.prototype.deleteNodeByNameAttribute = function (t, e) {
    var i, s;
    for (i = 0, s = t.children.length; i < s; i += 1)
      t.children[i] &&
        "string" != typeof t.children[i] &&
        t.children[i].attrs.name == e &&
        (t.children = t.children.slice(0, i).concat(t.children.slice(i + 1)));
  }),
  (CSL.XmlJSON.prototype.deleteAttribute = function (t, e) {
    void 0 !== t.attrs[e] && t.attrs.pop(e);
  }),
  (CSL.XmlJSON.prototype.setAttribute = function (t, e, i) {
    return (t.attrs[e] = i), !1;
  }),
  (CSL.XmlJSON.prototype.nodeCopy = function (t, e) {
    if (!e) e = {};
    if ("object" == typeof e && void 0 === e.length)
      for (var i in t)
        "string" == typeof t[i]
          ? (e[i] = t[i])
          : "object" == typeof t[i] &&
            (void 0 === t[i].length
              ? (e[i] = this.nodeCopy(t[i], {}))
              : (e[i] = this.nodeCopy(t[i], [])));
    else
      for (var s = 0, r = t.length; s < r; s += 1)
        "string" == typeof t[s]
          ? (e[s] = t[s])
          : (e[s] = this.nodeCopy(t[s], {}));
    return e;
  }),
  (CSL.XmlJSON.prototype.getNodesByName = function (t, e, i, s) {
    if (!s) s = [];
    if (!t || !t.children) return s;
    e === t.name && (i ? i === t.attrs.name && s.push(t) : s.push(t));
    for (var r = 0, a = t.children.length; r < a; r += 1)
      "object" == typeof t.children[r] &&
        this.getNodesByName(t.children[r], e, i, s);
    return s;
  }),
  (CSL.XmlJSON.prototype.nodeNameIs = function (t, e) {
    return void 0 !== t && e == t.name;
  }),
  (CSL.XmlJSON.prototype.makeXml = function (t) {
    return (
      "string" == typeof t &&
        (t =
          "<" === t.slice(0, 1)
            ? this.jsonStringWalker.walkToObject(t)
            : JSON.parse(t)),
      t
    );
  }),
  (CSL.XmlJSON.prototype.insertChildNodeAfter = function (t, e, i, s) {
    for (var r = 0, a = t.children.length; r < a; r += 1)
      if (e === t.children[r]) {
        t.children = t.children
          .slice(0, r)
          .concat([s])
          .concat(t.children.slice(r + 1));
        break;
      }
    return t;
  }),
  (CSL.XmlJSON.prototype.insertPublisherAndPlace = function (t) {
    if ("group" === t.name) {
      for (
        var e = !0,
          i = ["publisher", "publisher-place"],
          s = 0,
          r = t.children.length;
        s < r;
        s += 1
      ) {
        var a = i.indexOf(t.children[s].attrs.variable),
          n = "text" === t.children[s].name;
        if (
          !(n && -1 < a) ||
          t.children[s].attrs.prefix ||
          t.children[s].attrs.suffix
        ) {
          e = !1;
          break;
        }
        i = i.slice(0, a).concat(i.slice(a + 1));
      }
      e && !i.length && (t.attrs["has-publisher-and-publisher-place"] = !0);
    }
    for (s = 0, r = t.children.length; s < r; s += 1)
      "object" == typeof t.children[s] &&
        this.insertPublisherAndPlace(t.children[s]);
  }),
  (CSL.XmlJSON.prototype.isChildOfSubstitute = function (t) {
    if (0 < t.length) {
      var e = t.slice(),
        i = e.pop();
      return "substitute" === i || this.isChildOfSubstitute(e);
    }
    return !1;
  }),
  (CSL.XmlJSON.prototype.addMissingNameNodes = function (t, e) {
    if ((e || (e = []), "names" === t.name && !this.isChildOfSubstitute(e))) {
      for (var i = !0, s = 0, r = t.children.length; s < r; s++)
        if ("name" === t.children[s].name) {
          i = !1;
          break;
        }
      i &&
        (t.children = [{ name: "name", attrs: {}, children: [] }].concat(
          t.children
        ));
    }
    e.push(t.name);
    for (s = 0, r = t.children.length; s < r; s += 1)
      "object" == typeof t.children[s] &&
        this.addMissingNameNodes(t.children[s], e);
    e.pop();
  }),
  (CSL.XmlJSON.prototype.addInstitutionNodes = function (t) {
    if ("names" === t.name) {
      for (var e = {}, i = -1, s = 0, r = t.children.length; s < r; s += 1) {
        if ("name" == t.children[s].name) {
          for (var a in t.children[s].attrs) e[a] = t.children[s].attrs[a];
          (e.delimiter = t.children[s].attrs.delimiter),
            (e.and = t.children[s].attrs.and),
            (i = s);
          for (var n = 0, o = t.children[s].children.length; n < o; n += 1)
            if ("family" === t.children[s].children[n].attrs.name)
              for (var a in t.children[s].children[n].attrs)
                e[a] = t.children[s].children[n].attrs[a];
        }
        if ("institution" == t.children[s].name) {
          i = -1;
          break;
        }
      }
      if (-1 < i) {
        var l = this.nodeCopy(this.institution);
        for (s = 0, r = CSL.INSTITUTION_KEYS.length; s < r; s += 1) {
          var u = CSL.INSTITUTION_KEYS[s];
          void 0 !== e[u] && (l.children[0].attrs[u] = e[u]),
            e.delimiter && (l.attrs.delimiter = e.delimiter),
            e.and && (l.attrs.and = "text");
        }
        t.children = t.children
          .slice(0, i + 1)
          .concat([l])
          .concat(t.children.slice(i + 1));
      }
    }
    for (s = 0, r = t.children.length; s < r; s += 1)
      "string" != typeof t.children[s] &&
        this.addInstitutionNodes(t.children[s]);
  }),
  (CSL.XmlJSON.prototype.flagDateMacros = function (t) {
    for (var e = 0, i = t.children.length; e < i; e += 1)
      "macro" === t.children[e].name &&
        this.inspectDateMacros(t.children[e]) &&
        (t.children[e].attrs["macro-has-date"] = "true");
  }),
  (CSL.XmlJSON.prototype.inspectDateMacros = function (t) {
    if (!t || !t.children) return !1;
    if ("date" === t.name) return !0;
    for (var e = 0, i = t.children.length; e < i; e += 1)
      if (this.inspectDateMacros(t.children[e])) return !0;
    return !1;
  }),
  (CSL.stripXmlProcessingInstruction = function (t) {
    return (
      t &&
        ((t = t.replace(/^<\?[^?]+\?>/, "")),
        (t = t.replace(/<!--[^>]+-->/g, "")),
        (t = t.replace(/^\s+/g, "")),
        (t = t.replace(/\s+$/g, ""))),
      t
    );
  }),
  (CSL.parseXml = function (t) {
    var e = { children: [] },
      n = [e.children];
    function h(t) {
      return t
        .split("&amp;")
        .join("&")
        .split("&quot;")
        .join('"')
        .split("&gt;")
        .join(">")
        .split("&lt;")
        .join("<")
        .replace(/&#([0-9]{1,6});/gi, function (t, e) {
          var i = parseInt(e, 10);
          return String.fromCharCode(i);
        })
        .replace(/&#x([a-f0-9]{1,6});/gi, function (t, e) {
          var i = parseInt(e, 16);
          return String.fromCharCode(i);
        });
    }
    function p(t) {
      var e = RegExp("^<([^\t />]+)"),
        i = t.match(e);
      return i ? i[1] : null;
    }
    function o(t) {
      var e = {};
      (e.name = p(t)), (e.attrs = {});
      var i,
        s,
        r,
        a,
        n = (function (t) {
          var e = t.match(/([^\'\"=	 ]+)=(?:\"[^\"]*\"|\'[^\']*\')/g);
          if (e)
            for (var i = 0, s = e.length; i < s; i++)
              e[i] = e[i].replace(/=.*/, "");
          return e;
        })(t);
      if (n)
        for (var o = 0, l = n.length; o < l; o++) {
          var u = {
            name: n[o],
            value:
              ((i = t),
              (s = n[o]),
              void 0,
              (a = void 0),
              (r = RegExp(
                "^.*[\t ]+" + s + "=(\"(?:[^\"]*)\"|'(?:[^']*)').*$"
              )),
              (a = i.match(r)),
              a ? a[1].slice(1, -1) : null),
          };
          e.attrs[u.name] = h(u.value);
        }
      return (e.children = []), e;
    }
    function l(t) {
      n.slice(-1)[0].push(t);
    }
    function i(t) {
      var e, i, s, r;
      if (-1 < t.slice(1).indexOf("<")) {
        var a = t.slice(0, t.indexOf(">") + 1);
        (e = o(a)),
          (e.children = [((s = t), (r = s.match(/^.*>([^<]*)<.*$/)), h(r[1]))]),
          l(e);
      } else
        "/>" === t.slice(-2)
          ? ((e = o(t)), "term" === p(t) && e.children.push(""), l(e))
          : "</" === t.slice(0, 2)
          ? n.pop()
          : ((e = o(t)), l(e), (i = e), n.push(i.children));
    }
    for (
      var s = (function (t) {
          t = t
            .split(/(?:\r\n|\n|\r)/)
            .join(" ")
            .replace(/>[	 ]+</g, "><")
            .replace(/<\!--.*?-->/g, "");
          for (var e = t.split("><"), i = null, s = 0, r = e.length; s < r; s++)
            0 < s && (e[s] = "<" + e[s]),
              s < e.length - 1 && (e[s] = e[s] + ">"),
              "number" != typeof i &&
                (("<style " !== e[s].slice(0, 7) &&
                  "<locale " != e[s].slice(0, 8)) ||
                  (i = s));
          for (e = e.slice(i), s = e.length - 2; -1 < s; s--)
            if (-1 === e[s].slice(1).indexOf("<")) {
              var a = e[s].slice(0, 5);
              "<term" === a
                ? "</term" === e[s + 1].slice(0, 6) &&
                  ((e[s] = e[s] + e[s + 1]),
                  (e = e.slice(0, s + 1).concat(e.slice(s + 2))))
                : -1 < ["<sing", "<mult"].indexOf(a) &&
                  "/>" !== e[s].slice(-2) &&
                  "<" === e[s + 1].slice(0, 1) &&
                  ((e[s] = e[s] + e[s + 1]),
                  (e = e.slice(0, s + 1).concat(e.slice(s + 2))));
            }
          return e;
        })(t),
        r = 0,
        a = s.length;
      r < a;
      r++
    ) {
      var u = s[r];
      i(u);
    }
    return e.children[0];
  }),
  (CSL.XmlDOM = function (t) {
    (this.dataObj = t),
      "undefined" == typeof DOMParser
        ? ((DOMParser = function () {}),
          (DOMParser.prototype.parseFromString = function (t, e) {
            if ("undefined" != typeof ActiveXObject) {
              var i = new ActiveXObject("MSXML.DomDocument");
              return (i.async = !1), i.loadXML(t), i;
            }
            if ("undefined" != typeof XMLHttpRequest) {
              i = new XMLHttpRequest();
              return (
                e || (e = "text/xml"),
                i.open(
                  "GET",
                  "data:" + e + ";charset=utf-8," + encodeURIComponent(t),
                  !1
                ),
                i.overrideMimeType && i.overrideMimeType(e),
                i.send(null),
                i.responseXML
              );
            }
            if ("undefined" != typeof marknote) {
              var s = new marknote.Parser();
              return s.parse(t);
            }
          }),
          (this.hasAttributes = function (t) {
            var e;
            return (e = !(!t.attributes || !t.attributes.length)), e;
          }))
        : (this.hasAttributes = function (t) {
            var e;
            return (e = !(!t.attributes || !t.attributes.length)), e;
          }),
      (this.importNode = function (t, e) {
        if (void 0 === t.importNode) var i = this._importNode(t, e, !0);
        else i = t.importNode(e, !0);
        return i;
      }),
      (this._importNode = function (t, e, i) {
        switch (e.nodeType) {
          case 1:
            var s = t.createElement(e.nodeName);
            if (e.attributes && 0 < e.attributes.length)
              for (var r = 0, a = e.attributes.length; r < a; )
                s.setAttribute(
                  e.attributes[r].nodeName,
                  e.getAttribute(e.attributes[r++].nodeName)
                );
            if (i && e.childNodes && 0 < e.childNodes.length)
              for (r = 0, a = e.childNodes.length; r < a; )
                s.appendChild(this._importNode(t, e.childNodes[r++], i));
            return s;
        }
      }),
      (this.parser = new DOMParser());
    var e = this.parser.parseFromString(
        '<docco><institution institution-parts="long" delimiter=", " substitute-use-first="1" use-last="1"><institution-part name="long"/></institution></docco>',
        "text/xml"
      ),
      i = e.getElementsByTagName("institution");
    this.institution = i.item(0);
    var s = e.getElementsByTagName("institution-part");
    (this.institutionpart = s.item(0)),
      (this.ns = "http://purl.org/net/xbiblio/csl");
  }),
  (CSL.XmlDOM.prototype.clean = function (t) {
    return (
      (t = t.replace(/<\?[^?]+\?>/g, "")),
      (t = t.replace(/<![^>]+>/g, "")),
      (t = t.replace(/^\s+/, "")),
      (t = t.replace(/\s+$/, "")),
      (t = t.replace(/^\n*/, "")),
      t
    );
  }),
  (CSL.XmlDOM.prototype.getStyleId = function (t, e) {
    var i = "",
      s = "id";
    e && (s = "title");
    var r = t.getElementsByTagName(s);
    return (
      r && r.length && (r = r.item(0)),
      r && (i = r.textContent),
      i || (i = r.innerText),
      i || (i = r.innerHTML),
      i
    );
  }),
  (CSL.XmlDOM.prototype.children = function (t) {
    var e, i, s, r;
    if (t) {
      for (r = [], e = t.childNodes, i = 0, s = e.length; i < s; i += 1)
        "#text" != e[i].nodeName && r.push(e[i]);
      return r;
    }
    return [];
  }),
  (CSL.XmlDOM.prototype.nodename = function (t) {
    var e = t.nodeName;
    return e;
  }),
  (CSL.XmlDOM.prototype.attributes = function (t) {
    var e, i, s, r, a;
    if (((e = new Object()), t && this.hasAttributes(t)))
      for (i = t.attributes, r = 0, a = i.length; r < a; r += 1)
        (s = i[r]), (e["@" + s.name] = s.value);
    return e;
  }),
  (CSL.XmlDOM.prototype.content = function (t) {
    var e;
    return (
      (e =
        void 0 !== t.textContent
          ? t.textContent
          : void 0 !== t.innerText
          ? t.innerText
          : t.txt),
      e
    );
  }),
  (CSL.XmlDOM.prototype.namespace = {
    xml: "http://www.w3.org/XML/1998/namespace",
  }),
  (CSL.XmlDOM.prototype.numberofnodes = function (t) {
    return t ? t.length : 0;
  }),
  (CSL.XmlDOM.prototype.getAttributeName = function (t) {
    var e = t.name;
    return e;
  }),
  (CSL.XmlDOM.prototype.getAttributeValue = function (t, e, i) {
    var s = "";
    return (
      i && (e = i + ":" + e),
      t &&
        this.hasAttributes(t) &&
        t.getAttribute(e) &&
        (s = t.getAttribute(e)),
      s
    );
  }),
  (CSL.XmlDOM.prototype.getNodeValue = function (t, e) {
    var i = null;
    if (e) {
      var s = t.getElementsByTagName(e);
      0 < s.length &&
        (i =
          void 0 !== s[0].textContent
            ? s[0].textContent
            : void 0 !== s[0].innerText
            ? s[0].innerText
            : s[0].text);
    }
    return (
      null === i &&
        t &&
        t.childNodes &&
        (0 == t.childNodes.length ||
          (1 == t.childNodes.length && "#text" == t.firstChild.nodeName)) &&
        (i =
          void 0 !== t.textContent
            ? t.textContent
            : void 0 !== t.innerText
            ? t.innerText
            : t.text),
      null === i && (i = t),
      i
    );
  }),
  (CSL.XmlDOM.prototype.setAttributeOnNodeIdentifiedByNameAttribute = function (
    t,
    e,
    i,
    s,
    r
  ) {
    var a, n, o, l;
    for (
      "@" === s.slice(0, 1) && (s = s.slice(1)),
        o = t.getElementsByTagName(e),
        a = 0,
        n = o.length;
      a < n;
      a += 1
    )
      (l = o[a]), l.getAttribute("name") == i && l.setAttribute(s, r);
  }),
  (CSL.XmlDOM.prototype.deleteNodeByNameAttribute = function (t, e) {
    var i, s, r, a;
    for (a = t.childNodes, i = 0, s = a.length; i < s; i += 1)
      (r = a[i]),
        r &&
          r.nodeType != r.TEXT_NODE &&
          this.hasAttributes(r) &&
          r.getAttribute("name") == e &&
          t.removeChild(a[i]);
  }),
  (CSL.XmlDOM.prototype.deleteAttribute = function (t, e) {
    t.removeAttribute(e);
  }),
  (CSL.XmlDOM.prototype.setAttribute = function (t, e, i) {
    return (
      t.ownerDocument || (t = t.firstChild),
      -1 < ["function", "unknown"].indexOf(typeof t.setAttribute) &&
        t.setAttribute(e, i),
      !1
    );
  }),
  (CSL.XmlDOM.prototype.nodeCopy = function (t) {
    var e = t.cloneNode(!0);
    return e;
  }),
  (CSL.XmlDOM.prototype.getNodesByName = function (t, e, i) {
    var s, r, a, n, o;
    for (
      s = [], r = t.getElementsByTagName(e), n = 0, o = r.length;
      n < o;
      n += 1
    )
      (a = r.item(n)),
        (!i || (this.hasAttributes(a) && a.getAttribute("name") == i)) &&
          s.push(a);
    return s;
  }),
  (CSL.XmlDOM.prototype.nodeNameIs = function (t, e) {
    return e == t.nodeName;
  }),
  (CSL.XmlDOM.prototype.makeXml = function (t) {
    t || (t = "<docco><bogus/></docco>"),
      (t = t.replace(/\s*<\?[^>]*\?>\s*\n*/g, ""));
    var e = this.parser.parseFromString(t, "application/xml");
    return e.firstChild;
  }),
  (CSL.XmlDOM.prototype.insertChildNodeAfter = function (t, e, i, s) {
    var r;
    return (r = this.importNode(e.ownerDocument, s)), t.replaceChild(r, e), t;
  }),
  (CSL.XmlDOM.prototype.insertPublisherAndPlace = function (t) {
    for (
      var e = t.getElementsByTagName("group"), i = 0, s = e.length;
      i < s;
      i += 1
    ) {
      for (
        var r = e.item(i), a = [], n = 0, o = r.childNodes.length;
        n < o;
        n += 1
      )
        1 !== r.childNodes.item(n).nodeType && a.push(n);
      if (r.childNodes.length - a.length == 2) {
        var l = [];
        for (n = 0, o = 2; n < o; n += 1)
          if (!(-1 < a.indexOf(n))) {
            for (
              var u = r.childNodes.item(n),
                h = [],
                p = 0,
                c = u.childNodes.length;
              p < c;
              p += 1
            )
              1 !== u.childNodes.item(p).nodeType && h.push(p);
            if (
              u.childNodes.length - h.length == 0 &&
              (l.push(u.getAttribute("variable")),
              u.getAttribute("suffix") || u.getAttribute("prefix"))
            ) {
              l = [];
              break;
            }
          }
        -1 < l.indexOf("publisher") &&
          -1 < l.indexOf("publisher-place") &&
          r.setAttribute("has-publisher-and-publisher-place", !0);
      }
    }
  }),
  (CSL.XmlDOM.prototype.isChildOfSubstitute = function (t) {
    return (
      !!t.parentNode &&
      ("substitute" === t.parentNode.tagName.toLowerCase() ||
        this.isChildOfSubstitute(t.parentNode))
    );
  }),
  (CSL.XmlDOM.prototype.addMissingNameNodes = function (t) {
    for (
      var e = t.getElementsByTagName("names"), i = 0, s = e.length;
      i < s;
      i += 1
    ) {
      var r = e.item(i),
        a = r.getElementsByTagName("name");
      if (!((a && 0 !== a.length) || this.isChildOfSubstitute(r))) {
        var n = r.ownerDocument,
          o = n.createElement("name");
        r.appendChild(o);
      }
    }
  }),
  (CSL.XmlDOM.prototype.addInstitutionNodes = function (t) {
    var e, i, s, r, a, n, o, l;
    for (
      e = t.getElementsByTagName("names"), o = 0, l = e.length;
      o < l;
      o += 1
    )
      if (
        ((i = e.item(o)),
        (a = i.getElementsByTagName("name")),
        0 != a.length &&
          ((s = i.getElementsByTagName("institution")), 0 == s.length))
      ) {
        (r = this.importNode(t.ownerDocument, this.institution)),
          (theinstitutionpart = r
            .getElementsByTagName("institution-part")
            .item(0)),
          (n = a.item(0)),
          i.insertBefore(r, n.nextSibling);
        for (var u = 0, h = CSL.INSTITUTION_KEYS.length; u < h; u += 1) {
          var p = CSL.INSTITUTION_KEYS[u],
            c = n.getAttribute(p);
          c && theinstitutionpart.setAttribute(p, c);
        }
        var m = n.getElementsByTagName("name-part");
        for (u = 0, h = m.length; u < h; u += 1)
          if ("family" === m[u].getAttribute("name"))
            for (var f = 0, d = CSL.INSTITUTION_KEYS.length; f < d; f += 1) {
              (p = CSL.INSTITUTION_KEYS[f]), (c = m[u].getAttribute(p));
              c && theinstitutionpart.setAttribute(p, c);
            }
      }
  }),
  (CSL.XmlDOM.prototype.flagDateMacros = function (t) {
    var e, i, s, r;
    for (
      nodes = t.getElementsByTagName("macro"), e = 0, i = nodes.length;
      e < i;
      e += 1
    )
      (s = nodes.item(e)),
        (r = s.getElementsByTagName("date")),
        r.length && s.setAttribute("macro-has-date", "true");
  }),
  (CSL.setupXml = function (t) {
    var e = {},
      i = null;
    if (
      (void 0 !== t
        ? (i =
            "string" == typeof t
              ? ((t = t.replace("^\ufeff", "").replace(/^\s+/, "")),
                (e = "<" === t.slice(0, 1) ? CSL.parseXml(t) : JSON.parse(t)),
                new CSL.XmlJSON(e))
              : void 0 !== t.getAttribute
              ? new CSL.XmlDOM(t)
              : void 0 !== t.toXMLString
              ? new CSL.XmlE4X(t)
              : new CSL.XmlJSON(t))
        : CSL.error("unable to parse XML input"),
      !i)
    )
      throw "citeproc-js error: unable to parse CSL style or locale object";
    return i;
  }),
  (CSL.getSortCompare = function (i) {
    if (CSL.stringCompare) return CSL.stringCompare;
    var s,
      r = { sensitivity: "base", ignorePunctuation: !0, numeric: !0 };
    i || (i = "en-US"),
      (s = function (t, e) {
        return t.toLocaleLowerCase().localeCompare(e.toLocaleLowerCase(), i, r);
      });
    var a = function (t) {
        return t.replace(/^[\[\]\'\"]*/g, "");
      },
      n =
        !!s("[x", "x") &&
        function (t, e) {
          return s(a(t), a(e));
        };
    return function (t, e) {
      return n ? n(t, e) : s(t, e);
    };
  }),
  (CSL.ambigConfigDiff = function (t, e) {
    var i, s, r, a;
    if (t.names.length !== e.names.length) return 1;
    for (i = 0, s = t.names.length; i < s; i += 1) {
      if (t.names[i] !== e.names[i]) return 1;
      for (r = 0, a = t.givens[i]; r < a; r += 1)
        if (t.givens[i][r] !== e.givens[i][r]) return 1;
    }
    return t.disambiguate != e.disambiguate
      ? 1
      : t.year_suffix !== e.year_suffix
      ? 1
      : 0;
  }),
  (CSL.cloneAmbigConfig = function (t, e, i) {
    var s,
      r,
      a,
      n,
      o,
      l = { names: [], givens: [], year_suffix: !1, disambiguate: !1 };
    for (s = 0, r = t.names.length; s < r; s += 1)
      (o = t.names[s]), (l.names[s] = o);
    for (s = 0, r = t.givens.length; s < r; s += 1) {
      for (o = [], a = 0, n = t.givens[s].length; a < n; a += 1)
        o.push(t.givens[s][a]);
      l.givens.push(o);
    }
    return (
      (l.disambiguate = e
        ? ((l.year_suffix = e.year_suffix), e.disambiguate)
        : ((l.year_suffix = t.year_suffix), t.disambiguate)),
      l
    );
  }),
  (CSL.getAmbigConfig = function () {
    var t;
    (t = this.tmp.disambig_request), t || (t = this.tmp.disambig_settings);
    var e = CSL.cloneAmbigConfig(t);
    return e;
  }),
  (CSL.getMaxVals = function () {
    return this.tmp.names_max.mystack.slice();
  }),
  (CSL.getMinVal = function () {
    return this.tmp["et-al-min"];
  }),
  (CSL.tokenExec = function (e, t, i) {
    var s, r, a;
    (s = e.next), (r = !1);
    e.test &&
      (s = function (t) {
        return t
          ? (this.tmp.jump.replace("succeed"), e.succeed)
          : (this.tmp.jump.replace("fail"), e.fail);
      }.call(this, e.test(t, i)));
    for (var n = 0, o = e.execs.length; n < o; n++)
      (a = e.execs[n]), (r = a.call(e, this, t, i)), r && (s = r);
    return s;
  }),
  (CSL.expandMacro = function (t, e) {
    var i, s, r;
    (i = t.postponed_macro), (t = new CSL.Token("group", CSL.START));
    var a = !1,
      n = !1;
    if (
      ((s = this.cslXml.getNodesByName(this.cslXml.dataObj, "macro", i)),
      s.length &&
        ((n = this.cslXml.getAttributeValue(s[0], "cslid")),
        (a = this.cslXml.getAttributeValue(s[0], "macro-has-date"))),
      a &&
        ((i = i + "@" + this.build.current_default_locale),
        (u = function (t, e) {
          t.tmp.extension && (t.tmp["doing-macro-with-date"] = !0);
        }),
        t.execs.push(u)),
      -1 < this.build.macro_stack.indexOf(i))
    )
      throw (
        'CSL processor error: call to macro "' +
        i +
        '" would cause an infinite loop'
      );
    if (
      (this.build.macro_stack.push(i),
      (t.cslid = n),
      CSL.MODULE_MACROS[i] &&
        ((t.juris = i), (this.opt.update_mode = CSL.POSITION)),
      CSL.Node.group.build.call(t, this, e, !0),
      !this.cslXml.getNodeValue(s))
    )
      throw 'CSL style error: undefined macro "' + i + '"';
    var o,
      l = CSL.getMacroTarget.call(this, i);
    if (
      (l && (CSL.buildMacro.call(this, l, s), CSL.configureMacro.call(this, l)),
      !this.build.extension)
    ) {
      var u =
          ((o = i),
          function (t, e, i) {
            for (var s = 0; s < t.macros[o].length; )
              s = CSL.tokenExec.call(t, t.macros[o][s], e, i);
          }),
        h = new CSL.Token("text", CSL.SINGLETON);
      h.execs.push(u), e.push(h);
    }
    (r = new CSL.Token("group", CSL.END)),
      a &&
        ((u = function (t, e) {
          t.tmp.extension && (t.tmp["doing-macro-with-date"] = !1);
        }),
        r.execs.push(u)),
      t.juris && (r.juris = i),
      CSL.Node.group.build.call(r, this, e, !0),
      this.build.macro_stack.pop();
  }),
  (CSL.getMacroTarget = function (t) {
    var e = !1;
    return (
      this.build.extension
        ? (e = this[this.build.root + this.build.extension].tokens)
        : this.macros[t] || ((e = []), (this.macros[t] = e)),
      e
    );
  }),
  (CSL.buildMacro = function (t, e) {
    var i,
      s = CSL.makeBuilder(this, t);
    (i = void 0 === e.length ? e : e[0]), s(i);
  }),
  (CSL.configureMacro = function (t) {
    this.build.extension || this.configureTokenList(t);
  }),
  (CSL.XmlToToken = function (t, e, i) {
    var s, r, a, n, o, l;
    if (((s = t.cslXml.nodename(this)), !t.build.skip || t.build.skip === s)) {
      if (!s)
        return (r = t.cslXml.content(this)), void (r && (t.build.text = r));
      if (!CSL.Node[t.cslXml.nodename(this)])
        throw 'Undefined node name "' + s + '".';
      if (
        ([],
        (a = t.cslXml.attributes(this)),
        (n = CSL.setDecorations.call(this, t, a)),
        (o = new CSL.Token(s, e)),
        e !== CSL.END || "if" === s || "else-if" === s || "layout" === s)
      ) {
        for (var u in a)
          if (a.hasOwnProperty(u)) {
            if (e === CSL.END && "@language" !== u && "@locale" !== u) continue;
            if (a.hasOwnProperty(u))
              if (CSL.Attributes[u])
                try {
                  CSL.Attributes[u].call(o, t, "" + a[u]);
                } catch (t) {
                  throw (
                    (CSL.error(t),
                    "CSL processor error, " + u + " attribute: " + t)
                  );
                }
              else
                CSL.debug('warning: undefined attribute "' + u + '" in style');
          }
        o.decorations = n;
      } else
        e === CSL.END &&
          a["@variable"] &&
          ((o.hasVariable = !0),
          -1 < CSL.DATE_VARIABLES.indexOf(a["@variable"]) &&
            (o.variables = a["@variable"].split(/\s+/)));
      (l = i || t[t.build.area].tokens), CSL.Node[s].build.call(o, t, l, !0);
    }
  }),
  (CSL.DateParser = new (function () {
    for (
      var t = [
          ["明治", 1867],
          ["大正", 1911],
          ["昭和", 1925],
          ["平成", 1988],
        ],
        e = {},
        i = 0,
        s = t.length;
      i < s;
      i++
    ) {
      var r = t[i][0],
        a = t[i][1];
      e[r] = a;
    }
    var n = [];
    for (i = 0, s = t.length; i < s; i++) {
      a = t[i][0];
      n.push(a);
    }
    var o = n.join("|"),
      j = new RegExp("(?:" + o + ")(?:[0-9]+)"),
      D = new RegExp("(?:" + o + ")(?:[0-9]+)", "g"),
      P = /(\u6708|\u5E74)/g,
      U = /\u65E5/g,
      B = /\u301c/g,
      l =
        "([?0-9]{4}(?:%%NUMD%%[?0-9]{1,2}){0,2}(?![0-9])|(?:[?0-9]{1,2}%%NUMD%%){0,2}[?0-9]{4}(?![0-9])|[?0-9]{1,3}|[%%DATED%%]|[?~]|[^-/~?0-9]+)",
      M = new RegExp(l.replace(/%%NUMD%%/g, "-").replace(/%%DATED%%/g, "-")),
      X = new RegExp(l.replace(/%%NUMD%%/g, "-").replace(/%%DATED%%/g, "/")),
      q = new RegExp(l.replace(/%%NUMD%%/g, "/").replace(/%%DATED%%/g, "-"));
    (this.monthStrings =
      "january february march april may june july august september october november december spring summer fall winter spring summer".split(
        " "
      )),
      (this.setOrderDayMonth = function () {
        (this.monthGuess = 1), (this.dayGuess = 0);
      }),
      (this.setOrderMonthDay = function () {
        (this.monthGuess = 0), (this.dayGuess = 1);
      }),
      (this.resetDateParserMonths = function () {
        this.monthSets = [];
        for (var t = 0, e = this.monthStrings.length; t < e; t++)
          this.monthSets.push([this.monthStrings[t]]);
        this.monthAbbrevs = [];
        for (t = 0, e = this.monthSets.length; t < e; t++) {
          this.monthAbbrevs.push([]);
          for (var i = 0, s = this.monthSets[t].length; i < s; i++)
            this.monthAbbrevs[t].push(this.monthSets[t][0].slice(0, 3));
        }
        this.monthRexes = [];
        for (t = 0, e = this.monthAbbrevs.length; t < e; t++)
          this.monthRexes.push(
            new RegExp("(?:" + this.monthAbbrevs[t].join("|") + ")")
          );
      }),
      (this.addDateParserMonths = function (t) {
        if (
          ("string" == typeof t && (t = t.split(/\s+/)),
          12 === t.length || 16 === t.length)
        ) {
          for (var e = 0, i = t.length; e < i; e++) {
            for (
              var s = null,
                r = !1,
                a = 3,
                n = {},
                o = 0,
                l = this.monthAbbrevs.length;
              o < l;
              o++
            ) {
              if (((n[o] = {}), o === e)) {
                for (var u = 0, h = this.monthAbbrevs[e].length; u < h; u++)
                  if (
                    this.monthAbbrevs[e][u] ===
                    t[e].slice(0, this.monthAbbrevs[e][u].length)
                  ) {
                    r = !0;
                    break;
                  }
              } else
                for (u = 0, h = this.monthAbbrevs[o].length; u < h; u++)
                  if (
                    ((s = this.monthAbbrevs[o][u].length),
                    this.monthAbbrevs[o][u] === t[e].slice(0, s))
                  ) {
                    for (
                      ;
                      this.monthSets[o][u].slice(0, s) === t[e].slice(0, s);

                    ) {
                      if (s > t[e].length || s > this.monthSets[o][u].length) {
                        CSL.debug(
                          "unable to disambiguate month string in date parser: " +
                            t[e]
                        );
                        break;
                      }
                      s += 1;
                    }
                    (a = s), (n[o][u] = s);
                  }
              for (var p in n)
                for (kKey in n[p])
                  (s = n[p][kKey]),
                    (p = parseInt(p, 10)),
                    (kKey = parseInt(kKey, 10)),
                    (this.monthAbbrevs[p][kKey] = this.monthSets[p][kKey].slice(
                      0,
                      s
                    ));
            }
            r ||
              (this.monthSets[e].push(t[e]),
              this.monthAbbrevs[e].push(t[e].slice(0, a)));
          }
          (this.monthRexes = []), (this.monthRexStrs = []);
          for (e = 0, i = this.monthAbbrevs.length; e < i; e++)
            this.monthRexes.push(
              new RegExp("^(?:" + this.monthAbbrevs[e].join("|") + ")")
            ),
              this.monthRexStrs.push(
                "^(?:" + this.monthAbbrevs[e].join("|") + ")"
              );
          if (18 === this.monthAbbrevs.length)
            for (e = 12, i = 14; e < i; e++)
              (this.monthRexes[e + 4] = new RegExp(
                "^(?:" + this.monthAbbrevs[e].join("|") + ")"
              )),
                (this.monthRexStrs[e + 4] =
                  "^(?:" + this.monthAbbrevs[e].join("|") + ")");
        } else
          CSL.debug(
            "month [+season] list of " +
              t.length +
              ", expected 12 or 16. Ignoring."
          );
      }),
      (this.convertDateObjectToArray = function (t) {
        (t["date-parts"] = []), t["date-parts"].push([]);
        for (var e = 0, i = 0, s = 3; i < s; i++) {
          var r = ["year", "month", "day"][i];
          if (!t[r]) break;
          (e += 1), t["date-parts"][0].push(t[r]), delete t[r];
        }
        t["date-parts"].push([]);
        for (
          i = 0, s = e;
          i < s && ((r = ["year_end", "month_end", "day_end"][i]), t[r]);
          i++
        )
          t["date-parts"][1].push(t[r]), delete t[r];
        return (
          t["date-parts"][0].length !== t["date-parts"][1].length &&
            t["date-parts"].pop(),
          t
        );
      }),
      (this.convertDateObjectToString = function (t) {
        for (var e = [], i = 0; i < 3 && t[DATE_PARTS_ALL[i]]; i += 1)
          e.push(t[DATE_PARTS_ALL[i]]);
        return e.join("-");
      }),
      (this._parseNumericDate = function (t, e, i, s) {
        i || (i = "");
        for (var r = s.split(e), a = 0, n = r.length; a < n; a++)
          if (4 === r[a].length) {
            (t["year" + i] = r[a].replace(/^0*/, "")),
              (r = a ? r.slice(0, a) : r.slice(1));
            break;
          }
        for (a = 0, n = r.length; a < n; a++) r[a] = parseInt(r[a], 10);
        1 === r.length || (2 === r.length && !r[1])
          ? (t["month" + i] = "" + r[0])
          : 2 === r.length &&
            (12 < r[this.monthGuess]
              ? ((t["month" + i] = "" + r[this.dayGuess]),
                (t["day" + i] = "" + r[this.monthGuess]))
              : ((t["month" + i] = "" + r[this.monthGuess]),
                (t["day" + i] = "" + r[this.dayGuess])));
      }),
      (this.parseDateToObject = function (t) {
        var e,
          i = t,
          s = -1,
          r = -1,
          a = !1;
        if (t) {
          if (
            ("-" === t.slice(0, 1) && ((a = !0), (t = t.slice(1))),
            t.match(/^[0-9]{1,3}$/))
          )
            for (; t.length < 4; ) t = "0" + t;
          (t = "" + t), (t = t.replace(/\s*[0-9]{2}:[0-9]{2}(?::[0-9]+)/, ""));
          var n = t.match(P);
          if (n) {
            (t = t.replace(/\s+/g, "")),
              (t = t.replace(U, "")),
              (t = t.replace(P, "-")),
              (t = t.replace(B, "/")),
              (t = t.replace(/\-\//g, "/")),
              (t = t.replace(/-$/g, ""));
            var o = t.split(j);
            e = [];
            var l = t.match(D);
            if (l) {
              for (var u = [], h = 0, p = l.length; h < p; h++)
                u = u.concat(l[h].match(/([^0-9]+)([0-9]+)/).slice(1));
              for (h = 0, p = o.length; h < p; h++)
                if ((e.push(o[h]), h !== len - 1)) {
                  var c = 2 * pos;
                  e.push(u[c]), e.push(u[c + 1]);
                }
            } else e = o;
            for (h = 1, p = e.length; h < p; h += 3)
              (e[h + 1] = jiy[e[h]] + parseInt(e[h + 1], 10)), (e[h] = "");
            (t = e.join("")),
              (t = t.replace(/\s*-\s*$/, "").replace(/\s*-\s*\//, "/")),
              (t = t.replace(/\.\s*$/, "")),
              (t = t.replace(/\.(?! )/, "")),
              (s = t.indexOf("/")),
              (r = t.indexOf("-"));
          }
        }
        t = t.replace(/([A-Za-z])\./g, "$1");
        var m,
          f,
          d = "",
          g = "",
          b = {};
        if ('"' === t.slice(0, 1) && '"' === t.slice(-1))
          return (b.literal = t.slice(1, -1)), b;
        if (-1 < s && -1 < r) {
          var _ = t.split("/");
          e =
            3 < _.length
              ? ((m = "-"), (t = t.replace(/\_/g, "-")), (f = "/"), t.split(q))
              : ((m = "/"), (t = t.replace(/\_/g, "/")), (f = "-"), t.split(X));
        } else
          (t = t.replace(/\//g, "-")),
            (t = t.replace(/\_/g, "-")),
            (m = "-"),
            (f = "-"),
            (e = t.split(M));
        var v = [];
        for (h = 0, p = e.length; h < p; h++) {
          n = e[h].match(/^\s*([\-\/]|[^\-\/\~\?0-9]+|[\-~?0-9]+)\s*$/);
          n && v.push(n[1]);
        }
        var S = v.indexOf(m),
          y = [],
          L = !1;
        -1 < S
          ? (y.push([0, S]), y.push([S + 1, v.length]), (L = !0))
          : y.push([0, v.length]);
        var C = "";
        for (h = 0, p = y.length; h < p; h++) {
          var x = y[h],
            I = v.slice(x[0], x[1]);
          t: for (var O = 0, T = I.length; O < T; O++) {
            var N = I[O];
            if (-1 < N.indexOf(f)) this._parseNumericDate(b, f, C, N);
            else if (N.match(/[0-9]{4}/)) b["year" + C] = N.replace(/^0*/, "");
            else {
              for (var A = 0, E = this.monthRexes.length; A < E; A++)
                if (N.toLocaleLowerCase().match(this.monthRexes[A])) {
                  b["month" + C] = "" + (parseInt(A, 10) + 1);
                  continue t;
                }
              N.match(/^[0-9]+$/) && (d = N),
                N.toLocaleLowerCase().match(/^bc/) && d
                  ? ((b["year" + C] = "" + -1 * d), (d = ""))
                  : N.toLocaleLowerCase().match(/^ad/) && d
                  ? ((b["year" + C] = "" + d), (d = ""))
                  : "~" === N || "?" === N || "c" === N || N.match(/^cir/)
                  ? (b.circa = "1")
                  : !N.toLocaleLowerCase().match(/(?:mic|tri|hil|eas)/) ||
                    b["season" + C] ||
                    (g = N);
            }
          }
          d && ((b["day" + C] = d), (d = "")),
            g && !b["season" + C] && ((b["season" + C] = g), (g = "")),
            (C = "_end");
        }
        if (L)
          for (O = 0, T = CSL.DATE_PARTS_ALL.length; O < T; O++) {
            var k = CSL.DATE_PARTS_ALL[O];
            b[k] && !b[k + "_end"]
              ? (b[k + "_end"] = b[k])
              : !b[k] && b[k + "_end"] && (b[k] = b[k + "_end"]);
          }
        (!b.year || (b.year && b.day && !b.month)) && (b = { literal: i });
        var R = ["year", "month", "day", "year_end", "month_end", "day_end"];
        for (h = 0, p = R.length; h < p; h++) {
          var w = R[h];
          "string" == typeof b[w] &&
            b[w].match(/^[0-9]+$/) &&
            (b[w] = parseInt(b[w], 10));
        }
        return (
          a && -1 < Object.keys(b).indexOf("year") && (b.year = -1 * b.year), b
        );
      }),
      (this.parseDateToArray = function (t) {
        return this.convertDateObjectToArray(this.parseDateToObject(t));
      }),
      (this.parseDateToString = function (t) {
        return this.convertDateObjectToString(this.parseDateToObject(t));
      }),
      (this.parse = function (t) {
        return this.parseDateToObject(t);
      }),
      this.setOrderMonthDay(),
      this.resetDateParserMonths();
  })()),
  (CSL.Engine = function (t, e, i, s) {
    var r, a;
    (this.processor_version = CSL.PROCESSOR_VERSION),
      (this.csl_version = "1.0"),
      (this.sys = t),
      t.variableWrapper &&
        (CSL.VARIABLE_WRAPPER_PREPUNCT_REX = new RegExp(
          "^([" + [" "].concat(CSL.SWAPPING_PUNCTUATION).join("") + "]*)(.*)"
        )),
      CSL.retrieveStyleModule &&
        (this.sys.retrieveStyleModule = CSL.retrieveStyleModule),
      CSL.getAbbreviation && (this.sys.getAbbreviation = CSL.getAbbreviation),
      this.sys.stringCompare && (CSL.stringCompare = this.sys.stringCompare),
      (this.sys.AbbreviationSegments = CSL.AbbreviationSegments),
      (this.parallel = new CSL.Parallel(this)),
      (this.transform = new CSL.Transform(this)),
      (this.setParseNames = function (t) {
        this.opt["parse-names"] = t;
      }),
      (this.opt = new CSL.Engine.Opt()),
      (this.tmp = new CSL.Engine.Tmp()),
      (this.build = new CSL.Engine.Build()),
      (this.fun = new CSL.Engine.Fun(this)),
      (this.configure = new CSL.Engine.Configure()),
      (this.citation_sort = new CSL.Engine.CitationSort()),
      (this.bibliography_sort = new CSL.Engine.BibliographySort()),
      (this.citation = new CSL.Engine.Citation(this)),
      (this.bibliography = new CSL.Engine.Bibliography()),
      (this.output = new CSL.Output.Queue(this)),
      (this.dateput = new CSL.Output.Queue(this)),
      (this.cslXml = CSL.setupXml(e)),
      (this.opt.development_extensions.csl_reverse_lookup_support ||
        this.sys.csl_reverse_lookup_support) &&
        ((this.build.cslNodeId = 0),
        (this.setCslNodeIds = function (t, e) {
          var i = this.cslXml.children(t);
          this.cslXml.setAttribute(t, "cslid", this.build.cslNodeId),
            this.opt.nodenames.push(e),
            (this.build.cslNodeId += 1);
          for (var s = 0, r = this.cslXml.numberofnodes(i); s < r; s += 1)
            (e = this.cslXml.nodename(i[s])), e && this.setCslNodeIds(i[s], e);
        }),
        this.setCslNodeIds(this.cslXml.dataObj, "style")),
      this.cslXml.addMissingNameNodes(this.cslXml.dataObj),
      this.cslXml.addInstitutionNodes(this.cslXml.dataObj),
      this.cslXml.insertPublisherAndPlace(this.cslXml.dataObj),
      this.cslXml.flagDateMacros(this.cslXml.dataObj),
      (r = this.cslXml.attributes(this.cslXml.dataObj)),
      void 0 === r["@sort-separator"] &&
        this.cslXml.setAttribute(this.cslXml.dataObj, "sort-separator", ", "),
      (this.opt["initialize-with-hyphen"] = !0),
      this.setStyleAttributes(),
      (this.opt.xclass = this.cslXml.getAttributeValue(
        this.cslXml.dataObj,
        "class"
      )),
      (this.opt.class = this.opt.xclass),
      (this.opt.styleID = this.cslXml.getStyleId(this.cslXml.dataObj)),
      CSL.setSuppressedJurisdictions &&
        CSL.setSuppressedJurisdictions(
          this.opt.styleID,
          this.opt.suppressedJurisdictions
        ),
      (this.opt.styleName = this.cslXml.getStyleId(this.cslXml.dataObj, !0)),
      "1.1m" === this.opt.version.slice(0, 4) &&
        ((this.opt.development_extensions.static_statute_locator = !0),
        (this.opt.development_extensions.handle_parallel_articles = !0),
        (this.opt.development_extensions.main_title_from_short_title = !0),
        (this.opt.development_extensions.rtl_support = !0),
        (this.opt.development_extensions.expect_and_symbol_form = !0),
        (this.opt.development_extensions.require_explicit_legal_case_title_short =
          !0),
        (this.opt.development_extensions.force_jurisdiction = !0)),
      i && ((i = i.replace("_", "-")), (i = CSL.normalizeLocaleStr(i))),
      this.opt["default-locale"][0] &&
        ((this.opt["default-locale"][0] = this.opt["default-locale"][0].replace(
          "_",
          "-"
        )),
        (this.opt["default-locale"][0] = CSL.normalizeLocaleStr(
          this.opt["default-locale"][0]
        ))),
      i && s && (this.opt["default-locale"] = [i]),
      i &&
        !s &&
        this.opt["default-locale"][0] &&
        (i = this.opt["default-locale"][0]),
      0 === this.opt["default-locale"].length &&
        (i || (i = "en-US"), this.opt["default-locale"].push("en-US")),
      i || (i = this.opt["default-locale"][0]),
      (a = CSL.localeResolve(i)),
      (this.opt.lang = a.best),
      (this.opt["default-locale"][0] = a.best),
      (this.locale = {}),
      this.opt["default-locale-sort"] ||
        (this.opt["default-locale-sort"] = this.opt["default-locale"][0]),
      -1 < "dale|".localeCompare("daleb", this.opt["default-locale-sort"])
        ? (this.opt.sort_sep = "@")
        : (this.opt.sort_sep = "|"),
      this.localeConfigure(a),
      (this.locale[this.opt.lang].opts["skip-words-regexp"] = (function (t) {
        t = t.slice();
        var e = new RegExp(
          "(?:(?:[?!:]*\\s+|-|^)(?:" + t.join("|") + ")(?=[!?:]*\\s+|-|$))",
          "g"
        );
        return e;
      })(this.locale[this.opt.lang].opts["skip-words"])),
      (this.output.adjust = new CSL.Output.Queue.adjust(
        this.getOpt("punctuation-in-quote")
      )),
      (this.registry = new CSL.Registry(this)),
      (this.macros = {}),
      (this.build.area = "citation");
    var n = this.cslXml.getNodesByName(this.cslXml.dataObj, this.build.area);
    this.buildTokenLists(n, this[this.build.area].tokens),
      (this.build.area = "bibliography");
    n = this.cslXml.getNodesByName(this.cslXml.dataObj, this.build.area);
    this.buildTokenLists(n, this[this.build.area].tokens),
      (this.juris = {}),
      this.configureTokenLists(),
      (this.disambiguate = new CSL.Disambiguation(this)),
      (this.splice_delimiter = !1),
      (this.fun.dateparser = CSL.DateParser),
      (this.fun.flipflopper = new CSL.Util.FlipFlopper(this)),
      this.setCloseQuotesArray(),
      this.fun.ordinalizer.init(this),
      this.fun.long_ordinalizer.init(this),
      (this.fun.page_mangler = CSL.Util.PageRangeMangler.getFunction(
        this,
        "page"
      )),
      (this.fun.year_mangler = CSL.Util.PageRangeMangler.getFunction(
        this,
        "year"
      )),
      this.setOutputFormat("html");
  }),
  (CSL.Engine.prototype.setCloseQuotesArray = function () {
    var t;
    (t = []),
      t.push(this.getTerm("close-quote")),
      t.push(this.getTerm("close-inner-quote")),
      t.push('"'),
      t.push("'"),
      (this.opt.close_quotes_array = t);
  }),
  (CSL.makeBuilder = function (r, e) {
    function a(t) {
      CSL.XmlToToken.call(t, r, CSL.START, e);
    }
    function n(t) {
      CSL.XmlToToken.call(t, r, CSL.END, e);
    }
    function o(t) {
      CSL.XmlToToken.call(t, r, CSL.SINGLETON, e);
    }
    return function t(e) {
      var i;
      if (r.cslXml.numberofnodes(r.cslXml.children(e))) {
        (i = e), a(i);
        for (
          var s = 0;
          s < r.cslXml.numberofnodes(r.cslXml.children(i));
          s += 1
        )
          (e = r.cslXml.children(i)[s]),
            null !== r.cslXml.nodename(e) &&
              ("date" === r.cslXml.nodename(e) &&
                (CSL.Util.fixDateNode.call(r, i, s, e),
                (e = r.cslXml.children(i)[s])),
              t(e));
        n(i);
      } else o(e);
    };
  }),
  (CSL.Engine.prototype.buildTokenLists = function (t, e) {
    if (this.cslXml.getNodeValue(t)) {
      var i,
        s = CSL.makeBuilder(this, e);
      (i = void 0 === t.length ? t : t[0]), s(i);
    }
  }),
  (CSL.Engine.prototype.setStyleAttributes = function () {
    var t,
      e,
      i = {};
    for (e in ((i.name = this.cslXml.nodename(this.cslXml.dataObj)),
    (t = this.cslXml.attributes(this.cslXml.dataObj)),
    t))
      t.hasOwnProperty(e) && CSL.Attributes[e].call(i, this, t[e]);
  }),
  (CSL.Engine.prototype.getTerm = function (t, e, i, s, r, a) {
    var n;
    t &&
      t.match(/[A-Z]/) &&
      t === t.toUpperCase() &&
      (CSL.debug("Warning: term key is in uppercase form: " + t),
      (t = t.toLowerCase())),
      (n = a ? this.opt["default-locale"][0] : this.opt.lang);
    var o = CSL.Engine.getField(CSL.LOOSE, this.locale[n].terms, t, e, i, s);
    if ((o || "range-delimiter" !== t || (o = "–"), void 0 === o)) {
      if (r === CSL.STRICT)
        throw 'Error in getTerm: term "' + t + '" does not exist.';
      r === CSL.TOLERANT && (o = "");
    }
    return o && (this.tmp.cite_renders_content = !0), o;
  }),
  (CSL.Engine.prototype.getDate = function (t, e) {
    var i;
    return (
      (i = e ? this.opt["default-locale"] : this.opt.lang),
      !!this.locale[i].dates[t] && this.locale[i].dates[t]
    );
  }),
  (CSL.Engine.prototype.getOpt = function (t) {
    return (
      void 0 !== this.locale[this.opt.lang].opts[t] &&
      this.locale[this.opt.lang].opts[t]
    );
  }),
  (CSL.Engine.prototype.getVariable = function (t, e, i, s) {
    return CSL.Engine.getField(CSL.LOOSE, t, e, i, s);
  }),
  (CSL.Engine.prototype.getDateNum = function (t, e) {
    return void 0 === t ? 0 : t[e];
  }),
  (CSL.Engine.getField = function (t, e, i, s, r, a) {
    var n, o, l, u, h, p;
    if (((n = ""), void 0 !== e[i])) {
      for (
        p = a && e[i][a] ? e[i][a] : e[i],
          o = [],
          "symbol" === s
            ? (o = ["symbol", "short"])
            : "verb-short" === s
            ? (o = ["verb-short", "verb"])
            : "long" !== s && (o = [s]),
          o = o.concat(["long"]),
          h = o.length,
          u = 0;
        u < h;
        u += 1
      )
        if (((l = o[u]), "string" == typeof p || "number" == typeof p)) n = p;
        else if (void 0 !== p[l]) {
          n =
            "string" == typeof p[l] || "number" == typeof p[l]
              ? p[l]
              : "number" == typeof r
              ? p[l][r]
              : p[l][0];
          break;
        }
      return n;
    }
    if (t === CSL.STRICT)
      throw 'Error in getField: term "' + i + '" does not exist.';
  }),
  (CSL.Engine.prototype.configureTokenLists = function () {
    var t, e, i;
    for (i = CSL.AREAS.length, e = 0; e < i; e += 1) {
      t = CSL.AREAS[e];
      var s = this[t].tokens;
      this.configureTokenList(s);
    }
    return (this.version = CSL.version), this.state;
  }),
  (CSL.Engine.prototype.configureTokenList = function (t) {
    var e, i, s, r, a, n, o, l;
    for (
      e = ["year", "month", "day"], o = t.length - 1, a = o;
      -1 < a;
      a += -1
    ) {
      if (
        ((i = t[a]),
        "date" === i.name && CSL.END === i.tokentype && (s = []),
        "date-part" === i.name && i.strings.name)
      )
        for (l = e.length, n = 0; n < l; n += 1)
          (r = e[n]), r === i.strings.name && s.push(i.strings.name);
      "date" === i.name &&
        CSL.START === i.tokentype &&
        (s.reverse(), (i.dateparts = s)),
        (i.next = a + 1),
        i.name &&
          CSL.Node[i.name].configure &&
          CSL.Node[i.name].configure.call(i, this, a);
    }
  }),
  (CSL.Engine.prototype.retrieveItems = function (t) {
    var e;
    e = [];
    for (var i = 0, s = t.length; i < s; i += 1)
      e.push(this.retrieveItem("" + t[i]));
    return e;
  }),
  (CSL.ITERATION = 0),
  (CSL.Engine.prototype.retrieveItem = function (t) {
    var e;
    if (this.tmp.loadedItemIDs[t]) return this.registry.refhash[t];
    if (
      ((this.tmp.loadedItemIDs[t] = !0),
      this.opt.development_extensions.normalize_lang_keys_to_lowercase &&
        "boolean" ==
          typeof this.opt.development_extensions
            .normalize_lang_keys_to_lowercase)
    ) {
      for (var i = 0, s = this.opt["default-locale"].length; i < s; i += 1)
        this.opt["default-locale"][i] =
          this.opt["default-locale"][i].toLowerCase();
      for (i = 0, s = this.opt["locale-translit"].length; i < s; i += 1)
        this.opt["locale-translit"][i] =
          this.opt["locale-translit"][i].toLowerCase();
      for (i = 0, s = this.opt["locale-translat"].length; i < s; i += 1)
        this.opt["locale-translat"][i] =
          this.opt["locale-translat"][i].toLowerCase();
      this.opt.development_extensions.normalize_lang_keys_to_lowercase = 100;
    }
    if (
      ((CSL.ITERATION += 1),
      (e = JSON.parse(JSON.stringify(this.sys.retrieveItem("" + t)))),
      this.opt.development_extensions.normalize_lang_keys_to_lowercase)
    ) {
      if (e.multi) {
        if (e.multi._keys)
          for (var r in e.multi._keys)
            for (var a in e.multi._keys[r])
              a !== a.toLowerCase() &&
                ((e.multi._keys[r][a.toLowerCase()] = e.multi._keys[r][a]),
                delete e.multi._keys[r][a]);
        if (e.multi.main)
          for (var r in e.multi.main)
            e.multi.main[r] = e.multi.main[r].toLowerCase();
      }
      for (i = 0, s = CSL.CREATORS.length; s < i; i += 1) {
        var n = CSL.CREATORS[i];
        if (e[n] && e[n].multi)
          for (var o = 0, l = e[n].length; o < l; o += 1) {
            var u = e[n][o];
            if (u.multi) {
              if (u.multi._key)
                for (var a in u.multi._key)
                  a !== a.toLowerCase() &&
                    ((u.multi._key[a.toLowerCase()] = u.multi._key[a]),
                    delete u.multi._key[a]);
              u.multi.main && (u.multi.main = u.multi.main.toLowerCase());
            }
          }
      }
    }
    if (this.sys.getLanguageName && e.language && e.language) {
      e.language = e.language.toLowerCase();
      var h = e.language.split("<");
      if (0 < h.length) {
        var p = this.sys.getLanguageName(h[0]);
        p && (e["language-name"] = p);
      }
      if (2 === h.length) {
        var c = this.sys.getLanguageName(h[1]);
        c && (e["language-name-original"] = c);
      }
    }
    if (e.page) {
      e["page-first"] = e.page;
      var m = "" + e.page,
        f = m.split(/\s*(?:&|, |-|\u2013)\s*/);
      "\\" !== f[0].slice(-1) && (e["page-first"] = f[0]);
    }
    this.opt.development_extensions.field_hack &&
      e.note &&
      CSL.parseNoteFieldHacks(
        e,
        !1,
        this.opt.development_extensions.allow_field_hack_date_override
      );
    for (i = 1, s = CSL.DATE_VARIABLES.length; i < s; i += 1) {
      var d = e[CSL.DATE_VARIABLES[i]];
      d &&
        (this.opt.development_extensions.raw_date_parsing &&
          d.raw &&
          (d = this.fun.dateparser.parseDateToObject(d.raw)),
        (e[CSL.DATE_VARIABLES[i]] = this.dateParseArray(d)));
    }
    if (
      this.opt.development_extensions.static_statute_locator &&
      e.type &&
      -1 <
        ["bill", "gazette", "legislation", "regulation", "treaty"].indexOf(
          e.type
        )
    ) {
      var g,
        b = [
          "type",
          "title",
          "jurisdiction",
          "genre",
          "volume",
          "container-title",
        ],
        _ = [];
      for (i = 0, s = b.length; i < s; i += 1) (g = b[i]), e[g] && _.push(e[g]);
      for (b = ["original-date", "issued"], i = 0, b.length; i < s; i += 1)
        if (((g = b[i]), e[g] && e[g].year)) {
          var v = e[g].year;
          _.push(v);
          break;
        }
      e.legislation_id = _.join("::");
    }
    this.opt.development_extensions.force_jurisdiction &&
      "string" == typeof e.authority &&
      (e.authority = [{ literal: e.authority }]),
      e["title-short"] || (e["title-short"] = e.shortTitle),
      this.opt.development_extensions.main_title_from_short_title &&
        CSL.extractTitleAndSubtitle(e);
    var S =
      -1 <
      ["bill", "legal_case", "legislation", "gazette", "regulation"].indexOf(
        e.type
      );
    if (
      (this.opt.development_extensions.force_jurisdiction &&
        S &&
        (e.jurisdiction || (e.jurisdiction = "us")),
      !S && e.title && this.sys.getAbbreviation)
    ) {
      e.jurisdiction || !0;
      var y = this.transform.loadAbbreviation(
        e.jurisdiction,
        "title",
        e.title,
        e.type,
        !0
      );
      this.transform.abbrevs[y].title &&
        this.transform.abbrevs[y].title[e.title] &&
        (e["title-short"] = this.transform.abbrevs[y].title[e.title]);
    }
    if (
      (e["container-title-short"] ||
        (e["container-title-short"] = e.journalAbbreviation),
      e["container-title"] && this.sys.getAbbreviation)
    ) {
      y = this.transform.loadAbbreviation(
        e.jurisdiction,
        "container-title",
        e["container-title"]
      );
      this.transform.abbrevs[y]["container-title"] &&
        this.transform.abbrevs[y]["container-title"][e["container-title"]] &&
        (e["container-title-short"] =
          this.transform.abbrevs[y]["container-title"][e["container-title"]]);
    }
    return (this.registry.refhash[t] = e), e;
  }),
  (CSL.Engine.prototype.setOpt = function (t, e, i) {
    "style" === t.name || "cslstyle" === t.name
      ? ((this.opt.inheritedAttributes[e] = i),
        (this.citation.opt.inheritedAttributes[e] = i),
        (this.bibliography.opt.inheritedAttributes[e] = i))
      : -1 < ["citation", "bibliography"].indexOf(t.name)
      ? (this[t.name].opt.inheritedAttributes[e] = i)
      : (t.strings[e] = i);
  }),
  (CSL.Engine.prototype.inheritOpt = function (t, e, i, s) {
    if (void 0 !== t.strings[e]) return t.strings[e];
    var r = this[this.tmp.root].opt.inheritedAttributes[i || e];
    return void 0 !== r ? r : s;
  }),
  (CSL.Engine.prototype.remapSectionVariable = function (t) {
    for (var e = 0, i = t.length; e < i; e += 1) {
      var s = t[e][0],
        r = t[e][1];
      if (
        -1 <
        ["bill", "gazette", "legislation", "regulation", "treaty"].indexOf(
          s.type
        )
      ) {
        if (r.locator) {
          r.locator = r.locator.trim();
          var a = r.locator.match(CSL.STATUTE_SUBDIV_PLAIN_REGEX);
          a ||
            (r.label
              ? (r.locator =
                  CSL.STATUTE_SUBDIV_STRINGS_REVERSE[r.label] + " " + r.locator)
              : (r.locator = "p. " + r.locator));
        }
        var n = null;
        if (s.section) {
          s.section = s.section.trim();
          a = s.section.match(CSL.STATUTE_SUBDIV_PLAIN_REGEX);
          n = a ? a[0].trim() : ((s.section = "sec. " + s.section), "sec.");
        }
        if (s.section)
          if (r.locator) {
            a = r.locator.match(/^([^ ]*)\s*(.*)/);
            var o = " ";
            a
              ? ("p." === a[1] && "p." !== n && (r.locator = a[2]),
                -1 <
                  ["[", "(", ".", ",", ";", ":", "?"].indexOf(
                    r.locator.slice(0, 1)
                  ) && (o = ""))
              : (o = ""),
              (r.locator = s.section + o + r.locator);
          } else r.locator = s.section;
        r.label = "";
      }
    }
  }),
  (CSL.Engine.prototype.setNumberLabels = function (t) {
    if (
      t.number &&
      -1 <
        ["bill", "gazette", "legislation", "regulation", "treaty"].indexOf(
          t.type
        ) &&
      this.opt.development_extensions.static_statute_locator &&
      !this.tmp.shadow_numbers.number
    ) {
      (this.tmp.shadow_numbers.number = {}),
        (this.tmp.shadow_numbers.number.values = []),
        (this.tmp.shadow_numbers.number.plural = 0),
        (this.tmp.shadow_numbers.number.numeric = !1),
        (this.tmp.shadow_numbers.number.label = !1);
      var e = "" + t.number;
      e = e.split("\\").join("");
      var i = e.split(/\s+/)[0],
        s = CSL.STATUTE_SUBDIV_STRINGS[i];
      if (s) {
        var r = e.match(CSL.STATUTE_SUBDIV_GROUPED_REGEX),
          a = e.split(CSL.STATUTE_SUBDIV_PLAIN_REGEX);
        if (1 < a.length) {
          for (var n = [], o = 1, l = a.length; o < l; o += 1) {
            r[o - 1].replace(/^\s*/, "");
            n.push(a[o].replace(/\s*$/, "").replace(/^\s*/, ""));
          }
          e = n.join(" ");
        } else e = a[0];
        (this.tmp.shadow_numbers.number.label = s),
          this.tmp.shadow_numbers.number.values.push(["Blob", e, !1]),
          (this.tmp.shadow_numbers.number.numeric = !1);
      } else
        this.tmp.shadow_numbers.number.values.push(["Blob", e, !1]),
          (this.tmp.shadow_numbers.number.numeric = !0);
    }
  }),
  (CSL.substituteOne = function (i) {
    return function (t, e) {
      return e ? i.replace("%%STRING%%", e) : "";
    };
  }),
  (CSL.substituteTwo = function (e) {
    return function (t) {
      var i = e.replace("%%PARAM%%", t);
      return function (t, e) {
        return e ? i.replace("%%STRING%%", e) : "";
      };
    };
  }),
  (CSL.Mode = function (t) {
    var e, i, s, r, a, n;
    for (s in ((e = {}), (i = CSL.Output.Formats[t]), i))
      if ("@" === s.slice(0, 1)) {
        if (
          ((r = !1),
          (a = i[s]),
          (n = s.split("/")),
          "string" == typeof a && -1 < a.indexOf("%%STRING%%"))
        )
          r =
            -1 < a.indexOf("%%PARAM%%")
              ? CSL.substituteTwo(a)
              : CSL.substituteOne(a);
        else if ("boolean" != typeof a || a) {
          if ("function" != typeof a)
            throw (
              "CSL.Compiler: Bad " + t + " config entry for " + s + ": " + a
            );
          r = a;
        } else r = CSL.Output.Formatters.passthrough;
        1 === n.length
          ? (e[n[0]] = r)
          : 2 === n.length && (e[n[0]] || (e[n[0]] = {}), (e[n[0]][n[1]] = r));
      } else e[s] = i[s];
    return e;
  }),
  (CSL.setDecorations = function (t, e) {
    var i, s;
    for (s in ((i = []), CSL.FORMAT_KEY_SEQUENCE)) {
      var r = CSL.FORMAT_KEY_SEQUENCE[s];
      e[r] && (i.push([r, e[r]]), delete e[r]);
    }
    return i;
  }),
  (CSL.Doppeler = function (t, s) {
    (this.split = function (t) {
      s && (t = s(t));
      var e = t.match(r);
      if (!e) return { tags: [], strings: [t] };
      var i = t.split(a);
      return { tags: e, strings: i, origStrings: i.slice() };
    }),
      (this.join = function (t) {
        for (var e = t.strings.slice(-1), i = t.tags.length - 1; -1 < i; i--)
          e.push(t.tags[i]), e.push(t.strings[i]);
        return e.reverse(), e.join("");
      });
    var r = new RegExp("(" + t + ")", "g"),
      a = new RegExp(t, "g");
  }),
  (CSL.Engine.prototype.normalDecorIsOrphan = function (t, e) {
    if ("normal" === e[1]) {
      var i,
        s = !1;
      i =
        "citation" === this.tmp.area
          ? [this.citation.opt.layout_decorations].concat(t.alldecor)
          : t.alldecor;
      for (var r = i.length - 1; -1 < r; r += -1)
        for (var a = i[r].length - 1; -1 < a; a += -1)
          i[r][a][0] === e[0] && "normal" !== i[r][a][1] && (s = !0);
      if (!s) return !0;
    }
    return !1;
  }),
  (CSL.getJurisdictionNameAndSuppress = function (t, e, i) {
    var s = null;
    if ((i || (i = t.sys.getHumanForm(e)), i)) {
      var r = e.split(":"),
        a = i.split("|"),
        n = !1;
      if (
        (1 === r.length && 2 === a.length
          ? (n = !0)
          : 1 < r.length && a.length === r.length && (n = !0),
        n)
      ) {
        for (var o, l = 0, u = 0, h = r.length; u < h; u++)
          (o = r.slice(0, u + 1).join(":")),
            t.opt.suppressedJurisdictions[o] && (l = u + 1);
        s =
          0 === l
            ? 1 === r.length
              ? a[0]
              : a.join("|")
            : 1 === l && 1 === r.length
            ? ""
            : a.slice(l).join("|");
      } else s = a.join("|");
    } else s = e;
    return s;
  }),
  (CSL.Engine.prototype.getCitationLabel = function (t) {
    var e = "",
      i = this.getTrigraphParams(),
      s = i[0],
      r = this.getTerm("reference", "short", 0);
    void 0 === r && (r = "reference"),
      (r = r.replace(".", "")),
      (r = r.slice(0, 1).toUpperCase() + r.slice(1));
    for (var a = 0, n = CSL.CREATORS.length; a < n; a += 1) {
      var o = CSL.CREATORS[a];
      if (t[o]) {
        var l = t[o];
        s = l.length > i.length ? i[i.length - 1] : i[l.length - 1];
        for (var u = 0, h = l.length; u < h && u !== s.authors.length; u += 1) {
          var p = this.nameOutput.getName(l[u], "locale-translit", !0),
            c = p.name;
          c && c.family
            ? ((r = c.family), (r = r.replace(/^([ \'\u2019a-z]+\s+)/, "")))
            : c && c.literal && (r = c.literal);
          var m = r.toLowerCase().match(/^(a\s+|the\s+|an\s+)/);
          if (
            (m && (r = r.slice(m[1].length)),
            (r = r.replace(CSL.ROMANESQUE_NOT_REGEXP, "")),
            !r)
          )
            break;
          (r = r.slice(0, s.authors[u])),
            1 < r.length
              ? (r = r.slice(0, 1).toUpperCase() + r.slice(1).toLowerCase())
              : 1 === r.length && (r = r.toUpperCase()),
            (e += r);
        }
        break;
      }
    }
    if (!e && t.title) {
      var f = this.locale[this.opt.lang].opts["skip-words"],
        d = t.title.split(/\s+/);
      for (a = d.length - 1; -1 < a; a--)
        -1 < f.indexOf(d[a]) && (d = d.slice(0, a).concat(d.slice(a + 1)));
      var g = d.join("");
      (g = g.slice(0, i[0].authors[0])),
        1 < g.length
          ? (g = g.slice(0, 1).toUpperCase() + g.slice(1).toLowerCase())
          : 1 === g.length && (g = g.toUpperCase()),
        (e = g);
    }
    var b = "0000";
    return (
      t.issued && t.issued.year && (b = "" + t.issued.year),
      (b = b.slice(-1 * s.year)),
      (e += b),
      e
    );
  }),
  (CSL.Engine.prototype.getTrigraphParams = function () {
    var t = [],
      e = this.opt.trigraph.split(":");
    if (!this.opt.trigraph || "A" !== this.opt.trigraph.slice(0, 1))
      throw "Bad trigraph definition: " + this.opt.trigraph;
    for (var i = 0, s = e.length; i < s; i += 1) {
      for (
        var r = e[i], a = { authors: [], year: 0 }, n = 0, o = r.length;
        n < o;
        n += 1
      )
        switch (r.slice(n, n + 1)) {
          case "A":
            a.authors.push(1);
            break;
          case "a":
            a.authors[a.authors.length - 1] += 1;
            break;
          case "0":
            a.year += 1;
            break;
          default:
            throw (
              "Invalid character in trigraph definition: " + this.opt.trigraph
            );
        }
      t.push(a);
    }
    return t;
  }),
  (CSL.Engine.prototype.setOutputFormat = function (t) {
    (this.opt.mode = t),
      (this.fun.decorate = CSL.Mode(t)),
      this.output[t] || ((this.output[t] = {}), (this.output[t].tmp = {}));
  }),
  (CSL.Engine.prototype.getSortFunc = function () {
    return function (t, e) {
      return (
        (t = t.split("-")),
        (e = e.split("-")),
        t.length < e.length
          ? 1
          : t.length > e.length
          ? -1
          : ((t = t.slice(-1)[0]),
            (e = e.slice(-1)[0]),
            t.length < e.length ? 1 : t.length > e.length ? -1 : 0)
      );
    };
  }),
  (CSL.Engine.prototype.setLangTagsForCslSort = function (t) {
    var e, i;
    if (t)
      for (this.opt["locale-sort"] = [], e = 0, i = t.length; e < i; e += 1)
        this.opt["locale-sort"].push(t[e]);
    this.opt["locale-sort"].sort(this.getSortFunc());
  }),
  (CSL.Engine.prototype.setLangTagsForCslTransliteration = function (t) {
    var e, i;
    if (((this.opt["locale-translit"] = []), t))
      for (e = 0, i = t.length; e < i; e += 1)
        this.opt["locale-translit"].push(t[e]);
    this.opt["locale-translit"].sort(this.getSortFunc());
  }),
  (CSL.Engine.prototype.setLangTagsForCslTranslation = function (t) {
    var e, i;
    if (((this.opt["locale-translat"] = []), t))
      for (e = 0, i = t.length; e < i; e += 1)
        this.opt["locale-translat"].push(t[e]);
    this.opt["locale-translat"].sort(this.getSortFunc());
  }),
  (CSL.Engine.prototype.setLangPrefsForCites = function (t, e) {
    var i = this.opt["cite-lang-prefs"];
    e ||
      (e = function (t) {
        return t.toLowerCase();
      });
    for (
      var s = [
          "Persons",
          "Institutions",
          "Titles",
          "Journals",
          "Publishers",
          "Places",
        ],
        r = 0,
        a = s.length;
      r < a;
      r += 1
    ) {
      var n = e(s[r]),
        o = s[r].toLowerCase();
      if (t[n]) {
        for (var l = []; 1 < t[n].length; ) l.push(t[n].pop());
        var u = { orig: 1, translit: 2, translat: 3 };
        for (2 === l.length && u[l[0]] < u[l[1]] && l.reverse(); l.length; )
          t[n].push(l.pop());
        for (var h = i[o]; h.length; ) h.pop();
        for (var p = 0, c = t[n].length; p < c; p += 1) h.push(t[n][p]);
      }
    }
  }),
  (CSL.Engine.prototype.setLangPrefsForCiteAffixes = function (t) {
    if (t && 48 === t.length) {
      for (
        var e,
          i = this.opt.citeAffixes,
          s = 0,
          r = [
            "persons",
            "institutions",
            "titles",
            "journals",
            "publishers",
            "places",
          ],
          a = ["translit", "orig", "translit", "translat"],
          n = 0,
          o = r.length;
        n < o;
        n += 1
      )
        for (var l = 0, u = a.length; l < u; l += 1)
          (e = ""),
            (s % 8 == 4 &&
              (i[r[n]]["locale-" + a[l]].prefix ||
                i[r[n]]["locale-" + a[l]].suffix)) ||
              ((e = t[s] ? t[s] : ""),
              (i[r[n]]["locale-" + a[l]].prefix = e),
              (e = t[s] ? t[s + 1] : ""),
              (i[r[n]]["locale-" + a[l]].suffix = e)),
            (s += 2);
      this.opt.citeAffixes = i;
    }
  }),
  (CSL.Engine.prototype.setAutoVietnameseNamesOption = function (t) {
    this.opt["auto-vietnamese-names"] = !!t;
  }),
  (CSL.Engine.prototype.setAbbreviations = function (t) {
    this.sys.setAbbreviations && this.sys.setAbbreviations(t);
  }),
  (CSL.Engine.prototype.setSuppressTrailingPunctuation = function (t) {
    this.citation.opt.suppressTrailingPunctuation = !!t;
  }),
  (CSL.Output = {}),
  (CSL.Output.Queue = function (t) {
    (this.levelname = ["top"]),
      (this.state = t),
      (this.queue = []),
      (this.empty = new CSL.Token("empty"));
    var e = {};
    (e.empty = this.empty),
      (this.formats = new CSL.Stack(e)),
      (this.current = new CSL.Stack(this.queue));
  }),
  (CSL.Output.Queue.prototype.pop = function () {
    var t = this.current.value();
    return t.length ? t.pop() : t.blobs.pop();
  }),
  (CSL.Output.Queue.prototype.getToken = function (t) {
    var e = this.formats.value()[t];
    return e;
  }),
  (CSL.Output.Queue.prototype.mergeTokenStrings = function (t, e) {
    var i, s, r;
    if (
      ((i = this.formats.value()[t]), (s = this.formats.value()[e]), (r = i), s)
    ) {
      i || ((i = new CSL.Token(t, CSL.SINGLETON)), (i.decorations = [])),
        (r = new CSL.Token(t, CSL.SINGLETON));
      var a = "";
      for (var a in i.strings)
        i.strings.hasOwnProperty(a) && (r.strings[a] = i.strings[a]);
      for (var a in s.strings)
        s.strings.hasOwnProperty(a) && (r.strings[a] = s.strings[a]);
      r.decorations = i.decorations.concat(s.decorations);
    }
    return r;
  }),
  (CSL.Output.Queue.prototype.addToken = function (t, e, i) {
    var s, r;
    if (
      ((s = new CSL.Token("output")),
      "string" == typeof i && (i = this.formats.value()[i]),
      i && i.strings)
    ) {
      for (r in i.strings)
        i.strings.hasOwnProperty(r) && (s.strings[r] = i.strings[r]);
      s.decorations = i.decorations;
    }
    "string" == typeof e && (s.strings.delimiter = e),
      (this.formats.value()[t] = s);
  }),
  (CSL.Output.Queue.prototype.pushFormats = function (t) {
    t || (t = {}), (t.empty = this.empty), this.formats.push(t);
  }),
  (CSL.Output.Queue.prototype.popFormats = function (t) {
    this.formats.pop();
  }),
  (CSL.Output.Queue.prototype.startTag = function (t, e) {
    var i = {};
    this.state.tmp["doing-macro-with-date"] &&
      this.state.tmp.extension &&
      ((e = this.empty), (t = "empty")),
      (i[t] = e),
      this.pushFormats(i),
      this.openLevel(t);
  }),
  (CSL.Output.Queue.prototype.endTag = function (t) {
    this.closeLevel(t), this.popFormats();
  }),
  (CSL.Output.Queue.prototype.openLevel = function (t, e) {
    var i, s;
    if ("object" == typeof t) i = new CSL.Blob(void 0, t);
    else if (void 0 === t)
      i = new CSL.Blob(void 0, this.formats.value().empty, "empty");
    else {
      if (!this.formats.value() || !this.formats.value()[t])
        throw (
          'CSL processor error: call to nonexistent format token "' + t + '"'
        );
      i = new CSL.Blob(void 0, this.formats.value()[t], t);
    }
    (s = this.current.value()),
      !this.state.tmp.just_looking &&
        this.checkNestedBrace &&
        (i.strings.prefix = this.checkNestedBrace.update(i.strings.prefix)),
      s.push(i),
      this.current.push(i);
  }),
  (CSL.Output.Queue.prototype.closeLevel = function (t) {
    t &&
      t !== this.current.value().levelname &&
      CSL.error(
        "Level mismatch error:  wanted " +
          t +
          " but found " +
          this.current.value().levelname
      );
    var e = this.current.pop();
    !this.state.tmp.just_looking &&
      this.checkNestedBrace &&
      (e.strings.suffix = this.checkNestedBrace.update(e.strings.suffix));
  }),
  (CSL.Output.Queue.prototype.append = function (t, e, i, s, r) {
    var a,
      n,
      o,
      l = !0;
    if ((i && (s = !0), this.state.tmp["doing-macro-with-date"] && !i)) {
      if ("macro-with-date" !== e) return !1;
      "macro-with-date" === e && (e = "empty");
    }
    if (void 0 === t) return !1;
    if (
      ("number" == typeof t && (t = "" + t),
      !i &&
        this.state.tmp.element_trace &&
        "suppress-me" === this.state.tmp.element_trace.value())
    )
      return !1;
    if (
      ((n = !1),
      e
        ? "literal" === e
          ? ((a = !0), (l = !1))
          : (a = "string" == typeof e ? this.formats.value()[e] : e)
        : (a = this.formats.value().empty),
      !a)
    )
      throw "CSL processor error: unknown format token name: " + e;
    if (
      (a.strings &&
        void 0 === a.strings.delimiter &&
        (a.strings.delimiter = ""),
      "string" == typeof t &&
        t.length &&
        ((t = t.replace(/ ([:;?!\u00bb])/g, " $1").replace(/\u00ab /g, "« ")),
        (this.last_char_rendered = t.slice(-1)),
        (t = t.replace(/\s+'/g, " '")),
        i || (t = t.replace(/^'/g, " '")),
        s
          ? i && (this.state.tmp.term_predecessor_name = !0)
          : ((this.state.tmp.term_predecessor = !0),
            (this.state.tmp.in_cite_predecessor = !0))),
      (n = new CSL.Blob(t, a)),
      (o = this.current.value()),
      void 0 === o &&
        0 === this.current.mystack.length &&
        (this.current.mystack.push([]), (o = this.current.value())),
      "string" == typeof n.blobs &&
        (s
          ? i && (this.state.tmp.term_predecessor_name = !0)
          : ((this.state.tmp.term_predecessor = !0),
            (this.state.tmp.in_cite_predecessor = !0))),
      i || this.state.parallel.AppendBlobPointer(o),
      "string" == typeof t)
    ) {
      if ("string" == typeof n.blobs && " " !== n.blobs.slice(0, 1)) {
        for (
          var u = "", h = n.blobs;
          -1 < CSL.TERMINAL_PUNCTUATION.indexOf(h.slice(0, 1));

        )
          (u += h.slice(0, 1)), (h = h.slice(1));
        h && u && ((n.strings.prefix = n.strings.prefix + u), (n.blobs = h));
      }
      n.strings["text-case"] &&
        (n.blobs = CSL.Output.Formatters[n.strings["text-case"]](
          this.state,
          t
        )),
        this.state.tmp.strip_periods &&
          !r &&
          (n.blobs = n.blobs.replace(/\.([^a-z]|$)/g, "$1"));
      for (var p = n.decorations.length - 1; -1 < p; p += -1)
        "@quotes" === n.decorations[p][0] &&
          "false" !== n.decorations[p][1] &&
          (n.punctuation_in_quote = this.state.getOpt("punctuation-in-quote")),
          n.blobs.match(CSL.ROMANESQUE_REGEXP) ||
            ("@font-style" === n.decorations[p][0] &&
              (n.decorations = n.decorations
                .slice(0, p)
                .concat(n.decorations.slice(p + 1))));
      o.push(n), this.state.fun.flipflopper.processTags(n);
    } else l ? o.push(n) : o.push(t);
    return !0;
  }),
  (CSL.Output.Queue.prototype.string = function (t, e, i) {
    var s,
      r = CSL.getSafeEscape(this.state),
      a = e.slice(),
      n = [];
    if (0 === a.length) return n;
    var o,
      l,
      u,
      h,
      p = "";
    i
      ? (p = i.strings.delimiter)
      : ((t.tmp.count_offset_characters = !1), (t.tmp.offset_characters = 0)),
      i &&
        i.new_locale &&
        ((i.old_locale = t.opt.lang), (t.opt.lang = i.new_locale));
    for (var c = 0, m = a.length; c < m; c += 1) {
      if (
        ((o = a[c]),
        o.strings.first_blob &&
          (t.tmp.count_offset_characters = o.strings.first_blob),
        "string" == typeof o.blobs)
      ) {
        if ("number" == typeof o.num) n.push(o);
        else if (o.blobs) {
          s = r(o.blobs);
          var f = s.length;
          if (!t.tmp.suppress_decorations)
            for (b = 0, _ = o.decorations.length; b < _; b += 1)
              (h = o.decorations[b]),
                "@showid" !== h[0] &&
                  (t.normalDecorIsOrphan(o, h) ||
                    (s = t.fun.decorate[h[0]][h[1]].call(o, t, s, h[2])));
          if (s && s.length) {
            if (
              ((s = r(o.strings.prefix) + s + r(o.strings.suffix)),
              (t.opt.development_extensions.csl_reverse_lookup_support ||
                t.sys.csl_reverse_lookup_support) &&
                !t.tmp.suppress_decorations)
            )
              for (b = 0, _ = o.decorations.length; b < _; b += 1)
                (h = o.decorations[b]),
                  "@showid" === h[0] &&
                    (s = t.fun.decorate[h[0]][h[1]].call(o, t, s, h[2]));
            n.push(s),
              t.tmp.count_offset_characters &&
                (t.tmp.offset_characters +=
                  f + o.strings.suffix.length + o.strings.prefix.length);
          }
        }
      } else if (o.blobs.length) {
        var d = t.output.string(t, o.blobs, o);
        if (i && "string" !== d && 1 < d.length && o.strings.delimiter)
          for (var g = !1, b = 0, _ = d.length; b < _; b++)
            "string" != typeof d[b]
              ? (g = !0)
              : g && (d[b] = o.strings.delimiter + d[b]);
        n = n.concat(d);
      }
      o.strings.first_blob &&
        t.registry.registry[o.strings.first_blob] &&
        ((t.registry.registry[o.strings.first_blob].offset =
          t.tmp.offset_characters),
        (t.tmp.count_offset_characters = !1));
    }
    for (c = 0, m = n.length - 1; c < m; c += 1)
      "number" != typeof n[c].num ||
        "number" != typeof n[c + 1].num ||
        n[c + 1].UGLY_DELIMITER_SUPPRESS_HACK ||
        ((n[c].strings.suffix = n[c].strings.suffix + (p || "")),
        (n[c + 1].successor_prefix = ""),
        (n[c + 1].UGLY_DELIMITER_SUPPRESS_HACK = !0));
    var v = 0;
    for (c = 0, m = n.length; c < m; c += 1)
      "string" == typeof n[c] &&
        ((v = parseInt(c, 10) + 1),
        c < n.length - 1 &&
          "object" == typeof n[c + 1] &&
          (p && !n[c + 1].UGLY_DELIMITER_SUPPRESS_HACK && (n[c] += r(p)),
          (n[c + 1].UGLY_DELIMITER_SUPPRESS_HACK = !0)));
    if (i && (i.decorations.length || i.strings.suffix)) v = n.length;
    else if (i && i.strings.prefix)
      for (c = 0, m = n.length; c < m; c++)
        if (void 0 !== n[c].num) {
          (v = c),
            0 === c &&
              (n[c].strings.prefix = i.strings.prefix + n[c].strings.prefix);
          break;
        }
    var S = t.output.renderBlobs(n.slice(0, v), p, !1, i);
    if (
      S &&
      i &&
      (i.decorations.length || i.strings.suffix || i.strings.prefix)
    ) {
      if (!t.tmp.suppress_decorations)
        for (c = 0, m = i.decorations.length; c < m; c += 1)
          (h = i.decorations[c]),
            -1 <
              ["@cite", "@bibliography", "@display", "@showid"].indexOf(h[0]) ||
              t.normalDecorIsOrphan(o, h) ||
              ("string" == typeof S &&
                (S = t.fun.decorate[h[0]][h[1]].call(i, t, S, h[2])));
      if (
        ((s = S),
        (l = i.strings.suffix),
        s &&
          s.length &&
          ((u = i.strings.prefix),
          (s = r(u) + s + r(l)),
          t.tmp.count_offset_characters &&
            (t.tmp.offset_characters += u.length + l.length)),
        (S = s),
        !t.tmp.suppress_decorations)
      )
        for (c = 0, m = i.decorations.length; c < m; c += 1)
          (h = i.decorations[c]),
            -1 !==
              ["@cite", "@bibliography", "@display", "@showid"].indexOf(h[0]) &&
              "string" == typeof S &&
              (S = t.fun.decorate[h[0]][h[1]].call(i, t, S, h[2]));
    }
    var y = n.slice(v, n.length);
    return (
      !y.length && S
        ? (n = [S])
        : y.length && !S
        ? (n = y)
        : S && y.length && (n = [S].concat(y)),
      void 0 === i
        ? ((this.queue = []),
          (this.current.mystack = []),
          this.current.mystack.push(this.queue),
          t.tmp.suppress_decorations &&
            (n = t.output.renderBlobs(n, void 0, !1)))
        : "boolean" == typeof i && (n = t.output.renderBlobs(n, void 0, !0)),
      i && i.new_locale && (t.opt.lang = i.old_locale),
      n
    );
  }),
  (CSL.Output.Queue.prototype.clearlevel = function () {
    var t, e, i;
    for (t = this.current.value(), i = t.blobs.length, e = 0; e < i; e += 1)
      t.blobs.pop();
  }),
  (CSL.Output.Queue.prototype.renderBlobs = function (t, e, i, s) {
    var r, a, n, o, l, u, h, p, c, m, f;
    if (
      ((f = CSL.getSafeEscape(this.state)),
      e || (e = ""),
      (r = this.state),
      (a = ""),
      [],
      (n = ""),
      (u = t.length),
      "citation" === this.state.tmp.area &&
        !this.state.tmp.just_looking &&
        1 === u &&
        "object" == typeof t[0] &&
        s)
    )
      return (
        (t[0].strings.prefix = s.strings.prefix + t[0].strings.prefix),
        (t[0].strings.suffix = t[0].strings.suffix + s.strings.suffix),
        (t[0].decorations = t[0].decorations.concat(s.decorations)),
        (t[0].params = s.params),
        t[0]
      );
    var d = !0;
    for (l = 0; l < u; l += 1)
      d = t[l].checkNext
        ? (t[l].checkNext(t[l + 1], d), !1)
        : !t[l + 1] || !t[l + 1].splice_prefix;
    var g = !0;
    for (l = t.length - 1; 0 < l; l += -1)
      t[l].checkLast ? g && t[l].checkLast(t[l - 1]) && (g = !1) : (g = !0);
    for (u = t.length, l = 0; l < u; l += 1)
      if (((o = t[l]), a && (n = e), "string" == typeof o))
        (a += f(n)),
          (a += o),
          r.tmp.count_offset_characters &&
            (r.tmp.offset_characters += n.length);
      else if (i) a = a ? [a, o] : [o];
      else if (o.status !== CSL.SUPPRESS) {
        c = o.particle
          ? o.particle + o.num
          : o.formatter.format(o.num, o.gender);
        var b = c.replace(/<[^>]*>/g, "").length;
        this.append(c, "empty", !0);
        var _ = this.pop(),
          v = r.tmp.count_offset_characters;
        if (
          ((c = this.string(r, [_], !1)),
          (r.tmp.count_offset_characters = v),
          o.strings["text-case"] &&
            (c = CSL.Output.Formatters[o.strings["text-case"]](this.state, c)),
          c &&
            this.state.tmp.strip_periods &&
            (c = c.replace(/\.([^a-z]|$)/g, "$1")),
          !r.tmp.suppress_decorations)
        )
          for (p = o.decorations.length, h = 0; h < p; h += 1)
            (m = o.decorations[h]),
              r.normalDecorIsOrphan(o, m) ||
                (c = r.fun.decorate[m[0]][m[1]].call(o, r, c, m[2]));
        c = f(o.strings.prefix) + c + f(o.strings.suffix);
        var S = "";
        o.status === CSL.END
          ? (S = f(o.range_prefix))
          : o.status === CSL.SUCCESSOR
          ? (S = f(o.successor_prefix))
          : o.status === CSL.START
          ? (S = 0 < l && !o.suppress_splice_prefix ? f(o.splice_prefix) : "")
          : o.status === CSL.SEEN && (S = f(o.splice_prefix)),
          (a += S),
          (a += c),
          r.tmp.count_offset_characters &&
            (r.tmp.offset_characters +=
              S.length + o.strings.prefix.length + b + o.strings.suffix.length);
      }
    return a;
  }),
  (CSL.Output.Queue.purgeEmptyBlobs = function (t) {
    if ("object" == typeof t && "object" == typeof t.blobs && t.blobs.length)
      for (var e = t.blobs.length - 1; -1 < e; e--) {
        CSL.Output.Queue.purgeEmptyBlobs(t.blobs[e]);
        var i = t.blobs[e];
        if (!i || !i.blobs || !i.blobs.length) {
          for (var s = []; t.blobs.length - 1 > e; ) s.push(t.blobs.pop());
          for (t.blobs.pop(); s.length; ) t.blobs.push(s.pop());
        }
      }
  }),
  (CSL.Output.Queue.adjust = function (m) {
    var t = { ";": !0, ":": !0 },
      e = { ".": !0, "!": !0, "?": !0 };
    (this.upward = function (t) {
      {
        if (t.blobs && "string" == typeof t.blobs)
          return void (
            f[t.strings.suffix.slice(0, 1)] &&
            t.strings.suffix.slice(0, 1) === t.blobs.slice(-1) &&
            (t.strings.suffix = t.strings.suffix.slice(1))
          );
        if (
          "object" != typeof t ||
          "object" != typeof t.blobs ||
          !t.blobs.length
        )
          return;
      }
      for (var e = S(t, !0), i = t.blobs.length - 1; -1 < i; i--) {
        t.blobs.length;
        this.upward(t.blobs[i]);
        var s = t.strings,
          r = t.blobs[i].strings;
        if (0 === i) {
          " " === s.prefix.slice(-1) &&
            " " === r.prefix.slice(0, 1) &&
            (r.prefix = r.prefix.slice(1));
          var a = r.prefix.slice(0, 1);
          e ||
            !d[a] ||
            s.prefix ||
            ((s.prefix += a), (r.prefix = r.prefix.slice(1)));
        }
        if (i === t.blobs.length - 1) {
          var a = r.suffix.slice(-1);
          !e &&
            -1 < [" "].indexOf(a) &&
            (s.suffix.slice(0, 1) !== a && (s.suffix = a + s.suffix),
            (r.suffix = r.suffix.slice(0, -1)));
        }
        s.delimiter &&
          0 < i &&
          d[s.delimiter.slice(-1)] &&
          s.delimiter.slice(-1) === r.prefix.slice(0, 1) &&
          (r.prefix = r.prefix.slice(1));
      }
    }),
      (this.leftward = function (t) {
        if (
          "object" != typeof t ||
          "object" != typeof t.blobs ||
          !t.blobs.length
        )
          return;
        for (var e = t.blobs.length - 1; -1 < e; e--)
          if (
            (this.leftward(t.blobs[e]),
            e < t.blobs.length - 1 && !t.strings.delimiter)
          ) {
            var i = t.blobs[e],
              s = i.strings.suffix.slice(-1),
              r = t.blobs[e + 1],
              a = r.strings.prefix.slice(0, 1),
              n = S(i) || S(r),
              o = "number" == typeof s || "number" == typeof a;
            if (!n && !o && f[a] && !o) {
              var l = a === i.strings.suffix.slice(-1),
                u =
                  !i.strings.suffix &&
                  "string" == typeof i.blobs &&
                  i.blobs.slice(-1) === a;
              l || u
                ? (r.strings.prefix = r.strings.prefix.slice(1))
                : x(i, "suffix", r, "prefix");
            }
          }
      }),
      (this.downward = function (t, e) {
        {
          if (t.blobs && "string" == typeof t.blobs)
            return void (
              f[t.strings.suffix.slice(0, 1)] &&
              t.strings.suffix.slice(0, 1) === t.blobs.slice(-1) &&
              (t.strings.suffix = t.strings.suffix.slice(1))
            );
          if (
            "object" != typeof t ||
            "object" != typeof t.blobs ||
            !t.blobs.length
          )
            return;
        }
        for (var i = t.strings, s = 0, r = t.blobs.length; s < r; s++)
          if (g(t.blobs[s])) {
            !0;
            break;
          }
        if (i.delimiter && f[i.delimiter.slice(0, 1)]) {
          for (
            var a = i.delimiter.slice(0, 1), s = t.blobs.length - 2;
            -1 < s;
            s--
          ) {
            var n = t.blobs[s].strings;
            n.suffix.slice(-1) !== a && (n.suffix += a);
          }
          i.delimiter = i.delimiter.slice(1);
        }
        S(t, !0), g(t);
        for (var s = t.blobs.length - 1; -1 < s; s--) {
          var o = t.blobs[s],
            n = t.blobs[s].strings,
            l = S(o, !0),
            u = g(o);
          if (s === t.blobs.length - 1) {
            var h = i.suffix.slice(0, 1),
              p = !1;
            f[h] && ((p = L(h, o)), !p && m && (p = y(o))),
              p &&
                f[h] &&
                (v(o) ||
                  ("string" == typeof o.blobs
                    ? x(o, "blobs", t, "suffix")
                    : x(o, "suffix", t, "suffix"),
                  "." === i.suffix.slice(0, 1) &&
                    ((n.suffix += i.suffix.slice(0, 1)),
                    (i.suffix = i.suffix.slice(1))))),
              " " === n.suffix.slice(-1) &&
                " " === i.suffix.slice(0, 1) &&
                (i.suffix = i.suffix.slice(1)),
              d[n.suffix.slice(0, 1)] &&
                ("string" == typeof o.blobs &&
                  o.blobs.slice(-1) === n.suffix.slice(0, 1) &&
                  (n.suffix = n.suffix.slice(1)),
                n.suffix.slice(-1) === i.suffix.slice(0, 1) &&
                  (i.suffix = i.suffix.slice(0, -1))),
              C(t, t.strings.suffix.slice(0, 1)) &&
                (t.strings.suffix = t.strings.suffix.slice(1));
          } else if (i.delimiter)
            d[i.delimiter.slice(0, 1)] &&
              i.delimiter.slice(0, 1) === n.suffix.slice(-1) &&
              (t.blobs[s].strings.suffix = t.blobs[s].strings.suffix.slice(
                0,
                -1
              ));
          else {
            var c = t.blobs[s + 1].strings;
            g(o) ||
              l ||
              !d[n.suffix.slice(-1)] ||
              n.suffix.slice(-1) !== c.prefix.slice(0, 1) ||
              (c.prefix = c.prefix.slice(1));
          }
          u ||
            l ||
            !f[n.suffix.slice(0, 1)] ||
            "string" != typeof o.blobs ||
            x(o, "blobs", o, "suffix"),
            this.downward(t.blobs[s]);
        }
      }),
      (this.fix = function (t) {
        if (
          "object" != typeof t ||
          "object" != typeof t.blobs ||
          !t.blobs.length
        )
          return;
        for (var e, i = 0, s = t.blobs.length; i < s; i++) {
          for (
            var r = t.blobs[i], a = !1, n = 0, o = r.decorations.length;
            n < o;
            n++
          ) {
            var l = r.decorations[n];
            "@quotes" === l[0] && "false" !== l[1] && (a = !0);
          }
          a && (m ? u(r) : h(r)),
            (e = this.fix(t.blobs[i])),
            r.blobs && "string" == typeof r.blobs && (e = r.blobs.slice(-1));
        }
        return e;
      });
    var b = {
        "!": { ".": "!", "?": "!?", ":": "!", ",": "!,", ";": "!;" },
        "?": { "!": "?!", ".": "?", ":": "?", ",": "?,", ";": "?;" },
        ".": { "!": ".!", "?": ".?", ":": ".:", ",": ".,", ";": ".;" },
        ":": { "!": "!", "?": "?", ".": ":", ",": ":,", ";": ":;" },
        ",": { "!": ",!", "?": ",?", ":": ",:", ".": ",.", ";": ",;" },
        ";": { "!": "!", "?": "?", ":": ";", ",": ";,", ".": ";" },
      },
      i = {},
      s = {},
      f = {},
      d = {};
    for (var r in b)
      (f[r] = !0), (d[r] = !0), t[r] || (i[r] = !0), e[r] || (s[r] = !0);
    (d[" "] = !0), (d[" "] = !0);
    var _ = {};
    for (var r in b)
      for (var a in b[r]) _[a] || (_[a] = {}), (_[a][r] = b[r][a]);
    function g(t) {
      return (
        "number" == typeof t.num ||
        (t.blobs && 1 === t.blobs.length && "number" == typeof t.blobs[0].num)
      );
    }
    function v(t) {
      return (
        "number" == typeof t.num ||
        (!(!t.blobs || "object" != typeof t.blobs) &&
          (!!v(t.blobs[t.blobs.length - 1]) || void 0))
      );
    }
    function S(t, e) {
      var i = !1,
        s = [
          "@font-style",
          "@font-variant",
          "@font-weight",
          "@text-decoration",
          "@vertical-align",
        ];
      if ((e && s.push("@quotes"), t.decorations))
        for (var r = 0, a = t.decorations.length; r < a; r++)
          if (-1 < s.indexOf(t.decorations[r][0])) {
            i = !0;
            break;
          }
      return i;
    }
    function y(t) {
      if (t.decorations)
        for (var e = 0, i = t.decorations.length; e < i; e++)
          if (
            "@quotes" === t.decorations[e][0] &&
            "false" !== t.decorations[e][1]
          )
            return !0;
      return "object" == typeof t.blobs && y(t.blobs[t.blobs.length - 1]);
    }
    function L(t, e) {
      var i = e.strings.suffix.slice(-1);
      i || "string" != typeof e.blobs || (i = e.blobs.slice(-1));
      var s = _[t][i];
      return (
        !(!s || 1 !== s.length) ||
        ("object" == typeof e.blobs && !!L(t, e.blobs[e.blobs.length - 1]))
      );
    }
    function C(t, e) {
      if (!f[e]) return !1;
      if ("string" == typeof t.blobs) return t.blobs.slice(-1) === e;
      var i = t.blobs[t.blobs.length - 1];
      if (i) {
        var s = i.strings.suffix.slice(-1);
        return s ? i.strings.suffix.slice(-1) == e : C(i, e);
      }
      return !1;
    }
    function x(t, e, i, s, r) {
      var a = "blobs" === e ? t : t.strings,
        n = "blobs" === s ? i : i.strings,
        o = a[e].slice(-1),
        l = n[s].slice(0, 1);
      function u() {
        n[s] = n[s].slice(1);
      }
      function h() {
        a[e] = a[e].slice(0, -1);
      }
      function p(t) {
        n[s] = t + n[s];
      }
      function c(t) {
        a[e] += t;
      }
      var m = r ? h : u;
      var f = r
        ? function () {
            return b[o];
          }
        : function () {
            return _[l];
          };
      var d = r
          ? function () {
              var t = b[o][l];
              "string" == typeof t ? (h(), u(), p(t)) : (p(o), h());
            }
          : function () {
              var t = _[l][o];
              "string" == typeof t ? (h(), u(), c(t)) : (c(l), u());
            },
        g = o === l;
      g ? m() : f() && d();
    }
    function u(t) {
      var e = t.strings.suffix.slice(0, 1);
      if ("string" == typeof t.blobs)
        for (; i[e]; )
          x(t, "blobs", t, "suffix"), (e = t.strings.suffix.slice(0, 1));
      else
        for (; i[e]; )
          x(t.blobs[t.blobs.length - 1], "suffix", t, "suffix"),
            (e = t.strings.suffix.slice(0, 1));
    }
    function h(t) {
      if ("string" == typeof t.blobs)
        for (var e = t.blobs.slice(-1); s[e]; )
          x(t, "blobs", t, "suffix", !0), (e = t.blobs.slice(-1));
      else
        for (e = t.blobs[t.blobs.length - 1].strings.suffix.slice(-1); s[e]; )
          x(t.blobs[t.blobs.length - 1], "suffix", t, "suffix", !0),
            (e = t.blobs[t.blobs.length - 1].strings.suffix.slice(-1));
    }
  }),
  (CSL.Engine.Opt = function () {
    (this.has_disambiguate = !1),
      (this.mode = "html"),
      (this.dates = {}),
      (this.jurisdictions_seen = {}),
      (this.suppressedJurisdictions = {}),
      (this.inheritedAttributes = {}),
      (this["locale-sort"] = []),
      (this["locale-translit"] = []),
      (this["locale-translat"] = []),
      (this.citeAffixes = {
        persons: {
          "locale-orig": { prefix: "", suffix: "" },
          "locale-translit": { prefix: "", suffix: "" },
          "locale-translat": { prefix: "", suffix: "" },
        },
        institutions: {
          "locale-orig": { prefix: "", suffix: "" },
          "locale-translit": { prefix: "", suffix: "" },
          "locale-translat": { prefix: "", suffix: "" },
        },
        titles: {
          "locale-orig": { prefix: "", suffix: "" },
          "locale-translit": { prefix: "", suffix: "" },
          "locale-translat": { prefix: "", suffix: "" },
        },
        journals: {
          "locale-orig": { prefix: "", suffix: "" },
          "locale-translit": { prefix: "", suffix: "" },
          "locale-translat": { prefix: "", suffix: "" },
        },
        publishers: {
          "locale-orig": { prefix: "", suffix: "" },
          "locale-translit": { prefix: "", suffix: "" },
          "locale-translat": { prefix: "", suffix: "" },
        },
        places: {
          "locale-orig": { prefix: "", suffix: "" },
          "locale-translit": { prefix: "", suffix: "" },
          "locale-translat": { prefix: "", suffix: "" },
        },
      }),
      (this["default-locale"] = []),
      (this.update_mode = CSL.NONE),
      (this.bib_mode = CSL.NONE),
      (this.sort_citations = !1),
      (this["et-al-min"] = 0),
      (this["et-al-use-first"] = 1),
      (this["et-al-use-last"] = !1),
      (this["et-al-subsequent-min"] = !1),
      (this["et-al-subsequent-use-first"] = !1),
      (this["demote-non-dropping-particle"] = "display-and-sort"),
      (this["parse-names"] = !0),
      (this.citation_number_slug = !1),
      (this.trigraph = "Aaaa00:AaAa00:AaAA00:AAAA00"),
      (this.nodenames = []),
      (this.gender = {}),
      (this["cite-lang-prefs"] = {
        persons: ["orig"],
        institutions: ["orig"],
        titles: ["orig"],
        journals: ["orig"],
        publishers: ["orig"],
        places: ["orig"],
        number: ["orig"],
      }),
      (this.has_layout_locale = !1),
      (this.development_extensions = {}),
      (this.development_extensions.field_hack = !0),
      (this.development_extensions.allow_field_hack_date_override = !0),
      (this.development_extensions.locator_date_and_revision = !0),
      (this.development_extensions.locator_parsing_for_plurals = !0),
      (this.development_extensions.locator_label_parse = !0),
      (this.development_extensions.raw_date_parsing = !0),
      (this.development_extensions.clean_up_csl_flaws = !0),
      (this.development_extensions.flip_parentheses_to_braces = !0),
      (this.development_extensions.jurisdiction_subfield = !0),
      (this.development_extensions.static_statute_locator = !1),
      (this.development_extensions.csl_reverse_lookup_support = !1),
      (this.development_extensions.clobber_locator_if_no_statute_section = !1),
      (this.development_extensions.wrap_url_and_doi = !1),
      (this.development_extensions.allow_force_lowercase = !1),
      (this.development_extensions.handle_parallel_articles = !1),
      (this.development_extensions.thin_non_breaking_space_html_hack = !1),
      (this.development_extensions.apply_citation_wrapper = !1),
      (this.development_extensions.main_title_from_short_title = !1),
      (this.development_extensions.uppercase_subtitles = !1),
      (this.development_extensions.normalize_lang_keys_to_lowercase = !1),
      (this.development_extensions.strict_text_case_locales = !1),
      (this.development_extensions.rtl_support = !1),
      (this.development_extensions.expect_and_symbol_form = !1),
      (this.development_extensions.require_explicit_legal_case_title_short =
        !1),
      (this.development_extensions.spoof_institutional_affiliations = !1),
      (this.development_extensions.force_jurisdiction = !1),
      (this.development_extensions.parse_names = !0);
  }),
  (CSL.Engine.Tmp = function () {
    (this.names_max = new CSL.Stack()),
      (this.names_base = new CSL.Stack()),
      (this.givens_base = new CSL.Stack()),
      (this.value = []),
      (this.namepart_decorations = {}),
      (this.namepart_type = !1),
      (this.area = "citation"),
      (this.root = "citation"),
      (this.extension = ""),
      (this.can_substitute = new CSL.Stack(0, CSL.LITERAL)),
      (this.element_rendered_ok = !1),
      (this.element_trace = new CSL.Stack("style")),
      (this.nameset_counter = 0),
      (this.group_context = new CSL.Stack({
        term_intended: !1,
        variable_attempt: !1,
        variable_success: !1,
        output_tip: void 0,
        label_form: void 0,
        parallel_conditions: void 0,
        condition: !1,
        force_suppress: !1,
        done_vars: [],
      })),
      (this.term_predecessor = !1),
      (this.in_cite_predecessor = !1),
      (this.jump = new CSL.Stack(0, CSL.LITERAL)),
      (this.decorations = new CSL.Stack()),
      (this.tokenstore_stack = new CSL.Stack()),
      (this.last_suffix_used = ""),
      (this.last_names_used = []),
      (this.last_years_used = []),
      (this.years_used = []),
      (this.names_used = []),
      (this.taintedItemIDs = {}),
      (this.taintedCitationIDs = {}),
      (this.initialize_with = new CSL.Stack()),
      (this.disambig_request = !1),
      (this["name-as-sort-order"] = !1),
      (this.suppress_decorations = !1),
      (this.disambig_settings = new CSL.AmbigConfig()),
      (this.bib_sort_keys = []),
      (this.prefix = new CSL.Stack("", CSL.LITERAL)),
      (this.suffix = new CSL.Stack("", CSL.LITERAL)),
      (this.delimiter = new CSL.Stack("", CSL.LITERAL)),
      (this.cite_locales = []),
      (this.cite_affixes = {
        citation: !1,
        bibliography: !1,
        citation_sort: !1,
        bibliography_sort: !1,
      }),
      (this.strip_periods = 0),
      (this.shadow_numbers = {}),
      (this.authority_stop_last = 0),
      (this.loadedItemIDs = {});
  }),
  (CSL.Engine.Fun = function (t) {
    (this.match = new CSL.Util.Match()),
      (this.suffixator = new CSL.Util.Suffixator(CSL.SUFFIX_CHARS)),
      (this.romanizer = new CSL.Util.Romanizer()),
      (this.ordinalizer = new CSL.Util.Ordinalizer(t)),
      (this.long_ordinalizer = new CSL.Util.LongOrdinalizer());
  }),
  (CSL.Engine.Build = function () {
    (this["alternate-term"] = !1),
      (this.in_bibliography = !1),
      (this.in_style = !1),
      (this.skip = !1),
      (this.postponed_macro = !1),
      (this.layout_flag = !1),
      (this.name = !1),
      (this.form = !1),
      (this.term = !1),
      (this.macro = {}),
      (this.macro_stack = []),
      (this.text = !1),
      (this.lang = !1),
      (this.area = "citation"),
      (this.root = "citation"),
      (this.extension = ""),
      (this.substitute_level = new CSL.Stack(0, CSL.LITERAL)),
      (this.names_level = 0),
      (this.render_nesting_level = 0),
      (this.render_seen = !1);
  }),
  (CSL.Engine.Configure = function () {
    (this.fail = []), (this.succeed = []);
  }),
  (CSL.Engine.Citation = function (t) {
    (this.opt = { inheritedAttributes: {} }),
      (this.tokens = []),
      (this.srt = new CSL.Registry.Comparifier(t, "citation_sort")),
      (this.opt.collapse = []),
      (this.opt["disambiguate-add-names"] = !1),
      (this.opt["disambiguate-add-givenname"] = !1),
      (this.opt["disambiguate-add-year-suffix"] = !1),
      (this.opt["givenname-disambiguation-rule"] = "by-cite"),
      (this.opt["near-note-distance"] = 5),
      (this.opt.topdecor = []),
      (this.opt.layout_decorations = []),
      (this.opt.layout_prefix = ""),
      (this.opt.layout_suffix = ""),
      (this.opt.layout_delimiter = ""),
      (this.opt.sort_locales = []),
      (this.opt.max_number_of_names = 0),
      (this.root = "citation");
  }),
  (CSL.Engine.Bibliography = function () {
    (this.opt = { inheritedAttributes: {} }),
      (this.tokens = []),
      (this.opt.collapse = []),
      (this.opt.topdecor = []),
      (this.opt.layout_decorations = []),
      (this.opt.layout_prefix = ""),
      (this.opt.layout_suffix = ""),
      (this.opt.layout_delimiter = ""),
      (this.opt["line-spacing"] = 1),
      (this.opt["entry-spacing"] = 1),
      (this.opt.sort_locales = []),
      (this.opt.max_number_of_names = 0),
      (this.root = "bibliography");
  }),
  (CSL.Engine.BibliographySort = function () {
    (this.tokens = []),
      (this.opt = {}),
      (this.opt.sort_directions = []),
      (this.keys = []),
      (this.opt.topdecor = []),
      (this.root = "bibliography");
  }),
  (CSL.Engine.CitationSort = function () {
    (this.tokens = []),
      (this.opt = {}),
      (this.opt.sort_directions = []),
      (this.keys = []),
      (this.opt.topdecor = []),
      (this.root = "citation");
  }),
  (CSL.Engine.prototype.previewCitationCluster = function (t, e, i, s) {
    var r = this.opt.mode;
    this.setOutputFormat(s);
    var a = this.processCitationCluster(t, e, i, CSL.PREVIEW);
    return this.setOutputFormat(r), a[1];
  }),
  (CSL.Engine.prototype.appendCitationCluster = function (t) {
    for (
      var e = [], i = this.registry.citationreg.citationByIndex.length, s = 0;
      s < i;
      s += 1
    ) {
      var r = this.registry.citationreg.citationByIndex[s];
      e.push(["" + r.citationID, r.properties.noteIndex]);
    }
    return this.processCitationCluster(t, e, [])[1];
  }),
  (CSL.Engine.prototype.processCitationCluster = function (t, e, i, s) {
    var r, a, n, o, l, u, h, p, c, m, f, d;
    (this.debug = !1),
      (this.tmp.loadedItemIDs = {}),
      (this.tmp.citation_errors = []);
    var g,
      b,
      _,
      v = { bibchange: !1 };
    if ((this.setCitationId(t), s === CSL.PREVIEW)) {
      (g = this.registry.citationreg.citationByIndex.slice()),
        (b = this.registry.reflist.slice());
      for (
        var S = e
            .concat([["" + t.citationID, t.properties.noteIndex]])
            .concat(i),
          y = {},
          L = [],
          C = 0,
          x = S.length;
        C < x;
        C += 1
      )
        for (
          r = this.registry.citationreg.citationById[S[C][0]],
            a = 0,
            n = r.citationItems.length;
          a < n;
          a += 1
        )
          (y[r.citationItems[a].id] = !0), L.push("" + r.citationItems[a].id);
      _ = {};
      for (C = 0, x = b.length; C < x; C += 1)
        if (!y[b[C].id]) {
          var I = this.registry.registry[b[C].id].ambig,
            O = this.registry.ambigcites[I];
          if (O)
            for (a = 0, n = O.length; a < n; a += 1)
              _[O[a]] = CSL.cloneAmbigConfig(
                this.registry.registry[O[a]].disambig
              );
        }
    }
    this.tmp.taintedCitationIDs = {};
    var T = [],
      N = {};
    for (C = 0, x = t.citationItems.length; C < x; C += 1) {
      for (var A in ((c = {}), t.citationItems[C]))
        c[A] = t.citationItems[C][A];
      if (
        ((p = this.retrieveItem("" + c.id)),
        p.id && this.transform.loadAbbreviation("default", "hereinafter", p.id),
        (c = CSL.parseLocator.call(this, c)),
        this.opt.development_extensions.static_statute_locator &&
          this.remapSectionVariable([[p, c]]),
        this.opt.development_extensions.locator_label_parse &&
          c.locator &&
          -1 ===
            ["bill", "gazette", "legislation", "regulation", "treaty"].indexOf(
              p.type
            ) &&
          (!c.label || "page" === c.label))
      ) {
        var E = CSL.LOCATOR_LABELS_REGEXP.exec(c.locator);
        if (E) {
          var k = CSL.LOCATOR_LABELS_MAP[E[2]];
          this.getTerm(k) && ((c.label = k), (c.locator = E[3]));
        }
      }
      var R = [p, c];
      T.push(R), (t.citationItems[C].item = p);
    }
    t.sortedItems = T;
    var w = [];
    for (C = 0, x = e.length; C < x; C += 1)
      (r = e[C]),
        (this.registry.citationreg.citationById[r[0]].properties.noteIndex =
          r[1]),
        w.push(this.registry.citationreg.citationById[r[0]]);
    w.push(t);
    for (C = 0, x = i.length; C < x; C += 1)
      (r = i[C]),
        (this.registry.citationreg.citationById[r[0]].properties.noteIndex =
          r[1]),
        w.push(this.registry.citationreg.citationById[r[0]]);
    (this.registry.citationreg.citationByIndex = w),
      (this.registry.citationreg.citationsByItemId = {}),
      this.opt.update_mode === CSL.POSITION && ((f = []), (m = []), (d = {}));
    var j,
      D = [];
    for (C = 0, x = w.length; C < x; C += 1) {
      for (
        w[C].properties.index = C, a = 0, n = w[C].sortedItems.length;
        a < n;
        a += 1
      )
        (c = w[C].sortedItems[a]),
          this.registry.citationreg.citationsByItemId[c[1].id] ||
            ((this.registry.citationreg.citationsByItemId[c[1].id] = []),
            D.push("" + c[1].id)),
          -1 ===
            this.registry.citationreg.citationsByItemId[c[1].id].indexOf(
              w[C]
            ) &&
            this.registry.citationreg.citationsByItemId[c[1].id].push(w[C]);
      this.opt.update_mode === CSL.POSITION &&
        (w[C].properties.noteIndex
          ? m.push(w[C])
          : ((w[C].properties.noteIndex = 0), f.push(w[C])));
    }
    if (
      (s !== CSL.ASSUME_ALL_ITEMS_REGISTERED &&
        this.updateItems(D, null, null, !0),
      !this.opt.citation_number_sort &&
        T &&
        1 < T.length &&
        0 < this.citation_sort.tokens.length)
    ) {
      for (C = 0, x = T.length; C < x; C += 1)
        T[C][1].sortkeys = CSL.getSortKeys.call(this, T[C][0], "citation_sort");
      if (this.opt.grouped_sort && !t.properties.unsorted) {
        for (C = 0, x = T.length; C < x; C += 1) {
          var P = T[C][1].sortkeys;
          this.tmp.authorstring_request = !0;
          var U = this.registry.registry[T[C][0].id].disambig;
          (this.tmp.authorstring_request = !0),
            CSL.getAmbiguousCite.call(this, T[C][0], U);
          var B = this.registry.authorstrings[T[C][0].id];
          (this.tmp.authorstring_request = !1),
            (T[C][1].sortkeys = [B].concat(P));
        }
        T.sort(this.citation.srt.compareCompositeKeys);
        var M = !1,
          X = !1,
          q = !1;
        for (C = 0, x = T.length; C < x; C += 1)
          T[C][1].sortkeys[0] !== M &&
            ((q = T[C][1].sortkeys[0]), (X = T[C][1].sortkeys[1])),
            (T[C][1].sortkeys[0] = "" + X + C),
            (M = q);
      }
      t.properties.unsorted || T.sort(this.citation.srt.compareCompositeKeys);
    }
    if (this.opt.update_mode === CSL.POSITION)
      for (C = 0; C < 2; C += 1) {
        j = [f, m][C];
        var V = {},
          F = {};
        for (a = 0, n = j.length; a < n; a += 1) {
          var G = j[a];
          for (
            j[a].properties.noteIndex || (j[a].properties.noteIndex = 0),
              j[a].properties.noteIndex = parseInt(
                j[a].properties.noteIndex,
                10
              ),
              0 < a &&
                j[a - 1].properties.noteIndex > j[a].properties.noteIndex &&
                ((d = {}), (V = {}), (F = {})),
              o = 0,
              l = G.sortedItems.length;
            o < l;
            o += 1
          )
            this.registry.registry[G.sortedItems[o][1].id].parallel ||
              (d[G.properties.noteIndex]
                ? (d[G.properties.noteIndex] += 1)
                : (d[G.properties.noteIndex] = 1));
          for (o = 0, l = j[a].sortedItems.length; o < l; o += 1) {
            c = j[a].sortedItems[o];
            var z,
              $ = c[0].id,
              W = c[1].locator,
              H = c[1].label;
            if (
              (c[0].legislation_id && ($ = c[0].legislation_id),
              0 < o &&
                (z = G.sortedItems[o - 1][0].legislation_id
                  ? G.sortedItems[o - 1][0].legislation_id
                  : G.sortedItems[o - 1][1].id),
              s !== CSL.PREVIEW || G.citationID == t.citationID)
            ) {
              var Q,
                K = {};
              if (
                ((K.position = c[1].position),
                (K["first-reference-note-number"] =
                  c[1]["first-reference-note-number"]),
                (K["near-note"] = c[1]["near-note"]),
                (c[1]["first-reference-note-number"] = 0),
                (c[1]["near-note"] = !1),
                this.registry.citationreg.citationsByItemId[$] &&
                  "note" === this.opt.xclass &&
                  this.opt.has_disambiguate)
              ) {
                var J = this.registry.registry[$]["citation-count"],
                  Y = this.registry.citationreg.citationsByItemId[$].length;
                if (
                  ((this.registry.registry[$]["citation-count"] =
                    this.registry.citationreg.citationsByItemId[$].length),
                  "number" == typeof J)
                ) {
                  var Z = J < 2,
                    tt = Y < 2;
                  if (Z !== tt)
                    for (
                      var et = 0,
                        it =
                          this.registry.citationreg.citationsByItemId[$].length;
                      et < it;
                      et++
                    )
                      (N[this.registry.registry[$].ambig] = !0),
                        (this.tmp.taintedCitationIDs[
                          this.registry.citationreg.citationsByItemId[$][
                            et
                          ].citationID
                        ] = !0);
                } else
                  for (
                    et = 0,
                      it =
                        this.registry.citationreg.citationsByItemId[$].length;
                    et < it;
                    et++
                  )
                    (N[this.registry.registry[$].ambig] = !0),
                      (this.tmp.taintedCitationIDs[
                        this.registry.citationreg.citationsByItemId[$][
                          et
                        ].citationID
                      ] = !0);
              }
              if (void 0 === V[$])
                (V[$] = G.properties.noteIndex),
                  this.registry.registry[$] &&
                    (this.registry.registry[$]["first-reference-note-number"] =
                      G.properties.noteIndex),
                  (F[$] = G.properties.noteIndex),
                  (c[1].position = CSL.POSITION_FIRST);
              else {
                var st,
                  rt,
                  at,
                  nt,
                  ot,
                  lt = !1,
                  ut = !1;
                if (
                  (0 < a &&
                    ((Q = j[a - 1].sortedItems.slice(-1)[0][1].id),
                    j[a - 1].sortedItems[0].slice(-1)[0].legislation_id &&
                      (Q =
                        j[a - 1].sortedItems[0].slice(-1)[0].legislation_id)),
                  0 < a &&
                    0 === parseInt(o, 10) &&
                    j[a - 1].properties.noteIndex !== j[a].properties.noteIndex)
                ) {
                  var ht = j[a - 1].sortedItems,
                    pt = !1,
                    ct = j[a - 1].sortedItems[0][0].id;
                  for (
                    j[a - 1].sortedItems[0][0].legislation_id &&
                      (ct = j[a - 1].sortedItems[0][0].legislation_id),
                      ((ct == $ &&
                        j[a - 1].properties.noteIndex >=
                          j[a].properties.noteIndex - 1) ||
                        j[a - 1].sortedItems[0][1].id ==
                          this.registry.registry[c[1].id].parallel) &&
                        ((1 !== d[j[a - 1].properties.noteIndex] &&
                          0 !== j[a - 1].properties.noteIndex) ||
                          (pt = !0)),
                      u = 0,
                      h = ht.slice(1).length;
                    u < h;
                    u += 1
                  ) {
                    var mt = ht.slice(1)[u];
                    (this.registry.registry[mt[1].id].parallel &&
                      this.registry.registry[mt[1].id].parallel !=
                        this.registry.registry[mt[1].id]) ||
                      (pt = !1);
                  }
                  pt ? (lt = !0) : (ut = !0);
                } else
                  0 < o && z == $
                    ? (lt = !0)
                    : 0 === o &&
                      j[a - 1].properties.noteIndex ==
                        j[a].properties.noteIndex &&
                      j[a - 1].sortedItems.length &&
                      Q == $
                    ? (lt = !0)
                    : (ut = !0);
                if (
                  (lt &&
                    ((st =
                      0 < o
                        ? G.sortedItems[o - 1][1]
                        : j[a - 1].sortedItems[0][1]),
                    (rt = st.locator
                      ? ((at = st.label ? st.label : ""), "" + st.locator + at)
                      : st.locator),
                    (nt = W ? ((ot = H || ""), "" + W + ot) : W)),
                  lt && rt && !nt && ((lt = !1), (ut = !0)),
                  lt &&
                    (!rt && nt
                      ? (c[1].position = CSL.POSITION_IBID_WITH_LOCATOR)
                      : rt || nt
                      ? rt && nt === rt
                        ? (c[1].position = CSL.POSITION_IBID)
                        : rt && nt && nt !== rt
                        ? (c[1].position = CSL.POSITION_IBID_WITH_LOCATOR)
                        : ((lt = !1), (ut = !0))
                      : (c[1].position = CSL.POSITION_IBID)),
                  ut && (c[1].position = CSL.POSITION_SUBSEQUENT),
                  (ut || lt) &&
                    V[$] != G.properties.noteIndex &&
                    ((c[1]["first-reference-note-number"] = V[$]),
                    this.registry.registry[$]))
                ) {
                  var ft =
                      this.registry.citationreg.citationsByItemId[$][0]
                        .properties.noteIndex,
                    dt = G.properties.noteIndex;
                  this.registry.registry[$]["first-reference-note-number"] =
                    dt < ft ? dt : ft;
                }
              }
              if (G.properties.noteIndex) {
                var gt =
                  parseInt(G.properties.noteIndex, 10) - parseInt(F[$], 10);
                c[1].position !== CSL.POSITION_FIRST &&
                  gt <= this.citation.opt["near-note-distance"] &&
                  (c[1]["near-note"] = !0),
                  (F[$] = G.properties.noteIndex);
              }
              if (G.citationID != t.citationID)
                for (u = 0, h = CSL.POSITION_TEST_VARS.length; u < h; u += 1) {
                  var bt = CSL.POSITION_TEST_VARS[u];
                  c[1][bt] !== K[bt] &&
                    (this.registry.registry[$] &&
                      "first-reference-note-number" === bt &&
                      ((N[this.registry.registry[$].ambig] = !0),
                      (this.tmp.taintedItemIDs[$] = !0)),
                    (this.tmp.taintedCitationIDs[G.citationID] = !0));
                }
              this.sys.variableWrapper &&
                ((c[1].index = G.properties.index),
                (c[1].noteIndex = G.properties.noteIndex));
            } else
              void 0 === V[c[1].id] && (V[$] = G.properties.noteIndex),
                (F[$] = G.properties.noteIndex);
          }
        }
      }
    if (
      this.opt.citation_number_sort &&
      T &&
      1 < T.length &&
      0 < this.citation_sort.tokens.length &&
      !t.properties.unsorted
    ) {
      for (C = 0, x = T.length; C < x; C += 1)
        T[C][1].sortkeys = CSL.getSortKeys.call(this, T[C][0], "citation_sort");
      T.sort(this.citation.srt.compareCompositeKeys);
    }
    for (var A in this.tmp.taintedItemIDs)
      if (
        this.tmp.taintedItemIDs.hasOwnProperty(A) &&
        ((j = this.registry.citationreg.citationsByItemId[A]), j)
      )
        for (C = 0, x = j.length; C < x; C += 1)
          this.tmp.taintedCitationIDs[j[C].citationID] = !0;
    var _t = [];
    if (s === CSL.PREVIEW) {
      try {
        _t = this.process_CitationCluster.call(
          this,
          t.sortedItems,
          t.citationID
        );
      } catch (t) {
        CSL.error("Error running CSL processor for preview: " + t);
      }
      (this.registry.citationreg.citationByIndex = g),
        (this.registry.citationreg.citationById = {});
      for (C = 0, x = g.length; C < x; C += 1)
        this.registry.citationreg.citationById[g[C].citationID] = g[C];
      var vt = [];
      for (C = 0, x = b.length; C < x; C += 1) vt.push("" + b[C].id);
      for (var A in (this.updateItems(vt, null, null, !0), _))
        _.hasOwnProperty(A) && (this.registry.registry[A].disambig = _[A]);
    } else {
      for (var St in N) this.disambiguate.run(St, t);
      var yt;
      for (var A in this.tmp.taintedCitationIDs)
        if (A != t.citationID) {
          var Lt = this.registry.citationreg.citationById[A];
          if (!Lt.properties.unsorted) {
            for (C = 0, x = Lt.sortedItems.length; C < x; C += 1)
              Lt.sortedItems[C][1].sortkeys = CSL.getSortKeys.call(
                this,
                Lt.sortedItems[C][0],
                "citation_sort"
              );
            Lt.sortedItems.sort(this.citation.srt.compareCompositeKeys);
          }
          (this.tmp.citation_pos = Lt.properties.index),
            (this.tmp.citation_note_index = Lt.properties.noteIndex),
            (this.tmp.citation_id = "" + Lt.citationID),
            (yt = []),
            yt.push(Lt.properties.index),
            yt.push(
              this.process_CitationCluster.call(
                this,
                Lt.sortedItems,
                Lt.citationID
              )
            ),
            yt.push(Lt.citationID),
            _t.push(yt);
        }
      (this.tmp.taintedItemIDs = {}),
        (this.tmp.taintedCitationIDs = {}),
        (this.tmp.citation_pos = t.properties.index),
        (this.tmp.citation_note_index = t.properties.noteIndex),
        (this.tmp.citation_id = "" + t.citationID),
        (yt = []),
        yt.push(e.length),
        yt.push(this.process_CitationCluster.call(this, T, t.citationID)),
        yt.push(t.citationID),
        _t.push(yt),
        _t.sort(function (t, e) {
          return t[0] > e[0] ? 1 : t[0] < e[0] ? -1 : 0;
        });
    }
    return (v.citation_errors = this.tmp.citation_errors.slice()), [v, _t];
  }),
  (CSL.Engine.prototype.process_CitationCluster = function (t, e) {
    var i;
    return (
      this.parallel.StartCitation(t),
      (i = CSL.getCitationCluster.call(this, t, e)),
      i
    );
  }),
  (CSL.Engine.prototype.makeCitationCluster = function (t) {
    var e, i, s, r, a, n, o;
    for (e = [], a = t.length, r = 0; r < a; r += 1) {
      for (var l in ((n = {}), t[r])) n[l] = t[r][l];
      if (
        ((o = this.retrieveItem("" + n.id)),
        this.opt.development_extensions.locator_label_parse &&
          n.locator &&
          -1 ===
            ["bill", "gazette", "legislation", "regulation", "treaty"].indexOf(
              o.type
            ) &&
          (!n.label || "page" === n.label))
      ) {
        var u = CSL.LOCATOR_LABELS_REGEXP.exec(n.locator);
        if (u) {
          var h = CSL.LOCATOR_LABELS_MAP[u[2]];
          this.getTerm(h) && ((n.label = h), (n.locator = u[3]));
        }
      }
      n.locator && (n.locator = ("" + n.locator).replace(/\s+$/, "")),
        (i = [o, n]),
        e.push(i);
    }
    if (
      (this.opt.development_extensions.static_statute_locator &&
        this.remapSectionVariable(e),
      e && 1 < e.length && 0 < this.citation_sort.tokens.length)
    ) {
      for (a = e.length, r = 0; r < a; r += 1)
        e[r][1].sortkeys = CSL.getSortKeys.call(this, e[r][0], "citation_sort");
      e.sort(this.citation.srt.compareCompositeKeys);
    }
    return (
      (this.tmp.citation_errors = []),
      this.parallel.StartCitation(e),
      (s = CSL.getCitationCluster.call(this, e)),
      s
    );
  }),
  (CSL.getAmbiguousCite = function (t, e, i, s) {
    var r = this.tmp.group_context.tip,
      a = {
        term_intended: r.term_intended,
        variable_attempt: r.variable_attempt,
        variable_success: r.variable_success,
        output_tip: r.output_tip,
        label_form: r.label_form,
        parallel_conditions: r.parallel_conditions,
        condition: r.condition,
        force_suppress: r.force_suppress,
        done_vars: r.done_vars.slice(),
      };
    this.tmp.disambig_request = e || !1;
    var n = { position: 1, "near-note": !0 };
    s && ((n.locator = s.locator), (n.label = s.label)),
      this.registry.registry[t.id] &&
        this.registry.citationreg.citationsByItemId &&
        this.registry.citationreg.citationsByItemId[t.id] &&
        this.registry.citationreg.citationsByItemId[t.id].length &&
        i &&
        "by-cite" === this.citation.opt["givenname-disambiguation-rule"] &&
        (n["first-reference-note-number"] =
          this.registry.registry[t.id]["first-reference-note-number"]),
      (this.tmp.area = "citation"),
      (this.tmp.root = "citation"),
      (this.parallel.use_parallels =
        (!0 === this.parallel.use_parallels ||
          null === this.parallel.use_parallels) &&
        null),
      (this.tmp.suppress_decorations = !0),
      (this.tmp.just_looking = !0),
      CSL.getCite.call(this, t, n, null, !1);
    for (var o = 0, l = this.output.queue.length; o < l; o += 1)
      CSL.Output.Queue.purgeEmptyBlobs(this.output.queue[o]);
    if (this.opt.development_extensions.clean_up_csl_flaws)
      for (var u = 0, h = this.output.queue.length; u < h; u += 1)
        this.output.adjust.upward(this.output.queue[u]),
          this.output.adjust.leftward(this.output.queue[u]),
          this.output.adjust.downward(this.output.queue[u]),
          this.output.adjust.fix(this.output.queue[u]);
    var p = this.output.string(this, this.output.queue);
    return (
      (this.tmp.just_looking = !1),
      (this.tmp.suppress_decorations = !1),
      (this.parallel.use_parallels = null === this.parallel.use_parallels),
      this.tmp.group_context.replace(a),
      p
    );
  }),
  (CSL.getSpliceDelimiter = function (t, e) {
    if (
      t &&
      !this.tmp.have_collapsed &&
      "string" == typeof this.citation.opt["after-collapse-delimiter"]
    )
      this.tmp.splice_delimiter = this.citation.opt["after-collapse-delimiter"];
    else if (this.tmp.use_cite_group_delimiter)
      this.tmp.splice_delimiter = this.citation.opt.cite_group_delimiter;
    else if (
      this.tmp.have_collapsed &&
      "in-text" === this.opt.xclass &&
      this.opt.update_mode !== CSL.NUMERIC
    )
      this.tmp.splice_delimiter = ", ";
    else if (this.tmp.cite_locales[e - 1]) {
      var i =
        this.tmp.cite_affixes[this.tmp.area][this.tmp.cite_locales[e - 1]];
      i && i.delimiter && (this.tmp.splice_delimiter = i.delimiter);
    } else this.tmp.splice_delimiter || (this.tmp.splice_delimiter = "");
    return this.tmp.splice_delimiter;
  }),
  (CSL.getCitationCluster = function (t, e) {
    var i, s, r, a, n, o, l, u, h, p, c, m, f, d, g, b, _, v;
    (t = t || []),
      (this.tmp.last_primary_names_string = !1),
      (_ = CSL.getSafeEscape(this)),
      (this.tmp.area = "citation"),
      (this.tmp.root = "citation"),
      (i = ""),
      (s = []),
      (this.tmp.last_suffix_used = ""),
      (this.tmp.last_names_used = []),
      (this.tmp.last_years_used = []),
      (this.tmp.backref_index = []),
      (this.tmp.cite_locales = []),
      (this.output.checkNestedBrace = new CSL.checkNestedBrace(this));
    var S = this.output.checkNestedBrace.update(
        this.citation.opt.layout_prefix
      ),
      y = !1;
    if (
      ("note" === this.opt.xclass &&
        this.citation.opt.suppressTrailingPunctuation &&
        (y = !0),
      e &&
        this.registry.citationreg.citationById[e].properties[
          "suppress-trailing-punctuation"
        ] &&
        (y = !0),
      "note" === this.opt.xclass)
    ) {
      for (
        var L = [], C = !1, x = !1, I = [], O = 0, T = t.length;
        O < T;
        O += 1
      ) {
        var N = t[O][0].type,
          A = t[O][0].title,
          E = t[O][1].position,
          k = t[O][0].id;
        A &&
          "legal_case" === N &&
          k !== x &&
          E &&
          ((A === C && 0 !== L.length) || ((I = []), L.push(I)),
          I.push(t[O][1])),
          (C = A),
          E,
          (x = k);
      }
      for (O = 0, T = L.length; O < T; O += 1)
        if (((I = L[O]), !(I.length < 2))) {
          var R = I.slice(-1)[0].locator;
          if (R)
            for (var w = 0, j = I.length - 1; w < j; w += 1)
              I[w].locator && (R = !1);
          R &&
            ((I[0].locator = R),
            delete I.slice(-1)[0].locator,
            (I[0].label = I.slice(-1)[0].label),
            I.slice(-1)[0].label && delete I.slice(-1)[0].label);
        }
    }
    for (r = [], a = t.length, n = 0; n < a; n += 1) {
      if (
        ((m = t[n][0]),
        (o = t[n][1]),
        (o = CSL.parseLocator.call(this, o)),
        (l = this.tmp.have_collapsed),
        (u = {}),
        (this.tmp.shadow_numbers = {}),
        !this.tmp.just_looking && this.opt.hasPlaceholderTerm)
      ) {
        var D = this.output;
        (this.output = new CSL.Output.Queue(this)),
          (this.output.adjust = new CSL.Output.Queue.adjust()),
          CSL.getAmbiguousCite.call(this, m, null, !1, o),
          (this.output = D);
      }
      if (
        ((this.tmp.in_cite_predecessor = !1),
        0 < n
          ? CSL.getCite.call(this, m, o, "" + t[n - 1][0].id, !0)
          : ((this.tmp.term_predecessor = !1),
            CSL.getCite.call(this, m, o, null, !0)),
        this.tmp.cite_renders_content ||
          ((v = {
            citationID: "" + this.tmp.citation_id,
            index: this.tmp.citation_pos,
            noteIndex: this.tmp.citation_note_index,
            itemID: "" + m.id,
            citationItems_pos: n,
            error_code: CSL.ERROR_NO_RENDERED_FORM,
          }),
          this.tmp.citation_errors.push(v)),
        n === t.length - 1 && this.parallel.ComposeSet(),
        (u.splice_delimiter = CSL.getSpliceDelimiter.call(this, l, n)),
        o && o["author-only"] && (this.tmp.suppress_decorations = !0),
        0 < n)
      ) {
        b = t[n - 1][1];
        var P = b.suffix && -1 < [".", ","].indexOf(b.suffix.slice(-1)),
          U =
            !b.suffix &&
            o.prefix &&
            -1 < [".", ","].indexOf(o.prefix.slice(0, 1));
        if (P || U) {
          var B = u.splice_delimiter.indexOf(" ");
          u.splice_delimiter = -1 < B && !U ? u.splice_delimiter.slice(B) : "";
        }
      }
      (u.suppress_decorations = this.tmp.suppress_decorations),
        (u.have_collapsed = this.tmp.have_collapsed),
        r.push(u);
    }
    (this.tmp.has_purged_parallel = !1),
      this.parallel.PruneOutputQueue(this),
      (c = this.output.queue.slice());
    this.citation.opt.layout_suffix, this.citation.opt.layout_delimiter;
    var M = this.citation.opt.layout_suffix,
      X = this.tmp.cite_locales[this.tmp.cite_locales.length - 1];
    X &&
      this.tmp.cite_affixes[this.tmp.area][X] &&
      this.tmp.cite_affixes[this.tmp.area][X].suffix &&
      (M = this.tmp.cite_affixes[this.tmp.area][X].suffix),
      -1 < CSL.TERMINAL_PUNCTUATION.slice(0, -1).indexOf(M.slice(0, 1)) &&
        (M = M.slice(0, 1));
    var q = this.citation.opt.layout_delimiter;
    q || (q = ""),
      -1 < CSL.TERMINAL_PUNCTUATION.slice(0, -1).indexOf(q.slice(0, 1)) &&
        (q = q.slice(0, 1)),
      (M = this.output.checkNestedBrace.update(M));
    for (O = 0, T = this.output.queue.length; O < T; O += 1)
      CSL.Output.Queue.purgeEmptyBlobs(this.output.queue[O]);
    if (
      (!this.tmp.suppress_decorations &&
        this.output.queue.length &&
        ((this.opt.development_extensions.apply_citation_wrapper &&
          this.sys.wrapCitationEntry &&
          !this.tmp.just_looking &&
          "citation" === this.tmp.area) ||
          (y ||
            (this.output.queue[this.output.queue.length - 1].strings.suffix =
              M),
          (this.output.queue[0].strings.prefix = S))),
      this.opt.development_extensions.clean_up_csl_flaws)
    )
      for (w = 0, j = this.output.queue.length; w < j; w += 1)
        this.output.adjust.upward(this.output.queue[w]),
          this.output.adjust.leftward(this.output.queue[w]),
          this.output.adjust.downward(this.output.queue[w]),
          (this.tmp.last_chr = this.output.adjust.fix(this.output.queue[w]));
    for (n = 0, a = c.length; n < a; n += 1) {
      var V = [];
      if (
        ((this.output.queue = [c[n]]),
        (this.tmp.suppress_decorations = r[n].suppress_decorations),
        (this.tmp.splice_delimiter = r[n].splice_delimiter),
        c[n].parallel_delimiter &&
          (this.tmp.splice_delimiter = c[n].parallel_delimiter),
        (this.tmp.have_collapsed = r[n].have_collapsed),
        (h = this.output.string(this, this.output.queue)),
        (this.tmp.suppress_decorations = !1),
        "string" == typeof h)
      )
        return (this.tmp.suppress_decorations = !1), h;
      if ("object" == typeof h && 0 === h.length && !o["suppress-author"])
        if (this.tmp.has_purged_parallel) h.push("");
        else {
          var F = 0 === n ? _(this.citation.opt.layout_prefix) : "",
            G = n === c.length - 1 ? _(this.citation.opt.layout_suffix) : "";
          h.push(F + "[CSL STYLE ERROR: reference with no printed form.]" + G);
        }
      if (V.length && "string" == typeof h[0]) {
        h.reverse();
        var z = h.pop();
        z && "," === z.slice(0, 1)
          ? V.push(z)
          : "string" == typeof V.slice(-1)[0] &&
            "," === V.slice(-1)[0].slice(-1)
          ? V.push(" " + z)
          : z && V.push(_(this.tmp.splice_delimiter) + z);
      } else
        h.reverse(),
          (p = h.pop()),
          void 0 !== p &&
            (V.length &&
              "string" == typeof V[V.length - 1] &&
              (V[V.length - 1] += p.successor_prefix),
            V.push(p));
      for (f = h.length, d = 0; d < f; d += 1)
        (g = h[d]),
          "string" != typeof g
            ? ((p = h.pop()), void 0 !== p && V.push(p))
            : V.push(_(this.tmp.splice_delimiter) + g);
      0 !== V.length || t[n][1]["suppress-author"] || 1,
        1 < V.length &&
          "string" != typeof V[0] &&
          (V = [this.output.renderBlobs(V)]),
        V.length &&
          ("string" == typeof V[0]
            ? 0 < n &&
              (c.length - 1 > n &&
                r[n + 1].have_collapsed &&
                !r[n].have_collapsed &&
                (this.tmp.splice_delimiter = r[n - 1].splice_delimiter),
              (V[0] = _(this.tmp.splice_delimiter) + V[0]))
            : (V[0].splice_prefix = 0 < n ? this.tmp.splice_delimiter : "")),
        (s = s.concat(V));
    }
    if (
      ((i += this.output.renderBlobs(s)), i && !this.tmp.suppress_decorations)
    )
      for (
        a = this.citation.opt.layout_decorations.length, n = 0;
        n < a;
        n += 1
      )
        (u = this.citation.opt.layout_decorations[n]),
          "normal" !== u[1] &&
            ((o && o["author-only"]) ||
              (i = this.fun.decorate[u[0]][u[1]](this, i)));
    return (this.tmp.suppress_decorations = !1), i;
  }),
  (CSL.getCite = function (t, e, i, s) {
    var r, a;
    for (
      this.tmp.cite_renders_content = !1,
        this.parallel.StartCite(t, e, i),
        CSL.citeStart.call(this, t, e, s),
        r = 0,
        this.tmp.name_node = {},
        this.nameOutput = new CSL.NameOutput(this, t, e);
      r < this[this.tmp.area].tokens.length;

    )
      r = CSL.tokenExec.call(this, this[this.tmp.area].tokens[r], t, e);
    return (
      CSL.citeEnd.call(this, t, e),
      this.parallel.CloseCite(this),
      this.tmp.cite_renders_content ||
        this.tmp.just_looking ||
        ("bibliography" === this.tmp.area &&
          ((a = {
            index: this.tmp.bibliography_pos,
            itemID: "" + t.id,
            error_code: CSL.ERROR_NO_RENDERED_FORM,
          }),
          this.tmp.bibliography_errors.push(a))),
      "" + t.id
    );
  }),
  (CSL.citeStart = function (t, e, i) {
    if (
      (i || (this.tmp.shadow_numbers = {}),
      (this.tmp.disambiguate_count = 0),
      (this.tmp.disambiguate_maxMax = 0),
      (this.tmp.same_author_as_previous_cite = !1),
      this.tmp.suppress_decorations
        ? (this.tmp.subsequent_author_substitute_ok = !1)
        : (this.tmp.subsequent_author_substitute_ok = !0),
      (this.tmp.lastchr = ""),
      "citation" === this.tmp.area &&
      this.citation.opt.collapse &&
      this.citation.opt.collapse.length
        ? (this.tmp.have_collapsed = !0)
        : (this.tmp.have_collapsed = !1),
      (this.tmp.render_seen = !1),
      this.tmp.disambig_request && !this.tmp.disambig_override
        ? (this.tmp.disambig_settings = this.tmp.disambig_request)
        : this.registry.registry[t.id] && !this.tmp.disambig_override
        ? ((this.tmp.disambig_request = this.registry.registry[t.id].disambig),
          (this.tmp.disambig_settings = this.registry.registry[t.id].disambig))
        : (this.tmp.disambig_settings = new CSL.AmbigConfig()),
      "citation" !== this.tmp.area)
    )
      if (this.registry.registry[t.id]) {
        if (
          ((this.tmp.disambig_restore = CSL.cloneAmbigConfig(
            this.registry.registry[t.id].disambig
          )),
          "bibliography" === this.tmp.area &&
            this.tmp.disambig_settings &&
            this.tmp.disambig_override &&
            (this.opt["disambiguate-add-names"] &&
              ((this.tmp.disambig_settings.names =
                this.registry.registry[t.id].disambig.names.slice()),
              this.tmp.disambig_request &&
                (this.tmp.disambig_request.names =
                  this.registry.registry[t.id].disambig.names.slice())),
            this.opt["disambiguate-add-givenname"]))
        ) {
          (this.tmp.disambig_request = this.tmp.disambig_settings),
            (this.tmp.disambig_settings.givens =
              this.registry.registry[t.id].disambig.givens.slice()),
            (this.tmp.disambig_request.givens =
              this.registry.registry[t.id].disambig.givens.slice());
          for (
            var s = 0, r = this.tmp.disambig_settings.givens.length;
            s < r;
            s += 1
          )
            this.tmp.disambig_settings.givens[s] =
              this.registry.registry[t.id].disambig.givens[s].slice();
          for (
            s = 0, r = this.tmp.disambig_request.givens.length;
            s < r;
            s += 1
          )
            this.tmp.disambig_request.givens[s] =
              this.registry.registry[t.id].disambig.givens[s].slice();
        }
      } else this.tmp.disambig_restore = new CSL.AmbigConfig();
    (this.tmp.names_used = []),
      (this.tmp.nameset_counter = 0),
      (this.tmp.years_used = []),
      this.tmp.names_max.clear(),
      (this.tmp.splice_delimiter = this[this.tmp.area].opt.layout_delimiter),
      (this.bibliography_sort.keys = []),
      (this.citation_sort.keys = []),
      (this.tmp.has_done_year_suffix = !1),
      (this.tmp.last_cite_locale = !1),
      !this.tmp.just_looking &&
        e &&
        !e.position &&
        this.registry.registry[t.id] &&
        (this.tmp.disambig_restore = CSL.cloneAmbigConfig(
          this.registry.registry[t.id].disambig
        )),
      (this.tmp.first_name_string = !1),
      (this.tmp.authority_stop_last = 0);
  }),
  (CSL.citeEnd = function (t, e) {
    if (this.tmp.disambig_restore && this.registry.registry[t.id]) {
      (this.registry.registry[t.id].disambig.names =
        this.tmp.disambig_restore.names.slice()),
        (this.registry.registry[t.id].disambig.givens =
          this.tmp.disambig_restore.givens.slice());
      for (
        var i = 0, s = this.registry.registry[t.id].disambig.givens.length;
        i < s;
        i += 1
      )
        this.registry.registry[t.id].disambig.givens[i] =
          this.tmp.disambig_restore.givens[i].slice();
    }
    if (
      ((this.tmp.disambig_restore = !1),
      e && e.suffix
        ? (this.tmp.last_suffix_used = e.suffix)
        : (this.tmp.last_suffix_used = ""),
      (this.tmp.last_years_used = this.tmp.years_used.slice()),
      (this.tmp.last_names_used = this.tmp.names_used.slice()),
      (this.tmp.cut_var = !1),
      (this.tmp.disambig_request = !1),
      this.tmp.cite_locales.push(this.tmp.last_cite_locale),
      this.tmp.issued_date && this.tmp.renders_collection_number)
    ) {
      var r = [];
      for (
        i = this.tmp.issued_date.list.length - 1;
        i > this.tmp.issued_date.pos;
        i += -1
      )
        r.push(this.tmp.issued_date.list.pop());
      for (this.tmp.issued_date.list.pop(), i = r.length - 1; -1 < i; i += -1)
        this.tmp.issued_date.list.push(r.pop());
      this.parallel.use_parallels && (this.parallel.cite.issued = !1);
    }
    (this.tmp.issued_date = !1), (this.tmp.renders_collection_number = !1);
  }),
  (CSL.Engine.prototype.makeBibliography = function (t) {
    var e, i, s, r, a, n, o;
    if ((!1, !this.bibliography.tokens.length)) return !1;
    "string" == typeof t && ((this.opt.citation_number_slug = t), (t = !1)),
      (e = CSL.getBibliographyEntries.call(this, t)),
      (n = e[0]),
      (o = e[1]);
    var l = e[2];
    for (
      i = {
        maxoffset: 0,
        entryspacing: this.bibliography.opt["entry-spacing"],
        linespacing: this.bibliography.opt["line-spacing"],
        "second-field-align": !1,
        entry_ids: n,
        bibliography_errors: this.tmp.bibliography_errors.slice(),
        done: l,
      },
        this.bibliography.opt["second-field-align"] &&
          (i["second-field-align"] =
            this.bibliography.opt["second-field-align"]),
        0,
        r = this.registry.reflist.length,
        a = 0;
      a < r;
      a += 1
    )
      (s = this.registry.reflist[a]),
        s.offset > i.maxoffset && (i.maxoffset = s.offset);
    return (
      this.bibliography.opt.hangingindent &&
        (i.hangingindent = this.bibliography.opt.hangingindent),
      (i.bibstart = this.fun.decorate.bibstart),
      (i.bibend = this.fun.decorate.bibend),
      (this.opt.citation_number_slug = !1),
      [i, o]
    );
  }),
  (CSL.getBibliographyEntries = function (t) {
    var e, i, s, r, a, n, o, l, u, h, p, c, m, f, d, g, b, _, v;
    function S(t, e) {
      return t === e;
    }
    function y(t, e) {
      return (
        !(("none" !== t && t) || e) ||
        ("string" == typeof e
          ? S(t, e)
          : !!e &&
            (function (t, e) {
              for (u = e.length, h = 0; h < u; h += 1)
                if (S(t, e[h])) return !0;
              return !1;
            })(t, e))
      );
    }
    if (
      ((e = []),
      (_ = []),
      (this.tmp.area = "bibliography"),
      (this.tmp.root = "bibliography"),
      (this.tmp.last_rendered_name = !1),
      (this.tmp.bibliography_errors = []),
      (this.tmp.bibliography_pos = 0),
      (i =
        t && t.page_start && t.page_length
          ? this.registry.getSortedIds()
          : this.retrieveItems(this.registry.getSortedIds())),
      (this.tmp.disambig_override = !0),
      (d = {}),
      t && t.page_start && t.page_length && ((v = 0), !0 !== t.page_start))
    )
      for (
        var L = 0, C = i.length;
        L < C && ((d[i[L]] = !0), t.page_start != i[L]);
        L += 1
      );
    var x = [];
    for (L = 0, C = i.length; L < C; L += 1) {
      if (t && t.page_start && t.page_length) {
        if (d[i[L]]) continue;
        if (((o = this.retrieveItem(i[L])), v === t.page_length)) break;
      } else if (((o = i[L]), d[o.id])) continue;
      if (t) {
        if (((s = !0), t.include)) {
          for (s = !1, O = 0, T = t.include.length; O < T; O += 1)
            if (((l = t.include[O]), y(l.value, o[l.field]))) {
              s = !0;
              break;
            }
        } else if (t.exclude) {
          for (r = !1, O = 0, T = t.exclude.length; O < T; O += 1)
            if (((l = t.exclude[O]), y(l.value, o[l.field]))) {
              r = !0;
              break;
            }
          r && (s = !1);
        } else if (t.select) {
          for (s = !1, a = !0, O = 0, T = t.select.length; O < T; O += 1)
            (l = t.select[O]), y(l.value, o[l.field]) || (a = !1);
          a && (s = !0);
        }
        if (t.quash) {
          for (a = !0, O = 0, T = t.quash.length; O < T; O += 1)
            (l = t.quash[O]), y(l.value, o[l.field]) || (a = !1);
          a && (s = !1);
        }
        if (!s) continue;
      }
      if (
        ((n = new CSL.Token("group", CSL.START)),
        (n.decorations = [["@bibliography", "entry"]].concat(
          this.bibliography.opt.layout_decorations
        )),
        this.output.startTag("bib_entry", n),
        o.system_id && this.sys.embedBibliographyEntry
          ? (this.output.current.value().item_id = o.system_id)
          : (this.output.current.value().system_id = o.id),
        (g = [[{ id: "" + o.id }, o]]),
        (c = []),
        !this.registry.registry[o.id].master ||
          (t && t.page_start && t.page_length))
      )
        this.registry.registry[o.id].siblings ||
          (this.parallel.StartCitation(g),
          (this.tmp.term_predecessor = !1),
          c.push("" + CSL.getCite.call(this, o)),
          t && t.page_start && t.page_length && (v += 1));
      else {
        for (
          m = !0,
            this.parallel.StartCitation(g),
            this.output.queue[0].strings.delimiter = ", ",
            this.tmp.term_predecessor = !1,
            c.push("" + CSL.getCite.call(this, o)),
            d[o.id] = !0,
            f = this.registry.registry[o.id].siblings,
            O = 0,
            T = f.length;
          O < T;
          O += 1
        ) {
          var I = this.registry.registry[o.id].siblings[O];
          (b = this.retrieveItem(I)),
            c.push("" + CSL.getCite.call(this, b)),
            (d[b.id] = !0);
        }
        this.parallel.ComposeSet(), this.parallel.PruneOutputQueue();
      }
      _.push(""),
        (this.tmp.bibliography_pos += 1),
        x.push(c),
        this.output.endTag("bib_entry"),
        this.output.queue[0].blobs.length &&
          this.output.queue[0].blobs[0].blobs.length &&
          (m || !this.output.queue[0].blobs[0].blobs[0].strings
            ? ((p = this.output.queue[0].blobs), (m = !1))
            : (p = this.output.queue[0].blobs[0].blobs),
          (p[0].strings.prefix =
            this.bibliography.opt.layout_prefix + p[0].strings.prefix));
      for (var O = 0, T = this.output.queue.length; O < T; O += 1)
        CSL.Output.Queue.purgeEmptyBlobs(this.output.queue[O]);
      for (O = 0, T = this.output.queue.length; O < T; O += 1)
        this.output.adjust.upward(this.output.queue[O]),
          this.output.adjust.leftward(this.output.queue[O]),
          this.output.adjust.downward(this.output.queue[O], !0),
          this.output.adjust.fix(this.output.queue[O]);
      var N = this.output.string(this, this.output.queue)[0];
      if (!N && this.opt.update_mode === CSL.NUMERIC) {
        var A =
          e.length + 1 + ". [CSL STYLE ERROR: reference with no printed form.]";
        N = CSL.Output.Formats[this.opt.mode]["@bibliography/entry"](this, A);
      }
      N && e.push(N);
    }
    var E = !1;
    if (t && t.page_start && t.page_length) {
      var k = i.slice(-1)[0],
        R = x.slice(-1)[0];
      (k && R && k != R) || (E = !0);
    }
    return (this.tmp.disambig_override = !1), [x, e, E];
  }),
  (CSL.Engine.prototype.setCitationId = function (t, e) {
    var i, s, r;
    if (((i = !1), !t.citationID || e)) {
      for (s = Math.floor(1e14 * Math.random()); ; ) {
        if (((r = 0), !this.registry.citationreg.citationById[s])) {
          t.citationID = "a" + s.toString(32);
          break;
        }
        (r = !r && s < 5e13 ? 1 : -1), (s += 1 === r ? 1 : -1);
      }
      i = "" + s;
    }
    return (this.registry.citationreg.citationById[t.citationID] = t), i;
  }),
  (CSL.Engine.prototype.rebuildProcessorState = function (t, e, i) {
    t || (t = []), e || (e = "html");
    for (var s = {}, r = [], a = 0, n = t.length; a < n; a += 1)
      for (var o = 0, l = t[a].citationItems.length; o < l; o += 1) {
        var u = "" + t[a].citationItems[o].id;
        s[u] || r.push(u), (s[u] = !0);
      }
    this.updateItems(r);
    var h = [],
      p = [],
      c = [],
      m = this.opt.mode;
    this.setOutputFormat(e);
    for (a = 0, n = t.length; a < n; a += 1) {
      var f = this.processCitationCluster(
        t[a],
        h,
        p,
        CSL.ASSUME_ALL_ITEMS_REGISTERED
      );
      h.push([t[a].citationID, t[a].properties.noteIndex]);
      for (o = 0, l = f[1].length; o < l; o += 1) {
        var d = f[1][o][0];
        c[d] = [h[d][0], h[d][1], f[1][o][1]];
      }
    }
    return this.updateUncitedItems(i), this.setOutputFormat(m), c;
  }),
  (CSL.Engine.prototype.restoreProcessorState = function (t) {
    var e, i, s, r, a, n, o, l, u, h;
    (l = []), (u = []), t || (t = []);
    var p = [],
      c = {};
    for (e = 0, i = t.length; e < i; e += 1)
      c[t[e].citationID] && this.setCitationId(t[e], !0),
        (c[t[e].citationID] = !0),
        p.push(t[e].properties.index);
    var m = t.slice();
    for (
      m.sort(function (t, e) {
        return t.properties.index < e.properties.index
          ? -1
          : t.properties.index > e.properties.index
          ? 1
          : 0;
      }),
        e = 0,
        i = m.length;
      e < i;
      e += 1
    )
      m[e].properties.index = e;
    for (e = 0, i = m.length; e < i; e += 1) {
      for (h = [], s = 0, r = m[e].citationItems.length; s < r; s += 1)
        (a = m[e].citationItems[s]),
          void 0 === a.sortkeys && (a.sortkeys = []),
          (n = this.retrieveItem("" + a.id)),
          (o = [n, a]),
          h.push(o),
          (m[e].citationItems[s].item = n),
          u.push("" + a.id);
      m[e].properties.unsorted ||
        h.sort(this.citation.srt.compareCompositeKeys),
        (m[e].sortedItems = h),
        (this.registry.citationreg.citationById[m[e].citationID] = m[e]);
    }
    for (this.updateItems(u), e = 0, i = t.length; e < i; e += 1)
      l.push(["" + t[e].citationID, t[e].properties.noteIndex]);
    var f = [];
    return (
      t && t.length
        ? (f = this.processCitationCluster(t[0], [], l.slice(1)))
        : ((this.registry = new CSL.Registry(this)),
          (this.tmp = new CSL.Engine.Tmp()),
          (this.disambiguate = new CSL.Disambiguation(this))),
      f
    );
  }),
  (CSL.Engine.prototype.updateItems = function (t, e, i, s) {
    var r = this.tmp.area,
      a = this.tmp.root,
      n = this.tmp.extension;
    if (
      ((this.tmp.area = "citation"),
      (this.tmp.root = "citation"),
      (this.tmp.extension = ""),
      s || (this.tmp.loadedItemIDs = {}),
      this.registry.init(t),
      i)
    )
      for (var o in this.registry.ambigcites)
        this.registry.ambigsTouched[o] = !0;
    return (
      this.registry.dodeletes(this.registry.myhash),
      this.registry.doinserts(this.registry.mylist),
      this.registry.dorefreshes(),
      this.registry.rebuildlist(),
      this.registry.setsortkeys(),
      this.registry.setdisambigs(),
      e || this.registry.sorttokens(),
      this.registry.renumber(),
      (this.tmp.extension = n),
      (this.tmp.area = r),
      (this.tmp.root = a),
      this.registry.getSortedIds()
    );
  }),
  (CSL.Engine.prototype.updateUncitedItems = function (t, e) {
    var i = this.tmp.area,
      s = this.tmp.root,
      r = this.tmp.extension;
    if (
      ((this.tmp.area = "citation"),
      (this.tmp.root = "citation"),
      (this.tmp.extension = ""),
      (this.tmp.loadedItemIDs = {}),
      t || (t = []),
      "object" == typeof t)
    )
      if (void 0 === t.length) {
        var a = t;
        for (var n in ((t = []), a)) t.push(n);
      } else if ("number" == typeof t.length) {
        a = {};
        for (var o = 0, l = t.length; o < l; o += 1) a[t[o]] = !0;
      }
    return (
      this.registry.init(t, !0),
      this.registry.dopurge(a),
      this.registry.doinserts(this.registry.mylist),
      this.registry.dorefreshes(),
      this.registry.rebuildlist(),
      this.registry.setsortkeys(),
      this.registry.setdisambigs(),
      e || this.registry.sorttokens(),
      this.registry.renumber(),
      (this.tmp.extension = r),
      (this.tmp.area = i),
      (this.tmp.root = s),
      this.registry.getSortedIds()
    );
  }),
  (CSL.localeResolve = function (t, e) {
    var i, s;
    return (
      e || (e = "en-US"),
      t || (t = e),
      (i = {}),
      (s = t.split(/[\-_]/)),
      (i.base = CSL.LANG_BASES[s[0]]),
      void 0 === i.base
        ? { base: e, best: t, bare: s[0] }
        : (1 === s.length && (i.generic = !0),
          1 === s.length || "x" === s[1]
            ? (i.best = i.base.replace("_", "-"))
            : (i.best = s.slice(0, 2).join("-")),
          (i.base = i.base.replace("_", "-")),
          (i.bare = s[0]),
          i)
    );
  }),
  (CSL.Engine.prototype.localeConfigure = function (t, e) {
    var i;
    if (
      (!e || !this.locale[t.best]) &&
      ("en-US" === t.best
        ? ((i = CSL.setupXml(this.sys.retrieveLocale("en-US"))),
          this.localeSet(i, "en-US", t.best))
        : "en-US" !== t.best &&
          (t.base !== t.best &&
            ((i = CSL.setupXml(this.sys.retrieveLocale(t.base))),
            this.localeSet(i, t.base, t.best)),
          (i = CSL.setupXml(this.sys.retrieveLocale(t.best))),
          this.localeSet(i, t.best, t.best)),
      this.localeSet(this.cslXml, "", t.best),
      this.localeSet(this.cslXml, t.bare, t.best),
      t.base !== t.best && this.localeSet(this.cslXml, t.base, t.best),
      this.localeSet(this.cslXml, t.best, t.best),
      void 0 === this.locale[t.best].terms["page-range-delimiter"] &&
        (-1 < ["fr", "pt"].indexOf(t.best.slice(0, 2).toLowerCase())
          ? (this.locale[t.best].terms["page-range-delimiter"] = "-")
          : (this.locale[t.best].terms["page-range-delimiter"] = "–")),
      void 0 === this.locale[t.best].terms["year-range-delimiter"] &&
        (this.locale[t.best].terms["year-range-delimiter"] = "–"),
      void 0 === this.locale[t.best].terms["citation-range-delimiter"] &&
        (this.locale[t.best].terms["citation-range-delimiter"] = "–"),
      this.opt.development_extensions.normalize_lang_keys_to_lowercase)
    ) {
      for (
        var s = [
            "default-locale",
            "locale-sort",
            "locale-translit",
            "locale-translat",
          ],
          r = 0,
          a = s.length;
        r < a;
        r += 1
      )
        for (var n = 0, o = this.opt[s[r]].length; n < o; n += 1)
          this.opt[s[r]][n] = this.opt[s[r]][n].toLowerCase();
      this.opt.lang = this.opt.lang.toLowerCase();
    }
  }),
  (CSL.Engine.prototype.localeSet = function (t, e, i) {
    var s, r, a, n, o, l, u, h, p, c, m, f;
    if (
      ((e = e.replace("_", "-")),
      (i = i.replace("_", "-")),
      this.opt.development_extensions.normalize_lang_keys_to_lowercase &&
        ((e = e.toLowerCase()), (i = i.toLowerCase())),
      this.locale[i] ||
        ((this.locale[i] = {}),
        (this.locale[i].terms = {}),
        (this.locale[i].opts = {}),
        (this.locale[i].opts["skip-words"] = CSL.SKIP_WORDS),
        this.locale[i].opts["leading-noise-words"] ||
          (this.locale[i].opts["leading-noise-words"] = []),
        (this.locale[i].dates = {}),
        (this.locale[i].ord = { "1.0.1": !1, keys: {} }),
        (this.locale[i]["noun-genders"] = {})),
      (r = t.makeXml()),
      t.nodeNameIs(t.dataObj, "locale"))
    )
      r = t.dataObj;
    else
      for (
        a = t.getNodesByName(t.dataObj, "locale"),
          o = 0,
          m = t.numberofnodes(a);
        o < m;
        o += 1
      )
        if (((s = a[o]), t.getAttributeValue(s, "lang", "xml") === e)) {
          r = s;
          break;
        }
    for (
      a = t.getNodesByName(r, "type"), j = 0, D = t.numberofnodes(a);
      j < D;
      j += 1
    ) {
      var d = a[j],
        g = t.getAttributeValue(d, "name"),
        b = t.getAttributeValue(d, "gender");
      this.opt.gender[g] = b;
    }
    var _ = t.getNodesByName(r, "term", "ordinal").length;
    if (_) {
      for (var v in this.locale[i].ord.keys) delete this.locale[i].terms[v];
      this.locale[i].ord = { "1.0.1": !1, keys: {} };
    }
    a = t.getNodesByName(r, "term");
    var S = { "last-digit": {}, "last-two-digits": {}, "whole-number": {} },
      y = !1,
      L = {};
    for (o = 0, m = t.numberofnodes(a); o < m; o += 1) {
      if (
        ((l = a[o]),
        (h = t.getAttributeValue(l, "name")),
        "sub verbo" === h && (h = "sub-verbo"),
        "ordinal" === h.slice(0, 7))
      ) {
        t.getNodeValue(l);
        if ("ordinal" === h) y = !0;
        else {
          var C = t.getAttributeValue(l, "match"),
            x = h.slice(8),
            I = t.getAttributeValue(l, "gender-form");
          I || (I = "neuter"),
            C ||
              ((C = "last-two-digits"),
              "0" === x.slice(0, 1) && (C = "last-digit")),
            "0" === x.slice(0, 1) && (x = x.slice(1)),
            S[C][x] || (S[C][x] = {}),
            (S[C][x][I] = h);
        }
        this.locale[i].ord.keys[h] = !0;
      }
      void 0 === this.locale[i].terms[h] && (this.locale[i].terms[h] = {}),
        (u = "long"),
        (I = !1),
        t.getAttributeValue(l, "form") && (u = t.getAttributeValue(l, "form")),
        t.getAttributeValue(l, "gender-form") &&
          (I = t.getAttributeValue(l, "gender-form")),
        t.getAttributeValue(l, "gender") &&
          (this.locale[i]["noun-genders"][h] = t.getAttributeValue(
            l,
            "gender"
          )),
        I
          ? ((this.locale[i].terms[h][I] = {}),
            (this.locale[i].terms[h][I][u] = []),
            (f = this.locale[i].terms[h][I]),
            (L[h] = !0))
          : ((this.locale[i].terms[h][u] = []), (f = this.locale[i].terms[h])),
        t.numberofnodes(t.getNodesByName(l, "multiple"))
          ? ((f[u][0] = t.getNodeValue(l, "single")),
            -1 < f[u][0].indexOf("%s") && (this.opt.hasPlaceholderTerm = !0),
            (f[u][1] = t.getNodeValue(l, "multiple")),
            -1 < f[u][1].indexOf("%s") && (this.opt.hasPlaceholderTerm = !0))
          : ((f[u] = t.getNodeValue(l)),
            -1 < f[u].indexOf("%s") && (this.opt.hasPlaceholderTerm = !0));
    }
    if (y) {
      for (var O in L) {
        var T = {},
          N = 0;
        for (var A in this.locale[i].terms[O])
          -1 < ["masculine", "feminine"].indexOf(A)
            ? (T[A] = this.locale[i].terms[O][A])
            : (N += 1);
        if (!N)
          if (T.feminine)
            for (var A in T.feminine)
              this.locale[i].terms[O][A] = T.feminine[A];
          else if (T.masculine)
            for (var A in T.masculine)
              this.locale[i].terms[O][A] = T.masculine[A];
      }
      this.locale[i].ord["1.0.1"] = S;
    }
    for (h in this.locale[i].terms)
      for (j = 0, D = 2; j < D; j += 1)
        if (((I = CSL.GENDERS[j]), this.locale[i].terms[h][I]))
          for (u in this.locale[i].terms[h])
            this.locale[i].terms[h][I][u] ||
              (this.locale[i].terms[h][I][u] = this.locale[i].terms[h][u]);
    for (
      a = t.getNodesByName(r, "style-options"), o = 0, m = t.numberofnodes(a);
      o < m;
      o += 1
    )
      for (c in ((p = a[o]), (n = t.attributes(p)), n))
        if (n.hasOwnProperty(c))
          if (
            "@punctuation-in-quote" === c ||
            "@limit-day-ordinals-to-day-1" === c
          )
            "true" === n[c]
              ? (this.locale[i].opts[c.slice(1)] = !0)
              : (this.locale[i].opts[c.slice(1)] = !1);
          else if ("@jurisdiction-preference" === c) {
            var E = n[c].split(/\s*,\s*/);
            this.locale[i].opts[c.slice(1)] = E;
          } else if ("@skip-words" === c) {
            var k = n[c].split(/\s*,\s*/);
            this.locale[i].opts[c.slice(1)] = k;
          } else if ("@leading-noise-words" === c) {
            var R = n[c].split(/\s*,\s*/);
            this.locale[i].opts["leading-noise-words"] = R;
          } else if ("@name-as-sort-order" === c) {
            this.locale[i].opts["name-as-sort-order"] = {};
            for (var w = n[c].split(/\s+/), j = 0, D = w.length; j < D; j += 1)
              this.locale[i].opts["name-as-sort-order"][w[j]] = !0;
          } else if ("@name-as-reverse-order" === c) {
            this.locale[i].opts["name-as-reverse-order"] = {};
            for (w = n[c].split(/\s+/), j = 0, D = w.length; j < D; j += 1)
              this.locale[i].opts["name-as-reverse-order"][w[j]] = !0;
          } else if ("@name-never-short" === c) {
            this.locale[i].opts["name-never-short"] = {};
            for (w = n[c].split(/\s+/), j = 0, D = w.length; j < D; j += 1)
              this.locale[i].opts["name-never-short"][w[j]] = !0;
          }
    for (
      a = t.getNodesByName(r, "date"), o = 0, m = t.numberofnodes(a);
      o < m;
      o += 1
    ) {
      var P = a[o];
      this.locale[i].dates[t.getAttributeValue(P, "form")] = P;
    }
  }),
  (CSL.getLocaleNames = function (t, e) {
    var o = CSL.setupXml(t);
    function i(t, e) {
      var i = ["base", "best"];
      if (e) {
        normalizedLocale = CSL.localeResolve(e);
        for (var s = 0, r = i.length; s < r; s++)
          normalizedLocale[i[s]] &&
            -1 === t.indexOf(normalizedLocale[i[s]]) &&
            t.push(normalizedLocale[i[s]]);
      }
    }
    function s(t) {
      for (
        var e = o.getNodesByName(o.dataObj, t), i = 0, s = e.length;
        i < s;
        i++
      ) {
        var r = o.getAttributeValue(e[i], "locale");
        if (r) {
          r = r.split(/ +/);
          for (var a = 0, n = r.length; a < n; a++)
            this.extendLocaleList(l, r[a]);
        }
      }
    }
    var l = ["en-US"];
    i(l, e);
    var r = o.getNodesByName(o.dataObj, "style")[0],
      a = o.getAttributeValue(r, "default-locale");
    i(l, a);
    for (
      var n = ["layout", "if", "else-if", "condition"], u = 0, h = n.length;
      u < h;
      u++
    )
      s(o);
    return l;
  }),
  (CSL.Node = {}),
  (CSL.Node.bibliography = {
    build: function (t, e) {
      if (this.tokentype === CSL.START) {
        (t.build.area = "bibliography"),
          (t.build.root = "bibliography"),
          (t.build.extension = "");
        this.execs.push(function (t, e) {
          (t.tmp.area = "bibliography"),
            (t.tmp.root = "bibliography"),
            (t.tmp.extension = "");
        });
      }
      e.push(this);
    },
  }),
  (CSL.Node.choose = {
    build: function (t, e) {
      var i;
      this.tokentype === CSL.START &&
        (i = function (t, e) {
          t.tmp.jump.push(void 0, CSL.LITERAL);
        }),
        this.tokentype === CSL.END &&
          (i = function (t, e) {
            t.tmp.jump.pop();
          }),
        this.execs.push(i),
        e.push(this);
    },
    configure: function (t, e) {
      this.tokentype === CSL.END
        ? (t.configure.fail.push(e), t.configure.succeed.push(e))
        : (t.configure.fail.pop(), t.configure.succeed.pop());
    },
  }),
  (CSL.Node.citation = {
    build: function (t, e) {
      if (this.tokentype === CSL.START) {
        (t.build.area = "citation"),
          (t.build.root = "citation"),
          (t.build.extension = "");
        this.execs.push(function (t, e) {
          (t.tmp.area = "citation"),
            (t.tmp.root = "citation"),
            (t.tmp.extension = "");
        });
      }
      if (this.tokentype === CSL.END) {
        if (
          ((t.opt.grouped_sort =
            ("in-text" === t.opt.xclass &&
              t.citation.opt.collapse &&
              t.citation.opt.collapse.length) ||
            (t.citation.opt.cite_group_delimiter &&
              t.citation.opt.cite_group_delimiter.length &&
              t.opt.update_mode !== CSL.POSITION &&
              t.opt.update_mode !== CSL.NUMERIC)),
          t.opt.grouped_sort && t.citation_sort.opt.sort_directions.length)
        ) {
          var i = t.citation_sort.opt.sort_directions[0].slice();
          t.citation_sort.opt.sort_directions = [i].concat(
            t.citation_sort.opt.sort_directions
          );
        }
        t.citation.srt = new CSL.Registry.Comparifier(t, "citation_sort");
      }
      e.push(this);
    },
  }),
  (CSL.Node["#comment"] = { build: function (t, e) {} }),
  (CSL.Node.date = {
    build: function (t, e) {
      var i, r, a, n, o, l, u, h, p, c;
      (this.tokentype !== CSL.START && this.tokentype !== CSL.SINGLETON) ||
        ((t.build.date_parts = []),
        (t.build.date_variables = this.variables),
        t.build.extension || CSL.Util.substituteStart.call(this, t, e),
        (i = t.build.extension
          ? CSL.dateMacroAsSortKey
          : function (t, e, i) {
              var s;
              if (
                ((t.tmp.element_rendered_ok = !1),
                (t.tmp.donesies = []),
                (t.tmp.dateparts = []),
                (s = []),
                !this.variables.length ||
                  (t.tmp.just_looking && "accessed" === this.variables[0]))
              )
                t.tmp.date_object = !1;
              else {
                for (
                  r = e[this.variables[0]],
                    void 0 === r &&
                      ((r = { "date-parts": [[0]] }),
                      t.opt.development_extensions.locator_date_and_revision &&
                        i &&
                        "locator-date" === this.variables[0] &&
                        i["locator-date"] &&
                        (r = i["locator-date"])),
                    t.tmp.date_object = r,
                    a = this.dateparts.length,
                    n = 0;
                  n < a;
                  n += 1
                )
                  (o = this.dateparts[n]),
                    void 0 !== t.tmp.date_object[o + "_end"]
                      ? s.push(o)
                      : "month" === o &&
                        void 0 !== t.tmp.date_object.season_end &&
                        s.push(o);
                for (
                  l = [], u = ["year", "month", "day"], a = u.length, n = 0;
                  n < a;
                  n += 1
                )
                  -1 < s.indexOf(u[n]) && l.push(u[n]);
                for (s = l.slice(), h = 2, a = s.length, n = 0; n < a; n += 1)
                  if (
                    ((o = s[n]),
                    (p = t.tmp.date_object[o]),
                    (c = t.tmp.date_object[o + "_end"]),
                    p !== c)
                  ) {
                    h = n;
                    break;
                  }
                t.tmp.date_collapse_at = s.slice(h);
              }
            }),
        this.execs.push(i),
        (i = function (t, e) {
          if (
            e[this.variables[0]] &&
            (t.parallel.StartVariable(this.variables[0]),
            t.output.startTag("date", this),
            "issued" === this.variables[0] &&
              "legal_case" === e.type &&
              !t.tmp.extension &&
              "" + e["collection-number"] == "" + t.tmp.date_object.year &&
              1 === this.dateparts.length &&
              "year" === this.dateparts[0])
          )
            for (var i in t.tmp.date_object)
              if (
                t.tmp.date_object.hasOwnProperty(i) &&
                "year" === i.slice(0, 4)
              ) {
                t.tmp.issued_date = {};
                var s = t.output.current.mystack.slice(-2)[0].blobs;
                (t.tmp.issued_date.list = s),
                  (t.tmp.issued_date.pos = s.length - 1);
              }
        }),
        this.execs.push(i)),
        t.build.extension ||
          (this.tokentype !== CSL.END && this.tokentype !== CSL.SINGLETON) ||
          ((i = function (t, e) {
            e[this.variables[0]] &&
              (t.output.endTag(), t.parallel.CloseVariable(this.variables[0]));
          }),
          this.execs.push(i)),
        e.push(this),
        (this.tokentype !== CSL.END && this.tokentype !== CSL.SINGLETON) ||
          t.build.extension ||
          CSL.Util.substituteEnd.call(this, t, e);
    },
  }),
  (CSL.Node["date-part"] = {
    build: function (t, e) {
      var i, l, u, h, p, c, m, f, d, g, b, _, v, S, y, L, C, x, I, O;
      this.strings.form || (this.strings.form = "long"),
        t.build.date_parts.push(this.strings.name);
      var T = t.build.date_variables[0];
      (i = function (t, e) {
        if (t.tmp.date_object) {
          if (
            ((h = !0),
            (p = ""),
            (c = ""),
            t.tmp.donesies.push(this.strings.name),
            t.tmp.date_object.literal &&
              "year" === this.strings.name &&
              (t.parallel.AppendToVariable(t.tmp.date_object.literal),
              t.output.append(t.tmp.date_object.literal, this)),
            t.tmp.date_object &&
              ((p = t.tmp.date_object[this.strings.name]),
              (c = t.tmp.date_object[this.strings.name + "_end"])),
            "year" !== this.strings.name ||
              0 !== p ||
              t.tmp.suppress_decorations ||
              (p = !1),
            (m = !t.tmp.suppress_decorations),
            (f = t.tmp.have_collapsed),
            (d =
              "year-suffix" === t[t.tmp.area].opt.collapse ||
              "year-suffix-ranged" === t[t.tmp.area].opt.collapse),
            (g = t.opt["disambiguate-add-year-suffix"]),
            m &&
              g &&
              d &&
              (t.tmp.years_used.push(p),
              (b = t.tmp.last_years_used.length >= t.tmp.years_used.length),
              b &&
                f &&
                t.tmp.last_years_used[t.tmp.years_used.length - 1] === p &&
                (p = !1)),
            void 0 !== p)
          ) {
            (_ = !1),
              (v = !1),
              !1,
              !1,
              "year" === this.strings.name &&
                (parseInt(p, 10) < 500 &&
                  0 < parseInt(p, 10) &&
                  (v = t.getTerm("ad")),
                parseInt(p, 10) < 0 &&
                  ((_ = t.getTerm("bc")), (p = -1 * parseInt(p, 10))),
                c &&
                  (parseInt(c, 10) < 500 &&
                    0 < parseInt(c, 10) &&
                    t.getTerm("ad"),
                  parseInt(c, 10) < 0 &&
                    (t.getTerm("bc"), (c = -1 * parseInt(c, 10))))),
              t.parallel.AppendToVariable(p);
            for (var i = "" + t.tmp.date_object.month; i.length < 2; )
              i = "0" + i;
            i = "month-" + i;
            var s = t.locale[t.opt.lang]["noun-genders"][i];
            if (this.strings.form) {
              var r = this.strings.form;
              if (
                ("day" === this.strings.name &&
                  "ordinal" === r &&
                  t.locale[t.opt.lang].opts["limit-day-ordinals-to-day-1"] &&
                  "" + p != "1" &&
                  (r = "numeric"),
                (p = CSL.Util.Dates[this.strings.name][r](
                  t,
                  p,
                  s,
                  this.default_locale
                )),
                "month" === this.strings.name)
              )
                if (t.tmp.strip_periods) p = p.replace(/\./g, "");
                else
                  for (var a = 0, n = this.decorations.length; a < n; a += 1)
                    if (
                      "@strip-periods" === this.decorations[a][0] &&
                      "true" === this.decorations[a][1]
                    ) {
                      p = p.replace(/\./g, "");
                      break;
                    }
              if (c)
                if (
                  ((c = CSL.Util.Dates[this.strings.name][r](
                    t,
                    c,
                    s,
                    "accessed" === T,
                    "_end"
                  )),
                  t.tmp.strip_periods)
                )
                  c = c.replace(/\./g, "");
                else
                  for (a = 0, n = this.decorations.length; a < n; a += 1)
                    if (
                      "@strip-periods" === this.decorations[a][0] &&
                      "true" === this.decorations[a][1]
                    ) {
                      c = c.replace(/\./g, "");
                      break;
                    }
            }
            if ((t.output.openLevel("empty"), t.tmp.date_collapse_at.length)) {
              for (
                S = !0, u = t.tmp.date_collapse_at.length, l = 0;
                l < u;
                l += 1
              )
                if (
                  ((O = t.tmp.date_collapse_at[l]),
                  -1 === t.tmp.donesies.indexOf(O))
                ) {
                  S = !1;
                  break;
                }
              if (S) {
                if ("" + c != "0") {
                  if (
                    (0 === t.dateput.queue.length && (h = !0),
                    t.opt["year-range-format"] &&
                      "expanded" !== t.opt["year-range-format"] &&
                      !t.tmp.date_object.day &&
                      !t.tmp.date_object.month &&
                      !t.tmp.date_object.season &&
                      "year" === this.strings.name &&
                      p &&
                      c)
                  ) {
                    c = t.fun.year_mangler(p + "-" + c, !0);
                    var o = t.getTerm("year-range-delimiter");
                    c = c.slice(c.indexOf(o) + 1);
                  }
                  t.dateput.append(c, this),
                    h && (t.dateput.current.value()[0].strings.prefix = "");
                }
                t.output.append(p, this),
                  (y = t.output.current.value()),
                  (y.blobs[y.blobs.length - 1].strings.suffix = ""),
                  t.output.append(t.getTerm("year-range-delimiter"), "empty"),
                  (L = t.dateput.current.value()),
                  (y.blobs = y.blobs.concat(L)),
                  t.dateput.string(t, t.dateput.queue),
                  (t.tmp.date_collapse_at = []);
              } else
                t.output.append(p, this),
                  -1 < t.tmp.date_collapse_at.indexOf(this.strings.name) &&
                    "" + c != "0" &&
                    (0 === t.dateput.queue.length && (h = !0),
                    t.dateput.openLevel("empty"),
                    t.dateput.append(c, this),
                    h &&
                      (t.dateput.current.value().blobs[0].strings.prefix = ""),
                    _ && t.dateput.append(_),
                    v && t.dateput.append(v),
                    t.dateput.closeLevel());
            } else t.output.append(p, this);
            _ && t.output.append(_),
              v && t.output.append(v),
              t.output.closeLevel();
          } else
            "month" === this.strings.name &&
              t.tmp.date_object.season &&
              ((p = "" + t.tmp.date_object.season),
              p && p.match(/^[1-4]$/)
                ? ((t.tmp.group_context.tip.variable_success = !0),
                  t.output.append(t.getTerm("season-0" + p), this))
                : p && t.output.append(p, this));
          (t.tmp.value = []),
            !e[T] ||
              (!p && !t.tmp.have_collapsed) ||
              t.opt.has_year_suffix ||
              "year" !== this.strings.name ||
              t.tmp.just_looking ||
              (t.registry.registry[e.id] &&
                !1 !== t.registry.registry[e.id].disambig.year_suffix &&
                !t.tmp.has_done_year_suffix &&
                ((t.tmp.has_done_year_suffix = !0),
                (x = parseInt(
                  t.registry.registry[e.id].disambig.year_suffix,
                  10
                )),
                (C = new CSL.NumericBlob(!1, x, this, e.id)),
                (this.successor_prefix = t[t.build.area].opt.layout_delimiter),
                (this.splice_prefix = t[t.build.area].opt.layout_delimiter),
                (I = new CSL.Util.Suffixator(CSL.SUFFIX_CHARS)),
                C.setFormatter(I),
                "year-suffix-ranged" === t[t.tmp.area].opt.collapse &&
                  (C.range_prefix = t.getTerm("citation-range-delimiter")),
                t[t.tmp.area].opt.cite_group_delimiter
                  ? (C.successor_prefix =
                      t[t.tmp.area].opt.cite_group_delimiter)
                  : t[t.tmp.area].opt["year-suffix-delimiter"]
                  ? (C.successor_prefix =
                      t[t.tmp.area].opt["year-suffix-delimiter"])
                  : (C.successor_prefix = t[t.tmp.area].opt.layout_delimiter),
                (C.UGLY_DELIMITER_SUPPRESS_HACK = !0),
                t.output.append(C, "literal")));
        }
      }),
        this.execs.push(i),
        e.push(this);
    },
  }),
  (CSL.Node["else-if"] = {
    build: function (t, e) {
      CSL.Conditions.TopNode.call(this, t, e), e.push(this);
    },
    configure: function (t, e) {
      CSL.Conditions.Configure.call(this, t, e);
    },
  }),
  (CSL.Node.else = {
    build: function (t, e) {
      e.push(this);
    },
    configure: function (t, e) {
      this.tokentype === CSL.START &&
        (t.configure.fail[t.configure.fail.length - 1] = e);
    },
  }),
  (CSL.Node["et-al"] = {
    build: function (t, e) {
      if ("citation" === t.build.area || "bibliography" === t.build.area) {
        this.execs.push(function (t, e, i) {
          (t.tmp.etal_node = this),
            "string" == typeof this.strings.term &&
              (t.tmp.etal_term = this.strings.term);
        });
      }
      e.push(this);
    },
  }),
  (CSL.Node.group = {
    build: function (c, t, e) {
      var i, s, m;
      if (
        ((this.realGroup = e),
        this.tokentype === CSL.START &&
          (CSL.Util.substituteStart.call(this, c, t),
          c.build.substitute_level.value() &&
            c.build.substitute_level.replace(
              c.build.substitute_level.value() + 1
            ),
          this.juris || t.push(this),
          (i = function (t, e) {
            if (
              (t.output.startTag("group", this),
              this.strings.label_form_override &&
                (t.tmp.group_context.tip.label_form ||
                  (t.tmp.group_context.tip.label_form =
                    this.strings.label_form_override)),
              this.realGroup)
            ) {
              var i = !1,
                s = !1;
              t.tmp.group_context.mystack.length &&
                (t.output.current.value().parent =
                  t.tmp.group_context.tip.output_tip);
              var r = t.tmp.group_context.tip.label_form;
              r || (r = this.strings.label_form_override),
                t.tmp.group_context.tip.condition
                  ? ((i = t.tmp.group_context.tip.condition),
                    (s = t.tmp.group_context.tip.force_suppress))
                  : this.strings.reject
                  ? ((i = { test: this.strings.reject, not: !0 }), (s = !0), [])
                  : this.strings.require &&
                    ((i = { test: this.strings.require, not: !1 }), []),
                t.tmp.group_context.push({
                  term_intended: !1,
                  variable_attempt: !1,
                  variable_success: !1,
                  variable_success_parent:
                    t.tmp.group_context.tip.variable_success,
                  output_tip: t.output.current.tip,
                  label_form: r,
                  parallel_conditions: this.strings.set_parallel_condition,
                  condition: i,
                  force_suppress: s,
                  done_vars: t.tmp.group_context.tip.done_vars.slice(),
                });
            }
          }),
          (s = []),
          s.push(i),
          (this.execs = s.concat(this.execs)),
          this.strings["has-publisher-and-publisher-place"] &&
            ((c.build["publisher-special"] = !0),
            (i = function (t, e) {
              if (
                this.strings["subgroup-delimiter"] &&
                e.publisher &&
                e["publisher-place"]
              ) {
                var i = e.publisher.split(/;\s*/),
                  s = e["publisher-place"].split(/;\s*/);
                1 < i.length &&
                  i.length === s.length &&
                  ((t.publisherOutput = new CSL.PublisherOutput(t, this)),
                  (t.publisherOutput["publisher-list"] = i),
                  (t.publisherOutput["publisher-place-list"] = s));
              }
            }),
            this.execs.push(i)),
          this.juris))
      ) {
        for (var r = 0, a = t.length; r < a; r++) t[r];
        var n = new CSL.Token("choose", CSL.START);
        CSL.Node.choose.build.call(n, c, t);
        var o = new CSL.Token("if", CSL.START);
        (m = this.juris),
          (i = function (t) {
            if (
              !c.sys.retrieveStyleModule ||
              !CSL.MODULE_MACROS[m] ||
              !t.jurisdiction
            )
              return !1;
            var e = c.getJurisdictionList(t.jurisdiction);
            if (!c.opt.jurisdictions_seen[e[0]]) {
              var i = c.retrieveAllStyleModules(e);
              for (var s in i) {
                c.juris[s] = {};
                for (
                  var r = CSL.setupXml(i[s]),
                    a = r.getNodesByName(r.dataObj, "law-module"),
                    n = 0,
                    o = a.length;
                  n < o;
                  n++
                ) {
                  var l = r.getAttributeValue(a[n], "types");
                  if (l) {
                    (c.juris[s].types = {}), (l = l.split(/\s+/));
                    for (var u = 0, h = l.length; u < h; u++)
                      c.juris[s].types[l[u]] = !0;
                  }
                }
                for (
                  c.juris[s].types || (c.juris[s].types = CSL.MODULE_TYPES),
                    a = r.getNodesByName(r.dataObj, "macro"),
                    n = 0,
                    o = a.length;
                  n < o;
                  n++
                ) {
                  var p = r.getAttributeValue(a[n], "name");
                  CSL.MODULE_MACROS[p]
                    ? ((c.juris[s][p] = []),
                      c.buildTokenLists(a[n], c.juris[s][p]),
                      c.configureTokenList(c.juris[s][p]))
                    : CSL.debug(
                        'CSL: skipping non-modular macro name "' +
                          p +
                          '" in module context'
                      );
                }
              }
            }
            for (n = 0, o = e.length; n < o; n++)
              if (((s = e[n]), c.juris[s] && c.juris[s].types[t.type]))
                return (t["best-jurisdiction"] = s), !0;
            return !1;
          }),
          o.tests.push(i),
          (o.test = c.fun.match.any(o, c, o.tests)),
          t.push(o);
        var l = new CSL.Token("text", CSL.SINGLETON);
        (i = function (t, e, i) {
          var s = 0;
          if (t.juris[e["best-jurisdiction"]][this.juris])
            for (; s < t.juris[e["best-jurisdiction"]][this.juris].length; )
              s = CSL.tokenExec.call(
                t,
                t.juris[e["best-jurisdiction"]][this.juris][s],
                e,
                i
              );
        }),
          (l.juris = this.juris),
          l.execs.push(i),
          t.push(l);
        var u = new CSL.Token("if", CSL.END);
        CSL.Node.if.build.call(u, c, t);
        var h = new CSL.Token("else", CSL.START);
        CSL.Node.else.build.call(h, c, t);
      }
      if (
        this.tokentype === CSL.END &&
        (c.build["publisher-special"] &&
          ((c.build["publisher-special"] = !1),
          "string" == typeof c[c.build.root].opt["name-delimiter"] &&
            ((i = function (t, e) {
              t.publisherOutput &&
                (t.publisherOutput.render(), (t.publisherOutput = !1));
            }),
            this.execs.push(i))),
        (i = function (t, e) {
          if ((t.output.endTag(), this.realGroup)) {
            var i = t.tmp.group_context.pop();
            if (
              (t.tmp.group_context.tip.condition &&
                (t.tmp.group_context.tip.force_suppress = i.force_suppress),
              !i.force_suppress &&
                (i.variable_success ||
                  (i.term_intended && !i.variable_attempt)))
            ) {
              this.isJurisLocatorLabel ||
                (t.tmp.group_context.tip.variable_success = !0);
              var s = t.output.current.value().blobs,
                r = t.output.current.value().blobs.length - 1;
              if (!t.tmp.just_looking && void 0 !== i.parallel_conditions) {
                var a = {
                  blobs: s,
                  conditions: i.parallel_conditions,
                  id: e.id,
                  pos: r,
                };
                t.parallel.parallel_conditional_blobs_list.push(a);
              }
            } else {
              if (
                ((t.tmp.group_context.tip.variable_attempt =
                  i.variable_attempt),
                i.force_suppress && !t.tmp.group_context.tip.condition)
              ) {
                (t.tmp.group_context.tip.variable_attempt = !0),
                  (t.tmp.group_context.tip.variable_success =
                    i.variable_success_parent);
                for (var n = 0, o = i.done_vars.length; n < o; n++)
                  -1 < t.tmp.done_vars.indexOf(i.done_vars[n]) &&
                    (t.tmp.done_vars = t.tmp.done_vars
                      .slice(0, n)
                      .concat(t.tmp.done_vars.slice(n + 1)));
              }
              t.output.current.value().blobs &&
                t.output.current.value().blobs.pop();
            }
          }
        }),
        this.execs.push(i),
        this.juris)
      ) {
        var p = new CSL.Token("else", CSL.END);
        CSL.Node.else.build.call(p, c, t);
        var f = new CSL.Token("choose", CSL.END);
        CSL.Node.choose.build.call(f, c, t);
      }
      this.tokentype === CSL.END &&
        (this.juris || t.push(this),
        c.build.substitute_level.value() &&
          c.build.substitute_level.replace(
            c.build.substitute_level.value() - 1
          ),
        CSL.Util.substituteEnd.call(this, c, t));
    },
  }),
  (CSL.Node.if = {
    build: function (t, e) {
      CSL.Conditions.TopNode.call(this, t, e), e.push(this);
    },
    configure: function (t, e) {
      CSL.Conditions.Configure.call(this, t, e);
    },
  }),
  (CSL.Node.conditions = {
    build: function (t, e) {
      this.tokentype === CSL.START && t.tmp.conditions.addMatch(this.match),
        this.tokentype === CSL.END && t.tmp.conditions.matchCombine();
    },
  }),
  (CSL.Node.condition = {
    build: function (t, e) {
      if (this.tokentype === CSL.SINGLETON) {
        var i = t.fun.match[this.match](this, t, this.tests);
        t.tmp.conditions.addTest(i);
      }
    },
  }),
  (CSL.Conditions = {}),
  (CSL.Conditions.TopNode = function (t, e) {
    var i;
    (this.tokentype !== CSL.START && this.tokentype !== CSL.SINGLETON) ||
      (this.locale && (t.opt.lang = this.locale),
      this.tests && this.tests.length
        ? (this.test = t.fun.match[this.match](this, t, this.tests))
        : (t.tmp.conditions = new CSL.Conditions.Engine(t, this))),
      (this.tokentype !== CSL.END && this.tokentype !== CSL.SINGLETON) ||
        ((i = function (t, e) {
          this.locale_default &&
            ((t.output.current.value().old_locale = this.locale_default),
            t.output.closeLevel("empty"),
            (t.opt.lang = this.locale_default));
          var i = this[t.tmp.jump.value()];
          return i;
        }),
        this.execs.push(i),
        this.locale_default && (t.opt.lang = this.locale_default));
  }),
  (CSL.Conditions.Configure = function (t, e) {
    this.tokentype === CSL.START
      ? ((this.fail = t.configure.fail.slice(-1)[0]),
        (this.succeed = this.next),
        (t.configure.fail[t.configure.fail.length - 1] = e))
      : this.tokentype === CSL.SINGLETON
      ? ((this.fail = this.next),
        (this.succeed = t.configure.succeed.slice(-1)[0]),
        (t.configure.fail[t.configure.fail.length - 1] = e))
      : ((this.succeed = t.configure.succeed.slice(-1)[0]),
        (this.fail = this.next));
  }),
  (CSL.Conditions.Engine = function (t, e) {
    (this.token = e), (this.state = t);
  }),
  (CSL.Conditions.Engine.prototype.addTest = function (t) {
    this.token.tests.push(t);
  }),
  (CSL.Conditions.Engine.prototype.addMatch = function (t) {
    this.token.match = t;
  }),
  (CSL.Conditions.Engine.prototype.matchCombine = function () {
    this.token.test = this.state.fun.match[this.token.match](
      this.token,
      this.state,
      this.token.tests
    );
  }),
  (CSL.Node.info = {
    build: function (t, e) {
      this.tokentype === CSL.START
        ? (t.build.skip = "info")
        : (t.build.skip = !1);
    },
  }),
  (CSL.Node.institution = {
    build: function (t, e) {
      if (-1 < [CSL.SINGLETON, CSL.START].indexOf(this.tokentype)) {
        this.execs.push(function (t, e) {
          "string" == typeof this.strings.delimiter
            ? (t.tmp.institution_delimiter = this.strings.delimiter)
            : (t.tmp.institution_delimiter = t.tmp.name_delimiter),
            "text" === t.inheritOpt(this, "and")
              ? (this.and_term = t.getTerm("and", "long", 0))
              : "symbol" === t.inheritOpt(this, "and")
              ? t.opt.development_extensions.expect_and_symbol_form
                ? (this.and_term = t.getTerm("and", "symbol", 0))
                : (this.and_term = "&")
              : "none" === t.inheritOpt(this, "and") &&
                (this.and_term = t.tmp.institution_delimiter),
            void 0 === this.and_term &&
              t.tmp.and_term &&
              (this.and_term = t.getTerm("and", "long", 0)),
            CSL.STARTSWITH_ROMANESQUE_REGEXP.test(this.and_term)
              ? ((this.and_prefix_single = " "),
                (this.and_prefix_multiple = ", "),
                "string" == typeof t.tmp.institution_delimiter &&
                  (this.and_prefix_multiple = t.tmp.institution_delimiter),
                (this.and_suffix = " "))
              : ((this.and_prefix_single = ""),
                (this.and_prefix_multiple = ""),
                (this.and_suffix = "")),
            "always" === t.inheritOpt(this, "delimiter-precedes-last")
              ? (this.and_prefix_single = t.tmp.institution_delimiter)
              : "never" === t.inheritOpt(this, "delimiter-precedes-last") &&
                this.and_prefix_multiple &&
                (this.and_prefix_multiple = " "),
            (this.and = {}),
            void 0 !== this.and_term
              ? (t.output.append(this.and_term, "empty", !0),
                (this.and.single = t.output.pop()),
                (this.and.single.strings.prefix = this.and_prefix_single),
                (this.and.single.strings.suffix = this.and_suffix),
                t.output.append(this.and_term, "empty", !0),
                (this.and.multiple = t.output.pop()),
                (this.and.multiple.strings.prefix = this.and_prefix_multiple),
                (this.and.multiple.strings.suffix = this.and_suffix))
              : "undefined" !== this.strings.delimiter &&
                ((this.and.single = new CSL.Blob(t.tmp.institution_delimiter)),
                (this.and.single.strings.prefix = ""),
                (this.and.single.strings.suffix = ""),
                (this.and.multiple = new CSL.Blob(t.tmp.institution_delimiter)),
                (this.and.multiple.strings.prefix = ""),
                (this.and.multiple.strings.suffix = "")),
            (t.nameOutput.institution = this);
        });
      }
      e.push(this);
    },
    configure: function (t, e) {
      -1 < [CSL.SINGLETON, CSL.START].indexOf(this.tokentype) &&
        (t.build.has_institution = !0);
    },
  }),
  (CSL.Node["institution-part"] = {
    build: function (t, e) {
      var i;
      "long" === this.strings.name
        ? (i = this.strings["if-short"]
            ? function (t, e) {
                t.nameOutput.institutionpart["long-with-short"] = this;
              }
            : function (t, e) {
                t.nameOutput.institutionpart.long = this;
              })
        : "short" === this.strings.name &&
          (i = function (t, e) {
            t.nameOutput.institutionpart.short = this;
          }),
        this.execs.push(i),
        e.push(this);
    },
  }),
  (CSL.Node.key = {
    build: function (t, e) {
      var i;
      e = t[t.build.root + "_sort"].tokens;
      var s = new CSL.Token("key", CSL.START);
      (t.tmp.root = t.build.root),
        (s.strings["et-al-min"] = t.inheritOpt(this, "et-al-min")),
        (s.strings["et-al-use-first"] = t.inheritOpt(this, "et-al-use-first")),
        (s.strings["et-al-use-last"] = t.inheritOpt(this, "et-al-use-last")),
        (i = function (t, e) {
          t.tmp.done_vars = [];
        }),
        s.execs.push(i),
        (t.opt.citation_number_sort_direction = this.strings.sort_direction),
        (i = function (t, e) {
          t.output.openLevel("empty");
        }),
        s.execs.push(i);
      var r = [];
      if (
        (this.strings.sort_direction === CSL.DESCENDING
          ? (r.push(1), r.push(-1))
          : (r.push(-1), r.push(1)),
        t[t.build.area].opt.sort_directions.push(r),
        -1 < CSL.DATE_VARIABLES.indexOf(this.variables[0]) &&
          (t.build.date_key = !0),
        (i = function (t, e) {
          (t.tmp.sort_key_flag = !0),
            t.inheritOpt(this, "et-al-min") &&
              (t.tmp["et-al-min"] = t.inheritOpt(this, "et-al-min")),
            t.inheritOpt(this, "et-al-use-first") &&
              (t.tmp["et-al-use-first"] = t.inheritOpt(
                this,
                "et-al-use-first"
              )),
            "boolean" == typeof t.inheritOpt(this, "et-al-use-last") &&
              (t.tmp["et-al-use-last"] = t.inheritOpt(this, "et-al-use-last"));
        }),
        s.execs.push(i),
        e.push(s),
        this.variables.length)
      ) {
        var a = this.variables[0];
        if (
          ("citation-number" === a &&
            ("citation" === t.build.area &&
              "_sort" === t.build.extension &&
              (t.opt.citation_number_sort = !1),
            "bibliography" === t.build.root &&
              "_sort" === t.build.extension &&
              (t.opt.citation_number_sort_used = !1)),
          -1 < CSL.CREATORS.indexOf(a))
        ) {
          var n = new CSL.Token("names", CSL.START);
          (n.tokentype = CSL.START),
            (n.variables = this.variables),
            CSL.Node.names.build.call(n, t, e);
          var o = new CSL.Token("name", CSL.SINGLETON);
          (o.tokentype = CSL.SINGLETON),
            (o.strings["name-as-sort-order"] = "all"),
            (o.strings["sort-separator"] = " "),
            (o.strings["et-al-use-last"] = t.inheritOpt(
              this,
              "et-al-use-last"
            )),
            (o.strings["et-al-min"] = t.inheritOpt(this, "et-al-min")),
            (o.strings["et-al-use-first"] = t.inheritOpt(
              this,
              "et-al-use-first"
            )),
            CSL.Node.name.build.call(o, t, e);
          var l = new CSL.Token("institution", CSL.SINGLETON);
          (l.tokentype = CSL.SINGLETON),
            CSL.Node.institution.build.call(l, t, e);
          var u = new CSL.Token("names", CSL.END);
          (u.tokentype = CSL.END), CSL.Node.names.build.call(u, t, e);
        } else {
          var h = new CSL.Token("text", CSL.SINGLETON);
          if (
            ((h.dateparts = this.dateparts),
            -1 < CSL.NUMERIC_VARIABLES.indexOf(a))
          )
            i = function (t, e) {
              var i;
              (i = !1),
                (i =
                  "citation-number" === a
                    ? t.registry.registry[e.id].seq.toString()
                    : e[a]),
                i && (i = CSL.Util.padding(i)),
                t.output.append(i, this);
            };
          else if ("citation-label" === a)
            i = function (t, e) {
              var i = t.getCitationLabel(e);
              t.output.append(i, this);
            };
          else if (-1 < CSL.DATE_VARIABLES.indexOf(a))
            (i = CSL.dateAsSortKey), (h.variables = this.variables);
          else if ("title" === a) {
            i = t.transform.getOutputFunction(
              this.variables,
              "title",
              !1,
              !1,
              !0
            );
          } else
            i = function (t, e) {
              var i = e[a];
              t.output.append(i, "empty");
            };
          h.execs.push(i), e.push(h);
        }
      } else {
        var p = new CSL.Token("text", CSL.SINGLETON);
        (p.postponed_macro = this.postponed_macro),
          CSL.expandMacro.call(t, p, e);
      }
      var c = new CSL.Token("key", CSL.END);
      (i = function (t, e) {
        var i = t.output.string(t, t.output.queue);
        t.sys.normalizeUnicode && (i = t.sys.normalizeUnicode(i)),
          (i = i ? i.split(" ").join(t.opt.sort_sep) + t.opt.sort_sep : ""),
          "" === i && (i = void 0),
          ("string" != typeof i || t.tmp.empty_date) &&
            ((i = void 0), (t.tmp.empty_date = !1)),
          t[t[t.tmp.area].root + "_sort"].keys.push(i),
          (t.tmp.value = []);
      }),
        c.execs.push(i),
        t.build.date_key &&
          ("citation" === t.build.area &&
            "_sort" === t.build.extension &&
            (t[t.build.area].opt.sort_directions.push([-1, 1]),
            (i = function (t, e) {
              var i = t.registry.registry[e.id].disambig.year_suffix;
              i || (i = 0);
              var s = CSL.Util.padding("" + i);
              t[t.tmp.area].keys.push(s);
            }),
            c.execs.push(i)),
          (t.build.date_key = !1)),
        (i = function (t, e) {
          (t.tmp["et-al-min"] = void 0),
            (t.tmp["et-al-use-first"] = void 0),
            (t.tmp["et-al-use-last"] = void 0),
            (t.tmp.sort_key_flag = !1);
        }),
        c.execs.push(i),
        e.push(c);
    },
  }),
  (CSL.Node.label = {
    build: function (t, e) {
      if (this.strings.term) {
        this.strings.form;
        this.execs.push(function (t, e, i) {
          var s = CSL.evaluateLabel(this, t, e, i);
          i &&
            "locator" === this.strings.term &&
            (t.parallel.StartVariable("label"),
            t.parallel.AppendToVariable(i.label),
            (i.section_form_override = this.strings.form)),
            s && (t.tmp.group_context.tip.term_intended = !0),
            CSL.UPDATE_GROUP_CONTEXT_CONDITION(t, s),
            -1 === s.indexOf("%s") && t.output.append(s, this),
            i && "locator" === this.strings.term && t.parallel.CloseVariable();
        });
      } else {
        var i = t.build.names_variables.slice(-1)[0];
        t.build.name_label || (t.build.name_label = {});
        for (var s = 0, r = i.length; s < r; s += 1)
          t.build.name_label[i[s]] || (t.build.name_label[i[s]] = {});
        if (t.build.name_flag)
          for (s = 0, r = i.length; s < r; s += 1)
            t.build.name_label[i[s]].after = this;
        else
          for (var s = 0, r = i.length; s < r; s += 1)
            t.build.name_label[i[s]].before = this;
      }
      e.push(this);
    },
  }),
  (CSL.Node.layout = {
    build: function (t, e) {
      var i, s, r, a, n;
      function o() {
        "bibliography" === t.build.area &&
          ((r = new CSL.Token("text", CSL.SINGLETON)),
          (i = function (t, e, i) {
            var s;
            t.tmp.cite_locales[t.tmp.cite_locales.length - 1];
            s = t.tmp.cite_affixes[t.tmp.area][t.tmp.last_cite_locale]
              ? t.tmp.cite_affixes[t.tmp.area][t.tmp.last_cite_locale].suffix
              : t.bibliography.opt.layout_suffix;
            var r = t.output.current.value();
            t.opt.using_display
              ? (r.blobs[r.blobs.length - 1].strings.suffix = s)
              : (r.strings.suffix = s),
              t.bibliography.opt["second-field-align"] &&
                t.output.endTag("bib_other");
          }),
          r.execs.push(i),
          e.push(r));
      }
      if (
        (this.tokentype === CSL.START &&
          (this.locale_raw
            ? (t.build.current_default_locale = this.locale_raw)
            : (t.build.current_default_locale = t.opt["default-locale"]),
          (i = function (t, e, i) {
            t.opt.development_extensions.apply_citation_wrapper &&
              t.sys.wrapCitationEntry &&
              !t.tmp.just_looking &&
              e.system_id &&
              "citation" === t.tmp.area &&
              ((cite_entry = new CSL.Token("group", CSL.START)),
              (cite_entry.decorations = [["@cite", "entry"]]),
              t.output.startTag("cite_entry", cite_entry),
              (t.output.current.value().item_id = e.system_id),
              i &&
                ((t.output.current.value().locator_txt = i.locator_txt),
                (t.output.current.value().suffix_txt = i.suffix_txt)));
          }),
          this.execs.push(i)),
        this.tokentype !== CSL.START ||
          t.tmp.cite_affixes[t.build.area] ||
          ((i = function (t, e) {
            (t.tmp.done_vars = []),
              !t.tmp.just_looking &&
                t.registry.registry[e.id] &&
                t.registry.registry[e.id].parallel &&
                t.tmp.done_vars.push("first-reference-note-number"),
              (t.tmp.rendered_name = !1);
          }),
          this.execs.push(i),
          (i = function (t, e) {
            t.tmp.sort_key_flag = !1;
          }),
          this.execs.push(i),
          (i = function (t, e) {
            t.tmp.nameset_counter = 0;
          }),
          this.execs.push(i),
          (i = function (t, e) {
            var i = new CSL.Token();
            t.opt.development_extensions.rtl_support &&
              -1 <
                ["ar", "he", "fa", "ur", "yi", "ps", "syr"].indexOf(
                  e.language
                ) &&
              ((i = new CSL.Token()),
              (i.strings.prefix = "‫"),
              (i.strings.suffix = "‬")),
              t.output.openLevel(i);
          }),
          this.execs.push(i),
          e.push(this),
          t.opt.development_extensions.rtl_support,
          "citation" === t.build.area &&
            ((s = new CSL.Token("text", CSL.SINGLETON)),
            (i = function (t, e, i) {
              var s;
              if (i && i.prefix) {
                s = "";
                var r = i.prefix
                    .replace(/<[^>]+>/g, "")
                    .replace(/["'\u201d\u2019\u00bb\u202f\u00a0 ]+$/g, ""),
                  a = r.slice(-1);
                r.match(CSL.ENDSWITH_ROMANESQUE_REGEXP)
                  ? (s = " ")
                  : -1 < CSL.TERMINAL_PUNCTUATION.slice(0, -1).indexOf(a)
                  ? (s = " ")
                  : a.match(/[\)\],0-9]/) && (s = " ");
                var n = !1;
                -1 < CSL.TERMINAL_PUNCTUATION.slice(0, -1).indexOf(a) &&
                  -1 < i.prefix.trim().indexOf(" ") &&
                  ((t.tmp.term_predecessor = !1), (n = !0));
                var o = (i.prefix + s).replace(/\s+/g, " ");
                t.tmp.just_looking || (o = t.output.checkNestedBrace.update(o)),
                  t.output.append(o, this, !1, n);
              }
            }),
            s.execs.push(i),
            e.push(s))),
        this.locale_raw &&
          ((n = new CSL.Token("dummy", CSL.START)),
          (n.locale = this.locale_raw),
          (n.strings.delimiter = this.strings.delimiter),
          (n.strings.suffix = this.strings.suffix),
          t.tmp.cite_affixes[t.build.area] ||
            (t.tmp.cite_affixes[t.build.area] = {})),
        this.tokentype === CSL.START &&
          ((t.build.layout_flag = !0),
          this.locale_raw ||
            ((t[t.tmp.area].opt.topdecor = [this.decorations]),
            (t[t.tmp.area + "_sort"].opt.topdecor = [this.decorations]),
            (t[t.build.area].opt.layout_prefix = this.strings.prefix),
            (t[t.build.area].opt.layout_suffix = this.strings.suffix),
            (t[t.build.area].opt.layout_delimiter = this.strings.delimiter),
            (t[t.build.area].opt.layout_decorations = this.decorations),
            t.tmp.cite_affixes[t.build.area] &&
              ((a = new CSL.Token("else", CSL.START)),
              CSL.Node.else.build.call(a, t, e))),
          this.locale_raw))
      ) {
        if (t.build.layout_locale_flag)
          (n.name = "else-if"),
            CSL.Attributes["@locale-internal"].call(n, t, this.locale_raw),
            CSL.Node["else-if"].build.call(n, t, e);
        else {
          var l = new CSL.Token("choose", CSL.START);
          CSL.Node.choose.build.call(l, t, e),
            (n.name = "if"),
            CSL.Attributes["@locale-internal"].call(n, t, this.locale_raw),
            CSL.Node.if.build.call(n, t, e);
        }
        (t.tmp.cite_affixes[t.build.area][n.locale] = {}),
          (t.tmp.cite_affixes[t.build.area][n.locale].delimiter =
            this.strings.delimiter),
          (t.tmp.cite_affixes[t.build.area][n.locale].suffix =
            this.strings.suffix);
      }
      this.tokentype === CSL.END &&
        (this.locale_raw &&
          (o(),
          t.build.layout_locale_flag
            ? ((n.name = "else-if"),
              (n.tokentype = CSL.END),
              CSL.Attributes["@locale-internal"].call(n, t, this.locale_raw),
              CSL.Node["else-if"].build.call(n, t, e))
            : ((n.name = "if"),
              (n.tokentype = CSL.END),
              CSL.Attributes["@locale-internal"].call(n, t, this.locale_raw),
              CSL.Node.if.build.call(n, t, e),
              (t.build.layout_locale_flag = !0))),
        this.locale_raw ||
          (o(),
          t.tmp.cite_affixes[t.build.area] &&
            t.build.layout_locale_flag &&
            ((a = new CSL.Token("else", CSL.END)),
            CSL.Node.else.build.call(a, t, e),
            (a = new CSL.Token("choose", CSL.END)),
            CSL.Node.choose.build.call(a, t, e)),
          (t.build_layout_locale_flag = !0),
          "citation" === t.build.area &&
            ((r = new CSL.Token("text", CSL.SINGLETON)),
            (i = function (t, e, i) {
              var s;
              if (i && i.suffix) {
                (s = ""),
                  (i.suffix.match(CSL.STARTSWITH_ROMANESQUE_REGEXP) ||
                    -1 < ["[", "("].indexOf(i.suffix.slice(0, 1))) &&
                    (s = " ");
                var r = i.suffix;
                t.tmp.just_looking || (r = t.output.checkNestedBrace.update(r)),
                  t.output.append(s + r, this);
              }
            }),
            r.execs.push(i),
            e.push(r)),
          (i = function (t, e) {
            t.output.closeLevel();
          }),
          this.execs.push(i),
          (i = function (t, e) {
            t.opt.development_extensions.apply_citation_wrapper &&
              t.sys.wrapCitationEntry &&
              !t.tmp.just_looking &&
              e.system_id &&
              "citation" === t.tmp.area &&
              t.output.endTag();
          }),
          this.execs.push(i),
          e.push(this),
          (t.build.layout_flag = !1),
          (t.build.layout_locale_flag = !1)));
    },
  }),
  (CSL.Node.macro = { build: function (t, e) {} }),
  (CSL.NameOutput = function (t, e, i, s) {
    (this.debug = !1),
      (this.state = t),
      (this.Item = e),
      (this.item = i),
      (this.nameset_base = 0),
      (this.etal_spec = {}),
      (this._first_creator_variable = !1),
      (this._please_chop = !1);
  }),
  (CSL.NameOutput.prototype.init = function (t) {
    this.state.tmp.term_predecessor &&
      (this.state.tmp.subsequent_author_substitute_ok = !1),
      this.nameset_offset &&
        (this.nameset_base = this.nameset_base + this.nameset_offset),
      (this.nameset_offset = 0),
      (this.names = t),
      (this.variables = t.variables),
      (this.state.tmp.value = []),
      (this.state.tmp.rendered_name = []),
      (this.state.tmp.label_blob = !1),
      (this.state.tmp.etal_node = !1),
      (this.state.tmp.etal_term = !1);
    for (var e = 0, i = this.variables.length; e < i; e += 1)
      this.Item[this.variables[e]] &&
        this.Item[this.variables[e]].length &&
        (this.state.tmp.value = this.state.tmp.value.concat(
          this.Item[this.variables[e]]
        ));
    (this["et-al"] = void 0),
      (this.with = void 0),
      (this.name = void 0),
      (this.institutionpart = {}),
      (this.state.tmp.group_context.tip.variable_attempt = !0),
      (this.labelVariable = this.variables[0]),
      this.state.tmp.value.length;
  }),
  (CSL.NameOutput.prototype.reinit = function (t, e) {
    if (((this.labelVariable = e), this.state.tmp.can_substitute.value())) {
      (this.nameset_offset = 0), (this.variables = t.variables);
      var i = this.state.tmp.value.slice();
      this.state.tmp.value = [];
      for (var s = 0, r = this.variables.length; s < r; s += 1)
        this.Item[this.variables[s]] &&
          this.Item[this.variables[s]].length &&
          (this.state.tmp.value = this.state.tmp.value.concat(
            this.Item[this.variables[s]]
          ));
      this.state.tmp.value.length &&
        this.state.tmp.can_substitute.replace(!1, CSL.LITERAL),
        (this.state.tmp.value = i);
    }
  }),
  (CSL.NameOutput.prototype.outputNames = function () {
    var t = this.variables;
    if (
      (this.institution.and &&
        ((this.institution.and.single.blobs &&
          this.institution.and.single.blobs.length) ||
          (this.institution.and.single.blobs = this.name.and.single.blobs),
        (this.institution.and.multiple.blobs &&
          this.institution.and.multiple.blobs.length) ||
          (this.institution.and.multiple.blobs = this.name.and.multiple.blobs)),
      (this.variable_offset = {}),
      this.family)
    )
      for (
        this.family_decor = CSL.Util.cloneToken(this.family),
          this.family_decor.strings.prefix = "",
          this.family_decor.strings.suffix = "",
          m = 0,
          f = this.family.execs.length;
        m < f;
        m += 1
      )
        this.family.execs[m].call(this.family_decor, this.state, this.Item);
    else this.family_decor = !1;
    if (this.given)
      for (
        this.given_decor = CSL.Util.cloneToken(this.given),
          this.given_decor.strings.prefix = "",
          this.given_decor.strings.suffix = "",
          m = 0,
          f = this.given.execs.length;
        m < f;
        m += 1
      )
        this.given.execs[m].call(this.given_decor, this.state, this.Item);
    else this.given_decor = !1;
    if (
      (this.getEtAlConfig(),
      this.divideAndTransliterateNames(),
      this.truncatePersonalNameLists(),
      this.disambigNames(),
      this.constrainNames(),
      "count" !== this.name.strings.form)
    ) {
      this.setEtAlParameters(),
        this.setCommonTerm(),
        (this.state.tmp.name_node = {}),
        (this.state.tmp.name_node.children = []),
        this.renderAllNames();
      var e = [];
      for (m = 0, f = t.length; m < f; m += 1) {
        var i = t[m],
          s = [],
          r = !1,
          a = null;
        if (
          this.state.opt.development_extensions.spoof_institutional_affiliations
        ) {
          for (var n = 0, o = this.institutions[i].length; n < o; n += 1)
            s.push(
              this.joinPersonsAndInstitutions([
                this.persons[i][n],
                this.institutions[i][n],
              ])
            );
          if (this.institutions[i].length) {
            var l = this.nameset_base + this.variable_offset[i];
            this.freeters[i].length && (l += 1),
              (r = this.joinInstitutionSets(s, l));
          }
          a = this.joinFreetersAndInstitutionSets([this.freeters[i], r]);
        } else a = this._join([this.freeters[i]], "");
        if (
          (a &&
            (this.state.tmp.extension || (a = this._applyLabels(a, i)),
            e.push(a)),
          this.common_term)
        )
          break;
      }
      for (
        this.state.output.openLevel("empty"),
          this.state.output.current.value().strings.delimiter =
            this.state.inheritOpt(this.names, "delimiter", "names-delimiter"),
          m = 0,
          f = e.length;
        m < f;
        m += 1
      )
        this.state.output.append(e[m], "literal", !0);
      this.state.output.closeLevel("empty");
      var u = this.state.output.pop(),
        h = CSL.Util.cloneToken(this.names);
      if (
        (this.state.output.append(u, h),
        this.state.tmp.term_predecessor_name &&
          (this.state.tmp.term_predecessor = !0),
        (this.state.tmp.name_node.top = this.state.output.current.value()),
        "authority" !== t[0])
      ) {
        var p = [],
          c = this.Item[t[0]];
        if (c)
          for (var m = 0, f = c.length; m < f; m += 1) {
            var d = CSL.Util.Names.getRawName(c[m]);
            d && p.push(d);
          }
        (p = p.join(", ")), p && (this.state.tmp.name_node.string = p);
      }
      if (
        (this.state.tmp.name_node.string &&
          !this.state.tmp.first_name_string &&
          (this.state.tmp.first_name_string = this.state.tmp.name_node.string),
        "classic" === this.Item.type)
      ) {
        var g = [];
        this.state.tmp.first_name_string &&
          g.push(this.state.tmp.first_name_string),
          this.Item.title && g.push(this.Item.title),
          (g = g.join(", ")),
          g &&
            this.state.sys.getAbbreviation &&
            (this.state.transform.loadAbbreviation("default", "classic", g),
            this.state.transform.abbrevs.default.classic[g] &&
              (this.state.tmp.done_vars.push("title"),
              this.state.output.append(
                this.state.transform.abbrevs.default.classic[g],
                "empty",
                !0
              ),
              (u = this.state.output.pop()),
              this.state.tmp.name_node.top.blobs.pop(),
              this.state.tmp.name_node.top.blobs.push(u)));
      }
      this._collapseAuthor(), (this.variables = []);
    } else
      (this.state.tmp.extension || 0 != this.names_count) &&
        (this.state.output.append(this.names_count, "empty"),
        (this.state.tmp.group_context.tip.variable_success = !0));
  }),
  (CSL.NameOutput.prototype._applyLabels = function (t, e) {
    var i;
    if (!this.label || !this.label[this.labelVariable]) return t;
    var s = 0,
      r = this.freeters_count[e] + this.institutions_count[e];
    if (1 < r) s = 1;
    else {
      for (var a = 0, n = this.persons[e].length; a < n; a += 1)
        r += this.persons_count[e][a];
      1 < r && (s = 1);
    }
    return (
      this.label[this.labelVariable].before
        ? ("number" ==
            typeof this.label[this.labelVariable].before.strings.plural &&
            (s = this.label[this.labelVariable].before.strings.plural),
          (i = this._buildLabel(e, s, "before", this.labelVariable)),
          this.state.output.openLevel("empty"),
          this.state.output.append(
            i,
            this.label[this.labelVariable].before,
            !0
          ),
          this.state.output.append(t, "literal", !0),
          this.state.output.closeLevel("empty"),
          (t = this.state.output.pop()))
        : this.label[this.labelVariable].after &&
          ("number" ==
            typeof this.label[this.labelVariable].after.strings.plural &&
            (s = this.label[this.labelVariable].after.strings.plural),
          (i = this._buildLabel(e, s, "after", this.labelVariable)),
          this.state.output.openLevel("empty"),
          this.state.output.append(t, "literal", !0),
          this.state.output.append(i, this.label[this.labelVariable].after, !0),
          (this.state.tmp.label_blob = this.state.output.pop()),
          this.state.output.append(this.state.tmp.label_blob, "literal", !0),
          this.state.output.closeLevel("empty"),
          (t = this.state.output.pop())),
      t
    );
  }),
  (CSL.NameOutput.prototype._buildLabel = function (t, e, i, s) {
    this.common_term && (t = this.common_term);
    var r = !1,
      a = this.label[s][i];
    return a && (r = CSL.castLabel(this.state, a, t, e, CSL.TOLERANT)), r;
  }),
  (CSL.NameOutput.prototype._collapseAuthor = function () {
    var t, e, i;
    0 === this.nameset_base &&
      this.Item[this.variables[0]] &&
      !this._first_creator_variable &&
      (this._first_creator_variable = this.variables[0]),
      ((this.item &&
        this.item["suppress-author"] &&
        this._first_creator_variable == this.variables[0]) ||
        (this.state[this.state.tmp.area].opt.collapse &&
          this.state[this.state.tmp.area].opt.collapse.length) ||
        (this.state[this.state.tmp.area].opt.cite_group_delimiter &&
          this.state[this.state.tmp.area].opt.cite_group_delimiter.length)) &&
        (this.state.tmp.authorstring_request
          ? ((e = ""),
            (t = this.state.tmp.name_node.top.blobs.slice(-1)[0].blobs),
            (i = this.state.tmp.offset_characters),
            t && (e = this.state.output.string(this.state, t, !1)),
            (this.state.tmp.offset_characters = i),
            (this.state.registry.authorstrings[this.Item.id] = e))
          : this.state.tmp.just_looking ||
            this.state.tmp.suppress_decorations ||
            !(
              this.item["suppress-author"] ||
              (this.state[this.state.tmp.area].opt.collapse &&
                this.state[this.state.tmp.area].opt.collapse.length) ||
              (this.state[this.state.tmp.area].opt.cite_group_delimiter &&
                this.state[this.state.tmp.area].opt.cite_group_delimiter)
            ) ||
            ((e = ""),
            (t = this.state.tmp.name_node.top.blobs.slice(-1)[0].blobs),
            (i = this.state.tmp.offset_characters),
            t && (e = this.state.output.string(this.state, t, !1)),
            e === this.state.tmp.last_primary_names_string
              ? ((this.item["suppress-author"] ||
                  (this.state[this.state.tmp.area].opt.collapse &&
                    this.state[this.state.tmp.area].opt.collapse.length)) &&
                  (this.state.tmp.name_node.top.blobs.pop(),
                  (this.state.tmp.name_node.children = []),
                  (this.state.tmp.offset_characters = i)),
                this.state[this.state.tmp.area].opt.cite_group_delimiter &&
                  this.state[this.state.tmp.area].opt.cite_group_delimiter &&
                  (this.state.tmp.use_cite_group_delimiter = !0))
              : ((this.state.tmp.last_primary_names_string = e),
                -1 < this.variables.indexOf(this._first_creator_variable) &&
                  this.item &&
                  this.item["suppress-author"] &&
                  "legal_case" !== this.Item.type &&
                  (this.state.tmp.name_node.top.blobs.pop(),
                  (this.state.tmp.name_node.children = []),
                  (this.state.tmp.offset_characters = i),
                  (this.state.tmp.term_predecessor = !1)),
                (this.state.tmp.have_collapsed = !1),
                this.state[this.state.tmp.area].opt.cite_group_delimiter &&
                  this.state[this.state.tmp.area].opt.cite_group_delimiter &&
                  (this.state.tmp.use_cite_group_delimiter = !1))));
  }),
  (CSL.NameOutput.prototype.isPerson = function (t) {
    return !(t.literal || (!t.given && t.family && t.isInstitution));
  }),
  (CSL.NameOutput.prototype.truncatePersonalNameLists = function () {
    var t, e, i, s;
    for (t in ((this.freeters_count = {}),
    (this.persons_count = {}),
    (this.institutions_count = {}),
    this.freeters))
      this.freeters.hasOwnProperty(t) &&
        ((this.freeters_count[t] = this.freeters[t].length),
        (this.freeters[t] = this._truncateNameList(this.freeters, t)));
    for (t in this.persons)
      if (this.persons.hasOwnProperty(t))
        for (
          this.institutions_count[t] = this.institutions[t].length,
            this._truncateNameList(this.institutions, t),
            this.persons[t] = this.persons[t].slice(
              0,
              this.institutions[t].length
            ),
            this.persons_count[t] = [],
            r = 0,
            a = this.persons[t].length;
          r < a;
          r += 1
        )
          (this.persons_count[t][r] = this.persons[t][r].length),
            (this.persons[t][r] = this._truncateNameList(this.persons, t, r));
    if (
      ((s =
        1 === this.etal_min &&
        1 === this.etal_use_first &&
        !this.state.tmp.extension &&
        !this.state.tmp.just_looking &&
        t),
      s || this._please_chop)
    )
      for (e = 0, i = this.variables.length; e < i; e += 1) {
        (t = this.variables[e]),
          this.freeters[t].length &&
            (this._please_chop === t
              ? ((this.freeters[t] = this.freeters[t].slice(1)),
                (this.freeters_count[t] += -1),
                (this._please_chop = !1))
              : s &&
                !this._please_chop &&
                ((this.freeters[t] = this.freeters[t].slice(0, 1)),
                (this.freeters_count[t] = 1),
                (this.institutions[t] = []),
                (this.persons[t] = []),
                (this._please_chop = s)));
        for (var r = 0, a = this.persons[t].length; r < a; r++)
          if (this.persons[t][r].length) {
            if (this._please_chop === t) {
              (this.persons[t][r] = this.persons[t][r].slice(1)),
                (this.persons_count[t][r] += -1),
                (this._please_chop = !1);
              break;
            }
            if (s && !this._please_chop) {
              (this.freeters[t] = this.persons[t][r].slice(0, 1)),
                (this.freeters_count[t] = 1),
                (this.institutions[t] = []),
                (this.persons[t] = []),
                [],
                (this._please_chop = s);
              break;
            }
          }
        this.institutions[t].length &&
          (this._please_chop === t
            ? ((this.institutions[t] = this.institutions[t].slice(1)),
              (this.institutions_count[t] += -1),
              (this._please_chop = !1))
            : s &&
              !this._please_chop &&
              ((this.institutions[t] = this.institutions[t].slice(0, 1)),
              (this.institutions_count[t] = 1),
              [],
              (this._please_chop = s)));
      }
    for (e = 0, i = this.variables.length; e < i; e += 1) {
      this.institutions[t].length && (this.nameset_offset += 1);
      for (r = 0, a = this.persons[t].length; r < a; r++)
        this.persons[t][r].length && (this.nameset_offset += 1);
    }
  }),
  (CSL.NameOutput.prototype._truncateNameList = function (t, e, i) {
    var s;
    if (
      ((s = void 0 === i ? t[e] : t[e][i]),
      this.state[this.state[this.state.tmp.area].root].opt
        .max_number_of_names &&
        50 < s.length &&
        s.length >
          this.state[this.state[this.state.tmp.area].root].opt
            .max_number_of_names +
            2)
    ) {
      var r =
        this.state[this.state[this.state.tmp.area].root].opt
          .max_number_of_names;
      s = s.slice(0, r + 1).concat(s.slice(-1));
    }
    return s;
  }),
  (CSL.NameOutput.prototype.divideAndTransliterateNames = function () {
    var t,
      e,
      i,
      s,
      r = this.Item,
      a = this.variables;
    for (
      this.varnames = a.slice(),
        this.freeters = {},
        this.persons = {},
        this.institutions = {},
        t = 0,
        e = a.length;
      t < e;
      t += 1
    ) {
      var n = a[t];
      this.variable_offset[n] = this.nameset_offset;
      var o = this._normalizeVariableValue(r, n);
      if (
        (this.name.strings["suppress-min"] &&
          o.length >= this.name.strings["suppress-min"] &&
          (o = []),
        this.name.strings["suppress-max"] &&
          o.length <= this.name.strings["suppress-max"] &&
          (o = []),
        this._getFreeters(n, o),
        this._getPersonsAndInstitutions(n, o),
        this.state.opt.development_extensions.spoof_institutional_affiliations)
      )
        if (0 === this.name.strings["suppress-min"])
          for (
            this.freeters[n] = [], i = 0, s = this.persons[n].length;
            i < s;
            i += 1
          )
            this.persons[n][i] = [];
        else if (0 === this.institution.strings["suppress-min"]) {
          for (
            this.institutions[n] = [],
              this.freeters[n] = this.freeters[n].concat(this.persons[n]),
              i = 0,
              s = this.persons[n].length;
            i < s;
            i += 1
          )
            for (var l = 0, u = this.persons[n][i].length; l < u; l += 1)
              this.freeters[n].push(this.persons[n][i][l]);
          this.persons[n] = [];
        }
    }
  }),
  (CSL.NameOutput.prototype._normalizeVariableValue = function (t, e) {
    var i;
    return (
      (i =
        "string" == typeof t[e] || "number" == typeof t[e]
          ? (CSL.debug(
              'name variable "' +
                e +
                '" is string or number, not array. Attempting to fix.'
            ),
            [{ literal: t[e] + "" }])
          : t[e]
          ? ("number" != typeof t[e].length &&
              (CSL.debug(
                'name variable "' +
                  e +
                  '" is object, not array. Attempting to fix.'
              ),
              (t[e] = [t[e]])),
            t[e].slice())
          : []),
      i
    );
  }),
  (CSL.NameOutput.prototype._getFreeters = function (t, e) {
    if (
      ((this.freeters[t] = []),
      this.state.opt.development_extensions.spoof_institutional_affiliations)
    )
      for (var i = e.length - 1; -1 < i && this.isPerson(e[i]); i--) {
        var s = this._checkNickname(e.pop());
        s && this.freeters[t].push(s);
      }
    else
      for (i = e.length - 1; -1 < i; i--) {
        s = e.pop();
        if (this.isPerson(s)) s = this._checkNickname(s);
        this.freeters[t].push(s);
      }
    this.freeters[t].reverse(),
      this.freeters[t].length && (this.nameset_offset += 1);
  }),
  (CSL.NameOutput.prototype._getPersonsAndInstitutions = function (t, e) {
    if (
      ((this.persons[t] = []),
      (this.institutions[t] = []),
      this.state.opt.development_extensions.spoof_institutional_affiliations)
    ) {
      for (var i = [], s = !1, r = !0, a = e.length - 1; -1 < a; a += -1)
        if (this.isPerson(e[a])) {
          var n = this._checkNickname(e[a]);
          n && i.push(n);
        } else
          (s = !0),
            this.institutions[t].push(e[a]),
            r || (i.reverse(), this.persons[t].push(i), (i = [])),
            (r = !1);
      s &&
        (i.reverse(),
        this.persons[t].push(i),
        this.persons[t].reverse(),
        this.institutions[t].reverse());
    }
  }),
  (CSL.NameOutput.prototype._clearValues = function (t) {
    for (var e = t.length - 1; -1 < e; e += -1) t.pop();
  }),
  (CSL.NameOutput.prototype._checkNickname = function (t) {
    if (-1 < ["interview", "personal_communication"].indexOf(this.Item.type)) {
      var e;
      if (
        ((e = CSL.Util.Names.getRawName(t)),
        e &&
          this.state.sys.getAbbreviation &&
          (!this.item || !this.item["suppress-author"]))
      ) {
        this.state.transform.loadAbbreviation("default", "nickname", e);
        var i = this.state.transform.abbrevs.default.nickname[e];
        i && (t = "!here>>>" !== i && { family: i, given: "" });
      }
    }
    return t;
  }),
  (CSL.NameOutput.prototype.joinPersons = function (t, e, i, s) {
    var r;
    return (
      s || (s = "name"),
      (r =
        void 0 === i
          ? 1 === this.etal_spec[e].freeters
            ? this._joinEtAl(t, s)
            : 2 === this.etal_spec[e].freeters
            ? this._joinEllipsis(t, s)
            : this.state.tmp.sort_key_flag
            ? this._join(t, " ")
            : this._joinAnd(t, s)
          : 1 === this.etal_spec[e].persons[i]
          ? this._joinEtAl(t, s)
          : 2 === this.etal_spec[e].persons[i]
          ? this._joinEllipsis(t, s)
          : this.state.tmp.sort_key_flag
          ? this._join(t, " ")
          : this._joinAnd(t, s)),
      r
    );
  }),
  (CSL.NameOutput.prototype.joinInstitutionSets = function (t, e) {
    var i;
    return (
      (i =
        1 === this.etal_spec[e].institutions
          ? this._joinEtAl(t, "institution")
          : 2 === this.etal_spec[e].institutions
          ? this._joinEllipsis(t, "institution")
          : this._joinAnd(t, "institution")),
      i
    );
  }),
  (CSL.NameOutput.prototype.joinPersonsAndInstitutions = function (t) {
    return this._join(t, this.state.tmp.name_delimiter);
  }),
  (CSL.NameOutput.prototype.joinFreetersAndInstitutionSets = function (t) {
    var e = this._join(t, "[never here]", this.with.single, this.with.multiple);
    return e;
  }),
  (CSL.NameOutput.prototype._joinEtAl = function (t, e) {
    var i = this._join(t, this.state.tmp.name_delimiter);
    return (
      this.state.output.openLevel(this._getToken(e)),
      (this.state.output.current.value().strings.delimiter = ""),
      this.state.output.append(i, "literal", !0),
      1 < t.length
        ? this.state.output.append(this["et-al"].multiple, "literal", !0)
        : 1 === t.length &&
          this.state.output.append(this["et-al"].single, "literal", !0),
      this.state.output.closeLevel(),
      this.state.output.pop()
    );
  }),
  (CSL.NameOutput.prototype._joinEllipsis = function (t, e) {
    return this._join(
      t,
      this.state.tmp.name_delimiter,
      this.name.ellipsis.single,
      this.name.ellipsis.multiple,
      e
    );
  }),
  (CSL.NameOutput.prototype._joinAnd = function (t, e) {
    return this._join(
      t,
      this.state.inheritOpt(this[e], "delimiter", e + "-delimiter", ", "),
      this[e].and.single,
      this[e].and.multiple,
      e
    );
  }),
  (CSL.NameOutput.prototype._join = function (t, e, i, s, r) {
    var a, n;
    if (!t) return !1;
    for (a = t.length - 1; -1 < a; a += -1)
      (t[a] && 0 !== t[a].length && t[a].blobs.length) ||
        (t = t.slice(0, a).concat(t.slice(a + 1)));
    if (!t.length) return !1;
    if (i && 2 === t.length)
      i && (i = new CSL.Blob(i.blobs, i)), (t = [t[0], i, t[1]]);
    else {
      var o;
      for (o = s ? 2 : 1, a = 0, n = t.length - o; a < n; a += 1)
        t[a].strings.suffix += e;
      if (1 < t.length) {
        var l = t.pop();
        s
          ? ((s = new CSL.Blob(s.blobs, s)), t.push(s))
          : (i && (i = new CSL.Blob(i.blobs, i)), t.push(i)),
          t.push(l);
      }
    }
    for (
      this.state.output.openLevel(),
        i && s && (this.state.output.current.value().strings.delimiter = ""),
        a = 0,
        n = t.length;
      a < n;
      a += 1
    )
      this.state.output.append(t[a], !1, !0);
    return this.state.output.closeLevel(), this.state.output.pop();
  }),
  (CSL.NameOutput.prototype._getToken = function (t) {
    var e = this[t];
    if ("institution" !== t) return e;
    var i = new CSL.Token();
    return i;
  }),
  (CSL.NameOutput.prototype.setCommonTerm = function () {
    var t = this.variables,
      e = t.slice();
    if ((e.sort(), (this.common_term = e.join("")), !this.common_term))
      return !1;
    var i = !1;
    if (
      (this.label &&
        this.label[this.variables[0]] &&
        (this.label[this.variables[0]].before
          ? (i = this.state.getTerm(
              this.common_term,
              this.label[this.variables[0]].before.strings.form,
              0
            ))
          : this.label[this.variables[0]].after &&
            (i = this.state.getTerm(
              this.common_term,
              this.label[this.variables[0]].after.strings.form,
              0
            ))),
      !this.state.locale[this.state.opt.lang].terms[this.common_term] ||
        !i ||
        this.variables.length < 2)
    )
      this.common_term = !1;
    else
      for (var s = 0, r = this.variables.length - 1; s < r; s += 1) {
        var a = this.variables[s],
          n = this.variables[s + 1];
        if (this.freeters[a].length || this.freeters[n].length) {
          if (
            this.etal_spec[a].freeters !== this.etal_spec[n].freeters ||
            !this._compareNamesets(this.freeters[a], this.freeters[n])
          )
            return void (this.common_term = !1);
          1;
        }
        if (this.persons[a].length !== this.persons[n].length)
          return void (this.common_term = !1);
        for (var o = 0, l = this.persons[a].length; o < l; o += 1)
          if (
            this.etal_spec[a].persons[o] !== this.etal_spec[n].persons[o] ||
            !this._compareNamesets(this.persons[a][o], this.persons[n][o])
          )
            return void (this.common_term = !1);
      }
  }),
  (CSL.NameOutput.prototype._compareNamesets = function (t, e) {
    if (t.length !== e.length) return !1;
    for (var i = 0, s = e.length; i < s; i += 1) {
      e[i];
      for (var r = 0, a = CSL.NAME_PARTS.length; r < a; r += 1) {
        var n = CSL.NAME_PARTS[r];
        if (!t[i] || t[i][n] != e[i][n]) return !1;
      }
    }
    return !0;
  }),
  (CSL.NameOutput.prototype.constrainNames = function () {
    var t;
    this.names_count = 0;
    for (var e = 0, i = this.variables.length; e < i; e += 1) {
      var s = this.variables[e];
      (t = this.nameset_base + e),
        this.freeters[s].length &&
          (this.state.tmp.names_max.push(this.freeters[s].length, "literal"),
          this._imposeNameConstraints(this.freeters, this.freeters_count, s, t),
          (this.names_count += this.freeters[s].length)),
        this.institutions[s].length &&
          (this.state.tmp.names_max.push(
            this.institutions[s].length,
            "literal"
          ),
          this._imposeNameConstraints(
            this.institutions,
            this.institutions_count,
            s,
            t
          ),
          (this.persons[s] = this.persons[s].slice(
            0,
            this.institutions[s].length
          )),
          (this.names_count += this.institutions[s].length));
      for (var r = 0, a = this.persons[s].length; r < a; r += 1)
        this.persons[s][r].length &&
          (this.state.tmp.names_max.push(this.persons[s][r].length, "literal"),
          this._imposeNameConstraints(
            this.persons[s],
            this.persons_count[s],
            r,
            t
          ),
          (this.names_count += this.persons[s][r].length));
    }
  }),
  (CSL.NameOutput.prototype._imposeNameConstraints = function (t, e, i, s) {
    var r = t[i],
      a = this.state.tmp["et-al-min"];
    this.state.tmp.suppress_decorations
      ? this.state.tmp.disambig_request &&
        this.state.tmp.disambig_request.names[s]
        ? (a = this.state.tmp.disambig_request.names[s])
        : e[i] >= this.etal_min && (a = this.etal_use_first)
      : (this.state.tmp.disambig_request &&
        this.state.tmp.disambig_request.names[s] > this.etal_use_first
          ? (a =
              e[i] < this.etal_min
                ? e[i]
                : this.state.tmp.disambig_request.names[s])
          : e[i] >= this.etal_min && (a = this.etal_use_first),
        this.etal_use_last && a > this.etal_min - 2 && (a = this.etal_min - 2));
    var n = this.etal_min >= this.etal_use_first,
      o = e[i] > a;
    a > e[i] && (a = r.length),
      n &&
        o &&
        (this.etal_use_last
          ? (t[i] = r.slice(0, a).concat(r.slice(-1)))
          : (t[i] = r.slice(0, a))),
      (this.state.tmp.disambig_settings.names[s] = t[i].length),
      this.state.disambiguate.padBase(this.state.tmp.disambig_settings);
  }),
  (CSL.NameOutput.prototype.disambigNames = function () {
    for (var t, e = 0, i = this.variables.length; e < i; e += 1) {
      var s = this.variables[e];
      if (
        ((t = this.nameset_base + e),
        this.freeters[s].length && this._runDisambigNames(this.freeters[s], t),
        this.institutions[s].length)
      ) {
        void 0 === this.state.tmp.disambig_settings.givens[t] &&
          (this.state.tmp.disambig_settings.givens[t] = []);
        for (var r = 0, a = this.institutions[s].length; r < a; r += 1)
          void 0 === this.state.tmp.disambig_settings.givens[t][r] &&
            this.state.tmp.disambig_settings.givens[t].push(2);
      }
      for (r = 0, a = this.persons[s].length; r < a; r += 1)
        this.persons[s][r].length &&
          this._runDisambigNames(this.persons[s][r], t);
    }
  }),
  (CSL.NameOutput.prototype._runDisambigNames = function (t, e) {
    var i, s, r, a, n, o, l;
    for (n = 0, o = t.length; n < o; n += 1)
      if (t[n].given || t[n].family) {
        if (
          ((r = this.state.inheritOpt(this.name, "initialize-with")),
          this.state.registry.namereg.addname("" + this.Item.id, t[n], n),
          (i = this.state.tmp.disambig_settings.givens[e]),
          void 0 === i)
        )
          for (var u = 0, h = e + 1; u < h; u += 1)
            this.state.tmp.disambig_settings.givens[u] ||
              (this.state.tmp.disambig_settings.givens[u] = []);
        if (
          ((i = this.state.tmp.disambig_settings.givens[e][n]),
          void 0 === i &&
            ((s = this.state.inheritOpt(this.name, "form", "name-form")),
            (a = this.state.registry.namereg.evalname(
              "" + this.Item.id,
              t[n],
              n,
              0,
              s,
              r
            )),
            this.state.tmp.disambig_settings.givens[e].push(a)),
          (s = this.state.inheritOpt(this.name, "form", "name-form")),
          (l = this.state.registry.namereg.evalname(
            "" + this.Item.id,
            t[n],
            n,
            0,
            s,
            r
          )),
          this.state.tmp.disambig_request)
        ) {
          var p = this.state.tmp.disambig_settings.givens[e][n];
          1 !== p ||
            "by-cite" !==
              this.state.citation.opt["givenname-disambiguation-rule"] ||
            (void 0 !== this.state.inheritOpt(this.name, "initialize-with") &&
              void 0 !== t[n].given) ||
            (p = 2),
            (a = p),
            this.state.opt["disambiguate-add-givenname"] &&
              t[n].given &&
              (a = this.state.registry.namereg.evalname(
                "" + this.Item.id,
                t[n],
                n,
                a,
                this.state.inheritOpt(this.name, "form", "name-form"),
                this.state.inheritOpt(this.name, "initialize-with")
              ));
        } else a = l;
        !this.state.tmp.just_looking &&
          this.item &&
          this.item.position === CSL.POSITION_FIRST &&
          a < l &&
          (a = l),
          this.state.tmp.sort_key_flag ||
            ((this.state.tmp.disambig_settings.givens[e][n] = a),
            "string" != typeof r ||
              (void 0 !== this.name.strings.initialize &&
                !0 !== this.name.strings.initialize) ||
              (this.state.tmp.disambig_settings.use_initials = !0));
      }
  }),
  (CSL.NameOutput.prototype.getEtAlConfig = function () {
    var t = this.item;
    (this["et-al"] = {}),
      this.state.output.append(this.etal_term, this.etal_style, !0),
      (this["et-al"].single = this.state.output.pop()),
      (this["et-al"].single.strings.suffix = this.etal_suffix),
      (this["et-al"].single.strings.prefix = this.etal_prefix_single),
      this.state.output.append(this.etal_term, this.etal_style, !0),
      (this["et-al"].multiple = this.state.output.pop()),
      (this["et-al"].multiple.strings.suffix = this.etal_suffix),
      (this["et-al"].multiple.strings.prefix = this.etal_prefix_multiple),
      void 0 === t && (t = {}),
      t.position
        ? (this.state.inheritOpt(this.name, "et-al-subsequent-min")
            ? (this.etal_min = this.state.inheritOpt(
                this.name,
                "et-al-subsequent-min"
              ))
            : (this.etal_min = this.state.inheritOpt(this.name, "et-al-min")),
          this.state.inheritOpt(this.name, "et-al-subsequent-use-first")
            ? (this.etal_use_first = this.state.inheritOpt(
                this.name,
                "et-al-subsequent-use-first"
              ))
            : (this.etal_use_first = this.state.inheritOpt(
                this.name,
                "et-al-use-first"
              )))
        : (this.state.tmp["et-al-min"]
            ? (this.etal_min = this.state.tmp["et-al-min"])
            : (this.etal_min = this.state.inheritOpt(this.name, "et-al-min")),
          this.state.tmp["et-al-use-first"]
            ? (this.etal_use_first = this.state.tmp["et-al-use-first"])
            : (this.etal_use_first = this.state.inheritOpt(
                this.name,
                "et-al-use-first"
              )),
          "boolean" == typeof this.state.tmp["et-al-use-last"]
            ? (this.etal_use_last = this.state.tmp["et-al-use-last"])
            : (this.etal_use_last = this.state.inheritOpt(
                this.name,
                "et-al-use-last"
              ))),
      this.state.tmp["et-al-min"] ||
        (this.state.tmp["et-al-min"] = this.etal_min);
  }),
  (CSL.NameOutput.prototype.setEtAlParameters = function () {
    var t, e, i, s;
    for (t = 0, e = this.variables.length; t < e; t += 1) {
      var r = this.variables[t];
      for (
        void 0 === this.etal_spec[r] &&
          (this.etal_spec[r] = { freeters: 0, institutions: 0, persons: [] }),
          this.etal_spec[this.nameset_base + t] = this.etal_spec[r],
          this.freeters[r].length && this._setEtAlParameter("freeters", r),
          i = 0,
          s = this.persons[r].length;
        i < s;
        i += 1
      )
        void 0 === this.etal_spec[r][i] && (this.etal_spec[r].persons[i] = 0),
          this._setEtAlParameter("persons", r, i);
      this.institutions[r].length && this._setEtAlParameter("institutions", r);
    }
  }),
  (CSL.NameOutput.prototype._setEtAlParameter = function (t, e, i) {
    var s, r;
    (r =
      "persons" === t
        ? ((s = this.persons[e][i]), this.persons_count[e][i])
        : ((s = this[t][e]), this[t + "_count"][e])),
      s.length < r && !this.state.tmp.sort_key_flag
        ? this.etal_use_last
          ? "persons" === t
            ? (this.etal_spec[e].persons[i] = 2)
            : (this.etal_spec[e][t] = 2)
          : "persons" === t
          ? (this.etal_spec[e].persons[i] = 1)
          : (this.etal_spec[e][t] = 1)
        : "persons" === t
        ? (this.etal_spec[e].persons[i] = 0)
        : (this.etal_spec[e][t] = 0);
  }),
  (CSL.NameOutput.prototype.renderAllNames = function () {
    for (var t, e = 0, i = this.variables.length; e < i; e += 1) {
      var s = this.variables[e];
      (this.freeters[s].length || this.institutions[s].length) &&
        (this.state.tmp.group_context.tip.condition ||
          (this.state.tmp.just_did_number = !1)),
        (t = this.nameset_base + e),
        this.freeters[s].length &&
          (this.freeters[s] = this._renderNames(s, this.freeters[s], t));
      for (var r = 0, a = this.institutions[s].length; r < a; r += 1)
        this.persons[s][r] = this._renderNames(s, this.persons[s][r], t, r);
    }
    this.renderInstitutionNames();
  }),
  (CSL.NameOutput.prototype.renderInstitutionNames = function () {
    for (var t = 0, e = this.variables.length; t < e; t += 1)
      for (
        var i = this.variables[t], s = 0, r = this.institutions[i].length;
        s < r;
        s += 1
      ) {
        var a,
          n = this.institutions[i][s];
        a = this.state.tmp.extension
          ? ["sort"]
          : n.isInstitution || n.literal
          ? this.state.opt["cite-lang-prefs"].institutions
          : this.state.opt["cite-lang-prefs"].persons;
        var o = { primary: "locale-orig", secondary: !1, tertiary: !1 };
        if (a)
          for (
            var l = ["primary", "secondary", "tertiary"], u = 0, h = l.length;
            u < h && !(a.length - 1 < u);
            u += 1
          )
            a[u] && (o[l[u]] = "locale-" + a[u]);
        else o.primary = "locale-translat";
        "bibliography" === this.state.tmp.area ||
          ("citation" === this.state.tmp.area &&
            "note" === this.state.opt.xclass &&
            this.item &&
            !this.item.position) ||
          ((o.secondary = !1), (o.tertiary = !1)),
          this.setRenderedName(n);
        var p = this._renderInstitutionName(i, n, o, s);
        this.institutions[i][s] = p;
      }
  }),
  (CSL.NameOutput.prototype._renderInstitutionName = function (t, e, i, s) {
    var r,
      a,
      n,
      o,
      l,
      u,
      h = this.getName(e, i.primary, !0),
      p = h.name,
      c = h.usedOrig;
    if ((p && (p = this.fixupInstitution(p, t, s)), (m = !1), i.secondary)) {
      h = this.getName(e, i.secondary, !1, c);
      var m = h.name;
      (c = h.usedOrig), m && (m = this.fixupInstitution(m, t, s));
    }
    (r = !1),
      i.tertiary &&
        ((h = this.getName(e, i.tertiary, !1, c)),
        (r = h.name),
        r && (r = this.fixupInstitution(r, t, s)));
    var f = {
      l: { pri: !1, sec: !1, ter: !1 },
      s: { pri: !1, sec: !1, ter: !1 },
    };
    switch (
      (p && ((f.l.pri = p.long), (f.s.pri = p.short.length ? p.short : p.long)),
      m && ((f.l.sec = m.long), (f.s.sec = m.short.length ? m.short : m.long)),
      r && ((f.l.ter = r.long), (f.s.ter = r.short.length ? r.short : r.long)),
      this.institution.strings["institution-parts"])
    ) {
      case "short":
        o = p.short.length
          ? ((n = this._getShortStyle()),
            [
              this._composeOneInstitutionPart(
                [f.s.pri, f.s.sec, f.s.ter],
                i,
                n,
                t
              ),
            ])
          : ((a = this._getLongStyle(p, t, s)),
            [
              this._composeOneInstitutionPart(
                [f.l.pri, f.l.sec, f.l.ter],
                i,
                a,
                t
              ),
            ]);
        break;
      case "short-long":
        (a = this._getLongStyle(p, t, s)),
          (n = this._getShortStyle()),
          (l = this._renderOneInstitutionPart(p.short, n)),
          (u = this._composeOneInstitutionPart(
            [f.l.pri, f.l.sec, f.l.ter],
            i,
            a,
            t
          )),
          (o = [l, u]);
        break;
      case "long-short":
        (a = this._getLongStyle(p, t, s)),
          (n = this._getShortStyle()),
          (l = this._renderOneInstitutionPart(p.short, n)),
          (u = this._composeOneInstitutionPart(
            [f.l.pri, f.l.sec, f.l.ter],
            i,
            a,
            t
          )),
          (o = [u, l]);
        break;
      default:
        (a = this._getLongStyle(p, t, s)),
          (o = [
            this._composeOneInstitutionPart(
              [f.l.pri, f.l.sec, f.l.ter],
              i,
              a,
              t
            ),
          ]);
    }
    var d = this._join(o, " ");
    return this.state.tmp.name_node.children.push(d), d;
  }),
  (CSL.NameOutput.prototype._composeOneInstitutionPart = function (t, e, i, s) {
    var r,
      a,
      n,
      o,
      l = !1,
      u = !1,
      h = !1;
    if (t[0]) {
      if (
        ((r = CSL.Util.cloneToken(i)),
        this.state.opt.citeAffixes[e.primary] &&
          "<i>" === this.state.opt.citeAffixes.institutions[e.primary].prefix)
      ) {
        for (var p = !1, c = 0, m = r.decorations.length; c < m; c += 1)
          "@font-style" === i.decorations[c][0] &&
            "italic" === r.decorations[c][1] &&
            (p = !0);
        p || r.decorations.push(["@font-style", "italic"]);
      }
      l = this._renderOneInstitutionPart(t[0], r);
    }
    if (
      (t[1] && (u = this._renderOneInstitutionPart(t[1], i)),
      t[2] && (h = this._renderOneInstitutionPart(t[2], i)),
      u || h)
    ) {
      this.state.output.openLevel("empty"),
        this.state.output.append(l),
        (a = CSL.Util.cloneToken(i)),
        e.secondary &&
          ((a.strings.prefix =
            this.state.opt.citeAffixes.institutions[e.secondary].prefix),
          (a.strings.suffix =
            this.state.opt.citeAffixes.institutions[e.secondary].suffix),
          a.strings.prefix || (a.strings.prefix = " "));
      var f = new CSL.Token();
      f.decorations.push(["@font-style", "normal"]),
        f.decorations.push(["@font-weight", "normal"]),
        this.state.output.openLevel(f),
        this.state.output.append(u, a),
        this.state.output.closeLevel(),
        (n = CSL.Util.cloneToken(i)),
        e.tertiary &&
          ((n.strings.prefix =
            this.state.opt.citeAffixes.institutions[e.tertiary].prefix),
          (n.strings.suffix =
            this.state.opt.citeAffixes.institutions[e.tertiary].suffix),
          n.strings.prefix || (n.strings.prefix = " "));
      var d = new CSL.Token();
      d.decorations.push(["@font-style", "normal"]),
        d.decorations.push(["@font-weight", "normal"]),
        this.state.output.openLevel(d),
        this.state.output.append(h, n),
        this.state.output.closeLevel(),
        this.state.output.closeLevel(),
        (o = this.state.output.pop());
    } else o = l;
    return o;
  }),
  (CSL.NameOutput.prototype._renderOneInstitutionPart = function (t, e) {
    for (var i = 0, s = t.length; i < s; i += 1)
      if (t[i]) {
        var r = t[i];
        if (this.state.tmp.strip_periods) r = r.replace(/\./g, "");
        else
          for (var a = 0, n = e.decorations.length; a < n; a += 1)
            if (
              "@strip-periods" === e.decorations[a][0] &&
              "true" === e.decorations[a][1]
            ) {
              r = r.replace(/\./g, "");
              break;
            }
        (this.state.tmp.group_context.tip.variable_success = !0),
          this.state.tmp.can_substitute.replace(!1, CSL.LITERAL),
          (t[i] =
            "!here>>>" !== r &&
            (this.state.output.append(r, e, !0), this.state.output.pop()));
      }
    return (
      void 0 === this.institution.strings["part-separator"] &&
        (this.institution.strings["part-separator"] =
          this.state.tmp.name_delimiter),
      this._join(t, this.institution.strings["part-separator"])
    );
  }),
  (CSL.NameOutput.prototype._renderNames = function (t, e, i, s) {
    var r = !1;
    if (e.length) {
      for (var a = [], n = 0, o = e.length; n < o; n += 1) {
        var l,
          u = e[n];
        l = this.state.tmp.extension
          ? ["sort"]
          : u.isInstitution || u.literal
          ? this.state.opt["cite-lang-prefs"].institutions
          : this.state.opt["cite-lang-prefs"].persons;
        var h = { primary: "locale-orig", secondary: !1, tertiary: !1 };
        if (l)
          for (
            var p = ["primary", "secondary", "tertiary"], c = 0, m = p.length;
            c < m && !(l.length - 1 < c);
            c += 1
          )
            h[p[c]] = "locale-" + l[c];
        else h.primary = "locale-translat";
        if (
          ((this.state.tmp.sort_key_flag ||
            ("bibliography" !== this.state.tmp.area &&
              ("citation" !== this.state.tmp.area ||
                "note" !== this.state.opt.xclass ||
                !this.item ||
                this.item.position))) &&
            ((h.secondary = !1), (h.tertiary = !1)),
          this.setRenderedName(u),
          u.literal || u.isInstitution)
        )
          a.push(this._renderInstitutionName(t, u, h, s));
        else {
          var f = this._renderPersonalName(t, u, h, i, n, s),
            d = CSL.Util.cloneToken(this.name);
          this.state.output.append(f, d, !0), a.push(this.state.output.pop());
        }
      }
      r = this.joinPersons(a, i, s);
    }
    return r;
  }),
  (CSL.NameOutput.prototype._renderPersonalName = function (t, e, i, s, r, a) {
    var n = this.getName(e, i.primary, !0),
      o = this._renderOnePersonalName(n.name, s, r, a),
      l = !1;
    i.secondary &&
      ((n = this.getName(e, i.secondary, !1, n.usedOrig)),
      n.name && (l = this._renderOnePersonalName(n.name, s, r, a)));
    var u,
      h = !1;
    if (
      (i.tertiary &&
        ((n = this.getName(e, i.tertiary, !1, n.usedOrig)),
        n.name && (h = this._renderOnePersonalName(n.name, s, r, a))),
      l || h)
    ) {
      this.state.output.openLevel("empty"), this.state.output.append(o);
      var p = new CSL.Token();
      i.secondary &&
        ((p.strings.prefix =
          this.state.opt.citeAffixes.persons[i.secondary].prefix),
        (p.strings.suffix =
          this.state.opt.citeAffixes.persons[i.secondary].suffix),
        p.strings.prefix || (p.strings.prefix = " ")),
        this.state.output.append(l, p);
      var c = new CSL.Token();
      i.tertiary &&
        ((c.strings.prefix =
          this.state.opt.citeAffixes.persons[i.tertiary].prefix),
        (c.strings.suffix =
          this.state.opt.citeAffixes.persons[i.tertiary].suffix),
        c.strings.prefix || (c.strings.prefix = " ")),
        this.state.output.append(h, c),
        this.state.output.closeLevel(),
        (u = this.state.output.pop());
    } else u = o;
    return u;
  }),
  (CSL.NameOutput.prototype._isRomanesque = function (t) {
    var e = 2;
    if (
      (t.family.replace(/\"/g, "").match(CSL.ROMANESQUE_REGEXP) || (e = 0),
      !e &&
        t.given &&
        t.given.match(CSL.STARTSWITH_ROMANESQUE_REGEXP) &&
        (e = 1),
      2 == e)
    ) {
      if (t.multi && t.multi.main) var i = t.multi.main.slice(0, 2);
      else this.Item.language && (i = this.Item.language.slice(0, 2));
      -1 < ["ja", "zh"].indexOf(i) && (e = 1);
    }
    return e;
  }),
  (CSL.NameOutput.prototype._renderOnePersonalName = function (t, e, i, s) {
    var r = t,
      a = this._droppingParticle(r, e, s),
      n = this._familyName(r),
      o = this._nonDroppingParticle(r),
      l = this._givenName(r, e, i),
      u = this._nameSuffix(r);
    this._isShort(e, i) &&
      !r["full-form-always"] &&
      ((a = !1), (l = !1), (u = !1));
    var h,
      p = this.state.inheritOpt(this.name, "sort-separator");
    p || (p = ""), (h = r["comma-suffix"] ? ", " : " ");
    var c = this._isRomanesque(r);
    var m,
      f,
      d,
      g,
      b = (function t(e) {
        return (
          !!e &&
          ("string" == typeof e.blobs
            ? -1 < ["’", "'", "-", " "].indexOf(e.blobs.slice(-1))
            : t(e.blobs[e.blobs.length - 1]))
        );
      })(o);
    if (0 === c) m = this._join([o, n, l], "");
    else if (1 === c || r["static-ordering"]) m = this._join([o, n, l], " ");
    else if (r["reverse-ordering"]) m = this._join([l, o, n], " ");
    else if (this.state.tmp.sort_key_flag)
      m =
        ((f =
          "never" === this.state.opt["demote-non-dropping-particle"]
            ? ((d = this._join([o, n, a], " ")),
              this._join([d, l], this.state.opt.sort_sep))
            : ((g = this._join([l, a, o], " ")),
              this._join([n, g], this.state.opt.sort_sep))),
        this._join([f, u], " "));
    else if (
      "all" === this.state.inheritOpt(this.name, "name-as-sort-order") ||
      ("first" === this.state.inheritOpt(this.name, "name-as-sort-order") &&
        0 === i &&
        (0 === s || void 0 === s))
    )
      -1 < ["Lord", "Lady"].indexOf(r.given) && (p = ", "),
        (m =
          ((f =
            -1 <
            ["always", "display-and-sort"].indexOf(
              this.state.opt["demote-non-dropping-particle"]
            )
              ? ((g = this._join([l, a], r["comma-dropping-particle"] + " ")),
                (g = this._join([g, o], " ")),
                g &&
                  this.given &&
                  ((g.strings.prefix = this.given.strings.prefix),
                  (g.strings.suffix = this.given.strings.suffix)),
                n &&
                  this.family &&
                  ((n.strings.prefix = this.family.strings.prefix),
                  (n.strings.suffix = this.family.strings.suffix)),
                this._join([n, g], p))
              : ((d = b ? this._join([o, n], "") : this._join([o, n], " ")),
                d &&
                  this.family &&
                  ((d.strings.prefix = this.family.strings.prefix),
                  (d.strings.suffix = this.family.strings.suffix)),
                (g = this._join([l, a], r["comma-dropping-particle"] + " ")),
                g &&
                  this.given &&
                  ((g.strings.prefix = this.given.strings.prefix),
                  (g.strings.suffix = this.given.strings.suffix)),
                this._join([d, g], p))),
          this._join([f, u], p)));
    else {
      r["dropping-particle"] &&
        r.family &&
        !r["non-dropping-particle"] &&
        -1 < ["'", "ʼ", "’", "-"].indexOf(r["dropping-particle"].slice(-1)) &&
        ((n = this._join([a, n], "")), (a = !1)),
        this.state.tmp.term_predecessor;
      var _ = " ";
      this.state.inheritOpt(this.name, "initialize-with") &&
        this.state
          .inheritOpt(this.name, "initialize-with")
          .match(/[\u00a0\ufeff]/) &&
        -1 <
          ["fr", "ru", "cs"].indexOf(
            this.state.opt["default-locale"][0].slice(0, 2)
          ) &&
        (_ = " "),
        (g = b
          ? ((g = this._join([o, n], "")), this._join([a, g], _))
          : this._join([a, o, n], _)),
        (g = this._join([g, u], h)),
        g &&
          this.family &&
          ((g.strings.prefix = this.family.strings.prefix),
          (g.strings.suffix = this.family.strings.suffix)),
        l &&
          this.given &&
          ((l.strings.prefix = this.given.strings.prefix),
          (l.strings.suffix = this.given.strings.suffix)),
        g.strings.prefix && (r["comma-dropping-particle"] = ""),
        (m = this._join([l, g], r["comma-dropping-particle"] + _));
    }
    return (
      (this.state.tmp.group_context.tip.variable_success = !0),
      this.state.tmp.can_substitute.replace(!1, CSL.LITERAL),
      (this.state.tmp.term_predecessor = !0),
      this.state.tmp.name_node.children.push(m),
      m
    );
  }),
  (CSL.NameOutput.prototype._isShort = function (t, e) {
    return 0 === this.state.tmp.disambig_settings.givens[t][e];
  }),
  (CSL.NameOutput.prototype._normalizeNameInput = function (t) {
    var e = {
      literal: t.literal,
      family: t.family,
      isInstitution: t.isInstitution,
      given: t.given,
      suffix: t.suffix,
      "comma-suffix": t["comma-suffix"],
      "non-dropping-particle": t["non-dropping-particle"],
      "dropping-particle": t["dropping-particle"],
      "static-ordering": t["static-ordering"],
      "static-particles": t["static-particles"],
      "reverse-ordering": t["reverse-ordering"],
      "full-form-always": t["full-form-always"],
      "parse-names": t["parse-names"],
      "comma-dropping-particle": "",
      block_initialize: t.block_initialize,
      multi: t.multi,
    };
    return this._parseName(e), e;
  }),
  (CSL.NameOutput.prototype._stripPeriods = function (t, e) {
    var i = this[t + "_decor"];
    if (e)
      if (this.state.tmp.strip_periods) e = e.replace(/\./g, "");
      else if (i)
        for (var s = 0, r = i.decorations.length; s < r; s += 1)
          if (
            "@strip-periods" === i.decorations[s][0] &&
            "true" === i.decorations[s][1]
          ) {
            e = e.replace(/\./g, "");
            break;
          }
    return e;
  }),
  (CSL.NameOutput.prototype._nonDroppingParticle = function (t) {
    var e = t["non-dropping-particle"];
    e && this.state.tmp.sort_key_flag && (e = e.replace(/[\'\u2019]/, ""));
    var i = this._stripPeriods("family", e);
    return (
      !!this.state.output.append(i, this.family_decor, !0) &&
      this.state.output.pop()
    );
  }),
  (CSL.NameOutput.prototype._droppingParticle = function (t, e, i) {
    var s = t["dropping-particle"];
    s && this.state.tmp.sort_key_flag && (s = s.replace(/[\'\u2019]/, ""));
    var r = this._stripPeriods("given", s);
    if (
      t["dropping-particle"] &&
      t["dropping-particle"].match(/^et.?al[^a-z]$/)
    )
      this.state.inheritOpt(this.name, "et-al-use-last")
        ? void 0 === i
          ? (this.etal_spec[e].freeters = 2)
          : (this.etal_spec[e].persons = 2)
        : void 0 === i
        ? (this.etal_spec[e].freeters = 1)
        : (this.etal_spec[e].persons = 1),
        (t["comma-dropping-particle"] = "");
    else if (this.state.output.append(r, this.given_decor, !0))
      return this.state.output.pop();
    return !1;
  }),
  (CSL.NameOutput.prototype._familyName = function (t) {
    var e = this._stripPeriods("family", t.family);
    return (
      !!this.state.output.append(e, this.family_decor, !0) &&
      this.state.output.pop()
    );
  }),
  (CSL.NameOutput.prototype._givenName = function (t, e, i) {
    var s;
    if (!1 === this.state.inheritOpt(this.name, "initialize"))
      t.family &&
        t.given &&
        !1 === this.state.inheritOpt(this.name, "initialize") &&
        (t.given = CSL.Util.Names.initializeWith(
          this.state,
          t.given,
          this.state.inheritOpt(this.name, "initialize-with"),
          !0
        )),
        (t.given = CSL.Util.Names.unInitialize(this.state, t.given));
    else if (
      t.family &&
      1 === this.state.tmp.disambig_settings.givens[e][i] &&
      !t.block_initialize
    ) {
      var r = this.state.inheritOpt(this.name, "initialize-with");
      t.given = CSL.Util.Names.initializeWith(this.state, t.given, r);
    } else t.given = CSL.Util.Names.unInitialize(this.state, t.given);
    var a = this._stripPeriods("given", t.given),
      n = this.state.output.append(a, this.given_decor, !0);
    return !!n && ((s = this.state.output.pop()), s);
  }),
  (CSL.NameOutput.prototype._nameSuffix = function (t) {
    var e,
      i = t.suffix;
    "string" == typeof this.state.inheritOpt(this.name, "initialize-with") &&
      (i = CSL.Util.Names.initializeWith(
        this.state,
        t.suffix,
        this.state.inheritOpt(this.name, "initialize-with"),
        !0
      )),
      (i = this._stripPeriods("family", i));
    var s = "";
    i && "." === i.slice(-1) && ((i = i.slice(0, -1)), (s = "."));
    var r = this.state.output.append(i, "empty", !0);
    return (
      !!r &&
      ((e = this.state.output.pop()),
      (e.strings.suffix = s + e.strings.suffix),
      e)
    );
  }),
  (CSL.NameOutput.prototype._getLongStyle = function (t, e, i) {
    var s;
    return (
      (s =
        t.short.length && this.institutionpart["long-with-short"]
          ? this.institutionpart["long-with-short"]
          : this.institutionpart.long),
      s || (s = new CSL.Token()),
      s
    );
  }),
  (CSL.NameOutput.prototype._getShortStyle = function () {
    var t;
    return (
      (t = this.institutionpart.short
        ? this.institutionpart.short
        : new CSL.Token()),
      t
    );
  }),
  (CSL.NameOutput.prototype._parseName = function (t) {
    var e;
    if (!t["parse-names"] && void 0 !== t["parse-names"]) return t;
    t.family &&
      !t.given &&
      t.isInstitution &&
      ((t.literal = t.family), (t.family = void 0), (t.isInstitution = void 0)),
      (t.family &&
        '"' === t.family.slice(0, 1) &&
        '"' === t.family.slice(-1)) ||
      (!t["parse-names"] && void 0 !== t["parse-names"])
        ? ((t.family = t.family.slice(1, -1)), (e = !0), (t["parse-names"] = 0))
        : (e = !1),
      this.state.opt.development_extensions.parse_names &&
        !t["non-dropping-particle"] &&
        t.family &&
        !e &&
        t.given &&
        (t["static-particles"] || CSL.parseParticles(t, !0));
  }),
  (CSL.NameOutput.prototype.getName = function (t, e, i, s) {
    if (s && "locale-orig" === e) return { name: !1, usedOrig: s };
    t.family || (t.family = ""), t.given || (t.given = "");
    var r = {};
    r["static-ordering"] = this.getStaticOrder(t);
    var a,
      n = !0;
    if ("locale-orig" !== e && ((n = !1), t.multi))
      for (var o = this.state.opt[e], l = 0, u = o.length; l < u; l += 1)
        if (((p = o[l]), t.multi._key[p])) {
          n = !0;
          var h = t.isInstitution;
          (t = t.multi._key[p]),
            (t.isInstitution = h),
            (r = this.getNameParams(p)),
            (r.transliterated = !0);
          break;
        }
    if (!n) {
      var p = !1;
      t.multi && t.multi.main
        ? (p = t.multi.main)
        : this.Item.language && (p = this.Item.language),
        p && (r = this.getNameParams(p));
    }
    return i || n
      ? (t.family || (t.family = ""),
        t.given || (t.given = ""),
        (t = {
          family: t.family,
          given: t.given,
          "non-dropping-particle": t["non-dropping-particle"],
          "dropping-particle": t["dropping-particle"],
          suffix: t.suffix,
          "static-ordering": r["static-ordering"],
          "static-particles": t["static-particles"],
          "reverse-ordering": r["reverse-ordering"],
          "full-form-always": r["full-form-always"],
          "parse-names": t["parse-names"],
          "comma-suffix": t["comma-suffix"],
          "comma-dropping-particle": t["comma-dropping-particle"],
          transliterated: r.transliterated,
          block_initialize: r["block-initialize"],
          literal: t.literal,
          isInstitution: t.isInstitution,
          multi: t.multi,
        }),
        !t.literal &&
          !t.given &&
          t.family &&
          t.isInstitution &&
          (t.literal = t.family),
        t.literal && (delete t.family, delete t.given),
        (t = this._normalizeNameInput(t)),
        (a = s || !n),
        { name: t, usedOrig: a })
      : { name: !1, usedOrig: s };
  }),
  (CSL.NameOutput.prototype.getNameParams = function (t) {
    var e = {},
      i = CSL.localeResolve(
        this.Item.language,
        this.state.opt["default-locale"][0]
      ),
      s = this.state.locale[i.best]
        ? i.best
        : this.state.opt["default-locale"][0],
      r = this.state.locale[s].opts["name-as-sort-order"],
      a = this.state.locale[s].opts["name-as-reverse-order"],
      n = this.state.locale[s].opts["name-never-short"],
      o = t.split("-")[0];
    return (
      r && r[o] && ((e["static-ordering"] = !0), (e["reverse-ordering"] = !1)),
      a && a[o] && ((e["reverse-ordering"] = !0), (e["static-ordering"] = !1)),
      n && n[o] && (e["full-form-always"] = !0),
      e["static-ordering"] && (e["block-initialize"] = !0),
      e
    );
  }),
  (CSL.NameOutput.prototype.setRenderedName = function (t) {
    if ("bibliography" === this.state.tmp.area) {
      for (var e = "", i = 0, s = CSL.NAME_PARTS.length; i < s; i += 1)
        t[CSL.NAME_PARTS[i]] && (e += t[CSL.NAME_PARTS[i]]);
      this.state.tmp.rendered_name.push(e);
    }
  }),
  (CSL.NameOutput.prototype.fixupInstitution = function (t, e, i) {
    this.state.sys.getHumanForm &&
      "legal_case" === this.Item.type &&
      "authority" === e &&
      (t.literal = this.state.sys.getHumanForm(
        this.Item.jurisdiction,
        t.literal
      )),
      (t = this._splitInstitution(t, e, i)),
      this.institution.strings["reverse-order"] && t.long.reverse();
    var s = t.long,
      r = t.long.slice(),
      a = !1;
    if (this.state.sys.getAbbreviation)
      for (var n = this.Item.jurisdiction, o = 0, l = s.length; o < l; o += 1)
        (n = this.state.transform.loadAbbreviation(
          n,
          "institution-part",
          s[o]
        )),
          this.state.transform.abbrevs[n]["institution-part"][s[o]] &&
            ((r[o] = this.state.transform.abbrevs[n]["institution-part"][s[o]]),
            (a = !0));
    return (t.short = a ? r : []), t;
  }),
  (CSL.NameOutput.prototype.getStaticOrder = function (t, e) {
    var i = !1;
    return (
      !e && t["static-ordering"]
        ? (i = !0)
        : 0 === this._isRomanesque(t)
        ? (i = !0)
        : (!t.multi || !t.multi.main) &&
          this.Item.language &&
          -1 < ["vi", "hu"].indexOf(this.Item.language)
        ? (i = !0)
        : t.multi &&
          t.multi.main &&
          -1 < ["vi", "hu"].indexOf(t.multi.main.slice(0, 2))
        ? (i = !0)
        : this.state.opt["auto-vietnamese-names"] &&
          CSL.VIETNAMESE_NAMES.exec(t.family + " " + t.given) &&
          CSL.VIETNAMESE_SPECIALS.exec(t.family + t.given) &&
          (i = !0),
      i
    );
  }),
  (CSL.NameOutput.prototype._splitInstitution = function (t, e, i) {
    var s = {};
    !t.literal && t.family && ((t.literal = t.family), delete t.family);
    var r = t.literal.replace(/\s*\|\s*/g, "|");
    if (
      ((r = r.split("|")),
      "short" === this.institution.strings.form &&
        this.state.sys.getAbbreviation)
    )
      for (var a = this.Item.jurisdiction, n = r.length; 0 < n; n += -1) {
        var o = r.slice(0, n).join("|");
        if (
          ((a = this.state.transform.loadAbbreviation(
            a,
            "institution-entire",
            o
          )),
          this.state.transform.abbrevs[a]["institution-entire"][o])
        ) {
          var l = this.state.transform.abbrevs[a]["institution-entire"][o];
          l = this.state.transform.quashCheck(l);
          var u = l.split(/>>[0-9]{4}>>/),
            h = l.match(/>>([0-9]{4})>>/);
          if (
            ((l = u.pop()),
            0 < u.length &&
              this.Item["original-date"] &&
              this.Item["original-date"].year)
          )
            for (
              var p = h.length - 1;
              0 < p &&
              !(
                parseInt(this.Item["original-date"].year, 10) >=
                parseInt(h[p], 10)
              );
              p += -1
            )
              l = u.pop();
          (l = l.replace(/\s*\|\s*/g, "|")), (r = [l]);
          break;
        }
      }
    return r.reverse(), (s.long = this._trimInstitution(r, e, i)), s;
  }),
  (CSL.NameOutput.prototype._trimInstitution = function (t, e, i) {
    var s = !1,
      r = !1,
      a = t.slice(),
      n = !1;
    return (
      this.institution &&
        (void 0 !== this.institution.strings["use-first"] &&
          (s = this.institution.strings["use-first"]),
        void 0 !== this.institution.strings["stop-last"]
          ? (n = this.institution.strings["stop-last"])
          : "authority" === e &&
            this.state.tmp.authority_stop_last &&
            (n = this.state.tmp.authority_stop_last),
        n && ((a = a.slice(0, n)), (t = t.slice(0, n))),
        void 0 !== this.institution.strings["use-last"] &&
          (r = this.institution.strings["use-last"]),
        "authority" === e &&
          (n && (this.state.tmp.authority_stop_last = n),
          r && (this.state.tmp.authority_stop_last += -1 * r))),
      !1 === s &&
        (0 === this.persons[e].length &&
          (s = this.institution.strings["substitute-use-first"]),
        s || (s = 0)),
      !1 === r && (r = s ? 0 : t.length),
      s > t.length - r && (s = t.length - r),
      (t = t.slice(0, s)),
      (a = a.slice(s)),
      r &&
        (r > a.length && (r = a.length),
        r && (t = t.concat(a.slice(a.length - r)))),
      t
    );
  }),
  (CSL.PublisherOutput = function (t, e) {
    (this.state = t), (this.group_tok = e), (this.varlist = []);
  }),
  (CSL.PublisherOutput.prototype.render = function () {
    this.clearVars(),
      this.composeAndBlob(),
      this.composeElements(),
      this.composePublishers(),
      this.joinPublishers();
  }),
  (CSL.PublisherOutput.prototype.composeAndBlob = function () {
    this.and_blob = {};
    var t = !1;
    "text" === this.group_tok.strings.and
      ? (t = this.state.getTerm("and"))
      : "symbol" === this.group_tok.strings.and && (t = "&");
    var e = new CSL.Token();
    (e.strings.suffix = " "),
      (e.strings.prefix = " "),
      this.state.output.append(t, e, !0);
    var i = this.state.output.pop();
    (e.strings.prefix = this.group_tok.strings["subgroup-delimiter"]),
      this.state.output.append(t, e, !0);
    var s = this.state.output.pop();
    (this.and_blob.single = !1),
      (this.and_blob.multiple = !1),
      t &&
        ("always" === this.group_tok.strings["subgroup-delimiter-precedes-last"]
          ? (this.and_blob.single = s)
          : "never" ===
            this.group_tok.strings["subgroup-delimiter-precedes-last"]
          ? ((this.and_blob.single = i), (this.and_blob.multiple = i))
          : ((this.and_blob.single = i), (this.and_blob.multiple = s)));
  }),
  (CSL.PublisherOutput.prototype.composeElements = function () {
    for (var t = 0; t < 2; t += 1)
      for (
        var e = ["publisher", "publisher-place"][t],
          i = 0,
          s = this["publisher-list"].length;
        i < s;
        i += 1
      ) {
        var r = this[e + "-list"][i],
          a = this[e + "-token"];
        this.state.output.append(r, a, !0),
          (this[e + "-list"][i] = this.state.output.pop());
      }
  }),
  (CSL.PublisherOutput.prototype.composePublishers = function () {
    for (var t, e = 0, i = this["publisher-list"].length; e < i; e += 1) {
      (t = [
        this[this.varlist[0] + "-list"][e],
        this[this.varlist[1] + "-list"][e],
      ]),
        (this["publisher-list"][e] = this._join(
          t,
          this.group_tok.strings.delimiter
        ));
    }
  }),
  (CSL.PublisherOutput.prototype.joinPublishers = function () {
    var t = this["publisher-list"],
      e =
        (this.name_delimiter,
        this._join(
          t,
          this.group_tok.strings["subgroup-delimiter"],
          this.and_blob.single,
          this.and_blob.multiple,
          this.group_tok
        ));
    this.state.output.append(e, "literal");
  }),
  (CSL.PublisherOutput.prototype._join = CSL.NameOutput.prototype._join),
  (CSL.PublisherOutput.prototype._getToken =
    CSL.NameOutput.prototype._getToken),
  (CSL.PublisherOutput.prototype.clearVars = function () {
    (this.state.tmp["publisher-list"] = !1),
      (this.state.tmp["publisher-place-list"] = !1),
      (this.state.tmp["publisher-group-token"] = !1),
      (this.state.tmp["publisher-token"] = !1),
      (this.state.tmp["publisher-place-token"] = !1);
  }),
  (CSL.evaluateLabel = function (t, e, i, s) {
    var r;
    "locator" === t.strings.term
      ? (s && s.label && (r = "sub verbo" === s.label ? "sub-verbo" : s.label),
        r || (r = "page"))
      : (r = t.strings.term);
    var a = t.strings.plural;
    if ("number" != typeof a) {
      var n = "locator" === t.strings.term ? s : i;
      e.processNumber(!1, n, t.strings.term, i.type),
        (a = e.tmp.shadow_numbers[t.strings.term].plural),
        e.tmp.shadow_numbers[t.strings.term].labelForm ||
          e.tmp.shadow_numbers[t.strings.term].labelDecorations ||
          ((e.tmp.shadow_numbers[t.strings.term].labelForm = t.strings.form),
          (e.tmp.shadow_numbers[t.strings.term].labelDecorations =
            t.decorations.slice())),
        -1 < ["locator", "number", "page"].indexOf(t.strings.term) &&
          e.tmp.shadow_numbers[t.strings.term].label &&
          (r = e.tmp.shadow_numbers[t.strings.term].label),
        t.decorations &&
          (e.opt.development_extensions.csl_reverse_lookup_support ||
            e.sys.csl_reverse_lookup_support) &&
          (t.decorations.reverse(),
          t.decorations.push(["@showid", "true", t.cslid]),
          t.decorations.reverse());
    }
    return CSL.castLabel(e, t, r, a, CSL.TOLERANT);
  }),
  (CSL.castLabel = function (t, e, i, s, r) {
    var a = e.strings.form;
    t.tmp.group_context.tip.label_form &&
      "static" !== a &&
      (a = t.tmp.group_context.tip.label_form);
    var n = t.getTerm(i, a, s, !1, r, e.default_locale);
    if (t.tmp.strip_periods) n = n.replace(/\./g, "");
    else
      for (var o = 0, l = e.decorations.length; o < l; o += 1)
        if (
          "@strip-periods" === e.decorations[o][0] &&
          "true" === e.decorations[o][1]
        ) {
          n = n.replace(/\./g, "");
          break;
        }
    return n;
  }),
  (CSL.Node.name = {
    build: function (t, e) {
      var i;
      if (-1 < [CSL.SINGLETON, CSL.START].indexOf(this.tokentype)) {
        if (void 0 === t.tmp.root) {
          var s = void 0;
          t.tmp.root = "citation";
        } else s = t.tmp.root;
        t.inheritOpt(this, "et-al-subsequent-min") &&
          t.inheritOpt(this, "et-al-subsequent-min") !==
            t.inheritOpt(this, "et-al-min") &&
          (t.opt.update_mode = CSL.POSITION),
          t.inheritOpt(this, "et-al-subsequent-use-first") &&
            t.inheritOpt(this, "et-al-subsequent-use-first") !==
              t.inheritOpt(this, "et-al-use-first") &&
            (t.opt.update_mode = CSL.POSITION),
          (t.tmp.root = s),
          (i = function (t, e) {
            (t.tmp.etal_term = "et-al"),
              (t.tmp.name_delimiter = t.inheritOpt(
                this,
                "delimiter",
                "name-delimiter",
                ", "
              )),
              (t.tmp["delimiter-precedes-et-al"] = t.inheritOpt(
                this,
                "delimiter-precedes-et-al"
              )),
              "text" === t.inheritOpt(this, "and")
                ? (this.and_term = t.getTerm("and", "long", 0))
                : "symbol" === t.inheritOpt(this, "and") &&
                  (t.opt.development_extensions.expect_and_symbol_form
                    ? (this.and_term = t.getTerm("and", "symbol", 0))
                    : (this.and_term = "&")),
              (t.tmp.and_term = this.and_term),
              CSL.STARTSWITH_ROMANESQUE_REGEXP.test(this.and_term)
                ? ((this.and_prefix_single = " "),
                  (this.and_prefix_multiple = ", "),
                  "string" == typeof t.tmp.name_delimiter &&
                    (this.and_prefix_multiple = t.tmp.name_delimiter),
                  (this.and_suffix = " "))
                : ((this.and_prefix_single = ""),
                  (this.and_prefix_multiple = ""),
                  (this.and_suffix = "")),
              "always" === t.inheritOpt(this, "delimiter-precedes-last")
                ? (this.and_prefix_single = t.tmp.name_delimiter)
                : "never" === t.inheritOpt(this, "delimiter-precedes-last")
                ? this.and_prefix_multiple && (this.and_prefix_multiple = " ")
                : "after-inverted-name" ===
                    t.inheritOpt(this, "delimiter-precedes-last") &&
                  (this.and_prefix_single &&
                    (this.and_prefix_single = t.tmp.name_delimiter),
                  this.and_prefix_multiple && (this.and_prefix_multiple = " ")),
              (this.and = {}),
              t.inheritOpt(this, "and")
                ? (t.output.append(this.and_term, "empty", !0),
                  (this.and.single = t.output.pop()),
                  (this.and.single.strings.prefix = this.and_prefix_single),
                  (this.and.single.strings.suffix = this.and_suffix),
                  t.output.append(this.and_term, "empty", !0),
                  (this.and.multiple = t.output.pop()),
                  (this.and.multiple.strings.prefix = this.and_prefix_multiple),
                  (this.and.multiple.strings.suffix = this.and_suffix))
                : t.tmp.name_delimiter &&
                  ((this.and.single = new CSL.Blob(t.tmp.name_delimiter)),
                  (this.and.single.strings.prefix = ""),
                  (this.and.single.strings.suffix = ""),
                  (this.and.multiple = new CSL.Blob(t.tmp.name_delimiter)),
                  (this.and.multiple.strings.prefix = ""),
                  (this.and.multiple.strings.suffix = "")),
              (this.ellipsis = {}),
              t.inheritOpt(this, "et-al-use-last") &&
                ((this.ellipsis_term = "…"),
                (this.ellipsis_prefix_single = " "),
                (this.ellipsis_prefix_multiple = t.inheritOpt(
                  this,
                  "delimiter",
                  "name-delimiter",
                  ", "
                )),
                (this.ellipsis_suffix = " "),
                (this.ellipsis.single = new CSL.Blob(this.ellipsis_term)),
                (this.ellipsis.single.strings.prefix =
                  this.ellipsis_prefix_single),
                (this.ellipsis.single.strings.suffix = this.ellipsis_suffix),
                (this.ellipsis.multiple = new CSL.Blob(this.ellipsis_term)),
                (this.ellipsis.multiple.strings.prefix =
                  this.ellipsis_prefix_multiple),
                (this.ellipsis.multiple.strings.suffix = this.ellipsis_suffix)),
              void 0 === t.tmp["et-al-min"] &&
                (t.tmp["et-al-min"] = t.inheritOpt(this, "et-al-min")),
              void 0 === t.tmp["et-al-use-first"] &&
                (t.tmp["et-al-use-first"] = t.inheritOpt(
                  this,
                  "et-al-use-first"
                )),
              void 0 === t.tmp["et-al-use-last"] &&
                (t.tmp["et-al-use-last"] = t.inheritOpt(
                  this,
                  "et-al-use-last"
                )),
              (t.nameOutput.name = this);
          }),
          (t.build.name_flag = !0),
          this.execs.push(i);
      }
      e.push(this);
    },
  }),
  (CSL.Node["name-part"] = {
    build: function (t, e) {
      t.build[this.strings.name] = this;
    },
  }),
  (CSL.Node.names = {
    build: function (t, e) {
      var i;
      if (
        ((this.tokentype !== CSL.START && this.tokentype !== CSL.SINGLETON) ||
          (CSL.Util.substituteStart.call(this, t, e),
          t.build.substitute_level.push(1)),
        this.tokentype === CSL.SINGLETON &&
          (t.build.names_variables.push(this.variables),
          (i = function (t, e, i) {
            var s = t.nameOutput.labelVariable;
            t.nameOutput.reinit(this, s);
          }),
          this.execs.push(i)),
        this.tokentype === CSL.START &&
          ((t.build.names_flag = !0),
          (t.build.names_level += 1),
          1 === t.build.names_level &&
            ((t.build.names_variables = []), (t.build.name_label = {})),
          t.build.names_variables.push(this.variables),
          (i = function (t, e, i) {
            t.tmp.can_substitute.push(!0),
              t.parallel.StartVariable("names", this.variables[0]),
              t.nameOutput.init(this);
          }),
          this.execs.push(i)),
        this.tokentype === CSL.END)
      ) {
        for (var s = 0; s < 3; s += 1) {
          var r = ["family", "given", "et-al"][s];
          (this[r] = t.build[r]),
            1 === t.build.names_level && (t.build[r] = void 0);
        }
        (this.label = t.build.name_label),
          1 === t.build.names_level && (t.build.name_label = {}),
          (t.build.names_level += -1),
          t.build.names_variables.pop(),
          (i = function (t, e, i) {
            t.tmp.etal_node
              ? (this.etal_style = t.tmp.etal_node)
              : (this.etal_style = "empty"),
              (this.etal_term = t.getTerm(t.tmp.etal_term, "long", 0)),
              CSL.STARTSWITH_ROMANESQUE_REGEXP.test(this.etal_term)
                ? ((this.etal_prefix_single = " "),
                  (this.etal_prefix_multiple = t.tmp.name_delimiter),
                  "always" === t.tmp["delimiter-precedes-et-al"]
                    ? (this.etal_prefix_single = t.tmp.name_delimiter)
                    : "never" === t.tmp["delimiter-precedes-et-al"]
                    ? (this.etal_prefix_multiple = " ")
                    : "after-inverted-name" ===
                        t.tmp["delimiter-precedes-et-al"] &&
                      ((this.etal_prefix_single = t.tmp.name_delimiter),
                      (this.etal_prefix_multiple = " ")))
                : ((this.etal_prefix_single = ""),
                  (this.etal_prefix_multiple = "")),
              (this.etal_suffix = "");
            for (var s = 0; s < 3; s += 1) {
              var r = ["family", "given"][s];
              t.nameOutput[r] = this[r];
            }
            t.nameOutput.with = this.with;
            var a = "with",
              n = "",
              o = "";
            CSL.STARTSWITH_ROMANESQUE_REGEXP.test(a) && ((n = " "), (o = " "));
            var l = {};
            (l.single = new CSL.Blob(a)),
              (l.single.strings.suffix = o),
              (l.multiple = new CSL.Blob(a)),
              (l.multiple.strings.suffix = o),
              "always" ===
              t.inheritOpt(t.nameOutput.name, "delimiter-precedes-last")
                ? ((l.single.strings.prefix = t.inheritOpt(
                    this,
                    "delimiter",
                    "names-delimiter"
                  )),
                  (l.multiple.strings.prefix = t.inheritOpt(
                    this,
                    "delimiter",
                    "names-delimiter"
                  )))
                : "contextual" ===
                  t.inheritOpt(t.nameOutput.name, "delimiter-precedes-last")
                ? ((l.single.strings.prefix = n),
                  (l.multiple.strings.prefix = t.inheritOpt(
                    this,
                    "delimiter",
                    "names-delimiter"
                  )))
                : ("after-inverted-name" ===
                  t.inheritOpt(t.nameOutput.name, "delimiter-precedes-last")
                    ? (l.single.strings.prefix = t.inheritOpt(
                        this,
                        "delimiter",
                        "names-delimiter"
                      ))
                    : (l.single.strings.prefix = n),
                  (l.multiple.strings.prefix = n)),
              (t.nameOutput.with = l),
              (t.nameOutput.label = this.label),
              (t.nameOutput.etal_style = this.etal_style),
              (t.nameOutput.etal_term = this.etal_term),
              (t.nameOutput.etal_prefix_single = this.etal_prefix_single),
              (t.nameOutput.etal_prefix_multiple = this.etal_prefix_multiple),
              (t.nameOutput.etal_suffix = this.etal_suffix),
              t.nameOutput.outputNames(),
              (t.tmp["et-al-use-first"] = void 0),
              (t.tmp["et-al-min"] = void 0),
              (t.tmp["et-al-use-last"] = void 0);
          }),
          this.execs.push(i),
          (i = function (t, e) {
            t.tmp.can_substitute.pop() ||
              t.tmp.can_substitute.replace(!1, CSL.LITERAL),
              t.parallel.CloseVariable("names"),
              1 === t.tmp.can_substitute.mystack.length &&
                (t.tmp.can_block_substitute = !1);
          }),
          this.execs.push(i),
          (t.build.name_flag = !1);
      }
      e.push(this),
        (this.tokentype !== CSL.END && this.tokentype !== CSL.SINGLETON) ||
          (t.build.substitute_level.pop(),
          CSL.Util.substituteEnd.call(this, t, e));
    },
  }),
  (CSL.Node.number = {
    build: function (t, e) {
      var i;
      CSL.Util.substituteStart.call(this, t, e),
        "roman" === this.strings.form
          ? (this.formatter = t.fun.romanizer)
          : "ordinal" === this.strings.form
          ? (this.formatter = t.fun.ordinalizer)
          : "long-ordinal" === this.strings.form &&
            (this.formatter = t.fun.long_ordinalizer),
        void 0 === this.successor_prefix &&
          (this.successor_prefix = t[t.build.area].opt.layout_delimiter),
        void 0 === this.splice_prefix &&
          (this.splice_prefix = t[t.build.area].opt.layout_delimiter),
        (i = function (t, e, i) {
          if (0 !== this.variables.length) {
            if (void 0 === i) i = {};
            var s;
            if (
              ((s = this.variables[0]), "locator" !== s || !t.tmp.just_looking)
            ) {
              t.parallel.StartVariable(this.variables[0]),
                "locator" === this.variables[0]
                  ? t.parallel.AppendToVariable(e.section)
                  : t.parallel.AppendToVariable(e[this.variables[0]]);
              new RegExp(
                "(?:&|, | and |" + t.getTerm("page-range-delimiter") + ")"
              );
              "collection-number" === s &&
                "legal_case" === e.type &&
                (t.tmp.renders_collection_number = !0);
              e[this.variables[0]];
              this.strings.label_form_override &&
                this.strings.label_form_override;
              if (t.tmp.group_context.tip.force_suppress) return !1;
              "locator" === s
                ? t.processNumber(this, i, s, e.type)
                : (!t.tmp.group_context.tip.condition &&
                    e[s] &&
                    (t.tmp.just_did_number = !0),
                  t.processNumber(this, e, s, e.type)),
                CSL.Util.outputNumericField(t, s, e.id),
                t.parallel.CloseVariable("number"),
                -1 <
                  ["locator", "locator-extra"].indexOf(
                    this.variables_real[0]
                  ) &&
                  !t.tmp.just_looking &&
                  (t.tmp.done_vars.push(this.variables_real[0]),
                  t.tmp.group_context.tip.done_vars.push(
                    this.variables_real[0]
                  ));
            }
          }
        }),
        this.execs.push(i),
        e.push(this),
        CSL.Util.substituteEnd.call(this, t, e);
    },
  }),
  (CSL.Node.sort = {
    build: function (t, e) {
      if (
        ((e = t[t.build.root + "_sort"].tokens), this.tokentype === CSL.START)
      ) {
        "citation" === t.build.area &&
          ((t.parallel.use_parallels = !1), (t.opt.sort_citations = !0)),
          (t.build.area = t.build.root + "_sort"),
          (t.build.extension = "_sort");
        var i = function (t, e) {
          if (t.opt.has_layout_locale) {
            for (
              var i,
                s = CSL.localeResolve(e.language, t.opt["default-locale"][0]),
                r = t[t.tmp.area.slice(0, -5)].opt.sort_locales,
                a = 0,
                n = r.length;
              a < n && ((i = r[a][s.bare]), i || (i = r[a][s.best]), !i);
              a += 1
            );
            i || (i = t.opt["default-locale"][0]),
              (t.tmp.lang_sort_hold = t.opt.lang),
              (t.opt.lang = i);
          }
        };
        this.execs.push(i);
      }
      if (this.tokentype === CSL.END) {
        (t.build.area = t.build.root), (t.build.extension = "");
        i = function (t, e) {
          t.opt.has_layout_locale &&
            ((t.opt.lang = t.tmp.lang_sort_hold), delete t.tmp.lang_sort_hold);
        };
        this.execs.push(i);
      }
      e.push(this);
    },
  }),
  (CSL.Node.substitute = {
    build: function (t, e) {
      var i;
      this.tokentype === CSL.START &&
        ((i = function (t, e) {
          (t.tmp.can_block_substitute = !0),
            t.tmp.value.length && t.tmp.can_substitute.replace(!1, CSL.LITERAL);
        }),
        this.execs.push(i)),
        e.push(this);
    },
  }),
  (CSL.Node.text = {
    build: function (t, e) {
      var i, l, u, r, a, n, o, h, p, s, c, m;
      if (this.postponed_macro) {
        var f = CSL.Util.cloneToken(this);
        (f.name = "group"),
          (f.tokentype = CSL.START),
          CSL.Node.group.build.call(f, t, e),
          CSL.expandMacro.call(t, this, e);
        var d = CSL.Util.cloneToken(this);
        (d.name = "group"),
          (d.tokentype = CSL.END),
          "juris-locator-label" === this.postponed_macro &&
            (d.isJurisLocatorLabel = !0),
          CSL.Node.group.build.call(d, t, e);
      } else {
        if (
          (CSL.Util.substituteStart.call(this, t, e),
          this.variables_real || (this.variables_real = []),
          this.variables || (this.variables = []),
          (l = "long"),
          (u = 0),
          this.strings.form && (l = this.strings.form),
          this.strings.plural && (u = this.strings.plural),
          "citation-number" === this.variables_real[0] ||
            "year-suffix" === this.variables_real[0] ||
            "citation-label" === this.variables_real[0])
        )
          "citation-number" === this.variables_real[0]
            ? ("citation" === t.build.root && (t.opt.update_mode = CSL.NUMERIC),
              "bibliography" === t.build.root && (t.opt.bib_mode = CSL.NUMERIC),
              "bibliography_sort" === t.build.area &&
                (t.opt.citation_number_sort_used = !0),
              "citation-number" === t[t.tmp.area].opt.collapse &&
                (this.range_prefix = t.getTerm("citation-range-delimiter")),
              (this.successor_prefix = t[t.build.area].opt.layout_delimiter),
              (this.splice_prefix = t[t.build.area].opt.layout_delimiter),
              (i = function (t, e, i) {
                if (((r = "" + e.id), !t.tmp.just_looking)) {
                  if (i && i["author-only"]) {
                    t.tmp.element_trace.replace("do-not-suppress-me");
                    var s = t.getTerm("reference", "long", "singular");
                    void 0 === s && (s = "reference"),
                      (m = CSL.Output.Formatters["capitalize-first"](t, s)),
                      t.output.append(m + " "),
                      (t.tmp.last_element_trace = !0);
                  }
                  i &&
                    i["suppress-author"] &&
                    (t.tmp.last_element_trace &&
                      t.tmp.element_trace.replace("suppress-me"),
                    (t.tmp.last_element_trace = !1)),
                    (a = t.registry.registry[r].seq),
                    t.opt.citation_number_slug
                      ? t.output.append(t.opt.citation_number_slug, this)
                      : ((n = new CSL.NumericBlob(!1, a, this, e.id)),
                        t.tmp.in_cite_predecessor &&
                          (t.tmp.just_looking, (n.suppress_splice_prefix = !0)),
                        t.output.append(n, "literal"));
                }
              }),
              this.execs.push(i))
            : "year-suffix" === this.variables_real[0]
            ? ((t.opt.has_year_suffix = !0),
              "year-suffix-ranged" === t[t.tmp.area].opt.collapse &&
                (this.range_prefix = t.getTerm("citation-range-delimiter")),
              (this.successor_prefix = t[t.build.area].opt.layout_delimiter),
              t[t.tmp.area].opt["year-suffix-delimiter"] &&
                (this.successor_prefix =
                  t[t.build.area].opt["year-suffix-delimiter"]),
              (i = function (t, e) {
                if (
                  t.registry.registry[e.id] &&
                  !1 !== t.registry.registry[e.id].disambig.year_suffix &&
                  !t.tmp.just_looking
                ) {
                  (a = parseInt(
                    t.registry.registry[e.id].disambig.year_suffix,
                    10
                  )),
                    t[t.tmp.area].opt.cite_group_delimiter &&
                      (this.successor_prefix =
                        t[t.tmp.area].opt.cite_group_delimiter),
                    (n = new CSL.NumericBlob(!1, a, this, e.id)),
                    (o = new CSL.Util.Suffixator(CSL.SUFFIX_CHARS)),
                    n.setFormatter(o),
                    t.output.append(n, "literal"),
                    (h = !1);
                  for (
                    var i = 0, s = t.tmp.group_context.mystack.length;
                    i < s;
                    i++
                  ) {
                    var r = t.tmp.group_context.mystack[i];
                    if (
                      !r.variable_success &&
                      (r.variable_attempt ||
                        (!r.variable_attempt && !r.term_intended))
                    ) {
                      h = !0;
                      break;
                    }
                  }
                  (p = t[t.tmp.area].opt["year-suffix-delimiter"]),
                    h &&
                      p &&
                      !t.tmp.sort_key_flag &&
                      (t.tmp.splice_delimiter =
                        t[t.tmp.area].opt["year-suffix-delimiter"]);
                }
              }),
              this.execs.push(i))
            : "citation-label" === this.variables_real[0] &&
              ((t.opt.has_year_suffix = !0),
              (i = function (t, e) {
                (s = e["citation-label"]),
                  s || (s = t.getCitationLabel(e)),
                  t.tmp.just_looking ||
                    ((c = ""),
                    t.registry.registry[e.id] &&
                      !1 !== t.registry.registry[e.id].disambig.year_suffix &&
                      ((a = parseInt(
                        t.registry.registry[e.id].disambig.year_suffix,
                        10
                      )),
                      (c = t.fun.suffixator.format(a))),
                    (s += c)),
                  t.output.append(s, this);
              }),
              this.execs.push(i));
        else if (this.strings.term)
          (i = function (t, e, i) {
            var s,
              r = t.opt.gender[e.type],
              a = this.strings.term;
            if (
              ((a = t.getTerm(a, l, u, r, CSL.TOLERANT, this.default_locale)),
              "" !== a && (t.tmp.group_context.tip.term_intended = !0),
              CSL.UPDATE_GROUP_CONTEXT_CONDITION(t, a),
              (s =
                t.tmp.term_predecessor ||
                ("in-text" === t.opt.class && "citation" === t.tmp.area)
                  ? a
                  : CSL.Output.Formatters["capitalize-first"](t, a)),
              t.tmp.strip_periods)
            )
              s = s.replace(/\./g, "");
            else
              for (var n = 0, o = this.decorations.length; n < o; n += 1)
                if (
                  "@strip-periods" === this.decorations[n][0] &&
                  "true" === this.decorations[n][1]
                ) {
                  s = s.replace(/\./g, "");
                  break;
                }
            t.output.append(s, this);
          }),
            this.execs.push(i),
            (t.build.term = !1),
            (t.build.form = !1),
            (t.build.plural = !1);
        else if (this.variables_real.length) {
          if (
            ((i = function (t, e, i) {
              "locator" !== this.variables_real[0] &&
                (t.tmp.have_collapsed = !1);
              var s = this.variables[0];
              "title" !== s ||
                ("short" !== l && !e["title-short"]) ||
                (s = "title-short"),
                t.parallel.StartVariable(s),
                t.parallel.AppendToVariable(e[s], s),
                !t.tmp.group_context.tip.condition &&
                  e[this.variables[0]] &&
                  (t.tmp.just_did_number = !1);
            }),
            this.execs.push(i),
            -1 < CSL.MULTI_FIELDS.indexOf(this.variables_real[0]) ||
              -1 <
                ["language-name", "language-name-original"].indexOf(
                  this.variables_real[0]
                ))
          ) {
            var g = this.variables[0],
              b = !1,
              _ = !1,
              v = !1;
            "short" === l
              ? "container-title" === this.variables_real[0]
                ? (_ = "journalAbbreviation")
                : "title" === this.variables_real[0] && (_ = "title-short")
              : (g = !1),
              t.build.extension ? (v = !0) : ((v = !0), (b = !0)),
              (i = t.transform.getOutputFunction(this.variables, g, b, _, v));
          } else
            i =
              -1 < CSL.CITE_FIELDS.indexOf(this.variables_real[0])
                ? function (t, e, i) {
                    i &&
                      i[this.variables[0]] &&
                      (t.processNumber(this, i, this.variables[0], e.type),
                      CSL.Util.outputNumericField(t, this.variables[0], e.id),
                      t.output.append(void 0, this, !1, !1, !0),
                      -1 <
                        ["locator", "locator-extra"].indexOf(
                          this.variables_real[0]
                        ) &&
                        !t.tmp.just_looking &&
                        t.tmp.done_vars.push(this.variables_real[0]));
                  }
                : -1 <
                  [
                    "page",
                    "page-first",
                    "chapter-number",
                    "collection-number",
                    "edition",
                    "issue",
                    "number",
                    "number-of-pages",
                    "number-of-volumes",
                    "volume",
                  ].indexOf(this.variables_real[0])
                ? function (t, e) {
                    t.processNumber(this, e, this.variables[0], e.type),
                      CSL.Util.outputNumericField(t, this.variables[0], e.id);
                  }
                : -1 < ["URL", "DOI"].indexOf(this.variables_real[0])
                ? function (t, e) {
                    var i;
                    this.variables[0] &&
                      ((i = t.getVariable(e, this.variables[0], l)),
                      i &&
                        (t.opt.development_extensions.wrap_url_and_doi
                          ? (this.decorations.length &&
                              this.decorations[0][0] ===
                                "@" + this.variables[0]) ||
                            (this.decorations = [
                              ["@" + this.variables[0], "true"],
                            ].concat(this.decorations))
                          : this.decorations.length &&
                            this.decorations[0][0] ===
                              "@" + this.variables[0] &&
                            (this.decorations = this.decorations.slice(1)),
                        t.output.append(i, this, !1, !1, !0)));
                  }
                : "section" === this.variables_real[0]
                ? function (t, e) {
                    var i;
                    (i = t.getVariable(e, this.variables[0], l)),
                      i && t.output.append(i, this);
                  }
                : "hereinafter" === this.variables_real[0]
                ? function (t, e) {
                    var i = t.transform.abbrevs.default.hereinafter[e.id];
                    i &&
                      (t.output.append(i, this),
                      (t.tmp.group_context.tip.variable_success = !0));
                  }
                : function (t, e) {
                    var i;
                    this.variables[0] &&
                      ((i = t.getVariable(e, this.variables[0], l)),
                      i &&
                        ((i = "" + i),
                        (i = i.split("\\").join("")),
                        t.output.append(i, this)));
                  };
          this.execs.push(i),
            (i = function (t, e) {
              t.parallel.CloseVariable("text");
            }),
            this.execs.push(i);
        } else
          this.strings.value &&
            ((i = function (t, e) {
              (t.tmp.group_context.tip.term_intended = !0),
                CSL.UPDATE_GROUP_CONTEXT_CONDITION(t, this.strings.value, !0),
                t.output.append(this.strings.value, this);
            }),
            this.execs.push(i));
        e.push(this), CSL.Util.substituteEnd.call(this, t, e);
      }
    },
  }),
  (CSL.Attributes = {}),
  (CSL.Attributes["@genre"] = function (t, i) {
    i = i.replace("-", " ");
    this.tests.push(function (t, e) {
      return i === t.genre;
    });
  }),
  (CSL.Attributes["@disambiguate"] = function (i, t) {
    if ("true" === t) {
      i.opt.has_disambiguate = !0;
      var e = function (t, e) {
        return (
          (i.tmp.disambiguate_maxMax += 1),
          !!(
            i.tmp.disambig_settings.disambiguate &&
            i.tmp.disambiguate_count < i.tmp.disambig_settings.disambiguate
          ) && ((i.tmp.disambiguate_count += 1), !0)
        );
      };
      this.tests.push(e);
    } else if ("check-ambiguity-and-backreference" === t) {
      e = function (t, e) {
        return !!(
          i.registry.registry[t.id].disambig.disambiguate &&
          1 < i.registry.registry[t.id]["citation-count"]
        );
      };
      this.tests.push(e);
    }
  }),
  (CSL.Attributes["@is-numeric"] = function (r, t, e) {
    for (
      var i = t.split(/\s+/),
        s = function (s) {
          return function (t, e) {
            var i = t;
            if (
              (-1 < ["locator", "locator-extra"].indexOf(s) && (i = e),
              void 0 === i)
            )
              return !1;
            if (-1 < CSL.NUMERIC_VARIABLES.indexOf(s)) {
              if (
                (r.tmp.shadow_numbers[s] || r.processNumber(!1, i, s, t.type),
                i[s] && r.tmp.shadow_numbers[s].numeric)
              )
                return !0;
            } else if (
              -1 < ["title", "locator-extra", "version"].indexOf(s) &&
              i[s] &&
              i[s].slice(-1) === "" + parseInt(i[s].slice(-1), 10)
            )
              return !0;
            return !1;
          };
        },
        a = 0;
      a < i.length;
      a += 1
    )
      this.tests.push(s(i[a]));
  }),
  (CSL.Attributes["@is-uncertain-date"] = function (t, e) {
    for (
      var i = e.split(/\s+/),
        s = function (i) {
          return function (t, e) {
            return !(!t[i] || !t[i].circa);
          };
        },
        r = 0,
        a = i.length;
      r < a;
      r += 1
    )
      this.tests.push(s(i[r]));
  }),
  (CSL.Attributes["@locator"] = function (r, t) {
    var e = t.replace("sub verbo", "sub-verbo");
    e = e.split(/\s+/);
    for (
      var i = function (s) {
          return function (t, e) {
            var i;
            return (
              r.processNumber(!1, e, "locator"),
              (i = r.tmp.shadow_numbers.locator.label),
              s === i
            );
          };
        },
        s = 0,
        a = e.length;
      s < a;
      s += 1
    )
      this.tests.push(i(e[s]));
  }),
  (CSL.Attributes["@position"] = function (s, t) {
    (s.opt.update_mode = CSL.POSITION), (s.parallel.use_parallels = null);
    for (
      var e = t.split(/\s+/),
        i = function (i) {
          return function (t, e) {
            if ("bibliography" === s.tmp.area) return !1;
            if (
              (e && void 0 === e.position && (e.position = 0),
              e && "number" == typeof e.position)
            ) {
              if (0 === e.position && 0 === i) return !0;
              if (0 < i && e.position >= i) return !0;
            } else if (0 === i) return !0;
            return !1;
          };
        },
        r = 0,
        a = e.length;
      r < a;
      r += 1
    ) {
      var n = e[r];
      "first" === n
        ? (n = CSL.POSITION_FIRST)
        : "subsequent" === n
        ? (n = CSL.POSITION_SUBSEQUENT)
        : "ibid" === n
        ? (n = CSL.POSITION_IBID)
        : "ibid-with-locator" === n && (n = CSL.POSITION_IBID_WITH_LOCATOR),
        "near-note" === n
          ? this.tests.push(function (t, e) {
              return !!(
                e &&
                e.position >= CSL.POSITION_SUBSEQUENT &&
                e["near-note"]
              );
            })
          : "far-note" === n
          ? this.tests.push(function (t, e) {
              return !(
                !e ||
                e.position != CSL.POSITION_SUBSEQUENT ||
                e["near-note"]
              );
            })
          : this.tests.push(i(n));
    }
  }),
  (CSL.Attributes["@type"] = function (t, e) {
    for (
      var i = e.split(/\s+/),
        s = function (s) {
          return function (t, e) {
            var i = t.type === s;
            return !!i;
          };
        },
        r = [],
        a = 0,
        n = i.length;
      a < n;
      a += 1
    )
      r.push(s(i[a]));
    this.tests.push(t.fun.match.any(this, t, r));
  }),
  (CSL.Attributes["@variable"] = function (a, t) {
    var e;
    if (
      ((this.variables = t.split(/\s+/)),
      (this.variables_real = this.variables.slice()),
      "label" === this.name && this.variables[0])
    )
      this.strings.term = this.variables[0];
    else if (-1 < ["names", "date", "text", "number"].indexOf(this.name))
      (e = function (t, e, i) {
        for (var s = this.variables.length - 1; -1 < s; s += -1)
          this.variables.pop();
        s = 0;
        for (var r = this.variables_real.length; s < r; s++)
          -1 !== t.tmp.done_vars.indexOf(this.variables_real[s]) ||
            (i &&
              "legal_case" === e.type &&
              i["suppress-author"] &&
              "title" === this.variables_real[s]) ||
            this.variables.push(this.variables_real[s]),
            t.tmp.can_block_substitute &&
              t.tmp.done_vars.push(this.variables_real[s]);
      }),
        this.execs.push(e),
        (e = function (t, e, i) {
          for (var s = !1, r = 0, a = this.variables.length; r < a; r++) {
            var n = this.variables[r];
            if (
              -1 < ["authority", "committee"].indexOf(n) &&
              "string" == typeof e[n] &&
              "names" === this.name
            ) {
              var o = !0,
                l = e[n].split(/\s*;\s*/),
                u = {};
              if (e.multi && e.multi._keys[n])
                for (var h in e.multi._keys[n])
                  if (
                    ((u[h] = e.multi._keys[n][h].split(/\s*;\s*/)),
                    u[h].length !== l.length)
                  ) {
                    o = !1;
                    break;
                  }
              o || ((l = [e[n]]), (u = e.multi._keys[n]));
              for (var p = 0, c = l.length; p < c; p++) {
                var m = { literal: l[p], multi: { _key: {} } };
                for (var h in u) {
                  var f = { literal: u[h][p] };
                  m.multi._key[h] = f;
                }
                l[p] = m;
              }
              e[n] = l;
            }
            if (
              ("short" !== this.strings.form ||
                e[n] ||
                ("title" === n
                  ? (n = "title-short")
                  : "container-title" === n && (n = "journalAbbreviation")),
              "year-suffix" === n)
            ) {
              s = !0;
              break;
            }
            if (-1 < CSL.DATE_VARIABLES.indexOf(n)) {
              if (
                t.opt.development_extensions.locator_date_and_revision &&
                "locator-date" === n
              ) {
                s = !0;
                break;
              }
              if (e[n]) {
                for (var d in e[n])
                  if (
                    (-1 !== this.dateparts.indexOf(d) || "literal" === d) &&
                    e[n][d]
                  ) {
                    s = !0;
                    break;
                  }
                if (s) break;
              }
            } else {
              if ("locator" === n) {
                i && i.locator && (s = !0);
                break;
              }
              if ("locator-extra" === n) {
                i && i["locator-extra"] && (s = !0);
                break;
              }
              if (-1 < ["citation-number", "citation-label"].indexOf(n)) {
                s = !0;
                break;
              }
              if ("first-reference-note-number" === n) {
                i && i["first-reference-note-number"] && (s = !0);
                break;
              }
              if ("hereinafter" === n) {
                t.transform.abbrevs.default.hereinafter[e.id] &&
                  t.sys.getAbbreviation &&
                  e.id &&
                  (s = !0);
                break;
              }
              if ("object" == typeof e[n]) {
                e[n].length;
                break;
              }
              if ("string" == typeof e[n] && e[n]) {
                s = !0;
                break;
              }
              if ("number" == typeof e[n]) {
                s = !0;
                break;
              }
            }
            if (s) break;
          }
          if (s) {
            for (r = 0, a = this.variables_real.length; r < a; r++) {
              n = this.variables_real[r];
              ("citation-number" === n && "bibliography" === t.tmp.area) ||
                (t.tmp.cite_renders_content = !0),
                (t.tmp.group_context.tip.variable_success = !0),
                t.tmp.can_substitute.value() &&
                  "bibliography" === t.tmp.area &&
                  "string" == typeof e[n] &&
                  ((t.tmp.name_node.top = t.output.current.value()),
                  t.tmp.rendered_name.push(e[n]));
            }
            t.tmp.can_substitute.replace(!1, CSL.LITERAL);
          } else t.tmp.group_context.tip.variable_attempt = !0;
        }),
        this.execs.push(e);
    else if (-1 < ["if", "else-if", "condition"].indexOf(this.name))
      for (
        var i = function (r) {
            return function (t, e) {
              var i = t;
              if (
                (e &&
                  -1 <
                    [
                      "locator",
                      "locator-extra",
                      "first-reference-note-number",
                      "locator-date",
                    ].indexOf(r) &&
                  (i = e),
                "hereinafter" === r && a.sys.getAbbreviation && i.id)
              ) {
                if (a.transform.abbrevs.default.hereinafter[i.id]) return !0;
              } else if (i[r]) {
                if ("number" == typeof i[r] || "string" == typeof i[r])
                  return !0;
                if ("object" == typeof i[r])
                  for (var s in i[r]) if (i[r][s]) return !0;
              }
              return !1;
            };
          },
          s = 0,
          r = this.variables.length;
        s < r;
        s += 1
      )
        this.tests.push(i(this.variables[s]));
  }),
  (CSL.Attributes["@page"] = function (r, t) {
    var e = t.replace("sub verbo", "sub-verbo");
    e = e.split(/\s+/);
    for (
      var i = function (s) {
          return function (t, e) {
            var i;
            return (
              r.processNumber(!1, t, "page", t.type),
              (i = r.tmp.shadow_numbers.page.label
                ? "sub verbo" === r.tmp.shadow_numbers.page.label
                  ? "sub-verbo"
                  : r.tmp.shadow_numbers.page.label
                : "page"),
              s === i
            );
          };
        },
        s = 0,
        a = e.length;
      s < a;
      s += 1
    )
      this.tests.push(i(e[s]));
  }),
  (CSL.Attributes["@number"] = function (r, t) {
    var e = t.replace("sub verbo", "sub-verbo");
    e = e.split(/\s+/);
    for (
      var i = function (s) {
          return function (t, e) {
            var i;
            return (
              r.processNumber(!1, t, "number", t.type),
              (i = r.tmp.shadow_numbers.number.label
                ? "sub verbo" === r.tmp.shadow_numbers.number.label
                  ? "sub-verbo"
                  : r.tmp.shadow_numbers.number.label
                : "number"),
              s === i
            );
          };
        },
        s = 0,
        a = e.length;
      s < a;
      s += 1
    )
      this.tests.push(i(e[s]));
  }),
  (CSL.Attributes["@jurisdiction"] = function (t, e) {
    for (var i = e.split(/\s+/), s = 0, r = i.length; s < r; s += 1)
      i[s] = i[s].split(":");
    var a = function (o) {
      return function (t, e) {
        if (!t.jurisdiction) return !1;
        for (
          var i = t.jurisdiction.split(":"), s = 0, r = i.length;
          s < r;
          s += 1
        )
          i[s] = i[s].split(":");
        for (s = o.length; 0 < s; s += -1) {
          var a = o.slice(0, s).join(":"),
            n = i.slice(0, s).join(":");
          if (a !== n) return !1;
        }
        return !0;
      };
    };
    for (s = 0, r = i.length; s < r; s += 1) {
      var n = i[s].slice();
      this.tests.push(a(n));
    }
  }),
  (CSL.Attributes["@context"] = function (s, r) {
    this.tests.push(function (t, e) {
      var i = s.tmp.area.slice(0, r.length);
      return i === r;
    });
  }),
  (CSL.Attributes["@has-year-only"] = function (t, e) {
    for (
      var i = e.split(/\s+/),
        s = function (s) {
          return function (t, e) {
            var i = t[s];
            return !(!i || i.month || i.season);
          };
        },
        r = 0,
        a = i.length;
      r < a;
      r += 1
    )
      this.tests.push(s(i[r]));
  }),
  (CSL.Attributes["@has-to-month-or-season"] = function (t, e) {
    for (
      var i = e.split(/\s+/),
        s = function (s) {
          return function (t, e) {
            var i = t[s];
            return !(!i || (!i.month && !i.season) || i.day);
          };
        },
        r = 0,
        a = i.length;
      r < a;
      r += 1
    )
      this.tests.push(s(i[r]));
  }),
  (CSL.Attributes["@has-day"] = function (t, e) {
    for (
      var i = e.split(/\s+/),
        s = function (s) {
          return function (t, e) {
            var i = t[s];
            return !(!i || !i.day);
          };
        },
        r = 0,
        a = i.length;
      r < a;
      r += 1
    )
      this.tests.push(s(i[r]));
  }),
  (CSL.Attributes["@subjurisdictions"] = function (t, e) {
    var s = parseInt(e, 10);
    this.tests.push(function (t, e) {
      var i = 0;
      return (
        t.jurisdiction && (i = t.jurisdiction.split(":").length),
        i && (i += -1),
        s <= i
      );
    });
  }),
  (CSL.Attributes["@is-plural"] = function (l, u) {
    this.tests.push(function (t, e) {
      var i = t[u];
      if (i && i.length) {
        for (var s = 0, r = 0, a = !1, n = 0, o = i.length; n < o; n += 1)
          a =
            l.opt.development_extensions.spoof_institutional_affiliations &&
            (i[n].literal || (i[n].isInstitution && i[n].family && !i[n].given))
              ? ((r += 1), !1)
              : ((s += 1), !0);
        if (1 < s) return !0;
        if (1 < r) return !0;
        if (r && a) return !0;
      }
      return !1;
    });
  }),
  (CSL.Attributes["@locale"] = function (t, e) {
    var i,
      s,
      r,
      a,
      n,
      o,
      l = t.opt["default-locale"][0];
    if ("layout" === this.name) {
      if (((this.locale_raw = e), this.tokentype === CSL.START)) {
        var u = e.split(/\s+/),
          h = {},
          p = CSL.localeResolve(u[0], l);
        p.generic ? (h[p.generic] = p.best) : (h[p.best] = p.best);
        for (var c = 1, m = u.length; c < m; c += 1) {
          var f = CSL.localeResolve(u[c], l);
          f.generic ? (h[f.generic] = p.best) : (h[f.best] = p.best);
        }
        t[t.build.area].opt.sort_locales.push(h);
      }
      t.opt.has_layout_locale = !0;
    } else {
      r = e.split(/\s+/);
      var d = [];
      for (c = 0, m = r.length; c < m; c += 1)
        (s = r[c]),
          (i = CSL.localeResolve(s, l)),
          2 === r[c].length && d.push(i.bare),
          t.localeConfigure(i, !0),
          (r[c] = i);
      var g = r.slice();
      this.tests.push(
        ((a = g),
        (n = l),
        (o = d),
        function (t, e) {
          var i, s, r;
          for (
            [],
              i = !1,
              r = t.language ? t.language : n,
              s = CSL.localeResolve(r, n),
              c = 0,
              m = a.length;
            c < m;
            c += 1
          )
            if (s.best === a[c].best) {
              i = !0;
              break;
            }
          return !i && -1 < o.indexOf(s.bare) && (i = !0), i;
        })
      );
    }
  }),
  (CSL.Attributes["@authority-residue"] = function (r, t) {
    var a;
    this.tests.push(
      ((a = "true" === t),
      function (t, e) {
        if (!t.authority || !t.authority[0] || !t.authority[0].family)
          return !a;
        var i = t.authority[0].family.split("|").length,
          s = r.tmp.authority_stop_last;
        return 0 < i + s ? a : !a;
      })
    );
  }),
  (CSL.Attributes["@locale-internal"] = function (r, t) {
    var e, a, i, n, o;
    for (
      i = t.split(/\s+/), this.locale_bares = [], n = 0, o = i.length;
      n < o;
      n += 1
    )
      (a = i[n]),
        (e = CSL.localeResolve(a, r.opt["default-locale"][0])),
        2 === i[n].length && this.locale_bares.push(e.bare),
        r.localeConfigure(e),
        (i[n] = e);
    (this.locale_default = r.opt["default-locale"][0]),
      (this.locale = i[0].best),
      (this.locale_list = i.slice());
    var l;
    this.tests.push(
      ((l = this),
      function (t, e) {
        var i;
        [], (i = !1);
        var s = !1;
        if (
          (t.language &&
            ((a = t.language),
            (s = CSL.localeResolve(a, r.opt["default-locale"][0])),
            s.best === r.opt["default-locale"][0] && (s = !1)),
          s)
        ) {
          for (n = 0, o = l.locale_list.length; n < o; n += 1)
            if (s.best === l.locale_list[n].best) {
              (r.opt.lang = l.locale),
                (r.tmp.last_cite_locale = l.locale),
                r.output.openLevel("empty"),
                (r.output.current.value().new_locale = l.locale),
                (i = !0);
              break;
            }
          !i &&
            -1 < l.locale_bares.indexOf(s.bare) &&
            ((r.opt.lang = l.locale),
            (r.tmp.last_cite_locale = l.locale),
            r.output.openLevel("empty"),
            (r.output.current.value().new_locale = l.locale),
            (i = !0));
        }
        return i;
      })
    );
  }),
  (CSL.Attributes["@is-parallel"] = function (t, e) {
    for (var i = e.split(" "), s = 0, r = i.length; s < r; s += 1)
      "true" === i[s] ? (i[s] = !0) : "false" === i[s] && (i[s] = !1);
    this.strings.set_parallel_condition = i;
  }),
  (CSL.Attributes["@require"] = function (t, e) {
    this.strings.require = e;
  }),
  (CSL.Attributes["@reject"] = function (t, e) {
    this.strings.reject = e;
  }),
  (CSL.Attributes["@gender"] = function (t, e) {
    this.gender = e;
  }),
  (CSL.Attributes["@cslid"] = function (t, e) {
    this.cslid = parseInt(e, 10);
  }),
  (CSL.Attributes["@label-form"] = function (t, e) {
    this.strings.label_form_override = e;
  }),
  (CSL.Attributes["@part-separator"] = function (t, e) {
    this.strings["part-separator"] = e;
  }),
  (CSL.Attributes["@leading-noise-words"] = function (t, e) {
    this["leading-noise-words"] = e;
  }),
  (CSL.Attributes["@name-never-short"] = function (t, e) {
    this["name-never-short"] = e;
  }),
  (CSL.Attributes["@class"] = function (t, e) {
    t.opt.class = e;
  }),
  (CSL.Attributes["@version"] = function (t, e) {
    t.opt.version = e;
  }),
  (CSL.Attributes["@value"] = function (t, e) {
    this.strings.value = e;
  }),
  (CSL.Attributes["@name"] = function (t, e) {
    this.strings.name = e;
  }),
  (CSL.Attributes["@form"] = function (t, e) {
    this.strings.form = e;
  }),
  (CSL.Attributes["@date-parts"] = function (t, e) {
    this.strings["date-parts"] = e;
  }),
  (CSL.Attributes["@range-delimiter"] = function (t, e) {
    this.strings["range-delimiter"] = e;
  }),
  (CSL.Attributes["@macro"] = function (t, e) {
    this.postponed_macro = e;
  }),
  (CSL.Attributes["@term"] = function (t, e) {
    this.strings.term = "sub verbo" === e ? "sub-verbo" : e;
  }),
  (CSL.Attributes["@xmlns"] = function (t, e) {}),
  (CSL.Attributes["@lang"] = function (t, e) {
    e && (t.build.lang = e);
  }),
  (CSL.Attributes["@lingo"] = function (t, e) {}),
  (CSL.Attributes["@macro-has-date"] = function (t, e) {
    this["macro-has-date"] = !0;
  }),
  (CSL.Attributes["@suffix"] = function (t, e) {
    this.strings.suffix = e;
  }),
  (CSL.Attributes["@prefix"] = function (t, e) {
    this.strings.prefix = e;
  }),
  (CSL.Attributes["@delimiter"] = function (t, e) {
    this.strings.delimiter = e;
  }),
  (CSL.Attributes["@match"] = function (t, e) {
    this.match = e;
  }),
  (CSL.Attributes["@names-min"] = function (t, e) {
    var i = parseInt(e, 10);
    t[t.build.area].opt.max_number_of_names < i &&
      (t[t.build.area].opt.max_number_of_names = i),
      (this.strings["et-al-min"] = i);
  }),
  (CSL.Attributes["@names-use-first"] = function (t, e) {
    this.strings["et-al-use-first"] = parseInt(e, 10);
  }),
  (CSL.Attributes["@names-use-last"] = function (t, e) {
    this.strings["et-al-use-last"] = "true" === e;
  }),
  (CSL.Attributes["@sort"] = function (t, e) {
    "descending" === e && (this.strings.sort_direction = CSL.DESCENDING);
  }),
  (CSL.Attributes["@plural"] = function (t, e) {
    "always" === e || "true" === e
      ? (this.strings.plural = 1)
      : "never" === e || "false" === e
      ? (this.strings.plural = 0)
      : "contextual" === e && (this.strings.plural = !1);
  }),
  (CSL.Attributes["@has-publisher-and-publisher-place"] = function (t, e) {
    this.strings["has-publisher-and-publisher-place"] = !0;
  }),
  (CSL.Attributes["@publisher-delimiter-precedes-last"] = function (t, e) {
    this.strings["publisher-delimiter-precedes-last"] = e;
  }),
  (CSL.Attributes["@publisher-delimiter"] = function (t, e) {
    this.strings["publisher-delimiter"] = e;
  }),
  (CSL.Attributes["@publisher-and"] = function (t, e) {
    this.strings["publisher-and"] = e;
  }),
  (CSL.Attributes["@newdate"] = function (t, e) {}),
  (CSL.Attributes["@givenname-disambiguation-rule"] = function (t, e) {
    -1 < CSL.GIVENNAME_DISAMBIGUATION_RULES.indexOf(e) &&
      (t.citation.opt["givenname-disambiguation-rule"] = e);
  }),
  (CSL.Attributes["@collapse"] = function (t, e) {
    e && (t[this.name].opt.collapse = e);
  }),
  (CSL.Attributes["@cite-group-delimiter"] = function (t, e) {
    e && (t[t.tmp.area].opt.cite_group_delimiter = e);
  }),
  (CSL.Attributes["@names-delimiter"] = function (t, e) {
    t.setOpt(this, "names-delimiter", e);
  }),
  (CSL.Attributes["@name-form"] = function (t, e) {
    t.setOpt(this, "name-form", e);
  }),
  (CSL.Attributes["@subgroup-delimiter"] = function (t, e) {
    this.strings["subgroup-delimiter"] = e;
  }),
  (CSL.Attributes["@subgroup-delimiter-precedes-last"] = function (t, e) {
    this.strings["subgroup-delimiter-precedes-last"] = e;
  }),
  (CSL.Attributes["@name-delimiter"] = function (t, e) {
    t.setOpt(this, "name-delimiter", e);
  }),
  (CSL.Attributes["@et-al-min"] = function (t, e) {
    var i = parseInt(e, 10);
    t[t.build.area].opt.max_number_of_names < i &&
      (t[t.build.area].opt.max_number_of_names = i),
      t.setOpt(this, "et-al-min", i);
  }),
  (CSL.Attributes["@et-al-use-first"] = function (t, e) {
    t.setOpt(this, "et-al-use-first", parseInt(e, 10));
  }),
  (CSL.Attributes["@et-al-use-last"] = function (t, e) {
    "true" === e
      ? t.setOpt(this, "et-al-use-last", !0)
      : t.setOpt(this, "et-al-use-last", !1);
  }),
  (CSL.Attributes["@et-al-subsequent-min"] = function (t, e) {
    var i = parseInt(e, 10);
    t[t.build.area].opt.max_number_of_names < i &&
      (t[t.build.area].opt.max_number_of_names = i),
      t.setOpt(this, "et-al-subsequent-min", i);
  }),
  (CSL.Attributes["@et-al-subsequent-use-first"] = function (t, e) {
    t.setOpt(this, "et-al-subsequent-use-first", parseInt(e, 10));
  }),
  (CSL.Attributes["@suppress-min"] = function (t, e) {
    this.strings["suppress-min"] = parseInt(e, 10);
  }),
  (CSL.Attributes["@suppress-max"] = function (t, e) {
    this.strings["suppress-max"] = parseInt(e, 10);
  }),
  (CSL.Attributes["@and"] = function (t, e) {
    t.setOpt(this, "and", e);
  }),
  (CSL.Attributes["@delimiter-precedes-last"] = function (t, e) {
    t.setOpt(this, "delimiter-precedes-last", e);
  }),
  (CSL.Attributes["@delimiter-precedes-et-al"] = function (t, e) {
    t.setOpt(this, "delimiter-precedes-et-al", e);
  }),
  (CSL.Attributes["@initialize-with"] = function (t, e) {
    t.setOpt(this, "initialize-with", e);
  }),
  (CSL.Attributes["@initialize"] = function (t, e) {
    "false" === e && t.setOpt(this, "initialize", !1);
  }),
  (CSL.Attributes["@name-as-reverse-order"] = function (t, e) {
    this["name-as-reverse-order"] = e;
  }),
  (CSL.Attributes["@name-as-sort-order"] = function (t, e) {
    "style-options" === this.name
      ? (this["name-as-sort-order"] = e)
      : t.setOpt(this, "name-as-sort-order", e);
  }),
  (CSL.Attributes["@sort-separator"] = function (t, e) {
    t.setOpt(this, "sort-separator", e);
  }),
  (CSL.Attributes["@year-suffix-delimiter"] = function (t, e) {
    t[this.name].opt["year-suffix-delimiter"] = e;
  }),
  (CSL.Attributes["@after-collapse-delimiter"] = function (t, e) {
    t[this.name].opt["after-collapse-delimiter"] = e;
  }),
  (CSL.Attributes["@subsequent-author-substitute"] = function (t, e) {
    t[this.name].opt["subsequent-author-substitute"] = e;
  }),
  (CSL.Attributes["@subsequent-author-substitute-rule"] = function (t, e) {
    t[this.name].opt["subsequent-author-substitute-rule"] = e;
  }),
  (CSL.Attributes["@disambiguate-add-names"] = function (t, e) {
    "true" === e && (t.opt["disambiguate-add-names"] = !0);
  }),
  (CSL.Attributes["@disambiguate-add-givenname"] = function (t, e) {
    "true" === e && (t.opt["disambiguate-add-givenname"] = !0);
  }),
  (CSL.Attributes["@disambiguate-add-year-suffix"] = function (t, e) {
    "true" === e &&
      "numeric" !== t.opt.xclass &&
      (t.opt["disambiguate-add-year-suffix"] = !0);
  }),
  (CSL.Attributes["@second-field-align"] = function (t, e) {
    ("flush" !== e && "margin" !== e) ||
      (t[this.name].opt["second-field-align"] = e);
  }),
  (CSL.Attributes["@hanging-indent"] = function (t, e) {
    "true" === e && (t[this.name].opt.hangingindent = 2);
  }),
  (CSL.Attributes["@line-spacing"] = function (t, e) {
    e &&
      e.match(/^[.0-9]+$/) &&
      (t[this.name].opt["line-spacing"] = parseFloat(e, 10));
  }),
  (CSL.Attributes["@entry-spacing"] = function (t, e) {
    e &&
      e.match(/^[.0-9]+$/) &&
      (t[this.name].opt["entry-spacing"] = parseFloat(e, 10));
  }),
  (CSL.Attributes["@near-note-distance"] = function (t, e) {
    t[this.name].opt["near-note-distance"] = parseInt(e, 10);
  }),
  (CSL.Attributes["@text-case"] = function (t, i) {
    this.execs.push(function (t, e) {
      "normal" === i
        ? (this.text_case_normal = !0)
        : ((this.strings["text-case"] = i),
          "title" === i &&
            (t.opt["default-locale"][0].slice(0, 2),
            e.jurisdiction && (this.strings["text-case"] = "passthrough")));
    });
  }),
  (CSL.Attributes["@page-range-format"] = function (t, e) {
    t.opt["page-range-format"] = e;
  }),
  (CSL.Attributes["@year-range-format"] = function (t, e) {
    t.opt["year-range-format"] = e;
  }),
  (CSL.Attributes["@default-locale"] = function (t, e) {
    if ("style" === this.name) {
      var i,
        s,
        r,
        a,
        n = e.match(/-x-(sort|translit|translat)-/g);
      if (n)
        for (r = 0, s = n.length; r < s; r += 1)
          n[r] = n[r].replace(/^-x-/, "").replace(/-$/, "");
      for (
        i = e.split(/-x-(?:sort|translit|translat)-/),
          a = [i[0]],
          r = 1,
          s = i.length;
        r < s;
        r += 1
      )
        a.push(n[r - 1]), a.push(i[r]);
      for (i = a.slice(), s = i.length, r = 1; r < s; r += 2)
        t.opt["locale-" + i[r]].push(
          i[r + 1].replace(/^\s*/g, "").replace(/\s*$/g, "")
        );
      i.length
        ? (t.opt["default-locale"] = i.slice(0, 1))
        : (t.opt["default-locale"] = ["en"]);
    } else "true" === e && (this.default_locale = !0);
  }),
  (CSL.Attributes["@default-locale-sort"] = function (t, e) {
    t.opt["default-locale-sort"] = e;
  }),
  (CSL.Attributes["@demote-non-dropping-particle"] = function (t, e) {
    t.opt["demote-non-dropping-particle"] = e;
  }),
  (CSL.Attributes["@initialize-with-hyphen"] = function (t, e) {
    "false" === e && (t.opt["initialize-with-hyphen"] = !1);
  }),
  (CSL.Attributes["@institution-parts"] = function (t, e) {
    this.strings["institution-parts"] = e;
  }),
  (CSL.Attributes["@if-short"] = function (t, e) {
    "true" === e && (this.strings["if-short"] = !0);
  }),
  (CSL.Attributes["@substitute-use-first"] = function (t, e) {
    this.strings["substitute-use-first"] = parseInt(e, 10);
  }),
  (CSL.Attributes["@use-first"] = function (t, e) {
    this.strings["use-first"] = parseInt(e, 10);
  }),
  (CSL.Attributes["@stop-last"] = function (t, e) {
    this.strings["stop-last"] = -1 * parseInt(e, 10);
  }),
  (CSL.Attributes["@use-last"] = function (t, e) {
    this.strings["use-last"] = parseInt(e, 10);
  }),
  (CSL.Attributes["@reverse-order"] = function (t, e) {
    "true" === e && (this.strings["reverse-order"] = !0);
  }),
  (CSL.Attributes["@display"] = function (t, e) {
    2 === t.bibliography.tokens.length && (t.opt.using_display = !0),
      (this.strings.cls = e);
  }),
  (CSL.Stack = function (t, e) {
    (this.mystack = []),
      (e || t) && this.mystack.push(t),
      (this.tip = this.mystack[0]);
  }),
  (CSL.Stack.prototype.push = function (t, e) {
    e || t ? this.mystack.push(t) : this.mystack.push(""),
      (this.tip = this.mystack[this.mystack.length - 1]);
  }),
  (CSL.Stack.prototype.clear = function () {
    (this.mystack = []), (this.tip = {});
  }),
  (CSL.Stack.prototype.replace = function (t, e) {
    if (0 === this.mystack.length)
      throw (
        "Internal CSL processor error: attempt to replace nonexistent stack item with " +
        t
      );
    (this.mystack[this.mystack.length - 1] = e || t ? t : ""),
      (this.tip = this.mystack[this.mystack.length - 1]);
  }),
  (CSL.Stack.prototype.pop = function () {
    var t = this.mystack.pop();
    return (
      this.mystack.length
        ? (this.tip = this.mystack[this.mystack.length - 1])
        : (this.tip = {}),
      t
    );
  }),
  (CSL.Stack.prototype.value = function () {
    return this.mystack.slice(-1)[0];
  }),
  (CSL.Stack.prototype.length = function () {
    return this.mystack.length;
  }),
  (CSL.Parallel = function (t) {
    (this.state = t),
      (this.sets = new CSL.Stack([])),
      (this.try_cite = !0),
      (this.use_parallels = !1),
      (this.midVars = [
        "section",
        "volume",
        "container-title",
        "collection-number",
        "issue",
        "page-first",
        "page",
        "number",
      ]),
      (this.ignoreVarsLawGeneral = [
        "first-reference-note-number",
        "locator",
        "label",
        "page-first",
        "page",
        "genre",
      ]),
      (this.ignoreVarsLawProceduralHistory = [
        "issued",
        "first-reference-note-number",
        "locator",
        "label",
        "page-first",
        "page",
        "genre",
        "jurisdiction",
      ]),
      (this.ignoreVarsOrders = ["first-reference-note-number"]),
      (this.ignoreVarsOther = [
        "first-reference-note-number",
        "locator",
        "label",
        "section",
        "page-first",
        "page",
      ]);
  }),
  (CSL.Parallel.prototype.isMid = function (t) {
    return -1 < this.midVars.indexOf(t);
  }),
  (CSL.Parallel.prototype.StartCitation = function (t, e) {
    (this.parallel_conditional_blobs_list = []),
      this.use_parallels &&
        ((this.sortedItems = t),
        (this.sortedItemsPos = -1),
        this.sets.clear(),
        this.sets.push([]),
        (this.in_series = !0),
        (this.delim_counter = 0),
        (this.delim_pointers = []),
        (this.out = e || this.state.output.queue),
        (this.master_was_neutral_cite = !0));
  }),
  (CSL.Parallel.prototype.StartCite = function (t, e, i) {
    var s, r, a, n, o, l, u, h;
    if (this.use_parallels) {
      this.sets.value().length &&
        this.sets.value()[0].itemId == t.id &&
        this.ComposeSet(),
        (this.sortedItemsPos += 1),
        e && (s = e.position),
        (this.try_cite = !0);
      for (var p = !1, c = 0, m = CSL.PARALLEL_MATCH_VARS.length; c < m; c += 1)
        if (t[CSL.PARALLEL_MATCH_VARS[c]]) {
          p = !0;
          break;
        }
      var f = !0,
        d = this.sets.value().slice(-1)[0];
      if (d && d.Item) {
        var g = d.Item.jurisdiction ? d.Item.jurisdiction.split(":")[0] : "",
          b = t.jurisdiction ? t.jurisdiction.split(":")[0] : "";
        d.Item.title !== t.title
          ? (f = !1)
          : g !== b
          ? (f = !1)
          : d.Item.type !== t.type
          ? (f = !1)
          : -1 < ["article-journal", "article-magazine"].indexOf(t.type) &&
            ((this.state.opt.development_extensions.handle_parallel_articles &&
              d.Item["container-title"] === t["container-title"]) ||
              (f = !1));
      }
      if (
        ((f && p && -1 !== CSL.PARALLEL_TYPES.indexOf(t.type)) ||
          ((this.try_cite = !0), this.in_series && (this.in_series = !1)),
        (this.cite = {}),
        (this.cite.front = []),
        (this.cite.mid = []),
        (this.cite.back = []),
        (this.cite.front_collapse = {}),
        (this.cite.back_forceme = []),
        (this.cite.position = s),
        (this.cite.Item = t),
        (this.cite.itemId = "" + t.id),
        (this.cite.prevItemID = "" + i),
        (this.target = "front"),
        -1 < ["treaty"].indexOf(t.type))
      )
        this.ignoreVars = this.ignoreVarsOrders;
      else if (-1 < ["article-journal", "article-magazine"].indexOf(t.type))
        this.ignoreVars = this.ignoreVarsOther;
      else if (e && e.prefix) {
        (this.ignoreVars = this.ignoreVarsLawProceduralHistory),
          (this.cite.useProceduralHistory = !0);
        var _ = this.sets.value()[this.sets.value().length - 1];
        if (_ && _.back)
          for (c = _.back.length - 1; -1 < c; c += -1)
            _.back[c] && _[_.back[c]] && delete _[_.back[c]];
      } else this.ignoreVars = this.ignoreVarsLawGeneral;
      if (
        this.sortedItems &&
        0 < this.sortedItemsPos &&
        this.sortedItemsPos < this.sortedItems.length
      ) {
        if (
          ((n = this.sortedItems[this.sortedItemsPos][1]),
          (l = "" + this.sortedItems[this.sortedItemsPos - 1][1].id),
          (o = this.state.registry.registry[l].parallel),
          (u = !1),
          o == n.id)
        ) {
          for (r = this.sortedItemsPos - 1, a = r; -1 < a; a += -1)
            if (this.sortedItems[a][1].id == t.id) {
              u = this.sortedItems[a][1].locator;
              break;
            }
          (h = this.sortedItems[this.sortedItemsPos][1].locator),
            (n.position =
              !u && h
                ? CSL.POSITION_IBID_WITH_LOCATOR
                : h === u
                ? CSL.POSITION_IBID
                : CSL.POSITION_IBID_WITH_LOCATOR);
        }
      } else {
        if (!this.state.registry.registry[t.id])
          return (this.try_cite = !1), void (this.force_collapse = !1);
        this.state.registry.registry[t.id].parallel = !1;
      }
      (this.force_collapse = !1),
        this.state.registry.registry[t.id].parallel &&
          (this.force_collapse = !0);
    }
  }),
  (CSL.Parallel.prototype.StartVariable = function (t, e) {
    if (this.use_parallels && (this.try_cite || this.force_collapse)) {
      if (
        ((this.variable = "names" === t ? t + ":" + this.target : t),
        -1 < this.ignoreVars.indexOf(t))
      )
        return;
      "container-title" === t &&
        0 === this.sets.value().length &&
        (this.master_was_neutral_cite = !1),
        (this.data = {}),
        (this.data.value = ""),
        (this.data.blobs = []);
      var i = this.isMid(t);
      if (
        "authority" === e &&
        "names:front" === this.variable &&
        this.sets.value().length
      ) {
        var s = this.sets.value()[this.sets.value().length - 1].Item,
          r = !1;
        this.cite.Item.authority &&
          this.cite.Item.authority.length &&
          (r = this.cite.Item.authority[0].literal);
        var a = !1;
        s.authority && s.authority.length && (a = s.authority[0].literal),
          r !== a && ((this.try_cite = !0), (this.in_series = !1));
      } else
        "front" === this.target && i
          ? (this.target = "mid")
          : "mid" === this.target && !i && this.cite.Item.title && "names" !== t
          ? (this.target = "back")
          : "back" === this.target &&
            i &&
            ((this.try_cite = !0), (this.in_series = !1));
      "number" === t
        ? this.cite.front.push(this.variable)
        : -1 < CSL.PARALLEL_COLLAPSING_MID_VARSET.indexOf(t)
        ? -1 <
          ["article-journal", "article-magazine"].indexOf(this.cite.Item.type)
          ? this.cite.mid.push(this.variable)
          : this.cite.front.push(this.variable)
        : this.cite[this.target].push(this.variable);
    }
  }),
  (CSL.Parallel.prototype.AppendBlobPointer = function (t) {
    if (this.use_parallels) {
      if (-1 < this.ignoreVars.indexOf(this.variable)) return;
      if (this.use_parallels && (this.force_collapse || this.try_cite)) {
        if (
          -1 <
          ["article-journal", "article-magazine"].indexOf(this.cite.Item.type)
        ) {
          if (
            -1 <
            ["volume", "page", "page-first", "issue"].indexOf(this.variable)
          )
            return;
          if ("container-title" === this.variable && 1 < this.cite.mid.length)
            return;
        }
        this.variable &&
          (this.try_cite || this.force_collapse) &&
          t &&
          t.blobs &&
          ((this.cite.useProceduralHistory && "back" === this.target) ||
            this.data.blobs.push([t, t.blobs.length]));
      }
    }
  }),
  (CSL.Parallel.prototype.AppendToVariable = function (t, e) {
    if (this.use_parallels) {
      if (-1 < this.ignoreVars.indexOf(this.variable)) return;
      if (this.try_cite || this.force_collapse)
        this.target, (this.data.value += "::" + t);
    }
  }),
  (CSL.Parallel.prototype.CloseVariable = function () {
    if (this.use_parallels) {
      if (-1 < this.ignoreVars.indexOf(this.variable)) return;
      if (
        (this.try_cite || this.force_collapse) &&
        ((this.cite[this.variable] = this.data), 0 < this.sets.value().length)
      ) {
        var t = this.sets.value()[this.sets.value().length - 1];
        "front" === this.target &&
          "issued" === this.variable &&
          this.data.value &&
          this.master_was_neutral_cite &&
          (this.target = "mid"),
          "front" === this.target
            ? (!t[this.variable] && !this.data.value) ||
              (t[this.variable] &&
                this.data.value === t[this.variable].value) ||
              ("issued" !== this.variable && (this.in_series = !1))
            : "mid" === this.target
            ? -1 < CSL.PARALLEL_COLLAPSING_MID_VARSET.indexOf(this.variable) &&
              (t[this.variable] && t[this.variable].value === this.data.value
                ? (this.cite.front_collapse[this.variable] = !0)
                : (this.cite.front_collapse[this.variable] = !1))
            : "back" === this.target &&
              t[this.variable] &&
              this.data.value !== t[this.variable].value &&
              -1 ===
                this.sets
                  .value()
                  .slice(-1)[0]
                  .back_forceme.indexOf(this.variable) &&
              (this.in_series = !1);
      }
      this.variable = !1;
    }
  }),
  (CSL.Parallel.prototype.CloseCite = function () {
    var t, e, i, s, r, a, n;
    if (this.use_parallels && (this.force_collapse || this.try_cite)) {
      if (
        ((s = !1),
        this.cite.front_collapse["container-title"] || (s = !0),
        !1 === this.cite.front_collapse.volume && (s = !0),
        !1 === this.cite.front_collapse["collection-number"] && (s = !0),
        !1 === this.cite.front_collapse.section && (s = !0),
        s)
      ) {
        (this.cite.use_journal_info = !0),
          (n = this.cite.front.indexOf("section")),
          -1 < n &&
            (this.cite.front = this.cite.front
              .slice(0, n)
              .concat(this.cite.front.slice(n + 1))),
          (r = this.cite.front.indexOf("volume")),
          -1 < r &&
            (this.cite.front = this.cite.front
              .slice(0, r)
              .concat(this.cite.front.slice(r + 1))),
          (a = this.cite.front.indexOf("container-title")),
          -1 < a &&
            (this.cite.front = this.cite.front
              .slice(0, a)
              .concat(this.cite.front.slice(a + 1)));
        var o = this.cite.front.indexOf("collection-number");
        -1 < o &&
          (this.cite.front = this.cite.front
            .slice(0, o)
            .concat(this.cite.front.slice(o + 1)));
      }
      if (
        (this.in_series || this.force_collapse || this.ComposeSet(!0),
        0 === this.sets.value().length)
      ) {
        var l = !1;
        for (e = 0, i = this.cite.back.length; e < i; e += 1)
          if (
            ((t = this.cite.back[e]),
            "issued" === t && this.cite.issued && this.cite.issued.value)
          ) {
            l = !0;
            break;
          }
        l || this.cite.back_forceme.push("issued");
      } else {
        var u = this.cite.front.indexOf("issued");
        if (
          ((-1 === u || this.master_was_neutral_cite) &&
            (this.cite.back_forceme = this.sets
              .value()
              .slice(-1)[0].back_forceme),
          -1 < u)
        ) {
          var h = this.sets.value()[this.sets.value().length - 1];
          h.issued ||
            (this.cite.front = this.cite.front
              .slice(0, u)
              .concat(this.cite.front.slice(u + 1)));
        }
        this.master_was_neutral_cite &&
          -1 < this.cite.mid.indexOf("names:mid") &&
          this.cite.front.push("names:mid");
      }
      this.sets.value().push(this.cite);
    }
  }),
  (CSL.Parallel.prototype.ComposeSet = function (t) {
    var e, i, s;
    if (this.use_parallels && (this.force_collapse || this.try_cite)) {
      var r = this.sets.value().length;
      if (1 === this.sets.value().length)
        this.in_series || (this.sets.value().pop(), (this.delim_counter += 1));
      else {
        for (s = this.sets.value().length, i = 0; i < s; i += 1)
          (e = this.sets.value()[i]),
            0 === i ||
              (!e.Item.title && e.use_journal_info
                ? this.delim_pointers.push(!1)
                : this.delim_pointers.push(this.delim_counter)),
            (this.delim_counter += 1),
            CSL.POSITION_FIRST === e.position &&
              (0 === i
                ? ((this.state.registry.registry[e.itemId].master = !0),
                  (this.state.registry.registry[e.itemId].siblings = []),
                  (this.state.registry.registry[e.itemId].parallel = !1))
                : e.prevItemID &&
                  (this.state.registry.registry[e.prevItemID].parallel
                    ? (this.state.registry.registry[e.itemId].parallel =
                        this.state.registry.registry[e.prevItemID].parallel)
                    : (this.state.registry.registry[e.itemId].parallel =
                        e.prevItemID),
                  (this.state.registry.registry[e.itemId].siblings =
                    this.state.registry.registry[e.prevItemID].siblings),
                  this.state.registry.registry[e.itemId].siblings ||
                    ((this.state.registry.registry[e.itemId].siblings = []),
                    CSL.debug(
                      "WARNING: adding missing siblings array to registry object"
                    )),
                  this.state.registry.registry[e.itemId].siblings.push(
                    e.itemId
                  )));
        this.sets.push([]);
      }
      r < 2 ? this.purgeGroupsIfParallel(!1) : this.purgeGroupsIfParallel(!0),
        (this.in_series = !0);
    }
  }),
  (CSL.Parallel.prototype.PruneOutputQueue = function () {
    var t, e, i, s, r, a;
    if (this.use_parallels)
      for (t = this.sets.mystack.length, e = 0; e < t; e += 1)
        if (((i = this.sets.mystack[e]), 1 < i.length))
          for (r = i.length, s = 0; s < r; s += 1)
            (a = i[s]),
              0 === s
                ? this.purgeVariableBlobs(a, a.back)
                : s === i.length - 1
                ? this.purgeVariableBlobs(a, a.front.concat(a.back_forceme))
                : this.purgeVariableBlobs(a, a.front.concat(a.back));
  }),
  (CSL.Parallel.prototype.purgeVariableBlobs = function (t, e) {
    var i, s, r, a, n, o, l;
    if (this.use_parallels) {
      for (
        l = this.state.output.current.value(),
          void 0 === l.length && (l = l.blobs),
          s = 0,
          i = this.delim_pointers.length;
        s < i;
        s += 1
      )
        (o = this.delim_pointers[s]),
          !1 !== o && (l[o].parallel_delimiter = ", ");
      for (i = e.length - 1, s = i; -1 < s; s += -1)
        if (((r = e[s]), t[r]))
          for (n = t[r].blobs.length - 1, o = n; -1 < o; o += -1)
            (a = t[r].blobs[o]),
              (a[0].blobs = a[0].blobs
                .slice(0, a[1])
                .concat(a[0].blobs.slice(a[1] + 1))),
              (this.state.tmp.has_purged_parallel = !0),
              a[0] &&
                a[0].strings &&
                "string" == typeof a[0].strings.oops &&
                a[0].parent &&
                a[0].parent &&
                (a[0].parent.parent.strings.delimiter = a[0].strings.oops);
    }
  }),
  (CSL.Parallel.prototype.purgeGroupsIfParallel = function (t) {
    for (
      var e = this.parallel_conditional_blobs_list.length - 1;
      -1 < e;
      e += -1
    ) {
      for (
        var i = this.parallel_conditional_blobs_list[e],
          s = !0,
          r = 0,
          a = i.conditions.length;
        r < a;
        r += 1
      )
        if (
          !i.conditions[r] != !!t &&
          ("master" !== i.conditions[r] ||
            this.state.registry.registry[i.id].master) &&
          ("servant" !== i.conditions[r] ||
            this.state.registry.registry[i.id].parallel)
        ) {
          s = !1;
          break;
        }
      if (s) {
        for (var n = []; i.blobs.length > i.pos; ) n.push(i.blobs.pop());
        for (n.length && n.pop(); n.length; ) i.blobs.push(n.pop());
      }
      this.parallel_conditional_blobs_list.pop();
    }
  }),
  (CSL.Util = {}),
  (CSL.Util.Match = function () {
    (this.any = function (t, e, a) {
      return function (t, e) {
        for (var i = 0, s = a.length; i < s; i += 1) {
          var r = a[i](t, e);
          if (r) return !0;
        }
        return !1;
      };
    }),
      (this.none = function (t, e, a) {
        return function (t, e) {
          for (var i = 0, s = a.length; i < s; i += 1) {
            var r = a[i](t, e);
            if (r) return !1;
          }
          return !0;
        };
      }),
      (this.all = function (t, e, a) {
        return function (t, e) {
          for (var i = 0, s = a.length; i < s; i += 1) {
            var r = a[i](t, e);
            if (!r) return !1;
          }
          return !0;
        };
      }),
      (this[void 0] = this.all),
      (this.nand = function (t, e, a) {
        return function (t, e) {
          for (var i = 0, s = a.length; i < s; i += 1) {
            var r = a[i](t, e);
            if (!r) return !0;
          }
          return !1;
        };
      });
  }),
  (CSL.Transform = function (E) {
    function k(t, e, i, s, r, a) {
      var n;
      if (((r = CSL.FIELD_CATEGORY_REMAP[r]), !r)) return s;
      var o = r;
      if (((n = ""), t.sys.getAbbreviation)) {
        var l = t.transform.loadAbbreviation(e.jurisdiction, r, s, e.type, !0);
        t.transform.abbrevs[l][r] &&
          s &&
          t.sys.getAbbreviation &&
          t.transform.abbrevs[l][r][s] &&
          (n = t.transform.abbrevs[l][r][s].replace("{stet}", s));
      }
      return (
        n ||
          (t.opt.development_extensions
            .require_explicit_legal_case_title_short &&
            "legal_case" === e.type) ||
          !i ||
          !e[i] ||
          !a ||
          (n = e[i]),
        n || (n = s),
        n &&
          n.match(/^\!(?:[^>]+,)*here(?:,[^>]+)*>>>/) &&
          (n =
            "jurisdiction" === o &&
            -1 < ["treaty", "patent"].indexOf(e.type) &&
            n.replace(/^\![^>]*>>>\s*/, "")),
        n
      );
    }
    function _(t, e) {
      var i,
        s = E.opt["default-locale"][0].slice(0, 2);
      if (
        ((i = E.opt.development_extensions.strict_text_case_locales
          ? new RegExp("^([a-zA-Z]{2})(?:$|-.*| .*)")
          : new RegExp("^([a-zA-Z]{2})(?:$|-.*|.*)")),
        t.language)
      ) {
        var r = ("" + t.language).match(i);
        s = r ? r[1] : "tlh";
      }
      return (
        t.multi &&
          t.multi &&
          t.multi.main &&
          t.multi.main[e] &&
          (s = t.multi.main[e]),
        (E.opt.development_extensions.strict_text_case_locales &&
          !E.opt.development_extensions.normalize_lang_keys_to_lowercase) ||
          (s = s.toLowerCase()),
        s
      );
    }
    function R(t, e, i, s, r) {
      var a,
        n,
        o,
        l = r,
        u = !1;
      if (!t[e])
        return { name: "", usedOrig: r, token: CSL.Util.cloneToken(this) };
      (c = { name: "", usedOrig: r, locale: _(t, e) }), (o = E.opt[i]);
      var h = !1,
        p = !1;
      if ("locale-orig" === i)
        (c = r
          ? { name: "", usedOrig: r }
          : { name: t[e], usedOrig: !1, locale: _(t, e) }),
          (h = !0),
          (u = !0);
      else if (s && (void 0 === o || 0 === o.length)) {
        var c = { name: t[e], usedOrig: !0, locale: _(t, e) };
        (h = !0), (u = !0);
      }
      if (!h) {
        for (var m = 0, f = o.length; m < f; m += 1) {
          if (
            ((a = o[m]),
            (n = a.split(/[\-_]/)[0]),
            a && t.multi && t.multi._keys[e] && t.multi._keys[e][a])
          ) {
            (c.name = t.multi._keys[e][a]),
              (c.locale = a),
              "jurisdiction" === e && (p = c.name);
            break;
          }
          if (n && t.multi && t.multi._keys[e] && t.multi._keys[e][n]) {
            (c.name = t.multi._keys[e][n]),
              (c.locale = n),
              "jurisdiction" === e && (p = c.name);
            break;
          }
        }
        !c.name &&
          s &&
          ((c = { name: t[e], usedOrig: !0, locale: _(t, e) }), (u = !0));
      }
      if (
        ((c.token = CSL.Util.cloneToken(this)),
        E.sys.getHumanForm && "jurisdiction" === e && c.name)
      )
        c.name = CSL.getJurisdictionNameAndSuppress(E, t[e], p);
      else if (
        -1 < ["title", "container-title"].indexOf(e) &&
        !(
          l ||
          (c.token.strings["text-case"] &&
            "sentence" !== c.token.strings["text-case"] &&
            "normal" !== c.token.strings["text-case"])
        )
      ) {
        var d = !u && c.locale,
          g = e.slice(0, -5),
          b = "sentence" === c.token.strings["text-case"];
        (c.name = CSL.titlecaseSentenceOrNormal(E, t, g, d, b)),
          delete c.token.strings["text-case"];
      }
      return c;
    }
    function w(t) {
      var e = t.match(/^!([-,_a-z]+)>>>/);
      if (e) {
        var i = e[1].split(",");
        t = t.slice(e[0].length);
        for (var s = 0, r = i.length; s < r; s += 1)
          -1 === E.tmp.done_vars.indexOf(i[s]) && E.tmp.done_vars.push(i[s]);
      }
      return t;
    }
    (this.abbrevs = {}),
      (this.abbrevs.default = new E.sys.AbbreviationSegments()),
      (this.getTextSubField = R),
      (this.loadAbbreviation = function (t, e, i, s) {
        return (
          t || (t = "default"),
          i
            ? E.sys.getAbbreviation &&
              ((t = E.sys.getAbbreviation(
                E.opt.styleID,
                E.transform.abbrevs,
                t,
                e,
                i,
                s,
                !0
              )),
              t || (t = "default"))
            : (E.transform.abbrevs[t] ||
                (E.transform.abbrevs[t] = new E.sys.AbbreviationSegments()),
              E.transform.abbrevs[t][e] || (E.transform.abbrevs[t][e] = {})),
          t
        );
      }),
      (this.getOutputFunction = function (I, O, t, T, e) {
        var N,
          A = CSL.LangPrefsMap[I[0]];
        return (
          (N = !!A && E.opt["cite-lang-prefs"][A]),
          function (t, e, i, s) {
            var r, a, n, o, l, u;
            if (!I[0] || (!e[I[0]] && !e[T])) return null;
            var h = { primary: !1, secondary: !1, tertiary: !1 };
            if ("_sort" === t.tmp.area.slice(-5)) h.primary = "locale-sort";
            else if (N)
              for (
                var p = ["primary", "secondary", "tertiary"],
                  c = 0,
                  m = p.length;
                c < m && !(N.length - 1 < c);
                c += 1
              )
                N[c] && (h[p[c]] = "locale-" + N[c]);
            else h.primary = "locale-orig";
            if (
              (("title-short" !== I[0] &&
                ("bibliography" === t.tmp.area ||
                  ("citation" === t.tmp.area &&
                    "note" === t.opt.xclass &&
                    i &&
                    !i.position))) ||
                ((h.secondary = !1), (h.tertiary = !1)),
              t.tmp["publisher-list"])
            )
              return (
                "publisher" === I[0]
                  ? (t.tmp["publisher-token"] = this)
                  : "publisher-place" === I[0] &&
                    (t.tmp["publisher-place-token"] = this),
                null
              );
            var f = R.call(this, e, I[0], h.primary, !0);
            (r = f.name), (a = f.locale);
            var d,
              g = f.token,
              b = f.usedOrig;
            if (
              (function (t, e, i, s) {
                var r = t.variables[0];
                if (E.publisherOutput && i) {
                  if (-1 === ["publisher", "publisher-place"].indexOf(r))
                    return !1;
                  (E.publisherOutput[r + "-token"] = t),
                    E.publisherOutput.varlist.push(r);
                  var a = i.split(/;\s*/);
                  a.length === E.publisherOutput[r + "-list"].length &&
                    (E.publisherOutput[r + "-list"] = a);
                  for (var n = 0, o = a.length; n < o; n += 1)
                    a[n] = k(E, e, !1, a[n], s, !0);
                  return (E.tmp[r + "-token"] = t), !0;
                }
                return !1;
              })(this, e, r, O)
            )
              return null;
            if (((n = !1), (l = !1), h.secondary)) {
              (f = R.call(this, e, I[0], h.secondary, !1, f.usedOrig)),
                (n = f.name),
                (o = f.locale);
              var _ = f.token;
            }
            if (h.tertiary) {
              (f = R.call(this, e, I[0], h.tertiary, !1, f.usedOrig)),
                (l = f.name),
                (u = f.locale);
              var v = f.token;
            }
            if (
              (O &&
                ((r = k(t, e, T, r, O, !0)),
                r && (r = w(r)),
                (n = k(t, e, !1, n, O, !0)),
                (l = k(t, e, !1, l, O, !0))),
              "locale-translit" === h.primary &&
                (d = t.opt.citeAffixes[A][h.primary].prefix),
              "<i>" === d && "title" === I[0] && !b)
            ) {
              var S = !1;
              for (c = 0, m = g.decorations.length; c < m; c += 1)
                "@font-style" === g.decorations[c][0] &&
                  "italic" === g.decorations[c][1] &&
                  (S = !0);
              S || g.decorations.push(["@font-style", "italic"]);
            }
            if (
              ("en" !== a &&
                "title" === g.strings["text-case"] &&
                (g.strings["text-case"] = "passthrough"),
              "title" === I[0] &&
                (r = CSL.demoteNoiseWords(t, r, this["leading-noise-words"])),
              n || l)
            ) {
              if (
                (t.output.openLevel("empty"),
                (g.strings.suffix = g.strings.suffix.replace(/[ .,]+$/, "")),
                t.output.append(r, g),
                n)
              ) {
                for (
                  _.strings.prefix = t.opt.citeAffixes[A][h.secondary].prefix,
                    _.strings.suffix = t.opt.citeAffixes[A][h.secondary].suffix,
                    _.strings.prefix || (_.strings.prefix = " "),
                    c = _.decorations.length - 1;
                  -1 < c;
                  c += -1
                )
                  -1 <
                    [
                      "@quotes/true",
                      "@font-style/italic",
                      "@font-style/oblique",
                      "@font-weight/bold",
                    ].indexOf(_.decorations[c].join("/")) &&
                    (_.decorations = _.decorations
                      .slice(0, c)
                      .concat(_.decorations.slice(c + 1)));
                "en" !== o &&
                  "title" === _.strings["text-case"] &&
                  (_.strings["text-case"] = "passthrough");
                var y = new CSL.Token();
                y.decorations.push(["@font-style", "normal"]),
                  y.decorations.push(["@font-weight", "normal"]),
                  t.output.openLevel(y),
                  t.output.append(n, _),
                  t.output.closeLevel();
                var L = t.output.current.value(),
                  C = t.output.current.value().blobs.length - 1;
                t.parallel.use_parallels &&
                  (t.parallel.cite.front.push(I[0] + ":secondary"),
                  (t.parallel.cite[I[0] + ":secondary"] = { blobs: [[L, C]] }));
              }
              if (l) {
                for (
                  v.strings.prefix = t.opt.citeAffixes[A][h.tertiary].prefix,
                    v.strings.suffix = t.opt.citeAffixes[A][h.tertiary].suffix,
                    v.strings.prefix || (v.strings.prefix = " "),
                    c = v.decorations.length - 1;
                  -1 < c;
                  c += -1
                )
                  -1 <
                    [
                      "@quotes/true",
                      "@font-style/italic",
                      "@font-style/oblique",
                      "@font-weight/bold",
                    ].indexOf(v.decorations[c].join("/")) &&
                    (v.decorations = v.decorations
                      .slice(0, c)
                      .concat(v.decorations.slice(c + 1)));
                "en" !== u &&
                  "title" === v.strings["text-case"] &&
                  (v.strings["text-case"] = "passthrough");
                var x = new CSL.Token();
                x.decorations.push(["@font-style", "normal"]),
                  x.decorations.push(["@font-weight", "normal"]),
                  t.output.openLevel(x),
                  t.output.append(l, v),
                  t.output.closeLevel(),
                  (L = t.output.current.value()),
                  (C = t.output.current.value().blobs.length - 1),
                  t.parallel.use_parallels &&
                    (t.parallel.cite.front.push(I[0] + ":tertiary"),
                    (t.parallel.cite[I[0] + ":tertiary"] = {
                      blobs: [[L, C]],
                    }));
              }
              t.output.closeLevel();
            } else t.output.append(r, g);
            return null;
          }
        );
      }),
      (this.quashCheck = w);
  }),
  (CSL.Token = function (t, e) {
    (this.name = t),
      (this.strings = {}),
      (this.strings.delimiter = void 0),
      (this.strings.prefix = ""),
      (this.strings.suffix = ""),
      (this.decorations = []),
      (this.variables = []),
      (this.execs = []),
      (this.tokentype = e),
      (this.evaluator = !1),
      (this.tests = []),
      (this.rawtests = []),
      (this.succeed = !1),
      (this.fail = !1),
      (this.next = !1);
  }),
  (CSL.Util.cloneToken = function (t) {
    var e, i, s;
    if ("string" == typeof t) return t;
    for (var r in ((e = new CSL.Token(t.name, t.tokentype)), t.strings))
      t.strings.hasOwnProperty(r) && (e.strings[r] = t.strings[r]);
    if (t.decorations)
      for (e.decorations = [], i = 0, s = t.decorations.length; i < s; i += 1)
        e.decorations.push(t.decorations[i].slice());
    return (
      t.variables && (e.variables = t.variables.slice()),
      t.execs &&
        ((e.execs = t.execs.slice()),
        (e.tests = t.tests.slice()),
        (e.rawtests = t.tests.slice())),
      e
    );
  }),
  (CSL.AmbigConfig = function () {
    (this.maxvals = []),
      (this.minval = 1),
      (this.names = []),
      (this.givens = []),
      (this.year_suffix = !1),
      (this.disambiguate = 0);
  }),
  (CSL.Blob = function (t, e, i) {
    var s, r;
    if (((this.levelname = i), e)) {
      for (var a in ((this.strings = { prefix: "", suffix: "" }), e.strings))
        e.strings.hasOwnProperty(a) && (this.strings[a] = e.strings[a]);
      for (
        this.decorations = [],
          s = void 0 === e.decorations ? 0 : e.decorations.length,
          r = 0;
        r < s;
        r += 1
      )
        this.decorations.push(e.decorations[r].slice());
    } else
      (this.strings = {}),
        (this.strings.prefix = ""),
        (this.strings.suffix = ""),
        (this.strings.delimiter = ""),
        (this.decorations = []);
    (this.blobs = "string" == typeof t ? t : t ? [t] : []),
      (this.alldecor = [this.decorations]);
  }),
  (CSL.Blob.prototype.push = function (t) {
    if ("string" == typeof this.blobs)
      throw "Attempt to push blob onto string object";
    !1 !== t &&
      ((t.alldecor = t.alldecor.concat(this.alldecor)), this.blobs.push(t));
  }),
  (CSL.NumericBlob = function (t, e, i, s) {
    (this.id = s),
      (this.alldecor = []),
      (this.num = e),
      (this.particle = t),
      (this.blobs = e.toString()),
      (this.status = CSL.START),
      (this.strings = {}),
      i
        ? ((this.gender = i.gender),
          (this.decorations = i.decorations),
          (this.strings.prefix = i.strings.prefix),
          (this.strings.suffix = i.strings.suffix),
          (this.strings["text-case"] = i.strings["text-case"]),
          (this.successor_prefix = i.successor_prefix),
          (this.range_prefix = i.range_prefix),
          (this.splice_prefix = i.splice_prefix),
          (this.formatter = i.formatter),
          this.formatter ||
            (this.formatter = new CSL.Output.DefaultFormatter()),
          this.formatter && (this.type = this.formatter.format(1)))
        : ((this.decorations = []),
          (this.strings.prefix = ""),
          (this.strings.suffix = ""),
          (this.successor_prefix = ""),
          (this.range_prefix = ""),
          (this.splice_prefix = ""),
          (this.formatter = new CSL.Output.DefaultFormatter()));
  }),
  (CSL.NumericBlob.prototype.setFormatter = function (t) {
    (this.formatter = t), (this.type = this.formatter.format(1));
  }),
  (CSL.Output.DefaultFormatter = function () {}),
  (CSL.Output.DefaultFormatter.prototype.format = function (t) {
    return t.toString();
  }),
  (CSL.NumericBlob.prototype.checkNext = function (t, e) {
    e
      ? ((this.status = CSL.START),
        "object" == typeof t &&
          (t.num === this.num + 1
            ? (t.status = CSL.SUCCESSOR)
            : (t.status = CSL.SEEN)))
      : t && t.num && this.type === t.type && t.num === this.num + 1
      ? this.status === CSL.START || this.status === CSL.SEEN
        ? (t.status = CSL.SUCCESSOR)
        : (this.status !== CSL.SUCCESSOR &&
            this.status !== CSL.SUCCESSOR_OF_SUCCESSOR) ||
          (this.range_prefix
            ? ((t.status = CSL.SUCCESSOR_OF_SUCCESSOR),
              (this.status = CSL.SUPPRESS))
            : (t.status = CSL.SUCCESSOR))
      : (this.status === CSL.SUCCESSOR_OF_SUCCESSOR && (this.status = CSL.END),
        "object" == typeof t && (t.status = CSL.SEEN));
  }),
  (CSL.NumericBlob.prototype.checkLast = function (t) {
    return (
      (this.status === CSL.SEEN ||
        (t.num !== this.num - 1 && this.status === CSL.SUCCESSOR)) &&
      ((this.status = CSL.SUCCESSOR), !0)
    );
  }),
  (CSL.Util.fixDateNode = function (t, e, i) {
    var s,
      r,
      a,
      n,
      o,
      l,
      u,
      h,
      p,
      c,
      m,
      f,
      d,
      g = this.cslXml.getAttributeValue(i, "lingo"),
      b = this.cslXml.getAttributeValue(i, "default-locale");
    if (
      ((this.build.date_key = !0),
      (s = this.cslXml.getAttributeValue(i, "form")),
      (g = b
        ? this.opt["default-locale"][0]
        : this.cslXml.getAttributeValue(i, "lingo")),
      !this.getDate(s, b))
    )
      return t;
    var _ = this.cslXml.getAttributeValue(i, "date-parts");
    for (var v in ((r = this.cslXml.getAttributeValue(i, "variable")),
    (h = this.cslXml.getAttributeValue(i, "prefix")),
    (p = this.cslXml.getAttributeValue(i, "suffix")),
    (f = this.cslXml.getAttributeValue(i, "display")),
    (d = this.cslXml.getAttributeValue(i, "cslid")),
    (a = this.cslXml.nodeCopy(this.getDate(s, b))),
    this.cslXml.setAttribute(a, "lingo", this.opt.lang),
    this.cslXml.setAttribute(a, "form", s),
    this.cslXml.setAttribute(a, "date-parts", _),
    this.cslXml.setAttribute(a, "cslid", d),
    this.cslXml.setAttribute(a, "variable", r),
    this.cslXml.setAttribute(a, "default-locale", b),
    h && this.cslXml.setAttribute(a, "prefix", h),
    p && this.cslXml.setAttribute(a, "suffix", p),
    f && this.cslXml.setAttribute(a, "display", f),
    (c = this.cslXml.children(a)),
    c))
      (n = c[v]),
        "date-part" === this.cslXml.nodename(n) &&
          ((o = this.cslXml.getAttributeValue(n, "name")),
          b &&
            this.cslXml.setAttributeOnNodeIdentifiedByNameAttribute(
              a,
              "date-part",
              o,
              "@default-locale",
              "true"
            ));
    for (var v in ((c = this.cslXml.children(i)), c))
      if (((n = c[v]), "date-part" === this.cslXml.nodename(n)))
        for (l in ((o = this.cslXml.getAttributeValue(n, "name")),
        (m = this.cslXml.attributes(n)),
        m))
          "@name" !== l &&
            ((g &&
              g !== this.opt.lang &&
              -1 < ["@suffix", "@prefix", "@form"].indexOf(l)) ||
              ((u = m[l]),
              this.cslXml.setAttributeOnNodeIdentifiedByNameAttribute(
                a,
                "date-part",
                o,
                l,
                u
              )));
    if ("year" === this.cslXml.getAttributeValue(i, "date-parts"))
      this.cslXml.deleteNodeByNameAttribute(a, "month"),
        this.cslXml.deleteNodeByNameAttribute(a, "day");
    else if ("year-month" === this.cslXml.getAttributeValue(i, "date-parts"))
      this.cslXml.deleteNodeByNameAttribute(a, "day");
    else if ("month-day" === this.cslXml.getAttributeValue(i, "date-parts")) {
      for (
        var S = this.cslXml.children(a),
          y = 1,
          L = this.cslXml.numberofnodes(S);
        y < L;
        y++
      )
        if ("year" === this.cslXml.getAttributeValue(S[y], "name")) {
          this.cslXml.setAttribute(S[y - 1], "suffix", "");
          break;
        }
      this.cslXml.deleteNodeByNameAttribute(a, "year");
    }
    return this.cslXml.insertChildNodeAfter(t, i, e, a);
  }),
  (CSL.dateMacroAsSortKey = function (t, e) {
    CSL.dateAsSortKey.call(this, t, e, !0);
  }),
  (CSL.dateAsSortKey = function (t, e, i) {
    var s,
      r,
      a,
      n,
      o,
      l,
      u,
      h = this.variables[0],
      p = "empty";
    for (
      i && t.tmp.extension && (p = "macro-with-date"),
        s = e[h],
        void 0 === s &&
          ((s = { "date-parts": [[0]] }), s.year || (t.tmp.empty_date = !0)),
        void 0 === this.dateparts &&
          (this.dateparts = ["year", "month", "day"]),
        s.raw
          ? (s = t.fun.dateparser.parseDateToArray(s.raw))
          : s["date-parts"] && (s = t.dateParseArray(s)),
        void 0 === s && (s = {}),
        l = 0,
        u = CSL.DATE_PARTS_INTERNAL.length;
      l < u;
      l += 1
    )
      if (
        ((r = CSL.DATE_PARTS_INTERNAL[l]),
        (a = 0),
        (n = r),
        "_end" === n.slice(-4) && (n = n.slice(0, -4)),
        s[r] && -1 < this.dateparts.indexOf(n) && (a = s[r]),
        "year" === r.slice(0, 4))
      ) {
        o = CSL.Util.Dates[n].numeric(t, a);
        var c = "Y";
        "-" === o[0] &&
          ((c = "X"), (o = o.slice(1)), (o = 9999 - parseInt(o, 10))),
          t.output.append(CSL.Util.Dates[r.slice(0, 4)].numeric(t, c + o), p);
      } else
        (a = CSL.Util.Dates[n]["numeric-leading-zeros"](t, a)),
          a || (a = "00"),
          t.output.append(a, p);
  }),
  (CSL.Engine.prototype.dateParseArray = function (t) {
    var e, i, s, r;
    for (i in ((e = {}), t))
      if ("date-parts" === i) {
        (s = t["date-parts"]),
          1 < s.length &&
            s[0].length !== s[1].length &&
            CSL.error("CSL data error: element mismatch in date range input."),
          (r = ["", "_end"]);
        for (var a = 0, n = s.length; a < n; a += 1)
          for (var o = 0, l = CSL.DATE_PARTS.length; o < l; o += 1)
            void 0 === s[a][o]
              ? (e[CSL.DATE_PARTS[o] + r[a]] = s[a][o])
              : (e[CSL.DATE_PARTS[o] + r[a]] = parseInt(s[a][o], 10));
      } else
        t.hasOwnProperty(i) &&
          ("literal" === i &&
          "object" == typeof t.literal &&
          "string" == typeof t.literal.part
            ? (CSL.debug("Warning: fixing up weird literal date value"),
              (e.literal = t.literal.part))
            : (e[i] = t[i]));
    return e;
  }),
  (CSL.Util.Names = {}),
  (CSL.Util.Names.compareNamesets = CSL.NameOutput.prototype._compareNamesets),
  (CSL.Util.Names.unInitialize = function (t, e) {
    var i, s, r, a, n;
    if (!e) return "";
    for (
      r = e.split(/(?:\-|\s+)/),
        a = e.match(/(\-|\s+)/g),
        n = "",
        i = 0,
        s = r.length;
      i < s;
      i += 1
    )
      (n += r[i]), i < s - 1 && (n += a[i]);
    return n;
  }),
  (CSL.Util.Names.initializeWith = function (t, e, i, s) {
    var r, a, n, o, l, u, h;
    if (!e) return "";
    if (
      (i || (i = ""),
      -1 < ["Lord", "Lady"].indexOf(e) ||
        (!e.match(CSL.STARTSWITH_ROMANESQUE_REGEXP) && !i.match("%s")))
    )
      return e;
    var p = e;
    if (
      (!1 === t.opt["initialize-with-hyphen"] && (p = p.replace(/\-/g, " ")),
      (p = p.replace(/\s*\-\s*/g, "-").replace(/\s+/g, " ")),
      (p = p.replace(/-([a-z])/g, "–$1")),
      (l = p.match(/[\-\s]+/g)),
      (u = p.split(/[\-\s]+/)),
      0 === u.length)
    )
      p = l;
    else
      for (p = [u[0]], r = 1, a = u.length; r < a; r += 1)
        p.push(l[r - 1]), p.push(u[r]);
    for (u = p, r = u.length - 1; -1 < r; r += -1)
      if (u[r] && -1 < u[r].slice(0, -1).indexOf(".")) {
        var c = u.slice(r + 1),
          m = u[r].slice(0, -1).split(".");
        for (u = u.slice(0, r), n = 0, o = m.length; n < o; n += 1)
          u.push(m[n] + "."), n < m.length - 1 && u.push(" ");
        u = u.concat(c);
      }
    return (
      (h = s
        ? CSL.Util.Names.doNormalize(t, u, i)
        : CSL.Util.Names.doInitialize(t, u, i)),
      (h = h.replace(/\u2013([a-z])/g, "-$1")),
      h
    );
  }),
  (CSL.Util.Names.doNormalize = function (t, e, i, s) {
    var r, a;
    i = i || "";
    var n = [];
    for (r = 0, a = e.length; r < a; r += 1)
      1 < e[r].length && "." === e[r].slice(-1)
        ? ((e[r] = e[r].slice(0, -1)), n.push(!0))
        : 1 === e[r].length && e[r].toUpperCase() === e[r]
        ? n.push(!0)
        : n.push(!1);
    for (r = 0, a = e.length; r < a; r += 2)
      n[r] &&
        (r < e.length - 2 &&
          ((e[r + 1] = ""),
          (!i || (i.slice(-1) && " " !== i.slice(-1))) &&
            e[r].length &&
            e[r].match(CSL.ALL_ROMANESQUE_REGEXP) &&
            (1 < e[r].length || 1 < e[r + 2].length) &&
            (e[r + 1] = " "),
          1 < e[r + 2].length
            ? (e[r] =
                e[r] +
                i.replace(
                  /[\u0009\u000a\u000b\u000c\u000d\u0020\ufeff\u00a0]+$/,
                  ""
                ))
            : (e[r] = e[r] + i)),
        r === e.length - 1 && (e[r] = e[r] + i));
    return e
      .join("")
      .replace(/[\u0009\u000a\u000b\u000c\u000d\u0020\ufeff\u00a0]+$/, "")
      .replace(/\s*\-\s*/g, "-")
      .replace(/[\u0009\u000a\u000b\u000c\u000d\u0020]+/g, " ");
  }),
  (CSL.Util.Names.doInitialize = function (t, e, i, s) {
    var r, a, n, o, l, u, h;
    for (r = 0, a = e.length; r < a; r += 2)
      if (((h = e[r]), h))
        if (
          ((n = h.match(CSL.NAME_INITIAL_REGEXP)),
          !n &&
            !h.match(CSL.STARTSWITH_ROMANESQUE_REGEXP) &&
            1 < h.length &&
            i.match("%s") &&
            (n = h.match(/(.)(.*)/)),
          n && n[1] === n[1].toUpperCase())
        ) {
          var p = "";
          if (n[2]) {
            var c = "";
            for (u = n[2].split(""), o = 0, l = u.length; o < l; o += 1) {
              var m = u[o];
              if (m !== m.toUpperCase()) break;
              c += m;
            }
            c.length < n[2].length && (p = c.toLocaleLowerCase());
          }
          (e[r] = n[1].toLocaleUpperCase() + p),
            r < a - 1
              ? i.match("%s")
                ? (e[r] = i.replace("%s", e[r]))
                : -1 < e[r + 1].indexOf("-")
                ? (e[r + 1] = i + e[r + 1])
                : (e[r + 1] = i)
              : i.match("%s")
              ? (e[r] = i.replace("%s", e[r]))
              : e.push(i);
        } else h.match(CSL.ROMANESQUE_REGEXP) && (e[r] = " " + h);
    var f = e.join("");
    return (
      (f = f
        .replace(/[\u0009\u000a\u000b\u000c\u000d\u0020\ufeff\u00a0]+$/, "")
        .replace(/\s*\-\s*/g, "-")
        .replace(/[\u0009\u000a\u000b\u000c\u000d\u0020]+/g, " ")),
      f
    );
  }),
  (CSL.Util.Names.getRawName = function (t) {
    var e = [];
    return (
      t.given && e.push(t.given), t.family && e.push(t.family), e.join(" ")
    );
  }),
  (CSL.Util.Dates = {}),
  (CSL.Util.Dates.year = {}),
  (CSL.Util.Dates.year.long = function (t, e) {
    return e || (e = "boolean" == typeof e ? "" : 0), e.toString();
  }),
  (CSL.Util.Dates.year.imperial = function (t, e, i, s) {
    var r = "";
    e || (e = "boolean" == typeof e ? "" : 0), (i = i ? "_end" : "");
    var a = t.tmp.date_object["month" + i];
    for (a = a ? "" + a : "1"; a.length < 2; ) a = "0" + a;
    var n = t.tmp.date_object["day" + i];
    for (n = n ? "" + n : "1"; n.length < 2; ) n = "0" + n;
    var o,
      l,
      u = parseInt(e + a + n, 10);
    return (
      18680908 <= u && u < 19120730
        ? ((o = "明治"), (l = 1867))
        : 19120730 <= u && u < 19261225
        ? ((o = "大正"), (l = 1911))
        : 19261225 <= u && u < 19890108
        ? ((o = "昭和"), (l = 1925))
        : 19890108 <= u && ((o = "平成"), (l = 1988)),
      o &&
        l &&
        (t.transform.abbrevs.default.number[o] ||
          t.transform.loadAbbreviation("default", "number", o),
        t.transform.abbrevs.default.number[o] &&
          (o = t.transform.abbrevs.default.number[o]),
        (r = o + (e - l))),
      r
    );
  }),
  (CSL.Util.Dates.year.short = function (t, e) {
    if (((e = e.toString()), e && 4 === e.length)) return e.substr(2);
  }),
  (CSL.Util.Dates.year.numeric = function (t, e) {
    var i;
    e = "" + e;
    var s = e.match(/([0-9]*)$/);
    for (
      e = s ? ((i = e.slice(0, -1 * s[1].length)), s[1]) : ((i = e), "");
      e.length < 4;

    )
      e = "0" + e;
    return i + e;
  }),
  (CSL.Util.Dates.normalizeMonth = function (t, e) {
    var i;
    if (
      (t || (t = 0),
      (t = "" + t),
      t.match(/^[0-9]+$/) || (t = 0),
      (t = parseInt(t, 10)),
      e)
    ) {
      var s = { stub: "month-", num: t };
      s.num < 1 || 20 < s.num
        ? (s.num = 0)
        : 16 < s.num
        ? ((s.stub = "season-"), (s.num = s.num - 16))
        : 12 < s.num && ((s.stub = "season-"), (s.num = s.num - 12)),
        (i = s);
    } else (t < 1 || 12 < t) && (t = 0), (i = t);
    return i;
  }),
  (CSL.Util.Dates.month = {}),
  (CSL.Util.Dates.month.numeric = function (t, e) {
    e = CSL.Util.Dates.normalizeMonth(e);
    return e || (e = ""), e;
  }),
  (CSL.Util.Dates.month["numeric-leading-zeros"] = function (t, e) {
    e = CSL.Util.Dates.normalizeMonth(e);
    if (e) for (e = "" + e; e.length < 2; ) e = "0" + e;
    else e = "";
    return e;
  }),
  (CSL.Util.Dates.month.long = function (t, e, i, s) {
    var r = CSL.Util.Dates.normalizeMonth(e, !0);
    e = r.num;
    if (e) {
      for (e = "" + e; e.length < 2; ) e = "0" + e;
      e = t.getTerm(r.stub + e, "long", 0, 0, !1, s);
    } else e = "";
    return e;
  }),
  (CSL.Util.Dates.month.short = function (t, e, i, s) {
    var r = CSL.Util.Dates.normalizeMonth(e, !0);
    e = r.num;
    if (e) {
      for (e = "" + e; e.length < 2; ) e = "0" + e;
      e = t.getTerm(r.stub + e, "short", 0, 0, !1, s);
    } else e = "";
    return e;
  }),
  (CSL.Util.Dates.day = {}),
  (CSL.Util.Dates.day.numeric = function (t, e) {
    return e.toString();
  }),
  (CSL.Util.Dates.day.long = CSL.Util.Dates.day.numeric),
  (CSL.Util.Dates.day["numeric-leading-zeros"] = function (t, e) {
    for (e || (e = 0), e = e.toString(); e.length < 2; ) e = "0" + e;
    return e.toString();
  }),
  (CSL.Util.Dates.day.ordinal = function (t, e, i) {
    return t.fun.ordinalizer.format(e, i);
  }),
  (CSL.Util.Sort = {}),
  (CSL.Util.Sort.strip_prepositions = function (t) {
    var e;
    return (
      "string" == typeof t &&
        ((e = t.toLocaleLowerCase()), (e = t.match(/^((a|an|the)\s+)/))),
      e && (t = t.substr(e[1].length)),
      t
    );
  }),
  (CSL.Util.substituteStart = function (i, t) {
    var e, s, r, a, n, o, l;
    (a = function (t, e) {
      for (var i = 0, s = this.decorations.length; i < s; i += 1)
        if (
          "@strip-periods" === this.decorations[i][0] &&
          "true" === this.decorations[i][1]
        ) {
          t.tmp.strip_periods += 1;
          break;
        }
    }),
      this.execs.push(a),
      this.decorations &&
        (i.opt.development_extensions.csl_reverse_lookup_support ||
          i.sys.csl_reverse_lookup_support) &&
        (this.decorations.reverse(),
        this.decorations.push(["@showid", "true", this.cslid]),
        this.decorations.reverse()),
      (l = ["number", "date", "names"]),
      (("text" === this.name && !this.postponed_macro) ||
        -1 < l.indexOf(this.name)) &&
        ((e = function (t, e, i) {
          "author" === t.tmp.element_trace.value() || "names" === this.name
            ? i && i["author-only"]
              ? t.tmp.element_trace.push("do-not-suppress-me")
              : i && i["suppress-author"]
            : i && i["author-only"]
            ? t.tmp.element_trace.push("suppress-me")
            : i &&
              i["suppress-author"] &&
              t.tmp.element_trace.push("do-not-suppress-me");
        }),
        this.execs.push(e)),
      (s = this.strings.cls),
      (this.strings.cls = !1),
      0 === i.build.render_nesting_level &&
        ("bibliography" === i.build.area &&
        i.bibliography.opt["second-field-align"]
          ? ((r = new CSL.Token("group", CSL.START)),
            (r.decorations = [["@display", "left-margin"]]),
            (a = function (t, e) {
              t.tmp.render_seen ||
                ((r.strings.first_blob = e.id),
                t.output.startTag("bib_first", r));
            }),
            r.execs.push(a),
            t.push(r))
          : -1 < CSL.DISPLAY_CLASSES.indexOf(s) &&
            ((r = new CSL.Token("group", CSL.START)),
            (r.decorations = [["@display", s]]),
            (a = function (t, e) {
              (r.strings.first_blob = e.id), t.output.startTag("bib_first", r);
            }),
            r.execs.push(a),
            t.push(r)),
        (i.build.cls = s)),
      (i.build.render_nesting_level += 1),
      1 === i.build.substitute_level.value() &&
        ((n = new CSL.Token("choose", CSL.START)),
        CSL.Node.choose.build.call(n, i, t),
        (o = new CSL.Token("if", CSL.START)),
        (a = function (t, e) {
          return !!i.tmp.can_substitute.value();
        }),
        o.tests.push(a),
        (o.test = i.fun.match.any(this, i, o.tests)),
        t.push(o)),
      i.sys.variableWrapper &&
        this.variables_real &&
        this.variables_real.length &&
        ((a = function (t, e, i) {
          if (!t.tmp.just_looking && !t.tmp.suppress_decorations) {
            var s = new CSL.Token("text", CSL.START);
            (s.decorations = [["@showid", "true"]]),
              t.output.startTag("variable_entry", s);
            var r = null;
            i && (r = i.position), r || (r = 0);
            var a = 0;
            i && i.noteIndex && (a = i.noteIndex);
            var n = 0;
            i &&
              i["first-reference-note-number"] &&
              (n = i["first-reference-note-number"]);
            var o = 0;
            i && i["citation-number"] && (o = i["citation-number"]);
            var l = 0;
            i && i.index && (l = i.index);
            var u = {
              itemData: e,
              variableNames: this.variables,
              context: t.tmp.area,
              xclass: t.opt.xclass,
              position: ["first", "subsequent", "ibid", "ibid-with-locator"][r],
              "note-number": a,
              "first-reference-note-number": n,
              "citation-number": o,
              index: l,
              mode: t.opt.mode,
            };
            t.output.current.value().params = u;
          }
        }),
        this.execs.push(a));
  }),
  (CSL.Util.substituteEnd = function (t, e) {
    var i, s, r, a, n, u;
    t.sys.variableWrapper &&
      (this.hasVariable ||
        (this.variables_real && this.variables_real.length)) &&
      ((i = function (t, e) {
        t.tmp.just_looking ||
          t.tmp.suppress_decorations ||
          t.output.endTag("variable_entry");
      }),
      this.execs.push(i)),
      (i = function (t, e) {
        for (var i = 0, s = this.decorations.length; i < s; i += 1)
          if (
            "@strip-periods" === this.decorations[i][0] &&
            "true" === this.decorations[i][1]
          ) {
            t.tmp.strip_periods += -1;
            break;
          }
      }),
      this.execs.push(i),
      (t.build.render_nesting_level += -1),
      0 === t.build.render_nesting_level &&
        (t.build.cls
          ? ((i = function (t, e) {
              t.output.endTag("bib_first");
            }),
            this.execs.push(i),
            (t.build.cls = !1))
          : "bibliography" === t.build.area &&
            t.bibliography.opt["second-field-align"] &&
            ((s = new CSL.Token("group", CSL.END)),
            (i = function (t, e) {
              t.tmp.render_seen || t.output.endTag("bib_first");
            }),
            s.execs.push(i),
            e.push(s),
            (r = new CSL.Token("group", CSL.START)),
            (r.decorations = [["@display", "right-inline"]]),
            (i = function (t, e) {
              t.tmp.render_seen ||
                ((t.tmp.render_seen = !0), t.output.startTag("bib_other", r));
            }),
            r.execs.push(i),
            e.push(r))),
      1 === t.build.substitute_level.value() &&
        ((a = new CSL.Token("if", CSL.END)),
        e.push(a),
        (n = new CSL.Token("choose", CSL.END)),
        CSL.Node.choose.build.call(n, t, e)),
      ("names" === this.name ||
        ("text" === this.name && "title" !== this.variables_real)) &&
        (new CSL.Token("text", CSL.SINGLETON),
        (i = function (t, e) {
          if (
            "bibliography" === t.tmp.area &&
            "string" ==
              typeof t.bibliography.opt["subsequent-author-substitute"] &&
            (!this.variables_real || e[this.variables_real]) &&
            t.tmp.substituted_variable === this.variables_real
          ) {
            var i,
              s,
              r = t.bibliography.opt["subsequent-author-substitute-rule"],
              a = !t.tmp.suppress_decorations;
            if (
              a &&
              t.tmp.subsequent_author_substitute_ok &&
              t.tmp.rendered_name
            ) {
              if ("partial-each" === r || "partial-first" === r) {
                var n = !0,
                  o = [];
                for (
                  i = 0, s = t.tmp.name_node.children.length;
                  i < s;
                  i += 1
                ) {
                  var l = t.tmp.rendered_name[i];
                  n &&
                  t.tmp.last_rendered_name &&
                  t.tmp.last_rendered_name.length > i - 1 &&
                  l &&
                  !l.localeCompare(t.tmp.last_rendered_name[i])
                    ? ((u = new CSL.Blob(
                        t[t.tmp.area].opt["subsequent-author-substitute"]
                      )),
                      (t.tmp.name_node.children[i].blobs = [u]),
                      "partial-first" === r && (n = !1))
                    : (n = !1),
                    o.push(l);
                }
                t.tmp.last_rendered_name = o;
              } else if ("complete-each" === r) {
                o = t.tmp.rendered_name.join(",");
                if (o) {
                  if (
                    t.tmp.last_rendered_name &&
                    !o.localeCompare(t.tmp.last_rendered_name)
                  )
                    for (
                      i = 0, s = t.tmp.name_node.children.length;
                      i < s;
                      i += 1
                    )
                      (u = new CSL.Blob(
                        t[t.tmp.area].opt["subsequent-author-substitute"]
                      )),
                        (t.tmp.name_node.children[i].blobs = [u]);
                  t.tmp.last_rendered_name = o;
                }
              } else {
                o = t.tmp.rendered_name.join(",");
                o &&
                  (t.tmp.last_rendered_name &&
                    !o.localeCompare(t.tmp.last_rendered_name) &&
                    ((u = new CSL.Blob(
                      t[t.tmp.area].opt["subsequent-author-substitute"]
                    )),
                    t.tmp.label_blob
                      ? (t.tmp.name_node.top.blobs = [u, t.tmp.label_blob])
                      : t.tmp.name_node.top.blobs.length
                      ? (t.tmp.name_node.top.blobs[0].blobs = [u])
                      : (t.tmp.name_node.top.blobs = [u]),
                    (t.tmp.substituted_variable = this.variables_real)),
                  (t.tmp.last_rendered_name = o));
              }
              t.tmp.subsequent_author_substitute_ok = !1;
            }
          }
        }),
        this.execs.push(i)),
      (("text" === this.name && !this.postponed_macro) ||
        -1 < ["number", "date", "names"].indexOf(this.name)) &&
        ((i = function (t, e) {
          t.tmp.element_trace.pop();
        }),
        this.execs.push(i));
  }),
  (CSL.Util.padding = function (t) {
    var e = t.match(/\s*(-{0,1}[0-9]+)/);
    if (e)
      for (
        t = parseInt(e[1], 10), t < 0 && (t = 1e20 + t), t = "" + t;
        t.length < 20;

      )
        t = "0" + t;
    return t;
  }),
  (CSL.Util.LongOrdinalizer = function () {}),
  (CSL.Util.LongOrdinalizer.prototype.init = function (t) {
    this.state = t;
  }),
  (CSL.Util.LongOrdinalizer.prototype.format = function (t, e) {
    t < 10 && (t = "0" + t);
    var i = CSL.Engine.getField(
      CSL.LOOSE,
      this.state.locale[this.state.opt.lang].terms,
      "long-ordinal-" + t,
      "long",
      0,
      e
    );
    return (
      i || (i = this.state.fun.ordinalizer.format(t, e)),
      (this.state.tmp.cite_renders_content = !0),
      i
    );
  }),
  (CSL.Util.Ordinalizer = function (t) {
    (this.state = t), (this.suffixes = {});
  }),
  (CSL.Util.Ordinalizer.prototype.init = function () {
    if (!this.suffixes[this.state.opt.lang]) {
      this.suffixes[this.state.opt.lang] = {};
      for (var t = 0; t < 3; t += 1) {
        var e = [void 0, "masculine", "feminine"][t];
        this.suffixes[this.state.opt.lang][e] = [];
        for (var i = 1; i < 5; i += 1) {
          var s = this.state.getTerm("ordinal-0" + i, "long", !1, e);
          if (void 0 === s) {
            delete this.suffixes[this.state.opt.lang][e];
            break;
          }
          this.suffixes[this.state.opt.lang][e].push(s);
        }
      }
    }
  }),
  (CSL.Util.Ordinalizer.prototype.format = function (t, e) {
    var i;
    (t = parseInt(t, 10)), (i = "" + t);
    var s = "",
      r = [];
    if (
      (e && r.push(e),
      r.push("neuter"),
      this.state.locale[this.state.opt.lang].ord["1.0.1"])
    ) {
      var a;
      s = this.state.getTerm("ordinal", !1, 0, e);
      for (var n = 0, o = r.length; n < o; n += 1) {
        a = r[n];
        var l = this.state.locale[this.state.opt.lang].ord["1.0.1"];
        if (
          (l["whole-number"][i] && l["whole-number"][i][a]
            ? (s = this.state.getTerm(
                this.state.locale[this.state.opt.lang].ord["1.0.1"][
                  "whole-number"
                ][i][a],
                !1,
                0,
                e
              ))
            : l["last-two-digits"][i.slice(i.length - 2)] &&
              l["last-two-digits"][i.slice(i.length - 2)][a]
            ? (s = this.state.getTerm(
                this.state.locale[this.state.opt.lang].ord["1.0.1"][
                  "last-two-digits"
                ][i.slice(i.length - 2)][a],
                !1,
                0,
                e
              ))
            : l["last-digit"][i.slice(i.length - 1)] &&
              l["last-digit"][i.slice(i.length - 1)][a] &&
              (s = this.state.getTerm(
                this.state.locale[this.state.opt.lang].ord["1.0.1"][
                  "last-digit"
                ][i.slice(i.length - 1)][a],
                !1,
                0,
                e
              )),
          s)
        )
          break;
      }
    } else
      e || (e = void 0),
        this.state.fun.ordinalizer.init(),
        (s =
          (t / 10) % 10 == 1 || (10 < t && t < 20)
            ? this.suffixes[this.state.opt.lang][e][3]
            : t % 10 == 1 && t % 100 != 11
            ? this.suffixes[this.state.opt.lang][e][0]
            : t % 10 == 2 && t % 100 != 12
            ? this.suffixes[this.state.opt.lang][e][1]
            : t % 10 == 3 && t % 100 != 13
            ? this.suffixes[this.state.opt.lang][e][2]
            : this.suffixes[this.state.opt.lang][e][3]);
    return (i = i += s), i;
  }),
  (CSL.Util.Romanizer = function () {}),
  (CSL.Util.Romanizer.prototype.format = function (t) {
    var e, i, s, r, a;
    if (((e = ""), t < 6e3))
      for (
        r = t.toString().split(""),
          r.reverse(),
          i = 0,
          s = 0,
          a = r.length,
          i = 0;
        i < a;
        i += 1
      )
        (s = parseInt(r[i], 10)), (e = CSL.ROMAN_NUMERALS[i][s] + e);
    return e;
  }),
  (CSL.Util.Suffixator = function (t) {
    t || (t = CSL.SUFFIX_CHARS), (this.slist = t.split(","));
  }),
  (CSL.Util.Suffixator.prototype.format = function (t) {
    var e;
    t += 1;
    var i = "";
    do {
      e = t % 26 == 0 ? 26 : t % 26;
      i = this.slist[e - 1] + i;
      t = (t - e) / 26;
    } while (0 !== t);
    return i;
  }),
  (CSL.Engine.prototype.processNumber = function (u, m, f, t) {
    var e,
      d = this;
    function g(t, e, i, s) {
      s = s || "";
      var r = {};
      if ((e || CSL.STATUTE_SUBDIV_STRINGS_REVERSE[f] || (e = "var:" + f), e)) {
        var a = e.match(/(\s*)([^\s]*)(\s*)/);
        (r.label = a[2]),
          (r.origLabel = t),
          (r.labelSuffix = a[3] ? a[3] : ""),
          (r.plural = 0),
          (r.labelVisibility = !1);
      }
      a = i.match(/^([a-zA-Z0]*)([0-9]+(?:[a-zA-Z]*|[-,a-zA-Z]+))$/);
      return (
        (r.value = a ? ((r.particle = a[1]), a[2]) : ((r.particle = ""), i)),
        (r.joiningSuffix = s.replace(/\s*-\s*/, "-")),
        r
      );
    }
    function a(t, e, i) {
      var s = t[i.pos],
        r = t[e].value,
        a = "\\-" === s.joiningSuffix;
      r.particle && r.particle !== s.particle && (i.collapsible = !1);
      var n = r.match(/^[0-9]+([-,:a-zA-Z]*)$/),
        o = s.value.match(/^[0-9]+([-,:a-zA-Z]*)$/);
      (r && n && o && !a) ||
        ((i.collapsible = !1), (r && o) || (i.numeric = !1), a && i.count--),
        ((n && n[1]) || (o && o[1])) && (i.collapsible = !1);
      var l = i.collapsible;
      !l &&
        0 < e &&
        r.match(/^[ivxlcmIVXLCM]+$/) &&
        t[e - 1].value.match(/^[ivxlcmIVXLCM]+$/) &&
        (l = !0);
      for (var u = i.pos, h = t.length; u < h; u++)
        i.label === t[u].label && 1 < i.count && l && (t[u].plural = 1),
          (t[u].numeric = i.numeric),
          (t[u].collapsible = i.collapsible);
      (i.label = t[e].label),
        (i.count = 1),
        (i.pos = e),
        (i.numeric = !0),
        (i.collapsible = !0);
    }
    function i(t) {
      var e = CSL.Util.cloneToken(u),
        i = new CSL.Token();
      if (!d.tmp.just_looking) {
        for (var s = e.decorations.length - 1; -1 < s; s--)
          "@quotes" === e.decorations[s][0] &&
            ((i.decorations = i.decorations.concat(
              e.decorations.slice(s, s + 1)
            )),
            (e.decorations = e.decorations
              .slice(0, s)
              .concat(e.decorations.slice(s + 1))));
        (i.strings.prefix = e.strings.prefix),
          (e.strings.prefix = ""),
          (i.strings.suffix = e.strings.suffix),
          (e.strings.suffix = "");
      }
      var r = t.length ? t[0].label : null;
      if (t.length) {
        for (var a = 0, n = t.length; a < n; a++) {
          var o = t[a],
            l = CSL.Util.cloneToken(e);
          (l.gender = u.gender),
            r === o.label && (l.formatter = u.formatter),
            o.numeric && (l.successor_prefix = o.successor_prefix),
            (l.strings.suffix = l.strings.suffix + h(o.joiningSuffix)),
            (o.styling = l);
        }
        d.tmp.just_looking ||
          ('"' === t[0].value.slice(0, 1) &&
            '"' === t[t.length - 1].value.slice(-1) &&
            ((t[0].value = t[0].value.slice(1)),
            (t[t.length - 1].value = t[t.length - 1].value.slice(0, -1)),
            i.decorations.push(["@quotes", !0])));
      }
      return i;
    }
    function h(t) {
      return t.replace("\\-", "-");
    }
    function l(t, e, i, s) {
      var r = p(t, e),
        a = (function (t, e) {
          var i = !0;
          "locator" === t &&
            (i = !!d.getTerm(CSL.STATUTE_SUBDIV_STRINGS[e.label]));
          return i;
        })(t, e);
      return (
        a &&
          "-" === i &&
          s &&
          ((r ||
            -1 <
              ["locator", "issue", "volume", "edition", "number"].indexOf(t)) &&
            ((i = d.getTerm("page-range-delimiter")), i || (i = "–")),
          "collection-number" === t &&
            ((i = d.getTerm("year-range-delimiter")), i || (i = "–"))),
        i
      );
    }
    function p(t, e) {
      return "page" === t || ("locator" === t && -1 < ["p."].indexOf(e.label));
    }
    function n(t, e, i) {
      if (!(e < 1) && 2 === i.count && t[e - 1].particle === t[e].particle)
        if ("-" === t[e - 1].joiningSuffix)
          if (
            !d.opt["page-range-format"] &&
            parseInt(t[e - 1].value, 10) > parseInt(t[e].value, 10)
          )
            t[e - 1].joiningSuffix = l(f, t[e], t[e - 1].joiningSuffix, !0);
          else {
            var s = t[e],
              r = p(f, s);
            if (r) {
              var a =
                t[e - 1].particle +
                t[e - 1].value +
                " - " +
                t[e].particle +
                t[e].value;
              a = d.fun.page_mangler(a);
            } else a = t[e - 1].value + h(t[e - 1].joiningSuffix) + t[e].value;
            var n = a.match(
              /^([a-zA-Z]?0*)([0-9]+)(\s*[^0-9]+\s*)([-,a-zA-Z]?0*)([0-9]+)$/
            );
            if (n) {
              var o = n[3];
              (o = l(f, s, o, t[e].numeric)),
                (t[e - 1].particle = n[1]),
                (t[e - 1].value = n[2]),
                (t[e - 1].joiningSuffix = o),
                (t[e].particle = n[4]),
                (t[e].value = n[5]);
            }
            i.count = 0;
          }
        else i.count = 1;
    }
    function s(t) {
      if (
        u &&
        -1 !==
          [
            "page",
            "page-first",
            "chapter-number",
            "collection-number",
            "edition",
            "issue",
            "number",
            "number-of-pages",
            "number-of-volumes",
            "volume",
            "locator",
          ].indexOf(f)
      ) {
        for (
          var e = { count: 0, label: null, lastHadRangeDelimiter: !1 },
            i = 0,
            s = t.length;
          i < s;
          i++
        ) {
          var r = t[i];
          if (r.collapsible)
            e.label === r.label && "-" === r.joiningSuffix
              ? (e.count = 1)
              : e.label === r.label && "-" !== r.joiningSuffix
              ? (e.count++, 2 === e.count && n(t, i, e))
              : e.label !== r.label
              ? ((e.label = r.label), (e.count = 1))
              : ((e.count = 1), (e.label = r.label));
          else {
            (e.count = 0), (e.label = null);
            var a = r.numeric;
            i < t.length - 1 &&
              !a &&
              r.value.match(/^[ivxlcmIVXLCM]+$/) &&
              t[i + 1].value.match(/^[ivxlcmIVXLCM]+$/) &&
              (a = !0),
              (r.joiningSuffix = l(f, r, r.joiningSuffix, a));
          }
        }
        2 === e.count && n(t, t.length - 1, e);
      }
    }
    if (
      u &&
      this.tmp.shadow_numbers[f] &&
      this.tmp.shadow_numbers[f].values.length
    ) {
      var r = this.tmp.shadow_numbers[f].values;
      return s(r), void (this.tmp.shadow_numbers[f].masterStyling = i(r));
    }
    if (
      (this.tmp.shadow_numbers[f] ||
        (this.tmp.shadow_numbers[f] = { values: [] }),
      m)
    ) {
      var o,
        c,
        b,
        _,
        v = CSL.LangPrefsMap[f];
      if (v) {
        var S = this.opt["cite-lang-prefs"][v][0];
        (e = this.transform.getTextSubField(m, f, "locale-" + S, !0)),
          (e = e.name);
      } else e = m[f];
      if (e && this.sys.getAbbreviation) {
        var y = this.transform.loadAbbreviation(m.jurisdiction, "number", e);
        this.transform.abbrevs[y].number &&
          (this.transform.abbrevs[y].number[e]
            ? (e = this.transform.abbrevs[y].number[e])
            : void 0 !== this.transform.abbrevs[y].number[e] &&
              delete this.transform.abbrevs[y].number[e]);
      }
      if (void 0 !== e && ("string" == typeof e || "number" == typeof e)) {
        "number" == typeof e && (e = "" + e);
        var L = CSL.STATUTE_SUBDIV_STRINGS_REVERSE[f];
        if (!this.tmp.shadow_numbers.values) {
          r = (function (t, e) {
            (e = e || ""),
              (t = (function (t, e) {
                t = t.trim();
                var i = t.match(/^([^ ]+)/);
                if (i && !CSL.STATUTE_SUBDIV_STRINGS[i[1]]) {
                  var s = null;
                  (s =
                    "locator" === f
                      ? m.label
                        ? CSL.STATUTE_SUBDIV_STRINGS_REVERSE[m.label]
                        : "p."
                      : CSL.STATUTE_SUBDIV_STRINGS_REVERSE[f]),
                    s && (t = s + " " + t);
                }
                return t;
              })(t));
            var i = [],
              s = t.match(/(,\s+|\s*\\*[\-\u2013]+\s*|\s*&\s*)/g);
            if (s) {
              for (
                var r = t.split(/(?:,\s+|\s*\\*[\-\u2013]+\s*|\s*&\s*)/),
                  a = 0,
                  n = r.length - 1;
                a < n;
                a++
              )
                i.push(r[a]), i.push(s[a]);
              i.push(r[r.length - 1]),
                (i = (function (t) {
                  for (var e = t.length - 2; -1 < e; e -= 2)
                    "-" === t[e] &&
                      t[e - 1].match(
                        /^(?:(?:[a-z]|[a-z][a-z]|[a-z][a-z][a-z]|[a-z][a-z][a-z][a-z])\.  *)*[0-9]+[,a-zA-Z]+$/
                      ) &&
                      t[e + 1].match(/^[,a-zA-Z]+$/) &&
                      ((t[e - 1] = t.slice(e - 1, e + 2).join("")),
                      (t = t.slice(0, e).concat(t.slice(e + 2))));
                  return t;
                })(i));
            } else i = [t];
            var o = [],
              l = e,
              u = "";
            for (a = 0, n = i.length; a < n; a += 2)
              if (
                ((s = i[a].match(
                  /((?:^| )(?:[a-z]|[a-z][a-z]|[a-z][a-z][a-z]|[a-z][a-z][a-z][a-z])\. *)/g
                )),
                s)
              ) {
                r = i[a].split(
                  /(?:(?:^| )(?:[a-z]|[a-z][a-z]|[a-z][a-z][a-z]|[a-z][a-z][a-z][a-z])\. *)/
                );
                for (var h = r.length - 1; 0 < h; h--)
                  !r[h - 1] ||
                    (r[h].match(/^[0-9]+([-,:a-zA-Z]*)$/) &&
                      r[h - 1].match(/^[0-9]+([-,:a-zA-Z]*)$/)) ||
                    ((r[h - 1] = r[h - 1] + s[h - 1] + r[h]),
                    (r = r.slice(0, h).concat(r.slice(h + 1))),
                    (s = s.slice(0, h - 1).concat(s.slice(h))));
                if (0 < s.length && 0 === a) {
                  var p = s[0].trim();
                  (CSL.STATUTE_SUBDIV_STRINGS[p] &&
                    d.getTerm(CSL.STATUTE_SUBDIV_STRINGS[p]) &&
                    (-1 !== ["locator", "number"].indexOf(f) ||
                      CSL.STATUTE_SUBDIV_STRINGS[p] === f)) ||
                    ((s = s.slice(1)),
                    (r[0] = r[0] + " " + p + " " + r[1]),
                    (r = r.slice(0, 1).concat(r.slice(2))));
                }
                h = 0;
                for (var c = r.length; h < c; h++)
                  (r[h] || h === r.length - 1) &&
                    ((l = s[h - 1] ? s[h - 1] : l),
                    (u = 1 < h ? s[h - 1] : ""),
                    (t = r[h] ? r[h].trim() : ""),
                    h === r.length - 1
                      ? o.push(g(u, l, t, i[a + 1]))
                      : o.push(g(u, l, t)));
              } else o.push(g(u, l, i[a], i[a + 1]));
            return o;
          })(e, L);
          !(function (t) {
            for (var e = 0, i = t.length - 1; e < i; e++)
              !t[e].joiningSuffix &&
                t[e + 1].label &&
                (t[e].joiningSuffix = " ");
          })(r),
            (function (t) {
              for (
                var e = {
                    label: null,
                    count: 1,
                    numeric: !0,
                    collapsible: !0,
                    pos: 0,
                  },
                  i = (t.length && t[0].label, 0),
                  s = t.length;
                i < s;
                i++
              )
                t[i].label &&
                  (t[i].label === e.label
                    ? e.count++
                    : (a(t, i, e),
                      0 === e.pos
                        ? (("locator" !== f && "number" !== f) ||
                            d.getTerm(CSL.STATUTE_SUBDIV_STRINGS[e.label]) ||
                            "var:" === e.label.slice(0, 4) ||
                            (t[e.pos].labelVisibility = !0),
                          -1 === ["locator", "number"].indexOf(f) &&
                            CSL.STATUTE_SUBDIV_STRINGS[e.label] !== f &&
                            "var:" !== e.label.slice(0, 4) &&
                            (t[0].labelVisibility = !0))
                        : t[i - 1].label !== t[i].label &&
                          "var:" !== e.label.slice(0, 4) &&
                          (t[e.pos].labelVisibility = !0)));
              for (
                a(t, t.length - 1, e),
                  t.length &&
                    t[0].numeric &&
                    "number-of-" === f.slice(0, 10) &&
                    1 < parseInt(m[f], 10) &&
                    (t[0].plural = 1),
                  i = 0,
                  s = t.length;
                i < s;
                i++
              )
                if (!t[i].numeric) {
                  var r = t[i].origLabel ? t[i].origLabel : "";
                  (t[i].value = (r + t[i].value).trim()),
                    t[i].label !== t[0].label && (t[i].label = "");
                }
            })(r),
            (this.tmp.shadow_numbers[f].values = r);
        }
        u && (s(r), (this.tmp.shadow_numbers[f].masterStyling = i(r))),
          (o = this.tmp.shadow_numbers),
          (c = f),
          (b = r),
          (_ = o[c]),
          b.length &&
            ((_.numeric = b[0].numeric),
            (_.collapsible = b[0].collapsible),
            (_.plural = b[0].plural),
            (_.label = CSL.STATUTE_SUBDIV_STRINGS[b[0].label]),
            "number" === c &&
              "issue" === _.label &&
              d.getTerm("number") &&
              (_.label = "number"));
      }
    }
  }),
  (CSL.Util.outputNumericField = function (t, e, i) {
    t.output.openLevel(t.tmp.shadow_numbers[e].masterStyling);
    var s,
      r = t.tmp.shadow_numbers[e].values,
      a = r.length ? r[0].label : null,
      n = t.tmp.shadow_numbers[e].labelForm;
    s = n || "short";
    for (
      var o = t.tmp.shadow_numbers[e].labelDecorations,
        l = null,
        u = 0,
        h = r.length;
      u < h;
      u++
    ) {
      var p,
        c = r[u],
        m = "";
      if (c.label)
        (p =
          "var:" === c.label.slice(0, 4)
            ? c.label.slice(4)
            : CSL.STATUTE_SUBDIV_STRINGS[c.label]),
          p &&
            (m =
              c.label === a
                ? t.getTerm(p, n, c.plural)
                : t.getTerm(p, s, c.plural));
      var f = -1;
      m && (f = m.indexOf("%s"));
      var d = CSL.Util.cloneToken(c.styling);
      if (
        ((d.formatter = c.styling.formatter),
        (d.type = c.styling.type),
        (d.num = c.styling.num),
        (d.gender = c.styling.gender),
        0 < f && f < m.length - 2)
      )
        (d.strings.prefix += m.slice(0, f)),
          (d.strings.suffix = m.slice(f + 2) + d.strings.suffix);
      else if (c.labelVisibility)
        if ((m || ((m = c.label), (p = c.label)), 0 < f)) {
          var g = new CSL.Token();
          (g.decorations = o), t.output.append(m.slice(0, f), g);
        } else
          (f !== m.length - 2 && -1 !== f) ||
            t.output.append(m + c.labelSuffix, "empty");
      if (c.collapsible) {
        if (c.value.match(/^[0-9]+$/))
          var b = new CSL.NumericBlob(c.particle, parseInt(c.value, 10), d, i);
        else b = new CSL.NumericBlob(c.particle, c.value, d, i);
        void 0 === b.gender &&
          (b.gender = t.locale[t.opt.lang]["noun-genders"][e]),
          t.output.append(b, "literal");
      } else t.output.append(c.particle + c.value, d);
      if (
        0 === f &&
        f < m.length - 2 &&
        (null === l && (l = p), p !== l || u === r.length - 1)
      ) {
        var _ = new CSL.Token();
        (_.decorations = o), t.output.append(m.slice(f + 2), _);
      }
    }
    t.output.closeLevel();
  }),
  (CSL.Util.PageRangeMangler = {}),
  (CSL.Util.PageRangeMangler.getFunction = function (i, s) {
    var e,
      u,
      h,
      a,
      r,
      n,
      o,
      l,
      p,
      c,
      m,
      f,
      d,
      g,
      b,
      _,
      t,
      v = i.getTerm(s + "-range-delimiter");
    (e = /([a-zA-Z]*)([0-9]+)\s*(?:\u2013|-)\s*([a-zA-Z]*)([0-9]+)/),
      (a = function (t) {
        for (h = t.length, u = 1; u < h; u += 2)
          "object" == typeof t[u] && (t[u] = t[u].join(""));
        var e = t.join("");
        return (
          (e = e.replace(
            /([^\\])\-/g,
            "$1" + i.getTerm(s + "-range-delimiter")
          )),
          e
        );
      }),
      (r = function (t) {
        var e,
          i,
          s,
          r = "\\s+\\-\\s+",
          a = "-" === v ? "" : v,
          n = new RegExp("([^\\\\])[-" + a + "\\u2013]", "g");
        t = t.replace(n, "$1 - ").replace(/\s+-\s+/g, " - ");
        var o = new RegExp("([a-zA-Z]*[0-9]+" + r + "[a-zA-Z]*[0-9]+)", "g"),
          l = new RegExp("[a-zA-Z]*[0-9]+" + r + "[a-zA-Z]*[0-9]+");
        if (((e = t.match(o)), (i = t.split(l)), 0 === i.length)) s = e;
        else
          for (s = [i[0]], u = 1, h = i.length; u < h; u += 1)
            s.push(e[u - 1].replace(/\s*\-\s*/g, "-")), s.push(i[u]);
        return s;
      }),
      (n = function (t) {
        for (t = "" + t, c = r(t), h = c.length, u = 1; u < h; u += 2)
          (m = c[u].match(e)),
            m &&
              ((m[3] && m[1] !== m[3]) ||
                (m[4].length < m[2].length &&
                  (m[4] = m[2].slice(0, m[2].length - m[4].length) + m[4]),
                parseInt(m[2], 10) < parseInt(m[4], 10) &&
                  ((m[3] = v + m[1]), (c[u] = m.slice(1))))),
            "string" == typeof c[u] && (c[u] = c[u].replace(/\-/g, v));
        return c;
      }),
      (o = function (t, e, i) {
        h = t.length;
        for (var s = 1, r = t.length; s < r; s += 2)
          (t[s][3] = l(t[s][1], t[s][3], e, i)),
            t[s][2].slice(1) === t[s][0] && (t[s][2] = v);
        return a(t);
      }),
      (l = function (t, e, i, s) {
        if (
          (i || (i = 0),
          (f = ("" + t).split("")),
          (d = ("" + e).split("")),
          (g = d.slice()),
          g.reverse(),
          f.length === d.length)
        )
          for (var r = 0, a = f.length; r < a; r += 1) {
            if (!(f[r] === d[r] && g.length > i)) {
              if (i && s && 3 === g.length) {
                var n = f.slice(0, r);
                n.reverse(), (g = g.concat(n));
              }
              break;
            }
            g.pop();
          }
        return g.reverse(), g.join("");
      }),
      (p = function (t) {
        for (h = t.length, u = 1; u < h; u += 2)
          "object" == typeof t[u] &&
            ((m = t[u]),
            (b = parseInt(m[1], 10)),
            (_ = parseInt(m[3], 10)),
            100 < b &&
            b % 100 &&
            parseInt(b / 100, 10) === parseInt(_ / 100, 10)
              ? (m[3] = "" + (_ % 100))
              : 1e4 <= b && (m[3] = "" + (_ % 1e3))),
            m[2].slice(1) === m[0] && (m[2] = v);
        return a(t);
      });
    var S = function (t, e, i, s) {
      t = "" + t;
      var r = n(t),
        a = e(r, i, s);
      return a;
    };
    return (
      i.opt[s + "-range-format"]
        ? "expanded" === i.opt[s + "-range-format"]
          ? (t = function (t) {
              return S(t, a);
            })
          : "minimal" === i.opt[s + "-range-format"]
          ? (t = function (t) {
              return S(t, o);
            })
          : "minimal-two" === i.opt[s + "-range-format"]
          ? (t = function (t, e) {
              return S(t, o, 2, e);
            })
          : "chicago" === i.opt[s + "-range-format"] &&
            (t = function (t) {
              return S(t, p);
            })
        : (t = function (t) {
            return S(t, a);
          }),
      t
    );
  }),
  (CSL.Util.FlipFlopper = function (L) {
    this.processTags = function (t) {
      var e = t.blobs,
        i = !1;
      " " !== e.slice(0, 1) || e.match(/^\s+[\'\"]/) || (i = !0);
      var e = " " + e,
        s = (function (t) {
          var e = [];
          (t = t.replace(
            /(<span)\s+(style=\"font-variant:)\s*(small-caps);?\"[^>]*(>)/g,
            '$1 $2$3;"$4'
          )),
            (t = t.replace(
              /(<span)\s+(class=\"no(?:case|decor)\")[^>]*(>)/g,
              "$1 $2$3"
            ));
          var i = t.match(T.matchAll);
          if (!i) return { tags: [], strings: [t], forcedSpaces: [] };
          for (var s = t.split(T.splitAll), r = 0, a = i.length - 1; r < a; r++)
            x[i[r]] &&
              ("" === s[r + 1] && -1 < ['"', "'"].indexOf(i[r + 1])
                ? ((i[r + 1] = " " + i[r + 1]), e.push(!0))
                : e.push(!1));
          return { tags: i, strings: s, forcedSpaces: e };
        })(e);
      if (0 === s.tags.length) return;
      for (var r = !1, a = 0, n = s.tags.length; a < n; a++) {
        var o = s.tags[a],
          e = s.strings[a + 1];
        if (A(o, e))
          (s.strings[a + 1] =
            " '" === o ? " ’" + s.strings[a + 1] : "’" + s.strings[a + 1]),
            (s.tags[a] = "");
        else {
          for (
            var l;
            (_ = o),
              (v = a),
              (h = _),
              (p = v),
              (c = void 0),
              (m = void 0),
              (f = void 0),
              (d = void 0),
              (g = void 0),
              (b = void 0),
              (l = h.match(T.open)
                ? ((d = h),
                  (g = p),
                  (b = C[C.length - 1]),
                  !b || d.match(b.opener)
                    ? (C.push({
                        type: O[d].type,
                        opener: O[d].opener,
                        closer: O[d].closer,
                        pos: g,
                      }),
                      !1)
                    : (C.pop(),
                      C.push({
                        type: O[d].type,
                        opener: O[d].opener,
                        closer: O[d].closer,
                        pos: g,
                      }),
                      { fixtag: b.pos }))
                : ((c = h),
                  (m = p),
                  (f = C[C.length - 1]),
                  f && c === f.closer
                    ? (C.pop(),
                      "nocase" === f.type && {
                        nocase: { open: f.pos, close: m },
                      })
                    : f
                    ? { fixtag: f.pos }
                    : { fixtag: m })),
              l;

          ) {
            if (!(-1 < Object.keys(l).indexOf("fixtag"))) {
              if (l.nocase) {
                (s.tags[l.nocase.open] = ""), (s.tags[l.nocase.close] = "");
                break;
              }
              break;
            }
            if (o.match(T.close) && "'" === o)
              (s.strings[a + 1] = "’" + s.strings[a + 1]), (s.tags[a] = "");
            else {
              var u = s.tags[l.fixtag];
              s.forcedSpaces[l.fixtag - 1] && (u = u.slice(1)),
                (s.strings[l.fixtag + 1] = u + s.strings[l.fixtag + 1]),
                (s.tags[l.fixtag] = "");
            }
            if (!(0 < C.length)) break;
            C.pop();
          }
          l &&
            (l.fixtag || 0 === l.fixtag) &&
            ((s.strings[a + 1] = s.tags[a] + s.strings[a + 1]),
            (s.tags[a] = ""));
        }
      }
      var h, p, c, m, f, d, g, b;
      var _, v;
      for (var a = C.length - 1; -1 < a; a--) {
        var S = C[a].pos,
          o = s.tags[S];
        (s.strings[S + 1] =
          " '" === o || "'" === o
            ? " ’" + s.strings[S + 1]
            : s.tags[S] + s.strings[S + 1]),
          (s.tags[S] = ""),
          C.pop();
      }
      for (var a = s.tags.length - 1; -1 < a; a--)
        s.tags[a] ||
          ((s.tags = s.tags.slice(0, a).concat(s.tags.slice(a + 1))),
          (s.strings[a] = s.strings[a] + s.strings[a + 1]),
          (s.strings = s.strings
            .slice(0, a + 1)
            .concat(s.strings.slice(a + 2))));
      for (var a = 0, n = s.tags.length; a < n; a++) {
        var o = s.tags[a],
          y = s.forcedSpaces[a - 1];
        -1 < [' "', " '", '("', "('"].indexOf(o) &&
          (r || (I(o), (r = !0)), y || (s.strings[a] += o.slice(0, 1)));
      }
      !(function (t, e, i) {
        var m = !0,
          s = new N(t);
        t.blobs = [];
        var r = new (function (t) {
          (this.stack = [t]),
            (this.latest = t),
            (this.addStyling = function (t, e, i) {
              if (
                (m &&
                  (" " === t.slice(0, 1) && (t = t.slice(1)),
                  " " === t.slice(0, 1) && (t = t.slice(1)),
                  (m = !1)),
                (this.latest = this.stack[this.stack.length - 1]),
                e)
              ) {
                if ("string" == typeof this.latest.blobs) {
                  var s = new CSL.Blob();
                  (s.blobs = this.latest.blobs),
                    (s.alldecor = this.latest.alldecor.slice()),
                    (this.latest.blobs = [s]);
                }
                var r = new CSL.Token(),
                  a = new CSL.Blob(null, r);
                if (
                  ((a.alldecor = this.latest.alldecor.slice()),
                  "@class" === e[0] && "nodecor" === e[1])
                ) {
                  for (
                    var n = [],
                      o = {},
                      l = [L[L.tmp.area].opt.layout_decorations].concat(
                        a.alldecor
                      ),
                      u = l.length - 1;
                    -1 < u;
                    u--
                  ) {
                    var h = l[u];
                    if (h)
                      for (var p = h.length - 1; -1 < p; p--) {
                        var c = h[p];
                        -1 <
                          [
                            "@font-weight",
                            "@font-style",
                            "@font-variant",
                          ].indexOf(c[0]) &&
                          !o[c[0]] &&
                          ("normal" !== e[1] &&
                            (a.decorations.push([c[0], "normal"]),
                            n.push([c[0], "normal"])),
                          (o[c[0]] = !0));
                      }
                  }
                  a.alldecor.push(n);
                } else a.decorations.push(e), a.alldecor.push([e]);
                if (
                  (this.latest.blobs.push(a),
                  this.stack.push(a),
                  (this.latest = a),
                  t)
                ) {
                  var r = new CSL.Token(),
                    a = new CSL.Blob(null, r);
                  (a.blobs = t),
                    (a.alldecor = this.latest.alldecor.slice()),
                    this.latest.blobs.push(a);
                }
              } else if (t) {
                var s = new CSL.Blob();
                (s.blobs = t),
                  (s.alldecor = this.latest.alldecor.slice()),
                  this.latest.blobs.push(s);
              }
            }),
            (this.popStyling = function () {
              this.stack.pop();
            });
        })(t);
        if (e.strings.length) {
          var a = e.strings[0];
          i && (a = " " + a), r.addStyling(a);
        }
        for (var n = 0, o = e.tags.length; n < o; n++) {
          var l = e.tags[n],
            a = e.strings[n + 1];
          l.match(T.open)
            ? (s.set(l), r.addStyling(a, s.pair()))
            : (s.pop(), r.popStyling(), r.addStyling(a));
        }
      })(t, s, i);
    };
    var C = [],
      x = {
        '<span class="nocase">': {
          type: "nocase",
          opener: '<span class="nocase">',
          closer: "</span>",
          attr: null,
          outer: null,
          flipflop: null,
        },
        '<span class="nodecor">': {
          type: "nodecor",
          opener: '<span class="nodecor">',
          closer: "</span>",
          attr: "@class",
          outer: "nodecor",
          flipflop: { nodecor: "nodecor" },
        },
        '<span style="font-variant:small-caps;">': {
          type: "tag",
          opener: '<span style="font-variant:small-caps;">',
          closer: "</span>",
          attr: "@font-variant",
          outer: "small-caps",
          flipflop: { "small-caps": "normal", normal: "small-caps" },
        },
        "<sc>": {
          type: "tag",
          opener: "<sc>",
          closer: "</sc>",
          attr: "@font-variant",
          outer: "small-caps",
          flipflop: { "small-caps": "normal", normal: "small-caps" },
        },
        "<i>": {
          type: "tag",
          opener: "<i>",
          closer: "</i>",
          attr: "@font-style",
          outer: "italic",
          flipflop: { italic: "normal", normal: "italic" },
        },
        "<b>": {
          type: "tag",
          opener: "<b>",
          closer: "</b>",
          attr: "@font-weight",
          outer: "bold",
          flipflop: { bold: "normal", normal: "bold" },
        },
        "<sup>": {
          type: "tag",
          opener: "<sup>",
          closer: "</sup>",
          attr: "@vertical-align",
          outer: "sup",
          flipflop: { sub: "sup", sup: "sup" },
        },
        "<sub>": {
          type: "tag",
          opener: "<sub>",
          closer: "</sub>",
          attr: "@vertical-align",
          outer: "sub",
          flipflop: { sup: "sub", sub: "sub" },
        },
        ' "': {
          type: "quote",
          opener: ' "',
          closer: '"',
          attr: "@quotes",
          outer: "true",
          flipflop: { true: "inner", inner: "true", false: "true" },
        },
        " '": {
          type: "quote",
          opener: " '",
          closer: "'",
          attr: "@quotes",
          outer: "inner",
          flipflop: { true: "inner", inner: "true", false: "true" },
        },
      };
    (x['("'] = x[' "']), (x["('"] = x[" '"]);
    var t = L.getTerm("open-quote"),
      e = L.getTerm("close-quote"),
      i = L.getTerm("open-inner-quote"),
      s = L.getTerm("close-inner-quote");
    t &&
      e &&
      -1 === [' "', " '", '"', "'"].indexOf(t) &&
      ((x[t] = JSON.parse(JSON.stringify(x[' "']))),
      (x[t].opener = t),
      (x[t].closer = e)),
      i &&
        s &&
        -1 === [' "', " '", '"', "'"].indexOf(i) &&
        ((x[i] = JSON.parse(JSON.stringify(x[" '"]))),
        (x[i].opener = i),
        (x[i].closer = s));
    (function () {
      for (var t = {}, e = Object.keys(x), i = 0, s = e.length; i < s; i++) {
        var r = e[i];
        "quote" === x[r].type && (t[x[r].closer] = x[r]);
      }
    })(),
      (function () {
        for (var t = {}, e = Object.keys(x), i = 0, s = e.length; i < s; i++) {
          var r = e[i];
          if ("nocase" !== x[r].type) {
            var a = x[r].attr,
              n = x[r].outer,
              o = x[r].flipflop[x[r].outer];
            (t[a + "/" + n] = x[r]), (t[a + "/" + o] = x[r]);
          }
        }
      })();
    function I(t) {
      (x[t].outer = "true"),
        (x[{ " '": ' "', ' "': " '", '("': "('", "('": '("' }[t]].outer =
          "inner");
    }
    function a(t) {
      for (var e = [], i = Object.keys(x), s = 0, r = i.length; s < r; s++) {
        var a = i[s];
        ("quote" === x[t].type && x[t]) || e.push(a);
      }
      var n = x[t];
      return (
        (n.opener = new RegExp(
          "^(?:" +
            e
              .map(function (t) {
                return t.replace("(", "\\(");
              })
              .join("|") +
            ")"
        )),
        n
      );
    }
    var O = (function () {
        for (var t = {}, e = Object.keys(x), i = 0, s = e.length; i < s; i++) {
          var r = e[i];
          t[r] = a(r);
        }
        return t;
      })(),
      T = (function () {
        var t = [],
          e = [],
          i = {};
        for (var s in O) t.push(s), (i[O[s].closer] = !0);
        for (var r = Object.keys(i), a = 0, n = r.length; a < n; a++) {
          var o = r[a];
          e.push(o);
        }
        var l = t
          .concat(e)
          .map(function (t) {
            return t.replace("(", "\\(");
          })
          .join("|");
        return {
          matchAll: new RegExp("((?:" + l + "))", "g"),
          splitAll: new RegExp("(?:" + l + ")", "g"),
          open: new RegExp(
            "(^(?:" +
              t
                .map(function (t) {
                  return t.replace("(", "\\(");
                })
                .join("|") +
              ")$)"
          ),
          close: new RegExp("(^(?:" + e.join("|") + ")$)"),
        };
      })();
    var N = function (l) {
      (this.set = function (t) {
        for (var e = x[t].attr, i = null, s = u.length - 1; -1 < s; s--) {
          var r = u[s];
          if (r[0] === e) {
            i = r;
            break;
          }
        }
        if (!i) {
          var a = [L[L.tmp.area].opt.layout_decorations].concat(l.alldecor);
          t: for (var s = a.length - 1; -1 < s; s--) {
            var n = a[s];
            if (n)
              for (var o = n.length - 1; -1 < o; o--) {
                var r = n[o];
                if (r[0] === e) {
                  i = r;
                  break t;
                }
              }
          }
        }
        i = i ? [e, x[t].flipflop[i[1]]] : [e, x[t].outer];
        u.push(i);
      }),
        (this.pair = function () {
          return u[u.length - 1];
        }),
        (this.pop = function () {
          u.pop();
        });
      var u = [];
    };
    function A(t, e) {
      if ("'" === t) {
        if (e && e.match(/^[^\,\.\?\:\;\ ]/)) return !0;
      } else if (" '" === t && e && e.match(/^[\ ]/)) return !0;
      return !1;
    }
  }),
  (CSL.Output.Formatters = new (function () {
    (this.passthrough = function (t, e) {
      return e;
    }),
      (this.lowercase = function (t, e) {
        return s(
          {
            quoteState: null,
            capitaliseWords: function (t) {
              for (var e = t.split(" "), i = 0, s = e.length; i < s; i++) {
                var r = e[i];
                r && (e[i] = r.toLowerCase());
              }
              return e.join(" ");
            },
            skipWordsRex: null,
            tagState: [],
            afterPunct: null,
            isFirst: null,
          },
          e
        );
      }),
      (this.uppercase = function (t, e) {
        return s(
          {
            quoteState: null,
            capitaliseWords: function (t) {
              for (var e = t.split(" "), i = 0, s = e.length; i < s; i++) {
                var r = e[i];
                r && (e[i] = r.toUpperCase());
              }
              return e.join(" ");
            },
            skipWordsRex: null,
            tagState: [],
            afterPunct: null,
            isFirst: null,
          },
          e
        );
      }),
      (this.sentence = function (t, e) {
        var a = {
          quoteState: [],
          capitaliseWords: function (t) {
            for (var e = t.split(" "), i = 0, s = e.length; i < s; i++) {
              var r = e[i];
              r &&
                (a.isFirst
                  ? ((e[i] = d(r)), (a.isFirst = !1))
                  : (e[i] = r.toLowerCase()));
            }
            return e.join(" ");
          },
          skipWordsRex: null,
          tagState: [],
          afterPunct: null,
          isFirst: !0,
        };
        return s(a, e);
      }),
      (this.title = function (t, e) {
        var l = {
          quoteState: [],
          capitaliseWords: function (t, e, i) {
            if (t.trim()) {
              for (
                var s = t.split(/[ \u00A0]+/),
                  r = m.split(t),
                  s = r.strings,
                  a = 0,
                  n = s.length;
                a < n;
                a++
              ) {
                var o = s[a];
                o &&
                  (1 < o.length && !o.toLowerCase().match(l.skipWordsRex)
                    ? (s[a] = d(s[a]))
                    : a === s.length - 1 && "-" === i
                    ? (s[a] = d(s[a]))
                    : l.isFirst
                    ? (s[a] = d(s[a]))
                    : l.afterPunct && (s[a] = d(s[a])),
                  (l.afterPunct = !1),
                  (l.isFirst = !1),
                  (l.lastWordPos = { strings: e, words: a }));
              }
              t = m.join(r);
            }
            return t;
          },
          skipWordsRex: t.locale[t.opt.lang].opts["skip-words-regexp"],
          tagState: [],
          afterPunct: !1,
          isFirst: !0,
        };
        return s(l, e);
      }),
      (this["capitalize-first"] = function (t, e) {
        var a = {
          quoteState: [],
          capitaliseWords: function (t) {
            for (var e = t.split(" "), i = 0, s = e.length; i < s; i++) {
              var r = e[i];
              if (r && a.isFirst) {
                (e[i] = d(r)), (a.isFirst = !1);
                break;
              }
            }
            return e.join(" ");
          },
          skipWordsRex: null,
          tagState: [],
          afterPunct: null,
          isFirst: !0,
        };
        return s(a, e);
      }),
      (this["capitalize-all"] = function (t, e) {
        var i = {
          quoteState: [],
          capitaliseWords: function (t) {
            for (var e = t.split(" "), i = 0, s = e.length; i < s; i++) {
              var r = e[i];
              r && (e[i] = d(r));
            }
            return e.join(" ");
          },
          skipWordsRex: null,
          tagState: [],
          afterPunct: null,
          isFirst: null,
        };
        return s(i, e);
      });
    var c = new CSL.Doppeler(
        '(?:‘|’|“|”| "| \'|"|\'|[-–—/.,;?!:]|\\[|\\]|\\(|\\)|<span style="font-variant: small-caps;">|<span class="no(?:case|decor)">|</span>|</?(?:i|sc|b|sub|sup)>)',
        function (t) {
          return t
            .replace(
              /(<span)\s+(class=\"no(?:case|decor)\")[^>]*(>)/g,
              "$1 $2$3"
            )
            .replace(
              /(<span)\s+(style=\"font-variant:)\s*(small-caps);?(\")[^>]*(>)/g,
              "$1 $2 $3;$4$5"
            );
        }
      ),
      m = new CSL.Doppeler("(?:[   -​ 　]+)"),
      f = {
        '<span style="font-variant: small-caps;">': "</span>",
        '<span class="nocase">': "</span>",
        '<span class="nodecor">': "</span>",
      };
    function d(t, e) {
      var i = t.match(
        /(^\s*)((?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]))(.*)/
      );
      return !i || (i[2].match(/^[\u0370-\u03FF]$/) && !i[3])
        ? t
        : i[1] + i[2].toUpperCase() + i[3];
    }
    function s(n, t) {
      if (!t) return "";
      n.doppel = c.split(t);
      var o = {
        ' "': { opener: " '", closer: '"' },
        " '": { opener: ' "', closer: "'" },
        "‘": { opener: "‘", closer: "’" },
        "“": { opener: "“", closer: "”" },
      };
      function e(t, e) {
        var i,
          s,
          r,
          a = t.match(/(^(?:\u2018|\u2019|\u201C|\u201D|\"|\')|(?: \"| \')$)/);
        if (a)
          return (
            (i = a[1]),
            (s = e),
            (r = -1 < ["“", "‘", ' "', " '"].indexOf(i)),
            r
              ? (function (t, e) {
                  if (
                    0 === n.quoteState.length ||
                    t === n.quoteState[n.quoteState.length - 1].opener
                  )
                    return (
                      n.quoteState.push({
                        opener: o[t].opener,
                        closer: o[t].closer,
                        pos: e,
                      }),
                      !1
                    );
                  var i = n.quoteState[n.quoteState.length - 1].pos;
                  return (
                    n.quoteState.pop(),
                    n.quoteState.push({
                      opener: o[t].opener,
                      closer: o[t].closer,
                      positions: e,
                    }),
                    i
                  );
                })(i, s)
              : (function (t, e) {
                  if (
                    !(
                      0 < n.quoteState.length &&
                      t === n.quoteState[n.quoteState.length - 1].closer
                    )
                  )
                    return e;
                  n.quoteState.pop();
                })(i, s)
          );
      }
      n.doppel.strings.length &&
        n.doppel.strings[0].trim() &&
        (n.doppel.strings[0] = n.capitaliseWords(
          n.doppel.strings[0],
          0,
          n.doppel.tags[0]
        ));
      for (var i = 0, s = n.doppel.tags.length; i < s; i++) {
        var r = n.doppel.tags[i],
          a = n.doppel.strings[i + 1];
        if (
          (null !== n.tagState &&
            (f[r]
              ? n.tagState.push(f[r])
              : n.tagState.length &&
                r === n.tagState[n.tagState.length - 1] &&
                n.tagState.pop()),
          null !== n.afterPunct && r.match(/[\!\?\:]$/) && (n.afterPunct = !0),
          0 === n.tagState.length
            ? (n.doppel.strings[i + 1] = n.capitaliseWords(
                a,
                i + 1,
                n.doppel,
                n.doppel.tags[i + 1]
              ))
            : n.doppel.strings[i + 1].trim() && (n.lastWordPos = null),
          null !== n.quoteState)
        ) {
          var l = e(r, i);
          if (l || 0 === l) {
            var u = n.doppel.origStrings[l + 1].slice(0, 1);
            (n.doppel.strings[l + 1] = u + n.doppel.strings[l + 1].slice(1)),
              (n.lastWordPos = null);
          }
        }
        n.isFirst && a.trim() && (n.isFirst = !1),
          n.afterPunct && a.trim() && (n.afterPunct = !1);
      }
      if (n.quoteState)
        for (i = 0, s = n.quoteState.length; i < s; i++) {
          l = n.quoteState[i].pos;
          if (void 0 !== l) {
            u = n.doppel.origStrings[l + 1].slice(0, 1);
            n.doppel.strings[l + 1] = u + n.doppel.strings[l + 1].slice(1);
          }
        }
      if (n.lastWordPos) {
        var h = m.split(n.doppel.strings[n.lastWordPos.strings]),
          p = d(h.strings[n.lastWordPos.words]);
        (h.strings[n.lastWordPos.words] = p),
          (n.doppel.strings[n.lastWordPos.strings] = m.join(h));
      }
      return c.join(n.doppel);
    }
  })()),
  (CSL.Output.Formats = function () {}),
  (CSL.Output.Formats.prototype.html = {
    text_escape: function (t) {
      return (
        t || (t = ""),
        t
          .replace(/&/g, "&#38;")
          .replace(/</g, "&#60;")
          .replace(/>/g, "&#62;")
          .replace(/\s\s/g, "  ")
          .replace(CSL.SUPERSCRIPTS_REGEXP, function (t) {
            return "<sup>" + CSL.SUPERSCRIPTS[t] + "</sup>";
          })
      );
    },
    bibstart: '<div class="csl-bib-body">\n',
    bibend: "</div>",
    "@font-style/italic": "<i>%%STRING%%</i>",
    "@font-style/oblique": "<em>%%STRING%%</em>",
    "@font-style/normal": '<span style="font-style:normal;">%%STRING%%</span>',
    "@font-variant/small-caps":
      '<span style="font-variant:small-caps;">%%STRING%%</span>',
    "@passthrough/true": CSL.Output.Formatters.passthrough,
    "@font-variant/normal":
      '<span style="font-variant:normal;">%%STRING%%</span>',
    "@font-weight/bold": "<b>%%STRING%%</b>",
    "@font-weight/normal":
      '<span style="font-weight:normal;">%%STRING%%</span>',
    "@font-weight/light": !1,
    "@text-decoration/none":
      '<span style="text-decoration:none;">%%STRING%%</span>',
    "@text-decoration/underline":
      '<span style="text-decoration:underline;">%%STRING%%</span>',
    "@vertical-align/sup": "<sup>%%STRING%%</sup>",
    "@vertical-align/sub": "<sub>%%STRING%%</sub>",
    "@vertical-align/baseline": '<span style="baseline">%%STRING%%</span>',
    "@strip-periods/true": CSL.Output.Formatters.passthrough,
    "@strip-periods/false": CSL.Output.Formatters.passthrough,
    "@quotes/true": function (t, e) {
      return void 0 === e
        ? t.getTerm("open-quote")
        : t.getTerm("open-quote") + e + t.getTerm("close-quote");
    },
    "@quotes/inner": function (t, e) {
      return void 0 === e
        ? "’"
        : t.getTerm("open-inner-quote") + e + t.getTerm("close-inner-quote");
    },
    "@quotes/false": !1,
    "@cite/entry": function (t, e) {
      return t.sys.wrapCitationEntry(
        e,
        this.item_id,
        this.locator_txt,
        this.suffix_txt
      );
    },
    "@bibliography/entry": function (t, e) {
      var i = "";
      return (
        t.sys.embedBibliographyEntry &&
          (i = t.sys.embedBibliographyEntry(this.item_id) + "\n"),
        '  <div class="csl-entry">' + e + "</div>\n" + i
      );
    },
    "@display/block": function (t, e) {
      return '\n\n    <div class="csl-block">' + e + "</div>\n";
    },
    "@display/left-margin": function (t, e) {
      return '\n    <div class="csl-left-margin">' + e + "</div>";
    },
    "@display/right-inline": function (t, e) {
      return '<div class="csl-right-inline">' + e + "</div>\n  ";
    },
    "@display/indent": function (t, e) {
      return '<div class="csl-indent">' + e + "</div>\n  ";
    },
    "@showid/true": function (t, e, i) {
      if (t.tmp.just_looking || t.tmp.suppress_decorations) return e;
      if (i)
        return (
          '<span class="' +
          t.opt.nodenames[i] +
          '" cslid="' +
          i +
          '">' +
          e +
          "</span>"
        );
      if (this.params && "string" == typeof e) {
        var s = "";
        if (e) {
          var r = e.match(CSL.VARIABLE_WRAPPER_PREPUNCT_REX);
          (s = r[1]), (e = r[2]);
        }
        var a = "";
        return (
          e &&
            -1 < CSL.SWAPPING_PUNCTUATION.indexOf(e.slice(-1)) &&
            ((a = e.slice(-1)), (e = e.slice(0, -1))),
          t.sys.variableWrapper(this.params, s, e, a)
        );
      }
      return e;
    },
    "@URL/true": function (t, e) {
      return '<a href="' + e + '">' + e + "</a>";
    },
    "@DOI/true": function (t, e) {
      return '<a href="https://doi.org/' + e + '">' + e + "</a>";
    },
  }),
  (CSL.Output.Formats.prototype.text = {
    text_escape: function (t) {
      return t || (t = ""), t;
    },
    bibstart: "",
    bibend: "",
    "@font-style/italic": !1,
    "@font-style/oblique": !1,
    "@font-style/normal": !1,
    "@font-variant/small-caps": !1,
    "@passthrough/true": CSL.Output.Formatters.passthrough,
    "@font-variant/normal": !1,
    "@font-weight/bold": !1,
    "@font-weight/normal": !1,
    "@font-weight/light": !1,
    "@text-decoration/none": !1,
    "@text-decoration/underline": !1,
    "@vertical-align/baseline": !1,
    "@vertical-align/sup": !1,
    "@vertical-align/sub": !1,
    "@strip-periods/true": CSL.Output.Formatters.passthrough,
    "@strip-periods/false": CSL.Output.Formatters.passthrough,
    "@quotes/true": function (t, e) {
      return void 0 === e
        ? t.getTerm("open-quote")
        : t.getTerm("open-quote") + e + t.getTerm("close-quote");
    },
    "@quotes/inner": function (t, e) {
      return void 0 === e
        ? "’"
        : t.getTerm("open-inner-quote") + e + t.getTerm("close-inner-quote");
    },
    "@quotes/false": !1,
    "@cite/entry": function (t, e) {
      return t.sys.wrapCitationEntry(
        e,
        this.item_id,
        this.locator_txt,
        this.suffix_txt
      );
    },
    "@bibliography/entry": function (t, e) {
      return e + "\n";
    },
    "@display/block": function (t, e) {
      return "\n" + e;
    },
    "@display/left-margin": function (t, e) {
      return e;
    },
    "@display/right-inline": function (t, e) {
      return e;
    },
    "@display/indent": function (t, e) {
      return "\n    " + e;
    },
    "@showid/true": function (t, e, i) {
      return e;
    },
    "@URL/true": function (t, e) {
      return e;
    },
    "@DOI/true": function (t, e) {
      return e;
    },
  }),
  (CSL.Output.Formats.prototype.rtf = {
    text_escape: function (t) {
      return (
        t || (t = ""),
        t
          .replace(/([\\{}])/g, "\\$1")
          .replace(CSL.SUPERSCRIPTS_REGEXP, function (t) {
            return "\\super " + CSL.SUPERSCRIPTS[t] + "\\nosupersub{}";
          })
          .replace(/[\u007F-\uFFFF]/g, function (t) {
            return "\\uc0\\u" + t.charCodeAt(0).toString() + "{}";
          })
          .split("\t")
          .join("\\tab{}")
      );
    },
    "@passthrough/true": CSL.Output.Formatters.passthrough,
    "@font-style/italic": "{\\i{}%%STRING%%}",
    "@font-style/normal": "{\\i0{}%%STRING%%}",
    "@font-style/oblique": "{\\i{}%%STRING%%}",
    "@font-variant/small-caps": "{\\scaps %%STRING%%}",
    "@font-variant/normal": "{\\scaps0{}%%STRING%%}",
    "@font-weight/bold": "{\\b{}%%STRING%%}",
    "@font-weight/normal": "{\\b0{}%%STRING%%}",
    "@font-weight/light": !1,
    "@text-decoration/none": !1,
    "@text-decoration/underline": "{\\ul{}%%STRING%%}",
    "@vertical-align/baseline": !1,
    "@vertical-align/sup": "\\super %%STRING%%\\nosupersub{}",
    "@vertical-align/sub": "\\sub %%STRING%%\\nosupersub{}",
    "@strip-periods/true": CSL.Output.Formatters.passthrough,
    "@strip-periods/false": CSL.Output.Formatters.passthrough,
    "@quotes/true": function (t, e) {
      return void 0 === e
        ? CSL.Output.Formats.rtf.text_escape(t.getTerm("open-quote"))
        : CSL.Output.Formats.rtf.text_escape(t.getTerm("open-quote")) +
            e +
            CSL.Output.Formats.rtf.text_escape(t.getTerm("close-quote"));
    },
    "@quotes/inner": function (t, e) {
      return void 0 === e
        ? CSL.Output.Formats.rtf.text_escape("’")
        : CSL.Output.Formats.rtf.text_escape(t.getTerm("open-inner-quote")) +
            e +
            CSL.Output.Formats.rtf.text_escape(t.getTerm("close-inner-quote"));
    },
    "@quotes/false": !1,
    bibstart: "{\\rtf ",
    bibend: "}",
    "@display/block": "\\line{}%%STRING%%\\line\r\n",
    "@cite/entry": function (t, e) {
      return t.sys.wrapCitationEntry(
        e,
        this.item_id,
        this.locator_txt,
        this.suffix_txt
      );
    },
    "@bibliography/entry": function (t, e) {
      return e;
    },
    "@display/left-margin": function (t, e) {
      return e + "\\tab ";
    },
    "@display/right-inline": function (t, e) {
      return e + "\r\n";
    },
    "@display/indent": function (t, e) {
      return "\n\\tab " + e + "\\line\r\n";
    },
    "@showid/true": function (t, e, i) {
      if (t.tmp.just_looking || t.tmp.suppress_decorations) return e;
      var s = "";
      if (e) {
        var r = e.match(CSL.VARIABLE_WRAPPER_PREPUNCT_REX);
        (s = r[1]), (e = r[2]);
      }
      var a = "";
      return (
        e &&
          -1 < CSL.SWAPPING_PUNCTUATION.indexOf(e.slice(-1)) &&
          ((a = e.slice(-1)), (e = e.slice(0, -1))),
        t.sys.variableWrapper(this.params, s, e, a)
      );
    },
    "@URL/true": function (t, e) {
      return e;
    },
    "@DOI/true": function (t, e) {
      return e;
    },
  }),
  (CSL.Output.Formats = new CSL.Output.Formats()),
  (CSL.Registry = function (t) {
    (this.debug = !1),
      (this.state = t),
      (this.registry = {}),
      (this.reflist = []),
      (this.refhash = {}),
      (this.namereg = new CSL.Registry.NameReg(t)),
      (this.citationreg = new CSL.Registry.CitationReg(t)),
      (this.authorstrings = {}),
      (this.mylist = []),
      (this.myhash = {}),
      (this.deletes = []),
      (this.inserts = []),
      (this.uncited = {}),
      (this.refreshes = {}),
      (this.akeys = {}),
      (this.oldseq = {}),
      (this.return_data = {}),
      (this.ambigcites = {}),
      (this.ambigresets = {}),
      (this.sorter = new CSL.Registry.Comparifier(t, "bibliography_sort")),
      (this.getSortedIds = function () {
        for (var t = [], e = 0, i = this.reflist.length; e < i; e += 1)
          t.push("" + this.reflist[e].id);
        return t;
      }),
      (this.getSortedRegistryItems = function () {
        for (var t = [], e = 0, i = this.reflist.length; e < i; e += 1)
          t.push(this.reflist[e]);
        return t;
      });
  }),
  (CSL.Registry.prototype.init = function (t, e) {
    if (((this.oldseq = {}), e)) {
      this.uncited = {};
      for (var i = 0, s = t.length; i < s; i += 1)
        this.myhash[t[i]] || this.mylist.push("" + t[i]),
          (this.uncited[t[i]] = !0),
          (this.myhash[t[i]] = !0);
    } else {
      for (var r in this.uncited) t.push(r);
      var a = {};
      for (i = t.length - 1; -1 < i; i += -1)
        a[t[i]] ? (t = t.slice(0, i).concat(t.slice(i + 1))) : (a[t[i]] = !0);
      this.mylist = [];
      for (i = 0, s = t.length; i < s; i += 1) this.mylist.push("" + t[i]);
      this.myhash = a;
    }
    (this.refreshes = {}),
      (this.touched = {}),
      (this.ambigsTouched = {}),
      (this.ambigresets = {});
  }),
  (CSL.Registry.prototype.dopurge = function (t) {
    for (var e = this.mylist.length - 1; -1 < e; e += -1)
      this.citationreg.citationsByItemId &&
        (this.citationreg.citationsByItemId[this.mylist[e]] ||
          t[this.mylist[e]] ||
          (delete this.myhash[this.mylist[e]],
          (this.mylist = this.mylist
            .slice(0, e)
            .concat(this.mylist.slice(e + 1)))));
    this.dodeletes(this.myhash);
  }),
  (CSL.Registry.prototype.dodeletes = function (t) {
    var e, i, s, r, a, n, o, l;
    for (var u in ("string" == typeof t && ((t = {}), (t[t] = !0)),
    this.registry))
      if (!t[u]) {
        if (this.uncited[u]) continue;
        for (n in ((e = this.namereg.delitems(u)), e)) this.refreshes[n] = !0;
        for (
          i = this.registry[u].ambig,
            o = this.ambigcites[i].indexOf(u),
            -1 < o &&
              ((a = this.ambigcites[i].slice()),
              (this.ambigcites[i] = a
                .slice(0, o)
                .concat(a.slice(o + 1, a.length))),
              (this.ambigresets[i] = this.ambigcites[i].length)),
            r = this.ambigcites[i].length,
            s = 0;
          s < r;
          s += 1
        )
          (l = "" + this.ambigcites[i][s]), (this.refreshes[l] = !0);
        if (this.registry[u].siblings)
          if (1 == this.registry[u].siblings.length) {
            var h = this.registry[u].siblings[0];
            (this.registry[h].master = !0),
              this.registry[h].siblings.pop(),
              (this.registry[h].parallel = !1);
          } else if (1 < this.registry[u].siblings.length) {
            var p = [u];
            if (this.registry[u].master) {
              var c = this.registry[u].siblings[0],
                m = this.registry[c];
              (m.master = !0), (m.parallel = !1), p.push(c);
              for (
                var f = 0, d = this.registry[u].siblings.length;
                f < d;
                f += 1
              )
                this.registry[this.registry[u].siblings[f]].parallel = c;
            }
            var g = [];
            for (f = this.registry[u].siblings.length - 1; -1 < f; f += -1) {
              var b = this.registry[u].siblings.pop();
              -1 === p.indexOf(b) && g.push(b);
            }
            for (f = g.length - 1; -1 < f; f += -1)
              this.registry[u].siblings.push(g[f]);
          }
        delete this.registry[u],
          delete this.refhash[u],
          (this.return_data.bibchange = !0);
      }
  }),
  (CSL.Registry.prototype.doinserts = function (t) {
    var e, i, s, r, a;
    "string" == typeof t && (t = [t]);
    for (var n = 0, o = t.length; n < o; n += 1)
      (e = t[n]),
        this.registry[e] ||
          ((i = this.state.retrieveItem(e)),
          (s = CSL.getAmbiguousCite.call(this.state, i)),
          (this.ambigsTouched[s] = !0),
          i.legislation_id || (this.akeys[s] = !0),
          (r = {
            id: "" + e,
            seq: 0,
            offset: 0,
            sortkeys: !1,
            ambig: !1,
            rendered: !1,
            disambig: !1,
            ref: i,
          }),
          (this.registry[e] = r),
          this.citationreg.citationsByItemId &&
            this.citationreg.citationsByItemId[e] &&
            (this.registry[e]["first-reference-note-number"] =
              this.citationreg.citationsByItemId[e][0].properties.noteIndex),
          (a = CSL.getAmbigConfig.call(this.state)),
          this.registerAmbigToken(s, e, a),
          (this.touched[e] = !0),
          (this.return_data.bibchange = !0));
  }),
  (CSL.Registry.prototype.rebuildlist = function () {
    var t, e, i;
    for (
      this.reflist = [],
        this.state.opt.citation_number_sort_direction === CSL.DESCENDING &&
          this.state.opt.citation_number_sort_used,
        t = this.mylist.length,
        e = 0;
      e < t;
      e += 1
    )
      (i = this.mylist[e]),
        this.reflist.push(this.registry[i]),
        (this.oldseq[i] = this.registry[i].seq),
        (this.registry[i].seq = e + 1);
    this.state.opt.citation_number_sort_direction === CSL.DESCENDING &&
      this.state.opt.citation_number_sort_used;
  }),
  (CSL.Registry.prototype.dorefreshes = function () {
    var t;
    for (var e in this.refreshes)
      if (((t = this.registry[e]), t)) {
        (t.sortkeys = void 0), (a = this.state.retrieveItem(e));
        var i = t.ambig;
        for (var s in (void 0 === i &&
          ((this.state.tmp.disambig_settings = !1),
          (i = CSL.getAmbiguousCite.call(this.state, a)),
          (n = CSL.getAmbigConfig.call(this.state)),
          this.registerAmbigToken(i, e, n)),
        this.ambigresets))
          if (1 === this.ambigresets[s]) {
            var r = this.ambigcites[i][0],
              a = this.state.retrieveItem(r);
            (this.registry[r].disambig = new CSL.AmbigConfig()),
              (this.state.tmp.disambig_settings = !1);
            i = CSL.getAmbiguousCite.call(this.state, a);
            var n = CSL.getAmbigConfig.call(this.state);
            this.registerAmbigToken(i, r, n);
          }
        (this.state.tmp.taintedItemIDs[e] = !0),
          (this.ambigsTouched[i] = !0),
          a.legislation_id || (this.akeys[i] = !0),
          (this.touched[e] = !0);
      }
  }),
  (CSL.Registry.prototype.setdisambigs = function () {
    var t;
    for (t in ((this.leftovers = []), this.ambigsTouched))
      this.state.disambiguate.run(t);
    (this.ambigsTouched = {}), (this.akeys = {});
  }),
  (CSL.Registry.prototype.renumber = function () {
    var t, e, i;
    for (
      this.state.opt.citation_number_sort_direction === CSL.DESCENDING &&
        this.state.opt.citation_number_sort_used,
        t = this.reflist.length,
        e = 0;
      e < t;
      e += 1
    )
      (i = this.reflist[e]),
        (i.seq = e + 1),
        this.state.opt.update_mode === CSL.NUMERIC &&
          i.seq != this.oldseq[i.id] &&
          (this.state.tmp.taintedItemIDs[i.id] = !0),
        this.state.opt.bib_mode === CSL.NUMERIC &&
          i.seq != this.oldseq[i.id] &&
          (this.return_data.bibchange = !0);
    this.state.opt.citation_number_sort_direction === CSL.DESCENDING &&
      this.state.opt.citation_number_sort_used &&
      this.reflist.reverse();
  }),
  (CSL.Registry.prototype.setsortkeys = function () {
    for (var t = 0, e = this.mylist.length; t < e; t += 1) {
      var i = this.mylist[t];
      (this.touched[i] ||
        this.state.tmp.taintedItemIDs[i] ||
        !this.registry[i].sortkeys) &&
        (this.registry[i].sortkeys = CSL.getSortKeys.call(
          this.state,
          this.state.retrieveItem(i),
          "bibliography_sort"
        ));
    }
  }),
  (CSL.Registry.prototype.sorttokens = function () {
    this.reflist.sort(this.sorter.compareKeys);
  }),
  (CSL.Registry.Comparifier = function (t, e) {
    var s,
      r,
      a,
      i,
      n = CSL.getSortCompare(t.opt["default-locale-sort"]);
    (s = t[e].opt.sort_directions),
      (this.compareKeys = function (t, e) {
        for (r = t.sortkeys ? t.sortkeys.length : 0, a = 0; a < r; a += 1) {
          var i = 0;
          if (
            ((i =
              t.sortkeys[a] === e.sortkeys[a]
                ? 0
                : void 0 === t.sortkeys[a]
                ? s[a][1]
                : void 0 === e.sortkeys[a]
                ? s[a][0]
                : n(t.sortkeys[a], e.sortkeys[a])),
            0 < i)
          )
            return s[a][1];
          if (i < 0) return s[a][0];
        }
        return t.seq > e.seq ? 1 : t.seq < e.seq ? -1 : 0;
      }),
      (i = this.compareKeys),
      (this.compareCompositeKeys = function (t, e) {
        return i(t[1], e[1]);
      });
  }),
  (CSL.Registry.prototype.compareRegistryTokens = function (t, e) {
    return t.seq > e.seq ? 1 : t.seq < e.seq ? -1 : 0;
  }),
  (CSL.Registry.prototype.registerAmbigToken = function (t, e, i) {
    if (
      this.registry[e] &&
      this.registry[e].disambig &&
      this.registry[e].disambig.names
    )
      for (var s = 0, r = i.names.length; s < r; s += 1) {
        var a = i.names[s],
          n = this.registry[e].disambig.names[s];
        if (a !== n) this.state.tmp.taintedItemIDs[e] = !0;
        else if (i.givens[s])
          for (var o = 0, l = i.givens[s].length; o < l; o += 1) {
            var u = i.givens[s][o],
              h = this.registry[e].disambig.givens[s][o];
            u !== h && (this.state.tmp.taintedItemIDs[e] = !0);
          }
      }
    this.ambigcites[t] || (this.ambigcites[t] = []),
      -1 === this.ambigcites[t].indexOf("" + e) &&
        this.ambigcites[t].push("" + e),
      (this.registry[e].ambig = t);
    this.registry[e].disambig = CSL.cloneAmbigConfig(i);
  }),
  (CSL.getSortKeys = function (t, e) {
    var i, s, r, a, n, o;
    for (
      i = this.tmp.area,
        s = this.tmp.root,
        r = this.tmp.extension,
        a = CSL.Util.Sort.strip_prepositions,
        this.tmp.area = e,
        this.tmp.root = -1 < e.indexOf("_") ? e.slice(0, -5) : e,
        this.tmp.extension = "_sort",
        this.tmp.disambig_override = !0,
        this.tmp.disambig_request = !1,
        this.parallel.use_parallels =
          (!0 === this.parallel.use_parallels ||
            null === this.parallel.use_parallels) &&
          null,
        this.tmp.suppress_decorations = !0,
        CSL.getCite.call(this, t),
        this.tmp.suppress_decorations = !1,
        this.parallel.use_parallels = null === this.parallel.use_parallels,
        this.tmp.disambig_override = !1,
        n = this[e].keys.length,
        o = 0;
      o < n;
      o += 1
    )
      this[e].keys[o] = a(this[e].keys[o]);
    return (
      (this.tmp.area = i),
      (this.tmp.root = s),
      (this.tmp.extension = r),
      this[e].keys
    );
  }),
  (CSL.Registry.NameReg = function (u) {
    var h, p, c, m, f, d, r, g, t, e, i, b;
    (this.state = u),
      (this.namereg = {}),
      (this.nameind = {}),
      (this.nameindpkeys = {}),
      (this.itemkeyreg = {}),
      (r = function (t) {
        return (
          t || (t = ""),
          t.replace(/\./g, " ").replace(/\s+/g, " ").replace(/\s+$/, "")
        );
      }),
      (g = function (t, e, i) {
        (h = r(i.family)), (c = r(i.given));
        var s = c.match(/[,\!]* ([^,]+)$/);
        s &&
          s[1] === s[1].toLowerCase() &&
          (c = c.replace(/[,\!]* [^,]+$/, "")),
          (p = CSL.Util.Names.initializeWith(t, c, "%s")),
          "by-cite" === t.citation.opt["givenname-disambiguation-rule"] &&
            (h = "" + e + h);
      }),
      (t = function (t, e, i, s, r, a) {
        var n;
        if ("bibliography" === u.tmp.area.slice(0, 12) && !r)
          return "string" == typeof a ? 1 : 2;
        var o = u.nameOutput.getName(e, "locale-translit", !0);
        (e = o.name),
          g(this.state, "" + t, e),
          (n = 2),
          (m = u.opt["disambiguate-add-givenname"]),
          (f = u.citation.opt["givenname-disambiguation-rule"]);
        var l = f;
        return (
          "by-cite" === f && (f = "all-names"),
          "short" === r ? (n = 0) : "string" == typeof a && (n = 1),
          void 0 === this.namereg[h] || void 0 === this.namereg[h].ikey[p]
            ? n
            : "by-cite" === l && n <= s
            ? s
            : m
            ? "string" == typeof f && "primary-name" === f.slice(0, 12) && 0 < i
              ? n
              : (f && "all-names" !== f && "primary-name" !== f
                  ? ("all-names-with-initials" !== f &&
                      "primary-name-with-initials" !== f) ||
                    (n = 1 < this.namereg[h].count ? 1 : 0)
                  : (1 < this.namereg[h].count && (n = 1),
                    ((this.namereg[h].ikey &&
                      1 < this.namereg[h].ikey[p].count) ||
                      (1 < this.namereg[h].count && "string" != typeof a)) &&
                      (n = 2)),
                u.registry.registry[t]
                  ? n
                  : "short" == r
                  ? 0
                  : "string" == typeof a
                  ? 1
                  : void 0)
            : n
        );
      }),
      (e = function (t) {
        var e, i, s, r, a;
        ("string" != typeof t && "number" != typeof t) || (t = ["" + t]);
        for (i = t.length, e = 0; e < i; e += 1)
          if (((r = "" + t[e]), this.nameind[r])) {
            for (a in this.nameind[r])
              if (this.nameind[r].hasOwnProperty(a)) {
                var n = a.split("::");
                if (
                  ((h = n[0]),
                  (p = n[1]),
                  (c = n[2]),
                  void 0 === this.namereg[h])
                )
                  continue;
                if (
                  ((d = this.namereg[h].items),
                  c &&
                    this.namereg[h].ikey[p] &&
                    this.namereg[h].ikey[p].skey[c] &&
                    ((b = this.namereg[h].ikey[p].skey[c].items),
                    (s = b.indexOf("" + r)),
                    -1 < s &&
                      (this.namereg[h].ikey[p].skey[c].items = b
                        .slice(0, s)
                        .concat(b.slice([s + 1]))),
                    0 === this.namereg[h].ikey[p].skey[c].items.length &&
                      (delete this.namereg[h].ikey[p].skey[c],
                      (this.namereg[h].ikey[p].count += -1),
                      this.namereg[h].ikey[p].count < 2)))
                )
                  for (
                    var o = 0, l = this.namereg[h].ikey[p].items.length;
                    o < l;
                    o += 1
                  )
                    u.tmp.taintedItemIDs[this.namereg[h].ikey[p].items[o]] = !0;
                if (
                  p &&
                  this.namereg[h].ikey[p] &&
                  ((s = this.namereg[h].ikey[p].items.indexOf("" + r)),
                  -1 < s &&
                    ((d = this.namereg[h].ikey[p].items.slice()),
                    (this.namereg[h].ikey[p].items = d
                      .slice(0, s)
                      .concat(d.slice([s + 1])))),
                  0 === this.namereg[h].ikey[p].items.length &&
                    (delete this.namereg[h].ikey[p],
                    (this.namereg[h].count += -1),
                    this.namereg[h].count < 2))
                )
                  for (o = 0, l = this.namereg[h].items.length; o < l; o += 1)
                    u.tmp.taintedItemIDs[this.namereg[h].items[o]] = !0;
                h &&
                  ((s = this.namereg[h].items.indexOf("" + r)),
                  -1 < s &&
                    ((d = this.namereg[h].items.slice()),
                    (this.namereg[h].items = d
                      .slice(0, s)
                      .concat(d.slice([s + 1], d.length)))),
                  this.namereg[h].items.length < 2 && delete this.namereg[h]),
                  delete this.nameind[r][a];
              }
            delete this.nameind[r], delete this.nameindpkeys[r];
          }
        return {};
      }),
      (i = function (t, e, i) {
        var s = u.nameOutput.getName(e, "locale-translit", !0);
        if (
          ((e = s.name),
          !u.citation.opt["givenname-disambiguation-rule"] ||
            "primary-" !==
              u.citation.opt["givenname-disambiguation-rule"].slice(0, 8) ||
            0 === i)
        ) {
          if (
            (g(this.state, "" + t, e),
            h &&
              (void 0 === this.namereg[h]
                ? ((this.namereg[h] = {}),
                  (this.namereg[h].count = 0),
                  (this.namereg[h].ikey = {}),
                  (this.namereg[h].items = [t]))
                : -1 === this.namereg[h].items.indexOf(t) &&
                  this.namereg[h].items.push(t)),
            h && p)
          )
            if (void 0 === this.namereg[h].ikey[p]) {
              if (
                ((this.namereg[h].ikey[p] = {}),
                (this.namereg[h].ikey[p].count = 0),
                (this.namereg[h].ikey[p].skey = {}),
                (this.namereg[h].ikey[p].items = [t]),
                (this.namereg[h].count += 1),
                2 === this.namereg[h].count)
              )
                for (var r = 0, a = this.namereg[h].items.length; r < a; r += 1)
                  u.tmp.taintedItemIDs[this.namereg[h].items[r]] = !0;
            } else
              -1 === this.namereg[h].ikey[p].items.indexOf(t) &&
                this.namereg[h].ikey[p].items.push(t);
          if (h && p && c)
            if (void 0 === this.namereg[h].ikey[p].skey[c]) {
              if (
                ((this.namereg[h].ikey[p].skey[c] = {}),
                (this.namereg[h].ikey[p].skey[c].items = [t]),
                (this.namereg[h].ikey[p].count += 1),
                2 === this.namereg[h].ikey[p].count)
              )
                for (
                  r = 0, a = this.namereg[h].ikey[p].items.length;
                  r < a;
                  r += 1
                )
                  u.tmp.taintedItemIDs[this.namereg[h].ikey[p].items[r]] = !0;
            } else
              -1 === this.namereg[h].ikey[p].skey[c].items.indexOf(t) &&
                this.namereg[h].ikey[p].skey[c].items.push(t);
          void 0 === this.nameind[t] &&
            ((this.nameind[t] = {}), (this.nameindpkeys[t] = {})),
            h &&
              ((this.nameind[t][h + "::" + p + "::" + c] = !0),
              (this.nameindpkeys[t][h] = this.namereg[h]));
        }
      }),
      (this.addname = i),
      (this.delitems = e),
      (this.evalname = t);
  }),
  (CSL.Registry.CitationReg = function (t) {
    (this.citationById = {}), (this.citationByIndex = []);
  }),
  (CSL.Disambiguation = function (t) {
    (this.state = t),
      (this.sys = this.state.sys),
      (this.registry = t.registry.registry),
      (this.ambigcites = t.registry.ambigcites),
      this.configModes(),
      (this.debug = !1);
  }),
  (CSL.Disambiguation.prototype.run = function (t) {
    this.modes.length &&
      ((this.akey = t), this.initVars(t) && this.runDisambig());
  }),
  (CSL.Disambiguation.prototype.runDisambig = function () {
    var t;
    for (this.initGivens = !0; this.lists.length; ) {
      for (
        this.gnameset = 0, this.gname = 0, this.clashes = [1, 0];
        this.lists[0][1].length;

      ) {
        (this.listpos = 0), this.base || (this.base = this.lists[0][0]);
        (t = this.incrementDisambig()),
          this.scanItems(this.lists[0]),
          this.evalScan(t);
      }
      this.lists = this.lists.slice(1);
    }
  }),
  (CSL.Disambiguation.prototype.scanItems = function (t) {
    var e;
    (this.Item = t[1][0]),
      (this.ItemCite = CSL.getAmbiguousCite.call(
        this.state,
        this.Item,
        this.base,
        !0
      )),
      (this.scanlist = t[1]),
      (this.partners = []),
      this.partners.push(this.Item),
      (this.nonpartners = []);
    for (var i = 0, s = 1, r = t[1].length; s < r; s += 1) {
      e = t[1][s];
      var a = CSL.getAmbiguousCite.call(this.state, e, this.base, !0);
      this.ItemCite === a
        ? ((i += 1), this.partners.push(e))
        : this.nonpartners.push(e);
    }
    (this.clashes[0] = this.clashes[1]), (this.clashes[1] = i);
  }),
  (CSL.Disambiguation.prototype.evalScan = function (t) {
    this[this.modes[this.modeindex]](t),
      t &&
        (this.modeindex < this.modes.length - 1
          ? (this.modeindex += 1)
          : (this.lists[this.listpos + 1] = [this.base, []]));
  }),
  (CSL.Disambiguation.prototype.disNames = function (t) {
    if (0 === this.clashes[1] && 1 === this.nonpartners.length)
      this.captureStepToBase(),
        this.state.registry.registerAmbigToken(
          this.akey,
          "" + this.nonpartners[0].id,
          this.betterbase
        ),
        this.state.registry.registerAmbigToken(
          this.akey,
          "" + this.partners[0].id,
          this.betterbase
        ),
        (this.lists[this.listpos] = [this.betterbase, []]);
    else if (0 === this.clashes[1])
      this.captureStepToBase(),
        this.state.registry.registerAmbigToken(
          this.akey,
          "" + this.partners[0].id,
          this.betterbase
        ),
        (this.lists[this.listpos] = [this.betterbase, this.nonpartners]),
        this.nonpartners.length && (this.initGivens = !0);
    else if (1 === this.nonpartners.length)
      this.captureStepToBase(),
        this.state.registry.registerAmbigToken(
          this.akey,
          "" + this.nonpartners[0].id,
          this.betterbase
        ),
        (this.lists[this.listpos] = [this.betterbase, this.partners]);
    else if (this.clashes[1] < this.clashes[0])
      this.captureStepToBase(),
        (this.lists[this.listpos] = [this.betterbase, this.partners]),
        this.lists.push([this.betterbase, this.nonpartners]);
    else if (
      t &&
      ((this.lists[this.listpos] = [this.betterbase, this.nonpartners]),
      this.lists.push([this.betterbase, this.partners]),
      this.modeindex === this.modes.length - 1)
    ) {
      for (var e = 0, i = this.partners.length; e < i; e += 1)
        this.state.registry.registerAmbigToken(
          this.akey,
          "" + this.partners[e].id,
          this.betterbase
        );
      this.lists[this.listpos] = [this.betterbase, []];
    }
  }),
  (CSL.Disambiguation.prototype.disExtraText = function () {
    var t = !1;
    if (
      (0 === this.clashes[1] && this.nonpartners.length < 2 && (t = !0),
      t ||
        (this.base.disambiguate &&
          this.state.tmp.disambiguate_count ===
            this.state.tmp.disambiguate_maxMax))
    ) {
      if (
        t ||
        this.state.tmp.disambiguate_count === this.state.tmp.disambiguate_maxMax
      )
        if (t || this.modeindex === this.modes.length - 1) {
          var e = this.lists[this.listpos][0];
          for (i = 0, s = this.lists[this.listpos][1].length; i < s; i += 1)
            (this.state.tmp.taintedItemIDs[this.lists[this.listpos][1][i].id] =
              !0),
              this.state.registry.registerAmbigToken(
                this.akey,
                "" + this.lists[this.listpos][1][i].id,
                e
              );
          this.lists[this.listpos] = [this.betterbase, []];
        } else {
          this.modeindex = this.modes.length - 1;
          e = this.lists[this.listpos][0];
          e.disambiguate = !0;
          for (i = 0, s = this.lists[this.listpos][1].length; i < s; i += 1)
            (this.state.tmp.taintedItemIDs[this.lists[this.listpos][1][i].id] =
              !0),
              this.state.registry.registerAmbigToken(
                this.akey,
                "" + this.lists[this.listpos][1][i].id,
                e
              );
        }
    } else if (
      ((this.modeindex = 0),
      (this.base.disambiguate = this.state.tmp.disambiguate_count),
      (this.betterbase.disambiguate = this.state.tmp.disambiguate_count),
      this.base.disambiguate)
    )
      this.disNames();
    else {
      (this.initGivens = !0), (this.base.disambiguate = 1);
      for (var i = 0, s = this.lists[this.listpos][1].length; i < s; i += 1)
        this.state.tmp.taintedItemIDs[this.lists[this.listpos][1][i].id] = !0;
    }
  }),
  (CSL.Disambiguation.prototype.disYears = function () {
    var t;
    t = [];
    var e = this.lists[this.listpos][0];
    if (this.clashes[1])
      for (var i = 0, s = this.state.registry.mylist.length; i < s; i += 1)
        for (
          var r = this.state.registry.mylist[i],
            a = 0,
            n = this.lists[this.listpos][1].length;
          a < n;
          a += 1
        ) {
          var o = this.lists[this.listpos][1][a];
          if (o.id == r) {
            t.push(this.registry[o.id]);
            break;
          }
        }
    t.sort(this.state.registry.sorter.compareKeys);
    for (var l = 0, u = t.length; l < u; l += 1) {
      e.year_suffix = "" + l;
      var h = this.state.registry.registry[t[l].id].disambig;
      this.state.registry.registerAmbigToken(this.akey, "" + t[l].id, e),
        CSL.ambigConfigDiff(h, e) &&
          (this.state.tmp.taintedItemIDs[t[l].id] = !0);
    }
    this.lists[this.listpos] = [this.betterbase, []];
  }),
  (CSL.Disambiguation.prototype.incrementDisambig = function () {
    if (this.initGivens) return (this.initGivens = !1), !1;
    var t = !1,
      e = !0;
    if ("disNames" === this.modes[this.modeindex]) {
      (e = !1), "number" != typeof this.givensMax && (e = !0);
      var i = !1;
      if (
        ("number" != typeof this.namesMax && (i = !0),
        "number" == typeof this.givensMax &&
          (this.base.givens.length &&
          this.base.givens[this.gnameset][this.gname] < this.givensMax
            ? (this.base.givens[this.gnameset][this.gname] += 1)
            : (e = !0)),
        "number" == typeof this.namesMax &&
          e &&
          (this.state.opt["disambiguate-add-names"]
            ? ((i = !1),
              this.gname < this.namesMax
                ? ((this.base.names[this.gnameset] += 1), (this.gname += 1))
                : (i = !0))
            : (i = !0)),
        "number" == typeof this.namesetsMax && i)
      )
        if (this.gnameset < this.namesetsMax)
          (this.gnameset += 1),
            (this.base.names[this.gnameset] = 1),
            (this.gname = 0);
        else;
      ("number" == typeof this.namesetsMax &&
        -1 !== this.namesetsMax &&
        this.gnameset !== this.namesetsMax) ||
        (this.state.opt["disambiguate-add-names"] &&
          "number" == typeof this.namesMax &&
          this.gname !== this.namesMax) ||
        ("number" == typeof this.givensMax &&
          void 0 !== this.base.givens[this.gnameset] &&
          void 0 !== this.base.givens[this.gnameset][this.gname] &&
          this.base.givens[this.gnameset][this.gname] !== this.givensMax) ||
        (t = !0);
    } else
      "disExtraText" === this.modes[this.modeindex] &&
        ((this.base.disambiguate += 1), (this.betterbase.disambiguate += 1));
    return t;
  }),
  (CSL.Disambiguation.prototype.initVars = function (t) {
    var e, i, s;
    if (
      ((this.lists = []),
      (this.base = !1),
      (this.betterbase = !1),
      (this.akey = t),
      (this.maxNamesByItemId = {}),
      (i = []),
      (e = this.ambigcites[t]),
      !e || !e.length)
    )
      return !1;
    var r = this.state.retrieveItem("" + e[0]);
    if (
      (this.getCiteData(r),
      (this.base = CSL.getAmbigConfig.call(this.state)),
      e && 1 < e.length)
    ) {
      i.push([this.maxNamesByItemId[r.id], r]);
      for (var a = 1, n = e.length; a < n; a += 1)
        (r = this.state.retrieveItem("" + e[a])),
          this.getCiteData(r, this.base),
          i.push([this.maxNamesByItemId[r.id], r]);
      i.sort(function (t, e) {
        return t[0] > e[0]
          ? 1
          : t[0] < e[0]
          ? -1
          : t[1].id > e[1].id
          ? 1
          : t[1].id < e[1].id
          ? -1
          : 0;
      }),
        (s = []);
      for (var a = 0, n = i.length; a < n; a += 1) s.push(i[a][1]);
      this.lists.push([this.base, s]), (this.Item = this.lists[0][1][0]);
    } else this.Item = this.state.retrieveItem("" + e[0]);
    return (
      (this.modeindex = 0),
      this.state.citation.opt["disambiguate-add-names"],
      (this.namesMax = this.maxNamesByItemId[this.Item.id][0]),
      this.padBase(this.base),
      this.padBase(this.betterbase),
      (this.base.year_suffix = !1),
      (this.base.disambiguate = !1),
      (this.betterbase.year_suffix = !1),
      (this.betterbase.disambiguate = !1),
      "by-cite" === this.state.citation.opt["givenname-disambiguation-rule"] &&
        this.state.opt["disambiguate-add-givenname"] &&
        (this.givensMax = 2),
      !0
    );
  }),
  (CSL.Disambiguation.prototype.padBase = function (t) {
    for (var e = 0, i = t.names.length; e < i; e += 1) {
      t.givens[e] || (t.givens[e] = []);
      for (var s = 0, r = t.names[e]; s < r; s += 1)
        t.givens[e][s] || (t.givens[e][s] = 0);
    }
  }),
  (CSL.Disambiguation.prototype.configModes = function () {
    var t, e;
    (this.modes = []),
      (t = this.state.opt["disambiguate-add-givenname"]),
      (e = this.state.citation.opt["givenname-disambiguation-rule"]),
      (this.state.opt["disambiguate-add-names"] || (t && "by-cite" === e)) &&
        this.modes.push("disNames"),
      this.state.opt.has_disambiguate && this.modes.push("disExtraText"),
      this.state.opt["disambiguate-add-year-suffix"] &&
        this.modes.push("disYears");
  }),
  (CSL.Disambiguation.prototype.getCiteData = function (t, e) {
    if (!this.maxNamesByItemId[t.id]) {
      CSL.getAmbiguousCite.call(this.state, t, e),
        (e = CSL.getAmbigConfig.call(this.state)),
        (this.maxNamesByItemId[t.id] = CSL.getMaxVals.call(this.state)),
        (this.state.registry.registry[t.id].disambig.givens =
          this.state.tmp.disambig_settings.givens.slice());
      for (
        var i = 0,
          s = this.state.registry.registry[t.id].disambig.givens.length;
        i < s;
        i += 1
      )
        this.state.registry.registry[t.id].disambig.givens[i] =
          this.state.tmp.disambig_settings.givens[i].slice();
      (this.namesetsMax =
        this.state.registry.registry[t.id].disambig.names.length - 1),
        this.base ||
          ((this.base = e), (this.betterbase = CSL.cloneAmbigConfig(e))),
        e.names.length < this.base.names.length && (this.base = e);
      for (i = 0, s = e.names.length; i < s; i += 1)
        e.names[i] > this.base.names[i] &&
          ((this.base.givens[i] = e.givens[i].slice()),
          (this.base.names[i] = e.names[i]),
          (this.betterbase.names = this.base.names.slice()),
          (this.betterbase.givens = this.base.givens.slice()),
          this.padBase(this.base),
          this.padBase(this.betterbase));
      this.betterbase.givens = this.base.givens.slice();
      for (var r = 0, a = this.base.givens.length; r < a; r += 1)
        this.betterbase.givens[r] = this.base.givens[r].slice();
    }
  }),
  (CSL.Disambiguation.prototype.captureStepToBase = function () {
    "by-cite" === this.state.citation.opt["givenname-disambiguation-rule"] &&
      this.base.givens &&
      this.base.givens.length &&
      void 0 !== this.base.givens[this.gnameset][this.gname] &&
      (this.betterbase.givens[this.gnameset][this.gname] =
        this.base.givens[this.gnameset][this.gname]),
      (this.betterbase.names[this.gnameset] = this.base.names[this.gnameset]);
  }),
  (CSL.Engine.prototype.getJurisdictionList = function (t) {
    for (var e = [], i = t.split(":"), s = i.length; 0 < s; s--)
      e.push(i.slice(0, s).join(":"));
    return -1 === e.indexOf("us") && e.push("us"), e;
  }),
  (CSL.Engine.prototype.retrieveAllStyleModules = function (t) {
    var e = {},
      i = this.locale[this.opt.lang].opts["jurisdiction-preference"];
    (i = i || []), (i = [""].concat(i));
    for (var s = i.length - 1; -1 < s; s--)
      for (var r = i[s], a = 0, n = t.length; a < n; a++) {
        var o = t[a];
        if (!this.opt.jurisdictions_seen[o]) {
          var l = this.sys.retrieveStyleModule(o, r);
          ((!l && !r) || l) && (this.opt.jurisdictions_seen[o] = !0),
            l && (e[o] = l);
        }
      }
    return e;
  }),
  (CSL.ParticleList = (function () {
    var t = [[[0, 1], null]],
      e = [[null, [0, 1]]],
      i = [[null, [0, 2]]],
      s = [[null, [0, 3]]],
      r = [
        [null, [0, 1]],
        [[0, 1], null],
      ],
      a = [
        [null, [0, 2]],
        [[0, 2], null],
      ],
      n = [
        [[0, 1], null],
        [null, [0, 1]],
      ],
      o = [
        [[0, 2], null],
        [null, [0, 2]],
      ],
      l = [
        [null, [0, 2]],
        [
          [0, 1],
          [1, 2],
        ],
      ],
      u = [
        ["'s", e],
        ["'s-", e],
        ["'t", e],
        ["a", e],
        ["aan 't", i],
        ["aan de", i],
        ["aan den", i],
        ["aan der", i],
        ["aan het", i],
        ["aan t", i],
        ["aan", e],
        ["ad-", r],
        ["adh-", r],
        ["af", r],
        ["al", r],
        ["al-", r],
        ["am de", i],
        ["am", e],
        ["an-", r],
        ["ar-", r],
        ["as-", r],
        ["ash-", r],
        ["at-", r],
        ["ath-", r],
        ["auf dem", o],
        ["auf den", o],
        ["auf der", o],
        ["auf ter", i],
        ["auf", n],
        ["aus 'm", o],
        ["aus dem", o],
        ["aus den", o],
        ["aus der", o],
        ["aus m", o],
        ["aus", n],
        ["aus'm", o],
        ["az-", r],
        ["aš-", r],
        ["aḍ-", r],
        ["aḏ-", r],
        ["aṣ-", r],
        ["aṭ-", r],
        ["aṯ-", r],
        ["aẓ-", r],
        ["ben", e],
        ["bij 't", i],
        ["bij de", i],
        ["bij den", i],
        ["bij het", i],
        ["bij t", i],
        ["bij", e],
        ["bin", e],
        ["boven d", i],
        ["boven d'", i],
        ["d", e],
        ["d'", r],
        ["da", r],
        ["dal", e],
        ["dal'", e],
        ["dall'", e],
        ["dalla", e],
        ["das", r],
        ["de die le", s],
        ["de die", i],
        ["de l", i],
        ["de l'", i],
        ["de la", l],
        ["de las", l],
        ["de le", i],
        ["de li", a],
        ["de van der", s],
        ["de", r],
        ["de'", r],
        ["deca", e],
        ["degli", r],
        ["dei", r],
        ["del", r],
        ["dela", t],
        ["dell'", r],
        ["della", r],
        ["delle", r],
        ["dello", r],
        ["den", r],
        ["der", r],
        ["des", r],
        ["di", r],
        ["die le", i],
        ["do", e],
        ["don", e],
        ["dos", r],
        ["du", r],
        ["ed-", r],
        ["edh-", r],
        ["el", r],
        ["el-", r],
        ["en-", r],
        ["er-", r],
        ["es-", r],
        ["esh-", r],
        ["et-", r],
        ["eth-", r],
        ["ez-", r],
        ["eš-", r],
        ["eḍ-", r],
        ["eḏ-", r],
        ["eṣ-", r],
        ["eṭ-", r],
        ["eṯ-", r],
        ["eẓ-", r],
        ["het", e],
        ["i", e],
        ["il", t],
        ["im", e],
        ["in 't", i],
        ["in de", i],
        ["in den", i],
        ["in der", a],
        ["in het", i],
        ["in t", i],
        ["in", e],
        ["l", e],
        ["l'", e],
        ["la", e],
        ["las", e],
        ["le", e],
        ["les", r],
        ["lo", r],
        ["los", e],
        ["lou", e],
        ["of", e],
        ["onder 't", i],
        ["onder de", i],
        ["onder den", i],
        ["onder het", i],
        ["onder t", i],
        ["onder", e],
        ["op 't", i],
        ["op de", a],
        ["op den", i],
        ["op der", i],
        ["op gen", i],
        ["op het", i],
        ["op t", i],
        ["op ten", i],
        ["op", e],
        ["over 't", i],
        ["over de", i],
        ["over den", i],
        ["over het", i],
        ["over t", i],
        ["over", e],
        ["s", e],
        ["s'", e],
        ["sen", t],
        ["t", e],
        ["te", e],
        ["ten", e],
        ["ter", e],
        ["tho", e],
        ["thoe", e],
        ["thor", e],
        ["to", e],
        ["toe", e],
        ["tot", e],
        ["uijt 't", i],
        ["uijt de", i],
        ["uijt den", i],
        ["uijt te de", s],
        ["uijt ten", i],
        ["uijt", e],
        ["uit 't", i],
        ["uit de", i],
        ["uit den", i],
        ["uit het", i],
        ["uit t", i],
        ["uit te de", s],
        ["uit ten", i],
        ["uit", e],
        ["unter", e],
        ["v", e],
        ["v.", e],
        ["v.d.", e],
        ["van 't", i],
        ["van de l", s],
        ["van de l'", s],
        ["van de", i],
        ["van de", i],
        ["van den", i],
        ["van der", i],
        ["van gen", i],
        ["van het", i],
        ["van la", i],
        ["van t", i],
        ["van ter", i],
        ["van van de", s],
        ["van", r],
        ["vander", e],
        ["vd", e],
        ["ver", e],
        ["vom und zum", [[[0, 3], null]]],
        ["vom", r],
        ["von 't", i],
        ["von dem", o],
        ["von den", o],
        ["von der", o],
        ["von t", i],
        [
          "von und zu",
          [
            [[0, 3], null],
            [null, [0, 3]],
          ],
        ],
        ["von zu", o],
        ["von", n],
        ["voor 't", i],
        ["voor de", i],
        ["voor den", i],
        ["voor in 't", s],
        ["voor in t", s],
        ["voor", e],
        ["vor der", o],
        ["vor", n],
        ["z", t],
        ["ze", t],
        ["zu", n],
        ["zum", r],
        ["zur", r],
      ];
    return u;
  })()),
  (CSL.parseParticles = (function () {
    function h(t, e, i) {
      var s = t;
      t = i ? t.toLowerCase() : t;
      var r,
        a = [];
      r = e
        ? ((t = t.split("").reverse().join("")), CSL.PARTICLE_GIVEN_REGEXP)
        : CSL.PARTICLE_FAMILY_REGEXP;
      for (var n = t.match(r); n; ) {
        var o = e ? n[1].split("").reverse().join("") : n[1],
          l = !!n && o,
          u =
            ((l = !!l && o.replace(/^[-\'\u02bb\u2019\s]*(.).*$/, "$1")),
            !!l && l.toUpperCase() !== l);
        if (!u) break;
        (s = e
          ? (a.push(s.slice(-1 * o.length)), s.slice(0, -1 * o.length))
          : (a.push(s.slice(0, o.length)), s.slice(o.length))),
          (t = n[2]),
          (n = t.match(r));
      }
      if (e) {
        (t = t.split("").reverse().join("")), a.reverse();
        for (var h = 1, p = a.length; h < p; h++)
          " " == a[h].slice(0, 1) && (a[h - 1] += " ");
        for (h = 0, p = a.length; h < p; h++)
          " " == a[h].slice(0, 1) && (a[h] = a[h].slice(1));
        t = s.slice(0, t.length);
      } else t = s.slice(-1 * t.length);
      return [u, t, a];
    }
    return function (t) {
      var e = h(t.family),
        i = (e[0], e[1]),
        s = e[2];
      t.family = i;
      var r,
        a,
        n =
          ((r = s.join("")),
          (a = r.slice(-1)),
          (r = r.trim()),
          " " === a && -1 < ["'", "’"].indexOf(r.slice(-1)) && (r += " "),
          r);
      n && (t["non-dropping-particle"] = n),
        (function (t) {
          if (!t.suffix && t.given) {
            var e = t.given.match(/(\s*,!*\s*)/);
            if (e) {
              var i = t.given.indexOf(e[1]),
                s = t.given.slice(i + e[1].length),
                r = t.given.slice(i, i + e[1].length).replace(/\s*/g, "");
              "et al" !== s.replace(/\./g, "") || t["dropping-particle"]
                ? (2 === r.length && (t["comma-suffix"] = !0), (t.suffix = s))
                : ((t["dropping-particle"] = s),
                  (t["comma-dropping-particle"] = ",")),
                (t.given = t.given.slice(0, i));
            }
          }
        })(t);
      (e = h(t.given, !0)), e[0];
      var o = e[1],
        l = e[2];
      t.given = o;
      var u = l.join("").trim();
      u && (t["dropping-particle"] = u);
    };
  })());
