import React from 'react';
import { ListType } from '../types';

export const List = ({ goods }) => (
  <ul>
    {goods.map(product => (
      <li key={product}>
        {product}
      </li>
    ))}
  </ul>
);

List.propTypes = ListType;
