import React ,{Component} from "react"
import Main from "./main/main"
import Menu from "./menu/menu"
import SellerSideBar from "./side-bar/side-nav-bar-seller"
import SellerNavigationBar from "./navigation-bar/seller-navigation-bar"


class Layout extends Component{

    render(props){return(
<React.Fragment>
<header className="header">
        <SellerSideBar />
        <SellerNavigationBar />
      </header>
<Menu/>
<Main/>
</React.Fragment>
    )}

}

export default Layout