import React from 'react';
import PropTypes from 'prop-types';

const ProductList = ({ products }) => (
  <ul>
    {products.map(product => (
      <li key={product}>
        {product}
      </li>
    ))}
  </ul>
);

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ProductList;
