import React, {useState} from 'react'



const ProductsTableRow=(props)=>
     (
        <tr className="products__table-body--row">
          <td className="products__table-body--item"><input className="checkboxBtn"  id={"c"+props.product.productid} onClick={(event)=>props.checkBoxClick(event,props.product.productid)} type="checkbox"/></td>
          <td className="products__table-body--item">{props.product.productname}</td>
          <td className="products__table-body--item">{props.product.unit}</td>
          <td className="products__table-body--item">{"₹ "+props.product.price}</td>
          <td className="products__table-body--item"><input className="myPriceInput" id={"p"+props.product.productid} onChange={(event)=>props.inputChange(event,props.product.productid)}  /></td>
        </tr>
    )



export default ProductsTableRow
