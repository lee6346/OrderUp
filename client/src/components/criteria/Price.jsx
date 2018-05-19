import React from 'react';
import { PRICE } from '../../constants/constants';
import { selectOptions } from '../helpers/elementGenerators';

const Price = props => {
  const defaultVal = props.price || (
    <option key="default" value="default">
      Price
    </option>
  );

  return (
    <select onChange={e => props.onPriceChange(e.target.value)} className="form-control" defaultValue="default">
      {defaultVal}
      {selectOptions(PRICE.map(price => ({ value: price, content: `$${price} or less` })))}
    </select>
  );
};

export default Price;
