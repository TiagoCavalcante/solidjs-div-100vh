import { createSignal, Match, Switch } from "solid-js"
import Div100vh, { create100vh } from "solidjs-div-100vh"

const height = create100vh()
const [divType, setDivType] = createSignal("Div100vh")

function Children() {
  return (
    <div style={{ padding: "10px" }}>
      <div style={{ "margin-bottom": "10px" }}>Height: {height()}</div>

      <div style={{ "margin-bottom": "10px" }}>
        <input
          type="text"
          placeholder="What if you open your keyboard?"
          style={{ width: "100%" }}
        />
      </div>

      <div onClick={() => setDivType("Div100vh")}>
        <input type="radio" id="Div100vh" checked={divType() === "Div100vh"} />
        <label htmlFor="Div100vh">
          The <code>&lt;Div100vh&gt;</code> SolidJS component
        </label>
      </div>
      <div onClick={() => setDivType("regularDiv")}>
        <input
          type="radio"
          id="regularDiv"
          checked={divType() === "regularDiv"}
        />
        <label htmlFor="regularDiv">
          a regular&nbsp;
          <code>
            &lt;div style=&#123;&#123; height: &quot;100vh&quot;
            &#125;&#125;&gt;
          </code>
        </label>
      </div>

      <div style={{ position: "absolute", bottom: "10px" }}>
        Chances are this part will be cropped by mobile browsers if you use a
        regular 100vh div wrapper.
      </div>
    </div>
  )
}

export default function App() {
  const style = {
    "background-color": "azure",
    position: "relative",
  }

  return (
    <div>
      <Switch fallback={<span>Something gone wrong</span>}>
        <Match when={divType() === "Div100vh"}>
          <Div100vh style={style}>
            <Children />
          </Div100vh>
        </Match>

        <Match when={divType() === "regularDiv"}>
          <div style={{ ...style, height: "100vh" }}>
            <Children />
          </div>
        </Match>
      </Switch>

      <div>Something else goes here after the full window height div.</div>
    </div>
  )
}
