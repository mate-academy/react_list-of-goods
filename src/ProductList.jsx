import React from 'react';
import PropTypes from 'prop-types';

export const ProductList = ({ goods }) => (
  <ul className="list">
    { goods.map(product => (
      <li
        key={product}
        className="list__product"
      >
        { product }
      </li>
    )) }
  </ul>
);

ProductList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
};
