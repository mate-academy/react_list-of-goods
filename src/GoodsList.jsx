import React from 'react';
import PropTypes from 'prop-types';

export const GoodsList = ({ visibleGoods }) => (
  <ul>
    {visibleGoods.map(good => (
      <li key={good}>
        {good}
      </li>
    ))}
  </ul>
);

GoodsList.propTypes = {
  visibleGoods: PropTypes.arrayOf(PropTypes.String).isRequired,
};
