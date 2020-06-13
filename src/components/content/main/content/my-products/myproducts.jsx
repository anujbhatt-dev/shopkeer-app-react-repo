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
    addProducts:[],
    deletingProduct:false,
    deleteProductId:-1

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
      if(this.state.categorySelected===-1)
      axios.get("http://localhost:7571/getProductsBySellerCode?sellercode="+this.context.sellerCode)
       .then(data=> {this.setState({products:data.data,loadingProducts:false});}
         )
       
         else{
         axios.get("http://localhost:7571/getProductsByCategoryIdAndSellerCode?sellercode="+this.context.sellerCode+"&id="+this.state.categorySelected)
         .then(data=> {this.setState({products:data.data,loadingProducts:false});}
           )}

           if(this.state.deletingProduct===true){
             console.log("deleting "+this.state.deleteProductId)
           axios.delete("http://localhost:7571/deleteMyProduct?sellercode="+this.context.sellerCode+"&id="+this.state.deleteProductId)
         .then(data=> {this.setState({deletingProduct:false,deleteProductId:-1});}
           )}
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

  
  changeCategorySelected=(categoryId)=>{
    this.setState({
     categorySelected:categoryId,
      loadingProducts:true,
    } )
 
   }


   deleteProduct=(index,id)=>{
    
    let updatedProducts=[... this.state.products];
    updatedProducts.splice(index,1);
    this.setState({products:updatedProducts,deletingProduct:true,deleteProductId:id})
    

  }


  render(){

    let content=<Spinner/>;
    let menu=null;

    if(this.state.loadingCategories===false){
    menu=  <MyProductsMenu  changeCategorySelected={this.changeCategorySelected} categories={this.state.categories} categories={this.state.categories}/>
 }

 if(this.state.loadingProducts===false){
    content=(
    <div className="products">
         <MyProductTableSection
         deleteProduct={this.deleteProduct}
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
