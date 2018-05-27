import React, { Component } from 'react';
import LocationSearch from './containers/LocationSearch';
import SearchCriteria from './containers/SearchCriteria';
import SearchIndex from './containers/SearchIndex';
import CaterMap from './containers/CaterMap';
class MainPage extends Component {
  render() {
    return (
      <div>
        <LocationSearch />
        <div className="row">
          <div className="col-md-6">
            <SearchCriteria />
          </div>
        </div>

        <SearchIndex />
      </div>
    );
  }
}

export default MainPage;
