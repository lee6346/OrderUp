import React from 'react';
import { FOOD_CATEGORY as categories } from '../constants';

const categoryStyle = {
  borderRight: '1px solid #ddd',
  padding: '0 10px',
  cursor: 'default',
};

const MenuCatories = props => {
  return (
    <div>
      {categories.map(category => (
        <span style={categoryStyle} key={category.key}>
          <a
            onClick={() => {
              props.handleCategoryClick(category.value);
            }}
          >
            {category.content}
          </a>
        </span>
      ))}
    </div>
  );
};

export default MenuCatories;
