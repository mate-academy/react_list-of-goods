import React from 'react';
import PropTypes from 'prop-types';

export const GoodList = ({ goods }) => (
  <div className="container">
    <h1>Goods</h1>
    <ul>
      {goods.map(good => (
        <li key={good}>
          {good}
        </li>
      ))}
    </ul>
  </div>
);

GoodList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};
