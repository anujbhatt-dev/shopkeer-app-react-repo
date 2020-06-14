import React from "react"
import Menubar from "../../../../../UI/menubar"
import MyProductMenuImage from './product-menu-image/product-menu-image';
import MyProductMenuSearch from './product-menu-search/product-menu-search';
import MyProductMenuList from './product-menu-list/product-menu-list';
import MyProductMenuUpdate from './product-update/product-update';

const productsMenu=(props)=>(
<Menubar>
<div className="products__menu">
<MyProductMenuSearch  search={props.search} />
<MyProductMenuList {... props}/>
{props.imageName.length>0?
<MyProductMenuImage imageUrl={props.imageUrl} imageName={props.imageName}  />:null}
<MyProductMenuUpdate />
</div>
</Menubar>
)


export default productsMenu
