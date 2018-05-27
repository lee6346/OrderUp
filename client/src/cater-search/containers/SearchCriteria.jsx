import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateSearch } from '../actions';
import { DISTANCE, PRICE, SORT } from '../constants';
import Select from '../../components/lists/Select';

class SearchCriteria extends Component {
  handleCriteriaChange(key, value) {
    console.log(key, value);
    const { coordinates, ...rest } = this.props.criteria;
    this.props.updateSearch({ ...coordinates, ...rest, [key]: value });
  }

  render() {
    return (
      <div className="row" style={{ padding: '10px 0 10px 0' }}>
        <div className="col-md-4">
          <Select
            items={DISTANCE}
            handleSelectChange={value => {
              this.handleCriteriaChange('distance', value);
            }}
          />
        </div>
        <div className="col-md-4">
          <Select
            items={PRICE}
            handleSelectChange={value => {
              this.handleCriteriaChange('price', value);
            }}
          />
        </div>
        <div className="col-md-4">
          <Select
            items={SORT}
            handleSelectChange={value => {
              this.handleCriteriaChange('sort', value);
            }}
          />
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    criteria: state.caterSearch.criteria,
  };
}
export default connect(mapStateToProps, { updateSearch })(SearchCriteria);
