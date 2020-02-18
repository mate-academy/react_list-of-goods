import React from 'react';
import PropTypes from 'prop-types';
import './GoodsList.css';
import { GoodsItem } from '../GoodsItem/GoodsItem';

export const GoodsList = ({ goods }) => (
  <ul className="list-group">
    {goods.map(good => <GoodsItem good={good} key={good} />)}
  </ul>
);

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string),
};

GoodsList.defaultProps = {
  goods: [],
};
