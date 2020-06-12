import React, {useState} from 'react'

 const ProductsTableRow=(props)=> {
   let [myprice,setMyprice] = useState(props.product.myprice)
   const myPriceHandler = (e)=>{
      const newMyprice = e.target.value
      setMyprice(newMyprice)
   }
   const checkBoxHandler = (e,productid)=>{
     if(myprice===0){
       console.log("0");
     }else{
       console.log(myprice);
     }
   }
    return (
        <tr className="products__table-body--row">
          <td className="products__table-body--item"><input onClick={(e)=>checkBoxHandler(e,props.product.productid)} type="checkbox"/></td>
          <td className="products__table-body--item">{props.product.productname}</td>
          <td className="products__table-body--item">{props.product.unit}</td>
          <td className="products__table-body--item">{props.product.price}</td>
          <td className="products__table-body--item"><input onChange={myPriceHandler} type="tel" value={myprice}/></td>
        </tr>
    )
}


export default ProductsTableRow
