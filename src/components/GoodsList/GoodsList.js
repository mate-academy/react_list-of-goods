import React from 'react';
import './GoodsList.css';
import PropTypes from 'prop-types';

export const GoodsList = ({ goods }) => (
  <ul>
    {goods.map(good => (
      <li
        key={good}
      >
        {good}
      </li>
    ))}
  </ul>
);

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(
    PropTypes.shape({
      good: PropTypes.string.isRequired,
    }),
  ),
};

GoodsList.defaultProps = {
  goods: [],
};
