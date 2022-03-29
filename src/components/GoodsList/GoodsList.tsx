import React from 'react';
import { GoodsItem } from '../GoodsItem/GoodsItem';

import './GoodsList.scss';

type Props = {
  goods: string[],
};

export const GoodsList: React.FC<Props> = React.memo(
  ({ goods }) => (
    <ul className="Goods__list">
      {goods.map(good => (
        <GoodsItem good={good} key={good} />
      ))}
    </ul>
  ),
);
