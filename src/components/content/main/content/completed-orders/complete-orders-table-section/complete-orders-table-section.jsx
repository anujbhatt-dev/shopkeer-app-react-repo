import React, { Component } from 'react';

class Completed extends Component {


  render() {
    return (
      <tbody className="completedOrders__table-section" onClick={this.props.click}>
        <tr className="completedOrders__table-section-row">
          <td className="completedOrders__table-section--item">{this.props.date}</td>
          <td className="completedOrders__table-section--item">{this.props.name}</td>
          <td className="completedOrders__table-section--item">{"₹ "+this.props.total}</td>
          <td className="completedOrders__table-section--item">{this.props.mode}</td>
          <td className="completedOrders__table-section--item">{this.props.orderId}</td>
        </tr>
      </tbody>
    );
  }
}
export default Completed
