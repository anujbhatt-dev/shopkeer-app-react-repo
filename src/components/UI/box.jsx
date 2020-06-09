import React from "react"

const Box = (props) =>{
  return (
    <div onClick={props.click} className="box">
      box
    </div>
  )
}

export default Box;
