import React from 'react';

const ProductMenuSearch = (props) =>{
  return (
    <div className="products__menu-search">
      <input className="products__menu-search--box" type="text" />
      <button className="products__menu-search--btn"><i className="fa fa-search" aria-hidden="true"></i></button>
    </div>
  )
}
export default ProductMenuSearch
