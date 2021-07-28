import React from 'react';
import PropTypes from 'prop-types';
import { Good } from './Good';

export const GoodsList = React.memo(
  ({ products }) => (
    <ul>
      {products.map(product => <Good good={product} />)}
    </ul>
  ),
);

GoodsList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.string).isRequired,
};
