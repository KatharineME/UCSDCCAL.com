(window.__pleaseClosure = function ($, window) {
  "use strict";
  var console = window.console,
    defaults = {
      targetWindow: window,
      targetOrigin: "*",
      sourceOrigin: !1,
      possiblyOverriddenNativeFunctions: [],
    },
    pristineWindow,
    usePristineFunctionDefinitions = !0,
    restoreNativeFunctions;
  function getContextAndLastPathPart(e, t) {
    for (var n = t.split("."), i = 0, s = n.length - 1; i < s; i++)
      (e = e && e[n[i]]), (t = n[i + 1]);
    return { context: e, lastPathPart: t };
  }
  function overrideNativeFunctions(e) {
    if (pristineWindow && Object.defineProperty)
      return e
        .map(function (e) {
          var t = getContextAndLastPathPart(window, e);
          if (t.context) {
            var n = t.context[t.lastPathPart],
              i = getContextAndLastPathPart(pristineWindow, e),
              s = i.context[i.lastPathPart];
            try {
              Object.defineProperty(t.context, t.lastPathPart, {
                configurable: !0,
                enumerable: !1,
                get: function () {
                  return usePristineFunctionDefinitions ? s : n;
                },
                set: function (e) {
                  this === Object.prototype
                    ? (n = e)
                    : Object.defineProperty(this, t.lastPathPart, {
                        writable: !0,
                        configurable: !0,
                        enumerable: !1,
                        value: e,
                      });
                },
              });
            } catch (e) {}
            return function () {
              delete t.context[t.lastPathPart], (t.context[t.lastPathPart] = n);
            };
          }
        })
        .reduce(function (e, t) {
          return function () {
            return (e && e()) || (t && t());
          };
        }, null);
  }
  function isNode(e) {
    return e.hasOwnProperty("nodeName") && e.hasOwnProperty("nodeType");
  }
  var please = function e(t, n) {
    if (!(this instanceof e)) {
      var i = new e();
      return (i.targetWindow = t), (i.targetOrigin = n), i;
    }
  };
  please.prototype = please;
  var requests = {},
    responses = {};
  (please.requests = requests),
    (please.responses = responses),
    (please.defaults = function (e) {
      return 0 === arguments.length
        ? defaults
        : ($.extend(!0, defaults, e), please);
    }),
    (please.init = function (e) {
      return (
        (pristineWindow = $('<iframe style="display:none">')
          .appendTo("html")
          .get(0).contentWindow),
        (restoreNativeFunctions = overrideNativeFunctions(
          defaults.possiblyOverriddenNativeFunctions
        )),
        (usePristineFunctionDefinitions = !0),
        setTimeout(function () {
          usePristineFunctionDefinitions = !1;
        }, 1),
        (e = e || window).removeEventListener("message", please_messageHandler),
        e.addEventListener("message", please_messageHandler),
        please
      );
    }),
    (please.destroy = function (e) {
      return (
        (e = e || window).removeEventListener("message", please_messageHandler),
        restoreNativeFunctions && restoreNativeFunctions(),
        please
      );
    });
  var please_request = function (t) {
      return function () {
        var e = new Request(t);
        return (
          (e.targetWindow = this.targetWindow || defaults.targetWindow),
          (e.targetOrigin = this.targetOrigin || defaults.targetOrigin),
          (e.data = Array.prototype.slice.call(arguments)),
          e.send(),
          e
        );
      };
    },
    please_messageHandler = function (e) {
      if (
        ((usePristineFunctionDefinitions = !0),
        setTimeout(function () {
          usePristineFunctionDefinitions = !1;
        }, 1),
        "function" != typeof defaults.sourceOrigin || defaults.sourceOrigin(e))
      ) {
        var t;
        try {
          t = JSON.parse(e.data);
        } catch (e) {
          return;
        }
        if ("request" === t.type) {
          var n = new Response(t);
          (responses[n.id] = n.data),
            (n.targetWindow = e.source),
            (n.targetOrigin =
              "null" === e.origin ? defaults.targetOrigin : e.origin),
            n.send();
        } else
          "response" === t.type &&
            (t.data &&
              "unserializable" === t.data.type &&
              (t.data = UnserializableResponseData.create(t.data)),
            t.success
              ? requests[t.id].resolve(t.data)
              : requests[t.id].reject(new please.Error(t.data)),
            delete requests[t.id]);
      }
    };
  (please.call = please_request("call")),
    (please.set = please_request("set")),
    (please.get = please_request("get")),
    (please.eval = please_request("eval")),
    (please.$ = please_request("$")),
    (please.$ = function () {
      for (
        var e,
          t = please_request("$").apply(
            this,
            Array.prototype.slice.call(arguments)
          ),
          n = Object.keys($.fn),
          i = function (n) {
            return function () {
              var e = Array.prototype.slice.call(arguments);
              e = e.map(function (e) {
                return "function" == typeof e
                  ? e.toString()
                  : ("object" == typeof e &&
                      ($.extend(!0, {}, e),
                      (function (e) {
                        for (var t in e)
                          "function" == typeof e[t] && (e[t] = e[t].toString());
                      })(e)),
                    e);
              });
              var t = new Request("$_fn");
              return (
                (t.targetWindow = this.targetWindow || defaults.targetWindow),
                (t.targetOrigin = this.targetOrigin || defaults.targetOrigin),
                (t.data = [this, n].concat(e)),
                t.send(),
                t
              );
            };
          },
          s = 0,
          r = n.length;
        s < r;
        s++
      )
        "constructor" !== (e = n[s]) &&
          "init" !== e &&
          "promise" !== e &&
          "function" == typeof $.fn[e] &&
          (t[e] = i(e));
      var a = ["draggable", "sortable"];
      for (s = 0, r = a.length; s < r; s++) t[(e = a[s])] = i(e);
      return t;
    });
  var _please = {};
  function pathErrorHelper(e, t) {
    var n = e.length,
      i = e.slice(0, t + 1);
    return (
      i.unshift("window"),
      {
        lastPathPart: e[n - 1],
        fullPath: e.slice(0, n - 1).join("."),
        currentPath: i.join("."),
      }
    );
  }
  function Request(e) {
    this.init.apply(this, Array.prototype.slice.call(arguments));
  }
  function Response(e) {
    this.init(e);
  }
  (_please.call = function (e) {
    var n = e.split("."),
      i = window,
      s = i,
      t = Array.prototype.slice.call(arguments, 1);
    if (
      (n.forEach(function (e, t) {
        t === n.length - 1 && (i = s), (s = s && s[e]);
      }),
      "function" == typeof s)
    )
      return s.apply(i, t);
    throw new please.Error({
      name: "TypeError",
      message: "'" + e + "' is not a function",
    });
  }),
    (_please.set = function (e, i) {
      var s = e.split("."),
        r = window,
        a = s.length;
      s.forEach(function (e, t) {
        if (t === a - 1) r[e] = i;
        else if (null == (r = r[e])) {
          var n = pathErrorHelper(s, t);
          throw new please.Error({
            name: "TypeError",
            message:
              "Can not set '" +
              n.lastPathPart +
              "' on '" +
              n.fullPath +
              "', because path element '" +
              n.currentPath +
              "' is null or undefined",
          });
        }
      });
    }),
    (_please.get = function (e) {
      var i = e.split("."),
        s = window;
      return (
        i.forEach(function (e, t) {
          if (null == s) {
            var n = pathErrorHelper(i, t - 1);
            throw new please.Error({
              name: "TypeError",
              message:
                "Can not get '" +
                n.lastPathPart +
                "' of '" +
                n.fullPath +
                "', because path element '" +
                n.currentPath +
                "' is null or undefined",
            });
          }
          s = s[e];
        }),
        s
      );
    }),
    (_please.eval = function (e) {
      return $.globalEval(e);
    }),
    (_please.$ = function () {
      return $.apply($, Array.prototype.slice.call(arguments));
    }),
    (_please.$_fn = function (parentReq, funcName) {
      var $jq = responses[parentReq.id];
      if (!($jq instanceof $)) return null;
      for (
        var args = Array.prototype.slice.call(arguments, 2),
          mFn = function (arg) {
            if ("string" == typeof arg)
              try {
                var fn;
                return eval("fn = " + arg), "function" == typeof fn ? fn : arg;
              } catch (e) {
                return arg;
              }
            return (
              "object" == typeof arg && mapObjectStringsToFunctions(arg), arg
            );
          },
          i = 0,
          retval;
        i < args.length;
        i++
      )
        args[i] = mFn(args[i]);
      return (
        (retval =
          "length" === funcName ? $jq.length : $jq[funcName].apply($jq, args)),
        retval
      );
    });
  var lastRequestId = 0;
  function isPromise(e) {
    return e && "function" == typeof e.then;
  }
  function UnserializableResponseData(e) {
    (this.id = e), (this.type = "unserializable");
  }
  (Request.prototype = {
    init: function (e) {
      $.extend(this, $.Deferred()),
        (this.id = lastRequestId++),
        (this.name = e),
        (this.data = Array.prototype.slice.call(arguments)),
        (this.type = "request"),
        (requests[this.id] = this);
    },
    send: function () {
      (usePristineFunctionDefinitions = !0),
        setTimeout(function () {
          usePristineFunctionDefinitions = !1;
        }, 1),
        (this.targetWindow = this.targetWindow || defaults.targetWindow),
        (this.targetOrigin = this.targetOrigin || defaults.targetOrigin);
      try {
        var e = this.data,
          t = e instanceof $ ? e.toArray() : e;
        if (t && t.length && isNode(t[0])) throw "";
        this.targetWindow.postMessage(JSON.stringify(this), this.targetOrigin);
      } catch (e) {
        this.targetWindow.postMessage(
          new UnserializableResponseData(this.id),
          this.targetOrigin
        );
      }
    },
    perform: function () {
      return _please[this.name].apply(this, this.data);
    },
    toJSON: function () {
      return { id: this.id, name: this.name, type: this.type, data: this.data };
    },
  }),
    (Request.create = function (e) {
      return $.extend(new Request(), e);
    }),
    (Response.prototype = {
      init: function (e) {
        (this.id = e.id), (this.name = e.name), (this.type = "response");
        try {
          (this.data = Request.create(e).perform()), (this.success = !0);
        } catch (e) {
          (this.data = new please.Error(e)), (this.success = !1);
        }
      },
      send: function () {
        (usePristineFunctionDefinitions = !0),
          setTimeout(function () {
            usePristineFunctionDefinitions = !1;
          }, 1),
          (this.targetWindow = this.targetWindow || defaults.targetWindow),
          (this.targetOrigin = this.targetOrigin || defaults.targetOrigin);
        var e = this.data,
          t = this;
        try {
          var n = e instanceof $ ? e.toArray() : e;
          if (n && n.length && isNode(n[0])) throw "";
          var i = function () {
            var e = JSON.stringify(t);
            t.targetWindow.postMessage(e, t.targetOrigin);
          };
          isPromise(this.data)
            ? this.data.then(
                function (e) {
                  (t.data = e), (t.success = !0), i();
                },
                function (e) {
                  (e = e || new Error("Promise rejected without given error")),
                    (t.data = new please.Error(e)),
                    (t.success = !1),
                    i();
                }
              )
            : i();
        } catch (e) {
          (this.data = new UnserializableResponseData(this.id)), i();
        } finally {
          if (!this.success) throw this.data.error;
        }
      },
      toJSON: function () {
        return {
          id: this.id,
          name: this.name,
          type: this.type,
          data: this.data,
          success: this.success,
        };
      },
    }),
    (UnserializableResponseData.create = function (e) {
      return $.extend(new UnserializableResponseData(), e);
    }),
    (please.Error = function (e) {
      (this.error = e),
        $.extend(this, e),
        (this.name = e.name),
        (this.message = e.message),
        (this.number = e.number),
        (this.description = e.description),
        (this.fileName = e.fileName),
        (this.lineNumber = e.lineNumber),
        (this.stack = e.stack);
    }),
    (please.Request = Request),
    (please.Response = Response),
    (please.UnserializableResponseData = UnserializableResponseData),
    (please._please = _please);
  var oldPlease = window.please;
  (please.noConflict = function () {
    return (
      void 0 !== oldPlease ? (window.please = oldPlease) : delete window.please,
      please
    );
  }),
    (window.please = please);
})(jQuery, window);
