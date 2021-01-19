import React from 'react';
import PropTypes from 'prop-types';

import { prepearedGoodsShape } from '../shapes/prepearedGoodsShape';

export const GoodList = ({ goods }) => (
  <ul>
    {
      goods.map(good => (
        <li key={good.id}>{good.name}</li>
      ))
    }
  </ul>
);

GoodList.propTypes = {
  goods: PropTypes.arrayOf(prepearedGoodsShape).isRequired,
};
