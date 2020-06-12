import React, {useState} from "react"
import Completed from "./complete-orders-table-section/complete-orders-table-section"
import CompletedOrdersMenu from "./completed-orders-menu/completed-orders-menu";
import Spinner from "../../../../UI/spinner/spinner"
import axios from "axios"
import LayOutContext from "../../../layout-context";




class CompletedOrders extends React.Component{

  state= {
    loading:false,
    orders:null
  }

  static contextType=LayOutContext;

  componentDidMount(){
this.setState({loading:true})
}

componentDidUpdate(){

  if(this.state.loading ===true){
    axios.get("http://localhost:7571/getSellerConfirmedOrdersBySellerCode?sellercode="+this.context.sellerCode,
    {
      headers: {
        'Content-Type': 'application/json'
      }}).then(data=>{
        console.log(data.data);
      this.setState({loading:false,orders:data.data})})
  }
  
}

  
  render(){

    let table=<Spinner/>

if(this.state.orders)
table=( this.state.orders.map((order)=>{
  return (
    <Completed
    date={order.date}
    name={order.customername}
    total={order.totalprice}
    mode={order.mode}
    orderId={order.orderid}/>
  )
}))
    



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
       {table}
      </div>
    </div>

    </React.Fragment>
  )
}
}


export default CompletedOrders;
