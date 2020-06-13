import React from 'react'

export default function MyProductTableRow(props) {
    return (
        <tr className="products__table-body--row">
          <td className="products__table-body--item">{props.product.productname}</td>
          <td className="products__table-body--item">{props.product.unit}</td>
          <td className="products__table-body--item"><input  id={"p"+props.product.productid} onChange={(event)=>props.priceChange(event,props.index)}  value={props.product.price}/></td>
          <td className="products__table-body--item"><button>DELETE</button></td>

        </tr>
    )

}
