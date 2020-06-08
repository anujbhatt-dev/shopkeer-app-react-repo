import React from "react"
import Products from "../mains/products"
import MyProducts from "../mains/myproducts"
import NewOrders from "../mains/neworders"
import CompletedOrders from "../mains/completedorders"
import BlaBla from "../mains/blabla"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const Main = (props) =>{
  return (
       <Router>
       <main className="main">
         <Switch>
         <Route path="/" exact component={NewOrders}/>
         <Route path="/completedorders"  component={CompletedOrders}/>
         <Route path="/myproducts"  component={MyProducts}/>
         <Route path="/products"  component={Products}/>
         <Route path="/blabla" component={BlaBla}/>
         </Switch>
       </main>
      </Router>
  )
}

export default Main;
