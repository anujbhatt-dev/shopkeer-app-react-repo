import React from "react"
import Box from "../../UI/box"
import Modal from "../../UI/modal/modal"
import Backdrop from "../../UI/backdrop/backdrop"
import NewOrderContent from "./new-orders-content/new-order-content"






class NewOrders extends React.Component{

  state={
    detailView:false,
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


    const boxs=(
      this.state.orders.map((order)=><Box key={order.id} ><NewOrderContent click={this.openDetailView} order={order}/></Box>)
    )



  return (


    <React.Fragment>
{this.state.detailView===true?detailView:null}
<div className="NewOrdersBox">
    {boxs}
   </div>
    </React.Fragment>

  )
}
}

export default NewOrders;
