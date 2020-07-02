import React from 'react';
import PropTypes from 'prop-types';

const RenderGoods = ({ goods }) => (
  <ul className="goodsList__items">
    {[...goods].map(good => (
      <li key={good}>
        {good}
      </li>
    ))}
  </ul>
);

export default RenderGoods;

RenderGoods.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
};
