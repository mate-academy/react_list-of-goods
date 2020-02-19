import React from 'react';
import PropTypes from 'prop-types';
import './Goods.scss';

export const Goods = ({ goods }) => (
  <ul className="list">
    {goods.map(item => <li key={item} className="list__item">{item}</li>)}
  </ul>
);

Goods.propTypes = {
  goods: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
};
