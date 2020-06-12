import React from "react"
import Menubar from "../../../../../UI/menubar"


const productsMenu=(props)=>(
<Menubar> 
<ul>   
 {props.categories.map(category=><li>{category.category[0]}:{category.category[1]}</li>)}

</ul>

</Menubar>
)


export default productsMenu