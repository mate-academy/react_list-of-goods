import React from 'react';
import PropTypes from 'prop-types';

export const GoodsList = ({ goods }) => (
  <ul className="products__list">
    {goods.map(product => (
      <li key={product} className="products__item">
        {product}
      </li>
    ))}
  </ul>
);

GoodsList.propTypes = {
  goods: PropTypes.instanceOf(Array).isRequired,
};
