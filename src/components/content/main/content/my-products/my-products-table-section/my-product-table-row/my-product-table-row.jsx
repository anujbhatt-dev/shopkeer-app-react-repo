import React from 'react'

export default function MyProductTableRow(props) {
    return (
        <tr className="products__table-body--row">
          <td className="products__table-body--item" onClick={()=>props.showImage(props.product.productid)}>{props.product.productname}</td>
          <td className="products__table-body--item">{props.product.unit}</td>
          <td className="products__table-body--item"><input className="products__input" id={"p"+props.product.productid} onChange={(event)=>props.addProductUpdate(event,props.product.productid,props.index)}  value={props.product.price}/></td>
          <td className="products__table-body--item"><button onClick={()=>props.deleteProduct(props.index,props.product.productid)} className="products__deleteBtn">DELETE</button></td>
           
        </tr>
    )

}
