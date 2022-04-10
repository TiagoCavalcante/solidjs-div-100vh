import { JSX } from "solid-js"
export default function Div100vh(
  props: JSX.HTMLAttributes<HTMLDivElement> & {
    ref: JSX.Element
    style: JSX.CSSProperties
  },
): JSX.Element
export declare function create100vh(): import("solid-js").Accessor<number>
export declare function measureHeight(): number
