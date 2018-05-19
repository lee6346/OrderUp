import React, { Component } from 'react';
import { SORT } from '../../constants/constants';

class SortBy extends Component {
  renderSortOptions() {
    return SORT.map(sortItem => {
      return (
        <option key={sortItem} value={sortItem}>
          {sortItem}
        </option>
      );
    });
  }

  handleOnSelect(e) {
    const { target: { value } } = e;
    this.props.onSortChange(value);
  }
  render() {
    return (
      <div>
        <select className="form-control" onChange={this.handleOnSelect.bind(this)}>
          {this.renderSortOptions()}
        </select>
      </div>
    );
  }
}

export default SortBy;
