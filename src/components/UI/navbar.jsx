import React from "react"
import { NavLink} from "react-router-dom"

const Navbar = (props) =>{

  let activeStyle={
    backgroundColor:"grey",
  }

  return (
    <nav className="nav">
        <ul className="nav__ul">
          {props.options.map((option)=>
          <NavLink key={option[0]} activeStyle={activeStyle} to={"/"+option[0]} exact><li className="nav__ul-li">
            {option[1]}</li></NavLink>
)}
          {/* <NavLink activeStyle={activeStyle} to="/neworders" exact><li className="nav__ul-li">new orders</li></NavLink>
          <NavLink activeStyle={activeStyle} to="/completedorders" exact ><li className="nav__ul-li">completed orders</li></NavLink>
          <NavLink activeStyle={activeStyle} to="/myproducts" exact><li className="nav__ul-li">my products</li></NavLink>
          <NavLink activeStyle={activeStyle} to="/products" exact><li className="nav__ul-li">products</li></NavLink>
          <NavLink activeStyle={activeStyle} to="/blabla" exact><li className="nav__ul-li">bla bla</li></NavLink> */}

        </ul>
    </nav>
  )
}

export default Navbar;
