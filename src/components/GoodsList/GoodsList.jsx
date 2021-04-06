import React from 'react';
import PropTypes, { string } from 'prop-types';

import './goodsList.css';

export const GoodsList = ({ goods }) => (
  <ul className="products__list">
    {
      goods.map(good => (
        <li
          className="products__item"
          key={good}
        >
          {good}
        </li>
      ))
    }
  </ul>
);

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(string).isRequired,
};
