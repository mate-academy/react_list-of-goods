import React from 'react';
import { Good } from '../../types/Good';

type Props = {
  good: Good,
};

export const GoodsItem: React.FC<Props> = ({ good }) => {
  return (
    <li
      key={good}
      data-cy="Good"
    >
      {good}
    </li>
  );
};
