# Div100vh SolidJS component and create100vh signal

This is a workaround for iOS Safari and other mobile browsers.

Forked from [react-div-100vh](https://github.com/mvasin/react-div-100vh) by [mvasin](https://github.com/mvasin).

## The problem

In mobile browsers, the real height of the viewport is dynamic, as browser "chrome" (panels) slide away on scrolling. The browser developers faced two choices: either to reflow the page as the pixel value of a `vh` changes, or ignore the fact that the browser panel covers part of the screen.

The browser panels are supposed to slide away smoothly, and because the layout reflow during scrolling will not look smooth, the browser developers went for the second option.

It may work for the most of use cases, but if you're looking for an app-like full-screen experience, or want to make sure that the call to action button at the bottom of your splash screen isn't covered, you may need to know the fair value of a `vh`.

| `<div style={{ height: "100vh" }}>`                                                                                                            | `<Div100vh>`                                                                                                                                   |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| ![Page cropped by bottom Safari chrome](https://user-images.githubusercontent.com/62714153/162642173-665e0dfc-0f6d-4d04-8923-80c607b66bfe.png) | ![Page cropped by bottom Safari chrome](https://user-images.githubusercontent.com/62714153/162642219-276bccb4-d88a-42d2-aa4f-bc2ff5de6d7c.png) |

More on this [issue](https://nicolas-hoizey.com/articles/2015/02/18/viewport-height-is-taller-than-the-visible-part-of-the-document-in-some-mobile-browsers/) here.

## The solution

`Div100vh` SolidJS component is the default export:

```js
import Div100vh from "solidjs-div-100vh"

const MyFullHeightComponent = () => (
  <Div100vh>
    <span>Look ma, no crop!</span>
  </Div100vh>
)
```

For more advanced use cases (for instance, if you need 50% of the real height), there is a named export `create100vh`. This SolidJS signal provides an accurate vertical height in pixels. The return type is a `number` in a browser and `null` in Node environment. You may need to check if it's not `null` if you're doing SSR, otherwise, manipulate the value as you wish:

```js
import { create100vh } from "solidjs-div-100vh"

const HalfHeightComponent = ({ children }) => {
  const height = create100vh()
  // This *must* be a function,
  // otherwise SolidJS won't track the changes.
  const halfHeight = () => (height() ? height() / 2 : "50vh")
  return <div style={{ height: halfHeight }}>{children}</div>
}

const FourthHeightComponent = ({ children }) => {
  const height = create100vh()
  return (
    <div style={{ height: height() ? height() / 4 : "25vh" }}>
      {children}
    </div>
  )
}
```

Under the hood `create100vh` uses `measureHeight` function which is exported as well, so feel free to use it, even without SolidJS. Currently it returns `document.documentElement?.clientHeight || window.innerHeight` if executed in a browser or `null` if on a server.
