import React from 'react';
import PropTypes from 'prop-types';
import uuidv4 from 'uuid/v4';

import './Goods.css';

const Goods = ({ goods }) => (
  <ul className="list">
    {goods.map(good => (
      <li key={uuidv4()}>
        {good}
      </li>
    ))}
  </ul>
);

Goods.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default Goods;
