import React, { Component } from 'react'
import ProductsTableRow from './products-table-row/products-table-row'


export default class ProductsTableSection extends Component {


  state={
    addProducts:[]
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
                {this.props.products.map(product=><ProductsTableRow product={product} checkBoxClick={this.props.checkBoxClick} inputChange={this.props.inputChange}/>)}
                </tbody>

            </table>
            </React.Fragment>
        )
    }
}
