import React from 'react';
import { DISTANCE, PRICE, SORT } from '../constants';
import Select from '../../components/lists/Select';

const AdvancedFilters = props => {
  return (
    <div className="row" style={{ padding: '0 30px 0 30px' }}>
      <div className="col-md-4">
        <Select items={DISTANCE} handleSelectChange={props.handleDistanceChange} />
      </div>
      <div className="col-md-4">
        <Select items={PRICE} handleSelectChange={props.handlePriceChange} />
      </div>
      <div className="col-md-4">
        <Select items={SORT} handleSelectChange={props.handleSortChange} />
      </div>
    </div>
  );
};

export default AdvancedFilters;
