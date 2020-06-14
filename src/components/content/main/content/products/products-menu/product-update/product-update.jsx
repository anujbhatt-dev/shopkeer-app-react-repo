import React from "react"
const ProductMenuUpdate=(props)=>{
 return (
   <div className="products__menu-update">
     <span className="products__menu-update--span"> Item Selected : {props.productsSelected}</span>
    {props.updateDisable?<button className="products__menu-update--btn" style={{color:"red",cursor:"not-allowed"}} disabled>UPDATE</button>
     :<button className="products__menu-update--btn" onClick={props.addProducts} style={{color:"green"}}>UPDATE</button>}
  </div>
)
}
export default ProductMenuUpdate
