import React from 'react';

const MyProductMenuSearch = (props) =>{
  return (
    <div className="products__menu-search">
      <input className="products__menu-search--box" type="text" />
      <button className="products__menu-search--btn"><i class="fa fa-search" aria-hidden="true"></i></button>
    </div>
  )
}
export default MyProductMenuSearch
