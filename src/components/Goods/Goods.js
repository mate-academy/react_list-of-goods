import React from 'react';
import PropTypes from 'prop-types';
import './Goods.scss';
import uuid from 'uuid';

export const Goods = ({ goods }) => (
  <ul className="list">
    {goods.map(item => <li key={uuid.v4()} className="list__item">{item}</li>)}
  </ul>
);

Goods.propTypes = {
  goods: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
};
