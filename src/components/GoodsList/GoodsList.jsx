import React from 'react';
import PropTypes from 'prop-types';

import './goodsList.css';

export const GoodsList = ({ goods }) => (
  <ul className="goods-list">
    {goods.map(good => (
      <li
        className="goods-list__item"
        key={good}
      >
        {good}
      </li>
    ))}
  </ul>
);

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
};
