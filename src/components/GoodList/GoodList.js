import React from 'react';
import './GoodList.css';
import PropTypes from 'prop-types';
import { Good } from '../Good/Good';

export const GoodList = props => (
  <ul className="goods">
    {props.children.map(good => (
      <Good key={good.id}>{good.title}</Good>
    ))}
  </ul>
);

GoodList.propTypes = {
  children: PropTypes.arrayOf({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};
