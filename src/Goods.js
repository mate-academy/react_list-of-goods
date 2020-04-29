import React from 'react';
import PropTypes from 'prop-types';

const Goods = ({ goods, filterLength }) => (
  <ul>
    {goods
      .filter(good => good.length >= filterLength)
      .map(good => (
        <li key={good}>
          {good}
        </li>
      ))}
  </ul>
);

export default Goods;
Goods.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
  filterLength: PropTypes.number.isRequired,
};
