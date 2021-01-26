import React from 'react';
import PropTypes from 'prop-types';

export const GoodsList = ({ goodsList }) => (
  <ul>
    {goodsList.map(good => (
      <li key={good}>
        {good}
      </li>
    ))}
  </ul>
);

GoodsList.propTypes = {
  goodsList: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};
