import { spread, effect, style, template } from "solid-js/web"
import { splitProps, createSignal, createEffect, onCleanup } from "solid-js"

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var __assign = function () {
  __assign =
    Object.assign ||
    function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i]

        for (var p in s)
          if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p]
      }

      return t
    }

  return __assign.apply(this, arguments)
}

const _tmpl$ = /*#__PURE__*/ template(`<div></div>`, 2)
var warned = false
function Div100vh(props) {
  var _a

  var height = create100vh()

  var _b = splitProps(props, ["style"]),
    other = _b[1]

  if (
    !warned &&
    ((_a = props.style) === null || _a === void 0 ? void 0 : _a.height)
  ) {
    warned = true
    console.warn("<Div100vh /> overrides the height property of the style prop")
  }

  var styleWithRealHeight = function () {
    return __assign(__assign({}, props.style), {
      height: height() ? "".concat(height(), "px") : "100vh",
    })
  }

  return (() => {
    const _el$ = _tmpl$.cloneNode(true)

    spread(_el$, other, false, false)

    effect((_$p) => style(_el$, styleWithRealHeight(), _$p))

    return _el$
  })()
}
function create100vh() {
  var _a = createSignal(measureHeight()),
    height = _a[0],
    setHeight = _a[1]

  createEffect(function () {
    if (!isClient()) return

    var setMeasuredHeight = function () {
      return setHeight(measureHeight())
    }

    window.addEventListener("resize", setMeasuredHeight)
    onCleanup(function () {
      return window.removeEventListener("resize", setMeasuredHeight)
    })
  }, [])
  return height
}
function measureHeight() {
  return isClient() ? window.innerHeight : null
}

function isClient() {
  return typeof window !== "undefined" && typeof document !== "undefined"
}

export { create100vh, Div100vh as default, measureHeight }
