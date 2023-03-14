import React from 'react';
import { Good } from '../../types/Good';
import { GoodsItem } from '../GoodsItem';

type Props = {
  goods: Good[],
};

export const GoodsList: React.FC<Props> = ({ goods }) => {
  return (
    <ul>
      {goods.map(good => (
        <GoodsItem good={good} />
      ))}
    </ul>
  );
};
