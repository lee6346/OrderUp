import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAddressGeocode, useCurrentCoordinates } from '../actions';
import { IconButton } from '../../components/buttons';
import AddressInput from '../components/AddressInput';

class LocationSearch extends Component {
  handleLocationUpdate(event) {
    event.preventDefault();
    const address = event.target.address.value;
    this.props.getAddressGeocode(address, this.props.criteria);
  }
  handleCurrentLocation() {
    this.props.useCurrentCoordinates(this.props.criteria);
  }
  render() {
    return (
      <div className="row">
        <div className="col-md-9">
          <form onSubmit={this.handleLocationUpdate.bind(this)}>
            <AddressInput placeholder="Address" type="submit" name="address" />
          </form>
        </div>
        <div className="col-md-3">
          <IconButton
            icon="location-arrow"
            type="button"
            className="btn"
            text="Current Location"
            handleButtonClick={this.handleCurrentLocation.bind(this)}
          />
        </div>
      </div>
    );
  }
  /*
  render() {
    return (
      <div className="row">
        <div className="col-md-8 input-group mb-3">
          <input type="text" className="form-control" placeholder="Address" onKeyPress={() => {}} />
          <div className="input-group-append">
            <IconButton
              icon="search"
              type="button"
              className="btn"
              text="Search"
              handleButtonClick={this.handleLocationUpdate.bind(this)}
            />
          </div>
        </div>
        <div className="col-md-4">
          <IconButton
            icon="search"
            type="button"
            className="btn"
            text="Current Location"
            handleButtonClick={this.handleCurrentLocation.bind(this)}
          />
        </div>
      </div>
    );
  }
  */
}

function mapStateToProps(state) {
  const { coordinates, ...rest } = state.caterSearch.criteria;
  return {
    criteria: rest,
  };
}
export default connect(null, { getAddressGeocode, useCurrentCoordinates })(LocationSearch);
