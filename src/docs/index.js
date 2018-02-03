import React from "react";
import { render } from "react-dom";
import { GetBoundingClientRect } from "../../lib";
import "./styles.css";

// Silly demo

function Demo() {
  return (
    <div style={{ height: "2000px" }}>
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
    </div>
  );
}

render(<Demo />, document.getElementById("app"));
