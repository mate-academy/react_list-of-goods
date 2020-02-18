import React from 'react';
import PropTypes from 'prop-types';

import './Goods.css';

const Goods = ({ goods }) => (
  <ul className="list">
    {goods.map(good => (
      <li key={good}>
        {good}
      </li>
    ))}
  </ul>
);

Goods.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default Goods;
