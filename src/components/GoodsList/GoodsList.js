import React from 'react';
import PropTypes from 'prop-types';
import { Good } from '../Good/Good';
import './GoodsList.css';

export const GoodsList = ({ list }) => (
  <ul className="list">
    {list.map(good => (
      <li className="list__item">
        <Good good={good} />
      </li>
    ))}
  </ul>
);

GoodsList.propTypes = {
  list: PropTypes.arrayOf([]).isRequired,
};
