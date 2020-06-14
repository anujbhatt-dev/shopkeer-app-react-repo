import React from 'react';

const ProductMenuSearch = (props) =>{
  return (
    <div className="products__menu-search">
      <input onChange={(event)=>props.search(event)} className="products__menu-search--box" type="text" placeholder="search"/>
    </div>
  )
}
export default ProductMenuSearch
