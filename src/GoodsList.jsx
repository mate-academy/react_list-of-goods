import React from 'react';
import PropTypes from 'prop-types';

export const GoodsList = ({ listOfGoods }) => (
  <ul>
    {listOfGoods.map(({ product, id }) => (
      <li key={id}>
        {product}
      </li>
    ))}
  </ul>
);

GoodsList.propTypes = {
  listOfGoods: PropTypes.arrayOf(
    PropTypes.shape({
      product: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
