import React from 'react';

const MyProductMenuList = (props) =>{
  return (
    <div className="products__menu-body">
    <ul className="products__menu-list">
     {props.p.categories.map(category=><li className="products__menu-item">{category.category[0]}:{category.category[1]}</li>)}

    </ul>
    </div>
  )
}
export default MyProductMenuList
