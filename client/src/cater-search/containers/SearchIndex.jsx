import React, { Component } from 'react';
import { connect } from 'react-redux';
import { retrieveMenus } from '../actions/menus';
import Menu from '../components/Menu';
import { PaginateButtons } from '../../components/buttons';

class SearchIndex extends Component {
  handlePageChange(direction) {
    const { menus: { offset, limit, total }, coordinates, filters } = this.props;

    if (direction * limit + offset < 0) {
    } else if (direction === 1 && offset + limit > total) {
    } else {
      this.props.retrieveMenus({ offset: offset + direction * limit, limit, ...coordinates, ...filters });
    }
  }

  render() {
    const { offset, limit, total, menus } = this.props.menus;
    return (
      <div>
        <ul>{menus.map((menu, index) => <Menu key={index} menu={menu} />)}</ul>
        {menus ? (
          <PaginateButtons
            handleButtonClick={this.handlePageChange.bind(this)}
            currentPage={Math.floor(offset / limit) + 1}
            totalPages={Math.ceil(total / limit)}
            className=""
          />
        ) : null}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    menus: state.caterSearch.menus,
    coordinates: state.caterSearch.coordinates,
    filters: state.caterSearch.filters,
  };
}
export default connect(mapStateToProps, { retrieveMenus })(SearchIndex);
