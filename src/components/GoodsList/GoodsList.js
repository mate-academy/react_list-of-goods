import React from 'react';
import PropTypes from 'prop-types';

export const GoodsList = ({ goodsList }) => (
  <div>
    <ul>
      {goodsList.map(product => (
        <li key={product}>{product}</li>
      ))}
    </ul>
  </div>
);

GoodsList.propTypes = {
  goodsList: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
};
