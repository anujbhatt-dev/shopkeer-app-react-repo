import React from "react"
import Box from "../../UI/box"
import Modal from "../../UI/modal/modal"
import Backdrop from "../../UI/backdrop/backdrop"




class NewOrders extends React.Component{ 

  state={
    detailView:false,
     orders:[
       {
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
                        quatity:"4 kg"
                },
                {
                  name:"NAMAK",
                  quatity:"400 kg"
          }
            ]
          
          },
          {
            name:"Morty",
            phone:"6969612330",
            time:"8:45",
            date:"12-06-2020",
            mode:"Pick Up",
            address:null,
            total:948.4,
            products:[
               {
                        name:"Chini",
                        quatity:"4 kg"
                },
                {
                  name:"NAMAK",
                  quatity:"400 kg"
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
      this.state.orders.map(order=><Box click={this.openDetailView} />)
    )



  return (


    <React.Fragment>    
{this.state.detailView==true?detailView:null}
<div className="NewOrdersBox">
    {boxs}
   </div>
    </React.Fragment>

  )
}
}

export default NewOrders;
