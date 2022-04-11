;(window.webpackJsonp = window.webpackJsonp || []).push([
  [2],
  [
    function (e, t, n) {
      "use strict"
      function r(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function o(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? r(Object(n), !0).forEach(function (t) {
                s(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : r(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t),
                )
              })
        }
        return e
      }
      function s(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        )
      }
      n.d(t, "a", function () {
        return le
      }),
        n.d(t, "b", function () {
          return ie
        }),
        n.d(t, "c", function () {
          return ne
        }),
        n.d(t, "d", function () {
          return M
        }),
        n.d(t, "e", function () {
          return T
        }),
        n.d(t, "f", function () {
          return L
        }),
        n.d(t, "g", function () {
          return P
        }),
        n.d(t, "h", function () {
          return C
        }),
        n.d(t, "i", function () {
          return te
        }),
        n.d(t, "j", function () {
          return V
        }),
        n.d(t, "k", function () {
          return i
        }),
        n.d(t, "l", function () {
          return se
        }),
        n.d(t, "m", function () {
          return D
        })
      const i = {}
      function l(e) {
        i.context = e
      }
      const u = (e, t) => e === t,
        c = Symbol("solid-proxy"),
        f = (Symbol("solid-dev-component"), { equals: u })
      let a = null,
        d = X
      const p = {},
        h = { owned: null, cleanups: null, context: null, owner: null },
        [g, y] = C(!1)
      var v = null
      let b,
        m = null,
        w = null,
        S = null,
        O = null,
        x = null,
        A = null,
        k = null,
        j = 0
      function P(e, t) {
        const n = O,
          r = v,
          o =
            0 === e.length
              ? h
              : { owned: null, cleanups: null, context: null, owner: t || r }
        ;(v = o), (O = null)
        try {
          return R(() => e(() => Q(o)), !0)
        } finally {
          ;(O = n), (v = r)
        }
      }
      function C(e, t) {
        t = t ? Object.assign({}, f, t) : f
        const n = {
          value: e,
          observers: null,
          observerSlots: null,
          pending: p,
          comparator: t.equals || void 0,
        }
        return [
          G.bind(n),
          (e) => (
            "function" === typeof e &&
              (e =
                m && m.running && m.sources.has(n)
                  ? e(n.pending !== p ? n.pending : n.tValue)
                  : e(n.pending !== p ? n.pending : n.value)),
            F(n, e)
          ),
        ]
      }
      function N(e, t, n) {
        const r = H(e, t, !0, 1)
        w && m && m.running ? A.push(r) : z(r)
      }
      function L(e, t, n) {
        const r = H(e, t, !1, 1)
        w && m && m.running ? A.push(r) : z(r)
      }
      function M(e, t, n) {
        d = _
        const r = H(e, t, !1, 1),
          o = b && Y(v, b.id)
        o && (r.suspense = o),
          (r.user = !0),
          k ? k.push(r) : queueMicrotask(() => z(r))
      }
      function T(e, t, n) {
        n = n ? Object.assign({}, f, n) : f
        const r = H(e, t, !0, 0)
        return (
          (r.pending = p),
          (r.observers = null),
          (r.observerSlots = null),
          (r.comparator = n.equals || void 0),
          w && m && m.running ? ((r.tState = 1), A.push(r)) : z(r),
          G.bind(r)
        )
      }
      function E(e) {
        if (x) return e()
        let t
        const n = (x = [])
        try {
          t = e()
        } finally {
          x = null
        }
        return (
          R(() => {
            for (let e = 0; e < n.length; e += 1) {
              const t = n[e]
              if (t.pending !== p) {
                const e = t.pending
                ;(t.pending = p), F(t, e)
              }
            }
          }, !1),
          t
        )
      }
      function D(e) {
        let t,
          n = O
        return (O = null), (t = e()), (O = n), t
      }
      function V(e) {
        return (
          null === v ||
            (null === v.cleanups ? (v.cleanups = [e]) : v.cleanups.push(e)),
          e
        )
      }
      function q(e) {
        if (m && m.running) return e(), m.done
        const t = O,
          n = v
        return Promise.resolve().then(() => {
          let r
          return (
            (O = t),
            (v = n),
            (w || b) &&
              ((r =
                m ||
                (m = {
                  sources: new Set(),
                  effects: [],
                  promises: new Set(),
                  disposed: new Set(),
                  queue: new Set(),
                  running: !0,
                })),
              r.done || (r.done = new Promise((e) => (r.resolve = e))),
              (r.running = !0)),
            E(e),
            r ? r.done : void 0
          )
        })
      }
      function B(e) {
        const t = Symbol("context")
        return { id: t, Provider: Z(t), defaultValue: e }
      }
      function $(e) {
        const t = T(e)
        return T(() =>
          (function e(t) {
            if ("function" === typeof t && !t.length) return e(t())
            if (Array.isArray(t)) {
              const n = []
              for (let r = 0; r < t.length; r++) {
                const o = e(t[r])
                Array.isArray(o) ? n.push.apply(n, o) : n.push(o)
              }
              return n
            }
            return t
          })(t()),
        )
      }
      function G() {
        const e = m && m.running
        if (this.sources && ((!e && this.state) || (e && this.tState))) {
          const t = A
          ;(A = null),
            (!e && 1 === this.state) || (e && 1 === this.tState)
              ? z(this)
              : K(this),
            (A = t)
        }
        if (O) {
          const e = this.observers ? this.observers.length : 0
          O.sources
            ? (O.sources.push(this), O.sourceSlots.push(e))
            : ((O.sources = [this]), (O.sourceSlots = [e])),
            this.observers
              ? (this.observers.push(O),
                this.observerSlots.push(O.sources.length - 1))
              : ((this.observers = [O]),
                (this.observerSlots = [O.sources.length - 1]))
        }
        return e && m.sources.has(this) ? this.tValue : this.value
      }
      function F(e, t, n) {
        if (x) return e.pending === p && x.push(e), (e.pending = t), t
        if (e.comparator)
          if (m && m.running && m.sources.has(e)) {
            if (e.comparator(e.tValue, t)) return t
          } else if (e.comparator(e.value, t)) return t
        let r = !1
        return (
          m
            ? ((r = m.running),
              (r || (!n && m.sources.has(e))) &&
                (m.sources.add(e), (e.tValue = t)),
              r || (e.value = t))
            : (e.value = t),
          e.observers &&
            e.observers.length &&
            R(() => {
              for (let t = 0; t < e.observers.length; t += 1) {
                const n = e.observers[t]
                ;(r && m.disposed.has(n)) ||
                  (((r && !n.tState) || (!r && !n.state)) &&
                    (n.pure ? A.push(n) : k.push(n), n.observers && U(n)),
                  r ? (n.tState = 1) : (n.state = 1))
              }
              if (A.length > 1e6) throw ((A = []), new Error())
            }, !1),
          t
        )
      }
      function z(e) {
        if (!e.fn) return
        Q(e)
        const t = v,
          n = O,
          r = j
        ;(O = v = e),
          I(e, m && m.running && m.sources.has(e) ? e.tValue : e.value, r),
          m &&
            !m.running &&
            m.sources.has(e) &&
            queueMicrotask(() => {
              R(() => {
                m && (m.running = !0), I(e, e.tValue, r)
              }, !1)
            }),
          (O = n),
          (v = t)
      }
      function I(e, t, n) {
        let r
        try {
          r = e.fn(t)
        } catch (o) {
          W(o)
        }
        ;(!e.updatedAt || e.updatedAt <= n) &&
          (e.observers && e.observers.length
            ? F(e, r, !0)
            : m && m.running && e.pure
            ? (m.sources.add(e), (e.tValue = r))
            : (e.value = r),
          (e.updatedAt = n))
      }
      function H(e, t, n) {
        let r =
          arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1
        const o = {
          fn: e,
          state: r,
          updatedAt: null,
          owned: null,
          sources: null,
          sourceSlots: null,
          cleanups: null,
          value: t,
          owner: v,
          context: null,
          pure: n,
        }
        if (
          (m && m.running && ((o.state = 0), (o.tState = r)),
          null === v ||
            (v !== h &&
              (m && m.running && v.pure
                ? v.tOwned
                  ? v.tOwned.push(o)
                  : (v.tOwned = [o])
                : v.owned
                ? v.owned.push(o)
                : (v.owned = [o]))),
          S)
        ) {
          const [e, t] = C(void 0, { equals: !1 }),
            n = S(o.fn, t)
          V(() => n.dispose())
          const r = () => q(t).then(() => s.dispose()),
            s = S(o.fn, r)
          o.fn = (t) => (e(), m && m.running ? s.track(t) : n.track(t))
        }
        return o
      }
      function J(e) {
        const t = m && m.running
        if ((!t && 0 === e.state) || (t && 0 === e.tState)) return
        if ((!t && 2 === e.state) || (t && 2 === e.tState)) return K(e)
        if (e.suspense && D(e.suspense.inFallback))
          return e.suspense.effects.push(e)
        const n = [e]
        for (; (e = e.owner) && (!e.updatedAt || e.updatedAt < j); ) {
          if (t && m.disposed.has(e)) return
          ;((!t && e.state) || (t && e.tState)) && n.push(e)
        }
        for (let r = n.length - 1; r >= 0; r--) {
          if (((e = n[r]), t)) {
            let t = e,
              o = n[r + 1]
            for (; (t = t.owner) && t !== o; ) if (m.disposed.has(t)) return
          }
          if ((!t && 1 === e.state) || (t && 1 === e.tState)) z(e)
          else if ((!t && 2 === e.state) || (t && 2 === e.tState)) {
            const t = A
            ;(A = null), K(e, n[0]), (A = t)
          }
        }
      }
      function R(e, t) {
        if (A) return e()
        let n = !1
        t || (A = []), k ? (n = !0) : (k = []), j++
        try {
          return e()
        } catch (r) {
          W(r)
        } finally {
          !(function (e) {
            A &&
              (w && m && m.running
                ? (function (e) {
                    for (let t = 0; t < e.length; t++) {
                      const n = e[t],
                        r = m.queue
                      r.has(n) ||
                        (r.add(n),
                        w(() => {
                          r.delete(n),
                            R(() => {
                              ;(m.running = !0),
                                J(n),
                                r.size ||
                                  (k.push.apply(k, m.effects), (m.effects = []))
                            }, !1),
                            m && (m.running = !1)
                        }))
                    }
                  })(A)
                : X(A),
              (A = null))
            if (e) return
            let t
            if (m && m.running) {
              if (m.promises.size || m.queue.size)
                return (
                  (m.running = !1),
                  m.effects.push.apply(m.effects, k),
                  (k = null),
                  void y(!0)
                )
              const e = m.sources
              ;(t = m.resolve),
                k.forEach((e) => {
                  "tState" in e && (e.state = e.tState), delete e.tState
                }),
                (m = null),
                E(() => {
                  e.forEach((e) => {
                    if (((e.value = e.tValue), e.owned))
                      for (let t = 0, n = e.owned.length; t < n; t++)
                        Q(e.owned[t])
                    e.tOwned && (e.owned = e.tOwned),
                      delete e.tValue,
                      delete e.tOwned,
                      (e.tState = 0)
                  }),
                    y(!1)
                })
            }
            k.length
              ? E(() => {
                  d(k), (k = null)
                })
              : (k = null)
            t && t()
          })(n)
        }
      }
      function X(e) {
        for (let t = 0; t < e.length; t++) J(e[t])
      }
      function _(e) {
        let t,
          n = 0
        for (t = 0; t < e.length; t++) {
          const r = e[t]
          r.user ? (e[n++] = r) : J(r)
        }
        const r = e.length
        for (t = 0; t < n; t++) J(e[t])
        for (t = r; t < e.length; t++) J(e[t])
      }
      function K(e, t) {
        const n = m && m.running
        n ? (e.tState = 0) : (e.state = 0)
        for (let r = 0; r < e.sources.length; r += 1) {
          const o = e.sources[r]
          o.sources &&
            ((!n && 1 === o.state) || (n && 1 === o.tState)
              ? o !== t && J(o)
              : ((!n && 2 === o.state) || (n && 2 === o.tState)) && K(o, t))
        }
      }
      function U(e) {
        const t = m && m.running
        for (let n = 0; n < e.observers.length; n += 1) {
          const r = e.observers[n]
          ;((!t && !r.state) || (t && !r.tState)) &&
            (t ? (r.tState = 2) : (r.state = 2),
            r.pure ? A.push(r) : k.push(r),
            r.observers && U(r))
        }
      }
      function Q(e) {
        let t
        if (e.sources)
          for (; e.sources.length; ) {
            const t = e.sources.pop(),
              n = e.sourceSlots.pop(),
              r = t.observers
            if (r && r.length) {
              const e = r.pop(),
                o = t.observerSlots.pop()
              n < r.length &&
                ((e.sourceSlots[o] = n), (r[n] = e), (t.observerSlots[n] = o))
            }
          }
        if (m && m.running && e.pure) {
          if (e.tOwned) {
            for (t = 0; t < e.tOwned.length; t++) Q(e.tOwned[t])
            delete e.tOwned
          }
          !(function e(t, n) {
            n || ((t.tState = 0), m.disposed.add(t))
            if (t.owned) for (let r = 0; r < t.owned.length; r++) e(t.owned[r])
          })(e, !0)
        } else if (e.owned) {
          for (t = 0; t < e.owned.length; t++) Q(e.owned[t])
          e.owned = null
        }
        if (e.cleanups) {
          for (t = 0; t < e.cleanups.length; t++) e.cleanups[t]()
          e.cleanups = null
        }
        m && m.running ? (e.tState = 0) : (e.state = 0), (e.context = null)
      }
      function W(e) {
        const t = a && Y(v, a)
        if (!t) throw e
        t.forEach((t) => t(e))
      }
      function Y(e, t) {
        return e
          ? e.context && void 0 !== e.context[t]
            ? e.context[t]
            : Y(e.owner, t)
          : void 0
      }
      function Z(e) {
        return function (t) {
          let n
          return (
            N(
              () =>
                (n = D(
                  () => ((v.context = { [e]: t.value }), $(() => t.children)),
                )),
            ),
            n
          )
        }
      }
      Symbol("fallback")
      let ee = !1
      function te() {
        ee = !0
      }
      function ne(e, t) {
        if (ee && i.context) {
          const n = i.context
          l(
            o(
              o({}, i.context),
              {},
              {
                id: "".concat(i.context.id).concat(i.context.count++, "-"),
                count: 0,
              },
            ),
          )
          const r = D(() => e(t))
          return l(n), r
        }
        return D(() => e(t))
      }
      function re() {
        return !0
      }
      const oe = {
        get: (e, t, n) => (t === c ? n : e.get(t)),
        has: (e, t) => e.has(t),
        set: re,
        deleteProperty: re,
        getOwnPropertyDescriptor: (e, t) => ({
          configurable: !0,
          enumerable: !0,
          get: () => e.get(t),
          set: re,
          deleteProperty: re,
        }),
        ownKeys: (e) => e.keys(),
      }
      function se(e) {
        for (
          var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
          r < t;
          r++
        )
          n[r - 1] = arguments[r]
        const o = new Set(n.flat()),
          s = Object.getOwnPropertyDescriptors(e),
          i = n.map((t) => {
            const n = {}
            for (let r = 0; r < t.length; r++) {
              const o = t[r]
              Object.defineProperty(
                n,
                o,
                s[o] ? s[o] : { get: () => e[o], set: () => !0 },
              )
            }
            return n
          })
        return (
          i.push(
            new Proxy(
              {
                get: (t) => (o.has(t) ? void 0 : e[t]),
                has: (t) => !o.has(t) && t in e,
                keys: () => Object.keys(e).filter((e) => !o.has(e)),
              },
              oe,
            ),
          ),
          i
        )
      }
      function ie(e) {
        let t = !1
        const n = $(() => e.children),
          r = T(
            () => {
              let e = n()
              Array.isArray(e) || (e = [e])
              for (let t = 0; t < e.length; t++) {
                const n = e[t].when
                if (n) return [t, n, e[t]]
              }
              return [-1]
            },
            void 0,
            {
              equals: (e, n) =>
                e[0] === n[0] &&
                (t ? e[1] === n[1] : !e[1] === !n[1]) &&
                e[2] === n[2],
            },
          )
        return T(() => {
          const [n, o, s] = r()
          if (n < 0) return e.fallback
          const i = s.children
          return (t = "function" === typeof i && i.length > 0)
            ? D(() => i(o))
            : i
        })
      }
      function le(e) {
        return e
      }
      B()
    },
    function (e, t, n) {
      "use strict"
      n.d(t, "a", function () {
        return p
      }),
        n.d(t, "b", function () {
          return y
        }),
        n.d(t, "c", function () {
          return a
        }),
        n.d(t, "d", function () {
          return g
        }),
        n.d(t, "e", function () {
          return h
        }),
        n.d(t, "f", function () {
          return d
        })
      var r = n(0)
      const o = new Set([
          "className",
          "value",
          "readOnly",
          "formNoValidate",
          "isMap",
          "noModule",
          "playsInline",
          "allowfullscreen",
          "async",
          "autofocus",
          "autoplay",
          "checked",
          "controls",
          "default",
          "disabled",
          "formnovalidate",
          "hidden",
          "indeterminate",
          "ismap",
          "loop",
          "multiple",
          "muted",
          "nomodule",
          "novalidate",
          "open",
          "playsinline",
          "readonly",
          "required",
          "reversed",
          "seamless",
          "selected",
        ]),
        s = new Set(["innerHTML", "textContent", "innerText", "children"]),
        i = { className: "class", htmlFor: "for" },
        l = {
          class: "className",
          formnovalidate: "formNoValidate",
          ismap: "isMap",
          nomodule: "noModule",
          playsinline: "playsInline",
          readonly: "readOnly",
        },
        u = new Set([
          "beforeinput",
          "click",
          "dblclick",
          "contextmenu",
          "focusin",
          "focusout",
          "input",
          "keydown",
          "keyup",
          "mousedown",
          "mousemove",
          "mouseout",
          "mouseover",
          "mouseup",
          "pointerdown",
          "pointermove",
          "pointerout",
          "pointerover",
          "pointerup",
          "touchend",
          "touchmove",
          "touchstart",
        ]),
        c =
          (new Set([
            "altGlyph",
            "altGlyphDef",
            "altGlyphItem",
            "animate",
            "animateColor",
            "animateMotion",
            "animateTransform",
            "circle",
            "clipPath",
            "color-profile",
            "cursor",
            "defs",
            "desc",
            "ellipse",
            "feBlend",
            "feColorMatrix",
            "feComponentTransfer",
            "feComposite",
            "feConvolveMatrix",
            "feDiffuseLighting",
            "feDisplacementMap",
            "feDistantLight",
            "feFlood",
            "feFuncA",
            "feFuncB",
            "feFuncG",
            "feFuncR",
            "feGaussianBlur",
            "feImage",
            "feMerge",
            "feMergeNode",
            "feMorphology",
            "feOffset",
            "fePointLight",
            "feSpecularLighting",
            "feSpotLight",
            "feTile",
            "feTurbulence",
            "filter",
            "font",
            "font-face",
            "font-face-format",
            "font-face-name",
            "font-face-src",
            "font-face-uri",
            "foreignObject",
            "g",
            "glyph",
            "glyphRef",
            "hkern",
            "image",
            "line",
            "linearGradient",
            "marker",
            "mask",
            "metadata",
            "missing-glyph",
            "mpath",
            "path",
            "pattern",
            "polygon",
            "polyline",
            "radialGradient",
            "rect",
            "set",
            "stop",
            "svg",
            "switch",
            "symbol",
            "text",
            "textPath",
            "tref",
            "tspan",
            "use",
            "view",
            "vkern",
          ]),
          {
            xlink: "http://www.w3.org/1999/xlink",
            xml: "http://www.w3.org/XML/1998/namespace",
          })
      const f = "_$DX_DELEGATE"
      function a(e, t, n) {
        let o
        return (
          Object(r.g)((r) => {
            ;(o = r),
              t === document ? e() : y(t, e(), t.firstChild ? null : void 0, n)
          }),
          () => {
            o(), (t.textContent = "")
          }
        )
      }
      function d(e, t, n) {
        const r = document.createElement("template")
        r.innerHTML = e
        let o = r.content.firstChild
        return n && (o = o.firstChild), o
      }
      function p(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : window.document
        const n = t[f] || (t[f] = new Set())
        for (let r = 0, o = e.length; r < o; r++) {
          const o = e[r]
          n.has(o) || (n.add(o), t.addEventListener(o, w))
        }
      }
      function h(e, t) {
        let n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
        const r = e.style,
          o = "string" === typeof n
        if ((null == t && o) || "string" === typeof t) return (r.cssText = t)
        let s, i
        for (i in (o && ((r.cssText = void 0), (n = {})), t || (t = {}), n))
          null == t[i] && r.removeProperty(i), delete n[i]
        for (i in t) (s = t[i]), s !== n[i] && (r.setProperty(i, s), (n[i] = s))
        return n
      }
      function g(e, t, n, o) {
        "function" === typeof t
          ? Object(r.f)((r) => S(e, t(), r, n, o))
          : S(e, t, void 0, n, o)
      }
      function y(e, t, n, o) {
        if ((void 0 === n || o || (o = []), "function" !== typeof t))
          return O(e, t, o, n)
        Object(r.f)((r) => O(e, t(), r, n), o)
      }
      function v(e, t, n, r) {
        let o =
            arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
          s = arguments.length > 5 && void 0 !== arguments[5] && arguments[5]
        t || (t = {})
        for (const i in o)
          if (!(i in t)) {
            if ("children" === i) continue
            m(e, i, null, o[i], n, s)
          }
        for (const i in t) {
          if ("children" === i) {
            r || O(e, t.children)
            continue
          }
          const l = t[i]
          o[i] = m(e, i, l, o[i], n, s)
        }
      }
      function b(e, t, n) {
        const r = t.trim().split(/\s+/)
        for (let o = 0, s = r.length; o < s; o++) e.classList.toggle(r[o], n)
      }
      function m(e, t, n, r, f, a) {
        let d, g, y
        if ("style" === t) return h(e, n, r)
        if ("classList" === t)
          return (function (e, t) {
            let n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {}
            const r = Object.keys(t || {}),
              o = Object.keys(n)
            let s, i
            for (s = 0, i = o.length; s < i; s++) {
              const r = o[s]
              r && "undefined" !== r && !t[r] && (b(e, r, !1), delete n[r])
            }
            for (s = 0, i = r.length; s < i; s++) {
              const o = r[s],
                i = !!t[o]
              o &&
                "undefined" !== o &&
                n[o] !== i &&
                i &&
                (b(e, o, !0), (n[o] = i))
            }
            return n
          })(e, n, r)
        if (n === r) return r
        if ("ref" === t) a || n(e)
        else if ("on:" === t.slice(0, 3)) e.addEventListener(t.slice(3), n)
        else if ("oncapture:" === t.slice(0, 10))
          e.addEventListener(t.slice(10), n, !0)
        else if ("on" === t.slice(0, 2)) {
          const r = t.slice(2).toLowerCase(),
            o = u.has(r)
          !(function (e, t, n, r) {
            r
              ? Array.isArray(n)
                ? ((e["$$".concat(t)] = n[0]),
                  (e["$$".concat(t, "Data")] = n[1]))
                : (e["$$".concat(t)] = n)
              : Array.isArray(n)
              ? e.addEventListener(t, (e) => n[0](n[1], e))
              : e.addEventListener(t, n)
          })(e, r, n, o),
            o && p([r])
        } else if (
          (y = s.has(t)) ||
          (!f && (l[t] || (g = o.has(t)))) ||
          (d = e.nodeName.includes("-"))
        )
          !d || g || y
            ? (e[l[t] || t] = n)
            : (e[
                ((v = t),
                v.toLowerCase().replace(/-([a-z])/g, (e, t) => t.toUpperCase()))
              ] = n)
        else {
          const r = f && t.indexOf(":") > -1 && c[t.split(":")[0]]
          r
            ? (function (e, t, n, r) {
                null == r
                  ? e.removeAttributeNS(t, n)
                  : e.setAttributeNS(t, n, r)
              })(e, r, t, n)
            : (function (e, t, n) {
                null == n ? e.removeAttribute(t) : e.setAttribute(t, n)
              })(e, i[t] || t, n)
        }
        var v
        return n
      }
      function w(e) {
        const t = "$$".concat(e.type)
        let n = (e.composedPath && e.composedPath()[0]) || e.target
        for (
          e.target !== n &&
            Object.defineProperty(e, "target", { configurable: !0, value: n }),
            Object.defineProperty(e, "currentTarget", {
              configurable: !0,
              get: () => n || document,
            });
          null !== n;

        ) {
          const r = n[t]
          if (r && !n.disabled) {
            const o = n["".concat(t, "Data")]
            if ((void 0 !== o ? r(o, e) : r(e), e.cancelBubble)) return
          }
          n =
            n.host && n.host !== n && n.host instanceof Node
              ? n.host
              : n.parentNode
        }
      }
      function S(e, t) {
        let n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          o = arguments.length > 3 ? arguments[3] : void 0,
          s = arguments.length > 4 ? arguments[4] : void 0
        return (
          t || (t = {}),
          !s &&
            "children" in t &&
            Object(r.f)(() => (n.children = O(e, t.children, n.children))),
          t.ref && t.ref(e),
          Object(r.f)(() => v(e, t, o, !0, n, !0)),
          n
        )
      }
      function O(e, t, n, o, s) {
        for (
          r.k.context && !n && (n = [...e.childNodes]);
          "function" === typeof n;

        )
          n = n()
        if (t === n) return n
        const i = typeof t,
          l = void 0 !== o
        if (
          ((e = (l && n[0] && n[0].parentNode) || e),
          "string" === i || "number" === i)
        ) {
          if (r.k.context) return n
          if (("number" === i && (t = t.toString()), l)) {
            let r = n[0]
            r && 3 === r.nodeType
              ? (r.data = t)
              : (r = document.createTextNode(t)),
              (n = A(e, n, o, r))
          } else
            n =
              "" !== n && "string" === typeof n
                ? (e.firstChild.data = t)
                : (e.textContent = t)
        } else if (null == t || "boolean" === i) {
          if (r.k.context) return n
          n = A(e, n, o)
        } else {
          if ("function" === i)
            return (
              Object(r.f)(() => {
                let r = t()
                for (; "function" === typeof r; ) r = r()
                n = O(e, r, n, o)
              }),
              () => n
            )
          if (Array.isArray(t)) {
            const i = []
            if (
              (function e(t, n, r) {
                let o = !1
                for (let s = 0, i = n.length; s < i; s++) {
                  let i,
                    l = n[s]
                  if (l instanceof Node) t.push(l)
                  else if (null == l || !0 === l || !1 === l);
                  else if (Array.isArray(l)) o = e(t, l) || o
                  else if ("string" === (i = typeof l))
                    t.push(document.createTextNode(l))
                  else if ("function" === i)
                    if (r) {
                      for (; "function" === typeof l; ) l = l()
                      o = e(t, Array.isArray(l) ? l : [l]) || o
                    } else t.push(l), (o = !0)
                  else t.push(document.createTextNode(l.toString()))
                }
                return o
              })(i, t, s)
            )
              return Object(r.f)(() => (n = O(e, i, n, o, !0))), () => n
            if (r.k.context)
              for (let e = 0; e < i.length; e++)
                if (i[e].parentNode) return (n = i)
            if (0 === i.length) {
              if (((n = A(e, n, o)), l)) return n
            } else
              Array.isArray(n)
                ? 0 === n.length
                  ? x(e, i, o)
                  : (function (e, t, n) {
                      let r = n.length,
                        o = t.length,
                        s = r,
                        i = 0,
                        l = 0,
                        u = t[o - 1].nextSibling,
                        c = null
                      for (; i < o || l < s; )
                        if (t[i] !== n[l]) {
                          for (; t[o - 1] === n[s - 1]; ) o--, s--
                          if (o === i) {
                            const t =
                              s < r ? (l ? n[l - 1].nextSibling : n[s - l]) : u
                            for (; l < s; ) e.insertBefore(n[l++], t)
                          } else if (s === l)
                            for (; i < o; )
                              (c && c.has(t[i])) || t[i].remove(), i++
                          else if (t[i] === n[s - 1] && n[l] === t[o - 1]) {
                            const r = t[--o].nextSibling
                            e.insertBefore(n[l++], t[i++].nextSibling),
                              e.insertBefore(n[--s], r),
                              (t[o] = n[s])
                          } else {
                            if (!c) {
                              c = new Map()
                              let e = l
                              for (; e < s; ) c.set(n[e], e++)
                            }
                            const r = c.get(t[i])
                            if (null != r)
                              if (l < r && r < s) {
                                let u,
                                  f = i,
                                  a = 1
                                for (
                                  ;
                                  ++f < o &&
                                  f < s &&
                                  null != (u = c.get(t[f])) &&
                                  u === r + a;

                                )
                                  a++
                                if (a > r - l) {
                                  const o = t[i]
                                  for (; l < r; ) e.insertBefore(n[l++], o)
                                } else e.replaceChild(n[l++], t[i++])
                              } else i++
                            else t[i++].remove()
                          }
                        } else i++, l++
                    })(e, n, i)
                : (n && A(e), x(e, i))
            n = i
          } else if (t instanceof Node) {
            if (r.k.context && t.parentNode) return (n = l ? [t] : t)
            if (Array.isArray(n)) {
              if (l) return (n = A(e, n, o, t))
              A(e, n, null, t)
            } else
              null != n && "" !== n && e.firstChild
                ? e.replaceChild(t, e.firstChild)
                : e.appendChild(t)
            n = t
          }
        }
        return n
      }
      function x(e, t, n) {
        for (let r = 0, o = t.length; r < o; r++) e.insertBefore(t[r], n)
      }
      function A(e, t, n, r) {
        if (void 0 === n) return (e.textContent = "")
        const o = r || document.createTextNode("")
        if (t.length) {
          let r = !1
          for (let s = t.length - 1; s >= 0; s--) {
            const i = t[s]
            if (o !== i) {
              const t = i.parentNode === e
              r || s
                ? t && i.remove()
                : t
                ? e.replaceChild(o, i)
                : e.insertBefore(o, n)
            } else r = !0
          }
        } else e.insertBefore(o, n)
        return [o]
      }
    },
  ],
])
