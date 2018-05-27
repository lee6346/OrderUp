import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GoogleApiWrapper } from 'google-maps-react';
import GoogleMap from '../components/GoogleMap';
class CaterMap extends Component {
  render() {
    return (
      <div className="map-container">
        <GoogleMap coordinates={this.props.coordinates} google={this.props.google} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    coordinates: state.caterSearch.coordinates,
  };
}

export default connect(mapStateToProps)(
  GoogleApiWrapper({
    apiKey: 'AIzaSyBJbc5XQaPeA7iPrHQMk8Rx1Ox3YaKadq4',
  })(CaterMap)
);
