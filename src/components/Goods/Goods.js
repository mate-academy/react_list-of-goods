import React from 'react';
import './Goods.css';
import PropTypes from 'prop-types';

const Goods = ({ currentData }) => (
  <ul className="goods-list">
    {currentData.map(good => (
      <li key={good} className="goods-list__item">{good}</li>
    ))}
  </ul>
);

Goods.propTypes = {
  currentData: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
};

export default Goods;
