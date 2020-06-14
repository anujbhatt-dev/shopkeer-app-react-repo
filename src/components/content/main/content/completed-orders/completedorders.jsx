import React, {useState} from "react"
import Completed from "./complete-orders-table-section/complete-orders-table-section"
import CompletedOrdersMenu from "./completed-orders-menu/completed-orders-menu";
import Spinner from "../../../../UI/spinner/spinner"
import axios from "axios"
import LayOutContext from "../../../layout-context";
import Modal from "../../../../UI/modal/modal"
import  CompletedOrdersDetailView from "./new-orders-detail-view/new-order-detail-view"
import Backdrop from "../../../../UI/backdrop/backdrop";
import newOrdersMenu from "../new-orders/new-orders-menu/new-orders-menu";



class CompletedOrders extends React.Component{

  state= {
    loading:false,
    detailView:false,
    detailViewIndex:-1,
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


openDetailView=(index)=>{

  this.setState({detailView:true,detailViewIndex:index});

}

closeDetailView=()=>{

  this.setState({detailView:false,detailViewIndex:-1});

}



  render(){

    let table=<Spinner/>
    let modal= null
if(this.state.orders)
table=( this.state.orders.map((order,index)=>{
  return (
    <Completed
    click={()=>this.openDetailView(index)}
    date={order.date}
    name={order.customername}
    total={order.totalprice}
    mode={order.mode}
    orderId={order.orderid}
  
    />
  )
}))

if(this.state.detailView===true)
modal=(  <React.Fragment>
  <Modal ><CompletedOrdersDetailView  order={this.state.orders[this.state.detailViewIndex]}/></Modal>
  <Backdrop click={this.closeDetailView}/>
</React.Fragment>)




  return (
    <React.Fragment>
       <div className="menu"><CompletedOrdersMenu/></div>
    <div className="completedOrders">
     <table className="completedOrders__table">
        <thead className="completedOrders__table-header">
        <tr className="completedOrders__table-header--row">
          <td className="completedOrders__table-header--item">date</td>
          <td className="completedOrders__table-header--item">name</td>
          <td className="completedOrders__table-header--item">total price</td>
          <td className="completedOrders__table-header--item">mode</td>
          <td className="completedOrders__table-header--item">order_Id</td>
        </tr>
        </thead>
        {modal}
       {table}
      </table>
    </div>

    </React.Fragment>
  )
}
}


export default CompletedOrders;
