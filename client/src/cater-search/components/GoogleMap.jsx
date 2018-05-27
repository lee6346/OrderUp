import React, { Component, ReactDOM } from 'react';

class GoogleMap extends Component {
  componentDidUpdate(prevProps, prevState) {
    this.loadMap();
    /*
    if (prevProps.google !== this.props.google) {
      this.loadMap();
    }*/
  }

  loadMap() {
    const { coordinates, google } = this.props;
    if (coordinates && google) {
      const mapRef = this.refs.map;
      const node = ReactDOM.findDOMNode(mapRef);
      const center = new google.maps.LatLng(coordinates.lat, coordinates.lng);
      this.map = new google.maps.Map(node, { center, zoom: 14 });
    }
  }
  render() {
    //window.scrollTo(0, document.body.scrollHeight);
    return (
      <div ref="map" className="google-map" style={{ width: '400px', height: '400px' }}>
        Loading Map
      </div>
    );
  }
}

export default GoogleMap;
