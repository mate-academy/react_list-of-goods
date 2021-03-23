import React from 'react';
import PropTypes from 'prop-types';

export const ListOfGoods = ({ goods }) => (
  <ul>
    {
      goods.map(product => (
        <li key={product}>
          {product}
        </li>
      ))
    }
  </ul>

);

ListOfGoods.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};
