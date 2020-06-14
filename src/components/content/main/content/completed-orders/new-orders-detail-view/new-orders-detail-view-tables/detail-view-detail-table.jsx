import React from 'react';

const DetailTable = (props)=>{
  let mode = null;
  if(props.p.order.mode==="Pickup"){
    mode = "pickup"
  }else{
    mode = props.p.order.deliveryaddress
  }
  return (
      <table className="detailTable">
        <tr className="detailTable__row"><td className="detailTable__row-item">{props.p.order.customername}</td></tr>
        <tr className="detailTable__row"><td className="detailTable__row-item">{props.p.order.date}</td></tr>
        <tr className="detailTable__row"><td className="detailTable__row-item">{mode}</td></tr>
        <tr className="detailTable__row"><td className="detailTable__row-item">{props.p.order.contactno}</td></tr>
        <tr className="detailTable__row"><td className="detailTable__row-item">{props.p.order.totalitems}</td></tr>
      </table>
  )
}

export default DetailTable
