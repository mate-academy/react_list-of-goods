import React from 'react';
import './GoodsList.css';
import PropTypes from 'prop-types';
import { Good } from '../Good/Good';

export const GoodsList = ({ goods }) => (
  <div className="sorting__list">
    <ul className="sorting__list ul">
      {goods.map(good => (
        <Good good={good} key={good} />
      ))}
    </ul>
  </div>
);

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
};
