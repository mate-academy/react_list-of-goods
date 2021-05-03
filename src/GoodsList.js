import React from 'react';
import PropTypes from 'prop-types';

const GoodsList = ({ products, isNotVisible }) => (
  <ul className="goods_list" hidden={isNotVisible}>
    {products.map(product => (
      <li key={product}>
        {product}
      </li>
    ))}
  </ul>
);

GoodsList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  isNotVisible: PropTypes.bool.isRequired,
};

export default GoodsList;
