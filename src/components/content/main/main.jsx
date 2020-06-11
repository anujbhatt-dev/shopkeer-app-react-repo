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
         <Route path="/" exact component={NewOrders}/>
         <Route path="/neworders" exact component={NewOrders}/>
         <Route path="/completedorders" exact  component={CompletedOrders}/>
         <Route path="/myproducts" exact component={MyProducts}/>
         <Route path="/products" exact  component={Products}/>
         <Route path="/blabla" exact component={BlaBla}/>
         </Switch>
       </main>
    
  )
}

export default Main;
