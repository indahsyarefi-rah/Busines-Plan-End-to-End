import { createVisualPlans } from "./visual-plans.js";
const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f || (m.f = ["assets/87d65ac41dd7/plan-report.js", "assets/87d65ac41dd7/report.js"]),
) => i.map((i) => d[i]);
(function () {
  const i = document.createElement("link").relList;
  if (i && i.supports && i.supports("modulepreload")) return;
  for (const f of document.querySelectorAll('link[rel="modulepreload"]')) c(f);
  new MutationObserver((f) => {
    for (const m of f)
      if (m.type === "childList")
        for (const h of m.addedNodes)
          h.tagName === "LINK" && h.rel === "modulepreload" && c(h);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(f) {
    const m = {};
    return (
      f.integrity && (m.integrity = f.integrity),
      f.referrerPolicy && (m.referrerPolicy = f.referrerPolicy),
      f.crossOrigin === "use-credentials"
        ? (m.credentials = "include")
        : f.crossOrigin === "anonymous"
          ? (m.credentials = "omit")
          : (m.credentials = "same-origin"),
      m
    );
  }
  function c(f) {
    if (f.ep) return;
    f.ep = !0;
    const m = r(f);
    fetch(f.href, m);
  }
})();
var wx =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
      ? window
      : typeof global < "u"
        ? global
        : typeof self < "u"
          ? self
          : {};
function j1(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default")
    ? n.default
    : n;
}
var Po = { exports: {} },
  cu = {};
var pg;
function _1() {
  if (pg) return cu;
  pg = 1;
  var n = Symbol.for("react.transitional.element"),
    i = Symbol.for("react.fragment");
  function r(c, f, m) {
    var h = null;
    if (
      (m !== void 0 && (h = "" + m),
      f.key !== void 0 && (h = "" + f.key),
      "key" in f)
    ) {
      m = {};
      for (var g in f) g !== "key" && (m[g] = f[g]);
    } else m = f;
    return (
      (f = m.ref),
      { $$typeof: n, type: c, key: h, ref: f !== void 0 ? f : null, props: m }
    );
  }
  return ((cu.Fragment = i), (cu.jsx = r), (cu.jsxs = r), cu);
}
var gg;
function S1() {
  return (gg || ((gg = 1), (Po.exports = _1())), Po.exports);
}
var o = S1(),
  Fo = { exports: {} },
  re = {};
var vg;
function x1() {
  if (vg) return re;
  vg = 1;
  var n = Symbol.for("react.transitional.element"),
    i = Symbol.for("react.portal"),
    r = Symbol.for("react.fragment"),
    c = Symbol.for("react.strict_mode"),
    f = Symbol.for("react.profiler"),
    m = Symbol.for("react.consumer"),
    h = Symbol.for("react.context"),
    g = Symbol.for("react.forward_ref"),
    y = Symbol.for("react.suspense"),
    v = Symbol.for("react.memo"),
    b = Symbol.for("react.lazy"),
    k = Symbol.for("react.activity"),
    T = Symbol.for("react.view_transition"),
    C = Symbol.iterator;
  function M(x) {
    return x === null || typeof x != "object"
      ? null
      : ((x = (C && x[C]) || x["@@iterator"]),
        typeof x == "function" ? x : null);
  }
  var q = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    L = Object.assign,
    D = {};
  function X(x, H, G) {
    ((this.props = x),
      (this.context = H),
      (this.refs = D),
      (this.updater = G || q));
  }
  ((X.prototype.isReactComponent = {}),
    (X.prototype.setState = function (x, H) {
      if (typeof x != "object" && typeof x != "function" && x != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, x, H, "setState");
    }),
    (X.prototype.forceUpdate = function (x) {
      this.updater.enqueueForceUpdate(this, x, "forceUpdate");
    }));
  function ye() {}
  ye.prototype = X.prototype;
  function Ae(x, H, G) {
    ((this.props = x),
      (this.context = H),
      (this.refs = D),
      (this.updater = G || q));
  }
  var de = (Ae.prototype = new ye());
  ((de.constructor = Ae), L(de, X.prototype), (de.isPureReactComponent = !0));
  var ce = Array.isArray;
  function ae() {}
  var se = { H: null, A: null, T: null, S: null },
    ct = Object.prototype.hasOwnProperty;
  function Fe(x, H, G) {
    var P = G.ref;
    return {
      $$typeof: n,
      type: x,
      key: H,
      ref: P !== void 0 ? P : null,
      props: G,
    };
  }
  function Se(x, H) {
    return Fe(x.type, H, x.props);
  }
  function Ke(x) {
    return typeof x == "object" && x !== null && x.$$typeof === n;
  }
  function he(x) {
    var H = { "=": "=0", ":": "=2" };
    return (
      "$" +
      x.replace(/[=:]/g, function (G) {
        return H[G];
      })
    );
  }
  var Wt = /\/+/g;
  function We(x, H) {
    return typeof x == "object" && x !== null && x.key != null
      ? he("" + x.key)
      : H.toString(36);
  }
  function $(x) {
    switch (x.status) {
      case "fulfilled":
        return x.value;
      case "rejected":
        throw x.reason;
      default:
        switch (
          (typeof x.status == "string"
            ? x.then(ae, ae)
            : ((x.status = "pending"),
              x.then(
                function (H) {
                  x.status === "pending" &&
                    ((x.status = "fulfilled"), (x.value = H));
                },
                function (H) {
                  x.status === "pending" &&
                    ((x.status = "rejected"), (x.reason = H));
                },
              )),
          x.status)
        ) {
          case "fulfilled":
            return x.value;
          case "rejected":
            throw x.reason;
        }
    }
    throw x;
  }
  function ne(x, H, G, P, pe) {
    var _e = typeof x;
    (_e === "undefined" || _e === "boolean") && (x = null);
    var xe = !1;
    if (x === null) xe = !0;
    else
      switch (_e) {
        case "bigint":
        case "string":
        case "number":
          xe = !0;
          break;
        case "object":
          switch (x.$$typeof) {
            case n:
            case i:
              xe = !0;
              break;
            case b:
              return ((xe = x._init), ne(xe(x._payload), H, G, P, pe));
          }
      }
    if (xe)
      return (
        (pe = pe(x)),
        (xe = P === "" ? "." + We(x, 0) : P),
        ce(pe)
          ? ((G = ""),
            xe != null && (G = xe.replace(Wt, "$&/") + "/"),
            ne(pe, H, G, "", function (zt) {
              return zt;
            }))
          : pe != null &&
            (Ke(pe) &&
              (pe = Se(
                pe,
                G +
                  (pe.key == null || (x && x.key === pe.key)
                    ? ""
                    : ("" + pe.key).replace(Wt, "$&/") + "/") +
                  xe,
              )),
            H.push(pe)),
        1
      );
    xe = 0;
    var J = P === "" ? "." : P + ":";
    if (ce(x))
      for (var ue = 0; ue < x.length; ue++)
        ((P = x[ue]), (_e = J + We(P, ue)), (xe += ne(P, H, G, _e, pe)));
    else if (((ue = M(x)), typeof ue == "function"))
      for (x = ue.call(x), ue = 0; !(P = x.next()).done;)
        ((P = P.value), (_e = J + We(P, ue++)), (xe += ne(P, H, G, _e, pe)));
    else if (_e === "object") {
      if (typeof x.then == "function") return ne($(x), H, G, P, pe);
      throw (
        (H = String(x)),
        Error(
          "Objects are not valid as a React child (found: " +
            (H === "[object Object]"
              ? "object with keys {" + Object.keys(x).join(", ") + "}"
              : H) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    }
    return xe;
  }
  function te(x, H, G) {
    if (x == null) return x;
    var P = [],
      pe = 0;
    return (
      ne(x, P, "", "", function (_e) {
        return H.call(G, _e, pe++);
      }),
      P
    );
  }
  function we(x) {
    if (x._status === -1) {
      var H = x._result,
        G = H();
      (G.then(
        function (P) {
          (x._status === 0 || x._status === -1) &&
            ((x._status = 1),
            (x._result = P),
            G.status === void 0 && ((G.status = "fulfilled"), (G.value = P)));
        },
        function (P) {
          (x._status === 0 || x._status === -1) &&
            ((x._status = 2),
            (x._result = P),
            G.status === void 0 && ((G.status = "rejected"), (G.reason = P)));
        },
      ),
        x._status === -1 && ((x._status = 0), (x._result = G)));
    }
    if (x._status === 1) return x._result.default;
    throw x._result;
  }
  var Ne =
    typeof reportError == "function"
      ? reportError
      : function (x) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var H = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof x == "object" &&
                x !== null &&
                typeof x.message == "string"
                  ? String(x.message)
                  : String(x),
              error: x,
            });
            if (!window.dispatchEvent(H)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", x);
            return;
          }
          console.error(x);
        };
  function xt(x) {
    var H = se.T,
      G = {};
    ((G.types = H !== null ? H.types : null), (se.T = G));
    try {
      var P = x(),
        pe = se.S;
      (pe !== null && pe(G, P),
        typeof P == "object" &&
          P !== null &&
          typeof P.then == "function" &&
          P.then(ae, Ne));
    } catch (_e) {
      Ne(_e);
    } finally {
      (H !== null && G.types !== null && (H.types = G.types), (se.T = H));
    }
  }
  function je(x) {
    var H = se.T;
    if (H !== null) {
      var G = H.types;
      G === null ? (H.types = [x]) : G.indexOf(x) === -1 && G.push(x);
    } else xt(je.bind(null, x));
  }
  var Ua = {
    map: te,
    forEach: function (x, H, G) {
      te(
        x,
        function () {
          H.apply(this, arguments);
        },
        G,
      );
    },
    count: function (x) {
      var H = 0;
      return (
        te(x, function () {
          H++;
        }),
        H
      );
    },
    toArray: function (x) {
      return (
        te(x, function (H) {
          return H;
        }) || []
      );
    },
    only: function (x) {
      if (!Ke(x))
        throw Error(
          "React.Children.only expected to receive a single React element child.",
        );
      return x;
    },
  };
  return (
    (re.Activity = k),
    (re.Children = Ua),
    (re.Component = X),
    (re.Fragment = r),
    (re.Profiler = f),
    (re.PureComponent = Ae),
    (re.StrictMode = c),
    (re.Suspense = y),
    (re.ViewTransition = T),
    (re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = se),
    (re.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (x) {
        return se.H.useMemoCache(x);
      },
    }),
    (re.addTransitionType = je),
    (re.cache = function (x) {
      return function () {
        return x.apply(null, arguments);
      };
    }),
    (re.cacheSignal = function () {
      return null;
    }),
    (re.cloneElement = function (x, H, G) {
      if (x == null)
        throw Error(
          "The argument must be a React element, but you passed " + x + ".",
        );
      var P = L({}, x.props),
        pe = x.key;
      if (H != null)
        for (_e in (H.key !== void 0 && (pe = "" + H.key), H))
          !ct.call(H, _e) ||
            _e === "key" ||
            _e === "__self" ||
            _e === "__source" ||
            (_e === "ref" && H.ref === void 0) ||
            (P[_e] = H[_e]);
      var _e = arguments.length - 2;
      if (_e === 1) P.children = G;
      else if (1 < _e) {
        for (var xe = Array(_e), J = 0; J < _e; J++) xe[J] = arguments[J + 2];
        P.children = xe;
      }
      return Fe(x.type, pe, P);
    }),
    (re.createContext = function (x) {
      return (
        (x = {
          $$typeof: h,
          _currentValue: x,
          _currentValue2: x,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (x.Provider = x),
        (x.Consumer = { $$typeof: m, _context: x }),
        x
      );
    }),
    (re.createElement = function (x, H, G) {
      var P,
        pe = {},
        _e = null;
      if (H != null)
        for (P in (H.key !== void 0 && (_e = "" + H.key), H))
          ct.call(H, P) &&
            P !== "key" &&
            P !== "__self" &&
            P !== "__source" &&
            (pe[P] = H[P]);
      var xe = arguments.length - 2;
      if (xe === 1) pe.children = G;
      else if (1 < xe) {
        for (var J = Array(xe), ue = 0; ue < xe; ue++)
          J[ue] = arguments[ue + 2];
        pe.children = J;
      }
      if (x && x.defaultProps)
        for (P in ((xe = x.defaultProps), xe))
          pe[P] === void 0 && (pe[P] = xe[P]);
      return Fe(x, _e, pe);
    }),
    (re.createRef = function () {
      return { current: null };
    }),
    (re.forwardRef = function (x) {
      return { $$typeof: g, render: x };
    }),
    (re.isValidElement = Ke),
    (re.lazy = function (x) {
      return { $$typeof: b, _payload: { _status: -1, _result: x }, _init: we };
    }),
    (re.memo = function (x, H) {
      return { $$typeof: v, type: x, compare: H === void 0 ? null : H };
    }),
    (re.startTransition = xt),
    (re.unstable_useCacheRefresh = function () {
      return se.H.useCacheRefresh();
    }),
    (re.use = function (x) {
      return se.H.use(x);
    }),
    (re.useActionState = function (x, H, G) {
      return se.H.useActionState(x, H, G);
    }),
    (re.useCallback = function (x, H) {
      return se.H.useCallback(x, H);
    }),
    (re.useContext = function (x) {
      return se.H.useContext(x);
    }),
    (re.useDebugValue = function () {}),
    (re.useDeferredValue = function (x, H) {
      return se.H.useDeferredValue(x, H);
    }),
    (re.useEffect = function (x, H) {
      return se.H.useEffect(x, H);
    }),
    (re.useEffectEvent = function (x) {
      return se.H.useEffectEvent(x);
    }),
    (re.useId = function () {
      return se.H.useId();
    }),
    (re.useImperativeHandle = function (x, H, G) {
      return se.H.useImperativeHandle(x, H, G);
    }),
    (re.useInsertionEffect = function (x, H) {
      return se.H.useInsertionEffect(x, H);
    }),
    (re.useLayoutEffect = function (x, H) {
      return se.H.useLayoutEffect(x, H);
    }),
    (re.useMemo = function (x, H) {
      return se.H.useMemo(x, H);
    }),
    (re.useOptimistic = function (x, H) {
      return se.H.useOptimistic(x, H);
    }),
    (re.useReducer = function (x, H, G) {
      return se.H.useReducer(x, H, G);
    }),
    (re.useRef = function (x) {
      return se.H.useRef(x);
    }),
    (re.useState = function (x) {
      return se.H.useState(x);
    }),
    (re.useSyncExternalStore = function (x, H, G) {
      return se.H.useSyncExternalStore(x, H, G);
    }),
    (re.useTransition = function () {
      return se.H.useTransition();
    }),
    (re.version = "19.3.1"),
    re
  );
}
var yg;
function Af() {
  return (yg || ((yg = 1), (Fo.exports = x1())), Fo.exports);
}
var ie = Af();
const z1 = j1(ie);
var Wo = { exports: {} },
  ou = {},
  ef = { exports: {} },
  tf = {};
var bg;
function N1() {
  return (
    bg ||
      ((bg = 1),
      (function (n) {
        function i($, ne) {
          var te = $.length;
          $.push(ne);
          e: for (; 0 < te;) {
            var we = (te - 1) >>> 1,
              Ne = $[we];
            if (0 < f(Ne, ne)) (($[we] = ne), ($[te] = Ne), (te = we));
            else break e;
          }
        }
        function r($) {
          return $.length === 0 ? null : $[0];
        }
        function c($) {
          if ($.length === 0) return null;
          var ne = $[0],
            te = $.pop();
          if (te !== ne) {
            $[0] = te;
            e: for (var we = 0, Ne = $.length, xt = Ne >>> 1; we < xt;) {
              var je = 2 * (we + 1) - 1,
                Ua = $[je],
                x = je + 1,
                H = $[x];
              if (0 > f(Ua, te))
                x < Ne && 0 > f(H, Ua)
                  ? (($[we] = H), ($[x] = te), (we = x))
                  : (($[we] = Ua), ($[je] = te), (we = je));
              else if (x < Ne && 0 > f(H, te))
                (($[we] = H), ($[x] = te), (we = x));
              else break e;
            }
          }
          return ne;
        }
        function f($, ne) {
          var te = $.sortIndex - ne.sortIndex;
          return te !== 0 ? te : $.id - ne.id;
        }
        if (
          ((n.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var m = performance;
          n.unstable_now = function () {
            return m.now();
          };
        } else {
          var h = Date,
            g = h.now();
          n.unstable_now = function () {
            return h.now() - g;
          };
        }
        var y = [],
          v = [],
          b = 1,
          k = null,
          T = 3,
          C = !1,
          M = !1,
          q = !1,
          L = !1,
          D = typeof setTimeout == "function" ? setTimeout : null,
          X = typeof clearTimeout == "function" ? clearTimeout : null,
          ye = typeof setImmediate < "u" ? setImmediate : null;
        function Ae($) {
          for (var ne = r(v); ne !== null;) {
            if (ne.callback === null) c(v);
            else if (ne.startTime <= $)
              (c(v), (ne.sortIndex = ne.expirationTime), i(y, ne));
            else break;
            ne = r(v);
          }
        }
        function de($) {
          if (((q = !1), Ae($), !M))
            if (r(y) !== null) ((M = !0), ce || ((ce = !0), Ke()));
            else {
              var ne = r(v);
              ne !== null && We(de, ne.startTime - $);
            }
        }
        var ce = !1,
          ae = -1,
          se = 5,
          ct = -1;
        function Fe() {
          return L ? !0 : !(n.unstable_now() - ct < se);
        }
        function Se() {
          if (((L = !1), ce)) {
            var $ = n.unstable_now();
            ct = $;
            var ne = !0;
            try {
              e: {
                ((M = !1), q && ((q = !1), X(ae), (ae = -1)), (C = !0));
                var te = T;
                try {
                  t: {
                    for (
                      Ae($), k = r(y);
                      k !== null && !(k.expirationTime > $ && Fe());
                    ) {
                      var we = k.callback;
                      if (typeof we == "function") {
                        ((k.callback = null), (T = k.priorityLevel));
                        var Ne = we(k.expirationTime <= $);
                        if ((($ = n.unstable_now()), typeof Ne == "function")) {
                          ((k.callback = Ne), Ae($), (ne = !0));
                          break t;
                        }
                        (k === r(y) && c(y), Ae($));
                      } else c(y);
                      k = r(y);
                    }
                    if (k !== null) ne = !0;
                    else {
                      var xt = r(v);
                      (xt !== null && We(de, xt.startTime - $), (ne = !1));
                    }
                  }
                  break e;
                } finally {
                  ((k = null), (T = te), (C = !1));
                }
                ne = void 0;
              }
            } finally {
              ne ? Ke() : (ce = !1);
            }
          }
        }
        var Ke;
        if (typeof ye == "function")
          Ke = function () {
            ye(Se);
          };
        else if (typeof MessageChannel < "u") {
          var he = new MessageChannel(),
            Wt = he.port2;
          ((he.port1.onmessage = Se),
            (Ke = function () {
              Wt.postMessage(null);
            }));
        } else
          Ke = function () {
            D(Se, 0);
          };
        function We($, ne) {
          ae = D(function () {
            $(n.unstable_now());
          }, ne);
        }
        ((n.unstable_IdlePriority = 5),
          (n.unstable_ImmediatePriority = 1),
          (n.unstable_LowPriority = 4),
          (n.unstable_NormalPriority = 3),
          (n.unstable_Profiling = null),
          (n.unstable_UserBlockingPriority = 2),
          (n.unstable_cancelCallback = function ($) {
            $.callback = null;
          }),
          (n.unstable_forceFrameRate = function ($) {
            0 > $ || 125 < $
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (se = 0 < $ ? Math.floor(1e3 / $) : 5);
          }),
          (n.unstable_getCurrentPriorityLevel = function () {
            return T;
          }),
          (n.unstable_next = function ($) {
            switch (T) {
              case 1:
              case 2:
              case 3:
                var ne = 3;
                break;
              default:
                ne = T;
            }
            var te = T;
            T = ne;
            try {
              return $();
            } finally {
              T = te;
            }
          }),
          (n.unstable_requestPaint = function () {
            L = !0;
          }),
          (n.unstable_runWithPriority = function ($, ne) {
            switch ($) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                $ = 3;
            }
            var te = T;
            T = $;
            try {
              return ne();
            } finally {
              T = te;
            }
          }),
          (n.unstable_scheduleCallback = function ($, ne, te) {
            var we = n.unstable_now();
            switch (
              (typeof te == "object" && te !== null
                ? ((te = te.delay),
                  (te = typeof te == "number" && 0 < te ? we + te : we))
                : (te = we),
              $)
            ) {
              case 1:
                var Ne = -1;
                break;
              case 2:
                Ne = 250;
                break;
              case 5:
                Ne = 1073741823;
                break;
              case 4:
                Ne = 1e4;
                break;
              default:
                Ne = 5e3;
            }
            return (
              (Ne = te + Ne),
              ($ = {
                id: b++,
                callback: ne,
                priorityLevel: $,
                startTime: te,
                expirationTime: Ne,
                sortIndex: -1,
              }),
              te > we
                ? (($.sortIndex = te),
                  i(v, $),
                  r(y) === null &&
                    $ === r(v) &&
                    (q ? (X(ae), (ae = -1)) : (q = !0), We(de, te - we)))
                : (($.sortIndex = Ne),
                  i(y, $),
                  M || C || ((M = !0), ce || ((ce = !0), Ke()))),
              $
            );
          }),
          (n.unstable_shouldYield = Fe),
          (n.unstable_wrapCallback = function ($) {
            var ne = T;
            return function () {
              var te = T;
              T = ne;
              try {
                return $.apply(this, arguments);
              } finally {
                T = te;
              }
            };
          }));
      })(tf)),
    tf
  );
}
var kg;
function T1() {
  return (kg || ((kg = 1), (ef.exports = N1())), ef.exports);
}
var af = { exports: {} },
  jt = {};
var jg;
function E1() {
  if (jg) return jt;
  jg = 1;
  var n = Af();
  function i(b) {
    var k = "https://react.dev/errors/" + b;
    if (1 < arguments.length) {
      k += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var T = 2; T < arguments.length; T++)
        k += "&args[]=" + encodeURIComponent(arguments[T]);
    }
    return (
      "Minified React error #" +
      b +
      "; visit " +
      k +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function r() {}
  var c = {
      d: {
        f: r,
        r: function () {
          throw Error(i(522));
        },
        D: r,
        C: r,
        L: r,
        m: r,
        X: r,
        S: r,
        M: r,
      },
      p: 0,
      findDOMNode: null,
    },
    f = Symbol.for("react.portal"),
    m = Symbol.for("react.recoverable"),
    h = Symbol.for("react.optimistic_key");
  function g(b, k, T) {
    var C =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: f,
      key: C == null ? null : C === h ? h : "" + C,
      children: b,
      containerInfo: k,
      implementation: T,
    };
  }
  var y = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function v(b, k) {
    if (b === "font") return "";
    if (typeof k == "string") return k === "use-credentials" ? k : "";
  }
  return (
    (jt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = c),
    (jt.browser = function (b) {
      return { $$typeof: m, _reason: b };
    }),
    (jt.createPortal = function (b, k) {
      var T =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!k || (k.nodeType !== 1 && k.nodeType !== 9 && k.nodeType !== 11))
        throw Error(i(299));
      return g(b, k, null, T);
    }),
    (jt.flushSync = function (b) {
      var k = y.T,
        T = c.p;
      try {
        if (((y.T = null), (c.p = 2), b)) return b();
      } finally {
        ((y.T = k), (c.p = T), c.d.f());
      }
    }),
    (jt.preconnect = function (b, k) {
      typeof b == "string" &&
        (k
          ? ((k = k.crossOrigin),
            (k =
              typeof k == "string"
                ? k === "use-credentials"
                  ? k
                  : ""
                : void 0))
          : (k = null),
        c.d.C(b, k));
    }),
    (jt.prefetchDNS = function (b) {
      typeof b == "string" && c.d.D(b);
    }),
    (jt.preinit = function (b, k) {
      if (typeof b == "string" && k && typeof k.as == "string") {
        var T = k.as,
          C = v(T, k.crossOrigin),
          M = typeof k.integrity == "string" ? k.integrity : void 0,
          q = typeof k.fetchPriority == "string" ? k.fetchPriority : void 0;
        T === "style"
          ? c.d.S(b, typeof k.precedence == "string" ? k.precedence : void 0, {
              crossOrigin: C,
              integrity: M,
              fetchPriority: q,
            })
          : T === "script" &&
            c.d.X(b, {
              crossOrigin: C,
              integrity: M,
              fetchPriority: q,
              nonce: typeof k.nonce == "string" ? k.nonce : void 0,
            });
      }
    }),
    (jt.preinitModule = function (b, k) {
      if (typeof b == "string")
        if (typeof k == "object" && k !== null) {
          if (k.as == null || k.as === "script") {
            var T = v(k.as, k.crossOrigin);
            c.d.M(b, {
              crossOrigin: T,
              integrity: typeof k.integrity == "string" ? k.integrity : void 0,
              nonce: typeof k.nonce == "string" ? k.nonce : void 0,
              fetchPriority:
                typeof k.fetchPriority == "string" ? k.fetchPriority : void 0,
            });
          }
        } else k == null && c.d.M(b);
    }),
    (jt.preload = function (b, k) {
      if (
        typeof b == "string" &&
        typeof k == "object" &&
        k !== null &&
        typeof k.as == "string"
      ) {
        var T = k.as,
          C = v(T, k.crossOrigin);
        c.d.L(b, T, {
          crossOrigin: C,
          integrity: typeof k.integrity == "string" ? k.integrity : void 0,
          nonce: typeof k.nonce == "string" ? k.nonce : void 0,
          type: typeof k.type == "string" ? k.type : void 0,
          fetchPriority:
            typeof k.fetchPriority == "string" ? k.fetchPriority : void 0,
          referrerPolicy:
            typeof k.referrerPolicy == "string" ? k.referrerPolicy : void 0,
          imageSrcSet:
            typeof k.imageSrcSet == "string" ? k.imageSrcSet : void 0,
          imageSizes: typeof k.imageSizes == "string" ? k.imageSizes : void 0,
          media: typeof k.media == "string" ? k.media : void 0,
        });
      }
    }),
    (jt.preloadModule = function (b, k) {
      if (typeof b == "string")
        if (k) {
          var T = v(k.as, k.crossOrigin);
          c.d.m(b, {
            as: typeof k.as == "string" && k.as !== "script" ? k.as : void 0,
            crossOrigin: T,
            integrity: typeof k.integrity == "string" ? k.integrity : void 0,
            nonce: typeof k.nonce == "string" ? k.nonce : void 0,
            fetchPriority:
              typeof k.fetchPriority == "string" ? k.fetchPriority : void 0,
          });
        } else c.d.m(b);
    }),
    (jt.requestFormReset = function (b) {
      c.d.r(b);
    }),
    (jt.unstable_batchedUpdates = function (b, k) {
      return b(k);
    }),
    (jt.useFormState = function (b, k, T) {
      return y.H.useFormState(b, k, T);
    }),
    (jt.useFormStatus = function () {
      return y.H.useHostTransitionStatus();
    }),
    (jt.version = "19.3.1"),
    jt
  );
}
var _g;
function O1() {
  if (_g) return af.exports;
  _g = 1;
  function n() {
    if (!(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    ))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (i) {
        console.error(i);
      }
  }
  return (n(), (af.exports = E1()), af.exports);
}
var Sg;
function A1() {
  if (Sg) return ou;
  Sg = 1;
  var n = T1(),
    i = Af(),
    r = O1();
  function c(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++)
        t += "&args[]=" + encodeURIComponent(arguments[a]);
    }
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function f(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function m(e) {
    for (var t = e, a = t; a && !a.alternate;)
      ((t = a), (t.flags & 4098) !== 0 && (e = t.return), (a = t.return));
    for (; t.return;) t = t.return;
    return t.tag === 3 ? e : null;
  }
  function h(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function g(e) {
    if (e.tag === 31) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function y(e) {
    if (m(e) !== e) throw Error(c(188));
  }
  function v(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = m(e)), t === null)) throw Error(c(188));
      return t !== e ? null : e;
    }
    for (var a = e, l = t; ;) {
      var u = a.return;
      if (u === null) break;
      var s = u.alternate;
      if (s === null) {
        if (((l = u.return), l !== null)) {
          a = l;
          continue;
        }
        break;
      }
      if (u.child === s.child) {
        for (s = u.child; s;) {
          if (s === a) return (y(u), e);
          if (s === l) return (y(u), t);
          s = s.sibling;
        }
        throw Error(c(188));
      }
      if (a.return !== l.return) ((a = u), (l = s));
      else {
        for (var d = !1, p = u.child; p;) {
          if (p === a) {
            ((d = !0), (a = u), (l = s));
            break;
          }
          if (p === l) {
            ((d = !0), (l = u), (a = s));
            break;
          }
          p = p.sibling;
        }
        if (!d) {
          for (p = s.child; p;) {
            if (p === a) {
              ((d = !0), (a = s), (l = u));
              break;
            }
            if (p === l) {
              ((d = !0), (l = s), (a = u));
              break;
            }
            p = p.sibling;
          }
          if (!d) throw Error(c(189));
        }
      }
      if (a.alternate !== l) throw Error(c(190));
    }
    if (a.tag !== 3) throw Error(c(188));
    return a.stateNode.current === a ? e : t;
  }
  function b(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null;) {
      if (((t = b(e)), t !== null)) return t;
      e = e.sibling;
    }
    return null;
  }
  function k(e, t, a, l, u, s) {
    for (; e !== null;) {
      if (
        ((e.tag === 5 || e.tag === 27 || e.tag === 6) && a(e, l, u, s)) ||
        ((e.tag !== 22 || e.memoizedState === null) &&
          (t || (e.tag !== 5 && e.tag !== 27)) &&
          k(e.child, t, a, l, u, s))
      )
        return !0;
      e = e.sibling;
    }
    return !1;
  }
  function T(e) {
    for (e = e.return; e !== null;) {
      if (e.tag === 3 || e.tag === 5 || e.tag === 27) return e;
      e = e.return;
    }
    return null;
  }
  function C(e) {
    var t = !1;
    for (
      e = e.return;
      e !== null &&
      (e.tag === 4 && (t = !0), !(e.tag === 3 || e.tag === 5 || e.tag === 27));
    )
      e = e.return;
    return t;
  }
  function M(e) {
    var t = [null, null],
      a = T(e);
    return (a === null || q(t, e, a.child, { foundSelf: !1 }), t);
  }
  function q(e, t, a, l) {
    for (; a !== null;) {
      if (a === t) l.foundSelf = !0;
      else if (a.tag === 5 || a.tag === 27 || a.tag === 6) {
        if (l.foundSelf) return ((e[1] = a), !0);
        e[0] = a;
      } else if (
        (a.tag !== 22 || a.memoizedState === null) &&
        q(e, t, a.child, l)
      )
        return !0;
      a = a.sibling;
    }
    return !1;
  }
  function L(e) {
    switch (e.tag) {
      case 5:
      case 27:
      case 6:
        return e.stateNode;
      case 3:
        return e.stateNode.containerInfo;
      default:
        throw Error(c(559));
    }
  }
  var D = null,
    X = null;
  function ye(e, t, a) {
    return e === a ? !0 : e === t ? ((D = e), !0) : !1;
  }
  function Ae(e, t, a) {
    return e === a ? ((X = e), !1) : e === t ? (X !== null && (D = e), !0) : !1;
  }
  function de(e) {
    if (e === null) return null;
    do e = e === null ? null : e.return;
    while (e && e.tag !== 5 && e.tag !== 27 && e.tag !== 3);
    return e || null;
  }
  function ce(e, t, a) {
    for (var l = 0, u = e; u; u = a(u)) l++;
    u = 0;
    for (var s = t; s; s = a(s)) u++;
    for (; 0 < l - u;) ((e = a(e)), l--);
    for (; 0 < u - l;) ((t = a(t)), u--);
    for (; l--;) {
      if (e === t || (t !== null && e === t.alternate)) return e;
      ((e = a(e)), (t = a(t)));
    }
    return null;
  }
  var ae = Object.assign,
    se = Symbol.for("react.element"),
    ct = Symbol.for("react.transitional.element"),
    Fe = Symbol.for("react.portal"),
    Se = Symbol.for("react.fragment"),
    Ke = Symbol.for("react.strict_mode"),
    he = Symbol.for("react.profiler"),
    Wt = Symbol.for("react.consumer"),
    We = Symbol.for("react.context"),
    $ = Symbol.for("react.forward_ref"),
    ne = Symbol.for("react.suspense"),
    te = Symbol.for("react.suspense_list"),
    we = Symbol.for("react.memo"),
    Ne = Symbol.for("react.lazy"),
    xt = Symbol.for("react.activity"),
    je = Symbol.for("react.legacy_hidden"),
    Ua = Symbol.for("react.memo_cache_sentinel"),
    x = Symbol.for("react.view_transition"),
    H = Symbol.for("react.recoverable"),
    G = Symbol.iterator;
  function P(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (G && e[G]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var pe = Symbol.for("react.client.reference");
  function _e(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === pe ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case Se:
        return "Fragment";
      case he:
        return "Profiler";
      case Ke:
        return "StrictMode";
      case ne:
        return "Suspense";
      case te:
        return "SuspenseList";
      case xt:
        return "Activity";
      case x:
        return "ViewTransition";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Fe:
          return "Portal";
        case We:
          return e.displayName || "Context";
        case Wt:
          return (e._context.displayName || "Context") + ".Consumer";
        case $:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case we:
          return (
            (t = e.displayName || null),
            t !== null ? t : _e(e.type) || "Memo"
          );
        case Ne:
          ((t = e._payload), (e = e._init));
          try {
            return _e(e(t));
          } catch {}
      }
    return null;
  }
  var xe = Array.isArray,
    J = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    ue = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    zt = { pending: !1, data: null, method: null, action: null },
    vl = [],
    Ba = -1;
  function Ct(e) {
    return { current: e };
  }
  function V(e) {
    0 > Ba || ((e.current = vl[Ba]), (vl[Ba] = null), Ba--);
  }
  function I(e, t) {
    (Ba++, (vl[Ba] = e.current), (e.current = t));
  }
  var De = Ct(null),
    fa = Ct(null),
    ea = Ct(null),
    Za = Ct(null);
  function da(e, t) {
    switch ((I(ea, t), I(fa, e), I(De, null), t.nodeType)) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? xp(e) : 0;
        break;
      default:
        if (((e = t.tagName), (t = t.namespaceURI)))
          ((t = xp(t)), (e = zp(t, e)));
        else
          switch (e) {
            case "svg":
              e = 1;
              break;
            case "math":
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    (V(De), I(De, e));
  }
  function ja() {
    (V(De), V(fa), V(ea));
  }
  function pi(e) {
    var t = e.memoizedState;
    (t !== null && ((ii._currentValue = t.memoizedState), I(Za, e)),
      (t = De.current));
    var a = zp(t, e.type);
    t !== a && (I(fa, e), I(De, a));
  }
  function Ln(e) {
    (fa.current === e && (V(De), V(fa)),
      Za.current === e && (V(Za), (ii._currentValue = zt)));
  }
  var yl, xu;
  function Dt(e) {
    if (yl === void 0)
      try {
        throw Error();
      } catch (a) {
        var t = a.stack.trim().match(/\n( *(at )?)/);
        ((yl = (t && t[1]) || ""),
          (xu =
            -1 <
            a.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < a.stack.indexOf("@")
                ? "@unknown:0:0"
                : ""));
      }
    return (
      `
` +
      yl +
      e +
      xu
    );
  }
  var qn = !1;
  function _(e, t) {
    if (!e || qn) return "";
    qn = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var l = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var U = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(U.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(U, []);
                } catch (Y) {
                  var z = Y;
                }
                Reflect.construct(e, [], U);
              } else {
                try {
                  U.call();
                } catch (Y) {
                  z = Y;
                }
                U = !1;
                try {
                  var A = Object.getOwnPropertyDescriptor(e.prototype, "props");
                  (Object.defineProperty(e.prototype, "props", {
                    configurable: !0,
                    set: function () {
                      throw Error();
                    },
                  }),
                    (U = !0),
                    new e());
                } finally {
                  U &&
                    (A !== void 0
                      ? Object.defineProperty(e.prototype, "props", A)
                      : delete e.prototype.props);
                }
              }
            } else {
              try {
                throw Error();
              } catch (Y) {
                z = Y;
              }
              (U = e()) &&
                typeof U.catch == "function" &&
                U.catch(function () {});
            }
          } catch (Y) {
            if (Y && z && typeof Y.stack == "string") return [Y.stack, z.stack];
          }
          return [null, null];
        },
      };
      l.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var u = Object.getOwnPropertyDescriptor(
        l.DetermineComponentFrameRoot,
        "name",
      );
      u &&
        u.configurable &&
        Object.defineProperty(l.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var s = l.DetermineComponentFrameRoot(),
        d = s[0],
        p = s[1];
      if (d && p) {
        var j = d.split(`
`),
          E = p.split(`
`);
        for (
          u = l = 0;
          l < j.length && !j[l].includes("DetermineComponentFrameRoot");
        )
          l++;
        for (; u < E.length && !E[u].includes("DetermineComponentFrameRoot");)
          u++;
        if (l === j.length || u === E.length)
          for (
            l = j.length - 1, u = E.length - 1;
            1 <= l && 0 <= u && j[l] !== E[u];
          )
            u--;
        for (; 1 <= l && 0 <= u; l--, u--)
          if (j[l] !== E[u]) {
            if (l !== 1 || u !== 1)
              do
                if ((l--, u--, 0 > u || j[l] !== E[u])) {
                  var w =
                    `
` + j[l].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      w.includes("<anonymous>") &&
                      (w = w.replace("<anonymous>", e.displayName)),
                    w
                  );
                }
              while (1 <= l && 0 <= u);
            break;
          }
      }
    } finally {
      ((qn = !1), (Error.prepareStackTrace = a));
    }
    return (a = e ? e.displayName || e.name : "") ? Dt(a) : "";
  }
  function B(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Dt(e.type);
      case 16:
        return Dt("Lazy");
      case 13:
        return e.child !== t && t !== null
          ? Dt("Suspense Fallback")
          : Dt("Suspense");
      case 19:
        return Dt("SuspenseList");
      case 0:
      case 15:
        return _(e.type, !1);
      case 11:
        return _(e.type.render, !1);
      case 1:
        return _(e.type, !0);
      case 31:
        return Dt("Activity");
      case 30:
        return Dt("ViewTransition");
      default:
        return "";
    }
  }
  function F(e) {
    try {
      var t = "",
        a = null;
      do ((t += B(e, a)), (a = e), (e = e.return));
      while (e);
      return t;
    } catch (l) {
      return (
        `
Error generating stack: ` +
        l.message +
        `
` +
        l.stack
      );
    }
  }
  var Te = Object.prototype.hasOwnProperty,
    Xe = n.unstable_scheduleCallback,
    ot = n.unstable_cancelCallback,
    _r = n.unstable_shouldYield,
    Ty = n.unstable_requestPaint,
    qt = n.unstable_now,
    Ey = n.unstable_getCurrentPriorityLevel,
    Xf = n.unstable_ImmediatePriority,
    Qf = n.unstable_UserBlockingPriority,
    zu = n.unstable_NormalPriority,
    Oy = n.unstable_LowPriority,
    Jf = n.unstable_IdlePriority,
    Ay = n.log,
    wy = n.unstable_setDisableYieldValue,
    gi = null,
    Yt = null;
  function sn(e) {
    if (
      (typeof Ay == "function" && wy(e),
      Yt && typeof Yt.setStrictMode == "function")
    )
      try {
        Yt.setStrictMode(gi, e);
      } catch {}
  }
  var $t = Math.clz32 ? Math.clz32 : My,
    Cy = Math.log,
    Dy = Math.LN2;
  function My(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((Cy(e) / Dy) | 0)) | 0);
  }
  var Nu = 256,
    Tu = 262144,
    Eu = 4194304;
  function Yn(e) {
    var t = e & 42;
    if (t !== 0) return t;
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return e & -e;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function Ou(e, t, a) {
    var l = e.pendingLanes;
    if (l === 0) return 0;
    var u = 0,
      s = e.suspendedLanes,
      d = e.pingedLanes;
    e = e.warmLanes;
    var p = l & 134217727;
    return (
      p !== 0
        ? ((l = p & ~s),
          l !== 0
            ? (u = Yn(l))
            : ((d &= p),
              d !== 0
                ? (u = Yn(d))
                : a || ((a = p & ~e), a !== 0 && (u = Yn(a)))))
        : ((p = l & ~s),
          p !== 0
            ? (u = Yn(p))
            : d !== 0
              ? (u = Yn(d))
              : a || ((a = l & ~e), a !== 0 && (u = Yn(a)))),
      u === 0
        ? 0
        : t !== 0 &&
            t !== u &&
            (t & s) === 0 &&
            ((s = u & -u),
            (a = t & -t),
            s >= a || (s === 32 && (a & 4194048) !== 0))
          ? t
          : u
    );
  }
  function vi(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function If(e, t) {
    (t & 8) !== 0 && (t |= t & 32);
    var a = e.entangledLanes;
    if (a !== 0)
      for (e = e.entanglements, a &= t; 0 < a;) {
        var l = 31 - $t(a),
          u = 1 << l;
        ((t |= e[l]), (a &= ~u));
      }
    return t;
  }
  function Ry(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Pf() {
    var e = Eu;
    return ((Eu <<= 1), (Eu & 62914560) === 0 && (Eu = 4194304), e);
  }
  function Sr(e) {
    for (var t = [], a = 0; 31 > a; a++) t.push(e);
    return t;
  }
  function yi(e, t) {
    ((e.pendingLanes |= t),
      t !== 268435456 &&
        ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0)));
  }
  function Uy(e, t, a, l, u, s) {
    var d = e.pendingLanes;
    ((e.pendingLanes = a),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.warmLanes = 0),
      (e.expiredLanes &= a),
      (e.entangledLanes &= a),
      (e.errorRecoveryDisabledLanes &= a),
      (e.shellSuspendCounter = 0));
    var p = e.entanglements,
      j = e.expirationTimes,
      E = e.hiddenUpdates;
    for (a = d & ~a; 0 < a;) {
      var w = 31 - $t(a),
        U = 1 << w;
      ((p[w] = 0), (j[w] = -1));
      var z = E[w];
      if (z !== null)
        for (E[w] = null, w = 0; w < z.length; w++) {
          var A = z[w];
          A !== null && (A.lane &= -536870913);
        }
      a &= ~U;
    }
    (l !== 0 && Ff(e, l, 0),
      s !== 0 && u === 0 && e.tag !== 0 && (e.suspendedLanes |= s & ~(d & ~t)));
  }
  function Ff(e, t, a) {
    ((e.pendingLanes |= t), (e.suspendedLanes &= ~t));
    var l = 31 - $t(t);
    ((e.entangledLanes |= t),
      (e.entanglements[l] = e.entanglements[l] | 1073741824 | (a & 261930)));
  }
  function Wf(e, t) {
    var a = (e.entangledLanes |= t);
    for (e = e.entanglements; a;) {
      var l = 31 - $t(a),
        u = 1 << l;
      ((u & t) | (e[l] & t) && (e[l] |= t), (a &= ~u));
    }
  }
  function ed(e, t) {
    var a = t & -t;
    return (
      (a = (a & 42) !== 0 ? 1 : xr(a)),
      (a & (e.suspendedLanes | t)) !== 0 ? 0 : a
    );
  }
  function xr(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function zr(e) {
    return (
      (e &= -e),
      2 < e ? (8 < e ? ((e & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function td() {
    var e = ue.p;
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : rg(e.type));
  }
  function ad(e, t) {
    var a = ue.p;
    try {
      return ((ue.p = e), t());
    } finally {
      ue.p = a;
    }
  }
  var Ha = Math.random().toString(36).slice(2),
    pt = "__reactFiber$" + Ha,
    Mt = "__reactProps$" + Ha,
    bl = "__reactContainer$" + Ha,
    nd = "__reactEvents$" + Ha,
    By = "__reactListeners$" + Ha,
    Zy = "__reactHandles$" + Ha,
    ld = "__reactResources$" + Ha,
    bi = "__reactMarker$" + Ha,
    Au = "__reactLoad$" + Ha;
  function wu(e) {
    (delete e[pt], delete e[Mt], delete e[By], delete e[Zy]);
  }
  function $n(e) {
    var t;
    if ((t = e[pt])) return t;
    for (var a = e.parentNode; a;) {
      if ((t = a[bl] || a[pt])) {
        if (
          ((a = t.alternate),
          t.child !== null || (a !== null && a.child !== null))
        )
          for (e = Yp(e); e !== null;) {
            if ((a = e[pt])) return a;
            e = Yp(e);
          }
        return t;
      }
      ((e = a), (a = e.parentNode));
    }
    return null;
  }
  function kl(e) {
    if ((e = e[pt] || e[bl])) {
      var t = e.tag;
      if (
        t === 5 ||
        t === 6 ||
        t === 13 ||
        t === 31 ||
        t === 26 ||
        t === 27 ||
        t === 3
      )
        return e;
    }
    return null;
  }
  function ki(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(c(33));
  }
  function jl(e) {
    var t = e[ld];
    return (
      t ||
        (t = e[ld] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      t
    );
  }
  function ft(e) {
    e[bi] = !0;
  }
  function id(e) {
    e[Au] = void 0;
  }
  var ud = new Set(),
    sd = {};
  function Vn(e, t) {
    (_l(e, t), _l(e + "Capture", t));
  }
  function _l(e, t) {
    for (sd[e] = t, e = 0; e < t.length; e++) ud.add(t[e]);
  }
  var Hy = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
    ),
    rd = {},
    cd = {};
  function Ly(e) {
    return Te.call(cd, e)
      ? !0
      : Te.call(rd, e)
        ? !1
        : Hy.test(e)
          ? (cd[e] = !0)
          : ((rd[e] = !0), !1);
  }
  var Ee = !1;
  function od() {
    var e = Ee;
    return ((Ee = !1), e);
  }
  function Cu(e, t, a) {
    if (Ly(t))
      if (a === null) e.removeAttribute(t);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t);
            return;
          case "boolean":
            var l = t.toLowerCase().slice(0, 5);
            if (l !== "data-" && l !== "aria-") {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, a);
      }
  }
  function Du(e, t, a) {
    if (a === null) e.removeAttribute(t);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, a);
    }
  }
  function La(e, t, a, l) {
    if (l === null) e.removeAttribute(a);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(a);
          return;
      }
      e.setAttributeNS(t, a, l);
    }
  }
  function Vt(e) {
    switch (typeof e) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function fd(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function qy(e, t, a) {
    var l = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
    if (
      !e.hasOwnProperty(t) &&
      typeof l < "u" &&
      typeof l.get == "function" &&
      typeof l.set == "function"
    ) {
      var u = l.get,
        s = l.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return u.call(this);
          },
          set: function (d) {
            ((a = "" + d), s.call(this, d));
          },
        }),
        Object.defineProperty(e, t, { enumerable: l.enumerable }),
        {
          getValue: function () {
            return a;
          },
          setValue: function (d) {
            a = "" + d;
          },
          stopTracking: function () {
            ((e._valueTracker = null), delete e[t]);
          },
        }
      );
    }
  }
  function Nr(e) {
    if (!e._valueTracker) {
      var t = fd(e) ? "checked" : "value";
      e._valueTracker = qy(e, t, "" + e[t]);
    }
  }
  function dd(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var a = t.getValue(),
      l = "";
    return (
      e && (l = fd(e) ? (e.checked ? "true" : "false") : e.value),
      (e = l),
      e !== a ? (t.setValue(e), !0) : !1
    );
  }
  var Yy = /[\n"\\]/g;
  function ta(e) {
    return e.replace(Yy, function (t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    });
  }
  function Tr(e, t, a, l, u, s, d, p) {
    ((e.name = ""),
      d != null &&
      typeof d != "function" &&
      typeof d != "symbol" &&
      typeof d != "boolean"
        ? (e.type = d)
        : e.removeAttribute("type"),
      t != null
        ? d === "number"
          ? ((t === 0 && e.value === "") || e.value != t) &&
            (e.value = "" + Vt(t))
          : e.value !== "" + Vt(t) && (e.value = "" + Vt(t))
        : (d !== "submit" && d !== "reset") || e.removeAttribute("value"),
      t != null
        ? d === "number" && e.value == t
          ? Er(e, Vt(e.value))
          : Er(e, Vt(t))
        : a != null
          ? Er(e, Vt(a))
          : l != null && e.removeAttribute("value"),
      u == null && s != null && (e.defaultChecked = !!s),
      u != null &&
        (e.checked = u && typeof u != "function" && typeof u != "symbol"),
      p != null &&
      typeof p != "function" &&
      typeof p != "symbol" &&
      typeof p != "boolean"
        ? (e.name = "" + Vt(p))
        : e.removeAttribute("name"));
  }
  function md(e, t, a, l, u, s, d, p) {
    if (
      (s != null &&
        typeof s != "function" &&
        typeof s != "symbol" &&
        typeof s != "boolean" &&
        (e.type = s),
      t != null || a != null)
    ) {
      if (!((s !== "submit" && s !== "reset") || t != null)) {
        Nr(e);
        return;
      }
      ((a = a != null ? "" + Vt(a) : ""),
        (t = t != null ? "" + Vt(t) : a),
        p || t === e.value || (e.value = t),
        (e.defaultValue = t));
    }
    ((l = l ?? u),
      (l = typeof l != "function" && typeof l != "symbol" && !!l),
      (e.checked = p ? e.checked : !!l),
      (e.defaultChecked = !!l),
      d != null &&
        typeof d != "function" &&
        typeof d != "symbol" &&
        typeof d != "boolean" &&
        (e.name = d),
      Nr(e));
  }
  function Er(e, t) {
    e.defaultValue !== "" + t && (e.defaultValue = "" + t);
  }
  function Sl(e, t, a, l) {
    if (((e = e.options), t)) {
      t = {};
      for (var u = 0; u < a.length; u++) t["$" + a[u]] = !0;
      for (a = 0; a < e.length; a++)
        ((u = t.hasOwnProperty("$" + e[a].value)),
          e[a].selected !== u && (e[a].selected = u),
          u && l && (e[a].defaultSelected = !0));
    } else {
      for (a = "" + Vt(a), t = null, u = 0; u < e.length; u++) {
        if (e[u].value === a) {
          ((e[u].selected = !0), l && (e[u].defaultSelected = !0));
          return;
        }
        t !== null || e[u].disabled || (t = e[u]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function hd(e, t, a) {
    if (
      t != null &&
      ((t = "" + Vt(t)), t !== e.value && (e.value = t), a == null)
    ) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = a != null ? "" + Vt(a) : "";
  }
  function pd(e, t, a, l) {
    if (t == null) {
      if (l != null) {
        if (a != null) throw Error(c(92));
        if (xe(l)) {
          if (1 < l.length) throw Error(c(93));
          l = l[0];
        }
        a = l;
      }
      (a == null && (a = ""), (t = a));
    }
    ((a = Vt(t)),
      (e.defaultValue = a),
      (l = e.textContent),
      l === a && l !== "" && l !== null && (e.value = l),
      Nr(e));
  }
  function xl(e, t) {
    if (t) {
      var a = e.firstChild;
      if (a && a === e.lastChild && a.nodeType === 3) {
        a.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var $y = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " ",
    ),
  );
  function gd(e, t, a) {
    var l = t.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === ""
      ? l
        ? e.setProperty(t, "")
        : t === "float"
          ? (e.cssFloat = "")
          : (e[t] = "")
      : l
        ? e.setProperty(t, a)
        : typeof a != "number" || a === 0 || $y.has(t)
          ? t === "float"
            ? (e.cssFloat = a)
            : (e[t] = ("" + a).trim())
          : (e[t] = a + "px");
  }
  function vd(e, t, a) {
    if (t != null && typeof t != "object") throw Error(c(62));
    if (((e = e.style), a != null)) {
      for (var l in a)
        !a.hasOwnProperty(l) ||
          (t != null && t.hasOwnProperty(l)) ||
          (l.indexOf("--") === 0
            ? e.setProperty(l, "")
            : l === "float"
              ? (e.cssFloat = "")
              : (e[l] = ""),
          (Ee = !0));
      for (var u in t)
        ((l = t[u]),
          t.hasOwnProperty(u) && a[u] !== l && (gd(e, u, l), (Ee = !0)));
    } else for (var s in t) t.hasOwnProperty(s) && gd(e, s, t[s]);
  }
  function Or(e) {
    if (e.indexOf("-") === -1) return !1;
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Vy = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["maskType", "mask-type"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    Gy =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Mu(e) {
    return Gy.test("" + e)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : e;
  }
  function _a() {}
  var Ar = null;
  function wr(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var zl = null,
    Nl = null;
  function yd(e) {
    var t = kl(e);
    if (t && (e = t.stateNode)) {
      var a = e[Mt] || null;
      e: switch (((e = t.stateNode), t.type)) {
        case "input":
          if (
            (Tr(
              e,
              a.value,
              a.defaultValue,
              a.defaultValue,
              a.checked,
              a.defaultChecked,
              a.type,
              a.name,
            ),
            (t = a.name),
            a.type === "radio" && t != null)
          ) {
            for (a = e; a.parentNode;) a = a.parentNode;
            for (
              a = a.querySelectorAll(
                'input[name="' + ta("" + t) + '"][type="radio"]',
              ),
                t = 0;
              t < a.length;
              t++
            ) {
              var l = a[t];
              if (l !== e && l.form === e.form) {
                var u = l[Mt] || null;
                if (!u) throw Error(c(90));
                Tr(
                  l,
                  u.value,
                  u.defaultValue,
                  u.defaultValue,
                  u.checked,
                  u.defaultChecked,
                  u.type,
                  u.name,
                );
              }
            }
            for (t = 0; t < a.length; t++)
              ((l = a[t]), l.form === e.form && dd(l));
          }
          break e;
        case "textarea":
          hd(e, a.value, a.defaultValue);
          break e;
        case "select":
          ((t = a.value), t != null && Sl(e, !!a.multiple, t, !1));
      }
    }
  }
  var Cr = !1;
  function bd(e, t, a) {
    if (Cr) return e(t, a);
    Cr = !0;
    try {
      var l = e(t);
      return l;
    } finally {
      if (
        ((Cr = !1),
        (zl !== null || Nl !== null) &&
          (Ms(), zl && ((t = zl), (e = Nl), (Nl = zl = null), yd(t), e)))
      )
        for (t = 0; t < e.length; t++) yd(e[t]);
    }
  }
  function ji(e, t) {
    var a = e.stateNode;
    if (a === null) return null;
    var l = a[Mt] || null;
    if (l === null) return null;
    a = l[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        ((l = !l.disabled) ||
          ((e = e.type),
          (l = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !l));
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (a && typeof a != "function") throw Error(c(231, t, typeof a));
    return a;
  }
  var qa = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    Dr = !1;
  if (qa)
    try {
      var _i = {};
      (Object.defineProperty(_i, "passive", {
        get: function () {
          Dr = !0;
        },
      }),
        window.addEventListener("test", _i, _i),
        window.removeEventListener("test", _i, _i));
    } catch {
      Dr = !1;
    }
  var rn = null,
    Mr = null,
    Ru = null;
  function kd() {
    if (Ru) return Ru;
    var e,
      t = Mr,
      a = t.length,
      l,
      u = "value" in rn ? rn.value : rn.textContent,
      s = u.length;
    for (e = 0; e < a && t[e] === u[e]; e++);
    var d = a - e;
    for (l = 1; l <= d && t[a - l] === u[s - l]; l++);
    return (Ru = u.slice(e, 1 < l ? 1 - l : void 0));
  }
  function Uu(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Bu() {
    return !0;
  }
  function jd() {
    return !1;
  }
  function Nt(e) {
    function t(a, l, u, s, d) {
      ((this._reactName = a),
        (this._targetInst = u),
        (this.type = l),
        (this.nativeEvent = s),
        (this.target = d),
        (this.currentTarget = null));
      for (var p in e)
        e.hasOwnProperty(p) && ((a = e[p]), (this[p] = a ? a(s) : s[p]));
      return (
        (this.isDefaultPrevented = (
          s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1
        )
          ? Bu
          : jd),
        (this.isPropagationStopped = jd),
        this
      );
    }
    return (
      ae(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a &&
            (a.preventDefault
              ? a.preventDefault()
              : typeof a.returnValue != "unknown" && (a.returnValue = !1),
            (this.isDefaultPrevented = Bu));
        },
        stopPropagation: function () {
          var a = this.nativeEvent;
          a &&
            (a.stopPropagation
              ? a.stopPropagation()
              : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0),
            (this.isPropagationStopped = Bu));
        },
        persist: function () {},
        isPersistent: Bu,
      }),
      t
    );
  }
  var cn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Zu = Nt(cn),
    Si = ae({}, cn, { view: 0, detail: 0 }),
    Ky = Nt(Si),
    Rr,
    Ur,
    xi,
    Hu = ae({}, Si, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Zr,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== xi &&
              (xi && e.type === "mousemove"
                ? ((Rr = e.screenX - xi.screenX), (Ur = e.screenY - xi.screenY))
                : (Ur = Rr = 0),
              (xi = e)),
            Rr);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : Ur;
      },
    }),
    _d = Nt(Hu),
    Xy = ae({}, Hu, { dataTransfer: 0 }),
    Qy = Nt(Xy),
    Jy = ae({}, Si, { relatedTarget: 0 }),
    Br = Nt(Jy),
    Iy = ae({}, cn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Py = Nt(Iy),
    Fy = ae({}, cn, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    Wy = Nt(Fy),
    eb = ae({}, cn, { data: 0 }),
    Sd = Nt(eb),
    tb = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    ab = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    nb = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function lb(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = nb[e])
        ? !!t[e]
        : !1;
  }
  function Zr() {
    return lb;
  }
  var ib = ae({}, Si, {
      key: function (e) {
        if (e.key) {
          var t = tb[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = Uu(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
            ? ab[e.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Zr,
      charCode: function (e) {
        return e.type === "keypress" ? Uu(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? Uu(e)
          : e.type === "keydown" || e.type === "keyup"
            ? e.keyCode
            : 0;
      },
    }),
    ub = Nt(ib),
    sb = ae({}, Hu, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    xd = Nt(sb),
    rb = ae({}, cn, { submitter: 0 }),
    cb = Nt(rb),
    ob = ae({}, Si, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Zr,
    }),
    fb = Nt(ob),
    db = ae({}, cn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    mb = Nt(db),
    hb = ae({}, Hu, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
            ? -e.wheelDeltaX
            : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
            ? -e.wheelDeltaY
            : "wheelDelta" in e
              ? -e.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    pb = Nt(hb),
    gb = ae({}, cn, { newState: 0, oldState: 0, source: 0 }),
    vb = Nt(gb),
    yb = [9, 13, 27, 32],
    Hr = qa && "CompositionEvent" in window,
    zi = null;
  qa && "documentMode" in document && (zi = document.documentMode);
  var bb = qa && "TextEvent" in window && !zi,
    zd = qa && (!Hr || (zi && 8 < zi && 11 >= zi)),
    Nd = " ",
    Td = !1;
  function Ed(e, t) {
    switch (e) {
      case "keyup":
        return yb.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Od(e) {
    return (
      (e = e.detail),
      typeof e == "object" && "data" in e ? e.data : null
    );
  }
  var Tl = !1;
  function kb(e, t) {
    switch (e) {
      case "compositionend":
        return Od(t);
      case "keypress":
        return t.which !== 32 ? null : ((Td = !0), Nd);
      case "textInput":
        return ((e = t.data), e === Nd && Td ? null : e);
      default:
        return null;
    }
  }
  function jb(e, t) {
    if (Tl)
      return e === "compositionend" || (!Hr && Ed(e, t))
        ? ((e = kd()), (Ru = Mr = rn = null), (Tl = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return zd && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var _b = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Ad(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!_b[e.type] : t === "textarea";
  }
  function wd(e, t, a, l) {
    (zl ? (Nl ? Nl.push(l) : (Nl = [l])) : (zl = l),
      (t = Ls(t, "onChange")),
      0 < t.length &&
        ((a = new Zu("onChange", "change", null, a, l)),
        e.push({ event: a, listeners: t })));
  }
  var Ni = null,
    Ti = null;
  function Sb(e) {
    yp(e, 0);
  }
  function Lu(e) {
    var t = ki(e);
    if (dd(t)) return e;
  }
  function Cd(e, t) {
    if (e === "change") return t;
  }
  var Dd = !1;
  if (qa) {
    var Lr;
    if (qa) {
      var qr = "oninput" in document;
      if (!qr) {
        var Md = document.createElement("div");
        (Md.setAttribute("oninput", "return;"),
          (qr = typeof Md.oninput == "function"));
      }
      Lr = qr;
    } else Lr = !1;
    Dd = Lr && (!document.documentMode || 9 < document.documentMode);
  }
  function Rd() {
    Ni && (Ni.detachEvent("onpropertychange", Ud), (Ti = Ni = null));
  }
  function Ud(e) {
    if (e.propertyName === "value" && Lu(Ti)) {
      var t = [];
      (wd(t, Ti, e, wr(e)), bd(Sb, t));
    }
  }
  function xb(e, t, a) {
    e === "focusin"
      ? (Rd(), (Ni = t), (Ti = a), Ni.attachEvent("onpropertychange", Ud))
      : e === "focusout" && Rd();
  }
  function zb(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Lu(Ti);
  }
  function Nb(e, t) {
    if (e === "click") return Lu(t);
  }
  function Tb(e, t) {
    if (e === "input" || e === "change") return Lu(t);
  }
  function Eb(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var Gt = typeof Object.is == "function" ? Object.is : Eb;
  function Ei(e, t) {
    if (Gt(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var a = Object.keys(e),
      l = Object.keys(t);
    if (a.length !== l.length) return !1;
    for (l = 0; l < a.length; l++) {
      var u = a[l];
      if (!Te.call(t, u) || !Gt(e[u], t[u])) return !1;
    }
    return !0;
  }
  function Yr(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Bd(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e;
  }
  function Zd(e, t) {
    var a = Bd(e);
    e = 0;
    for (var l; a;) {
      if (a.nodeType === 3) {
        if (((l = e + a.textContent.length), e <= t && l >= t))
          return { node: a, offset: t - e };
        e = l;
      }
      e: {
        for (; a;) {
          if (a.nextSibling) {
            a = a.nextSibling;
            break e;
          }
          a = a.parentNode;
        }
        a = void 0;
      }
      a = Bd(a);
    }
  }
  function Hd(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? Hd(e, t.parentNode)
            : "contains" in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function Ld(e) {
    e =
      e != null &&
      e.ownerDocument != null &&
      e.ownerDocument.defaultView != null
        ? e.ownerDocument.defaultView
        : window;
    for (var t = Yr(e.document); t instanceof e.HTMLIFrameElement;) {
      try {
        var a = typeof t.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) e = t.contentWindow;
      else break;
      t = Yr(e.document);
    }
    return t;
  }
  function $r(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  var Ob = qa && "documentMode" in document && 11 >= document.documentMode,
    El = null,
    Vr = null,
    Oi = null,
    Gr = !1;
  function qd(e, t, a) {
    var l =
      a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    Gr ||
      El == null ||
      El !== Yr(l) ||
      ((l = El),
      "selectionStart" in l && $r(l)
        ? (l = { start: l.selectionStart, end: l.selectionEnd })
        : ((l = (
            (l.ownerDocument && l.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (l = {
            anchorNode: l.anchorNode,
            anchorOffset: l.anchorOffset,
            focusNode: l.focusNode,
            focusOffset: l.focusOffset,
          })),
      (Oi && Ei(Oi, l)) ||
        ((Oi = l),
        (l = Ls(Vr, "onSelect")),
        0 < l.length &&
          ((t = new Zu("onSelect", "select", null, t, a)),
          e.push({ event: t, listeners: l }),
          (t.target = El))));
  }
  function Gn(e, t) {
    var a = {};
    return (
      (a[e.toLowerCase()] = t.toLowerCase()),
      (a["Webkit" + e] = "webkit" + t),
      (a["Moz" + e] = "moz" + t),
      a
    );
  }
  var Ol = {
      animationend: Gn("Animation", "AnimationEnd"),
      animationiteration: Gn("Animation", "AnimationIteration"),
      animationstart: Gn("Animation", "AnimationStart"),
      transitionrun: Gn("Transition", "TransitionRun"),
      transitionstart: Gn("Transition", "TransitionStart"),
      transitioncancel: Gn("Transition", "TransitionCancel"),
      transitionend: Gn("Transition", "TransitionEnd"),
    },
    Kr = {},
    Yd = {};
  qa &&
    ((Yd = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Ol.animationend.animation,
      delete Ol.animationiteration.animation,
      delete Ol.animationstart.animation),
    "TransitionEvent" in window || delete Ol.transitionend.transition);
  function Kn(e) {
    if (Kr[e]) return Kr[e];
    if (!Ol[e]) return e;
    var t = Ol[e],
      a;
    for (a in t) if (t.hasOwnProperty(a) && a in Yd) return (Kr[e] = t[a]);
    return e;
  }
  var $d = Kn("animationend"),
    Vd = Kn("animationiteration"),
    Gd = Kn("animationstart"),
    Ab = Kn("transitionrun"),
    wb = Kn("transitionstart"),
    Cb = Kn("transitioncancel"),
    Kd = Kn("transitionend"),
    Xd = new Map(),
    Xr =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  Xr.push("scrollEnd");
  function ma(e, t) {
    (Xd.set(e, t), Vn(t, [e]));
  }
  var Db = 0;
  function Ya(e, t) {
    if (e.name != null && e.name !== "auto") return e.name;
    if (t.autoName !== null) return t.autoName;
    e = va.identifierPrefix;
    var a = Db++;
    return ((e = "_" + e + "t_" + a.toString(32) + "_"), (t.autoName = e));
  }
  function Qd(e) {
    if (e == null || typeof e == "string") return e;
    var t = null,
      a = Jl;
    if (a !== null)
      for (var l = 0; l < a.length; l++) {
        var u = e[a[l]];
        if (u != null) {
          if (u === "none") return "none";
          t = t == null ? u : t + (" " + u);
        }
      }
    return t ?? e.default;
  }
  function $a(e, t) {
    return (
      (e = Qd(e)),
      (t = Qd(t)),
      t == null ? (e === "auto" ? null : e) : t === "auto" ? null : t
    );
  }
  var qu =
      typeof reportError == "function"
        ? reportError
        : function (e) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var t = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof e == "object" &&
                  e !== null &&
                  typeof e.message == "string"
                    ? String(e.message)
                    : String(e),
                error: e,
              });
              if (!window.dispatchEvent(t)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", e);
              return;
            }
            console.error(e);
          },
    aa = [],
    Al = 0,
    Qr = 0;
  function Yu() {
    for (var e = Al, t = (Qr = Al = 0); t < e;) {
      var a = aa[t];
      aa[t++] = null;
      var l = aa[t];
      aa[t++] = null;
      var u = aa[t];
      aa[t++] = null;
      var s = aa[t];
      if (((aa[t++] = null), l !== null && u !== null)) {
        var d = l.pending;
        (d === null ? (u.next = u) : ((u.next = d.next), (d.next = u)),
          (l.pending = u));
      }
      s !== 0 && Jd(a, u, s);
    }
  }
  function $u(e, t, a, l) {
    ((aa[Al++] = e),
      (aa[Al++] = t),
      (aa[Al++] = a),
      (aa[Al++] = l),
      (Qr |= l),
      (e.lanes |= l),
      (e = e.alternate),
      e !== null && (e.lanes |= l));
  }
  function Jr(e, t, a, l) {
    return ($u(e, t, a, l), Vu(e));
  }
  function Xn(e, t) {
    return ($u(e, null, null, t), Vu(e));
  }
  function Jd(e, t, a) {
    e.lanes |= a;
    var l = e.alternate;
    l !== null && (l.lanes |= a);
    for (var u = !1, s = e.return; s !== null;)
      ((s.childLanes |= a),
        (l = s.alternate),
        l !== null && (l.childLanes |= a),
        s.tag === 22 &&
          ((e = s.stateNode), e === null || e._visibility & 1 || (u = !0)),
        (e = s),
        (s = s.return));
    return e.tag === 3
      ? ((s = e.stateNode),
        u &&
          t !== null &&
          ((u = 31 - $t(a)),
          (e = s.hiddenUpdates),
          (l = e[u]),
          l === null ? (e[u] = [t]) : l.push(t),
          (t.lane = a | 536870912)),
        s)
      : null;
  }
  function Vu(e) {
    if (50 < Pi) throw ((Pi = 0), (Ds = null), Error(c(185)));
    for (var t = e.return; t !== null;) ((e = t), (t = e.return));
    return e.tag === 3 ? e.stateNode : null;
  }
  var wl = {};
  function Mb(e, t, a, l) {
    ((this.tag = e),
      (this.key = a),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = l),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function Rt(e, t, a, l) {
    return new Mb(e, t, a, l);
  }
  function Ir(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function Va(e, t) {
    var a = e.alternate;
    return (
      a === null
        ? ((a = Rt(e.tag, t, e.key, e.mode)),
          (a.elementType = e.elementType),
          (a.type = e.type),
          (a.stateNode = e.stateNode),
          (a.alternate = e),
          (e.alternate = a))
        : ((a.pendingProps = t),
          (a.type = e.type),
          (a.flags = 0),
          (a.subtreeFlags = 0),
          (a.deletions = null)),
      (a.flags = e.flags & 1206910976),
      (a.childLanes = e.childLanes),
      (a.lanes = e.lanes),
      (a.child = e.child),
      (a.memoizedProps = e.memoizedProps),
      (a.memoizedState = e.memoizedState),
      (a.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (a.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (a.sibling = e.sibling),
      (a.index = e.index),
      (a.ref = e.ref),
      (a.refCleanup = e.refCleanup),
      a
    );
  }
  function Id(e, t) {
    e.flags &= 1206910978;
    var a = e.alternate;
    return (
      a === null
        ? ((e.childLanes = 0),
          (e.lanes = t),
          (e.child = null),
          (e.subtreeFlags = 0),
          (e.memoizedProps = null),
          (e.memoizedState = null),
          (e.updateQueue = null),
          (e.dependencies = null),
          (e.stateNode = null))
        : ((e.childLanes = a.childLanes),
          (e.lanes = a.lanes),
          (e.child = a.child),
          (e.subtreeFlags = 0),
          (e.deletions = null),
          (e.memoizedProps = a.memoizedProps),
          (e.memoizedState = a.memoizedState),
          (e.updateQueue = a.updateQueue),
          (e.type = a.type),
          (t = a.dependencies),
          (e.dependencies =
            t === null
              ? null
              : { lanes: t.lanes, firstContext: t.firstContext })),
      e
    );
  }
  function Gu(e, t, a, l, u, s) {
    var d = 0;
    if (((l = e), typeof l == "function")) Ir(l) && (d = 1);
    else if (typeof l == "string")
      d = r1(e, a, De.current)
        ? 26
        : e === "html" || e === "head" || e === "body"
          ? 27
          : 5;
    else
      e: switch (l) {
        case xt:
          return (
            (e = Rt(31, a, t, u)),
            (e.elementType = xt),
            (e.lanes = s),
            e
          );
        case Se:
          return Qn(a.children, u, s, t);
        case Ke:
          ((d = 8), (u |= 24));
          break;
        case he:
          return (
            (e = Rt(12, a, t, u | 2)),
            (e.elementType = he),
            (e.lanes = s),
            e
          );
        case ne:
          return (
            (e = Rt(13, a, t, u)),
            (e.elementType = ne),
            (e.lanes = s),
            e
          );
        case te:
          return (
            (e = Rt(19, a, t, u)),
            (e.elementType = te),
            (e.lanes = s),
            e
          );
        case je:
        case x:
          return (
            (e = u | 32),
            (e = Rt(30, a, t, e)),
            (e.elementType = x),
            (e.lanes = s),
            (e.stateNode = {
              autoName: null,
              paired: null,
              clones: null,
              ref: null,
            }),
            e
          );
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case We:
                d = 10;
                break e;
              case Wt:
                d = 9;
                break e;
              case $:
                d = 11;
                break e;
              case we:
                d = 14;
                break e;
              case Ne:
                ((d = 16), (l = null));
                break e;
            }
          ((d = 29),
            (a = Error(c(130, e === null ? "null" : typeof e, ""))),
            (l = null));
      }
    return (
      (t = Rt(d, a, t, u)),
      (t.elementType = e),
      (t.type = l),
      (t.lanes = s),
      t
    );
  }
  function Qn(e, t, a, l) {
    return ((e = Rt(7, e, l, t)), (e.lanes = a), e);
  }
  function Pr(e, t, a) {
    return ((e = Rt(6, e, null, t)), (e.lanes = a), e);
  }
  function Pd(e) {
    var t = Rt(18, null, null, 0);
    return ((t.stateNode = e), t);
  }
  function Fr(e, t, a) {
    return (
      (t = Rt(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = a),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  var Fd = new WeakMap();
  function na(e, t) {
    if (typeof e == "object" && e !== null) {
      var a = Fd.get(e);
      return a !== void 0
        ? a
        : ((t = { value: e, source: t, stack: F(t) }), Fd.set(e, t), t);
    }
    return { value: e, source: t, stack: F(t) };
  }
  var Cl = [],
    Dl = 0,
    Ku = null,
    Ai = 0,
    la = [],
    ia = 0,
    on = null,
    Sa = 1,
    xa = "";
  function Ga(e, t) {
    ((Cl[Dl++] = Ai), (Cl[Dl++] = Ku), (Ku = e), (Ai = t));
  }
  function Wd(e, t, a) {
    ((la[ia++] = Sa), (la[ia++] = xa), (la[ia++] = on), (on = e));
    var l = Sa;
    e = xa;
    var u = 32 - $t(l) - 1;
    ((l &= ~(1 << u)), (a += 1));
    var s = 32 - $t(t) + u;
    if (30 < s) {
      var d = u - (u % 5);
      ((s = (l & ((1 << d) - 1)).toString(32)),
        (l >>= d),
        (u -= d),
        (Sa = (1 << (32 - $t(t) + u)) | (a << u) | l),
        (xa = s + e));
    } else ((Sa = (1 << s) | (a << u) | l), (xa = e));
  }
  function Xu(e) {
    e.return !== null && (Ga(e, 1), Wd(e, 1, 0));
  }
  function Wr(e) {
    for (; e === Ku;)
      ((Ku = Cl[--Dl]), (Cl[Dl] = null), (Ai = Cl[--Dl]), (Cl[Dl] = null));
    for (; e === on;)
      ((on = la[--ia]),
        (la[ia] = null),
        (xa = la[--ia]),
        (la[ia] = null),
        (Sa = la[--ia]),
        (la[ia] = null));
  }
  function em(e, t) {
    ((la[ia++] = Sa),
      (la[ia++] = xa),
      (la[ia++] = on),
      (Sa = t.id),
      (xa = t.overflow),
      (on = e));
  }
  var dt = null,
    Ye = null,
    me = !1,
    fn = null,
    ua = !1,
    ec = Error(c(519));
  function dn(e) {
    var t = Error(
      c(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1]
          ? "text"
          : "HTML",
        "",
      ),
    );
    throw (wi(na(t, e)), ec);
  }
  function tm(e) {
    var t = e.stateNode,
      a = e.type,
      l = e.memoizedProps;
    switch (((t[pt] = e), (t[Mt] = l), a)) {
      case "dialog":
        (ve("cancel", t), ve("close", t));
        break;
      case "iframe":
      case "object":
      case "embed":
        ve("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < Wi.length; a++) ve(Wi[a], t);
        break;
      case "source":
        ve("error", t);
        break;
      case "img":
      case "image":
      case "link":
        (ve("error", t), ve("load", t));
        break;
      case "details":
        ve("toggle", t);
        break;
      case "input":
        (ve("invalid", t),
          md(
            t,
            l.value,
            l.defaultValue,
            l.checked,
            l.defaultChecked,
            l.type,
            l.name,
            !0,
          ));
        break;
      case "select":
        ve("invalid", t);
        break;
      case "textarea":
        (ve("invalid", t), pd(t, l.value, l.defaultValue, l.children));
    }
    ((a = l.children),
      (typeof a != "string" && typeof a != "number" && typeof a != "bigint") ||
      t.textContent === "" + a ||
      l.suppressHydrationWarning === !0 ||
      _p(t.textContent, a)
        ? (l.popover != null && (ve("beforetoggle", t), ve("toggle", t)),
          l.onScroll != null && ve("scroll", t),
          l.onScrollEnd != null && ve("scrollend", t),
          l.onClick != null && (t.onclick = _a),
          (t = !0))
        : (t = !1),
      t || dn(e, !0));
  }
  function Qu(e) {
    for (dt = e.return; dt;)
      switch (dt.tag) {
        case 5:
        case 31:
        case 13:
          ua = !1;
          return;
        case 27:
        case 3:
          ua = !0;
          return;
        default:
          dt = dt.return;
      }
  }
  function Ml(e) {
    if (e !== dt) return !1;
    if (!me) return (Qu(e), (me = !0), !1);
    var t = e.tag,
      a;
    if (
      ((a = t !== 3 && t !== 27) &&
        ((a = t === 5) &&
          ((a = e.type),
          (a =
            !(a !== "form" && a !== "button") || wo(e.type, e.memoizedProps))),
        (a = !a)),
      a && Ye && dn(e),
      Qu(e),
      t === 13)
    ) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(c(317));
      Ye = qp(e);
    } else if (t === 31) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(c(317));
      Ye = qp(e);
    } else
      t === 27
        ? ((t = Ye), En(e.type) ? ((e = Lo), (Lo = null), (Ye = e)) : (Ye = t))
        : (Ye = dt ? ra(e.stateNode.nextSibling) : null);
    return !0;
  }
  function Jn() {
    ((Ye = dt = null), (me = !1));
  }
  function tc() {
    var e = fn;
    return (
      e !== null &&
        (Zt === null ? (Zt = e) : Zt.push.apply(Zt, e), (fn = null)),
      e
    );
  }
  function wi(e) {
    fn === null ? (fn = [e]) : fn.push(e);
  }
  var ac = Ct(null),
    In = null,
    Ka = null;
  function mn(e, t, a) {
    (I(ac, t._currentValue), (t._currentValue = a));
  }
  function Xa(e) {
    ((e._currentValue = ac.current), V(ac));
  }
  function Ju(e, t, a) {
    for (; e !== null;) {
      var l = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), l !== null && (l.childLanes |= t))
          : l !== null && (l.childLanes & t) !== t && (l.childLanes |= t),
        e === a)
      )
        break;
      e = e.return;
    }
  }
  function nc(e, t, a, l) {
    var u = e.child;
    for (u !== null && (u.return = e); u !== null;) {
      var s = u.dependencies;
      if (s !== null) {
        var d = u.child;
        s = s.firstContext;
        e: for (; s !== null;) {
          var p = s;
          s = u;
          for (var j = 0; j < t.length; j++)
            if (p.context === t[j]) {
              ((s.lanes |= a),
                (p = s.alternate),
                p !== null && (p.lanes |= a),
                Ju(s.return, a, e),
                l || (d = null));
              break e;
            }
          s = p.next;
        }
      } else if (u.tag === 18) {
        if (((d = u.return), d === null)) throw Error(c(341));
        ((d.lanes |= a),
          (s = d.alternate),
          s !== null && (s.lanes |= a),
          Ju(d, a, e),
          (d = null));
      } else
        u.tag === 13 &&
        u.memoizedState !== null &&
        u.memoizedState.dehydrated === null
          ? ((u.lanes |= a),
            (d = u.alternate),
            d !== null && (d.lanes |= a),
            Ju(u.return, a, e),
            (d = u.child),
            (d = d !== null ? d.sibling : null))
          : (d = u.child);
      if (d !== null) d.return = u;
      else
        for (d = u; d !== null;) {
          if (d === e) {
            d = null;
            break;
          }
          if (((u = d.sibling), u !== null)) {
            ((u.return = d.return), (d = u));
            break;
          }
          d = d.return;
        }
      u = d;
    }
  }
  function Pn(e, t, a, l) {
    e = null;
    for (var u = t, s = !1; u !== null;) {
      if (!s) {
        if ((u.flags & 524288) !== 0) s = !0;
        else if ((u.flags & 262144) !== 0) break;
      }
      if (u.tag === 10) {
        var d = u.alternate;
        if (d === null) throw Error(c(387));
        if (((d = d.memoizedProps), d !== null)) {
          var p = u.type;
          Gt(u.pendingProps.value, d.value) ||
            (e !== null ? e.push(p) : (e = [p]));
        }
      } else if (u === Za.current) {
        if (((d = u.alternate), d === null)) throw Error(c(387));
        d.memoizedState.memoizedState !== u.memoizedState.memoizedState &&
          (e !== null ? e.push(ii) : (e = [ii]));
      }
      u = u.return;
    }
    return (e !== null && nc(t, e, a, l), (t.flags |= 262144), e !== null);
  }
  function Iu(e) {
    for (e = e.firstContext; e !== null;) {
      if (!Gt(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function Fn(e) {
    ((In = e),
      (Ka = null),
      (e = e.dependencies),
      e !== null && (e.firstContext = null));
  }
  function gt(e) {
    return am(In, e);
  }
  function Pu(e, t) {
    return (In === null && Fn(e), am(e, t));
  }
  function am(e, t) {
    var a = t._currentValue;
    if (((t = { context: t, memoizedValue: a, next: null }), Ka === null)) {
      if (e === null) throw Error(c(308));
      ((Ka = t),
        (e.dependencies = { lanes: 0, firstContext: t }),
        (e.flags |= 524288));
    } else Ka = Ka.next = t;
    return a;
  }
  var Rb =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var e = [],
              t = (this.signal = {
                aborted: !1,
                addEventListener: function (a, l) {
                  e.push(l);
                },
              });
            this.abort = function () {
              ((t.aborted = !0),
                e.forEach(function (a) {
                  return a();
                }));
            };
          },
    Ub = n.unstable_scheduleCallback,
    Bb = n.unstable_NormalPriority,
    nt = {
      $$typeof: We,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function lc() {
    return { controller: new Rb(), data: new Map(), refCount: 0 };
  }
  function Ci(e) {
    (e.refCount--,
      e.refCount === 0 &&
        Ub(Bb, function () {
          e.controller.abort();
        }));
  }
  function nm(e, t) {
    if ((e.pendingLanes & 4194048) !== 0) {
      var a = e.transitionTypes;
      for (
        a === null && (a = e.transitionTypes = []), e = 0;
        e < t.length;
        e++
      ) {
        var l = t[e];
        a.indexOf(l) === -1 && a.push(l);
      }
    }
  }
  var Di = null;
  function Zb(e) {
    var t = e.transitionTypes;
    return ((e.transitionTypes = null), t);
  }
  var Mi = null,
    ic = 0,
    Wn = 0,
    Rl = null;
  function Hb(e, t) {
    if (Mi === null) {
      var a = (Mi = []);
      ((ic = 0),
        (Wn = _o()),
        (Rl = {
          status: "pending",
          value: void 0,
          then: function (l) {
            a.push(l);
          },
        }));
    }
    return (ic++, t.then(lm, lm), t);
  }
  function lm() {
    if (--ic === 0 && ((Di = null), Mi !== null)) {
      Rl !== null && (Rl.status = "fulfilled");
      var e = Mi;
      ((Mi = null), (Wn = 0), (Rl = null));
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function Lb(e, t) {
    var a = [],
      l = {
        status: "pending",
        value: null,
        reason: null,
        then: function (u) {
          a.push(u);
        },
      };
    return (
      e.then(
        function () {
          ((l.status = "fulfilled"), (l.value = t));
          for (var u = 0; u < a.length; u++) (0, a[u])(t);
        },
        function (u) {
          for (l.status = "rejected", l.reason = u, u = 0; u < a.length; u++)
            (0, a[u])(void 0);
        },
      ),
      l
    );
  }
  var im = J.S;
  J.S = function (e, t) {
    if (
      ((Ph = qt()),
      typeof t == "object" &&
        t !== null &&
        typeof t.then == "function" &&
        Hb(e, t),
      Di !== null)
    )
      for (var a = Wl; a !== null;) (nm(a, Di), (a = a.next));
    if (((a = e.types), a !== null)) {
      for (var l = Wl; l !== null;) (nm(l, a), (l = l.next));
      if (Wn !== 0) {
        ((l = Di), l === null && (l = Di = []));
        for (var u = 0; u < a.length; u++) {
          var s = a[u];
          l.indexOf(s) === -1 && l.push(s);
        }
      }
    }
    im !== null && im(e, t);
  };
  var el = Ct(null);
  function uc() {
    var e = el.current;
    return e !== null ? e : qe.pooledCache;
  }
  function Fu(e, t) {
    t === null ? I(el, el.current) : I(el, t.pool);
  }
  function um() {
    var e = uc();
    return e === null ? null : { parent: nt._currentValue, pool: e };
  }
  var Ul = Error(c(460)),
    sc = Error(c(474)),
    Wu = Error(c(542)),
    es = { then: function () {} };
  function sm(e) {
    return ((e = e.status), e === "fulfilled" || e === "rejected");
  }
  function rm(e, t, a) {
    switch (
      ((a = e[a]),
      a === void 0 ? e.push(t) : a !== t && (t.then(_a, _a), (t = a)),
      t.status)
    ) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw (
          (e = t.reason),
          om(e),
          e === void 0 && !("reason" in t) ? Error(c(600)) : e
        );
      default:
        if (typeof t.status == "string") t.then(_a, _a);
        else {
          if (((e = qe), e !== null && 100 < e.shellSuspendCounter))
            throw Error(c(482));
          ((e = t),
            (e.status = "pending"),
            e.then(
              function (l) {
                if (t.status === "pending") {
                  var u = t;
                  ((u.status = "fulfilled"), (u.value = l));
                }
              },
              function (l) {
                if (t.status === "pending") {
                  var u = t;
                  ((u.status = "rejected"), (u.reason = l));
                }
              },
            ));
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw ((e = t.reason), om(e), e);
        }
        throw ((al = t), Ul);
    }
  }
  function tl(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (a) {
      throw a !== null && typeof a == "object" && typeof a.then == "function"
        ? ((al = a), Ul)
        : a;
    }
  }
  var al = null;
  function cm() {
    if (al === null) throw Error(c(459));
    var e = al;
    return ((al = null), e);
  }
  function om(e) {
    if (e === Ul || e === Wu) throw Error(c(483));
  }
  var Bl = null,
    Ri = 0;
  function ts(e) {
    var t = Ri;
    return ((Ri += 1), Bl === null && (Bl = []), rm(Bl, e, t));
  }
  function hn(e, t) {
    ((t = t.props.ref), (e.ref = t !== void 0 ? t : null));
  }
  function as(e, t) {
    throw t.$$typeof === se
      ? Error(c(525))
      : ((e = Object.prototype.toString.call(t)),
        Error(
          c(
            31,
            e === "[object Object]"
              ? "object with keys {" + Object.keys(t).join(", ") + "}"
              : e,
          ),
        ));
  }
  function fm(e) {
    function t(N, S) {
      if (e) {
        var O = N.deletions;
        O === null ? ((N.deletions = [S]), (N.flags |= 16)) : O.push(S);
      }
    }
    function a(N, S) {
      if (!e) return null;
      for (; S !== null;) (t(N, S), (S = S.sibling));
      return null;
    }
    function l(N) {
      for (var S = new Map(); N !== null;)
        (N.key === null ? S.set(N.index, N) : S.set(N.key, N), (N = N.sibling));
      return S;
    }
    function u(N, S) {
      return ((N = Va(N, S)), (N.index = 0), (N.sibling = null), N);
    }
    function s(N, S, O) {
      return (
        (N.index = O),
        e
          ? ((O = N.alternate),
            O !== null
              ? ((O = O.index), O < S ? ((N.flags |= 2), S) : O)
              : ((N.flags |= 134217730), S))
          : ((N.flags |= 1048576), S)
      );
    }
    function d(N) {
      return (e && N.alternate === null && (N.flags |= 134217730), N);
    }
    function p(N, S, O, R) {
      return S === null || S.tag !== 6
        ? ((S = Pr(O, N.mode, R)), (S.return = N), S)
        : ((S = u(S, O)), (S.return = N), S);
    }
    function j(N, S, O, R) {
      var K = O.type;
      return K === Se
        ? ((N = w(N, S, O.props.children, R, O.key)), hn(N, O), N)
        : S !== null &&
            (S.elementType === K ||
              (typeof K == "object" &&
                K !== null &&
                K.$$typeof === Ne &&
                tl(K) === S.type))
          ? ((S = u(S, O.props)), hn(S, O), (S.return = N), S)
          : ((S = Gu(O.type, O.key, O.props, null, N.mode, R)),
            hn(S, O),
            (S.return = N),
            S);
    }
    function E(N, S, O, R) {
      return S === null ||
        S.tag !== 4 ||
        S.stateNode.containerInfo !== O.containerInfo ||
        S.stateNode.implementation !== O.implementation
        ? ((S = Fr(O, N.mode, R)), (S.return = N), S)
        : ((S = u(S, O.children || [])), (S.return = N), S);
    }
    function w(N, S, O, R, K) {
      return S === null || S.tag !== 7
        ? ((S = Qn(O, N.mode, R, K)), (S.return = N), S)
        : ((S = u(S, O)), (S.return = N), S);
    }
    function U(N, S, O) {
      if (
        (typeof S == "string" && S !== "") ||
        typeof S == "number" ||
        typeof S == "bigint"
      )
        return ((S = Pr("" + S, N.mode, O)), (S.return = N), S);
      if (typeof S == "object" && S !== null) {
        switch (S.$$typeof) {
          case ct:
            return (
              (O = Gu(S.type, S.key, S.props, null, N.mode, O)),
              hn(O, S),
              (O.return = N),
              O
            );
          case Fe:
            return ((S = Fr(S, N.mode, O)), (S.return = N), S);
          case Ne:
            return ((S = tl(S)), U(N, S, O));
        }
        if (xe(S) || P(S))
          return ((S = Qn(S, N.mode, O, null)), (S.return = N), S);
        if (typeof S.then == "function") return U(N, ts(S), O);
        if (S.$$typeof === We) return U(N, Pu(N, S), O);
        as(N, S);
      }
      return null;
    }
    function z(N, S, O, R) {
      var K = S !== null ? S.key : null;
      if (
        (typeof O == "string" && O !== "") ||
        typeof O == "number" ||
        typeof O == "bigint"
      )
        return K !== null ? null : p(N, S, "" + O, R);
      if (typeof O == "object" && O !== null) {
        switch (O.$$typeof) {
          case ct:
            return O.key === K ? j(N, S, O, R) : null;
          case Fe:
            return O.key === K ? E(N, S, O, R) : null;
          case Ne:
            return ((O = tl(O)), z(N, S, O, R));
        }
        if (xe(O) || P(O)) return K !== null ? null : w(N, S, O, R, null);
        if (typeof O.then == "function") return z(N, S, ts(O), R);
        if (O.$$typeof === We) return z(N, S, Pu(N, O), R);
        as(N, O);
      }
      return null;
    }
    function A(N, S, O, R, K) {
      if (
        (typeof R == "string" && R !== "") ||
        typeof R == "number" ||
        typeof R == "bigint"
      )
        return ((N = N.get(O) || null), p(S, N, "" + R, K));
      if (typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case ct:
            return (
              (N = N.get(R.key === null ? O : R.key) || null),
              j(S, N, R, K)
            );
          case Fe:
            return (
              (N = N.get(R.key === null ? O : R.key) || null),
              E(S, N, R, K)
            );
          case Ne:
            return ((R = tl(R)), A(N, S, O, R, K));
        }
        if (xe(R) || P(R)) return ((N = N.get(O) || null), w(S, N, R, K, null));
        if (typeof R.then == "function") return A(N, S, O, ts(R), K);
        if (R.$$typeof === We) return A(N, S, O, Pu(S, R), K);
        as(S, R);
      }
      return null;
    }
    function Y(N, S, O, R) {
      for (
        var K = null, ke = null, W = S, le = (S = 0), ut = null;
        W !== null && le < O.length;
        le++
      ) {
        W.index > le ? ((ut = W), (W = null)) : (ut = W.sibling);
        var ze = z(N, W, O[le], R);
        if (ze === null) {
          W === null && (W = ut);
          break;
        }
        (e && W && ze.alternate === null && t(N, W),
          (S = s(ze, S, le)),
          ke === null ? (K = ze) : (ke.sibling = ze),
          (ke = ze),
          (W = ut));
      }
      if (le === O.length) return (a(N, W), me && Ga(N, le), K);
      if (W === null) {
        for (; le < O.length; le++)
          ((W = U(N, O[le], R)),
            W !== null &&
              ((S = s(W, S, le)),
              ke === null ? (K = W) : (ke.sibling = W),
              (ke = W)));
        return (me && Ga(N, le), K);
      }
      for (W = l(W); le < O.length; le++)
        ((ut = A(W, N, le, O[le], R)),
          ut !== null &&
            (e &&
              ((ze = ut.alternate),
              ze !== null && W.delete(ze.key === null ? le : ze.key)),
            (S = s(ut, S, le)),
            ke === null ? (K = ut) : (ke.sibling = ut),
            (ke = ut)));
      return (
        e &&
          W.forEach(function (Dn) {
            return t(N, Dn);
          }),
        me && Ga(N, le),
        K
      );
    }
    function Q(N, S, O, R) {
      if (O == null) throw Error(c(151));
      for (
        var K = null, ke = null, W = S, le = (S = 0), ut = null, ze = O.next();
        W !== null && !ze.done;
        le++, ze = O.next()
      ) {
        W.index > le ? ((ut = W), (W = null)) : (ut = W.sibling);
        var Dn = z(N, W, ze.value, R);
        if (Dn === null) {
          W === null && (W = ut);
          break;
        }
        (e && W && Dn.alternate === null && t(N, W),
          (S = s(Dn, S, le)),
          ke === null ? (K = Dn) : (ke.sibling = Dn),
          (ke = Dn),
          (W = ut));
      }
      if (ze.done) return (a(N, W), me && Ga(N, le), K);
      if (W === null) {
        for (; !ze.done; le++, ze = O.next())
          ((ze = U(N, ze.value, R)),
            ze !== null &&
              ((S = s(ze, S, le)),
              ke === null ? (K = ze) : (ke.sibling = ze),
              (ke = ze)));
        return (me && Ga(N, le), K);
      }
      for (W = l(W); !ze.done; le++, ze = O.next())
        ((ze = A(W, N, le, ze.value, R)),
          ze !== null &&
            (e &&
              ((ut = ze.alternate),
              ut !== null && W.delete(ut.key === null ? le : ut.key)),
            (S = s(ze, S, le)),
            ke === null ? (K = ze) : (ke.sibling = ze),
            (ke = ze)));
      return (
        e &&
          W.forEach(function (k1) {
            return t(N, k1);
          }),
        me && Ga(N, le),
        K
      );
    }
    function fe(N, S, O, R) {
      if (
        (typeof O == "object" &&
          O !== null &&
          O.type === Se &&
          O.key === null &&
          O.props.ref === void 0 &&
          (O = O.props.children),
        typeof O == "object" && O !== null)
      ) {
        switch (O.$$typeof) {
          case ct:
            e: {
              for (var K = O.key; S !== null;) {
                if (S.key === K) {
                  if (((K = O.type), K === Se)) {
                    if (S.tag === 7) {
                      (a(N, S.sibling),
                        (R = u(S, O.props.children)),
                        hn(R, O),
                        (R.return = N),
                        (N = R));
                      break e;
                    }
                  } else if (
                    S.elementType === K ||
                    (typeof K == "object" &&
                      K !== null &&
                      K.$$typeof === Ne &&
                      tl(K) === S.type)
                  ) {
                    (a(N, S.sibling),
                      (R = u(S, O.props)),
                      hn(R, O),
                      (R.return = N),
                      (N = R));
                    break e;
                  }
                  a(N, S);
                  break;
                } else t(N, S);
                S = S.sibling;
              }
              O.type === Se
                ? ((R = Qn(O.props.children, N.mode, R, O.key)),
                  hn(R, O),
                  (R.return = N),
                  (N = R))
                : ((R = Gu(O.type, O.key, O.props, null, N.mode, R)),
                  hn(R, O),
                  (R.return = N),
                  (N = R));
            }
            return d(N);
          case Fe:
            e: {
              for (K = O.key; S !== null;) {
                if (S.key === K)
                  if (
                    S.tag === 4 &&
                    S.stateNode.containerInfo === O.containerInfo &&
                    S.stateNode.implementation === O.implementation
                  ) {
                    (a(N, S.sibling),
                      (R = u(S, O.children || [])),
                      (R.return = N),
                      (N = R));
                    break e;
                  } else {
                    a(N, S);
                    break;
                  }
                else t(N, S);
                S = S.sibling;
              }
              ((R = Fr(O, N.mode, R)), (R.return = N), (N = R));
            }
            return d(N);
          case Ne:
            return ((O = tl(O)), fe(N, S, O, R));
        }
        if (xe(O)) return Y(N, S, O, R);
        if (P(O)) {
          if (((K = P(O)), typeof K != "function")) throw Error(c(150));
          return ((O = K.call(O)), Q(N, S, O, R));
        }
        if (typeof O.then == "function") return fe(N, S, ts(O), R);
        if (O.$$typeof === We) return fe(N, S, Pu(N, O), R);
        as(N, O);
      }
      return (typeof O == "string" && O !== "") ||
        typeof O == "number" ||
        typeof O == "bigint"
        ? ((O = "" + O),
          S !== null && S.tag === 6
            ? (a(N, S.sibling), (R = u(S, O)), (R.return = N), (N = R))
            : (a(N, S), (R = Pr(O, N.mode, R)), (R.return = N), (N = R)),
          d(N))
        : a(N, S);
    }
    return function (N, S, O, R) {
      try {
        Ri = 0;
        var K = fe(N, S, O, R);
        return ((Bl = null), K);
      } catch (W) {
        if (W === Ul || W === Wu) throw W;
        var ke = Rt(29, W, null, N.mode);
        return ((ke.lanes = R), (ke.return = N), ke);
      }
    };
  }
  var nl = fm(!0),
    dm = fm(!1),
    pn = !1;
  function rc(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function cc(e, t) {
    ((e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          callbacks: null,
        }));
  }
  function gn(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function vn(e, t, a) {
    var l = e.updateQueue;
    if (l === null) return null;
    if (((l = l.shared), (Oe & 2) !== 0)) {
      var u = l.pending;
      return (
        u === null ? (t.next = t) : ((t.next = u.next), (u.next = t)),
        (l.pending = t),
        (t = Vu(e)),
        Jd(e, null, a),
        t
      );
    }
    return ($u(e, l, t, a), Vu(e));
  }
  function Ui(e, t, a) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (a & 4194048) !== 0))
    ) {
      var l = t.lanes;
      ((l &= e.pendingLanes), (a |= l), (t.lanes = a), Wf(e, a));
    }
  }
  function oc(e, t) {
    var a = e.updateQueue,
      l = e.alternate;
    if (l !== null && ((l = l.updateQueue), a === l)) {
      var u = null,
        s = null;
      if (((a = a.firstBaseUpdate), a !== null)) {
        do {
          var d = {
            lane: a.lane,
            tag: a.tag,
            payload: a.payload,
            callback: null,
            next: null,
          };
          (s === null ? (u = s = d) : (s = s.next = d), (a = a.next));
        } while (a !== null);
        s === null ? (u = s = t) : (s = s.next = t);
      } else u = s = t;
      ((a = {
        baseState: l.baseState,
        firstBaseUpdate: u,
        lastBaseUpdate: s,
        shared: l.shared,
        callbacks: l.callbacks,
      }),
        (e.updateQueue = a));
      return;
    }
    ((e = a.lastBaseUpdate),
      e === null ? (a.firstBaseUpdate = t) : (e.next = t),
      (a.lastBaseUpdate = t));
  }
  var fc = !1;
  function Bi() {
    if (fc) {
      var e = Rl;
      if (e !== null) throw e;
    }
  }
  function Zi(e, t, a, l) {
    fc = !1;
    var u = e.updateQueue;
    pn = !1;
    var s = u.firstBaseUpdate,
      d = u.lastBaseUpdate,
      p = u.shared.pending;
    if (p !== null) {
      u.shared.pending = null;
      var j = p,
        E = j.next;
      ((j.next = null), d === null ? (s = E) : (d.next = E), (d = j));
      var w = e.alternate;
      w !== null &&
        ((w = w.updateQueue),
        (p = w.lastBaseUpdate),
        p !== d &&
          (p === null ? (w.firstBaseUpdate = E) : (p.next = E),
          (w.lastBaseUpdate = j)));
    }
    if (s !== null) {
      var U = u.baseState;
      ((d = 0), (w = E = j = null), (p = s));
      do {
        var z = p.lane & -536870913,
          A = z !== p.lane;
        if (A ? (be & z) === z : (l & z) === z) {
          (z !== 0 && z === Wn && (fc = !0),
            w !== null &&
              (w = w.next =
                {
                  lane: 0,
                  tag: p.tag,
                  payload: p.payload,
                  callback: null,
                  next: null,
                }));
          e: {
            var Y = e,
              Q = p;
            z = t;
            var fe = a;
            switch (Q.tag) {
              case 1:
                if (((Y = Q.payload), typeof Y == "function")) {
                  U = Y.call(fe, U, z);
                  break e;
                }
                U = Y;
                break e;
              case 3:
                Y.flags = (Y.flags & -65537) | 128;
              case 0:
                if (
                  ((Y = Q.payload),
                  (z = typeof Y == "function" ? Y.call(fe, U, z) : Y),
                  z == null)
                )
                  break e;
                U = ae({}, U, z);
                break e;
              case 2:
                pn = !0;
            }
          }
          ((z = p.callback),
            z !== null &&
              ((e.flags |= 64),
              A && (e.flags |= 8192),
              (A = u.callbacks),
              A === null ? (u.callbacks = [z]) : A.push(z)));
        } else
          ((A = {
            lane: z,
            tag: p.tag,
            payload: p.payload,
            callback: p.callback,
            next: null,
          }),
            w === null ? ((E = w = A), (j = U)) : (w = w.next = A),
            (d |= z));
        if (((p = p.next), p === null)) {
          if (((p = u.shared.pending), p === null)) break;
          ((A = p),
            (p = A.next),
            (A.next = null),
            (u.lastBaseUpdate = A),
            (u.shared.pending = null));
        }
      } while (!0);
      (w === null && (j = U),
        (u.baseState = j),
        (u.firstBaseUpdate = E),
        (u.lastBaseUpdate = w),
        s === null && (u.shared.lanes = 0),
        (xn |= d),
        (e.lanes = d),
        (e.memoizedState = U));
    }
  }
  function mm(e, t) {
    if (typeof e != "function") throw Error(c(191, e));
    e.call(t);
  }
  function hm(e, t) {
    var a = e.callbacks;
    if (a !== null)
      for (e.callbacks = null, e = 0; e < a.length; e++) mm(a[e], t);
  }
  var yn = Ct(null),
    ns = Ct(0);
  function pm(e, t) {
    ((e = Fa), I(ns, e), I(yn, t), (Fa = e | t.baseLanes));
  }
  function dc() {
    (I(ns, Fa), I(yn, yn.current));
  }
  function mc() {
    ((Fa = ns.current), V(yn), V(ns));
  }
  var vt = Ct(null),
    _t = null;
  function bn(e) {
    var t = e.alternate;
    (I(yt, yt.current & 1),
      I(vt, e),
      _t === null &&
        (t === null || yn.current !== null || t.memoizedState !== null) &&
        (_t = e));
  }
  function hc(e) {
    (I(yt, yt.current), I(vt, e), _t === null && (_t = e));
  }
  function gm(e) {
    e.tag === 22
      ? (I(yt, yt.current), I(vt, e), _t === null && (_t = e))
      : kn();
  }
  function kn() {
    (I(yt, yt.current), I(vt, vt.current));
  }
  function Kt(e) {
    (V(vt), _t === e && (_t = null), V(yt));
  }
  var yt = Ct(0);
  function Hi(e, t) {
    (I(vt, vt.current), I(yt, t));
  }
  function pc(e) {
    (V(yt), V(vt), _t === e && (_t = null));
  }
  function ls(e) {
    for (var t = e; t !== null;) {
      if (t.tag === 13) {
        var a = t.memoizedState;
        if (a !== null && ((a = a.dehydrated), a === null || Zo(a) || Ho(a)))
          return t;
      } else if (
        t.tag === 19 &&
        t.memoizedProps.revealOrder !== "independent"
      ) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        ((t.child.return = t), (t = t.child));
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null;) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
    return null;
  }
  var Qa = 0,
    oe = null,
    He = null,
    lt = null,
    is = !1,
    Zl = !1,
    ll = !1,
    us = 0,
    Li = 0,
    Hl = null,
    qb = 0;
  function Ie() {
    throw Error(c(321));
  }
  function gc(e, t) {
    if (t === null) return !1;
    for (var a = 0; a < t.length && a < e.length; a++)
      if (!Gt(e[a], t[a])) return !1;
    return !0;
  }
  function vc(e, t, a, l, u, s) {
    return (
      (Qa = s),
      (oe = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (J.H = e === null || e.memoizedState === null ? Wm : eh),
      (ll = !1),
      (s = a(l, u)),
      (ll = !1),
      Zl && (s = ym(t, a, l, u)),
      vm(e),
      s
    );
  }
  function vm(e) {
    J.H = ms;
    var t = He !== null && He.next !== null;
    if (((Qa = 0), (lt = He = oe = null), (is = !1), (Li = 0), (Hl = null), t))
      throw Error(c(300));
    e === null ||
      it ||
      ((e = e.dependencies), e !== null && Iu(e) && (it = !0));
  }
  function ym(e, t, a, l) {
    oe = e;
    var u = 0;
    do {
      if ((Zl && (Hl = null), (Li = 0), (Zl = !1), 25 <= u))
        throw Error(c(301));
      if (((u += 1), (lt = He = null), e.updateQueue != null)) {
        var s = e.updateQueue;
        ((s.lastEffect = null),
          (s.events = null),
          (s.stores = null),
          s.memoCache != null && (s.memoCache.index = 0));
      }
      ((J.H = Jb), (s = t(a, l)));
    } while (Zl);
    return s;
  }
  function Yb() {
    var e = J.H,
      t = e.useState()[0];
    return (
      (t = typeof t.then == "function" ? qi(t) : t),
      (e = e.useState()[0]),
      (He !== null ? He.memoizedState : null) !== e && (oe.flags |= 1024),
      t
    );
  }
  function yc() {
    var e = us !== 0;
    return ((us = 0), e);
  }
  function bc(e, t, a) {
    ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~a));
  }
  function kc(e) {
    if (is) {
      for (e = e.memoizedState; e !== null;) {
        var t = e.queue;
        (t !== null && (t.pending = null), (e = e.next));
      }
      is = !1;
    }
    ((Qa = 0), (lt = He = oe = null), (Zl = !1), (Li = us = 0), (Hl = null));
  }
  function Tt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (lt === null ? (oe.memoizedState = lt = e) : (lt = lt.next = e), lt);
  }
  function et() {
    if (He === null) {
      var e = oe.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = He.next;
    var t = lt === null ? oe.memoizedState : lt.next;
    if (t !== null) ((lt = t), (He = e));
    else {
      if (e === null)
        throw oe.alternate === null ? Error(c(467)) : Error(c(310));
      ((He = e),
        (e = {
          memoizedState: He.memoizedState,
          baseState: He.baseState,
          baseQueue: He.baseQueue,
          queue: He.queue,
          next: null,
        }),
        lt === null ? (oe.memoizedState = lt = e) : (lt = lt.next = e));
    }
    return lt;
  }
  function ss() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function qi(e) {
    var t = Li;
    return (
      (Li += 1),
      Hl === null && (Hl = []),
      (e = rm(Hl, e, t)),
      (t = oe),
      (lt === null ? t.memoizedState : lt.next) === null &&
        ((t = t.alternate),
        (J.H = t === null || t.memoizedState === null ? Wm : eh)),
      e
    );
  }
  function rs(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return qi(e);
      if (e.$$typeof === H) return;
      if (e.$$typeof === We) return gt(e);
    }
    throw Error(c(438, String(e)));
  }
  function jc(e) {
    var t = null,
      a = oe.updateQueue;
    if ((a !== null && (t = a.memoCache), t == null)) {
      var l = oe.alternate;
      l !== null &&
        ((l = l.updateQueue),
        l !== null &&
          ((l = l.memoCache),
          l != null &&
            (t = {
              data: l.data.map(function (u) {
                return u.slice();
              }),
              index: 0,
            })));
    }
    if (
      (t == null && (t = { data: [], index: 0 }),
      a === null && ((a = ss()), (oe.updateQueue = a)),
      (a.memoCache = t),
      (a = t.data[t.index]),
      a === void 0)
    )
      for (a = t.data[t.index] = Array(e), l = 0; l < e; l++) a[l] = Ua;
    return (t.index++, a);
  }
  function Ja(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function cs(e) {
    var t = et();
    return _c(t, He, e);
  }
  function _c(e, t, a) {
    var l = e.queue;
    if (l === null) throw Error(c(311));
    l.lastRenderedReducer = a;
    var u = e.baseQueue,
      s = l.pending;
    if (s !== null) {
      if (u !== null) {
        var d = u.next;
        ((u.next = s.next), (s.next = d));
      }
      ((t.baseQueue = u = s), (l.pending = null));
    }
    if (((s = e.baseState), u === null)) e.memoizedState = s;
    else {
      t = u.next;
      var p = (d = null),
        j = null,
        E = t,
        w = !1;
      do {
        var U = E.lane & -536870913;
        if (U !== E.lane ? (be & U) === U : (Qa & U) === U) {
          var z = E.revertLane;
          if (z === 0)
            (j !== null &&
              (j = j.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: E.action,
                  hasEagerState: E.hasEagerState,
                  eagerState: E.eagerState,
                  next: null,
                }),
              U === Wn && (w = !0));
          else if ((Qa & z) === z) {
            ((E = E.next), z === Wn && (w = !0));
            continue;
          } else
            ((U = {
              lane: 0,
              revertLane: E.revertLane,
              gesture: null,
              action: E.action,
              hasEagerState: E.hasEagerState,
              eagerState: E.eagerState,
              next: null,
            }),
              j === null ? ((p = j = U), (d = s)) : (j = j.next = U),
              (oe.lanes |= z),
              (xn |= z));
          ((U = E.action),
            ll && a(s, U),
            (s = E.hasEagerState ? E.eagerState : a(s, U)));
        } else
          ((z = {
            lane: U,
            revertLane: E.revertLane,
            gesture: E.gesture,
            action: E.action,
            hasEagerState: E.hasEagerState,
            eagerState: E.eagerState,
            next: null,
          }),
            j === null ? ((p = j = z), (d = s)) : (j = j.next = z),
            (oe.lanes |= U),
            (xn |= U));
        E = E.next;
      } while (E !== null && E !== t);
      if (
        (j === null ? (d = s) : (j.next = p),
        !Gt(s, e.memoizedState) && ((it = !0), w && ((a = Rl), a !== null)))
      )
        throw a;
      ((e.memoizedState = s),
        (e.baseState = d),
        (e.baseQueue = j),
        (l.lastRenderedState = s));
    }
    return (u === null && (l.lanes = 0), [e.memoizedState, l.dispatch]);
  }
  function Sc(e) {
    var t = et(),
      a = t.queue;
    if (a === null) throw Error(c(311));
    a.lastRenderedReducer = e;
    var l = a.dispatch,
      u = a.pending,
      s = t.memoizedState;
    if (u !== null) {
      a.pending = null;
      var d = (u = u.next);
      do ((s = e(s, d.action)), (d = d.next));
      while (d !== u);
      (Gt(s, t.memoizedState) || (it = !0),
        (t.memoizedState = s),
        t.baseQueue === null && (t.baseState = s),
        (a.lastRenderedState = s));
    }
    return [s, l];
  }
  function bm(e, t, a) {
    var l = oe,
      u = et(),
      s = me;
    if (s) {
      if (a === void 0) throw Error(c(407));
      a = a();
    } else a = t();
    var d = !Gt((He || u).memoizedState, a);
    if (
      (d && ((u.memoizedState = a), (it = !0)),
      (u = u.queue),
      Nc(_m.bind(null, l, u, e), [e]),
      (e =
        u.getSnapshot !== t ||
        d ||
        (lt !== null && (lt.memoizedState.tag & 1) !== 0)),
      Ll(e ? 9 : 8, { destroy: void 0 }, jm.bind(null, l, u, a, t), null),
      e)
    ) {
      if (((l.flags |= 2048), qe === null)) throw Error(c(349));
      s || (Qa & 127) !== 0 || km(l, t, a);
    }
    return a;
  }
  function km(e, t, a) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: a }),
      (t = oe.updateQueue),
      t === null
        ? ((t = ss()), (oe.updateQueue = t), (t.stores = [e]))
        : ((a = t.stores), a === null ? (t.stores = [e]) : a.push(e)));
  }
  function jm(e, t, a, l) {
    ((t.value = a), (t.getSnapshot = l), Sm(t) && xm(e));
  }
  function _m(e, t, a) {
    return a(function () {
      Sm(t) && xm(e);
    });
  }
  function Sm(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var a = t();
      return !Gt(e, a);
    } catch {
      return !0;
    }
  }
  function xm(e) {
    var t = Xn(e, 2);
    t !== null && Ht(t, e, 2);
  }
  function xc(e) {
    var t = Tt();
    if (typeof e == "function") {
      var a = e;
      if (((e = a()), ll)) {
        sn(!0);
        try {
          a();
        } finally {
          sn(!1);
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = e),
      (t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ja,
        lastRenderedState: e,
      }),
      t
    );
  }
  function zm(e, t, a, l) {
    return ((e.baseState = a), _c(e, He, typeof l == "function" ? l : Ja));
  }
  function $b(e, t, a, l, u) {
    if (ds(e)) throw Error(c(485));
    if (((e = t.action), e !== null)) {
      var s = {
        payload: u,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (d) {
          s.listeners.push(d);
        },
      };
      (J.T !== null ? a(!0) : (s.isTransition = !1),
        l(s),
        (a = t.pending),
        a === null
          ? ((s.next = t.pending = s), Nm(t, s))
          : ((s.next = a.next), (t.pending = a.next = s)));
    }
  }
  function Nm(e, t) {
    var a = t.action,
      l = t.payload,
      u = e.state;
    if (t.isTransition) {
      var s = J.T,
        d = {};
      ((d.types = s !== null ? s.types : null), (J.T = d));
      try {
        var p = a(u, l),
          j = J.S;
        (j !== null && j(d, p), Tm(e, t, p));
      } catch (E) {
        zc(e, t, E);
      } finally {
        (s !== null && d.types !== null && (s.types = d.types), (J.T = s));
      }
    } else
      try {
        ((s = a(u, l)), Tm(e, t, s));
      } catch (E) {
        zc(e, t, E);
      }
  }
  function Tm(e, t, a) {
    a !== null && typeof a == "object" && typeof a.then == "function"
      ? a.then(
          function (l) {
            Em(e, t, l);
          },
          function (l) {
            return zc(e, t, l);
          },
        )
      : Em(e, t, a);
  }
  function Em(e, t, a) {
    ((t.status = "fulfilled"),
      (t.value = a),
      Om(t),
      (e.state = a),
      (t = e.pending),
      t !== null &&
        ((a = t.next),
        a === t ? (e.pending = null) : ((a = a.next), (t.next = a), Nm(e, a))));
  }
  function zc(e, t, a) {
    var l = e.pending;
    if (((e.pending = null), l !== null)) {
      l = l.next;
      do ((t.status = "rejected"), (t.reason = a), Om(t), (t = t.next));
      while (t !== l);
    }
    e.action = null;
  }
  function Om(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function Am(e, t) {
    return t;
  }
  function wm(e, t) {
    if (me) {
      var a = qe.formState;
      if (a !== null) {
        e: {
          var l = oe;
          if (me) {
            if (Ye) {
              t: {
                for (var u = Ye, s = ua; u.nodeType !== 8;) {
                  if (!s) {
                    u = null;
                    break t;
                  }
                  if (((u = ra(u.nextSibling)), u === null)) {
                    u = null;
                    break t;
                  }
                }
                ((s = u.data), (u = s === "F!" || s === "F" ? u : null));
              }
              if (u) {
                ((Ye = ra(u.nextSibling)), (l = u.data === "F!"));
                break e;
              }
            }
            dn(l);
          }
          l = !1;
        }
        l && (t = a[0]);
      }
    }
    return (
      (a = Tt()),
      (a.memoizedState = a.baseState = t),
      (l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Am,
        lastRenderedState: t,
      }),
      (a.queue = l),
      (a = Im.bind(null, oe, l)),
      (l.dispatch = a),
      (l = xc(!1)),
      (s = wc.bind(null, oe, !1, l.queue)),
      (l = Tt()),
      (u = { state: t, dispatch: null, action: e, pending: null }),
      (l.queue = u),
      (a = $b.bind(null, oe, u, s, a)),
      (u.dispatch = a),
      (l.memoizedState = e),
      [t, a, !1]
    );
  }
  function Cm(e) {
    var t = et();
    return Dm(t, He, e);
  }
  function Dm(e, t, a) {
    if (
      ((t = _c(e, t, Am)[0]),
      (e = cs(Ja)[0]),
      typeof t == "object" && t !== null && typeof t.then == "function")
    )
      try {
        var l = qi(t);
      } catch (d) {
        throw d === Ul ? Wu : d;
      }
    else l = t;
    t = et();
    var u = t.queue,
      s = u.dispatch;
    return (
      a !== t.memoizedState &&
        ((oe.flags |= 2048),
        Ll(9, { destroy: void 0 }, Vb.bind(null, u, a), null)),
      [l, s, e]
    );
  }
  function Vb(e, t) {
    e.action = t;
  }
  function Mm(e) {
    var t = et(),
      a = He;
    if (a !== null) return Dm(t, a, e);
    (et(), (t = t.memoizedState), (a = et()));
    var l = a.queue.dispatch;
    return ((a.memoizedState = e), [t, l, !1]);
  }
  function Ll(e, t, a, l) {
    return (
      (e = { tag: e, create: a, deps: l, inst: t, next: null }),
      (t = oe.updateQueue),
      t === null && ((t = ss()), (oe.updateQueue = t)),
      (a = t.lastEffect),
      a === null
        ? (t.lastEffect = e.next = e)
        : ((l = a.next), (a.next = e), (e.next = l), (t.lastEffect = e)),
      e
    );
  }
  function Rm() {
    return et().memoizedState;
  }
  function os(e, t, a, l) {
    var u = Tt();
    ((oe.flags |= e),
      (u.memoizedState = Ll(
        1 | t,
        { destroy: void 0 },
        a,
        l === void 0 ? null : l,
      )));
  }
  function fs(e, t, a, l) {
    var u = et();
    l = l === void 0 ? null : l;
    var s = u.memoizedState.inst;
    He !== null && l !== null && gc(l, He.memoizedState.deps)
      ? (u.memoizedState = Ll(t, s, a, l))
      : ((oe.flags |= e), (u.memoizedState = Ll(1 | t, s, a, l)));
  }
  function Um(e, t) {
    os(8390656, 8, e, t);
  }
  function Nc(e, t) {
    fs(2048, 8, e, t);
  }
  function Gb(e) {
    oe.flags |= 4;
    var t = oe.updateQueue;
    if (t === null) ((t = ss()), (oe.updateQueue = t), (t.events = [e]));
    else {
      var a = t.events;
      a === null ? (t.events = [e]) : a.push(e);
    }
  }
  function Bm(e) {
    var t = et().memoizedState;
    return (
      Gb({ ref: t, nextImpl: e }),
      function () {
        if ((Oe & 2) !== 0) throw Error(c(440));
        return t.impl.apply(void 0, arguments);
      }
    );
  }
  function Zm(e, t) {
    return fs(4, 2, e, t);
  }
  function Hm(e, t) {
    return fs(4, 4, e, t);
  }
  function Lm(e, t) {
    if (typeof t == "function") {
      e = e();
      var a = t(e);
      return function () {
        typeof a == "function" ? a() : t(null);
      };
    }
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function qm(e, t, a) {
    ((a = a != null ? a.concat([e]) : null), fs(4, 4, Lm.bind(null, t, e), a));
  }
  function Tc() {}
  function Ym(e, t) {
    var a = et();
    t = t === void 0 ? null : t;
    var l = a.memoizedState;
    return t !== null && gc(t, l[1]) ? l[0] : ((a.memoizedState = [e, t]), e);
  }
  function $m(e, t) {
    var a = et();
    t = t === void 0 ? null : t;
    var l = a.memoizedState;
    if (t !== null && gc(t, l[1])) return l[0];
    if (((l = e()), ll)) {
      sn(!0);
      try {
        e();
      } finally {
        sn(!1);
      }
    }
    return ((a.memoizedState = [l, t]), l);
  }
  function Ec(e, t, a) {
    return a === void 0 || ((Qa & 1073741824) !== 0 && (be & 261930) === 0)
      ? (e.memoizedState = t)
      : ((e.memoizedState = a), (e = Wh()), (oe.lanes |= e), (xn |= e), a);
  }
  function Vm(e, t, a, l) {
    return Gt(a, t)
      ? a
      : yn.current !== null
        ? ((e = Ec(e, a, l)), Gt(e, t) || (it = !0), e)
        : (Qa & 106) === 0 || ((Qa & 1073741824) !== 0 && (be & 261930) === 0)
          ? ((it = !0), (e.memoizedState = a))
          : ((e = Wh()), (oe.lanes |= e), (xn |= e), t);
  }
  function Gm(e, t, a, l, u) {
    var s = ue.p;
    ue.p = s !== 0 && 8 > s ? s : 8;
    var d = J.T,
      p = {};
    ((p.types = d !== null ? d.types : null), (J.T = p), wc(e, !1, t, a));
    try {
      var j = u(),
        E = J.S;
      if (
        (E !== null && E(p, j),
        j !== null && typeof j == "object" && typeof j.then == "function")
      ) {
        var w = Lb(j, l);
        Yi(e, t, w, It(e));
      } else Yi(e, t, l, It(e));
    } catch (U) {
      Yi(e, t, { then: function () {}, status: "rejected", reason: U }, It());
    } finally {
      ((ue.p = s),
        d !== null && p.types !== null && (d.types = p.types),
        (J.T = d));
    }
  }
  function Kb() {}
  function Oc(e, t, a, l) {
    if (e.tag !== 5) throw Error(c(476));
    var u = Km(e).queue;
    Gm(
      e,
      u,
      t,
      zt,
      a === null
        ? Kb
        : function () {
            return (Xm(e), a(l));
          },
    );
  }
  function Km(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: zt,
      baseState: zt,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ja,
        lastRenderedState: zt,
      },
      next: null,
    };
    var a = {};
    return (
      (t.next = {
        memoizedState: a,
        baseState: a,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Ja,
          lastRenderedState: a,
        },
        next: null,
      }),
      (e.memoizedState = t),
      (e = e.alternate),
      e !== null && (e.memoizedState = t),
      t
    );
  }
  function Xm(e) {
    var t = Km(e);
    (t.next === null && (t = e.alternate.memoizedState),
      Yi(e, t.next.queue, {}, It()));
  }
  function Ac() {
    return gt(ii);
  }
  function Qm() {
    return et().memoizedState;
  }
  function Jm() {
    return et().memoizedState;
  }
  function Xb(e) {
    for (var t = e.return; t !== null;) {
      switch (t.tag) {
        case 24:
        case 3:
          var a = It();
          e = gn(a);
          var l = vn(t, e, a);
          (l !== null && (Ht(l, t, a), Ui(l, t, a)),
            (t = { cache: lc() }),
            (e.payload = t));
          return;
      }
      t = t.return;
    }
  }
  function Qb(e, t, a) {
    var l = It();
    ((a = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      ds(e)
        ? Pm(t, a)
        : ((a = Jr(e, t, a, l)), a !== null && (Ht(a, e, l), Fm(a, t, l))));
  }
  function Im(e, t, a) {
    var l = It();
    Yi(e, t, a, l);
  }
  function Yi(e, t, a, l) {
    var u = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (ds(e)) Pm(t, u);
    else {
      var s = e.alternate;
      if (
        e.lanes === 0 &&
        (s === null || s.lanes === 0) &&
        ((s = t.lastRenderedReducer), s !== null)
      )
        try {
          var d = t.lastRenderedState,
            p = s(d, a);
          if (((u.hasEagerState = !0), (u.eagerState = p), Gt(p, d)))
            return ($u(e, t, u, 0), qe === null && Yu(), !1);
        } catch {}
      if (((a = Jr(e, t, u, l)), a !== null))
        return (Ht(a, e, l), Fm(a, t, l), !0);
    }
    return !1;
  }
  function wc(e, t, a, l) {
    if (
      ((l = {
        lane: 2,
        revertLane: _o(),
        gesture: null,
        action: l,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      ds(e))
    ) {
      if (t) throw Error(c(479));
    } else ((t = Jr(e, a, l, 2)), t !== null && Ht(t, e, 2));
  }
  function ds(e) {
    var t = e.alternate;
    return e === oe || (t !== null && t === oe);
  }
  function Pm(e, t) {
    Zl = is = !0;
    var a = e.pending;
    (a === null ? (t.next = t) : ((t.next = a.next), (a.next = t)),
      (e.pending = t));
  }
  function Fm(e, t, a) {
    if ((a & 4194048) !== 0) {
      var l = t.lanes;
      ((l &= e.pendingLanes), (a |= l), (t.lanes = a), Wf(e, a));
    }
  }
  var ms = {
      readContext: gt,
      use: rs,
      useCallback: Ie,
      useContext: Ie,
      useEffect: Ie,
      useImperativeHandle: Ie,
      useLayoutEffect: Ie,
      useInsertionEffect: Ie,
      useMemo: Ie,
      useReducer: Ie,
      useRef: Ie,
      useState: Ie,
      useDebugValue: Ie,
      useDeferredValue: Ie,
      useTransition: Ie,
      useSyncExternalStore: Ie,
      useId: Ie,
      useHostTransitionStatus: Ie,
      useFormState: Ie,
      useActionState: Ie,
      useOptimistic: Ie,
      useMemoCache: Ie,
      useCacheRefresh: Ie,
      useEffectEvent: Ie,
    },
    Wm = {
      readContext: gt,
      use: rs,
      useCallback: function (e, t) {
        return ((Tt().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: gt,
      useEffect: Um,
      useImperativeHandle: function (e, t, a) {
        ((a = a != null ? a.concat([e]) : null),
          os(4194308, 4, Lm.bind(null, t, e), a));
      },
      useLayoutEffect: function (e, t) {
        return os(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        os(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var a = Tt();
        t = t === void 0 ? null : t;
        var l = e();
        if (ll) {
          sn(!0);
          try {
            e();
          } finally {
            sn(!1);
          }
        }
        return ((a.memoizedState = [l, t]), l);
      },
      useReducer: function (e, t, a) {
        var l = Tt();
        if (a !== void 0) {
          var u = a(t);
          if (ll) {
            sn(!0);
            try {
              a(t);
            } finally {
              sn(!1);
            }
          }
        } else u = t;
        return (
          (l.memoizedState = l.baseState = u),
          (e = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: u,
          }),
          (l.queue = e),
          (e = e.dispatch = Qb.bind(null, oe, e)),
          [l.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = Tt();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: function (e) {
        e = xc(e);
        var t = e.queue,
          a = Im.bind(null, oe, t);
        return ((t.dispatch = a), [e.memoizedState, a]);
      },
      useDebugValue: Tc,
      useDeferredValue: function (e, t) {
        var a = Tt();
        return Ec(a, e, t);
      },
      useTransition: function () {
        var e = xc(!1);
        return (
          (e = Gm.bind(null, oe, e.queue, !0, !1)),
          (Tt().memoizedState = e),
          [!1, e]
        );
      },
      useSyncExternalStore: function (e, t, a) {
        var l = oe,
          u = Tt();
        if (me) {
          if (a === void 0) throw Error(c(407));
          a = a();
        } else {
          if (((a = t()), qe === null)) throw Error(c(349));
          (be & 127) !== 0 || km(l, t, a);
        }
        u.memoizedState = a;
        var s = { value: a, getSnapshot: t };
        return (
          (u.queue = s),
          Um(_m.bind(null, l, s, e), [e]),
          (l.flags |= 2048),
          Ll(9, { destroy: void 0 }, jm.bind(null, l, s, a, t), null),
          a
        );
      },
      useId: function () {
        var e = Tt(),
          t = qe.identifierPrefix;
        if (me) {
          var a = xa,
            l = Sa;
          ((a = (l & ~(1 << (32 - $t(l) - 1))).toString(32) + a),
            (t = "_" + t + "R_" + a),
            (a = us++),
            0 < a && (t += "H" + a.toString(32)),
            (t += "_"));
        } else ((a = qb++), (t = "_" + t + "r_" + a.toString(32) + "_"));
        return (e.memoizedState = t);
      },
      useHostTransitionStatus: Ac,
      useFormState: wm,
      useActionState: wm,
      useOptimistic: function (e) {
        var t = Tt();
        t.memoizedState = t.baseState = e;
        var a = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (t.queue = a),
          (t = wc.bind(null, oe, !0, a)),
          (a.dispatch = t),
          [e, t]
        );
      },
      useMemoCache: jc,
      useCacheRefresh: function () {
        return (Tt().memoizedState = Xb.bind(null, oe));
      },
      useEffectEvent: function (e) {
        var t = Tt(),
          a = { impl: e };
        return (
          (t.memoizedState = a),
          function () {
            if ((Oe & 2) !== 0) throw Error(c(440));
            return a.impl.apply(void 0, arguments);
          }
        );
      },
    },
    eh = {
      readContext: gt,
      use: rs,
      useCallback: Ym,
      useContext: gt,
      useEffect: Nc,
      useImperativeHandle: qm,
      useInsertionEffect: Zm,
      useLayoutEffect: Hm,
      useMemo: $m,
      useReducer: cs,
      useRef: Rm,
      useState: function () {
        return cs(Ja);
      },
      useDebugValue: Tc,
      useDeferredValue: function (e, t) {
        var a = et();
        return Vm(a, He.memoizedState, e, t);
      },
      useTransition: function () {
        var e = cs(Ja)[0],
          t = et().memoizedState;
        return [typeof e == "boolean" ? e : qi(e), t];
      },
      useSyncExternalStore: bm,
      useId: Qm,
      useHostTransitionStatus: Ac,
      useFormState: Cm,
      useActionState: Cm,
      useOptimistic: function (e, t) {
        var a = et();
        return zm(a, He, e, t);
      },
      useMemoCache: jc,
      useCacheRefresh: Jm,
      useEffectEvent: Bm,
    },
    Jb = {
      readContext: gt,
      use: rs,
      useCallback: Ym,
      useContext: gt,
      useEffect: Nc,
      useImperativeHandle: qm,
      useInsertionEffect: Zm,
      useLayoutEffect: Hm,
      useMemo: $m,
      useReducer: Sc,
      useRef: Rm,
      useState: function () {
        return Sc(Ja);
      },
      useDebugValue: Tc,
      useDeferredValue: function (e, t) {
        var a = et();
        return He === null ? Ec(a, e, t) : Vm(a, He.memoizedState, e, t);
      },
      useTransition: function () {
        var e = Sc(Ja)[0],
          t = et().memoizedState;
        return [typeof e == "boolean" ? e : qi(e), t];
      },
      useSyncExternalStore: bm,
      useId: Qm,
      useHostTransitionStatus: Ac,
      useFormState: Mm,
      useActionState: Mm,
      useOptimistic: function (e, t) {
        var a = et();
        return He !== null
          ? zm(a, He, e, t)
          : ((a.baseState = e), [e, a.queue.dispatch]);
      },
      useMemoCache: jc,
      useCacheRefresh: Jm,
      useEffectEvent: Bm,
    };
  function Cc(e, t, a, l) {
    ((t = e.memoizedState),
      (a = a(l, t)),
      (a = a == null ? t : ae({}, t, a)),
      (e.memoizedState = a),
      e.lanes === 0 && (e.updateQueue.baseState = a));
  }
  var Dc = {
    enqueueSetState: function (e, t, a) {
      e = e._reactInternals;
      var l = It(),
        u = gn(l);
      ((u.payload = t),
        a != null && (u.callback = a),
        (t = vn(e, u, l)),
        t !== null && (Ht(t, e, l), Ui(t, e, l)));
    },
    enqueueReplaceState: function (e, t, a) {
      e = e._reactInternals;
      var l = It(),
        u = gn(l);
      ((u.tag = 1),
        (u.payload = t),
        a != null && (u.callback = a),
        (t = vn(e, u, l)),
        t !== null && (Ht(t, e, l), Ui(t, e, l)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var a = It(),
        l = gn(a);
      ((l.tag = 2),
        t != null && (l.callback = t),
        (t = vn(e, l, a)),
        t !== null && (Ht(t, e, a), Ui(t, e, a)));
    },
  };
  function th(e, t, a, l, u, s, d) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(l, s, d)
        : t.prototype && t.prototype.isPureReactComponent
          ? !Ei(a, l) || !Ei(u, s)
          : !0
    );
  }
  function ah(e, t, a, l) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(a, l),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(a, l),
      t.state !== e && Dc.enqueueReplaceState(t, t.state, null));
  }
  function il(e, t) {
    var a = t;
    if ("ref" in t) {
      a = {};
      for (var l in t) l !== "ref" && (a[l] = t[l]);
    }
    if ((e = e.defaultProps)) {
      a === t && (a = ae({}, a));
      for (var u in e) a[u] === void 0 && (a[u] = e[u]);
    }
    return a;
  }
  function nh(e) {
    qu(e);
  }
  function lh(e) {
    console.error(e);
  }
  function ih(e) {
    qu(e);
  }
  function hs(e, t) {
    try {
      var a = e.onUncaughtError;
      a(t.value, { componentStack: t.stack });
    } catch (l) {
      setTimeout(function () {
        throw l;
      });
    }
  }
  function uh(e, t, a) {
    try {
      var l = e.onCaughtError;
      l(a.value, {
        componentStack: a.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null,
      });
    } catch (u) {
      setTimeout(function () {
        throw u;
      });
    }
  }
  function Mc(e, t, a) {
    return (
      (a = gn(a)),
      (a.tag = 3),
      (a.payload = { element: null }),
      (a.callback = function () {
        hs(e, t);
      }),
      a
    );
  }
  function sh(e) {
    return ((e = gn(e)), (e.tag = 3), e);
  }
  function rh(e, t, a, l) {
    var u = a.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var s = l.value;
      ((e.payload = function () {
        return u(s);
      }),
        (e.callback = function () {
          uh(t, a, l);
        }));
    }
    var d = a.stateNode;
    d !== null &&
      typeof d.componentDidCatch == "function" &&
      (e.callback = function () {
        (uh(t, a, l),
          typeof u != "function" &&
            (zn === null ? (zn = new Set([this])) : zn.add(this)));
        var p = l.stack;
        this.componentDidCatch(l.value, {
          componentStack: p !== null ? p : "",
        });
      });
  }
  function Ib(e, t, a, l, u) {
    if (
      ((a.flags |= 32768),
      l !== null && typeof l == "object" && typeof l.then == "function")
    ) {
      if (
        ((t = a.alternate),
        t !== null && Pn(t, a, u, !0),
        (a = vt.current),
        a !== null)
      ) {
        switch (a.tag) {
          case 31:
          case 13:
          case 19:
            return (
              _t === null ? Rs() : a.alternate === null && Pe === 0 && (Pe = 3),
              (a.flags &= -257),
              (a.flags |= 65536),
              (a.lanes = u),
              l === es
                ? (a.flags |= 16384)
                : ((t = a.updateQueue),
                  t === null ? (a.updateQueue = new Set([l])) : t.add(l),
                  bo(e, l, u)),
              !1
            );
          case 22:
            return (
              (a.flags |= 65536),
              l === es
                ? (a.flags |= 16384)
                : ((t = a.updateQueue),
                  t === null
                    ? ((t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([l]),
                      }),
                      (a.updateQueue = t))
                    : ((a = t.retryQueue),
                      a === null ? (t.retryQueue = new Set([l])) : a.add(l)),
                  bo(e, l, u)),
              !1
            );
        }
        throw Error(c(435, a.tag));
      }
      return (bo(e, l, u), Rs(), !1);
    }
    if (me)
      return (
        (t = vt.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = u),
            l !== ec && ((e = Error(c(422), { cause: l })), wi(na(e, a))))
          : (l !== ec && ((t = Error(c(423), { cause: l })), wi(na(t, a))),
            (e = e.current.alternate),
            (e.flags |= 65536),
            (u &= -u),
            (e.lanes |= u),
            (l = na(l, a)),
            (u = Mc(e.stateNode, l, u)),
            oc(e, u),
            Pe !== 4 && (Pe = 2)),
        !1
      );
    var s = Error(c(520), { cause: l });
    if (
      ((s = na(s, a)),
      Ii === null ? (Ii = [s]) : Ii.push(s),
      Pe !== 4 && (Pe = 2),
      t === null)
    )
      return !0;
    ((l = na(l, a)), (a = t));
    do {
      switch (a.tag) {
        case 3:
          return (
            (a.flags |= 65536),
            (e = u & -u),
            (a.lanes |= e),
            (e = Mc(a.stateNode, l, e)),
            oc(a, e),
            !1
          );
        case 1:
          if (
            ((t = a.type),
            (s = a.stateNode),
            (a.flags & 128) === 0 &&
              (typeof t.getDerivedStateFromError == "function" ||
                (s !== null &&
                  typeof s.componentDidCatch == "function" &&
                  (zn === null || !zn.has(s)))))
          )
            return (
              (a.flags |= 65536),
              (u &= -u),
              (a.lanes |= u),
              (u = sh(u)),
              rh(u, e, a, l),
              oc(a, u),
              !1
            );
          break;
        case 22:
          if (a.memoizedState !== null) return ((a.flags |= 65536), !1);
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var Rc = Error(c(461)),
    it = !1;
  function rt(e, t, a, l) {
    t.child = e === null ? dm(t, null, a, l) : nl(t, e.child, a, l);
  }
  function ch(e, t, a, l, u) {
    a = a.render;
    var s = t.ref;
    if ("ref" in l) {
      var d = {};
      for (var p in l) p !== "ref" && (d[p] = l[p]);
    } else d = l;
    return (
      Fn(t),
      (l = vc(e, t, a, d, s, u)),
      (p = yc()),
      e !== null && !it
        ? (bc(e, t, u), Ia(e, t, u))
        : (me && p && Xu(t), (t.flags |= 1), rt(e, t, l, u), t.child)
    );
  }
  function oh(e, t, a, l, u) {
    if (e === null) {
      var s = a.type;
      return typeof s == "function" &&
        !Ir(s) &&
        s.defaultProps === void 0 &&
        a.compare === null
        ? ((t.tag = 15), (t.type = s), fh(e, t, s, l, u))
        : ((e = Gu(a.type, null, l, t, t.mode, u)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((s = e.child), !$c(e, u))) {
      var d = s.memoizedProps;
      if (
        ((a = a.compare), (a = a !== null ? a : Ei), a(d, l) && e.ref === t.ref)
      )
        return Ia(e, t, u);
    }
    return (
      (t.flags |= 1),
      (e = Va(s, l)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function fh(e, t, a, l, u) {
    if (e !== null) {
      var s = e.memoizedProps;
      if (Ei(s, l) && e.ref === t.ref)
        if (((it = !1), (t.pendingProps = l = s), $c(e, u)))
          (e.flags & 131072) !== 0 && (it = !0);
        else return ((t.lanes = e.lanes), Ia(e, t, u));
    }
    return Uc(e, t, a, l, u);
  }
  function dh(e, t, a, l) {
    var u = l.children,
      s = e !== null ? e.memoizedState : null;
    if (
      (e === null &&
        t.stateNode === null &&
        (t.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      l.mode === "hidden")
    ) {
      if ((t.flags & 128) !== 0) {
        if (((s = s !== null ? s.baseLanes | a : a), e !== null)) {
          for (l = t.child = e.child, u = 0; l !== null;)
            ((u = u | l.lanes | l.childLanes), (l = l.sibling));
          l = u & ~s;
        } else ((l = 0), (t.child = null));
        return mh(e, t, s, a, l);
      }
      if ((a & 536870912) !== 0)
        ((t.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && Fu(t, s !== null ? s.cachePool : null),
          s !== null ? pm(t, s) : dc(),
          gm(t));
      else
        return (
          (l = t.lanes = 536870912),
          mh(e, t, s !== null ? s.baseLanes | a : a, a, l)
        );
    } else
      s !== null
        ? (Fu(t, s.cachePool), pm(t, s), kn(), (t.memoizedState = null))
        : (e !== null && Fu(t, null), dc(), kn());
    return (rt(e, t, u, a), t.child);
  }
  function $i(e, t) {
    return (
      (e !== null && e.tag === 22) ||
        t.stateNode !== null ||
        (t.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      t.sibling
    );
  }
  function mh(e, t, a, l, u) {
    var s = uc();
    return (
      (s = s === null ? null : { parent: nt._currentValue, pool: s }),
      (t.memoizedState = { baseLanes: a, cachePool: s }),
      e !== null && Fu(t, null),
      dc(),
      gm(t),
      e !== null && Pn(e, t, l, !0),
      (t.childLanes = u),
      null
    );
  }
  function ps(e, t) {
    return (
      (t = gs({ mode: t.mode, children: t.children }, e.mode)),
      (t.ref = e.ref),
      (e.child = t),
      (t.return = e),
      t
    );
  }
  function hh(e, t, a) {
    return (
      nl(t, e.child, null, a),
      (e = ps(t, t.pendingProps)),
      (e.flags |= 2),
      Kt(t),
      (t.memoizedState = null),
      e
    );
  }
  function Pb(e, t, a) {
    var l = t.pendingProps,
      u = (t.flags & 128) !== 0;
    if (((t.flags &= -129), e === null)) {
      if (me) {
        if (l.mode === "hidden")
          return (
            (e = ps(t, l)),
            (t.lanes = 536870912),
            (e.memoizedState = { baseLanes: 0, cachePool: null }),
            $i(null, e)
          );
        if (
          (hc(t),
          (e = Ye)
            ? ((e = Lp(e, ua)),
              (e = e !== null && e.data === "&" ? e : null),
              e !== null &&
                ((t.memoizedState = {
                  dehydrated: e,
                  treeContext: on !== null ? { id: Sa, overflow: xa } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (a = Pd(e)),
                (a.return = t),
                (t.child = a),
                (dt = t),
                (Ye = null)))
            : (e = null),
          e === null)
        )
          throw dn(t);
        return ((t.lanes = 536870912), null);
      }
      return ps(t, l);
    }
    var s = e.memoizedState;
    if (s !== null) {
      var d = s.dehydrated;
      if ((hc(t), u))
        if (t.flags & 256) ((t.flags &= -257), (t = hh(e, t, a)));
        else if (t.memoizedState !== null)
          ((t.child = e.child), (t.flags |= 128), (t = null));
        else throw Error(c(558));
      else if (
        (it || Pn(e, t, a, !1), (u = (a & e.childLanes) !== 0), it || u)
      ) {
        if (yn.current === null) {
          if (
            ((l = qe),
            l !== null && ((d = ed(l, a)), d !== 0 && d !== s.retryLane))
          )
            throw ((s.retryLane = d), Xn(e, d), Ht(l, e, d), Rc);
          Rs();
        }
        t = hh(e, t, a);
      } else
        ((e = s.treeContext),
          (Ye = ra(d.nextSibling)),
          (dt = t),
          (me = !0),
          (fn = null),
          (ua = !1),
          e !== null && em(t, e),
          (t = ps(t, l)),
          (t.flags |= 134221824));
      return t;
    }
    return (
      (e = Va(e.child, { mode: l.mode, children: l.children })),
      (e.ref = t.ref),
      (t.child = e),
      (e.return = t),
      e
    );
  }
  function ql(e, t) {
    var a = t.ref;
    if (a === null) e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object") throw Error(c(284));
      (e === null || e.ref !== a) && (t.flags |= 4194816);
    }
  }
  function Uc(e, t, a, l, u) {
    return (
      Fn(t),
      (a = vc(e, t, a, l, void 0, u)),
      (l = yc()),
      e !== null && !it
        ? (bc(e, t, u), Ia(e, t, u))
        : (me && l && Xu(t), (t.flags |= 1), rt(e, t, a, u), t.child)
    );
  }
  function ph(e, t, a, l, u, s) {
    return (
      Fn(t),
      (t.updateQueue = null),
      (a = ym(t, l, a, u)),
      vm(e),
      (l = yc()),
      e !== null && !it
        ? (bc(e, t, s), Ia(e, t, s))
        : (me && l && Xu(t), (t.flags |= 1), rt(e, t, a, s), t.child)
    );
  }
  function gh(e, t, a, l, u) {
    if ((Fn(t), t.stateNode === null)) {
      var s = wl,
        d = a.contextType;
      (typeof d == "object" && d !== null && (s = gt(d)),
        (s = new a(l, s)),
        (t.memoizedState =
          s.state !== null && s.state !== void 0 ? s.state : null),
        (s.updater = Dc),
        (t.stateNode = s),
        (s._reactInternals = t),
        (s = t.stateNode),
        (s.props = l),
        (s.state = t.memoizedState),
        (s.refs = {}),
        rc(t),
        (d = a.contextType),
        (s.context = typeof d == "object" && d !== null ? gt(d) : wl),
        (s.state = t.memoizedState),
        (d = a.getDerivedStateFromProps),
        typeof d == "function" && (Cc(t, a, d, l), (s.state = t.memoizedState)),
        typeof a.getDerivedStateFromProps == "function" ||
          typeof s.getSnapshotBeforeUpdate == "function" ||
          (typeof s.UNSAFE_componentWillMount != "function" &&
            typeof s.componentWillMount != "function") ||
          ((d = s.state),
          typeof s.componentWillMount == "function" && s.componentWillMount(),
          typeof s.UNSAFE_componentWillMount == "function" &&
            s.UNSAFE_componentWillMount(),
          d !== s.state && Dc.enqueueReplaceState(s, s.state, null),
          Zi(t, l, s, u),
          Bi(),
          (s.state = t.memoizedState)),
        typeof s.componentDidMount == "function" && (t.flags |= 4194308),
        (l = !0));
    } else if (e === null) {
      s = t.stateNode;
      var p = t.memoizedProps,
        j = il(a, p);
      s.props = j;
      var E = s.context,
        w = a.contextType;
      ((d = wl), typeof w == "object" && w !== null && (d = gt(w)));
      var U = a.getDerivedStateFromProps;
      ((w =
        typeof U == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function"),
        (p = t.pendingProps !== p),
        w ||
          (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
            typeof s.componentWillReceiveProps != "function") ||
          ((p || E !== d) && ah(t, s, l, d)),
        (pn = !1));
      var z = t.memoizedState;
      ((s.state = z),
        Zi(t, l, s, u),
        Bi(),
        (E = t.memoizedState),
        p || z !== E || pn
          ? (typeof U == "function" && (Cc(t, a, U, l), (E = t.memoizedState)),
            (j = pn || th(t, a, j, l, z, E, d))
              ? (w ||
                  (typeof s.UNSAFE_componentWillMount != "function" &&
                    typeof s.componentWillMount != "function") ||
                  (typeof s.componentWillMount == "function" &&
                    s.componentWillMount(),
                  typeof s.UNSAFE_componentWillMount == "function" &&
                    s.UNSAFE_componentWillMount()),
                typeof s.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof s.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = l),
                (t.memoizedState = E)),
            (s.props = l),
            (s.state = E),
            (s.context = d),
            (l = j))
          : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
            (l = !1)));
    } else {
      ((s = t.stateNode),
        cc(e, t),
        (d = t.memoizedProps),
        (w = il(a, d)),
        (s.props = w),
        (U = t.pendingProps),
        (z = s.context),
        (E = a.contextType),
        (j = wl),
        typeof E == "object" && E !== null && (j = gt(E)),
        (p = a.getDerivedStateFromProps),
        (E =
          typeof p == "function" ||
          typeof s.getSnapshotBeforeUpdate == "function") ||
          (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
            typeof s.componentWillReceiveProps != "function") ||
          ((d !== U || z !== j) && ah(t, s, l, j)),
        (pn = !1),
        (z = t.memoizedState),
        (s.state = z),
        Zi(t, l, s, u),
        Bi());
      var A = t.memoizedState;
      d !== U ||
      z !== A ||
      pn ||
      (e !== null && e.dependencies !== null && Iu(e.dependencies))
        ? (typeof p == "function" && (Cc(t, a, p, l), (A = t.memoizedState)),
          (w =
            pn ||
            th(t, a, w, l, z, A, j) ||
            (e !== null && e.dependencies !== null && Iu(e.dependencies)))
            ? (E ||
                (typeof s.UNSAFE_componentWillUpdate != "function" &&
                  typeof s.componentWillUpdate != "function") ||
                (typeof s.componentWillUpdate == "function" &&
                  s.componentWillUpdate(l, A, j),
                typeof s.UNSAFE_componentWillUpdate == "function" &&
                  s.UNSAFE_componentWillUpdate(l, A, j)),
              typeof s.componentDidUpdate == "function" && (t.flags |= 4),
              typeof s.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof s.componentDidUpdate != "function" ||
                (d === e.memoizedProps && z === e.memoizedState) ||
                (t.flags |= 4),
              typeof s.getSnapshotBeforeUpdate != "function" ||
                (d === e.memoizedProps && z === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = l),
              (t.memoizedState = A)),
          (s.props = l),
          (s.state = A),
          (s.context = j),
          (l = w))
        : (typeof s.componentDidUpdate != "function" ||
            (d === e.memoizedProps && z === e.memoizedState) ||
            (t.flags |= 4),
          typeof s.getSnapshotBeforeUpdate != "function" ||
            (d === e.memoizedProps && z === e.memoizedState) ||
            (t.flags |= 1024),
          (l = !1));
    }
    return (
      (s = l),
      ql(e, t),
      (l = (t.flags & 128) !== 0),
      s || l
        ? ((s = t.stateNode),
          (a =
            l && typeof a.getDerivedStateFromError != "function"
              ? null
              : s.render()),
          (t.flags |= 1),
          e !== null && l
            ? ((t.child = nl(t, e.child, null, u)),
              (t.child = nl(t, null, a, u)))
            : rt(e, t, a, u),
          (t.memoizedState = s.state),
          (e = t.child))
        : (e = Ia(e, t, u)),
      e
    );
  }
  function vh(e, t, a, l) {
    return (Jn(), (t.flags |= 256), rt(e, t, a, l), t.child);
  }
  var Bc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function Zc(e) {
    return { baseLanes: e, cachePool: um() };
  }
  function Hc(e, t, a) {
    return ((e = e !== null ? e.childLanes & ~a : 0), t && (e |= Jt), e);
  }
  function yh(e, t, a) {
    var l = t.pendingProps,
      u = !1,
      s = (t.flags & 128) !== 0,
      d;
    if (
      ((d = s) ||
        (d =
          e !== null && e.memoizedState === null ? !1 : (yt.current & 2) !== 0),
      d && ((u = !0), (t.flags &= -129)),
      (d = (t.flags & 32) !== 0),
      (t.flags &= -33),
      e === null)
    ) {
      if (me) {
        if (
          (u ? bn(t) : kn(),
          (e = Ye)
            ? ((e = Lp(e, ua)),
              (e = e !== null && e.data !== "&" ? e : null),
              e !== null &&
                ((t.memoizedState = {
                  dehydrated: e,
                  treeContext: on !== null ? { id: Sa, overflow: xa } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (a = Pd(e)),
                (a.return = t),
                (t.child = a),
                (dt = t),
                (Ye = null)))
            : (e = null),
          e === null)
        )
          throw dn(t);
        return (Ho(e) ? (t.lanes = 32) : (t.lanes = 536870912), null);
      }
      return (
        (s = l.children),
        (l = l.fallback),
        u
          ? (kn(),
            (u = t.mode),
            (s = gs({ mode: "hidden", children: s }, u)),
            (l = Qn(l, u, a, null)),
            (s.return = t),
            (l.return = t),
            (s.sibling = l),
            (t.child = s),
            (l = t.child),
            (l.memoizedState = Zc(a)),
            (l.childLanes = Hc(e, d, a)),
            (t.memoizedState = Bc),
            $i(null, l))
          : (bn(t), Lc(t, s))
      );
    }
    var p = e.memoizedState;
    if (p !== null) {
      var j = p.dehydrated;
      if (j !== null) return Fb(e, t, s, d, l, j, p, a);
    }
    return u
      ? (kn(),
        (u = l.fallback),
        (s = t.mode),
        (p = e.child),
        (j = p.sibling),
        (l = Va(p, { mode: "hidden", children: l.children })),
        (l.subtreeFlags = p.subtreeFlags & 1206910976),
        j !== null ? (u = Va(j, u)) : ((u = Qn(u, s, a, null)), (u.flags |= 2)),
        (u.return = t),
        (l.return = t),
        (l.sibling = u),
        (t.child = l),
        $i(null, l),
        (l = t.child),
        (u = e.child.memoizedState),
        u === null
          ? (u = Zc(a))
          : ((s = u.cachePool),
            s !== null
              ? ((p = nt._currentValue),
                (s = s.parent !== p ? { parent: p, pool: p } : s))
              : (s = um()),
            (u = { baseLanes: u.baseLanes | a, cachePool: s })),
        (l.memoizedState = u),
        (l.childLanes = Hc(e, d, a)),
        (t.memoizedState = Bc),
        $i(e.child, l))
      : (bn(t),
        (a = e.child),
        (e = a.sibling),
        (a = Va(a, { mode: "visible", children: l.children })),
        (a.return = t),
        (a.sibling = null),
        e !== null &&
          ((d = t.deletions),
          d === null ? ((t.deletions = [e]), (t.flags |= 16)) : d.push(e)),
        (t.child = a),
        (t.memoizedState = null),
        a);
  }
  function Lc(e, t) {
    return (
      (t = gs({ mode: "visible", children: t }, e.mode)),
      (t.return = e),
      (e.child = t)
    );
  }
  function gs(e, t) {
    return ((e = Rt(22, e, null, t)), (e.lanes = 0), e);
  }
  function vs(e, t, a) {
    return (
      nl(t, e.child, null, a),
      (e = Lc(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function Fb(e, t, a, l, u, s, d, p) {
    if (a)
      return t.flags & 256
        ? (bn(t), (t.flags &= -257), vs(e, t, p))
        : t.memoizedState !== null
          ? (kn(), (t.child = e.child), (t.flags |= 128), null)
          : (kn(),
            (s = u.fallback),
            (d = t.mode),
            (u = gs({ mode: "visible", children: u.children }, d)),
            (s = Qn(s, d, p, null)),
            (s.flags |= 2),
            (u.return = t),
            (s.return = t),
            (u.sibling = s),
            (t.child = u),
            nl(t, e.child, null, p),
            (u = t.child),
            (u.memoizedState = Zc(p)),
            (u.childLanes = Hc(e, l, p)),
            (t.memoizedState = Bc),
            $i(null, u));
    if ((bn(t), Ho(s))) {
      if (((l = s.nextSibling && s.nextSibling.dataset), l)) var j = l.dgst;
      return (
        (l = j),
        l !== "" &&
          ((u = Error(c(419))),
          (u.stack = ""),
          (u.digest = l),
          wi({ value: u, source: null, stack: null })),
        vs(e, t, p)
      );
    }
    if ((it || Pn(e, t, p, !1), (l = (p & e.childLanes) !== 0), it || l)) {
      if (yn.current !== null) return vs(e, t, p);
      if (
        ((l = qe), l !== null && ((u = ed(l, p)), u !== 0 && u !== d.retryLane))
      )
        throw ((d.retryLane = u), Xn(e, u), Ht(l, e, u), Rc);
      return (Zo(s) || Rs(), vs(e, t, p));
    }
    return Zo(s)
      ? ((t.flags |= 192), (t.child = e.child), null)
      : ((e = d.treeContext),
        (Ye = ra(s.nextSibling)),
        (dt = t),
        (me = !0),
        (fn = null),
        (ua = !1),
        e !== null && em(t, e),
        (t = Lc(t, u.children)),
        (t.flags |= 134221824),
        t);
  }
  function bh(e, t, a) {
    e.lanes |= t;
    var l = e.alternate;
    (l !== null && (l.lanes |= t), Ju(e.return, t, a));
  }
  function kh(e) {
    for (var t = null; e !== null;) {
      var a = e.alternate;
      (a !== null && ls(a) === null && (t = e), (e = e.sibling));
    }
    return t;
  }
  function ys(e, t, a, l, u, s) {
    var d = e.memoizedState;
    d === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: l,
          tail: a,
          tailMode: u,
          treeForkCount: s,
        })
      : ((d.isBackwards = t),
        (d.rendering = null),
        (d.renderingStartTime = 0),
        (d.last = l),
        (d.tail = a),
        (d.tailMode = u),
        (d.treeForkCount = s));
  }
  function qc(e) {
    var t = e.child;
    for (e.child = null; t !== null;) {
      var a = t.sibling;
      ((t.sibling = e.child), (e.child = t), (t = a));
    }
  }
  function Yc(e, t, a) {
    var l = t.pendingProps,
      u = l.revealOrder,
      s = l.tail;
    l = l.children;
    var d = yt.current;
    if (t.flags & 128) return (Hi(t, d), null);
    var p = (d & 2) !== 0;
    if (
      (p ? ((d = (d & 1) | 2), (t.flags |= 128)) : (d &= 1),
      Hi(t, d),
      u === "backwards" && e !== null
        ? (qc(e), rt(e, t, l, a), qc(e))
        : rt(e, t, l, a),
      (l = me ? Ai : 0),
      !p && e !== null && (e.flags & 128) !== 0)
    )
      e: for (e = t.child; e !== null;) {
        if (e.tag === 13) e.memoizedState !== null && bh(e, a, t);
        else if (e.tag === 19) bh(e, a, t);
        else if (e.child !== null) {
          ((e.child.return = e), (e = e.child));
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null;) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    switch (u) {
      case "backwards":
        ((a = kh(t.child)),
          a === null
            ? ((u = t.child), (t.child = null))
            : ((u = a.sibling), (a.sibling = null), qc(t)),
          ys(t, !0, u, null, s, l));
        break;
      case "unstable_legacy-backwards":
        for (a = null, u = t.child, t.child = null; u !== null;) {
          if (((e = u.alternate), e !== null && ls(e) === null)) {
            t.child = u;
            break;
          }
          ((e = u.sibling), (u.sibling = a), (a = u), (u = e));
        }
        ys(t, !0, a, null, s, l);
        break;
      case "together":
        ys(t, !1, null, null, void 0, l);
        break;
      case "independent":
        t.memoizedState = null;
        break;
      default:
        ((a = kh(t.child)),
          a === null
            ? ((u = t.child), (t.child = null))
            : ((u = a.sibling), (a.sibling = null)),
          ys(t, !1, u, a, s, l));
    }
    return t.child;
  }
  function jh(e, t, a) {
    var l = t.pendingProps;
    return (mn(t, t.type, l.value), rt(e, t, l.children, a), t.child);
  }
  function Ia(e, t, a) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (xn |= t.lanes),
      (a & t.childLanes) === 0)
    )
      if (e !== null) {
        if ((Pn(e, t, a, !1), (a & t.childLanes) === 0)) return null;
      } else return null;
    if (e !== null && t.child !== e.child) throw Error(c(153));
    if (t.child !== null) {
      for (
        e = t.child, a = Va(e, e.pendingProps), t.child = a, a.return = t;
        e.sibling !== null;
      )
        ((e = e.sibling),
          (a = a.sibling = Va(e, e.pendingProps)),
          (a.return = t));
      a.sibling = null;
    }
    return t.child;
  }
  function $c(e, t) {
    return (e.lanes & t) !== 0
      ? !0
      : ((e = e.dependencies), !!(e !== null && Iu(e)));
  }
  function Wb(e, t, a) {
    switch (t.tag) {
      case 3:
        (da(t, t.stateNode.containerInfo),
          mn(t, nt, e.memoizedState.cache),
          Jn());
        break;
      case 27:
      case 5:
        pi(t);
        break;
      case 4:
        da(t, t.stateNode.containerInfo);
        break;
      case 10:
        mn(t, t.type, t.memoizedProps.value);
        break;
      case 31:
        if (t.memoizedState !== null) return ((t.flags |= 128), hc(t), null);
        break;
      case 13:
        var l = t.memoizedState;
        if (l !== null) {
          if (l.dehydrated !== null) return (bn(t), (t.flags |= 128), null);
          l = Pn(e, t, a, !1);
          var u = t.child.childLanes;
          return l || (a & u) !== 0
            ? yh(e, t, a)
            : (bn(t), (e = Ia(e, t, a)), e !== null ? e.sibling : null);
        }
        bn(t);
        break;
      case 19:
        if (t.flags & 128) return Yc(e, t, a);
        if (
          ((u = (e.flags & 128) !== 0),
          (l = (a & t.childLanes) !== 0),
          l || (Pn(e, t, a, !1), (l = (a & t.childLanes) !== 0)),
          u)
        ) {
          if (l) return Yc(e, t, a);
          t.flags |= 128;
        }
        if (
          ((u = t.memoizedState),
          u !== null &&
            ((u.rendering = null), (u.tail = null), (u.lastEffect = null)),
          Hi(t, yt.current),
          l)
        )
          break;
        return null;
      case 22:
        return ((t.lanes = 0), dh(e, t, a, t.pendingProps));
      case 24:
        mn(t, nt, e.memoizedState.cache);
    }
    return Ia(e, t, a);
  }
  function _h(e, t, a) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps) it = !0;
      else {
        if (!$c(e, a) && (t.flags & 128) === 0) return ((it = !1), Wb(e, t, a));
        it = (e.flags & 131072) !== 0;
      }
    else ((it = !1), me && (t.flags & 1048576) !== 0 && Wd(t, Ai, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        e: {
          var l = t.pendingProps;
          if (((e = tl(t.elementType)), (t.type = e), typeof e == "function"))
            Ir(e)
              ? ((l = il(e, l)), (t.tag = 1), (t = gh(null, t, e, l, a)))
              : ((t.tag = 0), (t = Uc(null, t, e, l, a)));
          else {
            if (e != null) {
              var u = e.$$typeof;
              if (u === $) {
                ((t.tag = 11), (t = ch(null, t, e, l, a)));
                break e;
              } else if (u === we) {
                ((t.tag = 14), (t = oh(null, t, e, l, a)));
                break e;
              } else if (u === We) {
                ((t.tag = 10), (t.type = e), (t = jh(null, t, a)));
                break e;
              }
            }
            throw ((t = _e(e) || e), Error(c(306, t, "")));
          }
        }
        return t;
      case 0:
        return Uc(e, t, t.type, t.pendingProps, a);
      case 1:
        return ((l = t.type), (u = il(l, t.pendingProps)), gh(e, t, l, u, a));
      case 3:
        e: {
          if ((da(t, t.stateNode.containerInfo), e === null))
            throw Error(c(387));
          l = t.pendingProps;
          var s = t.memoizedState;
          ((u = s.element), cc(e, t), Zi(t, l, null, a));
          var d = t.memoizedState;
          if (
            ((l = d.cache),
            mn(t, nt, l),
            l !== s.cache && nc(t, [nt], a, !0),
            Bi(),
            (l = d.element),
            s.isDehydrated)
          )
            if (
              ((s = { element: l, isDehydrated: !1, cache: d.cache }),
              (t.updateQueue.baseState = s),
              (t.memoizedState = s),
              t.flags & 256)
            ) {
              t = vh(e, t, l, a);
              break e;
            } else if (l !== u) {
              ((u = na(Error(c(424)), t)), wi(u), (t = vh(e, t, l, a)));
              break e;
            } else
              for (
                e = t.stateNode.containerInfo,
                  e.nodeType === 9
                    ? (e = e.body)
                    : (e = e.nodeName === "HTML" ? e.ownerDocument.body : e),
                  Ye = ra(e.firstChild),
                  dt = t,
                  me = !0,
                  fn = null,
                  ua = !0,
                  a = dm(t, null, l, a),
                  t.child = a;
                a;
              )
                ((a.flags = (a.flags & -3) | 134221824), (a = a.sibling));
          else {
            if ((Jn(), l === u)) {
              t = Ia(e, t, a);
              break e;
            }
            rt(e, t, l, a);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          ql(e, t),
          e === null
            ? (a = Xp(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = a)
              : me || (t.stateNode = Np(t.type, t.pendingProps, ea.current, t))
            : (t.memoizedState = Xp(
                t.type,
                e.memoizedProps,
                t.pendingProps,
                e.memoizedState,
              )),
          null
        );
      case 27:
        return (
          pi(t),
          e === null &&
            me &&
            ((l = t.stateNode = $p(t.type, t.pendingProps, ea.current)),
            (dt = t),
            (ua = !0),
            (u = Ye),
            En(t.type) ? ((Lo = u), (Ye = ra(l.firstChild))) : (Ye = u)),
          rt(e, t, t.pendingProps.children, a),
          ql(e, t),
          e === null && (t.flags |= 4194304),
          t.child
        );
      case 5:
        return (
          e === null &&
            me &&
            ((u = l = Ye) &&
              ((l = X0(l, t.type, t.pendingProps, ua)),
              l !== null
                ? ((t.stateNode = l),
                  (dt = t),
                  (Ye = ra(l.firstChild)),
                  (ua = !1),
                  (u = !0))
                : (u = !1)),
            u || dn(t)),
          pi(t),
          (u = t.type),
          (s = t.pendingProps),
          (d = e !== null ? e.memoizedProps : null),
          (l = s.children),
          wo(u, s) ? (l = null) : d !== null && wo(u, d) && (t.flags |= 32),
          t.memoizedState !== null &&
            ((u = vc(e, t, Yb, null, null, a)), (ii._currentValue = u)),
          ql(e, t),
          rt(e, t, l, a),
          t.child
        );
      case 6:
        return (
          e === null &&
            me &&
            ((e = a = Ye) &&
              ((a = Q0(a, t.pendingProps, ua)),
              a !== null
                ? ((t.stateNode = a), (dt = t), (Ye = null), (e = !0))
                : (e = !1)),
            e || dn(t)),
          null
        );
      case 13:
        return yh(e, t, a);
      case 4:
        return (
          da(t, t.stateNode.containerInfo),
          (l = t.pendingProps),
          e === null ? (t.child = nl(t, null, l, a)) : rt(e, t, l, a),
          t.child
        );
      case 11:
        return ch(e, t, t.type, t.pendingProps, a);
      case 7:
        return ((l = t.pendingProps), ql(e, t), rt(e, t, l, a), t.child);
      case 8:
        return (rt(e, t, t.pendingProps.children, a), t.child);
      case 12:
        return (rt(e, t, t.pendingProps.children, a), t.child);
      case 10:
        return jh(e, t, a);
      case 9:
        return (
          (u = t.type._context),
          (l = t.pendingProps.children),
          Fn(t),
          (u = gt(u)),
          (l = l(u)),
          (t.flags |= 1),
          rt(e, t, l, a),
          t.child
        );
      case 14:
        return oh(e, t, t.type, t.pendingProps, a);
      case 15:
        return fh(e, t, t.type, t.pendingProps, a);
      case 19:
        return Yc(e, t, a);
      case 31:
        return Pb(e, t, a);
      case 22:
        return dh(e, t, a, t.pendingProps);
      case 24:
        return (
          Fn(t),
          (l = gt(nt)),
          e === null
            ? ((u = uc()),
              u === null &&
                ((u = qe),
                (s = lc()),
                (u.pooledCache = s),
                s.refCount++,
                s !== null && (u.pooledCacheLanes |= a),
                (u = s)),
              (t.memoizedState = { parent: l, cache: u }),
              rc(t),
              mn(t, nt, u))
            : ((e.lanes & a) !== 0 && (cc(e, t), Zi(t, null, null, a), Bi()),
              (u = e.memoizedState),
              (s = t.memoizedState),
              u.parent !== l
                ? ((u = { parent: l, cache: l }),
                  (t.memoizedState = u),
                  t.lanes === 0 &&
                    (t.memoizedState = t.updateQueue.baseState = u),
                  mn(t, nt, l))
                : ((l = s.cache),
                  mn(t, nt, l),
                  l !== u.cache && nc(t, [nt], a, !0))),
          rt(e, t, t.pendingProps.children, a),
          t.child
        );
      case 30:
        return (
          t.stateNode === null &&
            (t.stateNode = {
              autoName: null,
              paired: null,
              clones: null,
              ref: null,
            }),
          (l = t.pendingProps),
          l.name != null && l.name !== "auto"
            ? (t.flags |= e === null ? 18882560 : 18874368)
            : me && Xu(t),
          e !== null && e.memoizedProps.name !== l.name
            ? (t.flags |= 4194816)
            : ql(e, t),
          rt(e, t, l.children, a),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(c(156, t.tag));
  }
  function Pa(e) {
    e.flags |= 4;
  }
  function Vc(e, t, a, l, u) {
    var s;
    if (
      ((s = (e.mode & 32) !== 0) &&
        (s =
          a === null
            ? Pp(t, l)
            : Pp(t, l) && (l.src !== a.src || l.srcSet !== a.srcSet)),
      s)
    ) {
      if (((e.flags |= 16777216), (u & 335544128) === u))
        if (e.stateNode.complete) e.flags |= 8192;
        else if (np()) e.flags |= 8192;
        else throw ((al = es), sc);
    } else e.flags &= -16777217;
  }
  function Sh(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (((e.flags |= 16777216), !Fp(t)))
      if (np()) e.flags |= 8192;
      else throw ((al = es), sc);
  }
  function bs(e, t) {
    (t !== null && (e.flags |= 4),
      e.flags & 16384 &&
        ((t = e.tag !== 22 ? Pf() : 536870912), (e.lanes |= t), (Kl |= t)));
  }
  function Vi(e, t) {
    if (!me)
      switch (e.tailMode) {
        case "visible":
          break;
        case "collapsed":
          for (var a = e.tail, l = null; a !== null;)
            (a.alternate !== null && (l = a), (a = a.sibling));
          l === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (l.sibling = null);
          break;
        default:
          for (t = e.tail, a = null; t !== null;)
            (t.alternate !== null && (a = t), (t = t.sibling));
          a === null ? (e.tail = null) : (a.sibling = null);
      }
  }
  function $e(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      a = 0,
      l = 0;
    if (t)
      for (var u = e.child; u !== null;)
        ((a |= u.lanes | u.childLanes),
          (l |= u.subtreeFlags & 1206910976),
          (l |= u.flags & 1206910976),
          (u.return = e),
          (u = u.sibling));
    else
      for (u = e.child; u !== null;)
        ((a |= u.lanes | u.childLanes),
          (l |= u.subtreeFlags),
          (l |= u.flags),
          (u.return = e),
          (u = u.sibling));
    return ((e.subtreeFlags |= l), (e.childLanes = a), t);
  }
  function e0(e, t, a) {
    var l = t.pendingProps;
    switch ((Wr(t), t.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return ($e(t), null);
      case 1:
        return ($e(t), null);
      case 3:
        return (
          (a = t.stateNode),
          (l = null),
          e !== null && (l = e.memoizedState.cache),
          t.memoizedState.cache !== l && (t.flags |= 2048),
          Xa(nt),
          ja(),
          a.pendingContext &&
            ((a.context = a.pendingContext), (a.pendingContext = null)),
          (e === null || e.child === null) &&
            (Ml(t)
              ? Pa(t)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), tc())),
          $e(t),
          null
        );
      case 26:
        var u = t.type,
          s = t.memoizedState;
        return (
          e === null
            ? (Pa(t),
              s !== null ? ($e(t), Sh(t, s)) : ($e(t), Vc(t, u, null, l, a)))
            : s
              ? s !== e.memoizedState
                ? (Pa(t), $e(t), Sh(t, s))
                : ($e(t), (t.flags &= -16777217))
              : ((e = e.memoizedProps),
                e !== l && Pa(t),
                $e(t),
                Vc(t, u, e, l, a)),
          null
        );
      case 27:
        if (
          (Ln(t),
          (a = ea.current),
          (u = t.type),
          e !== null && t.stateNode != null)
        )
          e.memoizedProps !== l && Pa(t);
        else {
          if (!l) {
            if (t.stateNode === null) throw Error(c(166));
            return ($e(t), (t.subtreeFlags &= -33554433), null);
          }
          ((e = De.current),
            Ml(t) ? tm(t) : ((e = $p(u, l, a)), (t.stateNode = e), Pa(t)));
        }
        return ($e(t), (t.subtreeFlags &= -33554433), null);
      case 5:
        if ((Ln(t), (u = t.type), e !== null && t.stateNode != null))
          e.memoizedProps !== l && Pa(t);
        else {
          if (!l) {
            if (t.stateNode === null) throw Error(c(166));
            return ($e(t), (t.subtreeFlags &= -33554433), null);
          }
          if (((s = De.current), Ml(t))) tm(t);
          else {
            var d = tu(ea.current);
            switch (s) {
              case 1:
                s = d.createElementNS("http://www.w3.org/2000/svg", u);
                break;
              case 2:
                s = d.createElementNS("http://www.w3.org/1998/Math/MathML", u);
                break;
              default:
                switch (u) {
                  case "svg":
                    s = d.createElementNS("http://www.w3.org/2000/svg", u);
                    break;
                  case "math":
                    s = d.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      u,
                    );
                    break;
                  case "script":
                    ((s = d.createElement("div")),
                      (s.innerHTML = "<script><\/script>"),
                      (s = s.removeChild(s.firstChild)));
                    break;
                  case "select":
                    ((s =
                      typeof l.is == "string"
                        ? d.createElement("select", { is: l.is })
                        : d.createElement("select")),
                      l.multiple
                        ? (s.multiple = !0)
                        : l.size && (s.size = l.size));
                    break;
                  default:
                    s =
                      typeof l.is == "string"
                        ? d.createElement(u, { is: l.is })
                        : d.createElement(u);
                }
            }
            ((s[pt] = t), (s[Mt] = l));
            e: for (d = t.child; d !== null;) {
              if (d.tag === 5 || d.tag === 6) s.appendChild(d.stateNode);
              else if (d.tag !== 4 && d.tag !== 27 && d.child !== null) {
                ((d.child.return = d), (d = d.child));
                continue;
              }
              if (d === t) break e;
              for (; d.sibling === null;) {
                if (d.return === null || d.return === t) break e;
                d = d.return;
              }
              ((d.sibling.return = d.return), (d = d.sibling));
            }
            t.stateNode = s;
            e: switch ((kt(s, u, l), u)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                l = !!l.autoFocus;
                break e;
              case "img":
                l = !0;
                break e;
              default:
                l = !1;
            }
            l && Pa(t);
          }
        }
        return (
          $e(t),
          (t.subtreeFlags &= -33554433),
          Vc(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, a),
          null
        );
      case 6:
        if (e && t.stateNode != null) e.memoizedProps !== l && Pa(t);
        else {
          if (typeof l != "string" && t.stateNode === null) throw Error(c(166));
          if (((e = ea.current), Ml(t))) {
            if (
              ((e = t.stateNode),
              (a = t.memoizedProps),
              (l = null),
              (u = dt),
              u !== null)
            )
              switch (u.tag) {
                case 27:
                case 5:
                  l = u.memoizedProps;
              }
            ((e[pt] = t),
              (e = !!(
                e.nodeValue === a ||
                (l !== null && l.suppressHydrationWarning === !0) ||
                _p(e.nodeValue, a)
              )),
              e || dn(t, !0));
          } else
            ((e = tu(e).createTextNode(l)), (e[pt] = t), (t.stateNode = e));
        }
        return ($e(t), null);
      case 31:
        if (((a = t.memoizedState), e === null || e.memoizedState !== null)) {
          if (((l = Ml(t)), a !== null)) {
            if (e === null) {
              if (!l) throw Error(c(318));
              if (
                ((e = t.memoizedState),
                (e = e !== null ? e.dehydrated : null),
                !e)
              )
                throw Error(c(557));
              e[pt] = t;
            } else
              (Jn(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4));
            ($e(t), (e = !1));
          } else
            ((a = tc()),
              e !== null &&
                e.memoizedState !== null &&
                (e.memoizedState.hydrationErrors = a),
              (e = !0));
          if (!e) return t.flags & 256 ? (Kt(t), t) : (Kt(t), null);
          if ((t.flags & 128) !== 0) throw Error(c(558));
        }
        return ($e(t), null);
      case 13:
        if (
          ((l = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (((u = Ml(t)), l !== null && l.dehydrated !== null)) {
            if (e === null) {
              if (!u) throw Error(c(318));
              if (
                ((u = t.memoizedState),
                (u = u !== null ? u.dehydrated : null),
                !u)
              )
                throw Error(c(317));
              u[pt] = t;
            } else
              (Jn(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4));
            ($e(t), (u = !1));
          } else
            ((u = tc()),
              e !== null &&
                e.memoizedState !== null &&
                (e.memoizedState.hydrationErrors = u),
              (u = !0));
          if (!u) return t.flags & 256 ? (Kt(t), t) : (Kt(t), null);
        }
        return (
          Kt(t),
          (t.flags & 128) !== 0
            ? ((t.lanes = a), t)
            : ((a = l !== null),
              (e = e !== null && e.memoizedState !== null),
              a &&
                ((l = t.child),
                (u = null),
                l.alternate !== null &&
                  l.alternate.memoizedState !== null &&
                  l.alternate.memoizedState.cachePool !== null &&
                  (u = l.alternate.memoizedState.cachePool.pool),
                (s = null),
                l.memoizedState !== null &&
                  l.memoizedState.cachePool !== null &&
                  (s = l.memoizedState.cachePool.pool),
                s !== u && (l.flags |= 2048)),
              a !== e && a && (t.child.flags |= 8192),
              bs(t, t.updateQueue),
              $e(t),
              null)
        );
      case 4:
        return (
          ja(),
          e === null && No(t.stateNode.containerInfo),
          (t.flags |= 67108864),
          $e(t),
          null
        );
      case 10:
        return (Xa(t.type), $e(t), null);
      case 19:
        if ((pc(t), (l = t.memoizedState), l === null)) return ($e(t), null);
        if (((u = (t.flags & 128) !== 0), (s = l.rendering), s === null))
          if (u) Vi(l, !1);
          else {
            if (Pe !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null;) {
                if (((s = ls(e)), s !== null)) {
                  for (
                    t.flags |= 128,
                      Vi(l, !1),
                      e = s.updateQueue,
                      t.updateQueue = e,
                      bs(t, e),
                      t.subtreeFlags = 0,
                      e = a,
                      a = t.child;
                    a !== null;
                  )
                    (Id(a, e), (a = a.sibling));
                  return (
                    Hi(t, (yt.current & 1) | 2),
                    me && Ga(t, l.treeForkCount),
                    t.child
                  );
                }
                e = e.sibling;
              }
            l.tail !== null &&
              qt() > ws &&
              ((t.flags |= 128), (u = !0), Vi(l, !1), (t.lanes = 4194304));
          }
        else {
          if (!u)
            if (((e = ls(s)), e !== null)) {
              if (
                ((t.flags |= 128),
                (u = !0),
                (e = e.updateQueue),
                (t.updateQueue = e),
                bs(t, e),
                Vi(l, !0),
                l.tail === null &&
                  l.tailMode !== "collapsed" &&
                  l.tailMode !== "visible" &&
                  !s.alternate &&
                  !me)
              )
                return ($e(t), null);
            } else
              2 * qt() - l.renderingStartTime > ws &&
                a !== 536870912 &&
                ((t.flags |= 128), (u = !0), Vi(l, !1), (t.lanes = 4194304));
          l.isBackwards
            ? ((s.sibling = t.child), (t.child = s))
            : ((e = l.last),
              e !== null ? (e.sibling = s) : (t.child = s),
              (l.last = s));
        }
        if (l.tail !== null) {
          e = l.tail;
          e: {
            for (a = e; a !== null;) {
              if (a.alternate !== null) {
                a = !1;
                break e;
              }
              a = a.sibling;
            }
            a = !0;
          }
          return (
            (l.rendering = e),
            (l.tail = e.sibling),
            (l.renderingStartTime = qt()),
            (e.sibling = null),
            (s = yt.current),
            (s = u ? (s & 1) | 2 : s & 1),
            l.tailMode === "visible" || l.tailMode === "collapsed" || !a || me
              ? Hi(t, s)
              : ((a = s), I(vt, t), I(yt, a), _t === null && (_t = t)),
            me && Ga(t, l.treeForkCount),
            e
          );
        }
        return ($e(t), null);
      case 22:
      case 23:
        return (
          Kt(t),
          mc(),
          (l = t.memoizedState !== null),
          e !== null
            ? (e.memoizedState !== null) !== l && (t.flags |= 8192)
            : l && (t.flags |= 8192),
          l
            ? (a & 536870912) !== 0 &&
              (t.flags & 128) === 0 &&
              ($e(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : $e(t),
          (a = t.updateQueue),
          a !== null && bs(t, a.retryQueue),
          (a = null),
          e !== null &&
            e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (a = e.memoizedState.cachePool.pool),
          (l = null),
          t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (l = t.memoizedState.cachePool.pool),
          l !== a && (t.flags |= 2048),
          e !== null && V(el),
          null
        );
      case 24:
        return (
          (a = null),
          e !== null && (a = e.memoizedState.cache),
          t.memoizedState.cache !== a && (t.flags |= 2048),
          Xa(nt),
          $e(t),
          null
        );
      case 25:
        return null;
      case 30:
        return ((t.flags |= 33554432), $e(t), null);
    }
    throw Error(c(156, t.tag));
  }
  function t0(e, t) {
    switch ((Wr(t), t.tag)) {
      case 1:
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          Xa(nt),
          ja(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((t.flags = (e & -65537) | 128), t)
            : null
        );
      case 26:
      case 27:
      case 5:
        return (Ln(t), null);
      case 31:
        if (t.memoizedState !== null) {
          if ((Kt(t), t.alternate === null)) throw Error(c(340));
          Jn();
        }
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 13:
        if (
          (Kt(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(c(340));
          Jn();
        }
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return (
          pc(t),
          (e = t.flags),
          e & 65536
            ? ((t.flags = (e & -65537) | 128),
              (e = t.memoizedState),
              e !== null && ((e.rendering = null), (e.tail = null)),
              (t.flags |= 4),
              t)
            : null
        );
      case 4:
        return (ja(), null);
      case 10:
        return (Xa(t.type), null);
      case 22:
      case 23:
        return (
          Kt(t),
          mc(),
          e !== null && V(el),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 24:
        return (Xa(nt), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function xh(e, t) {
    switch ((Wr(t), t.tag)) {
      case 3:
        (Xa(nt), ja());
        break;
      case 26:
      case 27:
      case 5:
        Ln(t);
        break;
      case 4:
        ja();
        break;
      case 31:
        t.memoizedState !== null && Kt(t);
        break;
      case 13:
        Kt(t);
        break;
      case 19:
        pc(t);
        break;
      case 10:
        Xa(t.type);
        break;
      case 22:
      case 23:
        (Kt(t), mc(), e !== null && V(el));
        break;
      case 24:
        Xa(nt);
    }
  }
  function Gi(e, t) {
    try {
      var a = t.updateQueue,
        l = a !== null ? a.lastEffect : null;
      if (l !== null) {
        var u = l.next;
        a = u;
        do {
          if ((a.tag & e) === e) {
            l = void 0;
            var s = a.create,
              d = a.inst;
            ((l = s()), (d.destroy = l));
          }
          a = a.next;
        } while (a !== u);
      }
    } catch (p) {
      Re(t, t.return, p);
    }
  }
  function jn(e, t, a) {
    try {
      var l = t.updateQueue,
        u = l !== null ? l.lastEffect : null;
      if (u !== null) {
        var s = u.next;
        l = s;
        do {
          if ((l.tag & e) === e) {
            var d = l.inst,
              p = d.destroy;
            if (p !== void 0) {
              ((d.destroy = void 0), (u = t));
              var j = a,
                E = p;
              try {
                E();
              } catch (w) {
                Re(u, j, w);
              }
            }
          }
          l = l.next;
        } while (l !== s);
      }
    } catch (w) {
      Re(t, t.return, w);
    }
  }
  function zh(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var a = e.stateNode;
      try {
        hm(t, a);
      } catch (l) {
        Re(e, e.return, l);
      }
    }
  }
  function Nh(e, t, a) {
    ((a.props = il(e.type, e.memoizedProps)), (a.state = e.memoizedState));
    try {
      a.componentWillUnmount();
    } catch (l) {
      Re(e, t, l);
    }
  }
  function za(e, t) {
    try {
      var a = e.ref;
      if (a !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var l = e.stateNode;
            break;
          case 30:
            var u = e.stateNode,
              s = Ya(e.memoizedProps, u);
            ((u.ref === null || u.ref.name !== s) && (u.ref = Dp(s)),
              (l = u.ref));
            break;
          case 7:
            if (e.stateNode === null) {
              var d = new Pt(e);
              (k(e.child, !1, G0, d, void 0, void 0), (e.stateNode = d));
            }
            l = e.stateNode;
            break;
          default:
            l = e.stateNode;
        }
        typeof a == "function" ? (e.refCleanup = a(l)) : (a.current = l);
      }
    } catch (p) {
      Re(e, t, p);
    }
  }
  function bt(e, t) {
    var a = e.ref,
      l = e.refCleanup;
    if (a !== null)
      if (typeof l == "function")
        try {
          l();
        } catch (u) {
          Re(e, t, u);
        } finally {
          ((e.refCleanup = null),
            (e = e.alternate),
            e != null && (e.refCleanup = null));
        }
      else if (typeof a == "function")
        try {
          a(null);
        } catch (u) {
          Re(e, t, u);
        }
      else a.current = null;
  }
  function ks(e, t) {
    if (
      (e.tag === 5 || e.tag === 27 || e.tag === 6) &&
      e.alternate === null &&
      t !== null
    )
      for (var a = 0; a < t.length; a++) Hp(e.stateNode, t[a]);
  }
  function Th(e) {
    for (
      var t = e.return;
      t !== null && (Kc(t) && Hp(e.stateNode, t.stateNode), !Gc(t));
    )
      t = t.return;
  }
  function Ki(e) {
    for (
      var t = e.return;
      t !== null && (Kc(t) && K0(e.stateNode, t.stateNode), !Gc(t));
    )
      t = t.return;
  }
  function Gc(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 27;
  }
  function Kc(e) {
    return e && e.tag === 7 && e.stateNode !== null;
  }
  function Xc(e) {
    var t = e.type,
      a = e.memoizedProps,
      l = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && l.focus();
          break e;
        case "img":
          a.src ? (l.src = a.src) : a.srcSet && (l.srcset = a.srcSet);
      }
    } catch (u) {
      Re(e, e.return, u);
    }
  }
  function Qc(e, t, a) {
    try {
      var l = e.stateNode;
      (T0(l, e.type, a, t), (l[Mt] = t));
    } catch (u) {
      Re(e, e.return, u);
    }
  }
  function Eh(e) {
    return (
      e.tag === 5 ||
      e.tag === 3 ||
      e.tag === 26 ||
      (e.tag === 27 && En(e.type)) ||
      e.tag === 4
    );
  }
  function Jc(e) {
    e: for (;;) {
      for (; e.sibling === null;) {
        if (e.return === null || Eh(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
      ) {
        if (
          (e.tag === 27 && En(e.type)) ||
          e.flags & 2 ||
          e.child === null ||
          e.tag === 4
        )
          continue e;
        ((e.child.return = e), (e = e.child));
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Ic(e, t, a, l) {
    var u = e.tag;
    if (u === 5 || u === 6)
      ((u = e.stateNode),
        t
          ? (a.nodeType === 9
              ? a.body
              : a.nodeName === "HTML"
                ? a.ownerDocument.body
                : a
            ).insertBefore(u, t)
          : ((t =
              a.nodeType === 9
                ? a.body
                : a.nodeName === "HTML"
                  ? a.ownerDocument.body
                  : a),
            t.appendChild(u),
            (a = a._reactRootContainer),
            a != null || t.onclick !== null || (t.onclick = _a)),
        ks(e, l),
        (Ee = !0));
    else if (
      u !== 4 &&
      (u === 27 &&
        (ks(e, l), (l = null), En(e.type) && ((a = e.stateNode), (t = null))),
      (e = e.child),
      e !== null)
    )
      for (Ic(e, t, a, l), e = e.sibling; e !== null;)
        (Ic(e, t, a, l), (e = e.sibling));
  }
  function js(e, t, a, l) {
    var u = e.tag;
    if (u === 5 || u === 6)
      ((u = e.stateNode),
        t ? a.insertBefore(u, t) : a.appendChild(u),
        ks(e, l),
        (Ee = !0));
    else if (
      u !== 4 &&
      (u === 27 && (ks(e, l), (l = null), En(e.type) && (a = e.stateNode)),
      (e = e.child),
      e !== null)
    )
      for (js(e, t, a, l), e = e.sibling; e !== null;)
        (js(e, t, a, l), (e = e.sibling));
  }
  function Oh(e) {
    var t = e.stateNode,
      a = e.memoizedProps;
    try {
      for (var l = e.type, u = t.attributes; u.length;)
        t.removeAttributeNode(u[0]);
      (kt(t, l, a), (t[pt] = e), (t[Mt] = a));
    } catch (s) {
      Re(e, e.return, s);
    }
  }
  var _s = !1,
    Xt = null;
  function Ah(e) {
    (e.tag === 30 || (e.subtreeFlags & 33554432) !== 0) && (_s = !0);
  }
  var Na = null;
  function wh() {
    var e = Na;
    return ((Na = null), e);
  }
  var Ut = 0;
  function Yl(e, t, a, l, u) {
    return ((Ut = 0), Ch(e.child, t, a, l, u));
  }
  function Ch(e, t, a, l, u) {
    for (var s = !1; e !== null;) {
      if (e.tag === 5) {
        var d = e.stateNode;
        if (l !== null) {
          var p = Mo(d);
          (l.push(p), p.view && (s = !0));
        } else s || (Mo(d).view && (s = !0));
        ((_s = !0), wp(d, Ut === 0 ? t : t + "_" + Ut, a), Ut++);
      } else
        (e.tag !== 22 || e.memoizedState === null) &&
          ((e.tag === 30 && u) || (Ch(e.child, t, a, l, u) && (s = !0)));
      e = e.sibling;
    }
    return s;
  }
  function Ta(e, t) {
    for (; e !== null;)
      (e.tag === 5
        ? Cp(e.stateNode, e.memoizedProps)
        : (e.tag !== 22 || e.memoizedState === null) &&
          ((e.tag === 30 && t) || Ta(e.child, t)),
        (e = e.sibling));
  }
  function Ss(e) {
    if ((e.subtreeFlags & 18874368) !== 0)
      for (e = e.child; e !== null;) {
        if (
          (e.tag !== 22 || e.memoizedState === null) &&
          (Ss(e),
          e.tag === 30 && (e.flags & 18874368) !== 0 && e.stateNode.paired)
        ) {
          var t = e.memoizedProps;
          if (t.name == null || t.name === "auto") throw Error(c(544));
          var a = t.name;
          ((t = $a(t.default, t.share)),
            t !== "none" && (Yl(e, a, t, null, !1) || Ta(e.child, !1)));
        }
        e = e.sibling;
      }
  }
  function Pc(e, t) {
    if (e.tag === 30) {
      var a = e.stateNode,
        l = e.memoizedProps,
        u = Ya(l, a),
        s = $a(l.default, a.paired ? l.share : l.enter);
      s !== "none"
        ? Yl(e, u, s, null, !1)
          ? (Ss(e), a.paired || t || Il(e, l.onEnter))
          : Ta(e.child, !1)
        : Ss(e);
    } else if ((e.subtreeFlags & 33554432) !== 0)
      for (e = e.child; e !== null;) (Pc(e, t), (e = e.sibling));
    else Ss(e);
  }
  function Fc(e) {
    if (Xt !== null && Xt.size !== 0) {
      var t = Xt;
      if ((e.subtreeFlags & 18874368) !== 0)
        for (e = e.child; e !== null;) {
          if (e.tag !== 22 || e.memoizedState === null) {
            if (e.tag === 30 && (e.flags & 18874368) !== 0) {
              var a = e.memoizedProps,
                l = a.name;
              if (l != null && l !== "auto") {
                var u = t.get(l);
                if (u !== void 0) {
                  var s = $a(a.default, a.share);
                  if (
                    (s !== "none" &&
                      (Yl(e, l, s, null, !1)
                        ? ((s = e.stateNode),
                          (u.paired = s),
                          (s.paired = u),
                          Il(e, a.onShare))
                        : Ta(e.child, !1)),
                    t.delete(l),
                    t.size === 0)
                  )
                    break;
                }
              }
            }
            Fc(e);
          }
          e = e.sibling;
        }
    }
  }
  function Wc(e) {
    if (e.tag === 30) {
      var t = e.memoizedProps,
        a = Ya(t, e.stateNode),
        l = Xt !== null ? Xt.get(a) : void 0,
        u = $a(t.default, l !== void 0 ? t.share : t.exit);
      (u !== "none" &&
        (Yl(e, a, u, null, !1)
          ? l !== void 0
            ? ((u = e.stateNode),
              (l.paired = u),
              (u.paired = l),
              Xt.delete(a),
              Il(e, t.onShare))
            : Il(e, t.onExit)
          : Ta(e.child, !1)),
        Xt !== null && Fc(e));
    } else if ((e.subtreeFlags & 33554432) !== 0)
      for (e = e.child; e !== null;) (Wc(e), (e = e.sibling));
    else Xt !== null && Fc(e);
  }
  function Dh(e) {
    for (e = e.child; e !== null;) {
      if (e.tag === 30) {
        var t = e.memoizedProps,
          a = Ya(t, e.stateNode);
        ((t = $a(t.default, t.update)),
          (e.flags &= -5),
          t !== "none" && Yl(e, a, t, (e.memoizedState = []), !1));
      } else (e.subtreeFlags & 33554432) !== 0 && Dh(e);
      e = e.sibling;
    }
  }
  function eo(e) {
    if ((e.subtreeFlags & 18874368) !== 0)
      for (e = e.child; e !== null;) {
        if (e.tag !== 22 || e.memoizedState === null) {
          if (e.tag === 30 && (e.flags & 18874368) !== 0) {
            var t = e.stateNode;
            t.paired !== null && ((t.paired = null), Ta(e.child, !1));
          }
          eo(e);
        }
        e = e.sibling;
      }
  }
  function xs(e) {
    if (e.tag === 30) ((e.stateNode.paired = null), Ta(e.child, !1), eo(e));
    else if ((e.subtreeFlags & 33554432) !== 0)
      for (e = e.child; e !== null;) (xs(e), (e = e.sibling));
    else eo(e);
  }
  function Mh(e) {
    for (e = e.child; e !== null;)
      (e.tag === 30
        ? Ta(e.child, !1)
        : (e.subtreeFlags & 33554432) !== 0 && Mh(e),
        (e = e.sibling));
  }
  function to(e, t, a, l, u, s, d) {
    for (var p = !1; t !== null;) {
      if (t.tag === 5) {
        var j = t.stateNode;
        if (s !== null && Ut < s.length) {
          var E = s[Ut],
            w = Mo(j);
          (E.view || w.view) && (p = !0);
          var U;
          if ((U = (e.flags & 4) === 0))
            if (w.clip) U = !0;
            else {
              U = E.rect;
              var z = w.rect;
              U =
                U.y !== z.y ||
                U.x !== z.x ||
                U.height !== z.height ||
                U.width !== z.width;
            }
          (U && (e.flags |= 4),
            w.abs
              ? (w = !E.abs)
              : ((E = E.rect),
                (w = w.rect),
                (w = E.height !== w.height || E.width !== w.width)),
            w && (e.flags |= 32));
        } else e.flags |= 32;
        ((e.flags & 4) !== 0 && wp(j, Ut === 0 ? a : a + "_" + Ut, u),
          (p && (e.flags & 4) !== 0) ||
            (Na === null && (Na = []),
            Na.push(j, Ut === 0 ? l : l + "_" + Ut, t.memoizedProps)),
          Ut++);
      } else
        (t.tag !== 22 || t.memoizedState === null) &&
          (t.tag === 30 && d
            ? (e.flags |= t.flags & 32)
            : to(e, t.child, a, l, u, s, d) && (p = !0));
      t = t.sibling;
    }
    return p;
  }
  function Rh(e, t) {
    for (e = e.child; e !== null;) {
      if (e.tag === 30) {
        var a = e.memoizedProps,
          l = e.stateNode,
          u = Ya(a, l),
          s = $a(a.default, a.update),
          d;
        ((d = e.memoizedState), (e.memoizedState = null), (l = e));
        var p = e.child;
        ((Ut = 0),
          (u = to(l, p, u, u, s, d, !1)),
          (e.flags & 4) !== 0 && u && Il(e, a.onUpdate));
      } else (e.subtreeFlags & 33554432) !== 0 && Rh(e);
      e = e.sibling;
    }
  }
  var mt = !1,
    Ce = !1,
    Ea = !1,
    ao = !1,
    Uh = typeof WeakSet == "function" ? WeakSet : Set,
    ht = null,
    Oa = !1,
    Xi = !1,
    zs = !1,
    no = !1;
  function a0(e, t, a) {
    if (((e = e.containerInfo), (Oo = ui), (e = Ld(e)), $r(e))) {
      if ("selectionStart" in e)
        var l = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          l = ((l = e.ownerDocument) && l.defaultView) || window;
          var u = l.getSelection && l.getSelection();
          if (u && u.rangeCount !== 0) {
            l = u.anchorNode;
            var s = u.anchorOffset,
              d = u.focusNode;
            u = u.focusOffset;
            try {
              (l.nodeType, d.nodeType);
            } catch {
              l = null;
              break e;
            }
            var p = 0,
              j = -1,
              E = -1,
              w = 0,
              U = 0,
              z = e,
              A = null;
            t: for (;;) {
              for (
                var Y;
                z !== l || (s !== 0 && z.nodeType !== 3) || (j = p + s),
                  z !== d || (u !== 0 && z.nodeType !== 3) || (E = p + u),
                  z.nodeType === 3 && (p += z.nodeValue.length),
                  (Y = z.firstChild) !== null;
              )
                ((A = z), (z = Y));
              for (;;) {
                if (z === e) break t;
                if (
                  (A === l && ++w === s && (j = p),
                  A === d && ++U === u && (E = p),
                  (Y = z.nextSibling) !== null)
                )
                  break;
                ((z = A), (A = z.parentNode));
              }
              z = Y;
            }
            l = j === -1 || E === -1 ? null : { start: j, end: E };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (
      Ao = { focusedElem: e, selectionRange: l },
        ui = !1,
        a = (a & 335544064) === a,
        ht = t,
        t = a ? 9270 : 1024;
      ht !== null;
    ) {
      if (((e = ht), a && ((l = e.deletions), l !== null)))
        for (s = 0; s < l.length; s++) a && Wc(l[s]);
      if (e.alternate === null && (e.flags & 2) !== 0) (a && Ah(e), Ns(a));
      else {
        if (e.tag === 22) {
          if (((l = e.alternate), e.memoizedState !== null)) {
            (l !== null && l.memoizedState === null && a && Wc(l), Ns(a));
            continue;
          } else if (l !== null && l.memoizedState !== null) {
            (a && Ah(e), Ns(a));
            continue;
          }
        }
        ((l = e.child),
          (e.subtreeFlags & t) !== 0 && l !== null
            ? ((l.return = e), (ht = l))
            : (a && Dh(e), Ns(a)));
      }
    }
    Xt = null;
  }
  function Ns(e) {
    for (; ht !== null;) {
      var t = ht,
        a = e,
        l = t.alternate,
        u = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if ((u & 1024) !== 0 && l !== null) {
            ((a = void 0), (u = l.memoizedProps), (l = l.memoizedState));
            var s = t.stateNode;
            try {
              var d = il(t.type, u);
              ((a = s.getSnapshotBeforeUpdate(d, l)),
                (s.__reactInternalSnapshotBeforeUpdate = a));
            } catch (p) {
              Re(t, t.return, p);
            }
          }
          break;
        case 3:
          if ((u & 1024) !== 0) {
            if (((l = t.stateNode.containerInfo), (a = l.nodeType), a === 9))
              Bo(l);
            else if (a === 1)
              switch (l.nodeName) {
                case "HEAD":
                case "HTML":
                case "BODY":
                  Bo(l);
                  break;
                default:
                  l.textContent = "";
              }
          }
          break;
        case 5:
        case 26:
        case 27:
        case 6:
        case 4:
        case 17:
          break;
        case 30:
          a &&
            l !== null &&
            ((a = Ya(l.memoizedProps, l.stateNode)),
            (u = t.memoizedProps),
            (u = $a(u.default, u.update)),
            u !== "none" && Yl(l, a, u, (l.memoizedState = []), !0));
          break;
        default:
          if ((u & 1024) !== 0) throw Error(c(163));
      }
      if (((l = t.sibling), l !== null)) {
        ((l.return = t.return), (ht = l));
        break;
      }
      ht = t.return;
    }
  }
  function Bh(e, t, a) {
    var l = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        (Aa(e, a), l & 4 && Gi(5, a));
        break;
      case 1:
        if ((Aa(e, a), l & 4))
          if (((e = a.stateNode), t === null))
            try {
              e.componentDidMount();
            } catch (d) {
              Re(a, a.return, d);
            }
          else {
            var u = il(a.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              e.componentDidUpdate(u, t, e.__reactInternalSnapshotBeforeUpdate);
            } catch (d) {
              Re(a, a.return, d);
            }
          }
        (l & 64 && zh(a), l & 512 && za(a, a.return));
        break;
      case 3:
        if ((Aa(e, a), l & 64 && ((e = a.updateQueue), e !== null))) {
          if (((t = null), a.child !== null))
            switch (a.child.tag) {
              case 27:
              case 5:
                t = a.child.stateNode;
                break;
              case 1:
                t = a.child.stateNode;
            }
          try {
            hm(e, t);
          } catch (d) {
            Re(a, a.return, d);
          }
        }
        break;
      case 27:
        t === null && l & 4 && Oh(a);
      case 26:
      case 5:
        (Aa(e, a), t === null && l & 4 && Xc(a), l & 512 && za(a, a.return));
        break;
      case 12:
        Aa(e, a);
        break;
      case 31:
        (Aa(e, a), l & 4 && qh(e, a));
        break;
      case 13:
        (Aa(e, a),
          l & 4 && Yh(e, a),
          l & 64 &&
            ((e = a.memoizedState),
            e !== null &&
              ((e = e.dehydrated),
              e !== null && ((a = h0.bind(null, a)), J0(e, a)))));
        break;
      case 22:
        if (((l = a.memoizedState !== null || mt), !l)) {
          var s = (t !== null && t.memoizedState !== null) || Ce;
          ((t = mt),
            (u = Ce),
            (mt = l),
            (Ce = s) && !u
              ? ((l = 2),
                (a.subtreeFlags & 8772) !== 0 && (l |= 1),
                ga(e, a, l))
              : Aa(e, a),
            (mt = t),
            (Ce = u));
        }
        break;
      case 30:
        (Aa(e, a), l & 512 && za(a, a.return));
        break;
      case 7:
        l & 512 && za(a, a.return);
      default:
        Aa(e, a);
    }
  }
  function lo(e, t) {
    for (e = e.child; e !== null;) (Zh(e, t), (e = e.sibling));
  }
  function Zh(e, t) {
    switch (e.tag) {
      case 5:
      case 26:
        try {
          var a = e.stateNode;
          if (t) {
            var l = a.style;
            typeof l.setProperty == "function"
              ? l.setProperty("display", "none", "important")
              : (l.display = "none");
          } else {
            var u = e.stateNode,
              s = e.memoizedProps.style,
              d = s != null && s.hasOwnProperty("display") ? s.display : null;
            u.style.display =
              d == null || typeof d == "boolean" ? "" : ("" + d).trim();
          }
        } catch (j) {
          Re(e, e.return, j);
        }
        io(e, t);
        break;
      case 6:
        try {
          ((e.stateNode.nodeValue = t ? "" : e.memoizedProps), (Ee = !0));
        } catch (j) {
          Re(e, e.return, j);
        }
        break;
      case 18:
        try {
          var p = e.stateNode;
          t ? Ap(p, !0) : Ap(e.stateNode, !1);
        } catch (j) {
          Re(e, e.return, j);
        }
        break;
      case 22:
      case 23:
        e.memoizedState === null && lo(e, t);
        break;
      default:
        lo(e, t);
    }
  }
  function io(e, t) {
    if (e.subtreeFlags & 67108864)
      for (e = e.child; e !== null;) {
        e: {
          var a = e,
            l = t;
          switch (a.tag) {
            case 4:
              Zh(a, l);
              break e;
            case 22:
              a.memoizedState === null && io(a, l);
              break e;
            default:
              io(a, l);
          }
        }
        e = e.sibling;
      }
  }
  function Hh(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), Hh(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 && ((t = e.stateNode), t !== null && wu(t)),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null));
  }
  var Ve = null,
    Bt = !1;
  function ha(e, t, a) {
    for (a = a.child; a !== null;) (Lh(e, t, a), (a = a.sibling));
  }
  function Lh(e, t, a) {
    if (Yt && typeof Yt.onCommitFiberUnmount == "function")
      try {
        Yt.onCommitFiberUnmount(gi, a);
      } catch {}
    switch (a.tag) {
      case 26:
        (Ce || bt(a, t),
          ha(e, t, a),
          a.memoizedState
            ? a.memoizedState.count--
            : a.stateNode &&
              !Ce &&
              ((a = a.stateNode), a.parentNode.removeChild(a)));
        break;
      case 27:
        (Ce || bt(a, t), Ki(a));
        var l = Ve,
          u = Bt;
        (En(a.type) && ((Ve = a.stateNode), (Bt = !1)),
          ha(e, t, a),
          Vp(a.stateNode, a.type, a.memoizedProps),
          (Ve = l),
          (Bt = u));
        break;
      case 5:
        (Ce || bt(a, t), Ki(a));
      case 6:
        if (
          (a.tag === 6 && Ki(a),
          (l = Ve),
          (u = Bt),
          (Ve = null),
          ha(e, t, a),
          (Ve = l),
          (Bt = u),
          Ve !== null)
        )
          if (Bt)
            try {
              ((Ve.nodeType === 9
                ? Ve.body
                : Ve.nodeName === "HTML"
                  ? Ve.ownerDocument.body
                  : Ve
              ).removeChild(a.stateNode),
                (Ee = !0));
            } catch (s) {
              Re(a, t, s);
            }
          else
            try {
              (Ve.removeChild(a.stateNode), (Ee = !0));
            } catch (s) {
              Re(a, t, s);
            }
        break;
      case 18:
        Ve !== null &&
          (Bt
            ? ((e = Ve),
              Op(
                e.nodeType === 9
                  ? e.body
                  : e.nodeName === "HTML"
                    ? e.ownerDocument.body
                    : e,
                a.stateNode,
              ),
              si(e))
            : Op(Ve, a.stateNode));
        break;
      case 4:
        ((l = Ve),
          (u = Bt),
          (Ve = a.stateNode.containerInfo),
          (Bt = !0),
          ha(e, t, a),
          (Ve = l),
          (Bt = u));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (jn(2, a, t), Ce || jn(4, a, t), ha(e, t, a));
        break;
      case 1:
        (Ce ||
          (bt(a, t),
          (l = a.stateNode),
          typeof l.componentWillUnmount == "function" && Nh(a, t, l)),
          ha(e, t, a));
        break;
      case 21:
        ha(e, t, a);
        break;
      case 22:
        ((Ce = (l = Ce) || a.memoizedState !== null), ha(e, t, a), (Ce = l));
        break;
      case 30:
        (bt(a, t), ha(e, t, a));
        break;
      case 7:
        (Ce || bt(a, t), ha(e, t, a));
        break;
      default:
        ha(e, t, a);
    }
  }
  function qh(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate), e !== null && ((e = e.memoizedState), e !== null))
    ) {
      e = e.dehydrated;
      try {
        si(e);
      } catch (a) {
        Re(t, t.return, a);
      }
    }
  }
  function Yh(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate),
      e !== null &&
        ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
    )
      try {
        si(e);
      } catch (a) {
        Re(t, t.return, a);
      }
  }
  function n0(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return (t === null && (t = e.stateNode = new Uh()), t);
      case 22:
        return (
          (e = e.stateNode),
          (t = e._retryCache),
          t === null && (t = e._retryCache = new Uh()),
          t
        );
      default:
        throw Error(c(435, e.tag));
    }
  }
  function Ts(e, t) {
    var a = n0(e);
    t.forEach(function (l) {
      if (!a.has(l)) {
        a.add(l);
        var u = p0.bind(null, e, l);
        l.then(u, u);
      }
    });
  }
  function Et(e, t, a) {
    var l = t.deletions;
    if (l !== null)
      for (var u = 0; u < l.length; u++) {
        var s = l[u],
          d = e,
          p = t,
          j = p;
        e: for (; j !== null;) {
          switch (j.tag) {
            case 27:
              if (En(j.type)) {
                ((Ve = j.stateNode), (Bt = !1));
                break e;
              }
              break;
            case 5:
              ((Ve = j.stateNode), (Bt = !1));
              break e;
            case 3:
            case 4:
              ((Ve = j.stateNode.containerInfo), (Bt = !0));
              break e;
          }
          j = j.return;
        }
        if (Ve === null) throw Error(c(160));
        (Lh(d, p, s),
          (Ve = null),
          (Bt = !1),
          (d = s.alternate),
          d !== null && (d.return = null),
          (s.return = null));
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null;) ($h(t, e, a), (t = t.sibling));
  }
  var pa = null;
  function $h(e, t, a) {
    var l = e.alternate,
      u = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          u & 4 &&
          ((l = e.updateQueue), (l = l !== null ? l.events : null), l !== null)
        )
          for (var s = 0; s < l.length; s++) {
            var d = l[s];
            d.ref.impl = d.nextImpl;
          }
        (Et(t, e, a),
          Ot(e),
          u & 4 && (jn(3, e, e.return), Gi(3, e), jn(5, e, e.return)));
        break;
      case 1:
        (Et(t, e, a),
          Ot(e),
          u & 512 && (Ce || l === null || bt(l, l.return)),
          u & 64 &&
            mt &&
            ((e = e.updateQueue),
            e !== null &&
              ((t = e.callbacks),
              t !== null &&
                ((a = e.shared.hiddenCallbacks),
                (e.shared.hiddenCallbacks = a === null ? t : a.concat(t))))));
        break;
      case 26:
        if (
          ((s = pa),
          Et(t, e, a),
          Ot(e),
          u & 512 && (Ce || l === null || bt(l, l.return)),
          u & 4)
        )
          if (
            ((u = l !== null ? l.memoizedState : null),
            (a = e.memoizedState),
            l === null)
          )
            if (a === null)
              if (e.stateNode === null)
                if (mt)
                  e.stateNode = Np(e.type, e.memoizedProps, t.containerInfo, e);
                else {
                  e: {
                    ((t = e.type),
                      (a = e.memoizedProps),
                      (u = s.ownerDocument || s));
                    t: switch (t) {
                      case "title":
                        ((l = u.getElementsByTagName("title")[0]),
                          (!l ||
                            l[bi] ||
                            l[pt] ||
                            l.namespaceURI === "http://www.w3.org/2000/svg" ||
                            l.hasAttribute("itemprop")) &&
                            ((l = u.createElement(t)),
                            u.head.insertBefore(
                              l,
                              u.querySelector("head > title"),
                            )),
                          kt(l, t, a),
                          (l[pt] = e),
                          ft(l),
                          (t = l));
                        break e;
                      case "link":
                        if (
                          (s = Ip("link", "href", u).get(t + (a.href || "")))
                        ) {
                          for (d = 0; d < s.length; d++)
                            if (
                              ((l = s[d]),
                              l.getAttribute("href") ===
                                (a.href == null || a.href === ""
                                  ? null
                                  : a.href) &&
                                l.getAttribute("rel") ===
                                  (a.rel == null ? null : a.rel) &&
                                l.getAttribute("title") ===
                                  (a.title == null ? null : a.title) &&
                                l.getAttribute("crossorigin") ===
                                  (a.crossOrigin == null
                                    ? null
                                    : a.crossOrigin))
                            ) {
                              s.splice(d, 1);
                              break t;
                            }
                        }
                        ((l = u.createElement(t)),
                          kt(l, t, a),
                          u.head.appendChild(l));
                        break;
                      case "meta":
                        if (
                          (s = Ip("meta", "content", u).get(
                            t + (a.content || ""),
                          ))
                        ) {
                          for (d = 0; d < s.length; d++)
                            if (
                              ((l = s[d]),
                              l.getAttribute("content") ===
                                (a.content == null ? null : "" + a.content) &&
                                l.getAttribute("name") ===
                                  (a.name == null ? null : a.name) &&
                                l.getAttribute("property") ===
                                  (a.property == null ? null : a.property) &&
                                l.getAttribute("http-equiv") ===
                                  (a.httpEquiv == null ? null : a.httpEquiv) &&
                                l.getAttribute("charset") ===
                                  (a.charSet == null ? null : a.charSet))
                            ) {
                              s.splice(d, 1);
                              break t;
                            }
                        }
                        ((l = u.createElement(t)),
                          kt(l, t, a),
                          u.head.appendChild(l));
                        break;
                      default:
                        throw Error(c(468, t));
                    }
                    ((l[pt] = e), ft(l), (t = l));
                  }
                  e.stateNode = t;
                }
              else mt || Vo(s, e.type, e.stateNode);
            else e.stateNode = Jp(s, a, e.memoizedProps);
          else
            u !== a
              ? (u === null
                  ? ((t = l.stateNode),
                    t === null || Ce || t.parentNode.removeChild(t))
                  : u.count--,
                a === null
                  ? mt || Vo(s, e.type, e.stateNode)
                  : Jp(s, a, e.memoizedProps))
              : a === null &&
                e.stateNode !== null &&
                Qc(e, e.memoizedProps, l.memoizedProps);
        break;
      case 27:
        (Et(t, e, a),
          Ot(e),
          u & 512 && (Ce || l === null || bt(l, l.return)),
          l !== null && u & 4 && Qc(e, e.memoizedProps, l.memoizedProps));
        break;
      case 5:
        if (
          ((s = Ea),
          (Ea = !1),
          Et(t, e, a),
          (Ea = s),
          Ot(e),
          u & 512 && (Ce || l === null || bt(l, l.return)),
          e.flags & 32)
        ) {
          t = e.stateNode;
          try {
            (xl(t, ""), (Ee = !0));
          } catch (w) {
            Re(e, e.return, w);
          }
        }
        (u & 4 &&
          e.stateNode != null &&
          ((t = e.memoizedProps), Qc(e, t, l !== null ? l.memoizedProps : t)),
          u & 1024 && (ao = !0));
        break;
      case 6:
        if ((Et(t, e, a), Ot(e), u & 4)) {
          if (e.stateNode === null) throw Error(c(162));
          ((t = e.memoizedProps), (a = e.stateNode));
          try {
            ((a.nodeValue = t), (Ee = !0));
          } catch (w) {
            Re(e, e.return, w);
          }
        }
        break;
      case 3:
        if (
          ((Ee = !1),
          (Ys = null),
          (s = pa),
          (pa = au(t.containerInfo)),
          Et(t, e, a),
          (pa = s),
          Ot(e),
          u & 4 && l !== null && l.memoizedState.isDehydrated)
        )
          try {
            si(t.containerInfo);
          } catch (w) {
            Re(e, e.return, w);
          }
        (ao && ((ao = !1), Vh(e)), (Ee = !1));
        break;
      case 4:
        ((u = Ea),
          (Ea = mt),
          (l = od()),
          (s = pa),
          (pa = au(e.stateNode.containerInfo)),
          Et(t, e, a),
          Ot(e),
          (pa = s),
          Ee && Xi && (zs = !0),
          (Ee = l),
          (Ea = u));
        break;
      case 12:
        (Et(t, e, a), Ot(e));
        break;
      case 31:
        (Et(t, e, a),
          Ot(e),
          u & 4 &&
            ((t = e.updateQueue),
            t !== null && ((e.updateQueue = null), Ts(e, t))));
        break;
      case 13:
        (Et(t, e, a),
          Ot(e),
          e.child.flags & 8192 &&
            (e.memoizedState !== null) !=
              (l !== null && l.memoizedState !== null) &&
            (As = qt()),
          u & 4 &&
            ((t = e.updateQueue),
            t !== null && ((e.updateQueue = null), Ts(e, t))));
        break;
      case 22:
        ((s = e.memoizedState !== null),
          (d = l !== null && l.memoizedState !== null));
        var p = mt,
          j = Ce,
          E = Ea;
        ((mt = p || s),
          (Ea = E || s),
          (Ce = j || d),
          Et(t, e, a),
          (Ce = j),
          (Ea = E),
          (mt = p),
          Ot(e),
          u & 8192 &&
            ((t = e.stateNode),
            (t._visibility = s ? t._visibility & -2 : t._visibility | 1),
            !s ||
              l === null ||
              d ||
              mt ||
              Ce ||
              ((t = d || Ce),
              (a = mt),
              (l = Ce),
              (mt = s || mt),
              (Ce = t),
              _n(e, 2),
              (mt = a),
              (Ce = l)),
            (!s && Ea) || lo(e, s)),
          u & 4 &&
            ((t = e.updateQueue),
            t !== null &&
              ((a = t.retryQueue),
              a !== null && ((t.retryQueue = null), Ts(e, a)))));
        break;
      case 19:
        (Et(t, e, a),
          Ot(e),
          u & 4 &&
            ((t = e.updateQueue),
            t !== null && ((e.updateQueue = null), Ts(e, t))));
        break;
      case 30:
        (u & 512 && (Ce || l === null || bt(l, l.return)),
          (u = od()),
          (s = Xi),
          (d = (a & 335544064) === a),
          (p = e.memoizedProps),
          (Xi = d && $a(p.default, p.update) !== "none"),
          Et(t, e, a),
          Ot(e),
          d && l !== null && Ee && (e.flags |= 4),
          (Xi = s),
          (Ee = u));
        break;
      case 21:
        break;
      case 7:
        (u & 512 && (Ce || l === null || bt(l, l.return)),
          l && l.stateNode !== null && (l.stateNode._fragmentFiber = e));
      default:
        (Et(t, e, a), Ot(e));
    }
  }
  function Ot(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var a, l = e.return; l !== null;) {
          if (Eh(l)) {
            a = l;
            break;
          }
          l = l.return;
        }
        l = null;
        for (var u = e.return; u !== null;) {
          if (Kc(u)) {
            var s = u.stateNode;
            l === null ? (l = [s]) : l.push(s);
          }
          if (Gc(u)) break;
          u = u.return;
        }
        var d = l;
        if (a == null) throw Error(c(160));
        switch (a.tag) {
          case 27:
            var p = a.stateNode,
              j = Jc(e);
            js(e, j, p, d);
            break;
          case 5:
            var E = a.stateNode;
            a.flags & 32 && (xl(E, ""), (a.flags &= -33));
            var w = Jc(e);
            js(e, w, E, d);
            break;
          case 3:
          case 4:
            var U = a.stateNode.containerInfo,
              z = Jc(e);
            Ic(e, z, U, d);
            break;
          default:
            throw Error(c(161));
        }
      } catch (A) {
        Re(e, e.return, A);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Vh(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null;) {
        var t = e;
        (Vh(t),
          t.tag === 5 &&
            t.flags & 1024 &&
            ((t = t.stateNode), (ui = !0), t.reset(), (ui = !1)),
          (e = e.sibling));
      }
  }
  function $l(e, t) {
    if (t.subtreeFlags & 9270)
      for (t = t.child; t !== null;) (Gh(t, e), (t = t.sibling));
    else Rh(t);
  }
  function Gh(e, t) {
    var a = e.alternate;
    if (a === null) Pc(e, !1);
    else
      switch (e.tag) {
        case 3:
          if (((no = Oa = !1), wh(), $l(t, e), !Oa && !zs)) {
            if (((e = Na), e !== null))
              for (var l = 0; l < e.length; l += 3) {
                a = e[l];
                var u = e[l + 1];
                (Cp(a, e[l + 2]),
                  (a = a.ownerDocument.documentElement),
                  a !== null &&
                    a.animate(
                      { opacity: [0, 0], pointerEvents: ["none", "none"] },
                      {
                        duration: 0,
                        fill: "forwards",
                        pseudoElement: "::view-transition-group(" + u + ")",
                      },
                    ));
              }
            ((e = t.containerInfo),
              (e =
                e.nodeType === 9
                  ? e.documentElement
                  : e.ownerDocument.documentElement),
              e !== null &&
                e.style.viewTransitionName === "" &&
                ((e.style.viewTransitionName = "none"),
                e.animate(
                  { opacity: [0, 0], pointerEvents: ["none", "none"] },
                  {
                    duration: 0,
                    fill: "forwards",
                    pseudoElement: "::view-transition-group(root)",
                  },
                ),
                e.animate(
                  { width: [0, 0], height: [0, 0] },
                  {
                    duration: 0,
                    fill: "forwards",
                    pseudoElement: "::view-transition",
                  },
                )),
              (no = !0));
          }
          Na = null;
          break;
        case 5:
          $l(t, e);
          break;
        case 4:
          ((l = Oa), (Oa = !1), $l(t, e), Oa && (zs = !0), (Oa = l));
          break;
        case 22:
          e.memoizedState === null &&
            (a.memoizedState !== null ? Pc(e, !1) : $l(t, e));
          break;
        case 30:
          ((l = Oa), (u = wh()), (Oa = !1), $l(t, e), Oa && (e.flags |= 4));
          var s = e.memoizedProps,
            d = e.stateNode;
          ((t = Ya(s, d)), (d = Ya(a.memoizedProps, d)));
          var p = $a(s.default, s.update);
          (p === "none"
            ? (t = !1)
            : ((s = a.memoizedState),
              (a.memoizedState = null),
              (a = e.child),
              (Ut = 0),
              (t = to(e, a, t, d, p, s, !0)),
              Ut !== (s === null ? 0 : s.length) && (e.flags |= 32)),
            (e.flags & 4) !== 0 && t
              ? (Il(e, e.memoizedProps.onUpdate), (Na = u))
              : u !== null && (u.push.apply(u, Na), (Na = u)),
            (Oa = (e.flags & 32) !== 0 ? !0 : l));
          break;
        default:
          $l(t, e);
      }
  }
  function Aa(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null;) (Bh(e, t.alternate, t), (t = t.sibling));
  }
  function _n(e, t) {
    for (e = e.child; e !== null;) {
      var a = e,
        l = t;
      switch (a.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (jn(4, a, a.return), _n(a, l));
          break;
        case 1:
          bt(a, a.return);
          var u = a.stateNode;
          (typeof u.componentWillUnmount == "function" && Nh(a, a.return, u),
            _n(a, l));
          break;
        case 27:
          (l & 2) !== 0 && Vp(a.stateNode, a.type, a.memoizedProps);
        case 5:
          (bt(a, a.return), (a.tag !== 5 && a.tag !== 27) || Ki(a), _n(a, l));
          break;
        case 6:
          Ki(a);
          break;
        case 26:
          (bt(a, a.return),
            (u = a.stateNode),
            a.memoizedState !== null ||
              u === null ||
              Ce ||
              u.parentNode.removeChild(u),
            _n(a, l));
          break;
        case 22:
          a.memoizedState === null && _n(a, l);
          break;
        case 30:
          (bt(a, a.return), _n(a, l));
          break;
        case 7:
          bt(a, a.return);
        default:
          _n(a, l);
      }
      e = e.sibling;
    }
  }
  function ga(e, t, a) {
    for (
      a = (t.subtreeFlags & 8772) !== 0 ? a : a & -2, t = t.child;
      t !== null;
    ) {
      var l = t.alternate,
        u = e,
        s = t,
        d = s.flags,
        p = (a & 1) !== 0;
      switch (s.tag) {
        case 0:
        case 11:
        case 15:
          (ga(u, s, a), Gi(4, s));
          break;
        case 1:
          if (
            (ga(u, s, a),
            (l = s),
            (u = l.stateNode),
            typeof u.componentDidMount == "function")
          )
            try {
              u.componentDidMount();
            } catch (w) {
              Re(l, l.return, w);
            }
          if (((l = s), (u = l.updateQueue), u !== null)) {
            var j = l.stateNode;
            try {
              var E = u.shared.hiddenCallbacks;
              if (E !== null)
                for (u.shared.hiddenCallbacks = null, u = 0; u < E.length; u++)
                  mm(E[u], j);
            } catch (w) {
              Re(l, l.return, w);
            }
          }
          (p && d & 64 && zh(s), za(s, s.return));
          break;
        case 27:
          (a & 2) !== 0 && Oh(s);
        case 5:
          ((s.tag !== 5 && s.tag !== 27) || Th(s),
            ga(u, s, a),
            p && l === null && d & 4 && Xc(s),
            za(s, s.return));
          break;
        case 6:
          Th(s);
          break;
        case 26:
          ((j = s.stateNode),
            s.memoizedState !== null ||
              j === null ||
              mt ||
              Vo(au(j.ownerDocument), s.type, j),
            ga(u, s, a),
            p && l === null && d & 4 && Xc(s),
            za(s, s.return));
          break;
        case 12:
          ga(u, s, a);
          break;
        case 31:
          (ga(u, s, a), p && d & 4 && qh(u, s));
          break;
        case 13:
          (ga(u, s, a), p && d & 4 && Yh(u, s));
          break;
        case 22:
          (s.memoizedState === null && ga(u, s, a), za(s, s.return));
          break;
        case 30:
          (ga(u, s, a), za(s, s.return));
          break;
        case 7:
          za(s, s.return);
        default:
          ga(u, s, a);
      }
      t = t.sibling;
    }
  }
  function uo(e, t) {
    var a = null;
    (e !== null &&
      e.memoizedState !== null &&
      e.memoizedState.cachePool !== null &&
      (a = e.memoizedState.cachePool.pool),
      (e = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (e = t.memoizedState.cachePool.pool),
      e !== a && (e != null && e.refCount++, a != null && Ci(a)));
  }
  function so(e, t) {
    ((e = null),
      t.alternate !== null && (e = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== e && (t.refCount++, e != null && Ci(e)));
  }
  function sa(e, t, a, l) {
    var u = (a & 335544064) === a;
    if (t.subtreeFlags & (u ? 10262 : 10256))
      for (t = t.child; t !== null;) (Kh(e, t, a, l), (t = t.sibling));
    else u && Mh(t);
  }
  function Kh(e, t, a, l) {
    var u = (a & 335544064) === a;
    u &&
      t.alternate === null &&
      t.return !== null &&
      t.return.alternate !== null &&
      xs(t);
    var s = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (sa(e, t, a, l), s & 2048 && Gi(9, t));
        break;
      case 1:
        sa(e, t, a, l);
        break;
      case 3:
        (sa(e, t, a, l),
          u &&
            no &&
            ((e = e.containerInfo),
            (e =
              e.nodeType === 9
                ? e.body
                : e.nodeName === "HTML"
                  ? e.ownerDocument.body
                  : e),
            e.style.viewTransitionName === "root" &&
              (e.style.viewTransitionName = ""),
            (e = e.ownerDocument.documentElement),
            e !== null &&
              e.style.viewTransitionName === "none" &&
              (e.style.viewTransitionName = "")),
          s & 2048 &&
            ((s = null),
            t.alternate !== null && (s = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== s && (t.refCount++, s != null && Ci(s))));
        break;
      case 12:
        if (s & 2048) {
          (sa(e, t, a, l), (s = t.stateNode));
          try {
            var d = t.memoizedProps,
              p = d.id,
              j = d.onPostCommit;
            typeof j == "function" &&
              j(
                p,
                t.alternate === null ? "mount" : "update",
                s.passiveEffectDuration,
                -0,
              );
          } catch (E) {
            Re(t, t.return, E);
          }
        } else sa(e, t, a, l);
        break;
      case 31:
        sa(e, t, a, l);
        break;
      case 13:
        sa(e, t, a, l);
        break;
      case 23:
        break;
      case 22:
        ((d = t.stateNode),
          (p = t.alternate),
          t.memoizedState !== null
            ? (u && p !== null && p.memoizedState === null && xs(p),
              d._visibility & 2 ? sa(e, t, a, l) : Qi(e, t))
            : (u && p !== null && p.memoizedState !== null && xs(t),
              d._visibility & 2
                ? sa(e, t, a, l)
                : ((d._visibility |= 2),
                  Vl(e, t, a, l, (t.subtreeFlags & 10256) !== 0 || !1))),
          s & 2048 && uo(p, t));
        break;
      case 24:
        (sa(e, t, a, l), s & 2048 && so(t.alternate, t));
        break;
      case 30:
        (u &&
          ((s = t.alternate), s !== null && (Ta(s.child, !0), Ta(t.child, !0))),
          sa(e, t, a, l));
        break;
      default:
        sa(e, t, a, l);
    }
  }
  function Vl(e, t, a, l, u) {
    for (
      u = u && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child;
      t !== null;
    ) {
      var s = e,
        d = t,
        p = a,
        j = l,
        E = d.flags;
      switch (d.tag) {
        case 0:
        case 11:
        case 15:
          (Vl(s, d, p, j, u), Gi(8, d));
          break;
        case 23:
          break;
        case 22:
          var w = d.stateNode;
          (d.memoizedState !== null
            ? w._visibility & 2
              ? Vl(s, d, p, j, u)
              : Qi(s, d)
            : ((w._visibility |= 2), Vl(s, d, p, j, u)),
            u && E & 2048 && uo(d.alternate, d));
          break;
        case 24:
          (Vl(s, d, p, j, u), u && E & 2048 && so(d.alternate, d));
          break;
        default:
          Vl(s, d, p, j, u);
      }
      t = t.sibling;
    }
  }
  function Qi(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null;) {
        var a = e,
          l = t,
          u = l.flags;
        switch (l.tag) {
          case 22:
            (Qi(a, l), u & 2048 && uo(l.alternate, l));
            break;
          case 24:
            (Qi(a, l), u & 2048 && so(l.alternate, l));
            break;
          default:
            Qi(a, l);
        }
        t = t.sibling;
      }
  }
  var ul = 8192;
  function sl(e, t, a) {
    if (e.subtreeFlags & ul)
      for (e = e.child; e !== null;) (Xh(e, t, a), (e = e.sibling));
  }
  function Xh(e, t, a) {
    switch (e.tag) {
      case 26:
        (sl(e, t, a),
          e.flags & ul &&
            (e.memoizedState !== null
              ? c1(a, pa, e.memoizedState, e.memoizedProps)
              : ((e = e.stateNode), (t & 335544128) === t && eg(a, e))));
        break;
      case 5:
        (sl(e, t, a),
          e.flags & ul &&
            ((e = e.stateNode), (t & 335544128) === t && eg(a, e)));
        break;
      case 3:
      case 4:
        var l = pa;
        ((pa = au(e.stateNode.containerInfo)), sl(e, t, a), (pa = l));
        break;
      case 22:
        e.memoizedState === null &&
          ((l = e.alternate),
          l !== null && l.memoizedState !== null
            ? ((l = ul), (ul = 16777216), sl(e, t, a), (ul = l))
            : sl(e, t, a));
        break;
      case 30:
        if (
          (e.flags & ul) !== 0 &&
          ((l = e.memoizedProps.name), l != null && l !== "auto")
        ) {
          var u = e.stateNode;
          ((u.paired = null), Xt === null && (Xt = new Map()), Xt.set(l, u));
        }
        sl(e, t, a);
        break;
      default:
        sl(e, t, a);
    }
  }
  function Qh(e) {
    var t = e.alternate;
    if (t !== null && ((e = t.child), e !== null)) {
      t.child = null;
      do ((t = e.sibling), (e.sibling = null), (e = t));
      while (e !== null);
    }
  }
  function Ji(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var l = t[a];
          ((ht = l), Ih(l, e));
        }
      Qh(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null;) (Jh(e), (e = e.sibling));
  }
  function Jh(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        (Ji(e), e.flags & 2048 && jn(9, e, e.return));
        break;
      case 3:
        Ji(e);
        break;
      case 12:
        Ji(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null &&
        t._visibility & 2 &&
        (e.return === null || e.return.tag !== 13)
          ? ((t._visibility &= -3), Es(e))
          : Ji(e);
        break;
      default:
        Ji(e);
    }
  }
  function Es(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var l = t[a];
          ((ht = l), Ih(l, e));
        }
      Qh(e);
    }
    for (e = e.child; e !== null;) {
      switch (((t = e), t.tag)) {
        case 0:
        case 11:
        case 15:
          (jn(8, t, t.return), Es(t));
          break;
        case 22:
          ((a = t.stateNode),
            a._visibility & 2 && ((a._visibility &= -3), Es(t)));
          break;
        default:
          Es(t);
      }
      e = e.sibling;
    }
  }
  function Ih(e, t) {
    for (; ht !== null;) {
      var a = ht;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          jn(8, a, t);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var l = a.memoizedState.cachePool.pool;
            l != null && l.refCount++;
          }
          break;
        case 24:
          Ci(a.memoizedState.cache);
      }
      if (((l = a.child), l !== null)) ((l.return = a), (ht = l));
      else
        e: for (a = e; ht !== null;) {
          l = ht;
          var u = l.sibling,
            s = l.return;
          if ((Hh(l), l === a)) {
            ht = null;
            break e;
          }
          if (u !== null) {
            ((u.return = s), (ht = u));
            break e;
          }
          ht = s;
        }
    }
  }
  var l0 = {
      getCacheForType: function (e) {
        var t = gt(nt),
          a = t.data.get(e);
        return (a === void 0 && ((a = e()), t.data.set(e, a)), a);
      },
      cacheSignal: function () {
        return gt(nt).controller.signal;
      },
    },
    i0 = typeof WeakMap == "function" ? WeakMap : Map,
    Oe = 0,
    qe = null,
    ge = null,
    be = 0,
    Me = 0,
    Qt = null,
    Sn = !1,
    Gl = !1,
    ro = !1,
    Fa = 0,
    Pe = 0,
    xn = 0,
    rl = 0,
    Os = 0,
    Jt = 0,
    Kl = 0,
    Ii = null,
    Zt = null,
    co = !1,
    As = 0,
    Ph = 0,
    ws = 1 / 0,
    Cs = null,
    zn = null,
    Qe = 0,
    va = null,
    cl = null,
    wa = 0,
    oo = 0,
    fo = null,
    Fh = null,
    Xl = null,
    Ql = null,
    Jl = null,
    Pi = 0,
    Ds = null;
  function It() {
    return (Oe & 2) !== 0 && be !== 0 ? be & -be : J.T !== null ? _o() : td();
  }
  function Wh() {
    if (Jt === 0)
      if ((be & 536870912) === 0 || me) {
        var e = Tu;
        ((Tu <<= 1), (Tu & 3932160) === 0 && (Tu = 262144), (Jt = e));
      } else Jt = 536870912;
    return ((e = vt.current), e !== null && (e.flags |= 32), Jt);
  }
  function Il(e, t) {
    if (t != null) {
      var a = e.stateNode,
        l = a.ref;
      (l === null && (l = a.ref = Dp(Ya(e.memoizedProps, a))),
        Ql === null && (Ql = []),
        Ql.push(t.bind(null, l)));
    }
  }
  function Ht(e, t, a) {
    (((e === qe && (Me === 2 || Me === 9)) || e.cancelPendingCommit !== null) &&
      (Pl(e, 0), Nn(e, be, Jt, !1)),
      yi(e, a),
      ((Oe & 2) === 0 || e !== qe) &&
        (e === qe &&
          ((Oe & 2) === 0 && (rl |= a), Pe === 4 && Nn(e, be, Jt, !1)),
        Ca(e)));
  }
  function ep(e, t, a) {
    if ((Oe & 6) !== 0) throw Error(c(327));
    var l = (!a && (t & 127) === 0 && (t & e.expiredLanes) === 0) || vi(e, t),
      u = l ? r0(e, t) : ho(e, t, !0),
      s = l;
    do {
      if (u === 0) {
        Gl && !l && Nn(e, t, 0, !1);
        break;
      } else {
        if (((a = e.current.alternate), s && !u0(a))) {
          ((u = ho(e, t, !1)), (s = !1));
          continue;
        }
        if (u === 2) {
          if (((s = t), e.errorRecoveryDisabledLanes & s)) var d = 0;
          else
            ((d = e.pendingLanes & -536870913),
              (d = d !== 0 ? d : d & 536870912 ? 536870912 : 0));
          if (d !== 0) {
            t = d;
            e: {
              var p = e;
              u = Ii;
              var j = p.current.memoizedState.isDehydrated;
              if (
                (j && (Pl(p, d).flags |= 256),
                (d = ho(p, d, !1)),
                d !== 2 && d !== 6)
              ) {
                if (ro && !j) {
                  ((p.errorRecoveryDisabledLanes |= s), (rl |= s), (u = 4));
                  break e;
                }
                ((s = Zt),
                  (Zt = u),
                  s !== null &&
                    (Zt === null ? (Zt = s) : Zt.push.apply(Zt, s)));
              }
              u = d;
            }
            if (((s = !1), u !== 2)) continue;
          }
        }
        if (u === 1) {
          (Pl(e, 0), Nn(e, t, 0, !0));
          break;
        }
        e: {
          switch (((l = e), (s = u), s)) {
            case 0:
            case 1:
              throw Error(c(345));
            case 4:
              if ((t & 4194048) !== t && (t & 62914560) !== t) break;
            case 6:
              Nn(l, t, Jt, !Sn);
              break e;
            case 2:
              Zt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(c(329));
          }
          if ((t & 62914560) === t && ((u = As + 300 - qt()), 10 < u)) {
            if ((Nn(l, t, Jt, !Sn), Ou(l, 0, !0) !== 0)) break e;
            ((wa = t),
              (l.timeoutHandle = Do(
                tp.bind(
                  null,
                  l,
                  a,
                  Zt,
                  Cs,
                  co,
                  t,
                  Jt,
                  rl,
                  Kl,
                  Sn,
                  s,
                  "Throttled",
                  -0,
                  0,
                ),
                u,
              )));
            break e;
          }
          tp(l, a, Zt, Cs, co, t, Jt, rl, Kl, Sn, s, null, -0, 0);
        }
      }
      break;
    } while (!0);
    Ca(e);
  }
  function tp(e, t, a, l, u, s, d, p, j, E, w, U, z, A) {
    e.timeoutHandle = -1;
    var Y = t.subtreeFlags,
      Q = (s & 335544064) === s;
    if (
      ((U = null),
      (Q || Y & 8192 || (Y & 16785408) === 16785408) &&
        ((U = {
          stylesheets: null,
          count: 0,
          imgCount: 0,
          imgBytes: 0,
          suspenseyImages: [],
          waitingForImages: !0,
          waitingForViewTransition: !1,
          unsuspend: _a,
        }),
        (Xt = null),
        Xh(t, s, U),
        Q &&
          ((Y = U),
          (Q = e.containerInfo),
          (Q = (Q.nodeType === 9 ? Q : Q.ownerDocument).__reactViewTransition),
          Q != null &&
            (Y.count++,
            (Y.waitingForViewTransition = !0),
            (Y = iu.bind(Y)),
            Q.finished.then(Y, Y))),
        (Y =
          (s & 62914560) === s
            ? As - qt()
            : (s & 4194048) === s
              ? Ph - qt()
              : 0),
        (Y = o1(U, Y)),
        Y !== null))
    ) {
      ((wa = s),
        (e.cancelPendingCommit = Y(
          cp.bind(null, e, t, s, a, l, u, d, p, j, E, w, U, null, z, A),
        )),
        Nn(e, s, d, !E));
      return;
    }
    cp(e, t, s, a, l, u, d, p, j, E, w, U);
  }
  function u0(e) {
    for (var t = e; ;) {
      var a = t.tag;
      if (
        (a === 0 || a === 11 || a === 15) &&
        t.flags & 16384 &&
        ((a = t.updateQueue), a !== null && ((a = a.stores), a !== null))
      )
        for (var l = 0; l < a.length; l++) {
          var u = a[l],
            s = u.getSnapshot;
          u = u.value;
          try {
            if (!Gt(s(), u)) return !1;
          } catch {
            return !1;
          }
        }
      if (((a = t.child), t.subtreeFlags & 16384 && a !== null))
        ((a.return = t), (t = a));
      else {
        if (t === e) break;
        for (; t.sibling === null;) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
    }
    return !0;
  }
  function Nn(e, t, a, l) {
    ((t = If(e, t)),
      (t &= ~Os),
      (t &= ~rl),
      (e.suspendedLanes |= t),
      (e.pingedLanes &= ~t),
      l && (e.warmLanes |= t),
      (l = e.expirationTimes));
    for (var u = t; 0 < u;) {
      var s = 31 - $t(u),
        d = 1 << s;
      ((l[s] = -1), (u &= ~d));
    }
    a !== 0 && Ff(e, a, t);
  }
  function Ms() {
    return (Oe & 6) === 0 ? (Fi(0), !1) : !0;
  }
  function mo() {
    if (ge !== null) {
      if (Me === 0) var e = ge.return;
      else ((e = ge), (Ka = In = null), kc(e), (Bl = null), (Ri = 0), (e = ge));
      for (; e !== null;) (xh(e.alternate, e), (e = e.return));
      ge = null;
    }
  }
  function Pl(e, t) {
    var a = e.timeoutHandle;
    return (
      a !== -1 && ((e.timeoutHandle = -1), A0(a)),
      (a = e.cancelPendingCommit),
      a !== null && ((e.cancelPendingCommit = null), a()),
      (wa = 0),
      mo(),
      (qe = e),
      (ge = a = Va(e.current, null)),
      (be = t),
      (Me = 0),
      (Qt = null),
      (Sn = !1),
      (Gl = vi(e, t)),
      (ro = !1),
      (Kl = Jt = Os = rl = xn = Pe = 0),
      (Zt = Ii = null),
      (co = !1),
      (Fa = If(e, t)),
      Yu(),
      a
    );
  }
  function ap(e, t) {
    ((oe = null),
      (J.H = ms),
      t === Ul || t === Wu
        ? ((t = cm()), (Me = 3))
        : t === sc
          ? ((t = cm()), (Me = 4))
          : (Me =
              t === Rc
                ? 8
                : t !== null &&
                    typeof t == "object" &&
                    typeof t.then == "function"
                  ? 6
                  : 1),
      (Qt = t),
      ge === null && ((Pe = 1), hs(e, na(t, e.current))));
  }
  function np() {
    var e = vt.current;
    return e === null
      ? !0
      : (be & 4194048) === be
        ? _t === null
        : (be & 62914560) === be || (be & 536870912) !== 0
          ? e === _t
          : !1;
  }
  function lp() {
    var e = J.H;
    return ((J.H = ms), e === null ? ms : e);
  }
  function ip() {
    var e = J.A;
    return ((J.A = l0), e);
  }
  function Rs() {
    ((Pe = 4),
      Sn || ((be & 4194048) !== be && vt.current !== null) || (Gl = !0),
      ((xn & 134217727) === 0 && (rl & 134217727) === 0) ||
        qe === null ||
        Nn(qe, be, Jt, !1));
  }
  function ho(e, t, a) {
    var l = Oe;
    Oe |= 2;
    var u = lp(),
      s = ip();
    ((qe !== e || be !== t) && ((Cs = null), Pl(e, t)), (t = !1));
    var d = Pe;
    e: do
      try {
        if (Me !== 0 && ge !== null) {
          var p = ge,
            j = Qt;
          switch (Me) {
            case 8:
              (mo(), (d = 6));
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              vt.current === null && (t = !0);
              var E = Me;
              if (((Me = 0), (Qt = null), Fl(e, p, j, E), a && Gl)) {
                d = 0;
                break e;
              }
              break;
            default:
              ((E = Me), (Me = 0), (Qt = null), Fl(e, p, j, E));
          }
        }
        (s0(), (d = Pe));
        break;
      } catch (w) {
        ap(e, w);
      }
    while (!0);
    return (
      t && e.shellSuspendCounter++,
      (Ka = In = null),
      (Oe = l),
      (J.H = u),
      (J.A = s),
      ge === null && ((qe = null), (be = 0), Yu()),
      d
    );
  }
  function s0() {
    for (; ge !== null;) up(ge);
  }
  function r0(e, t) {
    var a = Oe;
    Oe |= 2;
    var l = lp(),
      u = ip();
    qe !== e || be !== t
      ? ((Cs = null), (ws = qt() + 500), Pl(e, t))
      : (Gl = vi(e, t));
    e: do
      try {
        if (Me !== 0 && ge !== null) {
          t = ge;
          var s = Qt;
          t: switch (Me) {
            case 1:
              ((Me = 0), (Qt = null), Fl(e, t, s, 1));
              break;
            case 2:
            case 9:
              if (sm(s)) {
                ((Me = 0), (Qt = null), sp(t));
                break;
              }
              ((t = function () {
                ((Me !== 2 && Me !== 9) || qe !== e || (Me = 7), Ca(e));
              }),
                s.then(t, t));
              break e;
            case 3:
              Me = 7;
              break e;
            case 4:
              Me = 5;
              break e;
            case 7:
              sm(s)
                ? ((Me = 0), (Qt = null), sp(t))
                : ((Me = 0), (Qt = null), Fl(e, t, s, 7));
              break;
            case 5:
              var d = null;
              switch (ge.tag) {
                case 26:
                  d = ge.memoizedState;
                case 5:
                case 27:
                  var p = ge;
                  if (d ? Fp(d) : p.stateNode.complete) {
                    ((Me = 0), (Qt = null));
                    var j = p.sibling;
                    if (j !== null) ge = j;
                    else {
                      var E = p.return;
                      E !== null ? ((ge = E), Us(E)) : (ge = null);
                    }
                    break t;
                  }
              }
              ((Me = 0), (Qt = null), Fl(e, t, s, 5));
              break;
            case 6:
              ((Me = 0), (Qt = null), Fl(e, t, s, 6));
              break;
            case 8:
              (mo(), (Pe = 6));
              break e;
            default:
              throw Error(c(462));
          }
        }
        c0();
        break;
      } catch (w) {
        ap(e, w);
      }
    while (!0);
    return (
      (Ka = In = null),
      (J.H = l),
      (J.A = u),
      (Oe = a),
      ge !== null ? 0 : ((qe = null), (be = 0), Yu(), Pe)
    );
  }
  function c0() {
    for (; ge !== null && !_r();) up(ge);
  }
  function up(e) {
    var t = _h(e.alternate, e, Fa);
    ((e.memoizedProps = e.pendingProps), t === null ? Us(e) : (ge = t));
  }
  function sp(e) {
    var t = e,
      a = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = ph(a, t, t.pendingProps, t.type, void 0, be);
        break;
      case 11:
        t = ph(a, t, t.pendingProps, t.type.render, t.ref, be);
        break;
      case 5:
        kc(t);
        var l = t;
        l === dt &&
          (me
            ? (Qu(l), l.tag === 5 && l.stateNode != null && (Ye = l.stateNode))
            : (Qu(l), (me = !0)));
      default:
        (xh(a, t), (t = ge = Id(t, Fa)), (t = _h(a, t, Fa)));
    }
    ((e.memoizedProps = e.pendingProps), t === null ? Us(e) : (ge = t));
  }
  function Fl(e, t, a, l) {
    ((Ka = In = null), kc(t), (Bl = null), (Ri = 0));
    var u = t.return;
    try {
      if (Ib(e, u, t, a, be)) {
        ((Pe = 1), hs(e, na(a, e.current)), (ge = null));
        return;
      }
    } catch (s) {
      if (u !== null) throw ((ge = u), s);
      ((Pe = 1), hs(e, na(a, e.current)), (ge = null));
      return;
    }
    t.flags & 32768
      ? (me || l === 1
          ? (e = !0)
          : Gl || (be & 536870912) !== 0
            ? (e = !1)
            : ((Sn = e = !0),
              (l === 2 || l === 9 || l === 3 || l === 6) &&
                ((l = vt.current),
                l !== null && l.tag === 13 && (l.flags |= 16384))),
        rp(t, e))
      : Us(t);
  }
  function Us(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        rp(t, Sn);
        return;
      }
      e = t.return;
      var a = e0(t.alternate, t, Fa);
      if (a !== null) {
        ge = a;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        ge = t;
        return;
      }
      ge = t = e;
    } while (t !== null);
    Pe === 0 && (Pe = 5);
  }
  function rp(e, t) {
    do {
      var a = t0(e.alternate, e);
      if (a !== null) {
        ((a.flags &= 32767), (ge = a));
        return;
      }
      if (
        ((a = e.return),
        a !== null &&
          ((a.flags |= 32768), (a.subtreeFlags = 0), (a.deletions = null)),
        !t && ((e = e.sibling), e !== null))
      ) {
        ge = e;
        return;
      }
      ge = e = a;
    } while (e !== null);
    ((Pe = 6), (ge = null));
  }
  function cp(e, t, a, l, u, s, d, p, j, E, w, U) {
    e.cancelPendingCommit = null;
    do Bs();
    while (Qe !== 0);
    if ((Oe & 6) !== 0) throw Error(c(327));
    if (t !== null) {
      if (t === e.current) throw Error(c(177));
      (e === qe && ((ge = qe = null), (be = 0)),
        (cl = t),
        (va = e),
        (wa = a),
        (fo = u),
        (Fh = l),
        o0(e, t, a, d, p, j, U));
    }
  }
  function o0(e, t, a, l, u, s, d) {
    var p = t.lanes | t.childLanes;
    if (
      ((oo = p),
      (p |= Qr),
      Uy(e, a, p, l, u, s),
      (Ql = null),
      (a & 335544064) === a
        ? ((Jl = Zb(e)), (l = 10262))
        : ((Jl = null), (l = 10256)),
      (t.subtreeFlags & l) !== 0 || (t.flags & l) !== 0
        ? ((e.callbackNode = null),
          (e.callbackPriority = 0),
          g0(zu, function () {
            return (yo(), null);
          }))
        : ((e.callbackNode = null), (e.callbackPriority = 0)),
      (_s = !1),
      (l = (t.flags & 13878) !== 0),
      (t.subtreeFlags & 13878) !== 0 || l)
    ) {
      ((l = J.T), (J.T = null), (u = ue.p), (ue.p = 2), (s = Oe), (Oe |= 4));
      try {
        a0(e, t, a);
      } finally {
        ((Oe = s), (ue.p = u), (J.T = l));
      }
    }
    ((Qe = 1),
      _s
        ? (Xl = U0(d, e.containerInfo, Jl, po, go, d0, vo, yo, f0))
        : (po(), go(), vo()));
  }
  function f0(e) {
    if (Qe !== 0) {
      var t = va.onRecoverableError;
      t(e, { componentStack: null });
    }
  }
  function d0() {
    Qe === 3 && ((Qe = 0), Gh(cl, va), (Qe = 4));
  }
  function po() {
    if (Qe === 1) {
      Qe = 0;
      var e = va,
        t = cl,
        a = wa,
        l = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || l) {
        ((l = J.T), (J.T = null));
        var u = ue.p;
        ue.p = 2;
        var s = Oe;
        Oe |= 4;
        try {
          ((Xi = zs = !1), $h(t, e, a), (a = Ao));
          var d = Ld(e.containerInfo),
            p = a.focusedElem,
            j = a.selectionRange;
          if (
            d !== p &&
            p &&
            p.ownerDocument &&
            Hd(p.ownerDocument.documentElement, p)
          ) {
            if (j !== null && $r(p)) {
              var E = j.start,
                w = j.end;
              if ((w === void 0 && (w = E), "selectionStart" in p))
                ((p.selectionStart = E),
                  (p.selectionEnd = Math.min(w, p.value.length)));
              else {
                var U = p.ownerDocument || document,
                  z = (U && U.defaultView) || window;
                if (z.getSelection) {
                  var A = z.getSelection(),
                    Y = p.textContent.length,
                    Q = Math.min(j.start, Y),
                    fe = j.end === void 0 ? Q : Math.min(j.end, Y);
                  !A.extend && Q > fe && ((d = fe), (fe = Q), (Q = d));
                  var N = Zd(p, Q),
                    S = Zd(p, fe);
                  if (
                    N &&
                    S &&
                    (A.rangeCount !== 1 ||
                      A.anchorNode !== N.node ||
                      A.anchorOffset !== N.offset ||
                      A.focusNode !== S.node ||
                      A.focusOffset !== S.offset)
                  ) {
                    var O = U.createRange();
                    (O.setStart(N.node, N.offset),
                      A.removeAllRanges(),
                      Q > fe
                        ? (A.addRange(O), A.extend(S.node, S.offset))
                        : (O.setEnd(S.node, S.offset), A.addRange(O)));
                  }
                }
              }
            }
            for (U = [], A = p; (A = A.parentNode);)
              A.nodeType === 1 &&
                U.push({ element: A, left: A.scrollLeft, top: A.scrollTop });
            for (
              typeof p.focus == "function" && p.focus(), p = 0;
              p < U.length;
              p++
            ) {
              var R = U[p];
              ((R.element.scrollLeft = R.left), (R.element.scrollTop = R.top));
            }
          }
          ((ui = !!Oo), (Ao = Oo = null));
        } finally {
          ((Oe = s), (ue.p = u), (J.T = l));
        }
      }
      ((e.current = t), (Qe = 2));
    }
  }
  function go() {
    if (Qe === 2) {
      Qe = 0;
      var e = va,
        t = cl,
        a = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || a) {
        ((a = J.T), (J.T = null));
        var l = ue.p;
        ue.p = 2;
        var u = Oe;
        Oe |= 4;
        try {
          Bh(e, t.alternate, t);
        } finally {
          ((Oe = u), (ue.p = l), (J.T = a));
        }
      }
      Qe = 3;
    }
  }
  function vo() {
    if (Qe === 4 || Qe === 3) {
      Qe = 0;
      var e = Xl;
      ((Xl = null), Ty());
      var t = va,
        a = cl,
        l = wa,
        u = Fh,
        s = (l & 335544064) === l ? 10262 : 10256;
      if (
        ((a.subtreeFlags & s) !== 0 || (a.flags & s) !== 0
          ? (Qe = 5)
          : ((Qe = 0), (cl = va = null), op(t, t.pendingLanes)),
        (s = t.pendingLanes),
        s === 0 && (zn = null),
        zr(l),
        (a = a.stateNode),
        Yt && typeof Yt.onCommitFiberRoot == "function")
      )
        try {
          Yt.onCommitFiberRoot(gi, a, void 0, (a.current.flags & 128) === 128);
        } catch {}
      if (u !== null) {
        ((a = J.T), (s = ue.p), (ue.p = 2), (J.T = null));
        try {
          for (var d = t.onRecoverableError, p = 0; p < u.length; p++) {
            var j = u[p];
            d(j.value, { componentStack: j.stack });
          }
        } finally {
          ((J.T = a), (ue.p = s));
        }
      }
      if (
        ((u = Ql),
        (d = Jl),
        (Jl = null),
        u !== null && ((Ql = null), d === null && (d = []), e !== null))
      )
        for (j = 0; j < u.length; j++)
          ((a = (0, u[j])(d)), a !== void 0 && e.finished.finally(a));
      ((wa & 3) !== 0 && Bs(),
        Ca(t),
        (s = t.pendingLanes),
        (l & 261930) !== 0 && (s & 42) !== 0
          ? t === Ds
            ? Pi++
            : ((Pi = 0), (Ds = t))
          : ((Pi = 0), (Ds = null)),
        Fi(0));
    }
  }
  function op(e, t) {
    (e.pooledCacheLanes &= t) === 0 &&
      ((t = e.pooledCache), t != null && ((e.pooledCache = null), Ci(t)));
  }
  function Bs() {
    return (
      Xl !== null && (Xl.skipTransition(), (Xl = null)),
      po(),
      go(),
      vo(),
      yo()
    );
  }
  function yo() {
    if (Qe !== 5) return !1;
    var e = va,
      t = oo;
    oo = 0;
    var a = zr(wa),
      l = J.T,
      u = ue.p;
    try {
      ((ue.p = 32 > a ? 32 : a), (J.T = null), (a = fo), (fo = null));
      var s = va,
        d = wa;
      if (((Qe = 0), (cl = va = null), (wa = 0), (Oe & 6) !== 0))
        throw Error(c(331));
      var p = Oe;
      if (
        ((Oe |= 4),
        Jh(s.current),
        Kh(s, s.current, d, a),
        (Oe = p),
        Fi(0, !1),
        Yt && typeof Yt.onPostCommitFiberRoot == "function")
      )
        try {
          Yt.onPostCommitFiberRoot(gi, s);
        } catch {}
      return !0;
    } finally {
      ((ue.p = u), (J.T = l), op(e, t));
    }
  }
  function fp(e, t, a) {
    ((t = na(a, t)),
      (t = Mc(e.stateNode, t, 2)),
      (e = vn(e, t, 2)),
      e !== null && (yi(e, 2), Ca(e)));
  }
  function Re(e, t, a) {
    if (e.tag === 3) fp(e, e, a);
    else
      for (; t !== null;) {
        if (t.tag === 3) {
          fp(t, e, a);
          break;
        } else if (t.tag === 1) {
          var l = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof l.componentDidCatch == "function" &&
              (zn === null || !zn.has(l)))
          ) {
            ((e = na(a, e)),
              (a = sh(2)),
              (l = vn(t, a, 2)),
              l !== null && (rh(a, l, t, e), yi(l, 2), Ca(l)));
            break;
          }
        }
        t = t.return;
      }
  }
  function bo(e, t, a) {
    var l = e.pingCache;
    if (l === null) {
      l = e.pingCache = new i0();
      var u = new Set();
      l.set(t, u);
    } else ((u = l.get(t)), u === void 0 && ((u = new Set()), l.set(t, u)));
    u.has(a) ||
      ((ro = !0), u.add(a), (e = m0.bind(null, e, t, a)), t.then(e, e));
  }
  function m0(e, t, a) {
    var l = e.pingCache;
    (l !== null && l.delete(t),
      (e.pingedLanes |= e.suspendedLanes & a),
      (e.warmLanes &= ~a),
      qe === e &&
        (be & a) === a &&
        ((Pe === 4 ||
          (Pe === 3 && (be & 62914560) === be && 300 > qt() - As)) &&
        (Oe & 2) === 0
          ? Pl(e, 0)
          : (Os |= a),
        Kl === be && (Kl = 0)),
      Ca(e));
  }
  function dp(e, t) {
    (t === 0 && (t = Pf()), (e = Xn(e, t)), e !== null && (yi(e, t), Ca(e)));
  }
  function h0(e) {
    var t = e.memoizedState,
      a = 0;
    (t !== null && (a = t.retryLane), dp(e, a));
  }
  function p0(e, t) {
    var a = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var l = e.stateNode,
          u = e.memoizedState;
        u !== null && (a = u.retryLane);
        break;
      case 19:
        l = e.stateNode;
        break;
      case 22:
        l = e.stateNode._retryCache;
        break;
      default:
        throw Error(c(314));
    }
    (l !== null && l.delete(t), dp(e, a));
  }
  function g0(e, t) {
    return Xe(e, t);
  }
  var Wl = null,
    ei = null,
    ko = !1,
    Zs = !1,
    jo = !1,
    Tn = 0;
  function Ca(e) {
    (e !== ei &&
      e.next === null &&
      (ei === null ? (Wl = ei = e) : (ei = ei.next = e)),
      (Zs = !0),
      ko || ((ko = !0), y0()));
  }
  function Fi(e, t) {
    if (!jo && Zs) {
      jo = !0;
      do
        for (var a = !1, l = Wl; l !== null;) {
          if (e !== 0) {
            var u = l.pendingLanes;
            if (u === 0) var s = 0;
            else {
              var d = l.suspendedLanes,
                p = l.pingedLanes;
              ((s = (1 << (31 - $t(42 | e) + 1)) - 1),
                (s &= u & ~(d & ~p)),
                (s = s & 201326741 ? (s & 201326741) | 1 : s ? s | 2 : 0));
            }
            s !== 0 && ((a = !0), gp(l, s));
          } else
            ((s = be),
              (s = Ou(
                l,
                l === qe ? s : 0,
                l.cancelPendingCommit !== null || l.timeoutHandle !== -1,
              )),
              (s & 3) === 0 || vi(l, s) || ((a = !0), gp(l, s)));
          l = l.next;
        }
      while (a);
      jo = !1;
    }
  }
  function v0() {
    mp();
  }
  function mp() {
    Zs = ko = !1;
    var e = 0;
    Tn !== 0 && O0() && (e = Tn);
    for (var t = qt(), a = null, l = Wl; l !== null;) {
      var u = l.next,
        s = hp(l, t);
      (s === 0
        ? ((l.next = null),
          a === null ? (Wl = u) : (a.next = u),
          u === null && (ei = a))
        : ((a = l), (e !== 0 || (s & 3) !== 0) && (Zs = !0)),
        (l = u));
    }
    ((Qe !== 0 && Qe !== 5) || Fi(e), Tn !== 0 && (Tn = 0));
  }
  function hp(e, t) {
    for (
      var a = e.suspendedLanes,
        l = e.pingedLanes,
        u = e.expirationTimes,
        s = e.pendingLanes & -62914561;
      0 < s;
    ) {
      var d = 31 - $t(s),
        p = 1 << d,
        j = u[d];
      (j === -1
        ? ((p & a) === 0 || (p & l) !== 0) && (u[d] = Ry(p, t))
        : j <= t && (e.expiredLanes |= p),
        (s &= ~p));
    }
    if (
      ((t = qe),
      (a = be),
      (a = Ou(
        e,
        e === t ? a : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
      )),
      (l = e.callbackNode),
      a === 0 ||
        (e === t && (Me === 2 || Me === 9)) ||
        e.cancelPendingCommit !== null)
    )
      return (
        l !== null && l !== null && ot(l),
        (e.callbackNode = null),
        (e.callbackPriority = 0)
      );
    if ((a & 3) === 0 || vi(e, a)) {
      if (((t = a & -a), t === e.callbackPriority)) return t;
      switch ((l !== null && ot(l), zr(a))) {
        case 2:
        case 8:
          a = Qf;
          break;
        case 32:
          a = zu;
          break;
        case 268435456:
          a = Jf;
          break;
        default:
          a = zu;
      }
      return (
        (l = pp.bind(null, e)),
        (a = Xe(a, l)),
        (e.callbackPriority = t),
        (e.callbackNode = a),
        t
      );
    }
    return (
      l !== null && l !== null && ot(l),
      (e.callbackPriority = 2),
      (e.callbackNode = null),
      2
    );
  }
  function pp(e, t) {
    if (Qe !== 0 && Qe !== 5)
      return ((e.callbackNode = null), (e.callbackPriority = 0), null);
    var a = e.callbackNode;
    if (Bs() && e.callbackNode !== a) return null;
    var l = be;
    return (
      (l = Ou(
        e,
        e === qe ? l : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
      )),
      l === 0
        ? null
        : (ep(e, l, t),
          hp(e, qt()),
          e.callbackNode != null && e.callbackNode === a
            ? pp.bind(null, e)
            : null)
    );
  }
  function gp(e, t) {
    if (Bs()) return null;
    ep(e, t, !0);
  }
  function y0() {
    w0(function () {
      (Oe & 6) !== 0 ? Xe(Xf, v0) : mp();
    });
  }
  function _o() {
    if (Tn === 0) {
      var e = Wn;
      (e === 0 && ((e = Nu), (Nu <<= 1), (Nu & 261888) === 0 && (Nu = 256)),
        (Tn = e));
    }
    return Tn;
  }
  function vp(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean"
      ? null
      : typeof e == "function"
        ? e
        : Mu(e);
  }
  function b0(e, t, a, l, u) {
    if (t === "submit" && a && a.stateNode === u) {
      var s = vp((u[Mt] || null).action),
        d = l.submitter;
      d &&
        ((t = (t = d[Mt] || null)
          ? vp(t.formAction)
          : d.getAttribute("formAction")),
        t !== null && ((s = t), (d = null)));
      var p = new Zu("action", "action", null, l, u);
      e.push({
        event: p,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (l.defaultPrevented) {
                if (Tn !== 0) {
                  var j = new FormData(u, d);
                  Oc(
                    a,
                    { pending: !0, data: j, method: u.method, action: s },
                    null,
                    j,
                  );
                }
              } else
                typeof s == "function" &&
                  (p.preventDefault(),
                  (j = new FormData(u, d)),
                  Oc(
                    a,
                    { pending: !0, data: j, method: u.method, action: s },
                    s,
                    j,
                  ));
            },
            currentTarget: u,
          },
        ],
      });
    }
  }
  for (var So = 0; So < Xr.length; So++) {
    var xo = Xr[So],
      k0 = xo.toLowerCase(),
      j0 = xo[0].toUpperCase() + xo.slice(1);
    ma(k0, "on" + j0);
  }
  (ma($d, "onAnimationEnd"),
    ma(Vd, "onAnimationIteration"),
    ma(Gd, "onAnimationStart"),
    ma("dblclick", "onDoubleClick"),
    ma("focusin", "onFocus"),
    ma("focusout", "onBlur"),
    ma(Ab, "onTransitionRun"),
    ma(wb, "onTransitionStart"),
    ma(Cb, "onTransitionCancel"),
    ma(Kd, "onTransitionEnd"),
    _l("onMouseEnter", ["mouseout", "mouseover"]),
    _l("onMouseLeave", ["mouseout", "mouseover"]),
    _l("onPointerEnter", ["pointerout", "pointerover"]),
    _l("onPointerLeave", ["pointerout", "pointerover"]),
    Vn(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    Vn(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    Vn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Vn(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    Vn(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    Vn(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ));
  var Wi =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    _0 = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(Wi),
    );
  function yp(e, t) {
    t = (t & 4) !== 0;
    for (var a = 0; a < e.length; a++) {
      var l = e[a],
        u = l.event;
      l = l.listeners;
      e: {
        var s = void 0;
        if (t)
          for (var d = l.length - 1; 0 <= d; d--) {
            var p = l[d],
              j = p.instance,
              E = p.currentTarget;
            if (((p = p.listener), j !== s && u.isPropagationStopped()))
              break e;
            ((s = p), (u.currentTarget = E));
            try {
              s(u);
            } catch (w) {
              qu(w);
            }
            ((u.currentTarget = null), (s = j));
          }
        else
          for (d = 0; d < l.length; d++) {
            if (
              ((p = l[d]),
              (j = p.instance),
              (E = p.currentTarget),
              (p = p.listener),
              j !== s && u.isPropagationStopped())
            )
              break e;
            ((s = p), (u.currentTarget = E));
            try {
              s(u);
            } catch (w) {
              qu(w);
            }
            ((u.currentTarget = null), (s = j));
          }
      }
    }
  }
  function ve(e, t) {
    var a = t[nd];
    a === void 0 && (a = t[nd] = new Set());
    var l = e + "__bubble";
    a.has(l) || (bp(t, e, 2, !1), a.add(l));
  }
  function zo(e, t, a) {
    var l = 0;
    (t && (l |= 4), bp(a, e, l, t));
  }
  var Hs = "_reactListening" + Math.random().toString(36).slice(2);
  function No(e) {
    if (!e[Hs]) {
      ((e[Hs] = !0),
        ud.forEach(function (a) {
          a !== "selectionchange" && (_0.has(a) || zo(a, !1, e), zo(a, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Hs] || ((t[Hs] = !0), zo("selectionchange", !1, t));
    }
  }
  function bp(e, t, a, l) {
    switch (rg(t)) {
      case 2:
        var u = h1;
        break;
      case 8:
        u = p1;
        break;
      default:
        u = Ko;
    }
    ((a = u.bind(null, t, a, e)),
      (u = void 0),
      !Dr ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (u = !0),
      l
        ? u !== void 0
          ? e.addEventListener(t, a, { capture: !0, passive: u })
          : e.addEventListener(t, a, !0)
        : u !== void 0
          ? e.addEventListener(t, a, { passive: u })
          : e.addEventListener(t, a, !1));
  }
  function To(e, t, a, l, u) {
    var s = l;
    if ((t & 1) === 0 && (t & 2) === 0 && l !== null)
      e: for (;;) {
        if (l === null) return;
        var d = l.tag;
        if (d === 3 || d === 4) {
          var p = l.stateNode.containerInfo;
          if (p === u) break;
          if (d === 4)
            for (d = l.return; d !== null;) {
              var j = d.tag;
              if ((j === 3 || j === 4) && d.stateNode.containerInfo === u)
                return;
              d = d.return;
            }
          for (; p !== null;) {
            if (((d = $n(p)), d === null)) return;
            if (((j = d.tag), j === 5 || j === 6 || j === 26 || j === 27)) {
              l = s = d;
              continue e;
            }
            p = p.parentNode;
          }
        }
        l = l.return;
      }
    bd(function () {
      var E = s,
        w = wr(a),
        U = [];
      e: {
        var z = Xd.get(e);
        if (z !== void 0) {
          var A = Zu,
            Y = e;
          switch (e) {
            case "keypress":
              if (Uu(a) === 0) break e;
            case "keydown":
            case "keyup":
              A = ub;
              break;
            case "focusin":
              ((Y = "focus"), (A = Br));
              break;
            case "focusout":
              ((Y = "blur"), (A = Br));
              break;
            case "beforeblur":
            case "afterblur":
              A = Br;
              break;
            case "click":
              if (a.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              A = _d;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              A = Qy;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              A = fb;
              break;
            case $d:
            case Vd:
            case Gd:
              A = Py;
              break;
            case Kd:
              A = mb;
              break;
            case "scroll":
            case "scrollend":
              A = Ky;
              break;
            case "wheel":
              A = pb;
              break;
            case "copy":
            case "cut":
            case "paste":
              A = Wy;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              A = xd;
              break;
            case "submit":
              A = cb;
              break;
            case "toggle":
            case "beforetoggle":
              A = vb;
          }
          var Q = (t & 4) !== 0,
            fe = !Q && (e === "scroll" || e === "scrollend"),
            N = Q ? (z !== null ? z + "Capture" : null) : z;
          Q = [];
          for (var S = E, O; S !== null;) {
            var R = S;
            if (
              ((O = R.stateNode),
              (R = R.tag),
              (R !== 5 && R !== 26 && R !== 27) ||
                O === null ||
                N === null ||
                ((R = ji(S, N)), R != null && Q.push(eu(S, R, O))),
              fe)
            )
              break;
            S = S.return;
          }
          0 < Q.length &&
            ((z = new A(z, Y, null, a, w)), U.push({ event: z, listeners: Q }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((A = e === "mouseover" || e === "pointerover"),
            (z = e === "mouseout" || e === "pointerout"),
            A &&
              a !== Ar &&
              (Y = a.relatedTarget || a.fromElement) &&
              ($n(Y) || Y[bl]))
          )
            break e;
          (z || A) &&
            ((Y =
              w.window === w
                ? w
                : (A = w.ownerDocument)
                  ? A.defaultView || A.parentWindow
                  : window),
            z
              ? ((A = a.relatedTarget || a.toElement),
                (z = E),
                (A = A ? $n(A) : null),
                A !== null &&
                  ((fe = m(A)),
                  (Q = A.tag),
                  A !== fe || (Q !== 5 && Q !== 27 && Q !== 6)) &&
                  (A = null))
              : ((z = null), (A = E)),
            z !== A &&
              ((Q = _d),
              (R = "onMouseLeave"),
              (N = "onMouseEnter"),
              (S = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((Q = xd),
                (R = "onPointerLeave"),
                (N = "onPointerEnter"),
                (S = "pointer")),
              (fe = z == null ? Y : ki(z)),
              (O = A == null ? Y : ki(A)),
              (Y = new Q(R, S + "leave", z, a, w)),
              (Y.target = fe),
              (Y.relatedTarget = O),
              (R = null),
              $n(w) === E &&
                ((Q = new Q(N, S + "enter", A, a, w)),
                (Q.target = O),
                (Q.relatedTarget = fe),
                (R = Q)),
              (fe = R),
              (Q = z && A ? ce(z, A, S0) : null),
              z !== null && kp(U, Y, z, Q, !1),
              A !== null && fe !== null && kp(U, fe, A, Q, !0)));
        }
        e: {
          if (
            ((z = E ? ki(E) : window),
            (A = z.nodeName && z.nodeName.toLowerCase()),
            A === "select" || (A === "input" && z.type === "file"))
          )
            var K = Cd;
          else if (Ad(z))
            if (Dd) K = Tb;
            else {
              K = zb;
              var ke = xb;
            }
          else
            ((A = z.nodeName),
              !A ||
              A.toLowerCase() !== "input" ||
              (z.type !== "checkbox" && z.type !== "radio")
                ? E && Or(E.elementType) && (K = Cd)
                : (K = Nb));
          if (K && (K = K(e, E))) {
            wd(U, K, a, w);
            break e;
          }
          ke && ke(e, z, E);
        }
        switch (((ke = E ? ki(E) : window), e)) {
          case "focusin":
            (Ad(ke) || ke.contentEditable === "true") &&
              ((El = ke), (Vr = E), (Oi = null));
            break;
          case "focusout":
            Oi = Vr = El = null;
            break;
          case "mousedown":
            Gr = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((Gr = !1), qd(U, a, w));
            break;
          case "selectionchange":
            if (Ob) break;
          case "keydown":
          case "keyup":
            qd(U, a, w);
        }
        var W;
        if (Hr)
          e: {
            switch (e) {
              case "compositionstart":
                var le = "onCompositionStart";
                break e;
              case "compositionend":
                le = "onCompositionEnd";
                break e;
              case "compositionupdate":
                le = "onCompositionUpdate";
                break e;
            }
            le = void 0;
          }
        else
          Tl
            ? Ed(e, a) && (le = "onCompositionEnd")
            : e === "keydown" &&
              a.keyCode === 229 &&
              (le = "onCompositionStart");
        (le &&
          (zd &&
            a.locale !== "ko" &&
            (Tl || le !== "onCompositionStart"
              ? le === "onCompositionEnd" && Tl && (W = kd())
              : ((rn = w),
                (Mr = "value" in rn ? rn.value : rn.textContent),
                (Tl = !0))),
          (ke = Ls(E, le)),
          0 < ke.length &&
            ((le = new Sd(le, e, null, a, w)),
            U.push({ event: le, listeners: ke }),
            W ? (le.data = W) : ((W = Od(a)), W !== null && (le.data = W)))),
          (W = bb ? kb(e, a) : jb(e, a)) &&
            ((le = Ls(E, "onBeforeInput")),
            0 < le.length &&
              ((ke = new Sd("onBeforeInput", "beforeinput", null, a, w)),
              U.push({ event: ke, listeners: le }),
              (ke.data = W))),
          b0(U, e, E, a, w));
      }
      yp(U, t);
    });
  }
  function eu(e, t, a) {
    return { instance: e, listener: t, currentTarget: a };
  }
  function Ls(e, t) {
    for (var a = t + "Capture", l = []; e !== null;) {
      var u = e,
        s = u.stateNode;
      if (
        ((u = u.tag),
        (u !== 5 && u !== 26 && u !== 27) ||
          s === null ||
          ((u = ji(e, a)),
          u != null && l.unshift(eu(e, u, s)),
          (u = ji(e, t)),
          u != null && l.push(eu(e, u, s))),
        e.tag === 3)
      )
        return l;
      e = e.return;
    }
    return [];
  }
  function S0(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function kp(e, t, a, l, u) {
    for (var s = t._reactName, d = []; a !== null && a !== l;) {
      var p = a,
        j = p.alternate,
        E = p.stateNode;
      if (((p = p.tag), j !== null && j === l)) break;
      ((p !== 5 && p !== 26 && p !== 27) ||
        E === null ||
        ((j = E),
        u
          ? ((E = ji(a, s)), E != null && d.unshift(eu(a, E, j)))
          : u || ((E = ji(a, s)), E != null && d.push(eu(a, E, j)))),
        (a = a.return));
    }
    d.length !== 0 && e.push({ event: t, listeners: d });
  }
  var x0 = /\r\n?/g,
    z0 = /\u0000|\uFFFD/g;
  function jp(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        x0,
        `
`,
      )
      .replace(z0, "");
  }
  function _p(e, t) {
    return ((t = jp(t)), jp(e) === t);
  }
  function Ue(e, t, a, l, u, s) {
    switch (a) {
      case "children":
        if (typeof l == "string")
          t === "body" || (t === "textarea" && l === "") || xl(e, l);
        else if (typeof l == "number" || typeof l == "bigint")
          t !== "body" && xl(e, "" + l);
        else return;
        break;
      case "className":
        Du(e, "class", l);
        break;
      case "tabIndex":
        Du(e, "tabindex", l);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Du(e, a, l);
        break;
      case "style":
        vd(e, l, s);
        return;
      case "data":
        if (t !== "object") {
          Du(e, "data", l);
          break;
        }
      case "src":
      case "href":
        if (l === "" && (t !== "a" || a !== "href")) {
          e.removeAttribute(a);
          break;
        }
        if (
          l == null ||
          typeof l == "function" ||
          typeof l == "symbol" ||
          typeof l == "boolean"
        ) {
          e.removeAttribute(a);
          break;
        }
        ((l = Mu(l)), e.setAttribute(a, l));
        break;
      case "action":
      case "formAction":
        if (typeof l == "function") {
          e.setAttribute(
            a,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
          );
          break;
        } else
          typeof s == "function" &&
            (a === "formAction"
              ? (t !== "input" && Ue(e, t, "name", u.name, u, null),
                Ue(e, t, "formEncType", u.formEncType, u, null),
                Ue(e, t, "formMethod", u.formMethod, u, null),
                Ue(e, t, "formTarget", u.formTarget, u, null))
              : (Ue(e, t, "encType", u.encType, u, null),
                Ue(e, t, "method", u.method, u, null),
                Ue(e, t, "target", u.target, u, null)));
        if (l == null || typeof l == "symbol" || typeof l == "boolean") {
          e.removeAttribute(a);
          break;
        }
        ((l = Mu(l)), e.setAttribute(a, l));
        break;
      case "onClick":
        l != null && (e.onclick = _a);
        return;
      case "onScroll":
        l != null && ve("scroll", e);
        return;
      case "onScrollEnd":
        l != null && ve("scrollend", e);
        return;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l)) throw Error(c(61));
          if (((a = l.__html), a != null)) {
            if (u.children != null) throw Error(c(60));
            s?.__html !== a && (e.innerHTML = a);
          }
        }
        break;
      case "multiple":
        e.multiple = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "muted":
        e.muted = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          l == null ||
          typeof l == "function" ||
          typeof l == "boolean" ||
          typeof l == "symbol"
        ) {
          e.removeAttribute("xlink:href");
          break;
        }
        ((a = Mu(l)),
          e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a));
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        l != null && typeof l != "function" && typeof l != "symbol"
          ? e.setAttribute(a, l)
          : e.removeAttribute(a);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "credentialless":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        l && typeof l != "function" && typeof l != "symbol"
          ? e.setAttribute(a, "")
          : e.removeAttribute(a);
        break;
      case "capture":
      case "download":
        l === !0
          ? e.setAttribute(a, "")
          : l !== !1 &&
              l != null &&
              typeof l != "function" &&
              typeof l != "symbol"
            ? e.setAttribute(a, l)
            : e.removeAttribute(a);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        l != null &&
        typeof l != "function" &&
        typeof l != "symbol" &&
        !isNaN(l) &&
        1 <= l
          ? e.setAttribute(a, l)
          : e.removeAttribute(a);
        break;
      case "rowSpan":
      case "start":
        l == null || typeof l == "function" || typeof l == "symbol" || isNaN(l)
          ? e.removeAttribute(a)
          : e.setAttribute(a, l);
        break;
      case "popover":
        (ve("beforetoggle", e), ve("toggle", e), Cu(e, "popover", l));
        break;
      case "xlinkActuate":
        La(e, "http://www.w3.org/1999/xlink", "xlink:actuate", l);
        break;
      case "xlinkArcrole":
        La(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", l);
        break;
      case "xlinkRole":
        La(e, "http://www.w3.org/1999/xlink", "xlink:role", l);
        break;
      case "xlinkShow":
        La(e, "http://www.w3.org/1999/xlink", "xlink:show", l);
        break;
      case "xlinkTitle":
        La(e, "http://www.w3.org/1999/xlink", "xlink:title", l);
        break;
      case "xlinkType":
        La(e, "http://www.w3.org/1999/xlink", "xlink:type", l);
        break;
      case "xmlBase":
        La(e, "http://www.w3.org/XML/1998/namespace", "xml:base", l);
        break;
      case "xmlLang":
        La(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", l);
        break;
      case "xmlSpace":
        La(e, "http://www.w3.org/XML/1998/namespace", "xml:space", l);
        break;
      case "is":
        Cu(e, "is", l);
        break;
      case "innerText":
      case "textContent":
        return;
      default:
        if (
          !(2 < a.length) ||
          (a[0] !== "o" && a[0] !== "O") ||
          (a[1] !== "n" && a[1] !== "N")
        )
          ((a = Vy.get(a) || a), Cu(e, a, l));
        else return;
    }
    Ee = !0;
  }
  function Eo(e, t, a, l, u, s) {
    switch (a) {
      case "style":
        vd(e, l, s);
        return;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l)) throw Error(c(61));
          if (((a = l.__html), a != null)) {
            if (u.children != null) throw Error(c(60));
            s?.__html !== a && (e.innerHTML = a);
          }
        }
        break;
      case "children":
        if (typeof l == "string") xl(e, l);
        else if (typeof l == "number" || typeof l == "bigint") xl(e, "" + l);
        else return;
        break;
      case "onScroll":
        l != null && ve("scroll", e);
        return;
      case "onScrollEnd":
        l != null && ve("scrollend", e);
        return;
      case "onClick":
        l != null && (e.onclick = _a);
        return;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        return;
      case "innerText":
      case "textContent":
        return;
      default:
        if (!sd.hasOwnProperty(a))
          e: {
            if (
              a[0] === "o" &&
              a[1] === "n" &&
              ((u = a.endsWith("Capture")),
              (s = a.slice(2, u ? a.length - 7 : void 0)),
              (t = e[Mt] || null),
              (t = t != null ? t[a] : null),
              typeof t == "function" && e.removeEventListener(s, t, u),
              typeof l == "function")
            ) {
              (typeof t != "function" &&
                t !== null &&
                (a in e
                  ? (e[a] = null)
                  : e.hasAttribute(a) && e.removeAttribute(a)),
                e.addEventListener(s, l, u));
              break e;
            }
            ((Ee = !0),
              a in e
                ? (e[a] = l)
                : l === !0
                  ? e.setAttribute(a, "")
                  : Cu(e, a, l));
          }
        return;
    }
    Ee = !0;
  }
  function kt(e, t, a) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        (ve("error", e), ve("load", e));
        var l = !1,
          u = !1,
          s;
        for (s in a)
          if (a.hasOwnProperty(s)) {
            var d = a[s];
            if (d != null)
              switch (s) {
                case "src":
                  l = !0;
                  break;
                case "srcSet":
                  u = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(c(137, t));
                default:
                  Ue(e, t, s, d, a, null);
              }
          }
        (u && Ue(e, t, "srcSet", a.srcSet, a, null),
          l && Ue(e, t, "src", a.src, a, null));
        return;
      case "input":
        ve("invalid", e);
        var p = (s = d = u = null),
          j = null,
          E = null;
        for (l in a)
          if (a.hasOwnProperty(l)) {
            var w = a[l];
            if (w != null)
              switch (l) {
                case "name":
                  u = w;
                  break;
                case "type":
                  d = w;
                  break;
                case "checked":
                  j = w;
                  break;
                case "defaultChecked":
                  E = w;
                  break;
                case "value":
                  s = w;
                  break;
                case "defaultValue":
                  p = w;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (w != null) throw Error(c(137, t));
                  break;
                default:
                  Ue(e, t, l, w, a, null);
              }
          }
        md(e, s, p, j, E, d, u, !1);
        return;
      case "select":
        (ve("invalid", e), (l = d = s = null));
        for (u in a)
          if (a.hasOwnProperty(u) && ((p = a[u]), p != null))
            switch (u) {
              case "value":
                s = p;
                break;
              case "defaultValue":
                d = p;
                break;
              case "multiple":
                l = p;
              default:
                Ue(e, t, u, p, a, null);
            }
        ((t = s),
          (a = d),
          (e.multiple = !!l),
          t != null ? Sl(e, !!l, t, !1) : a != null && Sl(e, !!l, a, !0));
        return;
      case "textarea":
        (ve("invalid", e), (s = u = l = null));
        for (d in a)
          if (a.hasOwnProperty(d) && ((p = a[d]), p != null))
            switch (d) {
              case "value":
                l = p;
                break;
              case "defaultValue":
                u = p;
                break;
              case "children":
                s = p;
                break;
              case "dangerouslySetInnerHTML":
                if (p != null) throw Error(c(91));
                break;
              default:
                Ue(e, t, d, p, a, null);
            }
        pd(e, l, u, s);
        return;
      case "option":
        for (j in a)
          a.hasOwnProperty(j) &&
            ((l = a[j]), l != null) &&
            (j === "selected"
              ? (e.selected =
                  l && typeof l != "function" && typeof l != "symbol")
              : Ue(e, t, j, l, a, null));
        return;
      case "dialog":
        (ve("beforetoggle", e),
          ve("toggle", e),
          ve("cancel", e),
          ve("close", e));
        break;
      case "iframe":
      case "object":
        ve("load", e);
        break;
      case "video":
      case "audio":
        for (l = 0; l < Wi.length; l++) ve(Wi[l], e);
        break;
      case "image":
        (ve("error", e), ve("load", e));
        break;
      case "details":
        ve("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        (ve("error", e), ve("load", e));
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (E in a)
          if (a.hasOwnProperty(E) && ((l = a[E]), l != null))
            switch (E) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(c(137, t));
              default:
                Ue(e, t, E, l, a, null);
            }
        return;
      default:
        if (Or(t)) {
          for (w in a)
            a.hasOwnProperty(w) &&
              ((l = a[w]), l !== void 0 && Eo(e, t, w, l, a, void 0));
          return;
        }
    }
    for (p in a)
      a.hasOwnProperty(p) && ((l = a[p]), l != null && Ue(e, t, p, l, a, null));
  }
  var N0 = {};
  function T0(e, t, a, l) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var u = null,
          s = null,
          d = null,
          p = null,
          j = null,
          E = null,
          w = null;
        for (A in a) {
          var U = a[A];
          if (a.hasOwnProperty(A) && U != null)
            switch (A) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                j = U;
              default:
                l.hasOwnProperty(A) || Ue(e, t, A, null, l, U);
            }
        }
        for (var z in l) {
          var A = l[z];
          if (((U = a[z]), l.hasOwnProperty(z) && (A != null || U != null)))
            switch (z) {
              case "type":
                (A !== U && (Ee = !0), (s = A));
                break;
              case "name":
                (A !== U && (Ee = !0), (u = A));
                break;
              case "checked":
                (A !== U && (Ee = !0), (E = A));
                break;
              case "defaultChecked":
                (A !== U && (Ee = !0), (w = A));
                break;
              case "value":
                (A !== U && (Ee = !0), (d = A));
                break;
              case "defaultValue":
                (A !== U && (Ee = !0), (p = A));
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (A != null) throw Error(c(137, t));
                break;
              default:
                A !== U && Ue(e, t, z, A, l, U);
            }
        }
        Tr(e, d, p, j, E, w, s, u);
        return;
      case "select":
        A = d = p = z = null;
        for (s in a)
          if (((j = a[s]), a.hasOwnProperty(s) && j != null))
            switch (s) {
              case "value":
                break;
              case "multiple":
                A = j;
              default:
                l.hasOwnProperty(s) || Ue(e, t, s, null, l, j);
            }
        for (u in l)
          if (
            ((s = l[u]),
            (j = a[u]),
            l.hasOwnProperty(u) && (s != null || j != null))
          )
            switch (u) {
              case "value":
                (s !== j && (Ee = !0), (z = s));
                break;
              case "defaultValue":
                (s !== j && (Ee = !0), (p = s));
                break;
              case "multiple":
                (s !== j && (Ee = !0), (d = s));
              default:
                s !== j && Ue(e, t, u, s, l, j);
            }
        ((t = p),
          (a = d),
          (l = A),
          z != null
            ? Sl(e, !!a, z, !1)
            : !!l != !!a &&
              (t != null ? Sl(e, !!a, t, !0) : Sl(e, !!a, a ? [] : "", !1)));
        return;
      case "textarea":
        A = z = null;
        for (p in a)
          if (
            ((u = a[p]),
            a.hasOwnProperty(p) && u != null && !l.hasOwnProperty(p))
          )
            switch (p) {
              case "value":
                break;
              case "children":
                break;
              default:
                Ue(e, t, p, null, l, u);
            }
        for (d in l)
          if (
            ((u = l[d]),
            (s = a[d]),
            l.hasOwnProperty(d) && (u != null || s != null))
          )
            switch (d) {
              case "value":
                (u !== s && (Ee = !0), (z = u));
                break;
              case "defaultValue":
                (u !== s && (Ee = !0), (A = u));
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (u != null) throw Error(c(91));
                break;
              default:
                u !== s && Ue(e, t, d, u, l, s);
            }
        hd(e, z, A);
        return;
      case "option":
        for (var Y in a)
          ((z = a[Y]),
            a.hasOwnProperty(Y) &&
              z != null &&
              !l.hasOwnProperty(Y) &&
              (Y === "selected" ? (e.selected = !1) : Ue(e, t, Y, null, l, z)));
        for (j in l)
          ((z = l[j]),
            (A = a[j]),
            l.hasOwnProperty(j) &&
              z !== A &&
              (z != null || A != null) &&
              (j === "selected"
                ? (z !== A && (Ee = !0),
                  (e.selected =
                    z && typeof z != "function" && typeof z != "symbol"))
                : Ue(e, t, j, z, l, A)));
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var Q in a)
          ((z = a[Q]),
            a.hasOwnProperty(Q) &&
              z != null &&
              !l.hasOwnProperty(Q) &&
              Ue(e, t, Q, null, l, z));
        for (E in l)
          if (
            ((z = l[E]),
            (A = a[E]),
            l.hasOwnProperty(E) && z !== A && (z != null || A != null))
          )
            switch (E) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (z != null) throw Error(c(137, t));
                break;
              default:
                Ue(e, t, E, z, l, A);
            }
        return;
      default:
        if (Or(t)) {
          for (var fe in a)
            ((z = a[fe]),
              a.hasOwnProperty(fe) &&
                z !== void 0 &&
                !l.hasOwnProperty(fe) &&
                Eo(e, t, fe, void 0, l, z));
          for (w in l)
            ((z = l[w]),
              (A = a[w]),
              !l.hasOwnProperty(w) ||
                z === A ||
                (z === void 0 && A === void 0) ||
                Eo(e, t, w, z, l, A));
          return;
        }
    }
    for (var N in a)
      ((z = a[N]),
        a.hasOwnProperty(N) &&
          z != null &&
          !l.hasOwnProperty(N) &&
          Ue(e, t, N, null, l, z));
    for (U in l)
      ((z = l[U]),
        (A = a[U]),
        !l.hasOwnProperty(U) ||
          z === A ||
          (z == null && A == null) ||
          Ue(e, t, U, z, l, A));
  }
  function Sp(e) {
    switch (e) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function E0() {
    if (typeof performance.getEntriesByType == "function") {
      for (
        var e = 0, t = 0, a = performance.getEntriesByType("resource"), l = 0;
        l < a.length;
        l++
      ) {
        var u = a[l],
          s = u.transferSize,
          d = u.initiatorType,
          p = u.duration;
        if (s && p && Sp(d)) {
          for (d = 0, p = u.responseEnd, l += 1; l < a.length; l++) {
            var j = a[l],
              E = j.startTime;
            if (E > p) break;
            var w = j.transferSize,
              U = j.initiatorType;
            w &&
              Sp(U) &&
              ((j = j.responseEnd), (d += w * (j < p ? 1 : (p - E) / (j - E))));
          }
          if ((--l, (t += (8 * (s + d)) / (u.duration / 1e3)), e++, 10 < e))
            break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection &&
      ((e = navigator.connection.downlink), typeof e == "number")
      ? e
      : 5;
  }
  var Oo = null,
    Ao = null;
  function tu(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function xp(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function zp(e, t) {
    if (e === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return e === 1 && t === "foreignObject" ? 0 : e;
  }
  function Np(e, t, a, l) {
    return (
      (a = tu(a).createElement(e)),
      (a[pt] = l),
      (a[Mt] = t),
      kt(a, e, t),
      ft(a),
      a
    );
  }
  function wo(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      typeof t.children == "bigint" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Co = null;
  function O0() {
    var e = window.event;
    return e && e.type === "popstate"
      ? e === Co
        ? !1
        : ((Co = e), !0)
      : ((Co = null), !1);
  }
  var Do = typeof setTimeout == "function" ? setTimeout : void 0,
    A0 = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Tp = typeof Promise == "function" ? Promise : void 0,
    Ep =
      typeof requestAnimationFrame == "function" ? requestAnimationFrame : Do,
    w0 =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Tp < "u"
          ? function (e) {
              return Tp.resolve(null).then(e).catch(C0);
            }
          : Do;
  function C0(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function En(e) {
    return e === "head";
  }
  function Op(e, t) {
    var a = t,
      l = 0;
    do {
      var u = a.nextSibling;
      if ((e.removeChild(a), u && u.nodeType === 8))
        if (((a = u.data), a === "/$" || a === "/&")) {
          if (l === 0) {
            (e.removeChild(u), si(t));
            return;
          }
          l--;
        } else if (
          a === "$" ||
          a === "$?" ||
          a === "$~" ||
          a === "$!" ||
          a === "&"
        )
          l++;
        else if (a === "html") qo(e.ownerDocument.documentElement);
        else if (a === "head") {
          ((a = e.ownerDocument.head), qo(a));
          for (var s = a.firstChild; s;) {
            var d = s.nextSibling,
              p = s.nodeName;
            (s[bi] ||
              p === "SCRIPT" ||
              p === "STYLE" ||
              (p === "LINK" && s.rel.toLowerCase() === "stylesheet") ||
              a.removeChild(s),
              (s = d));
          }
        } else a === "body" && qo(e.ownerDocument.body);
      a = u;
    } while (a);
    si(t);
  }
  function Ap(e, t) {
    var a = e;
    e = 0;
    do {
      var l = a.nextSibling;
      if (
        (a.nodeType === 1
          ? t
            ? ((a._stashedDisplay = a.style.display),
              (a.style.display = "none"))
            : ((a.style.display = a._stashedDisplay || ""),
              a.getAttribute("style") === "" && a.removeAttribute("style"))
          : a.nodeType === 3 &&
            (t
              ? ((a._stashedText = a.nodeValue), (a.nodeValue = ""))
              : (a.nodeValue = a._stashedText || "")),
        l && l.nodeType === 8)
      )
        if (((a = l.data), a === "/$")) {
          if (e === 0) break;
          e--;
        } else (a !== "$" && a !== "$?" && a !== "$~" && a !== "$!") || e++;
      a = l;
    } while (a);
  }
  function wp(e, t, a) {
    if (
      ((t = CSS.escape(t) !== t ? "r-" + btoa(t).replace(/=/g, "") : t),
      (e.style.viewTransitionName = t),
      a != null && (e.style.viewTransitionClass = a),
      (a = getComputedStyle(e)),
      a.display === "inline")
    ) {
      if (((t = e.getClientRects()), t.length === 1)) var l = 1;
      else
        for (var u = (l = 0); u < t.length; u++) {
          var s = t[u];
          0 < s.width && 0 < s.height && l++;
        }
      l === 1 &&
        ((e = e.style),
        (e.display = t.length === 1 ? "inline-block" : "block"),
        (e.marginTop = "-" + a.paddingTop),
        (e.marginBottom = "-" + a.paddingBottom));
    }
  }
  function Cp(e, t) {
    ((e = e.style), (t = t.style));
    var a =
      t != null
        ? t.hasOwnProperty("viewTransitionName")
          ? t.viewTransitionName
          : t.hasOwnProperty("view-transition-name")
            ? t["view-transition-name"]
            : null
        : null;
    ((e.viewTransitionName =
      a == null || typeof a == "boolean" ? "" : ("" + a).trim()),
      (a =
        t != null
          ? t.hasOwnProperty("viewTransitionClass")
            ? t.viewTransitionClass
            : t.hasOwnProperty("view-transition-class")
              ? t["view-transition-class"]
              : null
          : null),
      (e.viewTransitionClass =
        a == null || typeof a == "boolean" ? "" : ("" + a).trim()),
      e.display === "inline-block" &&
        (t == null
          ? (e.display = e.margin = "")
          : ((a = t.display),
            (e.display = a == null || typeof a == "boolean" ? "" : a),
            (a = t.margin),
            a != null
              ? (e.margin = a)
              : ((a = t.hasOwnProperty("marginTop")
                  ? t.marginTop
                  : t["margin-top"]),
                (e.marginTop = a == null || typeof a == "boolean" ? "" : a),
                (t = t.hasOwnProperty("marginBottom")
                  ? t.marginBottom
                  : t["margin-bottom"]),
                (e.marginBottom =
                  t == null || typeof t == "boolean" ? "" : t)))));
  }
  function D0(e, t, a) {
    return (
      (a = a.ownerDocument.defaultView),
      {
        rect: e,
        abs: t.position === "absolute" || t.position === "fixed",
        clip:
          t.clipPath !== "none" ||
          t.overflow !== "visible" ||
          t.filter !== "none" ||
          t.mask !== "none" ||
          t.mask !== "none" ||
          t.borderRadius !== "0px",
        view:
          0 <= e.bottom &&
          0 <= e.right &&
          e.top <= a.innerHeight &&
          e.left <= a.innerWidth,
      }
    );
  }
  function Mo(e) {
    var t = e.getBoundingClientRect(),
      a = getComputedStyle(e);
    return D0(t, a, e);
  }
  function M0(e) {
    return e.documentElement.clientHeight;
  }
  function R0(e) {
    (this.addEventListener("load", e), this.addEventListener("error", e));
  }
  function U0(e, t, a, l, u, s, d, p, j) {
    var E = t.nodeType === 9 ? t : t.ownerDocument;
    try {
      var w = E.startViewTransition({
        update: function () {
          var z = E.defaultView,
            A = z.navigation && z.navigation.transition,
            Y = E.fonts.status;
          l();
          var Q = [];
          if (
            (Y === "loaded" &&
              (M0(E), E.fonts.status === "loading" && Q.push(E.fonts.ready)),
            (Y = Q.length),
            e !== null)
          )
            for (var fe = e.suspenseyImages, N = 0, S = 0; S < fe.length; S++) {
              var O = fe[S];
              if (!O.complete) {
                var R = O.getBoundingClientRect();
                if (
                  0 < R.bottom &&
                  0 < R.right &&
                  R.top < z.innerHeight &&
                  R.left < z.innerWidth
                ) {
                  if (((N += Wp(O)), N > $s)) {
                    Q.length = Y;
                    break;
                  }
                  ((O = new Promise(R0.bind(O))), Q.push(O));
                }
              }
            }
          if (0 < Q.length)
            return (
              (z = Promise.race([
                Promise.all(Q),
                new Promise(function (K) {
                  return setTimeout(K, 500);
                }),
              ]).then(u, u)),
              (A ? Promise.allSettled([A.finished, z]) : z).then(s, s)
            );
          if ((u(), A)) return A.finished.then(s, s);
          s();
        },
        types: a,
      });
      E.__reactViewTransition = w;
      var U = [];
      return (
        w.ready.then(
          function () {
            for (
              var z = E.documentElement.getAnimations({ subtree: !0 }), A = 0;
              A < z.length;
              A++
            ) {
              var Y = z[A],
                Q = Y.effect,
                fe = Q.pseudoElement;
              if (fe != null && fe.startsWith("::view-transition")) {
                (U.push(Y), (Y = Q.getKeyframes()));
                for (var N = (fe = void 0), S = !0, O = 0; O < Y.length; O++) {
                  var R = Y[O],
                    K = R.width;
                  if (fe === void 0) fe = K;
                  else if (fe !== K) {
                    S = !1;
                    break;
                  }
                  if (((K = R.height), N === void 0)) N = K;
                  else if (N !== K) {
                    S = !1;
                    break;
                  }
                  (delete R.width,
                    delete R.height,
                    R.transform === "none" && delete R.transform);
                }
                S &&
                  fe !== void 0 &&
                  N !== void 0 &&
                  (Q.setKeyframes(Y),
                  (S = getComputedStyle(Q.target, Q.pseudoElement)),
                  S.width !== fe || S.height !== N) &&
                  ((S = Y[0]),
                  (S.width = fe),
                  (S.height = N),
                  (S = Y[Y.length - 1]),
                  (S.width = fe),
                  (S.height = N),
                  Q.setKeyframes(Y));
              }
            }
            d();
          },
          function (z) {
            E.__reactViewTransition === w && (E.__reactViewTransition = null);
            try {
              (typeof z == "object" &&
                z !== null &&
                z.name === "InvalidStateError" &&
                (z.message ===
                  "View transition was skipped because document visibility state is hidden." ||
                  z.message ===
                    "Skipping view transition because document visibility state has become hidden." ||
                  z.message ===
                    "Skipping view transition because viewport size changed." ||
                  z.message ===
                    "Transition was aborted because of invalid state") &&
                (z = null),
                z !== null && j(z));
            } finally {
              (l(), u(), d());
            }
          },
        ),
        w.finished.finally(function () {
          for (var z = 0; z < U.length; z++) U[z].cancel();
          (E.__reactViewTransition === w && (E.__reactViewTransition = null),
            p());
        }),
        w
      );
    } catch {
      return (l(), u(), d(), null);
    }
  }
  function ol(e, t) {
    ((this._scope = document.documentElement),
      (this._selector = "::view-transition-" + e + "(" + t + ")"));
  }
  ((ol.prototype.animate = function (e, t) {
    return (
      (t = typeof t == "number" ? { duration: t } : ae({}, t)),
      (t.pseudoElement = this._selector),
      this._scope.animate(e, t)
    );
  }),
    (ol.prototype.getAnimations = function () {
      for (
        var e = this._scope,
          t = this._selector,
          a = e.getAnimations({ subtree: !0 }),
          l = [],
          u = 0;
        u < a.length;
        u++
      ) {
        var s = a[u].effect;
        s !== null && s.target === e && s.pseudoElement === t && l.push(a[u]);
      }
      return l;
    }),
    (ol.prototype.getComputedStyle = function () {
      return getComputedStyle(this._scope, this._selector);
    }));
  function Dp(e) {
    return {
      name: e,
      group: new ol("group", e),
      imagePair: new ol("image-pair", e),
      old: new ol("old", e),
      new: new ol("new", e),
    };
  }
  function Pt(e) {
    ((this._fragmentFiber = e),
      (this._observers = this._eventListeners = null));
  }
  Pt.prototype.addEventListener = function (e, t, a) {
    var l = null,
      u = null;
    if (!(
      a != null &&
      typeof a != "boolean" &&
      ((l = a.signal || null), l !== null && l.aborted)
    )) {
      this._eventListeners === null && (this._eventListeners = []);
      var s = this._eventListeners;
      if (Rp(s, e, t, a) === -1) {
        var d = this,
          p = t;
        (a != null &&
          typeof a != "boolean" &&
          a.once === !0 &&
          (p = function (j) {
            (d.removeEventListener(e, t, a),
              typeof t == "function" ? t.call(this, j) : t.handleEvent(j));
          }),
          l !== null &&
            ((u = d.removeEventListener.bind(d, e, t, a)),
            l.addEventListener("abort", u, { once: !0 }),
            (u = l.removeEventListener.bind(l, "abort", u))),
          (l = ti(a)),
          s.push({
            type: e,
            listener: t,
            optionsOrUseCapture: a,
            attachedListener: p,
            cleanup: u,
          }),
          k(this._fragmentFiber.child, !1, B0, e, p, l));
      }
      this._eventListeners = s;
    }
  };
  function B0(e, t, a, l) {
    return (L(e).addEventListener(t, a, l), !1);
  }
  Pt.prototype.removeEventListener = function (e, t, a) {
    var l = this._eventListeners;
    if (l !== null && ((t = Rp(l, e, t, a)), t !== -1)) {
      var u = l[t];
      a = u.attachedListener;
      var s = u.cleanup;
      ((u = ti(u.optionsOrUseCapture)),
        k(this._fragmentFiber.child, !1, Z0, e, a, u),
        l.splice(t, 1),
        s !== null && s());
    }
  };
  function Z0(e, t, a, l) {
    return (L(e).removeEventListener(t, a, l), !1);
  }
  function ti(e) {
    return e != null &&
      typeof e != "boolean" &&
      (e.once === !0 || e.signal instanceof AbortSignal)
      ? { capture: e.capture, passive: e.passive }
      : e;
  }
  function Mp(e) {
    return e == null
      ? "c=0"
      : typeof e == "boolean"
        ? "c=" + (e ? "1" : "0")
        : "c=" + (e.capture ? "1" : "0");
  }
  function Rp(e, t, a, l) {
    if (e.length === 0) return -1;
    l = Mp(l);
    for (var u = 0; u < e.length; u++) {
      var s = e[u];
      if (s.type === t && s.listener === a && Mp(s.optionsOrUseCapture) === l)
        return u;
    }
    return -1;
  }
  ((Pt.prototype.dispatchEvent = function (e) {
    var t = T(this._fragmentFiber);
    if (t === null) return !0;
    t = L(t);
    var a = this._eventListeners;
    if ((a !== null && 0 < a.length) || !e.bubbles) {
      var l =
        t.nodeType === 9 ? t.createComment("") : document.createTextNode("");
      if (a)
        for (var u = 0; u < a.length; u++) {
          var s = a[u];
          l.addEventListener(
            s.type,
            s.attachedListener,
            ti(s.optionsOrUseCapture),
          );
        }
      if ((t.appendChild(l), (e = l.dispatchEvent(e)), a))
        for (u = 0; u < a.length; u++)
          ((s = a[u]),
            l.removeEventListener(
              s.type,
              s.attachedListener,
              ti(s.optionsOrUseCapture),
            ));
      return (t.removeChild(l), e);
    }
    return t.dispatchEvent(e);
  }),
    (Pt.prototype.focus = function (e) {
      k(this._fragmentFiber.child, !0, Up, e, void 0, void 0);
    }));
  function Up(e, t) {
    return e.tag === 6 ? !1 : ((e = L(e)), I0(e, t));
  }
  Pt.prototype.focusLast = function (e) {
    var t = [];
    k(this._fragmentFiber.child, !0, Ro, t, void 0, void 0);
    for (var a = t.length - 1; 0 <= a && !Up(t[a], e); a--);
  };
  function Ro(e, t) {
    return (t.push(e), !1);
  }
  Pt.prototype.blur = function () {
    var e = T(this._fragmentFiber);
    e !== null &&
      ((e = L(e)),
      (e = tu(e).activeElement),
      e !== null && k(this._fragmentFiber.child, !1, H0, e, void 0, void 0));
  };
  function H0(e, t) {
    return e.tag === 6
      ? !1
      : ((e = L(e)), e === t || e.contains(t) ? (t.blur(), !0) : !1);
  }
  Pt.prototype.observeUsing = function (e) {
    (this._observers === null && (this._observers = new Set()),
      this._observers.add(e),
      k(this._fragmentFiber.child, !1, L0, e, void 0, void 0));
  };
  function L0(e, t) {
    return (e.tag === 6 || ((e = L(e)), t.observe(e)), !1);
  }
  Pt.prototype.unobserveUsing = function (e) {
    var t = this._observers;
    if (t !== null && t.has(e)) {
      (t.delete(e), k(this._fragmentFiber.child, !1, q0, e, void 0, void 0));
      for (var a = (t = 0); a < ya.length; a++) {
        var l = ya[a];
        l.fragmentInstance === this && l.observer === e
          ? e.unobserve(l.instance)
          : (ya[t++] = l);
      }
      ya.length = t;
    }
  };
  function q0(e, t) {
    return (e.tag === 6 || ((e = L(e)), t.unobserve(e)), !1);
  }
  var ya = [],
    Uo = !1;
  function Y0(e, t, a) {
    (ya.push({ fragmentInstance: e, observer: t, instance: a }),
      Uo ||
        ((Uo = !0),
        P0(function () {
          Uo = !1;
          var l = ya;
          ya = [];
          for (var u = 0; u < l.length; u++) {
            var s = l[u];
            s.observer.unobserve(s.instance);
          }
        })));
  }
  Pt.prototype.getClientRects = function () {
    var e = [];
    return (k(this._fragmentFiber.child, !1, $0, e, void 0, void 0), e);
  };
  function $0(e, t) {
    if (e.tag === 6) {
      e = e.stateNode;
      var a = e.ownerDocument.createRange();
      (a.selectNodeContents(e), t.push.apply(t, a.getClientRects()));
    } else ((e = L(e)), t.push.apply(t, e.getClientRects()));
    return !1;
  }
  ((Pt.prototype.getRootNode = function (e) {
    var t = T(this._fragmentFiber);
    return t === null ? this : L(t).getRootNode(e);
  }),
    (Pt.prototype.compareDocumentPosition = function (e) {
      var t = T(this._fragmentFiber);
      if (t === null) return Node.DOCUMENT_POSITION_DISCONNECTED;
      var a = [];
      k(this._fragmentFiber.child, !1, Ro, a, void 0, void 0);
      var l = L(t);
      if (a.length === 0) {
        if (((a = l), C(this._fragmentFiber))) {
          e: {
            for (t = this._fragmentFiber.return; t !== null;) {
              if (t.tag === 4) {
                t = t.stateNode.containerInfo;
                break e;
              }
              if (t.tag === 3 || t.tag === 5 || t.tag === 27) break;
              t = t.return;
            }
            t = null;
          }
          t != null && (a = t);
        }
        t = this._fragmentFiber;
        var u = (l = a.compareDocumentPosition(e));
        return (
          a === e
            ? (u = Node.DOCUMENT_POSITION_CONTAINS)
            : l & Node.DOCUMENT_POSITION_CONTAINED_BY &&
              ((a = M(t)[1]),
              a === null
                ? (u = Node.DOCUMENT_POSITION_PRECEDING)
                : ((e = L(a).compareDocumentPosition(e)),
                  (u =
                    e === 0 || e & Node.DOCUMENT_POSITION_FOLLOWING
                      ? Node.DOCUMENT_POSITION_FOLLOWING
                      : Node.DOCUMENT_POSITION_PRECEDING))),
          (u |= Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC)
        );
      }
      ((t = L(a[0])), (u = L(a[a.length - 1])));
      var s = C(this._fragmentFiber) ? t.parentElement : l;
      if (s == null) return Node.DOCUMENT_POSITION_DISCONNECTED;
      ((l = s.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY),
        (s =
          s.compareDocumentPosition(u) & Node.DOCUMENT_POSITION_CONTAINED_BY));
      var d = t.compareDocumentPosition(e),
        p = u.compareDocumentPosition(e),
        j =
          d & Node.DOCUMENT_POSITION_CONTAINED_BY ||
          p & Node.DOCUMENT_POSITION_CONTAINED_BY;
      return (
        (p =
          l &&
          s &&
          d & Node.DOCUMENT_POSITION_FOLLOWING &&
          p & Node.DOCUMENT_POSITION_PRECEDING),
        (t =
          (l && t === e) || (s && u === e) || j || p
            ? Node.DOCUMENT_POSITION_CONTAINED_BY
            : (!l && t === e) || (!s && u === e)
              ? Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC
              : d),
        t & Node.DOCUMENT_POSITION_DISCONNECTED ||
        t & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC ||
        V0(t, this._fragmentFiber, a[0], a[a.length - 1], e)
          ? t
          : Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC
      );
    }));
  function V0(e, t, a, l, u) {
    var s = $n(u);
    if (e & Node.DOCUMENT_POSITION_CONTAINED_BY) {
      if ((a = !!s))
        e: {
          for (; s !== null;) {
            if (s.tag === 7 && (s === t || s.alternate === t)) {
              a = !0;
              break e;
            }
            s = s.return;
          }
          a = !1;
        }
      return a;
    }
    if (e & Node.DOCUMENT_POSITION_CONTAINS) {
      if (s === null)
        return (
          (s = u.ownerDocument),
          u === s || u === s.documentElement || u === s.body
        );
      e: {
        for (s = t, t = T(t); s !== null;) {
          if (!(
            (s.tag !== 5 && s.tag !== 3 && s.tag !== 27) ||
            (s !== t && s.alternate !== t)
          )) {
            s = !0;
            break e;
          }
          s = s.return;
        }
        s = !1;
      }
      return s;
    }
    return e & Node.DOCUMENT_POSITION_PRECEDING
      ? ((t = !!s) &&
          !(t = s === a) &&
          ((t = ce(a, s, de)),
          t === null
            ? (t = !1)
            : (k(t, !0, ye, s, a), (s = D), (D = null), (t = s !== null))),
        t)
      : e & Node.DOCUMENT_POSITION_FOLLOWING
        ? ((t = !!s) &&
            !(t = s === l) &&
            ((t = ce(l, s, de)),
            t === null
              ? (t = !1)
              : (k(t, !0, Ae, s, l),
                (s = D),
                (X = D = null),
                (t = s !== null))),
          t)
        : !1;
  }
  function Bp(e, t) {
    var a = e.ownerDocument.createRange();
    (a.selectNodeContents(e),
      (e = a.getBoundingClientRect()),
      window.scrollTo(
        window.scrollX + e.left,
        t
          ? window.scrollY + e.top
          : window.scrollY + e.bottom - window.innerHeight,
      ));
  }
  Pt.prototype.scrollIntoView = function (e) {
    if (typeof e == "object") throw Error(c(566));
    var t = [];
    k(this._fragmentFiber.child, !1, Ro, t, void 0, void 0);
    var a = e !== !1;
    if (t.length === 0) {
      var l = M(this._fragmentFiber);
      if (
        ((l = a ? l[1] || l[0] || T(this._fragmentFiber) : l[0] || l[1]),
        l === null)
      )
        return;
      if (l.tag === 6) {
        ((e = L(l)), Bp(e, a));
        return;
      }
      if (((l = L(l)), l.nodeType !== 9)) {
        if (l.nodeType === 11) {
          ((a = "host" in l ? l.host : null),
            a !== null && a.scrollIntoView(e));
          return;
        }
        l.scrollIntoView(e);
      }
    }
    for (l = a ? t.length - 1 : 0; l !== (a ? -1 : t.length);) {
      var u = t[l];
      (u.tag === 6 ? ((u = L(u)), Bp(u, a)) : L(u).scrollIntoView(e),
        (l += a ? -1 : 1));
    }
  };
  function G0(e, t) {
    return ((e = L(e)), Zp(e, t), !1);
  }
  function Zp(e, t) {
    (e.reactFragments == null && (e.reactFragments = new Set()),
      e.reactFragments.add(t));
  }
  function Hp(e, t) {
    var a = t._eventListeners;
    if (a !== null)
      for (var l = 0; l < a.length; l++) {
        var u = a[l];
        e.addEventListener(
          u.type,
          u.attachedListener,
          ti(u.optionsOrUseCapture),
        );
      }
    e.nodeType !== 3 &&
      ((a = t._observers),
      a !== null &&
        a.forEach(function (s) {
          for (var d = 0, p = 0; p < ya.length; p++) {
            var j = ya[p];
            (j.fragmentInstance !== t ||
              j.observer !== s ||
              j.instance !== e) &&
              (ya[d++] = j);
          }
          ((ya.length = d), s.observe(e));
        }),
      Zp(e, t));
  }
  function K0(e, t) {
    var a = t._eventListeners;
    if (a !== null)
      for (var l = 0; l < a.length; l++) {
        var u = a[l];
        e.removeEventListener(
          u.type,
          u.attachedListener,
          ti(u.optionsOrUseCapture),
        );
      }
    e.nodeType !== 3 &&
      ((a = t._observers),
      a !== null &&
        a.forEach(function (s) {
          typeof s.rootMargin == "string" ? Y0(t, s, e) : s.unobserve(e);
        }),
      e.reactFragments != null && e.reactFragments.delete(t));
  }
  function Bo(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t;) {
      var a = t;
      switch (((t = t.nextSibling), a.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          (Bo(a), wu(a));
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (a.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(a);
    }
  }
  function X0(e, t, a, l) {
    for (; e.nodeType === 1;) {
      var u = a;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!l && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
      } else if (l) {
        if (!e[bi])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (
                ((s = e.getAttribute("rel")),
                s === "stylesheet" && e.hasAttribute("data-precedence"))
              )
                break;
              if (
                s !== u.rel ||
                e.getAttribute("href") !==
                  (u.href == null || u.href === "" ? null : u.href) ||
                e.getAttribute("crossorigin") !==
                  (u.crossOrigin == null ? null : u.crossOrigin) ||
                e.getAttribute("title") !== (u.title == null ? null : u.title)
              )
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (
                ((s = e.getAttribute("src")),
                (s !== (u.src == null ? null : u.src) ||
                  e.getAttribute("type") !== (u.type == null ? null : u.type) ||
                  e.getAttribute("crossorigin") !==
                    (u.crossOrigin == null ? null : u.crossOrigin)) &&
                  s &&
                  e.hasAttribute("async") &&
                  !e.hasAttribute("itemprop"))
              )
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var s = u.name == null ? null : "" + u.name;
        if (u.type === "hidden" && e.getAttribute("name") === s) return e;
      } else return e;
      if (((e = ra(e.nextSibling)), e === null)) break;
    }
    return null;
  }
  function Q0(e, t, a) {
    if (t === "") return null;
    for (; e.nodeType !== 3;)
      if (
        ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") &&
          !a) ||
        ((e = ra(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function Lp(e, t) {
    for (; e.nodeType !== 8;)
      if (
        ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") &&
          !t) ||
        ((e = ra(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function Zo(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function Ho(e) {
    return (
      e.data === "$!" ||
      (e.data === "$?" && e.ownerDocument.readyState !== "loading")
    );
  }
  function J0(e, t) {
    var a = e.ownerDocument;
    if (e.data === "$~") e._reactRetry = t;
    else if (e.data !== "$?" || a.readyState !== "loading") t();
    else {
      var l = function () {
        (t(), a.removeEventListener("DOMContentLoaded", l));
      };
      (a.addEventListener("DOMContentLoaded", l), (e._reactRetry = l));
    }
  }
  function ra(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (
          ((t = e.data),
          t === "$" ||
            t === "$!" ||
            t === "$?" ||
            t === "$~" ||
            t === "&" ||
            t === "F!" ||
            t === "F")
        )
          break;
        if (t === "/$" || t === "/&") return null;
      }
    }
    return e;
  }
  var Lo = null;
  function qp(e) {
    e = e.nextSibling;
    for (var t = 0; e;) {
      if (e.nodeType === 8) {
        var a = e.data;
        if (a === "/$" || a === "/&") {
          if (t === 0) return ra(e.nextSibling);
          t--;
        } else
          (a !== "$" && a !== "$!" && a !== "$?" && a !== "$~" && a !== "&") ||
            t++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function Yp(e) {
    e = e.previousSibling;
    for (var t = 0; e;) {
      if (e.nodeType === 8) {
        var a = e.data;
        if (a === "$" || a === "$!" || a === "$?" || a === "$~" || a === "&") {
          if (t === 0) return e;
          t--;
        } else (a !== "/$" && a !== "/&") || t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function I0(e, t) {
    function a() {
      l = !0;
    }
    if (e.ownerDocument.activeElement === e) return !0;
    var l = !1;
    try {
      (e.ownerDocument.addEventListener("focus", a, !0),
        (e.focus || HTMLElement.prototype.focus).call(e, t));
    } finally {
      e.ownerDocument.removeEventListener("focus", a, !0);
    }
    return l;
  }
  function P0(e) {
    Ep(function () {
      Ep(function (t) {
        return e(t);
      });
    });
  }
  function $p(e, t, a) {
    switch (((t = tu(a)), e)) {
      case "html":
        if (((e = t.documentElement), !e)) throw Error(c(452));
        return e;
      case "head":
        if (((e = t.head), !e)) throw Error(c(453));
        return e;
      case "body":
        if (((e = t.body), !e)) throw Error(c(454));
        return e;
      default:
        throw Error(c(451));
    }
  }
  function Vp(e, t, a) {
    for (var l in a) {
      var u = a[l];
      a.hasOwnProperty(l) && u != null && Ue(e, t, l, null, N0, u);
    }
    (a.dangerouslySetInnerHTML != null && (e.textContent = ""),
      e.onclick === _a && (e.onclick = null),
      wu(e));
  }
  function qo(e) {
    for (var t = e.attributes; t.length;) e.removeAttributeNode(t[0]);
    wu(e);
  }
  var ca = new Map(),
    Gp = new Set();
  function au(e) {
    if (typeof e.getRootNode == "function") {
      var t = e.getRootNode();
      if (t.nodeType === 9 || t.nodeType === 11) return t;
    }
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  var Wa = ue.d;
  ue.d = { f: F0, r: W0, D: e1, C: t1, L: a1, m: n1, X: i1, S: l1, M: u1 };
  function F0() {
    var e = Wa.f(),
      t = Ms();
    return e || t;
  }
  function W0(e) {
    var t = kl(e);
    t !== null && t.tag === 5 && t.type === "form" ? Xm(t) : Wa.r(e);
  }
  var ai = typeof document > "u" ? null : document;
  function Kp(e, t, a) {
    var l = ai;
    if (l && typeof t == "string" && t) {
      var u = ta(t);
      ((u = 'link[rel="' + e + '"][href="' + u + '"]'),
        typeof a == "string" && (u += '[crossorigin="' + a + '"]'),
        Gp.has(u) ||
          (Gp.add(u),
          (e = { rel: e, crossOrigin: a, href: t }),
          l.querySelector(u) === null &&
            ((t = l.createElement("link")),
            kt(t, "link", e),
            ft(t),
            l.head.appendChild(t))));
    }
  }
  function e1(e) {
    (Wa.D(e), Kp("dns-prefetch", e, null));
  }
  function t1(e, t) {
    (Wa.C(e, t), Kp("preconnect", e, t));
  }
  function a1(e, t, a) {
    Wa.L(e, t, a);
    var l = ai;
    if (l && e && t) {
      var u = 'link[rel="preload"][as="' + ta(t) + '"]';
      t === "image" && a && a.imageSrcSet
        ? ((u += '[imagesrcset="' + ta(a.imageSrcSet) + '"]'),
          typeof a.imageSizes == "string" &&
            (u += '[imagesizes="' + ta(a.imageSizes) + '"]'))
        : (u += '[href="' + ta(e) + '"]');
      var s = u;
      switch (t) {
        case "style":
          s = ni(e);
          break;
        case "script":
          s = li(e);
      }
      if (!(
        ca.has(s) ||
        ((e = ae(
          {
            rel: "preload",
            href: t === "image" && a && a.imageSrcSet ? void 0 : e,
            as: t,
          },
          a,
        )),
        ca.set(s, e),
        l.querySelector(u) !== null ||
          (t === "style" && l.querySelector(nu(s))) ||
          (t === "script" && l.querySelector(lu(s))))
      )) {
        var d = l.createElement("link");
        (kt(d, "link", e),
          t === "style" &&
            ((d[Au] = !0),
            (d.onload = d.onerror =
              function () {
                id(d);
              })),
          ft(d),
          l.head.appendChild(d));
      }
    }
  }
  function n1(e, t) {
    Wa.m(e, t);
    var a = ai;
    if (a && e) {
      var l = t && typeof t.as == "string" ? t.as : "script",
        u =
          'link[rel="modulepreload"][as="' + ta(l) + '"][href="' + ta(e) + '"]',
        s = u;
      switch (l) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          s = li(e);
      }
      if (
        !ca.has(s) &&
        ((e = ae({ rel: "modulepreload", href: e }, t)),
        ca.set(s, e),
        a.querySelector(u) === null)
      ) {
        switch (l) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(lu(s))) return;
        }
        ((l = a.createElement("link")),
          kt(l, "link", e),
          ft(l),
          a.head.appendChild(l));
      }
    }
  }
  function l1(e, t, a) {
    Wa.S(e, t, a);
    var l = ai;
    if (l && e) {
      var u = jl(l).hoistableStyles,
        s = ni(e);
      t = t || "default";
      var d = u.get(s);
      if (!d) {
        var p = { loading: 0, preload: null };
        if ((d = l.querySelector(nu(s)))) p.loading = 5;
        else {
          ((e = ae({ rel: "stylesheet", href: e, "data-precedence": t }, a)),
            (a = ca.get(s)) && Yo(e, a));
          var j = (d = l.createElement("link"));
          (ft(j),
            kt(j, "link", e),
            (j._p = new Promise(function (E, w) {
              ((j.onload = E), (j.onerror = w));
            })),
            j.addEventListener("load", function () {
              p.loading |= 1;
            }),
            j.addEventListener("error", function () {
              p.loading |= 2;
            }),
            (p.loading |= 4),
            qs(d, t, l));
        }
        ((d = { type: "stylesheet", instance: d, count: 1, state: p }),
          u.set(s, d));
      }
    }
  }
  function i1(e, t) {
    Wa.X(e, t);
    var a = ai;
    if (a && e) {
      var l = jl(a).hoistableScripts,
        u = li(e),
        s = l.get(u);
      s ||
        ((s = a.querySelector(lu(u))),
        s ||
          ((e = ae({ src: e, async: !0 }, t)),
          (t = ca.get(u)) && $o(e, t),
          (s = a.createElement("script")),
          ft(s),
          kt(s, "link", e),
          a.head.appendChild(s)),
        (s = { type: "script", instance: s, count: 1, state: null }),
        l.set(u, s));
    }
  }
  function u1(e, t) {
    Wa.M(e, t);
    var a = ai;
    if (a && e) {
      var l = jl(a).hoistableScripts,
        u = li(e),
        s = l.get(u);
      s ||
        ((s = a.querySelector(lu(u))),
        s ||
          ((e = ae({ src: e, async: !0, type: "module" }, t)),
          (t = ca.get(u)) && $o(e, t),
          (s = a.createElement("script")),
          ft(s),
          kt(s, "link", e),
          a.head.appendChild(s)),
        (s = { type: "script", instance: s, count: 1, state: null }),
        l.set(u, s));
    }
  }
  function Xp(e, t, a, l) {
    var u = (u = ea.current) ? au(u) : null;
    if (!u) throw Error(c(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string"
          ? ((a = ni(a.href)),
            (t = jl(u).hoistableStyles),
            (l = t.get(a)),
            l ||
              ((l = { type: "style", instance: null, count: 0, state: null }),
              t.set(a, l)),
            l)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          a.rel === "stylesheet" &&
          typeof a.href == "string" &&
          typeof a.precedence == "string"
        ) {
          e = ni(a.href);
          var s = jl(u).hoistableStyles,
            d = s.get(e);
          if (
            (d ||
              ((u = u.ownerDocument || u),
              (d = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              s.set(e, d),
              (s = u.querySelector(nu(e)))
                ? s._p || ((d.instance = s), (d.state.loading = 5))
                : ((s = ca.get(e)),
                  s ||
                    ((s = {
                      rel: "preload",
                      as: "style",
                      href: a.href,
                      crossOrigin: a.crossOrigin,
                      integrity: a.integrity,
                      media: a.media,
                      hrefLang: a.hrefLang,
                      referrerPolicy: a.referrerPolicy,
                    }),
                    ca.set(e, s)),
                  s1(u, e, s, d.state))),
            t && l === null)
          )
            throw Error(c(528, ""));
          return d;
        }
        if (t && l !== null) throw Error(c(529, ""));
        return null;
      case "script":
        return (
          (t = a.async),
          (a = a.src),
          typeof a == "string" &&
          t &&
          typeof t != "function" &&
          typeof t != "symbol"
            ? ((a = li(a)),
              (t = jl(u).hoistableScripts),
              (l = t.get(a)),
              l ||
                ((l = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                t.set(a, l)),
              l)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(c(444, e));
    }
  }
  function ni(e) {
    return 'href="' + ta(e) + '"';
  }
  function nu(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Qp(e) {
    return ae({}, e, { "data-precedence": e.precedence, precedence: null });
  }
  function s1(e, t, a, l) {
    if ((t = e.querySelector('link[rel="preload"][as="style"][' + t + "]"))) {
      if (t[Au] !== !0) {
        l.loading = 1;
        return;
      }
    } else
      ((t = e.createElement("link")),
        (t[Au] = !0),
        (t.onload = t.onerror = id.bind(null, t)),
        kt(t, "link", a),
        ft(t),
        e.head.appendChild(t));
    ((l.preload = t),
      t.addEventListener("load", function () {
        return (l.loading |= 1);
      }),
      t.addEventListener("error", function () {
        return (l.loading |= 2);
      }));
  }
  function li(e) {
    return '[src="' + ta(e) + '"]';
  }
  function lu(e) {
    return "script[async]" + e;
  }
  function Jp(e, t, a) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case "style":
          var l = e.querySelector('style[data-href~="' + ta(a.href) + '"]');
          if (l) return ((t.instance = l), ft(l), l);
          var u = ae({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null,
          });
          return (
            (l = (e.ownerDocument || e).createElement("style")),
            ft(l),
            kt(l, "style", u),
            qs(l, a.precedence, e),
            (t.instance = l)
          );
        case "stylesheet":
          u = ni(a.href);
          var s = e.querySelector(nu(u));
          if (s) return ((t.state.loading |= 4), (t.instance = s), ft(s), s);
          ((l = Qp(a)),
            (u = ca.get(u)) && Yo(l, u),
            (s = (e.ownerDocument || e).createElement("link")),
            ft(s));
          var d = s;
          return (
            (d._p = new Promise(function (p, j) {
              ((d.onload = p), (d.onerror = j));
            })),
            kt(s, "link", l),
            (t.state.loading |= 4),
            qs(s, a.precedence, e),
            (t.instance = s)
          );
        case "script":
          return (
            (s = li(a.src)),
            (u = e.querySelector(lu(s)))
              ? ((t.instance = u), ft(u), u)
              : ((l = a),
                (u = ca.get(s)) && ((l = ae({}, a)), $o(l, u)),
                (e = e.ownerDocument || e),
                (u = e.createElement("script")),
                ft(u),
                kt(u, "link", l),
                e.head.appendChild(u),
                (t.instance = u))
          );
        case "void":
          return null;
        default:
          throw Error(c(443, t.type));
      }
    else
      t.type === "stylesheet" &&
        (t.state.loading & 4) === 0 &&
        ((l = t.instance), (t.state.loading |= 4), qs(l, a.precedence, e));
    return t.instance;
  }
  function qs(e, t, a) {
    for (
      var l = a.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]',
        ),
        u = l.length ? l[l.length - 1] : null,
        s = u,
        d = 0;
      d < l.length;
      d++
    ) {
      var p = l[d];
      if (p.dataset.precedence === t) s = p;
      else if (s !== u) break;
    }
    s
      ? s.parentNode.insertBefore(e, s.nextSibling)
      : ((t = a.nodeType === 9 ? a.head : a), t.insertBefore(e, t.firstChild));
  }
  function Yo(e, t) {
    (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.title == null && (e.title = t.title));
  }
  function $o(e, t) {
    (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.integrity == null && (e.integrity = t.integrity));
  }
  var Ys = null;
  function Ip(e, t, a) {
    if (Ys === null) {
      var l = new Map(),
        u = (Ys = new Map());
      u.set(a, l);
    } else ((u = Ys), (l = u.get(a)), l || ((l = new Map()), u.set(a, l)));
    if (l.has(e)) return l;
    for (
      l.set(e, null), a = a.getElementsByTagName(e), u = 0;
      u < a.length;
      u++
    ) {
      var s = a[u];
      if (
        !(
          s[bi] ||
          s[pt] ||
          (e === "link" && s.getAttribute("rel") === "stylesheet")
        ) &&
        s.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var d = s.getAttribute(t) || "";
        d = e + d;
        var p = l.get(d);
        p ? p.push(s) : l.set(d, [s]);
      }
    }
    return l;
  }
  function Vo(e, t, a) {
    ((e = e.ownerDocument || e),
      e.head.insertBefore(
        a,
        t === "title" ? e.querySelector("head > title") : null,
      ));
  }
  function r1(e, t, a) {
    if (a === 1 || t.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof t.precedence != "string" ||
          typeof t.href != "string" ||
          t.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof t.rel != "string" ||
          typeof t.href != "string" ||
          t.href === "" ||
          t.onLoad ||
          t.onError
        )
          break;
        return t.rel === "stylesheet"
          ? ((e = t.disabled), typeof t.precedence == "string" && e == null)
          : !0;
      case "script":
        if (
          t.async &&
          typeof t.async != "function" &&
          typeof t.async != "symbol" &&
          !t.onLoad &&
          !t.onError &&
          t.src &&
          typeof t.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function Pp(e, t) {
    return (
      e === "img" &&
      t.src != null &&
      t.src !== "" &&
      t.onLoad == null &&
      t.loading !== "lazy"
    );
  }
  function Fp(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function Wp(e) {
    return (
      (e.width || 100) *
      (e.height || 100) *
      (typeof devicePixelRatio == "number" ? devicePixelRatio : 1) *
      0.25
    );
  }
  function eg(e, t) {
    typeof t.decode == "function" &&
      (e.imgCount++,
      t.complete || ((e.imgBytes += Wp(t)), e.suspenseyImages.push(t)),
      (e = f1.bind(e)),
      t.decode().then(e, e));
  }
  function c1(e, t, a, l) {
    if (
      a.type === "stylesheet" &&
      (typeof l.media != "string" || matchMedia(l.media).matches !== !1) &&
      (a.state.loading & 4) === 0
    ) {
      if (a.instance === null) {
        var u = ni(l.href),
          s = t.querySelector(nu(u));
        if (s) {
          ((t = s._p),
            t !== null &&
              typeof t == "object" &&
              typeof t.then == "function" &&
              (e.count++, (e = iu.bind(e)), t.then(e, e)),
            (a.state.loading |= 4),
            (a.instance = s),
            ft(s));
          return;
        }
        ((s = t.ownerDocument || t),
          (l = Qp(l)),
          (u = ca.get(u)) && Yo(l, u),
          (s = s.createElement("link")),
          ft(s));
        var d = s;
        ((d._p = new Promise(function (p, j) {
          ((d.onload = p), (d.onerror = j));
        })),
          kt(s, "link", l),
          (a.instance = s));
      }
      (e.stylesheets === null && (e.stylesheets = new Map()),
        e.stylesheets.set(a, t),
        (t = a.state.preload) &&
          (a.state.loading & 3) === 0 &&
          (e.count++,
          (a = iu.bind(e)),
          t.addEventListener("load", a),
          t.addEventListener("error", a)));
    }
  }
  var $s = 0;
  function o1(e, t) {
    return (
      e.stylesheets && e.count === 0 && Gs(e, e.stylesheets),
      0 < e.count || 0 < e.imgCount
        ? function (a) {
            var l = setTimeout(function () {
              if ((e.stylesheets && Gs(e, e.stylesheets), e.unsuspend)) {
                var s = e.unsuspend;
                ((e.unsuspend = null), s());
              }
            }, 6e4 + t);
            0 < e.imgBytes && $s === 0 && ($s = 62500 * E0());
            var u = setTimeout(
              function () {
                if (
                  ((e.waitingForImages = !1),
                  e.count === 0 &&
                    (e.stylesheets && Gs(e, e.stylesheets), e.unsuspend))
                ) {
                  var s = e.unsuspend;
                  ((e.unsuspend = null), s());
                }
              },
              (e.imgBytes > $s ? 50 : 800) + t,
            );
            return (
              (e.unsuspend = a),
              function () {
                ((e.unsuspend = null), clearTimeout(l), clearTimeout(u));
              }
            );
          }
        : null
    );
  }
  function tg(e) {
    if (e.count === 0 && (e.imgCount === 0 || !e.waitingForImages)) {
      if (e.stylesheets) Gs(e, e.stylesheets);
      else if (e.unsuspend) {
        var t = e.unsuspend;
        ((e.unsuspend = null), t());
      }
    }
  }
  function iu() {
    (this.count--, tg(this));
  }
  function f1() {
    (this.imgCount--, tg(this));
  }
  var Vs = null;
  function Gs(e, t) {
    ((e.stylesheets = null),
      e.unsuspend !== null &&
        (e.count++,
        (Vs = new Map()),
        t.forEach(d1, e),
        (Vs = null),
        iu.call(e)));
  }
  function d1(e, t) {
    if (!(t.state.loading & 4)) {
      var a = Vs.get(e);
      if (a) var l = a.get(null);
      else {
        ((a = new Map()), Vs.set(e, a));
        for (
          var u = e.querySelectorAll(
              "link[data-precedence],style[data-precedence]",
            ),
            s = 0;
          s < u.length;
          s++
        ) {
          var d = u[s];
          (d.nodeName === "LINK" || d.getAttribute("media") !== "not all") &&
            (a.set(d.dataset.precedence, d), (l = d));
        }
        l && a.set(null, l);
      }
      ((u = t.instance),
        (d = u.getAttribute("data-precedence")),
        (s = a.get(d) || l),
        s === l && a.set(null, u),
        a.set(d, u),
        this.count++,
        (l = iu.bind(this)),
        u.addEventListener("load", l),
        u.addEventListener("error", l),
        s
          ? s.parentNode.insertBefore(u, s.nextSibling)
          : ((e = e.nodeType === 9 ? e.head : e),
            e.insertBefore(u, e.firstChild)),
        (t.state.loading |= 4));
    }
  }
  var ii = {
    $$typeof: We,
    Provider: null,
    Consumer: null,
    _currentValue: zt,
    _currentValue2: zt,
    _threadCount: 0,
  };
  function m1(e, t, a, l, u, s, d, p, j) {
    ((this.tag = 1),
      (this.containerInfo = e),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = Sr(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Sr(0)),
      (this.hiddenUpdates = Sr(null)),
      (this.identifierPrefix = l),
      (this.onUncaughtError = u),
      (this.onCaughtError = s),
      (this.onRecoverableError = d),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = j),
      (this.transitionTypes = null),
      (this.incompleteTransitions = new Map()));
  }
  function ag(e, t, a, l, u, s, d, p, j, E, w, U) {
    return (
      (e = new m1(e, t, a, d, j, E, w, U, p)),
      (t = 1),
      s === !0 && (t |= 24),
      (s = Rt(3, null, null, t)),
      (e.current = s),
      (s.stateNode = e),
      (t = lc()),
      t.refCount++,
      (e.pooledCache = t),
      t.refCount++,
      (s.memoizedState = { element: l, isDehydrated: a, cache: t }),
      rc(s),
      e
    );
  }
  function ng(e) {
    return e ? ((e = wl), e) : wl;
  }
  function lg(e, t, a, l, u, s) {
    ((u = ng(u)),
      l.context === null ? (l.context = u) : (l.pendingContext = u),
      (l = gn(t)),
      (l.payload = { element: a }),
      (s = s === void 0 ? null : s),
      s !== null && (l.callback = s),
      (a = vn(e, l, t)),
      a !== null && (Ht(a, e, t), Ui(a, e, t)));
  }
  function ig(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var a = e.retryLane;
      e.retryLane = a !== 0 && a < t ? a : t;
    }
  }
  function Go(e, t) {
    (ig(e, t), (e = e.alternate) && ig(e, t));
  }
  function ug(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Xn(e, 67108864);
      (t !== null && Ht(t, e, 67108864), Go(e, 67108864));
    }
  }
  function sg(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = It();
      t = xr(t);
      var a = Xn(e, t);
      (a !== null && Ht(a, e, t), Go(e, t));
    }
  }
  var ui = !0;
  function h1(e, t, a, l) {
    var u = J.T;
    J.T = null;
    var s = ue.p;
    try {
      ((ue.p = 2), Ko(e, t, a, l));
    } finally {
      ((ue.p = s), (J.T = u));
    }
  }
  function p1(e, t, a, l) {
    var u = J.T;
    J.T = null;
    var s = ue.p;
    try {
      ((ue.p = 8), Ko(e, t, a, l));
    } finally {
      ((ue.p = s), (J.T = u));
    }
  }
  function Ko(e, t, a, l) {
    if (ui) {
      var u = Xo(l);
      if (u === null) (To(e, t, l, Ks, a), cg(e, l));
      else if (v1(u, e, t, a, l)) l.stopPropagation();
      else if ((cg(e, l), t & 4 && -1 < g1.indexOf(e))) {
        for (; u !== null;) {
          var s = kl(u);
          if (s !== null)
            switch (s.tag) {
              case 3:
                if (((s = s.stateNode), s.current.memoizedState.isDehydrated)) {
                  var d = Yn(s.pendingLanes);
                  if (d !== 0) {
                    var p = s;
                    for (p.pendingLanes |= 2, p.entangledLanes |= 2; d;) {
                      var j = 1 << (31 - $t(d));
                      ((p.entanglements[1] |= j), (d &= ~j));
                    }
                    (Ca(s), (Oe & 6) === 0 && ((ws = qt() + 500), Fi(0)));
                  }
                }
                break;
              case 31:
              case 13:
                ((p = Xn(s, 2)), p !== null && Ht(p, s, 2), Ms(), Go(s, 2));
            }
          if (((s = Xo(l)), s === null && To(e, t, l, Ks, a), s === u)) break;
          u = s;
        }
        u !== null && l.stopPropagation();
      } else To(e, t, l, null, a);
    }
  }
  function Xo(e) {
    return ((e = wr(e)), Qo(e));
  }
  var Ks = null;
  function Qo(e) {
    if (((Ks = null), (e = $n(e)), e !== null)) {
      var t = m(e);
      if (t === null) e = null;
      else {
        var a = t.tag;
        if (a === 13) {
          if (((e = h(t)), e !== null)) return e;
          e = null;
        } else if (a === 31) {
          if (((e = g(t)), e !== null)) return e;
          e = null;
        } else if (a === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return ((Ks = e), null);
  }
  function rg(e) {
    switch (e) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "fullscreenerror":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "resize":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Ey()) {
          case Xf:
            return 2;
          case Qf:
            return 8;
          case zu:
          case Oy:
            return 32;
          case Jf:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Jo = !1,
    On = null,
    An = null,
    wn = null,
    uu = new Map(),
    su = new Map(),
    Cn = [],
    g1 =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " ",
      );
  function cg(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        On = null;
        break;
      case "dragenter":
      case "dragleave":
        An = null;
        break;
      case "mouseover":
      case "mouseout":
        wn = null;
        break;
      case "pointerover":
      case "pointerout":
        uu.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        su.delete(t.pointerId);
    }
  }
  function ru(e, t, a, l, u, s) {
    return e === null || e.nativeEvent !== s
      ? ((e = {
          blockedOn: t,
          domEventName: a,
          eventSystemFlags: l,
          nativeEvent: s,
          targetContainers: [u],
        }),
        t !== null && ((t = kl(t)), t !== null && ug(t)),
        e)
      : ((e.eventSystemFlags |= l),
        (t = e.targetContainers),
        u !== null && t.indexOf(u) === -1 && t.push(u),
        e);
  }
  function v1(e, t, a, l, u) {
    switch (t) {
      case "focusin":
        return ((On = ru(On, e, t, a, l, u)), !0);
      case "dragenter":
        return ((An = ru(An, e, t, a, l, u)), !0);
      case "mouseover":
        return ((wn = ru(wn, e, t, a, l, u)), !0);
      case "pointerover":
        var s = u.pointerId;
        return (uu.set(s, ru(uu.get(s) || null, e, t, a, l, u)), !0);
      case "gotpointercapture":
        return (
          (s = u.pointerId),
          su.set(s, ru(su.get(s) || null, e, t, a, l, u)),
          !0
        );
    }
    return !1;
  }
  function og(e) {
    var t = $n(e.target);
    if (t !== null) {
      var a = m(t);
      if (a !== null) {
        if (((t = a.tag), t === 13)) {
          if (((t = h(a)), t !== null)) {
            ((e.blockedOn = t),
              ad(e.priority, function () {
                sg(a);
              }));
            return;
          }
        } else if (t === 31) {
          if (((t = g(a)), t !== null)) {
            ((e.blockedOn = t),
              ad(e.priority, function () {
                sg(a);
              }));
            return;
          }
        } else if (t === 3 && a.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Xs(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length;) {
      var a = Xo(e.nativeEvent);
      if (a === null) {
        a = e.nativeEvent;
        var l = new a.constructor(a.type, a);
        ((Ar = l), a.target.dispatchEvent(l), (Ar = null));
      } else return ((t = kl(a)), t !== null && ug(t), (e.blockedOn = a), !1);
      t.shift();
    }
    return !0;
  }
  function fg(e, t, a) {
    Xs(e) && a.delete(t);
  }
  function y1() {
    ((Jo = !1),
      On !== null && Xs(On) && (On = null),
      An !== null && Xs(An) && (An = null),
      wn !== null && Xs(wn) && (wn = null),
      uu.forEach(fg),
      su.forEach(fg));
  }
  function Qs(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Jo ||
        ((Jo = !0),
        n.unstable_scheduleCallback(n.unstable_NormalPriority, y1)));
  }
  var Js = null;
  function dg(e) {
    Js !== e &&
      ((Js = e),
      n.unstable_scheduleCallback(n.unstable_NormalPriority, function () {
        Js === e && (Js = null);
        for (var t = 0; t < e.length; t += 3) {
          var a = e[t],
            l = e[t + 1],
            u = e[t + 2];
          if (typeof l != "function") {
            if (Qo(l || a) === null) continue;
            break;
          }
          var s = kl(a);
          s !== null &&
            (e.splice(t, 3),
            (t -= 3),
            Oc(s, { pending: !0, data: u, method: a.method, action: l }, l, u));
        }
      }));
  }
  function si(e) {
    function t(j) {
      return Qs(j, e);
    }
    (On !== null && Qs(On, e),
      An !== null && Qs(An, e),
      wn !== null && Qs(wn, e),
      uu.forEach(t),
      su.forEach(t));
    for (var a = 0; a < Cn.length; a++) {
      var l = Cn[a];
      l.blockedOn === e && (l.blockedOn = null);
    }
    for (; 0 < Cn.length && ((a = Cn[0]), a.blockedOn === null);)
      (og(a), a.blockedOn === null && Cn.shift());
    if (((a = (e.ownerDocument || e).$$reactFormReplay), a != null))
      for (l = 0; l < a.length; l += 3) {
        var u = a[l],
          s = a[l + 1],
          d = u[Mt] || null;
        if (typeof s == "function") d || dg(a);
        else if (d) {
          var p = null;
          if (s && s.hasAttribute("formAction")) {
            if (((u = s), (d = s[Mt] || null))) p = d.formAction;
            else if (Qo(u) !== null) continue;
          } else p = d.action;
          (typeof p == "function" ? (a[l + 1] = p) : (a.splice(l, 3), (l -= 3)),
            dg(a));
        }
      }
  }
  function mg() {
    function e(s) {
      s.canIntercept &&
        s.info === "react-transition" &&
        s.intercept({
          handler: function () {
            return new Promise(function (d) {
              return (u = d);
            });
          },
          focusReset: "manual",
          scroll: "manual",
        });
    }
    function t() {
      (u !== null && (u(), (u = null)), l || setTimeout(a, 20));
    }
    function a() {
      if (!l && !navigation.transition) {
        var s = navigation.currentEntry;
        s &&
          s.url != null &&
          navigation.navigate(s.url, {
            state: s.getState(),
            info: "react-transition",
            history: "replace",
          });
      }
    }
    if (typeof navigation == "object") {
      var l = !1,
        u = null;
      return (
        navigation.addEventListener("navigate", e),
        navigation.addEventListener("navigatesuccess", t),
        navigation.addEventListener("navigateerror", t),
        setTimeout(a, 100),
        function () {
          ((l = !0),
            navigation.removeEventListener("navigate", e),
            navigation.removeEventListener("navigatesuccess", t),
            navigation.removeEventListener("navigateerror", t),
            u !== null && (u(), (u = null)));
        }
      );
    }
  }
  function Io(e) {
    this._internalRoot = e;
  }
  ((Is.prototype.render = Io.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(c(409));
      var a = t.current,
        l = It();
      lg(a, l, e, t, null, null);
    }),
    (Is.prototype.unmount = Io.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (lg(e.current, 2, null, e, null, null), Ms(), (t[bl] = null));
        }
      }));
  function Is(e) {
    this._internalRoot = e;
  }
  Is.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = td();
      e = { blockedOn: null, target: e, priority: t };
      for (var a = 0; a < Cn.length && t !== 0 && t < Cn[a].priority; a++);
      (Cn.splice(a, 0, e), a === 0 && og(e));
    }
  };
  var hg = i.version;
  if (hg !== "19.3.1") throw Error(c(527, hg, "19.3.1"));
  ue.findDOMNode = function (e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function"
        ? Error(c(188))
        : ((e = Object.keys(e).join(",")), Error(c(268, e)));
    return (
      (e = v(t)),
      (e = e !== null ? b(e) : null),
      (e = e === null ? null : e.stateNode),
      e
    );
  };
  var b1 = {
    bundleType: 0,
    version: "19.3.1",
    rendererPackageName: "react-dom",
    currentDispatcherRef: J,
    reconcilerVersion: "19.3.1",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ps = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ps.isDisabled && Ps.supportsFiber)
      try {
        ((gi = Ps.inject(b1)), (Yt = Ps));
      } catch {}
  }
  return (
    (ou.createRoot = function (e, t) {
      if (!f(e)) throw Error(c(299));
      var a = !1,
        l = "",
        u = nh,
        s = lh,
        d = ih;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (a = !0),
          t.identifierPrefix !== void 0 && (l = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (u = t.onUncaughtError),
          t.onCaughtError !== void 0 && (s = t.onCaughtError),
          t.onRecoverableError !== void 0 && (d = t.onRecoverableError)),
        (t = ag(e, 1, !1, null, null, a, l, null, u, s, d, mg)),
        (e[bl] = t.current),
        No(e),
        new Io(t)
      );
    }),
    (ou.hydrateRoot = function (e, t, a) {
      if (!f(e)) throw Error(c(299));
      var l = !1,
        u = "",
        s = nh,
        d = lh,
        p = ih,
        j = null;
      return (
        a != null &&
          (a.unstable_strictMode === !0 && (l = !0),
          a.identifierPrefix !== void 0 && (u = a.identifierPrefix),
          a.onUncaughtError !== void 0 && (s = a.onUncaughtError),
          a.onCaughtError !== void 0 && (d = a.onCaughtError),
          a.onRecoverableError !== void 0 && (p = a.onRecoverableError),
          a.formState !== void 0 && (j = a.formState)),
        (t = ag(e, 1, !0, t, a ?? null, l, u, j, s, d, p, mg)),
        (t.context = ng(null)),
        (a = t.current),
        (l = It()),
        (l = xr(l)),
        (u = gn(l)),
        (u.callback = null),
        vn(a, u, l),
        (a = l),
        (t.current.lanes = a),
        yi(t, a),
        Ca(t),
        (e[bl] = t.current),
        No(e),
        new Is(t)
      );
    }),
    (ou.version = "19.3.1"),
    ou
  );
}
var xg;
function w1() {
  if (xg) return Wo.exports;
  xg = 1;
  function n() {
    if (!(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    ))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (i) {
        console.error(i);
      }
  }
  return (n(), (Wo.exports = A1()), Wo.exports);
}
var C1 = w1();
const D1 = "modulepreload",
  M1 = function (n) {
    return "./" + n;
  },
  zg = {},
  wf = function (i, r, c) {
    let f = Promise.resolve();
    if (r && r.length > 0) {
      let y = function (v) {
        return Promise.all(
          v.map((b) =>
            Promise.resolve(b).then(
              (k) => ({ status: "fulfilled", value: k }),
              (k) => ({ status: "rejected", reason: k }),
            ),
          ),
        );
      };
      document.getElementsByTagName("link");
      const h = document.querySelector("meta[property=csp-nonce]"),
        g = h?.nonce || h?.getAttribute("nonce");
      f = y(
        r.map((v) => {
          if (((v = M1(v)), v in zg)) return;
          zg[v] = !0;
          const b = v.endsWith(".css"),
            k = b ? '[rel="stylesheet"]' : "";
          if (document.querySelector(`link[href="${v}"]${k}`)) return;
          const T = document.createElement("link");
          if (
            ((T.rel = b ? "stylesheet" : D1),
            b || (T.as = "script"),
            (T.crossOrigin = ""),
            (T.href = v),
            g && T.setAttribute("nonce", g),
            document.head.appendChild(T),
            b)
          )
            return new Promise((C, M) => {
              (T.addEventListener("load", C),
                T.addEventListener("error", () =>
                  M(new Error(`Unable to preload CSS for ${v}`)),
                ));
            });
        }),
      );
    }
    function m(h) {
      const g = new Event("vite:preloadError", { cancelable: !0 });
      if (((g.payload = h), window.dispatchEvent(g), !g.defaultPrevented))
        throw h;
    }
    return f.then((h) => {
      for (const g of h || []) g.status === "rejected" && m(g.reason);
      return i().catch(m);
    });
  },
  df = 2062,
  mf = 1240,
  xv = [
    { field: 7, title: "KEY PARTNERS", x: 82, y: 200, w: 457, h: 426 },
    {
      field: 3,
      title: "CUSTOMER RELATIONSHIPS",
      x: 82,
      y: 640,
      w: 457,
      h: 515,
    },
    { field: 6, title: "KEY ACTIVITIES", x: 553, y: 200, w: 456, h: 316 },
    { field: 5, title: "KEY RESOURCES", x: 1023, y: 200, w: 456, h: 316 },
    { field: 2, title: "CHANNELS", x: 553, y: 532, w: 456, h: 312 },
    { field: 0, title: "CUSTOMER SEGMENTS", x: 1023, y: 532, w: 456, h: 312 },
    { field: 4, title: "REVENUE STREAMS", x: 553, y: 860, w: 926, h: 295 },
    { field: 1, title: "VALUE PROPOSITION", x: 1493, y: 200, w: 457, h: 426 },
    { field: 8, title: "COST STRUCTURE", x: 1493, y: 640, w: 457, h: 515 },
  ],
  hf = {
    red: {
      label: "Merah",
      ink: "#b91c1c",
      body: "#7f1d1d",
      background: "#fee2e2",
      swatch: "#ef4444",
    },
    blue: {
      label: "Biru",
      ink: "#1d4ed8",
      body: "#1e3a8a",
      background: "#dbeafe",
      swatch: "#3b82f6",
    },
    yellow: {
      label: "Kuning",
      ink: "#854d0e",
      body: "#713f12",
      background: "#fef9c3",
      swatch: "#facc15",
    },
    green: {
      label: "Hijau",
      ink: "#287e75",
      body: "#234e45",
      background: "#dcfce7",
      swatch: "#22c55e",
    },
    purple: {
      label: "Ungu",
      ink: "#7e22ce",
      body: "#581c87",
      background: "#f3e8ff",
      swatch: "#a855f7",
    },
    pink: {
      label: "Pink",
      ink: "#be185d",
      body: "#831843",
      background: "#fce7f3",
      swatch: "#ec4899",
    },
  };
function Cf(n) {
  const i = (c, f, m, h) =>
      typeof c == "number" && Number.isFinite(c)
        ? Math.min(h, Math.max(m, c))
        : f,
    r = n?.color && Object.hasOwn(hf, n.color) ? n.color : "green";
  return {
    fontSize: i(n?.fontSize, 19, 12, 30),
    headingSize: i(n?.headingSize, 19, 12, 32),
    titleSize: i(n?.titleSize, 21, 14, 24),
    color: r,
    palette: hf[r],
  };
}
function R1(n) {
  const i = [],
    r = [];
  for (const c of n.split(/\r?\n/)) {
    const f = c.match(/^\s*##(?:[ \t]+(.*))?$/);
    f
      ? r.push({ title: f[1] || "", lines: [] })
      : r.length
        ? r[r.length - 1].lines.push(c)
        : i.push(c);
  }
  return {
    intro: i.join(`
`),
    sections: r.map((c) => ({
      title: c.title,
      body: c.lines.join(`
`),
    })),
  };
}
function fu(n) {
  return [
    n.intro,
    ...n.sections.map(
      (i) => `## ${i.title}
${i.body}`,
    ),
  ].filter((i, r) => r !== 0 || i !== "").join(`
`);
}
function U1(n, i) {
  const r = n.sections.map((m) => ({ ...m })),
    c = r.splice(i, 1)[0];
  if (!c) return n;
  const f = (m, h) =>
    [m, h].filter(Boolean).join(`
`);
  return (
    i > 0 && (r[i - 1].body = f(r[i - 1].body, c.body)),
    { intro: i === 0 ? f(n.intro, c.body) : n.intro, sections: r }
  );
}
function pf(n, i, r, c, f) {
  if (!n) return [""];
  const m = [];
  let h = "";
  for (const g of n.split(/\s+/))
    if (f(g, r, c) > i) {
      h && (m.push(h), (h = ""));
      let y = "";
      for (const v of Array.from(g))
        (y && f(y + v, r, c) > i && (m.push(y), (y = "")), (y += v));
      h = y;
    } else
      h && f(h + " " + g, r, c) > i
        ? (m.push(h), (h = g))
        : (h = h ? h + " " + g : g);
  return (h && m.push(h), m);
}
function zv(n, i) {
  const r = xv.map((f) => {
      const m = Cf(n.canvasStyles?.[f.field]),
        h = (n.sections.canvas.values[f.field] || "Belum diisi")
          .split(/\r?\n/)
          .flatMap((v) => {
            const b = v.match(/^\s*##(?:[ \t]+(.*))?$/),
              k = !!b,
              T = b ? b[1] || "" : v,
              C = k ? m.headingSize : m.fontSize;
            return pf(T, f.w - 32, C, k, i).map((M) => ({
              text: M,
              heading: k,
              size: C,
            }));
          }),
        g = [[]];
      let y = f.y + 66;
      for (const v of h) {
        const b = v.size * 1.4;
        (y + b > f.y + f.h - 12 &&
          g[g.length - 1].length &&
          (g.push([]), (y = f.y + 66)),
          g[g.length - 1].push({ ...v, y: y + v.size }),
          (y += b));
      }
      return { ...f, style: m, pages: g };
    }),
    c = Math.max(1, ...r.map((f) => f.pages.length));
  return {
    count: c,
    pages: Array.from({ length: c }, (f, m) =>
      r.map(({ pages: h, ...g }) => ({
        ...g,
        lines: h[m] || [],
        continued: m > 0 && !!h[m],
      })),
    ),
  };
}
const B1 = (n) =>
  n
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
function Nv() {
  const n = document.createElement("canvas").getContext("2d");
  if (!n) throw Error("Browser tidak mendukung pengukuran gambar.");
  return (i, r, c) => (
    (n.font = `${c ? "bold " : ""}${r}px Arial`),
    n.measureText(i).width
  );
}
function Tv(n, i, r, c) {
  const f = n.canvasIdentity,
    m = `TEAM NAME: ${f?.teamName?.trim() || "Belum diisi"} | ${f?.businessName?.trim() || n.name}${f?.tagline?.trim() ? " — " + f.tagline.trim() : ""}`;
  let h = 22,
    g = pf(m, 1870, h, !1, c);
  for (const v of [20, 18, 16, 14, 12]) {
    if (g.length <= 3) break;
    ((h = v), (g = pf(m, 1870, v, !1, c)));
  }
  const y = (v, b, k, T, C = "#364440", M = !1, q = "start") =>
    `<text x="${v}" y="${b}" font-family="Arial, sans-serif" font-size="${T}" fill="${C}"${M ? ' font-weight="bold"' : ""} text-anchor="${q}" xml:space="preserve">${B1(k)}</text>`;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${df}" height="${mf}" viewBox="0 0 ${df} ${mf}" role="img" aria-label="Business Model Canvas halaman ${r + 1}"><rect width="100%" height="100%" fill="white"/>${y(1031, 112, "BUSINESS MODEL CANVAS", 62, "#000", !0, "middle")}${g
    .slice(0, 3)
    .map((v, b) => y(1031, 142 + b * 22, v, h, "#273b37", !1, "middle"))
    .join(
      "",
    )}${i.pages[r].map((v) => `<rect x="${v.x}" y="${v.y}" width="${v.w}" height="42" fill="${v.style.palette.background}"/>${y(v.x + v.w / 2, v.y + 27, v.title, v.style.titleSize, v.style.palette.ink, !0, "middle")}<rect x="${v.x}" y="${v.y + 52}" width="${v.w}" height="${v.h - 52}" fill="none" stroke="${v.style.palette.ink}" stroke-width="1.4" stroke-dasharray="2 2"/>${v.lines.length ? v.lines.map((b) => y(v.x + 16, b.y, b.text, b.size, b.heading ? v.style.palette.ink : b.text === "Belum diisi" ? "#7b8799" : v.style.palette.body, b.heading)).join("") : y(v.x + 16, v.y + 81, "Tidak ada lanjutan.", v.style.fontSize, "#7b8799")}`).join("")}${y(82, 1190, `Draf dari input pengguna · ${n.sections.canvas.status}${n.sections.canvas.review ? " · Perlu ditinjau ulang" : ""}`, 16, "#596579")}${y(1950, 1190, `Halaman ${r + 1}/${i.count}${i.count > 1 ? " · Isi dilanjutkan, tidak dipotong" : ""}`, 16, "#596579", !1, "end")}</svg>`;
}
async function Z1(n, i) {
  const r = Nv(),
    c = zv(n, r);
  let f;
  if (i === "PDF") {
    const { jsPDF: m } = await wf(async () => {
      const { jsPDF: h } = await import("./jspdf.js").then((g) => g.j);
      return { jsPDF: h };
    }, []);
    f = new m({
      orientation: "landscape",
      unit: "mm",
      format: [420, 252.57],
      compress: !0,
    });
  }
  for (let m = 0; m < c.count; m++) {
    const h = Tv(n, c, m, r),
      g = URL.createObjectURL(
        new Blob([h], { type: "image/svg+xml;charset=utf-8" }),
      );
    try {
      const y = new Image();
      await new Promise((k, T) => {
        ((y.onload = () => k()),
          (y.onerror = () => T(Error("Gambar BMC gagal dirender."))),
          (y.src = g));
      });
      const v = document.createElement("canvas");
      ((v.width = df * 2), (v.height = mf * 2));
      const b = v.getContext("2d");
      if (!b) throw Error("Kanvas gambar tidak tersedia.");
      if ((b.drawImage(y, 0, 0, v.width, v.height), f))
        (m && f.addPage([420, 252.57], "landscape"),
          f.addImage(
            v.toDataURL("image/png"),
            "PNG",
            0,
            0,
            420,
            252.57,
            void 0,
            "FAST",
          ));
      else {
        const k = await new Promise((M, q) =>
            v.toBlob(
              (L) => (L ? M(L) : q(Error("PNG gagal dibuat."))),
              "image/png",
            ),
          ),
          T = URL.createObjectURL(k),
          C = document.createElement("a");
        ((C.href = T),
          (C.download = `BMC-${n.id.slice(0, 8)}-${m + 1}.png`),
          C.click(),
          setTimeout(() => URL.revokeObjectURL(T), 1500));
      }
      ((v.width = 1), (v.height = 1));
    } finally {
      URL.revokeObjectURL(g);
    }
  }
  f?.save(`BMC-${n.id.slice(0, 8)}.pdf`);
}
const wt = () => crypto.randomUUID(),
  Ev = "radar-peluang.v1",
  St = () => new Date().toISOString();
function Ov(n, i) {
  return {
    id: wt(),
    title: n,
    consumer: i,
    summary:
      "Belum ada ringkasan analisis. Tambahkan bukti untuk memulai penyelidikan.",
    trigger: "Belum diketahui",
    impact: "Belum diketahui",
    pattern: "Belum diketahui",
    root: "Belum divalidasi",
    unknown:
      "Frekuensi masalah, dampak, dan kesediaan membayar belum diketahui.",
    evidence: [],
    alternatives: [],
    ideas: [],
    validation: [],
    saved: !1,
  };
}
function gu(n) {
  return new Set(
    n.evidence.map(
      (i) =>
        i.url.trim().replace(/\/$/, "") + "|" + i.quote.trim().toLowerCase(),
    ),
  ).size;
}
function vu(n) {
  return new Set(
    n.evidence.map((i) => {
      try {
        return new URL(i.url).hostname.replace(/^www\./, "");
      } catch {
        return i.source.trim().toLowerCase();
      }
    }),
  ).size;
}
function du(n) {
  const i = gu(n),
    r = vu(n);
  return i >= 3 && r >= 2
    ? "Cukup untuk ditelaah"
    : i > 0
      ? "Terbatas"
      : "Belum ada bukti";
}
function Ng(n) {
  return n.validation.length &&
    n.validation.every((i) => i.status === "Selesai")
    ? "Sudah ditinjau"
    : n.validation.some((i) => i.status !== "Belum dimulai")
      ? "Dalam validasi"
      : "Belum divalidasi";
}
function H1() {
  const n = localStorage.getItem(Ev);
  if (!n) return [];
  const i = JSON.parse(n);
  if (
    !Array.isArray(i) ||
    !i.every(
      (r) =>
        r &&
        typeof r.id == "string" &&
        typeof r.name == "string" &&
        Array.isArray(r.problems),
    )
  )
    throw new Error("Format penyimpanan tidak dikenali.");
  return i;
}
function L1() {
  const n = [
    "Sulit menemukan katering sehat dengan harga terjangkau",
    "Informasi gizi menu belum cukup jelas",
    "Pilihan menu berulang dan cepat membosankan",
    "Jadwal pengantaran tidak sesuai jam istirahat",
    "Porsi makanan tidak sesuai kebutuhan",
  ];
  return {
    id: wt(),
    name: "Katering sehat untuk pekerja",
    topic: "Katering sehat",
    region: "Jakarta",
    consumer: "Pekerja kantoran",
    period: "90 hari terakhir",
    language: "Bahasa Indonesia",
    keywords: "makan siang, langganan",
    exclude: "",
    updated: St(),
    demo: !0,
    status: "Hasil parsial",
    problems: n.map((i, r) => ({
      ...Ov(i, "Pekerja kantoran"),
      summary: [
        "Pekerja ingin makan lebih sehat, tetapi biaya langganan dan ongkos antar terasa membatasi pilihan sehari-hari.",
        "Konsumen sulit membandingkan kandungan gizi sebelum memilih menu.",
        "Menu yang berulang mengurangi minat melanjutkan langganan.",
        "Keterlambatan makan siang mengganggu ritme kerja.",
        "Kebutuhan energi berbeda belum terakomodasi.",
      ][r],
      trigger: "Memilih makan siang saat hari kerja.",
      impact:
        "Waktu membandingkan pilihan bertambah; keputusan pembelian tertunda.",
      pattern: "Pola ini hanya ilustrasi, belum diteliti pada konsumen nyata.",
      root: "Dugaan: kebutuhan personal belum selaras dengan paket standar.",
      evidence: Array.from(
        { length: r === 0 ? 4 : r === 1 ? 3 : r === 2 ? 2 : 1 },
        (c, f) => ({
          id: wt(),
          quote: [
            "“Ingin langganan makanan sehat, tetapi total biaya bulanannya terasa mahal.”",
            "“Harga menunya masuk, ongkir setiap hari yang bikin berat.”",
            "“Saya perlu tahu komposisinya sebelum memilih paket.”",
            "“Kalau bisa coba beberapa hari dulu, saya lebih tertarik.”",
          ][f],
          context:
            "Kutipan sintetis untuk demonstrasi antarmuka. Bukan pernyataan konsumen nyata.",
          url: `https://example.com/demo-${(f % 2) + 1}`,
          source: `Sumber ilustrasi ${(f % 2) + 1}`,
          date: "2026-10-20",
          snippet: !1,
          kind: "Temuan Sumber",
        }),
      ),
      alternatives: [
        {
          name: "Paket katering berlangganan",
          type: "Informasi penyedia (ilustrasi)",
          description:
            "Menu terjadwal dengan pengiriman ke kantor. Harga dan layanan perlu diperiksa langsung.",
          price: "Belum diperiksa",
          checked: "",
        },
        {
          name: "Menyiapkan bekal sendiri",
          type: "Cara manual (ilustrasi)",
          description:
            "Kontrol bahan lebih tinggi, tetapi membutuhkan waktu persiapan.",
          price: "Bergantung bahan",
          checked: "",
        },
      ],
      ideas: [
        {
          name: "Paket coba makan siang bersama",
          buyer: "Tim kantor dengan kebutuhan makan siang rutin",
          model: "Perantara pemesanan kolektif dengan biaya layanan transparan",
          partners: "Katering lokal dan koordinator kantor",
          assumption:
            "Pemesanan bersama dapat menekan ongkir tanpa mengurangi kualitas.",
          risk: "Volume pesanan dan ketepatan pengantaran belum teruji.",
          reason:
            "Hipotesis ini menanggapi keluhan biaya dalam bukti ilustrasi; perlu bukti nyata.",
        },
      ],
      validation: [
        {
          id: wt(),
          action:
            "Wawancarai 5 pekerja tentang pembelian makan siang terakhir mereka.",
          status: "Belum dimulai",
          note: "",
        },
      ],
    })),
  };
}
function q1(n) {
  return n.length
    ? n.some((i) => i.evidence.length > 0)
      ? "Hasil parsial"
      : "Bukti tidak mencukupi"
    : "Belum dikonfigurasi";
}
function Tg(n) {
  return n.evidence
    .map((i) => (i.imported ? i.imported.publicationDate : i.date))
    .filter(Boolean)
    .sort()
    .at(-1);
}
const _u = [
    {
      id: "background",
      number: 2,
      name: "Background",
      fields: [
        "Fokus masalah dan pelanggan",
        "Kondisi dan situasi pemicu",
        "Bukti masalah dan keterbatasannya",
        "Dampak yang diketahui",
        "Cara mengatasi saat ini",
        "Kesenjangan kebutuhan",
        "Alasan pengembangan dan validasi berikutnya",
      ],
    },
    {
      id: "idea",
      number: 3,
      name: "Description of Business Idea",
      fields: [
        "Kebutuhan yang diselesaikan",
        "Produk atau jasa yang dibeli pelanggan",
        "Cara kerja penawaran",
        "Batas layanan dan wilayah",
        "Versi awal untuk diuji",
      ],
    },
    {
      id: "market",
      number: 4,
      name: "Target Market",
      fields: [
        "Segmen pelanggan awal dan alasan memilihnya",
        "Pengguna, pembeli, dan pengambil keputusan",
        "Daerah dan perilaku membeli",
        "Kemampuan dan kesediaan membayar beserta bukti",
        "TAM / SAM / SOM: sumber, satuan, rumus, dan asumsi",
      ],
    },
    {
      id: "value",
      number: 5,
      name: "Value Proposition Canvas",
      fields: [
        "Customer jobs: kebutuhan atau pekerjaan pelanggan",
        "Pains: kesulitan pelanggan dan bukti",
        "Gains: hasil yang diharapkan",
        "Products and services",
        "Pain relievers: hubungan penawaran dengan kesulitan",
        "Gain creators: manfaat dan asumsi yang perlu diuji",
      ],
    },
    {
      id: "benchmark",
      number: 6,
      name: "Benchmarking",
      fields: [
        "Pesaing langsung dan sumber",
        "Solusi pengganti, cara manual, atau menunda pembelian",
        "Harga resmi, satuan, URL, dan tanggal pemeriksaan",
        "Perbandingan fitur, akses, dan layanan",
        "Pengalaman pengguna: sumber terpisah dari klaim penyedia",
        "Celah dan pembeda yang masih perlu diuji",
      ],
    },
    {
      id: "model",
      number: 7,
      name: "Business Model",
      fields: [
        "Peran usaha dan model terpilih",
        "Pelanggan, pembayar, dan penyedia layanan",
        "Alur produk / jasa dan tanggung jawab penyerahan",
        "Satuan transaksi, pendapatan, dan waktu pembayaran",
        "Biaya utama, pengembalian, dan pembagian risiko",
        "Alternatif model serta alasan pemilihan",
      ],
    },
    {
      id: "canvas",
      number: 8,
      name: "Business Model Canvas",
      fields: [
        "Customer Segments",
        "Value Propositions",
        "Channels",
        "Customer Relationships",
        "Revenue Streams",
        "Key Resources",
        "Key Activities",
        "Key Partners",
        "Cost Structure",
      ],
    },
    {
      id: "legal",
      number: 9,
      name: "Legal Requirement",
      fields: [
        "Kegiatan usaha, wilayah, dan bentuk usaha",
        "KBLI: kode, sumber resmi, dan tanggal pemeriksaan",
        "Perizinan dan persyaratan sektoral",
        "Kontrak, pajak, konsumen, data, dan kekayaan intelektual",
        "Checklist: status, sumber, tindakan, penanggung jawab, dan biaya",
      ],
    },
    {
      id: "process",
      number: 10,
      name: "Business Process",
      fields: [
        "Perjalanan pelanggan dari pesanan sampai selesai",
        "Alur internal: masukan, kegiatan, dan keluaran",
        "Tim, tanggung jawab, alat, dan pemasok",
        "Kapasitas dan waktu pelaksanaan",
        "SOP dan standar kualitas",
        "Keluhan, pengembalian, dan kegagalan layanan",
      ],
    },
    {
      id: "marketing",
      number: 11,
      name: "Sales & Marketing Strategy",
      fields: [
        "Posisi merek dan pesan penawaran",
        "Saluran pemasaran dan alasan pemilihan",
        "Alur calon pelanggan sampai pembelian",
        "Program penjualan dan retensi",
        "Kalender kegiatan, biaya, dan penanggung jawab",
        "Target, indikator, cara ukur, dan hasil aktual yang terpisah",
      ],
    },
    {
      id: "development",
      number: 12,
      name: "Business Development Plan",
      fields: [
        "Posisi usaha dan asumsi prioritas",
        "Rencana 30 hari: tindakan, biaya, penanggung jawab",
        "Rencana 60 hari: tindakan, biaya, penanggung jawab",
        "Rencana 90 hari dan pengembangan lanjutan",
        "Ketergantungan, ukuran berhasil, dan keputusan lanjut / ubah / hentikan",
      ],
    },
    {
      id: "finance",
      number: 13,
      name: "Financial Projection",
      fields: [
        "Asal dan dasar seluruh asumsi angka",
        "Pendanaan, modal kerja, dan kebutuhan dana",
        "Interpretasi skenario dan titik impas",
        "Biaya atau komponen akuntansi yang belum tercakup",
      ],
    },
    {
      id: "prototype",
      number: 14,
      name: "Design / Prototype / Visualisasi (opsional)",
      fields: [
        "Bentuk prototipe: sketsa produk atau simulasi layanan",
        "Tautan visualisasi atau deskripsi alur penggunaan",
        "Tugas, peserta, dan ukuran pengujian",
        "Tanggapan pengguna dan perubahan berikutnya",
      ],
    },
    {
      id: "summary",
      number: 1,
      name: "Executive Summary — disusun terakhir",
      fields: ["Ringkasan eksekutif"],
    },
  ],
  Df = [
    ["price", "Pendapatan per unit / komisi per transaksi (Rp)"],
    ["variable", "Biaya variabel per unit (Rp)"],
    ["fixed", "Biaya tetap bulanan (Rp)"],
    ["units", "Volume bulan pertama (unit)"],
    ["capacity", "Kapasitas maksimum bulanan (unit)"],
    ["growth", "Pertumbuhan volume bulanan (%)"],
    ["capital", "Kas/modal tersedia awal (Rp)"],
    ["startup", "Pengeluaran awal investasi (Rp)"],
    ["tax", "Pajak/biaya regulasi bulanan — asumsi (Rp)"],
    ["delay", "Jeda penerimaan uang (bulan: 0–3)"],
  ];
function Y1(n, i) {
  const r = Object.fromEntries(
    _u.map((c) => [
      c.id,
      {
        values: c.fields.map(() => ""),
        status: "Belum diisi",
        source: "",
        notes: "",
        assumptions: "",
        validation: "",
        review: !1,
      },
    ]),
  );
  return (
    (r.background = {
      ...r.background,
      status: "Draf",
      values: [
        `${i.title}
Pelanggan: ${i.consumer}
Daerah: ${i.origin?.region || n.region || "Belum ditentukan"}
Periode: ${n.period}`,
        i.summary,
        i.evidence.map(
          (c) => `${c.imported?.sourceId || c.id}: ${c.quote}
${c.url}
${c.context}`,
        ).join(`

`),
        i.impact,
        i.alternatives.map((c) => `${c.name}: ${c.description}`).join(`
`),
        "",
        i.unknown,
      ],
      source: `Proyek ${n.name}; masalah ${i.origin?.sourceId || i.id}. Sumber mengikuti data riset, belum diperiksa ulang.`,
      validation:
        "Periksa sumber asli dan lakukan validasi konsumen sebelum menyimpulkan kebutuhan pasar.",
    }),
    {
      id: wt(),
      name: `Rencana usaha — ${i.title}`,
      createdAt: St(),
      updatedAt: St(),
      sourceProject: n.name,
      sourceProblem: structuredClone(i),
      sections: r,
      finance: Object.fromEntries(Df.map(([c]) => [c, null])),
      risks: [],
    }
  );
}
function Eg(n, i, r) {
  return {
    ...n,
    updatedAt: St(),
    sections: Object.fromEntries(
      Object.entries(n.sections).map(([c, f]) => [
        c,
        c === i
          ? { ...r, review: !1 }
          : f.status !== "Belum diisi"
            ? { ...f, review: !0 }
            : f,
      ]),
    ),
  };
}
function gf(n, i = 1) {
  if (Df.some(([h]) => n[h] === null || !Number.isFinite(n[h]))) return null;
  const r = n;
  if (
    Object.values(r).some((h) => h < 0) ||
    r.growth > 100 ||
    r.delay > 3 ||
    !Number.isInteger(r.delay) ||
    r.capacity < 1 ||
    r.units > r.capacity
  )
    return null;
  let c = r.capital - r.startup;
  const f = Array.from({ length: 12 }, (h, g) => {
    const y = Math.min(
        r.capacity,
        Math.floor(r.units * i * (1 + r.growth / 100) ** g),
      ),
      v = y * r.price,
      b = y * r.variable + r.fixed + r.tax;
    return {
      month: g + 1,
      units: y,
      revenue: v,
      cost: b,
      profit: v - b,
      received: 0,
      cash: 0,
    };
  });
  if (
    (f.forEach((h, g) => {
      ((h.received = g >= r.delay ? f[g - r.delay].revenue : 0),
        (c += h.received - h.cost),
        (h.cash = c));
    }),
    f.some((h) => Object.values(h).some((g) => !Number.isFinite(g))))
  )
    return null;
  const m = r.price - r.variable;
  return {
    rows: f,
    breakEven: m > 0 ? Math.ceil((r.fixed + r.tax) / m) : null,
    minimumCash: Math.min(r.capital - r.startup, ...f.map((h) => h.cash)),
    totalRevenue: f.reduce((h, g) => h + g.revenue, 0),
    totalProfit: f.reduce((h, g) => h + g.profit, 0),
  };
}
function $1(n) {
  const i = gf(n.finance);
  return (
    _u
      .filter((r) => r.id !== "summary")
      .map((r) => {
        const c = n.sections[r.id],
          f = c.values.filter((m) => m.trim()).join(`
`);
        return `${r.number}. ${r.name} [${c.status}${c.review ? "; perlu ditinjau ulang" : ""}]
${f ? f.slice(0, 350) + (f.length > 350 ? " [Petikan; tinjau dan ringkas.]" : "") : "Belum tersedia."}`;
      }).join(`

`) +
    (i
      ? `

Proyeksi dasar 12 bulan (asumsi, bukan hasil aktual): pendapatan Rp ${i.totalRevenue.toLocaleString("id-ID")}; laba sederhana Rp ${i.totalProfit.toLocaleString("id-ID")}; kekurangan kas maksimum Rp ${Math.max(0, -i.minimumCash).toLocaleString("id-ID")}.`
      : `

Proyeksi angka belum dapat dihitung.`) +
    `

Ringkasan template dari isian, bukan analisis AI atau bukti kelayakan usaha. Periksa angka dan asumsi sebelum digunakan.`
  );
}
function V1({ plan: n, onChange: i }) {
  const [r, c] = ie.useState(0),
    [f, m] = ie.useState(0),
    [h, g] = ie.useState(""),
    [y, v] = ie.useState(""),
    b = ie.useMemo(() => Nv(), []),
    k = ie.useMemo(() => zv(n, b), [n, b]),
    T = Math.min(r, k.count - 1),
    C = Tv(n, k, T, b),
    M = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(C);
  async function q(L) {
    (g(L), v(""));
    try {
      await Z1(n, L);
    } catch {
      v(
        "Ekspor visual gagal. Input tetap tersimpan. Coba lagi atau gunakan format lain.",
      );
    } finally {
      g("");
    }
  }
  return o.jsxs("section", {
    className: "bmc-panel",
    children: [
      o.jsx("h3", { children: "Visual Business Model Canvas" }),
      o.jsx("p", {
        className: "small-text",
        children:
          "Tata letak mengikuti referensi. Isi berasal dari sembilan isian BMC di bawah. Setiap kotak memiliki pengaturan font, warna, dan subjudul sendiri. Tambahkan subjudul melalui tombol pada masing-masing kotak. Ukuran font pilihan Anda dipertahankan, termasuk pada halaman lanjutan. PDF visual dan PNG dirender dalam resolusi 4124 × 2480 piksel per halaman. PDF visual berisi gambar; laporan business plan biasa tetap tersedia untuk teks yang dapat dipilih.",
      }),
      o.jsx("div", {
        className: "form-grid",
        children: [
          ["teamName", "Nama tim"],
          ["businessName", "Nama usaha pada BMC"],
          ["tagline", "Tagline BMC (opsional)"],
        ].map(([L, D]) =>
          o.jsxs(
            "label",
            {
              className: "field",
              children: [
                D,
                o.jsx("input", {
                  "aria-label": D,
                  maxLength: L === "teamName" ? 60 : 80,
                  value: n.canvasIdentity?.[L] || "",
                  onChange: (X) =>
                    i({
                      ...n,
                      updatedAt: St(),
                      canvasIdentity: {
                        ...n.canvasIdentity,
                        [L]: X.target.value,
                      },
                    }),
                }),
              ],
            },
            L,
          ),
        ),
      }),
      o.jsxs("details", {
        className: "bmc-appearance bmc-copy-style",
        children: [
          o.jsx("summary", { children: "Samakan tampilan semua kotak" }),
          o.jsx("p", {
            className: "small-text",
            children:
              "Salin ukuran font dan warna satu kotak ke semua kotak. Isi dan subjudul tetap milik masing-masing kotak.",
          }),
          o.jsxs("label", {
            className: "field",
            children: [
              "Salin tampilan dari",
              o.jsx("select", {
                "aria-label": "Salin tampilan dari kotak",
                value: f,
                onChange: (L) => m(Number(L.target.value)),
                children: _u
                  .find((L) => L.id === "canvas")
                  .fields.map((L, D) =>
                    o.jsx("option", { value: D, children: L }, L),
                  ),
              }),
            ],
          }),
          o.jsx("button", {
            className: "secondary",
            type: "button",
            onClick: () => {
              const { palette: L, ...D } = Cf(n.canvasStyles?.[f]);
              i({
                ...n,
                updatedAt: St(),
                canvasStyles: Object.fromEntries(
                  xv.map((X) => [X.field, { ...D }]),
                ),
              });
            },
            children: "Terapkan tampilan ke 9 kotak",
          }),
        ],
      }),
      k.count > 1 &&
        o.jsx("div", {
          className: "notice",
          children: o.jsxs("p", {
            role: "status",
            children: [
              "Isi memerlukan ",
              k.count,
              " halaman pada ukuran huruf yang terbaca. PDF menyertakan seluruh halaman. PNG diunduh satu file per halaman; browser mungkin meminta izin beberapa unduhan.",
            ],
          }),
        }),
      o.jsxs("div", {
        className: "button-row",
        children: [
          o.jsx("button", {
            className: "secondary",
            disabled: !!h,
            onClick: () => q("PDF"),
            children:
              h === "PDF" ? "Membuat PDF visual…" : "Unduh BMC PDF visual",
          }),
          o.jsx("button", {
            className: "secondary",
            disabled: !!h,
            onClick: () => q("PNG"),
            children: h === "PNG" ? "Membuat PNG…" : "Unduh BMC PNG",
          }),
        ],
      }),
      y &&
        o.jsx("p", { className: "notice error", role: "alert", children: y }),
      o.jsxs("label", {
        className: "field",
        children: [
          "Halaman pratinjau BMC",
          o.jsx("select", {
            "aria-label": "Halaman pratinjau BMC",
            value: T,
            onChange: (L) => c(Number(L.target.value)),
            children: Array.from({ length: k.count }, (L, D) =>
              o.jsxs(
                "option",
                { value: D, children: ["Halaman ", D + 1, " dari ", k.count] },
                D,
              ),
            ),
          }),
        ],
      }),
      o.jsx("div", {
        className: "bmc-scroll",
        id: "bmc-preview",
        children: o.jsx("img", {
          className: "bmc-image",
          src: M,
          alt: `Business Model Canvas untuk ${n.canvasIdentity?.businessName || n.name}, halaman ${T + 1}`,
        }),
      }),
      o.jsx("p", {
        className: "small-text",
        children:
          "Pratinjau visual memiliki teks kecil pada layar sempit. Isian lengkap tetap dapat dibaca dan disunting melalui formulir di bawah. Ekspor laporan business plan biasa tetap tersedia terpisah.",
      }),
    ],
  });
}
function G1({
  label: n,
  field: i,
  value: r,
  style: c,
  onValue: f,
  onStyle: m,
}) {
  const h = R1(r),
    g = Cf(c);
  return o.jsxs("fieldset", {
    className: "bmc-block-editor",
    children: [
      o.jsx("legend", { children: n }),
      o.jsxs("details", {
        className: "bmc-appearance",
        children: [
          o.jsxs("summary", { children: ["Atur tampilan ", n] }),
          o.jsx("div", {
            className: "form-grid",
            children: [
              ["fontSize", "Ukuran font isi", 12, 30],
              ["headingSize", "Ukuran font subjudul", 12, 32],
              ["titleSize", "Ukuran font judul kotak", 14, 24],
            ].map(([y, v, b, k]) =>
              o.jsxs(
                "label",
                {
                  className: "field",
                  children: [
                    v,
                    o.jsx("select", {
                      "aria-label": `${v} ${n}`,
                      value: g[y],
                      onChange: (T) => m({ ...c, [y]: Number(T.target.value) }),
                      children: Array.from(
                        { length: k - b + 1 },
                        (T, C) => b + C,
                      ).map((T) =>
                        o.jsxs("option", { value: T, children: [T, " px"] }, T),
                      ),
                    }),
                  ],
                },
                y,
              ),
            ),
          }),
          o.jsxs("fieldset", {
            className: "bmc-colors",
            children: [
              o.jsxs("legend", { children: ["Warna untuk ", n] }),
              o.jsx("div", {
                className: "bmc-color-options",
                children: Object.entries(hf).map(([y, v]) =>
                  o.jsxs(
                    "label",
                    {
                      className: "bmc-color-option",
                      children: [
                        o.jsx("input", {
                          type: "radio",
                          name: `bmc-color-${i}`,
                          checked: g.color === y,
                          onChange: () => m({ ...c, color: y }),
                        }),
                        o.jsx("span", {
                          className: "bmc-swatch",
                          style: { backgroundColor: v.swatch },
                          "aria-hidden": "true",
                        }),
                        v.label,
                      ],
                    },
                    y,
                  ),
                ),
              }),
              o.jsx("p", {
                className: "small-text",
                children:
                  "Warna diterapkan ke judul, subjudul, teks, dan garis kotak. Latar dibuat terang agar tulisan terbaca.",
              }),
            ],
          }),
        ],
      }),
      o.jsxs("label", {
        className: "field",
        children: [
          "Isi utama (tanpa subjudul)",
          o.jsx("textarea", {
            "aria-label": n,
            value: h.intro,
            rows: 3,
            maxLength: 12e3,
            placeholder:
              "Tulis analisis langsung, atau tambahkan subjudul di bawah.",
            onChange: (y) => f(fu({ ...h, intro: y.target.value })),
          }),
        ],
      }),
      h.sections.map((y, v) =>
        o.jsxs(
          "div",
          {
            className: "bmc-subsection",
            children: [
              o.jsxs("label", {
                className: "field",
                children: [
                  "Subjudul ",
                  v + 1,
                  o.jsx("input", {
                    "aria-label": `Subjudul ${v + 1} ${n}`,
                    value: y.title,
                    maxLength: 160,
                    placeholder: "Tulis subjudul Anda",
                    onChange: (b) =>
                      f(
                        fu({
                          ...h,
                          sections: h.sections.map((k, T) =>
                            T === v ? { ...k, title: b.target.value } : k,
                          ),
                        }),
                      ),
                  }),
                ],
              }),
              o.jsxs("label", {
                className: "field",
                children: [
                  "Isi subjudul ",
                  v + 1,
                  o.jsx("textarea", {
                    "aria-label": `Isi subjudul ${v + 1} ${n}`,
                    value: y.body,
                    rows: 3,
                    maxLength: 12e3,
                    onChange: (b) =>
                      f(
                        fu({
                          ...h,
                          sections: h.sections.map((k, T) =>
                            T === v ? { ...k, body: b.target.value } : k,
                          ),
                        }),
                      ),
                  }),
                ],
              }),
              o.jsxs("button", {
                className: "secondary",
                type: "button",
                "aria-label": `Hapus subjudul ${v + 1} ${n}`,
                onClick: () => f(fu(U1(h, v))),
                children: ["Hapus subjudul ", v + 1],
              }),
            ],
          },
          v,
        ),
      ),
      o.jsxs("div", {
        className: "button-row",
        children: [
          o.jsxs("button", {
            className: "secondary",
            type: "button",
            onClick: () =>
              f(
                fu({
                  ...h,
                  sections: [...h.sections, { title: "", body: "" }],
                }),
              ),
            children: ["Tambah subjudul ", n],
          }),
          o.jsx("a", { href: "#bmc-preview", children: "Lihat pratinjau" }),
        ],
      }),
      o.jsx("p", {
        className: "small-text",
        children:
          "Subjudul bisa ditambah dan diubah sesuai analisis. Menghapus subjudul mempertahankan isinya sebagai teks di bagian sebelumnya.",
      }),
    ],
  });
}
const en = (n) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(n);
const PlanVisuals = createVisualPlans(ie, o, gf);
function K1({ plan: n, onChange: i, onBack: r }) {
  function c(D) {
    ((D.risks !== n.risks || D.name !== n.name) &&
      D.sections.summary.status !== "Belum diisi" &&
      (D = {
        ...D,
        sections: {
          ...D.sections,
          summary: { ...D.sections.summary, review: !0 },
        },
      }),
      i(D));
  }
  const [f, m] = ie.useState("background"),
    [h, g] = ie.useState(""),
    [y, v] = ie.useState(""),
    [b, k] = ie.useState("PDF"),
    T = _u.find((D) => D.id === f),
    C = n.sections[f],
    M = gf(n.finance);
  function q(D) {
    const X = { ...C, ...D };
    (!D.status &&
      X.status === "Belum diisi" &&
      [X.source, X.notes, X.assumptions, X.validation, ...X.values].some((ye) =>
        ye.trim(),
      ) &&
      (X.status = "Draf"),
      c(Eg(n, f, X)));
  }
  async function L() {
    (v("Membuat laporan…"), g(""));
    try {
      const { exportPlan: D } = await wf(
        async () => {
          const { exportPlan: X } = await import("./plan-report.js");
          return { exportPlan: X };
        },
        __vite__mapDeps([0, 1]),
      );
      await D(n, b);
    } catch {
      g("Ekspor gagal. Isian rencana tetap disimpan. Silakan coba lagi.");
    } finally {
      v("");
    }
  }
  return o.jsxs(o.Fragment, {
    children: [
      o.jsx("button", {
        className: "back-link",
        onClick: r,
        children: "← Semua business plan",
      }),
      o.jsxs("div", {
        className: "page-heading",
        children: [
          o.jsxs("div", {
            children: [
              o.jsx("div", {
                className: "eyebrow",
                children: "BUSINESS PLAN · RUANG PERENCANAAN",
              }),
              o.jsx("h1", { children: "Rencana usaha" }),
              o.jsxs("p", {
                children: [
                  "Bersumber dari ",
                  n.sourceProject,
                  ". Isian tersimpan bersama proyek riset.",
                ],
              }),
            ],
          }),
          o.jsxs("div", {
            className: "button-row",
            children: [
              o.jsxs("select", {
                "aria-label": "Format laporan business plan",
                value: b,
                onChange: (D) => k(D.target.value),
                children: [
                  o.jsx("option", { children: "PDF" }),
                  o.jsx("option", { children: "Excel" }),
                ],
              }),
              o.jsx("button", {
                className: "primary",
                disabled: !!y,
                onClick: L,
                children: y || "Ekspor business plan",
              }),
            ],
          }),
        ],
      }),
      o.jsxs("label", {
        className: "field",
        children: [
          "Nama business plan",
          o.jsx("input", {
            value: n.name,
            maxLength: 200,
            onChange: (D) => c({ ...n, name: D.target.value, updatedAt: St() }),
          }),
        ],
      }),
      o.jsx("div", {
        className: "notice",
        children: o.jsx("p", {
          children:
            "Draf perencanaan, belum membuktikan kelayakan bisnis. Executive Summary dikerjakan terakhir. Sumber impor belum diperiksa ulang. Perubahan pada suatu tahap menandai bagian lain yang sudah diisi untuk ditinjau ulang; tulisan Anda tetap dipertahankan.",
        }),
      }),
      h &&
        o.jsx("div", { className: "notice error", role: "alert", children: h }),
      o.jsxs("div", {
        className: "plan-layout",
        children: [
          o.jsx("nav", {
            className: "plan-stages panel",
            "aria-label": "Tahapan business plan",
            children: _u.map((D) =>
              o.jsxs(
                "button",
                {
                  "aria-current": f === D.id ? "step" : void 0,
                  className: f === D.id ? "active" : "",
                  onClick: () => m(D.id),
                  children: [
                    o.jsxs("span", { children: [D.number, ". ", D.name] }),
                    o.jsx("small", {
                      children: n.sections[D.id].review
                        ? "Perlu ditinjau ulang"
                        : n.sections[D.id].status,
                    }),
                  ],
                },
                D.id,
              ),
            ),
          }),
          o.jsxs("section", {
            className: "panel detail-section",
            children: [
              o.jsx("div", {
                className: "section-heading",
                children: o.jsxs("h2", { children: [T.number, ". ", T.name] }),
              }),
              C.review &&
                o.jsx("div", {
                  className: "notice",
                  children: o.jsx("p", {
                    children:
                      "Bagian lain berubah. Tinjau kesesuaian bagian ini sebelum menandainya siap ditinjau.",
                  }),
                }),
              f === "background" &&
                o.jsx("div", {
                  className: "notice",
                  children: o.jsxs("p", {
                    children: [
                      "Draf mengambil salinan masalah dan bukti asal. Menyuntingnya tidak mengubah riset. ID asal:",
                      " ",
                      n.sourceProblem.origin?.sourceId || n.sourceProblem.id,
                      ".",
                    ],
                  }),
                }),
              f === "legal" &&
                o.jsx("div", {
                  className: "notice",
                  children: o.jsx("p", {
                    children:
                      "KBLI berbeda dari IDX-IC. Periksa persyaratan pada sumber resmi sesuai kegiatan, lokasi, dan bentuk usaha; isian ini bukan konfirmasi kepatuhan hukum.",
                  }),
                }),
              f === "summary" &&
                o.jsxs(o.Fragment, {
                  children: [
                    o.jsx("div", {
                      className: "notice",
                      children: o.jsx("p", {
                        children:
                          "Ringkasan tampil paling depan dalam laporan. Bagian belum terisi tetap disebut belum tersedia. Draf memakai template isian tanpa AI dan tetap perlu Anda ringkas/sunting.",
                      }),
                    }),
                    o.jsx("button", {
                      className: "secondary",
                      onClick: () => {
                        (C.values[0] &&
                          !window.confirm(
                            "Ganti teks Executive Summary dengan draf dari isian terkini?",
                          )) ||
                          q({ values: [$1(n)], status: "Draf" });
                      },
                      children: "Susun draf ringkasan dari isian",
                    }),
                  ],
                }),
              f === "canvas" && o.jsx(V1, { plan: n, onChange: c }),
              ["value", "market"].includes(f) &&
                o.jsx(PlanVisuals, { plan: n, onChange: c, mode: f }, f),
              T.fields.map((D, X) =>
                f === "canvas"
                  ? o.jsx(
                      G1,
                      {
                        label: D,
                        field: X,
                        value: C.values[X] || "",
                        style: n.canvasStyles?.[X],
                        onStyle: (ye) =>
                          c({
                            ...n,
                            updatedAt: St(),
                            canvasStyles: { ...n.canvasStyles, [X]: ye },
                          }),
                        onValue: (ye) => {
                          const Ae = [...C.values];
                          ((Ae[X] = ye),
                            q({
                              values: Ae,
                              status:
                                C.status === "Belum diisi" ? "Draf" : C.status,
                            }));
                        },
                      },
                      D,
                    )
                  : o.jsxs(
                      "label",
                      {
                        className: "field",
                        children: [
                          D,
                          o.jsx("textarea", {
                            "aria-label": D,
                            value: C.values[X] || "",
                            maxLength: 12e3,
                            rows: 4,
                            onChange: (ye) => {
                              const Ae = [...C.values];
                              ((Ae[X] = ye.target.value),
                                q({
                                  values: Ae,
                                  status:
                                    C.status === "Belum diisi"
                                      ? "Draf"
                                      : C.status,
                                }));
                            },
                            placeholder:
                              "Tuliskan yang diketahui; tandai asumsi dan informasi yang belum tersedia.",
                          }),
                        ],
                      },
                      f + D,
                    ),
              ),
              f === "finance" &&
                o.jsxs(o.Fragment, {
                  children: [
                    o.jsx("h3", { children: "Asumsi proyeksi 12 bulan" }),
                    o.jsx("p", {
                      className: "small-text",
                      children:
                        "Kosong berarti belum diketahui; masukkan 0 secara eksplisit jika memang nol. Untuk perantara, pendapatan per transaksi adalah komisi, bukan nilai transaksi pelanggan. Model sederhana ini belum mencakup depresiasi, pinjaman/bunga, persediaan, dan rincian pajak; catat komponen yang belum tercakup.",
                    }),
                    o.jsx("div", {
                      className: "form-grid",
                      children: Df.map(([D, X]) =>
                        o.jsxs(
                          "label",
                          {
                            className: "field",
                            children: [
                              X,
                              o.jsx("input", {
                                type: "number",
                                min: "0",
                                max:
                                  D === "growth"
                                    ? 100
                                    : D === "delay"
                                      ? 3
                                      : void 0,
                                step: D === "delay" ? "1" : "any",
                                value: n.finance[D] ?? "",
                                onChange: (ye) => {
                                  const Ae = {
                                      ...n.finance,
                                      [D]:
                                        ye.target.value === ""
                                          ? null
                                          : Number(ye.target.value),
                                    },
                                    de = Eg(n, "finance", {
                                      ...C,
                                      status: "Draf",
                                    });
                                  c({ ...de, finance: Ae });
                                },
                              }),
                            ],
                          },
                          D,
                        ),
                      ),
                    }),
                    o.jsx(PlanVisuals, {
                      plan: n,
                      onChange: c,
                      mode: "finance",
                    }),
                    M
                      ? o.jsxs(o.Fragment, {
                          children: [
                            o.jsx("h3", { children: "Hasil skenario dasar" }),
                            o.jsxs("p", {
                              children: [
                                "Margin kontribusi per unit:",
                                " ",
                                en(n.finance.price - n.finance.variable),
                                ". Titik impas bulanan:",
                                " ",
                                M.breakEven === null
                                  ? "tidak tercapai pada margin saat ini"
                                  : `${M.breakEven} unit${M.breakEven > n.finance.capacity ? " — melebihi kapasitas" : ""}`,
                                ". Kekurangan kas maksimum:",
                                " ",
                                en(Math.max(0, -M.minimumCash)),
                                ".",
                              ],
                            }),
                            o.jsx("div", {
                              className: "finance-scroll",
                              children: o.jsxs("table", {
                                className: "finance-table",
                                children: [
                                  o.jsx("caption", {
                                    children:
                                      "Proyeksi, bukan hasil aktual. Pertumbuhan dibatasi kapasitas.",
                                  }),
                                  o.jsx("thead", {
                                    children: o.jsx("tr", {
                                      children: [
                                        "Bulan",
                                        "Unit",
                                        "Pendapatan",
                                        "Biaya",
                                        "Laba sederhana",
                                        "Kas akhir",
                                      ].map((D) =>
                                        o.jsx("th", { children: D }, D),
                                      ),
                                    }),
                                  }),
                                  o.jsx("tbody", {
                                    children: M.rows.map((D) =>
                                      o.jsxs(
                                        "tr",
                                        {
                                          children: [
                                            o.jsx("td", { children: D.month }),
                                            o.jsx("td", { children: D.units }),
                                            o.jsx("td", {
                                              children: en(D.revenue),
                                            }),
                                            o.jsx("td", {
                                              children: en(D.cost),
                                            }),
                                            o.jsx("td", {
                                              children: en(D.profit),
                                            }),
                                            o.jsx("td", {
                                              children: en(D.cash),
                                            }),
                                          ],
                                        },
                                        D.month,
                                      ),
                                    ),
                                  }),
                                ],
                              }),
                            }),
                            o.jsx("h3", {
                              children: "Sensitivitas volume penjualan",
                            }),
                            o.jsx("p", {
                              className: "small-text",
                              children:
                                "Pengali ilustratif untuk pengujian asumsi: 70%, 100%, 130%; tetap dibatasi kapasitas. Bukan probabilitas keberhasilan. Harga dan biaya per unit tetap.",
                            }),
                            [
                              ["Konservatif", 0.7],
                              ["Dasar", 1],
                              ["Optimistis", 1.3],
                            ].map(([D, X]) => {
                              const ye = gf(n.finance, Number(X));
                              return o.jsxs(
                                "p",
                                {
                                  children: [
                                    " ",
                                    D,
                                    ": pendapatan ",
                                    en(ye.totalRevenue),
                                    ", laba sederhana ",
                                    en(ye.totalProfit),
                                    ", kekurangan kas",
                                    " ",
                                    en(Math.max(0, -ye.minimumCash)),
                                    ".",
                                  ],
                                },
                                D,
                              );
                            }),
                          ],
                        })
                      : o.jsx("div", {
                          className: "notice",
                          children: o.jsx("p", {
                            role: "status",
                            children:
                              "Proyeksi belum dapat dihitung. Lengkapi semua angka dengan nilai nonnegatif; kapasitas minimal 1, volume awal tidak melebihi kapasitas, pertumbuhan 0–100%, dan jeda pembayaran bilangan bulat 0–3 bulan.",
                          }),
                        }),
                  ],
                }),
              o.jsxs("label", {
                className: "field",
                children: [
                  "Data / sumber pendukung dan tanggal pemeriksaan",
                  o.jsx("textarea", {
                    "aria-label":
                      "Data / sumber pendukung dan tanggal pemeriksaan",
                    value: C.source,
                    maxLength: 12e3,
                    onChange: (D) => q({ source: D.target.value }),
                  }),
                ],
              }),
              o.jsxs("label", {
                className: "field",
                children: [
                  "Asumsi, kekurangan data, dan batasan",
                  o.jsx("textarea", {
                    "aria-label": "Asumsi, kekurangan data, dan batasan",
                    value: C.assumptions,
                    maxLength: 12e3,
                    onChange: (D) => q({ assumptions: D.target.value }),
                  }),
                ],
              }),
              o.jsxs("label", {
                className: "field",
                children: [
                  "Tindakan validasi dan hasil aktual",
                  o.jsx("textarea", {
                    "aria-label": "Tindakan validasi dan hasil aktual",
                    value: C.validation,
                    maxLength: 12e3,
                    onChange: (D) => q({ validation: D.target.value }),
                  }),
                ],
              }),
              o.jsxs("label", {
                className: "field",
                children: [
                  "Catatan tambahan",
                  o.jsx("textarea", {
                    "aria-label": "Catatan tambahan",
                    value: C.notes,
                    maxLength: 12e3,
                    onChange: (D) => q({ notes: D.target.value }),
                  }),
                ],
              }),
              o.jsxs("label", {
                className: "field",
                children: [
                  "Status tahap",
                  o.jsx("select", {
                    value: C.status,
                    onChange: (D) => q({ status: D.target.value }),
                    children: [
                      "Belum diisi",
                      "Draf",
                      "Perlu data",
                      "Siap ditinjau",
                    ].map((D) => o.jsx("option", { children: D }, D)),
                  }),
                ],
              }),
              o.jsx("p", {
                className: "small-text",
                children:
                  "Status adalah penilaian Anda; siap ditinjau tidak berarti tervalidasi. Isian disimpan otomatis. Untuk mengakui peninjauan setelah perubahan, pilih status tahap kembali.",
              }),
              o.jsxs("details", {
                className: "advanced",
                children: [
                  o.jsx("summary", {
                    children: "Bukti asal yang ditautkan ke rencana",
                  }),
                  n.sourceProblem.evidence.map((D) =>
                    o.jsxs(
                      "article",
                      {
                        className: "evidence-card",
                        children: [
                          o.jsx("p", { children: D.quote }),
                          o.jsx("a", {
                            href: D.url,
                            target: "_blank",
                            rel: "noreferrer",
                            children: D.source,
                          }),
                          o.jsx("p", { children: D.context }),
                        ],
                      },
                      D.id,
                    ),
                  ),
                ],
              }),
            ],
          }),
        ],
      }),
      o.jsxs("section", {
        className: "panel detail-section plan-risks",
        children: [
          o.jsx("h2", { children: "Daftar risiko lintas tahap" }),
          o.jsx("p", {
            children:
              "Catat risiko pasar, operasi, hukum, dan keuangan beserta penanganannya.",
          }),
          n.risks.map((D) =>
            o.jsxs(
              "div",
              {
                className: "validation-item",
                children: [
                  [
                    ["risk", "Risiko"],
                    ["impact", "Dampak"],
                    ["warning", "Tanda peringatan"],
                    ["mitigation", "Penanganan"],
                    ["owner", "Penanggung jawab"],
                  ].map(([X, ye]) =>
                    o.jsxs(
                      "label",
                      {
                        className: "field",
                        children: [
                          ye,
                          o.jsx("textarea", {
                            "aria-label": ye,
                            value: D[X],
                            maxLength: 4e3,
                            onChange: (Ae) =>
                              c({
                                ...n,
                                updatedAt: St(),
                                risks: n.risks.map((de) =>
                                  de.id === D.id
                                    ? { ...de, [X]: Ae.target.value }
                                    : de,
                                ),
                              }),
                          }),
                        ],
                      },
                      X,
                    ),
                  ),
                  o.jsx("button", {
                    className: "secondary",
                    onClick: () => {
                      confirm("Hapus risiko ini?") &&
                        c({
                          ...n,
                          risks: n.risks.filter((X) => X.id !== D.id),
                          updatedAt: St(),
                        });
                    },
                    children: "Hapus risiko",
                  }),
                ],
              },
              D.id,
            ),
          ),
          o.jsx("button", {
            className: "secondary",
            onClick: () =>
              c({
                ...n,
                updatedAt: St(),
                risks: [
                  ...n.risks,
                  {
                    id: wt(),
                    risk: "",
                    impact: "",
                    warning: "",
                    mitigation: "",
                    owner: "",
                  },
                ],
              }),
            children: "Tambah risiko",
          }),
        ],
      }),
    ],
  });
}
const X1 = (n) => n.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  Av = (...n) =>
    n
      .filter((i, r, c) => !!i && i.trim() !== "" && c.indexOf(i) === r)
      .join(" ")
      .trim();
var Q1 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
const J1 = ie.forwardRef(
  (
    {
      color: n = "currentColor",
      size: i = 24,
      strokeWidth: r = 2,
      absoluteStrokeWidth: c,
      className: f = "",
      children: m,
      iconNode: h,
      ...g
    },
    y,
  ) =>
    ie.createElement(
      "svg",
      {
        ref: y,
        ...Q1,
        width: i,
        height: i,
        stroke: n,
        strokeWidth: c ? (Number(r) * 24) / Number(i) : r,
        className: Av("lucide", f),
        ...g,
      },
      [
        ...h.map(([v, b]) => ie.createElement(v, b)),
        ...(Array.isArray(m) ? m : [m]),
      ],
    ),
);
const Le = (n, i) => {
  const r = ie.forwardRef(({ className: c, ...f }, m) =>
    ie.createElement(J1, {
      ref: m,
      iconNode: i,
      className: Av(`lucide-${X1(n)}`, c),
      ...f,
    }),
  );
  return ((r.displayName = `${n}`), r);
};
const Og = Le("ArrowLeft", [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }],
]);
const Da = Le("ArrowUpRight", [
  ["path", { d: "M7 7h10v10", key: "1tivn9" }],
  ["path", { d: "M7 17 17 7", key: "1vkiza" }],
]);
const Fs = Le("Bookmark", [
  [
    "path",
    { d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z", key: "1fy3hk" },
  ],
]);
const wv = Le("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
const Ag = Le("ChevronDown", [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]]);
const Ws = Le("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }],
]);
const wg = Le("CircleAlert", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }],
]);
const Cg = Le("Clock", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }],
]);
const er = Le("Database", [
  ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3", key: "msslwz" }],
  ["path", { d: "M3 5V19A9 3 0 0 0 21 19V5", key: "1wlel7" }],
  ["path", { d: "M3 12A9 3 0 0 0 21 12", key: "mv7ke4" }],
]);
const tr = Le("Download", [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "7 10 12 15 17 10", key: "2ggqvy" }],
  ["line", { x1: "12", x2: "12", y1: "15", y2: "3", key: "1vk2je" }],
]);
const I1 = Le("ExternalLink", [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  [
    "path",
    {
      d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
      key: "a6xqqp",
    },
  ],
]);
const nf = Le("FileText", [
  [
    "path",
    {
      d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
      key: "1rqfz7",
    },
  ],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }],
]);
const mu = Le("FlaskConical", [
  [
    "path",
    {
      d: "M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2",
      key: "18mbvz",
    },
  ],
  ["path", { d: "M6.453 15h11.094", key: "3shlmq" }],
  ["path", { d: "M8.5 2h7", key: "csnxdl" }],
]);
const vf = Le("FolderOpen", [
  [
    "path",
    {
      d: "m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",
      key: "usdka0",
    },
  ],
]);
const fl = Le("Info", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }],
]);
const Dg = Le("Layers", [
  [
    "path",
    {
      d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",
      key: "zw3jo",
    },
  ],
  [
    "path",
    {
      d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",
      key: "1wduqc",
    },
  ],
  [
    "path",
    {
      d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",
      key: "kqbvx6",
    },
  ],
]);
const Mg = Le("LayoutGrid", [
  ["rect", { width: "7", height: "7", x: "3", y: "3", rx: "1", key: "1g98yp" }],
  [
    "rect",
    { width: "7", height: "7", x: "14", y: "3", rx: "1", key: "6d4xhi" },
  ],
  [
    "rect",
    { width: "7", height: "7", x: "14", y: "14", rx: "1", key: "nxv5o0" },
  ],
  [
    "rect",
    { width: "7", height: "7", x: "3", y: "14", rx: "1", key: "1bb6yr" },
  ],
]);
const Rg = Le("List", [
  ["path", { d: "M3 12h.01", key: "nlz23k" }],
  ["path", { d: "M3 18h.01", key: "1tta3j" }],
  ["path", { d: "M3 6h.01", key: "1rqtza" }],
  ["path", { d: "M8 12h13", key: "1za7za" }],
  ["path", { d: "M8 18h13", key: "1lx6n3" }],
  ["path", { d: "M8 6h13", key: "ik3vkj" }],
]);
const Ug = Le("MapPin", [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z",
    },
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
]);
const P1 = Le("Menu", [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
]);
const nn = Le("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }],
]);
const Bg = Le("Radar", [
  ["path", { d: "M19.07 4.93A10 10 0 0 0 6.99 3.34", key: "z3du51" }],
  ["path", { d: "M4 6h.01", key: "oypzma" }],
  ["path", { d: "M2.29 9.62A10 10 0 1 0 21.31 8.35", key: "qzzz0" }],
  ["path", { d: "M16.24 7.76A6 6 0 1 0 8.23 16.67", key: "1yjesh" }],
  ["path", { d: "M12 18h.01", key: "mhygvu" }],
  ["path", { d: "M17.99 11.66A6 6 0 0 1 15.77 16.67", key: "1u2y91" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
  ["path", { d: "m13.41 10.59 5.66-5.66", key: "mhq4k0" }],
]);
const Mn = Le("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }],
]);
const F1 = Le("Settings", [
  [
    "path",
    {
      d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",
      key: "1qme2f",
    },
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
]);
const Zg = Le("ShieldCheck", [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y",
    },
  ],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
]);
const W1 = Le("SlidersHorizontal", [
  ["line", { x1: "21", x2: "14", y1: "4", y2: "4", key: "obuewd" }],
  ["line", { x1: "10", x2: "3", y1: "4", y2: "4", key: "1q6298" }],
  ["line", { x1: "21", x2: "12", y1: "12", y2: "12", key: "1iu8h1" }],
  ["line", { x1: "8", x2: "3", y1: "12", y2: "12", key: "ntss68" }],
  ["line", { x1: "21", x2: "16", y1: "20", y2: "20", key: "14d8ph" }],
  ["line", { x1: "12", x2: "3", y1: "20", y2: "20", key: "m0wm8r" }],
  ["line", { x1: "14", x2: "14", y1: "2", y2: "6", key: "14e1ph" }],
  ["line", { x1: "8", x2: "8", y1: "10", y2: "14", key: "1i6ji0" }],
  ["line", { x1: "16", x2: "16", y1: "18", y2: "22", key: "1lctlv" }],
]);
const Hg = Le("Trash2", [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
  ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }],
]);
const yf = Le("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
]);
function bf(n) {
  const i = Object.values(n).filter((c) => typeof c == "number");
  return Object.entries(n)
    .filter(([c, f]) => i.indexOf(+c) === -1)
    .map(([c, f]) => f);
}
function Lg(n, i = "|") {
  return n.map((r) => Bv(r)).join(i);
}
function kf(n, i) {
  return typeof i == "bigint" ? i.toString() : i;
}
class ek {
  constructor(i) {
    ((this._getter = i), (this._value = void 0));
  }
  get value() {
    const i = this._getter;
    return (
      i !== void 0 && ((this._value = i()), (this._getter = void 0)),
      this._value
    );
  }
}
function Mf(n) {
  return new ek(n);
}
function tk(n) {
  return n == null;
}
function Rf(n) {
  const i = n.startsWith("^") ? 1 : 0,
    r = n.endsWith("$") ? n.length - 1 : n.length;
  return n.slice(i, r);
}
function ak(n, i) {
  const r = n / i,
    c = Math.round(r),
    f = 4 * Number.EPSILON * Math.max(Math.abs(r), 1);
  return Math.abs(r - c) < f ? 0 : r - c;
}
function Zn(n, i, r) {
  Object.defineProperty(n, i, {
    value: r,
    writable: !0,
    enumerable: !0,
    configurable: !0,
  });
}
function Cv(n) {
  const i = Object.getOwnPropertyDescriptor(n, "shape");
  return i?.get ? i.get.raw : i?.value;
}
function un(n) {
  return Cv(n._zod.def) ?? n._zod.def.shape;
}
function Dv(n, i, r) {
  Object.defineProperty(n, i, {
    get() {
      const c = r();
      return (Zn(this, i, c), c);
    },
    enumerable: !0,
    configurable: !0,
  });
}
function Mv(n, i, r) {
  i in n ? Zn(n, i, r) : (n[i] = r);
}
function gl(n, i, r, c) {
  const f = un(i);
  for (const m of r) {
    const h = Object.getOwnPropertyDescriptor(f, m);
    h.enumerable &&
      (h.get
        ? Dv(n, m, () => {
            const g = i._zod.def.shape[m];
            return c ? c(g, m) : g;
          })
        : Mv(n, m, c ? c(h.value, m) : h.value));
  }
}
function nk(n, i) {
  for (const r of Reflect.ownKeys(i)) {
    const c = Object.getOwnPropertyDescriptor(i, r);
    c.enumerable && (c.get ? Dv(n, r, () => i[r]) : Mv(n, r, c.value));
  }
}
function Ft(...n) {
  const i = {};
  for (const r of n) {
    const c = Object.getOwnPropertyDescriptors(r);
    Object.assign(i, c);
  }
  return Object.defineProperties({}, i);
}
function lk(n) {
  return JSON.stringify(n);
}
function ik(n) {
  return n
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
const Rv =
  "captureStackTrace" in Error ? Error.captureStackTrace : (...n) => {};
function or(n) {
  return typeof n == "object" && n !== null && !Array.isArray(n);
}
const uk = Mf(() => {
  if (
    ka.jitless ||
    (typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare"))
  )
    return !1;
  try {
    const n = Function;
    return (new n(""), !0);
  } catch {
    return !1;
  }
});
function oi(n) {
  if (or(n) === !1) return !1;
  const i = n.constructor;
  if (i === void 0 || typeof i != "function") return !0;
  const r = i.prototype;
  return !(
    or(r) === !1 ||
    Object.prototype.hasOwnProperty.call(r, "isPrototypeOf") === !1
  );
}
function Uv(n) {
  return oi(n)
    ? { ...n }
    : Array.isArray(n)
      ? [...n]
      : n instanceof Map
        ? new Map(n)
        : n instanceof Set
          ? new Set(n)
          : n;
}
const sk = new Set(["string", "number", "symbol"]);
function vr(n) {
  return n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function Hn(n, i, r) {
  const c = new n._zod.constr(i ?? n._zod.def);
  return ((!i || r?.parent) && (c._zod.parent = n), c);
}
function ee(n) {
  const i = n;
  if (!i) return {};
  if (typeof i == "string") return { error: () => i };
  if (i?.message !== void 0) {
    if (i?.error !== void 0)
      throw new Error("Cannot specify both `message` and `error` params");
    i.error = i.message;
  }
  return (
    delete i.message,
    typeof i.error == "string" ? { ...i, error: () => i.error } : i
  );
}
function Bv(n) {
  return typeof n == "bigint"
    ? n.toString() + "n"
    : typeof n == "string"
      ? `"${n}"`
      : `${n}`;
}
function rk(n) {
  return Object.keys(n).filter(
    (i) => n[i]._zod.optin !== void 0 && n[i]._zod.optout === "optional",
  );
}
const Zv = {
    safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
    int32: [-2147483648, 2147483647],
    uint32: [0, 4294967295],
    float32: [-34028234663852886e22, 34028234663852886e22],
    float64: [-Number.MAX_VALUE, Number.MAX_VALUE],
  },
  ck = {
    int64: [BigInt("-9223372036854775808"), BigInt("9223372036854775807")],
    uint64: [BigInt(0), BigInt("18446744073709551615")],
  };
function ok(n, i) {
  const r = n._zod.def,
    c = r.checks;
  if (c && c.length > 0)
    throw new Error(
      ".pick() cannot be used on object schemas containing refinements",
    );
  const m = {};
  return (gl(m, n, yr(n, i)), Hn(n, Ft(r, { shape: m, checks: [] })));
}
function yr(n, i) {
  const r = un(n),
    c = [];
  for (const f of Reflect.ownKeys(i)) {
    if (!Object.getOwnPropertyDescriptor(r, f)?.enumerable)
      throw new Error(`Unrecognized key: "${String(f)}"`);
    i[f] && c.push(f);
  }
  return c;
}
function fk(n, i) {
  const r = n._zod.def,
    c = r.checks;
  if (c && c.length > 0)
    throw new Error(
      ".omit() cannot be used on object schemas containing refinements",
    );
  const m = new Set(yr(n, i)),
    h = {};
  return (
    gl(
      h,
      n,
      Reflect.ownKeys(un(n)).filter((g) => !m.has(g)),
    ),
    Hn(n, Ft(r, { shape: h, checks: [] }))
  );
}
function dk(n, i) {
  if (!oi(i))
    throw new Error("Invalid input to extend: expected a plain object");
  const r = n._zod.def.checks;
  if (r && r.length > 0) {
    const f = un(n);
    for (const m of Reflect.ownKeys(i))
      if (Object.getOwnPropertyDescriptor(f, m) !== void 0)
        throw new Error(
          "Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.",
        );
  }
  return Hn(n, Ft(n._zod.def, { shape: Hv(n, i) }));
}
function Hv(n, i) {
  const r = {};
  return (gl(r, n, Reflect.ownKeys(un(n))), nk(r, i), r);
}
function mk(n, i) {
  if (!oi(i))
    throw new Error("Invalid input to safeExtend: expected a plain object");
  return Hn(n, Ft(n._zod.def, { shape: Hv(n, i) }));
}
function hk(n, i) {
  if (!i?._zod?.def)
    throw new Error(
      "Invalid input to merge: expected an object schema. To merge a plain shape, use `.extend()`.",
    );
  if (n._zod.def.checks?.length)
    throw new Error(
      ".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.",
    );
  const r = {};
  (gl(r, n, Reflect.ownKeys(un(n))), gl(r, i, Reflect.ownKeys(un(i))));
  const c = Ft(n._zod.def, {
    shape: r,
    get catchall() {
      return i._zod.def.catchall;
    },
    checks: i._zod.def.checks ?? [],
  });
  return Hn(n, c);
}
function qg(n, i, r, c = "partial") {
  const m = i._zod.def.checks;
  if (m && m.length > 0)
    throw new Error(
      `.${c}() cannot be used on object schemas containing refinements`,
    );
  const g = r ? new Set(yr(i, r)) : void 0,
    y = {};
  return (
    gl(
      y,
      i,
      Reflect.ownKeys(un(i)),
      n &&
        ((v, b) =>
          g && !g.has(b) ? v : new n({ type: "optional", innerType: v })),
    ),
    Hn(i, Ft(i._zod.def, { shape: y, checks: [] }))
  );
}
function pk(n, i, r) {
  const c = r ? new Set(yr(i, r)) : void 0,
    f = {};
  return (
    gl(f, i, Reflect.ownKeys(un(i)), (m, h) =>
      c && !c.has(h) ? m : new n({ type: "nonoptional", innerType: m }),
    ),
    Hn(i, Ft(i._zod.def, { shape: f }))
  );
}
function ln(n, i = 0) {
  if (n.aborted === !0) return !0;
  for (let r = i; r < n.issues.length; r++)
    if (n.issues[r]?.continue !== !0) return !0;
  return !1;
}
function gk(n, i = 0) {
  if (n.aborted === !0) return !0;
  for (let r = i; r < n.issues.length; r++)
    if (n.issues[r]?.continue === !1) return !0;
  return !1;
}
function ci(n, i) {
  return i.map((r) => {
    var c;
    return ((c = r).path ?? (c.path = []), r.path.unshift(n), r);
  });
}
function hu(n) {
  return typeof n == "string" ? n : n?.message;
}
function Yg(n) {
  const i = [];
  for (const r of n ?? []) {
    const c = r._zod.def;
    if (!/_(length|size)$|_equals$/.test(c.check)) break;
    const f = c.maximum ?? c.length ?? c.size;
    f >= 0 && i.push([f, r]);
  }
  return i;
}
function jf(n, i, r) {
  var c;
  for (let f = i; f < n.length; f++) (c = n[f]).schema ?? (c.schema = r);
}
function Un(n, i, r) {
  var c;
  const f = n.inst?._zod?.traits;
  f?.has("$ZodType") &&
    (f.has("$ZodCheck")
      ? ((c = n).schema ?? (c.schema = n.inst))
      : (n.schema = n.inst));
  const m = n.schema !== n.inst ? n.schema?._zod.def?.error : void 0,
    h = n.message
      ? n.message
      : (hu(n.inst?._zod.def?.error?.(n)) ??
        hu(m?.(n)) ??
        hu(i?.error?.(n)) ??
        hu(r.customError?.(n)) ??
        hu(r.localeError?.(n)) ??
        "Invalid input"),
    g = {};
  for (const y of Object.keys(n))
    y === "inst" ||
      y === "schema" ||
      y === "continue" ||
      y === "input" ||
      y === "__proto__" ||
      (g[y] = n[y]);
  return (
    g.path ?? (g.path = []),
    (g.message = h),
    i?.reportInput && (g.input = n.input),
    g
  );
}
const vk = /[\uD800-\uDBFF]/;
function Uf(n) {
  const i = n.length;
  if (!vk.test(n)) return i;
  let r = i;
  for (let c = 0; c < i - 1; c++)
    (n.charCodeAt(c) & 64512) === 55296 &&
      (n.charCodeAt(c + 1) & 64512) === 56320 &&
      (r--, c++);
  return r;
}
function Bf(n) {
  return Array.isArray(n)
    ? "array"
    : typeof n == "string"
      ? "string"
      : "unknown";
}
function yk(n) {
  const i = typeof n;
  switch (i) {
    case "number":
      return Number.isNaN(n) ? "nan" : "number";
    case "object": {
      if (n === null) return "null";
      if (Array.isArray(n)) return "array";
      const r = n;
      if (
        r &&
        Object.getPrototypeOf(r) !== Object.prototype &&
        "constructor" in r &&
        r.constructor
      )
        return r.constructor.name;
    }
  }
  return i;
}
function Su(...n) {
  const [i, r, c] = n;
  return typeof i == "string"
    ? { message: i, code: "custom", input: r, inst: c }
    : { ...i };
}
function bk(n, i) {
  for (const r in i) {
    const c = Object.getOwnPropertyDescriptor(i, r);
    c.get
      ? Object.defineProperty(n, r, { ...c, enumerable: !1 })
      : kk(n, r, c.value);
  }
}
function Bn(n, i, r, c = !0) {
  return (
    Object.defineProperty(n, i, {
      configurable: !0,
      writable: !0,
      enumerable: c,
      value: r,
    }),
    r
  );
}
function Lv(n, i, r) {
  return Bn(n, i, r, !1);
}
function qv(n, i) {
  for (const r in n) {
    const c = n[r];
    Object.defineProperty(i, r, {
      configurable: !0,
      enumerable: !0,
      get() {
        return Bn(this, r, c(this));
      },
      set(f) {
        Bn(this, r, f);
      },
    });
  }
  return i;
}
function kk(n, i, r) {
  Object.defineProperty(n, i, {
    configurable: !0,
    get() {
      return this == null ? r : Bn(this, i, r.bind(this));
    },
    set(c) {
      Bn(this, i, c);
    },
  });
}
function jk(n, i) {
  const r = Object.getPrototypeOf(n);
  return i in r ? void 0 : r;
}
let lf,
  Rn = !1;
const _k = {
  configurable: !0,
  get() {
    Rn = !0;
  },
};
function Ze(n, i, r) {
  const c = Object.getPrototypeOf(n._zod);
  if (i in c && lf !== n._zod) {
    lf = void 0;
    return;
  }
  ((lf = n._zod),
    Object.defineProperty(c, i, {
      configurable: !0,
      get() {
        Object.defineProperty(this, i, _k);
        const f = Rn;
        Rn = !1;
        try {
          const m = r(this);
          return (
            Rn
              ? delete this[i]
              : Object.defineProperty(this, i, {
                  configurable: !0,
                  writable: !0,
                  value: m,
                }),
            (Rn = Rn || f),
            m
          );
        } catch (m) {
          throw (delete this[i], (Rn = Rn || f), m);
        }
      },
      set(f) {
        Object.defineProperty(this, i, {
          configurable: !0,
          writable: !0,
          value: f,
        });
      },
    }));
}
function Sk(n, i, r, c) {
  const f = jk(n, i);
  f &&
    Object.defineProperty(f, i, {
      configurable: !0,
      get() {
        const m = {
          configurable: !0,
          writable: !0,
          enumerable: c,
          value: void 0,
        };
        return (
          Object.defineProperty(this, i, m),
          (m.value = r(this)),
          Object.defineProperty(this, i, m),
          m.value
        );
      },
      set(m) {
        Object.defineProperty(this, i, {
          configurable: !0,
          writable: !0,
          enumerable: c,
          value: m,
        });
      },
    });
}
const xk = "~constantCatch";
function zk(n) {
  const i = () => n;
  return ((i[xk] = !0), i);
}
var $g;
const uf = { value: void 0, enumerable: !1 };
let Vg = "captureStackTrace" in Error ? Error : null;
function Nk(n) {
  const i = Vg;
  if (i) {
    const r = i.stackTraceLimit;
    if (typeof r == "number") {
      try {
        i.stackTraceLimit = 0;
      } catch {
        return ((Vg = null), new n());
      }
      try {
        return new n();
      } finally {
        i.stackTraceLimit = r;
      }
    }
  }
  return new n();
}
function Z(n, i, r, c) {
  const f = {};
  function m(T) {
    ((this.def = T), (this.constr = k), (this.traits = new Set()));
  }
  m.prototype = f;
  const h = r,
    g = h && new WeakSet();
  function y(T, C) {
    if (T._zod) {
      if (T._zod.traits.has(n)) return;
    } else {
      uf.value = new m(C);
      try {
        Object.defineProperty(T, "_zod", uf);
      } finally {
        uf.value = void 0;
      }
    }
    if ((T._zod.traits.add(n), i(T, C), g)) {
      const q = Object.getPrototypeOf(T),
        L = T._zod.constr.prototype;
      let D = q;
      for (; D && D !== L;) D = Object.getPrototypeOf(D);
      const X = D ?? q;
      g.has(X) || (g.add(X), bk(X, h));
    }
    const M = k.prototype;
    for (const q in M)
      Object.prototype.hasOwnProperty.call(M, q) &&
        (q in T || (T[q] = M[q].bind(T)));
  }
  const v = c?.Parent ?? Object;
  class b extends v {}
  Object.defineProperty(b, "name", { value: n });
  function k(T) {
    const C = c?.Parent ? Nk(b) : this;
    y(C, T);
    const M = C._zod.deferred;
    if (M) {
      for (const L of M) L();
      C._zod.deferred = void 0;
    }
    const q = globalThis.__zod_globalConfig?.postProcessor;
    return (q && q(C), C);
  }
  return (
    Object.defineProperty(k, "init", { value: y }),
    Object.defineProperty(k, Symbol.hasInstance, {
      value: (T) =>
        c?.Parent && T instanceof c.Parent ? !0 : T?._zod?.traits?.has(n),
    }),
    Object.defineProperty(k, "name", { value: n }),
    k
  );
}
class pl extends Error {
  constructor() {
    super(
      "Encountered Promise during synchronous parse. Use .parseAsync() instead.",
    );
  }
}
class Yv extends Error {
  constructor(i) {
    (super(`Encountered unidirectional transform during encode: ${i}`),
      (this.name = "ZodEncodeError"));
  }
}
($g = globalThis).__zod_globalConfig ?? ($g.__zod_globalConfig = {});
const ka = globalThis.__zod_globalConfig;
function Ra(n) {
  return (n && Object.assign(ka, n), ka);
}
function Tk() {
  const n = this._zod;
  return (n.message ?? (n.message = JSON.stringify(n.def, kf, 2)), n.message);
}
function Ek(n) {
  this._zod.message = n;
}
const Ok = { get: Tk, set: Ek, enumerable: !0, configurable: !0 },
  sf = { value: void 0, enumerable: !1 },
  Gg = new WeakSet([Object.prototype, Error.prototype]),
  Ak = (n, i) => {
    ((n.name = "$ZodError"),
      (sf.value = i),
      Object.defineProperty(n, "issues", sf),
      (sf.value = void 0),
      Object.defineProperty(n, "message", Ok));
    const r = Object.getPrototypeOf(n);
    Gg.has(r) ||
      (Gg.add(r),
      Object.defineProperty(r, "toString", {
        configurable: !0,
        enumerable: !1,
        get() {
          const c = () => this.message;
          return (
            Object.defineProperty(this, "toString", {
              value: c,
              configurable: !0,
              writable: !0,
            }),
            c
          );
        },
        set(c) {
          Object.defineProperty(this, "toString", {
            value: c,
            configurable: !0,
            writable: !0,
          });
        },
      }));
  },
  wk = Z("$ZodError", Ak);
function Ck(n, i, r) {
  return (
    Object.prototype.hasOwnProperty.call(n, i) ||
      (i === "__proto__"
        ? Object.defineProperty(n, i, {
            value: r(),
            writable: !0,
            enumerable: !0,
            configurable: !0,
          })
        : (n[i] = r())),
    n[i]
  );
}
function Dk(n, i = (r) => r.message) {
  const r = {},
    c = [];
  for (const f of n.issues)
    f.path.length > 0 ? Ck(r, f.path[0], () => []).push(i(f)) : c.push(i(f));
  return { formErrors: c, fieldErrors: r };
}
function Mk(n, i = (r) => r.message) {
  const r = { _errors: [] },
    c = (f, m = []) => {
      for (const h of f.issues)
        if (h.code === "invalid_union" && h.errors.length)
          h.errors.map((g) => c({ issues: g }, [...m, ...h.path]));
        else if (h.code === "invalid_key")
          c({ issues: h.issues }, [...m, ...h.path]);
        else if (h.code === "invalid_element")
          c({ issues: h.issues }, [...m, ...h.path]);
        else {
          const g = [...m, ...h.path];
          if (g.length === 0) r._errors.push(i(h));
          else {
            let y = r,
              v = 0;
            for (; v < g.length;) {
              const b = g[v],
                k = v === g.length - 1;
              if (b === "_errors") {
                (k && y._errors.push(i(h)), v++);
                continue;
              }
              Object.prototype.hasOwnProperty.call(y, b) ||
                Object.defineProperty(y, b, {
                  value: { _errors: [] },
                  enumerable: !0,
                  writable: !0,
                  configurable: !0,
                });
              const T = y[b];
              (k && T._errors.push(i(h)), (y = T), v++);
            }
          }
        }
    };
  return (c(n), r);
}
function br(n, i) {
  return { callee: i?.callee ?? n, Err: i?.Err };
}
const Zf = (n) => {
    const i = (r, c, f, m) => {
      const h = f ? { ...f, async: !1 } : { async: !1 },
        g = r._zod.run({ value: c, issues: [] }, h);
      if (g instanceof Promise) throw new pl();
      if (g.issues.length) {
        const y = new (m?.Err ?? n)(g.issues.map((v) => Un(v, h, Ra())));
        throw (Rv(y, m?.callee ?? i), y);
      }
      return g.value;
    };
    return i;
  },
  Hf = (n) => {
    const i = async (r, c, f, m) => {
      const h = f ? { ...f, async: !0 } : { async: !0 };
      let g = r._zod.run({ value: c, issues: [] }, h);
      if ((g instanceof Promise && (g = await g), g.issues.length)) {
        const y = new (m?.Err ?? n)(g.issues.map((v) => Un(v, h, Ra())));
        throw (Rv(y, m?.callee ?? i), y);
      }
      return g.value;
    };
    return i;
  },
  Lf = (n) => (i, r, c) => {
    const f = c ? { ...c, async: !1 } : { async: !1 },
      m = i._zod.run({ value: r, issues: [] }, f);
    if (m instanceof Promise) throw new pl();
    return m.issues.length
      ? $v(n, m.issues, f)
      : { success: !0, data: m.value };
  };
function $v(n, i, r) {
  let c;
  return {
    success: !1,
    get error() {
      return (
        c ||
          ((c = new n(i.map((f) => Un(f, r, Ra())))),
          (i = void 0),
          (r = void 0)),
        c
      );
    },
    set error(f) {
      ((c = f), (i = void 0), (r = void 0));
    },
  };
}
const qf = (n) => async (i, r, c) => {
    const f = c ? { ...c, async: !0 } : { async: !0 };
    let m = i._zod.run({ value: r, issues: [] }, f);
    return (
      m instanceof Promise && (m = await m),
      m.issues.length ? $v(n, m.issues, f) : { success: !0, data: m.value }
    );
  },
  Rk = Symbol.for("zod.compile.invalid"),
  Uk = Symbol.for("zod.compile.fallback"),
  Bk = (n, i, r) => {
    const c = n._zod.bag.validator;
    if (c !== void 0) {
      if (c(i) !== Rk) return !0;
      if (c.definite === !0 && r === void 0) return !1;
    }
    return Zk(n, i, r);
  };
function Zk(n, i, r) {
  const c = r
      ? { ...r, async: !1, abortEarly: !0 }
      : { async: !1, abortEarly: !0 },
    f = n._zod.bag.fallbackRun;
  let m;
  if (
    (f
      ? ((c[Uk] = !0), (m = f({ value: i, issues: [] }, c)))
      : (m = n._zod.run({ value: i, issues: [] }, c)),
    m instanceof Promise)
  )
    throw new pl();
  return m.issues.length === 0;
}
const Hk = async (n, i, r) => {
    const c = r
      ? { ...r, async: !0, abortEarly: !0 }
      : { async: !0, abortEarly: !0 };
    let f = n._zod.run({ value: i, issues: [] }, c);
    return (f instanceof Promise && (f = await f), f.issues.length === 0);
  },
  Lk = (n) => {
    const i = Zf(n),
      r = (c, f, m, h) => {
        const g = m
          ? { ...m, direction: "backward" }
          : { direction: "backward" };
        return i(c, f, g, br(r, h));
      };
    return r;
  },
  qk = (n) => {
    const i = Zf(n),
      r = (c, f, m, h) => i(c, f, m, br(r, h));
    return r;
  },
  Yk = (n) => {
    const i = Hf(n),
      r = async (c, f, m, h) => {
        const g = m
          ? { ...m, direction: "backward" }
          : { direction: "backward" };
        return await i(c, f, g, br(r, h));
      };
    return r;
  },
  $k = (n) => {
    const i = Hf(n),
      r = async (c, f, m, h) => await i(c, f, m, br(r, h));
    return r;
  },
  Vk = (n) => (i, r, c) => {
    const f = c ? { ...c, direction: "backward" } : { direction: "backward" };
    return Lf(n)(i, r, f);
  },
  Gk = (n) => (i, r, c) => Lf(n)(i, r, c),
  Kk = (n) => async (i, r, c) => {
    const f = c ? { ...c, direction: "backward" } : { direction: "backward" };
    return qf(n)(i, r, f);
  },
  Xk = (n) => async (i, r, c) => qf(n)(i, r, c),
  Qk = /^[cC][0-9a-z]{6,}$/,
  Jk = /^[0-9a-z]+$/,
  Ik = /^[0-7][0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{25}$/,
  Pk = /^[0-9a-vA-V]{20}$/,
  Fk = /^[A-Za-z0-9]{27}$/,
  Wk = /^[a-zA-Z0-9_-]{21}$/;
function ej(n) {
  return new RegExp(`^[a-zA-Z0-9_-]{${n}}$`);
}
const tj =
    /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/,
  aj =
    /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/,
  Kg = (n) =>
    n
      ? new RegExp(
          `^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${n}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`,
        )
      : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,
  nj =
    /^(?:[A-Za-z0-9_'+\-]+\.)*[A-Za-z0-9_'+\-]*[A-Za-z0-9_+-]@(?:[A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/,
  lj =
    "^(?=[\\s\\S]*[\\p{Extended_Pictographic}\\p{Regional_Indicator}\\u20E3])[\\p{Extended_Pictographic}\\p{Emoji_Component}]+$";
function ij() {
  return new RegExp(lj, "u");
}
const uj =
    /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
  sj =
    /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/,
  rj =
    /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/,
  cj =
    /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
  oj =
    /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/,
  fj = /^(?:[A-Za-z0-9_-]{4})*(?:[A-Za-z0-9_-]{2,3})?$/,
  dj = /^https?$/,
  mj = /^\+[1-9]\d{6,14}$/,
  Vv =
    "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))";
function hj(n) {
  return new RegExp(`^${n}$`);
}
const pj = hj(Vv);
function _f(n) {
  const i = "(?:[01]\\d|2[0-3]):[0-5]\\d";
  return typeof n.precision == "number"
    ? n.precision === -1
      ? `${i}`
      : n.precision === 0
        ? `${i}:[0-5]\\d`
        : `${i}:[0-5]\\d\\.\\d{${n.precision}}`
    : n.seconds
      ? `${i}:[0-5]\\d(?:\\.\\d+)?`
      : `${i}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function gj(n) {
  return new RegExp(`^${_f(n)}$`);
}
function vj(n) {
  const i = ["Z"];
  n.offset && i.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
  const r = `${_f({ precision: n.precision, seconds: !0 })}(?:${i.join("|")})`,
    c = n.local ? `${r}|${_f({ precision: n.precision })}` : r;
  return new RegExp(`^${Vv}T(?:${c})$`);
}
const yj = /^[\s\S]{0,}$/,
  bj = /^-?\d+$/,
  Yf = /^-?\d+(?:\.\d+)?$/,
  kj = /^[^A-Z]*$/,
  jj = /^[^a-z]*$/,
  Lt = Z("$ZodCheck", (n, i) => {
    var r;
    (n._zod ?? (n._zod = {}),
      (n._zod.def = i),
      (r = n._zod).onattach ?? (r.onattach = []));
  }),
  $f = (n) => {
    const i = n.value;
    return !tk(i) && i.length !== void 0;
  },
  fr = { number: "number", bigint: "bigint", object: "date" },
  Gv = Z("$ZodCheckLessThan", (n, i) => {
    Lt.init(n, i);
    const r = fr[typeof i.value];
    n._zod.check = (c) => {
      (i.inclusive ? c.value <= i.value : c.value < i.value) ||
        c.issues.push({
          origin: fr[typeof c.value] ?? r,
          code: "too_big",
          maximum: typeof i.value == "object" ? i.value.getTime() : i.value,
          input: c.value,
          inclusive: i.inclusive,
          inst: n,
          continue: !i.abort,
        });
    };
  }),
  Kv = Z("$ZodCheckGreaterThan", (n, i) => {
    Lt.init(n, i);
    const r = fr[typeof i.value];
    n._zod.check = (c) => {
      (i.inclusive ? c.value >= i.value : c.value > i.value) ||
        c.issues.push({
          origin: fr[typeof c.value] ?? r,
          code: "too_small",
          minimum: typeof i.value == "object" ? i.value.getTime() : i.value,
          input: c.value,
          inclusive: i.inclusive,
          inst: n,
          continue: !i.abort,
        });
    };
  }),
  _j = Z("$ZodCheckMultipleOf", (n, i) => {
    (Lt.init(n, i),
      (n._zod.check = (r) => {
        if (typeof r.value != typeof i.value)
          throw new Error("Cannot mix number and bigint in multiple_of check.");
        (typeof r.value == "bigint"
          ? i.value !== BigInt(0) && r.value % i.value === BigInt(0)
          : ak(r.value, i.value) === 0) ||
          r.issues.push({
            origin: typeof r.value,
            code: "not_multiple_of",
            divisor: i.value,
            input: r.value,
            inst: n,
            continue: !i.abort,
          });
      }));
  }),
  Sj = Z("$ZodCheckNumberFormat", (n, i) => {
    (Lt.init(n, i), (i.format = i.format || "float64"));
    const r = i.format?.includes("int"),
      c = r ? "int" : "number",
      [f, m] = Zv[i.format];
    n._zod.check = (h) => {
      const g = h.value;
      if (r) {
        if (!Number.isInteger(g)) {
          h.issues.push({
            expected: c,
            format: i.format,
            code: "invalid_type",
            continue: !1,
            input: g,
            inst: n,
          });
          return;
        }
        if (!Number.isSafeInteger(g)) {
          g > 0
            ? h.issues.push({
                input: g,
                code: "too_big",
                maximum: Number.MAX_SAFE_INTEGER,
                note: "Integers must be within the safe integer range.",
                inst: n,
                origin: c,
                inclusive: !0,
                continue: !i.abort,
              })
            : h.issues.push({
                input: g,
                code: "too_small",
                minimum: Number.MIN_SAFE_INTEGER,
                note: "Integers must be within the safe integer range.",
                inst: n,
                origin: c,
                inclusive: !0,
                continue: !i.abort,
              });
          return;
        }
      }
      (g < f &&
        h.issues.push({
          origin: "number",
          input: g,
          code: "too_small",
          minimum: f,
          inclusive: !0,
          inst: n,
          continue: !i.abort,
        }),
        g > m &&
          h.issues.push({
            origin: "number",
            input: g,
            code: "too_big",
            maximum: m,
            inclusive: !0,
            inst: n,
            continue: !i.abort,
          }));
    };
  }),
  xj = Z("$ZodCheckMaxLength", (n, i) => {
    var r;
    (Lt.init(n, i),
      (r = n._zod.def).when ?? (r.when = $f),
      (n._zod.check = (c) => {
        const f = c.value,
          m = f.length;
        if ((typeof f == "string" && m > i.maximum ? Uf(f) : m) <= i.maximum)
          return;
        const g = Bf(f);
        c.issues.push({
          origin: g,
          code: "too_big",
          maximum: i.maximum,
          inclusive: !0,
          input: f,
          inst: n,
          continue: !i.abort,
        });
      }));
  }),
  zj = Z("$ZodCheckMinLength", (n, i) => {
    var r;
    (Lt.init(n, i),
      (r = n._zod.def).when ?? (r.when = $f),
      (n._zod.check = (c) => {
        const f = c.value,
          m = f.length;
        if (
          (typeof f == "string" && m >= i.minimum && m < i.minimum * 2
            ? Uf(f)
            : m) >= i.minimum
        )
          return;
        const g = Bf(f);
        c.issues.push({
          origin: g,
          code: "too_small",
          minimum: i.minimum,
          inclusive: !0,
          input: f,
          inst: n,
          continue: !i.abort,
        });
      }));
  }),
  Nj = Z("$ZodCheckLengthEquals", (n, i) => {
    var r;
    (Lt.init(n, i),
      (r = n._zod.def).when ?? (r.when = $f),
      (n._zod.check = (c) => {
        const f = c.value,
          m = f.length,
          h =
            typeof f == "string" && m >= i.length && m <= i.length * 2
              ? Uf(f)
              : m;
        if (h === i.length) return;
        const g = Bf(f),
          y = h > i.length;
        c.issues.push({
          origin: g,
          ...(y
            ? { code: "too_big", maximum: i.length }
            : { code: "too_small", minimum: i.length }),
          inclusive: !0,
          exact: !0,
          input: c.value,
          inst: n,
          continue: !i.abort,
        });
      }));
  }),
  kr = Z("$ZodCheckStringFormat", (n, i) => {
    var r, c;
    (Lt.init(n, i),
      i.pattern
        ? ((r = n._zod).check ??
          (r.check = (f) => {
            ((i.pattern.lastIndex = 0),
              !i.pattern.test(f.value) &&
                f.issues.push({
                  origin: "string",
                  code: "invalid_format",
                  format: i.format,
                  input: f.value,
                  ...(i.pattern ? { pattern: i.pattern.toString() } : {}),
                  inst: n,
                  continue: !i.abort,
                }));
          }))
        : ((c = n._zod).check ?? (c.check = () => {})));
  }),
  Tj = Z("$ZodCheckRegex", (n, i) => {
    (kr.init(n, i),
      (n._zod.check = (r) => {
        ((i.pattern.lastIndex = 0),
          !i.pattern.test(r.value) &&
            r.issues.push({
              origin: "string",
              code: "invalid_format",
              format: "regex",
              input: r.value,
              pattern: i.pattern.toString(),
              inst: n,
              continue: !i.abort,
            }));
      }));
  }),
  Ej = Z("$ZodCheckLowerCase", (n, i) => {
    (i.pattern ?? (i.pattern = kj), kr.init(n, i));
  }),
  Oj = Z("$ZodCheckUpperCase", (n, i) => {
    (i.pattern ?? (i.pattern = jj), kr.init(n, i));
  }),
  Aj = Z("$ZodCheckIncludes", (n, i) => {
    Lt.init(n, i);
    const r = vr(i.includes),
      c = new RegExp(
        typeof i.position == "number" ? `^.{${i.position},}${r}` : r,
      );
    ((i.pattern = c),
      (n._zod.check = (f) => {
        f.value.includes(i.includes, i.position) ||
          f.issues.push({
            origin: "string",
            code: "invalid_format",
            format: "includes",
            includes: i.includes,
            input: f.value,
            inst: n,
            continue: !i.abort,
          });
      }));
  }),
  wj = Z("$ZodCheckStartsWith", (n, i) => {
    Lt.init(n, i);
    const r = new RegExp(`^${vr(i.prefix)}.*`);
    (i.pattern ?? (i.pattern = r),
      (n._zod.check = (c) => {
        c.value.startsWith(i.prefix) ||
          c.issues.push({
            origin: "string",
            code: "invalid_format",
            format: "starts_with",
            prefix: i.prefix,
            input: c.value,
            inst: n,
            continue: !i.abort,
          });
      }));
  }),
  Cj = Z("$ZodCheckEndsWith", (n, i) => {
    Lt.init(n, i);
    const r = new RegExp(`.*${vr(i.suffix)}$`);
    (i.pattern ?? (i.pattern = r),
      (n._zod.check = (c) => {
        c.value.endsWith(i.suffix) ||
          c.issues.push({
            origin: "string",
            code: "invalid_format",
            format: "ends_with",
            suffix: i.suffix,
            input: c.value,
            inst: n,
            continue: !i.abort,
          });
      }));
  }),
  Dj = Z("$ZodCheckOverwrite", (n, i) => {
    (Lt.init(n, i),
      (n._zod.check = (r) => {
        r.value = i.tx(r.value);
      }));
  });
class Mj {
  constructor(i = [], r = {}) {
    ((this.content = []),
      (this.indent = 0),
      (this.args = i),
      (this.closed = r));
  }
  indented(i) {
    this.indent += 1;
    try {
      i(this);
    } finally {
      this.indent -= 1;
    }
  }
  write(i) {
    if (typeof i == "function") {
      (i(this, { execution: "sync" }), i(this, { execution: "async" }));
      return;
    }
    const c = i
        .split(
          `
`,
        )
        .filter((h) => h),
      f = Math.min(...c.map((h) => h.length - h.trimStart().length)),
      m = c.map((h) => h.slice(f)).map((h) => " ".repeat(this.indent * 2) + h);
    for (const h of m) this.content.push(h);
  }
  compile() {
    const i = Function,
      r = this?.content ?? [""];
    return new i(
      ...Object.keys(this.closed),
      `return function (${this.args.join(", ")}) {
${r.join(`
`)}
};`,
    )(...Object.values(this.closed));
  }
}
const Rj = { major: 4, minor: 6, patch: 7 },
  tt = Z(
    "$ZodType",
    (n, i) => {
      var r;
      (n ?? (n = {}),
        (n._zod.def = i),
        (n._zod.bag = n._zod.bag || {}),
        (n._zod.version = Rj));
      const c = n._zod.def.checks,
        f = n._zod.traits.has("$ZodCheck")
          ? [n, ...(c ?? [])]
          : c?.length
            ? [...c]
            : [];
      for (const m of f) for (const h of m._zod.onattach) h(n);
      if (f.length === 0)
        ((r = n._zod).deferred ?? (r.deferred = []),
          n._zod.deferred?.push(() => {
            n._zod.run = n._zod.parse;
          }));
      else {
        const m = (g, y, v) => {
            if (g.memo) return g;
            let b = ln(g),
              k;
            for (const T of y) {
              if (T._zod.def.when) {
                if (gk(g) || !T._zod.def.when(g)) continue;
              } else if (b) continue;
              const C = g.issues.length,
                M = T._zod.check(g);
              if (M instanceof Promise && v?.async === !1) throw new pl();
              if (k || M instanceof Promise)
                k = (k ?? Promise.resolve()).then(async () => {
                  (await M,
                    g.issues.length !== C &&
                      (jf(g.issues, C, n), b || (b = ln(g, C))));
                });
              else {
                if (g.issues.length === C) continue;
                (jf(g.issues, C, n), b || (b = ln(g, C)));
              }
            }
            return k ? k.then(() => g) : g;
          },
          h = (g, y, v) => {
            if (ln(g)) return ((g.aborted = !0), g);
            const b = m(y, f, v);
            if (b instanceof Promise) {
              if (v.async === !1) throw new pl();
              return b.then((k) => n._zod.parse(k, v));
            }
            return n._zod.parse(b, v);
          };
        n._zod.run = (g, y) => {
          if (y.skipChecks) return n._zod.parse(g, y);
          if (y.direction === "backward") {
            const b = n._zod.parse(
              { value: g.value, issues: [] },
              { ...y, skipChecks: !0 },
            );
            return b instanceof Promise
              ? b.then((k) => h(k, g, y))
              : h(b, g, y);
          }
          const v = n._zod.parse(g, y);
          if (v instanceof Promise) {
            if (y.async === !1) throw new pl();
            return v.then((b) => m(b, f, y));
          }
          return m(v, f, y);
        };
      }
    },
    {
      get "~standard"() {
        return Lv(this, "~standard", Qv(this));
      },
      set "~standard"(n) {
        Bn(this, "~standard", n);
      },
    },
  ),
  Xv = (n, i) =>
    n.issues.length
      ? { issues: n.issues.map((r) => Un(r, i, Ra())) }
      : { value: n.value };
async function Uj(n, i) {
  const r = { async: !0 };
  return Xv(await n._zod.run({ value: i, issues: [] }, r), r);
}
function Qv(n) {
  return {
    validate: (i) => {
      const r = { async: !1 };
      try {
        const c = n._zod.run({ value: i, issues: [] }, r);
        if (!(c instanceof Promise)) return Xv(c, r);
      } catch {}
      return Uj(n, i);
    },
    vendor: "zod",
    version: 1,
  };
}
const Vf = Z("$ZodString", (n, i) => {
    (tt.init(n, i),
      (n._zod.pattern = i.pattern ?? yj),
      (n._zod.parse = (r, c) => {
        if (i.coerce)
          try {
            r.value = String(r.value);
          } catch {}
        return (
          typeof r.value == "string" ||
            r.issues.push({
              expected: "string",
              code: "invalid_type",
              input: r.value,
              inst: n,
            }),
          r
        );
      }));
  }),
  Ge = Z("$ZodStringFormat", (n, i) => {
    (kr.init(n, i), Vf.init(n, i));
  }),
  Bj = Z("$ZodGUID", (n, i) => {
    (i.pattern ?? (i.pattern = aj), Ge.init(n, i));
  }),
  Zj = Z("$ZodUUID", (n, i) => {
    if (i.version) {
      const c = { v1: 1, v2: 2, v3: 3, v4: 4, v5: 5, v6: 6, v7: 7, v8: 8 }[
        i.version
      ];
      if (c === void 0) throw new Error(`Invalid UUID version: "${i.version}"`);
      i.pattern ?? (i.pattern = Kg(c));
    } else i.pattern ?? (i.pattern = Kg());
    Ge.init(n, i);
  }),
  Hj = Z("$ZodEmail", (n, i) => {
    (i.pattern ?? (i.pattern = nj), Ge.init(n, i));
  }),
  Jv = 1,
  dr = 2;
function Iv(n) {
  try {
    return typeof URL < "u" && typeof URL.canParse == "function"
      ? URL.canParse(n)
      : (new URL(n), !0);
  } catch {
    return !1;
  }
}
function Lj(n, i) {
  return !("normalize" in i) && !("hostname" in i) && !("protocol" in i)
    ? Iv(n) || dr
    : qj(n, i);
}
function qj(n, i) {
  if (
    !i.normalize &&
    i.protocol?.source === dj.source &&
    !/^https?:\/\//i.test(n)
  )
    return Jv;
  try {
    if (typeof URL < "u") {
      const r = URL;
      if (typeof r.parse == "function") return r.parse(n) ?? dr;
    }
    return new URL(n);
  } catch {
    return dr;
  }
}
const Yj = /[\t\n\r]/g;
function Xg(n) {
  return n.replace(Yj, "");
}
function $j(n, i) {
  return ((i.lastIndex = 0), i.test(n.hostname));
}
function Vj(n, i) {
  return (
    (i.lastIndex = 0),
    i.test(n.protocol.endsWith(":") ? n.protocol.slice(0, -1) : n.protocol)
  );
}
const Gj = Z("$ZodURL", (n, i) => {
    (Ge.init(n, i),
      (n._zod.check = (r) => {
        try {
          const c = r.value.trim(),
            f = Lj(c, i);
          if (f === Jv) {
            r.issues.push({
              code: "invalid_format",
              format: "url",
              note: "Invalid URL format",
              input: r.value,
              inst: n,
              continue: !i.abort,
            });
            return;
          }
          if (f === dr) {
            r.issues.push({
              code: "invalid_format",
              format: "url",
              input: r.value,
              inst: n,
              continue: !i.abort,
            });
            return;
          }
          if (f === !0) {
            r.value = Xg(c);
            return;
          }
          (i.hostname &&
            !$j(f, i.hostname) &&
            r.issues.push({
              code: "invalid_format",
              format: "url",
              note: "Invalid hostname",
              pattern: i.hostname.source,
              input: r.value,
              inst: n,
              continue: !i.abort,
            }),
            i.protocol &&
              !Vj(f, i.protocol) &&
              r.issues.push({
                code: "invalid_format",
                format: "url",
                note: "Invalid protocol",
                pattern: i.protocol.source,
                input: r.value,
                inst: n,
                continue: !i.abort,
              }),
            (r.value = i.normalize ? f.href : Xg(c)));
          return;
        } catch {
          r.issues.push({
            code: "invalid_format",
            format: "url",
            input: r.value,
            inst: n,
            continue: !i.abort,
          });
        }
      }));
  }),
  Kj = Z("$ZodEmoji", (n, i) => {
    (i.pattern ?? (i.pattern = ij()), Ge.init(n, i));
  }),
  Xj = Z("$ZodNanoID", (n, i) => {
    if (i.length !== void 0 && (!Number.isInteger(i.length) || i.length < 1))
      throw new Error(`Invalid nanoid length: ${i.length}`);
    (i.pattern ?? (i.pattern = i.length === void 0 ? Wk : ej(i.length)),
      Ge.init(n, i));
  }),
  Qj = Z("$ZodCUID", (n, i) => {
    (i.pattern ?? (i.pattern = Qk), Ge.init(n, i));
  }),
  Jj = Z("$ZodCUID2", (n, i) => {
    (i.pattern ?? (i.pattern = Jk), Ge.init(n, i));
  }),
  Ij = Z("$ZodULID", (n, i) => {
    (i.pattern ?? (i.pattern = Ik), Ge.init(n, i));
  }),
  Pj = Z("$ZodXID", (n, i) => {
    (i.pattern ?? (i.pattern = Pk), Ge.init(n, i));
  }),
  Fj = Z("$ZodKSUID", (n, i) => {
    (i.pattern ?? (i.pattern = Fk), Ge.init(n, i));
  }),
  Wj = Z("$ZodISODateTime", (n, i) => {
    (i.pattern ?? (i.pattern = vj(i)), Ge.init(n, i));
  }),
  e_ = Z("$ZodISODate", (n, i) => {
    (i.pattern ?? (i.pattern = pj), Ge.init(n, i));
  }),
  t_ = Z("$ZodISOTime", (n, i) => {
    (i.pattern ?? (i.pattern = gj(i)), Ge.init(n, i));
  }),
  a_ = Z("$ZodISODuration", (n, i) => {
    (i.pattern ?? (i.pattern = tj), Ge.init(n, i));
  }),
  n_ = Z("$ZodIPv4", (n, i) => {
    (i.pattern ?? (i.pattern = uj), Ge.init(n, i));
  }),
  l_ = /^[0-9a-fA-F:.]+$/;
function Pv(n) {
  return l_.test(n) ? Iv(`http://[${n}]`) : !1;
}
const i_ = Z("$ZodIPv6", (n, i) => {
    (i.pattern ?? (i.pattern = sj),
      Ge.init(n, i),
      (n._zod.check = (r) => {
        Pv(r.value) ||
          r.issues.push({
            code: "invalid_format",
            format: "ipv6",
            input: r.value,
            inst: n,
            continue: !i.abort,
          });
      }));
  }),
  u_ = Z("$ZodCIDRv4", (n, i) => {
    (i.pattern ?? (i.pattern = rj), Ge.init(n, i));
  });
function s_(n) {
  const i = n.split("/");
  if (i.length !== 2) return !1;
  const [r, c] = i;
  if (!c) return !1;
  const f = Number(c);
  return `${f}` !== c || f < 0 || f > 128 ? !1 : Pv(r);
}
const r_ = Z("$ZodCIDRv6", (n, i) => {
  (i.pattern ?? (i.pattern = cj),
    Ge.init(n, i),
    (n._zod.check = (r) => {
      s_(r.value) ||
        r.issues.push({
          code: "invalid_format",
          format: "cidrv6",
          input: r.value,
          inst: n,
          continue: !i.abort,
        });
    }));
});
function Fv(n) {
  if (n === "") return !0;
  if (/\s/.test(n) || n.length % 4 !== 0) return !1;
  try {
    return (atob(n), !0);
  } catch {
    return !1;
  }
}
const Wv = /^[0-9a-zA-Z+/]*={0,2}$/,
  c_ = Z("$ZodBase64", (n, i) => {
    (i.pattern ?? (i.pattern = Wv),
      Ge.init(n, i),
      (n._zod.check = (r) => {
        Fv(r.value) ||
          r.issues.push({
            code: "invalid_format",
            format: "base64",
            input: r.value,
            inst: n,
            continue: !i.abort,
          });
      }));
  }),
  Gf = /^[A-Za-z0-9_-]*$/;
function o_(n) {
  if (!Gf.test(n)) return !1;
  const i = n.replace(/[-_]/g, (c) => (c === "-" ? "+" : "/")),
    r = i.padEnd(Math.ceil(i.length / 4) * 4, "=");
  return Fv(r);
}
const f_ = Z("$ZodBase64URL", (n, i) => {
    (i.pattern ?? (i.pattern = Gf),
      Ge.init(n, i),
      (n._zod.check = (r) => {
        o_(r.value) ||
          r.issues.push({
            code: "invalid_format",
            format: "base64url",
            input: r.value,
            inst: n,
            continue: !i.abort,
          });
      }));
  }),
  d_ = Z("$ZodE164", (n, i) => {
    (i.pattern ?? (i.pattern = mj), Ge.init(n, i));
  });
function m_(n, i = null) {
  try {
    const r = n.split(".");
    if (r.length !== 3) return !1;
    const [c] = r;
    if (!c) return !1;
    const f = JSON.parse(atob(c));
    return !(
      ("typ" in f && f?.typ !== "JWT") ||
      !f.alg ||
      (i && (!("alg" in f) || f.alg !== i))
    );
  } catch {
    return !1;
  }
}
const h_ = Z("$ZodJWT", (n, i) => {
    (Ge.init(n, i),
      (n._zod.check = (r) => {
        m_(r.value, i.alg) ||
          r.issues.push({
            code: "invalid_format",
            format: "jwt",
            input: r.value,
            inst: n,
            continue: !i.abort,
          });
      }));
  }),
  ey = Z("$ZodNumber", (n, i) => {
    (tt.init(n, i),
      (n._zod.pattern = Yf),
      (n._zod.parse = (r, c) => {
        if (i.coerce)
          try {
            r.value = Number(r.value);
          } catch {}
        const f = r.value;
        if (typeof f == "number" && !Number.isNaN(f) && Number.isFinite(f))
          return r;
        const m =
          typeof f == "number"
            ? Number.isNaN(f)
              ? "NaN"
              : Number.isFinite(f)
                ? void 0
                : String(f)
            : void 0;
        return (
          r.issues.push({
            expected: "number",
            code: "invalid_type",
            input: f,
            inst: n,
            ...(m ? { received: m } : {}),
          }),
          r
        );
      }));
  }),
  p_ = Z("$ZodNumberFormat", (n, i) => {
    (Sj.init(n, i), ey.init(n, i));
  }),
  g_ = Z("$ZodUnknown", (n, i) => {
    (tt.init(n, i), (n._zod.parse = (r) => r));
  }),
  v_ = Z("$ZodNever", (n, i) => {
    (tt.init(n, i),
      (n._zod.parse = (r, c) => (
        r.issues.push({
          expected: "never",
          code: "invalid_type",
          input: r.value,
          inst: n,
        }),
        r
      )));
  });
function y_(n, i) {
  const r = Yg(n._zod.def.checks);
  if (!r.length) return;
  const c = Math.min(...r.map((m) => m[0])),
    f = n._zod.parse;
  n._zod.parse = (m, h) => {
    const g = i(m.value);
    if (g > c && !h?.skipChecks && h?.direction !== "backward") {
      for (const [y, v] of Yg(n._zod.def.checks))
        if (g > y && v._zod.def.when(m)) {
          const b = m.issues.length;
          return (
            v._zod.check(m),
            (m.issues[b].continue = !1),
            jf(m.issues, b, n),
            m
          );
        }
    }
    return f(m, h);
  };
}
const b_ = (n) => (Array.isArray(n) ? n.length : -1);
function Qg(n, i, r) {
  (n.issues.length && i.issues.push(...ci(r, n.issues)),
    (i.value[r] = n.value));
}
const k_ = Z("$ZodArray", (n, i) => {
  tt.init(n, i);
  const r = ka.memoizer;
  (r?.attach(n),
    (n._zod.parse = (c, f) => {
      const m = c.value;
      if (!Array.isArray(m))
        return (
          c.issues.push({
            expected: "array",
            code: "invalid_type",
            input: m,
            inst: n,
          }),
          c
        );
      c.value = r ? r.alloc(n, c, Array(m.length), f) : Array(m.length);
      const h = [],
        g = f?.abortEarly;
      for (let y = 0; y < m.length; y++) {
        const v = m[y],
          b = i.element._zod.run({ value: v, issues: [] }, f);
        if (b instanceof Promise) h.push(b.then((k) => Qg(k, c, y)));
        else if ((Qg(b, c, y), g && b.issues.length !== 0 && ln(b))) break;
      }
      return h.length ? Promise.all(h).then(() => c) : c;
    }),
    y_(n, b_));
});
function mr(n, i, r, c, f, m) {
  const h = r in c,
    g = m === "optional";
  if (!(!h && g && f === "optional")) {
    if (n.issues.length) {
      if (f !== void 0 && g && !h) return;
      i.issues.push(...ci(r, n.issues));
    }
    if (!h && f === void 0) {
      n.issues.length ||
        i.issues.push({
          code: "invalid_type",
          expected: "nonoptional",
          input: void 0,
          path: [r],
        });
      return;
    }
    n.value === void 0
      ? (h || (f === "defaulted" && !g)) && (i.value[r] = void 0)
      : (i.value[r] = n.value);
  }
}
const j_ = [];
function ty(n) {
  const i = Object.keys(n.shape),
    r = Object.getOwnPropertySymbols(n.shape),
    c = r.length ? r : j_,
    f = c.length ? [...i, ...c] : i;
  for (const h of f)
    if (!n.shape?.[h]?._zod?.traits?.has("$ZodType"))
      throw new Error(
        `Invalid element at key "${String(h)}": expected a Zod schema`,
      );
  const m = rk(n.shape);
  return {
    ...n,
    allKeys: f,
    symbolKeys: c,
    keySet: new Set(i),
    numKeys: i.length,
    optionalKeys: new Set(m),
  };
}
function ay(n, i, r, c, f, m, h) {
  const g = [],
    y = f.keySet,
    v = f.catchall._zod,
    b = v.def.type,
    k = v.optin,
    T = v.optout;
  let C = 0;
  for (const M in i) {
    if (h && r.issues.length !== C) {
      if (ln(r, C)) break;
      C = r.issues.length;
    }
    if (y.has(M)) continue;
    if (M === "__proto__") {
      b === "never" && g.push(M);
      continue;
    }
    if (b === "never") {
      g.push(M);
      continue;
    }
    const q = v.run({ value: i[M], issues: [] }, c);
    q instanceof Promise
      ? n.push(q.then((L) => mr(L, r, M, i, k, T)))
      : mr(q, r, M, i, k, T);
  }
  return (
    g.length &&
      r.issues.push({
        code: "unrecognized_keys",
        keys: g,
        input: i,
        inst: m,
        continue: !0,
      }),
    n.length ? Promise.all(n).then(() => r) : r
  );
}
const __ = Z("$ZodObject", (n, i) => {
    tt.init(n, i);
    const r = Object.getOwnPropertyDescriptor(i, "shape"),
      c = r?.get ? r.get.raw : (i.shape ?? {});
    if (c) {
      const v = () => {
        const b = { ...c };
        return (
          Object.defineProperty(i, "shape", { value: b }),
          (v.raw = b),
          b
        );
      };
      ((v.raw = c), Object.defineProperty(i, "shape", { get: v }));
    }
    const f = Mf(() => ty(i));
    Ze(n, "propValues", (v) => {
      const b = v.def.shape,
        k = {};
      for (const T in b) {
        const C = b[T]._zod;
        if (C.values) {
          Object.prototype.hasOwnProperty.call(k, T) || Zn(k, T, new Set());
          for (const M of C.values) k[T].add(M);
          C.optin !== void 0 && k[T].add(void 0);
        }
      }
      return k;
    });
    const m = or,
      h = i.catchall;
    let g;
    const y = ka.memoizer;
    (y?.attach(n),
      (n._zod.parse = (v, b) => {
        g ?? (g = f.value);
        const k = v.value;
        if (!m(k))
          return (
            v.issues.push({
              expected: "object",
              code: "invalid_type",
              input: k,
              inst: n,
            }),
            v
          );
        v.value = y ? y.alloc(n, v, {}, b) : {};
        const T = [],
          C = g.shape,
          M = b?.abortEarly;
        let q = v.issues.length;
        for (const L of g.allKeys) {
          if (M && v.issues.length !== q) {
            if (ln(v, q)) break;
            q = v.issues.length;
          }
          if (L === "__proto__") continue;
          const D = C[L],
            X = D._zod.optin,
            ye = D._zod.optout,
            Ae = D._zod.run({ value: k[L], issues: [] }, b);
          Ae instanceof Promise
            ? T.push(Ae.then((de) => mr(de, v, L, k, X, ye)))
            : mr(Ae, v, L, k, X, ye);
        }
        return h
          ? ay(T, k, v, b, f.value, n, M === !0)
          : T.length
            ? Promise.all(T).then(() => v)
            : v;
      }));
  }),
  S_ = Z("$ZodObjectJIT", (n, i) => {
    __.init(n, i);
    const r = n._zod.parse,
      c = Mf(() => ty(i)),
      f = ka.memoizer,
      m = (C) => {
        const M = c.value,
          q = M.symbolKeys,
          L = new Mj(["payload", "ctx"], {
            shape: C,
            inst: n,
            memo: f,
            syms: q,
          }),
          D = (de) =>
            `shape[${de}]._zod.run({ value: input[${de}], issues: [] }, ctx)`,
          X = (de, ce) => `
          let ${de}_ab = false;
          for (let i = 0; i < ${de}.issues.length; i++) {
            const iss = ${de}.issues[i];
            iss.path = iss.path ? [${ce}, ...iss.path] : [${ce}];
            payload.issues.push(iss);
            if (iss.continue !== true) ${de}_ab = true;
          }
          if (${de}_ab && ctx && ctx.abortEarly) {
            payload.value = newResult;
            return payload;
          }`;
        L.write("const input = payload.value;");
        const ye = Object.create(null);
        let Ae = 0;
        for (const de of M.allKeys) ye[de] = `key_${Ae++}`;
        L.write(
          f
            ? "const newResult = memo.alloc(inst, payload, {}, ctx);"
            : "const newResult = {};",
        );
        for (const de of M.allKeys) {
          if (de === "__proto__") continue;
          const ce = ye[de],
            ae = typeof de == "symbol" ? `syms[${q.indexOf(de)}]` : lk(de),
            se = `${ae} in input`,
            ct = C[de],
            Fe = ct?._zod?.optin,
            Se = Fe !== void 0,
            Ke = ct?._zod?.optout === "optional";
          if ((L.write(`const ${ce} = ${D(ae)};`), Se && Ke)) {
            const he =
              Fe === "optional"
                ? `${ce}_present`
                : `${ce}.value !== undefined || ${ce}_present`;
            L.write(`
        const ${ce}_present = ${se};
        if (!${ce}.issues.length || ${ce}_present) {
          if (${ce}.issues.length) {${X(ce, ae)}
          }

          if (${he}) {
            newResult[${ae}] = ${ce}.value;
          }
        }

      `);
          } else
            Se
              ? (L.write(`
        if (${ce}.issues.length) {${X(ce, ae)}
        }
      `),
                Fe === "defaulted"
                  ? L.write(`newResult[${ae}] = ${ce}.value;`)
                  : L.write(`
        if (${ce}.value !== undefined || ${se}) {
          newResult[${ae}] = ${ce}.value;
        }
      `))
              : L.write(`
        const ${ce}_present = ${se};
        if (${ce}.issues.length) {${X(ce, ae)}
        }
        if (!${ce}_present && !${ce}.issues.length) {
          payload.issues.push({
            code: "invalid_type",
            expected: "nonoptional",
            input: undefined,
            path: [${ae}]
          });
          if (ctx && ctx.abortEarly) {
            payload.value = newResult;
            return payload;
          }
        }

        if (${ce}_present) {
          newResult[${ae}] = ${ce}.value;
        }

      `);
        }
        return (
          L.write("payload.value = newResult;"),
          L.write("return payload;"),
          L.compile()
        );
      };
    let h;
    const g = or,
      y = !ka.jitless,
      b = y && uk.value,
      k = i.catchall;
    let T;
    n._zod.parse = (C, M) => {
      T ?? (T = c.value);
      const q = C.value;
      return g(q)
        ? y && b && M?.async === !1 && M.jitless !== !0
          ? (h || (h = m(i.shape)),
            (C = h(C, M)),
            k ? ay([], q, C, M, T, n, M?.abortEarly === !0) : C)
          : r(C, M)
        : (C.issues.push({
            expected: "object",
            code: "invalid_type",
            input: q,
            inst: n,
          }),
          C);
    };
  });
function Jg(n, i, r, c) {
  for (const m of n) if (m.issues.length === 0) return ((i.value = m.value), i);
  const f = n.filter((m) => !ln(m));
  return f.length === 1
    ? ((i.value = f[0].value), f[0])
    : (i.issues.push({
        code: "invalid_union",
        input: i.value,
        inst: r,
        errors: n.map((m) => m.issues.map((h) => Un(h, c, Ra()))),
      }),
      i);
}
const x_ = Z("$ZodUnion", (n, i) => {
    (tt.init(n, i),
      Ze(n, "optin", (c) =>
        c.def.options.some((f) => f._zod.optin === "defaulted")
          ? "defaulted"
          : c.def.options.some((f) => f._zod.optin !== void 0)
            ? "optional"
            : void 0,
      ),
      Ze(n, "optout", (c) =>
        c.def.options.some((f) => f._zod.optout === "optional")
          ? "optional"
          : void 0,
      ),
      Ze(n, "values", (c) => {
        if (c.def.options.every((f) => f._zod.values))
          return new Set(
            c.def.options.flatMap((f) => Array.from(f._zod.values)),
          );
      }),
      Ze(n, "pattern", (c) => {
        if (c.def.options.every((f) => f._zod.pattern)) {
          const f = c.def.options.map((m) => m._zod.pattern);
          return new RegExp(`^(${f.map((m) => Rf(m.source)).join("|")})$`);
        }
      }));
    const r = i.options.length === 1 ? i.options[0]._zod.run : null;
    n._zod.parse = (c, f) => {
      if (r) return r(c, f);
      let m = !1;
      const h = [];
      for (const g of i.options) {
        const y = g._zod.run({ value: c.value, issues: [] }, f);
        if (y instanceof Promise) (h.push(y), (m = !0));
        else {
          if (y.issues.length === 0) return y;
          h.push(y);
        }
      }
      return m ? Promise.all(h).then((g) => Jg(g, c, n, f)) : Jg(h, c, n, f);
    };
  }),
  z_ = Z("$ZodIntersection", (n, i) => {
    (tt.init(n, i),
      (n._zod.parse = (r, c) => {
        const f = r.value,
          m = i.left._zod.run({ value: f, issues: [] }, c),
          h = i.right._zod.run({ value: f, issues: [] }, c);
        return m instanceof Promise || h instanceof Promise
          ? Promise.all([m, h]).then(([y, v]) => Ig(r, y, v))
          : Ig(r, m, h);
      }));
  });
function Sf(n, i) {
  if (n === i) return { valid: !0, data: n };
  if (n instanceof Date && i instanceof Date && +n == +i)
    return { valid: !0, data: n };
  if (oi(n) && oi(i)) {
    const r = Object.keys(i),
      c = Object.keys(n).filter((m) => r.indexOf(m) !== -1),
      f = { ...n, ...i };
    Object.prototype.hasOwnProperty.call(f, "__proto__") && delete f.__proto__;
    for (const m of c) {
      if (m === "__proto__") continue;
      const h = Sf(n[m], i[m]);
      if (!h.valid)
        return { valid: !1, mergeErrorPath: [m, ...h.mergeErrorPath] };
      f[m] = h.data;
    }
    return { valid: !0, data: f };
  }
  if (Array.isArray(n) && Array.isArray(i)) {
    if (n.length !== i.length) return { valid: !1, mergeErrorPath: [] };
    const r = [];
    for (let c = 0; c < n.length; c++) {
      const f = n[c],
        m = i[c],
        h = Sf(f, m);
      if (!h.valid)
        return { valid: !1, mergeErrorPath: [c, ...h.mergeErrorPath] };
      r.push(h.data);
    }
    return { valid: !0, data: r };
  }
  return { valid: !1, mergeErrorPath: [] };
}
function Ig(n, i, r) {
  const c = new Map();
  let f;
  const m = new Map(),
    h = (v, b) => {
      let k;
      if (v.code === "unrecognized_keys" && !v.path?.length)
        (f ?? (f = v), (k = v.keys));
      else if (
        v.code === "invalid_key" &&
        v.origin === "record" &&
        v.path?.length === 1
      ) {
        const T = String(v.path[0]);
        (m.has(T) || m.set(T, v), (k = [T]));
      } else return !1;
      for (const T of k) (c.has(T) || c.set(T, {}), (c.get(T)[b] = !0));
      return !0;
    };
  for (const v of i.issues) h(v, "l") || n.issues.push(v);
  for (const v of r.issues) h(v, "r") || n.issues.push(v);
  const g = [...c].filter(([, v]) => v.l && v.r).map(([v]) => v);
  if (g.length) {
    const v = f ? g.filter((b) => f.keys.includes(b)) : [];
    v.length && n.issues.push({ ...f, keys: v });
    for (const b of g) !v.includes(b) && m.has(b) && n.issues.push(m.get(b));
  }
  const y = Sf(i.value, r.value);
  if (!y.valid) {
    if (ln(n)) return n;
    throw new Error(
      `Unmergable intersection. Error path: ${JSON.stringify(y.mergeErrorPath)}`,
    );
  }
  return ((n.value = y.data), n);
}
const N_ = Z("$ZodRecord", (n, i) => {
    tt.init(n, i);
    const r = ka.memoizer;
    (r?.attach(n),
      (n._zod.parse = (c, f) => {
        const m = c.value;
        if (!oi(m))
          return (
            c.issues.push({
              expected: "record",
              code: "invalid_type",
              input: m,
              inst: n,
            }),
            c
          );
        const h = [],
          g = i.keyType._zod.values;
        if (g && !i.partial) {
          c.value = r ? r.alloc(n, c, {}, f) : {};
          const y = new Set();
          for (const b of g)
            if (
              typeof b == "string" ||
              typeof b == "number" ||
              typeof b == "symbol"
            ) {
              if (
                (y.add(typeof b == "number" ? b.toString() : b),
                b === "__proto__")
              )
                continue;
              const k = i.keyType._zod.run({ value: b, issues: [] }, f);
              if (k instanceof Promise)
                throw new Error(
                  "Async schemas not supported in object keys currently",
                );
              if (k.issues.length) {
                c.issues.push({
                  code: "invalid_key",
                  origin: "record",
                  issues: k.issues.map((M) => Un(M, f, Ra())),
                  input: b,
                  path: [b],
                  inst: n,
                });
                continue;
              }
              const T = k.value;
              if (T === "__proto__") continue;
              const C = i.valueType._zod.run({ value: m[b], issues: [] }, f);
              C instanceof Promise
                ? h.push(
                    C.then((M) => {
                      (M.issues.length && c.issues.push(...ci(b, M.issues)),
                        (c.value[T] = M.value));
                    }),
                  )
                : (C.issues.length && c.issues.push(...ci(b, C.issues)),
                  (c.value[T] = C.value));
            }
          let v;
          for (const b in m)
            if (!y.has(b))
              if (i.mode === "loose") {
                if (b === "__proto__") continue;
                c.value[b] = m[b];
              } else ((v = v ?? []), v.push(b));
          v &&
            v.length > 0 &&
            c.issues.push({
              code: "unrecognized_keys",
              input: m,
              inst: n,
              keys: v,
              continue: !0,
            });
        } else {
          c.value = r ? r.alloc(n, c, {}, f) : {};
          let y;
          for (const v of Reflect.ownKeys(m)) {
            if (
              v === "__proto__" ||
              !Object.prototype.propertyIsEnumerable.call(m, v)
            )
              continue;
            let b = i.keyType._zod.run({ value: v, issues: [] }, f);
            if (b instanceof Promise)
              throw new Error(
                "Async schemas not supported in object keys currently",
              );
            if (typeof v == "string" && Yf.test(v) && b.issues.length) {
              const M = i.keyType._zod.run({ value: Number(v), issues: [] }, f);
              if (M instanceof Promise)
                throw new Error(
                  "Async schemas not supported in object keys currently",
                );
              M.issues.length === 0 && (b = M);
            }
            if (b.issues.length) {
              i.mode === "loose"
                ? (c.value[v] = m[v])
                : g
                  ? ((y = y ?? []), y.push(v))
                  : c.issues.push({
                      code: "invalid_key",
                      origin: "record",
                      issues: b.issues.map((M) => Un(M, f, Ra())),
                      input: v,
                      path: [v],
                      inst: n,
                    });
              continue;
            }
            const T = b.value;
            if (T === "__proto__") continue;
            const C = i.valueType._zod.run({ value: m[v], issues: [] }, f);
            C instanceof Promise
              ? h.push(
                  C.then((M) => {
                    (M.issues.length && c.issues.push(...ci(v, M.issues)),
                      (c.value[T] = M.value));
                  }),
                )
              : (C.issues.length && c.issues.push(...ci(v, C.issues)),
                (c.value[T] = C.value));
          }
          y &&
            y.length > 0 &&
            c.issues.push({
              code: "unrecognized_keys",
              input: m,
              inst: n,
              keys: y,
              continue: !0,
            });
        }
        return h.length ? Promise.all(h).then(() => c) : c;
      }));
  }),
  T_ = Z("$ZodEnum", (n, i) => {
    tt.init(n, i);
    const r = bf(i.entries),
      c = new Set(r);
    ((n._zod.values = c),
      Ze(n, "pattern", (f) => {
        const m = bf(f.def.entries).filter((h) => sk.has(typeof h));
        return new RegExp(
          m.length
            ? `^(${m.map((h) => vr(h.toString())).join("|")})$`
            : "^[^\\s\\S]$",
        );
      }),
      (n._zod.parse = (f, m) => {
        const h = f.value;
        return (
          c.has(h) ||
            f.issues.push({
              code: "invalid_value",
              values: r,
              input: h,
              inst: n,
            }),
          f
        );
      }));
  }),
  E_ = Z("$ZodTransform", (n, i) => {
    (tt.init(n, i),
      (n._zod.optin = "optional"),
      ka.memoizer?.guard(n),
      (n._zod.parse = (r, c) => {
        if (c.direction === "backward") throw new Yv(n.constructor.name);
        const f = i.transform(r.value, r);
        if (c.async)
          return (f instanceof Promise ? f : Promise.resolve(f)).then(
            (h) => ((r.value = h), r),
          );
        if (f instanceof Promise) throw new pl();
        return ((r.value = f), r);
      }));
  });
function Pg(n, i) {
  return ((n.value = i.issues.length ? void 0 : i.value), n);
}
const ny = Z("$ZodOptional", (n, i) => {
    (tt.init(n, i),
      Ze(n, "optin", (r) =>
        r.def.innerType._zod.optin === "defaulted" ? "defaulted" : "optional",
      ),
      (n._zod.optout = "optional"),
      Ze(n, "values", (r) => {
        const c = r.def.innerType._zod.values;
        return c ? new Set([...c, void 0]) : void 0;
      }),
      Ze(n, "pattern", (r) => {
        const c = r.def.innerType._zod.pattern;
        return c ? new RegExp(`^(${Rf(c.source)})?$`) : void 0;
      }),
      (n._zod.parse = (r, c) => {
        if (r.value === void 0) {
          if (i.innerType._zod.optin !== "defaulted") return r;
          const f = i.innerType._zod.run({ value: r.value, issues: [] }, c);
          return f instanceof Promise ? f.then((m) => Pg(r, m)) : Pg(r, f);
        }
        return i.innerType._zod.run(r, c);
      }));
  }),
  O_ = Z("$ZodExactOptional", (n, i) => {
    (ny.init(n, i),
      Ze(n, "values", (r) => r.def.innerType._zod.values),
      Ze(n, "pattern", (r) => r.def.innerType._zod.pattern),
      (n._zod.parse = (r, c) => i.innerType._zod.run(r, c)));
  }),
  A_ = Z("$ZodNullable", (n, i) => {
    (tt.init(n, i),
      Ze(n, "optin", (r) => r.def.innerType._zod.optin),
      Ze(n, "optout", (r) => r.def.innerType._zod.optout),
      Ze(n, "pattern", (r) => {
        const c = r.def.innerType._zod.pattern;
        return c ? new RegExp(`^(${Rf(c.source)}|null)$`) : void 0;
      }),
      Ze(n, "values", (r) =>
        r.def.innerType._zod.values
          ? new Set([...r.def.innerType._zod.values, null])
          : void 0,
      ),
      (n._zod.parse = (r, c) =>
        r.value === null ? r : i.innerType._zod.run(r, c)));
  }),
  w_ = Z("$ZodDefault", (n, i) => {
    (tt.init(n, i),
      (n._zod.optin = "defaulted"),
      Ze(n, "values", (r) => r.def.innerType._zod.values),
      (n._zod.parse = (r, c) => {
        if (c.direction === "backward") return i.innerType._zod.run(r, c);
        if (r.value === void 0) return ((r.value = i.defaultValue), r);
        const f = i.innerType._zod.run(r, c);
        return f instanceof Promise ? f.then((m) => Fg(m, i)) : Fg(f, i);
      }));
  });
function Fg(n, i) {
  return (n.value === void 0 && (n.value = i.defaultValue), n);
}
const C_ = Z("$ZodPrefault", (n, i) => {
    (tt.init(n, i),
      (n._zod.optin = "defaulted"),
      Ze(n, "values", (r) => r.def.innerType._zod.values),
      (n._zod.parse = (r, c) => (
        c.direction === "backward" ||
          (r.value === void 0 && (r.value = i.defaultValue)),
        i.innerType._zod.run(r, c)
      )));
  }),
  D_ = Z("$ZodNonOptional", (n, i) => {
    (tt.init(n, i),
      Ze(n, "values", (r) => {
        const c = r.def.innerType._zod.values;
        return c ? new Set([...c].filter((f) => f !== void 0)) : void 0;
      }),
      (n._zod.parse = (r, c) => {
        const f = i.innerType._zod.run(r, c);
        return f instanceof Promise ? f.then((m) => Wg(m, n)) : Wg(f, n);
      }));
  });
function Wg(n, i) {
  return (
    !n.issues.length &&
      n.value === void 0 &&
      n.issues.push({
        code: "invalid_type",
        expected: "nonoptional",
        input: n.value,
        inst: i,
      }),
    n
  );
}
function ev(n, i, r, c) {
  return i.issues.length
    ? ((n.value = r.catchValue({
        ...i,
        value: n.value,
        error: { issues: i.issues.map((f) => Un(f, c, Ra())) },
        input: n.value,
      })),
      n)
    : ((n.value = i.value), i.memo && (n.memo = !0), n);
}
const M_ = Z("$ZodCatch", (n, i) => {
    (tt.init(n, i),
      Ze(n, "optin", (r) =>
        r.def.innerType._zod.optin === "defaulted" ? "defaulted" : "optional",
      ),
      Ze(n, "optout", (r) => r.def.innerType._zod.optout),
      Ze(n, "values", (r) => r.def.innerType._zod.values),
      (n._zod.parse = (r, c) => {
        if (c.direction === "backward") return i.innerType._zod.run(r, c);
        const f = i.innerType._zod.run({ value: r.value, issues: [] }, c);
        return f instanceof Promise
          ? f.then((m) => ev(r, m, i, c))
          : ev(r, f, i, c);
      }));
  }),
  R_ = Z("$ZodPipe", (n, i) => {
    (tt.init(n, i),
      Ze(n, "values", (r) => r.def.in._zod.values),
      Ze(n, "optin", (r) => r.def.in._zod.optin),
      Ze(n, "optout", (r) => r.def.out._zod.optout),
      Ze(n, "propValues", (r) => r.def.in._zod.propValues),
      (n._zod.parse = (r, c) => {
        if (c.direction === "backward") {
          const m = i.out._zod.run(r, c);
          return m instanceof Promise
            ? m.then((h) => ar(h, i.in, c))
            : ar(m, i.in, c);
        }
        const f = i.in._zod.run(r, c);
        return f instanceof Promise
          ? f.then((m) => ar(m, i.out, c))
          : ar(f, i.out, c);
      }));
  });
function ar(n, i, r) {
  return n.issues.some((c) => c.code !== "unrecognized_keys")
    ? ((n.aborted = !0), n)
    : i._zod.run({ value: n.value, issues: n.issues }, r);
}
const U_ = Z("$ZodReadonly", (n, i) => {
  (tt.init(n, i),
    Ze(n, "propValues", (r) => r.def.innerType._zod.propValues),
    Ze(n, "values", (r) => r.def.innerType._zod.values),
    Ze(n, "optin", (r) => r.def.innerType?._zod?.optin),
    Ze(n, "optout", (r) => r.def.innerType?._zod?.optout),
    (n._zod.parse = (r, c) => {
      if (c.direction === "backward") return i.innerType._zod.run(r, c);
      const f = i.innerType._zod.run(r, c);
      return f instanceof Promise ? f.then(tv) : tv(f);
    }));
});
function tv(n) {
  return (n.memo || (n.value = Object.freeze(n.value)), n);
}
const B_ = Z("$ZodCustom", (n, i) => {
  (Lt.init(n, i),
    tt.init(n, i),
    (n._zod.parse = (r, c) => r),
    (n._zod.check = (r) => {
      const c = r.value,
        f = i.fn(c);
      if (f instanceof Promise) return f.then((m) => av(m, r, c, n));
      av(f, r, c, n);
    }));
});
function av(n, i, r, c) {
  if (!n) {
    const f = {
      code: "custom",
      input: r,
      inst: c,
      path: [...(c._zod.def.path ?? [])],
      continue: !c._zod.def.abort,
    };
    (c._zod.def.params && (f.params = c._zod.def.params), i.issues.push(Su(f)));
  }
}
class Z_ extends Error {
  constructor() {
    (super("Cannot parse a reference cycle that closes through a transform"),
      (this.name = "ZodCyclicError"));
  }
}
const xf = "~memo",
  nv = [];
function ly(n) {
  return n !== null && typeof n == "object";
}
function rf(n) {
  return n.map((i) => (i.path ? { ...i, path: i.path.slice() } : { ...i }));
}
const iy = new WeakMap(),
  yu = 0,
  rr = 1,
  ku = 2;
function cr(n, i, r) {
  const c = iy.get(n);
  if (c !== void 0) return c ? ku : yu;
  if (i.has(n)) return ku;
  i.add(n);
  let f = yu;
  const m = (b) => {
      if (f !== ku && b?._zod) {
        const k = cr(b, i);
        k > f && (f = k);
      }
    },
    h = (b, k) => {
      let T = yu;
      for (const C of Reflect.ownKeys(b)) {
        const M = Object.getOwnPropertyDescriptor(b, C);
        if (!M.enumerable) continue;
        const q = M.get ? rr : M.value?._zod ? cr(M.value, i) : yu;
        q > T && (T = q);
      }
      return T;
    },
    g = (b) => {
      b > f && (f = b);
    },
    y = n._zod.def;
  switch (y.type) {
    case "object": {
      const b = Cv(y);
      (g(b ? h(b) : rr), m(y.catchall));
      break;
    }
    case "array":
      m(y.element);
      break;
    case "tuple":
      for (const b of y.items) m(b);
      m(y.rest);
      break;
    case "record":
    case "map":
      (m(y.keyType), m(y.valueType));
      break;
    case "set":
      m(y.valueType);
      break;
    case "union":
      for (const b of y.options) m(b);
      break;
    case "intersection":
      (m(y.left), m(y.right));
      break;
    case "optional":
    case "nullable":
    case "default":
    case "prefault":
    case "catch":
    case "readonly":
    case "nonoptional":
    case "promise":
    case "success":
      m(y.innerType);
      break;
    case "pipe":
      (m(y.in), m(y.out));
      break;
    case "function":
      (m(y.input), m(y.output));
      break;
    case "lazy": {
      const b = y._cachedInner ?? void 0;
      g(b ? cr(b, i) : rr);
      break;
    }
    case "template_literal":
    case "string":
    case "number":
    case "int":
    case "boolean":
    case "bigint":
    case "symbol":
    case "undefined":
    case "null":
    case "void":
    case "never":
    case "any":
    case "unknown":
    case "date":
    case "nan":
    case "enum":
    case "literal":
    case "file":
    case "transform":
    case "custom":
      break;
    default:
      for (const b in y) {
        const k = Object.getOwnPropertyDescriptor(y, b);
        if (!k || k.get) continue;
        const T = k.value;
        if (!(!T || typeof T != "object")) {
          if (T._zod) m(T);
          else if (Array.isArray(T)) for (const C of T) m(C);
        }
      }
  }
  return (i.delete(n), H_(n, f));
}
function H_(n, i) {
  return (i !== rr && iy.set(n, i === ku), i);
}
function L_(n, i) {
  let r = n.buckets.get(i);
  return (r || ((r = new WeakMap()), n.buckets.set(i, r)), r);
}
let nr;
const lr = [],
  q_ = {
    alloc(n, i, r) {
      const c = nr;
      if (!c) return r;
      nr = void 0;
      const f = { value: r, issues: null };
      return (c.set(i.value, f), lr.push(f), r);
    },
    guard(n) {
      var i;
      ((i = n._zod).deferred ?? (i.deferred = []),
        n._zod.deferred.push(() => {
          const r = n._zod.parse,
            c = (f, m) => {
              if (m.direction !== "backward" && $_(m, f.value)) throw new Z_();
              return r(f, m);
            };
          ((n._zod.parse = c), n._zod.run === r && (n._zod.run = c));
        }));
    },
    attach(n) {
      var i;
      let r,
        c = !1,
        f,
        m;
      ((i = n._zod).deferred ?? (i.deferred = []),
        n._zod.deferred.push(() => {
          const h = n._zod.parse,
            g = (y, v) => {
              if (r === void 0) {
                const D = cr(n, new Set());
                if (D === yu)
                  return (
                    (n._zod.parse = h),
                    n._zod.run === g && (n._zod.run = h),
                    h(y, v)
                  );
                D === ku || c ? (r = !0) : (c = !0);
              }
              const b = y.value;
              if (!ly(b)) return h(y, v);
              let k = v[xf];
              k ||
                ((k = { buckets: new WeakMap(), backEdges: void 0 }),
                (v[xf] = k));
              let T;
              f === v ? (T = m) : ((T = L_(k, n)), (f = v), (m = T));
              const C = T.get(b);
              if (C)
                return (
                  (y.value = C.value),
                  C.issues
                    ? C.issues.length && y.issues.push(...rf(C.issues))
                    : ((y.memo = !0),
                      k.backEdges ?? (k.backEdges = new WeakSet()),
                      k.backEdges.add(C.value)),
                  y
                );
              nr = T;
              const M = lr.length,
                q = h(y, v);
              nr = void 0;
              const L = lr.length > M ? lr.pop() : void 0;
              return q instanceof Promise
                ? q.then(
                    (D) => (
                      L && (L.issues = D.issues.length ? rf(D.issues) : nv),
                      D
                    ),
                  )
                : (L && (L.issues = q.issues.length ? rf(q.issues) : nv), q);
            };
          ((n._zod.parse = g), n._zod.run === h && (n._zod.run = g));
        }));
    },
  };
function Y_() {
  return q_;
}
function $_(n, i) {
  const r = n[xf]?.backEdges;
  return r !== void 0 && ly(i) && r.has(i);
}
const V_ = () => {
  const n = {
    string: { unit: "characters", verb: "to have" },
    file: { unit: "bytes", verb: "to have" },
    array: { unit: "items", verb: "to have" },
    set: { unit: "items", verb: "to have" },
    map: { unit: "entries", verb: "to have" },
  };
  function i(m) {
    return n[m] ?? null;
  }
  const r = {
      regex: "input",
      email: "email address",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO datetime",
      date: "ISO date",
      time: "ISO time",
      duration: "ISO duration",
      ipv4: "IPv4 address",
      ipv6: "IPv6 address",
      mac: "MAC address",
      cidrv4: "IPv4 range",
      cidrv6: "IPv6 range",
      base64: "base64-encoded string",
      base64url: "base64url-encoded string",
      json_string: "JSON string",
      e164: "E.164 number",
      currency_code: "currency code",
      credit_card: "credit card number",
      iban: "IBAN",
      jwt: "JWT",
      template_literal: "input",
    },
    c = { nan: "NaN" };
  function f(m, h) {
    return m === "number" && typeof h == "number" && !Number.isFinite(h)
      ? String(h)
      : (c[m] ?? m);
  }
  return (m) => {
    switch (m.code) {
      case "invalid_type": {
        const h = f(m.expected),
          g = yk(m.input),
          y = f(g, m.input);
        return `Invalid input: expected ${h}, received ${y}`;
      }
      case "invalid_value":
        return m.values.length === 1
          ? `Invalid input: expected ${Bv(m.values[0])}`
          : `Invalid option: expected one of ${Lg(m.values, "|")}`;
      case "too_big": {
        const h = m.exact ? "exactly " : m.inclusive ? "<=" : "<",
          g = i(m.origin);
        return g
          ? `Too big: expected ${m.origin ?? "value"} to have ${h}${m.maximum.toString()} ${g.unit ?? "elements"}`
          : `Too big: expected ${m.origin ?? "value"} to be ${h}${m.maximum.toString()}`;
      }
      case "too_small": {
        const h = m.exact ? "exactly " : m.inclusive ? ">=" : ">",
          g = i(m.origin);
        return g
          ? `Too small: expected ${m.origin} to have ${h}${m.minimum.toString()} ${g.unit}`
          : `Too small: expected ${m.origin} to be ${h}${m.minimum.toString()}`;
      }
      case "invalid_format": {
        const h = m;
        return h.format === "starts_with"
          ? `Invalid string: must start with "${h.prefix}"`
          : h.format === "ends_with"
            ? `Invalid string: must end with "${h.suffix}"`
            : h.format === "includes"
              ? `Invalid string: must include "${h.includes}"`
              : h.format === "regex"
                ? `Invalid string: must match pattern ${h.pattern}`
                : `Invalid ${r[h.format] ?? m.format}`;
      }
      case "not_multiple_of":
        return `Invalid number: must be a multiple of ${m.divisor}`;
      case "unrecognized_keys":
        return `Unrecognized key${m.keys.length > 1 ? "s" : ""}: ${Lg(m.keys, ", ")}`;
      case "invalid_key":
        return `Invalid key in ${m.origin}`;
      case "invalid_union":
        return m.options && Array.isArray(m.options) && m.options.length > 0
          ? `Invalid discriminator value. Expected ${m.options.map((g) => `'${g}'`).join(" | ")}`
          : m.inclusive === !1
            ? "Invalid input: more than one option matched"
            : "Invalid input";
      case "invalid_element":
        return `Invalid value in ${m.origin}`;
      default:
        return "Invalid input";
    }
  };
};
function G_() {
  return { localeError: V_() };
}
var lv;
class K_ {
  constructor() {
    ((this._map = new WeakMap()), (this._idmap = new Map()));
  }
  add(i, ...r) {
    const c = r[0];
    return (
      this._map.set(i, c),
      c && typeof c == "object" && "id" in c && this._idmap.set(c.id, i),
      this
    );
  }
  clear() {
    return ((this._map = new WeakMap()), (this._idmap = new Map()), this);
  }
  remove(i) {
    const r = this._map.get(i);
    return (
      r && typeof r == "object" && "id" in r && this._idmap.delete(r.id),
      this._map.delete(i),
      this
    );
  }
  get(i) {
    const r = i._zod.parent;
    if (r) {
      const c = { ...(this.get(r) ?? {}) };
      delete c.id;
      const f = { ...c, ...this._map.get(i) };
      return Object.keys(f).length ? f : void 0;
    }
    return this._map.get(i);
  }
  has(i) {
    return this._map.has(i);
  }
}
function X_() {
  return new K_();
}
(lv = globalThis).__zod_globalRegistry ?? (lv.__zod_globalRegistry = X_());
const bu = globalThis.__zod_globalRegistry;
function uy(n) {
  return (n.checks && (n.checks = [...n.checks]), n);
}
function Q_(n, i) {
  return new n(uy({ type: "string", ...ee(i) }));
}
function J_(n, i) {
  return new n({
    type: "string",
    format: "email",
    check: "string_format",
    abort: !1,
    ...ee(i),
  });
}
function I_(n, i) {
  return new n({
    type: "string",
    format: "guid",
    check: "string_format",
    abort: !1,
    ...ee(i),
  });
}
function P_(n, i) {
  return new n({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    ...ee(i),
  });
}
function F_(n, i) {
  return new n({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v4",
    ...ee(i),
  });
}
function W_(n, i) {
  return new n({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v6",
    ...ee(i),
  });
}
function eS(n, i) {
  return new n({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v7",
    ...ee(i),
  });
}
function tS(n, i) {
  return new n({
    type: "string",
    format: "url",
    check: "string_format",
    abort: !1,
    ...ee(i),
  });
}
function aS(n, i) {
  return new n({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: !1,
    ...ee(i),
  });
}
function nS(n, i) {
  return new n({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: !1,
    ...ee(i),
  });
}
function lS(n, i) {
  return new n({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: !1,
    ...ee(i),
  });
}
function iS(n, i) {
  return new n({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: !1,
    ...ee(i),
  });
}
function uS(n, i) {
  return new n({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: !1,
    ...ee(i),
  });
}
function sS(n, i) {
  return new n({
    type: "string",
    format: "xid",
    check: "string_format",
    abort: !1,
    ...ee(i),
  });
}
function rS(n, i) {
  return new n({
    type: "string",
    format: "ksuid",
    check: "string_format",
    abort: !1,
    ...ee(i),
  });
}
function cS(n, i) {
  return new n({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: !1,
    ...ee(i),
  });
}
function oS(n, i) {
  return new n({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: !1,
    ...ee(i),
  });
}
function fS(n, i) {
  return new n({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: !1,
    ...ee(i),
  });
}
function dS(n, i) {
  return new n({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: !1,
    ...ee(i),
  });
}
function mS(n, i) {
  return new n({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: !1,
    ...ee(i),
  });
}
function hS(n, i) {
  return new n({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: !1,
    ...ee(i),
  });
}
function pS(n, i) {
  return new n({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: !1,
    ...ee(i),
  });
}
function gS(n, i) {
  return new n({
    type: "string",
    format: "jwt",
    check: "string_format",
    abort: !1,
    ...ee(i),
  });
}
function vS(n, i) {
  return new n({
    type: "string",
    format: "datetime",
    check: "string_format",
    offset: !1,
    local: !1,
    precision: null,
    ...ee(i),
  });
}
function yS(n, i) {
  return new n({
    type: "string",
    format: "date",
    check: "string_format",
    ...ee(i),
  });
}
function bS(n, i) {
  return new n({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ...ee(i),
  });
}
function kS(n, i) {
  return new n({
    type: "string",
    format: "duration",
    check: "string_format",
    ...ee(i),
  });
}
function jS(n, i) {
  return new n(uy({ type: "number", checks: [], ...ee(i) }));
}
function _S(n, i) {
  return new n({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "safeint",
    ...ee(i),
  });
}
function SS(n) {
  return new n({ type: "unknown" });
}
function xS(n, i) {
  return new n({ type: "never", ...ee(i) });
}
function iv(n, i) {
  return new Gv({ check: "less_than", ...ee(i), value: n, inclusive: !1 });
}
function cf(n, i) {
  return new Gv({ check: "less_than", ...ee(i), value: n, inclusive: !0 });
}
function uv(n, i) {
  return new Kv({ check: "greater_than", ...ee(i), value: n, inclusive: !1 });
}
function of(n, i) {
  return new Kv({ check: "greater_than", ...ee(i), value: n, inclusive: !0 });
}
function sv(n, i) {
  return new _j({ check: "multiple_of", ...ee(i), value: n });
}
function sy(n, i) {
  return new xj({ check: "max_length", ...ee(i), maximum: n });
}
function hr(n, i) {
  return new zj({ check: "min_length", ...ee(i), minimum: n });
}
function ry(n, i) {
  return new Nj({ check: "length_equals", ...ee(i), length: n });
}
function zS(n, i) {
  return new Tj({
    check: "string_format",
    format: "regex",
    ...ee(i),
    pattern: n,
  });
}
function NS(n) {
  return new Ej({ check: "string_format", format: "lowercase", ...ee(n) });
}
function TS(n) {
  return new Oj({ check: "string_format", format: "uppercase", ...ee(n) });
}
function ES(n, i) {
  return new Aj({
    check: "string_format",
    format: "includes",
    ...ee(i),
    includes: n,
  });
}
function OS(n, i) {
  return new wj({
    check: "string_format",
    format: "starts_with",
    ...ee(i),
    prefix: n,
  });
}
function AS(n, i) {
  return new Cj({
    check: "string_format",
    format: "ends_with",
    ...ee(i),
    suffix: n,
  });
}
function mi(n) {
  return new Dj({ check: "overwrite", tx: n });
}
function wS(n) {
  return mi((i) => i.normalize(n));
}
function CS() {
  return mi((n) => n.trim());
}
function DS() {
  return mi((n) => n.toLowerCase());
}
function MS() {
  return mi((n) => n.toUpperCase());
}
function RS() {
  return mi((n) => ik(n));
}
function US(n, i, r) {
  return new n({ type: "array", element: i, ...ee(r) });
}
function BS(n, i, r) {
  return new n({ type: "custom", check: "custom", fn: i, ...ee(r) });
}
function ZS(n, i) {
  const r = HS(
    (c) => (
      (c.addIssue = (f) => {
        if (typeof f == "string") c.issues.push(Su(f, c.value, r._zod.def));
        else {
          const m = f;
          (m.fatal && (m.continue = !1),
            m.code ?? (m.code = "custom"),
            "input" in m || (m.input = c.value),
            m.inst ?? (m.inst = r),
            m.continue ?? (m.continue = !r._zod.def.abort),
            c.issues.push(Su(m)));
        }
      }),
      n(c.value, c)
    ),
    i,
  );
  return r;
}
function HS(n, i) {
  const r = new Lt({ check: "custom", ...ee(i) });
  return ((r._zod.check = n), r);
}
function ju(n, ...i) {
  for (const r of i)
    for (const c of Reflect.ownKeys(r))
      Object.prototype.propertyIsEnumerable.call(r, c) && Zn(n, c, r[c]);
  return n;
}
function cy(n) {
  let i = n?.target ?? "draft-2020-12";
  return (
    i === "draft-4" && (i = "draft-04"),
    i === "draft-7" && (i = "draft-07"),
    {
      processors: n.processors ?? {},
      metadataRegistry: n?.metadata ?? bu,
      target: i,
      unrepresentable: n?.unrepresentable ?? "throw",
      override: n?.override ?? (() => {}),
      io: n?.io ?? "output",
      counter: 0,
      seen: new Map(),
      sharedDefsExtractedFor: void 0,
      sharedEmitDoneFor: void 0,
      cycles: n?.cycles ?? "ref",
      reused: n?.reused ?? "inline",
      intersections: [],
      deferred: [],
      external: n?.external ?? void 0,
    }
  );
}
function hi(n, i, r, c, f) {
  const m =
    typeof i.unrepresentable == "function"
      ? i.unrepresentable({ zodSchema: n, path: c.path, message: f })
      : i.unrepresentable;
  if (m === "any") return !1;
  if (m === void 0 || m === "throw") throw new Error(f);
  return (Object.assign(r, m), !0);
}
function st(n, i, r = { path: [], schemaPath: [] }) {
  var c;
  const f = n._zod.def,
    m = i.seen.get(n);
  if (m)
    return (
      m.count++,
      r.schemaPath.includes(n) && (m.cycle = r.path),
      m.schema
    );
  const h = { schema: {}, count: 1, cycle: void 0, path: r.path };
  (i.seen.set(n, h),
    (i.sharedDefsExtractedFor = void 0),
    (i.sharedEmitDoneFor = void 0));
  const g = n._zod.toJSONSchema?.();
  if (g) h.schema = g;
  else {
    const b = { ...r, schemaPath: [...r.schemaPath, n], path: r.path };
    if (n._zod.processJSONSchema) n._zod.processJSONSchema(i, h.schema, b);
    else {
      const T = h.schema,
        C = i.processors[f.type];
      if (!C)
        throw new Error(
          `[toJSONSchema]: Non-representable type encountered: ${f.type}`,
        );
      C(n, i, T, b);
    }
    const k = n._zod.parent;
    k && (h.ref || (h.ref = k), st(k, i, b), (i.seen.get(k).isParent = !0));
  }
  const y = i.metadataRegistry.get(n);
  return (
    y && ju(h.schema, y),
    i.io === "input" &&
      At(n) &&
      (delete h.schema.examples, delete h.schema.default),
    i.io === "input" &&
      "_prefault" in h.schema &&
      ((c = h.schema).default ?? (c.default = h.schema._prefault)),
    delete h.schema._prefault,
    i.seen.get(n).schema
  );
}
function rv(n) {
  return n.replace(/~/g, "~0").replace(/\//g, "~1");
}
function oy(n, i) {
  const r = n.seen.get(i);
  if (!r) throw new Error("Unprocessed schema. This is a bug in Zod.");
  if (n.external && n.sharedDefsExtractedFor === n.external) return;
  const c = new Map();
  for (const h of n.seen.entries()) {
    const g = n.metadataRegistry.get(h[0])?.id;
    if (g) {
      const y = c.get(g);
      if (y && y !== h[0])
        throw new Error(
          `Duplicate schema id "${g}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`,
        );
      c.set(g, h[0]);
    }
  }
  const f = (h) => {
      const g = n.target === "draft-2020-12" ? "$defs" : "definitions";
      if (n.external) {
        const k = n.external.registry.get(h[0])?.id,
          T = n.external.uri ?? ((M) => M);
        if (k) return { ref: T(k) };
        const C = h[1].defId ?? h[1].schema.id ?? `schema${n.counter++}`;
        return (
          (h[1].defId = C),
          { defId: C, ref: `${T("__shared")}#/${g}/${rv(C)}` }
        );
      }
      const y = "#",
        v = `${y}/${g}/`;
      if (h[1] === r && !h[1].schema.id) return { ref: y };
      const b = h[1].schema.id ?? `__schema${n.counter++}`;
      return { defId: b, ref: v + rv(b) };
    },
    m = (h) => {
      if (h[1].schema.$ref) return;
      const g = h[1],
        { ref: y, defId: v } = f(h);
      ((g.def = { ...g.schema }), v && (g.defId = v));
      const b = g.schema;
      for (const k in b) delete b[k];
      b.$ref = y;
    };
  if (n.cycles === "throw")
    for (const h of n.seen.entries()) {
      const g = h[1];
      if (g.cycle)
        throw new Error(`Cycle detected: #/${g.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
    }
  for (const h of n.seen.entries()) {
    const g = h[1];
    if (i === h[0]) {
      m(h);
      continue;
    }
    if (n.external) {
      const v = n.external.registry.get(h[0])?.id;
      if (i !== h[0] && v) {
        m(h);
        continue;
      }
    }
    if (n.metadataRegistry.get(h[0])?.id) {
      m(h);
      continue;
    }
    if (g.cycle) {
      m(h);
      continue;
    }
    g.count > 1 && n.reused === "ref" && m(h);
  }
  n.external && (n.sharedDefsExtractedFor = n.external);
}
function fy(n) {
  const i = n.anyOf;
  if (!Array.isArray(i) || i.length === 0 || n.type !== void 0) return;
  const r = [];
  for (const c of i) {
    if (!c || typeof c != "object") return;
    fy(c);
    const f = Object.keys(c);
    if (f.length !== 1 || f[0] !== "type") return;
    const m = c.type;
    for (const h of Array.isArray(m) ? m : [m]) {
      if (typeof h != "string") return;
      r.includes(h) || r.push(h);
    }
  }
  (delete n.anyOf, (n.type = r.length === 1 ? r[0] : r));
}
const dy = new Set(["type", "properties", "required", "additionalProperties"]),
  cv = ["oneOf", "anyOf"];
function ov(n) {
  const i = n.additionalProperties;
  return i === void 0 || i === !1 || typeof i != "object" || i === null
    ? null
    : Object.keys(i).length
      ? i
      : null;
}
function zf(n) {
  const i = [];
  for (const m of n) {
    if (typeof m != "object" || m.type !== "object") return null;
    for (const h in m) if (!dy.has(h)) return null;
    i.push(m);
  }
  const r = {},
    c = new Set();
  for (const m of i) {
    for (const h in m.properties) {
      if (Object.prototype.hasOwnProperty.call(r, h)) continue;
      const g = [];
      for (const v of i) {
        const b = v.properties?.[h] ?? ov(v);
        b != null &&
          (g.some((k) => JSON.stringify(k) === JSON.stringify(b)) || g.push(b));
      }
      const y = g.length === 1 ? g[0] : (zf(g) ?? { allOf: g });
      Zn(r, h, y);
    }
    for (const h of m.required ?? []) c.add(h);
  }
  const f = { type: "object", properties: r };
  if (
    (c.size && (f.required = [...c]),
    i.every((m) => m.additionalProperties === !1))
  )
    f.additionalProperties = !1;
  else {
    const m = [];
    for (const h of i) {
      const g = ov(h);
      g && !m.some((y) => JSON.stringify(y) === JSON.stringify(g)) && m.push(g);
    }
    m.length === 1
      ? (f.additionalProperties = m[0])
      : m.length > 1 && (f.additionalProperties = { allOf: m });
  }
  return f;
}
function LS(n) {
  const i = n.allOf;
  if (!Array.isArray(i) || i.length < 2) return;
  for (const f of dy) if (f in n) return;
  const r = i.filter((f) => cv.some((m) => Array.isArray(f[m])));
  let c = null;
  if (!r.length) c = zf(i);
  else {
    const f = r[0],
      m = cv.find((y) => Array.isArray(f[y]));
    if (Object.keys(f).length !== 1) return;
    const h = i.filter((y) => y !== f),
      g = f[m].map((y) => zf([...h, y]));
    if (g.some((y) => !y)) return;
    c = { [m]: g };
  }
  c && (delete n.allOf, ju(n, c));
}
function my(n, i) {
  const r = n.seen.get(i);
  if (!r) throw new Error("Unprocessed schema. This is a bug in Zod.");
  const c = (g) => {
    const y = n.seen.get(g);
    if (y.ref === null) return;
    const v = y.def ?? y.schema,
      b = { ...v },
      k = y.ref;
    if (((y.ref = null), k)) {
      c(k);
      const C = n.seen.get(k),
        M = C.schema;
      if (
        (M.$ref &&
        (n.target === "draft-07" ||
          n.target === "draft-04" ||
          n.target === "openapi-3.0")
          ? ((v.allOf = v.allOf ?? []), v.allOf.push(M))
          : ju(v, M),
        ju(v, b),
        g._zod.parent === k)
      )
        for (const L in v)
          L === "$ref" || L === "allOf" || L in b || delete v[L];
      if (M.$ref && C.def)
        for (const L in v)
          L === "$ref" ||
            L === "allOf" ||
            (L in C.def &&
              JSON.stringify(v[L]) === JSON.stringify(C.def[L]) &&
              delete v[L]);
    }
    const T = g._zod.parent;
    if (T && T !== k) {
      c(T);
      const C = n.seen.get(T);
      if (C?.schema.$ref && ((v.$ref = C.schema.$ref), C.def))
        for (const M in v)
          M === "$ref" ||
            M === "allOf" ||
            (M in C.def &&
              JSON.stringify(v[M]) === JSON.stringify(C.def[M]) &&
              delete v[M]);
    }
    n.override({ zodSchema: g, jsonSchema: v, path: y.path ?? [] });
  };
  if (!n.external || n.sharedEmitDoneFor !== n.external) {
    for (const g of [...n.seen.entries()].reverse()) c(g[0]);
    if (n.target !== "openapi-3.0")
      for (const g of n.seen.entries()) fy(g[1].def ?? g[1].schema);
    for (const g of n.deferred) g();
    if (n.intersections.length) {
      const g = new Map();
      for (const y of n.seen.values())
        for (const v of [y.schema, y.def]) {
          const b = v?.allOf;
          if (!Array.isArray(b)) continue;
          const k = g.get(b);
          k ? k.push(v) : g.set(b, [v]);
        }
      for (const y of n.intersections) for (const v of g.get(y) ?? []) LS(v);
    }
  }
  const f = {};
  if (
    (n.target === "draft-2020-12"
      ? (f.$schema = "https://json-schema.org/draft/2020-12/schema")
      : n.target === "draft-07"
        ? (f.$schema = "http://json-schema.org/draft-07/schema#")
        : n.target === "draft-04"
          ? (f.$schema = "http://json-schema.org/draft-04/schema#")
          : n.target,
    n.external?.uri)
  ) {
    const g = n.external.registry.get(i)?.id;
    if (!g) throw new Error("Schema is missing an `id` property");
    f.$id = n.external.uri(g);
  }
  ju(f, r.defId ? r.schema : (r.def ?? r.schema));
  const m = n.metadataRegistry.get(i)?.id;
  m !== void 0 && f.id === m && delete f.id;
  const h = n.external?.defs ?? {};
  if (!n.external || n.sharedEmitDoneFor !== n.external)
    for (const g of n.seen.entries()) {
      const y = g[1];
      y.def &&
        y.defId &&
        (y.def.id === y.defId && delete y.def.id, Zn(h, y.defId, y.def));
    }
  (n.external && (n.sharedEmitDoneFor = n.external),
    n.external ||
      (Object.keys(h).length > 0 &&
        (n.target === "draft-2020-12" ? (f.$defs = h) : (f.definitions = h))));
  try {
    const g = JSON.parse(JSON.stringify(f));
    return (
      Object.defineProperty(g, "~standard", {
        value: {
          ...i["~standard"],
          jsonSchema: {
            input: pr(i, "input", n.processors),
            output: pr(i, "output", n.processors),
          },
        },
        enumerable: !1,
        writable: !1,
      }),
      g
    );
  } catch {
    throw new Error("Error converting schema to JSON.");
  }
}
function At(n, i) {
  const r = i ?? { seen: new Set() };
  if (r.seen.has(n)) return !1;
  r.seen.add(n);
  const c = n._zod.def;
  if (c.type === "transform") return !0;
  if (c.type === "array") return At(c.element, r);
  if (c.type === "set") return At(c.valueType, r);
  if (c.type === "lazy") return At(c.getter(), r);
  if (
    c.type === "promise" ||
    c.type === "optional" ||
    c.type === "nonoptional" ||
    c.type === "nullable" ||
    c.type === "readonly" ||
    c.type === "default" ||
    c.type === "prefault" ||
    c.type === "catch"
  )
    return At(c.innerType, r);
  if (c.type === "intersection") return At(c.left, r) || At(c.right, r);
  if (c.type === "record" || c.type === "map")
    return At(c.keyType, r) || At(c.valueType, r);
  if (c.type === "pipe")
    return n._zod.traits.has("$ZodCodec") ? !0 : At(c.in, r) || At(c.out, r);
  if (c.type === "object") {
    for (const f in c.shape) if (At(c.shape[f], r)) return !0;
    return !1;
  }
  if (c.type === "union") {
    for (const f of c.options) if (At(f, r)) return !0;
    return !1;
  }
  if (c.type === "tuple") {
    for (const f of c.items) if (At(f, r)) return !0;
    return !!(c.rest && At(c.rest, r));
  }
  return !1;
}
const qS =
    (n, i = {}) =>
    (r) => {
      const c = cy({ ...r, processors: i });
      return (st(n, c), oy(c, n), my(c, n));
    },
  pr =
    (n, i, r = {}) =>
    (c) => {
      const { libraryOptions: f, target: m } = c ?? {},
        h = cy({ ...(f ?? {}), target: m, io: i, processors: r });
      return (st(n, h), oy(h, n), my(h, n));
    },
  fi = (n, i, r) => {
    (n[i] === void 0 || r > n[i]) && (n[i] = r);
  },
  di = (n, i, r) => {
    (n[i] === void 0 || r < n[i]) && (n[i] = r);
  },
  fv = (n, i) => {
    (fi(n, "minimum", i), di(n, "maximum", i));
  },
  hy = (n, i) => {
    (n.multipleOf ?? (n.multipleOf = []),
      n.multipleOf.includes(i) || n.multipleOf.push(i));
  },
  py = (n, i) => {
    (n.patterns ?? (n.patterns = new Set()), n.patterns.add(i));
  },
  gy = (n, i) => {
    n.mime = n.mime ? n.mime.filter((r) => i.includes(r)) : [...i];
  },
  vy = (n, i) => {
    ((n.format = i), i.includes("int") && (n.isInt = !0));
  },
  dv = (n, i) => fi(n, "minimum", i.minimum),
  mv = (n, i) => di(n, "maximum", i.maximum),
  hv = (n) => (i, r) => {
    vy(i, r.format);
    const [c, f] = n[r.format];
    (fi(i, "minimum", c), di(i, "maximum", f));
  },
  YS = {
    greater_than: (n, i) =>
      fi(n, i.inclusive ? "minimum" : "exclusiveMinimum", i.value),
    less_than: (n, i) =>
      di(n, i.inclusive ? "maximum" : "exclusiveMaximum", i.value),
    multiple_of: (n, i) => hy(n, i.value),
    number_format: hv(Zv),
    bigint_format: hv(ck),
    min_length: dv,
    max_length: mv,
    length_equals: (n, i) => fv(n, i.length),
    min_size: dv,
    max_size: mv,
    size_equals: (n, i) => fv(n, i.size),
    string_format: (n, i) => {
      (vy(n, i.format),
        i.pattern && py(n, i.pattern),
        (i.format === "base64" || i.format === "base64url") &&
          (n.contentEncoding = i.format),
        (i.local || i.precision === -1) && (n.laxFormat = !0));
    },
    mime_type: (n, i) => gy(n, i.mime),
  };
function ba(n) {
  const i = {},
    r = n._zod.def,
    c = n._zod.traits.has("$ZodCheck")
      ? [n, ...(r.checks ?? [])]
      : (r.checks ?? []);
  for (const m of c) YS[m._zod.def.check]?.(i, m._zod.def);
  const f = n._zod.bag;
  (f.minimum !== void 0 && fi(i, "minimum", f.minimum),
    f.exclusiveMinimum !== void 0 &&
      fi(i, "exclusiveMinimum", f.exclusiveMinimum),
    f.maximum !== void 0 && di(i, "maximum", f.maximum),
    f.exclusiveMaximum !== void 0 &&
      di(i, "exclusiveMaximum", f.exclusiveMaximum),
    f.multipleOf !== void 0 && hy(i, f.multipleOf),
    f.format !== void 0 &&
      (i.format ?? (i.format = f.format),
      f.format.includes("int") && (i.isInt = !0)),
    f.mime && gy(i, f.mime));
  for (const m of f.patterns ?? []) py(i, m);
  return i;
}
const $S = {
    guid: "uuid",
    url: "uri",
    datetime: "date-time",
    json_string: "json-string",
    regex: "",
  },
  VS = new Map([
    [Wv, oj],
    [Gf, fj],
  ]),
  yy = (n) => VS.get(n) ?? n,
  GS = (n, i, r, c) => {
    const f = r;
    f.type = "string";
    const {
      minimum: m,
      maximum: h,
      format: g,
      patterns: y,
      contentEncoding: v,
      laxFormat: b,
    } = ba(n);
    if (
      (typeof m == "number" && (f.minLength = m),
      typeof h == "number" && (f.maxLength = h),
      g &&
        ((f.format = $S[g] ?? g),
        f.format === "" && delete f.format,
        (g === "time" || b) && delete f.format),
      v && (f.contentEncoding = v),
      y && y.size > 0)
    ) {
      const k = [...y].map(yy);
      k.length === 1
        ? (f.pattern = k[0].source)
        : k.length > 1 &&
          (f.allOf = [
            ...k.map((T) => ({
              ...(i.target === "draft-07" ||
              i.target === "draft-04" ||
              i.target === "openapi-3.0"
                ? { type: "string" }
                : {}),
              pattern: T.source,
            })),
          ]);
    }
  },
  KS = (n, i, r, c) => {
    const f = r,
      {
        minimum: m,
        maximum: h,
        multipleOf: g,
        exclusiveMaximum: y,
        exclusiveMinimum: v,
        isInt: b,
      } = ba(n);
    f.type = b ? "integer" : "number";
    const k = typeof v == "number" && v >= (m ?? Number.NEGATIVE_INFINITY),
      T = typeof y == "number" && y <= (h ?? Number.POSITIVE_INFINITY),
      C = i.target === "draft-04" || i.target === "openapi-3.0";
    if (
      (k
        ? C
          ? ((f.minimum = v), (f.exclusiveMinimum = !0))
          : (f.exclusiveMinimum = v)
        : typeof m == "number" && (f.minimum = m),
      T
        ? C
          ? ((f.maximum = y), (f.exclusiveMaximum = !0))
          : (f.exclusiveMaximum = y)
        : typeof h == "number" && (f.maximum = h),
      g)
    ) {
      const M = new Set();
      for (const D of g)
        Number.isFinite(D) && D !== 0
          ? M.add(Math.abs(D))
          : hi(
              n,
              i,
              f,
              c,
              `A multipleOf divisor of ${D} cannot be represented in JSON Schema`,
            );
      const [q, ...L] = M;
      (q !== void 0 && (f.multipleOf = q),
        L.length &&
          (f.allOf = [
            ...(f.allOf ?? []),
            ...L.map((D) => ({ multipleOf: D })),
          ]));
    }
  },
  XS = (n, i, r, c) => {
    r.not = {};
  },
  QS = (n, i, r, c) => {},
  JS = (n, i, r, c) => {
    const f = n._zod.def,
      m = bf(f.entries);
    if (m.length === 0) {
      r.not = {};
      return;
    }
    (m.every((h) => typeof h == "number") && (r.type = "number"),
      m.every((h) => typeof h == "string") && (r.type = "string"),
      (r.enum = m));
  },
  IS = (n, i, r, c) => {
    hi(n, i, r, c, "Custom types cannot be represented in JSON Schema");
  },
  PS = (n, i, r, c) => {
    hi(n, i, r, c, "Transforms cannot be represented in JSON Schema");
  },
  FS = (n, i, r, c) => {
    const f = r,
      m = n._zod.def,
      { minimum: h, maximum: g } = ba(n);
    (typeof h == "number" && (f.minItems = h),
      typeof g == "number" && (f.maxItems = g),
      (f.type = "array"),
      (f.items = st(m.element, i, { ...c, path: [...c.path, "items"] })));
  };
function gr(n) {
  const i = n._zod.def;
  return i.type === "pipe" && i.in._zod.traits.has("$ZodTransform")
    ? gr(i.out)
    : i.type === "catch"
      ? gr(i.innerType)
      : n._zod.optin;
}
const WS = (n, i, r, c) => {
    const f = r,
      m = n._zod.def,
      h = m.shape;
    if (
      Object.getOwnPropertySymbols(h).length &&
      hi(n, i, f, c, "Symbol keys cannot be represented in JSON Schema")
    )
      return;
    ((f.type = "object"), (f.properties = {}));
    for (const v in h)
      Zn(
        f.properties,
        v,
        st(h[v], i, { ...c, path: [...c.path, "properties", v] }),
      );
    const y = [];
    for (const v of Object.keys(h)) {
      const b = m.shape[v];
      (i.io === "input" ? gr(b) === void 0 : b._zod.optout === void 0) &&
        y.push(v);
    }
    (y.length > 0 && (f.required = y),
      m.catchall?._zod.def.type === "never"
        ? (f.additionalProperties = !1)
        : m.catchall
          ? m.catchall &&
            (f.additionalProperties = st(m.catchall, i, {
              ...c,
              path: [...c.path, "additionalProperties"],
            }))
          : i.io === "output" && (f.additionalProperties = !1));
  },
  e2 = (n, i, r, c) => {
    const f = n._zod.def,
      m = f.inclusive === !1,
      h = f.options.map((g, y) =>
        st(g, i, { ...c, path: [...c.path, m ? "oneOf" : "anyOf", y] }),
      );
    m ? (r.oneOf = h) : (r.anyOf = h);
  },
  t2 = (n, i, r, c) => {
    const f = n._zod.def,
      m = st(f.left, i, { ...c, path: [...c.path, "allOf", 0] }),
      h = st(f.right, i, { ...c, path: [...c.path, "allOf", 1] }),
      g = (v) => "allOf" in v && Object.keys(v).length === 1,
      y = [...(g(m) ? m.allOf : [m]), ...(g(h) ? h.allOf : [h])];
    ((r.allOf = y), i.intersections.push(y));
  };
function Nf(n, i, r) {
  if (i.$ref) {
    if (r.has(i)) return i;
    r.add(i);
    const M = n.get(i)?.def;
    if (!M) return i;
    const q = Nf(n, M, r);
    return q === M ? i : q;
  }
  for (const M of ["anyOf", "oneOf"]) {
    const q = i[M];
    if (!Array.isArray(q)) continue;
    const L = q.map((D) => Nf(n, D, r));
    L.some((D, X) => D !== q[X]) && (i = { ...i, [M]: L });
  }
  const c = Array.isArray(i.type) ? i.type : [i.type],
    f =
      !c.includes("string") && c.some((M) => M === "number" || M === "integer"),
    m = i.enum ?? (i.const !== void 0 ? [i.const] : void 0);
  if (!f && !m?.some((M) => typeof M == "number")) return i;
  const {
    minimum: h,
    maximum: g,
    exclusiveMinimum: y,
    exclusiveMaximum: v,
    multipleOf: b,
    format: k,
    id: T,
    ...C
  } = i;
  return (
    C.enum
      ? (C.enum = C.enum.map((M) => (typeof M == "number" ? String(M) : M)))
      : typeof C.const == "number" && (C.const = String(C.const)),
    f &&
      ((C.type = "string"),
      m || (C.pattern = (c.includes("number") ? Yf : bj).source)),
    C
  );
}
const Tf = new WeakMap();
function a2(n) {
  const i = new Map();
  for (const c of n.seen.values())
    c.def && !i.has(c.schema) && i.set(c.schema, c);
  const r = new Map();
  for (const c of Tf.get(n) ?? []) {
    const f = n.seen.get(c),
      m = (f?.def ?? f?.schema)?.propertyNames;
    if (!m || m === !0 || r.has(m)) continue;
    const h = Nf(i, m, new Set());
    h !== m && r.set(m, h);
  }
  if (r.size)
    for (const c of n.seen.values())
      for (const f of [c.schema, c.def]) {
        const m = f && r.get(f.propertyNames);
        m && (f.propertyNames = m);
      }
}
const n2 = (n, i, r, c) => {
    const f = r,
      m = n._zod.def;
    f.type = "object";
    const h = m.keyType,
      g = ba(h).patterns;
    if (m.mode === "loose" && g && g.size > 0) {
      const b = st(m.valueType, i, {
        ...c,
        path: [...c.path, "patternProperties", "*"],
      });
      f.patternProperties = {};
      for (const k of g) Zn(f.patternProperties, yy(k).source, b);
    } else {
      if (i.target === "draft-07" || i.target === "draft-2020-12") {
        f.propertyNames = st(m.keyType, i, {
          ...c,
          path: [...c.path, "propertyNames"],
        });
        let b = Tf.get(i);
        (b || ((b = []), Tf.set(i, b), i.deferred.push(() => a2(i))),
          b.push(n));
      }
      f.additionalProperties = st(m.valueType, i, {
        ...c,
        path: [...c.path, "additionalProperties"],
      });
    }
    const y = h._zod.values,
      v = i.io === "input" && gr(m.valueType) !== void 0;
    if (y && !m.partial && !v) {
      const b = [...y].filter(
        (k) => typeof k == "string" || typeof k == "number",
      );
      b.length > 0 && (f.required = b.map(String));
    }
  },
  l2 = (n, i, r, c) => {
    const f = n._zod.def,
      m = st(f.innerType, i, c),
      h = i.seen.get(n);
    i.target === "openapi-3.0"
      ? ((h.ref = f.innerType), (r.nullable = !0))
      : (r.anyOf = [m, { type: "null" }]);
  },
  i2 = (n, i, r, c) => {
    const f = n._zod.def;
    st(f.innerType, i, c);
    const m = i.seen.get(n);
    m.ref = f.innerType;
  },
  Kf = Symbol();
function by(n, i, r, c, f) {
  let m = !1;
  const h = JSON.stringify(n, (g, y) =>
    typeof y != "bigint" ? y : ((m = !0), null),
  );
  return m
    ? (hi(i, r, c, f, "BigInt defaults cannot be represented in JSON Schema"),
      Kf)
    : JSON.parse(h);
}
const u2 = (n, i, r, c) => {
    const f = n._zod.def;
    st(f.innerType, i, c);
    const m = i.seen.get(n);
    m.ref = f.innerType;
    const h = by(f.defaultValue, n, i, r, c);
    h !== Kf && (r.default = h);
  },
  s2 = (n, i, r, c) => {
    const f = n._zod.def;
    st(f.innerType, i, c);
    const m = i.seen.get(n);
    if (((m.ref = f.innerType), i.io !== "input")) return;
    const h = by(f.defaultValue, n, i, r, c);
    h !== Kf && (r._prefault = h);
  },
  r2 = (n, i, r, c) => {
    const f = n._zod.def;
    st(f.innerType, i, c);
    const m = i.seen.get(n);
    m.ref = f.innerType;
    let h;
    try {
      h = f.catchValue(void 0);
    } catch {
      hi(n, i, r, c, "Dynamic catch values are not supported in JSON Schema");
      return;
    }
    r.default = h;
  },
  c2 = (n, i, r, c) => {
    const f = n._zod.def,
      m = f.in._zod.traits.has("$ZodTransform"),
      h = i.io === "input" ? (m ? f.out : f.in) : f.out;
    st(h, i, c);
    const g = i.seen.get(n);
    g.ref = h;
  },
  o2 = (n, i, r, c) => {
    const f = n._zod.def;
    st(f.innerType, i, c);
    const m = i.seen.get(n);
    ((m.ref = f.innerType), (r.readOnly = !0));
  },
  ky = (n, i, r, c) => {
    const f = n._zod.def;
    st(f.innerType, i, c);
    const m = i.seen.get(n);
    m.ref = f.innerType;
  },
  pv = new WeakSet([Object.prototype, Error.prototype]);
function ir(n, i, r) {
  Object.defineProperty(n, i, {
    configurable: !0,
    enumerable: !1,
    get() {
      const c = r(this);
      return (
        Object.defineProperty(this, i, {
          value: c,
          configurable: !0,
          writable: !0,
        }),
        c
      );
    },
    set(c) {
      Object.defineProperty(this, i, {
        value: c,
        configurable: !0,
        writable: !0,
      });
    },
  });
}
const f2 = (n, i) => {
    (wk.init(n, i), (n.name = "ZodError"));
    const r = Object.getPrototypeOf(n);
    pv.has(r) ||
      (pv.add(r),
      ir(r, "format", (c) => (f) => Mk(c, f)),
      ir(r, "flatten", (c) => (f) => Dk(c, f)),
      ir(r, "addIssue", (c) => (f) => {
        (c.issues.push(f), (c.message = JSON.stringify(c.issues, kf, 2)));
      }),
      ir(r, "addIssues", (c) => (f) => {
        (c.issues.push(...f), (c.message = JSON.stringify(c.issues, kf, 2)));
      }),
      Object.defineProperty(r, "isEmpty", {
        configurable: !0,
        enumerable: !1,
        get() {
          return this.issues.length === 0;
        },
      }));
  },
  oa = Z("ZodError", f2, void 0, { Parent: Error }),
  d2 = Zf(oa),
  m2 = Hf(oa),
  h2 = Lf(oa),
  p2 = qf(oa),
  g2 = Lk(oa),
  v2 = qk(oa),
  y2 = Yk(oa),
  b2 = $k(oa),
  k2 = Vk(oa),
  j2 = Gk(oa),
  _2 = Kk(oa),
  S2 = Xk(oa);
function x2() {
  ka.localeError || Ra(G_());
}
function jr() {
  ka.memoizer || Ra({ memoizer: Y_() });
}
const at = Z(
    "ZodType",
    (n, i) => (x2(), tt.init(n, i), (n.def = i), (n.type = i.type), n),
    {
      check(...n) {
        const i = this.def;
        return this.clone(
          Ft(i, {
            checks: [
              ...(i.checks ?? []),
              ...n.map((r) =>
                typeof r == "function"
                  ? {
                      _zod: {
                        check: r,
                        def: { check: "custom" },
                        onattach: [],
                      },
                    }
                  : r,
              ),
            ],
          }),
          { parent: !0 },
        );
      },
      with(...n) {
        return this.check(...n);
      },
      clone(n, i) {
        return Hn(this, n, i);
      },
      brand() {
        return this;
      },
      register(n, i) {
        return (n.add(this, i), this);
      },
      refine(n, i) {
        return this.check(kx(n, i));
      },
      superRefine(n, i) {
        return this.check(jx(n, i));
      },
      overwrite(n) {
        return this.check(mi(n));
      },
      optional() {
        return bv(this);
      },
      exactOptional() {
        return sx(this);
      },
      nullable() {
        return kv(this);
      },
      nullish() {
        return bv(kv(this));
      },
      nonoptional(n) {
        return mx(this, n);
      },
      array() {
        return ri(this);
      },
      or(n) {
        return tx([this, n]);
      },
      and(n) {
        return nx(this, n);
      },
      transform(n) {
        return jv(this, ux(n));
      },
      default(n) {
        return ox(this, n);
      },
      prefault(n) {
        return dx(this, n);
      },
      catch(n) {
        return px(this, n);
      },
      pipe(n) {
        return jv(this, n);
      },
      readonly() {
        return yx(this);
      },
      describe(n) {
        const i = this.clone();
        return (bu.add(i, { description: n }), i);
      },
      meta(...n) {
        if (n.length === 0) return bu.get(this);
        const i = this.clone();
        return (bu.add(i, n[0]), i);
      },
      isOptional() {
        return this.safeParse(void 0).success;
      },
      isNullable() {
        return this.safeParse(null).success;
      },
      apply(n, ...i) {
        return i.length === 0 ? n(this) : n(this, ...i);
      },
      get "~standard"() {
        return Lv(this, "~standard", {
          ...Qv(this),
          jsonSchema: { input: pr(this, "input"), output: pr(this, "output") },
        });
      },
      set "~standard"(n) {
        Bn(this, "~standard", n);
      },
      parse: function n(i, r) {
        return d2(this, i, r, { callee: n });
      },
      parseAsync: async function n(i, r) {
        return await m2(this, i, r, { callee: n });
      },
      safeParse(n, i) {
        return h2(this, n, i);
      },
      async safeParseAsync(n, i) {
        return p2(this, n, i);
      },
      get spa() {
        return this?.safeParseAsync;
      },
      set spa(n) {
        Bn(this, "spa", n);
      },
      validate(n, i) {
        return Bk(this, n, i);
      },
      validateAsync(n, i) {
        return Hk(this, n, i);
      },
      encode: function n(i, r) {
        return g2(this, i, r, { callee: n });
      },
      decode: function n(i, r) {
        return v2(this, i, r, { callee: n });
      },
      encodeAsync: async function n(i, r) {
        return await y2(this, i, r, { callee: n });
      },
      decodeAsync: async function n(i, r) {
        return await b2(this, i, r, { callee: n });
      },
      safeEncode(n, i) {
        return k2(this, n, i);
      },
      safeDecode(n, i) {
        return j2(this, n, i);
      },
      async safeEncodeAsync(n, i) {
        return _2(this, n, i);
      },
      async safeDecodeAsync(n, i) {
        return S2(this, n, i);
      },
      toJSONSchema(n) {
        return qS(this, {})(n);
      },
      get description() {
        return bu.get(this)?.description;
      },
      get _def() {
        return this._zod.def;
      },
    },
  ),
  jy = Z(
    "_ZodString",
    (n, i) => {
      (Vf.init(n, i),
        at.init(n, i),
        (n._zod.processJSONSchema = (r, c, f) => GS(n, r, c)));
    },
    qv(
      {
        format: (n) => ba(n).format ?? null,
        minLength: (n) => ba(n).minimum ?? null,
        maxLength: (n) => ba(n).maximum ?? null,
      },
      {
        regex(...n) {
          return this.check(zS(...n));
        },
        includes(...n) {
          return this.check(ES(...n));
        },
        startsWith(...n) {
          return this.check(OS(...n));
        },
        endsWith(...n) {
          return this.check(AS(...n));
        },
        min(...n) {
          return this.check(hr(...n));
        },
        max(...n) {
          return this.check(sy(...n));
        },
        length(...n) {
          return this.check(ry(...n));
        },
        nonempty(...n) {
          return this.check(hr(1, ...n));
        },
        lowercase(n) {
          return this.check(NS(n));
        },
        uppercase(n) {
          return this.check(TS(n));
        },
        trim() {
          return this.check(CS());
        },
        normalize(...n) {
          return this.check(wS(...n));
        },
        toLowerCase() {
          return this.check(DS());
        },
        toUpperCase() {
          return this.check(MS());
        },
        slugify() {
          return this.check(RS());
        },
      },
    ),
  ),
  z2 = Z(
    "ZodString",
    (n, i) => {
      (Vf.init(n, i), jy.init(n, i));
    },
    {
      email(n) {
        return this.check(J_(A2, n));
      },
      url(n) {
        return this.check(tS(C2, n));
      },
      jwt(n) {
        return this.check(gS(X2, n));
      },
      emoji(n) {
        return this.check(aS(D2, n));
      },
      guid(n) {
        return this.check(I_(w2, n));
      },
      uuid(n) {
        return this.check(P_(ur, n));
      },
      uuidv4(n) {
        return this.check(F_(ur, n));
      },
      uuidv6(n) {
        return this.check(W_(ur, n));
      },
      uuidv7(n) {
        return this.check(eS(ur, n));
      },
      nanoid(n) {
        return this.check(nS(M2, n));
      },
      cuid(n) {
        return this.check(lS(R2, n));
      },
      cuid2(n) {
        return this.check(iS(U2, n));
      },
      ulid(n) {
        return this.check(uS(B2, n));
      },
      base64(n) {
        return this.check(mS(V2, n));
      },
      base64url(n) {
        return this.check(hS(G2, n));
      },
      xid(n) {
        return this.check(sS(Z2, n));
      },
      ksuid(n) {
        return this.check(rS(H2, n));
      },
      ipv4(n) {
        return this.check(cS(L2, n));
      },
      ipv6(n) {
        return this.check(oS(q2, n));
      },
      cidrv4(n) {
        return this.check(fS(Y2, n));
      },
      cidrv6(n) {
        return this.check(dS($2, n));
      },
      e164(n) {
        return this.check(pS(K2, n));
      },
      datetime(n) {
        return this.check(vS(N2, n));
      },
      date(n) {
        return this.check(yS(T2, n));
      },
      time(n) {
        return this.check(bS(E2, n));
      },
      duration(n) {
        return this.check(kS(O2, n));
      },
    },
  );
function Ma(n) {
  return Q_(z2, n);
}
const Je = Z("ZodStringFormat", (n, i) => {
    (Ge.init(n, i), jy.init(n, i));
  }),
  N2 = Z("ZodISODateTime", (n, i) => {
    (Wj.init(n, i), Je.init(n, i));
  }),
  T2 = Z("ZodISODate", (n, i) => {
    (e_.init(n, i), Je.init(n, i));
  }),
  E2 = Z("ZodISOTime", (n, i) => {
    (t_.init(n, i), Je.init(n, i));
  }),
  O2 = Z("ZodISODuration", (n, i) => {
    (a_.init(n, i), Je.init(n, i));
  }),
  A2 = Z("ZodEmail", (n, i) => {
    (Hj.init(n, i), Je.init(n, i));
  }),
  w2 = Z("ZodGUID", (n, i) => {
    (Bj.init(n, i), Je.init(n, i));
  }),
  ur = Z("ZodUUID", (n, i) => {
    (Zj.init(n, i), Je.init(n, i));
  }),
  C2 = Z("ZodURL", (n, i) => {
    (Gj.init(n, i), Je.init(n, i));
  }),
  D2 = Z("ZodEmoji", (n, i) => {
    (Kj.init(n, i), Je.init(n, i));
  }),
  M2 = Z("ZodNanoID", (n, i) => {
    (Xj.init(n, i), Je.init(n, i));
  }),
  R2 = Z("ZodCUID", (n, i) => {
    (Qj.init(n, i), Je.init(n, i));
  }),
  U2 = Z("ZodCUID2", (n, i) => {
    (Jj.init(n, i), Je.init(n, i));
  }),
  B2 = Z("ZodULID", (n, i) => {
    (Ij.init(n, i), Je.init(n, i));
  }),
  Z2 = Z("ZodXID", (n, i) => {
    (Pj.init(n, i), Je.init(n, i));
  }),
  H2 = Z("ZodKSUID", (n, i) => {
    (Fj.init(n, i), Je.init(n, i));
  }),
  L2 = Z("ZodIPv4", (n, i) => {
    (n_.init(n, i), Je.init(n, i));
  }),
  q2 = Z("ZodIPv6", (n, i) => {
    (i_.init(n, i), Je.init(n, i));
  }),
  Y2 = Z("ZodCIDRv4", (n, i) => {
    (u_.init(n, i), Je.init(n, i));
  }),
  $2 = Z("ZodCIDRv6", (n, i) => {
    (r_.init(n, i), Je.init(n, i));
  }),
  V2 = Z("ZodBase64", (n, i) => {
    (c_.init(n, i), Je.init(n, i));
  }),
  G2 = Z("ZodBase64URL", (n, i) => {
    (f_.init(n, i), Je.init(n, i));
  }),
  K2 = Z("ZodE164", (n, i) => {
    (d_.init(n, i), Je.init(n, i));
  }),
  X2 = Z("ZodJWT", (n, i) => {
    (h_.init(n, i), Je.init(n, i));
  }),
  _y = Z(
    "ZodNumber",
    (n, i) => {
      (ey.init(n, i),
        at.init(n, i),
        (n._zod.processJSONSchema = (r, c, f) => KS(n, r, c, f)),
        (n.isFinite = !0));
    },
    qv(
      {
        minValue: (n) => {
          const { minimum: i, exclusiveMinimum: r } = ba(n);
          return Math.max(
            i ?? Number.NEGATIVE_INFINITY,
            r ?? Number.NEGATIVE_INFINITY,
          );
        },
        maxValue: (n) => {
          const { maximum: i, exclusiveMaximum: r } = ba(n);
          return Math.min(
            i ?? Number.POSITIVE_INFINITY,
            r ?? Number.POSITIVE_INFINITY,
          );
        },
        isInt: (n) => {
          const { isInt: i, multipleOf: r } = ba(n);
          return !!i || !!r?.some(Number.isSafeInteger);
        },
        format: (n) => ba(n).format ?? null,
      },
      {
        gt(n, i) {
          return this.check(uv(n, i));
        },
        gte(n, i) {
          return this.check(of(n, i));
        },
        min(n, i) {
          return this.check(of(n, i));
        },
        lt(n, i) {
          return this.check(iv(n, i));
        },
        lte(n, i) {
          return this.check(cf(n, i));
        },
        max(n, i) {
          return this.check(cf(n, i));
        },
        int(n) {
          return this.check(gv(n));
        },
        safe(n) {
          return this.check(gv(n));
        },
        positive(n) {
          return this.check(uv(0, n));
        },
        nonnegative(n) {
          return this.check(of(0, n));
        },
        negative(n) {
          return this.check(iv(0, n));
        },
        nonpositive(n) {
          return this.check(cf(0, n));
        },
        multipleOf(n, i) {
          return this.check(sv(n, i));
        },
        step(n, i) {
          return this.check(sv(n, i));
        },
        finite() {
          return this;
        },
      },
    ),
  );
function pu(n) {
  return jS(_y, n);
}
const Q2 = Z("ZodNumberFormat", (n, i) => {
  (p_.init(n, i), _y.init(n, i));
});
function gv(n) {
  return _S(Q2, n);
}
const J2 = Z("ZodUnknown", (n, i) => {
  (g_.init(n, i),
    at.init(n, i),
    (n._zod.processJSONSchema = (r, c, f) => QS()));
});
function vv() {
  return SS(J2);
}
const I2 = Z("ZodNever", (n, i) => {
  (v_.init(n, i),
    at.init(n, i),
    (n._zod.processJSONSchema = (r, c, f) => XS(n, r, c)));
});
function P2(n) {
  return xS(I2, n);
}
const F2 = Z(
  "ZodArray",
  (n, i) => {
    (jr(),
      k_.init(n, i),
      at.init(n, i),
      (n._zod.processJSONSchema = (r, c, f) => FS(n, r, c, f)),
      (n.element = i.element));
  },
  {
    min(n, i) {
      return this.check(hr(n, i));
    },
    nonempty(n) {
      return this.check(hr(1, n));
    },
    max(n, i) {
      return this.check(sy(n, i));
    },
    length(n, i) {
      return this.check(ry(n, i));
    },
    unwrap() {
      return this.element;
    },
  },
);
function ri(n, i) {
  return US(F2, n, i);
}
const W2 = Z(
  "ZodObject",
  (n, i) => {
    (jr(),
      S_.init(n, i),
      at.init(n, i),
      (n._zod.processJSONSchema = (r, c, f) => WS(n, r, c, f)),
      Sk(n, "shape", (r) => r._zod.def.shape, !1));
  },
  {
    keyof() {
      return lx(Object.keys(this._zod.def.shape));
    },
    catchall(n) {
      return this.clone(Ft(this._zod.def, { catchall: n }));
    },
    passthrough() {
      return this.clone(Ft(this._zod.def, { catchall: vv() }));
    },
    loose() {
      return this.clone(Ft(this._zod.def, { catchall: vv() }));
    },
    strict() {
      return this.clone(Ft(this._zod.def, { catchall: P2() }));
    },
    strip() {
      return this.clone(Ft(this._zod.def, { catchall: void 0 }));
    },
    extend(n) {
      return dk(this, n);
    },
    safeExtend(n) {
      return mk(this, n);
    },
    merge(n) {
      return hk(this, n);
    },
    pick(n) {
      return ok(this, n);
    },
    omit(n) {
      return fk(this, n);
    },
    partial(...n) {
      return qg(xy, this, n[0]);
    },
    exactPartial(...n) {
      return qg(zy, this, n[0], "exactPartial");
    },
    required(...n) {
      return pk(Ny, this, n[0]);
    },
  },
);
function ff(n, i) {
  const r = { type: "object", shape: n ?? {}, ...ee(i) };
  return new W2(r);
}
const ex = Z("ZodUnion", (n, i) => {
  (x_.init(n, i),
    at.init(n, i),
    (n._zod.processJSONSchema = (r, c, f) => e2(n, r, c, f)),
    (n.options = i.options));
});
function tx(n, i) {
  return new ex({ type: "union", options: n, ...ee(i) });
}
const ax = Z("ZodIntersection", (n, i) => {
  (z_.init(n, i),
    at.init(n, i),
    (n._zod.processJSONSchema = (r, c, f) => t2(n, r, c, f)));
});
function nx(n, i) {
  return new ax({ type: "intersection", left: n, right: i });
}
const yv = Z("ZodRecord", (n, i) => {
  (jr(),
    N_.init(n, i),
    at.init(n, i),
    (n._zod.processJSONSchema = (r, c, f) => n2(n, r, c, f)),
    (n.keyType = i.keyType),
    (n.valueType = i.valueType));
});
function Sy(n, i, r) {
  return !i || !i._zod
    ? new yv({ type: "record", keyType: Ma(), valueType: n, ...ee(i) })
    : new yv({ type: "record", keyType: n, valueType: i, ...ee(r) });
}
const Ef = Z("ZodEnum", (n, i) => {
  (T_.init(n, i),
    at.init(n, i),
    (n._zod.processJSONSchema = (c, f, m) => JS(n, c, f)),
    (n.enum = i.entries),
    (n.options = [...n._zod.values]));
  const r = new Set(Object.keys(i.entries));
  ((n.extract = (c, f) => {
    const m = {};
    for (const h of c)
      if (r.has(h)) m[h] = i.entries[h];
      else throw new Error(`Key ${h} not found in enum`);
    return new Ef({ ...i, checks: [], ...ee(f), entries: m });
  }),
    (n.exclude = (c, f) => {
      const m = { ...i.entries };
      for (const h of c)
        if (r.has(h)) delete m[h];
        else throw new Error(`Key ${h} not found in enum`);
      return new Ef({ ...i, checks: [], ...ee(f), entries: m });
    }));
});
function lx(n, i) {
  const r = Array.isArray(n) ? Object.fromEntries(n.map((c) => [c, c])) : n;
  return new Ef({ type: "enum", entries: r, ...ee(i) });
}
const ix = Z("ZodTransform", (n, i) => {
  (jr(),
    E_.init(n, i),
    at.init(n, i),
    (n._zod.processJSONSchema = (r, c, f) => PS(n, r, c, f)),
    (n._zod.parse = (r, c) => {
      if (c.direction === "backward") throw new Yv(n.constructor.name);
      r.addIssue = (m) => {
        if (typeof m == "string") r.issues.push(Su(m, r.value, i));
        else {
          const h = m;
          (h.fatal && (h.continue = !1),
            h.code ?? (h.code = "custom"),
            "input" in h || (h.input = r.value),
            h.inst ?? (h.inst = n),
            r.issues.push(Su(h)));
        }
      };
      const f = i.transform(r.value, r);
      return f instanceof Promise
        ? f.then((m) => ((r.value = m), r))
        : ((r.value = f), r);
    }));
});
function ux(n) {
  return new ix({ type: "transform", transform: n });
}
const xy = Z("ZodOptional", (n, i) => {
  (ny.init(n, i),
    at.init(n, i),
    (n._zod.processJSONSchema = (r, c, f) => ky(n, r, c, f)),
    (n.unwrap = () => n._zod.def.innerType));
});
function bv(n) {
  return new xy({ type: "optional", innerType: n });
}
const zy = Z("ZodExactOptional", (n, i) => {
  (O_.init(n, i),
    at.init(n, i),
    (n._zod.processJSONSchema = (r, c, f) => ky(n, r, c, f)),
    (n.unwrap = () => n._zod.def.innerType));
});
function sx(n) {
  return new zy({ type: "optional", innerType: n });
}
const rx = Z("ZodNullable", (n, i) => {
  (A_.init(n, i),
    at.init(n, i),
    (n._zod.processJSONSchema = (r, c, f) => l2(n, r, c, f)),
    (n.unwrap = () => n._zod.def.innerType));
});
function kv(n) {
  return new rx({ type: "nullable", innerType: n });
}
const cx = Z("ZodDefault", (n, i) => {
  (w_.init(n, i),
    at.init(n, i),
    (n._zod.processJSONSchema = (r, c, f) => u2(n, r, c, f)),
    (n.unwrap = () => n._zod.def.innerType),
    (n.removeDefault = n.unwrap));
});
function ox(n, i) {
  return new cx({
    type: "default",
    innerType: n,
    get defaultValue() {
      return typeof i == "function" ? i() : Uv(i);
    },
  });
}
const fx = Z("ZodPrefault", (n, i) => {
  (C_.init(n, i),
    at.init(n, i),
    (n._zod.processJSONSchema = (r, c, f) => s2(n, r, c, f)),
    (n.unwrap = () => n._zod.def.innerType));
});
function dx(n, i) {
  return new fx({
    type: "prefault",
    innerType: n,
    get defaultValue() {
      return typeof i == "function" ? i() : Uv(i);
    },
  });
}
const Ny = Z("ZodNonOptional", (n, i) => {
  (D_.init(n, i),
    at.init(n, i),
    (n._zod.processJSONSchema = (r, c, f) => i2(n, r, c, f)),
    (n.unwrap = () => n._zod.def.innerType));
});
function mx(n, i) {
  return new Ny({ type: "nonoptional", innerType: n, ...ee(i) });
}
const hx = Z("ZodCatch", (n, i) => {
  (M_.init(n, i),
    at.init(n, i),
    (n._zod.processJSONSchema = (r, c, f) => r2(n, r, c, f)),
    (n.unwrap = () => n._zod.def.innerType),
    (n.removeCatch = n.unwrap));
});
function px(n, i) {
  return new hx({
    type: "catch",
    innerType: n,
    catchValue: typeof i == "function" ? i : zk(i),
  });
}
const gx = Z("ZodPipe", (n, i) => {
  (R_.init(n, i),
    at.init(n, i),
    (n._zod.processJSONSchema = (r, c, f) => c2(n, r, c, f)),
    (n.in = i.in),
    (n.out = i.out));
});
function jv(n, i) {
  return new gx({ type: "pipe", in: n, out: i });
}
const vx = Z("ZodReadonly", (n, i) => {
  (U_.init(n, i),
    at.init(n, i),
    (n._zod.processJSONSchema = (r, c, f) => o2(n, r, c, f)),
    (n.unwrap = () => n._zod.def.innerType));
});
function yx(n) {
  return new vx({ type: "readonly", innerType: n });
}
const bx = Z("ZodCustom", (n, i) => {
  (B_.init(n, i),
    at.init(n, i),
    (n._zod.processJSONSchema = (r, c, f) => IS(n, r, c, f)));
});
function kx(n, i = {}) {
  return BS(bx, n, i);
}
function jx(n, i) {
  return ZS(n, i);
}
const sr = Sy(Ma(), Ma()),
  _x = ff({
    version: Ma(),
    sourceFile: Ma(),
    preparedAt: Ma(),
    keywordIndex: Sy(Ma(), ri(Ma())).optional(),
    keywordMeta: ff({
      wordCount: pu(),
      indexedWords: pu(),
      atLeastTwo: pu(),
      one: pu(),
      zero: pu(),
      sourceUrl: Ma(),
      notes: Ma(),
    }).optional(),
    classification: ri(sr),
    progress: ri(sr),
    records: ri(ff({ data: sr, evidence: ri(sr) })),
  });
let _v;
function Sx() {
  return (_v ??= fetch("./data/manual-database.json", {
    signal: AbortSignal.timeout(1e4),
  })
    .then(async (n) => {
      if (!n.ok)
        throw Error(
          "Database lokal tidak dapat dimuat. Pastikan folder dist/data tersedia.",
        );
      const i = _x.parse(await n.json());
      if (
        new Set(i.records.map((r) => r.data.masalah_id)).size !==
          i.records.length ||
        i.records.some(
          (r) =>
            !r.data.masalah_id ||
            !r.data.judul_masalah ||
            !r.evidence.length ||
            r.evidence.some(
              (c) =>
                c.masalah_id !== r.data.masalah_id ||
                !/^https?:\/\//i.test(c.url_sumber),
            ),
        )
      )
        throw Error("Hubungan data masalah dan bukti tidak valid.");
      return i;
    })
    .catch((n) => {
      throw ((_v = void 0), n);
    }));
}
const hl = (n) =>
    n
      .normalize("NFKD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/[^\p{L}\p{N}]+/gu, " ")
      .trim(),
  Of = (n) =>
    hl(n)
      .split(" ")
      .filter(
        (i) =>
          i &&
          ![
            "yang",
            "dan",
            "atau",
            "di",
            "untuk",
            "pada",
            "dengan",
            "serta",
          ].includes(i),
      ),
  Sv = (n, i) => Of(i).every((r) => n.includes(r));
function xx(n, i, r = new Date()) {
  if (i.language === "Bahasa Inggris") return [];
  const c = {
      "30 hari terakhir": 30,
      "90 hari terakhir": 90,
      "12 bulan terakhir": 365,
    },
    f = c[i.period] ? r.getTime() - c[i.period] * 864e5 : null;
  return n.records.filter((m) => {
    const h = m.data,
      g = hl(
        [
          h.judul_masalah,
          h.industri,
          h.subindustri,
          h.kelompok_konsumen,
          h.daerah,
          h.ringkasan_analisis,
          ...m.evidence.map((b) => b.teks_bukti),
        ].join(" "),
      );
    if (
      (i.sector && h.kode_sektor !== i.sector) ||
      (i.industry && h.kode_industri !== i.industry)
    )
      return !1;
    const y = Of(i.topic);
    if (i.topic.trim() && !y.length) return !1;
    const v = (b) =>
      Of(b).every(
        (k) =>
          n.keywordIndex?.[k]?.includes(h.masalah_id) ||
          g.split(" ").includes(k),
      );
    return !(
      !v(i.topic) ||
      (hl(i.region) === "indonesia" &&
        h.daerah.toLowerCase().includes("global")) ||
      (i.region &&
        hl(i.region) !== "indonesia" &&
        !Sv(hl(h.daerah), i.region)) ||
      (i.consumer &&
        !["konsumen umum", "semua konsumen"].includes(hl(i.consumer)) &&
        !Sv(hl(h.kelompok_konsumen), i.consumer)) ||
      i.keywords
        .split(",")
        .filter((b) => b.trim())
        .some((b) => !v(b)) ||
      i.exclude
        .split(",")
        .filter((b) => b.trim())
        .some((b) => v(b)) ||
      (f !== null &&
        !m.evidence.some(
          (b) =>
            /^\d{4}-\d{2}-\d{2}$/.test(b.tanggal_publikasi) &&
            Date.parse(b.tanggal_publikasi) >= f &&
            Date.parse(b.tanggal_publikasi) <= r.getTime(),
        ))
    );
  });
}
function zx(n, i, r) {
  return `Pencarian offline pada database manual ${n.version}: ${n.records.length} masalah, ${n.records.reduce((c, f) => c + f.evidence.length, 0)} bukti. ${r} masalah sesuai filter. Data berasal dari ${n.sourceFile}; klaim sumber dan klasifikasi mengikuti CSV unggahan, belum diperiksa ulang oleh aplikasi. Target 200 masalah per industri belum terpenuhi. Pencarian memakai kata utuh dan indeks topik/alias (contoh BBM → bahan bakar minyak; digital → catatan layanan digital). Pemetaan topik hanya membantu menemukan catatan, bukan bukti baru atau analisis AI. Sumber mengikuti CSV unggahan dan belum diperiksa ulang. Daerah/konsumen mengikuti catatan, tanpa perluasan wilayah otomatis. Bahasa corpus: Indonesia; filter bahasa Inggris tidak menghasilkan temuan. ${i.period === "Semua periode" ? "Semua tanggal disertakan, termasuk tanggal publikasi yang tidak diketahui." : "Filter periode memilih masalah dengan setidaknya satu bukti bertanggal publikasi dalam rentang; bukti lain tetap disertakan untuk konteks. Tanggal pemeriksaan tidak menggantikan tanggal publikasi."} Hasil kosong tidak membuktikan masalah tidak ada. Alternatif, ide penawaran, dan kelayakan bisnis belum tersedia dari dataset; rencana validasi adalah saran sistem yang belum dijalankan.`;
}
function Nx(n, i) {
  const r = xx(n, i),
    c = St(),
    f = r.map(({ data: m, evidence: h }) => ({
      id: wt(),
      title: m.judul_masalah,
      consumer: m.kelompok_konsumen,
      summary: m.ringkasan_analisis,
      trigger:
        "Belum tersedia pada database; periksa sumber dan tanyakan kepada konsumen.",
      impact: "Belum diukur secara terpisah dari ringkasan sumber.",
      pattern: "Frekuensi dan keterwakilan konsumen belum diketahui.",
      root: "Belum diketahui; tidak disimpulkan otomatis.",
      unknown: m.hal_belum_diketahui,
      origin: {
        datasetVersion: n.version,
        sourceId: m.masalah_id,
        sector: m.sektor,
        sectorCode: m.kode_sektor,
        industry: m.industri,
        industryCode: m.kode_industri,
        subindustry: m.subindustri,
        region: m.daerah,
        customerType: m.tipe_pelanggan,
        validation: m.status_validasi,
      },
      evidence: h.map((g) => ({
        id: wt(),
        quote: g.teks_bukti,
        context: `Impor ${g.bukti_id}. ${g.konteks_dan_batasan} Akses menurut CSV: ${g.status_akses}; aplikasi belum memeriksa ulang sumber.`,
        url: g.url_sumber,
        source: g.nama_sumber,
        date: g.tanggal_publikasi || g.tanggal_pemeriksaan,
        snippet: g.status_akses === "cuplikan_pencarian",
        kind: "Temuan Sumber",
        imported: {
          sourceId: g.bukti_id,
          textType: g.jenis_teks,
          publicationDate: g.tanggal_publikasi,
          checkedAt: g.tanggal_pemeriksaan,
          accessClaim: g.status_akses,
        },
      })),
      alternatives: [],
      ideas: [],
      validation: [
        {
          id: wt(),
          action:
            "Saran sistem: buka sumber asli dan periksa kesesuaian ringkasan dengan konteksnya.",
          status: "Belum dimulai",
          note: "",
        },
        {
          id: wt(),
          action: `Saran sistem: wawancarai calon konsumen (${m.kelompok_konsumen}) tentang pengalaman terakhir, dampak, dan cara mengatasinya.`,
          status: "Belum dimulai",
          note: "",
        },
        {
          id: wt(),
          action:
            "Saran sistem: periksa alternatif yang benar-benar digunakan sebelum menguji ide penawaran.",
          status: "Belum dimulai",
          note: "",
        },
      ],
      saved: !1,
    }));
  return {
    id: wt(),
    name:
      i.topic.trim() ||
      n.progress.find((m) => m.kode_industri === i.industry)?.industri ||
      n.classification.find((m) => m.kode_sektor === i.sector)?.sektor ||
      "Seluruh database manual",
    topic: i.topic.trim() || "Semua topik pada filter",
    region: i.region,
    consumer: i.consumer || "Konsumen umum",
    period: i.period,
    language: i.language,
    keywords: i.keywords,
    exclude: i.exclude,
    updated: c,
    demo: !1,
    status: f.length ? "Hasil parsial" : "Tidak ada temuan relevan",
    problems: f,
    research: {
      checkedAt: c,
      limitations: zx(n, i, f.length),
      sourceCount: new Set(
        f.flatMap((m) =>
          m.evidence.map((h) => new URL(h.url).hostname.replace(/^www\./, "")),
        ),
      ).size,
    },
    database: {
      version: n.version,
      totalProblems: n.records.length,
      matchedProblems: f.length,
      sourceFile: n.sourceFile,
      sectorCode: i.sector,
      industryCode: i.industry,
    },
  };
}
const dl = (n) =>
    new Date(n).toLocaleDateString("id-ID", {
      day: "numeric",
      month: "short",
      year: "numeric",
    }),
  Tx = ["Ringkasan", "Bukti", "Alternatif Solusi", "Peluang", "Validasi"];
function tn({ children: n, tone: i = "neutral" }) {
  return o.jsxs("span", {
    className: `badge ${i}`,
    children: [o.jsx("span", { className: "status-dot" }), n],
  });
}
function Be({ label: n, children: i }) {
  const r = ie.useId();
  return o.jsxs("div", {
    className: "field",
    children: [
      o.jsx("label", { htmlFor: r, children: n }),
      ie.cloneElement(i, { id: r }),
    ],
  });
}
function an({ icon: n = o.jsx(vf, {}), title: i, children: r, action: c }) {
  return o.jsxs("div", {
    className: "empty",
    children: [
      " ",
      o.jsx("div", { className: "empty-icon", children: n }),
      o.jsx("h2", { children: i }),
      o.jsx("p", { children: r }),
      c,
    ],
  });
}
function ml({ title: n, close: i, children: r }) {
  const c = ie.useRef(null),
    f = ie.useRef(i);
  return (
    (f.current = i),
    ie.useEffect(() => {
      const m = document.activeElement,
        h = c.current;
      h?.querySelector("input,button,select,textarea")?.focus();
      const g = (y) => {
        if ((y.key === "Escape" && f.current(), y.key === "Tab" && h)) {
          const v = Array.from(
              h.querySelectorAll("button,input,select,textarea,[href]"),
            ),
            b = v[0],
            k = v.at(-1);
          y.shiftKey && document.activeElement === b
            ? (y.preventDefault(), k?.focus())
            : !y.shiftKey &&
              document.activeElement === k &&
              (y.preventDefault(), b?.focus());
        }
      };
      return (
        document.addEventListener("keydown", g),
        () => {
          (document.removeEventListener("keydown", g), m?.focus());
        }
      );
    }, []),
    o.jsx("div", {
      className: "overlay",
      onClick: i,
      children: o.jsxs("div", {
        ref: c,
        className: "modal",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": n,
        onClick: (m) => m.stopPropagation(),
        children: [
          o.jsxs("div", {
            className: "modal-head",
            children: [
              o.jsx("h2", { children: n }),
              o.jsx("button", {
                className: "icon-button",
                onClick: i,
                "aria-label": "Tutup dialog",
                children: o.jsx(yf, { size: 20 }),
              }),
            ],
          }),
          r,
        ],
      }),
    })
  );
}
function Ex({ cloud: n }) {
  const [i] = ie.useState(() => {
      try {
        return { projects: n?.projects || H1(), error: "" };
      } catch {
        return {
          projects: [],
          error:
            "Data lokal tidak dapat dibaca. Data lama tetap disimpan; muat ulang atau pulihkan browser sebelum membuat perubahan.",
        };
      }
    }),
    [r, c] = ie.useState(i.projects),
    [f, m] = ie.useState(i.error),
    [h, g] = ie.useState(""),
    [y, v] = ie.useState("projects"),
    [b, k] = ie.useState(""),
    [T, C] = ie.useState(""),
    [M, q] = ie.useState("Ringkasan"),
    [L, D] = ie.useState(!1),
    [X, ye] = ie.useState(""),
    [Ae, de] = ie.useState("Semua bukti"),
    [ce, ae] = ie.useState("Bukti terbanyak"),
    [se, ct] = ie.useState("table"),
    [Fe, Se] = ie.useState(""),
    [Ke, he] = ie.useState(null),
    [Wt, We] = ie.useState(""),
    [$, ne] = ie.useState("Excel"),
    [te, we] = ie.useState("project"),
    [Ne, xt] = ie.useState(""),
    [je, Ua] = ie.useState(null),
    [x, H] = ie.useState(""),
    [G, P] = ie.useState("database"),
    [pe, _e] = ie.useState(""),
    [xe, J] = ie.useState(""),
    ue = () => {
      (H(""),
        Sx()
          .then(Ua)
          .catch(() =>
            H(
              "Database bawaan gagal dimuat. Pastikan folder dist/data ikut diekstrak, lalu coba lagi.",
            ),
          ));
    };
  ie.useEffect(ue, []);
  const [zt, vl] = ie.useState(""),
    [Ba, Ct] = ie.useState(""),
    V = r.find((_) => _.id === b),
    I = V?.problems.find((_) => _.id === T);
  (ie.useEffect(() => {
    if (!i.error) {
      if (n) {
        n.save(r);
        return;
      }
      try {
        (localStorage.setItem(Ev, JSON.stringify(r)), m(""));
      } catch {
        m(
          "Penyimpanan browser penuh atau tidak tersedia. Perubahan sesi ini belum tersimpan; ekspor data sebelum menutup halaman.",
        );
      }
    }
  }, [r, i.error]),
    ie.useEffect(() => {
      if (!Fe) return;
      const _ = setTimeout(() => Se(""), 4500);
      return () => clearTimeout(_);
    }, [Fe]));
  function De(_) {
    (_ === "new" && (_e(""), J(""), P("database")),
      v(_),
      D(!1),
      ye(""),
      de("Semua bukti"),
      window.scrollTo(0, 0));
  }
  function fa(_) {
    (k(_.id), De("screening"));
  }
  function ea(_, B) {
    (k(_.id), C(B.id), q("Ringkasan"), De("detail"));
  }
  function Za(_) {
    c((B) =>
      B.map((F) => {
        if (F.id !== b) return F;
        const Te = _(F);
        return { ...Te, updated: St(), status: q1(Te.problems) };
      }),
    );
  }
  function da(_) {
    Za((B) => ({
      ...B,
      problems: B.problems.map((F) => (F.id === T ? _(F) : F)),
    }));
  }
  function ja() {
    const _ = r.find((F) => F.demo);
    if (_) {
      fa(_);
      return;
    }
    const B = L1();
    (c((F) => [B, ...F]),
      fa(B),
      Se("Proyek demo dibuka. Semua kutipan dan ide berlabel ilustrasi."));
  }
  async function pi(_) {
    _.preventDefault();
    const B = new FormData(_.currentTarget),
      F = String(B.get("topic")).trim();
    if (G === "database") {
      if (!je) {
        H("Tunggu database selesai dimuat atau periksa folder dist/data.");
        return;
      }
      const Xe = Nx(je, {
        topic: F,
        region: String(B.get("region")).trim(),
        consumer: String(B.get("consumer")).trim(),
        period: String(B.get("period")),
        language: String(B.get("language")),
        keywords: String(B.get("keywords") || "").trim(),
        exclude: String(B.get("exclude") || "").trim(),
        sector: pe,
        industry: xe,
      });
      (c((ot) => [Xe, ...ot]),
        fa(Xe),
        Se(
          `${Xe.problems.length} masalah cocok dari ${je.records.length} masalah database. Hasil disimpan sebagai proyek baru.`,
        ));
      return;
    }
    if (!F) return;
    const Te = {
      id: wt(),
      name: F,
      topic: F,
      region: String(B.get("region")).trim(),
      consumer: String(B.get("consumer")),
      period: String(B.get("period")),
      language: String(B.get("language")),
      keywords: String(B.get("keywords") || "").trim(),
      exclude: String(B.get("exclude") || "").trim(),
      updated: St(),
      demo: !1,
      status: "Belum dikonfigurasi",
      problems: [],
    };
    (c((Xe) => [Te, ...Xe]),
      fa(Te),
      Se(
        G === "web" && n?.researchConfigured
          ? "Proyek dibuat. Penelusuran dimulai."
          : "Proyek tersimpan. Tambahkan temuan manual; pencarian daring belum tersedia.",
      ),
      G === "web" && n?.researchConfigured && (await Ln(Te)));
  }
  async function Ln(_) {
    if (!(!n?.researchConfigured || _.demo || zt)) {
      (Ct(""), vl(_.id));
      try {
        const B = await n.research(_);
        (c((F) =>
          F.map((Te) =>
            Te.id === _.id
              ? {
                  ...Te,
                  updated: St(),
                  status: B.status,
                  problems: [...Te.problems, ...B.problems],
                  research: {
                    checkedAt: B.checkedAt,
                    limitations: B.limitations,
                    sourceCount: B.sourceCount,
                  },
                }
              : Te,
          ),
        ),
          Se(
            B.problems.length
              ? "Temuan ditambahkan. Periksa sumber sebelum membuat keputusan."
              : "Penelusuran selesai tanpa bukti yang memadai. Ini tidak membuktikan masalah tidak ada.",
          ));
      } catch (B) {
        Ct(
          B instanceof Error
            ? B.message
            : "Penelusuran gagal. Data lama dipertahankan.",
        );
      } finally {
        vl("");
      }
    }
  }
  function yl(_ = "project") {
    (we(_), xt(""), he("export"));
  }
  async function xu() {
    if (V) {
      (We("Membuat laporan"), xt(""));
      try {
        const { exportProject: _ } = await wf(async () => {
          const { exportProject: B } = await import("./report.js");
          return { exportProject: B };
        }, []);
        (await _(
          V,
          te === "problem" && I ? [I] : V.problems,
          $,
          te === "problem",
        ),
          Se(`Laporan ${$} berhasil diunduh.`),
          he(null));
      } catch {
        xt(
          "Ekspor gagal dibuat. Coba lagi atau pilih format lain. Data proyek tetap tersimpan.",
        );
      } finally {
        We("");
      }
    }
  }
  const Dt = r.flatMap((_) =>
      _.problems.filter((B) => B.saved).map((B) => ({ p: _, b: B })),
    ),
    qn =
      V?.problems
        .filter(
          (_) =>
            (_.title + " " + _.consumer)
              .toLowerCase()
              .includes(X.toLowerCase()) &&
            (Ae === "Semua bukti" || du(_) === Ae),
        )
        .sort((_, B) =>
          ce === "Nama masalah"
            ? _.title.localeCompare(B.title)
            : ce === "Sumber terbanyak"
              ? vu(B) - vu(_)
              : gu(B) - gu(_),
        ) || [];
  return o.jsxs("div", {
    className: "app-shell",
    children: [
      o.jsx("a", {
        className: "skip-link",
        href: "#main",
        children: "Lewati navigasi",
      }),
      L && o.jsx("div", { className: "nav-backdrop", onClick: () => D(!1) }),
      o.jsxs("aside", {
        className: `sidebar ${L ? "is-open" : ""}`,
        children: [
          o.jsxs("a", {
            href: "#",
            className: "brand",
            "aria-label": "VENTU — End-to-End Business Plan, buka proyek",
            onClick: (_) => {
              (_.preventDefault(), De("projects"));
            },
            children: [
              o.jsx("img", {
                className: "brand-logo",
                src: "./brand/ventu-mark-15f2095fced5.png",
                alt: "",
                width: 42,
                height: 42,
                decoding: "async",
              }),
              o.jsxs("span", {
                className: "brand-copy",
                children: [
                  o.jsx("span", {
                    className: "brand-name",
                    children: "VENTU",
                  }),
                  o.jsx("span", {
                    className: "brand-tagline",
                    children: "END-TO-END BUSINESS PLAN",
                  }),
                ],
              }),
            ],
          }),
          o.jsxs("div", {
            className: "workspace-label",
            children: ["WORKSPACE ", o.jsx("span", { children: "Personal" })],
          }),
          o.jsx("nav", {
            "aria-label": "Navigasi utama",
            children: [
              { id: "projects", label: "Proyek", icon: vf },
              { id: "new", label: "Riset Baru", icon: nn },
              { id: "saved", label: "Tersimpan", icon: Fs },
              { id: "plans", label: "Business Plan", icon: nf },
              { id: "settings", label: "Pengaturan", icon: F1 },
            ].map((_) =>
              o.jsxs(
                "button",
                {
                  className: `nav-item ${y === _.id || (_.id === "projects" && ["screening", "detail", "validation"].includes(y)) ? "active" : ""}`,
                  onClick: () => De(_.id),
                  "aria-label": _.label,
                  "aria-current": y === _.id ? "page" : void 0,
                  children: [
                    o.jsx(_.icon, { size: 19 }),
                    _.label,
                    _.id === "saved" &&
                      Dt.length > 0 &&
                      o.jsx("span", {
                        className: "nav-count",
                        children: Dt.length,
                      }),
                  ],
                },
                _.id,
              ),
            ),
          }),
          o.jsxs("div", {
            className: "sidebar-bottom",
            children: [
              o.jsxs("div", {
                className: "help-box",
                children: [
                  o.jsx("div", {
                    className: "help-icon",
                    children: o.jsx(Dg, { size: 19 }),
                  }),
                  o.jsx("strong", { children: "Mulai dari bukti." }),
                  o.jsx("p", {
                    children:
                      "Temukan masalah yang layak dipahami lebih dalam.",
                  }),
                  o.jsxs("button", {
                    onClick: ja,
                    children: [
                      "Jelajahi proyek demo ",
                      o.jsx(Da, { size: 15 }),
                    ],
                  }),
                ],
              }),
              o.jsxs("div", {
                className: "profile",
                children: [
                  o.jsx("div", { className: "avatar", children: "RP" }),
                  o.jsxs("div", {
                    children: [
                      o.jsx("strong", { children: "Workspace personal" }),
                      o.jsx("small", {
                        children: n
                          ? "Sinkronisasi cloud"
                          : "Disimpan di browser ini",
                      }),
                    ],
                  }),
                  o.jsx(Zg, { size: 17 }),
                ],
              }),
            ],
          }),
        ],
      }),
      o.jsxs("div", {
        className: "main-wrap",
        children: [
          o.jsxs("header", {
            className: "topbar",
            children: [
              o.jsxs("div", {
                className: "breadcrumb",
                children: [
                  o.jsx("button", {
                    className: "icon-button mobile-menu",
                    "aria-label": "Buka navigasi",
                    onClick: () => D(!0),
                    children: o.jsx(P1, { size: 21 }),
                  }),
                  o.jsx("span", { children: "Workspace" }),
                  o.jsx(Ws, { size: 14 }),
                  o.jsx("strong", {
                    children: {
                      projects: "Proyek",
                      new: "Riset baru",
                      saved: "Tersimpan",
                      settings: "Pengaturan",
                      plans: "Business Plan",
                      screening: "Hasil screening",
                      detail: "Detail masalah",
                      validation: "Rencana validasi",
                    }[y],
                  }),
                ],
              }),
              o.jsxs("div", {
                className: "topbar-right",
                children: [
                  o.jsxs("span", {
                    className: "local-state",
                    children: [
                      o.jsx("span", {}),
                      n ? "Mode pribadi" : "Mode lokal",
                    ],
                  }),
                  o.jsx("div", { className: "avatar small", children: "RP" }),
                ],
              }),
            ],
          }),
          o.jsxs("main", {
            id: "main",
            tabIndex: -1,
            children: [
              zt &&
                o.jsxs("div", {
                  className: "notice",
                  role: "status",
                  children: [
                    o.jsx(Mn, { size: 18 }),
                    o.jsx("p", {
                      children:
                        "Menunggu daftar judul berita dari indeks publik. Tahap internal dan waktu selesai belum diketahui. Biarkan halaman ini terbuka.",
                    }),
                  ],
                }),
              Ba &&
                o.jsxs("div", {
                  className: "notice error",
                  role: "alert",
                  children: [
                    o.jsx(wg, { size: 18 }),
                    o.jsxs("p", {
                      children: [Ba, " Hasil sebelumnya tetap disimpan."],
                    }),
                    o.jsx("button", {
                      className: "secondary",
                      onClick: () => Ct(""),
                      children: "Tutup",
                    }),
                  ],
                }),
              f &&
                o.jsxs("div", {
                  className: "notice error",
                  role: "alert",
                  children: [o.jsx(wg, { size: 18 }), f],
                }),
              y === "projects" &&
                o.jsxs(o.Fragment, {
                  children: [
                    o.jsxs("div", {
                      className: "page-heading",
                      children: [
                        o.jsxs("div", {
                          children: [
                            o.jsx("div", {
                              className: "eyebrow",
                              children: "RUANG KERJA ANDA",
                            }),
                            o.jsx("h1", { children: "Proyek riset" }),
                            o.jsx("p", {
                              children:
                                "Dari pertanyaan yang tepat, menuju peluang yang lebih jelas.",
                            }),
                          ],
                        }),
                        o.jsxs("button", {
                          className: "primary",
                          onClick: () => De("new"),
                          children: [o.jsx(nn, { size: 18 }), "Riset baru"],
                        }),
                      ],
                    }),
                    o.jsxs("div", {
                      className: "notice database-banner",
                      children: [
                        o.jsx(er, { size: 20 }),
                        o.jsxs("div", {
                          children: [
                            o.jsxs("strong", {
                              children: [
                                je
                                  ? `${je.records.length} masalah · ${je.records.reduce((_, B) => _ + B.evidence.length, 0)} bukti dalam database bawaan`
                                  : "Database lokal",
                                " ",
                              ],
                            }),
                            o.jsx("p", {
                              children:
                                x ||
                                (je
                                  ? "Cari data yang Anda kumpulkan tanpa internet. Sumber belum diperiksa ulang; target 200 masalah per industri belum terpenuhi."
                                  : "Memuat database bawaan…"),
                            }),
                          ],
                        }),
                        o.jsxs("button", {
                          className: "secondary",
                          onClick: () => {
                            (P("database"), De("new"));
                          },
                          children: [
                            "Cari database lokal ",
                            o.jsx(Da, { size: 16 }),
                          ],
                        }),
                      ],
                    }),
                    o.jsxs("div", {
                      className: "intro-panel",
                      children: [
                        o.jsxs("div", {
                          className: "intro-content",
                          children: [
                            o.jsxs("span", {
                              className: "mini-label",
                              children: [
                                o.jsx("span", {}),
                                " RISET BERBASIS BUKTI",
                              ],
                            }),
                            o.jsxs("h2", {
                              children: [
                                "Pahami masalahnya.",
                                o.jsx("br", {}),
                                "Temukan ruang peluangnya.",
                              ],
                            }),
                            o.jsx("p", {
                              children:
                                "Telusuri masalah konsumen, periksa sumbernya, dan susun langkah validasi dalam satu ruang kerja.",
                            }),
                            o.jsxs("button", {
                              className: "text-link",
                              onClick: () => De("new"),
                              children: [
                                "Mulai penelusuran pertama ",
                                o.jsx(Da, { size: 17 }),
                              ],
                            }),
                          ],
                        }),
                        o.jsxs("div", {
                          className: "radar-art",
                          "aria-hidden": "true",
                          children: [
                            o.jsx("div", { className: "radar-ring r1" }),
                            o.jsx("div", { className: "radar-ring r2" }),
                            o.jsx("div", { className: "radar-ring r3" }),
                            o.jsx("div", { className: "radar-cross h" }),
                            o.jsx("div", { className: "radar-cross v" }),
                            o.jsx("div", { className: "radar-sweep" }),
                            o.jsx("span", { className: "radar-point p1" }),
                            o.jsx("span", { className: "radar-point p2" }),
                            o.jsx("span", { className: "radar-point p3" }),
                            o.jsxs("div", {
                              className: "art-label",
                              children: [
                                o.jsx(Mn, { size: 14 }),
                                "Masalah → bukti → peluang",
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    o.jsxs("div", {
                      className: "section-heading",
                      children: [
                        o.jsxs("div", {
                          children: [
                            o.jsxs("h2", {
                              children: [
                                "Semua proyek",
                                " ",
                                o.jsx("span", {
                                  className: "count",
                                  children: r.length,
                                }),
                              ],
                            }),
                            o.jsx("p", {
                              children:
                                "Lanjutkan penelusuran dan bangun pemahaman Anda.",
                            }),
                          ],
                        }),
                        o.jsxs("div", {
                          className: "view-toggle",
                          children: [
                            o.jsx("button", {
                              className: se === "table" ? "selected" : "",
                              onClick: () => ct("table"),
                              "aria-label": "Tampilan daftar",
                              "aria-pressed": se === "table",
                              children: o.jsx(Rg, { size: 17 }),
                            }),
                            o.jsx("button", {
                              className: se === "grid" ? "selected" : "",
                              onClick: () => ct("grid"),
                              "aria-label": "Tampilan kartu",
                              "aria-pressed": se === "grid",
                              children: o.jsx(Mg, { size: 17 }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    o.jsxs("div", {
                      className: "toolbar",
                      children: [
                        o.jsxs("label", {
                          className: "search-field",
                          children: [
                            o.jsx(Mn, { size: 18 }),
                            o.jsx("input", {
                              "aria-label": "Cari proyek",
                              placeholder: "Cari nama proyek atau topik...",
                              value: X,
                              onChange: (_) => ye(_.target.value),
                            }),
                          ],
                        }),
                        o.jsxs("span", {
                          className: "toolbar-note",
                          children: [r.length, " proyek di workspace ini"],
                        }),
                      ],
                    }),
                    r.length === 0
                      ? o.jsx("div", {
                          className: "panel",
                          children: o.jsxs(an, {
                            title: "Riset pertama Anda dimulai di sini",
                            action: o.jsxs("div", {
                              className: "button-row",
                              children: [
                                o.jsxs("button", {
                                  className: "primary",
                                  onClick: () => De("new"),
                                  children: [
                                    o.jsx(nn, { size: 17 }),
                                    "Buat riset pertama",
                                  ],
                                }),
                                o.jsxs("button", {
                                  className: "secondary",
                                  onClick: ja,
                                  children: [
                                    "Lihat proyek demo ",
                                    o.jsx(Da, { size: 16 }),
                                  ],
                                }),
                              ],
                            }),
                            children: [
                              "Belum ada proyek. Mulai dengan industri, topik, atau daerah",
                              o.jsx("br", { className: "desktop-only" }),
                              " yang ingin Anda pahami lebih dalam.",
                            ],
                          }),
                        })
                      : o.jsxs("div", {
                          className:
                            se === "grid"
                              ? "project-grid"
                              : "project-list panel",
                          children: [
                            r
                              .filter((_) =>
                                (_.name + " " + _.topic)
                                  .toLowerCase()
                                  .includes(X.toLowerCase()),
                              )
                              .map((_) =>
                                o.jsxs(
                                  "button",
                                  {
                                    className: "project-card",
                                    onClick: () => fa(_),
                                    children: [
                                      o.jsx("span", {
                                        className: "project-icon",
                                        children: o.jsx(vf, { size: 23 }),
                                      }),
                                      o.jsxs("div", {
                                        className: "project-title",
                                        children: [
                                          o.jsxs("h3", {
                                            children: [
                                              _.name,
                                              _.demo &&
                                                o.jsx("span", {
                                                  className: "demo-tag",
                                                  children: "DEMO",
                                                }),
                                            ],
                                          }),
                                          o.jsxs("p", {
                                            children: [
                                              _.consumer,
                                              " ",
                                              o.jsx("span", { children: "·" }),
                                              " ",
                                              _.region || "Semua daerah",
                                            ],
                                          }),
                                        ],
                                      }),
                                      o.jsxs("div", {
                                        className: "project-meta",
                                        children: [
                                          o.jsx(tn, {
                                            tone: _.problems.length
                                              ? "blue"
                                              : "neutral",
                                            children: _.status,
                                          }),
                                          o.jsxs("small", {
                                            children: [
                                              "Diperbarui ",
                                              dl(_.updated),
                                            ],
                                          }),
                                        ],
                                      }),
                                      o.jsx(Ws, { size: 19 }),
                                    ],
                                  },
                                  _.id,
                                ),
                              ),
                            !r.some((_) =>
                              (_.name + " " + _.topic)
                                .toLowerCase()
                                .includes(X.toLowerCase()),
                            ) &&
                              o.jsx(an, {
                                icon: o.jsx(Mn, {}),
                                title: "Proyek tidak ditemukan",
                                children: "Coba kata kunci lain.",
                              }),
                          ],
                        }),
                    o.jsxs("div", {
                      className: "workflow-strip",
                      children: [
                        o.jsxs("div", {
                          children: [
                            o.jsx("span", { children: "01" }),
                            o.jsxs("div", {
                              children: [
                                o.jsx("strong", { children: "Tentukan fokus" }),
                                o.jsx("p", {
                                  children: "Topik, konsumen, dan konteks.",
                                }),
                              ],
                            }),
                          ],
                        }),
                        o.jsx(Ws, {}),
                        o.jsxs("div", {
                          children: [
                            o.jsx("span", { children: "02" }),
                            o.jsxs("div", {
                              children: [
                                o.jsx("strong", { children: "Periksa bukti" }),
                                o.jsx("p", {
                                  children: "Pahami temuan dan batasannya.",
                                }),
                              ],
                            }),
                          ],
                        }),
                        o.jsx(Ws, {}),
                        o.jsxs("div", {
                          children: [
                            o.jsx("span", { children: "03" }),
                            o.jsxs("div", {
                              children: [
                                o.jsx("strong", {
                                  children: "Validasi peluang",
                                }),
                                o.jsx("p", {
                                  children: "Uji asumsi sebelum melangkah.",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              y === "new" &&
                o.jsxs(o.Fragment, {
                  children: [
                    o.jsxs("button", {
                      className: "back-link",
                      onClick: () => De("projects"),
                      children: [o.jsx(Og, { size: 16 }), "Kembali ke proyek"],
                    }),
                    o.jsx("div", {
                      className: "page-heading",
                      children: o.jsxs("div", {
                        children: [
                          o.jsx("div", {
                            className: "eyebrow",
                            children: "MULAI DARI RASA INGIN TAHU",
                          }),
                          o.jsx("h1", { children: "Riset baru" }),
                          o.jsx("p", {
                            children:
                              "Berikan arah penelusuran. Simpan temuan dan telaah buktinya.",
                          }),
                        ],
                      }),
                    }),
                    o.jsxs("form", {
                      className: "research-form panel",
                      onSubmit: pi,
                      children: [
                        o.jsxs("div", {
                          className: "form-intro",
                          children: [
                            o.jsx("div", {
                              className: "square-icon",
                              children: o.jsx(Mn, { size: 23 }),
                            }),
                            o.jsxs("h2", {
                              children: [
                                "Industri, topik, atau daerah apa",
                                o.jsx("br", { className: "desktop-only" }),
                                " yang ingin Anda telusuri?",
                              ],
                            }),
                            o.jsx("p", {
                              children:
                                "Mulai dengan fokus yang spesifik agar riset lebih terarah.",
                            }),
                          ],
                        }),
                        o.jsx(Be, {
                          label: "Sumber riset",
                          children: o.jsxs("select", {
                            name: "sourceMode",
                            value: G,
                            onChange: (_) => P(_.target.value),
                            children: [
                              o.jsx("option", {
                                value: "database",
                                children: "Database lokal bawaan",
                              }),
                              o.jsx("option", {
                                value: "manual",
                                children: "Catatan manual",
                              }),
                              n?.researchConfigured &&
                                o.jsx("option", {
                                  value: "web",
                                  children: "Berita web gratis (GDELT)",
                                }),
                            ],
                          }),
                        }),
                        G === "database" &&
                          o.jsxs(o.Fragment, {
                            children: [
                              o.jsxs("div", {
                                className: "notice",
                                children: [
                                  o.jsx(er, { size: 18 }),
                                  o.jsxs("div", {
                                    children: [
                                      o.jsx("strong", {
                                        children: je
                                          ? `${je.records.length} masalah tersedia untuk dicari`
                                          : "Memuat database…",
                                      }),
                                      o.jsx("p", {
                                        children:
                                          "Masukkan kata seperti digital, BBM, atau bank. Kosongkan topik untuk seluruh data pada filter. Pencarian mencocokkan teks yang sudah tersedia, tanpa membuat fakta baru.",
                                      }),
                                      x &&
                                        o.jsxs("p", {
                                          role: "alert",
                                          children: [
                                            x,
                                            " ",
                                            o.jsx("button", {
                                              className: "text-link",
                                              type: "button",
                                              onClick: ue,
                                              children: "Coba muat lagi",
                                            }),
                                          ],
                                        }),
                                    ],
                                  }),
                                ],
                              }),
                              o.jsxs("div", {
                                className: "form-grid",
                                children: [
                                  o.jsx(Be, {
                                    label: "Sektor IDX-IC",
                                    children: o.jsxs("select", {
                                      value: pe,
                                      onChange: (_) => {
                                        (_e(_.target.value), J(""));
                                      },
                                      children: [
                                        o.jsx("option", {
                                          value: "",
                                          children: "Semua sektor",
                                        }),
                                        je &&
                                          [
                                            ...new Map(
                                              je.classification.map((_) => [
                                                _.kode_sektor,
                                                _.sektor,
                                              ]),
                                            ).entries(),
                                          ].map(([_, B]) =>
                                            o.jsxs(
                                              "option",
                                              {
                                                value: _,
                                                children: [_, " · ", B],
                                              },
                                              _,
                                            ),
                                          ),
                                      ],
                                    }),
                                  }),
                                  o.jsx(Be, {
                                    label: "Industri IDX-IC",
                                    children: o.jsxs("select", {
                                      value: xe,
                                      onChange: (_) => J(_.target.value),
                                      children: [
                                        o.jsx("option", {
                                          value: "",
                                          children: "Semua industri",
                                        }),
                                        je?.progress
                                          .filter(
                                            (_) =>
                                              !pe ||
                                              je.classification.some(
                                                (B) =>
                                                  B.kode_industri ===
                                                    _.kode_industri &&
                                                  B.kode_sektor === pe,
                                              ),
                                          )
                                          .map((_) =>
                                            o.jsxs(
                                              "option",
                                              {
                                                value: _.kode_industri,
                                                children: [
                                                  _.kode_industri,
                                                  " · ",
                                                  _.industri,
                                                  " (",
                                                  je.records.filter(
                                                    (B) =>
                                                      B.data.kode_industri ===
                                                      _.kode_industri,
                                                  ).length,
                                                  " ",
                                                  "masalah)",
                                                ],
                                              },
                                              _.kode_industri,
                                            ),
                                          ),
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        G === "database" &&
                          je?.keywordMeta &&
                          o.jsx("div", {
                            className: "notice",
                            children: o.jsxs("div", {
                              children: [
                                o.jsx("strong", {
                                  children: "Cakupan kosakata dan sumber",
                                }),
                                o.jsxs("p", {
                                  children: [
                                    je.keywordMeta.wordCount.toLocaleString(
                                      "id-ID",
                                    ),
                                    " ",
                                    "kata dari daftar pengguna;",
                                    " ",
                                    je.keywordMeta.atLeastTwo.toLocaleString(
                                      "id-ID",
                                    ),
                                    " ",
                                    "entri indeks memiliki minimal 2 masalah terkait. Database tetap ",
                                    je.records.length,
                                    " masalah bersumber, bukan 2 masalah untuk setiap kata. Hubungan kata adalah indeks penelusuran, bukan validasi klaim sumber.",
                                  ],
                                }),
                                o.jsx("a", {
                                  href: "./data/keyword-coverage.csv",
                                  download: !0,
                                  children: "Unduh cakupan setiap kata (CSV)",
                                }),
                                " ",
                                "·",
                                " ",
                                o.jsx("a", {
                                  href: je.keywordMeta.sourceUrl,
                                  target: "_blank",
                                  rel: "noreferrer",
                                  children: "Sumber daftar kata",
                                }),
                              ],
                            }),
                          }),
                        o.jsx(Be, {
                          label: "Topik atau industri",
                          children: o.jsx("input", {
                            name: "topic",
                            required: G !== "database",
                            maxLength: 160,
                            placeholder:
                              G === "database"
                                ? "Contoh: bank, BBM, pengiriman; kosongkan untuk semua"
                                : "Contoh: katering sehat untuk pekerja kantoran",
                            autoFocus: !0,
                          }),
                        }),
                        o.jsxs("div", {
                          className: "form-grid",
                          children: [
                            o.jsx(Be, {
                              label: "Daerah (opsional)",
                              children: o.jsx("input", {
                                name: "region",
                                placeholder: "Contoh: Jakarta",
                                maxLength: 100,
                              }),
                            }),
                            o.jsx(Be, {
                              label: "Kelompok konsumen",
                              children: o.jsx("input", {
                                name: "consumer",
                                placeholder: "Contoh: pekerja kantoran",
                                defaultValue: "Konsumen umum",
                                required: !0,
                                maxLength: 100,
                              }),
                            }),
                            o.jsx(Be, {
                              label: "Periode",
                              children: o.jsxs("select", {
                                name: "period",
                                defaultValue: "Semua periode",
                                children: [
                                  o.jsx("option", {
                                    children: "90 hari terakhir",
                                  }),
                                  o.jsx("option", {
                                    children: "30 hari terakhir",
                                  }),
                                  o.jsx("option", {
                                    children: "12 bulan terakhir",
                                  }),
                                  o.jsx("option", {
                                    children: "Semua periode",
                                  }),
                                ],
                              }),
                            }),
                            o.jsx(Be, {
                              label: "Bahasa",
                              children: o.jsxs("select", {
                                name: "language",
                                children: [
                                  o.jsx("option", {
                                    children: "Bahasa Indonesia",
                                  }),
                                  o.jsx("option", {
                                    children: "Bahasa Inggris",
                                  }),
                                  o.jsx("option", { children: "Semua bahasa" }),
                                ],
                              }),
                            }),
                          ],
                        }),
                        o.jsxs("details", {
                          className: "advanced",
                          children: [
                            o.jsxs("summary", {
                              children: [
                                o.jsx(W1, { size: 17 }),
                                "Opsi lanjutan ",
                                o.jsx(Ag, { size: 15 }),
                              ],
                            }),
                            o.jsxs("div", {
                              className: "form-grid",
                              children: [
                                o.jsx(Be, {
                                  label: "Kata kunci tambahan",
                                  children: o.jsx("input", {
                                    name: "keywords",
                                    placeholder: "Pisahkan dengan koma",
                                    maxLength: 200,
                                  }),
                                }),
                                o.jsx(Be, {
                                  label: "Kata kunci pengecualian",
                                  children: o.jsx("input", {
                                    name: "exclude",
                                    placeholder:
                                      "Topik yang tidak ingin disertakan",
                                    maxLength: 200,
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        o.jsxs("div", {
                          className: "notice",
                          children: [
                            o.jsx(fl, { size: 18 }),
                            o.jsxs("div", {
                              children: [
                                o.jsx("strong", {
                                  children:
                                    G === "database"
                                      ? "Database manual, belum divalidasi."
                                      : G === "web" && n?.researchConfigured
                                        ? "Penelusuran web tersedia."
                                        : "Penelusuran daring belum dikonfigurasi.",
                                }),
                                o.jsx("p", {
                                  children:
                                    G === "database"
                                      ? "Sumber dan klasifikasi mengikuti CSV unggahan Anda, belum diperiksa ulang oleh aplikasi. Periode memakai tanggal publikasi; sumber tanpa tanggal hanya masuk pada Semua periode. Alternatif dan ide belum ada dalam dataset. Hasil yang kosong tidak membuktikan masalah tidak ada."
                                      : G === "web" && n?.researchConfigured
                                        ? "Mulai riset akan mengirim parameter ke indeks berita gratis GDELT. Kandidat berasal dari judul berita, tanpa analisis AI. Periksa isi sumber dan relevansinya sendiri."
                                        : "Proyek tetap dapat dibuat. Tambahkan temuan, sumber, dan validasi secara manual. Lengkapi konfigurasi server untuk penelusuran otomatis.",
                                }),
                              ],
                            }),
                          ],
                        }),
                        o.jsxs("div", {
                          className: "form-footer",
                          children: [
                            o.jsxs("span", {
                              children: [
                                o.jsx(Zg, { size: 16 }),
                                n
                                  ? "Data tersimpan di cloud pribadi"
                                  : "Data tersimpan di browser Anda",
                              ],
                            }),
                            o.jsxs("button", {
                              className: "primary",
                              type: "submit",
                              disabled: !!zt || (G === "database" && !je),
                              children: [
                                "Mulai riset ",
                                o.jsx(Da, { size: 17 }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              y === "settings" &&
                o.jsxs(o.Fragment, {
                  children: [
                    o.jsx("div", {
                      className: "page-heading",
                      children: o.jsxs("div", {
                        children: [
                          o.jsx("div", {
                            className: "eyebrow",
                            children: "PREFERENSI WORKSPACE",
                          }),
                          o.jsx("h1", { children: "Pengaturan" }),
                          o.jsx("p", {
                            children:
                              "Kelola penyimpanan dan pahami kemampuan riset Anda.",
                          }),
                        ],
                      }),
                    }),
                    o.jsxs("section", {
                      className: "panel settings-section",
                      children: [
                        o.jsx("h2", { children: "Database manual bawaan" }),
                        o.jsx("p", {
                          children: je
                            ? `${je.records.length} masalah, ${je.records.reduce((_, B) => _ + B.evidence.length, 0)} bukti, ${je.progress.length} industri pada daftar klasifikasi. Versi ${je.version}.`
                            : x || "Memuat database…",
                        }),
                        o.jsx("p", {
                          children:
                            "Data bawaan tidak menimpa proyek pribadi. Setiap pencarian membuat salinan hasil sebagai proyek yang dapat disunting. Semua sumber mengikuti unggahan dan belum diperiksa ulang.",
                        }),
                        o.jsx("div", {
                          className: "button-row csv-downloads",
                          children: [
                            "klasifikasi_idx_ic.csv",
                            "masalah.csv",
                            "bukti.csv",
                            "progres.csv",
                          ].map((_) =>
                            o.jsxs(
                              "a",
                              {
                                className: "secondary",
                                download: !0,
                                href: "./data/manual-csv/" + _,
                                children: [o.jsx(tr, { size: 15 }), _],
                              },
                              _,
                            ),
                          ),
                        }),
                      ],
                    }),
                    o.jsxs("section", {
                      className: "panel settings-section",
                      children: [
                        o.jsxs("div", {
                          className: "section-heading",
                          children: [
                            o.jsxs("div", {
                              children: [
                                o.jsx("h2", { children: "Integrasi sumber" }),
                                o.jsx("p", {
                                  children:
                                    "Pencarian daring membutuhkan layanan riset di server.",
                                }),
                              ],
                            }),
                            o.jsx(tn, {
                              children: n?.researchConfigured
                                ? "Tersedia"
                                : "Belum dikonfigurasi",
                            }),
                          ],
                        }),
                        o.jsxs("div", {
                          className: "notice",
                          children: [
                            o.jsx(fl, { size: 19 }),
                            o.jsx("p", {
                              children: n?.researchConfigured
                                ? "Pencarian berita gratis tersedia melalui GDELT, maksimal tiga bulan. Tidak ada biaya API atau analisis AI otomatis. Baca sumber dan validasi setiap kandidat. Jeda antar-riset dua menit."
                                : "Riset manual tersedia. Untuk riset otomatis, lengkapi URL dan kunci publik Supabase pada server. Pencarian GDELT tidak membutuhkan API key berbayar.",
                            }),
                          ],
                        }),
                        o.jsxs("div", {
                          className: "setting-row",
                          children: [
                            o.jsxs("div", {
                              children: [
                                o.jsx("strong", { children: "Riset manual" }),
                                o.jsx("p", {
                                  children:
                                    "Tambahkan masalah, bukti, alternatif, dan ide sendiri.",
                                }),
                              ],
                            }),
                            o.jsx(tn, { tone: "blue", children: "Tersedia" }),
                          ],
                        }),
                        o.jsxs("div", {
                          className: "setting-row",
                          children: [
                            o.jsxs("div", {
                              children: [
                                o.jsx("strong", { children: "Ekspor laporan" }),
                                o.jsx("p", {
                                  children:
                                    "Excel dan PDF untuk seluruh proyek atau satu masalah.",
                                }),
                              ],
                            }),
                            o.jsx(tn, { tone: "blue", children: "Tersedia" }),
                          ],
                        }),
                      ],
                    }),
                    o.jsxs("section", {
                      className: "panel settings-section",
                      children: [
                        o.jsx("h2", {
                          children: n
                            ? "Penyimpanan cloud pribadi"
                            : "Penyimpanan lokal",
                        }),
                        o.jsx("p", {
                          children: n
                            ? "Proyek disimpan di database pribadi setelah status sinkronisasi terkonfirmasi. Perubahan bersamaan dari tab lain akan ditolak agar data tidak tertimpa."
                            : "Data hanya tersedia di browser ini. Menghapus data situs akan menghapus proyek. Gunakan ekspor untuk menyimpan laporan.",
                        }),
                        o.jsxs("div", {
                          className: "setting-row",
                          children: [
                            o.jsxs("div", {
                              children: [
                                o.jsxs("strong", {
                                  children: [
                                    r.length,
                                    " proyek · ",
                                    Dt.length,
                                    " masalah tersimpan",
                                  ],
                                }),
                                o.jsx("p", {
                                  children:
                                    "Data demo selalu diberi label dan dipisahkan dari proyek nyata.",
                                }),
                              ],
                            }),
                            o.jsxs("button", {
                              className: "secondary",
                              onClick: ja,
                              children: [o.jsx(mu, { size: 17 }), "Buka demo"],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              y === "saved" &&
                o.jsxs(o.Fragment, {
                  children: [
                    o.jsx("div", {
                      className: "page-heading",
                      children: o.jsxs("div", {
                        children: [
                          o.jsx("div", {
                            className: "eyebrow",
                            children: "KOLEKSI ANDA",
                          }),
                          o.jsx("h1", { children: "Masalah tersimpan" }),
                          o.jsx("p", {
                            children:
                              "Temuan yang ingin Anda pelajari dan validasi lebih lanjut.",
                          }),
                        ],
                      }),
                    }),
                    o.jsx("div", {
                      className: "panel",
                      children: Dt.length
                        ? Dt.map(({ p: _, b: B }) =>
                            o.jsxs(
                              "div",
                              {
                                className: "saved-row",
                                children: [
                                  o.jsx(Fs, { size: 20 }),
                                  o.jsxs("button", {
                                    className: "saved-title",
                                    onClick: () => ea(_, B),
                                    children: [
                                      o.jsx("h3", { children: B.title }),
                                      o.jsxs("p", {
                                        children: [
                                          _.name,
                                          " ",
                                          _.demo ? "· Demo" : "",
                                          " · ",
                                          B.consumer,
                                        ],
                                      }),
                                    ],
                                  }),
                                  o.jsx(tn, { children: du(B) }),
                                  o.jsx("button", {
                                    className: "icon-button",
                                    "aria-label": `Hapus simpan ${B.title}`,
                                    onClick: () => {
                                      (c((F) =>
                                        F.map((Te) => ({
                                          ...Te,
                                          problems: Te.problems.map((Xe) =>
                                            Xe.id === B.id
                                              ? { ...Xe, saved: !1 }
                                              : Xe,
                                          ),
                                        })),
                                      ),
                                        Se("Masalah dihapus dari koleksi."));
                                    },
                                    children: o.jsx(yf, { size: 18 }),
                                  }),
                                ],
                              },
                              B.id,
                            ),
                          )
                        : o.jsx(an, {
                            icon: o.jsx(Fs, {}),
                            title: "Simpan temuan yang berarti",
                            action: o.jsxs("button", {
                              className: "secondary",
                              onClick: () => De("projects"),
                              children: [
                                "Jelajahi proyek ",
                                o.jsx(Da, { size: 16 }),
                              ],
                            }),
                            children:
                              "Buka detail masalah, lalu pilih Simpan untuk mengumpulkannya di sini.",
                          }),
                    }),
                  ],
                }),
              ["screening", "detail", "validation"].includes(y) &&
                V &&
                o.jsxs(o.Fragment, {
                  children: [
                    o.jsxs("button", {
                      className: "back-link",
                      onClick: () =>
                        De(y === "screening" ? "projects" : "screening"),
                      children: [
                        o.jsx(Og, { size: 16 }),
                        y === "screening" ? "Semua proyek" : "Hasil screening",
                      ],
                    }),
                    V.demo &&
                      o.jsxs("div", {
                        className: "notice demo-notice",
                        children: [
                          o.jsx(mu, { size: 18 }),
                          o.jsxs("p", {
                            children: [
                              o.jsx("strong", {
                                children: "Proyek demonstrasi.",
                              }),
                              " Semua masalah, kutipan, dan ide adalah ilustrasi, bukan hasil riset nyata.",
                            ],
                          }),
                        ],
                      }),
                    o.jsxs("div", {
                      className: "context-nav",
                      children: [
                        o.jsx("button", {
                          className: y === "screening" ? "current" : "",
                          onClick: () => De("screening"),
                          children: "Hasil screening",
                        }),
                        o.jsx("button", {
                          className: y === "validation" ? "current" : "",
                          onClick: () => De("validation"),
                          children: "Rencana validasi",
                        }),
                      ],
                    }),
                    y === "screening" &&
                      o.jsxs(o.Fragment, {
                        children: [
                          o.jsxs("div", {
                            className: "page-heading",
                            children: [
                              o.jsxs("div", {
                                children: [
                                  o.jsxs("div", {
                                    className: "eyebrow",
                                    children: [
                                      "PROYEK RISET ",
                                      V.demo ? "· DEMO" : "",
                                    ],
                                  }),
                                  o.jsx("h1", { children: V.name }),
                                  o.jsxs("div", {
                                    className: "metadata",
                                    children: [
                                      o.jsxs("span", {
                                        children: [
                                          o.jsx(Ug, { size: 14 }),
                                          V.region || "Semua daerah",
                                        ],
                                      }),
                                      o.jsxs("span", {
                                        children: [
                                          o.jsx(Cg, { size: 14 }),
                                          V.period,
                                        ],
                                      }),
                                      o.jsx("span", { children: V.consumer }),
                                      o.jsx("span", { children: V.language }),
                                    ],
                                  }),
                                  (V.keywords || V.exclude) &&
                                    o.jsxs("p", {
                                      className: "small-text",
                                      children: [
                                        "Kata kunci: ",
                                        V.keywords || "—",
                                        " · Pengecualian:",
                                        " ",
                                        V.exclude || "—",
                                      ],
                                    }),
                                ],
                              }),
                              o.jsxs("div", {
                                className: "button-row",
                                children: [
                                  o.jsxs("button", {
                                    className: "secondary",
                                    onClick: () => yl(),
                                    children: [
                                      o.jsx(tr, { size: 16 }),
                                      "Ekspor",
                                    ],
                                  }),
                                  n?.researchConfigured &&
                                    !V.demo &&
                                    o.jsxs("button", {
                                      className: "primary",
                                      disabled: !!zt,
                                      onClick: () => he("research"),
                                      children: [
                                        o.jsx(Mn, { size: 16 }),
                                        zt === V.id
                                          ? "Riset berlangsung…"
                                          : "Telusuri web",
                                      ],
                                    }),
                                  o.jsx("button", {
                                    className: "icon-button bordered",
                                    "aria-label": "Hapus proyek",
                                    onClick: () => he("delete"),
                                    children: o.jsx(Hg, { size: 18 }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          o.jsxs("div", {
                            className: "status-line",
                            children: [
                              o.jsx(tn, { tone: "blue", children: V.status }),
                              o.jsxs("small", {
                                children: ["Diperbarui ", dl(V.updated)],
                              }),
                            ],
                          }),
                          o.jsxs("div", {
                            className: "notice",
                            children: [
                              o.jsx(er, { size: 19 }),
                              o.jsxs("div", {
                                children: [
                                  o.jsx("strong", {
                                    children: "Cakupan & batasan riset",
                                  }),
                                  o.jsxs("p", {
                                    children: [
                                      V.database
                                        ? `Pencarian offline pada database manual: ${V.database.matchedProblems} dari ${V.database.totalProblems} masalah cocok saat pencarian. Sumber mengikuti CSV unggahan, belum diperiksa ulang. Ini laporan awal, bukan validasi pasar atau analisis AI.`
                                        : V.research
                                          ? V.research.limitations
                                          : V.demo
                                            ? "Data ilustrasi untuk menjelajahi alur produk. Tidak ada sumber konsumen nyata yang ditelusuri."
                                            : V.problems.length
                                              ? "Temuan ditambahkan secara manual. Kelengkapan dan representativitas sumber belum diverifikasi. Hasil ini bukan gambaran seluruh pasar."
                                              : "Integrasi pencarian belum tersedia. Belum ada sumber yang ditelusuri. Hasil kosong tidak berarti masalah konsumen tidak ada.",
                                      " ",
                                      "Bukti berulang dari URL dan kutipan yang sama dihitung satu kali.",
                                    ],
                                  }),
                                  V.database &&
                                    o.jsxs("details", {
                                      className: "coverage-details",
                                      children: [
                                        o.jsx("summary", {
                                          children:
                                            "Rincian cakupan dan filter",
                                        }),
                                        o.jsx("p", {
                                          children: V.research?.limitations,
                                        }),
                                      ],
                                    }),
                                ],
                              }),
                            ],
                          }),
                          o.jsxs("div", {
                            className: "section-heading",
                            children: [
                              o.jsxs("div", {
                                children: [
                                  o.jsxs("h2", {
                                    children: [
                                      "Masalah teridentifikasi",
                                      " ",
                                      o.jsx("span", {
                                        className: "count",
                                        children: V.problems.length,
                                      }),
                                    ],
                                  }),
                                  o.jsx("p", {
                                    children:
                                      "Periksa bukti terlebih dahulu sebelum menarik kesimpulan.",
                                  }),
                                ],
                              }),
                              o.jsxs("button", {
                                className: "secondary",
                                onClick: () => he("problem"),
                                children: [
                                  o.jsx(nn, { size: 17 }),
                                  "Tambah masalah",
                                ],
                              }),
                            ],
                          }),
                          o.jsxs("div", {
                            className: "toolbar screening-tools",
                            children: [
                              o.jsxs("label", {
                                className: "search-field",
                                children: [
                                  o.jsx(Mn, { size: 17 }),
                                  o.jsx("input", {
                                    "aria-label": "Cari masalah",
                                    value: X,
                                    onChange: (_) => ye(_.target.value),
                                    placeholder:
                                      "Cari masalah atau konsumen...",
                                  }),
                                ],
                              }),
                              o.jsxs("select", {
                                "aria-label": "Filter kelengkapan bukti",
                                value: Ae,
                                onChange: (_) => de(_.target.value),
                                children: [
                                  o.jsx("option", { children: "Semua bukti" }),
                                  o.jsx("option", {
                                    children: "Cukup untuk ditelaah",
                                  }),
                                  o.jsx("option", { children: "Terbatas" }),
                                  o.jsx("option", {
                                    children: "Belum ada bukti",
                                  }),
                                ],
                              }),
                              o.jsxs("select", {
                                "aria-label": "Urutkan masalah",
                                value: ce,
                                onChange: (_) => ae(_.target.value),
                                children: [
                                  o.jsx("option", {
                                    children: "Bukti terbanyak",
                                  }),
                                  o.jsx("option", {
                                    children: "Sumber terbanyak",
                                  }),
                                  o.jsx("option", { children: "Nama masalah" }),
                                ],
                              }),
                              o.jsxs("div", {
                                className: "view-toggle",
                                children: [
                                  o.jsx("button", {
                                    "aria-label": "Tampilan tabel masalah",
                                    "aria-pressed": se === "table",
                                    className: se === "table" ? "selected" : "",
                                    onClick: () => ct("table"),
                                    children: o.jsx(Rg, { size: 17 }),
                                  }),
                                  o.jsx("button", {
                                    "aria-label": "Tampilan kartu masalah",
                                    "aria-pressed": se === "grid",
                                    className: se === "grid" ? "selected" : "",
                                    onClick: () => ct("grid"),
                                    children: o.jsx(Mg, { size: 17 }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          o.jsx("div", {
                            className: "panel",
                            children: qn.length
                              ? o.jsxs(o.Fragment, {
                                  children: [
                                    o.jsxs("div", {
                                      className: `problem-table ${se === "grid" ? "as-grid" : ""}`,
                                      children: [
                                        o.jsxs("div", {
                                          className: "table-head",
                                          children: [
                                            o.jsx("span", {
                                              children: "Masalah",
                                            }),
                                            o.jsx("span", {
                                              children: "Konsumen",
                                            }),
                                            o.jsx("span", {
                                              children: "Bukti unik",
                                            }),
                                            o.jsx("span", {
                                              children: "Sumber",
                                            }),
                                            o.jsx("span", {
                                              children: "Kebaruan",
                                            }),
                                            o.jsx("span", {
                                              children: "Kelengkapan bukti",
                                            }),
                                            o.jsx("span", {
                                              children: "Validasi",
                                            }),
                                          ],
                                        }),
                                        qn.map((_) =>
                                          o.jsxs(
                                            "button",
                                            {
                                              className: "problem-row",
                                              onClick: () => ea(V, _),
                                              children: [
                                                o.jsxs("span", {
                                                  className: "problem-name",
                                                  children: [
                                                    _.title,
                                                    o.jsx(Da, { size: 15 }),
                                                  ],
                                                }),
                                                o.jsx("span", {
                                                  "data-label": "Konsumen",
                                                  children: _.consumer,
                                                }),
                                                o.jsx("span", {
                                                  "data-label": "Bukti unik",
                                                  className: "numeric",
                                                  children: gu(_),
                                                }),
                                                o.jsx("span", {
                                                  "data-label":
                                                    "Sumber berbeda",
                                                  className: "numeric",
                                                  children: vu(_),
                                                }),
                                                o.jsx("span", {
                                                  "data-label": "Bukti terbaru",
                                                  children: Tg(_)
                                                    ? dl(Tg(_))
                                                    : _.evidence.length
                                                      ? "Tanggal publikasi tidak diketahui"
                                                      : "Belum ada",
                                                }),
                                                o.jsx("span", {
                                                  "data-label": "Kelengkapan",
                                                  children: o.jsx(tn, {
                                                    tone:
                                                      du(_) ===
                                                      "Cukup untuk ditelaah"
                                                        ? "blue"
                                                        : "neutral",
                                                    children: du(_),
                                                  }),
                                                }),
                                                o.jsx("span", {
                                                  "data-label": "Validasi",
                                                  className: "small-text",
                                                  children: Ng(_),
                                                }),
                                              ],
                                            },
                                            _.id,
                                          ),
                                        ),
                                      ],
                                    }),
                                    o.jsxs("div", {
                                      className: "table-footer",
                                      children: [
                                        "Menampilkan ",
                                        qn.length,
                                        " dari",
                                        " ",
                                        V.problems.length,
                                        " masalah",
                                        " ",
                                        o.jsx("span", {
                                          children:
                                            "Tidak menggunakan skor peluang otomatis",
                                        }),
                                      ],
                                    }),
                                  ],
                                })
                              : o.jsx(an, {
                                  icon: o.jsx(Mn, {}),
                                  title: V.problems.length
                                    ? "Tidak ada hasil sesuai filter"
                                    : V.database
                                      ? "Tidak ada kecocokan dalam database"
                                      : "Belum ada temuan untuk ditelaah",
                                  action: V.problems.length
                                    ? o.jsx("button", {
                                        className: "secondary",
                                        onClick: () => {
                                          (ye(""), de("Semua bukti"));
                                        },
                                        children: "Reset filter",
                                      })
                                    : o.jsxs("button", {
                                        className: "primary",
                                        onClick: () => he("problem"),
                                        children: [
                                          o.jsx(nn, { size: 16 }),
                                          "Tambah temuan manual",
                                        ],
                                      }),
                                  children: V.problems.length
                                    ? "Coba kata kunci atau kelengkapan bukti lain."
                                    : V.database
                                      ? "Tidak ada catatan yang cocok dengan filter pada database ini. Coba topik lebih sederhana atau Semua periode. Ini tidak membuktikan masalah tidak ada."
                                      : "Tambahkan masalah dari sumber yang Anda periksa. Tidak ada sumber yang ditelusuri otomatis.",
                                }),
                          }),
                          o.jsxs("div", {
                            className: "explanation",
                            children: [
                              o.jsx(fl, { size: 16 }),
                              o.jsxs("p", {
                                children: [
                                  o.jsx("strong", { children: "Bukti unik" }),
                                  " adalah pasangan URL dan kutipan yang berbeda. ",
                                  o.jsx("strong", {
                                    children: "Sumber berbeda",
                                  }),
                                  " ",
                                  "dihitung berdasarkan domain. “Cukup untuk ditelaah” berarti ≥3 bukti dari ≥2 domain, bukan jaminan kebenaran atau peluang menguntungkan.",
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    y === "detail" &&
                      I &&
                      o.jsxs(o.Fragment, {
                        children: [
                          o.jsxs("div", {
                            className: "page-heading detail-heading",
                            children: [
                              o.jsxs("div", {
                                children: [
                                  o.jsx("div", {
                                    className: "eyebrow",
                                    children: "DETAIL MASALAH",
                                  }),
                                  o.jsx("h1", { children: I.title }),
                                  o.jsx("p", { children: I.summary }),
                                  I.origin &&
                                    o.jsxs("div", {
                                      className: "notice",
                                      children: [
                                        o.jsx(er, { size: 17 }),
                                        o.jsxs("p", {
                                          children: [
                                            "Data impor ",
                                            I.origin.sourceId,
                                            " ·",
                                            " ",
                                            I.origin.industryCode,
                                            " ",
                                            I.origin.industry,
                                            " · ",
                                            I.origin.region,
                                            ". Status asal: ",
                                            I.origin.validation,
                                            ". Sumber belum diperiksa ulang oleh aplikasi. Versi",
                                            " ",
                                            I.origin.datasetVersion,
                                            ".",
                                          ],
                                        }),
                                      ],
                                    }),
                                  o.jsxs("div", {
                                    className: "metadata",
                                    children: [
                                      o.jsx("span", { children: I.consumer }),
                                      o.jsxs("span", {
                                        children: [
                                          o.jsx(Ug, { size: 14 }),
                                          V.region || "Semua daerah",
                                        ],
                                      }),
                                      o.jsxs("span", {
                                        children: [
                                          o.jsx(Cg, { size: 14 }),
                                          V.period,
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              o.jsxs("div", {
                                className: "button-row",
                                children: [
                                  o.jsx("button", {
                                    className: "primary",
                                    onClick: () => {
                                      const _ = Y1(V, I);
                                      (Za((B) => ({
                                        ...B,
                                        plans: [...(B.plans || []), _],
                                      })),
                                        g(_.id),
                                        De("plans"));
                                    },
                                    children: "Buat Business Plan",
                                  }),
                                  o.jsxs("button", {
                                    className: I.saved
                                      ? "secondary saved"
                                      : "secondary",
                                    onClick: () => {
                                      (da((_) => ({ ..._, saved: !_.saved })),
                                        Se(
                                          I.saved
                                            ? "Dihapus dari koleksi."
                                            : "Masalah berhasil disimpan.",
                                        ));
                                    },
                                    children: [
                                      o.jsx(Fs, {
                                        size: 16,
                                        fill: I.saved ? "currentColor" : "none",
                                      }),
                                      I.saved ? "Tersimpan" : "Simpan",
                                    ],
                                  }),
                                  o.jsxs("button", {
                                    className: "secondary",
                                    onClick: () => yl("problem"),
                                    children: [
                                      o.jsx(tr, { size: 16 }),
                                      "Ekspor",
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          o.jsxs("div", {
                            className: "evidence-summary",
                            children: [
                              o.jsxs("div", {
                                children: [
                                  o.jsx("span", {
                                    className: "small-text",
                                    children: "Kekuatan bukti",
                                  }),
                                  o.jsx("strong", { children: du(I) }),
                                ],
                              }),
                              o.jsxs("div", {
                                children: [
                                  o.jsx("span", {
                                    className: "small-text",
                                    children: "Bukti unik / domain sumber",
                                  }),
                                  o.jsxs("strong", {
                                    children: [gu(I), " / ", vu(I)],
                                  }),
                                ],
                              }),
                              o.jsxs("p", {
                                children: [o.jsx(fl, { size: 17 }), I.unknown],
                              }),
                            ],
                          }),
                          o.jsx("div", {
                            className: "tabs",
                            role: "tablist",
                            "aria-label": "Bagian detail masalah",
                            children: Tx.map((_) =>
                              o.jsxs(
                                "button",
                                {
                                  role: "tab",
                                  "aria-selected": M === _,
                                  onClick: () => q(_),
                                  children: [
                                    _,
                                    _ === "Bukti" &&
                                      o.jsx("span", {
                                        className: "count",
                                        children: I.evidence.length,
                                      }),
                                  ],
                                },
                                _,
                              ),
                            ),
                          }),
                          o.jsxs("div", {
                            role: "tabpanel",
                            "aria-label": M,
                            children: [
                              M === "Ringkasan" &&
                                o.jsxs("div", {
                                  className: "detail-grid",
                                  children: [
                                    o.jsxs("section", {
                                      className: "panel detail-section",
                                      children: [
                                        o.jsxs("div", {
                                          className: "section-heading",
                                          children: [
                                            o.jsx("h2", {
                                              children: "Memahami masalah",
                                            }),
                                            o.jsx("span", {
                                              className: "label-label",
                                              children: "Kesimpulan Analisis",
                                            }),
                                          ],
                                        }),
                                        [
                                          {
                                            label: "Situasi pemicu",
                                            key: "trigger",
                                          },
                                          {
                                            label: "Dampak bagi konsumen",
                                            key: "impact",
                                          },
                                          {
                                            label: "Pola kejadian",
                                            key: "pattern",
                                          },
                                          {
                                            label: "Dugaan akar masalah",
                                            key: "root",
                                          },
                                          {
                                            label:
                                              "Pertanyaan yang belum terjawab",
                                            key: "unknown",
                                          },
                                        ].map((_) =>
                                          o.jsxs(
                                            "div",
                                            {
                                              className: "analysis-item",
                                              children: [
                                                o.jsx("h3", {
                                                  children: _.label,
                                                }),
                                                o.jsx("p", {
                                                  children: I[_.key],
                                                }),
                                              ],
                                            },
                                            _.key,
                                          ),
                                        ),
                                        o.jsxs("details", {
                                          className: "advanced",
                                          children: [
                                            o.jsxs("summary", {
                                              children: [
                                                "Sunting analisis ",
                                                o.jsx(Ag, { size: 15 }),
                                              ],
                                            }),
                                            o.jsxs("form", {
                                              onSubmit: (_) => {
                                                _.preventDefault();
                                                const B = new FormData(
                                                  _.currentTarget,
                                                );
                                                (da((F) => ({
                                                  ...F,
                                                  summary: String(
                                                    B.get("summary"),
                                                  ),
                                                  trigger: String(
                                                    B.get("trigger"),
                                                  ),
                                                  impact: String(
                                                    B.get("impact"),
                                                  ),
                                                  pattern: String(
                                                    B.get("pattern"),
                                                  ),
                                                  root: String(B.get("root")),
                                                  unknown: String(
                                                    B.get("unknown"),
                                                  ),
                                                })),
                                                  Se("Analisis diperbarui."));
                                              },
                                              children: [
                                                [
                                                  {
                                                    label: "Ringkasan",
                                                    key: "summary",
                                                  },
                                                  {
                                                    label: "Situasi pemicu",
                                                    key: "trigger",
                                                  },
                                                  {
                                                    label: "Dampak",
                                                    key: "impact",
                                                  },
                                                  {
                                                    label: "Pola kejadian",
                                                    key: "pattern",
                                                  },
                                                  {
                                                    label:
                                                      "Dugaan akar masalah",
                                                    key: "root",
                                                  },
                                                  {
                                                    label: "Belum diketahui",
                                                    key: "unknown",
                                                  },
                                                ].map((_) =>
                                                  o.jsx(
                                                    Be,
                                                    {
                                                      label: _.label,
                                                      children: o.jsx(
                                                        "textarea",
                                                        {
                                                          name: _.key,
                                                          defaultValue:
                                                            I[_.key],
                                                          required: !0,
                                                          maxLength: 3e3,
                                                        },
                                                      ),
                                                    },
                                                    _.key,
                                                  ),
                                                ),
                                                o.jsx("button", {
                                                  className: "primary",
                                                  children: "Simpan analisis",
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    o.jsxs("aside", {
                                      className: "detail-aside",
                                      children: [
                                        o.jsxs("section", {
                                          className: "panel detail-section",
                                          children: [
                                            o.jsx("span", {
                                              className: "square-icon",
                                              children: o.jsx(mu, { size: 22 }),
                                            }),
                                            o.jsx("h2", {
                                              children:
                                                "Langkah yang masuk akal",
                                            }),
                                            o.jsx("p", {
                                              children:
                                                "Periksa sumber asli, cari sudut pandang yang berlawanan, lalu uji asumsi dengan konsumen.",
                                            }),
                                            o.jsxs("button", {
                                              className: "text-link",
                                              onClick: () => q("Validasi"),
                                              children: [
                                                "Susun validasi ",
                                                o.jsx(Da, { size: 16 }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        o.jsxs("div", {
                                          className: "notice",
                                          children: [
                                            o.jsx(fl, { size: 17 }),
                                            o.jsx("p", {
                                              children:
                                                "Analisis adalah interpretasi. Buka tab Bukti untuk memeriksa sumber yang mendasarinya.",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              M === "Bukti" &&
                                o.jsxs("section", {
                                  className: "panel detail-section",
                                  children: [
                                    o.jsxs("div", {
                                      className: "section-heading",
                                      children: [
                                        o.jsxs("div", {
                                          children: [
                                            o.jsx("h2", {
                                              children: "Jejak bukti",
                                            }),
                                            o.jsx("p", {
                                              children:
                                                "Periksa kutipan dalam konteks sumber aslinya.",
                                            }),
                                          ],
                                        }),
                                        o.jsxs("button", {
                                          className: "secondary",
                                          onClick: () => he("evidence"),
                                          children: [
                                            o.jsx(nn, { size: 16 }),
                                            "Tambah bukti",
                                          ],
                                        }),
                                      ],
                                    }),
                                    I.evidence.length
                                      ? I.evidence.map((_) =>
                                          o.jsxs(
                                            "article",
                                            {
                                              className: "evidence-card",
                                              children: [
                                                o.jsxs("div", {
                                                  className: "section-heading",
                                                  children: [
                                                    o.jsx("span", {
                                                      className: "label-label",
                                                      children: _.kind,
                                                    }),
                                                    o.jsx("small", {
                                                      children: _.imported
                                                        ? _.imported
                                                            .publicationDate
                                                          ? dl(
                                                              _.imported
                                                                .publicationDate,
                                                            )
                                                          : "Tanggal publikasi tidak diketahui"
                                                        : dl(_.date),
                                                    }),
                                                  ],
                                                }),
                                                _.imported &&
                                                  o.jsxs("div", {
                                                    className: "notice",
                                                    children: [
                                                      o.jsx(fl, { size: 16 }),
                                                      o.jsxs("p", {
                                                        children: [
                                                          _.imported
                                                            .textType ===
                                                          "ringkasan_sumber"
                                                            ? "Ringkasan sumber dari CSV, bukan kutipan langsung."
                                                            : "Teks bukti dari CSV.",
                                                          " ",
                                                          "Akses yang diklaim file:",
                                                          " ",
                                                          _.imported
                                                            .accessClaim,
                                                          "; belum diverifikasi ulang. Tanggal publikasi:",
                                                          " ",
                                                          _.imported
                                                            .publicationDate ||
                                                            "tidak diketahui",
                                                          ". Pemeriksaan menurut CSV:",
                                                          " ",
                                                          _.imported
                                                            .checkedAt ||
                                                            "tidak diketahui",
                                                          ".",
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                o.jsx("blockquote", {
                                                  children: _.quote,
                                                }),
                                                o.jsx("p", {
                                                  children: _.context,
                                                }),
                                                o.jsxs("div", {
                                                  className: "evidence-footer",
                                                  children: [
                                                    o.jsxs("a", {
                                                      href: _.url,
                                                      target: "_blank",
                                                      rel: "noreferrer",
                                                      children: [
                                                        _.source,
                                                        o.jsx(I1, { size: 14 }),
                                                      ],
                                                    }),
                                                    _.snippet &&
                                                      o.jsx(tn, {
                                                        children:
                                                          "Hanya cuplikan pencarian",
                                                      }),
                                                    o.jsx("button", {
                                                      className: "icon-button",
                                                      "aria-label": `Hapus bukti ${_.source}`,
                                                      onClick: () => {
                                                        (da((B) => ({
                                                          ...B,
                                                          evidence:
                                                            B.evidence.filter(
                                                              (F) =>
                                                                F.id !== _.id,
                                                            ),
                                                        })),
                                                          Se("Bukti dihapus."));
                                                      },
                                                      children: o.jsx(Hg, {
                                                        size: 15,
                                                      }),
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            },
                                            _.id,
                                          ),
                                        )
                                      : o.jsx(an, {
                                          icon: o.jsx(nf, {}),
                                          title: "Belum ada bukti",
                                          children:
                                            "Tambahkan kutipan, URL sumber, dan tanggal untuk mendukung masalah ini.",
                                        }),
                                  ],
                                }),
                              M === "Alternatif Solusi" &&
                                o.jsxs("section", {
                                  className: "panel detail-section",
                                  children: [
                                    o.jsxs("div", {
                                      className: "section-heading",
                                      children: [
                                        o.jsxs("div", {
                                          children: [
                                            o.jsx("h2", {
                                              children:
                                                "Bagaimana masalah ini diatasi?",
                                            }),
                                            o.jsx("p", {
                                              children:
                                                "Pisahkan klaim penyedia dari pengalaman konsumen.",
                                            }),
                                          ],
                                        }),
                                        o.jsxs("button", {
                                          className: "secondary",
                                          onClick: () => he("alternative"),
                                          children: [
                                            o.jsx(nn, { size: 16 }),
                                            "Tambah alternatif",
                                          ],
                                        }),
                                      ],
                                    }),
                                    I.alternatives.length
                                      ? I.alternatives.map((_, B) =>
                                          o.jsxs(
                                            "article",
                                            {
                                              className: "evidence-card",
                                              children: [
                                                o.jsx("span", {
                                                  className: "label-label",
                                                  children: _.type,
                                                }),
                                                o.jsx("h3", {
                                                  children: _.name,
                                                }),
                                                o.jsx("p", {
                                                  children: _.description,
                                                }),
                                                o.jsxs("div", {
                                                  className:
                                                    "alternative-price",
                                                  children: [
                                                    o.jsx("strong", {
                                                      children: _.price,
                                                    }),
                                                    o.jsx("small", {
                                                      children: _.checked
                                                        ? `Diperiksa ${dl(_.checked)}`
                                                        : "Harga belum diverifikasi",
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            },
                                            B,
                                          ),
                                        )
                                      : o.jsx(an, {
                                          icon: o.jsx(Dg, {}),
                                          title: "Alternatif belum dipetakan",
                                          children:
                                            "Catat produk, jasa, atau cara manual yang benar-benar diperiksa.",
                                        }),
                                  ],
                                }),
                              M === "Peluang" &&
                                o.jsxs("section", {
                                  className: "panel detail-section",
                                  children: [
                                    o.jsxs("div", {
                                      className: "section-heading",
                                      children: [
                                        o.jsxs("div", {
                                          children: [
                                            o.jsx("h2", {
                                              children: "Ruang untuk diuji",
                                            }),
                                            o.jsx("p", {
                                              children:
                                                "Ide adalah hipotesis, belum menjadi rekomendasi bisnis.",
                                            }),
                                          ],
                                        }),
                                        o.jsxs("button", {
                                          className: "secondary",
                                          onClick: () => he("idea"),
                                          children: [
                                            o.jsx(nn, { size: 16 }),
                                            "Tambah ide",
                                          ],
                                        }),
                                      ],
                                    }),
                                    I.ideas.length
                                      ? I.ideas.map((_, B) =>
                                          o.jsxs(
                                            "article",
                                            {
                                              className: "idea-card",
                                              children: [
                                                o.jsx("span", {
                                                  className: "label-label",
                                                  children: "Hipotesis Ide",
                                                }),
                                                o.jsx("h3", {
                                                  children: _.name,
                                                }),
                                                o.jsx("div", {
                                                  className: "form-grid",
                                                  children: [
                                                    {
                                                      l: "Calon pembeli",
                                                      v: _.buyer,
                                                    },
                                                    {
                                                      l: "Model penawaran / perantara",
                                                      v: _.model,
                                                    },
                                                    {
                                                      l: "Mitra yang dibutuhkan",
                                                      v: _.partners,
                                                    },
                                                    {
                                                      l: "Asumsi yang perlu diuji",
                                                      v: _.assumption,
                                                    },
                                                  ].map((F) =>
                                                    o.jsxs(
                                                      "div",
                                                      {
                                                        children: [
                                                          o.jsx("h4", {
                                                            children: F.l,
                                                          }),
                                                          o.jsx("p", {
                                                            children: F.v,
                                                          }),
                                                        ],
                                                      },
                                                      F.l,
                                                    ),
                                                  ),
                                                }),
                                                o.jsxs("div", {
                                                  className: "notice",
                                                  children: [
                                                    o.jsx(fl, { size: 17 }),
                                                    o.jsxs("p", {
                                                      children: [
                                                        o.jsx("strong", {
                                                          children: "Risiko: ",
                                                        }),
                                                        _.risk,
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                                o.jsxs("p", {
                                                  children: [
                                                    o.jsx("strong", {
                                                      children:
                                                        "Alasan & bukti pendukung: ",
                                                    }),
                                                    _.reason,
                                                  ],
                                                }),
                                                o.jsxs("button", {
                                                  className: "text-link",
                                                  onClick: () => q("Bukti"),
                                                  children: [
                                                    "Periksa jejak bukti ",
                                                    o.jsx(Da, { size: 15 }),
                                                  ],
                                                }),
                                              ],
                                            },
                                            B,
                                          ),
                                        )
                                      : o.jsx(an, {
                                          icon: o.jsx(mu, {}),
                                          title: "Belum ada hipotesis peluang",
                                          children:
                                            "Tinjau bukti dan alternatif sebelum menyusun penawaran baru.",
                                        }),
                                  ],
                                }),
                              M === "Validasi" &&
                                o.jsx(Ox, {
                                  problem: I,
                                  update: da,
                                  notify: Se,
                                }),
                            ],
                          }),
                        ],
                      }),
                    y === "validation" &&
                      o.jsxs(o.Fragment, {
                        children: [
                          o.jsx("div", {
                            className: "page-heading",
                            children: o.jsxs("div", {
                              children: [
                                o.jsx("div", {
                                  className: "eyebrow",
                                  children: "DARI ASUMSI KE PEMAHAMAN",
                                }),
                                o.jsx("h1", { children: "Rencana validasi" }),
                                o.jsxs("p", {
                                  children: [
                                    V.name,
                                    " · Catat tindakan, hasil, dan keputusan berikutnya.",
                                  ],
                                }),
                              ],
                            }),
                          }),
                          V.problems.length
                            ? V.problems.map((_) =>
                                o.jsxs(
                                  "section",
                                  {
                                    className: "panel validation-project",
                                    children: [
                                      o.jsxs("button", {
                                        className: "text-link",
                                        onClick: () => {
                                          (ea(V, _), q("Validasi"));
                                        },
                                        children: [
                                          _.title,
                                          o.jsx(Da, { size: 16 }),
                                        ],
                                      }),
                                      o.jsxs("p", {
                                        children: [
                                          Ng(_),
                                          " ·",
                                          " ",
                                          _.validation.filter(
                                            (B) => B.status === "Selesai",
                                          ).length,
                                          " ",
                                          "dari ",
                                          _.validation.length,
                                          " tindakan selesai",
                                        ],
                                      }),
                                      _.validation.length === 0 &&
                                        o.jsx("p", {
                                          children:
                                            "Belum ada rencana. Buka masalah untuk menambahkan tindakan.",
                                        }),
                                      _.validation.map((B) =>
                                        o.jsxs(
                                          "div",
                                          {
                                            className: "validation-preview",
                                            children: [
                                              o.jsx("span", {
                                                children: B.action,
                                              }),
                                              o.jsx(tn, { children: B.status }),
                                            ],
                                          },
                                          B.id,
                                        ),
                                      ),
                                    ],
                                  },
                                  _.id,
                                ),
                              )
                            : o.jsx("div", {
                                className: "panel",
                                children: o.jsx(an, {
                                  icon: o.jsx(mu, {}),
                                  title: "Mulai dari masalah yang jelas",
                                  action: o.jsx("button", {
                                    className: "secondary",
                                    onClick: () => De("screening"),
                                    children: "Ke hasil screening",
                                  }),
                                  children:
                                    "Tambahkan masalah sebelum menyusun rencana validasi.",
                                }),
                              }),
                        ],
                      }),
                  ],
                }),
              y === "plans" &&
                (() => {
                  const _ = r.find((F) => F.plans?.some((Te) => Te.id === h)),
                    B = _?.plans?.find((F) => F.id === h);
                  return B && _
                    ? o.jsx(
                        K1,
                        {
                          plan: B,
                          onBack: () => g(""),
                          onChange: (F) =>
                            c((Te) =>
                              Te.map((Xe) =>
                                Xe.id === _.id
                                  ? {
                                      ...Xe,
                                      updated: St(),
                                      plans: Xe.plans?.map((ot) =>
                                        ot.id === F.id ? F : ot,
                                      ),
                                    }
                                  : Xe,
                              ),
                            ),
                        },
                        B.id,
                      )
                    : o.jsxs(o.Fragment, {
                        children: [
                          o.jsx("div", {
                            className: "page-heading",
                            children: o.jsxs("div", {
                              children: [
                                o.jsx("div", {
                                  className: "eyebrow",
                                  children: "DARI RISET KE RENCANA USAHA",
                                }),
                                o.jsx("h1", { children: "Business Plan" }),
                                o.jsx("p", {
                                  children:
                                    "Buka detail masalah di proyek riset lalu pilih Buat Business Plan. Background dan bukti akan terbawa sebagai draf.",
                                }),
                              ],
                            }),
                          }),
                          o.jsxs("div", {
                            className: "panel",
                            children: [
                              r.flatMap((F) =>
                                (F.plans || []).map((Te) =>
                                  o.jsxs(
                                    "div",
                                    {
                                      className: "project-card",
                                      children: [
                                        o.jsxs("button", {
                                          className: "saved-title",
                                          onClick: () => g(Te.id),
                                          children: [
                                            o.jsx("h3", { children: Te.name }),
                                            o.jsxs("p", {
                                              children: [
                                                F.name,
                                                " · Diperbarui ",
                                                dl(Te.updatedAt),
                                              ],
                                            }),
                                          ],
                                        }),
                                        o.jsx("button", {
                                          className: "secondary",
                                          onClick: () => {
                                            confirm(
                                              "Hapus business plan ini? Riset asal tetap disimpan.",
                                            ) &&
                                              c((Xe) =>
                                                Xe.map((ot) =>
                                                  ot.id === F.id
                                                    ? {
                                                        ...ot,
                                                        plans: ot.plans?.filter(
                                                          (_r) =>
                                                            _r.id !== Te.id,
                                                        ),
                                                      }
                                                    : ot,
                                                ),
                                              );
                                          },
                                          children: "Hapus rencana",
                                        }),
                                      ],
                                    },
                                    Te.id,
                                  ),
                                ),
                              ),
                              !r.some((F) => F.plans?.length) &&
                                o.jsx(an, {
                                  title: "Belum ada business plan",
                                  icon: o.jsx(nf, {}),
                                  action: o.jsx("button", {
                                    className: "primary",
                                    onClick: () => De("projects"),
                                    children: "Buka proyek riset",
                                  }),
                                  children:
                                    "Mulai dari masalah yang ingin Anda selesaikan, kemudian susun rencana tahap demi tahap.",
                                }),
                            ],
                          }),
                        ],
                      });
                })(),
              o.jsxs("footer", {
                className: "page-footer",
                children: [
                  o.jsxs("span", {
                    children: "VENTU · End-to-End Business Plan",
                  }),
                  o.jsx("span", {
                    children: "Bukti terlebih dahulu. Keputusan lebih terarah.",
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      Fe &&
        o.jsxs("div", {
          className: "toast",
          role: "status",
          children: [
            o.jsx(wv, { size: 18 }),
            Fe,
            o.jsx("button", {
              className: "icon-button",
              "aria-label": "Tutup notifikasi",
              onClick: () => Se(""),
              children: o.jsx(yf, { size: 16 }),
            }),
          ],
        }),
      Ke === "export" &&
        V &&
        o.jsxs(ml, {
          title: "Ekspor laporan",
          close: () => !Wt && he(null),
          children: [
            o.jsxs("p", {
              className: "muted",
              children: [
                "Laporan menyertakan parameter, batasan, analisis, sumber, dan catatan validasi.",
                " ",
                V.demo ? "Label DEMO disertakan pada laporan." : "",
              ],
            }),
            o.jsx(Be, {
              label: "Cakupan laporan",
              children: o.jsxs("select", {
                value: te,
                onChange: (_) => we(_.target.value),
                children: [
                  o.jsxs("option", {
                    value: "project",
                    children: [
                      "Seluruh proyek (",
                      V.problems.length,
                      " masalah)",
                    ],
                  }),
                  I &&
                    o.jsx("option", {
                      value: "problem",
                      children: "Masalah yang sedang dibuka",
                    }),
                ],
              }),
            }),
            o.jsx(Be, {
              label: "Format",
              children: o.jsxs("select", {
                value: $,
                onChange: (_) => ne(_.target.value),
                children: [
                  o.jsx("option", { children: "Excel" }),
                  o.jsx("option", { children: "PDF" }),
                ],
              }),
            }),
            Ne &&
              o.jsx("div", {
                className: "notice error",
                role: "alert",
                children: Ne,
              }),
            o.jsxs("div", {
              className: "modal-actions",
              children: [
                o.jsx("button", {
                  className: "secondary",
                  disabled: !!Wt,
                  onClick: () => he(null),
                  children: "Batal",
                }),
                o.jsxs("button", {
                  className: "primary",
                  disabled: !!Wt,
                  onClick: xu,
                  children: [o.jsx(tr, { size: 17 }), Wt || "Unduh laporan"],
                }),
              ],
            }),
          ],
        }),
      Ke === "problem" &&
        V &&
        o.jsx(ml, {
          title: "Tambah masalah",
          close: () => he(null),
          children: o.jsxs("form", {
            onSubmit: (_) => {
              _.preventDefault();
              const B = new FormData(_.currentTarget),
                F = Ov(
                  String(B.get("title")).trim(),
                  String(B.get("consumer")).trim(),
                );
              !F.title ||
                !F.consumer ||
                (Za((Te) => ({
                  ...Te,
                  status: "Bukti tidak mencukupi",
                  problems: [...Te.problems, F],
                })),
                he(null),
                Se("Masalah ditambahkan. Lengkapi dengan bukti sumber."));
            },
            children: [
              o.jsx(Be, {
                label: "Nama masalah",
                children: o.jsx("input", {
                  name: "title",
                  required: !0,
                  maxLength: 200,
                  placeholder: "Masalah spesifik yang dialami konsumen",
                }),
              }),
              o.jsx(Be, {
                label: "Kelompok konsumen",
                children: o.jsx("input", {
                  name: "consumer",
                  required: !0,
                  maxLength: 100,
                  defaultValue: V.consumer,
                }),
              }),
              o.jsx("p", {
                className: "muted",
                children:
                  "Temuan manual belum terverifikasi. Buka detailnya untuk menambahkan sumber dan analisis.",
              }),
              o.jsxs("div", {
                className: "modal-actions",
                children: [
                  o.jsx("button", {
                    type: "button",
                    className: "secondary",
                    onClick: () => he(null),
                    children: "Batal",
                  }),
                  o.jsx("button", {
                    className: "primary",
                    children: "Tambah masalah",
                  }),
                ],
              }),
            ],
          }),
        }),
      Ke === "evidence" &&
        I &&
        o.jsx(ml, {
          title: "Tambah bukti sumber",
          close: () => he(null),
          children: o.jsxs("form", {
            onSubmit: (_) => {
              _.preventDefault();
              const B = new FormData(_.currentTarget),
                F = String(B.get("url"));
              try {
                if (!["http:", "https:"].includes(new URL(F).protocol))
                  throw new Error();
              } catch {
                Se("Gunakan URL sumber dengan http atau https.");
                return;
              }
              const Te = {
                id: wt(),
                quote: String(B.get("quote")).trim(),
                context: String(B.get("context")).trim(),
                source: String(B.get("source")).trim(),
                url: F,
                date: String(B.get("date")),
                snippet: B.get("snippet") === "on",
                kind: "Temuan Sumber",
              };
              (Za((Xe) => ({
                ...Xe,
                status: "Hasil parsial",
                problems: Xe.problems.map((ot) =>
                  ot.id === T ? { ...ot, evidence: [...ot.evidence, Te] } : ot,
                ),
              })),
                he(null),
                Se("Bukti ditambahkan. Periksa sumber dan konteksnya."));
            },
            children: [
              o.jsx(Be, {
                label: "Kutipan singkat",
                children: o.jsx("textarea", {
                  name: "quote",
                  required: !0,
                  maxLength: 2e3,
                }),
              }),
              o.jsx(Be, {
                label: "Konteks & batasan",
                children: o.jsx("textarea", {
                  name: "context",
                  required: !0,
                  maxLength: 2e3,
                  placeholder:
                    "Siapa, dalam situasi apa, dan apa yang belum diketahui?",
                }),
              }),
              o.jsx(Be, {
                label: "URL sumber",
                children: o.jsx("input", {
                  name: "url",
                  type: "url",
                  required: !0,
                  placeholder: "https://...",
                }),
              }),
              o.jsxs("div", {
                className: "form-grid",
                children: [
                  o.jsx(Be, {
                    label: "Nama sumber",
                    children: o.jsx("input", {
                      name: "source",
                      required: !0,
                      maxLength: 160,
                    }),
                  }),
                  o.jsx(Be, {
                    label: "Tanggal publikasi / pemeriksaan",
                    children: o.jsx("input", {
                      name: "date",
                      type: "date",
                      required: !0,
                      max: new Date().toISOString().slice(0, 10),
                    }),
                  }),
                ],
              }),
              o.jsxs("label", {
                className: "checkbox",
                children: [
                  o.jsx("input", { type: "checkbox", name: "snippet" }),
                  "Hanya berasal dari cuplikan pencarian",
                ],
              }),
              o.jsxs("div", {
                className: "modal-actions",
                children: [
                  o.jsx("button", {
                    type: "button",
                    className: "secondary",
                    onClick: () => he(null),
                    children: "Batal",
                  }),
                  o.jsx("button", {
                    className: "primary",
                    children: "Simpan bukti",
                  }),
                ],
              }),
            ],
          }),
        }),
      Ke === "alternative" &&
        I &&
        o.jsx(ml, {
          title: "Tambah alternatif solusi",
          close: () => he(null),
          children: o.jsxs("form", {
            onSubmit: (_) => {
              _.preventDefault();
              const B = new FormData(_.currentTarget);
              (da((F) => ({
                ...F,
                alternatives: [
                  ...F.alternatives,
                  {
                    name: String(B.get("name")),
                    type: String(B.get("type")),
                    description: String(B.get("description")),
                    price: String(B.get("price")) || "Belum diperiksa",
                    checked: String(B.get("checked")),
                  },
                ],
              })),
                he(null),
                Se("Alternatif disimpan."));
            },
            children: [
              o.jsx(Be, {
                label: "Nama produk, jasa, atau cara manual",
                children: o.jsx("input", {
                  name: "name",
                  required: !0,
                  maxLength: 160,
                }),
              }),
              o.jsx(Be, {
                label: "Jenis informasi",
                children: o.jsxs("select", {
                  name: "type",
                  children: [
                    o.jsx("option", { children: "Informasi resmi penyedia" }),
                    o.jsx("option", { children: "Pengalaman pengguna" }),
                    o.jsx("option", { children: "Cara manual" }),
                  ],
                }),
              }),
              o.jsx(Be, {
                label: "Penjelasan & rujukan sumber",
                children: o.jsx("textarea", {
                  name: "description",
                  required: !0,
                  maxLength: 3e3,
                }),
              }),
              o.jsxs("div", {
                className: "form-grid",
                children: [
                  o.jsx(Be, {
                    label: "Harga (opsional)",
                    children: o.jsx("input", { name: "price", maxLength: 150 }),
                  }),
                  o.jsx(Be, {
                    label: "Tanggal pemeriksaan harga",
                    children: o.jsx("input", {
                      name: "checked",
                      type: "date",
                      max: new Date().toISOString().slice(0, 10),
                    }),
                  }),
                ],
              }),
              o.jsx("div", {
                className: "modal-actions",
                children: o.jsx("button", {
                  className: "primary",
                  children: "Simpan alternatif",
                }),
              }),
            ],
          }),
        }),
      Ke === "idea" &&
        I &&
        o.jsx(ml, {
          title: "Tambah hipotesis peluang",
          close: () => he(null),
          children: o.jsxs("form", {
            onSubmit: (_) => {
              _.preventDefault();
              const B = new FormData(_.currentTarget);
              (da((F) => ({
                ...F,
                ideas: [
                  ...F.ideas,
                  {
                    name: String(B.get("name")),
                    buyer: String(B.get("buyer")),
                    model: String(B.get("model")),
                    partners: String(B.get("partners")),
                    assumption: String(B.get("assumption")),
                    risk: String(B.get("risk")),
                    reason: String(B.get("reason")),
                  },
                ],
              })),
                he(null),
                Se(
                  "Hipotesis disimpan. Uji asumsi sebelum mengambil keputusan.",
                ));
            },
            children: [
              [
                { k: "name", l: "Ide penawaran" },
                { k: "buyer", l: "Calon pembeli" },
                { k: "model", l: "Model penawaran / perantara" },
                { k: "partners", l: "Kebutuhan mitra" },
                { k: "assumption", l: "Asumsi yang perlu diuji" },
                { k: "risk", l: "Risiko" },
                {
                  k: "reason",
                  l: "Alasan & bukti pendukung (sertakan rujukan)",
                },
              ].map((_) =>
                o.jsx(
                  Be,
                  {
                    label: _.l,
                    children: o.jsx("textarea", {
                      name: _.k,
                      required: !0,
                      maxLength: 2e3,
                    }),
                  },
                  _.k,
                ),
              ),
              o.jsx("div", {
                className: "modal-actions",
                children: o.jsx("button", {
                  className: "primary",
                  children: "Simpan hipotesis",
                }),
              }),
            ],
          }),
        }),
      Ke === "research" &&
        V &&
        o.jsxs(ml, {
          title: "Jalankan penelusuran web?",
          close: () => he(null),
          children: [
            o.jsx("p", {
              children:
                "Parameter topik dikirim ke indeks berita publik GDELT tanpa biaya API. Judul berita ditambahkan sebagai kandidat yang perlu ditelaah, tanpa analisis AI. Temuan lama dipertahankan. Jangan masukkan data pribadi atau rahasia.",
            }),
            o.jsxs("div", {
              className: "modal-actions",
              children: [
                o.jsx("button", {
                  className: "secondary",
                  onClick: () => he(null),
                  children: "Batal",
                }),
                o.jsx("button", {
                  className: "primary",
                  onClick: () => {
                    (he(null), Ln(V));
                  },
                  children: "Jalankan riset",
                }),
              ],
            }),
          ],
        }),
      Ke === "delete" &&
        V &&
        o.jsxs(ml, {
          title: "Hapus proyek?",
          close: () => he(null),
          children: [
            o.jsxs("p", {
              children: [
                "Proyek “",
                V.name,
                "” beserta bukti dan catatan validasinya akan dihapus dari browser ini. Ekspor laporan terlebih dahulu jika diperlukan.",
              ],
            }),
            o.jsxs("div", {
              className: "modal-actions",
              children: [
                o.jsx("button", {
                  className: "secondary",
                  onClick: () => he(null),
                  children: "Batal",
                }),
                o.jsx("button", {
                  className: "danger",
                  onClick: () => {
                    (c((_) => _.filter((B) => B.id !== V.id)),
                      he(null),
                      De("projects"),
                      Se("Proyek dihapus."));
                  },
                  children: "Hapus proyek",
                }),
              ],
            }),
          ],
        }),
    ],
  });
}
function Ox({ problem: n, update: i, notify: r }) {
  return o.jsxs("section", {
    className: "panel detail-section",
    children: [
      o.jsx("div", {
        className: "section-heading",
        children: o.jsxs("div", {
          children: [
            o.jsx("h2", { children: "Uji asumsi, catat pembelajaran" }),
            o.jsx("p", {
              children:
                "Status selesai berarti tindakan dilakukan, bukan hipotesis terbukti benar.",
            }),
          ],
        }),
      }),
      n.validation.map((c) =>
        o.jsxs(
          "form",
          {
            className: "validation-item",
            onSubmit: (f) => {
              f.preventDefault();
              const m = new FormData(f.currentTarget);
              (i((h) => ({
                ...h,
                validation: h.validation.map((g) =>
                  g.id === c.id
                    ? {
                        ...g,
                        status: String(m.get("status")),
                        note: String(m.get("note")),
                      }
                    : g,
                ),
              })),
                r("Status dan hasil validasi disimpan."));
            },
            children: [
              o.jsx("h3", { children: c.action }),
              o.jsx(Be, {
                label: "Status tindakan",
                children: o.jsxs("select", {
                  name: "status",
                  defaultValue: c.status,
                  children: [
                    o.jsx("option", { children: "Belum dimulai" }),
                    o.jsx("option", { children: "Berlangsung" }),
                    o.jsx("option", { children: "Selesai" }),
                  ],
                }),
              }),
              o.jsx(Be, {
                label: "Catatan & hasil pengujian",
                children: o.jsx("textarea", {
                  name: "note",
                  defaultValue: c.note,
                  placeholder:
                    "Apa yang dilakukan, ditemukan, dan belum terjawab?",
                  maxLength: 5e3,
                }),
              }),
              o.jsxs("button", {
                className: "secondary",
                children: [o.jsx(wv, { size: 16 }), "Simpan perubahan"],
              }),
            ],
          },
          c.id,
        ),
      ),
      o.jsxs("form", {
        className: "add-validation",
        onSubmit: (c) => {
          c.preventDefault();
          const f = c.currentTarget,
            m = String(new FormData(f).get("action")).trim();
          m &&
            (i((h) => ({
              ...h,
              validation: [
                ...h.validation,
                { id: wt(), action: m, status: "Belum dimulai", note: "" },
              ],
            })),
            f.reset(),
            r("Tindakan validasi ditambahkan."));
        },
        children: [
          o.jsx(Be, {
            label: "Tindakan berikutnya",
            children: o.jsx("input", {
              name: "action",
              required: !0,
              maxLength: 500,
              placeholder:
                "Contoh: wawancarai 5 konsumen tentang pengalaman terakhir",
            }),
          }),
          o.jsxs("button", {
            className: "primary",
            children: [o.jsx(nn, { size: 16 }), "Tambah tindakan"],
          }),
        ],
      }),
    ],
  });
}
function Ax() {
  return o.jsx(Ex, {});
}
C1.createRoot(document.getElementById("root")).render(
  o.jsx(z1.StrictMode, { children: o.jsx(Ax, {}) }),
);
export {
  wf as _,
  vu as a,
  du as b,
  wx as c,
  Df as f,
  j1 as g,
  gf as p,
  _u as s,
  gu as u,
  Ng as v,
};
