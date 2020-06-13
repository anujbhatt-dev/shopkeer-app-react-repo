import React from "react"
const ProductMenuUpdate=(props)=>{
 return (
   <div className="products__menu-update">
     <span className="products__menu-update--span">Total Item Selected : {props.selectedProductsLength}</span>
     <button className="products__menu-update--btn" disable={props.disable}>UPDATE</button>
  </div>
)
}
export default ProductMenuUpdate
