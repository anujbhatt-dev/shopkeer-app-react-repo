import React from "react"

const Box = (props) =>{
  return (
    <div onClick={props.click} className="box">
      {props.children}
    </div>
  )
}

export default Box;
