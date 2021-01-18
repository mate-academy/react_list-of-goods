import React from 'react';
import PropTypes from 'prop-types';
import { Good } from '../Good/Good';

export const GoodsList = ({ goods }) => (
  <>
    {goods.map(good => (
      <Good key={good} good={good} />
    ))}
  </>
);

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};
