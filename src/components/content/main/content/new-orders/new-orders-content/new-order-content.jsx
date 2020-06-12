import React from "react"

const NewOrderContent = (props) =>{
  return(
      <div className="newOrderContent" onClick={props.click}>
        <div className="newOrderContent__details ">
          <div className="newOrderContent__details-name">{props.order.customername}</div>
          <div className="newOrderContent__details-phone">{props.order.contactno}</div>
          <div className="newOrderContent__details-time">{props.order.time}</div>
          <div className="newOrderContent__details-date">{props.order.date}</div>
          <div className="newOrderContent__details-mode">{props.order.mode}</div>
        </div>
        <div className="newOrderContent__orders" onClick={props.click}>
            <div className="newOrderContent__product">
                <div>PRODUCTS</div><br/>
               {props.order.orderitems.map(product=>{
                 return (
                   <div className="newOrderContent__product-items">
                      {product.productname}<br/>
                   </div>
                 )
               })}
            </div>
            <div className="newOrderContent__quantity">
             <div>QUANTITY</div><br/>
             {props.order.orderitems.map(product=>{
               return (
                <div className="newOrderContent__quantity-items">
                   {product.quantity}<br/>
                </div>
             )
           })}
            </div>
        </div>
        <div className="newOrderContent__footer" onClick={props.click}>
          <div className="newOrderContent__footer-total" onClick={props.click}>
            ₹ {props.order.totalprice}
          </div>
          <div className="newOrderContent__footer-choice">
              <button type="text">cancel</button>
              <button type="text">complete</button>
          </div>
          </div>
      </div>
  )
}

export default NewOrderContent
