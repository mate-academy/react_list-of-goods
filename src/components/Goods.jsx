import React from 'react';
import PropTypes from 'prop-types';

export const Goods = ({ goods }) => (
  <ul className="goods-list">
    {

       [...goods].map(good => (
         <li key={good}>
           {' '}
           {good}
           {' '}
         </li>
       ))
      }
  </ul>
);

Goods.propTypes = {
  goods: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
};
