import React, { Component } from 'react';
import { connect } from 'react-redux';
import GoogleApiComponent from '../wrappers/GoogleApiComponent';
import CaterMap from '../../components/map/CaterMap';

class CaterMapContainer extends Component {
  render() {
    return (
      <div>
        <CaterMap />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    coordinates: state.geocoordinates,
  };
}

export default connect(mapStateToProps)(
  GoogleApiComponent({
    apiKey: 'AIzaSyBJbc5XQaPeA7iPrHQMk8Rx1Ox3YaKadq4',
  })(CaterMapContainer)
);
