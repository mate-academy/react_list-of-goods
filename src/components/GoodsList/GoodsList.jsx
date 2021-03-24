import React from 'react';
import PropTypes from 'prop-types';
import './GoodsList.css';

export const GoodsList = ({ goods }) => (
  <ul className="goods__list">
    {goods.map(good => (
      <li key={good}>
        {good}
      </li>
    ))}
  </ul>
);

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(
    PropTypes.string,
  ),
};

GoodsList.defaultProps = {
  goods: [],
};
