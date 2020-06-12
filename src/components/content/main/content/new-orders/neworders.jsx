import React from "react"
import Box from "../../../../UI/box"
import Modal from "../../../../UI/modal/modal"
import Backdrop from "../../../../UI/backdrop/backdrop"
import NewOrderContent from "./new-orders-content/new-order-content"
import NewOrdersMenu from "./new-orders-menu/new-orders-menu"
import Spinner from "../../../../UI/spinner/spinner"
import axios from "axios"
import LayOutContext from "../../../layout-context"




class NewOrders extends React.Component{

  state={
    detailView:false,
    loading:false,
    loaded:false,
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

  shouldComponentUpdate(nextProps,nextState){


    if(this.context.sellerCode==="none")
    return true;
    return !this.state.loaded;
  }


  componentDidUpdate(){
    console.log(this.context.sellerCode)
    if(this.state.loading===true)
    axios.get("http://localhost:7571/getSellerConfirmedOrdersBySellerCode?sellercode="+this.context.sellerCode,
    {
      headers: {
        'Content-Type': 'application/json'
      }}).then((data)=>{
  console.log(data.data);
      this.setState({orders:data.data,loading:false,loaded:true});
 })
  }


  openDetailView=()=>{

    this.setState({detailView:true});

  }

  closeDetailView=()=>{

    this.setState({detailView:false});

  }


  render(){


    const detailView=(
      <React.Fragment>
        <Modal>New Orders Modal</Modal>
        <Backdrop click={this.closeDetailView}/>
      </React.Fragment>
    )


    let  boxes=null;
    if(this.state.orders!==null)
    boxes=(
      this.state.orders.map((order)=>
        (<Box key={order.orderid} >
        <NewOrderContent click={this.openDetailView} order={order}/></Box>)
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
