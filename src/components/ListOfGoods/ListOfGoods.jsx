
import React from 'react';
import PropTypes from 'prop-types';

export const ListOfGoods = ({ goods }) => (
  <ul>
    {goods.map(good => (
      <li key={good}>
        {good}
      </li>
    ))}
  </ul>
);

ListOfGoods.propTypes = {
  goods: PropTypes.arrayOf(
    PropTypes.string,
  ),
};

ListOfGoods.defaultProps = {
  goods: [],
};
