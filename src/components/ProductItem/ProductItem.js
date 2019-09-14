import React from 'react';
import PropTypes from 'prop-types';

function ProductItem({ productItem }) {
  return <li className="product-item">{productItem}</li>;
}

ProductItem.propTypes = {
  productItem: PropTypes.string,
};

ProductItem.defaultProps = {
  productItem: '',
};

export default ProductItem;
