import React from 'react';
import PropTypes from 'prop-types';

export const ProductList = ({ goods }) => (
  <ul>
    {goods.map(good => (
      <li className="box is-size-3" key={good}>
        {good}
      </li>
    ))}
  </ul>
);

ProductList.propTypes = {
  goods: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
};
