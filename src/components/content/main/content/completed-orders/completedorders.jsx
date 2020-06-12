import React, {useState} from "react"
import Completed from "./complete-orders-table-section/complete-orders-table-section"
import CompletedOrdersMenu from "./completed-orders-menu/completed-orders-menu";

const CompletedOrders = ()=>{
  const [state,setState]=useState({
    completed:[{
      date:"20-12-20",
      name:"anuj",
      total:"₹4561",
      mode:"pick up",
      orderId:"2056"
    },
    {
      date:"20-12-19",
      name:"sagar",
      total:"₹45610",
      mode:"home delivery",
      orderId:"1045"
    },
    {
      date:"20-12-19",
      name:"sagar",
      total:"₹45610",
      mode:"home delivery",
      orderId:"1045"
    }
  ]
  })

  return (
    <React.Fragment>
       <div className="menu"><CompletedOrdersMenu/></div>
    <div className="completedOrders">
     <div className="completedOrders__table">
        <div className="completedOrders__table-header">
          <div className="completedOrders__table-header--item">date</div>
          <div className="completedOrders__table-header--item">name</div>
          <div className="completedOrders__table-header--item">total price</div>
          <div className="completedOrders__table-header--item">mode</div>
          <div className="completedOrders__table-header--item">order_Id</div>
        </div>
        {state.completed.map((record)=>{
          return (
            <Completed
            date={record.date}
            name={record.name}
            total={record.total}
            mode={record.mode}
            orderId={record.orderId}/>
          )
        })}
      </div>
    </div>

    </React.Fragment>
  )
}


export default CompletedOrders;
