import React, { Component } from 'react';
// import { connect } from 'react-redux';

class ListItemMerchantBids extends Component {
  render()  {
    return (
      <tr>
        <td>{this.props.bid.id}</td>
        <td>{this.props.bid.carTitle}</td>
        <td>{this.props.bid.amount}</td>
        <td>{this.props.bid.created}</td>
      </tr>
    );
  }
}

// function mapStateToProps(state) {
//   return {
//     bid: state.bid
//   }
// }

export default ListItemMerchantBids;
