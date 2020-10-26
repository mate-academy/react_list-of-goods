import React from 'react';
import PropTypes from 'prop-types';
import { Good } from '../Good';
import '../../App.scss';

export const GoodList = ({ goods }) => (
  <ul className="App__goodList">
    <h1>Goods</h1>
    {goods.map(good => (
      <li className="App__goodList-item" key={good.index}>
        <Good good={good.title} />
      </li>
    ))}
  </ul>
);

GoodList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
  })).isRequired,
};
