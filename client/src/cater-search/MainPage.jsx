import React, { Component } from 'react';
import Search from './containers/Search';
import SearchIndex from './containers/SearchIndex';

class MainPage extends Component {
  render() {
    return (
      <div>
        <Search />
        <SearchIndex />
      </div>
    );
  }
}

export default MainPage;
