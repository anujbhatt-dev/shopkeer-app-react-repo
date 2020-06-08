import React from "react"
import Navbar from "./navbar"
import Sidebar from "./sidebar"

const Header = (props) =>{
  return (
      <header className="header">
        <Sidebar />
        <Navbar />
      </header>
  )
}

export default Header;
