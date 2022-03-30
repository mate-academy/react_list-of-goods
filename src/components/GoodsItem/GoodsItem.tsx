import React from 'react';

type Props = {
  good: string,
};

export const GoodsItem: React.FC<Props> = React.memo(
  ({ good }) => (
    <li className="Goods__item">
      {good}
    </li>
  ),
);
