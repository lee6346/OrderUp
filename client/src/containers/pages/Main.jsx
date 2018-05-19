import React, { Component } from 'react';
import { connect } from 'react-redux';
import { retrieveMenus } from '../../actions/menu';
import Search from '../forms/Search';
import FilterSortPanel from '../features/FilterSortPanel';
import MenuIndex from '../features/MenuIndex';

class Main extends Component {
  componentDidMount() {
    if (this.props.authenticated) {
      this.props.retrieveMenus({
        ...this.props.geocoordinates,
        ...this.props.criteria,
      });
    }
  }
  render() {
    return (
      <div>
        <Search />
        <FilterSortPanel />
        <MenuIndex />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    authenticated: state.account.authenticated,
    geocoordinates: state.geocoordinates,
    criteria: state.criteria,
  };
}

export default connect(mapStateToProps, { retrieveMenus })(Main);
