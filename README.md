# React render prop components for DOM element api

Inspired by: [react-fns](https://github.com/jaredpalmer/react-fns)

So far just implemented: [getBoundingClientRect](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect)

## Simple Example

```js
import { GetBoundingClientRect } from 'react-fns-dom-elements'
     
     <GetBoundingClientRect
        scroll
        resize
        render={({ bottom, height, left, right, top, width, x, y }) => (
          <div
            style={{
              position: "fixed",
              border: "1px solid red",
              left: "15em",
              right: "1em",
              top: "1em",
              width: `${top * -1}px`,
              height: `${right / 2}px`,
            }}
          >
            <p>bottom: {bottom}</p>
            <p>height: {height}</p>
            <p>left: {left}</p>
            <p>right: {right}</p>
            <p>top: {top} </p>
            <p>x: {x} </p>
            <p>y: {y} </p>
          </div>
        )}
      />

```

The props `bottom, height, left, right, top, width, x, y` are injected when the render prop component is mounted. With them you can compute different styles accordingly to your component in the `render` props. In addition you can add a `scroll` listener or a window `resize` listener so that getBoundingRectClient() is called on every scroll or window adjustment. 

If neither of `scroll` or `resize` is added then getBoundingRectClient() is only called on initial mount. 

## Typing
 `bottom, height, left, right, top, width, x, y` : `number`
 
 `render` : `function react component`
 
 `scroll` : `boolean`
 
 `resize` : `boolean`
 
 ## Gif example
 
 Below with this example we see the width of the container changing due to the position of the scroll and the height of the container changing due to the size of the window. 
 
 
 
 ![fns](https://user-images.githubusercontent.com/6344422/35771559-19ac35e2-092f-11e8-9dc5-086d323e11ae.gif)
 
 
