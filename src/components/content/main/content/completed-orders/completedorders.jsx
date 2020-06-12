import React, {useState} from "react"
import Completed from "./complete-orders-table-section/complete-orders-table-section"
import CompletedOrdersMenu from "./completed-orders-menu/completed-orders-menu";
import Spinner from "../../../../UI/spinner/spinner"
import axios from "axios"
import LayOutContext from "../../../layout-context";
import Modal from "../../../../UI/modal/modal"
import  CompletedOrdersDetailView from "./completed-orders-detail-view/completed-orders-detail-view"
import Backdrop from "../../../../UI/backdrop/backdrop";



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
    orderId={order.orderid}/>
  )
}))

if(this.state.detailView===true)
modal=(  <React.Fragment>
  <Modal ><CompletedOrdersDetailView order={this.state.orders[this.state.detailViewIndex]}/></Modal>
  <Backdrop click={this.closeDetailView}/>
</React.Fragment>)




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
        {modal}
       {table}
      </div>
    </div>

    </React.Fragment>
  )
}
}


export default CompletedOrders;
