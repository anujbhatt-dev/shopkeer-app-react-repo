import React from 'react';

const ProductMenuList = (props) =>{
  return (
    <div className="products__menu-body">
    <ul className="products__menu-list">
     {props.categories.map(category=><li onClick={()=>props.changeCategorySelected(category.category[0])} className="products__menu-item">{category.category[1]}</li>)}

    </ul>
    </div>
  )
}
export default ProductMenuList
