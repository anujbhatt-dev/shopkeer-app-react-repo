import React from "react"
import { NavLink} from "react-router-dom"

const Navbar = (props) =>{

  let activeStyle={
    backgroundColor:"grey",
  }

  return (
    <nav className="nav">
        <ul className="nav__ul">
          <NavLink activeStyle={activeStyle} to="/neworders" exact><li className="nav__ul-li">new orders</li></NavLink>
          <NavLink activeStyle={activeStyle} to="/completedorders" exact ><li className="nav__ul-li">completed orders</li></NavLink>
          <NavLink activeStyle={activeStyle} to="/myproducts" exact><li className="nav__ul-li">my products</li></NavLink>
          <NavLink activeStyle={activeStyle} to="/products" exact><li className="nav__ul-li">products</li></NavLink>
          <NavLink activeStyle={activeStyle} to="/blabla" exact><li className="nav__ul-li">bla bla</li></NavLink>

        </ul>
    </nav>
  )
}

export default Navbar;
