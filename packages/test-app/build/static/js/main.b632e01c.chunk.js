;(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    2: function (e, t, r) {
      "use strict"
      r.r(t)
      var n = r(1),
        i = r(0),
        o = function () {
          return (o =
            Object.assign ||
            function (e) {
              for (var t, r = 1, n = arguments.length; r < n; r++)
                for (var i in (t = arguments[r]))
                  Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
              return e
            }).apply(this, arguments)
        }
      const c = Object(n.f)("<div></div>", 2)
      var l = !1
      function d(e) {
        var t,
          r = u(),
          d = Object(i.l)(e, ["style"])[1]
        !l &&
          (null === (t = e.style) || void 0 === t ? void 0 : t.height) &&
          ((l = !0),
          console.warn(
            "<Div100vh /> overrides the height property of the style prop",
          ))
        return (() => {
          const t = c.cloneNode(!0)
          return (
            Object(n.d)(t, d, !1, !1),
            Object(i.f)((i) =>
              Object(n.e)(
                t,
                o(o({}, e.style), {
                  height: r() ? "".concat(r(), "px") : "100vh",
                }),
                i,
              ),
            ),
            t
          )
        })()
      }
      function u() {
        var e = Object(i.h)(v()),
          t = e[0],
          r = e[1]
        return (
          Object(i.d)(function () {
            if (b()) {
              var e = function () {
                return r(v())
              }
              window.addEventListener("resize", e),
                Object(i.j)(function () {
                  return window.removeEventListener("resize", e)
                })
            }
          }, []),
          t
        )
      }
      function v() {
        return b() ? window.innerHeight : null
      }
      function b() {
        return "undefined" !== typeof window && "undefined" !== typeof document
      }
      const s = Object(n.f)(
          '<div><div>Height: </div><div><input type="text" placeholder="What if you open your keyboard?"></div><div><input type="radio" id="Div100vh"><label for="Div100vh">The <code>&lt;Div100vh&gt;</code> SolidJS component</label></div><div><input type="radio" id="regularDiv"><label for="regularDiv">a regular&nbsp;<code>&lt;div style=&#123;&#123; height: &quot;100vh&quot; &#125;&#125;&gt;</code></label></div><div>Chances are this part will be cropped by mobile browsers if you use a regular 100vh div wrapper.</div></div>',
          23,
        ),
        a = Object(n.f)("<div></div>", 2),
        p = Object(n.f)(
          "<div><div>Something else goes here after the full window height div.</div></div>",
          4,
        ),
        h = Object(n.f)("<span>Something gone wrong</span>", 2)
      function f(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function g(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? f(Object(r), !0).forEach(function (t) {
                O(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : f(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t),
                )
              })
        }
        return e
      }
      function O(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        )
      }
      const y = u(),
        [j, w] = Object(i.h)("Div100vh")
      function m() {
        return (() => {
          const e = s.cloneNode(!0),
            t = e.firstChild,
            r = (t.firstChild, t.nextSibling),
            o = r.firstChild,
            c = r.nextSibling,
            l = c.firstChild,
            d = c.nextSibling,
            u = d.firstChild,
            v = d.nextSibling
          return (
            e.style.setProperty("padding", "10px"),
            t.style.setProperty("margin-bottom", "10px"),
            Object(n.b)(t, y, null),
            r.style.setProperty("margin-bottom", "10px"),
            o.style.setProperty("width", "100%"),
            (c.$$click = () => w("Div100vh")),
            (d.$$click = () => w("regularDiv")),
            v.style.setProperty("position", "absolute"),
            v.style.setProperty("bottom", "10px"),
            Object(i.f)(
              (e) => {
                const t = "Div100vh" === j(),
                  r = "regularDiv" === j()
                return (
                  t !== e._v$ && (l.checked = e._v$ = t),
                  r !== e._v$2 && (u.checked = e._v$2 = r),
                  e
                )
              },
              { _v$: void 0, _v$2: void 0 },
            ),
            e
          )
        })()
      }
      Object(n.a)(["click"]),
        Object(n.c)(function () {
          const e = { "background-color": "azure", position: "relative" }
          return (() => {
            const t = p.cloneNode(!0),
              r = t.firstChild
            return (
              Object(n.b)(
                t,
                Object(i.c)(i.b, {
                  get fallback() {
                    return h.cloneNode(!0)
                  },
                  get children() {
                    return [
                      Object(i.c)(i.a, {
                        get when() {
                          return "Div100vh" === j()
                        },
                        get children() {
                          return Object(i.c)(d, {
                            style: e,
                            get children() {
                              return Object(i.c)(m, {})
                            },
                          })
                        },
                      }),
                      Object(i.c)(i.a, {
                        get when() {
                          return "regularDiv" === j()
                        },
                        get children() {
                          const t = a.cloneNode(!0)
                          return (
                            Object(n.e)(
                              t,
                              g(g({}, e), {}, { height: "100vh" }),
                            ),
                            Object(n.b)(t, Object(i.c)(m, {})),
                            t
                          )
                        },
                      }),
                    ]
                  },
                }),
                r,
              ),
              t
            )
          })()
        }, document.getElementById("root"))
    },
  },
  [[2, 1, 2]],
])
