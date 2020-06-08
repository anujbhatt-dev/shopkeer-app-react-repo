import React from "react"
import Products from "./products"
import MyProducts from "./myproducts"
import NewOrders from "./neworders"
import CompletedOrders from "./completedorders"
import BlaBla from "./blabla"
import {
  Switch,
  Route,
  
} from "react-router-dom";


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
