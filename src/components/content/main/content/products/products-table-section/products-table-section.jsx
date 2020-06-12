import React, { Component } from 'react'
import ProductsTableRow from './products-table-row/products-table-row'


export default class ProductsTableSection extends Component {
    render() {
        return (
            <ul>
                {this.props.products.map(product=><ProductsTableRow product={product} />)}
            </ul>
        )
    }
}
