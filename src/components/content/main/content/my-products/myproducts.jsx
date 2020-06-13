import React from "react"
import MyProductsMenu from "./my-products-menu/my-products-menu";
import axios from "axios";
import Spinner from "../../../../UI/spinner/spinner";
import LayOutContext from "../../../layout-context";
import MyProductTableSection from "./my-products-table-section/my-product-table-section"

class MyProducts extends React.Component{ 
  

  state={
    loadingCategories:true,
    loadingProducts:true,
    products:null,
    categories:null,
    categorySelected:-1,
    addProducts:[]

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


  priceChange=(event,index)=>{

    let updatedProduct={...this.state.products[index]};
    updatedProduct.price=event.target.value;

    let updatedProducts=[... this.state.products];
    updatedProducts[index]=updatedProduct;

    this.setState({
      products:updatedProducts
    })

  }


  render(){



    let content=<Spinner/>;
    let menu=null;

    if(this.state.loadingCategories===false){
    menu=  <MyProductsMenu categories={this.state.categories}/>
 }

 if(this.state.loadingProducts===false){
    content=(
    <div className="products">
         <MyProductTableSection
         priceChange={this.priceChange}
          products={this.state.products}/>
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

export default MyProducts;
