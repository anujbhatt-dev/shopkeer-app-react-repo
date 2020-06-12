import React from "react"
import Box from "../../../../UI/box"
import Modal from "../../../../UI/modal/modal"
import Backdrop from "../../../../UI/backdrop/backdrop"
import NewOrderContent from "./new-orders-content/new-order-content"
import NewOrdersMenu from "./new-orders-menu/new-orders-menu"
import Spinner from "../../../../UI/spinner/spinner"
import axios from "axios"




class NewOrders extends React.Component{

  state={
    detailView:false,
    loading:false,
    loaded:false,
     orders:[
       {
            id:1,
            name:"Rick",
            phone:"69696900",
            time:"12:45",
            date:"12-06-2020",
            mode:"Pick Up",
            address:null,
            total:448.4,
            products:[
               {
                        name:"Chini",
                        quantity:"4 kg"
                },
                {
                  name:"chai",
                  quantity:"400 kg"
          }
            ]

          },
          {
            id:2,
            name:"Rick",
            phone:"69696900",
            time:"12:45",
            date:"12-06-2020",
            mode:"Pick Up",
            address:null,
            total:448.4,
            products:[
               {
                        name:"Chini",
                        quantity:"4 kg"
                },
                {
                  name:"chai",
                  quantity:"400 kg"
          }
            ]

          },
          {
            id:1,
            name:"Rick",
            phone:"69696900",
            time:"12:45",
            date:"12-06-2020",
            mode:"Pick Up",
            address:null,
            total:448.4,
            products:[
               {
                        name:"Chini",
                        quantity:"4 kg"
                },
                {
                  name:"chai",
                  quantity:"400 kg"
          }
            ]

          },
          {
            id:1,
            name:"Rick",
            phone:"69696900",
            time:"12:45",
            date:"12-06-2020",
            mode:"Pick Up",
            address:null,
            total:448.4,
            products:[
               {
                        name:"Chini",
                        quantity:"4 kg"
                },
                {
                  name:"chai",
                  quantity:"400 kg"
          }
            ]

          },
          {
            id:1,
            name:"Rick",
            phone:"69696900",
            time:"12:45",
            date:"12-06-2020",
            mode:"Pick Up",
            address:null,
            total:448.4,
            products:[
               {
                        name:"Chini",
                        quantity:"4 kg"
                },
                {
                  name:"chai",
                  quantity:"400 kg"
          }
            ]

          },
          {
            id:1,
            name:"Rick",
            phone:"69696900",
            time:"12:45",
            date:"12-06-2020",
            mode:"Pick Up",
            address:null,
            total:448.4,
            products:[
               {
                        name:"Chini",
                        quantity:"4 kg"
                },
                {
                  name:"chai",
                  quantity:"400 kg"
          }
            ]

          },
          {
            id:1,
            name:"Rick",
            phone:"69696900",
            time:"12:45",
            date:"12-06-2020",
            mode:"Pick Up",
            address:null,
            total:448.4,
            products:[
               {
                        name:"Chini",
                        quantity:"4 kg"
                },
                {
                  name:"chai",
                  quantity:"400 kg"
          }
            ]

          },
          {
            id:1,
            name:"Rick",
            phone:"69696900",
            time:"12:45",
            date:"12-06-2020",
            mode:"Pick Up",
            address:null,
            total:448.4,
            products:[
               {
                        name:"Chini",
                        quantity:"4 kg"
                },
                {
                  name:"chai",
                  quantity:"400 kg"
          }
            ]

          },
          {
            id:4,
            name:"Morty",
            phone:"6969612330",
            time:"8:45",
            date:"12-06-2020",
            mode:"Pick Up",
            address:null,
            total:948.4,
            products:[
               {
                        name:"lehsun",
                        quantity:"4 kg"
                },
                {
                         name:"lehsun",
                         quantity:"4 kg"
                 },
                 {
                          name:"lehsun",
                          quantity:"4 kg"
                  },
                  {
                           name:"lehsun",
                           quantity:"4 kg"
                   },
                   {
                            name:"lehsun",
                            quantity:"4 kg"
                    },
                    {
                             name:"lehsun",
                             quantity:"4 kg"
                     },
                     {
                              name:"lehsun",
                              quantity:"4 kg"
                      },

                      {
                               name:"lehsun",
                               quantity:"4 kg"
                       },{
                                name:"lehsun",
                                quantity:"4 kg"
                        },
                        {
                                 name:"lehsun",
                                 quantity:"4 kg"
                         },{
                                  name:"lehsun",
                                  quantity:"4 kg"
                          },
                          {
                                   name:"lehsun",
                                   quantity:"4 kg"
                           },
                           {
                                    name:"lehsun",
                                    quantity:"4 kg"
                            },
                            {
                                     name:"lehsun",
                                     quantity:"4 kg"
                             },
                             {
                                      name:"lehsun",
                                      quantity:"4 kg"
                              },
                              

                {
                  name:"nimmbu",
                  quantity:"400 kg"
          }
            ]

          }
     ]
  }

  componentDidMount(){
    let currentUrl = window.location.href;
    let  index=currentUrl.lastIndexOf("/")
    let sellerCode=currentUrl.slice(index+1);
    if(this.props.sellerCode==="none"){
      this.props.sellerInititalize(sellerCode);
    }
   
    this.setState({loading:true})
  }

  shouldComponentUpdate(nextProps,nextState){


    if(this.props.sellerCode==="none")
    return true;
    return !this.state.loaded;
  }


  componentDidUpdate(){
    if(this.state.loading===true)
    axios.get("https://jsonplaceholder.typicode.com/posts").then((data)=>{
      this.setState({loading:false,loaded:true});
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


    const boxes=(
      this.state.orders.map((order)=><Box key={order.id} ><NewOrderContent click={this.openDetailView} order={order}/></Box>)
    )

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
