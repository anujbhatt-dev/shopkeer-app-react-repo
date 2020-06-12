import React, { Component } from 'react';

class Completed extends Component {


  render() {
    return (
      <div className="completedOrders__table-section" onClick={this.props.click}>
        <div className="completedOrders__table-section--item">{this.props.date}</div>
        <div className="completedOrders__table-section--item">{this.props.name}</div>
        <div className="completedOrders__table-section--item">{this.props.total}</div>
        <div className="completedOrders__table-section--item">{this.props.mode}</div>
        <div className="completedOrders__table-section--item">{this.props.orderId}</div>
      </div>
    );
  }
}
export default Completed
