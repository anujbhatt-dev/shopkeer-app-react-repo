import React from "react"
import Box from "../../../../UI/box"
import Modal from "../../../../UI/modal/modal"
import Backdrop from "../../../../UI/backdrop/backdrop"
import NewOrderContent from "./new-orders-content/new-order-content"
import NewOrdersMenu from "./new-orders-menu/new-orders-menu"
import Spinner from "../../../../UI/spinner/spinner"
import axios from "axios"
import LayOutContext from "../../../layout-context"
import NewOrderDetailView from "./new-orders-detail-view/new-order-detail-view"





class NewOrders extends React.Component{

  state={
    detailView:false,
    loading:false,
    loaded:false,
    deletingOrderId:-1,
     orders:null
  }

  static contextType=LayOutContext;

  componentDidMount(){
    let currentUrl = window.location.href;
    let  index=currentUrl.lastIndexOf("/")
    let sellerCode=currentUrl.slice(index+1);
    if(this.context.sellerCode==="none"){
      this.context.sellerInititalize(sellerCode);
    }
    console.log(this.props.sellerCode)
    this.setState({loading:true})
  }



  componentDidUpdate(){
    if(this.state.loading===true)
    axios.get("http://localhost:7571/getSellerConfirmedOrdersBySellerCode?sellercode="+this.context.sellerCode,
    {
      headers: {
        'Content-Type': 'application/json'
      }}).then((data)=>{
  console.log(data.data);
      this.setState({orders:data.data,loading:false,loaded:true});
 })

 if(this.state.deletingOrderId>-1){
  // 
  axios.get("http://localhost:7571/declineOrde?id="+this.state.deletingOrderId).
  then(data=>{this.setState({deletingOrderId:-1})}).catch((data=>{this.setState({deletingOrderId:-1})}));

   
 }
  }


  openDetailView=(index)=>{

    this.setState({detailView:true,detailViewIndex:index});

  }

  closeDetailView=()=>{

    this.setState({detailView:false,detailViewIndex:-1});

  }

  
deleteOrder=(index,id)=>{

  let newOrders=[... this.state.orders];

  newOrders.splice(index,1);
  this.closeDetailView();

  this.setState({
    orders:newOrders,
    deletingOrderId:id,
  })
}

  render(){

    let detailView=null;
    if(this.state.detailViewIndex>-1)
      detailView=(
      <React.Fragment>
        <Modal ><NewOrderDetailView   deleteOrder={this.deleteOrder} close={this.closeDetailView} order={this.state.orders[this.state.detailViewIndex]}/></Modal>
        <Backdrop click={this.closeDetailView}/>
      </React.Fragment>
    )


    let  boxes=null;
    if(this.state.orders!==null)
    boxes=(
      this.state.orders.map((order,index)=>
        (<Box key={order.orderid} >
        <NewOrderContent   deleteOrder={this.deleteOrder} click={()=>this.openDetailView(index)} order={order}/></Box>)
    ))

    const content=(
      <React.Fragment>
      <NewOrdersMenu/>
{this.state.detailView===true?detailView:null}
   <div className="main__newOrderBox">
    {boxes}
   </div>
    </React.Fragment>
    )



  return (
  this.state.loading?<Spinner/>:content
 )
}
}

export default NewOrders;
