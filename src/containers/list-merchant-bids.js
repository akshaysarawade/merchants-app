import React, { Component} from 'react';
import ListItemMerchantBids from './list-item-merchant-bids';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setSortType } from '../actions/index';

class ListMerchantBids extends Component {
  onSort(sortType) {
    this.props.setSortType(sortType);
  }

  sortMerchantBids() {
    this.props.selectedMerchantBids.sort((a, b) => {
      let date1Array = a.created.split(".");
      let date1Str = date1Array[2] + '-' + date1Array[1] + '-' + date1Array[0];
      let date2Array = b.created.split(".");
      let date2Str = date2Array[2] + '-' + date2Array[1] + '-' + date2Array[0];
      let date1 = new Date(date1Str);
      let date2 = new Date(date2Str);
      if (this.props.sortType === 'desc') {
        return date2 - date1;
      } else {
        return date1 - date2;
      }
    });
  }
  renderMerchantsBids() {
    this.sortMerchantBids();
    return this.props.selectedMerchantBids.map((bid) => {
      return (
        <ListItemMerchantBids
          bid={bid}
          key={bid.id}
        />
      );
    });
  }

  render() {
    if (this.props.selectedMerchantBids.length === 0) {
      return (
        <div className="col-md-4 col-sm-12">
          <div className="merchant-bids-header">
            <p>Merchant Bids</p>
          </div>
        </div>
      );
    }

    return (
      <div className="col-md-4  col-sm-12 merchant-bids">
        <div className="merchant-bids-header">
          <p>Merchant Bids</p>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Car Title</th>
              <th>Amount</th>
              <th>Created</th>
              <th className={this.props.sortType === 'asc' ? 'hidden' : 'show'}><a onClick={ () => {this.onSort('asc') }}><span className="glyphicon glyphicon-triangle-top"></span></a></th>
              <th className={this.props.sortType === 'desc' ? 'hidden' : 'show'}><a onClick={ () => {this.onSort('desc') }}><span className="glyphicon glyphicon-triangle-bottom"></span></a></th>
            </tr>
          </thead>
          <tbody>
            {this.renderMerchantsBids()}
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedMerchantBids: state.merchantsState.selectedMerchantBids,
    sortType: state.merchantsState.sortType
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setSortType }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ListMerchantBids);
