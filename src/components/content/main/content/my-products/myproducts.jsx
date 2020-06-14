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
    searchedProducts:null,
    categories:null,
    categorySelected:-1,
    addProducts:[],
    deletingProduct:false,
    deleteProductId:-1,
    imageUrl:"",
    imageName:"",

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
       .then(data=> {this.setState({searchedProducts:data.data,products:data.data,loadingProducts:false});}
         )
       
         else{
         axios.get("http://localhost:7571/getProductsByCategoryIdAndSellerCode?sellercode="+this.context.sellerCode+"&id="+this.state.categorySelected)
         .then(data=> {this.setState({searchedProducts:data.data,products:data.data,loadingProducts:false});}
           )}

           if(this.state.deletingProduct===true){
             console.log("deleting "+this.state.deleteProductId)
           axios.delete("http://localhost:7571/deleteMyProduct?sellercode="+this.context.sellerCode+"&id="+this.state.deleteProductId)
         .then(data=> {this.setState({deletingProduct:false,deleteProductId:-1});}
           )}
          }
           
  


  priceChange=(event,index)=>{

    let updatedProduct={...this.state.searchedProducts[index]};
    updatedProduct.price=event.target.value;

    let updatedProducts=[... this.state.searchedProducts];
    updatedProducts[index]=updatedProduct;

    this.setState({
      searchedProducts:updatedProducts
    })

  }

  
  changeCategorySelected=(categoryId)=>{
    this.setState({
     categorySelected:categoryId,
      loadingProducts:true,
    } )
 
   }


   deleteProduct=(index,id)=>{
    
    let updatedSearchedProducts=[... this.state.searchedProducts];
    let updatedProducts=[... this.state.products];
    updatedSearchedProducts.splice(index,1);
    updatedProducts.forEach((product,index)=>{if(product.productid==id){updatedProducts.splice(index,1);return false;}return true;})
    this.setState({products:updatedProducts,searchedProducts:updatedSearchedProducts,deletingProduct:true,deleteProductId:id})
    

  }

  search=(event)=>{

    if(event.target. value.length==0)
    this.setState((state)=>{return{searchedProducts:state.products}})
    else{

      
      let newSearchedProducts= this.state.products.filter((product)=>product.productname.toLowerCase().indexOf(event.target.value.toLowerCase())>-1)

      this.setState({
        searchedProducts:newSearchedProducts
      })

    }

  }

  showImage=(id)=>{

    let imageUrl,imageName="";
    this.state.searchedProducts.forEach(product =>
       {
         console.log(product.productid+":"+id);
         if(product.productid===id)
         {imageUrl=product.productimage;
          imageName=product.productname;
          return false}
      return true;});

    console.log(imageUrl+":"+imageName);

    this.setState({imageUrl:imageUrl,imageName:imageName});

  }



  render(){

    let content=<Spinner/>;
    let menu=null;

    if(this.state.loadingCategories===false){
    menu=  <MyProductsMenu imageUrl={this.state.imageUrl} imageName={this.state.imageName} search={this.search} changeCategorySelected={this.changeCategorySelected} 
    categories={this.state.categories}/>
 }

 if(this.state.loadingProducts===false){
    content=(
    <div className="products">
         <MyProductTableSection
         deleteProduct={this.deleteProduct}
         priceChange={this.priceChange}
         showImage={this.showImage}
          products={this.state.searchedProducts}/>
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
