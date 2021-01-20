import React from 'react';
import PropTypes from 'prop-types';

import './GoodsList.css';

export const GoodsList = ({ products }) => (
  <ul className="GoodsList">
    {products.map(product => (
      <li key={product} className="GoodsList__item cell">
        {product}
        {`(${product.length})`}
      </li>
    ))}
  </ul>
);

GoodsList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.string).isRequired,
};
