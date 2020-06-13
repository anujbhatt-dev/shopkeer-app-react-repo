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
    addProducts:[],
    updateDisable:true,
    addingProducts:false,

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


      if(this.state.addingProducts===true ){
        console.log(this.state.addProducts)
        axios.post("http://localhost:7571/addMyProducts?usersubservicecode="+this.context.sellerCode,this.state.addProducts,{
          headers: {
            'Content-Type': 'application/json'
          }}).then(data=> {this.setState({addingProducts:false});})

      }


      if(this.state.loadingProducts===true && this.state.addingProducts===false){
        console.log("PP")
        if(this.state.categorySelected==-1)
   axios.get("http://localhost:7571/getRemainingProductsBySellerCode?sellercode="+this.context.sellerCode)
    .then(data=> {this.setState({products:data.data,loadingProducts:false,addingProducts:false});}
      )
    
      else{
      axios.get("http://localhost:7571/getProductsByCategoryIdAndSellerCode2?sellercode="+this.context.sellerCode+"&id="+this.state.categorySelected)
      .then(data=> {this.setState({products:data.data,loadingProducts:false,addingProducts:false});}
        )}
    
    }

   
  }


  addProducts=()=>{

    this.setState({
      addingProducts:true,
      loadingProducts:true,
      updateDisable:true
    })
// this.state.addProducts.forEach(product=>{console.log(product.productId+":"+product.myprice)});

  }




  inputChangeHandler=(event,productId)=>{

    if(document.getElementById("c"+productId).checked){

      let index= this.state.addProducts.findIndex(product=>product.productId===productId);
      let newAddProducts=[...this.state.addProducts]
      newAddProducts[index].myPrice=+event.target.value;
      this.setState({
        addProducts:newAddProducts
      })
    }


  }


  checkBoxHandler=(event,productId)=>{

   
    if(event.target.checked){
       let s=[];
    let price = document.getElementById("p"+productId).value;
     if(price){}
     else{
      let index= this.state.products.findIndex(product=>product.productid===productId);
       price=this.state.products[index].price;
     }

     
     let newProduct={
       myPrice:+price,
       productId:+productId
     }
     let newAddProducts=[...this.state.addProducts, newProduct]
     this.setState({
       addProducts:newAddProducts
     })

     if(this.state.updateDisable===true)
     this.setState({
       updateDisable:false});

    }
    else {
      let index= this.state.addProducts.findIndex(product=>product.productid===productId);
      let newAddProducts=[...this.state.addProducts]
      newAddProducts.splice(index,1);
      this.setState({
        addProducts:newAddProducts
      })
      console.log(this.state.addProducts.length)
      if(this.state.addProducts.length===1)
     this.setState({
       updateDisable:true});

    }

  }


  changeCategorySelected=(categoryId)=>{
   this.setState({
    categorySelected:categoryId,
     loadingProducts:true,
   } )

  }



  render(){



    let content=<Spinner/>;
    let menu=null;

    if(this.state.loadingCategories===false){
    menu=  <ProductsMenu addProducts={this.addProducts} updateDisable={this.state.updateDisable}  changeCategorySelected={this.changeCategorySelected} categories={this.state.categories}/>
 }

 if(this.state.loadingProducts===false){
    content=(
    <div className="products">
         <ProductsTableSection
          checkBoxClick={this.checkBoxHandler} 
         inputChange={this.inputChangeHandler} 
         getAddProducts={this.getAddProducts}
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

export default Products
