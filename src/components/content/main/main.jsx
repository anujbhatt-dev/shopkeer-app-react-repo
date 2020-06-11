import React from "react"
import {
  Switch,
  Route,
  
} from "react-router-dom";
import Products from "./content/products/products";
import MyProducts from "./content/my-products/myproducts";
import NewOrders from "./content/new-orders/neworders";
import CompletedOrders from "./content/completed-orders/completedorders";
import BlaBla from "./content/blabla/blabla";



const Main = (props) =>{
  return (
       
       <main className="main">
         <Switch>
         <Route path={"/"+props.sellerCode+"/neworders"} exact component={NewOrders}/>
         <Route path={"/"+props.sellerCode+"/completedorders"} exact  component={CompletedOrders}/>
         <Route path={"/"+props.sellerCode+"/myproducts"} exact component={MyProducts}/>
         <Route path={"/"+props.sellerCode+"/products"} exact  component={Products}/>
         <Route path={"/"+props.sellerCode+"/blabla"} exact component={BlaBla}/>
        { <Route path="/**"  render={()=><NewOrders {...props} />}/>}
         </Switch>
       </main>
    
  )
}

export default Main;
