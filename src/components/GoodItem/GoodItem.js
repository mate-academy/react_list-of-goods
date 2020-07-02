import React from 'react';
import PropTypes from 'prop-types';

const GoodItem = ({ product }) => (
  <li
    key={product}
    className="list-group-item font-weight-bold"
  >
    {product}
  </li>
);

export { GoodItem };

GoodItem.propTypes = {
  product: PropTypes.string.isRequired,
};
