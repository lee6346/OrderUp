import React from 'react';
import { Link } from 'react-router-dom';

export const routerLink = (to, content, style) => (
  <Link to={to} className={style}>
    {content}
  </Link>
);

export const createOption = option => (
  <option key={option.value} value={option.value}>
    {option.content}
  </option>
);

export const selectOptions = options => options.map(createOption);
