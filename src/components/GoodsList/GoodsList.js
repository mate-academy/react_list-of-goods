import React from 'react';
import PropTypes from 'prop-types';
import './GoodsList.scss';

import { Good } from '../Good';
import { GoodsListShape } from '../shapes/GoodsListShape';

export const GoodsList = React.memo(({ goods }) => (
  <ul className="goods-list">
    {goods.map(good => (
      <Good
        good={good}
        key={good.id}
      />
    ))}
  </ul>
));

GoodsList.propTypes = PropTypes.shape(GoodsListShape).isRequired;
