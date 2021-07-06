import React from 'react';
import PropTypes from 'prop-types';

export const GoodsItem = ({ goods }) => (
  <>
    {goods.map(good => (
      <li key={good}>
        {good}
      </li>
    ))}
  </>
);

GoodsItem.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
};
