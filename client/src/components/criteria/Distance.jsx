import React from 'react';
import { DISTANCE } from '../../constants/constants';
import { selectOptions } from '../helpers/elementGenerators';

const Distance = props => {
  const defaultVal = props.distance || (
    <option key="default" value="default">
      Within
    </option>
  );

  return (
    <select className="form-control" onChange={e => props.onDistanceChange(e.target.value)} defaultValue="default">
      {defaultVal}
      {selectOptions(DISTANCE.map(range => ({ value: range, content: `${range} miles` })))}
    </select>
  );
};

export default Distance;
