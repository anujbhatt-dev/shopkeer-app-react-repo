import React, { Component } from 'react'
import ProductsTableRow from './products-table-row/products-table-row'


export default class ProductsTableSection extends Component {


  state={
    addProducts:[]
  }


  inputChangeHandler=(event,productId)=>{

    if(document.getElementById("c"+productId).checked){

      let index= this.state.addProducts.findIndex(product=>product.productId===productId);
      let newAddProducts=[...this.state.addProducts]
      newAddProducts[index].myprice=event.target.value;
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
      let index= this.props.products.findIndex(product=>product.productid===productId);
       price=this.props.products[index].price;
     }
     let newProduct={
       myprice:price,
       productId:productId
     }
     let newAddProducts=[...this.state.addProducts, newProduct]
     this.setState({
       addProducts:newAddProducts
     })

    }
    else {
      let index= this.state.addProducts.findIndex(product=>product.productid===productId);
      let newAddProducts=[...this.state.addProducts]
      newAddProducts.splice(index,1);
      this.setState({
        addProducts:newAddProducts
      })

    }

  }

  getAddProducts=()=>{

    this.state.addProducts.forEach(product=>{console.log(product.productId+":"+product.myprice)});

  }


    render() {
        return (
<React.Fragment>
            <table className="products__table">
                <thead className="products__table-header">
                  <tr className="products__table-header--row">
                    <td className="products__table-header--item"></td>
                    <td className="products__table-header--item">name</td>
                    <td className="products__table-header--item">unit</td>
                    <td className="products__table-header--item">standard price</td>
                    <td className="products__table-header--item">my price</td>
                  </tr>
                </thead>
                <tbody className="products__table-body">
                {this.props.products.map(product=><ProductsTableRow product={product} checkBoxClick={this.checkBoxHandler} inputChange={this.inputChangeHandler}/>)}
                </tbody>

            </table>
            <button onClick={this.getAddProducts}>TEST</button>
            </React.Fragment>
        )
    }
}
