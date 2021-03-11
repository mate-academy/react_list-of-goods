import PropTypes from 'prop-types';

import React from 'react';
import { Goods } from '../Goods';

export function GoodsList({ goodsList }) {
  return (
    <ul>
      {goodsList.map(goods => (
        <Goods key={goods} goods={goods} />
      ))}
    </ul>
  );
}

GoodsList.propTypes = {
  goodsList: PropTypes.arrayOf(PropTypes.string.isRequired),
}.isRequired;
