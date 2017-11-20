import React, { Component } from 'react';
import ListItemMerchant from './list-item-merchant';
import { connect } from 'react-redux';

class ListMerchant extends Component {
  renderMerchants() {
    return this.props.merchants.map((merchant) => {
      return (
        <ListItemMerchant
          merchant={merchant}
          key={merchant.id}
        />
      );
    });
  }

  render() {
    return (
      <div className="col-md-8 col-sm-12">
        <div className="merchant-bids-header">
          <p>Merchants</p>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th className="id">Id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th className="avatar">Avatar Url</th>
              <th className="email">Email</th>
              <th>Phone #</th>
              <th className="premium">Premium</th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.renderMerchants()}
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    merchants: state.merchantsState.merchants
  }
}

export default connect(mapStateToProps)(ListMerchant);
