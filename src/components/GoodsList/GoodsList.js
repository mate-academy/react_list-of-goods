import React from 'react';
import PropTypes from 'prop-types';
import { GoodItem } from '../GoodItem/GoodItem';
import './GoodsList.css';

export const GoodsList = ({ goods }) => (
  <ul className="goods-list">
    {goods.map(good => (
      <GoodItem key={good} good={good} />
    ))}
  </ul>
);

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string),
};

GoodsList.defaultProps = {
  goods: [],
};
