import React from 'react';
import PropTypes from 'prop-types';

export const Goods = ({ goods }) => (
  <ul className="goods-list">
    {goods.map(good => (
      <li className="goods-list__item" key={good}>
        {good}
      </li>
    ))}
  </ul>
);

Goods.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string.isRequired),
};

Goods.defaultProps = [];
