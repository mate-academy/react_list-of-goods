import React from 'react';
import PropTypes from 'prop-types';

import GoodItem from './GoodItem';

const GoodsList = ({ goodsList }) => (
  <ul className="goods__list">
    {goodsList.map(item => <GoodItem key={item} goodName={item} />)}
  </ul>
);

GoodsList.propTypes = {
  goodsList: PropTypes.arrayOf(
    PropTypes.string
  ).isRequired,
};

export default GoodsList;
