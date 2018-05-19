import React, { Component } from 'react';
import './map.css';

class CaterMap extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 map-sizing" ref="map" />
      </div>
    );
  }
}

export default CaterMap;
