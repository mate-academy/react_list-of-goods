import React from 'react';
import PropTypes from 'prop-types';

export const GoodsList = ({ goods }) => (
  <ul className="goods">
    {goods.map(good => (
      <li className="good" key={good}>
        {good}
      </li>
    ))}
  </ul>
);

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
};
