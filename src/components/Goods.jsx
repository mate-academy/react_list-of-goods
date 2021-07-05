import React from 'react';
import PropTypes from 'prop-types';

export const Goods = React.memo(
  ({ goods, length }) => (
    <ul>
      {goods
        .filter(product => product.length >= length)
        .map(product => (
          <li key={product}>{product}</li>
        ))}
    </ul>
  ),
);

Goods.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  length: PropTypes.number.isRequired,
};
