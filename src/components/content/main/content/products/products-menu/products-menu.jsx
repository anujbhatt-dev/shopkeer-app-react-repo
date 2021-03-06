import React from "react"
import Menubar from "../../../../../UI/menubar"
import ProductMenuImage from './product-menu-image/product-menu-image';
import ProductMenuSearch from './product-menu-search/product-menu-search';
import ProductMenuList from './product-menu-list/product-menu-list';
import ProductMenuUpdate from './product-update/product-update';

const productsMenu=(props)=>(
<Menubar>
<div className="products__menu">
<ProductMenuSearch search={props.search}/>
<ProductMenuList {...props}/>
{props.imageName.length>0?
<ProductMenuImage imageUrl={props.imageUrl} imageName={props.imageName} />:null}
<ProductMenuUpdate productsSelected={props.productsSelected} addProducts={props.addProducts} updateDisable={props.updateDisable}/>
</div>
</Menubar>
)


export default productsMenu
