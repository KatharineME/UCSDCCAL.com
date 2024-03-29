var Base64 = {
    _keyStr:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    encode: function (e) {
      try {
        var t,
          r,
          m,
          a,
          n,
          i,
          l,
          o = "",
          s = 0;
        for (e = Base64._utf8_encode(e); s < e.length; )
          (t = e.charCodeAt(s++)),
            (r = e.charCodeAt(s++)),
            (m = e.charCodeAt(s++)),
            (a = t >> 2),
            (n = ((3 & t) << 4) | (r >> 4)),
            (i = ((15 & r) << 2) | (m >> 6)),
            (l = 63 & m),
            isNaN(r) ? (i = l = 64) : isNaN(m) && (l = 64),
            (o =
              o +
              this._keyStr.charAt(a) +
              this._keyStr.charAt(n) +
              this._keyStr.charAt(i) +
              this._keyStr.charAt(l));
        return o;
      } catch (i) {
        return "";
      }
    },
    decode: function (e) {
      var t,
        r,
        m,
        a,
        n,
        i,
        l,
        o = "",
        s = 0;
      for (e = e.replace(/[^A-Za-z0-9\+\/\=]/g, ""); s < e.length; )
        (a = this._keyStr.indexOf(e.charAt(s++))),
          (n = this._keyStr.indexOf(e.charAt(s++))),
          (i = this._keyStr.indexOf(e.charAt(s++))),
          (l = this._keyStr.indexOf(e.charAt(s++))),
          (t = (a << 2) | (n >> 4)),
          (r = ((15 & n) << 4) | (i >> 2)),
          (m = ((3 & i) << 6) | l),
          (o += String.fromCharCode(t)),
          64 != i && (o += String.fromCharCode(r)),
          64 != l && (o += String.fromCharCode(m));
      return (o = Base64._utf8_decode(o)), o;
    },
    _utf8_encode: function (e) {
      e = e.replace(/\r\n/g, "\n");
      for (var t = "", r = 0; r < e.length; r++) {
        var m = e.charCodeAt(r);
        m < 128
          ? (t += String.fromCharCode(m))
          : (127 < m && m < 2048
              ? (t += String.fromCharCode((m >> 6) | 192))
              : ((t += String.fromCharCode((m >> 12) | 224)),
                (t += String.fromCharCode(((m >> 6) & 63) | 128))),
            (t += String.fromCharCode((63 & m) | 128)));
      }
      return t;
    },
    _utf8_decode: function (e) {
      for (var t = "", r = 0, m = (c1 = c2 = 0); r < e.length; )
        (m = e.charCodeAt(r)),
          m < 128
            ? ((t += String.fromCharCode(m)), r++)
            : 191 < m && m < 224
            ? ((c2 = e.charCodeAt(r + 1)),
              (t += String.fromCharCode(((31 & m) << 6) | (63 & c2))),
              (r += 2))
            : ((c2 = e.charCodeAt(r + 1)),
              (c3 = e.charCodeAt(r + 2)),
              (t += String.fromCharCode(
                ((15 & m) << 12) | ((63 & c2) << 6) | (63 & c3)
              )),
              (r += 3));
      return t;
    },
  },
  abbreviations = {
    default: {
      "container-title": {
        "Pacific Rim Law & Policy Journal": "Pac. Rim L. & Pol’y J.",
        日本教育工学会論文誌: "日教論誌",
        "Journal of the Japan Educational Engineering Society":
          "J. Japan Educ. Engineering Soc.",
        "Applied and Environmental Microbiology":
          "Applied and Environmental Microbiology",
      },
      "collection-title": {
        "International Rescue Wildlife Series": "I.R. Wildlife Series",
      },
      authority: { "United Nations": "U.N." },
      institution: { "U.S. Bureau of the Census": "U.S. Bureau of the Census" },
      title: {},
      classic: {},
      hereinafter: {},
      nickname: {},
      place: {},
    },
    slightly_weird: {
      "container-title": {
        "Pacific Rim Law & Policy Journal": "PRL & PJ",
        日本教育工学会論文誌: "日教論",
        "Journal of the Japan Educational Engineering Society":
          "J. Japan Educ. Eng. Soc.",
        "Applied and Environmental Microbiology": "Appl'd. & Env'tal Microbio.",
      },
      "collection-title": {
        "International Rescue Wildlife Series": "I.R. Wildlife Series",
      },
      authority: { "United Nations": "U.N." },
      institution: { "U.S. Bureau of the Census": "U.S. Census Bureau" },
      title: {},
      classic: {},
      hereinafter: {},
      nickname: {},
      place: {},
    },
  },
  OLD_LOCALE =
    '<locale xml:lang="en" xmlns="http://purl.org/net/xbiblio/csl">  <style-options punctuation-in-quote="true"/>  <date form="text">    <date-part name="month" suffix=" "/>    <date-part name="day" suffix=", "/>    <date-part name="year"/>  </date>  <date form="numeric">    <date-part name="year"/>    <date-part name="month" form="numeric" prefix="-" range-delimiter="/"/>    <date-part name="day" prefix="-" range-delimiter="/"/>  </date>  <terms>    <term name="document-number-label">No.</term>    <term name="document-number-authority-suffix">Doc.</term>    <term name="un-sales-number-label">U.N. Sales No.</term>    <term name="collection-number-label">No.</term>    <term name="open-quote">“</term>    <term name="close-quote">”</term>    <term name="open-inner-quote">‘</term>    <term name="close-inner-quote">’</term>    <term name="ordinal-01">st</term>    <term name="ordinal-02">nd</term>    <term name="ordinal-03">rd</term>    <term name="ordinal-04">th</term>    <term name="long-ordinal-01">first</term>    <term name="long-ordinal-02">second</term>    <term name="long-ordinal-03">third</term>    <term name="long-ordinal-04">fourth</term>    <term name="long-ordinal-05">fifth</term>    <term name="long-ordinal-06">sixth</term>    <term name="long-ordinal-07">seventh</term>    <term name="long-ordinal-08">eighth</term>    <term name="long-ordinal-09">ninth</term>    <term name="long-ordinal-10">tenth</term>    <term name="at">at</term>    <term name="in">in</term>    <term name="ibid">ibid</term>    <term name="accessed">accessed</term>    <term name="retrieved">retrieved</term>    <term name="from">from</term>    <term name="forthcoming">forthcoming</term>    <term name="references">      <single>reference</single>      <multiple>references</multiple>    </term>    <term name="references" form="short">      <single>ref</single>      <multiple>refs</multiple>    </term>    <term name="no date">n.d.</term>    <term name="and">and</term>    <term name="et-al">et al.</term>    <term name="interview">interview</term>    <term name="letter">letter</term>    <term name="anonymous">anonymous</term>    <term name="anonymous" form="short">anon.</term>    <term name="and others">and others</term>    <term name="in press">in press</term>    <term name="online">online</term>    <term name="cited">cited</term>    <term name="internet">internet</term>    <term name="presented at">presented at the</term>    <term name="ad">AD</term>    <term name="bc">BC</term>    <term name="season-01">Spring</term>    <term name="season-02">Summer</term>    <term name="season-03">Autumn</term>    <term name="season-04">Winter</term>    <term name="with">with</term>        \x3c!-- CATEGORIES --\x3e    <term name="anthropology">anthropology</term>    <term name="astronomy">astronomy</term>    <term name="biology">biology</term>    <term name="botany">botany</term>    <term name="chemistry">chemistry</term>    <term name="engineering">engineering</term>    <term name="generic-base">generic base</term>    <term name="geography">geography</term>    <term name="geology">geology</term>    <term name="history">history</term>    <term name="humanities">humanities</term>    <term name="literature">literature</term>    <term name="math">math</term>    <term name="medicine">medicine</term>    <term name="philosophy">philosophy</term>    <term name="physics">physics</term>    <term name="psychology">psychology</term>    <term name="sociology">sociology</term>    <term name="science">science</term>    <term name="political_science">political science</term>    <term name="social_science">social science</term>    <term name="theology">theology</term>    <term name="zoology">zoology</term>        \x3c!-- LONG LOCATOR FORMS --\x3e    <term name="book">      <single>book</single>      <multiple>books</multiple>    </term>    <term name="chapter">      <single>chapter</single>      <multiple>chapters</multiple>    </term>    <term name="column">      <single>column</single>      <multiple>columns</multiple>    </term>    <term name="figure">      <single>figure</single>      <multiple>figures</multiple>    </term>    <term name="folio">      <single>folio</single>      <multiple>folios</multiple>    </term>    <term name="issue">      <single>number</single>      <multiple>numbers</multiple>    </term>    <term name="line">      <single>line</single>      <multiple>lines</multiple>    </term>    <term name="note">      <single>note</single>      <multiple>notes</multiple>    </term>    <term name="opus">      <single>opus</single>      <multiple>opera</multiple>    </term>    <term name="page">      <single>page</single>      <multiple>pages</multiple>    </term>    <term name="paragraph">      <single>paragraph</single>      <multiple>paragraph</multiple>    </term>    <term name="part">      <single>part</single>      <multiple>parts</multiple>    </term>    <term name="section">      <single>section</single>      <multiple>sections</multiple>    </term>    <term name="volume">      <single>volume</single>      <multiple>volumes</multiple>    </term>    <term name="edition">      <single>edition</single>      <multiple>editions</multiple>    </term>    <term name="verse">      <single>verse</single>      <multiple>verses</multiple>    </term>    <term name="sub verbo">      <single>sub verbo</single>      <multiple>s.vv</multiple>    </term>        \x3c!-- SHORT LOCATOR FORMS --\x3e    <term name="book" form="short">bk.</term>    <term name="chapter" form="short">chap.</term>    <term name="column" form="short">col.</term>    <term name="figure" form="short">fig.</term>    <term name="folio" form="short">f.</term>    <term name="issue" form="short">no.</term>    <term name="opus" form="short">op.</term>    <term name="page" form="short">      <single>p.</single>      <multiple>pp.</multiple>    </term>    <term name="paragraph" form="short">para.</term>    <term name="part" form="short">pt.</term>    <term name="section" form="short">sec.</term>    <term name="sub verbo" form="short">      <single>s.v.</single>      <multiple>s.vv.</multiple>    </term>    <term name="verse" form="short">      <single>v.</single>      <multiple>vv.</multiple>    </term>    <term name="volume" form="short">    \t<single>vol.</single>    \t<multiple>vols.</multiple>    </term>    <term name="edition">edition</term>    <term name="edition" form="short">ed.</term>        \x3c!-- SYMBOL LOCATOR FORMS --\x3e    <term name="paragraph" form="symbol">      <single>¶</single>      <multiple>¶¶</multiple>    </term>    <term name="section" form="symbol">      <single>§</single>      <multiple>§§</multiple>    </term>        \x3c!-- LONG ROLE FORMS --\x3e    <term name="author">      <single></single>      <multiple></multiple>    </term>    <term name="editor">      <single>editor</single>      <multiple>editors</multiple>    </term>    <term name="translator">      <single>translator</single>      <multiple>translators</multiple>    </term>        \x3c!-- SHORT ROLE FORMS --\x3e    <term name="author" form="short">      <single></single>      <multiple></multiple>    </term>    <term name="editor" form="short">      <single>ed.</single>      <multiple>eds.</multiple>    </term>    <term name="translator" form="short">      <single>tran.</single>      <multiple>trans.</multiple>    </term>        \x3c!-- VERB ROLE FORMS --\x3e    <term name="editor" form="verb">edited by</term>    <term name="translator" form="verb">translated by</term>    <term name="recipient" form="verb">to</term>    <term name="interviewer" form="verb">interview by</term>        \x3c!-- SHORT VERB ROLE FORMS --\x3e    <term name="editor" form="verb-short">ed.</term>    <term name="translator" form="verb-short">trans.</term>        \x3c!-- LONG MONTH FORMS --\x3e    <term name="month-01">January</term>    <term name="month-02">February</term>    <term name="month-03">March</term>    <term name="month-04">April</term>    <term name="month-05">May</term>    <term name="month-06">June</term>    <term name="month-07">July</term>    <term name="month-08">August</term>    <term name="month-09">September</term>    <term name="month-10">October</term>    <term name="month-11">November</term>    <term name="month-12">December</term>        \x3c!-- SHORT MONTH FORMS --\x3e    <term name="month-01" form="short">Jan.</term>    <term name="month-02" form="short">Feb.</term>    <term name="month-03" form="short">Mar.</term>    <term name="month-04" form="short">Apr.</term>\t<term name="month-05" form="short">May</term>    <term name="month-06" form="short">Jun.</term>    <term name="month-07" form="short">Jul.</term>    <term name="month-08" form="short">Aug.</term>    <term name="month-09" form="short">Sep.</term>    <term name="month-10" form="short">Oct.</term>    <term name="month-11" form="short">Nov.</term>    <term name="month-12" form="short">Dec.</term>  </terms></locale>',
  LOCALE_STR =
    '<?xml version="1.0" encoding="utf-8"?><locale xmlns="http://purl.org/net/xbiblio/csl" version="1.0" xml:lang="en-US">  <info>    <rights license="http://creativecommons.org/licenses/by-sa/3.0/">This work is licensed under a Creative Commons Attribution-ShareAlike 3.0 License</rights>    <updated>2015-10-10T23:31:02+00:00</updated>  </info>  <style-options punctuation-in-quote="true"/>  <date form="text">    <date-part name="month" suffix=" "/>    <date-part name="day" suffix=", "/>    <date-part name="year"/>  </date>  <date form="numeric">    <date-part name="month" form="numeric-leading-zeros" suffix="/"/>    <date-part name="day" form="numeric-leading-zeros" suffix="/"/>    <date-part name="year"/>  </date>  <terms>    <term name="accessed">accessed</term>    <term name="and">and</term>    <term name="and others">and others</term>    <term name="anonymous">anonymous</term>    <term name="anonymous" form="short">anon.</term>    <term name="at">at</term>    <term name="available at">available at</term>    <term name="by">by</term>    <term name="circa">circa</term>    <term name="circa" form="short">c.</term>    <term name="cited">cited</term>    <term name="edition">      <single>edition</single>      <multiple>editions</multiple>    </term>    <term name="edition" form="short">ed.</term>    <term name="et-al">et al.</term>    <term name="forthcoming">forthcoming</term>    <term name="from">from</term>    <term name="ibid">ibid.</term>    <term name="in">in</term>    <term name="in press">in press</term>    <term name="internet">internet</term>    <term name="interview">interview</term>    <term name="letter">letter</term>    <term name="no date">no date</term>    <term name="no date" form="short">n.d.</term>    <term name="online">online</term>    <term name="presented at">presented at the</term>    <term name="reference">      <single>reference</single>      <multiple>references</multiple>    </term>    <term name="reference" form="short">      <single>ref.</single>      <multiple>refs.</multiple>    </term>    <term name="retrieved">retrieved</term>    <term name="scale">scale</term>    <term name="version">version</term>    <!\'+\'-- ANNO DOMINI; BEFORE CHRIST --\'+\'>    <term name="ad">AD</term>    <term name="bc">BC</term>    <!\'+\'-- PUNCTUATION --\'+\'>    <term name="open-quote">“</term>    <term name="close-quote">”</term>    <term name="open-inner-quote">‘</term>    <term name="close-inner-quote">’</term>    <term name="page-range-delimiter">–</term>    <!\'+\'-- ORDINALS --\'+\'>    <term name="ordinal">th</term>    <term name="ordinal-01">st</term>    <term name="ordinal-02">nd</term>    <term name="ordinal-03">rd</term>    <term name="ordinal-11">th</term>    <term name="ordinal-12">th</term>    <term name="ordinal-13">th</term>    <!\'+\'-- LONG ORDINALS --\'+\'>    <term name="long-ordinal-01">first</term>    <term name="long-ordinal-02">second</term>    <term name="long-ordinal-03">third</term>    <term name="long-ordinal-04">fourth</term>    <term name="long-ordinal-05">fifth</term>    <term name="long-ordinal-06">sixth</term>    <term name="long-ordinal-07">seventh</term>    <term name="long-ordinal-08">eighth</term>    <term name="long-ordinal-09">ninth</term>    <term name="long-ordinal-10">tenth</term>    <!\'+\'-- LONG LOCATOR FORMS --\'+\'>    <term name="book">      <single>book</single>      <multiple>books</multiple>    </term>    <term name="chapter">      <single>chapter</single>      <multiple>chapters</multiple>    </term>    <term name="column">      <single>column</single>      <multiple>columns</multiple>    </term>    <term name="figure">      <single>figure</single>      <multiple>figures</multiple>    </term>    <term name="folio">      <single>folio</single>      <multiple>folios</multiple>    </term>    <term name="issue">      <single>number</single>      <multiple>numbers</multiple>    </term>    <term name="line">      <single>line</single>      <multiple>lines</multiple>    </term>    <term name="note">      <single>note</single>      <multiple>notes</multiple>    </term>    <term name="opus">      <single>opus</single>      <multiple>opera</multiple>    </term>    <term name="page">      <single>page</single>      <multiple>pages</multiple>    </term>    <term name="number-of-pages">      <single>page</single>      <multiple>pages</multiple>    </term>    <term name="paragraph">      <single>paragraph</single>      <multiple>paragraphs</multiple>    </term>    <term name="part">      <single>part</single>      <multiple>parts</multiple>    </term>    <term name="section">      <single>section</single>      <multiple>sections</multiple>    </term>    <term name="sub verbo">      <single>sub verbo</single>      <multiple>sub verbis</multiple>    </term>    <term name="verse">      <single>verse</single>      <multiple>verses</multiple>    </term>    <term name="volume">      <single>volume</single>      <multiple>volumes</multiple>    </term>    <!\'+\'-- SHORT LOCATOR FORMS --\'+\'>    <term name="book" form="short">      <single>bk.</single>      <multiple>bks.</multiple>    </term>    <term name="chapter" form="short">      <single>chap.</single>      <multiple>chaps.</multiple>    </term>    <term name="column" form="short">      <single>col.</single>      <multiple>cols.</multiple>    </term>    <term name="figure" form="short">      <single>fig.</single>      <multiple>figs.</multiple>    </term>    <term name="folio" form="short">      <single>fol.</single>      <multiple>fols.</multiple>    </term>    <term name="issue" form="short">      <single>no.</single>      <multiple>nos.</multiple>    </term>    <term name="line" form="short">      <single>l.</single>      <multiple>ll.</multiple>    </term>    <term name="note" form="short">      <single>n.</single>      <multiple>nn.</multiple>    </term>    <term name="opus" form="short">      <single>op.</single>      <multiple>opp.</multiple>    </term>    <term name="page" form="short">      <single>p.</single>      <multiple>pp.</multiple>    </term>    <term name="number-of-pages" form="short">      <single>p.</single>      <multiple>pp.</multiple>    </term>    <term name="paragraph" form="short">      <single>para.</single>      <multiple>paras.</multiple>    </term>    <term name="part" form="short">      <single>pt.</single>      <multiple>pts.</multiple>    </term>    <term name="section" form="short">      <single>sec.</single>      <multiple>secs.</multiple>    </term>    <term name="sub verbo" form="short">      <single>s.v.</single>      <multiple>s.vv.</multiple>    </term>    <term name="verse" form="short">      <single>v.</single>      <multiple>vv.</multiple>    </term>    <term name="volume" form="short">      <single>vol.</single>      <multiple>vols.</multiple>    </term>    <!\'+\'-- SYMBOL LOCATOR FORMS --\'+\'>    <term name="paragraph" form="symbol">      <single>¶</single>      <multiple>¶¶</multiple>    </term>    <term name="section" form="symbol">      <single>§</single>      <multiple>§§</multiple>    </term>    <!\'+\'-- LONG ROLE FORMS --\'+\'>    <term name="director">      <single>director</single>      <multiple>directors</multiple>    </term>    <term name="editor">      <single>editor</single>      <multiple>editors</multiple>    </term>    <term name="editorial-director">      <single>editor</single>      <multiple>editors</multiple>    </term>    <term name="illustrator">      <single>illustrator</single>      <multiple>illustrators</multiple>    </term>    <term name="translator">      <single>translator</single>      <multiple>translators</multiple>    </term>    <term name="editortranslator">      <single>editor &amp; translator</single>      <multiple>editors &amp; translators</multiple>    </term>    <!\'+\'-- SHORT ROLE FORMS --\'+\'>    <term name="director" form="short">      <single>dir.</single>      <multiple>dirs.</multiple>    </term>    <term name="editor" form="short">      <single>ed.</single>      <multiple>eds.</multiple>    </term>    <term name="editorial-director" form="short">      <single>ed.</single>      <multiple>eds.</multiple>    </term>    <term name="illustrator" form="short">      <single>ill.</single>      <multiple>ills.</multiple>    </term>    <term name="translator" form="short">      <single>tran.</single>      <multiple>trans.</multiple>    </term>    <term name="editortranslator" form="short">      <single>ed. &amp; tran.</single>      <multiple>eds. &amp; trans.</multiple>    </term>    <!\'+\'-- VERB ROLE FORMS --\'+\'>    <term name="container-author" form="verb">by</term>    <term name="director" form="verb">directed by</term>    <term name="editor" form="verb">edited by</term>    <term name="editorial-director" form="verb">edited by</term>    <term name="illustrator" form="verb">illustrated by</term>    <term name="interviewer" form="verb">interview by</term>    <term name="recipient" form="verb">to</term>    <term name="reviewed-author" form="verb">by</term>    <term name="translator" form="verb">translated by</term>    <term name="editortranslator" form="verb">edited &amp; translated by</term>    <!\'+\'-- SHORT VERB ROLE FORMS --\'+\'>    <term name="director" form="verb-short">dir. by</term>    <term name="editor" form="verb-short">ed. by</term>    <term name="editorial-director" form="verb-short">ed. by</term>    <term name="illustrator" form="verb-short">illus. by</term>    <term name="translator" form="verb-short">trans. by</term>    <term name="editortranslator" form="verb-short">ed. &amp; trans. by</term>    <!\'+\'-- LONG MONTH FORMS --\'+\'>    <term name="month-01">January</term>    <term name="month-02">February</term>    <term name="month-03">March</term>    <term name="month-04">April</term>    <term name="month-05">May</term>    <term name="month-06">June</term>    <term name="month-07">July</term>    <term name="month-08">August</term>    <term name="month-09">September</term>    <term name="month-10">October</term>    <term name="month-11">November</term>    <term name="month-12">December</term>    <!\'+\'-- SHORT MONTH FORMS --\'+\'>    <term name="month-01" form="short">Jan.</term>    <term name="month-02" form="short">Feb.</term>    <term name="month-03" form="short">Mar.</term>    <term name="month-04" form="short">Apr.</term>    <term name="month-05" form="short">May</term>    <term name="month-06" form="short">Jun.</term>    <term name="month-07" form="short">Jul.</term>    <term name="month-08" form="short">Aug.</term>    <term name="month-09" form="short">Sep.</term>    <term name="month-10" form="short">Oct.</term>    <term name="month-11" form="short">Nov.</term>    <term name="month-12" form="short">Dec.</term>    <!\'+\'-- SEASONS --\'+\'>    <term name="season-01">Spring</term>    <term name="season-02">Summer</term>    <term name="season-03">Autumn</term>    <term name="season-04">Winter</term>  </terms></locale>',
  locale = { "en-US": LOCALE_STR, "old-locale": OLD_LOCALE },
  Sys = function (e) {
    (this.abbreviations = e),
      (this.abbrevsname = "default"),
      this.abbreviations || (this.abbreviations = {});
  };
