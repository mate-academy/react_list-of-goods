import React from 'react';
import PropTypes from 'prop-types';

export const GoodList = ({ goods }) => (
  <ul className="goods-list">
    {goods.map(item => (
      <li className="goods-list__item" key={item}>{item}</li>
    ))}
  </ul>
);

GoodList.propTypes = {
  goods: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
};
