import React from 'react';
import PropTypes from 'prop-types';

const Product = ({ product }) => <li>{product}</li>;

Product.propTypes = {
  product: PropTypes.string.isRequired,
};

export default Product;
