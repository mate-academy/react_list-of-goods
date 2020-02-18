import React from 'react';
import PropTypes from 'prop-types';

export const Goods = ({ goods }) => (
  <ul className="menu-list">
    {goods.map(good => <li key={good} className="title is-6">{good}</li>)}
  </ul>
);

Goods.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
};
