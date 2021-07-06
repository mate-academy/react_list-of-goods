import React from 'react';
import PropTypes from 'prop-types';

export const GoodsItem = ({ goodsList }) => (
  <>
    {goodsList.map(good => (
      <li key={good}>
        {good}
      </li>
    ))}
  </>
);

GoodsItem.propTypes = {
  goodsList: PropTypes.arrayOf(PropTypes.string).isRequired,
};
