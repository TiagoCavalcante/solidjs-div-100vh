import {
  createEffect,
  createSignal,
  JSX,
  onCleanup,
  splitProps,
} from "solid-js"

let warned = false

export default function Div100vh(
  props: JSX.HTMLAttributes<HTMLDivElement> & {
    ref: JSX.Element
    style: JSX.CSSProperties
  },
): JSX.Element {
  const height = create100vh()
  const [, other] = splitProps(props, ["style"])

  if (!warned && (props.style as any)?.height) {
    warned = true
    console.warn("<Div100vh /> overrides the height property of the style prop")
  }

  const styleWithRealHeight = () => ({
    ...(props.style as any),
    height: height() ? `${height()}px` : "100vh",
  })

  return <div style={styleWithRealHeight()} {...other} />
}

export function create100vh() {
  const [height, setHeight] = createSignal<number | null>(measureHeight())

  createEffect(() => {
    if (!isClient()) return

    const setMeasuredHeight = () => setHeight(measureHeight())

    window.addEventListener("resize", setMeasuredHeight)

    onCleanup(() => window.removeEventListener("resize", setMeasuredHeight))
  }, [])

  return height
}

export function measureHeight() {
  return isClient() ? window.innerHeight : null
}

function isClient() {
  return typeof window !== "undefined" && typeof document !== "undefined"
}
