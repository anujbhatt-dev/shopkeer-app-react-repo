import React from "react"
import "./modal.css"

const Modal =(props)=>(
    <div className="modal">
        {props.children}
</div>
)

export default Modal