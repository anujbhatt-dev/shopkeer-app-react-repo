import React from "react"
import ProductsMenu from "./products-menu/products-menu";
import Modal from "../../../../UI/modal/modal";
import Backdrop from "../../../../UI/backdrop/backdrop";
import axios from "axios";
import Spinner from "../../../../UI/spinner/spinner";
import LayOutContext from "../../../layout-context";
import ProductsTableSection from "./products-table-section/products-table-section";




class Products extends React.Component {


  state={
    loadingCategories:true,
    loadingProducts:true,
    products:null,
    categories:null,
    categorySelected:-1,
  }

  static contextType=LayOutContext;

  componentDidMount(){
    this.setState({loading:true})
  }

  componentDidUpdate(){
    if(this.state.loadingCategories===true)
    axios.get("http://localhost:7571/getProductCategoriesByUserSubServiceCode/"+this.context.sellerCode)
    .then(data=> {this.setState({categories:data.data,loadingCategories:false});}
      )

      if(this.state.loadingProducts===true)
      axios.get("http://localhost:7571/getProductsBySellerCode?sellercode="+this.context.sellerCode)
    .then(data=> {this.setState({products:data.data,loadingProducts:false});}
      )
  }

  render(){



    let content=<Spinner/>;
    let menu=null;

    if(this.state.loadingCategories===false){
    menu=  <ProductsMenu categories={this.state.categories}/>
 }

 if(this.state.loadingProducts===false){
    content=( 
    <div className="products">
       <div className="products__table-header">
         <ProductsTableSection products={this.state.products}/>
       </div>
    </div>
    )}

  return (
    <React.Fragment>
    {menu}  
   {content}
   </React.Fragment>
  )
}
}

export default Products
