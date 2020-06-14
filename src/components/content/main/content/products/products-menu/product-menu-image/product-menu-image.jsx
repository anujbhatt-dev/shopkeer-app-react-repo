import React from 'react';

const ProductMenuImage = (props) => {

  return (
    <div className="products__menu-image">
    <div className="products__menu-item--detail"><img src={props.imageUrl} alt={props.imageName+" image not found"}/></div>
    </div>
  )

};

export default ProductMenuImage;
