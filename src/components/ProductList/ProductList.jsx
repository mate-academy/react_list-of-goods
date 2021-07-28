import React from 'react';
import './ProductList.css';
import PropTypes from 'prop-types';

export const ProductList = React.memo(
  ({ productList }) => (
    <ul className="Productlist">
      {productList.map(product => (
        <li
          className="Productlist__item"
          key={product}
        >
          {product}
        </li>
      ))}
    </ul>
  ),
);

ProductList.propTypes = {
  productList: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
};
