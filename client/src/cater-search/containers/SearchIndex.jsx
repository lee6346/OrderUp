import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateSearch, changeMenuPage } from '../actions';
import MenuList from '../components/MenuList';
import MenuCategories from '../components/MenuCategories';
import { PaginateButtons } from '../../components/buttons';

class SearchIndex extends Component {
  handlePageChange(direction) {
    const { results: { offset, limit, total }, criteria: { coordinates, ...rest } } = this.props;
    if (!(direction * limit + offset < 0) && !(direction === 1 && offset + limit > total)) {
      const newOffset = offset + direction * limit;
      this.props.changeMenuPage({ offset: newOffset, limit, ...coordinates, ...rest });
    }
  }
  changeMenuCategory(val) {
    console.log(val);
    const { coordinates, ...rest } = this.props.criteria;
    this.props.updateSearch({ ...coordinates, ...rest, category: val });
  }

  render() {
    const { offset, limit, total, menus } = this.props.results;
    const { category } = this.props.criteria;
    return (
      <div>
        <MenuCategories handleCategoryClick={this.changeMenuCategory.bind(this)} selectedCategory={category} />
        <MenuList menus={menus} />

        <PaginateButtons
          handleButtonClick={this.handlePageChange.bind(this)}
          currentPage={Math.floor(offset / limit) + 1}
          totalPages={Math.ceil(total / limit)}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    results: state.caterSearch.results,
    criteria: state.caterSearch.criteria,
  };
}
export default connect(mapStateToProps, { updateSearch, changeMenuPage })(SearchIndex);
