import React from "react"
import {
  Switch,
  Route,
  
} from "react-router-dom";

const Menubar = (props) =>{
  return (
      <aside className="main__menuBar">
        {props.children}
      </aside>
  )
}

export default Menubar;
