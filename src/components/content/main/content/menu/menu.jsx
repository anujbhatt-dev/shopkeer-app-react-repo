import React from "react"
import {
    Switch,
    Route,

  } from "react-router-dom";
import NewOrdersMenu from "./new-orders-menu";
import MyProductsMenu from "./my-products-menu";
import BlablaMenu from "./blabla-menu";
import ProductsMenu from "./products-menu";
import CompletedOrdersMenu from "./completed-orders-menu";


const menu =(props)=>(
  <div className="menu">
    <Switch>
    <Route path="/" exact component={NewOrdersMenu}/>
    <Route path="/neworders" exact component={NewOrdersMenu}/>
    <Route path="/completedorders" exact  component={CompletedOrdersMenu}/>
    <Route path="/myproducts" exact component={MyProductsMenu}/>
    <Route path="/products" exact  component={ProductsMenu}/>
    <Route path="/blabla" exact component={BlablaMenu}/>
    </Switch>
  </div>
)


export default menu
