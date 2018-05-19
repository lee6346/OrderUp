import React, { Component } from 'react';
import { connect } from 'react-redux';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { retrieveMenus } from '../../actions/menu';

class Paginator extends Component {
  changePage(changeCount) {
    const { limit, offset, total, retrieveMenus, geocoordinates, criteria } = this.props;
    if (!(offset === 0 && changeCount === -10) || (offset + limit > total && changeCount === 10)) {
      retrieveMenus({
        offset: offset + changeCount,
        limit,
        ...criteria,
        ...geocoordinates,
      });
    }
  }

  pagingEnable(forward) {
    const { offset, limit, total } = this.props;
    let disabled = (offset === 0 && !forward) || (offset + limit > total && forward);
    return disabled ? 'disabled' : '';
  }

  pageDirection(forward = true) {
    const { limit } = this.props;
    let count = forward ? limit : -limit;
    return (
      <li className={this.pagingEnable(forward)}>
        <a onClick={() => this.changePage(count)}>
          <FontAwesomeIcon icon={forward ? 'angle-right' : 'angle-left'} size="lg" />
        </a>
      </li>
    );
  }

  render() {
    const { offset } = this.props;
    return (
      <div>
        <ul className="pagination">
          {this.pageDirection(false)}
          <li>
            <a>
              {offset} - {offset + 9}
            </a>
          </li>
          {this.pageDirection(true)}
        </ul>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    offset: state.menu.offset,
    limit: state.menu.limit,
    total: state.menu.total,
    geocoordinates: state.geocoordinates,
    criteria: state.criteria,
  };
}

export default connect(mapStateToProps, { retrieveMenus })(Paginator);
