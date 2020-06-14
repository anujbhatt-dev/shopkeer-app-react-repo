import React from "react"
const MyProductMenuUpdate=(props)=>{
 return (
   <div className="products__menu-update">
     <span className="products__menu-update--span">Total Item Selected : {props.selectedProductsLength}</span>
     {props.updateDisable===true? <button className="products__menu-update--btn" style={{color:"red",cursor:"not-allowed"}} disable>UPDATE</button>
     : <button className="products__menu-update--btn" onClick={props.updateProduct} style={{color:"green"}}>UPDATE</button>}
  </div>
)
}
export default MyProductMenuUpdate
