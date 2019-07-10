import React from 'react';
import PropTypes from 'prop-types';
import GoodsInfo from './GoodsInfo';

const GoodsList = ({ goods }) => (
  <ul className="App__goods">
    {goods.map(good => (
      <GoodsInfo good={good} />
    ))}
  </ul>
);

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.shape({
    good: PropTypes.string.isRequired,
  })).isRequired,
};

export default GoodsList;
