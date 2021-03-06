import React ,{Component,useState} from "react"
import Main from "./main/main"
import SellerSideBar from "./side-bar/side-nav-bar-seller"
import SellerNavigationBar from "./navigation-bar/seller-navigation-bar"
import LayOutContext from "./layout-context"



class Layout extends Component{

  state={
    sellerCode:"none"
  }
  

   sellerInititalize=(sellerCode)=>{
    this.setState({
      sellerCode:sellerCode
    })
  }


  render(props){
    
  

    return(
    <React.Fragment>
      <LayOutContext.Provider value={{sellerCode:this.state.sellerCode,sellerInititalize:this.sellerInititalize}}>
    <header className="header">
        <SellerSideBar  sellerCode={this.state.sellerCode} />
        <SellerNavigationBar sellerCode={this.state.sellerCode}/>
    </header>
    <div className="menuMainFlex">
    
      <Main  sellerCode={this.state.sellerCode}  sellerInititalize={this.sellerInititalize}/>
    </div>
    </LayOutContext.Provider>
    </React.Fragment>
    )}

}

export default React.memo(Layout);
