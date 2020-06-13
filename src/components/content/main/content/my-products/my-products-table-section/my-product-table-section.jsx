import React, { Component } from 'react'
import MyProductTableRow from "./my-product-table-row/my-product-table-row"

export default class MyProductTableSection extends Component {
   

    render() {
        return (
<React.Fragment>
            <table className="products__table">
                <thead className="products__table-header">
                  <tr className="products__table-header--row">
                    <td className="products__table-header--item">name</td>
                    <td className="products__table-header--item">unit</td>
                    <td className="products__table-header--item">my price</td>
                    <td className="products__table-header--item"></td>
                  </tr>
                </thead>
                <tbody className="products__table-body">
                {this.props.products.map((product,index)=><MyProductTableRow priceChange={this.props.priceChange} index={index} product={product} checkBoxClick={this.props.checkBoxClick} inputChange={this.props.inputChange}/>)}
                </tbody>

            </table>
            <button onClick={this.props.getAddProducts}>TEST</button>
            </React.Fragment>
        )
    }
}


