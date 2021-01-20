import React from 'react';
import PropTypes from 'prop-types';
import './GoodsList.scss';

export const GoodsList = ({ goodsList }) => (
  <ul className="goods-list">
    {goodsList.map(good => (
      <li key={good} className="goods-list__item">
        {good}
      </li>
    ))}
  </ul>
);

GoodsList.propTypes = {
  goodsList: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};
