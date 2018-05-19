import React, { Component } from 'react';
import { connect } from 'react-redux';
import { retrieveMenus } from '../../actions/menu';
import Paginator from './Paginator';
import MenuList from '../../components/menu/MenuList';

class MenuIndex extends Component {
  onChangePage(change) {
    const { menu: { offset, limit, total }, geocoordinates, criteria } = this.props;
    if ((offset === 0 && change === -10) || (offset + limit > total && change === 10)) return;
    this.props.retrieveMenus({ offset: offset + change, limit, ...geocoordinates, ...criteria });
  }

  render() {
    const { offset, limit, total, menus } = this.props.menu;
    return (
      <div>
        <MenuList menus={menus} />
        {menus.length === 0 ? null : <Paginator />}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    menu: state.menu,
    geocoordinates: state.geocoordinates,
    criteria: state.criteria,
  };
}
export default connect(mapStateToProps, { retrieveMenus })(MenuIndex);
