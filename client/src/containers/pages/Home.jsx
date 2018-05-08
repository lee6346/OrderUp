import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadCoordinates } from '../../actions/search';
import MenuImageUpload from '../MenuImageUpload';

class Home extends Component {
  componentDidMount() {
    this.props.loadCoordinates();
  }

  render() {
    return (
      <div>
        <MenuImageUpload />
        {this.props.coordinates ? this.props.coordinates.lat : 'no'}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    coordinates: state.search.coordinates,
  };
}

export default connect(mapStateToProps, { loadCoordinates })(Home);
