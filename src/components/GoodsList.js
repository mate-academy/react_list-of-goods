import React from 'react';
import PropTypes from 'prop-types';
import GoodsItem from './GoodsItem';

export const GoodsList = ({ goods }) => (
  <>
    <ul>
      {goods.map(good => (
        <GoodsItem good={good} key={good} />
      ))}
    </ul>
  </>
);

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
};
