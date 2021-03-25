import './App.css';
import React from 'react';
import PropTypes from 'prop-types';

export const GoodsList = ({ goods }) => (
  <div className="goodsBlock">
    <ul>
      {goods.map(item => (
        <li key={item}>
          {item}
        </li>
      ))}
    </ul>
  </div>
);

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
};
