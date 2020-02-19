import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';

export const GoodList = ({ goods }) => (
  <ul className="goods-list">
    {goods.map(item => (
      <li className="goods-list__item" key={uuid()}>{item}</li>
    ))}
  </ul>
);

GoodList.propTypes = {
  goods: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
};
