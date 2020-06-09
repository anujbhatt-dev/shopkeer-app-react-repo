
import React from "react"
import "./backdrop.css"

const Backdrop =(props)=>(
    <div  onClick={props.click} className="backdrop"></div>
)


export default Backdrop