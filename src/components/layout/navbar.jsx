import React from "react"
import { Link} from "react-router-dom"

const Navbar = (props) =>{
  return (
    <nav className="nav">
        <ul className="nav__ul">
          <Link to="/neworders" exact><li className="nav__ul-li">new orders</li></Link>
          <Link to="/completedorders" exact ><li className="nav__ul-li">completed orders</li></Link>
          <Link to="/myproducts" exact><li className="nav__ul-li">my products</li></Link>
          <Link to="/products" exact><li className="nav__ul-li">products</li></Link>
          <Link to="/blabla" exact><li className="nav__ul-li">bla bla</li></Link>
          <Link to="/" exact><li className="nav__ul-li">new orders</li></Link>

        </ul>
    </nav>
  )
}

export default Navbar;
