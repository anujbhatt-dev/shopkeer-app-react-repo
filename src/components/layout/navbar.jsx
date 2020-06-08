import React from "react"
import {BrowserRouter as Router, Link} from "react-router-dom"

const Navbar = (props) =>{
  return (
    <Router>
    <nav className="nav">
        <ul className="nav__ul">
          <Link to="/"><li className="nav__ul-li">new orders</li></Link>
          <Link to="/completedorders" ><li className="nav__ul-li">completed orders</li></Link>
          <Link to="/myproducts" ><li className="nav__ul-li">my products</li></Link>
          <Link to="/products" ><li className="nav__ul-li">products</li></Link>
          <Link to="/blabla" ><li className="nav__ul-li">bla bla</li></Link>
        </ul>
    </nav>
      </Router>
  )
}

export default Navbar;
