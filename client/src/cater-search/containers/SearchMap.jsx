import React, { Component } from 'react';
import { connect } from 'react-redux';
import GoogleMapWrapper from './GoogleMapWrapper';

class SearchMap extends Component {
  render() {
    return <div>Bleh</div>;
  }
}

function mapStateToProps(state) {
  return {
    coordinates: state.geocoordinates,
  };
}

export default connect(mapStateToProps)(
  GoogleMapWrapper({
    apiKey: 'AIzaSyBJbc5XQaPeA7iPrHQMk8Rx1Ox3YaKadq4',
  })(SearchMap)
);
