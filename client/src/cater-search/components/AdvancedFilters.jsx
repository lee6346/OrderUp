import React from 'react';
import { DISTANCE, PRICE, SORT } from '../constants';
import Select from '../../components/lists/Select';

const AdvancedFilters = props => {
  return (
    <div className="row">
      <div className="col">
        <Select items={DISTANCE} handleSelectChange={props.handleDistanceChange} className="form-control" />
      </div>
      <div className="col">
        <Select items={PRICE} handleSelectChange={props.handlePriceChange} className="form-control" />
      </div>
      <div className="col">
        <Select items={SORT} handleSelectChange={props.handleSortChange} className="form-control" />
      </div>
    </div>
  );
};

export default AdvancedFilters;
