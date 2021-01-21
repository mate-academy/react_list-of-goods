import React from 'react';
import PropTypes from 'prop-types';

export const ListOfGoods = ({ goodsArr }) => (
  <ul>
    {goodsArr.map(good => (
      <li key={good}>
        {good}
      </li>
    ))}
  </ul>
);

ListOfGoods.propTypes = {
  goodsArr: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};
