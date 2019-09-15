import React from 'react';
import PropTypes from 'prop-types';
import './Goods.css';
import Good from './components/Good';

const Goods = ({ goods }) => (
  <ul className="goods__list list-group">
    {goods.map(good => (
      <Good key={good} good={good} />
    ))}
  </ul>
);

Goods.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default Goods;
