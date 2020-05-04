import React from 'react';
import PropTypes from 'prop-types';

export const GoodsItem = ({ good }) => (
  <li className="goods-list__item" key={good}>
    {good}
  </li>
);

GoodsItem.propTypes = {
  good: PropTypes.string.isRequired,
};
