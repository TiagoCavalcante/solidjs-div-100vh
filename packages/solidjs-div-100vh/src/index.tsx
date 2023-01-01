import {
  createEffect,
  createSignal,
  JSX,
  onCleanup,
  splitProps,
} from "solid-js"

export default function Div100vh(
  props: JSX.HTMLAttributes<HTMLDivElement> & {
    ref?: JSX.Element
    style?: Omit<JSX.CSSProperties, "height">
  },
): JSX.Element {
  const height = create100vh()
  const [, other] = splitProps(props, ["style"])

  const styleWithRealHeight = () => ({
    ...(props.style ?? {}) as {},
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
