import React from 'react';
const ProductTable = (props)=>{
  const grandTotalArray = props.p.order.orderitems.map(num=>{
    return parseInt(num.totalprice)
  })
  const grandTotal = grandTotalArray.reduce((accumulator,num)=>{
    return accumulator + num
  })
  return (
    <table className="detailProductTable">
      <thead className="detailProductTable__head">
        <tr className="detailProductTable__head-row">
          <td className="detailProductTable__head-row--item">Products</td>
          <td className="detailProductTable__head-row--item">price</td>
          <td className="detailProductTable__head-row--item">total</td>
        </tr>
      </thead>
      <tbody className="detailProductTable__body">
        {props.p.order.orderitems.map((order)=>{
          return (
            <tr className="detailProductTable__body-row">
                <td className="detailProductTable__body-row--item">{order.productname}</td>
                <td className="detailProductTable__body-row--item">{order.quantity}</td>
                <td className="detailProductTable__body-row--item">{"₹"+order.totalprice}</td>
            </tr>
          )
        })}
     </tbody>
     <tfoot className="detailProductTable__foot">
     <tr className="detailProductTable__foot-row">
         <td className="detailProductTable__foot-row--item" colspan="2">grand total: </td>
         <td className="detailProductTable__foot-row--item">{"₹ "+grandTotal}</td>
     </tr>
     </tfoot>
    </table>
  )
}

export default ProductTable
