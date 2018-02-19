import React from "react"

/*
  props : {
    text: 'some string',
    color: 'red'
  }
 */

const Button = props => {
  return (
    <input
      type="button"
      value={props.text}
      onClick={() => props.onClick(props.text)}
      onMouseOver={props.onMouseOver}
      style={{
        backgroundColor: props.color,
        border: "none",
        color: props.textColor
      }}
    />
  )
}

export default Button
