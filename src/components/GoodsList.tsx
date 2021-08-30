import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Props } from '../types/goodsList/Props';
import { Good } from '../types/goodsList/Good';

export const GoodsList: React.FC<Props> = ({ goods }) => {
  const visualizedGoods = goods
    .map((good: string) => {
      return {
        name: good,
        id: uuidv4(),
      };
    });

  return (
    <ul>
      {visualizedGoods.map((good: Good) => (
        <li key={good.id}>
          {good.name}
        </li>
      ))}
    </ul>
  );
};