(Sys.prototype.retrieveItem = function (e) {
  return data[e];
}),
  (Sys.prototype.retrieveLocale = function (e) {
    return "en-US" != e ? locale["old-locale"] : locale[e];
  }),
  (Sys.prototype.getAbbreviation = function (e, t, r, m, a) {
    try {
      this.abbreviations[this.abbrevsname][m][a]
        ? (t.default[m][a] = this.abbreviations[this.abbrevsname][m][a])
        : (t.default[m][a] = "");
    } catch (e) {}
  }),
  (Sys.prototype.setAbbreviations = function (e) {
    this.abbrevsname = e;
  });
var data = {},
  CWCSL = {
    testPublication: [
      {
        EntryKey: "1401.2184",
        EntryType: "article",
        fields: {
          volume: 1,
          pages: "20-50",
          authors: "Gondran, Alexandre and Amjad, Monis and Zaffar, Mehmood",
          title: "Variations on Memetic Algorithms for Graph Coloring Problems",
          year: "2014/01/08/",
        },
      },
      {
        EntryKey: "1312.5143",
        EntryType: "article",
        fields: {
          startPage: 113,
          endPage: 121,
          authors: "Fink, J.",
          title:
            "The high-energy anomaly in ARPES spectra of the cuprates-many body or matrix element effect?",
          year: "2013/12/18/",
        },
      },
      {
        EntryKey: "1402.5134",
        EntryType: "article",
        fields: {
          pages: 20,
          authors: "Yang, Hyun Seok and Mehmood, Z.",
          title: "Highly Effective Action from Large N Gauge Fields",
          year: "2014/02/20/",
        },
      },
    ],
    testStyle:
      '<?xml version="1.0" encoding="utf-8"?><style xmlns="http://purl.org/net/xbiblio/csl" class="in-text" version="1.0" demote-non-dropping-particle="sort-only" default-locale="en-US"><info><title>ACM SIG Proceedings With Long Author List</title><id>http://www.zotero.org/styles/acm-sig-proceedings-long-author-list</id><link href="http://www.zotero.org/styles/acm-sig-proceedings-long-author-list" rel="self"/><author><name>Naeem Esfahani</name><email>nesfaha2@gmu.edu</email><uri>http://mason.gmu.edu/~nesfaha2/</uri></author><contributor><name>Chris Horn</name><email>chris.horn@securedecisions.com</email></contributor><category field="science"/><category field="engineering"/><category citation-format="numeric"/><updated>2012-01-01T00:00:00+00:00</updated><link href="http://www.acm.org/sigs/publications/proceedings-templates" rel="documentation"/><rights>This work is licensed under a Creative Commons Attribution-ShareAlike 3.0 License: http://creativecommons.org/licenses/by-sa/3.0/</rights></info><macro name="author"><choose><if type="webpage"><text variable="title" suffix=":"/></if><else><names variable="author"><name name-as-sort-order="all" and="text" sort-separator=", " initialize-with="." delimiter-precedes-last="never" delimiter=", "/><label form="short" prefix=" " suffix="." text-case="lowercase" strip-periods="true"/><substitute><names variable="editor"/><names variable="translator"/></substitute></names></else></choose></macro><macro name="editor"><names variable="editor"><name initialize-with="." delimiter=", " and="text"/><label form="short" prefix=", " text-case="lowercase" suffix="." strip-periods="true"/></names></macro><citation collapse="citation-number"><sort><key variable="citation-number"/></sort><layout prefix="[" suffix="]" delimiter=", "><text variable="citation-number"/></layout></citation><bibliography entry-spacing="0" second-field-align="flush" et-al-min="15" et-al-use-first="1"><sort><key macro="author"/><key variable="title"/></sort><layout suffix="."><text variable="citation-number" prefix="[" suffix="]"/><text macro="author" suffix=" "/><date variable="issued" suffix=". "><date-part name="year"/></date><choose><if type="paper-conference"><group delimiter=". "><text variable="title"/><group delimiter=" "><text variable="container-title" font-style="italic"/><group delimiter=", "><group delimiter=", " prefix="(" suffix=")"><text variable="publisher-place"/><date variable="issued"><date-part name="month" form="short" suffix=". " strip-periods="true"/><date-part name="year"/></date></group><text variable="page"/></group></group></group></if><else-if type="article-journal"><group delimiter=". "><text variable="title"/><text variable="container-title" font-style="italic"/><group delimiter=", "><text variable="volume"/><group delimiter=" "><text variable="issue"/><date variable="issued" prefix="(" suffix=")"><date-part name="month" form="short" suffix=". " strip-periods="true"/><date-part name="year"/></date></group><text variable="page"/></group></group></else-if><else-if type="patent"><group delimiter=". "><text variable="title"/><text variable="number" prefix="U.S. Patent #"/><date variable="issued"><date-part name="month" form="short" suffix=". " strip-periods="true"/><date-part name="day" suffix=", "/><date-part name="year"/></date></group></else-if><else-if type="thesis"><group delimiter=". "><text variable="title" font-style="italic"/><text variable="archive_location" prefix="Doctoral Thesis #"/><text variable="publisher"/></group></else-if><else-if type="report"><group delimiter=". "><text variable="title" font-style="italic"/><text variable="number" prefix="Technical Report #"/><text variable="publisher"/></group></else-if><else-if type="webpage"><group delimiter=". "><text variable="URL" font-style="italic"/><date variable="accessed" prefix="Accessed: "><date-part name="year" suffix="-"/><date-part name="month" form="numeric-leading-zeros" suffix="-"/><date-part name="day" form="numeric-leading-zeros"/></date></group></else-if><else-if type="chapter paper-conference" match="any"><group delimiter=". "><text variable="title"/><text variable="container-title" font-style="italic"/><text macro="editor"/><text variable="publisher"/><text variable="page"/></group></else-if><else-if type="bill book graphic legal_case legislation motion_picture report song" match="any"><group delimiter=". "><text variable="title" font-style="italic"/><text variable="publisher"/></group></else-if><else><group delimiter=". "><text variable="title"/><text variable="container-title" font-style="italic"/><text variable="publisher"/></group></else></choose></layout></bibliography></style>',
    getNamesPart: function (e) {
      var t = {};
      if (0 <= e.indexOf(",")) {
        var r = e.split(",");
        (t.family = r[0]), (t.given = r[1].trim().split(" ")[0]);
      } else if (e.indexOf(" ")) {
        r = e.split(" ");
        (t.family = r[r.length - 1]), (t.given = "");
        for (var m = 0; m < r.length - 1; m++) t.given += r[m] + " ";
      } else (t.family = ""), (t.given = e);
      return t;
    },
    getDate: function (e) {
      var t = {},
        r = new Date(Date.parse(e)),
        m = r.getFullYear(),
        a = r.getMonth() + 1,
        n = r.getDate();
      return (t.year = m), (t.month = a), (t.day = n), t;
    },
    createCSLJson: function (e) {
      try {
        var t = e.metadata || {},
          r = t.fields || t.Fields,
          m = new Object();
        if (
          ((m.id = "cwc-" + Base64.encode(t.EntryKey + "@@" + t.EntryType)),
          (m.note = ""),
          void 0 !== r)
        ) {
          var a = {};
          for (var n in r)
            try {
              a[n.toLowerCase()] = r[n].toString();
            } catch (e) {}
          if (
            ((r = a),
            void 0 !== r.title && "" != r.title && (m.title = r.title),
            void 0 !== r.authors && "" != r.authors)
          ) {
            m.author = [];
            for (var i = r.authors.split(" and "), l = 0; l < i.length; l++) {
              var o = i[l];
              o && "" != o && m.author.push(CWCSL.getNamesPart(o));
            }
          }
          if (
            (void 0 !== r.author &&
              "" != r.author &&
              ((m.author = []), m.author.push(CWCSL.getNamesPart(r.author))),
            void 0 !== r.year && "" != r.year
              ? 4 != r.year.trim().length
                ? (m.issued = CWCSL.getDate(r.year))
                : (m.issued = { year: r.year })
              : void 0 !== r.date &&
                "" != r.date &&
                (m.issued = CWCSL.getDate(r.date)),
            void 0 !== r.pages && "" != r.pages)
          )
            if (0 <= r.pages.indexOf("-")) {
              var s = r.pages.trim().replace(/\-+/, "-").split("-");
              m.page = s[0] + (s[1] ? "-" + s[1] : "");
            } else m.page = r.pages;
          else
            void 0 !== r.startpage &&
            "" != r.startpage &&
            void 0 !== r.endpage &&
            "" != r.endpage
              ? (m.page = r.startpage + "-" + r.endpage)
              : ((void 0 !== r.startpage && "" != r.startpage) ||
                  (void 0 !== r.endpage && "" != r.endpage)) &&
                (m.page = r.startpage || r.endpage);
          void 0 !== r.volume && "" != r.volume && (m.volume = r.volume),
            void 0 !== r.issue && "" != r.issue && (m.issue = r.issue),
            void 0 !== r.journal &&
              "" != r.journal &&
              (m["container-title"] = r.journal);
        }
        void 0 !== t.EntryKey &&
          "" != t.EntryKey &&
          0 == t.EntryKey.indexOf("10.") &&
          (m.DOI = t.EntryKey),
          void 0 !== t.EntryType && "" != t.EntryType && (m.type = t.EntryType);
      } catch (e) {
        console.log(e);
      }
      return m;
    },
    getCitation: function (e, t) {
      var r = t,
        m = new Object();
      if (((m.id = "cwc-1"), (m.note = "dummy note"), (e = e.mods), e)) {
        if (
          (e.titleInfo && e.titleInfo.title && (m.title = e.titleInfo.title),
          (m.author = []),
          e.name)
        )
          for (var a = 0; a < e.name.length; a++)
            if ("personal" == e.name[a].type) {
              for (
                var n = new Object(), i = 0;
                i < e.name[a].namePart.length;
                i++
              ) {
                var l = e.name[a].namePart[i];
                switch (l.type) {
                  case "family":
                    n.family = l.__text;
                    break;
                  case "given":
                    n.given = l.__text;
                }
              }
              m.author.push(n);
            }
        if (
          (e.relatedItem &&
            "host" == e.relatedItem.type &&
            e.relatedItem.titleInfo &&
            e.relatedItem.titleInfo.title &&
            (m["container-title"] = e.relatedItem.titleInfo.title),
          e.originInfo && e.originInfo.dateIssued)
        ) {
          var o = new Date(Date.parse(e.originInfo.dateIssued)),
            s = o.getFullYear(),
            p = o.getMonth() + 1,
            u = o.getDate();
          m.issued = CWCSL.getDate(s + "-" + p + "-" + u);
        }
        var d = !1;
        if (e.part) {
          if (e.part.extent) {
            var g = e.part.extent;
            "page" == g.unit &&
              g.start &&
              g.end &&
              ((m.page = g.start + "-" + g.end), (d = !0));
          }
          if (!d && e.part.detail) {
            var h = e.part.detail;
            "page" == h.type && h.number && ((m.page = h.number), (d = !0));
          }
          if (
            !d &&
            e.relatedItem &&
            "host" == e.relatedItem.type &&
            e.relatedItem.part &&
            e.relatedItem.part.extent
          ) {
            g = e.relatedItem.part.extent;
            "page" == g.unit &&
              g.start &&
              g.end &&
              ((m.page = g.start + "-" + g.end), (d = !0));
          }
        }
        if (((d = !1), e.part && e.part.detail))
          for (a = 0; a < e.part.detail.length; a++) {
            var f = e.part.detail[a];
            if ("volume" == f.type) {
              (m.volume = f.number), (d = !0);
              break;
            }
          }
        if (
          !d &&
          e.relatedItem &&
          "host" == e.relatedItem.type &&
          e.relatedItem.part &&
          e.relatedItem.part.detail
        )
          for (a = 0; a < e.relatedItem.part.detail.length; a++) {
            f = e.relatedItem.part.detail[a];
            if ("volume" == f.type) {
              (m.volume = f.number), (d = !0);
              break;
            }
          }
        if (((d = !1), e.part && e.part.detail))
          for (a = 0; a < e.part.detail.length; a++) {
            f = e.part.detail[a];
            if ("issue" == f.type || "number" == f.type) {
              (m.issue = f.number), (d = !0);
              break;
            }
          }
        if (
          !d &&
          e.relatedItem &&
          "host" == e.relatedItem.type &&
          e.relatedItem.part &&
          e.relatedItem.part.detail
        )
          for (a = 0; a < e.relatedItem.part.detail.length; a++) {
            f = e.relatedItem.part.detail[a];
            if ("issue" == f.type || "number" == f.type) {
              (m.issue = f.number), (d = !0);
              break;
            }
          }
        if ((e.identifier && (m.DOI = e.identifier.__text), e.genre))
          for (a = 0; a < e.genre.length; a++) {
            var c = e.genre[a];
            c.authority && "colwiz" == c.authority && (m.type = c.__text);
          }
      }
      data["cwc-1"] = m;
      var b = new Sys(abbreviations),
        y = new CSL.Engine(b, r);
      y.appendCitationCluster({
        citationItems: [{ id: "cwc-1" }],
        properties: { noteIndex: 1 },
      });
      var v = y.makeBibliography();
      return (
        v &&
          v.length &&
          v[1].length &&
          (v = v[0].bibstart + v[1].join("") + v[0].bibend),
        v
      );
    },
    getHTML: function (e, t) {
      if (void 0 !== e || e.length || void 0 !== t) {
        for (
          var r = new Sys(abbreviations),
            m = new CSL.Engine(r, t),
            a = [],
            n = 0;
          n < e.length;
          n++
        )
          a.push({ id: e[n].id });
        var i = {
            citationID: 0,
            citationItems: a,
            properties: { noteIndex: 1 },
          },
          l = m.appendCitationCluster(i),
          o = m.makeBibliography();
        return (
          o &&
            o.length &&
            o[1].length &&
            (o = o[0].bibstart + o[1].join("") + o[0].bibend),
          (data = {}),
          { bibliography: o, citation: l[0][1] }
        );
      }
    },
    getCitationHTML: function (e, t) {
      var r = e,
        m = [];
      if (r.length)
        for (var a = 0; a < r.length; a++) {
          var n = CWCSL.createCSLJson({ metadata: r[a] });
          (data[n.id] = n), m.push(n);
        }
      else {
        n = CWCSL.createCSLJson({ metadata: r });
        (data[n.id] = n), m.push(n);
      }
      return CWCSL.getHTML(m, t);
    },
    testCitationHTML: function () {
      var e = this.testPublication,
        t = [];
      if (e.length)
        for (var r = 0; r < e.length; r++) {
          var m = CWCSL.createCSLJson({ metadata: e[r] });
          (data[m.id] = m), t.push(m);
        }
      else {
        m = CWCSL.createCSLJson({ metadata: e });
        (data[m.id] = m), t.push(m);
      }
      document.body.innerHTML += CWCSL.getHTML(t, this.testStyle).bibliography;
    },
  };
