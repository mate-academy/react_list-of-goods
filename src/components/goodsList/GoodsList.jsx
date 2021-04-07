import React from 'react';
import PropsTypes from 'prop-types';

export const GoodsList = ({ goods }) => (
  <ul className="list">
    {
      goods.map(product => (
        <li className="list__item" key={product}>
          {product}
        </li>
      ))
    }
  </ul>
);

GoodsList.propTypes = {
  goods: PropsTypes.arrayOf(
    PropsTypes.string.isRequired,
  ).isRequired,
};
