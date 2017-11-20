import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addMerchant, editMerchant } from '../actions/index';

class AddMerchant extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      avatarUrl: '',
      emailId: '',
      phone: '',
      hasPremium: null
    };
    this.editMode = false;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    // console.log('next props selectedMerchant: ', nextProps.selectedMerchant);
    if (nextProps.selectedMerchant ) {
      this.editMode = true;
    }
    this.setState(nextProps.selectedMerchant);
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.editMode) {
      this.props.editMerchant(this.state)
      this.editMode = false;
    } else {
      this.props.addMerchant(this.state);
    }
    this.setState({
      firstName: '',
      lastName: '',
      avatarUrl: '',
      emailId: '',
      phone: '',
      hasPremium: null
    });
  }

  render() {
    return (
      <div className="row form-wrapper">
        <form onSubmit={this.handleSubmit}>
          <div className="col-md-6 col-sm-6 col-xs-12 form-inline">
            <div className="form-group">
              <label htmlFor="firstName">First Name: </label>
              <input type="text" maxLength="10" className="form-control" value={this.state.firstName} name="firstName" onChange={this.handleChange} required />
            </div>
          </div>
          <div className="col-md-6 col-sm-6 col-xs-12 form-inline">
            <div className="form-group">
              <label>Last Name: </label>
              <input type="text" maxLength="12" className="form-control" value={this.state.lastName} name="lastName" onChange={this.handleChange} required />
            </div>
          </div>
          <div className="col-md-6 col-sm-6 col-xs-12 form-inline">
            <div className="form-group">
              <label>Avatar Url: </label>
              <input type="text" maxLength="20" className="form-control" value={this.state.avatarUrl} name="avatarUrl" onChange={this.handleChange} required />
            </div>
          </div>
          <div className="col-md-6 col-sm-6 col-xs-12 form-inline">
            <div className="form-group">
              <label>Email: </label>
              <input type="email" maxLength="20" className="form-control" value={this.state.emailId} name="emailId" onChange={this.handleChange} required />
            </div>
          </div>
          <div className="col-md-6 col-sm-6 col-xs-12 form-inline">
            <div className="form-group">
              <label>Phone: </label>
              <input type="tel" maxLength="10" className="form-control" value={this.state.phone} name="phone" onChange={this.handleChange} required />
            </div>
          </div>
          <div className="col-md-6 col-sm-6 col-xs-12 form-inline">
            <div className="form-group">
              <label>Premium: </label>
              <label className="radio-inline">
                <input type="radio" value="1" name="hasPremium" checked={this.state.hasPremium == 1} onClick={this.handleChange} required /> Yes
              </label>
              <label className="radio-inline">
                <input type="radio" value="0" name="hasPremium" checked={this.state.hasPremium == 0} onClick={this.handleChange} required /> No
              </label>
            </div>
          </div>
          <div className="col-md-12">
            <button type="submit" className="btn btn-primary btn-block">
              <span className="glyphicon glyphicon-plus"></span> SAVE MERCHANT
            </button>
          </div>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedMerchant: state.merchantsState.selectedMerchant
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addMerchant, editMerchant }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AddMerchant);
