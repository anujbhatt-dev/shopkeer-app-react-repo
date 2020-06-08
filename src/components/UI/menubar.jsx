import React from "react"
import {
  Switch,
  Route,
  
} from "react-router-dom";

const Menubar = (props) =>{
  return (
      <aside className="menubar">
        {props.children}
      </aside>
  )
}

export default Menubar;
