import React from 'react';
import PropTypes from 'prop-types';

import './goodsList.scss';

export const GoodsList = ({ goods }) => (
  <ul className="goodsList">
    {goods.map(product => (
      <li key={product} className="goodsList__item">
        {product}
      </li>
    ))}
  </ul>
);

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};
