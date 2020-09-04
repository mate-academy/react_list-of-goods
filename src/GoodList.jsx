import React from 'react';
import PropTypes from 'prop-types';

export const GoodList = ({ goods }) => (
  <ul className="good-list">
    {goods.map(good => (
      <li
        key={good}
        className="good-item"
      >
        {good}
      </li>
    ))}
  </ul>
);

GoodList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
};
