import React from "react"
import CompletedOrdersMenu from "./completed-orders-menu/completed-orders-menu";

const CompletedOrders = ()=>{
  return (
    <React.Fragment>
       <div className="menu"><CompletedOrdersMenu/></div>  
    <div className="completedOrders">
      completedorders
    </div>

    </React.Fragment>
  )
}


export default CompletedOrders;
