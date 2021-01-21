import React from 'react';
import './GoodsList.css';
import PropTypes from 'prop-types';

export const GoodsList = ({ goods }) => (
  <div>
    <ul className="goods-list">
      {goods.map(good => (
        <li className="goods-list__item" key={good}>
          {good}
        </li>
      ))}
    </ul>
  </div>
);

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
};
