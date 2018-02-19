import React from "react"
import { render } from "react-dom"
import Button from "./Button.js"

const App = () => (
  <div>
    <Button
      text="click me"
      color="#ff0000"
      textColor="white"
      onClick={text => alert(text)}
      onMouseOver={() => console.log("over here")}
    />
  </div>
)

render(<App />, document.getElementById("root"))
