import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setDistance, setPrice, setSort } from '../../actions/criteria';
import Distance from '../../components/criteria/Distance';
import Price from '../../components/criteria/Price';
import SortBy from '../../components/criteria/SortBy';

class FilterSortPanel extends Component {
  handleSortChange(e) {
    console.log(e);
  }

  handleDistanceChange(distance) {
    this.props.setDistance(distance);
  }

  handlePriceChange(price) {
    this.props.setPrice(price);
  }

  render() {
    const { price, distance } = this.props.criteria;
    return (
      <div className="row">
        <div className="col">
          <Distance distance={distance} onDistanceChange={this.handleDistanceChange.bind(this)} />
        </div>
        <div className="col">
          <Price price={price} onPriceChange={this.handlePriceChange.bind(this)} />
        </div>
        <div className="col">
          <SortBy onSortChange={this.handleSortChange} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    criteria: state.criteria,
    geocoordinates: state.geocoordinates,
    offset: state.menu.offset,
    limit: state.menu.limit,
  };
}
export default connect(mapStateToProps, { setDistance, setPrice, setSort })(FilterSortPanel);
