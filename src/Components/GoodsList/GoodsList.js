import React from 'react';
import PropTypes from 'prop-types';
import { Good } from '../Good/Good';

export const GoodsList = ({ goods }) => (
  <>
    <ul>
      {goods.map(good => (
        <Good good={good} />
      ))}
    </ul>
  </>
);

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
};
